(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("1DEj"),n("kFVz"),n("l9uQ"),n("JBxO"),n("FdtR"),n("wcNg");function i(e,t,n,i,r,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(i,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){i(a,r,o,s,u,"next",e)}function u(e){i(a,r,o,s,u,"throw",e)}s(void 0)}))}}var o=document.querySelector("#myVideo"),a=document.querySelector(".play-btn__img");function s(){return(s=r(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.play();case 3:a.classList.add("is-hidden"),o.controls="controls",e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a.classList.remove("playing");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(e,t,n,i,r,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(i,r)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function a(e){u(o,i,r,a,s,"next",e)}function s(e){u(o,i,r,a,s,"throw",e)}a(void 0)}))}}a.addEventListener("click",(function(){o.paused?function(){s.apply(this,arguments)}():o.pause()}),!1);var l=document.querySelector("#myVideo"),d=document.querySelector(".play-btn__img-desktop");function p(){return(p=c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.play();case 3:d.classList.add("is-hidden"),l.controls="controls",e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d.classList.remove("playing");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}d.addEventListener("click",(function(){l.paused?function(){p.apply(this,arguments)}():l.pause()}),!1)},kFVz:function(e,t){var n,i;n=document.querySelector("[data-menu-button]"),i=document.querySelector("[data-menu]"),n.addEventListener("click",(function(){var e="true"===n.getAttribute("aria-expanded")||!1;n.classList.toggle("is-open"),n.setAttribute("aria-expanded",!e),i.classList.toggle("is-open")}))},l9uQ:function(e,t){var n=document.querySelector("#name"),i=document.querySelector("#surname"),r=document.querySelector("#email"),o=document.querySelector("#phone"),a=document.querySelector(".form__button");a.addEventListener("click",(function(e){e.preventDefault(),a.style.boxShadow="none",n.value?(n.classList.remove("invalid"),n.classList.add("valid")):(n.classList.add("invalid"),iziToast.error({timeout:"2000",message:"Write your name!",position:"topRight"}));i.value?(i.classList.remove("invalid"),i.classList.add("valid")):(i.classList.add("invalid"),iziToast.error({timeout:"2000",message:"Write your surname!",position:"topRight"}));r.value?/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(r.value)?(r.classList.remove("invalid"),r.classList.add("valid")):(r.classList.add("invalid"),iziToast.error({timeout:"2000",message:"Wrong E-mail!",position:"topRight"})):(r.classList.add("invalid"),iziToast.error({timeout:"2000",message:"Write your E-mail!",position:"topRight"}));o.value?/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(o.value)?(o.classList.remove("invalid"),o.classList.add("valid")):(o.classList.add("invalid"),iziToast.error({timeout:"2000",message:"Wrong phone number!",position:"topRight"})):(o.classList.add("invalid"),iziToast.error({timeout:"2000",message:"Write your phone number!",position:"topRight"}))}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.e4b951a08fd839e920dc.js.map