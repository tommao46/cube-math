(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function K_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var td={exports:{}},$o={},nd={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function Z_(){if(Am)return mt;Am=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(O,ce,Ne){this.props=O,this.context=ce,this.refs=T,this.updater=Ne||M}S.prototype.isReactComponent={},S.prototype.setState=function(O,ce){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ce,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=S.prototype;function U(O,ce,Ne){this.props=O,this.context=ce,this.refs=T,this.updater=Ne||M}var L=U.prototype=new x;L.constructor=U,E(L,S.prototype),L.isPureReactComponent=!0;var b=Array.isArray,k=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function Y(O,ce,Ne){var re,he={},Ee=null,xe=null;if(ce!=null)for(re in ce.ref!==void 0&&(xe=ce.ref),ce.key!==void 0&&(Ee=""+ce.key),ce)k.call(ce,re)&&!F.hasOwnProperty(re)&&(he[re]=ce[re]);var Ce=arguments.length-2;if(Ce===1)he.children=Ne;else if(1<Ce){for(var Fe=Array(Ce),Ze=0;Ze<Ce;Ze++)Fe[Ze]=arguments[Ze+2];he.children=Fe}if(O&&O.defaultProps)for(re in Ce=O.defaultProps,Ce)he[re]===void 0&&(he[re]=Ce[re]);return{$$typeof:r,type:O,key:Ee,ref:xe,props:he,_owner:N.current}}function P(O,ce){return{$$typeof:r,type:O.type,key:ce,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function V(O){var ce={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ne){return ce[Ne]})}var fe=/\/+/g;function W(O,ce){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):ce.toString(36)}function ie(O,ce,Ne,re,he){var Ee=typeof O;(Ee==="undefined"||Ee==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case r:case e:xe=!0}}if(xe)return xe=O,he=he(xe),O=re===""?"."+W(xe,0):re,b(he)?(Ne="",O!=null&&(Ne=O.replace(fe,"$&/")+"/"),ie(he,ce,Ne,"",function(Ze){return Ze})):he!=null&&(C(he)&&(he=P(he,Ne+(!he.key||xe&&xe.key===he.key?"":(""+he.key).replace(fe,"$&/")+"/")+O)),ce.push(he)),1;if(xe=0,re=re===""?".":re+":",b(O))for(var Ce=0;Ce<O.length;Ce++){Ee=O[Ce];var Fe=re+W(Ee,Ce);xe+=ie(Ee,ce,Ne,Fe,he)}else if(Fe=y(O),typeof Fe=="function")for(O=Fe.call(O),Ce=0;!(Ee=O.next()).done;)Ee=Ee.value,Fe=re+W(Ee,Ce++),xe+=ie(Ee,ce,Ne,Fe,he);else if(Ee==="object")throw ce=String(O),Error("Objects are not valid as a React child (found: "+(ce==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ce)+"). If you meant to render a collection of children, use an array instead.");return xe}function G(O,ce,Ne){if(O==null)return O;var re=[],he=0;return ie(O,re,"","",function(Ee){return ce.call(Ne,Ee,he++)}),re}function X(O){if(O._status===-1){var ce=O._result;ce=ce(),ce.then(function(Ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ne)},function(Ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ne)}),O._status===-1&&(O._status=0,O._result=ce)}if(O._status===1)return O._result.default;throw O._result}var J={current:null},B={transition:null},se={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:B,ReactCurrentOwner:N};function ue(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:G,forEach:function(O,ce,Ne){G(O,function(){ce.apply(this,arguments)},Ne)},count:function(O){var ce=0;return G(O,function(){ce++}),ce},toArray:function(O){return G(O,function(ce){return ce})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},mt.Component=S,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=U,mt.StrictMode=s,mt.Suspense=f,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,mt.act=ue,mt.cloneElement=function(O,ce,Ne){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var re=E({},O.props),he=O.key,Ee=O.ref,xe=O._owner;if(ce!=null){if(ce.ref!==void 0&&(Ee=ce.ref,xe=N.current),ce.key!==void 0&&(he=""+ce.key),O.type&&O.type.defaultProps)var Ce=O.type.defaultProps;for(Fe in ce)k.call(ce,Fe)&&!F.hasOwnProperty(Fe)&&(re[Fe]=ce[Fe]===void 0&&Ce!==void 0?Ce[Fe]:ce[Fe])}var Fe=arguments.length-2;if(Fe===1)re.children=Ne;else if(1<Fe){Ce=Array(Fe);for(var Ze=0;Ze<Fe;Ze++)Ce[Ze]=arguments[Ze+2];re.children=Ce}return{$$typeof:r,type:O.type,key:he,ref:Ee,props:re,_owner:xe}},mt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},mt.createElement=Y,mt.createFactory=function(O){var ce=Y.bind(null,O);return ce.type=O,ce},mt.createRef=function(){return{current:null}},mt.forwardRef=function(O){return{$$typeof:d,render:O}},mt.isValidElement=C,mt.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:X}},mt.memo=function(O,ce){return{$$typeof:p,type:O,compare:ce===void 0?null:ce}},mt.startTransition=function(O){var ce=B.transition;B.transition={};try{O()}finally{B.transition=ce}},mt.unstable_act=ue,mt.useCallback=function(O,ce){return J.current.useCallback(O,ce)},mt.useContext=function(O){return J.current.useContext(O)},mt.useDebugValue=function(){},mt.useDeferredValue=function(O){return J.current.useDeferredValue(O)},mt.useEffect=function(O,ce){return J.current.useEffect(O,ce)},mt.useId=function(){return J.current.useId()},mt.useImperativeHandle=function(O,ce,Ne){return J.current.useImperativeHandle(O,ce,Ne)},mt.useInsertionEffect=function(O,ce){return J.current.useInsertionEffect(O,ce)},mt.useLayoutEffect=function(O,ce){return J.current.useLayoutEffect(O,ce)},mt.useMemo=function(O,ce){return J.current.useMemo(O,ce)},mt.useReducer=function(O,ce,Ne){return J.current.useReducer(O,ce,Ne)},mt.useRef=function(O){return J.current.useRef(O)},mt.useState=function(O){return J.current.useState(O)},mt.useSyncExternalStore=function(O,ce,Ne){return J.current.useSyncExternalStore(O,ce,Ne)},mt.useTransition=function(){return J.current.useTransition()},mt.version="18.3.1",mt}var Cm;function kf(){return Cm||(Cm=1,nd.exports=Z_()),nd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function Q_(){if(bm)return $o;bm=1;var r=kf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var m,v={},y=null,M=null;p!==void 0&&(y=""+p),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(M=f.ref);for(m in f)s.call(f,m)&&!l.hasOwnProperty(m)&&(v[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)v[m]===void 0&&(v[m]=f[m]);return{$$typeof:e,type:d,key:y,ref:M,props:v,_owner:o.current}}return $o.Fragment=t,$o.jsx=u,$o.jsxs=u,$o}var Pm;function J_(){return Pm||(Pm=1,td.exports=Q_()),td.exports}var g=J_(),z=kf();const Sl=K_(z);var Ml={},id={exports:{}},bn={},rd={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function ex(){return Lm||(Lm=1,(function(r){function e(B,se){var ue=B.length;B.push(se);e:for(;0<ue;){var O=ue-1>>>1,ce=B[O];if(0<o(ce,se))B[O]=se,B[ue]=ce,ue=O;else break e}}function t(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var se=B[0],ue=B.pop();if(ue!==se){B[0]=ue;e:for(var O=0,ce=B.length,Ne=ce>>>1;O<Ne;){var re=2*(O+1)-1,he=B[re],Ee=re+1,xe=B[Ee];if(0>o(he,ue))Ee<ce&&0>o(xe,he)?(B[O]=xe,B[Ee]=ue,O=Ee):(B[O]=he,B[re]=ue,O=re);else if(Ee<ce&&0>o(xe,ue))B[O]=xe,B[Ee]=ue,O=Ee;else break e}}return se}function o(B,se){var ue=B.sortIndex-se.sortIndex;return ue!==0?ue:B.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var f=[],p=[],m=1,v=null,y=3,M=!1,E=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var se=t(p);se!==null;){if(se.callback===null)s(p);else if(se.startTime<=B)s(p),se.sortIndex=se.expirationTime,e(f,se);else break;se=t(p)}}function b(B){if(T=!1,L(B),!E)if(t(f)!==null)E=!0,X(k);else{var se=t(p);se!==null&&J(b,se.startTime-B)}}function k(B,se){E=!1,T&&(T=!1,x(Y),Y=-1),M=!0;var ue=y;try{for(L(se),v=t(f);v!==null&&(!(v.expirationTime>se)||B&&!V());){var O=v.callback;if(typeof O=="function"){v.callback=null,y=v.priorityLevel;var ce=O(v.expirationTime<=se);se=r.unstable_now(),typeof ce=="function"?v.callback=ce:v===t(f)&&s(f),L(se)}else s(f);v=t(f)}if(v!==null)var Ne=!0;else{var re=t(p);re!==null&&J(b,re.startTime-se),Ne=!1}return Ne}finally{v=null,y=ue,M=!1}}var N=!1,F=null,Y=-1,P=5,C=-1;function V(){return!(r.unstable_now()-C<P)}function fe(){if(F!==null){var B=r.unstable_now();C=B;var se=!0;try{se=F(!0,B)}finally{se?W():(N=!1,F=null)}}else N=!1}var W;if(typeof U=="function")W=function(){U(fe)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,G=ie.port2;ie.port1.onmessage=fe,W=function(){G.postMessage(null)}}else W=function(){S(fe,0)};function X(B){F=B,N||(N=!0,W())}function J(B,se){Y=S(function(){B(r.unstable_now())},se)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,X(k))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(B){switch(y){case 1:case 2:case 3:var se=3;break;default:se=y}var ue=y;y=se;try{return B()}finally{y=ue}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,se){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ue=y;y=B;try{return se()}finally{y=ue}},r.unstable_scheduleCallback=function(B,se,ue){var O=r.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?O+ue:O):ue=O,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=ue+ce,B={id:m++,callback:se,priorityLevel:B,startTime:ue,expirationTime:ce,sortIndex:-1},ue>O?(B.sortIndex=ue,e(p,B),t(f)===null&&B===t(p)&&(T?(x(Y),Y=-1):T=!0,J(b,ue-O))):(B.sortIndex=ce,e(f,B),E||M||(E=!0,X(k))),B},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(B){var se=y;return function(){var ue=y;y=se;try{return B.apply(this,arguments)}finally{y=ue}}}})(sd)),sd}var Dm;function tx(){return Dm||(Dm=1,rd.exports=ex()),rd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function nx(){if(Um)return bn;Um=1;var r=kf(),e=tx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function y(n){return f.call(v,n)?!0:f.call(m,n)?!1:p.test(n)?v[n]=!0:(m[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,c,h,_,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=_,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,U);S[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,U);S[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,U);S[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,c){var h=S.hasOwnProperty(i)?S[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,c)&&(a=null),c||h===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),B=Symbol.iterator;function se(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,O;function ce(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Ne=!1;function re(n,i){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var h=oe.stack.split(`
`),_=c.stack.split(`
`),w=h.length-1,I=_.length-1;1<=w&&0<=I&&h[w]!==_[I];)I--;for(;1<=w&&0<=I;w--,I--)if(h[w]!==_[I]){if(w!==1||I!==1)do if(w--,I--,0>I||h[w]!==_[I]){var H=`
`+h[w].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=w&&0<=I);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ce(n):""}function he(n){switch(n.tag){case 5:return ce(n.type);case 16:return ce("Lazy");case 13:return ce("Suspense");case 19:return ce("SuspenseList");case 0:case 2:case 15:return n=re(n.type,!1),n;case 11:return n=re(n.type.render,!1),n;case 1:return n=re(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case N:return"Portal";case P:return"Profiler";case Y:return"StrictMode";case W:return"Suspense";case ie:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case fe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case X:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,_=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,_.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Tt(n){n._valueTracker||(n._valueTracker=Ze(n))}function ht(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function q(n,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Qt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ce(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Te(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Pe(n,i){Te(n,i);var a=Ce(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ot(n,i.type,a):i.hasOwnProperty("defaultValue")&&ot(n,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Oe(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ot(n,i,a){(i!=="number"||Ct(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ge=Array.isArray;function D(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ce(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function R(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ee(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ge(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ce(a)}}function me(n,i){var a=Ce(i.value),c=Ce(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ke(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,Be=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ct(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){He.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function tt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function nt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=tt(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var je=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(n,i){if(i){if(je[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function at(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function $(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,de=null,ge=null;function Ie(n){if(n=Do(n)){if(typeof Le!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Fa(i),Le(n.stateNode,n.type,i))}}function Ue(n){de?ge?ge.push(n):ge=[n]:de=n}function lt(){if(de){var n=de,i=ge;if(ge=de=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function Ut(n,i){return n(i)}function Xt(){}var xt=!1;function Mn(n,i,a){if(xt)return n(i,a);xt=!0;try{return Ut(n,i,a)}finally{xt=!1,(de!==null||ge!==null)&&(Xt(),lt())}}function gn(n,i){var a=n.stateNode;if(a===null)return null;var c=Fa(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ds=!1;if(d)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){ds=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{ds=!1}function Li(n,i,a,c,h,_,w,I,H){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(ye){this.onError(ye)}}var Di=!1,Ur=null,Ir=!1,nr=null,ga={onError:function(n){Di=!0,Ur=n}};function fs(n,i,a,c,h,_,w,I,H){Di=!1,Ur=null,Li.apply(ga,arguments)}function va(n,i,a,c,h,_,w,I,H){if(fs.apply(this,arguments),Di){if(Di){var oe=Ur;Di=!1,Ur=null}else throw Error(t(198));Ir||(Ir=!0,nr=oe)}}function _i(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function _a(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function xa(n){if(_i(n)!==n)throw Error(t(188))}function Ec(n){var i=n.alternate;if(!i){if(i=_i(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var _=h.alternate;if(_===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===_.child){for(_=h.child;_;){if(_===a)return xa(h),n;if(_===c)return xa(h),i;_=_.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=_;else{for(var w=!1,I=h.child;I;){if(I===a){w=!0,a=h,c=_;break}if(I===c){w=!0,c=h,a=_;break}I=I.sibling}if(!w){for(I=_.child;I;){if(I===a){w=!0,a=_,c=h;break}if(I===c){w=!0,c=_,a=h;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function A(n){return n=Ec(n),n!==null?K(n):null}function K(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=K(n);if(i!==null)return i;n=n.sibling}return null}var ae=e.unstable_scheduleCallback,le=e.unstable_cancelCallback,Z=e.unstable_shouldYield,Ae=e.unstable_requestPaint,we=e.unstable_now,Ye=e.unstable_getCurrentPriorityLevel,Xe=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,st=e.unstable_NormalPriority,qe=e.unstable_LowPriority,vt=e.unstable_IdlePriority,wt=null,gt=null;function ln(n){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(wt,n,void 0,(n.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Mt,Qe=Math.log,ni=Math.LN2;function Mt(n){return n>>>=0,n===0?32:31-(Qe(n)/ni|0)|0}var cn=64,ii=4194304;function $t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function xi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,_=n.pingedLanes,w=a&268435455;if(w!==0){var I=w&~h;I!==0?c=$t(I):(_&=w,_!==0&&(c=$t(_)))}else w=a&~h,w!==0?c=$t(w):_!==0&&(c=$t(_));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,_=i&-i,h>=_||h===16&&(_&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ut(i),h=1<<a,c|=n[a],i&=~h;return c}function Lt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,_=n.pendingLanes;0<_;){var w=31-ut(_),I=1<<w,H=h[w];H===-1?((I&a)===0||(I&c)!==0)&&(h[w]=Lt(I,i)):H<=i&&(n.expiredLanes|=I),_&=~I}}function Ui(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function vn(){var n=cn;return cn<<=1,(cn&4194240)===0&&(cn=64),n}function Vn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function En(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ut(i),n[i]=a}function ya(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-ut(a),_=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~_}}function Tc(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ut(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var bt=0;function sh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var oh,wc,ah,lh,ch,Rc=!1,Sa=[],ir=null,rr=null,sr=null,go=new Map,vo=new Map,or=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(n,i){switch(n){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":go.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(i.pointerId)}}function _o(n,i,a,c,h,_){return n===null||n.nativeEvent!==_?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:_,targetContainers:[h]},i!==null&&(i=Do(i),i!==null&&wc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function x0(n,i,a,c,h){switch(i){case"focusin":return ir=_o(ir,n,i,a,c,h),!0;case"dragenter":return rr=_o(rr,n,i,a,c,h),!0;case"mouseover":return sr=_o(sr,n,i,a,c,h),!0;case"pointerover":var _=h.pointerId;return go.set(_,_o(go.get(_)||null,n,i,a,c,h)),!0;case"gotpointercapture":return _=h.pointerId,vo.set(_,_o(vo.get(_)||null,n,i,a,c,h)),!0}return!1}function dh(n){var i=Nr(n.target);if(i!==null){var a=_i(i);if(a!==null){if(i=a.tag,i===13){if(i=_a(a),i!==null){n.blockedOn=i,ch(n.priority,function(){ah(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ma(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Cc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);At=c,a.target.dispatchEvent(c),At=null}else return i=Do(a),i!==null&&wc(i),n.blockedOn=a,!1;i.shift()}return!0}function fh(n,i,a){Ma(n)&&a.delete(i)}function y0(){Rc=!1,ir!==null&&Ma(ir)&&(ir=null),rr!==null&&Ma(rr)&&(rr=null),sr!==null&&Ma(sr)&&(sr=null),go.forEach(fh),vo.forEach(fh)}function xo(n,i){n.blockedOn===i&&(n.blockedOn=null,Rc||(Rc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,y0)))}function yo(n){function i(h){return xo(h,n)}if(0<Sa.length){xo(Sa[0],n);for(var a=1;a<Sa.length;a++){var c=Sa[a];c.blockedOn===n&&(c.blockedOn=null)}}for(ir!==null&&xo(ir,n),rr!==null&&xo(rr,n),sr!==null&&xo(sr,n),go.forEach(i),vo.forEach(i),a=0;a<or.length;a++)c=or[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<or.length&&(a=or[0],a.blockedOn===null);)dh(a),a.blockedOn===null&&or.shift()}var hs=b.ReactCurrentBatchConfig,Ea=!0;function S0(n,i,a,c){var h=bt,_=hs.transition;hs.transition=null;try{bt=1,Ac(n,i,a,c)}finally{bt=h,hs.transition=_}}function M0(n,i,a,c){var h=bt,_=hs.transition;hs.transition=null;try{bt=4,Ac(n,i,a,c)}finally{bt=h,hs.transition=_}}function Ac(n,i,a,c){if(Ea){var h=Cc(n,i,a,c);if(h===null)Wc(n,i,c,Ta,a),uh(n,c);else if(x0(h,n,i,a,c))c.stopPropagation();else if(uh(n,c),i&4&&-1<_0.indexOf(n)){for(;h!==null;){var _=Do(h);if(_!==null&&oh(_),_=Cc(n,i,a,c),_===null&&Wc(n,i,c,Ta,a),_===h)break;h=_}h!==null&&c.stopPropagation()}else Wc(n,i,c,null,a)}}var Ta=null;function Cc(n,i,a,c){if(Ta=null,n=$(c),n=Nr(n),n!==null)if(i=_i(n),i===null)n=null;else if(a=i.tag,a===13){if(n=_a(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ta=n,null}function hh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ye()){case Xe:return 1;case it:return 4;case st:case qe:return 16;case vt:return 536870912;default:return 16}default:return 16}}var ar=null,bc=null,wa=null;function ph(){if(wa)return wa;var n,i=bc,a=i.length,c,h="value"in ar?ar.value:ar.textContent,_=h.length;for(n=0;n<a&&i[n]===h[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===h[_-c];c++);return wa=h.slice(n,1<c?1-c:void 0)}function Ra(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Aa(){return!0}function mh(){return!1}function Nn(n){function i(a,c,h,_,w){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(_):_[I]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Aa:mh,this.isPropagationStopped=mh,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=Nn(ps),So=ue({},ps,{view:0,detail:0}),E0=Nn(So),Lc,Dc,Mo,Ca=ue({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Mo&&(Mo&&n.type==="mousemove"?(Lc=n.screenX-Mo.screenX,Dc=n.screenY-Mo.screenY):Dc=Lc=0,Mo=n),Lc)},movementY:function(n){return"movementY"in n?n.movementY:Dc}}),gh=Nn(Ca),T0=ue({},Ca,{dataTransfer:0}),w0=Nn(T0),R0=ue({},So,{relatedTarget:0}),Uc=Nn(R0),A0=ue({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),C0=Nn(A0),b0=ue({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),P0=Nn(b0),L0=ue({},ps,{data:0}),vh=Nn(L0),D0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=I0[n])?!!i[n]:!1}function Ic(){return N0}var F0=ue({},So,{key:function(n){if(n.key){var i=D0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ra(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?U0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(n){return n.type==="keypress"?Ra(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ra(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),O0=Nn(F0),k0=ue({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_h=Nn(k0),B0=ue({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),z0=Nn(B0),H0=ue({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=Nn(H0),G0=ue({},Ca,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=Nn(G0),W0=[9,13,27,32],Nc=d&&"CompositionEvent"in window,Eo=null;d&&"documentMode"in document&&(Eo=document.documentMode);var X0=d&&"TextEvent"in window&&!Eo,xh=d&&(!Nc||Eo&&8<Eo&&11>=Eo),yh=" ",Sh=!1;function Mh(n,i){switch(n){case"keyup":return W0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function $0(n,i){switch(n){case"compositionend":return Eh(i);case"keypress":return i.which!==32?null:(Sh=!0,yh);case"textInput":return n=i.data,n===yh&&Sh?null:n;default:return null}}function Y0(n,i){if(ms)return n==="compositionend"||!Nc&&Mh(n,i)?(n=ph(),wa=bc=ar=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xh&&i.locale!=="ko"?null:i.data;default:return null}}var q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!q0[n.type]:i==="textarea"}function wh(n,i,a,c){Ue(c),i=Ua(i,"onChange"),0<i.length&&(a=new Pc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var To=null,wo=null;function K0(n){Gh(n,0)}function ba(n){var i=ys(n);if(ht(i))return n}function Z0(n,i){if(n==="change")return i}var Rh=!1;if(d){var Fc;if(d){var Oc="oninput"in document;if(!Oc){var Ah=document.createElement("div");Ah.setAttribute("oninput","return;"),Oc=typeof Ah.oninput=="function"}Fc=Oc}else Fc=!1;Rh=Fc&&(!document.documentMode||9<document.documentMode)}function Ch(){To&&(To.detachEvent("onpropertychange",bh),wo=To=null)}function bh(n){if(n.propertyName==="value"&&ba(wo)){var i=[];wh(i,wo,n,$(n)),Mn(K0,i)}}function Q0(n,i,a){n==="focusin"?(Ch(),To=i,wo=a,To.attachEvent("onpropertychange",bh)):n==="focusout"&&Ch()}function J0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ba(wo)}function e_(n,i){if(n==="click")return ba(i)}function t_(n,i){if(n==="input"||n==="change")return ba(i)}function n_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ri=typeof Object.is=="function"?Object.is:n_;function Ro(n,i){if(ri(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!f.call(i,h)||!ri(n[h],i[h]))return!1}return!0}function Ph(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Lh(n,i){var a=Ph(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ph(a)}}function Dh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Dh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Uh(){for(var n=window,i=Ct();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ct(n.document)}return i}function kc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function i_(n){var i=Uh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Dh(a.ownerDocument.documentElement,a)){if(c!==null&&kc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,_=Math.min(c.start,h);c=c.end===void 0?_:Math.min(c.end,h),!n.extend&&_>c&&(h=c,c=_,_=h),h=Lh(a,_);var w=Lh(a,c);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),_>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var r_=d&&"documentMode"in document&&11>=document.documentMode,gs=null,Bc=null,Ao=null,zc=!1;function Ih(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zc||gs==null||gs!==Ct(c)||(c=gs,"selectionStart"in c&&kc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ao&&Ro(Ao,c)||(Ao=c,c=Ua(Bc,"onSelect"),0<c.length&&(i=new Pc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=gs)))}function Pa(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var vs={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},Hc={},Nh={};d&&(Nh=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function La(n){if(Hc[n])return Hc[n];if(!vs[n])return n;var i=vs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Nh)return Hc[n]=i[a];return n}var Fh=La("animationend"),Oh=La("animationiteration"),kh=La("animationstart"),Bh=La("transitionend"),zh=new Map,Hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(n,i){zh.set(n,i),l(i,[n])}for(var Vc=0;Vc<Hh.length;Vc++){var Gc=Hh[Vc],s_=Gc.toLowerCase(),o_=Gc[0].toUpperCase()+Gc.slice(1);lr(s_,"on"+o_)}lr(Fh,"onAnimationEnd"),lr(Oh,"onAnimationIteration"),lr(kh,"onAnimationStart"),lr("dblclick","onDoubleClick"),lr("focusin","onFocus"),lr("focusout","onBlur"),lr(Bh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function Vh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,va(c,i,void 0,n),n.currentTarget=null}function Gh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var _=void 0;if(i)for(var w=c.length-1;0<=w;w--){var I=c[w],H=I.instance,oe=I.currentTarget;if(I=I.listener,H!==_&&h.isPropagationStopped())break e;Vh(h,I,oe),_=H}else for(w=0;w<c.length;w++){if(I=c[w],H=I.instance,oe=I.currentTarget,I=I.listener,H!==_&&h.isPropagationStopped())break e;Vh(h,I,oe),_=H}}}if(Ir)throw n=nr,Ir=!1,nr=null,n}function It(n,i){var a=i[Zc];a===void 0&&(a=i[Zc]=new Set);var c=n+"__bubble";a.has(c)||(jh(i,n,2,!1),a.add(c))}function jc(n,i,a){var c=0;i&&(c|=4),jh(a,n,c,i)}var Da="_reactListening"+Math.random().toString(36).slice(2);function bo(n){if(!n[Da]){n[Da]=!0,s.forEach(function(a){a!=="selectionchange"&&(a_.has(a)||jc(a,!1,n),jc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Da]||(i[Da]=!0,jc("selectionchange",!1,i))}}function jh(n,i,a,c){switch(hh(i)){case 1:var h=S0;break;case 4:h=M0;break;default:h=Ac}a=h.bind(null,i,a,n),h=void 0,!ds||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Wc(n,i,a,c,h){var _=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var I=c.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(w===4)for(w=c.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===h||H.nodeType===8&&H.parentNode===h))return;w=w.return}for(;I!==null;){if(w=Nr(I),w===null)return;if(H=w.tag,H===5||H===6){c=_=w;continue e}I=I.parentNode}}c=c.return}Mn(function(){var oe=_,ye=$(a),Se=[];e:{var _e=zh.get(n);if(_e!==void 0){var ze=Pc,We=n;switch(n){case"keypress":if(Ra(a)===0)break e;case"keydown":case"keyup":ze=O0;break;case"focusin":We="focus",ze=Uc;break;case"focusout":We="blur",ze=Uc;break;case"beforeblur":case"afterblur":ze=Uc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=w0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=z0;break;case Fh:case Oh:case kh:ze=C0;break;case Bh:ze=V0;break;case"scroll":ze=E0;break;case"wheel":ze=j0;break;case"copy":case"cut":case"paste":ze=P0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=_h}var $e=(i&4)!==0,Gt=!$e&&n==="scroll",Q=$e?_e!==null?_e+"Capture":null:_e;$e=[];for(var j=oe,te;j!==null;){te=j;var Re=te.stateNode;if(te.tag===5&&Re!==null&&(te=Re,Q!==null&&(Re=gn(j,Q),Re!=null&&$e.push(Po(j,Re,te)))),Gt)break;j=j.return}0<$e.length&&(_e=new ze(_e,We,null,a,ye),Se.push({event:_e,listeners:$e}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",_e&&a!==At&&(We=a.relatedTarget||a.fromElement)&&(Nr(We)||We[Ii]))break e;if((ze||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,ze?(We=a.relatedTarget||a.toElement,ze=oe,We=We?Nr(We):null,We!==null&&(Gt=_i(We),We!==Gt||We.tag!==5&&We.tag!==6)&&(We=null)):(ze=null,We=oe),ze!==We)){if($e=gh,Re="onMouseLeave",Q="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&($e=_h,Re="onPointerLeave",Q="onPointerEnter",j="pointer"),Gt=ze==null?_e:ys(ze),te=We==null?_e:ys(We),_e=new $e(Re,j+"leave",ze,a,ye),_e.target=Gt,_e.relatedTarget=te,Re=null,Nr(ye)===oe&&($e=new $e(Q,j+"enter",We,a,ye),$e.target=te,$e.relatedTarget=Gt,Re=$e),Gt=Re,ze&&We)t:{for($e=ze,Q=We,j=0,te=$e;te;te=_s(te))j++;for(te=0,Re=Q;Re;Re=_s(Re))te++;for(;0<j-te;)$e=_s($e),j--;for(;0<te-j;)Q=_s(Q),te--;for(;j--;){if($e===Q||Q!==null&&$e===Q.alternate)break t;$e=_s($e),Q=_s(Q)}$e=null}else $e=null;ze!==null&&Wh(Se,_e,ze,$e,!1),We!==null&&Gt!==null&&Wh(Se,Gt,We,$e,!0)}}e:{if(_e=oe?ys(oe):window,ze=_e.nodeName&&_e.nodeName.toLowerCase(),ze==="select"||ze==="input"&&_e.type==="file")var Ke=Z0;else if(Th(_e))if(Rh)Ke=t_;else{Ke=J0;var Je=Q0}else(ze=_e.nodeName)&&ze.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ke=e_);if(Ke&&(Ke=Ke(n,oe))){wh(Se,Ke,a,ye);break e}Je&&Je(n,_e,oe),n==="focusout"&&(Je=_e._wrapperState)&&Je.controlled&&_e.type==="number"&&ot(_e,"number",_e.value)}switch(Je=oe?ys(oe):window,n){case"focusin":(Th(Je)||Je.contentEditable==="true")&&(gs=Je,Bc=oe,Ao=null);break;case"focusout":Ao=Bc=gs=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,Ih(Se,a,ye);break;case"selectionchange":if(r_)break;case"keydown":case"keyup":Ih(Se,a,ye)}var et;if(Nc)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ms?Mh(n,a)&&(rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(xh&&a.locale!=="ko"&&(ms||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ms&&(et=ph()):(ar=ye,bc="value"in ar?ar.value:ar.textContent,ms=!0)),Je=Ua(oe,rt),0<Je.length&&(rt=new vh(rt,n,null,a,ye),Se.push({event:rt,listeners:Je}),et?rt.data=et:(et=Eh(a),et!==null&&(rt.data=et)))),(et=X0?$0(n,a):Y0(n,a))&&(oe=Ua(oe,"onBeforeInput"),0<oe.length&&(ye=new vh("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:oe}),ye.data=et))}Gh(Se,i)})}function Po(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ua(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,_=h.stateNode;h.tag===5&&_!==null&&(h=_,_=gn(n,a),_!=null&&c.unshift(Po(n,_,h)),_=gn(n,i),_!=null&&c.push(Po(n,_,h))),n=n.return}return c}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wh(n,i,a,c,h){for(var _=i._reactName,w=[];a!==null&&a!==c;){var I=a,H=I.alternate,oe=I.stateNode;if(H!==null&&H===c)break;I.tag===5&&oe!==null&&(I=oe,h?(H=gn(a,_),H!=null&&w.unshift(Po(a,H,I))):h||(H=gn(a,_),H!=null&&w.push(Po(a,H,I)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var l_=/\r\n?/g,c_=/\u0000|\uFFFD/g;function Xh(n){return(typeof n=="string"?n:""+n).replace(l_,`
`).replace(c_,"")}function Ia(n,i,a){if(i=Xh(i),Xh(n)!==i&&a)throw Error(t(425))}function Na(){}var Xc=null,$c=null;function Yc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var qc=typeof setTimeout=="function"?setTimeout:void 0,u_=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,d_=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(n){return $h.resolve(null).then(n).catch(f_)}:qc;function f_(n){setTimeout(function(){throw n})}function Kc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),yo(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);yo(i)}function cr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Yh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),yi="__reactFiber$"+xs,Lo="__reactProps$"+xs,Ii="__reactContainer$"+xs,Zc="__reactEvents$"+xs,h_="__reactListeners$"+xs,p_="__reactHandles$"+xs;function Nr(n){var i=n[yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ii]||a[yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Yh(n);n!==null;){if(a=n[yi])return a;n=Yh(n)}return i}n=a,a=n.parentNode}return null}function Do(n){return n=n[yi]||n[Ii],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fa(n){return n[Lo]||null}var Qc=[],Ss=-1;function ur(n){return{current:n}}function Nt(n){0>Ss||(n.current=Qc[Ss],Qc[Ss]=null,Ss--)}function Dt(n,i){Ss++,Qc[Ss]=n.current,n.current=i}var dr={},un=ur(dr),Tn=ur(!1),Fr=dr;function Ms(n,i){var a=n.type.contextTypes;if(!a)return dr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},_;for(_ in a)h[_]=i[_];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function wn(n){return n=n.childContextTypes,n!=null}function Oa(){Nt(Tn),Nt(un)}function qh(n,i,a){if(un.current!==dr)throw Error(t(168));Dt(un,i),Dt(Tn,a)}function Kh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,xe(n)||"Unknown",h));return ue({},a,c)}function ka(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||dr,Fr=un.current,Dt(un,n),Dt(Tn,Tn.current),!0}function Zh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Kh(n,i,Fr),c.__reactInternalMemoizedMergedChildContext=n,Nt(Tn),Nt(un),Dt(un,n)):Nt(Tn),Dt(Tn,a)}var Ni=null,Ba=!1,Jc=!1;function Qh(n){Ni===null?Ni=[n]:Ni.push(n)}function m_(n){Ba=!0,Qh(n)}function fr(){if(!Jc&&Ni!==null){Jc=!0;var n=0,i=bt;try{var a=Ni;for(bt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ni=null,Ba=!1}catch(h){throw Ni!==null&&(Ni=Ni.slice(n+1)),ae(Xe,fr),h}finally{bt=i,Jc=!1}}return null}var Es=[],Ts=0,za=null,Ha=0,Gn=[],jn=0,Or=null,Fi=1,Oi="";function kr(n,i){Es[Ts++]=Ha,Es[Ts++]=za,za=n,Ha=i}function Jh(n,i,a){Gn[jn++]=Fi,Gn[jn++]=Oi,Gn[jn++]=Or,Or=n;var c=Fi;n=Oi;var h=32-ut(c)-1;c&=~(1<<h),a+=1;var _=32-ut(i)+h;if(30<_){var w=h-h%5;_=(c&(1<<w)-1).toString(32),c>>=w,h-=w,Fi=1<<32-ut(i)+h|a<<h|c,Oi=_+n}else Fi=1<<_|a<<h|c,Oi=n}function eu(n){n.return!==null&&(kr(n,1),Jh(n,1,0))}function tu(n){for(;n===za;)za=Es[--Ts],Es[Ts]=null,Ha=Es[--Ts],Es[Ts]=null;for(;n===Or;)Or=Gn[--jn],Gn[jn]=null,Oi=Gn[--jn],Gn[jn]=null,Fi=Gn[--jn],Gn[jn]=null}var Fn=null,On=null,Ft=!1,si=null;function ep(n,i){var a=Yn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function tp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Fn=n,On=cr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Fn=n,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Or!==null?{id:Fi,overflow:Oi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Yn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Fn=n,On=null,!0):!1;default:return!1}}function nu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function iu(n){if(Ft){var i=On;if(i){var a=i;if(!tp(n,i)){if(nu(n))throw Error(t(418));i=cr(a.nextSibling);var c=Fn;i&&tp(n,i)?ep(c,a):(n.flags=n.flags&-4097|2,Ft=!1,Fn=n)}}else{if(nu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ft=!1,Fn=n}}}function np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function Va(n){if(n!==Fn)return!1;if(!Ft)return np(n),Ft=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Yc(n.type,n.memoizedProps)),i&&(i=On)){if(nu(n))throw ip(),Error(t(418));for(;i;)ep(n,i),i=cr(i.nextSibling)}if(np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){On=cr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}On=null}}else On=Fn?cr(n.stateNode.nextSibling):null;return!0}function ip(){for(var n=On;n;)n=cr(n.nextSibling)}function ws(){On=Fn=null,Ft=!1}function ru(n){si===null?si=[n]:si.push(n)}var g_=b.ReactCurrentBatchConfig;function Uo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,_=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===_?i.ref:(i=function(w){var I=h.refs;w===null?delete I[_]:I[_]=w},i._stringRef=_,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ga(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function rp(n){var i=n._init;return i(n._payload)}function sp(n){function i(Q,j){if(n){var te=Q.deletions;te===null?(Q.deletions=[j],Q.flags|=16):te.push(j)}}function a(Q,j){if(!n)return null;for(;j!==null;)i(Q,j),j=j.sibling;return null}function c(Q,j){for(Q=new Map;j!==null;)j.key!==null?Q.set(j.key,j):Q.set(j.index,j),j=j.sibling;return Q}function h(Q,j){return Q=yr(Q,j),Q.index=0,Q.sibling=null,Q}function _(Q,j,te){return Q.index=te,n?(te=Q.alternate,te!==null?(te=te.index,te<j?(Q.flags|=2,j):te):(Q.flags|=2,j)):(Q.flags|=1048576,j)}function w(Q){return n&&Q.alternate===null&&(Q.flags|=2),Q}function I(Q,j,te,Re){return j===null||j.tag!==6?(j=qu(te,Q.mode,Re),j.return=Q,j):(j=h(j,te),j.return=Q,j)}function H(Q,j,te,Re){var Ke=te.type;return Ke===F?ye(Q,j,te.props.children,Re,te.key):j!==null&&(j.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===X&&rp(Ke)===j.type)?(Re=h(j,te.props),Re.ref=Uo(Q,j,te),Re.return=Q,Re):(Re=hl(te.type,te.key,te.props,null,Q.mode,Re),Re.ref=Uo(Q,j,te),Re.return=Q,Re)}function oe(Q,j,te,Re){return j===null||j.tag!==4||j.stateNode.containerInfo!==te.containerInfo||j.stateNode.implementation!==te.implementation?(j=Ku(te,Q.mode,Re),j.return=Q,j):(j=h(j,te.children||[]),j.return=Q,j)}function ye(Q,j,te,Re,Ke){return j===null||j.tag!==7?(j=Xr(te,Q.mode,Re,Ke),j.return=Q,j):(j=h(j,te),j.return=Q,j)}function Se(Q,j,te){if(typeof j=="string"&&j!==""||typeof j=="number")return j=qu(""+j,Q.mode,te),j.return=Q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case k:return te=hl(j.type,j.key,j.props,null,Q.mode,te),te.ref=Uo(Q,null,j),te.return=Q,te;case N:return j=Ku(j,Q.mode,te),j.return=Q,j;case X:var Re=j._init;return Se(Q,Re(j._payload),te)}if(Ge(j)||se(j))return j=Xr(j,Q.mode,te,null),j.return=Q,j;Ga(Q,j)}return null}function _e(Q,j,te,Re){var Ke=j!==null?j.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ke!==null?null:I(Q,j,""+te,Re);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case k:return te.key===Ke?H(Q,j,te,Re):null;case N:return te.key===Ke?oe(Q,j,te,Re):null;case X:return Ke=te._init,_e(Q,j,Ke(te._payload),Re)}if(Ge(te)||se(te))return Ke!==null?null:ye(Q,j,te,Re,null);Ga(Q,te)}return null}function ze(Q,j,te,Re,Ke){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return Q=Q.get(te)||null,I(j,Q,""+Re,Ke);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case k:return Q=Q.get(Re.key===null?te:Re.key)||null,H(j,Q,Re,Ke);case N:return Q=Q.get(Re.key===null?te:Re.key)||null,oe(j,Q,Re,Ke);case X:var Je=Re._init;return ze(Q,j,te,Je(Re._payload),Ke)}if(Ge(Re)||se(Re))return Q=Q.get(te)||null,ye(j,Q,Re,Ke,null);Ga(j,Re)}return null}function We(Q,j,te,Re){for(var Ke=null,Je=null,et=j,rt=j=0,tn=null;et!==null&&rt<te.length;rt++){et.index>rt?(tn=et,et=null):tn=et.sibling;var Et=_e(Q,et,te[rt],Re);if(Et===null){et===null&&(et=tn);break}n&&et&&Et.alternate===null&&i(Q,et),j=_(Et,j,rt),Je===null?Ke=Et:Je.sibling=Et,Je=Et,et=tn}if(rt===te.length)return a(Q,et),Ft&&kr(Q,rt),Ke;if(et===null){for(;rt<te.length;rt++)et=Se(Q,te[rt],Re),et!==null&&(j=_(et,j,rt),Je===null?Ke=et:Je.sibling=et,Je=et);return Ft&&kr(Q,rt),Ke}for(et=c(Q,et);rt<te.length;rt++)tn=ze(et,Q,rt,te[rt],Re),tn!==null&&(n&&tn.alternate!==null&&et.delete(tn.key===null?rt:tn.key),j=_(tn,j,rt),Je===null?Ke=tn:Je.sibling=tn,Je=tn);return n&&et.forEach(function(Sr){return i(Q,Sr)}),Ft&&kr(Q,rt),Ke}function $e(Q,j,te,Re){var Ke=se(te);if(typeof Ke!="function")throw Error(t(150));if(te=Ke.call(te),te==null)throw Error(t(151));for(var Je=Ke=null,et=j,rt=j=0,tn=null,Et=te.next();et!==null&&!Et.done;rt++,Et=te.next()){et.index>rt?(tn=et,et=null):tn=et.sibling;var Sr=_e(Q,et,Et.value,Re);if(Sr===null){et===null&&(et=tn);break}n&&et&&Sr.alternate===null&&i(Q,et),j=_(Sr,j,rt),Je===null?Ke=Sr:Je.sibling=Sr,Je=Sr,et=tn}if(Et.done)return a(Q,et),Ft&&kr(Q,rt),Ke;if(et===null){for(;!Et.done;rt++,Et=te.next())Et=Se(Q,Et.value,Re),Et!==null&&(j=_(Et,j,rt),Je===null?Ke=Et:Je.sibling=Et,Je=Et);return Ft&&kr(Q,rt),Ke}for(et=c(Q,et);!Et.done;rt++,Et=te.next())Et=ze(et,Q,rt,Et.value,Re),Et!==null&&(n&&Et.alternate!==null&&et.delete(Et.key===null?rt:Et.key),j=_(Et,j,rt),Je===null?Ke=Et:Je.sibling=Et,Je=Et);return n&&et.forEach(function(q_){return i(Q,q_)}),Ft&&kr(Q,rt),Ke}function Gt(Q,j,te,Re){if(typeof te=="object"&&te!==null&&te.type===F&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case k:e:{for(var Ke=te.key,Je=j;Je!==null;){if(Je.key===Ke){if(Ke=te.type,Ke===F){if(Je.tag===7){a(Q,Je.sibling),j=h(Je,te.props.children),j.return=Q,Q=j;break e}}else if(Je.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===X&&rp(Ke)===Je.type){a(Q,Je.sibling),j=h(Je,te.props),j.ref=Uo(Q,Je,te),j.return=Q,Q=j;break e}a(Q,Je);break}else i(Q,Je);Je=Je.sibling}te.type===F?(j=Xr(te.props.children,Q.mode,Re,te.key),j.return=Q,Q=j):(Re=hl(te.type,te.key,te.props,null,Q.mode,Re),Re.ref=Uo(Q,j,te),Re.return=Q,Q=Re)}return w(Q);case N:e:{for(Je=te.key;j!==null;){if(j.key===Je)if(j.tag===4&&j.stateNode.containerInfo===te.containerInfo&&j.stateNode.implementation===te.implementation){a(Q,j.sibling),j=h(j,te.children||[]),j.return=Q,Q=j;break e}else{a(Q,j);break}else i(Q,j);j=j.sibling}j=Ku(te,Q.mode,Re),j.return=Q,Q=j}return w(Q);case X:return Je=te._init,Gt(Q,j,Je(te._payload),Re)}if(Ge(te))return We(Q,j,te,Re);if(se(te))return $e(Q,j,te,Re);Ga(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,j!==null&&j.tag===6?(a(Q,j.sibling),j=h(j,te),j.return=Q,Q=j):(a(Q,j),j=qu(te,Q.mode,Re),j.return=Q,Q=j),w(Q)):a(Q,j)}return Gt}var Rs=sp(!0),op=sp(!1),ja=ur(null),Wa=null,As=null,su=null;function ou(){su=As=Wa=null}function au(n){var i=ja.current;Nt(ja),n._currentValue=i}function lu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Cs(n,i){Wa=n,su=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Rn=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(su!==n)if(n={context:n,memoizedValue:i,next:null},As===null){if(Wa===null)throw Error(t(308));As=n,Wa.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return i}var Br=null;function cu(n){Br===null?Br=[n]:Br.push(n)}function ap(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,cu(i)):(a.next=h.next,h.next=a),i.interleaved=a,ki(n,c)}function ki(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var hr=!1;function uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Bi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function pr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(yt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,ki(n,a)}return h=c.interleaved,h===null?(i.next=i,cu(c)):(i.next=h.next,h.next=i),c.interleaved=i,ki(n,a)}function Xa(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Tc(n,a)}}function cp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?h=_=w:_=_.next=w,a=a.next}while(a!==null);_===null?h=_=i:_=_.next=i}else h=_=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:_,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function $a(n,i,a,c){var h=n.updateQueue;hr=!1;var _=h.firstBaseUpdate,w=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var H=I,oe=H.next;H.next=null,w===null?_=oe:w.next=oe,w=H;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==w&&(I===null?ye.firstBaseUpdate=oe:I.next=oe,ye.lastBaseUpdate=H))}if(_!==null){var Se=h.baseState;w=0,ye=oe=H=null,I=_;do{var _e=I.lane,ze=I.eventTime;if((c&_e)===_e){ye!==null&&(ye=ye.next={eventTime:ze,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var We=n,$e=I;switch(_e=i,ze=a,$e.tag){case 1:if(We=$e.payload,typeof We=="function"){Se=We.call(ze,Se,_e);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=$e.payload,_e=typeof We=="function"?We.call(ze,Se,_e):We,_e==null)break e;Se=ue({},Se,_e);break e;case 2:hr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,_e=h.effects,_e===null?h.effects=[I]:_e.push(I))}else ze={eventTime:ze,lane:_e,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(oe=ye=ze,H=Se):ye=ye.next=ze,w|=_e;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;_e=I,I=_e.next,_e.next=null,h.lastBaseUpdate=_e,h.shared.pending=null}}while(!0);if(ye===null&&(H=Se),h.baseState=H,h.firstBaseUpdate=oe,h.lastBaseUpdate=ye,i=h.shared.interleaved,i!==null){h=i;do w|=h.lane,h=h.next;while(h!==i)}else _===null&&(h.shared.lanes=0);Vr|=w,n.lanes=w,n.memoizedState=Se}}function up(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Io={},Si=ur(Io),No=ur(Io),Fo=ur(Io);function zr(n){if(n===Io)throw Error(t(174));return n}function du(n,i){switch(Dt(Fo,i),Dt(No,n),Dt(Si,Io),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ke(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ke(i,n)}Nt(Si),Dt(Si,i)}function bs(){Nt(Si),Nt(No),Nt(Fo)}function dp(n){zr(Fo.current);var i=zr(Si.current),a=ke(i,n.type);i!==a&&(Dt(No,n),Dt(Si,a))}function fu(n){No.current===n&&(Nt(Si),Nt(No))}var kt=ur(0);function Ya(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var hu=[];function pu(){for(var n=0;n<hu.length;n++)hu[n]._workInProgressVersionPrimary=null;hu.length=0}var qa=b.ReactCurrentDispatcher,mu=b.ReactCurrentBatchConfig,Hr=0,Bt=null,Yt=null,Jt=null,Ka=!1,Oo=!1,ko=0,v_=0;function dn(){throw Error(t(321))}function gu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ri(n[a],i[a]))return!1;return!0}function vu(n,i,a,c,h,_){if(Hr=_,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,qa.current=n===null||n.memoizedState===null?S_:M_,n=a(c,h),Oo){_=0;do{if(Oo=!1,ko=0,25<=_)throw Error(t(301));_+=1,Jt=Yt=null,i.updateQueue=null,qa.current=E_,n=a(c,h)}while(Oo)}if(qa.current=Ja,i=Yt!==null&&Yt.next!==null,Hr=0,Jt=Yt=Bt=null,Ka=!1,i)throw Error(t(300));return n}function _u(){var n=ko!==0;return ko=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Bt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Xn(){if(Yt===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=Yt.next;var i=Jt===null?Bt.memoizedState:Jt.next;if(i!==null)Jt=i,Yt=n;else{if(n===null)throw Error(t(310));Yt=n,n={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?Bt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function Bo(n,i){return typeof i=="function"?i(n):i}function xu(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Yt,h=c.baseQueue,_=a.pending;if(_!==null){if(h!==null){var w=h.next;h.next=_.next,_.next=w}c.baseQueue=h=_,a.pending=null}if(h!==null){_=h.next,c=c.baseState;var I=w=null,H=null,oe=_;do{var ye=oe.lane;if((Hr&ye)===ye)H!==null&&(H=H.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var Se={lane:ye,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};H===null?(I=H=Se,w=c):H=H.next=Se,Bt.lanes|=ye,Vr|=ye}oe=oe.next}while(oe!==null&&oe!==_);H===null?w=c:H.next=I,ri(c,i.memoizedState)||(Rn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=H,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do _=h.lane,Bt.lanes|=_,Vr|=_,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function yu(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,_=i.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do _=n(_,w.action),w=w.next;while(w!==h);ri(_,i.memoizedState)||(Rn=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),a.lastRenderedState=_}return[_,c]}function fp(){}function hp(n,i){var a=Bt,c=Xn(),h=i(),_=!ri(c.memoizedState,h);if(_&&(c.memoizedState=h,Rn=!0),c=c.queue,Su(gp.bind(null,a,c,n),[n]),c.getSnapshot!==i||_||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,zo(9,mp.bind(null,a,c,h,i),void 0,null),en===null)throw Error(t(349));(Hr&30)!==0||pp(a,i,h)}return h}function pp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function mp(n,i,a,c){i.value=a,i.getSnapshot=c,vp(i)&&_p(n)}function gp(n,i,a){return a(function(){vp(i)&&_p(n)})}function vp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ri(n,a)}catch{return!0}}function _p(n){var i=ki(n,1);i!==null&&ci(i,n,1,-1)}function xp(n){var i=Mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},i.queue=n,n=n.dispatch=y_.bind(null,Bt,n),[i.memoizedState,n]}function zo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function yp(){return Xn().memoizedState}function Za(n,i,a,c){var h=Mi();Bt.flags|=n,h.memoizedState=zo(1|i,a,void 0,c===void 0?null:c)}function Qa(n,i,a,c){var h=Xn();c=c===void 0?null:c;var _=void 0;if(Yt!==null){var w=Yt.memoizedState;if(_=w.destroy,c!==null&&gu(c,w.deps)){h.memoizedState=zo(i,a,_,c);return}}Bt.flags|=n,h.memoizedState=zo(1|i,a,_,c)}function Sp(n,i){return Za(8390656,8,n,i)}function Su(n,i){return Qa(2048,8,n,i)}function Mp(n,i){return Qa(4,2,n,i)}function Ep(n,i){return Qa(4,4,n,i)}function Tp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function wp(n,i,a){return a=a!=null?a.concat([n]):null,Qa(4,4,Tp.bind(null,i,n),a)}function Mu(){}function Rp(n,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&gu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Ap(n,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&gu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Cp(n,i,a){return(Hr&21)===0?(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=a):(ri(a,i)||(a=vn(),Bt.lanes|=a,Vr|=a,n.baseState=!0),i)}function __(n,i){var a=bt;bt=a!==0&&4>a?a:4,n(!0);var c=mu.transition;mu.transition={};try{n(!1),i()}finally{bt=a,mu.transition=c}}function bp(){return Xn().memoizedState}function x_(n,i,a){var c=_r(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Pp(n))Lp(i,a);else if(a=ap(n,i,a,c),a!==null){var h=xn();ci(a,n,c,h),Dp(a,i,c)}}function y_(n,i,a){var c=_r(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pp(n))Lp(i,h);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var w=i.lastRenderedState,I=_(w,a);if(h.hasEagerState=!0,h.eagerState=I,ri(I,w)){var H=i.interleaved;H===null?(h.next=h,cu(i)):(h.next=H.next,H.next=h),i.interleaved=h;return}}catch{}finally{}a=ap(n,i,h,c),a!==null&&(h=xn(),ci(a,n,c,h),Dp(a,i,c))}}function Pp(n){var i=n.alternate;return n===Bt||i!==null&&i===Bt}function Lp(n,i){Oo=Ka=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Dp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Tc(n,a)}}var Ja={readContext:Wn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},S_={readContext:Wn,useCallback:function(n,i){return Mi().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:Sp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Za(4194308,4,Tp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Za(4194308,4,n,i)},useInsertionEffect:function(n,i){return Za(4,2,n,i)},useMemo:function(n,i){var a=Mi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Mi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=x_.bind(null,Bt,n),[c.memoizedState,n]},useRef:function(n){var i=Mi();return n={current:n},i.memoizedState=n},useState:xp,useDebugValue:Mu,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=xp(!1),i=n[0];return n=__.bind(null,n[1]),Mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Bt,h=Mi();if(Ft){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),en===null)throw Error(t(349));(Hr&30)!==0||pp(c,i,a)}h.memoizedState=a;var _={value:a,getSnapshot:i};return h.queue=_,Sp(gp.bind(null,c,_,n),[n]),c.flags|=2048,zo(9,mp.bind(null,c,_,a,i),void 0,null),a},useId:function(){var n=Mi(),i=en.identifierPrefix;if(Ft){var a=Oi,c=Fi;a=(c&~(1<<32-ut(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ko++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=v_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},M_={readContext:Wn,useCallback:Rp,useContext:Wn,useEffect:Su,useImperativeHandle:wp,useInsertionEffect:Mp,useLayoutEffect:Ep,useMemo:Ap,useReducer:xu,useRef:yp,useState:function(){return xu(Bo)},useDebugValue:Mu,useDeferredValue:function(n){var i=Xn();return Cp(i,Yt.memoizedState,n)},useTransition:function(){var n=xu(Bo)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:fp,useSyncExternalStore:hp,useId:bp,unstable_isNewReconciler:!1},E_={readContext:Wn,useCallback:Rp,useContext:Wn,useEffect:Su,useImperativeHandle:wp,useInsertionEffect:Mp,useLayoutEffect:Ep,useMemo:Ap,useReducer:yu,useRef:yp,useState:function(){return yu(Bo)},useDebugValue:Mu,useDeferredValue:function(n){var i=Xn();return Yt===null?i.memoizedState=n:Cp(i,Yt.memoizedState,n)},useTransition:function(){var n=yu(Bo)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:fp,useSyncExternalStore:hp,useId:bp,unstable_isNewReconciler:!1};function oi(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Eu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ue({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var el={isMounted:function(n){return(n=n._reactInternals)?_i(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=xn(),h=_r(n),_=Bi(c,h);_.payload=i,a!=null&&(_.callback=a),i=pr(n,_,h),i!==null&&(ci(i,n,h,c),Xa(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=xn(),h=_r(n),_=Bi(c,h);_.tag=1,_.payload=i,a!=null&&(_.callback=a),i=pr(n,_,h),i!==null&&(ci(i,n,h,c),Xa(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=xn(),c=_r(n),h=Bi(a,c);h.tag=2,i!=null&&(h.callback=i),i=pr(n,h,c),i!==null&&(ci(i,n,c,a),Xa(i,n,c))}};function Up(n,i,a,c,h,_,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,_,w):i.prototype&&i.prototype.isPureReactComponent?!Ro(a,c)||!Ro(h,_):!0}function Ip(n,i,a){var c=!1,h=dr,_=i.contextType;return typeof _=="object"&&_!==null?_=Wn(_):(h=wn(i)?Fr:un.current,c=i.contextTypes,_=(c=c!=null)?Ms(n,h):dr),i=new i(a,_),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=el,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=_),i}function Np(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&el.enqueueReplaceState(i,i.state,null)}function Tu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},uu(n);var _=i.contextType;typeof _=="object"&&_!==null?h.context=Wn(_):(_=wn(i)?Fr:un.current,h.context=Ms(n,_)),h.state=n.memoizedState,_=i.getDerivedStateFromProps,typeof _=="function"&&(Eu(n,i,_,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&el.enqueueReplaceState(h,h.state,null),$a(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,i){try{var a="",c=i;do a+=he(c),c=c.return;while(c);var h=a}catch(_){h=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:i,stack:h,digest:null}}function wu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Ru(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var T_=typeof WeakMap=="function"?WeakMap:Map;function Fp(n,i,a){a=Bi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){al||(al=!0,Hu=c),Ru(n,i)},a}function Op(n,i,a){a=Bi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Ru(n,i)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){Ru(n,i),typeof c!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function kp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new T_;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=k_.bind(null,n,i,a),i.then(n,n))}function Bp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function zp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Bi(-1,1),i.tag=2,pr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var w_=b.ReactCurrentOwner,Rn=!1;function _n(n,i,a,c){i.child=n===null?op(i,null,a,c):Rs(i,n.child,a,c)}function Hp(n,i,a,c,h){a=a.render;var _=i.ref;return Cs(i,h),c=vu(n,i,a,c,_,h),a=_u(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,zi(n,i,h)):(Ft&&a&&eu(i),i.flags|=1,_n(n,i,c,h),i.child)}function Vp(n,i,a,c,h){if(n===null){var _=a.type;return typeof _=="function"&&!Yu(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=_,Gp(n,i,_,c,h)):(n=hl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(_=n.child,(n.lanes&h)===0){var w=_.memoizedProps;if(a=a.compare,a=a!==null?a:Ro,a(w,c)&&n.ref===i.ref)return zi(n,i,h)}return i.flags|=1,n=yr(_,c),n.ref=i.ref,n.return=i,i.child=n}function Gp(n,i,a,c,h){if(n!==null){var _=n.memoizedProps;if(Ro(_,c)&&n.ref===i.ref)if(Rn=!1,i.pendingProps=c=_,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Rn=!0);else return i.lanes=n.lanes,zi(n,i,h)}return Au(n,i,a,c,h)}function jp(n,i,a){var c=i.pendingProps,h=c.children,_=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Ds,kn),kn|=a;else{if((a&1073741824)===0)return n=_!==null?_.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Dt(Ds,kn),kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:a,Dt(Ds,kn),kn|=c}else _!==null?(c=_.baseLanes|a,i.memoizedState=null):c=a,Dt(Ds,kn),kn|=c;return _n(n,i,h,a),i.child}function Wp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Au(n,i,a,c,h){var _=wn(a)?Fr:un.current;return _=Ms(i,_),Cs(i,h),a=vu(n,i,a,c,_,h),c=_u(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,zi(n,i,h)):(Ft&&c&&eu(i),i.flags|=1,_n(n,i,a,h),i.child)}function Xp(n,i,a,c,h){if(wn(a)){var _=!0;ka(i)}else _=!1;if(Cs(i,h),i.stateNode===null)nl(n,i),Ip(i,a,c),Tu(i,a,c,h),c=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var H=w.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=Wn(oe):(oe=wn(a)?Fr:un.current,oe=Ms(i,oe));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==c||H!==oe)&&Np(i,w,c,oe),hr=!1;var _e=i.memoizedState;w.state=_e,$a(i,c,w,h),H=i.memoizedState,I!==c||_e!==H||Tn.current||hr?(typeof ye=="function"&&(Eu(i,a,ye,c),H=i.memoizedState),(I=hr||Up(i,a,I,c,_e,H,oe))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),w.props=c,w.state=H,w.context=oe,c=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,lp(n,i),I=i.memoizedProps,oe=i.type===i.elementType?I:oi(i.type,I),w.props=oe,Se=i.pendingProps,_e=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=Wn(H):(H=wn(a)?Fr:un.current,H=Ms(i,H));var ze=a.getDerivedStateFromProps;(ye=typeof ze=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Se||_e!==H)&&Np(i,w,c,H),hr=!1,_e=i.memoizedState,w.state=_e,$a(i,c,w,h);var We=i.memoizedState;I!==Se||_e!==We||Tn.current||hr?(typeof ze=="function"&&(Eu(i,a,ze,c),We=i.memoizedState),(oe=hr||Up(i,a,oe,c,_e,We,H)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,We,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,We,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=We),w.props=c,w.state=We,w.context=H,c=oe):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),c=!1)}return Cu(n,i,a,c,_,h)}function Cu(n,i,a,c,h,_){Wp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return h&&Zh(i,a,!1),zi(n,i,_);c=i.stateNode,w_.current=i;var I=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=Rs(i,n.child,null,_),i.child=Rs(i,null,I,_)):_n(n,i,I,_),i.memoizedState=c.state,h&&Zh(i,a,!0),i.child}function $p(n){var i=n.stateNode;i.pendingContext?qh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&qh(n,i.context,!1),du(n,i.containerInfo)}function Yp(n,i,a,c,h){return ws(),ru(h),i.flags|=256,_n(n,i,a,c),i.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Pu(n){return{baseLanes:n,cachePool:null,transitions:null}}function qp(n,i,a){var c=i.pendingProps,h=kt.current,_=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(h&2)!==0),I?(_=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Dt(kt,h&1),n===null)return iu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,_?(c=i.mode,_=i.child,w={mode:"hidden",children:w},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=pl(w,c,0,null),n=Xr(n,c,a,null),_.return=i,n.return=i,_.sibling=n,i.child=_,i.child.memoizedState=Pu(a),i.memoizedState=bu,n):Lu(i,w));if(h=n.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return R_(n,i,w,c,I,h,a);if(_){_=c.fallback,w=i.mode,h=n.child,I=h.sibling;var H={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=yr(h,H),c.subtreeFlags=h.subtreeFlags&14680064),I!==null?_=yr(I,_):(_=Xr(_,w,a,null),_.flags|=2),_.return=i,c.return=i,c.sibling=_,i.child=c,c=_,_=i.child,w=n.child.memoizedState,w=w===null?Pu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=n.childLanes&~a,i.memoizedState=bu,c}return _=n.child,n=_.sibling,c=yr(_,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Lu(n,i){return i=pl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tl(n,i,a,c){return c!==null&&ru(c),Rs(i,n.child,null,a),n=Lu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function R_(n,i,a,c,h,_,w){if(a)return i.flags&256?(i.flags&=-257,c=wu(Error(t(422))),tl(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(_=c.fallback,h=i.mode,c=pl({mode:"visible",children:c.children},h,0,null),_=Xr(_,h,w,null),_.flags|=2,c.return=i,_.return=i,c.sibling=_,i.child=c,(i.mode&1)!==0&&Rs(i,n.child,null,w),i.child.memoizedState=Pu(w),i.memoizedState=bu,_);if((i.mode&1)===0)return tl(n,i,w,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var I=c.dgst;return c=I,_=Error(t(419)),c=wu(_,c,void 0),tl(n,i,w,c)}if(I=(w&n.childLanes)!==0,Rn||I){if(c=en,c!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|w))!==0?0:h,h!==0&&h!==_.retryLane&&(_.retryLane=h,ki(n,h),ci(c,n,h,-1))}return $u(),c=wu(Error(t(421))),tl(n,i,w,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=B_.bind(null,n),h._reactRetry=i,null):(n=_.treeContext,On=cr(h.nextSibling),Fn=i,Ft=!0,si=null,n!==null&&(Gn[jn++]=Fi,Gn[jn++]=Oi,Gn[jn++]=Or,Fi=n.id,Oi=n.overflow,Or=i),i=Lu(i,c.children),i.flags|=4096,i)}function Kp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),lu(n.return,i,a)}function Du(n,i,a,c,h){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=a,_.tailMode=h)}function Zp(n,i,a){var c=i.pendingProps,h=c.revealOrder,_=c.tail;if(_n(n,i,c.children,a),c=kt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kp(n,a,i);else if(n.tag===19)Kp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Dt(kt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Ya(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Du(i,!1,h,a,_);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Ya(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Du(i,!0,a,null,_);break;case"together":Du(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function zi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Vr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=yr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=yr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function A_(n,i,a){switch(i.tag){case 3:$p(i),ws();break;case 5:dp(i);break;case 1:wn(i.type)&&ka(i);break;case 4:du(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Dt(ja,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?qp(n,i,a):(Dt(kt,kt.current&1),n=zi(n,i,a),n!==null?n.sibling:null);Dt(kt,kt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Zp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Dt(kt,kt.current),c)break;return null;case 22:case 23:return i.lanes=0,jp(n,i,a)}return zi(n,i,a)}var Qp,Uu,Jp,em;Qp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Uu=function(){},Jp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,zr(Si.current);var _=null;switch(a){case"input":h=q(n,h),c=q(n,c),_=[];break;case"select":h=ue({},h,{value:void 0}),c=ue({},c,{value:void 0}),_=[];break;case"textarea":h=R(n,h),c=R(n,c),_=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Na)}pt(a,c);var w;a=null;for(oe in h)if(!c.hasOwnProperty(oe)&&h.hasOwnProperty(oe)&&h[oe]!=null)if(oe==="style"){var I=h[oe];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?_||(_=[]):(_=_||[]).push(oe,null));for(oe in c){var H=c[oe];if(I=h!=null?h[oe]:void 0,c.hasOwnProperty(oe)&&H!==I&&(H!=null||I!=null))if(oe==="style")if(I){for(w in I)!I.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&I[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(_||(_=[]),_.push(oe,a)),a=H;else oe==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(_=_||[]).push(oe,H)):oe==="children"?typeof H!="string"&&typeof H!="number"||(_=_||[]).push(oe,""+H):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(H!=null&&oe==="onScroll"&&It("scroll",n),_||I===H||(_=[])):(_=_||[]).push(oe,H))}a&&(_=_||[]).push("style",a);var oe=_;(i.updateQueue=oe)&&(i.flags|=4)}},em=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ho(n,i){if(!Ft)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function fn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function C_(n,i,a){var c=i.pendingProps;switch(tu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return wn(i.type)&&Oa(),fn(i),null;case 3:return c=i.stateNode,bs(),Nt(Tn),Nt(un),pu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Va(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,si!==null&&(ju(si),si=null))),Uu(n,i),fn(i),null;case 5:fu(i);var h=zr(Fo.current);if(a=i.type,n!==null&&i.stateNode!=null)Jp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return fn(i),null}if(n=zr(Si.current),Va(i)){c=i.stateNode,a=i.type;var _=i.memoizedProps;switch(c[yi]=i,c[Lo]=_,n=(i.mode&1)!==0,a){case"dialog":It("cancel",c),It("close",c);break;case"iframe":case"object":case"embed":It("load",c);break;case"video":case"audio":for(h=0;h<Co.length;h++)It(Co[h],c);break;case"source":It("error",c);break;case"img":case"image":case"link":It("error",c),It("load",c);break;case"details":It("toggle",c);break;case"input":Qt(c,_),It("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},It("invalid",c);break;case"textarea":ee(c,_),It("invalid",c)}pt(a,_),h=null;for(var w in _)if(_.hasOwnProperty(w)){var I=_[w];w==="children"?typeof I=="string"?c.textContent!==I&&(_.suppressHydrationWarning!==!0&&Ia(c.textContent,I,n),h=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(_.suppressHydrationWarning!==!0&&Ia(c.textContent,I,n),h=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&It("scroll",c)}switch(a){case"input":Tt(c),Oe(c,_,!0);break;case"textarea":Tt(c),ve(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=Na)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[yi]=i,n[Lo]=c,Qp(n,i,!1,!1),i.stateNode=n;e:{switch(w=at(a,c),a){case"dialog":It("cancel",n),It("close",n),h=c;break;case"iframe":case"object":case"embed":It("load",n),h=c;break;case"video":case"audio":for(h=0;h<Co.length;h++)It(Co[h],n);h=c;break;case"source":It("error",n),h=c;break;case"img":case"image":case"link":It("error",n),It("load",n),h=c;break;case"details":It("toggle",n),h=c;break;case"input":Qt(n,c),h=q(n,c),It("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=ue({},c,{value:void 0}),It("invalid",n);break;case"textarea":ee(n,c),h=R(n,c),It("invalid",n);break;default:h=c}pt(a,h),I=h;for(_ in I)if(I.hasOwnProperty(_)){var H=I[_];_==="style"?nt(n,H):_==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Be(n,H)):_==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&ct(n,H):typeof H=="number"&&ct(n,""+H):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?H!=null&&_==="onScroll"&&It("scroll",n):H!=null&&L(n,_,H,w))}switch(a){case"input":Tt(n),Oe(n,c,!1);break;case"textarea":Tt(n),ve(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ce(c.value));break;case"select":n.multiple=!!c.multiple,_=c.value,_!=null?D(n,!!c.multiple,_,!1):c.defaultValue!=null&&D(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Na)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(n&&i.stateNode!=null)em(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=zr(Fo.current),zr(Si.current),Va(i)){if(c=i.stateNode,a=i.memoizedProps,c[yi]=i,(_=c.nodeValue!==a)&&(n=Fn,n!==null))switch(n.tag){case 3:Ia(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ia(c.nodeValue,a,(n.mode&1)!==0)}_&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[yi]=i,i.stateNode=c}return fn(i),null;case 13:if(Nt(kt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ip(),ws(),i.flags|=98560,_=!1;else if(_=Va(i),c!==null&&c.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=i.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[yi]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),_=!1}else si!==null&&(ju(si),si=null),_=!0;if(!_)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(kt.current&1)!==0?qt===0&&(qt=3):$u())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return bs(),Uu(n,i),n===null&&bo(i.stateNode.containerInfo),fn(i),null;case 10:return au(i.type._context),fn(i),null;case 17:return wn(i.type)&&Oa(),fn(i),null;case 19:if(Nt(kt),_=i.memoizedState,_===null)return fn(i),null;if(c=(i.flags&128)!==0,w=_.rendering,w===null)if(c)Ho(_,!1);else{if(qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Ya(n),w!==null){for(i.flags|=128,Ho(_,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)_=a,n=c,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,n=w.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Dt(kt,kt.current&1|2),i.child}n=n.sibling}_.tail!==null&&we()>Us&&(i.flags|=128,c=!0,Ho(_,!1),i.lanes=4194304)}else{if(!c)if(n=Ya(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ho(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!Ft)return fn(i),null}else 2*we()-_.renderingStartTime>Us&&a!==1073741824&&(i.flags|=128,c=!0,Ho(_,!1),i.lanes=4194304);_.isBackwards?(w.sibling=i.child,i.child=w):(a=_.last,a!==null?a.sibling=w:i.child=w,_.last=w)}return _.tail!==null?(i=_.tail,_.rendering=i,_.tail=i.sibling,_.renderingStartTime=we(),i.sibling=null,a=kt.current,Dt(kt,c?a&1|2:a&1),i):(fn(i),null);case 22:case 23:return Xu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(kn&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function b_(n,i){switch(tu(i),i.tag){case 1:return wn(i.type)&&Oa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return bs(),Nt(Tn),Nt(un),pu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return fu(i),null;case 13:if(Nt(kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Nt(kt),null;case 4:return bs(),null;case 10:return au(i.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var il=!1,hn=!1,P_=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ls(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ht(n,i,c)}else a.current=null}function Iu(n,i,a){try{a()}catch(c){Ht(n,i,c)}}var tm=!1;function L_(n,i){if(Xc=Ea,n=Uh(),kc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var w=0,I=-1,H=-1,oe=0,ye=0,Se=n,_e=null;t:for(;;){for(var ze;Se!==a||h!==0&&Se.nodeType!==3||(I=w+h),Se!==_||c!==0&&Se.nodeType!==3||(H=w+c),Se.nodeType===3&&(w+=Se.nodeValue.length),(ze=Se.firstChild)!==null;)_e=Se,Se=ze;for(;;){if(Se===n)break t;if(_e===a&&++oe===h&&(I=w),_e===_&&++ye===c&&(H=w),(ze=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=ze}a=I===-1||H===-1?null:{start:I,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for($c={focusedElem:n,selectionRange:a},Ea=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var $e=We.memoizedProps,Gt=We.memoizedState,Q=i.stateNode,j=Q.getSnapshotBeforeUpdate(i.elementType===i.type?$e:oi(i.type,$e),Gt);Q.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Ht(i,i.return,Re)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return We=tm,tm=!1,We}function Vo(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var _=h.destroy;h.destroy=void 0,_!==void 0&&Iu(i,a,_)}h=h.next}while(h!==c)}}function rl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Nu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function nm(n){var i=n.alternate;i!==null&&(n.alternate=null,nm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[yi],delete i[Lo],delete i[Zc],delete i[h_],delete i[p_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function im(n){return n.tag===5||n.tag===3||n.tag===4}function rm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Na));else if(c!==4&&(n=n.child,n!==null))for(Fu(n,i,a),n=n.sibling;n!==null;)Fu(n,i,a),n=n.sibling}function Ou(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ou(n,i,a),n=n.sibling;n!==null;)Ou(n,i,a),n=n.sibling}var sn=null,ai=!1;function mr(n,i,a){for(a=a.child;a!==null;)sm(n,i,a),a=a.sibling}function sm(n,i,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(wt,a)}catch{}switch(a.tag){case 5:hn||Ls(a,i);case 6:var c=sn,h=ai;sn=null,mr(n,i,a),sn=c,ai=h,sn!==null&&(ai?(n=sn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ai?(n=sn,a=a.stateNode,n.nodeType===8?Kc(n.parentNode,a):n.nodeType===1&&Kc(n,a),yo(n)):Kc(sn,a.stateNode));break;case 4:c=sn,h=ai,sn=a.stateNode.containerInfo,ai=!0,mr(n,i,a),sn=c,ai=h;break;case 0:case 11:case 14:case 15:if(!hn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var _=h,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&Iu(a,i,w),h=h.next}while(h!==c)}mr(n,i,a);break;case 1:if(!hn&&(Ls(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Ht(a,i,I)}mr(n,i,a);break;case 21:mr(n,i,a);break;case 22:a.mode&1?(hn=(c=hn)||a.memoizedState!==null,mr(n,i,a),hn=c):mr(n,i,a);break;default:mr(n,i,a)}}function om(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new P_),i.forEach(function(c){var h=z_.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function li(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var _=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:sn=I.stateNode,ai=!1;break e;case 3:sn=I.stateNode.containerInfo,ai=!0;break e;case 4:sn=I.stateNode.containerInfo,ai=!0;break e}I=I.return}if(sn===null)throw Error(t(160));sm(_,w,h),sn=null,ai=!1;var H=h.alternate;H!==null&&(H.return=null),h.return=null}catch(oe){Ht(h,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)am(i,n),i=i.sibling}function am(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(li(i,n),Ei(n),c&4){try{Vo(3,n,n.return),rl(3,n)}catch($e){Ht(n,n.return,$e)}try{Vo(5,n,n.return)}catch($e){Ht(n,n.return,$e)}}break;case 1:li(i,n),Ei(n),c&512&&a!==null&&Ls(a,a.return);break;case 5:if(li(i,n),Ei(n),c&512&&a!==null&&Ls(a,a.return),n.flags&32){var h=n.stateNode;try{ct(h,"")}catch($e){Ht(n,n.return,$e)}}if(c&4&&(h=n.stateNode,h!=null)){var _=n.memoizedProps,w=a!==null?a.memoizedProps:_,I=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{I==="input"&&_.type==="radio"&&_.name!=null&&Te(h,_),at(I,w);var oe=at(I,_);for(w=0;w<H.length;w+=2){var ye=H[w],Se=H[w+1];ye==="style"?nt(h,Se):ye==="dangerouslySetInnerHTML"?Be(h,Se):ye==="children"?ct(h,Se):L(h,ye,Se,oe)}switch(I){case"input":Pe(h,_);break;case"textarea":me(h,_);break;case"select":var _e=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!_.multiple;var ze=_.value;ze!=null?D(h,!!_.multiple,ze,!1):_e!==!!_.multiple&&(_.defaultValue!=null?D(h,!!_.multiple,_.defaultValue,!0):D(h,!!_.multiple,_.multiple?[]:"",!1))}h[Lo]=_}catch($e){Ht(n,n.return,$e)}}break;case 6:if(li(i,n),Ei(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,_=n.memoizedProps;try{h.nodeValue=_}catch($e){Ht(n,n.return,$e)}}break;case 3:if(li(i,n),Ei(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{yo(i.containerInfo)}catch($e){Ht(n,n.return,$e)}break;case 4:li(i,n),Ei(n);break;case 13:li(i,n),Ei(n),h=n.child,h.flags&8192&&(_=h.memoizedState!==null,h.stateNode.isHidden=_,!_||h.alternate!==null&&h.alternate.memoizedState!==null||(zu=we())),c&4&&om(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(hn=(oe=hn)||ye,li(i,n),hn=oe):li(i,n),Ei(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!ye&&(n.mode&1)!==0)for(Ve=n,ye=n.child;ye!==null;){for(Se=Ve=ye;Ve!==null;){switch(_e=Ve,ze=_e.child,_e.tag){case 0:case 11:case 14:case 15:Vo(4,_e,_e.return);break;case 1:Ls(_e,_e.return);var We=_e.stateNode;if(typeof We.componentWillUnmount=="function"){c=_e,a=_e.return;try{i=c,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch($e){Ht(c,a,$e)}}break;case 5:Ls(_e,_e.return);break;case 22:if(_e.memoizedState!==null){um(Se);continue}}ze!==null?(ze.return=_e,Ve=ze):um(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{h=Se.stateNode,oe?(_=h.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(I=Se.stateNode,H=Se.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=tt("display",w))}catch($e){Ht(n,n.return,$e)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=oe?"":Se.memoizedProps}catch($e){Ht(n,n.return,$e)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:li(i,n),Ei(n),c&4&&om(n);break;case 21:break;default:li(i,n),Ei(n)}}function Ei(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(im(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(ct(h,""),c.flags&=-33);var _=rm(n);Ou(n,_,h);break;case 3:case 4:var w=c.stateNode.containerInfo,I=rm(n);Fu(n,I,w);break;default:throw Error(t(161))}}catch(H){Ht(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function D_(n,i,a){Ve=n,lm(n)}function lm(n,i,a){for(var c=(n.mode&1)!==0;Ve!==null;){var h=Ve,_=h.child;if(h.tag===22&&c){var w=h.memoizedState!==null||il;if(!w){var I=h.alternate,H=I!==null&&I.memoizedState!==null||hn;I=il;var oe=hn;if(il=w,(hn=H)&&!oe)for(Ve=h;Ve!==null;)w=Ve,H=w.child,w.tag===22&&w.memoizedState!==null?dm(h):H!==null?(H.return=w,Ve=H):dm(h);for(;_!==null;)Ve=_,lm(_),_=_.sibling;Ve=h,il=I,hn=oe}cm(n)}else(h.subtreeFlags&8772)!==0&&_!==null?(_.return=h,Ve=_):cm(n)}}function cm(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||rl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!hn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=i.updateQueue;_!==null&&up(i,_,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}up(i,w,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var ye=oe.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&yo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}hn||i.flags&512&&Nu(i)}catch(_e){Ht(i,i.return,_e)}}if(i===n){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function um(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function dm(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{rl(4,i)}catch(H){Ht(i,a,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(H){Ht(i,h,H)}}var _=i.return;try{Nu(i)}catch(H){Ht(i,_,H)}break;case 5:var w=i.return;try{Nu(i)}catch(H){Ht(i,w,H)}}}catch(H){Ht(i,i.return,H)}if(i===n){Ve=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ve=I;break}Ve=i.return}}var U_=Math.ceil,sl=b.ReactCurrentDispatcher,ku=b.ReactCurrentOwner,$n=b.ReactCurrentBatchConfig,yt=0,en=null,jt=null,on=0,kn=0,Ds=ur(0),qt=0,Go=null,Vr=0,ol=0,Bu=0,jo=null,An=null,zu=0,Us=1/0,Hi=null,al=!1,Hu=null,gr=null,ll=!1,vr=null,cl=0,Wo=0,Vu=null,ul=-1,dl=0;function xn(){return(yt&6)!==0?we():ul!==-1?ul:ul=we()}function _r(n){return(n.mode&1)===0?1:(yt&2)!==0&&on!==0?on&-on:g_.transition!==null?(dl===0&&(dl=vn()),dl):(n=bt,n!==0||(n=window.event,n=n===void 0?16:hh(n.type)),n)}function ci(n,i,a,c){if(50<Wo)throw Wo=0,Vu=null,Error(t(185));En(n,a,c),((yt&2)===0||n!==en)&&(n===en&&((yt&2)===0&&(ol|=a),qt===4&&xr(n,on)),Cn(n,c),a===1&&yt===0&&(i.mode&1)===0&&(Us=we()+500,Ba&&fr()))}function Cn(n,i){var a=n.callbackNode;Hn(n,i);var c=xi(n,n===en?on:0);if(c===0)a!==null&&le(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&le(a),i===1)n.tag===0?m_(hm.bind(null,n)):Qh(hm.bind(null,n)),d_(function(){(yt&6)===0&&fr()}),a=null;else{switch(sh(c)){case 1:a=Xe;break;case 4:a=it;break;case 16:a=st;break;case 536870912:a=vt;break;default:a=st}a=Sm(a,fm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function fm(n,i){if(ul=-1,dl=0,(yt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Is()&&n.callbackNode!==a)return null;var c=xi(n,n===en?on:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=fl(n,c);else{i=c;var h=yt;yt|=2;var _=mm();(en!==n||on!==i)&&(Hi=null,Us=we()+500,jr(n,i));do try{F_();break}catch(I){pm(n,I)}while(!0);ou(),sl.current=_,yt=h,jt!==null?i=0:(en=null,on=0,i=qt)}if(i!==0){if(i===2&&(h=Ui(n),h!==0&&(c=h,i=Gu(n,h))),i===1)throw a=Go,jr(n,0),xr(n,c),Cn(n,we()),a;if(i===6)xr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!I_(h)&&(i=fl(n,c),i===2&&(_=Ui(n),_!==0&&(c=_,i=Gu(n,_))),i===1))throw a=Go,jr(n,0),xr(n,c),Cn(n,we()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Wr(n,An,Hi);break;case 3:if(xr(n,c),(c&130023424)===c&&(i=zu+500-we(),10<i)){if(xi(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){xn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=qc(Wr.bind(null,n,An,Hi),i);break}Wr(n,An,Hi);break;case 4:if(xr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var w=31-ut(c);_=1<<w,w=i[w],w>h&&(h=w),c&=~_}if(c=h,c=we()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*U_(c/1960))-c,10<c){n.timeoutHandle=qc(Wr.bind(null,n,An,Hi),c);break}Wr(n,An,Hi);break;case 5:Wr(n,An,Hi);break;default:throw Error(t(329))}}}return Cn(n,we()),n.callbackNode===a?fm.bind(null,n):null}function Gu(n,i){var a=jo;return n.current.memoizedState.isDehydrated&&(jr(n,i).flags|=256),n=fl(n,i),n!==2&&(i=An,An=a,i!==null&&ju(i)),n}function ju(n){An===null?An=n:An.push.apply(An,n)}function I_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],_=h.getSnapshot;h=h.value;try{if(!ri(_(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function xr(n,i){for(i&=~Bu,i&=~ol,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ut(i),c=1<<a;n[a]=-1,i&=~c}}function hm(n){if((yt&6)!==0)throw Error(t(327));Is();var i=xi(n,0);if((i&1)===0)return Cn(n,we()),null;var a=fl(n,i);if(n.tag!==0&&a===2){var c=Ui(n);c!==0&&(i=c,a=Gu(n,c))}if(a===1)throw a=Go,jr(n,0),xr(n,i),Cn(n,we()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Wr(n,An,Hi),Cn(n,we()),null}function Wu(n,i){var a=yt;yt|=1;try{return n(i)}finally{yt=a,yt===0&&(Us=we()+500,Ba&&fr())}}function Gr(n){vr!==null&&vr.tag===0&&(yt&6)===0&&Is();var i=yt;yt|=1;var a=$n.transition,c=bt;try{if($n.transition=null,bt=1,n)return n()}finally{bt=c,$n.transition=a,yt=i,(yt&6)===0&&fr()}}function Xu(){kn=Ds.current,Nt(Ds)}function jr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,u_(a)),jt!==null)for(a=jt.return;a!==null;){var c=a;switch(tu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Oa();break;case 3:bs(),Nt(Tn),Nt(un),pu();break;case 5:fu(c);break;case 4:bs();break;case 13:Nt(kt);break;case 19:Nt(kt);break;case 10:au(c.type._context);break;case 22:case 23:Xu()}a=a.return}if(en=n,jt=n=yr(n.current,null),on=kn=i,qt=0,Go=null,Bu=ol=Vr=0,An=jo=null,Br!==null){for(i=0;i<Br.length;i++)if(a=Br[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,_=a.pending;if(_!==null){var w=_.next;_.next=h,c.next=w}a.pending=c}Br=null}return n}function pm(n,i){do{var a=jt;try{if(ou(),qa.current=Ja,Ka){for(var c=Bt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Ka=!1}if(Hr=0,Jt=Yt=Bt=null,Oo=!1,ko=0,ku.current=null,a===null||a.return===null){qt=1,Go=i,jt=null;break}e:{var _=n,w=a.return,I=a,H=i;if(i=on,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var oe=H,ye=I,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ze=Bp(w);if(ze!==null){ze.flags&=-257,zp(ze,w,I,_,i),ze.mode&1&&kp(_,oe,i),i=ze,H=oe;var We=i.updateQueue;if(We===null){var $e=new Set;$e.add(H),i.updateQueue=$e}else We.add(H);break e}else{if((i&1)===0){kp(_,oe,i),$u();break e}H=Error(t(426))}}else if(Ft&&I.mode&1){var Gt=Bp(w);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),zp(Gt,w,I,_,i),ru(Ps(H,I));break e}}_=H=Ps(H,I),qt!==4&&(qt=2),jo===null?jo=[_]:jo.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,i&=-i,_.lanes|=i;var Q=Fp(_,H,i);cp(_,Q);break e;case 1:I=H;var j=_.type,te=_.stateNode;if((_.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(gr===null||!gr.has(te)))){_.flags|=65536,i&=-i,_.lanes|=i;var Re=Op(_,I,i);cp(_,Re);break e}}_=_.return}while(_!==null)}vm(a)}catch(Ke){i=Ke,jt===a&&a!==null&&(jt=a=a.return);continue}break}while(!0)}function mm(){var n=sl.current;return sl.current=Ja,n===null?Ja:n}function $u(){(qt===0||qt===3||qt===2)&&(qt=4),en===null||(Vr&268435455)===0&&(ol&268435455)===0||xr(en,on)}function fl(n,i){var a=yt;yt|=2;var c=mm();(en!==n||on!==i)&&(Hi=null,jr(n,i));do try{N_();break}catch(h){pm(n,h)}while(!0);if(ou(),yt=a,sl.current=c,jt!==null)throw Error(t(261));return en=null,on=0,qt}function N_(){for(;jt!==null;)gm(jt)}function F_(){for(;jt!==null&&!Z();)gm(jt)}function gm(n){var i=ym(n.alternate,n,kn);n.memoizedProps=n.pendingProps,i===null?vm(n):jt=i,ku.current=null}function vm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=C_(a,i,kn),a!==null){jt=a;return}}else{if(a=b_(a,i),a!==null){a.flags&=32767,jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{qt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=n}while(i!==null);qt===0&&(qt=5)}function Wr(n,i,a){var c=bt,h=$n.transition;try{$n.transition=null,bt=1,O_(n,i,a,c)}finally{$n.transition=h,bt=c}return null}function O_(n,i,a,c){do Is();while(vr!==null);if((yt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=a.lanes|a.childLanes;if(ya(n,_),n===en&&(jt=en=null,on=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ll||(ll=!0,Sm(st,function(){return Is(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=$n.transition,$n.transition=null;var w=bt;bt=1;var I=yt;yt|=4,ku.current=null,L_(n,a),am(a,n),i_($c),Ea=!!Xc,$c=Xc=null,n.current=a,D_(a),Ae(),yt=I,bt=w,$n.transition=_}else n.current=a;if(ll&&(ll=!1,vr=n,cl=h),_=n.pendingLanes,_===0&&(gr=null),ln(a.stateNode),Cn(n,we()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(al)throw al=!1,n=Hu,Hu=null,n;return(cl&1)!==0&&n.tag!==0&&Is(),_=n.pendingLanes,(_&1)!==0?n===Vu?Wo++:(Wo=0,Vu=n):Wo=0,fr(),null}function Is(){if(vr!==null){var n=sh(cl),i=$n.transition,a=bt;try{if($n.transition=null,bt=16>n?16:n,vr===null)var c=!1;else{if(n=vr,vr=null,cl=0,(yt&6)!==0)throw Error(t(331));var h=yt;for(yt|=4,Ve=n.current;Ve!==null;){var _=Ve,w=_.child;if((Ve.flags&16)!==0){var I=_.deletions;if(I!==null){for(var H=0;H<I.length;H++){var oe=I[H];for(Ve=oe;Ve!==null;){var ye=Ve;switch(ye.tag){case 0:case 11:case 15:Vo(8,ye,_)}var Se=ye.child;if(Se!==null)Se.return=ye,Ve=Se;else for(;Ve!==null;){ye=Ve;var _e=ye.sibling,ze=ye.return;if(nm(ye),ye===oe){Ve=null;break}if(_e!==null){_e.return=ze,Ve=_e;break}Ve=ze}}}var We=_.alternate;if(We!==null){var $e=We.child;if($e!==null){We.child=null;do{var Gt=$e.sibling;$e.sibling=null,$e=Gt}while($e!==null)}}Ve=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,Ve=w;else e:for(;Ve!==null;){if(_=Ve,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Vo(9,_,_.return)}var Q=_.sibling;if(Q!==null){Q.return=_.return,Ve=Q;break e}Ve=_.return}}var j=n.current;for(Ve=j;Ve!==null;){w=Ve;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,Ve=te;else e:for(w=j;Ve!==null;){if(I=Ve,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:rl(9,I)}}catch(Ke){Ht(I,I.return,Ke)}if(I===w){Ve=null;break e}var Re=I.sibling;if(Re!==null){Re.return=I.return,Ve=Re;break e}Ve=I.return}}if(yt=h,fr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(wt,n)}catch{}c=!0}return c}finally{bt=a,$n.transition=i}}return!1}function _m(n,i,a){i=Ps(a,i),i=Fp(n,i,1),n=pr(n,i,1),i=xn(),n!==null&&(En(n,1,i),Cn(n,i))}function Ht(n,i,a){if(n.tag===3)_m(n,n,a);else for(;i!==null;){if(i.tag===3){_m(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(gr===null||!gr.has(c))){n=Ps(a,n),n=Op(i,n,1),i=pr(i,n,1),n=xn(),i!==null&&(En(i,1,n),Cn(i,n));break}}i=i.return}}function k_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=xn(),n.pingedLanes|=n.suspendedLanes&a,en===n&&(on&a)===a&&(qt===4||qt===3&&(on&130023424)===on&&500>we()-zu?jr(n,0):Bu|=a),Cn(n,i)}function xm(n,i){i===0&&((n.mode&1)===0?i=1:(i=ii,ii<<=1,(ii&130023424)===0&&(ii=4194304)));var a=xn();n=ki(n,i),n!==null&&(En(n,i,a),Cn(n,a))}function B_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),xm(n,a)}function z_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),xm(n,a)}var ym;ym=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Tn.current)Rn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Rn=!1,A_(n,i,a);Rn=(n.flags&131072)!==0}else Rn=!1,Ft&&(i.flags&1048576)!==0&&Jh(i,Ha,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;nl(n,i),n=i.pendingProps;var h=Ms(i,un.current);Cs(i,a),h=vu(null,i,c,n,h,a);var _=_u();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(c)?(_=!0,ka(i)):_=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,uu(i),h.updater=el,i.stateNode=h,h._reactInternals=i,Tu(i,c,n,a),i=Cu(null,i,c,!0,_,a)):(i.tag=0,Ft&&_&&eu(i),_n(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(nl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=V_(c),n=oi(c,n),h){case 0:i=Au(null,i,c,n,a);break e;case 1:i=Xp(null,i,c,n,a);break e;case 11:i=Hp(null,i,c,n,a);break e;case 14:i=Vp(null,i,c,oi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),Au(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),Xp(n,i,c,h,a);case 3:e:{if($p(i),n===null)throw Error(t(387));c=i.pendingProps,_=i.memoizedState,h=_.element,lp(n,i),$a(i,c,null,a);var w=i.memoizedState;if(c=w.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){h=Ps(Error(t(423)),i),i=Yp(n,i,c,a,h);break e}else if(c!==h){h=Ps(Error(t(424)),i),i=Yp(n,i,c,a,h);break e}else for(On=cr(i.stateNode.containerInfo.firstChild),Fn=i,Ft=!0,si=null,a=op(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ws(),c===h){i=zi(n,i,a);break e}_n(n,i,c,a)}i=i.child}return i;case 5:return dp(i),n===null&&iu(i),c=i.type,h=i.pendingProps,_=n!==null?n.memoizedProps:null,w=h.children,Yc(c,h)?w=null:_!==null&&Yc(c,_)&&(i.flags|=32),Wp(n,i),_n(n,i,w,a),i.child;case 6:return n===null&&iu(i),null;case 13:return qp(n,i,a);case 4:return du(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Rs(i,null,c,a):_n(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),Hp(n,i,c,h,a);case 7:return _n(n,i,i.pendingProps,a),i.child;case 8:return _n(n,i,i.pendingProps.children,a),i.child;case 12:return _n(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,_=i.memoizedProps,w=h.value,Dt(ja,c._currentValue),c._currentValue=w,_!==null)if(ri(_.value,w)){if(_.children===h.children&&!Tn.current){i=zi(n,i,a);break e}}else for(_=i.child,_!==null&&(_.return=i);_!==null;){var I=_.dependencies;if(I!==null){w=_.child;for(var H=I.firstContext;H!==null;){if(H.context===c){if(_.tag===1){H=Bi(-1,a&-a),H.tag=2;var oe=_.updateQueue;if(oe!==null){oe=oe.shared;var ye=oe.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),oe.pending=H}}_.lanes|=a,H=_.alternate,H!==null&&(H.lanes|=a),lu(_.return,a,i),I.lanes|=a;break}H=H.next}}else if(_.tag===10)w=_.type===i.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),lu(w,a,i),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===i){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}_n(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Cs(i,a),h=Wn(h),c=c(h),i.flags|=1,_n(n,i,c,a),i.child;case 14:return c=i.type,h=oi(c,i.pendingProps),h=oi(c.type,h),Vp(n,i,c,h,a);case 15:return Gp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),nl(n,i),i.tag=1,wn(c)?(n=!0,ka(i)):n=!1,Cs(i,a),Ip(i,c,h),Tu(i,c,h,a),Cu(null,i,c,!0,n,a);case 19:return Zp(n,i,a);case 22:return jp(n,i,a)}throw Error(t(156,i.tag))};function Sm(n,i){return ae(n,i)}function H_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,i,a,c){return new H_(n,i,a,c)}function Yu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function V_(n){if(typeof n=="function")return Yu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===fe)return 11;if(n===G)return 14}return 2}function yr(n,i){var a=n.alternate;return a===null?(a=Yn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hl(n,i,a,c,h,_){var w=2;if(c=n,typeof n=="function")Yu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case F:return Xr(a.children,h,_,i);case Y:w=8,h|=8;break;case P:return n=Yn(12,a,i,h|2),n.elementType=P,n.lanes=_,n;case W:return n=Yn(13,a,i,h),n.elementType=W,n.lanes=_,n;case ie:return n=Yn(19,a,i,h),n.elementType=ie,n.lanes=_,n;case J:return pl(a,h,_,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:w=10;break e;case V:w=9;break e;case fe:w=11;break e;case G:w=14;break e;case X:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Yn(w,a,i,h),i.elementType=n,i.type=c,i.lanes=_,i}function Xr(n,i,a,c){return n=Yn(7,n,c,i),n.lanes=a,n}function pl(n,i,a,c){return n=Yn(22,n,c,i),n.elementType=J,n.lanes=a,n.stateNode={isHidden:!1},n}function qu(n,i,a){return n=Yn(6,n,null,i),n.lanes=a,n}function Ku(n,i,a){return i=Yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function G_(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vn(0),this.expirationTimes=Vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Zu(n,i,a,c,h,_,w,I,H){return n=new G_(n,i,a,I,H),i===1?(i=1,_===!0&&(i|=8)):i=0,_=Yn(3,null,null,i),n.current=_,_.stateNode=n,_.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(_),n}function j_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Mm(n){if(!n)return dr;n=n._reactInternals;e:{if(_i(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(wn(a))return Kh(n,a,i)}return i}function Em(n,i,a,c,h,_,w,I,H){return n=Zu(a,c,!0,n,h,_,w,I,H),n.context=Mm(null),a=n.current,c=xn(),h=_r(a),_=Bi(c,h),_.callback=i??null,pr(a,_,h),n.current.lanes=h,En(n,h,c),Cn(n,c),n}function ml(n,i,a,c){var h=i.current,_=xn(),w=_r(h);return a=Mm(a),i.context===null?i.context=a:i.pendingContext=a,i=Bi(_,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=pr(h,i,w),n!==null&&(ci(n,h,w,_),Xa(n,h,w)),w}function gl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Qu(n,i){Tm(n,i),(n=n.alternate)&&Tm(n,i)}function W_(){return null}var wm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ju(n){this._internalRoot=n}vl.prototype.render=Ju.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ml(n,i,null,null)},vl.prototype.unmount=Ju.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Gr(function(){ml(null,n,null,null)}),i[Ii]=null}};function vl(n){this._internalRoot=n}vl.prototype.unstable_scheduleHydration=function(n){if(n){var i=lh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<or.length&&i!==0&&i<or[a].priority;a++);or.splice(a,0,n),a===0&&dh(n)}};function ed(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Rm(){}function X_(n,i,a,c,h){if(h){if(typeof c=="function"){var _=c;c=function(){var oe=gl(w);_.call(oe)}}var w=Em(i,c,n,0,null,!1,!1,"",Rm);return n._reactRootContainer=w,n[Ii]=w.current,bo(n.nodeType===8?n.parentNode:n),Gr(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var I=c;c=function(){var oe=gl(H);I.call(oe)}}var H=Zu(n,0,!1,null,null,!1,!1,"",Rm);return n._reactRootContainer=H,n[Ii]=H.current,bo(n.nodeType===8?n.parentNode:n),Gr(function(){ml(i,H,a,c)}),H}function xl(n,i,a,c,h){var _=a._reactRootContainer;if(_){var w=_;if(typeof h=="function"){var I=h;h=function(){var H=gl(w);I.call(H)}}ml(i,w,n,h)}else w=X_(a,i,n,h,c);return gl(w)}oh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=$t(i.pendingLanes);a!==0&&(Tc(i,a|1),Cn(i,we()),(yt&6)===0&&(Us=we()+500,fr()))}break;case 13:Gr(function(){var c=ki(n,1);if(c!==null){var h=xn();ci(c,n,1,h)}}),Qu(n,1)}},wc=function(n){if(n.tag===13){var i=ki(n,134217728);if(i!==null){var a=xn();ci(i,n,134217728,a)}Qu(n,134217728)}},ah=function(n){if(n.tag===13){var i=_r(n),a=ki(n,i);if(a!==null){var c=xn();ci(a,n,i,c)}Qu(n,i)}},lh=function(){return bt},ch=function(n,i){var a=bt;try{return bt=n,i()}finally{bt=a}},Le=function(n,i,a){switch(i){case"input":if(Pe(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Fa(c);if(!h)throw Error(t(90));ht(c),Pe(c,h)}}}break;case"textarea":me(n,a);break;case"select":i=a.value,i!=null&&D(n,!!a.multiple,i,!1)}},Ut=Wu,Xt=Gr;var $_={usingClientEntryPoint:!1,Events:[Do,ys,Fa,Ue,lt,Wu]},Xo={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y_={bundleType:Xo.bundleType,version:Xo.version,rendererPackageName:Xo.rendererPackageName,rendererConfig:Xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=A(n),n===null?null:n.stateNode},findFiberByHostInstance:Xo.findFiberByHostInstance||W_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{wt=yl.inject(Y_),gt=yl}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$_,bn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(i))throw Error(t(200));return j_(n,i,null,a)},bn.createRoot=function(n,i){if(!ed(n))throw Error(t(299));var a=!1,c="",h=wm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Zu(n,1,!1,null,null,a,!1,c,h),n[Ii]=i.current,bo(n.nodeType===8?n.parentNode:n),new Ju(i)},bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=A(i),n=n===null?null:n.stateNode,n},bn.flushSync=function(n){return Gr(n)},bn.hydrate=function(n,i,a){if(!_l(i))throw Error(t(200));return xl(null,n,i,!0,a)},bn.hydrateRoot=function(n,i,a){if(!ed(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,_="",w=wm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Em(i,null,n,1,a??null,h,!1,_,w),n[Ii]=i.current,bo(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new vl(i)},bn.render=function(n,i,a){if(!_l(i))throw Error(t(200));return xl(null,n,i,!1,a)},bn.unmountComponentAtNode=function(n){if(!_l(n))throw Error(t(40));return n._reactRootContainer?(Gr(function(){xl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ii]=null})}),!0):!1},bn.unstable_batchedUpdates=Wu,bn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!_l(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return xl(n,i,a,!1,c)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var Im;function ix(){if(Im)return id.exports;Im=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),id.exports=nx(),id.exports}var Nm;function rx(){if(Nm)return Ml;Nm=1;var r=ix();return Ml.createRoot=r.createRoot,Ml.hydrateRoot=r.hydrateRoot,Ml}var sx=rx();/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bf=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,uv=/^[\\/]{2}/;function ox(r,e){return e+r.replace(/\\/g,"/")}var Fm="popstate";function Om(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function ax(r={}){function e(o,l){let{pathname:u="/",search:d="",hash:f=""}=us(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),jd("",{pathname:u,search:d,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let u=o.document.querySelector("base"),d="";if(u&&u.getAttribute("href")){let f=o.location.href,p=f.indexOf("#");d=p===-1?f:f.slice(0,p)}return d+"#"+(typeof l=="string"?l:aa(l))}function s(o,l){gi(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return cx(e,t,s,r)}function zt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function gi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lx(){return Math.random().toString(36).substring(2,10)}function km(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function jd(r,e,t=null,s,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?us(e):e,state:t,key:e&&e.key||s||lx(),mask:o}}function aa({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function us(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function cx(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,u=o.history,d="POP",f=null,p=m();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function m(){return(u.state||{idx:null}).idx}function v(){d="POP";let S=m(),x=S==null?null:S-p;p=S,f&&f({action:d,location:T.location,delta:x})}function y(S,x){d="PUSH";let U=Om(S)?S:jd(T.location,S,x);t&&t(U,S),p=m()+1;let L=km(U,p),b=T.createHref(U.mask||U);try{u.pushState(L,"",b)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(b)}l&&f&&f({action:d,location:T.location,delta:1})}function M(S,x){d="REPLACE";let U=Om(S)?S:jd(T.location,S,x);t&&t(U,S),p=m();let L=km(U,p),b=T.createHref(U.mask||U);u.replaceState(L,"",b),l&&f&&f({action:d,location:T.location,delta:0})}function E(S){return ux(o,S)}let T={get action(){return d},get location(){return r(o,u)},listen(S){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Fm,v),f=S,()=>{o.removeEventListener(Fm,v),f=null}},createHref(S){return e(o,S)},createURL:E,encodeLocation(S){let x=E(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:y,replace:M,go(S){return u.go(S)}};return T}function ux(r,e,t=!1){let s="http://localhost";r&&(s=r.location.origin!=="null"?r.location.origin:r.location.href),zt(s,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:aa(e);return o=o.replace(/ $/,"%20"),!t&&uv.test(o)&&(o=s+o),new URL(o,s)}function dv(r,e,t="/"){return dx(r,e,t,!1)}function dx(r,e,t,s,o){let l=typeof e=="string"?us(e):e,u=Qi(l.pathname||"/",t);if(u==null)return null;let d=fx(r),f=null,p=Ex(u);for(let m=0;f==null&&m<d.length;++m)f=Mx(d[m],p,s);return f}function fx(r){let e=fv(r);return hx(e),e}function fv(r,e=[],t=[],s="",o=!1){let l=(u,d,f=o,p)=>{let m={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(s)&&f)return;zt(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length)}let v=pi([s,m.relativePath]),y=t.concat(m);u.children&&u.children.length>0&&(zt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),fv(u.children,e,y,v,f)),!(u.path==null&&!u.index)&&e.push({path:v,score:yx(v,u.index),routesMeta:y.map((M,E)=>{let[T,S]=mv(M.relativePath,M.caseSensitive,E===y.length-1);return{...M,matcher:T,compiledParams:S}})})};return r.forEach((u,d)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))l(u,d);else for(let p of hv(u.path))l(u,d,!0,p)}),e}function hv(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let u=hv(s.join("/")),d=[];return d.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&d.push(...u),d.map(f=>r.startsWith("/")&&f===""?"/":f)}function hx(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Sx(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var px=/^:[\w-]+$/,mx=3,gx=2,vx=1,_x=10,xx=-2,Bm=r=>r==="*";function yx(r,e){let t=r.split("/"),s=t.length;return t.some(Bm)&&(s+=xx),e&&(s+=gx),t.filter(o=>!Bm(o)).reduce((o,l)=>o+(px.test(l)?mx:l===""?vx:_x),s)}function Sx(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function Mx(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",u=[];for(let d=0;d<s.length;++d){let f=s[d],p=d===s.length-1,m=l==="/"?e:e.slice(l.length)||"/",v={path:f.relativePath,caseSensitive:f.caseSensitive,end:p},y=f.matcher&&f.compiledParams?pv(v,m,f.matcher,f.compiledParams):cc(v,m),M=f.route;if(!y&&p&&t&&!s[s.length-1].route.index&&(y=cc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},m)),!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:pi([l,y.pathname]),pathnameBase:Rx(pi([l,y.pathnameBase])),route:M}),y.pathnameBase!=="/"&&(l=pi([l,y.pathnameBase]))}return u}function cc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=mv(r.path,r.caseSensitive,r.end);return pv(r,e,t,s)}function pv(r,e,t,s){let o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((p,{paramName:m,isOptional:v},y)=>{if(m==="*"){let E=d[y]||"";u=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[y];return v&&!M?p[m]=void 0:p[m]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:r}}function mv(r,e=!1,t=!0){gi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f,p,m)=>{if(s.push({paramName:d,isOptional:f!=null}),f){let v=m.charAt(p+u.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Ex(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Qi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function Tx(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?us(r):r,l;return t?(t=vv(t),t.startsWith("/")?l=zm(t.substring(1),"/"):l=zm(t,e)):l=e,{pathname:l,search:Ax(s),hash:Cx(o)}}function zm(r,e){let t=uc(e).split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function od(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wx(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function gv(r){let e=wx(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function zf(r,e,t,s=!1){let o;typeof r=="string"?o=us(r):(o={...r},zt(!o.pathname||!o.pathname.includes("?"),od("?","pathname","search",o)),zt(!o.pathname||!o.pathname.includes("#"),od("#","pathname","hash",o)),zt(!o.search||!o.search.includes("#"),od("#","search","hash",o)));let l=r===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=t;else{let v=e.length-1;if(!s&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),v-=1;o.pathname=y.join("/")}d=v>=0?e[v]:"/"}let f=Tx(o,d),p=u&&u!=="/"&&u.endsWith("/"),m=(l||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||m)&&(f.pathname+="/"),f}var vv=r=>r.replace(/[\\/]{2,}/g,"/"),pi=r=>vv(r.join("/")),uc=r=>r.replace(/\/+$/,""),Rx=r=>uc(r).replace(/^\/*/,"/"),Ax=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Cx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,bx=class{constructor(r,e,t,s=!1){this.status=r,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Px(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Lx(r){let e=r.map(t=>t.route.path).filter(Boolean);return pi(e)||"/"}var _v=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xv(r,e){let t=r;if(typeof t!="string"||!Bf.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(_v)try{let l=new URL(window.location.href),u=uv.test(t)?new URL(ox(t,l.protocol)):new URL(t),d=Qi(u.pathname,e);u.origin===l.origin&&d!=null?t=d+u.search+u.hash:o=!0}catch{gi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yv=["POST","PUT","PATCH","DELETE"];new Set(yv);var Dx=["GET",...yv];new Set(Dx);var Ux=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Ix(r){try{return Ux.includes(new URL(r).protocol)}catch{return!1}}var co=z.createContext(null);co.displayName="DataRouter";var mc=z.createContext(null);mc.displayName="DataRouterState";var Sv=z.createContext(!1);function Nx(){return z.useContext(Sv)}var Mv=z.createContext({isTransitioning:!1});Mv.displayName="ViewTransition";var Fx=z.createContext(new Map);Fx.displayName="Fetchers";var Ox=z.createContext(null);Ox.displayName="Await";var ti=z.createContext(null);ti.displayName="Navigation";var ca=z.createContext(null);ca.displayName="Location";var vi=z.createContext({outlet:null,matches:[],isDataRoute:!1});vi.displayName="Route";var Hf=z.createContext(null);Hf.displayName="RouteError";var Ev="REACT_ROUTER_ERROR",kx="REDIRECT",Bx="ROUTE_ERROR_RESPONSE";function zx(r){if(r.startsWith(`${Ev}:${kx}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Hx(r){if(r.startsWith(`${Ev}:${Bx}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new bx(e.status,e.statusText,e.data)}catch{}}function Vx(r,{relative:e}={}){zt(ua(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=z.useContext(ti),{hash:o,pathname:l,search:u}=da(r,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:pi([t,l])),s.createHref({pathname:d,search:u,hash:o})}function ua(){return z.useContext(ca)!=null}function Pi(){return zt(ua(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(ca).location}var Tv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wv(r){z.useContext(ti).static||z.useLayoutEffect(r)}function Rv(){let{isDataRoute:r}=z.useContext(vi);return r?ry():Gx()}function Gx(){zt(ua(),"useNavigate() may be used only in the context of a <Router> component.");let r=z.useContext(co),{basename:e,navigator:t}=z.useContext(ti),{matches:s}=z.useContext(vi),{pathname:o}=Pi(),l=JSON.stringify(gv(s)),u=z.useRef(!1);return wv(()=>{u.current=!0}),z.useCallback((f,p={})=>{if(gi(u.current,Tv),!u.current)return;if(typeof f=="number"){t.go(f);return}let m=zf(f,JSON.parse(l),o,p.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:pi([e,m.pathname])),(p.replace?t.replace:t.push)(m,p.state,p)},[e,t,l,o,r])}var jx=z.createContext(null);function Wx(r){let e=z.useContext(vi).outlet;return z.useMemo(()=>e&&z.createElement(jx.Provider,{value:r},e),[e,r])}function Xx(){let{matches:r}=z.useContext(vi),e=r[r.length-1];return(e==null?void 0:e.params)??{}}function da(r,{relative:e}={}){let{matches:t}=z.useContext(vi),{pathname:s}=Pi(),o=JSON.stringify(gv(t));return z.useMemo(()=>zf(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function $x(r,e){return Av(r,e)}function Av(r,e,t){var S;zt(ua(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=z.useContext(ti),{matches:o}=z.useContext(vi),l=o[o.length-1],u=l?l.params:{},d=l?l.pathname:"/",f=l?l.pathnameBase:"/",p=l&&l.route;{let x=p&&p.path||"";bv(d,!p||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let m=Pi(),v;if(e){let x=typeof e=="string"?us(e):e;zt(f==="/"||((S=x.pathname)==null?void 0:S.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${x.pathname}" was given in the \`location\` prop.`),v=x}else v=m;let y=v.pathname||"/",M=y;if(f!=="/"){let x=f.replace(/^\//,"").split("/");M="/"+y.replace(/^\//,"").split("/").slice(x.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(x=>Object.assign(x,{route:t.manifest[x.route.id]||x.route})):dv(r,{pathname:M});gi(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),gi(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=Qx(E&&E.map(x=>Object.assign({},x,{params:Object.assign({},u,x.params),pathname:pi([f,s.encodeLocation?s.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?f:pi([f,s.encodeLocation?s.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),o,t);return e&&T?z.createElement(ca.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},T):T}function Yx(){let r=iy(),e=Px(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},u=null;return console.error("Error handled by React Router default ErrorBoundary:",r),u=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:l},"ErrorBoundary")," or"," ",z.createElement("code",{style:l},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),t?z.createElement("pre",{style:o},t):null,u)}var qx=z.createElement(Yx,null),Cv=class extends z.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=Hx(r.digest);t&&(r=t)}let e=r!==void 0?z.createElement(vi.Provider,{value:this.props.routeContext},z.createElement(Hf.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?z.createElement(Kx,{error:r},e):e}};Cv.contextType=Sv;var ad=new WeakMap;function Kx({children:r,error:e}){let{basename:t}=z.useContext(ti);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=zx(e.digest);if(s){let o=ad.get(e);if(o)throw o;let l=xv(s.location,t),u=l.absoluteURL||l.to;if(Ix(u))throw new Error("Invalid redirect location");if(_v&&!ad.get(e))if(l.isExternal||s.reloadDocument)window.location.href=u;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw ad.set(e,d),d}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u}`})}}return r}function Zx({routeContext:r,match:e,children:t}){let s=z.useContext(co);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),z.createElement(vi.Provider,{value:r},t)}function Qx(r,e=[],t){let s=t==null?void 0:t.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let o=r,l=s==null?void 0:s.errors;if(l!=null){let m=o.findIndex(v=>v.route.id&&(l==null?void 0:l[v.route.id])!==void 0);zt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let u=!1,d=-1;if(t&&s){u=s.renderFallback;for(let m=0;m<o.length;m++){let v=o[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(d=m),v.route.id){let{loaderData:y,errors:M}=s,E=v.route.loader&&!y.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(u=!0),d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}}let f=t==null?void 0:t.onError,p=s&&f?(m,v)=>{var y,M;f(m,{location:s.location,params:((M=(y=s.matches)==null?void 0:y[0])==null?void 0:M.params)??{},pattern:Lx(s.matches),errorInfo:v})}:void 0;return o.reduceRight((m,v,y)=>{let M,E=!1,T=null,S=null;s&&(M=l&&v.route.id?l[v.route.id]:void 0,T=v.route.errorElement||qx,u&&(d<0&&y===0?(bv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):d===y&&(E=!0,S=v.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,y+1)),U=()=>{let L;return M?L=T:E?L=S:v.route.Component?L=z.createElement(v.route.Component,null):v.route.element?L=v.route.element:L=m,z.createElement(Zx,{match:v,routeContext:{outlet:m,matches:x,isDataRoute:s!=null},children:L})};return s&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?z.createElement(Cv,{location:s.location,revalidation:s.revalidation,component:T,error:M,children:U(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:p}):U()},null)}function Vf(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jx(r){let e=z.useContext(co);return zt(e,Vf(r)),e}function ey(r){let e=z.useContext(mc);return zt(e,Vf(r)),e}function ty(r){let e=z.useContext(vi);return zt(e,Vf(r)),e}function Gf(r){let e=ty(r),t=e.matches[e.matches.length-1];return zt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function ny(){return Gf("useRouteId")}function iy(){var s;let r=z.useContext(Hf),e=ey("useRouteError"),t=Gf("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function ry(){let{router:r}=Jx("useNavigate"),e=Gf("useNavigate"),t=z.useRef(!1);return wv(()=>{t.current=!0}),z.useCallback(async(o,l={})=>{gi(t.current,Tv),t.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var Hm={};function bv(r,e,t){!e&&!Hm[r]&&(Hm[r]=!0,gi(!1,t))}z.memo(sy);function sy({routes:r,manifest:e,future:t,state:s,isStatic:o,onError:l}){return Av(r,void 0,{manifest:e,state:s,isStatic:o,onError:l})}function oy(r){return Wx(r.context)}function es(r){zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ay({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,useTransitions:u}){zt(!ua(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),f=z.useMemo(()=>({basename:d,navigator:o,static:l,useTransitions:u,future:{}}),[d,o,l,u]);typeof t=="string"&&(t=us(t));let{pathname:p="/",search:m="",hash:v="",state:y=null,key:M="default",mask:E}=t,T=z.useMemo(()=>{let S=Qi(p,d);return S==null?null:{location:{pathname:S,search:m,hash:v,state:y,key:M,mask:E},navigationType:s}},[d,p,m,v,y,M,s,E]);return gi(T!=null,`<Router basename="${d}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:z.createElement(ti.Provider,{value:f},z.createElement(ca.Provider,{children:e,value:T}))}function ly({children:r,location:e}){return $x(Wd(r),e)}function Wd(r,e=[]){let t=[];return z.Children.forEach(r,(s,o)=>{if(!z.isValidElement(s))return;let l=[...e,o];if(s.type===z.Fragment){t.push.apply(t,Wd(s.props.children,l));return}zt(s.type===es,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),zt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let u={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=Wd(s.props.children,l)),t.push(u)}),t}var ec="get",tc="application/x-www-form-urlencoded";function gc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function cy(r){return gc(r)&&r.tagName.toLowerCase()==="button"}function uy(r){return gc(r)&&r.tagName.toLowerCase()==="form"}function dy(r){return gc(r)&&r.tagName.toLowerCase()==="input"}function fy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function hy(r,e){return r.button===0&&(!e||e==="_self")&&!fy(r)}var El=null;function py(){if(El===null)try{new FormData(document.createElement("form"),0),El=!1}catch{El=!0}return El}var my=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ld(r){return r!=null&&!my.has(r)?(gi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tc}"`),null):r}function gy(r,e){let t,s,o,l,u;if(uy(r)){let d=r.getAttribute("action");s=d?Qi(d,e):null,t=r.getAttribute("method")||ec,o=ld(r.getAttribute("enctype"))||tc,l=new FormData(r)}else if(cy(r)||dy(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=r.getAttribute("formaction")||d.getAttribute("action");if(s=f?Qi(f,e):null,t=r.getAttribute("formmethod")||d.getAttribute("method")||ec,o=ld(r.getAttribute("formenctype"))||ld(d.getAttribute("enctype"))||tc,l=new FormData(d,r),!py()){let{name:p,type:m,value:v}=r;if(m==="image"){let y=p?`${p}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else p&&l.append(p,v)}}else{if(gc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=ec,s=null,o=tc,u=r}return l&&o==="text/plain"&&(u=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Pv(r,e,t,s){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:e&&Qi(o.pathname,e)==="/"?o.pathname=`${uc(e)}/_root.${s}`:o.pathname=`${uc(o.pathname)}.${s}`,o}async function vy(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _y(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function xy(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let u=await vy(l,t);return u.links?u.links():[]}return[]}));return Ey(s.flat(1).filter(_y).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Vm(r,e,t,s,o,l){let u=(f,p)=>t[p]?f.route.id!==t[p].route.id:!0,d=(f,p)=>{var m;return t[p].pathname!==f.pathname||((m=t[p].route.path)==null?void 0:m.endsWith("*"))&&t[p].params["*"]!==f.params["*"]};return l==="assets"?e.filter((f,p)=>u(f,p)||d(f,p)):l==="data"?e.filter((f,p)=>{var v;let m=s.routes[f.route.id];if(!m||!m.hasLoader)return!1;if(u(f,p)||d(f,p))return!0;if(f.route.shouldRevalidate){let y=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(r,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function yy(r,e,{includeHydrateFallback:t}={}){return Sy(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Sy(r){return[...new Set(r)]}function My(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function Ey(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(My(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function Wf(){let r=z.useContext(co);return jf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Ty(){let r=z.useContext(mc);return jf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Xf=z.createContext(void 0);Xf.displayName="FrameworkContext";function vc(){let r=z.useContext(Xf);return jf(r,"You must render this element inside a <HydratedRouter> element"),r}function wy(r,e){let t=z.useContext(Xf),[s,o]=z.useState(!1),[l,u]=z.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=e,y=z.useRef(null);z.useEffect(()=>{if(r==="render"&&u(!0),r==="viewport"){let T=x=>{x.forEach(U=>{u(U.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return y.current&&S.observe(y.current),()=>{S.disconnect()}}},[r]),z.useEffect(()=>{if(s){let T=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(T)}}},[s]);let M=()=>{o(!0)},E=()=>{o(!1),u(!1)};return t?r!=="intent"?[l,y,{}]:[l,y,{onFocus:Yo(d,M),onBlur:Yo(f,E),onMouseEnter:Yo(p,M),onMouseLeave:Yo(m,E),onTouchStart:Yo(v,M)}]:[!1,y,{}]}function Yo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function Ry({page:r,...e}){let t=Nx(),{nonce:s}=vc(),{router:o}=Wf(),l=z.useMemo(()=>dv(o.routes,r,o.basename),[o.routes,r,o.basename]);return l?(e.nonce==null&&s&&(e={...e,nonce:s}),t?z.createElement(Cy,{page:r,matches:l,...e}):z.createElement(by,{page:r,matches:l,...e})):null}function Ay(r){let{manifest:e,routeModules:t}=vc(),[s,o]=z.useState([]);return z.useEffect(()=>{let l=!1;return xy(r,e,t).then(u=>{l||o(u)}),()=>{l=!0}},[r,e,t]),s}function Cy({page:r,matches:e,...t}){let s=Pi(),{future:o}=vc(),{basename:l}=Wf(),u=z.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let d=Pv(r,l,o.v8_trailingSlashAwareDataRequests,"rsc"),f=!1,p=[];for(let m of e)typeof m.route.shouldRevalidate=="function"?f=!0:p.push(m.route.id);return f&&p.length>0&&d.searchParams.set("_routes",p.join(",")),[d.pathname+d.search]},[l,o.v8_trailingSlashAwareDataRequests,r,s,e]);return z.createElement(z.Fragment,null,u.map(d=>z.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...t})))}function by({page:r,matches:e,...t}){let s=Pi(),{future:o,manifest:l,routeModules:u}=vc(),{basename:d}=Wf(),{loaderData:f,matches:p}=Ty(),m=z.useMemo(()=>Vm(r,e,p,l,s,"data"),[r,e,p,l,s]),v=z.useMemo(()=>Vm(r,e,p,l,s,"assets"),[r,e,p,l,s]),y=z.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let T=new Set,S=!1;if(e.forEach(U=>{var b;let L=l.routes[U.route.id];!L||!L.hasLoader||(!m.some(k=>k.route.id===U.route.id)&&U.route.id in f&&((b=u[U.route.id])!=null&&b.shouldRevalidate)||L.hasClientLoader?S=!0:T.add(U.route.id))}),T.size===0)return[];let x=Pv(r,d,o.v8_trailingSlashAwareDataRequests,"data");return S&&T.size>0&&x.searchParams.set("_routes",e.filter(U=>T.has(U.route.id)).map(U=>U.route.id).join(",")),[x.pathname+x.search]},[d,o.v8_trailingSlashAwareDataRequests,f,s,l,m,e,r,u]),M=z.useMemo(()=>yy(v,l),[v,l]),E=Ay(v);return z.createElement(z.Fragment,null,y.map(T=>z.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...t})),M.map(T=>z.createElement("link",{key:T,rel:"modulepreload",href:T,...t})),E.map(({key:T,link:S})=>z.createElement("link",{key:T,nonce:t.nonce,...S,crossOrigin:S.crossOrigin??t.crossOrigin})))}function Py(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Ly=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ly&&(window.__reactRouterVersion="7.18.1")}catch{}function Dy({basename:r,children:e,useTransitions:t,window:s}){let o=z.useRef();o.current==null&&(o.current=ax({window:s,v5Compat:!0}));let l=o.current,[u,d]=z.useState({action:l.action,location:l.location}),f=z.useCallback(p=>{t===!1?d(p):z.startTransition(()=>d(p))},[t]);return z.useLayoutEffect(()=>l.listen(f),[l,f]),z.createElement(ay,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:l,useTransitions:t})}var an=z.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:u,mask:d,state:f,target:p,to:m,preventScrollReset:v,viewTransition:y,defaultShouldRevalidate:M,...E},T){let{basename:S,navigator:x,useTransitions:U}=z.useContext(ti),L=typeof m=="string"&&Bf.test(m),b=xv(m,S);m=b.to;let k=Vx(m,{relative:o}),N=Pi(),F=null;if(d){let G=zf(d,[],N.mask?N.mask.pathname:"/",!0);S!=="/"&&(G.pathname=G.pathname==="/"?S:pi([S,G.pathname])),F=x.createHref(G)}let[Y,P,C]=wy(s,E),V=Ny(m,{replace:u,mask:d,state:f,target:p,preventScrollReset:v,relative:o,viewTransition:y,defaultShouldRevalidate:M,useTransitions:U});function fe(G){e&&e(G),G.defaultPrevented||V(G)}let W=!(b.isExternal||l),ie=z.createElement("a",{...E,...C,href:(W?F:void 0)||b.absoluteURL||k,onClick:W?fe:e,ref:Py(T,P),target:p,"data-discover":!L&&t==="render"?"true":void 0});return Y&&!L?z.createElement(z.Fragment,null,ie,z.createElement(Ry,{page:k})):ie});an.displayName="Link";var Xd=z.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:d,children:f,...p},m){let v=da(u,{relative:p.relative}),y=Pi(),M=z.useContext(mc),{navigator:E,basename:T}=z.useContext(ti),S=M!=null&&zy(v)&&d===!0,x=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,U=y.pathname,L=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;t||(U=U.toLowerCase(),L=L?L.toLowerCase():null,x=x.toLowerCase()),L&&T&&(L=Qi(L,T)||L);const b=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let k=U===x||!o&&U.startsWith(x)&&U.charAt(b)==="/",N=L!=null&&(L===x||!o&&L.startsWith(x)&&L.charAt(x.length)==="/"),F={isActive:k,isPending:N,isTransitioning:S},Y=k?e:void 0,P;typeof s=="function"?P=s(F):P=[s,k?"active":null,N?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(F):l;return z.createElement(an,{...p,"aria-current":Y,className:P,ref:m,style:C,to:u,viewTransition:d},typeof f=="function"?f(F):f)});Xd.displayName="NavLink";var Uy=z.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:u=ec,action:d,onSubmit:f,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:y,...M},E)=>{let{useTransitions:T}=z.useContext(ti),S=ky(),x=By(d,{relative:p}),U=u.toLowerCase()==="get"?"get":"post",L=typeof d=="string"&&Bf.test(d),b=k=>{if(f&&f(k),k.defaultPrevented)return;k.preventDefault();let N=k.nativeEvent.submitter,F=(N==null?void 0:N.getAttribute("formmethod"))||u,Y=()=>S(N||k.currentTarget,{fetcherKey:e,method:F,navigate:t,replace:o,state:l,relative:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:y});T&&t!==!1?z.startTransition(()=>Y()):Y()};return z.createElement("form",{ref:E,method:U,action:x,onSubmit:s?f:b,...M,"data-discover":!L&&r==="render"?"true":void 0})});Uy.displayName="Form";function Iy(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lv(r){let e=z.useContext(co);return zt(e,Iy(r)),e}function Ny(r,{target:e,replace:t,mask:s,state:o,preventScrollReset:l,relative:u,viewTransition:d,defaultShouldRevalidate:f,useTransitions:p}={}){let m=Rv(),v=Pi(),y=da(r,{relative:u});return z.useCallback(M=>{if(hy(M,e)){M.preventDefault();let E=t!==void 0?t:aa(v)===aa(y),T=()=>m(r,{replace:E,mask:s,state:o,preventScrollReset:l,relative:u,viewTransition:d,defaultShouldRevalidate:f});p?z.startTransition(()=>T()):T()}},[v,m,y,t,s,o,e,r,l,u,d,f,p])}var Fy=0,Oy=()=>`__${String(++Fy)}__`;function ky(){let{router:r}=Lv("useSubmit"),{basename:e}=z.useContext(ti),t=ny(),s=r.fetch,o=r.navigate;return z.useCallback(async(l,u={})=>{let{action:d,method:f,encType:p,formData:m,body:v}=gy(l,e);if(u.navigate===!1){let y=u.fetcherKey||Oy();await s(y,t,u.action||d,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:m,body:v,formMethod:u.method||f,formEncType:u.encType||p,flushSync:u.flushSync})}else await o(u.action||d,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:m,body:v,formMethod:u.method||f,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[s,o,e,t])}function By(r,{relative:e}={}){let{basename:t}=z.useContext(ti),s=z.useContext(vi);zt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...da(r||".",{relative:e})},u=Pi();if(r==null){l.search=u.search;let d=new URLSearchParams(l.search),f=d.getAll("index");if(f.some(m=>m==="")){d.delete("index"),f.filter(v=>v).forEach(v=>d.append("index",v));let m=d.toString();l.search=m?`?${m}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:pi([t,l.pathname])),aa(l)}function zy(r,{relative:e}={}){let t=z.useContext(Mv);zt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Lv("useViewTransitionState"),o=da(r,{relative:e});if(!t.isTransitioning)return!1;let l=Qi(t.currentLocation.pathname,s)||t.currentLocation.pathname,u=Qi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return cc(o.pathname,u)!=null||cc(o.pathname,l)!=null}const Hy=[{to:"/chapter/intro",label:"入门科普"},{to:"/chapter/compose",label:"核心章节"},{to:"/playground",label:"实操训练"},{to:"/archive",label:"数学档案馆"}];function Vy(){const r={fontSize:"0.85rem",fontWeight:500,textDecoration:"none",color:"var(--ink2)",transition:"color 0.2s"};return g.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",height:"3.5rem",padding:"0 1.5rem",background:"rgba(255,255,255,0.7)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",borderBottom:"1px solid var(--rule)"},children:[g.jsx(Xd,{to:"/",style:{fontSize:"1.1rem",fontWeight:700,letterSpacing:"-0.02em",color:"var(--ink)",textDecoration:"none"},children:"Cube × Math"}),g.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1.5rem"},children:Hy.map(({to:e,label:t})=>g.jsx(Xd,{to:e,end:!0,style:({isActive:s})=>({...r,color:s?"var(--ink)":"var(--ink2)",position:"relative",...s?{fontWeight:600}:{}}),children:t},e))})]})}function Gy(){return g.jsx("footer",{children:"Cube * Math - 用数学思维理解魔方"})}function jy(){return g.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[g.jsx(Vy,{}),g.jsx("main",{style:{paddingTop:"3.75rem",flex:1},children:g.jsx(oy,{})}),g.jsx(Gy,{})]})}function Wy(){return g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"hero",children:[g.jsx("div",{className:"hero-badge",children:"线性代数 × 魔方"}),g.jsxs("h1",{children:["魔方不是靠背的",g.jsx("br",{}),"是用",g.jsx("em",{children:"数学"}),"推出来的"]}),g.jsx("p",{className:"sub",children:"用线性代数思维理解魔方转动，用抵消法自主推导复原方案——零公式，纯逻辑。"}),g.jsxs("div",{className:"btn-row",children:[g.jsx(an,{to:"/chapter/intro",className:"btn btn-primary",children:"📖 从零开始，用数学看懂魔方"}),g.jsx(an,{to:"/chapter/solve",className:"btn btn-outline",children:"🧊 动手推导，体验复原逻辑"})]})]}),g.jsx("div",{className:"section-sm",style:{textAlign:"center"},children:g.jsxs("div",{className:"container",children:[g.jsx(an,{to:"/chapter/compose",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.9rem 2rem",background:"linear-gradient(135deg, var(--accent), var(--accent-d))",color:"#fff",fontWeight:700,fontSize:"1.05rem",borderRadius:"14px",textDecoration:"none",boxShadow:"0 4px 24px rgba(37,99,235,0.35)",transition:"transform 0.2s, box-shadow 0.2s"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-2px)",r.currentTarget.style.boxShadow="0 6px 32px rgba(37,99,235,0.45)"},onMouseLeave:r=>{r.currentTarget.style.transform="",r.currentTarget.style.boxShadow="0 4px 24px rgba(37,99,235,0.35)"},children:"🎮 直接上手体验 →"}),g.jsx("p",{style:{color:"var(--ink2)",fontSize:"0.82rem",marginTop:"0.6rem"},children:"先看看矩阵乘法为什么不能交换 —— 3 分钟理解线代和魔方的关联"})]})}),g.jsx("div",{className:"section-sm",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"card-grid",children:[g.jsxs("div",{className:"card",children:[g.jsx("span",{className:"card-icon",children:"🧩"}),g.jsx("h3",{children:"零公式复原"}),g.jsx("p",{children:"不靠死记硬背，用逆变换逻辑自主推导每一步操作"})]}),g.jsxs("div",{className:"card",children:[g.jsx("span",{className:"card-icon",children:"🖐️"}),g.jsx("h3",{children:"交互式学习"}),g.jsx("p",{children:"所有概念均可动手操作，拖动魔方直接感受变换效果"})]}),g.jsxs("div",{className:"card",children:[g.jsx("span",{className:"card-icon",children:"📐"}),g.jsx("h3",{children:"线代思维复用"}),g.jsx("p",{children:"把课本知识落地，真正理解矩阵、逆矩阵、交换律"})]})]})})}),g.jsx("div",{className:"section",children:g.jsxs("div",{className:"container",children:[g.jsx("h2",{style:{textAlign:"center",fontSize:"1.3rem",fontWeight:700,marginBottom:"1.8rem"},children:"🧭 后续演进路线"}),g.jsx("div",{style:{maxWidth:"600px",margin:"0 auto",borderLeft:"3px solid var(--accent)",paddingLeft:"1.5rem"},children:[{stage:"阶段一（当前 Demo）",desc:"三阶魔方 + 线代概念科普 + 角块引导复原演示"},{stage:"阶段二",desc:"引入二阶魔方，30 分钟零基础入门（仅需一个公式 R U R' U'）"},{stage:"阶段三",desc:"三阶完整复原教学（七步引导，每步对应线代概念，含分步检测与提示系统）"},{stage:"阶段四",desc:'从线代类比走向群论入门，完成"类比→严谨"的学术过渡'}].map((r,e)=>g.jsxs("div",{style:{position:"relative",marginBottom:e<3?"1.5rem":0,paddingBottom:e<3?"1.5rem":0},children:[g.jsx("div",{style:{position:"absolute",left:"-1.8rem",top:"0.3rem",width:"14px",height:"14px",borderRadius:"50%",background:e===0?"var(--accent)":"var(--rule)",border:e===0?"3px solid var(--accent)":"3px solid var(--rule)"}}),g.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:e===0?"var(--accent)":"var(--ink)",marginBottom:"0.2rem"},children:r.stage}),g.jsx("div",{style:{fontSize:"0.84rem",color:"var(--ink2)"},children:r.desc}),e<3&&g.jsx("div",{style:{marginTop:"0.6rem",marginLeft:"-0.2rem",fontSize:"0.8rem",color:"var(--muted)"},children:"↓"})]},e))})]})}),g.jsx("div",{className:"section-sm",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"notice",children:["📐 ",g.jsx("strong",{children:"类比说明"}),"：本站用线性代数做类比科普，帮助理解魔方变换的行为逻辑。 魔方的严谨数学本质是",g.jsx("strong",{children:"置换群（鲁比克群）"}),"。想了解严谨数学？",g.jsx(an,{to:"/archive",children:" 前往数学档案馆 →"})]})})})]})}function sa({data:r,rows:e,label:t}){const s=r??e;return!s||s.length===0?g.jsx("span",{style:{color:"var(--muted)",fontSize:"0.85rem"},children:"[空矩阵]"}):g.jsxs("div",{className:"matrix-wrapper",children:[t&&g.jsx("span",{className:"matrix-label",children:t}),g.jsx("div",{className:"matrix",children:s.map((o,l)=>g.jsx("div",{className:"mrow",children:o.map((u,d)=>g.jsx("span",{children:u},d))},l))})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $f="170",Xy=0,Gm=1,$y=2,Dv=1,Yy=2,$i=3,Lr=0,Un=1,Yi=2,br=0,eo=1,jm=2,Wm=3,Xm=4,qy=5,rs=100,Ky=101,Zy=102,Qy=103,Jy=104,eS=200,tS=201,nS=202,iS=203,$d=204,Yd=205,rS=206,sS=207,oS=208,aS=209,lS=210,cS=211,uS=212,dS=213,fS=214,qd=0,Kd=1,Zd=2,io=3,Qd=4,Jd=5,ef=6,tf=7,Uv=0,hS=1,pS=2,Pr=0,mS=1,gS=2,vS=3,_S=4,xS=5,yS=6,SS=7,Iv=300,ro=301,so=302,nf=303,rf=304,_c=306,sf=1e3,os=1001,of=1002,mi=1003,MS=1004,Tl=1005,wi=1006,cd=1007,as=1008,Ji=1009,Nv=1010,Fv=1011,la=1012,Yf=1013,ls=1014,qi=1015,fa=1016,qf=1017,Kf=1018,oo=1020,Ov=35902,kv=1021,Bv=1022,hi=1023,zv=1024,Hv=1025,to=1026,ao=1027,Vv=1028,Zf=1029,Gv=1030,Qf=1031,Jf=1033,nc=33776,ic=33777,rc=33778,sc=33779,af=35840,lf=35841,cf=35842,uf=35843,df=36196,ff=37492,hf=37496,pf=37808,mf=37809,gf=37810,vf=37811,_f=37812,xf=37813,yf=37814,Sf=37815,Mf=37816,Ef=37817,Tf=37818,wf=37819,Rf=37820,Af=37821,oc=36492,Cf=36494,bf=36495,jv=36283,Pf=36284,Lf=36285,Df=36286,ES=3200,TS=3201,Wv=0,wS=1,Cr="",Qn="srgb",uo="srgb-linear",xc="linear",Pt="srgb",Ns=7680,$m=519,RS=512,AS=513,CS=514,Xv=515,bS=516,PS=517,LS=518,DS=519,Ym=35044,qm="300 es",Ki=2e3,dc=2001;class fo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ac=Math.PI/180,Uf=180/Math.PI;function ha(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]).toLowerCase()}function Ln(r,e,t){return Math.max(e,Math.min(t,r))}function US(r,e){return(r%e+e)%e}function ud(r,e,t){return(1-t)*r+t*e}function qo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,s,o,l,u,d,f,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,d,f,p)}set(e,t,s,o,l,u,d,f,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=d,m[3]=t,m[4]=l,m[5]=f,m[6]=s,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],d=s[3],f=s[6],p=s[1],m=s[4],v=s[7],y=s[2],M=s[5],E=s[8],T=o[0],S=o[3],x=o[6],U=o[1],L=o[4],b=o[7],k=o[2],N=o[5],F=o[8];return l[0]=u*T+d*U+f*k,l[3]=u*S+d*L+f*N,l[6]=u*x+d*b+f*F,l[1]=p*T+m*U+v*k,l[4]=p*S+m*L+v*N,l[7]=p*x+m*b+v*F,l[2]=y*T+M*U+E*k,l[5]=y*S+M*L+E*N,l[8]=y*x+M*b+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8];return t*u*m-t*d*p-s*l*m+s*d*f+o*l*p-o*u*f}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8],v=m*u-d*p,y=d*f-m*l,M=p*l-u*f,E=t*v+s*y+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(o*p-m*s)*T,e[2]=(d*s-o*u)*T,e[3]=y*T,e[4]=(m*t-o*f)*T,e[5]=(o*l-d*t)*T,e[6]=M*T,e[7]=(s*f-p*t)*T,e[8]=(u*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(s*f,s*p,-s*(f*u+p*d)+u+e,-o*p,o*f,-o*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(dd.makeScale(e,t)),this}rotate(e){return this.premultiply(dd.makeRotation(-e)),this}translate(e,t){return this.premultiply(dd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dd=new dt;function $v(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function IS(){const r=fc("canvas");return r.style.display="block",r}const Km={};function ta(r){r in Km||(Km[r]=!0,console.warn(r))}function NS(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function FS(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function OS(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(r.r=no(r.r),r.g=no(r.g),r.b=no(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cr?xc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function no(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Zm=[.64,.33,.3,.6,.15,.06],Qm=[.2126,.7152,.0722],Jm=[.3127,.329],eg=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tg=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[uo]:{primaries:Zm,whitePoint:Jm,transfer:xc,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:Qm,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:Zm,whitePoint:Jm,transfer:Pt,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:Qm,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}});let Fs;class kS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=fc("canvas")),Fs.width=e.width,Fs.height=e.height;const s=Fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Zi(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Zi(t[s]/255)*255):t[s]=Zi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BS=0;class Yv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=ha(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(fd(o[u].image)):l.push(fd(o[u]))}else l=fd(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function fd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?kS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zS=0;class In extends fo{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,s=os,o=os,l=wi,u=as,d=hi,f=Ji,p=In.DEFAULT_ANISOTROPY,m=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=ha(),this.name="",this.source=new Yv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sf:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sf:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Iv;In.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,s=0,o=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const f=e.elements,p=f[0],m=f[4],v=f[8],y=f[1],M=f[5],E=f[9],T=f[2],S=f[6],x=f[10];if(Math.abs(m-y)<.01&&Math.abs(v-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+y)<.1&&Math.abs(v+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,b=(M+1)/2,k=(x+1)/2,N=(m+y)/4,F=(v+T)/4,Y=(E+S)/4;return L>b&&L>k?L<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(L),o=N/s,l=F/s):b>k?b<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),s=N/o,l=Y/o):k<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),s=F/l,o=Y/l),this.set(s,o,l,t),this}let U=Math.sqrt((S-E)*(S-E)+(v-T)*(v-T)+(y-m)*(y-m));return Math.abs(U)<.001&&(U=1),this.x=(S-E)/U,this.y=(v-T)/U,this.z=(y-m)/U,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HS extends fo{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const o={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new In(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends HS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class qv extends In{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VS extends In{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pa{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,d){let f=s[o+0],p=s[o+1],m=s[o+2],v=s[o+3];const y=l[u+0],M=l[u+1],E=l[u+2],T=l[u+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(d===1){e[t+0]=y,e[t+1]=M,e[t+2]=E,e[t+3]=T;return}if(v!==T||f!==y||p!==M||m!==E){let S=1-d;const x=f*y+p*M+m*E+v*T,U=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const k=Math.sqrt(L),N=Math.atan2(k,x*U);S=Math.sin(S*N)/k,d=Math.sin(d*N)/k}const b=d*U;if(f=f*S+y*b,p=p*S+M*b,m=m*S+E*b,v=v*S+T*b,S===1-d){const k=1/Math.sqrt(f*f+p*p+m*m+v*v);f*=k,p*=k,m*=k,v*=k}}e[t]=f,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,o,l,u){const d=s[o],f=s[o+1],p=s[o+2],m=s[o+3],v=l[u],y=l[u+1],M=l[u+2],E=l[u+3];return e[t]=d*E+m*v+f*M-p*y,e[t+1]=f*E+m*y+p*v-d*M,e[t+2]=p*E+m*M+d*y-f*v,e[t+3]=m*E-d*v-f*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(s/2),m=d(o/2),v=d(l/2),y=f(s/2),M=f(o/2),E=f(l/2);switch(u){case"XYZ":this._x=y*m*v+p*M*E,this._y=p*M*v-y*m*E,this._z=p*m*E+y*M*v,this._w=p*m*v-y*M*E;break;case"YXZ":this._x=y*m*v+p*M*E,this._y=p*M*v-y*m*E,this._z=p*m*E-y*M*v,this._w=p*m*v+y*M*E;break;case"ZXY":this._x=y*m*v-p*M*E,this._y=p*M*v+y*m*E,this._z=p*m*E+y*M*v,this._w=p*m*v-y*M*E;break;case"ZYX":this._x=y*m*v-p*M*E,this._y=p*M*v+y*m*E,this._z=p*m*E-y*M*v,this._w=p*m*v+y*M*E;break;case"YZX":this._x=y*m*v+p*M*E,this._y=p*M*v+y*m*E,this._z=p*m*E-y*M*v,this._w=p*m*v-y*M*E;break;case"XZY":this._x=y*m*v-p*M*E,this._y=p*M*v-y*m*E,this._z=p*m*E+y*M*v,this._w=p*m*v+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],m=t[6],v=t[10],y=s+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(m-f)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(m-f)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(f+m)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(f+m)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,m=t._w;return this._x=s*m+u*d+o*p-l*f,this._y=o*m+u*f+l*d-s*p,this._z=l*m+u*p+s*f-o*d,this._w=u*m-s*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+s*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=s,this._y=o,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*s+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),m=Math.atan2(p,d),v=Math.sin((1-t)*m)/p,y=Math.sin(t*m)/p;return this._w=u*v+this._w*y,this._x=s*v+this._x*y,this._y=o*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,s=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ng.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ng.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*o-d*s),m=2*(d*t-l*o),v=2*(l*s-u*t);return this.x=t+f*p+u*v-d*m,this.y=s+f*m+d*p-l*v,this.z=o+f*v+l*m-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*u-s*f,this.z=s*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new ne,ng=new pa;class ma{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ui):ui.fromBufferAttribute(l,u),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wl.copy(s.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Rl.subVectors(this.max,Ko),Os.subVectors(e.a,Ko),ks.subVectors(e.b,Ko),Bs.subVectors(e.c,Ko),Mr.subVectors(ks,Os),Er.subVectors(Bs,ks),$r.subVectors(Os,Bs);let t=[0,-Mr.z,Mr.y,0,-Er.z,Er.y,0,-$r.z,$r.y,Mr.z,0,-Mr.x,Er.z,0,-Er.x,$r.z,0,-$r.x,-Mr.y,Mr.x,0,-Er.y,Er.x,0,-$r.y,$r.x,0];return!pd(t,Os,ks,Bs,Rl)||(t=[1,0,0,0,1,0,0,0,1],!pd(t,Os,ks,Bs,Rl))?!1:(Al.crossVectors(Mr,Er),t=[Al.x,Al.y,Al.z],pd(t,Os,ks,Bs,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ui=new ne,wl=new ma,Os=new ne,ks=new ne,Bs=new ne,Mr=new ne,Er=new ne,$r=new ne,Ko=new ne,Rl=new ne,Al=new ne,Yr=new ne;function pd(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){Yr.fromArray(r,l);const d=o.x*Math.abs(Yr.x)+o.y*Math.abs(Yr.y)+o.z*Math.abs(Yr.z),f=e.dot(Yr),p=t.dot(Yr),m=s.dot(Yr);if(Math.max(-Math.max(f,p,m),Math.min(f,p,m))>d)return!1}return!0}const GS=new ma,Zo=new ne,md=new ne;class yc{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):GS.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const t=Zo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Zo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(md)),this.expandByPoint(Zo.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new ne,gd=new ne,Cl=new ne,Tr=new ne,vd=new ne,bl=new ne,_d=new ne;class eh{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){gd.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(gd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Cl),d=Tr.dot(this.direction),f=-Tr.dot(Cl),p=Tr.lengthSq(),m=Math.abs(1-u*u);let v,y,M,E;if(m>0)if(v=u*f-d,y=u*d-f,E=l*m,v>=0)if(y>=-E)if(y<=E){const T=1/m;v*=T,y*=T,M=v*(v+u*y+2*d)+y*(u*v+y+2*f)+p}else y=l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*f)+p;else y=-l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*f)+p;else y<=-E?(v=Math.max(0,-(-u*l+d)),y=v>0?-l:Math.min(Math.max(-l,-f),l),M=-v*v+y*(y+2*f)+p):y<=E?(v=0,y=Math.min(Math.max(-l,-f),l),M=y*(y+2*f)+p):(v=Math.max(0,-(u*l+d)),y=v>0?l:Math.min(Math.max(-l,-f),l),M=-v*v+y*(y+2*f)+p);else y=u>0?-l:l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*f)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(gd).addScaledVector(Cl,y),M}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const s=Gi.dot(this.direction),o=Gi.dot(Gi)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=s-u,f=s+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,d,f;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),m>=0?(l=(e.min.y-y.y)*m,u=(e.max.y-y.y)*m):(l=(e.max.y-y.y)*m,u=(e.min.y-y.y)*m),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-y.z)*v,f=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,f=(e.min.z-y.z)*v),s>f||d>o)||((d>s||s!==s)&&(s=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,s,o,l){vd.subVectors(t,e),bl.subVectors(s,e),_d.crossVectors(vd,bl);let u=this.direction.dot(_d),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Tr.subVectors(this.origin,e);const f=d*this.direction.dot(bl.crossVectors(Tr,bl));if(f<0)return null;const p=d*this.direction.dot(vd.cross(Tr));if(p<0||f+p>u)return null;const m=-d*Tr.dot(_d);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,s,o,l,u,d,f,p,m,v,y,M,E,T,S){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,d,f,p,m,v,y,M,E,T,S)}set(e,t,s,o,l,u,d,f,p,m,v,y,M,E,T,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=o,x[1]=l,x[5]=u,x[9]=d,x[13]=f,x[2]=p,x[6]=m,x[10]=v,x[14]=y,x[3]=M,x[7]=E,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/zs.setFromMatrixColumn(e,0).length(),l=1/zs.setFromMatrixColumn(e,1).length(),u=1/zs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),d=Math.sin(s),f=Math.cos(o),p=Math.sin(o),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*m,M=u*v,E=d*m,T=d*v;t[0]=f*m,t[4]=-f*v,t[8]=p,t[1]=M+E*p,t[5]=y-T*p,t[9]=-d*f,t[2]=T-y*p,t[6]=E+M*p,t[10]=u*f}else if(e.order==="YXZ"){const y=f*m,M=f*v,E=p*m,T=p*v;t[0]=y+T*d,t[4]=E*d-M,t[8]=u*p,t[1]=u*v,t[5]=u*m,t[9]=-d,t[2]=M*d-E,t[6]=T+y*d,t[10]=u*f}else if(e.order==="ZXY"){const y=f*m,M=f*v,E=p*m,T=p*v;t[0]=y-T*d,t[4]=-u*v,t[8]=E+M*d,t[1]=M+E*d,t[5]=u*m,t[9]=T-y*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const y=u*m,M=u*v,E=d*m,T=d*v;t[0]=f*m,t[4]=E*p-M,t[8]=y*p+T,t[1]=f*v,t[5]=T*p+y,t[9]=M*p-E,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const y=u*f,M=u*p,E=d*f,T=d*p;t[0]=f*m,t[4]=T-y*v,t[8]=E*v+M,t[1]=v,t[5]=u*m,t[9]=-d*m,t[2]=-p*m,t[6]=M*v+E,t[10]=y-T*v}else if(e.order==="XZY"){const y=u*f,M=u*p,E=d*f,T=d*p;t[0]=f*m,t[4]=-v,t[8]=p*m,t[1]=y*v+T,t[5]=u*m,t[9]=M*v-E,t[2]=E*v-M,t[6]=d*m,t[10]=T*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jS,e,WS)}lookAt(e,t,s){const o=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),wr.crossVectors(s,Bn),wr.lengthSq()===0&&(Math.abs(s.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),wr.crossVectors(s,Bn)),wr.normalize(),Pl.crossVectors(Bn,wr),o[0]=wr.x,o[4]=Pl.x,o[8]=Bn.x,o[1]=wr.y,o[5]=Pl.y,o[9]=Bn.y,o[2]=wr.z,o[6]=Pl.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],d=s[4],f=s[8],p=s[12],m=s[1],v=s[5],y=s[9],M=s[13],E=s[2],T=s[6],S=s[10],x=s[14],U=s[3],L=s[7],b=s[11],k=s[15],N=o[0],F=o[4],Y=o[8],P=o[12],C=o[1],V=o[5],fe=o[9],W=o[13],ie=o[2],G=o[6],X=o[10],J=o[14],B=o[3],se=o[7],ue=o[11],O=o[15];return l[0]=u*N+d*C+f*ie+p*B,l[4]=u*F+d*V+f*G+p*se,l[8]=u*Y+d*fe+f*X+p*ue,l[12]=u*P+d*W+f*J+p*O,l[1]=m*N+v*C+y*ie+M*B,l[5]=m*F+v*V+y*G+M*se,l[9]=m*Y+v*fe+y*X+M*ue,l[13]=m*P+v*W+y*J+M*O,l[2]=E*N+T*C+S*ie+x*B,l[6]=E*F+T*V+S*G+x*se,l[10]=E*Y+T*fe+S*X+x*ue,l[14]=E*P+T*W+S*J+x*O,l[3]=U*N+L*C+b*ie+k*B,l[7]=U*F+L*V+b*G+k*se,l[11]=U*Y+L*fe+b*X+k*ue,l[15]=U*P+L*W+b*J+k*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],m=e[2],v=e[6],y=e[10],M=e[14],E=e[3],T=e[7],S=e[11],x=e[15];return E*(+l*f*v-o*p*v-l*d*y+s*p*y+o*d*M-s*f*M)+T*(+t*f*M-t*p*y+l*u*y-o*u*M+o*p*m-l*f*m)+S*(+t*p*v-t*d*M-l*u*v+s*u*M+l*d*m-s*p*m)+x*(-o*d*m-t*f*v+t*d*y+o*u*v-s*u*y+s*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8],v=e[9],y=e[10],M=e[11],E=e[12],T=e[13],S=e[14],x=e[15],U=v*S*p-T*y*p+T*f*M-d*S*M-v*f*x+d*y*x,L=E*y*p-m*S*p-E*f*M+u*S*M+m*f*x-u*y*x,b=m*T*p-E*v*p+E*d*M-u*T*M-m*d*x+u*v*x,k=E*v*f-m*T*f-E*d*y+u*T*y+m*d*S-u*v*S,N=t*U+s*L+o*b+l*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=U*F,e[1]=(T*y*l-v*S*l-T*o*M+s*S*M+v*o*x-s*y*x)*F,e[2]=(d*S*l-T*f*l+T*o*p-s*S*p-d*o*x+s*f*x)*F,e[3]=(v*f*l-d*y*l-v*o*p+s*y*p+d*o*M-s*f*M)*F,e[4]=L*F,e[5]=(m*S*l-E*y*l+E*o*M-t*S*M-m*o*x+t*y*x)*F,e[6]=(E*f*l-u*S*l-E*o*p+t*S*p+u*o*x-t*f*x)*F,e[7]=(u*y*l-m*f*l+m*o*p-t*y*p-u*o*M+t*f*M)*F,e[8]=b*F,e[9]=(E*v*l-m*T*l-E*s*M+t*T*M+m*s*x-t*v*x)*F,e[10]=(u*T*l-E*d*l+E*s*p-t*T*p-u*s*x+t*d*x)*F,e[11]=(m*d*l-u*v*l-m*s*p+t*v*p+u*s*M-t*d*M)*F,e[12]=k*F,e[13]=(m*T*o-E*v*o+E*s*y-t*T*y-m*s*S+t*v*S)*F,e[14]=(E*d*o-u*T*o-E*s*f+t*T*f+u*s*S-t*d*S)*F,e[15]=(u*v*o-m*d*o+m*s*f-t*v*f-u*s*y+t*d*y)*F,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,d=e.y,f=e.z,p=l*u,m=l*d;return this.set(p*u+s,p*d-o*f,p*f+o*d,0,p*d+o*f,m*d+s,m*f-o*u,0,p*f-o*d,m*f+o*u,l*f*f+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,m=u+u,v=d+d,y=l*p,M=l*m,E=l*v,T=u*m,S=u*v,x=d*v,U=f*p,L=f*m,b=f*v,k=s.x,N=s.y,F=s.z;return o[0]=(1-(T+x))*k,o[1]=(M+b)*k,o[2]=(E-L)*k,o[3]=0,o[4]=(M-b)*N,o[5]=(1-(y+x))*N,o[6]=(S+U)*N,o[7]=0,o[8]=(E+L)*F,o[9]=(S-U)*F,o[10]=(1-(y+T))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=zs.set(o[0],o[1],o[2]).length();const u=zs.set(o[4],o[5],o[6]).length(),d=zs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],di.copy(this);const p=1/l,m=1/u,v=1/d;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=m,di.elements[5]*=m,di.elements[6]*=m,di.elements[8]*=v,di.elements[9]*=v,di.elements[10]*=v,t.setFromRotationMatrix(di),s.x=l,s.y=u,s.z=d,this}makePerspective(e,t,s,o,l,u,d=Ki){const f=this.elements,p=2*l/(t-e),m=2*l/(s-o),v=(t+e)/(t-e),y=(s+o)/(s-o);let M,E;if(d===Ki)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(d===dc)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=m,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,s,o,l,u,d=Ki){const f=this.elements,p=1/(t-e),m=1/(s-o),v=1/(u-l),y=(t+e)*p,M=(s+o)*m;let E,T;if(d===Ki)E=(u+l)*v,T=-2*v;else if(d===dc)E=l*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-y,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-M,f[2]=0,f[6]=0,f[10]=T,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const zs=new ne,di=new Ot,jS=new ne(0,0,0),WS=new ne(1,1,1),wr=new ne,Pl=new ne,Bn=new ne,ig=new Ot,rg=new pa;class bi{constructor(e=0,t=0,s=0,o=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],f=o[1],p=o[5],m=o[9],v=o[2],y=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Ln(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return ig.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ig,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rg.setFromEuler(this),this.setFromQuaternion(rg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XS=0;const sg=new ne,Hs=new pa,ji=new Ot,Ll=new ne,Qo=new ne,$S=new ne,YS=new pa,og=new ne(1,0,0),ag=new ne(0,1,0),lg=new ne(0,0,1),cg={type:"added"},qS={type:"removed"},Vs={type:"childadded",child:null},xd={type:"childremoved",child:null};class rn extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new ne,t=new bi,s=new pa,o=new ne(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ot},normalMatrix:{value:new dt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(og,e)}rotateY(e){return this.rotateOnAxis(ag,e)}rotateZ(e){return this.rotateOnAxis(lg,e)}translateOnAxis(e,t){return sg.copy(e).applyQuaternion(this.quaternion),this.position.add(sg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(og,e)}translateY(e){return this.translateOnAxis(ag,e)}translateZ(e){return this.translateOnAxis(lg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Ll.copy(e):Ll.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Qo,Ll,this.up):ji.lookAt(Ll,Qo,this.up),this.quaternion.setFromRotationMatrix(ji),o&&(ji.extractRotation(o.matrixWorld),Hs.setFromRotationMatrix(ji),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cg),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qS),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cg),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,$S),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,YS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,m=f.length;p<m;p++){const v=f[p];l(e.shapes,v)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),m=u(e.images),v=u(e.shapes),y=u(e.skeletons),M=u(e.animations),E=u(e.nodes);d.length>0&&(s.geometries=d),f.length>0&&(s.materials=f),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(d){const f=[];for(const p in d){const m=d[p];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}rn.DEFAULT_UP=new ne(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new ne,Wi=new ne,yd=new ne,Xi=new ne,Gs=new ne,js=new ne,ug=new ne,Sd=new ne,Md=new ne,Ed=new ne,Td=new Vt,wd=new Vt,Rd=new Vt;class ei{constructor(e=new ne,t=new ne,s=new ne){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),fi.subVectors(e,t),o.cross(fi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){fi.subVectors(o,t),Wi.subVectors(s,t),yd.subVectors(e,t);const u=fi.dot(fi),d=fi.dot(Wi),f=fi.dot(yd),p=Wi.dot(Wi),m=Wi.dot(yd),v=u*p-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,M=(p*f-d*m)*y,E=(u*m-d*f)*y;return l.set(1-M-E,E,M)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,s,o,l,u,d,f){return this.getBarycoord(e,t,s,o,Xi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Xi.x),f.addScaledVector(u,Xi.y),f.addScaledVector(d,Xi.z),f)}static getInterpolatedAttribute(e,t,s,o,l,u){return Td.setScalar(0),wd.setScalar(0),Rd.setScalar(0),Td.fromBufferAttribute(e,t),wd.fromBufferAttribute(e,s),Rd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Td,l.x),u.addScaledVector(wd,l.y),u.addScaledVector(Rd,l.z),u}static isFrontFacing(e,t,s,o){return fi.subVectors(s,t),Wi.subVectors(e,t),fi.cross(Wi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),fi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return ei.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,d;Gs.subVectors(o,s),js.subVectors(l,s),Sd.subVectors(e,s);const f=Gs.dot(Sd),p=js.dot(Sd);if(f<=0&&p<=0)return t.copy(s);Md.subVectors(e,o);const m=Gs.dot(Md),v=js.dot(Md);if(m>=0&&v<=m)return t.copy(o);const y=f*v-m*p;if(y<=0&&f>=0&&m<=0)return u=f/(f-m),t.copy(s).addScaledVector(Gs,u);Ed.subVectors(e,l);const M=Gs.dot(Ed),E=js.dot(Ed);if(E>=0&&M<=E)return t.copy(l);const T=M*p-f*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(s).addScaledVector(js,d);const S=m*E-M*v;if(S<=0&&v-m>=0&&M-E>=0)return ug.subVectors(l,o),d=(v-m)/(v-m+(M-E)),t.copy(o).addScaledVector(ug,d);const x=1/(S+T+y);return u=T*x,d=y*x,t.copy(s).addScaledVector(Gs,u).addScaledVector(js,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Ad(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class _t{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=St.workingColorSpace){return this.r=e,this.g=t,this.b=s,St.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=St.workingColorSpace){if(e=US(e,1),t=Ln(t,0,1),s=Ln(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=Ad(u,l,e+1/3),this.g=Ad(u,l,e),this.b=Ad(u,l,e-1/3)}return St.toWorkingColorSpace(this,o),this}setStyle(e,t=Qn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){const s=Kv[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return St.fromWorkingColorSpace(mn.copy(this),e),Math.round(Ln(mn.r*255,0,255))*65536+Math.round(Ln(mn.g*255,0,255))*256+Math.round(Ln(mn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(mn.copy(this),t);const s=mn.r,o=mn.g,l=mn.b,u=Math.max(s,o,l),d=Math.min(s,o,l);let f,p;const m=(d+u)/2;if(d===u)f=0,p=0;else{const v=u-d;switch(p=m<=.5?v/(u+d):v/(2-u-d),u){case s:f=(o-l)/v+(o<l?6:0);break;case o:f=(l-s)/v+2;break;case l:f=(s-o)/v+4;break}f/=6}return e.h=f,e.s=p,e.l=m,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Qn){St.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,s=mn.g,o=mn.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Dl);const s=ud(Rr.h,Dl.h,t),o=ud(Rr.s,Dl.s,t),l=ud(Rr.l,Dl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new _t;_t.NAMES=Kv;let KS=0;class ho extends fo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=ha(),this.name="",this.blending=eo,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=Yd,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(s.blending=this.blending),this.side!==Lr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==$d&&(s.blendSrc=this.blendSrc),this.blendDst!==Yd&&(s.blendDst=this.blendDst),this.blendEquation!==rs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$m&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zv extends ho{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new ne,Ul=new Rt;class Ai{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Ym,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=qo(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Pn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),s=Pn(s,this.array),o=Pn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),s=Pn(s,this.array),o=Pn(o,this.array),l=Pn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ym&&(e.usage=this.usage),e}}class Qv extends Ai{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Jv extends Ai{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Ci extends Ai{constructor(e,t,s){super(new Float32Array(e),t,s)}}let ZS=0;const qn=new Ot,Cd=new rn,Ws=new ne,zn=new ma,Jo=new ma,nn=new ne;class er extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($v(e)?Jv:Qv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new dt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,s){return qn.makeTranslation(e,t,s),this.applyMatrix4(qn),this}scale(e,t,s){return qn.makeScale(e,t,s),this.applyMatrix4(qn),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ci(s,3))}else{for(let s=0,o=t.count;s<o;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Jo.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(zn.min,Jo.min),zn.expandByPoint(nn),nn.addVectors(zn.max,Jo.max),zn.expandByPoint(nn)):(zn.expandByPoint(Jo.min),zn.expandByPoint(Jo.max))}zn.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)nn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(nn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,m=d.count;p<m;p++)nn.fromBufferAttribute(d,p),f&&(Ws.fromBufferAttribute(e,p),nn.add(Ws)),o=Math.max(o,s.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),d=[],f=[];for(let Y=0;Y<s.count;Y++)d[Y]=new ne,f[Y]=new ne;const p=new ne,m=new ne,v=new ne,y=new Rt,M=new Rt,E=new Rt,T=new ne,S=new ne;function x(Y,P,C){p.fromBufferAttribute(s,Y),m.fromBufferAttribute(s,P),v.fromBufferAttribute(s,C),y.fromBufferAttribute(l,Y),M.fromBufferAttribute(l,P),E.fromBufferAttribute(l,C),m.sub(p),v.sub(p),M.sub(y),E.sub(y);const V=1/(M.x*E.y-E.x*M.y);isFinite(V)&&(T.copy(m).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(V),S.copy(v).multiplyScalar(M.x).addScaledVector(m,-E.x).multiplyScalar(V),d[Y].add(T),d[P].add(T),d[C].add(T),f[Y].add(S),f[P].add(S),f[C].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Y=0,P=U.length;Y<P;++Y){const C=U[Y],V=C.start,fe=C.count;for(let W=V,ie=V+fe;W<ie;W+=3)x(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const L=new ne,b=new ne,k=new ne,N=new ne;function F(Y){k.fromBufferAttribute(o,Y),N.copy(k);const P=d[Y];L.copy(P),L.sub(k.multiplyScalar(k.dot(P))).normalize(),b.crossVectors(N,P);const V=b.dot(f[Y])<0?-1:1;u.setXYZW(Y,L.x,L.y,L.z,V)}for(let Y=0,P=U.length;Y<P;++Y){const C=U[Y],V=C.start,fe=C.count;for(let W=V,ie=V+fe;W<ie;W+=3)F(e.getX(W+0)),F(e.getX(W+1)),F(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const o=new ne,l=new ne,u=new ne,d=new ne,f=new ne,p=new ne,m=new ne,v=new ne;if(e)for(let y=0,M=e.count;y<M;y+=3){const E=e.getX(y+0),T=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),m.subVectors(u,l),v.subVectors(o,l),m.cross(v),d.fromBufferAttribute(s,E),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),d.add(m),f.add(m),p.add(m),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,f.x,f.y,f.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=t.count;y<M;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),m.subVectors(u,l),v.subVectors(o,l),m.cross(v),s.setXYZ(y+0,m.x,m.y,m.z),s.setXYZ(y+1,m.x,m.y,m.z),s.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,f){const p=d.array,m=d.itemSize,v=d.normalized,y=new p.constructor(f.length*m);let M=0,E=0;for(let T=0,S=f.length;T<S;T++){d.isInterleavedBufferAttribute?M=f[T]*d.data.stride+d.offset:M=f[T]*m;for(let x=0;x<m;x++)y[E++]=p[M++]}return new Ai(y,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new er,s=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,s);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let m=0,v=p.length;m<v;m++){const y=p[m],M=e(y,s);f.push(M)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const f in s){const p=s[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],m=[];for(let v=0,y=p.length;v<y;v++){const M=p[v];m.push(M.toJSON(e.data))}m.length>0&&(o[f]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],v=l[p];for(let y=0,M=v.length;y<M;y++)m.push(v[y].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,m=u.length;p<m;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dg=new Ot,qr=new eh,Il=new yc,fg=new ne,Nl=new ne,Fl=new ne,Ol=new ne,bd=new ne,kl=new ne,hg=new ne,Bl=new ne;class Dn extends rn{constructor(e=new er,t=new Zv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){kl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const m=d[f],v=l[f];m!==0&&(bd.fromBufferAttribute(v,e),u?kl.addScaledVector(bd,m):kl.addScaledVector(bd.sub(t),m))}t.add(kl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Il.copy(s.boundingSphere),Il.applyMatrix4(l),qr.copy(e.ray).recast(e.near),!(Il.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Il,fg)===null||qr.origin.distanceToSquared(fg)>(e.far-e.near)**2))&&(dg.copy(l).invert(),qr.copy(e.ray).applyMatrix4(dg),!(s.boundingBox!==null&&qr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,y=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,T=y.length;E<T;E++){const S=y[E],x=u[S.materialIndex],U=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let b=U,k=L;b<k;b+=3){const N=d.getX(b),F=d.getX(b+1),Y=d.getX(b+2);o=zl(this,x,e,s,p,m,v,N,F,Y),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let S=E,x=T;S<x;S+=3){const U=d.getX(S),L=d.getX(S+1),b=d.getX(S+2);o=zl(this,u,e,s,p,m,v,U,L,b),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,T=y.length;E<T;E++){const S=y[E],x=u[S.materialIndex],U=Math.max(S.start,M.start),L=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let b=U,k=L;b<k;b+=3){const N=b,F=b+1,Y=b+2;o=zl(this,x,e,s,p,m,v,N,F,Y),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),T=Math.min(f.count,M.start+M.count);for(let S=E,x=T;S<x;S+=3){const U=S,L=S+1,b=S+2;o=zl(this,u,e,s,p,m,v,U,L,b),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function QS(r,e,t,s,o,l,u,d){let f;if(e.side===Un?f=s.intersectTriangle(u,l,o,!0,d):f=s.intersectTriangle(o,l,u,e.side===Lr,d),f===null)return null;Bl.copy(d),Bl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Bl);return p<t.near||p>t.far?null:{distance:p,point:Bl.clone(),object:r}}function zl(r,e,t,s,o,l,u,d,f,p){r.getVertexPosition(d,Nl),r.getVertexPosition(f,Fl),r.getVertexPosition(p,Ol);const m=QS(r,e,t,s,Nl,Fl,Ol,hg);if(m){const v=new ne;ei.getBarycoord(hg,Nl,Fl,Ol,v),o&&(m.uv=ei.getInterpolatedAttribute(o,d,f,p,v,new Rt)),l&&(m.uv1=ei.getInterpolatedAttribute(l,d,f,p,v,new Rt)),u&&(m.normal=ei.getInterpolatedAttribute(u,d,f,p,v,new ne),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const y={a:d,b:f,c:p,normal:new ne,materialIndex:0};ei.getNormal(Nl,Fl,Ol,y.normal),m.face=y,m.barycoord=v}return m}class po extends er{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],m=[],v=[];let y=0,M=0;E("z","y","x",-1,-1,s,t,e,u,l,0),E("z","y","x",1,-1,s,t,-e,u,l,1),E("x","z","y",1,1,e,s,t,o,u,2),E("x","z","y",1,-1,e,s,-t,o,u,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(f),this.setAttribute("position",new Ci(p,3)),this.setAttribute("normal",new Ci(m,3)),this.setAttribute("uv",new Ci(v,2));function E(T,S,x,U,L,b,k,N,F,Y,P){const C=b/F,V=k/Y,fe=b/2,W=k/2,ie=N/2,G=F+1,X=Y+1;let J=0,B=0;const se=new ne;for(let ue=0;ue<X;ue++){const O=ue*V-W;for(let ce=0;ce<G;ce++){const Ne=ce*C-fe;se[T]=Ne*U,se[S]=O*L,se[x]=ie,p.push(se.x,se.y,se.z),se[T]=0,se[S]=0,se[x]=N>0?1:-1,m.push(se.x,se.y,se.z),v.push(ce/F),v.push(1-ue/Y),J+=1}}for(let ue=0;ue<Y;ue++)for(let O=0;O<F;O++){const ce=y+O+G*ue,Ne=y+O+G*(ue+1),re=y+(O+1)+G*(ue+1),he=y+(O+1)+G*ue;f.push(ce,Ne,he),f.push(Ne,re,he),B+=6}d.addGroup(M,B,P),M+=B,y+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function yn(r){const e={};for(let t=0;t<r.length;t++){const s=lo(r[t]);for(const o in s)e[o]=s[o]}return e}function JS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function e0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const eM={clone:lo,merge:yn};var tM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends ho{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=JS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class t0 extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new ne,pg=new Rt,mg=new Rt;class Jn extends t0{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uf*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,pg,mg),t.subVectors(mg,pg)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ac*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*s/p,o*=u.width/f,s*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xs=-90,$s=1;class iM extends rn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Jn(Xs,$s,e,t);o.layers=this.layers,this.add(o);const l=new Jn(Xs,$s,e,t);l.layers=this.layers,this.add(l);const u=new Jn(Xs,$s,e,t);u.layers=this.layers,this.add(u);const d=new Jn(Xs,$s,e,t);d.layers=this.layers,this.add(d);const f=new Jn(Xs,$s,e,t);f.layers=this.layers,this.add(f);const p=new Jn(Xs,$s,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===dc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,m]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,u),e.setRenderTarget(s,2,o),e.render(t,d),e.setRenderTarget(s,3,o),e.render(t,f),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,o),e.render(t,m),e.setRenderTarget(v,y,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class n0 extends In{constructor(e,t,s,o,l,u,d,f,p,m){e=e!==void 0?e:[],t=t!==void 0?t:ro,super(e,t,s,o,l,u,d,f,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rM extends cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new n0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new po(5,5,5),l=new Dr({name:"CubemapFromEquirect",uniforms:lo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Un,blending:br});l.uniforms.tEquirect.value=t;const u=new Dn(o,l),d=t.minFilter;return t.minFilter===as&&(t.minFilter=wi),new iM(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}const Pd=new ne,sM=new ne,oM=new dt;class ts{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Pd.subVectors(s,t).cross(sM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Pd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||oM.getNormalMatrix(e),o=this.coplanarPoint(Pd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new yc,Hl=new ne;class nh{constructor(e=new ts,t=new ts,s=new ts,o=new ts,l=new ts,u=new ts){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ki){const s=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],f=o[3],p=o[4],m=o[5],v=o[6],y=o[7],M=o[8],E=o[9],T=o[10],S=o[11],x=o[12],U=o[13],L=o[14],b=o[15];if(s[0].setComponents(f-l,y-p,S-M,b-x).normalize(),s[1].setComponents(f+l,y+p,S+M,b+x).normalize(),s[2].setComponents(f+u,y+m,S+E,b+U).normalize(),s[3].setComponents(f-u,y-m,S-E,b-U).normalize(),s[4].setComponents(f-d,y-v,S-T,b-L).normalize(),t===Ki)s[5].setComponents(f+d,y+v,S+T,b+L).normalize();else if(t===dc)s[5].setComponents(d,v,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Hl.x=o.normal.x>0?e.max.x:e.min.x,Hl.y=o.normal.y>0?e.max.y:e.min.y,Hl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i0(){let r=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function aM(r){const e=new WeakMap;function t(d,f){const p=d.array,m=d.usage,v=p.byteLength,y=r.createBuffer();r.bindBuffer(f,y),r.bufferData(f,p,m),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,f,p){const m=f.array,v=f.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,m);else{v.sort((M,E)=>M.start-E.start);let y=0;for(let M=1;M<v.length;M++){const E=v[y],T=v[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++y,v[y]=T)}v.length=y+1;for(let M=0,E=v.length;M<E;M++){const T=v[M];r.bufferSubData(p,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(r.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:u}}class Sc extends er{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(s),f=Math.floor(o),p=d+1,m=f+1,v=e/d,y=t/f,M=[],E=[],T=[],S=[];for(let x=0;x<m;x++){const U=x*y-u;for(let L=0;L<p;L++){const b=L*v-l;E.push(b,-U,0),T.push(0,0,1),S.push(L/d),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let U=0;U<d;U++){const L=U+p*x,b=U+p*(x+1),k=U+1+p*(x+1),N=U+1+p*x;M.push(L,b,N),M.push(b,k,N)}this.setIndex(M),this.setAttribute("position",new Ci(E,3)),this.setAttribute("normal",new Ci(T,3)),this.setAttribute("uv",new Ci(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.width,e.height,e.widthSegments,e.heightSegments)}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,LM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,UM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ME=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,D1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,B1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:lM,alphahash_pars_fragment:cM,alphamap_fragment:uM,alphamap_pars_fragment:dM,alphatest_fragment:fM,alphatest_pars_fragment:hM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:gM,batching_vertex:vM,begin_vertex:_M,beginnormal_vertex:xM,bsdfs:yM,iridescence_fragment:SM,bumpmap_pars_fragment:MM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:wM,clipping_planes_vertex:RM,color_fragment:AM,color_pars_fragment:CM,color_pars_vertex:bM,color_vertex:PM,common:LM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:UM,displacementmap_pars_vertex:IM,displacementmap_vertex:NM,emissivemap_fragment:FM,emissivemap_pars_fragment:OM,colorspace_fragment:kM,colorspace_pars_fragment:BM,envmap_fragment:zM,envmap_common_pars_fragment:HM,envmap_pars_fragment:VM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:eE,envmap_vertex:jM,fog_vertex:WM,fog_pars_vertex:XM,fog_fragment:$M,fog_pars_fragment:YM,gradientmap_pars_fragment:qM,lightmap_pars_fragment:KM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:QM,lights_pars_begin:JM,lights_toon_fragment:tE,lights_toon_pars_fragment:nE,lights_phong_fragment:iE,lights_phong_pars_fragment:rE,lights_physical_fragment:sE,lights_physical_pars_fragment:oE,lights_fragment_begin:aE,lights_fragment_maps:lE,lights_fragment_end:cE,logdepthbuf_fragment:uE,logdepthbuf_pars_fragment:dE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:hE,map_fragment:pE,map_pars_fragment:mE,map_particle_fragment:gE,map_particle_pars_fragment:vE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:xE,morphinstance_vertex:yE,morphcolor_vertex:SE,morphnormal_vertex:ME,morphtarget_pars_vertex:EE,morphtarget_vertex:TE,normal_fragment_begin:wE,normal_fragment_maps:RE,normal_pars_fragment:AE,normal_pars_vertex:CE,normal_vertex:bE,normalmap_pars_fragment:PE,clearcoat_normal_fragment_begin:LE,clearcoat_normal_fragment_maps:DE,clearcoat_pars_fragment:UE,iridescence_pars_fragment:IE,opaque_fragment:NE,packing:FE,premultiplied_alpha_fragment:OE,project_vertex:kE,dithering_fragment:BE,dithering_pars_fragment:zE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:VE,shadowmap_pars_fragment:GE,shadowmap_pars_vertex:jE,shadowmap_vertex:WE,shadowmask_pars_fragment:XE,skinbase_vertex:$E,skinning_pars_vertex:YE,skinning_vertex:qE,skinnormal_vertex:KE,specularmap_fragment:ZE,specularmap_pars_fragment:QE,tonemapping_fragment:JE,tonemapping_pars_fragment:e1,transmission_fragment:t1,transmission_pars_fragment:n1,uv_pars_fragment:i1,uv_pars_vertex:r1,uv_vertex:s1,worldpos_vertex:o1,background_vert:a1,background_frag:l1,backgroundCube_vert:c1,backgroundCube_frag:u1,cube_vert:d1,cube_frag:f1,depth_vert:h1,depth_frag:p1,distanceRGBA_vert:m1,distanceRGBA_frag:g1,equirect_vert:v1,equirect_frag:_1,linedashed_vert:x1,linedashed_frag:y1,meshbasic_vert:S1,meshbasic_frag:M1,meshlambert_vert:E1,meshlambert_frag:T1,meshmatcap_vert:w1,meshmatcap_frag:R1,meshnormal_vert:A1,meshnormal_frag:C1,meshphong_vert:b1,meshphong_frag:P1,meshphysical_vert:L1,meshphysical_frag:D1,meshtoon_vert:U1,meshtoon_frag:I1,points_vert:N1,points_frag:F1,shadow_vert:O1,shadow_frag:k1,sprite_vert:B1,sprite_frag:z1},De={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ti={basic:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new _t(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:yn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:yn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new _t(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:yn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:yn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:yn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:yn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:yn([De.common,De.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:yn([De.lights,De.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ti.physical={uniforms:yn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Vl={r:0,b:0,g:0},Zr=new bi,H1=new Ot;function V1(r,e,t,s,o,l,u){const d=new _t(0);let f=l===!0?0:1,p,m,v=null,y=0,M=null;function E(U){let L=U.isScene===!0?U.background:null;return L&&L.isTexture&&(L=(U.backgroundBlurriness>0?t:e).get(L)),L}function T(U){let L=!1;const b=E(U);b===null?x(d,f):b&&b.isColor&&(x(b,1),L=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(U,L){const b=E(L);b&&(b.isCubeTexture||b.mapping===_c)?(m===void 0&&(m=new Dn(new po(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:lo(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(k,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Zr.copy(L.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),m.material.uniforms.envMap.value=b,m.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(H1.makeRotationFromEuler(Zr)),m.material.toneMapped=St.getTransfer(b.colorSpace)!==Pt,(v!==b||y!==b.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,v=b,y=b.version,M=r.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(p===void 0&&(p=new Dn(new Sc(2,2),new Dr({name:"BackgroundMaterial",uniforms:lo(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=b,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=St.getTransfer(b.colorSpace)!==Pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),p.material.uniforms.uvTransform.value.copy(b.matrix),(v!==b||y!==b.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,v=b,y=b.version,M=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,L){U.getRGB(Vl,e0(r)),s.buffers.color.setClear(Vl.r,Vl.g,Vl.b,L,u)}return{getClearColor:function(){return d},setClearColor:function(U,L=1){d.set(U),f=L,x(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(U){f=U,x(d,f)},render:T,addToRenderList:S}}function G1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=y(null);let l=o,u=!1;function d(C,V,fe,W,ie){let G=!1;const X=v(W,fe,V);l!==X&&(l=X,p(l.object)),G=M(C,W,fe,ie),G&&E(C,W,fe,ie),ie!==null&&e.update(ie,r.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,b(C,V,fe,W),ie!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function f(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function m(C){return r.deleteVertexArray(C)}function v(C,V,fe){const W=fe.wireframe===!0;let ie=s[C.id];ie===void 0&&(ie={},s[C.id]=ie);let G=ie[V.id];G===void 0&&(G={},ie[V.id]=G);let X=G[W];return X===void 0&&(X=y(f()),G[W]=X),X}function y(C){const V=[],fe=[],W=[];for(let ie=0;ie<t;ie++)V[ie]=0,fe[ie]=0,W[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:fe,attributeDivisors:W,object:C,attributes:{},index:null}}function M(C,V,fe,W){const ie=l.attributes,G=V.attributes;let X=0;const J=fe.getAttributes();for(const B in J)if(J[B].location>=0){const ue=ie[B];let O=G[B];if(O===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),ue===void 0||ue.attribute!==O||O&&ue.data!==O.data)return!0;X++}return l.attributesNum!==X||l.index!==W}function E(C,V,fe,W){const ie={},G=V.attributes;let X=0;const J=fe.getAttributes();for(const B in J)if(J[B].location>=0){let ue=G[B];ue===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor));const O={};O.attribute=ue,ue&&ue.data&&(O.data=ue.data),ie[B]=O,X++}l.attributes=ie,l.attributesNum=X,l.index=W}function T(){const C=l.newAttributes;for(let V=0,fe=C.length;V<fe;V++)C[V]=0}function S(C){x(C,0)}function x(C,V){const fe=l.newAttributes,W=l.enabledAttributes,ie=l.attributeDivisors;fe[C]=1,W[C]===0&&(r.enableVertexAttribArray(C),W[C]=1),ie[C]!==V&&(r.vertexAttribDivisor(C,V),ie[C]=V)}function U(){const C=l.newAttributes,V=l.enabledAttributes;for(let fe=0,W=V.length;fe<W;fe++)V[fe]!==C[fe]&&(r.disableVertexAttribArray(fe),V[fe]=0)}function L(C,V,fe,W,ie,G,X){X===!0?r.vertexAttribIPointer(C,V,fe,ie,G):r.vertexAttribPointer(C,V,fe,W,ie,G)}function b(C,V,fe,W){T();const ie=W.attributes,G=fe.getAttributes(),X=V.defaultAttributeValues;for(const J in G){const B=G[J];if(B.location>=0){let se=ie[J];if(se===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(se=C.instanceColor)),se!==void 0){const ue=se.normalized,O=se.itemSize,ce=e.get(se);if(ce===void 0)continue;const Ne=ce.buffer,re=ce.type,he=ce.bytesPerElement,Ee=re===r.INT||re===r.UNSIGNED_INT||se.gpuType===Yf;if(se.isInterleavedBufferAttribute){const xe=se.data,Ce=xe.stride,Fe=se.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)x(B.location+Ze,xe.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)S(B.location+Ze);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let Ze=0;Ze<B.locationSize;Ze++)L(B.location+Ze,O/B.locationSize,re,ue,Ce*he,(Fe+O/B.locationSize*Ze)*he,Ee)}else{if(se.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)x(B.location+xe,se.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let xe=0;xe<B.locationSize;xe++)S(B.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let xe=0;xe<B.locationSize;xe++)L(B.location+xe,O/B.locationSize,re,ue,O*he,O/B.locationSize*xe*he,Ee)}}else if(X!==void 0){const ue=X[J];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(B.location,ue);break;case 3:r.vertexAttrib3fv(B.location,ue);break;case 4:r.vertexAttrib4fv(B.location,ue);break;default:r.vertexAttrib1fv(B.location,ue)}}}}U()}function k(){Y();for(const C in s){const V=s[C];for(const fe in V){const W=V[fe];for(const ie in W)m(W[ie].object),delete W[ie];delete V[fe]}delete s[C]}}function N(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const fe in V){const W=V[fe];for(const ie in W)m(W[ie].object),delete W[ie];delete V[fe]}delete s[C.id]}function F(C){for(const V in s){const fe=s[V];if(fe[C.id]===void 0)continue;const W=fe[C.id];for(const ie in W)m(W[ie].object),delete W[ie];delete fe[C.id]}}function Y(){P(),u=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:P,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:U}}function j1(r,e,t){let s;function o(p){s=p}function l(p,m){r.drawArrays(s,p,m),t.update(m,s,1)}function u(p,m,v){v!==0&&(r.drawArraysInstanced(s,p,m,v),t.update(m,s,v))}function d(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,v);let M=0;for(let E=0;E<v;E++)M+=m[E];t.update(M,s,1)}function f(p,m,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)u(p[E],m[E],y[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,m,0,y,0,v);let E=0;for(let T=0;T<v;T++)E+=m[T]*y[T];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function W1(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==hi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const Y=F===fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ji&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==qi&&!Y)}function f(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=f(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:k,maxSamples:N}}function X1(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new ts,d=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||s!==0||o;return o=y,s=v.length,M},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=m(v,y,0)},this.setState=function(v,y,M){const E=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,x=r.get(v);if(!o||E===null||E.length===0||l&&!S)l?m(null):p();else{const U=l?0:s,L=U*4;let b=x.clippingState||null;f.value=b,b=m(E,y,L,M);for(let k=0;k!==L;++k)b[k]=t[k];x.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(v,y,M,E){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=f.value,E!==!0||S===null){const x=M+T*4,U=y.matrixWorldInverse;d.getNormalMatrix(U),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,b=M;L!==T;++L,b+=4)u.copy(v[L]).applyMatrix4(U,d),u.normal.toArray(S,b),S[b+3]=u.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function $1(r){let e=new WeakMap;function t(u,d){return d===nf?u.mapping=ro:d===rf&&(u.mapping=so),u}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===nf||d===rf)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new rM(f.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class r0 extends t0{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=m*this.view.offsetY,f=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zs=4,gg=[.125,.215,.35,.446,.526,.582],ss=20,Ld=new r0,vg=new _t;let Dd=null,Ud=0,Id=0,Nd=!1;const ns=(1+Math.sqrt(5))/2,Ys=1/ns,_g=[new ne(-ns,Ys,0),new ne(ns,Ys,0),new ne(-Ys,0,ns),new ne(Ys,0,ns),new ne(0,ns,-Ys),new ne(0,ns,Ys),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){Dd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dd,Ud,Id),this._renderer.xr.enabled=Nd,e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ro||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:fa,format:hi,colorSpace:uo,depthBuffer:!1},o=yg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y1(l)),this._blurMaterial=q1(l,e,t)}return o}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,Ld)}_sceneToCubeUV(e,t,s,o){const d=new Jn(90,1,t,s),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,y=m.toneMapping;m.getClearColor(vg),m.toneMapping=Pr,m.autoClear=!1;const M=new Zv({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),E=new Dn(new po,M);let T=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,T=!0):(M.color.copy(vg),T=!0);for(let x=0;x<6;x++){const U=x%3;U===0?(d.up.set(0,f[x],0),d.lookAt(p[x],0,0)):U===1?(d.up.set(0,0,f[x]),d.lookAt(0,p[x],0)):(d.up.set(0,f[x],0),d.lookAt(0,0,p[x]));const L=this._cubeSize;Gl(o,U*L,x>2?L:0,L,L),m.setRenderTarget(o),T&&m.render(E,d),m.render(e,d)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=y,m.autoClear=v,e.background=S}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ro||e.mapping===so;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Dn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;Gl(t,0,0,3*f,2*f),s.setRenderTarget(t),s.render(u,Ld)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=_g[(o-l-1)%_g.length];this._blur(e,l-1,l,u,d)}t.autoClear=s}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,d){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Dn(this._lodPlanes[o],p),y=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ss-1),T=l/E,S=isFinite(l)?1+Math.floor(m*T):ss;S>ss&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ss}`);const x=[];let U=0;for(let F=0;F<ss;++F){const Y=F/T,P=Math.exp(-Y*Y/2);x.push(P),F===0?U+=P:F<S&&(U+=2*P)}for(let F=0;F<x.length;F++)x[F]=x[F]/U;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-s;const b=this._sizeLods[o],k=3*b*(o>L-Zs?o-L+Zs:0),N=4*(this._cubeSize-b);Gl(t,k,N,3*b,2*b),f.setRenderTarget(t),f.render(v,Ld)}}function Y1(r){const e=[],t=[],s=[];let o=r;const l=r-Zs+1+gg.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let f=1/d;u>r-Zs?f=gg[u-r+Zs-1]:u===0&&(f=0),s.push(f);const p=1/(d-2),m=-p,v=1+p,y=[m,m,v,m,v,v,m,m,v,v,m,v],M=6,E=6,T=3,S=2,x=1,U=new Float32Array(T*E*M),L=new Float32Array(S*E*M),b=new Float32Array(x*E*M);for(let N=0;N<M;N++){const F=N%3*2/3-1,Y=N>2?0:-1,P=[F,Y,0,F+2/3,Y,0,F+2/3,Y+1,0,F,Y,0,F+2/3,Y+1,0,F,Y+1,0];U.set(P,T*E*N),L.set(y,S*E*N);const C=[N,N,N,N,N,N];b.set(C,x*E*N)}const k=new er;k.setAttribute("position",new Ai(U,T)),k.setAttribute("uv",new Ai(L,S)),k.setAttribute("faceIndex",new Ai(b,x)),e.push(k),o>Zs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function yg(r,e,t){const s=new cs(r,e,t);return s.texture.mapping=_c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Gl(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function q1(r,e,t){const s=new Float32Array(ss),o=new ne(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Sg(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Mg(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function K1(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const f=d.mapping,p=f===nf||f===rf,m=f===ro||f===so;if(p||m){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new xg(r)),v=p?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||m&&M&&o(M)?(t===null&&(t=new xg(r)),v=p?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function o(d){let f=0;const p=6;for(let m=0;m<p;m++)d[m]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function Z1(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&ta("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function Q1(r,e,t,s){const o={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const T=y.morphAttributes[E];for(let S=0,x=T.length;S<x;S++)e.remove(T[S])}y.removeEventListener("dispose",u),delete o[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(v,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function f(v){const y=v.attributes;for(const E in y)e.update(y[E],r.ARRAY_BUFFER);const M=v.morphAttributes;for(const E in M){const T=M[E];for(let S=0,x=T.length;S<x;S++)e.update(T[S],r.ARRAY_BUFFER)}}function p(v){const y=[],M=v.index,E=v.attributes.position;let T=0;if(M!==null){const U=M.array;T=M.version;for(let L=0,b=U.length;L<b;L+=3){const k=U[L+0],N=U[L+1],F=U[L+2];y.push(k,N,N,F,F,k)}}else if(E!==void 0){const U=E.array;T=E.version;for(let L=0,b=U.length/3-1;L<b;L+=3){const k=L+0,N=L+1,F=L+2;y.push(k,N,N,F,F,k)}}else return;const S=new($v(y)?Jv:Qv)(y,1);S.version=T;const x=l.get(v);x&&e.remove(x),l.set(v,S)}function m(v){const y=l.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&p(v)}else p(v);return l.get(v)}return{get:d,update:f,getWireframeAttribute:m}}function J1(r,e,t){let s;function o(y){s=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function f(y,M){r.drawElements(s,M,l,y*u),t.update(M,s,1)}function p(y,M,E){E!==0&&(r.drawElementsInstanced(s,M,l,y*u,E),t.update(M,s,E))}function m(y,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,l,y,0,E);let S=0;for(let x=0;x<E;x++)S+=M[x];t.update(S,s,1)}function v(y,M,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)p(y[x]/u,M[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,l,y,0,T,0,E);let x=0;for(let U=0;U<E;U++)x+=M[U]*T[U];t.update(x,s,1)}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function eT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,d){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function tT(r,e,t){const s=new WeakMap,o=new Vt;function l(u,d,f){const p=u.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=m!==void 0?m.length:0;let y=s.get(d);if(y===void 0||y.count!==v){let C=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let b=0;E===!0&&(b=1),T===!0&&(b=2),S===!0&&(b=3);let k=d.attributes.position.count*b,N=1;k>e.maxTextureSize&&(N=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const F=new Float32Array(k*N*4*v),Y=new qv(F,k,N,v);Y.type=qi,Y.needsUpdate=!0;const P=b*4;for(let V=0;V<v;V++){const fe=x[V],W=U[V],ie=L[V],G=k*N*4*V;for(let X=0;X<fe.count;X++){const J=X*P;E===!0&&(o.fromBufferAttribute(fe,X),F[G+J+0]=o.x,F[G+J+1]=o.y,F[G+J+2]=o.z,F[G+J+3]=0),T===!0&&(o.fromBufferAttribute(W,X),F[G+J+4]=o.x,F[G+J+5]=o.y,F[G+J+6]=o.z,F[G+J+7]=0),S===!0&&(o.fromBufferAttribute(ie,X),F[G+J+8]=o.x,F[G+J+9]=o.y,F[G+J+10]=o.z,F[G+J+11]=ie.itemSize===4?o.w:1)}}y={count:v,texture:Y,size:new Rt(k,N)},s.set(d,y),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=d.morphTargetsRelative?1:1-E;f.getUniforms().setValue(r,"morphTargetBaseInfluence",T),f.getUniforms().setValue(r,"morphTargetInfluences",p)}f.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:l}}function nT(r,e,t,s){let o=new WeakMap;function l(f){const p=s.render.frame,m=f.geometry,v=e.get(f,m);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const y=f.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return v}function u(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class s0 extends In{constructor(e,t,s,o,l,u,d,f,p,m=to){if(m!==to&&m!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===to&&(s=ls),s===void 0&&m===ao&&(s=oo),super(null,o,l,u,d,f,m,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:mi,this.minFilter=f!==void 0?f:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const o0=new In,Eg=new s0(1,1),a0=new qv,l0=new VS,c0=new n0,Tg=[],wg=[],Rg=new Float32Array(16),Ag=new Float32Array(9),Cg=new Float32Array(4);function mo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=Tg[o];if(l===void 0&&(l=new Float32Array(o),Tg[o]=l),e!==0){s.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,r[u].toArray(l,d)}return l}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Zt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Mc(r,e){let t=wg[e];t===void 0&&(t=new Int32Array(e),wg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function iT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Zt(t,e)}}function sT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Zt(t,e)}}function oT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Zt(t,e)}}function aT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;Cg.set(s),r.uniformMatrix2fv(this.addr,!1,Cg),Zt(t,s)}}function lT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;Ag.set(s),r.uniformMatrix3fv(this.addr,!1,Ag),Zt(t,s)}}function cT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;Rg.set(s),r.uniformMatrix4fv(this.addr,!1,Rg),Zt(t,s)}}function uT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Zt(t,e)}}function fT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Zt(t,e)}}function hT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Zt(t,e)}}function pT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Zt(t,e)}}function gT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Zt(t,e)}}function vT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Zt(t,e)}}function _T(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Eg.compareFunction=Xv,l=Eg):l=o0,t.setTexture2D(e||l,o)}function xT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||l0,o)}function yT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||c0,o)}function ST(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||a0,o)}function MT(r){switch(r){case 5126:return iT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return aT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return dT;case 35668:case 35672:return fT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}function ET(r,e){r.uniform1fv(this.addr,e)}function TT(r,e){const t=mo(e,this.size,2);r.uniform2fv(this.addr,t)}function wT(r,e){const t=mo(e,this.size,3);r.uniform3fv(this.addr,t)}function RT(r,e){const t=mo(e,this.size,4);r.uniform4fv(this.addr,t)}function AT(r,e){const t=mo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function CT(r,e){const t=mo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function bT(r,e){const t=mo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function PT(r,e){r.uniform1iv(this.addr,e)}function LT(r,e){r.uniform2iv(this.addr,e)}function DT(r,e){r.uniform3iv(this.addr,e)}function UT(r,e){r.uniform4iv(this.addr,e)}function IT(r,e){r.uniform1uiv(this.addr,e)}function NT(r,e){r.uniform2uiv(this.addr,e)}function FT(r,e){r.uniform3uiv(this.addr,e)}function OT(r,e){r.uniform4uiv(this.addr,e)}function kT(r,e,t){const s=this.cache,o=e.length,l=Mc(t,o);Kt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||o0,l[u])}function BT(r,e,t){const s=this.cache,o=e.length,l=Mc(t,o);Kt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||l0,l[u])}function zT(r,e,t){const s=this.cache,o=e.length,l=Mc(t,o);Kt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||c0,l[u])}function HT(r,e,t){const s=this.cache,o=e.length,l=Mc(t,o);Kt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||a0,l[u])}function VT(r){switch(r){case 5126:return ET;case 35664:return TT;case 35665:return wT;case 35666:return RT;case 35674:return AT;case 35675:return CT;case 35676:return bT;case 5124:case 35670:return PT;case 35667:case 35671:return LT;case 35668:case 35672:return DT;case 35669:case 35673:return UT;case 5125:return IT;case 36294:return NT;case 36295:return FT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return HT}}class GT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=MT(t.type)}}class jT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VT(t.type)}}class WT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function bg(r,e){r.seq.push(e),r.map[e.id]=e}function XT(r,e,t){const s=r.name,o=s.length;for(Fd.lastIndex=0;;){const l=Fd.exec(s),u=Fd.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===o){bg(t,p===void 0?new GT(d,r,e):new jT(d,r,e));break}else{let v=t.map[d];v===void 0&&(v=new WT(d),bg(t,v)),t=v}}}class lc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);XT(l,u,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=s[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function Pg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const $T=37297;let YT=0;function qT(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;s.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return s.join(`
`)}const Lg=new dt;function KT(r){St._getMatrix(Lg,St.workingColorSpace,r);const e=`mat3( ${Lg.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(r)){case xc:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Dg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+qT(r.getShaderSource(e),u)}else return o}function ZT(r,e){const t=KT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function QT(r,e){let t;switch(e){case mS:t="Linear";break;case gS:t="Reinhard";break;case vS:t="Cineon";break;case _S:t="ACESFilmic";break;case yS:t="AgX";break;case SS:t="Neutral";break;case xS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new ne;function JT(){St.getLuminanceCoefficients(jl);const r=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ew(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function tw(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function nw(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:d}}return t}function na(r){return r!==""}function Ug(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ig(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iw=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(r){return r.replace(iw,sw)}const rw=new Map;function sw(r,e){let t=ft[e];if(t===void 0){const s=rw.get(e);if(s!==void 0)t=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return If(t)}const ow=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ng(r){return r.replace(ow,aw)}function aw(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Fg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Dv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Yy?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function cw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ro:case so:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case so:e="ENVMAP_MODE_REFRACTION";break}return e}function dw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Uv:e="ENVMAP_BLENDING_MULTIPLY";break;case hS:e="ENVMAP_BLENDING_MIX";break;case pS:e="ENVMAP_BLENDING_ADD";break}return e}function fw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function hw(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=lw(t),p=cw(t),m=uw(t),v=dw(t),y=fw(t),M=ew(t),E=tw(l),T=o.createProgram();let S,x,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(na).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(na).join(`
`),x.length>0&&(x+=`
`)):(S=[Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),x=[Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pr?"#define TONE_MAPPING":"",t.toneMapping!==Pr?ft.tonemapping_pars_fragment:"",t.toneMapping!==Pr?QT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,ZT("linearToOutputTexel",t.outputColorSpace),JT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),u=If(u),u=Ug(u,t),u=Ig(u,t),d=If(d),d=Ug(d,t),d=Ig(d,t),u=Ng(u),d=Ng(d),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=U+S+u,b=U+x+d,k=Pg(o,o.VERTEX_SHADER,L),N=Pg(o,o.FRAGMENT_SHADER,b);o.attachShader(T,k),o.attachShader(T,N),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(V){if(r.debug.checkShaderErrors){const fe=o.getProgramInfoLog(T).trim(),W=o.getShaderInfoLog(k).trim(),ie=o.getShaderInfoLog(N).trim();let G=!0,X=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,k,N);else{const J=Dg(o,k,"vertex"),B=Dg(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+fe+`
`+J+`
`+B)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(W===""||ie==="")&&(X=!1);X&&(V.diagnostics={runnable:G,programLog:fe,vertexShader:{log:W,prefix:S},fragmentShader:{log:ie,prefix:x}})}o.deleteShader(k),o.deleteShader(N),Y=new lc(o,T),P=nw(o,T)}let Y;this.getUniforms=function(){return Y===void 0&&F(this),Y};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,$T)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=k,this.fragmentShader=N,this}let pw=0;class mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new gw(e),t.set(e,s)),s}}class gw{constructor(e){this.id=pw++,this.code=e,this.usedTimes=0}}function vw(r,e,t,s,o,l,u){const d=new th,f=new mw,p=new Set,m=[],v=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return p.add(P),P===0?"uv":`uv${P}`}function S(P,C,V,fe,W){const ie=fe.fog,G=W.geometry,X=P.isMeshStandardMaterial?fe.environment:null,J=(P.isMeshStandardMaterial?t:e).get(P.envMap||X),B=J&&J.mapping===_c?J.image.height:null,se=E[P.type];P.precision!==null&&(M=o.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,O=ue!==void 0?ue.length:0;let ce=0;G.morphAttributes.position!==void 0&&(ce=1),G.morphAttributes.normal!==void 0&&(ce=2),G.morphAttributes.color!==void 0&&(ce=3);let Ne,re,he,Ee;if(se){const xt=Ti[se];Ne=xt.vertexShader,re=xt.fragmentShader}else Ne=P.vertexShader,re=P.fragmentShader,f.update(P),he=f.getVertexShaderID(P),Ee=f.getFragmentShaderID(P);const xe=r.getRenderTarget(),Ce=r.state.buffers.depth.getReversed(),Fe=W.isInstancedMesh===!0,Ze=W.isBatchedMesh===!0,Tt=!!P.map,ht=!!P.matcap,Ct=!!J,q=!!P.aoMap,Qt=!!P.lightMap,Te=!!P.bumpMap,Pe=!!P.normalMap,Oe=!!P.displacementMap,ot=!!P.emissiveMap,Ge=!!P.metalnessMap,D=!!P.roughnessMap,R=P.anisotropy>0,ee=P.clearcoat>0,me=P.dispersion>0,ve=P.iridescence>0,pe=P.sheen>0,ke=P.transmission>0,be=R&&!!P.anisotropyMap,Be=ee&&!!P.clearcoatMap,ct=ee&&!!P.clearcoatNormalMap,Me=ee&&!!P.clearcoatRoughnessMap,He=ve&&!!P.iridescenceMap,tt=ve&&!!P.iridescenceThicknessMap,nt=pe&&!!P.sheenColorMap,je=pe&&!!P.sheenRoughnessMap,pt=!!P.specularMap,at=!!P.specularColorMap,At=!!P.specularIntensityMap,$=ke&&!!P.transmissionMap,Le=ke&&!!P.thicknessMap,de=!!P.gradientMap,ge=!!P.alphaMap,Ie=P.alphaTest>0,Ue=!!P.alphaHash,lt=!!P.extensions;let Ut=Pr;P.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const Xt={shaderID:se,shaderType:P.type,shaderName:P.name,vertexShader:Ne,fragmentShader:re,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:Ze,batchingColor:Ze&&W._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&W.instanceColor!==null,instancingMorph:Fe&&W.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:uo,alphaToCoverage:!!P.alphaToCoverage,map:Tt,matcap:ht,envMap:Ct,envMapMode:Ct&&J.mapping,envMapCubeUVHeight:B,aoMap:q,lightMap:Qt,bumpMap:Te,normalMap:Pe,displacementMap:y&&Oe,emissiveMap:ot,normalMapObjectSpace:Pe&&P.normalMapType===wS,normalMapTangentSpace:Pe&&P.normalMapType===Wv,metalnessMap:Ge,roughnessMap:D,anisotropy:R,anisotropyMap:be,clearcoat:ee,clearcoatMap:Be,clearcoatNormalMap:ct,clearcoatRoughnessMap:Me,dispersion:me,iridescence:ve,iridescenceMap:He,iridescenceThicknessMap:tt,sheen:pe,sheenColorMap:nt,sheenRoughnessMap:je,specularMap:pt,specularColorMap:at,specularIntensityMap:At,transmission:ke,transmissionMap:$,thicknessMap:Le,gradientMap:de,opaque:P.transparent===!1&&P.blending===eo&&P.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ie,alphaHash:Ue,combine:P.combine,mapUv:Tt&&T(P.map.channel),aoMapUv:q&&T(P.aoMap.channel),lightMapUv:Qt&&T(P.lightMap.channel),bumpMapUv:Te&&T(P.bumpMap.channel),normalMapUv:Pe&&T(P.normalMap.channel),displacementMapUv:Oe&&T(P.displacementMap.channel),emissiveMapUv:ot&&T(P.emissiveMap.channel),metalnessMapUv:Ge&&T(P.metalnessMap.channel),roughnessMapUv:D&&T(P.roughnessMap.channel),anisotropyMapUv:be&&T(P.anisotropyMap.channel),clearcoatMapUv:Be&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:ct&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:je&&T(P.sheenRoughnessMap.channel),specularMapUv:pt&&T(P.specularMap.channel),specularColorMapUv:at&&T(P.specularColorMap.channel),specularIntensityMapUv:At&&T(P.specularIntensityMap.channel),transmissionMapUv:$&&T(P.transmissionMap.channel),thicknessMapUv:Le&&T(P.thicknessMap.channel),alphaMapUv:ge&&T(P.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Pe||R),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!G.attributes.uv&&(Tt||ge),fog:!!ie,useFog:P.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ce,skinning:W.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ce,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Tt&&P.map.isVideoTexture===!0&&St.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:ot&&P.emissiveMap.isVideoTexture===!0&&St.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Yi,flipSided:P.side===Un,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:lt&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&P.extensions.multiDraw===!0||Ze)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Xt.vertexUv1s=p.has(1),Xt.vertexUv2s=p.has(2),Xt.vertexUv3s=p.has(3),p.clear(),Xt}function x(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)C.push(V),C.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(U(C,P),L(C,P),C.push(r.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function U(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function L(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function b(P){const C=E[P.type];let V;if(C){const fe=Ti[C];V=eM.clone(fe.uniforms)}else V=P.uniforms;return V}function k(P,C){let V;for(let fe=0,W=m.length;fe<W;fe++){const ie=m[fe];if(ie.cacheKey===C){V=ie,++V.usedTimes;break}}return V===void 0&&(V=new hw(r,C,P,l),m.push(V)),V}function N(P){if(--P.usedTimes===0){const C=m.indexOf(P);m[C]=m[m.length-1],m.pop(),P.destroy()}}function F(P){f.remove(P)}function Y(){f.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:b,acquireProgram:k,releaseProgram:N,releaseShaderCache:F,programs:m,dispose:Y}}function _w(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function s(u){r.delete(u)}function o(u,d,f){r.get(u)[d]=f}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function xw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Og(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function kg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(v,y,M,E,T,S){let x=r[e];return x===void 0?(x={id:v.id,object:v,geometry:y,material:M,groupOrder:E,renderOrder:v.renderOrder,z:T,group:S},r[e]=x):(x.id=v.id,x.object=v,x.geometry=y,x.material=M,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=T,x.group=S),e++,x}function d(v,y,M,E,T,S){const x=u(v,y,M,E,T,S);M.transmission>0?s.push(x):M.transparent===!0?o.push(x):t.push(x)}function f(v,y,M,E,T,S){const x=u(v,y,M,E,T,S);M.transmission>0?s.unshift(x):M.transparent===!0?o.unshift(x):t.unshift(x)}function p(v,y){t.length>1&&t.sort(v||xw),s.length>1&&s.sort(y||Og),o.length>1&&o.sort(y||Og)}function m(){for(let v=e,y=r.length;v<y;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:d,unshift:f,finish:m,sort:p}}function yw(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new kg,r.set(s,[u])):o>=l.length?(u=new kg,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function Sw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new _t};break;case"SpotLight":t={position:new ne,direction:new ne,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return r[e.id]=t,t}}}function Mw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ew=0;function Tw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ww(r){const e=new Sw,t=Mw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ne);const o=new ne,l=new Ot,u=new Ot;function d(p){let m=0,v=0,y=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let M=0,E=0,T=0,S=0,x=0,U=0,L=0,b=0,k=0,N=0,F=0;p.sort(Tw);for(let P=0,C=p.length;P<C;P++){const V=p[P],fe=V.color,W=V.intensity,ie=V.distance,G=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=fe.r*W,v+=fe.g*W,y+=fe.b*W;else if(V.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(V.sh.coefficients[X],W);F++}else if(V.isDirectionalLight){const X=e.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const J=V.shadow,B=t.get(V);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,s.directionalShadow[M]=B,s.directionalShadowMap[M]=G,s.directionalShadowMatrix[M]=V.shadow.matrix,U++}s.directional[M]=X,M++}else if(V.isSpotLight){const X=e.get(V);X.position.setFromMatrixPosition(V.matrixWorld),X.color.copy(fe).multiplyScalar(W),X.distance=ie,X.coneCos=Math.cos(V.angle),X.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),X.decay=V.decay,s.spot[T]=X;const J=V.shadow;if(V.map&&(s.spotLightMap[k]=V.map,k++,J.updateMatrices(V),V.castShadow&&N++),s.spotLightMatrix[T]=J.matrix,V.castShadow){const B=t.get(V);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,s.spotShadow[T]=B,s.spotShadowMap[T]=G,b++}T++}else if(V.isRectAreaLight){const X=e.get(V);X.color.copy(fe).multiplyScalar(W),X.halfWidth.set(V.width*.5,0,0),X.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=X,S++}else if(V.isPointLight){const X=e.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity),X.distance=V.distance,X.decay=V.decay,V.castShadow){const J=V.shadow,B=t.get(V);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,B.shadowCameraNear=J.camera.near,B.shadowCameraFar=J.camera.far,s.pointShadow[E]=B,s.pointShadowMap[E]=G,s.pointShadowMatrix[E]=V.shadow.matrix,L++}s.point[E]=X,E++}else if(V.isHemisphereLight){const X=e.get(V);X.skyColor.copy(V.color).multiplyScalar(W),X.groundColor.copy(V.groundColor).multiplyScalar(W),s.hemi[x]=X,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=v,s.ambient[2]=y;const Y=s.hash;(Y.directionalLength!==M||Y.pointLength!==E||Y.spotLength!==T||Y.rectAreaLength!==S||Y.hemiLength!==x||Y.numDirectionalShadows!==U||Y.numPointShadows!==L||Y.numSpotShadows!==b||Y.numSpotMaps!==k||Y.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=S,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=b+k-N,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=F,Y.directionalLength=M,Y.pointLength=E,Y.spotLength=T,Y.rectAreaLength=S,Y.hemiLength=x,Y.numDirectionalShadows=U,Y.numPointShadows=L,Y.numSpotShadows=b,Y.numSpotMaps=k,Y.numLightProbes=F,s.version=Ew++)}function f(p,m){let v=0,y=0,M=0,E=0,T=0;const S=m.matrixWorldInverse;for(let x=0,U=p.length;x<U;x++){const L=p[x];if(L.isDirectionalLight){const b=s.directional[v];b.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(S),v++}else if(L.isSpotLight){const b=s.spot[M];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const b=s.rectArea[E];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(S),u.identity(),l.copy(L.matrixWorld),l.premultiply(S),u.extractRotation(l),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const b=s.point[y];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const b=s.hemi[T];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(S),T++}}}return{setup:d,setupView:f,state:s}}function Bg(r){const e=new ww(r),t=[],s=[];function o(m){p.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function u(m){s.push(m)}function d(){e.setup(t)}function f(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:u}}function Rw(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Bg(r),e.set(o,[d])):l>=u.length?(d=new Bg(r),u.push(d)):d=u[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}class Aw extends ho{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ES,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cw extends ho{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lw(r,e,t){let s=new nh;const o=new Rt,l=new Rt,u=new Vt,d=new Aw({depthPacking:TS}),f=new Cw,p={},m=t.maxTextureSize,v={[Lr]:Un,[Un]:Lr,[Yi]:Yi},y=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:bw,fragmentShader:Pw}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new er;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Dn(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dv;let x=this.type;this.render=function(N,F,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const P=r.getRenderTarget(),C=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),fe=r.state;fe.setBlending(br),fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const W=x!==$i&&this.type===$i,ie=x===$i&&this.type!==$i;for(let G=0,X=N.length;G<X;G++){const J=N[G],B=J.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const se=B.getFrameExtents();if(o.multiply(se),l.copy(B.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/se.x),o.x=l.x*se.x,B.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/se.y),o.y=l.y*se.y,B.mapSize.y=l.y)),B.map===null||W===!0||ie===!0){const O=this.type!==$i?{minFilter:mi,magFilter:mi}:{};B.map!==null&&B.map.dispose(),B.map=new cs(o.x,o.y,O),B.map.texture.name=J.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const ue=B.getViewportCount();for(let O=0;O<ue;O++){const ce=B.getViewport(O);u.set(l.x*ce.x,l.y*ce.y,l.x*ce.z,l.y*ce.w),fe.viewport(u),B.updateMatrices(J,O),s=B.getFrustum(),b(F,Y,B.camera,J,this.type)}B.isPointLightShadow!==!0&&this.type===$i&&U(B,Y),B.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(P,C,V)};function U(N,F){const Y=e.update(T);y.defines.VSM_SAMPLES!==N.blurSamples&&(y.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new cs(o.x,o.y)),y.uniforms.shadow_pass.value=N.map.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(F,null,Y,y,T,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(F,null,Y,M,T,null)}function L(N,F,Y,P){let C=null;const V=Y.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)C=V;else if(C=Y.isPointLight===!0?f:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const fe=C.uuid,W=F.uuid;let ie=p[fe];ie===void 0&&(ie={},p[fe]=ie);let G=ie[W];G===void 0&&(G=C.clone(),ie[W]=G,F.addEventListener("dispose",k)),C=G}if(C.visible=F.visible,C.wireframe=F.wireframe,P===$i?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:v[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const fe=r.properties.get(C);fe.light=Y}return C}function b(N,F,Y,P,C){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===$i)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,N.matrixWorld);const W=e.update(N),ie=N.material;if(Array.isArray(ie)){const G=W.groups;for(let X=0,J=G.length;X<J;X++){const B=G[X],se=ie[B.materialIndex];if(se&&se.visible){const ue=L(N,se,P,C);N.onBeforeShadow(r,N,F,Y,W,ue,B),r.renderBufferDirect(Y,null,W,ue,N,B),N.onAfterShadow(r,N,F,Y,W,ue,B)}}}else if(ie.visible){const G=L(N,ie,P,C);N.onBeforeShadow(r,N,F,Y,W,G,null),r.renderBufferDirect(Y,null,W,G,N,null),N.onAfterShadow(r,N,F,Y,W,G,null)}}const fe=N.children;for(let W=0,ie=fe.length;W<ie;W++)b(fe[W],F,Y,P,C)}function k(N){N.target.removeEventListener("dispose",k);for(const Y in p){const P=p[Y],C=N.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const Dw={[qd]:Kd,[Zd]:ef,[Qd]:tf,[io]:Jd,[Kd]:qd,[ef]:Zd,[tf]:Qd,[Jd]:io};function Uw(r,e){function t(){let $=!1;const Le=new Vt;let de=null;const ge=new Vt(0,0,0,0);return{setMask:function(Ie){de!==Ie&&!$&&(r.colorMask(Ie,Ie,Ie,Ie),de=Ie)},setLocked:function(Ie){$=Ie},setClear:function(Ie,Ue,lt,Ut,Xt){Xt===!0&&(Ie*=Ut,Ue*=Ut,lt*=Ut),Le.set(Ie,Ue,lt,Ut),ge.equals(Le)===!1&&(r.clearColor(Ie,Ue,lt,Ut),ge.copy(Le))},reset:function(){$=!1,de=null,ge.set(-1,0,0,0)}}}function s(){let $=!1,Le=!1,de=null,ge=null,Ie=null;return{setReversed:function(Ue){if(Le!==Ue){const lt=e.get("EXT_clip_control");Le?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ie;Ie=null,this.setClear(Ut)}Le=Ue},getReversed:function(){return Le},setTest:function(Ue){Ue?xe(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(Ue){de!==Ue&&!$&&(r.depthMask(Ue),de=Ue)},setFunc:function(Ue){if(Le&&(Ue=Dw[Ue]),ge!==Ue){switch(Ue){case qd:r.depthFunc(r.NEVER);break;case Kd:r.depthFunc(r.ALWAYS);break;case Zd:r.depthFunc(r.LESS);break;case io:r.depthFunc(r.LEQUAL);break;case Qd:r.depthFunc(r.EQUAL);break;case Jd:r.depthFunc(r.GEQUAL);break;case ef:r.depthFunc(r.GREATER);break;case tf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=Ue}},setLocked:function(Ue){$=Ue},setClear:function(Ue){Ie!==Ue&&(Le&&(Ue=1-Ue),r.clearDepth(Ue),Ie=Ue)},reset:function(){$=!1,de=null,ge=null,Ie=null,Le=!1}}}function o(){let $=!1,Le=null,de=null,ge=null,Ie=null,Ue=null,lt=null,Ut=null,Xt=null;return{setTest:function(xt){$||(xt?xe(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(xt){Le!==xt&&!$&&(r.stencilMask(xt),Le=xt)},setFunc:function(xt,Mn,gn){(de!==xt||ge!==Mn||Ie!==gn)&&(r.stencilFunc(xt,Mn,gn),de=xt,ge=Mn,Ie=gn)},setOp:function(xt,Mn,gn){(Ue!==xt||lt!==Mn||Ut!==gn)&&(r.stencilOp(xt,Mn,gn),Ue=xt,lt=Mn,Ut=gn)},setLocked:function(xt){$=xt},setClear:function(xt){Xt!==xt&&(r.clearStencil(xt),Xt=xt)},reset:function(){$=!1,Le=null,de=null,ge=null,Ie=null,Ue=null,lt=null,Ut=null,Xt=null}}}const l=new t,u=new s,d=new o,f=new WeakMap,p=new WeakMap;let m={},v={},y=new WeakMap,M=[],E=null,T=!1,S=null,x=null,U=null,L=null,b=null,k=null,N=null,F=new _t(0,0,0),Y=0,P=!1,C=null,V=null,fe=null,W=null,ie=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(B)[1]),X=J>=1):B.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),X=J>=2);let se=null,ue={};const O=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),Ne=new Vt().fromArray(O),re=new Vt().fromArray(ce);function he($,Le,de,ge){const Ie=new Uint8Array(4),Ue=r.createTexture();r.bindTexture($,Ue),r.texParameteri($,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri($,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<de;lt++)$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Le+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Ue}const Ee={};Ee[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),xe(r.DEPTH_TEST),u.setFunc(io),Te(!1),Pe(Gm),xe(r.CULL_FACE),q(br);function xe($){m[$]!==!0&&(r.enable($),m[$]=!0)}function Ce($){m[$]!==!1&&(r.disable($),m[$]=!1)}function Fe($,Le){return v[$]!==Le?(r.bindFramebuffer($,Le),v[$]=Le,$===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Le),$===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ze($,Le){let de=M,ge=!1;if($){de=y.get(Le),de===void 0&&(de=[],y.set(Le,de));const Ie=$.textures;if(de.length!==Ie.length||de[0]!==r.COLOR_ATTACHMENT0){for(let Ue=0,lt=Ie.length;Ue<lt;Ue++)de[Ue]=r.COLOR_ATTACHMENT0+Ue;de.length=Ie.length,ge=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,ge=!0);ge&&r.drawBuffers(de)}function Tt($){return E!==$?(r.useProgram($),E=$,!0):!1}const ht={[rs]:r.FUNC_ADD,[Ky]:r.FUNC_SUBTRACT,[Zy]:r.FUNC_REVERSE_SUBTRACT};ht[Qy]=r.MIN,ht[Jy]=r.MAX;const Ct={[eS]:r.ZERO,[tS]:r.ONE,[nS]:r.SRC_COLOR,[$d]:r.SRC_ALPHA,[lS]:r.SRC_ALPHA_SATURATE,[oS]:r.DST_COLOR,[rS]:r.DST_ALPHA,[iS]:r.ONE_MINUS_SRC_COLOR,[Yd]:r.ONE_MINUS_SRC_ALPHA,[aS]:r.ONE_MINUS_DST_COLOR,[sS]:r.ONE_MINUS_DST_ALPHA,[cS]:r.CONSTANT_COLOR,[uS]:r.ONE_MINUS_CONSTANT_COLOR,[dS]:r.CONSTANT_ALPHA,[fS]:r.ONE_MINUS_CONSTANT_ALPHA};function q($,Le,de,ge,Ie,Ue,lt,Ut,Xt,xt){if($===br){T===!0&&(Ce(r.BLEND),T=!1);return}if(T===!1&&(xe(r.BLEND),T=!0),$!==qy){if($!==S||xt!==P){if((x!==rs||b!==rs)&&(r.blendEquation(r.FUNC_ADD),x=rs,b=rs),xt)switch($){case eo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jm:r.blendFunc(r.ONE,r.ONE);break;case Wm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case eo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Wm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}U=null,L=null,k=null,N=null,F.set(0,0,0),Y=0,S=$,P=xt}return}Ie=Ie||Le,Ue=Ue||de,lt=lt||ge,(Le!==x||Ie!==b)&&(r.blendEquationSeparate(ht[Le],ht[Ie]),x=Le,b=Ie),(de!==U||ge!==L||Ue!==k||lt!==N)&&(r.blendFuncSeparate(Ct[de],Ct[ge],Ct[Ue],Ct[lt]),U=de,L=ge,k=Ue,N=lt),(Ut.equals(F)===!1||Xt!==Y)&&(r.blendColor(Ut.r,Ut.g,Ut.b,Xt),F.copy(Ut),Y=Xt),S=$,P=!1}function Qt($,Le){$.side===Yi?Ce(r.CULL_FACE):xe(r.CULL_FACE);let de=$.side===Un;Le&&(de=!de),Te(de),$.blending===eo&&$.transparent===!1?q(br):q($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),l.setMask($.colorWrite);const ge=$.stencilWrite;d.setTest(ge),ge&&(d.setMask($.stencilWriteMask),d.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),d.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ot($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function Te($){C!==$&&($?r.frontFace(r.CW):r.frontFace(r.CCW),C=$)}function Pe($){$!==Xy?(xe(r.CULL_FACE),$!==V&&($===Gm?r.cullFace(r.BACK):$===$y?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),V=$}function Oe($){$!==fe&&(X&&r.lineWidth($),fe=$)}function ot($,Le,de){$?(xe(r.POLYGON_OFFSET_FILL),(W!==Le||ie!==de)&&(r.polygonOffset(Le,de),W=Le,ie=de)):Ce(r.POLYGON_OFFSET_FILL)}function Ge($){$?xe(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function D($){$===void 0&&($=r.TEXTURE0+G-1),se!==$&&(r.activeTexture($),se=$)}function R($,Le,de){de===void 0&&(se===null?de=r.TEXTURE0+G-1:de=se);let ge=ue[de];ge===void 0&&(ge={type:void 0,texture:void 0},ue[de]=ge),(ge.type!==$||ge.texture!==Le)&&(se!==de&&(r.activeTexture(de),se=de),r.bindTexture($,Le||Ee[$]),ge.type=$,ge.texture=Le)}function ee(){const $=ue[se];$!==void 0&&$.type!==void 0&&(r.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ve(){try{r.compressedTexImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function pe(){try{r.texSubImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ke(){try{r.texSubImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Be(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ct(){try{r.texStorage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Me(){try{r.texStorage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function He(){try{r.texImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function tt(){try{r.texImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function nt($){Ne.equals($)===!1&&(r.scissor($.x,$.y,$.z,$.w),Ne.copy($))}function je($){re.equals($)===!1&&(r.viewport($.x,$.y,$.z,$.w),re.copy($))}function pt($,Le){let de=p.get(Le);de===void 0&&(de=new WeakMap,p.set(Le,de));let ge=de.get($);ge===void 0&&(ge=r.getUniformBlockIndex(Le,$.name),de.set($,ge))}function at($,Le){const ge=p.get(Le).get($);f.get(Le)!==ge&&(r.uniformBlockBinding(Le,ge,$.__bindingPointIndex),f.set(Le,ge))}function At(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},se=null,ue={},v={},y=new WeakMap,M=[],E=null,T=!1,S=null,x=null,U=null,L=null,b=null,k=null,N=null,F=new _t(0,0,0),Y=0,P=!1,C=null,V=null,fe=null,W=null,ie=null,Ne.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:xe,disable:Ce,bindFramebuffer:Fe,drawBuffers:Ze,useProgram:Tt,setBlending:q,setMaterial:Qt,setFlipSided:Te,setCullFace:Pe,setLineWidth:Oe,setPolygonOffset:ot,setScissorTest:Ge,activeTexture:D,bindTexture:R,unbindTexture:ee,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:He,texImage3D:tt,updateUBOMapping:pt,uniformBlockBinding:at,texStorage2D:ct,texStorage3D:Me,texSubImage2D:pe,texSubImage3D:ke,compressedTexSubImage2D:be,compressedTexSubImage3D:Be,scissor:nt,viewport:je,reset:At}}function zg(r,e,t,s){const o=Iw(s);switch(t){case kv:return r*e;case zv:return r*e;case Hv:return r*e*2;case Vv:return r*e/o.components*o.byteLength;case Zf:return r*e/o.components*o.byteLength;case Gv:return r*e*2/o.components*o.byteLength;case Qf:return r*e*2/o.components*o.byteLength;case Bv:return r*e*3/o.components*o.byteLength;case hi:return r*e*4/o.components*o.byteLength;case Jf:return r*e*4/o.components*o.byteLength;case nc:case ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case rc:case sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lf:case uf:return Math.max(r,16)*Math.max(e,8)/4;case af:case cf:return Math.max(r,8)*Math.max(e,8)/2;case df:case ff:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case vf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case _f:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case xf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Mf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Rf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Af:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case oc:case Cf:case bf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case jv:case Pf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Lf:case Df:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iw(r){switch(r){case Ji:case Nv:return{byteLength:1,components:1};case la:case Fv:case fa:return{byteLength:2,components:1};case qf:case Kf:return{byteLength:2,components:4};case ls:case Yf:case qi:return{byteLength:4,components:1};case Ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Nw(r,e,t,s,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Rt,m=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,R){return M?new OffscreenCanvas(D,R):fc("canvas")}function T(D,R,ee){let me=1;const ve=Ge(D);if((ve.width>ee||ve.height>ee)&&(me=ee/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pe=Math.floor(me*ve.width),ke=Math.floor(me*ve.height);v===void 0&&(v=E(pe,ke));const be=R?E(pe,ke):v;return be.width=pe,be.height=ke,be.getContext("2d").drawImage(D,0,0,pe,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+pe+"x"+ke+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function S(D){return D.generateMipmaps}function x(D){r.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(D,R,ee,me,ve=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=R;if(R===r.RED&&(ee===r.FLOAT&&(pe=r.R32F),ee===r.HALF_FLOAT&&(pe=r.R16F),ee===r.UNSIGNED_BYTE&&(pe=r.R8)),R===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.R8UI),ee===r.UNSIGNED_SHORT&&(pe=r.R16UI),ee===r.UNSIGNED_INT&&(pe=r.R32UI),ee===r.BYTE&&(pe=r.R8I),ee===r.SHORT&&(pe=r.R16I),ee===r.INT&&(pe=r.R32I)),R===r.RG&&(ee===r.FLOAT&&(pe=r.RG32F),ee===r.HALF_FLOAT&&(pe=r.RG16F),ee===r.UNSIGNED_BYTE&&(pe=r.RG8)),R===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RG8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RG16UI),ee===r.UNSIGNED_INT&&(pe=r.RG32UI),ee===r.BYTE&&(pe=r.RG8I),ee===r.SHORT&&(pe=r.RG16I),ee===r.INT&&(pe=r.RG32I)),R===r.RGB_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),ee===r.UNSIGNED_INT&&(pe=r.RGB32UI),ee===r.BYTE&&(pe=r.RGB8I),ee===r.SHORT&&(pe=r.RGB16I),ee===r.INT&&(pe=r.RGB32I)),R===r.RGBA_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),ee===r.UNSIGNED_INT&&(pe=r.RGBA32UI),ee===r.BYTE&&(pe=r.RGBA8I),ee===r.SHORT&&(pe=r.RGBA16I),ee===r.INT&&(pe=r.RGBA32I)),R===r.RGB&&ee===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),R===r.RGBA){const ke=ve?xc:St.getTransfer(me);ee===r.FLOAT&&(pe=r.RGBA32F),ee===r.HALF_FLOAT&&(pe=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(pe=ke===Pt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function b(D,R){let ee;return D?R===null||R===ls||R===oo?ee=r.DEPTH24_STENCIL8:R===qi?ee=r.DEPTH32F_STENCIL8:R===la&&(ee=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ls||R===oo?ee=r.DEPTH_COMPONENT24:R===qi?ee=r.DEPTH_COMPONENT32F:R===la&&(ee=r.DEPTH_COMPONENT16),ee}function k(D,R){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==mi&&D.minFilter!==wi?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function N(D){const R=D.target;R.removeEventListener("dispose",N),Y(R),R.isVideoTexture&&m.delete(R)}function F(D){const R=D.target;R.removeEventListener("dispose",F),C(R)}function Y(D){const R=s.get(D);if(R.__webglInit===void 0)return;const ee=D.source,me=y.get(ee);if(me){const ve=me[R.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(D),Object.keys(me).length===0&&y.delete(ee)}s.remove(D)}function P(D){const R=s.get(D);r.deleteTexture(R.__webglTexture);const ee=D.source,me=y.get(ee);delete me[R.__cacheKey],u.memory.textures--}function C(D){const R=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(R.__webglFramebuffer[me]))for(let ve=0;ve<R.__webglFramebuffer[me].length;ve++)r.deleteFramebuffer(R.__webglFramebuffer[me][ve]);else r.deleteFramebuffer(R.__webglFramebuffer[me]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[me])}else{if(Array.isArray(R.__webglFramebuffer))for(let me=0;me<R.__webglFramebuffer.length;me++)r.deleteFramebuffer(R.__webglFramebuffer[me]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let me=0;me<R.__webglColorRenderbuffer.length;me++)R.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[me]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ee=D.textures;for(let me=0,ve=ee.length;me<ve;me++){const pe=s.get(ee[me]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),u.memory.textures--),s.remove(ee[me])}s.remove(D)}let V=0;function fe(){V=0}function W(){const D=V;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),V+=1,D}function ie(D){const R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function G(D,R){const ee=s.get(D);if(D.isVideoTexture&&Oe(D),D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(ee,D,R);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+R)}function X(D,R){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){re(ee,D,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+R)}function J(D,R){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){re(ee,D,R);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+R)}function B(D,R){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){he(ee,D,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+R)}const se={[sf]:r.REPEAT,[os]:r.CLAMP_TO_EDGE,[of]:r.MIRRORED_REPEAT},ue={[mi]:r.NEAREST,[MS]:r.NEAREST_MIPMAP_NEAREST,[Tl]:r.NEAREST_MIPMAP_LINEAR,[wi]:r.LINEAR,[cd]:r.LINEAR_MIPMAP_NEAREST,[as]:r.LINEAR_MIPMAP_LINEAR},O={[RS]:r.NEVER,[DS]:r.ALWAYS,[AS]:r.LESS,[Xv]:r.LEQUAL,[CS]:r.EQUAL,[LS]:r.GEQUAL,[bS]:r.GREATER,[PS]:r.NOTEQUAL};function ce(D,R){if(R.type===qi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===wi||R.magFilter===cd||R.magFilter===Tl||R.magFilter===as||R.minFilter===wi||R.minFilter===cd||R.minFilter===Tl||R.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,se[R.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,se[R.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,se[R.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ue[R.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ue[R.minFilter]),R.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,O[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===mi||R.minFilter!==Tl&&R.minFilter!==as||R.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function Ne(D,R){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",N));const me=R.source;let ve=y.get(me);ve===void 0&&(ve={},y.set(me,ve));const pe=ie(R);if(pe!==D.__cacheKey){ve[pe]===void 0&&(ve[pe]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ve[pe].usedTimes++;const ke=ve[D.__cacheKey];ke!==void 0&&(ve[D.__cacheKey].usedTimes--,ke.usedTimes===0&&P(R)),D.__cacheKey=pe,D.__webglTexture=ve[pe].texture}return ee}function re(D,R,ee){let me=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(me=r.TEXTURE_3D);const ve=Ne(D,R),pe=R.source;t.bindTexture(me,D.__webglTexture,r.TEXTURE0+ee);const ke=s.get(pe);if(pe.version!==ke.__version||ve===!0){t.activeTexture(r.TEXTURE0+ee);const be=St.getPrimaries(St.workingColorSpace),Be=R.colorSpace===Cr?null:St.getPrimaries(R.colorSpace),ct=R.colorSpace===Cr||be===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Me=T(R.image,!1,o.maxTextureSize);Me=ot(R,Me);const He=l.convert(R.format,R.colorSpace),tt=l.convert(R.type);let nt=L(R.internalFormat,He,tt,R.colorSpace,R.isVideoTexture);ce(me,R);let je;const pt=R.mipmaps,at=R.isVideoTexture!==!0,At=ke.__version===void 0||ve===!0,$=pe.dataReady,Le=k(R,Me);if(R.isDepthTexture)nt=b(R.format===ao,R.type),At&&(at?t.texStorage2D(r.TEXTURE_2D,1,nt,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,nt,Me.width,Me.height,0,He,tt,null));else if(R.isDataTexture)if(pt.length>0){at&&At&&t.texStorage2D(r.TEXTURE_2D,Le,nt,pt[0].width,pt[0].height);for(let de=0,ge=pt.length;de<ge;de++)je=pt[de],at?$&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,je.width,je.height,He,tt,je.data):t.texImage2D(r.TEXTURE_2D,de,nt,je.width,je.height,0,He,tt,je.data);R.generateMipmaps=!1}else at?(At&&t.texStorage2D(r.TEXTURE_2D,Le,nt,Me.width,Me.height),$&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,He,tt,Me.data)):t.texImage2D(r.TEXTURE_2D,0,nt,Me.width,Me.height,0,He,tt,Me.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){at&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,nt,pt[0].width,pt[0].height,Me.depth);for(let de=0,ge=pt.length;de<ge;de++)if(je=pt[de],R.format!==hi)if(He!==null)if(at){if($)if(R.layerUpdates.size>0){const Ie=zg(je.width,je.height,R.format,R.type);for(const Ue of R.layerUpdates){const lt=je.data.subarray(Ue*Ie/je.data.BYTES_PER_ELEMENT,(Ue+1)*Ie/je.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,Ue,je.width,je.height,1,He,lt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,je.width,je.height,Me.depth,He,je.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,nt,je.width,je.height,Me.depth,0,je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?$&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,je.width,je.height,Me.depth,He,tt,je.data):t.texImage3D(r.TEXTURE_2D_ARRAY,de,nt,je.width,je.height,Me.depth,0,He,tt,je.data)}else{at&&At&&t.texStorage2D(r.TEXTURE_2D,Le,nt,pt[0].width,pt[0].height);for(let de=0,ge=pt.length;de<ge;de++)je=pt[de],R.format!==hi?He!==null?at?$&&t.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,je.width,je.height,He,je.data):t.compressedTexImage2D(r.TEXTURE_2D,de,nt,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?$&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,je.width,je.height,He,tt,je.data):t.texImage2D(r.TEXTURE_2D,de,nt,je.width,je.height,0,He,tt,je.data)}else if(R.isDataArrayTexture)if(at){if(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,nt,Me.width,Me.height,Me.depth),$)if(R.layerUpdates.size>0){const de=zg(Me.width,Me.height,R.format,R.type);for(const ge of R.layerUpdates){const Ie=Me.data.subarray(ge*de/Me.data.BYTES_PER_ELEMENT,(ge+1)*de/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Me.width,Me.height,1,He,tt,Ie)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,He,tt,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,He,tt,Me.data);else if(R.isData3DTexture)at?(At&&t.texStorage3D(r.TEXTURE_3D,Le,nt,Me.width,Me.height,Me.depth),$&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,He,tt,Me.data)):t.texImage3D(r.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,He,tt,Me.data);else if(R.isFramebufferTexture){if(At)if(at)t.texStorage2D(r.TEXTURE_2D,Le,nt,Me.width,Me.height);else{let de=Me.width,ge=Me.height;for(let Ie=0;Ie<Le;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,nt,de,ge,0,He,tt,null),de>>=1,ge>>=1}}else if(pt.length>0){if(at&&At){const de=Ge(pt[0]);t.texStorage2D(r.TEXTURE_2D,Le,nt,de.width,de.height)}for(let de=0,ge=pt.length;de<ge;de++)je=pt[de],at?$&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,He,tt,je):t.texImage2D(r.TEXTURE_2D,de,nt,He,tt,je);R.generateMipmaps=!1}else if(at){if(At){const de=Ge(Me);t.texStorage2D(r.TEXTURE_2D,Le,nt,de.width,de.height)}$&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,He,tt,Me)}else t.texImage2D(r.TEXTURE_2D,0,nt,He,tt,Me);S(R)&&x(me),ke.__version=pe.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function he(D,R,ee){if(R.image.length!==6)return;const me=Ne(D,R),ve=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+ee);const pe=s.get(ve);if(ve.version!==pe.__version||me===!0){t.activeTexture(r.TEXTURE0+ee);const ke=St.getPrimaries(St.workingColorSpace),be=R.colorSpace===Cr?null:St.getPrimaries(R.colorSpace),Be=R.colorSpace===Cr||ke===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const ct=R.isCompressedTexture||R.image[0].isCompressedTexture,Me=R.image[0]&&R.image[0].isDataTexture,He=[];for(let ge=0;ge<6;ge++)!ct&&!Me?He[ge]=T(R.image[ge],!0,o.maxCubemapSize):He[ge]=Me?R.image[ge].image:R.image[ge],He[ge]=ot(R,He[ge]);const tt=He[0],nt=l.convert(R.format,R.colorSpace),je=l.convert(R.type),pt=L(R.internalFormat,nt,je,R.colorSpace),at=R.isVideoTexture!==!0,At=pe.__version===void 0||me===!0,$=ve.dataReady;let Le=k(R,tt);ce(r.TEXTURE_CUBE_MAP,R);let de;if(ct){at&&At&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,pt,tt.width,tt.height);for(let ge=0;ge<6;ge++){de=He[ge].mipmaps;for(let Ie=0;Ie<de.length;Ie++){const Ue=de[Ie];R.format!==hi?nt!==null?at?$&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,Ue.width,Ue.height,nt,Ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,pt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,Ue.width,Ue.height,nt,je,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,pt,Ue.width,Ue.height,0,nt,je,Ue.data)}}}else{if(de=R.mipmaps,at&&At){de.length>0&&Le++;const ge=Ge(He[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,pt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Me){at?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,He[ge].width,He[ge].height,nt,je,He[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,pt,He[ge].width,He[ge].height,0,nt,je,He[ge].data);for(let Ie=0;Ie<de.length;Ie++){const lt=de[Ie].image[ge].image;at?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,lt.width,lt.height,nt,je,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,pt,lt.width,lt.height,0,nt,je,lt.data)}}else{at?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,nt,je,He[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,pt,nt,je,He[ge]);for(let Ie=0;Ie<de.length;Ie++){const Ue=de[Ie];at?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,nt,je,Ue.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,pt,nt,je,Ue.image[ge])}}}S(R)&&x(r.TEXTURE_CUBE_MAP),pe.__version=ve.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function Ee(D,R,ee,me,ve,pe){const ke=l.convert(ee.format,ee.colorSpace),be=l.convert(ee.type),Be=L(ee.internalFormat,ke,be,ee.colorSpace),ct=s.get(R),Me=s.get(ee);if(Me.__renderTarget=R,!ct.__hasExternalTextures){const He=Math.max(1,R.width>>pe),tt=Math.max(1,R.height>>pe);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,pe,Be,He,tt,R.depth,0,ke,be,null):t.texImage2D(ve,pe,Be,He,tt,0,ke,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),Pe(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ve,Me.__webglTexture,0,Te(R)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ve,Me.__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(D,R,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,D),R.depthBuffer){const me=R.depthTexture,ve=me&&me.isDepthTexture?me.type:null,pe=b(R.stencilBuffer,ve),ke=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=Te(R);Pe(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,pe,R.width,R.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,pe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,pe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ke,r.RENDERBUFFER,D)}else{const me=R.textures;for(let ve=0;ve<me.length;ve++){const pe=me[ve],ke=l.convert(pe.format,pe.colorSpace),be=l.convert(pe.type),Be=L(pe.internalFormat,ke,be,pe.colorSpace),ct=Te(R);ee&&Pe(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,Be,R.width,R.height):Pe(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,Be,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Be,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(R.depthTexture);me.__renderTarget=R,(!me.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),G(R.depthTexture,0);const ve=me.__webglTexture,pe=Te(R);if(R.depthTexture.format===to)Pe(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(R.depthTexture.format===ao)Pe(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Fe(D){const R=s.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),me){const ve=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),R.__depthDisposeCallback=ve}R.__boundDepthTexture=me}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Ce(R.__webglFramebuffer,D)}else if(ee){R.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[me]),R.__webglDepthbuffer[me]===void 0)R.__webglDepthbuffer[me]=r.createRenderbuffer(),xe(R.__webglDepthbuffer[me],D,!1);else{const ve=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=R.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),xe(R.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,ve)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(D,R,ee){const me=s.get(D);R!==void 0&&Ee(me.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&Fe(D)}function Tt(D){const R=D.texture,ee=s.get(D),me=s.get(R);D.addEventListener("dispose",F);const ve=D.textures,pe=D.isWebGLCubeRenderTarget===!0,ke=ve.length>1;if(ke||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=R.version,u.memory.textures++),pe){ee.__webglFramebuffer=[];for(let be=0;be<6;be++)if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer[be]=[];for(let Be=0;Be<R.mipmaps.length;Be++)ee.__webglFramebuffer[be][Be]=r.createFramebuffer()}else ee.__webglFramebuffer[be]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer=[];for(let be=0;be<R.mipmaps.length;be++)ee.__webglFramebuffer[be]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(ke)for(let be=0,Be=ve.length;be<Be;be++){const ct=s.get(ve[be]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),u.memory.textures++)}if(D.samples>0&&Pe(D)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const Be=ve[be];ee.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[be]);const ct=l.convert(Be.format,Be.colorSpace),Me=l.convert(Be.type),He=L(Be.internalFormat,ct,Me,Be.colorSpace,D.isXRRenderTarget===!0),tt=Te(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,He,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,ee.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),xe(ee.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),ce(r.TEXTURE_CUBE_MAP,R);for(let be=0;be<6;be++)if(R.mipmaps&&R.mipmaps.length>0)for(let Be=0;Be<R.mipmaps.length;Be++)Ee(ee.__webglFramebuffer[be][Be],D,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be);else Ee(ee.__webglFramebuffer[be],D,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);S(R)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let be=0,Be=ve.length;be<Be;be++){const ct=ve[be],Me=s.get(ct);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),ce(r.TEXTURE_2D,ct),Ee(ee.__webglFramebuffer,D,ct,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),S(ct)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,me.__webglTexture),ce(be,R),R.mipmaps&&R.mipmaps.length>0)for(let Be=0;Be<R.mipmaps.length;Be++)Ee(ee.__webglFramebuffer[Be],D,R,r.COLOR_ATTACHMENT0,be,Be);else Ee(ee.__webglFramebuffer,D,R,r.COLOR_ATTACHMENT0,be,0);S(R)&&x(be),t.unbindTexture()}D.depthBuffer&&Fe(D)}function ht(D){const R=D.textures;for(let ee=0,me=R.length;ee<me;ee++){const ve=R[ee];if(S(ve)){const pe=U(D),ke=s.get(ve).__webglTexture;t.bindTexture(pe,ke),x(pe),t.unbindTexture()}}}const Ct=[],q=[];function Qt(D){if(D.samples>0){if(Pe(D)===!1){const R=D.textures,ee=D.width,me=D.height;let ve=r.COLOR_BUFFER_BIT;const pe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ke=s.get(D),be=R.length>1;if(be)for(let Be=0;Be<R.length;Be++)t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Be=0;Be<R.length;Be++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ke.__webglColorRenderbuffer[Be]);const ct=s.get(R[Be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,ee,me,0,0,ee,me,ve,r.NEAREST),f===!0&&(Ct.length=0,q.length=0,Ct.push(r.COLOR_ATTACHMENT0+Be),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ct.push(pe),q.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,q)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Be=0;Be<R.length;Be++){t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,ke.__webglColorRenderbuffer[Be]);const ct=s.get(R[Be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,ct,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const R=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function Te(D){return Math.min(o.maxSamples,D.samples)}function Pe(D){const R=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Oe(D){const R=u.render.frame;m.get(D)!==R&&(m.set(D,R),D.update())}function ot(D,R){const ee=D.colorSpace,me=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ee!==uo&&ee!==Cr&&(St.getTransfer(ee)===Pt?(me!==hi||ve!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),R}function Ge(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=fe,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Pe}function Fw(r,e){function t(s,o=Cr){let l;const u=St.getTransfer(o);if(s===Ji)return r.UNSIGNED_BYTE;if(s===qf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Kf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ov)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Nv)return r.BYTE;if(s===Fv)return r.SHORT;if(s===la)return r.UNSIGNED_SHORT;if(s===Yf)return r.INT;if(s===ls)return r.UNSIGNED_INT;if(s===qi)return r.FLOAT;if(s===fa)return r.HALF_FLOAT;if(s===kv)return r.ALPHA;if(s===Bv)return r.RGB;if(s===hi)return r.RGBA;if(s===zv)return r.LUMINANCE;if(s===Hv)return r.LUMINANCE_ALPHA;if(s===to)return r.DEPTH_COMPONENT;if(s===ao)return r.DEPTH_STENCIL;if(s===Vv)return r.RED;if(s===Zf)return r.RED_INTEGER;if(s===Gv)return r.RG;if(s===Qf)return r.RG_INTEGER;if(s===Jf)return r.RGBA_INTEGER;if(s===nc||s===ic||s===rc||s===sc)if(u===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===nc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ic)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===nc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ic)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===rc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===sc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===af||s===lf||s===cf||s===uf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===af)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===uf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===df||s===ff||s===hf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===df||s===ff)return u===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===hf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pf||s===mf||s===gf||s===vf||s===_f||s===xf||s===yf||s===Sf||s===Mf||s===Ef||s===Tf||s===wf||s===Rf||s===Af)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===pf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_f)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ef)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Af)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===oc||s===Cf||s===bf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===oc)return u===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jv||s===Pf||s===Lf||s===Df)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===oc)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Pf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Df)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===oo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}class Ow extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ia extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kw={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,s),x=this._getHandJoint(p,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=m.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&y>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(kw)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ia;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const Bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new In,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Dr({vertexShader:Bw,fragmentShader:zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new Sc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vw extends fo{constructor(e,t){super();const s=this;let o=null,l=1,u=null,d="local-floor",f=1,p=null,m=null,v=null,y=null,M=null,E=null;const T=new Hw,S=t.getContextAttributes();let x=null,U=null;const L=[],b=[],k=new Rt;let N=null;const F=new Jn;F.viewport=new Vt;const Y=new Jn;Y.viewport=new Vt;const P=[F,Y],C=new Ow;let V=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=L[re];return he===void 0&&(he=new Od,L[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=L[re];return he===void 0&&(he=new Od,L[re]=he),he.getGripSpace()},this.getHand=function(re){let he=L[re];return he===void 0&&(he=new Od,L[re]=he),he.getHandSpace()};function W(re){const he=b.indexOf(re.inputSource);if(he===-1)return;const Ee=L[he];Ee!==void 0&&(Ee.update(re.inputSource,re.frame,p||u),Ee.dispatchEvent({type:re.type,data:re.inputSource}))}function ie(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",G);for(let re=0;re<L.length;re++){const he=b[re];he!==null&&(b[re]=null,L[re].disconnect(he))}V=null,fe=null,T.reset(),e.setRenderTarget(x),M=null,y=null,v=null,o=null,U=null,Ne.stop(),s.isPresenting=!1,e.setPixelRatio(N),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",G),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(k),o.renderState.layers===void 0){const he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new cs(M.framebufferWidth,M.framebufferHeight,{format:hi,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let he=null,Ee=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?ao:to,Ee=S.stencil?oo:ls);const Ce={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};v=new XRWebGLBinding(o,t),y=v.createProjectionLayer(Ce),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new cs(y.textureWidth,y.textureHeight,{format:hi,type:Ji,depthTexture:new s0(y.textureWidth,y.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(d),Ne.setContext(o),Ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function G(re){for(let he=0;he<re.removed.length;he++){const Ee=re.removed[he],xe=b.indexOf(Ee);xe>=0&&(b[xe]=null,L[xe].disconnect(Ee))}for(let he=0;he<re.added.length;he++){const Ee=re.added[he];let xe=b.indexOf(Ee);if(xe===-1){for(let Fe=0;Fe<L.length;Fe++)if(Fe>=b.length){b.push(Ee),xe=Fe;break}else if(b[Fe]===null){b[Fe]=Ee,xe=Fe;break}if(xe===-1)break}const Ce=L[xe];Ce&&Ce.connect(Ee)}}const X=new ne,J=new ne;function B(re,he,Ee){X.setFromMatrixPosition(he.matrixWorld),J.setFromMatrixPosition(Ee.matrixWorld);const xe=X.distanceTo(J),Ce=he.projectionMatrix.elements,Fe=Ee.projectionMatrix.elements,Ze=Ce[14]/(Ce[10]-1),Tt=Ce[14]/(Ce[10]+1),ht=(Ce[9]+1)/Ce[5],Ct=(Ce[9]-1)/Ce[5],q=(Ce[8]-1)/Ce[0],Qt=(Fe[8]+1)/Fe[0],Te=Ze*q,Pe=Ze*Qt,Oe=xe/(-q+Qt),ot=Oe*-q;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ot),re.translateZ(Oe),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ce[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ge=Ze+Oe,D=Tt+Oe,R=Te-ot,ee=Pe+(xe-ot),me=ht*Tt/D*Ge,ve=Ct*Tt/D*Ge;re.projectionMatrix.makePerspective(R,ee,me,ve,Ge,D),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function se(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let he=re.near,Ee=re.far;T.texture!==null&&(T.depthNear>0&&(he=T.depthNear),T.depthFar>0&&(Ee=T.depthFar)),C.near=Y.near=F.near=he,C.far=Y.far=F.far=Ee,(V!==C.near||fe!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,fe=C.far),F.layers.mask=re.layers.mask|2,Y.layers.mask=re.layers.mask|4,C.layers.mask=F.layers.mask|Y.layers.mask;const xe=re.parent,Ce=C.cameras;se(C,xe);for(let Fe=0;Fe<Ce.length;Fe++)se(Ce[Fe],xe);Ce.length===2?B(C,F,Y):C.projectionMatrix.copy(F.projectionMatrix),ue(re,C,xe)};function ue(re,he,Ee){Ee===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(Ee.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Uf*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return f},this.setFoveation=function(re){f=re,y!==null&&(y.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let O=null;function ce(re,he){if(m=he.getViewerPose(p||u),E=he,m!==null){const Ee=m.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let xe=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Fe=0;Fe<Ee.length;Fe++){const Ze=Ee[Fe];let Tt=null;if(M!==null)Tt=M.getViewport(Ze);else{const Ct=v.getViewSubImage(y,Ze);Tt=Ct.viewport,Fe===0&&(e.setRenderTargetTextures(U,Ct.colorTexture,y.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(U))}let ht=P[Fe];ht===void 0&&(ht=new Jn,ht.layers.enable(Fe),ht.viewport=new Vt,P[Fe]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Fe===0&&(C.matrix.copy(ht.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(ht)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Fe=v.getDepthInformation(Ee[0]);Fe&&Fe.isValid&&Fe.texture&&T.init(e,Fe,o.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const xe=b[Ee],Ce=L[Ee];xe!==null&&Ce!==void 0&&Ce.update(xe,he,p||u)}O&&O(re,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),E=null}const Ne=new i0;Ne.setAnimationLoop(ce),this.setAnimationLoop=function(re){O=re},this.dispose=function(){}}}const Qr=new bi,Gw=new Ot;function jw(r,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,e0(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,U,L,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),v(S,x)):x.isMeshPhongMaterial?(l(S,x),m(S,x)):x.isMeshStandardMaterial?(l(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,b)):x.isMeshMatcapMaterial?(l(S,x),E(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),T(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?f(S,x,U,L):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Un&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Un&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const U=e.get(x),L=U.envMap,b=U.envMapRotation;L&&(S.envMap.value=L,Qr.copy(b),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),S.envMapRotation.value.setFromMatrix4(Gw.makeRotationFromEuler(Qr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,U,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*U,S.scale.value=L*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,U){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Un&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const U=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function Ww(r,e,t,s){let o={},l={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(U,L){const b=L.program;s.uniformBlockBinding(U,b)}function p(U,L){let b=o[U.id];b===void 0&&(E(U),b=m(U),o[U.id]=b,U.addEventListener("dispose",S));const k=L.program;s.updateUBOMapping(U,k);const N=e.render.frame;l[U.id]!==N&&(y(U),l[U.id]=N)}function m(U){const L=v();U.__bindingPointIndex=L;const b=r.createBuffer(),k=U.__size,N=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,k,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,b),b}function v(){for(let U=0;U<d;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const L=o[U.id],b=U.uniforms,k=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let N=0,F=b.length;N<F;N++){const Y=Array.isArray(b[N])?b[N]:[b[N]];for(let P=0,C=Y.length;P<C;P++){const V=Y[P];if(M(V,N,P,k)===!0){const fe=V.__offset,W=Array.isArray(V.value)?V.value:[V.value];let ie=0;for(let G=0;G<W.length;G++){const X=W[G],J=T(X);typeof X=="number"||typeof X=="boolean"?(V.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,fe+ie,V.__data)):X.isMatrix3?(V.__data[0]=X.elements[0],V.__data[1]=X.elements[1],V.__data[2]=X.elements[2],V.__data[3]=0,V.__data[4]=X.elements[3],V.__data[5]=X.elements[4],V.__data[6]=X.elements[5],V.__data[7]=0,V.__data[8]=X.elements[6],V.__data[9]=X.elements[7],V.__data[10]=X.elements[8],V.__data[11]=0):(X.toArray(V.__data,ie),ie+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,fe,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(U,L,b,k){const N=U.value,F=L+"_"+b;if(k[F]===void 0)return typeof N=="number"||typeof N=="boolean"?k[F]=N:k[F]=N.clone(),!0;{const Y=k[F];if(typeof N=="number"||typeof N=="boolean"){if(Y!==N)return k[F]=N,!0}else if(Y.equals(N)===!1)return Y.copy(N),!0}return!1}function E(U){const L=U.uniforms;let b=0;const k=16;for(let F=0,Y=L.length;F<Y;F++){const P=Array.isArray(L[F])?L[F]:[L[F]];for(let C=0,V=P.length;C<V;C++){const fe=P[C],W=Array.isArray(fe.value)?fe.value:[fe.value];for(let ie=0,G=W.length;ie<G;ie++){const X=W[ie],J=T(X),B=b%k,se=B%J.boundary,ue=B+se;b+=se,ue!==0&&k-ue<J.storage&&(b+=k-ue),fe.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=b,b+=J.storage}}}const N=b%k;return N>0&&(b+=k-N),U.__size=b,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function S(U){const L=U.target;L.removeEventListener("dispose",S);const b=u.indexOf(L.__bindingPointIndex);u.splice(b,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function x(){for(const U in o)r.deleteBuffer(o[U]);u=[],o={},l={}}return{bind:f,update:p,dispose:x}}class Xw{constructor(e={}){const{canvas:t=IS(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=u;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,x=null;const U=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=Pr,this.toneMappingExposure=1;const b=this;let k=!1,N=0,F=0,Y=null,P=-1,C=null;const V=new Vt,fe=new Vt;let W=null;const ie=new _t(0);let G=0,X=t.width,J=t.height,B=1,se=null,ue=null;const O=new Vt(0,0,X,J),ce=new Vt(0,0,X,J);let Ne=!1;const re=new nh;let he=!1,Ee=!1;const xe=new Ot,Ce=new Ot,Fe=new ne,Ze=new Vt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Ct(){return Y===null?B:1}let q=s;function Qt(A,K){return t.getContext(A,K)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$f}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),q===null){const K="webgl2";if(q=Qt(K,A),q===null)throw Qt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Te,Pe,Oe,ot,Ge,D,R,ee,me,ve,pe,ke,be,Be,ct,Me,He,tt,nt,je,pt,at,At,$;function Le(){Te=new Z1(q),Te.init(),at=new Fw(q,Te),Pe=new W1(q,Te,e,at),Oe=new Uw(q,Te),Pe.reverseDepthBuffer&&y&&Oe.buffers.depth.setReversed(!0),ot=new eT(q),Ge=new _w,D=new Nw(q,Te,Oe,Ge,Pe,at,ot),R=new $1(b),ee=new K1(b),me=new aM(q),At=new G1(q,me),ve=new Q1(q,me,ot,At),pe=new nT(q,ve,me,ot),nt=new tT(q,Pe,D),Me=new X1(Ge),ke=new vw(b,R,ee,Te,Pe,At,Me),be=new jw(b,Ge),Be=new yw,ct=new Rw(Te),tt=new V1(b,R,ee,Oe,pe,M,f),He=new Lw(b,pe,Pe),$=new Ww(q,ot,Pe,Oe),je=new j1(q,Te,ot),pt=new J1(q,Te,ot),ot.programs=ke.programs,b.capabilities=Pe,b.extensions=Te,b.properties=Ge,b.renderLists=Be,b.shadowMap=He,b.state=Oe,b.info=ot}Le();const de=new Vw(b,q);this.xr=de,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=Te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(X,J,!1))},this.getSize=function(A){return A.set(X,J)},this.setSize=function(A,K,ae=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,J=K,t.width=Math.floor(A*B),t.height=Math.floor(K*B),ae===!0&&(t.style.width=A+"px",t.style.height=K+"px"),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(X*B,J*B).floor()},this.setDrawingBufferSize=function(A,K,ae){X=A,J=K,B=ae,t.width=Math.floor(A*ae),t.height=Math.floor(K*ae),this.setViewport(0,0,A,K)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,K,ae,le){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,K,ae,le),Oe.viewport(V.copy(O).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ce)},this.setScissor=function(A,K,ae,le){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,K,ae,le),Oe.scissor(fe.copy(ce).multiplyScalar(B).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){Oe.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){se=A},this.setTransparentSort=function(A){ue=A},this.getClearColor=function(A){return A.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(A=!0,K=!0,ae=!0){let le=0;if(A){let Z=!1;if(Y!==null){const Ae=Y.texture.format;Z=Ae===Jf||Ae===Qf||Ae===Zf}if(Z){const Ae=Y.texture.type,we=Ae===Ji||Ae===ls||Ae===la||Ae===oo||Ae===qf||Ae===Kf,Ye=tt.getClearColor(),Xe=tt.getClearAlpha(),it=Ye.r,st=Ye.g,qe=Ye.b;we?(E[0]=it,E[1]=st,E[2]=qe,E[3]=Xe,q.clearBufferuiv(q.COLOR,0,E)):(T[0]=it,T[1]=st,T[2]=qe,T[3]=Xe,q.clearBufferiv(q.COLOR,0,T))}else le|=q.COLOR_BUFFER_BIT}K&&(le|=q.DEPTH_BUFFER_BIT),ae&&(le|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Be.dispose(),ct.dispose(),Ge.dispose(),R.dispose(),ee.dispose(),pe.dispose(),At.dispose(),$.dispose(),ke.dispose(),de.dispose(),de.removeEventListener("sessionstart",ds),de.removeEventListener("sessionend",tr),Li.stop()};function ge(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=ot.autoReset,K=He.enabled,ae=He.autoUpdate,le=He.needsUpdate,Z=He.type;Le(),ot.autoReset=A,He.enabled=K,He.autoUpdate=ae,He.needsUpdate=le,He.type=Z}function Ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function lt(A){const K=A.target;K.removeEventListener("dispose",lt),Ut(K)}function Ut(A){Xt(A),Ge.remove(A)}function Xt(A){const K=Ge.get(A).programs;K!==void 0&&(K.forEach(function(ae){ke.releaseProgram(ae)}),A.isShaderMaterial&&ke.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ae,le,Z,Ae){K===null&&(K=Tt);const we=Z.isMesh&&Z.matrixWorld.determinant()<0,Ye=_a(A,K,ae,le,Z);Oe.setMaterial(le,we);let Xe=ae.index,it=1;if(le.wireframe===!0){if(Xe=ve.getWireframeAttribute(ae),Xe===void 0)return;it=2}const st=ae.drawRange,qe=ae.attributes.position;let vt=st.start*it,wt=(st.start+st.count)*it;Ae!==null&&(vt=Math.max(vt,Ae.start*it),wt=Math.min(wt,(Ae.start+Ae.count)*it)),Xe!==null?(vt=Math.max(vt,0),wt=Math.min(wt,Xe.count)):qe!=null&&(vt=Math.max(vt,0),wt=Math.min(wt,qe.count));const gt=wt-vt;if(gt<0||gt===1/0)return;At.setup(Z,le,Ye,ae,Xe);let ln,ut=je;if(Xe!==null&&(ln=me.get(Xe),ut=pt,ut.setIndex(ln)),Z.isMesh)le.wireframe===!0?(Oe.setLineWidth(le.wireframeLinewidth*Ct()),ut.setMode(q.LINES)):ut.setMode(q.TRIANGLES);else if(Z.isLine){let Qe=le.linewidth;Qe===void 0&&(Qe=1),Oe.setLineWidth(Qe*Ct()),Z.isLineSegments?ut.setMode(q.LINES):Z.isLineLoop?ut.setMode(q.LINE_LOOP):ut.setMode(q.LINE_STRIP)}else Z.isPoints?ut.setMode(q.POINTS):Z.isSprite&&ut.setMode(q.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ut.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))ut.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qe=Z._multiDrawStarts,ni=Z._multiDrawCounts,Mt=Z._multiDrawCount,cn=Xe?me.get(Xe).bytesPerElement:1,ii=Ge.get(le).currentProgram.getUniforms();for(let $t=0;$t<Mt;$t++)ii.setValue(q,"_gl_DrawID",$t),ut.render(Qe[$t]/cn,ni[$t])}else if(Z.isInstancedMesh)ut.renderInstances(vt,gt,Z.count);else if(ae.isInstancedBufferGeometry){const Qe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ni=Math.min(ae.instanceCount,Qe);ut.renderInstances(vt,gt,ni)}else ut.render(vt,gt)};function xt(A,K,ae){A.transparent===!0&&A.side===Yi&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,fs(A,K,ae),A.side=Lr,A.needsUpdate=!0,fs(A,K,ae),A.side=Yi):fs(A,K,ae)}this.compile=function(A,K,ae=null){ae===null&&(ae=A),x=ct.get(ae),x.init(K),L.push(x),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),A!==ae&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights();const le=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let we=0;we<Ae.length;we++){const Ye=Ae[we];xt(Ye,ae,Z),le.add(Ye)}else xt(Ae,ae,Z),le.add(Ae)}),L.pop(),x=null,le},this.compileAsync=function(A,K,ae=null){const le=this.compile(A,K,ae);return new Promise(Z=>{function Ae(){if(le.forEach(function(we){Ge.get(we).currentProgram.isReady()&&le.delete(we)}),le.size===0){Z(A);return}setTimeout(Ae,10)}Te.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Mn=null;function gn(A){Mn&&Mn(A)}function ds(){Li.stop()}function tr(){Li.start()}const Li=new i0;Li.setAnimationLoop(gn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(A){Mn=A,de.setAnimationLoop(A),A===null?Li.stop():Li.start()},de.addEventListener("sessionstart",ds),de.addEventListener("sessionend",tr),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(K),K=de.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,K,Y),x=ct.get(A,L.length),x.init(K),L.push(x),Ce.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),re.setFromProjectionMatrix(Ce),Ee=this.localClippingEnabled,he=Me.init(this.clippingPlanes,Ee),S=Be.get(A,U.length),S.init(),U.push(S),de.enabled===!0&&de.isPresenting===!0){const Ae=b.xr.getDepthSensingMesh();Ae!==null&&Di(Ae,K,-1/0,b.sortObjects)}Di(A,K,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(se,ue),ht=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ht&&tt.addToRenderList(S,A),this.info.render.frame++,he===!0&&Me.beginShadows();const ae=x.state.shadowsArray;He.render(ae,A,K),he===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=S.opaque,Z=S.transmissive;if(x.setupLights(),K.isArrayCamera){const Ae=K.cameras;if(Z.length>0)for(let we=0,Ye=Ae.length;we<Ye;we++){const Xe=Ae[we];Ir(le,Z,A,Xe)}ht&&tt.render(A);for(let we=0,Ye=Ae.length;we<Ye;we++){const Xe=Ae[we];Ur(S,A,Xe,Xe.viewport)}}else Z.length>0&&Ir(le,Z,A,K),ht&&tt.render(A),Ur(S,A,K);Y!==null&&(D.updateMultisampleRenderTarget(Y),D.updateRenderTargetMipmap(Y)),A.isScene===!0&&A.onAfterRender(b,A,K),At.resetDefaultState(),P=-1,C=null,L.pop(),L.length>0?(x=L[L.length-1],he===!0&&Me.setGlobalState(b.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function Di(A,K,ae,le){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){le&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ce);const we=pe.update(A),Ye=A.material;Ye.visible&&S.push(A,we,Ye,ae,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const we=pe.update(A),Ye=A.material;if(le&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ze.copy(we.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ye)){const Xe=we.groups;for(let it=0,st=Xe.length;it<st;it++){const qe=Xe[it],vt=Ye[qe.materialIndex];vt&&vt.visible&&S.push(A,we,vt,ae,Ze.z,qe)}}else Ye.visible&&S.push(A,we,Ye,ae,Ze.z,null)}}const Ae=A.children;for(let we=0,Ye=Ae.length;we<Ye;we++)Di(Ae[we],K,ae,le)}function Ur(A,K,ae,le){const Z=A.opaque,Ae=A.transmissive,we=A.transparent;x.setupLightsView(ae),he===!0&&Me.setGlobalState(b.clippingPlanes,ae),le&&Oe.viewport(V.copy(le)),Z.length>0&&nr(Z,K,ae),Ae.length>0&&nr(Ae,K,ae),we.length>0&&nr(we,K,ae),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Ir(A,K,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[le.id]===void 0&&(x.state.transmissionRenderTarget[le.id]=new cs(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?fa:Ji,minFilter:as,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Ae=x.state.transmissionRenderTarget[le.id],we=le.viewport||V;Ae.setSize(we.z,we.w);const Ye=b.getRenderTarget();b.setRenderTarget(Ae),b.getClearColor(ie),G=b.getClearAlpha(),G<1&&b.setClearColor(16777215,.5),b.clear(),ht&&tt.render(ae);const Xe=b.toneMapping;b.toneMapping=Pr;const it=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),x.setupLightsView(le),he===!0&&Me.setGlobalState(b.clippingPlanes,le),nr(A,ae,le),D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae),Te.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let qe=0,vt=K.length;qe<vt;qe++){const wt=K[qe],gt=wt.object,ln=wt.geometry,ut=wt.material,Qe=wt.group;if(ut.side===Yi&&gt.layers.test(le.layers)){const ni=ut.side;ut.side=Un,ut.needsUpdate=!0,ga(gt,ae,le,ln,ut,Qe),ut.side=ni,ut.needsUpdate=!0,st=!0}}st===!0&&(D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae))}b.setRenderTarget(Ye),b.setClearColor(ie,G),it!==void 0&&(le.viewport=it),b.toneMapping=Xe}function nr(A,K,ae){const le=K.isScene===!0?K.overrideMaterial:null;for(let Z=0,Ae=A.length;Z<Ae;Z++){const we=A[Z],Ye=we.object,Xe=we.geometry,it=le===null?we.material:le,st=we.group;Ye.layers.test(ae.layers)&&ga(Ye,K,ae,Xe,it,st)}}function ga(A,K,ae,le,Z,Ae){A.onBeforeRender(b,K,ae,le,Z,Ae),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(b,K,ae,le,A,Ae),Z.transparent===!0&&Z.side===Yi&&Z.forceSinglePass===!1?(Z.side=Un,Z.needsUpdate=!0,b.renderBufferDirect(ae,K,le,Z,A,Ae),Z.side=Lr,Z.needsUpdate=!0,b.renderBufferDirect(ae,K,le,Z,A,Ae),Z.side=Yi):b.renderBufferDirect(ae,K,le,Z,A,Ae),A.onAfterRender(b,K,ae,le,Z,Ae)}function fs(A,K,ae){K.isScene!==!0&&(K=Tt);const le=Ge.get(A),Z=x.state.lights,Ae=x.state.shadowsArray,we=Z.state.version,Ye=ke.getParameters(A,Z.state,Ae,K,ae),Xe=ke.getProgramCacheKey(Ye);let it=le.programs;le.environment=A.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(A.isMeshStandardMaterial?ee:R).get(A.envMap||le.environment),le.envMapRotation=le.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",lt),it=new Map,le.programs=it);let st=it.get(Xe);if(st!==void 0){if(le.currentProgram===st&&le.lightsStateVersion===we)return _i(A,Ye),st}else Ye.uniforms=ke.getUniforms(A),A.onBeforeCompile(Ye,b),st=ke.acquireProgram(Ye,Xe),it.set(Xe,st),le.uniforms=Ye.uniforms;const qe=le.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Me.uniform),_i(A,Ye),le.needsLights=Ec(A),le.lightsStateVersion=we,le.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),le.currentProgram=st,le.uniformsList=null,st}function va(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=lc.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function _i(A,K){const ae=Ge.get(A);ae.outputColorSpace=K.outputColorSpace,ae.batching=K.batching,ae.batchingColor=K.batchingColor,ae.instancing=K.instancing,ae.instancingColor=K.instancingColor,ae.instancingMorph=K.instancingMorph,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function _a(A,K,ae,le,Z){K.isScene!==!0&&(K=Tt),D.resetTextureUnits();const Ae=K.fog,we=le.isMeshStandardMaterial?K.environment:null,Ye=Y===null?b.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:uo,Xe=(le.isMeshStandardMaterial?ee:R).get(le.envMap||we),it=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,st=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),qe=!!ae.morphAttributes.position,vt=!!ae.morphAttributes.normal,wt=!!ae.morphAttributes.color;let gt=Pr;le.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(gt=b.toneMapping);const ln=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ut=ln!==void 0?ln.length:0,Qe=Ge.get(le),ni=x.state.lights;if(he===!0&&(Ee===!0||A!==C)){const vn=A===C&&le.id===P;Me.setState(le,A,vn)}let Mt=!1;le.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ni.state.version||Qe.outputColorSpace!==Ye||Z.isBatchedMesh&&Qe.batching===!1||!Z.isBatchedMesh&&Qe.batching===!0||Z.isBatchedMesh&&Qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qe.instancing===!1||!Z.isInstancedMesh&&Qe.instancing===!0||Z.isSkinnedMesh&&Qe.skinning===!1||!Z.isSkinnedMesh&&Qe.skinning===!0||Z.isInstancedMesh&&Qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qe.instancingMorph===!1&&Z.morphTexture!==null||Qe.envMap!==Xe||le.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Me.numPlanes||Qe.numIntersection!==Me.numIntersection)||Qe.vertexAlphas!==it||Qe.vertexTangents!==st||Qe.morphTargets!==qe||Qe.morphNormals!==vt||Qe.morphColors!==wt||Qe.toneMapping!==gt||Qe.morphTargetsCount!==ut)&&(Mt=!0):(Mt=!0,Qe.__version=le.version);let cn=Qe.currentProgram;Mt===!0&&(cn=fs(le,K,Z));let ii=!1,$t=!1,xi=!1;const Lt=cn.getUniforms(),Hn=Qe.uniforms;if(Oe.useProgram(cn.program)&&(ii=!0,$t=!0,xi=!0),le.id!==P&&(P=le.id,$t=!0),ii||C!==A){Oe.buffers.depth.getReversed()?(xe.copy(A.projectionMatrix),FS(xe),OS(xe),Lt.setValue(q,"projectionMatrix",xe)):Lt.setValue(q,"projectionMatrix",A.projectionMatrix),Lt.setValue(q,"viewMatrix",A.matrixWorldInverse);const Vn=Lt.map.cameraPosition;Vn!==void 0&&Vn.setValue(q,Fe.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&Lt.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Lt.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,$t=!0,xi=!0)}if(Z.isSkinnedMesh){Lt.setOptional(q,Z,"bindMatrix"),Lt.setOptional(q,Z,"bindMatrixInverse");const vn=Z.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Lt.setValue(q,"boneTexture",vn.boneTexture,D))}Z.isBatchedMesh&&(Lt.setOptional(q,Z,"batchingTexture"),Lt.setValue(q,"batchingTexture",Z._matricesTexture,D),Lt.setOptional(q,Z,"batchingIdTexture"),Lt.setValue(q,"batchingIdTexture",Z._indirectTexture,D),Lt.setOptional(q,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Lt.setValue(q,"batchingColorTexture",Z._colorsTexture,D));const Ui=ae.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&nt.update(Z,ae,cn),($t||Qe.receiveShadow!==Z.receiveShadow)&&(Qe.receiveShadow=Z.receiveShadow,Lt.setValue(q,"receiveShadow",Z.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Hn.envMap.value=Xe,Hn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&K.environment!==null&&(Hn.envMapIntensity.value=K.environmentIntensity),$t&&(Lt.setValue(q,"toneMappingExposure",b.toneMappingExposure),Qe.needsLights&&xa(Hn,xi),Ae&&le.fog===!0&&be.refreshFogUniforms(Hn,Ae),be.refreshMaterialUniforms(Hn,le,B,J,x.state.transmissionRenderTarget[A.id]),lc.upload(q,va(Qe),Hn,D)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(lc.upload(q,va(Qe),Hn,D),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Lt.setValue(q,"center",Z.center),Lt.setValue(q,"modelViewMatrix",Z.modelViewMatrix),Lt.setValue(q,"normalMatrix",Z.normalMatrix),Lt.setValue(q,"modelMatrix",Z.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const vn=le.uniformsGroups;for(let Vn=0,En=vn.length;Vn<En;Vn++){const ya=vn[Vn];$.update(ya,cn),$.bind(ya,cn)}}return cn}function xa(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function Ec(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,K,ae){Ge.get(A.texture).__webglTexture=K,Ge.get(A.depthTexture).__webglTexture=ae;const le=Ge.get(A);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=ae===void 0,le.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,K){const ae=Ge.get(A);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,ae=0){Y=A,N=K,F=ae;let le=!0,Z=null,Ae=!1,we=!1;if(A){const Xe=Ge.get(A);if(Xe.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(q.FRAMEBUFFER,null),le=!1;else if(Xe.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Xe.__hasExternalTextures)D.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qe=A.depthTexture;if(Xe.__boundDepthTexture!==qe){if(qe!==null&&Ge.has(qe)&&(A.width!==qe.image.width||A.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(we=!0);const st=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[K])?Z=st[K][ae]:Z=st[K],Ae=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?Z=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?Z=st[ae]:Z=st,V.copy(A.viewport),fe.copy(A.scissor),W=A.scissorTest}else V.copy(O).multiplyScalar(B).floor(),fe.copy(ce).multiplyScalar(B).floor(),W=Ne;if(Oe.bindFramebuffer(q.FRAMEBUFFER,Z)&&le&&Oe.drawBuffers(A,Z),Oe.viewport(V),Oe.scissor(fe),Oe.setScissorTest(W),Ae){const Xe=Ge.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Xe.__webglTexture,ae)}else if(we){const Xe=Ge.get(A.texture),it=K||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Xe.__webglTexture,ae||0,it)}P=-1},this.readRenderTargetPixels=function(A,K,ae,le,Z,Ae,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ye=Ye[we]),Ye){Oe.bindFramebuffer(q.FRAMEBUFFER,Ye);try{const Xe=A.texture,it=Xe.format,st=Xe.type;if(!Pe.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-le&&ae>=0&&ae<=A.height-Z&&q.readPixels(K,ae,le,Z,at.convert(it),at.convert(st),Ae)}finally{const Xe=Y!==null?Ge.get(Y).__webglFramebuffer:null;Oe.bindFramebuffer(q.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,K,ae,le,Z,Ae,we){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ye=Ye[we]),Ye){const Xe=A.texture,it=Xe.format,st=Xe.type;if(!Pe.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=A.width-le&&ae>=0&&ae<=A.height-Z){Oe.bindFramebuffer(q.FRAMEBUFFER,Ye);const qe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,qe),q.bufferData(q.PIXEL_PACK_BUFFER,Ae.byteLength,q.STREAM_READ),q.readPixels(K,ae,le,Z,at.convert(it),at.convert(st),0);const vt=Y!==null?Ge.get(Y).__webglFramebuffer:null;Oe.bindFramebuffer(q.FRAMEBUFFER,vt);const wt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await NS(q,wt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,qe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ae),q.deleteBuffer(qe),q.deleteSync(wt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,K=null,ae=0){A.isTexture!==!0&&(ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1]);const le=Math.pow(2,-ae),Z=Math.floor(A.image.width*le),Ae=Math.floor(A.image.height*le),we=K!==null?K.x:0,Ye=K!==null?K.y:0;D.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,ae,0,0,we,Ye,Z,Ae),Oe.unbindTexture()},this.copyTextureToTexture=function(A,K,ae=null,le=null,Z=0){A.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,A=arguments[1],K=arguments[2],Z=arguments[3]||0,ae=null);let Ae,we,Ye,Xe,it,st,qe,vt,wt;const gt=A.isCompressedTexture?A.mipmaps[Z]:A.image;ae!==null?(Ae=ae.max.x-ae.min.x,we=ae.max.y-ae.min.y,Ye=ae.isBox3?ae.max.z-ae.min.z:1,Xe=ae.min.x,it=ae.min.y,st=ae.isBox3?ae.min.z:0):(Ae=gt.width,we=gt.height,Ye=gt.depth||1,Xe=0,it=0,st=0),le!==null?(qe=le.x,vt=le.y,wt=le.z):(qe=0,vt=0,wt=0);const ln=at.convert(K.format),ut=at.convert(K.type);let Qe;K.isData3DTexture?(D.setTexture3D(K,0),Qe=q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(D.setTexture2DArray(K,0),Qe=q.TEXTURE_2D_ARRAY):(D.setTexture2D(K,0),Qe=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment);const ni=q.getParameter(q.UNPACK_ROW_LENGTH),Mt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),cn=q.getParameter(q.UNPACK_SKIP_PIXELS),ii=q.getParameter(q.UNPACK_SKIP_ROWS),$t=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,gt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,gt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Xe),q.pixelStorei(q.UNPACK_SKIP_ROWS,it),q.pixelStorei(q.UNPACK_SKIP_IMAGES,st);const xi=A.isDataArrayTexture||A.isData3DTexture,Lt=K.isDataArrayTexture||K.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Hn=Ge.get(A),Ui=Ge.get(K),vn=Ge.get(Hn.__renderTarget),Vn=Ge.get(Ui.__renderTarget);Oe.bindFramebuffer(q.READ_FRAMEBUFFER,vn.__webglFramebuffer),Oe.bindFramebuffer(q.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let En=0;En<Ye;En++)xi&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ge.get(A).__webglTexture,Z,st+En),A.isDepthTexture?(Lt&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ge.get(K).__webglTexture,Z,wt+En),q.blitFramebuffer(Xe,it,Ae,we,qe,vt,Ae,we,q.DEPTH_BUFFER_BIT,q.NEAREST)):Lt?q.copyTexSubImage3D(Qe,Z,qe,vt,wt+En,Xe,it,Ae,we):q.copyTexSubImage2D(Qe,Z,qe,vt,wt+En,Xe,it,Ae,we);Oe.bindFramebuffer(q.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Lt?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Qe,Z,qe,vt,wt,Ae,we,Ye,ln,ut,gt.data):K.isCompressedArrayTexture?q.compressedTexSubImage3D(Qe,Z,qe,vt,wt,Ae,we,Ye,ln,gt.data):q.texSubImage3D(Qe,Z,qe,vt,wt,Ae,we,Ye,ln,ut,gt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Z,qe,vt,Ae,we,ln,ut,gt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Z,qe,vt,gt.width,gt.height,ln,gt.data):q.texSubImage2D(q.TEXTURE_2D,Z,qe,vt,Ae,we,ln,ut,gt);q.pixelStorei(q.UNPACK_ROW_LENGTH,ni),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Mt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,cn),q.pixelStorei(q.UNPACK_SKIP_ROWS,ii),q.pixelStorei(q.UNPACK_SKIP_IMAGES,$t),Z===0&&K.generateMipmaps&&q.generateMipmap(Qe),Oe.unbindTexture()},this.copyTextureToTexture3D=function(A,K,ae=null,le=null,Z=0){return A.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,le=arguments[1]||null,A=arguments[2],K=arguments[3],Z=arguments[4]||0),ta('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,K,ae,le,Z)},this.initRenderTarget=function(A){Ge.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Oe.unbindTexture()},this.resetState=function(){N=0,F=0,Y=null,Oe.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class $w extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class u0 extends ho{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hc=new ne,pc=new ne,Hg=new Ot,ea=new eh,Wl=new yc,kd=new ne,Vg=new ne;class Yw extends rn{constructor(e=new er,t=new u0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)hc.fromBufferAttribute(t,o-1),pc.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=hc.distanceTo(pc);e.setAttribute("lineDistance",new Ci(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Wl.copy(s.boundingSphere),Wl.applyMatrix4(o),Wl.radius+=l,e.ray.intersectsSphere(Wl)===!1)return;Hg.copy(o).invert(),ea.copy(e.ray).applyMatrix4(Hg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=this.isLineSegments?2:1,m=s.index,y=s.attributes.position;if(m!==null){const M=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let T=M,S=E-1;T<S;T+=p){const x=m.getX(T),U=m.getX(T+1),L=Xl(this,e,ea,f,x,U);L&&t.push(L)}if(this.isLineLoop){const T=m.getX(E-1),S=m.getX(M),x=Xl(this,e,ea,f,T,S);x&&t.push(x)}}else{const M=Math.max(0,u.start),E=Math.min(y.count,u.start+u.count);for(let T=M,S=E-1;T<S;T+=p){const x=Xl(this,e,ea,f,T,T+1);x&&t.push(x)}if(this.isLineLoop){const T=Xl(this,e,ea,f,E-1,M);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Xl(r,e,t,s,o,l){const u=r.geometry.attributes.position;if(hc.fromBufferAttribute(u,o),pc.fromBufferAttribute(u,l),t.distanceSqToSegment(hc,pc,kd,Vg)>s)return;kd.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(kd);if(!(f<e.near||f>e.far))return{distance:f,point:Vg.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Gg=new ne,jg=new ne;class rh extends Yw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)Gg.fromBufferAttribute(t,o),jg.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Gg.distanceTo(jg);e.setAttribute("lineDistance",new Ci(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const $l=new ne,Yl=new ne,Bd=new ne,ql=new ei;class qw extends er{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(ac*t),u=e.getIndex(),d=e.getAttribute("position"),f=u?u.count:d.count,p=[0,0,0],m=["a","b","c"],v=new Array(3),y={},M=[];for(let E=0;E<f;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:T,b:S,c:x}=ql;if(T.fromBufferAttribute(d,p[0]),S.fromBufferAttribute(d,p[1]),x.fromBufferAttribute(d,p[2]),ql.getNormal(Bd),v[0]=`${Math.round(T.x*o)},${Math.round(T.y*o)},${Math.round(T.z*o)}`,v[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,v[2]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let U=0;U<3;U++){const L=(U+1)%3,b=v[U],k=v[L],N=ql[m[U]],F=ql[m[L]],Y=`${b}_${k}`,P=`${k}_${b}`;P in y&&y[P]?(Bd.dot(y[P].normal)<=l&&(M.push(N.x,N.y,N.z),M.push(F.x,F.y,F.z)),y[P]=null):Y in y||(y[Y]={index0:p[U],index1:p[L],normal:Bd.clone()})}}for(const E in y)if(y[E]){const{index0:T,index1:S}=y[E];$l.fromBufferAttribute(d,T),Yl.fromBufferAttribute(d,S),M.push($l.x,$l.y,$l.z),M.push(Yl.x,Yl.y,Yl.z)}this.setAttribute("position",new Ci(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class d0 extends ho{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wv,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class f0 extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const zd=new Ot,Wg=new ne,Xg=new ne;class Kw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nh,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Wg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wg),Xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xg),t.updateMatrixWorld(),zd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zw extends Kw{constructor(){super(new r0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hd extends f0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Zw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qw extends f0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const $g=new Ot;class Jw{constructor(e,t,s=0,o=1/0){this.ray=new eh(e,t),this.near=s,this.far=o,this.camera=null,this.layers=new th,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $g.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($g),this}intersectObject(e,t=!0,s=[]){return Nf(e,this,s,t),s.sort(Yg),s}intersectObjects(e,t=!0,s=[]){for(let o=0,l=e.length;o<l;o++)Nf(e[o],this,s,t);return s.sort(Yg),s}}function Yg(r,e){return r.distance-e.distance}function Nf(r,e,t,s){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&s===!0){const l=r.children;for(let u=0,d=l.length;u<d;u++)Nf(l[u],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$f}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$f);const h0={W:"#ffffff",Y:"#ffd500",R:"#b71234",O:"#ff5800",B:"#0046ad",G:"#009b48"};function is(r,e,t,s,o,l){return{right:r,left:e,up:t,down:s,front:o,back:l}}function Sn(){const r=[];for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)for(let s=-1;s<=1;s++)e===0&&t===0&&s===0||r.push({position:[e,t,s],colors:is(e===1?"R":null,e===-1?"O":null,t===1?"W":null,t===-1?"Y":null,s===1?"G":null,s===-1?"B":null)});return r}function eR(r,e,t,s){const[o,l,u]=r.position;if((e==="x"?o:e==="y"?l:u)!==t)return{...r,colors:{...r.colors}};let f=o,p=l,m=u,v={...r.colors};return e==="x"&&s===1?(p=-u,m=l,v=is(r.colors.right,r.colors.left,r.colors.back,r.colors.front,r.colors.up,r.colors.down)):e==="x"&&s===-1?(p=u,m=-l,v=is(r.colors.right,r.colors.left,r.colors.front,r.colors.back,r.colors.down,r.colors.up)):e==="y"&&s===1?(f=u,m=-o,v=is(r.colors.front,r.colors.back,r.colors.up,r.colors.down,r.colors.left,r.colors.right)):e==="y"&&s===-1?(f=-u,m=o,v=is(r.colors.back,r.colors.front,r.colors.up,r.colors.down,r.colors.right,r.colors.left)):e==="z"&&s===1?(f=-l,p=o,v=is(r.colors.down,r.colors.up,r.colors.right,r.colors.left,r.colors.front,r.colors.back)):e==="z"&&s===-1&&(f=l,p=-o,v=is(r.colors.up,r.colors.down,r.colors.left,r.colors.right,r.colors.front,r.colors.back)),{position:[f,p,m],colors:v}}function oa(r,e){return r.map(t=>eR(t,e.axis,e.layer,e.direction))}function Ff(r){const e={R:{axis:"x",layer:1},L:{axis:"x",layer:-1},U:{axis:"y",layer:1},D:{axis:"y",layer:-1},F:{axis:"z",layer:1},B:{axis:"z",layer:-1}},t=r.includes("'"),s=r.replace("'",""),{axis:o,layer:l}=e[s];return{axis:o,layer:l,direction:t?-1:1}}const qg=["R","R'","L","L'","U","U'","D","D'","F","F'","B","B'"];function p0(r,e=20){const t=[];let s=[...r],o=null;for(let l=0;l<e;l++){let u,d;do u=qg[Math.floor(Math.random()*qg.length)],d=Ff(u);while(d.axis===o);t.push(d),s=oa(s,d),o=d.axis}return{cubies:s,moves:t}}function m0(r){const e=Sn();for(let t=0;t<r.length;t++){const s=r[t],o=e[t];if(s.position[0]!==o.position[0]||s.position[1]!==o.position[1]||s.position[2]!==o.position[2]||s.colors.right!==o.colors.right||s.colors.left!==o.colors.left||s.colors.up!==o.colors.up||s.colors.down!==o.colors.down||s.colors.front!==o.colors.front||s.colors.back!==o.colors.back)return!1}return!0}const Kg=r=>{let e;const t=new Set,s=(p,m)=>{const v=typeof p=="function"?p(e):p;if(!Object.is(v,e)){const y=e;e=m??(typeof v!="object"||v===null)?v:Object.assign({},e,v),t.forEach(M=>M(e,y))}},o=()=>e,d={setState:s,getState:o,getInitialState:()=>f,subscribe:p=>(t.add(p),()=>t.delete(p))},f=e=r(s,o,d);return d},tR=(r=>r?Kg(r):Kg),nR=r=>r;function iR(r,e=nR){const t=Sl.useSyncExternalStore(r.subscribe,Sl.useCallback(()=>e(r.getState()),[r,e]),Sl.useCallback(()=>e(r.getInitialState()),[r,e]));return Sl.useDebugValue(t),t}const Zg=r=>{const e=tR(r),t=s=>iR(e,s);return Object.assign(t,e),t},rR=(r=>r?Zg(r):Zg),Ri=rR(r=>({cubies:Sn(),snapshots:[{cubies:Sn()}],history:[],isAnimating:!1,currentStep:0,reset:()=>r({cubies:Sn(),snapshots:[{cubies:Sn()}],history:[],isAnimating:!1,currentStep:0}),applySingleMove:e=>r(t=>{const s=oa(t.cubies,e);return{cubies:s,snapshots:[...t.snapshots,{cubies:s}],history:[...t.history,e],currentStep:t.currentStep+1}}),undo:()=>r(e=>{if(e.snapshots.length===0)return e;const t=e.snapshots.slice(0,-1);return{cubies:t.length>0?t[t.length-1].cubies:Sn(),snapshots:t,history:e.history.slice(0,-1),currentStep:e.currentStep-1}}),scramble:e=>{if(typeof e!="number"){const{cubies:u,moves:d}=e,f=[{cubies:Sn()}];let p=Sn();for(const m of d)p=oa(p,m),f.push({cubies:p});r({cubies:u,snapshots:f,history:d,isAnimating:!1,currentStep:d.length});return}const{cubies:t,moves:s}=p0(Sn(),e),o=[{cubies:Sn()}];let l=Sn();for(const u of s)l=oa(l,u),o.push({cubies:l});r({cubies:t,snapshots:o,history:s,isAnimating:!1,currentStep:e})},setAnimating:e=>r({isAnimating:e})})),g0="#d0d5dd",sR="#888888",Qg=280,v0=["right","left","up","down","front","back"],oR={R:new ne(1,0,0),L:new ne(-1,0,0),U:new ne(0,1,0),D:new ne(0,-1,0),F:new ne(0,0,1),B:new ne(0,0,-1)},Jg={R:"x",L:"x",U:"y",D:"y",F:"z",B:"z"},ev={R:1,L:-1,U:1,D:-1,F:1,B:-1};function aR(r){return v0.map(e=>{const t=r.colors[e],s=t?h0[t]:g0;return new d0({color:new _t(s),roughness:.7,metalness:0})})}function lR(r,e,t,s){const o=new ia;o.position.set(e[0]*t,e[1]*t,e[2]*t);const l=new po(s,s,s),u=new Dn(l,aR(r));o.add(u);const d=new qw(l);return o.add(new rh(d,new u0({color:sR}))),o}function tv(r,e,t){return r.map(s=>lR(s,s.position,e,t))}function nv(r){r.traverse(e=>{if(e instanceof Dn||e instanceof rh){e.geometry.dispose();const t=e.material;Array.isArray(t)?t.forEach(s=>s.dispose()):t&&t.dispose()}})}function cR(r,e){r.traverse(t=>{if(t instanceof Dn){const s=t.material;Array.isArray(s)&&v0.forEach((o,l)=>{const u=e.colors[o],d=u?h0[u]:g0;l<s.length&&s[l]instanceof d0&&s[l].color.set(d)})}})}const Qs=z.forwardRef(function({disableStore:e}={},t){const s=z.useRef(null),o=z.useRef(null),l=z.useRef(null),u=z.useRef(null),d=z.useRef([]),f=z.useRef(Sn()),p=z.useRef(null),m=z.useRef(0),v=z.useRef(new Jw),y=z.useRef(new Rt),[M,E]=z.useState(!1),[T,S]=z.useState(null),x=Ri(W=>W.scramble),U=Ri(W=>W.reset),L=Ri(W=>W.applySingleMove),b=z.useRef({theta:Math.atan2(5,5),phi:Math.asin(4/Math.sqrt(66)),radius:Math.sqrt(66),isDragging:!1,lastMouse:{x:0,y:0}}),k=1/3,N=k*.85,F=z.useCallback((W,ie)=>{const G=[],X=k*.6,J=ie*k,B=new ne;for(const se of d.current){se.getWorldPosition(B);const ue=W==="x"?B.x:W==="y"?B.y:B.z;Math.abs(ue-J)<X&&G.push(se)}return G},[k]),Y=z.useCallback(W=>{const ie=d.current;d.current=[];const G=tv(f.current,k,N);for(const X of G)W.add(X);if(d.current=G,ie.length>0){const X=[...ie];for(const J of X)W.remove(J);requestAnimationFrame(()=>{for(const J of X)nv(J)})}},[k,N]),P=z.useCallback(()=>{const W=l.current;if(!W)return;const{theta:ie,phi:G,radius:X}=b.current;W.position.set(X*Math.cos(G)*Math.sin(ie),X*Math.sin(G),X*Math.cos(G)*Math.cos(ie)),W.lookAt(0,0,0)},[]),C=z.useCallback((W,ie,G,X,J)=>{if(p.current)return;const B=F(W,ie);if(B.length===0)return;const se=new rn;X.add(se);for(const O of B)se.attach(O);const ue=Math.PI/2*G;p.current={pivot:se,cubieGroups:B,targetAngle:ue,startTime:performance.now(),axis:W,move:{axis:W,layer:ie,direction:G},skipStore:J}},[F]),V=z.useCallback(W=>{if(p.current||M)return;const ie=o.current;if(!ie)return;const G=Ff(W);C(G.axis,G.layer,G.direction,ie,!!e),E(!0)},[M,C,e]),fe=z.useCallback(W=>{if(p.current||M)return;const ie=o.current;if(!ie)return;const G=Ff(W);C(G.axis,G.layer,G.direction,ie,!0),E(!0)},[M,C]);return z.useImperativeHandle(t,()=>({executeMove:W=>{V(W)},undoMove:W=>{fe(W)},scramble:(W=20)=>{const ie=o.current;if(!ie||p.current)return;const{cubies:G,moves:X}=p0(Sn(),W);f.current=G,Y(ie),e||x({cubies:G,moves:X})},reset:()=>{const W=o.current;!W||p.current||(f.current=Sn(),Y(W),e||U())},isAnimating:()=>M}),[V,Y,x,U,M,e]),z.useEffect(()=>{const W=s.current;if(!W)return;const ie=new $w;ie.background=new _t("#f5f7fa"),o.current=ie;const G=new Jn(45,W.clientWidth/Math.max(W.clientHeight,1),.1,100),X=b.current;G.position.set(X.radius*Math.cos(X.phi)*Math.sin(X.theta),X.radius*Math.sin(X.phi),X.radius*Math.cos(X.phi)*Math.cos(X.theta)),G.lookAt(0,0,0),G.zoom=2,G.updateProjectionMatrix(),l.current=G;const J=new Xw({antialias:!0,alpha:!1});J.setPixelRatio(Math.min(window.devicePixelRatio,2)),J.setSize(W.clientWidth,W.clientHeight),W.appendChild(J.domElement),u.current=J;const B=new Qw(8947865,1);ie.add(B);const se=new Hd(16777215,1.8);se.position.set(5,10,5),ie.add(se);const ue=new Hd(16777215,1);ue.position.set(-3,2,-4),ie.add(ue);const O=new Hd(16777215,.5);O.position.set(0,-5,8),ie.add(O);const ce=tv(f.current,k,N);for(const Te of ce)ie.add(Te);d.current=ce;const Ne=[];ce.forEach(Te=>Te.traverse(Pe=>{Pe instanceof Dn&&Ne.push(Pe)}));const re=(Te,Pe)=>{const Oe=J.domElement.getBoundingClientRect();y.current.x=(Te-Oe.left)/Oe.width*2-1,y.current.y=-((Pe-Oe.top)/Oe.height)*2+1,v.current.setFromCamera(y.current,G);const ot=v.current.intersectObjects(Ne);if(ot.length===0)return null;const Ge=ot[0].face.normal.clone();Ge.transformDirection(ot[0].object.matrixWorld);let D="",R=-1/0;for(const[ee,me]of Object.entries(oR)){const ve=Ge.dot(me);ve>R&&ve>.5&&(R=ve,D=ee)}return D||null},he=Te=>{if(p.current||Te.button!==0&&Te.button!==2)return;const Pe=re(Te.clientX,Te.clientY);if(Pe){const Oe=Jg[Pe],ot=ev[Pe],Ge=Te.button===0?ot:-ot;C(Oe,ot,Ge,o.current,!1),E(!0);return}Te.button===0&&(X.isDragging=!0,X.lastMouse={x:Te.clientX,y:Te.clientY})},Ee=Te=>{if(!X.isDragging){if(!p.current){const ot=re(Te.clientX,Te.clientY);S(ot),W.style.cursor=ot?"pointer":""}return}const Pe=Te.clientX-X.lastMouse.x,Oe=Te.clientY-X.lastMouse.y;X.lastMouse={x:Te.clientX,y:Te.clientY},X.theta-=Pe*.005,X.phi+=Oe*.005,X.phi=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,X.phi)),P()},xe=()=>{X.isDragging=!1},Ce=Te=>{Te.preventDefault()},Fe=Te=>{Te.preventDefault(),X.radius+=Te.deltaY*.01*(X.radius/8),X.radius=Math.max(3,Math.min(20,X.radius)),P()};let Ze=null;const Tt=Te=>{p.current||Te.touches.length!==1||(Ze=re(Te.touches[0].clientX,Te.touches[0].clientY),!Ze&&(X.isDragging=!0,X.lastMouse={x:Te.touches[0].clientX,y:Te.touches[0].clientY}))},ht=Te=>{if(!X.isDragging||Te.touches.length!==1)return;Te.preventDefault();const Pe=Te.touches[0].clientX-X.lastMouse.x,Oe=Te.touches[0].clientY-X.lastMouse.y;X.lastMouse={x:Te.touches[0].clientX,y:Te.touches[0].clientY},X.theta-=Pe*.005,X.phi+=Oe*.005,X.phi=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,X.phi)),P()},Ct=()=>{if(Ze&&!X.isDragging){const Te=Jg[Ze],Pe=ev[Ze],Oe=-Pe;C(Te,Pe,Oe,o.current,!1),E(!0)}Ze=null,X.isDragging=!1};J.domElement.addEventListener("mousedown",he),window.addEventListener("mousemove",Ee),window.addEventListener("mouseup",xe),J.domElement.addEventListener("contextmenu",Ce),J.domElement.addEventListener("wheel",Fe,{passive:!1}),J.domElement.addEventListener("touchstart",Tt,{passive:!1}),J.domElement.addEventListener("touchmove",ht,{passive:!1}),window.addEventListener("touchend",Ct);const q=()=>{const{clientWidth:Te,clientHeight:Pe}=W;G.aspect=Te/Math.max(Pe,1),G.updateProjectionMatrix(),J.setSize(Te,Pe)};window.addEventListener("resize",q);const Qt=Te=>{const Pe=p.current;if(Pe){const Oe=Te-Pe.startTime;let ot=Math.min(Oe/Qg,1);ot=1-(1-ot)*(1-ot);const Ge=Pe.targetAngle*ot;if(Pe.pivot.rotation.set(0,0,0),Pe.axis==="x"?Pe.pivot.rotation.x=Ge:Pe.axis==="y"?Pe.pivot.rotation.y=Ge:Pe.pivot.rotation.z=Ge,Oe>=Qg){const D=oa(f.current,Pe.move);f.current=D;const R=k;for(const ee of Pe.cubieGroups){const me=new ne;ee.getWorldPosition(me);let ve=-1,pe=1/0;for(let ke=0;ke<D.length;ke++){const be=D[ke].position,Be=me.x-be[0]*R,ct=me.y-be[1]*R,Me=me.z-be[2]*R,He=Be*Be+ct*ct+Me*Me;He<pe&&(pe=He,ve=ke)}if(ve>=0){const ke=D[ve];ie.attach(ee),ee.rotation.set(0,0,0),ee.position.set(ke.position[0]*R,ke.position[1]*R,ke.position[2]*R),cR(ee,ke)}}ie.remove(Pe.pivot),Pe.pivot.clear(),Pe.skipStore||L(Pe.move),p.current=null,E(!1)}}J.render(ie,G),m.current=requestAnimationFrame(Qt)};return m.current=requestAnimationFrame(Qt),()=>{cancelAnimationFrame(m.current),J.domElement.removeEventListener("mousedown",he),window.removeEventListener("mousemove",Ee),window.removeEventListener("mouseup",xe),J.domElement.removeEventListener("contextmenu",Ce),J.domElement.removeEventListener("wheel",Fe),J.domElement.removeEventListener("touchstart",Tt),J.domElement.removeEventListener("touchmove",ht),window.removeEventListener("touchend",Ct),window.removeEventListener("resize",q),p.current&&(ie.remove(p.current.pivot),p.current.pivot.clear());for(const Te of d.current)nv(Te),ie.remove(Te);d.current=[],ie.traverse(Te=>{if(Te instanceof Dn||Te instanceof rh){Te.geometry.dispose();const Pe=Te.material;Array.isArray(Pe)?Pe.forEach(Oe=>Oe.dispose()):Pe&&Pe.dispose()}}),ie.clear(),J.dispose(),W.contains(J.domElement)&&W.removeChild(J.domElement)}},[]),g.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",flex:1,minHeight:"300px"},children:[g.jsx("div",{ref:s,style:{position:"relative",width:"100%",flex:1,minHeight:0,borderRadius:"12px",overflow:"hidden",background:"#f5f7fa",border:"1px solid var(--rule, #e2e5ea)"},children:T&&g.jsxs("div",{style:{position:"absolute",top:"8px",left:"8px",zIndex:10,padding:"4px 10px",borderRadius:"6px",background:"rgba(37,99,235,0.9)",color:"#fff",fontSize:"11px",fontFamily:"monospace",lineHeight:1.5},children:[g.jsxs("div",{children:[T,"面"]}),g.jsx("div",{style:{fontSize:"10px",opacity:.85},children:"左键↺逆时针 | 右键↻顺时针"})]})}),g.jsx("div",{style:{textAlign:"center",paddingTop:"6px",fontSize:"11px",color:"var(--ink2, #5f6368)"},children:"左键点击面 = 逆时针 | 右键点击面 = 顺时针 | 空白拖拽 = 旋转视角"})]})});function Js(r,e){const t=[[0,0,0],[0,0,0],[0,0,0]];for(let s=0;s<3;s++)for(let o=0;o<3;o++)for(let l=0;l<3;l++)t[s][o]+=r[s][l]*e[l][o];return t}const Zn={R:[[1,0,0],[0,0,-1],[0,1,0]],R2:[[1,0,0],[0,-1,0],[0,0,-1]],U:[[0,0,1],[0,1,0],[-1,0,0]],U2:[[-1,0,0],[0,1,0],[0,0,-1]],F:[[0,-1,0],[1,0,0],[0,0,1]],I:[[1,0,0],[0,1,0],[0,0,1]]};function ra(r){return[[r[0][0],r[1][0],r[2][0]],[r[0][1],r[1][1],r[2][1]],[r[0][2],r[1][2],r[2][2]]]}function uR(r,e){for(let t=0;t<3;t++)for(let s=0;s<3;s++)if(r[t][s]!==e[t][s])return!1;return!0}const qs=[{notation:"R",text:"正向 R：右面顺时针"},{notation:"U",text:"正向 U：上面顺时针"},{notation:"F",text:"正向 F：前面顺时针"}],Kl=[{notation:"F'",text:"逆向 F'：撤销 F"},{notation:"U'",text:"逆向 U'：撤销 U"},{notation:"R'",text:"逆向 R'：撤销 R"}];function dR({cubeRef:r}){const[e,t]=z.useState(!1),[s,o]=z.useState(-1),l=qs.length+Kl.length,u=z.useCallback(()=>{var f;if(e)return;(f=r.current)==null||f.reset(),t(!0),o(-1);let d=500;for(let p=0;p<qs.length;p++)setTimeout(()=>{var m;(m=r.current)==null||m.executeMove(qs[p].notation),o(p)},d),d+=800;d+=600;for(let p=0;p<Kl.length;p++)setTimeout(()=>{var m;(m=r.current)==null||m.executeMove(Kl[p].notation),o(qs.length+p)},d),d+=800;setTimeout(()=>{t(!1),o(l)},d+300)},[e]);return g.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid var(--accent)"},children:[g.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"逆序撤销演示：(R · U · F)⁻¹ = F' · U' · R'"}),g.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["先执行 R→U→F 三步操作，再按",g.jsx("strong",{children:"逆序"})," F'→U'→R' 逐步撤销。 后做的先撤销——这就是第 4 节和第 6 节的核心",g.jsx("strong",{children:"逆序列法则"}),"。"]}),g.jsxs("div",{style:{display:"flex",gap:"0.3rem",marginBottom:"0.6rem",flexWrap:"wrap",alignItems:"center"},children:[g.jsx("span",{style:{fontSize:"0.7rem",color:"var(--muted)",marginRight:"0.2rem"},children:"正向"}),qs.map((d,f)=>g.jsx("div",{style:{padding:"0.25rem 0.5rem",borderRadius:"4px",fontSize:"0.72rem",background:f===s?"var(--accent-l)":"var(--bg2)",borderLeft:"2px solid "+(f===s?"var(--accent)":"transparent"),transition:"all 0.3s ease"},children:g.jsx("strong",{style:{fontFamily:"monospace"},children:d.notation})},f)),g.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--muted)",margin:"0 0.2rem"},children:"→"}),g.jsx("span",{style:{fontSize:"0.7rem",color:"var(--muted)",marginRight:"0.2rem"},children:"逆向"}),Kl.map((d,f)=>{const p=qs.length+f;return g.jsx("div",{style:{padding:"0.25rem 0.5rem",borderRadius:"4px",fontSize:"0.72rem",background:p===s?"#FEE2E2":"var(--bg2)",borderLeft:"2px solid "+(p===s?"#DC2626":"transparent"),transition:"all 0.3s ease"},children:g.jsx("strong",{style:{fontFamily:"monospace",color:"#DC2626"},children:d.notation})},f)})]}),s===l&&g.jsxs("div",{style:{padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.8rem",marginBottom:"0.6rem"},children:[g.jsx("span",{style:{fontWeight:700,color:"#16A34A"},children:"魔方回到还原状态！"}),g.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.4rem"},children:"逆序撤销 = 把每一步反过来执行——后做的先撤销。"})]}),g.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:u,disabled:e,children:e?"播放中...":"播放逆序撤销动画"})]})}const Ks=[{notation:"U",text:"① P=U：顶层转一下，把棱块对准右侧"},{notation:"R",text:"② A=R：右面转一下，棱块进入中层"},{notation:"U'",text:"③ P'=U'：顶层转回来，恢复顶层"}];function fR({cubeRef:r}){const[e,t]=z.useState(!1),[s,o]=z.useState(-1),l=z.useCallback(()=>{var d;if(e)return;(d=r.current)==null||d.reset(),t(!0),o(-1);let u=500;for(let f=0;f<Ks.length;f++)setTimeout(()=>{var p;(p=r.current)==null||p.executeMove(Ks[f].notation),o(f)},u),u+=1e3;setTimeout(()=>{t(!1),o(Ks.length)},u+300)},[e]);return g.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid var(--orange)"},children:[g.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"共轭变换演示：P · A · P' = 三明治变换"}),g.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["先执行 P=",g.jsx("strong",{children:"U"})," 把目标棱块移到操作位， 再执行 A=",g.jsx("strong",{children:"R"}),"（核心操作）， 最后执行 P'=",g.jsx("strong",{children:"U'"})," 搬回来。 整体效果：",g.jsx("strong",{children:"只改变目标棱块"}),"，不破坏已复原的部分。"]}),g.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.6rem",background:"var(--bg2)",borderRadius:"4px",padding:"0.3rem 0.5rem"},children:'Tutorial 中层棱块用的就是共轭变换——把棱块搬进搬出，这就是"三明治"的由来。'}),g.jsx("div",{style:{display:"flex",gap:"0.3rem",marginBottom:"0.6rem",flexWrap:"wrap"},children:Ks.map((u,d)=>g.jsxs("div",{style:{padding:"0.3rem 0.6rem",borderRadius:"6px",fontSize:"0.72rem",background:d===s?"#FFF7ED":s===Ks.length?"#DCFCE7":"var(--bg2)",borderLeft:"3px solid "+(d===s?"var(--orange)":"transparent"),transition:"all 0.3s ease"},children:[g.jsx("strong",{style:{fontFamily:"monospace"},children:u.notation}),g.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.3rem"},children:u.text})]},d))}),s===Ks.length&&g.jsxs("div",{style:{padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.8rem",marginBottom:"0.6rem"},children:[g.jsx("span",{style:{fontWeight:700,color:"#16A34A"},children:"注意看"}),g.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.4rem"},children:"棱块成功移到了中层，但顶层和底层的其他块几乎没变。 这就是共轭变换的威力：精准手术式操作，P·A·P'。"})]}),g.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:l,disabled:e,children:e?"播放中...":"播放共轭变换动画"})]})}const Of={R:"R（右面顺时针）","R'":"R'（右面逆时针）",L:"L（左面顺时针）","L'":"L'（左面逆时针）",U:"U（上面顺时针）","U'":"U'（上面逆时针）",D:"D（底面顺时针）","D'":"D'（底面逆时针）",F:"F（前面顺时针）","F'":"F'（前面逆时针）",B:"B（后面顺时针）","B'":"B'（后面逆时针）"},iv={intro:"#3B82F6",matrix:"#10B981",compose:"#F59E0B",inverse:"#8B5CF6",invariant:"#06B6D4",solve:"#EF4444"},rv={intro:["状态 = 向量","26 块各有位置","还原态 = 基准向量"],matrix:["转动 = 旋转矩阵","R = 绕X轴90°","矩阵不满足交换律"],compose:["R·U ≠ U·R","顺序影响结果","矩阵乘法 ≠ 魔方操作可交换"],inverse:["逆操作 = 逆矩阵","(A·B)⁻¹ = B⁻¹·A⁻¹","后做的先撤销"],invariant:["中心块不动","奇偶性守恒","不可能只换两角"],solve:["逆序撤销（初级）","共轭变换（中级）","交换子（高级）"]},sv=["R","R'","U","U'","F","F'"];function ov(r){const e=r[0],t=r.length>1,s=Zn[e];return t?ra(s):s}const Vd={intro:{title:"魔方状态 = 向量",subtitle:"把魔方的当前排列看作一个高维状态向量",prev:null,next:"matrix",keyPoints:["一个魔方有 26 个小块（3×3×3 去掉中心），每个块有自己的位置和朝向",'如果把所有块的位置信息排成一列，就得到了一个"状态向量"',"就像线性代数里用向量表示点的空间位置，这里我们用向量表示魔方的整体状态",'还原状态是一个特殊的"基准向量"，所有其他状态都是它的变换结果'],demoHint:"尝试点击右面（R面），用左键（逆时针）和右键（顺时针）分别转动，观察魔方状态变化",analogy:'类比：在平面上，一个点 (x, y) 是一个二维向量。魔方状态可以理解为 26 个方块在三维空间中的排列组合——一个高维"配置向量"。'},matrix:{title:"单次转动 = 变换矩阵",subtitle:"拧一层面就是对状态向量做一次线性变换",prev:"intro",next:"compose",keyPoints:["魔方的每一次转动，本质上是对选定层上所有方块位置和朝向的重新排列","在数学上，我们可以用 3×3 旋转矩阵描述方块坐标的变换——它保持长度和角度不变（注：这是简化类比，魔方操作的严谨本质是置换群，详见数学档案馆）","右面顺时针转（R）就是把右层 8 个方块沿 X 轴旋转 90°","重点：不同的面转动对应不同的变换矩阵，矩阵运算不满足交换律"],matrices:[{label:"R 面转动对应的旋转矩阵（绕X轴+90°）",data:[[1,0,0],[0,0,-1],[0,1,0]]}],demoHint:"将鼠标移到魔方右面上，左键点击=逆时针，右键点击=顺时针",analogy:"类比：在二维平面上，旋转矩阵 [[cosθ,-sinθ],[sinθ,cosθ]] 把向量旋转 θ 度。魔方的面转动也是类似的旋转变换，作用在三维方块上。"},compose:{title:"连续转动 = 矩阵乘法",subtitle:"R×U ≠ U×R — 矩阵乘法不满足交换律",prev:"matrix",next:"inverse",keyPoints:["先做 R 再做 U，整体效果等价于两个矩阵相乘：R × U","反过来先 U 后 R，就是 U × R","亲手计算就会发现：R × U ≠ U × R！矩阵乘法不满足交换律","这就是为什么魔方操作顺序不能随便换 —— 对应的数学原理"],demoHint:"鼠标左键点击面 = 逆时针旋转 | 右键点击面 = 顺时针旋转 | 空白处拖拽 = 旋转视角",analogy:'类比：生活中"先穿袜子再穿鞋"和"先穿鞋再穿袜子"结果是完全不同的。魔方的层转动也是如此——顺序决定最终状态。矩阵乘积 R×U ≠ U×R 就是这句话的数学表达。'},inverse:{title:"反向转动 = 逆矩阵",subtitle:"R×R⁻¹=I，逆序撤销：(R·U)⁻¹=U⁻¹·R⁻¹",prev:"compose",next:"invariant",keyPoints:["如果 R 是顺时针转 90°，那么 R' 就是逆时针转 90° — 在数学上 R × R' = I",'这就是"逆矩阵"的核心：存在一个操作让变换"撤销"','(R·U)⁻¹ = U⁻¹·R⁻¹ — "后做的先撤销、先做的后撤销"',"复原魔方的核心：找到打乱序列的逆序列（逆序），反向操作即可还原"],demoHint:'点击下方"撤销一步"按钮，观察逆操作逐步将魔方还原',analogy:'类比：如果你先穿上衣再穿裤子，脱的时候要先脱裤子再脱上衣——逆序法则就是"后做的先撤销，先做的后撤销"。数学上：(R·U)⁻¹ = U⁻¹·R⁻¹。'},invariant:{title:"守恒约束 = 不变量",subtitle:"某些东西在魔方转动中永远不会改变",prev:"inverse",next:"solve",keyPoints:['在魔方中，某些性质在任意合法操作下都保持不变（称为"不变量"）',"例如：6 个中心块的相对位置永远不变（对 3 阶魔方而言）","更深层的约束：角块排列的奇偶性和棱块排列的奇偶性始终相同——所以不可能只交换两个角块而其他块不变","这类似正交矩阵的行列式满足 det(A)·det(B) = det(AB)：乘积关系恒成立。魔方中角块奇偶性 × 棱块奇偶性恒为偶（+1），所以不可能只交换两个角块而其他块不变"],demoHint:"尝试打乱魔方，观察中心块的位置是否始终不变",analogy:"类比：正交矩阵的行列式满足 det(A)·det(B) = det(AB)，这个乘积关系永远不变。魔方也有不变量：任何合法操作下，角块排列的奇偶性和棱块排列的奇偶性始终相同（两者乘积恒为偶），所以不可能只交换两个角块而其他一切不动。"},solve:{title:"复原方法：抵消法",subtitle:"零公式自主还原的数学框架",prev:"invariant",next:null,keyPoints:["复原魔方的本质：找到一系列操作的逆操作，按逆序执行","核心工具（初级）——逆序撤销：(A·B·C)⁻¹ = C⁻¹·B⁻¹·A⁻¹，后做的先撤销。Tutorial 角块部分在教这个","核心工具（中级）——共轭变换：P·A·P' 先搬到操作层→执行→搬回来。Tutorial 棱块部分在教这个","核心工具（高级）——交换子 [X, Y] = X·Y·X'·Y'：只产生 3-循环（通常影响 3 个角块和 3 个棱块），不破坏已复原部分。后续探索","下面的引导将带你亲手用逆序撤销和共轭变换复原角块和棱块"],matrices:[],demoHint:'点击下方"开始引导"按钮，进入交互式复原引导',analogy:'类比：复原魔方就像解方程组——每一步"消元"只处理一个未知数，不破坏已经求解的变量。'}},hR={intro:1,matrix:2,compose:3,inverse:4,invariant:5,solve:6},Zl={padding:"0.4rem 0.6rem",textAlign:"left",borderBottom:"2px solid var(--rule)",fontWeight:700},Kn={padding:"0.35rem 0.6rem",borderBottom:"1px solid var(--rule)"};function pR(){return g.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[g.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"方向指数编码"}),g.jsx("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"每个小块的位置用 3 个数字编码（H K L），取值为 1、0 或 -1："}),g.jsxs("table",{style:{width:"100%",fontSize:"0.82rem",borderCollapse:"collapse"},children:[g.jsx("thead",{children:g.jsxs("tr",{style:{background:"var(--bg2)"},children:[g.jsx("th",{style:Zl,children:"小块类型"}),g.jsx("th",{style:Zl,children:"方向指数"}),g.jsx("th",{style:Zl,children:"数量"}),g.jsx("th",{style:Zl,children:"说明"})]})}),g.jsxs("tbody",{children:[g.jsxs("tr",{children:[g.jsx("td",{style:Kn,children:"角块"}),g.jsx("td",{style:{...Kn,fontFamily:"monospace"},children:"(1, 1, 1)"}),g.jsx("td",{style:Kn,children:"8"}),g.jsx("td",{style:Kn,children:"3个面都有颜色，位于立方体角落"})]}),g.jsxs("tr",{children:[g.jsx("td",{style:Kn,children:"棱块"}),g.jsx("td",{style:{...Kn,fontFamily:"monospace"},children:"(1, 1, 0)"}),g.jsx("td",{style:Kn,children:"12"}),g.jsx("td",{style:Kn,children:"2个面有颜色，位于棱上"})]}),g.jsxs("tr",{children:[g.jsx("td",{style:Kn,children:"心块"}),g.jsx("td",{style:{...Kn,fontFamily:"monospace"},children:"(1, 0, 0)"}),g.jsx("td",{style:Kn,children:"6"}),g.jsx("td",{style:Kn,children:"1个面有颜色，位于面中心"})]})]})]}),g.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginTop:"0.6rem"},children:"1、0、-1 三个数排列组合共 27 种，去掉 (0,0,0) 中心点 = 26 个方块，一个不多一个不少"})]})}function av({options:r,explanation:e}){const[t,s]=z.useState(null);return g.jsxs("div",{children:[r.map((o,l)=>g.jsxs("button",{onClick:()=>s(l),style:{display:"block",width:"100%",textAlign:"left",padding:"0.4rem 0.8rem",marginBottom:"0.4rem",borderRadius:"6px",border:"1px solid var(--rule)",background:t===l?o.correct?"#dcfce7":"#fee2e2":"var(--bg)",fontSize:"0.82rem",cursor:"pointer"},children:[o.label,t===l&&g.jsx("span",{style:{marginLeft:"0.5rem"},children:o.correct?"✅":"❌"})]},l)),t!==null&&g.jsxs("p",{style:{marginTop:"0.6rem",padding:"0.6rem",background:r[t].correct?"#dcfce7":"#fef3c7",borderRadius:"6px",fontSize:"0.8rem"},children:[r[t].correct?"🎉 ":"💡 ",e]})]})}function mR({leftCubeRef:r,rightCubeRef:e}){const[t,s]=z.useState("R"),[o,l]=z.useState("U"),[u,d]=z.useState(null),[f,p]=z.useState(null),[m,v]=z.useState(!1),y=z.useCallback(()=>{var U,L;const E=ov(t),T=ov(o),S=Js(E,T),x=Js(T,E);d(S),p(x),v(!0),(U=r.current)==null||U.reset(),(L=e.current)==null||L.reset(),setTimeout(()=>{var b;(b=r.current)==null||b.executeMove(t),setTimeout(()=>{var k;return(k=r.current)==null?void 0:k.executeMove(o)},350),setTimeout(()=>{var k;(k=e.current)==null||k.executeMove(o),setTimeout(()=>{var N;return(N=e.current)==null?void 0:N.executeMove(t)},350)},1200)},500)},[t,o,r,e]),M=u&&f?uR(u,f):null;return g.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[g.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"交换律验证区"}),g.jsx("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"选择两个操作，左右两个魔方同时演示不同顺序 —— 看最终结果是否一致。"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap",marginBottom:"0.8rem"},children:[g.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600},children:"操作 ①"}),g.jsx("select",{value:t,onChange:E=>{s(E.target.value),v(!1)},style:{padding:"0.3rem 0.5rem",borderRadius:"6px",border:"1px solid var(--rule)",fontSize:"0.85rem",fontFamily:"monospace",background:"#fff"},children:sv.map(E=>g.jsx("option",{value:E,children:Of[E]},E))}),g.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600},children:"操作 ②"}),g.jsx("select",{value:o,onChange:E=>{l(E.target.value),v(!1)},style:{padding:"0.3rem 0.5rem",borderRadius:"6px",border:"1px solid var(--rule)",fontSize:"0.85rem",fontFamily:"monospace",background:"#fff"},children:sv.map(E=>g.jsx("option",{value:E,children:Of[E]},E))})]}),g.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem",marginBottom:"0.8rem"},onClick:y,children:"执行并对比"}),m&&u&&f&&g.jsxs("div",{children:[g.jsxs("div",{style:{marginBottom:"0.8rem",padding:"0.4rem 0.8rem",borderRadius:"6px",fontWeight:700,fontSize:"0.88rem",background:M?"#DCFCE7":"#FEE2E2",color:M?"#16A34A":"#DC2626"},children:["结果：",M?"相同 ✓（极少数情况）":"不同 ✗（绝大多数情况）"]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.8rem"},children:[g.jsxs("div",{style:{textAlign:"center"},children:[g.jsxs("p",{style:{fontSize:"0.72rem",color:"var(--muted)",marginBottom:"0.3rem"},children:["①→②：",t,"×",o]}),g.jsx(sa,{data:u})]}),g.jsxs("div",{style:{textAlign:"center"},children:[g.jsxs("p",{style:{fontSize:"0.72rem",color:"var(--muted)",marginBottom:"0.3rem"},children:["②→①：",o,"×",t]}),g.jsx(sa,{data:f})]})]})]})]})}function gR({cubeRef:r}){const e=["R","U","F","U'"],[t,s]=z.useState(e.length),[o,l]=z.useState(!1),[u,d]=z.useState(!1);z.useEffect(()=>{if(!o&&r.current){const v=setTimeout(()=>{var M;(M=r.current)==null||M.reset();let y=500;for(const E of e)setTimeout(()=>{var T;return(T=r.current)==null?void 0:T.executeMove(E)},y),y+=350;setTimeout(()=>{l(!0),s(e.length)},y)},600);return()=>clearTimeout(v)}},[o]);const f=z.useCallback(()=>{if(t<=0||!r.current)return;const v=t-1,y=e[v],M=y.endsWith("'")?y[0]:y+"'";r.current.undoMove(M);const E=v;s(E),E===0&&d(!0)},[t]),p=z.useCallback(()=>{var v;(v=r.current)==null||v.reset(),l(!1),d(!1)},[]),m=e.slice(0,t);return g.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[g.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"🔄 撤销演示"}),g.jsx("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:'魔方已执行了 4 步操作。点击"撤销一步"，观察逆操作逐步还原。'}),o&&g.jsx("div",{style:{marginBottom:"0.8rem",padding:"0.4rem 0.8rem",borderRadius:"6px",background:u?"#DCFCE7":"var(--bg2)",fontSize:"0.82rem"},children:u?g.jsx("span",{style:{fontWeight:700,color:"#16A34A"},children:"🎉 还原成功！这就是逆矩阵的力量"}):g.jsxs("span",{children:[g.jsx("strong",{children:"剩余操作："}),g.jsx("span",{style:{fontFamily:"monospace",color:"var(--accent)"},children:m.length>0?m.map(v=>Of[v]||v).join(" · "):"（空）"})]})}),g.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[g.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:f,disabled:!o||t<=0,children:"🔄 撤销一步"}),g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:p,children:"重置演示"})]})]})}function vR({cubeRef:r}){const[e,t]=z.useState(!1),[s,o]=z.useState(0),[l,u]=z.useState(!1),d=z.useCallback(()=>{u(!0)},[]),f=z.useCallback(()=>{var m;(m=r.current)==null||m.reset(),setTimeout(()=>{var v;return(v=r.current)==null?void 0:v.scramble(12)},300),t(!0),o(v=>v+1)},[]),p=z.useCallback(()=>{var m;(m=r.current)==null||m.reset(),t(!1)},[]);return g.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid var(--accent)"},children:[g.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"不变量观察器"}),g.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:['多次点击"随机打乱"并观察：无论怎么转，',g.jsx("strong",{children:"6 个中心块的相对位置始终不变"}),'—— 红对着橙，蓝对着绿，白对着黄。这就是魔方的"不变量"。']}),e&&s>0&&g.jsxs("div",{style:{marginBottom:"0.8rem",padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.82rem"},children:[g.jsxs("span",{style:{fontWeight:700,color:"#16A34A"},children:["已打乱 ",s," 次"]}),g.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.4rem"},children:"— 红橘相对、蓝绿相对、白黄相对，不变"})]}),g.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[g.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:f,children:"随机打乱"}),g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:p,children:"重置"}),g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",color:"#DC2626",borderColor:"#DC2626"},onClick:d,children:"非法状态"})]}),g.jsx("div",{style:{marginTop:"0.8rem",padding:"0.6rem 0.8rem",borderRadius:"6px",background:"#FEF3C7",borderLeft:"3px solid #F59E0B",fontSize:"0.8rem",color:"var(--ink2)"},children:"更深层的不变量：角块排列的奇偶性和棱块排列的奇偶性始终相同。因此不可能只交换两个角块而其他一切不动——这不是技术不够，是数学约束。"}),l&&g.jsxs("div",{style:{marginTop:"0.6rem",padding:"0.6rem 0.8rem",borderRadius:"6px",background:"#FEE2E2",fontSize:"0.82rem",color:"#DC2626"},children:["这是一个",g.jsx("strong",{children:"数学上不可能"}),"的状态！只交换两个角块违反了奇偶性守恒——即使你拆散魔方重新组装也无法通过合法转动达到。"]})]})}function _R({cubeRef:r}){const e=["R","U","R'","U'"],[t,s]=z.useState(0),[o,l]=z.useState(!1),[u,d]=z.useState(!1),f=z.useCallback(()=>{var v;if(o)return;(v=r.current)==null||v.reset(),s(0),d(!1),l(!0);let m=600;for(let y=0;y<e.length;y++)setTimeout(()=>{var M;(M=r.current)==null||M.executeMove(e[y]),s(y+1),y===e.length-1&&(d(!0),l(!1))},m),m+=1e3},[o]),p=z.useCallback(()=>{var m;(m=r.current)==null||m.reset(),s(0),d(!1),l(!1)},[]);return g.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid #8B5CF6"},children:[g.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"交换子演示 [X, Y] = X·Y·X'·Y'"}),g.jsx("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"点击播放交换子观察：R·U·R'·U' 只产生 3-循环（3 个角块和 3 个棱块各自轮换，其余不变）"}),g.jsx("div",{style:{display:"flex",gap:"0.3rem",marginBottom:"0.8rem"},children:e.map((m,v)=>g.jsx("div",{style:{flex:1,padding:"0.3rem",textAlign:"center",borderRadius:"4px",fontSize:"0.78rem",fontFamily:"monospace",background:t>v?"#EDE9FE":t===v&&o?"#FDE68A":"var(--bg2)",fontWeight:t>v?700:400,color:t>v?"#7C3AED":"var(--ink2)"},children:m},v))}),u&&g.jsx("div",{style:{marginBottom:"0.8rem",padding:"0.4rem 0.8rem",borderRadius:"6px",background:"#EDE9FE",fontSize:"0.82rem",color:"#7C3AED",fontWeight:600},children:"交换子完成！只产生了 3-循环（3 角块 + 3 棱块各自轮换）"}),g.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[g.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:f,disabled:o,children:o?"播放中...":"▶ 播放交换子"}),g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:p,children:"重置"})]})]})}function xR({cubeRef:r}){const[e,t]=z.useState("reverse"),s=[{key:"reverse",label:"逆序撤销",icon:"🔄",color:"#10B981"},{key:"conjugate",label:"共轭变换",icon:"🍚",color:"#F59E0B"},{key:"commutator",label:"交换子",icon:"⚡",color:"#EF4444"}];return g.jsxs("div",{className:"card",style:{padding:"0",overflow:"hidden"},children:[g.jsx("div",{style:{display:"flex",borderBottom:"2px solid var(--rule)"},children:s.map(o=>g.jsxs("button",{onClick:()=>t(o.key),style:{flex:1,padding:"0.5rem 0.3rem",fontSize:"0.78rem",fontWeight:e===o.key?700:400,borderBottom:e===o.key?`3px solid ${o.color}`:"3px solid transparent",background:e===o.key?"#fff":"var(--bg2)",color:e===o.key?o.color:"var(--ink2)",border:"none",cursor:"pointer",transition:"all 0.2s ease"},children:[o.icon," ",o.label]},o.key))}),g.jsxs("div",{style:{padding:"0.8rem 1rem"},children:[e==="reverse"&&g.jsx(dR,{cubeRef:r}),e==="conjugate"&&g.jsx(fR,{cubeRef:r}),e==="commutator"&&g.jsx(_R,{cubeRef:r})]})]})}function yR(){const{id:r}=Xx(),e=Rv(),t=r?Vd[r]:void 0,s=z.useRef(null),o=z.useRef(null),l=z.useRef(null);if(!t)return g.jsx("div",{className:"section",children:g.jsxs("div",{className:"container",style:{textAlign:"center",paddingTop:"3rem"},children:[g.jsx("h2",{style:{fontSize:"1.4rem",marginBottom:"0.8rem"},children:"章节未找到"}),g.jsxs("p",{style:{color:"var(--ink2)",marginBottom:"1.2rem"},children:["「",r,"」不是有效的章节编号。"]}),g.jsx(an,{to:"/",className:"btn btn-primary",children:"返回首页"})]})});const u=r==="compose"?[{label:"R 转动矩阵",data:Zn.R},{label:"U 转动矩阵",data:Zn.U},{label:"R × U =",data:Js(Zn.R,Zn.U)},{label:"U × R =",data:Js(Zn.U,Zn.R)}]:void 0,d=r==="inverse"?[{label:"R⁻¹ 逆矩阵（逆时针90°）",data:ra(Zn.R)},{label:"验证：R × R⁻¹ = I（单位矩阵）",data:Js(Zn.R,ra(Zn.R))},{label:"逆序法则：(R·U)⁻¹ = U⁻¹·R⁻¹ =",data:Js(ra(Zn.U),ra(Zn.R))}]:void 0,f=r==="compose"?u:r==="inverse"?d:t.matrices;return g.jsx(g.Fragment,{children:g.jsx("div",{className:"section",children:g.jsxs("div",{className:"container",children:[g.jsxs("h2",{style:{fontSize:"1.6rem",fontWeight:700,marginBottom:"0.3rem",borderLeft:`5px solid ${iv[r]}`,paddingLeft:"0.8rem"},children:["第 ",hR[r]," 节  ",t.title]}),g.jsx("p",{style:{fontSize:"0.95rem",color:"var(--ink2)",marginBottom:"1.5rem"},children:t.subtitle}),r==="solve"&&g.jsxs("div",{style:{marginBottom:"1.5rem",padding:"1.2rem 1.5rem",borderRadius:"12px",background:"linear-gradient(135deg, #1E1B4B 0%, #3B0764 40%, #7F1D1D 100%)",color:"#fff"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.8rem",marginBottom:"0.6rem"},children:[g.jsx("span",{style:{fontSize:"1.8rem"},children:"🏆"}),g.jsxs("div",{children:[g.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:800,margin:0,letterSpacing:"0.5px"},children:"终章挑战：把前面学的全部用上"}),g.jsx("p",{style:{fontSize:"0.82rem",margin:"0.2rem 0 0 0",opacity:.85},children:'这一节将串联全部知识点，从"看着公式还原"进化到"理解每一步为什么这样做"'})]})]}),g.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[{label:"初级 · 逆序撤销",color:"#10B981",icon:"🔄"},{label:"中级 · 共轭变换",color:"#F59E0B",icon:"🥪"},{label:"高级 · 交换子",color:"#EF4444",icon:"⚡"}].map(p=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",padding:"0.3rem 0.7rem",borderRadius:"20px",background:"rgba(255,255,255,0.15)",fontSize:"0.78rem",fontWeight:600,border:`1px solid ${p.color}40`},children:[g.jsx("span",{children:p.icon}),g.jsx("span",{children:p.label})]},p.label))})]}),g.jsxs("div",{className:"two-col",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[g.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem",color:"var(--accent)"},children:"本节要点"}),g.jsx("ul",{style:{paddingLeft:"1.2rem",fontSize:"0.85rem",color:"var(--ink2)",lineHeight:1.8},children:t.keyPoints.map((p,m)=>g.jsx("li",{style:{marginBottom:"0.4rem"},children:p},m))})]}),r==="intro"&&g.jsx(pR,{}),r==="compose"&&u&&g.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[g.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"真实转动矩阵：魔方面操作对应的数学表达"}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem",marginBottom:"0.6rem"},children:u.map((p,m)=>g.jsxs("div",{style:{textAlign:"center",padding:"0.5rem",background:"var(--bg2)",borderRadius:"8px"},children:[g.jsx("p",{style:{fontSize:"0.72rem",color:"var(--muted)",marginBottom:"0.3rem",fontWeight:600},children:p.label}),g.jsx(sa,{data:p.data})]},m))}),g.jsx("p",{style:{textAlign:"center",fontSize:"0.75rem",color:"var(--orange)",fontWeight:600},children:"⚠️ 两行结果不同！顺序很重要！"}),g.jsx("p",{style:{fontSize:"0.72rem",color:"var(--muted)",marginTop:"0.5rem",textAlign:"center"},children:"上排 = R×U，下排 = U×R —— 矩阵乘法不满足交换律"})]}),r==="inverse"&&d&&g.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[g.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"逆矩阵计算"}),d.map((p,m)=>g.jsxs("div",{style:{marginBottom:m<d.length-1?"1rem":0},children:[g.jsx("p",{style:{fontSize:"0.78rem",color:"var(--muted)",marginBottom:"0.4rem"},children:p.label}),g.jsx(sa,{data:p.data})]},m)),g.jsx("p",{style:{fontSize:"0.78rem",color:"var(--ink2)",marginTop:"0.6rem"},children:"也就是说：先拧R再拧U的撤销方法是——先撤销U（U⁻¹），再撤销R（R⁻¹），顺序反过来！"})]}),r!=="compose"&&r!=="inverse"&&f&&f.length>0&&g.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[g.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"数学演示"}),f.map((p,m)=>g.jsxs("div",{style:{marginBottom:m<f.length-1?"1rem":0},children:[g.jsx("p",{style:{fontSize:"0.78rem",color:"var(--muted)",marginBottom:"0.4rem"},children:p.label}),g.jsx(sa,{data:p.data})]},m)),r==="matrix"&&g.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--ink3)",marginTop:"0.5rem",fontStyle:"italic"},children:["※ 此处用 3×3 旋转矩阵做简化类比，描述单个方块坐标的变换。魔方操作实际上是对 20 个可动方块的整体置换，严谨数学框架见",g.jsx("a",{href:"#/archive",style:{color:"var(--accent)"},children:"数学档案馆"}),"。"]})]}),r==="solve"&&g.jsxs("div",{style:{marginBottom:"1rem"},children:[g.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem",color:"var(--accent)"},children:"复原工具箱：三个层次的数学工具"}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0.6rem"},children:[g.jsxs("div",{className:"card",style:{marginBottom:0,borderLeft:"4px solid #10B981",padding:"0.8rem 1rem"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.4rem"},children:[g.jsx("span",{style:{fontSize:"1rem"},children:"🔄"}),g.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"#10B981"},children:"初级"})]}),g.jsx("p",{style:{fontSize:"0.78rem",fontWeight:600,marginBottom:"0.3rem"},children:"逆序撤销"}),g.jsx("p",{style:{fontSize:"0.72rem",color:"var(--ink2)",lineHeight:1.5,marginBottom:0},children:"(A·B·C)⁻¹ = C⁻¹·B⁻¹·A⁻¹"}),g.jsx("p",{style:{fontSize:"0.68rem",color:"var(--muted)",lineHeight:1.4,marginTop:"0.2rem"},children:"后做的先撤销，Tutorial 角块在教这个"})]}),g.jsxs("div",{className:"card",style:{marginBottom:0,borderLeft:"4px solid #F59E0B",padding:"0.8rem 1rem"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.4rem"},children:[g.jsx("span",{style:{fontSize:"1rem"},children:"🥪"}),g.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"#F59E0B"},children:"中级"})]}),g.jsx("p",{style:{fontSize:"0.78rem",fontWeight:600,marginBottom:"0.3rem"},children:"共轭变换"}),g.jsx("p",{style:{fontSize:"0.72rem",color:"var(--ink2)",lineHeight:1.5,marginBottom:0},children:"P·A·P'：搬过去→执行→搬回来"}),g.jsx("p",{style:{fontSize:"0.68rem",color:"var(--muted)",lineHeight:1.4,marginTop:"0.2rem"},children:"精准手术式操作，Tutorial 棱块在教这个"})]}),g.jsxs("div",{className:"card",style:{marginBottom:0,borderLeft:"4px solid #EF4444",padding:"0.8rem 1rem"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.4rem"},children:[g.jsx("span",{style:{fontSize:"1rem"},children:"⚡"}),g.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"#EF4444"},children:"高级"})]}),g.jsx("p",{style:{fontSize:"0.78rem",fontWeight:600,marginBottom:"0.3rem"},children:"交换子"}),g.jsx("p",{style:{fontSize:"0.72rem",color:"var(--ink2)",lineHeight:1.5,marginBottom:0},children:"[X,Y] = X·Y·X'·Y'：3-循环"}),g.jsx("p",{style:{fontSize:"0.68rem",color:"var(--muted)",lineHeight:1.4,marginTop:"0.2rem"},children:"3-循环（3角块+3棱块），不破坏其他，后续探索"})]})]})]}),r==="solve"&&g.jsxs("div",{style:{marginBottom:"1rem",padding:"1rem 1.2rem",borderRadius:"12px",background:"linear-gradient(135deg, #FEF3C7 0%, #FEE2E2 100%)",border:"2px solid #F59E0B"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[g.jsx("span",{style:{fontSize:"1.2rem"},children:"🎯"}),g.jsx("span",{style:{fontSize:"0.9rem",fontWeight:700},children:"准备好了吗？开始引导复原"})]}),g.jsxs("p",{style:{fontSize:"0.78rem",color:"var(--ink2)",marginBottom:"0.8rem",lineHeight:1.5},children:["白色十字已就位，你将亲手用逆序撤销复原角块、用共轭变换复原棱块。",g.jsx("br",{}),"完整路线：底面十字 → 角块 → 中层棱块 → 顶面（后续扩展）"]}),g.jsxs("div",{style:{fontSize:"0.72rem",color:"var(--ink2)",marginBottom:"0.8rem",lineHeight:1.6},children:[g.jsx("div",{style:{marginBottom:"0.15rem"},children:"✅ 白色十字（直觉操作）"}),g.jsx("div",{style:{marginBottom:"0.15rem"},children:"✅ 白色角块 — 逆序列法则（R' D' R D）"}),g.jsx("div",{style:{marginBottom:"0.15rem",fontWeight:600},children:"▶ 中层棱块 — 共轭变换（U R U' R' U' F' U F）"}),g.jsx("div",{style:{color:"var(--muted)"},children:"⬜ 顶面十字 / 棱归位 / 角归位 / 翻黄角"})]}),g.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.9rem",width:"100%",padding:"0.7rem",fontWeight:700},onClick:()=>e("/tutorial"),children:"🚀 开始交互式复原引导"})]}),g.jsxs("div",{className:"analogy-note",children:[g.jsx("span",{style:{fontWeight:600,marginRight:"0.3rem"},children:"比喻理解"}),g.jsx("span",{children:t.analogy})]}),r==="compose"&&g.jsxs("div",{className:"card",style:{marginTop:"1rem",borderLeft:"4px solid var(--accent)"},children:[g.jsx("h3",{style:{fontSize:"0.85rem",fontWeight:700,marginBottom:"0.6rem"},children:"💡 自测一下"}),g.jsx("p",{style:{fontSize:"0.82rem",marginBottom:"0.6rem"},children:"如果先执行 R 再执行 F，对应的矩阵乘积是："}),g.jsx(av,{options:[{label:"A. R × F",correct:!0},{label:"B. F × R",correct:!1},{label:"C. R + F",correct:!1},{label:"D. R × F = F × R",correct:!1}],explanation:"先 R 后 F = R × F。矩阵乘法不满足交换律，R × F ≠ F × R。操作顺序决定矩阵乘积的顺序。"})]}),r==="inverse"&&g.jsxs("div",{className:"card",style:{marginTop:"1rem",borderLeft:"4px solid var(--accent)"},children:[g.jsx("h3",{style:{fontSize:"0.85rem",fontWeight:700,marginBottom:"0.6rem"},children:"💡 自测一下"}),g.jsx("p",{style:{fontSize:"0.82rem",marginBottom:"0.6rem"},children:"已知操作序列为 R → U → F，正确的逆序撤销序列是："}),g.jsx(av,{options:[{label:"A. R' → U' → F'",correct:!1},{label:"B. F' → U' → R'",correct:!0},{label:"C. R → U → F",correct:!1},{label:"D. F → U → R",correct:!1}],explanation:"逆序法则：(R·U·F)⁻¹ = F⁻¹·U⁻¹·R⁻¹。后做的先撤销——最后一步F最先撤销，第一步R最后撤销。就像先穿鞋后穿袜，脱的时候先脱鞋再脱袜。"})]})]}),g.jsxs("div",{children:[r==="compose"?g.jsxs(g.Fragment,{children:[g.jsxs("div",{style:{fontSize:"0.73rem",color:"var(--ink2)",marginBottom:"0.5rem",display:"flex",gap:"0.8rem",justifyContent:"center",background:"var(--bg2)",borderRadius:"6px",padding:"0.3rem 0.6rem"},children:[g.jsxs("span",{children:["🟥 ",g.jsx("strong",{children:"R"}),"=右面"]}),g.jsxs("span",{children:["🟩 ",g.jsx("strong",{children:"U"}),"=上面"]}),g.jsxs("span",{children:["🟦 ",g.jsx("strong",{children:"F"}),"=前面"]}),g.jsx("span",{style:{color:"var(--muted)"},children:"|"}),g.jsxs("span",{children:["带 ",g.jsx("strong",{children:"'"})," = 逆时针"]})]}),g.jsxs("div",{style:{display:"flex",gap:"0.6rem",marginBottom:"0.6rem"},children:[g.jsxs("div",{style:{flex:1,textAlign:"center",border:"1px solid var(--rule)",borderRadius:"var(--radius)",overflow:"hidden"},children:[g.jsx("div",{style:{height:"22px",lineHeight:"22px",fontSize:"11px",fontWeight:700,color:"#fff",background:"var(--accent)"},children:"先①后②"}),g.jsx("div",{style:{height:"240px"},children:g.jsx(Qs,{ref:o,disableStore:!0})})]}),g.jsxs("div",{style:{flex:1,textAlign:"center",border:"1px solid var(--rule)",borderRadius:"var(--radius)",overflow:"hidden"},children:[g.jsx("div",{style:{height:"22px",lineHeight:"22px",fontSize:"11px",fontWeight:700,color:"#fff",background:"var(--orange)"},children:"先②后①"}),g.jsx("div",{style:{height:"240px"},children:g.jsx(Qs,{ref:l,disableStore:!0})})]})]})]}):g.jsx(g.Fragment,{children:r==="solve"?g.jsxs(g.Fragment,{children:[g.jsxs("div",{style:{fontSize:"0.73rem",color:"var(--ink2)",marginBottom:"0.5rem",display:"flex",gap:"0.8rem",justifyContent:"center",background:"var(--bg2)",borderRadius:"6px",padding:"0.3rem 0.6rem"},children:[g.jsxs("span",{children:["🟥 ",g.jsx("strong",{children:"R"}),"=右面"]}),g.jsxs("span",{children:["🟩 ",g.jsx("strong",{children:"U"}),"=上面"]}),g.jsxs("span",{children:["🟦 ",g.jsx("strong",{children:"F"}),"=前面"]}),g.jsx("span",{style:{color:"var(--muted)"},children:"|"}),g.jsxs("span",{children:["带 ",g.jsx("strong",{children:"'"})," = 逆时针"]})]}),g.jsx("div",{style:{height:"320px",marginBottom:"0.8rem",borderRadius:"var(--radius)",overflow:"hidden",border:"1px solid var(--rule)"},children:g.jsx(Qs,{ref:s},r)}),g.jsx(xR,{cubeRef:s})]}):g.jsxs(g.Fragment,{children:[["intro","matrix","inverse","invariant"].includes(r)&&g.jsxs("div",{style:{fontSize:"0.73rem",color:"var(--ink2)",marginBottom:"0.5rem",display:"flex",gap:"0.8rem",justifyContent:"center",background:"var(--bg2)",borderRadius:"6px",padding:"0.3rem 0.6rem"},children:[g.jsxs("span",{children:["🟥 ",g.jsx("strong",{children:"R"}),"=右面"]}),g.jsxs("span",{children:["🟩 ",g.jsx("strong",{children:"U"}),"=上面"]}),g.jsxs("span",{children:["🟦 ",g.jsx("strong",{children:"F"}),"=前面"]}),g.jsx("span",{style:{color:"var(--muted)"},children:"|"}),g.jsxs("span",{children:["带 ",g.jsx("strong",{children:"\\'"})," = 逆时针"]})]}),g.jsx("div",{style:{height:"420px",marginBottom:"0.6rem",borderRadius:"var(--radius)",overflow:"hidden",border:"1px solid var(--rule)"},children:g.jsx(Qs,{ref:s},r)})]})}),r==="compose"&&g.jsx(mR,{leftCubeRef:o,rightCubeRef:l}),r==="compose"&&g.jsxs("div",{style:{marginTop:"0.8rem",padding:"0.6rem 0.8rem",borderRadius:"6px",background:"#EFF6FF",borderLeft:"3px solid #3B82F6",fontSize:"0.8rem",color:"var(--ink2)"},children:[g.jsx("strong",{children:"因果说明："}),"R 和 U 操作的顺序之所以影响结果，是因为旋转矩阵乘法不满足交换律。这在数学上等价于：两个旋转的合成结果取决于执行顺序——先绕 X 轴再绕 Y 轴，与先绕 Y 轴再绕 X 轴，得到不同的最终朝向。"]}),r==="inverse"&&g.jsx(gR,{cubeRef:s}),r==="invariant"&&g.jsx(vR,{cubeRef:s}),g.jsx("div",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.4rem",lineHeight:1.5},children:t.demoHint}),g.jsx("div",{style:{textAlign:"right"},children:g.jsx(an,{to:r==="solve"?"/tutorial":"/playground",state:r==="solve"?void 0:{},style:{fontSize:"0.82rem",color:"var(--accent)",textDecoration:"underline"},children:r==="solve"?"🎯 开始引导：复原第一个角块 →":"打开实操训练（含计时/撤销）→"})})]})]}),rv[r]&&g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--bg2)",borderRadius:"8px",borderLeft:`4px solid ${iv[r]}`},children:[g.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--muted)"},children:"本节要点"}),rv[r].map((p,m)=>g.jsx("span",{style:{fontSize:"0.78rem",color:"var(--ink2)",padding:"0.15rem 0.5rem",borderRadius:"4px",background:"#fff"},children:p},m))]}),g.jsxs("div",{className:"chapter-nav",children:[t.prev?g.jsxs(an,{to:`/chapter/${t.prev}`,className:"btn btn-outline",children:["← 上一节：",Vd[t.prev].title.split("=")[0].trim()]}):g.jsx("span",{}),t.next?g.jsxs(an,{to:`/chapter/${t.next}`,className:"btn btn-primary",children:["下一节：",Vd[t.next].title.split("=")[0].trim()," →"]}):g.jsx(an,{to:"/playground",state:{fromChapter:"solve"},className:"btn btn-primary",children:"去实操训练 →"})]})]})})})}const Gd={teach:{label:"教学模式",desc:'每步操作实时显示对应旋转矩阵，帮助理解"转动=矩阵变换"'},practice:{label:"练习模式",desc:"记录操作历史并提供提示，适合独立尝试复原"},challenge:{label:"挑战模式",desc:"隐藏一切提示和历史，纯靠记忆和推理复原"}};function SR(){var ie;const r=z.useRef(null),e=Ri(G=>G.history),s=(ie=Pi().state)==null?void 0:ie.fromChapter,[o,l]=z.useState("teach"),[u,d]=z.useState(0),[f,p]=z.useState(!1),m=z.useRef(null),[v,y]=z.useState(!1),[M,E]=z.useState(!1),T=z.useRef(0),[S,x]=z.useState(!0),[U,L]=z.useState(null),b=z.useRef(!1),k=z.useCallback(()=>{f||(p(!0),b.current||(d(0),b.current=!0),m.current=setInterval(()=>{d(G=>G+1)},1e3))},[f]),N=z.useCallback(()=>{p(!1),m.current&&(clearInterval(m.current),m.current=null)},[]),F=()=>{var G;(G=r.current)==null||G.scramble(20),E(!0),y(!1),b.current=!1,k()},Y=()=>{var G;(G=r.current)==null||G.reset(),E(!1),y(!1),N(),d(0),b.current=!1},P=G=>{var B;const J=((B={x:{1:"R",[-1]:"L"},y:{1:"U",[-1]:"D"},z:{1:"F",[-1]:"B"}}[G.axis])==null?void 0:B[G.layer])??G.axis;return G.direction===1?J:J+"'"},C=()=>{var B;const G=Ri.getState();if(G.history.length===0)return;const X=G.history[G.history.length-1],J=P({...X,direction:X.direction*-1});(B=r.current)==null||B.undoMove(J),G.undo()},V=()=>{const G=Ri.getState();if(G.history.length===0){L('魔方已是还原状态，试试先点击"打乱"按钮。');return}const X=G.history[G.history.length-1],J={...X,direction:X.direction*-1},B=P(J);L(`提示：试试执行 ${B}（撤销最后一步操作）。核心思路——后做的先撤销。`)},fe=G=>{const X=Math.floor(G/60),J=G%60;return`${String(X).padStart(2,"0")}:${String(J).padStart(2,"0")}`};z.useEffect(()=>{if(!M||e.length===0)return;if(e.length<=T.current){T.current=e.length;return}T.current=e.length;const{cubies:G}=Ri.getState();Sn(),m0(G)&&(y(!0),N())},[e,M,N]);const W=e.map(G=>{const X={x:"R",y:"U",z:"F"},J=G.direction===1?"":"'";return`${X[G.axis]||G.axis}${J}`}).join(" → ");return g.jsxs(g.Fragment,{children:[s&&g.jsxs("div",{style:{maxWidth:"860px",margin:"0 auto 1rem",padding:"0.6rem 1rem",borderRadius:"8px",background:"#FEF9C3",border:"1px solid #FDE047",fontSize:"0.8rem"},children:["📖 你从",g.jsxs("span",{style:{fontWeight:700},children:["第",s==="solve"?"6":s,"节"]}),"跳转过来，建议先把上方第二章～第五章过一遍：",s==="solve"?" 逆矩阵+抵消法 → ":" ",g.jsx(an,{to:"/chapter/compose",style:{fontWeight:600,textDecoration:"underline",color:"var(--accent)"},children:"第3章：矩阵乘法/交换律"})," | ",g.jsx(an,{to:"/chapter/inverse",style:{fontWeight:600,textDecoration:"underline",color:"var(--accent)"},children:"第4章：逆矩阵/逆序法则"})]}),g.jsx("div",{className:"section",children:g.jsxs("div",{className:"container",children:[g.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"虚拟魔方实操厅"}),g.jsx("div",{style:{display:"flex",gap:"0.4rem",marginBottom:"0.8rem",flexWrap:"wrap"},children:Object.keys(Gd).map(G=>g.jsx("button",{className:o===G?"btn btn-primary":"btn btn-outline",style:{fontSize:"0.8rem",padding:"0.4rem 0.8rem"},onClick:()=>l(G),children:Gd[G].label},G))}),g.jsx("p",{style:{fontSize:"0.82rem",color:"var(--ink2)",marginBottom:"1.2rem"},children:Gd[o].desc}),S&&g.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.6rem",padding:"0.7rem 1rem",marginBottom:"1rem",background:"linear-gradient(135deg, #EFF6FF, #DBEAFE)",borderRadius:"8px",border:"1px solid #BFDBFE"},children:[g.jsx("span",{style:{fontSize:"1.1rem"},children:"👋"}),g.jsxs("div",{style:{flex:1,fontSize:"0.8rem",color:"var(--ink2)"},children:[g.jsx("strong",{children:"欢迎来到实操厅！"}),g.jsxs("div",{style:{marginTop:"0.3rem"},children:["① 点击「打乱」按钮随机打乱魔方 → ② 用",g.jsx("strong",{children:"左键"}),"点击魔方面 = 逆时针，",g.jsx("strong",{children:"右键"})," = 顺时针 → ③ 目标：让每面恢复同色。可随时「撤销」或「重置」。"]})]}),g.jsx("button",{onClick:()=>x(!1),style:{background:"none",border:"none",cursor:"pointer",fontSize:"1rem",color:"var(--muted)",padding:"0"},children:"✕"})]}),g.jsxs("div",{className:"two-col",children:[g.jsx("div",{style:{minHeight:"460px",display:"flex",flexDirection:"column"},children:g.jsx(Qs,{ref:r})}),g.jsxs("div",{children:[g.jsxs("div",{style:{display:"flex",gap:"0.4rem",marginBottom:"1rem",flexWrap:"wrap"},children:[g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem"},onClick:F,children:"打乱"}),g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem"},onClick:Y,children:"重置"}),g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem",opacity:e.length===0?.4:1},onClick:C,disabled:e.length===0,children:"撤销"}),g.jsxs("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem"},onClick:f?N:k,children:[f?fe(u):"计时"," ",f?"||":""]}),o==="practice"&&g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem"},onClick:V,children:"💡 提示"})]}),U&&g.jsx("div",{style:{padding:"0.5rem 0.8rem",marginBottom:"0.8rem",background:"#FEF3C7",borderRadius:"6px",fontSize:"0.8rem",color:"var(--ink2)",borderLeft:"3px solid #F59E0B"},children:U}),o!=="challenge"&&g.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[g.jsxs("h3",{style:{fontSize:"0.85rem",marginBottom:"0.5rem"},children:["操作历史 (",e.length," 步)"]}),e.length===0?g.jsx("p",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:'左键点击面 = 逆时针，右键点击面 = 顺时针，或点击"打乱"'}):g.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.78rem",color:"var(--accent)",maxHeight:"150px",overflow:"auto",lineHeight:1.6,wordBreak:"break-all"},children:W})]}),o==="teach"&&e.length>0&&g.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid #8B5CF6"},children:[g.jsx("h3",{style:{fontSize:"0.85rem",marginBottom:"0.5rem"},children:"矩阵解读"}),(()=>{const G=e[e.length-1],J={R:[[1,0,0],[0,0,-1],[0,1,0]],L:[[1,0,0],[0,0,1],[0,-1,0]],U:[[0,0,-1],[0,1,0],[1,0,0]],D:[[0,0,1],[0,1,0],[-1,0,0]],F:[[0,1,0],[1,0,0],[0,0,1]],B:[[0,-1,0],[-1,0,0],[0,0,1]]}[G.notation.replace("'","")]||[[1,0,0],[0,1,0],[0,0,1]],B=G.notation.includes("'");return g.jsxs("div",{children:[g.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.5rem"},children:["最后一步 ",g.jsx("strong",{style:{fontFamily:"monospace"},children:G.notation}),B?"（逆时针）= 矩阵的逆":"（顺时针）"]}),g.jsxs("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",background:"#F5F3FF",padding:"0.5rem 0.8rem",borderRadius:"6px",marginBottom:"0.5rem"},children:[g.jsxs("div",{children:["[",J[0].map(se=>(B?se===-1?" 1":se===1?"-1":" 0":(se<0?" ":"  ")+se).padStart(3)).join(","),"]"]}),g.jsxs("div",{children:["[",J[1].map(se=>(B?se===-1?" 1":se===1?"-1":" 0":(se<0?" ":"  ")+se).padStart(3)).join(","),"]"]}),g.jsxs("div",{children:["[",J[2].map(se=>(B?se===-1?" 1":se===1?"-1":" 0":(se<0?" ":"  ")+se).padStart(3)).join(","),"]"]})]}),g.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)"},children:B?"逆时针 = 顺时针矩阵的转置（正交矩阵性质：R⁻¹ = Rᵀ）":"这个矩阵将右层方块绕 X 轴旋转 90°"})]})})()]}),o==="teach"&&g.jsx("div",{className:"analogy-note",children:g.jsx("span",{children:'教学模式：每步操作都会显示对应的旋转矩阵。配合第2节的内容理解"转动=矩阵变换"。'})}),o==="practice"&&g.jsx("div",{className:"analogy-note",children:g.jsx("span",{children:"练习模式：记录你的操作并提供💡提示。尝试独立复原，卡住时再求助。"})}),o==="challenge"&&g.jsx("div",{className:"analogy-note",style:{borderLeftColor:"var(--orange)"},children:g.jsx("span",{children:"挑战模式：不依赖操作历史，尝试凭记忆推导还原步骤"})})]})]}),g.jsxs("div",{style:{marginTop:"2rem",padding:"1rem 1.2rem",background:"var(--bg2)",borderRadius:"var(--radius)",fontSize:"0.83rem",color:"var(--ink2)",borderLeft:"3px solid var(--accent)"},children:[g.jsx("strong",{children:"交互说明："}),"鼠标左键点击面 = 逆时针旋转  |  鼠标右键点击面 = 顺时针旋转  |  空白处拖拽 = 旋转视角  |  滚轮 = 缩放"]}),v&&g.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.45)"},children:g.jsxs("div",{style:{background:"#fff",borderRadius:"16px",padding:"2rem 2.5rem",textAlign:"center",maxWidth:"380px",width:"90%",boxShadow:"0 16px 48px rgba(0,0,0,0.2)"},children:[g.jsx("div",{style:{fontSize:"3rem",marginBottom:"0.5rem"},children:"🎉"}),g.jsx("h3",{style:{fontSize:"1.3rem",fontWeight:700,marginBottom:"0.4rem"},children:"还原成功！"}),g.jsxs("p",{style:{fontSize:"0.9rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["你使用了  ",e.length,"  步操作将魔方还原！",e.length<=22&&g.jsx("span",{style:{display:"block",marginTop:"0.3rem",fontWeight:600,color:"var(--accent)"},children:"🌟 步数 ≤ 22，非常高效！"}),e.length>22&&e.length<=30&&g.jsx("span",{style:{display:"block",marginTop:"0.3rem",fontWeight:600,color:"var(--green)"},children:"👍 不错！继续优化步数"})]}),g.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--muted)",marginBottom:"1.2rem"},children:["用时 ",fe(u)]}),g.jsx("button",{className:"btn btn-primary",onClick:()=>y(!1),style:{width:"100%"},children:"继续挑战"})]})})]})})]})}const MR=[{id:"boundary",title:"类比与真实的边界",body:g.jsxs(g.Fragment,{children:[g.jsx("p",{children:"本站用线性代数做类比科普，帮助理解魔方变换的行为逻辑。但需要明确以下几点："}),g.jsxs("ul",{style:{paddingLeft:"1.2rem",marginTop:"0.5rem"},children:[g.jsxs("li",{children:["✅ 魔方操作确实对应矩阵运算中的一些性质：",g.jsx("strong",{children:"封闭性、结合律、单位元、逆元、非交换性"})]}),g.jsxs("li",{children:["❌ 魔方不是线性空间：",g.jsx("strong",{children:"没有向量加法、没有数乘运算"})]}),g.jsxs("li",{children:["🎯 魔方的严谨数学本质是",g.jsx("strong",{children:"置换群（鲁比克群）"}),"，其元素是贴纸位置的置换，而非欧几里得空间中的旋转"]})]}),g.jsx("p",{style:{marginTop:"0.5rem"},children:'本站的"向量""矩阵"等概念均用于类比解释，与严谨线性代数中的定义有所不同。为方便初学者建立直觉，我们用熟悉的线代语言搭建理解桥梁。'})]})},{id:"permutation",title:"置换群基础",body:g.jsxs(g.Fragment,{children:[g.jsxs("p",{children:["魔方的每个状态是一个",g.jsx("strong",{children:"置换"}),"——把每个贴纸从原位置移到了新位置。"]}),g.jsxs("ul",{style:{paddingLeft:"1.2rem",marginTop:"0.5rem"},children:[g.jsxs("li",{children:[g.jsx("strong",{children:"置换的循环："}),"如果把若干方块依次换位并形成一个闭合的圈，就叫做循环。比如三个角块轮换一圈，就是一个3-循环"]}),g.jsxs("li",{children:[g.jsx("strong",{children:"为什么不能单独交换两个块："}),'因为每次转动总是偶数次两两交换，就像你不可能通过"每步走两格"来只移动一格']}),g.jsxs("li",{children:[g.jsx("strong",{children:"角块朝向的约束："}),"所有角块的扭转角度之和必须是360°的倍数——这也是一个隐藏的规则"]})]})]})},{id:"deep",title:"深度数学结论",body:g.jsx(g.Fragment,{children:g.jsxs("ul",{style:{paddingLeft:"1.2rem"},children:[g.jsxs("li",{children:[g.jsx("strong",{children:"总状态数"}),"：魔方共有 43,252,003,274,489,856,000 种可能状态（约4.3×10¹⁹）。这个数字通过群论推导得出，不是枚举出来的。"]}),g.jsxs("li",{style:{marginTop:"0.5rem"},children:[g.jsx("strong",{children:"上帝之数 = 20"}),"：任何打乱的魔方都可以在",g.jsx("strong",{children:"20步以内"}),"复原。2010年通过计算机穷举搜索证实。"]}),g.jsxs("li",{style:{marginTop:"0.5rem"},children:[g.jsx("strong",{children:"子群与共轭类"}),"：魔方群具有丰富的子群结构，CFOP等速拧方法本质上就是在不同子群之间切换。"]})]})})},{id:"resources",title:"拓展资源",body:g.jsx(g.Fragment,{children:g.jsxs("ul",{style:{paddingLeft:"1.2rem"},children:[g.jsxs("li",{children:["📖 ",g.jsx("em",{children:"群论入门"})," — J.S. Milne（免费在线教材，英文）"]}),g.jsxs("li",{children:["🎥 B站搜索 ",g.jsx("em",{children:'"魔方 置换群"'})," — 多位UP主有通俗讲解"]}),g.jsxs("li",{children:["📊 ",g.jsx("em",{children:"魔方数学"}),` — Wikipedia "Rubik's Cube group"`]}),g.jsxs("li",{children:["🎬 YouTube ",g.jsx("em",{children:`"How to Solve a Rubik's Cube with Group Theory"`})," — 适合初学者的群论入门视频"]})]})})}];function ER(){const[r,e]=z.useState(null);return g.jsx(g.Fragment,{children:g.jsx("div",{className:"section",children:g.jsxs("div",{className:"container",style:{maxWidth:"860px",margin:"0 auto"},children:[g.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1.5rem"},children:"📚 进阶数学档案馆"}),g.jsx("div",{className:"accordion",children:MR.map(t=>g.jsxs("div",{children:[g.jsxs("button",{className:`accordion-header ${r===t.id?"open":""}`,onClick:()=>e(r===t.id?null:t.id),children:[t.title,g.jsx("span",{className:`accordion-arrow ${r===t.id?"open":""}`,children:"▼"})]}),r===t.id&&g.jsx("div",{className:"accordion-body",children:t.body})]},t.id))}),g.jsx("div",{style:{marginTop:"2rem"},children:g.jsx(an,{to:"/",className:"btn btn-outline",children:"← 返回首页"})})]})})})}const lv=[{axis:"y",layer:-1,direction:-1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:-1,direction:1},{axis:"x",layer:1,direction:1}],Ql=[{axis:"x",layer:1,direction:-1},{axis:"y",layer:-1,direction:-1},{axis:"x",layer:1,direction:1},{axis:"y",layer:-1,direction:1}],TR=[{notation:"R'",text:"打开右面空间，准备接收角块"},{notation:"D'",text:"移动底层，将目标位置对准角块"},{notation:"R",text:"角块进入正确位置"},{notation:"D",text:"恢复底层，角块归位完成"}],cv=[{axis:"z",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"z",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1}],Jl=[{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"z",layer:1,direction:-1},{axis:"y",layer:1,direction:1},{axis:"z",layer:1,direction:1}],wR=[{notation:"U",text:"将顶层目标棱块移到右前准备位置"},{notation:"R",text:"打开右侧面，为棱块创造中层入口"},{notation:"U'",text:"沿顶层将棱块推入右侧开口"},{notation:"R'",text:"关闭右侧面，棱块被锁定到中层"},{notation:"U'",text:"恢复顶层位置"},{notation:"F'",text:"打开前面，为朝向调整做准备"},{notation:"U",text:"调整顶层，棱块朝向修正"},{notation:"F",text:"关闭前面，棱块完全归位"}];function Jr(r){var s;const t=((s={x:{1:"R","-1":"L"},y:{1:"U","-1":"D"},z:{1:"F","-1":"B"}}[r.axis])==null?void 0:s[String(r.layer)])??r.axis.toUpperCase();return r.direction===1?t:t+"'"}function RR(r){return r==="cross"?{step:1,total:3,name:"白色十字"}:r==="corner-intro"||r==="corner-guided"||r==="corner-practice"||r==="corner-done"?{step:2,total:3,name:"白色角块"}:r==="edge-intro"||r==="edge-guided"||r==="edge-practice"?{step:3,total:3,name:"中层棱块"}:{step:3,total:3,name:"全部完成"}}function AR(r){return r==="corner-intro"||r==="corner-guided"||r==="corner-practice"||r==="corner-done"}function CR(r){return r==="edge-intro"||r==="edge-guided"||r==="edge-practice"}function bR(){const r=z.useRef(null),[e,t]=z.useState("cross"),[s,o]=z.useState(-1),[l,u]=z.useState(!1),[d,f]=z.useState(!1),[p,m]=z.useState(!1),[v,y]=z.useState([]),[M,E]=z.useState(!1),[T,S]=z.useState(0),x=Ri(k=>k.history),U=Ri(k=>k.cubies),L=Ri(k=>k.reset);z.useEffect(()=>{if(l||!r.current)return;const k=setTimeout(()=>{var N;(N=r.current)==null||N.reset(),u(!0)},600);return()=>clearTimeout(k)},[l]),z.useEffect(()=>{let k=null;if(AR(e)&&e!=="corner-done"?k=lv:CR(e)&&(k=cv),!k||!r.current)return;L(),r.current.reset(),y([]),f(!1),E(!1),o(-1);let N=200;for(const F of k)setTimeout(()=>{var Y;return(Y=r.current)==null?void 0:Y.executeMove(Jr(F))},N),N+=350;e==="corner-guided"||e==="edge-guided"?setTimeout(()=>o(0),N+300):(e==="corner-practice"||e==="edge-practice")&&setTimeout(()=>E(!0),N)},[e,L,T]),z.useEffect(()=>{let k=null;if(e==="corner-guided"?k=Ql:e==="edge-guided"&&(k=Jl),!k||s<0||s>=k.length)return;const N=setTimeout(()=>{var F;(F=r.current)==null||F.executeMove(Jr(k[s]))},500);return()=>clearTimeout(N)},[s,e]),z.useEffect(()=>{if(!M||d||e!=="corner-practice"&&e!=="edge-practice")return;const N=(e==="corner-practice"?lv:cv).length,F=x.slice(N);y(F.map(Jr)),F.length>0&&m0(U)&&(f(!0),m(!0),setTimeout(()=>t(e==="corner-practice"?"corner-done":"done"),600))},[U,x,e,d,M]);const b=RR(e);return g.jsxs("div",{style:{background:"var(--bg)",paddingBottom:"2rem"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.6rem 1.5rem",borderBottom:"1px solid var(--rule)",background:"#fff"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[g.jsx(an,{to:"/chapter/solve",style:{fontSize:"0.85rem",color:"var(--ink2)",textDecoration:"none"},children:"← 返回第6节"}),g.jsx("span",{style:{fontWeight:700},children:"复原引导"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[[1,2,3].map(k=>g.jsx("div",{title:["白色十字","白色角块","中层棱块"][k-1],style:{width:"10px",height:"10px",borderRadius:"50%",background:k<=b.step?"var(--accent)":"var(--rule)",transition:"background 0.3s ease"}},k)),g.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--muted)",marginLeft:"0.3rem"},children:["步骤 ",b.step,"/",b.total]})]})]}),g.jsxs("div",{style:{display:"flex",gap:"1.5rem",padding:"1.5rem",maxWidth:"1100px",margin:"0 auto",alignItems:"flex-start"},children:[g.jsx("div",{style:{flex:1,minWidth:0},children:g.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[g.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,marginBottom:"0.3rem"},children:b.name}),e!=="cross"&&e!=="done"&&g.jsx("div",{style:{display:"flex",gap:"0.4rem",marginBottom:"1rem"},children:[{k:"intro",label:"介绍"},{k:"guided",label:"引导"},{k:"practice",label:"实操"},{k:"done",label:"完成"}].map(k=>{const N=e===`corner-${k.k}`||e===`edge-${k.k}`;return g.jsx("span",{style:{padding:"0.15rem 0.6rem",borderRadius:"999px",fontSize:"0.7rem",fontWeight:N?700:400,background:N?"var(--accent-l)":"var(--bg2)",color:N?"var(--accent-d)":"var(--muted)"},children:k.label},k.k)})}),e==="cross"&&g.jsxs(g.Fragment,{children:[g.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["复原魔方的第一步是完成",g.jsx("strong",{children:"白色十字"}),"—— 让白色中心块四周的四个白色棱块全部归位。"]}),g.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["这一步",g.jsx("strong",{children:"不需要记公式"}),"——你只要通过直觉把白色棱块逐个移到正确位置即可。 右侧魔方已处在白色十字完成的状态。"]}),g.jsxs("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontSize:"0.8rem",color:"var(--accent-d)"},children:[g.jsx("strong",{children:"概念对应"}),'：十字等同于在三维空间中确定了坐标轴的"基准方向"—— 白色=底、黄色=顶、红色=前、橙色=后、蓝色=右、绿色=左。 这六个方向构成了魔方的',g.jsx("strong",{children:"方向指数坐标系"}),"（第1节内容）。"]}),g.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>t("corner-intro"),children:"下一步：复原角块 →"})]}),e==="corner-intro"&&g.jsxs(g.Fragment,{children:[g.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"白色十字已完成。接下来只剩最后一个角块需要归位。"}),g.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["我们将使用下面的操作——它是",g.jsx("strong",{children:"逆序列法则"}),"的直接应用："]}),g.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontFamily:"monospace",fontSize:"1rem",fontWeight:700,textAlign:"center",color:"var(--accent-d)"},children:Ql.map(Jr).join(" → ")}),g.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"1rem"},children:["注意看初始状态和最终状态——这四步操作打乱时用了什么，解决时就按",g.jsx("strong",{children:"相反顺序"}),"逆向执行， 这就是逆序列法则：(A·B·C·D)⁻¹ = D⁻¹·C⁻¹·B⁻¹·A⁻¹，后做的先撤销。"]}),g.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>t("corner-guided"),children:"开始引导 →"})]}),e==="corner-guided"&&g.jsxs(g.Fragment,{children:[g.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"1rem"},children:"魔方已回到初始状态。点击「下一步」观看每一步的效果："}),TR.map((k,N)=>g.jsxs("div",{style:{padding:"0.5rem 0.8rem",marginBottom:"0.5rem",borderRadius:"6px",background:N===s?"var(--accent-l)":"var(--bg2)",borderLeft:"3px solid "+(N===s?"var(--accent)":"transparent")},children:[g.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600},children:k.notation}),g.jsx("span",{style:{fontSize:"0.78rem",color:"var(--ink2)",marginLeft:"0.6rem"},children:k.text})]},N)),s>=Ql.length?g.jsxs("div",{style:{marginTop:"1rem"},children:[g.jsx("p",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--green)",marginBottom:"0.8rem"},children:"✅ 角块已归位！接下来你亲手试试。"}),g.jsx("button",{className:"btn btn-primary",onClick:()=>t("corner-practice"),children:"🎯 进入实操"})]}):g.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[g.jsx("button",{className:"btn btn-outline",onClick:()=>o(k=>k+1),children:s===-1?"开始演示":"下一步 →"}),g.jsx("button",{className:"btn btn-outline",onClick:()=>t("corner-practice"),children:"跳过引导"})]})]}),e==="corner-practice"&&g.jsxs(g.Fragment,{children:[g.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"魔方已回到初始状态。请在右侧魔方上执行以下操作："}),g.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontFamily:"monospace",fontSize:"1rem",fontWeight:700,textAlign:"center",color:"var(--accent-d)"},children:Ql.map(Jr).join(" → ")}),g.jsxs("div",{style:{marginBottom:"1rem"},children:[g.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.4rem"},children:"你已执行："}),g.jsx("div",{style:{padding:"0.4rem 0.8rem",borderRadius:"6px",background:"var(--bg2)",fontFamily:"monospace",fontSize:"0.85rem",color:v.length>0?"var(--accent)":"var(--muted)"},children:v.length>0?v.join(" → "):"等待操作…"})]}),g.jsx("button",{className:"btn btn-outline",style:{width:"100%"},onClick:()=>S(k=>k+1),children:"重置重试"})]}),e==="corner-done"&&g.jsxs(g.Fragment,{children:[p&&g.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem"},children:[g.jsx("span",{style:{fontSize:"3rem"},children:"⭐"}),g.jsx("p",{style:{fontSize:"1rem",fontWeight:700,color:"var(--accent)",marginTop:"0.5rem"},children:"角块归位完成！"})]}),g.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"你刚用逆序列法则（R' D' R D）成功归位了一个角块。 这正好对应第4节的核心思想——把打乱步骤反过来执行，后做的先撤销。"}),g.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"1rem"},children:["接下来难度升级：复原中层棱块，这次会用到",g.jsx("strong",{children:"组合操作"}),"—— 前后两段各使用一次共轭变换（P·A·P'）：先腾出空间，再塞入棱块。"]}),g.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>t("edge-intro"),children:"下一步：复原中层棱块 →"})]}),e==="edge-intro"&&g.jsxs(g.Fragment,{children:[g.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["白色面和底层角块已全部完成。 现在要处理",g.jsx("strong",{children:"中层棱块"}),"——位于魔方中层（第二层）的四个棱块。"]}),g.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"右侧魔方已打乱：白色底完好，但有一个中层棱块被移到了顶层。 我们用下面的公式把它送回正确位置："}),g.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontFamily:"monospace",fontSize:"1rem",fontWeight:700,textAlign:"center",color:"var(--accent-d)"},children:Jl.map(Jr).join(" → ")}),g.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"1rem"},children:["这是一个",g.jsx("strong",{children:"组合操作"}),`：前后两段各使用一次共轭变换（P·A·P'）。 前半段 U R U' R' 把棱块从顶层移到右层（P=U, A=R, P'=U'·R'）， 后半段 U' F' U F 把棱块从右层推入中层（P=U', A=F', P'=U·F）。 结构是"打开→放入→关好"。`]}),g.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>t("edge-guided"),children:"开始引导 →"})]}),e==="edge-guided"&&g.jsxs(g.Fragment,{children:[g.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.6rem"},children:"点击「下一步」观看每一步的效果："}),wR.map((k,N)=>g.jsxs("div",{style:{padding:"0.4rem 0.6rem",marginBottom:"0.35rem",borderRadius:"6px",background:N===s?"var(--accent-l)":"var(--bg2)",borderLeft:"3px solid "+(N===s?"var(--accent)":"transparent")},children:[g.jsx("span",{style:{fontSize:"0.82rem",fontWeight:600},children:k.notation}),g.jsx("span",{style:{fontSize:"0.75rem",color:"var(--ink2)",marginLeft:"0.5rem"},children:k.text})]},N)),s>=Jl.length?g.jsxs("div",{style:{marginTop:"1rem"},children:[g.jsx("p",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--green)",marginBottom:"0.8rem"},children:"✅ 棱块已归位！现在你亲手试试。"}),g.jsx("button",{className:"btn btn-primary",onClick:()=>t("edge-practice"),children:"🎯 进入实操"})]}):g.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[g.jsx("button",{className:"btn btn-outline",onClick:()=>o(k=>k+1),children:s===-1?"开始演示":"下一步 →"}),g.jsx("button",{className:"btn btn-outline",onClick:()=>t("edge-practice"),children:"跳过引导"})]})]}),e==="edge-practice"&&g.jsxs(g.Fragment,{children:[g.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"魔方已回到初始状态。请在右侧魔方上执行以下操作："}),g.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontFamily:"monospace",fontSize:"0.9rem",fontWeight:700,textAlign:"center",color:"var(--accent-d)"},children:Jl.map(Jr).join(" → ")}),g.jsxs("div",{style:{marginBottom:"1rem"},children:[g.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.4rem"},children:"你已执行："}),g.jsx("div",{style:{padding:"0.4rem 0.8rem",borderRadius:"6px",background:"var(--bg2)",fontFamily:"monospace",fontSize:"0.82rem",color:v.length>0?"var(--accent)":"var(--muted)"},children:v.length>0?v.join(" → "):"等待操作…"})]}),g.jsx("button",{className:"btn btn-outline",style:{width:"100%"},onClick:()=>S(k=>k+1),children:"重置重试"})]}),e==="done"&&g.jsxs(g.Fragment,{children:[p&&g.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem"},children:[g.jsx("span",{style:{fontSize:"3rem"},children:"🎉"}),g.jsx("p",{style:{fontSize:"1.2rem",fontWeight:700,color:"var(--accent)",marginTop:"0.5rem"},children:"全部完成！"})]}),g.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.5rem"},children:"你成功完成了三步骤：白色十字 → 白色角块（逆序列法则） → 中层棱块（组合操作/共轭变换）。"}),g.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"1rem"},children:[g.jsx("strong",{children:"你已经亲身体验了线代两大核心工具的实战应用"}),"， 剩余步骤（黄色面、顶层棱角归位）将在后续版本中使用更多群论工具继续指导。"]}),g.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[g.jsx(an,{to:"/chapter/solve",className:"btn btn-outline",style:{flex:1,textAlign:"center",textDecoration:"none"},children:"回到第6节"}),g.jsx(an,{to:"/playground",className:"btn btn-primary",style:{flex:1,textAlign:"center",textDecoration:"none"},children:"巩固练习 →"})]})]})]})}),g.jsxs("div",{style:{width:"420px",flexShrink:0},children:[g.jsx("div",{style:{height:"420px",borderRadius:"var(--radius)",overflow:"hidden",border:"1px solid var(--rule)"},children:g.jsx(Qs,{ref:r})}),g.jsx("p",{style:{marginTop:"0.4rem",fontSize:"0.72rem",color:"var(--muted)",textAlign:"center"},children:"左键点击面 = 逆时针 | 右键点击面 = 顺时针 | 空白拖拽 = 旋转视角"})]})]})]})}function PR(){return g.jsx(ly,{children:g.jsxs(es,{element:g.jsx(jy,{}),children:[g.jsx(es,{path:"/",element:g.jsx(Wy,{})}),g.jsx(es,{path:"/chapter/:id",element:g.jsx(yR,{})}),g.jsx(es,{path:"/playground",element:g.jsx(SR,{})}),g.jsx(es,{path:"/archive",element:g.jsx(ER,{})}),g.jsx(es,{path:"/tutorial",element:g.jsx(bR,{})})]})})}sx.createRoot(document.getElementById("app")).render(g.jsx(z.StrictMode,{children:g.jsx(Dy,{children:g.jsx(PR,{})})}));
