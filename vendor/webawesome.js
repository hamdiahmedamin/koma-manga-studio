(()=>{var Et=()=>({checkValidity(t){let e=t.input,i={message:"",isValid:!0,invalidKeys:[]};if(!e)return i;let o=!0;if("checkValidity"in e&&(o=e.checkValidity()),o)return i;if(i.isValid=!1,"validationMessage"in e&&(i.message=e.validationMessage),!("validity"in e))return i.invalidKeys.push("customError"),i;for(let r in e.validity){if(r==="valid")continue;let s=r;e.validity[s]&&i.invalidKeys.push(s)}return i}});var ze=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};var Pr=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Di=t=>{throw TypeError(t)},a=(t,e,i,o)=>{for(var r=o>1?void 0:o?Br(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&Pr(e,i,r),r},Vi=(t,e,i)=>e.has(t)||Di("Cannot "+i),Pi=(t,e,i)=>(Vi(t,e,"read from private field"),i?i.call(t):e.get(t)),Bi=(t,e,i)=>e.has(t)?Di("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Ii=(t,e,i,o)=>(Vi(t,e,"write to private field"),o?o.call(t,i):e.set(t,i),i);var Ee=globalThis,_e=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oi=Symbol(),qi=new WeakMap,ce=class{constructor(e,i,o){if(this._$cssResult$=!0,o!==oi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o,i=this.t;if(_e&&e===void 0){let o=i!==void 0&&i.length===1;o&&(e=qi.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&qi.set(i,e))}return e}toString(){return this.cssText}},Ni=t=>new ce(typeof t=="string"?t:t+"",void 0,oi),L=(t,...e)=>{let i=t.length===1?t[0]:e.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new ce(i,t,oi)},Ui=(t,e)=>{if(_e)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of e){let o=document.createElement("style"),r=Ee.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,t.appendChild(o)}},ri=_e?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(let o of e.cssRules)i+=o.cssText;return Ni(i)})(t):t;var{is:Ir,defineProperty:qr,getOwnPropertyDescriptor:Nr,getOwnPropertyNames:Ur,getOwnPropertySymbols:Hr,getPrototypeOf:Wr}=Object,Te=globalThis,Hi=Te.trustedTypes,jr=Hi?Hi.emptyScript:"",Xr=Te.reactiveElementPolyfillSupport,he=(t,e)=>t,de={toAttribute(t,e){switch(e){case Boolean:t=t?jr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Oe=(t,e)=>!Ir(t,e),Wi={attribute:!0,type:String,converter:de,reflect:!1,useDefault:!1,hasChanged:Oe};Symbol.metadata??=Symbol("metadata"),Te.litPropertyMetadata??=new WeakMap;var yt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=Wi){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(e,o,i);r!==void 0&&qr(this.prototype,e,r)}}static getPropertyDescriptor(e,i,o){let{get:r,set:s}=Nr(this.prototype,e)??{get(){return this[i]},set(n){this[i]=n}};return{get:r,set(n){let c=r?.call(this);s?.call(this,n),this.requestUpdate(e,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Wi}static _$Ei(){if(this.hasOwnProperty(he("elementProperties")))return;let e=Wr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(he("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(he("properties"))){let i=this.properties,o=[...Ur(i),...Hr(i)];for(let r of o)this.createProperty(r,i[r])}let e=this[Symbol.metadata];if(e!==null){let i=litPropertyMetadata.get(e);if(i!==void 0)for(let[o,r]of i)this.elementProperties.set(o,r)}this._$Eh=new Map;for(let[i,o]of this.elementProperties){let r=this._$Eu(i,o);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let i=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let r of o)i.unshift(ri(r))}else e!==void 0&&i.push(ri(e));return i}static _$Eu(e,i){let o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,i=this.constructor.elementProperties;for(let o of i.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ui(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,o){this._$AK(e,o)}_$ET(e,i){let o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(r!==void 0&&o.reflect===!0){let s=(o.converter?.toAttribute!==void 0?o.converter:de).toAttribute(i,o.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,i){let o=this.constructor,r=o._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:de;this._$Em=r;let c=n.fromAttribute(i,s.type);this[r]=c??this._$Ej?.get(r)??c,this._$Em=null}}requestUpdate(e,i,o,r=!1,s){if(e!==void 0){let n=this.constructor;if(r===!1&&(s=this[e]),o??=n.getPropertyOptions(e),!((o.hasChanged??Oe)(s,i)||o.useDefault&&o.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,o))))return;this.C(e,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:o,reflect:r,wrapped:s},n){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??i??this[e]),s!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(i=void 0),this._$AL.set(e,i)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[r,s]of o){let{wrapped:n}=s,c=this[r];n!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,s,c)}}let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(i)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(e){}firstUpdated(e){}};yt.elementStyles=[],yt.shadowRootOptions={mode:"open"},yt[he("elementProperties")]=new Map,yt[he("finalized")]=new Map,Xr?.({ReactiveElement:yt}),(Te.reactiveElementVersions??=[]).push("2.1.2");var si=globalThis,ji=t=>t,Re=si.trustedTypes,Xi=Re?Re.createPolicy("lit-html",{createHTML:t=>t}):void 0,ni="$lit$",Ct=`lit$${Math.random().toFixed(9).slice(2)}$`,li="?"+Ct,Kr=`<${li}>`,Pt=document,pe=()=>Pt.createComment(""),me=t=>t===null||typeof t!="object"&&typeof t!="function",ci=Array.isArray,Qi=t=>ci(t)||typeof t?.[Symbol.iterator]=="function",ai=`[ 	
\f\r]`,ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ki=/-->/g,Yi=/>/g,Dt=RegExp(`>|${ai}(?:([^\\s"'>=/]+)(${ai}*=${ai}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gi=/'/g,Zi=/"/g,to=/^(?:script|style|textarea|title)$/i,hi=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),v=hi(1),eo=hi(2),io=hi(3),W=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Ji=new WeakMap,Vt=Pt.createTreeWalker(Pt,129);function oo(t,e){if(!ci(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xi!==void 0?Xi.createHTML(e):e}var ro=(t,e)=>{let i=t.length-1,o=[],r,s=e===2?"<svg>":e===3?"<math>":"",n=ue;for(let c=0;c<i;c++){let h=t[c],d,u,p=-1,f=0;for(;f<h.length&&(n.lastIndex=f,u=n.exec(h),u!==null);)f=n.lastIndex,n===ue?u[1]==="!--"?n=Ki:u[1]!==void 0?n=Yi:u[2]!==void 0?(to.test(u[2])&&(r=RegExp("</"+u[2],"g")),n=Dt):u[3]!==void 0&&(n=Dt):n===Dt?u[0]===">"?(n=r??ue,p=-1):u[1]===void 0?p=-2:(p=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?Dt:u[3]==='"'?Zi:Gi):n===Zi||n===Gi?n=Dt:n===Ki||n===Yi?n=ue:(n=Dt,r=void 0);let m=n===Dt&&t[c+1].startsWith("/>")?" ":"";s+=n===ue?h+Kr:p>=0?(o.push(d),h.slice(0,p)+ni+h.slice(p)+Ct+m):h+Ct+(p===-2?c:m)}return[oo(t,s+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},fe=class t{constructor({strings:e,_$litType$:i},o){let r;this.parts=[];let s=0,n=0,c=e.length-1,h=this.parts,[d,u]=ro(e,i);if(this.el=t.createElement(d,o),Vt.currentNode=this.el.content,i===2||i===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=Vt.nextNode())!==null&&h.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(ni)){let f=u[n++],m=r.getAttribute(p).split(Ct),g=/([.?@])?(.*)/.exec(f);h.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?Fe:g[1]==="?"?De:g[1]==="@"?Ve:It}),r.removeAttribute(p)}else p.startsWith(Ct)&&(h.push({type:6,index:s}),r.removeAttribute(p));if(to.test(r.tagName)){let p=r.textContent.split(Ct),f=p.length-1;if(f>0){r.textContent=Re?Re.emptyScript:"";for(let m=0;m<f;m++)r.append(p[m],pe()),Vt.nextNode(),h.push({type:2,index:++s});r.append(p[f],pe())}}}else if(r.nodeType===8)if(r.data===li)h.push({type:2,index:s});else{let p=-1;for(;(p=r.data.indexOf(Ct,p+1))!==-1;)h.push({type:7,index:s}),p+=Ct.length-1}s++}}static createElement(e,i){let o=Pt.createElement("template");return o.innerHTML=e,o}};function Bt(t,e,i=t,o){if(e===W)return e;let r=o!==void 0?i._$Co?.[o]:i._$Cl,s=me(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,i,o)),o!==void 0?(i._$Co??=[])[o]=r:i._$Cl=r),r!==void 0&&(e=Bt(t,r._$AS(t,e.values),r,o)),e}var Me=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:i},parts:o}=this._$AD,r=(e?.creationScope??Pt).importNode(i,!0);Vt.currentNode=r;let s=Vt.nextNode(),n=0,c=0,h=o[0];for(;h!==void 0;){if(n===h.index){let d;h.type===2?d=new Gt(s,s.nextSibling,this,e):h.type===1?d=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(d=new Pe(s,this,e)),this._$AV.push(d),h=o[++c]}n!==h?.index&&(s=Vt.nextNode(),n++)}return Vt.currentNode=Pt,r}p(e){let i=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}},Gt=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,o,r){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Bt(this,e,i),me(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==W&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Qi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==M&&me(this._$AH)?this._$AA.nextSibling.data=e:this.T(Pt.createTextNode(e)),this._$AH=e}$(e){let{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=fe.createElement(oo(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(i);else{let s=new Me(r,this),n=s.u(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(e){let i=Ji.get(e.strings);return i===void 0&&Ji.set(e.strings,i=new fe(e)),i}k(e){ci(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,o,r=0;for(let s of e)r===i.length?i.push(o=new t(this.O(pe()),this.O(pe()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){let o=ji(e).nextSibling;ji(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},It=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,o,r,s){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=M}_$AI(e,i=this,o,r){let s=this.strings,n=!1;if(s===void 0)e=Bt(this,e,i,0),n=!me(e)||e!==this._$AH&&e!==W,n&&(this._$AH=e);else{let c=e,h,d;for(e=s[0],h=0;h<s.length-1;h++)d=Bt(this,c[o+h],i,h),d===W&&(d=this._$AH[h]),n||=!me(d)||d!==this._$AH[h],d===M?e=M:e!==M&&(e+=(d??"")+s[h+1]),this._$AH[h]=d}n&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Fe=class extends It{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},De=class extends It{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},Ve=class extends It{constructor(e,i,o,r,s){super(e,i,o,r,s),this.type=5}_$AI(e,i=this){if((e=Bt(this,e,i,0)??M)===W)return;let o=this._$AH,r=e===M&&o!==M||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==M&&(o===M||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Pe=class{constructor(e,i,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Bt(this,e)}},ao={M:ni,P:Ct,A:li,C:1,L:ro,R:Me,D:Qi,V:Bt,I:Gt,H:It,N:De,U:Ve,B:Fe,F:Pe},Yr=si.litHtmlPolyfillSupport;Yr?.(fe,Gt),(si.litHtmlVersions??=[]).push("3.3.3");var so=(t,e,i)=>{let o=i?.renderBefore??e,r=o._$litPart$;if(r===void 0){let s=i?.renderBefore??null;o._$litPart$=r=new Gt(e.insertBefore(pe(),s),s,void 0,i??{})}return r._$AI(t),r};var di=globalThis,_t=class extends yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=so(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};_t._$litElement$=!0,_t.finalized=!0,di.litElementHydrateSupport?.({LitElement:_t});var Gr=di.litElementPolyfillSupport;Gr?.({LitElement:_t});(di.litElementVersions??=[]).push("4.2.2");var R=t=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var Zr={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:Oe},Jr=(t=Zr,e,i)=>{let{kind:o,metadata:r}=i,s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),o==="accessor"){let{name:n}=i;return{set(c){let h=e.get.call(this);e.set.call(this,c),this.requestUpdate(n,h,t,!0,c)},init(c){return c!==void 0&&this.C(n,void 0,t,c),c}}}if(o==="setter"){let{name:n}=i;return function(c){let h=this[n];e.call(this,c),this.requestUpdate(n,h,t,!0,c)}}throw Error("Unsupported decorator location: "+o)};function l(t){return(e,i)=>typeof i=="object"?Jr(t,e,i):((o,r,s)=>{let n=r.hasOwnProperty(s);return r.constructor.createProperty(s,o),n?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,i)}function P(t){return l({...t,state:!0,attribute:!1})}var qt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);function y(t,e){return(i,o,r)=>{let s=n=>n.renderRoot?.querySelector(t)??null;if(e){let{get:n,set:c}=typeof o=="object"?i:r??(()=>{let h=Symbol();return{get(){return this[h]},set(d){this[h]=d}}})();return qt(i,o,{get(){let h=n.call(this);return h===void 0&&(h=s(this),(h!==null||this.hasUpdated)&&c.call(this,h)),h}})}return qt(i,o,{get(){return s(this)}})}}var Qr=L`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden],
  :host([hidden]) {
    display: none !important;
  }
`,ta=/;\s+$/;function ea(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function no(t){let{property:e,value:i,element:o}=t;if(i){let r=o.getAttribute("style")||"";r&&(r.match(ta)||(r+=";"),r+=" ");let s=`${e}: ${i}`;return r.includes(s)?void 0:`${r}${s};`}return null}var Be,H=class extends _t{constructor(){super(),Bi(this,Be,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,i)=>{if(this.internals?.states)try{i?this.internals.states.add(e):this.internals.states.delete(e)}catch(o){if(String(o).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw o}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,i]of t.elementProperties)i.default==="inherit"&&i.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${i.initial}`,!0)}static get styles(){let t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Qr,...t]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))})}attributeChangedCallback(t,e,i){Pi(this,Be)||(this.constructor.elementProperties.forEach((o,r)=>{o.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),Ii(this,Be,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){let i=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});i.error=e,this.dispatchEvent(i)}throw e}}setStyle(t,e){if(!this.style){let i=no({property:ea(t),value:e,element:this});i&&this.setAttribute("style",i);return}this.style[t]=e}setStyleProperty(t,e){if(!this.style){let i=no({property:t,value:e,element:this});i&&this.setAttribute("style",i);return}this.style.setProperty(t,e)}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};Be=new WeakMap;a([l()],H.prototype,"dir",2);a([l()],H.prototype,"lang",2);a([l({type:Boolean,reflect:!0,attribute:"did-ssr"})],H.prototype,"didSSR",2);var ia=()=>({observedAttributes:["custom-error"],checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),F=class extends H{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new ze))},this.handleInteraction=t=>{let e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},"addEventListener"in this&&this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[ia()]}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let e of this.validators)if(e.observedAttributes)for(let i of e.observedAttributes)t.add(i);return[...t]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener?.(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(!!1&&t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")||t.has("defaultValue")){let e=this.value;this.updateFormValue(e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!!1&&!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),super.willUpdate(t),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(t){if(Array.isArray(t)){if(this.name){let e=new FormData;for(let i of t)e.append(this.name,i);this.setValue(e,e)}}else this.setValue(t,t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(t){t?this.setAttribute("form",t):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){let e=t[0],i=t[1],o=t[2];o||(o=this.validationTarget),this.internals.setValidity(e,i,o||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let t=!!this.required,e=this.internals.validity.valid,i=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&i),this.customStates.set("user-valid",e&&i)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}):(this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity())}setValue(...t){let[e,i]=t;this.internals.setFormValue(e,i)}get allValidators(){let t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let t=this.allValidators;if(!t?.length)return;let e={customError:!!this.customError},i=this.validationTarget||this.input||void 0,o="";for(let r of t){let{isValid:s,message:n,invalidKeys:c}=r.checkValidity(this);s||(o||(o=n),c?.length>=0&&c.forEach(h=>e[h]=!0))}o||(o=this.validationMessage),this.setValidity(e,o,i)}};F.formAssociated=!0;a([l({reflect:!0})],F.prototype,"name",2);a([l({type:Boolean})],F.prototype,"disabled",2);a([l({state:!0,attribute:!1})],F.prototype,"valueHasChanged",2);a([l({state:!0,attribute:!1})],F.prototype,"hasInteracted",2);a([l({attribute:"custom-error",reflect:!0})],F.prototype,"customError",2);a([l({attribute:!1,state:!0,type:Object})],F.prototype,"validity",1);var lo={small:"s",medium:"m",large:"l"},co=new Set;function Y(t,e){e in lo&&!co.has(`${t}:${e}`)&&(co.add(`${t}:${e}`),console.warn(`[${t}] size="${e}" is deprecated. Use size="${lo[e]}" instead. The long-form value will be removed in the next major version.`))}var et=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{let o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1}):!1}hasNamedSlot(t){return this.host.querySelector?.(`:scope > [slot="${t}"]`)!==null}test(t,e){return e&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[e]:t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){let t=this.host.shadowRoot;t&&"addEventListener"in t&&t.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){let t=this.host.shadowRoot;t&&"removeEventListener"in t&&t.removeEventListener("slotchange",this.handleSlotChange)}};var G=L`
  :host([size='xs']) {
    font-size: var(--wa-font-size-xs);
  }

  :host([size='s']),
  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='m']),
  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='l']),
  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  :host([size='xl']) {
    font-size: var(--wa-font-size-xl);
  }
