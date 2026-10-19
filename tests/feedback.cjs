const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const core=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,'');
const ids=new Map(),timers=new Map();let document,timerId=0;
function make(){const classes=new Set(),events=new Map();return {events,isConnected:true,inert:true,hover:false,addEventListener(k,f){if(!events.has(k))events.set(k,new Set());events.get(k).add(f)},removeEventListener(k,f){events.get(k)?.delete(f)},emit(k,target=this){for(const f of [...events.get(k)||[]])f({target})},classList:{add:k=>classes.add(k),remove:k=>classes.delete(k),contains:k=>classes.has(k)},contains(e){return e===this||e===get('toast-dismiss')&&this===get('toast')},matches(){return this.hover},focus(){document.activeElement=this}}}
const get=id=>{if(!ids.has(id))ids.set(id,make());return ids.get(id)};
document={getElementById:get,activeElement:{isConnected:true,focus(){document.activeElement=this}}};
const ctx=vm.createContext({assert,console,document,window:{},setTimeout:(fn,delay)=>{const id=++timerId;timers.set(id,{fn,delay});return id},clearTimeout:id=>timers.delete(id)});vm.runInContext(core,ctx);
vm.runInContext(`
(async()=>{
 const d=$('confirm-dialog');
 for(let i=0;i<25;i++){
  const p=confirmAction('Remove page?','Undo restores it.','Remove');assert.equal(d.open,true);assert.equal(d.label,'Remove page?');assert.equal(await confirmAction('Second','Ignored','Remove'),false);
  let resolved=false;p.then(()=>resolved=true);
  if(i%3===0)$('confirm-accept').onclick();else if(i%3===1)$('confirm-cancel').onclick();else d.emit('wa-hide');
  d.emit('wa-after-hide',{});await Promise.resolve();assert.equal(resolved,false);
  d.emit('wa-after-hide');assert.equal(await p,i%3===0);assert.equal(pendingConfirmation,null);assert.equal($('confirm-accept').onclick,null);assert.equal($('confirm-cancel').onclick,null);
  assert.equal(d.events.get('wa-hide').size,0);assert.equal(d.events.get('wa-after-hide').size,0);
 }
 for(const [done,total,percent] of [[0,3,0],[1,3,33],[2,3,67],[3,3,100],[0,0,0]]){updateArchiveProgress(done,total);assert.equal($('archive-progress').value,percent);assert.equal($('archive-progress').label,done+' of '+total+' pages completed');assert.equal($('archive-progress-percent').textContent,percent+'%')}
 console.log('PASS: confirmation accept/cancel/Escape paths settle only after closing, repeated prompts clean up listeners, duplicate/nested events are ignored, progress reports exact percentages');
})()
`,ctx);
vm.runInContext(`
setupFeedback();const origin=document.activeElement;toast('Page duplicated');assert.equal($('toast').inert,false);assert.equal($('toast-message').textContent,'Page duplicated');assert.equal(document.activeElement,origin);assert.equal($('toast').classList.contains('visible'),true);
`,ctx);
assert.equal(timers.size,1);get('toast').emit('pointerenter');assert.equal(timers.size,0);get('toast').emit('pointerleave');assert.equal(timers.size,1);
document.activeElement=get('toast-dismiss');get('toast').emit('focusin');assert.equal(timers.size,0);get('toast-dismiss').onclick();assert.equal(document.activeElement===get('toast-dismiss'),false);assert.equal(get('toast').inert,true);
vm.runInContext(`toast('A'.repeat(250));assert.equal(toastDuration,14000);toast('Newest message');assert.equal($('toast-message').textContent,'Newest message');assert.equal(toastDuration,6000)`,ctx);
assert.equal(timers.size,1);[...timers.values()][0].fn();assert.equal(get('toast').classList.contains('visible'),false);assert.equal(get('toast').inert,true);
console.log('PASS: messages preserve focus, pause on hover/focus, can be dismissed, return focus safely, replace old messages, and leave no hidden tab stop');
