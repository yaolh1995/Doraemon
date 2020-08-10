// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var String = "\nbody {\n    overflow: hidden;\n}\n\n.doraHead {\n    border: 2px solid #4a5d66;\n    width: 420px;\n    height: 380px;\n    left: 50%;\n    margin-top: 38px;\n    transform: translateX(-50%);\n    position: relative;\n    border-radius: 420px 420px 380px 380px;\n    background-color: #83c2f1;\n    z-index: -2;\n\n}\n\n.eyes {\n    background-color: white;\n    border: 2px solid #01070c;\n    width: 90px;\n    height: 100px;\n    position: absolute;\n    top: 13%;\n\n}\n\n.eyes.left {\n    right: 50%;\n    border-radius: 100px 80px 100px 80px;\n}\n\n.eyes.left::before {\n    content: '';\n    width: 16px;\n    height: 25px;\n    background-color: #fff;\n    border-top: 7px solid black;\n    border-left: 4px solid black;\n    border-right: 3px solid black;\n    border-bottom: 6px solid black;\n    position: absolute;\n    bottom: 19%;\n    right: 12%;\n    border-radius: 50%\n}\n\n.eyes.right {\n    left: 50%;\n    border-radius: 80px 100px 80px 100px;\n}\n\n.eyes.right::before {\n    content: '';\n    width: 16px;\n    height: 25px;\n    background-color: #fff;\n    position: absolute;\n    border-top: 7px solid black;\n    border-left: 3px solid black;\n    border-right: 4px solid black;\n    border-bottom: 6px solid black;\n    bottom: 19%;\n    left: 12%;\n    border-radius: 50%;\n\n}\n\n.nose {\n    width: 36px;\n    height: 36px;\n    border-radius: 35px;\n    position: absolute;\n    background-color: #f36673;\n    border: 1px solid #4a5d66;\n    top: 40%;\n    left: 50%;\n    transform: translateX(-50%);\n    transition: all 1s;\n\n}\n\n\n\n.nose::before {\n    content: '';\n    width: 9px;\n    height: 9px;\n    border-radius: 9px;\n    background-color: #ffffff;\n    position: absolute;\n    top: 10%;\n    left: 50%;\n\n}\n\n.nose::after {\n    content: '';\n    width: 3px;\n    height: 150px;\n    background-color: #323736;\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 10;\n\n}\n\n.doraFace {\n    background-color: white;\n    border: 2px solid #4a5d66;\n    width: 400px;\n    height: 288px;\n    border-radius: 9px;\n    background-color: #ffffff;\n    top: 26%;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: -1;\n    position: absolute;\n    border-radius: 400px 400px 490px 490px;\n    overflow: hidden;\n}\n\n.doraFace .left {\n    width: 0px;\n    height: 0px;\n    box-shadow: 0px 0px 25px 20px #ff8f9e;\n    border-radius: 70%;\n    position: absolute;\n    top: 29%;\n    left: 29%;\n\n}\n\n.doraFace .right {\n    width: 0px;\n    height: 0px;\n    box-shadow: 0px 0px 25px 20px #ff8f9e;\n    border-radius: 70%;\n    position: absolute;\n    top: 29%;\n    right: 29%;\n}\n\n.neck {\n    width: 400px;\n    height: 0px;\n    position: absolute;\n    border-top: 4px solid #4a5d66;\n    border-bottom: 20px solid #e8687a;\n    left: 50%;\n    bottom: 0%;\n    transform: translateX(-50%);\n    border-radius: 10%;\n    z-index: 3;\n}\n\n.mouse {\n    width: 50px;\n    height: 25px;\n    border: 1px solid #01070c;\n    background-color: #ff8f9e;\n    border-radius: 70% 70% 50% 50% / 100% 100% 30% 30%;\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-100%);\n    transition: all 0.8s ease-out;;\n}\n\n.mouse:hover{\n    transform: translateX(-50%) translateY(-50%); \n    border-radius: 40% 40% 80% 80%;\n    width: 100px;\n    height: 50px;\n\n}\n\n.beard {\n    border-radius: 2px;\n    height: 5px;\n    position: absolute;\n    background-color: #323736;\n    z-index: 1;\n}\n\n.beard.left1 {\n    width: 120px;\n    top: 55%;\n    left: 0%;\n    transform: rotate(15deg);\n}\n\n.beard.left2 {\n    width: 110px;\n    top: 65%;\n    left: 0%;\n}\n\n.beard.left3 {\n    width: 100px;\n    top: 75%;\n    left: 2%;\n    transform: rotate(-15deg);\n}\n\n.beard.right1 {\n    width: 120px;\n    top: 55%;\n    right: 0%;\n    transform: rotate(-15deg);\n}\n\n.beard.right2 {\n    width: 110px;\n    top: 65%;\n    right: 0%;\n}\n\n.beard.right3 {\n    width: 100px;\n    top: 75%;\n    right: 2%;\n    transform: rotate(15deg);\n}\n\n.bells {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #01070c;\n    background-color: #f4dc85;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    bottom: 0%;\n    transform: translateX(-50%) translateY(50%);\n    transition: all 1s;\n    overflow: hidden;\n\n}\n\n@keyframes xxx {\n    0% {\n        transform:translateX(-50%) translateY(50%) rotate(0deg);\n    }\n\n    44% {\n        transform:translateX(-50%) translateY(50%) rotate(10deg);\n    }\n\n    88% {\n        transform:translateX(-50%) translateY(50%) rotate(-10deg);\n    }\n\n    100% {\n        transform:translateX(-50%) translateY(50%) rotate(0deg);\n    }\n\n}\n.bells .line1 {\n    width: 100px;\n    height: 6px;\n    border-top: 2px solid #01070c;\n    border-bottom: 2px solid #01070c;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%) translateY(70%);\n\n}\n\n.bells .line2 {\n    width: 3px;\n    height: 5px;\n    background-color: #01070c;\n    position: absolute;\n    left: 50%;\n    bottom: 0%;\n    transform: translateX(-50%);\n}\n\n.bells .cir {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    border: 2px solid black;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%) translateY(100%);\n}\n\n.bells:hover{\n    transform-origin: center bottom;\n    animation: xxx 0.2s infinite  forwards;\n    }\n\u6478\u4E00\u6478\u53EE\u5F53\u732B\u7684\u5634\u5DF4~\n\u6447\u4E00\u6447\u53EE\u5F53\u732B\u7684\u5C0F\u94C3\u94DB~\n";
var _default = String;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 30,
  a: 0,
  string: "",
  ui: {
    write: window.write,
    style: document.querySelector("style")
  },
  //执行的函数
  myWrite: function myWrite() {
    if (_css.default[player.a] === "\n") {
      player.string += "<br>";
    } else if (_css.default[player.a] === " ") {
      player.string += "&nbsp";
    } else {
      player.string += _css.default[player.a];
    }

    player.a++;
    player.ui.write.innerHTML = player.string;
    player.ui.style.innerHTML = _css.default.substring(0, player.a);
    /* scrollHeight或 write.scrollTo(0, 9999) */

    player.ui.write.scrollTop = player.ui.write.scrollHeight;

    if (player.a > _css.default.length - 1) {
      clearInterval(player.id);
    }
  },
  //hashTable： id：调用的函数
  events: {
    '#bnstop': 'pause',
    '#bnplay': 'play',
    '#bnslow': 'slow',
    '#bnfast': 'fast',
    '#bnormal': 'normal'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      //防御性编程
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        console.log('----');
        bn.querySelector(key).onclick = player[value]; //player[value]
      }
    }
  },
  //初始化，play+绑定监听；
  init: function init() {
    player.time = 30;
    player.play();
    player.bindEvents();
  },
  pause: function pause() {
    clearInterval(player.id);
  },
  play: function play() {
    player.pause();
    player.id = setInterval(player.myWrite, player.time);
  },
  slow: function slow() {
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.time = 0;
    player.play();
  },
  normal: function normal() {
    player.time = 20;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.23249643.js.map