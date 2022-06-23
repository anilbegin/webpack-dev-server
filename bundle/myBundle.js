/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {doubleMe, tripleMe, quadrupleMe} = __webpack_require__(/*! ./multiplier.js */ \"./app/multiplier.js\")\r\n\r\nconsole.log(doubleMe(10))\r\nconsole.log(tripleMe(20))\r\nconsole.log(quadrupleMe(20))\r\n\r\ndocument.querySelector('h2').innerText = 'hello world One' // to test that Browser is not even reloading\r\n                                                           // if you change this value, So we can just inject\r\n                                                           // the latest code without page relaod           \r\n\r\n\r\nif(false) {}\n\n//# sourceURL=webpack://trial-webpackxx/./app/app.js?");

/***/ }),

/***/ "./app/multiplier.js":
/*!***************************!*\
  !*** ./app/multiplier.js ***!
  \***************************/
/***/ ((module) => {

eval("function createMultiplier(multiplier)\r\n{\r\n    return function(x) {\r\n        return x*multiplier\r\n    }\r\n}\r\n\r\nlet doubleMe = createMultiplier(2)\r\nlet tripleMe = createMultiplier(3)\r\nlet quadrupleMe = createMultiplier(4)\r\n\r\nmodule.exports = {doubleMe, tripleMe, quadrupleMe}\n\n//# sourceURL=webpack://trial-webpackxx/./app/multiplier.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/app.js");
/******/ 	
/******/ })()
;