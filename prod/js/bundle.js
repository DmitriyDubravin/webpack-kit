!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(2),r=e(3),c=e(4);e(1),Object(o.a)({".header":["test"]},[r.a,c.a],!0)},function(n,t){},function(n,t,e){"use strict";function o(n){if(Array.isArray(n)){for(var t=0,e=Array(n.length);t<n.length;t++)e[t]=n[t];return e}return Array.from(n)}function r(n,t){function e(t){c.forEach(function(e){i[e]?(r&&console.log("+ "+e+" --\x3e "+n[e]),n[e].forEach(function(n){t.forEach(function(t){t[n]()})})):r&&console.log("- "+e)})}var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=[];for(var u in n)n.hasOwnProperty(u)&&c.push(u);var i={};c.forEach(function(n,r,u){var a=n.slice(0,1).toLowerCase(),f=[].concat(o(document.querySelectorAll(c.join(",")))).some(function(t){return"."===a?(" "+t.className+" ").indexOf(" "+n.slice(1)+" ")>-1:"#"===a?t.id.indexOf(n.slice(1))>-1:"["===a?t.hasAttribute(n.slice(1,-1)):t.tagName.indexOf(n)>-1});i[n]=f,r===u.length-1&&e(t)})}t.a=r},function(n,t,e){"use strict";t.a={test:function(){console.log("functions 1 plugged In")}}},function(n,t,e){"use strict";t.a={test:function(){console.log("functions 2 plugged In")}}}]);