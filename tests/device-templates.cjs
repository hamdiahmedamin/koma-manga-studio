const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const nodes={},c=vm.createContext({assert,console,crypto:require('node:crypto').webcrypto,window:{matchMedia:()=>({matches:false})},requestAnimationFrame:f=>f(),document:{getElementById:id=>nodes[id]??(nodes[id]={close(){},querySelectorAll(){return []}})}}),root=path.join(__dirname,'..');
vm.runInContext(fs.readFileSync(path.join(root,'screen-tools.js'),'utf8'),c);vm.runInContext(fs.readFileSync(path.join(root,'index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,''),c);
(async()=>{await vm.runInContext(`(async()=>{
render=()=>{};renderSettings=()=>{};renderPaper=()=>{};renderPages=()=>{};updateHistory=()=>{};scheduleSave=()=>{};toast=()=>{};fitPaper=()=>{};setTouchTool=()=>{};updateScreenCorners=()=>{};let error='';screenError=s=>error=s;screenCanvas=()=>({width:500,height:900,toDataURL:()=> 'data:image/png;base64,AAAA'});
for(const kind of ['phone','tv']){
 book=initialBook();activePage=0;selectedPanel=0;selectedBubble=null;undoStack=[];redoStack=[];
 const spec=KomaScreenTools.device(kind),points=KomaScreenTools.devicePoints(kind);assert(KomaScreenTools.valid(points));const r=devicePanelRect(page(),kind);assert(r.x>=0&&r.y>=0&&r.x+r.w<=100&&r.y+r.h<=100);const box=pageBox(page());assert(Math.abs((r.w*box.w)/(r.h*box.h)-spec.width/spec.height)<.001);
 const count=panelCount(page()),before=snapshot(),old=JSON.parse(before).pages[0].panels.slice(0,count),base={id:uid(),name:spec.name+' frame.png',src:'data:image/png;base64,AAAA',deviceTemplate:kind};
 screenSession={bookId:activeBookId,pageId:page().id,panelIndex:0,assetId:base.id,baseId:base.id,baseAsset:base,template:kind,points,opacity:100,overlayId:book.assets[1].id,overlayImage:{},uploaded:null,busy:false};
 await applyScreenEdit();assert.equal(panelCount(page()),count+1);assert.equal(undoStack.length,1);assert.equal(book.assets.length,6);assert.equal(panel().fit,'contain');assert.equal(panel().borderWidth,0);assert.deepEqual(page().panels.slice(0,count).map(({z,...n})=>n),old.map(({z,...n})=>n));assert.equal(book.assets.at(-1).screenEdit.baseId,base.id);validateBook(JSON.parse(snapshot()));const guarded=snapshot();removeAsset(base.id);assert.equal(snapshot(),guarded);assert.equal(undoStack.length,1);undo();assert.equal(snapshot(),before);
}
book=initialBook();page().freeCount=16;while(page().panels.length<16)page().panels.push(newPanel());const before=snapshot();screenSession={bookId:activeBookId,pageId:page().id,panelIndex:0,template:'phone',overlayImage:{},busy:false};await applyScreenEdit();assert.equal(snapshot(),before);assert(error.includes('16 panels'));
assert.throws(()=>KomaScreenTools.device('unknown'));
console.log('PASS: Phone/TV screen geometry, physical aspect ratios, new panel and frame assets, existing panel preservation, project validation, single Undo and 16-panel limit');
})()`,c)})().catch(e=>{console.error(e);process.exitCode=1});
