/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = "http://lorempixel.com/400/400";

document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0bd576997866bcd211f5fde65ee0aff4.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);