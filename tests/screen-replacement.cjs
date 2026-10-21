const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.join(__dirname,'..'),c=vm.createContext({assert,console,Uint8ClampedArray,crypto:require('node:crypto').webcrypto,window:{matchMedia:()=>({matches:false})}});
vm.runInContext(fs.readFileSync(path.join(root,'screen-tools.js'),'utf8'),c);
vm.runInContext(fs.readFileSync(path.join(root,'index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,''),c);
vm.runInContext(`
const T=KomaScreenTools,quads=[[[0,0],[1,0],[1,1],[0,1]],T.defaults(),[[.15,.1],[.8,.25],[.9,.95],[.2,.8]]];
for(const q of quads){assert(T.valid(q));const m=T.matrix(q),inv=T.inverse(m);for(const [i,uv] of [[0,[0,0]],[1,[1,0]],[2,[1,1]],[3,[0,1]]]){T.point(m,...uv).forEach((n,k)=>assert(Math.abs(n-q[i][k])<1e-9));T.point(inv,...q[i]).forEach((n,k)=>assert(Math.abs(n-uv[k])<1e-9))}}
for(const invalid of [null,[],[[0,0],[1,1],[1,0],[0,1]],[[0,0],[0,0],[1,1],[0,1]],[[-.1,0],[1,0],[1,1],[0,1]]])assert(!T.valid(invalid));
const source={width:2,height:2,data:new Uint8ClampedArray([255,0,0,255,0,255,0,255,0,0,255,255,240,200,150,0])},full=quads[0],patch=T.warp(source,2,2,full);assert.equal(patch.width,2);assert.equal(patch.height,2);for(let i=0;i<12;i++)assert.equal(patch.data[i],source.data[i]);assert.equal(patch.data[15],0);const half=T.warp(source,2,2,full,50);assert.equal(half.data[3],128);assert.equal(half.data[0],255);assert.equal(T.warp(source,2,2,full,0).data[3],0);assert.throws(()=>T.warp(source,4000,2,full));
book=initialBook();const base=book.assets[0],overlay=book.assets[1],edited={id:uid(),name:'Screen edit.png',src:'data:image/png;base64,AAAA',screenEdit:{baseId:base.id,overlayId:overlay.id,points:quads[2],opacity:75}};book.assets.push(edited);page().panels[0].asset=edited.id;const restored=validateBook(JSON.parse(snapshot()));assert.deepEqual(restored.assets.at(-1).screenEdit,edited.screenEdit);
for(const change of [edit=>edit.baseId='missing',edit=>edit.overlayId=edited.id,edit=>edit.points=[[0,0],[1,1],[1,0],[0,1]],edit=>edit.opacity=101]){const bad=JSON.parse(snapshot());change(bad.assets.at(-1).screenEdit);assert.throws(()=>validateBook(bad))}
console.log('PASS: projective corner/inverse mapping, invalid quadrilaterals, exact pixels and alpha, source size limits, editable screen metadata round trips and broken-reference rejection');
`,c);
