module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/normalize.css/normalize.css":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Loading PostCSS Plugin failed: Cannot find module 'postcss-nested'\n\n(@/Users/admin/Desktop/nextjs/postcss.config.js)\n    at load (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/plugins.js:21:13)\n    at Object.keys.filter.map (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/plugins.js:53:16)\n    at Array.map (<anonymous>)\n    at plugins (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/plugins.js:52:8)\n    at config.load.then (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/index.js:72:18)\n    at <anonymous>");

/***/ }),

/***/ "./pages/index/component.css":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Loading PostCSS Plugin failed: Cannot find module 'postcss-nested'\n\n(@/Users/admin/Desktop/nextjs/postcss.config.js)\n    at load (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/plugins.js:21:13)\n    at Object.keys.filter.map (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/plugins.js:53:16)\n    at Array.map (<anonymous>)\n    at plugins (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/plugins.js:52:8)\n    at config.load.then (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/index.js:72:18)\n    at <anonymous>");

/***/ }),

/***/ "./pages/index/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_Layout__ = __webpack_require__("./src/components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_Owl_corousel_pages_Coarousel_pages_js__ = __webpack_require__("./src/components/Owl-corousel-pages/Coarousel-pages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_Owl_corousel_Coarousel_js__ = __webpack_require__("./src/components/Owl-corousel/Coarousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_Owl_corousel__ = __webpack_require__("./src/components/Owl-corousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_Owl_corousel_pages__ = __webpack_require__("./src/components/Owl-corousel-pages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fortawesome_react_fontawesome__ = __webpack_require__("@fortawesome/react-fontawesome");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fortawesome_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__fortawesome_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fortawesome_fontawesome_svg_core__ = __webpack_require__("@fortawesome/fontawesome-svg-core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fortawesome_fontawesome_svg_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__fortawesome_fontawesome_svg_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fortawesome_free_solid_svg_icons__ = __webpack_require__("@fortawesome/free-solid-svg-icons");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fortawesome_free_solid_svg_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__fortawesome_free_solid_svg_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_css__ = __webpack_require__("./pages/index/component.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__component_css__);
var _jsxFileName = "/Users/admin/Desktop/nextjs/pages/index/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












__WEBPACK_IMPORTED_MODULE_8__fortawesome_fontawesome_svg_core__["library"].add(__WEBPACK_IMPORTED_MODULE_9__fortawesome_free_solid_svg_icons__["faTh"]);

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "toggleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          toggle: !_this.state.toggle
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "redirectPage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, id) {
        _this.toggleClick();

        _this.setState({
          Visible: !_this.state.Visible
        });

        _this.setState({
          route: e,
          position: id
        });
      }
    });
    _this.state = {
      Visible: false,
      toggle: true,
      route: '',
      position: ''
    };
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: __WEBPACK_IMPORTED_MODULE_10__component_css__["default"].hayk,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "asjhdajshdjaksxxxxx"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_10__component_css__["default"].home,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_Owl_corousel_Coarousel_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_components_Owl_corousel__["a" /* default */], {
        items: this.props.list,
        toggle: this.state.toggle,
        animate: this.redirectPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_10__component_css__["default"].content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "fadeIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__fortawesome_react_fontawesome__["FontAwesomeIcon"], {
        icon: "th",
        size: "2x",
        className: __WEBPACK_IMPORTED_MODULE_10__component_css__["default"].IconToggle,
        onClick: this.toggleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_Owl_corousel_pages_Coarousel_pages_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_Owl_corousel_pages__["a" /* default */], {
        items: this.props.list,
        position: this.state.position,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }))))));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.list
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(Home));

/***/ }),

/***/ "./src/components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css__ = __webpack_require__("./node_modules/normalize.css/normalize.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_normalize_css__);
var _jsxFileName = "/Users/admin/Desktop/nextjs/src/components/Layout.js";



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3289109782"
  }, children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3289109782",
    css: "@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');body{margin:0;padding:0;font-family:'Roboto',sans-serif;}*{box-sizing:border-box;}.owl-carousel{display:block!important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPTyxBQUdzRixBQUdsRSxBQU1hLEFBR0MsU0FSYixVQUNzQixHQUtsQyxFQUdBLDJCQVBBIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWRtaW4vRGVza3RvcC9uZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2PlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG5cbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJyk7XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIC5vd2wtY2Fyb3VzZWx7XG4gICAgICAgICAgZGlzcGxheTpibG9jayFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuXG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPHNjcmlwdD5cblxuICAgIDwvc2NyaXB0PlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=src/components/Layout.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-3289109782"
  }));
});

