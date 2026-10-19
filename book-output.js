'use strict';

// Rendering and archive mechanics stay independent of editor state.
globalThis.KomaBookOutput = (() => {
  const encoder = new TextEncoder();
  const table = Uint32Array.from({length:256}, (_,n) => {
    for(let i=0;i<8;i++) n=(n&1)?0xedb88320^(n>>>1):n>>>1;
    return n>>>0;
  });
  const crc32 = bytes => {
    let value=0xffffffff;
    for(const byte of bytes) value=table[(value^byte)&255]^(value>>>8);
    return (value^0xffffffff)>>>0;
  };
  const header = size => new DataView(new ArrayBuffer(size));
  class ZipWriter {
    constructor(){this.parts=[];this.entries=[];this.offset=0;this.names=new Set();}
    async add(name,blob){
      if(this.names.has(name)||!name||name.includes('..')||name.startsWith('/')||name.includes('\\'))throw new Error('Invalid archive filename.');
      const bytes=encoder.encode(name);
      if(bytes.length>65535||this.entries.length>=65535||blob.size>0xffffffff||this.offset+30+bytes.length+blob.size>0xffffffff)throw new Error('This book is too large for a comic archive.');
      const crc=crc32(new Uint8Array(await blob.arrayBuffer())),local=header(30);
      local.setUint32(0,0x04034b50,true);local.setUint16(4,20,true);local.setUint16(6,0x800,true);
      local.setUint16(12,33,true); // 1980-01-01, valid DOS date.
      local.setUint32(14,crc,true);local.setUint32(18,blob.size,true);local.setUint32(22,blob.size,true);local.setUint16(26,bytes.length,true);
      this.parts.push(local.buffer,bytes,blob);
      this.entries.push({bytes,size:blob.size,crc,offset:this.offset});this.names.add(name);this.offset+=30+bytes.length+blob.size;
    }
    finish(type='application/vnd.comicbook+zip'){
      const central=[];let size=0;
      for(const entry of this.entries){
        const h=header(46);h.setUint32(0,0x02014b50,true);h.setUint16(4,20,true);h.setUint16(6,20,true);h.setUint16(8,0x800,true);h.setUint16(14,33,true);
        h.setUint32(16,entry.crc,true);h.setUint32(20,entry.size,true);h.setUint32(24,entry.size,true);h.setUint16(28,entry.bytes.length,true);h.setUint32(42,entry.offset,true);
        central.push(h.buffer,entry.bytes);size+=46+entry.bytes.length;
      }
      if(this.offset+size+22>0xffffffff)throw new Error('This book is too large for a comic archive.');
      const end=header(22);end.setUint32(0,0x06054b50,true);end.setUint16(8,this.entries.length,true);end.setUint16(10,this.entries.length,true);end.setUint32(12,size,true);end.setUint32(16,this.offset,true);
      return new Blob([...this.parts,...central,end.buffer],{type});
    }
  }
  // ISO 32000-1: JPEG image XObjects, byte-offset cross-reference table,
  // UTF-16BE document title and an optional manga reading-direction preference.
  const pdfText = value => {
    let hex='FEFF';for(let i=0;i<String(value).length;i++)hex+=String(value).charCodeAt(i).toString(16).padStart(4,'0');return '<'+hex+'>';
  };
  class PdfWriter {
    constructor(){this.parts=[encoder.encode('%PDF-1.4\n%'),new Uint8Array([226,227,207,211,10])];this.offset=this.parts.reduce((n,p)=>n+p.byteLength,0);this.offsets=[0];this.pages=[];this.finished=false;}
    append(part){const size=typeof part==='string'?encoder.encode(part).byteLength:part.size??part.byteLength;if(this.offset+size>0xffffffff)throw new Error('This book is too large for a PDF.');this.parts.push(typeof part==='string'?encoder.encode(part):part);this.offset+=size;}
    object(id,content){this.offsets[id]=this.offset;this.append(id+' 0 obj\n'+content+'\nendobj\n');}
    async addJpeg(blob,width,height,paperColor='#ffffff'){
      if(this.finished)throw new Error('This PDF is already complete.');
      if(this.pages.length>=40||!Number.isInteger(width)||!Number.isInteger(height)||width<1||height<1||width>20000||height>20000||blob.type!=='image/jpeg'||blob.size<4||!/^#[0-9a-f]{6}$/i.test(paperColor))throw new Error('Invalid PDF page image.');
      const signature=new Uint8Array(await blob.slice(0,2).arrayBuffer());if(signature[0]!==255||signature[1]!==216)throw new Error('PDF pages must be JPEG images.');
      const pageId=3+this.pages.length*3,imageId=pageId+1,contentId=pageId+2,W=148*72/25.4,H=210*72/25.4,scale=Math.min(W/width,H/height),w=width*scale,h=height*scale;
      const num=n=>Number(n.toFixed(6)),color=[1,3,5].map(i=>num(parseInt(paperColor.slice(i,i+2),16)/255)).join(' ');
      const command=encoder.encode('q\n'+color+' rg\n0 0 '+num(W)+' '+num(H)+' re f\n'+num(w)+' 0 0 '+num(h)+' '+num((W-w)/2)+' '+num((H-h)/2)+' cm\n/Im0 Do\nQ\n');
      this.object(pageId,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 '+num(W)+' '+num(H)+'] /Resources << /XObject << /Im0 '+imageId+' 0 R >> >> /Contents '+contentId+' 0 R >>');
      this.offsets[imageId]=this.offset;this.append(imageId+' 0 obj\n<< /Type /XObject /Subtype /Image /Width '+width+' /Height '+height+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+blob.size+' >>\nstream\n');this.append(blob);this.append('\nendstream\nendobj\n');
      this.offsets[contentId]=this.offset;this.append(contentId+' 0 obj\n<< /Length '+command.byteLength+' >>\nstream\n');this.append(command);this.append('endstream\nendobj\n');this.pages.push(pageId);
    }
    finish({title='',readingDirection='ltr'}={}){
      if(this.finished||!this.pages.length)throw new Error('Cannot complete an empty or finished PDF.');
      this.object(1,'<< /Type /Catalog /Pages 2 0 R /ViewerPreferences << /Direction /'+(readingDirection==='rtl'?'R2L':'L2R')+' >> >>');
      this.object(2,'<< /Type /Pages /Count '+this.pages.length+' /Kids ['+this.pages.map(id=>id+' 0 R').join(' ')+'] >>');
      const infoId=3+this.pages.length*3;this.object(infoId,'<< /Title '+pdfText(title)+' /Creator (Koma Manga Studio) /Producer (Koma offline PDF export) >>');
      const xref=this.offset;this.append('xref\n0 '+this.offsets.length+'\n0000000000 65535 f \n'+this.offsets.slice(1).map(n=>String(n).padStart(10,'0')+' 00000 n \n').join(''));
      this.append('trailer\n<< /Size '+this.offsets.length+' /Root 1 0 R /Info '+infoId+' 0 R >>\nstartxref\n'+xref+'\n%%EOF\n');this.finished=true;return new Blob(this.parts,{type:'application/pdf'});
    }
  }
  function imageBlob(canvas,type='image/png',quality){
    return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('Could not create the page image.')),type,quality));
  }
  const xml = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c])).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g,'');
  function comicInfo(source){
    // ComicInfo 2.0: https://anansi-project.github.io/docs/comicinfo/schemas/v2.0
    return new Blob([`<?xml version="1.0" encoding="utf-8"?>\n<ComicInfo><Title>${xml(source.title)}</Title><PageCount>${source.pages.length}</PageCount><Manga>${source.readingDirection==='rtl'?'YesAndRightToLeft':'Yes'}</Manga></ComicInfo>`],{type:'application/xml'});
  }
  function turnForArrow(key,direction){return key==='ArrowLeft'?(direction==='rtl'?1:-1):key==='ArrowRight'?(direction==='rtl'?-1:1):0;}
  function turnForSwipe(dx,dy,direction){return Math.abs(dx)>=55&&Math.abs(dx)>Math.abs(dy)*1.5?(dx>0?1:-1)*(direction==='rtl'?1:-1):0;}
  return {PdfWriter,ZipWriter,crc32,imageBlob,comicInfo,turnForArrow,turnForSwipe};
})();
