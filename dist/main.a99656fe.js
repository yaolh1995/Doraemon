parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n="\nbody {\n    overflow: hidden;\n}\n\n.doraHead {\n    border: 2px solid #4a5d66;\n    width: 420px;\n    height: 380px;\n    left: 50%;\n    margin-top: 38px;\n    transform: translateX(-50%);\n    position: relative;\n    border-radius: 420px 420px 380px 380px;\n    background-color: #83c2f1;\n    z-index: -2;\n\n}\n\n.eyes {\n    background-color: white;\n    border: 2px solid #01070c;\n    width: 90px;\n    height: 100px;\n    position: absolute;\n    top: 13%;\n\n}\n\n.eyes.left {\n    right: 50%;\n    border-radius: 100px 80px 100px 80px;\n}\n\n.eyes.left::before {\n    content: '';\n    width: 16px;\n    height: 25px;\n    background-color: #fff;\n    border-top: 7px solid black;\n    border-left: 4px solid black;\n    border-right: 3px solid black;\n    border-bottom: 6px solid black;\n    position: absolute;\n    bottom: 19%;\n    right: 12%;\n    border-radius: 50%\n}\n\n.eyes.right {\n    left: 50%;\n    border-radius: 80px 100px 80px 100px;\n}\n\n.eyes.right::before {\n    content: '';\n    width: 16px;\n    height: 25px;\n    background-color: #fff;\n    position: absolute;\n    border-top: 7px solid black;\n    border-left: 3px solid black;\n    border-right: 4px solid black;\n    border-bottom: 6px solid black;\n    bottom: 19%;\n    left: 12%;\n    border-radius: 50%;\n\n}\n\n.nose {\n    width: 36px;\n    height: 36px;\n    border-radius: 35px;\n    position: absolute;\n    background-color: #f36673;\n    border: 1px solid #4a5d66;\n    top: 40%;\n    left: 50%;\n    transform: translateX(-50%);\n    transition: all 1s;\n\n}\n\n\n\n.nose::before {\n    content: '';\n    width: 9px;\n    height: 9px;\n    border-radius: 9px;\n    background-color: #ffffff;\n    position: absolute;\n    top: 10%;\n    left: 50%;\n\n}\n\n.nose::after {\n    content: '';\n    width: 3px;\n    height: 150px;\n    background-color: #323736;\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 10;\n\n}\n\n.doraFace {\n    background-color: white;\n    border: 2px solid #4a5d66;\n    width: 400px;\n    height: 288px;\n    border-radius: 9px;\n    background-color: #ffffff;\n    top: 26%;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: -1;\n    position: absolute;\n    border-radius: 400px 400px 490px 490px;\n    overflow: hidden;\n}\n\n.doraFace .left {\n    width: 0px;\n    height: 0px;\n    box-shadow: 0px 0px 25px 20px #ff8f9e;\n    border-radius: 70%;\n    position: absolute;\n    top: 29%;\n    left: 29%;\n\n}\n\n.doraFace .right {\n    width: 0px;\n    height: 0px;\n    box-shadow: 0px 0px 25px 20px #ff8f9e;\n    border-radius: 70%;\n    position: absolute;\n    top: 29%;\n    right: 29%;\n}\n\n.neck {\n    width: 400px;\n    height: 0px;\n    position: absolute;\n    border-top: 4px solid #4a5d66;\n    border-bottom: 20px solid #e8687a;\n    left: 50%;\n    bottom: 0%;\n    transform: translateX(-50%);\n    border-radius: 10%;\n    z-index: 3;\n}\n\n.mouse {\n    width: 50px;\n    height: 25px;\n    border: 1px solid #01070c;\n    background-color: #ff8f9e;\n    border-radius: 70% 70% 50% 50% / 100% 100% 30% 30%;\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-100%);\n    transition: all 0.8s ease-out;;\n}\n\n.mouse:hover{\n    transform: translateX(-50%) translateY(-50%); \n    border-radius: 40% 40% 80% 80%;\n    width: 100px;\n    height: 50px;\n\n}\n\n.beard {\n    border-radius: 2px;\n    height: 5px;\n    position: absolute;\n    background-color: #323736;\n    z-index: 1;\n}\n\n.beard.left1 {\n    width: 120px;\n    top: 55%;\n    left: 0%;\n    transform: rotate(15deg);\n}\n\n.beard.left2 {\n    width: 110px;\n    top: 65%;\n    left: 0%;\n}\n\n.beard.left3 {\n    width: 100px;\n    top: 75%;\n    left: 2%;\n    transform: rotate(-15deg);\n}\n\n.beard.right1 {\n    width: 120px;\n    top: 55%;\n    right: 0%;\n    transform: rotate(-15deg);\n}\n\n.beard.right2 {\n    width: 110px;\n    top: 65%;\n    right: 0%;\n}\n\n.beard.right3 {\n    width: 100px;\n    top: 75%;\n    right: 2%;\n    transform: rotate(15deg);\n}\n\n.bells {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #01070c;\n    background-color: #f4dc85;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    bottom: 0%;\n    transform: translateX(-50%) translateY(50%);\n    transition: all 1s;\n    overflow: hidden;\n\n}\n\n@keyframes xxx {\n    0% {\n        transform:translateX(-50%) translateY(50%) rotate(0deg);\n    }\n\n    44% {\n        transform:translateX(-50%) translateY(50%) rotate(10deg);\n    }\n\n    88% {\n        transform:translateX(-50%) translateY(50%) rotate(-10deg);\n    }\n\n    100% {\n        transform:translateX(-50%) translateY(50%) rotate(0deg);\n    }\n\n}\n.bells .line1 {\n    width: 100px;\n    height: 6px;\n    border-top: 2px solid #01070c;\n    border-bottom: 2px solid #01070c;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%) translateY(70%);\n\n}\n\n.bells .line2 {\n    width: 3px;\n    height: 5px;\n    background-color: #01070c;\n    position: absolute;\n    left: 50%;\n    bottom: 0%;\n    transform: translateX(-50%);\n}\n\n.bells .cir {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    border: 2px solid black;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%) translateY(100%);\n}\n\n.bells:hover{\n    transform-origin: center bottom;\n    animation: xxx 0.2s infinite  forwards;\n    }\n摸一摸叮当猫的嘴巴~\n摇一摇叮当猫的小铃铛~\n",t=n;exports.default=t;
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=t(require("./css.0aaa6c07.js"));function t(e){return e&&e.__esModule?e:{default:e}}var n={id:void 0,time:30,a:0,string:"",ui:{write:window.write,style:document.querySelector("style")},myWrite:function(){"\n"===e.default[n.a]?n.string+="<br>":" "===e.default[n.a]?n.string+="&nbsp":n.string+=e.default[n.a],n.a++,n.ui.write.innerHTML=n.string,n.ui.style.innerHTML=e.default.substring(0,n.a),n.ui.write.scrollTop=n.ui.write.scrollHeight,n.a>e.default.length-1&&clearInterval(n.id)},events:{"#bnstop":"pause","#bnplay":"play","#bnslow":"slow","#bnfast":"fast","#bnormal":"normal"},bindEvents:function(){for(var e in n.events)if(n.events.hasOwnProperty(e)){var t=n.events[e];console.log("----"),bn.querySelector(e).onclick=n[t]}},init:function(){n.time=30,n.play(),n.bindEvents()},pause:function(){clearInterval(n.id),console.log("已执行暂停")},play:function(){n.pause(),n.id=setInterval(n.myWrite,n.time),console.log(n.myWrite),console.log("已执行")},slow:function(){n.time=50,n.play()},fast:function(){n.time=0,n.play()},normal:function(){n.time=20,n.play()}};n.init();
},{"./css.0aaa6c07.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=/main.a99656fe.js.map