const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const nodes={},document={getElementById:id=>nodes[id]??(nodes[id]={querySelector(){return {focus(){}}},matches(){return false},focus(){}})};
const c=vm.createContext({assert,console,document,crypto:require('node:crypto').webcrypto,window:{matchMedia:()=>({matches:false})}});
vm.runInContext(fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,''),c);
vm.runInContext(`
book=initialBook();activePage=0;selectedPanel=0;selectedBubble=null;render=()=>{};renderPaper=()=>{};renderPages=()=>{};renderSettings=()=>{};updateHistory=()=>{};scheduleSave=()=>{};toast=()=>{};
const target=()=>canvasQuickTarget={book:activeBookId,page:page().id,index:selectedPanel,letteringId:selectedBubble};const original=snapshot();target();runCanvasQuickAction('duplicate');assert.equal(panelCount(page()),4);assert.equal(undoStack.length,1);undo();assert.equal(snapshot(),original);
selectedPanel=0;target();runCanvasQuickAction('delete');assert.equal(panelCount(page()),2);undo();assert.equal(snapshot(),original);
selectedPanel=0;panel().positionLocked=true;target();runCanvasQuickAction('delete');assert.equal(panelCount(page()),3);assert(canvasQuickActions().find(a=>a[0]==='resize')[2]);panel().positionLocked=false;
canvasQuickTarget={book:'stale-book',page:page().id,index:0};runCanvasQuickAction('delete');assert.equal(panelCount(page()),3);
selectedBubble=panel().bubbles[0].id;const before=snapshot();target();runCanvasQuickAction('delete-text');assert.equal(panel().bubbles.length,0);undo();assert.equal(snapshot(),before);
selectedPanel=0;selectedBubble=null;page().freeCount=1;assert(canvasQuickActions().find(a=>a[0]==='delete')[2]);target();runCanvasQuickAction('delete');assert.equal(panelCount(page()),1);
console.log('PASS: quick duplicate/delete use one Undo, lettering deletion restores, locks and minimum panel limits apply, stale book targets cannot mutate content');
`,c);
