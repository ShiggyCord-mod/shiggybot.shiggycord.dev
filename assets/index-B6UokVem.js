var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function ee(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function j(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function M(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,M(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ee(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),M(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ee(a,u),c+=M(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ee(a,u++),c+=M(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return M(j(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function N(e,t,n){if(e==null)return e;var r=[],i=0;return M(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function te(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var P=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},F={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=F,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:te}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,P)}catch(e){P(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&ee(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ee(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function ee(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ee(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),ee=Symbol.iterator;function j(e){return typeof e!=`object`||!e?null:(e=ee&&e[ee]||e[`@@iterator`],typeof e==`function`?e:null)}var M=Symbol.for(`react.client.reference`);function N(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===M?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?N(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return N(e(t))}catch{}}return null}var te=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},re=[],ie=-1;function ae(e){return{current:e}}function oe(e){0>ie||(e.current=re[ie],re[ie]=null,ie--)}function I(e,t){ie++,re[ie]=e.current,e.current=t}var se=ae(null),ce=ae(null),le=ae(null),ue=ae(null);function de(e,t){switch(I(le,t),I(ce,e),I(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ud(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ud(t),e=Wd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}oe(se),I(se,e)}function fe(){oe(se),oe(ce),oe(le)}function pe(e){e.memoizedState!==null&&I(ue,e);var t=se.current,n=Wd(t,e.type);t!==n&&(I(ce,e),I(se,n))}function me(e){ce.current===e&&(oe(se),oe(ce)),ue.current===e&&(oe(ue),ep._currentValue=ne)}var he,ge;function _e(e){if(he===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);he=t&&t[1]||``,ge=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+he+e+ge}var ve=!1;function ye(e,t){if(!e||ve)return``;ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?_e(n):``}function be(e,t){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e(`Lazy`);case 13:return e.child!==t&&t!==null?_e(`Suspense Fallback`):_e(`Suspense`);case 19:return _e(`SuspenseList`);case 0:case 15:return ye(e.type,!1);case 11:return ye(e.type.render,!1);case 1:return ye(e.type,!0);case 31:return _e(`Activity`);default:return``}}function xe(e){try{var t=``,n=null;do t+=be(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Se=Object.prototype.hasOwnProperty,Ce=t.unstable_scheduleCallback,we=t.unstable_cancelCallback,Te=t.unstable_shouldYield,Ee=t.unstable_requestPaint,De=t.unstable_now,Oe=t.unstable_getCurrentPriorityLevel,ke=t.unstable_ImmediatePriority,Ae=t.unstable_UserBlockingPriority,je=t.unstable_NormalPriority,Me=t.unstable_LowPriority,Ne=t.unstable_IdlePriority,Pe=t.log,Fe=t.unstable_setDisableYieldValue,Ie=null,Le=null;function Re(e){if(typeof Pe==`function`&&Fe(e),Le&&typeof Le.setStrictMode==`function`)try{Le.setStrictMode(Ie,e)}catch{}}var ze=Math.clz32?Math.clz32:He,Be=Math.log,Ve=Math.LN2;function He(e){return e>>>=0,e===0?32:31-(Be(e)/Ve|0)|0}var Ue=256,We=262144,Ge=4194304;function Ke(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ke(n))):i=Ke(o):i=Ke(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ke(n))):i=Ke(o)):i=Ke(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Je(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ye(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var e=Ge;return Ge<<=1,!(Ge&62914560)&&(Ge=4194304),e}function Ze(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $e(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ze(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&et(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function et(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ze(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function tt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function nt(e,t){var n=t&-t;return n=n&42?1:rt(n),(n&(e.suspendedLanes|t))===0?n:0}function rt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function it(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function at(){var e=F.p;return e===0?(e=window.event,e===void 0?32:gp(e.type)):e}function ot(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var st=Math.random().toString(36).slice(2),ct=`__reactFiber$`+st,lt=`__reactProps$`+st,ut=`__reactContainer$`+st,dt=`__reactEvents$`+st,ft=`__reactListeners$`+st,pt=`__reactHandles$`+st,mt=`__reactResources$`+st,ht=`__reactMarker$`+st;function gt(e){delete e[ct],delete e[lt],delete e[dt],delete e[ft],delete e[pt]}function _t(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pf(e);e!==null;){if(n=e[ct])return n;e=pf(e)}return t}e=n,n=e.parentNode}return null}function vt(e){if(e=e[ct]||e[ut]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function bt(e){var t=e[mt];return t||=e[mt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function xt(e){e[ht]=!0}var St=new Set,Ct={};function wt(e,t){Tt(e,t),Tt(e+`Capture`,t)}function Tt(e,t){for(Ct[e]=t,e=0;e<t.length;e++)St.add(t[e])}var Et=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Dt={},Ot={};function kt(e){return Se.call(Ot,e)?!0:Se.call(Dt,e)?!1:Et.test(e)?Ot[e]=!0:(Dt[e]=!0,!1)}function At(e,t,n){if(kt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function jt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Mt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Nt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Pt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ft(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function It(e){if(!e._valueTracker){var t=Pt(e)?`checked`:`value`;e._valueTracker=Ft(e,t,``+e[t])}}function Lt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Pt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Rt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var L=/[\n"\\]/g;function zt(e){return e.replace(L,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Bt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Nt(t)):e.value!==``+Nt(t)&&(e.value=``+Nt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ht(e,o,Nt(n)):Ht(e,o,Nt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Nt(s):e.removeAttribute(`name`)}function Vt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){It(e);return}n=n==null?``:``+Nt(n),t=t==null?n:``+Nt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),It(e)}function Ht(e,t,n){t===`number`&&Rt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ut(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wt(e,t,n){if(t!=null&&(t=``+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Nt(n)}function Gt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(te(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Nt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),It(e)}function Kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Jt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Yt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Jt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Jt(e,o,t[o])}function Xt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Zt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Qt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $t(e){return Qt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function en(){}var tn=null;function nn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rn=null,an=null;function on(e){var t=vt(e);if(t&&(e=t.stateNode)){var n=e[lt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+zt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[lt]||null;if(!a)throw Error(i(90));Bt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Lt(r)}break a;case`textarea`:Wt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}}}var sn=!1;function cn(e,t,n){if(sn)return e(t,n);sn=!0;try{return e(t)}finally{if(sn=!1,(rn!==null||an!==null)&&(wu(),rn&&(t=rn,e=an,an=rn=null,on(t),e)))for(t=0;t<e.length;t++)on(e[t])}}function ln(e,t){var n=e.stateNode;if(n===null)return null;var r=n[lt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var un=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),dn=!1;if(un)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){dn=!0}}),window.addEventListener(`test`,fn,fn),window.removeEventListener(`test`,fn,fn)}catch{dn=!1}var pn=null,mn=null,hn=null;function gn(){if(hn)return hn;var e,t=mn,n=t.length,r,i=`value`in pn?pn.value:pn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return hn=i.slice(e,1<r?1-r:void 0)}function _n(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vn(){return!0}function yn(){return!1}function bn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?vn:yn,this.isPropagationStopped=yn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=vn)},persist:function(){},isPersistent:vn}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=bn(xn),Cn=h({},xn,{view:0,detail:0}),wn=bn(Cn),Tn,En,Dn,On=h({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Dn&&(Dn&&e.type===`mousemove`?(Tn=e.screenX-Dn.screenX,En=e.screenY-Dn.screenY):En=Tn=0,Dn=e),Tn)},movementY:function(e){return`movementY`in e?e.movementY:En}}),kn=bn(On),An=bn(h({},On,{dataTransfer:0})),jn=bn(h({},Cn,{relatedTarget:0})),Mn=bn(h({},xn,{animationName:0,elapsedTime:0,pseudoElement:0})),Nn=bn(h({},xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Pn=bn(h({},xn,{data:0})),Fn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},In={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Ln={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Rn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ln[e])?!!t[e]:!1}function zn(){return Rn}var Bn=bn(h({},Cn,{key:function(e){if(e.key){var t=Fn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=_n(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?In[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zn,charCode:function(e){return e.type===`keypress`?_n(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?_n(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Vn=bn(h({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Hn=bn(h({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zn})),Un=bn(h({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Wn=bn(h({},On,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Gn=bn(h({},xn,{newState:0,oldState:0})),Kn=[9,13,27,32],qn=un&&`CompositionEvent`in window,Jn=null;un&&`documentMode`in document&&(Jn=document.documentMode);var Yn=un&&`TextEvent`in window&&!Jn,Xn=un&&(!qn||Jn&&8<Jn&&11>=Jn),Zn=` `,Qn=!1;function $n(e,t){switch(e){case`keyup`:return Kn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function er(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var tr=!1;function nr(e,t){switch(e){case`compositionend`:return er(t);case`keypress`:return t.which===32?(Qn=!0,Zn):null;case`textInput`:return e=t.data,e===Zn&&Qn?null:e;default:return null}}function rr(e,t){if(tr)return e===`compositionend`||!qn&&$n(e,t)?(e=gn(),hn=mn=pn=null,tr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Xn&&t.locale!==`ko`?null:t.data;default:return null}}var ir={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ir[e.type]:t===`textarea`}function or(e,t,n,r){rn?an?an.push(r):an=[r]:rn=r,t=Dd(t,`onChange`),0<t.length&&(n=new Sn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var sr=null,cr=null;function lr(e){bd(e,0)}function ur(e){if(Lt(yt(e)))return e}function dr(e,t){if(e===`change`)return t}var fr=!1;if(un){var pr;if(un){var mr=`oninput`in document;if(!mr){var hr=document.createElement(`div`);hr.setAttribute(`oninput`,`return;`),mr=typeof hr.oninput==`function`}pr=mr}else pr=!1;fr=pr&&(!document.documentMode||9<document.documentMode)}function gr(){sr&&(sr.detachEvent(`onpropertychange`,_r),cr=sr=null)}function _r(e){if(e.propertyName===`value`&&ur(cr)){var t=[];or(t,cr,e,nn(e)),cn(lr,t)}}function vr(e,t,n){e===`focusin`?(gr(),sr=t,cr=n,sr.attachEvent(`onpropertychange`,_r)):e===`focusout`&&gr()}function yr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ur(cr)}function br(e,t){if(e===`click`)return ur(t)}function xr(e,t){if(e===`input`||e===`change`)return ur(t)}function Sr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Cr=typeof Object.is==`function`?Object.is:Sr;function wr(e,t){if(Cr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Se.call(t,i)||!Cr(e[i],t[i]))return!1}return!0}function Tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,t){var n=Tr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Tr(n)}}function Dr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Or(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rt(e.document)}return t}function kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ar=un&&`documentMode`in document&&11>=document.documentMode,jr=null,Mr=null,Nr=null,Pr=!1;function Fr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pr||jr==null||jr!==Rt(r)||(r=jr,`selectionStart`in r&&kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&wr(Nr,r)||(Nr=r,r=Dd(Mr,`onSelect`),0<r.length&&(t=new Sn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Lr={animationend:Ir(`Animation`,`AnimationEnd`),animationiteration:Ir(`Animation`,`AnimationIteration`),animationstart:Ir(`Animation`,`AnimationStart`),transitionrun:Ir(`Transition`,`TransitionRun`),transitionstart:Ir(`Transition`,`TransitionStart`),transitioncancel:Ir(`Transition`,`TransitionCancel`),transitionend:Ir(`Transition`,`TransitionEnd`)},Rr={},zr={};un&&(zr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),`TransitionEvent`in window||delete Lr.transitionend.transition);function Br(e){if(Rr[e])return Rr[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zr)return Rr[e]=t[n];return e}var Vr=Br(`animationend`),Hr=Br(`animationiteration`),Ur=Br(`animationstart`),Wr=Br(`transitionrun`),Gr=Br(`transitionstart`),Kr=Br(`transitioncancel`),qr=Br(`transitionend`),Jr=new Map,Yr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Yr.push(`scrollEnd`);function Xr(e,t){Jr.set(e,t),wt(t,[e])}var Zr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Qr=[],$r=0,ei=0;function ti(){for(var e=$r,t=ei=$r=0;t<e;){var n=Qr[t];Qr[t++]=null;var r=Qr[t];Qr[t++]=null;var i=Qr[t];Qr[t++]=null;var a=Qr[t];if(Qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ai(n,i,a)}}function ni(e,t,n,r){Qr[$r++]=e,Qr[$r++]=t,Qr[$r++]=n,Qr[$r++]=r,ei|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ri(e,t,n,r){return ni(e,t,n,r),oi(e)}function ii(e,t){return ni(e,null,null,t),oi(e)}function ai(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ze(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function oi(e){if(50<hu)throw hu=0,gu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var si={};function ci(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,t,n,r){return new ci(e,t,n,r)}function ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function di(e,t){var n=e.alternate;return n===null?(n=li(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function R(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ui(e)&&(s=1);else if(typeof e==`string`)s=Gf(e,n,se.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=li(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return pi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=li(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=li(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=li(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=li(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function pi(e,t,n,r){return e=li(7,e,r,t),e.lanes=n,e}function mi(e,t,n){return e=li(6,e,null,t),e.lanes=n,e}function hi(e){var t=li(18,null,null,0);return t.stateNode=e,t}function gi(e,t,n){return t=li(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _i=new WeakMap;function vi(e,t){if(typeof e==`object`&&e){var n=_i.get(e);return n===void 0?(t={value:e,source:t,stack:xe(t)},_i.set(e,t),t):n}return{value:e,source:t,stack:xe(t)}}var yi=[],bi=0,xi=null,Si=0,Ci=[],wi=0,z=null,Ti=1,Ei=``;function Di(e,t){yi[bi++]=Si,yi[bi++]=xi,xi=e,Si=t}function Oi(e,t,n){Ci[wi++]=Ti,Ci[wi++]=Ei,Ci[wi++]=z,z=e;var r=Ti;e=Ei;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var a=32-ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ti=1<<32-ze(t)+i|n<<i|r,Ei=a+e}else Ti=1<<a|n<<i|r,Ei=e}function ki(e){e.return!==null&&(Di(e,1),Oi(e,1,0))}function Ai(e){for(;e===xi;)xi=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null;for(;e===z;)z=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null,Ti=Ci[--wi],Ci[wi]=null}function ji(e,t){Ci[wi++]=Ti,Ci[wi++]=Ei,Ci[wi++]=z,Ti=t.id,Ei=t.overflow,z=e}var Mi=null,Ni=null,B=!1,Pi=null,Fi=!1,Ii=Error(i(519));function Li(e){throw Ui(vi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ii}function Ri(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ct]=e,t[lt]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)Z(vd[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),Vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),Gt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=en),t=!0):t=!1,t||Li(e,!0)}function zi(e){for(Mi=e.return;Mi;)switch(Mi.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:Mi=Mi.return}}function Bi(e){if(e!==Mi)return!1;if(!B)return zi(e),B=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Gd(e.type,e.memoizedProps)),n=!n),n&&Ni&&Li(e),zi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ni=ff(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ni=ff(e)}else t===27?(t=Ni,$d(e.type)?(e=df,df=null,Ni=e):Ni=t):Ni=Mi?uf(e.stateNode.nextSibling):null;return!0}function Vi(){Ni=Mi=null,B=!1}function Hi(){var e=Pi;return e!==null&&(tu===null?tu=e:tu.push.apply(tu,e),Pi=null),e}function Ui(e){Pi===null?Pi=[e]:Pi.push(e)}var Wi=ae(null),Gi=null,Ki=null;function qi(e,t,n){I(Wi,t._currentValue),t._currentValue=n}function Ji(e){e._currentValue=Wi.current,oe(Wi)}function Yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Xi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Yi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Yi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Zi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Cr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ue.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[ep]:e.push(ep))}a=a.return}e!==null&&Xi(t,e,n,r),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!Cr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $i(e){Gi=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ea(e){return na(Gi,e)}function ta(e,t){return Gi===null&&$i(e),na(e,t)}function na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ki===null){if(e===null)throw Error(i(308));Ki=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ki=Ki.next=t;return n}var ra=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ia=t.unstable_scheduleCallback,aa=t.unstable_NormalPriority,oa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sa(){return{controller:new ra,data:new Map,refCount:0}}function ca(e){e.refCount--,e.refCount===0&&ia(aa,function(){e.controller.abort()})}var la=null,ua=0,da=0,fa=null;function pa(e,t){if(la===null){var n=la=[];ua=0,da=fd(),fa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ua++,t.then(ma,ma),t}function ma(){if(--ua===0&&la!==null){fa!==null&&(fa.status=`fulfilled`);var e=la;la=null,da=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ha(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ga=P.S;P.S=function(e,t){iu=De(),typeof t==`object`&&t&&typeof t.then==`function`&&pa(e,t),ga!==null&&ga(e,t)};var _a=ae(null);function va(){var e=_a.current;return e===null?Vl.pooledCache:e}function ya(e,t){t===null?I(_a,_a.current):I(_a,t.pool)}function ba(){var e=va();return e===null?null:{parent:oa._currentValue,pool:e}}var xa=Error(i(460)),Sa=Error(i(474)),Ca=Error(i(542)),wa={then:function(){}};function Ta(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ea(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(en,en),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e;default:if(typeof t.status==`string`)t.then(en,en);else{if(e=Vl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e}throw Oa=t,xa}}function Da(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Oa=e,xa):e}}var Oa=null;function ka(){if(Oa===null)throw Error(i(459));var e=Oa;return Oa=null,e}function Aa(e){if(e===xa||e===Ca)throw Error(i(483))}var ja=null,Ma=0;function Na(e){var t=Ma;return Ma+=1,ja===null&&(ja=[]),Ea(ja,e,t)}function Pa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Fa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ia(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=di(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=mi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Da(i)===t.type)?(t=a(t,n.props),Pa(t,n),t.return=e,t):(t=R(n.type,n.key,n.props,null,e.mode,r),Pa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=pi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=mi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=R(t.type,t.key,t.props,null,e.mode,n),Pa(n,t),n.return=e,n;case v:return t=gi(t,e.mode,n),t.return=e,t;case O:return t=Da(t),f(e,t,n)}if(te(t)||j(t))return t=pi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Na(t),n);if(t.$$typeof===C)return f(e,ta(e,t),n);Fa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Da(n),p(e,t,n,r)}if(te(n)||j(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Na(n),r);if(n.$$typeof===C)return p(e,t,ta(e,n),r);Fa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Da(r),m(e,t,n,r,i)}if(te(r)||j(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Na(r),i);if(r.$$typeof===C)return m(e,t,n,ta(t,r),i);Fa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),B&&Di(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return B&&Di(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),B&&Di(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),B&&Di(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return B&&Di(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),B&&Di(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Da(l)===r.type){n(e,r.sibling),c=a(r,o.props),Pa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=pi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=R(o.type,o.key,o.props,null,e.mode,c),Pa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=gi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Da(o),b(e,r,o,c)}if(te(o))return h(e,r,o,c);if(j(o)){if(l=j(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Na(o),c);if(o.$$typeof===C)return b(e,r,ta(e,o),c);Fa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=mi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ma=0;var i=b(e,t,n,r);return ja=null,i}catch(t){if(t===xa||t===Ca)throw t;var a=li(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var La=Ia(!0),Ra=Ia(!1),za=!1;function Ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Va(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Bl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=oi(e),ai(e,null,n),t}return ni(e,r,t,n),oi(e)}function Wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}function Ga(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ka=!1;function qa(){if(Ka){var e=fa;if(e!==null)throw e}}function Ja(e,t,n,r){Ka=!1;var i=e.updateQueue;za=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(K&f)===f:(r&f)===f){f!==0&&f===da&&(Ka=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:za=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Yl|=o,e.lanes=o,e.memoizedState=d}}function Ya(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Xa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ya(n[e],t)}var Za=ae(null),Qa=ae(0);function $a(e,t){e=ql,I(Qa,e),I(Za,t),ql=e|t.baseLanes}function eo(){I(Qa,ql),I(Za,Za.current)}function to(){ql=Qa.current,oe(Za),oe(Qa)}var no=ae(null),ro=null;function io(e){var t=e.alternate;I(lo,lo.current&1),I(no,e),ro===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(ro=e)}function ao(e){I(lo,lo.current),I(no,e),ro===null&&(ro=e)}function oo(e){e.tag===22?(I(lo,lo.current),I(no,e),ro===null&&(ro=e)):so(e)}function so(){I(lo,lo.current),I(no,no.current)}function co(e){oe(no),ro===e&&(ro=null),oe(lo)}var lo=ae(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sf(n)||cf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var V=0,H=null,fo=null,po=null,mo=!1,ho=!1,go=!1,_o=0,vo=0,yo=null,bo=0;function xo(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Cr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return V=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?Bs:Vs,go=!1,a=n(r,i),go=!1,ho&&(a=To(t,n,r,i)),wo(e),a}function wo(e){P.H=zs;var t=fo!==null&&fo.next!==null;if(V=0,po=fo=H=null,mo=!1,vo=0,yo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&Qi(e)&&(ic=!0))}function To(e,t,n,r){H=e;var a=0;do{if(ho&&(yo=null),vo=0,ho=!1,25<=a)throw Error(i(301));if(a+=1,po=fo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=Hs,o=t(n,r)}while(ho);return o}function Eo(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(fo===null?null:fo.memoizedState)!==e&&(H.flags|=1024),t}function Do(){var e=_o!==0;return _o=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}V=0,po=fo=H=null,ho=!1,vo=_o=0,yo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return po===null?H.memoizedState=po=e:po=po.next=e,po}function jo(){if(fo===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=fo.next;var t=po===null?H.memoizedState:po.next;if(t!==null)po=t,fo=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));fo=e,e={memoizedState:fo.memoizedState,baseState:fo.baseState,baseQueue:fo.baseQueue,queue:fo.queue,next:null},po===null?H.memoizedState=po=e:po=po.next=e}return po}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=vo;return vo+=1,yo===null&&(yo=[]),e=Ea(yo,e,t),t=H,(po===null?t.memoizedState:po.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return ea(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),fo,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(V&f)===f:(K&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===da&&(d=!0);else if((V&p)===p){u=u.next,p===da&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,Yl|=p;f=u.action,go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,Yl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Cr(o,e.memoizedState)&&(ic=!0,d&&(n=fa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Cr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=H,a=jo(),o=B;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Cr((fo||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||po!==null&&po.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),Vl===null)throw Error(i(349));o||V&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=Mo(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cr(e,n)}catch{return!0}}function Go(e){var t=ii(e,2);t!==null&&yu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),go){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,fo,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(B){var n=Vl.formState;if(n!==null){a:{var r=H;if(B){if(Ni){b:{for(var i=Ni,a=Fi;i.nodeType!==8;){if(!a){i=null;break b}if(i=uf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ni=uf(i.nextSibling),r=i.data===`F!`;break a}}Li(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,H,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,H,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),fo,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===xa?Ca:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=fo;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=Mo(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();H.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;fo!==null&&r!==null&&So(r,fo.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(H.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=Mo(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(Bl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),go){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||V&1073741824&&!(K&261930)?e.memoizedState=t:(e.memoizedState=n,e=vu(),H.lanes|=e,Yl|=e,n)}function Ss(e,t,n,r){return Cr(n,t)?n:Za.current===null?!(V&42)||V&1073741824&&!(K&261930)?(ic=!0,e.memoizedState=n):(e=vu(),H.lanes|=e,Yl|=e,t):(e=xs(e,n,r),Cr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};P.T=s,Fs(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ha(c,r),_u(e)):Ps(e,t,r,_u(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},_u())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,ne,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},_u())}function Os(){return ea(ep)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_u();e=Ha(n);var r=Ua(t,e,n);r!==null&&(yu(r,t,n),Wa(r,t,n)),t={cache:sa()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=_u();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ri(e,t,n,r),n!==null&&(yu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,_u())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Cr(s,o))return ni(e,t,i,0),Vl===null&&ti(),!1}catch{}if(n=ri(e,t,i,r),n!==null)return yu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ri(e,n,r,2),t!==null&&yu(t,e,2)}function Is(e){var t=e.alternate;return e===H||t!==null&&t===H}function Ls(e,t){ho=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}var zs={readContext:ea,use:Po,useCallback:xo,useContext:xo,useEffect:xo,useImperativeHandle:xo,useLayoutEffect:xo,useInsertionEffect:xo,useMemo:xo,useReducer:xo,useRef:xo,useState:xo,useDebugValue:xo,useDeferredValue:xo,useTransition:xo,useSyncExternalStore:xo,useId:xo,useHostTransitionStatus:xo,useFormState:xo,useActionState:xo,useOptimistic:xo,useMemoCache:xo,useCacheRefresh:xo};zs.useEffectEvent=xo;var Bs={readContext:ea,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:ea,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(go){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(go){Re(!0);try{n(t)}finally{Re(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,H,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=Ao();if(B){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Vl===null)throw Error(i(349));K&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=Vl.identifierPrefix;if(B){var n=Ei,r=Ti;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=_o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,H)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(Bl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ea,use:Po,useCallback:ys,useContext:ea,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),fo.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),fo,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ea,use:Po,useCallback:ys,useContext:ea,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return fo===null?xs(n,e,t):Ss(n,fo.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return fo===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,fo,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_u(),i=Ha(r);i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(yu(t,e,r),Wa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_u(),i=Ha(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(yu(t,e,r),Wa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_u(),r=Ha(n);r.tag=2,t!=null&&(r.callback=t),t=Ua(e,r,n),t!==null&&(yu(t,e,n),Wa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!wr(n,r)||!wr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){Zr(e)}function Ys(e){console.error(e)}function Xs(e){Zr(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ha(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ha(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(su===null?su=new Set([this]):su.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Zi(t,n,a,!0),n=no.current,n!==null){switch(n.tag){case 31:case 13:return ro===null?ju():n.alternate===null&&Jl===0&&(Jl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ju(e,r,a)),!1;case 22:return n.flags|=65536,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ju(e,r,a)),!1}throw Error(i(435,n.tag))}return Ju(e,r,a),ju(),!1}if(B)return t=no.current,t===null?(r!==Ii&&(t=Error(i(423),{cause:r}),Ui(vi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=vi(r,n),a=$s(e.stateNode,r,a),Ga(e,a),Jl!==4&&(Jl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ii&&(e=Error(i(422),{cause:r}),Ui(vi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=vi(o,n),eu===null?eu=[o]:eu.push(o),Jl!==4&&(Jl=2),t===null)return!0;r=vi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ga(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(su===null||!su.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ga(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ra(t,null,n,r):La(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return $i(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),kc(e,t,i)):(B&&s&&ki(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ui(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=R(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?wr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=di(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(wr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,kc(e,t,i)}return hc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ya(t,a===null?null:a.cachePool),a===null?eo():$a(t,a),oo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ya(t,null),eo(),so(t)):(ya(t,a.cachePool),$a(t,a),so(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=va();return a=a===null?null:{parent:oa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ya(t,null),eo(),oo(t),e!==null&&Zi(e,t,r,!0),t.childLanes=i,null}function U(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return La(t,e.child,null,n),e=U(t,t.pendingProps),e.flags|=2,co(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(B){if(r.mode===`hidden`)return e=U(t,r),t.lanes=536870912,uc(null,e);if(ao(t),(e=Ni)?(e=of(e,Fi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:z===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Mi=t,Ni=null)):e=null,e===null)throw Li(t);return t.lanes=536870912,null}return U(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ao(t),a)if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||Zi(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=Vl,r!==null&&(s=nt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ii(e,s),yu(r,e,s),rc;ju(),t=fc(e,t,n)}else e=o.treeContext,Ni=uf(s.nextSibling),Mi=t,B=!0,Pi=null,Fi=!1,e!==null&&ji(t,e),t=U(t,r),t.flags|=4096;return t}return e=di(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return $i(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),kc(e,t,i)):(B&&r&&ki(t),t.flags|=1,ac(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return $i(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),kc(e,t,a)):(B&&r&&ki(t),t.flags|=1,ac(e,t,n,a),t.child)}function _c(e,t,n,r,i){if($i(t),t.stateNode===null){var a=si,o=n.contextType;typeof o==`object`&&o&&(a=ea(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ba(t),o=n.contextType,a.context=typeof o==`object`&&o?ea(o):si,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Ja(t,r,a,i),qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=si,typeof u==`object`&&u&&(o=ea(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),za=!1;var f=t.memoizedState;a.state=f,Ja(t,r,a,i),qa(),l=t.memoizedState,s||f!==l||za?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=za||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Va(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=si,typeof l==`object`&&l&&(c=ea(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),za=!1,f=t.memoizedState,a.state=f,Ja(t,r,a,i),qa();var p=t.memoizedState;o!==d||f!==p||za||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=za||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=La(t,e.child,null,i),t.child=La(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Vi(),t.flags|=256,ac(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:ba()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Ql),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(lo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(B){if(a?io(t):so(t),(e=Ni)?(e=of(e,Fi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:z===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Mi=t,Ni=null)):e=null,e===null)throw Li(t);return cf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(so(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=pi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,uc(null,r)):(io(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(io(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(so(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=pi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,La(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=uc(null,r)):(so(t),t.child=e.child,t.flags|=128,t=null);else if(io(t),cf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ui({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(ic||Zi(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=Vl,s!==null&&(r=nt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ii(e,r),yu(s,e,r),rc;sf(c)||ju(),t=Tc(e,t,n)}else sf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ni=uf(c.nextSibling),Mi=t,B=!0,Pi=null,Fi=!1,e!==null&&ji(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(so(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=di(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=pi(c,a,n,null),c.flags|=2):c=di(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=ba():(l=oa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,uc(e.child,r)):(io(t),n=e.child,e=n.sibling,n=di(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=li(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return La(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yi(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=lo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,I(lo,o),ac(e,t,r,n),r=B?Si:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Zi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=di(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=di(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Qi(e))):!0}function jc(e,t,n){switch(t.tag){case 3:de(t,t.stateNode.containerInfo),qi(t,oa,e.memoizedState.cache),Vi();break;case 27:case 5:pe(t);break;case 4:de(t,t.stateNode.containerInfo);break;case 10:qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ao(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(io(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(io(t),t.flags|=128,null);io(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Zi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(lo,lo.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:qi(t,oa,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!Ac(e,n)&&!(t.flags&128))return ic=!1,jc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,B&&t.flags&1048576&&Oi(t,Si,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Da(t.elementType),t.type=e,typeof e==`function`)ui(e)?(r=qs(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=N(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(de(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Va(e,t),Ja(t,r,null,n);var s=t.memoizedState;if(r=s.cache,qi(t,oa,r),r!==o.cache&&Xi(t,[oa],n,!0),qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}else if(r!==a){a=vi(Error(i(424)),t),Ui(a),t=vc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ni=uf(e.firstChild),Mi=t,B=!0,Pi=null,Fi=!0,n=Ra(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Vi(),r===a){t=kc(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=jf(t.type,null,t.pendingProps,null))?t.memoizedState=n:B||(n=t.type,e=t.pendingProps,r=Hd(le.current).createElement(n),r[ct]=t,r[lt]=e,Id(r,n,e),xt(r),t.stateNode=r):t.memoizedState=jf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pe(t),e===null&&B&&(r=t.stateNode=mf(t.type,t.pendingProps,le.current),Mi=t,Fi=!0,a=Ni,$d(t.type)?(df=a,Ni=uf(r.firstChild)):Ni=a),ac(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&B&&((a=r=Ni)&&(r=rf(r,t.type,t.pendingProps,Fi),r===null?a=!1:(t.stateNode=r,Mi=t,Ni=uf(r.firstChild),Fi=!1,a=!0)),a||Li(t)),pe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Gd(a,o)?r=null:s!==null&&Gd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),ep._currentValue=a),mc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&B&&((e=n=Ni)&&(n=af(n,t.pendingProps,Fi),n===null?e=!1:(t.stateNode=n,Mi=t,Ni=null,e=!0)),e||Li(t)),null;case 13:return Sc(e,t,n);case 4:return de(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=La(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,qi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,$i(t),a=ea(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return $i(t),r=ea(oa),e===null?(a=va(),a===null&&(a=Vl,o=sa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ba(t),qi(t,oa,a)):((e.lanes&n)!==0&&(Va(e,t),Ja(t,null,null,n),qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,qi(t,oa,r),r!==a.cache&&Xi(t,[oa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),qi(t,oa,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Ou())e.flags|=8192;else throw Oa=wa,Sa}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Kf(t))if(Ou())e.flags|=8192;else throw Oa=wa,Sa}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Xe(),e.lanes|=t,$l|=t)}function Lc(e,t){if(!B)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Rc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rc(t),null;case 1:return Rc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ji(oa),fe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Hi())),Rc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(Rc(t),Pc(t,a,null,r,n)):(Rc(t),Fc(t,o))):o?o===e.memoizedState?(Rc(t),t.flags&=-16777217):(Nc(t),Rc(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),Rc(t),Pc(t,a,e,r,n)),null;case 27:if(me(t),n=le.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Rc(t),null}e=se.current,Bi(t)?Ri(t,e):(e=mf(a,r,n),t.stateNode=e,Nc(t))}return Rc(t),null;case 5:if(me(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Rc(t),null}if(o=se.current,Bi(t))Ri(t,o);else{var s=Hd(le.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ct]=t,o[lt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Id(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return Rc(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=le.current,Bi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Mi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||Li(t,!0)}else e=Hd(e).createTextNode(r),e[ct]=t,t.stateNode=e}return Rc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Bi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ct]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Rc(t),e=!1}else n=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(co(t),t):(co(t),null);if(t.flags&128)throw Error(i(558))}return Rc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ct]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Rc(t),a=!1}else a=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(co(t),t):(co(t),null)}return co(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),Rc(t),null);case 4:return fe(),e===null&&Cd(t.stateNode.containerInfo),Rc(t),null;case 10:return Ji(t.type),Rc(t),null;case 19:if(oe(lo),r=t.memoizedState,r===null)return Rc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Lc(r,!1);else{if(Jl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=uo(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fi(n,e),n=n.sibling;return I(lo,lo.current&1|2),B&&Di(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&De()>au&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}else{if(!a)if(e=uo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!B)return Rc(t),null}else 2*De()-r.renderingStartTime>au&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Rc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=De(),e.sibling=null,n=lo.current,I(lo,a?n&1|2:n&1),B&&Di(t,r.treeForkCount),e);case 22:case 23:return co(t),to(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Rc(t),t.subtreeFlags&6&&(t.flags|=8192)):Rc(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&oe(_a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ji(oa),Rc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(oa),fe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return me(t),null;case 31:if(t.memoizedState!==null){if(co(t),t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(co(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(lo),null;case 4:return fe(),null;case 10:return Ji(t.type),null;case 22:case 23:return co(t),to(),e!==null&&oe(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ji(oa),null;case 25:return null;default:return null}}function Vc(e,t){switch(Ai(t),t.tag){case 3:Ji(oa),fe();break;case 26:case 27:case 5:me(t);break;case 4:fe();break;case 31:t.memoizedState!==null&&co(t);break;case 13:co(t);break;case 19:oe(lo);break;case 10:Ji(t.type);break;case 22:case 23:co(t),to(),e!==null&&oe(_a);break;case 24:Ji(oa)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){J(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){J(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){J(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xa(t,n)}catch(t){J(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){J(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){J(e,t,n)}}function W(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){J(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){J(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){J(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Ld(r,e.type,n,t),r[lt]=t}catch(t){J(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$d(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$d(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=en));else if(r!==4&&(r===27&&$d(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&$d(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Id(t,r,n),t[ct]=e,t[lt]=n}catch(t){J(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Bd=lp,e=Or(e),kr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Vd={focusedElem:e,selectionRange:n},lp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){J(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)nf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:nf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){J(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){J(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xa(e,t)}catch(e){J(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:xl(e,n),t===null&&r&4&&qc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zu.bind(null,n),lf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),el=i,tl=a}break;case 30:break;default:xl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var cl=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Le&&typeof Le.onCommitFiberUnmount==`function`)try{Le.onCommitFiberUnmount(Ie,n)}catch{}switch(n.tag){case 26:tl||W(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||W(n,t);var r=cl,i=ll;$d(n.type)&&(cl=n.stateNode,ll=!1),ul(e,t,n),hf(n.stateNode),cl=r,ll=i;break;case 5:tl||W(n,t);case 6:if(r=cl,i=ll,cl=null,ul(e,t,n),cl=r,ll=i,cl!==null)if(ll)try{(cl.nodeType===9?cl.body:cl.nodeName===`HTML`?cl.ownerDocument.body:cl).removeChild(n.stateNode)}catch(e){J(n,t,e)}else try{cl.removeChild(n.stateNode)}catch(e){J(n,t,e)}break;case 18:cl!==null&&(ll?(e=cl,ef(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Fp(e)):ef(cl,n.stateNode));break;case 4:r=cl,i=ll,cl=n.stateNode.containerInfo,ll=!0,ul(e,t,n),cl=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),tl||Uc(4,n,t),ul(e,t,n);break;case 1:tl||(W(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ul(e,t,n),tl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fp(e)}catch(e){J(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fp(e)}catch(e){J(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Qu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if($d(c.type)){cl=c.stateNode,ll=!1;break a}break;case 5:cl=c.stateNode,ll=!1;break a;case 3:case 4:cl=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(cl===null)throw Error(i(160));dl(o,s,a),cl=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(tl||n===null||W(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(tl||n===null||W(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ht]||o[ct]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Id(o,r,n),o[ct]=e,xt(o),r=o;break a;case`link`:var s=Uf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Id(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Uf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Id(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ct]=e,xt(o),r=o}e.stateNode=r}else Wf(a,e.type,e.stateNode);else e.stateNode=Rf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Wf(a,e.type,e.stateNode):Rf(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(tl||n===null||W(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(tl||n===null||W(n,n.return)),e.flags&32){a=e.stateNode;try{Kt(a,``)}catch(t){J(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){J(e,e.return,t)}}break;case 3:if(Hf=null,a=_l,_l=vf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fp(t.containerInfo)}catch(t){J(e,e.return,t)}nl&&(nl=!1,bl(e));break;case 4:r=_l,_l=vf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ru=De()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,gl(t,e),tl=d,el=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){J(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){J(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?tf(m,!0):tf(l.stateNode,!1)}catch(e){J(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Kt(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){J(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:W(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:hf(t.stateNode);case 26:case 5:W(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){J(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ya(c[i],s)}catch(e){J(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:$c(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&qc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ca(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){J(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&qf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=vf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Rl={getCacheForType:function(e){var t=ea(oa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ea(oa).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,Bl=0,Vl=null,G=null,K=0,Hl=0,Ul=null,Wl=!1,Gl=!1,Kl=!1,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=0,$l=0,eu=null,tu=null,nu=!1,ru=0,iu=0,au=1/0,ou=null,su=null,cu=0,lu=null,uu=null,du=0,fu=0,pu=null,mu=null,hu=0,gu=null;function _u(){return Bl&2&&K!==0?K&-K:P.T===null?at():fd()}function vu(){if(Ql===0)if(!(K&536870912)||B){var e=We;We<<=1,!(We&3932160)&&(We=262144),Ql=e}else Ql=536870912;return e=no.current,e!==null&&(e.flags|=32),Ql}function yu(e,t,n){(e===Vl&&(Hl===2||Hl===9)||e.cancelPendingCommit!==null)&&(Eu(e,0),Cu(e,K,Ql,!1)),Qe(e,n),(!(Bl&2)||e!==Vl)&&(e===Vl&&(!(Bl&2)&&(Xl|=n),Jl===4&&Cu(e,K,Ql,!1)),X(e))}function bu(e,t,n){if(Bl&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Je(e,t),a=r?Pu(e,t):Mu(e,t,!0),o=r;do{if(a===0){Gl&&!r&&Cu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Su(n)){a=Mu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=eu;var l=c.current.memoizedState.isDehydrated;if(l&&(Eu(c,s).flags|=256),s=Mu(c,s,!1),s!==2){if(Kl&&!l){c.errorRecoveryDisabledLanes|=o,Xl|=o,a=4;break a}o=tu,tu=a,o!==null&&(tu===null?tu=o:tu.push.apply(tu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Eu(e,0),Cu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Cu(r,t,Ql,!Wl);break a;case 2:tu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=ru+300-De(),10<a)){if(Cu(r,t,Ql,!Wl),qe(r,0,!0)!==0)break a;du=t,r.timeoutHandle=Jd(xu.bind(null,r,n,tu,ou,nu,t,Ql,Xl,$l,Wl,o,`Throttled`,-0,0),a);break a}xu(r,n,tu,ou,nu,t,Ql,Xl,$l,Wl,o,null,-0,0)}}break}while(1);X(e)}function xu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:en},Ml(t,a,d);var m=(a&62914560)===a?ru-De():(a&4194048)===a?iu-De():0;if(m=Yf(d,m),m!==null){du=a,e.cancelPendingCommit=m(Bu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Cu(e,a,o,!l);return}}Bu(e,t,a,n,r,i,o,s,c)}function Su(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Cr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cu(e,t,n,r){t&=~Zl,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ze(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&et(e,n,t)}function wu(){return Bl&6?!0:(ad(0,!1),!1)}function Tu(){if(G!==null){if(Hl===0)var e=G.return;else e=G,Ki=Gi=null,ko(e),ja=null,Ma=0,e=G;for(;e!==null;)Vc(e.alternate,e),e=e.return;G=null}}function Eu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Yd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),du=0,Tu(),Vl=e,G=n=di(e.current,null),K=t,Hl=0,Ul=null,Wl=!1,Gl=Je(e,t),Kl=!1,$l=Ql=Zl=Xl=Yl=Jl=0,tu=eu=null,nu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-ze(r),a=1<<i;t|=e[i],r&=~a}return ql=t,ti(),n}function Du(e,t){H=null,P.H=zs,t===xa||t===Ca?(t=ka(),Hl=3):t===Sa?(t=ka(),Hl=4):Hl=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ul=t,G===null&&(Jl=1,Zs(e,vi(t,e.current)))}function Ou(){var e=no.current;return e===null?!0:(K&4194048)===K?ro===null:(K&62914560)===K||K&536870912?e===ro:!1}function ku(){var e=P.H;return P.H=zs,e===null?zs:e}function Au(){var e=P.A;return P.A=Rl,e}function ju(){Jl=4,Wl||(K&4194048)!==K&&no.current!==null||(Gl=!0),!(Yl&134217727)&&!(Xl&134217727)||Vl===null||Cu(Vl,K,Ql,!1)}function Mu(e,t,n){var r=Bl;Bl|=2;var i=ku(),a=Au();(Vl!==e||K!==t)&&(ou=null,Eu(e,t)),t=!1;var o=Jl;a:do try{if(Hl!==0&&G!==null){var s=G,c=Ul;switch(Hl){case 8:Tu(),o=6;break a;case 3:case 2:case 9:case 6:no.current===null&&(t=!0);var l=Hl;if(Hl=0,Ul=null,Lu(e,s,c,l),n&&Gl){o=0;break a}break;default:l=Hl,Hl=0,Ul=null,Lu(e,s,c,l)}}Nu(),o=Jl;break}catch(t){Du(e,t)}while(1);return t&&e.shellSuspendCounter++,Ki=Gi=null,Bl=r,P.H=i,P.A=a,G===null&&(Vl=null,K=0,ti()),o}function Nu(){for(;G!==null;)Iu(G)}function Pu(e,t){var n=Bl;Bl|=2;var r=ku(),a=Au();Vl!==e||K!==t?(ou=null,au=De()+500,Eu(e,t)):Gl=Je(e,t);a:do try{if(Hl!==0&&G!==null){t=G;var o=Ul;b:switch(Hl){case 1:Hl=0,Ul=null,Lu(e,t,o,1);break;case 2:case 9:if(Ta(o)){Hl=0,Ul=null,q(t);break}t=function(){Hl!==2&&Hl!==9||Vl!==e||(Hl=7),X(e)},o.then(t,t);break a;case 3:Hl=7;break a;case 4:Hl=5;break a;case 7:Ta(o)?(Hl=0,Ul=null,q(t)):(Hl=0,Ul=null,Lu(e,t,o,7));break;case 5:var s=null;switch(G.tag){case 26:s=G.memoizedState;case 5:case 27:var c=G;if(s?Kf(s):c.stateNode.complete){Hl=0,Ul=null;var l=c.sibling;if(l!==null)G=l;else{var u=c.return;u===null?G=null:(G=u,Ru(u))}break b}}Hl=0,Ul=null,Lu(e,t,o,5);break;case 6:Hl=0,Ul=null,Lu(e,t,o,6);break;case 8:Tu(),Jl=6;break a;default:throw Error(i(462))}}Fu();break}catch(t){Du(e,t)}while(1);return Ki=Gi=null,P.H=r,P.A=a,Bl=n,G===null?(Vl=null,K=0,ti(),Jl):0}function Fu(){for(;G!==null&&!Te();)Iu(G)}function Iu(e){var t=Mc(e.alternate,e,ql);e.memoizedProps=e.pendingProps,t===null?Ru(e):G=t}function q(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,K);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:ko(t);default:Vc(n,t),t=G=fi(t,ql),t=Mc(n,t,ql)}e.memoizedProps=e.pendingProps,t===null?Ru(e):G=t}function Lu(e,t,n,r){Ki=Gi=null,ko(t),ja=null,Ma=0;var i=t.return;try{if(nc(e,i,t,n,K)){Jl=1,Zs(e,vi(n,e.current)),G=null;return}}catch(t){if(i!==null)throw G=i,t;Jl=1,Zs(e,vi(n,e.current)),G=null;return}t.flags&32768?(B||r===1?e=!0:Gl||K&536870912?e=!1:(Wl=e=!0,(r===2||r===9||r===3||r===6)&&(r=no.current,r!==null&&r.tag===13&&(r.flags|=16384))),zu(t,e)):Ru(t)}function Ru(e){var t=e;do{if(t.flags&32768){zu(t,Wl);return}e=t.return;var n=zc(t.alternate,t,ql);if(n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);Jl===0&&(Jl=5)}function zu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,G=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=n}while(e!==null);Jl=6,G=null}function Bu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Gu();while(cu!==0);if(Bl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ei,$e(e,n,o,s,c,l),e===Vl&&(G=Vl=null,K=0),uu=t,lu=e,du=n,fu=o,pu=a,mu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,$u(je,function(){return Ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=P.T,P.T=null,a=F.p,F.p=2,s=Bl,Bl|=4;try{al(e,t,n)}finally{Bl=s,F.p=a,P.T=r}}cu=1,Vu(),Hu(),Uu()}}function Vu(){if(cu===1){cu=0;var e=lu,t=uu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=Bl;Bl|=4;try{vl(t,e);var a=Vd,o=Or(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Dr(s.ownerDocument.documentElement,s)){if(c!==null&&kr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Er(s,h),v=Er(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}lp=!!Bd,Vd=Bd=null}finally{Bl=i,F.p=r,P.T=n}}e.current=t,cu=2}}function Hu(){if(cu===2){cu=0;var e=lu,t=uu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=Bl;Bl|=4;try{ol(e,t.alternate,t)}finally{Bl=i,F.p=r,P.T=n}}cu=3}}function Uu(){if(cu===4||cu===3){cu=0,Ee();var e=lu,t=uu,n=du,r=mu;t.subtreeFlags&10256||t.flags&10256?cu=5:(cu=0,uu=lu=null,Wu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(su=null),it(n),t=t.stateNode,Le&&typeof Le.onCommitFiberRoot==`function`)try{Le.onCommitFiberRoot(Ie,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=P.T,i=F.p,F.p=2,P.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{P.T=t,F.p=i}}du&3&&Gu(),X(e),i=e.pendingLanes,n&261930&&i&42?e===gu?hu++:(hu=0,gu=e):hu=0,ad(0,!1)}}function Wu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ca(t)))}function Gu(){return Vu(),Hu(),Uu(),Ku()}function Ku(){if(cu!==5)return!1;var e=lu,t=fu;fu=0;var n=it(du),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=pu,pu=null;var o=lu,s=du;if(cu=0,uu=lu=null,du=0,Bl&6)throw Error(i(331));var c=Bl;if(Bl|=4,Fl(o.current),Dl(o,o.current,s,n),Bl=c,ad(0,!1),Le&&typeof Le.onPostCommitFiberRoot==`function`)try{Le.onPostCommitFiberRoot(Ie,o)}catch{}return!0}finally{F.p=a,P.T=r,Wu(e,t)}}function qu(e,t,n){t=vi(n,t),t=$s(e.stateNode,t,2),e=Ua(e,t,2),e!==null&&(Qe(e,2),X(e))}function J(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(su===null||!su.has(r))){e=vi(n,e),n=ec(2),r=Ua(t,n,2),r!==null&&(tc(n,r,t,e),Qe(r,2),X(r));break}}t=t.return}}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Kl=!0,i.add(n),e=Yu.bind(null,e,t,n),t.then(e,e))}function Yu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Vl===e&&(K&n)===n&&(Jl===4||Jl===3&&(K&62914560)===K&&300>De()-ru?!(Bl&2)&&Eu(e,0):Zl|=n,$l===K&&($l=0)),X(e)}function Xu(e,t){t===0&&(t=Xe()),e=ii(e,t),e!==null&&(Qe(e,t),X(e))}function Zu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Xu(e,n)}function $u(e,t){return Ce(e,t)}var ed=null,td=null,Y=!1,nd=!1,rd=!1,id=0;function X(e){e!==td&&e.next===null&&(td===null?ed=td=e:td=td.next=e),nd=!0,Y||(Y=!0,dd())}function ad(e,t){if(!rd&&nd){rd=!0;do for(var n=!1,r=ed;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ze(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=K,a=qe(r,r===Vl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Je(r,a)||(n=!0,ud(r,a));r=r.next}while(n);rd=!1}}function od(){sd()}function sd(){nd=Y=!1;var e=0;id!==0&&qd()&&(e=id);for(var t=De(),n=null,r=ed;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?ed=i:n.next=i,i===null&&(td=n)):(n=r,(e!==0||a&3)&&(nd=!0)),r=i}cu!==0&&cu!==5||ad(e,!1),id!==0&&(id=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ze(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ye(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Vl,n=K,n=qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Hl===2||Hl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&we(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Je(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&we(r),it(n)){case 2:case 8:n=Ae;break;case 32:n=je;break;case 268435456:n=Ne;break;default:n=je}return r=ld.bind(null,e),n=Ce(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&we(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(cu!==0&&cu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gu()&&e.callbackNode!==n)return null;var r=K;return r=qe(e,e===Vl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(bu(e,r,t),cd(e,De()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Gu())return null;bu(e,t,!0)}function dd(){Zd(function(){Bl&6?Ce(ke,od):sd()})}function fd(){if(id===0){var e=da;e===0&&(e=Ue,Ue<<=1,!(Ue&261888)&&(Ue=256)),id=e}return id}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:$t(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[lt]||null).action),o=r.submitter;o&&(t=(t=o[lt]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Sn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(id!==0){var e=o?md(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<Yr.length;gd++){var _d=Yr[gd];Xr(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}Xr(Vr,`onAnimationEnd`),Xr(Hr,`onAnimationIteration`),Xr(Ur,`onAnimationStart`),Xr(`dblclick`,`onDoubleClick`),Xr(`focusin`,`onFocus`),Xr(`focusout`,`onBlur`),Xr(Wr,`onTransitionRun`),Xr(Gr,`onTransitionStart`),Xr(Kr,`onTransitionCancel`),Xr(qr,`onTransitionEnd`),Tt(`onMouseEnter`,[`mouseout`,`mouseover`]),Tt(`onMouseLeave`,[`mouseout`,`mouseover`]),Tt(`onPointerEnter`,[`pointerout`,`pointerover`]),Tt(`onPointerLeave`,[`pointerout`,`pointerover`]),wt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),wt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),wt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),wt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[dt];n===void 0&&(n=t[dt]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,St.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(gp(t)){case 2:var i=up;break;case 8:i=dp;break;default:i=fp}n=i.bind(null,t,n,e),i=void 0,!dn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Td(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=_t(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}cn(function(){var r=a,i=nn(n),s=[];a:{var c=Jr.get(e);if(c!==void 0){var l=Sn,u=e;switch(e){case`keypress`:if(_n(n)===0)break a;case`keydown`:case`keyup`:l=Bn;break;case`focusin`:u=`focus`,l=jn;break;case`focusout`:u=`blur`,l=jn;break;case`beforeblur`:case`afterblur`:l=jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=An;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Hn;break;case Vr:case Hr:case Ur:l=Mn;break;case qr:l=Un;break;case`scroll`:case`scrollend`:l=wn;break;case`wheel`:l=Wn;break;case`copy`:case`cut`:case`paste`:l=Nn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Vn;break;case`toggle`:case`beforetoggle`:l=Gn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=ln(m,p),g!=null&&d.push(Ed(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==tn&&(u=n.relatedTarget||n.fromElement)&&(_t(u)||u[ut]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?_t(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=kn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Vn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:yt(l),h=u==null?c:yt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,_t(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Od,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&kd(s,c,l,d,!1),u!==null&&f!==null&&kd(s,f,u,d,!0)}}a:{if(c=r?yt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=dr;else if(ar(c))if(fr)v=xr;else{v=yr;var y=vr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Xt(r.elementType)&&(v=dr):v=br;if(v&&=v(e,r)){or(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ht(c,`number`,c.value)}switch(y=r?yt(r):window,e){case`focusin`:(ar(y)||y.contentEditable===`true`)&&(jr=y,Mr=r,Nr=null);break;case`focusout`:Nr=Mr=jr=null;break;case`mousedown`:Pr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Pr=!1,Fr(s,n,i);break;case`selectionchange`:if(Ar)break;case`keydown`:case`keyup`:Fr(s,n,i)}var b;if(qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else tr?$n(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Xn&&n.locale!==`ko`&&(tr||x!==`onCompositionStart`?x===`onCompositionEnd`&&tr&&(b=gn()):(pn=i,mn=`value`in pn?pn.value:pn.textContent,tr=!0)),y=Dd(r,x),0<y.length&&(x=new Pn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=er(n),b!==null&&(x.data=b)))),(b=Yn?nr(e,n):rr(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new Pn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),hd(s,e,r,n,i)}bd(s,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=ln(e,n),i!=null&&r.unshift(Ed(e,i,a)),i=ln(e,t),i!=null&&r.push(Ed(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=ln(n,a),l!=null&&o.unshift(Ed(n,l,c))):i||(l=ln(n,a),l!=null&&o.push(Ed(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Pd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Kt(e,``+r);break;case`className`:jt(e,`class`,r);break;case`tabIndex`:jt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:jt(e,n,r);break;case`style`:Yt(e,r,o);break;case`data`:if(t!==`object`){jt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Pd(e,t,`name`,a.name,a,null),Pd(e,t,`formEncType`,a.formEncType,a,null),Pd(e,t,`formMethod`,a.formMethod,a,null),Pd(e,t,`formTarget`,a.formTarget,a,null)):(Pd(e,t,`encType`,a.encType,a,null),Pd(e,t,`method`,a.method,a,null),Pd(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=en);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=$t(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),At(e,`popover`,r);break;case`xlinkActuate`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:At(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Zt.get(n)||n,At(e,n,r))}}function Fd(e,t,n,r,a,o){switch(n){case`style`:Yt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Kt(e,``+r);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=en);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ct.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[lt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):At(e,n,r)}}}function Id(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Pd(e,t,o,s,n,null)}}a&&Pd(e,t,`srcSet`,n.srcSet,n,null),r&&Pd(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Pd(e,t,r,d,n,null)}}Vt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Pd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ut(e,!!r,n,!0):Ut(e,!!r,t,!1);return;case`textarea`:for(s in Z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Pd(e,t,s,c,n,null)}Gt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Pd(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)Z(vd[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Pd(e,t,u,r,n,null)}return;default:if(Xt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Fd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Pd(e,t,c,r,n,null))}function Ld(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Pd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Pd(e,t,p,m,r,f)}}Bt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Pd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Pd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ut(e,!!n,n?[]:``,!1):Ut(e,!!n,t,!0)):Ut(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Pd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Pd(e,t,s,a,r,o)}Wt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Pd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Pd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Pd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Pd(e,t,u,p,r,m)}return;default:if(Xt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Fd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Fd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Pd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Pd(e,t,f,p,r,m)}function Rd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function zd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Rd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Rd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Bd=null,Vd=null;function Hd(e){return e.nodeType===9?e:e.ownerDocument}function Ud(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Wd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Gd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kd=null;function qd(){var e=window.event;return e&&e.type===`popstate`?e===Kd?!1:(Kd=e,!0):(Kd=null,!1)}var Jd=typeof setTimeout==`function`?setTimeout:void 0,Yd=typeof clearTimeout==`function`?clearTimeout:void 0,Xd=typeof Promise==`function`?Promise:void 0,Zd=typeof queueMicrotask==`function`?queueMicrotask:Xd===void 0?Jd:function(e){return Xd.resolve(null).then(e).catch(Qd)};function Qd(e){setTimeout(function(){throw e})}function $d(e){return e===`head`}function ef(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Fp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)hf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,hf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ht]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&hf(e.ownerDocument.body);n=i}while(n);Fp(t)}function tf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function nf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nf(n),gt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[ht])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=uf(e.nextSibling),e===null)break}return null}function af(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=uf(e.nextSibling),e===null))return null;return e}function of(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=uf(e.nextSibling),e===null))return null;return e}function sf(e){return e.data===`$?`||e.data===`$~`}function cf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function lf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function uf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var df=null;function ff(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return uf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function pf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function mf(e,t,n){switch(t=Hd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function hf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gt(e)}var gf=new Map,_f=new Set;function vf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var yf=F.d;F.d={f:bf,r:xf,D:wf,C:Tf,L:Ef,m:Df,X:kf,S:Of,M:Af};function bf(){var e=yf.f(),t=wu();return e||t}function xf(e){var t=vt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):yf.r(e)}var Sf=typeof document>`u`?null:document;function Cf(e,t,n){var r=Sf;if(r&&typeof t==`string`&&t){var i=zt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),_f.has(i)||(_f.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Id(t,`link`,e),xt(t),r.head.appendChild(t)))}}function wf(e){yf.D(e),Cf(`dns-prefetch`,e,null)}function Tf(e,t){yf.C(e,t),Cf(`preconnect`,e,t)}function Ef(e,t,n){yf.L(e,t,n);var r=Sf;if(r&&e&&t){var i=`link[rel="preload"][as="`+zt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+zt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+zt(n.imageSizes)+`"]`)):i+=`[href="`+zt(e)+`"]`;var a=i;switch(t){case`style`:a=Mf(e);break;case`script`:a=If(e)}gf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),gf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Nf(a))||t===`script`&&r.querySelector(Lf(a))||(t=r.createElement(`link`),Id(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Df(e,t){yf.m(e,t);var n=Sf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+zt(r)+`"][href="`+zt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=If(e)}if(!gf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),gf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Lf(a)))return}r=n.createElement(`link`),Id(r,`link`,e),xt(r),n.head.appendChild(r)}}}function Of(e,t,n){yf.S(e,t,n);var r=Sf;if(r&&e){var i=bt(r).hoistableStyles,a=Mf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Nf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=gf.get(a))&&Bf(e,n);var c=o=r.createElement(`link`);xt(c),Id(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,zf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function kf(e,t){yf.X(e,t);var n=Sf;if(n&&e){var r=bt(n).hoistableScripts,i=If(e),a=r.get(i);a||(a=n.querySelector(Lf(i)),a||(e=h({src:e,async:!0},t),(t=gf.get(i))&&Vf(e,t),a=n.createElement(`script`),xt(a),Id(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t){yf.M(e,t);var n=Sf;if(n&&e){var r=bt(n).hoistableScripts,i=If(e),a=r.get(i);a||(a=n.querySelector(Lf(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=gf.get(i))&&Vf(e,t),a=n.createElement(`script`),xt(a),Id(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function jf(e,t,n,r){var a=(a=le.current)?vf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Mf(n.href),n=bt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Mf(n.href);var o=bt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Nf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),gf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},gf.set(e,n),o||Ff(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=If(n),n=bt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Mf(e){return`href="`+zt(e)+`"`}function Nf(e){return`link[rel="stylesheet"][`+e+`]`}function Pf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Ff(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Id(t,`link`,n),xt(t),e.head.appendChild(t))}function If(e){return`[src="`+zt(e)+`"]`}function Lf(e){return`script[async]`+e}function Rf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+zt(n.href)+`"]`);if(r)return t.instance=r,xt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),xt(r),Id(r,`style`,a),zf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Mf(n.href);var o=e.querySelector(Nf(a));if(o)return t.state.loading|=4,t.instance=o,xt(o),o;r=Pf(n),(a=gf.get(a))&&Bf(r,a),o=(e.ownerDocument||e).createElement(`link`),xt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Id(o,`link`,r),t.state.loading|=4,zf(o,n.precedence,e),t.instance=o;case`script`:return o=If(n.src),(a=e.querySelector(Lf(o)))?(t.instance=a,xt(a),a):(r=n,(a=gf.get(o))&&(r=h({},n),Vf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),xt(a),Id(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,zf(r,n.precedence,e));return t.instance}function zf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Vf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Hf=null;function Uf(e,t,n){if(Hf===null){var r=new Map,i=Hf=new Map;i.set(n,r)}else i=Hf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ht]||a[ct]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Wf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Gf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Kf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function qf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Mf(r.href),a=t.querySelector(Nf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Xf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,xt(a);return}a=t.ownerDocument||t,r=Pf(r),(i=gf.get(i))&&Bf(r,i),a=a.createElement(`link`),xt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Id(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Xf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Jf=0;function Yf(e,t){return e.stylesheets&&e.count===0&&Qf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Jf===0&&(Jf=62500*zd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Jf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Xf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zf=null;function Qf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zf=new Map,t.forEach($f,e),Zf=null,Xf.call(e))}function $f(e,t){if(!(t.state.loading&4)){var n=Zf.get(e);if(n)var r=n.get(null);else{n=new Map,Zf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Xf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ep={$$typeof:C,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function tp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function np(e,t,n,r,i,a,o,s,c,l,u,d){return e=new tp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=li(3,null,null,t),e.current=a,a.stateNode=e,t=sa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ba(a),e}function rp(e){return e?(e=si,e):si}function ip(e,t,n,r,i,a){i=rp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ha(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ua(e,r,t),n!==null&&(yu(n,e,t),Wa(n,e,t))}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function op(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function sp(e){if(e.tag===13||e.tag===31){var t=ii(e,67108864);t!==null&&yu(t,e,67108864),op(e,67108864)}}function cp(e){if(e.tag===13||e.tag===31){var t=_u();t=rt(t);var n=ii(e,t);n!==null&&yu(n,e,t),op(e,t)}}var lp=!0;function up(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,fp(e,t,n,r)}finally{F.p=a,P.T=i}}function dp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,fp(e,t,n,r)}finally{F.p=a,P.T=i}}function fp(e,t,n,r){if(lp){var i=pp(r);if(i===null)Td(e,t,r,mp,n),Tp(e,r);else if(Dp(i,e,t,n,r))r.stopPropagation();else if(Tp(e,r),t&4&&-1<wp.indexOf(e)){for(;i!==null;){var a=vt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ke(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ze(o);s.entanglements[1]|=c,o&=~c}X(a),!(Bl&6)&&(au=De()+500,ad(0,!1))}}break;case 31:case 13:s=ii(a,2),s!==null&&yu(s,a,2),wu(),op(a,2)}if(a=pp(r),a===null&&Td(e,t,r,mp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function pp(e){return e=nn(e),hp(e)}var mp=null;function hp(e){if(mp=null,e=_t(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mp=e,null}function gp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Oe()){case ke:return 2;case Ae:return 8;case je:case Me:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var _p=!1,vp=null,yp=null,bp=null,xp=new Map,Sp=new Map,Cp=[],wp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Tp(e,t){switch(e){case`focusin`:case`focusout`:vp=null;break;case`dragenter`:case`dragleave`:yp=null;break;case`mouseover`:case`mouseout`:bp=null;break;case`pointerover`:case`pointerout`:xp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Sp.delete(t.pointerId)}}function Ep(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=vt(t),t!==null&&sp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dp(e,t,n,r,i){switch(t){case`focusin`:return vp=Ep(vp,e,t,n,r,i),!0;case`dragenter`:return yp=Ep(yp,e,t,n,r,i),!0;case`mouseover`:return bp=Ep(bp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return xp.set(a,Ep(xp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Sp.set(a,Ep(Sp.get(a)||null,e,t,n,r,i)),!0}return!1}function Op(e){var t=_t(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ot(e.priority,function(){cp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ot(e.priority,function(){cp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tn=r,n.target.dispatchEvent(r),tn=null}else return t=vt(n),t!==null&&sp(t),e.blockedOn=n,!1;t.shift()}return!0}function Ap(e,t,n){kp(e)&&n.delete(t)}function jp(){_p=!1,vp!==null&&kp(vp)&&(vp=null),yp!==null&&kp(yp)&&(yp=null),bp!==null&&kp(bp)&&(bp=null),xp.forEach(Ap),Sp.forEach(Ap)}function Mp(e,n){e.blockedOn===n&&(e.blockedOn=null,_p||(_p=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jp)))}var Np=null;function Pp(e){Np!==e&&(Np=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Np===e&&(Np=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(hp(r||n)===null)continue;break}var a=vt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Fp(e){function t(t){return Mp(t,e)}vp!==null&&Mp(vp,e),yp!==null&&Mp(yp,e),bp!==null&&Mp(bp,e),xp.forEach(t),Sp.forEach(t);for(var n=0;n<Cp.length;n++){var r=Cp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Cp.length&&(n=Cp[0],n.blockedOn===null);)Op(n),n.blockedOn===null&&Cp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[lt]||null;if(typeof a==`function`)o||Pp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[lt]||null)s=o.formAction;else if(hp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Pp(n)}}}function Ip(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Lp(e){this._internalRoot=e}Rp.prototype.render=Lp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;ip(n,_u(),e,t,null,null)},Rp.prototype.unmount=Lp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ip(e.current,2,null,e,null,null),wu(),t[ut]=null}};function Rp(e){this._internalRoot=e}Rp.prototype.unstable_scheduleHydration=function(e){if(e){var t=at();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cp.length&&t!==0&&t<Cp[n].priority;n++);Cp.splice(n,0,e),n===0&&Op(e)}};var zp=n.version;if(zp!==`19.2.7`)throw Error(i(527,zp,`19.2.7`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Bp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Vp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vp.isDisabled&&Vp.supportsFiber)try{Ie=Vp.inject(Bp),Le=Vp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=np(e,1,!1,null,null,n,r,null,o,s,c,Ip),e[ut]=t.current,Cd(e),new Lp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`modulepreload`,b=function(e){return`/`+e},x={},S=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=b(t,n),t=s(t),t in x)return;x[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:y,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},C=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,w=/^[\\/]{2}/;function T(e,t){return t+e.replace(/\\/g,`/`)}var E=`popstate`;function D(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function O(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return M(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:N(t)}return P(t,n,null,e)}function k(e,t){if(e===!1||e==null)throw Error(t)}function A(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ee(){return Math.random().toString(36).substring(2,10)}function j(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function M(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?te(t):t,state:n,key:t&&t.key||r||ee(),mask:i}}function N({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function te(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function P(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=D(e)?e:M(h.location,e,t);n&&n(r,e),l=u()+1;let d=j(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=D(e)?e:M(h.location,e,t);n&&n(r,e),l=u();let i=j(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return F(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(E,d),c=e,()=>{i.removeEventListener(E,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function F(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),k(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:N(t);return i=i.replace(/ $/,`%20`),!n&&w.test(i)&&(i=r+i),new URL(i,r)}function ne(e,t,n=`/`){return re(e,t,n,!1)}function re(e,t,n,r,i){let a=Se((typeof t==`string`?te(t):t).pathname||`/`,n);if(a==null)return null;let o=i??ae(e),s=null,c=xe(a);for(let e=0;s==null&&e<o.length;++e)s=_e(o[e],c,r);return s}function ie(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ae(e){let t=oe(e);return se(t),t}function oe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;k(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ae([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(k(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),oe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:he(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=be(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of I(e.path))a(e,t,!0,n)}),t}function I(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=I(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function se(e){e.sort((e,t)=>e.score===t.score?ge(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ce=/^:[\w-]+$/,le=3,ue=2,de=1,fe=10,pe=-2,me=e=>e===`*`;function he(e,t){let n=e.split(`/`),r=n.length;return n.some(me)&&(r+=pe),t&&(r+=ue),n.filter(e=>!me(e)).reduce((e,t)=>e+(ce.test(t)?le:t===``?de:fe),r)}function ge(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function _e(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?ye(u,l,s.matcher,s.compiledParams):ve(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=ve({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Ae([a,d.pathname]),pathnameBase:Me(Ae([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Ae([a,d.pathnameBase]))}return o}function ve(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=be(e.path,e.caseSensitive,e.end);return ye(e,t,n,r)}function ye(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function be(e,t=!1,n=!0){A(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function xe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return A(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Se(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ce(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?te(e):e,a;return n?(n=ke(n),a=n.startsWith(`/`)?we(n.substring(1),`/`):we(n,t)):a=t,{pathname:a,search:Ne(r),hash:Pe(i)}}function we(e,t){let n=je(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Te(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ee(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function De(e){let t=Ee(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Oe(e,t,n,r=!1){let i;typeof e==`string`?i=te(e):(i={...e},k(!i.pathname||!i.pathname.includes(`?`),Te(`?`,`pathname`,`search`,i)),k(!i.pathname||!i.pathname.includes(`#`),Te(`#`,`pathname`,`hash`,i)),k(!i.search||!i.search.includes(`#`),Te(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ce(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var ke=e=>e.replace(/[\\/]{2,}/g,`/`),Ae=e=>ke(e.join(`/`)),je=e=>e.replace(/\/+$/,``),Me=e=>je(e).replace(/^\/*/,`/`),Ne=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Pe=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Fe=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ie(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Le(e){return Ae(e.map(e=>e.route.path).filter(Boolean))||`/`}var Re=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function ze(e,t){let n=e;if(typeof n!=`string`||!C.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Re)try{let e=new URL(window.location.href),r=w.test(n)?new URL(T(n,e.protocol)):new URL(n),a=Se(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{A(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Be=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Be);var Ve=[`GET`,...Be];new Set(Ve);var He=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Ue(e){try{return He.includes(new URL(e).protocol)}catch{return!1}}var We=_.createContext(null);We.displayName=`DataRouter`;var Ge=_.createContext(null);Ge.displayName=`DataRouterState`;var Ke=_.createContext(!1);function qe(){return _.useContext(Ke)}var Je=_.createContext({isTransitioning:!1});Je.displayName=`ViewTransition`;var Ye=_.createContext(new Map);Ye.displayName=`Fetchers`;var Xe=_.createContext(null);Xe.displayName=`Await`;var Ze=_.createContext(null);Ze.displayName=`Navigation`;var Qe=_.createContext(null);Qe.displayName=`Location`;var $e=_.createContext({outlet:null,matches:[],isDataRoute:!1});$e.displayName=`Route`;var et=_.createContext(null);et.displayName=`RouteError`;var tt=`REACT_ROUTER_ERROR`,nt=`REDIRECT`,rt=`ROUTE_ERROR_RESPONSE`;function it(e){if(e.startsWith(`${tt}:${nt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function at(e){if(e.startsWith(`${tt}:${rt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Fe(t.status,t.statusText,t.data)}catch{}}function ot(e,{relative:t}={}){k(st(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(Ze),{hash:i,pathname:a,search:o}=ht(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ae([n,a])),r.createHref({pathname:s,search:o,hash:i})}function st(){return _.useContext(Qe)!=null}function ct(){return k(st(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(Qe).location}var lt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ut(e){_.useContext(Ze).static||_.useLayoutEffect(e)}function dt(){let{isDataRoute:e}=_.useContext($e);return e?Pt():ft()}function ft(){k(st(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(We),{basename:t,navigator:n}=_.useContext(Ze),{matches:r}=_.useContext($e),{pathname:i}=ct(),a=JSON.stringify(De(r)),o=_.useRef(!1);return ut(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(A(o.current,lt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Oe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ae([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var pt=_.createContext(null);function mt(e){let t=_.useContext($e).outlet;return _.useMemo(()=>t&&_.createElement(pt.Provider,{value:e},t),[t,e])}function ht(e,{relative:t}={}){let{matches:n}=_.useContext($e),{pathname:r}=ct(),i=JSON.stringify(De(n));return _.useMemo(()=>Oe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function gt(e,t){return _t(e,t)}function _t(e,t,n){k(st(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(Ze),{matches:i}=_.useContext($e),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;It(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ct(),d;if(t){let e=typeof t==`string`?te(t):t;k(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):ne(e,{pathname:p});A(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),A(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=wt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ae([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ae([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(Qe.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function vt(){let e=Nt(),t=Ie(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var yt=_.createElement(vt,null),bt=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=at(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement($e.Provider,{value:this.props.routeContext},_.createElement(et.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(St,{error:e},t):t}};bt.contextType=Ke;var xt=new WeakMap;function St({children:e,error:t}){let{basename:n}=_.useContext(Ze);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=it(t.digest);if(e){let r=xt.get(t);if(r)throw r;let i=ze(e.location,n),a=i.absoluteURL||i.to;if(Ue(a))throw Error(`Invalid redirect location`);if(Re&&!xt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw xt.set(t,n),n}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Ct({routeContext:e,match:t,children:n}){let r=_.useContext(We);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement($e.Provider,{value:e},n)}function wt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);k(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Le(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||yt,o&&(s<0&&c===0?(It(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(Ct,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(bt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Tt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Et(e){let t=_.useContext(We);return k(t,Tt(e)),t}function Dt(e){let t=_.useContext(Ge);return k(t,Tt(e)),t}function Ot(e){let t=_.useContext($e);return k(t,Tt(e)),t}function kt(e){let t=Ot(e),n=t.matches[t.matches.length-1];return k(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function At(){return kt(`useRouteId`)}function jt(){let e=Dt(`useNavigation`);return _.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function Mt(){let{matches:e,loaderData:t}=Dt(`useMatches`);return _.useMemo(()=>e.map(e=>ie(e,t)),[e,t])}function Nt(){let e=_.useContext(et),t=Dt(`useRouteError`),n=kt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Pt(){let{router:e}=Et(`useNavigate`),t=kt(`useNavigate`),n=_.useRef(!1);return ut(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{A(n.current,lt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Ft={};function It(e,t,n){!t&&!Ft[e]&&(Ft[e]=!0,A(!1,n))}_.memo(Lt);function Lt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return _t(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Rt(e){return mt(e.context)}function L(e){k(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function zt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){k(!st(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=te(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=_.useMemo(()=>{let e=Se(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return A(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(Ze.Provider,{value:c},_.createElement(Qe.Provider,{children:t,value:h}))}function Bt({children:e,location:t}){return gt(Vt(e),t)}_.Component;function Vt(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,Vt(e.props.children,i));return}k(e.type===L,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),k(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Vt(e.props.children,i)),n.push(a)}),n}var Ht=`get`,Ut=`application/x-www-form-urlencoded`;function Wt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Gt(e){return Wt(e)&&e.tagName.toLowerCase()===`button`}function Kt(e){return Wt(e)&&e.tagName.toLowerCase()===`form`}function qt(e){return Wt(e)&&e.tagName.toLowerCase()===`input`}function Jt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Yt(e,t){return e.button===0&&(!t||t===`_self`)&&!Jt(e)}var Xt=null;function Zt(){if(Xt===null)try{new FormData(document.createElement(`form`),0),Xt=!1}catch{Xt=!0}return Xt}var Qt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function $t(e){return e!=null&&!Qt.has(e)?(A(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ut}"`),null):e}function en(e,t){let n,r,i,a,o;if(Kt(e)){let o=e.getAttribute(`action`);r=o?Se(o,t):null,n=e.getAttribute(`method`)||Ht,i=$t(e.getAttribute(`enctype`))||Ut,a=new FormData(e)}else if(Gt(e)||qt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Se(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Ht,i=$t(e.getAttribute(`formenctype`))||$t(o.getAttribute(`enctype`))||Ut,a=new FormData(o,e),!Zt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Wt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Ht,r=null,i=Ut,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var tn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},nn=/[&><\u2028\u2029]/g;function rn(e){return e.replace(nn,e=>tn[e])}function an(e,t){if(e===!1||e==null)throw Error(t)}function on(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Se(i.pathname,t)===`/`?i.pathname=`${je(t)}/_root.${r}`:i.pathname=`${je(i.pathname)}.${r}`,i}async function sn(e,t){if(e.id in t)return t[e.id];try{let n=await S(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cn(e){return e!=null&&typeof e.page==`string`}function ln(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function un(e,t,n){return hn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await sn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(ln).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function dn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function fn(e,t,{includeHydrateFallback:n}={}){return pn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function pn(e){return[...new Set(e)]}function mn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function hn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!cn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(mn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function gn(){let e=_.useContext(We);return an(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function _n(){let e=_.useContext(Ge);return an(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var vn=_.createContext(void 0);vn.displayName=`FrameworkContext`;function yn(){let e=_.useContext(vn);return an(e,`You must render this element inside a <HydratedRouter> element`),e}function bn(e,t){let n=_.useContext(vn),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:xn(s,p),onBlur:xn(c,m),onMouseEnter:xn(l,p),onMouseLeave:xn(u,m),onTouchStart:xn(d,p)}]:[a,f,{}]:[!1,f,{}]}function xn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Sn({page:e,...t}){let n=qe(),{nonce:r}=yn(),{router:i}=gn(),a=_.useMemo(()=>ne(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?_.createElement(wn,{page:e,matches:a,...t}):_.createElement(Tn,{page:e,matches:a,...t})):null}function Cn(e){let{manifest:t,routeModules:n}=yn(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return un(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function wn({page:e,matches:t,...n}){let r=ct(),{future:i}=yn(),{basename:a}=gn(),o=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=on(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return _.createElement(_.Fragment,null,o.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Tn({page:e,matches:t,...n}){let r=ct(),{future:i,manifest:a,routeModules:o}=yn(),{basename:s}=gn(),{loaderData:c,matches:l}=_n(),u=_.useMemo(()=>dn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>dn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=on(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>fn(d,a),[d,a]),m=Cn(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function En(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}_.Component;var Dn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Dn&&(window.__reactRouterVersion=`7.18.1`)}catch{}function On({basename:e,children:t,useTransitions:n,window:r}){let i=_.useRef();i.current??=O({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(zt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function kn({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=_.useState({action:n.action,location:n.location}),o=_.useCallback(e=>{r===!1?a(e):_.startTransition(()=>a(e))},[r]);return _.useLayoutEffect(()=>n.listen(o),[n,o]),_.createElement(zt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}kn.displayName=`unstable_HistoryRouter`;var An=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:v}=_.useContext(Ze),y=typeof l==`string`&&C.test(l),b=ze(l,h);l=b.to;let x=ot(l,{relative:r}),S=ct(),w=null;if(o){let e=Oe(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ae([h,e.pathname])),w=g.createHref(e)}let[T,E,D]=bn(n,p),O=Ln(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:v});function k(t){e&&e(t),t.defaultPrevented||O(t)}let A=!(b.isExternal||i),ee=_.createElement(`a`,{...p,...D,href:(A?w:void 0)||b.absoluteURL||x,onClick:A?k:e,ref:En(m,E),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return T&&!y?_.createElement(_.Fragment,null,ee,_.createElement(Sn,{page:x})):ee});An.displayName=`Link`;var jn=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=ht(a,{relative:c.relative}),d=ct(),f=_.useContext(Ge),{navigator:p,basename:m}=_.useContext(Ze),h=f!=null&&qn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Se(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return _.createElement(An,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});jn.displayName=`NavLink`;var Mn=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Ht,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=_.useContext(Ze),g=Bn(),v=Vn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&C.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Mn.displayName=`Form`;function Nn({getKey:e,storageKey:t,...n}){let r=_.useContext(vn),{basename:i}=_.useContext(Ze),a=ct(),o=Mt();Gn({getKey:e,storageKey:t});let s=_.useMemo(()=>{if(!r||!e)return null;let t=Wn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),_.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${rn(JSON.stringify(t||Hn))}, ${rn(JSON.stringify(s))})`}})}Nn.displayName=`ScrollRestoration`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=_.useContext(We);return k(t,Pn(e)),t}function In(e){let t=_.useContext(Ge);return k(t,Pn(e)),t}function Ln(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=dt(),d=ct(),f=ht(e,{relative:o});return _.useCallback(p=>{if(Yt(p,t)){p.preventDefault();let t=n===void 0?N(d)===N(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Rn=0,zn=()=>`__${String(++Rn)}__`;function Bn(){let{router:e}=Fn(`useSubmit`),{basename:t}=_.useContext(Ze),n=At(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=en(e,t);if(a.navigate===!1){let e=a.fetcherKey||zn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Vn(e,{relative:t}={}){let{basename:n}=_.useContext(Ze),r=_.useContext($e);k(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...ht(e||`.`,{relative:t})},o=ct();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ae([n,a.pathname])),N(a)}var Hn=`react-router-scroll-positions`,Un={};function Wn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Se(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Gn({getKey:e,storageKey:t}={}){let{router:n}=Fn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=In(`useScrollRestoration`),{basename:a}=_.useContext(Ze),o=ct(),s=Mt(),c=jt();_.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Kn(_.useCallback(()=>{if(c.state===`idle`){let t=Wn(o,s,a,e);Un[t]=window.scrollY}try{sessionStorage.setItem(t||Hn,JSON.stringify(Un))}catch(e){A(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(_.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Hn);e&&(Un=JSON.parse(e))}catch{}},[t]),_.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Un,()=>window.scrollY,e?(t,n)=>Wn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),_.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{A(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Kn(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function qn(e,{relative:t}={}){let n=_.useContext(Je);k(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=ht(e,{relative:t});if(!n.isTransitioning)return!1;let a=Se(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Se(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ve(i.pathname,o)!=null||ve(i.pathname,a)!=null}var Jn=o(((e,t)=>{var n=typeof Element<`u`,r=typeof Map==`function`,i=typeof Set==`function`,a=typeof ArrayBuffer==`function`&&!!ArrayBuffer.isView;function o(e,t){if(e===t)return!0;if(e&&t&&typeof e==`object`&&typeof t==`object`){if(e.constructor!==t.constructor)return!1;var s,c,l;if(Array.isArray(e)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(!o(e[c],t[c]))return!1;return!0}var u;if(r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],t.get(c.value[0])))return!1;return!0}if(i&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(e[c]!==t[c])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf==`function`&&typeof t.valueOf==`function`)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString==`function`&&typeof t.toString==`function`)return e.toString()===t.toString();if(l=Object.keys(e),s=l.length,s!==Object.keys(t).length)return!1;for(c=s;c--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[c]))return!1;if(n&&e instanceof Element)return!1;for(c=s;c--!==0;)if(!((l[c]===`_owner`||l[c]===`__v`||l[c]===`__o`)&&e.$$typeof)&&!o(e[l[c]],t[l[c]]))return!1;return!0}return e!==e&&t!==t}t.exports=function(e,t){try{return o(e,t)}catch(e){if((e.message||``).match(/stack|recursion/i))return console.warn(`react-fast-compare cannot handle circular refs`),!1;throw e}}})),Yn=o(((e,t)=>{t.exports=function(e,t,n,r,i,a,o,s){if(!e){var c;if(t===void 0)c=Error(`Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.`);else{var l=[n,r,i,a,o,s],u=0;c=Error(t.replace(/%s/g,function(){return l[u++]})),c.name=`Invariant Violation`}throw c.framesToPop=1,c}}})),Xn=o(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),Zn=c(Jn()),Qn=c(Yn()),$n=c(Xn()),er=(e=>(e.BASE=`base`,e.BODY=`body`,e.HEAD=`head`,e.HTML=`html`,e.LINK=`link`,e.META=`meta`,e.NOSCRIPT=`noscript`,e.SCRIPT=`script`,e.STYLE=`style`,e.TITLE=`title`,e.FRAGMENT=`Symbol(react.fragment)`,e))(er||{}),tr={link:{rel:[`amphtml`,`canonical`,`alternate`]},script:{type:[`application/ld+json`]},meta:{charset:``,name:[`generator`,`robots`,`description`],property:[`og:type`,`og:title`,`og:url`,`og:image`,`og:image:alt`,`og:description`,`twitter:url`,`twitter:title`,`twitter:description`,`twitter:image`,`twitter:image:alt`,`twitter:card`,`twitter:site`]}},nr=Object.values(er),rr={accesskey:`accessKey`,charset:`charSet`,class:`className`,contenteditable:`contentEditable`,contextmenu:`contextMenu`,"http-equiv":`httpEquiv`,itemprop:`itemProp`,tabindex:`tabIndex`},ir=Object.entries(rr).reduce((e,[t,n])=>(e[n]=t,e),{}),ar=`data-rh`,or={DEFAULT_TITLE:`defaultTitle`,DEFER:`defer`,ENCODE_SPECIAL_CHARACTERS:`encodeSpecialCharacters`,ON_CHANGE_CLIENT_STATE:`onChangeClientState`,TITLE_TEMPLATE:`titleTemplate`,PRIORITIZE_SEO_TAGS:`prioritizeSeoTags`},sr=(e,t)=>{for(let n=e.length-1;n>=0;--n){let r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},cr=e=>{let t=sr(e,`title`),n=sr(e,or.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join(``)),n&&t)return n.replace(/%s/g,()=>t);let r=sr(e,or.DEFAULT_TITLE);return t||r||void 0},lr=e=>sr(e,or.ON_CHANGE_CLIENT_STATE)||(()=>{}),ur=(e,t)=>t.filter(t=>t[e]!==void 0).map(t=>t[e]).reduce((e,t)=>({...e,...t}),{}),dr=(e,t)=>t.filter(e=>e.base!==void 0).map(e=>e.base).reverse().reduce((t,n)=>{if(!t.length){let r=Object.keys(n);for(let i=0;i<r.length;i+=1){let a=r[i].toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}}return t},[]),fr=e=>console&&typeof console.warn==`function`&&console.warn(e),pr=(e,t,n)=>{let r={};return n.filter(t=>Array.isArray(t[e])?!0:(t[e]!==void 0&&fr(`Helmet: ${e} should be of type "Array". Instead found type "${typeof t[e]}"`),!1)).map(t=>t[e]).reverse().reduce((e,n)=>{let i={};n.filter(e=>{let n,a=Object.keys(e);for(let r=0;r<a.length;r+=1){let i=a[r],o=i.toLowerCase();t.indexOf(o)!==-1&&!(n===`rel`&&e[n].toLowerCase()===`canonical`)&&!(o===`rel`&&e[o].toLowerCase()===`stylesheet`)&&(n=o),t.indexOf(i)!==-1&&(i===`innerHTML`||i===`cssText`||i===`itemprop`)&&(n=i)}if(!n||!e[n])return!1;let o=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),r[n][o]?!1:(i[n][o]=!0,!0)}).reverse().forEach(t=>e.push(t));let a=Object.keys(i);for(let e=0;e<a.length;e+=1){let t=a[e],n={...r[t],...i[t]};r[t]=n}return e},[]).reverse()},mr=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},hr=e=>({baseTag:dr([`href`],e),bodyAttributes:ur(`bodyAttributes`,e),defer:sr(e,or.DEFER),encode:sr(e,or.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ur(`htmlAttributes`,e),linkTags:pr(`link`,[`rel`,`href`],e),metaTags:pr(`meta`,[`name`,`charset`,`http-equiv`,`property`,`itemprop`],e),noscriptTags:pr(`noscript`,[`innerHTML`],e),onChangeClientState:lr(e),scriptTags:pr(`script`,[`src`,`innerHTML`],e),styleTags:pr(`style`,[`cssText`],e),title:cr(e),titleAttributes:ur(`titleAttributes`,e),prioritizeSeoTags:mr(e,or.PRIORITIZE_SEO_TAGS)}),gr=e=>Array.isArray(e)?e.join(``):e,_r=(e,t)=>{let n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},vr=(e,t)=>Array.isArray(e)?e.reduce((e,n)=>(_r(n,t)?e.priority.push(n):e.default.push(n),e),{priority:[],default:[]}):{default:e,priority:[]},yr=(e,t)=>({...e,[t]:void 0}),br=[`noscript`,`script`,`style`],xr=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`),Sr=e=>Object.keys(e).reduce((t,n)=>{let r=e[n]===void 0?`${n}`:`${n}="${e[n]}"`;return t?`${t} ${r}`:r},``),Cr=(e,t,n,r)=>{let i=Sr(n),a=gr(t);return i?`<${e} ${ar}="true" ${i}>${xr(a,r)}</${e}>`:`<${e} ${ar}="true">${xr(a,r)}</${e}>`},wr=(e,t,n=!0)=>t.reduce((t,r)=>{let i=r,a=Object.keys(i).filter(e=>!(e===`innerHTML`||e===`cssText`)).reduce((e,t)=>{let r=i[t]===void 0?t:`${t}="${xr(i[t],n)}"`;return e?`${e} ${r}`:r},``),o=i.innerHTML||i.cssText||``;return`${t}<${e} ${ar}="true" ${a}${br.indexOf(e)===-1?`/>`:`>${o}</${e}>`}`},``),Tr=(e,t={})=>Object.keys(e).reduce((t,n)=>{let r=rr[n];return t[r||n]=e[n],t},t),Er=(e,t,n)=>{let r=Tr(n,{key:t,[ar]:!0});return[_.createElement(`title`,r,t)]},Dr=(e,t)=>t.map((t,n)=>{let r={key:n,[ar]:!0};return Object.keys(t).forEach(e=>{let n=rr[e]||e;if(n===`innerHTML`||n===`cssText`){let e=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:e}}else r[n]=t[e]}),_.createElement(e,r)}),Or=(e,t,n=!0)=>{switch(e){case`title`:return{toComponent:()=>Er(e,t.title,t.titleAttributes),toString:()=>Cr(e,t.title,t.titleAttributes,n)};case`bodyAttributes`:case`htmlAttributes`:return{toComponent:()=>Tr(t),toString:()=>Sr(t)};default:return{toComponent:()=>Dr(e,t),toString:()=>wr(e,t,n)}}},kr=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{let i=vr(e,tr.meta),a=vr(t,tr.link),o=vr(n,tr.script);return{priorityMethods:{toComponent:()=>[...Dr(`meta`,i.priority),...Dr(`link`,a.priority),...Dr(`script`,o.priority)],toString:()=>`${Or(`meta`,i.priority,r)} ${Or(`link`,a.priority,r)} ${Or(`script`,o.priority,r)}`},metaTags:i.default,linkTags:a.default,scriptTags:o.default}},Ar=e=>{let{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:a,styleTags:o,title:s=``,titleAttributes:c,prioritizeSeoTags:l}=e,{linkTags:u,metaTags:d,scriptTags:f}=e,p={toComponent:()=>[],toString:()=>``};return l&&({priorityMethods:p,linkTags:u,metaTags:d,scriptTags:f}=kr(e)),{priority:p,base:Or(`base`,t,r),bodyAttributes:Or(`bodyAttributes`,n,r),htmlAttributes:Or(`htmlAttributes`,i,r),link:Or(`link`,u,r),meta:Or(`meta`,d,r),noscript:Or(`noscript`,a,r),script:Or(`script`,f,r),style:Or(`style`,o,r),title:Or(`title`,{title:s,titleAttributes:c},r)}},jr=[],Mr=!!(typeof window<`u`&&window.document&&window.document.createElement),Nr=class{instances=[];canUseDOM=Mr;context;value={setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?jr:this.instances,add:e=>{(this.canUseDOM?jr:this.instances).push(e)},remove:e=>{let t=(this.canUseDOM?jr:this.instances).indexOf(e);(this.canUseDOM?jr:this.instances).splice(t,1)}}};constructor(e,t){this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Ar({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:``,titleAttributes:{}}))}},Pr=parseInt(`19.2.7`.split(`.`)[0],10)>=19,Fr=_.createContext({}),Ir=class e extends _.Component{static canUseDOM=Mr;helmetData;constructor(t){super(t),Pr?this.helmetData=null:this.helmetData=new Nr(this.props.context||{},e.canUseDOM)}render(){return Pr?_.createElement(_.Fragment,null,this.props.children):_.createElement(Fr.Provider,{value:this.helmetData.value},this.props.children)}},Lr=(e,t)=>{let n=document.head||document.querySelector(`head`),r=n.querySelectorAll(`${e}[${ar}]`),i=[].slice.call(r),a=[],o;return t&&t.length&&t.forEach(t=>{let n=document.createElement(e);for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))if(e===`innerHTML`)n.innerHTML=t.innerHTML;else if(e===`cssText`){let e=t.cssText;n.appendChild(document.createTextNode(e))}else{let r=e,i=t[r]===void 0?``:t[r];n.setAttribute(e,i)}n.setAttribute(ar,`true`),i.some((e,t)=>(o=t,n.isEqualNode(e)))?i.splice(o,1):a.push(n)}),i.forEach(e=>e.parentNode?.removeChild(e)),a.forEach(e=>n.appendChild(e)),{oldTags:i,newTags:a}},Rr=(e,t)=>{let n=document.getElementsByTagName(e)[0];if(!n)return;let r=n.getAttribute(ar),i=r?r.split(`,`):[],a=[...i],o=Object.keys(t);for(let e of o){let r=t[e]||``;n.getAttribute(e)!==r&&n.setAttribute(e,r),i.indexOf(e)===-1&&i.push(e);let o=a.indexOf(e);o!==-1&&a.splice(o,1)}for(let e=a.length-1;e>=0;--e)n.removeAttribute(a[e]);i.length===a.length?n.removeAttribute(ar):n.getAttribute(ar)!==o.join(`,`)&&n.setAttribute(ar,o.join(`,`))},zr=(e,t)=>{e!==void 0&&document.title!==e&&(document.title=gr(e)),Rr(`title`,t)},Br=(e,t)=>{let{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:a,metaTags:o,noscriptTags:s,onChangeClientState:c,scriptTags:l,styleTags:u,title:d,titleAttributes:f}=e;Rr(`body`,r),Rr(`html`,i),zr(d,f);let p={baseTag:Lr(`base`,n),linkTags:Lr(`link`,a),metaTags:Lr(`meta`,o),noscriptTags:Lr(`noscript`,s),scriptTags:Lr(`script`,l),styleTags:Lr(`style`,u)},m={},h={};Object.keys(p).forEach(e=>{let{newTags:t,oldTags:n}=p[e];t.length&&(m[e]=t),n.length&&(h[e]=p[e].oldTags)}),t&&t(),c(e,m,h)},Vr=null,Hr=e=>{Vr&&cancelAnimationFrame(Vr),e.defer?Vr=requestAnimationFrame(()=>{Br(e,()=>{Vr=null})}):(Br(e),Vr=null)},Ur=class extends _.Component{rendered=!1;shouldComponentUpdate(e){return!(0,$n.default)(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){let{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){let{helmetInstances:e,setHelmet:t}=this.props.context,n=null,r=hr(e.get().map(e=>{let{context:t,...n}=e.props;return n}));Ir.canUseDOM?Hr(r):Ar&&(n=Ar(r)),t(n)}init(){if(this.rendered)return;this.rendered=!0;let{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Wr=[],Gr=e=>{let t={};for(let n of Object.keys(e))t[ir[n]||n]=e[n];return t},Kr=e=>{let t={};for(let n of Object.keys(e)){let r=rr[n];t[r||n]=e[n]}return t},qr=(e,t)=>{if(!Mr)return;let n=document.getElementsByTagName(e)[0];if(!n)return;let r=`data-rh-managed`,i=n.getAttribute(r),a=i?i.split(`,`):[],o=Object.keys(t);for(let e of a)o.includes(e)||n.removeAttribute(e);for(let e of o){let r=t[e];r==null||r===!1?n.removeAttribute(e):r===!0?n.setAttribute(e,``):n.setAttribute(e,String(r))}o.length>0?n.setAttribute(r,o.join(`,`)):n.removeAttribute(r)},Jr=()=>{let e={},t={};for(let n of Wr){let{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(e,Gr(r)),i&&Object.assign(t,Gr(i))}qr(`html`,e),qr(`body`,t)},Yr=class extends _.Component{componentDidMount(){Wr.push(this),Jr()}componentDidUpdate(){Jr()}componentWillUnmount(){let e=Wr.indexOf(this);e!==-1&&Wr.splice(e,1),Jr()}resolveTitle(){let{title:e,titleTemplate:t,defaultTitle:n}=this.props;return e&&t?t.replace(/%s/g,()=>Array.isArray(e)?e.join(``):e):e||n||void 0}renderTitle(){let e=this.resolveTitle();if(e===void 0)return null;let t=this.props.titleAttributes||{};return _.createElement(`title`,Kr(t),e)}renderBase(){let{base:e}=this.props;return e?_.createElement(`base`,Kr(e)):null}renderMeta(){let{meta:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>_.createElement(`meta`,{key:t,...Kr(e)}))}renderLink(){let{link:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>_.createElement(`link`,{key:t,...Kr(e)}))}renderScript(){let{script:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{innerHTML:n,...r}=e,i=Kr(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),_.createElement(`script`,{key:t,...i})})}renderStyle(){let{style:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{cssText:n,...r}=e,i=Kr(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),_.createElement(`style`,{key:t,...i})})}renderNoscript(){let{noscript:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{innerHTML:n,...r}=e,i=Kr(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),_.createElement(`noscript`,{key:t,...i})})}render(){return _.createElement(_.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},Xr=class extends _.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(e){return!(0,Zn.default)(yr(this.props,`helmetData`),yr(e,`helmetData`))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case`script`:case`noscript`:return{innerHTML:t};case`style`:return{cssText:t};default:throw Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case`title`:return{...t,[e.type]:r,titleAttributes:{...n}};case`body`:return{...t,bodyAttributes:{...n}};case`html`:return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(t=>{n={...n,[t]:e[t]}}),n}warnOnInvalidChildren(e,t){return(0,Qn.default)(nr.some(t=>e.type===t),typeof e.type==`function`?`You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.`:`Only elements types ${nr.join(`, `)} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),(0,Qn.default)(!t||typeof t==`string`||Array.isArray(t)&&!t.some(e=>typeof e!=`string`),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return _.Children.forEach(e,e=>{if(!e||!e.props)return;let{children:r,...i}=e.props,a=Object.keys(i).reduce((e,t)=>(e[ir[t]||t]=i[t],e),{}),{type:o}=e;switch(typeof o==`symbol`?o=o.toString():this.warnOnInvalidChildren(e,r),o){case`Symbol(react.fragment)`:t=this.mapChildrenToProps(r,t);break;case`link`:case`meta`:case`noscript`:case`script`:case`style`:n=this.flattenArrayTypeChildren(e,n,a,r);break;default:t=this.mapObjectTypeChildren(e,t,a,r);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){let{children:e,...t}=this.props,n={...t},{helmetData:r}=t;return e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Nr)&&(r=new Nr(r.context,!0),delete n.helmetData),Pr?_.createElement(Yr,{...n}):r?_.createElement(Ur,{...n,context:r.value}):_.createElement(Fr.Consumer,null,e=>_.createElement(Ur,{...n,context:e}))}},Zr={black:`#000`,white:`#fff`},Qr={50:`#ffebee`,100:`#ffcdd2`,200:`#ef9a9a`,300:`#e57373`,400:`#ef5350`,500:`#f44336`,600:`#e53935`,700:`#d32f2f`,800:`#c62828`,900:`#b71c1c`,A100:`#ff8a80`,A200:`#ff5252`,A400:`#ff1744`,A700:`#d50000`},$r={50:`#f3e5f5`,100:`#e1bee7`,200:`#ce93d8`,300:`#ba68c8`,400:`#ab47bc`,500:`#9c27b0`,600:`#8e24aa`,700:`#7b1fa2`,800:`#6a1b9a`,900:`#4a148c`,A100:`#ea80fc`,A200:`#e040fb`,A400:`#d500f9`,A700:`#aa00ff`},ei={50:`#e3f2fd`,100:`#bbdefb`,200:`#90caf9`,300:`#64b5f6`,400:`#42a5f5`,500:`#2196f3`,600:`#1e88e5`,700:`#1976d2`,800:`#1565c0`,900:`#0d47a1`,A100:`#82b1ff`,A200:`#448aff`,A400:`#2979ff`,A700:`#2962ff`},ti={50:`#e1f5fe`,100:`#b3e5fc`,200:`#81d4fa`,300:`#4fc3f7`,400:`#29b6f6`,500:`#03a9f4`,600:`#039be5`,700:`#0288d1`,800:`#0277bd`,900:`#01579b`,A100:`#80d8ff`,A200:`#40c4ff`,A400:`#00b0ff`,A700:`#0091ea`},ni={50:`#e8f5e9`,100:`#c8e6c9`,200:`#a5d6a7`,300:`#81c784`,400:`#66bb6a`,500:`#4caf50`,600:`#43a047`,700:`#388e3c`,800:`#2e7d32`,900:`#1b5e20`,A100:`#b9f6ca`,A200:`#69f0ae`,A400:`#00e676`,A700:`#00c853`},ri={50:`#fff3e0`,100:`#ffe0b2`,200:`#ffcc80`,300:`#ffb74d`,400:`#ffa726`,500:`#ff9800`,600:`#fb8c00`,700:`#f57c00`,800:`#ef6c00`,900:`#e65100`,A100:`#ffd180`,A200:`#ffab40`,A400:`#ff9100`,A700:`#ff6d00`},ii={50:`#fafafa`,100:`#f5f5f5`,200:`#eeeeee`,300:`#e0e0e0`,400:`#bdbdbd`,500:`#9e9e9e`,600:`#757575`,700:`#616161`,800:`#424242`,900:`#212121`,A100:`#f5f5f5`,A200:`#eeeeee`,A400:`#bdbdbd`,A700:`#616161`};function ai(e,...t){let n=new URL(`https://mui.com/production-error/?code=${e}`);return t.forEach(e=>n.searchParams.append(`args[]`,e)),`Minified MUI error #${e}; visit ${n} for the full message.`}var oi=`$$material`;function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},si.apply(null,arguments)}function ci(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function li(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var ui=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(li(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=ci(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),di=`-ms-`,fi=`-moz-`,R=`-webkit-`,pi=`comm`,mi=`rule`,hi=`decl`,gi=`@import`,_i=`@keyframes`,vi=`@layer`,yi=Math.abs,bi=String.fromCharCode,xi=Object.assign;function Si(e,t){return Ei(e,0)^45?(((t<<2^Ei(e,0))<<2^Ei(e,1))<<2^Ei(e,2))<<2^Ei(e,3):0}function Ci(e){return e.trim()}function wi(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,n){return e.replace(t,n)}function Ti(e,t){return e.indexOf(t)}function Ei(e,t){return e.charCodeAt(t)|0}function Di(e,t,n){return e.slice(t,n)}function Oi(e){return e.length}function ki(e){return e.length}function Ai(e,t){return t.push(e),e}function ji(e,t){return e.map(t).join(``)}var Mi=1,Ni=1,B=0,Pi=0,Fi=0,Ii=``;function Li(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Mi,column:Ni,length:o,return:``}}function Ri(e,t){return xi(Li(``,null,null,``,null,null,0),e,{length:-e.length},t)}function zi(){return Fi}function Bi(){return Fi=Pi>0?Ei(Ii,--Pi):0,Ni--,Fi===10&&(Ni=1,Mi--),Fi}function Vi(){return Fi=Pi<B?Ei(Ii,Pi++):0,Ni++,Fi===10&&(Ni=1,Mi++),Fi}function Hi(){return Ei(Ii,Pi)}function Ui(){return Pi}function Wi(e,t){return Di(Ii,e,t)}function Gi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ki(e){return Mi=Ni=1,B=Oi(Ii=e),Pi=0,[]}function qi(e){return Ii=``,e}function Ji(e){return Ci(Wi(Pi-1,Zi(e===91?e+2:e===40?e+1:e)))}function Yi(e){for(;(Fi=Hi())&&Fi<33;)Vi();return Gi(e)>2||Gi(Fi)>3?``:` `}function Xi(e,t){for(;--t&&Vi()&&!(Fi<48||Fi>102||Fi>57&&Fi<65||Fi>70&&Fi<97););return Wi(e,Ui()+(t<6&&Hi()==32&&Vi()==32))}function Zi(e){for(;Vi();)switch(Fi){case e:return Pi;case 34:case 39:e!==34&&e!==39&&Zi(Fi);break;case 40:e===41&&Zi(e);break;case 92:Vi();break}return Pi}function Qi(e,t){for(;Vi()&&e+Fi!==57&&!(e+Fi===84&&Hi()===47););return`/*`+Wi(t,Pi-1)+`*`+bi(e===47?e:Vi())}function $i(e){for(;!Gi(Hi());)Vi();return Wi(e,Pi)}function ea(e){return qi(ta(``,null,null,null,[``],e=Ki(e),0,[0],e))}function ta(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Vi()){case 40:if(m!=108&&Ei(C,d-1)==58){Ti(C+=z(Ji(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Ji(v);break;case 9:case 10:case 13:case 32:C+=Yi(m);break;case 92:C+=Xi(Ui()-1,7);continue;case 47:switch(Hi()){case 42:case 47:Ai(ra(Qi(Vi(),Ui()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=Oi(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=z(C,/\f/g,``)),p>0&&Oi(C)-d&&Ai(p>32?ia(C+`;`,r,n,d-1):ia(z(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(Ai(S=na(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)ta(C,t,S,S,b,a,d,s,x);else switch(f===99&&Ei(C,3)===110?100:f){case 100:case 108:case 109:case 115:ta(e,S,S,r&&Ai(na(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:ta(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Oi(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Bi()==125)continue}switch(C+=bi(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Oi(C)-1)*_,_=1;break;case 64:Hi()===45&&(C+=Ji(Vi())),f=Hi(),u=d=Oi(y=C+=$i(Ui())),v++;break;case 45:m===45&&Oi(C)==2&&(h=0)}}return a}function na(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=ki(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=Di(e,d+1,d=yi(h=o[m])),y=e;_<p;++_)(y=Ci(h>0?f[_]+` `+v:z(v,/&\f/g,f[_])))&&(c[g++]=y);return Li(e,t,n,i===0?mi:s,c,l,u)}function ra(e,t,n){return Li(e,t,n,pi,bi(zi()),Di(e,2,-2),0)}function ia(e,t,n,r){return Li(e,t,n,hi,Di(e,0,r),Di(e,r+1,-1),r)}function aa(e,t){for(var n=``,r=ki(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function oa(e,t,n,r){switch(e.type){case vi:if(e.children.length)break;case gi:case hi:return e.return=e.return||e.value;case pi:return``;case _i:return e.return=e.value+`{`+aa(e.children,r)+`}`;case mi:e.value=e.props.join(`,`)}return Oi(n=aa(e.children,r))?e.return=e.value+`{`+n+`}`:``}function sa(e){var t=ki(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function ca(e){return function(t){t.root||(t=t.return)&&e(t)}}function la(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ua=function(e,t,n){for(var r=0,i=0;r=i,i=Hi(),r===38&&i===12&&(t[n]=1),!Gi(i);)Vi();return Wi(e,Pi)},da=function(e,t){var n=-1,r=44;do switch(Gi(r)){case 0:r===38&&Hi()===12&&(t[n]=1),e[n]+=ua(Pi-1,t,n);break;case 2:e[n]+=Ji(r);break;case 4:if(r===44){e[++n]=Hi()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=bi(r)}while(r=Vi());return e},fa=function(e,t){return qi(da(Ki(e),t))},pa=new WeakMap,ma=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!pa.get(n))&&!r){pa.set(e,!0);for(var i=[],a=fa(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},ha=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function ga(e,t){switch(Si(e,t)){case 5103:return R+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+fi+e+di+e+e;case 6828:case 4268:return R+e+di+e+e;case 6165:return R+e+di+`flex-`+e+e;case 5187:return R+e+z(e,/(\w+).+(:[^]+)/,R+`box-$1$2`+di+`flex-$1$2`)+e;case 5443:return R+e+di+`flex-item-`+z(e,/flex-|-self/,``)+e;case 4675:return R+e+di+`flex-line-pack`+z(e,/align-content|flex-|-self/,``)+e;case 5548:return R+e+di+z(e,`shrink`,`negative`)+e;case 5292:return R+e+di+z(e,`basis`,`preferred-size`)+e;case 6060:return R+`box-`+z(e,`-grow`,``)+R+e+di+z(e,`grow`,`positive`)+e;case 4554:return R+z(e,/([^-])(transform)/g,`$1`+R+`$2`)+e;case 6187:return z(z(z(e,/(zoom-|grab)/,R+`$1`),/(image-set)/,R+`$1`),e,``)+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,R+`box-pack:$3`+di+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+R+e+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,R+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Oi(e)-1-t>6)switch(Ei(e,t+1)){case 109:if(Ei(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,`$1`+R+`$2-$3$1`+fi+(Ei(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Ti(e,`stretch`)?ga(z(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(Ei(e,t+1)!==115)break;case 6444:switch(Ei(e,Oi(e)-3-(~Ti(e,`!important`)&&10))){case 107:return z(e,`:`,`:`+R)+e;case 101:return z(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+R+(Ei(e,14)===45?`inline-`:``)+`box$3$1`+R+`$2$3$1`+di+`$2box$3`)+e}break;case 5936:switch(Ei(e,t+11)){case 114:return R+e+di+z(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return R+e+di+z(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return R+e+di+z(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return R+e+di+e+e}return e}var _a=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case hi:e.return=ga(e.value,e.length);break;case _i:return aa([Ri(e,{value:z(e.value,`@`,`@`+R)})],r);case mi:if(e.length)return ji(e.props,function(t){switch(wi(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return aa([Ri(e,{props:[z(t,/:(read-\w+)/,`:`+fi+`$1`)]})],r);case`::placeholder`:return aa([Ri(e,{props:[z(t,/:(plac\w+)/,`:`+R+`input-$1`)]}),Ri(e,{props:[z(t,/:(plac\w+)/,`:`+fi+`$1`)]}),Ri(e,{props:[z(t,/:(plac\w+)/,di+`input-$1`)]})],r)}return``})}}],va=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||_a,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[ma,ha],l,u=[oa,ca(function(e){l.insert(e)})],d=sa(c.concat(r,u)),f=function(e){return aa(ea(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new ui({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},ya=o((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),ba=o(((e,t)=>{t.exports=ya()})),xa=o(((e,t)=>{var n=ba(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h}));function Sa(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var Ca=function(e,t,n){var r=e.key+`-`+t.name;n===!1&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},wa=function(e,t,n){Ca(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Ta(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Ea={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Da=/[A-Z]|^ms/g,Oa=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ka=function(e){return e.charCodeAt(1)===45},Aa=function(e){return e!=null&&typeof e!=`boolean`},ja=la(function(e){return ka(e)?e:e.replace(Da,`-$&`).toLowerCase()}),Ma=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(Oa,function(e,t,n){return Ia={name:t,styles:n,next:Ia},t})}return Ea[e]!==1&&!ka(e)&&typeof t==`number`&&t!==0?t+`px`:t};function Na(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Ia={name:i.name,styles:i.styles,next:Ia},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Ia={name:o.name,styles:o.styles,next:Ia},o=o.next;return a.styles+`;`}return Pa(e,t,n);case`function`:if(e!==void 0){var s=Ia,c=n(e);return Ia=s,Na(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function Pa(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Na(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:Aa(s)&&(r+=ja(a)+`:`+Ma(a,s)+`;`)}else if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)Aa(o[c])&&(r+=ja(a)+`:`+Ma(a,o[c])+`;`);else{var l=Na(e,t,o);switch(a){case`animation`:case`animationName`:r+=ja(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}return r}var Fa=/label:\s*([^\s;{]+)\s*(;|$)/g,Ia;function La(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Ia=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=Na(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Na(n,t,e[o]),r&&(i+=a[o]);Fa.lastIndex=0;for(var s=``,c;(c=Fa.exec(i))!==null;)s+=`-`+c[1];return{name:Ta(i)+s,styles:i,next:Ia}}var Ra=function(e){return e()},za=_.useInsertionEffect?_.useInsertionEffect:!1,Ba=za||Ra,Va=za||_.useLayoutEffect,Ha=_.createContext(typeof HTMLElement<`u`?va({key:`css`}):null);Ha.Provider;var Ua=function(e){return(0,_.forwardRef)(function(t,n){return e(t,(0,_.useContext)(Ha),n)})},Wa=_.createContext({}),Ga={}.hasOwnProperty,Ka=`__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,qa=function(e,t){var n={};for(var r in t)Ga.call(t,r)&&(n[r]=t[r]);return n[Ka]=e,n},Ja=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Ca(t,n,r),Ba(function(){return wa(t,n,r)}),null},Ya=Ua(function(e,t,n){var r=e.css;typeof r==`string`&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Ka],a=[r],o=``;typeof e.className==`string`?o=Sa(t.registered,a,e.className):e.className!=null&&(o=e.className+` `);var s=La(a,void 0,_.useContext(Wa));o+=t.key+`-`+s.name;var c={};for(var l in e)Ga.call(e,l)&&l!==`css`&&l!==Ka&&(c[l]=e[l]);return c.className=o,n&&(c.ref=n),_.createElement(_.Fragment,null,_.createElement(Ja,{cache:t,serialized:s,isStringTag:typeof i==`string`}),_.createElement(i,c))});xa();var Xa=function(e,t){var n=arguments;if(t==null||!Ga.call(t,`css`))return _.createElement.apply(void 0,n);var r=n.length,i=Array(r);i[0]=Ya,i[1]=qa(e,t);for(var a=2;a<r;a++)i[a]=n[a];return _.createElement.apply(null,i)};(function(e){var t;t||=e.JSX||={}})(Xa||={});var Za=Ua(function(e,t){var n=e.styles,r=La([n],void 0,_.useContext(Wa)),i=_.useRef();return Va(function(){var e=t.key+`-global`,n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,o=document.querySelector(`style[data-emotion="`+e+` `+r.name+`"]`);return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),o!==null&&(a=!0,o.setAttribute(`data-emotion`,e),n.hydrate([o])),i.current=[n,a],function(){n.flush()}},[t]),Va(function(){var e=i.current,n=e[0];if(e[1]){e[1]=!1;return}r.next!==void 0&&wa(t,r.next,!0),n.tags.length&&(n.before=n.tags[n.tags.length-1].nextElementSibling,n.flush()),t.insert(``,r,n,!1)},[t,r.name]),null});function Qa(){return La([...arguments])}function $a(){var e=Qa.apply(void 0,arguments),t=`animation-`+e.name;return{name:t,styles:`@keyframes `+t+`{`+e.styles+`}`,anim:1,toString:function(){return`_EMO_`+this.name+`_`+this.styles+`_EMO_`}}}var eo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,to=la(function(e){return eo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),no=function(e){return e!==`theme`},ro=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?to:no},io=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},ao=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Ca(t,n,r),Ba(function(){return wa(t,n,r)}),null},oo=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=io(t,n,r),c=s||ro(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Ua(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=_.useContext(Wa)}typeof e.className==`string`?a=Sa(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=La(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?ro(r):c,g={};for(var v in e)l&&v===`as`||h(v)&&(g[v]=e[v]);return g.className=a,n&&(g.ref=n),_.createElement(_.Fragment,null,_.createElement(ao,{cache:t,serialized:m,isStringTag:typeof r==`string`}),_.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,"toString",{value:function(){return`.`+o}}),h.withComponent=function(t,r){return e(t,si({},n,r,{shouldForwardProp:io(h,r,!0)})).apply(void 0,d)},h}},so=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),co=oo.bind(null);so.forEach(function(e){co[e]=co(e)});var lo=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),uo=o(((e,t)=>{t.exports=lo()})),V=uo();function H(e){return e==null||Object.keys(e).length===0}function fo(e){let{styles:t,defaultTheme:n={}}=e;return(0,V.jsx)(Za,{styles:typeof t==`function`?e=>t(H(e)?n:e):t})}function po(e,t){return co(e,t)}function mo(e,t){Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))}var ho=[];function go(e){return ho[0]=e,La(ho)}var _o=o((e=>{var t=Symbol.for(`react.fragment`),n=Symbol.for(`react.strict_mode`),r=Symbol.for(`react.profiler`),i=Symbol.for(`react.consumer`),a=Symbol.for(`react.context`),o=Symbol.for(`react.forward_ref`),s=Symbol.for(`react.suspense`),c=Symbol.for(`react.suspense_list`),l=Symbol.for(`react.memo`),u=Symbol.for(`react.lazy`),d=Symbol.for(`react.client.reference`);e.isValidElementType=function(e){return!!(typeof e==`string`||typeof e==`function`||e===t||e===r||e===n||e===s||e===c||typeof e==`object`&&e&&(e.$$typeof===u||e.$$typeof===l||e.$$typeof===a||e.$$typeof===i||e.$$typeof===o||e.$$typeof===d||e.getModuleId!==void 0))}})),vo=o(((e,t)=>{t.exports=_o()}))();function yo(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function bo(e){if(_.isValidElement(e)||(0,vo.isValidElementType)(e)||!yo(e))return e;let t={};return Object.keys(e).forEach(n=>{t[n]=bo(e[n])}),t}function xo(e,t,n={clone:!0}){let r=n.clone?{...e}:e;return yo(e)&&yo(t)&&Object.keys(t).forEach(i=>{_.isValidElement(t[i])||(0,vo.isValidElementType)(t[i])?r[i]=t[i]:yo(t[i])&&Object.prototype.hasOwnProperty.call(e,i)&&yo(e[i])?r[i]=xo(e[i],t[i],n):n.clone?r[i]=yo(t[i])?bo(t[i]):t[i]:r[i]=t[i]}),r}var So=e=>{let t=Object.keys(e).map(t=>({key:t,val:e[t]}))||[];return t.sort((e,t)=>e.val-t.val),t.reduce((e,t)=>({...e,[t.key]:t.val}),{})};function Co(e){let{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n=`px`,step:r=5,...i}=e,a=So(t),o=Object.keys(a);function s(e){return`@media (min-width:${typeof t[e]==`number`?t[e]:e}${n})`}function c(e){return`@media (max-width:${(typeof t[e]==`number`?t[e]:e)-r/100}${n})`}function l(e,i){let a=o.indexOf(i);return`@media (min-width:${typeof t[e]==`number`?t[e]:e}${n}) and (max-width:${(a!==-1&&typeof t[o[a]]==`number`?t[o[a]]:i)-r/100}${n})`}function u(e){return o.indexOf(e)+1<o.length?l(e,o[o.indexOf(e)+1]):s(e)}function d(e){let t=o.indexOf(e);return t===0?s(o[1]):t===o.length-1?c(o[t]):l(e,o[o.indexOf(e)+1]).replace(`@media`,`@media not all and`)}let f=[];for(let e=0;e<o.length;e+=1)f.push(s(o[e]));return{keys:o,values:a,up:s,down:c,between:l,only:u,not:d,unit:n,internal_mediaKeys:f,...i}}var wo=/min-width:\s*([0-9.]+)/;function To(e,t){if(!e.containerQueries||!Eo(t))return t;let n=[];for(let e in t)e.startsWith(`@container`)&&n.push(e);n.sort((e,t)=>(e.match(wo)?.[1]||0)-+(t.match(wo)?.[1]||0));let r=t;for(let e=0;e<n.length;e+=1){let t=n[e],i=r[t];delete r[t],r[t]=i}return r}function Eo(e){for(let t in e)if(t.startsWith(`@container`))return!0;return!1}function Do(e,t){return t===`@`||t.startsWith(`@`)&&(e.some(e=>t.startsWith(`@${e}`))||!!t.match(/^@\d/))}function Oo(e,t){let n=t.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;let[,r,i]=n,a=Number.isNaN(+r)?r||0:+r;return e.containerQueries(i).up(a)}function ko(e){let t=(e,t)=>e.replace(`@media`,t?`@container ${t}`:`@container`);function n(n,r){n.up=(...n)=>t(e.breakpoints.up(...n),r),n.down=(...n)=>t(e.breakpoints.down(...n),r),n.between=(...n)=>t(e.breakpoints.between(...n),r),n.only=(...n)=>t(e.breakpoints.only(...n),r),n.not=(...n)=>{let i=t(e.breakpoints.not(...n),r);return i.includes(`not all and`)?i.replace(`not all and `,``).replace(`min-width:`,`width<`).replace(`max-width:`,`width>`).replace(`and`,`or`):i}}let r={},i=e=>(n(r,e),r);return n(i),{...e,containerQueries:i}}var Ao={borderRadius:4};function jo(e){if(e==null)return!0;for(let t in e)return!1;return!0}function Mo(e,t){let n=Array.isArray(t),r=Array.isArray(e);return Lo(t)?t:Ro(e)?zo(t):n&&r?Fo(e,t):n===r?Bo(e,t):zo(t)}function No(e){let t=0,n=e.length,r=Array(n);for(t=0;t<n;t+=1)r[t]=zo(e[t]);return r}function Po(e){let t={};for(let n in e)n===`__proto__`||n===`constructor`||n===`prototype`||(t[n]=zo(e[n]));return t}function Fo(e,t){let n=e.length;for(let r=0;r<t.length;r+=1)e[n+r]=zo(t[r]);return e}function Io(e){return typeof e==`object`&&!!e&&!(e instanceof RegExp)&&!(e instanceof Date)}function Lo(e){return typeof e!=`object`||!e}function Ro(e){return typeof e!=`object`||!e||e instanceof RegExp||e instanceof Date}function zo(e){return Io(e)?Array.isArray(e)?No(e):Po(e):e}function Bo(e,t){for(let n in t)n===`__proto__`||n===`constructor`||n===`prototype`||(n in e?e[n]=Mo(e[n],t[n]):e[n]=zo(t[n]));return e}var Vo={},Ho={xs:0,sm:600,md:900,lg:1200,xl:1536},Uo=Co({values:Ho}),Wo={containerQueries:e=>({up:t=>{let n=typeof t==`number`?t:Ho[t]||t;return typeof n==`number`&&(n=`${n}px`),e?`@container ${e} (min-width:${n})`:`@container (min-width:${n})`}})};function Go(e,t,n){let r={};return Ko(r,e.theme,t,(e,t,i)=>{let a=n(t,i);e?r[e]=a:Mo(r,a)})}function Ko(e,t,n,r){if(t??=Vo,Array.isArray(n)){let i=t.breakpoints??Uo;for(let t=0;t<n.length;t+=1)qo(e,i.up(i.keys[t]),n[t],void 0,r);return e}if(typeof n==`object`){let i=t.breakpoints??Uo,a=i.values??Ho;for(let o in n)if(Do(i.keys,o)){let i=Oo(t.containerQueries?t:Wo,o);i&&qo(e,i,n[o],o,r)}else if(o in a)qo(e,i.up(o),n[o],o,r);else{let t=o;e[t]=n[t]}return e}return r(void 0,n),e}function qo(e,t,n,r,i){e[t]??={},i(t,n,r)}function Jo(e=Uo){let{internal_mediaKeys:t}=e,n={};for(let e=0;e<t.length;e+=1)n[t[e]]={};return n}function Yo(e,t){let n=e.internal_mediaKeys;for(let e=0;e<n.length;e+=1){let r=n[e];jo(t[r])&&delete t[r]}return t}function Xo(e,t){if(Array.isArray(t))return!0;if(typeof t==`object`&&t){for(let n=0;n<e.keys.length;n+=1)if(e.keys[n]in t)return!0;let n=Object.keys(t);for(let t=0;t<n.length;t+=1)if(Do(e.keys,n[t]))return!0}return!1}function Zo(e){if(typeof e!=`string`)throw Error(ai(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Qo(e,t,n,r){let i;return i=typeof e==`function`?e(n):Array.isArray(e)?e[n]||n:typeof n==`string`&&$o(e,n,!0,r)||n,t&&(i=t(i,n,e)),i}function $o(e,t,n=!0,r=void 0){if(!e||!t)return null;let i=t.split(`.`);if(e.vars&&n){let t=es(e.vars,i,r);if(t!=null)return t}return es(e,i,r)}function es(e,t,n=void 0){let r,i=e,a=0;for(;a<t.length;){if(i==null)return i;r=i,i=i[t[a]],a+=1}if(n&&i===void 0){let e=t[t.length-1],i=`${n}${e==="default"?``:Zo(e)}`;return r?.[i]}return i}function ts(e){let{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,a=e=>{if(e[t]==null)return null;let a=e[t],o=e.theme,s=$o(o,r)||{};return Go(e,a,e=>{let r=Qo(s,i,e,t);return n===!1?r:{[n]:r}})};return a.propTypes={},a.filterProps=[t],a}var ns={internal_cache:{}},rs={m:`margin`,p:`padding`},is={t:`Top`,r:`Right`,b:`Bottom`,l:`Left`,x:[`Left`,`Right`],y:[`Top`,`Bottom`]},as={marginX:`mx`,marginY:`my`,paddingX:`px`,paddingY:`py`},os={};for(let e in rs)os[e]=[rs[e]];for(let e in rs)for(let t in is){let n=rs[e],r=is[t],i=Array.isArray(r)?r.map(e=>n+e):[n+r];os[e+t]=i}for(let e in as)os[e]=os[as[e]];var ss=new Set([`m`,`mt`,`mr`,`mb`,`ml`,`mx`,`my`,`margin`,`marginTop`,`marginRight`,`marginBottom`,`marginLeft`,`marginX`,`marginY`,`marginInline`,`marginInlineStart`,`marginInlineEnd`,`marginBlock`,`marginBlockStart`,`marginBlockEnd`]),cs=new Set([`p`,`pt`,`pr`,`pb`,`pl`,`px`,`py`,`padding`,`paddingTop`,`paddingRight`,`paddingBottom`,`paddingLeft`,`paddingX`,`paddingY`,`paddingInline`,`paddingInlineStart`,`paddingInlineEnd`,`paddingBlock`,`paddingBlockStart`,`paddingBlockEnd`]),ls=new Set([...ss,...cs]);function us(e,t,n,r){let i=$o(e,t,!0)??n;return typeof i==`number`||typeof i==`string`?e=>typeof e==`string`?e:typeof i==`string`?i.startsWith(`var(`)&&e===0?0:i.startsWith(`var(`)&&e===1?i:`calc(${e} * ${i})`:i*e:Array.isArray(i)?e=>{if(typeof e==`string`)return e;let t=i[Math.abs(e)];return e>=0?t:typeof t==`number`?-t:typeof t==`string`&&t.startsWith(`var(`)?`calc(-1 * ${t})`:`-${t}`}:typeof i==`function`?i:()=>void 0}function ds(e){return us(e,`spacing`,8,`spacing`)}function fs(e,t){return typeof t==`string`||t==null?t:e(t)}var ps=[``];function ms(e,t){let n=e.theme??ns,r=n?.internal_cache?.unarySpacing??ds(n),i={};for(let n in e){if(!t.has(n))continue;let a=os[n]??(ps[0]=n,ps),o=e[n];Ko(i,e.theme,o,(e,t)=>{let n=e?i[e]:i;for(let e=0;e<a.length;e+=1)n[a[e]]=fs(r,t)})}return i}function hs(e){return ms(e,ss)}hs.propTypes={},hs.filterProps=ss;var gs=hs;function _s(e){return ms(e,cs)}_s.propTypes={},_s.filterProps=cs;var vs=_s;function ys(e){return ms(e,ls)}ys.propTypes={},ys.filterProps=ls;function bs(e=8,t=ds({spacing:e})){if(e.mui)return e;let n=(...e)=>(e.length===0?[1]:e).map(e=>{let n=t(e);return typeof n==`number`?`${n}px`:n}).join(` `);return n.mui=!0,n}function xs(...e){let t=e.reduce((e,t)=>(t.filterProps.forEach(n=>{e[n]=t}),e),{}),n=e=>{let n={};for(let r in e)t[r]&&Mo(n,t[r](e));return n};return n.propTypes={},n.filterProps=e.reduce((e,t)=>e.concat(t.filterProps),[]),n}function Ss(e){return typeof e==`number`?`${e}px solid`:e}function Cs(e,t){return ts({prop:e,themeKey:`borders`,transform:t})}var ws=Cs(`border`,Ss),Ts=Cs(`borderTop`,Ss),Es=Cs(`borderRight`,Ss),Ds=Cs(`borderBottom`,Ss),Os=Cs(`borderLeft`,Ss),ks=Cs(`borderColor`),As=Cs(`borderTopColor`),js=Cs(`borderRightColor`),Ms=Cs(`borderBottomColor`),Ns=Cs(`borderLeftColor`),Ps=Cs(`outline`,Ss),Fs=Cs(`outlineColor`),Is=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){let t=us(e.theme,`shape.borderRadius`,4,`borderRadius`);return Go(e,e.borderRadius,e=>({borderRadius:fs(t,e)}))}return null};Is.propTypes={},Is.filterProps=[`borderRadius`],xs(ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Is,Ps,Fs);var Ls=e=>{if(e.gap!==void 0&&e.gap!==null){let t=us(e.theme,`spacing`,8,`gap`);return Go(e,e.gap,e=>({gap:fs(t,e)}))}return null};Ls.propTypes={},Ls.filterProps=[`gap`];var Rs=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){let t=us(e.theme,`spacing`,8,`columnGap`);return Go(e,e.columnGap,e=>({columnGap:fs(t,e)}))}return null};Rs.propTypes={},Rs.filterProps=[`columnGap`];var zs=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){let t=us(e.theme,`spacing`,8,`rowGap`);return Go(e,e.rowGap,e=>({rowGap:fs(t,e)}))}return null};zs.propTypes={},zs.filterProps=[`rowGap`],xs(Ls,Rs,zs,ts({prop:`gridColumn`}),ts({prop:`gridRow`}),ts({prop:`gridAutoFlow`}),ts({prop:`gridAutoColumns`}),ts({prop:`gridAutoRows`}),ts({prop:`gridTemplateColumns`}),ts({prop:`gridTemplateRows`}),ts({prop:`gridTemplateAreas`}),ts({prop:`gridArea`}));function Bs(e,t){return t===`grey`?t:e}xs(ts({prop:`color`,themeKey:`palette`,transform:Bs}),ts({prop:`bgcolor`,cssProperty:`backgroundColor`,themeKey:`palette`,transform:Bs}),ts({prop:`backgroundColor`,themeKey:`palette`,transform:Bs}));var Vs=Ho;function Hs(e){return e<=1&&e!==0?`${e*100}%`:e}var Us=ts({prop:`width`,transform:Hs}),Ws=e=>e.maxWidth!==void 0&&e.maxWidth!==null?Go(e,e.maxWidth,t=>{let n=e.theme?.breakpoints?.values?.[t]||Vs[t];return n?e.theme?.breakpoints?.unit===`px`?{maxWidth:n}:{maxWidth:`${n}${e.theme.breakpoints.unit}`}:{maxWidth:Hs(t)}}):null;Ws.filterProps=[`maxWidth`];var Gs=ts({prop:`minWidth`,transform:Hs}),Ks=ts({prop:`height`,transform:Hs}),qs=ts({prop:`maxHeight`,transform:Hs}),Js=ts({prop:`minHeight`,transform:Hs});ts({prop:`size`,cssProperty:`width`,transform:Hs}),ts({prop:`size`,cssProperty:`height`,transform:Hs}),xs(Us,Ws,Gs,Ks,qs,Js,ts({prop:`boxSizing`}));var Ys={border:{themeKey:`borders`,transform:Ss},borderTop:{themeKey:`borders`,transform:Ss},borderRight:{themeKey:`borders`,transform:Ss},borderBottom:{themeKey:`borders`,transform:Ss},borderLeft:{themeKey:`borders`,transform:Ss},borderColor:{themeKey:`palette`},borderTopColor:{themeKey:`palette`},borderRightColor:{themeKey:`palette`},borderBottomColor:{themeKey:`palette`},borderLeftColor:{themeKey:`palette`},outline:{themeKey:`borders`,transform:Ss},outlineColor:{themeKey:`palette`},borderRadius:{themeKey:`shape.borderRadius`,style:Is},color:{themeKey:`palette`,transform:Bs},bgcolor:{themeKey:`palette`,cssProperty:`backgroundColor`,transform:Bs},backgroundColor:{themeKey:`palette`,transform:Bs},p:{style:vs},pt:{style:vs},pr:{style:vs},pb:{style:vs},pl:{style:vs},px:{style:vs},py:{style:vs},padding:{style:vs},paddingTop:{style:vs},paddingRight:{style:vs},paddingBottom:{style:vs},paddingLeft:{style:vs},paddingX:{style:vs},paddingY:{style:vs},paddingInline:{style:vs},paddingInlineStart:{style:vs},paddingInlineEnd:{style:vs},paddingBlock:{style:vs},paddingBlockStart:{style:vs},paddingBlockEnd:{style:vs},m:{style:gs},mt:{style:gs},mr:{style:gs},mb:{style:gs},ml:{style:gs},mx:{style:gs},my:{style:gs},margin:{style:gs},marginTop:{style:gs},marginRight:{style:gs},marginBottom:{style:gs},marginLeft:{style:gs},marginX:{style:gs},marginY:{style:gs},marginInline:{style:gs},marginInlineStart:{style:gs},marginInlineEnd:{style:gs},marginBlock:{style:gs},marginBlockStart:{style:gs},marginBlockEnd:{style:gs},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Ls},rowGap:{style:zs},columnGap:{style:Rs},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:`zIndex`},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:`shadows`},width:{transform:Hs},maxWidth:{style:Ws},minWidth:{transform:Hs},height:{transform:Hs},maxHeight:{transform:Hs},minHeight:{transform:Hs},boxSizing:{},font:{themeKey:`font`},fontFamily:{themeKey:`typography`},fontSize:{themeKey:`typography`},fontStyle:{themeKey:`typography`},fontWeight:{themeKey:`typography`},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:`typography`}},Xs={};function Zs(){function e(t){if(!t.sx)return null;let{sx:n,theme:r=Xs,nested:i}=t,a=r.unstable_sxConfig??Ys,o={sx:null,theme:r,nested:!0};function s(n){let s=n;if(typeof n==`function`)s=n(r);else if(typeof n!=`object`)return n;if(!s)return null;let c=r.breakpoints??Uo,l=Jo(c);for(let n in s){let i=ec(s[n],r);if(i!=null){if(typeof i!=`object`){$s(l,n,i,r,a);continue}if(a[n]){$s(l,n,i,r,a);continue}Xo(c,i)?Ko(l,t.theme,i,(e,t)=>{l[e][n]=t}):(o.sx=i,l[n]=e(o))}}return!i&&r.modularCssLayers?{"@layer sx":To(r,Yo(c,l))}:To(r,Yo(c,l))}return Array.isArray(n)?n.map(s):s(n)}return e.filterProps=[`sx`],e}var Qs=Zs();function $s(e,t,n,r,i){let a=i[t];if(!a){e[t]=n;return}if(n==null)return;let{themeKey:o}=a;if(o===`typography`&&n===`inherit`){e[t]=n;return}let{style:s}=a;if(s){Mo(e,s({[t]:n,theme:r}));return}let{cssProperty:c=t,transform:l}=a,u=$o(r,o);Ko(e,r,n,(n,r)=>{let i=Qo(u,l,r,t);c===!1?Mo(n?e[n]:e,i):n?e[n][c]=i:e[c]=i})}function ec(e,t){return typeof e==`function`?e(t):e}function tc(e,t){let n=this;if(n.vars){if(!n.colorSchemes?.[e]||typeof n.getColorSchemeSelector!=`function`)return{};let r=n.getColorSchemeSelector(e);return r===`&`?t:((r.includes(`data-`)||r.includes(`.`))&&(r=`*:where(${r.replace(/\s*&$/,``)}) &`),{[r]:t})}return n.palette.mode===e?t:{}}function nc(e={},...t){let{breakpoints:n={},palette:r={},spacing:i,shape:a={},...o}=e,s=Co(n),c=bs(i),l=xo({breakpoints:s,direction:`ltr`,components:{},palette:{mode:`light`,...r},spacing:c,shape:{...Ao,...a}},o);return l=ko(l),l.applyStyles=tc,l=t.reduce((e,t)=>xo(e,t),l),l.unstable_sxConfig={...Ys,...o?.unstable_sxConfig},l.unstable_sx=function(e){return Qs({sx:e,theme:this})},l.internal_cache={},l}function rc(e){return Object.keys(e).length===0}function ic(e=null){let t=_.useContext(Wa);return!t||rc(t)?e:t}var ac=nc();function oc(e=ac){return ic(e)}function sc(e){let t=go(e);return e!==t&&t.styles?(t.styles.match(/^@layer\s+[^{]*$/)||(t.styles=`@layer global{${t.styles}}`),t):e}function cc({styles:e,themeId:t,defaultTheme:n={}}){let r=oc(n),i=t&&r[t]||r,a=typeof e==`function`?e(i):e;return i.modularCssLayers&&(a=Array.isArray(a)?a.map(e=>sc(typeof e==`function`?e(i):e)):sc(a)),(0,V.jsx)(fo,{styles:a})}var lc=e=>e,uc=(()=>{let e=lc;return{configure(t){e=t},generate(t){return e(t)},reset(){e=lc}}})();function dc(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=dc(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function U(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=dc(e))&&(r&&(r+=` `),r+=t);return r}function fc(e={}){let{themeId:t,defaultTheme:n,defaultClassName:r=`MuiBox-root`,generateClassName:i}=e,a=po(`div`,{shouldForwardProp:e=>e!==`theme`&&e!==`sx`&&e!==`as`})(Qs);return _.forwardRef(function(e,o){let s=oc(n),{className:c,component:l=`div`,...u}=e;return(0,V.jsx)(a,{as:l,ref:o,className:U(c,i?i(r):r),theme:t&&s[t]||s,...u})})}var pc={active:`active`,checked:`checked`,completed:`completed`,disabled:`disabled`,error:`error`,expanded:`expanded`,focused:`focused`,focusVisible:`focusVisible`,open:`open`,readOnly:`readOnly`,required:`required`,selected:`selected`};function mc(e,t,n=`Mui`){let r=pc[t];return r?`${n}-${r}`:`${uc.generate(e)}-${t}`}function hc(e,t,n=`Mui`){let r={};return t.forEach(t=>{r[t]=mc(e,t,n)}),r}function gc(e){let{variants:t,...n}=e,r={variants:t,style:go(n),isProcessed:!0};return r.style===n||t&&t.forEach(e=>{typeof e.style!=`function`&&(e.style=go(e.style))}),r}var _c=nc();function vc(e){return e!==`ownerState`&&e!==`theme`&&e!==`sx`&&e!==`as`}function yc(e,t){return t&&e&&typeof e==`object`&&e.styles&&!e.styles.startsWith(`@layer`)&&(e.styles=`@layer ${t}{${String(e.styles)}}`),e}function bc(e){return e?(t,n)=>n[e]:null}function xc(e,t,n){e.theme=jo(e.theme)?n:e.theme[t]||e.theme}function Sc(e,t,n){let r=typeof t==`function`?t(e):t;if(Array.isArray(r))return r.flatMap(t=>Sc(e,t,n));if(Array.isArray(r?.variants)){let t;if(r.isProcessed)t=n?yc(r.style,n):r.style;else{let{variants:e,...i}=r;t=n?yc(go(i),n):i}return Cc(e,r.variants,[t],n)}return r?.isProcessed?n?yc(go(r.style),n):r.style:n?yc(go(r),n):r}function Cc(e,t,n=[],r=void 0){let i;variantLoop:for(let a=0;a<t.length;a+=1){let o=t[a];if(typeof o.props==`function`){if(i??={...e,...e.ownerState,ownerState:e.ownerState},!o.props(i))continue}else for(let t in o.props)if(e[t]!==o.props[t]&&e.ownerState?.[t]!==o.props[t])continue variantLoop;typeof o.style==`function`?(i??={...e,...e.ownerState,ownerState:e.ownerState},n.push(r?yc(go(o.style(i)),r):o.style(i))):n.push(r?yc(go(o.style),r):o.style)}return n}function wc(e={}){let{themeId:t,defaultTheme:n=_c,rootShouldForwardProp:r=vc,slotShouldForwardProp:i=vc}=e;function a(e){xc(e,t,n)}return(e,t={})=>{mo(e,e=>e.filter(e=>e!==Qs));let{name:n,slot:o,skipVariantsResolver:s,skipSx:c,overridesResolver:l=bc(Ec(o)),...u}=t,d=n&&n.startsWith(`Mui`)||o?`components`:`custom`,f=s===void 0?o&&o!==`Root`&&o!==`root`||!1:s,p=c||!1,m=vc;o===`Root`||o===`root`?m=r:o?m=i:Tc(e)&&(m=void 0);let h=po(e,{shouldForwardProp:m,label:void 0,...u}),g=e=>{if(e.__emotion_real===e)return e;if(typeof e==`function`)return function(t){return Sc(t,e,t.theme.modularCssLayers?d:void 0)};if(yo(e)){let t=gc(e);return function(e){return t.variants?Sc(e,t,e.theme.modularCssLayers?d:void 0):e.theme.modularCssLayers?yc(t.style,d):t.style}}return e},_=(...t)=>{let r=[],i=t.map(g),o=[];if(r.push(a),n&&l&&o.push(function(e){let t=e.theme.components?.[n]?.styleOverrides;if(!t)return null;let r={};for(let n in t)r[n]=Sc(e,t[n],e.theme.modularCssLayers?`theme`:void 0);return l(e,r)}),n&&!f&&o.push(function(e){let t=e.theme?.components?.[n]?.variants;return t?Cc(e,t,[],e.theme.modularCssLayers?`theme`:void 0):null}),p||o.push(Qs),Array.isArray(i[0])){let e=i.shift(),t=Array(r.length).fill(``),n=Array(o.length).fill(``),a;a=[...t,...e,...n],a.raw=[...t,...e.raw,...n],r.unshift(a)}let s=[...r,...i,...o],c=h(...s);return e.muiName&&(c.muiName=e.muiName),c};return h.withConfig&&(_.withConfig=h.withConfig),_}}function Tc(e){return typeof e==`string`&&e.charCodeAt(0)>96}function Ec(e){return e&&e.charAt(0).toLowerCase()+e.slice(1)}var Dc=wc();function Oc(e,t,n=!1){let r={...t};for(let i in e)if(Object.prototype.hasOwnProperty.call(e,i)){let a=i;if(a===`components`||a===`slots`)r[a]={...e[a],...r[a]};else if(a===`componentsProps`||a===`slotProps`){let i=e[a],o=t[a];if(!o)r[a]=i||{};else if(!i)r[a]=o;else{r[a]={...o};for(let e in i)if(Object.prototype.hasOwnProperty.call(i,e)){let t=e;r[a][t]=Oc(i[t],o[t],n)}}}else a===`className`&&n&&t.className!==void 0?r.className=U(e?.className,t?.className):a===`style`&&n&&t.style?r.style={...e?.style,...t?.style}:r[a]===void 0&&(r[a]=e[a])}return r}function kc(e){let{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Oc(t.components[n].defaultProps,r)}function Ac(e){let{props:t,name:n,defaultTheme:r,themeId:i}=e,a=oc(r);return i&&(a=a[i]||a),kc({theme:a,name:n,props:t})}var jc=typeof window<`u`?_.useLayoutEffect:_.useEffect;function Mc(e,t=-(2**53-1),n=2**53-1){return Math.max(t,Math.min(e,n))}function Nc(e,t=0,n=1){return Mc(e,t,n)}function Pc(e){e=e.slice(1);let t=RegExp(`.{1,${e.length>=6?2:1}}`,`g`),n=e.match(t);return n&&n[0].length===1&&(n=n.map(e=>e+e)),n?`rgb${n.length===4?`a`:``}(${n.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(`, `)})`:``}function Fc(e){if(e.type)return e;if(e.charAt(0)===`#`)return Fc(Pc(e));let t=e.indexOf(`(`),n=e.substring(0,t);if(![`rgb`,`rgba`,`hsl`,`hsla`,`color`].includes(n))throw Error(ai(9,e));let r=e.substring(t+1,e.length-1),i;if(n===`color`){if(r=r.split(` `),i=r.shift(),r.length===4&&r[3].charAt(0)===`/`&&(r[3]=r[3].slice(1)),![`srgb`,`display-p3`,`a98-rgb`,`prophoto-rgb`,`rec-2020`].includes(i))throw Error(ai(10,i))}else r=r.split(`,`);return r=r.map(e=>parseFloat(e)),{type:n,values:r,colorSpace:i}}var Ic=e=>{let t=Fc(e);return t.values.slice(0,3).map((e,n)=>t.type.includes(`hsl`)&&n!==0?`${e}%`:e).join(` `)},Lc=(e,t)=>{try{return Ic(e)}catch{return e}};function Rc(e){let{type:t,colorSpace:n}=e,{values:r}=e;return t.includes(`rgb`)?r=r.map((e,t)=>t<3?parseInt(e,10):e):t.includes(`hsl`)&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=t.includes(`color`)?`${n} ${r.join(` `)}`:`${r.join(`, `)}`,`${t}(${r})`}function zc(e){e=Fc(e);let{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,a=r*Math.min(i,1-i),o=(e,t=(e+n/30)%12)=>i-a*Math.max(Math.min(t-3,9-t,1),-1),s=`rgb`,c=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return e.type===`hsla`&&(s+=`a`,c.push(t[3])),Rc({type:s,values:c})}function Bc(e){e=Fc(e);let t=e.type===`hsl`||e.type===`hsla`?Fc(zc(e)).values:e.values;return t=t.map(t=>(e.type!==`color`&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Vc(e,t){let n=Bc(e),r=Bc(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Hc(e,t){return e=Fc(e),t=Nc(t),(e.type===`rgb`||e.type===`hsl`)&&(e.type+=`a`),e.type===`color`?e.values[3]=`/${t}`:e.values[3]=t,Rc(e)}function Uc(e,t,n){try{return Hc(e,t)}catch{return e}}function Wc(e,t){if(e=Fc(e),t=Nc(t),e.type.includes(`hsl`))e.values[2]*=1-t;else if(e.type.includes(`rgb`)||e.type.includes(`color`))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Rc(e)}function Gc(e,t,n){try{return Wc(e,t)}catch{return e}}function Kc(e,t){if(e=Fc(e),t=Nc(t),e.type.includes(`hsl`))e.values[2]+=(100-e.values[2])*t;else if(e.type.includes(`rgb`))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.includes(`color`))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Rc(e)}function W(e,t,n){try{return Kc(e,t)}catch{return e}}function qc(e,t=.15){return Bc(e)>.5?Wc(e,t):Kc(e,t)}function Jc(e,t,n){try{return qc(e,t)}catch{return e}}var Yc=_.createContext(null);function Xc(){return _.useContext(Yc)}var Zc=typeof Symbol==`function`&&Symbol.for?Symbol.for(`mui.nested`):`__THEME_NESTED__`;function Qc(e,t){return typeof t==`function`?t(e):{...e,...t}}function $c(e){let{children:t,theme:n}=e,r=Xc(),i=_.useMemo(()=>{let e=r===null?{...n}:Qc(r,n);return e!=null&&(e[Zc]=r!==null),e},[n,r]);return(0,V.jsx)(Yc.Provider,{value:i,children:t})}var el=_.createContext();function tl({value:e,...t}){return(0,V.jsx)(el.Provider,{value:e??!0,...t})}var nl=()=>_.useContext(el)??!1,rl=_.createContext(void 0);function il({value:e,children:t}){return(0,V.jsx)(rl.Provider,{value:e,children:t})}function al(e){let{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n])return r;let i=t.components[n];return i.defaultProps?Oc(i.defaultProps,r,t.components.mergeClassNameAndStyle):!i.styleOverrides&&!i.variants?Oc(i,r,t.components.mergeClassNameAndStyle):r}function ol({props:e,name:t}){return al({props:e,name:t,theme:{components:_.useContext(rl)}})}var sl=0;function cl(e){let[t,n]=_.useState(e),r=e||t;return _.useEffect(()=>{t??(sl+=1,n(`mui-${sl}`))},[t]),r}var ll={..._}.useId;function ul(e){if(ll!==void 0){let t=ll();return e??t}return cl(e)}function dl(e){let t=ic(),n=ul()||``,{modularCssLayers:r}=e,i=`mui.global, mui.components, mui.theme, mui.custom, mui.sx`;return i=!r||t!==null?``:typeof r==`string`?r.replace(/mui(?!\.)/g,i):`@layer ${i};`,jc(()=>{let e=document.querySelector(`head`);if(!e)return;let t=e.firstChild;if(i){if(t&&t.hasAttribute?.(`data-mui-layer-order`)&&t.getAttribute(`data-mui-layer-order`)===n)return;let r=document.createElement(`style`);r.setAttribute(`data-mui-layer-order`,n),r.textContent=i,e.prepend(r)}else e.querySelector(`style[data-mui-layer-order="${n}"]`)?.remove()},[i,n]),i?(0,V.jsx)(cc,{styles:i}):null}var fl={};function pl(e,t,n,r=!1){return _.useMemo(()=>{let i=e&&t[e]||t;if(typeof n==`function`){let a=n(i),o=e?{...t,[e]:a}:a;return r?()=>o:o}return e?{...t,[e]:n}:{...t,...n}},[e,t,n,r])}function ml(e){let{children:t,theme:n,themeId:r}=e,i=ic(fl),a=Xc()||fl,o=pl(r,i,n),s=pl(r,a,n,!0),c=(r?o[r]:o).direction===`rtl`,l=dl(o);return(0,V.jsx)($c,{theme:s,children:(0,V.jsx)(Wa.Provider,{value:o,children:(0,V.jsx)(tl,{value:c,children:(0,V.jsxs)(il,{value:r?o[r].components:o.components,children:[l,t]})})})})}var hl={theme:void 0};function gl(e){let t,n;return function(r){let i=t;return(i===void 0||r.theme!==n)&&(hl.theme=r.theme,i=gc(e(hl)),t=i,n=r.theme),i}}var _l=`mode`,vl=`color-scheme`,yl=`data-color-scheme`;({..._}).useSyncExternalStore;function bl(e){let{defaultMode:t=`system`,defaultLightColorScheme:n=`light`,defaultDarkColorScheme:r=`dark`,modeStorageKey:i=_l,colorSchemeStorageKey:a=vl,attribute:o=yl,colorSchemeNode:s=`document.documentElement`,nonce:c}=e||{},l=``,u=o;if(o===`class`&&(u=`.%s`),o===`data`&&(u=`[data-%s]`),u.startsWith(`.`)){let e=u.substring(1);l+=`${s}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${s}.classList.add('${e}'.replace('%s', colorScheme));`}let d=u.match(/\[([^[\]]+)\]/);if(d){let[e,t]=d[1].split(`=`);t||(l+=`${s}.removeAttribute('${e}'.replace('%s', light));
      ${s}.removeAttribute('${e}'.replace('%s', dark));`),l+=`
      ${s}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:`""`});`}else u!==`.%s`&&(l+=`${s}.setAttribute('${u}', colorScheme);`);return(0,V.jsx)(`script`,{suppressHydrationWarning:!0,nonce:typeof window>`u`?c:``,dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i}') || '${t}';
  const dark = localStorage.getItem('${a}-dark') || '${r}';
  const light = localStorage.getItem('${a}-light') || '${n}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${l}
  }
} catch(e){}})();`}},`mui-color-scheme-init`)}function xl(){}var Sl=({key:e,storageWindow:t})=>(!t&&typeof window<`u`&&(t=window),{get(n){if(typeof window>`u`)return;if(!t)return n;let r;try{r=t.localStorage.getItem(e)}catch{}return r||n},set:n=>{if(t)try{t.localStorage.setItem(e,n)}catch{}},subscribe:n=>{if(!t)return xl;let r=t=>{let r=t.newValue;t.key===e&&n(r)};return t.addEventListener(`storage`,r),()=>{t.removeEventListener(`storage`,r)}}});function Cl(){}function wl(e){if(typeof window<`u`&&typeof window.matchMedia==`function`&&e===`system`)return window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}function Tl(e,t){if(e.mode===`light`||e.mode===`system`&&e.systemMode===`light`)return t(`light`);if(e.mode===`dark`||e.mode===`system`&&e.systemMode===`dark`)return t(`dark`)}function El(e){return Tl(e,t=>{if(t===`light`)return e.lightColorScheme;if(t===`dark`)return e.darkColorScheme})}function Dl(e){let{defaultMode:t=`light`,defaultLightColorScheme:n,defaultDarkColorScheme:r,supportedColorSchemes:i=[],modeStorageKey:a=_l,colorSchemeStorageKey:o=vl,storageWindow:s=typeof window>`u`?void 0:window,storageManager:c=Sl,noSsr:l=!1}=e,u=i.join(`,`),d=i.length>1,f=_.useMemo(()=>c?.({key:a,storageWindow:s}),[c,a,s]),p=_.useMemo(()=>c?.({key:`${o}-light`,storageWindow:s}),[c,o,s]),m=_.useMemo(()=>c?.({key:`${o}-dark`,storageWindow:s}),[c,o,s]),[h,g]=_.useState(()=>{let e=f?.get(t)||t,i=p?.get(n)||n,a=m?.get(r)||r;return{mode:e,systemMode:wl(e),lightColorScheme:i,darkColorScheme:a}}),[v,y]=_.useState(l||!d);_.useEffect(()=>{y(!0)},[]);let b=El(h),x=_.useCallback(e=>{g(n=>{if(e===n.mode)return n;let r=e??t;return f?.set(r),{...n,mode:r,systemMode:wl(r)}})},[f,t]),S=_.useCallback(e=>{e?typeof e==`string`?e&&!u.includes(e)?console.error(`\`${e}\` does not exist in \`theme.colorSchemes\`.`):g(t=>{let n={...t};return Tl(t,t=>{t===`light`&&(p?.set(e),n.lightColorScheme=e),t===`dark`&&(m?.set(e),n.darkColorScheme=e)}),n}):g(t=>{let i={...t},a=e.light===null?n:e.light,o=e.dark===null?r:e.dark;return a&&(u.includes(a)?(i.lightColorScheme=a,p?.set(a)):console.error(`\`${a}\` does not exist in \`theme.colorSchemes\`.`)),o&&(u.includes(o)?(i.darkColorScheme=o,m?.set(o)):console.error(`\`${o}\` does not exist in \`theme.colorSchemes\`.`)),i}):g(e=>(p?.set(n),m?.set(r),{...e,lightColorScheme:n,darkColorScheme:r}))},[u,p,m,n,r]),C=_.useCallback(e=>{h.mode===`system`&&g(t=>{let n=e?.matches?`dark`:`light`;return t.systemMode===n?t:{...t,systemMode:n}})},[h.mode]),w=_.useRef(C);return w.current=C,_.useEffect(()=>{if(typeof window.matchMedia!=`function`||!d)return;let e=(...e)=>w.current(...e),t=window.matchMedia(`(prefers-color-scheme: dark)`);return t.addListener(e),e(t),()=>{t.removeListener(e)}},[d]),_.useEffect(()=>{if(d){let e=f?.subscribe(e=>{(!e||[`light`,`dark`,`system`].includes(e))&&x(e||t)})||Cl,n=p?.subscribe(e=>{(!e||u.match(e))&&S({light:e})})||Cl,r=m?.subscribe(e=>{(!e||u.match(e))&&S({dark:e})})||Cl;return()=>{e(),n(),r()}}},[S,x,u,t,s,d,f,p,m]),{...h,mode:v?h.mode:void 0,systemMode:v?h.systemMode:void 0,colorScheme:v?b:void 0,setMode:x,setColorScheme:S}}var Ol=`*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`;function kl(e){let{themeId:t,theme:n={},modeStorageKey:r=_l,colorSchemeStorageKey:i=vl,disableTransitionOnChange:a=!1,defaultColorScheme:o,resolveTheme:s}=e,c={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},l=_.createContext(void 0),u=()=>_.useContext(l)||c,d={},f={};function p(e){let{children:c,theme:u,modeStorageKey:p=r,colorSchemeStorageKey:m=i,disableTransitionOnChange:h=a,storageManager:g,storageWindow:v=typeof window>`u`?void 0:window,documentNode:y=typeof document>`u`?void 0:document,colorSchemeNode:b=typeof document>`u`?void 0:document.documentElement,disableNestedContext:x=!1,disableStyleSheetGeneration:S=!1,defaultMode:C=`system`,forceThemeRerender:w=!1,noSsr:T}=e,E=_.useRef(!1),D=Xc(),O=_.useContext(l),k=!!O&&!x,A=_.useMemo(()=>u||(typeof n==`function`?n():n),[u]),ee=A[t],j=ee||A,{colorSchemes:M=d,components:N=f,cssVarPrefix:te}=j,P=Object.keys(M).filter(e=>!!M[e]).join(`,`),F=_.useMemo(()=>P.split(`,`),[P]),ne=typeof o==`string`?o:o.light,re=typeof o==`string`?o:o.dark,{mode:ie,setMode:ae,systemMode:oe,lightColorScheme:I,darkColorScheme:se,colorScheme:ce,setColorScheme:le}=Dl({supportedColorSchemes:F,defaultLightColorScheme:ne,defaultDarkColorScheme:re,modeStorageKey:p,colorSchemeStorageKey:m,defaultMode:M[ne]&&M[re]?C:M[j.defaultColorScheme]?.palette?.mode||j.palette?.mode,storageManager:g,storageWindow:v,noSsr:T}),ue=ie,de=ce;k&&(ue=O.mode,de=O.colorScheme);let fe=de||j.defaultColorScheme;j.vars&&!w&&(fe=j.defaultColorScheme);let pe=_.useMemo(()=>{let e=j.generateThemeVars?.()||j.vars,t={...j,components:N,colorSchemes:M,cssVarPrefix:te,vars:e};if(typeof t.generateSpacing==`function`&&(t.spacing=t.generateSpacing()),fe){let e=M[fe];e&&typeof e==`object`&&Object.keys(e).forEach(n=>{e[n]&&typeof e[n]==`object`?t[n]={...t[n],...e[n]}:t[n]=e[n]})}return s?s(t):t},[j,fe,N,M,te]),me=j.colorSchemeSelector;jc(()=>{if(de&&b&&me&&me!==`media`){let e=me,t=me;if(e===`class`&&(t=`.%s`),e===`data`&&(t=`[data-%s]`),e?.startsWith(`data-`)&&!e.includes(`%s`)&&(t=`[${e}="%s"]`),t.startsWith(`.`))b.classList.remove(...F.map(e=>t.substring(1).replace(`%s`,e))),b.classList.add(t.substring(1).replace(`%s`,de));else{let e=t.replace(`%s`,de).match(/\[([^\]]+)\]/);if(e){let[t,n]=e[1].split(`=`);n||F.forEach(e=>{b.removeAttribute(t.replace(de,e))}),b.setAttribute(t,n?n.replace(/"|'/g,``):``)}else b.setAttribute(t,de)}}},[de,me,b,F]),_.useEffect(()=>{let e;if(h&&E.current&&y){let t=y.createElement(`style`);t.appendChild(y.createTextNode(Ol)),y.head.appendChild(t),window.getComputedStyle(y.body),e=setTimeout(()=>{y.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[de,h,y]),_.useEffect(()=>(E.current=!0,()=>{E.current=!1}),[]);let he=_.useMemo(()=>({allColorSchemes:F,colorScheme:de,darkColorScheme:se,lightColorScheme:I,mode:ue,setColorScheme:le,setMode:ae,systemMode:oe}),[F,de,se,I,ue,le,ae,oe,pe.colorSchemeSelector]),ge=!0;(S||j.cssVariables===!1||k&&D?.cssVarPrefix===te)&&(ge=!1);let _e=(0,V.jsxs)(_.Fragment,{children:[(0,V.jsx)(ml,{themeId:ee?t:void 0,theme:pe,children:c}),ge&&(0,V.jsx)(fo,{styles:pe.generateStyleSheets?.()||[]})]});return k?_e:(0,V.jsx)(l.Provider,{value:he,children:_e})}let m=typeof o==`string`?o:o.light,h=typeof o==`string`?o:o.dark;return{CssVarsProvider:p,useColorScheme:u,getInitColorSchemeScript:e=>bl({colorSchemeStorageKey:i,defaultLightColorScheme:m,defaultDarkColorScheme:h,modeStorageKey:r,...e})}}function Al(e=``){function t(...n){if(!n.length)return``;let r=n[0];return typeof r==`string`&&!r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${e?`${e}-`:``}${r}${t(...n.slice(1))})`:`, ${r}`}return(n,...r)=>`var(--${e?`${e}-`:``}${n}${t(...r)})`}var jl=(e,t,n,r=[])=>{let i=e;t.forEach((e,a)=>{a===t.length-1?Array.isArray(i)?i[Number(e)]=n:i&&typeof i==`object`&&(i[e]=n):i&&typeof i==`object`&&(i[e]||(i[e]=r.includes(e)?[]:{}),i=i[e])})},Ml=(e,t,n)=>{function r(e,i=[],a=[]){Object.entries(e).forEach(([e,o])=>{(!n||n&&!n([...i,e]))&&o!=null&&(typeof o==`object`&&Object.keys(o).length>0?r(o,[...i,e],Array.isArray(o)?[...a,e]:a):t([...i,e],o,a))})}r(e)},Nl=(e,t)=>typeof t==`number`?[`lineHeight`,`fontWeight`,`opacity`,`zIndex`].some(t=>e.includes(t))||e[e.length-1].toLowerCase().includes(`opacity`)?t:`${t}px`:t;function Pl(e,t){let{prefix:n,shouldSkipGeneratingVar:r}=t||{},i={},a={},o={};return Ml(e,(e,t,s)=>{if((typeof t==`string`||typeof t==`number`)&&(!r||!r(e,t))){let r=`--${n?`${n}-`:``}${e.join(`-`)}`,c=Nl(e,t);Object.assign(i,{[r]:c}),jl(a,e,`var(${r})`,s),jl(o,e,`var(${r}, ${c})`,s)}},e=>e[0]===`vars`),{css:i,vars:a,varsWithDefaults:o}}function Fl(e,t={}){let{getSelector:n=_,disableCssColorScheme:r,colorSchemeSelector:i,enableContrastVars:a}=t,{colorSchemes:o={},components:s,defaultColorScheme:c=`light`,...l}=e,{vars:u,css:d,varsWithDefaults:f}=Pl(l,t),p=f,m={},{[c]:h,...g}=o;if(Object.entries(g||{}).forEach(([e,n])=>{let{vars:r,css:i,varsWithDefaults:a}=Pl(n,t);p=xo(p,a),m[e]={css:i,vars:r}}),h){let{css:e,vars:n,varsWithDefaults:r}=Pl(h,t);p=xo(p,r),m[c]={css:e,vars:n}}function _(t,n){let r=i;if(i===`class`&&(r=`.%s`),i===`data`&&(r=`[data-%s]`),i?.startsWith(`data-`)&&!i.includes(`%s`)&&(r=`[${i}="%s"]`),t){if(r===`media`)return e.defaultColorScheme===t?`:root`:{[`@media (prefers-color-scheme: ${o[t]?.palette?.mode||t})`]:{":root":n}};if(r)return e.defaultColorScheme===t?`:root, ${r.replace(`%s`,String(t))}`:r.replace(`%s`,String(t))}return`:root`}return{vars:p,generateThemeVars:()=>{let e={...u};return Object.entries(m).forEach(([,{vars:t}])=>{e=xo(e,t)}),e},generateStyleSheets:()=>{let t=[],i=e.defaultColorScheme||`light`;function s(e,n){Object.keys(n).length&&t.push(typeof e==`string`?{[e]:{...n}}:e)}s(n(void 0,{...d}),d);let{[i]:c,...l}=m;if(c){let{css:e}=c,t=o[i]?.palette?.mode,a=!r&&t?{colorScheme:t,...e}:{...e};s(n(i,{...a}),a)}return Object.entries(l).forEach(([e,{css:t}])=>{let i=o[e]?.palette?.mode,a=!r&&i?{colorScheme:i,...t}:{...t};s(n(e,{...a}),a)}),a&&t.push({":root":{"--__l-threshold":`0.7`,"--__l":`clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)`,"--__a":`clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)`}}),t}}}function Il(e){return function(t){return e===`media`?`@media (prefers-color-scheme: ${t})`:e?e.startsWith(`data-`)&&!e.includes(`%s`)?`[${e}="${t}"] &`:e===`class`?`.${t} &`:e===`data`?`[data-${t}] &`:`${e.replace(`%s`,t)} &`:`&`}}function Ll(e,t,n=void 0){let r={};for(let i in e){let a=e[i],o=``,s=!0;for(let e=0;e<a.length;e+=1){let r=a[e];r&&(o+=(s===!0?``:` `)+t(r),s=!1,n&&n[r]&&(o+=` `+n[r]))}r[i]=o}return r}var Rl=nc(),zl=Dc(`div`,{name:`MuiContainer`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${Zo(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),Bl=e=>Ac({props:e,name:`MuiContainer`,defaultTheme:Rl}),Vl=(e,t)=>{let n=e=>mc(t,e),{classes:r,fixed:i,disableGutters:a,maxWidth:o}=e;return Ll({root:[`root`,o&&`maxWidth${Zo(String(o))}`,i&&`fixed`,a&&`disableGutters`]},n,r)};function G(e={}){let{createStyledComponent:t=zl,useThemeProps:n=Bl,componentName:r=`MuiContainer`}=e,i=t(({theme:e,ownerState:t})=>({width:`100%`,marginLeft:`auto`,boxSizing:`border-box`,marginRight:`auto`,...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up(`sm`)]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,n)=>{let r=n,i=e.breakpoints.values[r];return i!==0&&(t[e.breakpoints.up(r)]={maxWidth:`${i}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>({...t.maxWidth===`xs`&&{[e.breakpoints.up(`xs`)]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&t.maxWidth!==`xs`&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}));return _.forwardRef(function(e,t){let a=n(e),{className:o,component:s=`div`,disableGutters:c=!1,fixed:l=!1,maxWidth:u=`lg`,classes:d,...f}=a,p={...a,component:s,disableGutters:c,fixed:l,maxWidth:u},m=Vl(p,r);return(0,V.jsx)(i,{as:s,ownerState:p,className:U(m.root,o),ref:t,...f})})}function K(){return{text:{primary:`rgba(0, 0, 0, 0.87)`,secondary:`rgba(0, 0, 0, 0.6)`,disabled:`rgba(0, 0, 0, 0.38)`},divider:`rgba(0, 0, 0, 0.12)`,background:{paper:Zr.white,default:Zr.white},action:{active:`rgba(0, 0, 0, 0.54)`,hover:`rgba(0, 0, 0, 0.04)`,hoverOpacity:.04,selected:`rgba(0, 0, 0, 0.08)`,selectedOpacity:.08,disabled:`rgba(0, 0, 0, 0.26)`,disabledBackground:`rgba(0, 0, 0, 0.12)`,disabledOpacity:.38,focus:`rgba(0, 0, 0, 0.12)`,focusOpacity:.12,activatedOpacity:.12}}}var Hl=K();function Ul(){return{text:{primary:Zr.white,secondary:`rgba(255, 255, 255, 0.7)`,disabled:`rgba(255, 255, 255, 0.5)`,icon:`rgba(255, 255, 255, 0.5)`},divider:`rgba(255, 255, 255, 0.12)`,background:{paper:`#121212`,default:`#121212`},action:{active:Zr.white,hover:`rgba(255, 255, 255, 0.08)`,hoverOpacity:.08,selected:`rgba(255, 255, 255, 0.16)`,selectedOpacity:.16,disabled:`rgba(255, 255, 255, 0.3)`,disabledBackground:`rgba(255, 255, 255, 0.12)`,disabledOpacity:.38,focus:`rgba(255, 255, 255, 0.12)`,focusOpacity:.12,activatedOpacity:.24}}}var Wl=Ul();function Gl(e,t,n,r){let i=r.light||r,a=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t===`light`?e.light=Kc(e.main,i):t===`dark`&&(e.dark=Wc(e.main,a)))}function Kl(e,t,n,r,i){let a=i.light||i,o=i.dark||i*1.5;t[n]||(t.hasOwnProperty(r)?t[n]=t[r]:n===`light`?t.light=`color-mix(in ${e}, ${t.main}, #fff ${(a*100).toFixed(0)}%)`:n===`dark`&&(t.dark=`color-mix(in ${e}, ${t.main}, #000 ${(o*100).toFixed(0)}%)`))}function ql(e=`light`){return e===`dark`?{main:ei[200],light:ei[50],dark:ei[400]}:{main:ei[700],light:ei[400],dark:ei[800]}}function Jl(e=`light`){return e===`dark`?{main:$r[200],light:$r[50],dark:$r[400]}:{main:$r[500],light:$r[300],dark:$r[700]}}function Yl(e=`light`){return e===`dark`?{main:Qr[500],light:Qr[300],dark:Qr[700]}:{main:Qr[700],light:Qr[400],dark:Qr[800]}}function Xl(e=`light`){return e===`dark`?{main:ti[400],light:ti[300],dark:ti[700]}:{main:ti[700],light:ti[500],dark:ti[900]}}function Zl(e=`light`){return e===`dark`?{main:ni[400],light:ni[300],dark:ni[700]}:{main:ni[800],light:ni[500],dark:ni[900]}}function Ql(e=`light`){return e===`dark`?{main:ri[400],light:ri[300],dark:ri[700]}:{main:`#ed6c02`,light:ri[500],dark:ri[900]}}function $l(e){return`oklch(from ${e} var(--__l) 0 h / var(--__a))`}function eu(e){let{mode:t=`light`,contrastThreshold:n=3,tonalOffset:r=.2,colorSpace:i,...a}=e,o=e.primary||ql(t),s=e.secondary||Jl(t),c=e.error||Yl(t),l=e.info||Xl(t),u=e.success||Zl(t),d=e.warning||Ql(t);function f(e){return i?$l(e):Vc(e,Wl.text.primary)>=n?Wl.text.primary:Hl.text.primary}let p=({color:e,name:t,mainShade:n=500,lightShade:a=300,darkShade:o=700})=>{if(e={...e},!e.main&&e[n]&&(e.main=e[n]),!e.hasOwnProperty(`main`))throw Error(ai(11,t?` (${t})`:``,n));if(typeof e.main!=`string`)throw Error(ai(12,t?` (${t})`:``,JSON.stringify(e.main)));return i?(Kl(i,e,`light`,a,r),Kl(i,e,`dark`,o,r)):(Gl(e,`light`,a,r),Gl(e,`dark`,o,r)),e.contrastText||=f(e.main),e},m;return t===`light`?m=K():t===`dark`&&(m=Ul()),xo({common:{...Zr},mode:t,primary:p({color:o,name:`primary`}),secondary:p({color:s,name:`secondary`,mainShade:`A400`,lightShade:`A200`,darkShade:`A700`}),error:p({color:c,name:`error`}),warning:p({color:d,name:`warning`}),info:p({color:l,name:`info`}),success:p({color:u,name:`success`}),grey:ii,contrastThreshold:n,getContrastText:f,augmentColor:p,tonalOffset:r,...m},a)}function tu(e){let t={};return Object.entries(e).forEach(e=>{let[n,r]=e;typeof r==`object`&&(t[n]=`${r.fontStyle?`${r.fontStyle} `:``}${r.fontVariant?`${r.fontVariant} `:``}${r.fontWeight?`${r.fontWeight} `:``}${r.fontStretch?`${r.fontStretch} `:``}${r.fontSize||``}${r.lineHeight?`/${r.lineHeight} `:``}${r.fontFamily||``}`)}),t}function nu(e,t){return{toolbar:{minHeight:56,[e.up(`xs`)]:{"@media (orientation: landscape)":{minHeight:48}},[e.up(`sm`)]:{minHeight:64}},...t}}function ru(e){return Math.round(e*1e5)/1e5}var iu={textTransform:`uppercase`},au=`"Roboto", "Helvetica", "Arial", sans-serif`;function ou(e,t){let{fontFamily:n=au,fontSize:r=14,fontWeightLight:i=300,fontWeightRegular:a=400,fontWeightMedium:o=500,fontWeightBold:s=700,htmlFontSize:c=16,allVariants:l,pxToRem:u,...d}=typeof t==`function`?t(e):t,f=r/14,p=u||(e=>`${e/c*f}rem`),m=(e,t,r,i,a)=>({fontFamily:n,fontWeight:e,fontSize:p(t),lineHeight:r,...n===au?{letterSpacing:`${ru(i/t)}em`}:{},...a,...l});return xo({htmlFontSize:c,pxToRem:p,fontFamily:n,fontSize:r,fontWeightLight:i,fontWeightRegular:a,fontWeightMedium:o,fontWeightBold:s,h1:m(i,96,1.167,-1.5),h2:m(i,60,1.2,-.5),h3:m(a,48,1.167,0),h4:m(a,34,1.235,.25),h5:m(a,24,1.334,0),h6:m(o,20,1.6,.15),subtitle1:m(a,16,1.75,.15),subtitle2:m(o,14,1.57,.1),body1:m(a,16,1.5,.15),body2:m(a,14,1.43,.15),button:m(o,14,1.75,.4,iu),caption:m(a,12,1.66,.4),overline:m(a,12,2.66,1,iu),inherit:{fontFamily:`inherit`,fontWeight:`inherit`,fontSize:`inherit`,lineHeight:`inherit`,letterSpacing:`inherit`}},d,{clone:!1})}var su=.2,cu=.14,lu=.12;function uu(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${su})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${cu})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${lu})`].join(`,`)}var du=[`none`,uu(0,2,1,-1,0,1,1,0,0,1,3,0),uu(0,3,1,-2,0,2,2,0,0,1,5,0),uu(0,3,3,-2,0,3,4,0,0,1,8,0),uu(0,2,4,-1,0,4,5,0,0,1,10,0),uu(0,3,5,-1,0,5,8,0,0,1,14,0),uu(0,3,5,-1,0,6,10,0,0,1,18,0),uu(0,4,5,-2,0,7,10,1,0,2,16,1),uu(0,5,5,-3,0,8,10,1,0,3,14,2),uu(0,5,6,-3,0,9,12,1,0,3,16,2),uu(0,6,6,-3,0,10,14,1,0,4,18,3),uu(0,6,7,-4,0,11,15,1,0,4,20,3),uu(0,7,8,-4,0,12,17,2,0,5,22,4),uu(0,7,8,-4,0,13,19,2,0,5,24,4),uu(0,7,9,-4,0,14,21,2,0,5,26,4),uu(0,8,9,-5,0,15,22,2,0,6,28,5),uu(0,8,10,-5,0,16,24,2,0,6,30,5),uu(0,8,11,-5,0,17,26,2,0,6,32,5),uu(0,9,11,-5,0,18,28,2,0,7,34,6),uu(0,9,12,-6,0,19,29,2,0,7,36,6),uu(0,10,13,-6,0,20,31,3,0,8,38,7),uu(0,10,13,-6,0,21,33,3,0,8,40,7),uu(0,10,14,-6,0,22,35,3,0,8,42,7),uu(0,11,14,-7,0,23,36,3,0,9,44,8),uu(0,11,15,-7,0,24,38,3,0,9,46,8)],fu=[`all`],pu={},mu={easeInOut:`cubic-bezier(0.4, 0, 0.2, 1)`,easeOut:`cubic-bezier(0.0, 0, 0.2, 1)`,easeIn:`cubic-bezier(0.4, 0, 1, 1)`,sharp:`cubic-bezier(0.4, 0, 0.6, 1)`},hu={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function gu(e){return`${Math.round(e)}ms`}function _u(e){if(!e)return 0;let t=e/36;return Math.min(Math.round((4+15*t**.25+t/5)*10),3e3)}function vu(e){let t={...e};delete t.reducedMotion;let n={...mu,...t.easing},r={...hu,...t.duration};return{getAutoHeightDuration:_u,create:t.create??((e=fu,t=pu)=>{let{duration:i=r.standard,easing:a=n.easeInOut,delay:o=0,...s}=t;return(Array.isArray(e)?e:[e]).map(e=>`${e} ${typeof i==`string`?i:gu(i)} ${a} ${typeof o==`string`?o:gu(o)}`).join(`,`)}),...t,easing:n,duration:r}}var yu={};function bu(e=yu){return{reducedMotion:`never`,...e}}var xu={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function Su(e){return yo(e)||e===void 0||typeof e==`string`||typeof e==`boolean`||typeof e==`number`||Array.isArray(e)}function Cu(e={}){let t={...e};function n(e){let t=Object.entries(e);for(let r=0;r<t.length;r++){let[i,a]=t[r];!Su(a)||i.startsWith(`unstable_`)||i.startsWith(`internal_`)?delete e[i]:yo(a)&&(e[i]={...a},n(e[i]))}}return n(t),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.motion = { reducedMotion: 'never', ...theme.motion };
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function wu(e){return typeof e==`number`?`${(e*100).toFixed(0)}%`:`calc((${e}) * 100%)`}var Tu=e=>{if(!Number.isNaN(+e))return+e;let t=e.match(/\d*\.?\d+/g);if(!t)return 0;let n=0;for(let e=0;e<t.length;e+=1)n+=+t[e];return n};function Eu(e){Object.assign(e,{alpha(t,n){let r=this||e;return r.colorSpace?`oklch(from ${t} l c h / ${typeof n==`string`?`calc(${n})`:n})`:r.vars?`rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g,`var(--$1Channel)`)} / ${typeof n==`string`?`calc(${n})`:n})`:Hc(t,Tu(n))},lighten(t,n){let r=this||e;return r.colorSpace?`color-mix(in ${r.colorSpace}, ${t}, #fff ${wu(n)})`:Kc(t,n)},darken(t,n){let r=this||e;return r.colorSpace?`color-mix(in ${r.colorSpace}, ${t}, #000 ${wu(n)})`:Wc(t,n)}})}function Du(e={},...t){let{breakpoints:n,mixins:r={},spacing:i,palette:a={},motion:o={},transitions:s={},typography:c={},shape:l,colorSpace:u,...d}=e;if(e.vars&&e.generateThemeVars===void 0)throw Error(ai(22));let f=eu({...a,colorSpace:u}),p=nc(e),m=xo(p,{mixins:nu(p.breakpoints,r),palette:f,shadows:du.slice(),typography:ou(f,c),motion:bu(o),transitions:vu(s),zIndex:{...xu}});return m=xo(m,d),m=t.reduce((e,t)=>xo(e,t),m),delete m.transitions.reducedMotion,m.unstable_sxConfig={...Ys,...d?.unstable_sxConfig},m.unstable_sx=function(e){return Qs({sx:e,theme:this})},m.toRuntimeSource=Cu,Eu(m),m}function Ou(e){let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,Math.round(t*10)/1e3}var ku=[...Array(25)].map((e,t)=>{if(t===0)return`none`;let n=Ou(t);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function Au(e){return{inputPlaceholder:e===`dark`?.5:.42,inputUnderline:e===`dark`?.7:.42,switchTrackDisabled:e===`dark`?.2:.12,switchTrack:e===`dark`?.3:.38}}function ju(e){return e===`dark`?ku:[]}function Mu(e){let{palette:t={mode:`light`},opacity:n,overlays:r,colorSpace:i,...a}=e,o=eu({...t,colorSpace:i});return{palette:o,opacity:{...Au(o.mode),...n},overlays:r||ju(o.mode),...a}}function Nu(e){return e[0]===`motion`||!!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!e[0].match(/sxConfig$/)||e[0]===`palette`&&!!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}var Pu=e=>[...[...Array(25)].map((t,n)=>`--${e?`${e}-`:``}overlays-${n}`),`--${e?`${e}-`:``}palette-AppBar-darkBg`,`--${e?`${e}-`:``}palette-AppBar-darkColor`],Fu=e=>(t,n)=>{let r=e.rootSelector||`:root`,i=e.colorSchemeSelector,a=i;if(i===`class`&&(a=`.%s`),i===`data`&&(a=`[data-%s]`),i?.startsWith(`data-`)&&!i.includes(`%s`)&&(a=`[${i}="%s"]`),e.defaultColorScheme===t){if(t===`dark`){let i={};return Pu(e.cssVarPrefix).forEach(e=>{i[e]=n[e],delete n[e]}),a===`media`?{[r]:n,"@media (prefers-color-scheme: dark)":{[r]:i}}:a?{[a.replace(`%s`,t)]:i,[`${r}, ${a.replace(`%s`,t)}`]:n}:{[r]:{...n,...i}}}if(a&&a!==`media`)return`${r}, ${a.replace(`%s`,String(t))}`}else if(t){if(a===`media`)return{[`@media (prefers-color-scheme: ${String(t)})`]:{[r]:n}};if(a)return a.replace(`%s`,String(t))}return r};function Iu(e,t){t.forEach(t=>{e[t]||(e[t]={})})}function q(e,t,n){!e[t]&&n&&(e[t]=n)}function Lu(e){return typeof e!=`string`||!e.startsWith(`hsl`)?e:zc(e)}function Ru(e,t){`${t}Channel`in e||(e[`${t}Channel`]=Lc(Lu(e[t]),`MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function zu(e){return typeof e==`number`?`${e}px`:typeof e==`string`||typeof e==`function`||Array.isArray(e)?e:`8px`}var Bu=e=>{try{return e()}catch{}},Vu=(e=`mui`)=>Al(e);function Hu(e,t,n,r,i){if(!n)return;n=n===!0?{}:n;let a=i===`dark`?`dark`:`light`;if(!r){t[i]=Mu({...n,palette:{mode:a,...n?.palette},colorSpace:e});return}let{palette:o,...s}=Du({...r,palette:{mode:a,...n?.palette},colorSpace:e});return t[i]={...n,palette:o,opacity:{...Au(a),...n?.opacity},overlays:n?.overlays||ju(a)},s}function Uu(e={},...t){let{colorSchemes:n={light:!0},defaultColorScheme:r,disableCssColorScheme:i=!1,cssVarPrefix:a=`mui`,nativeColor:o=!1,shouldSkipGeneratingVar:s=Nu,colorSchemeSelector:c=n.light&&n.dark?`media`:void 0,rootSelector:l=`:root`,...u}=e,d=Object.keys(n)[0],f=r||(n.light&&d!==`light`?`light`:d),p=Vu(a),{[f]:m,light:h,dark:g,..._}=n,v={..._},y=m;if((f===`dark`&&!(`dark`in n)||f===`light`&&!(`light`in n))&&(y=!0),!y)throw Error(ai(21,f));let b;o&&(b=`oklch`);let x=Hu(b,v,y,u,f);h&&!v.light&&Hu(b,v,h,void 0,`light`),g&&!v.dark&&Hu(b,v,g,void 0,`dark`);let S={defaultColorScheme:f,...x,cssVarPrefix:a,colorSchemeSelector:c,rootSelector:l,getCssVar:p,colorSchemes:v,font:{...tu(x.typography),...x.font},spacing:zu(u.spacing)};Object.keys(S.colorSchemes).forEach(e=>{let t=S.colorSchemes[e].palette,n=e=>{let n=e.split(`-`),r=n[1],i=n[2];return p(e,t[r][i])};t.mode===`light`&&(q(t.common,`background`,`#fff`),q(t.common,`onBackground`,`#000`)),t.mode===`dark`&&(q(t.common,`background`,`#000`),q(t.common,`onBackground`,`#fff`));function r(e,t,n){if(b){let r;return e===Uc&&(r=`transparent ${((1-n)*100).toFixed(0)}%`),e===Gc&&(r=`#000 ${(n*100).toFixed(0)}%`),e===W&&(r=`#fff ${(n*100).toFixed(0)}%`),`color-mix(in ${b}, ${t}, ${r})`}return e(t,n)}if(Iu(t,[`Alert`,`AppBar`,`Avatar`,`Button`,`Chip`,`FilledInput`,`LinearProgress`,`Skeleton`,`Slider`,`SnackbarContent`,`SpeedDialAction`,`StepConnector`,`StepContent`,`Switch`,`TableCell`,`Tooltip`]),t.mode===`light`){q(t.Alert,`errorColor`,r(Gc,o?p(`palette-error-light`):t.error.light,.6)),q(t.Alert,`infoColor`,r(Gc,o?p(`palette-info-light`):t.info.light,.6)),q(t.Alert,`successColor`,r(Gc,o?p(`palette-success-light`):t.success.light,.6)),q(t.Alert,`warningColor`,r(Gc,o?p(`palette-warning-light`):t.warning.light,.6)),q(t.Alert,`errorFilledBg`,n(`palette-error-main`)),q(t.Alert,`infoFilledBg`,n(`palette-info-main`)),q(t.Alert,`successFilledBg`,n(`palette-success-main`)),q(t.Alert,`warningFilledBg`,n(`palette-warning-main`)),q(t.Alert,`errorFilledColor`,Bu(()=>t.getContrastText(t.error.main))),q(t.Alert,`infoFilledColor`,Bu(()=>t.getContrastText(t.info.main))),q(t.Alert,`successFilledColor`,Bu(()=>t.getContrastText(t.success.main))),q(t.Alert,`warningFilledColor`,Bu(()=>t.getContrastText(t.warning.main))),q(t.Alert,`errorStandardBg`,r(W,o?p(`palette-error-light`):t.error.light,.9)),q(t.Alert,`infoStandardBg`,r(W,o?p(`palette-info-light`):t.info.light,.9)),q(t.Alert,`successStandardBg`,r(W,o?p(`palette-success-light`):t.success.light,.9)),q(t.Alert,`warningStandardBg`,r(W,o?p(`palette-warning-light`):t.warning.light,.9)),q(t.Alert,`errorIconColor`,n(`palette-error-main`)),q(t.Alert,`infoIconColor`,n(`palette-info-main`)),q(t.Alert,`successIconColor`,n(`palette-success-main`)),q(t.Alert,`warningIconColor`,n(`palette-warning-main`)),q(t.AppBar,`defaultBg`,n(`palette-grey-100`)),q(t.Avatar,`defaultBg`,n(`palette-grey-400`)),q(t.Button,`inheritContainedBg`,n(`palette-grey-300`)),q(t.Button,`inheritContainedHoverBg`,n(`palette-grey-A100`)),q(t.Chip,`defaultBorder`,n(`palette-grey-400`)),q(t.Chip,`defaultAvatarColor`,n(`palette-grey-700`)),q(t.Chip,`defaultIconColor`,n(`palette-grey-700`)),q(t.FilledInput,`bg`,`rgba(0, 0, 0, 0.06)`),q(t.FilledInput,`hoverBg`,`rgba(0, 0, 0, 0.09)`),q(t.FilledInput,`disabledBg`,`rgba(0, 0, 0, 0.12)`),q(t.LinearProgress,`primaryBg`,r(W,o?p(`palette-primary-main`):t.primary.main,.62)),q(t.LinearProgress,`secondaryBg`,r(W,o?p(`palette-secondary-main`):t.secondary.main,.62)),q(t.LinearProgress,`errorBg`,r(W,o?p(`palette-error-main`):t.error.main,.62)),q(t.LinearProgress,`infoBg`,r(W,o?p(`palette-info-main`):t.info.main,.62)),q(t.LinearProgress,`successBg`,r(W,o?p(`palette-success-main`):t.success.main,.62)),q(t.LinearProgress,`warningBg`,r(W,o?p(`palette-warning-light`):t.warning.main,.62)),q(t.Skeleton,`bg`,b?r(Uc,o?p(`palette-text-primary`):t.text.primary,.11):`rgba(${n(`palette-text-primaryChannel`)} / 0.11)`),q(t.Slider,`primaryTrack`,r(W,o?p(`palette-primary-main`):t.primary.main,.62)),q(t.Slider,`secondaryTrack`,r(W,o?p(`palette-secondary-main`):t.secondary.main,.62)),q(t.Slider,`errorTrack`,r(W,o?p(`palette-error-main`):t.error.main,.62)),q(t.Slider,`infoTrack`,r(W,o?p(`palette-info-main`):t.info.main,.62)),q(t.Slider,`successTrack`,r(W,o?p(`palette-success-main`):t.success.main,.62)),q(t.Slider,`warningTrack`,r(W,o?p(`palette-warning-main`):t.warning.main,.62));let e=b?r(Gc,o?p(`palette-background-default`):t.background.default,.6825):Jc(t.background.default,.8);q(t.SnackbarContent,`bg`,e),q(t.SnackbarContent,`color`,Bu(()=>b?Wl.text.primary:t.getContrastText(e))),q(t.SpeedDialAction,`fabHoverBg`,Jc(t.background.paper,.15)),q(t.StepConnector,`border`,n(`palette-grey-400`)),q(t.StepContent,`border`,n(`palette-grey-400`)),q(t.Switch,`defaultColor`,n(`palette-common-white`)),q(t.Switch,`defaultDisabledColor`,n(`palette-grey-100`)),q(t.Switch,`primaryDisabledColor`,r(W,o?p(`palette-primary-main`):t.primary.main,.62)),q(t.Switch,`secondaryDisabledColor`,r(W,o?p(`palette-secondary-main`):t.secondary.main,.62)),q(t.Switch,`errorDisabledColor`,r(W,o?p(`palette-error-main`):t.error.main,.62)),q(t.Switch,`infoDisabledColor`,r(W,o?p(`palette-info-main`):t.info.main,.62)),q(t.Switch,`successDisabledColor`,r(W,o?p(`palette-success-main`):t.success.main,.62)),q(t.Switch,`warningDisabledColor`,r(W,o?p(`palette-warning-main`):t.warning.main,.62)),q(t.TableCell,`border`,r(W,Uc(o?p(`palette-divider`):t.divider,1),.88)),q(t.Tooltip,`bg`,r(Uc,o?p(`palette-grey-700`):t.grey[700],.92))}if(t.mode===`dark`){q(t.Alert,`errorColor`,r(W,o?p(`palette-error-light`):t.error.light,.6)),q(t.Alert,`infoColor`,r(W,o?p(`palette-info-light`):t.info.light,.6)),q(t.Alert,`successColor`,r(W,o?p(`palette-success-light`):t.success.light,.6)),q(t.Alert,`warningColor`,r(W,o?p(`palette-warning-light`):t.warning.light,.6)),q(t.Alert,`errorFilledBg`,n(`palette-error-dark`)),q(t.Alert,`infoFilledBg`,n(`palette-info-dark`)),q(t.Alert,`successFilledBg`,n(`palette-success-dark`)),q(t.Alert,`warningFilledBg`,n(`palette-warning-dark`)),q(t.Alert,`errorFilledColor`,Bu(()=>t.getContrastText(t.error.dark))),q(t.Alert,`infoFilledColor`,Bu(()=>t.getContrastText(t.info.dark))),q(t.Alert,`successFilledColor`,Bu(()=>t.getContrastText(t.success.dark))),q(t.Alert,`warningFilledColor`,Bu(()=>t.getContrastText(t.warning.dark))),q(t.Alert,`errorStandardBg`,r(Gc,o?p(`palette-error-light`):t.error.light,.9)),q(t.Alert,`infoStandardBg`,r(Gc,o?p(`palette-info-light`):t.info.light,.9)),q(t.Alert,`successStandardBg`,r(Gc,o?p(`palette-success-light`):t.success.light,.9)),q(t.Alert,`warningStandardBg`,r(Gc,o?p(`palette-warning-light`):t.warning.light,.9)),q(t.Alert,`errorIconColor`,n(`palette-error-main`)),q(t.Alert,`infoIconColor`,n(`palette-info-main`)),q(t.Alert,`successIconColor`,n(`palette-success-main`)),q(t.Alert,`warningIconColor`,n(`palette-warning-main`)),q(t.AppBar,`defaultBg`,n(`palette-grey-900`)),q(t.AppBar,`darkBg`,n(`palette-background-paper`)),q(t.AppBar,`darkColor`,n(`palette-text-primary`)),q(t.Avatar,`defaultBg`,n(`palette-grey-600`)),q(t.Button,`inheritContainedBg`,n(`palette-grey-800`)),q(t.Button,`inheritContainedHoverBg`,n(`palette-grey-700`)),q(t.Chip,`defaultBorder`,n(`palette-grey-700`)),q(t.Chip,`defaultAvatarColor`,n(`palette-grey-300`)),q(t.Chip,`defaultIconColor`,n(`palette-grey-300`)),q(t.FilledInput,`bg`,`rgba(255, 255, 255, 0.09)`),q(t.FilledInput,`hoverBg`,`rgba(255, 255, 255, 0.13)`),q(t.FilledInput,`disabledBg`,`rgba(255, 255, 255, 0.12)`),q(t.LinearProgress,`primaryBg`,r(Gc,o?p(`palette-primary-main`):t.primary.main,.5)),q(t.LinearProgress,`secondaryBg`,r(Gc,o?p(`palette-secondary-main`):t.secondary.main,.5)),q(t.LinearProgress,`errorBg`,r(Gc,o?p(`palette-error-main`):t.error.main,.5)),q(t.LinearProgress,`infoBg`,r(Gc,o?p(`palette-info-main`):t.info.main,.5)),q(t.LinearProgress,`successBg`,r(Gc,o?p(`palette-success-main`):t.success.main,.5)),q(t.LinearProgress,`warningBg`,r(Gc,o?p(`palette-warning-main`):t.warning.main,.5)),q(t.Skeleton,`bg`,b?r(Uc,o?p(`palette-text-primary`):t.text.primary,.13):`rgba(${n(`palette-text-primaryChannel`)} / 0.13)`),q(t.Slider,`primaryTrack`,r(Gc,o?p(`palette-primary-main`):t.primary.main,.5)),q(t.Slider,`secondaryTrack`,r(Gc,o?p(`palette-secondary-main`):t.secondary.main,.5)),q(t.Slider,`errorTrack`,r(Gc,o?p(`palette-error-main`):t.error.main,.5)),q(t.Slider,`infoTrack`,r(Gc,o?p(`palette-info-main`):t.info.main,.5)),q(t.Slider,`successTrack`,r(Gc,o?p(`palette-success-main`):t.success.main,.5)),q(t.Slider,`warningTrack`,r(Gc,o?p(`palette-warning-light`):t.warning.main,.5));let e=b?r(W,o?p(`palette-background-default`):t.background.default,.985):Jc(t.background.default,.98);q(t.SnackbarContent,`bg`,e),q(t.SnackbarContent,`color`,Bu(()=>b?Hl.text.primary:t.getContrastText(e))),q(t.SpeedDialAction,`fabHoverBg`,Jc(t.background.paper,.15)),q(t.StepConnector,`border`,n(`palette-grey-600`)),q(t.StepContent,`border`,n(`palette-grey-600`)),q(t.Switch,`defaultColor`,n(`palette-grey-300`)),q(t.Switch,`defaultDisabledColor`,n(`palette-grey-600`)),q(t.Switch,`primaryDisabledColor`,r(Gc,o?p(`palette-primary-main`):t.primary.main,.55)),q(t.Switch,`secondaryDisabledColor`,r(Gc,o?p(`palette-secondary-main`):t.secondary.main,.55)),q(t.Switch,`errorDisabledColor`,r(Gc,o?p(`palette-error-main`):t.error.main,.55)),q(t.Switch,`infoDisabledColor`,r(Gc,o?p(`palette-info-main`):t.info.main,.55)),q(t.Switch,`successDisabledColor`,r(Gc,o?p(`palette-success-main`):t.success.main,.55)),q(t.Switch,`warningDisabledColor`,r(Gc,o?p(`palette-warning-light`):t.warning.main,.55)),q(t.TableCell,`border`,r(Gc,Uc(o?p(`palette-divider`):t.divider,1),.68)),q(t.Tooltip,`bg`,r(Uc,o?p(`palette-grey-700`):t.grey[700],.92))}o||(Ru(t.background,`default`),Ru(t.background,`paper`),Ru(t.common,`background`),Ru(t.common,`onBackground`),Ru(t,`divider`)),Object.keys(t).forEach(e=>{let n=t[e];e!==`tonalOffset`&&!o&&n&&typeof n==`object`&&(n.main&&q(t[e],`mainChannel`,Lc(Lu(n.main))),n.light&&q(t[e],`lightChannel`,Lc(Lu(n.light))),n.dark&&q(t[e],`darkChannel`,Lc(Lu(n.dark))),n.contrastText&&q(t[e],`contrastTextChannel`,Lc(Lu(n.contrastText))),e===`text`&&(Ru(t[e],`primary`),Ru(t[e],`secondary`)),e===`action`&&(n.active&&Ru(t[e],`active`),n.selected&&Ru(t[e],`selected`)))})}),S=t.reduce((e,t)=>xo(e,t),S);let C={prefix:a,disableCssColorScheme:i,shouldSkipGeneratingVar:s,getSelector:Fu(S),enableContrastVars:o},{vars:w,generateThemeVars:T,generateStyleSheets:E}=Fl(S,C);return S.vars=w,Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([e,t])=>{S[e]=t}),S.generateThemeVars=T,S.generateStyleSheets=E,S.generateSpacing=function(){return bs(u.spacing,ds(this))},S.getColorSchemeSelector=Il(c),S.spacing=S.generateSpacing(),S.shouldSkipGeneratingVar=s,S.unstable_sxConfig={...Ys,...u?.unstable_sxConfig},S.unstable_sx=function(e){return Qs({sx:e,theme:this})},S.internal_cache={},S.toRuntimeSource=Cu,S}function Wu(e,t,n){e.colorSchemes&&n&&(e.colorSchemes[t]={...n!==!0&&n,palette:eu({...n===!0?{}:n.palette,mode:t})})}function Gu(e={},...t){let{palette:n,cssVariables:r=!1,colorSchemes:i=n?void 0:{light:!0},defaultColorScheme:a=n?.mode,...o}=e,s=a||`light`,c=i?.[s],l={...i,...n?{[s]:{...typeof c!=`boolean`&&c,palette:n}}:void 0};if(r===!1){if(!(`colorSchemes`in e))return Du(e,...t);let r=n;`palette`in e||l[s]&&(l[s]===!0?s===`dark`&&(r={mode:`dark`}):r=l[s].palette);let i=Du({...e,palette:r},...t);return i.defaultColorScheme=s,i.colorSchemes=l,i.palette.mode===`light`&&(i.colorSchemes.light={...l.light!==!0&&l.light,palette:i.palette},Wu(i,`dark`,l.dark)),i.palette.mode===`dark`&&(i.colorSchemes.dark={...l.dark!==!0&&l.dark,palette:i.palette},Wu(i,`light`,l.light)),i}return!n&&!(`light`in l)&&s===`light`&&(l.light=!0),Uu({...o,colorSchemes:l,defaultColorScheme:s,...typeof r!=`boolean`&&r},...t)}function Ku(e){return typeof e==`string`}function qu(e,t=166){let n;function r(...r){clearTimeout(n),n=setTimeout(()=>{e.apply(this,r)},t)}return r.clear=()=>{clearTimeout(n)},r}function J(...e){let t=_.useRef(void 0),n=_.useCallback(t=>{let n=e.map(e=>{if(e==null)return null;if(typeof e==`function`){let n=e,r=n(t);return typeof r==`function`?r:()=>{n(null)}}return e.current=t,()=>{e.current=null}});return()=>{n.forEach(e=>e?.())}},e);return _.useMemo(()=>e.every(e=>e==null)?null:e=>{t.current&&=(t.current(),void 0),e!=null&&(t.current=n(e))},e)}function Ju(e){let t=_.useRef(e);return jc(()=>{t.current=e}),_.useRef((...e)=>(0,t.current)(...e)).current}function Yu(e){return e&&e.ownerDocument||document}function Xu(e){return Yu(e).defaultView||window}var Zu=Gu();function Qu(){let e=oc(Zu);return e.$$material||e}function $u(e){return(0,V.jsx)(cc,{...e,defaultTheme:Zu,themeId:oi})}function ed(e){return e!==`ownerState`&&e!==`theme`&&e!==`sx`&&e!==`as`}var td=e=>ed(e)&&e!==`classes`,Y=wc({themeId:oi,defaultTheme:Zu,rootShouldForwardProp:td});function nd(e){return function(t){return(0,V.jsx)($u,{styles:typeof e==`function`?n=>e({theme:n,...t}):e})}}var rd=gl;function id(e){return ol(e)}var X=Zo,ad=J,od=jc;function sd(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}var cd=sd,ld={transition:`none`};function ud(e,t){return e===`always`?t:e===`system`?{"@media (prefers-reduced-motion: reduce)":t}:null}var dd=e=>e.scrollTop,fd={offsetX:0,offsetY:0},pd={},md=[`all`],hd={},gd={matrix:[4,5],matrix3d:[12,13],translate:[0,1],translate3d:[0,1],translateX:[0,null],translateY:[null,0]};function _d(e){let t=parseFloat(e??``);return Number.isNaN(t)?0:t}function vd(e){let t=e.match(/^(matrix|matrix3d|translate|translate3d|translateX|translateY)\((.+)\)$/);return t?{type:t[1],values:t[2].split(`,`).map(_d)}:null}function yd(e,t){return t===null?0:e[t]||0}function bd(e){if(!e||e===`none`)return fd;let t=vd(e);if(!t)return fd;let{type:n,values:r}=t,i=gd[n];return i?{offsetX:yd(r,i[0]),offsetY:yd(r,i[1])}:fd}function Z(e,t){return n=>{if(t){let r=e.current;n===void 0?t(r):t(r,n)}}}function xd(e,t,n,r,i,a){let o=e===`exited`&&!t?r:n[e]||n.exited;return i||a?{...o,...i,...a}:o}function Sd(e,t){let{timeout:n,easing:r,style:i=pd}=e;return{duration:i.transitionDuration??(typeof n==`number`?n:n[t.mode]||0),easing:i.transitionTimingFunction??(typeof r==`object`?r[t.mode]:r),delay:i.transitionDelay}}function Cd(e,t){let n=t??ld;return ud(e.motion?.reducedMotion,n)}function wd(e,t=md,n=hd){let r=e.transitions?.create?.(t,n),i=Cd(e);if(r===void 0)return i??pd;let a={transition:r};return i?{...a,...i}:a}function Td(e){return mc(`MuiListItemButton`,e)}var Ed=hc(`MuiListItemButton`,[`root`,`focusVisible`,`dense`,`alignItemsFlexStart`,`disabled`,`divider`,`gutters`,`selected`]);function Dd({theme:e,...t}){let n=`$$material`in e?e[oi]:void 0;return(0,V.jsx)(ml,{...t,themeId:n?oi:void 0,theme:n||e})}var Od={attribute:`data-mui-color-scheme`,colorSchemeStorageKey:`mui-color-scheme`,defaultLightColorScheme:`light`,defaultDarkColorScheme:`dark`,modeStorageKey:`mui-mode`},{CssVarsProvider:kd,useColorScheme:Ad,getInitColorSchemeScript:jd}=kl({themeId:oi,theme:()=>Gu({cssVariables:!0}),colorSchemeStorageKey:Od.colorSchemeStorageKey,modeStorageKey:Od.modeStorageKey,defaultColorScheme:{light:Od.defaultLightColorScheme,dark:Od.defaultDarkColorScheme},resolveTheme:e=>{let t={...e,typography:ou(e.palette,e.typography)};return t.unstable_sx=function(e){return Qs({sx:e,theme:this})},t}}),Md=kd;function Nd({theme:e,...t}){let n=_.useMemo(()=>{if(typeof e==`function`)return e;let t=`$$material`in e?e[oi]:e;return`colorSchemes`in t?null:`vars`in t?e:{...e,vars:null}},[e]);return n?(0,V.jsx)(Dd,{theme:n,...t}):(0,V.jsx)(Md,{theme:e,...t})}function Pd(...e){return e.reduce((e,t)=>t==null?e:function(...n){e.apply(this,n),t.apply(this,n)},()=>{})}function Fd(e){return mc(`MuiSvgIcon`,e)}hc(`MuiSvgIcon`,[`root`,`colorPrimary`,`colorSecondary`,`colorAction`,`colorError`,`colorDisabled`,`fontSizeInherit`,`fontSizeSmall`,`fontSizeMedium`,`fontSizeLarge`]);var Id=e=>{let{color:t,fontSize:n,classes:r}=e;return Ll({root:[`root`,t!==`inherit`&&`color${X(t)}`,`fontSize${X(n)}`]},Fd,r)},Ld=Y(`svg`,{name:`MuiSvgIcon`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.color!==`inherit`&&t[`color${X(n.color)}`],t[`fontSize${X(n.fontSize)}`]]}})(rd(({theme:e})=>({userSelect:`none`,width:`1em`,height:`1em`,display:`inline-block`,flexShrink:0,...wd(e,`fill`,{duration:(e.vars??e).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:`currentColor`}},{props:{fontSize:`inherit`},style:{fontSize:`inherit`}},{props:{fontSize:`small`},style:{fontSize:e.typography?.pxToRem?.(20)||`1.25rem`}},{props:{fontSize:`medium`},style:{fontSize:e.typography?.pxToRem?.(24)||`1.5rem`}},{props:{fontSize:`large`},style:{fontSize:e.typography?.pxToRem?.(35)||`2.1875rem`}},...Object.entries((e.vars??e).palette).filter(([,e])=>e&&e.main).map(([t])=>({props:{color:t},style:{color:(e.vars??e).palette?.[t]?.main}})),{props:{color:`action`},style:{color:(e.vars??e).palette?.action?.active}},{props:{color:`disabled`},style:{color:(e.vars??e).palette?.action?.disabled}},{props:{color:`inherit`},style:{color:void 0}}]}))),Rd=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiSvgIcon`}),{children:r,className:i,color:a=`inherit`,component:o=`svg`,fontSize:s=`medium`,htmlColor:c,inheritViewBox:l=!1,titleAccess:u,viewBox:d=`0 0 24 24`,...f}=n,p=_.isValidElement(r)&&r.type===`svg`,m={...n,color:a,component:o,fontSize:s,instanceFontSize:e.fontSize,inheritViewBox:l,viewBox:d,hasSvgAsChild:p},h={};l||(h.viewBox=d);let g=Id(m);return(0,V.jsxs)(Ld,{as:o,className:U(g.root,i),focusable:`false`,color:c,"aria-hidden":u?void 0:!0,role:u?`img`:void 0,ref:t,...h,...f,...p&&r.props,ownerState:m,children:[p?r.props.children:r,u?(0,V.jsx)(`title`,{children:u}):null]})});Rd.muiName=`SvgIcon`;function zd(e,t){function n(t,n){return(0,V.jsx)(Rd,{"data-testid":void 0,ref:n,...t,children:e})}return n.muiName=Rd.muiName,_.memo(_.forwardRef(n))}var Bd=qu,Vd=Xu;function Hd(e,t){typeof e==`function`?e(t):e&&(e.current=t)}var Ud=ul,Wd=Ju;function Gd(e,t){let n=e.charCodeAt(2);return e[0]===`o`&&e[1]===`n`&&n>=65&&n<=90&&typeof t==`function`}function Kd(e,t){if(!e)return t;function n(e,t){let n={};return Object.keys(t).forEach(r=>{Gd(r,t[r])&&typeof e[r]==`function`&&(n[r]=(...n)=>{e[r](...n),t[r](...n)})}),n}if(typeof e==`function`||typeof t==`function`)return r=>{let i=typeof t==`function`?t(r):t,a=typeof e==`function`?e({...r,...i}):e,o=U(r?.className,i?.className,a?.className),s=n(a,i);return{...i,...a,...s,...!!o&&{className:o},...i?.style&&a?.style&&{style:{...i.style,...a.style}},...i?.sx&&a?.sx&&{sx:[...Array.isArray(i.sx)?i.sx:[i.sx],...Array.isArray(a.sx)?a.sx:[a.sx]]}}};let r=t,i=n(e,r),a=U(r?.className,e?.className);return{...t,...e,...i,...!!a&&{className:a},...r?.style&&e?.style&&{style:{...r.style,...e.style}},...r?.sx&&e?.sx&&{sx:[...Array.isArray(r.sx)?r.sx:[r.sx],...Array.isArray(e.sx)?e.sx:[e.sx]]}}}var qd={};function Jd(e,t){let n=_.useRef(qd);return n.current===qd&&(n.current=e(t)),n}function Yd(e){let t=Jd(()=>Xd(e)).current;return t.next=e,jc(t.effect),t}function Xd(e){let t={current:e,next:e,effect:()=>{t.current=t.next}};return t}var Zd=_.createContext(null);function Qd(e){if(e==null)return{appear:void 0,enter:void 0,exit:void 0};if(typeof e==`number`)return{appear:e,enter:e,exit:e};let t=e.enter,n=e.exit;return{appear:e.appear===void 0?t:e.appear,enter:t,exit:n}}function $d(e){if(e.autoTimeout!=null)return e.autoTimeout;let t=Qd(e.timeout);return e.currentStatus===`entering`?e.isAppearing?t.appear??t.enter??null:t.enter??null:t.exit??null}function ef(e){let{in:t=!1,appear:n=!1,enter:r=!0,exit:i=!0,mountOnEnter:a=!1,unmountOnExit:o=!1,timeout:s,addEndListener:c,reduceMotion:l=!1,getAutoTimeout:u,nodeRef:d,onEnter:f,onEntering:p,onEntered:m,onExit:h,onExiting:g,onExited:v,children:y,...b}=e,x=_.useContext(Zd),S=x&&!x.isMounting?r:n,[C,w]=_.useState(()=>t?S?`exited`:`entered`:a||o?`unmounted`:`exited`),T=_.useRef(C);T.current=C,t&&C===`unmounted`&&(T.current=`exited`,w(`exited`));let E=_.useRef(t&&S),D=_.useRef(!1),O=_.useRef(null),k=_.useRef(C),A=_.useRef(!1),ee=_.useRef(l),j=Yd({timeout:s,addEndListener:c,reduceMotion:l,getAutoTimeout:u,onEnter:f,onEntering:p,onEntered:m,onExit:h,onExiting:g,onExited:v,enter:r,exit:i,mountOnEnter:a,unmountOnExit:o,nodeRef:d,parentGroup:x}),M=_.useCallback(()=>{O.current!==null&&(O.current.cancel(),O.current=null)},[]),N=_.useCallback(e=>{let t=!0,n=()=>{t&&(t=!1,O.current=null,e())};return n.cancel=()=>{t=!1},O.current=n,n},[]),te=_.useCallback((e,t)=>{let n,r=()=>{n!==void 0&&(clearTimeout(n),n=void 0)},i=N(()=>{r(),T.current=e,w(e)}),a=i.cancel;i.cancel=()=>{r(),a()};let o=j.current.nodeRef.current,s=j.current.addEndListener,c=j.current.getAutoTimeout!==void 0,l=j.current.getAutoTimeout?.(),u=$d({currentStatus:t,isAppearing:A.current,timeout:j.current.timeout,autoTimeout:l}),d=ee.current,f=u??(d&&c?0:null),p=e=>{n=setTimeout(i,e)};if(!o){p(0);return}if(s){f!=null&&p(d?0:f),s.length>=2?s(o,i):s(i);return}p(d?0:u??0)},[N,j]),P=_.useCallback(e=>{let t=j.current,n=t.parentGroup?t.parentGroup.isMounting:e;if(A.current=n,!e&&!t.enter){T.current=`entered`,w(`entered`);return}ee.current=t.reduceMotion,t.onEnter?.(n),T.current=`entering`,w(`entering`)},[j]),F=_.useCallback(()=>{let e=j.current;if(!e.exit){T.current=`exited`,w(`exited`);return}ee.current=e.reduceMotion,e.onExit?.(),T.current=`exiting`,w(`exiting`)},[j]),ne=_.useCallback((e,t)=>{if(M(),t===`entering`){let t=j.current;if(t.mountOnEnter||t.unmountOnExit){let e=t.nodeRef.current;e&&dd(e)}P(e)}else F()},[M,P,F,j]);return jc(()=>(D.current=!0,E.current&&(E.current=!1,ne(!0,`entering`)),()=>{D.current=!1,M()}),[M,ne]),jc(()=>{if(!D.current)return;let e=T.current;t?e!==`entering`&&e!==`entered`&&ne(!1,`entering`):e===`entering`||e===`entered`?ne(!1,`exiting`):e===`exited`&&o&&(T.current=`unmounted`,w(`unmounted`))},[t,C,o,ne]),jc(()=>{if(C===`unmounted`||k.current===`unmounted`){k.current=C;return}if(k.current===C)return;k.current=C;let e=j.current;C===`entering`?(e.onEntering?.(A.current),te(`entered`,`entering`)):C===`exiting`?(e.onExiting?.(),te(`exited`,`exiting`)):C===`entered`?e.onEntered?.(A.current):C===`exited`&&e.onExited?.()},[j,te,C]),C===`unmounted`?null:(0,V.jsx)(Zd.Provider,{value:null,children:y(C,b)})}var tf=`(prefers-reduced-motion: reduce)`,nf=0,rf=`0ms`,af=()=>{},of=()=>!1,sf=()=>!0,cf=()=>af;function lf(e){let[t,n]=_.useState(()=>({enabled:e,matches:e?null:!1})),r=t.matches;return t.enabled!==e&&(r=null,e||(r=!1)),jc(()=>{let r=t=>{n(n=>n.enabled===e&&n.matches===t?n:{enabled:e,matches:t})};if(!e){t.enabled&&r(!1);return}if(typeof window>`u`||typeof window.matchMedia!=`function`){r(!1);return}let i=window.matchMedia(tf),a=()=>{r(i.matches)};return a(),i.addEventListener(`change`,a),()=>{i.removeEventListener(`change`,a)}},[e,t.enabled]),r}var uf={..._}.useSyncExternalStore;function df(e){let t=e?sf:of,[n,r]=_.useMemo(()=>{if(!e||typeof window>`u`||typeof window.matchMedia!=`function`)return[of,cf];let t=window.matchMedia(tf);return[()=>t.matches,e=>(t.addEventListener(`change`,e),()=>{t.removeEventListener(`change`,e)})]},[e]);return uf(r,n,t)}var ff=uf===void 0?lf:df;function pf(e,t){let n=ff(!t&&e===`system`),r=!t&&(e===`always`||e===`system`&&n!==!1);return _.useMemo(()=>({shouldReduceMotion:r,getTransitionTiming(e){return r?{duration:nf,delay:rf}:e}}),[r])}function mf(e,t,n){return e===void 0||Ku(e)?t:{...t,ownerState:{...t.ownerState,...n}}}function hf(e,t,n){return typeof e==`function`?e(t,n):e}function gf(e){if(e===void 0)return{};let t={};for(let n of Object.keys(e))Gd(n,e[n])&&(t[n]=e[n]);return t}function _f(e){if(e===void 0)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&typeof e[t]==`function`)).forEach(n=>{t[n]=e[n]}),t}function vf(e){let{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:a}=e;if(!t){let e=U(n?.className,a,i?.className,r?.className),t={...n?.style,...i?.style,...r?.style},o={...n,...i,...r};return e.length>0&&(o.className=e),Object.keys(t).length>0&&(o.style=t),{props:o,internalRef:void 0}}let o=gf({...i,...r}),s=_f(r),c=_f(i),l=t(o),u=U(l?.className,n?.className,a,i?.className,r?.className),d={...l?.style,...n?.style,...i?.style,...r?.style},f={...l,...n,...c,...s};return u.length>0&&(f.className=u),Object.keys(d).length>0&&(f.style=d),{props:f,internalRef:l.ref}}function yf(e,t){let{className:n,elementType:r,ownerState:i,externalForwardedProps:a,internalForwardedProps:o,shouldForwardComponentProp:s=!1,...c}=t,{component:l,slots:u={[e]:void 0},slotProps:d={[e]:void 0},...f}=a,p=u[e]||r,m=hf(d[e],i),{props:{component:h,...g},internalRef:_}=vf({className:n,...c,externalForwardedProps:e===`root`?f:void 0,externalSlotProps:m}),v=J(_,m?.ref,t.ref),y=e===`root`?h||l:h;return[p,mf(p,{...e===`root`&&!l&&!u[e]&&o,...e!==`root`&&!u[e]&&o,...g,...y&&!s&&{as:y},...y&&s&&{component:y},ref:v},i)]}function bf(e){return mc(`MuiCollapse`,e)}hc(`MuiCollapse`,[`root`,`horizontal`,`vertical`,`entered`,`hidden`,`wrapper`,`wrapperInner`]);var xf={},Sf=e=>{let{orientation:t,classes:n}=e;return Ll({root:[`root`,t],entered:[`entered`],hidden:[`hidden`],wrapper:[`wrapper`,t],wrapperInner:[`wrapperInner`,t]},bf,n)},Cf=Y(`div`,{name:`MuiCollapse`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.orientation],n.state===`entered`&&t.entered,n.state===`exited`&&!n.in&&n.collapsedSize===`0px`&&t.hidden]}})(rd(({theme:e})=>({height:0,overflow:`hidden`,transition:e.transitions.create(`height`),variants:[{props:{orientation:`horizontal`},style:{height:`auto`,width:0,transition:e.transitions.create(`width`)}},{props:{state:`entered`},style:{height:`auto`,overflow:`visible`}},{props:{state:`entered`,orientation:`horizontal`},style:{width:`auto`}},{props:({ownerState:e})=>e.state===`exited`&&!e.in&&e.collapsedSize===`0px`,style:{visibility:`hidden`}}]}))),wf=Y(`div`,{name:`MuiCollapse`,slot:`Wrapper`})({display:`flex`,width:`100%`,variants:[{props:{orientation:`horizontal`},style:{width:`auto`,height:`100%`}}]}),Tf=Y(`div`,{name:`MuiCollapse`,slot:`WrapperInner`})({width:`100%`,variants:[{props:{orientation:`horizontal`},style:{width:`auto`,height:`100%`}}]}),Ef=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiCollapse`}),{addEndListener:r,children:i,className:a,collapsedSize:o=`0px`,component:s,disablePrefersReducedMotion:c=!1,easing:l,in:u,onEnter:d,onEntered:f,onEntering:p,onExit:m,onExited:h,onExiting:g,orientation:v=`vertical`,slots:y=xf,slotProps:b=xf,style:x,timeout:S=hu.standard,TransitionComponent:C=ef,...w}=n,T={...n,orientation:v,collapsedSize:o},E=Sf(T),D=Qu(),O=_.useRef(null),k=_.useRef(null),A=typeof o==`number`?`${o}px`:o,ee=v===`horizontal`,j=ee?`width`:`height`,M=pf(D.motion.reducedMotion,c),N=_.useRef(null),te=ad(t,N),P=()=>O.current?O.current[ee?`clientWidth`:`clientHeight`]:0,F=Z(N,(e,t)=>{O.current&&ee&&(O.current.style.position=`absolute`),e.style[j]=A,d&&d(e,t)}),ne=Z(N,(e,t)=>{let n=P();O.current&&ee&&(O.current.style.position=``);let{duration:r,easing:i}=Sd({style:x,timeout:S,easing:l},{mode:`enter`});if(S===`auto`&&!M.shouldReduceMotion){let e=D.transitions.getAutoHeightDuration(n);k.current=e}else k.current=null;let a=M.getTransitionTiming({duration:k.current??r,delay:void 0});e.style.transitionDuration=typeof a.duration==`string`?a.duration:`${a.duration}ms`,e.style[j]=`${n}px`,e.style.transitionTimingFunction=i,p&&p(e,t)}),re=Z(N,(e,t)=>{e.style[j]=`auto`,f&&f(e,t)}),ie=Z(N,e=>{e.style[j]=`${P()}px`,m&&m(e)}),ae=Z(N,h),oe=Z(N,e=>{let t=P(),{duration:n,easing:r}=Sd({style:x,timeout:S,easing:l},{mode:`exit`});if(S===`auto`&&!M.shouldReduceMotion){let e=D.transitions.getAutoHeightDuration(t);k.current=e}else k.current=null;let i=M.getTransitionTiming({duration:k.current??n,delay:void 0});e.style.transitionDuration=typeof i.duration==`string`?i.duration:`${i.duration}ms`,e.style[j]=A,e.style.transitionTimingFunction=r,g&&g(e)}),I=r?e=>{r(N.current,e)}:void 0,se={slots:y,slotProps:b,component:s},[ce,le]=yf(`root`,{ref:te,className:U(E.root,a),elementType:Cf,externalForwardedProps:se,ownerState:T,additionalProps:{style:{[ee?`minWidth`:`minHeight`]:A,...x}}}),[ue,de]=yf(`wrapper`,{ref:O,className:E.wrapper,elementType:wf,externalForwardedProps:se,ownerState:T}),[fe,pe]=yf(`wrapperInner`,{className:E.wrapperInner,elementType:Tf,externalForwardedProps:se,ownerState:T});return(0,V.jsx)(C,{in:u,onEnter:F,onEntered:re,onEntering:ne,onExit:ie,onExited:ae,onExiting:oe,addEndListener:I,getAutoTimeout:S===`auto`?()=>k.current:void 0,reduceMotion:M.shouldReduceMotion,nodeRef:N,timeout:S===`auto`?null:S,...w,children:(e,{ownerState:t,...n})=>{let r={...T,state:e};return(0,V.jsx)(ce,{...le,className:U(le.className,{entered:E.entered,exited:!u&&A===`0px`&&E.hidden}[e]),ownerState:r,...n,children:(0,V.jsx)(ue,{...de,ownerState:r,children:(0,V.jsx)(fe,{...pe,ownerState:r,children:i})})})}})});Ef&&(Ef.muiSupportAuto=!0);function Df(e){return mc(`MuiPaper`,e)}hc(`MuiPaper`,`root.rounded.outlined.elevation.elevation0.elevation1.elevation2.elevation3.elevation4.elevation5.elevation6.elevation7.elevation8.elevation9.elevation10.elevation11.elevation12.elevation13.elevation14.elevation15.elevation16.elevation17.elevation18.elevation19.elevation20.elevation21.elevation22.elevation23.elevation24`.split(`.`));var Of=e=>{let{square:t,elevation:n,variant:r,classes:i}=e;return Ll({root:[`root`,r,!t&&`rounded`,r===`elevation`&&`elevation${n}`]},Df,i)},kf=Y(`div`,{name:`MuiPaper`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant===`elevation`&&t[`elevation${n.elevation}`]]}})(rd(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,...wd(e,`box-shadow`),variants:[{props:({ownerState:e})=>!e.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:`outlined`},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:`elevation`},style:{boxShadow:`var(--Paper-shadow)`,backgroundImage:`var(--Paper-overlay)`}}]}))),Af=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiPaper`}),r=Qu(),{className:i,component:a=`div`,elevation:o=1,square:s=!1,variant:c=`elevation`,...l}=n,u={...n,component:a,elevation:o,square:s,variant:c},d=Of(u);return(0,V.jsx)(kf,{as:a,ownerState:u,className:U(d.root,i),ref:t,...l,style:{...c===`elevation`&&{"--Paper-shadow":(r.vars||r).shadows[o],...r.vars&&{"--Paper-overlay":r.vars.overlays?.[o]},...!r.vars&&r.palette.mode===`dark`&&{"--Paper-overlay":`linear-gradient(${Hc(`#fff`,Ou(o))}, ${Hc(`#fff`,Ou(o))})`}},...l.style}})});function jf(e){try{return e.matches(`:focus-visible`)}catch{}return!1}function Mf(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:a}=e,o=r&&t!==!1,s=r&&t===!1;return _.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!a&&n&&(e.tabIndex=t?i:-1)),(a&&(t||o)||!a&&n)&&(e[`aria-disabled`]=n),a&&(!t||s)&&(e.disabled=n),e},[r,n,t,o,s,a,i])}var Nf={};function Pf(e){let{nativeButton:t,nativeButtonProp:n,internalNativeButton:r=t,allowInferredHostMismatch:i=!1,disabled:a,type:o,hasFormAction:s=!1,tabIndex:c=0,focusableWhenDisabled:l,stopEventPropagation:u=!1,onBeforeKeyDown:d,onBeforeKeyUp:f}=e,p=_.useRef(null),m=l===!0,h=Mf({focusableWhenDisabled:m,disabled:a,isNativeButton:t,tabIndex:c}),g=_.useCallback(()=>{let e=p.current;return e==null?t:e.tagName===`BUTTON`?!0:!!(e.tagName===`A`&&e.href)},[t]),v=_.useMemo(()=>{let e=m?{}:{tabIndex:a?-1:c};return t?(e.type=o===void 0&&!s?`button`:o,m||(e.disabled=a)):(e.role=`button`,!m&&a&&(e[`aria-disabled`]=a)),m?{...e,...h}:e},[a,m,h,s,t,c,o]);return{getButtonProps:_.useCallback((e=Nf)=>{let{onClick:t,onKeyDown:n,onKeyUp:r,...i}=e,o=e=>{if(u&&e.stopPropagation(),a){e.preventDefault();return}t?.(e)},s=e=>{if(m&&h.onKeyDown(e),!a&&(d?.(e),n?.(e),!(e.target!==e.currentTarget||g()))){if(e.key===` `){e.preventDefault();return}e.key===`Enter`&&(e.preventDefault(),e.currentTarget.click())}},c=e=>{a||(f?.(e),r?.(e),e.target===e.currentTarget&&!g()&&e.key===` `&&!e.defaultPrevented&&e.currentTarget.click())};return{...v,...i,onClick:o,onKeyDown:s,onKeyUp:c}},[v,a,m,h,g,d,f,u]),rootRef:p}}var Ff=class e{static create(){return new e}static use(){let t=Jd(e.create).current,[n,r]=_.useState(!1);return t.shouldMount=n,t.setShouldMount=r,_.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Lf(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}};function If(){return Ff.use()}function Lf(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}var Rf=[];function zf(e){_.useEffect(e,Rf)}var Bf=class e{static create(){return new e}currentId=null;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear};function Vf(){let e=Jd(Bf.create).current;return zf(e.disposeEffect),e}function Hf(e){let{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:a,rippleSize:o,in:s,onExited:c,timeout:l}=e,[u,d]=_.useState(!1),f=Vf(),p=_.useRef(!1),m=_.useRef(c);m.current=c;let h=c!=null,g=U(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),v={width:o,height:o,top:-(o/2)+a,left:-(o/2)+i},y=U(n.child,u&&n.childLeaving,r&&n.childPulsate);return!s&&!u&&d(!0),_.useEffect(()=>{!s&&h?p.current||(p.current=!0,f.start(l,()=>{p.current=!1,m.current?.()})):(p.current=!1,f.clear())},[f,h,s,l]),(0,V.jsx)(`span`,{className:g,style:v,children:(0,V.jsx)(`span`,{className:y})})}var Uf=hc(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`]),Wf=550,Gf={},Kf=[],qf=()=>{};function Jf(e,t){let n=new Set(t),r=new Map,i=[];for(let t of e)n.has(t)?i.length>0&&(r.set(t,i),i=[]):i.push(t);let a=[];for(let e of t){let t=r.get(e);t&&a.push(...t),a.push(e)}return a.push(...i),a}function Yf({event:e,element:t,center:n}){let r=t?t.getBoundingClientRect():{width:0,height:0,left:0,top:0},i,a;if(n||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)i=Math.round(r.width/2),a=Math.round(r.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;i=Math.round(t-r.left),a=Math.round(n-r.top)}let o;if(n)o=Math.sqrt((2*r.width**2+r.height**2)/3),o%2==0&&(o+=1);else{let e=Math.max(Math.abs((t?t.clientWidth:0)-i),i)*2+2,n=Math.max(Math.abs((t?t.clientHeight:0)-a),a)*2+2;o=Math.sqrt(e**2+n**2)}return{rippleX:i,rippleY:a,rippleSize:o}}var Xf=$a`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Zf=$a`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Qf=$a`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;function $f(e){if(e.motion.reducedMotion===`always`)return null;let t=Qa`
    &.${Uf.rippleVisible} {
      animation-name: ${Xf};
      animation-duration: ${Wf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Uf.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Uf.childLeaving} {
      animation-name: ${Zf};
      animation-duration: ${Wf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Uf.childPulsate} {
      animation-name: ${Qf};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;return e.motion.reducedMotion===`system`?Qa`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    `:t}var ep=Y(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),tp=Y(Hf,{name:`MuiTouchRipple`,slot:`Ripple`})`
  opacity: 0;
  position: absolute;

  &.${Uf.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${Uf.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Uf.childLeaving} {
    opacity: 0;
  }

  & .${Uf.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({theme:e})=>$f(e)}
`,np=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiTouchRipple`}),r=pf(Qu().motion.reducedMotion,!1),{center:i=!1,classes:a=Gf,className:o,...s}=n,[c,l]=_.useState({items:Kf,order:Kf}),u=c.items,d=_.useRef(0),f=_.useRef(null),p=_.useRef(!1);zf(()=>(p.current=!0,()=>{p.current=!1})),_.useEffect(()=>{f.current&&=(f.current(),null)},[u]);let m=_.useRef(!1),h=Vf(),g=_.useRef(null),v=_.useRef(null),y=Wd(e=>{p.current&&l(t=>{let n=t.items.filter(t=>t.key!==e);return{items:n,order:Jf(t.order.filter(t=>t!==e),n.filter(e=>!e.exiting).map(e=>e.key))}})}),b=Wd(e=>{let{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:a}=e,o=d.current;d.current+=1,l(e=>{let a=[...e.items,{key:o,pulsate:t,rippleX:n,rippleY:r,rippleSize:i,exiting:!1}];return{items:a,order:Jf(e.order,a.filter(e=>!e.exiting).map(e=>e.key))}}),f.current=a}),x=Wd((e=Gf,t=Gf,n=qf)=>{let{pulsate:r=!1,center:a=i||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&m.current){m.current=!1;return}e?.type===`touchstart`&&(m.current=!0);let{rippleX:s,rippleY:c,rippleSize:l}=Yf({event:e,element:o?null:v.current,center:a});e?.touches?g.current===null&&(g.current=()=>{b({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})},h.start(80,()=>{g.current&&=(g.current(),null)})):b({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})}),S=Wd(()=>{x(Gf,{pulsate:!0})}),C=Wd((e,t)=>{if(h.clear(),e?.type===`touchend`&&g.current){g.current(),g.current=null,h.start(0,()=>{C(e,t)});return}g.current=null,l(e=>{let t=e.items.findIndex(e=>!e.exiting);if(t===-1)return e;let n=e.items.slice();return n[t]={...n[t],exiting:!0},{items:n,order:Jf(e.order,n.filter(e=>!e.exiting).map(e=>e.key))}}),f.current=t});_.useImperativeHandle(t,()=>({pulsate:S,start:x,stop:C}),[S,x,C]);let w=new Map(u.map(e=>[e.key,e])),T=c.order.map(e=>w.get(e)).filter(Boolean);return(0,V.jsx)(ep,{className:U(Uf.root,a.root,o),ref:v,...s,children:T.map(e=>(0,V.jsx)(tp,{classes:{ripple:U(a.ripple,Uf.ripple),rippleVisible:U(a.rippleVisible,Uf.rippleVisible),ripplePulsate:U(a.ripplePulsate,Uf.ripplePulsate),child:U(a.child,Uf.child),childLeaving:U(a.childLeaving,Uf.childLeaving),childPulsate:U(a.childPulsate,Uf.childPulsate)},timeout:r.shouldReduceMotion?0:Wf,pulsate:e.pulsate,rippleX:e.rippleX,rippleY:e.rippleY,rippleSize:e.rippleSize,in:!e.exiting,onExited:()=>y(e.key)},e.key))})});function rp(e){return mc(`MuiButtonBase`,e)}var ip=hc(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`]),ap=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,suppressFocusVisible:i,classes:a}=e,o=Ll({root:[`root`,t&&`disabled`,n&&!i&&`focusVisible`]},rp,a);return n&&!i&&r&&(o.root+=` ${r}`),o},op=Y(`button`,{name:`MuiButtonBase`,slot:`Root`})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${ip.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),sp=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiButtonBase`}),{action:r,centerRipple:i=!1,children:a,className:o,component:s=`button`,disabled:c=!1,disableRipple:l=!1,disableTouchRipple:u=!1,focusRipple:d=!1,focusVisibleClassName:f,focusableWhenDisabled:p,suppressFocusVisible:m=!1,internalNativeButton:h,LinkComponent:g=`a`,nativeButton:v,onBlur:y,onClick:b,onContextMenu:x,onDragLeave:S,onFocus:C,onFocusVisible:w,onKeyDown:T,onKeyUp:E,onMouseDown:D,onMouseLeave:O,onMouseUp:k,onTouchEnd:A,onTouchMove:ee,onTouchStart:j,tabIndex:M=0,TouchRippleProps:N,touchRippleRef:te,type:P,...F}=n,ne=!!(F.href||F.to),re=!!F.formAction,ie=s;ie===`button`&&ne&&(ie=g);let ae=typeof ie==`string`?ie===`button`:h??!1,oe=v??ae,I=If(),se=ad(I.ref,te),[ce,le]=_.useState(!1);(c||m)&&ce&&le(!1);let ue=Wd(e=>{d&&!e.repeat&&ce&&e.key===` `&&I.stop(e,()=>{I.start(e)})}),de=Wd(e=>{d&&e.key===` `&&ce&&!e.defaultPrevented&&I.stop(e,()=>{I.pulsate(e)})}),{getButtonProps:fe,rootRef:pe}=Pf({nativeButton:oe,nativeButtonProp:v,internalNativeButton:ae,allowInferredHostMismatch:ne||typeof ie==`string`,disabled:c,type:P,hasFormAction:re,tabIndex:M,onBeforeKeyDown:ue,onBeforeKeyUp:de}),{onClick:me,onKeyDown:he,onKeyUp:ge,..._e}=fe({onClick:b,onKeyDown:T,onKeyUp:E});_.useImperativeHandle(r,()=>({focusVisible:()=>{le(!0),pe.current.focus()}}),[pe]);let ve=I.shouldMount&&!l&&!c;_.useEffect(()=>{ce&&d&&!l&&I.pulsate()},[l,d,ce,I]);let ye=cp(I,`start`,D,u),be=cp(I,`stop`,x,u),xe=cp(I,`stop`,S,u),Se=cp(I,`stop`,k,u),Ce=cp(I,`stop`,e=>{ce&&e.preventDefault(),O&&O(e)},u),we=cp(I,`start`,j,u),Te=cp(I,`stop`,A,u),Ee=cp(I,`stop`,ee,u),De=cp(I,`stop`,e=>{jf(e.target)||le(!1),y&&y(e)},!1),Oe=Wd(e=>{pe.current||=e.currentTarget,!m&&jf(e.target)&&(le(!0),w&&w(e)),C&&C(e)}),ke={};ne&&(ke.tabIndex=c?-1:M,c&&(ke[`aria-disabled`]=c),ke.type=P);let Ae=ad(t,pe),je={...n,centerRipple:i,component:s,disabled:c,disableRipple:l,disableTouchRipple:u,focusRipple:d,suppressFocusVisible:m,tabIndex:M,focusVisible:ce},Me=ap(je);return(0,V.jsxs)(op,{as:ie,className:U(Me.root,o),ownerState:je,onBlur:De,onClick:me,onContextMenu:be,onFocus:Oe,onKeyDown:he,onKeyUp:ge,onMouseDown:ye,onMouseLeave:Ce,onMouseUp:Se,onDragLeave:xe,onTouchEnd:Te,onTouchMove:Ee,onTouchStart:we,ref:Ae,...ne?ke:_e,...F,children:[a,ve?(0,V.jsx)(np,{ref:se,center:i,...N}):null]})});function cp(e,t,n,r=!1){return Wd(i=>(n&&n(i),r||e[t](i),!0))}function lp(e){return typeof e.main==`string`}function up(e,t=[]){if(!lp(e))return!1;for(let n of t)if(!e.hasOwnProperty(n)||typeof e[n]!=`string`)return!1;return!0}function dp(e=[]){return([,t])=>t&&up(t,e)}function fp(e){return mc(`MuiCircularProgress`,e)}hc(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`track`,`circle`,`circleDisableShrink`]);var pp=44,mp=$a`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,hp=$a`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,gp=typeof mp==`string`?null:Qa`
        animation: ${mp} 1.4s linear infinite;
      `,_p=typeof hp==`string`?null:Qa`
        animation: ${hp} 1.4s ease-in-out infinite;
      `,vp=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e;return Ll({root:[`root`,n,`color${X(r)}`],svg:[`svg`],track:[`track`],circle:[`circle`,i&&`circleDisableShrink`]},fp,t)},yp=Y(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${X(n.color)}`]]}})(rd(({theme:e})=>{let t=Cd(e,{animation:`none`});return{display:`inline-block`,variants:[{props:{variant:`determinate`},style:{...wd(e,`transform`)}},{props:{variant:`indeterminate`},style:gp||{animation:`${mp} 1.4s linear infinite`}},...t?[{props:{variant:`indeterminate`},style:t}]:[],...Object.entries(e.palette).filter(dp()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}})),bp=Y(`svg`,{name:`MuiCircularProgress`,slot:`Svg`})({display:`block`}),xp=Y(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,n.disableShrink&&t.circleDisableShrink]}})(rd(({theme:e})=>{let t=Cd(e,{animation:`none`});return{stroke:`currentColor`,variants:[{props:{variant:`determinate`},style:{...wd(e,`stroke-dashoffset`)}},{props:{variant:`indeterminate`},style:{strokeDasharray:`80px, 200px`,strokeDashoffset:0}},{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:_p||{animation:`${hp} 1.4s ease-in-out infinite`}},...t?[{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:t}]:[]]}})),Sp=Y(`circle`,{name:`MuiCircularProgress`,slot:`Track`})(rd(({theme:e})=>({stroke:`currentColor`,opacity:(e.vars||e).palette.action.activatedOpacity}))),Cp=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiCircularProgress`}),{className:r,color:i=`primary`,disableShrink:a=!1,enableTrackSlot:o=!1,min:s,max:c,size:l=40,style:u,thickness:d=3.6,value:f=n.min??0,variant:p=`indeterminate`,...m}=n,h=s??0,g=c??100,_={...n,color:i,disableShrink:a,size:l,thickness:d,value:f,variant:p,enableTrackSlot:o},v=vp(_),y={},b={},x={};if(p===`determinate`){let e=2*Math.PI*((pp-d)/2),t=g-h;y.strokeDasharray=e.toFixed(3),y.strokeDashoffset=t>0?`${((g-f)/t*e).toFixed(3)}px`:`${e.toFixed(3)}px`,b.transform=`rotate(-90deg)`,x[`aria-valuenow`]=f,x[`aria-valuemin`]=h,x[`aria-valuemax`]=g}return(0,V.jsx)(yp,{className:U(v.root,r),style:{width:l,height:l,...b,...u},ownerState:_,ref:t,role:`progressbar`,...x,...m,children:(0,V.jsxs)(bp,{className:v.svg,ownerState:_,viewBox:`${pp/2} ${pp/2} ${pp} ${pp}`,children:[o?(0,V.jsx)(Sp,{className:v.track,ownerState:_,cx:pp,cy:pp,r:(pp-d)/2,fill:`none`,strokeWidth:d,"aria-hidden":`true`}):null,(0,V.jsx)(xp,{className:v.circle,style:y,ownerState:_,cx:pp,cy:pp,r:(pp-d)/2,fill:`none`,strokeWidth:d})]})})});function wp(e){return mc(`MuiIconButton`,e)}var Tp=hc(`MuiIconButton`,[`root`,`disabled`,`colorInherit`,`colorPrimary`,`colorSecondary`,`colorError`,`colorInfo`,`colorSuccess`,`colorWarning`,`edgeStart`,`edgeEnd`,`sizeSmall`,`sizeMedium`,`sizeLarge`,`loading`,`loadingIndicator`,`loadingWrapper`]),Ep=e=>{let{classes:t,disabled:n,color:r,edge:i,size:a,loading:o}=e;return Ll({root:[`root`,o&&`loading`,n&&`disabled`,r!=="default"&&`color${X(r)}`,i&&`edge${X(i)}`,`size${X(a)}`],loadingIndicator:[`loadingIndicator`],loadingWrapper:[`loadingWrapper`]},wp,t)},Dp=Y(sp,{name:`MuiIconButton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.loading&&t.loading,n.color!=="default"&&t[`color${X(n.color)}`],n.edge&&t[`edge${X(n.edge)}`],t[`size${X(n.size)}`]]}})(rd(({theme:e})=>({textAlign:`center`,flex:`0 0 auto`,fontSize:e.typography.pxToRem(24),padding:8,borderRadius:`50%`,color:(e.vars||e).palette.action.active,...wd(e,`background-color`,{duration:e.transitions.duration.shortest}),variants:[{props:e=>!e.disableRipple,style:{"--IconButton-hoverBg":e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity),"&:hover":{backgroundColor:`var(--IconButton-hoverBg)`,"@media (hover: none)":{backgroundColor:`transparent`}}}},{props:{edge:`start`},style:{marginLeft:-12}},{props:{edge:`start`,size:`small`},style:{marginLeft:-3}},{props:{edge:`end`},style:{marginRight:-12}},{props:{edge:`end`,size:`small`},style:{marginRight:-3}}]})),rd(({theme:e})=>({variants:[{props:{color:`inherit`},style:{color:`inherit`}},...Object.entries(e.palette).filter(dp()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main,"--IconButton-hoverBg":e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.hoverOpacity)}})),{props:{size:`small`},style:{padding:5,fontSize:e.typography.pxToRem(18)}},{props:{size:`large`},style:{padding:12,fontSize:e.typography.pxToRem(28)}}],[`&.${Tp.disabled}`]:{backgroundColor:`transparent`,color:(e.vars||e).palette.action.disabled},[`&.${Tp.loading}`]:{color:`transparent`}}))),Op=Y(`span`,{name:`MuiIconButton`,slot:`LoadingIndicator`})(({theme:e})=>({display:`none`,position:`absolute`,visibility:`visible`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,color:(e.vars||e).palette.action.disabled,variants:[{props:{loading:!0},style:{display:`flex`}}]})),kp=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiIconButton`}),{edge:r=!1,children:i,className:a,color:o=`default`,disabled:s=!1,disableFocusRipple:c=!1,size:l=`medium`,id:u,loading:d=null,loadingIndicator:f,...p}=n,m=Ud(u),h=f??(0,V.jsx)(Cp,{"aria-labelledby":m,color:`inherit`,size:16}),g={...n,edge:r,color:o,disabled:s,disableFocusRipple:c,loading:d,loadingIndicator:h,size:l},_=Ep(g);return(0,V.jsxs)(Dp,{id:d?m:u,className:U(_.root,a),centerRipple:!0,internalNativeButton:!0,focusRipple:!c,disabled:s||d,ref:t,...p,ownerState:g,children:[typeof d==`boolean`&&(0,V.jsx)(`span`,{className:_.loadingWrapper,style:{display:`contents`},children:(0,V.jsx)(Op,{className:_.loadingIndicator,ownerState:g,children:d&&h})}),i]})});function Ap(e){return mc(`MuiTypography`,e)}var jp=hc(`MuiTypography`,[`root`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`subtitle1`,`subtitle2`,`body1`,`body2`,`inherit`,`button`,`caption`,`overline`,`alignLeft`,`alignRight`,`alignCenter`,`alignJustify`,`noWrap`,`gutterBottom`]),Mp=e=>{let{align:t,gutterBottom:n,noWrap:r,variant:i,classes:a}=e;return Ll({root:[`root`,i,e.align!==`inherit`&&`align${X(t)}`,n&&`gutterBottom`,r&&`noWrap`]},Ap,a)},Np=Y(`span`,{name:`MuiTypography`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!==`inherit`&&t[`align${X(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom]}})(rd(({theme:e})=>({margin:0,variants:[{props:{variant:`inherit`},style:{font:`inherit`,lineHeight:`inherit`,letterSpacing:`inherit`}},...Object.entries(e.typography).filter(([e,t])=>e!==`inherit`&&t&&typeof t==`object`).map(([e,t])=>({props:{variant:e},style:t})),...Object.entries(e.palette).filter(dp()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(e.palette?.text||{}).filter(([,e])=>typeof e==`string`).map(([t])=>({props:{color:`text${X(t)}`},style:{color:(e.vars||e).palette.text[t]}})),{props:({ownerState:e})=>e.align!==`inherit`,style:{textAlign:`var(--Typography-textAlign)`}},{props:({ownerState:e})=>e.noWrap,style:{overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`}},{props:({ownerState:e})=>e.gutterBottom,style:{marginBottom:`0.35em`}}]}))),Pp={h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,h6:`h6`,subtitle1:`h6`,subtitle2:`h6`,body1:`p`,body2:`p`,inherit:`p`},Fp=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiTypography`}),{color:r,align:i=`inherit`,className:a,component:o,gutterBottom:s=!1,noWrap:c=!1,variant:l=`body1`,variantMapping:u=Pp,...d}=n,f={...n,align:i,color:r,className:a,component:o,gutterBottom:s,noWrap:c,variant:l,variantMapping:u},p=o||u[l]||Pp[l]||`span`,m=Mp(f);return(0,V.jsx)(Np,{as:p,ref:t,className:U(m.root,a),...d,ownerState:f,style:{...i!==`inherit`&&{"--Typography-textAlign":i},...d.style}})});function Ip(e){return mc(`MuiAppBar`,e)}hc(`MuiAppBar`,[`root`,`positionFixed`,`positionAbsolute`,`positionSticky`,`positionStatic`,`positionRelative`,`colorDefault`,`colorPrimary`,`colorSecondary`,`colorInherit`,`colorTransparent`,`colorError`,`colorInfo`,`colorSuccess`,`colorWarning`]);var Lp=e=>{let{color:t,position:n,classes:r}=e;return Ll({root:[`root`,`color${X(t)}`,`position${X(n)}`]},Ip,r)},Rp=(e,t)=>e?`${e.replace(`)`,``)}, ${t})`:t,zp=Y(Af,{name:`MuiAppBar`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`position${X(n.position)}`],t[`color${X(n.color)}`]]}})(rd(({theme:e})=>({display:`flex`,flexDirection:`column`,width:`100%`,boxSizing:`border-box`,flexShrink:0,variants:[{props:{position:`fixed`},style:{position:`fixed`,zIndex:(e.vars||e).zIndex.appBar,top:0,left:`auto`,right:0,"@media print":{position:`absolute`}}},{props:{position:`absolute`},style:{position:`absolute`,zIndex:(e.vars||e).zIndex.appBar,top:0,left:`auto`,right:0}},{props:{position:`sticky`},style:{position:`sticky`,zIndex:(e.vars||e).zIndex.appBar,top:0,left:`auto`,right:0}},{props:{position:`static`},style:{position:`static`}},{props:{position:`relative`},style:{position:`relative`}},{props:{color:`inherit`},style:{"--AppBar-color":`inherit`,color:`var(--AppBar-color)`}},{props:{color:`default`},style:{"--AppBar-background":e.vars?e.vars.palette.AppBar.defaultBg:e.palette.grey[100],"--AppBar-color":e.vars?e.vars.palette.text.primary:e.palette.getContrastText(e.palette.grey[100]),...e.applyStyles(`dark`,{"--AppBar-background":e.vars?e.vars.palette.AppBar.defaultBg:e.palette.grey[900],"--AppBar-color":e.vars?e.vars.palette.text.primary:e.palette.getContrastText(e.palette.grey[900])})}},...Object.entries(e.palette).filter(dp([`contrastText`])).map(([t])=>({props:{color:t},style:{"--AppBar-background":(e.vars??e).palette[t].main,"--AppBar-color":(e.vars??e).palette[t].contrastText}})),{props:e=>e.enableColorOnDark===!0&&![`inherit`,`transparent`].includes(e.color),style:{backgroundColor:`var(--AppBar-background)`,color:`var(--AppBar-color)`}},{props:e=>e.enableColorOnDark===!1&&![`inherit`,`transparent`].includes(e.color),style:{backgroundColor:`var(--AppBar-background)`,color:`var(--AppBar-color)`,...e.applyStyles(`dark`,{backgroundColor:e.vars?Rp(e.vars.palette.AppBar.darkBg,`var(--AppBar-background)`):null,color:e.vars?Rp(e.vars.palette.AppBar.darkColor,`var(--AppBar-color)`):null})}},{props:{color:`transparent`},style:{"--AppBar-background":`transparent`,"--AppBar-color":`inherit`,backgroundColor:`var(--AppBar-background)`,color:`var(--AppBar-color)`,...e.applyStyles(`dark`,{backgroundImage:`none`})}}]}))),Bp=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiAppBar`}),{className:r,color:i=`primary`,enableColorOnDark:a=!1,position:o=`fixed`,...s}=n,c={...n,color:i,position:o,enableColorOnDark:a},l=Lp(c);return(0,V.jsx)(zp,{square:!0,component:`header`,ownerState:c,elevation:4,className:U(l.root,r,o===`fixed`&&`mui-fixed`),ref:t,...s})});function Vp(e,t){if(!e||!t)return!1;if(e.contains(t))return!0;let n=t.getRootNode?.();if(n&&n instanceof ShadowRoot){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode??n.host??null}}return!1}function Hp(e){return e?.props?.ref||null}var Up=c(m(),1);function Wp(e){return typeof e==`function`?e():e}var Gp=_.forwardRef(function(e,t){let{children:n,container:r,disablePortal:i=!1}=e,[a,o]=_.useState(null),s=J(_.isValidElement(n)?Hp(n):null,t);if(jc(()=>{i||o(Wp(r)||document.body)},[r,i]),jc(()=>{if(a&&!i)return Hd(t,a),()=>{Hd(t,null)}},[t,a,i]),i){if(_.isValidElement(n)){let e={ref:s};return _.cloneElement(n,e)}return n}return a&&Up.createPortal(n,a)}),Kp={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},qp={opacity:0,visibility:`hidden`},Jp=_.forwardRef(function(e,t){let n=Qu(),r={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:i,appear:a=!0,children:o,disablePrefersReducedMotion:s=!1,easing:c,in:l,onEnter:u,onEntered:d,onEntering:f,onExit:p,onExited:m,onExiting:h,style:g,timeout:v=r,...y}=e,b=pf(n.motion.reducedMotion,s),x=_.useRef(null),S=ad(x,Hp(o),t),C=Z(x,f),w=Z(x,(e,t)=>{b.shouldReduceMotion||dd(e);let r=Sd({style:g,timeout:v,easing:c},{mode:`enter`}),i=b.getTransitionTiming({duration:r.duration,delay:r.delay});e.style.transition=n.transitions.create(`opacity`,{duration:i.duration,easing:r.easing,delay:i.delay}),u&&u(e,t)}),T=Z(x,d),E=Z(x,h);return(0,V.jsx)(ef,{appear:a,in:l,nodeRef:x,onEnter:w,onEntered:T,onEntering:C,onExit:Z(x,e=>{let t=Sd({style:g,timeout:v,easing:c},{mode:`exit`}),r=b.getTransitionTiming({duration:t.duration,delay:t.delay});e.style.transition=n.transitions.create(`opacity`,{duration:r.duration,easing:t.easing,delay:r.delay}),p&&p(e)}),onExited:Z(x,e=>{e.style.transition=``,m&&m(e)}),onExiting:E,addEndListener:i?e=>{i(x.current,e)}:void 0,reduceMotion:b.shouldReduceMotion,timeout:v,...y,children:(e,{ownerState:t,...n})=>{let r=xd(e,l,Kp,qp,g,o.props.style);return _.cloneElement(o,{style:r,ref:S,...n})}})});function Yp(e){return mc(`MuiBackdrop`,e)}hc(`MuiBackdrop`,[`root`,`invisible`]);var Xp=e=>{let{classes:t,invisible:n}=e;return Ll({root:[`root`,n&&`invisible`]},Yp,t)},Zp=Y(`div`,{name:`MuiBackdrop`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})({position:`fixed`,display:`flex`,alignItems:`center`,justifyContent:`center`,right:0,bottom:0,top:0,left:0,backgroundColor:`rgba(0, 0, 0, 0.5)`,WebkitTapHighlightColor:`transparent`,variants:[{props:{invisible:!0},style:{backgroundColor:`transparent`}}]}),Qp=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiBackdrop`}),{children:r,className:i,component:a=`div`,invisible:o=!1,open:s,slotProps:c={},slots:l={},transitionDuration:u,...d}=n,f={...n,component:a,invisible:o},p=Xp(f),m={component:a,slots:l,slotProps:c},[h,g]=yf(`root`,{elementType:Zp,externalForwardedProps:m,className:U(p.root,i),ownerState:f}),[_,v]=yf(`transition`,{elementType:Jp,externalForwardedProps:m,ownerState:f});return(0,V.jsx)(_,{in:s,timeout:u,...d,...v,children:(0,V.jsx)(h,{...g,ref:t,children:r})})}),$p=hc(`MuiBox`,[`root`]),Q=fc({themeId:oi,defaultTheme:Gu(),defaultClassName:$p.root,generateClassName:uc.generate});function em(e){return mc(`MuiButton`,e)}var tm=hc(`MuiButton`,`root.text.outlined.contained.disableElevation.focusVisible.disabled.colorInherit.colorPrimary.colorSecondary.colorSuccess.colorError.colorInfo.colorWarning.sizeMedium.sizeSmall.sizeLarge.fullWidth.startIcon.endIcon.icon.loading.loadingWrapper.loadingIconPlaceholder.loadingIndicator.loadingPositionCenter.loadingPositionStart.loadingPositionEnd`.split(`.`)),nm=_.createContext({}),rm=_.createContext(void 0),im=e=>{let{color:t,disableElevation:n,fullWidth:r,size:i,variant:a,loading:o,loadingPosition:s,classes:c}=e,l=Ll({root:[`root`,o&&`loading`,a,`size${X(i)}`,`color${X(t)}`,n&&`disableElevation`,r&&`fullWidth`,o&&`loadingPosition${X(s)}`],startIcon:[`icon`,`startIcon`],endIcon:[`icon`,`endIcon`],loadingIndicator:[`loadingIndicator`],loadingWrapper:[`loadingWrapper`]},em,c);return{...c,...l}},am=[{props:{size:`small`},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:`medium`},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:`large`},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],om=Y(sp,{shouldForwardProp:e=>td(e)||e===`classes`,name:`MuiButton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`size${X(n.size)}`],n.color===`inherit`&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth,n.loading&&t.loading]}})(rd(({theme:e})=>{let t=e.palette.mode===`light`?e.palette.grey[300]:e.palette.grey[800],n=e.palette.mode===`light`?e.palette.grey.A100:e.palette.grey[700];return{...e.typography.button,minWidth:64,padding:`6px 16px`,border:0,borderRadius:(e.vars||e).shape.borderRadius,...wd(e,[`background-color`,`box-shadow`,`border-color`,`color`],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:`none`},[`&.${tm.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{variant:`contained`},style:{color:`var(--variant-containedColor)`,backgroundColor:`var(--variant-containedBg)`,boxShadow:(e.vars||e).shadows[2],"&:hover":{boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2]}},"&:active":{boxShadow:(e.vars||e).shadows[8]},[`&.${tm.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]},[`&.${tm.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}},{props:{variant:`outlined`},style:{padding:`5px 15px`,border:`1px solid currentColor`,borderColor:`var(--variant-outlinedBorder, currentColor)`,backgroundColor:`var(--variant-outlinedBg)`,color:`var(--variant-outlinedColor)`,[`&.${tm.disabled}`]:{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`}}},{props:{variant:`text`},style:{padding:`6px 8px`,color:`var(--variant-textColor)`,backgroundColor:`var(--variant-textBg)`}},...Object.entries(e.palette).filter(dp()).map(([t])=>({props:{color:t},style:{"--variant-textColor":(e.vars||e).palette[t].main,"--variant-outlinedColor":(e.vars||e).palette[t].main,"--variant-outlinedBorder":e.alpha((e.vars||e).palette[t].main,.5),"--variant-containedColor":(e.vars||e).palette[t].contrastText,"--variant-containedBg":(e.vars||e).palette[t].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(e.vars||e).palette[t].dark,"--variant-textBg":e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.hoverOpacity),"--variant-outlinedBorder":(e.vars||e).palette[t].main,"--variant-outlinedBg":e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.hoverOpacity)}}}})),{props:{color:`inherit`},style:{color:`inherit`,borderColor:`currentColor`,"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedHoverBg:n,"--variant-textBg":e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity),"--variant-outlinedBg":e.alpha((e.vars||e).palette.text.primary,(e.vars||e).palette.action.hoverOpacity)}}}},{props:{size:`small`,variant:`text`},style:{padding:`4px 5px`,fontSize:e.typography.pxToRem(13)}},{props:{size:`large`,variant:`text`},style:{padding:`8px 11px`,fontSize:e.typography.pxToRem(15)}},{props:{size:`small`,variant:`outlined`},style:{padding:`3px 9px`,fontSize:e.typography.pxToRem(13)}},{props:{size:`large`,variant:`outlined`},style:{padding:`7px 21px`,fontSize:e.typography.pxToRem(15)}},{props:{size:`small`,variant:`contained`},style:{padding:`4px 10px`,fontSize:e.typography.pxToRem(13)}},{props:{size:`large`,variant:`contained`},style:{padding:`8px 22px`,fontSize:e.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:`none`,"&:hover":{boxShadow:`none`},[`&.${tm.focusVisible}`]:{boxShadow:`none`},"&:active":{boxShadow:`none`},[`&.${tm.disabled}`]:{boxShadow:`none`}}},{props:{fullWidth:!0},style:{width:`100%`}},{props:{loadingPosition:`center`},style:{...wd(e,[`background-color`,`box-shadow`,`border-color`],{duration:e.transitions.duration.short}),[`&.${tm.loading}`]:{color:`transparent`}}}]}})),sm=Y(`span`,{name:`MuiButton`,slot:`StartIcon`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.startIcon,n.loading&&t.startIconLoadingStart]}})(({theme:e})=>({display:`inherit`,alignItems:`center`,marginRight:8,marginLeft:-4,"&::before":{content:`"\\200b"`,width:0,overflow:`hidden`},variants:[{props:{size:`small`},style:{marginLeft:-2}},{props:{loadingPosition:`start`,loading:!0},style:{...wd(e,[`opacity`],{duration:e.transitions.duration.short}),opacity:0}},{props:{loadingPosition:`start`,loading:!0,fullWidth:!0},style:{marginRight:-8}},...am]})),cm=Y(`span`,{name:`MuiButton`,slot:`EndIcon`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.endIcon,n.loading&&t.endIconLoadingEnd]}})(({theme:e})=>({display:`inherit`,marginRight:-4,marginLeft:8,variants:[{props:{size:`small`},style:{marginRight:-2}},{props:{loadingPosition:`end`,loading:!0},style:{...wd(e,[`opacity`],{duration:e.transitions.duration.short}),opacity:0}},{props:{loadingPosition:`end`,loading:!0,fullWidth:!0},style:{marginLeft:-8}},...am]})),lm=Y(`span`,{name:`MuiButton`,slot:`LoadingIndicator`})(({theme:e})=>({display:`none`,position:`absolute`,visibility:`visible`,variants:[{props:{loading:!0},style:{display:`flex`}},{props:{loadingPosition:`start`},style:{left:14}},{props:{loadingPosition:`start`,size:`small`},style:{left:10}},{props:{variant:`text`,loadingPosition:`start`},style:{left:6}},{props:{loadingPosition:`center`},style:{left:`50%`,transform:`translate(-50%)`,color:(e.vars||e).palette.action.disabled}},{props:{loadingPosition:`end`},style:{right:14}},{props:{loadingPosition:`end`,size:`small`},style:{right:10}},{props:{variant:`text`,loadingPosition:`end`},style:{right:6}},{props:{loadingPosition:`start`,fullWidth:!0},style:{position:`relative`,left:-10}},{props:{loadingPosition:`end`,fullWidth:!0},style:{position:`relative`,right:-10}}]})),um=Y(`span`,{name:`MuiButton`,slot:`LoadingIconPlaceholder`})({display:`inline-block`,width:`1em`,height:`1em`}),dm=_.forwardRef(function(e,t){let n=_.useContext(nm),r=_.useContext(rm),i=id({props:Oc(n,e),name:`MuiButton`}),{children:a,color:o=`primary`,component:s=`button`,className:c,disabled:l=!1,disableElevation:u=!1,disableFocusRipple:d=!1,endIcon:f,focusVisibleClassName:p,fullWidth:m=!1,id:h,loading:g=null,loadingIndicator:v,loadingPosition:y=`center`,size:b=`medium`,startIcon:x,type:S,variant:C=`text`,...w}=i,T=Ud(h),E=v??(0,V.jsx)(Cp,{"aria-labelledby":T,color:`inherit`,size:16}),D={...i,color:o,component:s,disabled:l,disableElevation:u,disableFocusRipple:d,fullWidth:m,loading:g,loadingIndicator:E,loadingPosition:y,size:b,type:S,variant:C},O=im(D),k=(x||g&&y===`start`)&&(0,V.jsx)(sm,{className:O.startIcon,ownerState:D,children:x||(0,V.jsx)(um,{className:O.loadingIconPlaceholder,ownerState:D})}),A=(f||g&&y===`end`)&&(0,V.jsx)(cm,{className:O.endIcon,ownerState:D,children:f||(0,V.jsx)(um,{className:O.loadingIconPlaceholder,ownerState:D})}),ee=r||``,j=typeof g==`boolean`?(0,V.jsx)(`span`,{className:O.loadingWrapper,style:{display:`contents`},children:g&&(0,V.jsx)(lm,{className:O.loadingIndicator,ownerState:D,children:E})}):null,{root:M,...N}=O;return(0,V.jsxs)(om,{ownerState:D,className:U(n.className,O.root,c,ee),component:s,disabled:l||g,focusRipple:!d,focusVisibleClassName:U(O.focusVisible,p),ref:t,internalNativeButton:!0,type:S,id:g?T:h,...w,classes:N,children:[k,y!==`end`&&j,a,y===`end`&&j,A]})}),fm=G({createStyledComponent:Y(`div`,{name:`MuiContainer`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${X(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>id({props:e,name:`MuiContainer`})}),pm=typeof nd({})==`function`,mm=(e,t)=>({WebkitFontSmoothing:`antialiased`,MozOsxFontSmoothing:`grayscale`,boxSizing:`border-box`,WebkitTextSizeAdjust:`100%`,...t&&!e.vars&&{colorScheme:e.palette.mode}}),hm=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),gm=(e,t=!1)=>{let n={};t&&e.colorSchemes&&typeof e.getColorSchemeSelector==`function`&&Object.entries(e.colorSchemes).forEach(([t,r])=>{let i=e.getColorSchemeSelector(t);i.startsWith(`@`)?n[i]={":root":{colorScheme:r.palette?.mode}}:n[i.replace(/\s*&/,``)]={colorScheme:r.palette?.mode}});let r={html:mm(e,t),"*, *::before, *::after":{boxSizing:`inherit`},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...hm(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...n},i=e.components?.MuiCssBaseline?.styleOverrides;return i&&(r=[r,i]),r},_m=`mui-ecs`,vm=e=>{let t=gm(e,!1),n=Array.isArray(t)?t[0]:t;return!e.vars&&n&&(n.html[`:root:has(${_m})`]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([t,r])=>{let i=e.getColorSchemeSelector(t);i.startsWith(`@`)?n[i]={[`:root:not(:has(.${_m}))`]:{colorScheme:r.palette?.mode}}:n[i.replace(/\s*&/,``)]={[`&:not(:has(.${_m}))`]:{colorScheme:r.palette?.mode}}}),t},ym=nd(pm?({theme:e,enableColorScheme:t})=>gm(e,t):({theme:e})=>vm(e));function bm(e){let{children:t,enableColorScheme:n=!1}=id({props:e,name:`MuiCssBaseline`});return(0,V.jsxs)(_.Fragment,{children:[pm&&(0,V.jsx)(ym,{enableColorScheme:n}),!pm&&!n&&(0,V.jsx)(`span`,{className:_m,style:{display:`none`}}),t]})}function xm(e=window){let t=e.document.documentElement.clientWidth;return e.innerWidth-t}function Sm(e){let t=Yu(e);return t.body===e?Xu(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Cm(e,t){t?e.setAttribute(`aria-hidden`,`true`):e.removeAttribute(`aria-hidden`)}function wm(e){return parseFloat(Xu(e).getComputedStyle(e).paddingRight)||0}function Tm(e){let t=[`TEMPLATE`,`SCRIPT`,`STYLE`,`LINK`,`MAP`,`META`,`NOSCRIPT`,`PICTURE`,`COL`,`COLGROUP`,`PARAM`,`SLOT`,`SOURCE`,`TRACK`].includes(e.tagName),n=e.tagName===`INPUT`&&e.getAttribute(`type`)===`hidden`;return t||n}function Em(e,t,n,r,i){let a=[t,n,...r];[].forEach.call(e.children,e=>{let t=!a.includes(e),n=!Tm(e);t&&n&&Cm(e,i)})}function Dm(e,t){let n=-1;return e.some((e,r)=>t(e)?(n=r,!0):!1),n}function Om(e,t){let n=[],r=e.container;if(!t.disableScrollLock){if(Sm(r)){let e=xm(Xu(r));n.push({value:r.style.paddingRight,property:`padding-right`,el:r}),r.style.paddingRight=`${wm(r)+e}px`;let t=Yu(r).querySelectorAll(`.mui-fixed`);[].forEach.call(t,t=>{n.push({value:t.style.paddingRight,property:`padding-right`,el:t}),t.style.paddingRight=`${wm(t)+e}px`})}let e;if(r.parentNode instanceof DocumentFragment)e=Yu(r).body;else{let t=r.parentElement,n=Xu(r);e=t?.nodeName===`HTML`&&n.getComputedStyle(t).overflowY===`scroll`?t:r}n.push({value:e.style.overflow,property:`overflow`,el:e},{value:e.style.overflowX,property:`overflow-x`,el:e},{value:e.style.overflowY,property:`overflow-y`,el:e}),e.style.overflow=`hidden`}return()=>{n.forEach(({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)})}}function km(e){let t=[];return[].forEach.call(e.children,e=>{e.getAttribute(`aria-hidden`)===`true`&&t.push(e)}),t}var Am=class{constructor(){this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(n!==-1)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&Cm(e.modalRef,!1);let r=km(t);Em(t,e.mount,e.modalRef,r,!0);let i=Dm(this.containers,e=>e.container===t);return i===-1?(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n):(this.containers[i].modals.push(e),n)}mount(e,t){let n=Dm(this.containers,t=>t.modals.includes(e)),r=this.containers[n];r.restore||=Om(r,t)}remove(e,t=!0){let n=this.modals.indexOf(e);if(n===-1)return n;let r=Dm(this.containers,t=>t.modals.includes(e)),i=this.containers[r];if(i.modals.splice(i.modals.indexOf(e),1),this.modals.splice(n,1),i.modals.length===0)i.restore&&i.restore(),e.modalRef&&Cm(e.modalRef,t),Em(i.container,e.mount,e.modalRef,i.hiddenSiblings,!1),this.containers.splice(r,1);else{let e=i.modals[i.modals.length-1];e.modalRef&&Cm(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}},jm=Vp,Mm=`data-mui-focusable`;function Nm(e){return e?e.hasAttribute(`data-mui-focusable`)?e:e.querySelector(`[${Mm}]`):null}var Pm=[`input`,`select`,`textarea`,`a[href]`,`button`,`[tabindex]`,`audio[controls]`,`video[controls]`,`[contenteditable]:not([contenteditable="false"])`].join(`,`);function Fm(e){let t=parseInt(e.getAttribute(`tabindex`)||``,10);return Number.isNaN(t)?e.contentEditable===`true`||(e.nodeName===`AUDIO`||e.nodeName===`VIDEO`||e.nodeName===`DETAILS`)&&e.getAttribute(`tabindex`)===null?0:e.tabIndex:t}function Im(e){if(e.tagName!==`INPUT`||e.type!==`radio`||!e.name)return!1;let t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`),n=t(`[name="${e.name}"]:checked`);return n||=t(`[name="${e.name}"]`),n!==e}function Lm(e){return!(e.disabled||e.tagName===`INPUT`&&e.type===`hidden`||Im(e))}function Rm(e){let t=[],n=[];return Array.from(e.querySelectorAll(Pm)).forEach((e,r)=>{let i=Fm(e);i===-1||!Lm(e)||(i===0?t.push(e):n.push({documentOrder:r,tabIndex:i,node:e}))}),n.sort((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex).map(e=>e.node).concat(t)}function zm(){return!0}function Bm(e){let{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:i=!1,getTabbable:a=Rm,isEnabled:o=zm,open:s}=e,c=_.useRef(!1),l=_.useRef(null),u=_.useRef(null),d=_.useRef(null),f=_.useRef(null),p=_.useRef(!1),m=_.useRef(null),h=J(Hp(t),m),g=_.useRef(null);_.useEffect(()=>{!s||!m.current||(p.current=!n)},[n,s]),_.useEffect(()=>{if(c.current=!1,!s||!m.current)return;let e=cd(Yu(m.current)),t=Nm(m.current)??m.current;return jm(m.current,e)||(t.hasAttribute(`tabIndex`)||t.setAttribute(`tabIndex`,`-1`),p.current&&t.focus()),()=>{!i&&d.current&&(c.current=!0,d.current.focus(),d.current=null)}},[s]),_.useEffect(()=>{if(!s||!m.current)return;let e=Yu(m.current),t=t=>{if(g.current=t,r||!o()||t.key!==`Tab`)return;let n=m.current,i=cd(e);if(n===null)return;let s=Nm(n);if(i===n||i===s){let e=a(n);if(e.length===0)return;t.preventDefault(),t.shiftKey?e[e.length-1].focus():e[0].focus();return}if(jm(n,i)){let e=a(n),r=e.indexOf(i);if(r===-1||!e.some(e=>Fm(e)>0))return;t.preventDefault();let o=0;o=t.shiftKey?r<=0?e.length-1:r-1:r===e.length-1?0:r+1,e[o].focus()}},n=()=>{let t=m.current;if(t===null)return;let n=cd(e);if(!e.hasFocus()||!o()||c.current){c.current=!1;return}if(jm(t,n)||r&&n!==l.current&&n!==u.current)return;if(n!==f.current)f.current=null;else if(f.current!==null)return;if(!p.current)return;let i=[];if((n===l.current||n===u.current)&&(i=a(m.current)),i.length>0){let e=!!(g.current?.shiftKey&&g.current?.key===`Tab`),t=i[0],n=i[i.length-1];typeof t!=`string`&&typeof n!=`string`&&(e?n.focus():t.focus())}else t.focus()};e.addEventListener(`focusin`,n),e.addEventListener(`keydown`,t,!0);let i=setInterval(()=>{let t=cd(e);t&&t.tagName===`BODY`&&n()},50);return()=>{clearInterval(i),e.removeEventListener(`focusin`,n),e.removeEventListener(`keydown`,t,!0)}},[n,r,i,o,s,a]);let v=e=>{d.current===null&&(d.current=e.relatedTarget),p.current=!0,f.current=e.target;let n=t.props.onFocus;n&&n(e)},y=e=>{d.current===null&&(d.current=e.relatedTarget),p.current=!0};return(0,V.jsxs)(_.Fragment,{children:[(0,V.jsx)(`div`,{tabIndex:s?0:-1,onFocus:y,ref:l,"data-testid":`sentinelStart`}),_.cloneElement(t,{ref:h,onFocus:v}),(0,V.jsx)(`div`,{tabIndex:s?0:-1,onFocus:y,ref:u,"data-testid":`sentinelEnd`})]})}function Vm(e){return typeof e==`function`?e():e}function Hm(e){return e?e.props.hasOwnProperty(`in`):!1}var Um=()=>{},Wm=new Am;function Gm(e){let{container:t,disableScrollLock:n=!1,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:a,children:o,onClose:s,open:c,rootRef:l}=e,u=_.useRef({}),d=_.useRef(null),f=_.useRef(null),p=J(f,l),[m,h]=_.useState(!c),g=Hm(o),v=!0;(e[`aria-hidden`]===`false`||e[`aria-hidden`]===!1)&&(v=!1);let y=()=>Yu(d.current),b=()=>(u.current.modalRef=f.current,u.current.mount=d.current,u.current),x=()=>{Wm.mount(b(),{disableScrollLock:n}),f.current&&(f.current.scrollTop=0)},S=Ju(()=>{let e=Vm(t)||y().body;Wm.add(b(),e),f.current&&x()}),C=()=>Wm.isTopModal(b()),w=Ju(e=>{d.current=e,e&&(c&&C()?x():f.current&&Cm(f.current,v))}),T=_.useCallback(()=>{Wm.remove(b(),v)},[v]);_.useEffect(()=>()=>{T()},[T]),_.useEffect(()=>{c?S():(!g||!r)&&T()},[c,T,g,r,S]);let E=e=>t=>{e.onKeyDown?.(t),!(t.key!==`Escape`||t.which===229||!C())&&(t.stopPropagation(),s&&s(t,`escapeKeyDown`))},D=e=>t=>{e.onClick?.(t),t.target===t.currentTarget&&s&&s(t,`backdropClick`)};return{getRootProps:(t={})=>{let n=gf(e);delete n.onTransitionEnter,delete n.onTransitionExited;let r={...n,...t};return{role:`presentation`,...r,onKeyDown:E(r),ref:p}},getBackdropProps:(e={})=>{let t=e;return{"aria-hidden":!0,...t,onClick:D(t),open:c}},getTransitionProps:()=>({onEnter:Pd(()=>{h(!1),i&&i()},o?.props.onEnter??Um),onExited:Pd(()=>{h(!0),a&&a(),r&&T()},o?.props.onExited??Um)}),rootRef:p,portalRef:w,isTopModal:C,exited:m,hasTransition:g}}function Km(e){return mc(`MuiModal`,e)}hc(`MuiModal`,[`root`,`hidden`,`backdrop`]);var qm=e=>{let{open:t,exited:n,classes:r}=e;return Ll({root:[`root`,!t&&n&&`hidden`],backdrop:[`backdrop`]},Km,r)},Jm=Y(`div`,{name:`MuiModal`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(rd(({theme:e})=>({position:`fixed`,zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:e})=>!e.open&&e.exited,style:{visibility:`hidden`}}]}))),Ym=Y(Qp,{name:`MuiModal`,slot:`Backdrop`})({zIndex:-1}),Xm=_.forwardRef(function(e,t){let n=id({name:`MuiModal`,props:e}),{classes:r,className:i,closeAfterTransition:a=!1,children:o,container:s,component:c,disableAutoFocus:l=!1,disableEnforceFocus:u=!1,disablePortal:d=!1,disableRestoreFocus:f=!1,disableScrollLock:p=!1,hideBackdrop:m=!1,keepMounted:h=!1,onClose:g,onTransitionEnter:v,onTransitionExited:y,open:b,slotProps:x={},slots:S={},theme:C,...w}=n,T={...n,closeAfterTransition:a,disableAutoFocus:l,disableEnforceFocus:u,disablePortal:d,disableRestoreFocus:f,disableScrollLock:p,hideBackdrop:m,keepMounted:h},{getRootProps:E,getBackdropProps:D,getTransitionProps:O,portalRef:k,isTopModal:A,exited:ee,hasTransition:j}=Gm({...T,rootRef:t}),M={...T,exited:ee},N=qm(M),te={};if(o.props.tabIndex===void 0&&(te.tabIndex=`-1`),j){let{onEnter:e,onExited:t}=O();te.onEnter=e,te.onExited=t}let P={slots:S,slotProps:x},[F,ne]=yf(`root`,{ref:t,elementType:Jm,externalForwardedProps:{...P,...w,component:c},getSlotProps:E,ownerState:M,className:U(i,N?.root,!M.open&&M.exited&&N?.hidden)}),[re,ie]=yf(`backdrop`,{elementType:Ym,externalForwardedProps:P,shouldForwardComponentProp:!0,getSlotProps:e=>D({...e,onClick:t=>{e?.onClick&&e.onClick(t)}}),className:N?.backdrop,ownerState:M});return!h&&!b&&(!j||ee)?null:(0,V.jsx)(Gp,{ref:k,container:s,disablePortal:d,children:(0,V.jsxs)(F,{...ne,children:[m?null:(0,V.jsx)(re,{...ie}),(0,V.jsx)(Bm,{disableEnforceFocus:u,disableAutoFocus:l,disableRestoreFocus:f,isEnabled:A,open:b,children:_.cloneElement(o,te)})]})})});function Zm(e){return mc(`MuiDivider`,e)}hc(`MuiDivider`,[`root`,`absolute`,`fullWidth`,`inset`,`middle`,`flexItem`,`vertical`,`withChildren`,`textAlignRight`,`textAlignLeft`,`wrapper`,`wrapperVertical`]);var Qm=e=>{let{absolute:t,children:n,classes:r,flexItem:i,orientation:a,textAlign:o,variant:s}=e;return Ll({root:[`root`,t&&`absolute`,s,a===`vertical`&&`vertical`,i&&`flexItem`,n&&`withChildren`,o===`right`&&a!==`vertical`&&`textAlignRight`,o===`left`&&a!==`vertical`&&`textAlignLeft`],wrapper:[`wrapper`,a===`vertical`&&`wrapperVertical`]},Zm,r)},$m=Y(`div`,{name:`MuiDivider`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.orientation===`vertical`&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.textAlign===`right`&&n.orientation!==`vertical`&&t.textAlignRight,n.textAlign===`left`&&n.orientation!==`vertical`&&t.textAlignLeft]}})(rd(({theme:e})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:`solid`,borderColor:(e.vars||e).palette.divider,borderBottomWidth:`thin`,variants:[{props:{absolute:!0},style:{position:`absolute`,bottom:0,left:0,width:`100%`}},{props:{variant:`inset`},style:{marginLeft:72}},{props:{variant:`middle`,orientation:`horizontal`},style:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}},{props:{variant:`middle`,orientation:`vertical`},style:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},{props:{orientation:`vertical`},style:{height:`100%`,borderBottomWidth:0,borderRightWidth:`thin`}},{props:{flexItem:!0},style:{alignSelf:`stretch`,height:`auto`}},{props:({ownerState:e})=>!!e.children,style:{display:`flex`,textAlign:`center`,border:0,borderTopStyle:`solid`,borderLeftStyle:`solid`,"&::before, &::after":{content:`""`,alignSelf:`center`}}},{props:({ownerState:e})=>e.children&&e.orientation!==`vertical`,style:{"&::before, &::after":{width:`100%`,borderTop:`thin solid ${(e.vars||e).palette.divider}`,borderTopStyle:`inherit`}}},{props:({ownerState:e})=>e.orientation===`vertical`&&e.children,style:{flexDirection:`column`,"&::before, &::after":{height:`100%`,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,borderLeftStyle:`inherit`}}},{props:({ownerState:e})=>e.textAlign===`right`&&e.orientation!==`vertical`,style:{"&::before":{width:`90%`},"&::after":{width:`10%`}}},{props:({ownerState:e})=>e.textAlign===`left`&&e.orientation!==`vertical`,style:{"&::before":{width:`10%`},"&::after":{width:`90%`}}}]}))),eh=Y(`span`,{name:`MuiDivider`,slot:`Wrapper`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.wrapper,n.orientation===`vertical`&&t.wrapperVertical]}})(rd(({theme:e})=>({display:`inline-block`,paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`,whiteSpace:`nowrap`,variants:[{props:{orientation:`vertical`},style:{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}}]}))),th=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiDivider`}),{absolute:r=!1,children:i,className:a,orientation:o=`horizontal`,component:s=i||o===`vertical`?`div`:`hr`,flexItem:c=!1,role:l=s===`hr`?void 0:`separator`,textAlign:u=`center`,variant:d=`fullWidth`,...f}=n,p={...n,absolute:r,component:s,flexItem:c,orientation:o,role:l,textAlign:u,variant:d},m=Qm(p);return(0,V.jsx)($m,{as:s,className:U(m.root,a),role:l,ref:t,ownerState:p,"aria-orientation":l===`separator`&&(s!==`hr`||o===`vertical`)?o:void 0,...f,children:i?(0,V.jsx)(eh,{className:m.wrapper,ownerState:p,children:i}):null})}),nh={visibility:`hidden`},rh={};function ih(e){return typeof e==`string`&&/^translate\(.+,\s*.+\)$/.test(e)}function ah(e,t,n,r=rh){let{resetInlineTransform:i=!0}=r,a=n&&n.getBoundingClientRect(),o=Vd(t),s,c;if(i){let e=t.style.transform,n=t.style.transition;t.style.transition=``,t.style.transform=``,s=t.getBoundingClientRect(),c=o.getComputedStyle(t).getPropertyValue(`transform`),t.style.transform=e,t.style.transition=n}else s=t.getBoundingClientRect(),c=o.getComputedStyle(t).getPropertyValue(`transform`);let{offsetX:l,offsetY:u}=bd(c);return e===`left`?a?`translateX(${a.right+l-s.left}px)`:`translateX(${o.innerWidth+l-s.left}px)`:e===`right`?a?`translateX(-${s.right-a.left-l}px)`:`translateX(-${s.left+s.width-l}px)`:e===`up`?a?`translateY(${a.bottom+u-s.top}px)`:`translateY(${o.innerHeight+u-s.top}px)`:a?`translateY(-${s.top-a.top+s.height-u}px)`:`translateY(-${s.top+s.height-u}px)`}function oh(e){return typeof e==`function`?e():e}function sh(e,t,n,r){let i=ah(e,t,oh(n),r);i&&(t.style.transform=i)}var ch=_.forwardRef(function(e,t){let n=Qu(),r={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},i={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:a,appear:o=!0,children:s,container:c,disablePrefersReducedMotion:l=!1,direction:u=`down`,easing:d=r,in:f,onEnter:p,onEntered:m,onEntering:h,onExit:g,onExited:v,onExiting:y,style:b,timeout:x=i,...S}=e,C=pf(n.motion.reducedMotion,l),w=_.useRef(null),T=_.useRef(!1),E=ad(Hp(s),w,t),D=Z(w,(e,t)=>{sh(u,e,c),C.shouldReduceMotion||dd(e),p&&p(e,t)}),O=Z(w,(e,t)=>{let r=Sd({timeout:x,style:b,easing:d},{mode:`enter`}),i=C.getTransitionTiming({duration:r.duration,delay:r.delay});e.style.transition=n.transitions.create(`transform`,{duration:i.duration,easing:r.easing,delay:i.delay}),e.style.transform=`none`,h&&h(e,t)}),k=Z(w,m),A=Z(w,y),ee=Z(w,e=>{let t=Sd({timeout:x,style:b,easing:d},{mode:`exit`}),r=C.getTransitionTiming({duration:t.duration,delay:t.delay});e.style.transition=n.transitions.create(`transform`,{duration:r.duration,easing:t.easing,delay:r.delay});let i=ih(e.style.transform);T.current=i,sh(u,e,c,{resetInlineTransform:!i}),g&&g(e)}),j=Z(w,e=>{T.current=!1,e.style.transition=``,v&&v(e)}),M=a?e=>{a(w.current,e)}:void 0,N=_.useCallback(()=>{w.current&&sh(u,w.current,c)},[u,c]);return _.useEffect(()=>{if(f||u===`down`||u===`right`)return;let e=Bd(()=>{w.current&&sh(u,w.current,c)}),t=Vd(w.current);return t.addEventListener(`resize`,e),()=>{e.clear(),t.removeEventListener(`resize`,e)}},[u,f,c]),_.useEffect(()=>{!f&&!T.current&&N()},[f,N]),(0,V.jsx)(ef,{nodeRef:w,onEnter:D,onEntered:k,onEntering:O,onExit:ee,onExited:j,onExiting:A,addEndListener:M,appear:o,in:f,reduceMotion:C.shouldReduceMotion,timeout:x,...S,children:(e,{ownerState:t,...n})=>{let r;return r=e===`exited`&&!f?b||s.props.style?{visibility:`hidden`,...b,...s.props.style}:nh:b&&s.props.style?{...b,...s.props.style}:b||s.props.style,_.cloneElement(s,{ref:E,style:r,...n})}})});function lh(e){return mc(`MuiDrawer`,e)}hc(`MuiDrawer`,[`root`,`docked`,`paper`,`anchorLeft`,`anchorRight`,`anchorTop`,`anchorBottom`,`modal`]);var uh=(e,t)=>{let{ownerState:n}=e;return[t.root,(n.variant===`permanent`||n.variant===`persistent`)&&t.docked,n.variant===`temporary`&&t.modal]},dh=e=>{let{classes:t,anchor:n,variant:r}=e;return Ll({root:[`root`,`anchor${X(n)}`],docked:[(r===`permanent`||r===`persistent`)&&`docked`],modal:[`modal`],paper:[`paper`]},lh,t)},fh=Y(Xm,{name:`MuiDrawer`,slot:`Root`,overridesResolver:uh})(rd(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer}))),ph=Y(`div`,{shouldForwardProp:td,name:`MuiDrawer`,slot:`Docked`,skipVariantsResolver:!1,overridesResolver:uh})({flex:`0 0 auto`}),mh=Y(Af,{name:`MuiDrawer`,slot:`Paper`})(rd(({theme:e})=>({overflowY:`auto`,display:`flex`,flexDirection:`column`,height:`100%`,flex:`1 0 auto`,zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:`touch`,position:`fixed`,top:0,outline:0,variants:[{props:{anchor:`left`},style:{left:0}},{props:{anchor:`top`},style:{top:0,left:0,right:0,height:`auto`,maxHeight:`100%`}},{props:{anchor:`right`},style:{right:0}},{props:{anchor:`bottom`},style:{top:`auto`,left:0,bottom:0,right:0,height:`auto`,maxHeight:`100%`}},{props:({ownerState:e})=>e.anchor===`left`&&e.variant!==`temporary`,style:{borderRight:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:e})=>e.anchor===`top`&&e.variant!==`temporary`,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:e})=>e.anchor===`right`&&e.variant!==`temporary`,style:{borderLeft:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:e})=>e.anchor===`bottom`&&e.variant!==`temporary`,style:{borderTop:`1px solid ${(e.vars||e).palette.divider}`}}]}))),hh={left:`right`,right:`left`,top:`down`,bottom:`up`};function gh(e){return[`left`,`right`].includes(e)}function _h({direction:e},t){return e===`rtl`&&gh(t)?hh[t]:t}var vh=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiDrawer`}),r=Qu(),i=nl(),a={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{anchor:o=`left`,children:s,className:c,elevation:l=16,hideBackdrop:u=!1,ModalProps:d={},onClose:f,open:p=!1,transitionDuration:m=a,variant:h=`temporary`,slots:g={},slotProps:v={},...y}=n,b=_.useRef(!1),x=_.useRef(null),S=ad(t,x);_.useEffect(()=>{b.current=!0},[]);let C=_.useCallback(()=>x.current,[]),w=_h({direction:i?`rtl`:`ltr`},o),T=o,E={...n,anchor:T,elevation:l,open:p,variant:h,...y},D=dh(E),O={slots:g,slotProps:{...v,backdrop:Kd(v.backdrop,{transitionDuration:m})}},[k,A]=yf(`root`,{ref:S,elementType:fh,className:U(D.root,D.modal,c),shouldForwardComponentProp:!0,ownerState:E,externalForwardedProps:{...O,...y,...d},additionalProps:{closeAfterTransition:!0,open:p,onClose:f,hideBackdrop:u,slots:{backdrop:O.slots.backdrop},slotProps:{backdrop:O.slotProps.backdrop}}}),[ee,j]=yf(`paper`,{elementType:mh,shouldForwardComponentProp:!0,className:D.paper,ownerState:E,externalForwardedProps:O,additionalProps:{elevation:h===`temporary`?l:0,square:!0,...h===`temporary`&&{role:`dialog`,"aria-modal":`true`,"data-mui-focusable":``,tabIndex:-1}}}),[M,N]=yf(`docked`,{elementType:ph,ref:S,className:U(D.root,D.docked,c),ownerState:E,externalForwardedProps:O,additionalProps:y}),[te,P]=yf(`transition`,{elementType:ch,ownerState:E,externalForwardedProps:O,additionalProps:{in:p,direction:hh[w],timeout:m,appear:b.current,...h===`temporary`&&(g.transition==null||g.transition===ch)&&{container:C}}}),F=(0,V.jsx)(ee,{...j,children:s});if(h===`permanent`)return(0,V.jsx)(M,{...N,children:F});let ne=(0,V.jsx)(te,{...P,children:F});return h===`persistent`?(0,V.jsx)(M,{...N,children:ne}):(0,V.jsx)(k,{...A,children:ne})}),yh=_.createContext({}),bh=(e,t)=>{let{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.alignItems===`flex-start`&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters]},xh=e=>{let{alignItems:t,classes:n,dense:r,disabled:i,disableGutters:a,divider:o,selected:s}=e,c=Ll({root:[`root`,r&&`dense`,!a&&`gutters`,o&&`divider`,i&&`disabled`,t===`flex-start`&&`alignItemsFlexStart`,s&&`selected`]},Td,n);return{...n,...c}},Sh=Y(sp,{shouldForwardProp:e=>td(e)||e===`classes`,name:`MuiListItemButton`,slot:`Root`,overridesResolver:bh})(rd(({theme:e})=>({display:`flex`,flexGrow:1,justifyContent:`flex-start`,alignItems:`center`,position:`relative`,textDecoration:`none`,minWidth:0,boxSizing:`border-box`,textAlign:`left`,paddingTop:8,paddingBottom:8,...wd(e,`background-color`,{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:`none`,backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:`transparent`}},[`&.${Ed.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),[`&.${Ed.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}},[`&.${Ed.selected}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity)}},[`&.${Ed.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Ed.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},variants:[{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:`padding-box`}},{props:{alignItems:`flex-start`},style:{alignItems:`flex-start`}},{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.dense,style:{paddingTop:4,paddingBottom:4}}]}))),Ch=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiListItemButton`}),{alignItems:r=`center`,autoFocus:i=!1,component:a=`div`,children:o,dense:s=!1,disableGutters:c=!1,divider:l=!1,focusVisibleClassName:u,selected:d=!1,className:f,...p}=n,m=_.useContext(yh),h=_.useMemo(()=>({dense:s||m.dense||!1,alignItems:r,disableGutters:c}),[r,m.dense,s,c]),g=_.useRef(null);od(()=>{i&&g.current&&g.current.focus()},[i]);let v={...n,alignItems:r,dense:h.dense,disableGutters:c,divider:l,selected:d},y=xh(v),{root:b,...x}=y,S=ad(g,t);return(0,V.jsx)(yh.Provider,{value:h,children:(0,V.jsx)(Sh,{ref:S,href:p.href||p.to,component:(p.href||p.to)&&a===`div`?`button`:a,internalNativeButton:!1,focusVisibleClassName:U(y.focusVisible,u),ownerState:v,className:U(y.root,f),...p,classes:x,children:o})})});function wh(e){return mc(`MuiListItemText`,e)}var Th=hc(`MuiListItemText`,[`root`,`multiline`,`dense`,`inset`,`primary`,`secondary`]),Eh=e=>{let{classes:t,inset:n,primary:r,secondary:i,dense:a}=e;return Ll({root:[`root`,n&&`inset`,a&&`dense`,r&&i&&`multiline`],primary:[`primary`],secondary:[`secondary`]},wh,t)},Dh=Y(`div`,{name:`MuiListItemText`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[{[`& .${Th.primary}`]:t.primary},{[`& .${Th.secondary}`]:t.secondary},t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})({flex:`1 1 auto`,minWidth:0,marginTop:4,marginBottom:4,[`.${jp.root}:where(& .${Th.primary})`]:{display:`block`},[`.${jp.root}:where(& .${Th.secondary})`]:{display:`block`},variants:[{props:({ownerState:e})=>e.primary&&e.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:e})=>e.inset,style:{paddingLeft:56}}]}),Oh=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiListItemText`}),{children:r,className:i,disableTypography:a=!1,inset:o=!1,primary:s,secondary:c,slots:l={},slotProps:u={},...d}=n,{dense:f}=_.useContext(yh),p=s??r,m=c,h={...n,disableTypography:a,inset:o,primary:!!p,secondary:!!m,dense:f},g=Eh(h),v={slots:l,slotProps:u},[y,b]=yf(`root`,{className:U(g.root,i),elementType:Dh,externalForwardedProps:{...v,...d},ownerState:h,ref:t}),[x,S]=yf(`primary`,{className:g.primary,elementType:Fp,externalForwardedProps:v,ownerState:h}),[C,w]=yf(`secondary`,{className:g.secondary,elementType:Fp,externalForwardedProps:v,ownerState:h});return p!=null&&p.type!==Fp&&!a&&(p=(0,V.jsx)(x,{variant:f?`body2`:`body1`,component:S?.variant?void 0:`span`,...S,children:p})),m!=null&&m.type!==Fp&&!a&&(m=(0,V.jsx)(C,{variant:`body2`,color:`textSecondary`,...w,children:m})),(0,V.jsxs)(y,{...b,children:[p,m]})});function kh(e){return mc(`MuiToolbar`,e)}hc(`MuiToolbar`,[`root`,`gutters`,`regular`,`dense`]);var Ah=e=>{let{classes:t,disableGutters:n,variant:r}=e;return Ll({root:[`root`,!n&&`gutters`,r]},kh,t)},jh=Y(`div`,{name:`MuiToolbar`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})(rd(({theme:e})=>({position:`relative`,display:`flex`,alignItems:`center`,variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up(`sm`)]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}},{props:{variant:`dense`},style:{minHeight:48}},{props:{variant:`regular`},style:e.mixins.toolbar}]}))),Mh=_.forwardRef(function(e,t){let n=id({props:e,name:`MuiToolbar`}),{className:r,component:i=`div`,disableGutters:a=!1,variant:o=`regular`,...s}=n,c={...n,component:i,disableGutters:a,variant:o},l=Ah(c);return(0,V.jsx)(jh,{as:i,className:U(l.root,r),ref:t,ownerState:c,...s})}),Nh={primary:`#D7B9AE`,onPrimary:`#2D2A26`,primaryContainer:`#4A3832`,onPrimaryContainer:`#F0E4DE`,secondary:`#B29685`,onSecondary:`#FFFFFF`,secondaryContainer:`#3E3029`,onSecondaryContainer:`#E8D9D0`,tertiary:`#A5B8C8`,onTertiary:`#FFFFFF`,tertiaryContainer:`#2E3A42`,onTertiaryContainer:`#D6E4ED`,error:`#FFB4AB`,onError:`#690005`,errorContainer:`#93000A`,onErrorContainer:`#FFDAD6`,background:`#1B1917`,onBackground:`#F2EFEA`,surface:`#24211E`,onSurface:`#F2EFEA`,surfaceVariant:`#3D3834`,onSurfaceVariant:`#B5AFA8`,outline:`#8C8680`,outlineVariant:`#3D3834`},Ph={primary:`#8D6B5E`,onPrimary:`#FFFFFF`,primaryContainer:`#F0E4DE`,onPrimaryContainer:`#362520`,secondary:`#7D6051`,onSecondary:`#FFFFFF`,secondaryContainer:`#E8D9D0`,onSecondaryContainer:`#2C1F19`,tertiary:`#6F8494`,onTertiary:`#FFFFFF`,tertiaryContainer:`#D6E4ED`,onTertiaryContainer:`#1A2C37`,error:`#BA1A1A`,onError:`#FFFFFF`,errorContainer:`#FFDAD6`,onErrorContainer:`#410002`,background:`#F5F0EB`,onBackground:`#1C1B19`,surface:`#FDF8F3`,onSurface:`#1C1B19`,surfaceVariant:`#E2DCD5`,onSurfaceVariant:`#4A4743`,outline:`#7C7772`,outlineVariant:`#C4BEB8`};function Fh(e,t){return Gu({palette:{mode:e,primary:{main:t.primary,contrastText:t.onPrimary},secondary:{main:t.secondary,contrastText:t.onSecondary},tertiary:{main:t.tertiary,contrastText:t.onTertiary},error:{main:t.error,contrastText:t.onError},background:{default:t.background,paper:t.surface},text:{primary:t.onSurface,secondary:t.onSurfaceVariant},divider:t.outlineVariant,primaryContainer:t.primaryContainer,onPrimaryContainer:t.onPrimaryContainer,secondaryContainer:t.secondaryContainer,onSecondaryContainer:t.onSecondaryContainer,tertiaryContainer:t.tertiaryContainer,onTertiaryContainer:t.onTertiaryContainer},shape:{borderRadius:12},typography:{fontFamily:`"Inter", "Google Sans", system-ui, -apple-system, sans-serif`,h1:{fontSize:`3rem`,fontWeight:700,lineHeight:1.15,letterSpacing:`-0.02em`},h2:{fontSize:`2rem`,fontWeight:700,lineHeight:1.2,letterSpacing:`-0.01em`},h3:{fontSize:`1.375rem`,fontWeight:600,lineHeight:1.3,letterSpacing:0},h4:{fontSize:`1.125rem`,fontWeight:600,lineHeight:1.3,letterSpacing:.00625},body1:{fontSize:`1rem`,lineHeight:1.7,letterSpacing:.00625},body2:{fontSize:`0.875rem`,lineHeight:1.6,letterSpacing:.00625},caption:{fontSize:`0.75rem`,lineHeight:1.4,letterSpacing:.025},overline:{fontSize:`0.75rem`,fontWeight:600,lineHeight:1.3,letterSpacing:`0.1em`,textTransform:`uppercase`}},components:{MuiCssBaseline:{styleOverrides:{body:{backgroundColor:t.background,color:t.onSurface,fontFamily:`"Inter", "Google Sans", system-ui, -apple-system, sans-serif`},a:{color:t.primary,textDecoration:`underline`,textUnderlineOffset:2,fontWeight:500},"a:hover":{opacity:.85}}},MuiCard:{styleOverrides:{root:{borderRadius:16,backgroundImage:`none`}}},MuiPaper:{styleOverrides:{root:{backgroundImage:`none`}}},MuiButton:{styleOverrides:{root:{borderRadius:28,textTransform:`none`,fontWeight:600,padding:`8px 24px`},contained:{boxShadow:`none`}}},MuiDrawer:{styleOverrides:{paper:{borderRight:`none`}}},MuiTableCell:{styleOverrides:{root:{borderBottomColor:t.outlineVariant}}},MuiLink:{styleOverrides:{root:{color:t.primary,textDecoration:`none`,"&:hover":{textDecoration:`underline`}}}},MuiTypography:{defaultProps:{color:`text.primary`}}}})}var Ih=Fh(`light`,Ph),Lh=Fh(`dark`,Nh),Rh={site:{title:`ShiggyBot`,description:`A Discord bot built with C# 13 and .NET 10.`},nav:{home:`Home`,setup:`Setup`,setupPrerequisites:`Prerequisites`,setupDiscordPortal:`Discord Portal`,setupBuilding:`Building`,setupRunning:`Running`,setupPublishing:`Publishing`,setupCiCd:`CI/CD`,configuration:`Configuration`,configurationKeys:`Keys`,configurationSources:`Sources`,configurationPermissions:`Permissions`,architecture:`Architecture`,architectureEntrypoint:`Entrypoint`,architectureDiscordClientService:`Discord Client`,architectureCommandSystem:`Command System`,architectureComponentSystems:`Components`,architectureFeatures:`Features`,architectureServices:`Services`,architectureDatabase:`Database`,architectureUtilities:`Utilities`,architectureConfigSystem:`Config System`,architecturePatterns:`Patterns`,commands:`Commands`,extending:`Extending`,extendingNewCommand:`New Command`,extendingNewFeature:`New Feature`,extendingNewData:`New Data`,extendingStyleGuide:`Style Guide`,extendingGotchas:`Gotchas`},hero:{tag:`Open source · MIT license`,headline:`ShiggyBot`,subheadline:`A modular Discord bot built with C# 13 and .NET 10 using Discord.Net`,cta:`Get Started`,github:`GitHub`},overview:{title:`What is ShiggyBot?`,body:`A self-hosted Discord bot you configure, deploy, and extend. It connects to Discord via a bot token, loads modular commands, and initializes optional runtime features — autorole, presence updates, code previews, and more — at startup.`,tech:[{label:`Language & Runtime`,value:`C# 13 / .NET 10`},{label:`Discord Library`,value:`Discord.Net 3.20.1`},{label:`Database`,value:`SQLite`},{label:`Image Processing`,value:`ImageSharp 3`},{label:`CI/CD`,value:`GitHub Actions`}]},architecture:{title:`Architecture at a Glance`,subtitle:`Modular, decoupled, and extensible by design.`,principles:[{title:`Modular`,description:`Commands and features are plug-ins discovered at startup, making the bot easy to extend without touching core code.`},{title:`Decoupled`,description:`The core runtime has minimal knowledge of specific commands, keeping the system maintainable as it grows.`},{title:`Configurable`,description:`Settings drive behavior through config files and environment variables — no hardcoded values.`},{title:`Observable`,description:`Optional webhook logging for production monitoring, with per-event filtering and error reporting.`}],components:[{name:`Program.cs`,description:`Entry point — loads config, registers services, starts the bot`},{name:`DiscordClientService`,description:`Central orchestrator — client lifecycle, event wiring, connection management`},{name:`CommandHandler`,description:`Discovers and dispatches commands implementing ICommand`},{name:`Features`,description:`Runtime capabilities — Autorole, Presence, CodePreview, and more`},{name:`DatabaseService`,description:`SQLite persistence layer — bans, command state, guild settings`},{name:`WebhookLogger`,description:`Optional webhook-based log sink for real-time monitoring`}]},features:{title:`Features`,subtitle:`Everything you need to manage and engage your community.`,items:[{id:`moderation`,title:`Moderation`,description:`Timed bans, kick, timeout, purge, nuke, role management, and per-guild command gating.`},{id:`codePreviews`,title:`Code Previews`,description:`Automatic inline previews of code from GitHub, GitLab, and other forges.`},{id:`pluginSearch`,title:`Plugin Search`,description:`Remote plugin index with Levenshtein search and one-click ephemeral install.`},{id:`funCommands`,title:`Fun Commands`,description:`Image compositing with ImageSharp, Google search links, and more.`},{id:`autorole`,title:`Autorole`,description:`Automatic role assignment on member join. Configurable per guild.`},{id:`gitHubStats`,title:`GitHub Stats`,description:`Rotating presence with repo stats, commit/PR/star monitoring.`}]},techStack:{title:`Tech Stack`,subtitle:`Built with modern tooling from the ground up.`,items:[{label:`C# 13 / .NET 10`,sub:`Language & runtime`},{label:`Discord.Net 3.20.1`,sub:`Discord API library`},{label:`SQLite`,sub:`Database`},{label:`ImageSharp 3`,sub:`Image processing`},{label:`GitHub Actions`,sub:`CI/CD`}]},commands:{title:`Commands`,subtitle:`All commands are prefixed with {prefix}. Arguments in brackets are optional, angle brackets are required.`,prefix:`S`,categories:[{name:`Utility`,commands:[{name:`help`,signature:`help`,description:`Shows the help menu. Uses an interactive select menu (V2) or falls back to embed-based help (V1).`},{name:`ping`,signature:`ping`,description:`Checks the bot's WebSocket latency.`},{name:`note <key>`,signature:`note <key>`,description:`Shows one of 8 hard-coded notes about ShiggyCord. Supports reply-to.`}]},{name:`Moderation`,commands:[{name:`ban`,signature:`ban <user> [duration] [reason]`,description:`Bans a user, optionally timed (7d, 30m, etc.). Purges 7 days of messages. Supports reply-to shortcut. Persists to database.`},{name:`kick`,signature:`kick <user> [reason]`,description:`Kicks a user from the server. Supports reply-to shortcut.`},{name:`timeout`,signature:`timeout <user> [duration]`,description:`Times out a user. Supports reply-to shortcut.`},{name:`purge`,signature:`purge <count>`,description:`Bulk-deletes messages (1–100). Subject to Discord's 14-day message deletion limit.`},{name:`nuke`,signature:`nuke confirm`,description:`Clones the current channel and deletes the original. Admin only.`},{name:`addrole`,signature:`addrole <role>`,description:`Adds a role to a user. Supports reply-to shortcut.`},{name:`removerole`,signature:`removerole <role>`,description:`Removes a role from a user. Supports reply-to shortcut.`},{name:`disable`,signature:`disable <command>`,description:`Disables a command per-guild. Requires ManageGuild permission. Persists to database.`},{name:`enable`,signature:`enable <command>`,description:`Re-enables a disabled command per-guild. Requires ManageGuild permission.`}]},{name:`Search`,commands:[{name:`plugin`,signature:`plugin <name>`,description:`Searches a remote plugin index (60 min cache) using Levenshtein distance. Shows an ephemeral install button.`},{name:`google`,signature:`google <query>`,description:`Generates a Google search link. Aliases: g, search.`}]},{name:`Fun`,commands:[{name:`mpreg`,signature:`mpreg`,description:`Composites the user's avatar using ImageSharp. Results cached in memory (100 items) and on disk.`}]},{name:`Core`,commands:[{name:`setwelcome`,signature:`setwelcome <role>`,description:`Sets the autorole for new members. Use disable, none, or off to disable.`},{name:`v1`,signature:`v1`,description:`Owner-only command for testing V1 components.`},{name:`v2`,signature:`v2 [raw]`,description:`Owner-only command for testing V2 components. Pass raw to see the JSON payload.`}]}]},cta:{title:`Ready to get started?`,description:`Clone the repo, configure your token, and run.
Zero external dependencies beyond Discord and SQLite.`,setupButton:`View Setup Guide`,commandsButton:`Browse Commands`},footer:{copyright:`MIT License`},sidebar:{gettingStarted:`Getting Started`,reference:`Reference`,development:`Development`}},zh=Rh,Bh=`https://shiggybot.shiggycord.dev`,$=zh.site.title,Vh=zh.site.description,Hh=`${Bh}/favicon.gif`,Uh={"/":{title:$,description:Vh},"/commands":{title:`${zh.nav.commands} — ${$}`,description:`All ${$} commands: moderation, utility, search, fun, and core commands.`},"/setup":{title:`${zh.nav.setup} — ${$}`,description:`Learn how to set up and deploy ${$} on your own server.`},"/setup/prerequisites":{title:`${zh.nav.setupPrerequisites} — ${$}`,description:`System requirements and tools needed to build and run ${$}.`},"/setup/discord-portal":{title:`${zh.nav.setupDiscordPortal} — ${$}`,description:`How to create a Discord application and get your bot token for ${$}.`},"/setup/building":{title:`${zh.nav.setupBuilding} — ${$}`,description:`Build ${$} from source using the .NET CLI.`},"/setup/running":{title:`${zh.nav.setupRunning} — ${$}`,description:`Configure and run ${$} with environment variables or config files.`},"/setup/publishing":{title:`${zh.nav.setupPublishing} — ${$}`,description:`Publish ${$} as a self-contained deployment for production.`},"/setup/ci-cd":{title:`${zh.nav.setupCiCd} — ${$}`,description:`Continuous integration and deployment pipeline for ${$}.`},"/configuration":{title:`${zh.nav.configuration} — ${$}`,description:`Complete reference for ${$} configuration keys, sources, and permissions.`},"/configuration/keys":{title:`${zh.nav.configurationKeys} — ${$}`,description:`All configuration keys that ${$}'s BotConfig reads at startup.`},"/configuration/sources":{title:`${zh.nav.configurationSources} — ${$}`,description:`Where ${$} loads its configuration from: environment variables, JSON files, and more.`},"/configuration/permissions":{title:`${zh.nav.configurationPermissions} — ${$}`,description:`Permission levels and command gating in ${$}.`},"/architecture":{title:`${zh.nav.architecture} — ${$}`,description:`High-level overview of ${$}'s modular architecture and design principles.`},"/architecture/entrypoint":{title:`${zh.nav.architectureEntrypoint} — ${$}`,description:`How ${$} starts: config loading, service registration, and bot launch.`},"/architecture/discord-client-service":{title:`${zh.nav.architectureDiscordClientService} — ${$}`,description:`The central Discord client orchestrator in ${$}: lifecycle, events, and connection management.`},"/architecture/command-system":{title:`${zh.nav.architectureCommandSystem} — ${$}`,description:`How ${$}'s command discovery, dispatch, and permission system works.`},"/architecture/component-systems":{title:`${zh.nav.architectureComponentSystems} — ${$}`,description:`${$}'s V1 and V2 component systems: message builders, embeds, buttons, and modals.`},"/architecture/features":{title:`${zh.nav.architectureFeatures} — ${$}`,description:`Optional runtime features in ${$}: autorole, presence, code previews, and more.`},"/architecture/services":{title:`${zh.nav.architectureServices} — ${$}`,description:`${$}'s service layer: command handling, plugin management, and GitHub monitoring.`},"/architecture/database":{title:`${zh.nav.architectureDatabase} — ${$}`,description:`${$}'s SQLite persistence layer: bans, guild settings, and data storage.`},"/architecture/utilities":{title:`${zh.nav.architectureUtilities} — ${$}`,description:`Helper utilities used across ${$}: embedding, error handling, formatting, and logging.`},"/architecture/config-system":{title:`${zh.nav.architectureConfigSystem} — ${$}`,description:`How ${$}'s BotConfig loads and validates configuration from multiple sources.`},"/architecture/patterns":{title:`${zh.nav.architecturePatterns} — ${$}`,description:`Design patterns and conventions used throughout ${$}.`},"/extending":{title:`${zh.nav.extending} — ${$}`,description:`Learn how to extend ${$} with new commands, features, and data services.`},"/extending/new-command":{title:`${zh.nav.extendingNewCommand} — ${$}`,description:`Step-by-step guide to creating a new command for ${$}.`},"/extending/new-feature":{title:`${zh.nav.extendingNewFeature} — ${$}`,description:`How to create a new runtime feature for ${$}.`},"/extending/new-data":{title:`${zh.nav.extendingNewData} — ${$}`,description:`Adding new data services and database entities to ${$}.`},"/extending/style-guide":{title:`${zh.nav.extendingStyleGuide} — ${$}`,description:`Coding conventions and style guidelines for contributing to ${$}.`},"/extending/gotchas":{title:`${zh.nav.extendingGotchas} — ${$}`,description:`Common pitfalls and gotchas when extending ${$}.`},"/404":{title:`Page Not Found — ${$}`,description:`The page you're looking for doesn't exist or has been moved.`}};function Wh(e){return Uh[e]??Uh[`/404`]??{title:$,description:Vh}}function Gh(){let{pathname:e}=ct(),t=Wh(e),n=`${Bh}${e}`;return(0,V.jsxs)(Xr,{children:[(0,V.jsx)(`title`,{children:t.title}),(0,V.jsx)(`meta`,{name:`description`,content:t.description}),(0,V.jsx)(`meta`,{property:`og:type`,content:`website`}),(0,V.jsx)(`meta`,{property:`og:url`,content:n}),(0,V.jsx)(`meta`,{property:`og:title`,content:t.title}),(0,V.jsx)(`meta`,{property:`og:description`,content:t.description}),(0,V.jsx)(`meta`,{property:`og:image`,content:Hh}),(0,V.jsx)(`meta`,{name:`twitter:card`,content:`summary`}),(0,V.jsx)(`meta`,{name:`twitter:title`,content:t.title}),(0,V.jsx)(`meta`,{name:`twitter:description`,content:t.description}),(0,V.jsx)(`meta`,{name:`twitter:image`,content:Hh})]})}var Kh=zd((0,V.jsx)(`path`,{d:`M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27`}),`GitHub`),qh=zd((0,V.jsx)(`path`,{d:`M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z`}),`Code`),Jh=zd((0,V.jsx)(`path`,{d:`M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1`}),`DarkMode`),Yh=zd((0,V.jsx)(`path`,{d:`M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z`}),`LightMode`),Xh=Rh;function Zh({drawerWidth:e,onToggleTheme:t,isDark:n}){let r=dt();return(0,V.jsx)(Bp,{position:`fixed`,elevation:0,color:`inherit`,sx:{bgcolor:`transparent`,backdropFilter:`blur(12px)`,borderBottom:1,borderColor:`divider`,ml:{md:`${e}px`},width:{md:`calc(100% - ${e}px)`},zIndex:1201},children:(0,V.jsxs)(Mh,{children:[(0,V.jsx)(Fp,{variant:`h6`,noWrap:!0,sx:{fontWeight:700,cursor:`pointer`,letterSpacing:`-0.01em`,...e>0&&{display:{xs:`block`,md:`none`}}},onClick:()=>r(`/`),children:Xh.site.title}),(0,V.jsx)(`span`,{style:{flex:1}}),(0,V.jsx)(kp,{onClick:t,size:`small`,sx:{mr:1,color:`text.secondary`},children:n?(0,V.jsx)(Yh,{}):(0,V.jsx)(Jh,{})}),(0,V.jsx)(kp,{size:`small`,component:`a`,href:`https://github.com/kmmiio99o/ShiggyBot`,target:`_blank`,rel:`noopener noreferrer`,sx:{color:`text.secondary`},children:(0,V.jsx)(Kh,{})})]})})}var Qh=zd((0,V.jsx)(`path`,{d:`m5.2497 8.0687 2.83-2.8268 14.1342 14.15-2.83 2.8269zm4.2361-4.2415 2.828-2.8288 5.6577 5.656-2.828 2.8288zM.999 12.3147l2.8284-2.8284 5.6569 5.6568-2.8285 2.8285zM1 21h12v2H1z`}),`Gavel`),$h=zd((0,V.jsx)(`path`,{d:`M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14`}),`Search`),eg=zd((0,V.jsx)(`path`,{d:`M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z`}),`Image`),tg=zd((0,V.jsx)(`path`,{d:`M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6`}),`Settings`),ng=zd((0,V.jsx)(`path`,{d:`m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83`}),`Speed`),rg={moderation:(0,V.jsx)(Qh,{}),codePreviews:(0,V.jsx)(qh,{}),pluginSearch:(0,V.jsx)($h,{}),funCommands:(0,V.jsx)(eg,{}),autorole:(0,V.jsx)(tg,{}),gitHubStats:(0,V.jsx)(ng,{})};function ig(e){return rg[e]??null}function ag({id:e,title:t,description:n}){return(0,V.jsxs)(Q,{sx:{p:3,borderRadius:4,bgcolor:`surface`,border:1,borderColor:`divider`,transition:`all 0.2s`,"&:hover":{borderColor:`primary.main`,boxShadow:`0 4px 20px ${Qu().palette.primary.main}15`}},children:[(0,V.jsx)(Q,{sx:{color:`primary.main`,mb:1.5,"& .MuiSvgIcon-root":{fontSize:28}},children:ig(e)}),(0,V.jsx)(Fp,{variant:`h4`,sx:{mb:.5},children:t}),(0,V.jsx)(Fp,{variant:`body2`,sx:{color:`text.secondary`,lineHeight:1.6},children:n})]})}function og({label:e,sub:t}){return(0,V.jsxs)(Q,{sx:{px:3,py:2,borderRadius:3,bgcolor:`background.default`,border:1,borderColor:`divider`,textAlign:`center`,minWidth:160},children:[(0,V.jsx)(Fp,{variant:`body2`,sx:{fontWeight:600,mb:.25},children:e}),(0,V.jsx)(Fp,{variant:`caption`,sx:{color:`text.secondary`},children:t})]})}var sg=c(o(((e,t)=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw Error(`map is read-only`)}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw Error(`set is read-only`)}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{let r=e[t],i=typeof r;(i===`object`||i===`function`)&&!Object.isFrozen(r)&&n(r)}),e}var r=class{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function i(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`)}function a(e,...t){let n=Object.create(null);for(let t in e)n[t]=e[t];return t.forEach(function(e){for(let t in e)n[t]=e[t]}),n}var o=`</span>`,s=e=>!!e.scope,c=(e,{prefix:t})=>{if(e.startsWith(`language:`))return e.replace(`language:`,`language-`);if(e.includes(`.`)){let n=e.split(`.`);return[`${t}${n.shift()}`,...n.map((e,t)=>`${e}${`_`.repeat(t+1)}`)].join(` `)}return`${t}${e}`},l=class{constructor(e,t){this.buffer=``,this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!s(e))return;let t=c(e.scope,{prefix:this.classPrefix});this.span(t)}closeNode(e){s(e)&&(this.buffer+=o)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}},u=(e={})=>{let t={children:[]};return Object.assign(t,e),t},d=class e{constructor(){this.rootNode=u(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){let t=u({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t==`string`?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(t){typeof t!=`string`&&t.children&&(t.children.every(e=>typeof e==`string`)?t.children=[t.children.join(``)]:t.children.forEach(t=>{e._collapse(t)}))}},f=class extends d{constructor(e){super(),this.options=e}addText(e){e!==``&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){let n=e.root;t&&(n.scope=`language:${t}`),this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}};function p(e){return e?typeof e==`string`?e:e.source:null}function m(e){return _(`(?=`,e,`)`)}function h(e){return _(`(?:`,e,`)*`)}function g(e){return _(`(?:`,e,`)?`)}function _(...e){return e.map(e=>p(e)).join(``)}function v(e){let t=e[e.length-1];return typeof t==`object`&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function y(...e){return`(`+(v(e).capture?``:`?:`)+e.map(e=>p(e)).join(`|`)+`)`}function b(e){return RegExp(e.toString()+`|`).exec(``).length-1}function x(e,t){let n=e&&e.exec(t);return n&&n.index===0}var S=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function C(e,{joinWith:t}){let n=0;return e.map(e=>{n+=1;let t=n,r=p(e),i=``;for(;r.length>0;){let e=S.exec(r);if(!e){i+=r;break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),e[0][0]===`\\`&&e[1]?i+=`\\`+String(Number(e[1])+t):(i+=e[0],e[0]===`(`&&n++)}return i}).map(e=>`(${e})`).join(t)}var w=/\b\B/,T=`[a-zA-Z]\\w*`,E=`[a-zA-Z_]\\w*`,D=`\\b\\d+(\\.\\d+)?`,O=`(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)`,k=`\\b(0b[01]+)`,A=`!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~`,ee=(e={})=>{let t=/^#![ ]*\//;return e.binary&&(e.begin=_(t,/.*\b/,e.binary,/\b.*/)),a({scope:`meta`,begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{e.index!==0&&t.ignoreMatch()}},e)},j={begin:`\\\\[\\s\\S]`,relevance:0},M={scope:`string`,begin:`'`,end:`'`,illegal:`\\n`,contains:[j]},N={scope:`string`,begin:`"`,end:`"`,illegal:`\\n`,contains:[j]},te={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},P=function(e,t,n={}){let r=a({scope:`comment`,begin:e,end:t,contains:[]},n);r.contains.push({scope:`doctag`,begin:`[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`,end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});let i=y(`I`,`a`,`is`,`so`,`us`,`to`,`at`,`if`,`in`,`it`,`on`,/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:_(/[ ]+/,`(`,i,/[.]?[:]?([.][ ]|[ ])/,`){3}`)}),r},F=P(`//`,`$`),ne=P(`/\\*`,`\\*/`),re=P(`#`,`$`),ie=Object.freeze({__proto__:null,APOS_STRING_MODE:M,BACKSLASH_ESCAPE:j,BINARY_NUMBER_MODE:{scope:`number`,begin:k,relevance:0},BINARY_NUMBER_RE:k,COMMENT:P,C_BLOCK_COMMENT_MODE:ne,C_LINE_COMMENT_MODE:F,C_NUMBER_MODE:{scope:`number`,begin:O,relevance:0},C_NUMBER_RE:O,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})},HASH_COMMENT_MODE:re,IDENT_RE:T,MATCH_NOTHING_RE:w,METHOD_GUARD:{begin:`\\.\\s*[a-zA-Z_]\\w*`,relevance:0},NUMBER_MODE:{scope:`number`,begin:D,relevance:0},NUMBER_RE:D,PHRASAL_WORDS_MODE:te,QUOTE_STRING_MODE:N,REGEXP_MODE:{scope:`regexp`,begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[j,{begin:/\[/,end:/\]/,relevance:0,contains:[j]}]},RE_STARTERS_RE:A,SHEBANG:ee,TITLE_MODE:{scope:`title`,begin:T,relevance:0},UNDERSCORE_IDENT_RE:E,UNDERSCORE_TITLE_MODE:{scope:`title`,begin:E,relevance:0}});function ae(e,t){e.input[e.index-1]===`.`&&t.ignoreMatch()}function oe(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function I(e,t){t&&e.beginKeywords&&(e.begin=`\\b(`+e.beginKeywords.split(` `).join(`|`)+`)(?!\\.)(?=\\b|\\s)`,e.__beforeBegin=ae,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function se(e,t){Array.isArray(e.illegal)&&(e.illegal=y(...e.illegal))}function ce(e,t){if(e.match){if(e.begin||e.end)throw Error(`begin & end are not supported with match`);e.begin=e.match,delete e.match}}function le(e,t){e.relevance===void 0&&(e.relevance=1)}var ue=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw Error(`beforeMatch cannot be used with starts`);let n=Object.assign({},e);Object.keys(e).forEach(t=>{delete e[t]}),e.keywords=n.keywords,e.begin=_(n.beforeMatch,m(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},de=[`of`,`and`,`for`,`in`,`not`,`or`,`if`,`then`,`parent`,`list`,`value`],fe=`keyword`;function pe(e,t,n=fe){let r=Object.create(null);return typeof e==`string`?i(n,e.split(` `)):Array.isArray(e)?i(n,e):Object.keys(e).forEach(function(n){Object.assign(r,pe(e[n],t,n))}),r;function i(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach(function(t){let n=t.split(`|`);r[n[0]]=[e,me(n[0],n[1])]})}}function me(e,t){return t?Number(t):+!he(e)}function he(e){return de.includes(e.toLowerCase())}var ge={},_e=e=>{console.error(e)},ve=(e,...t)=>{console.log(`WARN: ${e}`,...t)},ye=(e,t)=>{ge[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),ge[`${e}/${t}`]=!0)},be=Error();function xe(e,t,{key:n}){let r=0,i=e[n],a={},o={};for(let e=1;e<=t.length;e++)o[e+r]=i[e],a[e+r]=!0,r+=b(t[e-1]);e[n]=o,e[n]._emit=a,e[n]._multi=!0}function Se(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw _e(`skip, excludeBegin, returnBegin not compatible with beginScope: {}`),be;if(typeof e.beginScope!=`object`||e.beginScope===null)throw _e(`beginScope must be object`),be;xe(e,e.begin,{key:`beginScope`}),e.begin=C(e.begin,{joinWith:``})}}function Ce(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw _e(`skip, excludeEnd, returnEnd not compatible with endScope: {}`),be;if(typeof e.endScope!=`object`||e.endScope===null)throw _e(`endScope must be object`),be;xe(e,e.end,{key:`endScope`}),e.end=C(e.end,{joinWith:``})}}function we(e){e.scope&&typeof e.scope==`object`&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Te(e){we(e),typeof e.beginScope==`string`&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope==`string`&&(e.endScope={_wrap:e.endScope}),Se(e),Ce(e)}function Ee(e){function t(t,n){return new RegExp(p(t),`m`+(e.case_insensitive?`i`:``)+(e.unicodeRegex?`u`:``)+(n?`g`:``))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=b(e)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);let e=this.regexes.map(e=>e[1]);this.matcherRe=t(C(e,{joinWith:`|`}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;let t=this.matcherRe.exec(e);if(!t)return null;let n=t.findIndex((e,t)=>t>0&&e!==void 0),r=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,r)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];let t=new n;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),t.type===`begin`&&this.count++}exec(e){let t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition()&&!(n&&n.index===this.lastIndex)){let t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}function i(e){let t=new r;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:`begin`})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:`end`}),e.illegal&&t.addRule(e.illegal,{type:`illegal`}),t}function o(n,r){let a=n;if(n.isCompiled)return a;[oe,ce,Te,ue].forEach(e=>e(n,r)),e.compilerExtensions.forEach(e=>e(n,r)),n.__beforeBegin=null,[I,se,le].forEach(e=>e(n,r)),n.isCompiled=!0;let s=null;return typeof n.keywords==`object`&&n.keywords.$pattern&&(n.keywords=Object.assign({},n.keywords),s=n.keywords.$pattern,delete n.keywords.$pattern),s||=/\w+/,n.keywords&&=pe(n.keywords,e.case_insensitive),a.keywordPatternRe=t(s,!0),r&&(n.begin||=/\B|\b/,a.beginRe=t(a.begin),!n.end&&!n.endsWithParent&&(n.end=/\B|\b/),n.end&&(a.endRe=t(a.end)),a.terminatorEnd=p(a.end)||``,n.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(n.end?`|`:``)+r.terminatorEnd)),n.illegal&&(a.illegalRe=t(n.illegal)),n.contains||=[],n.contains=[].concat(...n.contains.map(function(e){return Oe(e===`self`?n:e)})),n.contains.forEach(function(e){o(e,a)}),n.starts&&o(n.starts,r),a.matcher=i(a),a}if(e.compilerExtensions||=[],e.contains&&e.contains.includes(`self`))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),o(e)}function De(e){return e?e.endsWithParent||De(e.starts):!1}function Oe(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return a(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:De(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}var ke=`11.11.1`,Ae=class extends Error{constructor(e,t){super(e),this.name=`HTMLInjectionError`,this.html=t}},je=i,Me=a,Ne=Symbol(`nomatch`),Pe=7,Fe=function(e){let t=Object.create(null),i=Object.create(null),a=[],o=!0,s=`Could not find the language '{}', did you forget to load/include a language module?`,c={disableAutodetect:!0,name:`Plain text`,contains:[]},l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:`hljs-`,cssSelector:`pre code`,languages:null,__emitter:f};function u(e){return l.noHighlightRe.test(e)}function d(e){let t=e.className+` `;t+=e.parentNode?e.parentNode.className:``;let n=l.languageDetectRe.exec(t);if(n){let t=M(n[1]);return t||(ve(s.replace(`{}`,n[1])),ve(`Falling back to no-highlight mode for this block.`,e)),t?n[1]:`no-highlight`}return t.split(/\s+/).find(e=>u(e)||M(e))}function p(e,t,n){let r=``,i=``;typeof t==`object`?(r=e,n=t.ignoreIllegals,i=t.language):(ye(`10.7.0`,`highlight(lang, code, ...args) has been deprecated.`),ye(`10.7.0`,`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),i=e,r=t),n===void 0&&(n=!0);let a={code:r,language:i};re(`before:highlight`,a);let o=a.result?a.result:v(a.language,a.code,n);return o.code=a.code,re(`after:highlight`,o),o}function v(e,n,i,a){let c=Object.create(null);function u(e,t){return e.keywords[t]}function d(){if(!A.keywords){j.addText(N);return}let e=0;A.keywordPatternRe.lastIndex=0;let t=A.keywordPatternRe.exec(N),n=``;for(;t;){n+=N.substring(e,t.index);let r=D.case_insensitive?t[0].toLowerCase():t[0],i=u(A,r);if(i){let[e,a]=i;if(j.addText(n),n=``,c[r]=(c[r]||0)+1,c[r]<=Pe&&(te+=a),e.startsWith(`_`))n+=t[0];else{let n=D.classNameAliases[e]||e;m(t[0],n)}}else n+=t[0];e=A.keywordPatternRe.lastIndex,t=A.keywordPatternRe.exec(N)}n+=N.substring(e),j.addText(n)}function f(){if(N===``)return;let e=null;if(typeof A.subLanguage==`string`){if(!t[A.subLanguage]){j.addText(N);return}e=v(A.subLanguage,N,!0,ee[A.subLanguage]),ee[A.subLanguage]=e._top}else e=S(N,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(te+=e.relevance),j.__addSublanguage(e._emitter,e.language)}function p(){A.subLanguage==null?d():f(),N=``}function m(e,t){e!==``&&(j.startScope(t),j.addText(e),j.endScope())}function h(e,t){let n=1,r=t.length-1;for(;n<=r;){if(!e._emit[n]){n++;continue}let r=D.classNameAliases[e[n]]||e[n],i=t[n];r?m(i,r):(N=i,d(),N=``),n++}}function g(e,t){return e.scope&&typeof e.scope==`string`&&j.openNode(D.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(m(N,D.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),N=``):e.beginScope._multi&&(h(e.beginScope,t),N=``)),A=Object.create(e,{parent:{value:A}}),A}function _(e,t,n){let i=x(e.endRe,n);if(i){if(e[`on:end`]){let n=new r(e);e[`on:end`](t,n),n.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return _(e.parent,t,n)}function y(e){return A.matcher.regexIndex===0?(N+=e[0],1):(ne=!0,0)}function b(e){let t=e[0],n=e.rule,i=new r(n),a=[n.__beforeBegin,n[`on:begin`]];for(let n of a)if(n&&(n(e,i),i.isMatchIgnored))return y(t);return n.skip?N+=t:(n.excludeBegin&&(N+=t),p(),!n.returnBegin&&!n.excludeBegin&&(N=t)),g(n,e),n.returnBegin?0:t.length}function C(e){let t=e[0],r=n.substring(e.index),i=_(A,e,r);if(!i)return Ne;let a=A;A.endScope&&A.endScope._wrap?(p(),m(t,A.endScope._wrap)):A.endScope&&A.endScope._multi?(p(),h(A.endScope,e)):a.skip?N+=t:(a.returnEnd||a.excludeEnd||(N+=t),p(),a.excludeEnd&&(N=t));do A.scope&&j.closeNode(),!A.skip&&!A.subLanguage&&(te+=A.relevance),A=A.parent;while(A!==i.parent);return i.starts&&g(i.starts,e),a.returnEnd?0:t.length}function w(){let e=[];for(let t=A;t!==D;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach(e=>j.openNode(e))}let T={};function E(t,r){let a=r&&r[0];if(N+=t,a==null)return p(),0;if(T.type===`begin`&&r.type===`end`&&T.index===r.index&&a===``){if(N+=n.slice(r.index,r.index+1),!o){let t=Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=T.rule,t}return 1}if(T=r,r.type===`begin`)return b(r);if(r.type===`illegal`&&!i){let e=Error(`Illegal lexeme "`+a+`" for mode "`+(A.scope||`<unnamed>`)+`"`);throw e.mode=A,e}else if(r.type===`end`){let e=C(r);if(e!==Ne)return e}if(r.type===`illegal`&&a===``)return N+=`
`,1;if(F>1e5&&F>r.index*3)throw Error(`potential infinite loop, way more iterations than matches`);return N+=a,a.length}let D=M(e);if(!D)throw _e(s.replace(`{}`,e)),Error(`Unknown language: "`+e+`"`);let O=Ee(D),k=``,A=a||O,ee={},j=new l.__emitter(l);w();let N=``,te=0,P=0,F=0,ne=!1;try{if(D.__emitTokens)D.__emitTokens(n,j);else{for(A.matcher.considerAll();;){F++,ne?ne=!1:A.matcher.considerAll(),A.matcher.lastIndex=P;let e=A.matcher.exec(n);if(!e)break;let t=E(n.substring(P,e.index),e);P=e.index+t}E(n.substring(P))}return j.finalize(),k=j.toHTML(),{language:e,value:k,relevance:te,illegal:!1,_emitter:j,_top:A}}catch(t){if(t.message&&t.message.includes(`Illegal`))return{language:e,value:je(n),illegal:!0,relevance:0,_illegalBy:{message:t.message,index:P,context:n.slice(P-100,P+100),mode:t.mode,resultSoFar:k},_emitter:j};if(o)return{language:e,value:je(n),illegal:!1,relevance:0,errorRaised:t,_emitter:j,_top:A};throw t}}function b(e){let t={value:je(e),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return t._emitter.addText(e),t}function S(e,n){n=n||l.languages||Object.keys(t);let r=b(e),i=n.filter(M).filter(te).map(t=>v(t,e,!1));i.unshift(r);let[a,o]=i.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(M(e.language).supersetOf===t.language)return 1;if(M(t.language).supersetOf===e.language)return-1}return 0}),s=a;return s.secondBest=o,s}function C(e,t,n){let r=t&&i[t]||n;e.classList.add(`hljs`),e.classList.add(`language-${r}`)}function w(e){let t=null,n=d(e);if(u(n))return;if(re(`before:highlightElement`,{el:e,language:n}),e.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e);return}if(e.children.length>0&&(l.ignoreUnescapedHTML||(console.warn(`One of your code blocks includes unescaped HTML. This is a potentially serious security risk.`),console.warn(`https://github.com/highlightjs/highlight.js/wiki/security`),console.warn(`The element with unescaped HTML:`),console.warn(e)),l.throwUnescapedHTML))throw new Ae(`One of your code blocks includes unescaped HTML.`,e.innerHTML);t=e;let r=t.textContent,i=n?p(r,{language:n,ignoreIllegals:!0}):S(r);e.innerHTML=i.value,e.dataset.highlighted=`yes`,C(e,n,i.language),e.result={language:i.language,re:i.relevance,relevance:i.relevance},i.secondBest&&(e.secondBest={language:i.secondBest.language,relevance:i.secondBest.relevance}),re(`after:highlightElement`,{el:e,result:i,text:r})}function T(e){l=Me(l,e)}let E=()=>{k(),ye(`10.6.0`,`initHighlighting() deprecated.  Use highlightAll() now.`)};function D(){k(),ye(`10.6.0`,`initHighlightingOnLoad() deprecated.  Use highlightAll() now.`)}let O=!1;function k(){function e(){k()}if(document.readyState===`loading`){O||window.addEventListener(`DOMContentLoaded`,e,!1),O=!0;return}document.querySelectorAll(l.cssSelector).forEach(w)}function A(n,r){let i=null;try{i=r(e)}catch(e){if(_e(`Language definition for '{}' could not be registered.`.replace(`{}`,n)),o)_e(e);else throw e;i=c}i.name||=n,t[n]=i,i.rawDefinition=r.bind(null,e),i.aliases&&N(i.aliases,{languageName:n})}function ee(e){delete t[e];for(let t of Object.keys(i))i[t]===e&&delete i[t]}function j(){return Object.keys(t)}function M(e){return e=(e||``).toLowerCase(),t[e]||t[i[e]]}function N(e,{languageName:t}){typeof e==`string`&&(e=[e]),e.forEach(e=>{i[e.toLowerCase()]=t})}function te(e){let t=M(e);return t&&!t.disableAutodetect}function P(e){e[`before:highlightBlock`]&&!e[`before:highlightElement`]&&(e[`before:highlightElement`]=t=>{e[`before:highlightBlock`](Object.assign({block:t.el},t))}),e[`after:highlightBlock`]&&!e[`after:highlightElement`]&&(e[`after:highlightElement`]=t=>{e[`after:highlightBlock`](Object.assign({block:t.el},t))})}function F(e){P(e),a.push(e)}function ne(e){let t=a.indexOf(e);t!==-1&&a.splice(t,1)}function re(e,t){let n=e;a.forEach(function(e){e[n]&&e[n](t)})}function ae(e){return ye(`10.7.0`,`highlightBlock will be removed entirely in v12.0`),ye(`10.7.0`,`Please use highlightElement now.`),w(e)}Object.assign(e,{highlight:p,highlightAuto:S,highlightAll:k,highlightElement:w,highlightBlock:ae,configure:T,initHighlighting:E,initHighlightingOnLoad:D,registerLanguage:A,unregisterLanguage:ee,listLanguages:j,getLanguage:M,registerAliases:N,autoDetection:te,inherit:Me,addPlugin:F,removePlugin:ne}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=ke,e.regex={concat:_,lookahead:m,either:y,optional:g,anyNumberOfTimes:h};for(let e in ie)typeof ie[e]==`object`&&n(ie[e]);return Object.assign(e,ie),e},Ie=Fe({});Ie.newInstance=()=>Fe({}),t.exports=Ie,Ie.HighlightJS=Ie,Ie.default=Ie}))()).default;function cg(e){let t=[`bool`,`byte`,`char`,`decimal`,`delegate`,`double`,`dynamic`,`enum`,`float`,`int`,`long`,`nint`,`nuint`,`object`,`sbyte`,`short`,`string`,`ulong`,`uint`,`ushort`],n=[`public`,`private`,`protected`,`static`,`internal`,`protected`,`abstract`,`async`,`extern`,`override`,`unsafe`,`virtual`,`new`,`sealed`,`partial`],r={keyword:`abstract.as.base.break.case.catch.class.const.continue.do.else.event.explicit.extern.finally.fixed.for.foreach.goto.if.implicit.in.interface.internal.is.lock.namespace.new.operator.out.override.params.private.protected.public.readonly.record.ref.return.scoped.sealed.sizeof.stackalloc.static.struct.switch.this.throw.try.typeof.unchecked.unsafe.using.virtual.void.volatile.while`.split(`.`).concat(`add.alias.and.ascending.args.async.await.by.descending.dynamic.equals.file.from.get.global.group.init.into.join.let.nameof.not.notnull.on.or.orderby.partial.record.remove.required.scoped.select.set.unmanaged.value|0.var.when.where.with.yield`.split(`.`)),built_in:t,literal:[`default`,`false`,`null`,`true`]},i=e.inherit(e.TITLE_MODE,{begin:`[a-zA-Z](\\.?\\w)*`}),a={className:`number`,variants:[{begin:`\\b(0b[01']+)`},{begin:`(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)`},{begin:`(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)`}],relevance:0},o={className:`string`,begin:/"""("*)(?!")(.|\n)*?"""\1/,relevance:1},s={className:`string`,begin:`@"`,end:`"`,contains:[{begin:`""`}]},c=e.inherit(s,{illegal:/\n/}),l={className:`subst`,begin:/\{/,end:/\}/,keywords:r},u=e.inherit(l,{illegal:/\n/}),d={className:`string`,begin:/\$"/,end:`"`,illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},e.BACKSLASH_ESCAPE,u]},f={className:`string`,begin:/\$@"/,end:`"`,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:`""`},l]},p=e.inherit(f,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:`""`},u]});l.contains=[f,d,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,e.C_BLOCK_COMMENT_MODE],u.contains=[p,d,c,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,e.inherit(e.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];let m={variants:[o,f,d,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},h={begin:`<`,end:`>`,contains:[{beginKeywords:`in out`},i]},g=e.IDENT_RE+`(<`+e.IDENT_RE+`(\\s*,\\s*`+e.IDENT_RE+`)*>)?(\\[\\])?`,_={begin:`@`+e.IDENT_RE,relevance:0};return{name:`C#`,aliases:[`cs`,`c#`],keywords:r,illegal:/::/,contains:[e.COMMENT(`///`,`$`,{returnBegin:!0,contains:[{className:`doctag`,variants:[{begin:`///`,relevance:0},{begin:`<!--|-->`},{begin:`</?`,end:`>`}]}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:`meta`,begin:`#`,end:`$`,keywords:{keyword:`if else elif endif define undef warning error line region endregion pragma checksum`}},m,a,{beginKeywords:`class interface`,relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:`where class`},i,h,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:`namespace`,relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:`record`,relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[i,h,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:`meta`,begin:`^\\s*\\[(?=[\\w])`,excludeBegin:!0,end:`\\]`,excludeEnd:!0,contains:[{className:`string`,begin:/"/,end:/"/}]},{beginKeywords:`new return throw await else`,relevance:0},{className:`function`,begin:`(`+g+`\\s+)+`+e.IDENT_RE+`\\s*(<[^=]+>\\s*)?\\(`,returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:r,contains:[{beginKeywords:n.join(` `),relevance:0},{begin:e.IDENT_RE+`\\s*(<[^=]+>\\s*)?\\(`,returnBegin:!0,contains:[e.TITLE_MODE,h],relevance:0},{match:/\(\)/},{className:`params`,begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,relevance:0,contains:[m,a,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},_]}}var lg=[{path:`Commands/Core/DisableCommand.cs`,code:`using Discord;
using Discord.WebSocket;
using ShiggyBot.Components.V1;
using ShiggyBot.Utils;
using ShiggyBot.Data;

namespace ShiggyBot.Commands.Core
{
    internal sealed class DisableCommand : ICommand
    {
        private readonly ComponentsV1Client _v1Client;
        private readonly DatabaseService _db;

        internal DisableCommand(ComponentsV1Client v1Client, DatabaseService db)
        {
            ArgumentNullException.ThrowIfNull(v1Client);
            ArgumentNullException.ThrowIfNull(db);
            _v1Client = v1Client;
            _db = db;
        }

        public string Name => "disable";

        public string Description => "Disable a command in this server";

        public string Category => "Moderation";

        public IReadOnlyList<string> Aliases => [];

        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);

            if (!await PermissionHelper.RequirePermissionAsync(message, GuildPermission.ManageGuild).ConfigureAwait(false))
            {
                return;
            }

            if (message.Channel is not SocketGuildChannel guildChannel)
            {
                return;
            }

            if (args.Length == 0)
            {
                V1MessageBuilder usageBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("🛡️ Disable Command")
                        .WithDescription("Disable a command in this server")
                        .WithColor(0xFFA500)
                        .AddField("Usage", "\`disable <command>\`", false)
                        .AddField("Example", "\`disable nuke\`", false));

                await _v1Client.SendMessageAsync(message.Channel.Id, usageBuilder).ConfigureAwait(false);
                return;
            }

            string commandName = args[0];
            await _db.DisableCommandAsync(guildChannel.Guild.Id, commandName).ConfigureAwait(false);

            V1MessageBuilder successBuilder = new V1MessageBuilder()
                .AddEmbed(new V1EmbedBuilder()
                    .WithTitle("Success")
                    .WithDescription($"Command \`{commandName}\` has been disabled in this server.")
                    .WithColor(0x00FF00));

            await _v1Client.SendMessageAsync(message.Channel.Id, successBuilder).ConfigureAwait(false);
        }
    }
}
`},{path:`Commands/Core/EnableCommand.cs`,code:`using Discord;
using Discord.WebSocket;
using ShiggyBot.Components.V1;
using ShiggyBot.Utils;
using ShiggyBot.Data;

namespace ShiggyBot.Commands.Core
{
    internal sealed class EnableCommand : ICommand
    {
        private readonly ComponentsV1Client _v1Client;
        private readonly DatabaseService _db;

        internal EnableCommand(ComponentsV1Client v1Client, DatabaseService db)
        {
            ArgumentNullException.ThrowIfNull(v1Client);
            ArgumentNullException.ThrowIfNull(db);
            _v1Client = v1Client;
            _db = db;
        }

        public string Name => "enable";

        public string Description => "Re-enable a disabled command in this server";

        public string Category => "Moderation";

        public IReadOnlyList<string> Aliases => [];

        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);

            if (!await PermissionHelper.RequirePermissionAsync(message, GuildPermission.ManageGuild).ConfigureAwait(false))
            {
                return;
            }

            if (message.Channel is not SocketGuildChannel guildChannel)
            {
                return;
            }

            if (args.Length == 0)
            {
                V1MessageBuilder usageBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("🛡️ Enable Command")
                        .WithDescription("Re-enable a disabled command in this server")
                        .WithColor(0xFFA500)
                        .AddField("Usage", "\`enable <command>\`", false)
                        .AddField("Example", "\`enable nuke\`", false));

                await _v1Client.SendMessageAsync(message.Channel.Id, usageBuilder).ConfigureAwait(false);
                return;
            }

            string commandName = args[0];
            await _db.EnableCommandAsync(guildChannel.Guild.Id, commandName).ConfigureAwait(false);

            V1MessageBuilder successBuilder = new V1MessageBuilder()
                .AddEmbed(new V1EmbedBuilder()
                    .WithTitle("Success")
                    .WithDescription($"Command \`{commandName}\` has been enabled in this server.")
                    .WithColor(0x00FF00));

            await _v1Client.SendMessageAsync(message.Channel.Id, successBuilder).ConfigureAwait(false);
        }
    }
}
`},{path:`Commands/Core/SetWelcomeCommand.cs`,code:`using System.Globalization;
using Discord;
using Discord.WebSocket;
using ShiggyBot.Components.V1;
using ShiggyBot.Utils;
using ShiggyBot.Data;

namespace ShiggyBot.Commands.Core
{
    internal sealed class SetWelcomeCommand : ICommand
    {
        private readonly ComponentsV1Client _v1Client;
        private readonly DatabaseService _db;

        internal SetWelcomeCommand(ComponentsV1Client v1Client, DatabaseService db)
        {
            ArgumentNullException.ThrowIfNull(v1Client);
            ArgumentNullException.ThrowIfNull(db);
            _v1Client = v1Client;
            _db = db;
        }

        public string Name => "setwelcome";

        public string Description => "Set the welcome role for new members in this server";

        public string Category => "Core";

        public IReadOnlyList<string> Aliases => [];

        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);

            if (!await PermissionHelper.RequirePermissionAsync(message, GuildPermission.ManageGuild).ConfigureAwait(false))
            {
                return;
            }

            if (message.Channel is not SocketGuildChannel guildChannel)
            {
                return;
            }

            SocketGuild guild = guildChannel.Guild;

            if (args.Length == 0)
            {
                ulong? current = await _db.GetWelcomeRoleAsync(guild.Id).ConfigureAwait(false);
                string currentStr = "None";
                if (current is not null and not 0)
                {
                    IRole? welcomeRole = await ((IGuild)guild).GetRoleAsync(current.Value).ConfigureAwait(false);
                    currentStr = welcomeRole?.Name ?? current.Value.ToString(CultureInfo.InvariantCulture);
                }

                V1MessageBuilder infoBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Welcome Role")
                        .WithDescription(currentStr == "None" ? "No welcome role is set for this server." : $"Current welcome role: {currentStr}")
                        .WithColor(0x1E90FF)
                        .AddField("Usage", "\`setwelcome <role>\`", false)
                        .AddField("Example", "\`setwelcome @Member\`", false)
                        .AddField("Disable", "\`setwelcome disable\`", false));

                await _v1Client.SendMessageAsync(message.Channel.Id, infoBuilder).ConfigureAwait(false);
                return;
            }

            if (args[0].Equals("disable", StringComparison.OrdinalIgnoreCase) ||
                args[0].Equals("none", StringComparison.OrdinalIgnoreCase) ||
                args[0].Equals("off", StringComparison.OrdinalIgnoreCase))
            {
                await _db.SetWelcomeRoleAsync(guild.Id, 0).ConfigureAwait(false);

                V1MessageBuilder successBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Success")
                        .WithDescription("Welcome role has been disabled for this server.")
                        .WithColor(0x00FF00));

                await _v1Client.SendMessageAsync(message.Channel.Id, successBuilder).ConfigureAwait(false);
                return;
            }

            string roleArg = string.Join(" ", args);
            SocketRole? role = PermissionHelper.ResolveRole(guild, roleArg);

            if (role == null)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("Role not found.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
                return;
            }

            await _db.SetWelcomeRoleAsync(guild.Id, role.Id).ConfigureAwait(false);

            V1MessageBuilder setBuilder = new V1MessageBuilder()
                .AddEmbed(new V1EmbedBuilder()
                    .WithTitle("Success")
                    .WithDescription($"Welcome role set to **{role.Name}** for this server.")
                    .WithColor(0x00FF00));

            await _v1Client.SendMessageAsync(message.Channel.Id, setBuilder).ConfigureAwait(false);
        }
    }
}
`},{path:`Commands/Core/V1TestCommand.cs`,code:`using Discord.Rest;
using Discord.WebSocket;
using ShiggyBot.Components.V1;

namespace ShiggyBot.Commands.Core
{
    internal sealed class V1TestCommand : ICommand
    {
        private readonly ComponentsV1Client _v1Client;

        internal V1TestCommand(ComponentsV1Client v1Client)
        {
            ArgumentNullException.ThrowIfNull(v1Client);
            _v1Client = v1Client;
        }

        public string Name => "v1";

        public string Description => "Test Discord V1 message format (buttons, embeds, etc.)";

        public string Category => "Core";

        public IReadOnlyList<string> Aliases => [];

        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);
            ArgumentNullException.ThrowIfNull(client);

            RestApplication application = await client.GetApplicationInfoAsync().ConfigureAwait(false);
            if (message.Author.Id != application.Owner.Id)
            {
                return;
            }

            V1MessageBuilder builder = new V1MessageBuilder()
                .WithContent("Hello from **ShiggyBot** V1 components!")
                .AddEmbed(new V1EmbedBuilder()
                    .WithTitle("Test Embed")
                    .WithDescription("This embed was sent via the V1 REST API client.")
                    .WithColor(0x57F287)
                    .WithImage("https://cdn.discordapp.com/embed/avatars/0.png")
                    .AddField("Field 1", "Value 1", true)
                    .AddField("Field 2", "Value 2", true)
                    .WithFooter("ShiggyBot V1 Test")
                    .WithTimestamp(DateTimeOffset.UtcNow))
                .AddComponent(new V1ActionRowBuilder()
                    .AddComponent(new V1ButtonBuilder()
                        .WithStyle(ButtonStyle.Primary)
                        .WithLabel("Click me")
                        .WithCustomId("v1_test_primary"))
                    .AddComponent(new V1ButtonBuilder()
                        .WithStyle(ButtonStyle.Success)
                        .WithLabel("Success")
                        .WithCustomId("v1_test_success"))
                    .AddComponent(new V1ButtonBuilder()
                        .WithStyle(ButtonStyle.Link)
                        .WithLabel("GitHub")
                        .WithUrl("https://github.com/kmmiio99o/ShiggyBot")));

            await _v1Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
        }
    }
}
`},{path:`Commands/Core/V2TestCommand.cs`,code:`using System.Text;
using Discord.Rest;
using Discord.WebSocket;
using ShiggyBot.Components.V2;
using ShiggyBot.Utils;

namespace ShiggyBot.Commands.Core
{
    /// <summary>
    /// Command to test Discord's Components V2 message format.
    /// </summary>
    internal sealed class V2TestCommand : ICommand
    {
        private readonly ComponentsV2Client _v2Client;

        /// <summary>
        /// Initializes a new instance of the <see cref="V2TestCommand"/> class.
        /// </summary>
        /// <param name="v2Client">The Components V2 client.</param>
        internal V2TestCommand(ComponentsV2Client v2Client)
        {
            ArgumentNullException.ThrowIfNull(v2Client);
            _v2Client = v2Client;
        }

        /// <summary>Gets the command name.</summary>
        public string Name => "v2";

        /// <summary>Gets the command description.</summary>
        public string Description => "Test Discord Components V2 message format";

        /// <summary>Gets the command category.</summary>
        public string Category => "Core";

        /// <summary>Gets the command aliases.</summary>
        public IReadOnlyList<string> Aliases => [];

        /// <summary>Executes the command.</summary>
        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);
            ArgumentNullException.ThrowIfNull(client);

            RestApplication application = await client.GetApplicationInfoAsync().ConfigureAwait(false);
            if (message.Author.Id != application.Owner.Id)
            {
                return;
            }

            bool showRaw = args.Length > 0 && args[0].Equals("raw", StringComparison.OrdinalIgnoreCase);

            Uri gitHubIcon = new("https://github.com/fluidicon.png");

            byte[] fileContent = Encoding.UTF8.GetBytes(
                "ShiggyBot — Components V2 Test File\\n" +
                "====================================\\n" +
                $"Generated: {DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} UTC\\n" +
                "\\n" +
                "This file was uploaded as a Components V2 File component.\\n" +
                "The File component references attachment:// filenames in the\\n" +
                "payload JSON, and the actual file data is sent as a multipart\\n" +
                "form-data upload alongside the payload_json.\\n");

            V2MessageBuilder builder = new V2MessageBuilder()
                .AddAttachment("v2-test.txt", fileContent, "Sample text file generated by bv2 command")
                .AddComponent(new SectionBuilder()
                    .AddTextDisplay(new TextDisplayBuilder().WithContent("# ShiggyBot — Components V2\\n\\nThis message showcases Discord's **Components V2** layout system with live components including a file attachment."))
                    .WithLinkButtonAccessory("View on GitHub", new Uri("https://github.com/kmmiio99o/ShiggyBot")))
                .AddComponent(new SeparatorBuilder()
                    .WithSpacing(SeparatorSpacing.Large)
                    .WithDivider(true))
                .AddComponent(new ContainerBuilder()
                    .WithAccentColor(0x57F287)
                    .AddComponent(new TextDisplayBuilder().WithContent("## Media Gallery\\n\\nImages displayed in a carousel using the \`MediaGallery\` component."))
                    .AddComponent(new MediaGalleryBuilder()
                        .AddItem(gitHubIcon, "GitHub logo")
                        .AddItem(new Uri("https://cdn.discordapp.com/embed/avatars/0.png"), "Discord default avatar (blue)")
                        .AddItem(new Uri("https://cdn.discordapp.com/embed/avatars/1.png"), "Discord default avatar (gray)")
                        .AddItem(new Uri("https://cdn.discordapp.com/embed/avatars/2.png"), "Discord default avatar (green)")
                        .AddItem(new Uri("https://cdn.discordapp.com/embed/avatars/3.png"), "Discord default avatar (orange)")))
                .AddComponent(new SeparatorBuilder()
                    .WithSpacing(SeparatorSpacing.Small))
                .AddComponent(new ContainerBuilder()
                    .WithAccentColor(0xED4245)
                    .AddComponent(new TextDisplayBuilder().WithContent("## File & Thumbnail\\n\\nThis container shows a \`File\` component referencing an uploaded \`.txt\` file, and a \`Section\` with a thumbnail accessory."))
                    .AddComponent(new FileBuilder().WithAttachment("v2-test.txt"))
                    .AddComponent(new SeparatorBuilder()
                        .WithSpacing(SeparatorSpacing.Small)
                        .WithDivider(false))
                    .AddComponent(new SectionBuilder()
                        .AddTextDisplay(new TextDisplayBuilder().WithContent("**Thumbnail accessory** — A \`Section\` can display a small thumbnail image alongside its text using \`WithThumbnailAccessory\`."))
                        .WithThumbnailAccessory(new ThumbnailBuilder()
                            .WithMedia(gitHubIcon)
                            .WithDescription("GitHub")))
                    .AddComponent(new SeparatorBuilder()
                        .WithSpacing(SeparatorSpacing.Small)
                        .WithDivider(false))
                    .AddComponent(new TextDisplayBuilder().WithContent("### Component Reference\\n\\n- **TextDisplay** — Renders markdown text inline\\n- **Section** — Text group with optional button or thumbnail\\n- **Container** — Colored grouping container\\n- **Separator** — Visual divider with configurable spacing\\n- **MediaGallery** — 1–10 image carousel\\n- **Thumbnail** — Small accessory image\\n- **File** — References uploaded attachments")));

            if (showRaw)
            {
                byte[] raw = builder.Build();
                string json = Encoding.UTF8.GetString(raw);
                await message.Channel.SendMessageAsync(embed: EmbedHelper.BuildInfoEmbed("V2 Message JSON", $"\`\`\`json\\n{json}\\n\`\`\`")).ConfigureAwait(false);
                return;
            }

            bool success = await _v2Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);

            if (!success)
            {
                await message.Channel.SendMessageAsync(embed: EmbedHelper.BuildErrorEmbed("Failed to send V2 message. Check logs for details.")).ConfigureAwait(false);
            }
        }
    }
}
`},{path:`Commands/Fun/MpregCommand.cs`,code:`using System.Collections.Concurrent;
using Discord;
using Discord.WebSocket;
using ShiggyBot.Components.V1;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Formats.Png;
using SixLabors.ImageSharp.Processing;
using Color = Discord.Color;
using Image = SixLabors.ImageSharp.Image;

namespace ShiggyBot.Commands.Fun
{
    internal sealed class MpregCommand : ICommand
    {
        private readonly ComponentsV1Client _v1Client;

        internal MpregCommand(ComponentsV1Client v1Client)
        {
            ArgumentNullException.ThrowIfNull(v1Client);
            _v1Client = v1Client;
        }

        public string Name => "mpreg";

        public string Description => "Generate a pregnant man image with a user's avatar on the head";

        public string Category => "Fun";

        public IReadOnlyList<string> Aliases => [];

        private const int OutputSize = 512;

        private const float SvgViewBox = 36f;

        private const float HeadCx = 17f;

        private const float HeadCy = 8.3f;

        private const float HeadR = 8f;

        private static readonly HttpClient _http = new();
        private static readonly string BasePngPath = Path.Combine(AppContext.BaseDirectory, "assets", "mpreg.png");
        private static readonly byte[] BaseImageBytes = File.ReadAllBytes(BasePngPath);
        private const int MaxCacheSize = 100;
        private static readonly ConcurrentDictionary<string, string> ResultCache = new();
        private static readonly Queue<string> _cacheOrder = new();
        private static readonly string CacheDir = Path.Combine(Path.GetTempPath(), "shiggybot_mpreg");

        private static void AddToCache(string key, string filePath)
        {
            lock (_cacheOrder)
            {
                while (_cacheOrder.Count >= MaxCacheSize)
                {
                    string oldest = _cacheOrder.Dequeue();
                    ResultCache.TryRemove(oldest, out _);
                }

                _cacheOrder.Enqueue(key);
            }

            ResultCache[key] = filePath;
        }

        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(client);

            if (args.Length == 0)
            {
                V1MessageBuilder usageBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("Usage: \`Smpreg <username | userid | @mention>\`")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, usageBuilder).ConfigureAwait(false);
                return;
            }

            IUser? target = await ResolveUser(args[0], message, client).ConfigureAwait(false);
            if (target is null)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("Could not find that user.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
                return;
            }

            string avatarUrl = target.GetAvatarUrl(ImageFormat.Png, 256)
                ?? target.GetDefaultAvatarUrl();

            string cacheKey = $"{target.Id}:{avatarUrl}";
            string avatarHash = avatarUrl.Split('/').Last().Split('.').First().Split('?').First();
            string fileName = $"mpreg_{target.Id}_{avatarHash}.png";

            byte[] imageBytes;

            if (!ResultCache.TryGetValue(cacheKey, out string? cachedPath))
            {
                cachedPath = Path.Combine(CacheDir, fileName);
                if (File.Exists(cachedPath))
                {
                    AddToCache(cacheKey, cachedPath);
                }
                else
                {
                    cachedPath = null;
                }
            }

            if (cachedPath is not null)
            {
                imageBytes = await File.ReadAllBytesAsync(cachedPath).ConfigureAwait(false);

                V1MessageBuilder builder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithImage($"attachment://{fileName}")
                        .WithAuthor(target.GlobalName ?? target.Username, target.GetAvatarUrl() ?? target.GetDefaultAvatarUrl())
                        .WithFooter($"Requested by {message.Author.GlobalName ?? message.Author.Username}")
                        .WithColor(0xE91E63))
                    .AddAttachment(imageBytes, fileName);

                await _v1Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
                return;
            }

            byte[] avatarData = await _http.GetByteArrayAsync(new Uri(avatarUrl)).ConfigureAwait(false);
            (Color embedColor, imageBytes) = GenerateMpregImage(avatarData);

            Directory.CreateDirectory(CacheDir);
            string filePath = Path.Combine(CacheDir, fileName);
            await File.WriteAllBytesAsync(filePath, imageBytes).ConfigureAwait(false);

            AddToCache(cacheKey, filePath);

            V1MessageBuilder builder2 = new V1MessageBuilder()
                .AddEmbed(new V1EmbedBuilder()
                    .WithImage($"attachment://{fileName}")
                    .WithAuthor(target.GlobalName ?? target.Username, target.GetAvatarUrl() ?? target.GetDefaultAvatarUrl())
                    .WithFooter($"Requested by {message.Author.GlobalName ?? message.Author.Username}")
                    .WithColor((int)embedColor.RawValue))
                .AddAttachment(imageBytes, fileName);

            await _v1Client.SendMessageAsync(message.Channel.Id, builder2).ConfigureAwait(false);
        }

        private static async Task<IUser?> ResolveUser(string input, SocketUserMessage message, DiscordSocketClient client)
        {
            if (message.MentionedUsers.Count > 0)
            {
                return message.MentionedUsers.First();
            }

            if (ulong.TryParse(input, out ulong id))
            {
                IUser? user = await client.Rest.GetUserAsync(id).ConfigureAwait(false);
                if (user is not null)
                {
                    return user;
                }
            }

            if (message.Channel is SocketGuildChannel guildChannel)
            {
                SocketGuild guild = guildChannel.Guild;
                SocketGuildUser? match = guild.Users.FirstOrDefault(u =>
                    u.Username.Equals(input, StringComparison.OrdinalIgnoreCase) ||
                    (u.GlobalName?.Equals(input, StringComparison.OrdinalIgnoreCase) ?? false) ||
                    (u.Nickname?.Equals(input, StringComparison.OrdinalIgnoreCase) ?? false));
                if (match is not null)
                {
                    return match;
                }
            }

            return null;
        }

        private static (Color, byte[]) GenerateMpregImage(byte[] avatarData)
        {
            try
            {
                using Image<Rgba32> baseImage = Image.Load<Rgba32>(BaseImageBytes);

                float scale = OutputSize / SvgViewBox;
                float headX = HeadCx * scale;
                float headY = HeadCy * scale;
                float headRadius = HeadR * scale;
                int circleDiameter = (int)(headRadius * 2);

                using Image<Rgba32> avatar = Image.Load<Rgba32>(avatarData);

                int minSide = Math.Min(avatar.Width, avatar.Height);
                int cropX = (avatar.Width - minSide) / 2;
                int cropY = (avatar.Height - minSide) / 2;

                avatar.Mutate(ctx =>
                {
                    ctx.Crop(new Rectangle(cropX, cropY, minSide, minSide));
                    ctx.Resize(circleDiameter, circleDiameter);
                });

                float radius = circleDiameter / 2f;
                float cx = radius;
                float cy = radius;
                long totalR = 0, totalG = 0, totalB = 0;
                int colorCount = 0;

                avatar.ProcessPixelRows(accessor =>
                {
                    for (int y = 0; y < accessor.Height; y++)
                    {
                        Span<Rgba32> row = accessor.GetRowSpan(y);
                        for (int x = 0; x < row.Length; x++)
                        {
                            float dx = x - cx + 0.5f;
                            float dy = y - cy + 0.5f;
                            if ((dx * dx) + (dy * dy) > radius * radius)
                            {
                                row[x] = new Rgba32(0, 0, 0, 0);
                            }
                            else
                            {
                                totalR += row[x].R;
                                totalG += row[x].G;
                                totalB += row[x].B;
                                colorCount++;
                            }
                        }
                    }
                });

                baseImage.Mutate(ctx => ctx.DrawImage(avatar, new Point((int)(headX - headRadius), (int)(headY - headRadius)), 1f));

                using MemoryStream ms = new();
                baseImage.Save(ms, new PngEncoder());

                Color color = colorCount > 0
                    ? new Color((byte)(totalR / colorCount), (byte)(totalG / colorCount), (byte)(totalB / colorCount))
                    : new Color(0xE91E63);

                return (color, ms.ToArray());
            }
            catch (InvalidOperationException)
            {
                throw;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Image generation failed.", ex);
            }
        }
    }
}
`},{path:`Commands/ICommand.cs`,code:`using Discord.WebSocket;

namespace ShiggyBot.Commands
{
    internal interface ICommand
    {
        string Name { get; }
        string Description { get; }
        string Category { get; }
        IReadOnlyList<string> Aliases { get; }
        Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client);
    }
}
`},{path:`Commands/Moderation/AddRoleCommand.cs`,code:`using Discord;
using Discord.WebSocket;
using ShiggyBot.Components.V1;
using ShiggyBot.Utils;

namespace ShiggyBot.Commands.Moderation
{
    internal sealed class AddRoleCommand : ICommand
    {
        private readonly ComponentsV1Client _v1Client;

        internal AddRoleCommand(ComponentsV1Client v1Client)
        {
            ArgumentNullException.ThrowIfNull(v1Client);
            _v1Client = v1Client;
        }

        public string Name => "addrole";

        public string Description => "Add a role to a user";

        public string Category => "Moderation";

        public IReadOnlyList<string> Aliases => [];

        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);

            if (!await PermissionHelper.RequirePermissionAsync(message, GuildPermission.ManageRoles).ConfigureAwait(false))
            {
                return;
            }

            SocketGuildChannel guildChannel = (SocketGuildChannel)message.Channel;
            SocketGuild guild = guildChannel.Guild;

            IGuildUser? user = message.ReferencedMessage is not null
                ? await PermissionHelper.ResolveRepliedUserAsync(guild, message).ConfigureAwait(false)
                : null;

            int offset = user is not null ? 0 : 1;

            if (args.Length < offset + 1)
            {
                V1MessageBuilder usageBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("🛡️ Add Role Command")
                        .WithDescription("Add a role to a server member")
                        .WithColor(0xFFA500)
                        .AddField("Usage", "\`addrole <user> <role>\`", false)
                        .AddField("Reply Usage", "Reply to a message with \`addrole <role>\`", false)
                        .AddField("Example", "\`addrole @user Member\`", false));

                await _v1Client.SendMessageAsync(message.Channel.Id, usageBuilder).ConfigureAwait(false);
                return;
            }

            if (offset == 1)
            {
                user = await PermissionHelper.ResolveUserAsync(guild, args[0]).ConfigureAwait(false);
            }

            if (user == null)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("User not found.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
                return;
            }

            string roleArg = string.Join(" ", args, offset, args.Length - offset);
            SocketRole? role = PermissionHelper.ResolveRole(guild, roleArg);

            if (role == null)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("Role not found.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
                return;
            }

            try
            {
                await user.AddRoleAsync(role).ConfigureAwait(false);

                V1MessageBuilder builder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("🛡️ Role Added")
                        .WithColor(0x00FF00)
                        .AddField("User", $"{user.Username}#{user.Discriminator}", true)
                        .AddField("Role", role.Name, true)
                        .AddField("Moderator", message.Author.Username, true)
                        .WithFooter("Role assignment completed")
                        .WithTimestamp(DateTimeOffset.UtcNow));

                await _v1Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
            }
            catch (HttpRequestException)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("Failed to add role. Check role hierarchy.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
            }
            catch (TaskCanceledException)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("Request timed out. Try again.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
            }
        }
    }
}
`},{path:`Commands/Moderation/BanCommand.cs`,code:`using System.Globalization;
using Discord.WebSocket;
using ShiggyBot.Components.V2;
using ShiggyBot.Utils;
using ShiggyBot.Data;

namespace ShiggyBot.Commands.Moderation
{
    /// <summary>
    /// Command to ban a user from the server (supports timed bans).
    /// </summary>
    internal sealed class BanCommand : ICommand
    {
        private const int PurgeDays = 7;

        private readonly ComponentsV2Client _v2Client;
        private readonly DatabaseService _db;

        /// <summary>
        /// Initializes a new instance of the <see cref="BanCommand"/> class.
        /// </summary>
        /// <param name="v2Client">The Components V2 client.</param>
        /// <param name="db">The database service.</param>
        internal BanCommand(ComponentsV2Client v2Client, DatabaseService db)
        {
            ArgumentNullException.ThrowIfNull(v2Client);
            ArgumentNullException.ThrowIfNull(db);
            _v2Client = v2Client;
            _db = db;
        }

        /// <summary>Gets the command name.</summary>
        public string Name => "ban";

        /// <summary>Gets the command description.</summary>
        public string Description => "Ban a user from the server (supports timed bans)";

        /// <summary>Gets the command category.</summary>
        public string Category => "Moderation";

        /// <summary>Gets the command aliases.</summary>
        public IReadOnlyList<string> Aliases => [];

        /// <summary>Executes the command.</summary>
        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);

            if (!await PermissionHelper.RequirePermissionAsync(message, global::Discord.GuildPermission.BanMembers).ConfigureAwait(false))
            {
                return;
            }

            SocketGuildChannel guildChannel = (SocketGuildChannel)message.Channel;
            SocketGuild guild = guildChannel.Guild;

            global::Discord.IGuildUser? user = message.ReferencedMessage is not null
                ? await PermissionHelper.ResolveRepliedUserAsync(guild, message).ConfigureAwait(false)
                : null;

            int offset = user is not null ? 0 : 1;

            if (args.Length < offset)
            {
                await SendUsageAsync(message).ConfigureAwait(false);
                return;
            }

            if (offset == 1)
            {
                user = await PermissionHelper.ResolveUserAsync(guild, args[0]).ConfigureAwait(false);
            }

            if (user is null)
            {
                await SendErrorAsync(message, "User not found.").ConfigureAwait(false);
                return;
            }

            string? rawDuration = null;
            TimeSpan? duration = null;
            int reasonStart = offset;
            if (args.Length > offset && TryParseDuration(args[offset], out TimeSpan parsedDuration))
            {
                rawDuration = args[offset];
                duration = parsedDuration;
                reasonStart = offset + 1;
            }

            string reason = args.Length > reasonStart ? string.Join(" ", args, reasonStart, args.Length - reasonStart) : "No reason provided";

            try
            {
                await global::Discord.UserExtensions.BanAsync(user, PurgeDays, reason).ConfigureAwait(false);

                if (duration.HasValue)
                {
                    DateTime unbanTime = DateTime.UtcNow.Add(duration.Value);
                    await _db.AddTimedBanAsync(guild.Id, user.Id, unbanTime, reason, message.Author.Id).ConfigureAwait(false);
                }

                string avatarUrl = user.GetAvatarUrl() ?? user.GetDefaultAvatarUrl();

                ContainerBuilder container = new ContainerBuilder()
                    .WithAccentColor(0xFF0000)
                    .AddComponent(new SectionBuilder()
                        .AddTextDisplay(new TextDisplayBuilder().WithContent("# \\uD83D\\uDEE1\\uFE0F User Banned"))
                        .WithThumbnailAccessory(new ThumbnailBuilder()
                            .WithMedia(new Uri(avatarUrl))
                            .WithDescription(user.Username + " Avatar")))
                    .AddComponent(new SeparatorBuilder().WithSpacing(SeparatorSpacing.Small))
                    .AddComponent(new TextDisplayBuilder().WithContent(
                        "**User:** " + user.Mention + "\\n" +
                        "**Moderator:** " + message.Author.Username + "\\n" +
                        "**Reason:** " + reason));

                if (duration.HasValue && rawDuration is not null)
                {
                    container.AddComponent(new TextDisplayBuilder().WithContent("**Duration:** " + rawDuration));
                }

                V2MessageBuilder builder = new V2MessageBuilder()
                    .AddComponent(container);

                await _v2Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
            }
            catch (HttpRequestException)
            {
                await SendErrorAsync(message, "Failed to ban user. Check role hierarchy.").ConfigureAwait(false);
            }
        }

        private async Task SendUsageAsync(SocketUserMessage message)
        {
            V2MessageBuilder builder = new V2MessageBuilder()
                .AddComponent(new ContainerBuilder()
                    .WithAccentColor(0xFFA500)
                    .AddComponent(new TextDisplayBuilder().WithContent(
                        "# \\uD83D\\uDEE1\\uFE0F Ban Command\\n\\n" +
                        "Ban a user from the server\\n\\n" +
                        "## Usage\\n" +
                        "\`ban <user> [duration] [reason]\`\\n\\n" +
                        "## Reply Usage\\n" +
                        "Reply to a message with \`ban [duration] [reason]\`\\n\\n" +
                        "## Duration Format\\n" +
                        "\\uD83D\\uDD52 s = seconds, m = minutes, h = hours, d = days (optional)\\n\\n" +
                        "## Example\\n" +
                        "\`ban @user 7d Breaking rules\`")));

            await _v2Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
        }

        private async Task SendErrorAsync(SocketUserMessage message, string error)
        {
            V2MessageBuilder builder = new V2MessageBuilder()
                .AddComponent(new ContainerBuilder()
                    .WithAccentColor(0xE74C3C)
                    .AddComponent(new TextDisplayBuilder().WithContent("# Error\\n\\n" + error)));

            await _v2Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
        }

        private static bool TryParseDuration(string input, out TimeSpan duration)
        {
            duration = TimeSpan.Zero;
            if (string.IsNullOrEmpty(input))
            {
                return false;
            }

            try
            {
                if (input.EndsWith('s'))
                {
                    duration = TimeSpan.FromSeconds(int.Parse(input.TrimEnd('s'), CultureInfo.InvariantCulture));
                }
                else if (input.EndsWith('m'))
                {
                    duration = TimeSpan.FromMinutes(int.Parse(input.TrimEnd('m'), CultureInfo.InvariantCulture));
                }
                else if (input.EndsWith('h'))
                {
                    duration = TimeSpan.FromHours(int.Parse(input.TrimEnd('h'), CultureInfo.InvariantCulture));
                }
                else if (input.EndsWith('d'))
                {
                    duration = TimeSpan.FromDays(int.Parse(input.TrimEnd('d'), CultureInfo.InvariantCulture));
                }
                else
                {
                    return false;
                }

                return true;
            }
            catch (FormatException)
            {
                return false;
            }
        }
    }
}
`},{path:`Commands/Moderation/KickCommand.cs`,code:`using Discord;
using Discord.WebSocket;
using ShiggyBot.Components.V1;
using ShiggyBot.Utils;

namespace ShiggyBot.Commands.Moderation
{
    internal sealed class KickCommand : ICommand
    {
        private readonly ComponentsV1Client _v1Client;

        internal KickCommand(ComponentsV1Client v1Client)
        {
            ArgumentNullException.ThrowIfNull(v1Client);
            _v1Client = v1Client;
        }

        public string Name => "kick";

        public string Description => "Kick a user from the server";

        public string Category => "Moderation";

        public IReadOnlyList<string> Aliases => [];

        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);

            if (!await PermissionHelper.RequirePermissionAsync(message, GuildPermission.KickMembers).ConfigureAwait(false))
            {
                return;
            }

            SocketGuildChannel guildChannel = (SocketGuildChannel)message.Channel;
            SocketGuild guild = guildChannel.Guild;

            IGuildUser? user = message.ReferencedMessage is not null
                ? await PermissionHelper.ResolveRepliedUserAsync(guild, message).ConfigureAwait(false)
                : null;

            int offset = user is not null ? 0 : 1;

            if (args.Length < offset)
            {
                V1MessageBuilder usageBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("🛡️ Kick Command")
                        .WithDescription("Remove a user from the server temporarily")
                        .WithColor(0xFFA500)
                        .AddField("Usage", "\`kick <user> [reason]\`", false)
                        .AddField("Reply Usage", "Reply to a message with \`kick [reason]\`", false)
                        .AddField("Example", "\`kick @user Breaking rules\`", false));

                await _v1Client.SendMessageAsync(message.Channel.Id, usageBuilder).ConfigureAwait(false);
                return;
            }

            if (offset == 1)
            {
                user = await PermissionHelper.ResolveUserAsync(guild, args[0]).ConfigureAwait(false);
            }

            if (user == null)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("User not found.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
                return;
            }

            string reason = args.Length > offset ? string.Join(" ", args, offset, args.Length - offset) : "No reason provided";

            try
            {
                await user.KickAsync(reason).ConfigureAwait(false);

                V1MessageBuilder builder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("🛡️ User Kicked")
                        .WithColor(0xFFA500)
                        .WithThumbnail(user.GetAvatarUrl() ?? user.GetDefaultAvatarUrl())
                        .AddField("User", $"{user.Username}#{user.Discriminator}", true)
                        .AddField("Moderator", message.Author.Username, true)
                        .AddField("Reason", reason, false)
                        .WithFooter("Kick action completed")
                        .WithTimestamp(DateTimeOffset.UtcNow));

                await _v1Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
            }
            catch (HttpRequestException)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("Failed to kick user. Check role hierarchy.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
            }
        }
    }
}
`},{path:`Commands/Moderation/NukeCommand.cs`,code:`using Discord;
using Discord.WebSocket;
using ShiggyBot.Components.V1;
using ShiggyBot.Utils;

namespace ShiggyBot.Commands.Moderation
{
    internal sealed class NukeCommand : ICommand
    {
        private readonly ComponentsV1Client _v1Client;

        internal NukeCommand(ComponentsV1Client v1Client)
        {
            ArgumentNullException.ThrowIfNull(v1Client);
            _v1Client = v1Client;
        }

        public string Name => "nuke";

        public string Description => "Clone and delete a channel to remove all messages (Administrator only)";

        public string Category => "Moderation";

        public IReadOnlyList<string> Aliases => [];

        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);

            if (!await PermissionHelper.RequirePermissionAsync(message, GuildPermission.Administrator).ConfigureAwait(false))
            {
                return;
            }

            if (message.Channel is not SocketGuildChannel guildChannel)
            {
                return;
            }

            if (args.Length > 0 && args[0].Equals("confirm", StringComparison.OrdinalIgnoreCase))
            {
                string reason = args.Length > 1 ? string.Join(" ", args, 1, args.Length - 1) : "None";
                await NukeChannelAsync(guildChannel, message, reason).ConfigureAwait(false);
                return;
            }

            string? reasonHint = args.Length > 0 ? string.Join(" ", args) : null;

            V1MessageBuilder confirmBuilder = new V1MessageBuilder()
                .AddEmbed(new V1EmbedBuilder()
                    .WithTitle("⚠️ Nuke Channel")
                    .WithDescription($"Are you sure you want to nuke #{guildChannel.Name}? This will delete ALL messages and recreate the channel.")
                    .WithColor(0xFFA500)
                    .AddField("Channel", $"#{guildChannel.Name}", true)
                    .AddField("Reason", reasonHint ?? "None", true)
                    .AddField("To confirm", $"\`Snuke confirm{(reasonHint != null ? " " + reasonHint : "")}\`", false)
                    .WithFooter("This action cannot be undone!"));

            await _v1Client.SendMessageAsync(message.Channel.Id, confirmBuilder).ConfigureAwait(false);
        }

        private async Task NukeChannelAsync(SocketGuildChannel channel, SocketUserMessage message, string reason)
        {
            if (channel is not ITextChannel textChannel)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("Can only nuke text channels.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
                return;
            }

            SocketGuild guild = channel.Guild;

            try
            {
                ITextChannel newChannel = await guild.CreateTextChannelAsync(channel.Name, properties =>
                {
                    properties.Topic = textChannel.Topic;
                    properties.Position = channel.Position;
                    properties.CategoryId = textChannel.CategoryId;
                    properties.IsNsfw = textChannel.IsNsfw;
                }).ConfigureAwait(false);

                await newChannel.ModifyAsync(properties =>
                {
                    properties.SlowModeInterval = textChannel.SlowModeInterval;
                }).ConfigureAwait(false);

                IGuild iguild = guild;
                foreach (Overwrite overwrite in channel.PermissionOverwrites)
                {
                    if (overwrite.TargetType == PermissionTarget.Role)
                    {
                        IRole? role = await iguild.GetRoleAsync(overwrite.TargetId).ConfigureAwait(false);
                        if (role != null)
                        {
                            await newChannel.AddPermissionOverwriteAsync(role, overwrite.Permissions).ConfigureAwait(false);
                        }
                    }
                    else
                    {
                        IUser? user = await iguild.GetUserAsync(overwrite.TargetId).ConfigureAwait(false);
                        if (user != null)
                        {
                            await newChannel.AddPermissionOverwriteAsync(user, overwrite.Permissions).ConfigureAwait(false);
                        }
                    }
                }

                await channel.DeleteAsync().ConfigureAwait(false);

                V1MessageBuilder nukeBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("💥 Channel Nuked!")
                        .WithDescription($"This channel has been reset!\\n**Reason:** {reason}\\n**Moderator:** {message.Author.Mention}")
                        .WithColor(0x00FF00)
                        .WithTimestamp(DateTimeOffset.UtcNow));

                await _v1Client.SendMessageAsync(newChannel.Id, nukeBuilder).ConfigureAwait(false);
            }
            catch (HttpRequestException)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("Failed to nuke channel. Check bot permissions.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
            }
        }
    }
}
`},{path:`Commands/Moderation/PurgeCommand.cs`,code:`using Discord;
using Discord.WebSocket;
using ShiggyBot.Components.V1;
using ShiggyBot.Utils;

namespace ShiggyBot.Commands.Moderation
{
    internal sealed class PurgeCommand : ICommand
    {
        private readonly ComponentsV1Client _v1Client;

        internal PurgeCommand(ComponentsV1Client v1Client)
        {
            ArgumentNullException.ThrowIfNull(v1Client);
            _v1Client = v1Client;
        }

        public string Name => "purge";

        public string Description => "Delete multiple messages from a channel";

        public string Category => "Moderation";

        public IReadOnlyList<string> Aliases => [];

        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);

            if (!await PermissionHelper.RequirePermissionAsync(message, GuildPermission.ManageMessages).ConfigureAwait(false))
            {
                return;
            }

            if (args.Length == 0 || !int.TryParse(args[0], out int count) || count < 1 || count > 100)
            {
                V1MessageBuilder usageBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("🛡️ Purge Command")
                        .WithDescription("Delete multiple messages from the channel")
                        .WithColor(0xFFA500)
                        .AddField("Usage", "\`purge <count>\` (1-100)", false)
                        .AddField("Example", "\`purge 50\`", false));

                await _v1Client.SendMessageAsync(message.Channel.Id, usageBuilder).ConfigureAwait(false);
                return;
            }

            IEnumerable<IMessage> messages = await message.Channel.GetMessagesAsync(count).FlattenAsync().ConfigureAwait(false);
            List<IMessage> filtered = [.. messages.Where(m => (DateTimeOffset.UtcNow - m.Timestamp).TotalDays < 14)];

            if (filtered.Count == 0)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("No deletable messages found.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
                return;
            }

            await ((ITextChannel)message.Channel).DeleteMessagesAsync(filtered).ConfigureAwait(false);

            V1MessageBuilder builder = new V1MessageBuilder()
                .AddEmbed(new V1EmbedBuilder()
                    .WithTitle("🛡️ Messages Purged")
                    .WithColor(0x00FF00)
                    .AddField("Deleted", $"{filtered.Count} message(s)", true)
                    .AddField("Channel", message.Channel.Name, true)
                    .AddField("Moderator", message.Author.Username, true)
                    .WithFooter("Purge action completed")
                    .WithTimestamp(DateTimeOffset.UtcNow));

            await _v1Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
        }
    }
}
`},{path:`Commands/Moderation/RemoveRoleCommand.cs`,code:`using Discord;
using Discord.WebSocket;
using ShiggyBot.Components.V1;
using ShiggyBot.Utils;

namespace ShiggyBot.Commands.Moderation
{
    internal sealed class RemoveRoleCommand : ICommand
    {
        private readonly ComponentsV1Client _v1Client;

        internal RemoveRoleCommand(ComponentsV1Client v1Client)
        {
            ArgumentNullException.ThrowIfNull(v1Client);
            _v1Client = v1Client;
        }

        public string Name => "removerole";

        public string Description => "Remove a role from a user";

        public string Category => "Moderation";

        public IReadOnlyList<string> Aliases => [];

        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);

            if (!await PermissionHelper.RequirePermissionAsync(message, GuildPermission.ManageRoles).ConfigureAwait(false))
            {
                return;
            }

            SocketGuildChannel guildChannel = (SocketGuildChannel)message.Channel;
            SocketGuild guild = guildChannel.Guild;

            IGuildUser? user = message.ReferencedMessage is not null
                ? await PermissionHelper.ResolveRepliedUserAsync(guild, message).ConfigureAwait(false)
                : null;

            int offset = user is not null ? 0 : 1;

            if (args.Length < offset + 1)
            {
                V1MessageBuilder usageBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("🛡️ Remove Role Command")
                        .WithDescription("Remove a role from a server member")
                        .WithColor(0xFFA500)
                        .AddField("Usage", "\`removerole <user> <role>\`", false)
                        .AddField("Reply Usage", "Reply to a message with \`removerole <role>\`", false)
                        .AddField("Example", "\`removerole @user Member\`", false));

                await _v1Client.SendMessageAsync(message.Channel.Id, usageBuilder).ConfigureAwait(false);
                return;
            }

            if (offset == 1)
            {
                user = await PermissionHelper.ResolveUserAsync(guild, args[0]).ConfigureAwait(false);
            }

            if (user is null)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("User not found.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
                return;
            }

            string roleArg = string.Join(" ", args, offset, args.Length - offset);
            SocketRole? role = PermissionHelper.ResolveRole(guild, roleArg);

            if (role == null)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("Role not found.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
                return;
            }

            try
            {
                await user.RemoveRoleAsync(role).ConfigureAwait(false);

                V1MessageBuilder builder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("🛡️ Role Removed")
                        .WithColor(0xFF0000)
                        .AddField("User", $"{user.Username}#{user.Discriminator}", true)
                        .AddField("Role", role.Name, true)
                        .AddField("Moderator", message.Author.Username, true)
                        .WithFooter("Role removal completed")
                        .WithTimestamp(DateTimeOffset.UtcNow));

                await _v1Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
            }
            catch (HttpRequestException)
            {
                V1MessageBuilder errorBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("Failed to remove role. Check role hierarchy.")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, errorBuilder).ConfigureAwait(false);
            }
        }
    }
}
`},{path:`Commands/Moderation/TimeoutCommand.cs`,code:`using System.Globalization;
using Discord.WebSocket;
using ShiggyBot.Components.V2;
using ShiggyBot.Utils;

namespace ShiggyBot.Commands.Moderation
{
    /// <summary>
    /// Command to timeout a user for a specified duration.
    /// </summary>
    internal sealed class TimeoutCommand : ICommand
    {
        private readonly ComponentsV2Client _v2Client;

        /// <summary>
        /// Initializes a new instance of the <see cref="TimeoutCommand"/> class.
        /// </summary>
        /// <param name="v2Client">The Components V2 client.</param>
        internal TimeoutCommand(ComponentsV2Client v2Client)
        {
            ArgumentNullException.ThrowIfNull(v2Client);
            _v2Client = v2Client;
        }

        /// <summary>Gets the command name.</summary>
        public string Name => "timeout";

        /// <summary>Gets the command description.</summary>
        public string Description => "Timeout a user for a specified duration";

        /// <summary>Gets the command category.</summary>
        public string Category => "Moderation";

        /// <summary>Gets the command aliases.</summary>
        public IReadOnlyList<string> Aliases => [];

        /// <summary>Executes the command.</summary>
        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);

            if (!await PermissionHelper.RequirePermissionAsync(message, global::Discord.GuildPermission.ModerateMembers).ConfigureAwait(false))
            {
                return;
            }

            SocketGuildChannel guildChannel = (SocketGuildChannel)message.Channel;
            SocketGuild guild = guildChannel.Guild;

            global::Discord.IGuildUser? user = message.ReferencedMessage is not null
                ? await PermissionHelper.ResolveRepliedUserAsync(guild, message).ConfigureAwait(false)
                : null;

            int offset = user is not null ? 0 : 1;

            if (args.Length < offset + 1)
            {
                await SendUsageAsync(message).ConfigureAwait(false);
                return;
            }

            if (offset == 1)
            {
                user = await PermissionHelper.ResolveUserAsync(guild, args[0]).ConfigureAwait(false);
            }

            if (user is null)
            {
                await SendErrorAsync(message, "User not found.").ConfigureAwait(false);
                return;
            }

            string durationArg = args[offset];
            string reason = args.Length > offset + 1 ? string.Join(" ", args, offset + 1, args.Length - (offset + 1)) : "No reason provided";

            TimeSpan duration = TimeSpan.FromMinutes(5);
            if (durationArg.EndsWith('s'))
            {
                duration = TimeSpan.FromSeconds(int.Parse(durationArg.TrimEnd('s'), CultureInfo.InvariantCulture));
            }
            else if (durationArg.EndsWith('m'))
            {
                duration = TimeSpan.FromMinutes(int.Parse(durationArg.TrimEnd('m'), CultureInfo.InvariantCulture));
            }
            else if (durationArg.EndsWith('h'))
            {
                duration = TimeSpan.FromHours(int.Parse(durationArg.TrimEnd('h'), CultureInfo.InvariantCulture));
            }
            else if (durationArg.EndsWith('d'))
            {
                duration = TimeSpan.FromDays(int.Parse(durationArg.TrimEnd('d'), CultureInfo.InvariantCulture));
            }

            try
            {
                await user.SetTimeOutAsync(duration, new global::Discord.RequestOptions { AuditLogReason = reason }).ConfigureAwait(false);

                string avatarUrl = user.GetAvatarUrl() ?? user.GetDefaultAvatarUrl();

                V2MessageBuilder builder = new V2MessageBuilder()
                    .AddComponent(new ContainerBuilder()
                        .WithAccentColor(0xFFA500)
                        .AddComponent(new SectionBuilder()
                            .AddTextDisplay(new TextDisplayBuilder().WithContent("# \\uD83D\\uDEE1\\uFE0F User Timed Out"))
                            .WithThumbnailAccessory(new ThumbnailBuilder()
                                .WithMedia(new Uri(avatarUrl))
                                .WithDescription("User avatar")))
                        .AddComponent(new SeparatorBuilder().WithSpacing(SeparatorSpacing.Small))
                        .AddComponent(new TextDisplayBuilder().WithContent(
                            "**User:** " + user.Mention + "\\n" +
                            "**Moderator:** " + message.Author.Username + "\\n" +
                            "**Duration:** " + duration.TotalMinutes + " minute(s)\\n" +
                            "**Reason:** " + reason))
                        .AddComponent(new SeparatorBuilder().WithSpacing(SeparatorSpacing.Small))
                        .AddComponent(new TextDisplayBuilder().WithContent("*Timeout action completed*")));

                await _v2Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
            }
            catch (HttpRequestException)
            {
                await SendErrorAsync(message, "Failed to timeout user. Check role hierarchy.").ConfigureAwait(false);
            }
        }

        private async Task SendUsageAsync(SocketUserMessage message)
        {
            V2MessageBuilder builder = new V2MessageBuilder()
                .AddComponent(new ContainerBuilder()
                    .WithAccentColor(0xFFA500)
                    .AddComponent(new TextDisplayBuilder().WithContent(
                        "# \\uD83D\\uDEE1\\uFE0F Timeout Command\\n\\n" +
                        "Temporarily mute a user from chatting\\n\\n" +
                        "## Usage\\n" +
                        "\`timeout <user> <duration> [reason]\`\\n\\n" +
                        "## Reply Usage\\n" +
                        "Reply to a message with \`timeout <duration> [reason]\`\\n\\n" +
                        "## Duration Format\\n" +
                        "\\uD83D\\uDD52 s = seconds, m = minutes, h = hours, d = days\\n\\n" +
                        "## Example\\n" +
                        "\`timeout @user 10m Breaking rules\`")));

            await _v2Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
        }

        private async Task SendErrorAsync(SocketUserMessage message, string error)
        {
            V2MessageBuilder builder = new V2MessageBuilder()
                .AddComponent(new ContainerBuilder()
                    .WithAccentColor(0xE74C3C)
                    .AddComponent(new TextDisplayBuilder().WithContent("# Error\\n\\n" + error)));

            await _v2Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
        }
    }
}
`},{path:`Commands/Search/GoogleCommand.cs`,code:`using Discord.WebSocket;
using ShiggyBot.Components.V1;

namespace ShiggyBot.Commands.Search
{
    internal sealed class GoogleCommand : ICommand
    {
        private readonly ComponentsV1Client _v1Client;

        internal GoogleCommand(ComponentsV1Client v1Client)
        {
            ArgumentNullException.ThrowIfNull(v1Client);
            _v1Client = v1Client;
        }

        public string Name => "google";

        public string Description => "Search Google directly from Discord";

        public string Category => "Search";

        public IReadOnlyList<string> Aliases => ["g", "search"];

        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);
            ArgumentNullException.ThrowIfNull(client);

            if (args.Length == 0)
            {
                V1MessageBuilder usageBuilder = new V1MessageBuilder()
                    .AddEmbed(new V1EmbedBuilder()
                        .WithTitle("Error")
                        .WithDescription("Usage: google <query>")
                        .WithColor(0xFF0000));

                await _v1Client.SendMessageAsync(message.Channel.Id, usageBuilder).ConfigureAwait(false);
                return;
            }

            string query = string.Join(" ", args);
            string url = $"https://www.google.com/search?q={Uri.EscapeDataString(query)}";

            V1MessageBuilder builder = new V1MessageBuilder()
                .AddEmbed(new V1EmbedBuilder()
                    .WithTitle("🔍 Google Search")
                    .WithDescription($"**Query:** {query}")
                    .WithColor(0x00FF00)
                    .WithUrl(url)
                    .AddField("Link", url));

            await _v1Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
        }
    }
}
`},{path:`Commands/Search/PluginCommand.cs`,code:`using System.Text;
using Discord.WebSocket;
using ShiggyBot.Components.V2;
using ShiggyBot.Services;

namespace ShiggyBot.Commands.Search
{
    /// <summary>
    /// Command to search for Discord plugins and extensions.
    /// </summary>
    internal sealed class PluginCommand : ICommand
    {
        private readonly PluginService _pluginService;
        private readonly ComponentsV2Client _v2Client;

        /// <summary>
        /// Initializes a new instance of the <see cref="PluginCommand"/> class.
        /// </summary>
        /// <param name="pluginService">The plugin search service.</param>
        /// <param name="v2Client">The Components V2 client.</param>
        internal PluginCommand(PluginService pluginService, ComponentsV2Client v2Client)
        {
            ArgumentNullException.ThrowIfNull(pluginService);
            ArgumentNullException.ThrowIfNull(v2Client);
            _pluginService = pluginService;
            _v2Client = v2Client;
        }

        /// <summary>Gets the command name.</summary>
        public string Name => "plugin";

        /// <summary>Gets the command description.</summary>
        public string Description => "Search for Discord plugins and extensions";

        /// <summary>Gets the command category.</summary>
        public string Category => "Search";

        /// <summary>Gets the command aliases.</summary>
        public IReadOnlyList<string> Aliases => ["plugins", "plg", "plug"];

        /// <summary>Executes the command.</summary>
        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);

            if (args.Length == 0)
            {
                await SendErrorAsync(message, "Please provide a plugin name to search.", "Usage: \`plugin <name>\`").ConfigureAwait(false);
                return;
            }

            string query = string.Join(" ", args);

            PluginResult? result;
            try
            {
                result = await _pluginService.SearchPluginAsync(query).ConfigureAwait(false);
            }
            catch (HttpRequestException ex)
            {
                await SendErrorAsync(message, "Search failed: " + ex.Message).ConfigureAwait(false);
                return;
            }
            catch (TaskCanceledException ex)
            {
                await SendErrorAsync(message, "Search timed out: " + ex.Message).ConfigureAwait(false);
                return;
            }

            if (result is null)
            {
                await SendNotFoundAsync(message, query).ConfigureAwait(false);
                return;
            }

            await SendSuccessAsync(message, result).ConfigureAwait(false);
        }

        private async Task SendErrorAsync(SocketUserMessage message, string error, string? usage = null)
        {
            V2MessageBuilder builder = new V2MessageBuilder()
                .AddComponent(new ContainerBuilder()
                    .WithAccentColor(0xE74C3C)
                    .AddComponent(new TextDisplayBuilder().WithContent("# Error\\n\\n" + error)));

            if (usage is not null)
            {
                builder.AddComponent(new SeparatorBuilder().WithSpacing(SeparatorSpacing.Small));
                builder.AddComponent(new TextDisplayBuilder().WithContent("## Usage\\n\\n" + usage));
            }

            await _v2Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
        }

        private async Task SendSuccessAsync(SocketUserMessage message, PluginResult result)
        {
            string statusEmoji = GetStatusEmoji(result.Status);
            int statusColor = GetStatusColorInt(result.Status);
            bool hasSource = !string.IsNullOrWhiteSpace(result.SourceUrl);
            bool hasInstall = !string.IsNullOrWhiteSpace(result.InstallUrl);

            if (hasInstall)
            {
                string capturedUrl = result.InstallUrl;
                string capturedName = result.Name;
                EphemeralButtonService.Register($"plugin_install_{result.Name}", async (component) =>
                {
                    await component.RespondAsync(
                        text: "\\U0001f4e5 **" + capturedName + "** install link:\\n" + capturedUrl,
                        ephemeral: true).ConfigureAwait(false);
                });
            }

            ContainerBuilder container = new ContainerBuilder()
                .WithAccentColor(statusColor);

            StringBuilder content = new();
            content.Append("# \\U0001f50c ");
            content.Append(result.Name);
            content.Append("\\n\\n");
            content.Append(result.Description);
            content.Append("\\n\\n## Status\\n");
            content.Append(statusEmoji);
            content.Append(" **");
            content.Append(result.Status);
            content.Append("**");

            if (result.Authors.Count > 0)
            {
                content.Append("\\n\\n\\U0001f464 **Authors:** ");
                content.Append(string.Join(", ", result.Authors));
            }

            if (!string.IsNullOrWhiteSpace(result.WarningMessage))
            {
                content.Append("\\n\\n\\u26a0\\ufe0f **Warning:** ");
                content.Append(result.WarningMessage);
            }

            container.AddComponent(new TextDisplayBuilder().WithContent(content.ToString()));

            if (hasSource)
            {
                container.AddComponent(new SeparatorBuilder().WithSpacing(SeparatorSpacing.Small));
                container.AddComponent(new SectionBuilder()
                    .AddTextDisplay(new TextDisplayBuilder().WithContent("Source code available on GitHub"))
                    .WithLinkButtonAccessory("\\U0001f4c2 Source", new Uri(result.SourceUrl)));
            }

            if (hasInstall)
            {
                container.AddComponent(new SeparatorBuilder().WithSpacing(SeparatorSpacing.Small));
                container.AddComponent(new SectionBuilder()
                    .AddTextDisplay(new TextDisplayBuilder().WithContent("Click to get the install link"))
                    .WithButtonAccessory("\\U0001f4e5 Install", "plugin_install_" + result.Name));
            }

            V2MessageBuilder builder = new();
            builder.AddComponent(container);
            await _v2Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
        }

        private async Task SendNotFoundAsync(SocketUserMessage message, string query)
        {
            V2MessageBuilder builder = new V2MessageBuilder()
                .AddComponent(new SectionBuilder()
                    .AddTextDisplay(new TextDisplayBuilder().WithContent(
                        "# \\U0001f50c Plugin Not Found\\n\\nCould not find a plugin matching **" + query + "**\\n\\n\\U0001f4a1 **Suggestions**\\n\\u2022 Try a different search term\\n\\u2022 Check the spelling\\n\\u2022 Visit the Plugins List for more options"))
                    .WithLinkButtonAccessory("Plugins List", new Uri("https://plugins-list.pages.dev/")));

            await _v2Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
        }

        private static string GetStatusEmoji(string status)
        {
            return status?.ToUpperInvariant() switch
            {
                "WORKING" => "\\u2705",
                "WARNING" => "\\u26a0\\ufe0f",
                "BROKEN" => "\\u274c",
                _ => "\\u2753"
            };
        }

        private static int GetStatusColorInt(string status)
        {
            return status?.ToUpperInvariant() switch
            {
                "WORKING" => 0x27AE60,
                "WARNING" => 0xF39C12,
                "BROKEN" => 0xE74C3C,
                _ => 0x3498DB
            };
        }
    }
}
`},{path:`Commands/Utility/HelpCommand.cs`,code:`using Discord.WebSocket;
using ShiggyBot.Components.V2;
using ShiggyBot.Services;

namespace ShiggyBot.Commands.Utility
{
    /// <summary>
    /// Command to show available commands with an interactive menu.
    /// </summary>
    internal sealed class HelpCommand : ICommand
    {
        private static readonly Uri BotGifUrl = new("https://cdn.kmmiio99o.dev/shiggycord/l4exhy.gif");

        private readonly CommandHandler _commandHandler;
        private readonly ComponentsV2Client _v2Client;

        /// <summary>
        /// Initializes a new instance of the <see cref="HelpCommand"/> class.
        /// </summary>
        /// <param name="commandHandler">The command handler.</param>
        /// <param name="v2Client">The Components V2 client.</param>
        internal HelpCommand(CommandHandler commandHandler, ComponentsV2Client v2Client)
        {
            ArgumentNullException.ThrowIfNull(commandHandler);
            ArgumentNullException.ThrowIfNull(v2Client);
            _commandHandler = commandHandler;
            _v2Client = v2Client;
        }

        /// <summary>Gets the command name.</summary>
        public string Name => "help";

        /// <summary>Gets the command description.</summary>
        public string Description => "Show all available commands with interactive menu";

        /// <summary>Gets the command category.</summary>
        public string Category => "Utility";

        /// <summary>Gets the command aliases.</summary>
        public IReadOnlyList<string> Aliases => [];

        /// <summary>Executes the command.</summary>
        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);
            string prefix = _commandHandler.Prefix;
            Dictionary<string, List<ICommand>> categories = _commandHandler.GetCommandsByCategory();

            if (args.Length > 0)
            {
                string cmdName = args[0].ToUpperInvariant();
                ICommand? command = _commandHandler.GetCommandByName(cmdName);
                if (command is not null)
                {
                    V2MessageBuilder builder = BuildCommandDetailPayload(command, prefix);
                    await _v2Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
                    return;
                }
            }

            V2MessageBuilder mainBuilder = BuildMainHelpPayload(categories, prefix);
            await _v2Client.SendMessageAsync(message.Channel.Id, mainBuilder).ConfigureAwait(false);
        }

        /// <summary>Builds the main help page payload with select menu and bot GIF.</summary>
        private static V2MessageBuilder BuildMainHelpPayload(Dictionary<string, List<ICommand>> categories, string prefix)
        {
            int totalCommands = categories.Values.Sum(c => c.Count);

            ContainerBuilder container = new ContainerBuilder()
                .WithAccentColor(0x9B59B6)
                .AddComponent(new SectionBuilder()
                    .AddTextDisplay(new TextDisplayBuilder().WithContent("# \\U0001f916 ShiggyBot Help\\n\\n**Prefix:** \`" + prefix + "\`\\nSelect a category below to view commands"))
                    .WithThumbnailAccessory(new ThumbnailBuilder()
                        .WithMedia(BotGifUrl)
                        .WithDescription("Bot GIF")))
                .AddComponent(new SeparatorBuilder().WithSpacing(SeparatorSpacing.Small))
                .AddComponent(new TextDisplayBuilder().WithContent("## \\U0001f4cb Categories"));

            foreach (KeyValuePair<string, List<ICommand>> category in categories)
            {
                string emoji = GetCategoryEmoji(category.Key);
                container.AddComponent(new TextDisplayBuilder().WithContent(
                    emoji + " **" + category.Key + "** (" + category.Value.Count + ")"));
            }

            container.AddComponent(new SeparatorBuilder().WithSpacing(SeparatorSpacing.Small));
            container.AddComponent(new TextDisplayBuilder().WithContent(
                "Use \`" + prefix + "help <command>\` for details on a specific command\\nTotal: " + totalCommands + " command(s)"));

            return new V2MessageBuilder()
                .AddComponent(container)
                .AddComponent(BuildCategorySelectMenu(categories));
        }

        /// <summary>Builds the category help payload (for select menu navigation).</summary>
        internal static V2MessageBuilder BuildCategoryHelpPayload(string category, List<ICommand> commands, string prefix, Dictionary<string, List<ICommand>> allCategories)
        {
            int accentColor = GetCategoryColorInt(category);
            string emoji = GetCategoryEmoji(category);

            ContainerBuilder container = new ContainerBuilder()
                .WithAccentColor(accentColor)
                .AddComponent(new TextDisplayBuilder().WithContent("# " + emoji + " " + category + " Commands\\n\\nPrefix: \`" + prefix + "\`"));

            foreach (ICommand cmd in commands)
            {
                string aliases = cmd.Aliases?.Count > 0 ? " (Aliases: " + string.Join(", ", cmd.Aliases) + ")" : "";
                container.AddComponent(new TextDisplayBuilder().WithContent(
                    "**" + prefix + cmd.Name + "**" + aliases + "\\n" + (cmd.Description ?? "No description")));
            }

            return new V2MessageBuilder()
                .AddComponent(container)
                .AddComponent(BuildCategorySelectMenu(allCategories));
        }

        /// <summary>Builds the per-command detail payload.</summary>
        private static V2MessageBuilder BuildCommandDetailPayload(ICommand command, string prefix)
        {
            int accentColor = GetCategoryColorInt(command.Category ?? "Other");
            string emoji = GetCategoryEmoji(command.Category ?? "Other");

            ContainerBuilder container = new ContainerBuilder()
                .WithAccentColor(accentColor)
                .AddComponent(new TextDisplayBuilder().WithContent("# Command: " + command.Name + "\\n\\n" + (command.Description ?? "No description")))
                .AddComponent(new TextDisplayBuilder().WithContent(
                    emoji + " **Category:** " + (command.Category ?? "Other") + "\\n\\u2139\\ufe0f **Usage:** \`" + prefix + command.Name + "\`"));

            if (command.Aliases?.Count > 0)
            {
                container.AddComponent(new TextDisplayBuilder().WithContent(
                    "\\U0001f517 **Aliases:** " + string.Join(", ", command.Aliases.Select(a => "\`" + a + "\`"))));
            }

            return new V2MessageBuilder()
                .AddComponent(container);
        }

        /// <summary>Builds a V1 action row with a select menu for category navigation.</summary>
        private static ActionRowBuilder BuildCategorySelectMenu(Dictionary<string, List<ICommand>> categories)
        {
            SelectMenuBuilder menu = new SelectMenuBuilder()
                .WithCustomId("help_category_select")
                .WithPlaceholder("Select a category...");

            foreach (KeyValuePair<string, List<ICommand>> category in categories)
            {
                menu.AddOption(category.Key, category.Key.ToUpperInvariant(),
                    "View " + category.Key.ToUpperInvariant() + " commands",
                    GetCategoryEmoji(category.Key));
            }

            return new ActionRowBuilder().AddComponent(menu);
        }

        private static string GetCategoryEmoji(string category)
        {
            return category.ToUpperInvariant() switch
            {
                "UTILITY" => "\\U0001f527",
                "MODERATION" => "\\U0001f6e1\\ufe0f",
                "SEARCH" => "\\U0001f50d",
                "FUN" => "\\U0001f3ae",
                _ => "\\U0001f4c1"
            };
        }

        private static int GetCategoryColorInt(string category)
        {
            return category.ToUpperInvariant() switch
            {
                "UTILITY" => 0x1E90FF,
                "MODERATION" => 0xFFA500,
                "SEARCH" => 0x00FF00,
                "FUN" => 0xE91E63,
                _ => 0x95A5A6
            };
        }
    }
}
`},{path:`Commands/Utility/NoteCommand.cs`,code:`using Discord;
using Discord.WebSocket;
using ShiggyBot.Components.V1;

namespace ShiggyBot.Commands.Utility
{
    internal sealed class NoteCommand : ICommand
    {
        private readonly ComponentsV1Client _v1Client;

        internal NoteCommand(ComponentsV1Client v1Client)
        {
            ArgumentNullException.ThrowIfNull(v1Client);
            _v1Client = v1Client;
        }

        public string Name => "note";

        public string Description => "Access saved notes and information";

        public string Category => "Utility";

        public IReadOnlyList<string> Aliases => [];

        private static readonly Dictionary<string, string> Notes = new()
        {
            { "vc", "No one can hear me\\n\\nDisable Advanced Voice Activity in Voice settings of Discord, and reload the app." },
            { "install", "Installation links\\n\\nShiggyCord: https://github.com/kmmiio99o/ShiggyCord\\nShiggyManager: https://github.com/kmmiio99o/ShiggyManager\\nShiggyXposed: https://github.com/kmmiio99o/ShiggyXposed" },
            { "background", "Background in themes not showing\\n\\nDue to a recent Discord change, the themes chat background is currently broken for some users. The devs want to fix it but haven't been able to recreate the problem themselves yet." },
            { "ios", "iOS Support\\n\\nDoes ShiggyCord support iOS? No, but you can run it as a custom bundle by KettuTweak." },
            { "passkeys", "Passkeys not working\\n\\nDue to the way ShiggyCord modifies the Discord app, it breaks the functionality of passkeys. To use passkeys, you must instead use ShiggyXposed, which doesn't alter the original app. Please note that ShiggyXposed requires a rooted device." },
            { "ftf", "Failed to fetch\\n\\nShiggyCord tried to fetch bundle but couldn't. Try using vpn and see if it works. But if Shiggy still load successfully, ignore it." },
            { "stuck", "ShiggyCord stuck on loading discord screen\\n\\nDisable bundle injection in Xposed Recovery Menu (shake your phone). If it fixes the issue, enable it again." },
        };

        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(args);

            if (args.Length > 0 && Notes.TryGetValue(args[0], out string? v))
            {
                string[] lines = v.Split('\\n', 2, StringSplitOptions.TrimEntries);
                string title = lines[0];
                string description = lines.Length > 1 ? lines[1] : "";

                V1EmbedBuilder embed = new V1EmbedBuilder()
                    .WithTitle(title)
                    .WithDescription(description)
                    .WithColor(0x1E90FF);

                if (message.ReferencedMessage is not null)
                {
                    await message.ReferencedMessage.Channel.SendMessageAsync(
                        embed: embed.BuildEmbed(),
                        messageReference: new MessageReference(message.ReferencedMessage.Id)).ConfigureAwait(false);
                }
                else
                {
                    V1MessageBuilder builder = new V1MessageBuilder().AddEmbed(embed);
                    await _v1Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
                }

                return;
            }

            V1MessageBuilder listBuilder = new V1MessageBuilder()
                .AddEmbed(new V1EmbedBuilder()
                    .WithTitle("Available Notes")
                    .WithDescription("Use \`Snote <name>\` to view a note\\n\\n" + string.Join(", ", Notes.Keys))
                    .WithColor(0x1E90FF));

            await _v1Client.SendMessageAsync(message.Channel.Id, listBuilder).ConfigureAwait(false);
        }
    }
}
`},{path:`Commands/Utility/PingCommand.cs`,code:`using Discord.WebSocket;
using ShiggyBot.Components.V1;

namespace ShiggyBot.Commands.Utility
{
    internal sealed class PingCommand : ICommand
    {
        private readonly ComponentsV1Client _v1Client;

        internal PingCommand(ComponentsV1Client v1Client)
        {
            ArgumentNullException.ThrowIfNull(v1Client);
            _v1Client = v1Client;
        }

        public string Name => "ping";

        public string Description => "Check bot latency and response time";

        public string Category => "Utility";

        public IReadOnlyList<string> Aliases => [];

        public async Task ExecuteAsync(SocketUserMessage message, string[] args, DiscordSocketClient client)
        {
            ArgumentNullException.ThrowIfNull(message);
            ArgumentNullException.ThrowIfNull(client);

            int latency = client.Latency;

            V1MessageBuilder builder = new V1MessageBuilder()
                .AddEmbed(new V1EmbedBuilder()
                    .WithTitle("Pong")
                    .WithDescription($"Latency: {latency} ms")
                    .WithColor(0x00FF00));

            await _v1Client.SendMessageAsync(message.Channel.Id, builder).ConfigureAwait(false);
        }
    }
}
`},{path:`Components/V1/ComponentsV1Client.cs`,code:`using System.Net.Http.Headers;
using System.Text;
using ShiggyBot.Utils;

namespace ShiggyBot.Components.V1
{
    internal sealed class ComponentsV1Client : IDisposable
    {
        private static readonly MediaTypeHeaderValue JsonContentType = new("application/json");

        private readonly HttpClient _http;
        private readonly string _baseUrl;

        public ComponentsV1Client(string token, HttpClient? httpClient = null)
        {
            ArgumentNullException.ThrowIfNull(token);
            _http = httpClient ?? new HttpClient();
            _http.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bot", token);
            _http.DefaultRequestHeaders.UserAgent.ParseAdd("ShiggyBot");
            _baseUrl = "https://discord.com/api/v10";
        }

        public async Task<bool> SendMessageAsync(
            ulong channelId,
            V1MessageBuilder builder,
            CancellationToken cancellationToken = default)
        {
            ArgumentNullException.ThrowIfNull(builder);

            byte[] payload = builder.Build();
            Uri url = new($"{_baseUrl}/channels/{channelId}/messages");

            for (int attempt = 0; attempt < 3; attempt++)
            {
                using HttpContent content = builder.HasAttachments
                    ? BuildMultipartContent(payload, builder)
                    : BuildJsonContent(payload);

                using HttpResponseMessage response = await _http.PostAsync(url, content, cancellationToken)
                    .ConfigureAwait(false);

                if (response.IsSuccessStatusCode)
                {
                    return true;
                }

                if ((int)response.StatusCode == 429)
                {
                    string retryAfter = response.Headers.TryGetValues("Retry-After", out IEnumerable<string>? values)
                        ? values.FirstOrDefault() ?? "1"
                        : "1";

                    if (int.TryParse(retryAfter, out int seconds) && seconds > 0)
                    {
                        Logger.Warn($"[V1] Rate limited, retrying after {seconds}s");
                        await Task.Delay(TimeSpan.FromSeconds(seconds), cancellationToken).ConfigureAwait(false);
                        continue;
                    }
                }

                string? body = null;
                try
                {
                    body = await response.Content.ReadAsStringAsync(cancellationToken).ConfigureAwait(false);
                }
                catch (HttpRequestException)
                {
                }
                catch (InvalidOperationException)
                {
                }

                Logger.Error($"[V1] Failed to send message: {response.StatusCode} {body}");
                return false;
            }

            return false;
        }

        public async Task<bool> EditMessageAsync(
            ulong channelId,
            ulong messageId,
            V1MessageBuilder builder,
            CancellationToken cancellationToken = default)
        {
            ArgumentNullException.ThrowIfNull(builder);

            byte[] payload = builder.Build();

            using ByteArrayContent content = new(payload);
            content.Headers.ContentType = JsonContentType;

            Uri url = new($"{_baseUrl}/channels/{channelId}/messages/{messageId}");

            using HttpResponseMessage response = await _http.PatchAsync(url, content, cancellationToken)
                .ConfigureAwait(false);

            if (!response.IsSuccessStatusCode)
            {
                string? body = null;
                try
                {
                    body = await response.Content.ReadAsStringAsync(cancellationToken).ConfigureAwait(false);
                }
                catch (HttpRequestException)
                {
                }
                catch (InvalidOperationException)
                {
                }

                Logger.Error($"[V1] Failed to edit message: {response.StatusCode} {body}");
                return false;
            }

            return true;
        }

        public void Dispose()
        {
            _http.Dispose();
        }

        private static ByteArrayContent BuildJsonContent(byte[] payload)
        {
            ByteArrayContent content = new(payload);
            content.Headers.ContentType = JsonContentType;
            return content;
        }

        private static ByteArrayContent BuildMultipartContent(byte[] payloadJson, V1MessageBuilder builder)
        {
            ReadOnlySpan<byte> crlf = "\\r\\n"u8;
            ReadOnlySpan<byte> dashDash = "--"u8;
            byte[] boundaryBytes = Encoding.UTF8.GetBytes($"boundary_ShiggyBot_{Guid.NewGuid():N}");

            int totalSize = crlf.Length + dashDash.Length + boundaryBytes.Length +
                "\\r\\nContent-Disposition: form-data; name=\\"payload_json\\"\\r\\nContent-Type: application/json\\r\\n\\r\\n"u8.Length +
                payloadJson.Length;

            foreach (V1Attachment attachment in builder.Attachments)
            {
                totalSize += crlf.Length + dashDash.Length + boundaryBytes.Length;
                totalSize += "\\r\\nContent-Disposition: form-data; name=\\"files["u8.Length;
                totalSize += Formatting.CountDigits(attachment.Id);
                totalSize += "]\\"; filename=\\""u8.Length;
                totalSize += Encoding.UTF8.GetByteCount(attachment.FileName);
                totalSize += "\\"\\r\\nContent-Type: application/octet-stream\\r\\n\\r\\n"u8.Length;
                totalSize += attachment.Data.Length;
            }

            totalSize += crlf.Length + dashDash.Length + boundaryBytes.Length + dashDash.Length + crlf.Length;

            byte[] buffer = new byte[totalSize];
            int offset = 0;

            offset = Write(buffer, offset, crlf);
            offset = Write(buffer, offset, dashDash);
            offset = Write(buffer, offset, boundaryBytes);
            offset = Write(buffer, offset, "\\r\\nContent-Disposition: form-data; name=\\"payload_json\\"\\r\\nContent-Type: application/json\\r\\n\\r\\n"u8);
            offset = Write(buffer, offset, payloadJson);

            foreach (V1Attachment attachment in builder.Attachments)
            {
                offset = Write(buffer, offset, crlf);
                offset = Write(buffer, offset, dashDash);
                offset = Write(buffer, offset, boundaryBytes);
                offset = Write(buffer, offset, "\\r\\nContent-Disposition: form-data; name=\\"files["u8);
                offset = Formatting.WriteInt32(buffer, offset, attachment.Id);
                offset = Write(buffer, offset, "]\\"; filename=\\""u8);
                offset = Write(buffer, offset, Encoding.UTF8.GetBytes(attachment.FileName));
                offset = Write(buffer, offset, "\\"\\r\\nContent-Type: application/octet-stream\\r\\n\\r\\n"u8);
                offset = Write(buffer, offset, attachment.Data);
            }

            offset = Write(buffer, offset, crlf);
            offset = Write(buffer, offset, dashDash);
            offset = Write(buffer, offset, boundaryBytes);
            offset = Write(buffer, offset, dashDash);
            Write(buffer, offset, crlf);

            ByteArrayContent content = new(buffer);
            content.Headers.ContentType = new MediaTypeHeaderValue("multipart/form-data");
            content.Headers.ContentType.Parameters.Add(new NameValueHeaderValue("boundary", Encoding.UTF8.GetString(boundaryBytes)));
            return content;
        }

        private static int Write(byte[] buffer, int offset, ReadOnlySpan<byte> data)
        {
            data.CopyTo(buffer.AsSpan(offset));
            return offset + data.Length;
        }

        private static int Write(byte[] buffer, int offset, byte[] data)
        {
            data.CopyTo(buffer.AsSpan(offset));
            return offset + data.Length;
        }
    }
}
`},{path:`Components/V1/IV1Component.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V1
{
    internal interface IV1Component
    {
        void Write(Utf8JsonWriter writer);
    }
}
`},{path:`Components/V1/V1ActionRowBuilder.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V1
{
    internal sealed class V1ActionRowBuilder : IV1Component
    {
        private readonly List<IV1Component> _components = [];

        public V1ActionRowBuilder AddComponent(IV1Component component)
        {
            _components.Add(component);
            return this;
        }

        public void Write(Utf8JsonWriter writer)
        {
            writer.WriteStartObject();
            writer.WriteNumber("type", 1);
            writer.WriteStartArray("components");
            foreach (IV1Component component in _components)
            {
                component.Write(writer);
            }
            writer.WriteEndArray();
            writer.WriteEndObject();
        }
    }
}
`},{path:`Components/V1/V1ButtonBuilder.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V1
{
    internal enum ButtonStyle
    {
        Primary = 1,
        Secondary = 2,
        Success = 3,
        Danger = 4,
        Link = 5,
    }

    internal sealed class V1ButtonBuilder : IV1Component
    {
        private ButtonStyle _style;
        private string? _label;
        private string? _customId;
        private string? _url;
        private string? _emojiName;
        private string? _emojiId;
        private bool _emojiAnimated;
        private bool _disabled;

        public V1ButtonBuilder WithStyle(ButtonStyle style) { _style = style; return this; }
        public V1ButtonBuilder WithLabel(string label) { _label = label; return this; }
        public V1ButtonBuilder WithCustomId(string customId) { _customId = customId; return this; }
        public V1ButtonBuilder WithUrl(string url) { _url = url; return this; }
        public V1ButtonBuilder WithEmoji(string name, string? id = null, bool animated = false) { _emojiName = name; _emojiId = id; _emojiAnimated = animated; return this; }
        public V1ButtonBuilder WithDisabled(bool disabled = true) { _disabled = disabled; return this; }

        public void Write(Utf8JsonWriter writer)
        {
            writer.WriteStartObject();
            writer.WriteNumber("type", 2);
            writer.WriteNumber("style", (int)_style);

            if (_label is not null)
            {
                writer.WriteString("label", _label);
            }

            if (_style == ButtonStyle.Link)
            {
                writer.WriteString("url", _url ?? "#");
            }
            else
            {
                writer.WriteString("custom_id", _customId ?? Guid.NewGuid().ToString("N"));
            }

            if (_emojiName is not null)
            {
                writer.WriteStartObject("emoji");
                writer.WriteString("name", _emojiName);
                if (_emojiId is not null)
                {
                    writer.WriteString("id", _emojiId);
                }

                if (_emojiAnimated)
                {
                    writer.WriteBoolean("animated", true);
                }

                writer.WriteEndObject();
            }

            if (_disabled)
            {
                writer.WriteBoolean("disabled", true);
            }

            writer.WriteEndObject();
        }
    }
}
`},{path:`Components/V1/V1EmbedBuilder.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V1
{
    internal sealed class V1EmbedBuilder
    {
        private string? _title;
        private string? _description;
        private string? _url;
        private int _color;
        private string? _imageUrl;
        private string? _thumbnailUrl;
        private string? _authorName;
        private string? _authorIconUrl;
        private string? _authorUrl;
        private string? _footerText;
        private string? _footerIconUrl;
        private DateTimeOffset? _timestamp;
        private readonly List<EmbedField> _fields = [];

        public V1EmbedBuilder WithTitle(string title) { _title = title; return this; }
        public V1EmbedBuilder WithDescription(string description) { _description = description; return this; }
        public V1EmbedBuilder WithUrl(string url) { _url = url; return this; }
        public V1EmbedBuilder WithColor(int color) { _color = color; return this; }
        public V1EmbedBuilder WithImage(string url) { _imageUrl = url; return this; }
        public V1EmbedBuilder WithThumbnail(string url) { _thumbnailUrl = url; return this; }
        public V1EmbedBuilder WithAuthor(string name, string? iconUrl = null, string? url = null) { _authorName = name; _authorIconUrl = iconUrl; _authorUrl = url; return this; }
        public V1EmbedBuilder WithFooter(string text, string? iconUrl = null) { _footerText = text; _footerIconUrl = iconUrl; return this; }
        public V1EmbedBuilder WithTimestamp(DateTimeOffset timestamp) { _timestamp = timestamp; return this; }
        public V1EmbedBuilder AddField(string name, string value, bool inline = false) { _fields.Add(new EmbedField(name, value, inline)); return this; }

        public global::Discord.Embed BuildEmbed()
        {
            global::Discord.EmbedBuilder builder = new global::Discord.EmbedBuilder()
                .WithTitle(_title ?? "")
                .WithDescription(_description ?? "")
                .WithColor(new global::Discord.Color((uint)_color));

            if (_footerText is not null)
            {
                builder.WithFooter(_footerText, _footerIconUrl);
            }

            if (_timestamp is not null)
            {
                builder.WithTimestamp(_timestamp.Value);
            }

            if (_thumbnailUrl is not null)
            {
                builder.WithThumbnailUrl(_thumbnailUrl);
            }

            if (_imageUrl is not null)
            {
                builder.WithImageUrl(_imageUrl);
            }

            if (_authorName is not null)
            {
                builder.WithAuthor(_authorName, _authorIconUrl, _authorUrl);
            }

            foreach (EmbedField field in _fields)
            {
                builder.AddField(field.Name, field.Value, field.Inline);
            }

            return builder.Build();
        }

        public void Write(Utf8JsonWriter writer)
        {
            writer.WriteStartObject();

            if (_title is not null)
            {
                writer.WriteString("title", _title);
            }

            if (_description is not null)
            {
                writer.WriteString("description", _description);
            }

            if (_url is not null)
            {
                writer.WriteString("url", _url);
            }

            if (_color != 0)
            {
                writer.WriteNumber("color", _color);
            }

            if (_timestamp is not null)
            {
                writer.WriteString("timestamp", _timestamp.Value.ToString("O"));
            }

            if (_imageUrl is not null)
            {
                writer.WriteStartObject("image");
                writer.WriteString("url", _imageUrl);
                writer.WriteEndObject();
            }

            if (_thumbnailUrl is not null)
            {
                writer.WriteStartObject("thumbnail");
                writer.WriteString("url", _thumbnailUrl);
                writer.WriteEndObject();
            }

            if (_authorName is not null)
            {
                writer.WriteStartObject("author");
                writer.WriteString("name", _authorName);
                if (_authorIconUrl is not null)
                {
                    writer.WriteString("icon_url", _authorIconUrl);
                }

                if (_authorUrl is not null)
                {
                    writer.WriteString("url", _authorUrl);
                }

                writer.WriteEndObject();
            }

            if (_footerText is not null)
            {
                writer.WriteStartObject("footer");
                writer.WriteString("text", _footerText);
                if (_footerIconUrl is not null)
                {
                    writer.WriteString("icon_url", _footerIconUrl);
                }

                writer.WriteEndObject();
            }

            if (_fields.Count > 0)
            {
                writer.WriteStartArray("fields");
                foreach (EmbedField field in _fields)
                {
                    writer.WriteStartObject();
                    writer.WriteString("name", field.Name);
                    writer.WriteString("value", field.Value);
                    if (field.Inline)
                    {
                        writer.WriteBoolean("inline", true);
                    }

                    writer.WriteEndObject();
                }
                writer.WriteEndArray();
            }

            writer.WriteEndObject();
        }

        private readonly record struct EmbedField(string Name, string Value, bool Inline);
    }
}
`},{path:`Components/V1/V1MessageBuilder.cs`,code:`using System.Buffers;
using System.Text.Json;

namespace ShiggyBot.Components.V1
{
    internal sealed class V1MessageBuilder
    {
        private string? _content;
        private readonly List<V1EmbedBuilder> _embeds = [];
        private readonly List<IV1Component> _components = [];
        private readonly List<V1Attachment> _attachments = [];
        private int _nextAttachmentId;
        private int? _flags;

        public V1MessageBuilder WithContent(string content) { _content = content; return this; }
        public V1MessageBuilder AddEmbed(V1EmbedBuilder embed) { _embeds.Add(embed); return this; }
        public V1MessageBuilder AddComponent(IV1Component component) { _components.Add(component); return this; }
        public V1MessageBuilder WithFlags(int flags) { _flags = flags; return this; }

        public V1MessageBuilder AddAttachment(byte[] data, string fileName, string? description = null)
        {
            ArgumentNullException.ThrowIfNull(data);
            ArgumentException.ThrowIfNullOrWhiteSpace(fileName);
            _attachments.Add(new V1Attachment(_nextAttachmentId++, data, fileName, description));
            return this;
        }

        public IReadOnlyList<V1Attachment> Attachments => _attachments;

        public bool HasAttachments => _attachments.Count > 0;

        public byte[] Build()
        {
            ArrayBufferWriter<byte> buffer = new();
            using Utf8JsonWriter writer = new(buffer);
            writer.WriteStartObject();

            if (_content is not null)
            {
                writer.WriteString("content", _content);
            }

            if (_embeds.Count > 0)
            {
                writer.WriteStartArray("embeds");
                foreach (V1EmbedBuilder embed in _embeds)
                {
                    embed.Write(writer);
                }
                writer.WriteEndArray();
            }

            if (_components.Count > 0)
            {
                writer.WriteStartArray("components");
                foreach (IV1Component component in _components)
                {
                    component.Write(writer);
                }
                writer.WriteEndArray();
            }

            if (_attachments.Count > 0)
            {
                writer.WriteStartArray("attachments");
                foreach (V1Attachment attachment in _attachments)
                {
                    writer.WriteStartObject();
                    writer.WriteNumber("id", attachment.Id);
                    writer.WriteString("filename", attachment.FileName);
                    if (attachment.Description is not null)
                    {
                        writer.WriteString("description", attachment.Description);
                    }
                    writer.WriteEndObject();
                }
                writer.WriteEndArray();
            }

            if (_flags.HasValue)
            {
                writer.WriteNumber("flags", _flags.Value);
            }

            writer.WriteEndObject();
            writer.Flush();
            return buffer.WrittenSpan.ToArray();
        }
    }

    internal sealed record V1Attachment(int Id, byte[] Data, string FileName, string? Description);
}
`},{path:`Components/V2/ActionRowBuilder.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V2
{
    /// <summary>Builds a V1 action row (type 1) that wraps other components like select menus.</summary>
    internal sealed class ActionRowBuilder : IV2ComponentBuilder
    {
        private readonly List<IV2ComponentBuilder> _components = [];

        /// <summary>Adds a component to the action row.</summary>
        public ActionRowBuilder AddComponent(IV2ComponentBuilder component)
        {
            _components.Add(component);
            return this;
        }

        /// <summary>Writes this ActionRow as JSON.</summary>
        public void Write(Utf8JsonWriter writer)
        {
            ArgumentNullException.ThrowIfNull(writer);
            writer.WriteStartObject();
            writer.WriteNumber("type", 1);
            writer.WriteStartArray("components");
            foreach (IV2ComponentBuilder component in _components)
            {
                component.Write(writer);
            }

            writer.WriteEndArray();
            writer.WriteEndObject();
        }
    }
}
`},{path:`Components/V2/ComponentType.cs`,code:`namespace ShiggyBot.Components.V2
{
    internal enum ComponentType
    {
        ActionRow = 1,
        Button = 2,
        StringSelect = 3,
        TextInput = 4,
        UserSelect = 5,
        RoleSelect = 6,
        MentionableSelect = 7,
        ChannelSelect = 8,
        Section = 9,
        TextDisplay = 10,
        Thumbnail = 11,
        MediaGallery = 12,
        File = 13,
        Separator = 14,
        Container = 17,
    }
}
`},{path:`Components/V2/ComponentsV2Client.cs`,code:`using System.Net.Http.Headers;
using ShiggyBot.Utils;

namespace ShiggyBot.Components.V2
{
    /// <summary>HTTP client for sending Components V2 messages via Discord's REST API.</summary>
    internal sealed class ComponentsV2Client : IDisposable
    {
        private const int IsComponentsV2Flag = 1 << 15;
        private static readonly MediaTypeHeaderValue JsonContentType = new("application/json");

        private readonly HttpClient _http;
        private readonly string _baseUrl;

        /// <summary>Creates a new ComponentsV2Client.</summary>
        public ComponentsV2Client(string token, HttpClient? httpClient = null)
        {
            ArgumentNullException.ThrowIfNull(token);
            _http = httpClient ?? new HttpClient();
            _http.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bot", token);
            _http.DefaultRequestHeaders.UserAgent.ParseAdd("ShiggyBot");
            _baseUrl = "https://discord.com/api/v10";
        }

        /// <summary>Sends a V2 component message to a channel.</summary>
        public async Task<bool> SendMessageAsync(
            ulong channelId,
            V2MessageBuilder builder,
            CancellationToken cancellationToken = default)
        {
            ArgumentNullException.ThrowIfNull(builder);

            byte[] payload = builder
                .WithFlags(IsComponentsV2Flag)
                .Build();

            Uri url = new($"{_baseUrl}/channels/{channelId}/messages");
            bool hasAttachments = builder.AttachmentCount > 0;

            for (int attempt = 0; attempt < 3; attempt++)
            {
                HttpResponseMessage response;
                if (hasAttachments)
                {
                    using MultipartFormDataContent content = [];
                    List<ByteArrayContent> parts = [];

                    ByteArrayContent payloadPart = new(payload)
                    {
                        Headers = { ContentType = JsonContentType }
                    };
                    parts.Add(payloadPart);
                    content.Add(payloadPart, "payload_json");

                    for (int i = 0; i < builder.AttachmentCount; i++)
                    {
                        V2MessageBuilder.AttachmentEntry attachment = builder.GetAttachment(i);
                        ByteArrayContent filePart = new(attachment.Content)
                        {
                            Headers = { ContentType = MediaTypeHeaderValue.Parse("application/octet-stream") }
                        };
                        parts.Add(filePart);
                        content.Add(filePart, $"files[{i}]", attachment.Filename);
                    }

                    response = await _http.PostAsync(url, content, cancellationToken)
                        .ConfigureAwait(false);

                    foreach (ByteArrayContent part in parts)
                    {
                        part.Dispose();
                    }
                }
                else
                {
                    using ByteArrayContent content = new(payload);
                    content.Headers.ContentType = JsonContentType;

                    response = await _http.PostAsync(url, content, cancellationToken)
                        .ConfigureAwait(false);
                }

                using (response)
                {
                    if (response.IsSuccessStatusCode)
                    {
                        return true;
                    }

                    if ((int)response.StatusCode == 429)
                    {
                        string retryAfter = response.Headers.TryGetValues("Retry-After", out IEnumerable<string>? values)
                            ? values.FirstOrDefault() ?? "1"
                            : "1";

                        if (int.TryParse(retryAfter, out int seconds) && seconds > 0)
                        {
                            Logger.Warn($"[V2] Rate limited, retrying after {seconds}s");
                            await Task.Delay(TimeSpan.FromSeconds(seconds), cancellationToken).ConfigureAwait(false);
                            continue;
                        }
                    }

                    string? body = null;
                    try
                    {
                        body = await response.Content.ReadAsStringAsync(cancellationToken).ConfigureAwait(false);
                    }
                    catch (HttpRequestException)
                    {
                    }
                    catch (InvalidOperationException)
                    {
                    }

                    Logger.Error($"[V2] Failed to send message: {response.StatusCode} {body}");
                    return false;
                }
            }

            return false;
        }

        /// <summary>Edits an existing message with V2 components.</summary>
        public async Task<bool> EditMessageAsync(
            ulong channelId,
            ulong messageId,
            V2MessageBuilder builder,
            CancellationToken cancellationToken = default)
        {
            ArgumentNullException.ThrowIfNull(builder);

            byte[] payload = builder.Build();

            using ByteArrayContent content = new(payload);
            content.Headers.ContentType = JsonContentType;

            Uri url = new($"{_baseUrl}/channels/{channelId}/messages/{messageId}");

            using HttpResponseMessage response = await _http.PatchAsync(url, content, cancellationToken)
                .ConfigureAwait(false);

            if (!response.IsSuccessStatusCode)
            {
                string? body = null;
                try
                {
                    body = await response.Content.ReadAsStringAsync(cancellationToken).ConfigureAwait(false);
                }
                catch (HttpRequestException)
                {
                }
                catch (InvalidOperationException)
                {
                }

                Logger.Error($"[V2] Failed to edit message: {response.StatusCode} {body}");
                return false;
            }

            return true;
        }

        /// <summary>Sends a raw JSON payload as a new message (supports mixed V1+V2 components).</summary>
        public async Task<bool> SendRawPayloadAsync(
            ulong channelId,
            byte[] payload,
            CancellationToken cancellationToken = default)
        {
            Uri url = new($"{_baseUrl}/channels/{channelId}/messages");
            using ByteArrayContent content = new(payload);
            content.Headers.ContentType = JsonContentType;
            using HttpResponseMessage response = await _http.PostAsync(url, content, cancellationToken)
                .ConfigureAwait(false);

            if (!response.IsSuccessStatusCode)
            {
                string? body = null;
                try
                {
                    body = await response.Content.ReadAsStringAsync(cancellationToken).ConfigureAwait(false);
                }
                catch (HttpRequestException)
                {
                }
                catch (InvalidOperationException)
                {
                }

                Logger.Error($"[V2] Failed to send raw payload: {response.StatusCode} {body}");
                return false;
            }

            return true;
        }

        /// <summary>Edits an existing message with a raw JSON payload (supports mixed V1+V2 components).</summary>
        public async Task<bool> EditRawPayloadAsync(
            ulong channelId,
            ulong messageId,
            byte[] payload,
            CancellationToken cancellationToken = default)
        {
            Uri url = new($"{_baseUrl}/channels/{channelId}/messages/{messageId}");
            using ByteArrayContent content = new(payload);
            content.Headers.ContentType = JsonContentType;
            using HttpResponseMessage response = await _http.PatchAsync(url, content, cancellationToken)
                .ConfigureAwait(false);

            if (!response.IsSuccessStatusCode)
            {
                string? body = null;
                try
                {
                    body = await response.Content.ReadAsStringAsync(cancellationToken).ConfigureAwait(false);
                }
                catch (HttpRequestException)
                {
                }
                catch (InvalidOperationException)
                {
                }

                Logger.Error($"[V2] Failed to edit raw payload: {response.StatusCode} {body}");
                return false;
            }

            return true;
        }

        /// <summary>Disposes the underlying HttpClient.</summary>
        public void Dispose()
        {
            _http.Dispose();
        }
    }
}
`},{path:`Components/V2/ContainerBuilder.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V2
{
    /// <summary>Builds a Container component — groups components visually with an optional accent color.</summary>
    internal sealed class ContainerBuilder : IV2ComponentBuilder
    {
        private readonly List<IV2ComponentBuilder> _components = [];
        private int? _accentColor;
        private bool _spoiler;

        /// <summary>Adds a child component to the container.</summary>
        public ContainerBuilder AddComponent(IV2ComponentBuilder component)
        {
            _components.Add(component);
            return this;
        }

        /// <summary>Sets the accent color for the container (RGB 0x000000–0xFFFFFF).</summary>
        public ContainerBuilder WithAccentColor(int color)
        {
            _accentColor = color;
            return this;
        }

        /// <summary>Marks the container as a spoiler.</summary>
        public ContainerBuilder AsSpoiler(bool spoiler = true)
        {
            _spoiler = spoiler;
            return this;
        }

        /// <summary>Writes this Container as JSON.</summary>
        public void Write(Utf8JsonWriter writer)
        {
            ArgumentNullException.ThrowIfNull(writer);
            writer.WriteStartObject();
            writer.WriteNumber("type", (int)ComponentType.Container);
            if (_accentColor.HasValue)
            {
                writer.WriteNumber("accent_color", _accentColor.Value);
            }

            writer.WriteStartArray("components");
            foreach (IV2ComponentBuilder component in _components)
            {
                component.Write(writer);
            }

            writer.WriteEndArray();
            if (_spoiler)
            {
                writer.WriteBoolean("spoiler", true);
            }

            writer.WriteEndObject();
        }
    }
}
`},{path:`Components/V2/FileBuilder.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V2
{
    /// <summary>Builds a File component — displays an uploaded file attachment.</summary>
    internal sealed class FileBuilder : IV2ComponentBuilder
    {
        private string? _url;
        private bool _spoiler;

        /// <summary>Sets the attachment filename (uses attachment:// protocol).</summary>
        public FileBuilder WithAttachment(string filename)
        {
            _url = $"attachment://{filename}";
            return this;
        }

        /// <summary>Marks the file as a spoiler.</summary>
        public FileBuilder AsSpoiler(bool spoiler = true)
        {
            _spoiler = spoiler;
            return this;
        }

        /// <summary>Writes this File component as JSON.</summary>
        public void Write(Utf8JsonWriter writer)
        {
            ArgumentNullException.ThrowIfNull(writer);
            writer.WriteStartObject();
            writer.WriteNumber("type", (int)ComponentType.File);
            writer.WriteStartObject("file");
            if (_url is not null)
            {
                writer.WriteString("url", _url);
            }

            writer.WriteEndObject();
            if (_spoiler)
            {
                writer.WriteBoolean("spoiler", true);
            }

            writer.WriteEndObject();
        }
    }
}
`},{path:`Components/V2/IV2ComponentBuilder.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V2
{
    /// <summary>Base interface for all Components V2 builders.</summary>
    internal interface IV2ComponentBuilder
    {
        /// <summary>Writes this component as JSON using the provided writer.</summary>
        void Write(Utf8JsonWriter writer);
    }
}
`},{path:`Components/V2/MediaGalleryBuilder.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V2
{
    /// <summary>Builds a MediaGallery component — displays 1–10 images in a gallery.</summary>
    internal sealed class MediaGalleryBuilder : IV2ComponentBuilder
    {
        private readonly List<MediaGalleryItem> _items = [];

        /// <summary>Adds a media item to the gallery.</summary>
        public MediaGalleryBuilder AddItem(Uri uri, string? description = null, bool spoiler = false)
        {
            _items.Add(new MediaGalleryItem(uri, description, spoiler));
            return this;
        }

        /// <summary>Writes this MediaGallery as JSON.</summary>
        public void Write(Utf8JsonWriter writer)
        {
            ArgumentNullException.ThrowIfNull(writer);
            writer.WriteStartObject();
            writer.WriteNumber("type", (int)ComponentType.MediaGallery);
            writer.WriteStartArray("items");
            foreach (MediaGalleryItem item in _items)
            {
                item.Write(writer);
            }

            writer.WriteEndArray();
            writer.WriteEndObject();
        }

        internal readonly struct MediaGalleryItem
        {
            private readonly Uri _url;
            private readonly string? _description;
            private readonly bool _spoiler;

            internal MediaGalleryItem(Uri url, string? description, bool spoiler)
            {
                _url = url;
                _description = description;
                _spoiler = spoiler;
            }

            public void Write(Utf8JsonWriter writer)
            {
                ArgumentNullException.ThrowIfNull(writer);
                writer.WriteStartObject();
                writer.WriteStartObject("media");
                writer.WriteString("url", _url.ToString());
                writer.WriteEndObject();
                if (_description is not null)
                {
                    writer.WriteString("description", _description);
                }

                if (_spoiler)
                {
                    writer.WriteBoolean("spoiler", true);
                }

                writer.WriteEndObject();
            }
        }
    }
}
`},{path:`Components/V2/SectionBuilder.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V2
{
    /// <summary>Builds a Section component — groups text displays with an accessory (thumbnail or button).</summary>
    internal sealed class SectionBuilder : IV2ComponentBuilder
    {
        private readonly List<TextDisplayBuilder> _textComponents = [];
        private ThumbnailBuilder? _thumbnailAccessory;
        private SectionButtonAccessory? _buttonAccessory;

        /// <summary>Adds a text display to the section.</summary>
        public SectionBuilder AddTextDisplay(TextDisplayBuilder textDisplay)
        {
            _textComponents.Add(textDisplay);
            return this;
        }

        /// <summary>Sets a thumbnail as the section accessory.</summary>
        public SectionBuilder WithThumbnailAccessory(ThumbnailBuilder thumbnail)
        {
            _thumbnailAccessory = thumbnail;
            _buttonAccessory = null;
            return this;
        }

        /// <summary>Sets a button as the section accessory.</summary>
        public SectionBuilder WithButtonAccessory(string label, string customId)
        {
            _buttonAccessory = new SectionButtonAccessory(label, customId, null);
            _thumbnailAccessory = null;
            return this;
        }

        /// <summary>Sets a link button as the section accessory.</summary>
        public SectionBuilder WithLinkButtonAccessory(string label, Uri url)
        {
            _buttonAccessory = new SectionButtonAccessory(label, null, url);
            _thumbnailAccessory = null;
            return this;
        }

        /// <summary>Writes this Section as JSON.</summary>
        public void Write(Utf8JsonWriter writer)
        {
            ArgumentNullException.ThrowIfNull(writer);
            writer.WriteStartObject();
            writer.WriteNumber("type", (int)ComponentType.Section);
            writer.WriteStartArray("components");
            foreach (TextDisplayBuilder text in _textComponents)
            {
                text.Write(writer);
            }

            writer.WriteEndArray();
            if (_thumbnailAccessory is not null)
            {
                writer.WritePropertyName("accessory");
                _thumbnailAccessory.Write(writer);
            }
            else if (_buttonAccessory is not null)
            {
                writer.WritePropertyName("accessory");
                _buttonAccessory.Value.Write(writer);
            }

            writer.WriteEndObject();
        }

        private readonly struct SectionButtonAccessory
        {
            private readonly string _label;
            private readonly string? _customId;
            private readonly Uri? _url;

            internal SectionButtonAccessory(string label, string? customId, Uri? url)
            {
                _label = label;
                _customId = customId;
                _url = url;
            }

            public void Write(Utf8JsonWriter writer)
            {
                ArgumentNullException.ThrowIfNull(writer);
                writer.WriteStartObject();
                writer.WriteNumber("type", (int)ComponentType.Button);
                writer.WriteString("label", _label);
                if (_url is not null)
                {
                    writer.WriteNumber("style", 5);
                    writer.WriteString("url", _url.ToString());
                }
                else
                {
                    writer.WriteNumber("style", 1);
                    writer.WriteString("custom_id", _customId);
                }

                writer.WriteEndObject();
            }
        }
    }
}
`},{path:`Components/V2/SelectMenuBuilder.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V2
{
    /// <summary>Builds a V1 select menu component (type 3).</summary>
    internal sealed class SelectMenuBuilder : IV2ComponentBuilder
    {
        private string? _customId;
        private string? _placeholder;
        private int _minValues = 1;
        private int _maxValues = 1;
        private readonly List<SelectOption> _options = [];

        /// <summary>Sets the custom ID for the select menu.</summary>
        public SelectMenuBuilder WithCustomId(string customId)
        {
            _customId = customId;
            return this;
        }

        /// <summary>Sets the placeholder text.</summary>
        public SelectMenuBuilder WithPlaceholder(string placeholder)
        {
            _placeholder = placeholder;
            return this;
        }

        /// <summary>Sets the minimum number of selections required.</summary>
        public SelectMenuBuilder WithMinValues(int minValues)
        {
            _minValues = minValues;
            return this;
        }

        /// <summary>Sets the maximum number of selections allowed.</summary>
        public SelectMenuBuilder WithMaxValues(int maxValues)
        {
            _maxValues = maxValues;
            return this;
        }

        /// <summary>Adds an option to the select menu.</summary>
        public SelectMenuBuilder AddOption(string label, string value, string? description = null, string? emojiName = null)
        {
            _options.Add(new SelectOption(label, value, description, emojiName));
            return this;
        }

        /// <summary>Writes this SelectMenu as JSON.</summary>
        public void Write(Utf8JsonWriter writer)
        {
            ArgumentNullException.ThrowIfNull(writer);
            writer.WriteStartObject();
            writer.WriteNumber("type", 3);
            writer.WriteString("custom_id", _customId);
            if (_placeholder is not null)
            {
                writer.WriteString("placeholder", _placeholder);
            }

            writer.WriteNumber("min_values", _minValues);
            writer.WriteNumber("max_values", _maxValues);
            writer.WriteStartArray("options");
            foreach (SelectOption option in _options)
            {
                option.Write(writer);
            }

            writer.WriteEndArray();
            writer.WriteEndObject();
        }

        private readonly struct SelectOption
        {
            private readonly string _label;
            private readonly string _value;
            private readonly string? _description;
            private readonly string? _emojiName;

            internal SelectOption(string label, string value, string? description, string? emojiName)
            {
                _label = label;
                _value = value;
                _description = description;
                _emojiName = emojiName;
            }

            public void Write(Utf8JsonWriter writer)
            {
                writer.WriteStartObject();
                writer.WriteString("label", _label);
                writer.WriteString("value", _value);
                writer.WriteString("description", _description ?? "");
                if (_emojiName is not null)
                {
                    writer.WriteStartObject("emoji");
                    writer.WriteString("name", _emojiName);
                    writer.WriteEndObject();
                }

                writer.WriteEndObject();
            }
        }
    }
}
`},{path:`Components/V2/SeparatorBuilder.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V2
{
    /// <summary>Builds a Separator component — vertical padding and optional divider between components.</summary>
    internal sealed class SeparatorBuilder : IV2ComponentBuilder
    {
        private bool _divider = true;
        private SeparatorSpacing _spacing = SeparatorSpacing.Small;

        /// <summary>Sets whether a visual divider line is shown.</summary>
        public SeparatorBuilder WithDivider(bool divider)
        {
            _divider = divider;
            return this;
        }

        /// <summary>Sets the spacing size.</summary>
        public SeparatorBuilder WithSpacing(SeparatorSpacing spacing)
        {
            _spacing = spacing;
            return this;
        }

        /// <summary>Writes this Separator as JSON.</summary>
        public void Write(Utf8JsonWriter writer)
        {
            ArgumentNullException.ThrowIfNull(writer);
            writer.WriteStartObject();
            writer.WriteNumber("type", (int)ComponentType.Separator);
            if (!_divider)
            {
                writer.WriteBoolean("divider", false);
            }

            writer.WriteNumber("spacing", (int)_spacing);
            writer.WriteEndObject();
        }
    }
}
`},{path:`Components/V2/SeparatorSpacing.cs`,code:`namespace ShiggyBot.Components.V2
{
    /// <summary>Spacing size for Separator components.</summary>
    internal enum SeparatorSpacing
    {
        /// <summary>Default (no explicit spacing).</summary>
        None = 0,

        /// <summary>Small spacing.</summary>
        Small = 1,

        /// <summary>Large spacing.</summary>
        Large = 2,
    }
}
`},{path:`Components/V2/TextDisplayBuilder.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V2
{
    /// <summary>Builds a TextDisplay component — static markdown-formatted text.</summary>
    internal sealed class TextDisplayBuilder : IV2ComponentBuilder
    {
        private string? _content;

        /// <summary>Sets the markdown content of the text display.</summary>
        public TextDisplayBuilder WithContent(string content)
        {
            _content = content;
            return this;
        }

        /// <summary>Writes this TextDisplay as JSON.</summary>
        public void Write(Utf8JsonWriter writer)
        {
            ArgumentNullException.ThrowIfNull(writer);
            writer.WriteStartObject();
            writer.WriteNumber("type", (int)ComponentType.TextDisplay);
            if (_content is not null)
            {
                writer.WriteString("content", _content);
            }

            writer.WriteEndObject();
        }
    }
}
`},{path:`Components/V2/ThumbnailBuilder.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Components.V2
{
    /// <summary>Builds a Thumbnail component — small image accessory for sections.</summary>
    internal sealed class ThumbnailBuilder : IV2ComponentBuilder
    {
        private Uri? _url;
        private string? _description;
        private bool _spoiler;

        /// <summary>Sets the media URL for the thumbnail.</summary>
        public ThumbnailBuilder WithMedia(Uri uri)
        {
            _url = uri;
            return this;
        }

        /// <summary>Sets alt text description for the media.</summary>
        public ThumbnailBuilder WithDescription(string description)
        {
            _description = description;
            return this;
        }

        /// <summary>Marks the thumbnail as a spoiler.</summary>
        public ThumbnailBuilder AsSpoiler(bool spoiler = true)
        {
            _spoiler = spoiler;
            return this;
        }

        /// <summary>Writes this Thumbnail as JSON.</summary>
        public void Write(Utf8JsonWriter writer)
        {
            ArgumentNullException.ThrowIfNull(writer);
            writer.WriteStartObject();
            writer.WriteNumber("type", (int)ComponentType.Thumbnail);
            writer.WriteStartObject("media");
            if (_url is not null)
            {
                writer.WriteString("url", _url.ToString());
            }

            writer.WriteEndObject();
            if (_description is not null)
            {
                writer.WriteString("description", _description);
            }

            if (_spoiler)
            {
                writer.WriteBoolean("spoiler", true);
            }

            writer.WriteEndObject();
        }
    }
}
`},{path:`Components/V2/V2MessageBuilder.cs`,code:`using System.Buffers;
using System.Text.Json;

namespace ShiggyBot.Components.V2
{
    /// <summary>Builds a complete Components V2 message payload as JSON.</summary>
    internal sealed class V2MessageBuilder
    {
        private readonly List<IV2ComponentBuilder> _components = [];
        private int? _flags;
        private string? _content;
        private string? _customId;
        private readonly List<AttachmentEntry> _attachments = [];

        /// <summary>Adds a top-level V2 component to the message.</summary>
        public V2MessageBuilder AddComponent(IV2ComponentBuilder component)
        {
            _components.Add(component);
            return this;
        }

        /// <summary>Sets message flags (e.g. IS_COMPONENTS_V2).</summary>
        public V2MessageBuilder WithFlags(int flags)
        {
            _flags = flags;
            return this;
        }

        /// <summary>Sets the message content (not used when IS_COMPONENTS_V2 is set).</summary>
        public V2MessageBuilder WithContent(string content)
        {
            _content = content;
            return this;
        }

        /// <summary>Sets a custom ID (used for interaction responses).</summary>
        public V2MessageBuilder WithCustomId(string customId)
        {
            _customId = customId;
            return this;
        }

        /// <summary>Adds a file attachment to include in the message upload.</summary>
        public V2MessageBuilder AddAttachment(string filename, byte[] content, string? description = null)
        {
            _attachments.Add(new AttachmentEntry(filename, content, description));
            return this;
        }

        /// <summary>Gets the number of file attachments.</summary>
        internal int AttachmentCount => _attachments.Count;

        /// <summary>Gets the file attachment at the given index.</summary>
        internal AttachmentEntry GetAttachment(int index)
        {
            return _attachments[index];
        }

        /// <summary>Builds the message payload as a UTF-8 JSON byte array.</summary>
        public byte[] Build()
        {
            ArrayBufferWriter<byte> buffer = new();
            using Utf8JsonWriter writer = new(buffer);
            writer.WriteStartObject();
            if (_content is not null)
            {
                writer.WriteString("content", _content);
            }

            if (_customId is not null)
            {
                writer.WriteString("custom_id", _customId);
            }

            writer.WriteStartArray("components");
            foreach (IV2ComponentBuilder component in _components)
            {
                component.Write(writer);
            }

            writer.WriteEndArray();

            if (_attachments.Count > 0)
            {
                writer.WriteStartArray("attachments");
                for (int i = 0; i < _attachments.Count; i++)
                {
                    writer.WriteStartObject();
                    writer.WriteNumber("id", i);
                    writer.WriteString("filename", _attachments[i].Filename);
                    if (_attachments[i].Description is not null)
                    {
                        writer.WriteString("description", _attachments[i].Description);
                    }

                    writer.WriteEndObject();
                }

                writer.WriteEndArray();
            }

            if (_flags.HasValue)
            {
                writer.WriteNumber("flags", _flags.Value);
            }

            writer.WriteEndObject();
            writer.Flush();
            return buffer.WrittenSpan.ToArray();
        }

        internal readonly record struct AttachmentEntry(string Filename, byte[] Content, string? Description);
    }
}
`},{path:`Configuration/BotConfig.cs`,code:`using Microsoft.Extensions.Configuration;

namespace ShiggyBot.Configuration
{
    /// <summary>
    /// Configuration class for bot settings.
    /// </summary>
    internal sealed class BotConfig
    {
        /// <summary>
        /// Gets or sets the Discord bot token.
        /// </summary>
        public string Token { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the command prefix.
        /// </summary>
        public string Prefix { get; set; } = string.Empty;

        /// <summary>
        /// Loads bot configuration from IConfiguration.
        /// </summary>
        /// <param name="config">The configuration instance.</param>
        /// <returns>A new BotConfig instance.</returns>
        public static BotConfig LoadFromConfiguration(IConfiguration config)
        {
            string? token = config["DISCORD_TOKEN"];
            if (string.IsNullOrWhiteSpace(token))
            {
                token = Environment.GetEnvironmentVariable("DISCORD_TOKEN");
            }
            if (string.IsNullOrWhiteSpace(token))
            {
                token = string.Empty;
            }

            string? prefix = config["PREFIX"];
            if (string.IsNullOrWhiteSpace(prefix))
            {
                prefix = Environment.GetEnvironmentVariable("PREFIX");
            }
            if (string.IsNullOrWhiteSpace(prefix))
            {
                prefix = string.Empty;
            }

            return new BotConfig { Token = token, Prefix = prefix };
        }
    }
}
`},{path:`Data/DatabaseService.cs`,code:`using System.Globalization;
using Microsoft.Data.Sqlite;

namespace ShiggyBot.Data
{
    internal sealed class DatabaseService : IDisposable
    {
        private readonly SqliteConnection _connection;
        private readonly string _dbPath;

        public DatabaseService(string dbPath = "shiggybot.db")
        {
            string baseDir = AppContext.BaseDirectory;
            _dbPath = Path.Combine(baseDir, dbPath);
            _connection = new($"Data Source={_dbPath}");
        }

        public async Task InitializeAsync()
        {
            await _connection.OpenAsync().ConfigureAwait(false);
            using SqliteCommand command = _connection.CreateCommand();
            command.CommandText =
            @"
                CREATE TABLE IF NOT EXISTS TimedBans (
                    Id INTEGER PRIMARY KEY AUTOINCREMENT,
                    GuildId TEXT NOT NULL,
                    UserId TEXT NOT NULL,
                    BanTime TEXT NOT NULL,
                    UnbanTime TEXT NOT NULL,
                    Reason TEXT,
                    ModeratorId TEXT
                );

                CREATE TABLE IF NOT EXISTS DisabledCommands (
                    GuildId TEXT NOT NULL,
                    CommandName TEXT NOT NULL,
                    PRIMARY KEY (GuildId, CommandName)
                );

                CREATE TABLE IF NOT EXISTS GuildConfig (
                    GuildId TEXT NOT NULL PRIMARY KEY,
                    WelcomeRoleId TEXT
                )
            ";
            await command.ExecuteNonQueryAsync().ConfigureAwait(false);
        }

        public async Task AddTimedBanAsync(ulong guildId, ulong userId, DateTime unbanTime, string? reason = null, ulong? moderatorId = null)
        {
            using SqliteCommand command = _connection.CreateCommand();
            command.CommandText =
            @"
                INSERT INTO TimedBans (GuildId, UserId, BanTime, UnbanTime, Reason, ModeratorId)
                VALUES ($guildId, $userId, $banTime, $unbanTime, $reason, $moderatorId)
            ";
            command.Parameters.AddWithValue("$guildId", guildId.ToString(CultureInfo.InvariantCulture));
            command.Parameters.AddWithValue("$userId", userId.ToString(CultureInfo.InvariantCulture));
            command.Parameters.AddWithValue("$banTime", DateTime.UtcNow.ToString("o"));
            command.Parameters.AddWithValue("$unbanTime", unbanTime.ToString("o"));
            command.Parameters.AddWithValue("$reason", reason ?? "No reason provided");
            command.Parameters.AddWithValue("$moderatorId", moderatorId?.ToString(CultureInfo.InvariantCulture) ?? "Unknown");
            await command.ExecuteNonQueryAsync().ConfigureAwait(false);
        }

        public async Task RemoveTimedBanAsync(ulong guildId, ulong userId)
        {
            using SqliteCommand command = _connection.CreateCommand();
            command.CommandText = "DELETE FROM TimedBans WHERE GuildId = $guildId AND UserId = $userId";
            command.Parameters.AddWithValue("$guildId", guildId.ToString(CultureInfo.InvariantCulture));
            command.Parameters.AddWithValue("$userId", userId.ToString(CultureInfo.InvariantCulture));
            await command.ExecuteNonQueryAsync().ConfigureAwait(false);
        }

        public async Task<DateTime?> GetNextUnbanTimeAsync()
        {
            using SqliteCommand command = _connection.CreateCommand();
            command.CommandText = "SELECT MIN(UnbanTime) FROM TimedBans WHERE UnbanTime > $currentTime";
            command.Parameters.AddWithValue("$currentTime", DateTime.UtcNow.ToString("o"));

            string? result = await command.ExecuteScalarAsync().ConfigureAwait(false) as string;
            return result is not null ? DateTime.Parse(result, CultureInfo.InvariantCulture) : null;
        }

        public async Task<List<TimedBan>> GetExpiredBansAsync()
        {
            List<TimedBan> expiredBans = [];
            using SqliteCommand command = _connection.CreateCommand();
            command.CommandText = "SELECT * FROM TimedBans WHERE UnbanTime <= $currentTime";
            command.Parameters.AddWithValue("$currentTime", DateTime.UtcNow.ToString("o"));

            using SqliteDataReader reader = await command.ExecuteReaderAsync().ConfigureAwait(false);
            while (await reader.ReadAsync().ConfigureAwait(false))
            {
                expiredBans.Add(new TimedBan
                {
                    Id = reader.GetInt32(0),
                    GuildId = ulong.Parse(reader.GetString(1), CultureInfo.InvariantCulture),
                    UserId = ulong.Parse(reader.GetString(2), CultureInfo.InvariantCulture),
                    BanTime = DateTime.Parse(reader.GetString(3), CultureInfo.InvariantCulture),
                    UnbanTime = DateTime.Parse(reader.GetString(4), CultureInfo.InvariantCulture),
                    Reason = reader.GetString(5),
                    ModeratorId = reader.GetString(6)
                });
            }
            return expiredBans;
        }

        public async Task DisableCommandAsync(ulong guildId, string commandName)
        {
            using SqliteCommand command = _connection.CreateCommand();
            command.CommandText = @"
                INSERT OR IGNORE INTO DisabledCommands (GuildId, CommandName)
                VALUES ($guildId, $commandName)
            ";
            command.Parameters.AddWithValue("$guildId", guildId.ToString(CultureInfo.InvariantCulture));
            command.Parameters.AddWithValue("$commandName", commandName.ToUpperInvariant());
            await command.ExecuteNonQueryAsync().ConfigureAwait(false);
        }

        public async Task EnableCommandAsync(ulong guildId, string commandName)
        {
            using SqliteCommand command = _connection.CreateCommand();
            command.CommandText = "DELETE FROM DisabledCommands WHERE GuildId = $guildId AND CommandName = $commandName";
            command.Parameters.AddWithValue("$guildId", guildId.ToString(CultureInfo.InvariantCulture));
            command.Parameters.AddWithValue("$commandName", commandName.ToUpperInvariant());
            await command.ExecuteNonQueryAsync().ConfigureAwait(false);
        }

        public async Task<bool> IsCommandDisabledAsync(ulong guildId, string commandName)
        {
            using SqliteCommand command = _connection.CreateCommand();
            command.CommandText = "SELECT COUNT(1) FROM DisabledCommands WHERE GuildId = $guildId AND CommandName = $commandName";
            command.Parameters.AddWithValue("$guildId", guildId.ToString(CultureInfo.InvariantCulture));
            command.Parameters.AddWithValue("$commandName", commandName.ToUpperInvariant());
            long count = (long)(await command.ExecuteScalarAsync().ConfigureAwait(false))!;
            return count > 0;
        }

        public async Task<List<string>> GetDisabledCommandsAsync(ulong guildId)
        {
            List<string> commands = [];
            using SqliteCommand command = _connection.CreateCommand();
            command.CommandText = "SELECT CommandName FROM DisabledCommands WHERE GuildId = $guildId ORDER BY CommandName";
            command.Parameters.AddWithValue("$guildId", guildId.ToString(CultureInfo.InvariantCulture));

            using SqliteDataReader reader = await command.ExecuteReaderAsync().ConfigureAwait(false);
            while (await reader.ReadAsync().ConfigureAwait(false))
            {
                commands.Add(reader.GetString(0));
            }
            return commands;
        }

        public async Task SetWelcomeRoleAsync(ulong guildId, ulong roleId)
        {
            using SqliteCommand command = _connection.CreateCommand();
            command.CommandText = @"
                INSERT INTO GuildConfig (GuildId, WelcomeRoleId)
                VALUES ($guildId, $roleId)
                ON CONFLICT(GuildId) DO UPDATE SET WelcomeRoleId = $roleId
            ";
            command.Parameters.AddWithValue("$guildId", guildId.ToString(CultureInfo.InvariantCulture));
            command.Parameters.AddWithValue("$roleId", roleId.ToString(CultureInfo.InvariantCulture));
            await command.ExecuteNonQueryAsync().ConfigureAwait(false);
        }

        public async Task<ulong?> GetWelcomeRoleAsync(ulong guildId)
        {
            using SqliteCommand command = _connection.CreateCommand();
            command.CommandText = "SELECT WelcomeRoleId FROM GuildConfig WHERE GuildId = $guildId";
            command.Parameters.AddWithValue("$guildId", guildId.ToString(CultureInfo.InvariantCulture));

            string? result = await command.ExecuteScalarAsync().ConfigureAwait(false) as string;
            return result is not null && ulong.TryParse(result, CultureInfo.InvariantCulture, out ulong roleId) ? roleId : null;
        }

        public void Dispose()
        {
            _connection?.Dispose();
            GC.SuppressFinalize(this);
        }
    }

    internal sealed class TimedBan
    {
        public int Id { get; set; }
        public ulong GuildId { get; set; }
        public ulong UserId { get; set; }
        public DateTime BanTime { get; set; }
        public DateTime UnbanTime { get; set; }
        public string? Reason { get; set; }
        public string? ModeratorId { get; set; }
    }
}
`},{path:`Discord/DiscordClientService.cs`,code:`using Discord;
using Discord.WebSocket;
using Microsoft.Data.Sqlite;
using ShiggyBot.Components.V1;
using ShiggyBot.Components.V2;
using ShiggyBot.Configuration;
using ShiggyBot.Utils;
using ShiggyBot.Features;
using ShiggyBot.Data;
using ShiggyBot.Commands;
using ShiggyBot.Commands.Utility;
using ShiggyBot.Services;
using ShiggyBot.Services.GitHub;
using Microsoft.Extensions.Configuration;
using Discord.Net.WebSockets;
namespace ShiggyBot.Discord
{
    internal sealed class DiscordClientService : IDisposable
    {
        private readonly BotConfig _config;
        private readonly DiscordSocketClient _client;
        private readonly IConfiguration _appConfig;
        private readonly CommandHandler _commandHandler;
        private readonly DatabaseService _db;
        private readonly BanCheckService _banCheck;
        private readonly ComponentsV1Client? _v1Client;
        private readonly ComponentsV2Client? _v2Client;
        private AutoroleFeature? _autorole;
        private PresenceFeature? _presence;
        private GitHubStatsService? _gitHubStats;
        private CodePreviewFeature? _codePreview;
        private CommitPreviewFeature? _commitPreview;
        private readonly MonitorService _gitHubWebhook;

        public DiscordClientService(BotConfig config, IConfiguration appConfig)
        {
            ArgumentNullException.ThrowIfNull(config);
            ArgumentNullException.ThrowIfNull(appConfig);

            _config = config;
            _appConfig = appConfig;

            Logger.Info("[INIT] Initializing ShiggyBot...");

            DiscordSocketConfig cfg = new()
            {
                GatewayIntents = GatewayIntents.Guilds
                                 | GatewayIntents.GuildMembers
                                 | GatewayIntents.GuildMessages
                                 | GatewayIntents.MessageContent,
                WebSocketProvider = () => new VrWebSocket(DefaultWebSocketProvider.Instance())
            };
            _client = new DiscordSocketClient(cfg);
            // Log += LogAsync; // Disabled in favor of custom logs
            _client.Ready += OnReadyAsync;
            _client.Connected += OnConnectedAsync;
            _client.Disconnected += OnDisconnectedAsync;
            _client.MessageReceived += OnMessageAsync;
            _client.SelectMenuExecuted += OnSelectMenuExecutedAsync;
            _client.ButtonExecuted += OnButtonExecutedAsync;

            Logger.Info("[INIT] Discord client created");

            // Initialize database
            _db = new();

            // Initialize V1 and V2 component clients
            _v1Client = string.IsNullOrWhiteSpace(config.Token) ? null : new ComponentsV1Client(config.Token);
            _v2Client = string.IsNullOrWhiteSpace(config.Token) ? null : new ComponentsV2Client(config.Token);

            // Initialize command handling (pass database)
            _commandHandler = new(_client, config.Prefix, _db, _v1Client, _v2Client);
            Logger.Info("[INIT] Command handler initialized");

            // Initialize ban check service
            _banCheck = new(_client, _db);

            // Initialize GitHub repo monitor
            _gitHubWebhook = new(_client, appConfig);
            Logger.Info("[INIT] GitHub monitor service initialized");
        }

        public async Task StartAsync()
        {
            if (string.IsNullOrWhiteSpace(_config.Token))
            {
                Logger.Error("[ERROR] DISCORD_TOKEN is not set. Exiting.");
                return;
            }

            // Initialize database and features before connecting so no events are missed
            Logger.Info("[STARTUP] Initializing database...");
            await _db.InitializeAsync().ConfigureAwait(false);
            Logger.Info("[STARTUP] Database initialized");

            Logger.Info("[STARTUP] Initializing features...");
            _autorole = new(_client, _db);
            Logger.Info("[STARTUP] Autorole feature loaded");
            _gitHubStats = new();
            _presence = new(_client, _appConfig, _gitHubStats);
            Logger.Info("[STARTUP] Presence feature loaded");
            _codePreview = new(_client);
            Logger.Info("[STARTUP] Code preview feature loaded");
            _commitPreview = new(_client);
            Logger.Info("[STARTUP] Commit preview feature loaded");
            Logger.Info("[STARTUP] All features initialized.");

            Logger.Info("[STARTUP] Logging in to Discord...");
            await _client.LoginAsync(TokenType.Bot, _config.Token).ConfigureAwait(false);
            Logger.Info("[STARTUP] Starting Discord client...");
            await _client.StartAsync().ConfigureAwait(false);

            // Start ban check service after client is connected
            _banCheck.Start();

            // Start GitHub webhook receiver
            _gitHubWebhook.Start();

            Logger.Info("[STARTUP] All features initialized. Bot is running!");
            // Keep the process alive
            await Task.Delay(-1).ConfigureAwait(false);
        }

        private Task OnConnectedAsync()
        {
            Logger.Info("[STARTUP] Connected to Discord gateway");
            return Task.CompletedTask;
        }

        private Task OnDisconnectedAsync(Exception? ex)
        {
            Logger.Warn($"[WARNING] Disconnected from Discord gateway: {ex?.Message ?? "Unknown reason"}");
            return Task.CompletedTask;
        }

        private Task OnReadyAsync()
        {
            Logger.Info($"[READY] ShiggyBot is ready! Logged in as {_client.CurrentUser.Username}#{_client.CurrentUser.Discriminator}");
            Logger.Info($"[READY] Connected to {_client.Guilds.Count} server(s)");
            return Task.CompletedTask;
        }

        private async Task OnMessageAsync(SocketMessage message)
        {
            try
            {
                if (message.Author.IsBot)
                {
                    return;
                }

                if (string.IsNullOrWhiteSpace(message.Content))
                {
                    return;
                }

                if (!message.Content.StartsWith(_config.Prefix, StringComparison.OrdinalIgnoreCase))
                {
                    // Let features handle non-prefix messages (code preview, commit preview, etc.)
                    return;
                }

                await _commandHandler.HandleAsync(message).ConfigureAwait(false);
            }
            catch (SqliteException ex)
            {
                ErrorHandler.LogError("Database error in message handler", ex);
            }
        }

        private async Task OnButtonExecutedAsync(SocketMessageComponent component)
        {
            try
            {
                if (EphemeralButtonService.TryHandle(component))
                {
                    return;
                }

                if (CommitPreviewFeature.TryHandleButton(component))
                {
                    return;
                }

                await component.RespondAsync("This button is no longer available.", ephemeral: true).ConfigureAwait(false);
            }
            catch (InvalidOperationException)
            {
                // Response may have already been sent
            }
            catch (TimeoutException)
            {
                // Response may have already been sent
            }
            catch (OperationCanceledException ex)
            {
                Logger.Error($"[ERROR] Button interaction cancelled: {ex.Message}");
                try
                {
                    await component.RespondAsync("Operation was cancelled.", ephemeral: true).ConfigureAwait(false);
                }
                catch (OperationCanceledException)
                {
                    // Already cancelled, nothing more to do
                }
            }
            catch (HttpRequestException ex)
            {
                Logger.Error($"[ERROR] Button interaction failed: {ex.Message}", ex);
                try
                {
                    await component.RespondAsync("An error occurred.", ephemeral: true).ConfigureAwait(false);
                }
                catch (InvalidOperationException)
                {
                    // Response may have already been sent
                }
                catch (TimeoutException)
                {
                    // Response timed out
                }
            }
        }

        private async Task OnSelectMenuExecutedAsync(SocketMessageComponent component)
        {
            try
            {
                if (component.Data.CustomId != "help_category_select")
                {
                    return;
                }

                string? selectedCategory = component.Data.Values.FirstOrDefault();
                if (string.IsNullOrEmpty(selectedCategory))
                {
                    return;
                }

                Dictionary<string, List<ICommand>> categories = _commandHandler.GetCommandsByCategory();

                if (categories.TryGetValue(selectedCategory, out List<ICommand>? commands))
                {
                    string prefix = _commandHandler.Prefix;

                    if (_v2Client is not null)
                    {
                        await component.DeferAsync().ConfigureAwait(false);

                        V2MessageBuilder builder = HelpCommand.BuildCategoryHelpPayload(selectedCategory, commands, prefix, categories);
                        await _v2Client.EditMessageAsync(component.ChannelId!.Value, component.Message.Id, builder).ConfigureAwait(false);
                    }
                    else
                    {
                        Embed embed = EmbedHelper.BuildCategoryHelpEmbed(selectedCategory, commands, prefix);

                        global::Discord.SelectMenuBuilder menu = new()
                        {
                            CustomId = "help_category_select",
                            Placeholder = "Select a category...",
                            MinValues = 1,
                            MaxValues = 1
                        };

                        foreach (KeyValuePair<string, List<ICommand>> category in categories)
                        {
                            string emoji = EmbedHelper.GetCategoryEmoji(category.Key);
                            string keyLower = category.Key.ToUpperInvariant();
                            menu.AddOption(category.Key, keyLower, $"View {keyLower} commands", new Emoji(emoji));
                        }

                        MessageComponent messageComponents = new ComponentBuilder().WithSelectMenu(menu).Build();

                        await component.UpdateAsync(msg =>
                        {
                            msg.Embed = embed;
                            msg.Components = messageComponents;
                        }).ConfigureAwait(false);
                    }
                }
            }
            catch (InvalidOperationException ex)
            {
                ErrorHandler.LogError("Discord error in select menu handler", ex);
            }
            catch (TimeoutException ex)
            {
                ErrorHandler.LogError("Timeout in select menu handler", ex);
            }
            catch (SqliteException ex)
            {
                ErrorHandler.LogError("Database error in select menu handler", ex);
            }
        }

        public void Dispose()
        {
            _autorole?.Unregister();
            _codePreview?.Unregister();
            _commitPreview?.Unregister();
            _presence?.Dispose();
            _gitHubStats?.Dispose();
            _banCheck?.Stop();
            _banCheck?.Dispose();
            _commandHandler?.Dispose();
            _gitHubWebhook?.Dispose();
            _v1Client?.Dispose();
            _v2Client?.Dispose();
            _db?.Dispose();
            _client?.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}
`},{path:`Discord/PresenceFeature.cs`,code:`using System.Globalization;
using Discord;
using Discord.WebSocket;
using Microsoft.Extensions.Configuration;
using ShiggyBot.Services;

namespace ShiggyBot.Discord
{
    internal sealed class PresenceFeature : IDisposable
    {
        private readonly DiscordSocketClient _client;
        private readonly string _status;
        private readonly int _interval;
        private readonly GitHubStatsService _gitHub;
        private Timer? _timer;
        private int _index;
        private volatile bool _updating;

        private static readonly (string Text, ActivityType Type)[] Templates =
        [
            ("⭐ {0} stars",                        ActivityType.Watching),
            ("Forks: {1}",                           ActivityType.Playing),
            ("{2} open issues",                     ActivityType.Watching),
            ("⭐{0} | Forks: {1}",                  ActivityType.Playing),
        ];

        public PresenceFeature(DiscordSocketClient client, IConfiguration config, GitHubStatsService gitHub)
        {
            _client = client;
            _status = config["PRESENCE_STATUS"] ?? "Online";
            _interval = int.Parse(config["PRESENCE_INTERVAL"] ?? "300", CultureInfo.InvariantCulture) * 1000;
            _gitHub = gitHub;

            _client.Ready += OnReadyAsync;
        }

        private Task OnReadyAsync()
        {
            _timer = new Timer(UpdatePresence, null, 0, _interval);
            return Task.CompletedTask;
        }

        private void UpdatePresence(object? state)
        {
            if (_updating)
            {
                return;
            }

            _updating = true;
            _ = UpdatePresenceAsync();
        }

        private async Task UpdatePresenceAsync()
        {
            try
            {
                RepoStats s = _gitHub.Stats;
                (string text, ActivityType type) = Templates[_index % Templates.Length];
                string message = string.Format(CultureInfo.InvariantCulture, text, s.Stars, s.Forks, s.OpenIssues);

                UserStatus status = Enum.Parse<UserStatus>(_status, true);
                await _client.SetActivityAsync(new Game(message, type)).ConfigureAwait(false);
                await _client.SetStatusAsync(status).ConfigureAwait(false);
                _index++;
            }
            catch (HttpRequestException)
            {
            }
            catch (TaskCanceledException)
            {
            }
            finally
            {
                _updating = false;
            }
        }

        public void Dispose()
        {
            _timer?.Dispose();
            _client.Ready -= OnReadyAsync;
            GC.SuppressFinalize(this);
        }
    }
}
`},{path:`Discord/VrWebSocket.cs`,code:`using Discord.Net.WebSockets;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text;

namespace ShiggyBot.Discord
{
    internal sealed class VrWebSocket : IWebSocketClient
    {
        private readonly IWebSocketClient _inner;
        private bool _pendingIdentify = true;

        public VrWebSocket(IWebSocketClient inner)
        {
            _inner = inner;
            _inner.BinaryMessage += (data, index, count) => BinaryMessage?.Invoke(data, index, count);
            _inner.TextMessage += OnTextMessage;
            _inner.Closed += (ex) => Closed?.Invoke(ex);
        }

        private Task OnTextMessage(string text)
        {
            try
            {
                JObject frame = JObject.Parse(text);
                if (frame.Value<int>("op") == 9)
                {
                    _pendingIdentify = true;
                }
            }
            catch (JsonReaderException)
            {
            }

            return TextMessage?.Invoke(text) ?? Task.CompletedTask;
        }

        public event Func<byte[], int, int, Task>? BinaryMessage;
        public event Func<string, Task>? TextMessage;
        public event Func<Exception, Task>? Closed;

        public void SetHeader(string key, string value)
        {
            _inner.SetHeader(key, value);
        }

        public void SetCancelToken(CancellationToken cancelToken)
        {
            _inner.SetCancelToken(cancelToken);
        }

        public Task ConnectAsync(string host)
        {
            _pendingIdentify = true;
            return _inner.ConnectAsync(host);
        }

        public Task DisconnectAsync(int closeCode = 1000)
        {
            return _inner.DisconnectAsync(closeCode);
        }

        public async Task SendAsync(byte[] data, int index, int count, bool isText)
        {
            if (isText && _pendingIdentify)
            {
                try
                {
                    string json = Encoding.UTF8.GetString(data, index, count);
                    JObject frame = JObject.Parse(json);
                    if (frame.Value<int>("op") == 2)
                    {
                        _pendingIdentify = false;
                        if (frame["d"] is JObject identify && identify["properties"] is JObject props)
                        {
                            string? originalOs = props.Value<string>("$os");
                            props["$browser"] = "Discord VR";
                            props["$device"] = "Oculus Quest 2";
                            props["$os"] = originalOs ?? "Android";
                            data = Encoding.UTF8.GetBytes(frame.ToString(Formatting.None));
                            index = 0;
                            count = data.Length;
                        }
                    }
                }
                catch (JsonReaderException)
                {
                }
                catch (InvalidOperationException)
                {
                }
            }
            await _inner.SendAsync(data, index, count, isText).ConfigureAwait(false);
        }

        public void Dispose()
        {
            _inner.Dispose();
        }
    }
}
`},{path:`Features/AutoroleFeature.cs`,code:`using Discord.WebSocket;
using ShiggyBot.Data;
using ShiggyBot.Utils;

namespace ShiggyBot.Features
{
    internal sealed class AutoroleFeature
    {
        private readonly DiscordSocketClient _client;
        private readonly DatabaseService _db;

        public AutoroleFeature(DiscordSocketClient client, DatabaseService db)
        {
            _client = client;
            _db = db;
            _client.UserJoined += OnUserJoinedAsync;
        }

        public void Unregister()
        {
            _client.UserJoined -= OnUserJoinedAsync;
        }

        private async Task OnUserJoinedAsync(SocketGuildUser user)
        {
            ulong? roleId = await _db.GetWelcomeRoleAsync(user.Guild.Id).ConfigureAwait(false);
            if (roleId is null or 0)
            {
                return;
            }

            await AssignRoleAsync(user, roleId.Value).ConfigureAwait(false);
        }

        private static async Task AssignRoleAsync(SocketGuildUser user, ulong roleId)
        {
            try
            {
                await user.AddRoleAsync(roleId).ConfigureAwait(false);
            }
            catch (Exception ex) when (ex is HttpRequestException or ArgumentException or InvalidOperationException)
            {
                Logger.Warn($"Failed to assign welcome role to {user.Id} in guild {user.Guild.Id}: {ex.Message}");
            }
        }
    }
}
`},{path:`Features/CodePreviewFeature.cs`,code:`using System.Globalization;
using System.Text.RegularExpressions;
using Discord;
using Discord.WebSocket;

namespace ShiggyBot.Features
{
    internal sealed partial class CodePreviewFeature
    {
        private readonly DiscordSocketClient _client;
        private static readonly HttpClient _http = new();
        private static readonly Lock _rateLimitLock = new();
        private static int _rateLimitRemaining = 60;
        private static long _rateLimitReset;

        private static readonly Dictionary<string, string> LanguageMap = new(StringComparer.OrdinalIgnoreCase)
        {
            { "JS", "javascript" }, { "JSX", "javascript" }, { "MJS", "javascript" }, { "CJS", "javascript" },
            { "TS", "typescript" }, { "TSX", "typescript" }, { "MTS", "typescript" }, { "CTS", "typescript" },
            { "HTML", "html" }, { "HTM", "html" }, { "CSS", "css" }, { "SCSS", "scss" }, { "SASS", "sass" },
            { "VUE", "vue" }, { "SVELTE", "svelte" },
            { "PY", "python" }, { "RB", "ruby" }, { "JAVA", "java" }, { "CS", "csharp" },
            { "CPP", "cpp" }, { "C", "c" }, { "GO", "go" }, { "RS", "rust" }, { "PHP", "php" },
            { "SWIFT", "swift" }, { "KT", "kotlin" }, { "SCALA", "scala" },
            { "JSON", "json" }, { "YAML", "yaml" }, { "YML", "yaml" }, { "XML", "xml" },
            { "TOML", "toml" }, { "SQL", "sql" },
            { "MD", "markdown" }, { "TXT", "text" },
            { "SH", "bash" }, { "BASH", "bash" }, { "ZSH", "bash" }, { "PS1", "powershell" }, { "BAT", "batch" },
            { "DART", "dart" }, { "LUA", "lua" }, { "PERL", "perl" }, { "R", "r" }, { "HS", "haskell" },
            { "DOCKERFILE", "dockerfile" }, { "CONF", "nginx" },
        };

        private static readonly Dictionary<string, string> FilenameMap = new(StringComparer.OrdinalIgnoreCase)
        {
            ["Dockerfile"] = "dockerfile",
            ["Makefile"] = "makefile",
            ["CMakeLists.txt"] = "cmake",
            ["Rakefile"] = "ruby",
            ["Gemfile"] = "ruby",
            ["Procfile"] = "text",
            ["Vagrantfile"] = "ruby",
        };

        [GeneratedRegex(@"https?://(?:www\\.)?(raw\\.githubusercontent\\.com|github\\.com|gitlab\\.com|gitea\\.com|forgejo\\.com|codeberg\\.org|git\\.gay|bitbucket\\.org)/([^\\s/]+)/([^\\s/]+)/([^#\\s]+)(?:#L(\\d+)(?:-L(\\d+))?)?", RegexOptions.IgnoreCase)]
        private static partial Regex CodeLinkRegex();

        public CodePreviewFeature(DiscordSocketClient client)
        {
            _client = client;
            _client.MessageReceived += OnMessageReceivedAsync;
        }

        private static string ConvertToRawUrl(string host, string owner, string repo, string refStr, string filePath)
        {
            return host switch
            {
                "github.com" or "raw.githubusercontent.com" => $"https://raw.githubusercontent.com/{owner}/{repo}/{refStr}/{filePath}",
                "gitlab.com" => $"https://gitlab.com/{owner}/{repo}/-/raw/{refStr}/{filePath}",
                "gitea.com" => $"https://gitea.com/{owner}/{repo}/raw/{refStr}/{filePath}",
                "forgejo.com" => $"https://forgejo.com/{owner}/{repo}/raw/{refStr}/{filePath}",
                "codeberg.org" => $"https://codeberg.org/{owner}/{repo}/raw/{refStr}/{filePath}",
                "git.gay" => $"https://git.gay/{owner}/{repo}/raw/{refStr}/{filePath}",
                "bitbucket.org" => $"https://bitbucket.org/{owner}/{repo}/raw/{refStr}/{filePath}",
                _ => $"https://raw.githubusercontent.com/{owner}/{repo}/{refStr}/{filePath}"
            };
        }

        private static string DetectLanguage(string filePath)
        {
            string fileName = filePath.Split('/').Last();

            if (FilenameMap.TryGetValue(fileName, out string? mapped))
            {
                return mapped;
            }

            string ext = Path.GetExtension(fileName).TrimStart('.').ToUpperInvariant();

            return LanguageMap.TryGetValue(ext, out string? lang) ? lang : "text";
        }

        private static string Unindent(string code)
        {
            string[] lines = code.Split('\\n');
            int minIndent = int.MaxValue;

            foreach (string line in lines)
            {
                string trimmed = line.Trim();

                if (trimmed.Length == 0)
                {
                    continue;
                }

                int indent = line.Length - line.TrimStart().Length;

                if (indent < minIndent)
                {
                    minIndent = indent;
                }
            }

            if (minIndent is int.MaxValue or 0)
            {
                return code;
            }

            for (int i = 0; i < lines.Length; i++)
            {
                if (lines[i].Length >= minIndent)
                {
                    lines[i] = lines[i][minIndent..];
                }
            }

            return string.Join('\\n', lines);
        }

        private static async Task<string?> FetchCodeAsync(string url)
        {
            long now = DateTimeOffset.UtcNow.ToUnixTimeSeconds();

            lock (_rateLimitLock)
            {
                if (now > _rateLimitReset)
                {
                    _rateLimitRemaining = 60;
                    _rateLimitReset = now + 3600;
                }

                if (_rateLimitRemaining <= 0)
                {
                    return null; // Let the caller skip; don't block for rate limit
                }

                _rateLimitRemaining--;
            }

            using CancellationTokenSource cts = new(TimeSpan.FromSeconds(15));

            try
            {
                using HttpResponseMessage response = await _http.GetAsync(new Uri(url), HttpCompletionOption.ResponseHeadersRead, cts.Token).ConfigureAwait(false);

                if ((int)response.StatusCode == 429)
                {
                    if (response.Headers.TryGetValues("x-ratelimit-reset", out IEnumerable<string>? values) &&
                        long.TryParse(values.FirstOrDefault(), NumberStyles.Integer, CultureInfo.InvariantCulture, out long reset))
                    {
                        _rateLimitReset = reset;
                    }

                    return null;
                }

                if (!response.IsSuccessStatusCode)
                {
                    return null;
                }

                long? size = response.Content.Headers.ContentLength;

                return size > 1024 * 1024 ? null : await response.Content.ReadAsStringAsync(cts.Token).ConfigureAwait(false);
            }
            catch (HttpRequestException)
            {
                return null;
            }
            catch (TaskCanceledException)
            {
                return null;
            }
            catch (InvalidOperationException)
            {
                return null;
            }
        }

        private async Task OnMessageReceivedAsync(SocketMessage message)
        {
            if (message.Author.IsBot || string.IsNullOrWhiteSpace(message.Content))
            {
                return;
            }

            MatchCollection matches = CodeLinkRegex().Matches(message.Content);

            if (matches.Count == 0)
            {
                return;
            }

            List<Embed> embeds = [];
            HashSet<string> processed = [];

            foreach (Match match in matches.Cast<Match>())
            {
                if (embeds.Count >= 3)
                {
                    break;
                }

                string fullUrl = match.Value;

                if (!processed.Add(fullUrl))
                {
                    continue;
                }

                if (fullUrl.Contains("/releases/download/", StringComparison.OrdinalIgnoreCase))
                {
                    continue;
                }

                string host = match.Groups[1].Value;
                string owner = match.Groups[2].Value;
                string repo = match.Groups[3].Value;
                string pathSegment = match.Groups[4].Value;
                string startStr = match.Groups[5].Value;
                string endStr = match.Groups[6].Value;

                string[] parts = pathSegment.Split('/');
                int sepIdx = Array.FindIndex(parts, p => p is "blob" or "raw" or "src" or "-/raw");
                string refStr;
                string filePath;

                if (sepIdx != -1 && parts.Length > sepIdx + 2)
                {
                    refStr = parts[sepIdx + 1];
                    filePath = string.Join("/", parts, sepIdx + 2, parts.Length - sepIdx - 2);
                }
                else
                {
                    refStr = parts[0];
                    filePath = string.Join("/", parts.Skip(1));
                }

                int startLine = string.IsNullOrEmpty(startStr) ? 1 : int.Parse(startStr, CultureInfo.InvariantCulture);
                int endLine = string.IsNullOrEmpty(endStr) ? startLine + 19 : int.Parse(endStr, CultureInfo.InvariantCulture);

                string rawUrl = ConvertToRawUrl(host, owner, repo, refStr, filePath);
                string? code = await FetchCodeAsync(rawUrl).ConfigureAwait(false);

                if (code is null)
                {
                    continue;
                }

                string lang = DetectLanguage(filePath);
                string[] lines = code.Split('\\n');
                int actualStart = Math.Max(1, Math.Min(startLine, lines.Length));
                int actualEnd = Math.Min(actualStart + 19, Math.Min(endLine, lines.Length));
                string snippet = string.Join('\\n', lines, actualStart - 1, actualEnd - actualStart + 1);

                Embed embed = new EmbedBuilder()
                {
                    Title = $"📄 {filePath.Split('/').Last()} [L{startLine}{(startLine != endLine ? "-L" + endLine : "")}]",
                    Url = fullUrl,
                    Color = new Color(0x5865F2),
                    Description = $"\`\`\`{lang}\\n{Unindent(snippet)}\\n\`\`\`",
                    Timestamp = DateTimeOffset.UtcNow
                }
                    .AddField("Repository", $"[{owner}/{repo}]({fullUrl.Split('#')[0]})", inline: true)
                    .AddField("Branch", $"\`{refStr}\`", inline: true)
                    .AddField("Path", $"\`{filePath}\`", inline: false)
                    .WithFooter($"{host} • {lang.ToUpperInvariant()} • {actualEnd - actualStart + 1} lines")
                    .Build();

                embeds.Add(embed);
            }

            if (embeds.Count > 0)
            {
                if (message.Channel is SocketGuildChannel)
                {
                    try
                    {
                        await ((ITextChannel)message.Channel).ModifyMessageAsync(message.Id, props =>
                        {
                            props.Flags = MessageFlags.SuppressEmbeds;
                        }).ConfigureAwait(false);
                    }
                    catch (HttpRequestException)
                    {
                    }
                    catch (InvalidOperationException)
                    {
                    }
                }

                await message.Channel.SendMessageAsync(embeds: [.. embeds]).ConfigureAwait(false);
            }
        }

        public void Unregister()
        {
            _client.MessageReceived -= OnMessageReceivedAsync;
        }
    }
}
`},{path:`Features/CommitPreviewFeature.cs`,code:`using System.Collections.Concurrent;
using System.Globalization;
using System.Text.Json;
using System.Text.RegularExpressions;
using Discord;
using Discord.WebSocket;
using ShiggyBot.Utils;

namespace ShiggyBot.Features
{
    internal sealed partial class CommitPreviewFeature
    {
        private readonly DiscordSocketClient _client;
        private static readonly HttpClient _http = new();
        private const int MaxCacheSize = 100;
        private static readonly ConcurrentDictionary<string, CommitData> _commitCache = new();
        private static readonly Queue<string> _cacheOrder = new();

        private static readonly Dictionary<string, string> LanguageMap = new(StringComparer.OrdinalIgnoreCase)
        {
            { "JS", "javascript" }, { "JSX", "javascript" }, { "MJS", "javascript" }, { "CJS", "javascript" },
            { "TS", "typescript" }, { "TSX", "typescript" }, { "MTS", "typescript" }, { "CTS", "typescript" },
            { "HTML", "html" }, { "HTM", "html" }, { "CSS", "css" }, { "SCSS", "scss" }, { "SASS", "sass" },
            { "VUE", "vue" }, { "SVELTE", "svelte" },
            { "PY", "python" }, { "RB", "ruby" }, { "JAVA", "java" }, { "CS", "csharp" },
            { "CPP", "cpp" }, { "C", "c" }, { "GO", "go" }, { "RS" , "rust" }, { "PHP", "php" },
            { "SWIFT", "swift" }, { "KT", "kotlin" }, { "SCALA", "scala" },
            { "JSON", "json" }, { "YAML", "yaml" }, { "YML", "yaml" }, { "XML", "xml" },
            { "TOML", "toml" }, { "SQL", "sql" },
            { "MD", "markdown" }, { "TXT", "text" },
            { "SH", "bash" }, { "BASH", "bash" }, { "ZSH", "bash" }, { "PS1", "powershell" }, { "BAT", "batch" },
            { "DART", "dart" }, { "LUA", "lua" }, { "PERL", "perl" }, { "R", "r" }, { "HS", "haskell" },
            { "DOCKERFILE", "dockerfile" }, { "CONF", "nginx" },
        };

        private static readonly Dictionary<string, string> FilenameMap = new(StringComparer.OrdinalIgnoreCase)
        {
            { "Dockerfile", "dockerfile" }, { "Makefile", "makefile" },
            { "CMakeLists.txt", "cmake" }, { "Rakefile", "ruby" },
            { "Gemfile", "ruby" }, { "Procfile", "text" }, { "Vagrantfile", "ruby" },
        };

        [GeneratedRegex(@"https?://(?:www\\.)?(raw\\.githubusercontent\\.com|github\\.com|gitlab\\.com|gitea\\.com|forgejo\\.com|codeberg\\.org|git\\.gay|bitbucket\\.org)/([^\\s/]+)/([^\\s/]+)/commit/([a-fA-F0-9]+)", RegexOptions.IgnoreCase)]
        private static partial Regex CommitLinkRegex();

        public CommitPreviewFeature(DiscordSocketClient client)
        {
            _client = client;
            _http.DefaultRequestHeaders.Add("User-Agent", "ShiggyBot");
            _client.MessageReceived += OnMessageReceivedAsync;
        }

        public static bool TryHandleButton(SocketMessageComponent component)
        {
            string? customId = component.Data?.CustomId;
            if (customId is null || !customId.StartsWith("commit_page_", StringComparison.Ordinal))
            {
                return false;
            }

            string[] parts = customId.Split('_', 5);
            if (parts.Length < 5)
            {
                return false;
            }

            string cacheKey = parts[2];
            string direction = parts[3];
            string userId = parts[4];

            if (!_commitCache.TryGetValue(cacheKey, out CommitData? data))
            {
                _ = component.RespondAsync("This commit preview is no longer available.", ephemeral: true);
                return true;
            }

            int currentIndex = data.CurrentIndex;
            if (direction == "prev")
            {
                data.CurrentIndex = Math.Max(0, currentIndex - 1);
            }
            else if (direction == "next")
            {
                data.CurrentIndex = Math.Min(data.Files.Count - 1, currentIndex + 1);
            }

            _ = component.UpdateAsync(msg =>
            {
                msg.Embed = BuildFileEmbed(data, data.CurrentIndex, data.Url);
                msg.Components = BuildPaginationButtons(cacheKey, data.Files.Count, data.CurrentIndex, userId);
            });

            return true;
        }

        private static string DetectLanguage(string filePath)
        {
            string fileName = filePath.Split('/').Last();
            if (FilenameMap.TryGetValue(fileName, out string? mapped))
            {
                return mapped;
            }
            string ext = Path.GetExtension(fileName).TrimStart('.').ToUpperInvariant();
            return LanguageMap.TryGetValue(ext, out string? lang) ? lang : "diff";
        }

        private static string TruncatePatch(string patch, int maxLines = 30)
        {
            string[] lines = patch.Split('\\n');
            return lines.Length <= maxLines ? patch : string.Join('\\n', lines.Take(maxLines)) + $"\\n... (+{lines.Length - maxLines} more lines)";
        }

        private static Embed BuildFileEmbed(CommitData data, int index, string url)
        {
            CommitFile file = data.Files[index];
            string lang = DetectLanguage(file.Filename);
            string patch = TruncatePatch(file.Patch);

            EmbedBuilder embed = new()
            {
                Title = $"{data.Repository} · {data.Sha[..7]}",
                Url = url,
                Color = Color.Purple,
                Timestamp = DateTimeOffset.UtcNow
            };

            embed.AddField("Message", TruncateText(data.Message, 200), inline: false);
            embed.AddField("Author", data.Author, inline: true);
            embed.AddField("Commit", $"\`{data.Sha[..7]}\`", inline: true);

            string statusEmoji = file.Status switch
            {
                "added" => "✅",
                "removed" => "❌",
                "modified" => "✏️",
                "renamed" => "🔀",
                _ => "📄"
            };
            embed.AddField("File", $"{statusEmoji} {file.Filename} (+{file.Additions}/-{file.Deletions})", inline: false);

            if (!string.IsNullOrEmpty(patch))
            {
                embed.Description = $"\`\`\`{lang}\\n{patch}\\n\`\`\`";
            }

            return embed.Build();
        }

        private static string TruncateText(string text, int maxLength)
        {
            return text.Length <= maxLength ? text : text[..maxLength] + "...";
        }

        private static void AddToCache(string key, CommitData data)
        {
            lock (_cacheOrder)
            {
                while (_cacheOrder.Count >= MaxCacheSize)
                {
                    string oldest = _cacheOrder.Dequeue();
                    _commitCache.TryRemove(oldest, out _);
                }

                _cacheOrder.Enqueue(key);
            }

            _commitCache[key] = data;
        }

        private static MessageComponent? BuildPaginationButtons(string cacheKey, int totalFiles, int currentIndex, string userId)
        {
            if (totalFiles <= 1)
            {
                return null;
            }

            ComponentBuilder builder = new();
            if (currentIndex > 0)
            {
                builder.WithButton("◀ Previous", $"commit_page_{cacheKey}_prev_{userId}", style: ButtonStyle.Secondary);
            }
            if (currentIndex < totalFiles - 1)
            {
                builder.WithButton("Next ▶", $"commit_page_{cacheKey}_next_{userId}", style: ButtonStyle.Secondary);
            }
            return builder.Build();
        }

        private async Task OnMessageReceivedAsync(SocketMessage message)
        {
            if (message.Author.IsBot || string.IsNullOrWhiteSpace(message.Content))
            {
                return;
            }

            Match match = CommitLinkRegex().Match(message.Content);
            if (!match.Success)
            {
                return;
            }

            string fullUrl = match.Value;
            string host = match.Groups[1].Value;
            string owner = match.Groups[2].Value;
            string repo = match.Groups[3].Value;
            string sha = match.Groups[4].Value;
            string cacheKey = $"{owner}/{repo}/{sha}";

            if (_commitCache.ContainsKey(cacheKey))
            {
                return;
            }

            try
            {
                string apiUrl = host switch
                {
                    "github.com" or "raw.githubusercontent.com" => $"https://api.github.com/repos/{owner}/{repo}/commits/{sha}",
                    _ => $"https://api.github.com/repos/{owner}/{repo}/commits/{sha}"
                };

                using HttpResponseMessage response = await _http.GetAsync(new Uri(apiUrl)).ConfigureAwait(false);
                if (!response.IsSuccessStatusCode)
                {
                    return;
                }

                string json = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
                using JsonDocument doc = JsonDocument.Parse(json);
                JsonElement root = doc.RootElement;

                string messageText = root.GetProperty("commit").GetProperty("message").GetString() ?? "No message";
                string author = root.GetProperty("commit").GetProperty("author").GetProperty("name").GetString() ?? "Unknown";

                List<CommitFile> files = [];
                if (root.TryGetProperty("files", out JsonElement filesElement))
                {
                    foreach (JsonElement file in filesElement.EnumerateArray())
                    {
                        files.Add(new CommitFile
                        {
                            Filename = file.GetProperty("filename").GetString() ?? "unknown",
                            Status = file.GetProperty("status").GetString() ?? "modified",
                            Additions = file.GetProperty("additions").GetInt32(),
                            Deletions = file.GetProperty("deletions").GetInt32(),
                            Patch = file.TryGetProperty("patch", out JsonElement p) ? p.GetString() ?? "" : ""
                        });
                    }
                }

                CommitData data = new()
                {
                    Sha = sha,
                    Repository = $"{owner}/{repo}",
                    Message = messageText,
                    Author = author,
                    Files = files,
                    CurrentIndex = 0,
                    Url = fullUrl
                };

                AddToCache(cacheKey, data);

                Embed embed = BuildFileEmbed(data, 0, fullUrl);
                MessageComponent? components = BuildPaginationButtons(cacheKey, files.Count, 0, message.Author.Id.ToString(CultureInfo.InvariantCulture));

                if (message.Channel is SocketGuildChannel && message.Author is SocketGuildUser)
                {
                    try
                    {
                        await ((ITextChannel)message.Channel).ModifyMessageAsync(message.Id, props =>
                        {
                            props.Flags = MessageFlags.SuppressEmbeds;
                        }).ConfigureAwait(false);
                    }
                    catch (HttpRequestException)
                    {
                    }
                    catch (InvalidOperationException)
                    {
                    }
                }

                if (components is not null)
                {
                    await message.Channel.SendMessageAsync(embed: embed, components: components).ConfigureAwait(false);
                }
                else
                {
                    await message.Channel.SendMessageAsync(embed: embed).ConfigureAwait(false);
                }
            }
            catch (HttpRequestException ex)
            {
                await ErrorHandler.HandleFeatureErrorAsync(ex, "CommitPreview").ConfigureAwait(false);
            }
            catch (JsonException ex)
            {
                await ErrorHandler.HandleFeatureErrorAsync(ex, "CommitPreview").ConfigureAwait(false);
            }
            catch (TaskCanceledException ex)
            {
                await ErrorHandler.HandleFeatureErrorAsync(ex, "CommitPreview").ConfigureAwait(false);
            }
        }

        public void Unregister()
        {
            _client.MessageReceived -= OnMessageReceivedAsync;
        }

        internal sealed class CommitFile
        {
            public string Filename { get; set; } = "";
            public string Status { get; set; } = "";
            public int Additions { get; set; }
            public int Deletions { get; set; }
            public string Patch { get; set; } = "";
        }

        internal sealed class CommitData
        {
            public string Sha { get; set; } = "";
            public string Repository { get; set; } = "";
            public string Message { get; set; } = "";
            public string Author { get; set; } = "";
            public List<CommitFile> Files { get; set; } = [];
            public int CurrentIndex { get; set; }
            public string Url { get; set; } = "";
        }
    }
}
`},{path:`Program.cs`,code:`using Microsoft.Extensions.Configuration;
using ShiggyBot.Configuration;
using ShiggyBot.Discord;
using ShiggyBot.Utils;

string? webhookUrl = null;

AppDomain.CurrentDomain.UnhandledException += (sender, args) =>
{
    Logger.Error($"[FATAL] Unhandled exception. IsTerminating={args.IsTerminating}", args.ExceptionObject as Exception);
    _ = WebhookLogger.SendErrorAsync(webhookUrl, "Unhandled exception — bot crashed.", args.ExceptionObject as Exception, "🚨 ShiggyBot Crashed");
};

TaskScheduler.UnobservedTaskException += (sender, args) =>
{
    if (args.Exception is AggregateException agg &&
        agg.InnerException is System.Net.WebSockets.WebSocketException &&
        agg.InnerException?.InnerException is Discord.Net.WebSocketClosedException closeEx &&
        closeEx.CloseCode == 4003)
    {
        args.SetObserved();
        return;
    }

    Logger.Error($"[FATAL] Unobserved task exception", args.Exception);
    _ = WebhookLogger.SendErrorAsync(webhookUrl, "Unobserved task exception.", args.Exception, "🚨 ShiggyBot Crashed");
    args.SetObserved();
};

IConfigurationBuilder builder = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: true)
    .AddEnvironmentVariables();

string configTxt = Path.Combine(Directory.GetCurrentDirectory(), "config.txt");
if (File.Exists(configTxt))
{
    string[] lines = await File.ReadAllLinesAsync(configTxt).ConfigureAwait(false);
    Dictionary<string, string?> ini = lines
        .Where(l => !string.IsNullOrWhiteSpace(l) && !l.TrimStart().StartsWith('#'))
        .Select(l => l.Split('=', 2))
        .Where(p => p.Length == 2)
        .ToDictionary(p => p[0].Trim(), p => (string?)p[1].Trim());

    if (ini.Count > 0)
    {
        builder.AddInMemoryCollection(ini);
    }
}

IConfiguration appConfig = builder.Build();
webhookUrl = appConfig["LOG_WEBHOOK_URL"];
ErrorHandler.WebhookUrl = webhookUrl;

BotConfig config = BotConfig.LoadFromConfiguration(appConfig);
using DiscordClientService client = new(config, appConfig);
await client.StartAsync().ConfigureAwait(false);
`},{path:`Services/BanCheckService.cs`,code:`using Discord;
using Discord.Net;
using Discord.WebSocket;
using Microsoft.Data.Sqlite;
using ShiggyBot.Data;
using ShiggyBot.Utils;

namespace ShiggyBot.Services
{
    internal sealed class BanCheckService(DiscordSocketClient client, DatabaseService db) : IDisposable
    {
        private static readonly TimeSpan FallbackInterval = TimeSpan.FromHours(1);
        private static readonly TimeSpan Buffer = TimeSpan.FromSeconds(5);

        private readonly Lock _lock = new();
        private Timer? _timer;
        private bool _disposed;

        public void Start()
        {
            _timer = new Timer(async _ => await OnTimerAsync().ConfigureAwait(false), null, Timeout.InfiniteTimeSpan, Timeout.InfiniteTimeSpan);
            _ = ScheduleNextAsync();
            Logger.Info("[STARTUP] Ban check service started");
        }

        private async Task ScheduleNextAsync()
        {
            if (_disposed)
            {
                return;
            }

            try
            {
                DateTime? nextUnban = await db.GetNextUnbanTimeAsync().ConfigureAwait(false);

                TimeSpan delay = nextUnban.HasValue
                    ? nextUnban.Value - DateTime.UtcNow + Buffer
                    : FallbackInterval;

                if (delay < TimeSpan.Zero)
                {
                    delay = TimeSpan.Zero;
                }

                lock (_lock)
                {
                    _timer?.Change(delay, Timeout.InfiniteTimeSpan);
                }
            }
            catch (HttpRequestException ex)
            {
                ErrorHandler.LogError("Failed to query next unban time", ex);
                lock (_lock)
                {
                    _timer?.Change(FallbackInterval, Timeout.InfiniteTimeSpan);
                }
            }
            catch (SqliteException ex)
            {
                ErrorHandler.LogError("Database error scheduling next ban check", ex);
                lock (_lock)
                {
                    _timer?.Change(FallbackInterval, Timeout.InfiniteTimeSpan);
                }
            }
        }

        private async Task OnTimerAsync()
        {
            await CheckExpiredBansAsync().ConfigureAwait(false);
            _ = ScheduleNextAsync();
        }

        private async Task CheckExpiredBansAsync()
        {
            try
            {
                List<TimedBan> expiredBans = await db.GetExpiredBansAsync().ConfigureAwait(false);
                foreach (TimedBan ban in expiredBans)
                {
                    try
                    {
                        SocketGuild? guild = client.GetGuild(ban.GuildId);
                        if (guild != null)
                        {
                            await guild.RemoveBanAsync(ban.UserId).ConfigureAwait(false);
                        }

                        await db.RemoveTimedBanAsync(ban.GuildId, ban.UserId).ConfigureAwait(false);
                    }
                    catch (HttpException ex) when (ex.DiscordCode == DiscordErrorCode.UnknownBan)
                    {
                        await db.RemoveTimedBanAsync(ban.GuildId, ban.UserId).ConfigureAwait(false);
                    }
                }
            }
            catch (HttpRequestException ex)
            {
                ErrorHandler.LogError("Failed to check expired bans", ex);
            }
            catch (TaskCanceledException ex)
            {
                ErrorHandler.LogError("Timeout checking expired bans", ex);
            }
            catch (SqliteException ex)
            {
                ErrorHandler.LogError("Database error in ban check loop", ex);
            }
            catch (InvalidOperationException ex)
            {
                ErrorHandler.LogError("Discord error in ban check loop", ex);
            }
        }

        public void Stop()
        {
            lock (_lock)
            {
                _timer?.Dispose();
                _timer = null;
            }
        }

        public void Dispose()
        {
            if (_disposed)
            {
                return;
            }

            _disposed = true;
            Stop();
            GC.SuppressFinalize(this);
        }
    }
}
`},{path:`Services/CommandHandler.cs`,code:`using Discord.WebSocket;
using Microsoft.Data.Sqlite;
using ShiggyBot.Commands;
using ShiggyBot.Commands.Utility;
using ShiggyBot.Commands.Moderation;
using ShiggyBot.Commands.Core;
using ShiggyBot.Commands.Search;
using ShiggyBot.Commands.Fun;
using ShiggyBot.Components.V1;
using ShiggyBot.Components.V2;
using ShiggyBot.Utils;
using ShiggyBot.Data;

namespace ShiggyBot.Services
{
    internal sealed class CommandHandler : IDisposable
    {
        private readonly DiscordSocketClient _client;
        public string Prefix { get; }
        private readonly Dictionary<string, ICommand> _commands = new(StringComparer.OrdinalIgnoreCase);
        private readonly List<ICommand> _commandList = [];
        private readonly DatabaseService _db;
        private readonly PluginService _pluginService;
        private readonly ComponentsV1Client? _v1Client;
        private readonly ComponentsV2Client? _v2Client;
        public CommandHandler(DiscordSocketClient client, string prefix, DatabaseService db, ComponentsV1Client? v1Client = null, ComponentsV2Client? v2Client = null)
        {
            _client = client;
            Prefix = prefix ?? "S";
            _db = db;
            _pluginService = new PluginService();
            _v1Client = v1Client;
            _v2Client = v2Client;
            RegisterCommands();
            Console.WriteLine($"[INIT] Registered {_commands.Count} command(s)");
        }

        public void Dispose()
        {
            _pluginService?.Dispose();
            GC.SuppressFinalize(this);
        }

        private void RegisterCommands()
        {
            // V1-based Commands
            if (_v1Client is not null)
            {
                // Utility Commands
                Register(new PingCommand(_v1Client));
                Register(new NoteCommand(_v1Client));

                // Moderation Commands
                Register(new KickCommand(_v1Client));
                Register(new PurgeCommand(_v1Client));
                Register(new AddRoleCommand(_v1Client));
                Register(new RemoveRoleCommand(_v1Client));
                Register(new NukeCommand(_v1Client));
                Register(new DisableCommand(_v1Client, _db));
                Register(new EnableCommand(_v1Client, _db));
                Register(new SetWelcomeCommand(_v1Client, _db));

                // Search Commands
                Register(new GoogleCommand(_v1Client));

                // Fun Commands
                Register(new MpregCommand(_v1Client));

                // V1 Components Test Command
                Register(new V1TestCommand(_v1Client));
            }

            // V2-based Commands
            if (_v2Client is not null)
            {
                Register(new HelpCommand(this, _v2Client));
                Register(new PluginCommand(_pluginService, _v2Client));
                Register(new TimeoutCommand(_v2Client));
                Register(new BanCommand(_v2Client, _db));
                Register(new V2TestCommand(_v2Client));
            }
        }

        private void Register(ICommand command)
        {
            _commands[command.Name] = command;
            _commandList.Add(command);
            foreach (string alias in command.Aliases ?? [])
            {
                _commands[alias] = command;
            }
        }

        public Dictionary<string, List<ICommand>> GetCommandsByCategory()
        {
            return _commandList
                .GroupBy(c => c.Category ?? "Other")
                .ToDictionary(g => g.Key, g => g.ToList(), StringComparer.OrdinalIgnoreCase);
        }

        public ICommand? GetCommandByName(string name)
        {
            _commands.TryGetValue(name, out ICommand? command);
            return command;
        }

        public async Task HandleAsync(SocketMessage message)
        {
            ArgumentNullException.ThrowIfNull(message);

            if (message is not SocketUserMessage userMessage)
            {
                return;
            }

            if (string.IsNullOrWhiteSpace(userMessage.Content))
            {
                return;
            }

            if (!userMessage.Content.StartsWith(Prefix, StringComparison.OrdinalIgnoreCase))
            {
                return;
            }

            string content = userMessage.Content[Prefix.Length..].Trim();
            if (string.IsNullOrEmpty(content))
            {
                return;
            }

            string[] parts = content.Split(' ', StringSplitOptions.RemoveEmptyEntries);
            if (parts.Length == 0)
            {
                return;
            }

            string name = parts[0].ToUpperInvariant();
            string[] args = [.. parts.Skip(1)];

            if (!_commands.TryGetValue(name, out ICommand? command))
            {
                return;
            }

            if (userMessage.Channel is SocketGuildChannel guildChannel &&
                command.Name != "disable" &&
                command.Name != "enable" &&
                await _db.IsCommandDisabledAsync(guildChannel.Guild.Id, name).ConfigureAwait(false))
            {
                _ = await userMessage.Channel.SendMessageAsync(embed: EmbedHelper.BuildErrorEmbed($"Command \`{command.Name}\` is disabled in this server.")).ConfigureAwait(false);
                return;
            }

            try
            {
                await command.ExecuteAsync(userMessage, args, _client).ConfigureAwait(false);
            }
            catch (HttpRequestException ex)
            {
                await ErrorHandler.HandleCommandErrorAsync(userMessage, ex, command.Name).ConfigureAwait(false);
            }
            catch (TaskCanceledException ex)
            {
                await ErrorHandler.HandleCommandErrorAsync(userMessage, ex, command.Name).ConfigureAwait(false);
            }
            catch (InvalidOperationException ex)
            {
                await ErrorHandler.HandleCommandErrorAsync(userMessage, ex, command.Name).ConfigureAwait(false);
            }
            catch (SqliteException ex)
            {
                await ErrorHandler.HandleCommandErrorAsync(userMessage, ex, command.Name).ConfigureAwait(false);
            }
        }
    }
}
`},{path:`Services/EphemeralButtonService.cs`,code:`using System.Collections.Concurrent;
using Discord.WebSocket;

namespace ShiggyBot.Services
{
    /// <summary>
    /// Service for handling ephemeral button interactions.
    /// </summary>
    internal static class EphemeralButtonService
    {
        private static readonly ConcurrentDictionary<string, Func<SocketMessageComponent, Task>> _handlers = new();

        /// <summary>
        /// Registers a one-shot ephemeral handler for a specific button.
        /// </summary>
        /// <param name="key">The custom ID of the button.</param>
        /// <param name="handler">The handler function to execute.</param>
        public static void Register(string key, Func<SocketMessageComponent, Task> handler)
        {
            _handlers[key] = handler;
        }

        /// <summary>
        /// Tries to handle an incoming button interaction.
        /// </summary>
        /// <param name="component">The socket message component.</param>
        /// <returns>True if handled; otherwise, false.</returns>
        public static bool TryHandle(SocketMessageComponent? component)
        {
            if (component?.Data?.CustomId == null)
            {
                return false;
            }
            string key = component.Data.CustomId;
            if (_handlers.TryRemove(key, out Func<SocketMessageComponent, Task>? handler))
            {
                // Fire and forget; ensure we don't block the interaction pipeline
                _ = handler(component);
                return true;
            }
            return false;
        }
    }
}
`},{path:`Services/GitHub/CommitHandler.cs`,code:`using System.Text.Json;
using Discord;

namespace ShiggyBot.Services.GitHub
{
    internal sealed class CommitHandler
    {
        private const int MaxItems = 3;

        private readonly HashSet<string> _known = new(StringComparer.Ordinal);
        private bool _initialized;

        public async Task<IReadOnlyList<Embed>> PollAsync(HttpClient http, string owner, string repo)
        {
            Uri uri = new($"https://api.github.com/repos/{owner}/{repo}/commits?per_page={MaxItems}");
            using HttpResponseMessage response = await http.GetAsync(uri).ConfigureAwait(false);
            if (!response.IsSuccessStatusCode)
            {
                return [];
            }

            string json = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
            using JsonDocument doc = JsonDocument.Parse(json);
            JsonElement.ArrayEnumerator commits = doc.RootElement.EnumerateArray();

            List<(string Sha, string Author, string Message, string Url)> newCommits = [];

            foreach (JsonElement c in commits)
            {
                string sha = c.GetProperty("sha").GetString() ?? "";
                if (string.IsNullOrEmpty(sha))
                {
                    continue;
                }

                if (_initialized && !_known.Contains(sha))
                {
                    string author = c.GetProperty("commit").GetProperty("author").GetProperty("name").GetString() ?? "Unknown";
                    string msg = c.GetProperty("commit").GetProperty("message").GetString() ?? "No message";
                    string url = c.GetProperty("html_url").GetString() ?? "";
                    newCommits.Add((sha, author, msg, url));
                }

                _known.Add(sha);
            }

            _initialized = true;

            if (newCommits.Count == 0)
            {
                return [];
            }

            EmbedBuilder embed = new()
            {
                Title = $"🔨 {newCommits.Count} new commit(s) to {owner}/{repo}",
                Url = $"https://github.com/{owner}/{repo}",
                Color = new Color(0x5865F2),
                Timestamp = DateTimeOffset.UtcNow
            };

            foreach ((string sha, string author, string msg, _) in newCommits)
            {
                string firstLine = msg.Split('\\n')[0];
                firstLine = firstLine.Length > 80 ? firstLine[..80] + "…" : firstLine;
                embed.AddField($"\`{sha[..7]}\` — {author}", firstLine, inline: false);
            }

            return [embed.Build()];
        }
    }
}
`},{path:`Services/GitHub/MonitorService.cs`,code:`using System.Globalization;
using System.Text.Json;
using Discord;
using Discord.WebSocket;
using Microsoft.Extensions.Configuration;
using ShiggyBot.Utils;

namespace ShiggyBot.Services.GitHub
{
    internal sealed class MonitorService : IDisposable
    {
        private const int PollMinutes = 5;

        private readonly DiscordSocketClient _client;
        private readonly HttpClient _http;
        private readonly string _owner = string.Empty;
        private readonly string _repo = string.Empty;
        private readonly ulong _channelId;

        private readonly CommitHandler _commits;
        private readonly PullRequestHandler _prs;
        private readonly StarHandler _stars;

        private Timer? _timer;

        public MonitorService(DiscordSocketClient client, IConfiguration config)
        {
            ArgumentNullException.ThrowIfNull(client);
            ArgumentNullException.ThrowIfNull(config);

            _client = client;

            string? token = config["GITHUB_TOKEN"];
            _http = new HttpClient();
            _http.DefaultRequestHeaders.UserAgent.ParseAdd("ShiggyBot/1.0");
            _http.Timeout = TimeSpan.FromSeconds(15);
            if (!string.IsNullOrEmpty(token))
            {
                _http.DefaultRequestHeaders.Authorization = new("Bearer", token);
            }

            string? repo = config["GITHUB_REPO"];
            if (!string.IsNullOrEmpty(repo) && repo.Contains('/', StringComparison.Ordinal))
            {
                string[] parts = repo.Split('/', 2);
                _owner = parts[0];
                _repo = parts[1];
            }

            string? chId = config["GITHUB_WEBHOOK_CHANNEL_ID"];
            _channelId = !string.IsNullOrEmpty(chId) && ulong.TryParse(chId, NumberStyles.Integer, CultureInfo.InvariantCulture, out ulong id) ? id : 0;

            _commits = new();
            _prs = new();
            _stars = new();
        }

        public bool Enabled => _channelId != 0;

        public void Start()
        {
            if (!Enabled)
            {
                Logger.Warn("[GITHUB] GITHUB_WEBHOOK_CHANNEL_ID not set — monitor not started");
                return;
            }

            Logger.Info($"[GITHUB] Monitoring {_owner}/{_repo} every {PollMinutes}min");
            _timer = new Timer(async _ => await PollAsync().ConfigureAwait(false), null, TimeSpan.Zero, TimeSpan.FromMinutes(PollMinutes));
        }

        private async Task PollAsync()
        {
            List<Embed> embeds = [];

            try
            {
                embeds.AddRange(await _commits.PollAsync(_http, _owner, _repo).ConfigureAwait(false));
                embeds.AddRange(await _prs.PollAsync(_http, _owner, _repo).ConfigureAwait(false));

                Embed? starEmbed = await _stars.PollAsync(_http, _owner, _repo).ConfigureAwait(false);
                if (starEmbed is not null)
                {
                    embeds.Add(starEmbed);
                }
            }
            catch (Exception ex) when (ex is HttpRequestException or TaskCanceledException or JsonException)
            {
                Logger.Error($"[GITHUB] Poll failed: {ex.Message}", ex);
                return;
            }

            foreach (Embed embed in embeds)
            {
                await SendEmbedAsync(embed).ConfigureAwait(false);
            }
        }

        private async Task SendEmbedAsync(Embed embed)
        {
            try
            {
                ITextChannel? channel = await _client.GetChannelAsync(_channelId).ConfigureAwait(false) as ITextChannel;
                if (channel is not null)
                {
                    await channel.SendMessageAsync(embed: embed).ConfigureAwait(false);
                }
            }
            catch (HttpRequestException ex)
            {
                Logger.Error("[GITHUB] Failed to send embed", ex);
            }
            catch (InvalidOperationException ex)
            {
                Logger.Error("[GITHUB] Channel not available", ex);
            }
            catch (TaskCanceledException ex)
            {
                Logger.Error("[GITHUB] Send timed out", ex);
            }
        }

        public void Dispose()
        {
            _timer?.Dispose();
            _http?.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}
`},{path:`Services/GitHub/PullRequestHandler.cs`,code:`using System.Text.Json;
using Discord;

namespace ShiggyBot.Services.GitHub
{
    internal sealed class PullRequestHandler
    {
        private const int MaxItems = 3;

        private readonly HashSet<int> _known = [];
        private bool _initialized;

        public async Task<IReadOnlyList<Embed>> PollAsync(HttpClient http, string owner, string repo)
        {
            Uri uri = new($"https://api.github.com/repos/{owner}/{repo}/pulls?state=all&sort=updated&direction=desc&per_page={MaxItems}");
            using HttpResponseMessage response = await http.GetAsync(uri).ConfigureAwait(false);
            if (!response.IsSuccessStatusCode)
            {
                return [];
            }

            string json = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
            using JsonDocument doc = JsonDocument.Parse(json);
            JsonElement.ArrayEnumerator prs = doc.RootElement.EnumerateArray();

            List<Embed> embeds = [];

            foreach (JsonElement pr in prs)
            {
                int number = pr.GetProperty("number").GetInt32();

                if (!_initialized)
                {
                    _known.Add(number);
                    continue;
                }

                if (_known.Contains(number))
                {
                    continue;
                }

                _known.Add(number);

                string title = pr.GetProperty("title").GetString() ?? "No title";
                string state = pr.GetProperty("state").GetString() ?? "unknown";
                string user = pr.GetProperty("user").GetProperty("login").GetString() ?? "unknown";
                string prUrl = pr.GetProperty("html_url").GetString() ?? "";
                string body = pr.GetProperty("body").GetString() ?? "";
                bool merged = pr.TryGetProperty("merged", out JsonElement m) && m.GetBoolean();

                string stateLabel = merged ? "merged" : state;

                string emoji;
                Color color;
                switch (state)
                {
                    case "open":
                        emoji = "📋";
                        color = new Color(0x2EA043);
                        break;
                    case "closed" when merged:
                        emoji = "🔀";
                        color = new Color(0x6E46F0);
                        break;
                    case "closed":
                        emoji = "❌";
                        color = new Color(0xDA3633);
                        break;
                    default:
                        emoji = "📋";
                        color = new Color(0x5865F2);
                        break;
                }

                EmbedBuilder embed = new()
                {
                    Title = $"{emoji} [{owner}/{repo}] PR #{number}: {title}",
                    Url = prUrl,
                    Color = color,
                    Description = string.IsNullOrEmpty(body)
                        ? null
                        : (body.Length > 300 ? body[..300] + "…" : body),
                    Timestamp = DateTimeOffset.UtcNow
                };

                embed.AddField("Author", user, inline: true);
                embed.AddField("State", char.ToUpperInvariant(stateLabel[0]) + stateLabel[1..], inline: true);

                embeds.Add(embed.Build());
            }

            _initialized = true;
            return embeds;
        }
    }
}
`},{path:`Services/GitHub/StarHandler.cs`,code:`using System.Text.Json;
using Discord;

namespace ShiggyBot.Services.GitHub
{
    internal sealed class StarHandler
    {
        private int _lastCount;
        private bool _initialized;

        public async Task<Embed?> PollAsync(HttpClient http, string owner, string repo)
        {
            Uri uri = new($"https://api.github.com/repos/{owner}/{repo}");
            using HttpResponseMessage response = await http.GetAsync(uri).ConfigureAwait(false);
            if (!response.IsSuccessStatusCode)
            {
                return null;
            }

            string json = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
            using JsonDocument doc = JsonDocument.Parse(json);
            JsonElement root = doc.RootElement;
            int stars = root.GetProperty("stargazers_count").GetInt32();

            if (!_initialized)
            {
                _lastCount = stars;
                _initialized = true;
                return null;
            }

            if (stars <= _lastCount)
            {
                return null;
            }

            int gained = stars - _lastCount;
            _lastCount = stars;

            EmbedBuilder embed = new()
            {
                Title = $"⭐ {owner}/{repo} gained {gained} new star{(gained == 1 ? "" : "s")}!",
                Url = root.GetProperty("html_url").GetString() ?? "",
                Description = $"**Total: {stars}** star{(stars == 1 ? "" : "s")}",
                Color = new Color(0xF1C40F),
                Timestamp = DateTimeOffset.UtcNow
            };

            return embed.Build();
        }
    }
}
`},{path:`Services/GitHubStatsService.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Services
{
    internal sealed class GitHubStatsService : IDisposable
    {
        private readonly HttpClient _http;
        private readonly Timer _timer;
        private volatile RepoStats _stats = new();
        private readonly string _owner;
        private readonly string _repo;

        public GitHubStatsService(string owner = "kmmiio99o", string repo = "ShiggyCord", int refreshMinutes = 10)
        {
            _owner = owner;
            _repo = repo;
            _http = new HttpClient();
            _http.DefaultRequestHeaders.UserAgent.ParseAdd("ShiggyBot/1.0");
            _timer = new Timer(async _ => await FetchStatsAsync().ConfigureAwait(false), null, TimeSpan.Zero, TimeSpan.FromMinutes(refreshMinutes));
        }

        public RepoStats Stats => _stats;

        private async Task<RepoStats> FetchStatsAsync()
        {
            try
            {
                Uri uri = new($"https://api.github.com/repos/{_owner}/{_repo}");
                HttpResponseMessage response = await _http.GetAsync(uri).ConfigureAwait(false);
                response.EnsureSuccessStatusCode();
                string json = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
                using JsonDocument doc = JsonDocument.Parse(json);
                JsonElement root = doc.RootElement;

                RepoStats updated = new()
                {
                    Stars = root.GetProperty("stargazers_count").GetInt32(),
                    Forks = root.GetProperty("forks_count").GetInt32(),
                    OpenIssues = root.GetProperty("open_issues_count").GetInt32(),
                    Description = root.TryGetProperty("description", out JsonElement desc) ? desc.GetString() ?? "" : ""
                };
                _stats = updated;
                return updated;
            }
            catch (HttpRequestException)
            {
            }
            catch (TaskCanceledException)
            {
            }
            return _stats;
        }

        public void Dispose()
        {
            _timer?.Dispose();
            _http?.Dispose();
            GC.SuppressFinalize(this);
        }
    }

    internal sealed class RepoStats
    {
        public int Stars { get; set; }
        public int Forks { get; set; }
        public int OpenIssues { get; set; }
        public string Description { get; set; } = "";
    }
}
`},{path:`Services/PluginService.cs`,code:`using System.Text.Json;

namespace ShiggyBot.Services
{
    internal sealed class PluginService : IDisposable
    {
        private readonly HttpClient _http;
        private const string PluginDataUrl = "https://raw.githubusercontent.com/Purple-EyeZ/Plugins-List/main/src/plugins-data.json";
        private List<PluginResult>? _cachedPlugins;
        private DateTime _cacheExpiry = DateTime.MinValue;
        private const int CacheMinutes = 60;

        public PluginService()
        {
            _http = new HttpClient();
            _http.DefaultRequestHeaders.Add("User-Agent", "ShiggyBot");
            _http.Timeout = TimeSpan.FromSeconds(10);
        }

        public async Task<PluginResult?> SearchPluginAsync(string query)
        {
            if (string.IsNullOrWhiteSpace(query))
            {
                return null;
            }

            try
            {
                List<PluginResult>? plugins = await GetAllPluginsAsync().ConfigureAwait(false);
                if (plugins == null || plugins.Count == 0)
                {
                    return null;
                }

                PluginResult? bestMatch = null;
                int bestDistance = int.MaxValue;
                const int maxDistance = 5;

                foreach (PluginResult plugin in plugins)
                {
                    // Check both name and description for matches
                    int nameDistance = LevenshteinDistance(plugin.Name, query, ignoreCase: true);
                    int descriptionDistance = LevenshteinDistance(plugin.Description, query, ignoreCase: true);

                    int distance = Math.Min(nameDistance, descriptionDistance);

                    if (distance < bestDistance && distance <= maxDistance)
                    {
                        bestDistance = distance;
                        bestMatch = plugin;
                    }

                    // Exact match - return immediately
                    if (plugin.Name.Equals(query, StringComparison.OrdinalIgnoreCase))
                    {
                        return plugin;
                    }
                }

                return bestMatch;
            }
            catch (HttpRequestException ex)
            {
                Utils.Logger.Error($"Error searching plugins: {ex.Message}", ex);
                return null;
            }
            catch (TaskCanceledException ex)
            {
                Utils.Logger.Error($"Plugin search timed out: {ex.Message}", ex);
                return null;
            }
        }

        public async Task<List<PluginResult>> SearchPluginsAsync(string query)
        {
            if (string.IsNullOrWhiteSpace(query))
            {
                return [];
            }

            try
            {
                List<PluginResult>? plugins = await GetAllPluginsAsync().ConfigureAwait(false);
                if (plugins == null)
                {
                    return [];
                }

                string query_lower = query.ToUpperInvariant();
                List<(PluginResult plugin, int score)> results = [];

                foreach (PluginResult plugin in plugins)
                {
                    int score = 0;

                    // Exact name match
                    if (plugin.Name.Equals(query, StringComparison.OrdinalIgnoreCase))
                    {
                        score += 1000;
                    }

                    // Partial name match
                    if (plugin.Name.ToUpperInvariant().Contains(query_lower, StringComparison.OrdinalIgnoreCase))
                    {
                        score += 500;
                    }

                    // Description contains query
                    if (plugin.Description.ToUpperInvariant().Contains(query_lower, StringComparison.OrdinalIgnoreCase))
                    {
                        score += 100;
                    }

                    if (score > 0)
                    {
                        results.Add((plugin, score));
                    }
                }

                // Sort by score and take top 10 results
                return
                [
                    .. results
                         .OrderByDescending(x => x.score)
                         .Take(10)
                         .Select(x => x.plugin)
                ];
            }
            catch (JsonException ex)
            {
                Utils.Logger.Error($"Error parsing plugin data: {ex.Message}", ex);
                return [];
            }
            catch (HttpRequestException ex)
            {
                Utils.Logger.Error($"Error searching plugins: {ex.Message}", ex);
                return [];
            }
        }

        private async Task<List<PluginResult>?> GetAllPluginsAsync()
        {
            // Return cached plugins if still valid
            if (_cachedPlugins != null && DateTime.UtcNow < _cacheExpiry)
            {
                return _cachedPlugins;
            }

            try
            {
                string json = await _http.GetStringAsync(new Uri(PluginDataUrl)).ConfigureAwait(false);
                _cachedPlugins = ParsePluginsJson(json);
                _cacheExpiry = DateTime.UtcNow.AddMinutes(CacheMinutes);
                return _cachedPlugins;
            }
            catch (JsonException ex)
            {
                Utils.Logger.Error($"Error parsing plugins JSON: {ex.Message}", ex);
                return _cachedPlugins; // Return cached data if available
            }
            catch (HttpRequestException ex)
            {
                Utils.Logger.Error($"Error fetching plugins from {PluginDataUrl}: {ex.Message}", ex);
                return _cachedPlugins; // Return cached data if available
            }
        }

        public void Dispose()
        {
            _http?.Dispose();
            GC.SuppressFinalize(this);
        }

        private static List<PluginResult> ParsePluginsJson(string json)
        {
            List<PluginResult> plugins = [];

            try
            {
                using JsonDocument doc = JsonDocument.Parse(json);
                JsonElement root = doc.RootElement;

                if (root.ValueKind == JsonValueKind.Array)
                {
                    foreach (JsonElement plugin in root.EnumerateArray())
                    {
                        try
                        {
                            List<string> authorsArray = [];
                            if (plugin.TryGetProperty("authors", out JsonElement authorsElement) && authorsElement.ValueKind == JsonValueKind.Array)
                            {
                                foreach (JsonElement author in authorsElement.EnumerateArray())
                                {
                                    if (author.GetString() is string authorName)
                                    {
                                        authorsArray.Add(authorName);
                                    }
                                }
                            }

                            PluginResult result = new()
                            {
                                Name = plugin.TryGetProperty("name", out JsonElement nameElement)
                                    ? nameElement.GetString() ?? "Unknown"
                                    : "Unknown",
                                Description = plugin.TryGetProperty("description", out JsonElement descElement)
                                    ? descElement.GetString() ?? "No description"
                                    : "No description",
                                Status = plugin.TryGetProperty("status", out JsonElement statusElement)
                                    ? statusElement.GetString() ?? "unknown"
                                    : "unknown",
                                SourceUrl = plugin.TryGetProperty("sourceUrl", out JsonElement sourceElement)
                                    ? sourceElement.GetString() ?? ""
                                    : "",
                                InstallUrl = plugin.TryGetProperty("installUrl", out JsonElement installElement)
                                    ? installElement.GetString() ?? ""
                                    : "",
                                WarningMessage = plugin.TryGetProperty("warningMessage", out JsonElement warningElement)
                                    ? warningElement.GetString() ?? ""
                                    : "",
                                Authors = authorsArray
                            };

                            if (!string.IsNullOrWhiteSpace(result.Name))
                            {
                                plugins.Add(result);
                            }
                        }
                        catch (InvalidOperationException ex)
                        {
                            Utils.Logger.Error($"Error parsing individual plugin: {ex.Message}", ex);
                            continue;
                        }
                    }
                }

                return plugins;
            }
            catch (JsonException ex)
            {
                Utils.Logger.Error($"Error parsing JSON: {ex.Message}", ex);
                return plugins;
            }
        }

        private static int LevenshteinDistance(string s1, string s2, bool ignoreCase = false)
        {
            int n = s1.Length;
            int m = s2.Length;
            if (n == 0)
            {
                return m;
            }

            if (m == 0)
            {
                return n;
            }

            int[] prev = new int[m + 1];
            int[] curr = new int[m + 1];

            for (int j = 0; j <= m; j++)
            {
                prev[j] = j;
            }

            for (int i = 1; i <= n; i++)
            {
                curr[0] = i;
                for (int j = 1; j <= m; j++)
                {
                    bool charsEqual = ignoreCase
                        ? char.ToUpperInvariant(s1[i - 1]) == char.ToUpperInvariant(s2[j - 1])
                        : s1[i - 1] == s2[j - 1];
                    int cost = charsEqual ? 0 : 1;

                    curr[j] = Math.Min(
                        Math.Min(curr[j - 1] + 1, prev[j] + 1),
                        prev[j - 1] + cost);
                }

                (prev, curr) = (curr, prev);
            }

            return prev[m];
        }
    }

    internal sealed class PluginResult
    {
        public string Name { get; set; } = "";

        public string Description { get; set; } = "";

        public string Status { get; set; } = "unknown";

        public string SourceUrl { get; set; } = "";

        public string InstallUrl { get; set; } = "";

        public string WarningMessage { get; set; } = "";

        public List<string> Authors { get; set; } = [];
    }
}
`},{path:`Utils/EmbedHelper.cs`,code:`using Discord;
using System.Globalization;
using System.Text.RegularExpressions;
using ShiggyBot.Commands;

namespace ShiggyBot.Utils
{
    internal static partial class EmbedHelper
    {
        [GeneratedRegex(@"^<@!?(\\d+)>$", RegexOptions.Compiled)]
        private static partial Regex UserMentionRegex();

        public static ulong? ParseUserMention(string arg)
        {
            Match match = UserMentionRegex().Match(arg);
            return match.Success ? ulong.Parse(match.Groups[1].Value, CultureInfo.InvariantCulture) : null;
        }

        public static Embed BuildPingEmbed(int latency)
        {
            return new EmbedBuilder
            {
                Title = "Pong",
                Description = $"Latency: {latency} ms",
                Color = new Color(0x00FF00) // green
            }.Build();
        }

        public static Embed BuildModerationEmbed(string action, string target, string reason, string moderator)
        {
            return new EmbedBuilder
            {
                Title = $"Moderation: {action}",
                Description = $"**Target:** {target}\\n**Reason:** {reason}\\n**Moderator:** {moderator}",
                Color = new Color(0xFFA500) // orange
            }.Build();
        }

        public static Embed BuildErrorEmbed(string error)
        {
            return new EmbedBuilder
            {
                Title = "Error",
                Description = error,
                Color = new Color(0xFF0000) // red
            }.Build();
        }

        public static Embed BuildInfoEmbed(string title, string description)
        {
            return new EmbedBuilder
            {
                Title = title,
                Description = description,
                Color = new Color(0x1E90FF) // blue
            }.Build();
        }

        public static Embed BuildSuccessEmbed(string description)
        {
            return new EmbedBuilder
            {
                Title = "Success",
                Description = description,
                Color = new Color(0x00FF00) // green
            }.Build();
        }

        public static Embed BuildHelpEmbed(List<(string Name, string Description)> commands, string prefix)
        {
            EmbedBuilder builder = new()
            {
                Title = "Available Commands",
                Description = $"Prefix: {prefix}",
                Color = new Color(0x1E90FF)
            };
            foreach ((string Name, string Description) in commands)
            {
                builder.AddField(Name, Description, inline: false);
            }
            return builder.Build();
        }

        public static Embed BuildCategoryHelpEmbed(string category, List<ICommand> commands, string prefix)
        {
            ArgumentNullException.ThrowIfNull(category);
            ArgumentNullException.ThrowIfNull(commands);
            EmbedBuilder builder = new()
            {
                Title = $"📁 {category} Commands",
                Description = $"Prefix: \`{prefix}\`\\nUse \`{prefix}help\` to return to this menu",
                Color = GetCategoryColor(category)
            };

            foreach (ICommand cmd in commands)
            {
                string aliases = cmd.Aliases?.Count > 0 ? $" (Aliases: {string.Join(", ", cmd.Aliases)})" : "";
                _ = builder.AddField($"{prefix}{cmd.Name}{aliases}", cmd.Description ?? "No description", inline: false);
            }

            builder.Footer = new EmbedFooterBuilder
            {
                Text = $"Total: {commands.Count} command(s) in {category}"
            };

            return builder.Build();
        }

        public static Embed BuildMainHelpEmbed(Dictionary<string, List<ICommand>> categories, string prefix)
        {
            ArgumentNullException.ThrowIfNull(categories);
            EmbedBuilder builder = new()
            {
                Title = "🤖 ShiggyBot Help",
                Description = $"**Prefix:** \`{prefix}\`\\nSelect a category below to view commands",
                Color = new Color(0x9B59B6)
            };

            foreach (KeyValuePair<string, List<ICommand>> category in categories)
            {
                string emoji = GetCategoryEmoji(category.Key);
                _ = builder.AddField($"{emoji} {category.Key} ({category.Value.Count})",
                    $"Use the select menu below to view {category.Key.ToUpperInvariant()} commands",
                    inline: false);
            }

            builder.Footer = new EmbedFooterBuilder
            {
                Text = $"Total: {categories.Values.Sum(c => c.Count)} command(s) | Use {prefix}help <command> for details"
            };

            return builder.Build();
        }

        public static Embed BuildCommandHelpEmbed(ICommand command, string prefix)
        {
            ArgumentNullException.ThrowIfNull(command);
            EmbedBuilder builder = new()
            {
                Title = $"Command: {command.Name}",
                Description = command.Description ?? "No description",
                Color = new Color(0x1E90FF)
            };

            _ = builder.AddField("Category", command.Category ?? "Other", inline: true);
            _ = builder.AddField("Usage", $"\`{prefix}{command.Name}\`", inline: true);

            if (command.Aliases?.Count > 0)
            {
                _ = builder.AddField("Aliases", string.Join(", ", command.Aliases.Select(a => $"\`{a}\`")), inline: false);
            }

            return builder.Build();
        }

        private static Color GetCategoryColor(string category)
        {
            ArgumentNullException.ThrowIfNull(category);
            return category.ToUpperInvariant() switch
            {
                "UTILITY" => new Color(0x1E90FF),
                "MODERATION" => new Color(0xFFA500),
                "SEARCH" => new Color(0x00FF00),
                "FUN" => new Color(0xE91E63),
                _ => new Color(0x95A5A6)
            };
        }

        public static string GetCategoryEmoji(string category)
        {
            ArgumentNullException.ThrowIfNull(category);
            return category.ToUpperInvariant() switch
            {
                "UTILITY" => "🔧",
                "MODERATION" => "🛡️",
                "SEARCH" => "🔍",
                "FUN" => "🎮",
                _ => "📁"
            };
        }
    }
}
`},{path:`Utils/ErrorHandler.cs`,code:`using Discord;
using Discord.WebSocket;

namespace ShiggyBot.Utils
{
    internal static class ErrorHandler
    {
        public static string? WebhookUrl { get; set; }

        public static async Task HandleCommandErrorAsync(SocketUserMessage message, Exception ex, string commandName)
        {
            ArgumentNullException.ThrowIfNull(message);
            Logger.Error($"Error in command '{commandName}': {ex}", ex);

            _ = WebhookLogger.SendErrorAsync(WebhookUrl, $"Error in command \`{commandName}\`.", ex);

            Embed embed = EmbedHelper.BuildErrorEmbed($"An error occurred while executing \`{commandName}\`.");
            await message.Channel.SendMessageAsync(embed: embed).ConfigureAwait(false);
        }

        public static Task HandleFeatureErrorAsync(Exception ex, string featureName)
        {
            Logger.Error($"Error in feature '{featureName}': {ex}", ex);
            _ = WebhookLogger.SendErrorAsync(WebhookUrl, $"Error in feature \`{featureName}\`.", ex);
            return Task.CompletedTask;
        }

        public static void LogWarning(string message)
        {
            Logger.Warn(message);
        }

        public static void LogError(string message, Exception? ex = null)
        {
            Logger.Error(message);
            if (ex != null)
            {
                Logger.Error(ex.ToString(), ex);
            }
        }
    }
}
`},{path:`Utils/Formatting.cs`,code:`namespace ShiggyBot.Utils
{
    internal static class Formatting
    {
        public static int CountDigits(int value)
        {
            if (value < 0)
            {
                value = -value;
            }

            return value switch
            {
                < 10 => 1,
                < 100 => 2,
                < 1000 => 3,
                < 10000 => 4,
                < 100000 => 5,
                < 1000000 => 6,
                < 10000000 => 7,
                < 100000000 => 8,
                < 1000000000 => 9,
                _ => 10
            };
        }

        public static int WriteInt32(byte[] buffer, int offset, int value)
        {
            Span<byte> digits = stackalloc byte[11];
            int len = 0;
            int n = value;

            do
            {
                digits[len++] = (byte)('0' + (n % 10));
                n /= 10;
            }
            while (n > 0);

            for (int i = 0; i < (len / 2); i++)
            {
                (digits[i], digits[len - 1 - i]) = (digits[len - 1 - i], digits[i]);
            }

            digits[..len].CopyTo(buffer.AsSpan(offset));
            return offset + len;
        }
    }
}
`},{path:`Utils/Logger.cs`,code:`namespace ShiggyBot.Utils
{
    // Lightweight logger to centralize simple logging and avoid sprinkling Console.WriteLine
    internal static class Logger
    {
        public static void Info(string message)
        {
            Console.WriteLine($"[INFO] {message}");
        }

        public static void Warn(string message)
        {
            Console.WriteLine($"[WARN] {message}");
        }

        public static void Error(string message, Exception? ex = null)
        {
            Console.WriteLine($"[ERROR] {message}");
            if (ex != null)
            {
                Console.WriteLine(ex);
            }
        }
    }
}
`},{path:`Utils/PermissionHelper.cs`,code:`using System.Globalization;
using System.Text;
using Discord;
using Discord.WebSocket;

namespace ShiggyBot.Utils
{
    internal static class PermissionHelper
    {
        public static bool HasPermission(SocketUserMessage message, GuildPermission required)
        {
            return message.Author is SocketGuildUser guildUser &&
                (guildUser.GuildPermissions.Has(required) || guildUser.GuildPermissions.Administrator);
        }

        public static string GetPermissionName(GuildPermission permission)
        {
            return permission.ToString();
        }

        public static async Task<bool> RequirePermissionAsync(SocketUserMessage message, GuildPermission required)
        {
            if (message.Channel is not SocketGuildChannel)
            {
                await message.Channel.SendMessageAsync(
                    embed: EmbedHelper.BuildErrorEmbed("This command can only be used in a server.")
                ).ConfigureAwait(false);
                return false;
            }

            if (!HasPermission(message, required))
            {
                string permName = GetPermissionName(required);
                await message.Channel.SendMessageAsync(
                    embed: EmbedHelper.BuildErrorEmbed($"You need {permName} permission to use this command.")
                ).ConfigureAwait(false);
                return false;
            }

            return true;
        }

        public static async Task<IGuildUser?> ResolveRepliedUserAsync(SocketGuild guild, SocketUserMessage message)
        {
            if (message.ReferencedMessage is null)
            {
                return null;
            }

            ulong targetId = message.ReferencedMessage.Author.Id;
            SocketGuildUser? cached = guild.GetUser(targetId);
            if (cached is not null)
            {
                return cached;
            }

            try
            {
                return await ((IGuild)guild).GetUserAsync(targetId).ConfigureAwait(false);
            }
            catch (HttpRequestException)
            {
                return null;
            }
        }

        public static SocketRole? ResolveRole(SocketGuild guild, string roleArg)
        {
            SocketRole? exact = guild.Roles.FirstOrDefault(r =>
                r.Name.Equals(roleArg, StringComparison.OrdinalIgnoreCase) ||
                r.Id.ToString(CultureInfo.InvariantCulture) == roleArg ||
                r.Mention == roleArg);

            if (exact is not null)
            {
                return exact;
            }

            string cleanedSearch = CleanRoleName(roleArg);

            SocketRole? cleaned = guild.Roles.FirstOrDefault(r =>
            {
                try
                {
                    string cleaned = CleanRoleName(r.Name);
                    return cleaned.Equals(cleanedSearch, StringComparison.OrdinalIgnoreCase) && cleaned.Length > 0;
                }
                catch (ArgumentException)
                {
                    return false;
                }
            });

            if (cleaned is not null)
            {
                return cleaned;
            }

            SocketRole[] contains = [.. guild.Roles
                .Where(r => r.Name.Contains(roleArg, StringComparison.OrdinalIgnoreCase))];

            return contains.Length switch
            {
                1 => contains[0],
                > 1 => contains.MinBy(r => r.Name.Length),
                _ => null
            };
        }

        private static string CleanRoleName(string name)
        {
            return new string([.. name
                .Normalize(NormalizationForm.FormKC)
                .Where(char.IsLetterOrDigit)]);
        }

        public static async Task<IGuildUser?> ResolveUserAsync(SocketGuild guild, string userArg)
        {
            ulong? mentionId = EmbedHelper.ParseUserMention(userArg);
            if (mentionId.HasValue)
            {
                SocketGuildUser? cached = guild.GetUser(mentionId.Value);
                if (cached is not null)
                {
                    return cached;
                }

                try
                {
                    return await ((IGuild)guild).GetUserAsync(mentionId.Value).ConfigureAwait(false);
                }
                catch (HttpRequestException)
                {
                    return null;
                }
            }

            IGuildUser? cachedUser = guild.Users.FirstOrDefault(u =>
                u.Username == userArg ||
                u.GlobalName == userArg ||
                u.Nickname == userArg ||
                u.Id.ToString(CultureInfo.InvariantCulture) == userArg);

            if (cachedUser is not null)
            {
                return cachedUser;
            }

            if (ulong.TryParse(userArg, NumberStyles.Integer, CultureInfo.InvariantCulture, out ulong parsedId))
            {
                try
                {
                    return await ((IGuild)guild).GetUserAsync(parsedId).ConfigureAwait(false);
                }
                catch (HttpRequestException)
                {
                    return null;
                }
            }

            try
            {
                IReadOnlyCollection<IGuildUser> results = await ((IGuild)guild).SearchUsersAsync(userArg, limit: 10).ConfigureAwait(false);
                return results.FirstOrDefault(u =>
                    u.Username == userArg ||
                    u.GlobalName == userArg ||
                    u.Nickname == userArg);
            }
            catch (HttpRequestException)
            {
                return null;
            }
        }
    }
}
`},{path:`Utils/WebhookLogger.cs`,code:`using System.Text;
using System.Text.Json;

namespace ShiggyBot.Utils
{
    internal static class WebhookLogger
    {
        private static readonly HttpClient _http = new() { DefaultRequestHeaders = { { "User-Agent", "ShiggyBot/1.0" } } };

        public static async Task SendErrorAsync(string? webhookUrl, string message, Exception? ex = null, string title = "❌ ShiggyBot Error")
        {
            if (string.IsNullOrEmpty(webhookUrl))
            {
                return;
            }

            try
            {
                string description = ex != null
                    ? $"{message}\\n\`\`\`\\n{ex}\\n\`\`\`"
                    : message;
                description = description.Length > 2000 ? description[..2000] : description;

                var embed = new
                {
                    title,
                    description,
                    color = 0xFF0000,
                    timestamp = DateTime.UtcNow
                };

                var payload = new
                {
                    content = "<@879393496627306587>",
                    embeds = new[] { embed },
                    allowed_mentions = new { users = new[] { "879393496627306587" } }
                };

                string json = JsonSerializer.Serialize(payload);
                using StringContent content = new(json, Encoding.UTF8, "application/json");

                await _http.PostAsync(new Uri(webhookUrl), content).ConfigureAwait(false);
            }
            catch (HttpRequestException)
            {
            }
            catch (TaskCanceledException)
            {
            }
            catch (InvalidOperationException)
            {
            }
        }
    }
}
`}];sg.registerLanguage(`csharp`,cg);function ug(e){return e[Math.floor(Math.random()*e.length)]}function dg(){let[e,t]=(0,_.useState)(()=>lg.length>0?ug(lg):null);(0,_.useEffect)(()=>{lg.length>0&&t(ug(lg))},[]);let n=(0,_.useMemo)(()=>e?sg.highlight(e.code,{language:`csharp`}).value:``,[e]);if(!e)return null;let r=e.code.split(`
`);return(0,V.jsxs)(Q,{sx:{width:`100%`,maxWidth:`100%`,minWidth:0,height:{xs:440,md:420},borderRadius:2,border:1,borderColor:`divider`,bgcolor:`#1a1816`,textAlign:`left`,fontFamily:`'JetBrains Mono', 'Fira Code', 'Consolas', monospace`,fontSize:`0.75rem`,lineHeight:1.55,transform:{md:`perspective(1000px) rotateY(-1.5deg) translateZ(6px)`},boxShadow:{md:`0 20px 60px rgba(0,0,0,0.45)`},transition:`transform 0.3s ease, box-shadow 0.3s ease`,"&:hover":{transform:{md:`none`},boxShadow:{md:`0 8px 24px rgba(0,0,0,0.3)`}},overflow:`hidden`,display:`flex`,flexDirection:`column`},children:[(0,V.jsxs)(Q,{sx:{display:`flex`,alignItems:`center`,gap:1.5,px:2,py:1.25,bgcolor:`#12110f`,borderBottom:1,borderColor:`divider`,flexShrink:0},children:[(0,V.jsxs)(Q,{sx:{display:`flex`,gap:.5},children:[(0,V.jsx)(Q,{sx:{width:10,height:10,borderRadius:`50%`,bgcolor:`#e5554d`}}),(0,V.jsx)(Q,{sx:{width:10,height:10,borderRadius:`50%`,bgcolor:`#e6bf4b`}}),(0,V.jsx)(Q,{sx:{width:10,height:10,borderRadius:`50%`,bgcolor:`#4bb04b`}})]}),(0,V.jsx)(Q,{sx:{flex:1,textAlign:`center`,color:`text.secondary`,fontSize:`0.7rem`,fontWeight:500,userSelect:`none`},children:e.path}),(0,V.jsx)(Q,{sx:{width:44}})]}),(0,V.jsx)(Q,{sx:{flex:1,overflow:`auto`,scrollbarWidth:`thin`,scrollbarColor:`#3a3532 #12110f`,"&::-webkit-scrollbar":{width:8,height:8},"&::-webkit-scrollbar-track":{bgcolor:`#12110f`},"&::-webkit-scrollbar-thumb":{bgcolor:`#3a3532`,borderRadius:4},"&::-webkit-scrollbar-thumb:hover":{bgcolor:`#4a4542`},"&::-webkit-scrollbar-corner":{bgcolor:`#12110f`}},children:(0,V.jsxs)(Q,{sx:{display:`flex`},children:[(0,V.jsx)(Q,{component:`pre`,sx:{m:0,px:1.25,py:1.5,textAlign:`right`,color:`rgba(255,255,255,0.15)`,userSelect:`none`,borderRight:1,borderColor:`rgba(255,255,255,0.05)`,flexShrink:0},children:r.map((e,t)=>(0,V.jsx)(`div`,{children:t+1},t))}),(0,V.jsx)(Q,{component:`pre`,sx:{m:0,px:2,py:1.5},children:(0,V.jsx)(`code`,{className:`language-csharp`,dangerouslySetInnerHTML:{__html:n}})})]})})]})}var fg=Rh;function pg({onToggleTheme:e,isDark:t}){let n=Qu(),r=dt(),[i,a]=(0,_.useState)(!1);return(0,V.jsxs)(Q,{sx:{minHeight:`100vh`,bgcolor:`background.default`,overflowX:`hidden`,userSelect:`none`},children:[(0,V.jsx)(Zh,{drawerWidth:0,onToggleTheme:e,isDark:t}),(0,V.jsxs)(Q,{sx:{position:`relative`,overflow:`hidden`,pt:{xs:6,md:12},pb:{xs:8,md:14}},children:[(0,V.jsx)(Q,{sx:{position:`absolute`,inset:0,background:`radial-gradient(ellipse 700px 450px at 50% 40%, ${n.palette.primary.main}15, transparent)`}}),(0,V.jsx)(fm,{maxWidth:`lg`,sx:{position:`relative`,zIndex:1},children:(0,V.jsxs)(Q,{sx:{display:`grid`,gridTemplateColumns:{xs:`1fr`,md:`1fr 3fr`},gap:{md:8},alignItems:`center`},children:[(0,V.jsxs)(Q,{sx:{textAlign:{xs:`center`,md:`left`}},children:[(0,V.jsx)(Q,{component:`img`,src:`/favicon.gif`,alt:``,sx:{width:{xs:80,md:120},height:{xs:80,md:120},borderRadius:2.5,mb:{xs:2,md:3}}}),(0,V.jsx)(Fp,{variant:`h1`,component:`h1`,sx:{fontSize:{xs:`2.25rem`,sm:`3rem`,md:`3.75rem`},fontWeight:700,letterSpacing:`-0.03em`,lineHeight:1.1,mb:1.5},children:fg.hero.headline}),(0,V.jsx)(Fp,{sx:{fontSize:{xs:`0.95rem`,md:`1.125rem`},color:`text.secondary`,lineHeight:1.65,maxWidth:460,mx:{xs:`auto`,md:0},mb:3.5},children:fg.hero.subheadline}),(0,V.jsxs)(Q,{sx:{display:`flex`,gap:1.5,flexWrap:`wrap`,justifyContent:{xs:`center`,md:`flex-start`}},children:[(0,V.jsx)(dm,{variant:`contained`,size:`large`,onClick:()=>r(`/setup`),children:fg.hero.cta}),(0,V.jsx)(dm,{variant:`outlined`,size:`large`,startIcon:(0,V.jsx)(Kh,{}),component:`a`,href:`https://github.com/kmmiio99o/ShiggyBot`,target:`_blank`,rel:`noopener noreferrer`,sx:{borderColor:`divider`,color:`text.primary`},children:fg.hero.github})]})]}),(0,V.jsxs)(Q,{sx:{mt:{xs:6,md:0},minWidth:0},children:[(0,V.jsxs)(Q,{sx:{display:{xs:`block`,md:`none`},textAlign:`center`},children:[(0,V.jsx)(dm,{variant:`outlined`,size:`small`,startIcon:(0,V.jsx)(qh,{}),onClick:()=>a(e=>!e),sx:{borderColor:`divider`,color:`text.secondary`},children:i?`Hide source`:`Browse source`}),(0,V.jsx)(Ef,{in:i,timeout:350,children:(0,V.jsx)(Q,{sx:{mt:2},children:(0,V.jsx)(dg,{})})})]}),(0,V.jsx)(Q,{sx:{display:{xs:`none`,md:`block`}},children:(0,V.jsx)(dg,{})})]})]})})]}),(0,V.jsx)(Q,{sx:{bgcolor:`surface`},children:(0,V.jsxs)(fm,{maxWidth:`lg`,sx:{py:{xs:6,md:9}},children:[(0,V.jsx)(Fp,{variant:`h2`,sx:{fontSize:{xs:`1.25rem`,sm:`1.5rem`},fontWeight:600,mb:3},children:fg.features.title}),(0,V.jsx)(Q,{sx:{display:`grid`,gridTemplateColumns:{xs:`1fr`,sm:`1fr 1fr`,md:`repeat(3, 1fr)`},gap:{xs:2,md:2.5}},children:fg.features.items.map(e=>(0,V.jsx)(ag,{id:e.id,title:e.title,description:e.description},e.id))})]})}),(0,V.jsxs)(fm,{maxWidth:`lg`,sx:{py:{xs:6,md:9},textAlign:`center`},children:[(0,V.jsx)(Fp,{variant:`h2`,sx:{fontSize:{xs:`1.25rem`,sm:`1.5rem`},fontWeight:600,mb:3},children:fg.techStack.title}),(0,V.jsx)(Q,{sx:{display:`flex`,flexWrap:`wrap`,gap:2,justifyContent:`center`},children:fg.techStack.items.map(e=>(0,V.jsx)(og,{label:e.label,sub:e.sub},e.label))})]}),(0,V.jsx)(Q,{sx:{bgcolor:`surface`},children:(0,V.jsxs)(fm,{maxWidth:`lg`,sx:{py:{xs:6,md:9},textAlign:`center`},children:[(0,V.jsx)(Fp,{variant:`h2`,sx:{fontSize:{xs:`1.25rem`,sm:`1.5rem`},fontWeight:600,mb:1.5},children:fg.cta.title}),(0,V.jsx)(Fp,{variant:`body1`,sx:{color:`text.secondary`,mb:3,lineHeight:1.6,maxWidth:420,mx:`auto`,whiteSpace:`pre-line`},children:fg.cta.description}),(0,V.jsxs)(Q,{sx:{display:`flex`,gap:1.5,justifyContent:`center`,flexWrap:`wrap`},children:[(0,V.jsx)(dm,{variant:`contained`,size:`large`,onClick:()=>r(`/setup`),children:fg.cta.setupButton}),(0,V.jsx)(dm,{variant:`outlined`,size:`large`,startIcon:(0,V.jsx)(Kh,{}),component:`a`,href:`https://github.com/kmmiio99o/ShiggyBot`,target:`_blank`,rel:`noopener noreferrer`,sx:{borderColor:`divider`,color:`text.primary`},children:`View on GitHub`})]})]})}),(0,V.jsx)(Q,{component:`footer`,sx:{py:4,textAlign:`center`},children:(0,V.jsx)(fm,{maxWidth:`lg`,children:(0,V.jsxs)(Fp,{variant:`caption`,sx:{color:`text.secondary`},children:[fg.site.title,` · `,fg.footer.copyright,` ·`,` `,new Date().getFullYear()]})})})]})}var mg=zd((0,V.jsx)(`path`,{d:`M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z`}),`ArrowBack`),hg=Rh,gg=[`#7957d5`,`#e86a7a`,`#5b7bf2`,`#d4a13e`,`#2d9d4a`];function _g({onToggleTheme:e,isDark:t}){let n=dt();return(0,V.jsxs)(Q,{sx:{minHeight:`100vh`,bgcolor:`background.default`},children:[(0,V.jsx)(Zh,{drawerWidth:0,onToggleTheme:e,isDark:t}),(0,V.jsx)(Q,{sx:{pt:{xs:10,md:13},pb:{xs:8,md:12}},children:(0,V.jsxs)(fm,{maxWidth:`md`,children:[(0,V.jsx)(dm,{startIcon:(0,V.jsx)(mg,{}),onClick:()=>n(`/`),sx:{mb:3,color:`text.secondary`,"&:hover":{color:`text.primary`}},children:`Back to Home`}),(0,V.jsx)(Fp,{variant:`h1`,sx:{fontSize:{xs:`2rem`,md:`2.5rem`},fontWeight:700,mb:1},children:hg.commands.title}),(0,V.jsx)(Fp,{variant:`body1`,sx:{color:`text.secondary`,mb:5,lineHeight:1.6},children:hg.commands.subtitle.replace(`{prefix}`,hg.commands.prefix)}),hg.commands.categories.map((e,t)=>(0,V.jsxs)(Q,{sx:{mb:5},children:[(0,V.jsxs)(Q,{sx:{display:`flex`,alignItems:`center`,gap:1.5,mb:2},children:[(0,V.jsx)(Q,{sx:{width:10,height:10,borderRadius:`50%`,bgcolor:gg[t%gg.length],flexShrink:0}}),(0,V.jsx)(Fp,{variant:`h2`,sx:{fontSize:`1.25rem`,fontWeight:600},children:e.name})]}),(0,V.jsx)(Q,{sx:{borderRadius:2,border:1,borderColor:`divider`,overflow:`hidden`},children:e.commands.map((t,n)=>(0,V.jsxs)(Q,{sx:{px:3,py:2.5,borderBottom:+(n<e.commands.length-1),borderColor:`divider`,"&:hover":{bgcolor:`action.hover`}},children:[(0,V.jsx)(Q,{sx:{display:`flex`,alignItems:`baseline`,gap:1.5,mb:.5},children:(0,V.jsxs)(Fp,{variant:`body2`,sx:{fontWeight:600,fontFamily:`'JetBrains Mono', 'Fira Code', monospace`,fontSize:`0.875rem`,color:`primary.main`},children:[hg.commands.prefix,t.signature]})}),(0,V.jsx)(Fp,{variant:`body2`,sx:{color:`text.secondary`,lineHeight:1.6},children:t.description})]},t.name))})]},e.name))]})})]})}function vg({onToggleTheme:e,isDark:t}){let n=dt();return(0,V.jsxs)(Q,{sx:{minHeight:`100vh`,bgcolor:`background.default`},children:[(0,V.jsx)(Zh,{drawerWidth:0,onToggleTheme:e,isDark:t}),(0,V.jsx)(Q,{sx:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,pt:{xs:14,md:18},pb:{xs:8,md:12},textAlign:`center`},children:(0,V.jsxs)(fm,{maxWidth:`sm`,children:[(0,V.jsx)(Fp,{variant:`h1`,sx:{fontSize:{xs:`5rem`,md:`7rem`},fontWeight:800,letterSpacing:`-0.04em`,lineHeight:1,background:e=>`linear-gradient(135deg, ${e.palette.primary.main}, ${e.palette.primary.light})`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,mb:1},children:`404`}),(0,V.jsx)(Fp,{variant:`h2`,sx:{fontSize:{xs:`1.25rem`,md:`1.5rem`},fontWeight:600,mb:1.5},children:`Page not found`}),(0,V.jsx)(Fp,{variant:`body1`,sx:{color:`text.secondary`,lineHeight:1.6,mb:4,maxWidth:360,mx:`auto`},children:`The page you're looking for doesn't exist or has been moved.`}),(0,V.jsx)(Q,{sx:{display:`flex`,gap:1.5,justifyContent:`center`},children:(0,V.jsx)(dm,{variant:`contained`,startIcon:(0,V.jsx)(mg,{}),onClick:()=>n(`/`),children:`Back to Home`})})]})})]})}var yg={},bg=_.createContext(yg);function xg(e){let t=_.useContext(bg);return _.useMemo(function(){return typeof e==`function`?e(t):{...t,...e}},[t,e])}function Sg(e){let t;return t=e.disableParentContext?typeof e.components==`function`?e.components(yg):e.components||yg:xg(e.components),_.createElement(bg.Provider,{value:t},e.children)}var Cg=zd((0,V.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`ChevronRight`),wg=zd((0,V.jsx)(`path`,{d:`M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z`}),`ExpandMore`),Tg=Rh,Eg=6,Dg=[{heading:``,items:[{label:Tg.nav.home,path:`/`}]},{heading:Tg.sidebar.gettingStarted,items:[{label:Tg.nav.setup,path:`/setup`,children:[{label:Tg.nav.setupPrerequisites,path:`/setup/prerequisites`},{label:Tg.nav.setupDiscordPortal,path:`/setup/discord-portal`},{label:Tg.nav.setupBuilding,path:`/setup/building`},{label:Tg.nav.setupRunning,path:`/setup/running`},{label:Tg.nav.setupPublishing,path:`/setup/publishing`},{label:Tg.nav.setupCiCd,path:`/setup/ci-cd`}]},{label:Tg.nav.configuration,path:`/configuration`,children:[{label:Tg.nav.configurationKeys,path:`/configuration/keys`},{label:Tg.nav.configurationSources,path:`/configuration/sources`},{label:Tg.nav.configurationPermissions,path:`/configuration/permissions`}]}]},{heading:Tg.sidebar.reference,items:[{label:Tg.nav.architecture,path:`/architecture`,children:[{label:Tg.nav.architectureEntrypoint,path:`/architecture/entrypoint`},{label:Tg.nav.architectureDiscordClientService,path:`/architecture/discord-client-service`},{label:Tg.nav.architectureCommandSystem,path:`/architecture/command-system`},{label:Tg.nav.architectureComponentSystems,path:`/architecture/component-systems`},{label:Tg.nav.architectureFeatures,path:`/architecture/features`},{label:Tg.nav.architectureServices,path:`/architecture/services`},{label:Tg.nav.architectureDatabase,path:`/architecture/database`},{label:Tg.nav.architectureUtilities,path:`/architecture/utilities`},{label:Tg.nav.architectureConfigSystem,path:`/architecture/config-system`},{label:Tg.nav.architecturePatterns,path:`/architecture/patterns`}]}]},{heading:Tg.sidebar.development,items:[{label:Tg.nav.extending,path:`/extending`,children:[{label:Tg.nav.extendingNewCommand,path:`/extending/new-command`},{label:Tg.nav.extendingNewFeature,path:`/extending/new-feature`},{label:Tg.nav.extendingNewData,path:`/extending/new-data`},{label:Tg.nav.extendingStyleGuide,path:`/extending/style-guide`},{label:Tg.nav.extendingGotchas,path:`/extending/gotchas`}]}]}];function Og(e,t){return e?e.some(e=>e.path===t||Og(e.children,t)):!1}function kg({drawerWidth:e,onResize:t}){let n=Qu(),r=dt(),i=ct(),a=(0,_.useRef)(!1),[o,s]=(0,_.useState)((0,_.useCallback)(()=>Dg.flatMap(e=>e.items).find(e=>e.children&&(e.path===i.pathname||Og(e.children,i.pathname)))?.path??null,[])),c=e=>{s(e)};(0,_.useEffect)(()=>{let e=Dg.flatMap(e=>e.items).find(e=>e.children&&(e.path===i.pathname||Og(e.children,i.pathname)));s(e?.path??null)},[i.pathname]);let l=(0,_.useCallback)(e=>{e.preventDefault(),a.current=!0,document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`;let n=e=>{a.current&&t(e.clientX)},r=()=>{a.current=!1,document.body.style.cursor=``,document.body.style.userSelect=``,document.removeEventListener(`mousemove`,n),document.removeEventListener(`mouseup`,r)};document.addEventListener(`mousemove`,n),document.addEventListener(`mouseup`,r)},[t]);return(0,_.useEffect)(()=>()=>{document.body.style.cursor=``,document.body.style.userSelect=``},[]),(0,V.jsxs)(Q,{sx:{position:`relative`,display:{xs:`none`,md:`flex`}},children:[(0,V.jsx)(vh,{variant:`permanent`,open:!0,sx:{"& .MuiDrawer-paper":{width:e,height:`100vh`,bgcolor:`transparent`,borderRight:1,borderColor:`divider`,overflow:`hidden`}},children:(0,V.jsxs)(Q,{sx:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,V.jsx)(Mh,{children:(0,V.jsx)(Fp,{variant:`h6`,noWrap:!0,sx:{fontWeight:700,cursor:`pointer`,letterSpacing:`-0.01em`},onClick:()=>r(`/`),children:Tg.site.title})}),(0,V.jsx)(Q,{sx:{flexGrow:1,overflowY:`auto`,px:1.5},children:Dg.map((e,t)=>(0,V.jsxs)(Q,{sx:{mb:e.heading?.5:0},children:[e.heading&&(0,V.jsx)(Fp,{sx:{px:1.5,pt:2.5,pb:.5,fontSize:`0.7rem`,fontWeight:700,letterSpacing:`0.1em`,textTransform:`uppercase`,color:`text.secondary`,opacity:.5},children:e.heading}),e.items.map(e=>(0,V.jsx)(Ag,{item:e,currentPath:i.pathname,expanded:o===e.path,onToggle:c,onNavigate:r,theme:n},e.path))]},e.heading||`section-${t}`))})]})}),(0,V.jsx)(Q,{onMouseDown:l,sx:{width:Eg,cursor:`col-resize`,flexShrink:0,bgcolor:`transparent`,transition:`background-color 0.15s`,"&:hover":{bgcolor:`primary.main`,opacity:.3},position:`absolute`,top:0,right:-6/2,bottom:0,zIndex:10}})]})}function Ag({item:e,currentPath:t,expanded:n,onToggle:r,onNavigate:i,theme:a,depth:o=0}){let s=t===e.path,c=!!e.children&&e.children.length>0,l=o===0&&c;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(Ch,{selected:s,onClick:()=>{c&&r(e.path),i(e.path)},sx:{borderRadius:2,mb:.25,pl:o===0?1.5:1.5+o*2,pr:1,py:l?.6:.4,minHeight:l?36:32,"&.Mui-selected":{bgcolor:a.palette.primaryContainer,color:a.palette.onPrimaryContainer,"&:hover":{bgcolor:a.palette.primaryContainer},"& .MuiListItemText-primary":{fontWeight:600}},"&:hover:not(.Mui-selected)":{bgcolor:`action.hover`}},children:[(0,V.jsx)(Oh,{primary:e.label,slotProps:{primary:{fontSize:`0.8125rem`,fontWeight:l||s||Og(e.children,t)?600:400,color:l?`text.primary`:void 0,letterSpacing:l?`0.005em`:void 0}}}),c&&(0,V.jsx)(kp,{size:`small`,edge:`end`,onClick:t=>{t.stopPropagation(),r(e.path)},sx:{mr:-.5,opacity:.5},children:n?(0,V.jsx)(wg,{sx:{fontSize:18}}):(0,V.jsx)(Cg,{sx:{fontSize:18}})})]}),c&&(0,V.jsx)(Ef,{in:n,timeout:`auto`,unmountOnExit:!0,children:e.children.map(e=>(0,V.jsx)(Ag,{item:e,currentPath:t,expanded:!1,onToggle:r,onNavigate:i,theme:a,depth:o+1},e.path))})]})}var jg=zd((0,V.jsx)(`path`,{d:`M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z`}),`Menu`),Mg=Rh,Ng=[{heading:``,items:[{label:Mg.nav.home,path:`/`}]},{heading:Mg.sidebar.gettingStarted,items:[{label:Mg.nav.setup,path:`/setup`,children:[{label:Mg.nav.setupPrerequisites,path:`/setup/prerequisites`},{label:Mg.nav.setupDiscordPortal,path:`/setup/discord-portal`},{label:Mg.nav.setupBuilding,path:`/setup/building`},{label:Mg.nav.setupRunning,path:`/setup/running`},{label:Mg.nav.setupPublishing,path:`/setup/publishing`},{label:Mg.nav.setupCiCd,path:`/setup/ci-cd`}]},{label:Mg.nav.configuration,path:`/configuration`,children:[{label:Mg.nav.configurationKeys,path:`/configuration/keys`},{label:Mg.nav.configurationSources,path:`/configuration/sources`},{label:Mg.nav.configurationPermissions,path:`/configuration/permissions`}]}]},{heading:Mg.sidebar.reference,items:[{label:Mg.nav.architecture,path:`/architecture`,children:[{label:Mg.nav.architectureEntrypoint,path:`/architecture/entrypoint`},{label:Mg.nav.architectureDiscordClientService,path:`/architecture/discord-client-service`},{label:Mg.nav.architectureCommandSystem,path:`/architecture/command-system`},{label:Mg.nav.architectureComponentSystems,path:`/architecture/component-systems`},{label:Mg.nav.architectureFeatures,path:`/architecture/features`},{label:Mg.nav.architectureServices,path:`/architecture/services`},{label:Mg.nav.architectureDatabase,path:`/architecture/database`},{label:Mg.nav.architectureUtilities,path:`/architecture/utilities`},{label:Mg.nav.architectureConfigSystem,path:`/architecture/config-system`},{label:Mg.nav.architecturePatterns,path:`/architecture/patterns`}]}]},{heading:Mg.sidebar.development,items:[{label:Mg.nav.extending,path:`/extending`,children:[{label:Mg.nav.extendingNewCommand,path:`/extending/new-command`},{label:Mg.nav.extendingNewFeature,path:`/extending/new-feature`},{label:Mg.nav.extendingNewData,path:`/extending/new-data`},{label:Mg.nav.extendingStyleGuide,path:`/extending/style-guide`},{label:Mg.nav.extendingGotchas,path:`/extending/gotchas`}]}]}];function Pg(e,t){return e?e.some(e=>e.path===t||Pg(e.children,t)):!1}var Fg=48,Ig=(e,t)=>({position:`fixed`,bottom:0,left:0,right:0,zIndex:1200,bgcolor:`background.default`,borderTopLeftRadius:20,borderTopRightRadius:20,borderTop:1,borderLeft:1,borderRight:1,borderColor:`divider`,boxShadow:e?3:0,height:t,transition:`height 0.25s ease`,overflow:`hidden`,display:`flex`,flexDirection:`column`}),Lg={display:`flex`,alignItems:`center`,gap:1.5,px:2.5,height:Fg,cursor:`pointer`,flexShrink:0,touchAction:`none`},Rg={width:32,height:4,borderRadius:2,bgcolor:`text.secondary`,opacity:.35,flexShrink:0},zg={px:1.5,py:1,overflowY:`auto`,flexGrow:1,minHeight:0},Bg={borderColor:`divider`,mb:1},Vg={px:1.5,pt:1.5,pb:.5,fontSize:`0.65rem`,fontWeight:700,letterSpacing:`0.1em`,textTransform:`uppercase`,color:`text.secondary`,opacity:.5},Hg={sx:{fontSize:18}};function Ug(){let e=dt(),t=ct(),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(0),[o,s]=(0,_.useState)(()=>Ng.flatMap(e=>e.items).find(e=>e.children&&(e.path===t.pathname||Pg(e.children,t.pathname)))?.path??null),c=(0,_.useRef)(null),l=(0,_.useRef)(null),u=(0,_.useRef)({startY:0,active:!1,moved:!1}),d=(0,_.useMemo)(()=>Ng.flatMap(e=>e.items).flatMap(e=>e.children?[e,...e.children]:[e]).find(e=>e.path===t.pathname),[t.pathname]),f=(0,_.useCallback)(t=>{e(t),r(!1)},[e]),p=(0,_.useCallback)(e=>{s(e)},[]),m=(0,_.useCallback)(()=>r(!1),[]);(0,_.useEffect)(()=>{let e=Ng.flatMap(e=>e.items).find(e=>e.children&&(e.path===t.pathname||Pg(e.children,t.pathname)));s(e?.path??null)},[t.pathname]),(0,_.useEffect)(()=>{let e=()=>{if(!l.current)return;let e=l.current.scrollHeight;e>0&&a(Math.min(49+e,window.innerHeight*.8))};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let h=(0,_.useMemo)(()=>i||Math.round(window.innerHeight*.35),[i]),g=n?`${h}px`:`${Fg}px`,v=(0,_.useCallback)(e=>{u.current={startY:e.touches[0].clientY,active:!0,moved:!1},c.current&&(c.current.style.transition=`none`)},[]),y=(0,_.useCallback)(e=>{if(!u.current.active)return;let t=u.current.startY-e.touches[0].clientY;Math.abs(t)>3&&(u.current.moved=!0);let r=h,i=Math.round(Math.max(Fg,Math.min(r,(n?r:Fg)+t)));c.current&&(c.current.style.height=`${i}px`)},[h,n]),b=(0,_.useCallback)(()=>{u.current.active=!1;let e=c.current;if(!e)return;let t=e.offsetHeight,n=(h+Fg)/2;e.style.transition=``,e.style.height=``,r(t>n)},[h]),x=(0,_.useCallback)(()=>{u.current.moved||r(e=>!e)},[]);return(0,V.jsxs)(Q,{sx:{display:{xs:`block`,md:`none`}},children:[n&&(0,V.jsx)(Q,{onClick:m,sx:{position:`fixed`,inset:0,zIndex:1199,bgcolor:`rgba(0,0,0,0.4)`}}),(0,V.jsxs)(Q,{ref:c,sx:Ig(n,g),children:[(0,V.jsxs)(Q,{onTouchStart:v,onTouchMove:y,onTouchEnd:b,onClick:x,sx:Lg,children:[(0,V.jsx)(Q,{sx:Rg}),(0,V.jsx)(Fp,{variant:`body2`,noWrap:!0,sx:{flexGrow:1,fontWeight:500,color:`text.secondary`},children:d?.label??`Navigation`}),(0,V.jsx)(jg,{sx:{fontSize:20,color:`text.secondary`}})]}),(0,V.jsxs)(Q,{ref:l,sx:zg,children:[(0,V.jsx)(th,{sx:Bg}),Ng.map((e,t)=>(0,V.jsxs)(Q,{sx:{mb:e.heading?.5:0},children:[e.heading&&(0,V.jsx)(Fp,{sx:Vg,children:e.heading}),e.items.map(e=>(0,V.jsx)(Wg,{item:e,expanded:o===e.path,onToggle:p,onNavigate:f},e.path))]},e.heading||`section-${t}`))]})]})]})}var Wg=(0,_.memo)(function e({item:t,expanded:n,onToggle:r,onNavigate:i,depth:a=0}){let o=Qu(),s=ct().pathname,c=s===t.path,l=!!t.children&&t.children.length>0,u=a===0&&l,d=(0,_.useMemo)(()=>Pg(t.children,s),[t.children,s]),f=u||c||d?600:400,p=(0,_.useCallback)(()=>{l&&r(t.path),i(t.path)},[l,t.path,r,i]),m=(0,_.useCallback)(e=>{e.stopPropagation(),r(t.path)},[t.path,r]),h=(0,_.useMemo)(()=>({borderRadius:2,mb:.25,pl:a===0?1.5:1.5+a*2,pr:1,py:u?.6:.4,minHeight:u?36:32,...t.path===`/`&&{"& .MuiListItemText-primary":{fontWeight:600}},"&.Mui-selected":{bgcolor:o.palette.primaryContainer,color:o.palette.onPrimaryContainer,"&:hover":{bgcolor:o.palette.primaryContainer},"& .MuiListItemText-primary":{fontWeight:600}},"&:hover:not(.Mui-selected)":{bgcolor:`action.hover`}}),[a,u,t.path,o]),g=(0,_.useMemo)(()=>({primary:{fontSize:`0.8125rem`,fontWeight:f}}),[f]),v=(0,_.useMemo)(()=>({mr:-.5,opacity:.5}),[]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(Ch,{selected:c,onClick:p,sx:h,children:[(0,V.jsx)(Oh,{primary:t.label,slotProps:g}),l&&(0,V.jsx)(kp,{size:`small`,edge:`end`,onClick:m,sx:v,children:n?(0,V.jsx)(wg,{...Hg}):(0,V.jsx)(Cg,{...Hg})})]}),l&&(0,V.jsx)(Ef,{in:n,timeout:`auto`,unmountOnExit:!0,children:t.children.map(t=>(0,V.jsx)(e,{item:t,expanded:!1,onToggle:r,onNavigate:i,depth:a+1},t.path))})]})});function Gg({href:e,children:t,...n}){let r=dt(),i=Qu();return e?.startsWith(`http`)?(0,V.jsx)(Q,{component:`a`,href:e,target:`_blank`,rel:`noopener noreferrer`,sx:{color:i.palette.primary.main,textDecoration:`underline`,cursor:`pointer`,"&:hover":{opacity:.82}},...n,children:t}):(0,V.jsx)(Q,{component:`a`,href:e,onClick:t=>{t.preventDefault(),e&&r(e)},sx:{color:i.palette.primary.main,textDecoration:`underline`,textDecorationColor:i.palette.primary.main,cursor:`pointer`,"&:hover":{textDecoration:`underline`,opacity:.82}},...n,children:t})}function Kg(e){return{a:Gg,pre:(({children:t,...n})=>(0,V.jsx)(Q,{component:`pre`,...n,sx:{overflowX:`auto`,whiteSpace:`pre`,bgcolor:e?`rgba(215,185,174,0.06)`:`rgba(141,107,94,0.05)`,border:1,borderColor:`divider`,borderRadius:3,px:{xs:2,sm:3},py:2.5,my:2.5,fontSize:{xs:`0.8125rem`,sm:`0.875rem`},lineHeight:1.6,fontFamily:`'JetBrains Mono', 'Fira Code', 'Consolas', monospace`,"& code":{bgcolor:`transparent !important`,padding:`0 !important`,fontSize:`inherit`}},children:t})),code:(({className:t,children:n,...r})=>t?(0,V.jsx)(`code`,{className:t,...r,children:n}):(0,V.jsx)(`code`,{...r,style:{backgroundColor:e?`rgba(215,185,174,0.12)`:`rgba(141,107,94,0.1)`,padding:`0.15em 0.4em`,borderRadius:6,fontSize:`0.85em`,fontFamily:`'JetBrains Mono', 'Fira Code', 'Consolas', monospace`,wordBreak:`break-word`},children:n})),table:(({children:e})=>(0,V.jsx)(`div`,{style:{overflowX:`auto`,margin:`16px 0`,borderRadius:12,border:`1px solid ${Qu().palette.divider}`,width:`100%`,maxWidth:`100%`},children:(0,V.jsx)(`table`,{style:{minWidth:600,borderCollapse:`collapse`,fontSize:`0.875rem`,width:`100%`},children:e})})),thead:(({children:e})=>(0,V.jsx)(`thead`,{children:e})),tbody:(({children:e})=>(0,V.jsx)(`tbody`,{children:e})),tr:(({children:e})=>(0,V.jsx)(`tr`,{children:e})),th:(({children:e,style:t,...n})=>(0,V.jsx)(`th`,{...n,style:{...t,textAlign:`left`,fontWeight:600,padding:`8px 12px`,borderBottom:`1px solid ${Qu().palette.divider}`,fontSize:`0.875rem`},children:e})),td:(({children:e,style:t,...n})=>{let r=Qu().palette.divider;return(0,V.jsx)(`td`,{...n,style:{...t,textAlign:`left`,padding:`8px 12px`,borderBottom:`1px solid ${r}`,fontSize:`0.875rem`},children:e})}),blockquote:(({children:t})=>{let n=Qu();return(0,V.jsx)(`blockquote`,{style:{backgroundColor:e?`rgba(215,185,174,0.08)`:`rgba(141,107,94,0.06)`,borderLeft:`4px solid ${n.palette.primary.main}`,color:n.palette.text.secondary},children:t})}),hr:(()=>(0,V.jsx)(`hr`,{style:{backgroundColor:Qu().palette.divider}}))}}var qg=`shiggybot-docs:sidebar-width`,Jg=200,Yg=400,Xg=260;function Zg(){try{let e=localStorage.getItem(qg);if(e){let t=Number(e);if(t>=Jg&&t<=Yg)return t}}catch{}return Xg}function Qg({onToggleTheme:e,isDark:t}){let n=Qu(),r=ct(),i=(0,_.useRef)(null),[a,o]=(0,_.useState)(Zg);(0,_.useEffect)(()=>{i.current?.scrollTo(0,0)},[r.pathname]);let s=(0,_.useCallback)(e=>{let t=Math.min(Yg,Math.max(Jg,e));o(t);try{localStorage.setItem(qg,String(t))}catch{}},[]),c=(0,_.useMemo)(()=>Kg(t),[t]);return(0,_.useEffect)(()=>{let e=e=>{e.key===`Escape`&&s(Xg)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[s]),(0,V.jsxs)(Q,{sx:{display:`flex`,height:`100vh`,overflow:`hidden`,bgcolor:`background.default`,color:`text.primary`},children:[(0,V.jsx)(Zh,{drawerWidth:a,onToggleTheme:e,isDark:t}),(0,V.jsx)(kg,{drawerWidth:a,onResize:s}),(0,V.jsxs)(Q,{component:`main`,ref:i,sx:{flexGrow:1,width:{md:`calc(100% - ${a}px)`},height:`100vh`,overflowY:`auto`,minWidth:0},children:[(0,V.jsx)(Mh,{}),(0,V.jsx)(Q,{className:`doc-content`,sx:{maxWidth:900,mx:`auto`,px:{xs:2,sm:3,md:5},py:{xs:2.5,md:5},pb:{xs:`72px`,md:5},"& code:not(pre code)":{bgcolor:t?`rgba(215,185,174,0.12)`:`rgba(141,107,94,0.1)`},"& blockquote":{bgcolor:t?`rgba(215,185,174,0.08)`:`rgba(141,107,94,0.06)`,borderLeft:`4px solid ${n.palette.primary.main}`,color:n.palette.text.secondary},"& hr":{bgcolor:n.palette.divider}},children:(0,V.jsx)(Sg,{components:c,children:(0,V.jsx)(Rt,{})})})]}),(0,V.jsx)(Ug,{})]})}var $g=(0,_.lazy)(()=>S(()=>import(`./IndexPage-CTzdjKUy.js`),[])),e_=(0,_.lazy)(()=>S(()=>import(`./PrerequisitesPage-DCTd4HCa.js`),[])),t_=(0,_.lazy)(()=>S(()=>import(`./DiscordPortalPage-EfLpAaZ0.js`),[])),n_=(0,_.lazy)(()=>S(()=>import(`./BuildingPage-cvczRaiL.js`),[])),r_=(0,_.lazy)(()=>S(()=>import(`./RunningPage-C8Rw5tzG.js`),[])),i_=(0,_.lazy)(()=>S(()=>import(`./PublishingPage-YSjRuHtm.js`),[])),a_=(0,_.lazy)(()=>S(()=>import(`./CicdPage-CcOO2EDd.js`),[])),o_=(0,_.lazy)(()=>S(()=>import(`./IndexPage-BYGuEA7j.js`),[])),s_=(0,_.lazy)(()=>S(()=>import(`./KeysPage-Hweke_zC.js`),[])),c_=(0,_.lazy)(()=>S(()=>import(`./SourcesPage-CnnE_NGh.js`),[])),l_=(0,_.lazy)(()=>S(()=>import(`./PermissionsPage-iHaQ4SrR.js`),[])),u_=(0,_.lazy)(()=>S(()=>import(`./IndexPage-Bnfjqf4f.js`),[])),d_=(0,_.lazy)(()=>S(()=>import(`./EntrypointPage-VDvlV2se.js`),[])),f_=(0,_.lazy)(()=>S(()=>import(`./DiscordClientServicePage-Btg-cPze.js`),[])),p_=(0,_.lazy)(()=>S(()=>import(`./CommandSystemPage-CC8qrDQ6.js`),[])),m_=(0,_.lazy)(()=>S(()=>import(`./ComponentSystemsPage-BK6owiq-.js`),[])),h_=(0,_.lazy)(()=>S(()=>import(`./FeaturesPage-Bf8-ByBy.js`),[])),g_=(0,_.lazy)(()=>S(()=>import(`./ServicesPage-B66vHKpo.js`),[])),__=(0,_.lazy)(()=>S(()=>import(`./DatabasePage-DvU8Y_kL.js`),[])),v_=(0,_.lazy)(()=>S(()=>import(`./UtilitiesPage-DOo8OBWj.js`),[])),y_=(0,_.lazy)(()=>S(()=>import(`./ConfigSystemPage-B6Biir_R.js`),[])),b_=(0,_.lazy)(()=>S(()=>import(`./PatternsPage-DBfNQTn_.js`),[])),x_=(0,_.lazy)(()=>S(()=>import(`./IndexPage-DDHPHvaV.js`),[])),S_=(0,_.lazy)(()=>S(()=>import(`./NewCommandPage-NFULy1zE.js`),[])),C_=(0,_.lazy)(()=>S(()=>import(`./NewFeaturePage-Br5JwwtG.js`),[])),w_=(0,_.lazy)(()=>S(()=>import(`./NewDataPage-BI_R1SXY.js`),[])),T_=(0,_.lazy)(()=>S(()=>import(`./StyleGuidePage-U7Ore8ny.js`),[])),E_=(0,_.lazy)(()=>S(()=>import(`./GotchasPage-DylY3ewM.js`),[]));function D_(){return(0,V.jsx)(Q,{sx:{display:`flex`,justifyContent:`center`,py:8},children:(0,V.jsx)(Cp,{})})}function O_(){let[e,t]=(0,_.useState)(!0);return(0,V.jsxs)(Nd,{theme:(0,_.useMemo)(()=>e?Lh:Ih,[e]),children:[(0,V.jsx)(bm,{}),(0,V.jsx)(Gh,{}),(0,V.jsx)(_.Suspense,{fallback:(0,V.jsx)(D_,{}),children:(0,V.jsxs)(Bt,{children:[(0,V.jsx)(L,{path:`/`,element:(0,V.jsx)(pg,{onToggleTheme:()=>t(e=>!e),isDark:e})}),(0,V.jsx)(L,{path:`/commands`,element:(0,V.jsx)(_g,{onToggleTheme:()=>t(e=>!e),isDark:e})}),(0,V.jsxs)(L,{element:(0,V.jsx)(Qg,{onToggleTheme:()=>t(e=>!e),isDark:e}),children:[(0,V.jsx)(L,{path:`/setup`,element:(0,V.jsx)($g,{})}),(0,V.jsx)(L,{path:`/setup/prerequisites`,element:(0,V.jsx)(e_,{})}),(0,V.jsx)(L,{path:`/setup/discord-portal`,element:(0,V.jsx)(t_,{})}),(0,V.jsx)(L,{path:`/setup/building`,element:(0,V.jsx)(n_,{})}),(0,V.jsx)(L,{path:`/setup/running`,element:(0,V.jsx)(r_,{})}),(0,V.jsx)(L,{path:`/setup/publishing`,element:(0,V.jsx)(i_,{})}),(0,V.jsx)(L,{path:`/setup/ci-cd`,element:(0,V.jsx)(a_,{})}),(0,V.jsx)(L,{path:`/configuration`,element:(0,V.jsx)(o_,{})}),(0,V.jsx)(L,{path:`/configuration/keys`,element:(0,V.jsx)(s_,{})}),(0,V.jsx)(L,{path:`/configuration/sources`,element:(0,V.jsx)(c_,{})}),(0,V.jsx)(L,{path:`/configuration/permissions`,element:(0,V.jsx)(l_,{})}),(0,V.jsx)(L,{path:`/architecture`,element:(0,V.jsx)(u_,{})}),(0,V.jsx)(L,{path:`/architecture/entrypoint`,element:(0,V.jsx)(d_,{})}),(0,V.jsx)(L,{path:`/architecture/discord-client-service`,element:(0,V.jsx)(f_,{})}),(0,V.jsx)(L,{path:`/architecture/command-system`,element:(0,V.jsx)(p_,{})}),(0,V.jsx)(L,{path:`/architecture/component-systems`,element:(0,V.jsx)(m_,{})}),(0,V.jsx)(L,{path:`/architecture/features`,element:(0,V.jsx)(h_,{})}),(0,V.jsx)(L,{path:`/architecture/services`,element:(0,V.jsx)(g_,{})}),(0,V.jsx)(L,{path:`/architecture/database`,element:(0,V.jsx)(__,{})}),(0,V.jsx)(L,{path:`/architecture/utilities`,element:(0,V.jsx)(v_,{})}),(0,V.jsx)(L,{path:`/architecture/config-system`,element:(0,V.jsx)(y_,{})}),(0,V.jsx)(L,{path:`/architecture/patterns`,element:(0,V.jsx)(b_,{})}),(0,V.jsx)(L,{path:`/extending`,element:(0,V.jsx)(x_,{})}),(0,V.jsx)(L,{path:`/extending/new-command`,element:(0,V.jsx)(S_,{})}),(0,V.jsx)(L,{path:`/extending/new-feature`,element:(0,V.jsx)(C_,{})}),(0,V.jsx)(L,{path:`/extending/new-data`,element:(0,V.jsx)(w_,{})}),(0,V.jsx)(L,{path:`/extending/style-guide`,element:(0,V.jsx)(T_,{})}),(0,V.jsx)(L,{path:`/extending/gotchas`,element:(0,V.jsx)(E_,{})})]}),(0,V.jsx)(L,{path:`*`,element:(0,V.jsx)(vg,{onToggleTheme:()=>t(e=>!e),isDark:e})})]})})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,V.jsx)(_.StrictMode,{children:(0,V.jsx)(Ir,{children:(0,V.jsx)(On,{children:(0,V.jsx)(O_,{})})})}));export{uo as n,xg as t};