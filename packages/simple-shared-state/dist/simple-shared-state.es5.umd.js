!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleSharedState=e():t.SimpleSharedState=e()}(Function("return this")(),(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return u(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,e,n){return(u=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e);var l=[].shift,s=[].pop,p=Array.isArray,y=new Number,h=function(t){function e(t,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=o(this,a(e).call(this)),"number"!=typeof t?o(r):(r[t]=n,r)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),e}(i(Array));h.prototype.isPartial=!0;var d=function t(e,n){return e&&n&&"object"===r(e)?(Object.keys(n).forEach((function(r){n[r]===s&&p(e[r])?e[r]=e[r].slice(0,e[r].length-1):n[r]===l&&p(e[r])?e[r]=e[r].slice(1,e[r].length):n[r]!==y?p(n[r])?n[r].isPartial?e[r]=t(e[r],n[r]):e[r]=n[r].slice():e[r]=t(e[r],n[r]):delete e[r]})),e):n};function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var m=Object.getPrototypeOf({}),g=function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;w(this,t);var i,c=v({},n),u=!1,f=new Map,a=new Map,h=new Set,b=function(t){u=!0,c=v({},c),d(c,t),f.forEach((function(e,n){var r,o=a.get(n);try{switch(r=n(t)){case o:return;case y:return void(void 0!==o&&i(void 0));case s:case l:return void i(n(c));case void 0:return void(r=n(c))}}catch(t){try{return void n(c)}catch(t){}}function i(t){a.set(n,t),e(t)}r!==o&&(p(r)&&!r.isPartial?i(r):i(d(o,r)))})),h.forEach((function(t){return t()})),u=!1};if(o&&o.connect&&"function"==typeof o.connect&&((i=o.connect()).subscribe((function(t){"DISPATCH"===t.type&&"JUMP_TO_STATE"===t.payload.type&&b(JSON.parse(t.state))})),i.init(c)),this.dispatch=function(t,n){if("string"!=typeof t)throw new Error("dispatch actionName must be a string");if(u)throw new Error("can't dispatch while dispatching");var r="function"==typeof n?n(e.getState()):n;if(!r||Object.getPrototypeOf(r)!==m)throw new Error("dispatch expects plain object");b(r),i&&i.send(t,e.getState())},this.watch=function(t,e){if("function"!=typeof t||"function"!=typeof e)throw new Error("selector and handler must be functions");if(f.has(t))throw new Error("Cannot reuse selector");var n;try{n=t(c)}catch(t){}return f.set(t,e),a.set(t,n),function(){f.delete(t),a.delete(t)}},this.watchBatch=function(t,n){if(!t||"function"!=typeof t.forEach)throw new Error("selectors must be a list of functions");if("function"!=typeof n)throw new Error("handler is not a function");var r=[],o=0,i=!1;t.forEach((function(n){if("function"!=typeof n)throw t.forEach((function(t){return f.delete(t)})),new Error("selector must be a function");var u=o++;try{r[u]=n(c)}catch(t){r[u]=void 0}e.watch(n,(function(t){r[u]=t,i=!0}))}));var u=function(){i&&(n(r.slice()),i=!1)};return h.add(u),n(r.slice()),function(){h.delete(u),t.forEach((function(t){return f.delete(t)}))}},this.watchDispatch=function(t){if("function"!=typeof t)throw new Error("handler must be a function");return h.add(t),function(){return h.delete(t)}},this.getState=function(t){if(t&&"function"==typeof t){var e;try{e=O(t(c))}catch(t){}return e}return v({},c)},this.actions={},r&&"function"==typeof r){var g=r(this);Object.keys(g).forEach((function(t){var n=i?"".concat(t,"()"):"";e.actions[t]=function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];e.dispatch(n,g[t].apply(null,o))}}))}},S=function(t,e){return new h(t,e)};function O(t){return t&&"object"===b(t)?v(p(t)?[]:{},t):t}n.d(e,"createStore",(function(){return j})),n.d(e,"partialArray",(function(){return S})),n.d(e,"deleted",(function(){return y}));var j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new g(t,e,n)}}])}));