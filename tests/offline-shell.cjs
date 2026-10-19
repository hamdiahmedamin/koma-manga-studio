const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),scope='https://example.test/koma-manga-studio/',source=fs.readFileSync(path.join(root,'sw.js'),'utf8'),events={},stores=new Map();let rejectInstall=false,networkCalls=0;
function cache(name){if(!stores.has(name))stores.set(name,new Map());const data=stores.get(name);return {async addAll(requests){if(rejectInstall)throw Error('Download failed');const entries=requests.map(req=>{const name=new URL(req.url).pathname.slice(new URL(scope).pathname.length)||'index.html';return [req.url,fs.readFileSync(path.join(root,name))]});for(const [url,bytes] of entries)data.set(url,bytes)},async match(req){const bytes=data.get(typeof req==='string'?req:req.url);return bytes?new Response(bytes):undefined}}}
const context=vm.createContext({URL,Request,Response,Set,console,self:{registration:{scope},addEventListener:(name,fn)=>events[name]=fn,clients:{claim:async()=>{}},skipWaiting:()=>{}},caches:{open:async name=>cache(name),keys:async()=>[...stores.keys()],delete:async name=>stores.delete(name)},fetch:async()=>{networkCalls++;throw Error('Offline')}});vm.runInContext(source,context);
const files=vm.runInContext('FILES',context),name=vm.runInContext('CACHE',context),prefix=vm.runInContext('PREFIX',context);
async function lifecycle(type){let pending;events[type]({waitUntil:p=>pending=p});await pending}
function fetchEvent(url,mode='cors',method='GET'){let response;events.fetch({request:{url,mode,method},respondWith:p=>response=p});return response}
(async()=>{
 stores.set(prefix+'old',new Map());stores.set('another-app',new Map());rejectInstall=true;await assert.rejects(()=>lifecycle('install'));assert(stores.has(prefix+'old'));rejectInstall=false;await lifecycle('install');
 for(const file of files){const response=await fetchEvent(new URL(file,scope).href);assert(response);const target=file==='./'?'index.html':file.slice(2);assert.deepEqual(Buffer.from(await response.arrayBuffer()),fs.readFileSync(path.join(root,target)),file)}
 await lifecycle('activate');assert(!stores.has(prefix+'old'));assert(stores.has('another-app'));
 const response=await fetchEvent(scope+'?launch=installed','navigate');assert((await response.text()).includes('Koma'));
 assert.equal(networkCalls,0);assert.equal(fetchEvent(scope+'private-photo.jpg'),undefined);assert.equal(fetchEvent('https://other.test/index.html','navigate'),undefined);assert.equal(fetchEvent(scope+'index.html','cors','POST'),undefined);
 stores.get(name).clear();const cold=await fetchEvent(scope,'navigate');assert.equal(cold.status,503);assert((await cold.text()).includes('Your saved projects stay on this device'));const missing=await fetchEvent(scope+'vendor/webawesome.js');assert.equal(missing.status,0);
 const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.webmanifest'),'utf8'));for(const icon of manifest.icons)assert(files.includes(icon.src),'Icon missing offline: '+icon.src);assert.equal(manifest.start_url,'./');assert.equal(manifest.scope,'./');
 console.log('PASS: real worker handlers serve every cached shell file with the network unavailable, handle installed launches, retain the prior cache after failed installation, isolate private requests, and provide a safe cold-start fallback');
})().catch(e=>{console.error(e);process.exitCode=1});
