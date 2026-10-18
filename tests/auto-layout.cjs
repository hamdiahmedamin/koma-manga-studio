// Run with: node tests/auto-layout.cjs
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const core=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,'');
const nodes={};const node=id=>nodes[id]||(nodes[id]={value:id==='auto-per-page'?'4':id==='auto-fit'?'cover':'',classList:{toggle(){}},querySelector:()=>node('heading'),focus(){}});
const c=vm.createContext({assert,console,window:{},document:{getElementById:node},crypto:require('node:crypto').webcrypto});vm.runInContext(core,c);
vm.runInContext(`
const clone=v=>JSON.parse(JSON.stringify(v));let cases=0;
for(const perPage of [1,2,3,4,5,6])for(const count of [1,2,5,7,13,60])for(const direction of ['rtl','ltr'])for(const fit of ['cover','contain']){
 const source=newPage();source.margin=60;source.gutter=20;source.effect='ink';source.chapter='Chapter 4';source.panels[0].shape='diamond';source.panels[0].bubbles.push({text:'Keep me'});const before=JSON.stringify(source),ids=Array.from({length:count},(_,i)=>'asset'+i),pages=buildAutoPages(source,ids,{perPage,fit,readingDirection:direction,frameStyle:source.panels[0]});
 assert.equal(pages.length,Math.ceil(count/perPage));assert.equal(new Set(pages.map(p=>p.id)).size,pages.length);const found=[];
 for(const p of pages){assert.equal(p.effect,'ink');assert.equal(p.margin,60);assert.equal(p.gutter,20);assert.equal(p.chapter,'Chapter 4');assert.equal(p.freeCount,Math.min(perPage,count-found.length));const rects=rectsFor(p),order=rects.map((r,i)=>i).sort((a,b)=>rects[a].y-rects[b].y||(direction==='rtl'?rects[b].x-rects[a].x:rects[a].x-rects[b].x));order.forEach(i=>found.push(p.panels[i].asset));p.panels.forEach((n,i)=>{assert.equal(n.bubbles.length,0);assert.equal(n.shape,'rect');if(i<p.freeCount){assert.equal(n.fit,fit);assert(n.rect.x>=0&&n.rect.y>=0);assert(n.rect.x+n.rect.w<100.01&&n.rect.y+n.rect.h<100.01);assert.equal(n.borderColor,source.panels[0].borderColor)}else assert.equal(n.asset,null)});}
 assert.deepEqual(found,ids);assert.equal(JSON.stringify(source),before);if(pages.length>1){pages[0].panels[0].rect.x=999;assert.notEqual(pages[1].panels[0].rect.x,999)}cases++;
}
assert.throws(()=>buildAutoPages(newPage(),['a'],{perPage:0}));assert.throws(()=>buildAutoPages(newPage(),['a'],{perPage:2.5}));assert.throws(()=>buildAutoPages(newPage(),['a'],{fit:'bad'}));assert.equal(buildAutoPages(newPage(),['a','a','b'],{perPage:4})[0].freeCount,2);
console.log('PASS: '+cases+' batches preserve selected picture order in both reading directions, exact final-page counts, fit, style, metadata and source content');
book=initialBook();book.assets.push({...book.assets[0],id:'extra'});activePage=0;selectedPanel=0;render=()=>{};renderPaper=()=>{};renderPages=()=>{};renderSettings=()=>{};renderDesignerSettings=()=>{};updateHistory=()=>{};scheduleSave=()=>{};closeDrawers=()=>{};fitPaper=()=>{};setTouchTool=tool=>touchTool=tool;toast=()=>{};
const before=snapshot(),tail=clone(book.pages.slice(1));autoSelecting=true;autoSelectedIds=book.assets.map(a=>a.id);createAutoLayout();assert.equal(undoStack.length,1);assert.equal(activePage,1);assert.equal(autoSelecting,false);assert.equal(autoSelectedIds.length,0);assert.equal(touchTool,'edit');assert.equal(book.pages.length,JSON.parse(before).pages.length+2);assert.deepEqual(book.pages.slice(3),tail);validateBook(clone(book));const after=snapshot();undo();assert.equal(snapshot(),before);redo();assert.equal(snapshot(),after);
console.log('PASS: the actual create action inserts a complete batch, validates as a project, clears selection and supports one Undo/Redo');
book.pages=Array.from({length:39},newPage);activePage=0;undoStack=[];redoStack=[];autoSelecting=true;autoSelectedIds=book.assets.map(a=>a.id);const full=snapshot();createAutoLayout();assert.equal(snapshot(),full);assert.equal(undoStack.length,0);assert(document.getElementById('auto-create').disabled);assert(document.getElementById('auto-layout-summary').textContent.includes('Only 1'));
autoSelectedIds=[book.assets[1].id,'missing'];renderAutoLayout();assert.equal(autoSelectedIds.length,1);assert(!document.getElementById('auto-create').disabled);createAutoLayout();assert.equal(book.pages.length,40);assert.equal(page().freeCount,1);
console.log('PASS: capacity checks reject the whole batch, prune missing assets and allow an exact 40-page boundary');
autoSelecting=true;autoSelectedIds=['old'];useBook(initialBook(),'other');assert.equal(autoSelecting,false);assert.equal(autoSelectedIds.length,0);
console.log('PASS: switching books clears transient selection');
`,c);