/***/ }),

/***/ "./src/components/Owl-corousel-pages/Coarousel-pages.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css__ = __webpack_require__("./node_modules/normalize.css/normalize.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_normalize_css__);
var _jsxFileName = "/Users/admin/Desktop/nextjs/src/components/Owl-corousel-pages/Coarousel-pages.js";



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-963033633"
  }, children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "963033633",
    css: ".owl-dots{position:absolute;bottom:20px;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;}.owl-dots .active span{width:2px !important;height:35px !important;background:#fff !important;}.owl-dots .owl-dot{outline:none;background-color:transparent;}.owl-dots .owl-dot span{width:2px !important;height:15px;position:relative;}.owl-dots .owl-dot span:hover{background:#fff !important;}@media (max-width:767px){.owl-dots .owl-dot span{margin:5px 4px;}}.owl-dots .owl-dot span:before{content:'' !important;height:20px !important;width:2px !important;background:#fff;position:absolute;left:0;bottom:0;}.downMenu{-webkit-animation-delay:.5s;animation-delay:.5s;opacity:0;-webkit-animation:down 1s ease-in both;animation:down 1s ease-in both;}@-webkit-keyframes down{from{opacity:0;-webkit-transform:translate3d(0,-60%,0);-ms-transform:translate3d(0,-60%,0);transform:translate3d(0,-60%,0);}to{opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes down{from{opacity:0;-webkit-transform:translate3d(0,-60%,0);-ms-transform:translate3d(0,-60%,0);transform:translate3d(0,-60%,0);}to{opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL093bC1jb3JvdXNlbC1wYWdlcy9Db2Fyb3VzZWwtcGFnZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT08sQUFJNkIsQUFPRyxBQUtSLEFBSVEsQUFLTSxBQUlSLEFBSUcsQUFTRixBQU1OLEFBSUEsVUFId0IsQUFJSCxHQXBDTixFQWE3QixHQXpCWSxHQU9XLEFBU1gsQ0FhVyxLQVIzQixHQXBCYSxHQWdCUyxNQWZjLEdBV3BDLEVBTCtCLENBc0JOLEdBUVgsR0FwQmQsT0FxQm1DLFFBUmYsS0F0QnBCLFdBdUJzQixrQkFDWCxPQUNFLEVBZVQsT0FkSixFQVVJLFVBTEosZ0JBckNlLFdBQ2YiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvT3dsLWNvcm91c2VsLXBhZ2VzL0NvYXJvdXNlbC1wYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWRtaW4vRGVza3RvcC9uZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2PlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG5cbiAgICAgLm93bC1kb3RzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgICAub3dsLWRvdHMgLmFjdGl2ZSBzcGFuIHtcbiAgICAgICAgICB3aWR0aDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAub3dsLWRvdHMgLm93bC1kb3Qge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICAub3dsLWRvdHMgLm93bC1kb3Qgc3BhbiB7XG4gICAgICAgICAgd2lkdGg6IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAub3dsLWRvdHMgLm93bC1kb3Qgc3Bhbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHggNHB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgLm93bC1kb3RzIC5vd2wtZG90IHNwYW46YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnJyAhaW1wb3J0YW50O1xuICAgICAgICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHdpZHRoOiAycHggIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgIH1cbiAgICAuZG93bk1lbnUge1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLjVzO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgYW5pbWF0aW9uOiBkb3duIDFzIGVhc2UtaW4gYm90aDtcbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgZG93biB7XG4gICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTYwJSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuXG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=src/components/Owl-corousel-pages/Coarousel-pages.js */"
  }));
});

/***/ }),

