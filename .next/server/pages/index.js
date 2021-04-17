module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "/mnt/c/Users/lbran/projetos/landingnext/pages/index.js";

function openbutton() {
  document.querySelector('#content-button').classList.toggle("clicar");
  document.querySelector('#content').classList.toggle("contentopen");
  document.querySelector('#content').classList.toggle("contentclose");
  document.querySelector('#bg').classList.toggle("openoverlay");
}

function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        id: "dev",
        class: "roboto",
        children: "Brando"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "counter",
        class: "quicksand",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "counter-day",
          children: "00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "counter-separator",
          children: ":"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "counter-hour",
          children: "00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "counter-separator",
          children: ":"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "counter-minute",
          children: "00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "counter-separator",
          children: ":"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "counter-second",
          children: "00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "counter-day-sub",
          children: "Days"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "counter-hour-sub",
          children: "Hours"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "counter-minute-sub",
          children: "Minutes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "counter-second-sub",
          children: "Seconds"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        id: "welcome",
        class: "quicksand",
        children: "BEM-VINDOS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        id: "title",
        class: "quicksand",
        children: "Em breve novas vagas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        id: "text",
        class: "roboto",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac porta felis, in eleifend elit. Sed vel scelerisque odio. Fusce vel convallis est. Nunc ipsum massa, placerat eget magna et."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "buttons",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "btn-more",
          children: "Mais Informa\xE7\xF5es"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "btn-notify",
          children: "Avise-me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "social-media",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "40",
          height: "40",
          fill: "currentColor",
          class: "bi bi-facebook",
          viewBox: "0 0 16 16",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "40",
          height: "40",
          fill: "currentColor",
          class: "bi bi-instagram",
          viewBox: "0 0 16 16",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "40",
          height: "40",
          fill: "currentColor",
          class: "bi bi-twitter",
          viewBox: "0 0 16 16",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "40",
          height: "40",
          fill: "currentColor",
          class: "bi bi-youtube",
          viewBox: "0 0 16 16",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "content",
        class: "contentclose",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "content-button",
          onclick: "openbutton()",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "bar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "bar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "bar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "bar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "content-about",
          class: "quicksand",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            id: "about-title",
            children: "Sobre n\xF3s"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            id: "about-desc",
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies mattis felis, quis suscipit urna tristique vel. In sem nisi, maximus et sem vel, commodo varius felis. Pellentesque vitae euismod neque. Praesent eget risus augue. Duis ac ornare urna. Sed quis laoreet libero. Sed vel mauris a neque accumsan consectetur quis ac lacus. Cras tincidunt a tortor quis vehicula."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "content-form",
          class: "quicksand",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            id: "form",
            children: "Fale Conosco"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "form-desc",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "nome",
                placeholder: "Nome Completo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "email",
                placeholder: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "titulo",
                placeholder: "T\xEDtulo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                id: "mensagem",
                placeholder: "Mensagem",
                rows: "3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                id: "btn-enviar",
                type: "submit",
                value: "Enviar Mensagem"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "content-contact",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "contact-address",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "address-logo",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "32",
                height: "32",
                fill: "currentColor",
                class: "bi bi-geo-alt",
                viewBox: "0 0 16 16",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "address-content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                id: "address-title",
                children: "Endere\xE7o"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["Avenida Presidente Vargas, XXX", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 58
                }, this), "Ribeir\xE3o Preto/SP,"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "contact-email",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "email-logo",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "32",
                height: "32",
                fill: "currentColor",
                class: "bi bi-envelope",
                viewBox: "0 0 16 16",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "email-content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                id: "email-title",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["example1@gmail.com", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 46
                }, this), "example2@gmail.com"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "contact-phone",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "phone-logo",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "32",
                height: "32",
                fill: "currentColor",
                class: "bi bi-telephone",
                viewBox: "0 0 16 16",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  d: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "phone-content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                id: "phone-title",
                children: "Telefone"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["+55 16 0000-0000", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 44
                }, this), "+55 16 00000-0000"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\xA9 2021 Brando - Todos os direitos reservados."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsib3BlbmJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkEsU0FBU0EsVUFBVCxHQUFzQjtBQUNsQkMsVUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ0MsU0FBMUMsQ0FBb0RDLE1BQXBELENBQTJELFFBQTNEO0FBQ0FILFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixFQUFtQ0MsU0FBbkMs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QUFSO0FBQUEsc0NBQ0k7QUFBRyxrQkFBRSxFQUFDLGFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFBLDREQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4Q0MsZUF3R0Q7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4R0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBaUhIOztBQUVjQSxtRUFBZixFOzs7Ozs7Ozs7OztBQzNIQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBvcGVuYnV0dG9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LWJ1dHRvbicpLmNsYXNzTGlzdC50b2dnbGUoXCJjbGljYXJcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5jbGFzc0xpc3QudG9nZ2xlKFwiY29udGVudG9wZW5cIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5jbGFzc0xpc3QudG9nZ2xlKFwiY29udGVudGNsb3NlXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZycpLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVub3ZlcmxheVwiKTtcbn1cblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgICA8bWFpbj5cbiAgICAgICAgPGgyIGlkPVwiZGV2XCIgY2xhc3M9XCJyb2JvdG9cIj5CcmFuZG88L2gyPlxuICAgICAgICA8ZGl2IGlkPVwiY291bnRlclwiIGNsYXNzPVwicXVpY2tzYW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY291bnRlci1kYXlcIj4wMDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZXItc2VwYXJhdG9yXCI+OjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImNvdW50ZXItaG91clwiPjAwPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRlci1zZXBhcmF0b3JcIj46PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY291bnRlci1taW51dGVcIj4wMDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZXItc2VwYXJhdG9yXCI+OjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImNvdW50ZXItc2Vjb25kXCI+MDA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb3VudGVyLWRheS1zdWJcIj5EYXlzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImNvdW50ZXItaG91ci1zdWJcIj5Ib3VyczwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb3VudGVyLW1pbnV0ZS1zdWJcIj5NaW51dGVzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImNvdW50ZXItc2Vjb25kLXN1YlwiPlNlY29uZHM8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGlkPVwid2VsY29tZVwiIGNsYXNzPVwicXVpY2tzYW5kXCI+QkVNLVZJTkRPUzwvcD5cbiAgICAgICAgPHAgaWQ9XCJ0aXRsZVwiIGNsYXNzPVwicXVpY2tzYW5kXCI+RW0gYnJldmUgbm92YXMgdmFnYXM8L3A+XG4gICAgICAgIDxwIGlkPVwidGV4dFwiY2xhc3M9XCJyb2JvdG9cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDdXJhYml0dXIgYWMgcG9ydGEgZmVsaXMsIGluIGVsZWlmZW5kIGVsaXQuIFNlZCB2ZWwgc2NlbGVyaXNxdWUgb2Rpby4gRnVzY2UgdmVsIGNvbnZhbGxpcyBlc3QuIE51bmMgaXBzdW0gbWFzc2EsIHBsYWNlcmF0IGVnZXQgbWFnbmEgZXQuPC9wPlxuICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1tb3JlXCI+TWFpcyBJbmZvcm1hw6fDtWVzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLW5vdGlmeVwiPkF2aXNlLW1lPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwic29jaWFsLW1lZGlhXCI+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1mYWNlYm9va1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2IDguMDQ5YzAtNC40NDYtMy41ODItOC4wNS04LTguMDVDMy41OCAwLS4wMDIgMy42MDMtLjAwMiA4LjA1YzAgNC4wMTcgMi45MjYgNy4zNDcgNi43NSA3Ljk1MXYtNS42MjVoLTIuMDNWOC4wNUg2Ljc1VjYuMjc1YzAtMi4wMTcgMS4xOTUtMy4xMzEgMy4wMjItMy4xMzEuODc2IDAgMS43OTEuMTU3IDEuNzkxLjE1N3YxLjk4aC0xLjAwOWMtLjk5MyAwLTEuMzAzLjYyMS0xLjMwMyAxLjI1OHYxLjUxaDIuMjE4bC0uMzU0IDIuMzI2SDkuMjVWMTZjMy44MjQtLjYwNCA2Ljc1LTMuOTM0IDYuNzUtNy45NTF6XCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1pbnN0YWdyYW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk04IDBDNS44MjkgMCA1LjU1Ni4wMSA0LjcwMy4wNDggMy44NS4wODggMy4yNjkuMjIyIDIuNzYuNDJhMy45MTcgMy45MTcgMCAwIDAtMS40MTcuOTIzQTMuOTI3IDMuOTI3IDAgMCAwIC40MiAyLjc2Qy4yMjIgMy4yNjguMDg3IDMuODUuMDQ4IDQuNy4wMSA1LjU1NSAwIDUuODI3IDAgOC4wMDFjMCAyLjE3Mi4wMSAyLjQ0NC4wNDggMy4yOTcuMDQuODUyLjE3NCAxLjQzMy4zNzIgMS45NDIuMjA1LjUyNi40NzguOTcyLjkyMyAxLjQxNy40NDQuNDQ1Ljg5LjcxOSAxLjQxNi45MjMuNTEuMTk4IDEuMDkuMzMzIDEuOTQyLjM3MkM1LjU1NSAxNS45OSA1LjgyNyAxNiA4IDE2czIuNDQ0LS4wMSAzLjI5OC0uMDQ4Yy44NTEtLjA0IDEuNDM0LS4xNzQgMS45NDMtLjM3MmEzLjkxNiAzLjkxNiAwIDAgMCAxLjQxNi0uOTIzYy40NDUtLjQ0NS43MTgtLjg5MS45MjMtMS40MTcuMTk3LS41MDkuMzMyLTEuMDkuMzcyLTEuOTQyQzE1Ljk5IDEwLjQ0NSAxNiAxMC4xNzMgMTYgOHMtLjAxLTIuNDQ1LS4wNDgtMy4yOTljLS4wNC0uODUxLS4xNzUtMS40MzMtLjM3Mi0xLjk0MWEzLjkyNiAzLjkyNiAwIDAgMC0uOTIzLTEuNDE3QTMuOTExIDMuOTExIDAgMCAwIDEzLjI0LjQyYy0uNTEtLjE5OC0xLjA5Mi0uMzMzLTEuOTQzLS4zNzJDMTAuNDQzLjAxIDEwLjE3MiAwIDcuOTk4IDBoLjAwM3ptLS43MTcgMS40NDJoLjcxOGMyLjEzNiAwIDIuMzg5LjAwNyAzLjIzMi4wNDYuNzguMDM1IDEuMjA0LjE2NiAxLjQ4Ni4yNzUuMzczLjE0NS42NC4zMTkuOTIuNTk5LjI4LjI4LjQ1My41NDYuNTk4LjkyLjExLjI4MS4yNC43MDUuMjc1IDEuNDg1LjAzOS44NDMuMDQ3IDEuMDk2LjA0NyAzLjIzMXMtLjAwOCAyLjM4OS0uMDQ3IDMuMjMyYy0uMDM1Ljc4LS4xNjYgMS4yMDMtLjI3NSAxLjQ4NWEyLjQ3IDIuNDcgMCAwIDEtLjU5OS45MTljLS4yOC4yOC0uNTQ2LjQ1My0uOTIuNTk4LS4yOC4xMS0uNzA0LjI0LTEuNDg1LjI3Ni0uODQzLjAzOC0xLjA5Ni4wNDctMy4yMzIuMDQ3cy0yLjM5LS4wMDktMy4yMzMtLjA0N2MtLjc4LS4wMzYtMS4yMDMtLjE2Ni0xLjQ4NS0uMjc2YTIuNDc4IDIuNDc4IDAgMCAxLS45Mi0uNTk4IDIuNDggMi40OCAwIDAgMS0uNi0uOTJjLS4xMDktLjI4MS0uMjQtLjcwNS0uMjc1LTEuNDg1LS4wMzgtLjg0My0uMDQ2LTEuMDk2LS4wNDYtMy4yMzMgMC0yLjEzNi4wMDgtMi4zODguMDQ2LTMuMjMxLjAzNi0uNzguMTY2LTEuMjA0LjI3Ni0xLjQ4Ni4xNDUtLjM3My4zMTktLjY0LjU5OS0uOTIuMjgtLjI4LjU0Ni0uNDUzLjkyLS41OTguMjgyLS4xMS43MDUtLjI0IDEuNDg1LS4yNzYuNzM4LS4wMzQgMS4wMjQtLjA0NCAyLjUxNS0uMDQ1di4wMDJ6bTQuOTg4IDEuMzI4YS45Ni45NiAwIDEgMCAwIDEuOTIuOTYuOTYgMCAwIDAgMC0xLjkyem0tNC4yNyAxLjEyMmE0LjEwOSA0LjEwOSAwIDEgMCAwIDguMjE3IDQuMTA5IDQuMTA5IDAgMCAwIDAtOC4yMTd6bTAgMS40NDFhMi42NjcgMi42NjcgMCAxIDEgMCA1LjMzNCAyLjY2NyAyLjY2NyAwIDAgMSAwLTUuMzM0elwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktdHdpdHRlclwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUuMDI2IDE1YzYuMDM4IDAgOS4zNDEtNS4wMDMgOS4zNDEtOS4zMzQgMC0uMTQgMC0uMjgyLS4wMDYtLjQyMkE2LjY4NSA2LjY4NSAwIDAgMCAxNiAzLjU0MmE2LjY1OCA2LjY1OCAwIDAgMS0xLjg4OS41MTggMy4zMDEgMy4zMDEgMCAwIDAgMS40NDctMS44MTcgNi41MzMgNi41MzMgMCAwIDEtMi4wODcuNzkzQTMuMjg2IDMuMjg2IDAgMCAwIDcuODc1IDYuMDNhOS4zMjUgOS4zMjUgMCAwIDEtNi43NjctMy40MjkgMy4yODkgMy4yODkgMCAwIDAgMS4wMTggNC4zODJBMy4zMjMgMy4zMjMgMCAwIDEgLjY0IDYuNTc1di4wNDVhMy4yODggMy4yODggMCAwIDAgMi42MzIgMy4yMTggMy4yMDMgMy4yMDMgMCAwIDEtLjg2NS4xMTUgMy4yMyAzLjIzIDAgMCAxLS42MTQtLjA1NyAzLjI4MyAzLjI4MyAwIDAgMCAzLjA2NyAyLjI3N0E2LjU4OCA2LjU4OCAwIDAgMSAuNzggMTMuNThhNi4zMiA2LjMyIDAgMCAxLS43OC0uMDQ1QTkuMzQ0IDkuMzQ0IDAgMCAwIDUuMDI2IDE1elwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmkteW91dHViZVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguMDUxIDEuOTk5aC4wODljLjgyMi4wMDMgNC45ODcuMDMzIDYuMTEuMzM1YTIuMDEgMi4wMSAwIDAgMSAxLjQxNSAxLjQyYy4xMDEuMzguMTcyLjg4My4yMiAxLjQwMmwuMDEuMTA0LjAyMi4yNi4wMDguMTA0Yy4wNjUuOTE0LjA3MyAxLjc3LjA3NCAxLjk1N3YuMDc1Yy0uMDAxLjE5NC0uMDEgMS4xMDgtLjA4MiAyLjA2bC0uMDA4LjEwNS0uMDA5LjEwNGMtLjA1LjU3Mi0uMTI0IDEuMTQtLjIzNSAxLjU1OGEyLjAwNyAyLjAwNyAwIDAgMS0xLjQxNSAxLjQyYy0xLjE2LjMxMi01LjU2OS4zMzQtNi4xOC4zMzVoLS4xNDJjLS4zMDkgMC0xLjU4Ny0uMDA2LTIuOTI3LS4wNTJsLS4xNy0uMDA2LS4wODctLjAwNC0uMTcxLS4wMDctLjE3MS0uMDA3Yy0xLjExLS4wNDktMi4xNjctLjEyOC0yLjY1NC0uMjZhMi4wMDcgMi4wMDcgMCAwIDEtMS40MTUtMS40MTljLS4xMTEtLjQxNy0uMTg1LS45ODYtLjIzNS0xLjU1OEwuMDkgOS44MmwtLjAwOC0uMTA0QTMxLjQgMzEuNCAwIDAgMSAwIDcuNjh2LS4xMjJDLjAwMiA3LjM0My4wMSA2LjYuMDY0IDUuNzhsLjAwNy0uMTAzLjAwMy0uMDUyLjAwOC0uMTA0LjAyMi0uMjYuMDEtLjEwNGMuMDQ4LS41MTkuMTE5LTEuMDIzLjIyLTEuNDAyYTIuMDA3IDIuMDA3IDAgMCAxIDEuNDE1LTEuNDJjLjQ4Ny0uMTMgMS41NDQtLjIxIDIuNjU0LS4yNmwuMTctLjAwNy4xNzItLjAwNi4wODYtLjAwMy4xNzEtLjAwN0E5OS43ODggOTkuNzg4IDAgMCAxIDcuODU4IDJoLjE5M3pNNi40IDUuMjA5djQuODE4bDQuMTU3LTIuNDA4TDYuNCA1LjIwOXpcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJiZ1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiIGNsYXNzPVwiY29udGVudGNsb3NlXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1idXR0b25cIiBvbmNsaWNrPVwib3BlbmJ1dHRvbigpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1hYm91dFwiIGNsYXNzPVwicXVpY2tzYW5kXCI+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJhYm91dC10aXRsZVwiPlNvYnJlIG7Ds3M8L3A+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJhYm91dC1kZXNjXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIHVsdHJpY2llcyBtYXR0aXMgZmVsaXMsIHF1aXMgc3VzY2lwaXQgdXJuYSB0cmlzdGlxdWUgdmVsLiBJbiBzZW0gbmlzaSwgbWF4aW11cyBldCBzZW0gdmVsLCBjb21tb2RvIHZhcml1cyBmZWxpcy4gUGVsbGVudGVzcXVlIHZpdGFlIGV1aXNtb2QgbmVxdWUuIFByYWVzZW50IGVnZXQgcmlzdXMgYXVndWUuIER1aXMgYWMgb3JuYXJlIHVybmEuIFNlZCBxdWlzIGxhb3JlZXQgbGliZXJvLiBTZWQgdmVsIG1hdXJpcyBhIG5lcXVlIGFjY3Vtc2FuIGNvbnNlY3RldHVyIHF1aXMgYWMgbGFjdXMuIENyYXMgdGluY2lkdW50IGEgdG9ydG9yIHF1aXMgdmVoaWN1bGEuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1mb3JtXCIgY2xhc3M9XCJxdWlja3NhbmRcIj5cbiAgICAgICAgICAgICAgICA8cCBpZD1cImZvcm1cIj5GYWxlIENvbm9zY288L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImZvcm0tZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibm9tZVwiIHBsYWNlaG9sZGVyPVwiTm9tZSBDb21wbGV0b1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdHVsb1wiIHBsYWNlaG9sZGVyPVwiVMOtdHVsb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtZW5zYWdlbVwiIHBsYWNlaG9sZGVyPVwiTWVuc2FnZW1cIiByb3dzPVwiM1wiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJidG4tZW52aWFyXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiRW52aWFyIE1lbnNhZ2VtXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRhY3QtYWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWRkcmVzcy1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1nZW8tYWx0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIuMTY2IDguOTRjLS41MjQgMS4wNjItMS4yMzQgMi4xMi0xLjk2IDMuMDdBMzEuNDkzIDMxLjQ5MyAwIDAgMSA4IDE0LjU4YTMxLjQ4MSAzMS40ODEgMCAwIDEtMi4yMDYtMi41N2MtLjcyNi0uOTUtMS40MzYtMi4wMDgtMS45Ni0zLjA3QzMuMzA0IDcuODY3IDMgNi44NjIgMyA2YTUgNSAwIDAgMSAxMCAwYzAgLjg2Mi0uMzA1IDEuODY3LS44MzQgMi45NHpNOCAxNnM2LTUuNjg2IDYtMTBBNiA2IDAgMCAwIDIgNmMwIDQuMzE0IDYgMTAgNiAxMHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04IDhhMiAyIDAgMSAxIDAtNCAyIDIgMCAwIDEgMCA0em0wIDFhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2elwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWRkcmVzcy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImFkZHJlc3MtdGl0bGVcIj5FbmRlcmXDp288L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BdmVuaWRhIFByZXNpZGVudGUgVmFyZ2FzLCBYWFg8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgUmliZWlyw6NvIFByZXRvL1NQLDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWN0LWVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbC1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1lbnZlbG9wZVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgNGEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlY0em0yLTFhMSAxIDAgMCAwLTEgMXYuMjE3bDcgNC4yIDctNC4yVjRhMSAxIDAgMCAwLTEtMUgyem0xMyAyLjM4M2wtNC43NTggMi44NTVMMTUgMTEuMTE0di01Ljczem0tLjAzNCA2Ljg3OEw5LjI3MSA4LjgyIDggOS41ODMgNi43MjggOC44MmwtNS42OTQgMy40NEExIDEgMCAwIDAgMiAxM2gxMmExIDEgMCAwIDAgLjk2Ni0uNzM5ek0xIDExLjExNGw0Ljc1OC0yLjg3NkwxIDUuMzgzdjUuNzN6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImVtYWlsLXRpdGxlXCI+RW1haWw8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5leGFtcGxlMUBnbWFpbC5jb208YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhbXBsZTJAZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFjdC1waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGhvbmUtbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktdGVsZXBob25lXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMy42NTQgMS4zMjhhLjY3OC42NzggMCAwIDAtMS4wMTUtLjA2M0wxLjYwNSAyLjNjLS40ODMuNDg0LS42NjEgMS4xNjktLjQ1IDEuNzdhMTcuNTY4IDE3LjU2OCAwIDAgMCA0LjE2OCA2LjYwOCAxNy41NjkgMTcuNTY5IDAgMCAwIDYuNjA4IDQuMTY4Yy42MDEuMjExIDEuMjg2LjAzMyAxLjc3LS40NWwxLjAzNC0xLjAzNGEuNjc4LjY3OCAwIDAgMC0uMDYzLTEuMDE1bC0yLjMwNy0xLjc5NGEuNjc4LjY3OCAwIDAgMC0uNTgtLjEyMmwtMi4xOS41NDdhMS43NDUgMS43NDUgMCAwIDEtMS42NTctLjQ1OUw1LjQ4MiA4LjA2MmExLjc0NSAxLjc0NSAwIDAgMS0uNDYtMS42NTdsLjU0OC0yLjE5YS42NzguNjc4IDAgMCAwLS4xMjItLjU4TDMuNjU0IDEuMzI4ek0xLjg4NC41MTFhMS43NDUgMS43NDUgMCAwIDEgMi42MTIuMTYzTDYuMjkgMi45OGMuMzI5LjQyMy40NDUuOTc0LjMxNSAxLjQ5NGwtLjU0NyAyLjE5YS42NzguNjc4IDAgMCAwIC4xNzguNjQzbDIuNDU3IDIuNDU3YS42NzguNjc4IDAgMCAwIC42NDQuMTc4bDIuMTg5LS41NDdhMS43NDUgMS43NDUgMCAwIDEgMS40OTQuMzE1bDIuMzA2IDEuNzk0Yy44MjkuNjQ1LjkwNSAxLjg3LjE2MyAyLjYxMWwtMS4wMzQgMS4wMzRjLS43NC43NC0xLjg0NiAxLjA2NS0yLjg3Ny43MDJhMTguNjM0IDE4LjYzNCAwIDAgMS03LjAxLTQuNDIgMTguNjM0IDE4LjYzNCAwIDAgMS00LjQyLTcuMDA5Yy0uMzYyLTEuMDMtLjAzNy0yLjEzNy43MDMtMi44NzdMMS44ODUuNTExelwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGhvbmUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJwaG9uZS10aXRsZVwiPlRlbGVmb25lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+KzU1IDE2IDAwMDAtMDAwMDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICArNTUgMTYgMDAwMDAtMDAwMDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxwPiZjb3B5OyAyMDIxIEJyYW5kbyAtIFRvZG9zIG9zIGRpcmVpdG9zIHJlc2VydmFkb3MuPC9wPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgXG4gICAgPC9tYWluPlxuXG4gICAgPC9kaXY+KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==