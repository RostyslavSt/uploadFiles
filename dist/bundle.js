!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=7)}([function(n,e,t){var r=t(1);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(2)(!1)).push([n.i,'/* @import url("normalize.css"); */\r\n/* @import url("bootstrap.min.css"); */\r\n\r\n#selectedFiles img {\r\n    max-width: 40px;\r\n    max-height: 40px;\r\n    /* float: left; */\r\n    /* margin-bottom:10px; */\r\n}\r\n\r\n#drop-area {\r\n    border: 2px dashed #ccc;\r\n    border-radius: 20px;\r\n    width: 480px;\r\n    font-family: sans-serif;\r\n    margin: 100px auto;\r\n    padding: 20px;\r\n  }\r\n  #drop-area.highlight {\r\n    border-color: purple;\r\n  }\r\n  p {\r\n    margin-top: 0;\r\n  }\r\n  .my-form {\r\n    margin-bottom: 10px;\r\n  }\r\n  #gallery {\r\n    margin-top: 10px;\r\n  }\r\n  #gallery img {\r\n    width: 150px;\r\n    margin-bottom: 10px;\r\n    margin-right: 10px;\r\n    vertical-align: middle;\r\n  }\r\n  .button {\r\n    display: inline-block;\r\n    padding: 10px;\r\n    background: #ccc;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    border: 1px solid #ccc;\r\n  }\r\n  .button:hover {\r\n    background: #ddd;\r\n  }\r\n  #fileElem {\r\n    display: none;\r\n  }\r\n  #selectedFiles li {\r\n    background-color: #f9f9f9;\r\n    margin: 10px 0px 10px;\r\n    list-style: none;\r\n  }\r\n\r\n  .li-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .btn-delete {\r\n    padding: 6px 12px;\r\n    margin-bottom: 0;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 1.42857143;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n  }\r\n\r\n  .progressBar-for-li {\r\n    width: 200px;\r\n    color: #53535328;\r\n    display: flex;\r\n    align-content: center;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n\r\n  .btn:focus, .upload-btn:focus{\r\n    outline: 0 !important;\r\n  }\r\n  \r\n  html,\r\n  body {\r\n    height: 100%;\r\n    background-color: #4791D2;\r\n  }\r\n  \r\n  body {\r\n    text-align: center;\r\n    font-family: \'Raleway\', sans-serif;\r\n  }\r\n  \r\n  .row {\r\n    margin-top: 80px;\r\n  }\r\n  \r\n  .upload-btn {\r\n    color: #ffffff;\r\n    background-color: #F89406;\r\n    border: none;\r\n  }\r\n\r\n  .choose-btn {\r\n    color: #ffffff;\r\n    background-color: rgb(6, 180, 248);\r\n    border: none;\r\n    margin-right: 20px;\r\n  }\r\n  \r\n  .upload-btn:hover,\r\n  .upload-btn:focus,\r\n  .upload-btn:active,\r\n  .upload-btn.active {\r\n    color: #ffffff;\r\n    background-color: #FA8900;\r\n    border: none;\r\n  }\r\n  \r\n  h4 {\r\n    padding-bottom: 30px;\r\n    color: #B8BDC1;\r\n  }\r\n  \r\n  /* .glyphicon {\r\n    font-size: 16px;\r\n    color: #9CA3A9;\r\n  } */\r\n  \r\n  h2 {\r\n    margin-top: 15px;\r\n    color: #68757E;\r\n  }\r\n  \r\n  .panel {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n  }\r\n  \r\n  #upload-input {\r\n    display: none;\r\n  }\r\n  #choose-input {\r\n    display: none;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .main-container {\r\n      width: 100%;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .container {\r\n      width: 450px;\r\n    }\r\n  }\r\n  ',""])},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(r),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var r={},o=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),a=null,s=0,l=[],c=t(4);function u(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(m(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(m(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function d(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function p(n,e){var t=i(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(n.insertAt.before,t);t.insertBefore(e,o)}}function f(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function h(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return g(e,n.attrs),p(n,e),e}function g(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function m(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var l=s++;t=a||(a=h(e)),r=v.bind(null,t,l,!1),o=v.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(e,n.attrs),p(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){f(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){f(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=d(n,e);return u(t,e),function(n){for(var o=[],i=0;i<t.length;i++){var a=t[i];(s=r[a.id]).refs--,o.push(s)}n&&u(d(n,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}};var b=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}();function v(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){(function(e){var t=e&&e.pid?e.pid.toString(36):"";function r(){var n=Date.now(),e=r.last||n;return r.last=n>e?n:e+1}n.exports=n.exports.default=function(n){return(n||"")+""+t+r().toString(36)},n.exports.process=function(n){return(n||"")+t+r().toString(36)},n.exports.time=function(n){return(n||"")+r().toString(36)}}).call(this,t(6))},function(n,e){var t,r,o=n.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(n){if(t===setTimeout)return setTimeout(n,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(e){try{return t.call(null,n,0)}catch(e){return t.call(this,n,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(n){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(n){r=a}}();var l,c=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&f())}function f(){if(!u){var n=s(p);u=!0;for(var e=c.length;e;){for(l=c,c=[];++d<e;)l&&l[d].run();d=-1,e=c.length}l=null,u=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(e){try{return r.call(null,n)}catch(e){return r.call(this,n)}}}(n)}}function h(n,e){this.fun=n,this.array=e}function g(){}o.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];c.push(new h(n,e)),1!==c.length||u||s(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(n){return[]},o.binding=function(n){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(n){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(n,e,t){"use strict";t.r(e);t(0);var r=function(n,e,t,r){return`<div class="li-item">\n                <div class="image"><img src="${n}"></div>\n                <div class="file-name">${e}</div>\n                <div class="progress progressBar-for-li">\n                    <div class="progress-bar single" role="progressbar" ></div>\n                </div>\n                <div class="file-size">${t}<span> Kb</span></div>\n                <div class="buttons">\n                    <button class="btn btn-primary start" id="${r}">\n                        <i class="glyphicon glyphicon-upload"></i>\n                        <span>Start</span>\n                    </button>\n                    <button class="btn btn-warning cancel">\n                        <i class="glyphicon glyphicon-ban-circle"></i>\n                        <span>Cancel</span>\n                    </button>\n                 </div>\n            </div>`};var o=function(n,e,t,r){let o=document.querySelectorAll(".start"),i=new FormData;if(n.length>0)for(let e=0;e<n.length;e++){let t=n[e];i.append("uploads[]",t,t.name)}if(e.length>0)for(let n=0;n<e.length;n++){let t=e[n];i.append("uploads[]",t,t.name)}let a=new XMLHttpRequest;a.open("POST","http://localhost:3002/upload",!0),a.upload.addEventListener("progress",n=>{if(n.lengthComputable){let e=n.loaded/n.total;e=parseInt(100*e),t.setAttribute("style",`width: ${e}%`),t.innerHTML=`${e} %`,100===e&&(t.innerHTML="Done"),r.forEach(n=>{n.setAttribute("style",`width: ${e}%`),n.innerHTML=`${e} %`,100===e&&(n.innerHTML="Done")})}}),a.send(i),a.onreadystatechange=(()=>{4==a.readyState&&(200!=a.status?console.log(a.status+": "+a.statusText):(o.forEach(n=>{n.setAttribute("disabled","disabled")}),console.log("upload successful!\n")))})};var i=function(n,e,t){[...n].forEach(n=>{let o=n,i=document.createElement("li"),a=new FileReader;a.onload=(n=>{let a=o.name.split(".")[1],s=n.target.result;switch(a){case"pdf":s="./img/pdf.png";break;case"docx":case"doc":s="./img/word.png";break;case"xlsx":case"xls":s="./img/excel.png";break;case"txt":s="./img/text.png"}let l=r(s,o.name,o.size,o.id);i.innerHTML+=l,e.appendChild(i);let c=document.getElementById(o.id);c.addEventListener("click",n=>{let e=c.parentNode.parentNode.children[2].children[0],r=c.getAttribute("id");t(r,e,c)})}),a.readAsDataURL(o)})};var a=function(n,e,t,r,o,i){let a=new FormData;a.append("uploads[]",n,n.name);let s=parseInt(o/r*100),l=new XMLHttpRequest;l.open("POST","http://localhost:3002/upload",!0),l.upload.addEventListener("progress",n=>{if(n.lengthComputable){let r=n.loaded/n.total;r=parseInt(100*r),e.setAttribute("style",`width: ${r}%`),e.innerHTML=`${r} %`,t.setAttribute("style",`width: ${s}%`),t.innerHTML=`${s} %`,100===r&&(e.innerHTML="Done")}}),l.send(a),l.onreadystatechange=(()=>{4==l.readyState&&(200!=l.status?console.log(l.status+": "+l.statusText):(i.setAttribute("disabled","disabled"),console.log("upload successful!\n")))})};var s=function(n,e){let t=0;n.length>0&&[...n].forEach(n=>{t+=n.size});e.length>0&&[...e].forEach(n=>{t+=n.size});return t};var l=function(n,e,t,r){return'<section id="drop-area">\n                        <form method="post" enctype="multipart/form-data" name="formUpFiles">\n                            <div class="container" id="form-container">\n                                <div class="row">\n                                    <div class="col-xs-12">\n                                        <div class="panel panel-default">\n                                            <div class="panel-body">\n                                                <span class="glyphicon glyphicon-cloud-upload"></span>\n                                                <h2>File Uploader</h2>\n                                                <div class="progress">\n                                                    <div class="progress-bar" role="progressbar"></div>\n                                                </div>\n                                                \x3c!-- <button class="btn btn-lg choose-btn" type="button">Choose File</button> --\x3e\n                                                <input id="choose-input" type="file" name="uploads[]" multiple="multiple">\n                                                <label for="choose-input" class="btn btn-lg choose-btn" type="button">Choose File</label>\n                                                \x3c!-- <button class="btn btn-lg upload-btn" type="button">Upload File</button> --\x3e\n                                                <input type="submit" class="btn btn-lg upload-btn" value="Upload Files" name="submit">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </section>;'};e.default=function(n){let e=t(5);const r=document.getElementById(n);let c=l();r.innerHTML=c;const u=document.querySelector("form"),d=document.querySelector("#selectedFiles"),p=document.createElement("ul"),f=document.querySelector(".progress-bar");let h=0,g=0;d.appendChild(p);let m={},b={};function v(n){if(n.target.files&&window.FileReader){for(let t=0;t<n.target.files.length;t++)n.target.files[t].id=e();m=n.target.files,h=s(m,b),i(n.target.files,p,w)}}document.addEventListener("DOMContentLoaded",function(){u.addEventListener("change",v)}),u.addEventListener("submit",n=>{n.preventDefault();let e=document.querySelectorAll(".single");o(m,b,f,e)});let y=document.getElementById("drop-area");function x(n){n.preventDefault(),n.stopPropagation()}function w(n,e,t){for(let r=0;r<m.length;r++)n===m[r].id&&(g+=m[r].size,a(m[r],e,f,h,g,t));for(let r=0;r<b.length;r++)n===b[r].id&&(g+=b[r].size,a(b[r],e,f,h,g,t))}["dragenter","dragover","dragleave","drop"].forEach(n=>{y.addEventListener(n,x)}),y.addEventListener("drop",n=>{let t=n.dataTransfer;for(let n=0;n<t.files.length;n++)t.files[n].id=e();b=t.files,h=s(m,b),i(b,p,w)})}}]);