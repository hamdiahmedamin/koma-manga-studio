// Run with: node tests/designer.cjs. No dependencies or user data required.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const core=html.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,'');
function node(){return {dataset:{},style:{},children:[],append(...ns){this.children.push(...ns)},replaceChildren(){this.children=[]},setAttribute(){},classList:{toggle(){}},focus(){},addEventListener(){},removeEventListener(){}}}
const ids=new Map(),get=id=>{if(!ids.has(id))ids.set(id,node());return ids.get(id)};
const docEvents={},document={getElementById:get,querySelectorAll:()=>[],createElement:node,addEventListener:(k,f)=>docEvents[k]=f,removeEventListener:(k,f)=>{if(docEvents[k]===f)delete docEvents[k]}};
const ctx=vm.createContext({assert,console,document,crypto:require('node:crypto').webcrypto,setTimeout,clearTimeout,window:{matchMedia:()=>({matches:false})}});
vm.runInContext(core,ctx);
vm.runInContext(`
book=initialBook();activePage=0;selectedPanel=0;render=()=>{};renderPaper=()=>{};renderPages=()=>{};renderSettings=()=>{};updateHistory=()=>{};updateSelectedClasses=()=>{};scheduleSave=()=>{};toast=()=>{};
const clone=v=>JSON.parse(JSON.stringify(v));
for(const key of Object.keys(KomaPanelShapes.presets)){
 const n={...newPanel(),shape:key};if(key==='custom')n.shapePoints=KomaPanelShapes.points({shape:'diagonal'});
 assert(KomaPanelShapes.valid(n));assert(KomaPanelShapes.validPoints(KomaPanelShapes.points(n)));assert(!KomaPanelShapes.svg(n,400,200).includes('NaN'));
 panel().shape=n.shape;panel().shapePoints=n.shapePoints;const restored=validateBook(clone(book));assert.equal(restored.pages[0].panels[0].shape,key);
 const layout=captureCustomLayout(page(),'Shape test'),target=newPage();applyCustomLayoutToPage(target,layout);assert.equal(target.panels[0].shape,key);
 if(key==='custom'){assert.deepEqual(target.panels[0].shapePoints,n.shapePoints);target.panels[0].shapePoints[0][0]=77;assert.notEqual(layout.panels[0].shapePoints[0][0],77)}
}
console.log('PASS: all shape presets, project round trips, reusable layouts and independent point arrays');
const legacy=initialBook();for(const n of legacy.pages[0].panels){delete n.shape;delete n.shapePoints}validateBook(legacy);assert(legacy.pages[0].panels.every(n=>n.shape==='rect'&&n.shapePoints===null));
const oldLayout=captureCustomLayout(legacy.pages[0],'Legacy');for(const n of oldLayout.panels){delete n.shape;delete n.shapePoints}const oldRestored=validateCustomLayout(oldLayout);assert(oldRestored.panels.every(n=>n.shape==='rect'&&n.shapePoints===null));
for(const corrupt of [n=>n.shape='__proto__',n=>n.shape='url(bad)',n=>n.shape='custom',n=>{n.shape='custom';n.shapePoints=[[0,0],[100,100],[0,100],[100,0]]},n=>n.shapePoints=[[0,0],[1,1],[2,2]],n=>n.shapePoints=[[0,0],[100,0],[100,Infinity]],n=>n.shapePoints=Array(13).fill([0,0]),n=>n.shapePoints=[[0,0],[100,0],['50',100]],n=>n.shapePoints=[[0,0],[100,0],[50,-1]],n=>n.shapePoints=[[0,0,9],[100,0],[50,100]]]){const bad=initialBook();corrupt(bad.pages[0].panels[0]);assert.throws(()=>validateBook(bad));const layout=captureCustomLayout(initialBook().pages[0],'Bad');corrupt(layout.panels[0]);assert.throws(()=>validateCustomLayout(layout))}
console.log('PASS: legacy books/layouts migrate, and malformed, crossing, tiny or unbounded imported polygons are rejected');
const cutout=[[0,0],[100,0],[100,100],[60,100],[60,40],[0,40]];assert(KomaPanelShapes.validPoints(cutout));let ps=clone(cutout);for(let i=0;i<5000;i++){const index=i%ps.length,x=(i*47%180)-40,y=(i*71%180)-40;ps=KomaPanelShapes.move(ps,index,x,y);assert(KomaPanelShapes.validPoints(ps));assert(ps.every(p=>p.every(v=>v>=0&&v<=100)))}
const rectangle=[[0,0],[100,0],[100,100],[0,100]];assert.deepEqual(KomaPanelShapes.move(rectangle,0,100,100),rectangle);assert.deepEqual(rectangle,[[0,0],[100,0],[100,100],[0,100]]);
console.log('PASS: concave cutouts and 5,000 bounded point moves without crossed edges or source mutation');
setupDesigner();panel().shape='custom';panel().shapePoints=clone(cutout);selectedShapePoint=1;const original=snapshot();$('add-shape-point').onclick();assert.equal(panel().shapePoints.length,7);undo();assert.equal(snapshot(),original);selectedShapePoint=1;$('remove-shape-point').onclick();assert.equal(panel().shapePoints.length,6);selectedShapePoint=3;$('remove-shape-point').onclick();assert.equal(panel().shapePoints.length,5);undo();assert.equal(snapshot(),original);
console.log('PASS: add/remove corner controls preserve geometry and support a single undo');
const calls=[],drawing=new Proxy({},{get:(o,k)=>(...args)=>calls.push([k,...args])}),r={x:10,y:20,w:400,h:200};KomaPanelShapes.canvas(drawing,{shape:'diagonal'},r);assert.deepEqual(calls.filter(c=>c[0]==='moveTo'||c[0]==='lineTo'),[['moveTo',82,20],['lineTo',410,20],['lineTo',338,220],['lineTo',10,220]]);calls.length=0;KomaPanelShapes.canvas(drawing,{shape:'ellipse'},r);assert.deepEqual(calls.find(c=>c[0]==='ellipse').slice(1,5),[210,120,200,100]);
console.log('PASS: Canvas uses the same normalized diagonal and ellipse geometry as the live frame');
`,ctx);
ctx.pointerNode=()=>{const listeners={};return {listeners,setPointerCapture(){},releasePointerCapture(){},addEventListener:(k,f)=>listeners[k]=f,removeEventListener:(k,f)=>{if(listeners[k]===f)delete listeners[k]}}};
vm.runInContext(`
book=initialBook();panel().shape='custom';panel().shapePoints=[[0,0],[100,0],[100,100],[0,100]];touchTool='shape';undoStack=[];redoStack=[];
const el={getBoundingClientRect:()=>({left:0,top:0,width:400,height:200})};updatePanelShape=()=>{};const event=(x,y,id=1)=>({button:0,pointerId:id,pointerType:'touch',isPrimary:true,clientX:x,clientY:y,preventDefault(){},stopPropagation(){}});
let handle=pointerNode(),before=snapshot();startShapeGesture(event(0,0),0,0,el,handle);handle.listeners.pointermove(event(2,2));handle.listeners.pointerup(event(2,2));assert.equal(snapshot(),before);assert.equal(undoStack.length,0);
handle=pointerNode();startShapeGesture(event(0,0),0,0,el,handle);handle.listeners.pointermove(event(40,40,2));assert.equal(snapshot(),before);handle.listeners.pointermove(event(40,40));assert.deepEqual(panel().shapePoints[0],[10,20]);handle.listeners.pointercancel();assert.equal(snapshot(),before);assert.equal(undoStack.length,0);assert.equal(gestureCancel,null);
handle=pointerNode();startShapeGesture(event(0,0),0,0,el,handle);handle.listeners.pointermove(event(80,20));handle.listeners.pointerup(event(80,20));assert.deepEqual(panel().shapePoints[0],[20,10]);assert.equal(undoStack.length,1);undo();assert.equal(snapshot(),before);redo();assert.deepEqual(panel().shapePoints[0],[20,10]);
console.log('PASS: real point-drag handler rejects tap jitter/foreign pointers, cancels cleanly and supports one-step undo/redo');
`,ctx);
console.log('All Panel Designer checks passed.');
