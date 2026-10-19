// Regression coverage for the real slider binding, independent of browser markup.
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const nodes={};function node(){return {value:0,textContent:'',events:{},addEventListener(type,fn,options){(this.events[type]??=[]).push({fn,options})}}}
const document={getElementById:id=>nodes[id]??(nodes[id]=node())};const c=vm.createContext({assert,console,document,crypto:require('node:crypto').webcrypto,window:{matchMedia:()=>({matches:false})}});
vm.runInContext(fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,''),c);
vm.runInContext(`
book=initialBook();activePage=0;selectedPanel=0;selectedBubble=null;render=()=>{};renderPaper=()=>{};renderPages=()=>{};renderSettings=()=>{};updateHistory=()=>{};scheduleSave=()=>{};toast=()=>{};
page().layout='four';Object.assign(panel(),{zoom:140});spanPicture(page(),0,[0,1,2,3],'slider-check');setPicture(page(),panel(),{zoom:140});
bindRange('image-zoom',()=>panel().zoom,v=>setPicture(page(),panel(),{zoom:v}));
const control=document.getElementById('image-zoom'),fire=type=>control.events[type].forEach(e=>e.fn());
assert.equal(control.events.pointerdown[0].options.capture,true);assert.equal(control.valueFormatter(225),'225%');
const original=snapshot();fire('pointerdown');control.value=180;fire('input');fire('focus');control.value=200;fire('input');control.value=225;fire('input');fire('change');
assert.equal(undoStack.length,1);assert.equal(document.getElementById('image-zoom-output').textContent,'225%');for(const n of page().panels.slice(0,4))assert.equal(n.zoom,225);const first=snapshot();undo();assert.equal(snapshot(),original);redo();assert.equal(snapshot(),first);
fire('pointerdown');control.value=250;fire('input');fire('change');assert.equal(undoStack.length,2);undo();assert.equal(snapshot(),first);
// A new key adjustment must start from the current state even without refocusing.
control.value=226;fire('input');fire('change');assert.equal(panel().zoom,226);undo();assert.equal(snapshot(),first);
fire('focus');control.value=225;fire('input');fire('change');assert.equal(undoStack.length,1);
console.log('PASS: pointer capture preserves the first drag change, delayed focus cannot overwrite it, joined pieces preview together, separate gestures/keys undo independently, and matching values add no history');
`,c);
