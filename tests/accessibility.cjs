const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const entry=fs.readFileSync(path.join(__dirname,'../ui-components.entry.js'),'utf8').replace(/^import .*;\n/gm,'');
const observers=[];
class Observer{constructor(callback){this.callback=callback;observers.push(this)}observe(host){this.host=host}}
function attrs(values={}){return {values:{...values},getAttribute(k){return this.values[k]??null},setAttribute(k,v){this.values[k]=String(v)},removeAttribute(k){delete this.values[k]}}}
const ctx=vm.createContext({assert,MutationObserver:Observer,document:{addEventListener(){}},Promise});vm.runInContext(entry,ctx);
(async()=>{
 const button=attrs({'aria-expanded':'false','aria-controls':'menu'}),host=Object.assign(attrs({'aria-label':'Page actions'}),{updateComplete:Promise.resolve(),matches:()=>true,closest:()=>({}),shadowRoot:{querySelector:()=>button}});
 ctx.host=host;vm.runInContext('watchButton(host)',ctx);await observers[0].callback();assert.equal(button.getAttribute('aria-label'),'Page actions');assert.equal(button.getAttribute('aria-expanded'),'false');assert.equal(button.getAttribute('aria-controls'),'menu');button.setAttribute('aria-expanded','true');host.setAttribute('aria-label','Book page actions');await observers[0].callback();assert.equal(button.getAttribute('aria-expanded'),'true');assert.equal(button.getAttribute('aria-label'),'Book page actions');
 for(const [tag,label] of [['wa-tab-group','Designer tools'],['wa-dropdown','Export choices']]){
  const surface=attrs(),named=Object.assign(attrs({'aria-label':label}),{localName:tag,updateComplete:Promise.resolve(),shadowRoot:{querySelector:()=>surface}});ctx.named=named;vm.runInContext('watchNamedSurface(named)',ctx);await observers.at(-1).callback();assert.equal(surface.getAttribute('aria-label'),label);named.setAttribute('aria-label','Renamed');await observers.at(-1).callback();assert.equal(surface.getAttribute('aria-label'),'Renamed');
 }
 const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
 for(const m of html.matchAll(/<dialog\b([^>]*)>/g)){const id=m[1].match(/id="([^"]+)"/)[1],title=m[1].match(/aria-labelledby="([^"]+)"/);assert(title,'Unnamed dialog: '+id);assert(html.includes('id="'+title[1]+'"'),'Missing dialog title: '+id)}
 console.log('PASS: dialog names resolve; inner tab lists/menus receive names; dropdown triggers retain component-managed expanded state during label updates');
})().catch(e=>{console.error(e);process.exitCode=1});
