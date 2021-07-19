/*! For license information please see bundle.js.LICENSE.txt */
!function(){var e={537:function(e,t){!function(e){"use strict";var t=function(){function e(e,t,n){this.r=0,this.g=0,this.b=0,this.set(e,t,n)}return e.prototype.set=function(e,t,n){this.r=this.clamp(e),this.g=this.clamp(t),this.b=this.clamp(n)},e.prototype.hueRotate=function(e){void 0===e&&(e=0),e=e/180*Math.PI;var t=Math.sin(e),n=Math.cos(e);this.multiply([.213+.787*n-.213*t,.715-.715*n-.715*t,.072-.072*n+.928*t,.213-.213*n+.143*t,.715+.285*n+.14*t,.072-.072*n-.283*t,.213-.213*n-.787*t,.715-.715*n+.715*t,.072+.928*n+.072*t])},e.prototype.grayscale=function(e){void 0===e&&(e=1),this.multiply([.2126+.7874*(1-e),.7152-.7152*(1-e),.0722-.0722*(1-e),.2126-.2126*(1-e),.7152+.2848*(1-e),.0722-.0722*(1-e),.2126-.2126*(1-e),.7152-.7152*(1-e),.0722+.9278*(1-e)])},e.prototype.sepia=function(e){void 0===e&&(e=1),this.multiply([.393+.607*(1-e),.769-.769*(1-e),.189-.189*(1-e),.349-.349*(1-e),.686+.314*(1-e),.168-.168*(1-e),.272-.272*(1-e),.534-.534*(1-e),.131+.869*(1-e)])},e.prototype.saturate=function(e){void 0===e&&(e=1),this.multiply([.213+.787*e,.715-.715*e,.072-.072*e,.213-.213*e,.715+.285*e,.072-.072*e,.213-.213*e,.715-.715*e,.072+.928*e])},e.prototype.multiply=function(e){var t=this.clamp(this.r*e[0]+this.g*e[1]+this.b*e[2]),n=this.clamp(this.r*e[3]+this.g*e[4]+this.b*e[5]),o=this.clamp(this.r*e[6]+this.g*e[7]+this.b*e[8]);this.r=t,this.g=n,this.b=o},e.prototype.brightness=function(e){void 0===e&&(e=1),this.linear(e)},e.prototype.contrast=function(e){void 0===e&&(e=1),this.linear(e,-.5*e+.5)},e.prototype.linear=function(e,t){void 0===e&&(e=1),void 0===t&&(t=0),this.r=this.clamp(this.r*e+255*t),this.g=this.clamp(this.g*e+255*t),this.b=this.clamp(this.b*e+255*t)},e.prototype.invert=function(e){void 0===e&&(e=1),this.r=this.clamp(255*(e+this.r/255*(1-2*e))),this.g=this.clamp(255*(e+this.g/255*(1-2*e))),this.b=this.clamp(255*(e+this.b/255*(1-2*e)))},e.prototype.hsl=function(){var e=this.r/255,t=this.g/255,n=this.b/255,o=Math.max(e,t,n),r=Math.min(e,t,n),i=0,a=(o+r)/2;if(o===r)return{h:0,s:0,l:100*a};var s=o-r;return o===e?i=(t-n)/s+(t<n?6:0):o===t?i=(n-e)/s+2:o===n&&(i=(e-t)/s+4),{h:100*(i/=6),s:100*(a>.5?s/(2-o-r):s/(o+r)),l:100*a}},e.prototype.clamp=function(e){return Math.min(Math.max(e,0),255)},e}(),n=function(){function e(e,n){this.target=e,this.targetHSL=e.hsl(),this.options=Object.assign({},{acceptanceLossPercentage:5,maxChecks:15},n),this.reusedColor=new t(0,0,0)}return e.prototype.solve=function(){var e=this.solveNarrow(this.solveWide());return{values:e.values,called:e.called,loss:e.loss,filter:this.css(e.values)}},e.prototype.solveWide=function(){for(var e=[60,180,18e3,600,1.2,1.2],t={loss:1/0},n=0;t.loss>this.options.acceptanceLossPercentage;){var o=this.spsa({A:5,a:e,c:15,values:[50,20,3750,50,100,100],maxTriesInLoop:1e3});if(o.loss<t.loss&&(t=o),(n+=1)>=this.options.maxChecks)break}return Object.assign({},t,{called:n})},e.prototype.solveNarrow=function(e){var t=e.loss,n=t+1,o=[.25*n,.25*n,n,.25*n,.2*n,.2*n];return this.spsa({A:t,a:o,c:2,values:e.values,maxTriesInLoop:500,called:e.called})},e.prototype.fixValueByFilterIDX=function(e,t){var n=100;return 2===t?n=7500:4!==t&&5!==t||(n=200),3===t?e>n?e%=n:e<0&&(e=n+e%n):e<0?e=0:e>n&&(e=n),e},e.prototype.spsa=function(e){for(var t=e.A,n=e.a,o=e.c,r=e.values,i=e.maxTriesInLoop,a=void 0===i?500:i,s=e.called,c=void 0===s?0:s,l=null,d=1/0,u=new Array(6),h=new Array(6),p=new Array(6),m=0;m<a;m++){for(var f=o/Math.pow(m+1,.16666666666666666),y=0;y<6;y++)u[y]=Math.random()>.5?1:-1,h[y]=r[y]+f*u[y],p[y]=r[y]-f*u[y];var g=this.loss(h)-this.loss(p);for(y=0;y<6;y++){var v=g/(2*f)*u[y],b=n[y]/Math.pow(t+m+1,1);r[y]=this.fixValueByFilterIDX(r[y]-b*v,y)}var w=this.loss(r);w<d&&(l=r.slice(0),d=w)}return{values:l,loss:d,called:c}},e.prototype.loss=function(e){var t=this.reusedColor;t.set(0,0,0),t.invert(e[0]/100),t.sepia(e[1]/100),t.saturate(e[2]/100),t.hueRotate(3.6*e[3]),t.brightness(e[4]/100),t.contrast(e[5]/100);var n=t.hsl();return Math.abs(t.r-this.target.r)+Math.abs(t.g-this.target.g)+Math.abs(t.b-this.target.b)+Math.abs(n.h-this.targetHSL.h)+Math.abs(n.s-this.targetHSL.s)+Math.abs(n.l-this.targetHSL.l)},e.prototype.css=function(e){var t=function(t,n){return void 0===n&&(n=1),Math.round(e[t]*n)};return["invert("+t(0)+"%)","sepia("+t(1)+"%)","saturate("+t(2)+"%)","hue-rotate("+t(3,3.6)+"deg)","brightness("+t(4)+"%)","contrast("+t(5)+"%);"].join(" ")},e}(),o=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},r={};e.hexToCSSFilter=function(e,i){var a,s,c,l,d,u;if(void 0===i&&(i={}),r[e]&&!i.forceFilterRecalculation)return Object.assign({},r[e],{cache:!0});try{if(s=(a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a}((u=e,4===u.length?[parseInt("0x"+u[1]+u[1]),parseInt("0x"+u[2]+u[2]),parseInt("0x"+u[3]+u[3])]:7===u.length?[parseInt("0x"+u[1]+u[2]),parseInt("0x"+u[3]+u[4]),parseInt("0x"+u[5]+u[6])]:[]),3))[0],c=a[1],l=a[2],!o(s)||!o(c)||!o(l))throw new Error("hextToRgb returned an invalid value for '"+e+"'");d=new t(Number(s),Number(c),Number(l))}catch(e){throw new Error("Color value should be in HEX format. "+e)}var h=Object.assign({},{acceptanceLossPercentage:5,maxChecks:30,forceFilterRecalculation:!1},i),p=new n(d,h);return r[e]=Object.assign({},p.solve(),{hex:e,rgb:[s,c,l],cache:!1}),r[e]},Object.defineProperty(e,"__esModule",{value:!0})}(t)},91:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},989:function(e,t,n){"use strict";e.exports=n.p+"images/fb6db63582884aaee143.ico"},393:function(e,t,n){"use strict";e.exports=n.p+"images/48113b6750ddf45959c5.png"},868:function(e,t,n){"use strict";e.exports=n.p+"images/169d44e0933b5cd81b58.png"},611:function(e,t,n){"use strict";e.exports=n.p+"images/d51c162be18ae3dd33bf.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),n.b=document.baseURI||self.location.href,function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var r=new Promise((function(e,t){window.localStorage.getItem("data")?e(JSON.parse(window.localStorage.getItem("data"))):e(fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish").then((function(e){return e.json()})).then((function(e){return window.localStorage.setItem("data",JSON.stringify(e))})).then((function(){return JSON.parse(window.localStorage.getItem("data"))})))})),i=new Promise((function(e){e(fetch("https://makeup-api.herokuapp.com/api/v1/products/156.json").then((function(e){return e.json()})).then((function(e){var n=new a(e.id);return n.brand=e.brand,n.name=e.name,n.description=e.description,n.imgLink=e.image_link,n.price=e.price,n.colors=t(e.product_colors),n.tagList=t(e.tag_list),n})))})),a=function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e(this,"brand",""),e(this,"name",""),e(this,"description",""),e(this,"imgLink",""),e(this,"price",0),e(this,"colors",[]),e(this,"tagList",[]),this.id=n},s=n(537),c=n(91),l=n.n(c),d=new URL(n(989),n.b),u=new URL(n(868),n.b),h=new URL(n(393),n.b),p=new URL(n(611),n.b);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}l()(d),l()(u),l()(h),l()(p);var f=document.getElementById("searchBtn"),y=document.getElementById("searchBox"),g=document.getElementById("searchInput"),v=!1;f.addEventListener("click",(function(){v?(y.classList.remove("openBox"),v=!v,M.toast({html:"Not Implmented yet!"})):(y.classList.add("openBox"),v=!v,g.focus())})),g.addEventListener("keyup",(function(e){"Enter"===e.key&&(y.classList.remove("openBox"),v=!v,e.target.value="",M.toast({html:"Not Implemented yet!"}))})),g.addEventListener("focusout",(function(e){y.classList.remove("openBox"),v=!v,e.target.value=""}));var b=document.getElementById("menuMobile"),w=document.getElementById("loginBox"),I=document.getElementById("signInForm"),E=document.getElementById("btnSignIn"),L=document.getElementById("hiddenButton"),x=!1;loginBtn.addEventListener("click",(function(){console.log(x),w.classList.contains("openLogin")?(w.classList.remove("openLogin"),b.style.zIndex=3,L.style.zIndex=5,I.style.display="none",x=!x):(I.style.display="flex",w.classList.add("openLogin"),b.style.zIndex=4,L.style.zIndex=3)})),document.addEventListener("click",(function(e){w===e.target||w.contains(e.target)||(w.classList.remove("openLogin"),b.style.zIndex=3,L.style.zIndex=5,I.style.display="none",x=!x)})),E.addEventListener("click",(function(e){e.preventDefault(),w.classList.remove("openLogin"),b.style.zIndex=3,L.style.zIndex=5,I.style.display="none",x=!x})),document.getElementById("cartIcon").addEventListener("click",(function(){M.toast({html:"Not Implemented yet!"})})),window.addEventListener("scroll",(function(){window.scrollY>160&&window.innerWidth>600?(document.getElementById("home").style.position="fixed",document.getElementById("home").style.top="0"):window.innerWidth>600&&(document.getElementById("home").style.position="absolute",window.innerWidth>600&&window.innerWidth<993?document.getElementById("home").style.top="150px":document.getElementById("home").style.top="220px"),window.innerWidth<600&&(document.getElementById("home").style.top="",document.getElementById("home").style.position="")})),window.addEventListener("resize",(function(){window.innerWidth<600&&(document.getElementById("home").style.position="",document.getElementById("home").style.top=""),window.innerWidth>600&&window.innerWidth<992&&(document.getElementById("home").style.position="absolute",document.getElementById("home").style.top="150px"),window.scrollTo(0,0)}));var B,S=document.getElementById("searchBoxDevice"),k=document.getElementById("searchBtnDevice"),N=document.getElementById("searchInputDevice");k.addEventListener("click",(function(){S.classList.toggle("search-box-device-open")?N.focus():N.blur()})),N.addEventListener("keyup",(function(e){"Enter"===e.key&&(S.classList.toggle("search-box-device-open"),e.target.value="",M.toast({html:"Not Implemented yet!"}))})),document.addEventListener("click",(function(e){S===e.target||S.contains(e.target)||S.classList.remove("search-box-device-open")})),document.getElementById("cartIconDevice").addEventListener("click",(function(){M.toast({html:"Not Implemented yet!"})})),(B=8,window.outerWidth<601&&(B=5),new Promise((function(e){e(r.then((function(e){var n=new Set;do{var o=e[Math.floor(61*Math.random())];o&&n.add(o)}while(n.size<B);return t(n)})))}))).then((function(e){var t=document.getElementById("prodContainer");e.forEach((function(e){var n=document.getElementById("productTemplate").cloneNode(!0);n.style.display="flex",n.children[0].children[0].src=e.image_link,n.children[1].children[0].children[0].innerHTML=e.brand,n.children[1].children[1].children[0].innerHTML=e.name,n.children[1].children[2].children[0].innerHTML="$".concat(e.price.split(".")[0],"<span>").concat(e.price.split(".")[1],"</span>");var o=e.product_colors;o.length>0&&o.forEach((function(e){var t=n.children[3].cloneNode(!0);t.style.display="block",t.children[0].style.filter="".concat((0,s.hexToCSSFilter)(e.hex_value).filter.slice(0,-1)),t.children[1].innerHTML=e.colour_name,t.children[1].style.color=e.hex_value,n.appendChild(t)})),t.appendChild(n)}))})),i.then((function(e){var t=document.getElementById("productTemplate");t.children[0].children[0].src=e.imgLink,t.children[1].children[0].children[0].innerHTML=e.brand,t.children[1].children[1].children[0].innerHTML=e.name,t.children[1].children[2].children[0].innerHTML="$".concat(e.price.split(".")[0],"<span>").concat(e.price.split(".")[1],"</span>");var n=e.colors;n.length>0&&n.forEach((function(e){var n=t.children[3].cloneNode(!0);n.style.display="block",n.children[0].style.filter="".concat((0,s.hexToCSSFilter)(e.hex_value).filter.slice(0,-1)),n.children[1].innerHTML=e.colour_name,n.children[1].style.color=e.hex_value,t.appendChild(n)}))})),document.getElementById("loginBtnDevice").addEventListener("click",(function(){var e=document.getElementById("modalLogin");M.Modal.init(e).open()})),document.getElementById("modalBtnSignIn").addEventListener("click",(function(e){M.Modal.getInstance(document.getElementById("modalLogin")).close(),M.toast({html:"Not Implemented yet!"})}));var T="",j="";document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("modalBlackFriday");j=document.getElementsByClassName("blackBtn"),(T=M.Modal.init(e)).open();var t,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}(j);try{for(n.s();!(t=n.n()).done;)t.value.addEventListener("click",(function(){T.open()}))}catch(e){n.e(e)}finally{n.f()}})),document.getElementById("userButton").addEventListener("click",(function(){for(var e=document.getElementById("userName"),t=document.getElementById("userEmail"),n=document.getElementsByClassName("normalPrice"),o=document.getElementsByClassName("blackPrice"),r=0;r<n.length;r++){n[r].style.textDecoration="line-through";var i=n[r].innerHTML;console.log(i),i=(i=i.match(/\d{1,2}/g)).map((function(e){return Number(e)/2})),o[r].innerHTML="$".concat(Math.floor(i[0]),"<span>").concat(Math.floor(i[1]),"</span>"),o[r].style.color="red",o[r].children[0].style.color="red"}if(console.log(e.value),console.log(t.value),""===e.value||""===t.value)M.toast({html:"Field empty is not allowed"});else{var a={userName:e.value,userEmail:t.value};window.localStorage.setItem("userData",JSON.stringify(a)),T.close()}}))}()}();
//# sourceMappingURL=bundle.js.map