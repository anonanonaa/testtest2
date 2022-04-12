import{I as we}from"./index.ea2922d5.js";var F={exports:{}},ae=function(e,r){return function(){for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];return e.apply(r,s)}},Ee=ae,y=Object.prototype.toString;function H(t){return Array.isArray(t)}function q(t){return typeof t=="undefined"}function Ce(t){return t!==null&&!q(t)&&t.constructor!==null&&!q(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function ie(t){return y.call(t)==="[object ArrayBuffer]"}function ke(t){return y.call(t)==="[object FormData]"}function Te(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ie(t.buffer),e}function ge(t){return typeof t=="string"}function Oe(t){return typeof t=="number"}function oe(t){return t!==null&&typeof t=="object"}function x(t){if(y.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function Re(t){return y.call(t)==="[object Date]"}function xe(t){return y.call(t)==="[object File]"}function Ae(t){return y.call(t)==="[object Blob]"}function ue(t){return y.call(t)==="[object Function]"}function $e(t){return oe(t)&&ue(t.pipe)}function Ne(t){return y.call(t)==="[object URLSearchParams]"}function Ue(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Be(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function M(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),H(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function _(){var t={};function e(s,a){x(t[a])&&x(s)?t[a]=_(t[a],s):x(s)?t[a]=_({},s):H(s)?t[a]=s.slice():t[a]=s}for(var r=0,n=arguments.length;r<n;r++)M(arguments[r],e);return t}function Ie(t,e,r){return M(e,function(s,a){r&&typeof s=="function"?t[a]=Ee(s,r):t[a]=s}),t}function Pe(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var d={isArray:H,isArrayBuffer:ie,isBuffer:Ce,isFormData:ke,isArrayBufferView:Te,isString:ge,isNumber:Oe,isObject:oe,isPlainObject:x,isUndefined:q,isDate:Re,isFile:xe,isBlob:Ae,isFunction:ue,isStream:$e,isURLSearchParams:Ne,isStandardBrowserEnv:Be,forEach:M,merge:_,extend:Ie,trim:Ue,stripBOM:Pe},C=d;function K(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ce=function(e,r,n){if(!r)return e;var s;if(n)s=n(r);else if(C.isURLSearchParams(r))s=r.toString();else{var a=[];C.forEach(r,function(c,m){c===null||typeof c=="undefined"||(C.isArray(c)?m=m+"[]":c=[c],C.forEach(c,function(f){C.isDate(f)?f=f.toISOString():C.isObject(f)&&(f=JSON.stringify(f)),a.push(K(m)+"="+K(f))}))}),s=a.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},Le=d;function $(){this.handlers=[]}$.prototype.use=function(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};$.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};$.prototype.forEach=function(e){Le.forEach(this.handlers,function(n){n!==null&&e(n)})};var De=$,je=d,qe=function(e,r){je.forEach(e,function(s,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(e[r]=s,delete e[a])})},fe=function(e,r,n,s,a){return e.config=r,n&&(e.code=n),e.request=s,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},he={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_e=fe,le=function(e,r,n,s,a){var o=new Error(e);return _e(o,r,n,s,a)},Fe=le,He=function(e,r,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):r(Fe("Request failed with status code "+n.status,n.config,null,n.request,n))},O=d,Me=O.isStandardBrowserEnv()?function(){return{write:function(r,n,s,a,o,u){var c=[];c.push(r+"="+encodeURIComponent(n)),O.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),O.isString(a)&&c.push("path="+a),O.isString(o)&&c.push("domain="+o),u===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(r){var n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Je=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},We=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},ze=Je,Ve=We,Xe=function(e,r){return e&&!ze(r)?Ve(e,r):r},P=d,Ke=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ge=function(e){var r={},n,s,a;return e&&P.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),n=P.trim(u.substr(0,a)).toLowerCase(),s=P.trim(u.substr(a+1)),n){if(r[n]&&Ke.indexOf(n)>=0)return;n==="set-cookie"?r[n]=(r[n]?r[n]:[]).concat([s]):r[n]=r[n]?r[n]+", "+s:s}}),r},G=d,Ye=G.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function s(a){var o=a;return e&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(o){var u=G.isString(o)?s(o):o;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}();function J(t){this.message=t}J.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};J.prototype.__CANCEL__=!0;var N=J,R=d,Ze=He,Qe=Me,et=ce,tt=Xe,rt=Ge,nt=Ye,L=le,st=he,at=N,Y=function(e){return new Promise(function(n,s){var a=e.data,o=e.headers,u=e.responseType,c;function m(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}R.isFormData(a)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(f+":"+S)}var l=tt(e.baseURL,e.url);i.open(e.method.toUpperCase(),et(l,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function V(){if(!!i){var v="getAllResponseHeaders"in i?rt(i.getAllResponseHeaders()):null,E=!u||u==="text"||u==="json"?i.responseText:i.response,w={data:E,status:i.status,statusText:i.statusText,headers:v,config:e,request:i};Ze(function(I){n(I),m()},function(I){s(I),m()},w),i=null}}if("onloadend"in i?i.onloadend=V:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(V)},i.onabort=function(){!i||(s(L("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){s(L("Network Error",e,null,i)),i=null},i.ontimeout=function(){var E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",w=e.transitional||st;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),s(L(E,e,w.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},R.isStandardBrowserEnv()){var X=(e.withCredentials||nt(l))&&e.xsrfCookieName?Qe.read(e.xsrfCookieName):void 0;X&&(o[e.xsrfHeaderName]=X)}"setRequestHeader"in i&&R.forEach(o,function(E,w){typeof a=="undefined"&&w.toLowerCase()==="content-type"?delete o[w]:i.setRequestHeader(w,E)}),R.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),u&&u!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(v){!i||(s(!v||v&&v.type?new at("canceled"):v),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),a||(a=null),i.send(a)})},h=d,Z=qe,it=fe,ot=he,ut={"Content-Type":"application/x-www-form-urlencoded"};function Q(t,e){!h.isUndefined(t)&&h.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function ct(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Y),t}function ft(t,e,r){if(h.isString(t))try{return(e||JSON.parse)(t),h.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}var U={transitional:ot,adapter:ct(),transformRequest:[function(e,r){return Z(r,"Accept"),Z(r,"Content-Type"),h.isFormData(e)||h.isArrayBuffer(e)||h.isBuffer(e)||h.isStream(e)||h.isFile(e)||h.isBlob(e)?e:h.isArrayBufferView(e)?e.buffer:h.isURLSearchParams(e)?(Q(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):h.isObject(e)||r&&r["Content-Type"]==="application/json"?(Q(r,"application/json"),ft(e)):e}],transformResponse:[function(e){var r=this.transitional||U.transitional,n=r&&r.silentJSONParsing,s=r&&r.forcedJSONParsing,a=!n&&this.responseType==="json";if(a||s&&h.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?it(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};h.forEach(["delete","get","head"],function(e){U.headers[e]={}});h.forEach(["post","put","patch"],function(e){U.headers[e]=h.merge(ut)});var W=U,ht=d,lt=W,dt=function(e,r,n){var s=this||lt;return ht.forEach(n,function(o){e=o.call(s,e,r)}),e},de=function(e){return!!(e&&e.__CANCEL__)},ee=d,D=dt,pt=de,mt=W,vt=N;function j(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new vt("canceled")}var St=function(e){j(e),e.headers=e.headers||{},e.data=D.call(e,e.data,e.headers,e.transformRequest),e.headers=ee.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ee.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var r=e.adapter||mt.adapter;return r(e).then(function(s){return j(e),s.data=D.call(e,s.data,s.headers,e.transformResponse),s},function(s){return pt(s)||(j(e),s&&s.response&&(s.response.data=D.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},p=d,pe=function(e,r){r=r||{};var n={};function s(i,f){return p.isPlainObject(i)&&p.isPlainObject(f)?p.merge(i,f):p.isPlainObject(f)?p.merge({},f):p.isArray(f)?f.slice():f}function a(i){if(p.isUndefined(r[i])){if(!p.isUndefined(e[i]))return s(void 0,e[i])}else return s(e[i],r[i])}function o(i){if(!p.isUndefined(r[i]))return s(void 0,r[i])}function u(i){if(p.isUndefined(r[i])){if(!p.isUndefined(e[i]))return s(void 0,e[i])}else return s(void 0,r[i])}function c(i){if(i in r)return s(e[i],r[i]);if(i in e)return s(void 0,e[i])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:c};return p.forEach(Object.keys(e).concat(Object.keys(r)),function(f){var S=m[f]||a,l=S(f);p.isUndefined(l)&&S!==c||(n[f]=l)}),n},me={version:"0.26.1"},bt=me.version,z={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){z[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});var te={};z.transitional=function(e,r,n){function s(a,o){return"[Axios v"+bt+"] Transitional option '"+a+"'"+o+(n?". "+n:"")}return function(a,o,u){if(e===!1)throw new Error(s(o," has been removed"+(r?" in "+r:"")));return r&&!te[o]&&(te[o]=!0,console.warn(s(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(a,o,u):!0}};function yt(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var n=Object.keys(t),s=n.length;s-- >0;){var a=n[s],o=e[a];if(o){var u=t[a],c=u===void 0||o(u,a,t);if(c!==!0)throw new TypeError("option "+a+" must be "+c);continue}if(r!==!0)throw Error("Unknown option "+a)}}var wt={assertOptions:yt,validators:z},ve=d,Et=ce,re=De,ne=St,B=pe,Se=wt,k=Se.validators;function g(t){this.defaults=t,this.interceptors={request:new re,response:new re}}g.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=B(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var n=r.transitional;n!==void 0&&Se.assertOptions(n,{silentJSONParsing:k.transitional(k.boolean),forcedJSONParsing:k.transitional(k.boolean),clarifyTimeoutError:k.transitional(k.boolean)},!1);var s=[],a=!0;this.interceptors.request.forEach(function(l){typeof l.runWhen=="function"&&l.runWhen(r)===!1||(a=a&&l.synchronous,s.unshift(l.fulfilled,l.rejected))});var o=[];this.interceptors.response.forEach(function(l){o.push(l.fulfilled,l.rejected)});var u;if(!a){var c=[ne,void 0];for(Array.prototype.unshift.apply(c,s),c=c.concat(o),u=Promise.resolve(r);c.length;)u=u.then(c.shift(),c.shift());return u}for(var m=r;s.length;){var i=s.shift(),f=s.shift();try{m=i(m)}catch(S){f(S);break}}try{u=ne(m)}catch(S){return Promise.reject(S)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};g.prototype.getUri=function(e){return e=B(this.defaults,e),Et(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};ve.forEach(["delete","get","head","options"],function(e){g.prototype[e]=function(r,n){return this.request(B(n||{},{method:e,url:r,data:(n||{}).data}))}});ve.forEach(["post","put","patch"],function(e){g.prototype[e]=function(r,n,s){return this.request(B(s||{},{method:e,url:r,data:n}))}});var Ct=g,kt=N;function T(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var r=this;this.promise.then(function(n){if(!!r._listeners){var s,a=r._listeners.length;for(s=0;s<a;s++)r._listeners[s](n);r._listeners=null}}),this.promise.then=function(n){var s,a=new Promise(function(o){r.subscribe(o),s=o}).then(n);return a.cancel=function(){r.unsubscribe(s)},a},t(function(s){r.reason||(r.reason=new kt(s),e(r.reason))})}T.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};T.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};T.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};T.source=function(){var e,r=new T(function(s){e=s});return{token:r,cancel:e}};var Tt=T,gt=function(e){return function(n){return e.apply(null,n)}},Ot=d,Rt=function(e){return Ot.isObject(e)&&e.isAxiosError===!0},se=d,xt=ae,A=Ct,At=pe,$t=W;function be(t){var e=new A(t),r=xt(A.prototype.request,e);return se.extend(r,A.prototype,e),se.extend(r,e),r.create=function(s){return be(At(t,s))},r}var b=be($t);b.Axios=A;b.Cancel=N;b.CancelToken=Tt;b.isCancel=de;b.VERSION=me.version;b.all=function(e){return Promise.all(e)};b.spread=gt;b.isAxiosError=Rt;F.exports=b;F.exports.default=b;var Nt=F.exports;const Bt=we("binance_socket",{state:()=>({socketConnection:new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr"),socketSingleTicker:new WebSocket("wss://stream.binance.us:9443/ws/BTCUSDT@depth"),coinsList:Array(),tickerInfo:{},prevTickerInfo:{},depthSnapshot:{},binanceStreamLoader:!1}),getters:{getCoinsList:t=>t.coinsList,getTickerInfo:t=>t.tickerInfo,getDepthSnapshot:t=>t.depthSnapshot,getBinanceStreamLoader:t=>t.binanceStreamLoader},actions:{connectToBinanceStream(){console.log("fewpohifewpohfew"),this.binanceStreamLoader=!0,console.log("Connecting to BinanceStream"),this.socketConnection=new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr"),this.socketConnection.onopen=()=>{console.log("Connected to BinanceStream")};const t={};this.socketConnection.onmessage=({data:e})=>{(JSON.parse(e)||[]).forEach(n=>{let s=parseFloat(n.c);n.history=t&&t.hasOwnProperty(n.s)?t[n.s].history:this.fakeHistory(s),n.history.length>20&&(n.history=n.history.slice(n.history.length-20));let a=/^([A-Z]+)(BTC|ETH|BNB|USDT|TUSD)$/,o=String(n.s).replace(/[^\w\-]+/g,"").toUpperCase();n.token=o.replace(a,"$1"),n.asset=o.replace(a,"$2"),n.history.push(s),t[n.s]=n}),this.coinsList=Object.keys(t).map(n=>t[n]),this.binanceStreamLoader=!1},this.socketConnection.onclose=()=>{console.log("Closed connection to BinanceStream")}},fakeHistory(t){let e=t*1e-4,r=-Math.abs(e),n=Math.abs(e),s=[];for(let a=0;a<20;++a){let o=Math.random()*(n-r)+r;s.push(t+o)}return s},disconnectBinanceStream(){this.socketConnection.send({method:"UNSUBSCRIBE",params:["ticker@arr"],id:312})},connectToTickerStream(t){this.socketSingleTicker=new WebSocket(`wss://stream.binance.us:9443/ws/${t}@depth`);let e=!0;this.socketSingleTicker.onmessage=r=>{const n=JSON.parse(r.data)||[];if(e===!0){this.prevTickerInfo=n,e=!1;return}this.tickerInfo=n,this.setTickerInfo(),this.prevTickerInfo=n}},fetchDepthSnapShot(t){const e=`https://www.binance.us/api/v1/depth?symbol=${t}&limit=150`;Nt.get(e).then(r=>{this.depthSnapshot=r.data})},setTickerInfo(){this.tickerInfo.u&&this.depthSnapshot.lastUpdateId&&this.tickerInfo.u<=this.depthSnapshot.lastUpdateId||this.prevTickerInfo.u&&this.tickerInfo.U===this.prevTickerInfo.u+1&&(this.updateDepthSnapshotAsks(),this.updateDepthSnapshotBids())},updateDepthSnapshotAsks(){this.tickerInfo.a!==void 0&&(this.tickerInfo.a.map(t=>{this.depthSnapshot.asks=this.depthSnapshot.asks?this.depthSnapshot.asks.filter(e=>{if(e[0]!==t[0])return e}):this.depthSnapshot.asks}),this.depthSnapshot.asks=this.depthSnapshot.asks?this.depthSnapshot.asks.concat(this.tickerInfo.a):this.depthSnapshot.bids,this.tickerInfo.a.map(t=>{this.depthSnapshot.asks=this.depthSnapshot.asks?this.depthSnapshot.asks.filter(e=>{if(e["1"]!=="0.00000000")return t}):this.depthSnapshot.bids}),this.depthSnapshot.asks=this.depthSnapshot.asks?this.depthSnapshot.asks.sort((t,e)=>parseFloat(t[0])-parseFloat(e[0])).splice(0,60):this.depthSnapshot.asks)},updateDepthSnapshotBids(){this.tickerInfo.b!==void 0&&(this.tickerInfo.b.map(t=>{this.depthSnapshot.bids=this.depthSnapshot.bids?this.depthSnapshot.bids.filter(e=>{if(e[0]!==t[0])return e}):[]}),this.depthSnapshot.bids=this.depthSnapshot.bids?this.depthSnapshot.bids.concat(this.tickerInfo.b):this.depthSnapshot.bids,this.tickerInfo.b.map(t=>{this.depthSnapshot.bids=this.depthSnapshot.bids?this.depthSnapshot.bids.filter(e=>{if(e["1"]!=="0.00000000")return t}):this.depthSnapshot.bids}),this.depthSnapshot.bids=this.depthSnapshot.bids?this.depthSnapshot.bids.sort((t,e)=>parseFloat(t[0])-parseFloat(e[0])).splice(0,60):this.depthSnapshot.bids)}}});export{Bt as u};