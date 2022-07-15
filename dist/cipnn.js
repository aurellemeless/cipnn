/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cipnn"] = factory();
	else
		root["cipnn"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CI_PREFIX\": () => (/* binding */ CI_PREFIX),\n/* harmony export */   \"FORMAT_INTERNATIONAL\": () => (/* binding */ FORMAT_INTERNATIONAL),\n/* harmony export */   \"FORMAT_LOCAL\": () => (/* binding */ FORMAT_LOCAL),\n/* harmony export */   \"MOBILE\": () => (/* binding */ MOBILE),\n/* harmony export */   \"OPERATORS\": () => (/* binding */ OPERATORS),\n/* harmony export */   \"OPERATOR_MOOV\": () => (/* binding */ OPERATOR_MOOV),\n/* harmony export */   \"OPERATOR_MTN\": () => (/* binding */ OPERATOR_MTN),\n/* harmony export */   \"OPERATOR_ORANGE\": () => (/* binding */ OPERATOR_ORANGE),\n/* harmony export */   \"PHONE\": () => (/* binding */ PHONE),\n/* harmony export */   \"PNN_MOBILE_10\": () => (/* binding */ PNN_MOBILE_10),\n/* harmony export */   \"PNN_MOBILE_8\": () => (/* binding */ PNN_MOBILE_8),\n/* harmony export */   \"PNN_PHONE_10\": () => (/* binding */ PNN_PHONE_10),\n/* harmony export */   \"PNN_PHONE_8\": () => (/* binding */ PNN_PHONE_8)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar OPERATORS = {\n  MOOV: {\n    prefixMobile10: \"01\",\n    prefix10: \"21\",\n    prefixMobile8: [\"01\", \"02\", \"03\", \"40\", \"41\", \"42\", \"43\", \"50\", \"51\", \"52\", \"53\", \"70\", \"71\", \"72\", \"73\"],\n    prefix8: [\"208\", \"218\", \"228\", \"238\"]\n  },\n  MTN: {\n    prefixMobile10: \"05\",\n    prefix10: \"25\",\n    prefixMobile8: [\"04\", \"05\", \"06\", \"44\", \"45\", \"46\", \"54\", \"55\", \"56\", \"64\", \"65\", \"66\", \"74\", \"75\", \"76\", \"84\", \"85\", \"86\", \"94\", \"95\", \"96\"],\n    prefix8: [\"200\", \"210\", \"220\", \"230\", \"240\", \"300\", \"310\", \"320\", \"330\", \"340\", \"350\", \"360\"]\n  },\n  ORANGE: {\n    prefixMobile10: \"07\",\n    prefix10: \"27\",\n    prefixMobile8: [\"07\", \"08\", \"09\", \"47\", \"48\", \"49\", \"57\", \"58\", \"59\", \"67\", \"68\", \"69\", \"77\", \"78\", \"79\", \"87\", \"88\", \"89\", \"97\", \"98\"],\n    prefix8: [\"202\", \"203\", \"212\", \"213\", \"215\", \"217\", \"224\", \"225\", \"234\", \"235\", \"243\", \"244\", \"245\", \"306\", \"316\", \"319\", \"327\", \"337\", \"347\", \"359\", \"368\"]\n  }\n};\nvar MOBILE = 'mobile';\nvar PHONE = 'phone';\nvar PNN_MOBILE_8 = [].concat(_toConsumableArray(OPERATORS.MOOV.prefixMobile8), _toConsumableArray(OPERATORS.MTN.prefixMobile8), _toConsumableArray(OPERATORS.ORANGE.prefixMobile8));\nvar PNN_PHONE_8 = [].concat(_toConsumableArray(OPERATORS.MOOV.prefix8), _toConsumableArray(OPERATORS.MTN.prefix8), _toConsumableArray(OPERATORS.ORANGE.prefix8));\nvar PNN_MOBILE_10 = [OPERATORS.MOOV.prefixMobile10, OPERATORS.MTN.prefixMobile10, OPERATORS.ORANGE.prefixMobile10];\nvar PNN_PHONE_10 = [OPERATORS.MOOV.prefix10, OPERATORS.MTN.prefix10, OPERATORS.ORANGE.prefix10];\nvar CI_PREFIX = [\"00225\", \"+225\"]; // international prefixes\n\nvar FORMAT_LOCAL = 'L';\nvar FORMAT_INTERNATIONAL = 'I';\nvar OPERATOR_MOOV = 'MOOV';\nvar OPERATOR_MTN = 'MTN';\nvar OPERATOR_ORANGE = 'ORANGE';\n\n//# sourceURL=webpack://cipnn/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"phone\": () => (/* reexport safe */ _phone_js__WEBPACK_IMPORTED_MODULE_0__.phone)\n/* harmony export */ });\n/* harmony import */ var _phone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.js */ \"./src/phone.js\");\n\n\n\n//# sourceURL=webpack://cipnn/./src/index.js?");

