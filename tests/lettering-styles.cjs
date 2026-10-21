const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict'),html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
assert(/\.bubble,#bubble-text\{font-synthesis:weight style\}/.test(html),'Lettering must permit missing bold/italic variants even when the UI disables synthesis');
const nodes={},c=vm.createContext({assert,console,crypto:require('node:crypto').webcrypto,window:{matchMedia:()=>({matches:false})},document:{getElementById:id=>nodes[id]??(nodes[id]={events:{},addEventListener(t,f){this.events[t]=f}})}});
vm.runInContext(html.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,''),c);
vm.runInContext(`
book=initialBook();activePage=0;selectedPanel=0;selectedBubble=panel().bubbles[0].id;render=()=>{};renderSettings=()=>{};renderPaper=()=>{};renderPages=()=>{};scheduleSave=()=>{};updateHistory=()=>{};toast=()=>{};
const original=snapshot();bindSetting('bubble-bold',v=>bubble().bold=v);bindSetting('bubble-italic',v=>bubble().italic=v);
for(const id of ['bubble-bold','bubble-italic'])document.getElementById(id).events.change({target:{localName:'wa-checkbox',checked:true,value:'on'}});
assert.equal(bubble().bold,true);assert.equal(bubble().italic,true);assert.equal(undoStack.length,2);assert.match(letteringFont(bubble()),/^italic 700 /);const saved=JSON.parse(snapshot());validateBook(saved);assert(saved.pages[0].panels[0].bubbles[0].bold&&saved.pages[0].panels[0].bubbles[0].italic);
const fonts=[],ctx=new Proxy({measureText:s=>({width:s.length*7}),fillText(){fonts.push(this.font)}},{get:(o,k)=>k in o?o[k]:()=>{}});drawBubble(ctx,bubble(),{x:0,y:0,w:500,h:500});assert(fonts.length);assert(fonts.every(f=>/^italic 700 /.test(f)));
undo();assert.equal(panel().bubbles[0].bold,true);assert.equal(panel().bubbles[0].italic,false);undo();assert.equal(snapshot(),original);redo();redo();assert.match(letteringFont(panel().bubbles[0]),/^italic 700 /);
console.log('PASS: real Bold/Italic toggle bindings, separate Undo/Redo, saved booleans, Canvas lettering fonts and scoped CSS synthesis for fonts with missing variants');
`,c);
