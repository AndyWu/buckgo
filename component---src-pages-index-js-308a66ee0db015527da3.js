/*! For license information please see component---src-pages-index-js-308a66ee0db015527da3.js.LICENSE.txt */
(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[678],{847:function(e,t){var i,r,n;r=[],void 0===(n="function"==typeof(i=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},i=!t.document&&!!t.postMessage,r=i&&/blob:/i.test((t.location||{}).protocol),n={},s=0,a={parse:function(i,r){var o=(r=r||{}).dynamicTyping||!1;if(b(o)&&(r.dynamicTypingFunction=o,o={}),r.dynamicTyping=o,r.transform=!!b(r.transform)&&r.transform,r.worker&&a.WORKERS_SUPPORTED){var u=function(){if(!a.WORKERS_SUPPORTED)return!1;var i,r,o=(i=t.URL||t.webkitURL||null,r=e.toString(),a.BLOB_URL||(a.BLOB_URL=i.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),u=new t.Worker(o);return u.onmessage=g,u.id=s++,n[u.id]=u}();return u.userStep=r.step,u.userChunk=r.chunk,u.userComplete=r.complete,u.userError=r.error,r.step=b(r.step),r.chunk=b(r.chunk),r.complete=b(r.complete),r.error=b(r.error),delete r.worker,void u.postMessage({input:i,config:r,workerId:u.id})}var d=null;return a.NODE_STREAM_INPUT,"string"==typeof i?d=r.download?new h(r):new l(r):!0===i.readable&&b(i.read)&&b(i.on)?d=new f(r):(t.File&&i instanceof File||i instanceof Object)&&(d=new c(r)),d.stream(i)},unparse:function(e,t){var i=!1,r=!0,n=",",s="\r\n",o='"',u=o+o,h=!1,c=null,l=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(h=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+o),"boolean"==typeof t.escapeFormulae&&(l=t.escapeFormulae)}}();var f=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return m(null,e,h);if("object"==typeof e[0])return m(c||d(e[0]),e,h)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:d(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),m(e.fields||[],e.data||[],h);throw new Error("Unable to serialize unrecognized input");function d(e){if("object"!=typeof e)return[];var t=[];for(var i in e)t.push(i);return t}function m(e,t,i){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(o&&r){for(var h=0;h<e.length;h++)0<h&&(a+=n),a+=g(e[h],h);0<t.length&&(a+=s)}for(var c=0;c<t.length;c++){var l=o?e.length:t[c].length,f=!1,d=o?0===Object.keys(t[c]).length:0===t[c].length;if(i&&!o&&(f="greedy"===i?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===i&&o){for(var p=[],m=0;m<l;m++){var _=u?e[m]:m;p.push(t[c][_])}f=""===p.join("").trim()}if(!f){for(var y=0;y<l;y++){0<y&&!d&&(a+=n);var v=o&&u?e[y]:y;a+=g(t[c][v],y)}c<t.length-1&&(!i||0<l&&!d)&&(a+=s)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===l&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var r=e.toString().replace(f,u);return"boolean"==typeof i&&i||"function"==typeof i&&i(e,t)||Array.isArray(i)&&i[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(r,a.BAD_DELIMITERS)||-1<r.indexOf(n)||" "===r.charAt(0)||" "===r.charAt(r.length-1)?o+r+o:r}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!i&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=m,a.ParserHandle=d,a.NetworkStreamer=h,a.FileStreamer=c,a.StringStreamer=l,a.ReadableStreamStreamer=f,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var i=e.config||{},r=[];return this.each((function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)r.push({file:this.files[n],inputElem:this,instanceConfig:o.extend({},i)})})),n(),this;function n(){if(0!==r.length){var t,i,n,u,h=r[0];if(b(e.before)){var c=e.before(h.file,h.inputElem);if("object"==typeof c){if("abort"===c.action)return t="AbortError",i=h.file,n=h.inputElem,u=c.reason,void(b(e.error)&&e.error({name:t},i,n,u));if("skip"===c.action)return void s();"object"==typeof c.config&&(h.instanceConfig=o.extend(h.instanceConfig,c.config))}else if("skip"===c)return void s()}var l=h.instanceConfig.complete;h.instanceConfig.complete=function(e){b(l)&&l(e,h.file,h.inputElem),s()},a.parse(h.file,h.instanceConfig)}else b(e.complete)&&e.complete()}function s(){r.splice(0,1),n()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new d(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,i){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);void 0!==n&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=o.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),o&&o.data&&(this._rowCount+=o.data.length);var h=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(r)t.postMessage({results:o,workerId:a.WORKER_ID,finished:h});else if(b(this._config.chunk)&&!i){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!h||!b(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),h||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){b(this._config.error)?this._config.error(e):r&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function h(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),u.call(this,e),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),i||(t.onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)t.setRequestHeader(r,e[r])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}i&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var i=t.statusText||e;this._sendError(new Error(i))}}function c(e){var t,i;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),u.call(this,e);var r="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,i=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=i.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);r||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function l(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,i=this._config.chunkSize;return i?(e=t.substring(0,i),t=t.substring(i)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function f(e){u.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=k((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=k((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=k((function(){this._streamCleanUp(),r=!0,this._streamData("")}),this),this._streamCleanUp=k((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function d(e){var t,i,r,n=Math.pow(2,53),s=-n,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,h=this,c=0,l=0,f=!1,d=!1,g=[],_={data:[],errors:[],meta:{}};if(b(e.step)){var y=e.step;e.step=function(t){if(_=t,R())E();else{if(E(),0===_.data.length)return;c+=t.data.length,e.preview&&c>e.preview?i.abort():(_.data=_.data[0],y(_,h))}}}function k(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function E(){if(_&&r&&(T("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines)for(var t=0;t<_.data.length;t++)k(_.data[t])&&_.data.splice(t--,1);return R()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;R()&&t<_.data.length;t++)_.data[t].forEach(i);_.data.splice(0,1)}else _.data.forEach(i);function i(t,i){b(e.transformHeader)&&(t=e.transformHeader(t,i)),g.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,i){var r,n=e.header?{}:[];for(r=0;r<t.length;r++){var s=r,a=t[r];e.header&&(s=r>=g.length?"__parsed_extra":g[r]),e.transform&&(a=e.transform(a,s)),a=S(s,a),"__parsed_extra"===s?(n[s]=n[s]||[],n[s].push(a)):n[s]=a}return e.header&&(r>g.length?T("FieldMismatch","TooManyFields","Too many fields: expected "+g.length+" fields but parsed "+r,l+i):r<g.length&&T("FieldMismatch","TooFewFields","Too few fields: expected "+g.length+" fields but parsed "+r,l+i)),n}var i=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),i=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=g),l+=i,_}()}function R(){return e.header&&0===g.length}function S(t,i){return r=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[r]&&(e.dynamicTyping[r]=e.dynamicTypingFunction(r)),!0===(e.dynamicTyping[r]||e.dynamicTyping)?"true"===i||"TRUE"===i||"false"!==i&&"FALSE"!==i&&(function(e){if(o.test(e)){var t=parseFloat(e);if(s<t&&t<n)return!0}return!1}(i)?parseFloat(i):u.test(i)?new Date(i):""===i?null:i):i;var r}function T(e,t,i,r){var n={type:e,code:t,message:i};void 0!==r&&(n.row=r),_.errors.push(n)}this.parse=function(n,s,o){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),r=(e=e.replace(i,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<r[0].length;if(1===r.length||s)return"\n";for(var a=0,o=0;o<r.length;o++)"\n"===r[o][0]&&a++;return a>=r.length/2?"\r\n":"\r"}(n,u)),r=!1,e.delimiter)b(e.delimiter)&&(e.delimiter=e.delimiter(n),_.meta.delimiter=e.delimiter);else{var h=function(t,i,r,n,s){var o,u,h,c;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var l=0;l<s.length;l++){var f=s[l],d=0,p=0,g=0;h=void 0;for(var _=new m({comments:n,delimiter:f,newline:i,preview:10}).parse(t),y=0;y<_.data.length;y++)if(r&&k(_.data[y]))g++;else{var v=_.data[y].length;p+=v,void 0!==h?0<v&&(d+=Math.abs(v-h),h=v):h=v}0<_.data.length&&(p/=_.data.length-g),(void 0===u||d<=u)&&(void 0===c||c<p)&&1.99<p&&(u=d,o=f,c=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);h.successful?e.delimiter=h.bestDelimiter:(r=!0,e.delimiter=a.DefaultDelimiter),_.meta.delimiter=e.delimiter}var c=v(e);return e.preview&&e.header&&c.preview++,t=n,i=new m(c),_=i.parse(t,s,o),E(),f?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return f},this.pause=function(){f=!0,i.abort(),t=b(e.chunk)?"":t.substring(i.getCharIndex())},this.resume=function(){h.streamer._halted?(f=!1,h.streamer.parseChunk(t,!0)):setTimeout(h.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,i.abort(),_.meta.aborted=!0,b(e.complete)&&e.complete(_),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t,i=(e=e||{}).delimiter,r=e.newline,n=e.comments,s=e.step,o=e.preview,u=e.fastMode,h=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(h=e.escapeChar),("string"!=typeof i||-1<a.BAD_DELIMITERS.indexOf(i))&&(i=","),n===i)throw new Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var c=0,l=!1;this.parse=function(e,a,f){if("string"!=typeof e)throw new Error("Input must be a string");var d=e.length,m=i.length,g=r.length,_=n.length,y=b(s),v=[],k=[],E=[],R=c=0;if(!e)return B();if(u||!1!==u&&-1===e.indexOf(t)){for(var S=e.split(r),T=0;T<S.length;T++){if(E=S[T],c+=E.length,T!==S.length-1)c+=r.length;else if(f)return B();if(!n||E.substring(0,_)!==n){if(y){if(v=[],P(E.split(i)),M(),l)return B()}else P(E.split(i));if(o&&o<=T)return v=v.slice(0,o),B(!0)}}return B()}for(var w=e.indexOf(i,c),C=e.indexOf(r,c),x=new RegExp(p(h)+p(t),"g"),O=e.indexOf(t,c);;)if(e[c]!==t)if(n&&0===E.length&&e.substring(c,c+_)===n){if(-1===C)return B();c=C+g,C=e.indexOf(r,c),w=e.indexOf(i,c)}else{if(-1!==w&&(w<C||-1===C)){if(!(w<O)){E.push(e.substring(c,w)),c=w+m,w=e.indexOf(i,c);continue}var D=z(w,O,C);if(D&&void 0!==D.nextDelim){w=D.nextDelim,O=D.quoteSearch,E.push(e.substring(c,w)),c=w+m,w=e.indexOf(i,c);continue}}if(-1===C)break;if(E.push(e.substring(c,C)),F(C+g),y&&(M(),l))return B();if(o&&v.length>=o)return B(!0)}else for(O=c,c++;;){if(-1===(O=e.indexOf(t,O+1)))return f||k.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:v.length,index:c}),L();if(O===d-1)return L(e.substring(c,O).replace(x,t));if(t!==h||e[O+1]!==h){if(t===h||0===O||e[O-1]!==h){-1!==w&&w<O+1&&(w=e.indexOf(i,O+1)),-1!==C&&C<O+1&&(C=e.indexOf(r,O+1));var A=U(-1===C?w:Math.min(w,C));if(e[O+1+A]===i){E.push(e.substring(c,O).replace(x,t)),e[c=O+1+A+m]!==t&&(O=e.indexOf(t,c)),w=e.indexOf(i,c),C=e.indexOf(r,c);break}var I=U(C);if(e.substring(O+1+I,O+1+I+g)===r){if(E.push(e.substring(c,O).replace(x,t)),F(O+1+I+g),w=e.indexOf(i,c),O=e.indexOf(t,c),y&&(M(),l))return B();if(o&&v.length>=o)return B(!0);break}k.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:v.length,index:c}),O++}}else O++}return L();function P(e){v.push(e),R=c}function U(t){var i=0;if(-1!==t){var r=e.substring(O+1,t);r&&""===r.trim()&&(i=r.length)}return i}function L(t){return f||(void 0===t&&(t=e.substring(c)),E.push(t),c=d,P(E),y&&M()),B()}function F(t){c=t,P(E),E=[],C=e.indexOf(r,c)}function B(e){return{data:v,errors:k,meta:{delimiter:i,linebreak:r,aborted:l,truncated:!!e,cursor:R+(a||0)}}}function M(){s(B()),v=[],k=[]}function z(r,n,s){var a={nextDelim:void 0,quoteSearch:void 0},o=e.indexOf(t,n+1);if(n<r&&r<o&&(o<s||-1===s)){var u=e.indexOf(i,o);if(-1===u)return a;o<u&&(o=e.indexOf(t,o+1)),a=z(u,o,s)}else a={nextDelim:r,quoteSearch:n};return a}},this.abort=function(){l=!0},this.getCharIndex=function(){return c}}function g(e){var t=e.data,i=n[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(b(i.userStep)){for(var a=0;a<t.results.data.length&&(i.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!r);a++);delete t.results}else b(i.userChunk)&&(i.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var i=n[e];b(i.userComplete)&&i.userComplete(t),i.terminate(),delete n[e]}function y(){throw new Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=v(e[i]);return t}function k(e,t){return function(){e.apply(t,arguments)}}function b(e){return"function"==typeof e}return r&&(t.onmessage=function(e){var i=e.data;if(void 0===a.WORKER_ID&&i&&(a.WORKER_ID=i.workerId),"string"==typeof i.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(i.input,i.config),finished:!0});else if(t.File&&i.input instanceof File||i.input instanceof Object){var r=a.parse(i.input,i.config);r&&t.postMessage({workerId:a.WORKER_ID,results:r,finished:!0})}}),(h.prototype=Object.create(u.prototype)).constructor=h,(c.prototype=Object.create(u.prototype)).constructor=c,(l.prototype=Object.create(l.prototype)).constructor=l,(f.prototype=Object.create(u.prototype)).constructor=f,a})?i.apply(t,r):i)||(e.exports=n)},736:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return c}});var r=i(294),n=i(847),s=function(e){var t=new Date(e),i=function(e){return e<10?"0"+e:e};return i(t.getMonth()+1)+"/"+i(t.getDate())+"/"+t.getFullYear()},a=function(e){for(var t=e.currency,i=e.taxRate,r=e.year,n=e.data,a=JSON.parse(JSON.stringify(n)),o={},u=function(e,t,i,r,n,s){return{Timestamp:e,Amount:t,"Time Span":i,Gain:r,"Purchase Price":n,"Sell Price":s}},h=0,c=a.length;h<c;h+=1){var l=a[h].Timestamp.substring(0,4);if(a[h]["Unit Price"]=+a[h]["USD Spot Price at Transaction"],void 0===o[l]&&(o[l]=0),"Sell"===a[h]["Transaction Type"]){var f=+a[h]["Quantity Transacted"];a[h].Bought=[];for(var d=0;d<h;d+=1)if("Buy"===a[d]["Transaction Type"]||"Coinbase Earn"===a[d]["Transaction Type"])if(void 0===a[d].Remaining&&(a[d].Remaining=+a[d]["Quantity Transacted"],a[d].Sold=[]),a[d].Remaining<=0)a[d].Remaining=0;else{var p=(new Date(a[h].Timestamp)-new Date(a[d].Timestamp))/1e3/24/60/60,m=0;f>0&&((a[d].Remaining-f).toFixed(6)>=0?("Buy"===a[d]["Transaction Type"]?m=(a[h]["Unit Price"]-a[d]["Unit Price"])*f:"Coinbase Earn"===a[d]["Transaction Type"]&&(m=a[h]["Unit Price"]*f),a[d].Remaining-=f,a[d].Sold.push(u(a[h].Timestamp,f,p,m,a[d]["Unit Price"]*f,a[h]["Unit Price"]*f)),a[h].Bought.push(u(a[d].Timestamp,f,p,m,a[d]["Unit Price"]*f,a[h]["Unit Price"]*f)),f=0):("Buy"===a[d]["Transaction Type"]?m=(a[h]["Unit Price"]-a[d]["Unit Price"])*a[d].Remaining:"Coinbase Earn"===a[d]["Transaction Type"]&&(m=a[h]["Unit Price"]*a[d].Remaining),f-=a[d].Remaining,a[d].Sold.push(u(a[h].Timestamp,a[d].Remaining,p,m,a[d]["Unit Price"]*a[d].Remaining,a[h]["Unit Price"]*a[d].Remaining)),a[h].Bought.push(u(a[d].Timestamp,a[d].Remaining,p,m,a[d]["Unit Price"]*a[d].Remaining,a[h]["Unit Price"]*a[d].Remaining)),a[d].Remaining=0),o[l]+=+m)}}}var g=r,_=a.filter((function(e){return"USDC"!==e.Asset})).filter((function(e){return e.Asset===t})).filter((function(e){return+e.Timestamp.substring(0,4)==+g}));return Object.assign({},function(e){e.taxRate;for(var t=e.data,i="",r=0,n=0,a=0;a<=t.length-1;a+=1){var o=t[a];if("Sell"===o["Transaction Type"])for(var u=0;u<o.Bought.length;u+=1){var h=o.Bought[u];r+=+h["Purchase Price"],n+=h["Sell Price"],i+='"'+o.Asset+'","'+s(h.Timestamp)+'",'+ +h["Purchase Price"]+',"'+s(o.Timestamp)+'",'+h["Sell Price"]+"\n"}}return{records:i,cost:r,proceeds:n}}({taxRate:i,data:_}),{msg:t+" : "+_.length+" records."})},o=function(e){e.currency;var t=e.taxRate,i=void 0===t?.15:t,r=e.year,s=void 0===r?2020:r,o=e.data,u=void 0===o?"":o,h=(0,n.parse)(u,{header:!0}),c=new Set(h.data.map((function(e){return e.Asset}))),l={};return c.forEach((function(e){l[e]=a({currency:e,taxRate:i,year:s,data:h.data})})),{currencies:c,results:l}},u={color:"#232129",padding:10,fontFamily:"-apple-system, Roboto, sans-serif, serif"},h={color:"#ee2222",marginBottom:10},c=function(){var e=r.useState(""),t=e[0],i=e[1],n=r.useState([]),s=n[0],a=n[1],c=r.useState(""),l=c[0],f=c[1];return r.createElement("main",{style:u},r.createElement("title",null,"My first Gatsby app"),r.createElement("a",{href:"https://github.com/AndyWu/buckgo"},"Source Code & Readme"),r.createElement("h1",{style:h},"The code is not tested. Use it at your own risk."),r.createElement("h3",{style:h},"Warning: Once you import the data into TurboTax, the only way to not use the data is to uncheck them one by one. I had to delete my almost done tax return and created a new one. Simply because I didn't have time to uncheck all those test records..."),r.createElement("h3",null,"Clean your Coinbase CSV file and paste it here. The content should look like this..."),r.createElement("textarea",{rows:"20",cols:"100",placeholder:"Timestamp,Transaction Type,Asset,Quantity Transacted,USD Spot Price at Transaction,USD Subtotal,USD Total (inclusive of fees),USD Fees,Notes\n2013-12-12T02:26:51Z,Buy,BTC,1.0,980.91,980.91,990.87,9.96,Bought 1.0000 BTC for $990.87 USD\n",onChange:function(e){var t,r,n,s,u,h,c,l;t=e.target.value,r=[],n="",s=0,u=0,h=o({year:2020,data:t.trim()}),c=h.currencies,l=h.results,c.forEach((function(e){n+=l[e].records,r.push(l[e].msg),s+=l[e].cost,u+=l[e].proceeds})),i('"Currency Name","Purchase Date","Cost Basis","Date sold","Proceeds"\n'+n),a(r),f("Total cost: $"+s+", Total proceeds: $"+u)}}),r.createElement("h3",null,"Copy this to a text editor, save it and import it into TurboTax"),r.createElement("textarea",{rows:"20",cols:"100",defaultValue:t}),r.createElement("h3",null,"Total sell records in 2020"),s.map((function(e){return r.createElement("h3",{key:e},e)})),r.createElement("h3",null,l))}}}]);
//# sourceMappingURL=component---src-pages-index-js-308a66ee0db015527da3.js.map