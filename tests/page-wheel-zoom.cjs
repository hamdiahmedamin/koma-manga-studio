const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const nodes={stage:{clientWidth:1000,clientHeight:700,scrollLeft:0,scrollTop:0},paper:{width:400,left:100,top:60,getBoundingClientRect(){return {left:this.left-nodes.stage.scrollLeft,top:this.top-nodes.stage.scrollTop,width:this.width,height:this.width*848/600}},style:{setProperty(k,v){nodes.paper.width=parseFloat(v)}}},'zoom-fit':{},'zoom-in':{},'zoom-out':{},'canvas-quick-menu':{matches(){return false}}};
const c=vm.createContext({console,assert,document:{getElementById:id=>nodes[id]},crypto:require('node:crypto').webcrypto,window:{matchMedia:()=>({matches:false})}});
vm.runInContext(fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,''),c);
vm.runInContext(`
zoom=1;fitPaper();const anchor={x:320,y:260},coords=()=>{const r=$('paper').getBoundingClientRect();return [(anchor.x-r.left)/r.width,(anchor.y-r.top)/r.height]},point=coords();let prevented=0;
const wheel=(deltaY,options={})=>zoomPageWithWheel({deltaY,deltaX:0,deltaMode:0,clientX:anchor.x,clientY:anchor.y,preventDefault(){prevented++},...options});
wheel(-100);assert(zoom>1);coords().forEach((n,i)=>assert(Math.abs(n-point[i])<1e-8));const enlarged=zoom;wheel(100);assert(zoom<enlarged);coords().forEach((n,i)=>assert(Math.abs(n-point[i])<1e-8));
for(let i=0;i<30;i++)wheel(-120);assert.equal(zoom,5);assert.equal($('zoom-in').disabled,true);for(let i=0;i<40;i++)wheel(120);assert.equal(zoom,.6);assert.equal($('zoom-out').disabled,true);
for(const modifier of ['ctrlKey','metaKey','shiftKey','altKey']){zoom=1;const count=prevented;wheel(-100,{[modifier]:true});assert.equal(zoom,1);assert.equal(prevented,count)}
zoom=1;wheel(-1,{deltaMode:1});assert(zoom>1);zoom=1;wheel(-1,{deltaMode:2});assert(zoom>1);zoom=1;wheel(5,{deltaX:20});assert.equal(zoom,1);wheel(0);assert.equal(zoom,1);
console.log('PASS: cursor-anchored wheel zoom in/out, 60–500% bounds, line/page deltas and preserved modified/horizontal gestures');
`,c);
