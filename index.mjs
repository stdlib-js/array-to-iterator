// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function i(d){var l,m,j,a,f,h;if(!r(d))throw new TypeError(o("00m2a",d));if(arguments.length>1){if(!t(a=arguments[1]))throw new TypeError(o("00m2S",a));l=arguments[2]}return h=-1,e(m={},"next",a?p:u),e(m,"return",c),n&&e(m,n,g),f=s(d).getter,m;function p(){return h+=1,j||h>=d.length?{done:!0}:{value:a.call(l,f(d,h),h,d),done:!1}}function u(){return h+=1,j||h>=d.length?{done:!0}:{value:f(d,h),done:!1}}function c(e){return j=!0,arguments.length?{value:e,done:!0}:{done:!0}}function g(){return a?i(d,a,l):i(d)}}export{i as default};
//# sourceMappingURL=index.mjs.map