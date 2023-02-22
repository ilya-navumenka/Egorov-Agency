/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.classes=e,this.modal="",this.modalContent="",this.modalTitle="",this.modalText="",this.modalBtn="",this.modalCloseBtn="",this.overlay=""}var n,r;return n=t,r=[{key:"buildModal",value:function(t){this.overlay=this.createDomNode(this.overlay,"div","overlay","overlay_modal"),this.modal=this.createDomNode(this.modal,"div","modal",this.classes),this.modalContent=this.createDomNode(this.modalContent,"div","modal__content"),this.modalTitle=this.createDomNode(this.modalTitle,"div","modal__title"),this.modalTitle.innerHTML="<h2>SUCCESS!</h2>",this.modalText=this.createDomNode(this.modalText,"div","modal__text"),this.modalText.innerHTML="<p>You have successfully subscribed to the email newsletter</p>",this.modalBtn=this.createDomNode(this.modalText,"div","modal__btn"),this.modalBtn.innerHTML='<a href="#">Close</a>',this.modalCloseBtn=this.createDomNode(this.modalCloseBtn,"div","modal__close-icon"),this.modalCloseBtn.innerHTML='<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#2F281E"/></svg>',this.setContent(t),this.appendModalElements(),this.bindEvents(),this.openModal()}},{key:"createDomNode",value:function(t,e){var n;t=document.createElement(e);for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return(n=t.classList).add.apply(n,o),t}},{key:"setContent",value:function(t){"string"==typeof t?this.modalContent.innerHTML=t:(this.modalContent.innerHTML="",this.modalContent.appendChild(t))}},{key:"appendModalElements",value:function(){this.modal.append(this.modalCloseBtn),this.modal.append(this.modalTitle),this.modal.append(this.modalText),this.modal.append(this.modalBtn),this.modal.append(this.modalContent),this.overlay.append(this.modal)}},{key:"bindEvents",value:function(){this.modalCloseBtn.addEventListener("click",this.closeModal),this.overlay.addEventListener("click",this.closeModal)}},{key:"openModal",value:function(){document.body.append(this.overlay)}},{key:"closeModal",value:function(t){t.target.classList.contains("modal")||document.querySelector(".overlay").remove()}}],r&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},l=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),l=new k(r||[]);return i(a,"_invoke",{value:x(t,n,l)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var f={};function m(){}function v(){}function p(){}var y={};u(y,l,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(T([])));w&&w!==e&&n.call(w,l)&&(y=w);var b=p.prototype=m.prototype=Object.create(y);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(i,a,l,c){var s=d(t[i],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==r(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,l,c)}),(function(t){o("throw",t,l,c)})):e.resolve(h).then((function(t){u.value=t,l(u)}),(function(t){return o("throw",t,l,c)}))}c(s.arg)}var a;i(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function x(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=E(a,n);if(l){if(l===f)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=d(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function E(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return v.prototype=p,i(b,"constructor",{value:p,configurable:!0}),i(p,"constructor",{value:v,configurable:!0}),v.displayName=u(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new _(h(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(b),u(b,s,"Generator"),u(b,l,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=T,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function i(t,e,n,r,o,i,a){try{var l=t[i](a),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(r,o)}window.onload=function(){a()};var a=function(){document.querySelector(".form__button").addEventListener("click",(function(){l()}))},l=function(){c("")},c=function(t){new n("tools-modal").buildModal(t)};document.addEventListener("DOMContentLoaded",(function(){var t=new Date("May 31 2023 00:00:00"),e=document.querySelector(".time__days .time__val"),n=document.querySelector(".time__hours .time__val"),r=document.querySelector(".time__minutes .time__val"),o=document.querySelector(".time__seconds .time__val"),i=function(){var i=new Date,a=t-i,l=Math.floor(a/1e3/60/60/24),c=Math.floor(a/1e3/60/60)%24,s=Math.floor(a/1e3/60)%60,u=Math.floor(a/1e3)%60;e.textContent=l,n.textContent=c,r.textContent=s,o.textContent=u};i(),setInterval(i,1e3)})),document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("form");function e(){var r;return r=o().mark((function e(r){var i,a,l,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),i=n(),a=new FormData(t),0!==i){e.next=21;break}return t.classList.add("_sending"),e.next=7,fetch(sendmail.php,{method:"POST",body:a});case 7:if(!(l=e.sent).ok){e.next=17;break}return e.next=11,l.json();case 11:c=e.sent,alert(c.message),t.reset(),t.classList.remove("_sending"),e.next=19;break;case 17:alert("Ошибка"),t.classList.remove("_sending");case 19:e.next=22;break;case 21:console.log("Заполни обязательные поля");case 22:case"end":return e.stop()}}),e)})),e=function(){var t=this,e=arguments;return new Promise((function(n,o){var a=r.apply(t,e);function l(t){i(a,n,o,l,c,"next",t)}function c(t){i(a,n,o,l,c,"throw",t)}l(void 0)}))},e.apply(this,arguments)}function n(t){for(var e=document.querySelectorAll("._req"),n=0;n<e.length;n++){var o=e[n];a(o),o.classList.contains("_email")?l(o)&&r(o):""===o.value&&r(o)}}function r(t){t.parentElement.classList.add("_error"),t.classList.add("_error")}function a(t){t.parentElement.classList.remove("_error"),t.classList.remove("_error")}function l(t){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.value)}t.addEventListener("submit",(function(t){return e.apply(this,arguments)}))}))})()})();