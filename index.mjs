// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function l(a){var j,f,p,h,c,u,v;if(!r(a))throw new TypeError(m("01Z2O",a));if(arguments.length>1){if(!t(h=arguments[1]))throw new TypeError(m("01Z2H",h));j=arguments[2]}return v=-1,e(f={},"next",h?function(){if(v+=1,p||v>=a.length)return{done:!0};return{value:h.call(j,c(a,v),v,a),done:!1}}:function(){if(v+=1,p||v>=a.length)return{done:!0};return{value:c(a,v),done:!1}}),e(f,"return",(function(e){if(p=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),n&&e(f,n,(function(){if(h)return l(a,h,j);return l(a)})),u=d(a),c=s(a)?i(u):o(u),f}export{l as default};
//# sourceMappingURL=index.mjs.map
