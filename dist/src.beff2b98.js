// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"Focm":[function(require,module,exports) {
var html = document.querySelector("#html"); /* 通过css选择器找到这个html */
var style = document.querySelector("#style");
var string = "\n/* \u4F60\u597D\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\n\u63A5\u4E0B\u6765\u6211\u8981\u5F04\u4E00\u4E2A\u9634\u9633\u56FE\n\u5148\u753B\u4E00\u4E2A\u5706\n*/\n#circle {\nwidth:300px;\nheight:300px;\nbox-shadow:0 0 3px rgba(0,0,0,.5);\nborder-radius:50%;\nleft:50%;\n}\n/*\u63A5\u4E0B\u6765\u6211\u8BA9\u8BA9\u5706\u53D8\u6210\u9634\u9633\u4E24\u8272\n *\u7136\u540E\u8BA9\u8FD9\u4E2A\u5706\u53D8\u6210\u9634\u9633\u4EA4\u6C47\n *\u6700\u540E\u5728\u91CC\u9762\u7ED8\u5236\u9634\u9633\u773C\n */\n#circle {\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n#circle::before {\n    content:'';\n    display:block;\n    width:150px;\n    height:150px;\n    background:black;\n    border-radius:50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#circle::after {\n    content:'';\n    display:block;\n    width:150px;\n    height:150px;\n    background:white;\n    border-radius:50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n\n"; //加上注释让文字不会影响到body的样式
var string2 = ''; //让string2等于一个空字符串
var n = 0; //初始化n的值，下标为0

var word = function word() {

    if (string[n] === '\n') {
        //如果string字符串等于回车

        string2 = string2 + "<br>"; //那就变成css中的br，让html显示回车效果
    } else if (string[n] === ' ') {
        string2 += "&nbsp;";
    } else {
        string2 = string2 + string[n]; //否则就让string2等于string
    } /*简化版 string2+=string[n] ==='\n' ? '<br>':string[n] */
    setTimeout(function () {
        n = n + 1; //让n递增
        html.innerHTML = string2; //html显示string2字符串
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 999999); //控制滚动条
        html.scrollTo(0, 999999);
        if (n < string.length) {
            word(); //循环执行
        }
    }, 10);
};
word();
},{}]},{},["Focm"], null)
//# sourceMappingURL=src.beff2b98.map