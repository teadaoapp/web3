(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e604af8"],{"0c0d":function(e,t,n){},"28f4":function(e,t,n){"use strict";var r=n("4df9");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},"30ed":function(e,t){e.exports="./images/transform5dc41586b2a3ba671b8cb88580863420.png"},"322a":function(e,t,n){"use strict";var r=n("4df9"),o=n("c1cf");e.exports=function(e,t,n){var s=this||o;return r.forEach(n,(function(n){e=n.call(s,e,t)})),e}},"32fe":function(e,t,n){"use strict";var r=n("4df9");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},3526:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},"35ba":function(e,t,n){"use strict";var r=n("4df9"),o=n("322a"),s=n("9a1c"),i=n("c1cf"),a=n("f018");function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||i.adapter;return t(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"3ab5":function(e,t,n){"use strict";var r=n("4df9");function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},"46e5":function(e,t,n){"use strict";var r=n("cad1"),o=n("b5e8");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"4df9":function(e,t,n){"use strict";var r=n("3526"),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function i(e){return"undefined"===typeof e}function a(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function l(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function d(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===o.call(e)}function b(e){return"[object File]"===o.call(e)}function g(e){return"[object Blob]"===o.call(e)}function y(e){return"[object Function]"===o.call(e)}function v(e){return p(e)&&y(e.pipe)}function w(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function k(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function O(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function x(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function j(){var e={};function t(t,n){h(e[n])&&h(t)?e[n]=j(e[n],t):h(t)?e[n]=j({},t):s(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)x(arguments[n],t);return e}function T(e,t,n){return x(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e}function C(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:s,isArrayBuffer:c,isBuffer:a,isFormData:u,isArrayBufferView:l,isString:f,isNumber:d,isObject:p,isPlainObject:h,isUndefined:i,isDate:m,isFile:b,isBlob:g,isFunction:y,isStream:v,isURLSearchParams:w,isStandardBrowserEnv:O,forEach:x,merge:j,extend:T,trim:k,stripBOM:C}},"5faf":function(e,t,n){"use strict";var r=n("e648");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"66f1":function(e,t,n){"use strict";var r=n("4df9"),o=n("32fe"),s=n("3ab5"),i=n("35ba"),a=n("a0bf"),c=n("943cf"),u=c.validators;function l(e){this.defaults=e,this.interceptors={request:new s,response:new s}}l.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&c.assertOptions(t,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var o,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!r){var l=[i,void 0];Array.prototype.unshift.apply(l,n),l=l.concat(s),o=Promise.resolve(e);while(l.length)o=o.then(l.shift(),l.shift());return o}var f=e;while(n.length){var d=n.shift(),p=n.shift();try{f=d(f)}catch(h){p(h);break}}try{o=i(f)}catch(h){return Promise.reject(h)}while(s.length)o=o.then(s.shift(),s.shift());return o},l.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=l},6954:function(e,t,n){"use strict";var r=n("4df9");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},"7b3e":function(e,t,n){"use strict";var r=n("4df9"),o=n("3526"),s=n("66f1"),i=n("a0bf"),a=n("c1cf");function c(e){var t=new s(e),n=o(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n.create=function(t){return c(i(e,t))},n}var u=c(a);u.Axios=s,u.Cancel=n("f018"),u.CancelToken=n("b2f9"),u.isCancel=n("9a1c"),u.VERSION=n("c82b").version,u.all=function(e){return Promise.all(e)},u.spread=n("f34e"),u.isAxiosError=n("f0cf"),e.exports=u,e.exports.default=u},"82aa":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},9035:function(e,t,n){e.exports=n("7b3e")},"943cf":function(e,t,n){"use strict";var r=n("c82b").version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};function i(e,t,n){if("object"!==typeof e)throw new TypeError("options must be an object");var r=Object.keys(e),o=r.length;while(o-- >0){var s=r[o],i=t[s];if(i){var a=e[s],c=void 0===a||i(a,s,e);if(!0!==c)throw new TypeError("option "+s+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+s)}}o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,i){if(!1===e)throw new Error(o(r," has been removed"+(t?" in "+t:"")));return t&&!s[r]&&(s[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,i)}},e.exports={assertOptions:i,validators:o}},"9a1c":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},a0bf:function(e,t,n){"use strict";var r=n("4df9");e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function i(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function c(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||s,o=t(e);r.isUndefined(o)&&t!==c||(n[e]=o)})),n}},b2f9:function(e,t,n){"use strict";var r=n("f018");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},b468:function(e,t,n){"use strict";n("0c0d")},b5e8:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},b9e2:function(e,t,n){"use strict";var r=n("4df9"),o=n("5faf"),s=n("d750"),i=n("32fe"),a=n("46e5"),c=n("fbdd"),u=n("28f4"),l=n("e648"),f=n("c1cf"),d=n("f018");e.exports=function(e){return new Promise((function(t,n){var p,h=e.data,m=e.headers,b=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(h)&&delete m["Content-Type"];var y=new XMLHttpRequest;if(e.auth){var v=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(v+":"+w)}var k=a(e.baseURL,e.url);function O(){if(y){var r="getAllResponseHeaders"in y?c(y.getAllResponseHeaders()):null,s=b&&"text"!==b&&"json"!==b?y.response:y.responseText,i={data:s,status:y.status,statusText:y.statusText,headers:r,config:e,request:y};o((function(e){t(e),g()}),(function(e){n(e),g()}),i),y=null}}if(y.open(e.method.toUpperCase(),i(k,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,"onloadend"in y?y.onloadend=O:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(O)},y.onabort=function(){y&&(n(l("Request aborted",e,"ECONNABORTED",y)),y=null)},y.onerror=function(){n(l("Network Error",e,null,y)),y=null},y.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||f.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",y)),y=null},r.isStandardBrowserEnv()){var x=(e.withCredentials||u(k))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;x&&(m[e.xsrfHeaderName]=x)}"setRequestHeader"in y&&r.forEach(m,(function(e,t){"undefined"===typeof h&&"content-type"===t.toLowerCase()?delete m[t]:y.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(y.withCredentials=!!e.withCredentials),b&&"json"!==b&&(y.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){y&&(n(!e||e&&e.type?new d("canceled"):e),y.abort(),y=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),h||(h=null),y.send(h)}))}},c1cf:function(e,t,n){"use strict";(function(t){var r=n("4df9"),o=n("6954"),s=n("82aa"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function c(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b9e2")),e}function u(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(n||JSON.stringify)(e)}var l={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:c(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),u(e)):e}],transformResponse:[function(e){var t=this.transitional||l.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,i=!n&&"json"===this.responseType;if(i||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(i){if("SyntaxError"===a.name)throw s(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){l.headers[e]=r.merge(i)})),e.exports=l}).call(this,n("eef6"))},c64b:function(e,t,n){"use strict";var r=n("33a9");const o={class:"flex-column-start tokens-content"},s={class:"flex-row-start align-center"},i={class:"flex-h__1 tokens-list"},a={key:0,class:"tokens-list__import flex-row-start align-center PL-30 PR-30 PB-30 PT-30"},c={class:"flex-row-start flex-1 align-center"},u={class:"tokens-list__item-icon MR-10"},l={class:"tokens-list__import-name MR-10"},f={class:"tokens-list__import-desc"},d=["onClick"],p={class:"tokens-list__item-icon MR-10"},h={class:"flex-1"},m={class:"token-list__item-title"},b={class:"token-list__item-desc"},g={class:"token-list__item-price"};function y(e,t){const n=Object(r["resolveComponent"])("el-button"),y=Object(r["resolveComponent"])("Close"),v=Object(r["resolveComponent"])("el-icon"),w=Object(r["resolveComponent"])("el-dialog"),k=Object(r["resolveDirective"])("lazy");return Object(r["openBlock"])(),Object(r["createBlock"])(w,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=t=>e.dialogVisible=t),title:e.$t("swap.selectToken"),width:"420px","custom-class":"tokens"},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("div",s,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",class:"tokens-input flex-1","onUpdate:modelValue":t[0]||(t[0]=t=>e.searchTxt=t),placeholder:"Search name or paste address"},null,512),[[r["vModelText"],e.searchTxt,void 0,{trim:!0}]]),Object(r["createVNode"])(n,{class:"MR-20",onClick:t[1]||(t[1]=t=>e.fastImport()),disabled:!e.searchTxt||42!=e.searchTxt.length&&!e.importTokens.name},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.t("swap.fastImport")),1)]),_:1},8,["disabled"])]),Object(r["createElementVNode"])("div",i,[e.importTokens.name?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("div",c,[Object(r["withDirectives"])(Object(r["createElementVNode"])("img",u,null,512),[[k,e.getLogo(e.importTokens.address)]]),Object(r["createElementVNode"])("div",l,Object(r["toDisplayString"])(e.importTokens.name),1),Object(r["createElementVNode"])("div",f,Object(r["toDisplayString"])(e.importTokens.symbol),1)]),Object(r["createVNode"])(n,{class:"tokens-list__import-btn",onClick:e.importHandler},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.t("swap.import")),1)]),_:1},8,["onClick"])])):(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],{key:1},Object(r["renderList"])(e.getTokens,(t,n)=>(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"tokens-list__item pointer flex-row-start align-center pointer",key:t.address,onClick:n=>e.selectHandler(t)},[Object(r["withDirectives"])(Object(r["createElementVNode"])("img",p,null,512),[[k,e.getLogo(t.address)]]),Object(r["createElementVNode"])("div",h,[Object(r["createElementVNode"])("div",m,Object(r["toDisplayString"])(t.name),1),Object(r["createElementVNode"])("div",b,Object(r["toDisplayString"])(t.symbol),1)]),Object(r["createElementVNode"])("div",g,Object(r["toDisplayString"])(t.balance?e.getBit(e.utils.formatUnits(t.balance,t.decimals||18),5):""),1),t.isAdd?(Object(r["openBlock"])(),Object(r["createBlock"])(v,{key:0,size:30,color:"#fff",class:"ML-10",onClick:Object(r["withModifiers"])(t=>e.removeTokens(n),["stop"])},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(y)]),_:2},1032,["onClick"])):Object(r["createCommentVNode"])("",!0)],8,d))),128))])])]),_:1},8,["modelValue","title"])}n("0e47");var v=n("1630"),w=n("90fe"),k=n("767c"),O={name:"Tokens",data(){return{utils:v["b"],getBit:w["c"],getLogo:w["d"],dialogVisible:!1,activeAddress:[],searchTxt:"",getTokens:[],importTokens:{},tokens:[],type:""}},computed:{...Object(k["c"])(["currentNetwork"])},async mounted(){const{outputCurrency:e,inputCurrency:t}=this.$route.query;e&&42==e.length&&(this.type="item2",await this.getCurrencyInfo(e),this.importHandler()),t&&42==t.length&&(this.type="item1",await this.getCurrencyInfo(t),this.importHandler()),this.type=""},watch:{"currentNetwork.ChainID":{immediate:!0,handler(){let e=localStorage.getItem(this.currentNetwork.ChainID+"tokens");this.tokens=e?JSON.parse(e):this.currentNetwork.Token,this.getTokens=Object(r["toRaw"])(this.tokens),this.getBalance()}},searchTxt(e){this.searchTxtChange(e)}},methods:{searchTxtChange(e){e||(this.getTokens=Object(r["toRaw"])(this.tokens));const t=this.tokens.filter(t=>{const{name:n,address:r}=t;return!(!n.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&!r.toLocaleLowerCase().includes(e.toLocaleLowerCase()))});this.importTokens={},this.getTokens=Object(r["toRaw"])(t),t.length<=0&&42===e.length&&this.getCurrencyInfo(e)},fastImport(e,t=!0){e=e||this.searchTxt;const n=this.tokens.find(t=>t.address===e);if(n)this.selectHandler(n);else{this.importTokens={name:e.slice(0,6),symbol:e.slice(0,6),address:e,isAdd:!0},this.importHandler(t);const n=window.wallet.initContract(e),r=[n.name(),n.symbol()];Promise.all(r).then(([t,n])=>{this.updateTokenInfo(e,t,n)})}},updateTokenInfo(e,t,n){const r=this.tokens.findIndex(t=>t.address===e);r>=0&&(this.tokens[r].name=t,this.tokens[r].symbol=n);const o=this.getTokens.findIndex(t=>t.address===e);o>=0&&(this.getTokens[o].name=t,this.getTokens[o].symbol=n),this.$emit("update",{address:e,name:t,symbol:n}),localStorage.setItem(this.currentNetwork.ChainID+"tokens",JSON.stringify(this.tokens))},removeTokens(e){const t=this.getTokens[e],n=this.tokens.findIndex(e=>t.address==e.address);this.tokens.splice(n,1),this.searchTxtChange(this.searchTxt),localStorage.setItem(this.currentNetwork.ChainID+"tokens",JSON.stringify(this.tokens))},async getCurrencyInfo(e){const t=window.wallet.initContract(e),n=[t.name(),t.symbol(),t.decimals()];try{await Promise.all(n).then(([t,n,r])=>{this.importTokens={name:t,symbol:n,decimals:r,address:e,isAdd:!0}})}catch(r){Object(w["a"])(r)}},async getBalance(){if(!window.wallet.accounts[0]){for(let e=0;e<this.getTokens.length;e++)this.getTokens[e].balance="";return}let e=[];for(let t=0;t<this.getTokens.length;t++){const n=this.getTokens[t];let r;if(n.address===this.currentNetwork.MainCoin.address)r=window.wallet.provider.getBalance();else{const e=window.wallet.initContract(n.address);r=e.balanceOf(window.wallet.accounts[0])}e.push(r)}Promise.allSettled(e).then(e=>{e.forEach((e,t)=>{const{status:n,value:r}=e;this.getTokens[t].balance="fulfilled"===n?r:""})})},importHandler(e=!0){const t=this.tokens.find(e=>e.address===this.importTokens.address);!t&&e&&(this.tokens.push(this.importTokens),this.searchTxt="",localStorage.setItem(this.currentNetwork.ChainID+"tokens",JSON.stringify(this.tokens))),this.selectHandler(this.importTokens)},open(e){this.activeAddress=e,this.dialogVisible=!0,this.importTokens={},this.getBalance()},selectHandler(e){this.$emit("change",e,this.type),this.dialogVisible=!1,this.importTokens={}}}};n("b468");O.render=y;t["a"]=O},c82b:function(e,t){e.exports={version:"0.24.0"}},cad1:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},d750:function(e,t,n){"use strict";var r=n("4df9");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},e648:function(e,t,n){"use strict";var r=n("82aa");e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},f018:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},f0cf:function(e,t,n){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},f34e:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},fbdd:function(e,t,n){"use strict";var r=n("4df9"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}}}]);
//# sourceMappingURL=chunk-6e604af8.6ba87276.js.map