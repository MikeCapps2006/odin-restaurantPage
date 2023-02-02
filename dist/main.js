/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generateContact.js":
/*!********************************!*\
  !*** ./src/generateContact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateContact () {\n    const content = document.querySelector('#content');\n    const section = document.createElement('div');\n\n    const head = document.createElement('h1');\n    head.textContent = 'Contact Me';\n    section.appendChild(head);\n\n    const splash = document.createElement('div');\n    splash.classList.add('splash-contact');\n\n    const info = document.createElement('p');\n    info.innerHTML = \"Email: <a href='#'>michaelcapps1772@yahoo.com</a>\";\n    splash.appendChild(info);\n\n    const info2 = document.createElement('p');\n    info2.innerHTML = 'Phone: <span class=\"phNumber\">843-798-0019</span>';\n    splash.appendChild(info2);\n\n    section.appendChild(splash);\n\n    \n\n    content.appendChild(section);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContact);\n\n//# sourceURL=webpack://odin-restaurantpage/./src/generateContact.js?");

/***/ }),

/***/ "./src/generateHome.js":
/*!*****************************!*\
  !*** ./src/generateHome.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.getElementById('content');\nconst heading = \"Mike's Italian Ice\";\nconst headline = 'This is the best Italian Ice you will ever try';\nconst img = './ice1.jpg';\n\nfunction generateHome() {\n    content.innerHTML = '';\n    const splashImg = document.createElement('img');\n    splashImg.src = img;\n    splashImg.style.width = '50%';\n    const div = createElement('div');\n    const head = createElement('h1');\n    head.innerHTML = heading;\n    const review = createElement('h2');\n    review.innerHTML = headline;\n    div.appendChild(head);\n    div.appendChild(splashImg);\n    div.appendChild(review);\n    content.appendChild(div);\n    \n}\n\nfunction createElement(element){\n    const el = document.createElement(element);\n    return el;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHome);\n\n//# sourceURL=webpack://odin-restaurantpage/./src/generateHome.js?");

/***/ }),

/***/ "./src/generateMenu.js":
/*!*****************************!*\
  !*** ./src/generateMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateMenu () {\n\n    const content = document.querySelector('#content');\n    const section = document.createElement('div');\n\n    const head = document.createElement('h1');\n    head.textContent = 'Menu';\n    section.appendChild(head);\n\n    const splash = document.createElement('div');\n    splash.classList.add('splash-contact');\n\n    const info = document.createElement('p');\n    info.textContent = 'This is where the menu goes';\n    splash.appendChild(info);\n\n    section.appendChild(splash);\n\n    content.appendChild(section);\n\n\n    console.log('from generateMenu');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenu);\n\n//# sourceURL=webpack://odin-restaurantpage/./src/generateMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _generateHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateHome */ \"./src/generateHome.js\");\n/* harmony import */ var _generateMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateMenu */ \"./src/generateMenu.js\");\n/* harmony import */ var _generateContact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateContact */ \"./src/generateContact.js\");\n\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nfunction clearContent(){\n    content.innerHTML = '';\n}\n\nconst content = document.querySelector('#content');\nconst btnMenu = document.querySelector('#btnMenu');\nconst btnHome = document.querySelector('#btnHome');\nconst btnContact = document.querySelector('#btnContact');\n\nbtnMenu.addEventListener('click', () => {\n    clearContent();\n    (0,_generateMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\nbtnHome.addEventListener('click', () => {\n    clearContent();\n    (0,_generateHome__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nbtnContact.addEventListener('click', () => {\n    clearContent();\n    (0,_generateContact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\n\nconsole.log('Hey im working');\n\n//# sourceURL=webpack://odin-restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _generateHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateHome */ \"./src/generateHome.js\");\n\n\nfunction pageLoad () {\n    (0,_generateHome__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n\n//# sourceURL=webpack://odin-restaurantpage/./src/pageLoad.js?");

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
/******/ })()
;