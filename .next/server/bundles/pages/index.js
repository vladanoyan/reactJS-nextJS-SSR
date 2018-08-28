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



/***/ }),

/***/ "./pages/index/component.css":
/***/ (function(module, exports) {

module.exports = {
	"home": "s87mOHIcr3hBnYqHA4c1J",
	"content": "_2U8Ce61pBxx2fwIVOEcfWX"
};

/***/ }),

/***/ "./pages/index/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_lib_Layout__ = __webpack_require__("./src/lib/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_Owl_corousel__ = __webpack_require__("./src/components/Owl-corousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_Owl_corousel_pages__ = __webpack_require__("./src/components/Owl-corousel-pages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_css__ = __webpack_require__("./pages/index/component.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__component_css__);
var _jsxFileName = "/Users/admin/Desktop/reactJS-nextJS-SSR/pages/index/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








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
      var li = this.props.list.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, item.name);
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_lib_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, li), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__component_css___default.a.home,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_Owl_corousel__["a" /* default */], {
        items: this.props.list,
        toggle: this.state.toggle,
        animate: this.redirectPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__component_css___default.a.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "fadeIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_Owl_corousel_pages__["a" /* default */], {
        items: this.props.list,
        position: this.state.position,
        toggleClick: this.toggleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })))));
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

/***/ "./src/components/Owl-corousel-pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__ = __webpack_require__("@fortawesome/react-fontawesome");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_svg_core__ = __webpack_require__("@fortawesome/fontawesome-svg-core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_svg_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_svg_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_solid_svg_icons__ = __webpack_require__("@fortawesome/free-solid-svg-icons");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_solid_svg_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__fortawesome_free_solid_svg_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__owl_pages_css__ = __webpack_require__("./src/components/Owl-corousel-pages/owl-pages.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__owl_pages_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__owl_pages_css__);
var _jsxFileName = "/Users/admin/Desktop/reactJS-nextJS-SSR/src/components/Owl-corousel-pages/index.js";

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




__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_svg_core__["library"].add(__WEBPACK_IMPORTED_MODULE_4__fortawesome_free_solid_svg_icons__["faTh"]);

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
        className: __WEBPACK_IMPORTED_MODULE_5__owl_pages_css___default.a.OwlcarouselPages,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__["FontAwesomeIcon"], {
        icon: "th",
        size: "2x",
        className: __WEBPACK_IMPORTED_MODULE_5__owl_pages_css___default.a.IconToggle,
        onClick: this.props.toggleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OwlCarouselPages, _extends({
        className: "owl-theme"
      }, options, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
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
            lineNumber: 46
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "".concat(__WEBPACK_IMPORTED_MODULE_5__owl_pages_css___default.a.item, " ").concat(__WEBPACK_IMPORTED_MODULE_5__owl_pages_css___default.a.imgPages),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: item.src,
          alt: item.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
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

module.exports = {
	"OwlcarouselPages": "_1F7DgoqUYUf5gnCKvWsCzq",
	"imgPages": "_14UuCQcPkC25tB7vyWGrTq",
	"IconToggle": "_2dDFq2UqVIMMmbWYueUHrU"
};

/***/ }),

/***/ "./src/components/Owl-corousel/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__owl_css__ = __webpack_require__("./src/components/Owl-corousel/owl.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__owl_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__owl_css__);
var _jsxFileName = "/Users/admin/Desktop/reactJS-nextJS-SSR/src/components/Owl-corousel/index.js";

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
      __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.replace("/", "/".concat(id, "/").concat(name), {
        shallow: true
      });
      this.props.animate(name, id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.props.toggle ? "".concat(__WEBPACK_IMPORTED_MODULE_3__owl_css___default.a.duration) : "".concat(__WEBPACK_IMPORTED_MODULE_3__owl_css___default.a.duration, " ").concat(__WEBPACK_IMPORTED_MODULE_3__owl_css___default.a.downFade),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_3__owl_css___default.a.logo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/Larima_NEW_LOGO.png",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OwlCarousel, _extends({
        className: "owl-theme"
      }, options, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), this.props.items.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: __WEBPACK_IMPORTED_MODULE_3__owl_css___default.a.downMenu,
          style: {
            animationDuration: "".concat(item.timer, "s")
          },
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "item",
          id: __WEBPACK_IMPORTED_MODULE_3__owl_css___default.a.img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: item.src,
          alt: item.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: __WEBPACK_IMPORTED_MODULE_3__owl_css___default.a.discription,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          onClick: _this.direct.bind(_this, item.name, item.id),
          className: __WEBPACK_IMPORTED_MODULE_3__owl_css___default.a.link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, item.name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          className: __WEBPACK_IMPORTED_MODULE_3__owl_css___default.a.textWhite,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, item.text), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: __WEBPACK_IMPORTED_MODULE_3__owl_css___default.a.separator,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
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

