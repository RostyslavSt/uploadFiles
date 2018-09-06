!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){(function(t){var n=t&&t.pid?t.pid.toString(36):"";function r(){var e=Date.now(),t=r.last||e;return r.last=e>t?e:t+1}e.exports=e.exports.default=function(e){return(e||"")+""+n+r().toString(36)},e.exports.process=function(e){return(e||"")+n+r().toString(36)},e.exports.time=function(e){return(e||"")+r().toString(36)}}).call(this,n(1))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var s,c=[],u=!1,d=-1;function f(){u&&s&&(u=!1,s.length?c=s.concat(c):d=-1,c.length&&p())}function p(){if(!u){var e=a(f);u=!0;for(var t=c.length;t;){for(s=c,c=[];++d<t;)s&&s[d].run();d=-1,t=c.length}s=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new g(e,t)),1!==c.length||u||a(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=function(e,t,n,r){return`<div class="li-item">\n                <div class="image"><img src="${e}"></div>\n                <div class="file-name">${t}</div>\n                <div class="progress progressBar-for-li">\n                    <div class="progress-bar" role="progressbar" ></div>\n                </div>\n                <div class="file-size">${n}<span> Kb</span></div>\n                <div class="buttons">\n                    <button class="btn btn-primary start" id="${r}">\n                        <i class="glyphicon glyphicon-upload"></i>\n                        <span>Start</span>\n                    </button>\n                    <button class="btn btn-warning cancel">\n                        <i class="glyphicon glyphicon-ban-circle"></i>\n                        <span>Cancel</span>\n                    </button>\n                 </div>\n            </div>`};var o=function(e,t,n){console.log(e),console.log(t);let r=new FormData;if(e.length>0)for(let t=0;t<e.length;t++){let n=e[t];r.append("uploads[]",n,n.name)}if(t.length>0)for(let e=0;e<t.length;e++){let n=t[e];r.append("uploads[]",n,n.name)}$.ajax({url:"http://localhost:3002/upload",type:"POST",data:r,processData:!1,contentType:!1,success:function(e){console.log("upload successful!\n"+e)},xhr:function(){var e=new XMLHttpRequest;return e.upload.addEventListener("progress",function(e){if(e.lengthComputable){var t=e.loaded/e.total;t=parseInt(100*t),console.log(t),n.setAttribute("style",`width: ${t}%`),n.innerHTML=`${t} %`,100===t&&(n.innerHTML="Done")}},!1),e}})};var i=function(e,t,n){[...e].forEach(e=>{let o=e,i=document.createElement("li"),l=new FileReader;l.onload=(e=>{let l=o.name.split(".")[1],a=e.target.result;switch(l){case"pdf":a="./img/pdf.png";break;case"docx":case"doc":a="./img/word.png";break;case"xlsx":case"xls":a="./img/excel.png";break;case"txt":a="./img/text.png"}let s=r(a,o.name,o.size,o.id);i.innerHTML+=s,t.appendChild(i);let c=document.getElementById(o.id);c.addEventListener("click",e=>{let t=c.parentNode.parentNode.children[2].children[0];console.log(t);let r=c.getAttribute("id");console.log(r),n(r,t)})}),l.readAsDataURL(o)})};var l=function(e,t){let n=new FormData;n.append("uploads[]",e,e.name),$.ajax({url:"http://localhost:3002/upload",type:"POST",data:n,processData:!1,contentType:!1,success:function(e){console.log("upload successful!\n"+e)},xhr:function(){var e=new XMLHttpRequest;return e.upload.addEventListener("progress",function(e){if(e.lengthComputable){var n=e.loaded/e.total;n=parseInt(100*n),t.setAttribute("style",`width: ${n}%`),t.innerHTML=`${n} %`,100===n&&(t.innerHTML="Done")}},!1),e}})};let a=n(0);const s=document.querySelector("form"),c=document.querySelector("#selectedFiles"),u=document.createElement("ul"),d=document.querySelector(".progress-bar");c.appendChild(u);let f={},p={};function g(e){if(e.target.files&&window.FileReader){for(let t=0;t<e.target.files.length;t++)e.target.files[t].id=a();f=e.target.files,i(e.target.files,u,v)}}document.addEventListener("DOMContentLoaded",function(){s.addEventListener("change",g)}),s.addEventListener("submit",e=>{e.preventDefault(),o(f,p,d)});let h=document.getElementById("drop-area");function m(e){e.preventDefault(),e.stopPropagation()}function v(e,t){console.log("step 1");for(let n=0;n<f.length;n++)e===f[n].id&&l(f[n],t);console.log(p);for(let n=0;n<p.length;n++)e===p[n].id&&l(p[n],t)}["dragenter","dragover","dragleave","drop"].forEach(e=>{h.addEventListener(e,m)}),h.addEventListener("drop",e=>{let t=e.dataTransfer;console.log(t.files);for(let e=0;e<t.files.length;e++)t.files[e].id=a();p=t.files,console.log(t.files),i(p,u,v)})}]);