`;var ho=L`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity, transform;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    transform-origin: center;
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));

    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Hover and active transforms */
  .button:not(.disabled):not(.loading) {
    @media (hover: hover) {
      &:hover {
        transform: var(--wa-button-transform-hover);
      }
    }
    &:active {
      transform: var(--wa-button-transform-active);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover,
      &:active {
        transform: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  /* Icon buttons with a caret need to grow to fit both the icon and the caret */
  .button.is-icon-button.caret {
    width: auto;
    aspect-ratio: auto;
    min-width: var(--wa-form-control-height);
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
    justify-content: center;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      /* Hidden with opacity, not visibility, so the label stays in the accessibility tree */
      opacity: 0;

      /* Unlike visibility: hidden, opacity leaves the content clickable */
      pointer-events: none;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`;var Ie=L`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;function C(t,e){let i={waitUntilFirstUpdate:!1,...e};return(o,r)=>{let{update:s}=o,n=Array.isArray(t)?t:[t];o.update=function(c){n.forEach(h=>{let d=h;if(c.has(d)){let u=c.get(d),p=this[d];u!==p&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](u,p)}}),s.call(this,c)}}}var ui=new Set,Zt=new Map,xt,pi="ltr",mi="en",uo=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(uo){let t=new MutationObserver(po);pi=document.documentElement.dir||"ltr",mi=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ge(...t){t.map(e=>{let i=e.$code.toLowerCase();Zt.has(i)?Zt.set(i,Object.assign(Object.assign({},Zt.get(i)),e)):Zt.set(i,e),xt||(xt=e)}),po()}function po(){uo&&(pi=document.documentElement.dir||"ltr",mi=document.documentElement.lang||navigator.language),[...ui.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var qe=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ui.add(this.host)}hostDisconnected(){ui.delete(this.host)}dir(){return`${this.host.dir||pi}`.toLowerCase()}lang(){let e=`${this.host.lang||mi}`.toLowerCase().replace(/_/g,"-");try{return new Intl.Locale(e),e}catch{return xt?xt.$code.toLowerCase():"en"}}getTranslationData(e){var i,o;let r;try{r=new Intl.Locale(e.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let s=r.language.toLowerCase(),n=(o=(i=r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",c=Zt.get(`${s}-${n}`),h=Zt.get(s);return{locale:r,language:s,region:n,primary:c,secondary:h}}exists(e,i){var o;let{primary:r,secondary:s}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||s&&s[e]||i.includeFallback&&xt&&xt[e])}term(e,...i){let{primary:o,secondary:r}=this.getTranslationData(this.lang()),s;if(o&&o[e])s=o[e];else if(r&&r[e])s=r[e];else if(xt&&xt[e])s=xt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...i):s}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var mo={$code:"en",$name:"English",$dir:"ltr",allTagsRemoved:"All tags removed",am:"AM",autosizeColumn:"Autosize column",captions:"Captions",carousel:"Carousel",chooseDate:"Choose date",chooseDecade:"Choose decade",chooseMonth:"Choose month",chooseTime:"Choose time",chooseYear:"Choose year",clearEntry:"Clear entry",clearFilter:"Clear filter",clearSort:"Clear sort",close:"Close",closeCalendar:"Close calendar",closeTimeInput:"Close time picker",collapseRow:"Collapse row",columnMenu:"Column options",columnMovedToPosition:(t,e,i)=>`${t} moved to position ${e} of ${i}`,columns:"Columns",compactPageXOfY:(t,e)=>`${t} of ${e}`,completed:"Completed",copied:"Copied",copy:"Copy",createOption:t=>`Create "${t}"`,currentlyPlaying:"currently playing",currentValue:"Current value",date:"Date",datePickerKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the calendar.",day:"Day",dayPeriod:"AM/PM",decrement:"Decrement",deselectAllRows:"Deselect all rows",disabled:"Disabled",dropFileHere:"Drop file here or click to browse",dropFilesHere:"Drop files here or click to browse",empty:"Empty",endDate:"End date",enterFullscreen:"Enter fullscreen",error:"Error",exitFullscreen:"Exit fullscreen",expandRow:"Expand row",filterByColumn:t=>`Filter by ${t}`,filterFrom:"From",filterMax:"Max",filterMin:"Min",filterTo:"To",firstPage:"First page",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hideColumn:"Hide column",hidePassword:"Hide password",hour:"Hour",incompleteDate:"Enter a valid date.",increment:"Increment",jumpBackwardX:t=>`Jump back ${t} pages`,jumpForwardX:t=>`Jump forward ${t} pages`,lastPage:"Last page",loading:"Loading",locked:"Locked",minute:"Minute",month:"Month",moreOptions:"More Options",mute:"Mute",nextDecade:"Next decade",nextMonth:"Next month",nextPage:"Next page",nextSlide:"Next slide",nextVideo:"Next Video",nextYear:"Next year",noData:"No data",noOptions:"No options",noResults:"No matching results",notCompleted:"Not completed",now:"Now",numCharacters:t=>t===1?"1 character":`${t} characters`,numCharactersRemaining:t=>t===1?"1 character remaining":`${t} characters remaining`,numOptionsAvailable:t=>t===0?"No options available":t===1?"1 option available":`${t} options available`,numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,numRowsCopied:t=>t===1?"1 row copied":`${t} rows copied`,numRowsSelected:t=>t===1?"1 row selected":`${t} rows selected`,optionPosition:(t,e,i)=>`${t}, ${e} of ${i}`,optionsLoadError:"Options could not be loaded",pageXOfY:(t,e)=>`Page ${t} of ${e}`,pagination:"Pagination",pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",pinLeft:"Pin left",pinRight:"Pin right",play:"Play",playAnimation:"Play animation",playbackSpeed:"Playback speed",playlist:"Playlist",pm:"PM",previousDecade:"Previous decade",previousMonth:"Previous month",previousPage:"Previous page",previousSlide:"Previous slide",previousVideo:"Previous video",previousYear:"Previous year",progress:"Progress",rangeTooLong:t=>t===1?"Select a range no longer than 1 day":`Select a range no longer than ${t} days`,rangeTooShort:t=>t===1?"Select a range at least 1 day long":`Select a range at least ${t} days long`,readonly:"Read-only",remove:"Remove",resetColumns:"Reset columns",resize:"Resize",resizeColumn:"Resize column",rowsPerPage:"Rows per page",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",search:"Search",second:"Second",seek:"Seek",seekProgress:(t,e)=>`${t} of ${e}`,selectAColorFromTheScreen:"Select a color from the screen",selectAllRows:"Select all rows",selected:"Selected",selectedDateLabel:t=>`Selected: ${t}`,selectedRangeLabel:t=>`Selected range: ${t}`,selectGroup:"Select group",selectionCleared:"Selection cleared",selectRow:"Select row",showingNofMRows:(t,e)=>`Showing ${t} of ${e} rows`,showingXtoYofZ:(t,e,i)=>`${t}\u2013${e} of ${i}`,showPassword:"Show password",slideNum:t=>`Slide ${t}`,sortAscending:"Sort ascending",sortColumn:"Sort column",sortDescending:"Sort descending",startDate:"Start date",steps:"Steps",stepXOfY:(t,e)=>`Step ${t} of ${e}`,tagAdded:t=>`${t} added`,tagAlreadyAdded:t=>`${t} is already added`,tagInputKeyboardHelp:"Press Backspace or Delete to remove this tag.",tagRemoved:t=>`${t} removed`,time:"Time",timeInputKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the time picker.",today:"Today",toggleColorFormat:"Toggle color format",tooFewTags:t=>t===1?"Add at least 1 tag":`Add at least ${t} tags`,tooManyTags:t=>t===1?"Add no more than 1 tag":`Add no more than ${t} tags`,unmute:"Unmute",unpin:"Unpin",unpinColumn:"Unpin column",videoPlayer:"Video player",volume:"Volume",year:"Year",zoomIn:"Zoom in",zoomOut:"Zoom out"};ge(mo);var fo=mo;var B=class extends qe{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||"en":super.lang()}};ge(fo);var it={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Tt=t=>(...e)=>({_$litDirective$:t,values:e}),mt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};var T=Tt(class extends mt{constructor(t){if(super(t),t.type!==it.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}let i=t.element.classList;for(let o of this.st)o in e||(i.remove(o),this.st.delete(o));for(let o in e){let r=!!e[o];r===this.st.has(o)||this.nt?.has(o)||(r?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return W}});var w=t=>t??M;var vo=Symbol.for(""),oa=t=>{if(t?.r===vo)return t?._$litStatic$};var fi=(t,...e)=>({_$litStatic$:e.reduce((i,o,r)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[r+1],t[0]),r:vo}),go=new Map,gi=t=>(e,...i)=>{let o=i.length,r,s,n=[],c=[],h,d=0,u=!1;for(;d<o;){for(h=e[d];d<o&&(s=i[d],(r=oa(s))!==void 0);)h+=r+e[++d],u=!0;d!==o&&c.push(s),n.push(h),d++}if(d===o&&n.push(e[o]),u){let p=n.join("$$lit$$");(e=go.get(p))===void 0&&(n.raw=n,go.set(p,e=n)),i=c}return t(e,...i)},Ne=gi(v),Tn=gi(eo),On=gi(io);var A=class extends F{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new et(this,"[default]","start","end"),this.localize=new B(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="m",this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,Et()]}handleSizeChange(){Y(this.localName,this.size)}constructLightDOMButton(){let t=document.createElement("button");for(let e of this.attributes)e.name!=="style"&&t.setAttribute(e.name,e.value);return t.type=this.type,t.style.position="absolute !important",t.style.width="0 !important",t.style.height="0 !important",t.style.clipPath="inset(50%) !important",t.style.overflow="hidden !important",t.style.whiteSpace="nowrap !important",this.name&&(t.name=this.name),t.value=this.value||"",t}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;let i=this.constructLightDOMButton();this.parentElement?.append(i),i.click(),i.remove()}handleInvalid(){this.dispatchEvent(new ze)}handleLabelSlotChange(){let t=this.labelSlot.assignedNodes({flatten:!0}),e=!1,i=!1,o=!1,r=!1;[...t].forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){let n=s;n.localName==="wa-icon"?(i=!0,e||(e=n.label!==void 0)):r=!0}else s.nodeType===Node.TEXT_NODE&&(s.textContent?.trim()||"").length>0&&(o=!0)}),this.isIconButton=i&&!o&&!r,this.customStates.set("icon-button",this.isIconButton),this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set("link",this.isLink())}handleLoadingChange(){this.customStates.set("loading",this.loading)}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=this.isLink(),e=t?fi`a`:fi`button`;return Ne`
      <${e}
        part="base button"
        class=${T({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start","withStart"),"has-end":this.hasSlotController.test("end","withEnd"),"is-icon-button":this.isIconButton})}
        ?disabled=${w(t?void 0:this.disabled)}
        type=${w(t?void 0:this.type)}
        title=${this.title}
        name=${w(t?void 0:this.name)}
        value=${w(t?void 0:this.value)}
        href=${w(t?this.href:void 0)}
        target=${w(t?this.target:void 0)}
        download=${w(t?this.download:void 0)}
        rel=${w(t&&this.rel?this.rel:void 0)}
        role=${w(t?void 0:"button")}
        aria-disabled=${w(t&&this.disabled?"true":void 0)}
        aria-busy=${this.loading?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Ne`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?Ne`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};A.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0};A.css=[ho,Ie,G];a([y(".button")],A.prototype,"button",2);a([y("slot:not([name])")],A.prototype,"labelSlot",2);a([P()],A.prototype,"invalid",2);a([P()],A.prototype,"isIconButton",2);a([l()],A.prototype,"title",2);a([l({reflect:!0})],A.prototype,"variant",2);a([l({reflect:!0})],A.prototype,"appearance",2);a([l({reflect:!0})],A.prototype,"size",2);a([C("size")],A.prototype,"handleSizeChange",1);a([l({attribute:"with-caret",type:Boolean,reflect:!0})],A.prototype,"withCaret",2);a([l({attribute:"with-start",type:Boolean})],A.prototype,"withStart",2);a([l({attribute:"with-end",type:Boolean})],A.prototype,"withEnd",2);a([l({type:Boolean})],A.prototype,"disabled",2);a([l({type:Boolean,reflect:!0})],A.prototype,"loading",2);a([l({type:Boolean,reflect:!0})],A.prototype,"pill",2);a([l()],A.prototype,"type",2);a([l({reflect:!0})],A.prototype,"name",2);a([l({reflect:!0})],A.prototype,"value",2);a([l({reflect:!0})],A.prototype,"href",2);a([l()],A.prototype,"target",2);a([l()],A.prototype,"rel",2);a([l()],A.prototype,"download",2);a([l({attribute:"formaction"})],A.prototype,"formAction",2);a([l({attribute:"formenctype"})],A.prototype,"formEnctype",2);a([l({attribute:"formmethod"})],A.prototype,"formMethod",2);a([l({attribute:"formnovalidate",type:Boolean})],A.prototype,"formNoValidate",2);a([l({attribute:"formtarget"})],A.prototype,"formTarget",2);a([C("disabled",{waitUntilFirstUpdate:!0})],A.prototype,"handleDisabledChange",1);a([C("href")],A.prototype,"handleHrefChange",1);a([C("loading",{waitUntilFirstUpdate:!0})],A.prototype,"handleLoadingChange",1);A=a([R("wa-button")],A);A.disableWarning?.("change-in-update");var bo=L`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;
    --size: 1em;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) / 2);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    r: var(--radius);
    fill: none;
    stroke-width: var(--track-width);
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: calc(0.597 * var(--circumference)), calc(0.796 * var(--circumference));
    stroke-dashoffset: calc(-0.04 * var(--circumference));
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: calc(0.008 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.278 * var(--circumference));
    }
    100% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.987 * var(--circumference));
    }
  }
`;var vi=class extends H{constructor(){super(...arguments),this.localize=new B(this)}render(){return v`
      <svg
        part="base spinner"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}};vi.css=bo;vi=a([R("wa-spinner")],vi);var wo=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};var yo=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var Co=L`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* #region Canvas — the box the icon is centered within (mirrors Font Awesome's icon canvas). Orthogonal to font-size. */

  /* Fixed width (default): 1.25em × 1em (20 × 16px) */
  :host(:not([canvas])),
  :host([canvas='fixed']) {
    width: 1.25em;
    height: 1em;
    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Auto: hug the icon's width. \`auto-width\` is the deprecated alias for canvas="auto". */
  :host([canvas='auto']),
  :host([auto-width]:not([canvas])) {
    width: auto;
    height: 1em;
  }

  /* Square: 1.25em × 1.25em (20 × 20px) */
  :host([canvas='square']) {
    width: 1.25em;
    height: 1.25em;
    min-width: 1.25em;
    min-height: 1.25em;
  }

  /* Roomy: 1.5em × 1.5em (24 × 24px) */
  :host([canvas='roomy']) {
    width: 1.5em;
    height: 1.5em;
    min-width: 1.5em;
    min-height: 1.5em;
  }

  /* #endregion */

  svg {
    /* NOTE: Avoid setting fill here. A stylesheet rule beats SVG presentation attributes, breaking stroke-based
       libraries like Lucide (fill="none" stroke="currentColor") and attribute-based mutators (issue #1733). The default
       library applies fill="currentColor" in its mutator instead. */
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* #region Animations — ported from Font Awesome 7.3 (--fa-* props mapped to wa-icon's --* names) */

  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.5s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip-360']) {
    animation-name: flip-360;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.75s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  /* spin-reverse is FA's reverse modifier expressed as a standalone value; reverse any spin via --animation-direction: reverse */
  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap']) {
    animation-name: spin-snap;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-4']) {
    animation-name: spin-snap-4;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2.4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-8']) {
    animation-name: spin-snap-8;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='buzz']) {
    animation-name: buzz;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.6s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='wag']) {
    animation-name: wag;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: bottom center;
  }

  :host([animation='float']) {
    animation-name: float;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
    will-change: transform;
  }

  :host([animation='swing']) {
    animation-name: swing;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: top center;
  }

  :host([animation='jello']) {
    animation-name: jello;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='flip-360']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']),
    :host([animation='spin-snap']),
    :host([animation='spin-snap-4']),
    :host([animation='spin-snap-8']),
    :host([animation='buzz']),
    :host([animation='wag']),
    :host([animation='float']),
    :host([animation='swing']),
    :host([animation='jello']) {
      animation: none !important;
      transition: none !important;
    }
  }

  /* #endregion */

  /* #region Keyframes — ported verbatim from Font Awesome 7.3 */

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    45% {
      transform: scale(calc(1.22 * var(--beat-scale, 1.22)));
    }
    65% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    90% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
      /* No fallback by design (ported from FA 7.3): the first segment uses the user's --animation-timing or the CSS
         initial ease, while the explicit cubic-beziers on later stops drive the bounce physics. */
      animation-timing-function: var(--animation-timing);
    }
    14% {
      transform: scale(var(--bounce-start-scale-x, 1.06), var(--bounce-start-scale-y, 0.94))
        translateY(var(--bounce-anticipation, 3px));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    32% {
      transform: scale(var(--bounce-jump-scale-x, 0.94), var(--bounce-jump-scale-y, 1.12))
        translateY(calc(-1 * var(--bounce-height, 0.5em)));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    52% {
      transform: scale(1, 1) translateY(calc(-1 * var(--bounce-height, 0.5em) * 1.1));
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    70% {
      transform: scale(var(--bounce-land-scale-x, 1.06), var(--bounce-land-scale-y, 0.92)) translateY(0);
      animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
    }
    85% {
      transform: scale(0.98, 1.04) translateY(calc(-2px * var(--bounce-rebound, 1)));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    40% {
      opacity: var(--fade-opacity, 0.4);
      transform: scale(0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes beat-fade {
    0% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    25% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    45% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    65% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
  }

  @keyframes flip {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    35% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: linear;
    }
    65% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.5));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    92% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes flip-360 {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    50% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    80% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(35deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    20% {
      transform: rotate(-22deg) translateX(-1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    35% {
      transform: rotate(15deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    50% {
      transform: rotate(-9deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    65% {
      transform: rotate(5deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    78% {
      transform: rotate(-3deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    90% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    12% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    16.67% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    28.67% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    33.33% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    45.33% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    62% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    66.67% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    78.67% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    83.33% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    95.33% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-4 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    15% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    40% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    65% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    90% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-8 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    9% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    12.5% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    21.5% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    34% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    37.5% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    46.5% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    59% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    62.5% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    71.5% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    84% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    87.5% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    96.5% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes buzz {
    0% {
      transform: translateX(0) rotate(0deg);
      animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
    }
    5% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.5deg);
    }
    10% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.5deg);
    }
    15% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.3deg);
    }
    20% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.3deg);
    }
    25% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.7)) rotate(0.2deg);
    }
    30% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
    }
    35% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.4)) rotate(0.1deg);
    }
    40% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

  @keyframes wag {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    12% {
      transform: rotate(var(--wag-angle, 12deg));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    24% {
      transform: rotate(2deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    36% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.85));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    48% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    58% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.6));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    15% {
      transform: translateY(calc(-0.4 * var(--float-height, 6px))) translateX(var(--float-drift, 1px))
        rotate(var(--float-tilt, 1deg)) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    35% {
      transform: translateY(calc(-1 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-stretch-x, 0.98), var(--float-stretch-y, 1.03));
      animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
    }
    50% {
      transform: translateY(calc(-0.92 * var(--float-height, 6px))) translateX(calc(-0.5 * var(--float-drift, 1px)))
        rotate(calc(-0.5 * var(--float-tilt, 1deg))) scale(0.995, 1.01);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    70% {
      transform: translateY(calc(-0.3 * var(--float-height, 6px))) translateX(calc(-1 * var(--float-drift, 1px)))
        rotate(calc(-1 * var(--float-tilt, 1deg))) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    90% {
      transform: translateY(calc(0.05 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
    }
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(var(--swing-angle, 22deg));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    18% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.85));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    28% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.65));
      animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
    }
    38% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.45));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    56% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.1));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    64% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes jello {
    0% {
      transform: scale(1, 1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    12% {
      transform: scale(var(--jello-scale-x, 1.15), calc(2 - var(--jello-scale-x, 1.15)));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    24% {
      transform: scale(calc(2 - var(--jello-scale-y, 1.12)), var(--jello-scale-y, 1.12));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    36% {
      transform: scale(
        calc(1 + (var(--jello-scale-x, 1.15) - 1) * 0.5),
        calc(2 - (1 + (var(--jello-scale-x, 1.15) - 1) * 0.5))
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: scale(
        calc(2 - (1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)),
        calc(1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    58% {
      transform: scale(1.02, 0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  /* #endregion */
`;var ra="",bi="";function xo(){return ra.replace(/\/$/,"")}function aa(t){bi=t}function Lo(){if(!bi){let t=document.querySelector("[data-fa-kit-code]");t&&aa(t.getAttribute("data-fa-kit-code")||"")}return bi}var ko="7.3.0";function sa(t,e,i){let o="solid";return e==="chisel"&&(o="chisel-regular"),e==="etch"&&(o="etch-solid"),e==="graphite"&&(o="graphite-thin"),e==="jelly"&&(o="jelly-regular",i==="duo-regular"&&(o="jelly-duo-regular"),i==="fill-regular"&&(o="jelly-fill-regular")),e==="jelly-duo"&&(o="jelly-duo-regular"),e==="jelly-fill"&&(o="jelly-fill-regular"),e==="notdog"&&(i==="solid"&&(o="notdog-solid"),i==="duo-solid"&&(o="notdog-duo-solid")),e==="notdog-duo"&&(o="notdog-duo-solid"),e==="slab"&&((i==="solid"||i==="regular")&&(o="slab-regular"),i==="press-regular"&&(o="slab-press-regular")),e==="slab-press"&&(o="slab-press-regular"),e==="slab-duo"&&(o="slab-duo-regular"),e==="slab-press-duo"&&(o="slab-press-duo-regular"),e==="thumbprint"&&(o="thumbprint-light"),e==="utility"&&(o="utility-semibold"),e==="utility-duo"&&(o="utility-duo-semibold"),e==="utility-fill"&&(o="utility-fill-semibold"),e==="whiteboard"&&(o="whiteboard-semibold"),e==="mosaic"&&(o="mosaic-solid"),e==="pixel"&&(o="pixel-regular"),e==="vellum"&&(o="vellum-solid"),e==="classic"&&(i==="thin"&&(o="thin"),i==="light"&&(o="light"),i==="regular"&&(o="regular"),i==="solid"&&(o="solid")),e==="duotone"&&(i==="thin"&&(o="duotone-thin"),i==="light"&&(o="duotone-light"),i==="regular"&&(o="duotone-regular"),i==="solid"&&(o="duotone")),e==="sharp"&&(i==="thin"&&(o="sharp-thin"),i==="light"&&(o="sharp-light"),i==="regular"&&(o="sharp-regular"),i==="solid"&&(o="sharp-solid")),e==="sharp-duotone"&&(i==="thin"&&(o="sharp-duotone-thin"),i==="light"&&(o="sharp-duotone-light"),i==="regular"&&(o="sharp-duotone-regular"),i==="solid"&&(o="sharp-duotone-solid")),e==="brands"&&(o="brands"),o}function na(t,e,i){let o=sa(t,e,i),r=xo();if(r)return`${r}/${o}/${t}.svg`;let s=Lo();return s.length>0?`https://ka-p.fontawesome.com/releases/v${ko}/svgs/${o}/${t}.svg?token=${encodeURIComponent(s)}`:`https://ka-f.fontawesome.com/releases/v${ko}/svgs/${o}/${t}.svg`}var la={name:"default",resolver:(t,e="classic",i="solid")=>na(t,e,i),mutator:(t,e)=>{if(t.hasAttribute("fill")||t.setAttribute("fill","currentColor"),e?.family&&!t.hasAttribute("data-duotone-initialized")){let{family:i,variant:o}=e;if(i==="duotone"||i==="sharp-duotone"||i==="notdog-duo"||i==="notdog"&&o==="duo-solid"||i==="jelly-duo"||i==="jelly"&&o==="duo-regular"||i==="utility-duo"||i==="slab-duo"||i==="slab-press-duo"||i==="thumbprint"){let r=[...t.querySelectorAll("path")],s=r.find(c=>!c.hasAttribute("opacity")),n=r.find(c=>c.hasAttribute("opacity"));if(!s||!n)return;if(s.setAttribute("data-duotone-primary",""),n.setAttribute("data-duotone-secondary",""),e.swapOpacity&&s&&n){let c=n.getAttribute("opacity")||"0.4";s.style.setProperty("--path-opacity",c),n.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},So=la;function ca(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var wi={solid:{"arrow-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>',"arrow-up":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>',backward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>',"backward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>',bars:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>',"angles-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>',"angles-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',"closed-captioning":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>',"closed-captioning-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>',compress:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',ellipsis:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>',"ellipsis-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',filter:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>',forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"forward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>',gauge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',"magnifying-glass":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',"picture-in-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',"table-columns":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>',thumbtack:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>',"up-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>',"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},ha={name:"system",resolver:(t,e="classic",i="solid")=>{let r=wi[i][t]??wi.regular[t]??wi.regular["circle-question"];return r?ca(r):""},mutator:t=>{t.hasAttribute("fill")||t.setAttribute("fill","currentColor")}},$o=ha;var da="classic",ua=[So,$o],Ao=new Set;function zo(t){Ao.add(t)}function Eo(t){Ao.delete(t)}function Ue(t){return ua.find(e=>e.name===t)}function _o(){return da}var{I:Ll}=ao;var To=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var Oo=t=>t.strings===void 0;var pa={},Ro=(t,e=pa)=>t._$AH=e;var ve=Symbol(),He=Symbol(),yi,Ci=new Map,j=class extends H{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(t,e)=>{let i;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=v`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;let o=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(o,this),this.svg}try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?ve:He}catch{return He}try{let o=document.createElement("div");o.innerHTML=await i.text();let r=o.firstElementChild;if(r?.tagName?.toLowerCase()!=="svg")return ve;yi||(yi=new DOMParser);let n=yi.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):ve}catch{return ve}}}connectedCallback(){super.connectedCallback(),zo(this)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Eo(this)}async getIconSource(){let t=Ue(this.library),e=this.family||_o();if(this.name&&t){let i=this.canvas==="auto"||this.autoWidth,o;try{o=await t.resolver(this.name,e,this.variant,i)}catch{o=void 0}return{url:o,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){let{url:t,fromLibrary:e}=await this.getIconSource(),i=e?Ue(this.library):void 0;if(!t){this.svg=null;return}let o=Ci.get(t);o||(o=this.resolveIcon(t,i),Ci.set(t,o));let r=await o;r===He&&Ci.delete(t);let s=await this.getIconSource();if(t===s.url){if(To(r)){this.svg=r;return}switch(r){case He:case ve:this.svg=null,this.dispatchEvent(new wo);break;default:this.svg=r.cloneNode(!0),i?.mutator?.(this.svg,this),this.dispatchEvent(new yo)}}}willUpdate(t){return this.style||this.setStyleProperty("--rotate-angle",`${this.rotate}deg`),super.willUpdate(t)}updated(t){super.updated(t);let e=Ue(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);let i=this.shadowRoot?.querySelector("svg");i&&e?.mutator?.(i,this)}render(){return this.hasUpdated?this.svg:v`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};j.css=Co;a([P()],j.prototype,"svg",2);a([l({reflect:!0})],j.prototype,"name",2);a([l({reflect:!0})],j.prototype,"family",2);a([l({reflect:!0})],j.prototype,"variant",2);a([l({reflect:!0})],j.prototype,"canvas",2);a([l({attribute:"auto-width",type:Boolean,reflect:!0})],j.prototype,"autoWidth",2);a([l({attribute:"swap-opacity",type:Boolean,reflect:!0})],j.prototype,"swapOpacity",2);a([l()],j.prototype,"src",2);a([l()],j.prototype,"label",2);a([l({reflect:!0})],j.prototype,"library",2);a([l({type:Number,reflect:!0})],j.prototype,"rotate",2);a([l({type:String,reflect:!0})],j.prototype,"flip",2);a([l({type:String,reflect:!0})],j.prototype,"animation",2);a([C("label")],j.prototype,"handleLabelChange",1);a([C(["family","name","library","variant","src","autoWidth","canvas","swapOpacity"],{waitUntilFirstUpdate:!0})],j.prototype,"setIcon",1);j=a([R("wa-icon")],j);var Mo=L`
  :host {
    --spacing: var(--wa-space-m);
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: block;
  }

  details {
    display: block;
    overflow-anchor: none;
    border: var(--wa-panel-border-width) var(--wa-color-surface-border) var(--wa-panel-border-style);
    background-color: var(--wa-color-surface-default);
    border-radius: var(--wa-panel-border-radius);
    color: var(--wa-color-text-normal);

    /* Print styles */
    @media print {
      background: none;
      border: solid var(--wa-border-width-s) var(--wa-color-surface-border);

      summary {
        list-style: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) details {
    background-color: transparent;
    border-color: transparent;
    border-radius: 0;
  }

  :host([appearance='outlined']) details {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-border-quiet);
  }

  :host([disabled]) details {
    opacity: 0.5;
    cursor: not-allowed;
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing);
    padding: var(--spacing); /* Add padding here */
    border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset));
    }
  }

  :host([open]) summary {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  /* 'Start' icon placement */
  :host([icon-placement='start']) summary {
    flex-direction: row-reverse;
    justify-content: start;
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-text-quiet);
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  :host([open]) [part~='icon'] {
    rotate: 90deg;
  }

  :host([open]:dir(rtl)) [part~='icon'] {
    rotate: -90deg;
  }

  :host([open]) slot[name='expand-icon'],
  :host(:not([open])) slot[name='collapse-icon'] {
    display: none;
  }

  .body.animating {
    overflow: hidden;
  }

  .content {
    display: block;
    box-sizing: border-box; /* Ensure contents don't overflow */
    padding-block-start: var(--spacing);
    padding-inline: var(--spacing); /* Add horizontal padding */
    padding-block-end: var(--spacing); /* Add bottom padding */
  }
`;var Jt=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var Qt=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};var te=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};var ee=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};function Lt(t,e){return new Promise(i=>{function o(r){r.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}async function xi(t,e,i){return t.animate(e,i).finished.catch(()=>{})}function ie(t,e){return new Promise(i=>{let o=new AbortController,{signal:r}=o;if(t.classList.contains(e))return;t.classList.add(e);let s=!1,n=()=>{s||(s=!0,t.classList.remove(e),i(),o.abort())};t.addEventListener("animationend",n,{once:!0,signal:r}),t.addEventListener("animationcancel",n,{once:!0,signal:r}),requestAnimationFrame(()=>{!s&&t.getAnimations().length===0&&n()})})}function Li(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t)||0:t.indexOf("s")>-1?(parseFloat(t)||0)*1e3:parseFloat(t)||0}var Z=class extends H{constructor(){super(...arguments),this.localize=new B(this),this.animationGeneration=0,this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(t){super.firstUpdated(t),this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(let i of e)i.type==="attributes"&&i.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(t){t.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(t){t.composedPath().some(o=>{if(!(o instanceof HTMLElement))return!1;let r=o.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(r)?!0:o instanceof F?!("disabled"in o)||!o.disabled:!1})||(t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(i=>{i!==this&&i.open&&(i.open=!1)})}async handleOpenChange(){this.animationGeneration++;let t=this.animationGeneration;if(this.open){this.details.open=!0;let e=new Jt;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;let i=Li(getComputedStyle(this.body).getPropertyValue("--show-duration"));if(await xi(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:i,easing:"linear"}),this.animationGeneration!==t)return;this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new ee)}else{let e=new Qt;if(this.dispatchEvent(e),e.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;let i=Li(getComputedStyle(this.body).getPropertyValue("--hide-duration"));if(await xi(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:i,easing:"linear"}),this.animationGeneration!==t)return;this.body.style.height="0",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new te)}}async show(){if(!(this.open||this.disabled))return this.open=!0,Lt(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Lt(this,"wa-after-hide")}render(){let t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return v`
      <details part="base details">
        <summary
          part="header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary">${this.summary}</slot>

          <span part="icon">
            <slot name="expand-icon">
              <wa-icon library="system" variant="solid" name=${t?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
            <slot name="collapse-icon">
              <wa-icon library="system" variant="solid" name=${t?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
          </span>
        </summary>

        <div
          class=${T({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};Z.css=Mo;a([y("details")],Z.prototype,"details",2);a([y("summary")],Z.prototype,"header",2);a([y(".body")],Z.prototype,"body",2);a([y(".expand-icon-slot")],Z.prototype,"expandIconSlot",2);a([P()],Z.prototype,"isAnimating",2);a([l({type:Boolean,reflect:!0})],Z.prototype,"open",2);a([l()],Z.prototype,"summary",2);a([l({reflect:!0})],Z.prototype,"name",2);a([l({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);a([l({reflect:!0})],Z.prototype,"appearance",2);a([l({attribute:"icon-placement",reflect:!0})],Z.prototype,"iconPlacement",2);a([C("open",{waitUntilFirstUpdate:!0})],Z.prototype,"handleOpenChange",1);Z=a([R("wa-details")],Z);var Fo=L`
  :host {
    --tag-max-size: 10ch;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
  }

  /* Add ellipses to multi select options */
  :host wa-tag::part(content) {
    display: initial;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: var(--tag-max-size);
  }

  :host .disabled [part~='combobox'] {
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  :host .enabled:is(.open, :focus-within) [part~='combobox'] {
    outline-color: var(--wa-color-focus);
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;

    /* Pass through from select to the popup */
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Combobox */
  .combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    justify-content: start;

    min-height: var(--wa-form-control-height);

    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: pointer;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    overflow: hidden;
    padding: 0 var(--wa-form-control-padding-inline);
    position: relative;
    vertical-align: middle;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    /* Pills */
    :host([pill]) & {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .combobox {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  .display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    line-height: var(--wa-form-control-value-line-height);
    color: var(--wa-form-control-value-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
    }
  }

  /* Manage spacing when tags are present */
  :host([multiple]) {
    --_padding-with-tags: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));

    & .combobox:has(.tags wa-tag) {
      padding-block: var(--_padding-with-tags);
      padding-inline-start: var(--_padding-with-tags);
    }
  }

  /* Visually hide the display input when multiple is enabled */
  :host([multiple]) .combobox:has(.tags wa-tag) .display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .value-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    padding: 0;
    margin: 0;
  }

  .tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25em;

    /* Nested inside the box, so a step down from the box's radius */
    & wa-tag:not([pill]) {
      border-radius: var(--wa-border-radius-s);
    }

    .disabled & {
      cursor: not-allowed !important;
    }
  }

  /* Start and End */

  .start,
  .end {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  :host([multiple]) .combobox:has(.tags wa-tag) .start::slotted(*) {
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - var(--_padding-with-tags));
  }

  /* Clear button */
  [part~='clear-button'] {
    flex: 0 0 auto;
    display: inline-flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    inline-size: 1.5em;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: color var(--wa-transition-normal);
    cursor: pointer;
    /* The box is wider than the glyph, so overhang half that growth on each side. Keeps the glyph
       on the same trailing axis as the segmented-field pickers' clear buttons. */
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.125em);
    margin-inline-end: -0.125em;

    &:focus {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }
  }

  /* Expand icon */
  .expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
    transition: rotate var(--wa-transition-slow) var(--wa-transition-easing);
    rotate: 0deg;
    margin-inline-start: var(--wa-form-control-padding-inline);

    .open & {
      rotate: -180deg;
    }
  }

  /* Listbox */
  .listbox {
    display: block;
    position: relative;
    font: inherit;
    box-shadow: var(--wa-shadow-m);
    background: var(--wa-color-surface-raised);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    padding: 0.25em;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);

    &::slotted(wa-divider) {
      --spacing: 0.5em;
    }
  }

  /* Space options with half the listbox's padding */
  .listbox slot:not([name]) {
    display: flex;
    flex-direction: column;
    gap: 0.125em;
  }

  slot:not([name])::slotted(small) {
    display: block;
    font-size: var(--wa-font-size-smaller);
    font-weight: var(--wa-font-weight-semibold);
    color: var(--wa-color-text-quiet);
    padding-block: 0.5em;
    padding-inline: 2.25em;
  }
`;function ma(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}function ki(t,e,i="vertical",o="smooth"){let r=ma(t,e),s=r.top+e.scrollTop,n=r.left+e.scrollLeft,c=e.scrollLeft,h=e.scrollLeft+e.offsetWidth,d=e.scrollTop,u=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(n<c?e.scrollTo({left:n,behavior:o}):n+t.clientWidth>h&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:o})),(i==="vertical"||i==="both")&&(s<d?e.scrollTo({top:s,behavior:o}):s+t.clientHeight>u&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:o}))}var We=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};var Nt=[];function je(t){oe(t),Nt.push(t)}function oe(t){for(let e=Nt.length-1;e>=0;e--)if(Nt[e]===t){Nt.splice(e,1);break}}function Xe(t){return Nt.length>0&&Nt[Nt.length-1]===t}var Ke=(t={})=>{let{validationElement:e,validationProperty:i}=t;e||typeof document<"u"&&"createElement"in document&&(e=Object.assign(document.createElement("input"),{required:!0})),i||(i="value");let o={observedAttributes:["required"],message:e?.validationMessage,checkValidity(r){let s={message:"",isValid:!0,invalidKeys:[]};return(r.required??r.hasAttribute("required"))&&!r[i]&&(s.message=typeof o.message=="function"?o.message(r):o.message||"",s.isValid=!1,s.invalidKeys.push("valueMissing")),s}};return o};var rt=L`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint, .has-count) {
      display: none;
    }
  }
`;var be=class extends mt{constructor(e){if(super(e),this.it=M,e.type!==it.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===M||e==null)return this._t=void 0,this.it=e;if(e===W)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};be.directiveName="unsafeHTML",be.resultType=1;var Do=Tt(be);var z=class extends F{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.cachedOptions=null,this.hasSlotController=new et(this,"hint","label"),this.localize=new B(this),this.selectionOrder=new Map,this.typeToSelectString="",this.slotChangePending=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="m",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=t=>v`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
          data-value=${t.value}
          @wa-remove=${e=>this.handleTagRemove(e,t)}
        >
          ${t.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{let e=t.target,i=e.closest('[part~="clear-button"]')!==null,o=e.closest("wa-button")!==null;if(!(i||o)){if(t.key==="Escape"&&this.open&&Xe(this)&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){let r=this.getAllOptions(),s=r.indexOf(this.currentOption),n=Math.max(0,s);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=s+1,n>r.length-1&&(n=0)):t.key==="ArrowUp"?(n=s-1,n<0&&(n=r.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=r.length-1),this.setCurrentOption(r[n])}if(t.key?.length===1||t.key==="Backspace"){let r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(let s of r)if(s.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static get validators(){let t=[Ke({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...t]}get validationTarget(){return this.valueInput}set defaultValue(t){this._defaultValue=this.convertDefaultValue(t)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(t,e){return t==null&&e==null?!0:t==null||e==null||t.length!==e.length?!1:t.every((i,o)=>i===e[o])}convertDefaultValue(t){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(t)&&(t=t[0]),t}set value(t){let e=this.value;t instanceof FormData&&(t=t.getAll(this.name)),t!=null&&!Array.isArray(t)&&(t=[t]);let i=this._value;this._value=t??null,this.rawValuesEqual(i,this._value)||(this.valueHasChanged=!0,this.requestUpdate("value",e))}get value(){let t=this._value??this.defaultValue??null;t!=null&&(t=Array.isArray(t)?t:[t]),this.optionValues=new Set(this.getAllOptions().filter(i=>!i.disabled).map(i=>i.value));let e=t;return t!=null&&(e=t.filter(i=>this.optionValues.has(i)),e=this.multiple?e:e[0],e=e??null),e}handleSizeChange(){Y(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){let e=this.getAllOptions().filter(i=>i.hasAttribute("selected")||i.defaultSelected);if(e.length>0){let i=e.map(o=>o.value);this._defaultValue=this.multiple?i:i[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),je(this),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),oe(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(t){t.preventDefault()}handleComboboxMouseDown(t){let i=t.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="wa-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,this.value!==null&&(this.displayLabel="",this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new We),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){let i=t.target.closest("wa-option");i&&!i.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){this.slotChangePending||(this.slotChangePending=!0,queueMicrotask(()=>{this.slotChangePending=!1,this.processSlotChange()}))}processSlotChange(){if(customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange()),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultSlotChange()});return}this.cachedOptions=null;let t=this.getAllOptions();this.updateDefaultValue();let e=this.value;if(e==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(e)||(e=[e]);let i=t.filter(o=>e.includes(o.value));this.setSelectedOptions(i)}handleTagRemove(t,e){if(t.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let i=e;if(!i){let o=t.target.closest("wa-tag[data-value]");if(o){let r=o.dataset.value;i=this.selectedOptions.find(s=>s.value===r)}}i&&(this.toggleOptionSelection(i,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this.cachedOptions?this.cachedOptions:this?.querySelectorAll?(this.cachedOptions=[...this.querySelectorAll("wa-option")],this.cachedOptions):[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus({preventScroll:!0}),this.open&&!this.listbox.hidden&&ki(t,this.listbox,"vertical","auto"))}setSelectedOptions(t){let e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(o=>{i.includes(o)||(o.selected=!1)}),i.length&&i.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions().filter(n=>{if(!this.hasInteracted&&!this.valueHasChanged){let c=this.defaultValue,h=Array.isArray(c)?c:[c];return n.hasAttribute("selected")||n.defaultSelected||n.selected||h?.includes(n.value)}return n.selected}),i=new Set(e.map(n=>n.value));for(let n of this.selectionOrder.keys())i.has(n)||this.selectionOrder.delete(n);let r=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(let n of e)this.selectionOrder.has(n.value)||this.selectionOrder.set(n.value,r++);this.selectedOptions=e.sort((n,c)=>{let h=this.selectionOrder.get(n.value)??0,d=this.selectionOrder.get(c.value)??0;return h-d});let s=new Set(this.selectedOptions.map(n=>n.value));if(s.size>0||this._value){let n=this._value;if(this._value==null){let c=this.defaultValue??[];this._value=Array.isArray(c)?c:[c]}this._value=this._value?.filter(c=>!this.optionValues?.has(c))??null,this._value?.unshift(...s),this.requestUpdate("value",n)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let n=this.selectedOptions[0];this.displayLabel=n?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){let i=this.getTag(t,e);return i?typeof i=="string"?Do(i):i:null}else if(e===this.maxOptionsVisible)return v`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            ?pill=${this.pill}
            size=${this.size}
            >+${this.selectedOptions.length-e}</wa-tag
          >
        `;return null})}updated(t){super.updated(t),(t.has("value")||t.has("displayLabel"))&&this.customStates.set("blank",!this.value&&!this.displayLabel)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],i=t.filter(o=>e.includes(o.value));this.setSelectedOptions(i),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let t=new Jt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await ie(this.popup.popup,"show"),this.currentOption&&ki(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new ee)}else{let t=new Qt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await ie(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new te)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Lt(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Lt(this,"wa-after-hide")}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),i=this.label?!0:!!t,o=this.hint?!0:!!e,r=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return v`
      <div
        part="form-control"
        class=${T({"form-control":!0,"form-control-has-label":i})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${T({label:!0,"has-label":i})}
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${T({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?v`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${r?v`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${T({"has-slotted":o})}
          aria-hidden=${o?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};z.css=[Fo,rt,G];a([y(".select")],z.prototype,"popup",2);a([y(".combobox")],z.prototype,"combobox",2);a([y(".display-input")],z.prototype,"displayInput",2);a([y(".value-input")],z.prototype,"valueInput",2);a([y(".listbox")],z.prototype,"listbox",2);a([P()],z.prototype,"displayLabel",2);a([P()],z.prototype,"currentOption",2);a([P()],z.prototype,"selectedOptions",2);a([l({reflect:!0})],z.prototype,"name",2);a([l({attribute:!1})],z.prototype,"defaultValue",1);a([l({attribute:"value",reflect:!1})],z.prototype,"value",1);a([l({reflect:!0})],z.prototype,"size",2);a([C("size")],z.prototype,"handleSizeChange",1);a([l()],z.prototype,"placeholder",2);a([l({type:Boolean,reflect:!0})],z.prototype,"multiple",2);a([l({attribute:"max-options-visible",type:Number})],z.prototype,"maxOptionsVisible",2);a([l({type:Boolean})],z.prototype,"disabled",2);a([l({attribute:"with-clear",type:Boolean})],z.prototype,"withClear",2);a([l({type:Boolean,reflect:!0})],z.prototype,"open",2);a([l({reflect:!0})],z.prototype,"appearance",2);a([l({type:Boolean,reflect:!0})],z.prototype,"pill",2);a([l()],z.prototype,"label",2);a([l({reflect:!0})],z.prototype,"placement",2);a([l({attribute:"hint"})],z.prototype,"hint",2);a([l({attribute:"with-label",type:Boolean})],z.prototype,"withLabel",2);a([l({attribute:"with-hint",type:Boolean})],z.prototype,"withHint",2);a([l({type:Boolean,reflect:!0})],z.prototype,"required",2);a([l({attribute:!1})],z.prototype,"getTag",2);a([C("disabled",{waitUntilFirstUpdate:!0})],z.prototype,"handleDisabledChange",1);a([C("value",{waitUntilFirstUpdate:!0})],z.prototype,"handleValueChange",1);a([C("open",{waitUntilFirstUpdate:!0})],z.prototype,"handleOpenChange",1);z=a([R("wa-select")],z);z.disableWarning?.("change-in-update");var Vo=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}};var Po=L`
  @layer wa-component {
    :host {
      display: inline-flex;
      gap: 0.5em;
      border-radius: var(--wa-border-radius-m);
      align-items: center;
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
      border-style: var(--wa-border-style);
      border-width: var(--wa-border-width-s);
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      font-size: inherit;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      -webkit-user-select: none;
      height: calc(var(--wa-form-control-height) * 0.8);
      line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      padding: 0 0.75em;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }

    :host([appearance='filled']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }

    :host([appearance='accent']) {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
  }

  .content {
    font-size: var(--wa-font-size-smaller);
  }

  [part='remove-button'] {
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      background-color: transparent;
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    background-color: transparent;
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`;var kt=class extends H{constructor(){super(...arguments),this.localize=new B(this),this.variant="neutral",this.appearance="filled-outlined",this.size="m",this.pill=!1,this.withRemove=!1}handleSizeChange(){Y(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new Vo)}render(){return v`
      <slot part="content" class="content"></slot>

      ${this.withRemove?v`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              size=${this.size}
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          `:""}
    `}};kt.css=[Po,Ie,G];a([l({reflect:!0})],kt.prototype,"variant",2);a([l({reflect:!0})],kt.prototype,"appearance",2);a([l({reflect:!0})],kt.prototype,"size",2);a([C("size")],kt.prototype,"handleSizeChange",1);a([l({type:Boolean,reflect:!0})],kt.prototype,"pill",2);a([l({attribute:"with-remove",type:Boolean})],kt.prototype,"withRemove",2);kt=a([R("wa-tag")],kt);var Bo=L`
  :host {
    --current-text-color: var(--wa-color-brand-on-loud);

    display: block;
    color: var(--wa-color-text-normal);
    -webkit-user-select: none;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    padding: 0.5em 1em 0.5em 0.25em;
    border-radius: var(--wa-border-radius-s);
    line-height: var(--wa-line-height-condensed);
    transition: var(--wa-transition-fast) background-color var(--wa-transition-easing);
    cursor: pointer;
  }

  :host(:focus) {
    outline: none;
  }

  @media (hover: hover) {
    :host(:not(:state(disabled), :state(current)):is(:state(hover), :hover)) {
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-on-normal);
    }
  }

  :host(:state(current)),
  :host(:state(disabled):state(current)) {
    background-color: var(--wa-form-control-activated-color);
    color: var(--current-text-color);
    opacity: 1;
  }

  :host(:state(disabled)) {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wa-font-size-smaller);
    visibility: hidden;
    width: 2em;
  }

  :host(:state(selected)) .check {
    visibility: visible;
  }

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start::slotted(*) {
    margin-inline-end: 0.5em;
  }

  .end::slotted(*) {
    margin-inline-start: 0.5em;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;function we(t,e=0){if(!t||!globalThis.Node)return"";if(typeof t[Symbol.iterator]=="function")return(Array.isArray(t)?t:[...t]).map(r=>we(r,--e)).join("");let i=t;if(i.nodeType===Node.TEXT_NODE)return i.textContent??"";if(i.nodeType===Node.ELEMENT_NODE){let o=i;if(o.hasAttribute("slot")||o.matches("style, script"))return"";if(o instanceof HTMLSlotElement){let r=o.assignedNodes({flatten:!0});if(r.length>0)return we(r,--e)}return e>-1?we(o,--e):o.textContent??""}return i.hasChildNodes()?we(i.childNodes,--e):""}var lt=class extends H{constructor(){super(...arguments),this.localize=new B(this),this.cachedDefaultLabel="",this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.handleHover=t=>{t.type==="mouseenter"?this.customStates.set("hover",!0):t.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(t){let e=this._label;this._label=t||"",this._label!==e&&this.requestUpdate("label",e)}get label(){return this._label?this._label:this.defaultLabel}get defaultLabel(){return(this.isDefaultLabelDirty||!this.cachedDefaultLabel)&&this.updateDefaultLabel(),this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){if(this.isDefaultLabelDirty=!0,!this.isInitialized){this.isInitialized=!0;return}let t=this.closest("wa-select, wa-combobox");t&&customElements.whenDefined(t.localName).then(()=>t.handleDefaultSlotChange?.())}willUpdate(t){t.has("defaultSelected")&&(this.didSSR&&this.hasUpdated||!this.didSSR)&&this.syncDefaultSelected(),super.willUpdate(t)}syncDefaultSelected(){if("closest"in this&&!this.closest("wa-combobox, wa-select")?.hasInteracted&&this.defaultSelected){let t=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",t)}}updated(t){t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected)),t.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),t.has("current")&&this.customStates.set("current",this.current),super.updated(t)}async firstUpdated(t){if(super.firstUpdated(t),this.didSSR&&!this.hasUpdated?(await this.updateComplete,this.syncDefaultSelected()):this.syncDefaultSelected(),this.selected&&!this.defaultSelected){let e=this.closest("wa-select, wa-combobox");e&&!e.hasInteracted&&(await customElements.whenDefined(e?.localName),await e.updateComplete,e.selectionChanged?.())}}updateDefaultLabel(){let t=this.cachedDefaultLabel;this.cachedDefaultLabel=we(this).trim(),this.isDefaultLabelDirty=!1;let e=this.cachedDefaultLabel!==t;return!this._label&&e&&this.requestUpdate("label",t),e}render(){let t=this.selected;return this.didSSR&&!this.hasUpdated?(this.updateComplete.then(()=>{this.requestUpdate()}),M):v`
      ${t?v`<wa-icon
            part="checked-icon"
            class="check"
            name="check"
            library="system"
            variant="solid"
            aria-hidden="true"
          ></wa-icon>`:v`<span part="checked-icon" class="check" aria-hidden="true"></span>`}
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};lt.css=Bo;a([y(".label")],lt.prototype,"defaultSlot",2);a([P()],lt.prototype,"current",2);a([l({reflect:!0})],lt.prototype,"value",2);a([l({type:Boolean})],lt.prototype,"disabled",2);a([l({type:Boolean,attribute:!1})],lt.prototype,"selected",2);a([l({type:Boolean,attribute:"selected"})],lt.prototype,"defaultSelected",2);a([l()],lt.prototype,"label",1);lt=a([R("wa-option")],lt);var Io=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var qo=L`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;var ft=Math.min,ct=Math.max,Ce=Math.round,xe=Math.floor,gt=t=>({x:t,y:t}),fa={left:"right",right:"left",bottom:"top",top:"bottom"};function Si(t,e,i){return ct(t,ft(e,i))}function Ut(t,e){return typeof t=="function"?t(e):t}function Ot(t){return t.split("-")[0]}function Ht(t){return t.split("-")[1]}function $i(t){return t==="x"?"y":"x"}function Ge(t){return t==="y"?"height":"width"}function vt(t){let e=t[0];return e==="t"||e==="b"?"y":"x"}function Ze(t){return $i(vt(t))}function Ho(t,e,i){i===void 0&&(i=!1);let o=Ht(t),r=Ze(t),s=Ge(r),n=r==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=ye(n)),[n,ye(n)]}function Wo(t){let e=ye(t);return[Ye(t),e,Ye(e)]}function Ye(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}var No=["left","right"],Uo=["right","left"],ga=["top","bottom"],va=["bottom","top"];function ba(t,e,i){switch(t){case"top":case"bottom":return i?e?Uo:No:e?No:Uo;case"left":case"right":return e?ga:va;default:return[]}}function jo(t,e,i,o){let r=Ht(t),s=ba(Ot(t),i==="start",o);return r&&(s=s.map(n=>n+"-"+r),e&&(s=s.concat(s.map(Ye)))),s}function ye(t){let e=Ot(t);return fa[e]+t.slice(e.length)}function wa(t){var e,i,o,r;return{top:(e=t.top)!=null?e:0,right:(i=t.right)!=null?i:0,bottom:(o=t.bottom)!=null?o:0,left:(r=t.left)!=null?r:0}}function Ai(t){return typeof t!="number"?wa(t):{top:t,right:t,bottom:t,left:t}}function Wt(t){let{x:e,y:i,width:o,height:r}=t;return{width:o,height:r,top:i,left:e,right:e+o,bottom:i+r,x:e,y:i}}function Xo(t,e,i){let{reference:o,floating:r}=t,s=vt(e),n=Ze(e),c=Ge(n),h=Ot(e),d=s==="y",u=o.x+o.width/2-r.width/2,p=o.y+o.height/2-r.height/2,f=o[c]/2-r[c]/2,m;switch(h){case"top":m={x:u,y:o.y-r.height};break;case"bottom":m={x:u,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:p};break;case"left":m={x:o.x-r.width,y:p};break;default:m={x:o.x,y:o.y}}let g=Ht(e);return g&&(m[n]+=f*(g==="end"?1:-1)*(i&&d?-1:1)),m}async function Ko(t,e){var i;e===void 0&&(e={});let{x:o,y:r,platform:s,rects:n,elements:c,strategy:h}=t,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:f=!1,padding:m=0}=Ut(e,t),g=Ai(m),E=c[f?p==="floating"?"reference":"floating":p],S=Wt(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(E)))==null||i?E:E.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:d,rootBoundary:u,strategy:h})),O=p==="floating"?{x:o,y:r,width:n.floating.width,height:n.floating.height}:n.reference,D=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),V=await(s.isElement==null?void 0:s.isElement(D))&&await(s.getScale==null?void 0:s.getScale(D))||{x:1,y:1},Q=Wt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:O,offsetParent:D,strategy:h}):O);return{top:(S.top-Q.top+g.top)/V.y,bottom:(Q.bottom-S.bottom+g.bottom)/V.y,left:(S.left-Q.left+g.left)/V.x,right:(Q.right-S.right+g.right)/V.x}}var ya=50,Yo=async(t,e,i)=>{let{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:n}=i,c=n.detectOverflow?n:{...n,detectOverflow:Ko},h=await(n.isRTL==null?void 0:n.isRTL(e)),d=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:p}=Xo(d,o,h),f=o,m=0,g={};for(let b=0;b<s.length;b++){let E=s[b];if(!E)continue;let{name:S,fn:O}=E,{x:D,y:V,data:Q,reset:q}=await O({x:u,y:p,initialPlacement:o,placement:f,strategy:r,middlewareData:g,rects:d,platform:c,elements:{reference:t,floating:e}});u=D??u,p=V??p,g[S]={...g[S],...Q},q&&m<ya&&(m++,typeof q=="object"&&(q.placement&&(f=q.placement),q.rects&&(d=q.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:r}):q.rects),{x:u,y:p}=Xo(d,f,h)),b=-1)}return{x:u,y:p,placement:f,strategy:r,middlewareData:g}},Go=t=>({name:"arrow",options:t,async fn(e){let{x:i,y:o,placement:r,rects:s,platform:n,elements:c,middlewareData:h}=e,{element:d,padding:u=0}=Ut(t,e)||{};if(d==null)return{};let p=Ai(u),f={x:i,y:o},m=Ze(r),g=Ge(m),b=await n.getDimensions(d),E=m==="y",S=E?"top":"left",O=E?"bottom":"right",D=E?"clientHeight":"clientWidth",V=s.reference[g]+s.reference[m]-f[m]-s.floating[g],Q=f[m]-s.reference[m],q=await(n.getOffsetParent==null?void 0:n.getOffsetParent(d)),tt=q?q[D]:0;(!tt||!await(n.isElement==null?void 0:n.isElement(q)))&&(tt=c.floating[D]||s.floating[g]);let at=V/2-Q/2,ut=tt/2-b[g]/2-1,K=ft(p[S],ut),ne=ft(p[O],ut),le=tt-b[g]-ne,pt=tt/2-b[g]/2+at,st=Si(K,pt,le),Mt=!h.arrow&&Ht(r)!=null&&pt!==st&&s.reference[g]/2-(pt<K?K:ne)-b[g]/2<0,wt=Mt?pt<K?pt-K:pt-le:0;return{[m]:f[m]+wt,data:{[m]:st,centerOffset:pt-st-wt,...Mt&&{alignmentOffset:wt}},reset:Mt}}});var Zo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,o;let{placement:r,middlewareData:s,rects:n,initialPlacement:c,platform:h,elements:d}=e,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0,...E}=Ut(t,e);if((i=s.arrow)!=null&&i.alignmentOffset)return{};let S=Ot(r),O=vt(c),D=Ot(c)===c,V=await(h.isRTL==null?void 0:h.isRTL(d.floating)),Q=f||(D||!b?[ye(c)]:Wo(c)),q=g!=="none";!f&&q&&Q.push(...jo(c,b,g,V));let tt=[c,...Q],at=await h.detectOverflow(e,E),ut=[],K=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&ut.push(at[S]),p){let st=Ho(r,n,V);ut.push(at[st[0]],at[st[1]])}if(K=[...K,{placement:r,overflows:ut}],!ut.every(st=>st<=0)){var ne,le;let st=(((ne=s.flip)==null?void 0:ne.index)||0)+1,Mt=tt[st];if(Mt&&(!(p==="alignment"?O!==vt(Mt):!1)||K.every(nt=>vt(nt.placement)===O?nt.overflows[0]>0:!0)))return{data:{index:st,overflows:K},reset:{placement:Mt}};let wt=(le=K.filter(Ft=>Ft.overflows[0]<=0).sort((Ft,nt)=>Ft.overflows[1]-nt.overflows[1])[0])==null?void 0:le.placement;if(!wt)switch(m){case"bestFit":{var pt;let Ft=(pt=K.filter(nt=>{if(q){let zt=vt(nt.placement);return zt===O||zt==="y"}return!0}).map(nt=>[nt.placement,nt.overflows.filter(zt=>zt>0).reduce((zt,Vr)=>zt+Vr,0)]).sort((nt,zt)=>nt[1]-zt[1])[0])==null?void 0:pt[0];Ft&&(wt=Ft);break}case"initialPlacement":wt=c;break}if(r!==wt)return{reset:{placement:wt}}}return{}}}};var Ca=new Set(["left","top"]);async function xa(t,e){let{placement:i,platform:o,elements:r}=t,s=await(o.isRTL==null?void 0:o.isRTL(r.floating)),n=Ot(i),c=Ht(i),h=vt(i)==="y",d=Ca.has(n)?-1:1,u=s&&h?-1:1,p=Ut(e,t),{mainAxis:f,crossAxis:m,alignmentAxis:g}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return c&&typeof g=="number"&&(m=c==="end"?g*-1:g),h?{x:m*u,y:f*d}:{x:f*d,y:m*u}}var Jo=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,o;let{x:r,y:s,placement:n,middlewareData:c}=e,h=await xa(e,t);return n===((i=c.offset)==null?void 0:i.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:r+h.x,y:s+h.y,data:{...h,placement:n}}}}},Qo=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:i,y:o,placement:r,platform:s}=e,{mainAxis:n=!0,crossAxis:c=!1,limiter:h={fn:O=>{let{x:D,y:V}=O;return{x:D,y:V}}},...d}=Ut(t,e),u={x:i,y:o},p=await s.detectOverflow(e,d),f=vt(r),m=$i(f),g=u[m],b=u[f],E=(O,D)=>Si(D+p[O==="y"?"top":"left"],D,D-p[O==="y"?"bottom":"right"]);n&&(g=E(m,g)),c&&(b=E(f,b));let S=h.fn({...e,[m]:g,[f]:b});return{...S,data:{x:S.x-i,y:S.y-o,enabled:{[m]:n,[f]:c}}}}}};var tr=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){let{placement:i,rects:o,platform:r,elements:s}=e,{apply:n=()=>{},...c}=Ut(t,e),h=await r.detectOverflow(e,c),d=Ot(i),u=Ht(i),p=vt(i)==="y",{width:f,height:m}=o.floating,g,b;d==="top"||d==="bottom"?(g=d,b=u===(await(r.isRTL==null?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(b=d,g=u==="end"?"top":"bottom");let E=m-h.top-h.bottom,S=f-h.left-h.right,O=ft(m-h[g],E),D=ft(f-h[b],S),V=e.middlewareData.shift,Q=!V,q=O,tt=D;V!=null&&V.enabled.x&&(tt=S),V!=null&&V.enabled.y&&(q=E),Q&&!u&&(p?tt=f-2*ct(h.left,h.right):q=m-2*ct(h.top,h.bottom)),await n({...e,availableWidth:tt,availableHeight:q});let at=await r.getDimensions(s.floating);return f!==at.width||m!==at.height?{reset:{rects:!0}}:{}}}};function Je(){return typeof window<"u"}function Xt(t){return ir(t)?(t.nodeName||"").toLowerCase():"#document"}function J(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function bt(t){var e;return(e=(ir(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ir(t){return Je()?t instanceof Node||t instanceof J(t).Node:!1}function ht(t){return Je()?t instanceof Element||t instanceof J(t).Element:!1}function $t(t){return Je()?t instanceof HTMLElement||t instanceof J(t).HTMLElement:!1}function er(t){return!Je()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof J(t).ShadowRoot}function Le(t){let{overflow:e,overflowX:i,overflowY:o,display:r}=dt(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&r!=="inline"&&r!=="contents"}function or(t){return/^(table|td|th)$/.test(Xt(t))}function ke(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}var La=/transform|translate|scale|rotate|perspective|filter/,ka=/paint|layout|strict|content/,jt=t=>!!t&&t!=="none",zi;function re(t){let e=ht(t)?dt(t):t;return jt(e.transform)||jt(e.translate)||jt(e.scale)||jt(e.rotate)||jt(e.perspective)||!Qe()&&(jt(e.backdropFilter)||jt(e.filter))||La.test(e.willChange||"")||ka.test(e.contain||"")}function rr(t){let e=Rt(t);for(;$t(e)&&!ae(e);){if(re(e))return e;if(ke(e))return null;e=Rt(e)}return null}function Qe(){return zi==null&&(zi=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),zi}function ae(t){return/^(html|body|#document)$/.test(Xt(t))}function dt(t){return J(t).getComputedStyle(t)}function Se(t){return ht(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Rt(t){if(Xt(t)==="html")return t;let e=t.assignedSlot||t.parentNode||er(t)&&t.host||bt(t);return er(e)?e.host:e}function ar(t){let e=Rt(t);return ae(e)?(t.ownerDocument||t).body:$t(e)&&Le(e)?e:ar(e)}function St(t,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);let r=ar(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),n=J(r);if(s){let c=ti(n);return e.concat(n,n.visualViewport||[],Le(r)?r:[],c&&i?St(c):[])}else return e.concat(r,St(r,[],i))}function ti(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function lr(t){let e=dt(t),i=parseFloat(e.width)||0,o=parseFloat(e.height)||0,r=$t(t),s=r?t.offsetWidth:i,n=r?t.offsetHeight:o,c=Ce(i)!==s||Ce(o)!==n;return c&&(i=s,o=n),{width:i,height:o,$:c}}function _i(t){return ht(t)?t:t.contextElement}function se(t){let e=_i(t);if(!$t(e))return gt(1);let i=e.getBoundingClientRect(),{width:o,height:r,$:s}=lr(e),n=(s?Ce(i.width):i.width)/o,c=(s?Ce(i.height):i.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!c||!Number.isFinite(c))&&(c=1),{x:n,y:c}}var Sa=gt(0);function cr(t){let e=J(t);return!Qe()||!e.visualViewport?Sa:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function $a(t,e,i){return e===void 0&&(e=!1),!!i&&e&&i===J(t)}function Kt(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);let r=t.getBoundingClientRect(),s=_i(t),n=gt(1);e&&(o?ht(o)&&(n=se(o)):n=se(t));let c=$a(s,i,o)?cr(s):gt(0),h=(r.left+c.x)/n.x,d=(r.top+c.y)/n.y,u=r.width/n.x,p=r.height/n.y;if(s&&o){let f=J(s),m=ht(o)?J(o):o,g=f,b=ti(g);for(;b&&m!==g;){let E=se(b),S=b.getBoundingClientRect(),O=dt(b),D=S.left+(b.clientLeft+parseFloat(O.paddingLeft))*E.x,V=S.top+(b.clientTop+parseFloat(O.paddingTop))*E.y;h*=E.x,d*=E.y,u*=E.x,p*=E.y,h+=D,d+=V,g=J(b),b=ti(g)}}return Wt({width:u,height:p,x:h,y:d})}function ei(t,e){let i=Se(t).scrollLeft;return e?e.left+i:Kt(bt(t)).left+i}function hr(t,e){let i=t.getBoundingClientRect(),o=i.left+e.scrollLeft-ei(t,i),r=i.top+e.scrollTop;return{x:o,y:r}}function Aa(t){let{elements:e,rect:i,offsetParent:o,strategy:r}=t,s=r==="fixed",n=bt(o),c=e?ke(e.floating):!1;if(o===n||c&&s)return i;let h={scrollLeft:0,scrollTop:0},d=gt(1),u=gt(0),p=$t(o);if((p||!s)&&((Xt(o)!=="body"||Le(n))&&(h=Se(o)),p)){let m=Kt(o);d=se(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}let f=n&&!p&&!s?hr(n,h):gt(0);return{width:i.width*d.x,height:i.height*d.y,x:i.x*d.x-h.scrollLeft*d.x+u.x+f.x,y:i.y*d.y-h.scrollTop*d.y+u.y+f.y}}function za(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function Ea(t){let e=Se(t),i=t.ownerDocument.body,o=ct(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=ct(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight),s=-e.scrollLeft+ei(t),n=-e.scrollTop;return dt(i).direction==="rtl"&&(s+=ct(t.clientWidth,i.clientWidth)-o),{width:o,height:r,x:s,y:n}}var _a=25;function Ta(t,e,i){i===void 0&&(i="viewport");let o=i==="layoutViewport",r=J(t),s=bt(t),n=r.visualViewport,c=s.clientWidth,h=s.clientHeight,d=0,u=0;if(n){let f=!Qe()||e==="fixed";o?f||(d=-n.offsetLeft,u=-n.offsetTop):(c=n.width,h=n.height,f&&(d=n.offsetLeft,u=n.offsetTop))}if(ei(s)<=0){let f=s.ownerDocument,m=f.body,g=getComputedStyle(m),b=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,E=Math.abs(s.clientWidth-m.clientWidth-b),S=getComputedStyle(s).scrollbarGutter==="stable both-edges"?E/2:E;S<=_a&&(c-=S)}return{width:c,height:h,x:d,y:u}}function Oa(t,e){let i=Kt(t,!0,e==="fixed"),o=i.top+t.clientTop,r=i.left+t.clientLeft,s=se(t),n=t.clientWidth*s.x,c=t.clientHeight*s.y,h=r*s.x,d=o*s.y;return{width:n,height:c,x:h,y:d}}function sr(t,e,i){let o;if(e==="viewport"||e==="layoutViewport")o=Ta(t,i,e);else if(e==="document")o=Ea(bt(t));else if(ht(e))o=Oa(e,i);else{let r=cr(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return Wt(o)}function Ra(t,e){let i=e.get(t);if(i)return i;let o=St(t,[],!1).filter(c=>ht(c)&&Xt(c)!=="body"),r=null,s=dt(t).position==="fixed",n=s?Rt(t):t;for(;ht(n)&&!ae(n);){let c=dt(n),h=re(n),d=r?r.position:s?"fixed":"";!h&&(d==="fixed"||d==="absolute"&&c.position==="static")?o=o.filter(p=>p!==n):r=c,n=Rt(n)}return e.set(t,o),o}function Ma(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t,n=[...i==="clippingAncestors"?ke(e)?[]:Ra(e,this._c):[].concat(i),o],c=sr(e,n[0],r),h=c.top,d=c.right,u=c.bottom,p=c.left;for(let f=1;f<n.length;f++){let m=sr(e,n[f],r);h=ct(m.top,h),d=ft(m.right,d),u=ft(m.bottom,u),p=ct(m.left,p)}return{width:d-p,height:u-h,x:p,y:h}}function Fa(t){let{width:e,height:i}=lr(t);return{width:e,height:i}}function Da(t,e,i){let o=$t(e),r=bt(e),s=i==="fixed",n=Kt(t,!0,s,e),c={scrollLeft:0,scrollTop:0},h=gt(0);if((o||!s)&&((Xt(e)!=="body"||Le(r))&&(c=Se(e)),o)){let f=Kt(e,!0,s,e);h.x=f.x+e.clientLeft,h.y=f.y+e.clientTop}!o&&r&&(h.x=ei(r));let d=r&&!o&&!s?hr(r,c):gt(0),u=n.left+c.scrollLeft-h.x-d.x,p=n.top+c.scrollTop-h.y-d.y;return{x:u,y:p,width:n.width,height:n.height}}function Ei(t){return dt(t).position==="static"}function nr(t,e){if(!$t(t)||dt(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return bt(t)===i&&(i=i.ownerDocument.body),i}function dr(t,e){let i=J(t);if(ke(t))return i;if(!$t(t)){let r=Rt(t);for(;r&&!ae(r);){if(ht(r)&&!Ei(r))return r;r=Rt(r)}return i}let o=nr(t,e);for(;o&&or(o)&&Ei(o);)o=nr(o,e);return o&&ae(o)&&Ei(o)&&!re(o)?i:o||rr(t)||i}var Va=async function(t){let e=this.getOffsetParent||dr,i=this.getDimensions,o=await i(t.floating);return{reference:Da(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Pa(t){return dt(t).direction==="rtl"}var $e={convertOffsetParentRelativeRectToViewportRelativeRect:Aa,getDocumentElement:bt,getClippingRect:Ma,getOffsetParent:dr,getElementRects:Va,getClientRects:za,getDimensions:Fa,getScale:se,isElement:ht,isRTL:Pa};function ur(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ba(t,e,i){let o=null,r,s=bt(t);function n(){var u;clearTimeout(r),(u=o)==null||u.disconnect(),o=null}function c(u,p){u===void 0&&(u=!1),p===void 0&&(p=1),n();let f=t.getBoundingClientRect(),{left:m,top:g,width:b,height:E}=f;if(u||e(),!b||!E)return;let S=xe(g),O=xe(s.clientWidth-(m+b)),D=xe(s.clientHeight-(g+E)),V=xe(m),q={rootMargin:-S+"px "+-O+"px "+-D+"px "+-V+"px",threshold:ct(0,ft(1,p))||1},tt=!0;function at(ut){let K=ut[0].intersectionRatio;if(!ur(f,t.getBoundingClientRect()))return c();if(K!==p){if(!tt)return c();K?c(!1,K):r=setTimeout(()=>{c(!1,1e-7)},1e3)}tt=!1}try{o=new IntersectionObserver(at,{...q,root:s.ownerDocument})}catch{o=new IntersectionObserver(at,q)}o.observe(t)}let h=J(t),d=()=>c(i);return h.addEventListener("resize",d),c(!0),()=>{h.removeEventListener("resize",d),n()}}function pr(t,e,i,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:h=!1}=o,d=_i(t),u=r||s?[...d?St(d):[],...e?St(e):[]]:[];u.forEach(S=>{r&&S.addEventListener("scroll",i),s&&S.addEventListener("resize",i)});let p=d&&c?Ba(d,i,s):null,f=-1,m=null;n&&(m=new ResizeObserver(S=>{let[O]=S;O&&O.target===d&&m&&e&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var D;(D=m)==null||D.observe(e)})),i()}),d&&!h&&m.observe(d),e&&m.observe(e));let g,b=h?Kt(t):null;h&&E();function E(){let S=Kt(t);b&&!ur(b,S)&&i(),b=S,g=requestAnimationFrame(E)}return i(),()=>{var S;u.forEach(O=>{r&&O.removeEventListener("scroll",i),s&&O.removeEventListener("resize",i)}),p?.(),(S=m)==null||S.disconnect(),m=null,h&&cancelAnimationFrame(g)}}var mr=Jo;var fr=Qo,gr=Zo,Ti=tr;var vr=Go;var br=(t,e,i)=>{let o=new Map,r=i??{},s={...$e,...r.platform,_c:o};return Yo(t,e,{...r,platform:s})};function wr(t){return Ia(t)}function Oi(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Ia(t){for(let e=t;e;e=Oi(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Oi(t);e;e=Oi(e)){if(!(e instanceof Element))continue;let i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||re(i)||e.tagName==="BODY"))return e}return null}function yr(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var qa=!!globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),_=class extends H{constructor(){super(...arguments),this.localize=new B(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),o=0,r=0,s=0,n=0,c=0,h=0,d=0,u=0;i?t.top<e.top?(o=t.left,r=t.bottom,s=t.right,n=t.bottom,c=e.left,h=e.top,d=e.right,u=e.top):(o=e.left,r=e.bottom,s=e.right,n=e.bottom,c=t.left,h=t.top,d=t.right,u=t.top):t.left<e.left?(o=t.right,r=t.top,s=e.left,n=e.top,c=t.right,h=t.bottom,d=e.left,u=e.bottom):(o=e.right,r=e.top,s=t.left,n=t.top,c=e.right,h=e.bottom,d=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=qa,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||yr(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=pr(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let t=[mr({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ti({apply:({rects:o})=>{let r=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${o.reference.width}px`:"",this.popup.style.height=s?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let e;this.SUPPORTS_POPOVER&&!yr(this.anchor)&&this.boundary==="scroll"&&(e=St(this.anchorEl).filter(o=>o instanceof Element)),this.flip&&t.push(gr({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(fr({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(Ti({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(vr({element:this.arrowEl,padding:this.arrowPadding}));let i=this.SUPPORTS_POPOVER?o=>$e.getOffsetParent(o,wr):$e.getOffsetParent;br(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.SUPPORTS_POPOVER?"absolute":"fixed",platform:{...$e,getOffsetParent:i}}).then(({x:o,y:r,middlewareData:s,placement:n})=>{let c=this.localize.dir()==="rtl",h={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${o}px`,top:`${r}px`}),this.arrow){let d=s.arrow.x,u=s.arrow.y,p="",f="",m="",g="";if(this.arrowPlacement==="start"){let b=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",f=c?b:"",g=c?"":b}else if(this.arrowPlacement==="end"){let b=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=c?"":b,g=c?b:"",m=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof d=="number"?`${d}px`:"",p=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:p,right:f,bottom:m,left:g,[h]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Io)}render(){return v`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${T({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${T({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?v`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};_.css=qo;a([y(".popup")],_.prototype,"popup",2);a([y(".arrow")],_.prototype,"arrowEl",2);a([l({attribute:!1,type:Boolean})],_.prototype,"SUPPORTS_POPOVER",2);a([l()],_.prototype,"anchor",2);a([l({type:Boolean,reflect:!0})],_.prototype,"active",2);a([l({reflect:!0})],_.prototype,"placement",2);a([l()],_.prototype,"boundary",2);a([l({type:Number})],_.prototype,"distance",2);a([l({type:Number})],_.prototype,"skidding",2);a([l({type:Boolean})],_.prototype,"arrow",2);a([l({attribute:"arrow-placement"})],_.prototype,"arrowPlacement",2);a([l({attribute:"arrow-padding",type:Number})],_.prototype,"arrowPadding",2);a([l({type:Boolean})],_.prototype,"flip",2);a([l({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],_.prototype,"flipFallbackPlacements",2);a([l({attribute:"flip-fallback-strategy"})],_.prototype,"flipFallbackStrategy",2);a([l({type:Object})],_.prototype,"flipBoundary",2);a([l({attribute:"flip-padding",type:Number})],_.prototype,"flipPadding",2);a([l({type:Boolean})],_.prototype,"shift",2);a([l({type:Object})],_.prototype,"shiftBoundary",2);a([l({attribute:"shift-padding",type:Number})],_.prototype,"shiftPadding",2);a([l({attribute:"auto-size"})],_.prototype,"autoSize",2);a([l()],_.prototype,"sync",2);a([l({type:Object})],_.prototype,"autoSizeBoundary",2);a([l({attribute:"auto-size-padding",type:Number})],_.prototype,"autoSizePadding",2);a([l({attribute:"hover-bridge",type:Boolean})],_.prototype,"hoverBridge",2);_=a([R("wa-popup")],_);function ii(t,e){let i=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!i&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&Wa(e)})}var Na=new Map([["input",!0],["wa-input",!0],["wa-tag-input",!0],["wa-number-input",!0],["wa-otp-input",!0],["wa-slider",!0]]),Ua=new Map([["button",!1],["checkbox",!1],["color",!1],["date",!1],["datetime-local",!1],["email",!0],["file",!1],["hidden",!1],["image",!1],["month",!1],["number",!0],["password",!0],["radio",!1],["range",!1],["reset",!0],["search",!0],["submit",!1],["tel",!0],["text",!0],["time",!1],["url",!0],["week",!1]]),Ha=t=>{let e=t?.localName;if(!e||!!!Na.get(e))return!1;if(e!=="input"&&e!=="wa-input")return!0;let o=t.type;return!!Ua.get(o)};function Wa(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;let i=Array.from(e.elements),o=0;for(let s of i)Ha(s)&&(o+=1);if(o===1){e.requestSubmit(null);return}let r=i.find(s=>s.type==="submit"&&!s.matches(":disabled"));r&&(["input","button"].includes(r.localName)?e.requestSubmit(r):r.click())}var Cr=L`
  :host {
    border-width: 0;
  }

  :host(:focus) {
    outline: none;
  }

  .text-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    transition: inherit;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: var(--wa-form-control-value-font-size);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    box-shadow: var(--box-shadow);
    padding: 0 var(--wa-form-control-padding-inline);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    /* Only ring the field when the text input has focus, not inner buttons */
    &:has(input:focus, textarea:focus) {
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled inputs */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .text-field {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) .text-field {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  .text-field {
    /* Show autofill styles over the entire text field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input,
    textarea {
      /*
      Fixes an alignment issue with placeholders.
      https://github.com/shoelace-style/webawesome/issues/342
    */
      height: 100%;

      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
      font: inherit;

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    transition: inherit;

    /* prettier-ignore */
    background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
    height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    padding-block: 0;
    color: inherit;

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  /*
   * Clearable + Password Toggle
   */

  .clear,
  .password-toggle {
    position: relative;
    display: inline-flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    height: 1.5em;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    border-radius: var(--wa-border-radius-s);
    background: none;
    padding: 0;
    transition: var(--wa-transition-normal) color;
    cursor: pointer;
    /* The box is wider than the glyph, so overhang half of that growth on each side. Keeps the
       glyph flush with the field's trailing padding edge, like every other form control. */
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.125em);
    margin-inline-end: -0.125em;

    &::after {
      content: '';
      position: absolute;
      inset-inline: 0;
      height: var(--wa-form-control-height);
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  :host([without-spin-buttons]) input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`;var At=Tt(class extends mt{constructor(t){if(super(t),t.type!==it.PROPERTY&&t.type!==it.ATTRIBUTE&&t.type!==it.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Oo(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===W||e===M)return e;let i=t.element,o=t.name;if(t.type===it.PROPERTY){if(e===i[o])return W}else if(t.type===it.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(o))return W}else if(t.type===it.ATTRIBUTE&&i.getAttribute(o)===e+"")return W;return Ro(t),e}});var x=class extends F{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new et(this,"hint","label"),this.localize=new B(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Et()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}updateFormValue(t){if(t==null){this.setValue("",null);return}super.updateFormValue(t)}handleSizeChange(){Y(this.localName,this.size)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new We),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){ii(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){if(super.updated(t),t.has("value")||t.has("defaultValue")||t.has("type")){let e=["number","date","time","datetime-local"];this.input&&e.includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set("blank",!this.value),this.updateValidity()}}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){let r=e??this.input.selectionStart,s=i??this.input.selectionEnd;this.input.setRangeText(t,r,s,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),i=this.label?!0:!!t,o=this.hint?!0:!!e,r=this.withClear&&!this.disabled&&!this.readonly,s=(!this.didSSR||this.hasUpdated)&&r&&(typeof this.value=="number"||this.value&&this.value.length>0);return v`
      <label
        part="form-control-label label"
        class=${T({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base input-wrapper" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${w(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${w(this.placeholder)}
          minlength=${w(this.minlength)}
          maxlength=${w(this.maxlength)}
          min=${w(this.min)}
          max=${w(this.max)}
          step=${w(this.step)}
          .value=${At(this.value??"")}
          autocapitalize=${w(this.autocapitalize)}
          autocomplete=${w(this.autocomplete)}
          autocorrect=${this.autocorrect?"on":"off"}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${w(this.pattern)}
          enterkeyhint=${w(this.enterkeyhint)}
          inputmode=${w(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${s?v`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?v`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?v`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:v`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${T({"has-slotted":o})}
        aria-hidden=${o?"false":"true"}
        >${this.hint}</slot
      >
    `}};x.css=[G,rt,Cr];x.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0};a([y("input")],x.prototype,"input",2);a([l()],x.prototype,"title",2);a([l({reflect:!0})],x.prototype,"type",2);a([P()],x.prototype,"value",1);a([l({attribute:"value",reflect:!0})],x.prototype,"defaultValue",2);a([l({reflect:!0})],x.prototype,"size",2);a([C("size")],x.prototype,"handleSizeChange",1);a([l({reflect:!0})],x.prototype,"appearance",2);a([l({type:Boolean,reflect:!0})],x.prototype,"pill",2);a([l()],x.prototype,"label",2);a([l({attribute:"hint"})],x.prototype,"hint",2);a([l({attribute:"with-clear",type:Boolean})],x.prototype,"withClear",2);a([l()],x.prototype,"placeholder",2);a([l({type:Boolean,reflect:!0})],x.prototype,"readonly",2);a([l({attribute:"password-toggle",type:Boolean})],x.prototype,"passwordToggle",2);a([l({attribute:"password-visible",type:Boolean})],x.prototype,"passwordVisible",2);a([l({attribute:"without-spin-buttons",type:Boolean,reflect:!0})],x.prototype,"withoutSpinButtons",2);a([l({type:Boolean,reflect:!0})],x.prototype,"required",2);a([l()],x.prototype,"pattern",2);a([l({type:Number})],x.prototype,"minlength",2);a([l({type:Number})],x.prototype,"maxlength",2);a([l()],x.prototype,"min",2);a([l()],x.prototype,"max",2);a([l()],x.prototype,"step",2);a([l()],x.prototype,"autocapitalize",2);a([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="off"),toAttribute:t=>t?"on":"off"}})],x.prototype,"autocorrect",2);a([l()],x.prototype,"autocomplete",2);a([l({type:Boolean})],x.prototype,"autofocus",2);a([l()],x.prototype,"enterkeyhint",2);a([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],x.prototype,"spellcheck",2);a([l()],x.prototype,"inputmode",2);a([l({attribute:"with-label",type:Boolean})],x.prototype,"withLabel",2);a([l({attribute:"with-hint",type:Boolean})],x.prototype,"withHint",2);a([C("step",{waitUntilFirstUpdate:!0})],x.prototype,"handleStepChange",1);x=a([R("wa-input")],x);x.disableWarning?.("change-in-update");var xr=L`
  :host {
    border-width: 0;
  }

  .textarea {
    display: grid;
    align-items: center;
    margin: 0;
    border: none;
    outline: none;
    cursor: inherit;
    font: inherit;
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    -webkit-appearance: none;
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    &:focus-within {
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled textareas */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .textarea {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  textarea {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: inherit;
    scroll-padding-block: var(--wa-form-control-padding-block);
    padding: calc(var(--wa-form-control-padding-block) - ((1lh - 1em) / 2)) var(--wa-form-control-padding-inline); /* accounts for the larger line height of textarea content */
    min-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    box-shadow: none;
    margin: 0;

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &:focus {
      outline: none;
    }
  }

  /* Shared textarea and size-adjuster positioning */
  .control,
  .size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    padding: 0;
  }

  textarea::-webkit-search-decoration,
  textarea::-webkit-search-cancel-button,
  textarea::-webkit-search-results-button,
  textarea::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /*
   * Resize types
   */

  :host([resize='none']) textarea {
    resize: none;
  }

  textarea,
  :host([resize='vertical']) textarea {
    resize: vertical;
  }

  :host([resize='horizontal']) textarea {
    resize: horizontal;
  }

  :host([resize='both']) textarea {
    resize: both;
  }

  :host([resize='auto']) textarea {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }

  /*
   * Footer (hint + character count)
   */

  /*
   * This element carries the hint part, so the shared form control styles apply to it. Those styles set display:block
   * and hide the element when it has no hint, both of which have to be undone when a character count is present.
   */
  .footer.has-slotted,
  .footer.has-count {
    display: flex;
    align-items: baseline;
    gap: 1em;
  }

  /* Slots default to display:contents, which would leave the hint unable to shrink below its content */
  .footer.has-count .hint {
    display: block;
    flex: 1 1 auto;
    min-width: 0;
  }

  .count {
    flex: 0 0 auto;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);
    margin-inline-start: auto;
  }
`;var Lr=L`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label),
  .wa-visually-hidden-label::part(form-control-label) {
    top: 0px !important;
    left: 0px !important;
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;var k=class extends F{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new et(this,"hint","label"),this.localize=new B(this),this.announcedCountText="",this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="m",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1,this.withCount=!1,this.lastObservedWidth=0}static get validators(){return[...super.validators,Et()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleSizeChange(){Y(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.updateResizeObserver(),this.didSSR&&this.input&&this.value!==this.input.value){let t=this.input.value;this.value=t}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.countAnnounceTimeout),this.resizeObserver?.disconnect(),this.resizeObserver=void 0}updateFormValue(t){if(t==null){this.setValue("",null);return}super.updateFormValue(t)}updateResizeObserver(){let t=this.resize!=="none";this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0),t&&this.input&&(this.resize==="auto"?(this.resizeObserver=new ResizeObserver(e=>{let i=e[0]?.contentRect.width??0;i!==this.lastObservedWidth&&(this.lastObservedWidth=i,requestAnimationFrame(()=>this.setTextareaDimensions()))}),this.resizeObserver.observe(this)):(this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.resizeObserver.observe(this.input)))}handleBlur(){this.checkValidity()}handleChange(t){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(t){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0}),this.scheduleCountAnnouncement()}scheduleCountAnnouncement(){clearTimeout(this.countAnnounceTimeout),this.countAnnounceTimeout=setTimeout(()=>{let t=(this.value??"").length;this.announcedCountText=this.maxlength!=null?this.localize.term("numCharactersRemaining",this.maxlength-t):this.localize.term("numCharacters",t)},1e3)}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto";let t=this.input.scrollHeight;this.input.style.height=`${t}px`,this.sizeAdjuster.style.height=`${t}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){let t=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${t}px`}if(this.input.style.height){let t=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${t}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(t){t.has("resize")&&(this.setTextareaDimensions(),this.updateResizeObserver()),super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){let r=e??this.input.selectionStart,s=i??this.input.selectionEnd;this.input.setRangeText(t,r,s,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this._value=null,this.input&&(this.input.value=this.value||""),super.formResetCallback()}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),i=this.label?!0:!!t,o=this.hint?!0:!!e,r=(this.value??"").length,s=this.maxlength!=null?this.localize.term("numCharactersRemaining",this.maxlength-r):this.localize.term("numCharacters",r);return v`
      <label
        part="form-control-label label"
        class=${T({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base textarea-wrapper" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${w(this.name)}
          .value=${At(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${w(this.placeholder)}
          rows=${w(this.rows)}
          minlength=${w(this.minlength)}
          maxlength=${w(this.maxlength)}
          autocapitalize=${w(this.autocapitalize)}
          autocorrect=${w(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${w(this.spellcheck)}
          enterkeyhint=${w(this.enterkeyhint)}
          inputmode=${w(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
        ></textarea>

        <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
        <div part="textarea-adjuster" class="size-adjuster" ?hidden=${this.resize!=="auto"}></div>
      </div>

      <div
        part="hint"
        class=${T({footer:!0,"has-count":this.withCount,"has-slotted":o})}
      >
        <slot id="hint" name="hint" class="hint" aria-hidden=${o?"false":"true"}>${this.hint}</slot>

        ${this.withCount?v`
              <div part="count" class="count" aria-hidden="true">${s}</div>
              <div class="wa-visually-hidden-force" aria-live="polite">${this.announcedCountText}</div>
            `:""}
      </div>
    `}};k.css=[xr,rt,G,Lr];a([P()],k.prototype,"announcedCountText",2);a([y(".control")],k.prototype,"input",2);a([y('[part~="base"]')],k.prototype,"base",2);a([y(".size-adjuster")],k.prototype,"sizeAdjuster",2);a([l()],k.prototype,"title",2);a([l({reflect:!0})],k.prototype,"name",2);a([P()],k.prototype,"value",1);a([l({attribute:"value",reflect:!0})],k.prototype,"defaultValue",2);a([l({reflect:!0})],k.prototype,"size",2);a([C("size")],k.prototype,"handleSizeChange",1);a([l({reflect:!0})],k.prototype,"appearance",2);a([l()],k.prototype,"label",2);a([l({attribute:"hint"})],k.prototype,"hint",2);a([l()],k.prototype,"placeholder",2);a([l({type:Number})],k.prototype,"rows",2);a([l({reflect:!0})],k.prototype,"resize",2);a([l({type:Boolean})],k.prototype,"disabled",2);a([l({type:Boolean,reflect:!0})],k.prototype,"readonly",2);a([l({type:Boolean,reflect:!0})],k.prototype,"required",2);a([l({type:Number})],k.prototype,"minlength",2);a([l({type:Number})],k.prototype,"maxlength",2);a([l()],k.prototype,"autocapitalize",2);a([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="off"),toAttribute:t=>t?"on":"off"}})],k.prototype,"autocorrect",2);a([l()],k.prototype,"autocomplete",2);a([l({type:Boolean})],k.prototype,"autofocus",2);a([l()],k.prototype,"enterkeyhint",2);a([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],k.prototype,"spellcheck",2);a([l()],k.prototype,"inputmode",2);a([l({attribute:"with-label",type:Boolean})],k.prototype,"withLabel",2);a([l({attribute:"with-hint",type:Boolean})],k.prototype,"withHint",2);a([l({attribute:"with-count",type:Boolean,reflect:!0})],k.prototype,"withCount",2);a([C("rows",{waitUntilFirstUpdate:!0})],k.prototype,"handleRowsChange",1);a([C("value",{waitUntilFirstUpdate:!0})],k.prototype,"handleValueChange",1);k=a([R("wa-textarea")],k);k.disableWarning?.("change-in-update");var kr=L`
  :host {
    --track-size: 0.5em;
    --thumb-width: 1.4em;
    --thumb-height: 1.4em;
    --marker-width: 0.1875em;
    --marker-height: 0.1875em;
  }

  :host([orientation='vertical']) {
    width: auto;
  }

  #label:has(~ .vertical) {
    display: block;
    order: 2;
    max-width: none;
    text-align: center;
  }

  #description:has(~ .vertical) {
    order: 3;
    text-align: center;
  }

  /* Add extra space between slider and label, when present */
  #label.has-label ~ #slider {
    &.horizontal {
      margin-block-start: 0.5em;
    }
    &.vertical {
      margin-block-end: 0.5em;
    }
  }

  #slider {
    touch-action: none;

    &:focus {
      outline: none;
    }

    &:focus-visible:not(.disabled) #thumb,
    &:focus-visible:not(.disabled) #thumb-min,
    &:focus-visible:not(.disabled) #thumb-max {
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  #track {
    position: relative;
    border-radius: 9999px;
    background: var(--wa-color-neutral-fill-normal);
    isolation: isolate;
  }

  /* Orientation */
  .horizontal #track {
    height: var(--track-size);
  }

  .vertical #track {
    order: 1;
    width: var(--track-size);
    height: 200px;
  }

  /* Disabled */
  .disabled #track {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Indicator */
  #indicator {
    position: absolute;
    border-radius: inherit;
    background-color: var(--wa-form-control-activated-color);

    &:dir(ltr) {
      right: calc(100% - max(var(--start), var(--end)));
      left: min(var(--start), var(--end));
    }

    &:dir(rtl) {
      right: min(var(--start), var(--end));
      left: calc(100% - max(var(--start), var(--end)));
    }
  }

  .horizontal #indicator {
    top: 0;
    height: 100%;
  }

  .vertical #indicator {
    top: calc(100% - var(--end));
    bottom: var(--start);
    left: 0;
    width: 100%;
  }

  /* Thumbs */
  #thumb,
  #thumb-min,
  #thumb-max {
    z-index: 3;
    position: absolute;
    width: var(--thumb-width);
    height: var(--thumb-height);
    border: solid 0.125em var(--wa-color-surface-default);
    border-radius: 50%;
    background-color: var(--wa-form-control-activated-color);
    cursor: pointer;
  }

  .disabled #thumb,
  .disabled #thumb-min,
  .disabled #thumb-max {
    cursor: inherit;
  }

  .horizontal #thumb,
  .horizontal #thumb-min,
  .horizontal #thumb-max {
    top: calc(50% - var(--thumb-height) / 2);

    &:dir(ltr) {
      right: auto;
      left: calc(var(--position) - var(--thumb-width) / 2);
    }

    &:dir(rtl) {
      right: calc(var(--position) - var(--thumb-width) / 2);
      left: auto;
    }
  }

  .vertical #thumb,
  .vertical #thumb-min,
  .vertical #thumb-max {
    bottom: calc(var(--position) - var(--thumb-height) / 2);
    left: calc(50% - var(--thumb-width) / 2);
  }

  /* Range-specific thumb styles */
  :host([range]) {
    #thumb-min:focus-visible,
    #thumb-max:focus-visible {
      z-index: 4; /* Ensure focused thumb appears on top */
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  /* Markers */
  #markers {
    pointer-events: none;
  }

  .marker {
    z-index: 2;
    position: absolute;
    width: var(--marker-width);
    height: var(--marker-height);
    border-radius: 50%;
    background-color: var(--wa-color-surface-default);
  }

  .marker:first-of-type,
  .marker:last-of-type {
    display: none;
  }

  .horizontal .marker {
    top: calc(50% - var(--marker-height) / 2);
    left: calc(var(--position) - var(--marker-width) / 2);
  }

  .vertical .marker {
    top: calc(var(--position) - var(--marker-height) / 2);
    left: calc(50% - var(--marker-width) / 2);
  }

  /* Marker labels */
  #references {
    position: relative;

    slot {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    ::slotted(*) {
      color: var(--wa-color-text-quiet);
      font-size: 0.875em;
      line-height: 1;
    }
  }

  .horizontal {
    #references {
      margin-block-start: 0.5em;
    }
  }

  .vertical {
    display: flex;
    margin-inline: auto;

    #track {
      order: 1;
    }

    #references {
      order: 2;
      width: min-content;
      margin-inline-start: 0.75em;

      slot {
        flex-direction: column;
      }
    }
  }

  .vertical #references slot {
    flex-direction: column;
  }
`;function*Ri(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Ri(t.shadowRoot.activeElement)))}var Mi=typeof window<"u"&&"ontouchstart"in window,Ae=class{constructor(t,e){this.isActive=!1,this.isDragging=!1,this.handleDragStart=i=>{let o="touches"in i?i.touches[0].clientX:i.clientX,r="touches"in i?i.touches[0].clientY:i.clientY;this.isDragging||!Mi&&i.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("pointercancel",this.handleDragStop),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),document.addEventListener("touchcancel",this.handleDragStop),this.options.start(o,r))},this.handleDragStop=i=>{let o="changedTouches"in i?i.changedTouches[0].clientX:i.clientX,r="changedTouches"in i?i.changedTouches[0].clientY:i.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.options.stop(o,r)},this.handleDragMove=i=>{let o="touches"in i?i.touches[0].clientX:i.clientX,r="touches"in i?i.touches[0].clientY:i.clientY;window.getSelection()?.removeAllRanges(),this.options.move(o,r)},this.element=t,this.options={start:()=>{},stop:()=>{},move:()=>{},...e},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),Mi&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.element.removeEventListener("pointerdown",this.handleDragStart),Mi&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(t){(t!==void 0?t:!this.isActive)?this.start():this.stop()}};var Sr="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var $r=(t=21)=>{let e="",i=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=Sr[i[t]&63];return e};function ot(t,e,i){let o=r=>Object.is(r,-0)?0:r;return t<e?o(e):t>i?o(i):o(t)}function Ar(t=""){return`${t}${$r()}`}var zr="important",ja=" !"+zr,Yt=Tt(class extends mt{constructor(t){if(super(t),t.type!==it.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{let o=t[i];return o==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){let{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(let o in e){let r=e[o];if(r!=null){this.ft.add(o);let s=typeof r=="string"&&r.endsWith(ja);o.includes("-")||s?i.setProperty(o,s?r.slice(0,-11):r,s?zr:""):i[o]=r}}return W}});function Fi(t,e,i){let o=(t-e)/i;return Math.abs(o-Math.round(o))>1e-9}var Xa=()=>({observedAttributes:["min","max","step"],checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]},i=(o,r,s,n)=>{if(typeof document>"u")return"";let c=document.createElement("input");return c.type="range",c.min=String(r),c.max=String(s),c.step=String(n),c.value=String(o),c.checkValidity(),c.validationMessage};if(t.isRange){let o=t.minValue,r=t.maxValue;if(o<t.min)return e.isValid=!1,e.invalidKeys.push("rangeUnderflow"),e.message=i(o,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,e;if(r>t.max)return e.isValid=!1,e.invalidKeys.push("rangeOverflow"),e.message=i(r,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,e;if(t.step&&t.step!==1){let s=Fi(o,t.min,t.step),n=Fi(r,t.min,t.step);if(s||n){e.isValid=!1,e.invalidKeys.push("stepMismatch");let c=s?o:r;return e.message=i(c,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,e}}}else{let o=t.value;if(o<t.min)return e.isValid=!1,e.invalidKeys.push("rangeUnderflow"),e.message=i(o,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,e;if(o>t.max)return e.isValid=!1,e.invalidKeys.push("rangeOverflow"),e.message=i(o,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,e;if(t.step&&t.step!==1&&Fi(o,t.min,t.step))return e.isValid=!1,e.invalidKeys.push("stepMismatch"),e.message=i(o,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,e}return e}}),$=class extends F{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new et(this,"hint","label"),this.localize=new B(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=null,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="m",this.min=0,this.max=100,this.step=1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Xa()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){if(this.valueHasChanged){let e=this._value??this.minValue??0;return ot(e,this.min,this.max)}let t=this._value??this.defaultValue;return ot(t,this.min,this.max)}set value(t){t=Number(t)??this.minValue,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get isRange(){return this.range}handleSizeChange(){Y(this.localName,this.size)}firstUpdated(t){super.firstUpdated(t),this.isRange?(this.draggableThumbMin=new Ae(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,i)=>{this.setThumbValueFromCoordinates(e,i,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new Ae(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,i)=>{this.setThumbValueFromCoordinates(e,i,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new Ae(this.track,{start:(e,i)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{let o=this.getValueFromCoordinates(e,i),r=Math.abs(o-this.minValue),s=Math.abs(o-this.maxValue);if(r===s)if(o>this.maxValue)this.activeThumb="max";else if(o<this.minValue)this.activeThumb="min";else{let n=this.localize.dir()==="rtl",c=this.orientation==="vertical",h=c?i:e,d=this.lastTrackPosition||h;this.lastTrackPosition=h;let u=h>d!==n&&!c||h<d&&c;this.activeThumb=u?"max":"min"}else this.activeThumb=r<=s?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(e,i,this.activeThumb),this.showRangeTooltips()},move:(e,i)=>{this.activeThumb&&this.setThumbValueFromCoordinates(e,i,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new Ae(this.slider,{start:(e,i)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(e,i),this.showTooltip()},move:(e,i)=>{this.setValueFromCoordinates(e,i)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}willUpdate(t){this.isRange&&(t.has("minValue")||t.has("maxValue")||t.has("min")||t.has("max"))&&(this.minValue=ot(this.minValue,this.min,this.maxValue),this.maxValue=ot(this.maxValue,this.minValue,this.max)),super.willUpdate(t)}updated(t){if(this.isRange&&(t.has("minValue")||t.has("maxValue"))&&this.updateFormValue(),t.has("disabled")||t.has("readonly")){let e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(t)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):(this._value=null,this.defaultValue=this.defaultValue??parseFloat(this.getAttribute("value")??String(this.min))),this.valueHasChanged=!1,this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(t){let e=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length,i=Number(this.step),o=Number(this.min),r=Number(this.max);return t=Math.round(t/i)*i,t=ot(t,o,r),parseFloat(t.toFixed(e))}getPercentageFromValue(t){return(t-this.min)/(this.max-this.min)*100}getValueFromCoordinates(t,e){let i=this.localize.dir()==="rtl",o=this.orientation==="vertical",{top:r,right:s,bottom:n,left:c,height:h,width:d}=this.trackBoundingClientRect,u=o?e:t,p=o?{start:r,end:n,size:h}:{start:c,end:s,size:d},m=(o||i?p.end-u:u-p.start)/p.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*m)}handleBlur(){this.isRange?requestAnimationFrame(()=>{let t=this.shadowRoot?.activeElement;t===this.thumbMin||t===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(t){let e=t.target;this.isRange?(e===this.thumbMin?this.activeThumb="min":e===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(t){let e=this.localize.dir()==="rtl",i=t.target;if(this.disabled||this.readonly||this.isRange&&(i===this.thumbMin?this.activeThumb="min":i===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;let o=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value,r=o;switch(t.key){case"ArrowUp":case(e?"ArrowLeft":"ArrowRight"):t.preventDefault(),r=this.clampAndRoundToStep(o+this.step);break;case"ArrowDown":case(e?"ArrowRight":"ArrowLeft"):t.preventDefault(),r=this.clampAndRoundToStep(o-this.step);break;case"Home":t.preventDefault(),r=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":t.preventDefault(),r=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":t.preventDefault();let s=Math.max(o+(this.max-this.min)/10,o+this.step);r=this.clampAndRoundToStep(s);break;case"PageDown":t.preventDefault();let n=Math.min(o-(this.max-this.min)/10,o-this.step);r=this.clampAndRoundToStep(n);break;case"Enter":ii(t,this);return}r!==o&&(this.isRange?(this.activeThumb==="min"?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),this.updateFormValue()):this.value=ot(r,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(t){t.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(t,e){let i=this.value;this.value=this.getValueFromCoordinates(t,e),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(t,e,i){let o=this.getValueFromCoordinates(t,e),r=i==="min"?this.minValue:this.maxValue;i==="min"?o>this.maxValue?(this.maxValue=o,this.minValue=o):this.minValue=Math.max(this.min,o):o<this.minValue?(this.minValue=o,this.maxValue=o):this.maxValue=Math.min(this.max,o),r!==(i==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;let t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(t&&(t.open=!0),e&&(e.open=!1)):this.activeThumb==="max"&&(e&&(e.open=!0),t&&(t.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;let t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");t&&(t.open=!1),e&&(e.open=!1)}updateFormValue(t){if(this.isRange){let e=new FormData;e.append(this.name||"",String(this.minValue)),e.append(this.name||"",String(this.maxValue)),this.setValue(e,e);return}super.updateFormValue(t)}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){if(this.isRange){for(let t of Ri())if(t===this.thumbMin){this.thumbMin.blur();break}else if(t===this.thumbMax){this.thumbMax.blur();break}}else this.slider.blur()}stepDown(){if(this.isRange){let t=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=ot(t,this.min,this.maxValue),this.updateFormValue()}else{let t=this.clampAndRoundToStep(this.value-this.step);this.value=t}}stepUp(){if(this.isRange){let t=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=ot(t,this.minValue,this.max),this.updateFormValue()}else{let t=this.clampAndRoundToStep(this.value+this.step);this.value=t}}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),i=this.label?!0:!!t,o=this.hint?!0:!!e,r=this.hasSlotController.test("reference"),s=T({xs:this.size==="xs",s:this.size==="s"||this.size==="small",m:this.size==="m"||this.size==="medium",l:this.size==="l"||this.size==="large",xl:this.size==="xl",small:this.size==="small"||this.size==="s",medium:this.size==="medium"||this.size==="m",large:this.size==="large"||this.size==="l",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),n=[];if(this.withMarkers)for(let f=this.min;f<=this.max;f+=this.step)n.push(this.getPercentageFromValue(f));let c=v`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${T({vh:!i,"has-label":i})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,h=v`
      <div
        id="hint"
        part="hint"
        class=${T({"has-slotted":o})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,d=this.withMarkers?v`
          <div id="markers" part="markers">
            ${n.map(f=>v`<span part="marker" class="marker" style=${Yt({"--position":`${f}%`})}></span>`)}
          </div>
        `:"",u=r?v`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",p=(f,m)=>this.withTooltip?v`
            <wa-tooltip
              id=${`tooltip${f!=="thumb"?"-"+f:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                tooltip:tooltip__tooltip,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${f}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter=="function"?this.valueFormatter(m):this.localize.number(m)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){let f=ot(this.getPercentageFromValue(this.minValue),0,100),m=ot(this.getPercentageFromValue(this.maxValue),0,100);return v`
        ${c}

        <div id="slider" part="slider" class=${s}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${Yt({"--start":`${Math.min(f,m)}%`,"--end":`${Math.max(f,m)}%`})}
            ></div>

            ${d}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${Yt({"--position":`${f}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.minValue):this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (minimum value)`:"Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style=${Yt({"--position":`${m}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.maxValue):this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (maximum value)`:"Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${u} ${h}
        </div>

        ${p("thumb-min",this.minValue)} ${p("thumb-max",this.maxValue)}
      `}else{let f=ot(this.getPercentageFromValue(this.value),0,100),m=ot(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return v`
        ${c}

        <div
          id="slider"
          part="slider"
          class=${s}
          role="slider"
          aria-disabled=${this.disabled?"true":"false"}
          aria-readonly=${this.disabled?"true":"false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.value):this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled?-1:0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${Yt({"--start":`${m}%`,"--end":`${f}%`})}
            ></div>

            ${d}
            <span id="thumb" part="thumb" style=${Yt({"--position":`${f}%`})}></span>
          </div>

          ${u} ${h}
        </div>

        ${p("thumb",this.value)}
      `}}};$.formAssociated=!0;$.observeSlots=!0;$.css=[G,rt,kr];a([y("#slider")],$.prototype,"slider",2);a([y("#thumb")],$.prototype,"thumb",2);a([y("#thumb-min")],$.prototype,"thumbMin",2);a([y("#thumb-max")],$.prototype,"thumbMax",2);a([y("#track")],$.prototype,"track",2);a([y("#tooltip")],$.prototype,"tooltip",2);a([l()],$.prototype,"label",2);a([l({attribute:"hint"})],$.prototype,"hint",2);a([l({reflect:!0})],$.prototype,"name",2);a([l({type:Number,attribute:"min-value"})],$.prototype,"minValue",2);a([l({type:Number,attribute:"max-value"})],$.prototype,"maxValue",2);a([l({attribute:"value",reflect:!0,type:Number})],$.prototype,"defaultValue",2);a([P()],$.prototype,"value",1);a([l({type:Boolean,reflect:!0})],$.prototype,"range",2);a([l({type:Boolean})],$.prototype,"disabled",2);a([l({type:Boolean,reflect:!0})],$.prototype,"readonly",2);a([l({reflect:!0})],$.prototype,"orientation",2);a([l({reflect:!0})],$.prototype,"size",2);a([C("size")],$.prototype,"handleSizeChange",1);a([l({attribute:"indicator-offset",type:Number})],$.prototype,"indicatorOffset",2);a([l({type:Number})],$.prototype,"min",2);a([l({type:Number})],$.prototype,"max",2);a([l({type:Number})],$.prototype,"step",2);a([l({type:Boolean})],$.prototype,"autofocus",2);a([l({attribute:"tooltip-distance",type:Number})],$.prototype,"tooltipDistance",2);a([l({attribute:"tooltip-placement",reflect:!0})],$.prototype,"tooltipPlacement",2);a([l({attribute:"with-markers",type:Boolean})],$.prototype,"withMarkers",2);a([l({attribute:"with-tooltip",type:Boolean})],$.prototype,"withTooltip",2);a([l({attribute:"with-label",type:Boolean})],$.prototype,"withLabel",2);a([l({attribute:"with-hint",type:Boolean})],$.prototype,"withHint",2);a([l({attribute:!1})],$.prototype,"valueFormatter",2);$=a([R("wa-slider")],$);var Er=L`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    /* Inset box-shadow, not a border: Safari seams a clip-path edge that runs along a border. */
    &::part(arrow) {
      box-shadow: inset calc(-1 * var(--wa-tooltip-border-width)) calc(-1 * var(--wa-tooltip-border-width)) 0 0
        var(--wa-tooltip-border-color);
    }
  }
`;function _r(t,e){for(;e;){if(e===t)return!0;e instanceof Element&&e.assignedSlot?e=e.assignedSlot:e.parentNode?e=e.parentNode:e instanceof ShadowRoot?e=e.host:e=null}return!1}var I=class extends H{constructor(){super(...arguments),this.dismissedByPress=!1,this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.dismissedByPress=!1,this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{if(this.hasTrigger("click")){this.open?this.hide():this.show();return}this.hasTrigger("manual")||this.lightDismiss()},this.handleFocus=()=>{this.dismissedByPress||this.hasTrigger("focus")&&this.show()},this.handleMouseDown=()=>{this.hasTrigger("click")||this.hasTrigger("manual")||this.lightDismiss()},this.handleDocumentKeyDown=t=>{this.hasTrigger("manual")||t.key==="Escape"&&this.open&&Xe(this)&&(t.preventDefault(),t.stopPropagation(),this.hide())},this.handleDocumentClick=t=>{this.hasTrigger("manual")||this.anchor&&t.composedPath().includes(this.anchor)||this.hide()},this.handleMouseOver=()=>{this.dismissedByPress||this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=t=>{let e=t.relatedTarget,i=!!(e&&this.anchor&&_r(this.anchor,e)),o=!!(e&&_r(this,e));i||o||(this.dismissedByPress=!1,this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)))}}connectedCallback(){super.connectedCallback(),typeof document<"u"&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.dismissedByPress=!1,this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=Ar("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),oe(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(t){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),super.firstUpdated(t)}lightDismiss(){clearTimeout(this.hoverTimeout),this.dismissedByPress=!0,this.hide()}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){let o=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);o.includes(e)||(o.push(e),t.setAttribute("aria-labelledby",o.join(" ")))}removeFromAriaLabelledBy(t,e){let r=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(s=>s!==e);r.length>0?t.setAttribute("aria-labelledby",r.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;let t=new Jt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.hasTrigger("manual")||(document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),je(this)),this.body.hidden=!1,this.popup.active=!0,await ie(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new ee)}else{let t=new Qt;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),oe(this),await ie(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new te)}}handleForChange(){let t=this.getRootNode?.();if(!t)return;let e=this.for?t.getElementById?.(this.for):null,i=this.anchor;if(e===i)return;this.dismissedByPress=!1;let{signal:o}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:o}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:o}),e.addEventListener("click",this.handleClick,{signal:o}),e.addEventListener("mousedown",this.handleMouseDown,{signal:o}),e.addEventListener("mouseover",this.handleMouseOver,{signal:o}),e.addEventListener("mouseout",this.handleMouseOut,{signal:o})),i&&(this.removeFromAriaLabelledBy(i,this.id),i.removeEventListener("blur",this.handleBlur,{capture:!0}),i.removeEventListener("focus",this.handleFocus,{capture:!0}),i.removeEventListener("click",this.handleClick),i.removeEventListener("mousedown",this.handleMouseDown),i.removeEventListener("mouseover",this.handleMouseOver),i.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Lt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Lt(this,"wa-after-hide")}render(){return v`
      <wa-popup
        part="base tooltip"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${T({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};I.css=Er;I.dependencies={"wa-popup":_};a([y("slot:not([name])")],I.prototype,"defaultSlot",2);a([y(".body")],I.prototype,"body",2);a([y("wa-popup")],I.prototype,"popup",2);a([l()],I.prototype,"placement",2);a([l({type:Boolean,reflect:!0})],I.prototype,"disabled",2);a([l({type:Number})],I.prototype,"distance",2);a([l({type:Boolean,reflect:!0})],I.prototype,"open",2);a([l({type:Number})],I.prototype,"skidding",2);a([l({attribute:"show-delay",type:Number})],I.prototype,"showDelay",2);a([l({attribute:"hide-delay",type:Number})],I.prototype,"hideDelay",2);a([l()],I.prototype,"trigger",2);a([l({attribute:"without-arrow",type:Boolean,reflect:!0})],I.prototype,"withoutArrow",2);a([l()],I.prototype,"for",2);a([P()],I.prototype,"anchor",2);a([C("open",{waitUntilFirstUpdate:!0})],I.prototype,"handleOpenChange",1);a([C("for")],I.prototype,"handleForChange",1);a([C(["distance","placement","skidding"])],I.prototype,"handleOptionsChange",1);a([C("disabled")],I.prototype,"handleDisabledChange",1);I=a([R("wa-tooltip")],I);var Tr=L`
  :host {
    --height: var(--wa-form-control-toggle-size);
    --width: calc(var(--height) * 1.75);
    --thumb-size: 0.75em;

    display: inline-flex;
    line-height: var(--wa-form-control-value-line-height);
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    color: var(--wa-form-control-value-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch {
    flex: 0 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--height);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    transition-property: translate, background, border-color, box-shadow;
    transition-duration: var(--wa-transition-normal);
    transition-timing-function: var(--wa-transition-easing);
  }

  :host([did-ssr]:not(:defined)) .switch {
    transition-property: unset;
    transition-duration: unset;
    transition-timing-function: unset;
  }

  .switch .thumb {
    aspect-ratio: 1 / 1;
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--wa-form-control-border-color);
    border-radius: 50%;
    translate: calc((var(--width) - var(--height)) / -2);
    transition: inherit;
  }
  .switch .thumb:dir(rtl) {
    translate: calc((var(--width) - var(--height)) / 2);
  }

  .input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Focus */
  label:not(.disabled) .input:focus-visible ~ [part~='control'] {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Checked */
  .checked .switch {
    background-color: var(--wa-form-control-activated-color);
    border-color: var(--wa-form-control-activated-color);
  }

  .checked .switch .thumb {
    background-color: var(--wa-color-surface-default);
    translate: calc((var(--width) - var(--height)) / 2);
  }
  .checked .switch .thumb:dir(rtl) {
    translate: calc((var(--width) - var(--height)) / -2);
  }

  /* Disabled */
  label:has(> :disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  [part~='label'] {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  @media (forced-colors: active) {
    :checked:enabled + .switch:hover .thumb,
    :checked + .switch .thumb {
      background-color: ButtonText;
    }
  }
`;var N=class extends F{constructor(){super(...arguments),this.hasSlotController=new et(this,"hint"),this.localize=new B(this),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="m",this.disabled=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,Et()]}get value(){return this._value??"on"}set value(t){this._value=t}handleSizeChange(){Y(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(t){this._checked=!!t,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(t){let e=this.localize.dir()==="rtl";t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=e,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!e,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("checked")||t.has("defaultChecked")||t.has("disabled"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){if(this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleValueOrCheckedChange()});return}this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}setValue(t,e){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(t??"on",e)}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){let t=this.hasSlotController.test("hint","withHint"),e=this.hint?!0:!!t,i=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,o=this.didSSR&&!this.hasUpdated?null:At(this.checked);return v`
      <label
        part="base switch"
        class=${T({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${w(this.name)}
          value=${w(this.value)}
          .checked=${w(o)}
          ?checked=${i}
          ?disabled=${this.disabled}
          ?required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          aria-describedby="hint"
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch">
          <span part="thumb" class="thumb"></span>
        </span>

        <slot part="label" class="label"></slot>
      </label>

      <slot
        id="hint"
        name="hint"
        part="hint"
        class=${T({"has-slotted":e})}
        aria-hidden=${e?"false":"true"}
        >${this.hint}</slot
      >
    `}};N.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0};N.css=[rt,G,Tr];a([y('input[type="checkbox"]')],N.prototype,"input",2);a([l()],N.prototype,"title",2);a([l({reflect:!0})],N.prototype,"name",2);a([l({reflect:!0})],N.prototype,"value",1);a([l({reflect:!0})],N.prototype,"size",2);a([C("size")],N.prototype,"handleSizeChange",1);a([l({type:Boolean})],N.prototype,"disabled",2);a([l({type:Boolean,attribute:!1})],N.prototype,"checked",1);a([l({type:Boolean,attribute:"checked",reflect:!0})],N.prototype,"defaultChecked",2);a([l({type:Boolean,reflect:!0})],N.prototype,"required",2);a([l({attribute:"hint"})],N.prototype,"hint",2);a([l({attribute:"with-hint",type:Boolean})],N.prototype,"withHint",2);a([C(["checked","defaultChecked"])],N.prototype,"handleStateChange",1);a([C("disabled",{waitUntilFirstUpdate:!0})],N.prototype,"handleDisabledChange",1);N=a([R("wa-switch")],N);N.disableWarning?.("change-in-update");var Or=L`
  :host {
    --checked-icon-color: var(--wa-color-brand-on-loud);
    --checked-icon-scale: 0.8;

    display: inline-flex;
    color: var(--wa-form-control-value-color);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    user-select: none;
    -webkit-user-select: none;
  }

  [part~='control'] {
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
    align-items: center;
    justify-content: center;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    border-color: var(--wa-form-control-border-color);
    border-radius: min(
      calc(var(--wa-form-control-toggle-size) * 0.375),
      var(--wa-border-radius-s)
    ); /* min prevents entirely circular checkbox */
    border-style: var(--wa-border-style);
    border-width: var(--wa-form-control-border-width);
    background-color: var(--wa-form-control-background-color);
    transition:
      background var(--wa-transition-normal),
      border-color var(--wa-transition-fast),
      box-shadow var(--wa-transition-fast),
      color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    margin-inline-end: 0.5em;
  }

  [part~='base'] {
    display: flex;
    align-items: flex-start;
    position: relative;
    color: currentColor;
    vertical-align: middle;
    cursor: pointer;
  }

  [part~='label'] {
    display: inline;
  }

  /* Checked */
  [part~='control']:has(:checked, :indeterminate) {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-activated-color);
  }

  /* Focus */
  [part~='control']:has(> input:focus-visible:not(:disabled)) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host [part~='base']:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input {
    position: absolute;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    pointer-events: none;
  }

  [part~='icon'] {
    display: flex;
    scale: var(--checked-icon-scale);

    /* Without this, Safari renders the icon slightly to the left */
    &::part(svg) {
      translate: 0.0009765625em;
    }

    input:not(:checked, :indeterminate) + & {
      visibility: hidden;
    }
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }
`;var U=class extends F{constructor(){super(...arguments),this.hasSlotController=new et(this,"hint"),this.title="",this._value=this.getAttribute("value")??null,this.size="m",this.disabled=!1,this.indeterminate=!1,this._checked=null,this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint=""}static get validators(){let t=[Ke({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...t]}get value(){return this._value??"on"}set value(t){this._value=t}handleSizeChange(){Y(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(t){this._checked=!!t,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}connectedCallback(){if(super.connectedCallback(),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultCheckedChange()});return}this.handleDefaultCheckedChange()}handleDefaultCheckedChange(){this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){if(this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleValueOrCheckedChange()});return}this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(t){super.willUpdate(t),(t.has("value")||t.has("checked")||t.has("defaultChecked")||t.has("disabled"))&&this.handleValueOrCheckedChange()}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){let t=this.hasSlotController.test("hint"),e=this.hint?!0:!!t,i=!this.checked&&this.indeterminate,o=i?"indeterminate":"check",r=i?"indeterminate":"checked",s=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,n=this.didSSR&&!this.hasUpdated?null:At(this.checked);return v`
      <label part="base checkbox">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${w(this.name)}
            value=${w(this.value)}
            .indeterminate=${At(this.indeterminate)}
            .checked=${w(n)}
            ?checked=${s}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-checked=${this.indeterminate?"mixed":this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${r}-icon icon" library="system" name=${o}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${e?"false":"true"}
        class="${T({"has-slotted":e})}"
      >
        ${this.hint}
      </slot>
    `}};U.css=[rt,G,Or];U.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0};a([y('input[type="checkbox"]')],U.prototype,"input",2);a([l()],U.prototype,"title",2);a([l({reflect:!0})],U.prototype,"value",1);a([l({reflect:!0})],U.prototype,"size",2);a([C("size")],U.prototype,"handleSizeChange",1);a([l({type:Boolean})],U.prototype,"disabled",2);a([l({type:Boolean,reflect:!0})],U.prototype,"indeterminate",2);a([l({type:Boolean,attribute:!1})],U.prototype,"checked",1);a([l({type:Boolean,reflect:!0,attribute:"checked"})],U.prototype,"defaultChecked",2);a([l({type:Boolean,reflect:!0})],U.prototype,"required",2);a([l()],U.prototype,"hint",2);a([C(["checked","defaultChecked"])],U.prototype,"handleDefaultCheckedChange",1);a([C(["checked","indeterminate"])],U.prototype,"handleStateChange",1);a([C("disabled")],U.prototype,"handleDisabledChange",1);U=a([R("wa-checkbox")],U);U.disableWarning?.("change-in-update");var Rr=["aria-label","aria-pressed","aria-expanded","aria-controls","aria-describedby"],Mr=new WeakSet;function Fr(t){if(Mr.has(t))return;Mr.add(t);let e=async()=>{await t.updateComplete;let i=t.shadowRoot?.querySelector('[part~="button"]');if(i)for(let o of Rr){let r=t.getAttribute(o);r===null?i.removeAttribute(o):i.setAttribute(o,r)}};new MutationObserver(e).observe(t,{attributes:!0,attributeFilter:Rr}),e()}function Dr(t){t.matches?.("wa-button")&&Fr(t),t.querySelectorAll?.("wa-button").forEach(Fr)}document.addEventListener("DOMContentLoaded",()=>{Dr(document),new MutationObserver(t=>{for(let e of t)for(let i of e.addedNodes)i.nodeType===1&&Dr(i)}).observe(document.body,{childList:!0,subtree:!0})},{once:!0});})();
/*! Bundled license information:

@awesome.me/webawesome/dist/chunks/chunk.R7QX4M6R.js:
@awesome.me/webawesome/dist/chunks/chunk.VC3BPUZJ.js:
@awesome.me/webawesome/dist/chunks/chunk.7VGCIHDG.js:
@awesome.me/webawesome/dist/chunks/chunk.AOKMSJXD.js:
@awesome.me/webawesome/dist/chunks/chunk.KBXNFZQL.js:
@awesome.me/webawesome/dist/chunks/chunk.RPQJAXXR.js:
@awesome.me/webawesome/dist/chunks/chunk.RWNXKUCF.js:
@awesome.me/webawesome/dist/chunks/chunk.G5ZZIGWB.js:
@awesome.me/webawesome/dist/chunks/chunk.S35PLDPD.js:
@awesome.me/webawesome/dist/chunks/chunk.XNTP7DEQ.js:
@awesome.me/webawesome/dist/chunks/chunk.PZAN6FPN.js:
@awesome.me/webawesome/dist/chunks/chunk.M45NRQFW.js:
@awesome.me/webawesome/dist/chunks/chunk.S67PIWQL.js:
@awesome.me/webawesome/dist/chunks/chunk.LXLE4T4D.js:
@awesome.me/webawesome/dist/chunks/chunk.W7A2VLCT.js:
@awesome.me/webawesome/dist/chunks/chunk.EGBUT3HG.js:
@awesome.me/webawesome/dist/chunks/chunk.YDQCS2HK.js:
@awesome.me/webawesome/dist/chunks/chunk.WDIIGUNP.js:
@awesome.me/webawesome/dist/chunks/chunk.O74G5RVH.js:
@awesome.me/webawesome/dist/chunks/chunk.HGBRCPUS.js:
@awesome.me/webawesome/dist/chunks/chunk.KKI7M5DP.js:
@awesome.me/webawesome/dist/chunks/chunk.YPRC5XZF.js:
@awesome.me/webawesome/dist/chunks/chunk.UDRJMWVZ.js:
@awesome.me/webawesome/dist/chunks/chunk.JAAVYFGY.js:
@awesome.me/webawesome/dist/components/button/button.js:
@awesome.me/webawesome/dist/chunks/chunk.W62SLQ7P.js:
@awesome.me/webawesome/dist/chunks/chunk.4ZAKP7NY.js:
@awesome.me/webawesome/dist/chunks/chunk.MQODJ75V.js:
@awesome.me/webawesome/dist/chunks/chunk.3NKIHICW.js:
@awesome.me/webawesome/dist/chunks/chunk.PX3HMKF7.js:
@awesome.me/webawesome/dist/chunks/chunk.F25QOBDY.js:
@awesome.me/webawesome/dist/chunks/chunk.L6CIKOFQ.js:
@awesome.me/webawesome/dist/chunks/chunk.Z7CHPABS.js:
@awesome.me/webawesome/dist/components/details/details.js:
@awesome.me/webawesome/dist/chunks/chunk.UZWY5NQM.js:
@awesome.me/webawesome/dist/chunks/chunk.DITA2S5A.js:
@awesome.me/webawesome/dist/chunks/chunk.JTOY5KP3.js:
@awesome.me/webawesome/dist/chunks/chunk.3H2FQERJ.js:
@awesome.me/webawesome/dist/chunks/chunk.GWSUX3V5.js:
@awesome.me/webawesome/dist/chunks/chunk.JPBXG7RE.js:
@awesome.me/webawesome/dist/chunks/chunk.ZAVDMBWV.js:
@awesome.me/webawesome/dist/chunks/chunk.HPULLNVR.js:
@awesome.me/webawesome/dist/chunks/chunk.4AHPL3WP.js:
@awesome.me/webawesome/dist/chunks/chunk.JS5OA4M6.js:
@awesome.me/webawesome/dist/chunks/chunk.C3KOHXUM.js:
@awesome.me/webawesome/dist/chunks/chunk.5WATURH2.js:
@awesome.me/webawesome/dist/chunks/chunk.ZWQCGLB5.js:
@awesome.me/webawesome/dist/chunks/chunk.HS5AYC6E.js:
@awesome.me/webawesome/dist/chunks/chunk.UEBQI7VV.js:
@awesome.me/webawesome/dist/components/select/select.js:
@awesome.me/webawesome/dist/components/option/option.js:
@awesome.me/webawesome/dist/chunks/chunk.4XYGFHPR.js:
@awesome.me/webawesome/dist/chunks/chunk.3ZKPD2O5.js:
@awesome.me/webawesome/dist/chunks/chunk.R6M2PXD4.js:
@awesome.me/webawesome/dist/components/input/input.js:
@awesome.me/webawesome/dist/chunks/chunk.IOB2JHMR.js:
@awesome.me/webawesome/dist/chunks/chunk.HEEBTYY6.js:
@awesome.me/webawesome/dist/chunks/chunk.GSQEF3SC.js:
@awesome.me/webawesome/dist/components/textarea/textarea.js:
@awesome.me/webawesome/dist/chunks/chunk.WKHSZB7X.js:
@awesome.me/webawesome/dist/chunks/chunk.4LIBWWJL.js:
@awesome.me/webawesome/dist/chunks/chunk.WYNTFJHW.js:
@awesome.me/webawesome/dist/chunks/chunk.KNJT7KBU.js:
@awesome.me/webawesome/dist/chunks/chunk.RJPYR3UA.js:
@awesome.me/webawesome/dist/chunks/chunk.DJLBC7Q4.js:
@awesome.me/webawesome/dist/chunks/chunk.6RPNM7SD.js:
@awesome.me/webawesome/dist/components/slider/slider.js:
@awesome.me/webawesome/dist/chunks/chunk.DWWFIQKG.js:
@awesome.me/webawesome/dist/chunks/chunk.Q5CVJBTB.js:
@awesome.me/webawesome/dist/components/switch/switch.js:
@awesome.me/webawesome/dist/chunks/chunk.YB6263IP.js:
@awesome.me/webawesome/dist/chunks/chunk.PFQEHEIR.js:
@awesome.me/webawesome/dist/components/checkbox/checkbox.js:
  (*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
lit-html/directives/if-defined.js:
lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
lit-html/directive-helpers.js:
lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
