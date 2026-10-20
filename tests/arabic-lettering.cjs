const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const nodes={},document={getElementById:id=>nodes[id]??(nodes[id]={addEventListener(){}})};const c=vm.createContext({console,assert,document,crypto:require('node:crypto').webcrypto,window:{matchMedia:()=>({matches:false})}});
vm.runInContext(fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\ninit\(\);\s*$/,''),c);
vm.runInContext(`
for(const [text,expected] of [['مرحبا بالعالم','rtl'],['123 مرحبا','rtl'],['«السَّلَامُ عَلَيْكُمْ»','rtl'],['Hello مرحبا','ltr'],['123 hello','ltr'],['','ltr'],['שלום','rtl']])assert.equal(textDirection({text}),expected);
assert.equal(textDirection({text:'مرحبا',direction:'ltr'}),'ltr');assert.equal(textDirection({text:'Hello',direction:'rtl'}),'rtl');
book=initialBook();const old=JSON.parse(snapshot());for(const p of old.pages)for(const n of p.panels)for(const b of n.bubbles)delete b.direction;validateBook(old);assert.equal(old.pages[0].panels[0].bubbles[0].direction,'auto');const b=old.pages[0].panels[0].bubbles[0];b.text='السَّلَامُ عَلَيْكُمْ 123';b.font='arabic';b.direction='rtl';validateBook(JSON.parse(JSON.stringify(old)));b.direction='invalid';assert.throws(()=>validateBook(JSON.parse(JSON.stringify(old))));b.direction='rtl';
const graphemes=letteringGraphemes('بِسْمِ');assert(graphemes.every(s=>!/^\\p{Mark}/u.test(s)));assert.equal(graphemes.join(''),'بِسْمِ');
const calls=[],ctx=new Proxy({measureText:s=>({width:letteringGraphemes(s).length*8,fontBoundingBoxAscent:12,fontBoundingBoxDescent:4}),fillText(text,x,y){calls.push({text,direction:this.direction})}},{get:(o,k)=>k in o?o[k]:()=>{}});
for(const type of ['speech','thought','caption','sfx']){calls.length=0;const item=bubbleDefaults({id:uid(),type,text:'مرحبا بالعالم',font:'arabic',x:10,y:10,width:70,size:16});drawBubble(ctx,item,{x:0,y:0,w:500,h:500});assert(calls.length);assert(calls.every(c=>c.direction==='rtl'));assert.equal(calls.map(c=>c.text).join(' '),item.text)}
console.log('PASS: Arabic and mixed text direction, explicit overrides, legacy defaults and project validation, Arabic font selection, intact diacritics, and RTL Canvas drawing for all four lettering types');
`,c);