/***/ "./src/components/Owl-corousel-pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__owl_pages_css__ = __webpack_require__("./src/components/Owl-corousel-pages/owl-pages.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__owl_pages_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__owl_pages_css__);
var _jsxFileName = "/Users/admin/Desktop/nextjs/src/components/Owl-corousel-pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var OwlCarouselPages = __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default()( false ? new (require('next/dynamic').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require("react-owl-carousel");

    m.__webpackChunkName = 'react_owl_carousel_81ecf3b296fdb4e5efaf1e24fcbfe551.js';
    resolve(m);
  }, 'chunks/react_owl_carousel_81ecf3b296fdb4e5efaf1e24fcbfe551.js');
}) : new (__webpack_require__("next/dynamic").SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/("react-owl-carousel");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  new Promise(function(resolve) { resolve(); }).then((function (require) {
    try {
      var m = __webpack_require__("react-owl-carousel");

      m.__webpackChunkName = 'react_owl_carousel_81ecf3b296fdb4e5efaf1e24fcbfe551';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}));


var OwlcarouselPages =
/*#__PURE__*/
function (_Component) {
  _inherits(OwlcarouselPages, _Component);

  function OwlcarouselPages() {
    var _this;

    _classCallCheck(this, OwlcarouselPages);

    _this = _possibleConstructorReturn(this, (OwlcarouselPages.__proto__ || Object.getPrototypeOf(OwlcarouselPages)).call(this));
    _this.state = {
      position: ""
    };
    return _this;
  }

  _createClass(OwlcarouselPages, [{
    key: "render",
    value: function render() {
      var options = {
        loop: true,
        autoplay: true,
        margin: 0,
        slideBy: 1,
        dotsEach: true,
        animateOut: "fadeOutLeft",
        touchDrag: true,
        startPosition: this.props.position - 1,
        responsive: {
          0: {
            items: 1
          }
        }
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__owl_pages_css__["default"].OwlcarouselPages,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OwlCarouselPages, _extends({
        className: "owl-theme"
      }, options, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), this.props.items.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "",
          style: {
            animationDuration: "".concat(item.timer, "s")
          },
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "".concat(__WEBPACK_IMPORTED_MODULE_2__owl_pages_css__["default"].item, " ").concat(__WEBPACK_IMPORTED_MODULE_2__owl_pages_css__["default"].imgPages),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: item.src,
          alt: item.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        })));
      })));
    }
  }]);

  return OwlcarouselPages;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (OwlcarouselPages);

/***/ }),

/***/ "./src/components/Owl-corousel-pages/owl-pages.css":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Loading PostCSS Plugin failed: Cannot find module 'postcss-nested'\n\n(@/Users/admin/Desktop/nextjs/postcss.config.js)\n    at load (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/plugins.js:21:13)\n    at Object.keys.filter.map (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/plugins.js:53:16)\n    at Array.map (<anonymous>)\n    at plugins (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/plugins.js:52:8)\n    at config.load.then (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/index.js:72:18)\n    at <anonymous>");

/***/ }),

/***/ "./src/components/Owl-corousel/Coarousel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css__ = __webpack_require__("./node_modules/normalize.css/normalize.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_normalize_css__);
var _jsxFileName = "/Users/admin/Desktop/nextjs/src/components/Owl-corousel/Coarousel.js";



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-1345883906"
  }, children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1345883906",
    css: ".owl-dots{position:absolute;bottom:20px;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;}.owl-dots .active span{width:2px !important;height:35px !important;background:#fff !important;}.owl-dots .owl-dot{outline:none;background-color:transparent;}.owl-dots .owl-dot span{width:2px !important;height:15px;position:relative;}.owl-dots .owl-dot span:hover{background:#fff !important;}@media (max-width:767px){.owl-dots .owl-dot span{margin:5px 4px;}}.owl-dots .owl-dot span:before{content:'' !important;height:20px !important;width:2px !important;background:#fff;position:absolute;left:0;bottom:0;}.downMenu{opacity:0;-webkit-animation:down 1s ease-in both;animation:down 1s ease-in both;}@-webkit-keyframes down{from{opacity:0;-webkit-transform:translate3d(0,-30%,0);-ms-transform:translate3d(0,-30%,0);transform:translate3d(0,-30%,0);}to{opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes down{from{opacity:0;-webkit-transform:translate3d(0,-30%,0);-ms-transform:translate3d(0,-30%,0);transform:translate3d(0,-30%,0);}to{opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}.downFade{opacity:0;-webkit-transition:all .3s;transition:all .3s;pointer-events:none !important;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL093bC1jb3JvdXNlbC9Db2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT08sQUFHK0IsQUFPSyxBQUtOLEFBSVUsQUFLTSxBQUlaLEFBSUssQUFVZCxBQU1FLEFBSUEsQUFLSixVQWR1QixBQU1LLEFBSUgsQUFLaEIsR0ExQ2MsRUFhM0IsR0F6Qk0sR0FPYSxBQVNQLENBYVMsS0FSdEIsR0FwQkksR0FnQmUsTUFmUSxHQVcvQixFQUw0QixDQXNCSixNQVp0QixLQXFDNEIsVUF4QlgsS0F0Qm5CLFNBK0JBLEVBUnFCLEtBd0JOLGFBdkJMLEdBd0JaLElBdkJjLEVBZ0JSLE9BZkEsRUFXQSwwQkEzQ00sV0FDWiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9Pd2wtY29yb3VzZWwvQ29hcm91c2VsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZG1pbi9EZXNrdG9wL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXY+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgICAub3dsLWRvdHMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAgLm93bC1kb3RzIC5hY3RpdmUgc3BhbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5vd2wtZG90cyAub3dsLWRvdCB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm93bC1kb3RzIC5vd2wtZG90IHNwYW4ge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICAub3dsLWRvdHMgLm93bC1kb3Qgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCA0cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAub3dsLWRvdHMgLm93bC1kb3Qgc3BhbjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kb3duTWVudSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogZG93biAxcyBlYXNlLWluIGJvdGg7XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGRvd24ge1xuICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwJSwgMCk7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgLmRvd25GYWRlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgIH1cblxuXG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=src/components/Owl-corousel/Coarousel.js */"
  }));
});

