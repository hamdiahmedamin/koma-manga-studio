// Run with: node tests/linked-resize.cjs. Uses only Node's standard library.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');const core=html.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,'');
const nodes=[],docEvents={};
function frame(i){const listeners={},attrs={},line={setAttribute(k,v){this[k]=v}},outline={setAttribute(k,v){attrs[k]=v},querySelector:()=>line};return {dataset:{panel:String(i)},style:{},attrs,listeners,line,querySelector:s=>s==='.picture-plane'?null:outline,setPointerCapture(){},releasePointerCapture(){},focus(){},addEventListener:(k,f)=>listeners[k]=f,removeEventListener:(k,f)=>{if(listeners[k]===f)delete listeners[k]}}}
for(let i=0;i<16;i++)nodes.push(frame(i));
const grid={getBoundingClientRect:()=>({width:542,height:760}),querySelectorAll:()=>nodes.slice(0,3)},document={getElementById:id=>id==='manga-grid'?grid:{},addEventListener:(k,f)=>docEvents[k]=f,removeEventListener:(k,f)=>{if(docEvents[k]===f)delete docEvents[k]}};
const ctx=vm.createContext({console,assert,nodes,docEvents,crypto:require('node:crypto').webcrypto,document,window:{matchMedia:()=>({matches:false})}});vm.runInContext(core,ctx);
vm.runInContext(`
const clone=v=>JSON.parse(JSON.stringify(v)),rectangles=p=>p.panels.slice(0,panelCount(p)).map(n=>({...n.rect})),close=(a,b)=>assert(Math.abs(a-b)<.004,a+' != '+b);
const valid=r=>{assert(Object.values(r).every(Number.isFinite));assert(r.x>=0&&r.y>=0&&r.w>=10&&r.h>=8);assert(r.x+r.w<=100.002&&r.y+r.h<=100.002)};
const gap=(a,b,axis)=>axis==='x'?b.x-a.x-a.w:b.y-a.y-a.h;
let p=initialBook().pages[0],rs=rectangles(p),before=clone(rs),requested=transformRect(rs[0],0,12,'se'),next=linkedPanelRects(p,0,rs,requested);
close(next[0].h,rs[0].h+12);for(const i of [1,2]){close(next[i].y,rs[i].y+12);close(next[i].h,rs[i].h-12);close(next[i].y+next[i].h,rs[i].y+rs[i].h);close(gap(next[0],next[i],'y'),gap(rs[0],rs[i],'y'))}assert.deepEqual(rs,before);
console.log('PASS: a full-width panel resizes both neighbors below it, preserving gutters and the outer page edge');
p=newPage();p.layout='freeform';p.freeCount=4;const four=[{x:0,y:0,w:49.5,h:49.5},{x:50.5,y:0,w:49.5,h:49.5},{x:0,y:50.5,w:49.5,h:49.5},{x:50.5,y:50.5,w:49.5,h:49.5}];four.forEach((r,i)=>p.panels[i].rect={...r});
next=linkedPanelRects(p,0,four,transformRect(four[0],10,6,'se'));
for(const i of [0,2])close(next[i].w,59.5);for(const i of [1,3]){close(next[i].x,60.5);close(next[i].w,39.5)}for(const i of [0,1])close(next[i].h,55.5);for(const i of [2,3]){close(next[i].y,56.5);close(next[i].h,43.5)}
next=linkedPanelRects(p,3,four,transformRect(four[3],-8,-9,'nw'));close(next[0].w,41.5);close(next[0].h,40.5);close(next[3].x,42.5);close(next[3].y,41.5);
console.log('PASS: connected dividers follow across four-panel intersections from either side');
next=linkedPanelRects(p,0,four,transformRect(four[0],100,100,'se'));close(next[1].w,10);close(next[2].h,8);next.forEach(valid);
p.panels[0].locked=true;const locked=linkedPanelRects(p,0,four,transformRect(four[0],100,100,'se',false,true));close(locked[0].w/locked[0].h,1);locked.forEach(valid);p.panels[0].locked=false;
console.log('PASS: resizing stops at neighbors’ minimum sizes and preserves the selected panel’s proportion lock');
const detached=[{x:0,y:0,w:30,h:30},{x:55,y:55,w:40,h:40},{x:5,y:5,w:20,h:20}];p.freeCount=3;detached.forEach((r,i)=>p.panels[i].rect={...r});next=linkedPanelRects(p,0,detached,transformRect(detached[0],8,7,'se'));assert.deepEqual(next.slice(1),detached.slice(1));
console.log('PASS: detached and intentionally overlapping frames remain independent');
let cases=0;for(const layout of LAYOUTS)for(const margin of [20,29,60])for(const gutter of [3,8,20]){
 const p=newPage();p.layout=layout.id;p.margin=margin;p.gutter=gutter;switchLayout(p,'freeform');const source=rectangles(p);
 for(let selected=0;selected<source.length;selected++)for(const handle of ['nw','ne','sw','se'])for(const [dx,dy] of [[70,65],[-70,-65],[17,-13],[-19,15]]){
  const result=linkedPanelRects(p,selected,source,transformRect(source[selected],dx,dy,handle,true,false));result.forEach(valid);
  for(let i=0;i<result.length;i++)for(let j=i+1;j<result.length;j++){const a=result[i],b=result[j];assert(a.x+a.w<=b.x+.004||b.x+b.w<=a.x+.004||a.y+a.h<=b.y+.004||b.y+b.h<=a.y+.004,layout.id+' introduced overlap')}
  cases++;
 }
}
console.log('PASS: '+cases+' template-derived corner resizes stay bounded without introducing overlaps');
book=initialBook();activePage=0;selectedPanel=0;selectedBubble=null;render=()=>{};renderPaper=()=>{};renderPages=()=>{};renderSettings=()=>{};syncGeometry=()=>{};updateSelectedClasses=()=>{};updateHistory=()=>{};scheduleSave=()=>{};toast=()=>{};
const content=page().panels.map(n=>({asset:n.asset,shape:n.shape,points:clone(n.shapePoints),bubbles:clone(n.bubbles)})),hidden=clone(page().panels.slice(3));
editRect('h',55);close(page().panels[0].rect.h,55);for(const i of [1,2])close(page().panels[i].rect.y,before[i].y+55-before[0].h);assert.deepEqual(page().panels.slice(3),hidden);page().panels.forEach((n,i)=>assert.deepEqual({asset:n.asset,shape:n.shape,points:n.shapePoints,bubbles:n.bubbles},content[i]));validateBook(clone(book));const saved=captureCustomLayout(page(),'Linked frames'),target=newPage();applyCustomLayoutToPage(target,saved);assert.deepEqual(rectangles(target),rectangles(page()));
selectedPanel=1;const peers=clone(page().panels.map(n=>n.rect));editRect('x',5);assert.deepEqual(page().panels[0].rect,peers[0]);assert.deepEqual(page().panels[2].rect,peers[2]);
console.log('PASS: size fields resize neighbors, position fields move independently, and content/hidden slots/layout export remain intact');
const event=(x=0,y=0,id=1)=>({button:0,pointerId:id,pointerType:'touch',isPrimary:true,clientX:x,clientY:y,preventDefault(){},stopPropagation(){}});
book=initialBook();selectedPanel=0;touchTool='edit';undoStack=[];redoStack=[];const initial=snapshot(),el=nodes[0];
startPanelGesture(event(),0,el,'se');el.listeners.pointermove(event(0,90,2));assert.equal(snapshot(),initial);el.listeners.pointermove(event(0,3));assert.equal(snapshot(),initial);el.listeners.pointermove(event(0,90));assert.notEqual(snapshot(),initial);assert(Number.parseFloat(nodes[1].style.top)>before[1].y);assert(nodes[1].attrs.viewBox);el.listeners.pointercancel();assert.equal(snapshot(),initial);assert.equal(undoStack.length,0);assert.equal(gestureCancel,null);
startPanelGesture(event(),0,el,'se');el.listeners.pointermove(event(0,1000));el.listeners.pointermove(event(0,90));el.listeners.pointerup(event(0,90));const resized=snapshot();assert.notEqual(resized,initial);assert.equal(undoStack.length,1);undo();assert.equal(snapshot(),initial);redo();assert.equal(snapshot(),resized);
startPanelGesture(event(),0,el,'se');el.listeners.pointermove(event(0,-90));docEvents.keydown({key:'Escape',preventDefault(){}});assert.equal(snapshot(),resized);assert.equal(undoStack.length,1);
const movingPeers=clone(page().panels.slice(1).map(n=>n.rect));startPanelGesture(event(),0,el,'move');el.listeners.pointermove(event(0,90));el.listeners.pointerup(event(0,90));assert.deepEqual(page().panels.slice(1).map(n=>n.rect),movingPeers);
console.log('PASS: live neighbor updates, pointer filtering, cancelled touches, reversing from limits, Escape, independent moves and single-step undo/redo');
`,ctx);
console.log('All linked-panel resizing checks passed.');
