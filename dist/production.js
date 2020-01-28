!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=30)}([function(e,t,r){"use strict";const n=Symbol("pino.setLevel"),s=Symbol("pino.getLevel"),i=Symbol("pino.levelVal"),o=Symbol("pino.useLevelLabels"),a=Symbol("pino.changeLevelName"),c=Symbol("pino.useOnlyCustomLevels"),l=Symbol("pino.mixin"),u=Symbol("pino.lsCache"),f=Symbol("pino.chindings"),h=Symbol("pino.parsedChindings"),d=Symbol("pino.asJson"),p=Symbol("pino.write"),m=Symbol("pino.redactFmt"),y=Symbol("pino.time"),g=Symbol("pino.timeSliceIndex"),b=Symbol("pino.stream"),v=Symbol("pino.stringify"),S=Symbol("pino.stringifiers"),w=Symbol("pino.end"),O=Symbol("pino.formatOpts"),j=Symbol("pino.messageKey"),_=Symbol("pino.nestedKey"),L=Symbol("pino.wildcardFirst"),x=Symbol.for("pino.serializers"),k=Symbol.for("pino.*"),E=Symbol.for("pino.metadata");e.exports={setLevelSym:n,getLevelSym:s,levelValSym:i,useLevelLabelsSym:o,mixinSym:l,lsCacheSym:u,chindingsSym:f,parsedChindingsSym:h,asJsonSym:d,writeSym:p,serializersSym:x,redactFmtSym:m,timeSym:y,timeSliceIndexSym:g,streamSym:b,stringifySym:v,stringifiersSym:S,endSym:w,formatOptsSym:O,messageKeySym:j,nestedKeySym:_,wildcardFirstSym:L,changeLevelNameSym:a,wildcardGsym:k,needsMetadataGsym:E,useOnlyCustomLevelsSym:c}},function(e,t,r){"use strict";e.exports=/[^.[\]]+|\[((?:.)*?)\]/g},function(e,t,r){"use strict";e.exports=function(e){return e}},function(e,t,r){"use strict";const n=r(27),{mapHttpRequest:s,mapHttpResponse:i}=r(4),o=r(7),a=r(28),{lsCacheSym:c,chindingsSym:l,parsedChindingsSym:u,writeSym:f,serializersSym:h,formatOptsSym:d,endSym:p,stringifiersSym:m,stringifySym:y,wildcardFirstSym:g,needsMetadataGsym:b,wildcardGsym:v,redactFmtSym:S,streamSym:w,nestedKeySym:O}=r(0);function j(){}function _(e){var t="",r=0,n=!1,s=255;const i=e.length;if(i>100)return JSON.stringify(e);for(var o=0;o<i&&s>=32;o++)34!==(s=e.charCodeAt(o))&&92!==s||(t+=e.slice(r,o)+"\\",r=o,n=!0);return n?t+=e.slice(r):t=e,s<32?JSON.stringify(e):'"'+t+'"'}function L(e,t,n){if(t&&"function"==typeof t)return x(t(e),n);try{var s=r(!function(){var e=new Error("Cannot find module 'pino-pretty'");throw e.code="MODULE_NOT_FOUND",e}());return s.asMetaWrapper=x,x(s(e),n)}catch(e){throw Error("Missing `pino-pretty` module: `pino-pretty` must be installed separately")}}function x(e,t){var r=!1;return{[b]:!0,lastLevel:0,lastMsg:null,lastObj:null,lastLogger:null,flushSync(){r||(r=!0,t.write(e(Object.assign({level:40,msg:"pino.final with prettyPrint does not support flushing",time:Date.now()},this.chindings()))))},chindings(){const e=this.lastLogger;var t=null;return e?(e.hasOwnProperty(u)?t=e[u]:(t=JSON.parse('{"v":1'+e[l]+"}"),e[u]=t),t):null},write(r){const n=this.lastLogger,s=this.chindings();var i=this.lastTime;i.match(/^\d+/)&&(i=parseInt(i));var o=this.lastObj;const a=Object.assign({level:this.lastLevel,time:i},s,o,null),c=n[h],l=Object.keys(c);for(var u,f=0;f<l.length;f++)void 0!==a[u=l[f]]&&(a[u]=c[u](a[u]));const d=n[m][S],p=e("function"==typeof d?d(a):a);void 0!==p&&t.write(p)}}}function k(e,t=0,r=!0){const n=new o(e,t,r);return n.on("error",(function e(t){if("EPIPE"===t.code)return n.write=j,n.end=j,n.flushSync=j,void(n.destroy=j);n.removeListener("error",e),n.emit("error",t)})),n}e.exports={noop:j,buildSafeSonicBoom:k,getPrettyStream:L,asChindings:function(e,t){if(!t)throw Error("missing bindings for child Pino");var r,n,s=e[l];const i=e[y],o=e[m],a=e[h];for(r in a[v]&&(t=a[v](t)),t){if(n=t[r],!0===("level"!==r&&"serializers"!==r&&"customLevels"!==r&&t.hasOwnProperty(r)&&void 0!==n)){if(n=a[r]?a[r](n):n,void 0===(n=(o[r]||i)(n)))continue;s+=',"'+r+'":'+n}}return s},asJson:function(e,t,r){const n=this[y],s=this[m],i=this[p],o=this[l],a=this[h];var u,f=this[c][t]+r;f+=o;var d=void 0===e.hasOwnProperty;a[v]&&(e=a[v](e));const b=s[g];for(var S in e)if(u=e[S],(d||e.hasOwnProperty(S))&&void 0!==u){u=a[S]?a[S](u):u;const e=s[S]||b;switch(typeof u){case"undefined":case"function":continue;case"number":!1===Number.isFinite(u)&&(u=null);case"boolean":e&&(u=e(u));break;case"string":u=(e||_)(u);break;default:u=(e||n)(u)}if(void 0===u)continue;f+=',"'+S+'":'+u}return f+i},genLog:function(e){return function(t,...r){"object"==typeof t&&null!==t?(t.method&&t.headers&&t.socket?t=s(t):"function"==typeof t.setHeader&&(t=i(t)),this[O]&&(t={[this[O]]:t}),this[f](t,n(null,r,this[d]),e)):this[f](null,n(t,r,this[d]),e)}},createArgsNormalizer:function(e){return function(t={},r){if("string"==typeof t?(r=k(t),t={}):"string"==typeof r?r=k(r):(t instanceof o||t.writable||t._writableState)&&(r=t,t=null),"extreme"in(t=Object.assign({},e,t)))throw Error("The extreme option has been removed, use pino.extreme instead");if("onTerminated"in t)throw Error("The onTerminated option has been removed, use pino.final instead");const{enabled:n,prettyPrint:s,prettifier:i,messageKey:a}=t;if(!1===n&&(t.level="silent"),(r=r||process.stdout)===process.stdout&&r.fd>=0&&!function(e){return e.write!==e.constructor.prototype.write}(r)&&(r=k(r.fd)),s){r=L(Object.assign({messageKey:a},s),i,r)}return{opts:t,stream:r}}},final:function(e,t){if(void 0===e||"function"!=typeof e.child)throw Error("expected a pino logger instance");const r=void 0!==t;if(r&&"function"!=typeof t)throw Error("if supplied, the handler parameter should be a function");const n=e[w];if("function"!=typeof n.flushSync)throw Error("final requires a stream that has a flushSync method, such as pino.destination and pino.extreme");const s=new Proxy(e,{get:(e,t)=>t in e.levels.values?(...r)=>{e[t](...r),n.flushSync()}:e[t]});return r?(e=null,...r)=>{try{n.flushSync()}catch(e){}return t(e,s,...r)}:s},stringify:function(e){try{return JSON.stringify(e)}catch(t){return a(e)}}}},function(e,t,r){"use strict";var n=r(12),s=r(13),i=r(14);e.exports={err:n,mapHttpRequest:s.mapHttpRequest,mapHttpResponse:i.mapHttpResponse,req:s.reqSerializer,res:i.resSerializer,wrapErrorSerializer:function(e){return e===n?e:function(t){return e(n(t))}},wrapRequestSerializer:function(e){return e===s.reqSerializer?e:function(t){return e(s.reqSerializer(t))}},wrapResponseSerializer:function(e){return e===i.resSerializer?e:function(t){return e(i.resSerializer(t))}}}},function(e,t,r){"use strict";function n(e,t,r,n,s){var i,o,a,c,l,u=-1,f=r.length,h=f-1,d=null,p=!0;if(a=i=e[t],"object"!=typeof i)return{value:null,parent:null,exists:p};for(;null!=i&&++u<f;){if(d=a,!((t=r[u])in i)){p=!1;break}if(a=i[t],o=s?n(a):n,o=u!==h?a:o,i[t]=(c=i,l=t,Object.prototype.hasOwnProperty.call(c,l)&&o===a||void 0===o&&void 0!==n?i[t]:o),"object"!=typeof(i=i[t]))break}return{value:a,parent:d,exists:p}}function s(e,t){for(var r=-1,n=t.length,s=e;null!=s&&++r<n;)s=s[t[r]];return s}e.exports={groupRedact:function(e,t,r,n){const i=s(e,t);if(null==i)return{keys:null,values:null,target:null,flat:!0};const o=Object.keys(i),a=o.length,c=new Array(a);for(var l=0;l<a;l++){const e=o[l];c[l]=i[e],i[e]=n?r(i[e]):r}return{keys:o,values:c,target:i,flat:!0}},groupRestore:function({keys:e,values:t,target:r}){if(null==r)return;const n=e.length;for(var s=0;s<n;s++){const n=e[s];r[n]=t[s]}},nestedRedact:function(e,t,r,i,o,a){const c=s(t,r);if(null==c)return;const l=Object.keys(c),u=l.length;for(var f=0;f<u;f++){const t=l[f],{value:r,parent:s,exists:u}=n(c,t,i,o,a);!0===u&&null!==s&&e.push({key:i[i.length-1],target:s,value:r})}return e},nestedRestore:function(e){const t=e.length;for(var r=0;r<t;r++){const{key:t,target:n,value:s}=e[r];n[t]=s}}}},function(e,t){e.exports=require("events")},function(e,t,r){"use strict";const n=r(25),s=r(6),i=r(2),o=r(26).inherits;function a(e,t){t._opening=!0,t._writing=!0,t.file=e,n.open(e,"a",(e,r)=>{if(e)t.emit("error",e);else if(t.fd=r,t._reopening=!1,t._opening=!1,t._writing=!1,t.emit("ready"),!t._reopening){var n=t._buf.length;n>0&&n>t.minLength&&!t.destroyed&&u(t)}})}function c(e,t,r){if(!(this instanceof c))return new c(e,t,r);if(this._buf="",this.fd=-1,this._writing=!1,this._writingBuf="",this._ending=!1,this._reopening=!1,this._asyncDrainScheduled=!1,this.file=null,this.destroyed=!1,this.sync=r||!1,this.minLength=t||0,"number"==typeof e)this.fd=e,process.nextTick(()=>this.emit("ready"));else{if("string"!=typeof e)throw new Error("SonicBoom supports only file descriptors and files");a(e,this)}this.release=(e,t)=>{if(e)return"EAGAIN"===e.code?void setTimeout(()=>{n.write(this.fd,this._writingBuf,"utf8",this.release)},100):void this.emit("error",e);if(this._writingBuf.length!==t){if(this._writingBuf=this._writingBuf.slice(t),!this.sync)return void n.write(this.fd,this._writingBuf,"utf8",this.release);try{do{t=n.writeSync(this.fd,this._writingBuf,"utf8"),this._writingBuf=this._writingBuf.slice(t)}while(0!==this._writingBuf.length)}catch(e){return void this.release(e)}}if(this._writingBuf="",!this.destroyed){var r=this._buf.length;this._reopening?(this._writing=!1,this._reopening=!1,this.reopen()):r>0&&r>this.minLength?u(this):this._ending?r>0?u(this):(this._writing=!1,f(this)):(this._writing=!1,this.sync?this._asyncDrainScheduled||(this._asyncDrainScheduled=!0,process.nextTick(l,this)):this.emit("drain"))}}}function l(e){e._asyncDrainScheduled=!1,e.emit("drain")}function u(e){e._writing=!0;var t=e._buf,r=e.release;if(t.length>16777216?(t=t.slice(0,16777216),e._buf=e._buf.slice(16777216)):e._buf="",i(t),e._writingBuf=t,e.sync)try{r(null,n.writeSync(e.fd,t,"utf8"))}catch(e){r(e)}else n.write(e.fd,t,"utf8",r)}function f(e){-1!==e.fd?(n.close(e.fd,t=>{t?e.emit("error",t):(e._ending&&!e._writing&&e.emit("finish"),e.emit("close"))}),e.destroyed=!0,e._buf=""):e.once("ready",f.bind(null,e))}o(c,s),c.prototype.write=function(e){if(this.destroyed)throw new Error("SonicBoom destroyed");this._buf+=e;var t=this._buf.length;return!this._writing&&t>this.minLength&&u(this),t<16384},c.prototype.flush=function(){if(this.destroyed)throw new Error("SonicBoom destroyed");this._writing||this.minLength<=0||u(this)},c.prototype.reopen=function(e){if(this.destroyed)throw new Error("SonicBoom destroyed");if(this._opening)this.once("ready",()=>{this.reopen(e)});else if(!this._ending){if(!this.file)throw new Error("Unable to reopen a file descriptor, you must pass a file to SonicBoom");this._reopening=!0,this._writing||(n.close(this.fd,e=>{if(e)return this.emit("error",e)}),a(e||this.file,this))}},c.prototype.end=function(){if(this.destroyed)throw new Error("SonicBoom destroyed");this._opening?this.once("ready",()=>{this.end()}):this._ending||(this._ending=!0,!this._writing&&this._buf.length>0&&this.fd>=0?u(this):this._writing||f(this))},c.prototype.flushSync=function(){if(this.destroyed)throw new Error("SonicBoom destroyed");if(this.fd<0)throw new Error("sonic boom is not ready yet");this._buf.length>0&&(n.writeSync(this.fd,this._buf,"utf8"),this._buf="")},c.prototype.destroy=function(){this.destroyed||f(this)},e.exports=c},function(e,t,r){"use strict";const n=r(2),{lsCacheSym:s,levelValSym:i,useLevelLabelsSym:o,changeLevelNameSym:a,useOnlyCustomLevelsSym:c,streamSym:l}=r(0),{noop:u,genLog:f}=r(3),h={trace:10,debug:20,info:30,warn:40,error:50,fatal:60},d=f(h.fatal),p={fatal(...e){const t=this[l];if(d.call(this,...e),"function"==typeof t.flushSync)try{t.flushSync()}catch(e){}},error:f(h.error),warn:f(h.warn),info:f(h.info),debug:f(h.debug),trace:f(h.trace)},m=Object.keys(h).reduce((e,t)=>(e[h[t]]=t,e),{}),y=Object.keys(m).reduce((e,t)=>(e[t]=n('{"level":'+Number(t)),e),{});function g(e,t){if(t)return!1;switch(e){case"fatal":case"error":case"warn":case"info":case"debug":case"trace":return!0;default:return!1}}e.exports={initialLsCache:y,genLsCache:function(e){const t=e[a];return e[s]=Object.keys(e.levels.labels).reduce((r,s)=>(r[s]=e[o]?`{"${t}":"${e.levels.labels[s]}"`:n(`{"${t}":`+Number(s)),r),Object.assign({},e[s])),e},levelMethods:p,getLevel:function(e){const{levels:t,levelVal:r}=this;return t.labels[r]},setLevel:function(e){const{labels:t,values:r}=this.levels;if("number"==typeof e){if(void 0===t[e])throw Error("unknown level value"+e);e=t[e]}if(void 0===r[e])throw Error("unknown level "+e);const n=this[i],s=this[i]=r[e],o=this[c];for(var a in r)s>r[a]?this[a]=u:this[a]=g(a,o)?p[a]:f(r[a]);this.emit("level-change",e,s,t[n],n)},isLevelEnabled:function(e){const{values:t}=this.levels,r=t[e];return void 0!==r&&r>=this[i]},mappings:function(e=null,t=!1){const r=e?Object.keys(e).reduce((t,r)=>(t[e[r]]=r,t),{}):null;return{labels:Object.assign(Object.create(Object.prototype,{Infinity:{value:"silent"}}),t?null:m,r),values:Object.assign(Object.create(Object.prototype,{silent:{value:1/0}}),t?null:h,e)}},assertNoLevelCollisions:function(e,t){const{labels:r,values:n}=e;for(const e in t){if(e in n)throw Error("levels cannot be overridden");if(t[e]in r)throw Error("pre-existing level values cannot be used for new levels")}},assertDefaultLevelFound:function(e,t,r){if("number"==typeof e){if(![].concat(Object.keys(t||{}).map(e=>t[e]),r?[]:Object.keys(m).map(e=>+e),1/0).includes(e))throw Error(`default level:${e} must be included in custom levels`);return}if(!(e in Object.assign(Object.create(Object.prototype,{silent:{value:1/0}}),r?null:h,t)))throw Error(`default level:${e} must be included in custom levels`)}}},function(e,t,r){"use strict";const{version:n}=r(29);e.exports={version:n,LOG_VERSION:1}},function(e,t,r){"use strict";const n=r(11),s=r(4),i=r(15),o=r(23),a=r(24),c=r(0),{assertDefaultLevelFound:l,mappings:u,genLsCache:f}=r(8),{createArgsNormalizer:h,asChindings:d,final:p,stringify:m,buildSafeSonicBoom:y}=r(3),{version:g,LOG_VERSION:b}=r(9),{chindingsSym:v,redactFmtSym:S,serializersSym:w,timeSym:O,timeSliceIndexSym:j,streamSym:_,stringifySym:L,stringifiersSym:x,setLevelSym:k,endSym:E,formatOptsSym:R,messageKeySym:N,nestedKeySym:P,useLevelLabelsSym:$,changeLevelNameSym:z,mixinSym:C,useOnlyCustomLevelsSym:T}=c,{epochTime:A,nullTime:B}=o,{pid:I}=process,q=n.hostname(),D=s.err,J={level:"info",useLevelLabels:!1,messageKey:"msg",nestedKey:null,enabled:!0,prettyPrint:!1,base:{pid:I,hostname:q},serializers:Object.assign(Object.create(null),{err:D}),timestamp:A,name:void 0,redact:null,customLevels:null,changeLevelName:"level",useOnlyCustomLevels:!1},F=h(J),M=Object.assign(Object.create(null),s);function H(...e){const{opts:t,stream:r}=F(...e),{redact:n,crlf:s,serializers:o,timestamp:c,messageKey:h,nestedKey:p,base:y,name:g,level:I,customLevels:q,useLevelLabels:D,changeLevelName:M,mixin:H,useOnlyCustomLevels:G}=t,V=n?i(n,m):{},K=n?{stringify:V[S]}:{stringify:m},U=',"v":'+b+"}"+(s?"\r\n":"\n"),X=d.bind(null,{[v]:"",[w]:o,[x]:V,[L]:m}),Q=null===y?"":X(void 0===g?y:Object.assign({},y,{name:g})),Z=c instanceof Function?c:c?A:B,W=Z().indexOf(":")+1;if(G&&!q)throw Error("customLevels is required if useOnlyCustomLevels is set true");if(H&&"function"!=typeof H)throw Error(`Unknown mixin type "${typeof H}" - expected "function"`);l(I,q,G);const Y={levels:u(q,G),[$]:D,[z]:M,[T]:G,[_]:r,[O]:Z,[j]:W,[L]:m,[x]:V,[E]:U,[R]:K,[N]:h,[P]:p,[w]:o,[C]:H,[v]:Q};return Object.setPrototypeOf(Y,a),(q||D||M!==J.changeLevelName)&&f(Y),Y[k](I),Y}H.extreme=(e=process.stdout.fd)=>y(e,4096,!1),H.destination=(e=process.stdout.fd)=>y(e,0,!0),H.final=p,H.levels=u(),H.stdSerializers=M,H.stdTimeFunctions=Object.assign({},o),H.symbols=c,H.version=g,H.LOG_VERSION=b,e.exports=H},function(e,t){e.exports=require("os")},function(e,t,r){"use strict";e.exports=function e(t){if(!(t instanceof Error))return t;t[n]=void 0;const r=Object.create(i);r.type=t.constructor.name,r.message=t.message,r.stack=t.stack;for(const s in t)if(void 0===r[s]){const i=t[s];i instanceof Error?i.hasOwnProperty(n)||(r[s]=e(i)):r[s]=i}return delete t[n],r.raw=t,r};const n=Symbol("circular-ref-tag"),s=Symbol("pino-raw-err-ref"),i=Object.create({},{type:{enumerable:!0,writable:!0,value:void 0},message:{enumerable:!0,writable:!0,value:void 0},stack:{enumerable:!0,writable:!0,value:void 0},raw:{enumerable:!1,get:function(){return this[s]},set:function(e){this[s]=e}}});Object.defineProperty(i,s,{writable:!0,value:{}})},function(e,t,r){"use strict";e.exports={mapHttpRequest:function(e){return{req:i(e)}},reqSerializer:i};var n=Symbol("pino-raw-req-ref"),s=Object.create({},{id:{enumerable:!0,writable:!0,value:""},method:{enumerable:!0,writable:!0,value:""},url:{enumerable:!0,writable:!0,value:""},headers:{enumerable:!0,writable:!0,value:{}},remoteAddress:{enumerable:!0,writable:!0,value:""},remotePort:{enumerable:!0,writable:!0,value:""},raw:{enumerable:!1,get:function(){return this[n]},set:function(e){this[n]=e}}});function i(e){var t=e.info||e.connection;const r=Object.create(s);return r.id="function"==typeof e.id?e.id():e.id||(e.info?e.info.id:void 0),r.method=e.method,e.originalUrl?r.url=e.originalUrl:r.url=e.url?e.url.path||e.url:void 0,r.headers=e.headers,r.remoteAddress=t&&t.remoteAddress,r.remotePort=t&&t.remotePort,r.raw=e.raw||e,r}Object.defineProperty(s,n,{writable:!0,value:{}})},function(e,t,r){"use strict";e.exports={mapHttpResponse:function(e){return{res:i(e)}},resSerializer:i};var n=Symbol("pino-raw-res-ref"),s=Object.create({},{statusCode:{enumerable:!0,writable:!0,value:0},headers:{enumerable:!0,writable:!0,value:""},raw:{enumerable:!1,get:function(){return this[n]},set:function(e){this[n]=e}}});function i(e){const t=Object.create(s);return t.statusCode=e.statusCode,t.headers=e.getHeaders?e.getHeaders():e._headers,t.raw=e,t}Object.defineProperty(s,n,{writable:!0,value:{}})},function(e,t,r){"use strict";const n=r(16),{redactFmtSym:s,wildcardFirstSym:i}=r(0),{rx:o,validator:a}=n,c=a({ERR_PATHS_MUST_BE_STRINGS:()=>"pino – redacted paths must be strings",ERR_INVALID_PATH:e=>`pino – redact paths array contains an invalid path (${e})`}),l="[Redacted]";e.exports=function(e,t){const{paths:r,censor:a}=function(e){if(Array.isArray(e))return c(e={paths:e,censor:l}),e;var{paths:t,censor:r=l,remove:n}=e;if(!1===Array.isArray(t))throw Error("pino – redact must contain an array of strings");!0===n&&(r=void 0);return c({paths:t,censor:r}),{paths:t,censor:r}}(e),u=r.reduce((e,t)=>{o.lastIndex=0;const r=o.exec(t),n=o.exec(t);let s=void 0!==r[1]?r[1].replace(/^(?:"|'|`)(.*)(?:"|'|`)$/,"$1"):r[0];if("*"===s&&(s=i),null===n)return e[s]=null,e;if(null===e[s])return e;const{index:a}=n,c=`${t.substr(a,t.length-1)}`;return e[s]=e[s]||[],s!==i&&0===e[s].length&&e[s].push(...e[i]||[]),s===i&&Object.keys(e).forEach((function(t){e[t]&&e[t].push(c)})),e[s].push(c),e},{}),f={[s]:n({paths:r,censor:a,serialize:t,strict:!1})},h=(...e)=>t("function"==typeof a?a(...e):a);return[...Object.keys(u),...Object.getOwnPropertySymbols(u)].reduce((e,r)=>(null===u[r]?e[r]=h:e[r]=n({paths:u[r],censor:a,serialize:t,strict:!1}),e),f)}},function(e,t,r){"use strict";const n=r(17),s=r(19),i=r(20),o=r(21),{groupRedact:a,nestedRedact:c}=r(5),l=r(22),u=r(1),f=n(),h=e=>e;h.restore=h;function d(e={}){const t=Array.from(new Set(e.paths||[])),r="serialize"in e?!1===e.serialize?e.serialize:"function"==typeof e.serialize?e.serialize:JSON.stringify:JSON.stringify,n=e.remove;if(!0===n&&r!==JSON.stringify)throw Error("fast-redact – remove option may only be set when serializer is JSON.stringify");const u=!0===n?void 0:"censor"in e?e.censor:"[REDACTED]",d="function"==typeof u;if(0===t.length)return r||h;f({paths:t,serialize:r,censor:u});const{wildcards:p,wcLen:m,secret:y}=s({paths:t,censor:u}),g=o({secret:y,wcLen:m}),b=!("strict"in e)||e.strict;return i({secret:y,wcLen:m,serialize:r,strict:b,isCensorFct:d},l({secret:y,censor:u,compileRestore:g,serialize:r,groupRedact:a,nestedRedact:c,wildcards:p,wcLen:m}))}d.rx=u,d.validator=n,e.exports=d},function(e,t,r){"use strict";const{createContext:n,runInContext:s}=r(18);e.exports=function(e={}){const{ERR_PATHS_MUST_BE_STRINGS:t=(()=>"fast-redact - Paths must be strings"),ERR_INVALID_PATH:r=(e=>`fast-redact – Invalid path (${e})`)}=e;return function({paths:e}){e.forEach(e=>{if("string"!=typeof e)throw Error(t());try{if(/〇/.test(e))throw Error();const t=new Proxy({},{get:()=>t,set:()=>{throw Error()}}),r=("["===e[0]?"":".")+e.replace(/^\*/,"〇").replace(/\.\*/g,".〇").replace(/\[\*\]/g,"[〇]");if(/\n|\r|;/.test(r))throw Error();if(/\/\*/.test(r))throw Error();s(`\n          (function () {\n            'use strict'\n            o${r}\n            if ([o${r}].length !== 1) throw Error()\n          })()\n        `,n({o:t,"〇":null}),{codeGeneration:{strings:!1,wasm:!1}})}catch(t){throw Error(r(e))}})}}},function(e,t){e.exports=require("vm")},function(e,t,r){"use strict";const n=r(1);e.exports=function({paths:e}){const t=[];var r=0;const s=e.reduce((function(e,s,i){var o=s.match(n).map(e=>e.replace(/'|"|`/g,""));const a="["===s[0],c=(o=o.map(e=>"["===e[0]?e.substr(1,e.length-2):e)).indexOf("*");if(c>-1){const e=o.slice(0,c),n=e.join("."),s=o.slice(c+1,o.length);if(s.indexOf("*")>-1)throw Error("fast-redact – Only one wildcard per path is supported");const i=s.length>0;r++,t.push({before:e,beforeStr:n,after:s,nested:i})}else e[s]={path:o,val:void 0,precensored:!1,circle:"",escPath:JSON.stringify(s),leadingBracket:a};return e}),{});return{wildcards:t,wcLen:r,secret:s}}},function(e,t,r){"use strict";const n=r(1);e.exports=function({secret:e,serialize:t,wcLen:r,strict:s,isCensorFct:i},o){const a=Function("o",`\n    if (typeof o !== 'object' || o == null) {\n      ${function(e,t){return!0===e?"throw Error('fast-redact: primitives cannot be redacted')":!1===t?"return o":"return this.serialize(o)"}(s,t)}\n    }\n    const { censor, secret } = this\n    ${function(e,t){return Object.keys(e).map(r=>{const{escPath:s,leadingBracket:i}=e[r],o=i?1:0,a=i?"":".",c=[];for(var l;null!==(l=n.exec(r));){const[,e]=l,{index:t,input:r}=l;t>o&&c.push(r.substring(0,t-(e?0:1)))}var u=c.map(e=>`o${a}${e}`).join(" && ");0===u.length?u+=`o${a}${r} != null`:u+=` && o${a}${r} != null`;const f=`\n      switch (true) {\n        ${c.reverse().map(e=>`\n          case o${a}${e} === censor:\n            secret[${s}].circle = ${JSON.stringify(e)}\n            break\n        `).join("\n")}\n      }\n    `;return`\n      if (${u}) {\n        const val = o${a}${r}\n        if (val === censor) {\n          secret[${s}].precensored = true\n        } else {\n          secret[${s}].val = val\n          o${a}${r} = ${t?"censor(val)":"censor"}\n          ${f}\n        }\n      }\n    `}).join("\n")}(e,i)}\n    this.compileRestore()\n    ${function(e,t){return!0===e?`\n    {\n      const { wildcards, wcLen, groupRedact, nestedRedact } = this\n      for (var i = 0; i < wcLen; i++) {\n        const { before, beforeStr, after, nested } = wildcards[i]\n        if (nested === true) {\n          secret[beforeStr] = secret[beforeStr] || []\n          nestedRedact(secret[beforeStr], o, before, after, censor, ${t})\n        } else secret[beforeStr] = groupRedact(o, before, censor, ${t})\n      }\n    }\n  `:""}(r>0,i)}\n    ${function(e){return!1===e?"return o":"\n    var s = this.serialize(o)\n    this.restore(o)\n    return s\n  "}(t)}\n  `).bind(o);!1===t&&(a.restore=e=>o.restore(e));return a}},function(e,t,r){"use strict";const{groupRestore:n,nestedRestore:s}=r(5);e.exports=function({secret:e,wcLen:t}){return function(){if(this.restore)return;const r=Object.keys(e).filter(t=>!1===e[t].precensored),i=function(e,t){return t.map(t=>{const{circle:r,escPath:n,leadingBracket:s}=e[t];return`\n      if (secret[${n}].val !== undefined) {\n        try { ${r?`o.${r} = secret[${n}].val`:`o${s?"":"."}${t} = secret[${n}].val`} } catch (e) {}\n        ${`secret[${n}].val = undefined`}\n      }\n    `}).join("")}(e,r),o=t>0,a=o?{secret:e,groupRestore:n,nestedRestore:s}:{secret:e};this.restore=Function("o",function(e,t,r){const n=!0===r?`\n    const keys = Object.keys(secret)\n    const len = keys.length\n    for (var i = ${t.length}; i < len; i++) {\n      const k = keys[i]\n      const o = secret[k]\n      if (o.flat === true) this.groupRestore(o)\n      else this.nestedRestore(o)\n      secret[k] = null\n    }\n  `:"";return`\n    const secret = this.secret\n    ${e}\n    ${n}\n    return o\n  `}(i,r,o)).bind(a)}}},function(e,t,r){"use strict";e.exports=function(e){const{secret:t,censor:r,isCensorFct:n,compileRestore:s,serialize:i,groupRedact:o,nestedRedact:a,wildcards:c,wcLen:l}=e,u=[{secret:t,censor:r,isCensorFct:n,compileRestore:s}];u.push({secret:t}),!1!==i&&u.push({serialize:i});l>0&&u.push({groupRedact:o,nestedRedact:a,wildcards:c,wcLen:l});return Object.assign(...u)}},function(e,t,r){"use strict";e.exports={nullTime:()=>"",epochTime:()=>`,"time":${Date.now()}`,unixTime:()=>`,"time":${Math.round(Date.now()/1e3)}`,isoTime:()=>`,"time":"${new Date(Date.now()).toISOString()}"`}},function(e,t,r){"use strict";const{EventEmitter:n}=r(6),s=r(7),i=r(2),{lsCacheSym:o,levelValSym:a,setLevelSym:c,getLevelSym:l,chindingsSym:u,mixinSym:f,asJsonSym:h,messageKeySym:d,writeSym:p,timeSym:m,timeSliceIndexSym:y,streamSym:g,serializersSym:b,useOnlyCustomLevelsSym:v,needsMetadataGsym:S}=r(0),{getLevel:w,setLevel:O,isLevelEnabled:j,mappings:_,initialLsCache:L,genLsCache:x,assertNoLevelCollisions:k}=r(8),{asChindings:E,asJson:R}=r(3),{version:N,LOG_VERSION:P}=r(9),$={constructor:class{},child:function(e){const{level:t}=this,r=this[b],n=E(this,e),s=Object.create(this);if(!0===e.hasOwnProperty("serializers")){for(var i in s[b]=Object.create(null),r)s[b][i]=r[i];const t=Object.getOwnPropertySymbols(r);for(var o=0;o<t.length;o++){const e=t[o];s[b][e]=r[e]}for(var a in e.serializers)s[b][a]=e.serializers[a];const n=Object.getOwnPropertySymbols(e.serializers);for(var l=0;l<n.length;l++){const t=n[l];s[b][t]=e.serializers[t]}}else s[b]=r;!0===e.hasOwnProperty("customLevels")&&(k(this.levels,e.customLevels),s.levels=_(e.customLevels,s[v]),x(s));s[u]=n;const f=e.level||t;return s[c](f),s},bindings:function(){var e=`{${this[u].substr(1)}}`,t=JSON.parse(e);return delete t.pid,delete t.hostname,t},setBindings:function(e){const t=E(this,e);this[u]=t},flush:function(){const e=this[g];"flush"in e&&e.flush()},isLevelEnabled:j,version:N,get level(){return this[l]()},set level(e){return this[c](e)},get levelVal(){return this[a]},set levelVal(e){throw Error("levelVal is read-only")},[o]:L,[p]:function(e,t,r){const n=this[m](),o=this[d],a=this[f],c=e instanceof Error;var l;null==e?(l=a?a():{})[o]=t:(l=Object.assign(a?a():{},e),t?l[o]=t:c&&(l[o]=e.message),c&&(l.stack=e.stack,l.type||(l.type="Error")));const u=this[h](l,r,n),p=this[g];!0===p[S]&&(p.lastLevel=r,p.lastMsg=t,p.lastObj=l,p.lastTime=n.slice(this[y]),p.lastLogger=this);p instanceof s?p.write(u):p.write(i(u))},[h]:R,[l]:w,[c]:O,LOG_VERSION:P};Object.setPrototypeOf($,n.prototype),e.exports=$},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("util")},function(e,t,r){"use strict";function n(e){try{return JSON.stringify(e)}catch(e){return'"[Circular]"'}}e.exports=function(e,t,r){var s=r&&r.stringify||n,i=1;null===e&&(e=t[0],i=0);if("object"==typeof e&&null!==e){var o=t.length+i;if(1===o)return e;var a=new Array(o);a[0]=s(e);for(var c=1;c<o;c++)a[c]=s(t[c]);return a.join(" ")}var l=t.length;if(0===l)return e;for(var u="",f="",h=1-i,d=0,p=e&&e.length||0,m=0;m<p;){if(37===e.charCodeAt(m)&&m+1<p){switch(e.charCodeAt(m+1)){case 100:if(h>=l)break;if(d<m&&(f+=e.slice(d,m)),null==t[h])break;f+=Number(t[h]),d=m+=2;break;case 79:case 111:case 106:if(h>=l)break;if(d<m&&(f+=e.slice(d,m)),void 0===t[h])break;var y=typeof t[h];if("string"===y){f+="'"+t[h]+"'",d=m+2,m++;break}if("function"===y){f+=t[h].name||"<anonymous>",d=m+2,m++;break}f+=s(t[h]),d=m+2,m++;break;case 115:if(h>=l)break;d<m&&(f+=e.slice(d,m)),f+=String(t[h]),d=m+2,m++;break;case 37:d<m&&(f+=e.slice(d,m)),f+="%",d=m+2,m++}++h}++m}0===d?f=e:d<p&&(f+=e.slice(d));for(;h<l;)u=t[h++],f+=null===u||"object"!=typeof u?" "+String(u):" "+s(u);return f}},function(e,t){e.exports=s,s.default=s,s.stable=o,s.stableStringify=o;var r=[],n=[];function s(e,t,s){var i;for(!function e(t,s,i,o){var a;if("object"==typeof t&&null!==t){for(a=0;a<i.length;a++)if(i[a]===t){var c=Object.getOwnPropertyDescriptor(o,s);return void(void 0!==c.get?c.configurable?(Object.defineProperty(o,s,{value:"[Circular]"}),r.push([o,s,t,c])):n.push([t,s]):(o[s]="[Circular]",r.push([o,s,t])))}if(i.push(t),Array.isArray(t))for(a=0;a<t.length;a++)e(t[a],a,i,t);else{var l=Object.keys(t);for(a=0;a<l.length;a++){var u=l[a];e(t[u],u,i,t)}}i.pop()}}(e,"",[],void 0),i=0===n.length?JSON.stringify(e,t,s):JSON.stringify(e,a(t),s);0!==r.length;){var o=r.pop();4===o.length?Object.defineProperty(o[0],o[1],o[3]):o[0][o[1]]=o[2]}return i}function i(e,t){return e<t?-1:e>t?1:0}function o(e,t,s){var o,c=function e(t,s,o,a){var c;if("object"==typeof t&&null!==t){for(c=0;c<o.length;c++)if(o[c]===t){var l=Object.getOwnPropertyDescriptor(a,s);return void(void 0!==l.get?l.configurable?(Object.defineProperty(a,s,{value:"[Circular]"}),r.push([a,s,t,l])):n.push([t,s]):(a[s]="[Circular]",r.push([a,s,t])))}if("function"==typeof t.toJSON)return;if(o.push(t),Array.isArray(t))for(c=0;c<t.length;c++)e(t[c],c,o,t);else{var u={},f=Object.keys(t).sort(i);for(c=0;c<f.length;c++){var h=f[c];e(t[h],h,o,t),u[h]=t[h]}if(void 0===a)return u;r.push([a,s,t]),a[s]=u}o.pop()}}(e,"",[],void 0)||e;for(o=0===n.length?JSON.stringify(c,t,s):JSON.stringify(c,a(t),s);0!==r.length;){var l=r.pop();4===l.length?Object.defineProperty(l[0],l[1],l[3]):l[0][l[1]]=l[2]}return o}function a(e){return e=void 0!==e?e:function(e,t){return t},function(t,r){if(n.length>0)for(var s=0;s<n.length;s++){var i=n[s];if(i[1]===t&&i[0]===r){r="[Circular]",n.splice(s,1);break}}return e.call(this,t,r)}}},function(e){e.exports=JSON.parse('{"_from":"pino","_id":"pino@5.16.0","_inBundle":false,"_integrity":"sha512-k9cDzHd9S/oYSQ9B9g9+7RXkfsZX78sQXERC8x4p2XArECZXULx9nqNwZvJHsLj779wPCt+ybN+dG8jFR70p6Q==","_location":"/pino","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"pino","name":"pino","escapedName":"pino","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/pino/-/pino-5.16.0.tgz","_shasum":"94d01cb38b5f4a16dd4d7c47aa489fbfe40c3c06","_spec":"pino","_where":"/home/user/node-project-template","author":{"name":"Matteo Collina","email":"hello@matteocollina.com"},"bin":{"pino":"bin.js"},"browser":"./browser.js","bugs":{"url":"https://github.com/pinojs/pino/issues"},"bundleDependencies":false,"contributors":[{"name":"David Mark Clements","email":"huperekchuno@googlemail.com"},{"name":"James Sumners","email":"james.sumners@gmail.com"},{"name":"Thomas Watson Steen","email":"w@tson.dk","url":"https://twitter.com/wa7son"}],"dependencies":{"fast-redact":"^2.0.0","fast-safe-stringify":"^2.0.7","flatstr":"^1.0.12","pino-std-serializers":"^2.4.2","quick-format-unescaped":"^3.0.3","sonic-boom":"^0.7.5"},"deprecated":false,"description":"super fast, all natural json logger","devDependencies":{"airtap":"2.0.2","benchmark":"^2.1.4","bole":"^3.0.2","bunyan":"^1.8.12","cross-env":"^5.2.1","docsify-cli":"^4.2.1","execa":"^1.0.0","fastbench":"^1.0.1","flush-write-stream":"^2.0.0","import-fresh":"^3.0.0","log":"^5.0.0","loglevel":"^1.6.4","pino-pretty":"^2.6.1","pre-commit":"^1.2.2","proxyquire":"^2.1.3","pump":"^3.0.0","qodaa":"^1.0.1","semver":"^6.3.0","snazzy":"^8.0.0","split2":"^3.1.1","standard":"^14.2.0","steed":"^1.1.3","tap":"^12.7.0","tape":"^4.11.0","through2":"^3.0.1","winston":"^3.2.1"},"files":["pino.js","bin.js","browser.js","pretty.js","usage.txt","test","docs","example.js","lib"],"homepage":"http://getpino.io","keywords":["fast","logger","stream","json"],"license":"MIT","main":"pino.js","name":"pino","precommit":"test","repository":{"type":"git","url":"git+https://github.com/pinojs/pino.git"},"scripts":{"bench":"node benchmarks/utils/runbench all","bench-basic":"node benchmarks/utils/runbench basic","bench-child":"node benchmarks/utils/runbench child","bench-child-child":"node benchmarks/utils/runbench child-child","bench-child-creation":"node benchmarks/utils/runbench child-creation","bench-deep-object":"node benchmarks/utils/runbench deep-object","bench-longs-tring":"node benchmarks/utils/runbench long-string","bench-multi-arg":"node benchmarks/utils/runbench multi-arg","bench-object":"node benchmarks/utils/runbench object","browser-test":"airtap --local 8080 test/browser*test.js","ci":"standard | snazzy && cross-env TAP_TIMEOUT=480000 NODE_OPTIONS=\\"--no-warnings -r qodaa\\" tap --no-esm -j 4 --100 test/*test.js","cov-ci":"cross-env TAP_TIMEOUT=480000 NODE_OPTIONS=\\"--no-warnings -r qodaa\\" tap --no-esm -j 4 --100 --coverage-report=lcov test/*test.js","cov-ui":"cross-env NODE_OPTIONS=\\"--no-warnings -r qodaa\\" tap --no-esm -j 4 --coverage-report=html test/*test.js","docs":"docsify serve","test":"standard | snazzy && cross-env NODE_OPTIONS=\\"--no-warnings -r qodaa\\" tap --no-esm -j 4 --no-cov test/*test.js","update-bench-doc":"node benchmarks/utils/generate-benchmark-doc > docs/benchmarks.md"},"version":"5.16.0"}')},function(e,t,r){"use strict";r.r(t);var n=r(10);const s=n({name:"hello"}),i=e=>new Promise(t=>setTimeout(t,e));!async function(){const e=1+2;if(Object.fromEntries([["a","b"]])===(1n+2n===3n))return"foobar"+e;for(;;)s.warn("warning :D"),await i(6e4)}()}]);
//# sourceMappingURL=production.js.map