/***/ }),

/***/ "./src/phone.js":
/*!**********************!*\
  !*** ./src/phone.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"phone\": () => (/* binding */ phone)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/**\n * \n * Reference : https://fr.wikipedia.org/wiki/Liste_des_indicatifs_t%C3%A9l%C3%A9phoniques_en_C%C3%B4te_d%27Ivoire\n * @author Memel MELESS\n */\n\nvar phone = /*#__PURE__*/function () {\n  // international prefix\n  // phone number format :  local or international\n  // phone number\n  // phone number without international prefix\n  // network provider\n  // number type\n  function phone(_phone) {\n    _classCallCheck(this, phone);\n\n    _defineProperty(this, \"iPrefix\", null);\n\n    _defineProperty(this, \"format\", _constants__WEBPACK_IMPORTED_MODULE_0__.FORMAT_LOCAL);\n\n    _defineProperty(this, \"phone\", '');\n\n    _defineProperty(this, \"localPart\", '');\n\n    _defineProperty(this, \"network\", null);\n\n    _defineProperty(this, \"type\", null);\n\n    this.phone = _phone;\n    this.iPrefix = this.findIprefix();\n    this.format = this.findFormat();\n    this.localPart = this.findLocalPart();\n    this.network = this.findNetwork();\n    this.type = this.findType();\n  }\n  /**\n   * \n   * find the international prefix \n   * \n   * @param {String} phone \n   * @returns {String | null}\n   */\n\n\n  _createClass(phone, [{\n    key: \"findIprefix\",\n    value: function findIprefix() {\n      var _this = this;\n\n      var hasPrefix = _constants__WEBPACK_IMPORTED_MODULE_0__.CI_PREFIX.filter(function (prfx) {\n        return _this.phone.startsWith(prfx);\n      });\n      return hasPrefix.length ? hasPrefix[0] : null;\n    }\n    /**\n    * \n    * find the local part of the number \n    * @returns {String}\n    */\n\n  }, {\n    key: \"findLocalPart\",\n    value: function findLocalPart() {\n      return !!this.iPrefix ? this.phone.substring(this.iPrefix.length, this.phone.length) : this.phone;\n    }\n    /**\n    * \n    * find the format : \"I\" for international or \"L\" for local\n    * @returns {String}\n    */\n\n  }, {\n    key: \"findFormat\",\n    value: function findFormat() {\n      return !!this.iPrefix ? _constants__WEBPACK_IMPORTED_MODULE_0__.FORMAT_INTERNATIONAL : _constants__WEBPACK_IMPORTED_MODULE_0__.FORMAT_LOCAL;\n    }\n    /**\n     * \n     * find the type : mobile or phone (home phone)\n     * @returns {String | null}\n     */\n\n  }, {\n    key: \"findType\",\n    value: function findType() {\n      if (this.localPart.length === 8) {\n        if (_constants__WEBPACK_IMPORTED_MODULE_0__.PNN_MOBILE_8.includes(this.localPart.substring(0, 2))) {\n          return _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE;\n        }\n\n        if (PNN_PHONE_8.includes(this.localPart.substring(0, 3))) {\n          return _constants__WEBPACK_IMPORTED_MODULE_0__.PHONE;\n        }\n      }\n\n      if (this.localPart.length === 10) {\n        if (_constants__WEBPACK_IMPORTED_MODULE_0__.PNN_MOBILE_10.includes(this.localPart.substring(0, 2))) {\n          return _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE;\n        }\n\n        if (_constants__WEBPACK_IMPORTED_MODULE_0__.PNN_PHONE_10.includes(this.localPart.substring(0, 2))) {\n          return _constants__WEBPACK_IMPORTED_MODULE_0__.PHONE;\n        }\n      }\n\n      return null;\n    }\n    /**\n     * \n     * find the network operator\n     * @returns {String | null}\n     */\n\n  }, {\n    key: \"findNetwork\",\n    value: function findNetwork() {\n      if (this.localPart.length !== 8 && this.localPart.length !== 10) {\n        return null;\n      }\n\n      if (this.localPart.length == 8) {\n        var phone8 = this.localPart; // 8 digits\n\n        if (this.type === _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE) {\n          if (_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MOOV.prefixMobile8.includes(phone8.substring(0, 2))) {\n            return _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_MOOV;\n          } else if (_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MTN.prefixMobile8.includes(phone8.substring(0, 2))) {\n            return _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_MTN;\n          } else {\n            return _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_ORANGE;\n          }\n        } else if (this.type === _constants__WEBPACK_IMPORTED_MODULE_0__.PHONE) {\n          if (_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MOOV.prefix8.includes(phone8.substring(0, 3))) {\n            return _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_MOOV;\n          } else if (_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MTN.prefix8.includes(phone8.substring(0, 3))) {\n            return _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_MTN;\n          } else {\n            return _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_ORANGE;\n          }\n        }\n      } else {\n        // 10 digits\n        var net = this.localPart.substring(0, 2);\n\n        if (_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MOOV.prefixMobile10 === net || _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MOOV.prefix10 === net) {\n          return _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_MOOV;\n        } else if (_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MTN.prefixMobile10 === net || _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MTN.prefix10 === net) {\n          return _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_MTN;\n        } else if (_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.ORANGE.prefixMobile10 === net || _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.ORANGE.prefix10 === net) {\n          return _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_ORANGE;\n        }\n      }\n\n      return null;\n    }\n    /**\n     * \n     * Return new number if the number is correct or null if it's an invalid number\n     * \n     * @param {}  \n     * @returns {String | null}\n     */\n\n  }, {\n    key: \"migrate8To10\",\n    value: function migrate8To10() {\n      var phone8 = this.localPart;\n      var phone10 = '';\n      var phone8Cat = this.type;\n\n      if (!phone8Cat || phone8.length !== 8) {\n        // not a good phone number\n        return null;\n      }\n\n      if (phone8Cat === _constants__WEBPACK_IMPORTED_MODULE_0__.MOBILE) {\n        if (_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MOOV.prefixMobile8.indexOf(phone8.substring(0, 2)) > -1) {\n          phone10 += _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MOOV.prefixMobile10 + phone8;\n        } else if (_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MTN.prefixMobile8.indexOf(phone8.substring(0, 2)) > -1) {\n          phone10 += _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MTN.prefixMobile10 + phone8;\n        } else {\n          phone10 += _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.ORANGE.prefixMobile10 + phone8;\n        }\n      }\n\n      if (phone8Cat === _constants__WEBPACK_IMPORTED_MODULE_0__.PHONE) {\n        if (_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MOOV.prefix8.includes(phone8.substring(0, 3))) {\n          phone10 += operators.MOOV.prefix10 + phone8;\n        } else if (_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MTN.prefix8.includes(phone8.substring(0, 3))) {\n          phone10 += _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.MTN.prefix10 + phone8;\n        } else {\n          phone10 += _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.ORANGE.prefix10 + phone8;\n        }\n      }\n\n      return this.iPrefix ? this.iPrefix + phone10 : phone10;\n    }\n  }]);\n\n  return phone;\n}();\n\n//# sourceURL=webpack://cipnn/./src/phone.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});