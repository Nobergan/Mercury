(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(e,t,i){},QfWi:function(e,t,i){"use strict";i.r(t);i("1DEj"),i("kFVz"),i("l9uQ"),i("JBxO"),i("FdtR"),i("wcNg");function n(e,t,i,n,a,r,s){try{var o=e[r](s),c=o.value}catch(e){return void i(e)}o.done?t(c):Promise.resolve(c).then(n,a)}function a(e){return function(){var t=this,i=arguments;return new Promise((function(a,r){var s=e.apply(t,i);function o(e){n(s,a,r,o,c,"next",e)}function c(e){n(s,a,r,o,c,"throw",e)}o(void 0)}))}}var r=document.querySelector("#myVideo"),s=document.querySelector(".play-btn__img");function o(){return(o=a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.play();case 3:s.classList.add("is-hidden"),r.controls="controls",e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s.classList.remove("playing");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}s.addEventListener("click",(function(){r.paused?function(){o.apply(this,arguments)}():r.pause()}),!1);var c=document.querySelector(".play-btn__img-desktop");function u(){return(u=a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.play();case 3:c.classList.add("is-hidden"),r.controls="controls",e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c.classList.remove("playing");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}c.addEventListener("click",(function(){r.paused?function(){u.apply(this,arguments)}():r.pause()}),!1)},kFVz:function(e,t){var i,n;i=document.querySelector("[data-menu-button]"),n=document.querySelector("[data-menu]"),i.addEventListener("click",(function(){var e="true"===i.getAttribute("aria-expanded")||!1;i.classList.toggle("is-open"),i.setAttribute("aria-expanded",!e),n.classList.toggle("is-open")}))},l9uQ:function(e,t){var i=document.querySelector("#name"),n=document.querySelector("#surname"),a=document.querySelector("#email"),r=document.querySelector("#phone"),s=document.querySelector(".form__button");s.addEventListener("click",(function(e){e.preventDefault(),s.style.boxShadow="none",i.value?(i.classList.remove("invalid"),i.classList.add("valid")):(i.classList.add("invalid"),iziToast.error({timeout:"2000",message:"Write your name!",position:"topRight"}));n.value?(n.classList.remove("invalid"),n.classList.add("valid")):(n.classList.add("invalid"),iziToast.error({timeout:"2000",message:"Write your surname!",position:"topRight"}));a.value?/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(a.value)?(a.classList.remove("invalid"),a.classList.add("valid")):(a.classList.add("invalid"),iziToast.error({timeout:"2000",message:"Wrong E-mail!",position:"topRight"})):(a.classList.add("invalid"),iziToast.error({timeout:"2000",message:"Write your E-mail!",position:"topRight"}));r.value?/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(r.value)?(r.classList.remove("invalid"),r.classList.add("valid")):(r.classList.add("invalid"),iziToast.error({timeout:"2000",message:"Wrong phone number!",position:"topRight"})):(r.classList.add("invalid"),iziToast.error({timeout:"2000",message:"Write your phone number!",position:"topRight"}))}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.cdbdf533ab5bc5b2550c.js.map