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
  function imageBlob(canvas,type='image/png'){
    return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('Could not create the page image.')),type));
  }
  const xml = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c])).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g,'');
  function comicInfo(source){
    // ComicInfo 2.0: https://anansi-project.github.io/docs/comicinfo/schemas/v2.0
    return new Blob([`<?xml version="1.0" encoding="utf-8"?>\n<ComicInfo><Title>${xml(source.title)}</Title><PageCount>${source.pages.length}</PageCount><Manga>${source.readingDirection==='rtl'?'YesAndRightToLeft':'Yes'}</Manga></ComicInfo>`],{type:'application/xml'});
  }
  function turnForArrow(key,direction){return key==='ArrowLeft'?(direction==='rtl'?1:-1):key==='ArrowRight'?(direction==='rtl'?-1:1):0;}
  function turnForSwipe(dx,dy,direction){return Math.abs(dx)>=55&&Math.abs(dx)>Math.abs(dy)*1.5?(dx>0?1:-1)*(direction==='rtl'?1:-1):0;}
  return {ZipWriter,crc32,imageBlob,comicInfo,turnForArrow,turnForSwipe};
})();
