(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,n){t.exports=n("zUnb")},zUnb:function(t,e,n){"use strict";n.r(e);var r=function(t){return t[t.Emulated=0]="Emulated",t[t.Native=1]="Native",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}({});"undefined"!=typeof window&&window,"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,"undefined"!=typeof global&&global;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class s{get(t){return""}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class o{constructor({defaultEncapsulation:t=r.Emulated,useJit:e=!0,jitDevMode:n=!1,missingTranslation:s=null,preserveWhitespaces:o,strictInjectionParameters:i}={}){var l;this.defaultEncapsulation=t,this.useJit=!!e,this.jitDevMode=!!n,this.missingTranslation=s,this.preserveWhitespaces=function(t,e=!1){return null===t?e:t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(void 0===(l=o)?null:l),this.strictInjectionParameters=!0===i
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}function i(t){return"function"==typeof t}let l=!1;const a={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){const t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else l&&console.log("RxJS: Back to a better error behavior. Thank you. <3");l=t},get useDeprecatedSynchronousErrorHandling(){return l}};function u(t){setTimeout(()=>{throw t},0)}const c={closed:!0,next(t){},error(t){if(a.useDeprecatedSynchronousErrorHandling)throw t;u(t)},complete(){}},h=(()=>Array.isArray||(t=>t&&"number"==typeof t.length))();function d(t){return null!==t&&"object"==typeof t}const f=(()=>{function t(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t})();let p=(()=>{class t{constructor(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}unsubscribe(){let e;if(this.closed)return;let{_parentOrParents:n,_unsubscribe:r,_subscriptions:s}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(let t=0;t<n.length;++t)n[t].remove(this);if(i(r))try{r.call(this)}catch(o){e=o instanceof f?g(o.errors):[o]}if(h(s)){let t=-1,n=s.length;for(;++t<n;){const n=s[t];if(d(n))try{n.unsubscribe()}catch(o){e=e||[],o instanceof f?e=e.concat(g(o.errors)):e.push(o)}}}if(e)throw new f(e)}add(e){let n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){const e=n;n=new t,n._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof t){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const s=this._subscriptions;return null===s?this._subscriptions=[n]:s.push(n),n}remove(t){const e=this._subscriptions;if(e){const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}}return t.EMPTY=function(t){return t.closed=!0,t}(new t),t})();function g(t){return t.reduce((t,e)=>t.concat(e instanceof f?e.errors:e),[])}const m=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())();class _ extends p{constructor(t,e,n){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=c;break;case 1:if(!t){this.destination=c;break}if("object"==typeof t){t instanceof _?(this.syncErrorThrowable=t.syncErrorThrowable,this.destination=t,t.add(this)):(this.syncErrorThrowable=!0,this.destination=new y(this,t));break}default:this.syncErrorThrowable=!0,this.destination=new y(this,t,e,n)}}[m](){return this}static create(t,e,n){const r=new _(t,e,n);return r.syncErrorThrowable=!1,r}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(t){this.destination.next(t)}_error(t){this.destination.error(t),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:t}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this}}class y extends _{constructor(t,e,n,r){let s;super(),this._parentSubscriber=t;let o=this;i(e)?s=e:e&&(s=e.next,n=e.error,r=e.complete,e!==c&&(o=Object.create(e),i(o.unsubscribe)&&this.add(o.unsubscribe.bind(o)),o.unsubscribe=this.unsubscribe.bind(this))),this._context=o,this._next=s,this._error=n,this._complete=r}next(t){if(!this.isStopped&&this._next){const{_parentSubscriber:e}=this;a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}}error(t){if(!this.isStopped){const{_parentSubscriber:e}=this,{useDeprecatedSynchronousErrorHandling:n}=a;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):u(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;u(t)}}}complete(){if(!this.isStopped){const{_parentSubscriber:t}=this;if(this._complete){const e=()=>this._complete.call(this._context);a.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(t,e){try{t.call(this._context,e)}catch(n){if(this.unsubscribe(),a.useDeprecatedSynchronousErrorHandling)throw n;u(n)}}__tryOrSetError(t,e,n){if(!a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(r){return a.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(u(r),!0)}return!1}_unsubscribe(){const{_parentSubscriber:t}=this;this._context=null,this._parentSubscriber=null,t.unsubscribe()}}const v=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")();function b(t){return t}let w=(()=>{class t{constructor(t){this._isScalar=!1,t&&(this._subscribe=t)}lift(e){const n=new t;return n.source=this,n.operator=e,n}subscribe(t,e,n){const{operator:r}=this,s=function(t,e,n){if(t){if(t instanceof _)return t;if(t[m])return t[m]()}return t||e||n?new _(t,e,n):new _(c)}(t,e,n);if(s.add(r?r.call(s,this.source):this.source||a.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),a.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s}_trySubscribe(t){try{return this._subscribe(t)}catch(e){a.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),function(t){for(;t;){const{closed:e,destination:n,isStopped:r}=t;if(e||r)return!1;t=n&&n instanceof _?n:null}return!0}(t)?t.error(e):console.warn(e)}}forEach(t,e){return new(e=C(e))((e,n)=>{let r;r=this.subscribe(e=>{try{t(e)}catch(s){n(s),r&&r.unsubscribe()}},n,e)})}_subscribe(t){const{source:e}=this;return e&&e.subscribe(t)}[v](){return this}pipe(...t){return 0===t.length?this:(0===(e=t).length?b:1===e.length?e[0]:function(t){return e.reduce((t,e)=>e(t),t)})(this);var e}toPromise(t){return new(t=C(t))((t,e)=>{let n;this.subscribe(t=>n=t,t=>e(t),()=>t(n))})}}return t.create=e=>new t(e),t})();function C(t){if(t||(t=a.Promise||Promise),!t)throw new Error("no Promise impl found");return t}const E=(()=>{function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t})();class x extends p{constructor(t,e){super(),this.subject=t,this.subscriber=e,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const t=this.subject,e=t.observers;if(this.subject=null,!e||0===e.length||t.isStopped||t.closed)return;const n=e.indexOf(this.subscriber);-1!==n&&e.splice(n,1)}}class A extends _{constructor(t){super(t),this.destination=t}}let k=(()=>{class t extends w{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[m](){return new A(this)}lift(t){const e=new S(this,this);return e.operator=t,e}next(t){if(this.closed)throw new E;if(!this.isStopped){const{observers:e}=this,n=e.length,r=e.slice();for(let s=0;s<n;s++)r[s].next(t)}}error(t){if(this.closed)throw new E;this.hasError=!0,this.thrownError=t,this.isStopped=!0;const{observers:e}=this,n=e.length,r=e.slice();for(let s=0;s<n;s++)r[s].error(t);this.observers.length=0}complete(){if(this.closed)throw new E;this.isStopped=!0;const{observers:t}=this,e=t.length,n=t.slice();for(let r=0;r<e;r++)n[r].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(t){if(this.closed)throw new E;return super._trySubscribe(t)}_subscribe(t){if(this.closed)throw new E;return this.hasError?(t.error(this.thrownError),p.EMPTY):this.isStopped?(t.complete(),p.EMPTY):(this.observers.push(t),new x(this,t))}asObservable(){const t=new w;return t.source=this,t}}return t.create=(t,e)=>new S(t,e),t})();class S extends k{constructor(t,e){super(),this.destination=t,this.source=e}next(t){const{destination:e}=this;e&&e.next&&e.next(t)}error(t){const{destination:e}=this;e&&e.error&&this.destination.error(t)}complete(){const{destination:t}=this;t&&t.complete&&this.destination.complete()}_subscribe(t){const{source:e}=this;return e?this.source.subscribe(t):p.EMPTY}}class T extends _{constructor(t,e,n){super(),this.parent=t,this.outerValue=e,this.outerIndex=n,this.index=0}_next(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)}_error(t){this.parent.notifyError(t,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}const I=t=>e=>{for(let n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()};function O(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}const V=O(),D=t=>t&&"number"==typeof t.length&&"function"!=typeof t;function N(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}const P=t=>{if(t&&"function"==typeof t[v])return r=t,t=>{const e=r[v]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(D(t))return I(t);if(N(t))return n=t,t=>(n.then(e=>{t.closed||(t.next(e),t.complete())},e=>t.error(e)).then(null,u),t);if(t&&"function"==typeof t[V])return e=t,t=>{const n=e[V]();for(;;){const e=n.next();if(e.done){t.complete();break}if(t.next(e.value),t.closed)break}return"function"==typeof n.return&&t.add(()=>{n.return&&n.return()}),t};{const e=d(t)?"an invalid object":`'${t}'`;throw new TypeError(`You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)}var e,n,r};class M extends _{notifyNext(t,e,n,r,s){this.destination.next(e)}notifyError(t,e){this.destination.error(t)}notifyComplete(t){this.destination.complete()}}function j(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new R(t,e))}}class R{constructor(t,e){this.project=t,this.thisArg=e}call(t,e){return e.subscribe(new F(t,this.project,this.thisArg))}}class F extends _{constructor(t,e,n){super(t),this.project=e,this.count=0,this.thisArg=n||this}_next(t){let e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}function H(t,e){return new w(n=>{const r=new p;let s=0;return r.add(e.schedule((function(){s!==t.length?(n.next(t[s++]),n.closed||r.add(this.schedule())):n.complete()}))),r})}function L(t,e){return e?function(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[v]}(t))return function(t,e){return new w(n=>{const r=new p;return r.add(e.schedule(()=>{const s=t[v]();r.add(s.subscribe({next(t){r.add(e.schedule(()=>n.next(t)))},error(t){r.add(e.schedule(()=>n.error(t)))},complete(){r.add(e.schedule(()=>n.complete()))}}))})),r})}(t,e);if(N(t))return function(t,e){return new w(n=>{const r=new p;return r.add(e.schedule(()=>t.then(t=>{r.add(e.schedule(()=>{n.next(t),r.add(e.schedule(()=>n.complete()))}))},t=>{r.add(e.schedule(()=>n.error(t)))}))),r})}(t,e);if(D(t))return H(t,e);if(function(t){return t&&"function"==typeof t[V]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new w(n=>{const r=new p;let s;return r.add(()=>{s&&"function"==typeof s.return&&s.return()}),r.add(e.schedule(()=>{s=t[V](),r.add(e.schedule((function(){if(n.closed)return;let t,e;try{const n=s.next();t=n.value,e=n.done}catch(r){return void n.error(r)}e?n.complete():(n.next(t),this.schedule())})))})),r})}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}(t,e):t instanceof w?t:new w(P(t))}class B{constructor(t,e=Number.POSITIVE_INFINITY){this.project=t,this.concurrent=e}call(t,e){return e.subscribe(new U(t,this.project,this.concurrent))}}class U extends M{constructor(t,e,n=Number.POSITIVE_INFINITY){super(t),this.project=e,this.concurrent=n,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)}_tryNext(t){let e;const n=this.index++;try{e=this.project(t,n)}catch(r){return void this.destination.error(r)}this.active++,this._innerSub(e,t,n)}_innerSub(t,e,n){const r=new T(this,e,n),s=this.destination;s.add(r);const o=function(t,e,n,r,s=new T(t,n,r)){if(!s.closed)return e instanceof w?e.subscribe(s):P(e)(s)}(this,t,void 0,void 0,r);o!==r&&s.add(o)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(t,e,n,r,s){this.destination.next(e)}notifyComplete(t){const e=this.buffer;this.remove(t),this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}function Z(){return function(t){return t.lift(new G(t))}}class G{constructor(t){this.connectable=t}call(t,e){const{connectable:n}=this;n._refCount++;const r=new $(t,n),s=e.subscribe(r);return r.closed||(r.connection=n.connect()),s}}class $ extends _{constructor(t,e){super(t),this.connectable=e}_unsubscribe(){const{connectable:t}=this;if(!t)return void(this.connection=null);this.connectable=null;const e=t._refCount;if(e<=0)return void(this.connection=null);if(t._refCount=e-1,e>1)return void(this.connection=null);const{connection:n}=this,r=t._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}class z extends w{constructor(t,e){super(),this.source=t,this.subjectFactory=e,this._refCount=0,this._isComplete=!1}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let t=this._connection;return t||(this._isComplete=!1,t=this._connection=new p,t.add(this.source.subscribe(new q(this.getSubject(),this))),t.closed&&(this._connection=null,t=p.EMPTY)),t}refCount(){return Z()(this)}}const W=(()=>{const t=z.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:t._subscribe},_isComplete:{value:t._isComplete,writable:!0},getSubject:{value:t.getSubject},connect:{value:t.connect},refCount:{value:t.refCount}}})();class q extends A{constructor(t,e){super(t),this.connectable=e}_error(t){this._unsubscribe(),super._error(t)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const t=this.connectable;if(t){this.connectable=null;const e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}}}function Q(){return new k}
/**
 * @license Angular v10.0.14
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function J(t){return{toString:t}.toString()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function K(t,e,n){return J(()=>{const r=function(t){return function(...e){if(t){const n=t(...e);for(const t in n)this[t]=n[t]}}}(e);function s(...t){if(this instanceof s)return r.apply(this,t),this;const e=new s(...t);return n.annotation=e,n;function n(t,n,r){const s=t.hasOwnProperty("__parameters__")?t.__parameters__:Object.defineProperty(t,"__parameters__",{value:[]}).__parameters__;for(;s.length<=r;)s.push(null);return(s[r]=s[r]||[]).push(e),t}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=t,s.annotationCls=s,s})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Y=K("Inject",t=>({token:t})),X=K("Optional"),tt=K("Self"),et=K("SkipSelf");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var nt=function(t){return t[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function rt(t){for(let e in t)if(t[e]===rt)return e;throw Error("Could not find renamed property on target object.")}function st(t,e){for(const n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(t[n]=e[n])}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ot(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function it(t){return{factory:t.factory,providers:t.providers||[],imports:t.imports||[]}}function lt(t){return at(t,t[ct])||at(t,t[ft])}function at(t,e){return e&&e.token===t?e:null}function ut(t){return t&&(t.hasOwnProperty(ht)||t.hasOwnProperty(pt))?t[ht]:null}const ct=rt({\u0275prov:rt}),ht=rt({\u0275inj:rt}),dt=rt({\u0275provFallback:rt}),ft=rt({ngInjectableDef:rt}),pt=rt({ngInjectorDef:rt});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function gt(t){if("string"==typeof t)return t;if(Array.isArray(t))return"["+t.map(gt).join(", ")+"]";if(null==t)return""+t;if(t.overriddenName)return""+t.overriddenName;if(t.name)return""+t.name;const e=t.toString();if(null==e)return""+e;const n=e.indexOf("\n");return-1===n?e:e.substring(0,n)}function mt(t,e){return null==t||""===t?null===e?"":e:null==e||""===e?t:t+" "+e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const _t=rt({__forward_ref__:rt});function yt(t){return t.__forward_ref__=yt,t.toString=function(){return gt(this())},t}function vt(t){return bt(t)?t():t}function bt(t){return"function"==typeof t&&t.hasOwnProperty(_t)&&t.__forward_ref__===yt}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const wt="undefined"!=typeof globalThis&&globalThis,Ct="undefined"!=typeof window&&window,Et="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,xt="undefined"!=typeof global&&global,At=wt||xt||Ct||Et,kt=rt({\u0275cmp:rt}),St=rt({\u0275dir:rt}),Tt=rt({\u0275pipe:rt}),It=rt({\u0275mod:rt}),Ot=rt({\u0275loc:rt}),Vt=rt({\u0275fac:rt}),Dt=rt({__NG_ELEMENT_ID__:rt});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Nt{constructor(t,e){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof e?this.__NG_ELEMENT_ID__=e:void 0!==e&&(this.\u0275prov=ot({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}toString(){return"InjectionToken "+this._desc}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Pt=new Nt("INJECTOR",-1),Mt={},jt=/\n/gm,Rt=rt({provide:String,useValue:rt});let Ft,Ht=void 0;function Lt(t){const e=Ht;return Ht=t,e}function Bt(t){const e=Ft;return Ft=t,e}function Ut(t,e=nt.Default){if(void 0===Ht)throw new Error("inject() must be called from an injection context");return null===Ht?Gt(t,void 0,e):Ht.get(t,e&nt.Optional?null:void 0,e)}function Zt(t,e=nt.Default){return(Ft||Ut)(vt(t),e)}function Gt(t,e,n){const r=lt(t);if(r&&"root"==r.providedIn)return void 0===r.value?r.value=r.factory():r.value;if(n&nt.Optional)return null;if(void 0!==e)return e;throw new Error(`Injector: NOT_FOUND [${gt(t)}]`)}function $t(t){const e=[];for(let n=0;n<t.length;n++){const r=vt(t[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let t=void 0,n=nt.Default;for(let e=0;e<r.length;e++){const s=r[e];s instanceof X||"Optional"===s.ngMetadataName||s===X?n|=nt.Optional:s instanceof et||"SkipSelf"===s.ngMetadataName||s===et?n|=nt.SkipSelf:s instanceof tt||"Self"===s.ngMetadataName||s===tt?n|=nt.Self:t=s instanceof Y||s===Y?s.token:s}e.push(Zt(t,n))}else e.push(Zt(r))}return e}class zt{get(t,e=Mt){if(e===Mt){const e=new Error(`NullInjectorError: No provider for ${gt(t)}!`);throw e.name="NullInjectorError",e}return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Wt{}function qt(t,e){t.forEach(t=>Array.isArray(t)?qt(t,e):e(t))}function Qt(t,e,n){let r=Kt(t,e);return r>=0?t[1|r]=n:(r=~r,function(t,e,n,r){let s=t.length;if(s==e)t.push(n,r);else if(1===s)t.push(r,t[0]),t[0]=n;else{for(s--,t.push(t[s-1],t[s]);s>e;)t[s]=t[s-2],s--;t[e]=n,t[e+1]=r}}(t,r,e,n)),r}function Jt(t,e){const n=Kt(t,e);if(n>=0)return t[1|n]}function Kt(t,e){return function(t,e,n){let r=0,s=t.length>>1;for(;s!==r;){const n=r+(s-r>>1),o=t[n<<1];if(e===o)return n<<1;o>e?s=n:r=n+1}return~(s<<1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,e)}var Yt=function(t){return t[t.OnPush=0]="OnPush",t[t.Default=1]="Default",t}({}),Xt=function(t){return t[t.Emulated=0]="Emulated",t[t.Native=1]="Native",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const te={},ee=[];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ne=0;function re(t){return J(()=>{const e={},n={type:t.type,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===Yt.OnPush,directiveDefs:null,pipeDefs:null,selectors:t.selectors||ee,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||Xt.Emulated,id:"c",styles:t.styles||ee,_:null,setInput:null,schemas:t.schemas||null,tView:null},r=t.directives,s=t.features,o=t.pipes;return n.id+=ne++,n.inputs=ae(t.inputs,e),n.outputs=ae(t.outputs),s&&s.forEach(t=>t(n)),n.directiveDefs=r?()=>("function"==typeof r?r():r).map(se):null,n.pipeDefs=o?()=>("function"==typeof o?o():o).map(oe):null,n})}function se(t){return ce(t)||function(t){return t[St]||null}(t)}function oe(t){return function(t){return t[Tt]||null}(t)}const ie={};function le(t){const e={type:t.type,bootstrap:t.bootstrap||ee,declarations:t.declarations||ee,imports:t.imports||ee,exports:t.exports||ee,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null};return null!=t.id&&J(()=>{ie[t.id]=t.type}),e}function ae(t,e){if(null==t)return te;const n={};for(const r in t)if(t.hasOwnProperty(r)){let s=t[r],o=s;Array.isArray(s)&&(o=s[1],s=s[0]),n[s]=r,e&&(e[s]=o)}return n}const ue=re;function ce(t){return t[kt]||null}function he(t,e){return t.hasOwnProperty(Vt)?t[Vt]:null}function de(t,e){const n=t[It]||null;if(!n&&!0===e)throw new Error(`Type ${gt(t)} does not have '\u0275mod' property.`);return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function fe(t){return Array.isArray(t)&&"object"==typeof t[1]}function pe(t){return Array.isArray(t)&&!0===t[1]}function ge(t){return 0!=(8&t.flags)}function me(t){return 2==(2&t.flags)}function _e(t){return 1==(1&t.flags)}function ye(t){return null!==t.template}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ve{constructor(t,e,n){this.previousValue=t,this.currentValue=e,this.firstChange=n}isFirstChange(){return this.firstChange}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function be(){return we}function we(t){return t.type.prototype.ngOnChanges&&(t.setInput=Ee),Ce}function Ce(){const t=xe(this),e=null==t?void 0:t.current;if(e){const n=t.previous;if(n===te)t.previous=e;else for(let t in e)n[t]=e[t];t.current=null,this.ngOnChanges(e)}}function Ee(t,e,n,r){const s=xe(t)||function(t,e){return t.__ngSimpleChanges__=e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,{previous:te,current:null}),o=s.current||(s.current={}),i=s.previous,l=this.declaredInputs[n],a=i[l];o[l]=new ve(a&&a.currentValue,e,i===te),t[r]=e}function xe(t){return t.__ngSimpleChanges__||null}be.ngInherit=!0;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ae=void 0;function ke(t){return!!t.listen}const Se={createRenderer:(t,e)=>void 0!==Ae?Ae:"undefined"!=typeof document?document:void 0};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Te(t){for(;Array.isArray(t);)t=t[0];return t}function Ie(t,e){return Te(e[t+20])}function Oe(t,e){return Te(e[t.index])}function Ve(t,e){return t.data[e+20]}function De(t,e){const n=e[t];return fe(n)?n:n[0]}function Ne(t){const e=function(t){return t.__ngContext__||null}(t);return e?Array.isArray(e)?e:e.lView:null}function Pe(t){return 128==(128&t[2])}function Me(t,e){return null===t||null==e?null:t[e]}function je(t){t[18]=0}function Re(t,e){t[5]+=e;let n=t,r=t[3];for(;null!==r&&(1===e&&1===n[5]||-1===e&&0===n[5]);)r[5]+=e,n=r,r=r[3]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Fe={lFrame:tn(null),bindingsEnabled:!0,checkNoChangesMode:!1};function He(){return Fe.bindingsEnabled}function Le(){return Fe.lFrame.lView}function Be(){return Fe.lFrame.tView}function Ue(){return Fe.lFrame.previousOrParentTNode}function Ze(t,e){Fe.lFrame.previousOrParentTNode=t,Fe.lFrame.isParent=e}function Ge(){return Fe.lFrame.isParent}function $e(){return Fe.checkNoChangesMode}function ze(t){Fe.checkNoChangesMode=t}function We(){return Fe.lFrame.bindingIndex++}function qe(t,e){const n=Fe.lFrame;n.bindingIndex=n.bindingRootIndex=t,Qe(e)}function Qe(t){Fe.lFrame.currentDirectiveIndex=t}function Je(t){Fe.lFrame.currentQueryIndex=t}function Ke(t,e){const n=Xe();Fe.lFrame=n,n.previousOrParentTNode=e,n.lView=t}function Ye(t,e){const n=Xe(),r=t[1];Fe.lFrame=n,n.previousOrParentTNode=e,n.lView=t,n.tView=r,n.contextLView=t,n.bindingIndex=r.bindingStartIndex}function Xe(){const t=Fe.lFrame,e=null===t?null:t.child;return null===e?tn(t):e}function tn(t){const e={previousOrParentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:0,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null};return null!==t&&(t.child=e),e}function en(){const t=Fe.lFrame;return Fe.lFrame=t.parent,t.previousOrParentTNode=null,t.lView=null,t}const nn=en;function rn(){const t=en();t.isParent=!0,t.tView=null,t.selectedIndex=0,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function sn(){return Fe.lFrame.selectedIndex}function on(t){Fe.lFrame.selectedIndex=t}function ln(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){const e=t.data[n].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:s,ngAfterViewInit:o,ngAfterViewChecked:i,ngOnDestroy:l}=e;r&&(t.contentHooks||(t.contentHooks=[])).push(-n,r),s&&((t.contentHooks||(t.contentHooks=[])).push(n,s),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(n,s)),o&&(t.viewHooks||(t.viewHooks=[])).push(-n,o),i&&((t.viewHooks||(t.viewHooks=[])).push(n,i),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(n,i)),null!=l&&(t.destroyHooks||(t.destroyHooks=[])).push(n,l)}}function an(t,e,n){hn(t,e,3,n)}function un(t,e,n,r){(3&t[2])===n&&hn(t,e,n,r)}function cn(t,e){let n=t[2];(3&n)===e&&(n&=2047,n+=1,t[2]=n)}function hn(t,e,n,r){const s=null!=r?r:-1;let o=0;for(let i=void 0!==r?65535&t[18]:0;i<e.length;i++)if("number"==typeof e[i+1]){if(o=e[i],null!=r&&o>=r)break}else e[i]<0&&(t[18]+=65536),(o<s||-1==s)&&(dn(t,n,e,i),t[18]=(4294901760&t[18])+i+2),i++}function dn(t,e,n,r){const s=n[r]<0,o=n[r+1],i=t[s?-n[r]:n[r]];s?t[2]>>11<t[18]>>16&&(3&t[2])===e&&(t[2]+=2048,o.call(i)):o.call(i)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class fn{constructor(t,e,n){this.factory=t,this.resolving=!1,this.canSeeViewProviders=e,this.injectImpl=n}}function pn(t,e,n){const r=ke(t);let s=0;for(;s<n.length;){const o=n[s];if("number"==typeof o){if(0!==o)break;s++;const i=n[s++],l=n[s++],a=n[s++];r?t.setAttribute(e,l,a,i):e.setAttributeNS(i,l,a)}else{const i=o,l=n[++s];gn(i)?r&&t.setProperty(e,i,l):r?t.setAttribute(e,i,l):e.setAttribute(i,l),s++}}return s}function gn(t){return 64===t.charCodeAt(0)}function mn(t,e){if(null===e||0===e.length);else if(null===t||0===t.length)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){const s=e[r];"number"==typeof s?n=s:0===n||_n(t,n,s,null,-1===n||2===n?e[++r]:null)}}return t}function _n(t,e,n,r,s){let o=0,i=t.length;if(-1===e)i=-1;else for(;o<t.length;){const n=t[o++];if("number"==typeof n){if(n===e){i=-1;break}if(n>e){i=o-1;break}}}for(;o<t.length;){const e=t[o];if("number"==typeof e)break;if(e===n){if(null===r)return void(null!==s&&(t[o+1]=s));if(r===t[o+1])return void(t[o+2]=s)}o++,null!==r&&o++,null!==s&&o++}-1!==i&&(t.splice(i,0,e),o=i+1),t.splice(o++,0,n),null!==r&&t.splice(o++,0,r),null!==s&&t.splice(o++,0,s)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function yn(t){return 32767&t}function vn(t,e){let n=t>>16,r=e;for(;n>0;)r=r[15],n--;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function bn(t){return"string"==typeof t?t:null==t?"":""+t}function wn(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():bn(t)}const Cn=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(At))();function En(t){return t instanceof Function?t():t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let xn=!0;function An(t){const e=xn;return xn=t,e}let kn=0;function Sn(t,e){const n=In(t,e);if(-1!==n)return n;const r=e[1];r.firstCreatePass&&(t.injectorIndex=e.length,Tn(r.data,t),Tn(e,null),Tn(r.blueprint,null));const s=On(t,e),o=t.injectorIndex;if(-1!==s){const t=yn(s),n=vn(s,e),r=n[1].data;for(let s=0;s<8;s++)e[o+s]=n[t+s]|r[t+s]}return e[o+8]=s,o}function Tn(t,e){t.push(0,0,0,0,0,0,0,0,e)}function In(t,e){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null==e[t.injectorIndex+8]?-1:t.injectorIndex}function On(t,e){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let n=e[6],r=1;for(;n&&-1===n.injectorIndex;)n=(e=e[15])?e[6]:null,r++;return n?n.injectorIndex|r<<16:-1}function Vn(t,e,n){!function(t,e,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Dt)&&(r=n[Dt]),null==r&&(r=n[Dt]=kn++);const s=255&r,o=1<<s,i=64&s,l=32&s,a=e.data;128&s?i?l?a[t+7]|=o:a[t+6]|=o:l?a[t+5]|=o:a[t+4]|=o:i?l?a[t+3]|=o:a[t+2]|=o:l?a[t+1]|=o:a[t]|=o}(t,e,n)}function Dn(t,e,n,r=nt.Default,s){if(null!==t){const s=function(t){if("string"==typeof t)return t.charCodeAt(0)||0;const e=t.hasOwnProperty(Dt)?t[Dt]:void 0;return"number"==typeof e&&e>0?255&e:e}(n);if("function"==typeof s){Ke(e,t);try{const t=s();if(null!=t||r&nt.Optional)return t;throw new Error(`No provider for ${wn(n)}!`)}finally{nn()}}else if("number"==typeof s){if(-1===s)return new Fn(t,e);let o=null,i=In(t,e),l=-1,a=r&nt.Host?e[16][6]:null;for((-1===i||r&nt.SkipSelf)&&(l=-1===i?On(t,e):e[i+8],Rn(r,!1)?(o=e[1],i=yn(l),e=vn(l,e)):i=-1);-1!==i;){l=e[i+8];const t=e[1];if(jn(s,i,t.data)){const t=Pn(i,e,n,o,r,a);if(t!==Nn)return t}Rn(r,e[1].data[i+8]===a)&&jn(s,i,e)?(o=t,i=yn(l),e=vn(l,e)):i=-1}}}if(r&nt.Optional&&void 0===s&&(s=null),0==(r&(nt.Self|nt.Host))){const t=e[9],o=Bt(void 0);try{return t?t.get(n,s,r&nt.Optional):Gt(n,s,r&nt.Optional)}finally{Bt(o)}}if(r&nt.Optional)return s;throw new Error(`NodeInjector: NOT_FOUND [${wn(n)}]`)}const Nn={};function Pn(t,e,n,r,s,o){const i=e[1],l=i.data[t+8],a=function(t,e,n,r,s){const o=t.providerIndexes,i=e.data,l=1048575&o,a=t.directiveStart,u=o>>20,c=s?l+u:t.directiveEnd;for(let h=r?l:l+u;h<c;h++){const t=i[h];if(h<a&&n===t||h>=a&&t.type===n)return h}if(s){const t=i[a];if(t&&ye(t)&&t.type===n)return a}return null}(l,i,n,null==r?me(l)&&xn:r!=i&&3===l.type,s&nt.Host&&o===l);return null!==a?Mn(e,i,a,l):Nn}function Mn(t,e,n,r){let s=t[n];const o=e.data;if(s instanceof fn){const i=s;if(i.resolving)throw new Error("Circular dep for "+wn(o[n]));const l=An(i.canSeeViewProviders);let a;i.resolving=!0,i.injectImpl&&(a=Bt(i.injectImpl)),Ke(t,r);try{s=t[n]=i.factory(void 0,o,t,r),e.firstCreatePass&&n>=r.directiveStart&&
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n){const{ngOnChanges:r,ngOnInit:s,ngDoCheck:o}=e.type.prototype;if(r){const r=we(e);(n.preOrderHooks||(n.preOrderHooks=[])).push(t,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,r)}s&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-t,s),o&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t,o),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,o))}(n,o[n],e)}finally{i.injectImpl&&Bt(a),An(l),i.resolving=!1,nn()}}return s}function jn(t,e,n){const r=64&t,s=32&t;let o;return o=128&t?r?s?n[e+7]:n[e+6]:s?n[e+5]:n[e+4]:r?s?n[e+3]:n[e+2]:s?n[e+1]:n[e],!!(o&1<<t)}function Rn(t,e){return!(t&nt.Self||t&nt.Host&&e)}class Fn{constructor(t,e){this._tNode=t,this._lView=e}get(t,e){return Dn(this._tNode,this._lView,t,void 0,e)}}function Hn(t){const e=t;if(bt(t))return()=>{const t=Hn(vt(e));return t?t():null};let n=he(e);if(null===n){const t=ut(e);n=t&&t.factory}return n||null}function Ln(t){return J(()=>{const e=t.prototype.constructor,n=e[Vt]||Hn(e),r=Object.prototype;let s=Object.getPrototypeOf(t.prototype).constructor;for(;s&&s!==r;){const t=s[Vt]||Hn(s);if(t&&t!==n)return t;s=Object.getPrototypeOf(s)}return t=>new t})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Bn(t){return t.ngDebugContext}function Un(t){return t.ngOriginalError}function Zn(t,...e){t.error(...e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Gn{constructor(){this._console=console}handleError(t){const e=this._findOriginalError(t),n=this._findContext(t),r=function(t){return t.ngErrorLogger||Zn}(t);r(this._console,"ERROR",t),e&&r(this._console,"ORIGINAL ERROR",e),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(t){return t?Bn(t)?Bn(t):this._findContext(Un(t)):null}_findOriginalError(t){let e=Un(t);for(;e&&Un(e);)e=Un(e);return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let $n=!1;function zn(){return $n=!0,!0}function Wn(t,e){t.__ngContext__=e}function qn(t){throw new Error("Multiple components match node with tagname "+t.tagName)}function Qn(){throw new Error("Cannot mix multi providers and regular providers")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Jn(t,e,n){let r=t.length;for(;;){const s=t.indexOf(e,n);if(-1===s)return s;if(0===s||t.charCodeAt(s-1)<=32){const n=e.length;if(s+n===r||t.charCodeAt(s+n)<=32)return s}n=s+1}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Kn(t,e,n){let r=0;for(;r<t.length;){let s=t[r++];if(n&&"class"===s){if(s=t[r],-1!==Jn(s.toLowerCase(),e,0))return!0}else if(1===s){for(;r<t.length&&"string"==typeof(s=t[r++]);)if(s.toLowerCase()===e)return!0;return!1}}return!1}function Yn(t){return 0===t.type&&"ng-template"!==t.tagName}function Xn(t,e,n){return e===(0!==t.type||n?t.tagName:"ng-template")}function tr(t,e,n){let r=4;const s=t.attrs||[],o=function(t){for(let n=0;n<t.length;n++)if(3===(e=t[n])||4===e||6===e)return n;var e;return t.length}(s);let i=!1;for(let l=0;l<e.length;l++){const a=e[l];if("number"!=typeof a){if(!i)if(4&r){if(r=2|1&r,""!==a&&!Xn(t,a,n)||""===a&&1===e.length){if(er(r))return!1;i=!0}}else{const u=8&r?a:e[++l];if(8&r&&null!==t.attrs){if(!Kn(t.attrs,u,n)){if(er(r))return!1;i=!0}continue}const c=nr(8&r?"class":a,s,Yn(t),n);if(-1===c){if(er(r))return!1;i=!0;continue}if(""!==u){let t;t=c>o?"":s[c+1].toLowerCase();const e=8&r?t:null;if(e&&-1!==Jn(e,u,0)||2&r&&u!==t){if(er(r))return!1;i=!0}}}}else{if(!i&&!er(r)&&!er(a))return!1;if(i&&er(a))continue;i=!1,r=a|1&r}}return er(r)||i}function er(t){return 0==(1&t)}function nr(t,e,n,r){if(null===e)return-1;let s=0;if(r||!n){let n=!1;for(;s<e.length;){const r=e[s];if(r===t)return s;if(3===r||6===r)n=!0;else{if(1===r||2===r){let t=e[++s];for(;"string"==typeof t;)t=e[++s];continue}if(4===r)break;if(0===r){s+=4;continue}}s+=n?1:2}return-1}return function(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){const r=t[n];if("number"==typeof r)return-1;if(r===e)return n;n++}return-1}(e,t)}function rr(t,e,n=!1){for(let r=0;r<e.length;r++)if(tr(t,e[r],n))return!0;return!1}function sr(t,e){return t?":not("+e.trim()+")":e}function or(t){let e=t[0],n=1,r=2,s="",o=!1;for(;n<t.length;){let i=t[n];if("string"==typeof i)if(2&r){const e=t[++n];s+="["+i+(e.length>0?'="'+e+'"':"")+"]"}else 8&r?s+="."+i:4&r&&(s+=" "+i);else""===s||er(i)||(e+=sr(o,s),s=""),r=i,o=o||!er(r);n++}return""!==s&&(e+=sr(o,s)),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ir={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function lr(t){const e=t[3];return pe(e)?e[3]:e}function ar(t){return cr(t[13])}function ur(t){return cr(t[4])}function cr(t){for(;null!==t&&!pe(t);)t=t[4];return t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function hr(t){dr(Be(),Le(),sn()+t,$e())}function dr(t,e,n,r){if(!r)if(3==(3&e[2])){const r=t.preOrderCheckHooks;null!==r&&an(e,r,n)}else{const r=t.preOrderHooks;null!==r&&un(e,r,0,n)}on(n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function fr(t,e){return t<<17|e<<2}function pr(t){return t>>17&32767}function gr(t){return 2|t}function mr(t){return(131068&t)>>2}function _r(t,e){return-131069&t|e<<2}function yr(t){return 1|t}function vr(t,e){const n=t.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const s=n[r],o=n[r+1];if(-1!==o){const n=t.data[o];Je(s),n.contentQueries(2,e[o],o)}}}function br(t,e,n){return ke(e)?e.createElement(t,n):null===n?e.createElement(t):e.createElementNS(n,t)}function wr(t,e,n,r,s,o,i,l,a,u){const c=e.blueprint.slice();return c[0]=s,c[2]=140|r,je(c),c[3]=c[15]=t,c[8]=n,c[10]=i||t&&t[10],c[11]=l||t&&t[11],c[12]=a||t&&t[12]||null,c[9]=u||t&&t[9]||null,c[6]=o,c[16]=2==e.type?t[16]:c,c}function Cr(t,e,n,r,s,o){const i=n+20,l=t.data[i]||function(t,e,n,r,s,o){const i=Ue(),l=Ge(),a=l?i:i&&i.parent,u=t.data[n]=Ir(0,a&&a!==e?a:null,r,n,s,o);return null===t.firstChild&&(t.firstChild=u),i&&(!l||null!=i.child||null===u.parent&&2!==i.type?l||(i.next=u):i.child=u),u}(t,e,i,r,s,o);return Ze(l,!0),l}function Er(t,e,n){Ye(e,e[6]);try{const r=t.viewQuery;null!==r&&qr(1,r,n);const s=t.template;null!==s&&kr(t,e,s,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&vr(t,e),t.staticViewQueries&&qr(2,t.viewQuery,n);const o=t.components;null!==o&&function(t,e){for(let n=0;n<e.length;n++)Zr(t,e[n])}(e,o)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0),r}finally{e[2]&=-5,rn()}}function xr(t,e,n,r){const s=e[2];if(256==(256&s))return;Ye(e,e[6]);const o=$e();try{je(e),Fe.lFrame.bindingIndex=t.bindingStartIndex,null!==n&&kr(t,e,n,2,r);const i=3==(3&s);if(!o)if(i){const n=t.preOrderCheckHooks;null!==n&&an(e,n,null)}else{const n=t.preOrderHooks;null!==n&&un(e,n,0,null),cn(e,0)}if(function(t){for(let e=ar(t);null!==e;e=ur(e)){if(!e[2])continue;const t=e[9];for(let e=0;e<t.length;e++){const n=t[e],r=n[3];0==(1024&n[2])&&Re(r,1),n[2]|=1024}}}(e),function(t){for(let e=ar(t);null!==e;e=ur(e))for(let t=10;t<e.length;t++){const n=e[t],r=n[1];Pe(n)&&xr(r,n,r.template,n[8])}}(e),null!==t.contentQueries&&vr(t,e),!o)if(i){const n=t.contentCheckHooks;null!==n&&an(e,n)}else{const n=t.contentHooks;null!==n&&un(e,n,1),cn(e,1)}!function(t,e){try{const n=t.expandoInstructions;if(null!==n){let r=t.expandoStartIndex,s=-1,o=-1;for(let t=0;t<n.length;t++){const i=n[t];"number"==typeof i?i<=0?(o=0-i,on(o),r+=9+n[++t],s=r):r+=i:(null!==i&&(qe(r,s),i(2,e[s])),s++)}}}finally{on(-1)}}(t,e);const l=t.components;null!==l&&function(t,e){for(let n=0;n<e.length;n++)Ur(t,e[n])}(e,l);const a=t.viewQuery;if(null!==a&&qr(2,a,r),!o)if(i){const n=t.viewCheckHooks;null!==n&&an(e,n)}else{const n=t.viewHooks;null!==n&&un(e,n,2),cn(e,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),o||(e[2]&=-73),1024&e[2]&&(e[2]&=-1025,Re(e[3],-1))}finally{rn()}}function Ar(t,e,n,r){const s=e[10],o=!$e(),i=4==(4&e[2]);try{o&&!i&&s.begin&&s.begin(),i&&Er(t,e,r),xr(t,e,n,r)}finally{o&&!i&&s.end&&s.end()}}function kr(t,e,n,r,s){const o=sn();try{on(-1),2&r&&e.length>20&&dr(t,e,0,$e()),n(r,s)}finally{on(o)}}function Sr(t){const e=t.tView;return null===e||e.incompleteFirstPass?t.tView=Tr(1,-1,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts):e}function Tr(t,e,n,r,s,o,i,l,a,u){const c=20+r,h=c+s,d=function(t,e){const n=[];for(let r=0;r<e;r++)n.push(r<t?null:ir);return n}(c,h);return d[1]={type:t,id:e,blueprint:d,template:n,queries:null,viewQuery:l,node:null,data:d.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:h,expandoInstructions:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof o?o():o,pipeRegistry:"function"==typeof i?i():i,firstChild:null,schemas:a,consts:u,incompleteFirstPass:!1}}function Ir(t,e,n,r,s,o){return{type:n,index:r,injectorIndex:e?e.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,tagName:s,attrs:o,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Or(t,e,n){for(let r in t)if(t.hasOwnProperty(r)){const s=t[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(e,s):n[r]=[e,s]}return n}function Vr(t,e){const n=t.expandoInstructions;n.push(e.hostBindings),0!==e.hostVars&&n.push(e.hostVars)}function Dr(t,e,n){for(let r=0;r<n;r++)e.push(ir),t.blueprint.push(ir),t.data.push(null)}function Nr(t,e){null!==t.hostBindings&&t.hostBindings(1,e)}function Pr(t,e,n){const r=20-e.index,s=t.data.length-(1048575&e.providerIndexes);(t.expandoInstructions||(t.expandoInstructions=[])).push(r,s,n)}function Mr(t,e){e.flags|=2,(t.components||(t.components=[])).push(e.index)}function jr(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;ye(e)&&(n[""]=t)}}function Rr(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function Fr(t,e,n){t.data.push(n);const r=n.factory||(n.factory=he(n.type)),s=new fn(r,ye(n),null);t.blueprint.push(s),e.push(s)}function Hr(t,e,n){const r=Oe(e,t),s=Sr(n),o=t[10],i=Gr(t,wr(t,s,null,n.onPush?64:16,r,e,o,o.createRenderer(r,n)));t[e.index]=i}function Lr(t,e,n,r,s,o){const i=o[e];if(null!==i){const t=r.setInput;for(let e=0;e<i.length;){const s=i[e++],o=i[e++],l=i[e++];null!==t?r.setInput(n,l,s,o):n[o]=l}}}function Br(t,e){let n=null,r=0;for(;r<e.length;){const s=e[r];if(0!==s)if(5!==s){if("number"==typeof s)break;t.hasOwnProperty(s)&&(null===n&&(n=[]),n.push(s,t[s],e[r+1])),r+=2}else r+=2;else r+=4}return n}function Ur(t,e){const n=De(e,t);if(Pe(n)){const t=n[1];80&n[2]?xr(t,n,t.template,n[8]):n[5]>0&&function t(e){for(let r=ar(e);null!==r;r=ur(r))for(let e=10;e<r.length;e++){const n=r[e];if(1024&n[2]){const t=n[1];xr(t,n,t.template,n[8])}else n[5]>0&&t(n)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const s=De(n[r],e);Pe(s)&&s[5]>0&&t(s)}}(n)}}function Zr(t,e){const n=De(e,t),r=n[1];!function(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}(r,n),Er(r,n,n[8])}function Gr(t,e){return t[13]?t[14][4]=e:t[13]=e,t[14]=e,e}function $r(t){for(;t;){t[2]|=64;const e=lr(t);if(0!=(512&t[2])&&!e)return t;t=e}return null}function zr(t,e,n){const r=e[10];r.begin&&r.begin();try{xr(t,e,t.template,n)}catch(s){throw Kr(e,s),s}finally{r.end&&r.end()}}function Wr(t){!function(t){for(let e=0;e<t.components.length;e++){const n=t.components[e],r=Ne(n),s=r[1];Ar(s,r,s.template,n)}}(t[8])}function qr(t,e,n){Je(0),e(t,n)}const Qr=(()=>Promise.resolve(null))();function Jr(t){return t[7]||(t[7]=[])}function Kr(t,e){const n=t[9],r=n?n.get(Gn,null):null;r&&r.handleError(e)}function Yr(t,e,n,r,s){for(let o=0;o<n.length;){const i=n[o++],l=n[o++],a=e[i],u=t.data[i];null!==u.setInput?u.setInput(a,s,r,l):a[l]=s}}function Xr(t,e){const n=e[3];return-1===t.index?pe(n)?n:null:n}function ts(t,e,n,r,s){if(null!=r){let o,i=!1;pe(r)?o=r:fe(r)&&(i=!0,r=r[0]);const l=Te(r);0===t&&null!==n?null==s?ss(e,n,l):rs(e,n,l,s||null):1===t&&null!==n?rs(e,n,l,s||null):2===t?function(t,e,n){const r=is(t,e);r&&function(t,e,n,r){ke(t)?t.removeChild(e,n,r):e.removeChild(n)}(t,r,e,n)}(e,l,i):3===t&&e.destroyNode(l),null!=o&&function(t,e,n,r,s){const o=n[7];o!==Te(n)&&ts(e,t,r,o,s);for(let i=10;i<n.length;i++){const s=n[i];us(s[1],s,t,e,r,o)}}(e,t,o,n,s)}}function es(t,e){let n;return fe(t)&&(n=t[6])&&2===n.type?Xr(n,t):t[3]===e?null:t[3]}function ns(t,e){if(!(256&e[2])){e[2]&=-129,e[2]|=256,function(t,e){let n;if(null!=t&&null!=(n=t.destroyHooks))for(let r=0;r<n.length;r+=2){const t=e[n[r]];if(!(t instanceof fn)){const e=n[r+1];if(Array.isArray(e))for(let n=0;n<e.length;n+=2)e[n+1].call(t[e[n]]);else e.call(t)}}}(t,e),function(t,e){const n=t.cleanup;if(null!==n){const t=e[7];for(let r=0;r<n.length-1;r+=2)if("string"==typeof n[r]){const s=n[r+1],o="function"==typeof s?s(e):Te(e[s]),i=t[n[r+2]],l=n[r+3];"boolean"==typeof l?o.removeEventListener(n[r],i,l):l>=0?t[l]():t[-l].unsubscribe(),r+=2}else n[r].call(t[n[r+1]]);e[7]=null}}(t,e);const n=e[6];n&&3===n.type&&ke(e[11])&&e[11].destroy();const r=e[17];if(null!==r&&pe(e[3])){r!==e[3]&&function(t,e){const n=t[9],r=n.indexOf(e);1024&e[2]&&Re(e[3],-1),n.splice(r,1)}(r,e);const n=e[19];null!==n&&n.detachView(t)}}}function rs(t,e,n,r){ke(t)?t.insertBefore(e,n,r):e.insertBefore(n,r,!0)}function ss(t,e,n){ke(t)?t.appendChild(e,n):e.appendChild(n)}function os(t,e,n,r){null!==r?rs(t,e,n,r):ss(t,e,n)}function is(t,e){return ke(t)?t.parentNode(e):e.parentNode}function ls(t,e,n,r){const s=function(t,e,n){let r=e.parent;for(;null!=r&&(4===r.type||5===r.type);)r=(e=r).parent;if(null==r){const t=n[6];return 2===t.type?function(t,e){const n=Xr(t,e);return n?is(e[11],n[7]):null}(t,n):n[0]}if(e&&5===e.type&&4&e.flags)return Oe(e,n).parentNode;if(2&r.flags){const e=t.data,n=e[e[r.index].directiveStart].encapsulation;if(n!==Xt.ShadowDom&&n!==Xt.Native)return null}return Oe(r,n)}(t,r,e);if(null!=s){const t=e[11],o=function(t,e){if(2===t.type){const n=Xr(t,e);return null===n?null:function t(e,n){const r=10+e+1;if(r<n.length){const e=n[r],s=e[1].firstChild;if(null!==s)return function e(n,r){if(null!==r){const s=r.type;if(3===s)return Oe(r,n);if(0===s)return t(-1,n[r.index]);if(4===s||5===s){const s=r.child;if(null!==s)return e(n,s);{const e=n[r.index];return pe(e)?t(-1,e):Te(e)}}{const t=n[16],s=t[6],o=lr(t),i=s.projection[r.projection];return null!=i?e(o,i):e(n,r.next)}}return null}(e,s)}return n[7]}(n.indexOf(e,10)-10,n)}return 4===t.type||5===t.type?Oe(t,e):null}(r.parent||e[6],e);if(Array.isArray(n))for(let e=0;e<n.length;e++)os(t,s,n[e],o);else os(t,s,n,o)}}function as(t,e,n,r,s,o,i){for(;null!=n;){const l=r[n.index],a=n.type;i&&0===e&&(l&&Wn(Te(l),r),n.flags|=4),64!=(64&n.flags)&&(4===a||5===a?(as(t,e,n.child,r,s,o,!1),ts(e,t,s,l,o)):1===a?cs(t,e,r,n,s,o):ts(e,t,s,l,o)),n=i?n.projectionNext:n.next}}function us(t,e,n,r,s,o){as(n,r,t.node.child,e,s,o,!1)}function cs(t,e,n,r,s,o){const i=n[16],l=i[6].projection[r.projection];if(Array.isArray(l))for(let a=0;a<l.length;a++)ts(e,t,s,l[a],o);else as(t,e,l,i[3],s,o,!0)}function hs(t,e,n){ke(t)?t.setAttribute(e,"style",n):e.style.cssText=n}function ds(t,e,n){ke(t)?""===n?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n):e.className=n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class fs extends
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class{constructor(t,e){this._lView=t,this._cdRefInjectingView=e,this._appRef=null,this._viewContainerRef=null}get rootNodes(){const t=this._lView;return null==t[0]?function t(e,n,r,s,o=!1){for(;null!==r;){const i=n[r.index];if(null!==i&&s.push(Te(i)),pe(i))for(let e=10;e<i.length;e++){const n=i[e],r=n[1].firstChild;null!==r&&t(n[1],n,r,s)}const l=r.type;if(4===l||5===l)t(e,n,r.child,s);else if(1===l){const e=n[16],o=e[6].projection[r.projection];if(Array.isArray(o))s.push(...o);else{const n=lr(e);t(n[1],n,o,s,!0)}}r=o?r.projectionNext:r.next}return s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t[1],t,t[6].child,[]):[]}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._viewContainerRef){const t=this._viewContainerRef.indexOf(this);t>-1&&this._viewContainerRef.detach(t),this._viewContainerRef=null}!function(t,e){if(!(256&e[2])){const n=e[11];ke(n)&&n.destroyNode&&us(t,e,n,3,null,null),function(t){let e=t[13];if(!e)return ns(t[1],t);for(;e;){let n=null;if(fe(e))n=e[13];else{const t=e[10];t&&(n=t)}if(!n){for(;e&&!e[4]&&e!==t;)fe(e)&&ns(e[1],e),e=es(e,t);null===e&&(e=t),fe(e)&&ns(e[1],e),n=e&&e[4]}e=n}}(e)}}(this._lView[1],this._lView)}onDestroy(t){!function(t,e,n,r){const s=Jr(e);s.push(null),t.firstCreatePass&&function(t){return t.cleanup||(t.cleanup=[])}(t).push(r,s.length-1)}(this._lView[1],this._lView,0,t)}markForCheck(){$r(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){zr(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(t,e,n){ze(!0);try{zr(t,e,n)}finally{ze(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(t){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=t}detachFromAppRef(){var t;this._appRef=null,us(this._lView[1],t=this._lView,t[11],2,null,null)}attachToAppRef(t){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}{constructor(t){super(t),this._view=t}detectChanges(){Wr(this._view)}checkNoChanges(){!function(t){ze(!0);try{Wr(t)}finally{ze(!1)}}(this._view)}get context(){return null}}let ps;function gs(t,e,n){return ps||(ps=class extends t{}),new ps(Oe(e,n))}const ms=new Nt("Set Injector scope."),_s={},ys={},vs=[];let bs=void 0;function ws(){return void 0===bs&&(bs=new zt),bs}function Cs(t,e=null,n=null,r){return new Es(t,n,e||ws(),r)}class Es{constructor(t,e,n,r=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const s=[];e&&qt(e,n=>this.processProvider(n,t,e)),qt([t],t=>this.processInjectorType(t,[],s)),this.records.set(Pt,ks(void 0,this));const o=this.records.get(ms);this.scope=null!=o?o.value:null,this.source=r||("object"==typeof t?null:gt(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,e=Mt,n=nt.Default){this.assertNotDestroyed();const r=Lt(this);try{if(!(n&nt.SkipSelf)){let e=this.records.get(t);if(void 0===e){const n=("function"==typeof(s=t)||"object"==typeof s&&s instanceof Nt)&&lt(t);e=n&&this.injectableDefInScope(n)?ks(xs(t),_s):null,this.records.set(t,e)}if(null!=e)return this.hydrate(t,e)}return(n&nt.Self?ws():this.parent).get(t,e=n&nt.Optional&&e===Mt?null:e)}catch(o){if("NullInjectorError"===o.name){if((o.ngTempTokenPath=o.ngTempTokenPath||[]).unshift(gt(t)),r)throw o;return function(t,e,n,r){const s=t.ngTempTokenPath;throw e.__source&&s.unshift(e.__source),t.message=function(t,e,n,r=null){t=t&&"\n"===t.charAt(0)&&"\u0275"==t.charAt(1)?t.substr(2):t;let s=gt(e);if(Array.isArray(e))s=e.map(gt).join(" -> ");else if("object"==typeof e){let t=[];for(let n in e)if(e.hasOwnProperty(n)){let r=e[n];t.push(n+":"+("string"==typeof r?JSON.stringify(r):gt(r)))}s=`{${t.join(", ")}}`}return`${n}${r?"("+r+")":""}[${s}]: ${t.replace(jt,"\n  ")}`
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}("\n"+t.message,s,n,r),t.ngTokenPath=s,t.ngTempTokenPath=null,t}(o,t,"R3InjectorError",this.source)}throw o}finally{Lt(r)}var s;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((e,n)=>t.push(gt(n))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,e,n){if(!(t=vt(t)))return!1;let r=ut(t);const s=null==r&&t.ngModule||void 0,o=void 0===s?t:s,i=-1!==n.indexOf(o);if(void 0!==s&&(r=ut(s)),null==r)return!1;if(null!=r.imports&&!i){let t;n.push(o);try{qt(r.imports,r=>{this.processInjectorType(r,e,n)&&(void 0===t&&(t=[]),t.push(r))})}finally{}if(void 0!==t)for(let e=0;e<t.length;e++){const{ngModule:n,providers:r}=t[e];qt(r,t=>this.processProvider(t,n,r||vs))}}this.injectorDefTypes.add(o),this.records.set(o,ks(r.factory,_s));const l=r.providers;if(null!=l&&!i){const e=t;qt(l,t=>this.processProvider(t,e,l))}return void 0!==s&&void 0!==t.providers}processProvider(t,e,n){let r=Ts(t=vt(t))?t:vt(t&&t.provide);const s=function(t,e,n){return Ss(t)?ks(void 0,t.useValue):ks(As(t,e,n),_s)}(t,e,n);if(Ts(t)||!0!==t.multi){const t=this.records.get(r);t&&void 0!==t.multi&&Qn()}else{let e=this.records.get(r);e?void 0===e.multi&&Qn():(e=ks(void 0,_s,!0),e.factory=()=>$t(e.multi),this.records.set(r,e)),r=t,e.multi.push(t)}this.records.set(r,s)}hydrate(t,e){var n;return e.value===ys?function(t){throw new Error("Cannot instantiate cyclic dependency! "+t)}(gt(t)):e.value===_s&&(e.value=ys,e.value=e.factory()),"object"==typeof e.value&&e.value&&null!==(n=e.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy&&this.onDestroy.add(e.value),e.value}injectableDefInScope(t){return!!t.providedIn&&("string"==typeof t.providedIn?"any"===t.providedIn||t.providedIn===this.scope:this.injectorDefTypes.has(t.providedIn))}}function xs(t){const e=lt(t),n=null!==e?e.factory:he(t);if(null!==n)return n;const r=ut(t);if(null!==r)return r.factory;if(t instanceof Nt)throw new Error(`Token ${gt(t)} is missing a \u0275prov definition.`);if(t instanceof Function)return function(t){const e=t.length;if(e>0){const n=function(t,e){const n=[];for(let r=0;r<t;r++)n.push("?");return n}(e);throw new Error(`Can't resolve all parameters for ${gt(t)}: (${n.join(", ")}).`)}const n=function(t){const e=t&&(t[ct]||t[ft]||t[dt]&&t[dt]());if(e){const n=function(t){if(t.hasOwnProperty("name"))return t.name;const e=(""+t).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),e}return null}(t);return null!==n?()=>n.factory(t):()=>new t}(t);throw new Error("unreachable")}function As(t,e,n){let r=void 0;if(Ts(t)){const e=vt(t);return he(e)||xs(e)}if(Ss(t))r=()=>vt(t.useValue);else if((s=t)&&s.useFactory)r=()=>t.useFactory(...$t(t.deps||[]));else if(function(t){return!(!t||!t.useExisting)}(t))r=()=>Zt(vt(t.useExisting));else{const s=vt(t&&(t.useClass||t.provide));if(s||function(t,e,n){let r="";throw t&&e&&(r=` - only instances of Provider and Type are allowed, got: [${e.map(t=>t==n?"?"+n+"?":"...").join(", ")}]`),new Error(`Invalid provider for the NgModule '${gt(t)}'`+r)}(e,n,t),!function(t){return!!t.deps}(t))return he(s)||xs(s);r=()=>new s(...$t(t.deps))}var s;return r}function ks(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function Ss(t){return null!==t&&"object"==typeof t&&Rt in t}function Ts(t){return"function"==typeof t}const Is=function(t,e,n){return function(t,e=null,n=null,r){const s=Cs(t,e,n,r);return s._resolveInjectorDefTypes(),s}({name:n},e,t,n)};let Os=(()=>{class t{static create(t,e){return Array.isArray(t)?Is(t,e,""):Is(t.providers,t.parent,t.name||"")}}return t.THROW_IF_NOT_FOUND=Mt,t.NULL=new zt,t.\u0275prov=ot({token:t,providedIn:"any",factory:()=>Zt(Pt)}),t.__NG_ELEMENT_ID__=-1,t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Vs(t,e,n){let r=n?t.styles:null,s=n?t.classes:null,o=0;if(null!==e)for(let i=0;i<e.length;i++){const t=e[i];"number"==typeof t?o=t:1==o?s=mt(s,t):2==o&&(r=mt(r,t+": "+e[++i]+";"))}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=s:t.classesWithoutHost=s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ds=null;function Ns(){if(!Ds){const t=At.Symbol;if(t&&t.iterator)Ds=t.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let e=0;e<t.length;++e){const n=t[e];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(Ds=n)}}}return Ds}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ps(t){return!!Ms(t)&&(Array.isArray(t)||!(t instanceof Map)&&Ns()in t)}function Ms(t){return null!==t&&("function"==typeof t||"object"==typeof t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function js(t,e,n){return!Object.is(t[e],n)&&(t[e]=n,!0)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Rs(t,e=nt.Default){const n=Le();return null==n?Zt(t,e):Dn(Ue(),n,vt(t),e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Fs(t,e,n){const r=Le();return js(r,We(),e)&&function(t,e,n,r,s,o,i,l){const a=Oe(e,n);let u,c=e.inputs;var h;null!=c&&(u=c[r])?(Yr(t,n,u,r,s),me(e)&&function(t,e){const n=De(e,t);16&n[2]||(n[2]|=64)}(n,e.index)):3===e.type&&(r="class"===(h=r)?"className":"for"===h?"htmlFor":"formaction"===h?"formAction":"innerHtml"===h?"innerHTML":"readonly"===h?"readOnly":"tabindex"===h?"tabIndex":h,s=null!=i?i(s,e.tagName||"",r):s,ke(o)?o.setProperty(a,r,s):gn(r)||(a.setProperty?a.setProperty(r,s):a[r]=s))}(Be(),function(){const t=Fe.lFrame;return Ve(t.tView,t.selectedIndex)}(),r,t,e,r[11],n),Fs}function Hs(t,e,n,r,s){const o=s?"class":"style";Yr(t,n,e.inputs[o],o,r)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ls(t,e,n,r){const s=Le(),o=Be(),i=20+t,l=s[11],a=s[i]=br(e,l,Fe.lFrame.currentNamespace),u=o.firstCreatePass?function(t,e,n,r,s,o,i){const l=e.consts,a=Me(l,o),u=Cr(e,n[6],t,3,s,a);return function(t,e,n,r){let s=!1;if(He()){const o=function(t,e,n){const r=t.directiveRegistry;let s=null;if(r)for(let o=0;o<r.length;o++){const i=r[o];rr(n,i.selectors,!1)&&(s||(s=[]),Vn(Sn(n,e),t,i.type),ye(i)?(2&n.flags&&qn(n),Mr(t,n),s.unshift(i)):s.push(i))}return s}(t,e,n),i=null===r?null:{"":-1};if(null!==o){let r=0;s=!0,Rr(n,t.data.length,o.length);for(let t=0;t<o.length;t++){const e=o[t];e.providersResolver&&e.providersResolver(e)}Pr(t,n,o.length);let l=!1,a=!1;for(let s=0;s<o.length;s++){const u=o[s];n.mergedAttrs=mn(n.mergedAttrs,u.hostAttrs),Fr(t,e,u),jr(t.data.length-1,u,i),null!==u.contentQueries&&(n.flags|=8),null===u.hostBindings&&null===u.hostAttrs&&0===u.hostVars||(n.flags|=128);const c=u.type.prototype;!l&&(c.ngOnChanges||c.ngOnInit||c.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n.index-20),l=!0),a||!c.ngOnChanges&&!c.ngDoCheck||((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n.index-20),a=!0),Vr(t,u),r+=u.hostVars}!function(t,e){const n=e.directiveEnd,r=t.data,s=e.attrs,o=[];let i=null,l=null;for(let a=e.directiveStart;a<n;a++){const t=r[a],n=t.inputs,u=null===s||Yn(e)?null:Br(n,s);o.push(u),i=Or(n,a,i),l=Or(t.outputs,a,l)}null!==i&&(i.hasOwnProperty("class")&&(e.flags|=16),i.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=o,e.inputs=i,e.outputs=l}(t,n),Dr(t,e,r)}i&&function(t,e,n){if(e){const r=t.localNames=[];for(let t=0;t<e.length;t+=2){const s=n[e[t+1]];if(null==s)throw new Error(`Export of name '${e[t+1]}' not found!`);r.push(e[t],s)}}}(n,r,i)}n.mergedAttrs=mn(n.mergedAttrs,n.attrs)}(e,n,u,Me(l,i)),null!==u.attrs&&Vs(u,u.attrs,!1),null!==u.mergedAttrs&&Vs(u,u.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,u),u}(t,o,s,0,e,n,r):o.data[i];Ze(u,!0);const c=u.mergedAttrs;null!==c&&pn(l,a,c);const h=u.classes;null!==h&&ds(l,a,h);const d=u.styles;null!==d&&hs(l,a,d),ls(o,s,a,u),0===Fe.lFrame.elementDepthCount&&Wn(a,s),Fe.lFrame.elementDepthCount++,_e(u)&&(function(t,e,n){He()&&(function(t,e,n,r){const s=n.directiveStart,o=n.directiveEnd;t.firstCreatePass||Sn(n,e),Wn(r,e);const i=n.initialInputs;for(let l=s;l<o;l++){const r=t.data[l],o=ye(r);o&&Hr(e,n,r);const a=Mn(e,t,l,n);Wn(a,e),null!==i&&Lr(0,l-s,a,r,0,i),o&&(De(n.index,e)[8]=a)}}(t,e,n,Oe(n,e)),128==(128&n.flags)&&function(t,e,n){const r=n.directiveStart,s=n.directiveEnd,o=t.expandoInstructions,i=t.firstCreatePass,l=n.index-20,a=Fe.lFrame.currentDirectiveIndex;try{on(l);for(let n=r;n<s;n++){const r=t.data[n],s=e[n];Qe(n),null!==r.hostBindings||0!==r.hostVars||null!==r.hostAttrs?Nr(r,s):i&&o.push(null)}}finally{on(-1),Qe(a)}}(t,e,n))}(o,s,u),function(t,e,n){if(ge(e)){const r=e.directiveEnd;for(let s=e.directiveStart;s<r;s++){const e=t.data[s];e.contentQueries&&e.contentQueries(1,n[s],s)}}}(o,u,s)),null!==r&&function(t,e,n=Oe){const r=e.localNames;if(null!==r){let s=e.index+1;for(let o=0;o<r.length;o+=2){const i=r[o+1],l=-1===i?n(e,t):t[i];t[s++]=l}}}(s,u)}function Bs(){let t=Ue();Ge()?Fe.lFrame.isParent=!1:(t=t.parent,Ze(t,!1));const e=t;Fe.lFrame.elementDepthCount--;const n=Be();n.firstCreatePass&&(ln(n,t),ge(t)&&n.queries.elementEnd(t)),null!=e.classesWithoutHost&&function(t){return 0!=(16&t.flags)}(e)&&Hs(n,e,Le(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function(t){return 0!=(32&t.flags)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e)&&Hs(n,e,Le(),e.stylesWithoutHost,!1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Us(t){return!!t&&"function"==typeof t.then}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Zs(t,e,n=!1,r){const s=Le(),o=Be(),i=Ue();return function(t,e,n,r,s,o,i=!1,l){const a=_e(r),u=t.firstCreatePass&&(t.cleanup||(t.cleanup=[])),c=Jr(e);let h=!0;if(3===r.type){const d=Oe(r,e),f=l?l(d):te,p=f.target||d,g=c.length,m=l?t=>l(Te(t[r.index])).target:r.index;if(ke(n)){let i=null;if(!l&&a&&(i=function(t,e,n,r){const s=t.cleanup;if(null!=s)for(let o=0;o<s.length-1;o+=2){const t=s[o];if(t===n&&s[o+1]===r){const t=e[7],n=s[o+2];return t.length>n?t[n]:null}"string"==typeof t&&(o+=2)}return null}(t,e,s,r.index)),null!==i)(i.__ngLastListenerFn__||i).__ngNextListenerFn__=o,i.__ngLastListenerFn__=o,h=!1;else{o=$s(r,e,o,!1);const t=n.listen(f.name||p,s,o);c.push(o,t),u&&u.push(s,m,g,g+1)}}else o=$s(r,e,o,!0),p.addEventListener(s,o,i),c.push(o),u&&u.push(s,m,g,i)}const d=r.outputs;let f;if(h&&null!==d&&(f=d[s])){const t=f.length;if(t)for(let n=0;n<t;n+=2){const t=e[f[n]][f[n+1]].subscribe(o),i=c.length;c.push(o,t),u&&u.push(s,r.index,i,-(i+1))}}}(o,s,s[11],i,t,e,n,r),Zs}function Gs(t,e,n){try{return!1!==e(n)}catch(r){return Kr(t,r),!1}}function $s(t,e,n,r){return function s(o){if(o===Function)return n;const i=2&t.flags?De(t.index,e):e;0==(32&e[2])&&$r(i);let l=Gs(e,n,o),a=s.__ngNextListenerFn__;for(;a;)l=Gs(e,a,o)&&l,a=a.__ngNextListenerFn__;return r&&!1===l&&(o.preventDefault(),o.returnValue=!1),l
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}const zs=[];function Ws(t,e,n,r,s){const o=t[n+1],i=null===e;let l=r?pr(o):mr(o),a=!1;for(;0!==l&&(!1===a||i);){const n=t[l+1];qs(t[l],e)&&(a=!0,t[l+1]=r?yr(n):gr(n)),l=r?pr(n):mr(n)}a&&(t[n+1]=r?gr(o):yr(o))}function qs(t,e){return null===t||null==e||(Array.isArray(t)?t[1]:t)===e||!(!Array.isArray(t)||"string"!=typeof e)&&Kt(t,e)>=0}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Qs(t,e){return function(t,e,n,r){const s=Le(),o=Be(),i=function(t){const e=Fe.lFrame,n=e.bindingIndex;return e.bindingIndex=e.bindingIndex+2,n}();o.firstUpdatePass&&function(t,e,n,r){const s=t.data;if(null===s[n+1]){const r=s[sn()+20],o=function(t,e){return e>=t.expandoStartIndex}(t,n);(function(t,e){return 0!=(16&t.flags)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */)(r)&&null===e&&!o&&(e=!1),e=function(t,e,n,r){const s=function(t){const e=Fe.lFrame.currentDirectiveIndex;return-1===e?null:t[e]}(t);let o=e.residualClasses;if(null===s)0===e.classBindings&&(n=Ks(n=Js(null,t,e,n,!0),e.attrs,!0),o=null);else{const r=e.directiveStylingLast;if(-1===r||t[r]!==s)if(n=Js(s,t,e,n,!0),null===o){let n=function(t,e,n){const r=e.classBindings;if(0!==mr(r))return t[pr(r)]}(t,e);void 0!==n&&Array.isArray(n)&&(n=Js(null,t,e,n[1],!0),n=Ks(n,e.attrs,!0),function(t,e,n,r){t[pr(e.classBindings)]=r}(t,e,0,n))}else o=function(t,e,n){let r=void 0;const s=e.directiveEnd;for(let o=1+e.directiveStylingLast;o<s;o++)r=Ks(r,t[o].hostAttrs,!0);return Ks(r,e.attrs,!0)}(t,e)}return void 0!==o&&(e.residualClasses=o),n}(s,r,e),function(t,e,n,r,s,o){let i=e.classBindings,l=pr(i),a=mr(i);t[r]=n;let u,c=!1;if(Array.isArray(n)){const t=n;u=t[1],(null===u||Kt(t,u)>0)&&(c=!0)}else u=n;if(s)if(0!==a){const e=pr(t[l+1]);t[r+1]=fr(e,l),0!==e&&(t[e+1]=_r(t[e+1],r)),t[l+1]=131071&t[l+1]|r<<17}else t[r+1]=fr(l,0),0!==l&&(t[l+1]=_r(t[l+1],r)),l=r;else t[r+1]=fr(a,0),0===l?l=r:t[a+1]=_r(t[a+1],r),a=r;c&&(t[r+1]=gr(t[r+1])),Ws(t,u,r,!0),Ws(t,u,r,!1),function(t,e,n,r,s){const o=t.residualClasses;null!=o&&"string"==typeof e&&Kt(o,e)>=0&&(n[r+1]=yr(n[r+1]))}(e,u,t,r),i=fr(l,a),e.classBindings=i}(s,r,e,n,o)}}(o,t,i),e!==ir&&js(s,i,e)&&function(t,e,n,r,s,o,i,l){if(3!==e.type)return;const a=t.data,u=a[l+1];Xs(1==(1&u)?Ys(a,e,n,s,mr(u),!0):void 0)||(Xs(o)||function(t){return 2==(2&t)}(u)&&(o=Ys(a,null,n,s,l,!0)),function(t,e,n,r,s){const o=ke(t);s?o?t.addClass(n,r):n.classList.add(r):o?t.removeClass(n,r):n.classList.remove(r)}(r,0,Ie(sn(),n),s,o))}(o,o.data[sn()+20],s,s[11],t,s[i+1]=function(t,e){return null==t||"object"==typeof t&&(t=gt(function(t){return t instanceof
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return"SafeValue must use [property]=binding: "+this.changingThisBreaksApplicationSecurity+" (see http://g.co/ng/security#xss)"}}?t.changingThisBreaksApplicationSecurity:t}(t))),t}(e),0,i)}(t,e),Qs}function Js(t,e,n,r,s){let o=null;const i=n.directiveEnd;let l=n.directiveStylingLast;for(-1===l?l=n.directiveStart:l++;l<i&&(o=e[l],r=Ks(r,o.hostAttrs,s),o!==t);)l++;return null!==t&&(n.directiveStylingLast=l),r}function Ks(t,e,n){const r=n?1:2;let s=-1;if(null!==e)for(let o=0;o<e.length;o++){const i=e[o];"number"==typeof i?s=i:s===r&&(Array.isArray(t)||(t=void 0===t?[]:["",t]),Qt(t,i,!!n||e[++o]))}return void 0===t?null:t}function Ys(t,e,n,r,s,o){const i=null===e;let l=void 0;for(;s>0;){const e=t[s],o=Array.isArray(e),a=o?e[1]:e,u=null===a;let c=n[s+1];c===ir&&(c=u?zs:void 0);let h=u?Jt(c,r):a===r?c:void 0;if(o&&!Xs(h)&&(h=Jt(e,r)),Xs(h)&&(l=h,i))return l;const d=t[s+1];s=i?pr(d):mr(d)}if(null!==e){let t=o?e.residualClasses:e.residualStyles;null!=t&&(l=Jt(t,r))}return l}function Xs(t){return void 0!==t}function to(t,e=""){const n=Le(),r=Be(),s=t+20,o=r.firstCreatePass?Cr(r,n[6],t,3,null,null):r.data[s],i=n[s]=function(t,e){return ke(e)?e.createText(t):e.createTextNode(t)}(e,n[11]);ls(r,n,i,o),Ze(o,!1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function eo(t,e,n){const r=Le(),s=function(t,e,n,r){return js(t,We(),n)?e+bn(n)+r:ir}(r,t,e,n);return s!==ir&&function(t,e,n){const r=Ie(e,t),s=t[11];ke(s)?s.setValue(r,n):r.textContent=n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(r,sn(),s),eo}function no(t,e){const n=Ne(t)[1],r=n.data.length-1;ln(n,{directiveStart:r,directiveEnd:r+1})}function ro(t){let e=Object.getPrototypeOf(t.type.prototype).constructor,n=!0;const r=[t];for(;e;){let s=void 0;if(ye(t))s=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new Error("Directives cannot inherit Components");s=e.\u0275dir}if(s){if(n){r.push(s);const e=t;e.inputs=so(t.inputs),e.declaredInputs=so(t.declaredInputs),e.outputs=so(t.outputs);const n=s.hostBindings;n&&lo(t,n);const o=s.viewQuery,i=s.contentQueries;if(o&&oo(t,o),i&&io(t,i),st(t.inputs,s.inputs),st(t.declaredInputs,s.declaredInputs),st(t.outputs,s.outputs),ye(s)&&s.data.animation){const e=t.data;e.animation=(e.animation||[]).concat(s.data.animation)}}const e=s.features;if(e)for(let r=0;r<e.length;r++){const s=e[r];s&&s.ngInherit&&s(t),s===ro&&(n=!1)}}e=Object.getPrototypeOf(e)}!function(t){let e=0,n=null;for(let r=t.length-1;r>=0;r--){const s=t[r];s.hostVars=e+=s.hostVars,s.hostAttrs=mn(s.hostAttrs,n=mn(n,s.hostAttrs))}}(r)}function so(t){return t===te?{}:t===ee?[]:t}function oo(t,e){const n=t.viewQuery;t.viewQuery=n?(t,r)=>{e(t,r),n(t,r)}:e}function io(t,e){const n=t.contentQueries;t.contentQueries=n?(t,r,s)=>{e(t,r,s),n(t,r,s)}:e}function lo(t,e){const n=t.hostBindings;t.hostBindings=n?(t,r)=>{e(t,r),n(t,r)}:e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ao(t,e,n,r,s){if(t=vt(t),Array.isArray(t))for(let o=0;o<t.length;o++)ao(t[o],e,n,r,s);else{const o=Be(),i=Le();let l=Ts(t)?t:vt(t.provide),a=As(t);const u=Ue(),c=1048575&u.providerIndexes,h=u.directiveStart,d=u.providerIndexes>>20;if(Ts(t)||!t.multi){const r=new fn(a,s,Rs),f=ho(l,e,s?c:c+d,h);-1===f?(Vn(Sn(u,i),o,l),uo(o,t,e.length),e.push(l),u.directiveStart++,u.directiveEnd++,s&&(u.providerIndexes+=1048576),n.push(r),i.push(r)):(n[f]=r,i[f]=r)}else{const f=ho(l,e,c+d,h),p=ho(l,e,c,c+d),g=f>=0&&n[f],m=p>=0&&n[p];if(s&&!m||!s&&!g){Vn(Sn(u,i),o,l);const c=function(t,e,n,r,s){const o=new fn(t,n,Rs);return o.multi=[],o.index=e,o.componentProviders=0,co(o,s,r&&!n),o}(s?po:fo,n.length,s,r,a);!s&&m&&(n[p].providerFactory=c),uo(o,t,e.length,0),e.push(l),u.directiveStart++,u.directiveEnd++,s&&(u.providerIndexes+=1048576),n.push(c),i.push(c)}else uo(o,t,f>-1?f:p,co(n[s?p:f],a,!s&&r));!s&&r&&m&&n[p].componentProviders++}}}function uo(t,e,n,r){const s=Ts(e);if(s||e.useClass){const o=(e.useClass||e).prototype.ngOnDestroy;if(o){const i=t.destroyHooks||(t.destroyHooks=[]);if(!s&&e.multi){const t=i.indexOf(n);-1===t?i.push(n,[r,o]):i[t+1].push(r,o)}else i.push(n,o)}}}function co(t,e,n){return n&&t.componentProviders++,t.multi.push(e)-1}function ho(t,e,n,r){for(let s=n;s<r;s++)if(e[s]===t)return s;return-1}function fo(t,e,n,r){return go(this.multi,[])}function po(t,e,n,r){const s=this.multi;let o;if(this.providerFactory){const t=this.providerFactory.componentProviders,e=Mn(n,n[1],this.providerFactory.index,r);o=e.slice(0,t),go(s,o);for(let n=t;n<e.length;n++)o.push(e[n])}else o=[],go(s,o);return o}function go(t,e){for(let n=0;n<t.length;n++)e.push((0,t[n])());return e}function mo(t,e=[]){return n=>{n.providersResolver=(n,r)=>
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n){const r=Be();if(r.firstCreatePass){const s=ye(t);ao(n,r.data,r.blueprint,s,!0),ao(e,r.data,r.blueprint,s,!1)}}(n,r?r(t):t,e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class _o{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class yo{resolveComponentFactory(t){throw function(t){const e=Error(`No component factory found for ${gt(t)}. Did you add it to @NgModule.entryComponents?`);return e.ngComponent=t,e}(t)}}let vo=(()=>{class t{}return t.NULL=new yo,t})(),bo=(()=>{class t{constructor(t){this.nativeElement=t}}return t.__NG_ELEMENT_ID__=()=>wo(t),t})();const wo=function(t){return gs(t,Ue(),Le())};class Co{}var Eo=function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t}({});let xo=(()=>{class t{}return t.__NG_ELEMENT_ID__=()=>Ao(),t})();const Ao=function(){const t=Le(),e=De(Ue().index,t);return function(t){const e=t[11];if(ke(e))return e;throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")}(fe(e)?e:t)};let ko=(()=>{class t{}return t.\u0275prov=ot({token:t,providedIn:"root",factory:()=>null}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class So{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const To=new So("10.0.14");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Io{constructor(){}supports(t){return Ps(t)}create(t){return new Vo(t)}}const Oo=(t,e)=>e;class Vo{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||Oo}forEachItem(t){let e;for(e=this._itHead;null!==e;e=e._next)t(e)}forEachOperation(t){let e=this._itHead,n=this._removalsHead,r=0,s=null;for(;e||n;){const o=!n||e&&e.currentIndex<Mo(n,r,s)?e:n,i=Mo(o,r,s),l=o.currentIndex;if(o===n)r--,n=n._nextRemoved;else if(e=e._next,null==o.previousIndex)r++;else{s||(s=[]);const t=i-r,e=l-r;if(t!=e){for(let n=0;n<t;n++){const r=n<s.length?s[n]:s[n]=0,o=r+n;e<=o&&o<t&&(s[n]=r+1)}s[o.previousIndex]=e-t}}i!==l&&t(o,i,l)}}forEachPreviousItem(t){let e;for(e=this._previousItHead;null!==e;e=e._nextPrevious)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachMovedItem(t){let e;for(e=this._movesHead;null!==e;e=e._nextMoved)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}forEachIdentityChange(t){let e;for(e=this._identityChangesHead;null!==e;e=e._nextIdentityChange)t(e)}diff(t){if(null==t&&(t=[]),!Ps(t))throw new Error(`Error trying to diff '${gt(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e,n,r,s=this._itHead,o=!1;if(Array.isArray(t)){this.length=t.length;for(let e=0;e<this.length;e++)n=t[e],r=this._trackByFn(e,n),null!==s&&Object.is(s.trackById,r)?(o&&(s=this._verifyReinsertion(s,n,r,e)),Object.is(s.item,n)||this._addIdentityChange(s,n)):(s=this._mismatch(s,n,r,e),o=!0),s=s._next}else e=0,function(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const n=t[Ns()]();let r;for(;!(r=n.next()).done;)e(r.value)}}(t,t=>{r=this._trackByFn(e,t),null!==s&&Object.is(s.trackById,r)?(o&&(s=this._verifyReinsertion(s,t,r,e)),Object.is(s.item,t)||this._addIdentityChange(s,t)):(s=this._mismatch(s,t,r,e),o=!0),s=s._next,e++}),this.length=e;return this._truncate(s),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t,e;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=e)t.previousIndex=t.currentIndex,e=t._nextMoved;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,e,n,r){let s;return null===t?s=this._itTail:(s=t._prev,this._remove(t)),null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._moveAfter(t,s,r)):null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._reinsertAfter(t,s,r)):t=this._addAfter(new Do(e,n),s,r),t}_verifyReinsertion(t,e,n,r){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==s?t=this._reinsertAfter(s,t._prev,r):t.currentIndex!=r&&(t.currentIndex=r,this._addToMoves(t,r)),t}_truncate(t){for(;null!==t;){const e=t._next;this._addToRemovals(this._unlink(t)),t=e}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,e,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const r=t._prevRemoved,s=t._nextRemoved;return null===r?this._removalsHead=s:r._nextRemoved=s,null===s?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(t,e,n),this._addToMoves(t,n),t}_moveAfter(t,e,n){return this._unlink(t),this._insertAfter(t,e,n),this._addToMoves(t,n),t}_addAfter(t,e,n){return this._insertAfter(t,e,n),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,e,n){const r=null===e?this._itHead:e._next;return t._next=r,t._prev=e,null===r?this._itTail=t:r._prev=t,null===e?this._itHead=t:e._next=t,null===this._linkedRecords&&(this._linkedRecords=new Po),this._linkedRecords.put(t),t.currentIndex=n,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const e=t._prev,n=t._next;return null===e?this._itHead=n:e._next=n,null===n?this._itTail=e:n._prev=e,t}_addToMoves(t,e){return t.previousIndex===e||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Po),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,e){return t.item=e,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class Do{constructor(t,e){this.item=t,this.trackById=e,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class No{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,e){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===e||e<=n.currentIndex)&&Object.is(n.trackById,t))return n;return null}remove(t){const e=t._prevDup,n=t._nextDup;return null===e?this._head=n:e._nextDup=n,null===n?this._tail=e:n._prevDup=e,null===this._head}}class Po{constructor(){this.map=new Map}put(t){const e=t.trackById;let n=this.map.get(e);n||(n=new No,this.map.set(e,n)),n.add(t)}get(t,e){const n=this.map.get(t);return n?n.get(t,e):null}remove(t){const e=t.trackById;return this.map.get(e).remove(t)&&this.map.delete(e),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Mo(t,e,n){const r=t.previousIndex;if(null===r)return r;let s=0;return n&&r<n.length&&(s=n[r]),r+e+s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class jo{constructor(){}supports(t){return t instanceof Map||Ms(t)}create(){return new Ro}}class Ro{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let e;for(e=this._mapHead;null!==e;e=e._next)t(e)}forEachPreviousItem(t){let e;for(e=this._previousMapHead;null!==e;e=e._nextPrevious)t(e)}forEachChangedItem(t){let e;for(e=this._changesHead;null!==e;e=e._nextChanged)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}diff(t){if(t){if(!(t instanceof Map||Ms(t)))throw new Error(`Error trying to diff '${gt(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(t,(t,n)=>{if(e&&e.key===n)this._maybeAddToChanges(e,t),this._appendAfter=e,e=e._next;else{const r=this._getOrCreateRecordForKey(n,t);e=this._insertBeforeOrAppend(e,r)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let t=e;null!==t;t=t._nextRemoved)t===this._mapHead&&(this._mapHead=null),this._records.delete(t.key),t._nextRemoved=t._next,t.previousValue=t.currentValue,t.currentValue=null,t._prev=null,t._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,e){if(t){const n=t._prev;return e._next=t,e._prev=n,t._prev=e,n&&(n._next=e),t===this._mapHead&&(this._mapHead=e),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(t,e){if(this._records.has(t)){const n=this._records.get(t);this._maybeAddToChanges(n,e);const r=n._prev,s=n._next;return r&&(r._next=s),s&&(s._prev=r),n._next=null,n._prev=null,n}const n=new Fo(t);return this._records.set(t,n),n.currentValue=e,this._addToAdditions(n),n}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,e){Object.is(e,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=e,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,e){t instanceof Map?t.forEach(e):Object.keys(t).forEach(n=>e(t[n],n))}}class Fo{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}let Ho=(()=>{class t{constructor(t){this.factories=t}static create(e,n){if(null!=n){const t=n.factories.slice();e=e.concat(t)}return new t(e)}static extend(e){return{provide:t,useFactory:n=>{if(!n)throw new Error("Cannot extend IterableDiffers without a parent injector");return t.create(e,n)},deps:[[t,new et,new X]]}}find(t){const e=this.factories.find(e=>e.supports(t));if(null!=e)return e;throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`);var n}}return t.\u0275prov=ot({token:t,providedIn:"root",factory:()=>new t([new Io])}),t})(),Lo=(()=>{class t{constructor(t){this.factories=t}static create(e,n){if(n){const t=n.factories.slice();e=e.concat(t)}return new t(e)}static extend(e){return{provide:t,useFactory:n=>{if(!n)throw new Error("Cannot extend KeyValueDiffers without a parent injector");return t.create(e,n)},deps:[[t,new et,new X]]}}find(t){const e=this.factories.find(e=>e.supports(t));if(e)return e;throw new Error(`Cannot find a differ supporting object '${t}'`)}}return t.\u0275prov=ot({token:t,providedIn:"root",factory:()=>new t([new jo])}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Bo=[new jo],Uo=new Ho([new Io]),Zo=new Lo(Bo),Go={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class $o extends vo{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const e=ce(t);return new qo(e,this.ngModule)}}function zo(t){const e=[];for(let n in t)t.hasOwnProperty(n)&&e.push({propName:t[n],templateName:n});return e}const Wo=new Nt("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>Cn});class qo extends _o{constructor(t,e){super(),this.componentDef=t,this.ngModule=e,this.componentType=t.type,this.selector=t.selectors.map(or).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!e}get inputs(){return zo(this.componentDef.inputs)}get outputs(){return zo(this.componentDef.outputs)}create(t,e,n,r){const s=(r=r||this.ngModule)?function(t,e){return{get:(n,r,s)=>{const o=t.get(n,Go,s);return o!==Go||r===Go?o:e.get(n,r,s)}}}(t,r.injector):t,o=s.get(Co,Se),i=s.get(ko,null),l=o.createRenderer(null,this.componentDef),a=this.componentDef.selectors[0][0]||"div",u=n?function(t,e,n){if(ke(t))return t.selectRootElement(e,n===Xt.ShadowDom);let r="string"==typeof e?t.querySelector(e):e;return r.textContent="",r}(l,n,this.componentDef.encapsulation):br(a,o.createRenderer(null,this.componentDef),function(t){const e=t.toLowerCase();return"svg"===e?"http://www.w3.org/2000/svg":"math"===e?"http://www.w3.org/1998/MathML/":null}(a)),c=this.componentDef.onPush?576:528,h={components:[],scheduler:Cn,clean:Qr,playerHandler:null,flags:0},d=Tr(0,-1,null,1,0,null,null,null,null,null),f=wr(null,d,h,c,null,null,o,l,i,s);let p,g;Ye(f,null);try{const t=function(t,e,n,r,s,o){const i=n[1];n[20]=t;const l=Cr(i,null,0,3,null,null),a=l.mergedAttrs=e.hostAttrs;null!==a&&(Vs(l,a,!0),null!==t&&(pn(s,t,a),null!==l.classes&&ds(s,t,l.classes),null!==l.styles&&hs(s,t,l.styles)));const u=r.createRenderer(t,e),c=wr(n,Sr(e),null,e.onPush?64:16,n[20],l,r,u,void 0);return i.firstCreatePass&&(Vn(Sn(l,n),i,e.type),Mr(i,l),Rr(l,n.length,1)),Gr(n,c),n[20]=c}(u,this.componentDef,f,o,l);if(u)if(n)pn(l,u,["ng-version",To.full]);else{const{attrs:t,classes:e}=function(t){const e=[],n=[];let r=1,s=2;for(;r<t.length;){let o=t[r];if("string"==typeof o)2===s?""!==o&&e.push(o,t[++r]):8===s&&n.push(o);else{if(!er(s))break;s=o}r++}return{attrs:e,classes:n}}(this.componentDef.selectors[0]);t&&pn(l,u,t),e&&e.length>0&&ds(l,u,e.join(" "))}if(g=Ve(d,0),void 0!==e){const t=g.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const r=e[n];t.push(null!=r?Array.from(r):null)}}p=function(t,e,n,r,s){const o=n[1],i=function(t,e,n){const r=Ue();t.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Pr(t,r,1),Fr(t,e,n));const s=Mn(e,t,e.length-1,r);Wn(s,e);const o=Oe(r,e);return o&&Wn(o,e),s}(o,n,e);r.components.push(i),t[8]=i,s&&s.forEach(t=>t(i,e)),e.contentQueries&&e.contentQueries(1,i,n.length-1);const l=Ue();if(o.firstCreatePass&&(null!==e.hostBindings||null!==e.hostAttrs)){on(l.index-20);const t=n[1];Vr(t,e),Dr(t,n,e.hostVars),Nr(e,i)}return i}(t,this.componentDef,f,h,[no]),Er(d,f,null)}finally{rn()}const m=new Qo(this.componentType,p,gs(bo,g,f),f,g);return d.node.child=g,m}}class Qo extends class{}{constructor(t,e,n,r,s){super(),this.location=n,this._rootLView=r,this._tNode=s,this.destroyCbs=[],this.instance=e,this.hostView=this.changeDetectorRef=new fs(r),function(t,e,n,r){let s=t.node;null==s&&(t.node=s=Ir(0,null,2,-1,null,null)),r[6]=s}(r[1],0,0,r),this.componentType=t}get injector(){return new Fn(this._tNode,this._rootLView)}destroy(){this.destroyCbs&&(this.destroyCbs.forEach(t=>t()),this.destroyCbs=null,!this.hostView.destroyed&&this.hostView.destroy())}onDestroy(t){this.destroyCbs&&this.destroyCbs.push(t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Jo=void 0;var Ko=["en",[["a","p"],["AM","PM"],Jo],[["AM","PM"],Jo,Jo],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Jo,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Jo,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Jo,"{1} 'at' {0}",Jo],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(t){let e=Math.floor(Math.abs(t)),n=t.toString().replace(/^[^.]*\.?/,"").length;return 1===e&&0===n?1:5}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Yo={};function Xo(t){return t in Yo||(Yo[t]=At.ng&&At.ng.common&&At.ng.common.locales&&At.ng.common.locales[t]),Yo[t]}var ti=function(t){return t[t.LocaleId=0]="LocaleId",t[t.DayPeriodsFormat=1]="DayPeriodsFormat",t[t.DayPeriodsStandalone=2]="DayPeriodsStandalone",t[t.DaysFormat=3]="DaysFormat",t[t.DaysStandalone=4]="DaysStandalone",t[t.MonthsFormat=5]="MonthsFormat",t[t.MonthsStandalone=6]="MonthsStandalone",t[t.Eras=7]="Eras",t[t.FirstDayOfWeek=8]="FirstDayOfWeek",t[t.WeekendRange=9]="WeekendRange",t[t.DateFormat=10]="DateFormat",t[t.TimeFormat=11]="TimeFormat",t[t.DateTimeFormat=12]="DateTimeFormat",t[t.NumberSymbols=13]="NumberSymbols",t[t.NumberFormats=14]="NumberFormats",t[t.CurrencyCode=15]="CurrencyCode",t[t.CurrencySymbol=16]="CurrencySymbol",t[t.CurrencyName=17]="CurrencyName",t[t.Currencies=18]="Currencies",t[t.Directionality=19]="Directionality",t[t.PluralCase=20]="PluralCase",t[t.ExtraData=21]="ExtraData",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ei="en-US";function ni(t){var e,n;n="Expected localeId to be defined",null==(e=t)&&function(t,e,n,r){throw new Error("ASSERTION ERROR: "+t+` [Expected=> null != ${e} <=Actual]`)}(n,e),"string"==typeof t&&(ei=t.toLowerCase().replace(/_/g,"-"))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ri=new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class si extends Wt{constructor(t,e){super(),this._parent=e,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new $o(this);const n=de(t),r=t[Ot]||null;r&&ni(r),this._bootstrapComponents=En(n.bootstrap),this._r3Injector=Cs(t,e,[{provide:Wt,useValue:this},{provide:vo,useValue:this.componentFactoryResolver}],gt(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,e=Os.THROW_IF_NOT_FOUND,n=nt.Default){return t===Os||t===Wt||t===Pt?this:this._r3Injector.get(t,e,n)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class oi extends class{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */{constructor(t){super(),this.moduleType=t,null!==de(t)&&function t(e){if(null!==e.\u0275mod.id){const t=e.\u0275mod.id;(function(t,e,n){if(e&&e!==n)throw new Error(`Duplicate module registered for ${t} - ${gt(e)} vs ${gt(e.name)}`)})(t,ri.get(t),e),ri.set(t,e)}let n=e.\u0275mod.imports;n instanceof Function&&(n=n()),n&&n.forEach(e=>t(e))}(t)}create(t){return new si(this.moduleType,t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ii=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class extends k{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,e,n){let r,s=t=>null,o=()=>null;t&&"object"==typeof t?(r=this.__isAsync?e=>{setTimeout(()=>t.next(e))}:e=>{t.next(e)},t.error&&(s=this.__isAsync?e=>{setTimeout(()=>t.error(e))}:e=>{t.error(e)}),t.complete&&(o=this.__isAsync?()=>{setTimeout(()=>t.complete())}:()=>{t.complete()})):(r=this.__isAsync?e=>{setTimeout(()=>t(e))}:e=>{t(e)},e&&(s=this.__isAsync?t=>{setTimeout(()=>e(t))}:t=>{e(t)}),n&&(o=this.__isAsync?()=>{setTimeout(()=>n())}:()=>{n()}));const i=super.subscribe(r,s,o);return t instanceof p&&t.add(i),i}},li=new Nt("Application Initializer");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ai=(()=>{class t{constructor(t){this.appInits=t,this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}runInitializers(){if(this.initialized)return;const t=[],e=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let n=0;n<this.appInits.length;n++){const e=this.appInits[n]();Us(e)&&t.push(e)}Promise.all(t).then(()=>{e()}).catch(t=>{this.reject(t)}),0===t.length&&e(),this.initialized=!0}}return t.\u0275fac=function(e){return new(e||t)(Zt(li,8))},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ui=new Nt("AppId"),ci={provide:ui,useFactory:function(){return`${hi()}${hi()}${hi()}`},deps:[]};function hi(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const di=new Nt("Platform Initializer"),fi=new Nt("Platform ID"),pi=new Nt("appBootstrapListener");let gi=(()=>{class t{log(t){console.log(t)}warn(t){console.warn(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const mi=new Nt("LocaleId"),_i=new Nt("DefaultCurrencyCode");var yi=function(t){return t[t.Error=0]="Error",t[t.Warning=1]="Warning",t[t.Ignore=2]="Ignore",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class vi{constructor(t,e){this.ngModuleFactory=t,this.componentFactories=e}}const bi=function(t){return new oi(t)},wi=bi,Ci=function(t){return Promise.resolve(bi(t))},Ei=function(t){const e=bi(t),n=En(de(t).declarations).reduce((t,e)=>{const n=ce(e);return n&&t.push(new qo(n)),t},[]);return new vi(e,n)},xi=Ei,Ai=function(t){return Promise.resolve(Ei(t))};let ki=(()=>{class t{constructor(){this.compileModuleSync=wi,this.compileModuleAsync=Ci,this.compileModuleAndAllComponentsSync=xi,this.compileModuleAndAllComponentsAsync=Ai}clearCache(){}clearCacheFor(t){}getModuleId(t){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})();const Si=new Nt("compilerOptions"),Ti=(()=>Promise.resolve(0))();function Ii(t){"undefined"==typeof Zone?Ti.then(()=>{t&&t.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Oi{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:e=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new ii(!1),this.onMicrotaskEmpty=new ii(!1),this.onStable=new ii(!1),this.onError=new ii(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched(),this._nesting=0,this._outer=this._inner=Zone.current,Zone.wtfZoneSpec&&(this._inner=this._inner.fork(Zone.wtfZoneSpec)),Zone.TaskTrackingZoneSpec&&(this._inner=this._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(this._inner=this._inner.fork(Zone.longStackTraceZoneSpec)),this.shouldCoalesceEventChangeDetection=e,this.lastRequestAnimationFrameId=-1,this.nativeRequestAnimationFrame=function(){let t=At.requestAnimationFrame,e=At.cancelAnimationFrame;if("undefined"!=typeof Zone&&t&&e){const n=t[Zone.__symbol__("OriginalDelegate")];n&&(t=n);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function(t){const e=!!t.shouldCoalesceEventChangeDetection&&t.nativeRequestAnimationFrame&&(()=>{!function(t){-1===t.lastRequestAnimationFrameId&&(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(At,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,Pi(t),Ni(t)},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),Pi(t))}(t)});t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0,maybeDelayChangeDetection:e},onInvokeTask:(n,r,s,o,i,l)=>{try{return Mi(t),n.invokeTask(s,o,i,l)}finally{e&&"eventTask"===o.type&&e(),ji(t)}},onInvoke:(e,n,r,s,o,i,l)=>{try{return Mi(t),e.invoke(r,s,o,i,l)}finally{ji(t)}},onHasTask:(e,n,r,s)=>{e.hasTask(r,s),n===r&&("microTask"==s.change?(t._hasPendingMicrotasks=s.microTask,Pi(t),Ni(t)):"macroTask"==s.change&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(e,n,r,s)=>(e.handleError(r,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}(this)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Oi.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(Oi.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,e,n){return this._inner.run(t,e,n)}runTask(t,e,n,r){const s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,t,Di,Vi,Vi);try{return s.runTask(o,e,n)}finally{s.cancelTask(o)}}runGuarded(t,e,n){return this._inner.runGuarded(t,e,n)}runOutsideAngular(t){return this._outer.run(t)}}function Vi(){}const Di={};function Ni(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function Pi(t){t.hasPendingMicrotasks=!!(t._hasPendingMicrotasks||t.shouldCoalesceEventChangeDetection&&-1!==t.lastRequestAnimationFrameId)}function Mi(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function ji(t){t._nesting--,Ni(t)}class Ri{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new ii,this.onMicrotaskEmpty=new ii,this.onStable=new ii,this.onError=new ii}run(t,e,n){return t.apply(e,n)}runGuarded(t,e,n){return t.apply(e,n)}runOutsideAngular(t){return t()}runTask(t,e,n,r){return t.apply(e,n)}}let Fi=(()=>{class t{constructor(t){this._ngZone=t,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),t.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Oi.assertNotInAngularZone(),Ii(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Ii(()=>{for(;0!==this._callbacks.length;){let t=this._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb(this._didWork)}this._didWork=!1});else{let t=this.getPendingTasks();this._callbacks=this._callbacks.filter(e=>!e.updateCb||!e.updateCb(t)||(clearTimeout(e.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(t=>({source:t.source,creationLocation:t.creationLocation,data:t.data})):[]}addCallback(t,e,n){let r=-1;e&&e>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(t=>t.timeoutId!==r),t(this._didWork,this.getPendingTasks())},e)),this._callbacks.push({doneCb:t,timeoutId:r,updateCb:n})}whenStable(t,e,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(t,e,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(t,e,n){return[]}}return t.\u0275fac=function(e){return new(e||t)(Zt(Oi))},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})(),Hi=(()=>{class t{constructor(){this._applications=new Map,Ui.addToWindow(this)}registerApplication(t,e){this._applications.set(t,e)}unregisterApplication(t){this._applications.delete(t)}unregisterAllApplications(){this._applications.clear()}getTestability(t){return this._applications.get(t)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(t,e=!0){return Ui.findTestabilityInTree(this,t,e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})();class Li{addToWindow(t){}findTestabilityInTree(t,e,n){return null}}let Bi,Ui=new Li;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Zi=new Nt("AllowMultipleToken");function Gi(t,e,n=[]){const r="Platform: "+e,s=new Nt(r);return(e=[])=>{let o=$i();if(!o||o.injector.get(Zi,!1))if(t)t(n.concat(e).concat({provide:s,useValue:!0}));else{const t=n.concat(e).concat({provide:s,useValue:!0},{provide:ms,useValue:"platform"});!function(t){if(Bi&&!Bi.destroyed&&!Bi.injector.get(Zi,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");Bi=t.get(zi);const e=t.get(di,null);e&&e.forEach(t=>t())}(Os.create({providers:t,name:r}))}return function(t){const e=$i();if(!e)throw new Error("No platform exists!");if(!e.injector.get(t,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return e}(s)}}function $i(){return Bi&&!Bi.destroyed?Bi:null}let zi=(()=>{class t{constructor(t){this._injector=t,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(t,e){const n=function(t,e){let n;return n="noop"===t?new Ri:("zone.js"===t?void 0:t)||new Oi({enableLongStackTrace:zn(),shouldCoalesceEventChangeDetection:e}),n}(e?e.ngZone:void 0,e&&e.ngZoneEventCoalescing||!1),r=[{provide:Oi,useValue:n}];return n.run(()=>{const e=Os.create({providers:r,parent:this.injector,name:t.moduleType.name}),s=t.create(e),o=s.injector.get(Gn,null);if(!o)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return s.onDestroy(()=>Qi(this._modules,s)),n.runOutsideAngular(()=>n.onError.subscribe({next:t=>{o.handleError(t)}})),function(t,e,n){try{const r=n();return Us(r)?r.catch(n=>{throw e.runOutsideAngular(()=>t.handleError(n)),n}):r}catch(r){throw e.runOutsideAngular(()=>t.handleError(r)),r}}(o,n,()=>{const t=s.injector.get(ai);return t.runInitializers(),t.donePromise.then(()=>(ni(s.injector.get(mi,"en-US")||"en-US"),this._moduleDoBootstrap(s),s))})})}bootstrapModule(t,e=[]){const n=Wi({},e);return function(t,e,n){const r=new oi(n);return Promise.resolve(r)}(0,0,t).then(t=>this.bootstrapModuleFactory(t,n))}_moduleDoBootstrap(t){const e=t.injector.get(qi);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(t=>e.bootstrap(t));else{if(!t.instance.ngDoBootstrap)throw new Error(`The module ${gt(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);t.instance.ngDoBootstrap(e)}this._modules.push(t)}onDestroy(t){this._destroyListeners.push(t)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(t=>t.destroy()),this._destroyListeners.forEach(t=>t()),this._destroyed=!0}get destroyed(){return this._destroyed}}return t.\u0275fac=function(e){return new(e||t)(Zt(Os))},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})();function Wi(t,e){return Array.isArray(e)?e.reduce(Wi,t):Object.assign(Object.assign({},t),e)}let qi=(()=>{class t{constructor(t,e,n,r,s,o){this._zone=t,this._console=e,this._injector=n,this._exceptionHandler=r,this._componentFactoryResolver=s,this._initStatus=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._enforceNoNewChanges=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._enforceNoNewChanges=zn(),this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new w(t=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{t.next(this._stable),t.complete()})}),l=new w(t=>{let e;this._zone.runOutsideAngular(()=>{e=this._zone.onStable.subscribe(()=>{Oi.assertNotInAngularZone(),Ii(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,t.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{Oi.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{t.next(!1)}))});return()=>{e.unsubscribe(),n.unsubscribe()}});this.isStable=function(...t){let e=Number.POSITIVE_INFINITY,n=null,r=t[t.length-1];var s;return(s=r)&&"function"==typeof s.schedule?(n=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(e=t.pop())):"number"==typeof r&&(e=t.pop()),null===n&&1===t.length&&t[0]instanceof w?t[0]:function(t=Number.POSITIVE_INFINITY){return function t(e,n,r=Number.POSITIVE_INFINITY){return"function"==typeof n?s=>s.pipe(t((t,r)=>L(e(t,r)).pipe(j((e,s)=>n(t,e,r,s))),r)):("number"==typeof n&&(r=n),t=>t.lift(new B(e,r)))}(b,t)}(e)(function(t,e){return e?H(t,e):new w(I(t))}(t,n))}(i,l.pipe(t=>{return Z()((e=Q,function(t){let n;n="function"==typeof e?e:function(){return e};const r=Object.create(t,W);return r.source=t,r.subjectFactory=n,r})(t));var e}))}bootstrap(t,e){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=t instanceof _o?t:this._componentFactoryResolver.resolveComponentFactory(t),this.componentTypes.push(n.componentType);const r=n.isBoundToModule?void 0:this._injector.get(Wt),s=n.create(Os.NULL,[],e||n.selector,r);s.onDestroy(()=>{this._unloadComponent(s)});const o=s.injector.get(Fi,null);return o&&s.injector.get(Hi).registerApplication(s.location.nativeElement,o),this._loadComponent(s),zn()&&this._console.log("Angular is running in development mode. Call enableProdMode() to enable production mode."),s}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let t of this._views)t.detectChanges();if(this._enforceNoNewChanges)for(let t of this._views)t.checkNoChanges()}catch(t){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(t))}finally{this._runningTick=!1}}attachView(t){const e=t;this._views.push(e),e.attachToAppRef(this)}detachView(t){const e=t;Qi(this._views,e),e.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(pi,[]).concat(this._bootstrapListeners).forEach(e=>e(t))}_unloadComponent(t){this.detachView(t.hostView),Qi(this.components,t)}ngOnDestroy(){this._views.slice().forEach(t=>t.destroy())}get viewCount(){return this._views.length}}return t.\u0275fac=function(e){return new(e||t)(Zt(Oi),Zt(gi),Zt(Os),Zt(Gn),Zt(vo),Zt(ai))},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})();function Qi(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Ji=Gi(null,"core",[{provide:fi,useValue:"unknown"},{provide:zi,deps:[Os]},{provide:Hi,deps:[]},{provide:gi,deps:[]}]),Ki=[{provide:qi,useClass:qi,deps:[Oi,gi,Os,Gn,vo,ai]},{provide:Wo,deps:[Oi],useFactory:function(t){let e=[];return t.onStable.subscribe(()=>{for(;e.length;)e.pop()()}),function(t){e.push(t)}}},{provide:ai,useClass:ai,deps:[[new X,li]]},{provide:ki,useClass:ki,deps:[]},ci,{provide:Ho,useFactory:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return Uo},deps:[]},{provide:Lo,useFactory:function(){return Zo},deps:[]},{provide:mi,useFactory:function(t){return ni(t=t||"undefined"!=typeof $localize&&$localize.locale||"en-US"),t},deps:[[new Y(mi),new X,new et]]},{provide:_i,useValue:"USD"}];let Yi=(()=>{class t{constructor(t){}}return t.\u0275mod=le({type:t}),t.\u0275inj=it({factory:function(e){return new(e||t)(Zt(qi))},providers:Ki}),t})(),Xi=null;function tl(){return Xi}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const el=new Nt("DocumentToken");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var nl=function(t){return t[t.Zero=0]="Zero",t[t.One=1]="One",t[t.Two=2]="Two",t[t.Few=3]="Few",t[t.Many=4]="Many",t[t.Other=5]="Other",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class rl{}let sl=(()=>{class t extends rl{constructor(t){super(),this.locale=t}getPluralCategory(t,e){switch(function(t){return function(t){const e=function(t){return t.toLowerCase().replace(/_/g,"-")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t);let n=Xo(e);if(n)return n;const r=e.split("-")[0];if(n=Xo(r),n)return n;if("en"===r)return Ko;throw new Error(`Missing locale data for the locale "${t}".`)}(t)[ti.PluralCase]}(e||this.locale)(t)){case nl.Zero:return"zero";case nl.One:return"one";case nl.Two:return"two";case nl.Few:return"few";case nl.Many:return"many";default:return"other"}}}return t.\u0275fac=function(e){return new(e||t)(Zt(mi))},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})(),ol=(()=>{class t{}return t.\u0275mod=le({type:t}),t.\u0275inj=it({factory:function(e){return new(e||t)},providers:[{provide:rl,useClass:sl}]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class il extends
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license Angular v10.0.14
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class extends class{}{constructor(){super()}supportsDOMEvents(){return!0}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */{static makeCurrent(){var t;t=new il,Xi||(Xi=t)}getProperty(t,e){return t[e]}log(t){window.console&&window.console.log&&window.console.log(t)}logGroup(t){window.console&&window.console.group&&window.console.group(t)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(t,e,n){return t.addEventListener(e,n,!1),()=>{t.removeEventListener(e,n,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){return t.parentNode&&t.parentNode.removeChild(t),t}getValue(t){return t.value}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(t){const e=al||(al=document.querySelector("base"),al)?al.getAttribute("href"):null;return null==e?null:(n=e,ll||(ll=document.createElement("a")),ll.setAttribute("href",n),"/"===ll.pathname.charAt(0)?ll.pathname:"/"+ll.pathname);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}resetBaseElement(){al=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(t){
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return function(t,e){e=encodeURIComponent(e);for(const n of t.split(";")){const t=n.indexOf("="),[r,s]=-1==t?[n,""]:[n.slice(0,t),n.slice(t+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}(document.cookie,t)}}let ll,al=null;const ul=new Nt("TRANSITION_ID"),cl=[{provide:li,useFactory:function(t,e,n){return()=>{n.get(ai).donePromise.then(()=>{const n=tl();Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e=>e.getAttribute("ng-transition")===t).forEach(t=>n.remove(t))})}},deps:[ul,el,Os],multi:!0}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class hl{static init(){var t;t=new hl,Ui=t}addToWindow(t){At.getAngularTestability=(e,n=!0)=>{const r=t.findTestabilityInTree(e,n);if(null==r)throw new Error("Could not find testability for element.");return r},At.getAllAngularTestabilities=()=>t.getAllTestabilities(),At.getAllAngularRootElements=()=>t.getAllRootElements(),At.frameworkStabilizers||(At.frameworkStabilizers=[]),At.frameworkStabilizers.push(t=>{const e=At.getAllAngularTestabilities();let n=e.length,r=!1;const s=function(e){r=r||e,n--,0==n&&t(r)};e.forEach((function(t){t.whenStable(s)}))})}findTestabilityInTree(t,e,n){if(null==e)return null;const r=t.getTestability(e);return null!=r?r:n?tl().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const dl=new Nt("EventManagerPlugins");let fl=(()=>{class t{constructor(t,e){this._zone=e,this._eventNameToPlugin=new Map,t.forEach(t=>t.manager=this),this._plugins=t.slice().reverse()}addEventListener(t,e,n){return this._findPluginFor(e).addEventListener(t,e,n)}addGlobalEventListener(t,e,n){return this._findPluginFor(e).addGlobalEventListener(t,e,n)}getZone(){return this._zone}_findPluginFor(t){const e=this._eventNameToPlugin.get(t);if(e)return e;const n=this._plugins;for(let r=0;r<n.length;r++){const e=n[r];if(e.supports(t))return this._eventNameToPlugin.set(t,e),e}throw new Error("No event manager plugin found for event "+t)}}return t.\u0275fac=function(e){return new(e||t)(Zt(dl),Zt(Oi))},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})();class pl{constructor(t){this._doc=t}addGlobalEventListener(t,e,n){const r=tl().getGlobalEventTarget(this._doc,t);if(!r)throw new Error(`Unsupported event target ${r} for event ${e}`);return this.addEventListener(r,e,n)}}let gl=(()=>{class t{constructor(){this._stylesSet=new Set}addStyles(t){const e=new Set;t.forEach(t=>{this._stylesSet.has(t)||(this._stylesSet.add(t),e.add(t))}),this.onStylesAdded(e)}onStylesAdded(t){}getAllStyles(){return Array.from(this._stylesSet)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})(),ml=(()=>{class t extends gl{constructor(t){super(),this._doc=t,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(t.head)}_addStylesToHost(t,e){t.forEach(t=>{const n=this._doc.createElement("style");n.textContent=t,this._styleNodes.add(e.appendChild(n))})}addHost(t){this._addStylesToHost(this._stylesSet,t),this._hostNodes.add(t)}removeHost(t){this._hostNodes.delete(t)}onStylesAdded(t){this._hostNodes.forEach(e=>this._addStylesToHost(t,e))}ngOnDestroy(){this._styleNodes.forEach(t=>tl().remove(t))}}return t.\u0275fac=function(e){return new(e||t)(Zt(el))},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const _l={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},yl=/%COMP%/g;function vl(t,e,n){for(let r=0;r<e.length;r++){let s=e[r];Array.isArray(s)?vl(t,s,n):(s=s.replace(yl,t),n.push(s))}return n}function bl(t){return e=>{if("__ngUnwrap__"===e)return t;!1===t(e)&&(e.preventDefault(),e.returnValue=!1)}}let wl=(()=>{class t{constructor(t,e,n){this.eventManager=t,this.sharedStylesHost=e,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new Cl(t)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;switch(e.encapsulation){case Xt.Emulated:{let n=this.rendererByCompId.get(e.id);return n||(n=new El(this.eventManager,this.sharedStylesHost,e,this.appId),this.rendererByCompId.set(e.id,n)),n.applyToHost(t),n}case Xt.Native:case Xt.ShadowDom:return new xl(this.eventManager,this.sharedStylesHost,t,e);default:if(!this.rendererByCompId.has(e.id)){const t=vl(e.id,e.styles,[]);this.sharedStylesHost.addStyles(t),this.rendererByCompId.set(e.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return t.\u0275fac=function(e){return new(e||t)(Zt(fl),Zt(ml),Zt(ui))},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})();class Cl{constructor(t){this.eventManager=t,this.data=Object.create(null)}destroy(){}createElement(t,e){return e?document.createElementNS(_l[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){t.appendChild(e)}insertBefore(t,e,n){t&&t.insertBefore(e,n)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let n="string"==typeof t?document.querySelector(t):t;if(!n)throw new Error(`The selector "${t}" did not match any elements`);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,r){if(r){e=r+":"+e;const s=_l[r];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){const r=_l[n];r?t.removeAttributeNS(r,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,r){r&Eo.DashCase?t.style.setProperty(e,n,r&Eo.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&Eo.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t[e]=n}setValue(t,e){t.nodeValue=e}listen(t,e,n){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,bl(n)):this.eventManager.addEventListener(t,e,bl(n))}}class El extends Cl{constructor(t,e,n,r){super(t),this.component=n;const s=vl(r+"-"+n.id,n.styles,[]);e.addStyles(s),this.contentAttr="_ngcontent-%COMP%".replace(yl,r+"-"+n.id),this.hostAttr=function(t){return"_nghost-%COMP%".replace(yl,t)}(r+"-"+n.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}}class xl extends Cl{constructor(t,e,n,r){super(t),this.sharedStylesHost=e,this.hostEl=n,this.component=r,this.shadowRoot=r.encapsulation===Xt.ShadowDom?n.attachShadow({mode:"open"}):n.createShadowRoot(),this.sharedStylesHost.addHost(this.shadowRoot);const s=vl(r.id,r.styles,[]);for(let o=0;o<s.length;o++){const t=document.createElement("style");t.textContent=s[o],this.shadowRoot.appendChild(t)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}const Al=["alt","control","meta","shift"],kl={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Sl={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},Tl={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Il=[{provide:fi,useValue:"browser"},{provide:di,useValue:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){il.makeCurrent(),hl.init()},multi:!0},{provide:el,useFactory:function(){return function(t){Ae=t}(document),document},deps:[]}],Ol=[[],{provide:ms,useValue:"root"},{provide:Gn,useFactory:function(){return new Gn},deps:[]},{provide:dl,useClass:(()=>{class t extends pl{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,n){return t.addEventListener(e,n,!1),()=>this.removeEventListener(t,e,n)}removeEventListener(t,e,n){return t.removeEventListener(e,n)}}return t.\u0275fac=function(e){return new(e||t)(Zt(el))},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})(),multi:!0,deps:[el,Oi,fi]},{provide:dl,useClass:(()=>{class t extends pl{constructor(t){super(t)}supports(e){return null!=t.parseEventName(e)}addEventListener(e,n,r){const s=t.parseEventName(n),o=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>tl().onAndCancel(e,s.domEventName,o))}static parseEventName(e){const n=e.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const s=t._normalizeKey(n.pop());let o="";if(Al.forEach(t=>{const e=n.indexOf(t);e>-1&&(n.splice(e,1),o+=t+".")}),o+=s,0!=n.length||0===s.length)return null;const i={};return i.domEventName=r,i.fullKey=o,i}static getEventFullKey(t){let e="",n=function(t){let e=t.key;if(null==e){if(e=t.keyIdentifier,null==e)return"Unidentified";e.startsWith("U+")&&(e=String.fromCharCode(parseInt(e.substring(2),16)),3===t.location&&Sl.hasOwnProperty(e)&&(e=Sl[e]))}return kl[e]||e}(t);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),Al.forEach(r=>{r!=n&&(0,Tl[r])(t)&&(e+=r+".")}),e+=n,e}static eventCallback(e,n,r){return s=>{t.getEventFullKey(s)===e&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){switch(t){case"esc":return"escape";default:return t}}}return t.\u0275fac=function(e){return new(e||t)(Zt(el))},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})(),multi:!0,deps:[el]},[],{provide:wl,useClass:wl,deps:[fl,ml,ui]},{provide:Co,useExisting:wl},{provide:gl,useExisting:ml},{provide:ml,useClass:ml,deps:[el]},{provide:Fi,useClass:Fi,deps:[Oi]},{provide:fl,useClass:fl,deps:[dl,Oi]},[]];let Vl=(()=>{class t{constructor(t){if(t)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(e){return{ngModule:t,providers:[{provide:ui,useValue:e.appId},{provide:ul,useExisting:ui},cl]}}}return t.\u0275mod=le({type:t}),t.\u0275inj=it({factory:function(e){return new(e||t)(Zt(t,12))},providers:Ol,imports:[ol,Yi]}),t})();"undefined"!=typeof window&&window;const Dl=[{provide:ki,useFactory:()=>new ki}];function Nl(t){for(let e=t.length-1;e>=0;e--)if(void 0!==t[e])return t[e]}function Pl(t){const e=[];return t.forEach(t=>t&&e.push(...t)),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ml=Gi(Ji,"coreDynamic",[{provide:Si,useValue:{},multi:!0},{provide:class{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */,useClass:class{constructor(t){this._defaultOptions=[{useJit:!0,defaultEncapsulation:Xt.Emulated,missingTranslation:yi.Warning},...t]}createCompiler(t=[]){const e={useJit:Nl((n=this._defaultOptions.concat(t)).map(t=>t.useJit)),defaultEncapsulation:Nl(n.map(t=>t.defaultEncapsulation)),providers:Pl(n.map(t=>t.providers)),missingTranslation:Nl(n.map(t=>t.missingTranslation)),preserveWhitespaces:Nl(n.map(t=>t.preserveWhitespaces))};var n;return Os.create([Dl,{provide:o,useFactory:()=>new o({useJit:e.useJit,jitDevMode:zn(),defaultEncapsulation:e.defaultEncapsulation,missingTranslation:e.missingTranslation,preserveWhitespaces:e.preserveWhitespaces}),deps:[]},e.providers]).get(ki)}},deps:[Si]}]);let jl=(()=>{class t extends s{get(t){let e,n;const r=new Promise((t,r)=>{e=t,n=r}),s=new XMLHttpRequest;return s.open("GET",t,!0),s.responseType="text",s.onload=function(){const r=s.response||s.responseText;let o=1223===s.status?204:s.status;0===o&&(o=r?200:0),200<=o&&o<=300?e(r):n("Failed to load "+t)},s.onerror=function(){n("Failed to load "+t)},s.send(),r}}return t.\u0275fac=function(e){return Rl(e||t)},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})();const Rl=Ln(jl),Fl=Gi(Ml,"browserDynamic",[Il,{provide:Si,useValue:{providers:[{provide:s,useClass:jl,deps:[]}]},multi:!0},{provide:fi,useValue:"browser"}]);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Hl(t,e){return new w(n=>{const r=t.length;if(0===r)return void n.complete();const s=new Array(r);let o=0,i=0;for(let l=0;l<r;l++){const a=L(t[l]);let u=!1;n.add(a.subscribe({next:t=>{u||(u=!0,i++),s[l]=t},error:t=>n.error(t),complete:()=>{o++,o!==r&&u||(i===r&&n.next(e?e.reduce((t,e,n)=>(t[e]=s[n],t),{}):s),n.complete())}}))}})}
/**
 * @license Angular v10.0.14
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ll=new Nt("NgValueAccessor"),Bl={provide:Ll,useExisting:yt(()=>Ul),multi:!0};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ul=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"checked",t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(Rs(xo),Rs(bo))},t.\u0275dir=ue({type:t,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(t,e){1&t&&Zs("change",(function(t){return e.onChange(t.target.checked)}))("blur",(function(){return e.onTouched()}))},features:[mo([Bl])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Zl={provide:Ll,useExisting:yt(()=>$l),multi:!0},Gl=new Nt("CompositionEventMode");let $l=(()=>{class t{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=tl()?tl().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(Rs(xo),Rs(bo),Rs(Gl,8))},t.\u0275dir=ue({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&Zs("input",(function(t){return e._handleInput(t.target.value)}))("blur",(function(){return e.onTouched()}))("compositionstart",(function(){return e._compositionStart()}))("compositionend",(function(t){return e._compositionEnd(t.target.value)}))},features:[mo([Zl])]}),t})(),zl=(()=>{class t{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=ue({type:t}),t})(),Wl=(()=>{class t extends zl{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(e){return ql(e||t)},t.\u0275dir=ue({type:t,features:[ro]}),t})();const ql=Ln(Wl);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ql(){throw new Error("unimplemented")}class Jl extends zl{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null,this._rawValidators=[],this._rawAsyncValidators=[]}get validator(){return Ql()}get asyncValidator(){return Ql()}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Kl=(()=>{class t extends class{constructor(t){this._cd=t}get ngClassUntouched(){return!!this._cd.control&&this._cd.control.untouched}get ngClassTouched(){return!!this._cd.control&&this._cd.control.touched}get ngClassPristine(){return!!this._cd.control&&this._cd.control.pristine}get ngClassDirty(){return!!this._cd.control&&this._cd.control.dirty}get ngClassValid(){return!!this._cd.control&&this._cd.control.valid}get ngClassInvalid(){return!!this._cd.control&&this._cd.control.invalid}get ngClassPending(){return!!this._cd.control&&this._cd.control.pending}}{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(Rs(Jl,2))},t.\u0275dir=ue({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&Qs("ng-untouched",e.ngClassUntouched)("ng-touched",e.ngClassTouched)("ng-pristine",e.ngClassPristine)("ng-dirty",e.ngClassDirty)("ng-valid",e.ngClassValid)("ng-invalid",e.ngClassInvalid)("ng-pending",e.ngClassPending)},features:[ro]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Yl(t){return null==t||0===t.length}function Xl(t){return null!=t&&"number"==typeof t.length}const ta=new Nt("NgValidators"),ea=new Nt("NgAsyncValidators"),na=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class ra{static min(t){return e=>{if(Yl(e.value)||Yl(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}static max(t){return e=>{if(Yl(e.value)||Yl(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}static required(t){return Yl(t.value)?{required:!0}:null}static requiredTrue(t){return!0===t.value?null:{required:!0}}static email(t){return Yl(t.value)||na.test(t.value)?null:{email:!0}}static minLength(t){return e=>Yl(e.value)||!Xl(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}static maxLength(t){return e=>Xl(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}static pattern(t){if(!t)return ra.nullValidator;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(Yl(t.value))return null;const r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}static nullValidator(t){return null}static compose(t){if(!t)return null;const e=t.filter(sa);return 0==e.length?null:function(t){return ia(la(t,e))}}static composeAsync(t){if(!t)return null;const e=t.filter(sa);return 0==e.length?null:function(t){
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return function(...t){if(1===t.length){const e=t[0];if(h(e))return Hl(e,null);if(d(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return Hl(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return Hl(t=1===t.length&&h(t[0])?t[0]:t,null).pipe(j(t=>e(...t)))}return Hl(t,null)}(la(t,e).map(oa)).pipe(j(ia))}}}function sa(t){return null!=t}function oa(t){const e=Us(t)?L(t):t;if(!(n=e)||"function"!=typeof n.subscribe)throw new Error("Expected validator to return Promise or Observable.");var n;return e}function ia(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function la(t,e){return e.map(e=>e(t))}function aa(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ua={provide:Ll,useExisting:yt(()=>ca),multi:!0};let ca=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(Rs(xo),Rs(bo))},t.\u0275dir=ue({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,e){1&t&&Zs("input",(function(t){return e.onChange(t.target.value)}))("blur",(function(){return e.onTouched()}))},features:[mo([ua])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ha={provide:Ll,useExisting:yt(()=>fa),multi:!0};let da=(()=>{class t{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=ot({token:t,factory:t.\u0275fac}),t})(),fa=(()=>{class t{constructor(t,e,n,r){this._renderer=t,this._elementRef=e,this._registry=n,this._injector=r,this.onChange=()=>{},this.onTouched=()=>{}}ngOnInit(){this._control=this._injector.get(Jl),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}fireUncheck(t){this.writeValue(t)}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this._throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}_throwNameError(){throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')}}return t.\u0275fac=function(e){return new(e||t)(Rs(xo),Rs(bo),Rs(da),Rs(Os))},t.\u0275dir=ue({type:t,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(t,e){1&t&&Zs("change",(function(){return e.onChange()}))("blur",(function(){return e.onTouched()}))},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[mo([ha])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const pa={provide:Ll,useExisting:yt(()=>ga),multi:!0};let ga=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(t))}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(Rs(xo),Rs(bo))},t.\u0275dir=ue({type:t,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(t,e){1&t&&Zs("change",(function(t){return e.onChange(t.target.value)}))("input",(function(t){return e.onChange(t.target.value)}))("blur",(function(){return e.onTouched()}))},features:[mo([pa])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ma='\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',_a='\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',ya={provide:Ll,useExisting:yt(()=>va),multi:!0};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let va=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){if("function"!=typeof t)throw new Error("compareWith must be a function, but received "+JSON.stringify(t));this._compareWith=t}writeValue(t){this.value=t;const e=this._getOptionId(t);null==e&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const n=function(t,e){return null==t?""+e:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}(e,t);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}registerOnChange(t){this.onChange=e=>{this.value=this._getOptionValue(e),t(this.value)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e),t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e):t}}return t.\u0275fac=function(e){return new(e||t)(Rs(xo),Rs(bo))},t.\u0275dir=ue({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(t,e){1&t&&Zs("change",(function(t){return e.onChange(t.target.value)}))("blur",(function(){return e.onTouched()}))},inputs:{compareWith:"compareWith"},features:[mo([ya])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ba={provide:Ll,useExisting:yt(()=>wa),multi:!0};let wa=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){if("function"!=typeof t)throw new Error("compareWith must be a function, but received "+JSON.stringify(t));this._compareWith=t}writeValue(t){let e;if(this.value=t,Array.isArray(t)){const n=t.map(t=>this._getOptionId(t));e=(t,e)=>{t._setSelected(n.indexOf(e.toString())>-1)}}else e=(t,e)=>{t._setSelected(!1)};this._optionMap.forEach(e)}registerOnChange(t){this.onChange=e=>{const n=[];if(void 0!==e.selectedOptions){const t=e.selectedOptions;for(let e=0;e<t.length;e++){const r=t.item(e),s=this._getOptionValue(r.value);n.push(s)}}else{const t=e.options;for(let e=0;e<t.length;e++){const r=t.item(e);if(r.selected){const t=this._getOptionValue(r.value);n.push(t)}}}this.value=n,t(n)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(t){const e=(this._idCounter++).toString();return this._optionMap.set(e,t),e}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e)._value,t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e)._value:t}}return t.\u0275fac=function(e){return new(e||t)(Rs(xo),Rs(bo))},t.\u0275dir=ue({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(t,e){1&t&&Zs("change",(function(t){return e.onChange(t.target)}))("blur",(function(){return e.onTouched()}))},inputs:{compareWith:"compareWith"},features:[mo([ba])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ca(t,e){return[...e.path,t]}function Ea(t,e){t||Aa(e,"Cannot find control with"),e.valueAccessor||Aa(e,"No value accessor for form control with"),t.validator=ra.compose([t.validator,e.validator]),t.asyncValidator=ra.composeAsync([t.asyncValidator,e.asyncValidator]),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&xa(t,e)})}(t,e),function(t,e){t.registerOnChange((t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&xa(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),e.valueAccessor.setDisabledState&&t.registerOnDisabledChange(t=>{e.valueAccessor.setDisabledState(t)}),e._rawValidators.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(()=>t.updateValueAndValidity())}),e._rawAsyncValidators.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(()=>t.updateValueAndValidity())})}function xa(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Aa(t,e){let n;throw n=t.path.length>1?`path: '${t.path.join(" -> ")}'`:t.path[0]?`name: '${t.path}'`:"unspecified name attribute",new Error(`${e} ${n}`)}function ka(t){return null!=t?ra.compose(aa(t)):null}function Sa(t){return null!=t?ra.composeAsync(aa(t)):null}const Ta=[Ul,ga,ca,va,wa,fa];function Ia(t){const e=Va(t)?t.validators:t;return Array.isArray(e)?ka(e):e||null}function Oa(t,e){const n=Va(e)?e.asyncValidators:t;return Array.isArray(n)?Sa(n):n||null}function Va(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class Da{constructor(t,e){this.validator=t,this.asyncValidator=e,this._onCollectionChange=()=>{},this.pristine=!0,this.touched=!1,this._onDisabledChange=[]}get parent(){return this._parent}get valid(){return"VALID"===this.status}get invalid(){return"INVALID"===this.status}get pending(){return"PENDING"==this.status}get disabled(){return"DISABLED"===this.status}get enabled(){return"DISABLED"!==this.status}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this.validator=Ia(t)}setAsyncValidators(t){this.asyncValidator=Oa(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status="PENDING",!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="DISABLED",this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="VALID",this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),"VALID"!==this.status&&"PENDING"!==this.status||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?"DISABLED":"VALID"}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status="PENDING";const e=oa(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>this.setErrors(e,{emitEvent:t}))}}_cancelExistingSubscription(){this._asyncValidationSubscription&&this._asyncValidationSubscription.unsubscribe()}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let r=t;return e.forEach(t=>{r=r instanceof Pa?r.controls.hasOwnProperty(t)?r.controls[t]:null:r instanceof Ma&&r.at(t)||null}),r}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new ii,this.statusChanges=new ii}_calculateStatus(){return this._allControlsDisabled()?"DISABLED":this.errors?"INVALID":this._anyControlsHaveStatus("PENDING")?"PENDING":this._anyControlsHaveStatus("INVALID")?"INVALID":"VALID"}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Va(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&this._parent&&this._parent.dirty&&!this._parent._anyControlsDirty()}}class Na extends Da{constructor(t=null,e,n){super(Ia(e),Oa(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),this._initObservables()}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_clearChangeFns(){this._onChange=[],this._onDisabledChange=[],this._onCollectionChange=()=>{}}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class Pa extends Da{constructor(t,e,n){super(Ia(e),Oa(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof Na?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>t(this.controls[e],e))}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,r)=>{n=e(n,t,r)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class Ma extends Da{constructor(t,e,n){super(Ia(e),Oa(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof Na?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error("Cannot find form control at index "+t)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}const ja={provide:Wl,useExisting:yt(()=>Fa)},Ra=(()=>Promise.resolve(null))();let Fa=(()=>{class t extends Wl{constructor(t,e){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new ii,this.form=new Pa({},ka(t),Sa(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){Ra.then(()=>{const e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),Ea(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){Ra.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name),function(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}(this._directives,t)})}addFormGroup(t){Ra.then(()=>{const e=this._findContainer(t.path),n=new Pa({});(function(t,e){null==t&&Aa(e,"Cannot find control with"),t.validator=ra.compose([t.validator,e.validator]),t.asyncValidator=ra.composeAsync([t.asyncValidator,e.asyncValidator])})(n,t),e.registerControl(t.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){Ra.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){Ra.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,e=this._directives,this.form._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)}),this.ngSubmit.emit(t),!1;var e}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return t.\u0275fac=function(e){return new(e||t)(Rs(ta,10),Rs(ea,10))},t.\u0275dir=ue({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,e){1&t&&Zs("submit",(function(t){return e.onSubmit(t)}))("reset",(function(){return e.onReset()}))},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[mo([ja]),ro]}),t})(),Ha=(()=>{class t extends Wl{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return Ca(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}get validator(){return ka(this._validators)}get asyncValidator(){return Sa(this._asyncValidators)}_checkParentType(){}}return t.\u0275fac=function(e){return La(e||t)},t.\u0275dir=ue({type:t,features:[ro]}),t})();const La=Ln(Ha);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ba{static modelParentException(){throw new Error('\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      \n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      \n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  ')}static formGroupNameException(){throw new Error(`\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ${ma}\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ${_a}`)}static missingNameException(){throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">')}static modelGroupParentException(){throw new Error(`\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ${ma}\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ${_a}`)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ua={provide:Wl,useExisting:yt(()=>Za)};let Za=(()=>{class t extends Ha{constructor(t,e,n){super(),this._parent=t,this._validators=e,this._asyncValidators=n}_checkParentType(){this._parent instanceof t||this._parent instanceof Fa||Ba.modelGroupParentException()}}return t.\u0275fac=function(e){return new(e||t)(Rs(Wl,5),Rs(ta,10),Rs(ea,10))},t.\u0275dir=ue({type:t,selectors:[["","ngModelGroup",""]],inputs:{name:["ngModelGroup","name"]},exportAs:["ngModelGroup"],features:[mo([Ua]),ro]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ga={provide:Jl,useExisting:yt(()=>za)},$a=(()=>Promise.resolve(null))();let za=(()=>{class t extends Jl{constructor(t,e,n,r){super(),this.control=new Na,this._registered=!1,this.update=new ii,this._parent=t,this._rawValidators=e||[],this._rawAsyncValidators=n||[],this.valueAccessor=function(t,e){if(!e)return null;Array.isArray(e)||Aa(t,"Value accessor was not provided as an array for form control with");let n=void 0,r=void 0,s=void 0;return e.forEach(e=>{var o;e.constructor===$l?n=e:(o=e,Ta.some(t=>o.constructor===t)?(r&&Aa(t,"More than one built-in value accessor matches form control with"),r=e):(s&&Aa(t,"More than one custom value accessor matches form control with"),s=e))}),s||r||n||(Aa(t,"No valid value accessor for form control with"),null)}(this,r)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?Ca(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}get validator(){return ka(this._rawValidators)}get asyncValidator(){return Sa(this._rawAsyncValidators)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){Ea(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){!(this._parent instanceof Za)&&this._parent instanceof Ha?Ba.formGroupNameException():this._parent instanceof Za||this._parent instanceof Fa||Ba.modelParentException()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()||this.name||Ba.missingNameException()}_updateValue(t){$a.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const e=t.isDisabled.currentValue,n=""===e||e&&"false"!==e;$a.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable()})}}return t.\u0275fac=function(e){return new(e||t)(Rs(Wl,9),Rs(ta,10),Rs(ea,10),Rs(Ll,10))},t.\u0275dir=ue({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[mo([Ga]),ro,be]}),t})(),Wa=(()=>{class t{}return t.\u0275mod=le({type:t}),t.\u0275inj=it({factory:function(e){return new(e||t)}}),t})(),qa=(()=>{class t{}return t.\u0275mod=le({type:t}),t.\u0275inj=it({factory:function(e){return new(e||t)},providers:[da],imports:[Wa]}),t})(),Qa=(()=>{class t{constructor(){this.first=null,this.second=null,this.res=""}sum(){this.res=Number(this.first)+Number(this.second)}diff(){this.res=Number(this.first)-Number(this.second)}mult(){this.res=Number(this.first)*Number(this.second)}div(){this.res=0!=this.second?Number(this.first)/Number(this.second):" \u0422\u044b \u0435\u0431\u0430\u043d\u0443\u0442\u044b\u0439 \u043d\u0430 \u043d\u0443\u043b\u044c \u0434\u0435\u043b\u0438\u0442\u044c?"}clear(){this.first=null,this.second=null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=re({type:t,selectors:[["my-app"]],decls:19,vars:3,consts:[[3,"ngModel","ngModelChange"],[3,"click"]],template:function(t,e){1&t&&(Ls(0,"label"),to(1,"first:"),Bs(),Ls(2,"input",0),Zs("ngModelChange",(function(t){return e.first=t})),Bs(),Ls(3,"p"),Ls(4,"label"),to(5,"second:"),Bs(),Ls(6,"input",0),Zs("ngModelChange",(function(t){return e.second=t})),Bs(),Bs(),Ls(7,"button",1),Zs("click",(function(){return e.sum()})),to(8,"+"),Bs(),Ls(9,"button",1),Zs("click",(function(){return e.diff()})),to(10,"-"),Bs(),Ls(11,"button",1),Zs("click",(function(){return e.mult()})),to(12,"\xd7"),Bs(),Ls(13,"button",1),Zs("click",(function(){return e.div()})),to(14,"\xf7"),Bs(),Ls(15,"button",1),Zs("click",(function(){return e.clear()})),to(16,"C"),Bs(),Ls(17,"p"),to(18),Bs()),2&t&&(hr(2),Fs("ngModel",e.first),hr(4),Fs("ngModel",e.second),hr(12),eo("Result:",e.res,""))},directives:[$l,Kl,za],encapsulation:2}),t})(),Ja=(()=>{class t{}return t.\u0275mod=le({type:t,bootstrap:[Qa]}),t.\u0275inj=it({factory:function(e){return new(e||t)},imports:[[Vl,qa]]}),t})();Fl().bootstrapModule(Ja)},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0]]]);