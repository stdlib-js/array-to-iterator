// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function l(a){var j,p,h,c,v,f,u;if(!r(a))throw new TypeError(m("01Z2O,GW",a));if(arguments.length>1){if(!t(c=arguments[1]))throw new TypeError(m("01Z2H,G6",c));j=arguments[2]}return u=-1,e(p={},"next",c?g:b),e(p,"return",x),n&&e(p,n,y),f=d(a),v=s(a)?i(f):o(f),p;function g(){return u+=1,h||u>=a.length?{done:!0}:{value:c.call(j,v(a,u),u,a),done:!1}}function b(){return u+=1,h||u>=a.length?{done:!0}:{value:v(a,u),done:!1}}function x(e){return h=!0,arguments.length?{value:e,done:!0}:{done:!0}}function y(){return c?l(a,c,j):l(a)}}export{l as default};
//# sourceMappingURL=index.mjs.map