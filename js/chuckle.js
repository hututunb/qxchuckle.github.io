function FixedCardWidget(t,e,n){if("id"===t)var o=document.getElementById(e);else o=document.getElementsByClassName(e)[n];o&&(o.className.indexOf("fixed-card-widget")>-1?RemoveFixedCardWidget():(RemoveFixedCardWidget(),CreateQuitBox(),o.classList.add("fixed-card-widget")))}function CreateQuitBox(){document.getElementById("aside-content").insertAdjacentHTML("beforebegin",'<div id="quit-box" onclick="RemoveFixedCardWidget()"></div>')}function RemoveFixedCardWidget(){var t=document.querySelectorAll(".fixed-card-widget");if(t)for(i=0;i<t.length;i++)t[i].classList.remove("fixed-card-widget");var e=document.getElementById("quit-box");e&&e.remove()}function refreshCache(){"serviceWorker"in window.navigator&&navigator.serviceWorker.controller?confirm("是否确定刷新全站缓存")&&navigator.serviceWorker.controller.postMessage("refresh"):GLOBAL_CONFIG.Snackbar?btf.snackbarShow("ServiceWorker未激活,请刷新浏览器"):alert("ServiceWorker未激活,请刷新浏览器")}RemoveFixedCardWidget(),navigator.serviceWorker.addEventListener("message",(t=>{"success"===t.data&&window.location.reload(!0)}));let kk={showRightMenu:function(t,e=0,n=0){let o=$("#rightMenu");o.css("top",e+"px").css("left",n+"px"),t?o.show():o.hide()},switchDarkMode:function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)},copySelect:function(){document.execCommand("Copy",!1,null),GLOBAL_CONFIG.Snackbar?btf.snackbarShow("你的剪切板已被窝占领惹~"):console.log("你的剪切板已被窝占领惹~")},scrollToTop:function(){btf.scrollToDest(0,500)}};if(!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)){let t=$("#rightMenu").width(),e=$("#rightMenu").height();window.oncontextmenu=function(n){if(n.ctrlKey)return!0;$(".rightMenu-group.hide").hide(),document.getSelection().toString()&&$("#menu-text").show();let o=n.clientX+10,r=n.clientY;return o+t>window.innerWidth&&(o-=t),r+e>window.innerHeight&&(r-=e),kk.showRightMenu(!0,r,o),!1}}function getNowURL(){return location.protocol+"//"+location.host+location.pathname}window.addEventListener("click",(function(){kk.showRightMenu(!1)})),$("#menu-backward").on("click",(function(){window.history.back()})),$("#menu-forward").on("click",(function(){window.history.forward()})),$("#menu-refresh").on("click",(function(){window.location.reload()})),$("#menu-darkmode").on("click",kk.switchDarkMode),$("#menu-top").on("click",kk.scrollToTop),$("#menu-home").on("click",(function(){window.location.href=window.location.origin})),
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 */
function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,(function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return k}});var o=n(279),r=n.n(o),i=n(370),c=n.n(i),a=n(817),u=n.n(a);function l(t){try{return document.execCommand(t)}catch(t){return!1}}var d=function(t){var e=u()(t);return l("cut"),e};function s(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(o,"px"),n.setAttribute("readonly",""),n.value=t,n}var f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";if("string"==typeof t){var o=s(t);e.container.appendChild(o),n=u()(o),l("copy"),o.remove()}else n=u()(t),l("copy");return n};function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function v(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function b(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(i,t);var e,n,o,r=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=g(t);if(e){var r=g(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return v(this,n)}}(i);function i(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(n=r.call(this)).resolveOptions(e),n.listenClick(t),n}return e=i,n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=c()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,o=t.container,r=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==r){if(!r||"object"!==m(r)||1!==r.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&r.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(r.hasAttribute("readonly")||r.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?f(i,{container:o}):r?"cut"===n?d(r):f(r,{container:o}):void 0}({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(o?"success":"error",{action:n,text:o,trigger:e,clearSelection:function(){e&&e.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){var e=b("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],o=[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return f(t,e)}},{key:"cut",value:function(t){return d(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}],n&&y(e.prototype,n),o&&y(e,o),i}(r()),k=w},828:function(t){if("undefined"!=typeof Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var o=n(828);function r(t,e,n,o,r){var c=i.apply(this,arguments);return t.addEventListener(n,c,r),{destroy:function(){t.removeEventListener(n,c,r)}}}function i(t,e,n,r){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=function(t,e,n,o,i){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,n,o,i)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var o=n(879),r=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(o.string(t))return function(t,e,n){return r(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,c=o.length;i<c;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(686)}().default}));const clipboard=new ClipboardJS("button#share-link",{text:function(){return document.title+"："+getNowURL()}});function RemoveFixedComment(){var t=document.querySelectorAll(".fixedcomment");if(t)for(i=0;i<t.length;i++)t[i].classList.remove("fixedcomment")}function AddFixedComment(){var t=document.getElementById("post-comment"),e=document.getElementById("quit-board");t.classList.add("fixedcomment"),e.classList.add("fixedcomment")}function CreateQuitBoard(){document.getElementById("post-comment").insertAdjacentHTML("beforebegin",'<div id="quit-board" onclick="RemoveFixedComment()"></div>')}function FixedCommentBtn(){var t=document.getElementById("post-comment");t&&(t.className.indexOf("fixedcomment")>-1?RemoveFixedComment():(CreateQuitBoard(),AddFixedComment()))}clipboard.on("success",(function(){btf.snackbarShow("成功复制本页的分享链接，快去粘贴吧~")})),clipboard.on("error",(function(){btf.snackbarShow("复制失败")})),kk.copyURL=function(){btf.snackbarShow("成功复制本页的分享链接，快去粘贴吧~"),new ClipboardJS("#share-chuckle",{text:function(){return document.title+"："+getNowURL()}})},$("#share-chuckle").on("click",kk.copyURL),kk.postURL=function(){btf.snackbarShow("成功复制本页的分享链接，快去粘贴吧~"),new ClipboardJS("#share-post",{text:function(){return document.title+"："+getNowURL()}})},RemoveFixedComment();