// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,n=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,r="function"==typeof e?e.toStringTag:"",l=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,l,f,i,a;if(null==t)return o.call(t);l=t[r],a=r,e=null!=(i=t)&&n.call(i,a);try{t[r]=void 0}catch(n){return o.call(t)}return f=o.call(t),e?t[r]=l:delete t[r],f}:function(t){return o.call(t)},f="function"==typeof Float32Array,i=Number.POSITIVE_INFINITY,a="function"==typeof Float32Array?Float32Array:null,u="function"==typeof Float32Array?Float32Array:void 0,y=function(){var t,o,n;if("function"!=typeof a)return!1;try{o=new a([1,3.14,-3.14,5e40]),n=o,t=(f&&n instanceof Float32Array||"[object Float32Array]"===l(n))&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===i}catch(o){t=!1}return t}()?u:function(){throw new Error("not implemented")};function c(t){var o=new y(2);return o[0]=t.re,o[1]=t.im,o}return function(t,o){var n=c(t),e=c(o);return n[0]!==e[0]||n[1]!==e[1]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).isNotEqualf=o();
//# sourceMappingURL=browser.js.map