const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
const core=html.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,'');
const ids=new Map();const get=id=>{if(!ids.has(id))ids.set(id,{events:{},addEventListener(type,fn){this.events[type]=fn},scrollTop:0});return ids.get(id)};
const ctx=vm.createContext({assert,document:{getElementById:get},window:{},console});vm.runInContext(core,ctx);
vm.runInContext(`
const exports=[];exportBook=kind=>exports.push(kind);setupExportMenu();
for(const kind of ['pdf','print','cbz','png'])$('export-options').events['wa-select']({target:$('export-options'),detail:{item:{value:kind}}});
assert.deepEqual(exports,['pdf','print','cbz','png']);
for(const event of [{target:$('export-options'),detail:{item:{value:'invalid'}}},{target:{},detail:{item:{value:'pdf'}}}])$('export-options').events['wa-select'](event);
assert.equal(exports.length,4);exportMenu(true);assert.equal($('export-options').open,true);exportMenu(false);assert.equal($('export-options').open,false);
for(const tab of ['layout','panel','picture','text','book']){selectDesignerTab(tab);assert.equal($('designer-tabs').active,tab);assert.equal(designerTab,tab);assert.equal($('designer-title').textContent,$('settings-sheet-title').textContent)}
$('inspector').scrollTop=120;selectDesignerTab('book');assert.equal($('inspector').scrollTop,120);selectDesignerTab('picture');assert.equal($('inspector').scrollTop,0);selectDesignerTab('bad');assert.equal($('designer-tabs').active,'picture');
`,ctx);
console.log('PASS: all export choices route once, unknown/nested selections are ignored, menu dismissal and programmatic tool navigation preserve context');
