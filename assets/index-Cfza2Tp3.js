(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function e_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var id={exports:{}},Yo={},rd={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function t_(){if(bm)return mt;bm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(O,se,Ce){this.props=O,this.context=se,this.refs=T,this.updater=Ce||M}S.prototype.isReactComponent={},S.prototype.setState=function(O,se){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,se,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=S.prototype;function U(O,se,Ce){this.props=O,this.context=se,this.refs=T,this.updater=Ce||M}var L=U.prototype=new _;L.constructor=U,E(L,S.prototype),L.isPureReactComponent=!0;var b=Array.isArray,F=Object.prototype.hasOwnProperty,N={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function Y(O,se,Ce){var re,he={},Ee=null,_e=null;if(se!=null)for(re in se.ref!==void 0&&(_e=se.ref),se.key!==void 0&&(Ee=""+se.key),se)F.call(se,re)&&!k.hasOwnProperty(re)&&(he[re]=se[re]);var be=arguments.length-2;if(be===1)he.children=Ce;else if(1<be){for(var Fe=Array(be),Ze=0;Ze<be;Ze++)Fe[Ze]=arguments[Ze+2];he.children=Fe}if(O&&O.defaultProps)for(re in be=O.defaultProps,be)he[re]===void 0&&(he[re]=be[re]);return{$$typeof:r,type:O,key:Ee,ref:_e,props:he,_owner:N.current}}function P(O,se){return{$$typeof:r,type:O.type,key:se,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function V(O){var se={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ce){return se[Ce]})}var fe=/\/+/g;function W(O,se){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):se.toString(36)}function ie(O,se,Ce,re,he){var Ee=typeof O;(Ee==="undefined"||Ee==="boolean")&&(O=null);var _e=!1;if(O===null)_e=!0;else switch(Ee){case"string":case"number":_e=!0;break;case"object":switch(O.$$typeof){case r:case e:_e=!0}}if(_e)return _e=O,he=he(_e),O=re===""?"."+W(_e,0):re,b(he)?(Ce="",O!=null&&(Ce=O.replace(fe,"$&/")+"/"),ie(he,se,Ce,"",function(Ze){return Ze})):he!=null&&(C(he)&&(he=P(he,Ce+(!he.key||_e&&_e.key===he.key?"":(""+he.key).replace(fe,"$&/")+"/")+O)),se.push(he)),1;if(_e=0,re=re===""?".":re+":",b(O))for(var be=0;be<O.length;be++){Ee=O[be];var Fe=re+W(Ee,be);_e+=ie(Ee,se,Ce,Fe,he)}else if(Fe=y(O),typeof Fe=="function")for(O=Fe.call(O),be=0;!(Ee=O.next()).done;)Ee=Ee.value,Fe=re+W(Ee,be++),_e+=ie(Ee,se,Ce,Fe,he);else if(Ee==="object")throw se=String(O),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return _e}function G(O,se,Ce){if(O==null)return O;var re=[],he=0;return ie(O,re,"","",function(Ee){return se.call(Ce,Ee,he++)}),re}function X(O){if(O._status===-1){var se=O._result;se=se(),se.then(function(Ce){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ce)},function(Ce){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ce)}),O._status===-1&&(O._status=0,O._result=se)}if(O._status===1)return O._result.default;throw O._result}var J={current:null},B={transition:null},de={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:B,ReactCurrentOwner:N};function ce(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:G,forEach:function(O,se,Ce){G(O,function(){se.apply(this,arguments)},Ce)},count:function(O){var se=0;return G(O,function(){se++}),se},toArray:function(O){return G(O,function(se){return se})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},mt.Component=S,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=U,mt.StrictMode=s,mt.Suspense=f,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,mt.act=ce,mt.cloneElement=function(O,se,Ce){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var re=E({},O.props),he=O.key,Ee=O.ref,_e=O._owner;if(se!=null){if(se.ref!==void 0&&(Ee=se.ref,_e=N.current),se.key!==void 0&&(he=""+se.key),O.type&&O.type.defaultProps)var be=O.type.defaultProps;for(Fe in se)F.call(se,Fe)&&!k.hasOwnProperty(Fe)&&(re[Fe]=se[Fe]===void 0&&be!==void 0?be[Fe]:se[Fe])}var Fe=arguments.length-2;if(Fe===1)re.children=Ce;else if(1<Fe){be=Array(Fe);for(var Ze=0;Ze<Fe;Ze++)be[Ze]=arguments[Ze+2];re.children=be}return{$$typeof:r,type:O.type,key:he,ref:Ee,props:re,_owner:_e}},mt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},mt.createElement=Y,mt.createFactory=function(O){var se=Y.bind(null,O);return se.type=O,se},mt.createRef=function(){return{current:null}},mt.forwardRef=function(O){return{$$typeof:d,render:O}},mt.isValidElement=C,mt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:X}},mt.memo=function(O,se){return{$$typeof:p,type:O,compare:se===void 0?null:se}},mt.startTransition=function(O){var se=B.transition;B.transition={};try{O()}finally{B.transition=se}},mt.unstable_act=ce,mt.useCallback=function(O,se){return J.current.useCallback(O,se)},mt.useContext=function(O){return J.current.useContext(O)},mt.useDebugValue=function(){},mt.useDeferredValue=function(O){return J.current.useDeferredValue(O)},mt.useEffect=function(O,se){return J.current.useEffect(O,se)},mt.useId=function(){return J.current.useId()},mt.useImperativeHandle=function(O,se,Ce){return J.current.useImperativeHandle(O,se,Ce)},mt.useInsertionEffect=function(O,se){return J.current.useInsertionEffect(O,se)},mt.useLayoutEffect=function(O,se){return J.current.useLayoutEffect(O,se)},mt.useMemo=function(O,se){return J.current.useMemo(O,se)},mt.useReducer=function(O,se,Ce){return J.current.useReducer(O,se,Ce)},mt.useRef=function(O){return J.current.useRef(O)},mt.useState=function(O){return J.current.useState(O)},mt.useSyncExternalStore=function(O,se,Ce){return J.current.useSyncExternalStore(O,se,Ce)},mt.useTransition=function(){return J.current.useTransition()},mt.version="18.3.1",mt}var Pm;function zf(){return Pm||(Pm=1,rd.exports=t_()),rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function n_(){if(Lm)return Yo;Lm=1;var r=zf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var g,v={},y=null,M=null;p!==void 0&&(y=""+p),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(M=f.ref);for(g in f)s.call(f,g)&&!l.hasOwnProperty(g)&&(v[g]=f[g]);if(d&&d.defaultProps)for(g in f=d.defaultProps,f)v[g]===void 0&&(v[g]=f[g]);return{$$typeof:e,type:d,key:y,ref:M,props:v,_owner:o.current}}return Yo.Fragment=t,Yo.jsx=u,Yo.jsxs=u,Yo}var Dm;function i_(){return Dm||(Dm=1,id.exports=n_()),id.exports}var m=i_(),z=zf();const Ml=e_(z);var El={},sd={exports:{}},bn={},od={exports:{}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function r_(){return Um||(Um=1,(function(r){function e(B,de){var ce=B.length;B.push(de);e:for(;0<ce;){var O=ce-1>>>1,se=B[O];if(0<o(se,de))B[O]=de,B[ce]=se,ce=O;else break e}}function t(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var de=B[0],ce=B.pop();if(ce!==de){B[0]=ce;e:for(var O=0,se=B.length,Ce=se>>>1;O<Ce;){var re=2*(O+1)-1,he=B[re],Ee=re+1,_e=B[Ee];if(0>o(he,ce))Ee<se&&0>o(_e,he)?(B[O]=_e,B[Ee]=ce,O=Ee):(B[O]=he,B[re]=ce,O=re);else if(Ee<se&&0>o(_e,ce))B[O]=_e,B[Ee]=ce,O=Ee;else break e}}return de}function o(B,de){var ce=B.sortIndex-de.sortIndex;return ce!==0?ce:B.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var f=[],p=[],g=1,v=null,y=3,M=!1,E=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var de=t(p);de!==null;){if(de.callback===null)s(p);else if(de.startTime<=B)s(p),de.sortIndex=de.expirationTime,e(f,de);else break;de=t(p)}}function b(B){if(T=!1,L(B),!E)if(t(f)!==null)E=!0,X(F);else{var de=t(p);de!==null&&J(b,de.startTime-B)}}function F(B,de){E=!1,T&&(T=!1,_(Y),Y=-1),M=!0;var ce=y;try{for(L(de),v=t(f);v!==null&&(!(v.expirationTime>de)||B&&!V());){var O=v.callback;if(typeof O=="function"){v.callback=null,y=v.priorityLevel;var se=O(v.expirationTime<=de);de=r.unstable_now(),typeof se=="function"?v.callback=se:v===t(f)&&s(f),L(de)}else s(f);v=t(f)}if(v!==null)var Ce=!0;else{var re=t(p);re!==null&&J(b,re.startTime-de),Ce=!1}return Ce}finally{v=null,y=ce,M=!1}}var N=!1,k=null,Y=-1,P=5,C=-1;function V(){return!(r.unstable_now()-C<P)}function fe(){if(k!==null){var B=r.unstable_now();C=B;var de=!0;try{de=k(!0,B)}finally{de?W():(N=!1,k=null)}}else N=!1}var W;if(typeof U=="function")W=function(){U(fe)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,G=ie.port2;ie.port1.onmessage=fe,W=function(){G.postMessage(null)}}else W=function(){S(fe,0)};function X(B){k=B,N||(N=!0,W())}function J(B,de){Y=S(function(){B(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,X(F))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(B){switch(y){case 1:case 2:case 3:var de=3;break;default:de=y}var ce=y;y=de;try{return B()}finally{y=ce}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,de){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ce=y;y=B;try{return de()}finally{y=ce}},r.unstable_scheduleCallback=function(B,de,ce){var O=r.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?O+ce:O):ce=O,B){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ce+se,B={id:g++,callback:de,priorityLevel:B,startTime:ce,expirationTime:se,sortIndex:-1},ce>O?(B.sortIndex=ce,e(p,B),t(f)===null&&B===t(p)&&(T?(_(Y),Y=-1):T=!0,J(b,ce-O))):(B.sortIndex=se,e(f,B),E||M||(E=!0,X(F))),B},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(B){var de=y;return function(){var ce=y;y=de;try{return B.apply(this,arguments)}finally{y=ce}}}})(ad)),ad}var Nm;function s_(){return Nm||(Nm=1,od.exports=r_()),od.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function o_(){if(Im)return bn;Im=1;var r=zf(),e=s_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function y(n){return f.call(v,n)?!0:f.call(g,n)?!1:p.test(n)?v[n]=!0:(g[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,c,h,x,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,U);S[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,U);S[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,U);S[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,c){var h=S.hasOwnProperty(i)?S[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,c)&&(a=null),c||h===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),N=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),B=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,O;function se(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Ce=!1;function re(n,i){if(!n||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var h=oe.stack.split(`
`),x=c.stack.split(`
`),w=h.length-1,I=x.length-1;1<=w&&0<=I&&h[w]!==x[I];)I--;for(;1<=w&&0<=I;w--,I--)if(h[w]!==x[I]){if(w!==1||I!==1)do if(w--,I--,0>I||h[w]!==x[I]){var H=`
`+h[w].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=w&&0<=I);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function he(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=re(n.type,!1),n;case 11:return n=re(n.type.render,!1),n;case 1:return n=re(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case N:return"Portal";case P:return"Profiler";case Y:return"StrictMode";case W:return"Suspense";case ie:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case fe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case X:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,x.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Tt(n){n._valueTracker||(n._valueTracker=Ze(n))}function ht(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function q(n,i){var a=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Qt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Te(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Le(n,i){Te(n,i);var a=be(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ot(n,i.type,a):i.hasOwnProperty("defaultValue")&&ot(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Oe(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ot(n,i,a){(i!=="number"||Ct(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ge=Array.isArray;function D(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function R(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ee(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ge(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:be(a)}}function me(n,i){var a=be(i.value),c=be(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ke(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Pe,Be=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Pe=Pe||document.createElement("div"),Pe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Pe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ct(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){He.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function tt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function nt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=tt(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var je=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(n,i){if(i){if(je[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function at(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function $(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var De=null,ue=null,ge=null;function Ie(n){if(n=Uo(n)){if(typeof De!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Oa(i),De(n.stateNode,n.type,i))}}function Ne(n){ue?ge?ge.push(n):ge=[n]:ue=n}function lt(){if(ue){var n=ue,i=ge;if(ge=ue=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function Ut(n,i){return n(i)}function Xt(){}var _t=!1;function Mn(n,i,a){if(_t)return n(i,a);_t=!0;try{return Ut(n,i,a)}finally{_t=!1,(ue!==null||ge!==null)&&(Xt(),lt())}}function gn(n,i){var a=n.stateNode;if(a===null)return null;var c=Oa(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var fs=!1;if(d)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){fs=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{fs=!1}function Li(n,i,a,c,h,x,w,I,H){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(ye){this.onError(ye)}}var Di=!1,Nr=null,Ir=!1,nr=null,va={onError:function(n){Di=!0,Nr=n}};function hs(n,i,a,c,h,x,w,I,H){Di=!1,Nr=null,Li.apply(va,arguments)}function xa(n,i,a,c,h,x,w,I,H){if(hs.apply(this,arguments),Di){if(Di){var oe=Nr;Di=!1,Nr=null}else throw Error(t(198));Ir||(Ir=!0,nr=oe)}}function xi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function _a(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ya(n){if(xi(n)!==n)throw Error(t(188))}function wc(n){var i=n.alternate;if(!i){if(i=xi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var x=h.alternate;if(x===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===x.child){for(x=h.child;x;){if(x===a)return ya(h),n;if(x===c)return ya(h),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=x;else{for(var w=!1,I=h.child;I;){if(I===a){w=!0,a=h,c=x;break}if(I===c){w=!0,c=h,a=x;break}I=I.sibling}if(!w){for(I=x.child;I;){if(I===a){w=!0,a=x,c=h;break}if(I===c){w=!0,c=x,a=h;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function A(n){return n=wc(n),n!==null?K(n):null}function K(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=K(n);if(i!==null)return i;n=n.sibling}return null}var ae=e.unstable_scheduleCallback,le=e.unstable_cancelCallback,Z=e.unstable_shouldYield,Ae=e.unstable_requestPaint,we=e.unstable_now,Ye=e.unstable_getCurrentPriorityLevel,Xe=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,st=e.unstable_NormalPriority,qe=e.unstable_LowPriority,vt=e.unstable_IdlePriority,wt=null,gt=null;function ln(n){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(wt,n,void 0,(n.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Mt,Qe=Math.log,ni=Math.LN2;function Mt(n){return n>>>=0,n===0?32:31-(Qe(n)/ni|0)|0}var cn=64,ii=4194304;function $t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function _i(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,x=n.pingedLanes,w=a&268435455;if(w!==0){var I=w&~h;I!==0?c=$t(I):(x&=w,x!==0&&(c=$t(x)))}else w=a&~h,w!==0?c=$t(w):x!==0&&(c=$t(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,x=i&-i,h>=x||h===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ut(i),h=1<<a,c|=n[a],i&=~h;return c}function Lt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,x=n.pendingLanes;0<x;){var w=31-ut(x),I=1<<w,H=h[w];H===-1?((I&a)===0||(I&c)!==0)&&(h[w]=Lt(I,i)):H<=i&&(n.expiredLanes|=I),x&=~I}}function Ui(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function vn(){var n=cn;return cn<<=1,(cn&4194240)===0&&(cn=64),n}function Vn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function En(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ut(i),n[i]=a}function Sa(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-ut(a),x=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~x}}function Rc(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ut(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var bt=0;function ah(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var lh,Ac,ch,uh,dh,Cc=!1,Ma=[],ir=null,rr=null,sr=null,vo=new Map,xo=new Map,or=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fh(n,i){switch(n){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(i.pointerId)}}function _o(n,i,a,c,h,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[h]},i!==null&&(i=Uo(i),i!==null&&Ac(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function E0(n,i,a,c,h){switch(i){case"focusin":return ir=_o(ir,n,i,a,c,h),!0;case"dragenter":return rr=_o(rr,n,i,a,c,h),!0;case"mouseover":return sr=_o(sr,n,i,a,c,h),!0;case"pointerover":var x=h.pointerId;return vo.set(x,_o(vo.get(x)||null,n,i,a,c,h)),!0;case"gotpointercapture":return x=h.pointerId,xo.set(x,_o(xo.get(x)||null,n,i,a,c,h)),!0}return!1}function hh(n){var i=Fr(n.target);if(i!==null){var a=xi(i);if(a!==null){if(i=a.tag,i===13){if(i=_a(a),i!==null){n.blockedOn=i,dh(n.priority,function(){ch(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ea(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Pc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);At=c,a.target.dispatchEvent(c),At=null}else return i=Uo(a),i!==null&&Ac(i),n.blockedOn=a,!1;i.shift()}return!0}function ph(n,i,a){Ea(n)&&a.delete(i)}function T0(){Cc=!1,ir!==null&&Ea(ir)&&(ir=null),rr!==null&&Ea(rr)&&(rr=null),sr!==null&&Ea(sr)&&(sr=null),vo.forEach(ph),xo.forEach(ph)}function yo(n,i){n.blockedOn===i&&(n.blockedOn=null,Cc||(Cc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,T0)))}function So(n){function i(h){return yo(h,n)}if(0<Ma.length){yo(Ma[0],n);for(var a=1;a<Ma.length;a++){var c=Ma[a];c.blockedOn===n&&(c.blockedOn=null)}}for(ir!==null&&yo(ir,n),rr!==null&&yo(rr,n),sr!==null&&yo(sr,n),vo.forEach(i),xo.forEach(i),a=0;a<or.length;a++)c=or[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<or.length&&(a=or[0],a.blockedOn===null);)hh(a),a.blockedOn===null&&or.shift()}var ps=b.ReactCurrentBatchConfig,Ta=!0;function w0(n,i,a,c){var h=bt,x=ps.transition;ps.transition=null;try{bt=1,bc(n,i,a,c)}finally{bt=h,ps.transition=x}}function R0(n,i,a,c){var h=bt,x=ps.transition;ps.transition=null;try{bt=4,bc(n,i,a,c)}finally{bt=h,ps.transition=x}}function bc(n,i,a,c){if(Ta){var h=Pc(n,i,a,c);if(h===null)$c(n,i,c,wa,a),fh(n,c);else if(E0(h,n,i,a,c))c.stopPropagation();else if(fh(n,c),i&4&&-1<M0.indexOf(n)){for(;h!==null;){var x=Uo(h);if(x!==null&&lh(x),x=Pc(n,i,a,c),x===null&&$c(n,i,c,wa,a),x===h)break;h=x}h!==null&&c.stopPropagation()}else $c(n,i,c,null,a)}}var wa=null;function Pc(n,i,a,c){if(wa=null,n=$(c),n=Fr(n),n!==null)if(i=xi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=_a(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wa=n,null}function mh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ye()){case Xe:return 1;case it:return 4;case st:case qe:return 16;case vt:return 536870912;default:return 16}default:return 16}}var ar=null,Lc=null,Ra=null;function gh(){if(Ra)return Ra;var n,i=Lc,a=i.length,c,h="value"in ar?ar.value:ar.textContent,x=h.length;for(n=0;n<a&&i[n]===h[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===h[x-c];c++);return Ra=h.slice(n,1<c?1-c:void 0)}function Aa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ca(){return!0}function vh(){return!1}function In(n){function i(a,c,h,x,w){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=x,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(x):x[I]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Ca:vh,this.isPropagationStopped=vh,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dc=In(ms),Mo=ce({},ms,{view:0,detail:0}),A0=In(Mo),Uc,Nc,Eo,ba=ce({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Eo&&(Eo&&n.type==="mousemove"?(Uc=n.screenX-Eo.screenX,Nc=n.screenY-Eo.screenY):Nc=Uc=0,Eo=n),Uc)},movementY:function(n){return"movementY"in n?n.movementY:Nc}}),xh=In(ba),C0=ce({},ba,{dataTransfer:0}),b0=In(C0),P0=ce({},Mo,{relatedTarget:0}),Ic=In(P0),L0=ce({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=In(L0),U0=ce({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),N0=In(U0),I0=ce({},ms,{data:0}),_h=In(I0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=k0[n])?!!i[n]:!1}function Fc(){return B0}var z0=ce({},Mo,{key:function(n){if(n.key){var i=F0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Aa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?O0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(n){return n.type==="keypress"?Aa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Aa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),H0=In(z0),V0=ce({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yh=In(V0),G0=ce({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),j0=In(G0),W0=ce({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=In(W0),$0=ce({},ba,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Y0=In($0),q0=[9,13,27,32],Oc=d&&"CompositionEvent"in window,To=null;d&&"documentMode"in document&&(To=document.documentMode);var K0=d&&"TextEvent"in window&&!To,Sh=d&&(!Oc||To&&8<To&&11>=To),Mh=" ",Eh=!1;function Th(n,i){switch(n){case"keyup":return q0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function Z0(n,i){switch(n){case"compositionend":return wh(i);case"keypress":return i.which!==32?null:(Eh=!0,Mh);case"textInput":return n=i.data,n===Mh&&Eh?null:n;default:return null}}function Q0(n,i){if(gs)return n==="compositionend"||!Oc&&Th(n,i)?(n=gh(),Ra=Lc=ar=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Sh&&i.locale!=="ko"?null:i.data;default:return null}}var J0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!J0[n.type]:i==="textarea"}function Ah(n,i,a,c){Ne(c),i=Na(i,"onChange"),0<i.length&&(a=new Dc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var wo=null,Ro=null;function ex(n){Wh(n,0)}function Pa(n){var i=Ss(n);if(ht(i))return n}function tx(n,i){if(n==="change")return i}var Ch=!1;if(d){var kc;if(d){var Bc="oninput"in document;if(!Bc){var bh=document.createElement("div");bh.setAttribute("oninput","return;"),Bc=typeof bh.oninput=="function"}kc=Bc}else kc=!1;Ch=kc&&(!document.documentMode||9<document.documentMode)}function Ph(){wo&&(wo.detachEvent("onpropertychange",Lh),Ro=wo=null)}function Lh(n){if(n.propertyName==="value"&&Pa(Ro)){var i=[];Ah(i,Ro,n,$(n)),Mn(ex,i)}}function nx(n,i,a){n==="focusin"?(Ph(),wo=i,Ro=a,wo.attachEvent("onpropertychange",Lh)):n==="focusout"&&Ph()}function ix(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pa(Ro)}function rx(n,i){if(n==="click")return Pa(i)}function sx(n,i){if(n==="input"||n==="change")return Pa(i)}function ox(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ri=typeof Object.is=="function"?Object.is:ox;function Ao(n,i){if(ri(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!f.call(i,h)||!ri(n[h],i[h]))return!1}return!0}function Dh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Uh(n,i){var a=Dh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dh(a)}}function Nh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Nh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ih(){for(var n=window,i=Ct();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ct(n.document)}return i}function zc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function ax(n){var i=Ih(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Nh(a.ownerDocument.documentElement,a)){if(c!==null&&zc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,x=Math.min(c.start,h);c=c.end===void 0?x:Math.min(c.end,h),!n.extend&&x>c&&(h=c,c=x,x=h),h=Uh(a,x);var w=Uh(a,c);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var lx=d&&"documentMode"in document&&11>=document.documentMode,vs=null,Hc=null,Co=null,Vc=!1;function Fh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vc||vs==null||vs!==Ct(c)||(c=vs,"selectionStart"in c&&zc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Co&&Ao(Co,c)||(Co=c,c=Na(Hc,"onSelect"),0<c.length&&(i=new Dc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=vs)))}function La(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var xs={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},Gc={},Oh={};d&&(Oh=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Da(n){if(Gc[n])return Gc[n];if(!xs[n])return n;var i=xs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Oh)return Gc[n]=i[a];return n}var kh=Da("animationend"),Bh=Da("animationiteration"),zh=Da("animationstart"),Hh=Da("transitionend"),Vh=new Map,Gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(n,i){Vh.set(n,i),l(i,[n])}for(var jc=0;jc<Gh.length;jc++){var Wc=Gh[jc],cx=Wc.toLowerCase(),ux=Wc[0].toUpperCase()+Wc.slice(1);lr(cx,"on"+ux)}lr(kh,"onAnimationEnd"),lr(Bh,"onAnimationIteration"),lr(zh,"onAnimationStart"),lr("dblclick","onDoubleClick"),lr("focusin","onFocus"),lr("focusout","onBlur"),lr(Hh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function jh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,xa(c,i,void 0,n),n.currentTarget=null}function Wh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var w=c.length-1;0<=w;w--){var I=c[w],H=I.instance,oe=I.currentTarget;if(I=I.listener,H!==x&&h.isPropagationStopped())break e;jh(h,I,oe),x=H}else for(w=0;w<c.length;w++){if(I=c[w],H=I.instance,oe=I.currentTarget,I=I.listener,H!==x&&h.isPropagationStopped())break e;jh(h,I,oe),x=H}}}if(Ir)throw n=nr,Ir=!1,nr=null,n}function Nt(n,i){var a=i[Jc];a===void 0&&(a=i[Jc]=new Set);var c=n+"__bubble";a.has(c)||(Xh(i,n,2,!1),a.add(c))}function Xc(n,i,a){var c=0;i&&(c|=4),Xh(a,n,c,i)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Po(n){if(!n[Ua]){n[Ua]=!0,s.forEach(function(a){a!=="selectionchange"&&(dx.has(a)||Xc(a,!1,n),Xc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ua]||(i[Ua]=!0,Xc("selectionchange",!1,i))}}function Xh(n,i,a,c){switch(mh(i)){case 1:var h=w0;break;case 4:h=R0;break;default:h=bc}a=h.bind(null,i,a,n),h=void 0,!fs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function $c(n,i,a,c,h){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var I=c.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(w===4)for(w=c.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===h||H.nodeType===8&&H.parentNode===h))return;w=w.return}for(;I!==null;){if(w=Fr(I),w===null)return;if(H=w.tag,H===5||H===6){c=x=w;continue e}I=I.parentNode}}c=c.return}Mn(function(){var oe=x,ye=$(a),Se=[];e:{var xe=Vh.get(n);if(xe!==void 0){var ze=Dc,We=n;switch(n){case"keypress":if(Aa(a)===0)break e;case"keydown":case"keyup":ze=H0;break;case"focusin":We="focus",ze=Ic;break;case"focusout":We="blur",ze=Ic;break;case"beforeblur":case"afterblur":ze=Ic;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=j0;break;case kh:case Bh:case zh:ze=D0;break;case Hh:ze=X0;break;case"scroll":ze=A0;break;case"wheel":ze=Y0;break;case"copy":case"cut":case"paste":ze=N0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=yh}var $e=(i&4)!==0,Gt=!$e&&n==="scroll",Q=$e?xe!==null?xe+"Capture":null:xe;$e=[];for(var j=oe,te;j!==null;){te=j;var Re=te.stateNode;if(te.tag===5&&Re!==null&&(te=Re,Q!==null&&(Re=gn(j,Q),Re!=null&&$e.push(Lo(j,Re,te)))),Gt)break;j=j.return}0<$e.length&&(xe=new ze(xe,We,null,a,ye),Se.push({event:xe,listeners:$e}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",xe&&a!==At&&(We=a.relatedTarget||a.fromElement)&&(Fr(We)||We[Ni]))break e;if((ze||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,ze?(We=a.relatedTarget||a.toElement,ze=oe,We=We?Fr(We):null,We!==null&&(Gt=xi(We),We!==Gt||We.tag!==5&&We.tag!==6)&&(We=null)):(ze=null,We=oe),ze!==We)){if($e=xh,Re="onMouseLeave",Q="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&($e=yh,Re="onPointerLeave",Q="onPointerEnter",j="pointer"),Gt=ze==null?xe:Ss(ze),te=We==null?xe:Ss(We),xe=new $e(Re,j+"leave",ze,a,ye),xe.target=Gt,xe.relatedTarget=te,Re=null,Fr(ye)===oe&&($e=new $e(Q,j+"enter",We,a,ye),$e.target=te,$e.relatedTarget=Gt,Re=$e),Gt=Re,ze&&We)t:{for($e=ze,Q=We,j=0,te=$e;te;te=_s(te))j++;for(te=0,Re=Q;Re;Re=_s(Re))te++;for(;0<j-te;)$e=_s($e),j--;for(;0<te-j;)Q=_s(Q),te--;for(;j--;){if($e===Q||Q!==null&&$e===Q.alternate)break t;$e=_s($e),Q=_s(Q)}$e=null}else $e=null;ze!==null&&$h(Se,xe,ze,$e,!1),We!==null&&Gt!==null&&$h(Se,Gt,We,$e,!0)}}e:{if(xe=oe?Ss(oe):window,ze=xe.nodeName&&xe.nodeName.toLowerCase(),ze==="select"||ze==="input"&&xe.type==="file")var Ke=tx;else if(Rh(xe))if(Ch)Ke=sx;else{Ke=ix;var Je=nx}else(ze=xe.nodeName)&&ze.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ke=rx);if(Ke&&(Ke=Ke(n,oe))){Ah(Se,Ke,a,ye);break e}Je&&Je(n,xe,oe),n==="focusout"&&(Je=xe._wrapperState)&&Je.controlled&&xe.type==="number"&&ot(xe,"number",xe.value)}switch(Je=oe?Ss(oe):window,n){case"focusin":(Rh(Je)||Je.contentEditable==="true")&&(vs=Je,Hc=oe,Co=null);break;case"focusout":Co=Hc=vs=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,Fh(Se,a,ye);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":Fh(Se,a,ye)}var et;if(Oc)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else gs?Th(n,a)&&(rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Sh&&a.locale!=="ko"&&(gs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&gs&&(et=gh()):(ar=ye,Lc="value"in ar?ar.value:ar.textContent,gs=!0)),Je=Na(oe,rt),0<Je.length&&(rt=new _h(rt,n,null,a,ye),Se.push({event:rt,listeners:Je}),et?rt.data=et:(et=wh(a),et!==null&&(rt.data=et)))),(et=K0?Z0(n,a):Q0(n,a))&&(oe=Na(oe,"onBeforeInput"),0<oe.length&&(ye=new _h("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:oe}),ye.data=et))}Wh(Se,i)})}function Lo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Na(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,x=h.stateNode;h.tag===5&&x!==null&&(h=x,x=gn(n,a),x!=null&&c.unshift(Lo(n,x,h)),x=gn(n,i),x!=null&&c.push(Lo(n,x,h))),n=n.return}return c}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $h(n,i,a,c,h){for(var x=i._reactName,w=[];a!==null&&a!==c;){var I=a,H=I.alternate,oe=I.stateNode;if(H!==null&&H===c)break;I.tag===5&&oe!==null&&(I=oe,h?(H=gn(a,x),H!=null&&w.unshift(Lo(a,H,I))):h||(H=gn(a,x),H!=null&&w.push(Lo(a,H,I)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var fx=/\r\n?/g,hx=/\u0000|\uFFFD/g;function Yh(n){return(typeof n=="string"?n:""+n).replace(fx,`
`).replace(hx,"")}function Ia(n,i,a){if(i=Yh(i),Yh(n)!==i&&a)throw Error(t(425))}function Fa(){}var Yc=null,qc=null;function Kc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Zc=typeof setTimeout=="function"?setTimeout:void 0,px=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(n){return qh.resolve(null).then(n).catch(gx)}:Zc;function gx(n){setTimeout(function(){throw n})}function Qc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),So(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);So(i)}function cr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Kh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),yi="__reactFiber$"+ys,Do="__reactProps$"+ys,Ni="__reactContainer$"+ys,Jc="__reactEvents$"+ys,vx="__reactListeners$"+ys,xx="__reactHandles$"+ys;function Fr(n){var i=n[yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ni]||a[yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Kh(n);n!==null;){if(a=n[yi])return a;n=Kh(n)}return i}n=a,a=n.parentNode}return null}function Uo(n){return n=n[yi]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Oa(n){return n[Do]||null}var eu=[],Ms=-1;function ur(n){return{current:n}}function It(n){0>Ms||(n.current=eu[Ms],eu[Ms]=null,Ms--)}function Dt(n,i){Ms++,eu[Ms]=n.current,n.current=i}var dr={},un=ur(dr),Tn=ur(!1),Or=dr;function Es(n,i){var a=n.type.contextTypes;if(!a)return dr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},x;for(x in a)h[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function wn(n){return n=n.childContextTypes,n!=null}function ka(){It(Tn),It(un)}function Zh(n,i,a){if(un.current!==dr)throw Error(t(168));Dt(un,i),Dt(Tn,a)}function Qh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,_e(n)||"Unknown",h));return ce({},a,c)}function Ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||dr,Or=un.current,Dt(un,n),Dt(Tn,Tn.current),!0}function Jh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Qh(n,i,Or),c.__reactInternalMemoizedMergedChildContext=n,It(Tn),It(un),Dt(un,n)):It(Tn),Dt(Tn,a)}var Ii=null,za=!1,tu=!1;function ep(n){Ii===null?Ii=[n]:Ii.push(n)}function _x(n){za=!0,ep(n)}function fr(){if(!tu&&Ii!==null){tu=!0;var n=0,i=bt;try{var a=Ii;for(bt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ii=null,za=!1}catch(h){throw Ii!==null&&(Ii=Ii.slice(n+1)),ae(Xe,fr),h}finally{bt=i,tu=!1}}return null}var Ts=[],ws=0,Ha=null,Va=0,Gn=[],jn=0,kr=null,Fi=1,Oi="";function Br(n,i){Ts[ws++]=Va,Ts[ws++]=Ha,Ha=n,Va=i}function tp(n,i,a){Gn[jn++]=Fi,Gn[jn++]=Oi,Gn[jn++]=kr,kr=n;var c=Fi;n=Oi;var h=32-ut(c)-1;c&=~(1<<h),a+=1;var x=32-ut(i)+h;if(30<x){var w=h-h%5;x=(c&(1<<w)-1).toString(32),c>>=w,h-=w,Fi=1<<32-ut(i)+h|a<<h|c,Oi=x+n}else Fi=1<<x|a<<h|c,Oi=n}function nu(n){n.return!==null&&(Br(n,1),tp(n,1,0))}function iu(n){for(;n===Ha;)Ha=Ts[--ws],Ts[ws]=null,Va=Ts[--ws],Ts[ws]=null;for(;n===kr;)kr=Gn[--jn],Gn[jn]=null,Oi=Gn[--jn],Gn[jn]=null,Fi=Gn[--jn],Gn[jn]=null}var Fn=null,On=null,Ft=!1,si=null;function np(n,i){var a=Yn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function ip(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Fn=n,On=cr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Fn=n,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=kr!==null?{id:Fi,overflow:Oi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Yn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Fn=n,On=null,!0):!1;default:return!1}}function ru(n){return(n.mode&1)!==0&&(n.flags&128)===0}function su(n){if(Ft){var i=On;if(i){var a=i;if(!ip(n,i)){if(ru(n))throw Error(t(418));i=cr(a.nextSibling);var c=Fn;i&&ip(n,i)?np(c,a):(n.flags=n.flags&-4097|2,Ft=!1,Fn=n)}}else{if(ru(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ft=!1,Fn=n}}}function rp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function Ga(n){if(n!==Fn)return!1;if(!Ft)return rp(n),Ft=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Kc(n.type,n.memoizedProps)),i&&(i=On)){if(ru(n))throw sp(),Error(t(418));for(;i;)np(n,i),i=cr(i.nextSibling)}if(rp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){On=cr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}On=null}}else On=Fn?cr(n.stateNode.nextSibling):null;return!0}function sp(){for(var n=On;n;)n=cr(n.nextSibling)}function Rs(){On=Fn=null,Ft=!1}function ou(n){si===null?si=[n]:si.push(n)}var yx=b.ReactCurrentBatchConfig;function No(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(w){var I=h.refs;w===null?delete I[x]:I[x]=w},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ja(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function op(n){var i=n._init;return i(n._payload)}function ap(n){function i(Q,j){if(n){var te=Q.deletions;te===null?(Q.deletions=[j],Q.flags|=16):te.push(j)}}function a(Q,j){if(!n)return null;for(;j!==null;)i(Q,j),j=j.sibling;return null}function c(Q,j){for(Q=new Map;j!==null;)j.key!==null?Q.set(j.key,j):Q.set(j.index,j),j=j.sibling;return Q}function h(Q,j){return Q=yr(Q,j),Q.index=0,Q.sibling=null,Q}function x(Q,j,te){return Q.index=te,n?(te=Q.alternate,te!==null?(te=te.index,te<j?(Q.flags|=2,j):te):(Q.flags|=2,j)):(Q.flags|=1048576,j)}function w(Q){return n&&Q.alternate===null&&(Q.flags|=2),Q}function I(Q,j,te,Re){return j===null||j.tag!==6?(j=Zu(te,Q.mode,Re),j.return=Q,j):(j=h(j,te),j.return=Q,j)}function H(Q,j,te,Re){var Ke=te.type;return Ke===k?ye(Q,j,te.props.children,Re,te.key):j!==null&&(j.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===X&&op(Ke)===j.type)?(Re=h(j,te.props),Re.ref=No(Q,j,te),Re.return=Q,Re):(Re=pl(te.type,te.key,te.props,null,Q.mode,Re),Re.ref=No(Q,j,te),Re.return=Q,Re)}function oe(Q,j,te,Re){return j===null||j.tag!==4||j.stateNode.containerInfo!==te.containerInfo||j.stateNode.implementation!==te.implementation?(j=Qu(te,Q.mode,Re),j.return=Q,j):(j=h(j,te.children||[]),j.return=Q,j)}function ye(Q,j,te,Re,Ke){return j===null||j.tag!==7?(j=$r(te,Q.mode,Re,Ke),j.return=Q,j):(j=h(j,te),j.return=Q,j)}function Se(Q,j,te){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Zu(""+j,Q.mode,te),j.return=Q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case F:return te=pl(j.type,j.key,j.props,null,Q.mode,te),te.ref=No(Q,null,j),te.return=Q,te;case N:return j=Qu(j,Q.mode,te),j.return=Q,j;case X:var Re=j._init;return Se(Q,Re(j._payload),te)}if(Ge(j)||de(j))return j=$r(j,Q.mode,te,null),j.return=Q,j;ja(Q,j)}return null}function xe(Q,j,te,Re){var Ke=j!==null?j.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ke!==null?null:I(Q,j,""+te,Re);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case F:return te.key===Ke?H(Q,j,te,Re):null;case N:return te.key===Ke?oe(Q,j,te,Re):null;case X:return Ke=te._init,xe(Q,j,Ke(te._payload),Re)}if(Ge(te)||de(te))return Ke!==null?null:ye(Q,j,te,Re,null);ja(Q,te)}return null}function ze(Q,j,te,Re,Ke){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return Q=Q.get(te)||null,I(j,Q,""+Re,Ke);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case F:return Q=Q.get(Re.key===null?te:Re.key)||null,H(j,Q,Re,Ke);case N:return Q=Q.get(Re.key===null?te:Re.key)||null,oe(j,Q,Re,Ke);case X:var Je=Re._init;return ze(Q,j,te,Je(Re._payload),Ke)}if(Ge(Re)||de(Re))return Q=Q.get(te)||null,ye(j,Q,Re,Ke,null);ja(j,Re)}return null}function We(Q,j,te,Re){for(var Ke=null,Je=null,et=j,rt=j=0,tn=null;et!==null&&rt<te.length;rt++){et.index>rt?(tn=et,et=null):tn=et.sibling;var Et=xe(Q,et,te[rt],Re);if(Et===null){et===null&&(et=tn);break}n&&et&&Et.alternate===null&&i(Q,et),j=x(Et,j,rt),Je===null?Ke=Et:Je.sibling=Et,Je=Et,et=tn}if(rt===te.length)return a(Q,et),Ft&&Br(Q,rt),Ke;if(et===null){for(;rt<te.length;rt++)et=Se(Q,te[rt],Re),et!==null&&(j=x(et,j,rt),Je===null?Ke=et:Je.sibling=et,Je=et);return Ft&&Br(Q,rt),Ke}for(et=c(Q,et);rt<te.length;rt++)tn=ze(et,Q,rt,te[rt],Re),tn!==null&&(n&&tn.alternate!==null&&et.delete(tn.key===null?rt:tn.key),j=x(tn,j,rt),Je===null?Ke=tn:Je.sibling=tn,Je=tn);return n&&et.forEach(function(Sr){return i(Q,Sr)}),Ft&&Br(Q,rt),Ke}function $e(Q,j,te,Re){var Ke=de(te);if(typeof Ke!="function")throw Error(t(150));if(te=Ke.call(te),te==null)throw Error(t(151));for(var Je=Ke=null,et=j,rt=j=0,tn=null,Et=te.next();et!==null&&!Et.done;rt++,Et=te.next()){et.index>rt?(tn=et,et=null):tn=et.sibling;var Sr=xe(Q,et,Et.value,Re);if(Sr===null){et===null&&(et=tn);break}n&&et&&Sr.alternate===null&&i(Q,et),j=x(Sr,j,rt),Je===null?Ke=Sr:Je.sibling=Sr,Je=Sr,et=tn}if(Et.done)return a(Q,et),Ft&&Br(Q,rt),Ke;if(et===null){for(;!Et.done;rt++,Et=te.next())Et=Se(Q,Et.value,Re),Et!==null&&(j=x(Et,j,rt),Je===null?Ke=Et:Je.sibling=Et,Je=Et);return Ft&&Br(Q,rt),Ke}for(et=c(Q,et);!Et.done;rt++,Et=te.next())Et=ze(et,Q,rt,Et.value,Re),Et!==null&&(n&&Et.alternate!==null&&et.delete(Et.key===null?rt:Et.key),j=x(Et,j,rt),Je===null?Ke=Et:Je.sibling=Et,Je=Et);return n&&et.forEach(function(Jx){return i(Q,Jx)}),Ft&&Br(Q,rt),Ke}function Gt(Q,j,te,Re){if(typeof te=="object"&&te!==null&&te.type===k&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case F:e:{for(var Ke=te.key,Je=j;Je!==null;){if(Je.key===Ke){if(Ke=te.type,Ke===k){if(Je.tag===7){a(Q,Je.sibling),j=h(Je,te.props.children),j.return=Q,Q=j;break e}}else if(Je.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===X&&op(Ke)===Je.type){a(Q,Je.sibling),j=h(Je,te.props),j.ref=No(Q,Je,te),j.return=Q,Q=j;break e}a(Q,Je);break}else i(Q,Je);Je=Je.sibling}te.type===k?(j=$r(te.props.children,Q.mode,Re,te.key),j.return=Q,Q=j):(Re=pl(te.type,te.key,te.props,null,Q.mode,Re),Re.ref=No(Q,j,te),Re.return=Q,Q=Re)}return w(Q);case N:e:{for(Je=te.key;j!==null;){if(j.key===Je)if(j.tag===4&&j.stateNode.containerInfo===te.containerInfo&&j.stateNode.implementation===te.implementation){a(Q,j.sibling),j=h(j,te.children||[]),j.return=Q,Q=j;break e}else{a(Q,j);break}else i(Q,j);j=j.sibling}j=Qu(te,Q.mode,Re),j.return=Q,Q=j}return w(Q);case X:return Je=te._init,Gt(Q,j,Je(te._payload),Re)}if(Ge(te))return We(Q,j,te,Re);if(de(te))return $e(Q,j,te,Re);ja(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,j!==null&&j.tag===6?(a(Q,j.sibling),j=h(j,te),j.return=Q,Q=j):(a(Q,j),j=Zu(te,Q.mode,Re),j.return=Q,Q=j),w(Q)):a(Q,j)}return Gt}var As=ap(!0),lp=ap(!1),Wa=ur(null),Xa=null,Cs=null,au=null;function lu(){au=Cs=Xa=null}function cu(n){var i=Wa.current;It(Wa),n._currentValue=i}function uu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function bs(n,i){Xa=n,au=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Rn=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(au!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(Xa===null)throw Error(t(308));Cs=n,Xa.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var zr=null;function du(n){zr===null?zr=[n]:zr.push(n)}function cp(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,du(i)):(a.next=h.next,h.next=a),i.interleaved=a,ki(n,c)}function ki(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var hr=!1;function fu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function up(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Bi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function pr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(yt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,ki(n,a)}return h=c.interleaved,h===null?(i.next=i,du(c)):(i.next=h.next,h.next=i),c.interleaved=i,ki(n,a)}function $a(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rc(n,a)}}function dp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?h=x=w:x=x.next=w,a=a.next}while(a!==null);x===null?h=x=i:x=x.next=i}else h=x=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ya(n,i,a,c){var h=n.updateQueue;hr=!1;var x=h.firstBaseUpdate,w=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var H=I,oe=H.next;H.next=null,w===null?x=oe:w.next=oe,w=H;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==w&&(I===null?ye.firstBaseUpdate=oe:I.next=oe,ye.lastBaseUpdate=H))}if(x!==null){var Se=h.baseState;w=0,ye=oe=H=null,I=x;do{var xe=I.lane,ze=I.eventTime;if((c&xe)===xe){ye!==null&&(ye=ye.next={eventTime:ze,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var We=n,$e=I;switch(xe=i,ze=a,$e.tag){case 1:if(We=$e.payload,typeof We=="function"){Se=We.call(ze,Se,xe);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=$e.payload,xe=typeof We=="function"?We.call(ze,Se,xe):We,xe==null)break e;Se=ce({},Se,xe);break e;case 2:hr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,xe=h.effects,xe===null?h.effects=[I]:xe.push(I))}else ze={eventTime:ze,lane:xe,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(oe=ye=ze,H=Se):ye=ye.next=ze,w|=xe;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;xe=I,I=xe.next,xe.next=null,h.lastBaseUpdate=xe,h.shared.pending=null}}while(!0);if(ye===null&&(H=Se),h.baseState=H,h.firstBaseUpdate=oe,h.lastBaseUpdate=ye,i=h.shared.interleaved,i!==null){h=i;do w|=h.lane,h=h.next;while(h!==i)}else x===null&&(h.shared.lanes=0);Gr|=w,n.lanes=w,n.memoizedState=Se}}function fp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Io={},Si=ur(Io),Fo=ur(Io),Oo=ur(Io);function Hr(n){if(n===Io)throw Error(t(174));return n}function hu(n,i){switch(Dt(Oo,i),Dt(Fo,n),Dt(Si,Io),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ke(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ke(i,n)}It(Si),Dt(Si,i)}function Ps(){It(Si),It(Fo),It(Oo)}function hp(n){Hr(Oo.current);var i=Hr(Si.current),a=ke(i,n.type);i!==a&&(Dt(Fo,n),Dt(Si,a))}function pu(n){Fo.current===n&&(It(Si),It(Fo))}var kt=ur(0);function qa(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var mu=[];function gu(){for(var n=0;n<mu.length;n++)mu[n]._workInProgressVersionPrimary=null;mu.length=0}var Ka=b.ReactCurrentDispatcher,vu=b.ReactCurrentBatchConfig,Vr=0,Bt=null,Yt=null,Jt=null,Za=!1,ko=!1,Bo=0,Sx=0;function dn(){throw Error(t(321))}function xu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ri(n[a],i[a]))return!1;return!0}function _u(n,i,a,c,h,x){if(Vr=x,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ka.current=n===null||n.memoizedState===null?wx:Rx,n=a(c,h),ko){x=0;do{if(ko=!1,Bo=0,25<=x)throw Error(t(301));x+=1,Jt=Yt=null,i.updateQueue=null,Ka.current=Ax,n=a(c,h)}while(ko)}if(Ka.current=el,i=Yt!==null&&Yt.next!==null,Vr=0,Jt=Yt=Bt=null,Za=!1,i)throw Error(t(300));return n}function yu(){var n=Bo!==0;return Bo=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Bt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Xn(){if(Yt===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=Yt.next;var i=Jt===null?Bt.memoizedState:Jt.next;if(i!==null)Jt=i,Yt=n;else{if(n===null)throw Error(t(310));Yt=n,n={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?Bt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function zo(n,i){return typeof i=="function"?i(n):i}function Su(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Yt,h=c.baseQueue,x=a.pending;if(x!==null){if(h!==null){var w=h.next;h.next=x.next,x.next=w}c.baseQueue=h=x,a.pending=null}if(h!==null){x=h.next,c=c.baseState;var I=w=null,H=null,oe=x;do{var ye=oe.lane;if((Vr&ye)===ye)H!==null&&(H=H.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var Se={lane:ye,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};H===null?(I=H=Se,w=c):H=H.next=Se,Bt.lanes|=ye,Gr|=ye}oe=oe.next}while(oe!==null&&oe!==x);H===null?w=c:H.next=I,ri(c,i.memoizedState)||(Rn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=H,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do x=h.lane,Bt.lanes|=x,Gr|=x,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Mu(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,x=i.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do x=n(x,w.action),w=w.next;while(w!==h);ri(x,i.memoizedState)||(Rn=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function pp(){}function mp(n,i){var a=Bt,c=Xn(),h=i(),x=!ri(c.memoizedState,h);if(x&&(c.memoizedState=h,Rn=!0),c=c.queue,Eu(xp.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,Ho(9,vp.bind(null,a,c,h,i),void 0,null),en===null)throw Error(t(349));(Vr&30)!==0||gp(a,i,h)}return h}function gp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function vp(n,i,a,c){i.value=a,i.getSnapshot=c,_p(i)&&yp(n)}function xp(n,i,a){return a(function(){_p(i)&&yp(n)})}function _p(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ri(n,a)}catch{return!0}}function yp(n){var i=ki(n,1);i!==null&&ci(i,n,1,-1)}function Sp(n){var i=Mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},i.queue=n,n=n.dispatch=Tx.bind(null,Bt,n),[i.memoizedState,n]}function Ho(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Mp(){return Xn().memoizedState}function Qa(n,i,a,c){var h=Mi();Bt.flags|=n,h.memoizedState=Ho(1|i,a,void 0,c===void 0?null:c)}function Ja(n,i,a,c){var h=Xn();c=c===void 0?null:c;var x=void 0;if(Yt!==null){var w=Yt.memoizedState;if(x=w.destroy,c!==null&&xu(c,w.deps)){h.memoizedState=Ho(i,a,x,c);return}}Bt.flags|=n,h.memoizedState=Ho(1|i,a,x,c)}function Ep(n,i){return Qa(8390656,8,n,i)}function Eu(n,i){return Ja(2048,8,n,i)}function Tp(n,i){return Ja(4,2,n,i)}function wp(n,i){return Ja(4,4,n,i)}function Rp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ap(n,i,a){return a=a!=null?a.concat([n]):null,Ja(4,4,Rp.bind(null,i,n),a)}function Tu(){}function Cp(n,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&xu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function bp(n,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&xu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Pp(n,i,a){return(Vr&21)===0?(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=a):(ri(a,i)||(a=vn(),Bt.lanes|=a,Gr|=a,n.baseState=!0),i)}function Mx(n,i){var a=bt;bt=a!==0&&4>a?a:4,n(!0);var c=vu.transition;vu.transition={};try{n(!1),i()}finally{bt=a,vu.transition=c}}function Lp(){return Xn().memoizedState}function Ex(n,i,a){var c=xr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Dp(n))Up(i,a);else if(a=cp(n,i,a,c),a!==null){var h=_n();ci(a,n,c,h),Np(a,i,c)}}function Tx(n,i,a){var c=xr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dp(n))Up(i,h);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var w=i.lastRenderedState,I=x(w,a);if(h.hasEagerState=!0,h.eagerState=I,ri(I,w)){var H=i.interleaved;H===null?(h.next=h,du(i)):(h.next=H.next,H.next=h),i.interleaved=h;return}}catch{}finally{}a=cp(n,i,h,c),a!==null&&(h=_n(),ci(a,n,c,h),Np(a,i,c))}}function Dp(n){var i=n.alternate;return n===Bt||i!==null&&i===Bt}function Up(n,i){ko=Za=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Np(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rc(n,a)}}var el={readContext:Wn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},wx={readContext:Wn,useCallback:function(n,i){return Mi().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:Ep,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Qa(4194308,4,Rp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Qa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Qa(4,2,n,i)},useMemo:function(n,i){var a=Mi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Mi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Ex.bind(null,Bt,n),[c.memoizedState,n]},useRef:function(n){var i=Mi();return n={current:n},i.memoizedState=n},useState:Sp,useDebugValue:Tu,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=Sp(!1),i=n[0];return n=Mx.bind(null,n[1]),Mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Bt,h=Mi();if(Ft){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),en===null)throw Error(t(349));(Vr&30)!==0||gp(c,i,a)}h.memoizedState=a;var x={value:a,getSnapshot:i};return h.queue=x,Ep(xp.bind(null,c,x,n),[n]),c.flags|=2048,Ho(9,vp.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=Mi(),i=en.identifierPrefix;if(Ft){var a=Oi,c=Fi;a=(c&~(1<<32-ut(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Bo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Sx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Rx={readContext:Wn,useCallback:Cp,useContext:Wn,useEffect:Eu,useImperativeHandle:Ap,useInsertionEffect:Tp,useLayoutEffect:wp,useMemo:bp,useReducer:Su,useRef:Mp,useState:function(){return Su(zo)},useDebugValue:Tu,useDeferredValue:function(n){var i=Xn();return Pp(i,Yt.memoizedState,n)},useTransition:function(){var n=Su(zo)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:pp,useSyncExternalStore:mp,useId:Lp,unstable_isNewReconciler:!1},Ax={readContext:Wn,useCallback:Cp,useContext:Wn,useEffect:Eu,useImperativeHandle:Ap,useInsertionEffect:Tp,useLayoutEffect:wp,useMemo:bp,useReducer:Mu,useRef:Mp,useState:function(){return Mu(zo)},useDebugValue:Tu,useDeferredValue:function(n){var i=Xn();return Yt===null?i.memoizedState=n:Pp(i,Yt.memoizedState,n)},useTransition:function(){var n=Mu(zo)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:pp,useSyncExternalStore:mp,useId:Lp,unstable_isNewReconciler:!1};function oi(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function wu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ce({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var tl={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=_n(),h=xr(n),x=Bi(c,h);x.payload=i,a!=null&&(x.callback=a),i=pr(n,x,h),i!==null&&(ci(i,n,h,c),$a(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=_n(),h=xr(n),x=Bi(c,h);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=pr(n,x,h),i!==null&&(ci(i,n,h,c),$a(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=_n(),c=xr(n),h=Bi(a,c);h.tag=2,i!=null&&(h.callback=i),i=pr(n,h,c),i!==null&&(ci(i,n,c,a),$a(i,n,c))}};function Ip(n,i,a,c,h,x,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,w):i.prototype&&i.prototype.isPureReactComponent?!Ao(a,c)||!Ao(h,x):!0}function Fp(n,i,a){var c=!1,h=dr,x=i.contextType;return typeof x=="object"&&x!==null?x=Wn(x):(h=wn(i)?Or:un.current,c=i.contextTypes,x=(c=c!=null)?Es(n,h):dr),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=x),i}function Op(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&tl.enqueueReplaceState(i,i.state,null)}function Ru(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},fu(n);var x=i.contextType;typeof x=="object"&&x!==null?h.context=Wn(x):(x=wn(i)?Or:un.current,h.context=Es(n,x)),h.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(wu(n,i,x,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&tl.enqueueReplaceState(h,h.state,null),Ya(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var a="",c=i;do a+=he(c),c=c.return;while(c);var h=a}catch(x){h=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:h,digest:null}}function Au(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Cu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Cx=typeof WeakMap=="function"?WeakMap:Map;function kp(n,i,a){a=Bi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ll||(ll=!0,Gu=c),Cu(n,i)},a}function Bp(n,i,a){a=Bi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Cu(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){Cu(n,i),typeof c!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function zp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Cx;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=Vx.bind(null,n,i,a),i.then(n,n))}function Hp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Vp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Bi(-1,1),i.tag=2,pr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var bx=b.ReactCurrentOwner,Rn=!1;function xn(n,i,a,c){i.child=n===null?lp(i,null,a,c):As(i,n.child,a,c)}function Gp(n,i,a,c,h){a=a.render;var x=i.ref;return bs(i,h),c=_u(n,i,a,c,x,h),a=yu(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,zi(n,i,h)):(Ft&&a&&nu(i),i.flags|=1,xn(n,i,c,h),i.child)}function jp(n,i,a,c,h){if(n===null){var x=a.type;return typeof x=="function"&&!Ku(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,Wp(n,i,x,c,h)):(n=pl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&h)===0){var w=x.memoizedProps;if(a=a.compare,a=a!==null?a:Ao,a(w,c)&&n.ref===i.ref)return zi(n,i,h)}return i.flags|=1,n=yr(x,c),n.ref=i.ref,n.return=i,i.child=n}function Wp(n,i,a,c,h){if(n!==null){var x=n.memoizedProps;if(Ao(x,c)&&n.ref===i.ref)if(Rn=!1,i.pendingProps=c=x,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Rn=!0);else return i.lanes=n.lanes,zi(n,i,h)}return bu(n,i,a,c,h)}function Xp(n,i,a){var c=i.pendingProps,h=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Us,kn),kn|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Dt(Us,kn),kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,Dt(Us,kn),kn|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,Dt(Us,kn),kn|=c;return xn(n,i,h,a),i.child}function $p(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function bu(n,i,a,c,h){var x=wn(a)?Or:un.current;return x=Es(i,x),bs(i,h),a=_u(n,i,a,c,x,h),c=yu(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,zi(n,i,h)):(Ft&&c&&nu(i),i.flags|=1,xn(n,i,a,h),i.child)}function Yp(n,i,a,c,h){if(wn(a)){var x=!0;Ba(i)}else x=!1;if(bs(i,h),i.stateNode===null)il(n,i),Fp(i,a,c),Ru(i,a,c,h),c=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var H=w.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=Wn(oe):(oe=wn(a)?Or:un.current,oe=Es(i,oe));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==c||H!==oe)&&Op(i,w,c,oe),hr=!1;var xe=i.memoizedState;w.state=xe,Ya(i,c,w,h),H=i.memoizedState,I!==c||xe!==H||Tn.current||hr?(typeof ye=="function"&&(wu(i,a,ye,c),H=i.memoizedState),(I=hr||Ip(i,a,I,c,xe,H,oe))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),w.props=c,w.state=H,w.context=oe,c=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,up(n,i),I=i.memoizedProps,oe=i.type===i.elementType?I:oi(i.type,I),w.props=oe,Se=i.pendingProps,xe=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=Wn(H):(H=wn(a)?Or:un.current,H=Es(i,H));var ze=a.getDerivedStateFromProps;(ye=typeof ze=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Se||xe!==H)&&Op(i,w,c,H),hr=!1,xe=i.memoizedState,w.state=xe,Ya(i,c,w,h);var We=i.memoizedState;I!==Se||xe!==We||Tn.current||hr?(typeof ze=="function"&&(wu(i,a,ze,c),We=i.memoizedState),(oe=hr||Ip(i,a,oe,c,xe,We,H)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,We,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,We,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=We),w.props=c,w.state=We,w.context=H,c=oe):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return Pu(n,i,a,c,x,h)}function Pu(n,i,a,c,h,x){$p(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return h&&Jh(i,a,!1),zi(n,i,x);c=i.stateNode,bx.current=i;var I=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=As(i,n.child,null,x),i.child=As(i,null,I,x)):xn(n,i,I,x),i.memoizedState=c.state,h&&Jh(i,a,!0),i.child}function qp(n){var i=n.stateNode;i.pendingContext?Zh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Zh(n,i.context,!1),hu(n,i.containerInfo)}function Kp(n,i,a,c,h){return Rs(),ou(h),i.flags|=256,xn(n,i,a,c),i.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Du(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zp(n,i,a){var c=i.pendingProps,h=kt.current,x=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(h&2)!==0),I?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Dt(kt,h&1),n===null)return su(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,x?(c=i.mode,x=i.child,w={mode:"hidden",children:w},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=w):x=ml(w,c,0,null),n=$r(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=Du(a),i.memoizedState=Lu,n):Uu(i,w));if(h=n.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return Px(n,i,w,c,I,h,a);if(x){x=c.fallback,w=i.mode,h=n.child,I=h.sibling;var H={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=yr(h,H),c.subtreeFlags=h.subtreeFlags&14680064),I!==null?x=yr(I,x):(x=$r(x,w,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,w=n.child.memoizedState,w=w===null?Du(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},x.memoizedState=w,x.childLanes=n.childLanes&~a,i.memoizedState=Lu,c}return x=n.child,n=x.sibling,c=yr(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Uu(n,i){return i=ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function nl(n,i,a,c){return c!==null&&ou(c),As(i,n.child,null,a),n=Uu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Px(n,i,a,c,h,x,w){if(a)return i.flags&256?(i.flags&=-257,c=Au(Error(t(422))),nl(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,h=i.mode,c=ml({mode:"visible",children:c.children},h,0,null),x=$r(x,h,w,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&As(i,n.child,null,w),i.child.memoizedState=Du(w),i.memoizedState=Lu,x);if((i.mode&1)===0)return nl(n,i,w,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var I=c.dgst;return c=I,x=Error(t(419)),c=Au(x,c,void 0),nl(n,i,w,c)}if(I=(w&n.childLanes)!==0,Rn||I){if(c=en,c!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|w))!==0?0:h,h!==0&&h!==x.retryLane&&(x.retryLane=h,ki(n,h),ci(c,n,h,-1))}return qu(),c=Au(Error(t(421))),nl(n,i,w,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Gx.bind(null,n),h._reactRetry=i,null):(n=x.treeContext,On=cr(h.nextSibling),Fn=i,Ft=!0,si=null,n!==null&&(Gn[jn++]=Fi,Gn[jn++]=Oi,Gn[jn++]=kr,Fi=n.id,Oi=n.overflow,kr=i),i=Uu(i,c.children),i.flags|=4096,i)}function Qp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),uu(n.return,i,a)}function Nu(n,i,a,c,h){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=h)}function Jp(n,i,a){var c=i.pendingProps,h=c.revealOrder,x=c.tail;if(xn(n,i,c.children,a),c=kt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qp(n,a,i);else if(n.tag===19)Qp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Dt(kt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&qa(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Nu(i,!1,h,a,x);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&qa(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Nu(i,!0,a,null,x);break;case"together":Nu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function il(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function zi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Gr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=yr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=yr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Lx(n,i,a){switch(i.tag){case 3:qp(i),Rs();break;case 5:hp(i);break;case 1:wn(i.type)&&Ba(i);break;case 4:hu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Dt(Wa,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Zp(n,i,a):(Dt(kt,kt.current&1),n=zi(n,i,a),n!==null?n.sibling:null);Dt(kt,kt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Jp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Dt(kt,kt.current),c)break;return null;case 22:case 23:return i.lanes=0,Xp(n,i,a)}return zi(n,i,a)}var em,Iu,tm,nm;em=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Iu=function(){},tm=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Hr(Si.current);var x=null;switch(a){case"input":h=q(n,h),c=q(n,c),x=[];break;case"select":h=ce({},h,{value:void 0}),c=ce({},c,{value:void 0}),x=[];break;case"textarea":h=R(n,h),c=R(n,c),x=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Fa)}pt(a,c);var w;a=null;for(oe in h)if(!c.hasOwnProperty(oe)&&h.hasOwnProperty(oe)&&h[oe]!=null)if(oe==="style"){var I=h[oe];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?x||(x=[]):(x=x||[]).push(oe,null));for(oe in c){var H=c[oe];if(I=h!=null?h[oe]:void 0,c.hasOwnProperty(oe)&&H!==I&&(H!=null||I!=null))if(oe==="style")if(I){for(w in I)!I.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&I[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(x||(x=[]),x.push(oe,a)),a=H;else oe==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(x=x||[]).push(oe,H)):oe==="children"?typeof H!="string"&&typeof H!="number"||(x=x||[]).push(oe,""+H):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(H!=null&&oe==="onScroll"&&Nt("scroll",n),x||I===H||(x=[])):(x=x||[]).push(oe,H))}a&&(x=x||[]).push("style",a);var oe=x;(i.updateQueue=oe)&&(i.flags|=4)}},nm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Vo(n,i){if(!Ft)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function fn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Dx(n,i,a){var c=i.pendingProps;switch(iu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return wn(i.type)&&ka(),fn(i),null;case 3:return c=i.stateNode,Ps(),It(Tn),It(un),gu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ga(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,si!==null&&(Xu(si),si=null))),Iu(n,i),fn(i),null;case 5:pu(i);var h=Hr(Oo.current);if(a=i.type,n!==null&&i.stateNode!=null)tm(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return fn(i),null}if(n=Hr(Si.current),Ga(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[yi]=i,c[Do]=x,n=(i.mode&1)!==0,a){case"dialog":Nt("cancel",c),Nt("close",c);break;case"iframe":case"object":case"embed":Nt("load",c);break;case"video":case"audio":for(h=0;h<bo.length;h++)Nt(bo[h],c);break;case"source":Nt("error",c);break;case"img":case"image":case"link":Nt("error",c),Nt("load",c);break;case"details":Nt("toggle",c);break;case"input":Qt(c,x),Nt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},Nt("invalid",c);break;case"textarea":ee(c,x),Nt("invalid",c)}pt(a,x),h=null;for(var w in x)if(x.hasOwnProperty(w)){var I=x[w];w==="children"?typeof I=="string"?c.textContent!==I&&(x.suppressHydrationWarning!==!0&&Ia(c.textContent,I,n),h=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(x.suppressHydrationWarning!==!0&&Ia(c.textContent,I,n),h=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Nt("scroll",c)}switch(a){case"input":Tt(c),Oe(c,x,!0);break;case"textarea":Tt(c),ve(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=Fa)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[yi]=i,n[Do]=c,em(n,i,!1,!1),i.stateNode=n;e:{switch(w=at(a,c),a){case"dialog":Nt("cancel",n),Nt("close",n),h=c;break;case"iframe":case"object":case"embed":Nt("load",n),h=c;break;case"video":case"audio":for(h=0;h<bo.length;h++)Nt(bo[h],n);h=c;break;case"source":Nt("error",n),h=c;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),h=c;break;case"details":Nt("toggle",n),h=c;break;case"input":Qt(n,c),h=q(n,c),Nt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=ce({},c,{value:void 0}),Nt("invalid",n);break;case"textarea":ee(n,c),h=R(n,c),Nt("invalid",n);break;default:h=c}pt(a,h),I=h;for(x in I)if(I.hasOwnProperty(x)){var H=I[x];x==="style"?nt(n,H):x==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Be(n,H)):x==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&ct(n,H):typeof H=="number"&&ct(n,""+H):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?H!=null&&x==="onScroll"&&Nt("scroll",n):H!=null&&L(n,x,H,w))}switch(a){case"input":Tt(n),Oe(n,c,!1);break;case"textarea":Tt(n),ve(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?D(n,!!c.multiple,x,!1):c.defaultValue!=null&&D(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Fa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(n&&i.stateNode!=null)nm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Hr(Oo.current),Hr(Si.current),Ga(i)){if(c=i.stateNode,a=i.memoizedProps,c[yi]=i,(x=c.nodeValue!==a)&&(n=Fn,n!==null))switch(n.tag){case 3:Ia(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ia(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[yi]=i,i.stateNode=c}return fn(i),null;case 13:if(It(kt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)sp(),Rs(),i.flags|=98560,x=!1;else if(x=Ga(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[yi]=i}else Rs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),x=!1}else si!==null&&(Xu(si),si=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(kt.current&1)!==0?qt===0&&(qt=3):qu())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return Ps(),Iu(n,i),n===null&&Po(i.stateNode.containerInfo),fn(i),null;case 10:return cu(i.type._context),fn(i),null;case 17:return wn(i.type)&&ka(),fn(i),null;case 19:if(It(kt),x=i.memoizedState,x===null)return fn(i),null;if(c=(i.flags&128)!==0,w=x.rendering,w===null)if(c)Vo(x,!1);else{if(qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=qa(n),w!==null){for(i.flags|=128,Vo(x,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,w=x.alternate,w===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=w.childLanes,x.lanes=w.lanes,x.child=w.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=w.memoizedProps,x.memoizedState=w.memoizedState,x.updateQueue=w.updateQueue,x.type=w.type,n=w.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Dt(kt,kt.current&1|2),i.child}n=n.sibling}x.tail!==null&&we()>Ns&&(i.flags|=128,c=!0,Vo(x,!1),i.lanes=4194304)}else{if(!c)if(n=qa(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Vo(x,!0),x.tail===null&&x.tailMode==="hidden"&&!w.alternate&&!Ft)return fn(i),null}else 2*we()-x.renderingStartTime>Ns&&a!==1073741824&&(i.flags|=128,c=!0,Vo(x,!1),i.lanes=4194304);x.isBackwards?(w.sibling=i.child,i.child=w):(a=x.last,a!==null?a.sibling=w:i.child=w,x.last=w)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=we(),i.sibling=null,a=kt.current,Dt(kt,c?a&1|2:a&1),i):(fn(i),null);case 22:case 23:return Yu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(kn&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Ux(n,i){switch(iu(i),i.tag){case 1:return wn(i.type)&&ka(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),It(Tn),It(un),gu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return pu(i),null;case 13:if(It(kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Rs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return It(kt),null;case 4:return Ps(),null;case 10:return cu(i.type._context),null;case 22:case 23:return Yu(),null;case 24:return null;default:return null}}var rl=!1,hn=!1,Nx=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ds(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ht(n,i,c)}else a.current=null}function Fu(n,i,a){try{a()}catch(c){Ht(n,i,c)}}var im=!1;function Ix(n,i){if(Yc=Ta,n=Ih(),zc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var w=0,I=-1,H=-1,oe=0,ye=0,Se=n,xe=null;t:for(;;){for(var ze;Se!==a||h!==0&&Se.nodeType!==3||(I=w+h),Se!==x||c!==0&&Se.nodeType!==3||(H=w+c),Se.nodeType===3&&(w+=Se.nodeValue.length),(ze=Se.firstChild)!==null;)xe=Se,Se=ze;for(;;){if(Se===n)break t;if(xe===a&&++oe===h&&(I=w),xe===x&&++ye===c&&(H=w),(ze=Se.nextSibling)!==null)break;Se=xe,xe=Se.parentNode}Se=ze}a=I===-1||H===-1?null:{start:I,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(qc={focusedElem:n,selectionRange:a},Ta=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var $e=We.memoizedProps,Gt=We.memoizedState,Q=i.stateNode,j=Q.getSnapshotBeforeUpdate(i.elementType===i.type?$e:oi(i.type,$e),Gt);Q.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Ht(i,i.return,Re)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return We=im,im=!1,We}function Go(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var x=h.destroy;h.destroy=void 0,x!==void 0&&Fu(i,a,x)}h=h.next}while(h!==c)}}function sl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ou(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function rm(n){var i=n.alternate;i!==null&&(n.alternate=null,rm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[yi],delete i[Do],delete i[Jc],delete i[vx],delete i[xx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function sm(n){return n.tag===5||n.tag===3||n.tag===4}function om(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ku(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Fa));else if(c!==4&&(n=n.child,n!==null))for(ku(n,i,a),n=n.sibling;n!==null;)ku(n,i,a),n=n.sibling}function Bu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Bu(n,i,a),n=n.sibling;n!==null;)Bu(n,i,a),n=n.sibling}var sn=null,ai=!1;function mr(n,i,a){for(a=a.child;a!==null;)am(n,i,a),a=a.sibling}function am(n,i,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(wt,a)}catch{}switch(a.tag){case 5:hn||Ds(a,i);case 6:var c=sn,h=ai;sn=null,mr(n,i,a),sn=c,ai=h,sn!==null&&(ai?(n=sn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ai?(n=sn,a=a.stateNode,n.nodeType===8?Qc(n.parentNode,a):n.nodeType===1&&Qc(n,a),So(n)):Qc(sn,a.stateNode));break;case 4:c=sn,h=ai,sn=a.stateNode.containerInfo,ai=!0,mr(n,i,a),sn=c,ai=h;break;case 0:case 11:case 14:case 15:if(!hn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var x=h,w=x.destroy;x=x.tag,w!==void 0&&((x&2)!==0||(x&4)!==0)&&Fu(a,i,w),h=h.next}while(h!==c)}mr(n,i,a);break;case 1:if(!hn&&(Ds(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Ht(a,i,I)}mr(n,i,a);break;case 21:mr(n,i,a);break;case 22:a.mode&1?(hn=(c=hn)||a.memoizedState!==null,mr(n,i,a),hn=c):mr(n,i,a);break;default:mr(n,i,a)}}function lm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Nx),i.forEach(function(c){var h=jx.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function li(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var x=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:sn=I.stateNode,ai=!1;break e;case 3:sn=I.stateNode.containerInfo,ai=!0;break e;case 4:sn=I.stateNode.containerInfo,ai=!0;break e}I=I.return}if(sn===null)throw Error(t(160));am(x,w,h),sn=null,ai=!1;var H=h.alternate;H!==null&&(H.return=null),h.return=null}catch(oe){Ht(h,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)cm(i,n),i=i.sibling}function cm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(li(i,n),Ei(n),c&4){try{Go(3,n,n.return),sl(3,n)}catch($e){Ht(n,n.return,$e)}try{Go(5,n,n.return)}catch($e){Ht(n,n.return,$e)}}break;case 1:li(i,n),Ei(n),c&512&&a!==null&&Ds(a,a.return);break;case 5:if(li(i,n),Ei(n),c&512&&a!==null&&Ds(a,a.return),n.flags&32){var h=n.stateNode;try{ct(h,"")}catch($e){Ht(n,n.return,$e)}}if(c&4&&(h=n.stateNode,h!=null)){var x=n.memoizedProps,w=a!==null?a.memoizedProps:x,I=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{I==="input"&&x.type==="radio"&&x.name!=null&&Te(h,x),at(I,w);var oe=at(I,x);for(w=0;w<H.length;w+=2){var ye=H[w],Se=H[w+1];ye==="style"?nt(h,Se):ye==="dangerouslySetInnerHTML"?Be(h,Se):ye==="children"?ct(h,Se):L(h,ye,Se,oe)}switch(I){case"input":Le(h,x);break;case"textarea":me(h,x);break;case"select":var xe=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!x.multiple;var ze=x.value;ze!=null?D(h,!!x.multiple,ze,!1):xe!==!!x.multiple&&(x.defaultValue!=null?D(h,!!x.multiple,x.defaultValue,!0):D(h,!!x.multiple,x.multiple?[]:"",!1))}h[Do]=x}catch($e){Ht(n,n.return,$e)}}break;case 6:if(li(i,n),Ei(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,x=n.memoizedProps;try{h.nodeValue=x}catch($e){Ht(n,n.return,$e)}}break;case 3:if(li(i,n),Ei(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{So(i.containerInfo)}catch($e){Ht(n,n.return,$e)}break;case 4:li(i,n),Ei(n);break;case 13:li(i,n),Ei(n),h=n.child,h.flags&8192&&(x=h.memoizedState!==null,h.stateNode.isHidden=x,!x||h.alternate!==null&&h.alternate.memoizedState!==null||(Vu=we())),c&4&&lm(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(hn=(oe=hn)||ye,li(i,n),hn=oe):li(i,n),Ei(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!ye&&(n.mode&1)!==0)for(Ve=n,ye=n.child;ye!==null;){for(Se=Ve=ye;Ve!==null;){switch(xe=Ve,ze=xe.child,xe.tag){case 0:case 11:case 14:case 15:Go(4,xe,xe.return);break;case 1:Ds(xe,xe.return);var We=xe.stateNode;if(typeof We.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch($e){Ht(c,a,$e)}}break;case 5:Ds(xe,xe.return);break;case 22:if(xe.memoizedState!==null){fm(Se);continue}}ze!==null?(ze.return=xe,Ve=ze):fm(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{h=Se.stateNode,oe?(x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(I=Se.stateNode,H=Se.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=tt("display",w))}catch($e){Ht(n,n.return,$e)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=oe?"":Se.memoizedProps}catch($e){Ht(n,n.return,$e)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:li(i,n),Ei(n),c&4&&lm(n);break;case 21:break;default:li(i,n),Ei(n)}}function Ei(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(sm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(ct(h,""),c.flags&=-33);var x=om(n);Bu(n,x,h);break;case 3:case 4:var w=c.stateNode.containerInfo,I=om(n);ku(n,I,w);break;default:throw Error(t(161))}}catch(H){Ht(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Fx(n,i,a){Ve=n,um(n)}function um(n,i,a){for(var c=(n.mode&1)!==0;Ve!==null;){var h=Ve,x=h.child;if(h.tag===22&&c){var w=h.memoizedState!==null||rl;if(!w){var I=h.alternate,H=I!==null&&I.memoizedState!==null||hn;I=rl;var oe=hn;if(rl=w,(hn=H)&&!oe)for(Ve=h;Ve!==null;)w=Ve,H=w.child,w.tag===22&&w.memoizedState!==null?hm(h):H!==null?(H.return=w,Ve=H):hm(h);for(;x!==null;)Ve=x,um(x),x=x.sibling;Ve=h,rl=I,hn=oe}dm(n)}else(h.subtreeFlags&8772)!==0&&x!==null?(x.return=h,Ve=x):dm(n)}}function dm(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||sl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!hn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&fp(i,x,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}fp(i,w,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var ye=oe.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&So(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}hn||i.flags&512&&Ou(i)}catch(xe){Ht(i,i.return,xe)}}if(i===n){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function fm(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function hm(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{sl(4,i)}catch(H){Ht(i,a,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(H){Ht(i,h,H)}}var x=i.return;try{Ou(i)}catch(H){Ht(i,x,H)}break;case 5:var w=i.return;try{Ou(i)}catch(H){Ht(i,w,H)}}}catch(H){Ht(i,i.return,H)}if(i===n){Ve=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ve=I;break}Ve=i.return}}var Ox=Math.ceil,ol=b.ReactCurrentDispatcher,zu=b.ReactCurrentOwner,$n=b.ReactCurrentBatchConfig,yt=0,en=null,jt=null,on=0,kn=0,Us=ur(0),qt=0,jo=null,Gr=0,al=0,Hu=0,Wo=null,An=null,Vu=0,Ns=1/0,Hi=null,ll=!1,Gu=null,gr=null,cl=!1,vr=null,ul=0,Xo=0,ju=null,dl=-1,fl=0;function _n(){return(yt&6)!==0?we():dl!==-1?dl:dl=we()}function xr(n){return(n.mode&1)===0?1:(yt&2)!==0&&on!==0?on&-on:yx.transition!==null?(fl===0&&(fl=vn()),fl):(n=bt,n!==0||(n=window.event,n=n===void 0?16:mh(n.type)),n)}function ci(n,i,a,c){if(50<Xo)throw Xo=0,ju=null,Error(t(185));En(n,a,c),((yt&2)===0||n!==en)&&(n===en&&((yt&2)===0&&(al|=a),qt===4&&_r(n,on)),Cn(n,c),a===1&&yt===0&&(i.mode&1)===0&&(Ns=we()+500,za&&fr()))}function Cn(n,i){var a=n.callbackNode;Hn(n,i);var c=_i(n,n===en?on:0);if(c===0)a!==null&&le(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&le(a),i===1)n.tag===0?_x(mm.bind(null,n)):ep(mm.bind(null,n)),mx(function(){(yt&6)===0&&fr()}),a=null;else{switch(ah(c)){case 1:a=Xe;break;case 4:a=it;break;case 16:a=st;break;case 536870912:a=vt;break;default:a=st}a=Em(a,pm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function pm(n,i){if(dl=-1,fl=0,(yt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Is()&&n.callbackNode!==a)return null;var c=_i(n,n===en?on:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=hl(n,c);else{i=c;var h=yt;yt|=2;var x=vm();(en!==n||on!==i)&&(Hi=null,Ns=we()+500,Wr(n,i));do try{zx();break}catch(I){gm(n,I)}while(!0);lu(),ol.current=x,yt=h,jt!==null?i=0:(en=null,on=0,i=qt)}if(i!==0){if(i===2&&(h=Ui(n),h!==0&&(c=h,i=Wu(n,h))),i===1)throw a=jo,Wr(n,0),_r(n,c),Cn(n,we()),a;if(i===6)_r(n,c);else{if(h=n.current.alternate,(c&30)===0&&!kx(h)&&(i=hl(n,c),i===2&&(x=Ui(n),x!==0&&(c=x,i=Wu(n,x))),i===1))throw a=jo,Wr(n,0),_r(n,c),Cn(n,we()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Xr(n,An,Hi);break;case 3:if(_r(n,c),(c&130023424)===c&&(i=Vu+500-we(),10<i)){if(_i(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){_n(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Zc(Xr.bind(null,n,An,Hi),i);break}Xr(n,An,Hi);break;case 4:if(_r(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var w=31-ut(c);x=1<<w,w=i[w],w>h&&(h=w),c&=~x}if(c=h,c=we()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Ox(c/1960))-c,10<c){n.timeoutHandle=Zc(Xr.bind(null,n,An,Hi),c);break}Xr(n,An,Hi);break;case 5:Xr(n,An,Hi);break;default:throw Error(t(329))}}}return Cn(n,we()),n.callbackNode===a?pm.bind(null,n):null}function Wu(n,i){var a=Wo;return n.current.memoizedState.isDehydrated&&(Wr(n,i).flags|=256),n=hl(n,i),n!==2&&(i=An,An=a,i!==null&&Xu(i)),n}function Xu(n){An===null?An=n:An.push.apply(An,n)}function kx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],x=h.getSnapshot;h=h.value;try{if(!ri(x(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _r(n,i){for(i&=~Hu,i&=~al,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ut(i),c=1<<a;n[a]=-1,i&=~c}}function mm(n){if((yt&6)!==0)throw Error(t(327));Is();var i=_i(n,0);if((i&1)===0)return Cn(n,we()),null;var a=hl(n,i);if(n.tag!==0&&a===2){var c=Ui(n);c!==0&&(i=c,a=Wu(n,c))}if(a===1)throw a=jo,Wr(n,0),_r(n,i),Cn(n,we()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Xr(n,An,Hi),Cn(n,we()),null}function $u(n,i){var a=yt;yt|=1;try{return n(i)}finally{yt=a,yt===0&&(Ns=we()+500,za&&fr())}}function jr(n){vr!==null&&vr.tag===0&&(yt&6)===0&&Is();var i=yt;yt|=1;var a=$n.transition,c=bt;try{if($n.transition=null,bt=1,n)return n()}finally{bt=c,$n.transition=a,yt=i,(yt&6)===0&&fr()}}function Yu(){kn=Us.current,It(Us)}function Wr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,px(a)),jt!==null)for(a=jt.return;a!==null;){var c=a;switch(iu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ka();break;case 3:Ps(),It(Tn),It(un),gu();break;case 5:pu(c);break;case 4:Ps();break;case 13:It(kt);break;case 19:It(kt);break;case 10:cu(c.type._context);break;case 22:case 23:Yu()}a=a.return}if(en=n,jt=n=yr(n.current,null),on=kn=i,qt=0,jo=null,Hu=al=Gr=0,An=Wo=null,zr!==null){for(i=0;i<zr.length;i++)if(a=zr[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,x=a.pending;if(x!==null){var w=x.next;x.next=h,c.next=w}a.pending=c}zr=null}return n}function gm(n,i){do{var a=jt;try{if(lu(),Ka.current=el,Za){for(var c=Bt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Za=!1}if(Vr=0,Jt=Yt=Bt=null,ko=!1,Bo=0,zu.current=null,a===null||a.return===null){qt=1,jo=i,jt=null;break}e:{var x=n,w=a.return,I=a,H=i;if(i=on,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var oe=H,ye=I,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ze=Hp(w);if(ze!==null){ze.flags&=-257,Vp(ze,w,I,x,i),ze.mode&1&&zp(x,oe,i),i=ze,H=oe;var We=i.updateQueue;if(We===null){var $e=new Set;$e.add(H),i.updateQueue=$e}else We.add(H);break e}else{if((i&1)===0){zp(x,oe,i),qu();break e}H=Error(t(426))}}else if(Ft&&I.mode&1){var Gt=Hp(w);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Vp(Gt,w,I,x,i),ou(Ls(H,I));break e}}x=H=Ls(H,I),qt!==4&&(qt=2),Wo===null?Wo=[x]:Wo.push(x),x=w;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var Q=kp(x,H,i);dp(x,Q);break e;case 1:I=H;var j=x.type,te=x.stateNode;if((x.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(gr===null||!gr.has(te)))){x.flags|=65536,i&=-i,x.lanes|=i;var Re=Bp(x,I,i);dp(x,Re);break e}}x=x.return}while(x!==null)}_m(a)}catch(Ke){i=Ke,jt===a&&a!==null&&(jt=a=a.return);continue}break}while(!0)}function vm(){var n=ol.current;return ol.current=el,n===null?el:n}function qu(){(qt===0||qt===3||qt===2)&&(qt=4),en===null||(Gr&268435455)===0&&(al&268435455)===0||_r(en,on)}function hl(n,i){var a=yt;yt|=2;var c=vm();(en!==n||on!==i)&&(Hi=null,Wr(n,i));do try{Bx();break}catch(h){gm(n,h)}while(!0);if(lu(),yt=a,ol.current=c,jt!==null)throw Error(t(261));return en=null,on=0,qt}function Bx(){for(;jt!==null;)xm(jt)}function zx(){for(;jt!==null&&!Z();)xm(jt)}function xm(n){var i=Mm(n.alternate,n,kn);n.memoizedProps=n.pendingProps,i===null?_m(n):jt=i,zu.current=null}function _m(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Dx(a,i,kn),a!==null){jt=a;return}}else{if(a=Ux(a,i),a!==null){a.flags&=32767,jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{qt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=n}while(i!==null);qt===0&&(qt=5)}function Xr(n,i,a){var c=bt,h=$n.transition;try{$n.transition=null,bt=1,Hx(n,i,a,c)}finally{$n.transition=h,bt=c}return null}function Hx(n,i,a,c){do Is();while(vr!==null);if((yt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(Sa(n,x),n===en&&(jt=en=null,on=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cl||(cl=!0,Em(st,function(){return Is(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=$n.transition,$n.transition=null;var w=bt;bt=1;var I=yt;yt|=4,zu.current=null,Ix(n,a),cm(a,n),ax(qc),Ta=!!Yc,qc=Yc=null,n.current=a,Fx(a),Ae(),yt=I,bt=w,$n.transition=x}else n.current=a;if(cl&&(cl=!1,vr=n,ul=h),x=n.pendingLanes,x===0&&(gr=null),ln(a.stateNode),Cn(n,we()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(ll)throw ll=!1,n=Gu,Gu=null,n;return(ul&1)!==0&&n.tag!==0&&Is(),x=n.pendingLanes,(x&1)!==0?n===ju?Xo++:(Xo=0,ju=n):Xo=0,fr(),null}function Is(){if(vr!==null){var n=ah(ul),i=$n.transition,a=bt;try{if($n.transition=null,bt=16>n?16:n,vr===null)var c=!1;else{if(n=vr,vr=null,ul=0,(yt&6)!==0)throw Error(t(331));var h=yt;for(yt|=4,Ve=n.current;Ve!==null;){var x=Ve,w=x.child;if((Ve.flags&16)!==0){var I=x.deletions;if(I!==null){for(var H=0;H<I.length;H++){var oe=I[H];for(Ve=oe;Ve!==null;){var ye=Ve;switch(ye.tag){case 0:case 11:case 15:Go(8,ye,x)}var Se=ye.child;if(Se!==null)Se.return=ye,Ve=Se;else for(;Ve!==null;){ye=Ve;var xe=ye.sibling,ze=ye.return;if(rm(ye),ye===oe){Ve=null;break}if(xe!==null){xe.return=ze,Ve=xe;break}Ve=ze}}}var We=x.alternate;if(We!==null){var $e=We.child;if($e!==null){We.child=null;do{var Gt=$e.sibling;$e.sibling=null,$e=Gt}while($e!==null)}}Ve=x}}if((x.subtreeFlags&2064)!==0&&w!==null)w.return=x,Ve=w;else e:for(;Ve!==null;){if(x=Ve,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Go(9,x,x.return)}var Q=x.sibling;if(Q!==null){Q.return=x.return,Ve=Q;break e}Ve=x.return}}var j=n.current;for(Ve=j;Ve!==null;){w=Ve;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,Ve=te;else e:for(w=j;Ve!==null;){if(I=Ve,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:sl(9,I)}}catch(Ke){Ht(I,I.return,Ke)}if(I===w){Ve=null;break e}var Re=I.sibling;if(Re!==null){Re.return=I.return,Ve=Re;break e}Ve=I.return}}if(yt=h,fr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(wt,n)}catch{}c=!0}return c}finally{bt=a,$n.transition=i}}return!1}function ym(n,i,a){i=Ls(a,i),i=kp(n,i,1),n=pr(n,i,1),i=_n(),n!==null&&(En(n,1,i),Cn(n,i))}function Ht(n,i,a){if(n.tag===3)ym(n,n,a);else for(;i!==null;){if(i.tag===3){ym(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(gr===null||!gr.has(c))){n=Ls(a,n),n=Bp(i,n,1),i=pr(i,n,1),n=_n(),i!==null&&(En(i,1,n),Cn(i,n));break}}i=i.return}}function Vx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=_n(),n.pingedLanes|=n.suspendedLanes&a,en===n&&(on&a)===a&&(qt===4||qt===3&&(on&130023424)===on&&500>we()-Vu?Wr(n,0):Hu|=a),Cn(n,i)}function Sm(n,i){i===0&&((n.mode&1)===0?i=1:(i=ii,ii<<=1,(ii&130023424)===0&&(ii=4194304)));var a=_n();n=ki(n,i),n!==null&&(En(n,i,a),Cn(n,a))}function Gx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Sm(n,a)}function jx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Sm(n,a)}var Mm;Mm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Tn.current)Rn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Rn=!1,Lx(n,i,a);Rn=(n.flags&131072)!==0}else Rn=!1,Ft&&(i.flags&1048576)!==0&&tp(i,Va,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;il(n,i),n=i.pendingProps;var h=Es(i,un.current);bs(i,a),h=_u(null,i,c,n,h,a);var x=yu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(c)?(x=!0,Ba(i)):x=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,fu(i),h.updater=tl,i.stateNode=h,h._reactInternals=i,Ru(i,c,n,a),i=Pu(null,i,c,!0,x,a)):(i.tag=0,Ft&&x&&nu(i),xn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(il(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=Xx(c),n=oi(c,n),h){case 0:i=bu(null,i,c,n,a);break e;case 1:i=Yp(null,i,c,n,a);break e;case 11:i=Gp(null,i,c,n,a);break e;case 14:i=jp(null,i,c,oi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),bu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),Yp(n,i,c,h,a);case 3:e:{if(qp(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,h=x.element,up(n,i),Ya(i,c,null,a);var w=i.memoizedState;if(c=w.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){h=Ls(Error(t(423)),i),i=Kp(n,i,c,a,h);break e}else if(c!==h){h=Ls(Error(t(424)),i),i=Kp(n,i,c,a,h);break e}else for(On=cr(i.stateNode.containerInfo.firstChild),Fn=i,Ft=!0,si=null,a=lp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),c===h){i=zi(n,i,a);break e}xn(n,i,c,a)}i=i.child}return i;case 5:return hp(i),n===null&&su(i),c=i.type,h=i.pendingProps,x=n!==null?n.memoizedProps:null,w=h.children,Kc(c,h)?w=null:x!==null&&Kc(c,x)&&(i.flags|=32),$p(n,i),xn(n,i,w,a),i.child;case 6:return n===null&&su(i),null;case 13:return Zp(n,i,a);case 4:return hu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=As(i,null,c,a):xn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),Gp(n,i,c,h,a);case 7:return xn(n,i,i.pendingProps,a),i.child;case 8:return xn(n,i,i.pendingProps.children,a),i.child;case 12:return xn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,x=i.memoizedProps,w=h.value,Dt(Wa,c._currentValue),c._currentValue=w,x!==null)if(ri(x.value,w)){if(x.children===h.children&&!Tn.current){i=zi(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var I=x.dependencies;if(I!==null){w=x.child;for(var H=I.firstContext;H!==null;){if(H.context===c){if(x.tag===1){H=Bi(-1,a&-a),H.tag=2;var oe=x.updateQueue;if(oe!==null){oe=oe.shared;var ye=oe.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),oe.pending=H}}x.lanes|=a,H=x.alternate,H!==null&&(H.lanes|=a),uu(x.return,a,i),I.lanes|=a;break}H=H.next}}else if(x.tag===10)w=x.type===i.type?null:x.child;else if(x.tag===18){if(w=x.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),uu(w,a,i),w=x.sibling}else w=x.child;if(w!==null)w.return=x;else for(w=x;w!==null;){if(w===i){w=null;break}if(x=w.sibling,x!==null){x.return=w.return,w=x;break}w=w.return}x=w}xn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,bs(i,a),h=Wn(h),c=c(h),i.flags|=1,xn(n,i,c,a),i.child;case 14:return c=i.type,h=oi(c,i.pendingProps),h=oi(c.type,h),jp(n,i,c,h,a);case 15:return Wp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),il(n,i),i.tag=1,wn(c)?(n=!0,Ba(i)):n=!1,bs(i,a),Fp(i,c,h),Ru(i,c,h,a),Pu(null,i,c,!0,n,a);case 19:return Jp(n,i,a);case 22:return Xp(n,i,a)}throw Error(t(156,i.tag))};function Em(n,i){return ae(n,i)}function Wx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,i,a,c){return new Wx(n,i,a,c)}function Ku(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Xx(n){if(typeof n=="function")return Ku(n)?1:0;if(n!=null){if(n=n.$$typeof,n===fe)return 11;if(n===G)return 14}return 2}function yr(n,i){var a=n.alternate;return a===null?(a=Yn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function pl(n,i,a,c,h,x){var w=2;if(c=n,typeof n=="function")Ku(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case k:return $r(a.children,h,x,i);case Y:w=8,h|=8;break;case P:return n=Yn(12,a,i,h|2),n.elementType=P,n.lanes=x,n;case W:return n=Yn(13,a,i,h),n.elementType=W,n.lanes=x,n;case ie:return n=Yn(19,a,i,h),n.elementType=ie,n.lanes=x,n;case J:return ml(a,h,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:w=10;break e;case V:w=9;break e;case fe:w=11;break e;case G:w=14;break e;case X:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Yn(w,a,i,h),i.elementType=n,i.type=c,i.lanes=x,i}function $r(n,i,a,c){return n=Yn(7,n,c,i),n.lanes=a,n}function ml(n,i,a,c){return n=Yn(22,n,c,i),n.elementType=J,n.lanes=a,n.stateNode={isHidden:!1},n}function Zu(n,i,a){return n=Yn(6,n,null,i),n.lanes=a,n}function Qu(n,i,a){return i=Yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function $x(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vn(0),this.expirationTimes=Vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Ju(n,i,a,c,h,x,w,I,H){return n=new $x(n,i,a,I,H),i===1?(i=1,x===!0&&(i|=8)):i=0,x=Yn(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},fu(x),n}function Yx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Tm(n){if(!n)return dr;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(wn(a))return Qh(n,a,i)}return i}function wm(n,i,a,c,h,x,w,I,H){return n=Ju(a,c,!0,n,h,x,w,I,H),n.context=Tm(null),a=n.current,c=_n(),h=xr(a),x=Bi(c,h),x.callback=i??null,pr(a,x,h),n.current.lanes=h,En(n,h,c),Cn(n,c),n}function gl(n,i,a,c){var h=i.current,x=_n(),w=xr(h);return a=Tm(a),i.context===null?i.context=a:i.pendingContext=a,i=Bi(x,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=pr(h,i,w),n!==null&&(ci(n,h,w,x),$a(n,h,w)),w}function vl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Rm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ed(n,i){Rm(n,i),(n=n.alternate)&&Rm(n,i)}function qx(){return null}var Am=typeof reportError=="function"?reportError:function(n){console.error(n)};function td(n){this._internalRoot=n}xl.prototype.render=td.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));gl(n,i,null,null)},xl.prototype.unmount=td.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;jr(function(){gl(null,n,null,null)}),i[Ni]=null}};function xl(n){this._internalRoot=n}xl.prototype.unstable_scheduleHydration=function(n){if(n){var i=uh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<or.length&&i!==0&&i<or[a].priority;a++);or.splice(a,0,n),a===0&&hh(n)}};function nd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Cm(){}function Kx(n,i,a,c,h){if(h){if(typeof c=="function"){var x=c;c=function(){var oe=vl(w);x.call(oe)}}var w=wm(i,c,n,0,null,!1,!1,"",Cm);return n._reactRootContainer=w,n[Ni]=w.current,Po(n.nodeType===8?n.parentNode:n),jr(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var I=c;c=function(){var oe=vl(H);I.call(oe)}}var H=Ju(n,0,!1,null,null,!1,!1,"",Cm);return n._reactRootContainer=H,n[Ni]=H.current,Po(n.nodeType===8?n.parentNode:n),jr(function(){gl(i,H,a,c)}),H}function yl(n,i,a,c,h){var x=a._reactRootContainer;if(x){var w=x;if(typeof h=="function"){var I=h;h=function(){var H=vl(w);I.call(H)}}gl(i,w,n,h)}else w=Kx(a,i,n,h,c);return vl(w)}lh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=$t(i.pendingLanes);a!==0&&(Rc(i,a|1),Cn(i,we()),(yt&6)===0&&(Ns=we()+500,fr()))}break;case 13:jr(function(){var c=ki(n,1);if(c!==null){var h=_n();ci(c,n,1,h)}}),ed(n,1)}},Ac=function(n){if(n.tag===13){var i=ki(n,134217728);if(i!==null){var a=_n();ci(i,n,134217728,a)}ed(n,134217728)}},ch=function(n){if(n.tag===13){var i=xr(n),a=ki(n,i);if(a!==null){var c=_n();ci(a,n,i,c)}ed(n,i)}},uh=function(){return bt},dh=function(n,i){var a=bt;try{return bt=n,i()}finally{bt=a}},De=function(n,i,a){switch(i){case"input":if(Le(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Oa(c);if(!h)throw Error(t(90));ht(c),Le(c,h)}}}break;case"textarea":me(n,a);break;case"select":i=a.value,i!=null&&D(n,!!a.multiple,i,!1)}},Ut=$u,Xt=jr;var Zx={usingClientEntryPoint:!1,Events:[Uo,Ss,Oa,Ne,lt,$u]},$o={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qx={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=A(n),n===null?null:n.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{wt=Sl.inject(Qx),gt=Sl}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zx,bn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(i))throw Error(t(200));return Yx(n,i,null,a)},bn.createRoot=function(n,i){if(!nd(n))throw Error(t(299));var a=!1,c="",h=Am;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Ju(n,1,!1,null,null,a,!1,c,h),n[Ni]=i.current,Po(n.nodeType===8?n.parentNode:n),new td(i)},bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=A(i),n=n===null?null:n.stateNode,n},bn.flushSync=function(n){return jr(n)},bn.hydrate=function(n,i,a){if(!_l(i))throw Error(t(200));return yl(null,n,i,!0,a)},bn.hydrateRoot=function(n,i,a){if(!nd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,x="",w=Am;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=wm(i,null,n,1,a??null,h,!1,x,w),n[Ni]=i.current,Po(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new xl(i)},bn.render=function(n,i,a){if(!_l(i))throw Error(t(200));return yl(null,n,i,!1,a)},bn.unmountComponentAtNode=function(n){if(!_l(n))throw Error(t(40));return n._reactRootContainer?(jr(function(){yl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},bn.unstable_batchedUpdates=$u,bn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!_l(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yl(n,i,a,!1,c)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var Fm;function a_(){if(Fm)return sd.exports;Fm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),sd.exports=o_(),sd.exports}var Om;function l_(){if(Om)return El;Om=1;var r=a_();return El.createRoot=r.createRoot,El.hydrateRoot=r.hydrateRoot,El}var c_=l_();/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hf=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,pv=/^[\\/]{2}/;function u_(r,e){return e+r.replace(/\\/g,"/")}var km="popstate";function Bm(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function d_(r={}){function e(o,l){let{pathname:u="/",search:d="",hash:f=""}=ds(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Xd("",{pathname:u,search:d,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let u=o.document.querySelector("base"),d="";if(u&&u.getAttribute("href")){let f=o.location.href,p=f.indexOf("#");d=p===-1?f:f.slice(0,p)}return d+"#"+(typeof l=="string"?l:la(l))}function s(o,l){gi(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return h_(e,t,s,r)}function zt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function gi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function f_(){return Math.random().toString(36).substring(2,10)}function zm(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Xd(r,e,t=null,s,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ds(e):e,state:t,key:e&&e.key||s||f_(),mask:o}}function la({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function ds(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function h_(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,u=o.history,d="POP",f=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function v(){d="POP";let S=g(),_=S==null?null:S-p;p=S,f&&f({action:d,location:T.location,delta:_})}function y(S,_){d="PUSH";let U=Bm(S)?S:Xd(T.location,S,_);t&&t(U,S),p=g()+1;let L=zm(U,p),b=T.createHref(U.mask||U);try{u.pushState(L,"",b)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;o.location.assign(b)}l&&f&&f({action:d,location:T.location,delta:1})}function M(S,_){d="REPLACE";let U=Bm(S)?S:Xd(T.location,S,_);t&&t(U,S),p=g();let L=zm(U,p),b=T.createHref(U.mask||U);u.replaceState(L,"",b),l&&f&&f({action:d,location:T.location,delta:0})}function E(S){return p_(o,S)}let T={get action(){return d},get location(){return r(o,u)},listen(S){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(km,v),f=S,()=>{o.removeEventListener(km,v),f=null}},createHref(S){return e(o,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:M,go(S){return u.go(S)}};return T}function p_(r,e,t=!1){let s="http://localhost";r&&(s=r.location.origin!=="null"?r.location.origin:r.location.href),zt(s,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:la(e);return o=o.replace(/ $/,"%20"),!t&&pv.test(o)&&(o=s+o),new URL(o,s)}function mv(r,e,t="/"){return m_(r,e,t,!1)}function m_(r,e,t,s,o){let l=typeof e=="string"?ds(e):e,u=Qi(l.pathname||"/",t);if(u==null)return null;let d=g_(r),f=null,p=A_(u);for(let g=0;f==null&&g<d.length;++g)f=R_(d[g],p,s);return f}function g_(r){let e=gv(r);return v_(e),e}function gv(r,e=[],t=[],s="",o=!1){let l=(u,d,f=o,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&f)return;zt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let v=pi([s,g.relativePath]),y=t.concat(g);u.children&&u.children.length>0&&(zt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),gv(u.children,e,y,v,f)),!(u.path==null&&!u.index)&&e.push({path:v,score:T_(v,u.index),routesMeta:y.map((M,E)=>{let[T,S]=_v(M.relativePath,M.caseSensitive,E===y.length-1);return{...M,matcher:T,compiledParams:S}})})};return r.forEach((u,d)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))l(u,d);else for(let p of vv(u.path))l(u,d,!0,p)}),e}function vv(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let u=vv(s.join("/")),d=[];return d.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&d.push(...u),d.map(f=>r.startsWith("/")&&f===""?"/":f)}function v_(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:w_(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var x_=/^:[\w-]+$/,__=3,y_=2,S_=1,M_=10,E_=-2,Hm=r=>r==="*";function T_(r,e){let t=r.split("/"),s=t.length;return t.some(Hm)&&(s+=E_),e&&(s+=y_),t.filter(o=>!Hm(o)).reduce((o,l)=>o+(x_.test(l)?__:l===""?S_:M_),s)}function w_(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function R_(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",u=[];for(let d=0;d<s.length;++d){let f=s[d],p=d===s.length-1,g=l==="/"?e:e.slice(l.length)||"/",v={path:f.relativePath,caseSensitive:f.caseSensitive,end:p},y=f.matcher&&f.compiledParams?xv(v,g,f.matcher,f.compiledParams):dc(v,g),M=f.route;if(!y&&p&&t&&!s[s.length-1].route.index&&(y=dc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},g)),!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:pi([l,y.pathname]),pathnameBase:P_(pi([l,y.pathnameBase])),route:M}),y.pathnameBase!=="/"&&(l=pi([l,y.pathnameBase]))}return u}function dc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=_v(r.path,r.caseSensitive,r.end);return xv(r,e,t,s)}function xv(r,e,t,s){let o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((p,{paramName:g,isOptional:v},y)=>{if(g==="*"){let E=d[y]||"";u=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[y];return v&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:r}}function _v(r,e=!1,t=!0){gi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f,p,g)=>{if(s.push({paramName:d,isOptional:f!=null}),f){let v=g.charAt(p+u.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function A_(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Qi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function C_(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?ds(r):r,l;return t?(t=Sv(t),t.startsWith("/")?l=Vm(t.substring(1),"/"):l=Vm(t,e)):l=e,{pathname:l,search:L_(s),hash:D_(o)}}function Vm(r,e){let t=fc(e).split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ld(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function b_(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function yv(r){let e=b_(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Vf(r,e,t,s=!1){let o;typeof r=="string"?o=ds(r):(o={...r},zt(!o.pathname||!o.pathname.includes("?"),ld("?","pathname","search",o)),zt(!o.pathname||!o.pathname.includes("#"),ld("#","pathname","hash",o)),zt(!o.search||!o.search.includes("#"),ld("#","search","hash",o)));let l=r===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=t;else{let v=e.length-1;if(!s&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),v-=1;o.pathname=y.join("/")}d=v>=0?e[v]:"/"}let f=C_(o,d),p=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||g)&&(f.pathname+="/"),f}var Sv=r=>r.replace(/[\\/]{2,}/g,"/"),pi=r=>Sv(r.join("/")),fc=r=>r.replace(/\/+$/,""),P_=r=>fc(r).replace(/^\/*/,"/"),L_=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,D_=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,U_=class{constructor(r,e,t,s=!1){this.status=r,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function N_(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function I_(r){let e=r.map(t=>t.route.path).filter(Boolean);return pi(e)||"/"}var Mv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ev(r,e){let t=r;if(typeof t!="string"||!Hf.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(Mv)try{let l=new URL(window.location.href),u=pv.test(t)?new URL(u_(t,l.protocol)):new URL(t),d=Qi(u.pathname,e);u.origin===l.origin&&d!=null?t=d+u.search+u.hash:o=!0}catch{gi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Tv=["POST","PUT","PATCH","DELETE"];new Set(Tv);var F_=["GET",...Tv];new Set(F_);var O_=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function k_(r){try{return O_.includes(new URL(r).protocol)}catch{return!1}}var uo=z.createContext(null);uo.displayName="DataRouter";var vc=z.createContext(null);vc.displayName="DataRouterState";var wv=z.createContext(!1);function B_(){return z.useContext(wv)}var Rv=z.createContext({isTransitioning:!1});Rv.displayName="ViewTransition";var z_=z.createContext(new Map);z_.displayName="Fetchers";var H_=z.createContext(null);H_.displayName="Await";var ti=z.createContext(null);ti.displayName="Navigation";var ua=z.createContext(null);ua.displayName="Location";var vi=z.createContext({outlet:null,matches:[],isDataRoute:!1});vi.displayName="Route";var Gf=z.createContext(null);Gf.displayName="RouteError";var Av="REACT_ROUTER_ERROR",V_="REDIRECT",G_="ROUTE_ERROR_RESPONSE";function j_(r){if(r.startsWith(`${Av}:${V_}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function W_(r){if(r.startsWith(`${Av}:${G_}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new U_(e.status,e.statusText,e.data)}catch{}}function X_(r,{relative:e}={}){zt(da(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=z.useContext(ti),{hash:o,pathname:l,search:u}=fa(r,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:pi([t,l])),s.createHref({pathname:d,search:u,hash:o})}function da(){return z.useContext(ua)!=null}function Pi(){return zt(da(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(ua).location}var Cv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bv(r){z.useContext(ti).static||z.useLayoutEffect(r)}function Pv(){let{isDataRoute:r}=z.useContext(vi);return r?ly():$_()}function $_(){zt(da(),"useNavigate() may be used only in the context of a <Router> component.");let r=z.useContext(uo),{basename:e,navigator:t}=z.useContext(ti),{matches:s}=z.useContext(vi),{pathname:o}=Pi(),l=JSON.stringify(yv(s)),u=z.useRef(!1);return bv(()=>{u.current=!0}),z.useCallback((f,p={})=>{if(gi(u.current,Cv),!u.current)return;if(typeof f=="number"){t.go(f);return}let g=Vf(f,JSON.parse(l),o,p.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:pi([e,g.pathname])),(p.replace?t.replace:t.push)(g,p.state,p)},[e,t,l,o,r])}var Y_=z.createContext(null);function q_(r){let e=z.useContext(vi).outlet;return z.useMemo(()=>e&&z.createElement(Y_.Provider,{value:r},e),[e,r])}function K_(){let{matches:r}=z.useContext(vi),e=r[r.length-1];return(e==null?void 0:e.params)??{}}function fa(r,{relative:e}={}){let{matches:t}=z.useContext(vi),{pathname:s}=Pi(),o=JSON.stringify(yv(t));return z.useMemo(()=>Vf(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function Z_(r,e){return Lv(r,e)}function Lv(r,e,t){var S;zt(da(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=z.useContext(ti),{matches:o}=z.useContext(vi),l=o[o.length-1],u=l?l.params:{},d=l?l.pathname:"/",f=l?l.pathnameBase:"/",p=l&&l.route;{let _=p&&p.path||"";Uv(d,!p||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let g=Pi(),v;if(e){let _=typeof e=="string"?ds(e):e;zt(f==="/"||((S=_.pathname)==null?void 0:S.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=g;let y=v.pathname||"/",M=y;if(f!=="/"){let _=f.replace(/^\//,"").split("/");M="/"+y.replace(/^\//,"").split("/").slice(_.length).join("/")}let E=t&&t.state.matches.length?t.state.matches.map(_=>Object.assign(_,{route:t.manifest[_.route.id]||_.route})):mv(r,{pathname:M});gi(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),gi(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=ny(E&&E.map(_=>Object.assign({},_,{params:Object.assign({},u,_.params),pathname:pi([f,s.encodeLocation?s.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?f:pi([f,s.encodeLocation?s.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),o,t);return e&&T?z.createElement(ua.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},T):T}function Q_(){let r=ay(),e=N_(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},u=null;return console.error("Error handled by React Router default ErrorBoundary:",r),u=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:l},"ErrorBoundary")," or"," ",z.createElement("code",{style:l},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),t?z.createElement("pre",{style:o},t):null,u)}var J_=z.createElement(Q_,null),Dv=class extends z.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=W_(r.digest);t&&(r=t)}let e=r!==void 0?z.createElement(vi.Provider,{value:this.props.routeContext},z.createElement(Gf.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?z.createElement(ey,{error:r},e):e}};Dv.contextType=wv;var cd=new WeakMap;function ey({children:r,error:e}){let{basename:t}=z.useContext(ti);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=j_(e.digest);if(s){let o=cd.get(e);if(o)throw o;let l=Ev(s.location,t),u=l.absoluteURL||l.to;if(k_(u))throw new Error("Invalid redirect location");if(Mv&&!cd.get(e))if(l.isExternal||s.reloadDocument)window.location.href=u;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw cd.set(e,d),d}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u}`})}}return r}function ty({routeContext:r,match:e,children:t}){let s=z.useContext(uo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),z.createElement(vi.Provider,{value:r},t)}function ny(r,e=[],t){let s=t==null?void 0:t.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let o=r,l=s==null?void 0:s.errors;if(l!=null){let g=o.findIndex(v=>v.route.id&&(l==null?void 0:l[v.route.id])!==void 0);zt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let u=!1,d=-1;if(t&&s){u=s.renderFallback;for(let g=0;g<o.length;g++){let v=o[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(d=g),v.route.id){let{loaderData:y,errors:M}=s,E=v.route.loader&&!y.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||E){t.isStatic&&(u=!0),d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}}let f=t==null?void 0:t.onError,p=s&&f?(g,v)=>{var y,M;f(g,{location:s.location,params:((M=(y=s.matches)==null?void 0:y[0])==null?void 0:M.params)??{},pattern:I_(s.matches),errorInfo:v})}:void 0;return o.reduceRight((g,v,y)=>{let M,E=!1,T=null,S=null;s&&(M=l&&v.route.id?l[v.route.id]:void 0,T=v.route.errorElement||J_,u&&(d<0&&y===0?(Uv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):d===y&&(E=!0,S=v.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,y+1)),U=()=>{let L;return M?L=T:E?L=S:v.route.Component?L=z.createElement(v.route.Component,null):v.route.element?L=v.route.element:L=g,z.createElement(ty,{match:v,routeContext:{outlet:g,matches:_,isDataRoute:s!=null},children:L})};return s&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?z.createElement(Dv,{location:s.location,revalidation:s.revalidation,component:T,error:M,children:U(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):U()},null)}function jf(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iy(r){let e=z.useContext(uo);return zt(e,jf(r)),e}function ry(r){let e=z.useContext(vc);return zt(e,jf(r)),e}function sy(r){let e=z.useContext(vi);return zt(e,jf(r)),e}function Wf(r){let e=sy(r),t=e.matches[e.matches.length-1];return zt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function oy(){return Wf("useRouteId")}function ay(){var s;let r=z.useContext(Gf),e=ry("useRouteError"),t=Wf("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function ly(){let{router:r}=iy("useNavigate"),e=Wf("useNavigate"),t=z.useRef(!1);return bv(()=>{t.current=!0}),z.useCallback(async(o,l={})=>{gi(t.current,Cv),t.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var Gm={};function Uv(r,e,t){!e&&!Gm[r]&&(Gm[r]=!0,gi(!1,t))}z.memo(cy);function cy({routes:r,manifest:e,future:t,state:s,isStatic:o,onError:l}){return Lv(r,void 0,{manifest:e,state:s,isStatic:o,onError:l})}function uy(r){return q_(r.context)}function es(r){zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dy({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,useTransitions:u}){zt(!da(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),f=z.useMemo(()=>({basename:d,navigator:o,static:l,useTransitions:u,future:{}}),[d,o,l,u]);typeof t=="string"&&(t=ds(t));let{pathname:p="/",search:g="",hash:v="",state:y=null,key:M="default",mask:E}=t,T=z.useMemo(()=>{let S=Qi(p,d);return S==null?null:{location:{pathname:S,search:g,hash:v,state:y,key:M,mask:E},navigationType:s}},[d,p,g,v,y,M,s,E]);return gi(T!=null,`<Router basename="${d}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:z.createElement(ti.Provider,{value:f},z.createElement(ua.Provider,{children:e,value:T}))}function fy({children:r,location:e}){return Z_($d(r),e)}function $d(r,e=[]){let t=[];return z.Children.forEach(r,(s,o)=>{if(!z.isValidElement(s))return;let l=[...e,o];if(s.type===z.Fragment){t.push.apply(t,$d(s.props.children,l));return}zt(s.type===es,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),zt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let u={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=$d(s.props.children,l)),t.push(u)}),t}var nc="get",ic="application/x-www-form-urlencoded";function xc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function hy(r){return xc(r)&&r.tagName.toLowerCase()==="button"}function py(r){return xc(r)&&r.tagName.toLowerCase()==="form"}function my(r){return xc(r)&&r.tagName.toLowerCase()==="input"}function gy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function vy(r,e){return r.button===0&&(!e||e==="_self")&&!gy(r)}var Tl=null;function xy(){if(Tl===null)try{new FormData(document.createElement("form"),0),Tl=!1}catch{Tl=!0}return Tl}var _y=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ud(r){return r!=null&&!_y.has(r)?(gi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ic}"`),null):r}function yy(r,e){let t,s,o,l,u;if(py(r)){let d=r.getAttribute("action");s=d?Qi(d,e):null,t=r.getAttribute("method")||nc,o=ud(r.getAttribute("enctype"))||ic,l=new FormData(r)}else if(hy(r)||my(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=r.getAttribute("formaction")||d.getAttribute("action");if(s=f?Qi(f,e):null,t=r.getAttribute("formmethod")||d.getAttribute("method")||nc,o=ud(r.getAttribute("formenctype"))||ud(d.getAttribute("enctype"))||ic,l=new FormData(d,r),!xy()){let{name:p,type:g,value:v}=r;if(g==="image"){let y=p?`${p}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else p&&l.append(p,v)}}else{if(xc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=nc,s=null,o=ic,u=r}return l&&o==="text/plain"&&(u=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Nv(r,e,t,s){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:e&&Qi(o.pathname,e)==="/"?o.pathname=`${fc(e)}/_root.${s}`:o.pathname=`${fc(o.pathname)}.${s}`,o}async function Sy(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function My(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Ey(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let u=await Sy(l,t);return u.links?u.links():[]}return[]}));return Ay(s.flat(1).filter(My).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function jm(r,e,t,s,o,l){let u=(f,p)=>t[p]?f.route.id!==t[p].route.id:!0,d=(f,p)=>{var g;return t[p].pathname!==f.pathname||((g=t[p].route.path)==null?void 0:g.endsWith("*"))&&t[p].params["*"]!==f.params["*"]};return l==="assets"?e.filter((f,p)=>u(f,p)||d(f,p)):l==="data"?e.filter((f,p)=>{var v;let g=s.routes[f.route.id];if(!g||!g.hasLoader)return!1;if(u(f,p)||d(f,p))return!0;if(f.route.shouldRevalidate){let y=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(r,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function Ty(r,e,{includeHydrateFallback:t}={}){return wy(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function wy(r){return[...new Set(r)]}function Ry(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function Ay(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(Ry(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function $f(){let r=z.useContext(uo);return Xf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Cy(){let r=z.useContext(vc);return Xf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Yf=z.createContext(void 0);Yf.displayName="FrameworkContext";function _c(){let r=z.useContext(Yf);return Xf(r,"You must render this element inside a <HydratedRouter> element"),r}function by(r,e){let t=z.useContext(Yf),[s,o]=z.useState(!1),[l,u]=z.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,y=z.useRef(null);z.useEffect(()=>{if(r==="render"&&u(!0),r==="viewport"){let T=_=>{_.forEach(U=>{u(U.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return y.current&&S.observe(y.current),()=>{S.disconnect()}}},[r]),z.useEffect(()=>{if(s){let T=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(T)}}},[s]);let M=()=>{o(!0)},E=()=>{o(!1),u(!1)};return t?r!=="intent"?[l,y,{}]:[l,y,{onFocus:qo(d,M),onBlur:qo(f,E),onMouseEnter:qo(p,M),onMouseLeave:qo(g,E),onTouchStart:qo(v,M)}]:[!1,y,{}]}function qo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function Py({page:r,...e}){let t=B_(),{nonce:s}=_c(),{router:o}=$f(),l=z.useMemo(()=>mv(o.routes,r,o.basename),[o.routes,r,o.basename]);return l?(e.nonce==null&&s&&(e={...e,nonce:s}),t?z.createElement(Dy,{page:r,matches:l,...e}):z.createElement(Uy,{page:r,matches:l,...e})):null}function Ly(r){let{manifest:e,routeModules:t}=_c(),[s,o]=z.useState([]);return z.useEffect(()=>{let l=!1;return Ey(r,e,t).then(u=>{l||o(u)}),()=>{l=!0}},[r,e,t]),s}function Dy({page:r,matches:e,...t}){let s=Pi(),{future:o}=_c(),{basename:l}=$f(),u=z.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let d=Nv(r,l,o.v8_trailingSlashAwareDataRequests,"rsc"),f=!1,p=[];for(let g of e)typeof g.route.shouldRevalidate=="function"?f=!0:p.push(g.route.id);return f&&p.length>0&&d.searchParams.set("_routes",p.join(",")),[d.pathname+d.search]},[l,o.v8_trailingSlashAwareDataRequests,r,s,e]);return z.createElement(z.Fragment,null,u.map(d=>z.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...t})))}function Uy({page:r,matches:e,...t}){let s=Pi(),{future:o,manifest:l,routeModules:u}=_c(),{basename:d}=$f(),{loaderData:f,matches:p}=Cy(),g=z.useMemo(()=>jm(r,e,p,l,s,"data"),[r,e,p,l,s]),v=z.useMemo(()=>jm(r,e,p,l,s,"assets"),[r,e,p,l,s]),y=z.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let T=new Set,S=!1;if(e.forEach(U=>{var b;let L=l.routes[U.route.id];!L||!L.hasLoader||(!g.some(F=>F.route.id===U.route.id)&&U.route.id in f&&((b=u[U.route.id])!=null&&b.shouldRevalidate)||L.hasClientLoader?S=!0:T.add(U.route.id))}),T.size===0)return[];let _=Nv(r,d,o.v8_trailingSlashAwareDataRequests,"data");return S&&T.size>0&&_.searchParams.set("_routes",e.filter(U=>T.has(U.route.id)).map(U=>U.route.id).join(",")),[_.pathname+_.search]},[d,o.v8_trailingSlashAwareDataRequests,f,s,l,g,e,r,u]),M=z.useMemo(()=>Ty(v,l),[v,l]),E=Ly(v);return z.createElement(z.Fragment,null,y.map(T=>z.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...t})),M.map(T=>z.createElement("link",{key:T,rel:"modulepreload",href:T,...t})),E.map(({key:T,link:S})=>z.createElement("link",{key:T,nonce:t.nonce,...S,crossOrigin:S.crossOrigin??t.crossOrigin})))}function Ny(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Iy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Iy&&(window.__reactRouterVersion="7.18.1")}catch{}function Fy({basename:r,children:e,useTransitions:t,window:s}){let o=z.useRef();o.current==null&&(o.current=d_({window:s,v5Compat:!0}));let l=o.current,[u,d]=z.useState({action:l.action,location:l.location}),f=z.useCallback(p=>{t===!1?d(p):z.startTransition(()=>d(p))},[t]);return z.useLayoutEffect(()=>l.listen(f),[l,f]),z.createElement(dy,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:l,useTransitions:t})}var an=z.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:u,mask:d,state:f,target:p,to:g,preventScrollReset:v,viewTransition:y,defaultShouldRevalidate:M,...E},T){let{basename:S,navigator:_,useTransitions:U}=z.useContext(ti),L=typeof g=="string"&&Hf.test(g),b=Ev(g,S);g=b.to;let F=X_(g,{relative:o}),N=Pi(),k=null;if(d){let G=Vf(d,[],N.mask?N.mask.pathname:"/",!0);S!=="/"&&(G.pathname=G.pathname==="/"?S:pi([S,G.pathname])),k=_.createHref(G)}let[Y,P,C]=by(s,E),V=By(g,{replace:u,mask:d,state:f,target:p,preventScrollReset:v,relative:o,viewTransition:y,defaultShouldRevalidate:M,useTransitions:U});function fe(G){e&&e(G),G.defaultPrevented||V(G)}let W=!(b.isExternal||l),ie=z.createElement("a",{...E,...C,href:(W?k:void 0)||b.absoluteURL||F,onClick:W?fe:e,ref:Ny(T,P),target:p,"data-discover":!L&&t==="render"?"true":void 0});return Y&&!L?z.createElement(z.Fragment,null,ie,z.createElement(Py,{page:F})):ie});an.displayName="Link";var Yd=z.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:d,children:f,...p},g){let v=fa(u,{relative:p.relative}),y=Pi(),M=z.useContext(vc),{navigator:E,basename:T}=z.useContext(ti),S=M!=null&&jy(v)&&d===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,U=y.pathname,L=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;t||(U=U.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&T&&(L=Qi(L,T)||L);const b=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=U===_||!o&&U.startsWith(_)&&U.charAt(b)==="/",N=L!=null&&(L===_||!o&&L.startsWith(_)&&L.charAt(_.length)==="/"),k={isActive:F,isPending:N,isTransitioning:S},Y=F?e:void 0,P;typeof s=="function"?P=s(k):P=[s,F?"active":null,N?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(k):l;return z.createElement(an,{...p,"aria-current":Y,className:P,ref:g,style:C,to:u,viewTransition:d},typeof f=="function"?f(k):f)});Yd.displayName="NavLink";var Oy=z.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:u=nc,action:d,onSubmit:f,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:y,...M},E)=>{let{useTransitions:T}=z.useContext(ti),S=Vy(),_=Gy(d,{relative:p}),U=u.toLowerCase()==="get"?"get":"post",L=typeof d=="string"&&Hf.test(d),b=F=>{if(f&&f(F),F.defaultPrevented)return;F.preventDefault();let N=F.nativeEvent.submitter,k=(N==null?void 0:N.getAttribute("formmethod"))||u,Y=()=>S(N||F.currentTarget,{fetcherKey:e,method:k,navigate:t,replace:o,state:l,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:y});T&&t!==!1?z.startTransition(()=>Y()):Y()};return z.createElement("form",{ref:E,method:U,action:_,onSubmit:s?f:b,...M,"data-discover":!L&&r==="render"?"true":void 0})});Oy.displayName="Form";function ky(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Iv(r){let e=z.useContext(uo);return zt(e,ky(r)),e}function By(r,{target:e,replace:t,mask:s,state:o,preventScrollReset:l,relative:u,viewTransition:d,defaultShouldRevalidate:f,useTransitions:p}={}){let g=Pv(),v=Pi(),y=fa(r,{relative:u});return z.useCallback(M=>{if(vy(M,e)){M.preventDefault();let E=t!==void 0?t:la(v)===la(y),T=()=>g(r,{replace:E,mask:s,state:o,preventScrollReset:l,relative:u,viewTransition:d,defaultShouldRevalidate:f});p?z.startTransition(()=>T()):T()}},[v,g,y,t,s,o,e,r,l,u,d,f,p])}var zy=0,Hy=()=>`__${String(++zy)}__`;function Vy(){let{router:r}=Iv("useSubmit"),{basename:e}=z.useContext(ti),t=oy(),s=r.fetch,o=r.navigate;return z.useCallback(async(l,u={})=>{let{action:d,method:f,encType:p,formData:g,body:v}=yy(l,e);if(u.navigate===!1){let y=u.fetcherKey||Hy();await s(y,t,u.action||d,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:v,formMethod:u.method||f,formEncType:u.encType||p,flushSync:u.flushSync})}else await o(u.action||d,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:v,formMethod:u.method||f,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[s,o,e,t])}function Gy(r,{relative:e}={}){let{basename:t}=z.useContext(ti),s=z.useContext(vi);zt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...fa(r||".",{relative:e})},u=Pi();if(r==null){l.search=u.search;let d=new URLSearchParams(l.search),f=d.getAll("index");if(f.some(g=>g==="")){d.delete("index"),f.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();l.search=g?`?${g}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:pi([t,l.pathname])),la(l)}function jy(r,{relative:e}={}){let t=z.useContext(Rv);zt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Iv("useViewTransitionState"),o=fa(r,{relative:e});if(!t.isTransitioning)return!1;let l=Qi(t.currentLocation.pathname,s)||t.currentLocation.pathname,u=Qi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return dc(o.pathname,u)!=null||dc(o.pathname,l)!=null}const Wy=[{to:"/chapter/intro",label:"入门科普"},{to:"/chapter/compose",label:"核心章节"},{to:"/playground",label:"实操训练"},{to:"/archive",label:"数学档案馆"}];function Xy(){const r={fontSize:"0.85rem",fontWeight:500,textDecoration:"none",color:"var(--ink2)",transition:"color 0.2s"};return m.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",height:"3.5rem",padding:"0 1.5rem",background:"rgba(255,255,255,0.7)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",borderBottom:"1px solid var(--rule)"},children:[m.jsx(Yd,{to:"/",style:{fontSize:"1.1rem",fontWeight:700,letterSpacing:"-0.02em",color:"var(--ink)",textDecoration:"none"},children:"Cube × Math"}),m.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1.5rem"},children:Wy.map(({to:e,label:t})=>m.jsx(Yd,{to:e,end:!0,style:({isActive:s})=>({...r,color:s?"var(--ink)":"var(--ink2)",position:"relative",...s?{fontWeight:600}:{}}),children:t},e))})]})}function $y(){return m.jsx("footer",{children:"Cube * Math - 用数学思维理解魔方"})}function Yy(){return m.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[m.jsx(Xy,{}),m.jsx("main",{style:{paddingTop:"3.75rem",flex:1},children:m.jsx(uy,{})}),m.jsx($y,{})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qf="170",qy=0,Wm=1,Ky=2,Fv=1,Zy=2,$i=3,Dr=0,Un=1,Yi=2,Pr=0,to=1,Xm=2,$m=3,Ym=4,Qy=5,rs=100,Jy=101,eS=102,tS=103,nS=104,iS=200,rS=201,sS=202,oS=203,qd=204,Kd=205,aS=206,lS=207,cS=208,uS=209,dS=210,fS=211,hS=212,pS=213,mS=214,Zd=0,Qd=1,Jd=2,ro=3,ef=4,tf=5,nf=6,rf=7,Ov=0,gS=1,vS=2,Lr=0,xS=1,_S=2,yS=3,SS=4,MS=5,ES=6,TS=7,kv=300,so=301,oo=302,sf=303,of=304,yc=306,af=1e3,os=1001,lf=1002,mi=1003,wS=1004,wl=1005,wi=1006,dd=1007,as=1008,Ji=1009,Bv=1010,zv=1011,ca=1012,Kf=1013,cs=1014,qi=1015,ha=1016,Zf=1017,Qf=1018,ao=1020,Hv=35902,Vv=1021,Gv=1022,hi=1023,jv=1024,Wv=1025,no=1026,lo=1027,Xv=1028,Jf=1029,$v=1030,eh=1031,th=1033,rc=33776,sc=33777,oc=33778,ac=33779,cf=35840,uf=35841,df=35842,ff=35843,hf=36196,pf=37492,mf=37496,gf=37808,vf=37809,xf=37810,_f=37811,yf=37812,Sf=37813,Mf=37814,Ef=37815,Tf=37816,wf=37817,Rf=37818,Af=37819,Cf=37820,bf=37821,lc=36492,Pf=36494,Lf=36495,Yv=36283,Df=36284,Uf=36285,Nf=36286,RS=3200,AS=3201,qv=0,CS=1,br="",Qn="srgb",fo="srgb-linear",Sc="linear",Pt="srgb",Fs=7680,qm=519,bS=512,PS=513,LS=514,Kv=515,DS=516,US=517,NS=518,IS=519,Km=35044,Zm="300 es",Ki=2e3,hc=2001;class ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cc=Math.PI/180,If=180/Math.PI;function pa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]).toLowerCase()}function Ln(r,e,t){return Math.max(e,Math.min(t,r))}function FS(r,e){return(r%e+e)%e}function fd(r,e,t){return(1-t)*r+t*e}function Ko(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,s,o,l,u,d,f,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,d,f,p)}set(e,t,s,o,l,u,d,f,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=l,g[5]=f,g[6]=s,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],d=s[3],f=s[6],p=s[1],g=s[4],v=s[7],y=s[2],M=s[5],E=s[8],T=o[0],S=o[3],_=o[6],U=o[1],L=o[4],b=o[7],F=o[2],N=o[5],k=o[8];return l[0]=u*T+d*U+f*F,l[3]=u*S+d*L+f*N,l[6]=u*_+d*b+f*k,l[1]=p*T+g*U+v*F,l[4]=p*S+g*L+v*N,l[7]=p*_+g*b+v*k,l[2]=y*T+M*U+E*F,l[5]=y*S+M*L+E*N,l[8]=y*_+M*b+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],g=e[8];return t*u*g-t*d*p-s*l*g+s*d*f+o*l*p-o*u*f}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],g=e[8],v=g*u-d*p,y=d*f-g*l,M=p*l-u*f,E=t*v+s*y+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(o*p-g*s)*T,e[2]=(d*s-o*u)*T,e[3]=y*T,e[4]=(g*t-o*f)*T,e[5]=(o*l-d*t)*T,e[6]=M*T,e[7]=(s*f-p*t)*T,e[8]=(u*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(s*f,s*p,-s*(f*u+p*d)+u+e,-o*p,o*f,-o*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(hd.makeScale(e,t)),this}rotate(e){return this.premultiply(hd.makeRotation(-e)),this}translate(e,t){return this.premultiply(hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new dt;function Zv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function pc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function OS(){const r=pc("canvas");return r.style.display="block",r}const Qm={};function na(r){r in Qm||(Qm[r]=!0,console.warn(r))}function kS(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function BS(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zS(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(r.r=io(r.r),r.g=io(r.g),r.b=io(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===br?Sc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function io(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Jm=[.64,.33,.3,.6,.15,.06],eg=[.2126,.7152,.0722],tg=[.3127,.329],ng=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ig=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[fo]:{primaries:Jm,whitePoint:tg,transfer:Sc,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:eg,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:Jm,whitePoint:tg,transfer:Pt,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:eg,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}});let Os;class HS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=pc("canvas")),Os.width=e.width,Os.height=e.height;const s=Os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Zi(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Zi(t[s]/255)*255):t[s]=Zi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VS=0;class Qv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=pa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(pd(o[u].image)):l.push(pd(o[u]))}else l=pd(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function pd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?HS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GS=0;class Nn extends ho{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,s=os,o=os,l=wi,u=as,d=hi,f=Ji,p=Nn.DEFAULT_ANISOTROPY,g=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=pa(),this.name="",this.source=new Qv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case af:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case af:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=kv;Nn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,s=0,o=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const f=e.elements,p=f[0],g=f[4],v=f[8],y=f[1],M=f[5],E=f[9],T=f[2],S=f[6],_=f[10];if(Math.abs(g-y)<.01&&Math.abs(v-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,b=(M+1)/2,F=(_+1)/2,N=(g+y)/4,k=(v+T)/4,Y=(E+S)/4;return L>b&&L>F?L<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(L),o=N/s,l=k/s):b>F?b<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),s=N/o,l=Y/o):F<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),s=k/l,o=Y/l),this.set(s,o,l,t),this}let U=Math.sqrt((S-E)*(S-E)+(v-T)*(v-T)+(y-g)*(y-g));return Math.abs(U)<.001&&(U=1),this.x=(S-E)/U,this.y=(v-T)/U,this.z=(y-g)/U,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jS extends ho{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const o={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Nn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends jS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Jv extends Nn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WS extends Nn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ma{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,d){let f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];const y=l[u+0],M=l[u+1],E=l[u+2],T=l[u+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d===1){e[t+0]=y,e[t+1]=M,e[t+2]=E,e[t+3]=T;return}if(v!==T||f!==y||p!==M||g!==E){let S=1-d;const _=f*y+p*M+g*E+v*T,U=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const F=Math.sqrt(L),N=Math.atan2(F,_*U);S=Math.sin(S*N)/F,d=Math.sin(d*N)/F}const b=d*U;if(f=f*S+y*b,p=p*S+M*b,g=g*S+E*b,v=v*S+T*b,S===1-d){const F=1/Math.sqrt(f*f+p*p+g*g+v*v);f*=F,p*=F,g*=F,v*=F}}e[t]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,o,l,u){const d=s[o],f=s[o+1],p=s[o+2],g=s[o+3],v=l[u],y=l[u+1],M=l[u+2],E=l[u+3];return e[t]=d*E+g*v+f*M-p*y,e[t+1]=f*E+g*y+p*v-d*M,e[t+2]=p*E+g*M+d*y-f*v,e[t+3]=g*E-d*v-f*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(s/2),g=d(o/2),v=d(l/2),y=f(s/2),M=f(o/2),E=f(l/2);switch(u){case"XYZ":this._x=y*g*v+p*M*E,this._y=p*M*v-y*g*E,this._z=p*g*E+y*M*v,this._w=p*g*v-y*M*E;break;case"YXZ":this._x=y*g*v+p*M*E,this._y=p*M*v-y*g*E,this._z=p*g*E-y*M*v,this._w=p*g*v+y*M*E;break;case"ZXY":this._x=y*g*v-p*M*E,this._y=p*M*v+y*g*E,this._z=p*g*E+y*M*v,this._w=p*g*v-y*M*E;break;case"ZYX":this._x=y*g*v-p*M*E,this._y=p*M*v+y*g*E,this._z=p*g*E-y*M*v,this._w=p*g*v+y*M*E;break;case"YZX":this._x=y*g*v+p*M*E,this._y=p*M*v+y*g*E,this._z=p*g*E-y*M*v,this._w=p*g*v-y*M*E;break;case"XZY":this._x=y*g*v-p*M*E,this._y=p*M*v-y*g*E,this._z=p*g*E+y*M*v,this._w=p*g*v+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],g=t[6],v=t[10],y=s+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-f)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(g-f)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(f+g)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(f+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,g=t._w;return this._x=s*g+u*d+o*p-l*f,this._y=o*g+u*f+l*d-s*p,this._z=l*g+u*p+s*f-o*d,this._w=u*g-s*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+s*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=s,this._y=o,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*s+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),g=Math.atan2(p,d),v=Math.sin((1-t)*g)/p,y=Math.sin(t*g)/p;return this._w=u*v+this._w*y,this._x=s*v+this._x*y,this._y=o*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,s=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*o-d*s),g=2*(d*t-l*o),v=2*(l*s-u*t);return this.x=t+f*p+u*v-d*g,this.y=s+f*g+d*p-l*v,this.z=o+f*v+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*u-s*f,this.z=s*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return md.copy(this).projectOnVector(e),this.sub(md)}reflect(e){return this.sub(md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const md=new ne,rg=new ma;class ga{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ui):ui.fromBufferAttribute(l,u),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rl.copy(s.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Al.subVectors(this.max,Zo),ks.subVectors(e.a,Zo),Bs.subVectors(e.b,Zo),zs.subVectors(e.c,Zo),Mr.subVectors(Bs,ks),Er.subVectors(zs,Bs),Yr.subVectors(ks,zs);let t=[0,-Mr.z,Mr.y,0,-Er.z,Er.y,0,-Yr.z,Yr.y,Mr.z,0,-Mr.x,Er.z,0,-Er.x,Yr.z,0,-Yr.x,-Mr.y,Mr.x,0,-Er.y,Er.x,0,-Yr.y,Yr.x,0];return!gd(t,ks,Bs,zs,Al)||(t=[1,0,0,0,1,0,0,0,1],!gd(t,ks,Bs,zs,Al))?!1:(Cl.crossVectors(Mr,Er),t=[Cl.x,Cl.y,Cl.z],gd(t,ks,Bs,zs,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ui=new ne,Rl=new ga,ks=new ne,Bs=new ne,zs=new ne,Mr=new ne,Er=new ne,Yr=new ne,Zo=new ne,Al=new ne,Cl=new ne,qr=new ne;function gd(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){qr.fromArray(r,l);const d=o.x*Math.abs(qr.x)+o.y*Math.abs(qr.y)+o.z*Math.abs(qr.z),f=e.dot(qr),p=t.dot(qr),g=s.dot(qr);if(Math.max(-Math.max(f,p,g),Math.min(f,p,g))>d)return!1}return!0}const XS=new ga,Qo=new ne,vd=new ne;class Mc{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):XS.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const t=Qo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Qo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(vd)),this.expandByPoint(Qo.copy(e.center).sub(vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new ne,xd=new ne,bl=new ne,Tr=new ne,_d=new ne,Pl=new ne,yd=new ne;class nh{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){xd.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(xd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(bl),d=Tr.dot(this.direction),f=-Tr.dot(bl),p=Tr.lengthSq(),g=Math.abs(1-u*u);let v,y,M,E;if(g>0)if(v=u*f-d,y=u*d-f,E=l*g,v>=0)if(y>=-E)if(y<=E){const T=1/g;v*=T,y*=T,M=v*(v+u*y+2*d)+y*(u*v+y+2*f)+p}else y=l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*f)+p;else y=-l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*f)+p;else y<=-E?(v=Math.max(0,-(-u*l+d)),y=v>0?-l:Math.min(Math.max(-l,-f),l),M=-v*v+y*(y+2*f)+p):y<=E?(v=0,y=Math.min(Math.max(-l,-f),l),M=y*(y+2*f)+p):(v=Math.max(0,-(u*l+d)),y=v>0?l:Math.min(Math.max(-l,-f),l),M=-v*v+y*(y+2*f)+p);else y=u>0?-l:l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*f)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(xd).addScaledVector(bl,y),M}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const s=Gi.dot(this.direction),o=Gi.dot(Gi)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=s-u,f=s+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,d,f;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),g>=0?(l=(e.min.y-y.y)*g,u=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,u=(e.min.y-y.y)*g),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-y.z)*v,f=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,f=(e.min.z-y.z)*v),s>f||d>o)||((d>s||s!==s)&&(s=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,s,o,l){_d.subVectors(t,e),Pl.subVectors(s,e),yd.crossVectors(_d,Pl);let u=this.direction.dot(yd),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Tr.subVectors(this.origin,e);const f=d*this.direction.dot(Pl.crossVectors(Tr,Pl));if(f<0)return null;const p=d*this.direction.dot(_d.cross(Tr));if(p<0||f+p>u)return null;const g=-d*Tr.dot(yd);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,s,o,l,u,d,f,p,g,v,y,M,E,T,S){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,d,f,p,g,v,y,M,E,T,S)}set(e,t,s,o,l,u,d,f,p,g,v,y,M,E,T,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=o,_[1]=l,_[5]=u,_[9]=d,_[13]=f,_[2]=p,_[6]=g,_[10]=v,_[14]=y,_[3]=M,_[7]=E,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),u=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),d=Math.sin(s),f=Math.cos(o),p=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*g,M=u*v,E=d*g,T=d*v;t[0]=f*g,t[4]=-f*v,t[8]=p,t[1]=M+E*p,t[5]=y-T*p,t[9]=-d*f,t[2]=T-y*p,t[6]=E+M*p,t[10]=u*f}else if(e.order==="YXZ"){const y=f*g,M=f*v,E=p*g,T=p*v;t[0]=y+T*d,t[4]=E*d-M,t[8]=u*p,t[1]=u*v,t[5]=u*g,t[9]=-d,t[2]=M*d-E,t[6]=T+y*d,t[10]=u*f}else if(e.order==="ZXY"){const y=f*g,M=f*v,E=p*g,T=p*v;t[0]=y-T*d,t[4]=-u*v,t[8]=E+M*d,t[1]=M+E*d,t[5]=u*g,t[9]=T-y*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const y=u*g,M=u*v,E=d*g,T=d*v;t[0]=f*g,t[4]=E*p-M,t[8]=y*p+T,t[1]=f*v,t[5]=T*p+y,t[9]=M*p-E,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const y=u*f,M=u*p,E=d*f,T=d*p;t[0]=f*g,t[4]=T-y*v,t[8]=E*v+M,t[1]=v,t[5]=u*g,t[9]=-d*g,t[2]=-p*g,t[6]=M*v+E,t[10]=y-T*v}else if(e.order==="XZY"){const y=u*f,M=u*p,E=d*f,T=d*p;t[0]=f*g,t[4]=-v,t[8]=p*g,t[1]=y*v+T,t[5]=u*g,t[9]=M*v-E,t[2]=E*v-M,t[6]=d*g,t[10]=T*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($S,e,YS)}lookAt(e,t,s){const o=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),wr.crossVectors(s,Bn),wr.lengthSq()===0&&(Math.abs(s.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),wr.crossVectors(s,Bn)),wr.normalize(),Ll.crossVectors(Bn,wr),o[0]=wr.x,o[4]=Ll.x,o[8]=Bn.x,o[1]=wr.y,o[5]=Ll.y,o[9]=Bn.y,o[2]=wr.z,o[6]=Ll.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],d=s[4],f=s[8],p=s[12],g=s[1],v=s[5],y=s[9],M=s[13],E=s[2],T=s[6],S=s[10],_=s[14],U=s[3],L=s[7],b=s[11],F=s[15],N=o[0],k=o[4],Y=o[8],P=o[12],C=o[1],V=o[5],fe=o[9],W=o[13],ie=o[2],G=o[6],X=o[10],J=o[14],B=o[3],de=o[7],ce=o[11],O=o[15];return l[0]=u*N+d*C+f*ie+p*B,l[4]=u*k+d*V+f*G+p*de,l[8]=u*Y+d*fe+f*X+p*ce,l[12]=u*P+d*W+f*J+p*O,l[1]=g*N+v*C+y*ie+M*B,l[5]=g*k+v*V+y*G+M*de,l[9]=g*Y+v*fe+y*X+M*ce,l[13]=g*P+v*W+y*J+M*O,l[2]=E*N+T*C+S*ie+_*B,l[6]=E*k+T*V+S*G+_*de,l[10]=E*Y+T*fe+S*X+_*ce,l[14]=E*P+T*W+S*J+_*O,l[3]=U*N+L*C+b*ie+F*B,l[7]=U*k+L*V+b*G+F*de,l[11]=U*Y+L*fe+b*X+F*ce,l[15]=U*P+L*W+b*J+F*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],g=e[2],v=e[6],y=e[10],M=e[14],E=e[3],T=e[7],S=e[11],_=e[15];return E*(+l*f*v-o*p*v-l*d*y+s*p*y+o*d*M-s*f*M)+T*(+t*f*M-t*p*y+l*u*y-o*u*M+o*p*g-l*f*g)+S*(+t*p*v-t*d*M-l*u*v+s*u*M+l*d*g-s*p*g)+_*(-o*d*g-t*f*v+t*d*y+o*u*v-s*u*y+s*f*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],g=e[8],v=e[9],y=e[10],M=e[11],E=e[12],T=e[13],S=e[14],_=e[15],U=v*S*p-T*y*p+T*f*M-d*S*M-v*f*_+d*y*_,L=E*y*p-g*S*p-E*f*M+u*S*M+g*f*_-u*y*_,b=g*T*p-E*v*p+E*d*M-u*T*M-g*d*_+u*v*_,F=E*v*f-g*T*f-E*d*y+u*T*y+g*d*S-u*v*S,N=t*U+s*L+o*b+l*F;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return e[0]=U*k,e[1]=(T*y*l-v*S*l-T*o*M+s*S*M+v*o*_-s*y*_)*k,e[2]=(d*S*l-T*f*l+T*o*p-s*S*p-d*o*_+s*f*_)*k,e[3]=(v*f*l-d*y*l-v*o*p+s*y*p+d*o*M-s*f*M)*k,e[4]=L*k,e[5]=(g*S*l-E*y*l+E*o*M-t*S*M-g*o*_+t*y*_)*k,e[6]=(E*f*l-u*S*l-E*o*p+t*S*p+u*o*_-t*f*_)*k,e[7]=(u*y*l-g*f*l+g*o*p-t*y*p-u*o*M+t*f*M)*k,e[8]=b*k,e[9]=(E*v*l-g*T*l-E*s*M+t*T*M+g*s*_-t*v*_)*k,e[10]=(u*T*l-E*d*l+E*s*p-t*T*p-u*s*_+t*d*_)*k,e[11]=(g*d*l-u*v*l-g*s*p+t*v*p+u*s*M-t*d*M)*k,e[12]=F*k,e[13]=(g*T*o-E*v*o+E*s*y-t*T*y-g*s*S+t*v*S)*k,e[14]=(E*d*o-u*T*o-E*s*f+t*T*f+u*s*S-t*d*S)*k,e[15]=(u*v*o-g*d*o+g*s*f-t*v*f-u*s*y+t*d*y)*k,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,d=e.y,f=e.z,p=l*u,g=l*d;return this.set(p*u+s,p*d-o*f,p*f+o*d,0,p*d+o*f,g*d+s,g*f-o*u,0,p*f-o*d,g*f+o*u,l*f*f+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,g=u+u,v=d+d,y=l*p,M=l*g,E=l*v,T=u*g,S=u*v,_=d*v,U=f*p,L=f*g,b=f*v,F=s.x,N=s.y,k=s.z;return o[0]=(1-(T+_))*F,o[1]=(M+b)*F,o[2]=(E-L)*F,o[3]=0,o[4]=(M-b)*N,o[5]=(1-(y+_))*N,o[6]=(S+U)*N,o[7]=0,o[8]=(E+L)*k,o[9]=(S-U)*k,o[10]=(1-(y+T))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Hs.set(o[0],o[1],o[2]).length();const u=Hs.set(o[4],o[5],o[6]).length(),d=Hs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],di.copy(this);const p=1/l,g=1/u,v=1/d;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=v,di.elements[9]*=v,di.elements[10]*=v,t.setFromRotationMatrix(di),s.x=l,s.y=u,s.z=d,this}makePerspective(e,t,s,o,l,u,d=Ki){const f=this.elements,p=2*l/(t-e),g=2*l/(s-o),v=(t+e)/(t-e),y=(s+o)/(s-o);let M,E;if(d===Ki)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(d===hc)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=g,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,s,o,l,u,d=Ki){const f=this.elements,p=1/(t-e),g=1/(s-o),v=1/(u-l),y=(t+e)*p,M=(s+o)*g;let E,T;if(d===Ki)E=(u+l)*v,T=-2*v;else if(d===hc)E=l*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-y,f[1]=0,f[5]=2*g,f[9]=0,f[13]=-M,f[2]=0,f[6]=0,f[10]=T,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Hs=new ne,di=new Ot,$S=new ne(0,0,0),YS=new ne(1,1,1),wr=new ne,Ll=new ne,Bn=new ne,sg=new Ot,og=new ma;class bi{constructor(e=0,t=0,s=0,o=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],f=o[1],p=o[5],g=o[9],v=o[2],y=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Ln(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return og.setFromEuler(this),this.setFromQuaternion(og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class ih{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qS=0;const ag=new ne,Vs=new ma,ji=new Ot,Dl=new ne,Jo=new ne,KS=new ne,ZS=new ma,lg=new ne(1,0,0),cg=new ne(0,1,0),ug=new ne(0,0,1),dg={type:"added"},QS={type:"removed"},Gs={type:"childadded",child:null},Sd={type:"childremoved",child:null};class rn extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new ne,t=new bi,s=new ma,o=new ne(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ot},normalMatrix:{value:new dt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(lg,e)}rotateY(e){return this.rotateOnAxis(cg,e)}rotateZ(e){return this.rotateOnAxis(ug,e)}translateOnAxis(e,t){return ag.copy(e).applyQuaternion(this.quaternion),this.position.add(ag.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lg,e)}translateY(e){return this.translateOnAxis(cg,e)}translateZ(e){return this.translateOnAxis(ug,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Dl.copy(e):Dl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Jo,Dl,this.up):ji.lookAt(Dl,Jo,this.up),this.quaternion.setFromRotationMatrix(ji),o&&(ji.extractRotation(o.matrixWorld),Vs.setFromRotationMatrix(ji),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QS),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,KS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,ZS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,g=f.length;p<g;p++){const v=f[p];l(e.shapes,v)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),g=u(e.images),v=u(e.shapes),y=u(e.skeletons),M=u(e.animations),E=u(e.nodes);d.length>0&&(s.geometries=d),f.length>0&&(s.materials=f),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(d){const f=[];for(const p in d){const g=d[p];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}rn.DEFAULT_UP=new ne(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new ne,Wi=new ne,Md=new ne,Xi=new ne,js=new ne,Ws=new ne,fg=new ne,Ed=new ne,Td=new ne,wd=new ne,Rd=new Vt,Ad=new Vt,Cd=new Vt;class ei{constructor(e=new ne,t=new ne,s=new ne){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),fi.subVectors(e,t),o.cross(fi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){fi.subVectors(o,t),Wi.subVectors(s,t),Md.subVectors(e,t);const u=fi.dot(fi),d=fi.dot(Wi),f=fi.dot(Md),p=Wi.dot(Wi),g=Wi.dot(Md),v=u*p-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,M=(p*f-d*g)*y,E=(u*g-d*f)*y;return l.set(1-M-E,E,M)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,s,o,l,u,d,f){return this.getBarycoord(e,t,s,o,Xi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Xi.x),f.addScaledVector(u,Xi.y),f.addScaledVector(d,Xi.z),f)}static getInterpolatedAttribute(e,t,s,o,l,u){return Rd.setScalar(0),Ad.setScalar(0),Cd.setScalar(0),Rd.fromBufferAttribute(e,t),Ad.fromBufferAttribute(e,s),Cd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Rd,l.x),u.addScaledVector(Ad,l.y),u.addScaledVector(Cd,l.z),u}static isFrontFacing(e,t,s,o){return fi.subVectors(s,t),Wi.subVectors(e,t),fi.cross(Wi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),fi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return ei.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,d;js.subVectors(o,s),Ws.subVectors(l,s),Ed.subVectors(e,s);const f=js.dot(Ed),p=Ws.dot(Ed);if(f<=0&&p<=0)return t.copy(s);Td.subVectors(e,o);const g=js.dot(Td),v=Ws.dot(Td);if(g>=0&&v<=g)return t.copy(o);const y=f*v-g*p;if(y<=0&&f>=0&&g<=0)return u=f/(f-g),t.copy(s).addScaledVector(js,u);wd.subVectors(e,l);const M=js.dot(wd),E=Ws.dot(wd);if(E>=0&&M<=E)return t.copy(l);const T=M*p-f*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(s).addScaledVector(Ws,d);const S=g*E-M*v;if(S<=0&&v-g>=0&&M-E>=0)return fg.subVectors(l,o),d=(v-g)/(v-g+(M-E)),t.copy(o).addScaledVector(fg,d);const _=1/(S+T+y);return u=T*_,d=y*_,t.copy(s).addScaledVector(js,u).addScaledVector(Ws,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const e0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function bd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class xt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=St.workingColorSpace){return this.r=e,this.g=t,this.b=s,St.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=St.workingColorSpace){if(e=FS(e,1),t=Ln(t,0,1),s=Ln(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=bd(u,l,e+1/3),this.g=bd(u,l,e),this.b=bd(u,l,e-1/3)}return St.toWorkingColorSpace(this,o),this}setStyle(e,t=Qn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){const s=e0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return St.fromWorkingColorSpace(mn.copy(this),e),Math.round(Ln(mn.r*255,0,255))*65536+Math.round(Ln(mn.g*255,0,255))*256+Math.round(Ln(mn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(mn.copy(this),t);const s=mn.r,o=mn.g,l=mn.b,u=Math.max(s,o,l),d=Math.min(s,o,l);let f,p;const g=(d+u)/2;if(d===u)f=0,p=0;else{const v=u-d;switch(p=g<=.5?v/(u+d):v/(2-u-d),u){case s:f=(o-l)/v+(o<l?6:0);break;case o:f=(l-s)/v+2;break;case l:f=(s-o)/v+4;break}f/=6}return e.h=f,e.s=p,e.l=g,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Qn){St.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,s=mn.g,o=mn.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Ul);const s=fd(Rr.h,Ul.h,t),o=fd(Rr.s,Ul.s,t),l=fd(Rr.l,Ul.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new xt;xt.NAMES=e0;let JS=0;class po extends ho{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=pa(),this.name="",this.blending=to,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Kd,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(s.blending=this.blending),this.side!==Dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==qd&&(s.blendSrc=this.blendSrc),this.blendDst!==Kd&&(s.blendDst=this.blendDst),this.blendEquation!==rs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class t0 extends po{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new ne,Nl=new Rt;class Ai{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Km,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ko(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Pn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ko(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ko(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ko(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ko(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),s=Pn(s,this.array),o=Pn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),s=Pn(s,this.array),o=Pn(o,this.array),l=Pn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Km&&(e.usage=this.usage),e}}class n0 extends Ai{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class i0 extends Ai{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Ci extends Ai{constructor(e,t,s){super(new Float32Array(e),t,s)}}let eM=0;const qn=new Ot,Pd=new rn,Xs=new ne,zn=new ga,ea=new ga,nn=new ne;class er extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zv(e)?i0:n0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new dt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,s){return qn.makeTranslation(e,t,s),this.applyMatrix4(qn),this}scale(e,t,s){return qn.makeScale(e,t,s),this.applyMatrix4(qn),this}lookAt(e){return Pd.lookAt(e),Pd.updateMatrix(),this.applyMatrix4(Pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ci(s,3))}else{for(let s=0,o=t.count;s<o;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];ea.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(zn.min,ea.min),zn.expandByPoint(nn),nn.addVectors(zn.max,ea.max),zn.expandByPoint(nn)):(zn.expandByPoint(ea.min),zn.expandByPoint(ea.max))}zn.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)nn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(nn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)nn.fromBufferAttribute(d,p),f&&(Xs.fromBufferAttribute(e,p),nn.add(Xs)),o=Math.max(o,s.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),d=[],f=[];for(let Y=0;Y<s.count;Y++)d[Y]=new ne,f[Y]=new ne;const p=new ne,g=new ne,v=new ne,y=new Rt,M=new Rt,E=new Rt,T=new ne,S=new ne;function _(Y,P,C){p.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,P),v.fromBufferAttribute(s,C),y.fromBufferAttribute(l,Y),M.fromBufferAttribute(l,P),E.fromBufferAttribute(l,C),g.sub(p),v.sub(p),M.sub(y),E.sub(y);const V=1/(M.x*E.y-E.x*M.y);isFinite(V)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(V),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(V),d[Y].add(T),d[P].add(T),d[C].add(T),f[Y].add(S),f[P].add(S),f[C].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Y=0,P=U.length;Y<P;++Y){const C=U[Y],V=C.start,fe=C.count;for(let W=V,ie=V+fe;W<ie;W+=3)_(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const L=new ne,b=new ne,F=new ne,N=new ne;function k(Y){F.fromBufferAttribute(o,Y),N.copy(F);const P=d[Y];L.copy(P),L.sub(F.multiplyScalar(F.dot(P))).normalize(),b.crossVectors(N,P);const V=b.dot(f[Y])<0?-1:1;u.setXYZW(Y,L.x,L.y,L.z,V)}for(let Y=0,P=U.length;Y<P;++Y){const C=U[Y],V=C.start,fe=C.count;for(let W=V,ie=V+fe;W<ie;W+=3)k(e.getX(W+0)),k(e.getX(W+1)),k(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const o=new ne,l=new ne,u=new ne,d=new ne,f=new ne,p=new ne,g=new ne,v=new ne;if(e)for(let y=0,M=e.count;y<M;y+=3){const E=e.getX(y+0),T=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),d.fromBufferAttribute(s,E),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),d.add(g),f.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,f.x,f.y,f.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=t.count;y<M;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,f){const p=d.array,g=d.itemSize,v=d.normalized,y=new p.constructor(f.length*g);let M=0,E=0;for(let T=0,S=f.length;T<S;T++){d.isInterleavedBufferAttribute?M=f[T]*d.data.stride+d.offset:M=f[T]*g;for(let _=0;_<g;_++)y[E++]=p[M++]}return new Ai(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new er,s=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,s);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let g=0,v=p.length;g<v;g++){const y=p[g],M=e(y,s);f.push(M)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const f in s){const p=s[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],g=[];for(let v=0,y=p.length;v<y;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(o[f]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],v=l[p];for(let y=0,M=v.length;y<M;y++)g.push(v[y].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hg=new Ot,Kr=new nh,Il=new Mc,pg=new ne,Fl=new ne,Ol=new ne,kl=new ne,Ld=new ne,Bl=new ne,mg=new ne,zl=new ne;class Dn extends rn{constructor(e=new er,t=new t0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Bl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const g=d[f],v=l[f];g!==0&&(Ld.fromBufferAttribute(v,e),u?Bl.addScaledVector(Ld,g):Bl.addScaledVector(Ld.sub(t),g))}t.add(Bl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Il.copy(s.boundingSphere),Il.applyMatrix4(l),Kr.copy(e.ray).recast(e.near),!(Il.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Il,pg)===null||Kr.origin.distanceToSquared(pg)>(e.far-e.near)**2))&&(hg.copy(l).invert(),Kr.copy(e.ray).applyMatrix4(hg),!(s.boundingBox!==null&&Kr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,y=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,T=y.length;E<T;E++){const S=y[E],_=u[S.materialIndex],U=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let b=U,F=L;b<F;b+=3){const N=d.getX(b),k=d.getX(b+1),Y=d.getX(b+2);o=Hl(this,_,e,s,p,g,v,N,k,Y),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let S=E,_=T;S<_;S+=3){const U=d.getX(S),L=d.getX(S+1),b=d.getX(S+2);o=Hl(this,u,e,s,p,g,v,U,L,b),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,T=y.length;E<T;E++){const S=y[E],_=u[S.materialIndex],U=Math.max(S.start,M.start),L=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let b=U,F=L;b<F;b+=3){const N=b,k=b+1,Y=b+2;o=Hl(this,_,e,s,p,g,v,N,k,Y),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),T=Math.min(f.count,M.start+M.count);for(let S=E,_=T;S<_;S+=3){const U=S,L=S+1,b=S+2;o=Hl(this,u,e,s,p,g,v,U,L,b),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function tM(r,e,t,s,o,l,u,d){let f;if(e.side===Un?f=s.intersectTriangle(u,l,o,!0,d):f=s.intersectTriangle(o,l,u,e.side===Dr,d),f===null)return null;zl.copy(d),zl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(zl);return p<t.near||p>t.far?null:{distance:p,point:zl.clone(),object:r}}function Hl(r,e,t,s,o,l,u,d,f,p){r.getVertexPosition(d,Fl),r.getVertexPosition(f,Ol),r.getVertexPosition(p,kl);const g=tM(r,e,t,s,Fl,Ol,kl,mg);if(g){const v=new ne;ei.getBarycoord(mg,Fl,Ol,kl,v),o&&(g.uv=ei.getInterpolatedAttribute(o,d,f,p,v,new Rt)),l&&(g.uv1=ei.getInterpolatedAttribute(l,d,f,p,v,new Rt)),u&&(g.normal=ei.getInterpolatedAttribute(u,d,f,p,v,new ne),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:f,c:p,normal:new ne,materialIndex:0};ei.getNormal(Fl,Ol,kl,y.normal),g.face=y,g.barycoord=v}return g}class mo extends er{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],g=[],v=[];let y=0,M=0;E("z","y","x",-1,-1,s,t,e,u,l,0),E("z","y","x",1,-1,s,t,-e,u,l,1),E("x","z","y",1,1,e,s,t,o,u,2),E("x","z","y",1,-1,e,s,-t,o,u,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(f),this.setAttribute("position",new Ci(p,3)),this.setAttribute("normal",new Ci(g,3)),this.setAttribute("uv",new Ci(v,2));function E(T,S,_,U,L,b,F,N,k,Y,P){const C=b/k,V=F/Y,fe=b/2,W=F/2,ie=N/2,G=k+1,X=Y+1;let J=0,B=0;const de=new ne;for(let ce=0;ce<X;ce++){const O=ce*V-W;for(let se=0;se<G;se++){const Ce=se*C-fe;de[T]=Ce*U,de[S]=O*L,de[_]=ie,p.push(de.x,de.y,de.z),de[T]=0,de[S]=0,de[_]=N>0?1:-1,g.push(de.x,de.y,de.z),v.push(se/k),v.push(1-ce/Y),J+=1}}for(let ce=0;ce<Y;ce++)for(let O=0;O<k;O++){const se=y+O+G*ce,Ce=y+O+G*(ce+1),re=y+(O+1)+G*(ce+1),he=y+(O+1)+G*ce;f.push(se,Ce,he),f.push(Ce,re,he),B+=6}d.addGroup(M,B,P),M+=B,y+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function yn(r){const e={};for(let t=0;t<r.length;t++){const s=co(r[t]);for(const o in s)e[o]=s[o]}return e}function nM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function r0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const iM={clone:co,merge:yn};var rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends po{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=sM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=nM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class s0 extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new ne,gg=new Rt,vg=new Rt;class Jn extends s0{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=If*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return If*2*Math.atan(Math.tan(cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,gg,vg),t.subVectors(vg,gg)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cc*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*s/p,o*=u.width/f,s*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Ys=1;class oM extends rn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Jn($s,Ys,e,t);o.layers=this.layers,this.add(o);const l=new Jn($s,Ys,e,t);l.layers=this.layers,this.add(l);const u=new Jn($s,Ys,e,t);u.layers=this.layers,this.add(u);const d=new Jn($s,Ys,e,t);d.layers=this.layers,this.add(d);const f=new Jn($s,Ys,e,t);f.layers=this.layers,this.add(f);const p=new Jn($s,Ys,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===hc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,u),e.setRenderTarget(s,2,o),e.render(t,d),e.setRenderTarget(s,3,o),e.render(t,f),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,o),e.render(t,g),e.setRenderTarget(v,y,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class o0 extends Nn{constructor(e,t,s,o,l,u,d,f,p,g){e=e!==void 0?e:[],t=t!==void 0?t:so,super(e,t,s,o,l,u,d,f,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aM extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new o0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new mo(5,5,5),l=new Ur({name:"CubemapFromEquirect",uniforms:co(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Un,blending:Pr});l.uniforms.tEquirect.value=t;const u=new Dn(o,l),d=t.minFilter;return t.minFilter===as&&(t.minFilter=wi),new oM(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}const Dd=new ne,lM=new ne,cM=new dt;class ts{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Dd.subVectors(s,t).cross(lM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Dd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||cM.getNormalMatrix(e),o=this.coplanarPoint(Dd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Mc,Vl=new ne;class rh{constructor(e=new ts,t=new ts,s=new ts,o=new ts,l=new ts,u=new ts){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ki){const s=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],f=o[3],p=o[4],g=o[5],v=o[6],y=o[7],M=o[8],E=o[9],T=o[10],S=o[11],_=o[12],U=o[13],L=o[14],b=o[15];if(s[0].setComponents(f-l,y-p,S-M,b-_).normalize(),s[1].setComponents(f+l,y+p,S+M,b+_).normalize(),s[2].setComponents(f+u,y+g,S+E,b+U).normalize(),s[3].setComponents(f-u,y-g,S-E,b-U).normalize(),s[4].setComponents(f-d,y-v,S-T,b-L).normalize(),t===Ki)s[5].setComponents(f+d,y+v,S+T,b+L).normalize();else if(t===hc)s[5].setComponents(d,v,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Vl.x=o.normal.x>0?e.max.x:e.min.x,Vl.y=o.normal.y>0?e.max.y:e.min.y,Vl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function a0(){let r=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function uM(r){const e=new WeakMap;function t(d,f){const p=d.array,g=d.usage,v=p.byteLength,y=r.createBuffer();r.bindBuffer(f,y),r.bufferData(f,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,f,p){const g=f.array,v=f.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,g);else{v.sort((M,E)=>M.start-E.start);let y=0;for(let M=1;M<v.length;M++){const E=v[y],T=v[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++y,v[y]=T)}v.length=y+1;for(let M=0,E=v.length;M<E;M++){const T=v[M];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(r.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:u}}class Ec extends er{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(s),f=Math.floor(o),p=d+1,g=f+1,v=e/d,y=t/f,M=[],E=[],T=[],S=[];for(let _=0;_<g;_++){const U=_*y-u;for(let L=0;L<p;L++){const b=L*v-l;E.push(b,-U,0),T.push(0,0,1),S.push(L/d),S.push(1-_/f)}}for(let _=0;_<f;_++)for(let U=0;U<d;U++){const L=U+p*_,b=U+p*(_+1),F=U+1+p*(_+1),N=U+1+p*_;M.push(L,b,N),M.push(b,F,N)}this.setIndex(M),this.setAttribute("position",new Ci(E,3)),this.setAttribute("normal",new Ci(T,3)),this.setAttribute("uv",new Ci(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}var dM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fM=`#ifdef USE_ALPHAHASH
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
#endif`,hM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
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
#endif`,xM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_M=`#ifdef USE_BATCHING
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
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TM=`#ifdef USE_IRIDESCENCE
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
#endif`,wM=`#ifdef USE_BUMPMAP
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
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,NM=`#define PI 3.141592653589793
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
} // validated`,IM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FM=`vec3 transformedNormal = objectNormal;
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
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HM="gl_FragColor = linearToOutputTexel( gl_FragColor );",VM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QM=`#ifdef USE_GRADIENTMAP
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
}`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nE=`uniform bool receiveShadow;
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
#endif`,iE=`#ifdef USE_ENVMAP
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
#endif`,rE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lE=`PhysicalMaterial material;
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
#endif`,cE=`struct PhysicalMaterial {
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
}`,uE=`
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
#endif`,dE=`#if defined( RE_IndirectDiffuse )
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
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yE=`#if defined( USE_POINTS_UV )
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
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RE=`#ifdef USE_MORPHTARGETS
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
#endif`,AE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UE=`#ifdef USE_NORMALMAP
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
#endif`,NE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qE=`float getShadowMask() {
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
}`,KE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZE=`#ifdef USE_SKINNING
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
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JE=`#ifdef USE_SKINNING
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
#endif`,e1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r1=`#ifdef USE_TRANSMISSION
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
#endif`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d1=`uniform sampler2D t2D;
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`#include <common>
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
}`,v1=`#if DEPTH_PACKING == 3200
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
}`,x1=`#define DISTANCE
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
}`,_1=`#define DISTANCE
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`uniform float scale;
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
}`,E1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,w1=`uniform vec3 diffuse;
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
}`,R1=`#define LAMBERT
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
}`,A1=`#define LAMBERT
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
}`,C1=`#define MATCAP
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
}`,b1=`#define MATCAP
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
}`,P1=`#define NORMAL
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
}`,L1=`#define NORMAL
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
}`,D1=`#define PHONG
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
}`,U1=`#define PHONG
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
}`,N1=`#define STANDARD
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
}`,I1=`#define STANDARD
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
}`,F1=`#define TOON
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
}`,O1=`#define TOON
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
}`,k1=`uniform float size;
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
}`,B1=`uniform vec3 diffuse;
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
}`,z1=`#include <common>
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
}`,H1=`uniform vec3 color;
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
}`,V1=`uniform float rotation;
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
}`,G1=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:dM,alphahash_pars_fragment:fM,alphamap_fragment:hM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:gM,aomap_fragment:vM,aomap_pars_fragment:xM,batching_pars_vertex:_M,batching_vertex:yM,begin_vertex:SM,beginnormal_vertex:MM,bsdfs:EM,iridescence_fragment:TM,bumpmap_pars_fragment:wM,clipping_planes_fragment:RM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:bM,color_fragment:PM,color_pars_fragment:LM,color_pars_vertex:DM,color_vertex:UM,common:NM,cube_uv_reflection_fragment:IM,defaultnormal_vertex:FM,displacementmap_pars_vertex:OM,displacementmap_vertex:kM,emissivemap_fragment:BM,emissivemap_pars_fragment:zM,colorspace_fragment:HM,colorspace_pars_fragment:VM,envmap_fragment:GM,envmap_common_pars_fragment:jM,envmap_pars_fragment:WM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:iE,envmap_vertex:$M,fog_vertex:YM,fog_pars_vertex:qM,fog_fragment:KM,fog_pars_fragment:ZM,gradientmap_pars_fragment:QM,lightmap_pars_fragment:JM,lights_lambert_fragment:eE,lights_lambert_pars_fragment:tE,lights_pars_begin:nE,lights_toon_fragment:rE,lights_toon_pars_fragment:sE,lights_phong_fragment:oE,lights_phong_pars_fragment:aE,lights_physical_fragment:lE,lights_physical_pars_fragment:cE,lights_fragment_begin:uE,lights_fragment_maps:dE,lights_fragment_end:fE,logdepthbuf_fragment:hE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:gE,map_fragment:vE,map_pars_fragment:xE,map_particle_fragment:_E,map_particle_pars_fragment:yE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:ME,morphinstance_vertex:EE,morphcolor_vertex:TE,morphnormal_vertex:wE,morphtarget_pars_vertex:RE,morphtarget_vertex:AE,normal_fragment_begin:CE,normal_fragment_maps:bE,normal_pars_fragment:PE,normal_pars_vertex:LE,normal_vertex:DE,normalmap_pars_fragment:UE,clearcoat_normal_fragment_begin:NE,clearcoat_normal_fragment_maps:IE,clearcoat_pars_fragment:FE,iridescence_pars_fragment:OE,opaque_fragment:kE,packing:BE,premultiplied_alpha_fragment:zE,project_vertex:HE,dithering_fragment:VE,dithering_pars_fragment:GE,roughnessmap_fragment:jE,roughnessmap_pars_fragment:WE,shadowmap_pars_fragment:XE,shadowmap_pars_vertex:$E,shadowmap_vertex:YE,shadowmask_pars_fragment:qE,skinbase_vertex:KE,skinning_pars_vertex:ZE,skinning_vertex:QE,skinnormal_vertex:JE,specularmap_fragment:e1,specularmap_pars_fragment:t1,tonemapping_fragment:n1,tonemapping_pars_fragment:i1,transmission_fragment:r1,transmission_pars_fragment:s1,uv_pars_fragment:o1,uv_pars_vertex:a1,uv_vertex:l1,worldpos_vertex:c1,background_vert:u1,background_frag:d1,backgroundCube_vert:f1,backgroundCube_frag:h1,cube_vert:p1,cube_frag:m1,depth_vert:g1,depth_frag:v1,distanceRGBA_vert:x1,distanceRGBA_frag:_1,equirect_vert:y1,equirect_frag:S1,linedashed_vert:M1,linedashed_frag:E1,meshbasic_vert:T1,meshbasic_frag:w1,meshlambert_vert:R1,meshlambert_frag:A1,meshmatcap_vert:C1,meshmatcap_frag:b1,meshnormal_vert:P1,meshnormal_frag:L1,meshphong_vert:D1,meshphong_frag:U1,meshphysical_vert:N1,meshphysical_frag:I1,meshtoon_vert:F1,meshtoon_frag:O1,points_vert:k1,points_frag:B1,shadow_vert:z1,shadow_frag:H1,sprite_vert:V1,sprite_frag:G1},Ue={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ti={basic:{uniforms:yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new xt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:yn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:yn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new xt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:yn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:yn([Ue.points,Ue.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:yn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:yn([Ue.common,Ue.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:yn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:yn([Ue.sprite,Ue.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:yn([Ue.common,Ue.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:yn([Ue.lights,Ue.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ti.physical={uniforms:yn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Gl={r:0,b:0,g:0},Qr=new bi,j1=new Ot;function W1(r,e,t,s,o,l,u){const d=new xt(0);let f=l===!0?0:1,p,g,v=null,y=0,M=null;function E(U){let L=U.isScene===!0?U.background:null;return L&&L.isTexture&&(L=(U.backgroundBlurriness>0?t:e).get(L)),L}function T(U){let L=!1;const b=E(U);b===null?_(d,f):b&&b.isColor&&(_(b,1),L=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(U,L){const b=E(L);b&&(b.isCubeTexture||b.mapping===yc)?(g===void 0&&(g=new Dn(new mo(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:co(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,N,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Qr.copy(L.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),g.material.uniforms.envMap.value=b,g.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(Qr)),g.material.toneMapped=St.getTransfer(b.colorSpace)!==Pt,(v!==b||y!==b.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,v=b,y=b.version,M=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):b&&b.isTexture&&(p===void 0&&(p=new Dn(new Ec(2,2),new Ur({name:"BackgroundMaterial",uniforms:co(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=b,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=St.getTransfer(b.colorSpace)!==Pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),p.material.uniforms.uvTransform.value.copy(b.matrix),(v!==b||y!==b.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,v=b,y=b.version,M=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,L){U.getRGB(Gl,r0(r)),s.buffers.color.setClear(Gl.r,Gl.g,Gl.b,L,u)}return{getClearColor:function(){return d},setClearColor:function(U,L=1){d.set(U),f=L,_(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(U){f=U,_(d,f)},render:T,addToRenderList:S}}function X1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=y(null);let l=o,u=!1;function d(C,V,fe,W,ie){let G=!1;const X=v(W,fe,V);l!==X&&(l=X,p(l.object)),G=M(C,W,fe,ie),G&&E(C,W,fe,ie),ie!==null&&e.update(ie,r.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,b(C,V,fe,W),ie!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function f(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function v(C,V,fe){const W=fe.wireframe===!0;let ie=s[C.id];ie===void 0&&(ie={},s[C.id]=ie);let G=ie[V.id];G===void 0&&(G={},ie[V.id]=G);let X=G[W];return X===void 0&&(X=y(f()),G[W]=X),X}function y(C){const V=[],fe=[],W=[];for(let ie=0;ie<t;ie++)V[ie]=0,fe[ie]=0,W[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:fe,attributeDivisors:W,object:C,attributes:{},index:null}}function M(C,V,fe,W){const ie=l.attributes,G=V.attributes;let X=0;const J=fe.getAttributes();for(const B in J)if(J[B].location>=0){const ce=ie[B];let O=G[B];if(O===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),ce===void 0||ce.attribute!==O||O&&ce.data!==O.data)return!0;X++}return l.attributesNum!==X||l.index!==W}function E(C,V,fe,W){const ie={},G=V.attributes;let X=0;const J=fe.getAttributes();for(const B in J)if(J[B].location>=0){let ce=G[B];ce===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor));const O={};O.attribute=ce,ce&&ce.data&&(O.data=ce.data),ie[B]=O,X++}l.attributes=ie,l.attributesNum=X,l.index=W}function T(){const C=l.newAttributes;for(let V=0,fe=C.length;V<fe;V++)C[V]=0}function S(C){_(C,0)}function _(C,V){const fe=l.newAttributes,W=l.enabledAttributes,ie=l.attributeDivisors;fe[C]=1,W[C]===0&&(r.enableVertexAttribArray(C),W[C]=1),ie[C]!==V&&(r.vertexAttribDivisor(C,V),ie[C]=V)}function U(){const C=l.newAttributes,V=l.enabledAttributes;for(let fe=0,W=V.length;fe<W;fe++)V[fe]!==C[fe]&&(r.disableVertexAttribArray(fe),V[fe]=0)}function L(C,V,fe,W,ie,G,X){X===!0?r.vertexAttribIPointer(C,V,fe,ie,G):r.vertexAttribPointer(C,V,fe,W,ie,G)}function b(C,V,fe,W){T();const ie=W.attributes,G=fe.getAttributes(),X=V.defaultAttributeValues;for(const J in G){const B=G[J];if(B.location>=0){let de=ie[J];if(de===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),de!==void 0){const ce=de.normalized,O=de.itemSize,se=e.get(de);if(se===void 0)continue;const Ce=se.buffer,re=se.type,he=se.bytesPerElement,Ee=re===r.INT||re===r.UNSIGNED_INT||de.gpuType===Kf;if(de.isInterleavedBufferAttribute){const _e=de.data,be=_e.stride,Fe=de.offset;if(_e.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)_(B.location+Ze,_e.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)S(B.location+Ze);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Ze=0;Ze<B.locationSize;Ze++)L(B.location+Ze,O/B.locationSize,re,ce,be*he,(Fe+O/B.locationSize*Ze)*he,Ee)}else{if(de.isInstancedBufferAttribute){for(let _e=0;_e<B.locationSize;_e++)_(B.location+_e,de.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let _e=0;_e<B.locationSize;_e++)S(B.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let _e=0;_e<B.locationSize;_e++)L(B.location+_e,O/B.locationSize,re,ce,O*he,O/B.locationSize*_e*he,Ee)}}else if(X!==void 0){const ce=X[J];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(B.location,ce);break;case 3:r.vertexAttrib3fv(B.location,ce);break;case 4:r.vertexAttrib4fv(B.location,ce);break;default:r.vertexAttrib1fv(B.location,ce)}}}}U()}function F(){Y();for(const C in s){const V=s[C];for(const fe in V){const W=V[fe];for(const ie in W)g(W[ie].object),delete W[ie];delete V[fe]}delete s[C]}}function N(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const fe in V){const W=V[fe];for(const ie in W)g(W[ie].object),delete W[ie];delete V[fe]}delete s[C.id]}function k(C){for(const V in s){const fe=s[V];if(fe[C.id]===void 0)continue;const W=fe[C.id];for(const ie in W)g(W[ie].object),delete W[ie];delete fe[C.id]}}function Y(){P(),u=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:P,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfProgram:k,initAttributes:T,enableAttribute:S,disableUnusedAttributes:U}}function $1(r,e,t){let s;function o(p){s=p}function l(p,g){r.drawArrays(s,p,g),t.update(g,s,1)}function u(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),t.update(g,s,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E];t.update(M,s,1)}function f(p,g,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)u(p[E],g[E],y[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*y[T];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Y1(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==hi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const Y=k===ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Ji&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==qi&&!Y)}function f(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=f(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:F,maxSamples:N}}function q1(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new ts,d=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||s!==0||o;return o=y,s=v.length,M},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=g(v,y,0)},this.setState=function(v,y,M){const E=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,_=r.get(v);if(!o||E===null||E.length===0||l&&!S)l?g(null):p();else{const U=l?0:s,L=U*4;let b=_.clippingState||null;f.value=b,b=g(E,y,L,M);for(let F=0;F!==L;++F)b[F]=t[F];_.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,y,M,E){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=f.value,E!==!0||S===null){const _=M+T*4,U=y.matrixWorldInverse;d.getNormalMatrix(U),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,b=M;L!==T;++L,b+=4)u.copy(v[L]).applyMatrix4(U,d),u.normal.toArray(S,b),S[b+3]=u.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function K1(r){let e=new WeakMap;function t(u,d){return d===sf?u.mapping=so:d===of&&(u.mapping=oo),u}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===sf||d===of)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new aM(f.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class l0 extends s0{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=g*this.view.offsetY,f=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Js=4,xg=[.125,.215,.35,.446,.526,.582],ss=20,Ud=new l0,_g=new xt;let Nd=null,Id=0,Fd=0,Od=!1;const ns=(1+Math.sqrt(5))/2,qs=1/ns,yg=[new ne(-ns,qs,0),new ne(ns,qs,0),new ne(-qs,0,ns),new ne(qs,0,ns),new ne(0,ns,-qs),new ne(0,ns,qs),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class Sg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){Nd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd,Id,Fd),this._renderer.xr.enabled=Od,e.scissorTest=!1,jl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:ha,format:hi,colorSpace:fo,depthBuffer:!1},o=Mg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z1(l)),this._blurMaterial=Q1(l,e,t)}return o}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,Ud)}_sceneToCubeUV(e,t,s,o){const d=new Jn(90,1,t,s),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(_g),g.toneMapping=Lr,g.autoClear=!1;const M=new t0({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),E=new Dn(new mo,M);let T=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,T=!0):(M.color.copy(_g),T=!0);for(let _=0;_<6;_++){const U=_%3;U===0?(d.up.set(0,f[_],0),d.lookAt(p[_],0,0)):U===1?(d.up.set(0,0,f[_]),d.lookAt(0,p[_],0)):(d.up.set(0,f[_],0),d.lookAt(0,0,p[_]));const L=this._cubeSize;jl(o,U*L,_>2?L:0,L,L),g.setRenderTarget(o),T&&g.render(E,d),g.render(e,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=S}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===so||e.mapping===oo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Dn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;jl(t,0,0,3*f,2*f),s.setRenderTarget(t),s.render(u,Ud)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=yg[(o-l-1)%yg.length];this._blur(e,l-1,l,u,d)}t.autoClear=s}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,d){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Dn(this._lodPlanes[o],p),y=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ss-1),T=l/E,S=isFinite(l)?1+Math.floor(g*T):ss;S>ss&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ss}`);const _=[];let U=0;for(let k=0;k<ss;++k){const Y=k/T,P=Math.exp(-Y*Y/2);_.push(P),k===0?U+=P:k<S&&(U+=2*P)}for(let k=0;k<_.length;k++)_[k]=_[k]/U;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-s;const b=this._sizeLods[o],F=3*b*(o>L-Js?o-L+Js:0),N=4*(this._cubeSize-b);jl(t,F,N,3*b,2*b),f.setRenderTarget(t),f.render(v,Ud)}}function Z1(r){const e=[],t=[],s=[];let o=r;const l=r-Js+1+xg.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let f=1/d;u>r-Js?f=xg[u-r+Js-1]:u===0&&(f=0),s.push(f);const p=1/(d-2),g=-p,v=1+p,y=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,E=6,T=3,S=2,_=1,U=new Float32Array(T*E*M),L=new Float32Array(S*E*M),b=new Float32Array(_*E*M);for(let N=0;N<M;N++){const k=N%3*2/3-1,Y=N>2?0:-1,P=[k,Y,0,k+2/3,Y,0,k+2/3,Y+1,0,k,Y,0,k+2/3,Y+1,0,k,Y+1,0];U.set(P,T*E*N),L.set(y,S*E*N);const C=[N,N,N,N,N,N];b.set(C,_*E*N)}const F=new er;F.setAttribute("position",new Ai(U,T)),F.setAttribute("uv",new Ai(L,S)),F.setAttribute("faceIndex",new Ai(b,_)),e.push(F),o>Js&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Mg(r,e,t){const s=new us(r,e,t);return s.texture.mapping=yc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function jl(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function Q1(r,e,t){const s=new Float32Array(ss),o=new ne(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:sh(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Eg(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Tg(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function sh(){return`

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
	`}function J1(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const f=d.mapping,p=f===sf||f===of,g=f===so||f===oo;if(p||g){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new Sg(r)),v=p?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&o(M)?(t===null&&(t=new Sg(r)),v=p?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function o(d){let f=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function eT(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&na("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function tT(r,e,t,s){const o={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const T=y.morphAttributes[E];for(let S=0,_=T.length;S<_;S++)e.remove(T[S])}y.removeEventListener("dispose",u),delete o[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(v,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function f(v){const y=v.attributes;for(const E in y)e.update(y[E],r.ARRAY_BUFFER);const M=v.morphAttributes;for(const E in M){const T=M[E];for(let S=0,_=T.length;S<_;S++)e.update(T[S],r.ARRAY_BUFFER)}}function p(v){const y=[],M=v.index,E=v.attributes.position;let T=0;if(M!==null){const U=M.array;T=M.version;for(let L=0,b=U.length;L<b;L+=3){const F=U[L+0],N=U[L+1],k=U[L+2];y.push(F,N,N,k,k,F)}}else if(E!==void 0){const U=E.array;T=E.version;for(let L=0,b=U.length/3-1;L<b;L+=3){const F=L+0,N=L+1,k=L+2;y.push(F,N,N,k,k,F)}}else return;const S=new(Zv(y)?i0:n0)(y,1);S.version=T;const _=l.get(v);_&&e.remove(_),l.set(v,S)}function g(v){const y=l.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&p(v)}else p(v);return l.get(v)}return{get:d,update:f,getWireframeAttribute:g}}function nT(r,e,t){let s;function o(y){s=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function f(y,M){r.drawElements(s,M,l,y*u),t.update(M,s,1)}function p(y,M,E){E!==0&&(r.drawElementsInstanced(s,M,l,y*u,E),t.update(M,s,E))}function g(y,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,l,y,0,E);let S=0;for(let _=0;_<E;_++)S+=M[_];t.update(S,s,1)}function v(y,M,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)p(y[_]/u,M[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,l,y,0,T,0,E);let _=0;for(let U=0;U<E;U++)_+=M[U]*T[U];t.update(_,s,1)}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function iT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,d){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function rT(r,e,t){const s=new WeakMap,o=new Vt;function l(u,d,f){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==v){let C=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let b=0;E===!0&&(b=1),T===!0&&(b=2),S===!0&&(b=3);let F=d.attributes.position.count*b,N=1;F>e.maxTextureSize&&(N=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const k=new Float32Array(F*N*4*v),Y=new Jv(k,F,N,v);Y.type=qi,Y.needsUpdate=!0;const P=b*4;for(let V=0;V<v;V++){const fe=_[V],W=U[V],ie=L[V],G=F*N*4*V;for(let X=0;X<fe.count;X++){const J=X*P;E===!0&&(o.fromBufferAttribute(fe,X),k[G+J+0]=o.x,k[G+J+1]=o.y,k[G+J+2]=o.z,k[G+J+3]=0),T===!0&&(o.fromBufferAttribute(W,X),k[G+J+4]=o.x,k[G+J+5]=o.y,k[G+J+6]=o.z,k[G+J+7]=0),S===!0&&(o.fromBufferAttribute(ie,X),k[G+J+8]=o.x,k[G+J+9]=o.y,k[G+J+10]=o.z,k[G+J+11]=ie.itemSize===4?o.w:1)}}y={count:v,texture:Y,size:new Rt(F,N)},s.set(d,y),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=d.morphTargetsRelative?1:1-E;f.getUniforms().setValue(r,"morphTargetBaseInfluence",T),f.getUniforms().setValue(r,"morphTargetInfluences",p)}f.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:l}}function sT(r,e,t,s){let o=new WeakMap;function l(f){const p=s.render.frame,g=f.geometry,v=e.get(f,g);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const y=f.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return v}function u(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class c0 extends Nn{constructor(e,t,s,o,l,u,d,f,p,g=no){if(g!==no&&g!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===no&&(s=cs),s===void 0&&g===lo&&(s=ao),super(null,o,l,u,d,f,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:mi,this.minFilter=f!==void 0?f:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const u0=new Nn,wg=new c0(1,1),d0=new Jv,f0=new WS,h0=new o0,Rg=[],Ag=[],Cg=new Float32Array(16),bg=new Float32Array(9),Pg=new Float32Array(4);function go(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=Rg[o];if(l===void 0&&(l=new Float32Array(o),Rg[o]=l),e!==0){s.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,r[u].toArray(l,d)}return l}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Zt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Tc(r,e){let t=Ag[e];t===void 0&&(t=new Int32Array(e),Ag[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function oT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function aT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Zt(t,e)}}function lT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Zt(t,e)}}function cT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Zt(t,e)}}function uT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;Pg.set(s),r.uniformMatrix2fv(this.addr,!1,Pg),Zt(t,s)}}function dT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;bg.set(s),r.uniformMatrix3fv(this.addr,!1,bg),Zt(t,s)}}function fT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;Cg.set(s),r.uniformMatrix4fv(this.addr,!1,Cg),Zt(t,s)}}function hT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function pT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Zt(t,e)}}function mT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Zt(t,e)}}function gT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Zt(t,e)}}function vT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function xT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Zt(t,e)}}function _T(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Zt(t,e)}}function yT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Zt(t,e)}}function ST(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(wg.compareFunction=Kv,l=wg):l=u0,t.setTexture2D(e||l,o)}function MT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||f0,o)}function ET(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||h0,o)}function TT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||d0,o)}function wT(r){switch(r){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return dT;case 35676:return fT;case 5124:case 35670:return hT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return xT;case 36295:return _T;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return TT}}function RT(r,e){r.uniform1fv(this.addr,e)}function AT(r,e){const t=go(e,this.size,2);r.uniform2fv(this.addr,t)}function CT(r,e){const t=go(e,this.size,3);r.uniform3fv(this.addr,t)}function bT(r,e){const t=go(e,this.size,4);r.uniform4fv(this.addr,t)}function PT(r,e){const t=go(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function LT(r,e){const t=go(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function DT(r,e){const t=go(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function UT(r,e){r.uniform1iv(this.addr,e)}function NT(r,e){r.uniform2iv(this.addr,e)}function IT(r,e){r.uniform3iv(this.addr,e)}function FT(r,e){r.uniform4iv(this.addr,e)}function OT(r,e){r.uniform1uiv(this.addr,e)}function kT(r,e){r.uniform2uiv(this.addr,e)}function BT(r,e){r.uniform3uiv(this.addr,e)}function zT(r,e){r.uniform4uiv(this.addr,e)}function HT(r,e,t){const s=this.cache,o=e.length,l=Tc(t,o);Kt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||u0,l[u])}function VT(r,e,t){const s=this.cache,o=e.length,l=Tc(t,o);Kt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||f0,l[u])}function GT(r,e,t){const s=this.cache,o=e.length,l=Tc(t,o);Kt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||h0,l[u])}function jT(r,e,t){const s=this.cache,o=e.length,l=Tc(t,o);Kt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||d0,l[u])}function WT(r){switch(r){case 5126:return RT;case 35664:return AT;case 35665:return CT;case 35666:return bT;case 35674:return PT;case 35675:return LT;case 35676:return DT;case 5124:case 35670:return UT;case 35667:case 35671:return NT;case 35668:case 35672:return IT;case 35669:case 35673:return FT;case 5125:return OT;case 36294:return kT;case 36295:return BT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return jT}}class XT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=wT(t.type)}}class $T{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WT(t.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const kd=/(\w+)(\])?(\[|\.)?/g;function Lg(r,e){r.seq.push(e),r.map[e.id]=e}function qT(r,e,t){const s=r.name,o=s.length;for(kd.lastIndex=0;;){const l=kd.exec(s),u=kd.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===o){Lg(t,p===void 0?new XT(d,r,e):new $T(d,r,e));break}else{let v=t.map[d];v===void 0&&(v=new YT(d),Lg(t,v)),t=v}}}class uc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);qT(l,u,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=s[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function Dg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const KT=37297;let ZT=0;function QT(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;s.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return s.join(`
`)}const Ug=new dt;function JT(r){St._getMatrix(Ug,St.workingColorSpace,r);const e=`mat3( ${Ug.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(r)){case Sc:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ng(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+QT(r.getShaderSource(e),u)}else return o}function ew(r,e){const t=JT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tw(r,e){let t;switch(e){case xS:t="Linear";break;case _S:t="Reinhard";break;case yS:t="Cineon";break;case SS:t="ACESFilmic";break;case ES:t="AgX";break;case TS:t="Neutral";break;case MS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new ne;function nw(){St.getLuminanceCoefficients(Wl);const r=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function rw(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function sw(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:d}}return t}function ia(r){return r!==""}function Ig(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ff(r){return r.replace(ow,lw)}const aw=new Map;function lw(r,e){let t=ft[e];if(t===void 0){const s=aw.get(e);if(s!==void 0)t=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ff(t)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(r){return r.replace(cw,uw)}function uw(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function kg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function dw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Zy?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function fw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function pw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ov:e="ENVMAP_BLENDING_MULTIPLY";break;case gS:e="ENVMAP_BLENDING_MIX";break;case vS:e="ENVMAP_BLENDING_ADD";break}return e}function mw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function gw(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=dw(t),p=fw(t),g=hw(t),v=pw(t),y=mw(t),M=iw(t),E=rw(l),T=o.createProgram();let S,_,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ia).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ia).join(`
`),_.length>0&&(_+=`
`)):(S=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),_=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lr?"#define TONE_MAPPING":"",t.toneMapping!==Lr?ft.tonemapping_pars_fragment:"",t.toneMapping!==Lr?tw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,ew("linearToOutputTexel",t.outputColorSpace),nw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),u=Ff(u),u=Ig(u,t),u=Fg(u,t),d=Ff(d),d=Ig(d,t),d=Fg(d,t),u=Og(u),d=Og(d),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===Zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=U+S+u,b=U+_+d,F=Dg(o,o.VERTEX_SHADER,L),N=Dg(o,o.FRAGMENT_SHADER,b);o.attachShader(T,F),o.attachShader(T,N),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function k(V){if(r.debug.checkShaderErrors){const fe=o.getProgramInfoLog(T).trim(),W=o.getShaderInfoLog(F).trim(),ie=o.getShaderInfoLog(N).trim();let G=!0,X=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,F,N);else{const J=Ng(o,F,"vertex"),B=Ng(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+fe+`
`+J+`
`+B)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(W===""||ie==="")&&(X=!1);X&&(V.diagnostics={runnable:G,programLog:fe,vertexShader:{log:W,prefix:S},fragmentShader:{log:ie,prefix:_}})}o.deleteShader(F),o.deleteShader(N),Y=new uc(o,T),P=sw(o,T)}let Y;this.getUniforms=function(){return Y===void 0&&k(this),Y};let P;this.getAttributes=function(){return P===void 0&&k(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,KT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=N,this}let vw=0;class xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new _w(e),t.set(e,s)),s}}class _w{constructor(e){this.id=vw++,this.code=e,this.usedTimes=0}}function yw(r,e,t,s,o,l,u){const d=new ih,f=new xw,p=new Set,g=[],v=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return p.add(P),P===0?"uv":`uv${P}`}function S(P,C,V,fe,W){const ie=fe.fog,G=W.geometry,X=P.isMeshStandardMaterial?fe.environment:null,J=(P.isMeshStandardMaterial?t:e).get(P.envMap||X),B=J&&J.mapping===yc?J.image.height:null,de=E[P.type];P.precision!==null&&(M=o.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const ce=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,O=ce!==void 0?ce.length:0;let se=0;G.morphAttributes.position!==void 0&&(se=1),G.morphAttributes.normal!==void 0&&(se=2),G.morphAttributes.color!==void 0&&(se=3);let Ce,re,he,Ee;if(de){const _t=Ti[de];Ce=_t.vertexShader,re=_t.fragmentShader}else Ce=P.vertexShader,re=P.fragmentShader,f.update(P),he=f.getVertexShaderID(P),Ee=f.getFragmentShaderID(P);const _e=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),Fe=W.isInstancedMesh===!0,Ze=W.isBatchedMesh===!0,Tt=!!P.map,ht=!!P.matcap,Ct=!!J,q=!!P.aoMap,Qt=!!P.lightMap,Te=!!P.bumpMap,Le=!!P.normalMap,Oe=!!P.displacementMap,ot=!!P.emissiveMap,Ge=!!P.metalnessMap,D=!!P.roughnessMap,R=P.anisotropy>0,ee=P.clearcoat>0,me=P.dispersion>0,ve=P.iridescence>0,pe=P.sheen>0,ke=P.transmission>0,Pe=R&&!!P.anisotropyMap,Be=ee&&!!P.clearcoatMap,ct=ee&&!!P.clearcoatNormalMap,Me=ee&&!!P.clearcoatRoughnessMap,He=ve&&!!P.iridescenceMap,tt=ve&&!!P.iridescenceThicknessMap,nt=pe&&!!P.sheenColorMap,je=pe&&!!P.sheenRoughnessMap,pt=!!P.specularMap,at=!!P.specularColorMap,At=!!P.specularIntensityMap,$=ke&&!!P.transmissionMap,De=ke&&!!P.thicknessMap,ue=!!P.gradientMap,ge=!!P.alphaMap,Ie=P.alphaTest>0,Ne=!!P.alphaHash,lt=!!P.extensions;let Ut=Lr;P.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const Xt={shaderID:de,shaderType:P.type,shaderName:P.name,vertexShader:Ce,fragmentShader:re,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:Ze,batchingColor:Ze&&W._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&W.instanceColor!==null,instancingMorph:Fe&&W.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:fo,alphaToCoverage:!!P.alphaToCoverage,map:Tt,matcap:ht,envMap:Ct,envMapMode:Ct&&J.mapping,envMapCubeUVHeight:B,aoMap:q,lightMap:Qt,bumpMap:Te,normalMap:Le,displacementMap:y&&Oe,emissiveMap:ot,normalMapObjectSpace:Le&&P.normalMapType===CS,normalMapTangentSpace:Le&&P.normalMapType===qv,metalnessMap:Ge,roughnessMap:D,anisotropy:R,anisotropyMap:Pe,clearcoat:ee,clearcoatMap:Be,clearcoatNormalMap:ct,clearcoatRoughnessMap:Me,dispersion:me,iridescence:ve,iridescenceMap:He,iridescenceThicknessMap:tt,sheen:pe,sheenColorMap:nt,sheenRoughnessMap:je,specularMap:pt,specularColorMap:at,specularIntensityMap:At,transmission:ke,transmissionMap:$,thicknessMap:De,gradientMap:ue,opaque:P.transparent===!1&&P.blending===to&&P.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ie,alphaHash:Ne,combine:P.combine,mapUv:Tt&&T(P.map.channel),aoMapUv:q&&T(P.aoMap.channel),lightMapUv:Qt&&T(P.lightMap.channel),bumpMapUv:Te&&T(P.bumpMap.channel),normalMapUv:Le&&T(P.normalMap.channel),displacementMapUv:Oe&&T(P.displacementMap.channel),emissiveMapUv:ot&&T(P.emissiveMap.channel),metalnessMapUv:Ge&&T(P.metalnessMap.channel),roughnessMapUv:D&&T(P.roughnessMap.channel),anisotropyMapUv:Pe&&T(P.anisotropyMap.channel),clearcoatMapUv:Be&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:ct&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:je&&T(P.sheenRoughnessMap.channel),specularMapUv:pt&&T(P.specularMap.channel),specularColorMapUv:at&&T(P.specularColorMap.channel),specularIntensityMapUv:At&&T(P.specularIntensityMap.channel),transmissionMapUv:$&&T(P.transmissionMap.channel),thicknessMapUv:De&&T(P.thicknessMap.channel),alphaMapUv:ge&&T(P.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Le||R),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!G.attributes.uv&&(Tt||ge),fog:!!ie,useFog:P.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:be,skinning:W.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Tt&&P.map.isVideoTexture===!0&&St.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:ot&&P.emissiveMap.isVideoTexture===!0&&St.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Yi,flipSided:P.side===Un,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:lt&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&P.extensions.multiDraw===!0||Ze)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Xt.vertexUv1s=p.has(1),Xt.vertexUv2s=p.has(2),Xt.vertexUv3s=p.has(3),p.clear(),Xt}function _(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)C.push(V),C.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(U(C,P),L(C,P),C.push(r.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function U(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function L(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function b(P){const C=E[P.type];let V;if(C){const fe=Ti[C];V=iM.clone(fe.uniforms)}else V=P.uniforms;return V}function F(P,C){let V;for(let fe=0,W=g.length;fe<W;fe++){const ie=g[fe];if(ie.cacheKey===C){V=ie,++V.usedTimes;break}}return V===void 0&&(V=new gw(r,C,P,l),g.push(V)),V}function N(P){if(--P.usedTimes===0){const C=g.indexOf(P);g[C]=g[g.length-1],g.pop(),P.destroy()}}function k(P){f.remove(P)}function Y(){f.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:b,acquireProgram:F,releaseProgram:N,releaseShaderCache:k,programs:g,dispose:Y}}function Sw(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function s(u){r.delete(u)}function o(u,d,f){r.get(u)[d]=f}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function Mw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Bg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function zg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(v,y,M,E,T,S){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:M,groupOrder:E,renderOrder:v.renderOrder,z:T,group:S},r[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=M,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=T,_.group=S),e++,_}function d(v,y,M,E,T,S){const _=u(v,y,M,E,T,S);M.transmission>0?s.push(_):M.transparent===!0?o.push(_):t.push(_)}function f(v,y,M,E,T,S){const _=u(v,y,M,E,T,S);M.transmission>0?s.unshift(_):M.transparent===!0?o.unshift(_):t.unshift(_)}function p(v,y){t.length>1&&t.sort(v||Mw),s.length>1&&s.sort(y||Bg),o.length>1&&o.sort(y||Bg)}function g(){for(let v=e,y=r.length;v<y;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:d,unshift:f,finish:g,sort:p}}function Ew(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new zg,r.set(s,[u])):o>=l.length?(u=new zg,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function Tw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new xt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return r[e.id]=t,t}}}function ww(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Rw=0;function Aw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Cw(r){const e=new Tw,t=ww(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ne);const o=new ne,l=new Ot,u=new Ot;function d(p){let g=0,v=0,y=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let M=0,E=0,T=0,S=0,_=0,U=0,L=0,b=0,F=0,N=0,k=0;p.sort(Aw);for(let P=0,C=p.length;P<C;P++){const V=p[P],fe=V.color,W=V.intensity,ie=V.distance,G=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=fe.r*W,v+=fe.g*W,y+=fe.b*W;else if(V.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(V.sh.coefficients[X],W);k++}else if(V.isDirectionalLight){const X=e.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const J=V.shadow,B=t.get(V);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,s.directionalShadow[M]=B,s.directionalShadowMap[M]=G,s.directionalShadowMatrix[M]=V.shadow.matrix,U++}s.directional[M]=X,M++}else if(V.isSpotLight){const X=e.get(V);X.position.setFromMatrixPosition(V.matrixWorld),X.color.copy(fe).multiplyScalar(W),X.distance=ie,X.coneCos=Math.cos(V.angle),X.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),X.decay=V.decay,s.spot[T]=X;const J=V.shadow;if(V.map&&(s.spotLightMap[F]=V.map,F++,J.updateMatrices(V),V.castShadow&&N++),s.spotLightMatrix[T]=J.matrix,V.castShadow){const B=t.get(V);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,s.spotShadow[T]=B,s.spotShadowMap[T]=G,b++}T++}else if(V.isRectAreaLight){const X=e.get(V);X.color.copy(fe).multiplyScalar(W),X.halfWidth.set(V.width*.5,0,0),X.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=X,S++}else if(V.isPointLight){const X=e.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity),X.distance=V.distance,X.decay=V.decay,V.castShadow){const J=V.shadow,B=t.get(V);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,B.shadowCameraNear=J.camera.near,B.shadowCameraFar=J.camera.far,s.pointShadow[E]=B,s.pointShadowMap[E]=G,s.pointShadowMatrix[E]=V.shadow.matrix,L++}s.point[E]=X,E++}else if(V.isHemisphereLight){const X=e.get(V);X.skyColor.copy(V.color).multiplyScalar(W),X.groundColor.copy(V.groundColor).multiplyScalar(W),s.hemi[_]=X,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=y;const Y=s.hash;(Y.directionalLength!==M||Y.pointLength!==E||Y.spotLength!==T||Y.rectAreaLength!==S||Y.hemiLength!==_||Y.numDirectionalShadows!==U||Y.numPointShadows!==L||Y.numSpotShadows!==b||Y.numSpotMaps!==F||Y.numLightProbes!==k)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=S,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=b+F-N,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=k,Y.directionalLength=M,Y.pointLength=E,Y.spotLength=T,Y.rectAreaLength=S,Y.hemiLength=_,Y.numDirectionalShadows=U,Y.numPointShadows=L,Y.numSpotShadows=b,Y.numSpotMaps=F,Y.numLightProbes=k,s.version=Rw++)}function f(p,g){let v=0,y=0,M=0,E=0,T=0;const S=g.matrixWorldInverse;for(let _=0,U=p.length;_<U;_++){const L=p[_];if(L.isDirectionalLight){const b=s.directional[v];b.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(S),v++}else if(L.isSpotLight){const b=s.spot[M];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const b=s.rectArea[E];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(S),u.identity(),l.copy(L.matrixWorld),l.premultiply(S),u.extractRotation(l),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const b=s.point[y];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const b=s.hemi[T];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(S),T++}}}return{setup:d,setupView:f,state:s}}function Hg(r){const e=new Cw(r),t=[],s=[];function o(g){p.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function u(g){s.push(g)}function d(){e.setup(t)}function f(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:u}}function bw(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Hg(r),e.set(o,[d])):l>=u.length?(d=new Hg(r),u.push(d)):d=u[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}class Pw extends po{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=RS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lw extends po{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uw=`uniform sampler2D shadow_pass;
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
}`;function Nw(r,e,t){let s=new rh;const o=new Rt,l=new Rt,u=new Vt,d=new Pw({depthPacking:AS}),f=new Lw,p={},g=t.maxTextureSize,v={[Dr]:Un,[Un]:Dr,[Yi]:Yi},y=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Dw,fragmentShader:Uw}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new er;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Dn(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fv;let _=this.type;this.render=function(N,k,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const P=r.getRenderTarget(),C=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),fe=r.state;fe.setBlending(Pr),fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const W=_!==$i&&this.type===$i,ie=_===$i&&this.type!==$i;for(let G=0,X=N.length;G<X;G++){const J=N[G],B=J.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const de=B.getFrameExtents();if(o.multiply(de),l.copy(B.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/de.x),o.x=l.x*de.x,B.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/de.y),o.y=l.y*de.y,B.mapSize.y=l.y)),B.map===null||W===!0||ie===!0){const O=this.type!==$i?{minFilter:mi,magFilter:mi}:{};B.map!==null&&B.map.dispose(),B.map=new us(o.x,o.y,O),B.map.texture.name=J.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const ce=B.getViewportCount();for(let O=0;O<ce;O++){const se=B.getViewport(O);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),fe.viewport(u),B.updateMatrices(J,O),s=B.getFrustum(),b(k,Y,B.camera,J,this.type)}B.isPointLightShadow!==!0&&this.type===$i&&U(B,Y),B.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(P,C,V)};function U(N,k){const Y=e.update(T);y.defines.VSM_SAMPLES!==N.blurSamples&&(y.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new us(o.x,o.y)),y.uniforms.shadow_pass.value=N.map.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(k,null,Y,y,T,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(k,null,Y,M,T,null)}function L(N,k,Y,P){let C=null;const V=Y.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)C=V;else if(C=Y.isPointLight===!0?f:d,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const fe=C.uuid,W=k.uuid;let ie=p[fe];ie===void 0&&(ie={},p[fe]=ie);let G=ie[W];G===void 0&&(G=C.clone(),ie[W]=G,k.addEventListener("dispose",F)),C=G}if(C.visible=k.visible,C.wireframe=k.wireframe,P===$i?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:v[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const fe=r.properties.get(C);fe.light=Y}return C}function b(N,k,Y,P,C){if(N.visible===!1)return;if(N.layers.test(k.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===$i)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,N.matrixWorld);const W=e.update(N),ie=N.material;if(Array.isArray(ie)){const G=W.groups;for(let X=0,J=G.length;X<J;X++){const B=G[X],de=ie[B.materialIndex];if(de&&de.visible){const ce=L(N,de,P,C);N.onBeforeShadow(r,N,k,Y,W,ce,B),r.renderBufferDirect(Y,null,W,ce,N,B),N.onAfterShadow(r,N,k,Y,W,ce,B)}}}else if(ie.visible){const G=L(N,ie,P,C);N.onBeforeShadow(r,N,k,Y,W,G,null),r.renderBufferDirect(Y,null,W,G,N,null),N.onAfterShadow(r,N,k,Y,W,G,null)}}const fe=N.children;for(let W=0,ie=fe.length;W<ie;W++)b(fe[W],k,Y,P,C)}function F(N){N.target.removeEventListener("dispose",F);for(const Y in p){const P=p[Y],C=N.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const Iw={[Zd]:Qd,[Jd]:nf,[ef]:rf,[ro]:tf,[Qd]:Zd,[nf]:Jd,[rf]:ef,[tf]:ro};function Fw(r,e){function t(){let $=!1;const De=new Vt;let ue=null;const ge=new Vt(0,0,0,0);return{setMask:function(Ie){ue!==Ie&&!$&&(r.colorMask(Ie,Ie,Ie,Ie),ue=Ie)},setLocked:function(Ie){$=Ie},setClear:function(Ie,Ne,lt,Ut,Xt){Xt===!0&&(Ie*=Ut,Ne*=Ut,lt*=Ut),De.set(Ie,Ne,lt,Ut),ge.equals(De)===!1&&(r.clearColor(Ie,Ne,lt,Ut),ge.copy(De))},reset:function(){$=!1,ue=null,ge.set(-1,0,0,0)}}}function s(){let $=!1,De=!1,ue=null,ge=null,Ie=null;return{setReversed:function(Ne){if(De!==Ne){const lt=e.get("EXT_clip_control");De?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ie;Ie=null,this.setClear(Ut)}De=Ne},getReversed:function(){return De},setTest:function(Ne){Ne?_e(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(Ne){ue!==Ne&&!$&&(r.depthMask(Ne),ue=Ne)},setFunc:function(Ne){if(De&&(Ne=Iw[Ne]),ge!==Ne){switch(Ne){case Zd:r.depthFunc(r.NEVER);break;case Qd:r.depthFunc(r.ALWAYS);break;case Jd:r.depthFunc(r.LESS);break;case ro:r.depthFunc(r.LEQUAL);break;case ef:r.depthFunc(r.EQUAL);break;case tf:r.depthFunc(r.GEQUAL);break;case nf:r.depthFunc(r.GREATER);break;case rf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=Ne}},setLocked:function(Ne){$=Ne},setClear:function(Ne){Ie!==Ne&&(De&&(Ne=1-Ne),r.clearDepth(Ne),Ie=Ne)},reset:function(){$=!1,ue=null,ge=null,Ie=null,De=!1}}}function o(){let $=!1,De=null,ue=null,ge=null,Ie=null,Ne=null,lt=null,Ut=null,Xt=null;return{setTest:function(_t){$||(_t?_e(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(_t){De!==_t&&!$&&(r.stencilMask(_t),De=_t)},setFunc:function(_t,Mn,gn){(ue!==_t||ge!==Mn||Ie!==gn)&&(r.stencilFunc(_t,Mn,gn),ue=_t,ge=Mn,Ie=gn)},setOp:function(_t,Mn,gn){(Ne!==_t||lt!==Mn||Ut!==gn)&&(r.stencilOp(_t,Mn,gn),Ne=_t,lt=Mn,Ut=gn)},setLocked:function(_t){$=_t},setClear:function(_t){Xt!==_t&&(r.clearStencil(_t),Xt=_t)},reset:function(){$=!1,De=null,ue=null,ge=null,Ie=null,Ne=null,lt=null,Ut=null,Xt=null}}}const l=new t,u=new s,d=new o,f=new WeakMap,p=new WeakMap;let g={},v={},y=new WeakMap,M=[],E=null,T=!1,S=null,_=null,U=null,L=null,b=null,F=null,N=null,k=new xt(0,0,0),Y=0,P=!1,C=null,V=null,fe=null,W=null,ie=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(B)[1]),X=J>=1):B.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),X=J>=2);let de=null,ce={};const O=r.getParameter(r.SCISSOR_BOX),se=r.getParameter(r.VIEWPORT),Ce=new Vt().fromArray(O),re=new Vt().fromArray(se);function he($,De,ue,ge){const Ie=new Uint8Array(4),Ne=r.createTexture();r.bindTexture($,Ne),r.texParameteri($,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri($,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<ue;lt++)$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(De+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Ne}const Ee={};Ee[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),_e(r.DEPTH_TEST),u.setFunc(ro),Te(!1),Le(Wm),_e(r.CULL_FACE),q(Pr);function _e($){g[$]!==!0&&(r.enable($),g[$]=!0)}function be($){g[$]!==!1&&(r.disable($),g[$]=!1)}function Fe($,De){return v[$]!==De?(r.bindFramebuffer($,De),v[$]=De,$===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=De),$===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=De),!0):!1}function Ze($,De){let ue=M,ge=!1;if($){ue=y.get(De),ue===void 0&&(ue=[],y.set(De,ue));const Ie=$.textures;if(ue.length!==Ie.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,lt=Ie.length;Ne<lt;Ne++)ue[Ne]=r.COLOR_ATTACHMENT0+Ne;ue.length=Ie.length,ge=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,ge=!0);ge&&r.drawBuffers(ue)}function Tt($){return E!==$?(r.useProgram($),E=$,!0):!1}const ht={[rs]:r.FUNC_ADD,[Jy]:r.FUNC_SUBTRACT,[eS]:r.FUNC_REVERSE_SUBTRACT};ht[tS]=r.MIN,ht[nS]=r.MAX;const Ct={[iS]:r.ZERO,[rS]:r.ONE,[sS]:r.SRC_COLOR,[qd]:r.SRC_ALPHA,[dS]:r.SRC_ALPHA_SATURATE,[cS]:r.DST_COLOR,[aS]:r.DST_ALPHA,[oS]:r.ONE_MINUS_SRC_COLOR,[Kd]:r.ONE_MINUS_SRC_ALPHA,[uS]:r.ONE_MINUS_DST_COLOR,[lS]:r.ONE_MINUS_DST_ALPHA,[fS]:r.CONSTANT_COLOR,[hS]:r.ONE_MINUS_CONSTANT_COLOR,[pS]:r.CONSTANT_ALPHA,[mS]:r.ONE_MINUS_CONSTANT_ALPHA};function q($,De,ue,ge,Ie,Ne,lt,Ut,Xt,_t){if($===Pr){T===!0&&(be(r.BLEND),T=!1);return}if(T===!1&&(_e(r.BLEND),T=!0),$!==Qy){if($!==S||_t!==P){if((_!==rs||b!==rs)&&(r.blendEquation(r.FUNC_ADD),_=rs,b=rs),_t)switch($){case to:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xm:r.blendFunc(r.ONE,r.ONE);break;case $m:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ym:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case to:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $m:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ym:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}U=null,L=null,F=null,N=null,k.set(0,0,0),Y=0,S=$,P=_t}return}Ie=Ie||De,Ne=Ne||ue,lt=lt||ge,(De!==_||Ie!==b)&&(r.blendEquationSeparate(ht[De],ht[Ie]),_=De,b=Ie),(ue!==U||ge!==L||Ne!==F||lt!==N)&&(r.blendFuncSeparate(Ct[ue],Ct[ge],Ct[Ne],Ct[lt]),U=ue,L=ge,F=Ne,N=lt),(Ut.equals(k)===!1||Xt!==Y)&&(r.blendColor(Ut.r,Ut.g,Ut.b,Xt),k.copy(Ut),Y=Xt),S=$,P=!1}function Qt($,De){$.side===Yi?be(r.CULL_FACE):_e(r.CULL_FACE);let ue=$.side===Un;De&&(ue=!ue),Te(ue),$.blending===to&&$.transparent===!1?q(Pr):q($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),l.setMask($.colorWrite);const ge=$.stencilWrite;d.setTest(ge),ge&&(d.setMask($.stencilWriteMask),d.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),d.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ot($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Te($){C!==$&&($?r.frontFace(r.CW):r.frontFace(r.CCW),C=$)}function Le($){$!==qy?(_e(r.CULL_FACE),$!==V&&($===Wm?r.cullFace(r.BACK):$===Ky?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),V=$}function Oe($){$!==fe&&(X&&r.lineWidth($),fe=$)}function ot($,De,ue){$?(_e(r.POLYGON_OFFSET_FILL),(W!==De||ie!==ue)&&(r.polygonOffset(De,ue),W=De,ie=ue)):be(r.POLYGON_OFFSET_FILL)}function Ge($){$?_e(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function D($){$===void 0&&($=r.TEXTURE0+G-1),de!==$&&(r.activeTexture($),de=$)}function R($,De,ue){ue===void 0&&(de===null?ue=r.TEXTURE0+G-1:ue=de);let ge=ce[ue];ge===void 0&&(ge={type:void 0,texture:void 0},ce[ue]=ge),(ge.type!==$||ge.texture!==De)&&(de!==ue&&(r.activeTexture(ue),de=ue),r.bindTexture($,De||Ee[$]),ge.type=$,ge.texture=De)}function ee(){const $=ce[de];$!==void 0&&$.type!==void 0&&(r.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ve(){try{r.compressedTexImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function pe(){try{r.texSubImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ke(){try{r.texSubImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Be(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ct(){try{r.texStorage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Me(){try{r.texStorage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function He(){try{r.texImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function tt(){try{r.texImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function nt($){Ce.equals($)===!1&&(r.scissor($.x,$.y,$.z,$.w),Ce.copy($))}function je($){re.equals($)===!1&&(r.viewport($.x,$.y,$.z,$.w),re.copy($))}function pt($,De){let ue=p.get(De);ue===void 0&&(ue=new WeakMap,p.set(De,ue));let ge=ue.get($);ge===void 0&&(ge=r.getUniformBlockIndex(De,$.name),ue.set($,ge))}function at($,De){const ge=p.get(De).get($);f.get(De)!==ge&&(r.uniformBlockBinding(De,ge,$.__bindingPointIndex),f.set(De,ge))}function At(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},de=null,ce={},v={},y=new WeakMap,M=[],E=null,T=!1,S=null,_=null,U=null,L=null,b=null,F=null,N=null,k=new xt(0,0,0),Y=0,P=!1,C=null,V=null,fe=null,W=null,ie=null,Ce.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:_e,disable:be,bindFramebuffer:Fe,drawBuffers:Ze,useProgram:Tt,setBlending:q,setMaterial:Qt,setFlipSided:Te,setCullFace:Le,setLineWidth:Oe,setPolygonOffset:ot,setScissorTest:Ge,activeTexture:D,bindTexture:R,unbindTexture:ee,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:He,texImage3D:tt,updateUBOMapping:pt,uniformBlockBinding:at,texStorage2D:ct,texStorage3D:Me,texSubImage2D:pe,texSubImage3D:ke,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Be,scissor:nt,viewport:je,reset:At}}function Vg(r,e,t,s){const o=Ow(s);switch(t){case Vv:return r*e;case jv:return r*e;case Wv:return r*e*2;case Xv:return r*e/o.components*o.byteLength;case Jf:return r*e/o.components*o.byteLength;case $v:return r*e*2/o.components*o.byteLength;case eh:return r*e*2/o.components*o.byteLength;case Gv:return r*e*3/o.components*o.byteLength;case hi:return r*e*4/o.components*o.byteLength;case th:return r*e*4/o.components*o.byteLength;case rc:case sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case oc:case ac:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uf:case ff:return Math.max(r,16)*Math.max(e,8)/4;case cf:case df:return Math.max(r,8)*Math.max(e,8)/2;case hf:case pf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case mf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case xf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _f:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case yf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case wf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Af:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case bf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case lc:case Pf:case Lf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Yv:case Df:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Uf:case Nf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ow(r){switch(r){case Ji:case Bv:return{byteLength:1,components:1};case ca:case zv:case ha:return{byteLength:2,components:1};case Zf:case Qf:return{byteLength:2,components:4};case cs:case Kf:case qi:return{byteLength:4,components:1};case Hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function kw(r,e,t,s,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Rt,g=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,R){return M?new OffscreenCanvas(D,R):pc("canvas")}function T(D,R,ee){let me=1;const ve=Ge(D);if((ve.width>ee||ve.height>ee)&&(me=ee/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pe=Math.floor(me*ve.width),ke=Math.floor(me*ve.height);v===void 0&&(v=E(pe,ke));const Pe=R?E(pe,ke):v;return Pe.width=pe,Pe.height=ke,Pe.getContext("2d").drawImage(D,0,0,pe,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+pe+"x"+ke+")."),Pe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function S(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(D,R,ee,me,ve=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=R;if(R===r.RED&&(ee===r.FLOAT&&(pe=r.R32F),ee===r.HALF_FLOAT&&(pe=r.R16F),ee===r.UNSIGNED_BYTE&&(pe=r.R8)),R===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.R8UI),ee===r.UNSIGNED_SHORT&&(pe=r.R16UI),ee===r.UNSIGNED_INT&&(pe=r.R32UI),ee===r.BYTE&&(pe=r.R8I),ee===r.SHORT&&(pe=r.R16I),ee===r.INT&&(pe=r.R32I)),R===r.RG&&(ee===r.FLOAT&&(pe=r.RG32F),ee===r.HALF_FLOAT&&(pe=r.RG16F),ee===r.UNSIGNED_BYTE&&(pe=r.RG8)),R===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RG8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RG16UI),ee===r.UNSIGNED_INT&&(pe=r.RG32UI),ee===r.BYTE&&(pe=r.RG8I),ee===r.SHORT&&(pe=r.RG16I),ee===r.INT&&(pe=r.RG32I)),R===r.RGB_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),ee===r.UNSIGNED_INT&&(pe=r.RGB32UI),ee===r.BYTE&&(pe=r.RGB8I),ee===r.SHORT&&(pe=r.RGB16I),ee===r.INT&&(pe=r.RGB32I)),R===r.RGBA_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),ee===r.UNSIGNED_INT&&(pe=r.RGBA32UI),ee===r.BYTE&&(pe=r.RGBA8I),ee===r.SHORT&&(pe=r.RGBA16I),ee===r.INT&&(pe=r.RGBA32I)),R===r.RGB&&ee===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),R===r.RGBA){const ke=ve?Sc:St.getTransfer(me);ee===r.FLOAT&&(pe=r.RGBA32F),ee===r.HALF_FLOAT&&(pe=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(pe=ke===Pt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function b(D,R){let ee;return D?R===null||R===cs||R===ao?ee=r.DEPTH24_STENCIL8:R===qi?ee=r.DEPTH32F_STENCIL8:R===ca&&(ee=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===cs||R===ao?ee=r.DEPTH_COMPONENT24:R===qi?ee=r.DEPTH_COMPONENT32F:R===ca&&(ee=r.DEPTH_COMPONENT16),ee}function F(D,R){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==mi&&D.minFilter!==wi?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function N(D){const R=D.target;R.removeEventListener("dispose",N),Y(R),R.isVideoTexture&&g.delete(R)}function k(D){const R=D.target;R.removeEventListener("dispose",k),C(R)}function Y(D){const R=s.get(D);if(R.__webglInit===void 0)return;const ee=D.source,me=y.get(ee);if(me){const ve=me[R.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(D),Object.keys(me).length===0&&y.delete(ee)}s.remove(D)}function P(D){const R=s.get(D);r.deleteTexture(R.__webglTexture);const ee=D.source,me=y.get(ee);delete me[R.__cacheKey],u.memory.textures--}function C(D){const R=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(R.__webglFramebuffer[me]))for(let ve=0;ve<R.__webglFramebuffer[me].length;ve++)r.deleteFramebuffer(R.__webglFramebuffer[me][ve]);else r.deleteFramebuffer(R.__webglFramebuffer[me]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[me])}else{if(Array.isArray(R.__webglFramebuffer))for(let me=0;me<R.__webglFramebuffer.length;me++)r.deleteFramebuffer(R.__webglFramebuffer[me]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let me=0;me<R.__webglColorRenderbuffer.length;me++)R.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[me]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ee=D.textures;for(let me=0,ve=ee.length;me<ve;me++){const pe=s.get(ee[me]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),u.memory.textures--),s.remove(ee[me])}s.remove(D)}let V=0;function fe(){V=0}function W(){const D=V;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),V+=1,D}function ie(D){const R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function G(D,R){const ee=s.get(D);if(D.isVideoTexture&&Oe(D),D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(ee,D,R);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+R)}function X(D,R){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){re(ee,D,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+R)}function J(D,R){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){re(ee,D,R);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+R)}function B(D,R){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){he(ee,D,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+R)}const de={[af]:r.REPEAT,[os]:r.CLAMP_TO_EDGE,[lf]:r.MIRRORED_REPEAT},ce={[mi]:r.NEAREST,[wS]:r.NEAREST_MIPMAP_NEAREST,[wl]:r.NEAREST_MIPMAP_LINEAR,[wi]:r.LINEAR,[dd]:r.LINEAR_MIPMAP_NEAREST,[as]:r.LINEAR_MIPMAP_LINEAR},O={[bS]:r.NEVER,[IS]:r.ALWAYS,[PS]:r.LESS,[Kv]:r.LEQUAL,[LS]:r.EQUAL,[NS]:r.GEQUAL,[DS]:r.GREATER,[US]:r.NOTEQUAL};function se(D,R){if(R.type===qi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===wi||R.magFilter===dd||R.magFilter===wl||R.magFilter===as||R.minFilter===wi||R.minFilter===dd||R.minFilter===wl||R.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,de[R.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,de[R.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,de[R.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ce[R.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ce[R.minFilter]),R.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,O[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===mi||R.minFilter!==wl&&R.minFilter!==as||R.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function Ce(D,R){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",N));const me=R.source;let ve=y.get(me);ve===void 0&&(ve={},y.set(me,ve));const pe=ie(R);if(pe!==D.__cacheKey){ve[pe]===void 0&&(ve[pe]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ve[pe].usedTimes++;const ke=ve[D.__cacheKey];ke!==void 0&&(ve[D.__cacheKey].usedTimes--,ke.usedTimes===0&&P(R)),D.__cacheKey=pe,D.__webglTexture=ve[pe].texture}return ee}function re(D,R,ee){let me=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(me=r.TEXTURE_3D);const ve=Ce(D,R),pe=R.source;t.bindTexture(me,D.__webglTexture,r.TEXTURE0+ee);const ke=s.get(pe);if(pe.version!==ke.__version||ve===!0){t.activeTexture(r.TEXTURE0+ee);const Pe=St.getPrimaries(St.workingColorSpace),Be=R.colorSpace===br?null:St.getPrimaries(R.colorSpace),ct=R.colorSpace===br||Pe===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Me=T(R.image,!1,o.maxTextureSize);Me=ot(R,Me);const He=l.convert(R.format,R.colorSpace),tt=l.convert(R.type);let nt=L(R.internalFormat,He,tt,R.colorSpace,R.isVideoTexture);se(me,R);let je;const pt=R.mipmaps,at=R.isVideoTexture!==!0,At=ke.__version===void 0||ve===!0,$=pe.dataReady,De=F(R,Me);if(R.isDepthTexture)nt=b(R.format===lo,R.type),At&&(at?t.texStorage2D(r.TEXTURE_2D,1,nt,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,nt,Me.width,Me.height,0,He,tt,null));else if(R.isDataTexture)if(pt.length>0){at&&At&&t.texStorage2D(r.TEXTURE_2D,De,nt,pt[0].width,pt[0].height);for(let ue=0,ge=pt.length;ue<ge;ue++)je=pt[ue],at?$&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,je.width,je.height,He,tt,je.data):t.texImage2D(r.TEXTURE_2D,ue,nt,je.width,je.height,0,He,tt,je.data);R.generateMipmaps=!1}else at?(At&&t.texStorage2D(r.TEXTURE_2D,De,nt,Me.width,Me.height),$&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,He,tt,Me.data)):t.texImage2D(r.TEXTURE_2D,0,nt,Me.width,Me.height,0,He,tt,Me.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){at&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,nt,pt[0].width,pt[0].height,Me.depth);for(let ue=0,ge=pt.length;ue<ge;ue++)if(je=pt[ue],R.format!==hi)if(He!==null)if(at){if($)if(R.layerUpdates.size>0){const Ie=Vg(je.width,je.height,R.format,R.type);for(const Ne of R.layerUpdates){const lt=je.data.subarray(Ne*Ie/je.data.BYTES_PER_ELEMENT,(Ne+1)*Ie/je.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,Ne,je.width,je.height,1,He,lt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,je.width,je.height,Me.depth,He,je.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,nt,je.width,je.height,Me.depth,0,je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?$&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,je.width,je.height,Me.depth,He,tt,je.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,nt,je.width,je.height,Me.depth,0,He,tt,je.data)}else{at&&At&&t.texStorage2D(r.TEXTURE_2D,De,nt,pt[0].width,pt[0].height);for(let ue=0,ge=pt.length;ue<ge;ue++)je=pt[ue],R.format!==hi?He!==null?at?$&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,je.width,je.height,He,je.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,nt,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?$&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,je.width,je.height,He,tt,je.data):t.texImage2D(r.TEXTURE_2D,ue,nt,je.width,je.height,0,He,tt,je.data)}else if(R.isDataArrayTexture)if(at){if(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,nt,Me.width,Me.height,Me.depth),$)if(R.layerUpdates.size>0){const ue=Vg(Me.width,Me.height,R.format,R.type);for(const ge of R.layerUpdates){const Ie=Me.data.subarray(ge*ue/Me.data.BYTES_PER_ELEMENT,(ge+1)*ue/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Me.width,Me.height,1,He,tt,Ie)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,He,tt,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,He,tt,Me.data);else if(R.isData3DTexture)at?(At&&t.texStorage3D(r.TEXTURE_3D,De,nt,Me.width,Me.height,Me.depth),$&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,He,tt,Me.data)):t.texImage3D(r.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,He,tt,Me.data);else if(R.isFramebufferTexture){if(At)if(at)t.texStorage2D(r.TEXTURE_2D,De,nt,Me.width,Me.height);else{let ue=Me.width,ge=Me.height;for(let Ie=0;Ie<De;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,nt,ue,ge,0,He,tt,null),ue>>=1,ge>>=1}}else if(pt.length>0){if(at&&At){const ue=Ge(pt[0]);t.texStorage2D(r.TEXTURE_2D,De,nt,ue.width,ue.height)}for(let ue=0,ge=pt.length;ue<ge;ue++)je=pt[ue],at?$&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,He,tt,je):t.texImage2D(r.TEXTURE_2D,ue,nt,He,tt,je);R.generateMipmaps=!1}else if(at){if(At){const ue=Ge(Me);t.texStorage2D(r.TEXTURE_2D,De,nt,ue.width,ue.height)}$&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,He,tt,Me)}else t.texImage2D(r.TEXTURE_2D,0,nt,He,tt,Me);S(R)&&_(me),ke.__version=pe.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function he(D,R,ee){if(R.image.length!==6)return;const me=Ce(D,R),ve=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+ee);const pe=s.get(ve);if(ve.version!==pe.__version||me===!0){t.activeTexture(r.TEXTURE0+ee);const ke=St.getPrimaries(St.workingColorSpace),Pe=R.colorSpace===br?null:St.getPrimaries(R.colorSpace),Be=R.colorSpace===br||ke===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const ct=R.isCompressedTexture||R.image[0].isCompressedTexture,Me=R.image[0]&&R.image[0].isDataTexture,He=[];for(let ge=0;ge<6;ge++)!ct&&!Me?He[ge]=T(R.image[ge],!0,o.maxCubemapSize):He[ge]=Me?R.image[ge].image:R.image[ge],He[ge]=ot(R,He[ge]);const tt=He[0],nt=l.convert(R.format,R.colorSpace),je=l.convert(R.type),pt=L(R.internalFormat,nt,je,R.colorSpace),at=R.isVideoTexture!==!0,At=pe.__version===void 0||me===!0,$=ve.dataReady;let De=F(R,tt);se(r.TEXTURE_CUBE_MAP,R);let ue;if(ct){at&&At&&t.texStorage2D(r.TEXTURE_CUBE_MAP,De,pt,tt.width,tt.height);for(let ge=0;ge<6;ge++){ue=He[ge].mipmaps;for(let Ie=0;Ie<ue.length;Ie++){const Ne=ue[Ie];R.format!==hi?nt!==null?at?$&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,Ne.width,Ne.height,nt,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,pt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,Ne.width,Ne.height,nt,je,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,pt,Ne.width,Ne.height,0,nt,je,Ne.data)}}}else{if(ue=R.mipmaps,at&&At){ue.length>0&&De++;const ge=Ge(He[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,De,pt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Me){at?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,He[ge].width,He[ge].height,nt,je,He[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,pt,He[ge].width,He[ge].height,0,nt,je,He[ge].data);for(let Ie=0;Ie<ue.length;Ie++){const lt=ue[Ie].image[ge].image;at?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,lt.width,lt.height,nt,je,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,pt,lt.width,lt.height,0,nt,je,lt.data)}}else{at?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,nt,je,He[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,pt,nt,je,He[ge]);for(let Ie=0;Ie<ue.length;Ie++){const Ne=ue[Ie];at?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,nt,je,Ne.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,pt,nt,je,Ne.image[ge])}}}S(R)&&_(r.TEXTURE_CUBE_MAP),pe.__version=ve.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function Ee(D,R,ee,me,ve,pe){const ke=l.convert(ee.format,ee.colorSpace),Pe=l.convert(ee.type),Be=L(ee.internalFormat,ke,Pe,ee.colorSpace),ct=s.get(R),Me=s.get(ee);if(Me.__renderTarget=R,!ct.__hasExternalTextures){const He=Math.max(1,R.width>>pe),tt=Math.max(1,R.height>>pe);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,pe,Be,He,tt,R.depth,0,ke,Pe,null):t.texImage2D(ve,pe,Be,He,tt,0,ke,Pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),Le(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ve,Me.__webglTexture,0,Te(R)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ve,Me.__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(D,R,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,D),R.depthBuffer){const me=R.depthTexture,ve=me&&me.isDepthTexture?me.type:null,pe=b(R.stencilBuffer,ve),ke=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=Te(R);Le(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pe,pe,R.width,R.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,pe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,pe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ke,r.RENDERBUFFER,D)}else{const me=R.textures;for(let ve=0;ve<me.length;ve++){const pe=me[ve],ke=l.convert(pe.format,pe.colorSpace),Pe=l.convert(pe.type),Be=L(pe.internalFormat,ke,Pe,pe.colorSpace),ct=Te(R);ee&&Le(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,Be,R.width,R.height):Le(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,Be,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Be,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(R.depthTexture);me.__renderTarget=R,(!me.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),G(R.depthTexture,0);const ve=me.__webglTexture,pe=Te(R);if(R.depthTexture.format===no)Le(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(R.depthTexture.format===lo)Le(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Fe(D){const R=s.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),me){const ve=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),R.__depthDisposeCallback=ve}R.__boundDepthTexture=me}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");be(R.__webglFramebuffer,D)}else if(ee){R.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[me]),R.__webglDepthbuffer[me]===void 0)R.__webglDepthbuffer[me]=r.createRenderbuffer(),_e(R.__webglDepthbuffer[me],D,!1);else{const ve=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=R.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),_e(R.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,ve)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(D,R,ee){const me=s.get(D);R!==void 0&&Ee(me.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&Fe(D)}function Tt(D){const R=D.texture,ee=s.get(D),me=s.get(R);D.addEventListener("dispose",k);const ve=D.textures,pe=D.isWebGLCubeRenderTarget===!0,ke=ve.length>1;if(ke||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=R.version,u.memory.textures++),pe){ee.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer[Pe]=[];for(let Be=0;Be<R.mipmaps.length;Be++)ee.__webglFramebuffer[Pe][Be]=r.createFramebuffer()}else ee.__webglFramebuffer[Pe]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Pe=0;Pe<R.mipmaps.length;Pe++)ee.__webglFramebuffer[Pe]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(ke)for(let Pe=0,Be=ve.length;Pe<Be;Pe++){const ct=s.get(ve[Pe]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),u.memory.textures++)}if(D.samples>0&&Le(D)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ve.length;Pe++){const Be=ve[Pe];ee.__webglColorRenderbuffer[Pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe]);const ct=l.convert(Be.format,Be.colorSpace),Me=l.convert(Be.type),He=L(Be.internalFormat,ct,Me,Be.colorSpace,D.isXRRenderTarget===!0),tt=Te(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,He,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,ee.__webglColorRenderbuffer[Pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(ee.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),se(r.TEXTURE_CUBE_MAP,R);for(let Pe=0;Pe<6;Pe++)if(R.mipmaps&&R.mipmaps.length>0)for(let Be=0;Be<R.mipmaps.length;Be++)Ee(ee.__webglFramebuffer[Pe][Be],D,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Be);else Ee(ee.__webglFramebuffer[Pe],D,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);S(R)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Pe=0,Be=ve.length;Pe<Be;Pe++){const ct=ve[Pe],Me=s.get(ct);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),se(r.TEXTURE_2D,ct),Ee(ee.__webglFramebuffer,D,ct,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,0),S(ct)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Pe=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Pe,me.__webglTexture),se(Pe,R),R.mipmaps&&R.mipmaps.length>0)for(let Be=0;Be<R.mipmaps.length;Be++)Ee(ee.__webglFramebuffer[Be],D,R,r.COLOR_ATTACHMENT0,Pe,Be);else Ee(ee.__webglFramebuffer,D,R,r.COLOR_ATTACHMENT0,Pe,0);S(R)&&_(Pe),t.unbindTexture()}D.depthBuffer&&Fe(D)}function ht(D){const R=D.textures;for(let ee=0,me=R.length;ee<me;ee++){const ve=R[ee];if(S(ve)){const pe=U(D),ke=s.get(ve).__webglTexture;t.bindTexture(pe,ke),_(pe),t.unbindTexture()}}}const Ct=[],q=[];function Qt(D){if(D.samples>0){if(Le(D)===!1){const R=D.textures,ee=D.width,me=D.height;let ve=r.COLOR_BUFFER_BIT;const pe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ke=s.get(D),Pe=R.length>1;if(Pe)for(let Be=0;Be<R.length;Be++)t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Be=0;Be<R.length;Be++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ke.__webglColorRenderbuffer[Be]);const ct=s.get(R[Be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,ee,me,0,0,ee,me,ve,r.NEAREST),f===!0&&(Ct.length=0,q.length=0,Ct.push(r.COLOR_ATTACHMENT0+Be),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ct.push(pe),q.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,q)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Pe)for(let Be=0;Be<R.length;Be++){t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,ke.__webglColorRenderbuffer[Be]);const ct=s.get(R[Be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,ct,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const R=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function Te(D){return Math.min(o.maxSamples,D.samples)}function Le(D){const R=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Oe(D){const R=u.render.frame;g.get(D)!==R&&(g.set(D,R),D.update())}function ot(D,R){const ee=D.colorSpace,me=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ee!==fo&&ee!==br&&(St.getTransfer(ee)===Pt?(me!==hi||ve!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),R}function Ge(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=fe,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Le}function Bw(r,e){function t(s,o=br){let l;const u=St.getTransfer(o);if(s===Ji)return r.UNSIGNED_BYTE;if(s===Zf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Qf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Hv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Bv)return r.BYTE;if(s===zv)return r.SHORT;if(s===ca)return r.UNSIGNED_SHORT;if(s===Kf)return r.INT;if(s===cs)return r.UNSIGNED_INT;if(s===qi)return r.FLOAT;if(s===ha)return r.HALF_FLOAT;if(s===Vv)return r.ALPHA;if(s===Gv)return r.RGB;if(s===hi)return r.RGBA;if(s===jv)return r.LUMINANCE;if(s===Wv)return r.LUMINANCE_ALPHA;if(s===no)return r.DEPTH_COMPONENT;if(s===lo)return r.DEPTH_STENCIL;if(s===Xv)return r.RED;if(s===Jf)return r.RED_INTEGER;if(s===$v)return r.RG;if(s===eh)return r.RG_INTEGER;if(s===th)return r.RGBA_INTEGER;if(s===rc||s===sc||s===oc||s===ac)if(u===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===rc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ac)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===rc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===sc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===oc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ac)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cf||s===uf||s===df||s===ff)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===cf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===df)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ff)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hf||s===pf||s===mf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===hf||s===pf)return u===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===mf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gf||s===vf||s===xf||s===_f||s===yf||s===Sf||s===Mf||s===Ef||s===Tf||s===wf||s===Rf||s===Af||s===Cf||s===bf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===gf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_f)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ef)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Af)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lc||s===Pf||s===Lf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===lc)return u===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Pf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Lf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yv||s===Df||s===Uf||s===Nf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===lc)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Df)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Uf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Nf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ao?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}class zw extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ra extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hw={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,s),_=this._getHandJoint(p,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=g.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&y>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Hw)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ra;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const Vw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gw=`
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

}`;class jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Nn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Ur({vertexShader:Vw,fragmentShader:Gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new Ec(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ww extends ho{constructor(e,t){super();const s=this;let o=null,l=1,u=null,d="local-floor",f=1,p=null,g=null,v=null,y=null,M=null,E=null;const T=new jw,S=t.getContextAttributes();let _=null,U=null;const L=[],b=[],F=new Rt;let N=null;const k=new Jn;k.viewport=new Vt;const Y=new Jn;Y.viewport=new Vt;const P=[k,Y],C=new zw;let V=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=L[re];return he===void 0&&(he=new Bd,L[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=L[re];return he===void 0&&(he=new Bd,L[re]=he),he.getGripSpace()},this.getHand=function(re){let he=L[re];return he===void 0&&(he=new Bd,L[re]=he),he.getHandSpace()};function W(re){const he=b.indexOf(re.inputSource);if(he===-1)return;const Ee=L[he];Ee!==void 0&&(Ee.update(re.inputSource,re.frame,p||u),Ee.dispatchEvent({type:re.type,data:re.inputSource}))}function ie(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",G);for(let re=0;re<L.length;re++){const he=b[re];he!==null&&(b[re]=null,L[re].disconnect(he))}V=null,fe=null,T.reset(),e.setRenderTarget(_),M=null,y=null,v=null,o=null,U=null,Ce.stop(),s.isPresenting=!1,e.setPixelRatio(N),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",G),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(F),o.renderState.layers===void 0){const he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new us(M.framebufferWidth,M.framebufferHeight,{format:hi,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let he=null,Ee=null,_e=null;S.depth&&(_e=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?lo:no,Ee=S.stencil?ao:cs);const be={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};v=new XRWebGLBinding(o,t),y=v.createProjectionLayer(be),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new us(y.textureWidth,y.textureHeight,{format:hi,type:Ji,depthTexture:new c0(y.textureWidth,y.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(d),Ce.setContext(o),Ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function G(re){for(let he=0;he<re.removed.length;he++){const Ee=re.removed[he],_e=b.indexOf(Ee);_e>=0&&(b[_e]=null,L[_e].disconnect(Ee))}for(let he=0;he<re.added.length;he++){const Ee=re.added[he];let _e=b.indexOf(Ee);if(_e===-1){for(let Fe=0;Fe<L.length;Fe++)if(Fe>=b.length){b.push(Ee),_e=Fe;break}else if(b[Fe]===null){b[Fe]=Ee,_e=Fe;break}if(_e===-1)break}const be=L[_e];be&&be.connect(Ee)}}const X=new ne,J=new ne;function B(re,he,Ee){X.setFromMatrixPosition(he.matrixWorld),J.setFromMatrixPosition(Ee.matrixWorld);const _e=X.distanceTo(J),be=he.projectionMatrix.elements,Fe=Ee.projectionMatrix.elements,Ze=be[14]/(be[10]-1),Tt=be[14]/(be[10]+1),ht=(be[9]+1)/be[5],Ct=(be[9]-1)/be[5],q=(be[8]-1)/be[0],Qt=(Fe[8]+1)/Fe[0],Te=Ze*q,Le=Ze*Qt,Oe=_e/(-q+Qt),ot=Oe*-q;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ot),re.translateZ(Oe),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),be[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ge=Ze+Oe,D=Tt+Oe,R=Te-ot,ee=Le+(_e-ot),me=ht*Tt/D*Ge,ve=Ct*Tt/D*Ge;re.projectionMatrix.makePerspective(R,ee,me,ve,Ge,D),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function de(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let he=re.near,Ee=re.far;T.texture!==null&&(T.depthNear>0&&(he=T.depthNear),T.depthFar>0&&(Ee=T.depthFar)),C.near=Y.near=k.near=he,C.far=Y.far=k.far=Ee,(V!==C.near||fe!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,fe=C.far),k.layers.mask=re.layers.mask|2,Y.layers.mask=re.layers.mask|4,C.layers.mask=k.layers.mask|Y.layers.mask;const _e=re.parent,be=C.cameras;de(C,_e);for(let Fe=0;Fe<be.length;Fe++)de(be[Fe],_e);be.length===2?B(C,k,Y):C.projectionMatrix.copy(k.projectionMatrix),ce(re,C,_e)};function ce(re,he,Ee){Ee===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(Ee.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=If*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return f},this.setFoveation=function(re){f=re,y!==null&&(y.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let O=null;function se(re,he){if(g=he.getViewerPose(p||u),E=he,g!==null){const Ee=g.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let _e=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let Fe=0;Fe<Ee.length;Fe++){const Ze=Ee[Fe];let Tt=null;if(M!==null)Tt=M.getViewport(Ze);else{const Ct=v.getViewSubImage(y,Ze);Tt=Ct.viewport,Fe===0&&(e.setRenderTargetTextures(U,Ct.colorTexture,y.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(U))}let ht=P[Fe];ht===void 0&&(ht=new Jn,ht.layers.enable(Fe),ht.viewport=new Vt,P[Fe]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Fe===0&&(C.matrix.copy(ht.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(ht)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")){const Fe=v.getDepthInformation(Ee[0]);Fe&&Fe.isValid&&Fe.texture&&T.init(e,Fe,o.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const _e=b[Ee],be=L[Ee];_e!==null&&be!==void 0&&be.update(_e,he,p||u)}O&&O(re,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),E=null}const Ce=new a0;Ce.setAnimationLoop(se),this.setAnimationLoop=function(re){O=re},this.dispose=function(){}}}const Jr=new bi,Xw=new Ot;function $w(r,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,r0(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,U,L,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(S,_):_.isMeshToonMaterial?(l(S,_),v(S,_)):_.isMeshPhongMaterial?(l(S,_),g(S,_)):_.isMeshStandardMaterial?(l(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,b)):_.isMeshMatcapMaterial?(l(S,_),E(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),T(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?f(S,_,U,L):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Un&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Un&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const U=e.get(_),L=U.envMap,b=U.envMapRotation;L&&(S.envMap.value=L,Jr.copy(b),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),S.envMapRotation.value.setFromMatrix4(Xw.makeRotationFromEuler(Jr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function f(S,_,U,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*U,S.scale.value=L*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,U){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Un&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const U=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function Yw(r,e,t,s){let o={},l={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(U,L){const b=L.program;s.uniformBlockBinding(U,b)}function p(U,L){let b=o[U.id];b===void 0&&(E(U),b=g(U),o[U.id]=b,U.addEventListener("dispose",S));const F=L.program;s.updateUBOMapping(U,F);const N=e.render.frame;l[U.id]!==N&&(y(U),l[U.id]=N)}function g(U){const L=v();U.__bindingPointIndex=L;const b=r.createBuffer(),F=U.__size,N=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,F,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,b),b}function v(){for(let U=0;U<d;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const L=o[U.id],b=U.uniforms,F=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let N=0,k=b.length;N<k;N++){const Y=Array.isArray(b[N])?b[N]:[b[N]];for(let P=0,C=Y.length;P<C;P++){const V=Y[P];if(M(V,N,P,F)===!0){const fe=V.__offset,W=Array.isArray(V.value)?V.value:[V.value];let ie=0;for(let G=0;G<W.length;G++){const X=W[G],J=T(X);typeof X=="number"||typeof X=="boolean"?(V.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,fe+ie,V.__data)):X.isMatrix3?(V.__data[0]=X.elements[0],V.__data[1]=X.elements[1],V.__data[2]=X.elements[2],V.__data[3]=0,V.__data[4]=X.elements[3],V.__data[5]=X.elements[4],V.__data[6]=X.elements[5],V.__data[7]=0,V.__data[8]=X.elements[6],V.__data[9]=X.elements[7],V.__data[10]=X.elements[8],V.__data[11]=0):(X.toArray(V.__data,ie),ie+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,fe,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(U,L,b,F){const N=U.value,k=L+"_"+b;if(F[k]===void 0)return typeof N=="number"||typeof N=="boolean"?F[k]=N:F[k]=N.clone(),!0;{const Y=F[k];if(typeof N=="number"||typeof N=="boolean"){if(Y!==N)return F[k]=N,!0}else if(Y.equals(N)===!1)return Y.copy(N),!0}return!1}function E(U){const L=U.uniforms;let b=0;const F=16;for(let k=0,Y=L.length;k<Y;k++){const P=Array.isArray(L[k])?L[k]:[L[k]];for(let C=0,V=P.length;C<V;C++){const fe=P[C],W=Array.isArray(fe.value)?fe.value:[fe.value];for(let ie=0,G=W.length;ie<G;ie++){const X=W[ie],J=T(X),B=b%F,de=B%J.boundary,ce=B+de;b+=de,ce!==0&&F-ce<J.storage&&(b+=F-ce),fe.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=b,b+=J.storage}}}const N=b%F;return N>0&&(b+=F-N),U.__size=b,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function S(U){const L=U.target;L.removeEventListener("dispose",S);const b=u.indexOf(L.__bindingPointIndex);u.splice(b,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function _(){for(const U in o)r.deleteBuffer(o[U]);u=[],o={},l={}}return{bind:f,update:p,dispose:_}}class qw{constructor(e={}){const{canvas:t=OS(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=u;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,_=null;const U=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=Lr,this.toneMappingExposure=1;const b=this;let F=!1,N=0,k=0,Y=null,P=-1,C=null;const V=new Vt,fe=new Vt;let W=null;const ie=new xt(0);let G=0,X=t.width,J=t.height,B=1,de=null,ce=null;const O=new Vt(0,0,X,J),se=new Vt(0,0,X,J);let Ce=!1;const re=new rh;let he=!1,Ee=!1;const _e=new Ot,be=new Ot,Fe=new ne,Ze=new Vt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Ct(){return Y===null?B:1}let q=s;function Qt(A,K){return t.getContext(A,K)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qf}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),q===null){const K="webgl2";if(q=Qt(K,A),q===null)throw Qt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Te,Le,Oe,ot,Ge,D,R,ee,me,ve,pe,ke,Pe,Be,ct,Me,He,tt,nt,je,pt,at,At,$;function De(){Te=new eT(q),Te.init(),at=new Bw(q,Te),Le=new Y1(q,Te,e,at),Oe=new Fw(q,Te),Le.reverseDepthBuffer&&y&&Oe.buffers.depth.setReversed(!0),ot=new iT(q),Ge=new Sw,D=new kw(q,Te,Oe,Ge,Le,at,ot),R=new K1(b),ee=new J1(b),me=new uM(q),At=new X1(q,me),ve=new tT(q,me,ot,At),pe=new sT(q,ve,me,ot),nt=new rT(q,Le,D),Me=new q1(Ge),ke=new yw(b,R,ee,Te,Le,At,Me),Pe=new $w(b,Ge),Be=new Ew,ct=new bw(Te),tt=new W1(b,R,ee,Oe,pe,M,f),He=new Nw(b,pe,Le),$=new Yw(q,ot,Le,Oe),je=new $1(q,Te,ot),pt=new nT(q,Te,ot),ot.programs=ke.programs,b.capabilities=Le,b.extensions=Te,b.properties=Ge,b.renderLists=Be,b.shadowMap=He,b.state=Oe,b.info=ot}De();const ue=new Ww(b,q);this.xr=ue,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=Te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(X,J,!1))},this.getSize=function(A){return A.set(X,J)},this.setSize=function(A,K,ae=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,J=K,t.width=Math.floor(A*B),t.height=Math.floor(K*B),ae===!0&&(t.style.width=A+"px",t.style.height=K+"px"),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(X*B,J*B).floor()},this.setDrawingBufferSize=function(A,K,ae){X=A,J=K,B=ae,t.width=Math.floor(A*ae),t.height=Math.floor(K*ae),this.setViewport(0,0,A,K)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,K,ae,le){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,K,ae,le),Oe.viewport(V.copy(O).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(se)},this.setScissor=function(A,K,ae,le){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,K,ae,le),Oe.scissor(fe.copy(se).multiplyScalar(B).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(A){Oe.setScissorTest(Ce=A)},this.setOpaqueSort=function(A){de=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(A=!0,K=!0,ae=!0){let le=0;if(A){let Z=!1;if(Y!==null){const Ae=Y.texture.format;Z=Ae===th||Ae===eh||Ae===Jf}if(Z){const Ae=Y.texture.type,we=Ae===Ji||Ae===cs||Ae===ca||Ae===ao||Ae===Zf||Ae===Qf,Ye=tt.getClearColor(),Xe=tt.getClearAlpha(),it=Ye.r,st=Ye.g,qe=Ye.b;we?(E[0]=it,E[1]=st,E[2]=qe,E[3]=Xe,q.clearBufferuiv(q.COLOR,0,E)):(T[0]=it,T[1]=st,T[2]=qe,T[3]=Xe,q.clearBufferiv(q.COLOR,0,T))}else le|=q.COLOR_BUFFER_BIT}K&&(le|=q.DEPTH_BUFFER_BIT),ae&&(le|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Be.dispose(),ct.dispose(),Ge.dispose(),R.dispose(),ee.dispose(),pe.dispose(),At.dispose(),$.dispose(),ke.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",fs),ue.removeEventListener("sessionend",tr),Li.stop()};function ge(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const A=ot.autoReset,K=He.enabled,ae=He.autoUpdate,le=He.needsUpdate,Z=He.type;De(),ot.autoReset=A,He.enabled=K,He.autoUpdate=ae,He.needsUpdate=le,He.type=Z}function Ne(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function lt(A){const K=A.target;K.removeEventListener("dispose",lt),Ut(K)}function Ut(A){Xt(A),Ge.remove(A)}function Xt(A){const K=Ge.get(A).programs;K!==void 0&&(K.forEach(function(ae){ke.releaseProgram(ae)}),A.isShaderMaterial&&ke.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ae,le,Z,Ae){K===null&&(K=Tt);const we=Z.isMesh&&Z.matrixWorld.determinant()<0,Ye=_a(A,K,ae,le,Z);Oe.setMaterial(le,we);let Xe=ae.index,it=1;if(le.wireframe===!0){if(Xe=ve.getWireframeAttribute(ae),Xe===void 0)return;it=2}const st=ae.drawRange,qe=ae.attributes.position;let vt=st.start*it,wt=(st.start+st.count)*it;Ae!==null&&(vt=Math.max(vt,Ae.start*it),wt=Math.min(wt,(Ae.start+Ae.count)*it)),Xe!==null?(vt=Math.max(vt,0),wt=Math.min(wt,Xe.count)):qe!=null&&(vt=Math.max(vt,0),wt=Math.min(wt,qe.count));const gt=wt-vt;if(gt<0||gt===1/0)return;At.setup(Z,le,Ye,ae,Xe);let ln,ut=je;if(Xe!==null&&(ln=me.get(Xe),ut=pt,ut.setIndex(ln)),Z.isMesh)le.wireframe===!0?(Oe.setLineWidth(le.wireframeLinewidth*Ct()),ut.setMode(q.LINES)):ut.setMode(q.TRIANGLES);else if(Z.isLine){let Qe=le.linewidth;Qe===void 0&&(Qe=1),Oe.setLineWidth(Qe*Ct()),Z.isLineSegments?ut.setMode(q.LINES):Z.isLineLoop?ut.setMode(q.LINE_LOOP):ut.setMode(q.LINE_STRIP)}else Z.isPoints?ut.setMode(q.POINTS):Z.isSprite&&ut.setMode(q.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ut.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))ut.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qe=Z._multiDrawStarts,ni=Z._multiDrawCounts,Mt=Z._multiDrawCount,cn=Xe?me.get(Xe).bytesPerElement:1,ii=Ge.get(le).currentProgram.getUniforms();for(let $t=0;$t<Mt;$t++)ii.setValue(q,"_gl_DrawID",$t),ut.render(Qe[$t]/cn,ni[$t])}else if(Z.isInstancedMesh)ut.renderInstances(vt,gt,Z.count);else if(ae.isInstancedBufferGeometry){const Qe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ni=Math.min(ae.instanceCount,Qe);ut.renderInstances(vt,gt,ni)}else ut.render(vt,gt)};function _t(A,K,ae){A.transparent===!0&&A.side===Yi&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,hs(A,K,ae),A.side=Dr,A.needsUpdate=!0,hs(A,K,ae),A.side=Yi):hs(A,K,ae)}this.compile=function(A,K,ae=null){ae===null&&(ae=A),_=ct.get(ae),_.init(K),L.push(_),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),A!==ae&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const le=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let we=0;we<Ae.length;we++){const Ye=Ae[we];_t(Ye,ae,Z),le.add(Ye)}else _t(Ae,ae,Z),le.add(Ae)}),L.pop(),_=null,le},this.compileAsync=function(A,K,ae=null){const le=this.compile(A,K,ae);return new Promise(Z=>{function Ae(){if(le.forEach(function(we){Ge.get(we).currentProgram.isReady()&&le.delete(we)}),le.size===0){Z(A);return}setTimeout(Ae,10)}Te.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Mn=null;function gn(A){Mn&&Mn(A)}function fs(){Li.stop()}function tr(){Li.start()}const Li=new a0;Li.setAnimationLoop(gn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(A){Mn=A,ue.setAnimationLoop(A),A===null?Li.stop():Li.start()},ue.addEventListener("sessionstart",fs),ue.addEventListener("sessionend",tr),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(K),K=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,K,Y),_=ct.get(A,L.length),_.init(K),L.push(_),be.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),re.setFromProjectionMatrix(be),Ee=this.localClippingEnabled,he=Me.init(this.clippingPlanes,Ee),S=Be.get(A,U.length),S.init(),U.push(S),ue.enabled===!0&&ue.isPresenting===!0){const Ae=b.xr.getDepthSensingMesh();Ae!==null&&Di(Ae,K,-1/0,b.sortObjects)}Di(A,K,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(de,ce),ht=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ht&&tt.addToRenderList(S,A),this.info.render.frame++,he===!0&&Me.beginShadows();const ae=_.state.shadowsArray;He.render(ae,A,K),he===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=S.opaque,Z=S.transmissive;if(_.setupLights(),K.isArrayCamera){const Ae=K.cameras;if(Z.length>0)for(let we=0,Ye=Ae.length;we<Ye;we++){const Xe=Ae[we];Ir(le,Z,A,Xe)}ht&&tt.render(A);for(let we=0,Ye=Ae.length;we<Ye;we++){const Xe=Ae[we];Nr(S,A,Xe,Xe.viewport)}}else Z.length>0&&Ir(le,Z,A,K),ht&&tt.render(A),Nr(S,A,K);Y!==null&&(D.updateMultisampleRenderTarget(Y),D.updateRenderTargetMipmap(Y)),A.isScene===!0&&A.onAfterRender(b,A,K),At.resetDefaultState(),P=-1,C=null,L.pop(),L.length>0?(_=L[L.length-1],he===!0&&Me.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function Di(A,K,ae,le){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){le&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(be);const we=pe.update(A),Ye=A.material;Ye.visible&&S.push(A,we,Ye,ae,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const we=pe.update(A),Ye=A.material;if(le&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ze.copy(we.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(be)),Array.isArray(Ye)){const Xe=we.groups;for(let it=0,st=Xe.length;it<st;it++){const qe=Xe[it],vt=Ye[qe.materialIndex];vt&&vt.visible&&S.push(A,we,vt,ae,Ze.z,qe)}}else Ye.visible&&S.push(A,we,Ye,ae,Ze.z,null)}}const Ae=A.children;for(let we=0,Ye=Ae.length;we<Ye;we++)Di(Ae[we],K,ae,le)}function Nr(A,K,ae,le){const Z=A.opaque,Ae=A.transmissive,we=A.transparent;_.setupLightsView(ae),he===!0&&Me.setGlobalState(b.clippingPlanes,ae),le&&Oe.viewport(V.copy(le)),Z.length>0&&nr(Z,K,ae),Ae.length>0&&nr(Ae,K,ae),we.length>0&&nr(we,K,ae),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Ir(A,K,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[le.id]===void 0&&(_.state.transmissionRenderTarget[le.id]=new us(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?ha:Ji,minFilter:as,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[le.id],we=le.viewport||V;Ae.setSize(we.z,we.w);const Ye=b.getRenderTarget();b.setRenderTarget(Ae),b.getClearColor(ie),G=b.getClearAlpha(),G<1&&b.setClearColor(16777215,.5),b.clear(),ht&&tt.render(ae);const Xe=b.toneMapping;b.toneMapping=Lr;const it=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),_.setupLightsView(le),he===!0&&Me.setGlobalState(b.clippingPlanes,le),nr(A,ae,le),D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae),Te.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let qe=0,vt=K.length;qe<vt;qe++){const wt=K[qe],gt=wt.object,ln=wt.geometry,ut=wt.material,Qe=wt.group;if(ut.side===Yi&&gt.layers.test(le.layers)){const ni=ut.side;ut.side=Un,ut.needsUpdate=!0,va(gt,ae,le,ln,ut,Qe),ut.side=ni,ut.needsUpdate=!0,st=!0}}st===!0&&(D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae))}b.setRenderTarget(Ye),b.setClearColor(ie,G),it!==void 0&&(le.viewport=it),b.toneMapping=Xe}function nr(A,K,ae){const le=K.isScene===!0?K.overrideMaterial:null;for(let Z=0,Ae=A.length;Z<Ae;Z++){const we=A[Z],Ye=we.object,Xe=we.geometry,it=le===null?we.material:le,st=we.group;Ye.layers.test(ae.layers)&&va(Ye,K,ae,Xe,it,st)}}function va(A,K,ae,le,Z,Ae){A.onBeforeRender(b,K,ae,le,Z,Ae),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(b,K,ae,le,A,Ae),Z.transparent===!0&&Z.side===Yi&&Z.forceSinglePass===!1?(Z.side=Un,Z.needsUpdate=!0,b.renderBufferDirect(ae,K,le,Z,A,Ae),Z.side=Dr,Z.needsUpdate=!0,b.renderBufferDirect(ae,K,le,Z,A,Ae),Z.side=Yi):b.renderBufferDirect(ae,K,le,Z,A,Ae),A.onAfterRender(b,K,ae,le,Z,Ae)}function hs(A,K,ae){K.isScene!==!0&&(K=Tt);const le=Ge.get(A),Z=_.state.lights,Ae=_.state.shadowsArray,we=Z.state.version,Ye=ke.getParameters(A,Z.state,Ae,K,ae),Xe=ke.getProgramCacheKey(Ye);let it=le.programs;le.environment=A.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(A.isMeshStandardMaterial?ee:R).get(A.envMap||le.environment),le.envMapRotation=le.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",lt),it=new Map,le.programs=it);let st=it.get(Xe);if(st!==void 0){if(le.currentProgram===st&&le.lightsStateVersion===we)return xi(A,Ye),st}else Ye.uniforms=ke.getUniforms(A),A.onBeforeCompile(Ye,b),st=ke.acquireProgram(Ye,Xe),it.set(Xe,st),le.uniforms=Ye.uniforms;const qe=le.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Me.uniform),xi(A,Ye),le.needsLights=wc(A),le.lightsStateVersion=we,le.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),le.currentProgram=st,le.uniformsList=null,st}function xa(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=uc.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function xi(A,K){const ae=Ge.get(A);ae.outputColorSpace=K.outputColorSpace,ae.batching=K.batching,ae.batchingColor=K.batchingColor,ae.instancing=K.instancing,ae.instancingColor=K.instancingColor,ae.instancingMorph=K.instancingMorph,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function _a(A,K,ae,le,Z){K.isScene!==!0&&(K=Tt),D.resetTextureUnits();const Ae=K.fog,we=le.isMeshStandardMaterial?K.environment:null,Ye=Y===null?b.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:fo,Xe=(le.isMeshStandardMaterial?ee:R).get(le.envMap||we),it=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,st=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),qe=!!ae.morphAttributes.position,vt=!!ae.morphAttributes.normal,wt=!!ae.morphAttributes.color;let gt=Lr;le.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(gt=b.toneMapping);const ln=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ut=ln!==void 0?ln.length:0,Qe=Ge.get(le),ni=_.state.lights;if(he===!0&&(Ee===!0||A!==C)){const vn=A===C&&le.id===P;Me.setState(le,A,vn)}let Mt=!1;le.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ni.state.version||Qe.outputColorSpace!==Ye||Z.isBatchedMesh&&Qe.batching===!1||!Z.isBatchedMesh&&Qe.batching===!0||Z.isBatchedMesh&&Qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qe.instancing===!1||!Z.isInstancedMesh&&Qe.instancing===!0||Z.isSkinnedMesh&&Qe.skinning===!1||!Z.isSkinnedMesh&&Qe.skinning===!0||Z.isInstancedMesh&&Qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qe.instancingMorph===!1&&Z.morphTexture!==null||Qe.envMap!==Xe||le.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Me.numPlanes||Qe.numIntersection!==Me.numIntersection)||Qe.vertexAlphas!==it||Qe.vertexTangents!==st||Qe.morphTargets!==qe||Qe.morphNormals!==vt||Qe.morphColors!==wt||Qe.toneMapping!==gt||Qe.morphTargetsCount!==ut)&&(Mt=!0):(Mt=!0,Qe.__version=le.version);let cn=Qe.currentProgram;Mt===!0&&(cn=hs(le,K,Z));let ii=!1,$t=!1,_i=!1;const Lt=cn.getUniforms(),Hn=Qe.uniforms;if(Oe.useProgram(cn.program)&&(ii=!0,$t=!0,_i=!0),le.id!==P&&(P=le.id,$t=!0),ii||C!==A){Oe.buffers.depth.getReversed()?(_e.copy(A.projectionMatrix),BS(_e),zS(_e),Lt.setValue(q,"projectionMatrix",_e)):Lt.setValue(q,"projectionMatrix",A.projectionMatrix),Lt.setValue(q,"viewMatrix",A.matrixWorldInverse);const Vn=Lt.map.cameraPosition;Vn!==void 0&&Vn.setValue(q,Fe.setFromMatrixPosition(A.matrixWorld)),Le.logarithmicDepthBuffer&&Lt.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Lt.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,$t=!0,_i=!0)}if(Z.isSkinnedMesh){Lt.setOptional(q,Z,"bindMatrix"),Lt.setOptional(q,Z,"bindMatrixInverse");const vn=Z.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Lt.setValue(q,"boneTexture",vn.boneTexture,D))}Z.isBatchedMesh&&(Lt.setOptional(q,Z,"batchingTexture"),Lt.setValue(q,"batchingTexture",Z._matricesTexture,D),Lt.setOptional(q,Z,"batchingIdTexture"),Lt.setValue(q,"batchingIdTexture",Z._indirectTexture,D),Lt.setOptional(q,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Lt.setValue(q,"batchingColorTexture",Z._colorsTexture,D));const Ui=ae.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&nt.update(Z,ae,cn),($t||Qe.receiveShadow!==Z.receiveShadow)&&(Qe.receiveShadow=Z.receiveShadow,Lt.setValue(q,"receiveShadow",Z.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Hn.envMap.value=Xe,Hn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&K.environment!==null&&(Hn.envMapIntensity.value=K.environmentIntensity),$t&&(Lt.setValue(q,"toneMappingExposure",b.toneMappingExposure),Qe.needsLights&&ya(Hn,_i),Ae&&le.fog===!0&&Pe.refreshFogUniforms(Hn,Ae),Pe.refreshMaterialUniforms(Hn,le,B,J,_.state.transmissionRenderTarget[A.id]),uc.upload(q,xa(Qe),Hn,D)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(uc.upload(q,xa(Qe),Hn,D),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Lt.setValue(q,"center",Z.center),Lt.setValue(q,"modelViewMatrix",Z.modelViewMatrix),Lt.setValue(q,"normalMatrix",Z.normalMatrix),Lt.setValue(q,"modelMatrix",Z.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const vn=le.uniformsGroups;for(let Vn=0,En=vn.length;Vn<En;Vn++){const Sa=vn[Vn];$.update(Sa,cn),$.bind(Sa,cn)}}return cn}function ya(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function wc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,K,ae){Ge.get(A.texture).__webglTexture=K,Ge.get(A.depthTexture).__webglTexture=ae;const le=Ge.get(A);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=ae===void 0,le.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,K){const ae=Ge.get(A);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,ae=0){Y=A,N=K,k=ae;let le=!0,Z=null,Ae=!1,we=!1;if(A){const Xe=Ge.get(A);if(Xe.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(q.FRAMEBUFFER,null),le=!1;else if(Xe.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Xe.__hasExternalTextures)D.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qe=A.depthTexture;if(Xe.__boundDepthTexture!==qe){if(qe!==null&&Ge.has(qe)&&(A.width!==qe.image.width||A.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(we=!0);const st=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[K])?Z=st[K][ae]:Z=st[K],Ae=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?Z=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?Z=st[ae]:Z=st,V.copy(A.viewport),fe.copy(A.scissor),W=A.scissorTest}else V.copy(O).multiplyScalar(B).floor(),fe.copy(se).multiplyScalar(B).floor(),W=Ce;if(Oe.bindFramebuffer(q.FRAMEBUFFER,Z)&&le&&Oe.drawBuffers(A,Z),Oe.viewport(V),Oe.scissor(fe),Oe.setScissorTest(W),Ae){const Xe=Ge.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Xe.__webglTexture,ae)}else if(we){const Xe=Ge.get(A.texture),it=K||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Xe.__webglTexture,ae||0,it)}P=-1},this.readRenderTargetPixels=function(A,K,ae,le,Z,Ae,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ye=Ye[we]),Ye){Oe.bindFramebuffer(q.FRAMEBUFFER,Ye);try{const Xe=A.texture,it=Xe.format,st=Xe.type;if(!Le.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-le&&ae>=0&&ae<=A.height-Z&&q.readPixels(K,ae,le,Z,at.convert(it),at.convert(st),Ae)}finally{const Xe=Y!==null?Ge.get(Y).__webglFramebuffer:null;Oe.bindFramebuffer(q.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,K,ae,le,Z,Ae,we){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ye=Ye[we]),Ye){const Xe=A.texture,it=Xe.format,st=Xe.type;if(!Le.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=A.width-le&&ae>=0&&ae<=A.height-Z){Oe.bindFramebuffer(q.FRAMEBUFFER,Ye);const qe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,qe),q.bufferData(q.PIXEL_PACK_BUFFER,Ae.byteLength,q.STREAM_READ),q.readPixels(K,ae,le,Z,at.convert(it),at.convert(st),0);const vt=Y!==null?Ge.get(Y).__webglFramebuffer:null;Oe.bindFramebuffer(q.FRAMEBUFFER,vt);const wt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await kS(q,wt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,qe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ae),q.deleteBuffer(qe),q.deleteSync(wt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,K=null,ae=0){A.isTexture!==!0&&(na("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1]);const le=Math.pow(2,-ae),Z=Math.floor(A.image.width*le),Ae=Math.floor(A.image.height*le),we=K!==null?K.x:0,Ye=K!==null?K.y:0;D.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,ae,0,0,we,Ye,Z,Ae),Oe.unbindTexture()},this.copyTextureToTexture=function(A,K,ae=null,le=null,Z=0){A.isTexture!==!0&&(na("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,A=arguments[1],K=arguments[2],Z=arguments[3]||0,ae=null);let Ae,we,Ye,Xe,it,st,qe,vt,wt;const gt=A.isCompressedTexture?A.mipmaps[Z]:A.image;ae!==null?(Ae=ae.max.x-ae.min.x,we=ae.max.y-ae.min.y,Ye=ae.isBox3?ae.max.z-ae.min.z:1,Xe=ae.min.x,it=ae.min.y,st=ae.isBox3?ae.min.z:0):(Ae=gt.width,we=gt.height,Ye=gt.depth||1,Xe=0,it=0,st=0),le!==null?(qe=le.x,vt=le.y,wt=le.z):(qe=0,vt=0,wt=0);const ln=at.convert(K.format),ut=at.convert(K.type);let Qe;K.isData3DTexture?(D.setTexture3D(K,0),Qe=q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(D.setTexture2DArray(K,0),Qe=q.TEXTURE_2D_ARRAY):(D.setTexture2D(K,0),Qe=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment);const ni=q.getParameter(q.UNPACK_ROW_LENGTH),Mt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),cn=q.getParameter(q.UNPACK_SKIP_PIXELS),ii=q.getParameter(q.UNPACK_SKIP_ROWS),$t=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,gt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,gt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Xe),q.pixelStorei(q.UNPACK_SKIP_ROWS,it),q.pixelStorei(q.UNPACK_SKIP_IMAGES,st);const _i=A.isDataArrayTexture||A.isData3DTexture,Lt=K.isDataArrayTexture||K.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Hn=Ge.get(A),Ui=Ge.get(K),vn=Ge.get(Hn.__renderTarget),Vn=Ge.get(Ui.__renderTarget);Oe.bindFramebuffer(q.READ_FRAMEBUFFER,vn.__webglFramebuffer),Oe.bindFramebuffer(q.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let En=0;En<Ye;En++)_i&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ge.get(A).__webglTexture,Z,st+En),A.isDepthTexture?(Lt&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ge.get(K).__webglTexture,Z,wt+En),q.blitFramebuffer(Xe,it,Ae,we,qe,vt,Ae,we,q.DEPTH_BUFFER_BIT,q.NEAREST)):Lt?q.copyTexSubImage3D(Qe,Z,qe,vt,wt+En,Xe,it,Ae,we):q.copyTexSubImage2D(Qe,Z,qe,vt,wt+En,Xe,it,Ae,we);Oe.bindFramebuffer(q.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Lt?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Qe,Z,qe,vt,wt,Ae,we,Ye,ln,ut,gt.data):K.isCompressedArrayTexture?q.compressedTexSubImage3D(Qe,Z,qe,vt,wt,Ae,we,Ye,ln,gt.data):q.texSubImage3D(Qe,Z,qe,vt,wt,Ae,we,Ye,ln,ut,gt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Z,qe,vt,Ae,we,ln,ut,gt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Z,qe,vt,gt.width,gt.height,ln,gt.data):q.texSubImage2D(q.TEXTURE_2D,Z,qe,vt,Ae,we,ln,ut,gt);q.pixelStorei(q.UNPACK_ROW_LENGTH,ni),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Mt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,cn),q.pixelStorei(q.UNPACK_SKIP_ROWS,ii),q.pixelStorei(q.UNPACK_SKIP_IMAGES,$t),Z===0&&K.generateMipmaps&&q.generateMipmap(Qe),Oe.unbindTexture()},this.copyTextureToTexture3D=function(A,K,ae=null,le=null,Z=0){return A.isTexture!==!0&&(na("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,le=arguments[1]||null,A=arguments[2],K=arguments[3],Z=arguments[4]||0),na('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,K,ae,le,Z)},this.initRenderTarget=function(A){Ge.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Oe.unbindTexture()},this.resetState=function(){N=0,k=0,Y=null,Oe.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class Kw extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class p0 extends po{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mc=new ne,gc=new ne,Gg=new Ot,ta=new nh,Xl=new Mc,zd=new ne,jg=new ne;class Zw extends rn{constructor(e=new er,t=new p0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)mc.fromBufferAttribute(t,o-1),gc.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=mc.distanceTo(gc);e.setAttribute("lineDistance",new Ci(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Xl.copy(s.boundingSphere),Xl.applyMatrix4(o),Xl.radius+=l,e.ray.intersectsSphere(Xl)===!1)return;Gg.copy(o).invert(),ta.copy(e.ray).applyMatrix4(Gg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const M=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let T=M,S=E-1;T<S;T+=p){const _=g.getX(T),U=g.getX(T+1),L=$l(this,e,ta,f,_,U);L&&t.push(L)}if(this.isLineLoop){const T=g.getX(E-1),S=g.getX(M),_=$l(this,e,ta,f,T,S);_&&t.push(_)}}else{const M=Math.max(0,u.start),E=Math.min(y.count,u.start+u.count);for(let T=M,S=E-1;T<S;T+=p){const _=$l(this,e,ta,f,T,T+1);_&&t.push(_)}if(this.isLineLoop){const T=$l(this,e,ta,f,E-1,M);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function $l(r,e,t,s,o,l){const u=r.geometry.attributes.position;if(mc.fromBufferAttribute(u,o),gc.fromBufferAttribute(u,l),t.distanceSqToSegment(mc,gc,zd,jg)>s)return;zd.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(zd);if(!(f<e.near||f>e.far))return{distance:f,point:jg.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Wg=new ne,Xg=new ne;class oh extends Zw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)Wg.fromBufferAttribute(t,o),Xg.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Wg.distanceTo(Xg);e.setAttribute("lineDistance",new Ci(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Yl=new ne,ql=new ne,Hd=new ne,Kl=new ei;class Qw extends er{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(cc*t),u=e.getIndex(),d=e.getAttribute("position"),f=u?u.count:d.count,p=[0,0,0],g=["a","b","c"],v=new Array(3),y={},M=[];for(let E=0;E<f;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:T,b:S,c:_}=Kl;if(T.fromBufferAttribute(d,p[0]),S.fromBufferAttribute(d,p[1]),_.fromBufferAttribute(d,p[2]),Kl.getNormal(Hd),v[0]=`${Math.round(T.x*o)},${Math.round(T.y*o)},${Math.round(T.z*o)}`,v[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,v[2]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let U=0;U<3;U++){const L=(U+1)%3,b=v[U],F=v[L],N=Kl[g[U]],k=Kl[g[L]],Y=`${b}_${F}`,P=`${F}_${b}`;P in y&&y[P]?(Hd.dot(y[P].normal)<=l&&(M.push(N.x,N.y,N.z),M.push(k.x,k.y,k.z)),y[P]=null):Y in y||(y[Y]={index0:p[U],index1:p[L],normal:Hd.clone()})}}for(const E in y)if(y[E]){const{index0:T,index1:S}=y[E];Yl.fromBufferAttribute(d,T),ql.fromBufferAttribute(d,S),M.push(Yl.x,Yl.y,Yl.z),M.push(ql.x,ql.y,ql.z)}this.setAttribute("position",new Ci(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class m0 extends po{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qv,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class g0 extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Vd=new Ot,$g=new ne,Yg=new ne;class Jw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rh,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;$g.setFromMatrixPosition(e.matrixWorld),t.position.copy($g),Yg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yg),t.updateMatrixWorld(),Vd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eR extends Jw{constructor(){super(new l0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gd extends g0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new eR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tR extends g0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const qg=new Ot;class nR{constructor(e,t,s=0,o=1/0){this.ray=new nh(e,t),this.near=s,this.far=o,this.camera=null,this.layers=new ih,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qg),this}intersectObject(e,t=!0,s=[]){return Of(e,this,s,t),s.sort(Kg),s}intersectObjects(e,t=!0,s=[]){for(let o=0,l=e.length;o<l;o++)Of(e[o],this,s,t);return s.sort(Kg),s}}function Kg(r,e){return r.distance-e.distance}function Of(r,e,t,s){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&s===!0){const l=r.children;for(let u=0,d=l.length;u<d;u++)Of(l[u],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qf);const v0={W:"#ffffff",Y:"#ffd500",R:"#b71234",O:"#ff5800",B:"#0046ad",G:"#009b48"};function is(r,e,t,s,o,l){return{right:r,left:e,up:t,down:s,front:o,back:l}}function Sn(){const r=[];for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)for(let s=-1;s<=1;s++)e===0&&t===0&&s===0||r.push({position:[e,t,s],colors:is(e===1?"R":null,e===-1?"O":null,t===1?"W":null,t===-1?"Y":null,s===1?"G":null,s===-1?"B":null)});return r}function iR(r,e,t,s){const[o,l,u]=r.position;if((e==="x"?o:e==="y"?l:u)!==t)return{...r,colors:{...r.colors}};let f=o,p=l,g=u,v={...r.colors};return e==="x"&&s===1?(p=-u,g=l,v=is(r.colors.right,r.colors.left,r.colors.back,r.colors.front,r.colors.up,r.colors.down)):e==="x"&&s===-1?(p=u,g=-l,v=is(r.colors.right,r.colors.left,r.colors.front,r.colors.back,r.colors.down,r.colors.up)):e==="y"&&s===1?(f=u,g=-o,v=is(r.colors.front,r.colors.back,r.colors.up,r.colors.down,r.colors.left,r.colors.right)):e==="y"&&s===-1?(f=-u,g=o,v=is(r.colors.back,r.colors.front,r.colors.up,r.colors.down,r.colors.right,r.colors.left)):e==="z"&&s===1?(f=-l,p=o,v=is(r.colors.down,r.colors.up,r.colors.right,r.colors.left,r.colors.front,r.colors.back)):e==="z"&&s===-1&&(f=l,p=-o,v=is(r.colors.up,r.colors.down,r.colors.left,r.colors.right,r.colors.front,r.colors.back)),{position:[f,p,g],colors:v}}function oa(r,e){return r.map(t=>iR(t,e.axis,e.layer,e.direction))}function kf(r){const e={R:{axis:"x",layer:1},L:{axis:"x",layer:-1},U:{axis:"y",layer:1},D:{axis:"y",layer:-1},F:{axis:"z",layer:1},B:{axis:"z",layer:-1}},t=r.includes("'"),s=r.replace("'",""),{axis:o,layer:l}=e[s];return{axis:o,layer:l,direction:t?-1:1}}const Zg=["R","R'","L","L'","U","U'","D","D'","F","F'","B","B'"];function x0(r,e=20){const t=[];let s=[...r],o=null;for(let l=0;l<e;l++){let u,d;do u=Zg[Math.floor(Math.random()*Zg.length)],d=kf(u);while(d.axis===o);t.push(d),s=oa(s,d),o=d.axis}return{cubies:s,moves:t}}function _0(r){const e=Sn();for(let t=0;t<r.length;t++){const s=r[t],o=e[t];if(s.position[0]!==o.position[0]||s.position[1]!==o.position[1]||s.position[2]!==o.position[2]||s.colors.right!==o.colors.right||s.colors.left!==o.colors.left||s.colors.up!==o.colors.up||s.colors.down!==o.colors.down||s.colors.front!==o.colors.front||s.colors.back!==o.colors.back)return!1}return!0}const Qg=r=>{let e;const t=new Set,s=(p,g)=>{const v=typeof p=="function"?p(e):p;if(!Object.is(v,e)){const y=e;e=g??(typeof v!="object"||v===null)?v:Object.assign({},e,v),t.forEach(M=>M(e,y))}},o=()=>e,d={setState:s,getState:o,getInitialState:()=>f,subscribe:p=>(t.add(p),()=>t.delete(p))},f=e=r(s,o,d);return d},rR=(r=>r?Qg(r):Qg),sR=r=>r;function oR(r,e=sR){const t=Ml.useSyncExternalStore(r.subscribe,Ml.useCallback(()=>e(r.getState()),[r,e]),Ml.useCallback(()=>e(r.getInitialState()),[r,e]));return Ml.useDebugValue(t),t}const Jg=r=>{const e=rR(r),t=s=>oR(e,s);return Object.assign(t,e),t},aR=(r=>r?Jg(r):Jg),Ri=aR(r=>({cubies:Sn(),snapshots:[{cubies:Sn()}],history:[],isAnimating:!1,currentStep:0,reset:()=>r({cubies:Sn(),snapshots:[{cubies:Sn()}],history:[],isAnimating:!1,currentStep:0}),applySingleMove:e=>r(t=>{const s=oa(t.cubies,e);return{cubies:s,snapshots:[...t.snapshots,{cubies:s}],history:[...t.history,e],currentStep:t.currentStep+1}}),undo:()=>r(e=>{if(e.snapshots.length===0)return e;const t=e.snapshots.slice(0,-1);return{cubies:t.length>0?t[t.length-1].cubies:Sn(),snapshots:t,history:e.history.slice(0,-1),currentStep:e.currentStep-1}}),scramble:e=>{if(typeof e!="number"){const{cubies:u,moves:d}=e,f=[{cubies:Sn()}];let p=Sn();for(const g of d)p=oa(p,g),f.push({cubies:p});r({cubies:u,snapshots:f,history:d,isAnimating:!1,currentStep:d.length});return}const{cubies:t,moves:s}=x0(Sn(),e),o=[{cubies:Sn()}];let l=Sn();for(const u of s)l=oa(l,u),o.push({cubies:l});r({cubies:t,snapshots:o,history:s,isAnimating:!1,currentStep:e})},setAnimating:e=>r({isAnimating:e})})),y0="#d0d5dd",lR="#888888",ev=280,S0=["right","left","up","down","front","back"],cR={R:new ne(1,0,0),L:new ne(-1,0,0),U:new ne(0,1,0),D:new ne(0,-1,0),F:new ne(0,0,1),B:new ne(0,0,-1)},tv={R:"x",L:"x",U:"y",D:"y",F:"z",B:"z"},nv={R:1,L:-1,U:1,D:-1,F:1,B:-1};function uR(r){return S0.map(e=>{const t=r.colors[e],s=t?v0[t]:y0;return new m0({color:new xt(s),roughness:.7,metalness:0})})}function dR(r,e,t,s){const o=new ra;o.position.set(e[0]*t,e[1]*t,e[2]*t);const l=new mo(s,s,s),u=new Dn(l,uR(r));o.add(u);const d=new Qw(l);return o.add(new oh(d,new p0({color:lR}))),o}function iv(r,e,t){return r.map(s=>dR(s,s.position,e,t))}function rv(r){r.traverse(e=>{if(e instanceof Dn||e instanceof oh){e.geometry.dispose();const t=e.material;Array.isArray(t)?t.forEach(s=>s.dispose()):t&&t.dispose()}})}function fR(r,e){r.traverse(t=>{if(t instanceof Dn){const s=t.material;Array.isArray(s)&&S0.forEach((o,l)=>{const u=e.colors[o],d=u?v0[u]:y0;l<s.length&&s[l]instanceof m0&&s[l].color.set(d)})}})}const ls=z.forwardRef(function({disableStore:e}={},t){const s=z.useRef(null),o=z.useRef(null),l=z.useRef(null),u=z.useRef(null),d=z.useRef([]),f=z.useRef(Sn()),p=z.useRef(null),g=z.useRef(0),v=z.useRef(new nR),y=z.useRef(new Rt),[M,E]=z.useState(!1),[T,S]=z.useState(null),_=Ri(W=>W.scramble),U=Ri(W=>W.reset),L=Ri(W=>W.applySingleMove),b=z.useRef({theta:Math.atan2(5,5),phi:Math.asin(4/Math.sqrt(66)),radius:Math.sqrt(66),isDragging:!1,lastMouse:{x:0,y:0}}),F=1/3,N=F*.85,k=z.useCallback((W,ie)=>{const G=[],X=F*.6,J=ie*F,B=new ne;for(const de of d.current){de.getWorldPosition(B);const ce=W==="x"?B.x:W==="y"?B.y:B.z;Math.abs(ce-J)<X&&G.push(de)}return G},[F]),Y=z.useCallback(W=>{const ie=d.current;d.current=[];const G=iv(f.current,F,N);for(const X of G)W.add(X);if(d.current=G,ie.length>0){const X=[...ie];for(const J of X)W.remove(J);requestAnimationFrame(()=>{for(const J of X)rv(J)})}},[F,N]),P=z.useCallback(()=>{const W=l.current;if(!W)return;const{theta:ie,phi:G,radius:X}=b.current;W.position.set(X*Math.cos(G)*Math.sin(ie),X*Math.sin(G),X*Math.cos(G)*Math.cos(ie)),W.lookAt(0,0,0)},[]),C=z.useCallback((W,ie,G,X,J)=>{if(p.current)return;const B=k(W,ie);if(B.length===0)return;const de=new rn;X.add(de);for(const O of B)de.attach(O);const ce=Math.PI/2*G;p.current={pivot:de,cubieGroups:B,targetAngle:ce,startTime:performance.now(),axis:W,move:{axis:W,layer:ie,direction:G},skipStore:J}},[k]),V=z.useCallback(W=>{if(p.current||M)return;const ie=o.current;if(!ie)return;const G=kf(W);C(G.axis,G.layer,G.direction,ie,!!e),E(!0)},[M,C,e]),fe=z.useCallback(W=>{if(p.current||M)return;const ie=o.current;if(!ie)return;const G=kf(W);C(G.axis,G.layer,G.direction,ie,!0),E(!0)},[M,C]);return z.useImperativeHandle(t,()=>({executeMove:W=>{V(W)},undoMove:W=>{fe(W)},scramble:(W=20)=>{const ie=o.current;if(!ie||p.current)return;const{cubies:G,moves:X}=x0(Sn(),W);f.current=G,Y(ie),e||_({cubies:G,moves:X})},reset:()=>{const W=o.current;!W||p.current||(f.current=Sn(),Y(W),e||U())},isAnimating:()=>M}),[V,Y,_,U,M,e]),z.useEffect(()=>{const W=s.current;if(!W)return;const ie=new Kw;ie.background=new xt("#f5f7fa"),o.current=ie;const G=new Jn(45,W.clientWidth/Math.max(W.clientHeight,1),.1,100),X=b.current;G.position.set(X.radius*Math.cos(X.phi)*Math.sin(X.theta),X.radius*Math.sin(X.phi),X.radius*Math.cos(X.phi)*Math.cos(X.theta)),G.lookAt(0,0,0),G.zoom=2,G.updateProjectionMatrix(),l.current=G;const J=new qw({antialias:!0,alpha:!1});J.setPixelRatio(Math.min(window.devicePixelRatio,2)),J.setSize(W.clientWidth,W.clientHeight),W.appendChild(J.domElement),u.current=J;const B=new tR(8947865,1);ie.add(B);const de=new Gd(16777215,1.8);de.position.set(5,10,5),ie.add(de);const ce=new Gd(16777215,1);ce.position.set(-3,2,-4),ie.add(ce);const O=new Gd(16777215,.5);O.position.set(0,-5,8),ie.add(O);const se=iv(f.current,F,N);for(const Te of se)ie.add(Te);d.current=se;const Ce=[];se.forEach(Te=>Te.traverse(Le=>{Le instanceof Dn&&Ce.push(Le)}));const re=(Te,Le)=>{const Oe=J.domElement.getBoundingClientRect();y.current.x=(Te-Oe.left)/Oe.width*2-1,y.current.y=-((Le-Oe.top)/Oe.height)*2+1,v.current.setFromCamera(y.current,G);const ot=v.current.intersectObjects(Ce);if(ot.length===0)return null;const Ge=ot[0].face.normal.clone();Ge.transformDirection(ot[0].object.matrixWorld);let D="",R=-1/0;for(const[ee,me]of Object.entries(cR)){const ve=Ge.dot(me);ve>R&&ve>.5&&(R=ve,D=ee)}return D||null},he=Te=>{if(p.current||Te.button!==0&&Te.button!==2)return;const Le=re(Te.clientX,Te.clientY);if(Le){const Oe=tv[Le],ot=nv[Le],Ge=Te.button===0?ot:-ot;C(Oe,ot,Ge,o.current,!1),E(!0);return}Te.button===0&&(X.isDragging=!0,X.lastMouse={x:Te.clientX,y:Te.clientY})},Ee=Te=>{if(!X.isDragging){if(!p.current){const ot=re(Te.clientX,Te.clientY);S(ot),W.style.cursor=ot?"pointer":""}return}const Le=Te.clientX-X.lastMouse.x,Oe=Te.clientY-X.lastMouse.y;X.lastMouse={x:Te.clientX,y:Te.clientY},X.theta-=Le*.005,X.phi+=Oe*.005,X.phi=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,X.phi)),P()},_e=()=>{X.isDragging=!1},be=Te=>{Te.preventDefault()},Fe=Te=>{Te.preventDefault(),X.radius+=Te.deltaY*.01*(X.radius/8),X.radius=Math.max(3,Math.min(20,X.radius)),P()};let Ze=null;const Tt=Te=>{p.current||Te.touches.length!==1||(Ze=re(Te.touches[0].clientX,Te.touches[0].clientY),!Ze&&(X.isDragging=!0,X.lastMouse={x:Te.touches[0].clientX,y:Te.touches[0].clientY}))},ht=Te=>{if(!X.isDragging||Te.touches.length!==1)return;Te.preventDefault();const Le=Te.touches[0].clientX-X.lastMouse.x,Oe=Te.touches[0].clientY-X.lastMouse.y;X.lastMouse={x:Te.touches[0].clientX,y:Te.touches[0].clientY},X.theta-=Le*.005,X.phi+=Oe*.005,X.phi=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,X.phi)),P()},Ct=()=>{if(Ze&&!X.isDragging){const Te=tv[Ze],Le=nv[Ze],Oe=-Le;C(Te,Le,Oe,o.current,!1),E(!0)}Ze=null,X.isDragging=!1};J.domElement.addEventListener("mousedown",he),window.addEventListener("mousemove",Ee),window.addEventListener("mouseup",_e),J.domElement.addEventListener("contextmenu",be),J.domElement.addEventListener("wheel",Fe,{passive:!1}),J.domElement.addEventListener("touchstart",Tt,{passive:!1}),J.domElement.addEventListener("touchmove",ht,{passive:!1}),window.addEventListener("touchend",Ct);const q=()=>{const{clientWidth:Te,clientHeight:Le}=W;G.aspect=Te/Math.max(Le,1),G.updateProjectionMatrix(),J.setSize(Te,Le)};window.addEventListener("resize",q);const Qt=Te=>{const Le=p.current;if(Le){const Oe=Te-Le.startTime;let ot=Math.min(Oe/ev,1);ot=1-(1-ot)*(1-ot);const Ge=Le.targetAngle*ot;if(Le.pivot.rotation.set(0,0,0),Le.axis==="x"?Le.pivot.rotation.x=Ge:Le.axis==="y"?Le.pivot.rotation.y=Ge:Le.pivot.rotation.z=Ge,Oe>=ev){const D=oa(f.current,Le.move);f.current=D;const R=F;for(const ee of Le.cubieGroups){const me=new ne;ee.getWorldPosition(me);let ve=-1,pe=1/0;for(let ke=0;ke<D.length;ke++){const Pe=D[ke].position,Be=me.x-Pe[0]*R,ct=me.y-Pe[1]*R,Me=me.z-Pe[2]*R,He=Be*Be+ct*ct+Me*Me;He<pe&&(pe=He,ve=ke)}if(ve>=0){const ke=D[ve];ie.attach(ee),ee.rotation.set(0,0,0),ee.position.set(ke.position[0]*R,ke.position[1]*R,ke.position[2]*R),fR(ee,ke)}}ie.remove(Le.pivot),Le.pivot.clear(),Le.skipStore||L(Le.move),p.current=null,E(!1)}}J.render(ie,G),g.current=requestAnimationFrame(Qt)};return g.current=requestAnimationFrame(Qt),()=>{cancelAnimationFrame(g.current),J.domElement.removeEventListener("mousedown",he),window.removeEventListener("mousemove",Ee),window.removeEventListener("mouseup",_e),J.domElement.removeEventListener("contextmenu",be),J.domElement.removeEventListener("wheel",Fe),J.domElement.removeEventListener("touchstart",Tt),J.domElement.removeEventListener("touchmove",ht),window.removeEventListener("touchend",Ct),window.removeEventListener("resize",q),p.current&&(ie.remove(p.current.pivot),p.current.pivot.clear());for(const Te of d.current)rv(Te),ie.remove(Te);d.current=[],ie.traverse(Te=>{if(Te instanceof Dn||Te instanceof oh){Te.geometry.dispose();const Le=Te.material;Array.isArray(Le)?Le.forEach(Oe=>Oe.dispose()):Le&&Le.dispose()}}),ie.clear(),J.dispose(),W.contains(J.domElement)&&W.removeChild(J.domElement)}},[]),m.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",flex:1,minHeight:"300px"},children:[m.jsx("div",{ref:s,style:{position:"relative",width:"100%",flex:1,minHeight:0,borderRadius:"12px",overflow:"hidden",background:"#f5f7fa",border:"1px solid var(--rule, #e2e5ea)"},children:T&&m.jsxs("div",{style:{position:"absolute",top:"8px",left:"8px",zIndex:10,padding:"4px 10px",borderRadius:"6px",background:"rgba(37,99,235,0.9)",color:"#fff",fontSize:"11px",fontFamily:"monospace",lineHeight:1.5},children:[m.jsxs("div",{children:[T,"面"]}),m.jsx("div",{style:{fontSize:"10px",opacity:.85},children:"左键↺逆时针 | 右键↻顺时针"})]})}),m.jsx("div",{style:{textAlign:"center",paddingTop:"6px",fontSize:"11px",color:"var(--ink2, #5f6368)"},children:"左键点击面 = 逆时针 | 右键点击面 = 顺时针 | 空白拖拽 = 旋转视角"})]})}),Ks=["R","U","F'","R'","U'","F"],hR=["F'","U","R","F","U'","R'"],pR={0:{text:"F' = 绕Z轴 -90° → 逆旋转矩阵",color:"#10B981"},1:{text:"U = 绕Y轴 +90° → 旋转矩阵",color:"#10B981"},2:{text:"R = 绕X轴 +90° → 旋转矩阵",color:"#10B981"},3:{text:"F = 绕Z轴 +90° → 旋转矩阵",color:"#10B981"},4:{text:"U' = 绕Y轴 -90° → 逆旋转矩阵",color:"#10B981"},5:{text:"R' = (R·U·F)⁻¹ = F⁻¹·U⁻¹·R⁻¹ → 逆序列法则",color:"#EF4444"}};function mR(){var s;const r=z.useRef(null),[e,t]=z.useState(-1);return z.useEffect(()=>{const o=[...Ks,...hR];let l=0;const u=setInterval(()=>{var d;r.current&&l<o.length?(r.current.executeMove(o[l]),t(l),l++):((d=r.current)==null||d.reset(),t(-1),l=0)},800);return()=>clearInterval(u)},[]),m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"hero",children:m.jsxs("div",{className:"hero-inner",children:[m.jsxs("div",{className:"hero-text",children:[m.jsxs("div",{className:"hero-badge",children:[m.jsx("span",{className:"hero-badge-dot"}),"线性代数 × 魔方"]}),m.jsxs("h1",{children:["魔方不是靠背的",m.jsx("br",{}),"是用",m.jsx("em",{children:"数学"}),"推出来的"]}),m.jsxs("p",{className:"hero-desc",children:["用线性代数思维理解魔方转动，用抵消法自主推导复原方案。",m.jsx("br",{}),m.jsx("strong",{children:"每一步转动都有数学解释"}),"——零公式，纯逻辑。"]}),m.jsxs("div",{className:"hero-btn-row",children:[m.jsx(an,{to:"/chapter/intro",className:"hero-btn-primary",children:"从零开始，用数学看懂魔方"}),m.jsx(an,{to:"/chapter/solve",className:"hero-btn-outline",children:"动手推导，体验复原逻辑"})]})]}),m.jsxs("div",{className:"hero-visual",children:[m.jsx("div",{className:"hero-cube-wrap",children:m.jsx(ls,{ref:r,disableStore:!0})}),m.jsx("div",{className:"hero-label",children:e>=0&&m.jsx("div",{className:"hero-label-inner",style:{background:e<Ks.length?"#EFF6FF":"#FEF3C7",borderLeftColor:e<Ks.length?"#3B82F6":"#F59E0B"},children:e<Ks.length?`打乱中… ${Ks[e]}`:((s=pR[e-Ks.length])==null?void 0:s.text)??"…"})})]})]})}),m.jsx("div",{className:"section-sm",style:{textAlign:"center"},children:m.jsxs("div",{className:"container",children:[m.jsx(an,{to:"/chapter/compose",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.9rem 2rem",background:"linear-gradient(135deg, var(--accent), var(--accent-d))",color:"#fff",fontWeight:700,fontSize:"1.05rem",borderRadius:"14px",textDecoration:"none",boxShadow:"0 4px 24px rgba(37,99,235,0.35)",transition:"transform 0.2s, box-shadow 0.2s"},onMouseEnter:o=>{o.currentTarget.style.transform="translateY(-2px)",o.currentTarget.style.boxShadow="0 6px 32px rgba(37,99,235,0.45)"},onMouseLeave:o=>{o.currentTarget.style.transform="",o.currentTarget.style.boxShadow="0 4px 24px rgba(37,99,235,0.35)"},children:"直接上手体验 →"}),m.jsx("p",{style:{color:"var(--ink2)",fontSize:"0.82rem",marginTop:"0.6rem"},children:"先看看矩阵乘法为什么不能交换 —— 3 分钟理解线代和魔方的关联"})]})}),m.jsx("div",{className:"section-sm",children:m.jsx("div",{className:"container",children:m.jsxs("div",{className:"card-grid",children:[m.jsxs("div",{className:"card",children:[m.jsx("span",{className:"card-icon",children:"🧩"}),m.jsx("h3",{children:"零公式复原"}),m.jsx("p",{children:"不靠死记硬背，用逆变换逻辑自主推导每一步操作"})]}),m.jsxs("div",{className:"card",children:[m.jsx("span",{className:"card-icon",children:"🖐️"}),m.jsx("h3",{children:"交互式学习"}),m.jsx("p",{children:"所有概念均可动手操作，拖动魔方直接感受变换效果"})]}),m.jsxs("div",{className:"card",children:[m.jsx("span",{className:"card-icon",children:"📐"}),m.jsx("h3",{children:"线代思维复用"}),m.jsx("p",{children:"把课本知识落地，真正理解矩阵、逆矩阵、交换律"})]})]})})}),m.jsx("div",{className:"section",children:m.jsxs("div",{className:"container",children:[m.jsx("h2",{style:{textAlign:"center",fontSize:"1.3rem",fontWeight:700,marginBottom:"1.8rem"},children:"后续演进路线"}),m.jsx("div",{style:{maxWidth:"600px",margin:"0 auto",borderLeft:"3px solid var(--accent)",paddingLeft:"1.5rem"},children:[{stage:"阶段一（当前 Demo）",desc:"三阶魔方 + 线代概念科普 + 引导复原演示（底面十字→角块→中层→顶面十字）"},{stage:"阶段二",desc:"引入二阶魔方，30 分钟零基础入门（仅需一个公式 R U R' U'）"},{stage:"阶段三",desc:"三阶完整复原教学（七步引导，每步对应线代概念，含分步检测与提示系统）"},{stage:"阶段四",desc:'从线代类比走向群论入门，完成"类比→严谨"的学术过渡'}].map((o,l)=>m.jsxs("div",{style:{position:"relative",marginBottom:l<3?"1.5rem":0,paddingBottom:l<3?"1.5rem":0},children:[m.jsx("div",{style:{position:"absolute",left:"-1.8rem",top:"0.3rem",width:"14px",height:"14px",borderRadius:"50%",background:l===0?"var(--accent)":"var(--rule)",border:l===0?"3px solid var(--accent)":"3px solid var(--rule)"}}),m.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:l===0?"var(--accent)":"var(--ink)",marginBottom:"0.2rem"},children:o.stage}),m.jsx("div",{style:{fontSize:"0.84rem",color:"var(--ink2)"},children:o.desc}),l<3&&m.jsx("div",{style:{marginTop:"0.6rem",marginLeft:"-0.2rem",fontSize:"0.8rem",color:"var(--muted)"},children:"↓"})]},l))})]})}),m.jsx("div",{className:"section-sm",children:m.jsx("div",{className:"container",children:m.jsxs("div",{className:"notice",children:["📐 ",m.jsx("strong",{children:"类比说明"}),"：本站用线性代数做类比科普，帮助理解魔方变换的行为逻辑。 魔方的严谨数学本质是",m.jsx("strong",{children:"置换群（鲁比克群）"}),"。想了解严谨数学？",m.jsx(an,{to:"/archive",children:" 前往数学档案馆 →"})]})})})]})}function aa({data:r,rows:e,label:t}){const s=r??e;return!s||s.length===0?m.jsx("span",{style:{color:"var(--muted)",fontSize:"0.85rem"},children:"[空矩阵]"}):m.jsxs("div",{className:"matrix-wrapper",children:[t&&m.jsx("span",{className:"matrix-label",children:t}),m.jsx("div",{className:"matrix",children:s.map((o,l)=>m.jsx("div",{className:"mrow",children:o.map((u,d)=>m.jsx("span",{children:u},d))},l))})]})}function eo(r,e){const t=[[0,0,0],[0,0,0],[0,0,0]];for(let s=0;s<3;s++)for(let o=0;o<3;o++)for(let l=0;l<3;l++)t[s][o]+=r[s][l]*e[l][o];return t}const Zn={R:[[1,0,0],[0,0,-1],[0,1,0]],R2:[[1,0,0],[0,-1,0],[0,0,-1]],U:[[0,0,1],[0,1,0],[-1,0,0]],U2:[[-1,0,0],[0,1,0],[0,0,-1]],F:[[0,-1,0],[1,0,0],[0,0,1]],I:[[1,0,0],[0,1,0],[0,0,1]]};function sa(r){return[[r[0][0],r[1][0],r[2][0]],[r[0][1],r[1][1],r[2][1]],[r[0][2],r[1][2],r[2][2]]]}function gR(r,e){for(let t=0;t<3;t++)for(let s=0;s<3;s++)if(r[t][s]!==e[t][s])return!1;return!0}const Zs=[{notation:"R",text:"正向 R：右面顺时针"},{notation:"U",text:"正向 U：上面顺时针"},{notation:"F",text:"正向 F：前面顺时针"}],Zl=[{notation:"F'",text:"逆向 F'：撤销 F"},{notation:"U'",text:"逆向 U'：撤销 U"},{notation:"R'",text:"逆向 R'：撤销 R"}];function vR({cubeRef:r}){const[e,t]=z.useState(!1),[s,o]=z.useState(-1),l=Zs.length+Zl.length,u=z.useCallback(()=>{var f;if(e)return;(f=r.current)==null||f.reset(),t(!0),o(-1);let d=500;for(let p=0;p<Zs.length;p++)setTimeout(()=>{var g;(g=r.current)==null||g.executeMove(Zs[p].notation),o(p)},d),d+=800;d+=600;for(let p=0;p<Zl.length;p++)setTimeout(()=>{var g;(g=r.current)==null||g.executeMove(Zl[p].notation),o(Zs.length+p)},d),d+=800;setTimeout(()=>{t(!1),o(l)},d+300)},[e]);return m.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid var(--accent)"},children:[m.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"逆序撤销演示：(R · U · F)⁻¹ = F' · U' · R'"}),m.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["先执行 R→U→F 三步操作，再按",m.jsx("strong",{children:"逆序"})," F'→U'→R' 逐步撤销。 后做的先撤销——这就是第 4 节和第 6 节的核心",m.jsx("strong",{children:"逆序列法则"}),"。"]}),m.jsxs("div",{style:{display:"flex",gap:"0.3rem",marginBottom:"0.6rem",flexWrap:"wrap",alignItems:"center"},children:[m.jsx("span",{style:{fontSize:"0.7rem",color:"var(--muted)",marginRight:"0.2rem"},children:"正向"}),Zs.map((d,f)=>m.jsx("div",{style:{padding:"0.25rem 0.5rem",borderRadius:"4px",fontSize:"0.72rem",background:f===s?"var(--accent-l)":"var(--bg2)",borderLeft:"2px solid "+(f===s?"var(--accent)":"transparent"),transition:"all 0.3s ease"},children:m.jsx("strong",{style:{fontFamily:"monospace"},children:d.notation})},f)),m.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--muted)",margin:"0 0.2rem"},children:"→"}),m.jsx("span",{style:{fontSize:"0.7rem",color:"var(--muted)",marginRight:"0.2rem"},children:"逆向"}),Zl.map((d,f)=>{const p=Zs.length+f;return m.jsx("div",{style:{padding:"0.25rem 0.5rem",borderRadius:"4px",fontSize:"0.72rem",background:p===s?"#FEE2E2":"var(--bg2)",borderLeft:"2px solid "+(p===s?"#DC2626":"transparent"),transition:"all 0.3s ease"},children:m.jsx("strong",{style:{fontFamily:"monospace",color:"#DC2626"},children:d.notation})},f)})]}),s===l&&m.jsxs("div",{style:{padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.8rem",marginBottom:"0.6rem"},children:[m.jsx("span",{style:{fontWeight:700,color:"#16A34A"},children:"魔方回到还原状态！"}),m.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.4rem"},children:"逆序撤销 = 把每一步反过来执行——后做的先撤销。"})]}),m.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:u,disabled:e,children:e?"播放中...":"播放逆序撤销动画"})]})}const Qs=[{notation:"U",text:"① P=U：顶层转一下，把棱块对准右侧"},{notation:"R",text:"② A=R：右面转一下，棱块进入中层"},{notation:"U'",text:"③ P'=U'：顶层转回来，恢复顶层"}];function xR({cubeRef:r}){const[e,t]=z.useState(!1),[s,o]=z.useState(-1),l=z.useCallback(()=>{var d;if(e)return;(d=r.current)==null||d.reset(),t(!0),o(-1);let u=500;for(let f=0;f<Qs.length;f++)setTimeout(()=>{var p;(p=r.current)==null||p.executeMove(Qs[f].notation),o(f)},u),u+=1e3;setTimeout(()=>{t(!1),o(Qs.length)},u+300)},[e]);return m.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid var(--orange)"},children:[m.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"共轭变换演示：P · A · P' = 三明治变换"}),m.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["先执行 P=",m.jsx("strong",{children:"U"})," 把目标棱块移到操作位， 再执行 A=",m.jsx("strong",{children:"R"}),"（核心操作）， 最后执行 P'=",m.jsx("strong",{children:"U'"})," 搬回来。 整体效果：",m.jsx("strong",{children:"只改变目标棱块"}),"，不破坏已复原的部分。"]}),m.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.6rem",background:"var(--bg2)",borderRadius:"4px",padding:"0.3rem 0.5rem"},children:'Tutorial 中层棱块用的就是共轭变换——把棱块搬进搬出，这就是"三明治"的由来。'}),m.jsx("div",{style:{display:"flex",gap:"0.3rem",marginBottom:"0.6rem",flexWrap:"wrap"},children:Qs.map((u,d)=>m.jsxs("div",{style:{padding:"0.3rem 0.6rem",borderRadius:"6px",fontSize:"0.72rem",background:d===s?"#FFF7ED":s===Qs.length?"#DCFCE7":"var(--bg2)",borderLeft:"3px solid "+(d===s?"var(--orange)":"transparent"),transition:"all 0.3s ease"},children:[m.jsx("strong",{style:{fontFamily:"monospace"},children:u.notation}),m.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.3rem"},children:u.text})]},d))}),s===Qs.length&&m.jsxs("div",{style:{padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.8rem",marginBottom:"0.6rem"},children:[m.jsx("span",{style:{fontWeight:700,color:"#16A34A"},children:"注意看"}),m.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.4rem"},children:"棱块成功移到了中层，但顶层和底层的其他块几乎没变。 这就是共轭变换的威力：精准手术式操作，P·A·P'。"})]}),m.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:l,disabled:e,children:e?"播放中...":"播放共轭变换动画"})]})}const Bf={R:"R（右面顺时针）","R'":"R'（右面逆时针）",L:"L（左面顺时针）","L'":"L'（左面逆时针）",U:"U（上面顺时针）","U'":"U'（上面逆时针）",D:"D（底面顺时针）","D'":"D'（底面逆时针）",F:"F（前面顺时针）","F'":"F'（前面逆时针）",B:"B（后面顺时针）","B'":"B'（后面逆时针）"},sv={intro:"#3B82F6",matrix:"#10B981",compose:"#F59E0B",inverse:"#8B5CF6",invariant:"#06B6D4",solve:"#EF4444"},ov={intro:["状态 = 向量","26 块各有位置","还原态 = 基准向量"],matrix:["转动 = 旋转矩阵","R = 绕X轴90°","矩阵不满足交换律"],compose:["R·U ≠ U·R","顺序影响结果","矩阵乘法 ≠ 魔方操作可交换"],inverse:["逆操作 = 逆矩阵","(A·B)⁻¹ = B⁻¹·A⁻¹","后做的先撤销"],invariant:["中心块不动","奇偶性守恒","不可能只换两角"],solve:["逆序撤销（初级）","共轭变换（中级）","交换子（高级）"]},av=["R","R'","U","U'","F","F'"];function lv(r){const e=r[0],t=r.length>1,s=Zn[e];return t?sa(s):s}const jd={intro:{title:"魔方状态 = 向量",subtitle:"把魔方的当前排列看作一个高维状态向量",prev:null,next:"matrix",keyPoints:["一个魔方有 26 个小块（3×3×3 去掉中心），每个块有自己的位置和朝向",'如果把所有块的位置信息排成一列，就得到了一个"状态向量"',"就像线性代数里用向量表示点的空间位置，这里我们用向量表示魔方的整体状态",'还原状态是一个特殊的"基准向量"，所有其他状态都是它的变换结果'],demoHint:"尝试点击右面（R面），用左键（逆时针）和右键（顺时针）分别转动，观察魔方状态变化",analogy:'类比：在平面上，一个点 (x, y) 是一个二维向量。魔方状态可以理解为 26 个方块在三维空间中的排列组合——一个高维"配置向量"。'},matrix:{title:"单次转动 = 变换矩阵",subtitle:"拧一层面就是对状态向量做一次线性变换",prev:"intro",next:"compose",keyPoints:["魔方的每一次转动，本质上是对选定层上所有方块位置和朝向的重新排列","在数学上，我们可以用 3×3 旋转矩阵描述方块坐标的变换——它保持长度和角度不变（注：这是简化类比，魔方操作的严谨本质是置换群，详见数学档案馆）","右面顺时针转（R）就是把右层 8 个方块沿 X 轴旋转 90°","重点：不同的面转动对应不同的变换矩阵，矩阵运算不满足交换律"],matrices:[{label:"R 面转动对应的旋转矩阵（绕X轴+90°）",data:[[1,0,0],[0,0,-1],[0,1,0]]}],demoHint:"将鼠标移到魔方右面上，左键点击=逆时针，右键点击=顺时针",analogy:"类比：在二维平面上，旋转矩阵 [[cosθ,-sinθ],[sinθ,cosθ]] 把向量旋转 θ 度。魔方的面转动也是类似的旋转变换，作用在三维方块上。"},compose:{title:"连续转动 = 矩阵乘法",subtitle:"R×U ≠ U×R — 矩阵乘法不满足交换律",prev:"matrix",next:"inverse",keyPoints:["先做 R 再做 U，整体效果等价于两个矩阵相乘：R × U","反过来先 U 后 R，就是 U × R","亲手计算就会发现：R × U ≠ U × R！矩阵乘法不满足交换律","这就是为什么魔方操作顺序不能随便换 —— 对应的数学原理"],demoHint:"鼠标左键点击面 = 逆时针旋转 | 右键点击面 = 顺时针旋转 | 空白处拖拽 = 旋转视角",analogy:'类比：生活中"先穿袜子再穿鞋"和"先穿鞋再穿袜子"结果是完全不同的。魔方的层转动也是如此——顺序决定最终状态。矩阵乘积 R×U ≠ U×R 就是这句话的数学表达。'},inverse:{title:"反向转动 = 逆矩阵",subtitle:"R×R⁻¹=I，逆序撤销：(R·U)⁻¹=U⁻¹·R⁻¹",prev:"compose",next:"invariant",keyPoints:["如果 R 是顺时针转 90°，那么 R' 就是逆时针转 90° — 在数学上 R × R' = I",'这就是"逆矩阵"的核心：存在一个操作让变换"撤销"','(R·U)⁻¹ = U⁻¹·R⁻¹ — "后做的先撤销、先做的后撤销"',"复原魔方的核心：找到打乱序列的逆序列（逆序），反向操作即可还原"],demoHint:'点击下方"撤销一步"按钮，观察逆操作逐步将魔方还原',analogy:'类比：如果你先穿上衣再穿裤子，脱的时候要先脱裤子再脱上衣——逆序法则就是"后做的先撤销，先做的后撤销"。数学上：(R·U)⁻¹ = U⁻¹·R⁻¹。'},invariant:{title:"守恒约束 = 不变量",subtitle:"某些东西在魔方转动中永远不会改变",prev:"inverse",next:"solve",keyPoints:['在魔方中，某些性质在任意合法操作下都保持不变（称为"不变量"）',"例如：6 个中心块的相对位置永远不变（对 3 阶魔方而言）","更深层的约束：角块排列的奇偶性和棱块排列的奇偶性始终相同——所以不可能只交换两个角块而其他块不变","这类似正交矩阵的行列式满足 det(A)·det(B) = det(AB)：乘积关系恒成立。魔方中角块奇偶性 × 棱块奇偶性恒为偶（+1），所以不可能只交换两个角块而其他块不变"],demoHint:"尝试打乱魔方，观察中心块的位置是否始终不变",analogy:"类比：正交矩阵的行列式满足 det(A)·det(B) = det(AB)，这个乘积关系永远不变。魔方也有不变量：任何合法操作下，角块排列的奇偶性和棱块排列的奇偶性始终相同（两者乘积恒为偶），所以不可能只交换两个角块而其他一切不动。"},solve:{title:"复原方法：抵消法",subtitle:"零公式自主还原的数学框架",prev:"invariant",next:null,keyPoints:["复原魔方的本质：找到一系列操作的逆操作，按逆序执行","核心工具（初级）——逆序撤销：(A·B·C)⁻¹ = C⁻¹·B⁻¹·A⁻¹，后做的先撤销。Tutorial 角块部分在教这个","核心工具（中级）——共轭变换：P·A·P' 先搬到操作层→执行→搬回来。Tutorial 棱块部分在教这个","核心工具（高级）——交换子 [X, Y] = X·Y·X'·Y'：只产生 3-循环（通常影响 3 个角块和 3 个棱块），不破坏已复原部分。后续探索","下面的引导将带你亲手用逆序撤销和共轭变换复原角块和棱块"],matrices:[],demoHint:'点击下方"开始引导"按钮，进入交互式复原引导',analogy:'类比：复原魔方就像解方程组——每一步"消元"只处理一个未知数，不破坏已经求解的变量。'}},_R={intro:1,matrix:2,compose:3,inverse:4,invariant:5,solve:6},Ql={padding:"0.4rem 0.6rem",textAlign:"left",borderBottom:"2px solid var(--rule)",fontWeight:700},Kn={padding:"0.35rem 0.6rem",borderBottom:"1px solid var(--rule)"};function yR(){return m.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[m.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"方向指数编码"}),m.jsx("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"每个小块的位置用 3 个数字编码（H K L），取值为 1、0 或 -1："}),m.jsxs("table",{style:{width:"100%",fontSize:"0.82rem",borderCollapse:"collapse"},children:[m.jsx("thead",{children:m.jsxs("tr",{style:{background:"var(--bg2)"},children:[m.jsx("th",{style:Ql,children:"小块类型"}),m.jsx("th",{style:Ql,children:"方向指数"}),m.jsx("th",{style:Ql,children:"数量"}),m.jsx("th",{style:Ql,children:"说明"})]})}),m.jsxs("tbody",{children:[m.jsxs("tr",{children:[m.jsx("td",{style:Kn,children:"角块"}),m.jsx("td",{style:{...Kn,fontFamily:"monospace"},children:"(1, 1, 1)"}),m.jsx("td",{style:Kn,children:"8"}),m.jsx("td",{style:Kn,children:"3个面都有颜色，位于立方体角落"})]}),m.jsxs("tr",{children:[m.jsx("td",{style:Kn,children:"棱块"}),m.jsx("td",{style:{...Kn,fontFamily:"monospace"},children:"(1, 1, 0)"}),m.jsx("td",{style:Kn,children:"12"}),m.jsx("td",{style:Kn,children:"2个面有颜色，位于棱上"})]}),m.jsxs("tr",{children:[m.jsx("td",{style:Kn,children:"心块"}),m.jsx("td",{style:{...Kn,fontFamily:"monospace"},children:"(1, 0, 0)"}),m.jsx("td",{style:Kn,children:"6"}),m.jsx("td",{style:Kn,children:"1个面有颜色，位于面中心"})]})]})]}),m.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginTop:"0.6rem"},children:"1、0、-1 三个数排列组合共 27 种，去掉 (0,0,0) 中心点 = 26 个方块，一个不多一个不少"})]})}function cv({options:r,explanation:e}){const[t,s]=z.useState(null);return m.jsxs("div",{children:[r.map((o,l)=>m.jsxs("button",{onClick:()=>s(l),style:{display:"block",width:"100%",textAlign:"left",padding:"0.4rem 0.8rem",marginBottom:"0.4rem",borderRadius:"6px",border:"1px solid var(--rule)",background:t===l?o.correct?"#dcfce7":"#fee2e2":"var(--bg)",fontSize:"0.82rem",cursor:"pointer"},children:[o.label,t===l&&m.jsx("span",{style:{marginLeft:"0.5rem"},children:o.correct?"✅":"❌"})]},l)),t!==null&&m.jsxs("p",{style:{marginTop:"0.6rem",padding:"0.6rem",background:r[t].correct?"#dcfce7":"#fef3c7",borderRadius:"6px",fontSize:"0.8rem"},children:[r[t].correct?"🎉 ":"💡 ",e]})]})}function SR({leftCubeRef:r,rightCubeRef:e}){const[t,s]=z.useState("R"),[o,l]=z.useState("U"),[u,d]=z.useState(null),[f,p]=z.useState(null),[g,v]=z.useState(!1),y=z.useCallback(()=>{var U,L;const E=lv(t),T=lv(o),S=eo(E,T),_=eo(T,E);d(S),p(_),v(!0),(U=r.current)==null||U.reset(),(L=e.current)==null||L.reset(),setTimeout(()=>{var b;(b=r.current)==null||b.executeMove(t),setTimeout(()=>{var F;return(F=r.current)==null?void 0:F.executeMove(o)},350),setTimeout(()=>{var F;(F=e.current)==null||F.executeMove(o),setTimeout(()=>{var N;return(N=e.current)==null?void 0:N.executeMove(t)},350)},1200)},500)},[t,o,r,e]),M=u&&f?gR(u,f):null;return m.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[m.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"交换律验证区"}),m.jsx("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"选择两个操作，左右两个魔方同时演示不同顺序 —— 看最终结果是否一致。"}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap",marginBottom:"0.8rem"},children:[m.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600},children:"操作 ①"}),m.jsx("select",{value:t,onChange:E=>{s(E.target.value),v(!1)},style:{padding:"0.3rem 0.5rem",borderRadius:"6px",border:"1px solid var(--rule)",fontSize:"0.85rem",fontFamily:"monospace",background:"#fff"},children:av.map(E=>m.jsx("option",{value:E,children:Bf[E]},E))}),m.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600},children:"操作 ②"}),m.jsx("select",{value:o,onChange:E=>{l(E.target.value),v(!1)},style:{padding:"0.3rem 0.5rem",borderRadius:"6px",border:"1px solid var(--rule)",fontSize:"0.85rem",fontFamily:"monospace",background:"#fff"},children:av.map(E=>m.jsx("option",{value:E,children:Bf[E]},E))})]}),m.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem",marginBottom:"0.8rem"},onClick:y,children:"执行并对比"}),g&&u&&f&&m.jsxs("div",{children:[m.jsxs("div",{style:{marginBottom:"0.8rem",padding:"0.4rem 0.8rem",borderRadius:"6px",fontWeight:700,fontSize:"0.88rem",background:M?"#DCFCE7":"#FEE2E2",color:M?"#16A34A":"#DC2626"},children:["结果：",M?"相同 ✓（极少数情况）":"不同 ✗（绝大多数情况）"]}),m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.8rem"},children:[m.jsxs("div",{style:{textAlign:"center"},children:[m.jsxs("p",{style:{fontSize:"0.72rem",color:"var(--muted)",marginBottom:"0.3rem"},children:["①→②：",t,"×",o]}),m.jsx(aa,{data:u})]}),m.jsxs("div",{style:{textAlign:"center"},children:[m.jsxs("p",{style:{fontSize:"0.72rem",color:"var(--muted)",marginBottom:"0.3rem"},children:["②→①：",o,"×",t]}),m.jsx(aa,{data:f})]})]})]})]})}function MR({cubeRef:r}){const e=["R","U","F","U'"],[t,s]=z.useState(e.length),[o,l]=z.useState(!1),[u,d]=z.useState(!1);z.useEffect(()=>{if(!o&&r.current){const v=setTimeout(()=>{var M;(M=r.current)==null||M.reset();let y=500;for(const E of e)setTimeout(()=>{var T;return(T=r.current)==null?void 0:T.executeMove(E)},y),y+=350;setTimeout(()=>{l(!0),s(e.length)},y)},600);return()=>clearTimeout(v)}},[o]);const f=z.useCallback(()=>{if(t<=0||!r.current)return;const v=t-1,y=e[v],M=y.endsWith("'")?y[0]:y+"'";r.current.undoMove(M);const E=v;s(E),E===0&&d(!0)},[t]),p=z.useCallback(()=>{var v;(v=r.current)==null||v.reset(),l(!1),d(!1)},[]),g=e.slice(0,t);return m.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[m.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"🔄 撤销演示"}),m.jsx("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:'魔方已执行了 4 步操作。点击"撤销一步"，观察逆操作逐步还原。'}),o&&m.jsx("div",{style:{marginBottom:"0.8rem",padding:"0.4rem 0.8rem",borderRadius:"6px",background:u?"#DCFCE7":"var(--bg2)",fontSize:"0.82rem"},children:u?m.jsx("span",{style:{fontWeight:700,color:"#16A34A"},children:"🎉 还原成功！这就是逆矩阵的力量"}):m.jsxs("span",{children:[m.jsx("strong",{children:"剩余操作："}),m.jsx("span",{style:{fontFamily:"monospace",color:"var(--accent)"},children:g.length>0?g.map(v=>Bf[v]||v).join(" · "):"（空）"})]})}),m.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[m.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:f,disabled:!o||t<=0,children:"🔄 撤销一步"}),m.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:p,children:"重置演示"})]})]})}function ER({cubeRef:r}){const[e,t]=z.useState(!1),[s,o]=z.useState(0),[l,u]=z.useState(!1),d=z.useCallback(()=>{u(!0)},[]),f=z.useCallback(()=>{var g;(g=r.current)==null||g.reset(),setTimeout(()=>{var v;return(v=r.current)==null?void 0:v.scramble(12)},300),t(!0),o(v=>v+1)},[]),p=z.useCallback(()=>{var g;(g=r.current)==null||g.reset(),t(!1)},[]);return m.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid var(--accent)"},children:[m.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"不变量观察器"}),m.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:['多次点击"随机打乱"并观察：无论怎么转，',m.jsx("strong",{children:"6 个中心块的相对位置始终不变"}),'—— 红对着橙，蓝对着绿，白对着黄。这就是魔方的"不变量"。']}),e&&s>0&&m.jsxs("div",{style:{marginBottom:"0.8rem",padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.82rem"},children:[m.jsxs("span",{style:{fontWeight:700,color:"#16A34A"},children:["已打乱 ",s," 次"]}),m.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.4rem"},children:"— 红橘相对、蓝绿相对、白黄相对，不变"})]}),m.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[m.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:f,children:"随机打乱"}),m.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:p,children:"重置"}),m.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",color:"#DC2626",borderColor:"#DC2626"},onClick:d,children:"非法状态"})]}),m.jsx("div",{style:{marginTop:"0.8rem",padding:"0.6rem 0.8rem",borderRadius:"6px",background:"#FEF3C7",borderLeft:"3px solid #F59E0B",fontSize:"0.8rem",color:"var(--ink2)"},children:"更深层的不变量：角块排列的奇偶性和棱块排列的奇偶性始终相同。因此不可能只交换两个角块而其他一切不动——这不是技术不够，是数学约束。"}),l&&m.jsxs("div",{style:{marginTop:"0.6rem",padding:"0.6rem 0.8rem",borderRadius:"6px",background:"#FEE2E2",fontSize:"0.82rem",color:"#DC2626"},children:["这是一个",m.jsx("strong",{children:"数学上不可能"}),"的状态！只交换两个角块违反了奇偶性守恒——即使你拆散魔方重新组装也无法通过合法转动达到。"]})]})}function TR({cubeRef:r}){const e=["R","U","R'","U'"],[t,s]=z.useState(0),[o,l]=z.useState(!1),[u,d]=z.useState(!1),f=z.useCallback(()=>{var v;if(o)return;(v=r.current)==null||v.reset(),s(0),d(!1),l(!0);let g=600;for(let y=0;y<e.length;y++)setTimeout(()=>{var M;(M=r.current)==null||M.executeMove(e[y]),s(y+1),y===e.length-1&&(d(!0),l(!1))},g),g+=1e3},[o]),p=z.useCallback(()=>{var g;(g=r.current)==null||g.reset(),s(0),d(!1),l(!1)},[]);return m.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid #8B5CF6"},children:[m.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"交换子演示 [X, Y] = X·Y·X'·Y'"}),m.jsx("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"点击播放交换子观察：R·U·R'·U' 只产生 3-循环（3 个角块和 3 个棱块各自轮换，其余不变）"}),m.jsx("div",{style:{display:"flex",gap:"0.3rem",marginBottom:"0.8rem"},children:e.map((g,v)=>m.jsx("div",{style:{flex:1,padding:"0.3rem",textAlign:"center",borderRadius:"4px",fontSize:"0.78rem",fontFamily:"monospace",background:t>v?"#EDE9FE":t===v&&o?"#FDE68A":"var(--bg2)",fontWeight:t>v?700:400,color:t>v?"#7C3AED":"var(--ink2)"},children:g},v))}),u&&m.jsx("div",{style:{marginBottom:"0.8rem",padding:"0.4rem 0.8rem",borderRadius:"6px",background:"#EDE9FE",fontSize:"0.82rem",color:"#7C3AED",fontWeight:600},children:"交换子完成！只产生了 3-循环（3 角块 + 3 棱块各自轮换）"}),m.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[m.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:f,disabled:o,children:o?"播放中...":"▶ 播放交换子"}),m.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:p,children:"重置"})]})]})}function wR({cubeRef:r}){const[e,t]=z.useState("reverse"),s=[{key:"reverse",label:"逆序撤销",icon:"🔄",color:"#10B981"},{key:"conjugate",label:"共轭变换",icon:"🍚",color:"#F59E0B"},{key:"commutator",label:"交换子",icon:"⚡",color:"#EF4444"}];return m.jsxs("div",{className:"card",style:{padding:"0",overflow:"hidden"},children:[m.jsx("div",{style:{display:"flex",borderBottom:"2px solid var(--rule)"},children:s.map(o=>m.jsxs("button",{onClick:()=>t(o.key),style:{flex:1,padding:"0.5rem 0.3rem",fontSize:"0.78rem",fontWeight:e===o.key?700:400,borderBottom:e===o.key?`3px solid ${o.color}`:"3px solid transparent",background:e===o.key?"#fff":"var(--bg2)",color:e===o.key?o.color:"var(--ink2)",border:"none",cursor:"pointer",transition:"all 0.2s ease"},children:[o.icon," ",o.label]},o.key))}),m.jsxs("div",{style:{padding:"0.8rem 1rem"},children:[e==="reverse"&&m.jsx(vR,{cubeRef:r}),e==="conjugate"&&m.jsx(xR,{cubeRef:r}),e==="commutator"&&m.jsx(TR,{cubeRef:r})]})]})}function RR(){const{id:r}=K_(),e=Pv(),t=r?jd[r]:void 0,s=z.useRef(null),o=z.useRef(null),l=z.useRef(null);if(!t)return m.jsx("div",{className:"section",children:m.jsxs("div",{className:"container",style:{textAlign:"center",paddingTop:"3rem"},children:[m.jsx("h2",{style:{fontSize:"1.4rem",marginBottom:"0.8rem"},children:"章节未找到"}),m.jsxs("p",{style:{color:"var(--ink2)",marginBottom:"1.2rem"},children:["「",r,"」不是有效的章节编号。"]}),m.jsx(an,{to:"/",className:"btn btn-primary",children:"返回首页"})]})});const u=r==="compose"?[{label:"R 转动矩阵",data:Zn.R},{label:"U 转动矩阵",data:Zn.U},{label:"R × U =",data:eo(Zn.R,Zn.U)},{label:"U × R =",data:eo(Zn.U,Zn.R)}]:void 0,d=r==="inverse"?[{label:"R⁻¹ 逆矩阵（逆时针90°）",data:sa(Zn.R)},{label:"验证：R × R⁻¹ = I（单位矩阵）",data:eo(Zn.R,sa(Zn.R))},{label:"逆序法则：(R·U)⁻¹ = U⁻¹·R⁻¹ =",data:eo(sa(Zn.U),sa(Zn.R))}]:void 0,f=r==="compose"?u:r==="inverse"?d:t.matrices;return m.jsx(m.Fragment,{children:m.jsx("div",{className:"section",children:m.jsxs("div",{className:"container",children:[m.jsxs("h2",{style:{fontSize:"1.6rem",fontWeight:700,marginBottom:"0.3rem",borderLeft:`5px solid ${sv[r]}`,paddingLeft:"0.8rem"},children:["第 ",_R[r]," 节  ",t.title]}),m.jsx("p",{style:{fontSize:"0.95rem",color:"var(--ink2)",marginBottom:"1.5rem"},children:t.subtitle}),r==="solve"&&m.jsxs("div",{style:{marginBottom:"1.5rem",padding:"1.2rem 1.5rem",borderRadius:"12px",background:"linear-gradient(135deg, #1E1B4B 0%, #3B0764 40%, #7F1D1D 100%)",color:"#fff"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.8rem",marginBottom:"0.6rem"},children:[m.jsx("span",{style:{fontSize:"1.8rem"},children:"🏆"}),m.jsxs("div",{children:[m.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:800,margin:0,letterSpacing:"0.5px"},children:"终章挑战：把前面学的全部用上"}),m.jsx("p",{style:{fontSize:"0.82rem",margin:"0.2rem 0 0 0",opacity:.85},children:'这一节将串联全部知识点，从"看着公式还原"进化到"理解每一步为什么这样做"'})]})]}),m.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[{label:"初级 · 逆序撤销",color:"#10B981",icon:"🔄"},{label:"中级 · 共轭变换",color:"#F59E0B",icon:"🥪"},{label:"高级 · 交换子",color:"#EF4444",icon:"⚡"}].map(p=>m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",padding:"0.3rem 0.7rem",borderRadius:"20px",background:"rgba(255,255,255,0.15)",fontSize:"0.78rem",fontWeight:600,border:`1px solid ${p.color}40`},children:[m.jsx("span",{children:p.icon}),m.jsx("span",{children:p.label})]},p.label))})]}),m.jsxs("div",{className:"two-col",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[m.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem",color:"var(--accent)"},children:"本节要点"}),m.jsx("ul",{style:{paddingLeft:"1.2rem",fontSize:"0.85rem",color:"var(--ink2)",lineHeight:1.8},children:t.keyPoints.map((p,g)=>m.jsx("li",{style:{marginBottom:"0.4rem"},children:p},g))})]}),r==="intro"&&m.jsx(yR,{}),r==="compose"&&u&&m.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[m.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"真实转动矩阵：魔方面操作对应的数学表达"}),m.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem",marginBottom:"0.6rem"},children:u.map((p,g)=>m.jsxs("div",{style:{textAlign:"center",padding:"0.5rem",background:"var(--bg2)",borderRadius:"8px"},children:[m.jsx("p",{style:{fontSize:"0.72rem",color:"var(--muted)",marginBottom:"0.3rem",fontWeight:600},children:p.label}),m.jsx(aa,{data:p.data})]},g))}),m.jsx("p",{style:{textAlign:"center",fontSize:"0.75rem",color:"var(--orange)",fontWeight:600},children:"⚠️ 两行结果不同！顺序很重要！"}),m.jsx("p",{style:{fontSize:"0.72rem",color:"var(--muted)",marginTop:"0.5rem",textAlign:"center"},children:"上排 = R×U，下排 = U×R —— 矩阵乘法不满足交换律"})]}),r==="inverse"&&d&&m.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[m.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"逆矩阵计算"}),d.map((p,g)=>m.jsxs("div",{style:{marginBottom:g<d.length-1?"1rem":0},children:[m.jsx("p",{style:{fontSize:"0.78rem",color:"var(--muted)",marginBottom:"0.4rem"},children:p.label}),m.jsx(aa,{data:p.data})]},g)),m.jsx("p",{style:{fontSize:"0.78rem",color:"var(--ink2)",marginTop:"0.6rem"},children:"也就是说：先拧R再拧U的撤销方法是——先撤销U（U⁻¹），再撤销R（R⁻¹），顺序反过来！"})]}),r!=="compose"&&r!=="inverse"&&f&&f.length>0&&m.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[m.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"数学演示"}),f.map((p,g)=>m.jsxs("div",{style:{marginBottom:g<f.length-1?"1rem":0},children:[m.jsx("p",{style:{fontSize:"0.78rem",color:"var(--muted)",marginBottom:"0.4rem"},children:p.label}),m.jsx(aa,{data:p.data})]},g)),r==="matrix"&&m.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--ink3)",marginTop:"0.5rem",fontStyle:"italic"},children:["※ 此处用 3×3 旋转矩阵做简化类比，描述单个方块坐标的变换。魔方操作实际上是对 20 个可动方块的整体置换，严谨数学框架见",m.jsx("a",{href:"#/archive",style:{color:"var(--accent)"},children:"数学档案馆"}),"。"]})]}),r==="solve"&&m.jsxs("div",{style:{marginBottom:"1rem"},children:[m.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem",color:"var(--accent)"},children:"复原工具箱：三个层次的数学工具"}),m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0.6rem"},children:[m.jsxs("div",{className:"card",style:{marginBottom:0,borderLeft:"4px solid #10B981",padding:"0.8rem 1rem"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.4rem"},children:[m.jsx("span",{style:{fontSize:"1rem"},children:"🔄"}),m.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"#10B981"},children:"初级"})]}),m.jsx("p",{style:{fontSize:"0.78rem",fontWeight:600,marginBottom:"0.3rem"},children:"逆序撤销"}),m.jsx("p",{style:{fontSize:"0.72rem",color:"var(--ink2)",lineHeight:1.5,marginBottom:0},children:"(A·B·C)⁻¹ = C⁻¹·B⁻¹·A⁻¹"}),m.jsx("p",{style:{fontSize:"0.68rem",color:"var(--muted)",lineHeight:1.4,marginTop:"0.2rem"},children:"后做的先撤销，Tutorial 角块在教这个"})]}),m.jsxs("div",{className:"card",style:{marginBottom:0,borderLeft:"4px solid #F59E0B",padding:"0.8rem 1rem"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.4rem"},children:[m.jsx("span",{style:{fontSize:"1rem"},children:"🥪"}),m.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"#F59E0B"},children:"中级"})]}),m.jsx("p",{style:{fontSize:"0.78rem",fontWeight:600,marginBottom:"0.3rem"},children:"共轭变换"}),m.jsx("p",{style:{fontSize:"0.72rem",color:"var(--ink2)",lineHeight:1.5,marginBottom:0},children:"P·A·P'：搬过去→执行→搬回来"}),m.jsx("p",{style:{fontSize:"0.68rem",color:"var(--muted)",lineHeight:1.4,marginTop:"0.2rem"},children:"精准手术式操作，Tutorial 棱块在教这个"})]}),m.jsxs("div",{className:"card",style:{marginBottom:0,borderLeft:"4px solid #EF4444",padding:"0.8rem 1rem"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.4rem"},children:[m.jsx("span",{style:{fontSize:"1rem"},children:"⚡"}),m.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"#EF4444"},children:"高级"})]}),m.jsx("p",{style:{fontSize:"0.78rem",fontWeight:600,marginBottom:"0.3rem"},children:"交换子"}),m.jsx("p",{style:{fontSize:"0.72rem",color:"var(--ink2)",lineHeight:1.5,marginBottom:0},children:"[X,Y] = X·Y·X'·Y'：3-循环"}),m.jsx("p",{style:{fontSize:"0.68rem",color:"var(--muted)",lineHeight:1.4,marginTop:"0.2rem"},children:"3-循环（3角块+3棱块），不破坏其他，后续探索"})]})]})]}),r==="solve"&&m.jsxs("div",{style:{marginBottom:"1rem",padding:"1rem 1.2rem",borderRadius:"12px",background:"linear-gradient(135deg, #FEF3C7 0%, #FEE2E2 100%)",border:"2px solid #F59E0B"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[m.jsx("span",{style:{fontSize:"1.2rem"},children:"🎯"}),m.jsx("span",{style:{fontSize:"0.9rem",fontWeight:700},children:"准备好了吗？开始引导复原"})]}),m.jsxs("p",{style:{fontSize:"0.78rem",color:"var(--ink2)",marginBottom:"0.8rem",lineHeight:1.5},children:["白色十字已就位，你将亲手用逆序撤销复原角块、用共轭变换复原棱块。",m.jsx("br",{}),"完整路线：底面十字 → 角块 → 中层棱块 → 顶面（后续扩展）"]}),m.jsxs("div",{style:{fontSize:"0.72rem",color:"var(--ink2)",marginBottom:"0.8rem",lineHeight:1.6},children:[m.jsx("div",{style:{marginBottom:"0.15rem"},children:"✅ 白色十字（直觉操作）"}),m.jsx("div",{style:{marginBottom:"0.15rem"},children:"✅ 白色角块 — 逆序列法则（R' D' R D）"}),m.jsx("div",{style:{marginBottom:"0.15rem"},children:"✅ 中层棱块 — 共轭变换（U R U' R' U' F' U F）"}),m.jsx("div",{style:{marginBottom:"0.15rem"},children:"✅ 黄色十字 — 交换子（F R U R' U' F'）"}),m.jsx("div",{style:{color:"var(--muted)"},children:"⬜ 黄面角位 / 归位 / 翻角"})]}),m.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.9rem",width:"100%",padding:"0.7rem",fontWeight:700},onClick:()=>e("/tutorial"),children:"🚀 开始交互式复原引导"})]}),m.jsxs("div",{className:"analogy-note",children:[m.jsx("span",{style:{fontWeight:600,marginRight:"0.3rem"},children:"比喻理解"}),m.jsx("span",{children:t.analogy})]}),r==="compose"&&m.jsxs("div",{className:"card",style:{marginTop:"1rem",borderLeft:"4px solid var(--accent)"},children:[m.jsx("h3",{style:{fontSize:"0.85rem",fontWeight:700,marginBottom:"0.6rem"},children:"💡 自测一下"}),m.jsx("p",{style:{fontSize:"0.82rem",marginBottom:"0.6rem"},children:"如果先执行 R 再执行 F，对应的矩阵乘积是："}),m.jsx(cv,{options:[{label:"A. R × F",correct:!0},{label:"B. F × R",correct:!1},{label:"C. R + F",correct:!1},{label:"D. R × F = F × R",correct:!1}],explanation:"先 R 后 F = R × F。矩阵乘法不满足交换律，R × F ≠ F × R。操作顺序决定矩阵乘积的顺序。"})]}),r==="inverse"&&m.jsxs("div",{className:"card",style:{marginTop:"1rem",borderLeft:"4px solid var(--accent)"},children:[m.jsx("h3",{style:{fontSize:"0.85rem",fontWeight:700,marginBottom:"0.6rem"},children:"💡 自测一下"}),m.jsx("p",{style:{fontSize:"0.82rem",marginBottom:"0.6rem"},children:"已知操作序列为 R → U → F，正确的逆序撤销序列是："}),m.jsx(cv,{options:[{label:"A. R' → U' → F'",correct:!1},{label:"B. F' → U' → R'",correct:!0},{label:"C. R → U → F",correct:!1},{label:"D. F → U → R",correct:!1}],explanation:"逆序法则：(R·U·F)⁻¹ = F⁻¹·U⁻¹·R⁻¹。后做的先撤销——最后一步F最先撤销，第一步R最后撤销。就像先穿鞋后穿袜，脱的时候先脱鞋再脱袜。"})]})]}),m.jsxs("div",{children:[r==="compose"?m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:{fontSize:"0.73rem",color:"var(--ink2)",marginBottom:"0.5rem",display:"flex",gap:"0.8rem",justifyContent:"center",background:"var(--bg2)",borderRadius:"6px",padding:"0.3rem 0.6rem"},children:[m.jsxs("span",{children:["🟥 ",m.jsx("strong",{children:"R"}),"=右面"]}),m.jsxs("span",{children:["🟩 ",m.jsx("strong",{children:"U"}),"=上面"]}),m.jsxs("span",{children:["🟦 ",m.jsx("strong",{children:"F"}),"=前面"]}),m.jsx("span",{style:{color:"var(--muted)"},children:"|"}),m.jsxs("span",{children:["带 ",m.jsx("strong",{children:"'"})," = 逆时针"]})]}),m.jsxs("div",{style:{display:"flex",gap:"0.6rem",marginBottom:"0.6rem"},children:[m.jsxs("div",{style:{flex:1,textAlign:"center",border:"1px solid var(--rule)",borderRadius:"var(--radius)",overflow:"hidden"},children:[m.jsx("div",{style:{height:"22px",lineHeight:"22px",fontSize:"11px",fontWeight:700,color:"#fff",background:"var(--accent)"},children:"先①后②"}),m.jsx("div",{style:{height:"240px"},children:m.jsx(ls,{ref:o,disableStore:!0})})]}),m.jsxs("div",{style:{flex:1,textAlign:"center",border:"1px solid var(--rule)",borderRadius:"var(--radius)",overflow:"hidden"},children:[m.jsx("div",{style:{height:"22px",lineHeight:"22px",fontSize:"11px",fontWeight:700,color:"#fff",background:"var(--orange)"},children:"先②后①"}),m.jsx("div",{style:{height:"240px"},children:m.jsx(ls,{ref:l,disableStore:!0})})]})]})]}):m.jsx(m.Fragment,{children:r==="solve"?m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:{fontSize:"0.73rem",color:"var(--ink2)",marginBottom:"0.5rem",display:"flex",gap:"0.8rem",justifyContent:"center",background:"var(--bg2)",borderRadius:"6px",padding:"0.3rem 0.6rem"},children:[m.jsxs("span",{children:["🟥 ",m.jsx("strong",{children:"R"}),"=右面"]}),m.jsxs("span",{children:["🟩 ",m.jsx("strong",{children:"U"}),"=上面"]}),m.jsxs("span",{children:["🟦 ",m.jsx("strong",{children:"F"}),"=前面"]}),m.jsx("span",{style:{color:"var(--muted)"},children:"|"}),m.jsxs("span",{children:["带 ",m.jsx("strong",{children:"'"})," = 逆时针"]})]}),m.jsx("div",{style:{height:"320px",marginBottom:"0.8rem",borderRadius:"var(--radius)",overflow:"hidden",border:"1px solid var(--rule)"},children:m.jsx(ls,{ref:s},r)}),m.jsx(wR,{cubeRef:s})]}):m.jsxs(m.Fragment,{children:[["intro","matrix","inverse","invariant"].includes(r)&&m.jsxs("div",{style:{fontSize:"0.73rem",color:"var(--ink2)",marginBottom:"0.5rem",display:"flex",gap:"0.8rem",justifyContent:"center",background:"var(--bg2)",borderRadius:"6px",padding:"0.3rem 0.6rem"},children:[m.jsxs("span",{children:["🟥 ",m.jsx("strong",{children:"R"}),"=右面"]}),m.jsxs("span",{children:["🟩 ",m.jsx("strong",{children:"U"}),"=上面"]}),m.jsxs("span",{children:["🟦 ",m.jsx("strong",{children:"F"}),"=前面"]}),m.jsx("span",{style:{color:"var(--muted)"},children:"|"}),m.jsxs("span",{children:["带 ",m.jsx("strong",{children:"\\'"})," = 逆时针"]})]}),m.jsx("div",{style:{height:"420px",marginBottom:"0.6rem",borderRadius:"var(--radius)",overflow:"hidden",border:"1px solid var(--rule)"},children:m.jsx(ls,{ref:s},r)})]})}),r==="compose"&&m.jsx(SR,{leftCubeRef:o,rightCubeRef:l}),r==="compose"&&m.jsxs("div",{style:{marginTop:"0.8rem",padding:"0.6rem 0.8rem",borderRadius:"6px",background:"#EFF6FF",borderLeft:"3px solid #3B82F6",fontSize:"0.8rem",color:"var(--ink2)"},children:[m.jsx("strong",{children:"因果说明："}),"R 和 U 操作的顺序之所以影响结果，是因为旋转矩阵乘法不满足交换律。这在数学上等价于：两个旋转的合成结果取决于执行顺序——先绕 X 轴再绕 Y 轴，与先绕 Y 轴再绕 X 轴，得到不同的最终朝向。"]}),r==="inverse"&&m.jsx(MR,{cubeRef:s}),r==="invariant"&&m.jsx(ER,{cubeRef:s}),m.jsx("div",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.4rem",lineHeight:1.5},children:t.demoHint}),m.jsx("div",{style:{textAlign:"right"},children:m.jsx(an,{to:r==="solve"?"/tutorial":"/playground",state:r==="solve"?void 0:{},style:{fontSize:"0.82rem",color:"var(--accent)",textDecoration:"underline"},children:r==="solve"?"🎯 开始引导：复原第一个角块 →":"打开实操训练（含计时/撤销）→"})})]})]}),ov[r]&&m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--bg2)",borderRadius:"8px",borderLeft:`4px solid ${sv[r]}`},children:[m.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--muted)"},children:"本节要点"}),ov[r].map((p,g)=>m.jsx("span",{style:{fontSize:"0.78rem",color:"var(--ink2)",padding:"0.15rem 0.5rem",borderRadius:"4px",background:"#fff"},children:p},g))]}),m.jsxs("div",{className:"chapter-nav",children:[t.prev?m.jsxs(an,{to:`/chapter/${t.prev}`,className:"btn btn-outline",children:["← 上一节：",jd[t.prev].title.split("=")[0].trim()]}):m.jsx("span",{}),t.next?m.jsxs(an,{to:`/chapter/${t.next}`,className:"btn btn-primary",children:["下一节：",jd[t.next].title.split("=")[0].trim()," →"]}):m.jsx(an,{to:"/playground",state:{fromChapter:"solve"},className:"btn btn-primary",children:"去实操训练 →"})]})]})})})}const Wd={teach:{label:"教学模式",desc:'每步操作实时显示对应旋转矩阵，帮助理解"转动=矩阵变换"'},practice:{label:"练习模式",desc:"记录操作历史并提供提示，适合独立尝试复原"},challenge:{label:"挑战模式",desc:"隐藏一切提示和历史，纯靠记忆和推理复原"}};function AR(){var ie;const r=z.useRef(null),e=Ri(G=>G.history),s=(ie=Pi().state)==null?void 0:ie.fromChapter,[o,l]=z.useState("teach"),[u,d]=z.useState(0),[f,p]=z.useState(!1),g=z.useRef(null),[v,y]=z.useState(!1),[M,E]=z.useState(!1),T=z.useRef(0),[S,_]=z.useState(!0),[U,L]=z.useState(null),b=z.useRef(!1),F=z.useCallback(()=>{f||(p(!0),b.current||(d(0),b.current=!0),g.current=setInterval(()=>{d(G=>G+1)},1e3))},[f]),N=z.useCallback(()=>{p(!1),g.current&&(clearInterval(g.current),g.current=null)},[]),k=()=>{var G;(G=r.current)==null||G.scramble(20),E(!0),y(!1),b.current=!1,F()},Y=()=>{var G;(G=r.current)==null||G.reset(),E(!1),y(!1),N(),d(0),b.current=!1},P=G=>{var B;const J=((B={x:{1:"R",[-1]:"L"},y:{1:"U",[-1]:"D"},z:{1:"F",[-1]:"B"}}[G.axis])==null?void 0:B[G.layer])??G.axis;return G.direction===1?J:J+"'"},C=()=>{var B;const G=Ri.getState();if(G.history.length===0)return;const X=G.history[G.history.length-1],J=P({...X,direction:X.direction*-1});(B=r.current)==null||B.undoMove(J),G.undo()},V=()=>{const G=Ri.getState();if(G.history.length===0){L('魔方已是还原状态，试试先点击"打乱"按钮。');return}const X=G.history[G.history.length-1],J={...X,direction:X.direction*-1},B=P(J);L(`提示：试试执行 ${B}（撤销最后一步操作）。核心思路——后做的先撤销。`)},fe=G=>{const X=Math.floor(G/60),J=G%60;return`${String(X).padStart(2,"0")}:${String(J).padStart(2,"0")}`};z.useEffect(()=>{if(!M||e.length===0)return;if(e.length<=T.current){T.current=e.length;return}T.current=e.length;const{cubies:G}=Ri.getState();Sn(),_0(G)&&(y(!0),N())},[e,M,N]);const W=e.map(G=>{const X={x:"R",y:"U",z:"F"},J=G.direction===1?"":"'";return`${X[G.axis]||G.axis}${J}`}).join(" → ");return m.jsxs(m.Fragment,{children:[s&&m.jsxs("div",{style:{maxWidth:"860px",margin:"0 auto 1rem",padding:"0.6rem 1rem",borderRadius:"8px",background:"#FEF9C3",border:"1px solid #FDE047",fontSize:"0.8rem"},children:["📖 你从",m.jsxs("span",{style:{fontWeight:700},children:["第",s==="solve"?"6":s,"节"]}),"跳转过来，建议先把上方第二章～第五章过一遍：",s==="solve"?" 逆矩阵+抵消法 → ":" ",m.jsx(an,{to:"/chapter/compose",style:{fontWeight:600,textDecoration:"underline",color:"var(--accent)"},children:"第3章：矩阵乘法/交换律"})," | ",m.jsx(an,{to:"/chapter/inverse",style:{fontWeight:600,textDecoration:"underline",color:"var(--accent)"},children:"第4章：逆矩阵/逆序法则"})]}),m.jsx("div",{className:"section",children:m.jsxs("div",{className:"container",children:[m.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"虚拟魔方实操厅"}),m.jsx("div",{style:{display:"flex",gap:"0.4rem",marginBottom:"0.8rem",flexWrap:"wrap"},children:Object.keys(Wd).map(G=>m.jsx("button",{className:o===G?"btn btn-primary":"btn btn-outline",style:{fontSize:"0.8rem",padding:"0.4rem 0.8rem"},onClick:()=>l(G),children:Wd[G].label},G))}),m.jsx("p",{style:{fontSize:"0.82rem",color:"var(--ink2)",marginBottom:"1.2rem"},children:Wd[o].desc}),S&&m.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.6rem",padding:"0.7rem 1rem",marginBottom:"1rem",background:"linear-gradient(135deg, #EFF6FF, #DBEAFE)",borderRadius:"8px",border:"1px solid #BFDBFE"},children:[m.jsx("span",{style:{fontSize:"1.1rem"},children:"👋"}),m.jsxs("div",{style:{flex:1,fontSize:"0.8rem",color:"var(--ink2)"},children:[m.jsx("strong",{children:"欢迎来到实操厅！"}),m.jsxs("div",{style:{marginTop:"0.3rem"},children:["① 点击「打乱」按钮随机打乱魔方 → ② 用",m.jsx("strong",{children:"左键"}),"点击魔方面 = 逆时针，",m.jsx("strong",{children:"右键"})," = 顺时针 → ③ 目标：让每面恢复同色。可随时「撤销」或「重置」。"]})]}),m.jsx("button",{onClick:()=>_(!1),style:{background:"none",border:"none",cursor:"pointer",fontSize:"1rem",color:"var(--muted)",padding:"0"},children:"✕"})]}),m.jsxs("div",{className:"two-col",children:[m.jsx("div",{style:{minHeight:"460px",display:"flex",flexDirection:"column"},children:m.jsx(ls,{ref:r})}),m.jsxs("div",{children:[m.jsxs("div",{style:{display:"flex",gap:"0.4rem",marginBottom:"1rem",flexWrap:"wrap"},children:[m.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem"},onClick:k,children:"打乱"}),m.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem"},onClick:Y,children:"重置"}),m.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem",opacity:e.length===0?.4:1},onClick:C,disabled:e.length===0,children:"撤销"}),m.jsxs("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem"},onClick:f?N:F,children:[f?fe(u):"计时"," ",f?"||":""]}),o==="practice"&&m.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem"},onClick:V,children:"💡 提示"})]}),U&&m.jsx("div",{style:{padding:"0.5rem 0.8rem",marginBottom:"0.8rem",background:"#FEF3C7",borderRadius:"6px",fontSize:"0.8rem",color:"var(--ink2)",borderLeft:"3px solid #F59E0B"},children:U}),o!=="challenge"&&m.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[m.jsxs("h3",{style:{fontSize:"0.85rem",marginBottom:"0.5rem"},children:["操作历史 (",e.length," 步)"]}),e.length===0?m.jsx("p",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:'左键点击面 = 逆时针，右键点击面 = 顺时针，或点击"打乱"'}):m.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.78rem",color:"var(--accent)",maxHeight:"150px",overflow:"auto",lineHeight:1.6,wordBreak:"break-all"},children:W})]}),o==="teach"&&e.length>0&&m.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid #8B5CF6"},children:[m.jsx("h3",{style:{fontSize:"0.85rem",marginBottom:"0.5rem"},children:"矩阵解读"}),(()=>{var se;const G=e[e.length-1],J=((se={x:{1:"R",[-1]:"L"},y:{1:"U",[-1]:"D"},z:{1:"F",[-1]:"B"}}[G.axis])==null?void 0:se[G.layer])??G.axis.toUpperCase(),B=G.direction===1?J:J+"'",ce={R:[[1,0,0],[0,0,-1],[0,1,0]],L:[[1,0,0],[0,0,1],[0,-1,0]],U:[[0,0,-1],[0,1,0],[1,0,0]],D:[[0,0,1],[0,1,0],[-1,0,0]],F:[[0,1,0],[1,0,0],[0,0,1]],B:[[0,-1,0],[-1,0,0],[0,0,1]]}[J]||[[1,0,0],[0,1,0],[0,0,1]],O=B.includes("'");return m.jsxs("div",{children:[m.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.5rem"},children:["最后一步 ",m.jsx("strong",{style:{fontFamily:"monospace"},children:B}),O?"（逆时针）= 矩阵的逆":"（顺时针）"]}),m.jsxs("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",background:"#F5F3FF",padding:"0.5rem 0.8rem",borderRadius:"6px",marginBottom:"0.5rem"},children:[m.jsxs("div",{children:["[",ce[0].map(Ce=>(O?Ce===-1?" 1":Ce===1?"-1":" 0":(Ce<0?" ":"  ")+Ce).padStart(3)).join(","),"]"]}),m.jsxs("div",{children:["[",ce[1].map(Ce=>(O?Ce===-1?" 1":Ce===1?"-1":" 0":(Ce<0?" ":"  ")+Ce).padStart(3)).join(","),"]"]}),m.jsxs("div",{children:["[",ce[2].map(Ce=>(O?Ce===-1?" 1":Ce===1?"-1":" 0":(Ce<0?" ":"  ")+Ce).padStart(3)).join(","),"]"]})]}),m.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)"},children:O?"逆时针 = 顺时针矩阵的转置（正交矩阵性质：R⁻¹ = Rᵀ）":"这个矩阵将方块绕对应轴旋转 90°"})]})})()]}),o==="teach"&&m.jsx("div",{className:"analogy-note",children:m.jsx("span",{children:'教学模式：每步操作都会显示对应的旋转矩阵。配合第2节的内容理解"转动=矩阵变换"。'})}),o==="practice"&&m.jsx("div",{className:"analogy-note",children:m.jsx("span",{children:"练习模式：记录你的操作并提供💡提示。尝试独立复原，卡住时再求助。"})}),o==="challenge"&&m.jsx("div",{className:"analogy-note",style:{borderLeftColor:"var(--orange)"},children:m.jsx("span",{children:"挑战模式：不依赖操作历史，尝试凭记忆推导还原步骤"})})]})]}),m.jsxs("div",{style:{marginTop:"2rem",padding:"1rem 1.2rem",background:"var(--bg2)",borderRadius:"var(--radius)",fontSize:"0.83rem",color:"var(--ink2)",borderLeft:"3px solid var(--accent)"},children:[m.jsx("strong",{children:"交互说明："}),"鼠标左键点击面 = 逆时针旋转  |  鼠标右键点击面 = 顺时针旋转  |  空白处拖拽 = 旋转视角  |  滚轮 = 缩放"]}),v&&m.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.45)"},children:m.jsxs("div",{style:{background:"#fff",borderRadius:"16px",padding:"2rem 2.5rem",textAlign:"center",maxWidth:"380px",width:"90%",boxShadow:"0 16px 48px rgba(0,0,0,0.2)"},children:[m.jsx("div",{style:{fontSize:"3rem",marginBottom:"0.5rem"},children:"🎉"}),m.jsx("h3",{style:{fontSize:"1.3rem",fontWeight:700,marginBottom:"0.4rem"},children:"还原成功！"}),m.jsxs("p",{style:{fontSize:"0.9rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["你使用了  ",e.length,"  步操作将魔方还原！",e.length<=22&&m.jsx("span",{style:{display:"block",marginTop:"0.3rem",fontWeight:600,color:"var(--accent)"},children:"🌟 步数 ≤ 22，非常高效！"}),e.length>22&&e.length<=30&&m.jsx("span",{style:{display:"block",marginTop:"0.3rem",fontWeight:600,color:"var(--green)"},children:"👍 不错！继续优化步数"})]}),m.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--muted)",marginBottom:"1.2rem"},children:["用时 ",fe(u)]}),m.jsx("button",{className:"btn btn-primary",onClick:()=>y(!1),style:{width:"100%"},children:"继续挑战"})]})})]})})]})}const CR=[{id:"boundary",title:"类比与真实的边界",body:m.jsxs(m.Fragment,{children:[m.jsx("p",{children:"本站用线性代数做类比科普，帮助理解魔方变换的行为逻辑。但需要明确以下几点："}),m.jsxs("ul",{style:{paddingLeft:"1.2rem",marginTop:"0.5rem"},children:[m.jsxs("li",{children:["✅ 魔方操作确实对应矩阵运算中的一些性质：",m.jsx("strong",{children:"封闭性、结合律、单位元、逆元、非交换性"})]}),m.jsxs("li",{children:["❌ 魔方不是线性空间：",m.jsx("strong",{children:"没有向量加法、没有数乘运算"})]}),m.jsxs("li",{children:["🎯 魔方的严谨数学本质是",m.jsx("strong",{children:"置换群（鲁比克群）"}),"，其元素是贴纸位置的置换，而非欧几里得空间中的旋转"]})]}),m.jsx("p",{style:{marginTop:"0.5rem"},children:'本站的"向量""矩阵"等概念均用于类比解释，与严谨线性代数中的定义有所不同。为方便初学者建立直觉，我们用熟悉的线代语言搭建理解桥梁。'})]})},{id:"permutation",title:"置换群基础",body:m.jsxs(m.Fragment,{children:[m.jsxs("p",{children:["魔方的每个状态是一个",m.jsx("strong",{children:"置换"}),"——把每个贴纸从原位置移到了新位置。"]}),m.jsxs("ul",{style:{paddingLeft:"1.2rem",marginTop:"0.5rem"},children:[m.jsxs("li",{children:[m.jsx("strong",{children:"置换的循环："}),"如果把若干方块依次换位并形成一个闭合的圈，就叫做循环。比如三个角块轮换一圈，就是一个3-循环"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"为什么不能单独交换两个块："}),'因为每次转动总是偶数次两两交换，就像你不可能通过"每步走两格"来只移动一格']}),m.jsxs("li",{children:[m.jsx("strong",{children:"角块朝向的约束："}),"所有角块的扭转角度之和必须是360°的倍数——这也是一个隐藏的规则"]})]})]})},{id:"deep",title:"深度数学结论",body:m.jsx(m.Fragment,{children:m.jsxs("ul",{style:{paddingLeft:"1.2rem"},children:[m.jsxs("li",{children:[m.jsx("strong",{children:"总状态数"}),"：魔方共有 43,252,003,274,489,856,000 种可能状态（约4.3×10¹⁹）。这个数字通过群论推导得出，不是枚举出来的。"]}),m.jsxs("li",{style:{marginTop:"0.5rem"},children:[m.jsx("strong",{children:"上帝之数 = 20"}),"：任何打乱的魔方都可以在",m.jsx("strong",{children:"20步以内"}),"复原。2010年通过计算机穷举搜索证实。"]}),m.jsxs("li",{style:{marginTop:"0.5rem"},children:[m.jsx("strong",{children:"子群与共轭类"}),"：魔方群具有丰富的子群结构，CFOP等速拧方法本质上就是在不同子群之间切换。"]})]})})},{id:"resources",title:"拓展资源",body:m.jsx(m.Fragment,{children:m.jsxs("ul",{style:{paddingLeft:"1.2rem"},children:[m.jsxs("li",{children:["📖 ",m.jsx("em",{children:"群论入门"})," — J.S. Milne（免费在线教材，英文）"]}),m.jsxs("li",{children:["🎥 B站搜索 ",m.jsx("em",{children:'"魔方 置换群"'})," — 多位UP主有通俗讲解"]}),m.jsxs("li",{children:["📊 ",m.jsx("em",{children:"魔方数学"}),` — Wikipedia "Rubik's Cube group"`]}),m.jsxs("li",{children:["🎬 YouTube ",m.jsx("em",{children:`"How to Solve a Rubik's Cube with Group Theory"`})," — 适合初学者的群论入门视频"]})]})})}];function bR(){const[r,e]=z.useState(null);return m.jsx(m.Fragment,{children:m.jsx("div",{className:"section",children:m.jsxs("div",{className:"container",style:{maxWidth:"860px",margin:"0 auto"},children:[m.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1.5rem"},children:"📚 进阶数学档案馆"}),m.jsx("div",{className:"accordion",children:CR.map(t=>m.jsxs("div",{children:[m.jsxs("button",{className:`accordion-header ${r===t.id?"open":""}`,onClick:()=>e(r===t.id?null:t.id),children:[t.title,m.jsx("span",{className:`accordion-arrow ${r===t.id?"open":""}`,children:"▼"})]}),r===t.id&&m.jsx("div",{className:"accordion-body",children:t.body})]},t.id))}),m.jsx("div",{style:{marginTop:"2rem"},children:m.jsx(an,{to:"/",className:"btn btn-outline",children:"← 返回首页"})})]})})})}const uv=[{axis:"y",layer:-1,direction:-1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:-1,direction:1},{axis:"x",layer:1,direction:1}],Jl=[{axis:"x",layer:1,direction:-1},{axis:"y",layer:-1,direction:-1},{axis:"x",layer:1,direction:1},{axis:"y",layer:-1,direction:1}],PR=[{notation:"R'",text:"打开右面空间，准备接收角块"},{notation:"D'",text:"移动底层，将目标位置对准角块"},{notation:"R",text:"角块进入正确位置"},{notation:"D",text:"恢复底层，角块归位完成"}],dv=[{axis:"z",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"z",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1}],ec=[{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"z",layer:1,direction:-1},{axis:"y",layer:1,direction:1},{axis:"z",layer:1,direction:1}],LR=[{notation:"U",text:"将顶层目标棱块移到右前准备位置"},{notation:"R",text:"打开右侧面，为棱块创造中层入口"},{notation:"U'",text:"沿顶层将棱块推入右侧开口"},{notation:"R'",text:"关闭右侧面，棱块被锁定到中层"},{notation:"U'",text:"恢复顶层位置"},{notation:"F'",text:"打开前面，为朝向调整做准备"},{notation:"U",text:"调整顶层，棱块朝向修正"},{notation:"F",text:"关闭前面，棱块完全归位"}],fv=[{axis:"z",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:-1}],hv=[{axis:"z",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"z",layer:1,direction:-1}],tc=[{notation:"F",text:'F：前面顺时针 — 交换子开启，"推"到前面'},{notation:"R",text:"R：右面顺时针 — 核心操作，翻转顶层棱块朝向"},{notation:"U",text:"U：上面顺时针 — 移动目标棱块位置"},{notation:"R'",text:"R'：右面逆时针 — 开始搬回来"},{notation:"U'",text:"U'：上面逆时针 — 继续搬回来"},{notation:"F'",text:"F'：交换子完成 — 观察顶层黄色棱块朝向"}];function Cr(r){var s;const t=((s={x:{1:"R","-1":"L"},y:{1:"U","-1":"D"},z:{1:"F","-1":"B"}}[r.axis])==null?void 0:s[String(r.layer)])??r.axis.toUpperCase();return r.direction===1?t:t+"'"}function DR(r){return r==="cross"?{step:1,total:4,name:"白色十字"}:r==="corner-intro"||r==="corner-guided"||r==="corner-practice"||r==="corner-done"?{step:2,total:4,name:"白色角块"}:r==="edge-intro"||r==="edge-guided"||r==="edge-practice"?{step:3,total:4,name:"中层棱块"}:r==="topcross-intro"||r==="topcross-guided"||r==="topcross-practice"?{step:4,total:4,name:"黄色十字"}:{step:4,total:4,name:"全部完成"}}function UR(r){return r==="corner-intro"||r==="corner-guided"||r==="corner-practice"||r==="corner-done"}function NR(r){return r==="edge-intro"||r==="edge-guided"||r==="edge-practice"}function IR(r){return r==="topcross-intro"||r==="topcross-guided"||r==="topcross-practice"}function FR(){const r=z.useRef(null),[e,t]=z.useState("cross"),[s,o]=z.useState(-1),[l,u]=z.useState(!1),[d,f]=z.useState(!1),[p,g]=z.useState(!1),[v,y]=z.useState([]),[M,E]=z.useState(!1),[T,S]=z.useState(0),_=Ri(F=>F.history),U=Ri(F=>F.cubies),L=Ri(F=>F.reset);z.useEffect(()=>{if(l||!r.current)return;const F=setTimeout(()=>{var N;(N=r.current)==null||N.reset(),u(!0)},600);return()=>clearTimeout(F)},[l]),z.useEffect(()=>{let F=null;if(UR(e)&&e!=="corner-done"?F=uv:NR(e)?F=dv:IR(e)&&(F=fv),!F||!r.current)return;L(),r.current.reset(),y([]),f(!1),E(!1),o(-1);let N=400;for(const k of F)setTimeout(()=>{var Y;return(Y=r.current)==null?void 0:Y.executeMove(Cr(k))},N),N+=350;e==="corner-guided"||e==="edge-guided"||e==="topcross-guided"?setTimeout(()=>o(0),N+300):(e==="corner-practice"||e==="edge-practice"||e==="topcross-practice")&&setTimeout(()=>E(!0),N)},[e,L,T]),z.useEffect(()=>{let F=null;if(e==="corner-guided"?F=Jl:e==="edge-guided"?F=ec:e==="topcross-guided"&&(F=hv),!F||s<0||s>=F.length)return;const N=setTimeout(()=>{var k;(k=r.current)==null||k.executeMove(Cr(F[s]))},1e3);return()=>clearTimeout(N)},[s,e]),z.useEffect(()=>{if(!M||d||e!=="corner-practice"&&e!=="edge-practice"&&e!=="topcross-practice")return;const N=(e==="corner-practice"?uv:e==="edge-practice"?dv:fv).length,k=_.slice(N);y(k.map(Cr)),k.length>0&&_0(U)&&(f(!0),g(!0),setTimeout(()=>t(e==="corner-practice"?"corner-done":e==="edge-practice"?"topcross-intro":"done"),600))},[U,_,e,d,M]);const b=DR(e);return m.jsxs("div",{style:{background:"var(--bg)",paddingBottom:"2rem"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.6rem 1.5rem",borderBottom:"1px solid var(--rule)",background:"#fff"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[m.jsx(an,{to:"/chapter/solve",style:{fontSize:"0.85rem",color:"var(--ink2)",textDecoration:"none"},children:"← 返回第6节"}),m.jsx("span",{style:{fontWeight:700},children:"复原引导"})]}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[[1,2,3,4].map(F=>m.jsx("div",{title:["白色十字","白色角块","中层棱块","黄色十字"][F-1],style:{width:"10px",height:"10px",borderRadius:"50%",background:F<=b.step?"var(--accent)":"var(--rule)",transition:"background 0.3s ease"}},F)),m.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--muted)",marginLeft:"0.3rem"},children:["步骤 ",b.step,"/",b.total]})]})]}),m.jsxs("div",{style:{display:"flex",gap:"1.5rem",padding:"1.5rem",maxWidth:"1100px",margin:"0 auto",alignItems:"flex-start"},children:[m.jsx("div",{style:{flex:1,minWidth:0},children:m.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[m.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,marginBottom:"0.3rem"},children:b.name}),e!=="cross"&&e!=="done"&&m.jsx("div",{style:{display:"flex",gap:"0.4rem",marginBottom:"1rem"},children:[{k:"intro",label:"介绍"},{k:"guided",label:"引导"},{k:"practice",label:"实操"},{k:"done",label:"完成"}].map(F=>{const N=e===`corner-${F.k}`||e===`edge-${F.k}`||e===`topcross-${F.k}`;return m.jsx("span",{style:{padding:"0.15rem 0.6rem",borderRadius:"999px",fontSize:"0.7rem",fontWeight:N?700:400,background:N?"var(--accent-l)":"var(--bg2)",color:N?"var(--accent-d)":"var(--muted)"},children:F.label},F.k)})}),e==="cross"&&m.jsxs(m.Fragment,{children:[m.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["复原魔方的第一步是完成",m.jsx("strong",{children:"白色十字"}),"—— 让白色中心块四周的四个白色棱块全部归位。"]}),m.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["这一步",m.jsx("strong",{children:"不需要记公式"}),"——你只要通过直觉把白色棱块逐个移到正确位置即可。 右侧魔方已处在白色十字完成的状态。"]}),m.jsxs("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontSize:"0.8rem",color:"var(--accent-d)"},children:[m.jsx("strong",{children:"概念对应"}),'：十字等同于在三维空间中确定了坐标轴的"基准方向"—— 白色=底、黄色=顶、红色=前、橙色=后、蓝色=右、绿色=左。 这六个方向构成了魔方的',m.jsx("strong",{children:"方向指数坐标系"}),"（第1节内容）。"]}),m.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>t("corner-intro"),children:"下一步：复原角块 →"})]}),e==="corner-intro"&&m.jsxs(m.Fragment,{children:[m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"白色十字已完成。接下来只剩最后一个角块需要归位。"}),m.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["我们将使用下面的操作——它是",m.jsx("strong",{children:"逆序列法则"}),"的直接应用："]}),m.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontFamily:"monospace",fontSize:"1rem",fontWeight:700,textAlign:"center",color:"var(--accent-d)"},children:Jl.map(Cr).join(" → ")}),m.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"1rem"},children:["注意看初始状态和最终状态——这四步操作打乱时用了什么，解决时就按",m.jsx("strong",{children:"相反顺序"}),"逆向执行， 这就是逆序列法则：(A·B·C·D)⁻¹ = D⁻¹·C⁻¹·B⁻¹·A⁻¹，后做的先撤销。"]}),m.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>t("corner-guided"),children:"开始引导 →"})]}),e==="corner-guided"&&m.jsxs(m.Fragment,{children:[m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"1rem"},children:"魔方已回到初始状态。点击「下一步」观看每一步的效果："}),PR.map((F,N)=>m.jsxs("div",{style:{padding:"0.5rem 0.8rem",marginBottom:"0.5rem",borderRadius:"6px",background:N===s?"var(--accent-l)":"var(--bg2)",borderLeft:"3px solid "+(N===s?"var(--accent)":"transparent")},children:[m.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600},children:F.notation}),m.jsx("span",{style:{fontSize:"0.78rem",color:"var(--ink2)",marginLeft:"0.6rem"},children:F.text})]},N)),s>=Jl.length?m.jsxs("div",{style:{marginTop:"1rem"},children:[m.jsx("p",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--green)",marginBottom:"0.8rem"},children:"✅ 角块已归位！接下来你亲手试试。"}),m.jsx("button",{className:"btn btn-primary",onClick:()=>t("corner-practice"),children:"🎯 进入实操"})]}):m.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[m.jsx("button",{className:"btn btn-outline",onClick:()=>o(F=>F+1),children:s===-1?"开始演示":"下一步 →"}),m.jsx("button",{className:"btn btn-outline",onClick:()=>t("corner-practice"),children:"跳过引导"})]})]}),e==="corner-practice"&&m.jsxs(m.Fragment,{children:[m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"魔方已回到初始状态。请在右侧魔方上执行以下操作："}),m.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontFamily:"monospace",fontSize:"1rem",fontWeight:700,textAlign:"center",color:"var(--accent-d)"},children:Jl.map(Cr).join(" → ")}),m.jsxs("div",{style:{marginBottom:"1rem"},children:[m.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.4rem"},children:"你已执行："}),m.jsx("div",{style:{padding:"0.4rem 0.8rem",borderRadius:"6px",background:"var(--bg2)",fontFamily:"monospace",fontSize:"0.85rem",color:v.length>0?"var(--accent)":"var(--muted)"},children:v.length>0?v.join(" → "):"等待操作…"})]}),m.jsx("button",{className:"btn btn-outline",style:{width:"100%"},onClick:()=>S(F=>F+1),children:"重置重试"})]}),e==="corner-done"&&m.jsxs(m.Fragment,{children:[p&&m.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem"},children:[m.jsx("span",{style:{fontSize:"3rem"},children:"⭐"}),m.jsx("p",{style:{fontSize:"1rem",fontWeight:700,color:"var(--accent)",marginTop:"0.5rem"},children:"角块归位完成！"})]}),m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"你刚用逆序列法则（R' D' R D）成功归位了一个角块。 这正好对应第4节的核心思想——把打乱步骤反过来执行，后做的先撤销。"}),m.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"1rem"},children:["接下来难度升级：复原中层棱块，这次会用到",m.jsx("strong",{children:"组合操作"}),"—— 前后两段各使用一次共轭变换（P·A·P'）：先腾出空间，再塞入棱块。"]}),m.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>t("edge-intro"),children:"下一步：复原中层棱块 →"})]}),e==="edge-intro"&&m.jsxs(m.Fragment,{children:[m.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["白色面和底层角块已全部完成。 现在要处理",m.jsx("strong",{children:"中层棱块"}),"——位于魔方中层（第二层）的四个棱块。"]}),m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"右侧魔方已打乱：白色底完好，但有一个中层棱块被移到了顶层。 我们用下面的公式把它送回正确位置："}),m.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontFamily:"monospace",fontSize:"1rem",fontWeight:700,textAlign:"center",color:"var(--accent-d)"},children:ec.map(Cr).join(" → ")}),m.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"1rem"},children:["这是一个",m.jsx("strong",{children:"组合操作"}),`：前后两段各使用一次共轭变换（P·A·P'）。 前半段 U R U' R' 把棱块从顶层移到右层（P=U, A=R, P'=U'·R'）， 后半段 U' F' U F 把棱块从右层推入中层（P=U', A=F', P'=U·F）。 结构是"打开→放入→关好"。`]}),m.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>t("edge-guided"),children:"开始引导 →"})]}),e==="edge-guided"&&m.jsxs(m.Fragment,{children:[m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.6rem"},children:"点击「下一步」观看每一步的效果："}),LR.map((F,N)=>m.jsxs("div",{style:{padding:"0.4rem 0.6rem",marginBottom:"0.35rem",borderRadius:"6px",background:N===s?"var(--accent-l)":"var(--bg2)",borderLeft:"3px solid "+(N===s?"var(--accent)":"transparent")},children:[m.jsx("span",{style:{fontSize:"0.82rem",fontWeight:600},children:F.notation}),m.jsx("span",{style:{fontSize:"0.75rem",color:"var(--ink2)",marginLeft:"0.5rem"},children:F.text})]},N)),s>=ec.length?m.jsxs("div",{style:{marginTop:"1rem"},children:[m.jsx("p",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--green)",marginBottom:"0.8rem"},children:"✅ 棱块已归位！现在你亲手试试。"}),m.jsx("button",{className:"btn btn-primary",onClick:()=>t("edge-practice"),children:"🎯 进入实操"})]}):m.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[m.jsx("button",{className:"btn btn-outline",onClick:()=>o(F=>F+1),children:s===-1?"开始演示":"下一步 →"}),m.jsx("button",{className:"btn btn-outline",onClick:()=>t("edge-practice"),children:"跳过引导"})]})]}),e==="edge-practice"&&m.jsxs(m.Fragment,{children:[m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"魔方已回到初始状态。请在右侧魔方上执行以下操作："}),m.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontFamily:"monospace",fontSize:"0.9rem",fontWeight:700,textAlign:"center",color:"var(--accent-d)"},children:ec.map(Cr).join(" → ")}),m.jsxs("div",{style:{marginBottom:"1rem"},children:[m.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.4rem"},children:"你已执行："}),m.jsx("div",{style:{padding:"0.4rem 0.8rem",borderRadius:"6px",background:"var(--bg2)",fontFamily:"monospace",fontSize:"0.82rem",color:v.length>0?"var(--accent)":"var(--muted)"},children:v.length>0?v.join(" → "):"等待操作…"})]}),m.jsx("button",{className:"btn btn-outline",style:{width:"100%"},onClick:()=>S(F=>F+1),children:"重置重试"})]}),e==="topcross-intro"&&m.jsxs(m.Fragment,{children:[m.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:['现在底层和中层已完成，只剩黄色面（顶层）。 黄色十字是一次"翻转"操作的核心：用',m.jsx("strong",{children:"交换子 F R U R' U' F'"})," 翻转顶层棱块朝向。"]}),m.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"#FEF3C7",borderRadius:"8px",fontFamily:"monospace",fontSize:"0.85rem",textAlign:"center",color:"#B45309"},children:"F R U R' U' F'"}),m.jsxs("ul",{style:{fontSize:"0.82rem",color:"var(--ink)",paddingLeft:"1.2rem",marginBottom:"1rem"},children:[m.jsxs("li",{style:{marginBottom:"0.3rem"},children:["这是",m.jsx("strong",{children:"交换子"}),"的经典结构：F·R·U·R'·U'·F'"]}),m.jsx("li",{style:{marginBottom:"0.3rem"},children:"前半段 F·R·U·R'·U' = 打开操作空间"}),m.jsx("li",{style:{marginBottom:"0.3rem"},children:"后半段 F' = 关闭回来，只改变顶层棱块朝向"}),m.jsxs("li",{children:["交换子的核心思想：",m.jsx("strong",{children:"打开→操作→关上"})]})]}),m.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[m.jsx("button",{className:"btn btn-primary",onClick:()=>t("topcross-guided"),children:"看引导演示"}),m.jsx("button",{className:"btn btn-outline",onClick:()=>t("topcross-practice"),children:"直接实操"})]})]}),e==="topcross-guided"&&m.jsxs(m.Fragment,{children:[m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"观察黄色十字交换子的逐步动画："}),m.jsx("div",{style:{display:"flex",gap:"0.25rem",marginBottom:"0.8rem",flexWrap:"wrap"},children:tc.map((F,N)=>m.jsx("div",{style:{padding:"0.2rem 0.5rem",borderRadius:"6px",fontSize:"0.72rem",background:N===s?"#FEF3C7":s>N?"#DCFCE7":"var(--bg2)",borderLeft:"3px solid "+(N===s?"#F59E0B":"transparent"),transition:"all 0.3s ease"},children:m.jsx("strong",{style:{fontFamily:"monospace"},children:F.notation})},N))}),tc.map((F,N)=>m.jsxs("p",{style:{fontSize:"0.78rem",color:N===s?"var(--ink)":"var(--muted)",fontWeight:N===s?600:400,marginBottom:N<tc.length-1?"0.2rem":"0.8rem"},children:[N+1,". ",F.text]},N)),s>=tc.length-1&&m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:{padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.82rem",marginBottom:"0.6rem"},children:[m.jsx("span",{style:{fontWeight:700,color:"#16A34A"},children:"交换子完成"}),m.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.4rem"},children:"黄色十字出现。这就是 F R U R' U' F' 的威力。"})]}),m.jsx("button",{className:"btn btn-primary",onClick:()=>t("topcross-practice"),children:"亲自试试 →"})]})]}),e==="topcross-practice"&&m.jsxs(m.Fragment,{children:[m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"魔方已回到初始状态。请执行以下交换子："}),m.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"#FEF3C7",borderRadius:"8px",fontFamily:"monospace",fontSize:"0.9rem",fontWeight:700,textAlign:"center",color:"#B45309"},children:hv.map(Cr).join(" → ")}),m.jsxs("div",{style:{marginBottom:"1rem"},children:[m.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.4rem"},children:"你已执行："}),m.jsx("div",{style:{padding:"0.4rem 0.8rem",borderRadius:"6px",background:"var(--bg2)",fontFamily:"monospace",fontSize:"0.82rem",color:v.length>0?"var(--accent)":"var(--muted)"},children:v.length>0?v.join(" → "):"等待操作…"})]}),m.jsx("button",{className:"btn btn-outline",style:{width:"100%"},onClick:()=>S(F=>F+1),children:"重置重试"})]}),e==="done"&&m.jsxs(m.Fragment,{children:[p&&m.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem"},children:[m.jsx("span",{style:{fontSize:"3rem"},children:"🎉"}),m.jsx("p",{style:{fontSize:"1.2rem",fontWeight:700,color:"var(--accent)",marginTop:"0.5rem"},children:"全部完成！"})]}),m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.5rem"},children:"你成功完成了四步骤：白色十字 → 白色角块（逆序列法则） → 中层棱块（共轭变换） → 黄色十字（交换子）。"}),m.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"1rem"},children:[m.jsx("strong",{children:"你已经亲身体验了线代三大核心工具的实战应用"}),"， 剩余步骤（黄色顶面角块归位、顶层棱角归位）将在后续版本中使用更多群论工具继续指导。"]}),m.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[m.jsx(an,{to:"/chapter/solve",className:"btn btn-outline",style:{flex:1,textAlign:"center",textDecoration:"none"},children:"回到第6节"}),m.jsx(an,{to:"/playground",className:"btn btn-primary",style:{flex:1,textAlign:"center",textDecoration:"none"},children:"巩固练习 →"})]})]})]})}),m.jsx("div",{style:{width:"420px",flexShrink:0},children:m.jsx("div",{style:{height:"420px",borderRadius:"var(--radius)",overflow:"hidden",border:"1px solid var(--rule)"},children:m.jsx(ls,{ref:r})})})]})]})}function OR(){return m.jsx(fy,{children:m.jsxs(es,{element:m.jsx(Yy,{}),children:[m.jsx(es,{path:"/",element:m.jsx(mR,{})}),m.jsx(es,{path:"/chapter/:id",element:m.jsx(RR,{})}),m.jsx(es,{path:"/playground",element:m.jsx(AR,{})}),m.jsx(es,{path:"/archive",element:m.jsx(bR,{})}),m.jsx(es,{path:"/tutorial",element:m.jsx(FR,{})})]})})}c_.createRoot(document.getElementById("app")).render(m.jsx(z.StrictMode,{children:m.jsx(Fy,{children:m.jsx(OR,{})})}));