module.exports = {
	"duration": "onaOMEv-8GAEJsaD9aCM3",
	"logo": "_2XHXgf7bBPw8Lp1Eu_aVft",
	"img": "_3g0aOpKPMHBeexQjONEihY",
	"discription": "TeZ3e4IRE5Vb4Ut5kAHmC",
	"link": "g9LOFyzdAr84XmFSyLU5e",
	"textWhite": "_9AU8XJ_U4mOPVKUOyyRWz",
	"separator": "bse--L_A0d9cOMunIXcOd",
	"downMenu": "_1YyCJcFqXy1Jk4pVVQHx9C",
	"down": "_3t_hJ79NF9NGE7Ey8mjvlQ",
	"downFade": "_2iDDKn3akSHAPPJOu9j0qq"
};

/***/ }),

/***/ "./src/lib/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_normalize_css_normalize_css__ = __webpack_require__("./node_modules/normalize.css/normalize.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_normalize_css_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_normalize_css_normalize_css__);
var _jsxFileName = "/Users/admin/Desktop/reactJS-nextJS-SSR/src/lib/Layout.js";



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-1080801314"
  }, children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1080801314",
    css: "@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');body{margin:0;padding:0;font-family:'Roboto',sans-serif;}*{box-sizing:border-box;}.owl-carousel{display:block!important;}.owl-dots{position:absolute;bottom:20px;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;}.owl-dots .active span{width:2px !important;height:35px !important;background:#fff !important;}.owl-dots .owl-dot{outline:none;background-color:transparent;}.owl-dots .owl-dot span{width:2px !important;height:15px;position:relative;}.owl-dots .owl-dot span:hover{background:#fff !important;}@media (max-width:767px){.owl-dots .owl-dot span{margin:5px 4px;}}.owl-dots .owl-dot span:before{content:'' !important;height:20px !important;width:2px !important;background:#fff;position:absolute;left:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saWIvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9PLEFBR3NGLEFBR2xFLEFBTWEsQUFHQyxBQUdMLEFBT0csQUFLUixBQUlRLEFBS00sQUFJUixBQUlHLFNBeENaLElBd0JtQixFQWE3QixHQXpCWSxDQVhvQixFQWtCVCxBQVNYLENBdEJkLEFBbUN5QixFQWhDekIsR0F3QkYsR0FwQmEsR0FnQlMsTUFmYyxHQVdwQyxFQUwrQixDQXNCTixNQXhDdkIsQUE0QkYsZUFhb0IsS0F0QnBCLFdBdUJzQixrQkFDWCxPQUNFLFNBQ2IsNEJBaENlLFdBQ2YiLCJmaWxlIjoic3JjL2xpYi9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FkbWluL0Rlc2t0b3AvcmVhY3RKUy1uZXh0SlMtU1NSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICB7YFxuXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCcpO1xuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICAub3dsLWNhcm91c2Vse1xuICAgICAgICAgIGRpc3BsYXk6YmxvY2shaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICAgICAgLm93bC1kb3RzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgICAub3dsLWRvdHMgLmFjdGl2ZSBzcGFuIHtcbiAgICAgICAgICB3aWR0aDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgIC5vd2wtZG90cyAub3dsLWRvdCB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgICAub3dsLWRvdHMgLm93bC1kb3Qgc3BhbiB7XG4gICAgICAgICAgd2lkdGg6IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAgLm93bC1kb3RzIC5vd2wtZG90IHNwYW46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgLm93bC1kb3RzIC5vd2wtZG90IHNwYW4ge1xuICAgICAgICAgICAgICBtYXJnaW46IDVweCA0cHg7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJycgIWltcG9ydGFudDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG5cblxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDxzY3JpcHQ+XG5cbiAgICA8L3NjcmlwdD5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=src/lib/Layout.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    className: "jsx-1080801314"
  }));
});

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

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

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