(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./examples/FullPage.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return y});var r=t("./node_modules/react/index.js"),o=t.n(r),i=t("./node_modules/@mdx-js/tag/dist/index.js"),u=t("./node_modules/lodash/lodash.js"),a=t.n(u),c=t("./src/LiveCode.js");t("./node_modules/prismjs/themes/prism.css");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n){return!n||"object"!==l(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var y=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=f(this,p(n).call(this,e))).layout=null,t}var t,r,u;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,o.a.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components;s(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",components:n},o.a.createElement(c.a,{autoFocus:!0,style:{margin:0,height:"100vh"},scope:{_:a.a},code:"\n    2 ** 3\n    new Map([['key1', 'value1'], ['key2', 'value2']])\n    Object.keys(_)\n  "}))}}])&&d(t.prototype,r),u&&d(t,u),n}();y.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/LiveCode.js":function(e,n,t){"use strict";var r=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),o=t("./node_modules/react/index.js"),i=t.n(o),u=t("./node_modules/pretty-format/build-es5/index.js"),a=t.n(u),c=t("./node_modules/dedent/dist/dedent.js"),l=t.n(c),s=t("./node_modules/is-promise/index.js"),d=t.n(s),f=t("./node_modules/recast/main.js"),p=t.n(f);function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b=function(e){var n=p.a.types.builders,t=0,r=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){y(e,n,t[n])})}return e}({},e,{body:e.body.map(function(e){return"ExpressionStatement"===e.type?(t+=1,n.expressionStatement(n.callExpression(n.identifier("__onexpression__"),[e.expression]))):e})});return[t,r]},v=function(e){var n=m(b(p.a.parse(e).program),2),t=n[0],r=n[1];return[t,p.a.print(r).code]};function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e){var n,t,r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).modules,u=void 0===i||i,a=function(){n&&n.dispose()},c=function(t){var r,i=h(v(e),2),a=i[0],c=i[1];(r=document.createElement("iframe")).hidden=!0,(n={run:function(e){r.onload=function(){e(r.contentWindow)},document.body.appendChild(r)},dispose:function(){r.remove()}}).run(function(e){var n=[],r=0;Object.assign(e,o,{__onexpression__:function(e){n.push(e),(r+=1)===a&&t(null,n)}}),e.addEventListener("error",function(e){e.preventDefault(),t(e.error||new Error(e.message))});var i=e.document,l=i.createElement("script");u&&(l.type="module"),l.textContent=c,i.body.appendChild(l),l.remove()})};if(u){return{values:(t=c,new Promise(function(e,n){return t(function(t,r){return t?n(t):e(r)})})),dispose:a}}try{c(function(e,n){return r=e||n})}catch(l){r=l}return{values:r,dispose:a}};function j(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function O(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=O(Object(o.useState)(null),2),i=r[0],u=r[1],a=Object(o.useMemo)(function(){return g(e,n,t)},[e].concat(j(Object.values(n)),j(Object.values(t)))),c=a.values,l=a.dispose;Object(o.useEffect)(function(){return l},[l]);var s=d()(c);return s&&c.then(u,u),s?i:c},x=t("./node_modules/react-simple-code-editor/lib/index.js"),_=t.n(x),S=t("./node_modules/prismjs/components/prism-core.js"),E=(t("./node_modules/prismjs/components/prism-clike.js"),t("./node_modules/prismjs/components/prism-javascript.js"),function(e){return i.a.createElement(_.a,Object.assign({highlight:function(e){return Object(S.highlight)(e,S.languages.js)}},e))}),k=E;function C(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function P(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}E.__docgenInfo={description:"",methods:[],displayName:"LiveCodeEditor"};var A={test:d.a,serialize:function(e,n,t,r,o,i){return"Promise"}},F=function(e){return a()(e,{min:!0,printFunctionName:!0,plugins:[A]})},I=function(e){var n=e.code,t=void 0===n?"":n,i=e.scope,u=void 0===i?{}:i,a=e.split,c=void 0===a?"horizontal":a,s=e.autoFocus,d=void 0!==s&&s,f=e.modules,p=void 0===f||f,m=P(e,["code","scope","split","autoFocus","modules"]),y=C(Object(o.useState)(function(){return l()(t)}),2),b=y[0],v=y[1],h="vertical"===c,g=function(e){return null==e?" ":Array.isArray(e)?e.length?e.map(function(e,n){return Object(r.e)("div",{key:n},"\u203a ",F(e))}):" ":Object(r.e)("div",null,"\u203a ",F(e))},j=w(b,u,{modules:p});return Object(r.e)("div",Object.assign({css:{display:"flex",justifyContent:"center",margin:"1em auto",maxWidth:"100vw",maxHeight:"100vh",fontSize:"0.85em",lineHeight:"1.45",borderRadius:"3px",boxShadow:"0 1px 5px rgba(0,0,0,.1)",fontFamily:'"Fira code", "Fira Mono", Menlo, Consolas, monospace',flexDirection:h?"column":"row"}},m),Object(r.e)(k,{autoFocus:d,value:b||" ",onValueChange:function(e){return v(e)},padding:10,css:{width:h?"100%":"50%",minHeight:"5em",color:"#222",backgroundColor:"#fafafa",outline:"none",fontSize:"inherit !important",overflow:"auto",borderRadius:h?"0 3px 3px 0":"3px 0 0 3px",textarea:{outline:"none"},".token":{backgroundColor:"inherit!important"}}}),Object(r.e)("pre",{css:{width:h?"100%":"50%",margin:"0",padding:"10px",fontFamily:"inherit",fontWeight:300,color:"#eee",backgroundColor:"#282c34",overflow:"auto",WebkitOverflowScrolling:"auto",borderRadius:h?"0 0 3px 3px":"0 3px 3px 0",boxSizing:"border-box"}},function(e,n){try{return e()}catch(t){return n(t)}}(function(){return g(j)},g)))};n.a=I;I.__docgenInfo={description:"",methods:[],displayName:"LiveCode",props:{code:{defaultValue:{value:"''",computed:!1},required:!1},scope:{defaultValue:{value:"{}",computed:!1},required:!1},split:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},required:!1},modules:{defaultValue:{value:"true",computed:!1},required:!1}}}},1:function(e,n){}}]);
//# sourceMappingURL=examples-full-page.03b3ce754e1171a2099f.js.map