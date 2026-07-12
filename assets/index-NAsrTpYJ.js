(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function h_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var rd={exports:{}},$o={},sd={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function p_(){if(Um)return mt;Um=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(k,se,Ue){this.props=k,this.context=se,this.refs=T,this.updater=Ue||E}S.prototype.isReactComponent={},S.prototype.setState=function(k,se){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,se,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function _(){}_.prototype=S.prototype;function U(k,se,Ue){this.props=k,this.context=se,this.refs=T,this.updater=Ue||E}var D=U.prototype=new _;D.constructor=U,M(D,S.prototype),D.isPureReactComponent=!0;var P=Array.isArray,Y=Object.prototype.hasOwnProperty,B={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function I(k,se,Ue){var Q,he={},Me=null,_e=null;if(se!=null)for(Q in se.ref!==void 0&&(_e=se.ref),se.key!==void 0&&(Me=""+se.key),se)Y.call(se,Q)&&!b.hasOwnProperty(Q)&&(he[Q]=se[Q]);var Ae=arguments.length-2;if(Ae===1)he.children=Ue;else if(1<Ae){for(var Fe=Array(Ae),Ze=0;Ze<Ae;Ze++)Fe[Ze]=arguments[Ze+2];he.children=Fe}if(k&&k.defaultProps)for(Q in Ae=k.defaultProps,Ae)he[Q]===void 0&&(he[Q]=Ae[Q]);return{$$typeof:r,type:k,key:Me,ref:_e,props:he,_owner:B.current}}function L(k,se){return{$$typeof:r,type:k.type,key:se,ref:k.ref,props:k.props,_owner:k._owner}}function C(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function V(k){var se={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ue){return se[Ue]})}var de=/\/+/g;function G(k,se){return typeof k=="object"&&k!==null&&k.key!=null?V(""+k.key):se.toString(36)}function re(k,se,Ue,Q,he){var Me=typeof k;(Me==="undefined"||Me==="boolean")&&(k=null);var _e=!1;if(k===null)_e=!0;else switch(Me){case"string":case"number":_e=!0;break;case"object":switch(k.$$typeof){case r:case e:_e=!0}}if(_e)return _e=k,he=he(_e),k=Q===""?"."+G(_e,0):Q,P(he)?(Ue="",k!=null&&(Ue=k.replace(de,"$&/")+"/"),re(he,se,Ue,"",function(Ze){return Ze})):he!=null&&(C(he)&&(he=L(he,Ue+(!he.key||_e&&_e.key===he.key?"":(""+he.key).replace(de,"$&/")+"/")+k)),se.push(he)),1;if(_e=0,Q=Q===""?".":Q+":",P(k))for(var Ae=0;Ae<k.length;Ae++){Me=k[Ae];var Fe=Q+G(Me,Ae);_e+=re(Me,se,Ue,Fe,he)}else if(Fe=y(k),typeof Fe=="function")for(k=Fe.call(k),Ae=0;!(Me=k.next()).done;)Me=Me.value,Fe=Q+G(Me,Ae++),_e+=re(Me,se,Ue,Fe,he);else if(Me==="object")throw se=String(k),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return _e}function te(k,se,Ue){if(k==null)return k;var Q=[],he=0;return re(k,Q,"","",function(Me){return se.call(Ue,Me,he++)}),Q}function z(k){if(k._status===-1){var se=k._result;se=se(),se.then(function(Ue){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ue)},function(Ue){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ue)}),k._status===-1&&(k._status=0,k._result=se)}if(k._status===1)return k._result.default;throw k._result}var Z={current:null},O={transition:null},ae={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:O,ReactCurrentOwner:B};function ue(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:te,forEach:function(k,se,Ue){te(k,function(){se.apply(this,arguments)},Ue)},count:function(k){var se=0;return te(k,function(){se++}),se},toArray:function(k){return te(k,function(se){return se})||[]},only:function(k){if(!C(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},mt.Component=S,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=U,mt.StrictMode=s,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,mt.act=ue,mt.cloneElement=function(k,se,Ue){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Q=M({},k.props),he=k.key,Me=k.ref,_e=k._owner;if(se!=null){if(se.ref!==void 0&&(Me=se.ref,_e=B.current),se.key!==void 0&&(he=""+se.key),k.type&&k.type.defaultProps)var Ae=k.type.defaultProps;for(Fe in se)Y.call(se,Fe)&&!b.hasOwnProperty(Fe)&&(Q[Fe]=se[Fe]===void 0&&Ae!==void 0?Ae[Fe]:se[Fe])}var Fe=arguments.length-2;if(Fe===1)Q.children=Ue;else if(1<Fe){Ae=Array(Fe);for(var Ze=0;Ze<Fe;Ze++)Ae[Ze]=arguments[Ze+2];Q.children=Ae}return{$$typeof:r,type:k.type,key:he,ref:Me,props:Q,_owner:_e}},mt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},mt.createElement=I,mt.createFactory=function(k){var se=I.bind(null,k);return se.type=k,se},mt.createRef=function(){return{current:null}},mt.forwardRef=function(k){return{$$typeof:d,render:k}},mt.isValidElement=C,mt.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:z}},mt.memo=function(k,se){return{$$typeof:m,type:k,compare:se===void 0?null:se}},mt.startTransition=function(k){var se=O.transition;O.transition={};try{k()}finally{O.transition=se}},mt.unstable_act=ue,mt.useCallback=function(k,se){return Z.current.useCallback(k,se)},mt.useContext=function(k){return Z.current.useContext(k)},mt.useDebugValue=function(){},mt.useDeferredValue=function(k){return Z.current.useDeferredValue(k)},mt.useEffect=function(k,se){return Z.current.useEffect(k,se)},mt.useId=function(){return Z.current.useId()},mt.useImperativeHandle=function(k,se,Ue){return Z.current.useImperativeHandle(k,se,Ue)},mt.useInsertionEffect=function(k,se){return Z.current.useInsertionEffect(k,se)},mt.useLayoutEffect=function(k,se){return Z.current.useLayoutEffect(k,se)},mt.useMemo=function(k,se){return Z.current.useMemo(k,se)},mt.useReducer=function(k,se,Ue){return Z.current.useReducer(k,se,Ue)},mt.useRef=function(k){return Z.current.useRef(k)},mt.useState=function(k){return Z.current.useState(k)},mt.useSyncExternalStore=function(k,se,Ue){return Z.current.useSyncExternalStore(k,se,Ue)},mt.useTransition=function(){return Z.current.useTransition()},mt.version="18.3.1",mt}var Nm;function Gf(){return Nm||(Nm=1,sd.exports=p_()),sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function m_(){if(Im)return $o;Im=1;var r=Gf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,m){var g,v={},y=null,E=null;m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(E=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:d,key:y,ref:E,props:v,_owner:o.current}}return $o.Fragment=t,$o.jsx=u,$o.jsxs=u,$o}var Fm;function g_(){return Fm||(Fm=1,rd.exports=m_()),rd.exports}var f=g_(),H=Gf();const El=h_(H);var Ml={},od={exports:{}},bn={},ad={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function v_(){return km||(km=1,(function(r){function e(O,ae){var ue=O.length;O.push(ae);e:for(;0<ue;){var k=ue-1>>>1,se=O[k];if(0<o(se,ae))O[k]=ae,O[ue]=se,ue=k;else break e}}function t(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var ae=O[0],ue=O.pop();if(ue!==ae){O[0]=ue;e:for(var k=0,se=O.length,Ue=se>>>1;k<Ue;){var Q=2*(k+1)-1,he=O[Q],Me=Q+1,_e=O[Me];if(0>o(he,ue))Me<se&&0>o(_e,he)?(O[k]=_e,O[Me]=ue,k=Me):(O[k]=he,O[Q]=ue,k=Q);else if(Me<se&&0>o(_e,ue))O[k]=_e,O[Me]=ue,k=Me;else break e}}return ae}function o(O,ae){var ue=O.sortIndex-ae.sortIndex;return ue!==0?ue:O.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var h=[],m=[],g=1,v=null,y=3,E=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(O){for(var ae=t(m);ae!==null;){if(ae.callback===null)s(m);else if(ae.startTime<=O)s(m),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(m)}}function P(O){if(T=!1,D(O),!M)if(t(h)!==null)M=!0,z(Y);else{var ae=t(m);ae!==null&&Z(P,ae.startTime-O)}}function Y(O,ae){M=!1,T&&(T=!1,_(I),I=-1),E=!0;var ue=y;try{for(D(ae),v=t(h);v!==null&&(!(v.expirationTime>ae)||O&&!V());){var k=v.callback;if(typeof k=="function"){v.callback=null,y=v.priorityLevel;var se=k(v.expirationTime<=ae);ae=r.unstable_now(),typeof se=="function"?v.callback=se:v===t(h)&&s(h),D(ae)}else s(h);v=t(h)}if(v!==null)var Ue=!0;else{var Q=t(m);Q!==null&&Z(P,Q.startTime-ae),Ue=!1}return Ue}finally{v=null,y=ue,E=!1}}var B=!1,b=null,I=-1,L=5,C=-1;function V(){return!(r.unstable_now()-C<L)}function de(){if(b!==null){var O=r.unstable_now();C=O;var ae=!0;try{ae=b(!0,O)}finally{ae?G():(B=!1,b=null)}}else B=!1}var G;if(typeof U=="function")G=function(){U(de)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,te=re.port2;re.port1.onmessage=de,G=function(){te.postMessage(null)}}else G=function(){S(de,0)};function z(O){b=O,B||(B=!0,G())}function Z(O,ae){I=S(function(){O(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_continueExecution=function(){M||E||(M=!0,z(Y))},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(O){switch(y){case 1:case 2:case 3:var ae=3;break;default:ae=y}var ue=y;y=ae;try{return O()}finally{y=ue}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(O,ae){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ue=y;y=O;try{return ae()}finally{y=ue}},r.unstable_scheduleCallback=function(O,ae,ue){var k=r.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?k+ue:k):ue=k,O){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ue+se,O={id:g++,callback:ae,priorityLevel:O,startTime:ue,expirationTime:se,sortIndex:-1},ue>k?(O.sortIndex=ue,e(m,O),t(h)===null&&O===t(m)&&(T?(_(I),I=-1):T=!0,Z(P,ue-k))):(O.sortIndex=se,e(h,O),M||E||(M=!0,z(Y))),O},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(O){var ae=y;return function(){var ue=y;y=ae;try{return O.apply(this,arguments)}finally{y=ue}}}})(ld)),ld}var Om;function x_(){return Om||(Om=1,ad.exports=v_()),ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function __(){if(Bm)return bn;Bm=1;var r=Gf(),e=x_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function y(n){return h.call(v,n)?!0:h.call(g,n)?!1:m.test(n)?v[n]=!0:(g[n]=!0,!1)}function E(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||E(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,c,p,x,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,U);S[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,U);S[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,U);S[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,c){var p=S.hasOwnProperty(i)?S[i]:null;(p!==null?p.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,p,c)&&(a=null),c||p===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,c=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),B=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),O=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,k;function se(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Ue=!1;function Q(n,i){if(!n||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var p=oe.stack.split(`
`),x=c.stack.split(`
`),w=p.length-1,F=x.length-1;1<=w&&0<=F&&p[w]!==x[F];)F--;for(;1<=w&&0<=F;w--,F--)if(p[w]!==x[F]){if(w!==1||F!==1)do if(w--,F--,0>F||p[w]!==x[F]){var j=`
`+p[w].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=w&&0<=F);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function he(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case b:return"Fragment";case B:return"Portal";case L:return"Profiler";case I:return"StrictMode";case G:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case de:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case te:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case z:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(w){c=""+w,x.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Tt(n){n._valueTracker||(n._valueTracker=Ze(n))}function ht(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function At(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function $(n,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Qt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Te(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function Pe(n,i){Te(n,i);var a=Ae(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ot(n,i.type,a):i.hasOwnProperty("defaultValue")&&ot(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ke(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ot(n,i,a){(i!=="number"||At(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ve=Array.isArray;function N(n,i,a,c){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function R(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ee(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ve(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ae(a)}}function me(n,i){var a=Ae(i.value),c=Ae(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,Be=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ct(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){He.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function tt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function nt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=tt(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,p):n[a]=p}}var Ge=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(n,i){if(i){if(Ge[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function at(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,fe=null,ge=null;function Ie(n){if(n=Uo(n)){if(typeof Le!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ka(i),Le(n.stateNode,n.type,i))}}function Ne(n){fe?ge?ge.push(n):ge=[n]:fe=n}function lt(){if(fe){var n=fe,i=ge;if(ge=fe=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function Ut(n,i){return n(i)}function Xt(){}var _t=!1;function En(n,i,a){if(_t)return n(i,a);_t=!0;try{return Ut(n,i,a)}finally{_t=!1,(fe!==null||ge!==null)&&(Xt(),lt())}}function gn(n,i){var a=n.stateNode;if(a===null)return null;var c=ka(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var hs=!1;if(d)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){hs=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{hs=!1}function Di(n,i,a,c,p,x,w,F,j){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(ye){this.onError(ye)}}var Ui=!1,Nr=null,Ir=!1,ir=null,va={onError:function(n){Ui=!0,Nr=n}};function ps(n,i,a,c,p,x,w,F,j){Ui=!1,Nr=null,Di.apply(va,arguments)}function xa(n,i,a,c,p,x,w,F,j){if(ps.apply(this,arguments),Ui){if(Ui){var oe=Nr;Ui=!1,Nr=null}else throw Error(t(198));Ir||(Ir=!0,ir=oe)}}function yi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function _a(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ya(n){if(yi(n)!==n)throw Error(t(188))}function Rc(n){var i=n.alternate;if(!i){if(i=yi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var p=a.return;if(p===null)break;var x=p.alternate;if(x===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===a)return ya(p),n;if(x===c)return ya(p),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=x;else{for(var w=!1,F=p.child;F;){if(F===a){w=!0,a=p,c=x;break}if(F===c){w=!0,c=p,a=x;break}F=F.sibling}if(!w){for(F=x.child;F;){if(F===a){w=!0,a=x,c=p;break}if(F===c){w=!0,c=x,a=p;break}F=F.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function A(n){return n=Rc(n),n!==null?q(n):null}function q(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=q(n);if(i!==null)return i;n=n.sibling}return null}var le=e.unstable_scheduleCallback,ce=e.unstable_cancelCallback,K=e.unstable_shouldYield,Ce=e.unstable_requestPaint,we=e.unstable_now,$e=e.unstable_getCurrentPriorityLevel,Xe=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,st=e.unstable_NormalPriority,qe=e.unstable_LowPriority,vt=e.unstable_IdlePriority,wt=null,gt=null;function ln(n){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(wt,n,void 0,(n.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Et,Qe=Math.log,ni=Math.LN2;function Et(n){return n>>>=0,n===0?32:31-(Qe(n)/ni|0)|0}var cn=64,ii=4194304;function Yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Si(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,p=n.suspendedLanes,x=n.pingedLanes,w=a&268435455;if(w!==0){var F=w&~p;F!==0?c=Yt(F):(x&=w,x!==0&&(c=Yt(x)))}else w=a&~p,w!==0?c=Yt(w):x!==0&&(c=Yt(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&p)===0&&(p=c&-c,x=i&-i,p>=x||p===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ut(i),p=1<<a,c|=n[a],i&=~p;return c}function Lt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var w=31-ut(x),F=1<<w,j=p[w];j===-1?((F&a)===0||(F&c)!==0)&&(p[w]=Lt(F,i)):j<=i&&(n.expiredLanes|=F),x&=~F}}function Ni(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function vn(){var n=cn;return cn<<=1,(cn&4194240)===0&&(cn=64),n}function jn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Mn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ut(i),n[i]=a}function Sa(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-ut(a),x=1<<p;i[p]=0,c[p]=-1,n[p]=-1,a&=~x}}function Cc(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ut(a),p=1<<c;p&i|n[c]&i&&(n[c]|=i),a&=~p}}var bt=0;function dh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var fh,Ac,hh,ph,mh,bc=!1,Ea=[],rr=null,sr=null,or=null,vo=new Map,xo=new Map,ar=[],Iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gh(n,i){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(i.pointerId)}}function _o(n,i,a,c,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[p]},i!==null&&(i=Uo(i),i!==null&&Ac(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Fv(n,i,a,c,p){switch(i){case"focusin":return rr=_o(rr,n,i,a,c,p),!0;case"dragenter":return sr=_o(sr,n,i,a,c,p),!0;case"mouseover":return or=_o(or,n,i,a,c,p),!0;case"pointerover":var x=p.pointerId;return vo.set(x,_o(vo.get(x)||null,n,i,a,c,p)),!0;case"gotpointercapture":return x=p.pointerId,xo.set(x,_o(xo.get(x)||null,n,i,a,c,p)),!0}return!1}function vh(n){var i=Fr(n.target);if(i!==null){var a=yi(i);if(a!==null){if(i=a.tag,i===13){if(i=_a(a),i!==null){n.blockedOn=i,mh(n.priority,function(){hh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ma(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Lc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ct=c,a.target.dispatchEvent(c),Ct=null}else return i=Uo(a),i!==null&&Ac(i),n.blockedOn=a,!1;i.shift()}return!0}function xh(n,i,a){Ma(n)&&a.delete(i)}function kv(){bc=!1,rr!==null&&Ma(rr)&&(rr=null),sr!==null&&Ma(sr)&&(sr=null),or!==null&&Ma(or)&&(or=null),vo.forEach(xh),xo.forEach(xh)}function yo(n,i){n.blockedOn===i&&(n.blockedOn=null,bc||(bc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kv)))}function So(n){function i(p){return yo(p,n)}if(0<Ea.length){yo(Ea[0],n);for(var a=1;a<Ea.length;a++){var c=Ea[a];c.blockedOn===n&&(c.blockedOn=null)}}for(rr!==null&&yo(rr,n),sr!==null&&yo(sr,n),or!==null&&yo(or,n),vo.forEach(i),xo.forEach(i),a=0;a<ar.length;a++)c=ar[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)vh(a),a.blockedOn===null&&ar.shift()}var ms=P.ReactCurrentBatchConfig,Ta=!0;function Ov(n,i,a,c){var p=bt,x=ms.transition;ms.transition=null;try{bt=1,Pc(n,i,a,c)}finally{bt=p,ms.transition=x}}function Bv(n,i,a,c){var p=bt,x=ms.transition;ms.transition=null;try{bt=4,Pc(n,i,a,c)}finally{bt=p,ms.transition=x}}function Pc(n,i,a,c){if(Ta){var p=Lc(n,i,a,c);if(p===null)$c(n,i,c,wa,a),gh(n,c);else if(Fv(p,n,i,a,c))c.stopPropagation();else if(gh(n,c),i&4&&-1<Iv.indexOf(n)){for(;p!==null;){var x=Uo(p);if(x!==null&&fh(x),x=Lc(n,i,a,c),x===null&&$c(n,i,c,wa,a),x===p)break;p=x}p!==null&&c.stopPropagation()}else $c(n,i,c,null,a)}}var wa=null;function Lc(n,i,a,c){if(wa=null,n=X(c),n=Fr(n),n!==null)if(i=yi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=_a(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wa=n,null}function _h(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($e()){case Xe:return 1;case it:return 4;case st:case qe:return 16;case vt:return 536870912;default:return 16}default:return 16}}var lr=null,Dc=null,Ra=null;function yh(){if(Ra)return Ra;var n,i=Dc,a=i.length,c,p="value"in lr?lr.value:lr.textContent,x=p.length;for(n=0;n<a&&i[n]===p[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===p[x-c];c++);return Ra=p.slice(n,1<c?1-c:void 0)}function Ca(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Aa(){return!0}function Sh(){return!1}function In(n){function i(a,c,p,x,w){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=x,this.target=w,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(x):x[F]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Aa:Sh,this.isPropagationStopped=Sh,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uc=In(gs),Eo=ue({},gs,{view:0,detail:0}),zv=In(Eo),Nc,Ic,Mo,ba=ue({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Mo&&(Mo&&n.type==="mousemove"?(Nc=n.screenX-Mo.screenX,Ic=n.screenY-Mo.screenY):Ic=Nc=0,Mo=n),Nc)},movementY:function(n){return"movementY"in n?n.movementY:Ic}}),Eh=In(ba),Hv=ue({},ba,{dataTransfer:0}),jv=In(Hv),Vv=ue({},Eo,{relatedTarget:0}),Fc=In(Vv),Gv=ue({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=In(Gv),Xv=ue({},gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Yv=In(Xv),$v=ue({},gs,{data:0}),Mh=In($v),qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Zv[n])?!!i[n]:!1}function kc(){return Qv}var Jv=ue({},Eo,{key:function(n){if(n.key){var i=qv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ca(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Kv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(n){return n.type==="keypress"?Ca(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ca(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ex=In(Jv),tx=ue({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Th=In(tx),nx=ue({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),ix=In(nx),rx=ue({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=In(rx),ox=ue({},ba,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=In(ox),lx=[9,13,27,32],Oc=d&&"CompositionEvent"in window,To=null;d&&"documentMode"in document&&(To=document.documentMode);var cx=d&&"TextEvent"in window&&!To,wh=d&&(!Oc||To&&8<To&&11>=To),Rh=" ",Ch=!1;function Ah(n,i){switch(n){case"keyup":return lx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var vs=!1;function ux(n,i){switch(n){case"compositionend":return bh(i);case"keypress":return i.which!==32?null:(Ch=!0,Rh);case"textInput":return n=i.data,n===Rh&&Ch?null:n;default:return null}}function dx(n,i){if(vs)return n==="compositionend"||!Oc&&Ah(n,i)?(n=yh(),Ra=Dc=lr=null,vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return wh&&i.locale!=="ko"?null:i.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!fx[n.type]:i==="textarea"}function Lh(n,i,a,c){Ne(c),i=Na(i,"onChange"),0<i.length&&(a=new Uc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var wo=null,Ro=null;function hx(n){qh(n,0)}function Pa(n){var i=Es(n);if(ht(i))return n}function px(n,i){if(n==="change")return i}var Dh=!1;if(d){var Bc;if(d){var zc="oninput"in document;if(!zc){var Uh=document.createElement("div");Uh.setAttribute("oninput","return;"),zc=typeof Uh.oninput=="function"}Bc=zc}else Bc=!1;Dh=Bc&&(!document.documentMode||9<document.documentMode)}function Nh(){wo&&(wo.detachEvent("onpropertychange",Ih),Ro=wo=null)}function Ih(n){if(n.propertyName==="value"&&Pa(Ro)){var i=[];Lh(i,Ro,n,X(n)),En(hx,i)}}function mx(n,i,a){n==="focusin"?(Nh(),wo=i,Ro=a,wo.attachEvent("onpropertychange",Ih)):n==="focusout"&&Nh()}function gx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pa(Ro)}function vx(n,i){if(n==="click")return Pa(i)}function xx(n,i){if(n==="input"||n==="change")return Pa(i)}function _x(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ri=typeof Object.is=="function"?Object.is:_x;function Co(n,i){if(ri(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!h.call(i,p)||!ri(n[p],i[p]))return!1}return!0}function Fh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kh(n,i){var a=Fh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fh(a)}}function Oh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Oh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Bh(){for(var n=window,i=At();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=At(n.document)}return i}function Hc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function yx(n){var i=Bh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Oh(a.ownerDocument.documentElement,a)){if(c!==null&&Hc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,x=Math.min(c.start,p);c=c.end===void 0?x:Math.min(c.end,p),!n.extend&&x>c&&(p=c,c=x,x=p),p=kh(a,x);var w=kh(a,c);p&&w&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Sx=d&&"documentMode"in document&&11>=document.documentMode,xs=null,jc=null,Ao=null,Vc=!1;function zh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vc||xs==null||xs!==At(c)||(c=xs,"selectionStart"in c&&Hc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ao&&Co(Ao,c)||(Ao=c,c=Na(jc,"onSelect"),0<c.length&&(i=new Uc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=xs)))}function La(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},Gc={},Hh={};d&&(Hh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Da(n){if(Gc[n])return Gc[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Hh)return Gc[n]=i[a];return n}var jh=Da("animationend"),Vh=Da("animationiteration"),Gh=Da("animationstart"),Wh=Da("transitionend"),Xh=new Map,Yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(n,i){Xh.set(n,i),l(i,[n])}for(var Wc=0;Wc<Yh.length;Wc++){var Xc=Yh[Wc],Ex=Xc.toLowerCase(),Mx=Xc[0].toUpperCase()+Xc.slice(1);cr(Ex,"on"+Mx)}cr(jh,"onAnimationEnd"),cr(Vh,"onAnimationIteration"),cr(Gh,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(Wh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function $h(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,xa(c,i,void 0,n),n.currentTarget=null}function qh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],p=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var w=c.length-1;0<=w;w--){var F=c[w],j=F.instance,oe=F.currentTarget;if(F=F.listener,j!==x&&p.isPropagationStopped())break e;$h(p,F,oe),x=j}else for(w=0;w<c.length;w++){if(F=c[w],j=F.instance,oe=F.currentTarget,F=F.listener,j!==x&&p.isPropagationStopped())break e;$h(p,F,oe),x=j}}}if(Ir)throw n=ir,Ir=!1,ir=null,n}function Nt(n,i){var a=i[eu];a===void 0&&(a=i[eu]=new Set);var c=n+"__bubble";a.has(c)||(Kh(i,n,2,!1),a.add(c))}function Yc(n,i,a){var c=0;i&&(c|=4),Kh(a,n,c,i)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Po(n){if(!n[Ua]){n[Ua]=!0,s.forEach(function(a){a!=="selectionchange"&&(Tx.has(a)||Yc(a,!1,n),Yc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ua]||(i[Ua]=!0,Yc("selectionchange",!1,i))}}function Kh(n,i,a,c){switch(_h(i)){case 1:var p=Ov;break;case 4:p=Bv;break;default:p=Pc}a=p.bind(null,i,a,n),p=void 0,!hs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function $c(n,i,a,c,p){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var F=c.stateNode.containerInfo;if(F===p||F.nodeType===8&&F.parentNode===p)break;if(w===4)for(w=c.return;w!==null;){var j=w.tag;if((j===3||j===4)&&(j=w.stateNode.containerInfo,j===p||j.nodeType===8&&j.parentNode===p))return;w=w.return}for(;F!==null;){if(w=Fr(F),w===null)return;if(j=w.tag,j===5||j===6){c=x=w;continue e}F=F.parentNode}}c=c.return}En(function(){var oe=x,ye=X(a),Se=[];e:{var xe=Xh.get(n);if(xe!==void 0){var ze=Uc,We=n;switch(n){case"keypress":if(Ca(a)===0)break e;case"keydown":case"keyup":ze=ex;break;case"focusin":We="focus",ze=Fc;break;case"focusout":We="blur",ze=Fc;break;case"beforeblur":case"afterblur":ze=Fc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=ix;break;case jh:case Vh:case Gh:ze=Wv;break;case Wh:ze=sx;break;case"scroll":ze=zv;break;case"wheel":ze=ax;break;case"copy":case"cut":case"paste":ze=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Th}var Ye=(i&4)!==0,Vt=!Ye&&n==="scroll",J=Ye?xe!==null?xe+"Capture":null:xe;Ye=[];for(var W=oe,ne;W!==null;){ne=W;var Re=ne.stateNode;if(ne.tag===5&&Re!==null&&(ne=Re,J!==null&&(Re=gn(W,J),Re!=null&&Ye.push(Lo(W,Re,ne)))),Vt)break;W=W.return}0<Ye.length&&(xe=new ze(xe,We,null,a,ye),Se.push({event:xe,listeners:Ye}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",xe&&a!==Ct&&(We=a.relatedTarget||a.fromElement)&&(Fr(We)||We[Ii]))break e;if((ze||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,ze?(We=a.relatedTarget||a.toElement,ze=oe,We=We?Fr(We):null,We!==null&&(Vt=yi(We),We!==Vt||We.tag!==5&&We.tag!==6)&&(We=null)):(ze=null,We=oe),ze!==We)){if(Ye=Eh,Re="onMouseLeave",J="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Th,Re="onPointerLeave",J="onPointerEnter",W="pointer"),Vt=ze==null?xe:Es(ze),ne=We==null?xe:Es(We),xe=new Ye(Re,W+"leave",ze,a,ye),xe.target=Vt,xe.relatedTarget=ne,Re=null,Fr(ye)===oe&&(Ye=new Ye(J,W+"enter",We,a,ye),Ye.target=ne,Ye.relatedTarget=Vt,Re=Ye),Vt=Re,ze&&We)t:{for(Ye=ze,J=We,W=0,ne=Ye;ne;ne=ys(ne))W++;for(ne=0,Re=J;Re;Re=ys(Re))ne++;for(;0<W-ne;)Ye=ys(Ye),W--;for(;0<ne-W;)J=ys(J),ne--;for(;W--;){if(Ye===J||J!==null&&Ye===J.alternate)break t;Ye=ys(Ye),J=ys(J)}Ye=null}else Ye=null;ze!==null&&Zh(Se,xe,ze,Ye,!1),We!==null&&Vt!==null&&Zh(Se,Vt,We,Ye,!0)}}e:{if(xe=oe?Es(oe):window,ze=xe.nodeName&&xe.nodeName.toLowerCase(),ze==="select"||ze==="input"&&xe.type==="file")var Ke=px;else if(Ph(xe))if(Dh)Ke=xx;else{Ke=gx;var Je=mx}else(ze=xe.nodeName)&&ze.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ke=vx);if(Ke&&(Ke=Ke(n,oe))){Lh(Se,Ke,a,ye);break e}Je&&Je(n,xe,oe),n==="focusout"&&(Je=xe._wrapperState)&&Je.controlled&&xe.type==="number"&&ot(xe,"number",xe.value)}switch(Je=oe?Es(oe):window,n){case"focusin":(Ph(Je)||Je.contentEditable==="true")&&(xs=Je,jc=oe,Ao=null);break;case"focusout":Ao=jc=xs=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,zh(Se,a,ye);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":zh(Se,a,ye)}var et;if(Oc)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else vs?Ah(n,a)&&(rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(wh&&a.locale!=="ko"&&(vs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&vs&&(et=yh()):(lr=ye,Dc="value"in lr?lr.value:lr.textContent,vs=!0)),Je=Na(oe,rt),0<Je.length&&(rt=new Mh(rt,n,null,a,ye),Se.push({event:rt,listeners:Je}),et?rt.data=et:(et=bh(a),et!==null&&(rt.data=et)))),(et=cx?ux(n,a):dx(n,a))&&(oe=Na(oe,"onBeforeInput"),0<oe.length&&(ye=new Mh("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:oe}),ye.data=et))}qh(Se,i)})}function Lo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Na(n,i){for(var a=i+"Capture",c=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=gn(n,a),x!=null&&c.unshift(Lo(n,x,p)),x=gn(n,i),x!=null&&c.push(Lo(n,x,p))),n=n.return}return c}function ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Zh(n,i,a,c,p){for(var x=i._reactName,w=[];a!==null&&a!==c;){var F=a,j=F.alternate,oe=F.stateNode;if(j!==null&&j===c)break;F.tag===5&&oe!==null&&(F=oe,p?(j=gn(a,x),j!=null&&w.unshift(Lo(a,j,F))):p||(j=gn(a,x),j!=null&&w.push(Lo(a,j,F)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var wx=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function Qh(n){return(typeof n=="string"?n:""+n).replace(wx,`
`).replace(Rx,"")}function Ia(n,i,a){if(i=Qh(i),Qh(n)!==i&&a)throw Error(t(425))}function Fa(){}var qc=null,Kc=null;function Zc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,Cx=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,Ax=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(n){return Jh.resolve(null).then(n).catch(bx)}:Qc;function bx(n){setTimeout(function(){throw n})}function Jc(n,i){var a=i,c=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){n.removeChild(p),So(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);So(i)}function ur(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ep(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Ss,Do="__reactProps$"+Ss,Ii="__reactContainer$"+Ss,eu="__reactEvents$"+Ss,Px="__reactListeners$"+Ss,Lx="__reactHandles$"+Ss;function Fr(n){var i=n[Ei];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ii]||a[Ei]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=ep(n);n!==null;){if(a=n[Ei])return a;n=ep(n)}return i}n=a,a=n.parentNode}return null}function Uo(n){return n=n[Ei]||n[Ii],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Es(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ka(n){return n[Do]||null}var tu=[],Ms=-1;function dr(n){return{current:n}}function It(n){0>Ms||(n.current=tu[Ms],tu[Ms]=null,Ms--)}function Dt(n,i){Ms++,tu[Ms]=n.current,n.current=i}var fr={},un=dr(fr),Tn=dr(!1),kr=fr;function Ts(n,i){var a=n.type.contextTypes;if(!a)return fr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in a)p[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function wn(n){return n=n.childContextTypes,n!=null}function Oa(){It(Tn),It(un)}function tp(n,i,a){if(un.current!==fr)throw Error(t(168));Dt(un,i),Dt(Tn,a)}function np(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in i))throw Error(t(108,_e(n)||"Unknown",p));return ue({},a,c)}function Ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fr,kr=un.current,Dt(un,n),Dt(Tn,Tn.current),!0}function ip(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=np(n,i,kr),c.__reactInternalMemoizedMergedChildContext=n,It(Tn),It(un),Dt(un,n)):It(Tn),Dt(Tn,a)}var Fi=null,za=!1,nu=!1;function rp(n){Fi===null?Fi=[n]:Fi.push(n)}function Dx(n){za=!0,rp(n)}function hr(){if(!nu&&Fi!==null){nu=!0;var n=0,i=bt;try{var a=Fi;for(bt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Fi=null,za=!1}catch(p){throw Fi!==null&&(Fi=Fi.slice(n+1)),le(Xe,hr),p}finally{bt=i,nu=!1}}return null}var ws=[],Rs=0,Ha=null,ja=0,Vn=[],Gn=0,Or=null,ki=1,Oi="";function Br(n,i){ws[Rs++]=ja,ws[Rs++]=Ha,Ha=n,ja=i}function sp(n,i,a){Vn[Gn++]=ki,Vn[Gn++]=Oi,Vn[Gn++]=Or,Or=n;var c=ki;n=Oi;var p=32-ut(c)-1;c&=~(1<<p),a+=1;var x=32-ut(i)+p;if(30<x){var w=p-p%5;x=(c&(1<<w)-1).toString(32),c>>=w,p-=w,ki=1<<32-ut(i)+p|a<<p|c,Oi=x+n}else ki=1<<x|a<<p|c,Oi=n}function iu(n){n.return!==null&&(Br(n,1),sp(n,1,0))}function ru(n){for(;n===Ha;)Ha=ws[--Rs],ws[Rs]=null,ja=ws[--Rs],ws[Rs]=null;for(;n===Or;)Or=Vn[--Gn],Vn[Gn]=null,Oi=Vn[--Gn],Vn[Gn]=null,ki=Vn[--Gn],Vn[Gn]=null}var Fn=null,kn=null,Ft=!1,si=null;function op(n,i){var a=$n(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function ap(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Fn=n,kn=ur(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Fn=n,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Or!==null?{id:ki,overflow:Oi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=$n(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Fn=n,kn=null,!0):!1;default:return!1}}function su(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ou(n){if(Ft){var i=kn;if(i){var a=i;if(!ap(n,i)){if(su(n))throw Error(t(418));i=ur(a.nextSibling);var c=Fn;i&&ap(n,i)?op(c,a):(n.flags=n.flags&-4097|2,Ft=!1,Fn=n)}}else{if(su(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ft=!1,Fn=n}}}function lp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function Va(n){if(n!==Fn)return!1;if(!Ft)return lp(n),Ft=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Zc(n.type,n.memoizedProps)),i&&(i=kn)){if(su(n))throw cp(),Error(t(418));for(;i;)op(n,i),i=ur(i.nextSibling)}if(lp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){kn=ur(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}kn=null}}else kn=Fn?ur(n.stateNode.nextSibling):null;return!0}function cp(){for(var n=kn;n;)n=ur(n.nextSibling)}function Cs(){kn=Fn=null,Ft=!1}function au(n){si===null?si=[n]:si.push(n)}var Ux=P.ReactCurrentBatchConfig;function No(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var p=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(w){var F=p.refs;w===null?delete F[x]:F[x]=w},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ga(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function up(n){var i=n._init;return i(n._payload)}function dp(n){function i(J,W){if(n){var ne=J.deletions;ne===null?(J.deletions=[W],J.flags|=16):ne.push(W)}}function a(J,W){if(!n)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function c(J,W){for(J=new Map;W!==null;)W.key!==null?J.set(W.key,W):J.set(W.index,W),W=W.sibling;return J}function p(J,W){return J=Sr(J,W),J.index=0,J.sibling=null,J}function x(J,W,ne){return J.index=ne,n?(ne=J.alternate,ne!==null?(ne=ne.index,ne<W?(J.flags|=2,W):ne):(J.flags|=2,W)):(J.flags|=1048576,W)}function w(J){return n&&J.alternate===null&&(J.flags|=2),J}function F(J,W,ne,Re){return W===null||W.tag!==6?(W=Qu(ne,J.mode,Re),W.return=J,W):(W=p(W,ne),W.return=J,W)}function j(J,W,ne,Re){var Ke=ne.type;return Ke===b?ye(J,W,ne.props.children,Re,ne.key):W!==null&&(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===z&&up(Ke)===W.type)?(Re=p(W,ne.props),Re.ref=No(J,W,ne),Re.return=J,Re):(Re=pl(ne.type,ne.key,ne.props,null,J.mode,Re),Re.ref=No(J,W,ne),Re.return=J,Re)}function oe(J,W,ne,Re){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=Ju(ne,J.mode,Re),W.return=J,W):(W=p(W,ne.children||[]),W.return=J,W)}function ye(J,W,ne,Re,Ke){return W===null||W.tag!==7?(W=Yr(ne,J.mode,Re,Ke),W.return=J,W):(W=p(W,ne),W.return=J,W)}function Se(J,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Qu(""+W,J.mode,ne),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case Y:return ne=pl(W.type,W.key,W.props,null,J.mode,ne),ne.ref=No(J,null,W),ne.return=J,ne;case B:return W=Ju(W,J.mode,ne),W.return=J,W;case z:var Re=W._init;return Se(J,Re(W._payload),ne)}if(Ve(W)||ae(W))return W=Yr(W,J.mode,ne,null),W.return=J,W;Ga(J,W)}return null}function xe(J,W,ne,Re){var Ke=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Ke!==null?null:F(J,W,""+ne,Re);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case Y:return ne.key===Ke?j(J,W,ne,Re):null;case B:return ne.key===Ke?oe(J,W,ne,Re):null;case z:return Ke=ne._init,xe(J,W,Ke(ne._payload),Re)}if(Ve(ne)||ae(ne))return Ke!==null?null:ye(J,W,ne,Re,null);Ga(J,ne)}return null}function ze(J,W,ne,Re,Ke){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return J=J.get(ne)||null,F(W,J,""+Re,Ke);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case Y:return J=J.get(Re.key===null?ne:Re.key)||null,j(W,J,Re,Ke);case B:return J=J.get(Re.key===null?ne:Re.key)||null,oe(W,J,Re,Ke);case z:var Je=Re._init;return ze(J,W,ne,Je(Re._payload),Ke)}if(Ve(Re)||ae(Re))return J=J.get(ne)||null,ye(W,J,Re,Ke,null);Ga(W,Re)}return null}function We(J,W,ne,Re){for(var Ke=null,Je=null,et=W,rt=W=0,tn=null;et!==null&&rt<ne.length;rt++){et.index>rt?(tn=et,et=null):tn=et.sibling;var Mt=xe(J,et,ne[rt],Re);if(Mt===null){et===null&&(et=tn);break}n&&et&&Mt.alternate===null&&i(J,et),W=x(Mt,W,rt),Je===null?Ke=Mt:Je.sibling=Mt,Je=Mt,et=tn}if(rt===ne.length)return a(J,et),Ft&&Br(J,rt),Ke;if(et===null){for(;rt<ne.length;rt++)et=Se(J,ne[rt],Re),et!==null&&(W=x(et,W,rt),Je===null?Ke=et:Je.sibling=et,Je=et);return Ft&&Br(J,rt),Ke}for(et=c(J,et);rt<ne.length;rt++)tn=ze(et,J,rt,ne[rt],Re),tn!==null&&(n&&tn.alternate!==null&&et.delete(tn.key===null?rt:tn.key),W=x(tn,W,rt),Je===null?Ke=tn:Je.sibling=tn,Je=tn);return n&&et.forEach(function(Er){return i(J,Er)}),Ft&&Br(J,rt),Ke}function Ye(J,W,ne,Re){var Ke=ae(ne);if(typeof Ke!="function")throw Error(t(150));if(ne=Ke.call(ne),ne==null)throw Error(t(151));for(var Je=Ke=null,et=W,rt=W=0,tn=null,Mt=ne.next();et!==null&&!Mt.done;rt++,Mt=ne.next()){et.index>rt?(tn=et,et=null):tn=et.sibling;var Er=xe(J,et,Mt.value,Re);if(Er===null){et===null&&(et=tn);break}n&&et&&Er.alternate===null&&i(J,et),W=x(Er,W,rt),Je===null?Ke=Er:Je.sibling=Er,Je=Er,et=tn}if(Mt.done)return a(J,et),Ft&&Br(J,rt),Ke;if(et===null){for(;!Mt.done;rt++,Mt=ne.next())Mt=Se(J,Mt.value,Re),Mt!==null&&(W=x(Mt,W,rt),Je===null?Ke=Mt:Je.sibling=Mt,Je=Mt);return Ft&&Br(J,rt),Ke}for(et=c(J,et);!Mt.done;rt++,Mt=ne.next())Mt=ze(et,J,rt,Mt.value,Re),Mt!==null&&(n&&Mt.alternate!==null&&et.delete(Mt.key===null?rt:Mt.key),W=x(Mt,W,rt),Je===null?Ke=Mt:Je.sibling=Mt,Je=Mt);return n&&et.forEach(function(f_){return i(J,f_)}),Ft&&Br(J,rt),Ke}function Vt(J,W,ne,Re){if(typeof ne=="object"&&ne!==null&&ne.type===b&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case Y:e:{for(var Ke=ne.key,Je=W;Je!==null;){if(Je.key===Ke){if(Ke=ne.type,Ke===b){if(Je.tag===7){a(J,Je.sibling),W=p(Je,ne.props.children),W.return=J,J=W;break e}}else if(Je.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===z&&up(Ke)===Je.type){a(J,Je.sibling),W=p(Je,ne.props),W.ref=No(J,Je,ne),W.return=J,J=W;break e}a(J,Je);break}else i(J,Je);Je=Je.sibling}ne.type===b?(W=Yr(ne.props.children,J.mode,Re,ne.key),W.return=J,J=W):(Re=pl(ne.type,ne.key,ne.props,null,J.mode,Re),Re.ref=No(J,W,ne),Re.return=J,J=Re)}return w(J);case B:e:{for(Je=ne.key;W!==null;){if(W.key===Je)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){a(J,W.sibling),W=p(W,ne.children||[]),W.return=J,J=W;break e}else{a(J,W);break}else i(J,W);W=W.sibling}W=Ju(ne,J.mode,Re),W.return=J,J=W}return w(J);case z:return Je=ne._init,Vt(J,W,Je(ne._payload),Re)}if(Ve(ne))return We(J,W,ne,Re);if(ae(ne))return Ye(J,W,ne,Re);Ga(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,W!==null&&W.tag===6?(a(J,W.sibling),W=p(W,ne),W.return=J,J=W):(a(J,W),W=Qu(ne,J.mode,Re),W.return=J,J=W),w(J)):a(J,W)}return Vt}var As=dp(!0),fp=dp(!1),Wa=dr(null),Xa=null,bs=null,lu=null;function cu(){lu=bs=Xa=null}function uu(n){var i=Wa.current;It(Wa),n._currentValue=i}function du(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ps(n,i){Xa=n,lu=bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Rn=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(lu!==n)if(n={context:n,memoizedValue:i,next:null},bs===null){if(Xa===null)throw Error(t(308));bs=n,Xa.dependencies={lanes:0,firstContext:n}}else bs=bs.next=n;return i}var zr=null;function fu(n){zr===null?zr=[n]:zr.push(n)}function hp(n,i,a,c){var p=i.interleaved;return p===null?(a.next=a,fu(i)):(a.next=p.next,p.next=a),i.interleaved=a,Bi(n,c)}function Bi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var pr=!1;function hu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(yt&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,Bi(n,a)}return p=c.interleaved,p===null?(i.next=i,fu(c)):(i.next=p.next,p.next=i),c.interleaved=i,Bi(n,a)}function Ya(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Cc(n,a)}}function mp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?p=x=w:x=x.next=w,a=a.next}while(a!==null);x===null?p=x=i:x=x.next=i}else p=x=i;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function $a(n,i,a,c){var p=n.updateQueue;pr=!1;var x=p.firstBaseUpdate,w=p.lastBaseUpdate,F=p.shared.pending;if(F!==null){p.shared.pending=null;var j=F,oe=j.next;j.next=null,w===null?x=oe:w.next=oe,w=j;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==w&&(F===null?ye.firstBaseUpdate=oe:F.next=oe,ye.lastBaseUpdate=j))}if(x!==null){var Se=p.baseState;w=0,ye=oe=j=null,F=x;do{var xe=F.lane,ze=F.eventTime;if((c&xe)===xe){ye!==null&&(ye=ye.next={eventTime:ze,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var We=n,Ye=F;switch(xe=i,ze=a,Ye.tag){case 1:if(We=Ye.payload,typeof We=="function"){Se=We.call(ze,Se,xe);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=Ye.payload,xe=typeof We=="function"?We.call(ze,Se,xe):We,xe==null)break e;Se=ue({},Se,xe);break e;case 2:pr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,xe=p.effects,xe===null?p.effects=[F]:xe.push(F))}else ze={eventTime:ze,lane:xe,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(oe=ye=ze,j=Se):ye=ye.next=ze,w|=xe;if(F=F.next,F===null){if(F=p.shared.pending,F===null)break;xe=F,F=xe.next,xe.next=null,p.lastBaseUpdate=xe,p.shared.pending=null}}while(!0);if(ye===null&&(j=Se),p.baseState=j,p.firstBaseUpdate=oe,p.lastBaseUpdate=ye,i=p.shared.interleaved,i!==null){p=i;do w|=p.lane,p=p.next;while(p!==i)}else x===null&&(p.shared.lanes=0);Vr|=w,n.lanes=w,n.memoizedState=Se}}function gp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Io={},Mi=dr(Io),Fo=dr(Io),ko=dr(Io);function Hr(n){if(n===Io)throw Error(t(174));return n}function pu(n,i){switch(Dt(ko,i),Dt(Fo,n),Dt(Mi,Io),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Oe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Oe(i,n)}It(Mi),Dt(Mi,i)}function Ls(){It(Mi),It(Fo),It(ko)}function vp(n){Hr(ko.current);var i=Hr(Mi.current),a=Oe(i,n.type);i!==a&&(Dt(Fo,n),Dt(Mi,a))}function mu(n){Fo.current===n&&(It(Mi),It(Fo))}var Ot=dr(0);function qa(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var gu=[];function vu(){for(var n=0;n<gu.length;n++)gu[n]._workInProgressVersionPrimary=null;gu.length=0}var Ka=P.ReactCurrentDispatcher,xu=P.ReactCurrentBatchConfig,jr=0,Bt=null,$t=null,Jt=null,Za=!1,Oo=!1,Bo=0,Nx=0;function dn(){throw Error(t(321))}function _u(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ri(n[a],i[a]))return!1;return!0}function yu(n,i,a,c,p,x){if(jr=x,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ka.current=n===null||n.memoizedState===null?Ox:Bx,n=a(c,p),Oo){x=0;do{if(Oo=!1,Bo=0,25<=x)throw Error(t(301));x+=1,Jt=$t=null,i.updateQueue=null,Ka.current=zx,n=a(c,p)}while(Oo)}if(Ka.current=el,i=$t!==null&&$t.next!==null,jr=0,Jt=$t=Bt=null,Za=!1,i)throw Error(t(300));return n}function Su(){var n=Bo!==0;return Bo=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Bt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Xn(){if($t===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var i=Jt===null?Bt.memoizedState:Jt.next;if(i!==null)Jt=i,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Jt===null?Bt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function zo(n,i){return typeof i=="function"?i(n):i}function Eu(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=$t,p=c.baseQueue,x=a.pending;if(x!==null){if(p!==null){var w=p.next;p.next=x.next,x.next=w}c.baseQueue=p=x,a.pending=null}if(p!==null){x=p.next,c=c.baseState;var F=w=null,j=null,oe=x;do{var ye=oe.lane;if((jr&ye)===ye)j!==null&&(j=j.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var Se={lane:ye,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};j===null?(F=j=Se,w=c):j=j.next=Se,Bt.lanes|=ye,Vr|=ye}oe=oe.next}while(oe!==null&&oe!==x);j===null?w=c:j.next=F,ri(c,i.memoizedState)||(Rn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=j,a.lastRenderedState=c}if(n=a.interleaved,n!==null){p=n;do x=p.lane,Bt.lanes|=x,Vr|=x,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Mu(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,p=a.pending,x=i.memoizedState;if(p!==null){a.pending=null;var w=p=p.next;do x=n(x,w.action),w=w.next;while(w!==p);ri(x,i.memoizedState)||(Rn=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function xp(){}function _p(n,i){var a=Bt,c=Xn(),p=i(),x=!ri(c.memoizedState,p);if(x&&(c.memoizedState=p,Rn=!0),c=c.queue,Tu(Ep.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,Ho(9,Sp.bind(null,a,c,p,i),void 0,null),en===null)throw Error(t(349));(jr&30)!==0||yp(a,i,p)}return p}function yp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Sp(n,i,a,c){i.value=a,i.getSnapshot=c,Mp(i)&&Tp(n)}function Ep(n,i,a){return a(function(){Mp(i)&&Tp(n)})}function Mp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ri(n,a)}catch{return!0}}function Tp(n){var i=Bi(n,1);i!==null&&ci(i,n,1,-1)}function wp(n){var i=Ti();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},i.queue=n,n=n.dispatch=kx.bind(null,Bt,n),[i.memoizedState,n]}function Ho(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Rp(){return Xn().memoizedState}function Qa(n,i,a,c){var p=Ti();Bt.flags|=n,p.memoizedState=Ho(1|i,a,void 0,c===void 0?null:c)}function Ja(n,i,a,c){var p=Xn();c=c===void 0?null:c;var x=void 0;if($t!==null){var w=$t.memoizedState;if(x=w.destroy,c!==null&&_u(c,w.deps)){p.memoizedState=Ho(i,a,x,c);return}}Bt.flags|=n,p.memoizedState=Ho(1|i,a,x,c)}function Cp(n,i){return Qa(8390656,8,n,i)}function Tu(n,i){return Ja(2048,8,n,i)}function Ap(n,i){return Ja(4,2,n,i)}function bp(n,i){return Ja(4,4,n,i)}function Pp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Lp(n,i,a){return a=a!=null?a.concat([n]):null,Ja(4,4,Pp.bind(null,i,n),a)}function wu(){}function Dp(n,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&_u(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Up(n,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&_u(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Np(n,i,a){return(jr&21)===0?(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=a):(ri(a,i)||(a=vn(),Bt.lanes|=a,Vr|=a,n.baseState=!0),i)}function Ix(n,i){var a=bt;bt=a!==0&&4>a?a:4,n(!0);var c=xu.transition;xu.transition={};try{n(!1),i()}finally{bt=a,xu.transition=c}}function Ip(){return Xn().memoizedState}function Fx(n,i,a){var c=_r(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Fp(n))kp(i,a);else if(a=hp(n,i,a,c),a!==null){var p=_n();ci(a,n,c,p),Op(a,i,c)}}function kx(n,i,a){var c=_r(n),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fp(n))kp(i,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var w=i.lastRenderedState,F=x(w,a);if(p.hasEagerState=!0,p.eagerState=F,ri(F,w)){var j=i.interleaved;j===null?(p.next=p,fu(i)):(p.next=j.next,j.next=p),i.interleaved=p;return}}catch{}finally{}a=hp(n,i,p,c),a!==null&&(p=_n(),ci(a,n,c,p),Op(a,i,c))}}function Fp(n){var i=n.alternate;return n===Bt||i!==null&&i===Bt}function kp(n,i){Oo=Za=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Op(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Cc(n,a)}}var el={readContext:Wn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},Ox={readContext:Wn,useCallback:function(n,i){return Ti().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:Cp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Qa(4194308,4,Pp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Qa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Qa(4,2,n,i)},useMemo:function(n,i){var a=Ti();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ti();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Fx.bind(null,Bt,n),[c.memoizedState,n]},useRef:function(n){var i=Ti();return n={current:n},i.memoizedState=n},useState:wp,useDebugValue:wu,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=wp(!1),i=n[0];return n=Ix.bind(null,n[1]),Ti().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Bt,p=Ti();if(Ft){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),en===null)throw Error(t(349));(jr&30)!==0||yp(c,i,a)}p.memoizedState=a;var x={value:a,getSnapshot:i};return p.queue=x,Cp(Ep.bind(null,c,x,n),[n]),c.flags|=2048,Ho(9,Sp.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=Ti(),i=en.identifierPrefix;if(Ft){var a=Oi,c=ki;a=(c&~(1<<32-ut(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Bo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Nx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Bx={readContext:Wn,useCallback:Dp,useContext:Wn,useEffect:Tu,useImperativeHandle:Lp,useInsertionEffect:Ap,useLayoutEffect:bp,useMemo:Up,useReducer:Eu,useRef:Rp,useState:function(){return Eu(zo)},useDebugValue:wu,useDeferredValue:function(n){var i=Xn();return Np(i,$t.memoizedState,n)},useTransition:function(){var n=Eu(zo)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:xp,useSyncExternalStore:_p,useId:Ip,unstable_isNewReconciler:!1},zx={readContext:Wn,useCallback:Dp,useContext:Wn,useEffect:Tu,useImperativeHandle:Lp,useInsertionEffect:Ap,useLayoutEffect:bp,useMemo:Up,useReducer:Mu,useRef:Rp,useState:function(){return Mu(zo)},useDebugValue:wu,useDeferredValue:function(n){var i=Xn();return $t===null?i.memoizedState=n:Np(i,$t.memoizedState,n)},useTransition:function(){var n=Mu(zo)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:xp,useSyncExternalStore:_p,useId:Ip,unstable_isNewReconciler:!1};function oi(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Ru(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ue({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var tl={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=_n(),p=_r(n),x=zi(c,p);x.payload=i,a!=null&&(x.callback=a),i=mr(n,x,p),i!==null&&(ci(i,n,p,c),Ya(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=_n(),p=_r(n),x=zi(c,p);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=mr(n,x,p),i!==null&&(ci(i,n,p,c),Ya(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=_n(),c=_r(n),p=zi(a,c);p.tag=2,i!=null&&(p.callback=i),i=mr(n,p,c),i!==null&&(ci(i,n,c,a),Ya(i,n,c))}};function Bp(n,i,a,c,p,x,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,w):i.prototype&&i.prototype.isPureReactComponent?!Co(a,c)||!Co(p,x):!0}function zp(n,i,a){var c=!1,p=fr,x=i.contextType;return typeof x=="object"&&x!==null?x=Wn(x):(p=wn(i)?kr:un.current,c=i.contextTypes,x=(c=c!=null)?Ts(n,p):fr),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),i}function Hp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&tl.enqueueReplaceState(i,i.state,null)}function Cu(n,i,a,c){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},hu(n);var x=i.contextType;typeof x=="object"&&x!==null?p.context=Wn(x):(x=wn(i)?kr:un.current,p.context=Ts(n,x)),p.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(Ru(n,i,x,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&tl.enqueueReplaceState(p,p.state,null),$a(n,a,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Ds(n,i){try{var a="",c=i;do a+=he(c),c=c.return;while(c);var p=a}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:p,digest:null}}function Au(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function bu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Hx=typeof WeakMap=="function"?WeakMap:Map;function jp(n,i,a){a=zi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ll||(ll=!0,Gu=c),bu(n,i)},a}function Vp(n,i,a){a=zi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=i.value;a.payload=function(){return c(p)},a.callback=function(){bu(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){bu(n,i),typeof c!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Gp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Hx;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(a)||(p.add(a),n=t_.bind(null,n,i,a),i.then(n,n))}function Wp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Xp(n,i,a,c,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=zi(-1,1),i.tag=2,mr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var jx=P.ReactCurrentOwner,Rn=!1;function xn(n,i,a,c){i.child=n===null?fp(i,null,a,c):As(i,n.child,a,c)}function Yp(n,i,a,c,p){a=a.render;var x=i.ref;return Ps(i,p),c=yu(n,i,a,c,x,p),a=Su(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Hi(n,i,p)):(Ft&&a&&iu(i),i.flags|=1,xn(n,i,c,p),i.child)}function $p(n,i,a,c,p){if(n===null){var x=a.type;return typeof x=="function"&&!Zu(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,qp(n,i,x,c,p)):(n=pl(a.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&p)===0){var w=x.memoizedProps;if(a=a.compare,a=a!==null?a:Co,a(w,c)&&n.ref===i.ref)return Hi(n,i,p)}return i.flags|=1,n=Sr(x,c),n.ref=i.ref,n.return=i,i.child=n}function qp(n,i,a,c,p){if(n!==null){var x=n.memoizedProps;if(Co(x,c)&&n.ref===i.ref)if(Rn=!1,i.pendingProps=c=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Rn=!0);else return i.lanes=n.lanes,Hi(n,i,p)}return Pu(n,i,a,c,p)}function Kp(n,i,a){var c=i.pendingProps,p=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Ns,On),On|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Dt(Ns,On),On|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,Dt(Ns,On),On|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,Dt(Ns,On),On|=c;return xn(n,i,p,a),i.child}function Zp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Pu(n,i,a,c,p){var x=wn(a)?kr:un.current;return x=Ts(i,x),Ps(i,p),a=yu(n,i,a,c,x,p),c=Su(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Hi(n,i,p)):(Ft&&c&&iu(i),i.flags|=1,xn(n,i,a,p),i.child)}function Qp(n,i,a,c,p){if(wn(a)){var x=!0;Ba(i)}else x=!1;if(Ps(i,p),i.stateNode===null)il(n,i),zp(i,a,c),Cu(i,a,c,p),c=!0;else if(n===null){var w=i.stateNode,F=i.memoizedProps;w.props=F;var j=w.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=Wn(oe):(oe=wn(a)?kr:un.current,oe=Ts(i,oe));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==c||j!==oe)&&Hp(i,w,c,oe),pr=!1;var xe=i.memoizedState;w.state=xe,$a(i,c,w,p),j=i.memoizedState,F!==c||xe!==j||Tn.current||pr?(typeof ye=="function"&&(Ru(i,a,ye,c),j=i.memoizedState),(F=pr||Bp(i,a,F,c,xe,j,oe))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=j),w.props=c,w.state=j,w.context=oe,c=F):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,pp(n,i),F=i.memoizedProps,oe=i.type===i.elementType?F:oi(i.type,F),w.props=oe,Se=i.pendingProps,xe=w.context,j=a.contextType,typeof j=="object"&&j!==null?j=Wn(j):(j=wn(a)?kr:un.current,j=Ts(i,j));var ze=a.getDerivedStateFromProps;(ye=typeof ze=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==Se||xe!==j)&&Hp(i,w,c,j),pr=!1,xe=i.memoizedState,w.state=xe,$a(i,c,w,p);var We=i.memoizedState;F!==Se||xe!==We||Tn.current||pr?(typeof ze=="function"&&(Ru(i,a,ze,c),We=i.memoizedState),(oe=pr||Bp(i,a,oe,c,xe,We,j)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,We,j),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,We,j)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=We),w.props=c,w.state=We,w.context=j,c=oe):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return Lu(n,i,a,c,x,p)}function Lu(n,i,a,c,p,x){Zp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return p&&ip(i,a,!1),Hi(n,i,x);c=i.stateNode,jx.current=i;var F=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=As(i,n.child,null,x),i.child=As(i,null,F,x)):xn(n,i,F,x),i.memoizedState=c.state,p&&ip(i,a,!0),i.child}function Jp(n){var i=n.stateNode;i.pendingContext?tp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&tp(n,i.context,!1),pu(n,i.containerInfo)}function em(n,i,a,c,p){return Cs(),au(p),i.flags|=256,xn(n,i,a,c),i.child}var Du={dehydrated:null,treeContext:null,retryLane:0};function Uu(n){return{baseLanes:n,cachePool:null,transitions:null}}function tm(n,i,a){var c=i.pendingProps,p=Ot.current,x=!1,w=(i.flags&128)!==0,F;if((F=w)||(F=n!==null&&n.memoizedState===null?!1:(p&2)!==0),F?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Dt(Ot,p&1),n===null)return ou(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,x?(c=i.mode,x=i.child,w={mode:"hidden",children:w},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=w):x=ml(w,c,0,null),n=Yr(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=Uu(a),i.memoizedState=Du,n):Nu(i,w));if(p=n.memoizedState,p!==null&&(F=p.dehydrated,F!==null))return Vx(n,i,w,c,F,p,a);if(x){x=c.fallback,w=i.mode,p=n.child,F=p.sibling;var j={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==p?(c=i.child,c.childLanes=0,c.pendingProps=j,i.deletions=null):(c=Sr(p,j),c.subtreeFlags=p.subtreeFlags&14680064),F!==null?x=Sr(F,x):(x=Yr(x,w,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,w=n.child.memoizedState,w=w===null?Uu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},x.memoizedState=w,x.childLanes=n.childLanes&~a,i.memoizedState=Du,c}return x=n.child,n=x.sibling,c=Sr(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Nu(n,i){return i=ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function nl(n,i,a,c){return c!==null&&au(c),As(i,n.child,null,a),n=Nu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Vx(n,i,a,c,p,x,w){if(a)return i.flags&256?(i.flags&=-257,c=Au(Error(t(422))),nl(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,p=i.mode,c=ml({mode:"visible",children:c.children},p,0,null),x=Yr(x,p,w,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&As(i,n.child,null,w),i.child.memoizedState=Uu(w),i.memoizedState=Du,x);if((i.mode&1)===0)return nl(n,i,w,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var F=c.dgst;return c=F,x=Error(t(419)),c=Au(x,c,void 0),nl(n,i,w,c)}if(F=(w&n.childLanes)!==0,Rn||F){if(c=en,c!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|w))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,Bi(n,p),ci(c,n,p,-1))}return Ku(),c=Au(Error(t(421))),nl(n,i,w,c)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=n_.bind(null,n),p._reactRetry=i,null):(n=x.treeContext,kn=ur(p.nextSibling),Fn=i,Ft=!0,si=null,n!==null&&(Vn[Gn++]=ki,Vn[Gn++]=Oi,Vn[Gn++]=Or,ki=n.id,Oi=n.overflow,Or=i),i=Nu(i,c.children),i.flags|=4096,i)}function nm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),du(n.return,i,a)}function Iu(n,i,a,c,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=p)}function im(n,i,a){var c=i.pendingProps,p=c.revealOrder,x=c.tail;if(xn(n,i,c.children,a),c=Ot.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&nm(n,a,i);else if(n.tag===19)nm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Dt(Ot,c),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&qa(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Iu(i,!1,p,a,x);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&qa(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Iu(i,!0,a,null,x);break;case"together":Iu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function il(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Hi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Vr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Sr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Sr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Gx(n,i,a){switch(i.tag){case 3:Jp(i),Cs();break;case 5:vp(i);break;case 1:wn(i.type)&&Ba(i);break;case 4:pu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,p=i.memoizedProps.value;Dt(Wa,c._currentValue),c._currentValue=p;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Dt(Ot,Ot.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?tm(n,i,a):(Dt(Ot,Ot.current&1),n=Hi(n,i,a),n!==null?n.sibling:null);Dt(Ot,Ot.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return im(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Dt(Ot,Ot.current),c)break;return null;case 22:case 23:return i.lanes=0,Kp(n,i,a)}return Hi(n,i,a)}var rm,Fu,sm,om;rm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Fu=function(){},sm=function(n,i,a,c){var p=n.memoizedProps;if(p!==c){n=i.stateNode,Hr(Mi.current);var x=null;switch(a){case"input":p=$(n,p),c=$(n,c),x=[];break;case"select":p=ue({},p,{value:void 0}),c=ue({},c,{value:void 0}),x=[];break;case"textarea":p=R(n,p),c=R(n,c),x=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Fa)}pt(a,c);var w;a=null;for(oe in p)if(!c.hasOwnProperty(oe)&&p.hasOwnProperty(oe)&&p[oe]!=null)if(oe==="style"){var F=p[oe];for(w in F)F.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?x||(x=[]):(x=x||[]).push(oe,null));for(oe in c){var j=c[oe];if(F=p!=null?p[oe]:void 0,c.hasOwnProperty(oe)&&j!==F&&(j!=null||F!=null))if(oe==="style")if(F){for(w in F)!F.hasOwnProperty(w)||j&&j.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in j)j.hasOwnProperty(w)&&F[w]!==j[w]&&(a||(a={}),a[w]=j[w])}else a||(x||(x=[]),x.push(oe,a)),a=j;else oe==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,F=F?F.__html:void 0,j!=null&&F!==j&&(x=x||[]).push(oe,j)):oe==="children"?typeof j!="string"&&typeof j!="number"||(x=x||[]).push(oe,""+j):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(j!=null&&oe==="onScroll"&&Nt("scroll",n),x||F===j||(x=[])):(x=x||[]).push(oe,j))}a&&(x=x||[]).push("style",a);var oe=x;(i.updateQueue=oe)&&(i.flags|=4)}},om=function(n,i,a,c){a!==c&&(i.flags|=4)};function jo(n,i){if(!Ft)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function fn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Wx(n,i,a){var c=i.pendingProps;switch(ru(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return wn(i.type)&&Oa(),fn(i),null;case 3:return c=i.stateNode,Ls(),It(Tn),It(un),vu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Va(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,si!==null&&(Yu(si),si=null))),Fu(n,i),fn(i),null;case 5:mu(i);var p=Hr(ko.current);if(a=i.type,n!==null&&i.stateNode!=null)sm(n,i,a,c,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return fn(i),null}if(n=Hr(Mi.current),Va(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[Ei]=i,c[Do]=x,n=(i.mode&1)!==0,a){case"dialog":Nt("cancel",c),Nt("close",c);break;case"iframe":case"object":case"embed":Nt("load",c);break;case"video":case"audio":for(p=0;p<bo.length;p++)Nt(bo[p],c);break;case"source":Nt("error",c);break;case"img":case"image":case"link":Nt("error",c),Nt("load",c);break;case"details":Nt("toggle",c);break;case"input":Qt(c,x),Nt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},Nt("invalid",c);break;case"textarea":ee(c,x),Nt("invalid",c)}pt(a,x),p=null;for(var w in x)if(x.hasOwnProperty(w)){var F=x[w];w==="children"?typeof F=="string"?c.textContent!==F&&(x.suppressHydrationWarning!==!0&&Ia(c.textContent,F,n),p=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(x.suppressHydrationWarning!==!0&&Ia(c.textContent,F,n),p=["children",""+F]):o.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&Nt("scroll",c)}switch(a){case"input":Tt(c),ke(c,x,!0);break;case"textarea":Tt(c),ve(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=Fa)}c=p,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Ei]=i,n[Do]=c,rm(n,i,!1,!1),i.stateNode=n;e:{switch(w=at(a,c),a){case"dialog":Nt("cancel",n),Nt("close",n),p=c;break;case"iframe":case"object":case"embed":Nt("load",n),p=c;break;case"video":case"audio":for(p=0;p<bo.length;p++)Nt(bo[p],n);p=c;break;case"source":Nt("error",n),p=c;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),p=c;break;case"details":Nt("toggle",n),p=c;break;case"input":Qt(n,c),p=$(n,c),Nt("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=ue({},c,{value:void 0}),Nt("invalid",n);break;case"textarea":ee(n,c),p=R(n,c),Nt("invalid",n);break;default:p=c}pt(a,p),F=p;for(x in F)if(F.hasOwnProperty(x)){var j=F[x];x==="style"?nt(n,j):x==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Be(n,j)):x==="children"?typeof j=="string"?(a!=="textarea"||j!=="")&&ct(n,j):typeof j=="number"&&ct(n,""+j):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?j!=null&&x==="onScroll"&&Nt("scroll",n):j!=null&&D(n,x,j,w))}switch(a){case"input":Tt(n),ke(n,c,!1);break;case"textarea":Tt(n),ve(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ae(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?N(n,!!c.multiple,x,!1):c.defaultValue!=null&&N(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Fa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(n&&i.stateNode!=null)om(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Hr(ko.current),Hr(Mi.current),Va(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ei]=i,(x=c.nodeValue!==a)&&(n=Fn,n!==null))switch(n.tag){case 3:Ia(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ia(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ei]=i,i.stateNode=c}return fn(i),null;case 13:if(It(Ot),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)cp(),Cs(),i.flags|=98560,x=!1;else if(x=Va(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ei]=i}else Cs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),x=!1}else si!==null&&(Yu(si),si=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ot.current&1)!==0?qt===0&&(qt=3):Ku())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return Ls(),Fu(n,i),n===null&&Po(i.stateNode.containerInfo),fn(i),null;case 10:return uu(i.type._context),fn(i),null;case 17:return wn(i.type)&&Oa(),fn(i),null;case 19:if(It(Ot),x=i.memoizedState,x===null)return fn(i),null;if(c=(i.flags&128)!==0,w=x.rendering,w===null)if(c)jo(x,!1);else{if(qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=qa(n),w!==null){for(i.flags|=128,jo(x,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,w=x.alternate,w===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=w.childLanes,x.lanes=w.lanes,x.child=w.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=w.memoizedProps,x.memoizedState=w.memoizedState,x.updateQueue=w.updateQueue,x.type=w.type,n=w.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Dt(Ot,Ot.current&1|2),i.child}n=n.sibling}x.tail!==null&&we()>Is&&(i.flags|=128,c=!0,jo(x,!1),i.lanes=4194304)}else{if(!c)if(n=qa(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),jo(x,!0),x.tail===null&&x.tailMode==="hidden"&&!w.alternate&&!Ft)return fn(i),null}else 2*we()-x.renderingStartTime>Is&&a!==1073741824&&(i.flags|=128,c=!0,jo(x,!1),i.lanes=4194304);x.isBackwards?(w.sibling=i.child,i.child=w):(a=x.last,a!==null?a.sibling=w:i.child=w,x.last=w)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=we(),i.sibling=null,a=Ot.current,Dt(Ot,c?a&1|2:a&1),i):(fn(i),null);case 22:case 23:return qu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(On&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Xx(n,i){switch(ru(i),i.tag){case 1:return wn(i.type)&&Oa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ls(),It(Tn),It(un),vu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return mu(i),null;case 13:if(It(Ot),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Cs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return It(Ot),null;case 4:return Ls(),null;case 10:return uu(i.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var rl=!1,hn=!1,Yx=typeof WeakSet=="function"?WeakSet:Set,je=null;function Us(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ht(n,i,c)}else a.current=null}function ku(n,i,a){try{a()}catch(c){Ht(n,i,c)}}var am=!1;function $x(n,i){if(qc=Ta,n=Bh(),Hc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var w=0,F=-1,j=-1,oe=0,ye=0,Se=n,xe=null;t:for(;;){for(var ze;Se!==a||p!==0&&Se.nodeType!==3||(F=w+p),Se!==x||c!==0&&Se.nodeType!==3||(j=w+c),Se.nodeType===3&&(w+=Se.nodeValue.length),(ze=Se.firstChild)!==null;)xe=Se,Se=ze;for(;;){if(Se===n)break t;if(xe===a&&++oe===p&&(F=w),xe===x&&++ye===c&&(j=w),(ze=Se.nextSibling)!==null)break;Se=xe,xe=Se.parentNode}Se=ze}a=F===-1||j===-1?null:{start:F,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kc={focusedElem:n,selectionRange:a},Ta=!1,je=i;je!==null;)if(i=je,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,je=n;else for(;je!==null;){i=je;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var Ye=We.memoizedProps,Vt=We.memoizedState,J=i.stateNode,W=J.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:oi(i.type,Ye),Vt);J.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Ht(i,i.return,Re)}if(n=i.sibling,n!==null){n.return=i.return,je=n;break}je=i.return}return We=am,am=!1,We}function Vo(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&ku(i,a,x)}p=p.next}while(p!==c)}}function sl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ou(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function lm(n){var i=n.alternate;i!==null&&(n.alternate=null,lm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ei],delete i[Do],delete i[eu],delete i[Px],delete i[Lx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function cm(n){return n.tag===5||n.tag===3||n.tag===4}function um(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||cm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Fa));else if(c!==4&&(n=n.child,n!==null))for(Bu(n,i,a),n=n.sibling;n!==null;)Bu(n,i,a),n=n.sibling}function zu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(zu(n,i,a),n=n.sibling;n!==null;)zu(n,i,a),n=n.sibling}var sn=null,ai=!1;function gr(n,i,a){for(a=a.child;a!==null;)dm(n,i,a),a=a.sibling}function dm(n,i,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(wt,a)}catch{}switch(a.tag){case 5:hn||Us(a,i);case 6:var c=sn,p=ai;sn=null,gr(n,i,a),sn=c,ai=p,sn!==null&&(ai?(n=sn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ai?(n=sn,a=a.stateNode,n.nodeType===8?Jc(n.parentNode,a):n.nodeType===1&&Jc(n,a),So(n)):Jc(sn,a.stateNode));break;case 4:c=sn,p=ai,sn=a.stateNode.containerInfo,ai=!0,gr(n,i,a),sn=c,ai=p;break;case 0:case 11:case 14:case 15:if(!hn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var x=p,w=x.destroy;x=x.tag,w!==void 0&&((x&2)!==0||(x&4)!==0)&&ku(a,i,w),p=p.next}while(p!==c)}gr(n,i,a);break;case 1:if(!hn&&(Us(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){Ht(a,i,F)}gr(n,i,a);break;case 21:gr(n,i,a);break;case 22:a.mode&1?(hn=(c=hn)||a.memoizedState!==null,gr(n,i,a),hn=c):gr(n,i,a);break;default:gr(n,i,a)}}function fm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Yx),i.forEach(function(c){var p=i_.bind(null,n,c);a.has(c)||(a.add(c),c.then(p,p))})}}function li(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var x=n,w=i,F=w;e:for(;F!==null;){switch(F.tag){case 5:sn=F.stateNode,ai=!1;break e;case 3:sn=F.stateNode.containerInfo,ai=!0;break e;case 4:sn=F.stateNode.containerInfo,ai=!0;break e}F=F.return}if(sn===null)throw Error(t(160));dm(x,w,p),sn=null,ai=!1;var j=p.alternate;j!==null&&(j.return=null),p.return=null}catch(oe){Ht(p,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)hm(i,n),i=i.sibling}function hm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(li(i,n),wi(n),c&4){try{Vo(3,n,n.return),sl(3,n)}catch(Ye){Ht(n,n.return,Ye)}try{Vo(5,n,n.return)}catch(Ye){Ht(n,n.return,Ye)}}break;case 1:li(i,n),wi(n),c&512&&a!==null&&Us(a,a.return);break;case 5:if(li(i,n),wi(n),c&512&&a!==null&&Us(a,a.return),n.flags&32){var p=n.stateNode;try{ct(p,"")}catch(Ye){Ht(n,n.return,Ye)}}if(c&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,w=a!==null?a.memoizedProps:x,F=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{F==="input"&&x.type==="radio"&&x.name!=null&&Te(p,x),at(F,w);var oe=at(F,x);for(w=0;w<j.length;w+=2){var ye=j[w],Se=j[w+1];ye==="style"?nt(p,Se):ye==="dangerouslySetInnerHTML"?Be(p,Se):ye==="children"?ct(p,Se):D(p,ye,Se,oe)}switch(F){case"input":Pe(p,x);break;case"textarea":me(p,x);break;case"select":var xe=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var ze=x.value;ze!=null?N(p,!!x.multiple,ze,!1):xe!==!!x.multiple&&(x.defaultValue!=null?N(p,!!x.multiple,x.defaultValue,!0):N(p,!!x.multiple,x.multiple?[]:"",!1))}p[Do]=x}catch(Ye){Ht(n,n.return,Ye)}}break;case 6:if(li(i,n),wi(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(Ye){Ht(n,n.return,Ye)}}break;case 3:if(li(i,n),wi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{So(i.containerInfo)}catch(Ye){Ht(n,n.return,Ye)}break;case 4:li(i,n),wi(n);break;case 13:li(i,n),wi(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Vu=we())),c&4&&fm(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(hn=(oe=hn)||ye,li(i,n),hn=oe):li(i,n),wi(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!ye&&(n.mode&1)!==0)for(je=n,ye=n.child;ye!==null;){for(Se=je=ye;je!==null;){switch(xe=je,ze=xe.child,xe.tag){case 0:case 11:case 14:case 15:Vo(4,xe,xe.return);break;case 1:Us(xe,xe.return);var We=xe.stateNode;if(typeof We.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(Ye){Ht(c,a,Ye)}}break;case 5:Us(xe,xe.return);break;case 22:if(xe.memoizedState!==null){gm(Se);continue}}ze!==null?(ze.return=xe,je=ze):gm(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{p=Se.stateNode,oe?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(F=Se.stateNode,j=Se.memoizedProps.style,w=j!=null&&j.hasOwnProperty("display")?j.display:null,F.style.display=tt("display",w))}catch(Ye){Ht(n,n.return,Ye)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=oe?"":Se.memoizedProps}catch(Ye){Ht(n,n.return,Ye)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:li(i,n),wi(n),c&4&&fm(n);break;case 21:break;default:li(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(cm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(ct(p,""),c.flags&=-33);var x=um(n);zu(n,x,p);break;case 3:case 4:var w=c.stateNode.containerInfo,F=um(n);Bu(n,F,w);break;default:throw Error(t(161))}}catch(j){Ht(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function qx(n,i,a){je=n,pm(n)}function pm(n,i,a){for(var c=(n.mode&1)!==0;je!==null;){var p=je,x=p.child;if(p.tag===22&&c){var w=p.memoizedState!==null||rl;if(!w){var F=p.alternate,j=F!==null&&F.memoizedState!==null||hn;F=rl;var oe=hn;if(rl=w,(hn=j)&&!oe)for(je=p;je!==null;)w=je,j=w.child,w.tag===22&&w.memoizedState!==null?vm(p):j!==null?(j.return=w,je=j):vm(p);for(;x!==null;)je=x,pm(x),x=x.sibling;je=p,rl=F,hn=oe}mm(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,je=x):mm(n)}}function mm(n){for(;je!==null;){var i=je;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||sl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!hn)if(a===null)c.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&gp(i,x,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}gp(i,w,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&a.focus();break;case"img":j.src&&(a.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var ye=oe.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&So(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}hn||i.flags&512&&Ou(i)}catch(xe){Ht(i,i.return,xe)}}if(i===n){je=null;break}if(a=i.sibling,a!==null){a.return=i.return,je=a;break}je=i.return}}function gm(n){for(;je!==null;){var i=je;if(i===n){je=null;break}var a=i.sibling;if(a!==null){a.return=i.return,je=a;break}je=i.return}}function vm(n){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{sl(4,i)}catch(j){Ht(i,a,j)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var p=i.return;try{c.componentDidMount()}catch(j){Ht(i,p,j)}}var x=i.return;try{Ou(i)}catch(j){Ht(i,x,j)}break;case 5:var w=i.return;try{Ou(i)}catch(j){Ht(i,w,j)}}}catch(j){Ht(i,i.return,j)}if(i===n){je=null;break}var F=i.sibling;if(F!==null){F.return=i.return,je=F;break}je=i.return}}var Kx=Math.ceil,ol=P.ReactCurrentDispatcher,Hu=P.ReactCurrentOwner,Yn=P.ReactCurrentBatchConfig,yt=0,en=null,Gt=null,on=0,On=0,Ns=dr(0),qt=0,Go=null,Vr=0,al=0,ju=0,Wo=null,Cn=null,Vu=0,Is=1/0,ji=null,ll=!1,Gu=null,vr=null,cl=!1,xr=null,ul=0,Xo=0,Wu=null,dl=-1,fl=0;function _n(){return(yt&6)!==0?we():dl!==-1?dl:dl=we()}function _r(n){return(n.mode&1)===0?1:(yt&2)!==0&&on!==0?on&-on:Ux.transition!==null?(fl===0&&(fl=vn()),fl):(n=bt,n!==0||(n=window.event,n=n===void 0?16:_h(n.type)),n)}function ci(n,i,a,c){if(50<Xo)throw Xo=0,Wu=null,Error(t(185));Mn(n,a,c),((yt&2)===0||n!==en)&&(n===en&&((yt&2)===0&&(al|=a),qt===4&&yr(n,on)),An(n,c),a===1&&yt===0&&(i.mode&1)===0&&(Is=we()+500,za&&hr()))}function An(n,i){var a=n.callbackNode;Hn(n,i);var c=Si(n,n===en?on:0);if(c===0)a!==null&&ce(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ce(a),i===1)n.tag===0?Dx(_m.bind(null,n)):rp(_m.bind(null,n)),Ax(function(){(yt&6)===0&&hr()}),a=null;else{switch(dh(c)){case 1:a=Xe;break;case 4:a=it;break;case 16:a=st;break;case 536870912:a=vt;break;default:a=st}a=Cm(a,xm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function xm(n,i){if(dl=-1,fl=0,(yt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Fs()&&n.callbackNode!==a)return null;var c=Si(n,n===en?on:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=hl(n,c);else{i=c;var p=yt;yt|=2;var x=Sm();(en!==n||on!==i)&&(ji=null,Is=we()+500,Wr(n,i));do try{Jx();break}catch(F){ym(n,F)}while(!0);cu(),ol.current=x,yt=p,Gt!==null?i=0:(en=null,on=0,i=qt)}if(i!==0){if(i===2&&(p=Ni(n),p!==0&&(c=p,i=Xu(n,p))),i===1)throw a=Go,Wr(n,0),yr(n,c),An(n,we()),a;if(i===6)yr(n,c);else{if(p=n.current.alternate,(c&30)===0&&!Zx(p)&&(i=hl(n,c),i===2&&(x=Ni(n),x!==0&&(c=x,i=Xu(n,x))),i===1))throw a=Go,Wr(n,0),yr(n,c),An(n,we()),a;switch(n.finishedWork=p,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Xr(n,Cn,ji);break;case 3:if(yr(n,c),(c&130023424)===c&&(i=Vu+500-we(),10<i)){if(Si(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){_n(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Qc(Xr.bind(null,n,Cn,ji),i);break}Xr(n,Cn,ji);break;case 4:if(yr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,p=-1;0<c;){var w=31-ut(c);x=1<<w,w=i[w],w>p&&(p=w),c&=~x}if(c=p,c=we()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Kx(c/1960))-c,10<c){n.timeoutHandle=Qc(Xr.bind(null,n,Cn,ji),c);break}Xr(n,Cn,ji);break;case 5:Xr(n,Cn,ji);break;default:throw Error(t(329))}}}return An(n,we()),n.callbackNode===a?xm.bind(null,n):null}function Xu(n,i){var a=Wo;return n.current.memoizedState.isDehydrated&&(Wr(n,i).flags|=256),n=hl(n,i),n!==2&&(i=Cn,Cn=a,i!==null&&Yu(i)),n}function Yu(n){Cn===null?Cn=n:Cn.push.apply(Cn,n)}function Zx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],x=p.getSnapshot;p=p.value;try{if(!ri(x(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(n,i){for(i&=~ju,i&=~al,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ut(i),c=1<<a;n[a]=-1,i&=~c}}function _m(n){if((yt&6)!==0)throw Error(t(327));Fs();var i=Si(n,0);if((i&1)===0)return An(n,we()),null;var a=hl(n,i);if(n.tag!==0&&a===2){var c=Ni(n);c!==0&&(i=c,a=Xu(n,c))}if(a===1)throw a=Go,Wr(n,0),yr(n,i),An(n,we()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Xr(n,Cn,ji),An(n,we()),null}function $u(n,i){var a=yt;yt|=1;try{return n(i)}finally{yt=a,yt===0&&(Is=we()+500,za&&hr())}}function Gr(n){xr!==null&&xr.tag===0&&(yt&6)===0&&Fs();var i=yt;yt|=1;var a=Yn.transition,c=bt;try{if(Yn.transition=null,bt=1,n)return n()}finally{bt=c,Yn.transition=a,yt=i,(yt&6)===0&&hr()}}function qu(){On=Ns.current,It(Ns)}function Wr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Cx(a)),Gt!==null)for(a=Gt.return;a!==null;){var c=a;switch(ru(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Oa();break;case 3:Ls(),It(Tn),It(un),vu();break;case 5:mu(c);break;case 4:Ls();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:uu(c.type._context);break;case 22:case 23:qu()}a=a.return}if(en=n,Gt=n=Sr(n.current,null),on=On=i,qt=0,Go=null,ju=al=Vr=0,Cn=Wo=null,zr!==null){for(i=0;i<zr.length;i++)if(a=zr[i],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,x=a.pending;if(x!==null){var w=x.next;x.next=p,c.next=w}a.pending=c}zr=null}return n}function ym(n,i){do{var a=Gt;try{if(cu(),Ka.current=el,Za){for(var c=Bt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}Za=!1}if(jr=0,Jt=$t=Bt=null,Oo=!1,Bo=0,Hu.current=null,a===null||a.return===null){qt=1,Go=i,Gt=null;break}e:{var x=n,w=a.return,F=a,j=i;if(i=on,F.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var oe=j,ye=F,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ze=Wp(w);if(ze!==null){ze.flags&=-257,Xp(ze,w,F,x,i),ze.mode&1&&Gp(x,oe,i),i=ze,j=oe;var We=i.updateQueue;if(We===null){var Ye=new Set;Ye.add(j),i.updateQueue=Ye}else We.add(j);break e}else{if((i&1)===0){Gp(x,oe,i),Ku();break e}j=Error(t(426))}}else if(Ft&&F.mode&1){var Vt=Wp(w);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Xp(Vt,w,F,x,i),au(Ds(j,F));break e}}x=j=Ds(j,F),qt!==4&&(qt=2),Wo===null?Wo=[x]:Wo.push(x),x=w;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var J=jp(x,j,i);mp(x,J);break e;case 1:F=j;var W=x.type,ne=x.stateNode;if((x.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(vr===null||!vr.has(ne)))){x.flags|=65536,i&=-i,x.lanes|=i;var Re=Vp(x,F,i);mp(x,Re);break e}}x=x.return}while(x!==null)}Mm(a)}catch(Ke){i=Ke,Gt===a&&a!==null&&(Gt=a=a.return);continue}break}while(!0)}function Sm(){var n=ol.current;return ol.current=el,n===null?el:n}function Ku(){(qt===0||qt===3||qt===2)&&(qt=4),en===null||(Vr&268435455)===0&&(al&268435455)===0||yr(en,on)}function hl(n,i){var a=yt;yt|=2;var c=Sm();(en!==n||on!==i)&&(ji=null,Wr(n,i));do try{Qx();break}catch(p){ym(n,p)}while(!0);if(cu(),yt=a,ol.current=c,Gt!==null)throw Error(t(261));return en=null,on=0,qt}function Qx(){for(;Gt!==null;)Em(Gt)}function Jx(){for(;Gt!==null&&!K();)Em(Gt)}function Em(n){var i=Rm(n.alternate,n,On);n.memoizedProps=n.pendingProps,i===null?Mm(n):Gt=i,Hu.current=null}function Mm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Wx(a,i,On),a!==null){Gt=a;return}}else{if(a=Xx(a,i),a!==null){a.flags&=32767,Gt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{qt=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=n}while(i!==null);qt===0&&(qt=5)}function Xr(n,i,a){var c=bt,p=Yn.transition;try{Yn.transition=null,bt=1,e_(n,i,a,c)}finally{Yn.transition=p,bt=c}return null}function e_(n,i,a,c){do Fs();while(xr!==null);if((yt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(Sa(n,x),n===en&&(Gt=en=null,on=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cl||(cl=!0,Cm(st,function(){return Fs(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=Yn.transition,Yn.transition=null;var w=bt;bt=1;var F=yt;yt|=4,Hu.current=null,$x(n,a),hm(a,n),yx(Kc),Ta=!!qc,Kc=qc=null,n.current=a,qx(a),Ce(),yt=F,bt=w,Yn.transition=x}else n.current=a;if(cl&&(cl=!1,xr=n,ul=p),x=n.pendingLanes,x===0&&(vr=null),ln(a.stateNode),An(n,we()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(ll)throw ll=!1,n=Gu,Gu=null,n;return(ul&1)!==0&&n.tag!==0&&Fs(),x=n.pendingLanes,(x&1)!==0?n===Wu?Xo++:(Xo=0,Wu=n):Xo=0,hr(),null}function Fs(){if(xr!==null){var n=dh(ul),i=Yn.transition,a=bt;try{if(Yn.transition=null,bt=16>n?16:n,xr===null)var c=!1;else{if(n=xr,xr=null,ul=0,(yt&6)!==0)throw Error(t(331));var p=yt;for(yt|=4,je=n.current;je!==null;){var x=je,w=x.child;if((je.flags&16)!==0){var F=x.deletions;if(F!==null){for(var j=0;j<F.length;j++){var oe=F[j];for(je=oe;je!==null;){var ye=je;switch(ye.tag){case 0:case 11:case 15:Vo(8,ye,x)}var Se=ye.child;if(Se!==null)Se.return=ye,je=Se;else for(;je!==null;){ye=je;var xe=ye.sibling,ze=ye.return;if(lm(ye),ye===oe){je=null;break}if(xe!==null){xe.return=ze,je=xe;break}je=ze}}}var We=x.alternate;if(We!==null){var Ye=We.child;if(Ye!==null){We.child=null;do{var Vt=Ye.sibling;Ye.sibling=null,Ye=Vt}while(Ye!==null)}}je=x}}if((x.subtreeFlags&2064)!==0&&w!==null)w.return=x,je=w;else e:for(;je!==null;){if(x=je,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Vo(9,x,x.return)}var J=x.sibling;if(J!==null){J.return=x.return,je=J;break e}je=x.return}}var W=n.current;for(je=W;je!==null;){w=je;var ne=w.child;if((w.subtreeFlags&2064)!==0&&ne!==null)ne.return=w,je=ne;else e:for(w=W;je!==null;){if(F=je,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:sl(9,F)}}catch(Ke){Ht(F,F.return,Ke)}if(F===w){je=null;break e}var Re=F.sibling;if(Re!==null){Re.return=F.return,je=Re;break e}je=F.return}}if(yt=p,hr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(wt,n)}catch{}c=!0}return c}finally{bt=a,Yn.transition=i}}return!1}function Tm(n,i,a){i=Ds(a,i),i=jp(n,i,1),n=mr(n,i,1),i=_n(),n!==null&&(Mn(n,1,i),An(n,i))}function Ht(n,i,a){if(n.tag===3)Tm(n,n,a);else for(;i!==null;){if(i.tag===3){Tm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(vr===null||!vr.has(c))){n=Ds(a,n),n=Vp(i,n,1),i=mr(i,n,1),n=_n(),i!==null&&(Mn(i,1,n),An(i,n));break}}i=i.return}}function t_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=_n(),n.pingedLanes|=n.suspendedLanes&a,en===n&&(on&a)===a&&(qt===4||qt===3&&(on&130023424)===on&&500>we()-Vu?Wr(n,0):ju|=a),An(n,i)}function wm(n,i){i===0&&((n.mode&1)===0?i=1:(i=ii,ii<<=1,(ii&130023424)===0&&(ii=4194304)));var a=_n();n=Bi(n,i),n!==null&&(Mn(n,i,a),An(n,a))}function n_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),wm(n,a)}function i_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),wm(n,a)}var Rm;Rm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Tn.current)Rn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Rn=!1,Gx(n,i,a);Rn=(n.flags&131072)!==0}else Rn=!1,Ft&&(i.flags&1048576)!==0&&sp(i,ja,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;il(n,i),n=i.pendingProps;var p=Ts(i,un.current);Ps(i,a),p=yu(null,i,c,n,p,a);var x=Su();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(c)?(x=!0,Ba(i)):x=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,hu(i),p.updater=tl,i.stateNode=p,p._reactInternals=i,Cu(i,c,n,a),i=Lu(null,i,c,!0,x,a)):(i.tag=0,Ft&&x&&iu(i),xn(null,i,p,a),i=i.child),i;case 16:c=i.elementType;e:{switch(il(n,i),n=i.pendingProps,p=c._init,c=p(c._payload),i.type=c,p=i.tag=s_(c),n=oi(c,n),p){case 0:i=Pu(null,i,c,n,a);break e;case 1:i=Qp(null,i,c,n,a);break e;case 11:i=Yp(null,i,c,n,a);break e;case 14:i=$p(null,i,c,oi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:oi(c,p),Pu(n,i,c,p,a);case 1:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:oi(c,p),Qp(n,i,c,p,a);case 3:e:{if(Jp(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,p=x.element,pp(n,i),$a(i,c,null,a);var w=i.memoizedState;if(c=w.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){p=Ds(Error(t(423)),i),i=em(n,i,c,a,p);break e}else if(c!==p){p=Ds(Error(t(424)),i),i=em(n,i,c,a,p);break e}else for(kn=ur(i.stateNode.containerInfo.firstChild),Fn=i,Ft=!0,si=null,a=fp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Cs(),c===p){i=Hi(n,i,a);break e}xn(n,i,c,a)}i=i.child}return i;case 5:return vp(i),n===null&&ou(i),c=i.type,p=i.pendingProps,x=n!==null?n.memoizedProps:null,w=p.children,Zc(c,p)?w=null:x!==null&&Zc(c,x)&&(i.flags|=32),Zp(n,i),xn(n,i,w,a),i.child;case 6:return n===null&&ou(i),null;case 13:return tm(n,i,a);case 4:return pu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=As(i,null,c,a):xn(n,i,c,a),i.child;case 11:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:oi(c,p),Yp(n,i,c,p,a);case 7:return xn(n,i,i.pendingProps,a),i.child;case 8:return xn(n,i,i.pendingProps.children,a),i.child;case 12:return xn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,p=i.pendingProps,x=i.memoizedProps,w=p.value,Dt(Wa,c._currentValue),c._currentValue=w,x!==null)if(ri(x.value,w)){if(x.children===p.children&&!Tn.current){i=Hi(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var F=x.dependencies;if(F!==null){w=x.child;for(var j=F.firstContext;j!==null;){if(j.context===c){if(x.tag===1){j=zi(-1,a&-a),j.tag=2;var oe=x.updateQueue;if(oe!==null){oe=oe.shared;var ye=oe.pending;ye===null?j.next=j:(j.next=ye.next,ye.next=j),oe.pending=j}}x.lanes|=a,j=x.alternate,j!==null&&(j.lanes|=a),du(x.return,a,i),F.lanes|=a;break}j=j.next}}else if(x.tag===10)w=x.type===i.type?null:x.child;else if(x.tag===18){if(w=x.return,w===null)throw Error(t(341));w.lanes|=a,F=w.alternate,F!==null&&(F.lanes|=a),du(w,a,i),w=x.sibling}else w=x.child;if(w!==null)w.return=x;else for(w=x;w!==null;){if(w===i){w=null;break}if(x=w.sibling,x!==null){x.return=w.return,w=x;break}w=w.return}x=w}xn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,c=i.pendingProps.children,Ps(i,a),p=Wn(p),c=c(p),i.flags|=1,xn(n,i,c,a),i.child;case 14:return c=i.type,p=oi(c,i.pendingProps),p=oi(c.type,p),$p(n,i,c,p,a);case 15:return qp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:oi(c,p),il(n,i),i.tag=1,wn(c)?(n=!0,Ba(i)):n=!1,Ps(i,a),zp(i,c,p),Cu(i,c,p,a),Lu(null,i,c,!0,n,a);case 19:return im(n,i,a);case 22:return Kp(n,i,a)}throw Error(t(156,i.tag))};function Cm(n,i){return le(n,i)}function r_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,i,a,c){return new r_(n,i,a,c)}function Zu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function s_(n){if(typeof n=="function")return Zu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===de)return 11;if(n===te)return 14}return 2}function Sr(n,i){var a=n.alternate;return a===null?(a=$n(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function pl(n,i,a,c,p,x){var w=2;if(c=n,typeof n=="function")Zu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case b:return Yr(a.children,p,x,i);case I:w=8,p|=8;break;case L:return n=$n(12,a,i,p|2),n.elementType=L,n.lanes=x,n;case G:return n=$n(13,a,i,p),n.elementType=G,n.lanes=x,n;case re:return n=$n(19,a,i,p),n.elementType=re,n.lanes=x,n;case Z:return ml(a,p,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:w=10;break e;case V:w=9;break e;case de:w=11;break e;case te:w=14;break e;case z:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=$n(w,a,i,p),i.elementType=n,i.type=c,i.lanes=x,i}function Yr(n,i,a,c){return n=$n(7,n,c,i),n.lanes=a,n}function ml(n,i,a,c){return n=$n(22,n,c,i),n.elementType=Z,n.lanes=a,n.stateNode={isHidden:!1},n}function Qu(n,i,a){return n=$n(6,n,null,i),n.lanes=a,n}function Ju(n,i,a){return i=$n(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function o_(n,i,a,c,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jn(0),this.expirationTimes=jn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jn(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function ed(n,i,a,c,p,x,w,F,j){return n=new o_(n,i,a,F,j),i===1?(i=1,x===!0&&(i|=8)):i=0,x=$n(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(x),n}function a_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Am(n){if(!n)return fr;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(wn(a))return np(n,a,i)}return i}function bm(n,i,a,c,p,x,w,F,j){return n=ed(a,c,!0,n,p,x,w,F,j),n.context=Am(null),a=n.current,c=_n(),p=_r(a),x=zi(c,p),x.callback=i??null,mr(a,x,p),n.current.lanes=p,Mn(n,p,c),An(n,c),n}function gl(n,i,a,c){var p=i.current,x=_n(),w=_r(p);return a=Am(a),i.context===null?i.context=a:i.pendingContext=a,i=zi(x,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=mr(p,i,w),n!==null&&(ci(n,p,w,x),Ya(n,p,w)),w}function vl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function td(n,i){Pm(n,i),(n=n.alternate)&&Pm(n,i)}function l_(){return null}var Lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function nd(n){this._internalRoot=n}xl.prototype.render=nd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));gl(n,i,null,null)},xl.prototype.unmount=nd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Gr(function(){gl(null,n,null,null)}),i[Ii]=null}};function xl(n){this._internalRoot=n}xl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ph();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ar.length&&i!==0&&i<ar[a].priority;a++);ar.splice(a,0,n),a===0&&vh(n)}};function id(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function c_(n,i,a,c,p){if(p){if(typeof c=="function"){var x=c;c=function(){var oe=vl(w);x.call(oe)}}var w=bm(i,c,n,0,null,!1,!1,"",Dm);return n._reactRootContainer=w,n[Ii]=w.current,Po(n.nodeType===8?n.parentNode:n),Gr(),w}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var F=c;c=function(){var oe=vl(j);F.call(oe)}}var j=ed(n,0,!1,null,null,!1,!1,"",Dm);return n._reactRootContainer=j,n[Ii]=j.current,Po(n.nodeType===8?n.parentNode:n),Gr(function(){gl(i,j,a,c)}),j}function yl(n,i,a,c,p){var x=a._reactRootContainer;if(x){var w=x;if(typeof p=="function"){var F=p;p=function(){var j=vl(w);F.call(j)}}gl(i,w,n,p)}else w=c_(a,i,n,p,c);return vl(w)}fh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Yt(i.pendingLanes);a!==0&&(Cc(i,a|1),An(i,we()),(yt&6)===0&&(Is=we()+500,hr()))}break;case 13:Gr(function(){var c=Bi(n,1);if(c!==null){var p=_n();ci(c,n,1,p)}}),td(n,1)}},Ac=function(n){if(n.tag===13){var i=Bi(n,134217728);if(i!==null){var a=_n();ci(i,n,134217728,a)}td(n,134217728)}},hh=function(n){if(n.tag===13){var i=_r(n),a=Bi(n,i);if(a!==null){var c=_n();ci(a,n,i,c)}td(n,i)}},ph=function(){return bt},mh=function(n,i){var a=bt;try{return bt=n,i()}finally{bt=a}},Le=function(n,i,a){switch(i){case"input":if(Pe(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var p=ka(c);if(!p)throw Error(t(90));ht(c),Pe(c,p)}}}break;case"textarea":me(n,a);break;case"select":i=a.value,i!=null&&N(n,!!a.multiple,i,!1)}},Ut=$u,Xt=Gr;var u_={usingClientEntryPoint:!1,Events:[Uo,Es,ka,Ne,lt,$u]},Yo={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d_={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=A(n),n===null?null:n.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||l_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{wt=Sl.inject(d_),gt=Sl}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u_,bn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(i))throw Error(t(200));return a_(n,i,null,a)},bn.createRoot=function(n,i){if(!id(n))throw Error(t(299));var a=!1,c="",p=Lm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=ed(n,1,!1,null,null,a,!1,c,p),n[Ii]=i.current,Po(n.nodeType===8?n.parentNode:n),new nd(i)},bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=A(i),n=n===null?null:n.stateNode,n},bn.flushSync=function(n){return Gr(n)},bn.hydrate=function(n,i,a){if(!_l(i))throw Error(t(200));return yl(null,n,i,!0,a)},bn.hydrateRoot=function(n,i,a){if(!id(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,x="",w=Lm;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=bm(i,null,n,1,a??null,p,!1,x,w),n[Ii]=i.current,Po(n),c)for(n=0;n<c.length;n++)a=c[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new xl(i)},bn.render=function(n,i,a){if(!_l(i))throw Error(t(200));return yl(null,n,i,!1,a)},bn.unmountComponentAtNode=function(n){if(!_l(n))throw Error(t(40));return n._reactRootContainer?(Gr(function(){yl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ii]=null})}),!0):!1},bn.unstable_batchedUpdates=$u,bn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!_l(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yl(n,i,a,!1,c)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var zm;function y_(){if(zm)return od.exports;zm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),od.exports=__(),od.exports}var Hm;function S_(){if(Hm)return Ml;Hm=1;var r=y_();return Ml.createRoot=r.createRoot,Ml.hydrateRoot=r.hydrateRoot,Ml}var E_=S_();/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Wf=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,w0=/^[\\/]{2}/;function M_(r,e){return e+r.replace(/\\/g,"/")}var jm="popstate";function Vm(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function T_(r={}){function e(o,l){let{pathname:u="/",search:d="",hash:h=""}=fs(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Kd("",{pathname:u,search:d,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let u=o.document.querySelector("base"),d="";if(u&&u.getAttribute("href")){let h=o.location.href,m=h.indexOf("#");d=m===-1?h:h.slice(0,m)}return d+"#"+(typeof l=="string"?l:la(l))}function s(o,l){xi(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return R_(e,t,s,r)}function zt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function xi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function w_(){return Math.random().toString(36).substring(2,10)}function Gm(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Kd(r,e,t=null,s,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?fs(e):e,state:t,key:e&&e.key||s||w_(),mask:o}}function la({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function fs(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function R_(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,u=o.history,d="POP",h=null,m=g();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function g(){return(u.state||{idx:null}).idx}function v(){d="POP";let S=g(),_=S==null?null:S-m;m=S,h&&h({action:d,location:T.location,delta:_})}function y(S,_){d="PUSH";let U=Vm(S)?S:Kd(T.location,S,_);t&&t(U,S),m=g()+1;let D=Gm(U,m),P=T.createHref(U.mask||U);try{u.pushState(D,"",P)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;o.location.assign(P)}l&&h&&h({action:d,location:T.location,delta:1})}function E(S,_){d="REPLACE";let U=Vm(S)?S:Kd(T.location,S,_);t&&t(U,S),m=g();let D=Gm(U,m),P=T.createHref(U.mask||U);u.replaceState(D,"",P),l&&h&&h({action:d,location:T.location,delta:0})}function M(S){return C_(o,S)}let T={get action(){return d},get location(){return r(o,u)},listen(S){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(jm,v),h=S,()=>{o.removeEventListener(jm,v),h=null}},createHref(S){return e(o,S)},createURL:M,encodeLocation(S){let _=M(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:E,go(S){return u.go(S)}};return T}function C_(r,e,t=!1){let s="http://localhost";r&&(s=r.location.origin!=="null"?r.location.origin:r.location.href),zt(s,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:la(e);return o=o.replace(/ $/,"%20"),!t&&w0.test(o)&&(o=s+o),new URL(o,s)}function R0(r,e,t="/"){return A_(r,e,t,!1)}function A_(r,e,t,s,o){let l=typeof e=="string"?fs(e):e,u=Ji(l.pathname||"/",t);if(u==null)return null;let d=b_(r),h=null,m=z_(u);for(let g=0;h==null&&g<d.length;++g)h=B_(d[g],m,s);return h}function b_(r){let e=C0(r);return P_(e),e}function C0(r,e=[],t=[],s="",o=!1){let l=(u,d,h=o,m)=>{let g={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&h)return;zt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let v=gi([s,g.relativePath]),y=t.concat(g);u.children&&u.children.length>0&&(zt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),C0(u.children,e,y,v,h)),!(u.path==null&&!u.index)&&e.push({path:v,score:k_(v,u.index),routesMeta:y.map((E,M)=>{let[T,S]=P0(E.relativePath,E.caseSensitive,M===y.length-1);return{...E,matcher:T,compiledParams:S}})})};return r.forEach((u,d)=>{var h;if(u.path===""||!((h=u.path)!=null&&h.includes("?")))l(u,d);else for(let m of A0(u.path))l(u,d,!0,m)}),e}function A0(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let u=A0(s.join("/")),d=[];return d.push(...u.map(h=>h===""?l:[l,h].join("/"))),o&&d.push(...u),d.map(h=>r.startsWith("/")&&h===""?"/":h)}function P_(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:O_(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var L_=/^:[\w-]+$/,D_=3,U_=2,N_=1,I_=10,F_=-2,Wm=r=>r==="*";function k_(r,e){let t=r.split("/"),s=t.length;return t.some(Wm)&&(s+=F_),e&&(s+=U_),t.filter(o=>!Wm(o)).reduce((o,l)=>o+(L_.test(l)?D_:l===""?N_:I_),s)}function O_(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function B_(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",u=[];for(let d=0;d<s.length;++d){let h=s[d],m=d===s.length-1,g=l==="/"?e:e.slice(l.length)||"/",v={path:h.relativePath,caseSensitive:h.caseSensitive,end:m},y=h.matcher&&h.compiledParams?b0(v,g,h.matcher,h.compiledParams):fc(v,g),E=h.route;if(!y&&m&&t&&!s[s.length-1].route.index&&(y=fc({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:gi([l,y.pathname]),pathnameBase:V_(gi([l,y.pathnameBase])),route:E}),y.pathnameBase!=="/"&&(l=gi([l,y.pathnameBase]))}return u}function fc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=P0(r.path,r.caseSensitive,r.end);return b0(r,e,t,s)}function b0(r,e,t,s){let o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((m,{paramName:g,isOptional:v},y)=>{if(g==="*"){let M=d[y]||"";u=l.slice(0,l.length-M.length).replace(/(.)\/+$/,"$1")}const E=d[y];return v&&!E?m[g]=void 0:m[g]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:u,pattern:r}}function P0(r,e=!1,t=!0){xi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,h,m,g)=>{if(s.push({paramName:d,isOptional:h!=null}),h){let v=g.charAt(m+u.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function z_(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ji(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function H_(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?fs(r):r,l;return t?(t=D0(t),t.startsWith("/")?l=Xm(t.substring(1),"/"):l=Xm(t,e)):l=e,{pathname:l,search:G_(s),hash:W_(o)}}function Xm(r,e){let t=hc(e).split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function cd(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function j_(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function L0(r){let e=j_(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Xf(r,e,t,s=!1){let o;typeof r=="string"?o=fs(r):(o={...r},zt(!o.pathname||!o.pathname.includes("?"),cd("?","pathname","search",o)),zt(!o.pathname||!o.pathname.includes("#"),cd("#","pathname","hash",o)),zt(!o.search||!o.search.includes("#"),cd("#","search","hash",o)));let l=r===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=t;else{let v=e.length-1;if(!s&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),v-=1;o.pathname=y.join("/")}d=v>=0?e[v]:"/"}let h=H_(o,d),m=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(m||g)&&(h.pathname+="/"),h}var D0=r=>r.replace(/[\\/]{2,}/g,"/"),gi=r=>D0(r.join("/")),hc=r=>r.replace(/\/+$/,""),V_=r=>hc(r).replace(/^\/*/,"/"),G_=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,W_=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,X_=class{constructor(r,e,t,s=!1){this.status=r,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Y_(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function $_(r){let e=r.map(t=>t.route.path).filter(Boolean);return gi(e)||"/"}var U0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function N0(r,e){let t=r;if(typeof t!="string"||!Wf.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(U0)try{let l=new URL(window.location.href),u=w0.test(t)?new URL(M_(t,l.protocol)):new URL(t),d=Ji(u.pathname,e);u.origin===l.origin&&d!=null?t=d+u.search+u.hash:o=!0}catch{xi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var I0=["POST","PUT","PATCH","DELETE"];new Set(I0);var q_=["GET",...I0];new Set(q_);var K_=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Z_(r){try{return K_.includes(new URL(r).protocol)}catch{return!1}}var uo=H.createContext(null);uo.displayName="DataRouter";var xc=H.createContext(null);xc.displayName="DataRouterState";var F0=H.createContext(!1);function Q_(){return H.useContext(F0)}var k0=H.createContext({isTransitioning:!1});k0.displayName="ViewTransition";var J_=H.createContext(new Map);J_.displayName="Fetchers";var ey=H.createContext(null);ey.displayName="Await";var ti=H.createContext(null);ti.displayName="Navigation";var ua=H.createContext(null);ua.displayName="Location";var _i=H.createContext({outlet:null,matches:[],isDataRoute:!1});_i.displayName="Route";var Yf=H.createContext(null);Yf.displayName="RouteError";var O0="REACT_ROUTER_ERROR",ty="REDIRECT",ny="ROUTE_ERROR_RESPONSE";function iy(r){if(r.startsWith(`${O0}:${ty}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function ry(r){if(r.startsWith(`${O0}:${ny}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new X_(e.status,e.statusText,e.data)}catch{}}function sy(r,{relative:e}={}){zt(da(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=H.useContext(ti),{hash:o,pathname:l,search:u}=fa(r,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:gi([t,l])),s.createHref({pathname:d,search:u,hash:o})}function da(){return H.useContext(ua)!=null}function Li(){return zt(da(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(ua).location}var B0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function z0(r){H.useContext(ti).static||H.useLayoutEffect(r)}function H0(){let{isDataRoute:r}=H.useContext(_i);return r?Sy():oy()}function oy(){zt(da(),"useNavigate() may be used only in the context of a <Router> component.");let r=H.useContext(uo),{basename:e,navigator:t}=H.useContext(ti),{matches:s}=H.useContext(_i),{pathname:o}=Li(),l=JSON.stringify(L0(s)),u=H.useRef(!1);return z0(()=>{u.current=!0}),H.useCallback((h,m={})=>{if(xi(u.current,B0),!u.current)return;if(typeof h=="number"){t.go(h);return}let g=Xf(h,JSON.parse(l),o,m.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:gi([e,g.pathname])),(m.replace?t.replace:t.push)(g,m.state,m)},[e,t,l,o,r])}var ay=H.createContext(null);function ly(r){let e=H.useContext(_i).outlet;return H.useMemo(()=>e&&H.createElement(ay.Provider,{value:r},e),[e,r])}function cy(){let{matches:r}=H.useContext(_i),e=r[r.length-1];return(e==null?void 0:e.params)??{}}function fa(r,{relative:e}={}){let{matches:t}=H.useContext(_i),{pathname:s}=Li(),o=JSON.stringify(L0(t));return H.useMemo(()=>Xf(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function uy(r,e){return j0(r,e)}function j0(r,e,t){var S;zt(da(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=H.useContext(ti),{matches:o}=H.useContext(_i),l=o[o.length-1],u=l?l.params:{},d=l?l.pathname:"/",h=l?l.pathnameBase:"/",m=l&&l.route;{let _=m&&m.path||"";G0(d,!m||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let g=Li(),v;if(e){let _=typeof e=="string"?fs(e):e;zt(h==="/"||((S=_.pathname)==null?void 0:S.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=g;let y=v.pathname||"/",E=y;if(h!=="/"){let _=h.replace(/^\//,"").split("/");E="/"+y.replace(/^\//,"").split("/").slice(_.length).join("/")}let M=t&&t.state.matches.length?t.state.matches.map(_=>Object.assign(_,{route:t.manifest[_.route.id]||_.route})):R0(r,{pathname:E});xi(m||M!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),xi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=my(M&&M.map(_=>Object.assign({},_,{params:Object.assign({},u,_.params),pathname:gi([h,s.encodeLocation?s.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?h:gi([h,s.encodeLocation?s.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),o,t);return e&&T?H.createElement(ua.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},T):T}function dy(){let r=yy(),e=Y_(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},u=null;return console.error("Error handled by React Router default ErrorBoundary:",r),u=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:l},"ErrorBoundary")," or"," ",H.createElement("code",{style:l},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:o},t):null,u)}var fy=H.createElement(dy,null),V0=class extends H.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=ry(r.digest);t&&(r=t)}let e=r!==void 0?H.createElement(_i.Provider,{value:this.props.routeContext},H.createElement(Yf.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?H.createElement(hy,{error:r},e):e}};V0.contextType=F0;var ud=new WeakMap;function hy({children:r,error:e}){let{basename:t}=H.useContext(ti);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=iy(e.digest);if(s){let o=ud.get(e);if(o)throw o;let l=N0(s.location,t),u=l.absoluteURL||l.to;if(Z_(u))throw new Error("Invalid redirect location");if(U0&&!ud.get(e))if(l.isExternal||s.reloadDocument)window.location.href=u;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw ud.set(e,d),d}return H.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u}`})}}return r}function py({routeContext:r,match:e,children:t}){let s=H.useContext(uo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(_i.Provider,{value:r},t)}function my(r,e=[],t){let s=t==null?void 0:t.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let o=r,l=s==null?void 0:s.errors;if(l!=null){let g=o.findIndex(v=>v.route.id&&(l==null?void 0:l[v.route.id])!==void 0);zt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let u=!1,d=-1;if(t&&s){u=s.renderFallback;for(let g=0;g<o.length;g++){let v=o[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(d=g),v.route.id){let{loaderData:y,errors:E}=s,M=v.route.loader&&!y.hasOwnProperty(v.route.id)&&(!E||E[v.route.id]===void 0);if(v.route.lazy||M){t.isStatic&&(u=!0),d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}}let h=t==null?void 0:t.onError,m=s&&h?(g,v)=>{var y,E;h(g,{location:s.location,params:((E=(y=s.matches)==null?void 0:y[0])==null?void 0:E.params)??{},pattern:$_(s.matches),errorInfo:v})}:void 0;return o.reduceRight((g,v,y)=>{let E,M=!1,T=null,S=null;s&&(E=l&&v.route.id?l[v.route.id]:void 0,T=v.route.errorElement||fy,u&&(d<0&&y===0?(G0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,S=null):d===y&&(M=!0,S=v.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,y+1)),U=()=>{let D;return E?D=T:M?D=S:v.route.Component?D=H.createElement(v.route.Component,null):v.route.element?D=v.route.element:D=g,H.createElement(py,{match:v,routeContext:{outlet:g,matches:_,isDataRoute:s!=null},children:D})};return s&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?H.createElement(V0,{location:s.location,revalidation:s.revalidation,component:T,error:E,children:U(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:m}):U()},null)}function $f(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gy(r){let e=H.useContext(uo);return zt(e,$f(r)),e}function vy(r){let e=H.useContext(xc);return zt(e,$f(r)),e}function xy(r){let e=H.useContext(_i);return zt(e,$f(r)),e}function qf(r){let e=xy(r),t=e.matches[e.matches.length-1];return zt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function _y(){return qf("useRouteId")}function yy(){var s;let r=H.useContext(Yf),e=vy("useRouteError"),t=qf("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function Sy(){let{router:r}=gy("useNavigate"),e=qf("useNavigate"),t=H.useRef(!1);return z0(()=>{t.current=!0}),H.useCallback(async(o,l={})=>{xi(t.current,B0),t.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var Ym={};function G0(r,e,t){!e&&!Ym[r]&&(Ym[r]=!0,xi(!1,t))}H.memo(Ey);function Ey({routes:r,manifest:e,future:t,state:s,isStatic:o,onError:l}){return j0(r,void 0,{manifest:e,state:s,isStatic:o,onError:l})}function My(r){return ly(r.context)}function ts(r){zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ty({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,useTransitions:u}){zt(!da(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),h=H.useMemo(()=>({basename:d,navigator:o,static:l,useTransitions:u,future:{}}),[d,o,l,u]);typeof t=="string"&&(t=fs(t));let{pathname:m="/",search:g="",hash:v="",state:y=null,key:E="default",mask:M}=t,T=H.useMemo(()=>{let S=Ji(m,d);return S==null?null:{location:{pathname:S,search:g,hash:v,state:y,key:E,mask:M},navigationType:s}},[d,m,g,v,y,E,s,M]);return xi(T!=null,`<Router basename="${d}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:H.createElement(ti.Provider,{value:h},H.createElement(ua.Provider,{children:e,value:T}))}function wy({children:r,location:e}){return uy(Zd(r),e)}function Zd(r,e=[]){let t=[];return H.Children.forEach(r,(s,o)=>{if(!H.isValidElement(s))return;let l=[...e,o];if(s.type===H.Fragment){t.push.apply(t,Zd(s.props.children,l));return}zt(s.type===ts,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),zt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let u={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=Zd(s.props.children,l)),t.push(u)}),t}var ic="get",rc="application/x-www-form-urlencoded";function _c(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Ry(r){return _c(r)&&r.tagName.toLowerCase()==="button"}function Cy(r){return _c(r)&&r.tagName.toLowerCase()==="form"}function Ay(r){return _c(r)&&r.tagName.toLowerCase()==="input"}function by(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Py(r,e){return r.button===0&&(!e||e==="_self")&&!by(r)}var Tl=null;function Ly(){if(Tl===null)try{new FormData(document.createElement("form"),0),Tl=!1}catch{Tl=!0}return Tl}var Dy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dd(r){return r!=null&&!Dy.has(r)?(xi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rc}"`),null):r}function Uy(r,e){let t,s,o,l,u;if(Cy(r)){let d=r.getAttribute("action");s=d?Ji(d,e):null,t=r.getAttribute("method")||ic,o=dd(r.getAttribute("enctype"))||rc,l=new FormData(r)}else if(Ry(r)||Ay(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||d.getAttribute("action");if(s=h?Ji(h,e):null,t=r.getAttribute("formmethod")||d.getAttribute("method")||ic,o=dd(r.getAttribute("formenctype"))||dd(d.getAttribute("enctype"))||rc,l=new FormData(d,r),!Ly()){let{name:m,type:g,value:v}=r;if(g==="image"){let y=m?`${m}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else m&&l.append(m,v)}}else{if(_c(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=ic,s=null,o=rc,u=r}return l&&o==="text/plain"&&(u=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function W0(r,e,t,s){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:e&&Ji(o.pathname,e)==="/"?o.pathname=`${hc(e)}/_root.${s}`:o.pathname=`${hc(o.pathname)}.${s}`,o}async function Ny(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Iy(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Fy(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let u=await Ny(l,t);return u.links?u.links():[]}return[]}));return zy(s.flat(1).filter(Iy).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function $m(r,e,t,s,o,l){let u=(h,m)=>t[m]?h.route.id!==t[m].route.id:!0,d=(h,m)=>{var g;return t[m].pathname!==h.pathname||((g=t[m].route.path)==null?void 0:g.endsWith("*"))&&t[m].params["*"]!==h.params["*"]};return l==="assets"?e.filter((h,m)=>u(h,m)||d(h,m)):l==="data"?e.filter((h,m)=>{var v;let g=s.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(u(h,m)||d(h,m))return!0;if(h.route.shouldRevalidate){let y=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function ky(r,e,{includeHydrateFallback:t}={}){return Oy(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Oy(r){return[...new Set(r)]}function By(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function zy(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(By(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function Zf(){let r=H.useContext(uo);return Kf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Hy(){let r=H.useContext(xc);return Kf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Qf=H.createContext(void 0);Qf.displayName="FrameworkContext";function yc(){let r=H.useContext(Qf);return Kf(r,"You must render this element inside a <HydratedRouter> element"),r}function jy(r,e){let t=H.useContext(Qf),[s,o]=H.useState(!1),[l,u]=H.useState(!1),{onFocus:d,onBlur:h,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=e,y=H.useRef(null);H.useEffect(()=>{if(r==="render"&&u(!0),r==="viewport"){let T=_=>{_.forEach(U=>{u(U.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return y.current&&S.observe(y.current),()=>{S.disconnect()}}},[r]),H.useEffect(()=>{if(s){let T=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(T)}}},[s]);let E=()=>{o(!0)},M=()=>{o(!1),u(!1)};return t?r!=="intent"?[l,y,{}]:[l,y,{onFocus:qo(d,E),onBlur:qo(h,M),onMouseEnter:qo(m,E),onMouseLeave:qo(g,M),onTouchStart:qo(v,E)}]:[!1,y,{}]}function qo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function Vy({page:r,...e}){let t=Q_(),{nonce:s}=yc(),{router:o}=Zf(),l=H.useMemo(()=>R0(o.routes,r,o.basename),[o.routes,r,o.basename]);return l?(e.nonce==null&&s&&(e={...e,nonce:s}),t?H.createElement(Wy,{page:r,matches:l,...e}):H.createElement(Xy,{page:r,matches:l,...e})):null}function Gy(r){let{manifest:e,routeModules:t}=yc(),[s,o]=H.useState([]);return H.useEffect(()=>{let l=!1;return Fy(r,e,t).then(u=>{l||o(u)}),()=>{l=!0}},[r,e,t]),s}function Wy({page:r,matches:e,...t}){let s=Li(),{future:o}=yc(),{basename:l}=Zf(),u=H.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let d=W0(r,l,o.v8_trailingSlashAwareDataRequests,"rsc"),h=!1,m=[];for(let g of e)typeof g.route.shouldRevalidate=="function"?h=!0:m.push(g.route.id);return h&&m.length>0&&d.searchParams.set("_routes",m.join(",")),[d.pathname+d.search]},[l,o.v8_trailingSlashAwareDataRequests,r,s,e]);return H.createElement(H.Fragment,null,u.map(d=>H.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...t})))}function Xy({page:r,matches:e,...t}){let s=Li(),{future:o,manifest:l,routeModules:u}=yc(),{basename:d}=Zf(),{loaderData:h,matches:m}=Hy(),g=H.useMemo(()=>$m(r,e,m,l,s,"data"),[r,e,m,l,s]),v=H.useMemo(()=>$m(r,e,m,l,s,"assets"),[r,e,m,l,s]),y=H.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let T=new Set,S=!1;if(e.forEach(U=>{var P;let D=l.routes[U.route.id];!D||!D.hasLoader||(!g.some(Y=>Y.route.id===U.route.id)&&U.route.id in h&&((P=u[U.route.id])!=null&&P.shouldRevalidate)||D.hasClientLoader?S=!0:T.add(U.route.id))}),T.size===0)return[];let _=W0(r,d,o.v8_trailingSlashAwareDataRequests,"data");return S&&T.size>0&&_.searchParams.set("_routes",e.filter(U=>T.has(U.route.id)).map(U=>U.route.id).join(",")),[_.pathname+_.search]},[d,o.v8_trailingSlashAwareDataRequests,h,s,l,g,e,r,u]),E=H.useMemo(()=>ky(v,l),[v,l]),M=Gy(v);return H.createElement(H.Fragment,null,y.map(T=>H.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...t})),E.map(T=>H.createElement("link",{key:T,rel:"modulepreload",href:T,...t})),M.map(({key:T,link:S})=>H.createElement("link",{key:T,nonce:t.nonce,...S,crossOrigin:S.crossOrigin??t.crossOrigin})))}function Yy(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var $y=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$y&&(window.__reactRouterVersion="7.18.1")}catch{}function qy({basename:r,children:e,useTransitions:t,window:s}){let o=H.useRef();o.current==null&&(o.current=T_({window:s,v5Compat:!0}));let l=o.current,[u,d]=H.useState({action:l.action,location:l.location}),h=H.useCallback(m=>{t===!1?d(m):H.startTransition(()=>d(m))},[t]);return H.useLayoutEffect(()=>l.listen(h),[l,h]),H.createElement(Ty,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:l,useTransitions:t})}var an=H.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:u,mask:d,state:h,target:m,to:g,preventScrollReset:v,viewTransition:y,defaultShouldRevalidate:E,...M},T){let{basename:S,navigator:_,useTransitions:U}=H.useContext(ti),D=typeof g=="string"&&Wf.test(g),P=N0(g,S);g=P.to;let Y=sy(g,{relative:o}),B=Li(),b=null;if(d){let te=Xf(d,[],B.mask?B.mask.pathname:"/",!0);S!=="/"&&(te.pathname=te.pathname==="/"?S:gi([S,te.pathname])),b=_.createHref(te)}let[I,L,C]=jy(s,M),V=Qy(g,{replace:u,mask:d,state:h,target:m,preventScrollReset:v,relative:o,viewTransition:y,defaultShouldRevalidate:E,useTransitions:U});function de(te){e&&e(te),te.defaultPrevented||V(te)}let G=!(P.isExternal||l),re=H.createElement("a",{...M,...C,href:(G?b:void 0)||P.absoluteURL||Y,onClick:G?de:e,ref:Yy(T,L),target:m,"data-discover":!D&&t==="render"?"true":void 0});return I&&!D?H.createElement(H.Fragment,null,re,H.createElement(Vy,{page:Y})):re});an.displayName="Link";var Qd=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:d,children:h,...m},g){let v=fa(u,{relative:m.relative}),y=Li(),E=H.useContext(xc),{navigator:M,basename:T}=H.useContext(ti),S=E!=null&&iS(v)&&d===!0,_=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,U=y.pathname,D=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;t||(U=U.toLowerCase(),D=D?D.toLowerCase():null,_=_.toLowerCase()),D&&T&&(D=Ji(D,T)||D);const P=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let Y=U===_||!o&&U.startsWith(_)&&U.charAt(P)==="/",B=D!=null&&(D===_||!o&&D.startsWith(_)&&D.charAt(_.length)==="/"),b={isActive:Y,isPending:B,isTransitioning:S},I=Y?e:void 0,L;typeof s=="function"?L=s(b):L=[s,Y?"active":null,B?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(b):l;return H.createElement(an,{...m,"aria-current":I,className:L,ref:g,style:C,to:u,viewTransition:d},typeof h=="function"?h(b):h)});Qd.displayName="NavLink";var Ky=H.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:u=ic,action:d,onSubmit:h,relative:m,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:y,...E},M)=>{let{useTransitions:T}=H.useContext(ti),S=tS(),_=nS(d,{relative:m}),U=u.toLowerCase()==="get"?"get":"post",D=typeof d=="string"&&Wf.test(d),P=Y=>{if(h&&h(Y),Y.defaultPrevented)return;Y.preventDefault();let B=Y.nativeEvent.submitter,b=(B==null?void 0:B.getAttribute("formmethod"))||u,I=()=>S(B||Y.currentTarget,{fetcherKey:e,method:b,navigate:t,replace:o,state:l,relative:m,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:y});T&&t!==!1?H.startTransition(()=>I()):I()};return H.createElement("form",{ref:M,method:U,action:_,onSubmit:s?h:P,...E,"data-discover":!D&&r==="render"?"true":void 0})});Ky.displayName="Form";function Zy(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function X0(r){let e=H.useContext(uo);return zt(e,Zy(r)),e}function Qy(r,{target:e,replace:t,mask:s,state:o,preventScrollReset:l,relative:u,viewTransition:d,defaultShouldRevalidate:h,useTransitions:m}={}){let g=H0(),v=Li(),y=fa(r,{relative:u});return H.useCallback(E=>{if(Py(E,e)){E.preventDefault();let M=t!==void 0?t:la(v)===la(y),T=()=>g(r,{replace:M,mask:s,state:o,preventScrollReset:l,relative:u,viewTransition:d,defaultShouldRevalidate:h});m?H.startTransition(()=>T()):T()}},[v,g,y,t,s,o,e,r,l,u,d,h,m])}var Jy=0,eS=()=>`__${String(++Jy)}__`;function tS(){let{router:r}=X0("useSubmit"),{basename:e}=H.useContext(ti),t=_y(),s=r.fetch,o=r.navigate;return H.useCallback(async(l,u={})=>{let{action:d,method:h,encType:m,formData:g,body:v}=Uy(l,e);if(u.navigate===!1){let y=u.fetcherKey||eS();await s(y,t,u.action||d,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:v,formMethod:u.method||h,formEncType:u.encType||m,flushSync:u.flushSync})}else await o(u.action||d,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:v,formMethod:u.method||h,formEncType:u.encType||m,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[s,o,e,t])}function nS(r,{relative:e}={}){let{basename:t}=H.useContext(ti),s=H.useContext(_i);zt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...fa(r||".",{relative:e})},u=Li();if(r==null){l.search=u.search;let d=new URLSearchParams(l.search),h=d.getAll("index");if(h.some(g=>g==="")){d.delete("index"),h.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();l.search=g?`?${g}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:gi([t,l.pathname])),la(l)}function iS(r,{relative:e}={}){let t=H.useContext(k0);zt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=X0("useViewTransitionState"),o=fa(r,{relative:e});if(!t.isTransitioning)return!1;let l=Ji(t.currentLocation.pathname,s)||t.currentLocation.pathname,u=Ji(t.nextLocation.pathname,s)||t.nextLocation.pathname;return fc(o.pathname,u)!=null||fc(o.pathname,l)!=null}const rS=[{to:"/chapter/intro",label:"入门科普"},{to:"/chapter/compose",label:"核心章节"},{to:"/playground",label:"实操训练"},{to:"/archive",label:"数学档案馆"}];function sS(){const r={fontSize:"0.85rem",fontWeight:500,textDecoration:"none",color:"var(--ink2)",transition:"color 0.2s"};return f.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",height:"3.5rem",padding:"0 1.5rem",background:"rgba(255,255,255,0.7)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",borderBottom:"1px solid var(--rule)"},children:[f.jsx(Qd,{to:"/",style:{fontSize:"1.1rem",fontWeight:700,letterSpacing:"-0.02em",color:"var(--ink)",textDecoration:"none"},children:"Cube × Math"}),f.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1.5rem"},children:rS.map(({to:e,label:t})=>f.jsx(Qd,{to:e,end:!0,style:({isActive:s})=>({...r,color:s?"var(--ink)":"var(--ink2)",position:"relative",...s?{fontWeight:600}:{}}),children:t},e))})]})}function oS(){return f.jsx("footer",{children:"Cube * Math - 用数学思维理解魔方"})}function aS(){return f.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[f.jsx(sS,{}),f.jsx("main",{style:{paddingTop:"3.75rem",flex:1},children:f.jsx(My,{})}),f.jsx(oS,{})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="170",lS=0,qm=1,cS=2,Y0=1,uS=2,$i=3,Dr=0,Un=1,qi=2,Pr=0,to=1,Km=2,Zm=3,Qm=4,dS=5,ss=100,fS=101,hS=102,pS=103,mS=104,gS=200,vS=201,xS=202,_S=203,Jd=204,ef=205,yS=206,SS=207,ES=208,MS=209,TS=210,wS=211,RS=212,CS=213,AS=214,tf=0,nf=1,rf=2,ro=3,sf=4,of=5,af=6,lf=7,$0=0,bS=1,PS=2,Lr=0,LS=1,DS=2,US=3,NS=4,IS=5,FS=6,kS=7,q0=300,so=301,oo=302,cf=303,uf=304,Sc=306,df=1e3,as=1001,ff=1002,vi=1003,OS=1004,wl=1005,Ci=1006,fd=1007,ls=1008,er=1009,K0=1010,Z0=1011,ca=1012,eh=1013,us=1014,Ki=1015,ha=1016,th=1017,nh=1018,ao=1020,Q0=35902,J0=1021,ev=1022,pi=1023,tv=1024,nv=1025,no=1026,lo=1027,iv=1028,ih=1029,rv=1030,rh=1031,sh=1033,sc=33776,oc=33777,ac=33778,lc=33779,hf=35840,pf=35841,mf=35842,gf=35843,vf=36196,xf=37492,_f=37496,yf=37808,Sf=37809,Ef=37810,Mf=37811,Tf=37812,wf=37813,Rf=37814,Cf=37815,Af=37816,bf=37817,Pf=37818,Lf=37819,Df=37820,Uf=37821,cc=36492,Nf=36494,If=36495,sv=36283,Ff=36284,kf=36285,Of=36286,BS=3200,zS=3201,ov=0,HS=1,br="",Qn="srgb",fo="srgb-linear",Ec="linear",Pt="srgb",ks=7680,Jm=519,jS=512,VS=513,GS=514,av=515,WS=516,XS=517,YS=518,$S=519,eg=35044,tg="300 es",Zi=2e3,pc=2001;class ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uc=Math.PI/180,Bf=180/Math.PI;function pa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]).toLowerCase()}function Ln(r,e,t){return Math.max(e,Math.min(t,r))}function qS(r,e){return(r%e+e)%e}function hd(r,e,t){return(1-t)*r+t*e}function Ko(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,s,o,l,u,d,h,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,d,h,m)}set(e,t,s,o,l,u,d,h,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],d=s[3],h=s[6],m=s[1],g=s[4],v=s[7],y=s[2],E=s[5],M=s[8],T=o[0],S=o[3],_=o[6],U=o[1],D=o[4],P=o[7],Y=o[2],B=o[5],b=o[8];return l[0]=u*T+d*U+h*Y,l[3]=u*S+d*D+h*B,l[6]=u*_+d*P+h*b,l[1]=m*T+g*U+v*Y,l[4]=m*S+g*D+v*B,l[7]=m*_+g*P+v*b,l[2]=y*T+E*U+M*Y,l[5]=y*S+E*D+M*B,l[8]=y*_+E*P+M*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],g=e[8];return t*u*g-t*d*m-s*l*g+s*d*h+o*l*m-o*u*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],g=e[8],v=g*u-d*m,y=d*h-g*l,E=m*l-u*h,M=t*v+s*y+o*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(o*m-g*s)*T,e[2]=(d*s-o*u)*T,e[3]=y*T,e[4]=(g*t-o*h)*T,e[5]=(o*l-d*t)*T,e[6]=E*T,e[7]=(s*h-m*t)*T,e[8]=(u*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,d){const h=Math.cos(l),m=Math.sin(l);return this.set(s*h,s*m,-s*(h*u+m*d)+u+e,-o*m,o*h,-o*(-m*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(pd.makeScale(e,t)),this}rotate(e){return this.premultiply(pd.makeRotation(-e)),this}translate(e,t){return this.premultiply(pd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pd=new dt;function lv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function mc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function KS(){const r=mc("canvas");return r.style.display="block",r}const ng={};function na(r){r in ng||(ng[r]=!0,console.warn(r))}function ZS(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function QS(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function JS(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(r.r=Qi(r.r),r.g=Qi(r.g),r.b=Qi(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(r.r=io(r.r),r.g=io(r.g),r.b=io(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===br?Ec:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function io(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ig=[.64,.33,.3,.6,.15,.06],rg=[.2126,.7152,.0722],sg=[.3127,.329],og=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ag=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[fo]:{primaries:ig,whitePoint:sg,transfer:Ec,toXYZ:og,fromXYZ:ag,luminanceCoefficients:rg,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:ig,whitePoint:sg,transfer:Pt,toXYZ:og,fromXYZ:ag,luminanceCoefficients:rg,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}});let Os;class eE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=mc("canvas")),Os.width=e.width,Os.height=e.height;const s=Os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Qi(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Qi(t[s]/255)*255):t[s]=Qi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tE=0;class cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=pa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(md(o[u].image)):l.push(md(o[u]))}else l=md(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function md(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?eE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nE=0;class Nn extends ho{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,s=as,o=as,l=Ci,u=ls,d=pi,h=er,m=Nn.DEFAULT_ANISOTROPY,g=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=pa(),this.name="",this.source=new cv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case df:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case df:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=q0;Nn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,s=0,o=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,m=h[0],g=h[4],v=h[8],y=h[1],E=h[5],M=h[9],T=h[2],S=h[6],_=h[10];if(Math.abs(g-y)<.01&&Math.abs(v-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+T)<.1&&Math.abs(M+S)<.1&&Math.abs(m+E+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(m+1)/2,P=(E+1)/2,Y=(_+1)/2,B=(g+y)/4,b=(v+T)/4,I=(M+S)/4;return D>P&&D>Y?D<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(D),o=B/s,l=b/s):P>Y?P<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),s=B/o,l=I/o):Y<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(Y),s=b/l,o=I/l),this.set(s,o,l,t),this}let U=Math.sqrt((S-M)*(S-M)+(v-T)*(v-T)+(y-g)*(y-g));return Math.abs(U)<.001&&(U=1),this.x=(S-M)/U,this.y=(v-T)/U,this.z=(y-g)/U,this.w=Math.acos((m+E+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iE extends ho{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const o={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Nn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends iE{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class uv extends Nn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=vi,this.minFilter=vi,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rE extends Nn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=vi,this.minFilter=vi,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ma{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,d){let h=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];const y=l[u+0],E=l[u+1],M=l[u+2],T=l[u+3];if(d===0){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d===1){e[t+0]=y,e[t+1]=E,e[t+2]=M,e[t+3]=T;return}if(v!==T||h!==y||m!==E||g!==M){let S=1-d;const _=h*y+m*E+g*M+v*T,U=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const Y=Math.sqrt(D),B=Math.atan2(Y,_*U);S=Math.sin(S*B)/Y,d=Math.sin(d*B)/Y}const P=d*U;if(h=h*S+y*P,m=m*S+E*P,g=g*S+M*P,v=v*S+T*P,S===1-d){const Y=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=Y,m*=Y,g*=Y,v*=Y}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,o,l,u){const d=s[o],h=s[o+1],m=s[o+2],g=s[o+3],v=l[u],y=l[u+1],E=l[u+2],M=l[u+3];return e[t]=d*M+g*v+h*E-m*y,e[t+1]=h*M+g*y+m*v-d*E,e[t+2]=m*M+g*E+d*y-h*v,e[t+3]=g*M-d*v-h*y-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,m=d(s/2),g=d(o/2),v=d(l/2),y=h(s/2),E=h(o/2),M=h(l/2);switch(u){case"XYZ":this._x=y*g*v+m*E*M,this._y=m*E*v-y*g*M,this._z=m*g*M+y*E*v,this._w=m*g*v-y*E*M;break;case"YXZ":this._x=y*g*v+m*E*M,this._y=m*E*v-y*g*M,this._z=m*g*M-y*E*v,this._w=m*g*v+y*E*M;break;case"ZXY":this._x=y*g*v-m*E*M,this._y=m*E*v+y*g*M,this._z=m*g*M+y*E*v,this._w=m*g*v-y*E*M;break;case"ZYX":this._x=y*g*v-m*E*M,this._y=m*E*v+y*g*M,this._z=m*g*M-y*E*v,this._w=m*g*v+y*E*M;break;case"YZX":this._x=y*g*v+m*E*M,this._y=m*E*v+y*g*M,this._z=m*g*M-y*E*v,this._w=m*g*v-y*E*M;break;case"XZY":this._x=y*g*v-m*E*M,this._y=m*E*v-y*g*M,this._z=m*g*M+y*E*v,this._w=m*g*v+y*E*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],d=t[5],h=t[9],m=t[2],g=t[6],v=t[10],y=s+d+v;if(y>0){const E=.5/Math.sqrt(y+1);this._w=.25/E,this._x=(g-h)*E,this._y=(l-m)*E,this._z=(u-o)*E}else if(s>d&&s>v){const E=2*Math.sqrt(1+s-d-v);this._w=(g-h)/E,this._x=.25*E,this._y=(o+u)/E,this._z=(l+m)/E}else if(d>v){const E=2*Math.sqrt(1+d-s-v);this._w=(l-m)/E,this._x=(o+u)/E,this._y=.25*E,this._z=(h+g)/E}else{const E=2*Math.sqrt(1+v-s-d);this._w=(u-o)/E,this._x=(l+m)/E,this._y=(h+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,d=t._x,h=t._y,m=t._z,g=t._w;return this._x=s*g+u*d+o*m-l*h,this._y=o*g+u*h+l*d-s*m,this._z=l*g+u*m+s*h-o*d,this._w=u*g-s*d-o*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+s*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=s,this._y=o,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const E=1-t;return this._w=E*u+t*this._w,this._x=E*s+t*this._x,this._y=E*o+t*this._y,this._z=E*l+t*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,d),v=Math.sin((1-t)*g)/m,y=Math.sin(t*g)/m;return this._w=u*v+this._w*y,this._x=s*v+this._x*y,this._y=o*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,s=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,m=2*(u*o-d*s),g=2*(d*t-l*o),v=2*(l*s-u*t);return this.x=t+h*m+u*v-d*g,this.y=s+h*g+d*m-l*v,this.z=o+h*v+l*g-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=o*h-l*d,this.y=l*u-s*h,this.z=s*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return gd.copy(this).projectOnVector(e),this.sub(gd)}reflect(e){return this.sub(gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gd=new ie,lg=new ma;class ga{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ui):ui.fromBufferAttribute(l,u),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rl.copy(s.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Cl.subVectors(this.max,Zo),Bs.subVectors(e.a,Zo),zs.subVectors(e.b,Zo),Hs.subVectors(e.c,Zo),Mr.subVectors(zs,Bs),Tr.subVectors(Hs,zs),$r.subVectors(Bs,Hs);let t=[0,-Mr.z,Mr.y,0,-Tr.z,Tr.y,0,-$r.z,$r.y,Mr.z,0,-Mr.x,Tr.z,0,-Tr.x,$r.z,0,-$r.x,-Mr.y,Mr.x,0,-Tr.y,Tr.x,0,-$r.y,$r.x,0];return!vd(t,Bs,zs,Hs,Cl)||(t=[1,0,0,0,1,0,0,0,1],!vd(t,Bs,zs,Hs,Cl))?!1:(Al.crossVectors(Mr,Tr),t=[Al.x,Al.y,Al.z],vd(t,Bs,zs,Hs,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],ui=new ie,Rl=new ga,Bs=new ie,zs=new ie,Hs=new ie,Mr=new ie,Tr=new ie,$r=new ie,Zo=new ie,Cl=new ie,Al=new ie,qr=new ie;function vd(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){qr.fromArray(r,l);const d=o.x*Math.abs(qr.x)+o.y*Math.abs(qr.y)+o.z*Math.abs(qr.z),h=e.dot(qr),m=t.dot(qr),g=s.dot(qr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>d)return!1}return!0}const sE=new ga,Qo=new ie,xd=new ie;class Mc{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):sE.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const t=Qo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Qo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(xd)),this.expandByPoint(Qo.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new ie,_d=new ie,bl=new ie,wr=new ie,yd=new ie,Pl=new ie,Sd=new ie;class oh{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){_d.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(_d);const l=e.distanceTo(t)*.5,u=-this.direction.dot(bl),d=wr.dot(this.direction),h=-wr.dot(bl),m=wr.lengthSq(),g=Math.abs(1-u*u);let v,y,E,M;if(g>0)if(v=u*h-d,y=u*d-h,M=l*g,v>=0)if(y>=-M)if(y<=M){const T=1/g;v*=T,y*=T,E=v*(v+u*y+2*d)+y*(u*v+y+2*h)+m}else y=l,v=Math.max(0,-(u*y+d)),E=-v*v+y*(y+2*h)+m;else y=-l,v=Math.max(0,-(u*y+d)),E=-v*v+y*(y+2*h)+m;else y<=-M?(v=Math.max(0,-(-u*l+d)),y=v>0?-l:Math.min(Math.max(-l,-h),l),E=-v*v+y*(y+2*h)+m):y<=M?(v=0,y=Math.min(Math.max(-l,-h),l),E=y*(y+2*h)+m):(v=Math.max(0,-(u*l+d)),y=v>0?l:Math.min(Math.max(-l,-h),l),E=-v*v+y*(y+2*h)+m);else y=u>0?-l:l,v=Math.max(0,-(u*y+d)),E=-v*v+y*(y+2*h)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(_d).addScaledVector(bl,y),E}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const s=Gi.dot(this.direction),o=Gi.dot(Gi)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=s-u,h=s+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,d,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),g>=0?(l=(e.min.y-y.y)*g,u=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,u=(e.min.y-y.y)*g),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-y.z)*v,h=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,h=(e.min.z-y.z)*v),s>h||d>o)||((d>s||s!==s)&&(s=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,s,o,l){yd.subVectors(t,e),Pl.subVectors(s,e),Sd.crossVectors(yd,Pl);let u=this.direction.dot(Sd),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;wr.subVectors(this.origin,e);const h=d*this.direction.dot(Pl.crossVectors(wr,Pl));if(h<0)return null;const m=d*this.direction.dot(yd.cross(wr));if(m<0||h+m>u)return null;const g=-d*wr.dot(Sd);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,s,o,l,u,d,h,m,g,v,y,E,M,T,S){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,d,h,m,g,v,y,E,M,T,S)}set(e,t,s,o,l,u,d,h,m,g,v,y,E,M,T,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=o,_[1]=l,_[5]=u,_[9]=d,_[13]=h,_[2]=m,_[6]=g,_[10]=v,_[14]=y,_[3]=E,_[7]=M,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/js.setFromMatrixColumn(e,0).length(),l=1/js.setFromMatrixColumn(e,1).length(),u=1/js.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),d=Math.sin(s),h=Math.cos(o),m=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*g,E=u*v,M=d*g,T=d*v;t[0]=h*g,t[4]=-h*v,t[8]=m,t[1]=E+M*m,t[5]=y-T*m,t[9]=-d*h,t[2]=T-y*m,t[6]=M+E*m,t[10]=u*h}else if(e.order==="YXZ"){const y=h*g,E=h*v,M=m*g,T=m*v;t[0]=y+T*d,t[4]=M*d-E,t[8]=u*m,t[1]=u*v,t[5]=u*g,t[9]=-d,t[2]=E*d-M,t[6]=T+y*d,t[10]=u*h}else if(e.order==="ZXY"){const y=h*g,E=h*v,M=m*g,T=m*v;t[0]=y-T*d,t[4]=-u*v,t[8]=M+E*d,t[1]=E+M*d,t[5]=u*g,t[9]=T-y*d,t[2]=-u*m,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const y=u*g,E=u*v,M=d*g,T=d*v;t[0]=h*g,t[4]=M*m-E,t[8]=y*m+T,t[1]=h*v,t[5]=T*m+y,t[9]=E*m-M,t[2]=-m,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const y=u*h,E=u*m,M=d*h,T=d*m;t[0]=h*g,t[4]=T-y*v,t[8]=M*v+E,t[1]=v,t[5]=u*g,t[9]=-d*g,t[2]=-m*g,t[6]=E*v+M,t[10]=y-T*v}else if(e.order==="XZY"){const y=u*h,E=u*m,M=d*h,T=d*m;t[0]=h*g,t[4]=-v,t[8]=m*g,t[1]=y*v+T,t[5]=u*g,t[9]=E*v-M,t[2]=M*v-E,t[6]=d*g,t[10]=T*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oE,e,aE)}lookAt(e,t,s){const o=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Rr.crossVectors(s,Bn),Rr.lengthSq()===0&&(Math.abs(s.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Rr.crossVectors(s,Bn)),Rr.normalize(),Ll.crossVectors(Bn,Rr),o[0]=Rr.x,o[4]=Ll.x,o[8]=Bn.x,o[1]=Rr.y,o[5]=Ll.y,o[9]=Bn.y,o[2]=Rr.z,o[6]=Ll.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],d=s[4],h=s[8],m=s[12],g=s[1],v=s[5],y=s[9],E=s[13],M=s[2],T=s[6],S=s[10],_=s[14],U=s[3],D=s[7],P=s[11],Y=s[15],B=o[0],b=o[4],I=o[8],L=o[12],C=o[1],V=o[5],de=o[9],G=o[13],re=o[2],te=o[6],z=o[10],Z=o[14],O=o[3],ae=o[7],ue=o[11],k=o[15];return l[0]=u*B+d*C+h*re+m*O,l[4]=u*b+d*V+h*te+m*ae,l[8]=u*I+d*de+h*z+m*ue,l[12]=u*L+d*G+h*Z+m*k,l[1]=g*B+v*C+y*re+E*O,l[5]=g*b+v*V+y*te+E*ae,l[9]=g*I+v*de+y*z+E*ue,l[13]=g*L+v*G+y*Z+E*k,l[2]=M*B+T*C+S*re+_*O,l[6]=M*b+T*V+S*te+_*ae,l[10]=M*I+T*de+S*z+_*ue,l[14]=M*L+T*G+S*Z+_*k,l[3]=U*B+D*C+P*re+Y*O,l[7]=U*b+D*V+P*te+Y*ae,l[11]=U*I+D*de+P*z+Y*ue,l[15]=U*L+D*G+P*Z+Y*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],m=e[13],g=e[2],v=e[6],y=e[10],E=e[14],M=e[3],T=e[7],S=e[11],_=e[15];return M*(+l*h*v-o*m*v-l*d*y+s*m*y+o*d*E-s*h*E)+T*(+t*h*E-t*m*y+l*u*y-o*u*E+o*m*g-l*h*g)+S*(+t*m*v-t*d*E-l*u*v+s*u*E+l*d*g-s*m*g)+_*(-o*d*g-t*h*v+t*d*y+o*u*v-s*u*y+s*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],g=e[8],v=e[9],y=e[10],E=e[11],M=e[12],T=e[13],S=e[14],_=e[15],U=v*S*m-T*y*m+T*h*E-d*S*E-v*h*_+d*y*_,D=M*y*m-g*S*m-M*h*E+u*S*E+g*h*_-u*y*_,P=g*T*m-M*v*m+M*d*E-u*T*E-g*d*_+u*v*_,Y=M*v*h-g*T*h-M*d*y+u*T*y+g*d*S-u*v*S,B=t*U+s*D+o*P+l*Y;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/B;return e[0]=U*b,e[1]=(T*y*l-v*S*l-T*o*E+s*S*E+v*o*_-s*y*_)*b,e[2]=(d*S*l-T*h*l+T*o*m-s*S*m-d*o*_+s*h*_)*b,e[3]=(v*h*l-d*y*l-v*o*m+s*y*m+d*o*E-s*h*E)*b,e[4]=D*b,e[5]=(g*S*l-M*y*l+M*o*E-t*S*E-g*o*_+t*y*_)*b,e[6]=(M*h*l-u*S*l-M*o*m+t*S*m+u*o*_-t*h*_)*b,e[7]=(u*y*l-g*h*l+g*o*m-t*y*m-u*o*E+t*h*E)*b,e[8]=P*b,e[9]=(M*v*l-g*T*l-M*s*E+t*T*E+g*s*_-t*v*_)*b,e[10]=(u*T*l-M*d*l+M*s*m-t*T*m-u*s*_+t*d*_)*b,e[11]=(g*d*l-u*v*l-g*s*m+t*v*m+u*s*E-t*d*E)*b,e[12]=Y*b,e[13]=(g*T*o-M*v*o+M*s*y-t*T*y-g*s*S+t*v*S)*b,e[14]=(M*d*o-u*T*o-M*s*h+t*T*h+u*s*S-t*d*S)*b,e[15]=(u*v*o-g*d*o+g*s*h-t*v*h-u*s*y+t*d*y)*b,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,d=e.y,h=e.z,m=l*u,g=l*d;return this.set(m*u+s,m*d-o*h,m*h+o*d,0,m*d+o*h,g*d+s,g*h-o*u,0,m*h-o*d,g*h+o*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,m=l+l,g=u+u,v=d+d,y=l*m,E=l*g,M=l*v,T=u*g,S=u*v,_=d*v,U=h*m,D=h*g,P=h*v,Y=s.x,B=s.y,b=s.z;return o[0]=(1-(T+_))*Y,o[1]=(E+P)*Y,o[2]=(M-D)*Y,o[3]=0,o[4]=(E-P)*B,o[5]=(1-(y+_))*B,o[6]=(S+U)*B,o[7]=0,o[8]=(M+D)*b,o[9]=(S-U)*b,o[10]=(1-(y+T))*b,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=js.set(o[0],o[1],o[2]).length();const u=js.set(o[4],o[5],o[6]).length(),d=js.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],di.copy(this);const m=1/l,g=1/u,v=1/d;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=v,di.elements[9]*=v,di.elements[10]*=v,t.setFromRotationMatrix(di),s.x=l,s.y=u,s.z=d,this}makePerspective(e,t,s,o,l,u,d=Zi){const h=this.elements,m=2*l/(t-e),g=2*l/(s-o),v=(t+e)/(t-e),y=(s+o)/(s-o);let E,M;if(d===Zi)E=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(d===pc)E=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,u,d=Zi){const h=this.elements,m=1/(t-e),g=1/(s-o),v=1/(u-l),y=(t+e)*m,E=(s+o)*g;let M,T;if(d===Zi)M=(u+l)*v,T=-2*v;else if(d===pc)M=l*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-E,h[2]=0,h[6]=0,h[10]=T,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const js=new ie,di=new kt,oE=new ie(0,0,0),aE=new ie(1,1,1),Rr=new ie,Ll=new ie,Bn=new ie,cg=new kt,ug=new ma;class Pi{constructor(e=0,t=0,s=0,o=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],m=o[5],g=o[9],v=o[2],y=o[6],E=o[10];switch(t){case"XYZ":this._y=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Ln(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,E),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return cg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ug.setFromEuler(this),this.setFromQuaternion(ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lE=0;const dg=new ie,Vs=new ma,Wi=new kt,Dl=new ie,Jo=new ie,cE=new ie,uE=new ma,fg=new ie(1,0,0),hg=new ie(0,1,0),pg=new ie(0,0,1),mg={type:"added"},dE={type:"removed"},Gs={type:"childadded",child:null},Ed={type:"childremoved",child:null};class rn extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new ie,t=new Pi,s=new ma,o=new ie(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new kt},normalMatrix:{value:new dt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(fg,e)}rotateY(e){return this.rotateOnAxis(hg,e)}rotateZ(e){return this.rotateOnAxis(pg,e)}translateOnAxis(e,t){return dg.copy(e).applyQuaternion(this.quaternion),this.position.add(dg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fg,e)}translateY(e){return this.translateOnAxis(hg,e)}translateZ(e){return this.translateOnAxis(pg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Dl.copy(e):Dl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Jo,Dl,this.up):Wi.lookAt(Dl,Jo,this.up),this.quaternion.setFromRotationMatrix(Wi),o&&(Wi.extractRotation(o.matrixWorld),Vs.setFromRotationMatrix(Wi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dE),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,cE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,uE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),m=u(e.textures),g=u(e.images),v=u(e.shapes),y=u(e.skeletons),E=u(e.animations),M=u(e.nodes);d.length>0&&(s.geometries=d),h.length>0&&(s.materials=h),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),E.length>0&&(s.animations=E),M.length>0&&(s.nodes=M)}return s.object=o,s;function u(d){const h=[];for(const m in d){const g=d[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}rn.DEFAULT_UP=new ie(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new ie,Xi=new ie,Md=new ie,Yi=new ie,Ws=new ie,Xs=new ie,gg=new ie,Td=new ie,wd=new ie,Rd=new ie,Cd=new jt,Ad=new jt,bd=new jt;class ei{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),fi.subVectors(e,t),o.cross(fi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){fi.subVectors(o,t),Xi.subVectors(s,t),Md.subVectors(e,t);const u=fi.dot(fi),d=fi.dot(Xi),h=fi.dot(Md),m=Xi.dot(Xi),g=Xi.dot(Md),v=u*m-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,E=(m*h-d*g)*y,M=(u*g-d*h)*y;return l.set(1-E-M,M,E)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,s,o,l,u,d,h){return this.getBarycoord(e,t,s,o,Yi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Yi.x),h.addScaledVector(u,Yi.y),h.addScaledVector(d,Yi.z),h)}static getInterpolatedAttribute(e,t,s,o,l,u){return Cd.setScalar(0),Ad.setScalar(0),bd.setScalar(0),Cd.fromBufferAttribute(e,t),Ad.fromBufferAttribute(e,s),bd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Cd,l.x),u.addScaledVector(Ad,l.y),u.addScaledVector(bd,l.z),u}static isFrontFacing(e,t,s,o){return fi.subVectors(s,t),Xi.subVectors(e,t),fi.cross(Xi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),fi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return ei.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,d;Ws.subVectors(o,s),Xs.subVectors(l,s),Td.subVectors(e,s);const h=Ws.dot(Td),m=Xs.dot(Td);if(h<=0&&m<=0)return t.copy(s);wd.subVectors(e,o);const g=Ws.dot(wd),v=Xs.dot(wd);if(g>=0&&v<=g)return t.copy(o);const y=h*v-g*m;if(y<=0&&h>=0&&g<=0)return u=h/(h-g),t.copy(s).addScaledVector(Ws,u);Rd.subVectors(e,l);const E=Ws.dot(Rd),M=Xs.dot(Rd);if(M>=0&&E<=M)return t.copy(l);const T=E*m-h*M;if(T<=0&&m>=0&&M<=0)return d=m/(m-M),t.copy(s).addScaledVector(Xs,d);const S=g*M-E*v;if(S<=0&&v-g>=0&&E-M>=0)return gg.subVectors(l,o),d=(v-g)/(v-g+(E-M)),t.copy(o).addScaledVector(gg,d);const _=1/(S+T+y);return u=T*_,d=y*_,t.copy(s).addScaledVector(Ws,u).addScaledVector(Xs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Pd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class xt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=St.workingColorSpace){return this.r=e,this.g=t,this.b=s,St.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=St.workingColorSpace){if(e=qS(e,1),t=Ln(t,0,1),s=Ln(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=Pd(u,l,e+1/3),this.g=Pd(u,l,e),this.b=Pd(u,l,e-1/3)}return St.toWorkingColorSpace(this,o),this}setStyle(e,t=Qn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){const s=dv[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return St.fromWorkingColorSpace(mn.copy(this),e),Math.round(Ln(mn.r*255,0,255))*65536+Math.round(Ln(mn.g*255,0,255))*256+Math.round(Ln(mn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(mn.copy(this),t);const s=mn.r,o=mn.g,l=mn.b,u=Math.max(s,o,l),d=Math.min(s,o,l);let h,m;const g=(d+u)/2;if(d===u)h=0,m=0;else{const v=u-d;switch(m=g<=.5?v/(u+d):v/(2-u-d),u){case s:h=(o-l)/v+(o<l?6:0);break;case o:h=(l-s)/v+2;break;case l:h=(s-o)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Qn){St.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,s=mn.g,o=mn.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Ul);const s=hd(Cr.h,Ul.h,t),o=hd(Cr.s,Ul.s,t),l=hd(Cr.l,Ul.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new xt;xt.NAMES=dv;let fE=0;class po extends ho{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=pa(),this.name="",this.blending=to,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=ef,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(s.blending=this.blending),this.side!==Dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Jd&&(s.blendSrc=this.blendSrc),this.blendDst!==ef&&(s.blendDst=this.blendDst),this.blendEquation!==ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fv extends po{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=$0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new ie,Nl=new Rt;class Ai{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=eg,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ko(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Pn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ko(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ko(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ko(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ko(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),s=Pn(s,this.array),o=Pn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),s=Pn(s,this.array),o=Pn(o,this.array),l=Pn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eg&&(e.usage=this.usage),e}}class hv extends Ai{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class pv extends Ai{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class bi extends Ai{constructor(e,t,s){super(new Float32Array(e),t,s)}}let hE=0;const qn=new kt,Ld=new rn,Ys=new ie,zn=new ga,ea=new ga,nn=new ie;class tr extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?pv:hv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new dt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,s){return qn.makeTranslation(e,t,s),this.applyMatrix4(qn),this}scale(e,t,s){return qn.makeScale(e,t,s),this.applyMatrix4(qn),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new bi(s,3))}else{for(let s=0,o=t.count;s<o;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];ea.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(zn.min,ea.min),zn.expandByPoint(nn),nn.addVectors(zn.max,ea.max),zn.expandByPoint(nn)):(zn.expandByPoint(ea.min),zn.expandByPoint(ea.max))}zn.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)nn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(nn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)nn.fromBufferAttribute(d,m),h&&(Ys.fromBufferAttribute(e,m),nn.add(Ys)),o=Math.max(o,s.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let I=0;I<s.count;I++)d[I]=new ie,h[I]=new ie;const m=new ie,g=new ie,v=new ie,y=new Rt,E=new Rt,M=new Rt,T=new ie,S=new ie;function _(I,L,C){m.fromBufferAttribute(s,I),g.fromBufferAttribute(s,L),v.fromBufferAttribute(s,C),y.fromBufferAttribute(l,I),E.fromBufferAttribute(l,L),M.fromBufferAttribute(l,C),g.sub(m),v.sub(m),E.sub(y),M.sub(y);const V=1/(E.x*M.y-M.x*E.y);isFinite(V)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-E.y).multiplyScalar(V),S.copy(v).multiplyScalar(E.x).addScaledVector(g,-M.x).multiplyScalar(V),d[I].add(T),d[L].add(T),d[C].add(T),h[I].add(S),h[L].add(S),h[C].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let I=0,L=U.length;I<L;++I){const C=U[I],V=C.start,de=C.count;for(let G=V,re=V+de;G<re;G+=3)_(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const D=new ie,P=new ie,Y=new ie,B=new ie;function b(I){Y.fromBufferAttribute(o,I),B.copy(Y);const L=d[I];D.copy(L),D.sub(Y.multiplyScalar(Y.dot(L))).normalize(),P.crossVectors(B,L);const V=P.dot(h[I])<0?-1:1;u.setXYZW(I,D.x,D.y,D.z,V)}for(let I=0,L=U.length;I<L;++I){const C=U[I],V=C.start,de=C.count;for(let G=V,re=V+de;G<re;G+=3)b(e.getX(G+0)),b(e.getX(G+1)),b(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,E=s.count;y<E;y++)s.setXYZ(y,0,0,0);const o=new ie,l=new ie,u=new ie,d=new ie,h=new ie,m=new ie,g=new ie,v=new ie;if(e)for(let y=0,E=e.count;y<E;y+=3){const M=e.getX(y+0),T=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),d.fromBufferAttribute(s,M),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,S),d.add(g),h.add(g),m.add(g),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,E=t.count;y<E;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,h){const m=d.array,g=d.itemSize,v=d.normalized,y=new m.constructor(h.length*g);let E=0,M=0;for(let T=0,S=h.length;T<S;T++){d.isInterleavedBufferAttribute?E=h[T]*d.data.stride+d.offset:E=h[T]*g;for(let _=0;_<g;_++)y[M++]=m[E++]}return new Ai(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tr,s=this.index.array,o=this.attributes;for(const d in o){const h=o[d],m=e(h,s);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let g=0,v=m.length;g<v;g++){const y=m[g],E=e(y,s);h.push(E)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const m=s[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,y=m.length;v<y;v++){const E=m[v];g.push(E.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let y=0,E=v.length;y<E;y++)g.push(v[y].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,g=u.length;m<g;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vg=new kt,Kr=new oh,Il=new Mc,xg=new ie,Fl=new ie,kl=new ie,Ol=new ie,Dd=new ie,Bl=new ie,_g=new ie,zl=new ie;class Dn extends rn{constructor(e=new tr,t=new fv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Bl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=d[h],v=l[h];g!==0&&(Dd.fromBufferAttribute(v,e),u?Bl.addScaledVector(Dd,g):Bl.addScaledVector(Dd.sub(t),g))}t.add(Bl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Il.copy(s.boundingSphere),Il.applyMatrix4(l),Kr.copy(e.ray).recast(e.near),!(Il.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Il,xg)===null||Kr.origin.distanceToSquared(xg)>(e.far-e.near)**2))&&(vg.copy(l).invert(),Kr.copy(e.ray).applyMatrix4(vg),!(s.boundingBox!==null&&Kr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,y=l.groups,E=l.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,T=y.length;M<T;M++){const S=y[M],_=u[S.materialIndex],U=Math.max(S.start,E.start),D=Math.min(d.count,Math.min(S.start+S.count,E.start+E.count));for(let P=U,Y=D;P<Y;P+=3){const B=d.getX(P),b=d.getX(P+1),I=d.getX(P+2);o=Hl(this,_,e,s,m,g,v,B,b,I),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,E.start),T=Math.min(d.count,E.start+E.count);for(let S=M,_=T;S<_;S+=3){const U=d.getX(S),D=d.getX(S+1),P=d.getX(S+2);o=Hl(this,u,e,s,m,g,v,U,D,P),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,T=y.length;M<T;M++){const S=y[M],_=u[S.materialIndex],U=Math.max(S.start,E.start),D=Math.min(h.count,Math.min(S.start+S.count,E.start+E.count));for(let P=U,Y=D;P<Y;P+=3){const B=P,b=P+1,I=P+2;o=Hl(this,_,e,s,m,g,v,B,b,I),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,E.start),T=Math.min(h.count,E.start+E.count);for(let S=M,_=T;S<_;S+=3){const U=S,D=S+1,P=S+2;o=Hl(this,u,e,s,m,g,v,U,D,P),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function pE(r,e,t,s,o,l,u,d){let h;if(e.side===Un?h=s.intersectTriangle(u,l,o,!0,d):h=s.intersectTriangle(o,l,u,e.side===Dr,d),h===null)return null;zl.copy(d),zl.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(zl);return m<t.near||m>t.far?null:{distance:m,point:zl.clone(),object:r}}function Hl(r,e,t,s,o,l,u,d,h,m){r.getVertexPosition(d,Fl),r.getVertexPosition(h,kl),r.getVertexPosition(m,Ol);const g=pE(r,e,t,s,Fl,kl,Ol,_g);if(g){const v=new ie;ei.getBarycoord(_g,Fl,kl,Ol,v),o&&(g.uv=ei.getInterpolatedAttribute(o,d,h,m,v,new Rt)),l&&(g.uv1=ei.getInterpolatedAttribute(l,d,h,m,v,new Rt)),u&&(g.normal=ei.getInterpolatedAttribute(u,d,h,m,v,new ie),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:h,c:m,normal:new ie,materialIndex:0};ei.getNormal(Fl,kl,Ol,y.normal),g.face=y,g.barycoord=v}return g}class mo extends tr{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],g=[],v=[];let y=0,E=0;M("z","y","x",-1,-1,s,t,e,u,l,0),M("z","y","x",1,-1,s,t,-e,u,l,1),M("x","z","y",1,1,e,s,t,o,u,2),M("x","z","y",1,-1,e,s,-t,o,u,3),M("x","y","z",1,-1,e,t,s,o,l,4),M("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new bi(m,3)),this.setAttribute("normal",new bi(g,3)),this.setAttribute("uv",new bi(v,2));function M(T,S,_,U,D,P,Y,B,b,I,L){const C=P/b,V=Y/I,de=P/2,G=Y/2,re=B/2,te=b+1,z=I+1;let Z=0,O=0;const ae=new ie;for(let ue=0;ue<z;ue++){const k=ue*V-G;for(let se=0;se<te;se++){const Ue=se*C-de;ae[T]=Ue*U,ae[S]=k*D,ae[_]=re,m.push(ae.x,ae.y,ae.z),ae[T]=0,ae[S]=0,ae[_]=B>0?1:-1,g.push(ae.x,ae.y,ae.z),v.push(se/b),v.push(1-ue/I),Z+=1}}for(let ue=0;ue<I;ue++)for(let k=0;k<b;k++){const se=y+k+te*ue,Ue=y+k+te*(ue+1),Q=y+(k+1)+te*(ue+1),he=y+(k+1)+te*ue;h.push(se,Ue,he),h.push(Ue,Q,he),O+=6}d.addGroup(E,O,L),E+=O,y+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function yn(r){const e={};for(let t=0;t<r.length;t++){const s=co(r[t]);for(const o in s)e[o]=s[o]}return e}function mE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function mv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const gE={clone:co,merge:yn};var vE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends po{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vE,this.fragmentShader=xE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=mE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class gv extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new ie,yg=new Rt,Sg=new Rt;class Jn extends gv{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bf*2*Math.atan(Math.tan(uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,yg,Sg),t.subVectors(Sg,yg)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uc*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*s/m,o*=u.width/h,s*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,qs=1;class _E extends rn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Jn($s,qs,e,t);o.layers=this.layers,this.add(o);const l=new Jn($s,qs,e,t);l.layers=this.layers,this.add(l);const u=new Jn($s,qs,e,t);u.layers=this.layers,this.add(u);const d=new Jn($s,qs,e,t);d.layers=this.layers,this.add(d);const h=new Jn($s,qs,e,t);h.layers=this.layers,this.add(h);const m=new Jn($s,qs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,d,h]=t;for(const m of t)this.remove(m);if(e===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===pc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,m,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,u),e.setRenderTarget(s,2,o),e.render(t,d),e.setRenderTarget(s,3,o),e.render(t,h),e.setRenderTarget(s,4,o),e.render(t,m),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,o),e.render(t,g),e.setRenderTarget(v,y,E),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class vv extends Nn{constructor(e,t,s,o,l,u,d,h,m,g){e=e!==void 0?e:[],t=t!==void 0?t:so,super(e,t,s,o,l,u,d,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yE extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new vv(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new mo(5,5,5),l=new Ur({name:"CubemapFromEquirect",uniforms:co(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Un,blending:Pr});l.uniforms.tEquirect.value=t;const u=new Dn(o,l),d=t.minFilter;return t.minFilter===ls&&(t.minFilter=Ci),new _E(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}const Ud=new ie,SE=new ie,EE=new dt;class ns{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Ud.subVectors(s,t).cross(SE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Ud),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||EE.getNormalMatrix(e),o=this.coplanarPoint(Ud).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Mc,jl=new ie;class lh{constructor(e=new ns,t=new ns,s=new ns,o=new ns,l=new ns,u=new ns){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Zi){const s=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],h=o[3],m=o[4],g=o[5],v=o[6],y=o[7],E=o[8],M=o[9],T=o[10],S=o[11],_=o[12],U=o[13],D=o[14],P=o[15];if(s[0].setComponents(h-l,y-m,S-E,P-_).normalize(),s[1].setComponents(h+l,y+m,S+E,P+_).normalize(),s[2].setComponents(h+u,y+g,S+M,P+U).normalize(),s[3].setComponents(h-u,y-g,S-M,P-U).normalize(),s[4].setComponents(h-d,y-v,S-T,P-D).normalize(),t===Zi)s[5].setComponents(h+d,y+v,S+T,P+D).normalize();else if(t===pc)s[5].setComponents(d,v,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(jl.x=o.normal.x>0?e.max.x:e.min.x,jl.y=o.normal.y>0?e.max.y:e.min.y,jl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xv(){let r=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function ME(r){const e=new WeakMap;function t(d,h){const m=d.array,g=d.usage,v=m.byteLength,y=r.createBuffer();r.bindBuffer(h,y),r.bufferData(h,m,g),d.onUploadCallback();let E;if(m instanceof Float32Array)E=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=r.SHORT;else if(m instanceof Uint32Array)E=r.UNSIGNED_INT;else if(m instanceof Int32Array)E=r.INT;else if(m instanceof Int8Array)E=r.BYTE;else if(m instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,h,m){const g=h.array,v=h.updateRanges;if(r.bindBuffer(m,d),v.length===0)r.bufferSubData(m,0,g);else{v.sort((E,M)=>E.start-M.start);let y=0;for(let E=1;E<v.length;E++){const M=v[y],T=v[E];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++y,v[y]=T)}v.length=y+1;for(let E=0,M=v.length;E<M;E++){const T=v[E];r.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(r.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,h),m.version=d.version}}return{get:o,remove:l,update:u}}class Tc extends tr{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(s),h=Math.floor(o),m=d+1,g=h+1,v=e/d,y=t/h,E=[],M=[],T=[],S=[];for(let _=0;_<g;_++){const U=_*y-u;for(let D=0;D<m;D++){const P=D*v-l;M.push(P,-U,0),T.push(0,0,1),S.push(D/d),S.push(1-_/h)}}for(let _=0;_<h;_++)for(let U=0;U<d;U++){const D=U+m*_,P=U+m*(_+1),Y=U+1+m*(_+1),B=U+1+m*_;E.push(D,P,B),E.push(P,Y,B)}this.setIndex(E),this.setAttribute("position",new bi(M,3)),this.setAttribute("normal",new bi(T,3)),this.setAttribute("uv",new bi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.width,e.height,e.widthSegments,e.heightSegments)}}var TE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wE=`#ifdef USE_ALPHAHASH
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
#endif`,RE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PE=`#ifdef USE_AOMAP
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
#endif`,LE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DE=`#ifdef USE_BATCHING
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
#endif`,UE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kE=`#ifdef USE_IRIDESCENCE
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
#endif`,OE=`#ifdef USE_BUMPMAP
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
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,YE=`#define PI 3.141592653589793
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
} // validated`,$E=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qE=`vec3 transformedNormal = objectNormal;
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
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eM="gl_FragColor = linearToOutputTexel( gl_FragColor );",tM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rM=`#ifdef USE_ENVMAP
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
#endif`,sM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
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
#endif`,aM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dM=`#ifdef USE_GRADIENTMAP
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
}`,fM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mM=`uniform bool receiveShadow;
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
#endif`,gM=`#ifdef USE_ENVMAP
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
#endif`,vM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SM=`PhysicalMaterial material;
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
#endif`,EM=`struct PhysicalMaterial {
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
}`,MM=`
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
#endif`,TM=`#if defined( RE_IndirectDiffuse )
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
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UM=`#if defined( USE_POINTS_UV )
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
#endif`,NM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BM=`#ifdef USE_MORPHTARGETS
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
#endif`,zM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XM=`#ifdef USE_NORMALMAP
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
#endif`,YM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,JM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l1=`float getShadowMask() {
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
}`,c1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,h1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
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
#endif`,x1=`#ifdef USE_TRANSMISSION
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`#include <common>
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
}`,P1=`#if DEPTH_PACKING == 3200
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
}`,L1=`#define DISTANCE
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
}`,D1=`#define DISTANCE
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
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`uniform float scale;
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
}`,F1=`uniform vec3 diffuse;
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
}`,k1=`#include <common>
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
}`,O1=`uniform vec3 diffuse;
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
}`,B1=`#define LAMBERT
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
}`,z1=`#define LAMBERT
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
}`,H1=`#define MATCAP
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
}`,j1=`#define MATCAP
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
}`,V1=`#define NORMAL
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
}`,G1=`#define NORMAL
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
}`,W1=`#define PHONG
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
}`,X1=`#define PHONG
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
}`,Y1=`#define STANDARD
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
}`,$1=`#define STANDARD
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
}`,q1=`#define TOON
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
}`,K1=`#define TOON
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
}`,Z1=`uniform float size;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,J1=`#include <common>
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
}`,eT=`uniform vec3 color;
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
}`,tT=`uniform float rotation;
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
}`,nT=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:TE,alphahash_pars_fragment:wE,alphamap_fragment:RE,alphamap_pars_fragment:CE,alphatest_fragment:AE,alphatest_pars_fragment:bE,aomap_fragment:PE,aomap_pars_fragment:LE,batching_pars_vertex:DE,batching_vertex:UE,begin_vertex:NE,beginnormal_vertex:IE,bsdfs:FE,iridescence_fragment:kE,bumpmap_pars_fragment:OE,clipping_planes_fragment:BE,clipping_planes_pars_fragment:zE,clipping_planes_pars_vertex:HE,clipping_planes_vertex:jE,color_fragment:VE,color_pars_fragment:GE,color_pars_vertex:WE,color_vertex:XE,common:YE,cube_uv_reflection_fragment:$E,defaultnormal_vertex:qE,displacementmap_pars_vertex:KE,displacementmap_vertex:ZE,emissivemap_fragment:QE,emissivemap_pars_fragment:JE,colorspace_fragment:eM,colorspace_pars_fragment:tM,envmap_fragment:nM,envmap_common_pars_fragment:iM,envmap_pars_fragment:rM,envmap_pars_vertex:sM,envmap_physical_pars_fragment:gM,envmap_vertex:oM,fog_vertex:aM,fog_pars_vertex:lM,fog_fragment:cM,fog_pars_fragment:uM,gradientmap_pars_fragment:dM,lightmap_pars_fragment:fM,lights_lambert_fragment:hM,lights_lambert_pars_fragment:pM,lights_pars_begin:mM,lights_toon_fragment:vM,lights_toon_pars_fragment:xM,lights_phong_fragment:_M,lights_phong_pars_fragment:yM,lights_physical_fragment:SM,lights_physical_pars_fragment:EM,lights_fragment_begin:MM,lights_fragment_maps:TM,lights_fragment_end:wM,logdepthbuf_fragment:RM,logdepthbuf_pars_fragment:CM,logdepthbuf_pars_vertex:AM,logdepthbuf_vertex:bM,map_fragment:PM,map_pars_fragment:LM,map_particle_fragment:DM,map_particle_pars_fragment:UM,metalnessmap_fragment:NM,metalnessmap_pars_fragment:IM,morphinstance_vertex:FM,morphcolor_vertex:kM,morphnormal_vertex:OM,morphtarget_pars_vertex:BM,morphtarget_vertex:zM,normal_fragment_begin:HM,normal_fragment_maps:jM,normal_pars_fragment:VM,normal_pars_vertex:GM,normal_vertex:WM,normalmap_pars_fragment:XM,clearcoat_normal_fragment_begin:YM,clearcoat_normal_fragment_maps:$M,clearcoat_pars_fragment:qM,iridescence_pars_fragment:KM,opaque_fragment:ZM,packing:QM,premultiplied_alpha_fragment:JM,project_vertex:e1,dithering_fragment:t1,dithering_pars_fragment:n1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:o1,shadowmap_vertex:a1,shadowmask_pars_fragment:l1,skinbase_vertex:c1,skinning_pars_vertex:u1,skinning_vertex:d1,skinnormal_vertex:f1,specularmap_fragment:h1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:v1,transmission_pars_fragment:x1,uv_pars_fragment:_1,uv_pars_vertex:y1,uv_vertex:S1,worldpos_vertex:E1,background_vert:M1,background_frag:T1,backgroundCube_vert:w1,backgroundCube_frag:R1,cube_vert:C1,cube_frag:A1,depth_vert:b1,depth_frag:P1,distanceRGBA_vert:L1,distanceRGBA_frag:D1,equirect_vert:U1,equirect_frag:N1,linedashed_vert:I1,linedashed_frag:F1,meshbasic_vert:k1,meshbasic_frag:O1,meshlambert_vert:B1,meshlambert_frag:z1,meshmatcap_vert:H1,meshmatcap_frag:j1,meshnormal_vert:V1,meshnormal_frag:G1,meshphong_vert:W1,meshphong_frag:X1,meshphysical_vert:Y1,meshphysical_frag:$1,meshtoon_vert:q1,meshtoon_frag:K1,points_vert:Z1,points_frag:Q1,shadow_vert:J1,shadow_frag:eT,sprite_vert:tT,sprite_frag:nT},De={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ri={basic:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new xt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:yn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:yn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new xt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:yn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:yn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:yn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:yn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:yn([De.common,De.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:yn([De.lights,De.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ri.physical={uniforms:yn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Vl={r:0,b:0,g:0},Qr=new Pi,iT=new kt;function rT(r,e,t,s,o,l,u){const d=new xt(0);let h=l===!0?0:1,m,g,v=null,y=0,E=null;function M(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?t:e).get(D)),D}function T(U){let D=!1;const P=M(U);P===null?_(d,h):P&&P.isColor&&(_(P,1),D=!0);const Y=r.xr.getEnvironmentBlendMode();Y==="additive"?s.buffers.color.setClear(0,0,0,1,u):Y==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(U,D){const P=M(D);P&&(P.isCubeTexture||P.mapping===Sc)?(g===void 0&&(g=new Dn(new mo(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:co(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(Y,B,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Qr.copy(D.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(iT.makeRotationFromEuler(Qr)),g.material.toneMapped=St.getTransfer(P.colorSpace)!==Pt,(v!==P||y!==P.version||E!==r.toneMapping)&&(g.material.needsUpdate=!0,v=P,y=P.version,E=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new Dn(new Tc(2,2),new Ur({name:"BackgroundMaterial",uniforms:co(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=St.getTransfer(P.colorSpace)!==Pt,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||y!==P.version||E!==r.toneMapping)&&(m.material.needsUpdate=!0,v=P,y=P.version,E=r.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function _(U,D){U.getRGB(Vl,mv(r)),s.buffers.color.setClear(Vl.r,Vl.g,Vl.b,D,u)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),h=D,_(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,_(d,h)},render:T,addToRenderList:S}}function sT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=y(null);let l=o,u=!1;function d(C,V,de,G,re){let te=!1;const z=v(G,de,V);l!==z&&(l=z,m(l.object)),te=E(C,G,de,re),te&&M(C,G,de,re),re!==null&&e.update(re,r.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,P(C,V,de,G),re!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function h(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function v(C,V,de){const G=de.wireframe===!0;let re=s[C.id];re===void 0&&(re={},s[C.id]=re);let te=re[V.id];te===void 0&&(te={},re[V.id]=te);let z=te[G];return z===void 0&&(z=y(h()),te[G]=z),z}function y(C){const V=[],de=[],G=[];for(let re=0;re<t;re++)V[re]=0,de[re]=0,G[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:de,attributeDivisors:G,object:C,attributes:{},index:null}}function E(C,V,de,G){const re=l.attributes,te=V.attributes;let z=0;const Z=de.getAttributes();for(const O in Z)if(Z[O].location>=0){const ue=re[O];let k=te[O];if(k===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),ue===void 0||ue.attribute!==k||k&&ue.data!==k.data)return!0;z++}return l.attributesNum!==z||l.index!==G}function M(C,V,de,G){const re={},te=V.attributes;let z=0;const Z=de.getAttributes();for(const O in Z)if(Z[O].location>=0){let ue=te[O];ue===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor));const k={};k.attribute=ue,ue&&ue.data&&(k.data=ue.data),re[O]=k,z++}l.attributes=re,l.attributesNum=z,l.index=G}function T(){const C=l.newAttributes;for(let V=0,de=C.length;V<de;V++)C[V]=0}function S(C){_(C,0)}function _(C,V){const de=l.newAttributes,G=l.enabledAttributes,re=l.attributeDivisors;de[C]=1,G[C]===0&&(r.enableVertexAttribArray(C),G[C]=1),re[C]!==V&&(r.vertexAttribDivisor(C,V),re[C]=V)}function U(){const C=l.newAttributes,V=l.enabledAttributes;for(let de=0,G=V.length;de<G;de++)V[de]!==C[de]&&(r.disableVertexAttribArray(de),V[de]=0)}function D(C,V,de,G,re,te,z){z===!0?r.vertexAttribIPointer(C,V,de,re,te):r.vertexAttribPointer(C,V,de,G,re,te)}function P(C,V,de,G){T();const re=G.attributes,te=de.getAttributes(),z=V.defaultAttributeValues;for(const Z in te){const O=te[Z];if(O.location>=0){let ae=re[Z];if(ae===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),ae!==void 0){const ue=ae.normalized,k=ae.itemSize,se=e.get(ae);if(se===void 0)continue;const Ue=se.buffer,Q=se.type,he=se.bytesPerElement,Me=Q===r.INT||Q===r.UNSIGNED_INT||ae.gpuType===eh;if(ae.isInterleavedBufferAttribute){const _e=ae.data,Ae=_e.stride,Fe=ae.offset;if(_e.isInstancedInterleavedBuffer){for(let Ze=0;Ze<O.locationSize;Ze++)_(O.location+Ze,_e.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ze=0;Ze<O.locationSize;Ze++)S(O.location+Ze);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Ze=0;Ze<O.locationSize;Ze++)D(O.location+Ze,k/O.locationSize,Q,ue,Ae*he,(Fe+k/O.locationSize*Ze)*he,Me)}else{if(ae.isInstancedBufferAttribute){for(let _e=0;_e<O.locationSize;_e++)_(O.location+_e,ae.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<O.locationSize;_e++)S(O.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let _e=0;_e<O.locationSize;_e++)D(O.location+_e,k/O.locationSize,Q,ue,k*he,k/O.locationSize*_e*he,Me)}}else if(z!==void 0){const ue=z[Z];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(O.location,ue);break;case 3:r.vertexAttrib3fv(O.location,ue);break;case 4:r.vertexAttrib4fv(O.location,ue);break;default:r.vertexAttrib1fv(O.location,ue)}}}}U()}function Y(){I();for(const C in s){const V=s[C];for(const de in V){const G=V[de];for(const re in G)g(G[re].object),delete G[re];delete V[de]}delete s[C]}}function B(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const de in V){const G=V[de];for(const re in G)g(G[re].object),delete G[re];delete V[de]}delete s[C.id]}function b(C){for(const V in s){const de=s[V];if(de[C.id]===void 0)continue;const G=de[C.id];for(const re in G)g(G[re].object),delete G[re];delete de[C.id]}}function I(){L(),u=!0,l!==o&&(l=o,m(l.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:I,resetDefaultState:L,dispose:Y,releaseStatesOfGeometry:B,releaseStatesOfProgram:b,initAttributes:T,enableAttribute:S,disableUnusedAttributes:U}}function oT(r,e,t){let s;function o(m){s=m}function l(m,g){r.drawArrays(s,m,g),t.update(g,s,1)}function u(m,g,v){v!==0&&(r.drawArraysInstanced(s,m,g,v),t.update(g,s,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,v);let E=0;for(let M=0;M<v;M++)E+=g[M];t.update(E,s,1)}function h(m,g,v,y){if(v===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let M=0;M<m.length;M++)u(m[M],g[M],y[M]);else{E.multiDrawArraysInstancedWEBGL(s,m,0,g,0,y,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T]*y[T];t.update(M,s,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function aT(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(b){return!(b!==pi&&s.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(b){const I=b===ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==er&&s.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ki&&!I)}function h(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),Y=M>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:E,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:P,vertexTextures:Y,maxSamples:B}}function lT(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new ns,d=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const E=v.length!==0||y||s!==0||o;return o=y,s=v.length,E},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=g(v,y,0)},this.setState=function(v,y,E){const M=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,_=r.get(v);if(!o||M===null||M.length===0||l&&!S)l?g(null):m();else{const U=l?0:s,D=U*4;let P=_.clippingState||null;h.value=P,P=g(M,y,D,E);for(let Y=0;Y!==D;++Y)P[Y]=t[Y];_.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,y,E,M){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=h.value,M!==!0||S===null){const _=E+T*4,U=y.matrixWorldInverse;d.getNormalMatrix(U),(S===null||S.length<_)&&(S=new Float32Array(_));for(let D=0,P=E;D!==T;++D,P+=4)u.copy(v[D]).applyMatrix4(U,d),u.normal.toArray(S,P),S[P+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function cT(r){let e=new WeakMap;function t(u,d){return d===cf?u.mapping=so:d===uf&&(u.mapping=oo),u}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===cf||d===uf)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new yE(h.height);return m.fromEquirectangularTexture(r,u),e.set(u,m),u.addEventListener("dispose",o),t(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class _v extends gv{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Js=4,Eg=[.125,.215,.35,.446,.526,.582],os=20,Nd=new _v,Mg=new xt;let Id=null,Fd=0,kd=0,Od=!1;const is=(1+Math.sqrt(5))/2,Ks=1/is,Tg=[new ie(-is,Ks,0),new ie(is,Ks,0),new ie(-Ks,0,is),new ie(Ks,0,is),new ie(0,is,-Ks),new ie(0,is,Ks),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class wg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){Id=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Fd,kd),this._renderer.xr.enabled=Od,e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:ha,format:pi,colorSpace:fo,depthBuffer:!1},o=Rg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uT(l)),this._blurMaterial=dT(l,e,t)}return o}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,Nd)}_sceneToCubeUV(e,t,s,o){const d=new Jn(90,1,t,s),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Mg),g.toneMapping=Lr,g.autoClear=!1;const E=new fv({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),M=new Dn(new mo,E);let T=!1;const S=e.background;S?S.isColor&&(E.color.copy(S),e.background=null,T=!0):(E.color.copy(Mg),T=!0);for(let _=0;_<6;_++){const U=_%3;U===0?(d.up.set(0,h[_],0),d.lookAt(m[_],0,0)):U===1?(d.up.set(0,0,h[_]),d.lookAt(0,m[_],0)):(d.up.set(0,h[_],0),d.lookAt(0,0,m[_]));const D=this._cubeSize;Gl(o,U*D,_>2?D:0,D,D),g.setRenderTarget(o),T&&g.render(M,d),g.render(e,d)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=S}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===so||e.mapping===oo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Dn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Gl(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,Nd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Tg[(o-l-1)%Tg.length];this._blur(e,l-1,l,u,d)}t.autoClear=s}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,d){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Dn(this._lodPlanes[o],m),y=m.uniforms,E=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*E):2*Math.PI/(2*os-1),T=l/M,S=isFinite(l)?1+Math.floor(g*T):os;S>os&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${os}`);const _=[];let U=0;for(let b=0;b<os;++b){const I=b/T,L=Math.exp(-I*I/2);_.push(L),b===0?U+=L:b<S&&(U+=2*L)}for(let b=0;b<_.length;b++)_[b]=_[b]/U;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=M,y.mipInt.value=D-s;const P=this._sizeLods[o],Y=3*P*(o>D-Js?o-D+Js:0),B=4*(this._cubeSize-P);Gl(t,Y,B,3*P,2*P),h.setRenderTarget(t),h.render(v,Nd)}}function uT(r){const e=[],t=[],s=[];let o=r;const l=r-Js+1+Eg.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let h=1/d;u>r-Js?h=Eg[u-r+Js-1]:u===0&&(h=0),s.push(h);const m=1/(d-2),g=-m,v=1+m,y=[g,g,v,g,v,v,g,g,v,v,g,v],E=6,M=6,T=3,S=2,_=1,U=new Float32Array(T*M*E),D=new Float32Array(S*M*E),P=new Float32Array(_*M*E);for(let B=0;B<E;B++){const b=B%3*2/3-1,I=B>2?0:-1,L=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];U.set(L,T*M*B),D.set(y,S*M*B);const C=[B,B,B,B,B,B];P.set(C,_*M*B)}const Y=new tr;Y.setAttribute("position",new Ai(U,T)),Y.setAttribute("uv",new Ai(D,S)),Y.setAttribute("faceIndex",new Ai(P,_)),e.push(Y),o>Js&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Rg(r,e,t){const s=new ds(r,e,t);return s.texture.mapping=Sc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Gl(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function dT(r,e,t){const s=new Float32Array(os),o=new ie(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Cg(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Ag(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function fT(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const h=d.mapping,m=h===cf||h===uf,g=h===so||h===oo;if(m||g){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new wg(r)),v=m?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const E=d.image;return m&&E&&E.height>0||g&&E&&o(E)?(t===null&&(t=new wg(r)),v=m?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function o(d){let h=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&h++;return h===m}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function hT(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&na("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function pT(r,e,t,s){const o={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const M in y.attributes)e.remove(y.attributes[M]);for(const M in y.morphAttributes){const T=y.morphAttributes[M];for(let S=0,_=T.length;S<_;S++)e.remove(T[S])}y.removeEventListener("dispose",u),delete o[y.id];const E=l.get(y);E&&(e.remove(E),l.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(v,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function h(v){const y=v.attributes;for(const M in y)e.update(y[M],r.ARRAY_BUFFER);const E=v.morphAttributes;for(const M in E){const T=E[M];for(let S=0,_=T.length;S<_;S++)e.update(T[S],r.ARRAY_BUFFER)}}function m(v){const y=[],E=v.index,M=v.attributes.position;let T=0;if(E!==null){const U=E.array;T=E.version;for(let D=0,P=U.length;D<P;D+=3){const Y=U[D+0],B=U[D+1],b=U[D+2];y.push(Y,B,B,b,b,Y)}}else if(M!==void 0){const U=M.array;T=M.version;for(let D=0,P=U.length/3-1;D<P;D+=3){const Y=D+0,B=D+1,b=D+2;y.push(Y,B,B,b,b,Y)}}else return;const S=new(lv(y)?pv:hv)(y,1);S.version=T;const _=l.get(v);_&&e.remove(_),l.set(v,S)}function g(v){const y=l.get(v);if(y){const E=v.index;E!==null&&y.version<E.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:h,getWireframeAttribute:g}}function mT(r,e,t){let s;function o(y){s=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function h(y,E){r.drawElements(s,E,l,y*u),t.update(E,s,1)}function m(y,E,M){M!==0&&(r.drawElementsInstanced(s,E,l,y*u,M),t.update(E,s,M))}function g(y,E,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,l,y,0,M);let S=0;for(let _=0;_<M;_++)S+=E[_];t.update(S,s,1)}function v(y,E,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)m(y[_]/u,E[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(s,E,0,l,y,0,T,0,M);let _=0;for(let U=0;U<M;U++)_+=E[U]*T[U];t.update(_,s,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function gT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,d){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function vT(r,e,t){const s=new WeakMap,o=new jt;function l(u,d,h){const m=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==v){let C=function(){I.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var E=C;y!==void 0&&y.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let P=0;M===!0&&(P=1),T===!0&&(P=2),S===!0&&(P=3);let Y=d.attributes.position.count*P,B=1;Y>e.maxTextureSize&&(B=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const b=new Float32Array(Y*B*4*v),I=new uv(b,Y,B,v);I.type=Ki,I.needsUpdate=!0;const L=P*4;for(let V=0;V<v;V++){const de=_[V],G=U[V],re=D[V],te=Y*B*4*V;for(let z=0;z<de.count;z++){const Z=z*L;M===!0&&(o.fromBufferAttribute(de,z),b[te+Z+0]=o.x,b[te+Z+1]=o.y,b[te+Z+2]=o.z,b[te+Z+3]=0),T===!0&&(o.fromBufferAttribute(G,z),b[te+Z+4]=o.x,b[te+Z+5]=o.y,b[te+Z+6]=o.z,b[te+Z+7]=0),S===!0&&(o.fromBufferAttribute(re,z),b[te+Z+8]=o.x,b[te+Z+9]=o.y,b[te+Z+10]=o.z,b[te+Z+11]=re.itemSize===4?o.w:1)}}y={count:v,texture:I,size:new Rt(Y,B)},s.set(d,y),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<m.length;S++)M+=m[S];const T=d.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",T),h.getUniforms().setValue(r,"morphTargetInfluences",m)}h.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:l}}function xT(r,e,t,s){let o=new WeakMap;function l(h){const m=s.render.frame,g=h.geometry,v=e.get(h,g);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==m&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return v}function u(){o=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:u}}class yv extends Nn{constructor(e,t,s,o,l,u,d,h,m,g=no){if(g!==no&&g!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===no&&(s=us),s===void 0&&g===lo&&(s=ao),super(null,o,l,u,d,h,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:vi,this.minFilter=h!==void 0?h:vi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sv=new Nn,bg=new yv(1,1),Ev=new uv,Mv=new rE,Tv=new vv,Pg=[],Lg=[],Dg=new Float32Array(16),Ug=new Float32Array(9),Ng=new Float32Array(4);function go(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=Pg[o];if(l===void 0&&(l=new Float32Array(o),Pg[o]=l),e!==0){s.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,r[u].toArray(l,d)}return l}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Zt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function wc(r,e){let t=Lg[e];t===void 0&&(t=new Int32Array(e),Lg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function _T(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function yT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Zt(t,e)}}function ST(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Zt(t,e)}}function ET(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Zt(t,e)}}function MT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;Ng.set(s),r.uniformMatrix2fv(this.addr,!1,Ng),Zt(t,s)}}function TT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;Ug.set(s),r.uniformMatrix3fv(this.addr,!1,Ug),Zt(t,s)}}function wT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,s))return;Dg.set(s),r.uniformMatrix4fv(this.addr,!1,Dg),Zt(t,s)}}function RT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function CT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Zt(t,e)}}function AT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Zt(t,e)}}function bT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Zt(t,e)}}function PT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function LT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Zt(t,e)}}function DT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Zt(t,e)}}function UT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Zt(t,e)}}function NT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(bg.compareFunction=av,l=bg):l=Sv,t.setTexture2D(e||l,o)}function IT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||Mv,o)}function FT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||Tv,o)}function kT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||Ev,o)}function OT(r){switch(r){case 5126:return _T;case 35664:return yT;case 35665:return ST;case 35666:return ET;case 35674:return MT;case 35675:return TT;case 35676:return wT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return AT;case 35669:case 35673:return bT;case 5125:return PT;case 36294:return LT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return kT}}function BT(r,e){r.uniform1fv(this.addr,e)}function zT(r,e){const t=go(e,this.size,2);r.uniform2fv(this.addr,t)}function HT(r,e){const t=go(e,this.size,3);r.uniform3fv(this.addr,t)}function jT(r,e){const t=go(e,this.size,4);r.uniform4fv(this.addr,t)}function VT(r,e){const t=go(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function GT(r,e){const t=go(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function WT(r,e){const t=go(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function XT(r,e){r.uniform1iv(this.addr,e)}function YT(r,e){r.uniform2iv(this.addr,e)}function $T(r,e){r.uniform3iv(this.addr,e)}function qT(r,e){r.uniform4iv(this.addr,e)}function KT(r,e){r.uniform1uiv(this.addr,e)}function ZT(r,e){r.uniform2uiv(this.addr,e)}function QT(r,e){r.uniform3uiv(this.addr,e)}function JT(r,e){r.uniform4uiv(this.addr,e)}function ew(r,e,t){const s=this.cache,o=e.length,l=wc(t,o);Kt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Sv,l[u])}function tw(r,e,t){const s=this.cache,o=e.length,l=wc(t,o);Kt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Mv,l[u])}function nw(r,e,t){const s=this.cache,o=e.length,l=wc(t,o);Kt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Tv,l[u])}function iw(r,e,t){const s=this.cache,o=e.length,l=wc(t,o);Kt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Ev,l[u])}function rw(r){switch(r){case 5126:return BT;case 35664:return zT;case 35665:return HT;case 35666:return jT;case 35674:return VT;case 35675:return GT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return YT;case 35668:case 35672:return $T;case 35669:case 35673:return qT;case 5125:return KT;case 36294:return ZT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}class sw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=OT(t.type)}}class ow{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rw(t.type)}}class aw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function Ig(r,e){r.seq.push(e),r.map[e.id]=e}function lw(r,e,t){const s=r.name,o=s.length;for(Bd.lastIndex=0;;){const l=Bd.exec(s),u=Bd.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&u+2===o){Ig(t,m===void 0?new sw(d,r,e):new ow(d,r,e));break}else{let v=t.map[d];v===void 0&&(v=new aw(d),Ig(t,v)),t=v}}}class dc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);lw(l,u,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=s[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function Fg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const cw=37297;let uw=0;function dw(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;s.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return s.join(`
`)}const kg=new dt;function fw(r){St._getMatrix(kg,St.workingColorSpace,r);const e=`mat3( ${kg.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(r)){case Ec:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Og(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+dw(r.getShaderSource(e),u)}else return o}function hw(r,e){const t=fw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pw(r,e){let t;switch(e){case LS:t="Linear";break;case DS:t="Reinhard";break;case US:t="Cineon";break;case NS:t="ACESFilmic";break;case FS:t="AgX";break;case kS:t="Neutral";break;case IS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new ie;function mw(){St.getLuminanceCoefficients(Wl);const r=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function vw(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function xw(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:d}}return t}function ia(r){return r!==""}function Bg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function zf(r){return r.replace(_w,Sw)}const yw=new Map;function Sw(r,e){let t=ft[e];if(t===void 0){const s=yw.get(e);if(s!==void 0)t=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return zf(t)}const Ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(r){return r.replace(Ew,Mw)}function Mw(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function jg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Tw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Y0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===uS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function ww(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case Sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function Cw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $0:e="ENVMAP_BLENDING_MULTIPLY";break;case bS:e="ENVMAP_BLENDING_MIX";break;case PS:e="ENVMAP_BLENDING_ADD";break}return e}function Aw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function bw(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=Tw(t),m=ww(t),g=Rw(t),v=Cw(t),y=Aw(t),E=gw(t),M=vw(l),T=o.createProgram();let S,_,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ia).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ia).join(`
`),_.length>0&&(_+=`
`)):(S=[jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),_=[jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lr?"#define TONE_MAPPING":"",t.toneMapping!==Lr?ft.tonemapping_pars_fragment:"",t.toneMapping!==Lr?pw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,hw("linearToOutputTexel",t.outputColorSpace),mw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),u=zf(u),u=Bg(u,t),u=zg(u,t),d=zf(d),d=Bg(d,t),d=zg(d,t),u=Hg(u),d=Hg(d),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=U+S+u,P=U+_+d,Y=Fg(o,o.VERTEX_SHADER,D),B=Fg(o,o.FRAGMENT_SHADER,P);o.attachShader(T,Y),o.attachShader(T,B),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function b(V){if(r.debug.checkShaderErrors){const de=o.getProgramInfoLog(T).trim(),G=o.getShaderInfoLog(Y).trim(),re=o.getShaderInfoLog(B).trim();let te=!0,z=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,Y,B);else{const Z=Og(o,Y,"vertex"),O=Og(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+de+`
`+Z+`
`+O)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(G===""||re==="")&&(z=!1);z&&(V.diagnostics={runnable:te,programLog:de,vertexShader:{log:G,prefix:S},fragmentShader:{log:re,prefix:_}})}o.deleteShader(Y),o.deleteShader(B),I=new dc(o,T),L=xw(o,T)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let L;this.getAttributes=function(){return L===void 0&&b(this),L};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,cw)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uw++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=Y,this.fragmentShader=B,this}let Pw=0;class Lw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Dw(e),t.set(e,s)),s}}class Dw{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}}function Uw(r,e,t,s,o,l,u){const d=new ah,h=new Lw,m=new Set,g=[],v=o.logarithmicDepthBuffer,y=o.vertexTextures;let E=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return m.add(L),L===0?"uv":`uv${L}`}function S(L,C,V,de,G){const re=de.fog,te=G.geometry,z=L.isMeshStandardMaterial?de.environment:null,Z=(L.isMeshStandardMaterial?t:e).get(L.envMap||z),O=Z&&Z.mapping===Sc?Z.image.height:null,ae=M[L.type];L.precision!==null&&(E=o.getMaxPrecision(L.precision),E!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",E,"instead."));const ue=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,k=ue!==void 0?ue.length:0;let se=0;te.morphAttributes.position!==void 0&&(se=1),te.morphAttributes.normal!==void 0&&(se=2),te.morphAttributes.color!==void 0&&(se=3);let Ue,Q,he,Me;if(ae){const _t=Ri[ae];Ue=_t.vertexShader,Q=_t.fragmentShader}else Ue=L.vertexShader,Q=L.fragmentShader,h.update(L),he=h.getVertexShaderID(L),Me=h.getFragmentShaderID(L);const _e=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Fe=G.isInstancedMesh===!0,Ze=G.isBatchedMesh===!0,Tt=!!L.map,ht=!!L.matcap,At=!!Z,$=!!L.aoMap,Qt=!!L.lightMap,Te=!!L.bumpMap,Pe=!!L.normalMap,ke=!!L.displacementMap,ot=!!L.emissiveMap,Ve=!!L.metalnessMap,N=!!L.roughnessMap,R=L.anisotropy>0,ee=L.clearcoat>0,me=L.dispersion>0,ve=L.iridescence>0,pe=L.sheen>0,Oe=L.transmission>0,be=R&&!!L.anisotropyMap,Be=ee&&!!L.clearcoatMap,ct=ee&&!!L.clearcoatNormalMap,Ee=ee&&!!L.clearcoatRoughnessMap,He=ve&&!!L.iridescenceMap,tt=ve&&!!L.iridescenceThicknessMap,nt=pe&&!!L.sheenColorMap,Ge=pe&&!!L.sheenRoughnessMap,pt=!!L.specularMap,at=!!L.specularColorMap,Ct=!!L.specularIntensityMap,X=Oe&&!!L.transmissionMap,Le=Oe&&!!L.thicknessMap,fe=!!L.gradientMap,ge=!!L.alphaMap,Ie=L.alphaTest>0,Ne=!!L.alphaHash,lt=!!L.extensions;let Ut=Lr;L.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const Xt={shaderID:ae,shaderType:L.type,shaderName:L.name,vertexShader:Ue,fragmentShader:Q,defines:L.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:E,batching:Ze,batchingColor:Ze&&G._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&G.instanceColor!==null,instancingMorph:Fe&&G.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:fo,alphaToCoverage:!!L.alphaToCoverage,map:Tt,matcap:ht,envMap:At,envMapMode:At&&Z.mapping,envMapCubeUVHeight:O,aoMap:$,lightMap:Qt,bumpMap:Te,normalMap:Pe,displacementMap:y&&ke,emissiveMap:ot,normalMapObjectSpace:Pe&&L.normalMapType===HS,normalMapTangentSpace:Pe&&L.normalMapType===ov,metalnessMap:Ve,roughnessMap:N,anisotropy:R,anisotropyMap:be,clearcoat:ee,clearcoatMap:Be,clearcoatNormalMap:ct,clearcoatRoughnessMap:Ee,dispersion:me,iridescence:ve,iridescenceMap:He,iridescenceThicknessMap:tt,sheen:pe,sheenColorMap:nt,sheenRoughnessMap:Ge,specularMap:pt,specularColorMap:at,specularIntensityMap:Ct,transmission:Oe,transmissionMap:X,thicknessMap:Le,gradientMap:fe,opaque:L.transparent===!1&&L.blending===to&&L.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ie,alphaHash:Ne,combine:L.combine,mapUv:Tt&&T(L.map.channel),aoMapUv:$&&T(L.aoMap.channel),lightMapUv:Qt&&T(L.lightMap.channel),bumpMapUv:Te&&T(L.bumpMap.channel),normalMapUv:Pe&&T(L.normalMap.channel),displacementMapUv:ke&&T(L.displacementMap.channel),emissiveMapUv:ot&&T(L.emissiveMap.channel),metalnessMapUv:Ve&&T(L.metalnessMap.channel),roughnessMapUv:N&&T(L.roughnessMap.channel),anisotropyMapUv:be&&T(L.anisotropyMap.channel),clearcoatMapUv:Be&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:ct&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(L.sheenRoughnessMap.channel),specularMapUv:pt&&T(L.specularMap.channel),specularColorMapUv:at&&T(L.specularColorMap.channel),specularIntensityMapUv:Ct&&T(L.specularIntensityMap.channel),transmissionMapUv:X&&T(L.transmissionMap.channel),thicknessMapUv:Le&&T(L.thicknessMap.channel),alphaMapUv:ge&&T(L.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Pe||R),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!te.attributes.uv&&(Tt||ge),fog:!!re,useFog:L.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:G.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Tt&&L.map.isVideoTexture===!0&&St.getTransfer(L.map.colorSpace)===Pt,decodeVideoTextureEmissive:ot&&L.emissiveMap.isVideoTexture===!0&&St.getTransfer(L.emissiveMap.colorSpace)===Pt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===qi,flipSided:L.side===Un,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:lt&&L.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&L.extensions.multiDraw===!0||Ze)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function _(L){const C=[];if(L.shaderID?C.push(L.shaderID):(C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID)),L.defines!==void 0)for(const V in L.defines)C.push(V),C.push(L.defines[V]);return L.isRawShaderMaterial===!1&&(U(C,L),D(C,L),C.push(r.outputColorSpace)),C.push(L.customProgramCacheKey),C.join()}function U(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function D(L,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),L.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),L.push(d.mask)}function P(L){const C=M[L.type];let V;if(C){const de=Ri[C];V=gE.clone(de.uniforms)}else V=L.uniforms;return V}function Y(L,C){let V;for(let de=0,G=g.length;de<G;de++){const re=g[de];if(re.cacheKey===C){V=re,++V.usedTimes;break}}return V===void 0&&(V=new bw(r,C,L,l),g.push(V)),V}function B(L){if(--L.usedTimes===0){const C=g.indexOf(L);g[C]=g[g.length-1],g.pop(),L.destroy()}}function b(L){h.remove(L)}function I(){h.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:P,acquireProgram:Y,releaseProgram:B,releaseShaderCache:b,programs:g,dispose:I}}function Nw(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function s(u){r.delete(u)}function o(u,d,h){r.get(u)[d]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function Iw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Vg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Gg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(v,y,E,M,T,S){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:E,groupOrder:M,renderOrder:v.renderOrder,z:T,group:S},r[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=E,_.groupOrder=M,_.renderOrder=v.renderOrder,_.z=T,_.group=S),e++,_}function d(v,y,E,M,T,S){const _=u(v,y,E,M,T,S);E.transmission>0?s.push(_):E.transparent===!0?o.push(_):t.push(_)}function h(v,y,E,M,T,S){const _=u(v,y,E,M,T,S);E.transmission>0?s.unshift(_):E.transparent===!0?o.unshift(_):t.unshift(_)}function m(v,y){t.length>1&&t.sort(v||Iw),s.length>1&&s.sort(y||Vg),o.length>1&&o.sort(y||Vg)}function g(){for(let v=e,y=r.length;v<y;v++){const E=r[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:d,unshift:h,finish:g,sort:m}}function Fw(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new Gg,r.set(s,[u])):o>=l.length?(u=new Gg,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function kw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new xt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function Ow(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Bw=0;function zw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Hw(r){const e=new kw,t=Ow(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ie);const o=new ie,l=new kt,u=new kt;function d(m){let g=0,v=0,y=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let E=0,M=0,T=0,S=0,_=0,U=0,D=0,P=0,Y=0,B=0,b=0;m.sort(zw);for(let L=0,C=m.length;L<C;L++){const V=m[L],de=V.color,G=V.intensity,re=V.distance,te=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=de.r*G,v+=de.g*G,y+=de.b*G;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],G);b++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,O=t.get(V);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,s.directionalShadow[E]=O,s.directionalShadowMap[E]=te,s.directionalShadowMatrix[E]=V.shadow.matrix,U++}s.directional[E]=z,E++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(de).multiplyScalar(G),z.distance=re,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[T]=z;const Z=V.shadow;if(V.map&&(s.spotLightMap[Y]=V.map,Y++,Z.updateMatrices(V),V.castShadow&&B++),s.spotLightMatrix[T]=Z.matrix,V.castShadow){const O=t.get(V);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,s.spotShadow[T]=O,s.spotShadowMap[T]=te,P++}T++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(de).multiplyScalar(G),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=z,S++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const Z=V.shadow,O=t.get(V);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,O.shadowCameraNear=Z.camera.near,O.shadowCameraFar=Z.camera.far,s.pointShadow[M]=O,s.pointShadowMap[M]=te,s.pointShadowMatrix[M]=V.shadow.matrix,D++}s.point[M]=z,M++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(G),z.groundColor.copy(V.groundColor).multiplyScalar(G),s.hemi[_]=z,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=y;const I=s.hash;(I.directionalLength!==E||I.pointLength!==M||I.spotLength!==T||I.rectAreaLength!==S||I.hemiLength!==_||I.numDirectionalShadows!==U||I.numPointShadows!==D||I.numSpotShadows!==P||I.numSpotMaps!==Y||I.numLightProbes!==b)&&(s.directional.length=E,s.spot.length=T,s.rectArea.length=S,s.point.length=M,s.hemi.length=_,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=P+Y-B,s.spotLightMap.length=Y,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=b,I.directionalLength=E,I.pointLength=M,I.spotLength=T,I.rectAreaLength=S,I.hemiLength=_,I.numDirectionalShadows=U,I.numPointShadows=D,I.numSpotShadows=P,I.numSpotMaps=Y,I.numLightProbes=b,s.version=Bw++)}function h(m,g){let v=0,y=0,E=0,M=0,T=0;const S=g.matrixWorldInverse;for(let _=0,U=m.length;_<U;_++){const D=m[_];if(D.isDirectionalLight){const P=s.directional[v];P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),v++}else if(D.isSpotLight){const P=s.spot[E];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),E++}else if(D.isRectAreaLight){const P=s.rectArea[M];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),u.identity(),l.copy(D.matrixWorld),l.premultiply(S),u.extractRotation(l),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),M++}else if(D.isPointLight){const P=s.point[y];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),y++}else if(D.isHemisphereLight){const P=s.hemi[T];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(S),T++}}}return{setup:d,setupView:h,state:s}}function Wg(r){const e=new Hw(r),t=[],s=[];function o(g){m.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function u(g){s.push(g)}function d(){e.setup(t)}function h(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function jw(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Wg(r),e.set(o,[d])):l>=u.length?(d=new Wg(r),u.push(d)):d=u[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}class Vw extends po{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=BS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gw extends po{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xw=`uniform sampler2D shadow_pass;
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
}`;function Yw(r,e,t){let s=new lh;const o=new Rt,l=new Rt,u=new jt,d=new Vw({depthPacking:zS}),h=new Gw,m={},g=t.maxTextureSize,v={[Dr]:Un,[Un]:Dr,[qi]:qi},y=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Ww,fragmentShader:Xw}),E=y.clone();E.defines.HORIZONTAL_PASS=1;const M=new tr;M.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Dn(M,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0;let _=this.type;this.render=function(B,b,I){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const L=r.getRenderTarget(),C=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),de=r.state;de.setBlending(Pr),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const G=_!==$i&&this.type===$i,re=_===$i&&this.type!==$i;for(let te=0,z=B.length;te<z;te++){const Z=B[te],O=Z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;o.copy(O.mapSize);const ae=O.getFrameExtents();if(o.multiply(ae),l.copy(O.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/ae.x),o.x=l.x*ae.x,O.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/ae.y),o.y=l.y*ae.y,O.mapSize.y=l.y)),O.map===null||G===!0||re===!0){const k=this.type!==$i?{minFilter:vi,magFilter:vi}:{};O.map!==null&&O.map.dispose(),O.map=new ds(o.x,o.y,k),O.map.texture.name=Z.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const ue=O.getViewportCount();for(let k=0;k<ue;k++){const se=O.getViewport(k);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),de.viewport(u),O.updateMatrices(Z,k),s=O.getFrustum(),P(b,I,O.camera,Z,this.type)}O.isPointLightShadow!==!0&&this.type===$i&&U(O,I),O.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(L,C,V)};function U(B,b){const I=e.update(T);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,E.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,E.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ds(o.x,o.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(b,null,I,y,T,null),E.uniforms.shadow_pass.value=B.mapPass.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(b,null,I,E,T,null)}function D(B,b,I,L){let C=null;const V=I.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)C=V;else if(C=I.isPointLight===!0?h:d,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const de=C.uuid,G=b.uuid;let re=m[de];re===void 0&&(re={},m[de]=re);let te=re[G];te===void 0&&(te=C.clone(),re[G]=te,b.addEventListener("dispose",Y)),C=te}if(C.visible=b.visible,C.wireframe=b.wireframe,L===$i?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:v[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,I.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const de=r.properties.get(C);de.light=I}return C}function P(B,b,I,L,C){if(B.visible===!1)return;if(B.layers.test(b.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===$i)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,B.matrixWorld);const G=e.update(B),re=B.material;if(Array.isArray(re)){const te=G.groups;for(let z=0,Z=te.length;z<Z;z++){const O=te[z],ae=re[O.materialIndex];if(ae&&ae.visible){const ue=D(B,ae,L,C);B.onBeforeShadow(r,B,b,I,G,ue,O),r.renderBufferDirect(I,null,G,ue,B,O),B.onAfterShadow(r,B,b,I,G,ue,O)}}}else if(re.visible){const te=D(B,re,L,C);B.onBeforeShadow(r,B,b,I,G,te,null),r.renderBufferDirect(I,null,G,te,B,null),B.onAfterShadow(r,B,b,I,G,te,null)}}const de=B.children;for(let G=0,re=de.length;G<re;G++)P(de[G],b,I,L,C)}function Y(B){B.target.removeEventListener("dispose",Y);for(const I in m){const L=m[I],C=B.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}const $w={[tf]:nf,[rf]:af,[sf]:lf,[ro]:of,[nf]:tf,[af]:rf,[lf]:sf,[of]:ro};function qw(r,e){function t(){let X=!1;const Le=new jt;let fe=null;const ge=new jt(0,0,0,0);return{setMask:function(Ie){fe!==Ie&&!X&&(r.colorMask(Ie,Ie,Ie,Ie),fe=Ie)},setLocked:function(Ie){X=Ie},setClear:function(Ie,Ne,lt,Ut,Xt){Xt===!0&&(Ie*=Ut,Ne*=Ut,lt*=Ut),Le.set(Ie,Ne,lt,Ut),ge.equals(Le)===!1&&(r.clearColor(Ie,Ne,lt,Ut),ge.copy(Le))},reset:function(){X=!1,fe=null,ge.set(-1,0,0,0)}}}function s(){let X=!1,Le=!1,fe=null,ge=null,Ie=null;return{setReversed:function(Ne){if(Le!==Ne){const lt=e.get("EXT_clip_control");Le?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ie;Ie=null,this.setClear(Ut)}Le=Ne},getReversed:function(){return Le},setTest:function(Ne){Ne?_e(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Ne){fe!==Ne&&!X&&(r.depthMask(Ne),fe=Ne)},setFunc:function(Ne){if(Le&&(Ne=$w[Ne]),ge!==Ne){switch(Ne){case tf:r.depthFunc(r.NEVER);break;case nf:r.depthFunc(r.ALWAYS);break;case rf:r.depthFunc(r.LESS);break;case ro:r.depthFunc(r.LEQUAL);break;case sf:r.depthFunc(r.EQUAL);break;case of:r.depthFunc(r.GEQUAL);break;case af:r.depthFunc(r.GREATER);break;case lf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=Ne}},setLocked:function(Ne){X=Ne},setClear:function(Ne){Ie!==Ne&&(Le&&(Ne=1-Ne),r.clearDepth(Ne),Ie=Ne)},reset:function(){X=!1,fe=null,ge=null,Ie=null,Le=!1}}}function o(){let X=!1,Le=null,fe=null,ge=null,Ie=null,Ne=null,lt=null,Ut=null,Xt=null;return{setTest:function(_t){X||(_t?_e(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(_t){Le!==_t&&!X&&(r.stencilMask(_t),Le=_t)},setFunc:function(_t,En,gn){(fe!==_t||ge!==En||Ie!==gn)&&(r.stencilFunc(_t,En,gn),fe=_t,ge=En,Ie=gn)},setOp:function(_t,En,gn){(Ne!==_t||lt!==En||Ut!==gn)&&(r.stencilOp(_t,En,gn),Ne=_t,lt=En,Ut=gn)},setLocked:function(_t){X=_t},setClear:function(_t){Xt!==_t&&(r.clearStencil(_t),Xt=_t)},reset:function(){X=!1,Le=null,fe=null,ge=null,Ie=null,Ne=null,lt=null,Ut=null,Xt=null}}}const l=new t,u=new s,d=new o,h=new WeakMap,m=new WeakMap;let g={},v={},y=new WeakMap,E=[],M=null,T=!1,S=null,_=null,U=null,D=null,P=null,Y=null,B=null,b=new xt(0,0,0),I=0,L=!1,C=null,V=null,de=null,G=null,re=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(O)[1]),z=Z>=1):O.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),z=Z>=2);let ae=null,ue={};const k=r.getParameter(r.SCISSOR_BOX),se=r.getParameter(r.VIEWPORT),Ue=new jt().fromArray(k),Q=new jt().fromArray(se);function he(X,Le,fe,ge){const Ie=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(X,Ne),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<fe;lt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Le+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Ne}const Me={};Me[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),_e(r.DEPTH_TEST),u.setFunc(ro),Te(!1),Pe(qm),_e(r.CULL_FACE),$(Pr);function _e(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function Ae(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function Fe(X,Le){return v[X]!==Le?(r.bindFramebuffer(X,Le),v[X]=Le,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Le),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ze(X,Le){let fe=E,ge=!1;if(X){fe=y.get(Le),fe===void 0&&(fe=[],y.set(Le,fe));const Ie=X.textures;if(fe.length!==Ie.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,lt=Ie.length;Ne<lt;Ne++)fe[Ne]=r.COLOR_ATTACHMENT0+Ne;fe.length=Ie.length,ge=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,ge=!0);ge&&r.drawBuffers(fe)}function Tt(X){return M!==X?(r.useProgram(X),M=X,!0):!1}const ht={[ss]:r.FUNC_ADD,[fS]:r.FUNC_SUBTRACT,[hS]:r.FUNC_REVERSE_SUBTRACT};ht[pS]=r.MIN,ht[mS]=r.MAX;const At={[gS]:r.ZERO,[vS]:r.ONE,[xS]:r.SRC_COLOR,[Jd]:r.SRC_ALPHA,[TS]:r.SRC_ALPHA_SATURATE,[ES]:r.DST_COLOR,[yS]:r.DST_ALPHA,[_S]:r.ONE_MINUS_SRC_COLOR,[ef]:r.ONE_MINUS_SRC_ALPHA,[MS]:r.ONE_MINUS_DST_COLOR,[SS]:r.ONE_MINUS_DST_ALPHA,[wS]:r.CONSTANT_COLOR,[RS]:r.ONE_MINUS_CONSTANT_COLOR,[CS]:r.CONSTANT_ALPHA,[AS]:r.ONE_MINUS_CONSTANT_ALPHA};function $(X,Le,fe,ge,Ie,Ne,lt,Ut,Xt,_t){if(X===Pr){T===!0&&(Ae(r.BLEND),T=!1);return}if(T===!1&&(_e(r.BLEND),T=!0),X!==dS){if(X!==S||_t!==L){if((_!==ss||P!==ss)&&(r.blendEquation(r.FUNC_ADD),_=ss,P=ss),_t)switch(X){case to:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Km:r.blendFunc(r.ONE,r.ONE);break;case Zm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case to:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Km:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}U=null,D=null,Y=null,B=null,b.set(0,0,0),I=0,S=X,L=_t}return}Ie=Ie||Le,Ne=Ne||fe,lt=lt||ge,(Le!==_||Ie!==P)&&(r.blendEquationSeparate(ht[Le],ht[Ie]),_=Le,P=Ie),(fe!==U||ge!==D||Ne!==Y||lt!==B)&&(r.blendFuncSeparate(At[fe],At[ge],At[Ne],At[lt]),U=fe,D=ge,Y=Ne,B=lt),(Ut.equals(b)===!1||Xt!==I)&&(r.blendColor(Ut.r,Ut.g,Ut.b,Xt),b.copy(Ut),I=Xt),S=X,L=!1}function Qt(X,Le){X.side===qi?Ae(r.CULL_FACE):_e(r.CULL_FACE);let fe=X.side===Un;Le&&(fe=!fe),Te(fe),X.blending===to&&X.transparent===!1?$(Pr):$(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const ge=X.stencilWrite;d.setTest(ge),ge&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ot(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Te(X){C!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),C=X)}function Pe(X){X!==lS?(_e(r.CULL_FACE),X!==V&&(X===qm?r.cullFace(r.BACK):X===cS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),V=X}function ke(X){X!==de&&(z&&r.lineWidth(X),de=X)}function ot(X,Le,fe){X?(_e(r.POLYGON_OFFSET_FILL),(G!==Le||re!==fe)&&(r.polygonOffset(Le,fe),G=Le,re=fe)):Ae(r.POLYGON_OFFSET_FILL)}function Ve(X){X?_e(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function N(X){X===void 0&&(X=r.TEXTURE0+te-1),ae!==X&&(r.activeTexture(X),ae=X)}function R(X,Le,fe){fe===void 0&&(ae===null?fe=r.TEXTURE0+te-1:fe=ae);let ge=ue[fe];ge===void 0&&(ge={type:void 0,texture:void 0},ue[fe]=ge),(ge.type!==X||ge.texture!==Le)&&(ae!==fe&&(r.activeTexture(fe),ae=fe),r.bindTexture(X,Le||Me[X]),ge.type=X,ge.texture=Le)}function ee(){const X=ue[ae];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{r.compressedTexImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{r.texSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{r.texSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{r.texStorage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{r.texStorage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{r.texImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{r.texImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(X){Ue.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ue.copy(X))}function Ge(X){Q.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function pt(X,Le){let fe=m.get(Le);fe===void 0&&(fe=new WeakMap,m.set(Le,fe));let ge=fe.get(X);ge===void 0&&(ge=r.getUniformBlockIndex(Le,X.name),fe.set(X,ge))}function at(X,Le){const ge=m.get(Le).get(X);h.get(Le)!==ge&&(r.uniformBlockBinding(Le,ge,X.__bindingPointIndex),h.set(Le,ge))}function Ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ae=null,ue={},v={},y=new WeakMap,E=[],M=null,T=!1,S=null,_=null,U=null,D=null,P=null,Y=null,B=null,b=new xt(0,0,0),I=0,L=!1,C=null,V=null,de=null,G=null,re=null,Ue.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:_e,disable:Ae,bindFramebuffer:Fe,drawBuffers:Ze,useProgram:Tt,setBlending:$,setMaterial:Qt,setFlipSided:Te,setCullFace:Pe,setLineWidth:ke,setPolygonOffset:ot,setScissorTest:Ve,activeTexture:N,bindTexture:R,unbindTexture:ee,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:He,texImage3D:tt,updateUBOMapping:pt,uniformBlockBinding:at,texStorage2D:ct,texStorage3D:Ee,texSubImage2D:pe,texSubImage3D:Oe,compressedTexSubImage2D:be,compressedTexSubImage3D:Be,scissor:nt,viewport:Ge,reset:Ct}}function Xg(r,e,t,s){const o=Kw(s);switch(t){case J0:return r*e;case tv:return r*e;case nv:return r*e*2;case iv:return r*e/o.components*o.byteLength;case ih:return r*e/o.components*o.byteLength;case rv:return r*e*2/o.components*o.byteLength;case rh:return r*e*2/o.components*o.byteLength;case ev:return r*e*3/o.components*o.byteLength;case pi:return r*e*4/o.components*o.byteLength;case sh:return r*e*4/o.components*o.byteLength;case sc:case oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ac:case lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pf:case gf:return Math.max(r,16)*Math.max(e,8)/4;case hf:case mf:return Math.max(r,8)*Math.max(e,8)/2;case vf:case xf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _f:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case wf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Af:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Df:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case cc:case Nf:case If:return Math.ceil(r/4)*Math.ceil(e/4)*16;case sv:case Ff:return Math.ceil(r/4)*Math.ceil(e/4)*8;case kf:case Of:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kw(r){switch(r){case er:case K0:return{byteLength:1,components:1};case ca:case Z0:case ha:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case us:case eh:case Ki:return{byteLength:4,components:1};case Q0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Zw(r,e,t,s,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,g=new WeakMap;let v;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,R){return E?new OffscreenCanvas(N,R):mc("canvas")}function T(N,R,ee){let me=1;const ve=Ve(N);if((ve.width>ee||ve.height>ee)&&(me=ee/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const pe=Math.floor(me*ve.width),Oe=Math.floor(me*ve.height);v===void 0&&(v=M(pe,Oe));const be=R?M(pe,Oe):v;return be.width=pe,be.height=Oe,be.getContext("2d").drawImage(N,0,0,pe,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+pe+"x"+Oe+")."),be}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),N;return N}function S(N){return N.generateMipmaps}function _(N){r.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(N,R,ee,me,ve=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pe=R;if(R===r.RED&&(ee===r.FLOAT&&(pe=r.R32F),ee===r.HALF_FLOAT&&(pe=r.R16F),ee===r.UNSIGNED_BYTE&&(pe=r.R8)),R===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.R8UI),ee===r.UNSIGNED_SHORT&&(pe=r.R16UI),ee===r.UNSIGNED_INT&&(pe=r.R32UI),ee===r.BYTE&&(pe=r.R8I),ee===r.SHORT&&(pe=r.R16I),ee===r.INT&&(pe=r.R32I)),R===r.RG&&(ee===r.FLOAT&&(pe=r.RG32F),ee===r.HALF_FLOAT&&(pe=r.RG16F),ee===r.UNSIGNED_BYTE&&(pe=r.RG8)),R===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RG8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RG16UI),ee===r.UNSIGNED_INT&&(pe=r.RG32UI),ee===r.BYTE&&(pe=r.RG8I),ee===r.SHORT&&(pe=r.RG16I),ee===r.INT&&(pe=r.RG32I)),R===r.RGB_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),ee===r.UNSIGNED_INT&&(pe=r.RGB32UI),ee===r.BYTE&&(pe=r.RGB8I),ee===r.SHORT&&(pe=r.RGB16I),ee===r.INT&&(pe=r.RGB32I)),R===r.RGBA_INTEGER&&(ee===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),ee===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),ee===r.UNSIGNED_INT&&(pe=r.RGBA32UI),ee===r.BYTE&&(pe=r.RGBA8I),ee===r.SHORT&&(pe=r.RGBA16I),ee===r.INT&&(pe=r.RGBA32I)),R===r.RGB&&ee===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),R===r.RGBA){const Oe=ve?Ec:St.getTransfer(me);ee===r.FLOAT&&(pe=r.RGBA32F),ee===r.HALF_FLOAT&&(pe=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(pe=Oe===Pt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function P(N,R){let ee;return N?R===null||R===us||R===ao?ee=r.DEPTH24_STENCIL8:R===Ki?ee=r.DEPTH32F_STENCIL8:R===ca&&(ee=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===us||R===ao?ee=r.DEPTH_COMPONENT24:R===Ki?ee=r.DEPTH_COMPONENT32F:R===ca&&(ee=r.DEPTH_COMPONENT16),ee}function Y(N,R){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==vi&&N.minFilter!==Ci?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function B(N){const R=N.target;R.removeEventListener("dispose",B),I(R),R.isVideoTexture&&g.delete(R)}function b(N){const R=N.target;R.removeEventListener("dispose",b),C(R)}function I(N){const R=s.get(N);if(R.__webglInit===void 0)return;const ee=N.source,me=y.get(ee);if(me){const ve=me[R.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&L(N),Object.keys(me).length===0&&y.delete(ee)}s.remove(N)}function L(N){const R=s.get(N);r.deleteTexture(R.__webglTexture);const ee=N.source,me=y.get(ee);delete me[R.__cacheKey],u.memory.textures--}function C(N){const R=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(R.__webglFramebuffer[me]))for(let ve=0;ve<R.__webglFramebuffer[me].length;ve++)r.deleteFramebuffer(R.__webglFramebuffer[me][ve]);else r.deleteFramebuffer(R.__webglFramebuffer[me]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[me])}else{if(Array.isArray(R.__webglFramebuffer))for(let me=0;me<R.__webglFramebuffer.length;me++)r.deleteFramebuffer(R.__webglFramebuffer[me]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let me=0;me<R.__webglColorRenderbuffer.length;me++)R.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[me]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ee=N.textures;for(let me=0,ve=ee.length;me<ve;me++){const pe=s.get(ee[me]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),u.memory.textures--),s.remove(ee[me])}s.remove(N)}let V=0;function de(){V=0}function G(){const N=V;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),V+=1,N}function re(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function te(N,R){const ee=s.get(N);if(N.isVideoTexture&&ke(N),N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){const me=N.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(ee,N,R);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+R)}function z(N,R){const ee=s.get(N);if(N.version>0&&ee.__version!==N.version){Q(ee,N,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+R)}function Z(N,R){const ee=s.get(N);if(N.version>0&&ee.__version!==N.version){Q(ee,N,R);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+R)}function O(N,R){const ee=s.get(N);if(N.version>0&&ee.__version!==N.version){he(ee,N,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+R)}const ae={[df]:r.REPEAT,[as]:r.CLAMP_TO_EDGE,[ff]:r.MIRRORED_REPEAT},ue={[vi]:r.NEAREST,[OS]:r.NEAREST_MIPMAP_NEAREST,[wl]:r.NEAREST_MIPMAP_LINEAR,[Ci]:r.LINEAR,[fd]:r.LINEAR_MIPMAP_NEAREST,[ls]:r.LINEAR_MIPMAP_LINEAR},k={[jS]:r.NEVER,[$S]:r.ALWAYS,[VS]:r.LESS,[av]:r.LEQUAL,[GS]:r.EQUAL,[YS]:r.GEQUAL,[WS]:r.GREATER,[XS]:r.NOTEQUAL};function se(N,R){if(R.type===Ki&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Ci||R.magFilter===fd||R.magFilter===wl||R.magFilter===ls||R.minFilter===Ci||R.minFilter===fd||R.minFilter===wl||R.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,ae[R.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,ae[R.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,ae[R.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,ue[R.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,ue[R.minFilter]),R.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,k[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===vi||R.minFilter!==wl&&R.minFilter!==ls||R.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function Ue(N,R){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",B));const me=R.source;let ve=y.get(me);ve===void 0&&(ve={},y.set(me,ve));const pe=re(R);if(pe!==N.__cacheKey){ve[pe]===void 0&&(ve[pe]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ve[pe].usedTimes++;const Oe=ve[N.__cacheKey];Oe!==void 0&&(ve[N.__cacheKey].usedTimes--,Oe.usedTimes===0&&L(R)),N.__cacheKey=pe,N.__webglTexture=ve[pe].texture}return ee}function Q(N,R,ee){let me=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(me=r.TEXTURE_3D);const ve=Ue(N,R),pe=R.source;t.bindTexture(me,N.__webglTexture,r.TEXTURE0+ee);const Oe=s.get(pe);if(pe.version!==Oe.__version||ve===!0){t.activeTexture(r.TEXTURE0+ee);const be=St.getPrimaries(St.workingColorSpace),Be=R.colorSpace===br?null:St.getPrimaries(R.colorSpace),ct=R.colorSpace===br||be===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Ee=T(R.image,!1,o.maxTextureSize);Ee=ot(R,Ee);const He=l.convert(R.format,R.colorSpace),tt=l.convert(R.type);let nt=D(R.internalFormat,He,tt,R.colorSpace,R.isVideoTexture);se(me,R);let Ge;const pt=R.mipmaps,at=R.isVideoTexture!==!0,Ct=Oe.__version===void 0||ve===!0,X=pe.dataReady,Le=Y(R,Ee);if(R.isDepthTexture)nt=P(R.format===lo,R.type),Ct&&(at?t.texStorage2D(r.TEXTURE_2D,1,nt,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,He,tt,null));else if(R.isDataTexture)if(pt.length>0){at&&Ct&&t.texStorage2D(r.TEXTURE_2D,Le,nt,pt[0].width,pt[0].height);for(let fe=0,ge=pt.length;fe<ge;fe++)Ge=pt[fe],at?X&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ge.width,Ge.height,He,tt,Ge.data):t.texImage2D(r.TEXTURE_2D,fe,nt,Ge.width,Ge.height,0,He,tt,Ge.data);R.generateMipmaps=!1}else at?(Ct&&t.texStorage2D(r.TEXTURE_2D,Le,nt,Ee.width,Ee.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,He,tt,Ee.data)):t.texImage2D(r.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,He,tt,Ee.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){at&&Ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,nt,pt[0].width,pt[0].height,Ee.depth);for(let fe=0,ge=pt.length;fe<ge;fe++)if(Ge=pt[fe],R.format!==pi)if(He!==null)if(at){if(X)if(R.layerUpdates.size>0){const Ie=Xg(Ge.width,Ge.height,R.format,R.type);for(const Ne of R.layerUpdates){const lt=Ge.data.subarray(Ne*Ie/Ge.data.BYTES_PER_ELEMENT,(Ne+1)*Ie/Ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,Ne,Ge.width,Ge.height,1,He,lt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Ge.width,Ge.height,Ee.depth,He,Ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,nt,Ge.width,Ge.height,Ee.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Ge.width,Ge.height,Ee.depth,He,tt,Ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,nt,Ge.width,Ge.height,Ee.depth,0,He,tt,Ge.data)}else{at&&Ct&&t.texStorage2D(r.TEXTURE_2D,Le,nt,pt[0].width,pt[0].height);for(let fe=0,ge=pt.length;fe<ge;fe++)Ge=pt[fe],R.format!==pi?He!==null?at?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,Ge.width,Ge.height,He,Ge.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,nt,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?X&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ge.width,Ge.height,He,tt,Ge.data):t.texImage2D(r.TEXTURE_2D,fe,nt,Ge.width,Ge.height,0,He,tt,Ge.data)}else if(R.isDataArrayTexture)if(at){if(Ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,nt,Ee.width,Ee.height,Ee.depth),X)if(R.layerUpdates.size>0){const fe=Xg(Ee.width,Ee.height,R.format,R.type);for(const ge of R.layerUpdates){const Ie=Ee.data.subarray(ge*fe/Ee.data.BYTES_PER_ELEMENT,(ge+1)*fe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Ee.width,Ee.height,1,He,tt,Ie)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,He,tt,Ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,nt,Ee.width,Ee.height,Ee.depth,0,He,tt,Ee.data);else if(R.isData3DTexture)at?(Ct&&t.texStorage3D(r.TEXTURE_3D,Le,nt,Ee.width,Ee.height,Ee.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,He,tt,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,nt,Ee.width,Ee.height,Ee.depth,0,He,tt,Ee.data);else if(R.isFramebufferTexture){if(Ct)if(at)t.texStorage2D(r.TEXTURE_2D,Le,nt,Ee.width,Ee.height);else{let fe=Ee.width,ge=Ee.height;for(let Ie=0;Ie<Le;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,nt,fe,ge,0,He,tt,null),fe>>=1,ge>>=1}}else if(pt.length>0){if(at&&Ct){const fe=Ve(pt[0]);t.texStorage2D(r.TEXTURE_2D,Le,nt,fe.width,fe.height)}for(let fe=0,ge=pt.length;fe<ge;fe++)Ge=pt[fe],at?X&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,He,tt,Ge):t.texImage2D(r.TEXTURE_2D,fe,nt,He,tt,Ge);R.generateMipmaps=!1}else if(at){if(Ct){const fe=Ve(Ee);t.texStorage2D(r.TEXTURE_2D,Le,nt,fe.width,fe.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,He,tt,Ee)}else t.texImage2D(r.TEXTURE_2D,0,nt,He,tt,Ee);S(R)&&_(me),Oe.__version=pe.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function he(N,R,ee){if(R.image.length!==6)return;const me=Ue(N,R),ve=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+ee);const pe=s.get(ve);if(ve.version!==pe.__version||me===!0){t.activeTexture(r.TEXTURE0+ee);const Oe=St.getPrimaries(St.workingColorSpace),be=R.colorSpace===br?null:St.getPrimaries(R.colorSpace),Be=R.colorSpace===br||Oe===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const ct=R.isCompressedTexture||R.image[0].isCompressedTexture,Ee=R.image[0]&&R.image[0].isDataTexture,He=[];for(let ge=0;ge<6;ge++)!ct&&!Ee?He[ge]=T(R.image[ge],!0,o.maxCubemapSize):He[ge]=Ee?R.image[ge].image:R.image[ge],He[ge]=ot(R,He[ge]);const tt=He[0],nt=l.convert(R.format,R.colorSpace),Ge=l.convert(R.type),pt=D(R.internalFormat,nt,Ge,R.colorSpace),at=R.isVideoTexture!==!0,Ct=pe.__version===void 0||me===!0,X=ve.dataReady;let Le=Y(R,tt);se(r.TEXTURE_CUBE_MAP,R);let fe;if(ct){at&&Ct&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,pt,tt.width,tt.height);for(let ge=0;ge<6;ge++){fe=He[ge].mipmaps;for(let Ie=0;Ie<fe.length;Ie++){const Ne=fe[Ie];R.format!==pi?nt!==null?at?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,Ne.width,Ne.height,nt,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,pt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,Ne.width,Ne.height,nt,Ge,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,pt,Ne.width,Ne.height,0,nt,Ge,Ne.data)}}}else{if(fe=R.mipmaps,at&&Ct){fe.length>0&&Le++;const ge=Ve(He[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,pt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ee){at?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,He[ge].width,He[ge].height,nt,Ge,He[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,pt,He[ge].width,He[ge].height,0,nt,Ge,He[ge].data);for(let Ie=0;Ie<fe.length;Ie++){const lt=fe[Ie].image[ge].image;at?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,lt.width,lt.height,nt,Ge,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,pt,lt.width,lt.height,0,nt,Ge,lt.data)}}else{at?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,nt,Ge,He[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,pt,nt,Ge,He[ge]);for(let Ie=0;Ie<fe.length;Ie++){const Ne=fe[Ie];at?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,nt,Ge,Ne.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,pt,nt,Ge,Ne.image[ge])}}}S(R)&&_(r.TEXTURE_CUBE_MAP),pe.__version=ve.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Me(N,R,ee,me,ve,pe){const Oe=l.convert(ee.format,ee.colorSpace),be=l.convert(ee.type),Be=D(ee.internalFormat,Oe,be,ee.colorSpace),ct=s.get(R),Ee=s.get(ee);if(Ee.__renderTarget=R,!ct.__hasExternalTextures){const He=Math.max(1,R.width>>pe),tt=Math.max(1,R.height>>pe);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,pe,Be,He,tt,R.depth,0,Oe,be,null):t.texImage2D(ve,pe,Be,He,tt,0,Oe,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),Pe(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ve,Ee.__webglTexture,0,Te(R)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ve,Ee.__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(N,R,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,N),R.depthBuffer){const me=R.depthTexture,ve=me&&me.isDepthTexture?me.type:null,pe=P(R.stencilBuffer,ve),Oe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=Te(R);Pe(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,pe,R.width,R.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,pe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,pe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,N)}else{const me=R.textures;for(let ve=0;ve<me.length;ve++){const pe=me[ve],Oe=l.convert(pe.format,pe.colorSpace),be=l.convert(pe.type),Be=D(pe.internalFormat,Oe,be,pe.colorSpace),ct=Te(R);ee&&Pe(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,Be,R.width,R.height):Pe(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,Be,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Be,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(R.depthTexture);me.__renderTarget=R,(!me.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),te(R.depthTexture,0);const ve=me.__webglTexture,pe=Te(R);if(R.depthTexture.format===no)Pe(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(R.depthTexture.format===lo)Pe(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Fe(N){const R=s.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){const me=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),me){const ve=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),R.__depthDisposeCallback=ve}R.__boundDepthTexture=me}if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Ae(R.__webglFramebuffer,N)}else if(ee){R.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[me]),R.__webglDepthbuffer[me]===void 0)R.__webglDepthbuffer[me]=r.createRenderbuffer(),_e(R.__webglDepthbuffer[me],N,!1);else{const ve=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=R.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),_e(R.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,ve)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(N,R,ee){const me=s.get(N);R!==void 0&&Me(me.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&Fe(N)}function Tt(N){const R=N.texture,ee=s.get(N),me=s.get(R);N.addEventListener("dispose",b);const ve=N.textures,pe=N.isWebGLCubeRenderTarget===!0,Oe=ve.length>1;if(Oe||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=R.version,u.memory.textures++),pe){ee.__webglFramebuffer=[];for(let be=0;be<6;be++)if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer[be]=[];for(let Be=0;Be<R.mipmaps.length;Be++)ee.__webglFramebuffer[be][Be]=r.createFramebuffer()}else ee.__webglFramebuffer[be]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ee.__webglFramebuffer=[];for(let be=0;be<R.mipmaps.length;be++)ee.__webglFramebuffer[be]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let be=0,Be=ve.length;be<Be;be++){const ct=s.get(ve[be]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),u.memory.textures++)}if(N.samples>0&&Pe(N)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const Be=ve[be];ee.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[be]);const ct=l.convert(Be.format,Be.colorSpace),Ee=l.convert(Be.type),He=D(Be.internalFormat,ct,Ee,Be.colorSpace,N.isXRRenderTarget===!0),tt=Te(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,He,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,ee.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(ee.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),se(r.TEXTURE_CUBE_MAP,R);for(let be=0;be<6;be++)if(R.mipmaps&&R.mipmaps.length>0)for(let Be=0;Be<R.mipmaps.length;Be++)Me(ee.__webglFramebuffer[be][Be],N,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be);else Me(ee.__webglFramebuffer[be],N,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);S(R)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let be=0,Be=ve.length;be<Be;be++){const ct=ve[be],Ee=s.get(ct);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),se(r.TEXTURE_2D,ct),Me(ee.__webglFramebuffer,N,ct,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),S(ct)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(be=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,me.__webglTexture),se(be,R),R.mipmaps&&R.mipmaps.length>0)for(let Be=0;Be<R.mipmaps.length;Be++)Me(ee.__webglFramebuffer[Be],N,R,r.COLOR_ATTACHMENT0,be,Be);else Me(ee.__webglFramebuffer,N,R,r.COLOR_ATTACHMENT0,be,0);S(R)&&_(be),t.unbindTexture()}N.depthBuffer&&Fe(N)}function ht(N){const R=N.textures;for(let ee=0,me=R.length;ee<me;ee++){const ve=R[ee];if(S(ve)){const pe=U(N),Oe=s.get(ve).__webglTexture;t.bindTexture(pe,Oe),_(pe),t.unbindTexture()}}}const At=[],$=[];function Qt(N){if(N.samples>0){if(Pe(N)===!1){const R=N.textures,ee=N.width,me=N.height;let ve=r.COLOR_BUFFER_BIT;const pe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=s.get(N),be=R.length>1;if(be)for(let Be=0;Be<R.length;Be++)t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Be=0;Be<R.length;Be++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Be]);const ct=s.get(R[Be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,ee,me,0,0,ee,me,ve,r.NEAREST),h===!0&&(At.length=0,$.length=0,At.push(r.COLOR_ATTACHMENT0+Be),N.depthBuffer&&N.resolveDepthBuffer===!1&&(At.push(pe),$.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,$)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Be=0;Be<R.length;Be++){t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Be]);const ct=s.get(R[Be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,ct,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const R=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function Te(N){return Math.min(o.maxSamples,N.samples)}function Pe(N){const R=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ke(N){const R=u.render.frame;g.get(N)!==R&&(g.set(N,R),N.update())}function ot(N,R){const ee=N.colorSpace,me=N.format,ve=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==fo&&ee!==br&&(St.getTransfer(ee)===Pt?(me!==pi||ve!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),R}function Ve(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=G,this.resetTextureUnits=de,this.setTexture2D=te,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=O,this.rebindTextures=Ze,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Pe}function Qw(r,e){function t(s,o=br){let l;const u=St.getTransfer(o);if(s===er)return r.UNSIGNED_BYTE;if(s===th)return r.UNSIGNED_SHORT_4_4_4_4;if(s===nh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Q0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===K0)return r.BYTE;if(s===Z0)return r.SHORT;if(s===ca)return r.UNSIGNED_SHORT;if(s===eh)return r.INT;if(s===us)return r.UNSIGNED_INT;if(s===Ki)return r.FLOAT;if(s===ha)return r.HALF_FLOAT;if(s===J0)return r.ALPHA;if(s===ev)return r.RGB;if(s===pi)return r.RGBA;if(s===tv)return r.LUMINANCE;if(s===nv)return r.LUMINANCE_ALPHA;if(s===no)return r.DEPTH_COMPONENT;if(s===lo)return r.DEPTH_STENCIL;if(s===iv)return r.RED;if(s===ih)return r.RED_INTEGER;if(s===rv)return r.RG;if(s===rh)return r.RG_INTEGER;if(s===sh)return r.RGBA_INTEGER;if(s===sc||s===oc||s===ac||s===lc)if(u===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===sc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ac)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===sc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===oc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ac)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===lc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hf||s===pf||s===mf||s===gf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===hf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vf||s===xf||s===_f)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===vf||s===xf)return u===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===_f)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yf||s===Sf||s===Ef||s===Mf||s===Tf||s===wf||s===Rf||s===Cf||s===Af||s===bf||s===Pf||s===Lf||s===Df||s===Uf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===yf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ef)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Tf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Af)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Df)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cc||s===Nf||s===If)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===cc)return u===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Nf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===If)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sv||s===Ff||s===kf||s===Of)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===cc)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Ff)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Of)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ao?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}class Jw extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ra extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eR={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,s),_=this._getHandJoint(m,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=g.position.distanceTo(v.position),E=.02,M=.005;m.inputState.pinching&&y>E+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=E-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(eR)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ra;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const tR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nR=`
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

}`;class iR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Nn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Ur({vertexShader:tR,fragmentShader:nR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new Tc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rR extends ho{constructor(e,t){super();const s=this;let o=null,l=1,u=null,d="local-floor",h=1,m=null,g=null,v=null,y=null,E=null,M=null;const T=new iR,S=t.getContextAttributes();let _=null,U=null;const D=[],P=[],Y=new Rt;let B=null;const b=new Jn;b.viewport=new jt;const I=new Jn;I.viewport=new jt;const L=[b,I],C=new Jw;let V=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=D[Q];return he===void 0&&(he=new zd,D[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=D[Q];return he===void 0&&(he=new zd,D[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=D[Q];return he===void 0&&(he=new zd,D[Q]=he),he.getHandSpace()};function G(Q){const he=P.indexOf(Q.inputSource);if(he===-1)return;const Me=D[he];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,m||u),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function re(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",te);for(let Q=0;Q<D.length;Q++){const he=P[Q];he!==null&&(P[Q]=null,D[Q].disconnect(he))}V=null,de=null,T.reset(),e.setRenderTarget(_),E=null,y=null,v=null,o=null,U=null,Ue.stop(),s.isPresenting=!1,e.setPixelRatio(B),e.setSize(Y.width,Y.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return y!==null?y:E},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",re),o.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(Y),o.renderState.layers===void 0){const he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};E=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new ds(E.framebufferWidth,E.framebufferHeight,{format:pi,type:er,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let he=null,Me=null,_e=null;S.depth&&(_e=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?lo:no,Me=S.stencil?ao:us);const Ae={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};v=new XRWebGLBinding(o,t),y=v.createProjectionLayer(Ae),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new ds(y.textureWidth,y.textureHeight,{format:pi,type:er,depthTexture:new yv(y.textureWidth,y.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(d),Ue.setContext(o),Ue.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function te(Q){for(let he=0;he<Q.removed.length;he++){const Me=Q.removed[he],_e=P.indexOf(Me);_e>=0&&(P[_e]=null,D[_e].disconnect(Me))}for(let he=0;he<Q.added.length;he++){const Me=Q.added[he];let _e=P.indexOf(Me);if(_e===-1){for(let Fe=0;Fe<D.length;Fe++)if(Fe>=P.length){P.push(Me),_e=Fe;break}else if(P[Fe]===null){P[Fe]=Me,_e=Fe;break}if(_e===-1)break}const Ae=D[_e];Ae&&Ae.connect(Me)}}const z=new ie,Z=new ie;function O(Q,he,Me){z.setFromMatrixPosition(he.matrixWorld),Z.setFromMatrixPosition(Me.matrixWorld);const _e=z.distanceTo(Z),Ae=he.projectionMatrix.elements,Fe=Me.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),Tt=Ae[14]/(Ae[10]+1),ht=(Ae[9]+1)/Ae[5],At=(Ae[9]-1)/Ae[5],$=(Ae[8]-1)/Ae[0],Qt=(Fe[8]+1)/Fe[0],Te=Ze*$,Pe=Ze*Qt,ke=_e/(-$+Qt),ot=ke*-$;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ot),Q.translateZ(ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ve=Ze+ke,N=Tt+ke,R=Te-ot,ee=Pe+(_e-ot),me=ht*Tt/N*Ve,ve=At*Tt/N*Ve;Q.projectionMatrix.makePerspective(R,ee,me,ve,Ve,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let he=Q.near,Me=Q.far;T.texture!==null&&(T.depthNear>0&&(he=T.depthNear),T.depthFar>0&&(Me=T.depthFar)),C.near=I.near=b.near=he,C.far=I.far=b.far=Me,(V!==C.near||de!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,de=C.far),b.layers.mask=Q.layers.mask|2,I.layers.mask=Q.layers.mask|4,C.layers.mask=b.layers.mask|I.layers.mask;const _e=Q.parent,Ae=C.cameras;ae(C,_e);for(let Fe=0;Fe<Ae.length;Fe++)ae(Ae[Fe],_e);Ae.length===2?O(C,b,I):C.projectionMatrix.copy(b.projectionMatrix),ue(Q,C,_e)};function ue(Q,he,Me){Me===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Bf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&E===null))return h},this.setFoveation=function(Q){h=Q,y!==null&&(y.fixedFoveation=Q),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let k=null;function se(Q,he){if(g=he.getViewerPose(m||u),M=he,g!==null){const Me=g.views;E!==null&&(e.setRenderTargetFramebuffer(U,E.framebuffer),e.setRenderTarget(U));let _e=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let Fe=0;Fe<Me.length;Fe++){const Ze=Me[Fe];let Tt=null;if(E!==null)Tt=E.getViewport(Ze);else{const At=v.getViewSubImage(y,Ze);Tt=At.viewport,Fe===0&&(e.setRenderTargetTextures(U,At.colorTexture,y.ignoreDepthValues?void 0:At.depthStencilTexture),e.setRenderTarget(U))}let ht=L[Fe];ht===void 0&&(ht=new Jn,ht.layers.enable(Fe),ht.viewport=new jt,L[Fe]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Fe===0&&(C.matrix.copy(ht.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(ht)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Fe=v.getDepthInformation(Me[0]);Fe&&Fe.isValid&&Fe.texture&&T.init(e,Fe,o.renderState)}}for(let Me=0;Me<D.length;Me++){const _e=P[Me],Ae=D[Me];_e!==null&&Ae!==void 0&&Ae.update(_e,he,m||u)}k&&k(Q,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),M=null}const Ue=new xv;Ue.setAnimationLoop(se),this.setAnimationLoop=function(Q){k=Q},this.dispose=function(){}}}const Jr=new Pi,sR=new kt;function oR(r,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,mv(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,U,D,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(S,_):_.isMeshToonMaterial?(l(S,_),v(S,_)):_.isMeshPhongMaterial?(l(S,_),g(S,_)):_.isMeshStandardMaterial?(l(S,_),y(S,_),_.isMeshPhysicalMaterial&&E(S,_,P)):_.isMeshMatcapMaterial?(l(S,_),M(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),T(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?h(S,_,U,D):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Un&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Un&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const U=e.get(_),D=U.envMap,P=U.envMapRotation;D&&(S.envMap.value=D,Jr.copy(P),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),S.envMapRotation.value.setFromMatrix4(sR.makeRotationFromEuler(Jr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function h(S,_,U,D){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*U,S.scale.value=D*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function E(S,_,U){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Un&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const U=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function aR(r,e,t,s){let o={},l={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,D){const P=D.program;s.uniformBlockBinding(U,P)}function m(U,D){let P=o[U.id];P===void 0&&(M(U),P=g(U),o[U.id]=P,U.addEventListener("dispose",S));const Y=D.program;s.updateUBOMapping(U,Y);const B=e.render.frame;l[U.id]!==B&&(y(U),l[U.id]=B)}function g(U){const D=v();U.__bindingPointIndex=D;const P=r.createBuffer(),Y=U.__size,B=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,Y,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,P),P}function v(){for(let U=0;U<d;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const D=o[U.id],P=U.uniforms,Y=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let B=0,b=P.length;B<b;B++){const I=Array.isArray(P[B])?P[B]:[P[B]];for(let L=0,C=I.length;L<C;L++){const V=I[L];if(E(V,B,L,Y)===!0){const de=V.__offset,G=Array.isArray(V.value)?V.value:[V.value];let re=0;for(let te=0;te<G.length;te++){const z=G[te],Z=T(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,de+re,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,re),re+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,de,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(U,D,P,Y){const B=U.value,b=D+"_"+P;if(Y[b]===void 0)return typeof B=="number"||typeof B=="boolean"?Y[b]=B:Y[b]=B.clone(),!0;{const I=Y[b];if(typeof B=="number"||typeof B=="boolean"){if(I!==B)return Y[b]=B,!0}else if(I.equals(B)===!1)return I.copy(B),!0}return!1}function M(U){const D=U.uniforms;let P=0;const Y=16;for(let b=0,I=D.length;b<I;b++){const L=Array.isArray(D[b])?D[b]:[D[b]];for(let C=0,V=L.length;C<V;C++){const de=L[C],G=Array.isArray(de.value)?de.value:[de.value];for(let re=0,te=G.length;re<te;re++){const z=G[re],Z=T(z),O=P%Y,ae=O%Z.boundary,ue=O+ae;P+=ae,ue!==0&&Y-ue<Z.storage&&(P+=Y-ue),de.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=P,P+=Z.storage}}}const B=P%Y;return B>0&&(P+=Y-B),U.__size=P,U.__cache={},this}function T(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function S(U){const D=U.target;D.removeEventListener("dispose",S);const P=u.indexOf(D.__bindingPointIndex);u.splice(P,1),r.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function _(){for(const U in o)r.deleteBuffer(o[U]);u=[],o={},l={}}return{bind:h,update:m,dispose:_}}class lR{constructor(e={}){const{canvas:t=KS(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,_=null;const U=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=Lr,this.toneMappingExposure=1;const P=this;let Y=!1,B=0,b=0,I=null,L=-1,C=null;const V=new jt,de=new jt;let G=null;const re=new xt(0);let te=0,z=t.width,Z=t.height,O=1,ae=null,ue=null;const k=new jt(0,0,z,Z),se=new jt(0,0,z,Z);let Ue=!1;const Q=new lh;let he=!1,Me=!1;const _e=new kt,Ae=new kt,Fe=new ie,Ze=new jt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function At(){return I===null?O:1}let $=s;function Qt(A,q){return t.getContext(A,q)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jf}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),$===null){const q="webgl2";if($=Qt(q,A),$===null)throw Qt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Te,Pe,ke,ot,Ve,N,R,ee,me,ve,pe,Oe,be,Be,ct,Ee,He,tt,nt,Ge,pt,at,Ct,X;function Le(){Te=new hT($),Te.init(),at=new Qw($,Te),Pe=new aT($,Te,e,at),ke=new qw($,Te),Pe.reverseDepthBuffer&&y&&ke.buffers.depth.setReversed(!0),ot=new gT($),Ve=new Nw,N=new Zw($,Te,ke,Ve,Pe,at,ot),R=new cT(P),ee=new fT(P),me=new ME($),Ct=new sT($,me),ve=new pT($,me,ot,Ct),pe=new xT($,ve,me,ot),nt=new vT($,Pe,N),Ee=new lT(Ve),Oe=new Uw(P,R,ee,Te,Pe,Ct,Ee),be=new oR(P,Ve),Be=new Fw,ct=new jw(Te),tt=new rT(P,R,ee,ke,pe,E,h),He=new Yw(P,pe,Pe),X=new aR($,ot,Pe,ke),Ge=new oT($,Te,ot),pt=new mT($,Te,ot),ot.programs=Oe.programs,P.capabilities=Pe,P.extensions=Te,P.properties=Ve,P.renderLists=Be,P.shadowMap=He,P.state=ke,P.info=ot}Le();const fe=new rR(P,$);this.xr=fe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const A=Te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(z,Z,!1))},this.getSize=function(A){return A.set(z,Z)},this.setSize=function(A,q,le=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,Z=q,t.width=Math.floor(A*O),t.height=Math.floor(q*O),le===!0&&(t.style.width=A+"px",t.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(z*O,Z*O).floor()},this.setDrawingBufferSize=function(A,q,le){z=A,Z=q,O=le,t.width=Math.floor(A*le),t.height=Math.floor(q*le),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(k)},this.setViewport=function(A,q,le,ce){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,q,le,ce),ke.viewport(V.copy(k).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(se)},this.setScissor=function(A,q,le,ce){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,q,le,ce),ke.scissor(de.copy(se).multiplyScalar(O).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){ke.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){ue=A},this.getClearColor=function(A){return A.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(A=!0,q=!0,le=!0){let ce=0;if(A){let K=!1;if(I!==null){const Ce=I.texture.format;K=Ce===sh||Ce===rh||Ce===ih}if(K){const Ce=I.texture.type,we=Ce===er||Ce===us||Ce===ca||Ce===ao||Ce===th||Ce===nh,$e=tt.getClearColor(),Xe=tt.getClearAlpha(),it=$e.r,st=$e.g,qe=$e.b;we?(M[0]=it,M[1]=st,M[2]=qe,M[3]=Xe,$.clearBufferuiv($.COLOR,0,M)):(T[0]=it,T[1]=st,T[2]=qe,T[3]=Xe,$.clearBufferiv($.COLOR,0,T))}else ce|=$.COLOR_BUFFER_BIT}q&&(ce|=$.DEPTH_BUFFER_BIT),le&&(ce|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Be.dispose(),ct.dispose(),Ve.dispose(),R.dispose(),ee.dispose(),pe.dispose(),Ct.dispose(),X.dispose(),Oe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",hs),fe.removeEventListener("sessionend",nr),Di.stop()};function ge(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const A=ot.autoReset,q=He.enabled,le=He.autoUpdate,ce=He.needsUpdate,K=He.type;Le(),ot.autoReset=A,He.enabled=q,He.autoUpdate=le,He.needsUpdate=ce,He.type=K}function Ne(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function lt(A){const q=A.target;q.removeEventListener("dispose",lt),Ut(q)}function Ut(A){Xt(A),Ve.remove(A)}function Xt(A){const q=Ve.get(A).programs;q!==void 0&&(q.forEach(function(le){Oe.releaseProgram(le)}),A.isShaderMaterial&&Oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,le,ce,K,Ce){q===null&&(q=Tt);const we=K.isMesh&&K.matrixWorld.determinant()<0,$e=_a(A,q,le,ce,K);ke.setMaterial(ce,we);let Xe=le.index,it=1;if(ce.wireframe===!0){if(Xe=ve.getWireframeAttribute(le),Xe===void 0)return;it=2}const st=le.drawRange,qe=le.attributes.position;let vt=st.start*it,wt=(st.start+st.count)*it;Ce!==null&&(vt=Math.max(vt,Ce.start*it),wt=Math.min(wt,(Ce.start+Ce.count)*it)),Xe!==null?(vt=Math.max(vt,0),wt=Math.min(wt,Xe.count)):qe!=null&&(vt=Math.max(vt,0),wt=Math.min(wt,qe.count));const gt=wt-vt;if(gt<0||gt===1/0)return;Ct.setup(K,ce,$e,le,Xe);let ln,ut=Ge;if(Xe!==null&&(ln=me.get(Xe),ut=pt,ut.setIndex(ln)),K.isMesh)ce.wireframe===!0?(ke.setLineWidth(ce.wireframeLinewidth*At()),ut.setMode($.LINES)):ut.setMode($.TRIANGLES);else if(K.isLine){let Qe=ce.linewidth;Qe===void 0&&(Qe=1),ke.setLineWidth(Qe*At()),K.isLineSegments?ut.setMode($.LINES):K.isLineLoop?ut.setMode($.LINE_LOOP):ut.setMode($.LINE_STRIP)}else K.isPoints?ut.setMode($.POINTS):K.isSprite&&ut.setMode($.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ut.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))ut.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Qe=K._multiDrawStarts,ni=K._multiDrawCounts,Et=K._multiDrawCount,cn=Xe?me.get(Xe).bytesPerElement:1,ii=Ve.get(ce).currentProgram.getUniforms();for(let Yt=0;Yt<Et;Yt++)ii.setValue($,"_gl_DrawID",Yt),ut.render(Qe[Yt]/cn,ni[Yt])}else if(K.isInstancedMesh)ut.renderInstances(vt,gt,K.count);else if(le.isInstancedBufferGeometry){const Qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,ni=Math.min(le.instanceCount,Qe);ut.renderInstances(vt,gt,ni)}else ut.render(vt,gt)};function _t(A,q,le){A.transparent===!0&&A.side===qi&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,ps(A,q,le),A.side=Dr,A.needsUpdate=!0,ps(A,q,le),A.side=qi):ps(A,q,le)}this.compile=function(A,q,le=null){le===null&&(le=A),_=ct.get(le),_.init(q),D.push(_),le.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),A!==le&&A.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const ce=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ce=K.material;if(Ce)if(Array.isArray(Ce))for(let we=0;we<Ce.length;we++){const $e=Ce[we];_t($e,le,K),ce.add($e)}else _t(Ce,le,K),ce.add(Ce)}),D.pop(),_=null,ce},this.compileAsync=function(A,q,le=null){const ce=this.compile(A,q,le);return new Promise(K=>{function Ce(){if(ce.forEach(function(we){Ve.get(we).currentProgram.isReady()&&ce.delete(we)}),ce.size===0){K(A);return}setTimeout(Ce,10)}Te.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let En=null;function gn(A){En&&En(A)}function hs(){Di.stop()}function nr(){Di.start()}const Di=new xv;Di.setAnimationLoop(gn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(A){En=A,fe.setAnimationLoop(A),A===null?Di.stop():Di.start()},fe.addEventListener("sessionstart",hs),fe.addEventListener("sessionend",nr),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(q),q=fe.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,q,I),_=ct.get(A,D.length),_.init(q),D.push(_),Ae.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(Ae),Me=this.localClippingEnabled,he=Ee.init(this.clippingPlanes,Me),S=Be.get(A,U.length),S.init(),U.push(S),fe.enabled===!0&&fe.isPresenting===!0){const Ce=P.xr.getDepthSensingMesh();Ce!==null&&Ui(Ce,q,-1/0,P.sortObjects)}Ui(A,q,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort(ae,ue),ht=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ht&&tt.addToRenderList(S,A),this.info.render.frame++,he===!0&&Ee.beginShadows();const le=_.state.shadowsArray;He.render(le,A,q),he===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=S.opaque,K=S.transmissive;if(_.setupLights(),q.isArrayCamera){const Ce=q.cameras;if(K.length>0)for(let we=0,$e=Ce.length;we<$e;we++){const Xe=Ce[we];Ir(ce,K,A,Xe)}ht&&tt.render(A);for(let we=0,$e=Ce.length;we<$e;we++){const Xe=Ce[we];Nr(S,A,Xe,Xe.viewport)}}else K.length>0&&Ir(ce,K,A,q),ht&&tt.render(A),Nr(S,A,q);I!==null&&(N.updateMultisampleRenderTarget(I),N.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(P,A,q),Ct.resetDefaultState(),L=-1,C=null,D.pop(),D.length>0?(_=D[D.length-1],he===!0&&Ee.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function Ui(A,q,le,ce){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){ce&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const we=pe.update(A),$e=A.material;$e.visible&&S.push(A,we,$e,le,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const we=pe.update(A),$e=A.material;if(ce&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ze.copy(we.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray($e)){const Xe=we.groups;for(let it=0,st=Xe.length;it<st;it++){const qe=Xe[it],vt=$e[qe.materialIndex];vt&&vt.visible&&S.push(A,we,vt,le,Ze.z,qe)}}else $e.visible&&S.push(A,we,$e,le,Ze.z,null)}}const Ce=A.children;for(let we=0,$e=Ce.length;we<$e;we++)Ui(Ce[we],q,le,ce)}function Nr(A,q,le,ce){const K=A.opaque,Ce=A.transmissive,we=A.transparent;_.setupLightsView(le),he===!0&&Ee.setGlobalState(P.clippingPlanes,le),ce&&ke.viewport(V.copy(ce)),K.length>0&&ir(K,q,le),Ce.length>0&&ir(Ce,q,le),we.length>0&&ir(we,q,le),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Ir(A,q,le,ce){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ce.id]===void 0&&(_.state.transmissionRenderTarget[ce.id]=new ds(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?ha:er,minFilter:ls,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Ce=_.state.transmissionRenderTarget[ce.id],we=ce.viewport||V;Ce.setSize(we.z,we.w);const $e=P.getRenderTarget();P.setRenderTarget(Ce),P.getClearColor(re),te=P.getClearAlpha(),te<1&&P.setClearColor(16777215,.5),P.clear(),ht&&tt.render(le);const Xe=P.toneMapping;P.toneMapping=Lr;const it=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),_.setupLightsView(ce),he===!0&&Ee.setGlobalState(P.clippingPlanes,ce),ir(A,le,ce),N.updateMultisampleRenderTarget(Ce),N.updateRenderTargetMipmap(Ce),Te.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let qe=0,vt=q.length;qe<vt;qe++){const wt=q[qe],gt=wt.object,ln=wt.geometry,ut=wt.material,Qe=wt.group;if(ut.side===qi&&gt.layers.test(ce.layers)){const ni=ut.side;ut.side=Un,ut.needsUpdate=!0,va(gt,le,ce,ln,ut,Qe),ut.side=ni,ut.needsUpdate=!0,st=!0}}st===!0&&(N.updateMultisampleRenderTarget(Ce),N.updateRenderTargetMipmap(Ce))}P.setRenderTarget($e),P.setClearColor(re,te),it!==void 0&&(ce.viewport=it),P.toneMapping=Xe}function ir(A,q,le){const ce=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Ce=A.length;K<Ce;K++){const we=A[K],$e=we.object,Xe=we.geometry,it=ce===null?we.material:ce,st=we.group;$e.layers.test(le.layers)&&va($e,q,le,Xe,it,st)}}function va(A,q,le,ce,K,Ce){A.onBeforeRender(P,q,le,ce,K,Ce),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(P,q,le,ce,A,Ce),K.transparent===!0&&K.side===qi&&K.forceSinglePass===!1?(K.side=Un,K.needsUpdate=!0,P.renderBufferDirect(le,q,ce,K,A,Ce),K.side=Dr,K.needsUpdate=!0,P.renderBufferDirect(le,q,ce,K,A,Ce),K.side=qi):P.renderBufferDirect(le,q,ce,K,A,Ce),A.onAfterRender(P,q,le,ce,K,Ce)}function ps(A,q,le){q.isScene!==!0&&(q=Tt);const ce=Ve.get(A),K=_.state.lights,Ce=_.state.shadowsArray,we=K.state.version,$e=Oe.getParameters(A,K.state,Ce,q,le),Xe=Oe.getProgramCacheKey($e);let it=ce.programs;ce.environment=A.isMeshStandardMaterial?q.environment:null,ce.fog=q.fog,ce.envMap=(A.isMeshStandardMaterial?ee:R).get(A.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",lt),it=new Map,ce.programs=it);let st=it.get(Xe);if(st!==void 0){if(ce.currentProgram===st&&ce.lightsStateVersion===we)return yi(A,$e),st}else $e.uniforms=Oe.getUniforms(A),A.onBeforeCompile($e,P),st=Oe.acquireProgram($e,Xe),it.set(Xe,st),ce.uniforms=$e.uniforms;const qe=ce.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Ee.uniform),yi(A,$e),ce.needsLights=Rc(A),ce.lightsStateVersion=we,ce.needsLights&&(qe.ambientLightColor.value=K.state.ambient,qe.lightProbe.value=K.state.probe,qe.directionalLights.value=K.state.directional,qe.directionalLightShadows.value=K.state.directionalShadow,qe.spotLights.value=K.state.spot,qe.spotLightShadows.value=K.state.spotShadow,qe.rectAreaLights.value=K.state.rectArea,qe.ltc_1.value=K.state.rectAreaLTC1,qe.ltc_2.value=K.state.rectAreaLTC2,qe.pointLights.value=K.state.point,qe.pointLightShadows.value=K.state.pointShadow,qe.hemisphereLights.value=K.state.hemi,qe.directionalShadowMap.value=K.state.directionalShadowMap,qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qe.spotShadowMap.value=K.state.spotShadowMap,qe.spotLightMatrix.value=K.state.spotLightMatrix,qe.spotLightMap.value=K.state.spotLightMap,qe.pointShadowMap.value=K.state.pointShadowMap,qe.pointShadowMatrix.value=K.state.pointShadowMatrix),ce.currentProgram=st,ce.uniformsList=null,st}function xa(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=dc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function yi(A,q){const le=Ve.get(A);le.outputColorSpace=q.outputColorSpace,le.batching=q.batching,le.batchingColor=q.batchingColor,le.instancing=q.instancing,le.instancingColor=q.instancingColor,le.instancingMorph=q.instancingMorph,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function _a(A,q,le,ce,K){q.isScene!==!0&&(q=Tt),N.resetTextureUnits();const Ce=q.fog,we=ce.isMeshStandardMaterial?q.environment:null,$e=I===null?P.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fo,Xe=(ce.isMeshStandardMaterial?ee:R).get(ce.envMap||we),it=ce.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,st=!!le.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),qe=!!le.morphAttributes.position,vt=!!le.morphAttributes.normal,wt=!!le.morphAttributes.color;let gt=Lr;ce.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(gt=P.toneMapping);const ln=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,ut=ln!==void 0?ln.length:0,Qe=Ve.get(ce),ni=_.state.lights;if(he===!0&&(Me===!0||A!==C)){const vn=A===C&&ce.id===L;Ee.setState(ce,A,vn)}let Et=!1;ce.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ni.state.version||Qe.outputColorSpace!==$e||K.isBatchedMesh&&Qe.batching===!1||!K.isBatchedMesh&&Qe.batching===!0||K.isBatchedMesh&&Qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Qe.instancing===!1||!K.isInstancedMesh&&Qe.instancing===!0||K.isSkinnedMesh&&Qe.skinning===!1||!K.isSkinnedMesh&&Qe.skinning===!0||K.isInstancedMesh&&Qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Qe.instancingMorph===!1&&K.morphTexture!==null||Qe.envMap!==Xe||ce.fog===!0&&Qe.fog!==Ce||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ee.numPlanes||Qe.numIntersection!==Ee.numIntersection)||Qe.vertexAlphas!==it||Qe.vertexTangents!==st||Qe.morphTargets!==qe||Qe.morphNormals!==vt||Qe.morphColors!==wt||Qe.toneMapping!==gt||Qe.morphTargetsCount!==ut)&&(Et=!0):(Et=!0,Qe.__version=ce.version);let cn=Qe.currentProgram;Et===!0&&(cn=ps(ce,q,K));let ii=!1,Yt=!1,Si=!1;const Lt=cn.getUniforms(),Hn=Qe.uniforms;if(ke.useProgram(cn.program)&&(ii=!0,Yt=!0,Si=!0),ce.id!==L&&(L=ce.id,Yt=!0),ii||C!==A){ke.buffers.depth.getReversed()?(_e.copy(A.projectionMatrix),QS(_e),JS(_e),Lt.setValue($,"projectionMatrix",_e)):Lt.setValue($,"projectionMatrix",A.projectionMatrix),Lt.setValue($,"viewMatrix",A.matrixWorldInverse);const jn=Lt.map.cameraPosition;jn!==void 0&&jn.setValue($,Fe.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&Lt.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Lt.setValue($,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Yt=!0,Si=!0)}if(K.isSkinnedMesh){Lt.setOptional($,K,"bindMatrix"),Lt.setOptional($,K,"bindMatrixInverse");const vn=K.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Lt.setValue($,"boneTexture",vn.boneTexture,N))}K.isBatchedMesh&&(Lt.setOptional($,K,"batchingTexture"),Lt.setValue($,"batchingTexture",K._matricesTexture,N),Lt.setOptional($,K,"batchingIdTexture"),Lt.setValue($,"batchingIdTexture",K._indirectTexture,N),Lt.setOptional($,K,"batchingColorTexture"),K._colorsTexture!==null&&Lt.setValue($,"batchingColorTexture",K._colorsTexture,N));const Ni=le.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&nt.update(K,le,cn),(Yt||Qe.receiveShadow!==K.receiveShadow)&&(Qe.receiveShadow=K.receiveShadow,Lt.setValue($,"receiveShadow",K.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Hn.envMap.value=Xe,Hn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&q.environment!==null&&(Hn.envMapIntensity.value=q.environmentIntensity),Yt&&(Lt.setValue($,"toneMappingExposure",P.toneMappingExposure),Qe.needsLights&&ya(Hn,Si),Ce&&ce.fog===!0&&be.refreshFogUniforms(Hn,Ce),be.refreshMaterialUniforms(Hn,ce,O,Z,_.state.transmissionRenderTarget[A.id]),dc.upload($,xa(Qe),Hn,N)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(dc.upload($,xa(Qe),Hn,N),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Lt.setValue($,"center",K.center),Lt.setValue($,"modelViewMatrix",K.modelViewMatrix),Lt.setValue($,"normalMatrix",K.normalMatrix),Lt.setValue($,"modelMatrix",K.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const vn=ce.uniformsGroups;for(let jn=0,Mn=vn.length;jn<Mn;jn++){const Sa=vn[jn];X.update(Sa,cn),X.bind(Sa,cn)}}return cn}function ya(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Rc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,q,le){Ve.get(A.texture).__webglTexture=q,Ve.get(A.depthTexture).__webglTexture=le;const ce=Ve.get(A);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=le===void 0,ce.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,q){const le=Ve.get(A);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,le=0){I=A,B=q,b=le;let ce=!0,K=null,Ce=!1,we=!1;if(A){const Xe=Ve.get(A);if(Xe.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer($.FRAMEBUFFER,null),ce=!1;else if(Xe.__webglFramebuffer===void 0)N.setupRenderTarget(A);else if(Xe.__hasExternalTextures)N.rebindTextures(A,Ve.get(A.texture).__webglTexture,Ve.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qe=A.depthTexture;if(Xe.__boundDepthTexture!==qe){if(qe!==null&&Ve.has(qe)&&(A.width!==qe.image.width||A.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(we=!0);const st=Ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[q])?K=st[q][le]:K=st[q],Ce=!0):A.samples>0&&N.useMultisampledRTT(A)===!1?K=Ve.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?K=st[le]:K=st,V.copy(A.viewport),de.copy(A.scissor),G=A.scissorTest}else V.copy(k).multiplyScalar(O).floor(),de.copy(se).multiplyScalar(O).floor(),G=Ue;if(ke.bindFramebuffer($.FRAMEBUFFER,K)&&ce&&ke.drawBuffers(A,K),ke.viewport(V),ke.scissor(de),ke.setScissorTest(G),Ce){const Xe=Ve.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+q,Xe.__webglTexture,le)}else if(we){const Xe=Ve.get(A.texture),it=q||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Xe.__webglTexture,le||0,it)}L=-1},this.readRenderTargetPixels=function(A,q,le,ce,K,Ce,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&($e=$e[we]),$e){ke.bindFramebuffer($.FRAMEBUFFER,$e);try{const Xe=A.texture,it=Xe.format,st=Xe.type;if(!Pe.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ce&&le>=0&&le<=A.height-K&&$.readPixels(q,le,ce,K,at.convert(it),at.convert(st),Ce)}finally{const Xe=I!==null?Ve.get(I).__webglFramebuffer:null;ke.bindFramebuffer($.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,q,le,ce,K,Ce,we){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&($e=$e[we]),$e){const Xe=A.texture,it=Xe.format,st=Xe.type;if(!Pe.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=A.width-ce&&le>=0&&le<=A.height-K){ke.bindFramebuffer($.FRAMEBUFFER,$e);const qe=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,qe),$.bufferData($.PIXEL_PACK_BUFFER,Ce.byteLength,$.STREAM_READ),$.readPixels(q,le,ce,K,at.convert(it),at.convert(st),0);const vt=I!==null?Ve.get(I).__webglFramebuffer:null;ke.bindFramebuffer($.FRAMEBUFFER,vt);const wt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await ZS($,wt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,qe),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ce),$.deleteBuffer(qe),$.deleteSync(wt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,q=null,le=0){A.isTexture!==!0&&(na("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1]);const ce=Math.pow(2,-le),K=Math.floor(A.image.width*ce),Ce=Math.floor(A.image.height*ce),we=q!==null?q.x:0,$e=q!==null?q.y:0;N.setTexture2D(A,0),$.copyTexSubImage2D($.TEXTURE_2D,le,0,0,we,$e,K,Ce),ke.unbindTexture()},this.copyTextureToTexture=function(A,q,le=null,ce=null,K=0){A.isTexture!==!0&&(na("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,A=arguments[1],q=arguments[2],K=arguments[3]||0,le=null);let Ce,we,$e,Xe,it,st,qe,vt,wt;const gt=A.isCompressedTexture?A.mipmaps[K]:A.image;le!==null?(Ce=le.max.x-le.min.x,we=le.max.y-le.min.y,$e=le.isBox3?le.max.z-le.min.z:1,Xe=le.min.x,it=le.min.y,st=le.isBox3?le.min.z:0):(Ce=gt.width,we=gt.height,$e=gt.depth||1,Xe=0,it=0,st=0),ce!==null?(qe=ce.x,vt=ce.y,wt=ce.z):(qe=0,vt=0,wt=0);const ln=at.convert(q.format),ut=at.convert(q.type);let Qe;q.isData3DTexture?(N.setTexture3D(q,0),Qe=$.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(N.setTexture2DArray(q,0),Qe=$.TEXTURE_2D_ARRAY):(N.setTexture2D(q,0),Qe=$.TEXTURE_2D),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,q.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,q.unpackAlignment);const ni=$.getParameter($.UNPACK_ROW_LENGTH),Et=$.getParameter($.UNPACK_IMAGE_HEIGHT),cn=$.getParameter($.UNPACK_SKIP_PIXELS),ii=$.getParameter($.UNPACK_SKIP_ROWS),Yt=$.getParameter($.UNPACK_SKIP_IMAGES);$.pixelStorei($.UNPACK_ROW_LENGTH,gt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,gt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,Xe),$.pixelStorei($.UNPACK_SKIP_ROWS,it),$.pixelStorei($.UNPACK_SKIP_IMAGES,st);const Si=A.isDataArrayTexture||A.isData3DTexture,Lt=q.isDataArrayTexture||q.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Hn=Ve.get(A),Ni=Ve.get(q),vn=Ve.get(Hn.__renderTarget),jn=Ve.get(Ni.__renderTarget);ke.bindFramebuffer($.READ_FRAMEBUFFER,vn.__webglFramebuffer),ke.bindFramebuffer($.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Mn=0;Mn<$e;Mn++)Si&&$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ve.get(A).__webglTexture,K,st+Mn),A.isDepthTexture?(Lt&&$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,K,wt+Mn),$.blitFramebuffer(Xe,it,Ce,we,qe,vt,Ce,we,$.DEPTH_BUFFER_BIT,$.NEAREST)):Lt?$.copyTexSubImage3D(Qe,K,qe,vt,wt+Mn,Xe,it,Ce,we):$.copyTexSubImage2D(Qe,K,qe,vt,wt+Mn,Xe,it,Ce,we);ke.bindFramebuffer($.READ_FRAMEBUFFER,null),ke.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Lt?A.isDataTexture||A.isData3DTexture?$.texSubImage3D(Qe,K,qe,vt,wt,Ce,we,$e,ln,ut,gt.data):q.isCompressedArrayTexture?$.compressedTexSubImage3D(Qe,K,qe,vt,wt,Ce,we,$e,ln,gt.data):$.texSubImage3D(Qe,K,qe,vt,wt,Ce,we,$e,ln,ut,gt):A.isDataTexture?$.texSubImage2D($.TEXTURE_2D,K,qe,vt,Ce,we,ln,ut,gt.data):A.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,K,qe,vt,gt.width,gt.height,ln,gt.data):$.texSubImage2D($.TEXTURE_2D,K,qe,vt,Ce,we,ln,ut,gt);$.pixelStorei($.UNPACK_ROW_LENGTH,ni),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Et),$.pixelStorei($.UNPACK_SKIP_PIXELS,cn),$.pixelStorei($.UNPACK_SKIP_ROWS,ii),$.pixelStorei($.UNPACK_SKIP_IMAGES,Yt),K===0&&q.generateMipmaps&&$.generateMipmap(Qe),ke.unbindTexture()},this.copyTextureToTexture3D=function(A,q,le=null,ce=null,K=0){return A.isTexture!==!0&&(na("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ce=arguments[1]||null,A=arguments[2],q=arguments[3],K=arguments[4]||0),na('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,le,ce,K)},this.initRenderTarget=function(A){Ve.get(A).__webglFramebuffer===void 0&&N.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?N.setTextureCube(A,0):A.isData3DTexture?N.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?N.setTexture2DArray(A,0):N.setTexture2D(A,0),ke.unbindTexture()},this.resetState=function(){B=0,b=0,I=null,ke.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class cR extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wv extends po{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gc=new ie,vc=new ie,Yg=new kt,ta=new oh,Xl=new Mc,Hd=new ie,$g=new ie;class uR extends rn{constructor(e=new tr,t=new wv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)gc.fromBufferAttribute(t,o-1),vc.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=gc.distanceTo(vc);e.setAttribute("lineDistance",new bi(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Xl.copy(s.boundingSphere),Xl.applyMatrix4(o),Xl.radius+=l,e.ray.intersectsSphere(Xl)===!1)return;Yg.copy(o).invert(),ta.copy(e.ray).applyMatrix4(Yg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const E=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let T=E,S=M-1;T<S;T+=m){const _=g.getX(T),U=g.getX(T+1),D=Yl(this,e,ta,h,_,U);D&&t.push(D)}if(this.isLineLoop){const T=g.getX(M-1),S=g.getX(E),_=Yl(this,e,ta,h,T,S);_&&t.push(_)}}else{const E=Math.max(0,u.start),M=Math.min(y.count,u.start+u.count);for(let T=E,S=M-1;T<S;T+=m){const _=Yl(this,e,ta,h,T,T+1);_&&t.push(_)}if(this.isLineLoop){const T=Yl(this,e,ta,h,M-1,E);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Yl(r,e,t,s,o,l){const u=r.geometry.attributes.position;if(gc.fromBufferAttribute(u,o),vc.fromBufferAttribute(u,l),t.distanceSqToSegment(gc,vc,Hd,$g)>s)return;Hd.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Hd);if(!(h<e.near||h>e.far))return{distance:h,point:$g.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const qg=new ie,Kg=new ie;class uh extends uR{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)qg.fromBufferAttribute(t,o),Kg.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+qg.distanceTo(Kg);e.setAttribute("lineDistance",new bi(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const $l=new ie,ql=new ie,jd=new ie,Kl=new ei;class dR extends tr{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(uc*t),u=e.getIndex(),d=e.getAttribute("position"),h=u?u.count:d.count,m=[0,0,0],g=["a","b","c"],v=new Array(3),y={},E=[];for(let M=0;M<h;M+=3){u?(m[0]=u.getX(M),m[1]=u.getX(M+1),m[2]=u.getX(M+2)):(m[0]=M,m[1]=M+1,m[2]=M+2);const{a:T,b:S,c:_}=Kl;if(T.fromBufferAttribute(d,m[0]),S.fromBufferAttribute(d,m[1]),_.fromBufferAttribute(d,m[2]),Kl.getNormal(jd),v[0]=`${Math.round(T.x*o)},${Math.round(T.y*o)},${Math.round(T.z*o)}`,v[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,v[2]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let U=0;U<3;U++){const D=(U+1)%3,P=v[U],Y=v[D],B=Kl[g[U]],b=Kl[g[D]],I=`${P}_${Y}`,L=`${Y}_${P}`;L in y&&y[L]?(jd.dot(y[L].normal)<=l&&(E.push(B.x,B.y,B.z),E.push(b.x,b.y,b.z)),y[L]=null):I in y||(y[I]={index0:m[U],index1:m[D],normal:jd.clone()})}}for(const M in y)if(y[M]){const{index0:T,index1:S}=y[M];$l.fromBufferAttribute(d,T),ql.fromBufferAttribute(d,S),E.push($l.x,$l.y,$l.z),E.push(ql.x,ql.y,ql.z)}this.setAttribute("position",new bi(E,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Rv extends po{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ov,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cv extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Vd=new kt,Zg=new ie,Qg=new ie;class fR{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lh,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Zg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zg),Qg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qg),t.updateMatrixWorld(),Vd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hR extends fR{constructor(){super(new _v(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gd extends Cv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new hR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pR extends Cv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Jg=new kt;class mR{constructor(e,t,s=0,o=1/0){this.ray=new oh(e,t),this.near=s,this.far=o,this.camera=null,this.layers=new ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jg),this}intersectObject(e,t=!0,s=[]){return Hf(e,this,s,t),s.sort(e0),s}intersectObjects(e,t=!0,s=[]){for(let o=0,l=e.length;o<l;o++)Hf(e[o],this,s,t);return s.sort(e0),s}}function e0(r,e){return r.distance-e.distance}function Hf(r,e,t,s){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&s===!0){const l=r.children;for(let u=0,d=l.length;u<d;u++)Hf(l[u],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);const Av={W:"#ffffff",Y:"#ffd500",R:"#b71234",O:"#ff5800",B:"#0046ad",G:"#009b48"};function rs(r,e,t,s,o,l){return{right:r,left:e,up:t,down:s,front:o,back:l}}function Sn(){const r=[];for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)for(let s=-1;s<=1;s++)e===0&&t===0&&s===0||r.push({position:[e,t,s],colors:rs(e===1?"R":null,e===-1?"O":null,t===1?"W":null,t===-1?"Y":null,s===1?"G":null,s===-1?"B":null)});return r}function gR(r,e,t,s){const[o,l,u]=r.position;if((e==="x"?o:e==="y"?l:u)!==t)return{...r,colors:{...r.colors}};let h=o,m=l,g=u,v={...r.colors};return e==="x"&&s===1?(m=-u,g=l,v=rs(r.colors.right,r.colors.left,r.colors.back,r.colors.front,r.colors.up,r.colors.down)):e==="x"&&s===-1?(m=u,g=-l,v=rs(r.colors.right,r.colors.left,r.colors.front,r.colors.back,r.colors.down,r.colors.up)):e==="y"&&s===1?(h=u,g=-o,v=rs(r.colors.front,r.colors.back,r.colors.up,r.colors.down,r.colors.left,r.colors.right)):e==="y"&&s===-1?(h=-u,g=o,v=rs(r.colors.back,r.colors.front,r.colors.up,r.colors.down,r.colors.right,r.colors.left)):e==="z"&&s===1?(h=-l,m=o,v=rs(r.colors.down,r.colors.up,r.colors.right,r.colors.left,r.colors.front,r.colors.back)):e==="z"&&s===-1&&(h=l,m=-o,v=rs(r.colors.up,r.colors.down,r.colors.left,r.colors.right,r.colors.front,r.colors.back)),{position:[h,m,g],colors:v}}function oa(r,e){return r.map(t=>gR(t,e.axis,e.layer,e.direction))}function jf(r){const e={R:{axis:"x",layer:1},L:{axis:"x",layer:-1},U:{axis:"y",layer:1},D:{axis:"y",layer:-1},F:{axis:"z",layer:1},B:{axis:"z",layer:-1}},t=r.includes("'"),s=r.replace("'",""),{axis:o,layer:l}=e[s];return{axis:o,layer:l,direction:t?-1:1}}const t0=["R","R'","L","L'","U","U'","D","D'","F","F'","B","B'"];function bv(r,e=20){const t=[];let s=[...r],o=null;for(let l=0;l<e;l++){let u,d;do u=t0[Math.floor(Math.random()*t0.length)],d=jf(u);while(d.axis===o);t.push(d),s=oa(s,d),o=d.axis}return{cubies:s,moves:t}}function Pv(r){const e=Sn();for(let t=0;t<r.length;t++){const s=r[t],o=e[t];if(s.position[0]!==o.position[0]||s.position[1]!==o.position[1]||s.position[2]!==o.position[2]||s.colors.right!==o.colors.right||s.colors.left!==o.colors.left||s.colors.up!==o.colors.up||s.colors.down!==o.colors.down||s.colors.front!==o.colors.front||s.colors.back!==o.colors.back)return!1}return!0}const n0=r=>{let e;const t=new Set,s=(m,g)=>{const v=typeof m=="function"?m(e):m;if(!Object.is(v,e)){const y=e;e=g??(typeof v!="object"||v===null)?v:Object.assign({},e,v),t.forEach(E=>E(e,y))}},o=()=>e,d={setState:s,getState:o,getInitialState:()=>h,subscribe:m=>(t.add(m),()=>t.delete(m))},h=e=r(s,o,d);return d},vR=(r=>r?n0(r):n0),xR=r=>r;function _R(r,e=xR){const t=El.useSyncExternalStore(r.subscribe,El.useCallback(()=>e(r.getState()),[r,e]),El.useCallback(()=>e(r.getInitialState()),[r,e]));return El.useDebugValue(t),t}const i0=r=>{const e=vR(r),t=s=>_R(e,s);return Object.assign(t,e),t},yR=(r=>r?i0(r):i0),mi=yR(r=>({cubies:Sn(),snapshots:[{cubies:Sn()}],history:[],isAnimating:!1,currentStep:0,reset:()=>r({cubies:Sn(),snapshots:[{cubies:Sn()}],history:[],isAnimating:!1,currentStep:0}),applySingleMove:e=>r(t=>{const s=oa(t.cubies,e);return{cubies:s,snapshots:[...t.snapshots,{cubies:s}],history:[...t.history,e],currentStep:t.currentStep+1}}),undo:()=>r(e=>{if(e.snapshots.length===0)return e;const t=e.snapshots.slice(0,-1);return{cubies:t.length>0?t[t.length-1].cubies:Sn(),snapshots:t,history:e.history.slice(0,-1),currentStep:e.currentStep-1}}),scramble:e=>{if(typeof e!="number"){const{cubies:u,moves:d}=e,h=[{cubies:Sn()}];let m=Sn();for(const g of d)m=oa(m,g),h.push({cubies:m});r({cubies:u,snapshots:h,history:d,isAnimating:!1,currentStep:d.length});return}const{cubies:t,moves:s}=bv(Sn(),e),o=[{cubies:Sn()}];let l=Sn();for(const u of s)l=oa(l,u),o.push({cubies:l});r({cubies:t,snapshots:o,history:s,isAnimating:!1,currentStep:e})},setAnimating:e=>r({isAnimating:e})})),Lv="#d0d5dd",SR="#888888",r0=280,Dv=["right","left","up","down","front","back"],ER={R:new ie(1,0,0),L:new ie(-1,0,0),U:new ie(0,1,0),D:new ie(0,-1,0),F:new ie(0,0,1),B:new ie(0,0,-1)},s0={R:"x",L:"x",U:"y",D:"y",F:"z",B:"z"},o0={R:1,L:-1,U:1,D:-1,F:1,B:-1};function MR(r){return Dv.map(e=>{const t=r.colors[e],s=t?Av[t]:Lv;return new Rv({color:new xt(s),roughness:.7,metalness:0})})}function TR(r,e,t,s){const o=new ra;o.position.set(e[0]*t,e[1]*t,e[2]*t);const l=new mo(s,s,s),u=new Dn(l,MR(r));o.add(u);const d=new dR(l);return o.add(new uh(d,new wv({color:SR}))),o}function a0(r,e,t){return r.map(s=>TR(s,s.position,e,t))}function l0(r){r.traverse(e=>{if(e instanceof Dn||e instanceof uh){e.geometry.dispose();const t=e.material;Array.isArray(t)?t.forEach(s=>s.dispose()):t&&t.dispose()}})}function wR(r,e){r.traverse(t=>{if(t instanceof Dn){const s=t.material;Array.isArray(s)&&Dv.forEach((o,l)=>{const u=e.colors[o],d=u?Av[u]:Lv;l<s.length&&s[l]instanceof Rv&&s[l].color.set(d)})}})}const cs=H.forwardRef(function({disableStore:e}={},t){const s=H.useRef(null),o=H.useRef(null),l=H.useRef(null),u=H.useRef(null),d=H.useRef([]),h=H.useRef(Sn()),m=H.useRef(null),g=H.useRef(0),v=H.useRef(new mR),y=H.useRef(new Rt),[E,M]=H.useState(!1),[T,S]=H.useState(null),_=mi(G=>G.scramble),U=mi(G=>G.reset),D=mi(G=>G.applySingleMove),P=H.useRef({theta:Math.atan2(5,5),phi:Math.asin(4/Math.sqrt(66)),radius:Math.sqrt(66),isDragging:!1,lastMouse:{x:0,y:0}}),Y=1/3,B=Y*.85,b=H.useCallback((G,re)=>{const te=[],z=Y*.6,Z=re*Y,O=new ie;for(const ae of d.current){ae.getWorldPosition(O);const ue=G==="x"?O.x:G==="y"?O.y:O.z;Math.abs(ue-Z)<z&&te.push(ae)}return te},[Y]),I=H.useCallback(G=>{const re=d.current;d.current=[];const te=a0(h.current,Y,B);for(const z of te)G.add(z);if(d.current=te,re.length>0){const z=[...re];for(const Z of z)G.remove(Z);requestAnimationFrame(()=>{for(const Z of z)l0(Z)})}},[Y,B]),L=H.useCallback(()=>{const G=l.current;if(!G)return;const{theta:re,phi:te,radius:z}=P.current;G.position.set(z*Math.cos(te)*Math.sin(re),z*Math.sin(te),z*Math.cos(te)*Math.cos(re)),G.lookAt(0,0,0)},[]),C=H.useCallback((G,re,te,z,Z)=>{if(m.current)return;const O=b(G,re);if(O.length===0)return;const ae=new rn;z.add(ae);for(const k of O)ae.attach(k);const ue=Math.PI/2*te;m.current={pivot:ae,cubieGroups:O,targetAngle:ue,startTime:performance.now(),axis:G,move:{axis:G,layer:re,direction:te},skipStore:Z}},[b]),V=H.useCallback(G=>{if(m.current||E)return;const re=o.current;if(!re)return;const te=jf(G);C(te.axis,te.layer,te.direction,re,!!e),M(!0)},[E,C,e]),de=H.useCallback(G=>{if(m.current||E)return;const re=o.current;if(!re)return;const te=jf(G);C(te.axis,te.layer,te.direction,re,!0),M(!0)},[E,C]);return H.useImperativeHandle(t,()=>({executeMove:G=>{V(G)},undoMove:G=>{de(G)},scramble:(G=20)=>{const re=o.current;if(!re||m.current)return;const{cubies:te,moves:z}=bv(Sn(),G);h.current=te,I(re),e||_({cubies:te,moves:z})},reset:()=>{const G=o.current;!G||m.current||(h.current=Sn(),I(G),e||U())},isAnimating:()=>E}),[V,I,_,U,E,e]),H.useEffect(()=>{const G=s.current;if(!G)return;const re=new cR;re.background=new xt("#f5f7fa"),o.current=re;const te=new Jn(45,G.clientWidth/Math.max(G.clientHeight,1),.1,100),z=P.current;te.position.set(z.radius*Math.cos(z.phi)*Math.sin(z.theta),z.radius*Math.sin(z.phi),z.radius*Math.cos(z.phi)*Math.cos(z.theta)),te.lookAt(0,0,0),te.zoom=2,te.updateProjectionMatrix(),l.current=te;const Z=new lR({antialias:!0,alpha:!1});Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.setSize(G.clientWidth,G.clientHeight),G.appendChild(Z.domElement),u.current=Z;const O=new pR(8947865,1);re.add(O);const ae=new Gd(16777215,1.8);ae.position.set(5,10,5),re.add(ae);const ue=new Gd(16777215,1);ue.position.set(-3,2,-4),re.add(ue);const k=new Gd(16777215,.5);k.position.set(0,-5,8),re.add(k);const se=a0(h.current,Y,B);for(const Te of se)re.add(Te);d.current=se;const Ue=[];se.forEach(Te=>Te.traverse(Pe=>{Pe instanceof Dn&&Ue.push(Pe)}));const Q=(Te,Pe)=>{const ke=Z.domElement.getBoundingClientRect();y.current.x=(Te-ke.left)/ke.width*2-1,y.current.y=-((Pe-ke.top)/ke.height)*2+1,v.current.setFromCamera(y.current,te);const ot=v.current.intersectObjects(Ue);if(ot.length===0)return null;const Ve=ot[0].face.normal.clone();Ve.transformDirection(ot[0].object.matrixWorld);let N="",R=-1/0;for(const[ee,me]of Object.entries(ER)){const ve=Ve.dot(me);ve>R&&ve>.5&&(R=ve,N=ee)}return N||null},he=Te=>{if(m.current||Te.button!==0&&Te.button!==2)return;const Pe=Q(Te.clientX,Te.clientY);if(Pe){const ke=s0[Pe],ot=o0[Pe],Ve=Te.button===0?ot:-ot;C(ke,ot,Ve,o.current,!1),M(!0);return}Te.button===0&&(z.isDragging=!0,z.lastMouse={x:Te.clientX,y:Te.clientY})},Me=Te=>{if(!z.isDragging){if(!m.current){const ot=Q(Te.clientX,Te.clientY);S(ot),G.style.cursor=ot?"pointer":""}return}const Pe=Te.clientX-z.lastMouse.x,ke=Te.clientY-z.lastMouse.y;z.lastMouse={x:Te.clientX,y:Te.clientY},z.theta-=Pe*.01,z.phi+=ke*.01,z.phi=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,z.phi)),L()},_e=()=>{z.isDragging=!1},Ae=Te=>{Te.preventDefault()},Fe=Te=>{Te.preventDefault(),z.radius+=Te.deltaY*.01*(z.radius/8),z.radius=Math.max(3,Math.min(20,z.radius)),L()};let Ze=null;const Tt=Te=>{m.current||Te.touches.length!==1||(Ze=Q(Te.touches[0].clientX,Te.touches[0].clientY),!Ze&&(z.isDragging=!0,z.lastMouse={x:Te.touches[0].clientX,y:Te.touches[0].clientY}))},ht=Te=>{if(!z.isDragging||Te.touches.length!==1)return;Te.preventDefault();const Pe=Te.touches[0].clientX-z.lastMouse.x,ke=Te.touches[0].clientY-z.lastMouse.y;z.lastMouse={x:Te.touches[0].clientX,y:Te.touches[0].clientY},z.theta-=Pe*.005,z.phi+=ke*.005,z.phi=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,z.phi)),L()},At=()=>{if(Ze&&!z.isDragging){const Te=s0[Ze],Pe=o0[Ze],ke=-Pe;C(Te,Pe,ke,o.current,!1),M(!0)}Ze=null,z.isDragging=!1};Z.domElement.addEventListener("mousedown",he),window.addEventListener("mousemove",Me),window.addEventListener("mouseup",_e),Z.domElement.addEventListener("contextmenu",Ae),Z.domElement.addEventListener("wheel",Fe,{passive:!1}),Z.domElement.addEventListener("touchstart",Tt,{passive:!1}),Z.domElement.addEventListener("touchmove",ht,{passive:!1}),window.addEventListener("touchend",At);const $=()=>{const{clientWidth:Te,clientHeight:Pe}=G;te.aspect=Te/Math.max(Pe,1),te.updateProjectionMatrix(),Z.setSize(Te,Pe)};window.addEventListener("resize",$);const Qt=Te=>{const Pe=m.current;if(Pe){const ke=Te-Pe.startTime;let ot=Math.min(ke/r0,1);ot=1-(1-ot)*(1-ot);const Ve=Pe.targetAngle*ot;if(Pe.pivot.rotation.set(0,0,0),Pe.axis==="x"?Pe.pivot.rotation.x=Ve:Pe.axis==="y"?Pe.pivot.rotation.y=Ve:Pe.pivot.rotation.z=Ve,ke>=r0){const N=oa(h.current,Pe.move);h.current=N;const R=Y;for(const ee of Pe.cubieGroups){const me=new ie;ee.getWorldPosition(me);let ve=-1,pe=1/0;for(let Oe=0;Oe<N.length;Oe++){const be=N[Oe].position,Be=me.x-be[0]*R,ct=me.y-be[1]*R,Ee=me.z-be[2]*R,He=Be*Be+ct*ct+Ee*Ee;He<pe&&(pe=He,ve=Oe)}if(ve>=0){const Oe=N[ve];re.attach(ee),ee.rotation.set(0,0,0),ee.position.set(Oe.position[0]*R,Oe.position[1]*R,Oe.position[2]*R),wR(ee,Oe)}}re.remove(Pe.pivot),Pe.pivot.clear(),Pe.skipStore||D(Pe.move),m.current=null,M(!1)}}Z.render(re,te),g.current=requestAnimationFrame(Qt)};return g.current=requestAnimationFrame(Qt),()=>{cancelAnimationFrame(g.current),Z.domElement.removeEventListener("mousedown",he),window.removeEventListener("mousemove",Me),window.removeEventListener("mouseup",_e),Z.domElement.removeEventListener("contextmenu",Ae),Z.domElement.removeEventListener("wheel",Fe),Z.domElement.removeEventListener("touchstart",Tt),Z.domElement.removeEventListener("touchmove",ht),window.removeEventListener("touchend",At),window.removeEventListener("resize",$),m.current&&(re.remove(m.current.pivot),m.current.pivot.clear());for(const Te of d.current)l0(Te),re.remove(Te);d.current=[],re.traverse(Te=>{if(Te instanceof Dn||Te instanceof uh){Te.geometry.dispose();const Pe=Te.material;Array.isArray(Pe)?Pe.forEach(ke=>ke.dispose()):Pe&&Pe.dispose()}}),re.clear(),Z.dispose(),G.contains(Z.domElement)&&G.removeChild(Z.domElement)}},[]),f.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",flex:1,minHeight:"300px"},children:[f.jsx("div",{ref:s,style:{position:"relative",width:"100%",flex:1,minHeight:0,borderRadius:"12px",overflow:"hidden",background:"#f5f7fa",border:"1px solid var(--rule, #e2e5ea)"},children:T&&f.jsxs("div",{style:{position:"absolute",top:"8px",left:"8px",zIndex:10,padding:"4px 10px",borderRadius:"6px",background:"rgba(37,99,235,0.9)",color:"#fff",fontSize:"11px",fontFamily:"monospace",lineHeight:1.5},children:[f.jsxs("div",{children:[T,"面"]}),f.jsx("div",{style:{fontSize:"10px",opacity:.85},children:"左键↺逆时针 | 右键↻顺时针"})]})}),f.jsx("div",{style:{textAlign:"center",paddingTop:"6px",fontSize:"11px",color:"var(--ink2, #5f6368)"},children:"左键点击面 = 逆时针 | 右键点击面 = 顺时针 | 空白拖拽 = 旋转视角"})]})}),es=["R","U","F'","R'","U'","F"],c0=["F'","U","R","F","U'","R'"],RR={0:{text:"F' = 绕Z轴 -90° → 逆旋转矩阵",color:"#10B981"},1:{text:"U = 绕Y轴 +90° → 旋转矩阵",color:"#10B981"},2:{text:"R = 绕X轴 +90° → 旋转矩阵",color:"#10B981"},3:{text:"F = 绕Z轴 +90° → 旋转矩阵",color:"#10B981"},4:{text:"U' = 绕Y轴 -90° → 逆旋转矩阵",color:"#10B981"},5:{text:"R' = (R·U·F)⁻¹ = F⁻¹·U⁻¹·R⁻¹ → 逆序列法则",color:"#EF4444"}};function CR(){var s;const r=H.useRef(null),[e,t]=H.useState(-1);return H.useEffect(()=>{const o=[...es,...c0];let l=0,u=!1;const d=setInterval(()=>{r.current&&l<o.length?(r.current.executeMove(o[l]),t(l),l++):u||(u=!0,t(o.length),setTimeout(()=>{var h;(h=r.current)==null||h.reset(),t(-1),l=0,u=!1},3e3))},800);return()=>clearInterval(d)},[]),f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"hero",children:f.jsxs("div",{className:"hero-inner",children:[f.jsxs("div",{className:"hero-text",children:[f.jsxs("div",{className:"hero-badge",children:[f.jsx("span",{className:"hero-badge-dot"}),"线性代数 × 魔方"]}),f.jsxs("h1",{children:["魔方不是靠背的",f.jsx("br",{}),"是用",f.jsx("em",{children:"数学"}),"推出来的"]}),f.jsxs("p",{className:"hero-desc",children:["用线性代数思维理解魔方转动，用抵消法自主推导复原方案。",f.jsx("br",{}),f.jsx("strong",{children:"每一步转动都有数学解释"}),"——零公式，纯逻辑。"]}),f.jsxs("div",{className:"hero-btn-row",children:[f.jsx(an,{to:"/chapter/intro",className:"hero-btn-primary",children:"从零开始，用数学看懂魔方"}),f.jsx(an,{to:"/chapter/solve",className:"hero-btn-outline",children:"动手推导，体验复原逻辑"})]})]}),f.jsxs("div",{className:"hero-visual",children:[f.jsx("div",{className:"hero-cube-wrap",children:f.jsx(cs,{ref:r,disableStore:!0})}),f.jsx("div",{className:"hero-label",children:e===es.length+c0.length?f.jsx("div",{className:"hero-label-inner",style:{background:"#DCFCE7",borderLeftColor:"#16A34A"},children:"✅ 还原完成！每一步都有数学解释"}):e>=0?f.jsx("div",{className:"hero-label-inner",style:{background:e<es.length?"#EFF6FF":"#FEF3C7",borderLeftColor:e<es.length?"#3B82F6":"#F59E0B"},children:e<es.length?`打乱中… ${es[e]}`:((s=RR[e-es.length])==null?void 0:s.text)??"…"}):null})]})]})}),f.jsx("div",{className:"section-sm",style:{textAlign:"center"},children:f.jsxs("div",{className:"container",children:[f.jsx(an,{to:"/chapter/compose",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.9rem 2rem",background:"linear-gradient(135deg, var(--accent), var(--accent-d))",color:"#fff",fontWeight:700,fontSize:"1.05rem",borderRadius:"14px",textDecoration:"none",boxShadow:"0 4px 24px rgba(37,99,235,0.35)",transition:"transform 0.2s, box-shadow 0.2s"},onMouseEnter:o=>{o.currentTarget.style.transform="translateY(-2px)",o.currentTarget.style.boxShadow="0 6px 32px rgba(37,99,235,0.45)"},onMouseLeave:o=>{o.currentTarget.style.transform="",o.currentTarget.style.boxShadow="0 4px 24px rgba(37,99,235,0.35)"},children:"直接上手体验 →"}),f.jsx("p",{style:{color:"var(--ink2)",fontSize:"0.82rem",marginTop:"0.6rem"},children:"先看看矩阵乘法为什么不能交换 —— 3 分钟理解线代和魔方的关联"})]})}),f.jsx("div",{className:"section-sm",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"card-grid",children:[f.jsxs("div",{className:"card",children:[f.jsx("span",{className:"card-icon",children:"🧩"}),f.jsx("h3",{children:"零公式复原"}),f.jsx("p",{children:"不靠死记硬背，用逆变换逻辑自主推导每一步操作"})]}),f.jsxs("div",{className:"card",children:[f.jsx("span",{className:"card-icon",children:"🖐️"}),f.jsx("h3",{children:"交互式学习"}),f.jsx("p",{children:"所有概念均可动手操作，拖动魔方直接感受变换效果"})]}),f.jsxs("div",{className:"card",children:[f.jsx("span",{className:"card-icon",children:"📐"}),f.jsx("h3",{children:"线代思维复用"}),f.jsx("p",{children:"把课本知识落地，真正理解矩阵、逆矩阵、交换律"})]})]})})}),f.jsx("div",{className:"section",children:f.jsxs("div",{className:"container",children:[f.jsx("h2",{style:{textAlign:"center",fontSize:"1.3rem",fontWeight:700,marginBottom:"1.8rem"},children:"后续演进路线"}),f.jsx("div",{style:{maxWidth:"600px",margin:"0 auto",borderLeft:"3px solid var(--accent)",paddingLeft:"1.5rem"},children:[{stage:"阶段一（当前 Demo）",desc:"三阶魔方完整7步引导复原（十字→角块→棱块→黄十字→棱归位→角归位→翻黄角），每步对应线代/群论概念"},{stage:"阶段二",desc:"引入二阶魔方，30 分钟零基础入门（仅需一个公式 R U R' U'）"},{stage:"阶段三",desc:"三阶完整复原教学（七步引导，每步对应线代概念，含分步检测与提示系统）"},{stage:"阶段四",desc:'从线代类比走向群论入门，完成"类比→严谨"的学术过渡'}].map((o,l)=>f.jsxs("div",{style:{position:"relative",marginBottom:l<3?"1.5rem":0,paddingBottom:l<3?"1.5rem":0},children:[f.jsx("div",{style:{position:"absolute",left:"-1.8rem",top:"0.3rem",width:"14px",height:"14px",borderRadius:"50%",background:l===0?"var(--accent)":"var(--rule)",border:l===0?"3px solid var(--accent)":"3px solid var(--rule)"}}),f.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:l===0?"var(--accent)":"var(--ink)",marginBottom:"0.2rem"},children:o.stage}),f.jsx("div",{style:{fontSize:"0.84rem",color:"var(--ink2)"},children:o.desc}),l<3&&f.jsx("div",{style:{marginTop:"0.6rem",marginLeft:"-0.2rem",fontSize:"0.8rem",color:"var(--muted)"},children:"↓"})]},l))})]})}),f.jsx("div",{className:"section-sm",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"notice",children:["📐 ",f.jsx("strong",{children:"类比说明"}),"：本站用线性代数做类比科普，帮助理解魔方变换的行为逻辑。 魔方的严谨数学本质是",f.jsx("strong",{children:"置换群（鲁比克群）"}),"。想了解严谨数学？",f.jsx(an,{to:"/archive",children:" 前往数学档案馆 →"})]})})})]})}function aa({data:r,rows:e,label:t}){const s=r??e;return!s||s.length===0?f.jsx("span",{style:{color:"var(--muted)",fontSize:"0.85rem"},children:"[空矩阵]"}):f.jsxs("div",{className:"matrix-wrapper",children:[t&&f.jsx("span",{className:"matrix-label",children:t}),f.jsx("div",{className:"matrix",children:s.map((o,l)=>f.jsx("div",{className:"mrow",children:o.map((u,d)=>f.jsx("span",{children:u},d))},l))})]})}function eo(r,e){const t=[[0,0,0],[0,0,0],[0,0,0]];for(let s=0;s<3;s++)for(let o=0;o<3;o++)for(let l=0;l<3;l++)t[s][o]+=r[s][l]*e[l][o];return t}const Zn={R:[[1,0,0],[0,0,-1],[0,1,0]],R2:[[1,0,0],[0,-1,0],[0,0,-1]],U:[[0,0,1],[0,1,0],[-1,0,0]],U2:[[-1,0,0],[0,1,0],[0,0,-1]],F:[[0,-1,0],[1,0,0],[0,0,1]],I:[[1,0,0],[0,1,0],[0,0,1]]};function sa(r){return[[r[0][0],r[1][0],r[2][0]],[r[0][1],r[1][1],r[2][1]],[r[0][2],r[1][2],r[2][2]]]}function AR(r,e){for(let t=0;t<3;t++)for(let s=0;s<3;s++)if(r[t][s]!==e[t][s])return!1;return!0}const Zs=[{notation:"R",text:"正向 R：右面顺时针"},{notation:"U",text:"正向 U：上面顺时针"},{notation:"F",text:"正向 F：前面顺时针"}],Zl=[{notation:"F'",text:"逆向 F'：撤销 F"},{notation:"U'",text:"逆向 U'：撤销 U"},{notation:"R'",text:"逆向 R'：撤销 R"}];function bR({cubeRef:r}){const[e,t]=H.useState(!1),[s,o]=H.useState(-1),l=Zs.length+Zl.length,u=H.useCallback(()=>{var h;if(e)return;(h=r.current)==null||h.reset(),t(!0),o(-1);let d=500;for(let m=0;m<Zs.length;m++)setTimeout(()=>{var g;(g=r.current)==null||g.executeMove(Zs[m].notation),o(m)},d),d+=800;d+=600;for(let m=0;m<Zl.length;m++)setTimeout(()=>{var g;(g=r.current)==null||g.executeMove(Zl[m].notation),o(Zs.length+m)},d),d+=800;setTimeout(()=>{t(!1),o(l)},d+300)},[e]);return f.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid var(--accent)"},children:[f.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"逆序撤销演示：(R · U · F)⁻¹ = F' · U' · R'"}),f.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["先执行 R→U→F 三步操作，再按",f.jsx("strong",{children:"逆序"})," F'→U'→R' 逐步撤销。 后做的先撤销——这就是第 4 节和第 6 节的核心",f.jsx("strong",{children:"逆序列法则"}),"。"]}),f.jsxs("div",{style:{display:"flex",gap:"0.3rem",marginBottom:"0.6rem",flexWrap:"wrap",alignItems:"center"},children:[f.jsx("span",{style:{fontSize:"0.7rem",color:"var(--muted)",marginRight:"0.2rem"},children:"正向"}),Zs.map((d,h)=>f.jsx("div",{style:{padding:"0.25rem 0.5rem",borderRadius:"4px",fontSize:"0.72rem",background:h===s?"var(--accent-l)":"var(--bg2)",borderLeft:"2px solid "+(h===s?"var(--accent)":"transparent"),transition:"all 0.3s ease"},children:f.jsx("strong",{style:{fontFamily:"monospace"},children:d.notation})},h)),f.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--muted)",margin:"0 0.2rem"},children:"→"}),f.jsx("span",{style:{fontSize:"0.7rem",color:"var(--muted)",marginRight:"0.2rem"},children:"逆向"}),Zl.map((d,h)=>{const m=Zs.length+h;return f.jsx("div",{style:{padding:"0.25rem 0.5rem",borderRadius:"4px",fontSize:"0.72rem",background:m===s?"#FEE2E2":"var(--bg2)",borderLeft:"2px solid "+(m===s?"#DC2626":"transparent"),transition:"all 0.3s ease"},children:f.jsx("strong",{style:{fontFamily:"monospace",color:"#DC2626"},children:d.notation})},h)})]}),s===l&&f.jsxs("div",{style:{padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.8rem",marginBottom:"0.6rem"},children:[f.jsx("span",{style:{fontWeight:700,color:"#16A34A"},children:"魔方回到还原状态！"}),f.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.4rem"},children:"逆序撤销 = 把每一步反过来执行——后做的先撤销。"})]}),f.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:u,disabled:e,children:e?"播放中...":"播放逆序撤销动画"})]})}const Qs=[{notation:"U",text:"① P=U：顶层转一下，把棱块对准右侧"},{notation:"R",text:"② A=R：右面转一下，棱块进入中层"},{notation:"U'",text:"③ P'=U'：顶层转回来，恢复顶层"}];function PR({cubeRef:r}){const[e,t]=H.useState(!1),[s,o]=H.useState(-1),l=H.useCallback(()=>{var d;if(e)return;(d=r.current)==null||d.reset(),t(!0),o(-1);let u=500;for(let h=0;h<Qs.length;h++)setTimeout(()=>{var m;(m=r.current)==null||m.executeMove(Qs[h].notation),o(h)},u),u+=1e3;setTimeout(()=>{t(!1),o(Qs.length)},u+300)},[e]);return f.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid var(--orange)"},children:[f.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"共轭变换演示：P · A · P' = 三明治变换"}),f.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["先执行 P=",f.jsx("strong",{children:"U"})," 把目标棱块移到操作位， 再执行 A=",f.jsx("strong",{children:"R"}),"（核心操作）， 最后执行 P'=",f.jsx("strong",{children:"U'"})," 搬回来。 整体效果：",f.jsx("strong",{children:"只改变目标棱块"}),"，不破坏已复原的部分。"]}),f.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.6rem",background:"var(--bg2)",borderRadius:"4px",padding:"0.3rem 0.5rem"},children:'Tutorial 中层棱块用的就是共轭变换——把棱块搬进搬出，这就是"三明治"的由来。'}),f.jsx("div",{style:{display:"flex",gap:"0.3rem",marginBottom:"0.6rem",flexWrap:"wrap"},children:Qs.map((u,d)=>f.jsxs("div",{style:{padding:"0.3rem 0.6rem",borderRadius:"6px",fontSize:"0.72rem",background:d===s?"#FFF7ED":s===Qs.length?"#DCFCE7":"var(--bg2)",borderLeft:"3px solid "+(d===s?"var(--orange)":"transparent"),transition:"all 0.3s ease"},children:[f.jsx("strong",{style:{fontFamily:"monospace"},children:u.notation}),f.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.3rem"},children:u.text})]},d))}),s===Qs.length&&f.jsxs("div",{style:{padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.8rem",marginBottom:"0.6rem"},children:[f.jsx("span",{style:{fontWeight:700,color:"#16A34A"},children:"注意看"}),f.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.4rem"},children:"棱块成功移到了中层，但顶层和底层的其他块几乎没变。 这就是共轭变换的威力：精准手术式操作，P·A·P'。"})]}),f.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:l,disabled:e,children:e?"播放中...":"播放共轭变换动画"})]})}const Ql=["R","U","R'","U'"];function LR({cubeRef:r}){const[e,t]=H.useState(0),[s,o]=H.useState(!1),[l,u]=H.useState(!1),d=H.useCallback(()=>{var g;if(s)return;(g=r.current)==null||g.reset(),t(0),u(!1),o(!0);let m=600;for(let v=0;v<Ql.length;v++)setTimeout(()=>{var y;(y=r.current)==null||y.executeMove(Ql[v]),t(v+1),v===Ql.length-1&&(u(!0),o(!1))},m),m+=1e3},[s]),h=H.useCallback(()=>{var m;(m=r.current)==null||m.reset(),t(0),u(!1),o(!1)},[]);return f.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid #8B5CF6"},children:[f.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"交换子演示 [X, Y] = X·Y·X'·Y'"}),f.jsx("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"点击播放交换子观察：R·U·R'·U' 只产生 3-循环 （3 个角块和 3 个棱块各自轮换，其余不变）"}),f.jsx("div",{style:{display:"flex",gap:"0.3rem",marginBottom:"0.8rem"},children:Ql.map((m,g)=>f.jsx("div",{style:{flex:1,padding:"0.3rem",textAlign:"center",borderRadius:"4px",fontSize:"0.78rem",fontFamily:"monospace",background:e>g?"#EDE9FE":e===g&&s?"#FDE68A":"var(--bg2)",fontWeight:e>g?700:400,color:e>g?"#7C3AED":"var(--ink2)"},children:m},g))}),l&&f.jsx("div",{style:{marginBottom:"0.8rem",padding:"0.4rem 0.8rem",borderRadius:"6px",background:"#EDE9FE",fontSize:"0.82rem",color:"#7C3AED",fontWeight:600},children:"交换子完成！只产生了 3-循环（3 角块 + 3 棱块各自轮换）"}),f.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[f.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:d,disabled:s,children:s?"播放中...":"▶ 播放交换子"}),f.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:h,children:"重置"})]})]})}function DR({cubeRef:r}){const[e,t]=H.useState("reverse"),s=[{key:"reverse",label:"逆序撤销",icon:"U0001f504",color:"#10B981"},{key:"conjugate",label:"共轭变换",icon:"U0001f35a",color:"#F59E0B"},{key:"commutator",label:"交换子",icon:"⚡",color:"#EF4444"}];return f.jsxs("div",{className:"card",style:{padding:"0",overflow:"hidden"},children:[f.jsx("div",{style:{display:"flex",borderBottom:"2px solid var(--rule)"},children:s.map(o=>f.jsxs("button",{onClick:()=>t(o.key),style:{flex:1,padding:"0.5rem 0.3rem",fontSize:"0.78rem",fontWeight:e===o.key?700:400,borderBottom:e===o.key?`3px solid ${o.color}`:"3px solid transparent",background:e===o.key?"#fff":"var(--bg2)",color:e===o.key?o.color:"var(--ink2)",border:"none",cursor:"pointer",transition:"all 0.2s ease"},children:[o.icon," ",o.label]},o.key))}),f.jsxs("div",{style:{padding:"0.8rem 1rem"},children:[e==="reverse"&&f.jsx(bR,{cubeRef:r}),e==="conjugate"&&f.jsx(PR,{cubeRef:r}),e==="commutator"&&f.jsx(LR,{cubeRef:r})]})]})}function Uv(r){const[e,t,s]=r.position;return e!==0&&t!==0&&s!==0}function Nv(r){const[e,t,s]=r.position;return(e===0?1:0)+(t===0?1:0)+(s===0?1:0)===1}function UR(r){const{right:e,left:t,up:s,down:o,front:l,back:u}=r.colors,h=[e,t,s,o,l,u].filter(g=>g!==null).sort().join("");return{GRW:[1,1,1],BRW:[1,1,-1],GRY:[1,-1,1],BRY:[1,-1,-1],GOW:[-1,1,1],BOW:[-1,1,-1],GOY:[-1,-1,1],BOY:[-1,-1,-1]}[h]||null}function NR(r){const e=r.filter(Uv),t=[[-1,-1,-1],[-1,-1,1],[-1,1,-1],[-1,1,1],[1,-1,-1],[1,-1,1],[1,1,-1],[1,1,1]],s=d=>{const h=UR(d);return h?t.findIndex(m=>m[0]===h[0]&&m[1]===h[1]&&m[2]===h[2]):null},l=[...e].sort((d,h)=>{const[m,g,v]=d.position,[y,E,M]=h.position;return m!==y?m-y:g!==E?g-E:v-M}).map(s).filter(d=>d!==null);let u=0;for(let d=0;d<l.length;d++)for(let h=d+1;h<l.length;h++)l[d]>l[h]&&u++;return u%2}function IR(r){const{right:e,left:t,up:s,down:o,front:l,back:u}=r.colors,h=[e,t,s,o,l,u].filter(g=>g!==null).sort().join("");return{RW:[1,1,0],GR:[1,0,1],RY:[1,-1,0],BR:[1,0,-1],OW:[-1,1,0],GO:[-1,0,1],OY:[-1,-1,0],BO:[-1,0,-1],GW:[0,1,1],BW:[0,1,-1],GY:[0,-1,1],BY:[0,-1,-1]}[h]||null}function FR(r){const e=r.filter(Nv),t=[[-1,0,-1],[-1,0,1],[1,0,-1],[1,0,1],[-1,-1,0],[-1,1,0],[1,-1,0],[1,1,0],[0,-1,-1],[0,-1,1],[0,1,-1],[0,1,1]],s=d=>{const h=IR(d);return h?t.findIndex(m=>m[0]===h[0]&&m[1]===h[1]&&m[2]===h[2]):null},l=[...e].sort((d,h)=>{const[m,g,v]=d.position,[y,E,M]=h.position;return m!==y?m-y:g!==E?g-E:v-M}).map(s).filter(d=>d!==null);let u=0;for(let d=0;d<l.length;d++)for(let h=d+1;h<l.length;h++)l[d]>l[h]&&u++;return u%2}function kR(r){const e=r.filter(Uv);let t=0;for(const s of e){const{right:o,left:l,up:u,down:d,front:h,back:m}=s.colors,g=E=>E==="W",v=E=>E==="Y",y=E=>g(E)||v(E);if(!(y(u)||y(d))){if(y(h)||y(m)){t+=1;continue}if(y(o)||y(l)){t+=2;continue}}}return t%3}function OR(r){const e=r.filter(Nv);let t=0;for(const s of e){const{up:o,down:l}=s.colors,u=m=>m==="W",d=m=>m==="Y",h=m=>u(m)||d(m);!h(o)&&!h(l)&&(t+=1)}return t%2}const Vf={R:"R（右面顺时针）","R'":"R'（右面逆时针）",L:"L（左面顺时针）","L'":"L'（左面逆时针）",U:"U（上面顺时针）","U'":"U'（上面逆时针）",D:"D（底面顺时针）","D'":"D'（底面逆时针）",F:"F（前面顺时针）","F'":"F'（前面逆时针）",B:"B（后面顺时针）","B'":"B'（后面逆时针）"},u0={intro:"#3B82F6",matrix:"#10B981",compose:"#F59E0B",inverse:"#8B5CF6",invariant:"#06B6D4",solve:"#EF4444"},d0={intro:["状态 = 向量","26 块各有位置","还原态 = 基准向量"],matrix:["转动 = 旋转矩阵","R = 绕X轴90°","矩阵不满足交换律"],compose:["R·U ≠ U·R","顺序影响结果","矩阵乘法 ≠ 魔方操作可交换"],inverse:["逆操作 = 逆矩阵","(A·B)⁻¹ = B⁻¹·A⁻¹","后做的先撤销"],invariant:["中心块不动","奇偶性守恒","不可能只换两角"],solve:["逆序撤销（初级）","共轭变换（中级）","交换子（高级）"]},f0=["R","R'","U","U'","F","F'"];function h0(r){const e=r[0],t=r.length>1,s=Zn[e];return t?sa(s):s}const Wd={intro:{title:"魔方状态 = 向量",subtitle:"把魔方的当前排列看作一个高维状态向量",prev:null,next:"matrix",keyPoints:["一个魔方有 26 个小块（3×3×3 去掉中心），每个块有自己的位置和朝向",'如果把所有块的位置信息排成一列，就得到了一个"状态向量"',"就像线性代数里用向量表示点的空间位置，这里我们用向量表示魔方的整体状态",'还原状态是一个特殊的"基准向量"，所有其他状态都是它的变换结果'],demoHint:"尝试点击右面（R面），用左键（逆时针）和右键（顺时针）分别转动，观察魔方状态变化",analogy:'类比：在平面上，一个点 (x, y) 是一个二维向量。魔方状态可以理解为 26 个方块在三维空间中的排列组合——一个高维"配置向量"。'},matrix:{title:"单次转动 = 变换矩阵",subtitle:"拧一层面就是对状态向量做一次线性变换",prev:"intro",next:"compose",keyPoints:["魔方的每一次转动，本质上是对选定层上所有方块位置和朝向的重新排列","在数学上，我们可以用 3×3 旋转矩阵描述方块坐标的变换——它保持长度和角度不变（注：这是简化类比，魔方操作的严谨本质是置换群，详见数学档案馆）","右面顺时针转（R）就是把右层 8 个方块沿 X 轴旋转 90°","重点：不同的面转动对应不同的变换矩阵，矩阵运算不满足交换律"],matrices:[{label:"R 面转动对应的旋转矩阵（绕X轴+90°）",data:[[1,0,0],[0,0,-1],[0,1,0]]}],demoHint:"将鼠标移到魔方右面上，左键点击=逆时针，右键点击=顺时针",analogy:"类比：在二维平面上，旋转矩阵 [[cosθ,-sinθ],[sinθ,cosθ]] 把向量旋转 θ 度。魔方的面转动也是类似的旋转变换，作用在三维方块上。"},compose:{title:"连续转动 = 矩阵乘法",subtitle:"R×U ≠ U×R — 矩阵乘法不满足交换律",prev:"matrix",next:"inverse",keyPoints:["先做 R 再做 U，整体效果等价于两个矩阵相乘：R × U","反过来先 U 后 R，就是 U × R","亲手计算就会发现：R × U ≠ U × R！矩阵乘法不满足交换律","这就是为什么魔方操作顺序不能随便换 —— 对应的数学原理"],demoHint:"鼠标左键点击面 = 逆时针旋转 | 右键点击面 = 顺时针旋转 | 空白处拖拽 = 旋转视角",analogy:'类比：生活中"先穿袜子再穿鞋"和"先穿鞋再穿袜子"结果是完全不同的。魔方的层转动也是如此——顺序决定最终状态。矩阵乘积 R×U ≠ U×R 就是这句话的数学表达。'},inverse:{title:"反向转动 = 逆矩阵",subtitle:"R×R⁻¹=I，逆序撤销：(R·U)⁻¹=U⁻¹·R⁻¹",prev:"compose",next:"invariant",keyPoints:["如果 R 是顺时针转 90°，那么 R' 就是逆时针转 90° — 在数学上 R × R' = I",'这就是"逆矩阵"的核心：存在一个操作让变换"撤销"','(R·U)⁻¹ = U⁻¹·R⁻¹ — "后做的先撤销、先做的后撤销"',"复原魔方的核心：找到打乱序列的逆序列（逆序），反向操作即可还原"],demoHint:'点击下方"撤销一步"按钮，观察逆操作逐步将魔方还原',analogy:'类比：如果你先穿上衣再穿裤子，脱的时候要先脱裤子再脱上衣——逆序法则就是"后做的先撤销，先做的后撤销"。数学上：(R·U)⁻¹ = U⁻¹·R⁻¹。'},invariant:{title:"守恒约束 = 不变量",subtitle:"某些东西在魔方转动中永远不会改变",prev:"inverse",next:"solve",keyPoints:['在魔方中，某些性质在任意合法操作下都保持不变（称为"不变量"）',"例如：6 个中心块的相对位置永远不变（对 3 阶魔方而言）","更深层的约束：角块排列的奇偶性和棱块排列的奇偶性始终相同——所以不可能只交换两个角块而其他块不变","这类似正交矩阵的行列式满足 det(A)·det(B) = det(AB)：乘积关系恒成立。魔方中角块奇偶性 × 棱块奇偶性恒为偶（+1），所以不可能只交换两个角块而其他块不变"],demoHint:"尝试打乱魔方，观察中心块的位置是否始终不变",analogy:"类比：正交矩阵的行列式满足 det(A)·det(B) = det(AB)，这个乘积关系永远不变。魔方也有不变量：任何合法操作下，角块排列的奇偶性和棱块排列的奇偶性始终相同（两者乘积恒为偶），所以不可能只交换两个角块而其他一切不动。"},solve:{title:"复原方法：抵消法",subtitle:"零公式自主还原的数学框架",prev:"invariant",next:null,keyPoints:["复原魔方的本质：找到一系列操作的逆操作，按逆序执行","核心工具（初级）——逆序撤销：(A·B·C)⁻¹ = C⁻¹·B⁻¹·A⁻¹，后做的先撤销。Tutorial 角块部分在教这个","核心工具（中级）——共轭变换：P·A·P' 先搬到操作层→执行→搬回来。Tutorial 棱块部分在教这个","核心工具（高级）——交换子 [X, Y] = X·Y·X'·Y'：只产生 3-循环（通常影响 3 个角块和 3 个棱块），不破坏已复原部分。后续探索","下面的引导将带你亲手用逆序撤销和共轭变换复原角块和棱块"],matrices:[],demoHint:'点击下方"开始引导"按钮，进入交互式复原引导',analogy:'类比：复原魔方就像解方程组——每一步"消元"只处理一个未知数，不破坏已经求解的变量。'}},BR={intro:1,matrix:2,compose:3,inverse:4,invariant:5,solve:6},Jl={padding:"0.4rem 0.6rem",textAlign:"left",borderBottom:"2px solid var(--rule)",fontWeight:700},Kn={padding:"0.35rem 0.6rem",borderBottom:"1px solid var(--rule)"};function zR(){return f.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[f.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"方向指数编码"}),f.jsx("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"每个小块的位置用 3 个数字编码（H K L），取值为 1、0 或 -1："}),f.jsxs("table",{style:{width:"100%",fontSize:"0.82rem",borderCollapse:"collapse"},children:[f.jsx("thead",{children:f.jsxs("tr",{style:{background:"var(--bg2)"},children:[f.jsx("th",{style:Jl,children:"小块类型"}),f.jsx("th",{style:Jl,children:"方向指数"}),f.jsx("th",{style:Jl,children:"数量"}),f.jsx("th",{style:Jl,children:"说明"})]})}),f.jsxs("tbody",{children:[f.jsxs("tr",{children:[f.jsx("td",{style:Kn,children:"角块"}),f.jsx("td",{style:{...Kn,fontFamily:"monospace"},children:"(1, 1, 1)"}),f.jsx("td",{style:Kn,children:"8"}),f.jsx("td",{style:Kn,children:"3个面都有颜色，位于立方体角落"})]}),f.jsxs("tr",{children:[f.jsx("td",{style:Kn,children:"棱块"}),f.jsx("td",{style:{...Kn,fontFamily:"monospace"},children:"(1, 1, 0)"}),f.jsx("td",{style:Kn,children:"12"}),f.jsx("td",{style:Kn,children:"2个面有颜色，位于棱上"})]}),f.jsxs("tr",{children:[f.jsx("td",{style:Kn,children:"心块"}),f.jsx("td",{style:{...Kn,fontFamily:"monospace"},children:"(1, 0, 0)"}),f.jsx("td",{style:Kn,children:"6"}),f.jsx("td",{style:Kn,children:"1个面有颜色，位于面中心"})]})]})]}),f.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginTop:"0.6rem"},children:"1、0、-1 三个数排列组合共 27 种，去掉 (0,0,0) 中心点 = 26 个方块，一个不多一个不少"})]})}function p0({options:r,explanation:e}){const[t,s]=H.useState(null);return f.jsxs("div",{children:[r.map((o,l)=>f.jsxs("button",{onClick:()=>s(l),style:{display:"block",width:"100%",textAlign:"left",padding:"0.4rem 0.8rem",marginBottom:"0.4rem",borderRadius:"6px",border:"1px solid var(--rule)",background:t===l?o.correct?"#dcfce7":"#fee2e2":"var(--bg)",fontSize:"0.82rem",cursor:"pointer"},children:[o.label,t===l&&f.jsx("span",{style:{marginLeft:"0.5rem"},children:o.correct?"✅":"❌"})]},l)),t!==null&&f.jsxs("p",{style:{marginTop:"0.6rem",padding:"0.6rem",background:r[t].correct?"#dcfce7":"#fef3c7",borderRadius:"6px",fontSize:"0.8rem"},children:[r[t].correct?"🎉 ":"💡 ",e]})]})}function HR({leftCubeRef:r,rightCubeRef:e}){const[t,s]=H.useState("R"),[o,l]=H.useState("U"),[u,d]=H.useState(null),[h,m]=H.useState(null),[g,v]=H.useState(!1),y=H.useCallback(()=>{var U,D;const M=h0(t),T=h0(o),S=eo(M,T),_=eo(T,M);d(S),m(_),v(!0),(U=r.current)==null||U.reset(),(D=e.current)==null||D.reset(),setTimeout(()=>{var P;(P=r.current)==null||P.executeMove(t),setTimeout(()=>{var Y;return(Y=r.current)==null?void 0:Y.executeMove(o)},350),setTimeout(()=>{var Y;(Y=e.current)==null||Y.executeMove(o),setTimeout(()=>{var B;return(B=e.current)==null?void 0:B.executeMove(t)},350)},1200)},500)},[t,o,r,e]),E=u&&h?AR(u,h):null;return f.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[f.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"交换律验证区"}),f.jsx("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"选择两个操作，左右两个魔方同时演示不同顺序 —— 看最终结果是否一致。"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap",marginBottom:"0.8rem"},children:[f.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600},children:"操作 ①"}),f.jsx("select",{value:t,onChange:M=>{s(M.target.value),v(!1)},style:{padding:"0.3rem 0.5rem",borderRadius:"6px",border:"1px solid var(--rule)",fontSize:"0.85rem",fontFamily:"monospace",background:"#fff"},children:f0.map(M=>f.jsx("option",{value:M,children:Vf[M]},M))}),f.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600},children:"操作 ②"}),f.jsx("select",{value:o,onChange:M=>{l(M.target.value),v(!1)},style:{padding:"0.3rem 0.5rem",borderRadius:"6px",border:"1px solid var(--rule)",fontSize:"0.85rem",fontFamily:"monospace",background:"#fff"},children:f0.map(M=>f.jsx("option",{value:M,children:Vf[M]},M))})]}),f.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem",marginBottom:"0.8rem"},onClick:y,children:"执行并对比"}),g&&u&&h&&f.jsxs("div",{children:[f.jsxs("div",{style:{marginBottom:"0.8rem",padding:"0.4rem 0.8rem",borderRadius:"6px",fontWeight:700,fontSize:"0.88rem",background:E?"#DCFCE7":"#FEE2E2",color:E?"#16A34A":"#DC2626"},children:["结果：",E?"相同 ✓（极少数情况）":"不同 ✗（绝大多数情况）"]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.8rem"},children:[f.jsxs("div",{style:{textAlign:"center"},children:[f.jsxs("p",{style:{fontSize:"0.72rem",color:"var(--muted)",marginBottom:"0.3rem"},children:["①→②：",t,"×",o]}),f.jsx(aa,{data:u})]}),f.jsxs("div",{style:{textAlign:"center"},children:[f.jsxs("p",{style:{fontSize:"0.72rem",color:"var(--muted)",marginBottom:"0.3rem"},children:["②→①：",o,"×",t]}),f.jsx(aa,{data:h})]})]})]})]})}function jR({cubeRef:r}){const e=["R","U","F","U'"],[t,s]=H.useState(e.length),[o,l]=H.useState(!1),[u,d]=H.useState(!1);H.useEffect(()=>{if(!o&&r.current){const v=setTimeout(()=>{var E;(E=r.current)==null||E.reset();let y=500;for(const M of e)setTimeout(()=>{var T;return(T=r.current)==null?void 0:T.executeMove(M)},y),y+=350;setTimeout(()=>{l(!0),s(e.length)},y)},600);return()=>clearTimeout(v)}},[o]);const h=H.useCallback(()=>{if(t<=0||!r.current)return;const v=t-1,y=e[v],E=y.endsWith("'")?y[0]:y+"'";r.current.undoMove(E);const M=v;s(M),M===0&&d(!0)},[t]),m=H.useCallback(()=>{var v;(v=r.current)==null||v.reset(),l(!1),d(!1)},[]),g=e.slice(0,t);return f.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[f.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"🔄 撤销演示"}),f.jsx("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:'魔方已执行了 4 步操作。点击"撤销一步"，观察逆操作逐步还原。'}),o&&f.jsx("div",{style:{marginBottom:"0.8rem",padding:"0.4rem 0.8rem",borderRadius:"6px",background:u?"#DCFCE7":"var(--bg2)",fontSize:"0.82rem"},children:u?f.jsx("span",{style:{fontWeight:700,color:"#16A34A"},children:"🎉 还原成功！这就是逆矩阵的力量"}):f.jsxs("span",{children:[f.jsx("strong",{children:"剩余操作："}),f.jsx("span",{style:{fontFamily:"monospace",color:"var(--accent)"},children:g.length>0?g.map(v=>Vf[v]||v).join(" · "):"（空）"})]})}),f.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[f.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:h,disabled:!o||t<=0,children:"🔄 撤销一步"}),f.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:m,children:"重置演示"})]})]})}function VR({cubeRef:r}){const[e,t]=H.useState(!1),[s,o]=H.useState(0),[l,u]=H.useState(!1),d=mi(S=>S.cubies),h=NR(d),m=FR(d),g=h===m,v=kR(d),y=OR(d),E=H.useCallback(()=>{u(!0)},[]),M=H.useCallback(()=>{var S;(S=r.current)==null||S.reset(),setTimeout(()=>{var _;return(_=r.current)==null?void 0:_.scramble(12)},300),t(!0),o(_=>_+1)},[]),T=H.useCallback(()=>{var S;(S=r.current)==null||S.reset(),t(!1)},[]);return f.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid var(--accent)"},children:[f.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.6rem"},children:"不变量观察器"}),f.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:['多次点击"随机打乱"并观察：无论怎么转，',f.jsx("strong",{children:"6 个中心块的相对位置始终不变"}),'—— 红对着橙，蓝对着绿，白对着黄。这就是魔方的"不变量"。']}),e&&s>0&&f.jsxs("div",{style:{marginBottom:"0.8rem",padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.82rem"},children:[f.jsxs("span",{style:{fontWeight:700,color:"#16A34A"},children:["已打乱 ",s," 次"]}),f.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.4rem"},children:"— 红橘相对、蓝绿相对、白黄相对，不变"})]}),f.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[f.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.82rem"},onClick:M,children:"随机打乱"}),f.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:T,children:"重置"}),f.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",color:"#DC2626",borderColor:"#DC2626"},onClick:E,children:"检查奇偶性"})]}),f.jsx("div",{style:{marginTop:"0.8rem",padding:"0.6rem 0.8rem",borderRadius:"6px",background:"#FEF3C7",borderLeft:"3px solid #F59E0B",fontSize:"0.8rem",color:"var(--ink2)"},children:"更深层的不变量：角块排列的奇偶性和棱块排列的奇偶性始终相同。因此不可能只交换两个角块而其他一切不动——这不是技术不够，是数学约束。"}),l&&f.jsxs("div",{style:{marginTop:"0.6rem",padding:"0.6rem 0.8rem",borderRadius:"6px",background:g?"#DCFCE7":"#FEE2E2",fontSize:"0.82rem",color:g?"#16A34A":"#DC2626",lineHeight:1.7},children:[f.jsx("div",{style:{fontWeight:700,marginBottom:"0.3rem"},children:g?"合法状态 ✓":"非法状态 ✗"}),f.jsxs("div",{children:["角块奇偶性 = ",f.jsx("strong",{children:h}),"  |  棱块奇偶性 = ",f.jsx("strong",{children:m})]}),f.jsxs("div",{style:{marginTop:"0.2rem"},children:["角块色向 mod 3 = ",f.jsx("strong",{children:v})," (合法=0)  |  棱块色向 mod 2 = ",f.jsx("strong",{children:y})," (合法=0)"]}),f.jsx("div",{style:{marginTop:"0.3rem",fontSize:"0.75rem",color:"var(--ink2)"},children:g?"角块奇偶性 = 棱块奇偶性，满足守恒约束":"角块奇偶性 ≠ 棱块奇偶性 — 数学上不可能通过合法转动达到此状态"})]})]})}function GR(){const{id:r}=cy(),e=H0(),t=r?Wd[r]:void 0,s=H.useRef(null),o=H.useRef(null),l=H.useRef(null);if(!t)return f.jsx("div",{className:"section",children:f.jsxs("div",{className:"container",style:{textAlign:"center",paddingTop:"3rem"},children:[f.jsx("h2",{style:{fontSize:"1.4rem",marginBottom:"0.8rem"},children:"章节未找到"}),f.jsxs("p",{style:{color:"var(--ink2)",marginBottom:"1.2rem"},children:["「",r,"」不是有效的章节编号。"]}),f.jsx(an,{to:"/",className:"btn btn-primary",children:"返回首页"})]})});const u=r==="compose"?[{label:"R 转动矩阵",data:Zn.R},{label:"U 转动矩阵",data:Zn.U},{label:"R × U =",data:eo(Zn.R,Zn.U)},{label:"U × R =",data:eo(Zn.U,Zn.R)}]:void 0,d=r==="inverse"?[{label:"R⁻¹ 逆矩阵（逆时针90°）",data:sa(Zn.R)},{label:"验证：R × R⁻¹ = I（单位矩阵）",data:eo(Zn.R,sa(Zn.R))},{label:"逆序法则：(R·U)⁻¹ = U⁻¹·R⁻¹ =",data:eo(sa(Zn.U),sa(Zn.R))}]:void 0,h=r==="compose"?u:r==="inverse"?d:t.matrices;return f.jsx(f.Fragment,{children:f.jsx("div",{className:"section",children:f.jsxs("div",{className:"container",children:[f.jsxs("h2",{style:{fontSize:"1.6rem",fontWeight:700,marginBottom:"0.3rem",borderLeft:`5px solid ${u0[r]}`,paddingLeft:"0.8rem"},children:["第 ",BR[r]," 节  ",t.title]}),f.jsx("p",{style:{fontSize:"0.95rem",color:"var(--ink2)",marginBottom:"1.5rem"},children:t.subtitle}),r==="solve"&&f.jsxs("div",{style:{marginBottom:"1.5rem",padding:"1.2rem 1.5rem",borderRadius:"12px",background:"linear-gradient(135deg, #1E1B4B 0%, #3B0764 40%, #7F1D1D 100%)",color:"#fff"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.8rem",marginBottom:"0.6rem"},children:[f.jsx("span",{style:{fontSize:"1.8rem"},children:"🏆"}),f.jsxs("div",{children:[f.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:800,margin:0,letterSpacing:"0.5px"},children:"终章挑战：把前面学的全部用上"}),f.jsx("p",{style:{fontSize:"0.82rem",margin:"0.2rem 0 0 0",opacity:.85},children:'这一节将串联全部知识点，从"看着公式还原"进化到"理解每一步为什么这样做"'})]})]}),f.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[{label:"初级 · 逆序撤销",color:"#10B981",icon:"🔄"},{label:"中级 · 共轭变换",color:"#F59E0B",icon:"🥪"},{label:"高级 · 交换子",color:"#EF4444",icon:"⚡"}].map(m=>f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",padding:"0.3rem 0.7rem",borderRadius:"20px",background:"rgba(255,255,255,0.15)",fontSize:"0.78rem",fontWeight:600,border:`1px solid ${m.color}40`},children:[f.jsx("span",{children:m.icon}),f.jsx("span",{children:m.label})]},m.label))})]}),f.jsxs("div",{className:"two-col",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[f.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem",color:"var(--accent)"},children:"本节要点"}),f.jsx("ul",{style:{paddingLeft:"1.2rem",fontSize:"0.85rem",color:"var(--ink2)",lineHeight:1.8},children:t.keyPoints.map((m,g)=>f.jsx("li",{style:{marginBottom:"0.4rem"},children:m},g))})]}),r==="intro"&&f.jsx(zR,{}),r==="compose"&&u&&f.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[f.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"真实转动矩阵：魔方面操作对应的数学表达"}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem",marginBottom:"0.6rem"},children:u.map((m,g)=>f.jsxs("div",{style:{textAlign:"center",padding:"0.5rem",background:"var(--bg2)",borderRadius:"8px"},children:[f.jsx("p",{style:{fontSize:"0.72rem",color:"var(--muted)",marginBottom:"0.3rem",fontWeight:600},children:m.label}),f.jsx(aa,{data:m.data})]},g))}),f.jsx("p",{style:{textAlign:"center",fontSize:"0.75rem",color:"var(--orange)",fontWeight:600},children:"⚠️ 两行结果不同！顺序很重要！"}),f.jsx("p",{style:{fontSize:"0.72rem",color:"var(--muted)",marginTop:"0.5rem",textAlign:"center"},children:"上排 = R×U，下排 = U×R —— 矩阵乘法不满足交换律"})]}),r==="inverse"&&d&&f.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[f.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"逆矩阵计算"}),d.map((m,g)=>f.jsxs("div",{style:{marginBottom:g<d.length-1?"1rem":0},children:[f.jsx("p",{style:{fontSize:"0.78rem",color:"var(--muted)",marginBottom:"0.4rem"},children:m.label}),f.jsx(aa,{data:m.data})]},g)),f.jsx("p",{style:{fontSize:"0.78rem",color:"var(--ink2)",marginTop:"0.6rem"},children:"也就是说：先拧R再拧U的撤销方法是——先撤销U（U⁻¹），再撤销R（R⁻¹），顺序反过来！"})]}),r!=="compose"&&r!=="inverse"&&h&&h.length>0&&f.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[f.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"数学演示"}),h.map((m,g)=>f.jsxs("div",{style:{marginBottom:g<h.length-1?"1rem":0},children:[f.jsx("p",{style:{fontSize:"0.78rem",color:"var(--muted)",marginBottom:"0.4rem"},children:m.label}),f.jsx(aa,{data:m.data})]},g)),r==="matrix"&&f.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--ink3)",marginTop:"0.5rem",fontStyle:"italic"},children:["※ 此处用 3×3 旋转矩阵做简化类比，描述单个方块坐标的变换。魔方操作实际上是对 20 个可动方块的整体置换，严谨数学框架见",f.jsx("a",{href:"#/archive",style:{color:"var(--accent)"},children:"数学档案馆"}),"。"]})]}),r==="solve"&&f.jsxs("div",{style:{marginBottom:"1rem"},children:[f.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem",color:"var(--accent)"},children:"复原工具箱：三个层次的数学工具"}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0.6rem"},children:[f.jsxs("div",{className:"card",style:{marginBottom:0,borderLeft:"4px solid #10B981",padding:"0.8rem 1rem"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.4rem"},children:[f.jsx("span",{style:{fontSize:"1rem"},children:"🔄"}),f.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"#10B981"},children:"初级"})]}),f.jsx("p",{style:{fontSize:"0.78rem",fontWeight:600,marginBottom:"0.3rem"},children:"逆序撤销"}),f.jsx("p",{style:{fontSize:"0.72rem",color:"var(--ink2)",lineHeight:1.5,marginBottom:0},children:"(A·B·C)⁻¹ = C⁻¹·B⁻¹·A⁻¹"}),f.jsx("p",{style:{fontSize:"0.68rem",color:"var(--muted)",lineHeight:1.4,marginTop:"0.2rem"},children:"后做的先撤销，Tutorial 角块在教这个"})]}),f.jsxs("div",{className:"card",style:{marginBottom:0,borderLeft:"4px solid #F59E0B",padding:"0.8rem 1rem"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.4rem"},children:[f.jsx("span",{style:{fontSize:"1rem"},children:"🥪"}),f.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"#F59E0B"},children:"中级"})]}),f.jsx("p",{style:{fontSize:"0.78rem",fontWeight:600,marginBottom:"0.3rem"},children:"共轭变换"}),f.jsx("p",{style:{fontSize:"0.72rem",color:"var(--ink2)",lineHeight:1.5,marginBottom:0},children:"P·A·P'：搬过去→执行→搬回来"}),f.jsx("p",{style:{fontSize:"0.68rem",color:"var(--muted)",lineHeight:1.4,marginTop:"0.2rem"},children:"精准手术式操作，Tutorial 棱块在教这个"})]}),f.jsxs("div",{className:"card",style:{marginBottom:0,borderLeft:"4px solid #EF4444",padding:"0.8rem 1rem"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",marginBottom:"0.4rem"},children:[f.jsx("span",{style:{fontSize:"1rem"},children:"⚡"}),f.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"#EF4444"},children:"高级"})]}),f.jsx("p",{style:{fontSize:"0.78rem",fontWeight:600,marginBottom:"0.3rem"},children:"交换子"}),f.jsx("p",{style:{fontSize:"0.72rem",color:"var(--ink2)",lineHeight:1.5,marginBottom:0},children:"[X,Y] = X·Y·X'·Y'：3-循环"}),f.jsx("p",{style:{fontSize:"0.68rem",color:"var(--muted)",lineHeight:1.4,marginTop:"0.2rem"},children:"3-循环（3角块+3棱块），不破坏其他，后续探索"})]})]})]}),r==="solve"&&f.jsxs("div",{style:{marginBottom:"1rem",padding:"1rem 1.2rem",borderRadius:"12px",background:"linear-gradient(135deg, #FEF3C7 0%, #FEE2E2 100%)",border:"2px solid #F59E0B"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[f.jsx("span",{style:{fontSize:"1.2rem"},children:"🎯"}),f.jsx("span",{style:{fontSize:"0.9rem",fontWeight:700},children:"准备好了吗？开始引导复原"})]}),f.jsxs("p",{style:{fontSize:"0.78rem",color:"var(--ink2)",marginBottom:"0.8rem",lineHeight:1.5},children:["白色十字已就位，你将亲手用逆序撤销复原角块、用共轭变换复原棱块。",f.jsx("br",{}),"完整路线：底面十字 → 角块 → 中层棱块 → 顶面（后续扩展）"]}),f.jsxs("div",{style:{fontSize:"0.72rem",color:"var(--ink2)",marginBottom:"0.8rem",lineHeight:1.6},children:[f.jsx("div",{style:{marginBottom:"0.15rem"},children:"✅ 白色十字（直觉操作）"}),f.jsx("div",{style:{marginBottom:"0.15rem"},children:"✅ 白色角块 — 逆序列法则（R' D' R D）"}),f.jsx("div",{style:{marginBottom:"0.15rem"},children:"✅ 中层棱块 — 共轭变换（U R U' R' U' F' U F）"}),f.jsx("div",{style:{marginBottom:"0.15rem"},children:"✅ 黄色十字 — 交换子（F R U R' U' F'）"}),f.jsx("div",{style:{marginBottom:"0.15rem"},children:"✅ 黄棱归位 — 置换群（R U' R U R U R U' R' U' R2）"}),f.jsx("div",{style:{marginBottom:"0.15rem"},children:"✅ 黄角归位 — 交换子（U R U' L' U R' U' L）"}),f.jsx("div",{style:{color:"var(--ink2)"},children:"✅ 翻黄角 — Sune（R U R' U R U2 R'）"})]}),f.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.9rem",width:"100%",padding:"0.7rem",fontWeight:700},onClick:()=>e("/tutorial"),children:"🚀 开始交互式复原引导"})]}),f.jsxs("div",{className:"analogy-note",children:[f.jsx("span",{style:{fontWeight:600,marginRight:"0.3rem"},children:"比喻理解"}),f.jsx("span",{children:t.analogy})]}),r==="compose"&&f.jsxs("div",{className:"card",style:{marginTop:"1rem",borderLeft:"4px solid var(--accent)"},children:[f.jsx("h3",{style:{fontSize:"0.85rem",fontWeight:700,marginBottom:"0.6rem"},children:"💡 自测一下"}),f.jsx("p",{style:{fontSize:"0.82rem",marginBottom:"0.6rem"},children:"如果先执行 R 再执行 F，对应的矩阵乘积是："}),f.jsx(p0,{options:[{label:"A. R × F",correct:!0},{label:"B. F × R",correct:!1},{label:"C. R + F",correct:!1},{label:"D. R × F = F × R",correct:!1}],explanation:"先 R 后 F = R × F。矩阵乘法不满足交换律，R × F ≠ F × R。操作顺序决定矩阵乘积的顺序。"})]}),r==="inverse"&&f.jsxs("div",{className:"card",style:{marginTop:"1rem",borderLeft:"4px solid var(--accent)"},children:[f.jsx("h3",{style:{fontSize:"0.85rem",fontWeight:700,marginBottom:"0.6rem"},children:"💡 自测一下"}),f.jsx("p",{style:{fontSize:"0.82rem",marginBottom:"0.6rem"},children:"已知操作序列为 R → U → F，正确的逆序撤销序列是："}),f.jsx(p0,{options:[{label:"A. R' → U' → F'",correct:!1},{label:"B. F' → U' → R'",correct:!0},{label:"C. R → U → F",correct:!1},{label:"D. F → U → R",correct:!1}],explanation:"逆序法则：(R·U·F)⁻¹ = F⁻¹·U⁻¹·R⁻¹。后做的先撤销——最后一步F最先撤销，第一步R最后撤销。就像先穿鞋后穿袜，脱的时候先脱鞋再脱袜。"})]})]}),f.jsxs("div",{children:[r==="compose"?f.jsxs(f.Fragment,{children:[f.jsxs("div",{style:{fontSize:"0.73rem",color:"var(--ink2)",marginBottom:"0.5rem",display:"flex",gap:"0.8rem",justifyContent:"center",background:"var(--bg2)",borderRadius:"6px",padding:"0.3rem 0.6rem"},children:[f.jsxs("span",{children:["🟥 ",f.jsx("strong",{children:"R"}),"=右面"]}),f.jsxs("span",{children:["🟩 ",f.jsx("strong",{children:"U"}),"=上面"]}),f.jsxs("span",{children:["🟦 ",f.jsx("strong",{children:"F"}),"=前面"]}),f.jsx("span",{style:{color:"var(--muted)"},children:"|"}),f.jsxs("span",{children:["带 ",f.jsx("strong",{children:"'"})," = 逆时针"]})]}),f.jsxs("div",{style:{display:"flex",gap:"0.6rem",marginBottom:"0.6rem"},children:[f.jsxs("div",{style:{flex:1,textAlign:"center",border:"1px solid var(--rule)",borderRadius:"var(--radius)",overflow:"hidden"},children:[f.jsx("div",{style:{height:"22px",lineHeight:"22px",fontSize:"11px",fontWeight:700,color:"#fff",background:"var(--accent)"},children:"先①后②"}),f.jsx("div",{style:{height:"240px"},children:f.jsx(cs,{ref:o,disableStore:!0})})]}),f.jsxs("div",{style:{flex:1,textAlign:"center",border:"1px solid var(--rule)",borderRadius:"var(--radius)",overflow:"hidden"},children:[f.jsx("div",{style:{height:"22px",lineHeight:"22px",fontSize:"11px",fontWeight:700,color:"#fff",background:"var(--orange)"},children:"先②后①"}),f.jsx("div",{style:{height:"240px"},children:f.jsx(cs,{ref:l,disableStore:!0})})]})]})]}):f.jsx(f.Fragment,{children:r==="solve"?f.jsxs(f.Fragment,{children:[f.jsxs("div",{style:{fontSize:"0.73rem",color:"var(--ink2)",marginBottom:"0.5rem",display:"flex",gap:"0.8rem",justifyContent:"center",background:"var(--bg2)",borderRadius:"6px",padding:"0.3rem 0.6rem"},children:[f.jsxs("span",{children:["🟥 ",f.jsx("strong",{children:"R"}),"=右面"]}),f.jsxs("span",{children:["🟩 ",f.jsx("strong",{children:"U"}),"=上面"]}),f.jsxs("span",{children:["🟦 ",f.jsx("strong",{children:"F"}),"=前面"]}),f.jsx("span",{style:{color:"var(--muted)"},children:"|"}),f.jsxs("span",{children:["带 ",f.jsx("strong",{children:"'"})," = 逆时针"]})]}),f.jsx("div",{style:{height:"320px",marginBottom:"0.8rem",borderRadius:"var(--radius)",overflow:"hidden",border:"1px solid var(--rule)"},children:f.jsx(cs,{ref:s},r)}),f.jsx(DR,{cubeRef:s})]}):f.jsxs(f.Fragment,{children:[["intro","matrix","inverse","invariant"].includes(r)&&f.jsxs("div",{style:{fontSize:"0.73rem",color:"var(--ink2)",marginBottom:"0.5rem",display:"flex",gap:"0.8rem",justifyContent:"center",background:"var(--bg2)",borderRadius:"6px",padding:"0.3rem 0.6rem"},children:[f.jsxs("span",{children:["🟥 ",f.jsx("strong",{children:"R"}),"=右面"]}),f.jsxs("span",{children:["🟩 ",f.jsx("strong",{children:"U"}),"=上面"]}),f.jsxs("span",{children:["🟦 ",f.jsx("strong",{children:"F"}),"=前面"]}),f.jsx("span",{style:{color:"var(--muted)"},children:"|"}),f.jsxs("span",{children:["带 ",f.jsx("strong",{children:"\\'"})," = 逆时针"]})]}),f.jsx("div",{style:{height:"420px",marginBottom:"0.6rem",borderRadius:"var(--radius)",overflow:"hidden",border:"1px solid var(--rule)"},children:f.jsx(cs,{ref:s},r)})]})}),r==="compose"&&f.jsx(HR,{leftCubeRef:o,rightCubeRef:l}),r==="compose"&&f.jsxs("div",{style:{marginTop:"0.8rem",padding:"0.6rem 0.8rem",borderRadius:"6px",background:"#EFF6FF",borderLeft:"3px solid #3B82F6",fontSize:"0.8rem",color:"var(--ink2)"},children:[f.jsx("strong",{children:"因果说明："}),"R 和 U 操作的顺序之所以影响结果，是因为旋转矩阵乘法不满足交换律。这在数学上等价于：两个旋转的合成结果取决于执行顺序——先绕 X 轴再绕 Y 轴，与先绕 Y 轴再绕 X 轴，得到不同的最终朝向。"]}),r==="inverse"&&f.jsx(jR,{cubeRef:s}),r==="invariant"&&f.jsx(VR,{cubeRef:s}),f.jsx("div",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.4rem",lineHeight:1.5},children:t.demoHint}),f.jsx("div",{style:{textAlign:"right"},children:f.jsx(an,{to:r==="solve"?"/tutorial":"/playground",state:r==="solve"?void 0:{},style:{fontSize:"0.82rem",color:"var(--accent)",textDecoration:"underline"},children:r==="solve"?"🎯 开始引导：复原第一个角块 →":"打开实操训练（含计时/撤销）→"})})]})]}),d0[r]&&f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--bg2)",borderRadius:"8px",borderLeft:`4px solid ${u0[r]}`},children:[f.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--muted)"},children:"本节要点"}),d0[r].map((m,g)=>f.jsx("span",{style:{fontSize:"0.78rem",color:"var(--ink2)",padding:"0.15rem 0.5rem",borderRadius:"4px",background:"#fff"},children:m},g))]}),f.jsxs("div",{className:"chapter-nav",children:[t.prev?f.jsxs(an,{to:`/chapter/${t.prev}`,className:"btn btn-outline",children:["← 上一节：",Wd[t.prev].title.split("=")[0].trim()]}):f.jsx("span",{}),t.next?f.jsxs(an,{to:`/chapter/${t.next}`,className:"btn btn-primary",children:["下一节：",Wd[t.next].title.split("=")[0].trim()," →"]}):f.jsx(an,{to:"/playground",state:{fromChapter:"solve"},className:"btn btn-primary",children:"去实操训练 →"})]})]})})})}const Xd={teach:{label:"教学模式",desc:'每步操作实时显示对应旋转矩阵，帮助理解"转动=矩阵变换"'},practice:{label:"练习模式",desc:"记录操作历史并提供提示，适合独立尝试复原"},challenge:{label:"挑战模式",desc:"隐藏一切提示和历史，纯靠记忆和推理复原"}};function WR(){var te;const r=H.useRef(null),e=mi(z=>z.history),s=(te=Li().state)==null?void 0:te.fromChapter,[o,l]=H.useState("teach"),[u,d]=H.useState(0),[h,m]=H.useState(!1),g=H.useRef(null),[v,y]=H.useState(!1),[E,M]=H.useState(!1),T=H.useRef(0),[S,_]=H.useState(!0),[U,D]=H.useState(null),P=H.useRef(!1),Y=H.useCallback(()=>{h||(m(!0),P.current||(d(0),P.current=!0),g.current=setInterval(()=>{d(z=>z+1)},1e3))},[h]),B=H.useCallback(()=>{m(!1),g.current&&(clearInterval(g.current),g.current=null)},[]),b=()=>{var z;(z=r.current)==null||z.scramble(20),M(!0),y(!1),P.current=!1,Y()},I=()=>{var z;(z=r.current)==null||z.reset(),M(!1),y(!1),B(),d(0),P.current=!1},L=z=>{var ae;const O=((ae={x:{1:"R",[-1]:"L"},y:{1:"U",[-1]:"D"},z:{1:"F",[-1]:"B"}}[z.axis])==null?void 0:ae[z.layer])??z.axis;return z.direction===1?O:O+"'"},C=()=>{var ae;const z=mi.getState();if(z.history.length===0)return;const Z=z.history[z.history.length-1],O=L({...Z,direction:Z.direction*-1});(ae=r.current)==null||ae.undoMove(O),z.undo()},V=()=>{const z=mi.getState();if(z.history.length===0){D('魔方已是还原状态，试试先点击"打乱"按钮。');return}const Z=z.history[z.history.length-1],O={...Z,direction:Z.direction*-1},ae=L(O);D(`提示：试试执行 ${ae}（撤销最后一步操作）。核心思路——后做的先撤销。`)},de=z=>{const Z=Math.floor(z/60),O=z%60;return`${String(Z).padStart(2,"0")}:${String(O).padStart(2,"0")}`},G={normal:{ArrowUp:"U",ArrowDown:"D",ArrowLeft:"L",ArrowRight:"R",KeyW:"F",KeyS:"B",KeyR:"R",KeyL:"L",KeyU:"U",KeyD:"D",KeyF:"F",KeyB:"B"},shift:{ArrowUp:"U'",ArrowDown:"D'",ArrowLeft:"L'",ArrowRight:"R'",KeyW:"F'",KeyS:"B'",KeyR:"R'",KeyL:"L'",KeyU:"U'",KeyD:"D'",KeyF:"F'",KeyB:"B'"}};H.useEffect(()=>{const z=Z=>{if(Z.ctrlKey&&Z.key==="z"){Z.preventDefault(),C();return}if(Z.key===" "){Z.preventDefault(),b();return}if(Z.key==="Escape"){I();return}const ae=(Z.shiftKey?G.shift:G.normal)[Z.code];ae&&r.current&&(Z.preventDefault(),r.current.executeMove(ae))};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[e.length]),H.useEffect(()=>{if(!E||e.length===0)return;if(e.length<=T.current){T.current=e.length;return}T.current=e.length;const{cubies:z}=mi.getState();Sn(),Pv(z)&&(y(!0),B())},[e,E,B]);const re=e.map(z=>{const Z={x:"R",y:"U",z:"F"},O=z.direction===1?"":"'";return`${Z[z.axis]||z.axis}${O}`}).join(" → ");return f.jsxs(f.Fragment,{children:[s&&f.jsxs("div",{style:{maxWidth:"860px",margin:"0 auto 1rem",padding:"0.6rem 1rem",borderRadius:"8px",background:"#FEF9C3",border:"1px solid #FDE047",fontSize:"0.8rem"},children:["📖 你从",f.jsxs("span",{style:{fontWeight:700},children:["第",s==="solve"?"6":s,"节"]}),"跳转过来，建议先把上方第二章～第五章过一遍：",s==="solve"?" 逆矩阵+抵消法 → ":" ",f.jsx(an,{to:"/chapter/compose",style:{fontWeight:600,textDecoration:"underline",color:"var(--accent)"},children:"第3章：矩阵乘法/交换律"})," | ",f.jsx(an,{to:"/chapter/inverse",style:{fontWeight:600,textDecoration:"underline",color:"var(--accent)"},children:"第4章：逆矩阵/逆序法则"})]}),f.jsx("div",{className:"section",children:f.jsxs("div",{className:"container",children:[f.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"},children:"虚拟魔方实操厅"}),f.jsx("div",{style:{display:"flex",gap:"0.4rem",marginBottom:"0.8rem",flexWrap:"wrap"},children:Object.keys(Xd).map(z=>f.jsx("button",{className:o===z?"btn btn-primary":"btn btn-outline",style:{fontSize:"0.8rem",padding:"0.4rem 0.8rem"},onClick:()=>l(z),children:Xd[z].label},z))}),f.jsx("p",{style:{fontSize:"0.82rem",color:"var(--ink2)",marginBottom:"1.2rem"},children:Xd[o].desc}),S&&f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.6rem",padding:"0.7rem 1rem",marginBottom:"1rem",background:"linear-gradient(135deg, #EFF6FF, #DBEAFE)",borderRadius:"8px",border:"1px solid #BFDBFE"},children:[f.jsx("span",{style:{fontSize:"1.1rem"},children:"👋"}),f.jsxs("div",{style:{flex:1,fontSize:"0.8rem",color:"var(--ink2)"},children:[f.jsx("strong",{children:"欢迎来到实操厅！"}),f.jsxs("div",{style:{marginTop:"0.3rem"},children:["① 点击「打乱」按钮随机打乱魔方 → ② 用",f.jsx("strong",{children:"左键"}),"点击魔方面 = 逆时针，",f.jsx("strong",{children:"右键"})," = 顺时针 → ③ 目标：让每面恢复同色。可随时「撤销」或「重置」。"]})]}),f.jsx("button",{onClick:()=>_(!1),style:{background:"none",border:"none",cursor:"pointer",fontSize:"1rem",color:"var(--muted)",padding:"0"},children:"✕"})]}),f.jsxs("div",{className:"two-col",children:[f.jsx("div",{style:{minHeight:"460px",display:"flex",flexDirection:"column"},children:f.jsx(cs,{ref:r})}),f.jsxs("div",{children:[f.jsxs("div",{style:{display:"flex",gap:"0.4rem",marginBottom:"1rem",flexWrap:"wrap"},children:[f.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem"},onClick:b,children:"打乱"}),f.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem"},onClick:I,children:"重置"}),f.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem",opacity:e.length===0?.4:1},onClick:C,disabled:e.length===0,children:"撤销"}),f.jsxs("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem"},onClick:h?B:Y,children:[h?de(u):"计时"," ",h?"||":""]}),o==="practice"&&f.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem",padding:"0.45rem 0.9rem"},onClick:V,children:"💡 提示"})]}),U&&f.jsx("div",{style:{padding:"0.5rem 0.8rem",marginBottom:"0.8rem",background:"#FEF3C7",borderRadius:"6px",fontSize:"0.8rem",color:"var(--ink2)",borderLeft:"3px solid #F59E0B"},children:U}),o!=="challenge"&&f.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[f.jsxs("h3",{style:{fontSize:"0.85rem",marginBottom:"0.5rem"},children:["操作历史 (",e.length," 步)"]}),e.length===0?f.jsx("p",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:'左键点击面 = 逆时针，右键点击面 = 顺时针，或点击"打乱"'}):f.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.78rem",color:"var(--accent)",maxHeight:"150px",overflow:"auto",lineHeight:1.6,wordBreak:"break-all"},children:re})]}),o==="teach"&&e.length>0&&f.jsxs("div",{className:"card",style:{marginBottom:"1rem",borderLeft:"4px solid #8B5CF6"},children:[f.jsx("h3",{style:{fontSize:"0.85rem",marginBottom:"0.5rem"},children:"矩阵解读"}),(()=>{var Ue;const z=e[e.length-1],O=((Ue={x:{1:"R",[-1]:"L"},y:{1:"U",[-1]:"D"},z:{1:"F",[-1]:"B"}}[z.axis])==null?void 0:Ue[z.layer])??z.axis.toUpperCase(),ae=z.direction===1?O:O+"'",k={R:[[1,0,0],[0,0,-1],[0,1,0]],L:[[1,0,0],[0,0,1],[0,-1,0]],U:[[0,0,-1],[0,1,0],[1,0,0]],D:[[0,0,1],[0,1,0],[-1,0,0]],F:[[0,1,0],[1,0,0],[0,0,1]],B:[[0,-1,0],[-1,0,0],[0,0,1]]}[O]||[[1,0,0],[0,1,0],[0,0,1]],se=ae.includes("'");return f.jsxs("div",{children:[f.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"0.5rem"},children:["最后一步 ",f.jsx("strong",{style:{fontFamily:"monospace"},children:ae}),se?"（逆时针）= 矩阵的逆":"（顺时针）"]}),f.jsxs("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",background:"#F5F3FF",padding:"0.5rem 0.8rem",borderRadius:"6px",marginBottom:"0.5rem"},children:[f.jsxs("div",{children:["[",k[0].map(Q=>(se?Q===-1?" 1":Q===1?"-1":" 0":(Q<0?" ":"  ")+Q).padStart(3)).join(","),"]"]}),f.jsxs("div",{children:["[",k[1].map(Q=>(se?Q===-1?" 1":Q===1?"-1":" 0":(Q<0?" ":"  ")+Q).padStart(3)).join(","),"]"]}),f.jsxs("div",{children:["[",k[2].map(Q=>(se?Q===-1?" 1":Q===1?"-1":" 0":(Q<0?" ":"  ")+Q).padStart(3)).join(","),"]"]})]}),f.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)"},children:se?"逆时针 = 顺时针矩阵的转置（正交矩阵性质：R⁻¹ = Rᵀ）":"这个矩阵将方块绕对应轴旋转 90°"})]})})()]}),o==="teach"&&f.jsx("div",{className:"analogy-note",children:f.jsx("span",{children:'教学模式：每步操作都会显示对应的旋转矩阵。配合第2节的内容理解"转动=矩阵变换"。'})}),o==="practice"&&f.jsx("div",{className:"analogy-note",children:f.jsx("span",{children:"练习模式：记录你的操作并提供💡提示。尝试独立复原，卡住时再求助。"})}),o==="challenge"&&f.jsx("div",{className:"analogy-note",style:{borderLeftColor:"var(--orange)"},children:f.jsx("span",{children:"挑战模式：不依赖操作历史，尝试凭记忆推导还原步骤"})})]})]}),f.jsxs("div",{style:{marginTop:"2rem",padding:"1rem 1.2rem",background:"var(--bg2)",borderRadius:"var(--radius)",fontSize:"0.83rem",color:"var(--ink2)",borderLeft:"3px solid var(--accent)"},children:[f.jsx("strong",{children:"交互说明："}),"鼠标左键点击面 = 逆时针  |  鼠标右键点击面 = 顺时针  |  空白处拖拽 = 旋转视角  |  滚轮 = 缩放",f.jsxs("div",{style:{marginTop:"0.5rem",borderTop:"1px dashed var(--rule)",paddingTop:"0.5rem"},children:[f.jsx("strong",{children:"键盘 — RLUDFB 国际标准记法"}),f.jsx("span",{style:{opacity:.5,marginLeft:"0.4rem",fontSize:"0.78rem"},children:"(R=Right L=Left U=Up D=Down F=Front B=Back)"}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.25rem 1.5rem",marginTop:"0.4rem"},children:[f.jsx("div",{children:"方向键 ↑↓←→ / RLUDFB"}),f.jsx("div",{children:"顺时针旋转"}),f.jsx("div",{children:"W / S"}),f.jsx("div",{children:"前面(F) / 后面(B)"}),f.jsx("div",{children:"Shift + 上述按键"}),f.jsx("div",{children:"逆时针旋转"}),f.jsx("div",{children:"Ctrl + Z"}),f.jsx("div",{children:"撤销"}),f.jsx("div",{children:"Space"}),f.jsx("div",{children:"打乱"}),f.jsx("div",{children:"Esc"}),f.jsx("div",{children:"重置"})]})]})]}),v&&f.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.45)"},children:f.jsxs("div",{style:{background:"#fff",borderRadius:"16px",padding:"2rem 2.5rem",textAlign:"center",maxWidth:"380px",width:"90%",boxShadow:"0 16px 48px rgba(0,0,0,0.2)"},children:[f.jsx("div",{style:{fontSize:"3rem",marginBottom:"0.5rem"},children:"🎉"}),f.jsx("h3",{style:{fontSize:"1.3rem",fontWeight:700,marginBottom:"0.4rem"},children:"还原成功！"}),f.jsxs("p",{style:{fontSize:"0.9rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["你使用了  ",e.length,"  步操作将魔方还原！",e.length<=22&&f.jsx("span",{style:{display:"block",marginTop:"0.3rem",fontWeight:600,color:"var(--accent)"},children:"🌟 步数 ≤ 22，非常高效！"}),e.length>22&&e.length<=30&&f.jsx("span",{style:{display:"block",marginTop:"0.3rem",fontWeight:600,color:"var(--green)"},children:"👍 不错！继续优化步数"})]}),f.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--muted)",marginBottom:"1.2rem"},children:["用时 ",de(u)]}),f.jsx("button",{className:"btn btn-primary",onClick:()=>y(!1),style:{width:"100%"},children:"继续挑战"})]})})]})})]})}const XR=[{id:"boundary",title:"类比与真实的边界",body:f.jsxs(f.Fragment,{children:[f.jsx("p",{children:"本站用线性代数做类比科普，帮助理解魔方变换的行为逻辑。但需要明确以下几点："}),f.jsxs("ul",{style:{paddingLeft:"1.2rem",marginTop:"0.5rem"},children:[f.jsxs("li",{children:["✅ 魔方操作确实对应矩阵运算中的一些性质：",f.jsx("strong",{children:"封闭性、结合律、单位元、逆元、非交换性"})]}),f.jsxs("li",{children:["❌ 魔方不是线性空间：",f.jsx("strong",{children:"没有向量加法、没有数乘运算"})]}),f.jsxs("li",{children:["🎯 魔方的严谨数学本质是",f.jsx("strong",{children:"置换群（鲁比克群）"}),"，其元素是贴纸位置的置换，而非欧几里得空间中的旋转"]})]}),f.jsx("p",{style:{marginTop:"0.5rem"},children:'本站的"向量""矩阵"等概念均用于类比解释，与严谨线性代数中的定义有所不同。为方便初学者建立直觉，我们用熟悉的线代语言搭建理解桥梁。'})]})},{id:"permutation",title:"置换群基础",body:f.jsxs(f.Fragment,{children:[f.jsxs("p",{children:["魔方的每个状态是一个",f.jsx("strong",{children:"置换"}),"——把每个贴纸从原位置移到了新位置。"]}),f.jsxs("ul",{style:{paddingLeft:"1.2rem",marginTop:"0.5rem"},children:[f.jsxs("li",{children:[f.jsx("strong",{children:"置换的循环："}),"如果把若干方块依次换位并形成一个闭合的圈，就叫做循环。比如三个角块轮换一圈，就是一个3-循环"]}),f.jsxs("li",{children:[f.jsx("strong",{children:"为什么不能单独交换两个块："}),'因为每次转动总是偶数次两两交换，就像你不可能通过"每步走两格"来只移动一格']}),f.jsxs("li",{children:[f.jsx("strong",{children:"角块朝向的约束："}),"所有角块的扭转角度之和必须是360°的倍数——这也是一个隐藏的规则"]})]})]})},{id:"deep",title:"深度数学结论",body:f.jsx(f.Fragment,{children:f.jsxs("ul",{style:{paddingLeft:"1.2rem"},children:[f.jsxs("li",{children:[f.jsx("strong",{children:"总状态数"}),"：魔方共有 43,252,003,274,489,856,000 种可能状态（约4.3×10¹⁹）。这个数字通过群论推导得出，不是枚举出来的。"]}),f.jsxs("li",{style:{marginTop:"0.5rem"},children:[f.jsx("strong",{children:"上帝之数 = 20"}),"：任何打乱的魔方都可以在",f.jsx("strong",{children:"20步以内"}),"复原。2010年通过计算机穷举搜索证实。"]}),f.jsxs("li",{style:{marginTop:"0.5rem"},children:[f.jsx("strong",{children:"子群与共轭类"}),"：魔方群具有丰富的子群结构，CFOP等速拧方法本质上就是在不同子群之间切换。"]})]})})},{id:"resources",title:"拓展资源",body:f.jsx(f.Fragment,{children:f.jsxs("ul",{style:{paddingLeft:"1.2rem"},children:[f.jsxs("li",{children:["📖 ",f.jsx("em",{children:"群论入门"})," — J.S. Milne（免费在线教材，英文）"]}),f.jsxs("li",{children:["🎥 B站搜索 ",f.jsx("em",{children:'"魔方 置换群"'})," — 多位UP主有通俗讲解"]}),f.jsxs("li",{children:["📊 ",f.jsx("em",{children:"魔方数学"}),` — Wikipedia "Rubik's Cube group"`]}),f.jsxs("li",{children:["🎬 YouTube ",f.jsx("em",{children:`"How to Solve a Rubik's Cube with Group Theory"`})," — 适合初学者的群论入门视频"]})]})})}];function YR(){const[r,e]=H.useState(null);return f.jsx(f.Fragment,{children:f.jsx("div",{className:"section",children:f.jsxs("div",{className:"container",style:{maxWidth:"860px",margin:"0 auto"},children:[f.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"1.5rem"},children:"📚 进阶数学档案馆"}),f.jsx("div",{className:"accordion",children:XR.map(t=>f.jsxs("div",{children:[f.jsxs("button",{className:`accordion-header ${r===t.id?"open":""}`,onClick:()=>e(r===t.id?null:t.id),children:[t.title,f.jsx("span",{className:`accordion-arrow ${r===t.id?"open":""}`,children:"▼"})]}),f.jsx("div",{className:`accordion-body ${r===t.id?"open":""}`,children:t.body})]},t.id))}),f.jsx("div",{style:{marginTop:"2rem"},children:f.jsx(an,{to:"/",className:"btn btn-outline",children:"← 返回首页"})})]})})})}const m0=[{axis:"y",layer:-1,direction:-1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:-1,direction:1},{axis:"x",layer:1,direction:1}],ec=[{axis:"x",layer:1,direction:-1},{axis:"y",layer:-1,direction:-1},{axis:"x",layer:1,direction:1},{axis:"y",layer:-1,direction:1}],$R=[{notation:"R'",text:"打开右面空间，准备接收角块"},{notation:"D'",text:"移动底层，将目标位置对准角块"},{notation:"R",text:"角块进入正确位置"},{notation:"D",text:"恢复底层，角块归位完成"}],g0=[{axis:"z",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"z",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1}],tc=[{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"z",layer:1,direction:-1},{axis:"y",layer:1,direction:1},{axis:"z",layer:1,direction:1}],qR=[{notation:"U",text:"将顶层目标棱块移到右前准备位置"},{notation:"R",text:"打开右侧面，为棱块创造中层入口"},{notation:"U'",text:"沿顶层将棱块推入右侧开口"},{notation:"R'",text:"关闭右侧面，棱块被锁定到中层"},{notation:"U'",text:"恢复顶层位置"},{notation:"F'",text:"打开前面，为朝向调整做准备"},{notation:"U",text:"调整顶层，棱块朝向修正"},{notation:"F",text:"关闭前面，棱块完全归位"}],v0=[{axis:"z",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:-1}],x0=[{axis:"z",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"z",layer:1,direction:-1}],nc=[{notation:"F",text:'F：前面顺时针 — 交换子开启，"推"到前面'},{notation:"R",text:"R：右面顺时针 — 核心操作，翻转顶层棱块朝向"},{notation:"U",text:"U：上面顺时针 — 移动目标棱块位置"},{notation:"R'",text:"R'：右面逆时针 — 开始搬回来"},{notation:"U'",text:"U'：上面逆时针 — 继续搬回来"},{notation:"F'",text:"F'：交换子完成 — 观察顶层黄色棱块朝向"}],_0=[{axis:"x",layer:1,direction:-1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:-1}],y0=[{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:1,direction:1},{axis:"x",layer:1,direction:1}],Yd=[{notation:"R",text:"R：启动棱块置换序列"},{notation:"U'",text:"U'：位置准备"},{notation:"R",text:"R：继续置换节奏"},{notation:"U",text:"U：循环推进"},{notation:"R",text:"R：累积置换效应"},{notation:"U",text:"U：持续循环"},{notation:"R",text:"R：关键中间位置"},{notation:"U'",text:"U'：反向轨道回位"},{notation:"R'",text:"R'：开始闭合，矩阵转置"},{notation:"U'",text:"U'：配合闭合节奏"},{notation:"R2",text:"R2：180°旋转 — 三个黄色棱块顺时针轮换"}],S0=[{axis:"x",layer:-1,direction:-1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:-1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1}],E0=[{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:-1,direction:-1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:-1,direction:1}],$d=[{notation:"U",text:'U：目标角块移入"待处理位"'},{notation:"R",text:"R：核心操作启动"},{notation:"U'",text:"U'：位置调整"},{notation:"L'",text:"L'：换到另一个角块"},{notation:"U",text:"U：返回交换路径"},{notation:"R'",text:"R'：闭合，第一个角块抵达"},{notation:"U'",text:"U'：为第二个角块腾出空间"},{notation:"L",text:"L：第二个角块滑入 — 三个角块互换位置"}],M0=[{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:-1},{axis:"x",layer:1,direction:-1}],T0=[{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:-1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"y",layer:1,direction:1},{axis:"x",layer:1,direction:-1}],qd=[{notation:"R",text:'R："打开右面"，为后续操作准备空间'},{notation:"U",text:"U：将目标角块移入操作区"},{notation:"R'",text:`R'："关上右面"（逆变换），不是简单撤销`},{notation:"U",text:"U：进一步调整角块朝向"},{notation:"R",text:"R：再次打开右面，准备第二轮"},{notation:"U2",text:"U2：180°旋转 = 两个连续90°，不是矩阵平方"},{notation:"R'",text:"R'：最终关闭，完成一个子角翻正"}];function hi(r){var s;const t=((s={x:{1:"R","-1":"L"},y:{1:"U","-1":"D"},z:{1:"F","-1":"B"}}[r.axis])==null?void 0:s[String(r.layer)])??r.axis.toUpperCase();return r.direction===1?t:t+"'"}function KR(r){return r==="cross"?{step:1,total:7,name:"白色十字"}:r==="corner-intro"||r==="corner-guided"||r==="corner-practice"||r==="corner-done"?{step:2,total:7,name:"白色角块"}:r==="edge-intro"||r==="edge-guided"||r==="edge-practice"||r==="edge-done"?{step:3,total:7,name:"中层棱块"}:r==="topcross-intro"||r==="topcross-guided"||r==="topcross-practice"?{step:4,total:7,name:"黄色十字"}:r==="edgeloc-intro"||r==="edgeloc-guided"||r==="edgeloc-practice"?{step:5,total:7,name:"棱块归位"}:r==="cornerloc-intro"||r==="cornerloc-guided"||r==="cornerloc-practice"?{step:6,total:7,name:"角块归位"}:r==="orient-intro"||r==="orient-guided"||r==="orient-practice"?{step:7,total:7,name:"翻黄角"}:{step:7,total:7,name:"全部完成"}}function ZR(r){return r==="corner-intro"||r==="corner-guided"||r==="corner-practice"||r==="corner-done"}function QR(r){return r==="edge-intro"||r==="edge-guided"||r==="edge-practice"}function JR(r){return r==="topcross-intro"||r==="topcross-guided"||r==="topcross-practice"}function eC(r){return r==="edgeloc-intro"||r==="edgeloc-guided"||r==="edgeloc-practice"}function tC(r){return r==="cornerloc-intro"||r==="cornerloc-guided"||r==="cornerloc-practice"}function nC(r){return r==="orient-intro"||r==="orient-guided"||r==="orient-practice"}function iC(){const r=H.useRef(null),[e,t]=H.useState("cross"),[s,o]=H.useState(-1),[l,u]=H.useState(!1),[d,h]=H.useState(!1),[m,g]=H.useState(!1),[v,y]=H.useState([]),[E,M]=H.useState(!1),[T,S]=H.useState(0),[_,U]=H.useState(0),D=mi(b=>b.history),P=mi(b=>b.cubies),Y=mi(b=>b.reset);H.useEffect(()=>{if(l||!r.current)return;const b=setTimeout(()=>{var I;(I=r.current)==null||I.reset(),u(!0)},600);return()=>clearTimeout(b)},[l]),H.useEffect(()=>{let b=null;if(ZR(e)&&e!=="corner-done"?b=m0:QR(e)?b=g0:JR(e)?b=v0:eC(e)?b=_0:tC(e)?b=S0:nC(e)&&(b=M0),!b||!r.current)return;Y(),r.current.reset(),y([]),h(!1),M(!1),o(-1);let I=400;for(const L of b)setTimeout(()=>{var C;return(C=r.current)==null?void 0:C.executeMove(hi(L))},I),I+=350;e==="corner-guided"||e==="edge-guided"||e==="topcross-guided"||e==="edgeloc-guided"||e==="cornerloc-guided"||e==="orient-guided"?setTimeout(()=>o(0),I+300):(e==="corner-practice"||e==="edge-practice"||e==="topcross-practice"||e==="edgeloc-practice"||e==="cornerloc-practice"||e==="orient-practice")&&setTimeout(()=>M(!0),I)},[e,Y,T]),H.useEffect(()=>{let b=null;if(e==="corner-guided"?b=ec:e==="edge-guided"?b=tc:e==="topcross-guided"?b=x0:e==="edgeloc-guided"?b=y0:e==="cornerloc-guided"?b=E0:e==="orient-guided"&&(b=T0),!b||s<0||s>=b.length)return;const I=setTimeout(()=>{var L;(L=r.current)==null||L.executeMove(hi(b[s]))},1e3);return()=>clearTimeout(I)},[s,e]),H.useEffect(()=>{if(!E||d||e!=="corner-practice"&&e!=="edge-practice"&&e!=="topcross-practice"&&e!=="edgeloc-practice"&&e!=="cornerloc-practice"&&e!=="orient-practice")return;const I=(e==="corner-practice"?m0:e==="edge-practice"?g0:e==="topcross-practice"?v0:e==="edgeloc-practice"?_0:e==="cornerloc-practice"?S0:M0).length,L=D.slice(I);if(y(L.map(hi)),L.length>0&&Pv(P)){h(!0),g(!0);const C={"corner-practice":2,"edge-practice":3,"topcross-practice":4,"edgeloc-practice":5,"cornerloc-practice":6,"orient-practice":7};C[e]&&U(C[e]),setTimeout(()=>t(e==="corner-practice"?"corner-done":e==="edge-practice"?"edge-done":e==="topcross-practice"?"edgeloc-intro":e==="edgeloc-practice"?"cornerloc-intro":e==="cornerloc-practice"?"orient-intro":"done"),600)}},[P,D,e,d,E]);const B=KR(e);return f.jsxs("div",{style:{background:"var(--bg)",paddingBottom:"2rem"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.6rem 1.5rem",borderBottom:"1px solid var(--rule)",background:"#fff"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[f.jsx(an,{to:"/chapter/solve",style:{fontSize:"0.85rem",color:"var(--ink2)",textDecoration:"none"},children:"← 返回第6节"}),f.jsx("span",{style:{fontWeight:700},children:"复原引导"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[[1,2,3,4,5,6,7].map(b=>{const I=b===B.step,L=b<B.step;return f.jsx("div",{title:["白色十字","白色角块","中层棱块","黄色十字","棱块归位","角块归位","翻黄角"][b-1],style:{width:I?"12px":"10px",height:I?"12px":"10px",borderRadius:"50%",background:L?"#10B981":I?"var(--accent)":"var(--rule)",border:I?"2px solid var(--accent)":L?"2px solid #10B981":"2px solid var(--rule)",transition:"all 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center"},children:L&&f.jsx("span",{style:{fontSize:"7px",color:"#fff",fontWeight:700},children:"✓"})},b)}),f.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--muted)",marginLeft:"0.3rem"},children:["步骤 ",B.step,"/",B.total]})]})]}),f.jsx("div",{style:{display:"flex",gap:"0.3rem",justifyContent:"center",padding:"0.6rem 1.5rem",flexWrap:"wrap",borderBottom:"1px solid var(--rule)",background:"#FAFBFC"},children:[{n:1,label:"十字",phase:"cross"},{n:2,label:"角块",phase:"corner-intro"},{n:3,label:"棱块",phase:"edge-intro"},{n:4,label:"黄十字",phase:"topcross-intro"},{n:5,label:"棱归位",phase:"edgeloc-intro"},{n:6,label:"角归位",phase:"cornerloc-intro"},{n:7,label:"翻黄角",phase:"orient-intro"}].map(({n:b,label:I,phase:L})=>{const C=B.step===b,V=b<=_;return f.jsxs("button",{onClick:()=>{t(L),g(!1)},title:`步骤${b}：${["白色十字","白色角块","中层棱块","黄色十字","棱块归位","角块归位","翻黄角"][b-1]}`,style:{padding:"0.3rem 0.7rem",borderRadius:"8px",fontSize:"0.72rem",fontWeight:C?700:500,cursor:"pointer",border:"none",background:C?"var(--accent)":V?"#DCFCE7":"#fff",color:C?"#fff":V?"#16A34A":"var(--ink2)",boxShadow:C?"0 2px 8px rgba(37,99,235,0.25)":V?"inset 0 0 0 1px #BBF7D0":"inset 0 0 0 1px #E2E8F0",transition:"all 0.2s"},onMouseEnter:de=>{C||(de.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.08)")},onMouseLeave:de=>{C||(de.currentTarget.style.boxShadow=V?"inset 0 0 0 1px #BBF7D0":"inset 0 0 0 1px #E2E8F0")},children:[V?"✓":b,". ",I]},b)})}),f.jsxs("div",{style:{display:"flex",gap:"1.5rem",padding:"1.5rem",maxWidth:"1100px",margin:"0 auto",alignItems:"flex-start"},children:[f.jsx("div",{style:{flex:1,minWidth:0},children:f.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[f.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700,marginBottom:"0.3rem"},children:B.name}),e!=="cross"&&e!=="done"&&f.jsx("div",{style:{display:"flex",gap:"0.4rem",marginBottom:"1rem"},children:[{k:"intro",label:"介绍"},{k:"guided",label:"引导"},{k:"practice",label:"实操"},{k:"done",label:"完成"}].map(b=>{const I=e===`corner-${b.k}`||e===`edge-${b.k}`||e===`topcross-${b.k}`||e===`edgeloc-${b.k}`||e===`cornerloc-${b.k}`||e===`orient-${b.k}`;return f.jsx("span",{style:{padding:"0.15rem 0.6rem",borderRadius:"999px",fontSize:"0.7rem",fontWeight:I?700:400,background:I?"var(--accent-l)":"var(--bg2)",color:I?"var(--accent-d)":"var(--muted)"},children:b.label},b.k)})}),e==="cross"&&f.jsxs(f.Fragment,{children:[f.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["复原魔方的第一步是完成",f.jsx("strong",{children:"白色十字"}),"—— 让白色中心块四周的四个白色棱块全部归位。"]}),f.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["这一步",f.jsx("strong",{children:"不需要记公式"}),"——你只要通过直觉把白色棱块逐个移到正确位置即可。 右侧魔方已处在白色十字完成的状态。"]}),f.jsxs("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontSize:"0.8rem",color:"var(--accent-d)"},children:[f.jsx("strong",{children:"概念对应"}),'：十字等同于在三维空间中确定了坐标轴的"基准方向"—— 白色=底、黄色=顶、红色=前、橙色=后、蓝色=右、绿色=左。 这六个方向构成了魔方的',f.jsx("strong",{children:"方向指数坐标系"}),"（第1节内容）。"]}),f.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>{U(1),t("corner-intro")},children:"下一步：复原角块 →"})]}),e==="corner-intro"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"白色十字已完成。接下来只剩最后一个角块需要归位。"}),f.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["我们将使用下面的操作——它是",f.jsx("strong",{children:"逆序列法则"}),"的直接应用："]}),f.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontFamily:"monospace",fontSize:"1rem",fontWeight:700,textAlign:"center",color:"var(--accent-d)"},children:ec.map(hi).join(" → ")}),f.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"1rem"},children:["注意看初始状态和最终状态——这四步操作打乱时用了什么，解决时就按",f.jsx("strong",{children:"相反顺序"}),"逆向执行， 这就是逆序列法则：(A·B·C·D)⁻¹ = D⁻¹·C⁻¹·B⁻¹·A⁻¹，后做的先撤销。"]}),f.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>t("corner-guided"),children:"开始引导 →"})]}),e==="corner-guided"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"1rem"},children:"魔方已回到初始状态。点击「下一步」观看每一步的效果："}),$R.map((b,I)=>f.jsxs("div",{style:{padding:"0.5rem 0.8rem",marginBottom:"0.5rem",borderRadius:"6px",background:I===s?"var(--accent-l)":"var(--bg2)",borderLeft:"3px solid "+(I===s?"var(--accent)":"transparent")},children:[f.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600},children:b.notation}),f.jsx("span",{style:{fontSize:"0.78rem",color:"var(--ink2)",marginLeft:"0.6rem"},children:b.text})]},I)),s>=ec.length?f.jsxs("div",{style:{marginTop:"1rem"},children:[f.jsx("p",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--green)",marginBottom:"0.8rem"},children:"✅ 角块已归位！接下来你亲手试试。"}),f.jsx("button",{className:"btn btn-primary",onClick:()=>t("corner-practice"),children:"🎯 进入实操"})]}):f.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[f.jsx("button",{className:"btn btn-outline",onClick:()=>o(b=>b+1),children:s===-1?"开始演示":"下一步 →"}),f.jsx("button",{className:"btn btn-outline",onClick:()=>t("corner-practice"),children:"跳过引导"})]})]}),e==="corner-practice"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"魔方已回到初始状态。请在右侧魔方上执行以下操作："}),f.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontFamily:"monospace",fontSize:"1rem",fontWeight:700,textAlign:"center",color:"var(--accent-d)"},children:ec.map(hi).join(" → ")}),f.jsxs("div",{style:{marginBottom:"1rem"},children:[f.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.4rem"},children:"你已执行："}),f.jsx("div",{style:{padding:"0.4rem 0.8rem",borderRadius:"6px",background:"var(--bg2)",fontFamily:"monospace",fontSize:"0.85rem",color:v.length>0?"var(--accent)":"var(--muted)"},children:v.length>0?v.join(" → "):"等待操作…"})]}),f.jsx("button",{className:"btn btn-outline",style:{width:"100%"},onClick:()=>S(b=>b+1),children:"重置重试"})]}),e==="corner-done"&&f.jsxs(f.Fragment,{children:[m&&f.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem"},children:[f.jsx("span",{style:{fontSize:"3rem"},children:"⭐"}),f.jsx("p",{style:{fontSize:"1rem",fontWeight:700,color:"var(--accent)",marginTop:"0.5rem"},children:"角块归位完成！"})]}),f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"你刚用逆序列法则（R' D' R D）成功归位了一个角块。 这正好对应第4节的核心思想——把打乱步骤反过来执行，后做的先撤销。"}),f.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"1rem"},children:["接下来难度升级：复原中层棱块，这次会用到",f.jsx("strong",{children:"组合操作"}),"—— 前后两段各使用一次共轭变换（P·A·P'）：先腾出空间，再塞入棱块。"]}),f.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>{U(2),t("edge-intro")},children:"下一步：复原中层棱块 →"})]}),e==="edge-intro"&&f.jsxs(f.Fragment,{children:[f.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["白色面和底层角块已全部完成。 现在要处理",f.jsx("strong",{children:"中层棱块"}),"——位于魔方中层（第二层）的四个棱块。"]}),f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"右侧魔方已打乱：白色底完好，但有一个中层棱块被移到了顶层。 我们用下面的公式把它送回正确位置："}),f.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontFamily:"monospace",fontSize:"1rem",fontWeight:700,textAlign:"center",color:"var(--accent-d)"},children:tc.map(hi).join(" → ")}),f.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--ink2)",marginBottom:"1rem"},children:["这是一个",f.jsx("strong",{children:"组合操作"}),`：前后两段各使用一次共轭变换（P·A·P'）。 前半段 U R U' R' 把棱块从顶层移到右层（P=U, A=R, P'=U'·R'）， 后半段 U' F' U F 把棱块从右层推入中层（P=U', A=F', P'=U·F）。 结构是"打开→放入→关好"。`]}),f.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>t("edge-guided"),children:"开始引导 →"})]}),e==="edge-guided"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.6rem"},children:"点击「下一步」观看每一步的效果："}),qR.map((b,I)=>f.jsxs("div",{style:{padding:"0.4rem 0.6rem",marginBottom:"0.35rem",borderRadius:"6px",background:I===s?"var(--accent-l)":"var(--bg2)",borderLeft:"3px solid "+(I===s?"var(--accent)":"transparent")},children:[f.jsx("span",{style:{fontSize:"0.82rem",fontWeight:600},children:b.notation}),f.jsx("span",{style:{fontSize:"0.75rem",color:"var(--ink2)",marginLeft:"0.5rem"},children:b.text})]},I)),s>=tc.length?f.jsxs("div",{style:{marginTop:"1rem"},children:[f.jsx("p",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--green)",marginBottom:"0.8rem"},children:"✅ 棱块已归位！现在你亲手试试。"}),f.jsx("button",{className:"btn btn-primary",onClick:()=>t("edge-practice"),children:"🎯 进入实操"})]}):f.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[f.jsx("button",{className:"btn btn-outline",onClick:()=>o(b=>b+1),children:s===-1?"开始演示":"下一步 →"}),f.jsx("button",{className:"btn btn-outline",onClick:()=>t("edge-practice"),children:"跳过引导"})]})]}),e==="edge-practice"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"魔方已回到初始状态。请在右侧魔方上执行以下操作："}),f.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"var(--accent-l)",borderRadius:"8px",fontFamily:"monospace",fontSize:"0.9rem",fontWeight:700,textAlign:"center",color:"var(--accent-d)"},children:tc.map(hi).join(" → ")}),f.jsxs("div",{style:{marginBottom:"1rem"},children:[f.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.4rem"},children:"你已执行："}),f.jsx("div",{style:{padding:"0.4rem 0.8rem",borderRadius:"6px",background:"var(--bg2)",fontFamily:"monospace",fontSize:"0.82rem",color:v.length>0?"var(--accent)":"var(--muted)"},children:v.length>0?v.join(" → "):"等待操作…"})]}),f.jsx("button",{className:"btn btn-outline",style:{width:"100%"},onClick:()=>S(b=>b+1),children:"重置重试"})]}),e==="topcross-intro"&&f.jsxs(f.Fragment,{children:[f.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:['现在底层和中层已完成，只剩黄色面（顶层）。 黄色十字是一次"翻转"操作的核心：用',f.jsx("strong",{children:"交换子 F R U R' U' F'"})," 翻转顶层棱块朝向。"]}),f.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"#FEF3C7",borderRadius:"8px",fontFamily:"monospace",fontSize:"0.85rem",textAlign:"center",color:"#B45309"},children:"F R U R' U' F'"}),f.jsxs("ul",{style:{fontSize:"0.82rem",color:"var(--ink)",paddingLeft:"1.2rem",marginBottom:"1rem"},children:[f.jsxs("li",{style:{marginBottom:"0.3rem"},children:["这是",f.jsx("strong",{children:"交换子"}),"的经典结构：F·R·U·R'·U'·F'"]}),f.jsx("li",{style:{marginBottom:"0.3rem"},children:"前半段 F·R·U·R'·U' = 打开操作空间"}),f.jsx("li",{style:{marginBottom:"0.3rem"},children:"后半段 F' = 关闭回来，只改变顶层棱块朝向"}),f.jsxs("li",{children:["交换子的核心思想：",f.jsx("strong",{children:"打开→操作→关上"})]})]}),f.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[f.jsx("button",{className:"btn btn-primary",onClick:()=>t("topcross-guided"),children:"看引导演示"}),f.jsx("button",{className:"btn btn-outline",onClick:()=>t("topcross-practice"),children:"直接实操"})]})]}),e==="topcross-guided"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"观察黄色十字交换子的逐步动画："}),f.jsx("div",{style:{display:"flex",gap:"0.25rem",marginBottom:"0.8rem",flexWrap:"wrap"},children:nc.map((b,I)=>f.jsx("div",{style:{padding:"0.2rem 0.5rem",borderRadius:"6px",fontSize:"0.72rem",background:I===s?"#FEF3C7":s>I?"#DCFCE7":"var(--bg2)",borderLeft:"3px solid "+(I===s?"#F59E0B":"transparent"),transition:"all 0.3s ease"},children:f.jsx("strong",{style:{fontFamily:"monospace"},children:b.notation})},I))}),nc.map((b,I)=>f.jsxs("p",{style:{fontSize:"0.78rem",color:I===s?"var(--ink)":"var(--muted)",fontWeight:I===s?600:400,marginBottom:I<nc.length-1?"0.2rem":"0.8rem"},children:[I+1,". ",b.text]},I)),s>=nc.length-1?f.jsxs(f.Fragment,{children:[f.jsxs("div",{style:{padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.82rem",marginBottom:"0.6rem"},children:[f.jsx("span",{style:{fontWeight:700,color:"#16A34A"},children:"交换子完成"}),f.jsx("span",{style:{color:"var(--ink2)",marginLeft:"0.4rem"},children:"黄色十字出现。这就是 F R U R' U' F' 的威力。"})]}),f.jsx("button",{className:"btn btn-primary",onClick:()=>t("topcross-practice"),children:"亲自试试 →"})]}):f.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[f.jsx("button",{className:"btn btn-outline",onClick:()=>o(b=>b+1),children:s===-1?"开始演示":"下一步 →"}),f.jsx("button",{className:"btn btn-outline",onClick:()=>t("topcross-practice"),children:"跳过引导"})]})]}),e==="topcross-practice"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"魔方已回到初始状态。请执行以下交换子："}),f.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"#FEF3C7",borderRadius:"8px",fontFamily:"monospace",fontSize:"0.9rem",fontWeight:700,textAlign:"center",color:"#B45309"},children:x0.map(hi).join(" → ")}),f.jsxs("div",{style:{marginBottom:"1rem"},children:[f.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.4rem"},children:"你已执行："}),f.jsx("div",{style:{padding:"0.4rem 0.8rem",borderRadius:"6px",background:"var(--bg2)",fontFamily:"monospace",fontSize:"0.82rem",color:v.length>0?"var(--accent)":"var(--muted)"},children:v.length>0?v.join(" → "):"等待操作…"})]}),f.jsx("button",{className:"btn btn-outline",style:{width:"100%"},onClick:()=>S(b=>b+1),children:"重置重试"})]}),e==="edgeloc-intro"&&f.jsxs(f.Fragment,{children:[f.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["黄色十字完成后，现在把黄色棱块移到正确位置。 这是一个",f.jsx("strong",{children:"纯置换"}),"操作——只改变棱块的位置，不改变朝向。"]}),f.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"#FEF3C7",borderRadius:"8px",fontFamily:"monospace",fontSize:"0.85rem",textAlign:"center",color:"#B45309"},children:"R U' R U R U R U' R' U' R2"}),f.jsxs("ul",{style:{fontSize:"0.82rem",color:"var(--ink)",paddingLeft:"1.2rem",marginBottom:"1rem"},children:[f.jsxs("li",{style:{marginBottom:"0.3rem"},children:["这是",f.jsx("strong",{children:"全排列群"}),"的经典操作——只改变位置不改朝向"]}),f.jsx("li",{style:{marginBottom:"0.3rem"},children:"公式有 11 步，但逻辑清晰：累积置换效应 → 逆向闭合"}),f.jsx("li",{children:"R2（180°）不是矩阵平方，是两个连续 90° 旋转"})]}),f.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[f.jsx("button",{className:"btn btn-primary",onClick:()=>t("edgeloc-guided"),children:"看引导演示"}),f.jsx("button",{className:"btn btn-outline",onClick:()=>t("edgeloc-practice"),children:"直接实操"})]})]}),e==="edgeloc-guided"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"观察棱块置换的逐步动画："}),f.jsx("div",{style:{display:"flex",gap:"0.25rem",marginBottom:"0.8rem",flexWrap:"wrap"},children:Yd.map((b,I)=>f.jsx("div",{style:{padding:"0.2rem 0.5rem",borderRadius:"6px",fontSize:"0.7rem",background:I===s?"#FEF3C7":s>I?"#DCFCE7":"var(--bg2)",borderLeft:"3px solid "+(I===s?"#F59E0B":"transparent")},children:b.notation},I))}),Yd.map((b,I)=>f.jsxs("p",{style:{fontSize:"0.78rem",color:I===s?"var(--ink)":"var(--muted)",fontWeight:I===s?600:400,marginBottom:"0.2rem"},children:[I+1,". ",b.text]},I)),s>=Yd.length-1?f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.82rem",marginBottom:"0.6rem"},children:"✅ 三个黄色棱块顺时针轮换完成"}),f.jsx("button",{className:"btn btn-primary",onClick:()=>t("edgeloc-practice"),children:"亲自试试 →"})]}):f.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[f.jsx("button",{className:"btn btn-outline",onClick:()=>o(b=>b+1),children:s===-1?"开始演示":"下一步 →"}),f.jsx("button",{className:"btn btn-outline",onClick:()=>t("edgeloc-practice"),children:"跳过引导"})]})]}),e==="edgeloc-practice"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"执行以下棱块置换："}),f.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"#FEF3C7",borderRadius:"8px",fontFamily:"monospace",fontSize:"0.82rem",fontWeight:700,textAlign:"center",color:"#B45309"},children:y0.map(hi).join(" → ")}),f.jsxs("div",{style:{marginBottom:"1rem"},children:[f.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.4rem"},children:"你已执行："}),f.jsx("div",{style:{padding:"0.4rem 0.8rem",borderRadius:"6px",background:"var(--bg2)",fontFamily:"monospace",fontSize:"0.82rem",color:v.length>0?"var(--accent)":"var(--muted)"},children:v.length>0?v.join(" → "):"等待操作…"})]}),f.jsx("button",{className:"btn btn-outline",style:{width:"100%"},onClick:()=>S(b=>b+1),children:"重置重试"})]}),e==="cornerloc-intro"&&f.jsxs(f.Fragment,{children:[f.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["黄色棱块已归位，现在把黄色角块移到正确位置。 这个操作是",f.jsx("strong",{children:"交换子 U R U' L' U R' U' L"}),"。"]}),f.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"#FEF3C7",borderRadius:"8px",fontFamily:"monospace",fontSize:"0.85rem",textAlign:"center",color:"#B45309"},children:"U R U' L' U R' U' L"}),f.jsxs("ul",{style:{fontSize:"0.82rem",color:"var(--ink)",paddingLeft:"1.2rem",marginBottom:"1rem"},children:[f.jsxs("li",{style:{marginBottom:"0.3rem"},children:["这也是交换子结构：",f.jsx("strong",{children:"前半段 U R U' L'"})," + ",f.jsx("strong",{children:"后半段 U R' U' L"})]}),f.jsx("li",{style:{marginBottom:"0.3rem"},children:'前半段把角块"搬出来"，后半段"换进去"'}),f.jsxs("li",{children:["角块置换是",f.jsx("strong",{children:"奇置换"}),"（三个角块循环）"]})]}),f.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[f.jsx("button",{className:"btn btn-primary",onClick:()=>t("cornerloc-guided"),children:"看引导演示"}),f.jsx("button",{className:"btn btn-outline",onClick:()=>t("cornerloc-practice"),children:"直接实操"})]})]}),e==="cornerloc-guided"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"观察角块交换的逐步动画："}),f.jsx("div",{style:{display:"flex",gap:"0.25rem",marginBottom:"0.8rem",flexWrap:"wrap"},children:$d.map((b,I)=>f.jsx("div",{style:{padding:"0.2rem 0.5rem",borderRadius:"6px",fontSize:"0.7rem",background:I===s?"#FEF3C7":s>I?"#DCFCE7":"var(--bg2)",borderLeft:"3px solid "+(I===s?"#F59E0B":"transparent")},children:b.notation},I))}),$d.map((b,I)=>f.jsxs("p",{style:{fontSize:"0.78rem",color:I===s?"var(--ink)":"var(--muted)",fontWeight:I===s?600:400,marginBottom:"0.2rem"},children:[I+1,". ",b.text]},I)),s>=$d.length-1?f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.82rem",marginBottom:"0.6rem"},children:"✅ 三个角块互换位置完成"}),f.jsx("button",{className:"btn btn-primary",onClick:()=>t("cornerloc-practice"),children:"亲自试试 →"})]}):f.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[f.jsx("button",{className:"btn btn-outline",onClick:()=>o(b=>b+1),children:s===-1?"开始演示":"下一步 →"}),f.jsx("button",{className:"btn btn-outline",onClick:()=>t("cornerloc-practice"),children:"跳过引导"})]})]}),e==="cornerloc-practice"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"执行以下角块交换："}),f.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"#FEF3C7",borderRadius:"8px",fontFamily:"monospace",fontSize:"0.82rem",fontWeight:700,textAlign:"center",color:"#B45309"},children:E0.map(hi).join(" → ")}),f.jsxs("div",{style:{marginBottom:"1rem"},children:[f.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.4rem"},children:"你已执行："}),f.jsx("div",{style:{padding:"0.4rem 0.8rem",borderRadius:"6px",background:"var(--bg2)",fontFamily:"monospace",fontSize:"0.82rem",color:v.length>0?"var(--accent)":"var(--muted)"},children:v.length>0?v.join(" → "):"等待操作…"})]}),f.jsx("button",{className:"btn btn-outline",style:{width:"100%"},onClick:()=>S(b=>b+1),children:"重置重试"})]}),e==="orient-intro"&&f.jsxs(f.Fragment,{children:[f.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:["所有块都在正确位置，只剩黄色角块的朝向需要翻转。 使用经典的 ",f.jsx("strong",{children:"Sune"}),"：R U R' U R U2 R'。"]}),f.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"#FEF3C7",borderRadius:"8px",fontFamily:"monospace",fontSize:"0.85rem",textAlign:"center",color:"#B45309"},children:"R U R' U R U2 R'"}),f.jsxs("ul",{style:{fontSize:"0.82rem",color:"var(--ink)",paddingLeft:"1.2rem",marginBottom:"1rem"},children:[f.jsxs("li",{style:{marginBottom:"0.3rem"},children:["Sune 是",f.jsx("strong",{children:"3-cycle"}),"——每次翻转一个角块"]}),f.jsxs("li",{style:{marginBottom:"0.3rem"},children:["U2 = 两个连续 90° 旋转，",f.jsx("strong",{children:"不是"}),"矩阵平方"]}),f.jsx("li",{children:"重复执行 Sune 即可翻正所有黄角，魔方完成！"})]}),f.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[f.jsx("button",{className:"btn btn-primary",onClick:()=>t("orient-guided"),children:"看引导演示"}),f.jsx("button",{className:"btn btn-outline",onClick:()=>t("orient-practice"),children:"直接实操"})]})]}),e==="orient-guided"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"观察 Sune 的逐步操作："}),f.jsx("div",{style:{display:"flex",gap:"0.25rem",marginBottom:"0.8rem",flexWrap:"wrap"},children:qd.map((b,I)=>f.jsx("div",{style:{padding:"0.2rem 0.5rem",borderRadius:"6px",fontSize:"0.7rem",background:I===s?"#FEF3C7":s>I?"#DCFCE7":"var(--bg2)",borderLeft:"3px solid "+(I===s?"#F59E0B":"transparent")},children:b.notation},I))}),qd.map((b,I)=>f.jsxs("p",{style:{fontSize:"0.78rem",color:I===s?"var(--ink)":"var(--muted)",fontWeight:I===s?600:400,marginBottom:"0.2rem"},children:[I+1,". ",b.text]},I)),s>=qd.length-1?f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{padding:"0.5rem 0.8rem",borderRadius:"6px",background:"#DCFCE7",fontSize:"0.82rem",marginBottom:"0.6rem"},children:"✅ 一个子角翻正！魔方可继续重复直至全部完成"}),f.jsx("button",{className:"btn btn-primary",onClick:()=>t("orient-practice"),children:"亲自试试 →"})]}):f.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[f.jsx("button",{className:"btn btn-outline",onClick:()=>o(b=>b+1),children:s===-1?"开始演示":"下一步 →"}),f.jsx("button",{className:"btn btn-outline",onClick:()=>t("orient-practice"),children:"跳过引导"})]})]}),e==="orient-practice"&&f.jsxs(f.Fragment,{children:[f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"执行 Sune 翻转黄色角块："}),f.jsx("div",{style:{padding:"0.6rem 1rem",marginBottom:"1rem",background:"#FEF3C7",borderRadius:"8px",fontFamily:"monospace",fontSize:"0.82rem",fontWeight:700,textAlign:"center",color:"#B45309"},children:T0.map(hi).join(" → ")}),f.jsxs("div",{style:{marginBottom:"1rem"},children:[f.jsx("p",{style:{fontSize:"0.75rem",color:"var(--muted)",marginBottom:"0.4rem"},children:"你已执行："}),f.jsx("div",{style:{padding:"0.4rem 0.8rem",borderRadius:"6px",background:"var(--bg2)",fontFamily:"monospace",fontSize:"0.82rem",color:v.length>0?"var(--accent)":"var(--muted)"},children:v.length>0?v.join(" → "):"等待操作…"})]}),f.jsx("button",{className:"btn btn-outline",style:{width:"100%"},onClick:()=>S(b=>b+1),children:"重置重试"})]}),e==="edge-done"&&f.jsxs(f.Fragment,{children:[m&&f.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem"},children:[f.jsx("span",{style:{fontSize:"3rem"},children:"⭐"}),f.jsx("p",{style:{fontSize:"1rem",fontWeight:700,color:"var(--accent)",marginTop:"0.5rem"},children:"棱块归位完成！"})]}),f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.8rem"},children:"你刚用共轭变换（前半段 U R U' R' 搬入 + 后半段 U' F' U F 关闭） 成功归位了一个中层棱块。P路A路P' 的结构让你精准操作而不破坏已复原部分。"}),f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"1rem"},children:"白色十字、白色角块、中层棱块 — 全部完成！ 接下来可以进入自由练习模式，巩固这些技巧。"}),f.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>t("topcross-intro"),children:"进入下一步：黄色十字 →"})]}),e==="done"&&f.jsxs(f.Fragment,{children:[m&&f.jsxs("div",{style:{textAlign:"center",marginBottom:"1rem"},children:[f.jsx("span",{style:{fontSize:"3rem"},children:"🎉"}),f.jsx("p",{style:{fontSize:"1.2rem",fontWeight:700,color:"var(--accent)",marginTop:"0.5rem"},children:"全部完成！"})]}),f.jsx("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.5rem"},children:"你成功完成了七步骤全部复原：白色十字 → 白色角块（逆序列法则） → 中层棱块（共轭变换） → 黄色十字（交换子） → 棱块归位（置换群） → 角块归位（交换子）→ 翻黄角（Sune）。"}),f.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--ink2)",marginBottom:"0.5rem"},children:[f.jsx("strong",{children:"你已经亲身体验了线代→群论的完整渐进教学闭环"}),"： 打开→操作→关上（交换子）、逆序列、乘法不可交换（Sune 的效果与顺序相关）、 置换循环、奇置换与偶置换——全部通过实际操作！"]}),f.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[f.jsx(an,{to:"/chapter/solve",className:"btn btn-outline",style:{flex:1,textAlign:"center",textDecoration:"none"},children:"回到第6节"}),f.jsx(an,{to:"/playground",className:"btn btn-primary",style:{flex:1,textAlign:"center",textDecoration:"none"},children:"巩固练习 →"})]})]})]})}),f.jsx("div",{style:{width:"420px",flexShrink:0},children:f.jsx("div",{style:{height:"420px",borderRadius:"var(--radius)",overflow:"hidden",border:"1px solid var(--rule)"},children:f.jsx(cs,{ref:r})})})]})]})}function rC(){return f.jsx(wy,{children:f.jsxs(ts,{element:f.jsx(aS,{}),children:[f.jsx(ts,{path:"/",element:f.jsx(CR,{})}),f.jsx(ts,{path:"/chapter/:id",element:f.jsx(GR,{})}),f.jsx(ts,{path:"/playground",element:f.jsx(WR,{})}),f.jsx(ts,{path:"/archive",element:f.jsx(YR,{})}),f.jsx(ts,{path:"/tutorial",element:f.jsx(iC,{})})]})})}E_.createRoot(document.getElementById("app")).render(f.jsx(H.StrictMode,{children:f.jsx(qy,{children:f.jsx(rC,{})})}));
