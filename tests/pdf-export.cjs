// Run with: node tests/pdf-export.cjs. Uses Node standard libraries only.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const output=fs.readFileSync(path.join(__dirname,'../book-output.js'),'utf8');
const core=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,'');
const nodes={};const node=id=>nodes[id]||(nodes[id]={classList:{toggle(){}},showModal(){this.open=true},close(){this.open=false},removeAttribute(k){delete this[k]}});
const c=vm.createContext({assert,console,TextEncoder,Blob,URL,File,setTimeout,window:{},navigator:{},document:{getElementById:node},crypto:require('node:crypto').webcrypto});vm.runInContext(output,c);vm.runInContext(core,c);
vm.runInContext(String.raw`
(async()=>{
 const jpeg=new Blob([new Uint8Array([255,216,255,224,0,4,32,128,255,217])],{type:'image/jpeg'});
 for(const count of [1,2,40])for(const direction of ['rtl','ltr']){
  const writer=new KomaBookOutput.PdfWriter();for(let i=0;i<count;i++)await writer.addJpeg(jpeg,1800,2544,i%2?'#123456':'#fefefc');const blob=writer.finish({title:'Manga 日本語 😀 (book) \\ test',readingDirection:direction}),bytes=new Uint8Array(await blob.arrayBuffer()),text=Buffer.from(bytes).toString('latin1');
  assert.equal(blob.type,'application/pdf');assert(text.startsWith('%PDF-1.4'));assert(text.endsWith('%%EOF\n'));assert(text.includes('/Count '+count+' '));assert(text.includes('/Direction /'+(direction==='rtl'?'R2L':'L2R')));assert(text.includes('/Title <FEFF004d0061006e00670061'));assert.equal((text.match(/\/Subtype \/Image/g)||[]).length,count);assert(text.includes('/MediaBox [0 0 419.527559 595.275591]'));const xref=Number(text.match(/startxref\n(\d+)/)[1]);assert.equal(text.slice(xref,xref+4),'xref');const entries=text.slice(xref).split('\n'),total=Number(entries[1].split(' ')[1]);for(let i=1;i<total;i++){const offset=Number(entries[2+i].slice(0,10));assert(text.slice(offset).startsWith(i+' 0 obj\n'),'wrong byte offset '+i)}assert.throws(()=>writer.finish());await assert.rejects(()=>writer.addJpeg(jpeg,1800,2544));
 }
 console.log('PASS: 1-, 2- and 40-page PDFs have exact binary offsets, A5 pages, JPEG streams, Unicode titles and both reading-direction preferences');
 const empty=new KomaBookOutput.PdfWriter();assert.throws(()=>empty.finish());for(const args of [[jpeg,0,3],[jpeg,1.5,2],[jpeg,2,3,'bad'],[new Blob(['no'],{type:'image/png'}),2,3],[new Blob(['invalid jpeg'],{type:'image/jpeg'}),2,3]])await assert.rejects(()=>empty.addJpeg(...args));
 const full=new KomaBookOutput.PdfWriter();for(let i=0;i<40;i++)await full.addJpeg(jpeg,1,1);await assert.rejects(()=>full.addJpeg(jpeg,1,1));
 let passed;await KomaBookOutput.imageBlob({toBlob:(cb,type,quality)=>{passed={type,quality};cb(jpeg)}},'image/jpeg',.94);assert.equal(passed.type,'image/jpeg');assert.equal(passed.quality,.94);await assert.rejects(()=>KomaBookOutput.imageBlob({toBlob:cb=>cb(null)}));
 console.log('PASS: image errors, bad page dimensions/colors/signatures, empty/reused writers and page limits are rejected; quality reaches the encoder');
 book=initialBook();book.pages=Array.from({length:3},newPage);activePage=0;let renders=[],canvases=[],mode='normal';renderCanvas=async(p,i,source)=>{renders.push(i);if(mode==='render-error')throw new Error('Broken image');if(mode==='cancel')cancelArchive();const canvas={width:1800,height:2544,toBlob:cb=>cb(mode==='encode-error'?null:jpeg)};canvases.push(canvas);return canvas};
 const source=JSON.parse(snapshot()),before=JSON.stringify(source);let blob=await exportRenderedBook(source,'pdf');assert.equal(blob.type,'application/pdf');assert.equal(JSON.stringify(source),before);assert.equal(renders.join(','),'0,1,2');assert(canvases.every(n=>n.width===1&&n.height===1));assert.equal(archiveJob,null);assert.equal(document.getElementById('archive-progress-dialog').open,false);
 renders=[];canvases=[];mode='cancel';assert.equal(await exportRenderedBook(source,'pdf'),null);assert.equal(renders.length,1);assert.equal(canvases[0].width,1);assert.equal(archiveJob,null);
 mode='render-error';await assert.rejects(()=>exportRenderedBook(source,'pdf'));assert.equal(archiveJob,null);assert.equal(document.getElementById('archive-progress-dialog').open,false);
 mode='encode-error';canvases=[];await assert.rejects(()=>exportRenderedBook(source,'pdf'));assert.equal(canvases[0].width,1);
 console.log('PASS: real export flow renders pages in order, frees canvases, preserves the source, cancels without partial files and cleans up after failures');
 mode='normal';renderCanvas=async()=>({width:10,height:20,toBlob:cb=>cb(new Blob(['png']))});const cbz=await exportComicArchive(source);assert.equal(cbz.type,'application/vnd.comicbook+zip');assert.equal(new Uint8Array(await cbz.slice(0,4).arrayBuffer())[0],80);
 previewArchive(blob,'manga.pdf',{kind:'pdf',pageCount:3});assert.equal(document.getElementById('archive-ready-title').textContent,'Your PDF is ready');assert.equal(document.getElementById('save-archive').download,'manga.pdf');assert(document.getElementById('archive-size').textContent.startsWith('3 pages'));assert.equal(document.getElementById('save-archive').textContent,'Save PDF');cleanupArchive();previewArchive(cbz,'manga.cbz',{pageCount:3});assert.equal(document.getElementById('archive-ready-title').textContent,'Your comic book is ready');assert.equal(document.getElementById('save-archive').textContent,'Save book');cleanupArchive();
 console.log('PASS: CBZ generation still works and the shared ready dialog switches file type, labels, metadata and cleanup correctly');
})()
`,Object.assign(c,{Buffer}));
