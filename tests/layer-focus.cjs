const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const rows=new Map(),list={querySelector:selector=>rows.get(selector.match(/data-layer-key="([^"]+)"/)[1])};
const c=vm.createContext({console,document:{getElementById:()=>list},crypto:require('node:crypto').webcrypto,window:{matchMedia:()=>({matches:false})}});
vm.runInContext(fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,''),c);
function row(key){let release;const n={isConnected:true,disabled:false,ready:false,focused:0,updateComplete:new Promise(resolve=>release=()=>{n.ready=true;resolve()}),focus(){assert(this.ready,'native button is not ready');this.focused++}};rows.set(key,n);return {n,release}}
(async()=>{
 const a=row('panel:0'),pending=vm.runInContext("focusLayerRow('panel:0')",c);assert.equal(a.n.focused,0);a.release();await pending;assert.equal(a.n.focused,1);
 const old=row('panel:1'),oldFocus=vm.runInContext("focusLayerRow('panel:1')",c),latest=row('panel:2'),newFocus=vm.runInContext("focusLayerRow('panel:2')",c);old.release();latest.release();await Promise.all([oldFocus,newFocus]);assert.equal(old.n.focused,0);assert.equal(latest.n.focused,1);
 const detached=row('panel:3'),detachedFocus=vm.runInContext("focusLayerRow('panel:3')",c);detached.n.isConnected=false;detached.release();await detachedFocus;assert.equal(detached.n.focused,0);
 const disabled=row('panel:4'),disabledFocus=vm.runInContext("focusLayerRow('panel:4')",c);disabled.n.disabled=true;disabled.release();await disabledFocus;assert.equal(disabled.n.focused,0);
 await vm.runInContext("focusLayerRow('missing')",c);
 console.log('PASS: rebuilt layer buttons wait for their native control, only the latest focus request wins, and detached/disabled/missing rows are ignored');
})().catch(error=>{console.error(error);process.exitCode=1});
