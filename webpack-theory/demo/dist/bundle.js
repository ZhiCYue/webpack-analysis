(function (modules) {
    var installedModules = {};
  
    function __webpack_require__(moduleId) {
  
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }
  
      var module = installedModules[moduleId] = {
        i: moduleId,
        exports: {}
      };
  
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  
      return module.exports;
    }
  
    return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
({
    
        "./src/index.js": (function (module, exports, __webpack_require__) {
            eval(`const parent = __webpack_require__("./src/parent.js");

alert(JSON.stringify(parent));`);
        }),
    
        "./src/parent.js": (function (module, exports, __webpack_require__) {
            eval(`const child = __webpack_require__("./src/child.js");

module.exports = {
  message: 'this is parent 替换后的信息.',
  child: child.message
};`);
        }),
    
        "./src/child.js": (function (module, exports, __webpack_require__) {
            eval(`module.exports = {
  message: 'this is child 替换后的信息.'
};`);
        }),
    
});
  