const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
const core=html.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,'');
const ids=new Map();const get=id=>{if(!ids.has(id))ids.set(id,{events:{},addEventListener(type,fn){this.events[type]=fn},clicks:0,click(){this.clicks++},scrollTop:0});return ids.get(id)};
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

vm.runInContext(`
setupPageActions();
for(const [key,id] of Object.entries(PAGE_MENU_ACTIONS)){
 $(id).disabled=true;syncPageActions();assert.equal($('page-action-'+key).disabled,true);
 $('page-action-menu').events['wa-select']({target:$('page-action-menu'),detail:{item:{value:id}}});assert.equal($(id).clicks,0);
 $(id).disabled=false;syncPageActions();assert.equal($('page-action-'+key).disabled,false);
 $('page-action-menu').events['wa-select']({target:$('page-action-menu'),detail:{item:{value:id}}});assert.equal($(id).clicks,1);
}
$('page-action-menu').events['wa-select']({target:{},detail:{item:{value:'duplicate-page'}}});assert.equal($('duplicate-page').clicks,1);
$('page-action-menu').events['wa-select']({target:$('page-action-menu'),detail:{item:{value:'unknown'}}});
$('page-action-menu').open=true;closePageActions();assert.equal($('page-action-menu').open,false);
let commits=0;finishCharacterEdit=()=>commits++;renderCharacters=()=>{$('resource-tabs').active=resourceTab};setupResourceTabs();resourceTab='pictures';
$('resource-tabs').events['wa-tab-show']({target:$('resource-tabs'),detail:{name:'characters'}});assert.equal(resourceTab,'characters');assert.equal(commits,1);
$('resource-tabs').events['wa-tab-show']({target:$('resource-tabs'),detail:{name:'characters'}});assert.equal(commits,1);
$('resource-tabs').events['wa-tab-show']({target:{},detail:{name:'pictures'}});assert.equal(resourceTab,'characters');
setResourceTab('pictures');assert.equal($('resource-tabs').active,'pictures');setResourceTab('unknown');assert.equal(resourceTab,'pictures');
`,ctx);
console.log('PASS: mobile page actions share desktop handlers and disabled states; library switches finish edits once and ignore nested events');