/***/ }),

/***/ "./src/components/Owl-corousel/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__owl_css__ = __webpack_require__("./src/components/Owl-corousel/owl.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__owl_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__owl_css__);
var _jsxFileName = "/Users/admin/Desktop/nextjs/src/components/Owl-corousel/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var OwlCarousel = __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default()( false ? new (require('next/dynamic').SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require("react-owl-carousel");

    m.__webpackChunkName = 'react_owl_carousel_81ecf3b296fdb4e5efaf1e24fcbfe551.js';
    resolve(m);
  }, 'chunks/react_owl_carousel_81ecf3b296fdb4e5efaf1e24fcbfe551.js');
}) : new (__webpack_require__("next/dynamic").SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/("react-owl-carousel");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  new Promise(function(resolve) { resolve(); }).then((function (require) {
    try {
      var m = __webpack_require__("react-owl-carousel");

      m.__webpackChunkName = 'react_owl_carousel_81ecf3b296fdb4e5efaf1e24fcbfe551';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}));

var options = {
  loop: true,
  autoplay: true,
  margin: 0,
  slideBy: 1,
  dotsEach: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    800: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
};

var Owlcarousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Owlcarousel, _Component);

  function Owlcarousel() {
    _classCallCheck(this, Owlcarousel);

    return _possibleConstructorReturn(this, (Owlcarousel.__proto__ || Object.getPrototypeOf(Owlcarousel)).apply(this, arguments));
  }

  _createClass(Owlcarousel, [{
    key: "direct",
    value: function direct(name, id) {
      this.props.animate(name, id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.props.toggle ? "".concat(__WEBPACK_IMPORTED_MODULE_2__owl_css__["default"].duration) : "".concat(__WEBPACK_IMPORTED_MODULE_2__owl_css__["default"].duration, " ").concat(__WEBPACK_IMPORTED_MODULE_2__owl_css__["default"].downFade),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__owl_css__["default"].logo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/Larima_NEW_LOGO.png",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OwlCarousel, _extends({
        className: "owl-theme"
      }, options, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), this.props.items.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: __WEBPACK_IMPORTED_MODULE_2__owl_css__["default"].downMenu,
          style: {
            animationDuration: "".concat(item.timer, "s")
          },
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "item",
          id: __WEBPACK_IMPORTED_MODULE_2__owl_css__["default"].img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: item.src,
          alt: item.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: __WEBPACK_IMPORTED_MODULE_2__owl_css__["default"].discription,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          onClick: _this.direct.bind(_this, item.name, item.id),
          className: __WEBPACK_IMPORTED_MODULE_2__owl_css__["default"].link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, item.name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          className: __WEBPACK_IMPORTED_MODULE_2__owl_css__["default"].textWhite,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, item.text), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: __WEBPACK_IMPORTED_MODULE_2__owl_css__["default"].separator,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }))));
      }))));
    }
  }]);

  return Owlcarousel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Owlcarousel);

/***/ }),

/***/ "./src/components/Owl-corousel/owl.css":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Loading PostCSS Plugin failed: Cannot find module 'postcss-nested'\n\n(@/Users/admin/Desktop/nextjs/postcss.config.js)\n    at load (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/plugins.js:21:13)\n    at Object.keys.filter.map (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/plugins.js:53:16)\n    at Array.map (<anonymous>)\n    at plugins (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/plugins.js:52:8)\n    at config.load.then (/Users/admin/Desktop/nextjs/node_modules/postcss-load-config/src/index.js:72:18)\n    at <anonymous>");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index/index.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next/dynamic":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-owl-carousel":
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map