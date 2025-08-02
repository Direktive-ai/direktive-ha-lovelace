function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c;const l=window,d=l.trustedTypes,h=d?d.emptyScript:"",v=l.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u},m="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;f[m]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:f}),(null!==(c=l.reactiveElementVersions)&&void 0!==c?c:l.reactiveElementVersions=[]).push("1.6.3");const _=window,$=_.trustedTypes,w=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,A="?"+b,E=`<${A}>`,S=document,C=()=>S.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,P="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,U=/>/g,N=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,T=/"/g,H=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),L=new WeakMap,B=S.createTreeWalker(S,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const W=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=M;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(r.lastIndex=d,c=r.exec(i),null!==c);)d=r.lastIndex,r===M?"!--"===c[1]?r=R:void 0!==c[1]?r=U:void 0!==c[2]?(H.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=N):void 0!==c[3]&&(r=N):r===N?">"===c[0]?(r=null!=o?o:M,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?N:'"'===c[3]?T:O):r===T||r===O?r=N:r===R||r===U?r=M:(r=N,o=void 0);const h=r===N&&t[e+1].startsWith("/>")?" ":"";n+=r===M?i+E:l>=0?(s.push(a),i.slice(0,l)+x+i.slice(l)+b+h):i+b+(-2===l?(s.push(void 0),e):h)}return[V(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[c,l]=W(t,e);if(this.el=q.createElement(c,i),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=B.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(x)||e.startsWith(b)){const i=l[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+x).split(b),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Z:"@"===e[1]?G:X})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(H.test(s.tagName)){const t=s.textContent.split(b),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),B.nextNode(),a.push({type:2,index:++o});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===A)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(b,t+1));)a.push({type:7,index:o}),t+=b.length-1}o++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){var o,n,r,a;if(e===z)return e;let c=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const l=k(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(n=null==c?void 0:c._$AO)||void 0===n||n.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=c:i._$Cl=c),void 0!==c&&(e=Y(t,c._$AS(t,e.values),c,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);B.currentNode=o;let n=B.nextNode(),r=0,a=0,c=s[0];for(;void 0!==c;){if(r===c.index){let e;2===c.type?e=new F(n,n.nextSibling,this,t):1===c.type?e=new c.ctor(n,c.name,c.strings,this,t):6===c.type&&(e=new tt(n,this,t)),this._$AV.push(e),c=s[++a]}r!==(null==c?void 0:c.index)&&(n=B.nextNode(),r++)}return B.currentNode=S,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{constructor(t,e,i,s){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),k(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>D(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(V(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new K(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new q(t)),e}T(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new F(this.k(C()),this.k(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,i,s,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Y(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Y(this,s[i+r],e,r),a===z&&(a=this._$AH[r]),n||(n=!k(a)||a!==this._$AH[r]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const Q=$?$.emptyScript:"";class Z extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class G extends X{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Y(this,t,e,0))&&void 0!==i?i:j)===z)return;const s=this._$AH,o=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==j&&(s===j||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const et=_.litHtmlPolyfillSupport;null==et||et(q,F),(null!==(y=_.litHtmlVersions)&&void 0!==y?y:_.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,st;class ot extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new F(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return z}}ot.finalized=!0,ot._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:ot});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:ot}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ct(t){return at({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lt,dt,ht;function vt(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(dt||(dt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ht||(ht={}));let pt=class extends ot{setConfig(t){this._config=t}static get styles(){return r`
      ha-form {
        padding: 16px;
      }
    `}render(){return this.hass&&this._config?I`
      <ha-form
        .data=${this._config}
        .schema=${[{type:"string",name:"name",label:"Name",required:!0},{type:"string",name:"entity",label:"Entity",required:!0}]}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:I``}_valueChanged(t){const e=t.detail.value;e&&(this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e}})))}};t([at({attribute:!1})],pt.prototype,"hass",void 0),t([ct()],pt.prototype,"_config",void 0),pt=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e))("direktive-ha-lovelace-editor")],pt);class ut extends ot{constructor(){super(...arguments),this.directives=[],this.selectedDirective=null,this.conversationInput="",this.isSendingMessage=!1,this.expandedDirective=null,this.newDirectiveMessage="",this._isRendered=!1}setConfig(t,e){this.config={type:"direktive-ha-lovelace-dialog",name:"Direktive.ai Lovelace Component",entity:"sensor.direktive_sensor"},this.hass=t,this.directives=e}shouldUpdate(t){return this._hasConfigOrEntityChanged(this,t,!1)||vt(this,t,!1)}_hasConfigOrEntityChanged(t,e,i){if(e.has("config")||i)return!0;const s=e.get("hass");if(s&&this.config.entity){return s.states[this.config.entity].state!==t.hass.states[this.config.entity].state}return!1}_propagateVisionSync(){this.hass?this.hass.callService("mqtt","publish",{topic:"direktive-vision-ha-addon/fetch_vision_entities",payload:"{}",qos:0,retain:!1}).then((()=>{console.log("MQTT message published to trigger entity sync.")})).catch((t=>{console.error("Error publishing MQTT message:",t)})):console.error("Home Assistant object (hass) is not available.")}async _createDirective(){if(this.newDirectiveMessage.trim())try{await this.hass.callWS({type:"direktive/create_directive",message:this.newDirectiveMessage.trim()}),this.newDirectiveMessage=""}catch(t){this._showNotification("Error creating directive","error")}else this._showNotification("Please enter a directive message","warning")}async _deleteDirective(t){try{const e=await this.hass.callWS({type:"direktive/delete_directive",directive_id:t});console.log("--- DELETE DIRECTIVE RESPONSE",e),e.success&&this._showNotification("Directive deleted successfully","success")}catch(t){console.error("Error deleting directive:",t),this._showNotification("Error deleting directive","error")}}async _downloadDirective(t){try{const e=await this.hass.callWS({type:"direktive/download_directive",directive_id:t});e.success&&(this.directives=e.directives,this._showNotification("Directive downloaded successfully","success"))}catch(t){console.error("Error downloading directive:",t),this._showNotification("Error downloading directive","error")}}_showNotification(t,e){this.hass.callService("persistent_notification","create",{title:"Direktive.ai",message:t,notification_id:`direktive_${e}`})}_getStatusIcon(t){return"creating"===t.status||"updating"===t.status||"deleting"===t.status?"mdi:loading":t.discovery?"mdi:creation-outline":"success"===t.status?"mdi:check-all":"error"===t.status?"mdi:alert-circle":"mdi:help-circle"}_getStatusClass(t){if(t.discovery)return"status-discovery";switch(t.status){case"success":return"status-success";case"error":return"status-warning";case"creating":return"status-creating";case"updating":return"status-updating";default:return"status-unknown"}}async _loadConversation(t){try{await this.hass.callWS({type:"direktive/get_conversation",directive_id:t})}catch(t){console.error("Error loading conversation:",t),this._showNotification("Error loading conversation","error")}}async _sendMessage(){if(this.selectedDirective&&this.conversationInput.trim()&&!this.isSendingMessage)try{this.isSendingMessage=!0,await this.hass.callWS({type:"direktive/send_conversation_message",directive_id:this.selectedDirective,prompt:this.conversationInput.trim()})}catch(t){console.error("Error sending message:",t),this._showNotification("Error sending message","error")}finally{this.isSendingMessage=!1,this.conversationInput=""}}static get styles(){return r`
      :host {
        display: block;
        padding: 16px;
        max-width: 600px;
        width: 100%;
        --spacing: 12px;
      }
      .content {
        min-width: 500px;
      }
      .directive-list {
        margin-bottom: 20px;
        max-height: 400px;
        overflow-y: auto;
        transition: opacity 0.25s ease, transform 0.25s ease;
      }
      .directive-list.hidden {
        opacity: 0;
        transform: translateX(-20px);
        pointer-events: none;
      }
      .directive-details {
        position: absolute;
        width: 86%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 16px;
        background: var(--mdc-theme-surface);
        opacity: 0;
        transform: translateX(20px);
        transition: opacity 0.25s ease, transform 0.25s ease;
        pointer-events: none;
      }
      .directive-details.visible {
        opacity: 1;
        transform: translateX(0);
        pointer-events: auto;
      }
      .back-button {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        color: var(--primary-text-color);
      }
      .directive-detail-content {
        margin-top: 26px;
      }
      .directive-detail-content.updating .detail-value {
        opacity: 0.5;
      }
      .detail-item {
        margin-bottom: 12px;
      }
      .detail-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
      }
      .chat-title {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-bottom: 15px;
      }
      .detail-value {
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .directive-item {
        display: flex;
        position: relative;
        align-items: center;
        padding: 10px;
        padding-right: 100px;
        border-bottom: 1px solid var(--divider-color);
        cursor: pointer;
      }
      .directive-item:last-child {
        border-bottom: none;
      }
      .directive-content {
        flex-grow: 1;
        margin-right: 10px;
        display: flex;
      }
      .directive-message {
        margin-bottom: 5px;
        max-width: 350px;
        flex-wrap: wrap;
        padding-top: 3px;
      }
      .directive-status-icon {
        margin-right: var(--spacing);
      }
      .directive-actions {
        position: absolute;
        width: 0%;
        right: 0;
        top: 5px;
        display: flex;
        gap: 10px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, var(--mdc-theme-surface) 60%);
        transition: width 0s ease-in-out;
        justify-content: flex-end;
      }
      .directive-actions.expanded {
        width: 100%;
      }
      .status-success {
        color: var(--success-color);
      }
      .status-warning {
        color: var(--warning-color);
      }
      .new-directive {
        display: flex;
        gap: 10px;
        margin-top: 20px;
      }
      .new-directive input {
        flex-grow: 1;
      }
      .new-directive-input {
        padding: var(--spacing);
      }
      .new-directive.hidden {
        opacity: 0;
        pointer-events: none;
      }
      .confirm-delete {
        display: flex;
        gap: 10px;
      }
      .dialog-footer {
        display: flex;
        justify-content: flex-end;
        margin-top: 16px;
      }
      .delete-icon, .download-icon {
        color: var(--secondary-text-color);
      }
      .delete-icon.is-loading, .download-icon.is-loading {
        opacity: 0.5;
      }
      @keyframes spin {
        100% { transform: rotate(360deg); }
      }

      .rotating-icon {
        animation: spin 1s linear infinite;
      }
      .directive-list-subtitle {
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 10px;
        color: var(--secondary-text-color);
      }
      .create-directive-button {
        flex: 0 1 40px;
        margin-left: 20px;
      }
      .message-icon {
        margin-left: 10px;
        color: var(--secondary-text-color);
      }
      .muted {
        color: var(--secondary-text-color);
      }
      .conversation-container {
        margin-top: 20px;
        border-top: 1px solid var(--divider-color);
        padding-top: 16px;
        padding-bottom: 40px;
        width: 110%;
      }

      .message-list {
        /* max-height: 300px;
        overflow-y: auto; */
        margin-bottom: 16px;
      }

      .message {
        margin-bottom: 12px;
        padding: 8px 12px;
        border-radius: 8px;
        max-width: 80%;
      }

      .message.user {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        margin-left: auto;
      }

      .message.assistant {
        background-color: var(--secondary-background-color);
        margin-right: auto;
      }

      .message-time {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      .conversation-input {
        display: flex;
        gap: 8px;
        margin-top: 16px;
      }

      .conversation-input input {
        flex-grow: 1;
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
      }

      .conversation-input button {
        min-width: 80px;
      }

      .conversation-input button:disabled {
        opacity: 0.5;
      }
      .creation-progress-container {
        position: relative;
        height: 20px;
        margin-top: 10px;
      }
      .creation-progress-message.animated, .creation-stage {
        position: absolute;
        width: 100%;
        font-size: 12px;
        color: var(--secondary-text-color);
        font-style: italic;
      }
      .creation-progress-message.old {
        animation: fadeOutUp 0.25s forwards;
      }
      .creation-progress-message.new {
        animation: fadeInDown 0.25s forwards;
      }
      .error-message {
        color: var(--error-color);
        margin-top: 16px;
        font-size: 12px;
        font-weight: 600;
      }
      @keyframes fadeOutUp {
        from {
          opacity: 1;
          transform: translateY(0);
        }
        to {
          opacity: 0;
          transform: translateY(-10px);
        }
      }
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}show(){if(this._isRendered)throw new Error("Already rendered!");this._isRendered=!0;const t=this.getDialogElement();t&&(t.open=!0);const e=document.getElementsByTagName("home-assistant"),i=e.length?e[0].shadowRoot:null;i?i.appendChild(this):document.body.appendChild(this)}onDialogClose(){this._isRendered&&(this.remove(),this._isRendered=!1)}getDialogElement(){return this._isRendered&&this.renderRoot?this.renderRoot.querySelector("ha-dialog"):null}_showDirectiveDetails(t){"creating"!==t.status&&(this.selectedDirective=t.id,this._loadConversation(t.id))}_hideDirectiveDetails(){this.selectedDirective=null}render(){var t;this._isRendered||(this._isRendered=!0);const e=!1,i=this.directives.filter((t=>!1===t.discovery)),s=this.directives.filter((t=>!0===t.discovery&&!1===t.active)),o=this.directives.find((t=>t.id===this.selectedDirective));return console.log("--- DIRECTIVE",null==o?void 0:o.messages),I`
      <ha-dialog
          open
          @closed=${()=>this.onDialogClose()}
          hideActions
        >
          <div class="content">
            <div class="directive-list ${this.selectedDirective?"hidden":""}">
              ${s.length>0?I`
                <div class="directive-list-subtitle">Suggested Directives</div>
                ${s.map((t=>I`
                  <div class="directive-item" @click=${()=>this._showDirectiveDetails(t)}>
                    <div class="directive-content">
                      <div class=${"directive-status-icon "+("downloading"===t.status?"rotating-icon":"")}>
                        <ha-icon
                          icon=${this._getStatusIcon(t)}
                          class=${this._getStatusClass(t)}
                        ></ha-icon>
                      </div>
                      <div class="directive-message">
                        ${t.title}  
                        <ha-icon icon="mdi:chevron-right" class="message-icon"></ha-icon>
                      </div>                    
                    </div>
                    <div class="directive-actions ${this.expandedDirective===t.id?"expanded":""}">
                      ${this.expandedDirective===t.id?I`
                          <div class="confirm-delete">
                            <ha-button @click=${e=>{e.stopPropagation(),this._downloadDirective(t.id)}} ?disabled=${e}>Confirm</ha-button>
                            <ha-button ?disabled=${e}>Cancel</ha-button>
                          </div>
                        `:I`
                          <ha-button @click=${e=>{e.stopPropagation(),this.expandedDirective=t.id}}>
                            <ha-icon icon="mdi:cloud-download-outline" class="download-icon is-loading"></ha-icon>
                          </ha-button>
                        `}
                    </div>
                  </div>
                `))}
              `:I``}
            </div>
            <div class="directive-list ${this.selectedDirective?"hidden":""}">
              <div class="directive-list-subtitle">Your Directives</div>
              ${i.map((t=>I`
                  <div class="directive-item" @click=${()=>this._showDirectiveDetails(t)}>
                    <div class="directive-content">
                    <div class=${"directive-status-icon "+("creating"===t.status||"deleting"===t.status||"updating"===t.status?"rotating-icon":"")}>
                      <ha-icon
                        icon=${this._getStatusIcon(t)}
                        class=${this._getStatusClass(t)}
                      ></ha-icon>
                    </div>
                    <div class="directive-message">
                      ${t.title}
                      <div class="creation-stage">${t.creation_message}</div>
                    </div>                    
                  </div>
                  <div class="directive-actions ${this.expandedDirective===t.id?"expanded":""}">
                    ${this.expandedDirective===t.id?I`
                        <div class="confirm-delete">
                          <ha-button @click=${e=>{e.stopPropagation(),this._deleteDirective(t.id)}} ?disabled=${"deleting"===t.status}>Confirm</ha-button>
                          <ha-button ?disabled=${"deleting"===t.status}>Cancel</ha-button>
                        </div>
                      `:"creating"!==t.status?I`
                          <ha-button @click=${e=>{e.stopPropagation(),this.expandedDirective=t.id}}>
                            <ha-icon icon="mdi:trash-can-outline" class="delete-icon is-loading"></ha-icon>
                          </ha-button>
                        `:I``}
                  </div>
                </div>
              `))}
              ${0===i.length?I`
                <div class="directive-item">
                  <div class="directive-content">
                    <div class="directive-message muted">No active directives</div>
                  </div>
                </div>
              `:I``}
            </div>
            <div class="directive-details ${this.selectedDirective?"visible":""}">
              ${o?I`
                <div class="back-button" @click=${this._hideDirectiveDetails}>
                  <ha-icon icon="mdi:arrow-left"></ha-icon>
                  <span>Back to Directives</span>
                </div>
                <div class=${"directive-detail-content "+("updating"===o.status?"updating":"")}>
                  <div class="detail-item">
                    <div class="detail-label">Automation</div>
                    <div class="detail-value">${o.title}</div>
                  </div>
                  <div class="detail-item">
                    <div class="detail-label">Status</div>
                    <div class="detail-value">${o.discovery?"Suggested - "+(o.active?"Active":"Inactive"):""+(o.active?"Active":"Inactive")}</div>
                  </div>
                  <!-- Make this super small under the title -->
                  <!-- <div class="detail-item">
                    <div class="detail-label">Created At</div>
                    <div class="detail-value">${new Date(o.created_at).toLocaleString()}</div>
                  </div> -->
                  <div class="detail-item">
                    <div class="detail-label">Summary</div>
                    <div class="detail-value">${o.summary}</div>
                  </div>
                  ${o.follow_up?I`
                    <div class="detail-item">
                      <div class="detail-label">Follow Up</div>
                      <div class="detail-value">${o.follow_up}</div>
                    </div>
                  `:""}
                  ${o.review_summary?I`
                    <div class="detail-item">
                      <div class="detail-label">Review Summary</div>
                      <div class="detail-value">${o.review_summary}</div>
                    </div>
                  `:""}

                  <div class="conversation-container">
                    <div class="chat-title">AI Chat</div>
                    <div class="message-list">
                      ${null===(t=o.messages)||void 0===t?void 0:t.map((t=>I`
                        <div class="message ${t.role}">
                          ${"question"===t.content.type||"request"===t.content.type||"waiting"===t.content.type?I`
                            <div>${t.content.answer}</div>
                          `:I`
                            <div>${t.content.user_prompt}</div>
                          `}
                        </div>
                      `))}
                    </div>
                    <div class="conversation-input">
                      <input
                        type="text"
                        .value=${this.conversationInput}
                        @input=${t=>{const e=t.target;this.conversationInput=e.value}}
                        @keydown=${t=>{"Enter"!==t.key||t.shiftKey||(t.preventDefault(),this._sendMessage())}}
                        placeholder="Ask me for changes or clarifications on the directive..."
                        ?disabled=${this.isSendingMessage||"updating"===(null==o?void 0:o.status)}
                      />
                      <ha-button
                        @click=${()=>this._sendMessage()}
                        ?disabled=${this.isSendingMessage||"updating"===(null==o?void 0:o.status)}
                      >
                        ${this.isSendingMessage?I`
                          <ha-icon icon="mdi:loading" class="rotating-icon"></ha-icon>
                        `:"Send"}
                      </ha-button>
                    </div>
                  </div>
                </div>
              `:""}
            </div>
            <div class="new-directive ${this.selectedDirective?"hidden":""}">
              <input
                type="text"
                class="new-directive-input"
                .value=${this.newDirectiveMessage}
                @input=${t=>{const e=t.target;this.newDirectiveMessage=e.value}}
                @keydown=${t=>{"Enter"!==t.key||t.shiftKey||(t.preventDefault(),this._createDirective())}}
                @click=${t=>t.stopPropagation()}
                placeholder="Enter new directive..."
                ?disabled=${e}
              />
              <div class=${"create-directive-button "}>
                ${I`<ha-button @click=${()=>this._createDirective()} ?disabled=${e}>Create</ha-button>`}
              </div>
            </div>
          </div>
        </ha-dialog>
    `}}t([ct()],ut.prototype,"hass",void 0),t([ct()],ut.prototype,"config",void 0),t([ct()],ut.prototype,"directives",void 0),t([ct()],ut.prototype,"selectedDirective",void 0),t([ct()],ut.prototype,"conversationInput",void 0),t([ct()],ut.prototype,"isSendingMessage",void 0),t([ct()],ut.prototype,"expandedDirective",void 0),t([ct()],ut.prototype,"newDirectiveMessage",void 0),customElements.define("direktive-ha-lovelace-dialog",ut),console.info("%c  DIREKTIVE-HA-LOVELACE \n%c  version: 2.0.2  ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"direktive-ha-lovelace",name:"Direktive.ai Lovelace Component",description:"A custom card for managing directives"});class gt extends ot{constructor(){super(...arguments),this.directives=[],this.dialog=null}static async getConfigElement(){return document.createElement("direktive-ha-lovelace-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error("Invalid configuration");this.config=Object.assign(Object.assign({},t),{name:"Direktive.ai Lovelace Component",entity:"sensor.direktive_sensor"})}shouldUpdate(t){return!!this.config&&vt(this,t,!1)}_showWarning(t){return I`
      <hui-warning>${t}</hui-warning>
    `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),I`
      ${e}
    `}_getStatus(){return this.directives.reduce(((t,e)=>(t[e.status]++,t.total++,t)),{total:0,success:0,warning:0})}_openDialog(){this.dialog=new ut,this.dialog.setConfig(this.hass,this.directives),this.dialog.show()}static get styles(){return r`
      :host {
        --spacing: 12px;
      }
      .type-custom-direktive-ha-lovelace {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: var(--spacing);
        display: flex;
        flex-direction: column;
        justify-content: var(--layout-align);
        height: auto;
        cursor: pointer;
      }
      .direktive-ha-lovelace {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      }
      .status-icon {
        margin-right: var(--spacing);
      }
      .status-text {
        min-width: 0;
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .summary {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 16px;
      }
      .status-text-total {
        font-weight: var(--card-primary-font-weight);
        font-size: var(--card-primary-font-size);
        line-height: var(--card-primary-line-height);
        color: var(--primary-text-color);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .status-text-subtitle {
        font-weight: var(--card-secondary-font-weight);
        font-size: var(--card-secondary-font-size);
        line-height: var(--card-secondary-line-height);
        color: var(--secondary-text-color);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .status-success {
        color: var(--success-color);
      }
      .status-warning {
        color: var(--warning-color);
      }
    `}_updateDirectivesFromSensor(){const t=this.hass.states[this.config.entity];console.log("sensor",t),t&&t.attributes.directives&&(this.directives=t.attributes.directives,this.dialog&&this.dialog.setConfig(this.hass,this.directives))}firstUpdated(){this._updateDirectivesFromSensor()}render(){if(this.config.show_warning)return this._showWarning("warning message");if(this.config.show_error)return this._showError("error message");this._updateDirectivesFromSensor();const t=this._getStatus();return I`
      <ha-card
        @click=${()=>this._openDialog()}
        tabindex="0"
      >
        <div class='direktive-ha-lovelace'>
          <div class="status-icon">
            ${t.warning>0?I`<ha-icon icon="mdi:alert-circle" class="status-warning"></ha-icon>`:I`<ha-icon icon="mdi:alpha-d-circle"></ha-icon>`}
          </div>
          <div class="status-text">
            <div class="status-text-total">
              You have a total of ${t.total} directives
            </div>
            <div class="status-text-subtitle">
              ${t.warning>0?I`<i>You have <span>${t.warning}</span> warnings</i>`:I`<i>You have no warnings</i>`}
            </div>
          </div>
        </div>
      </ha-card>
    `}}t([ct()],gt.prototype,"hass",void 0),t([ct()],gt.prototype,"config",void 0),t([ct()],gt.prototype,"directives",void 0),customElements.define("direktive-ha-lovelace",gt);export{gt as DirektiveComponent};
