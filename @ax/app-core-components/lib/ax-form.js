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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-com-core");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _createSuper; });

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// EXTERNAL MODULE: external "@babel/runtime/helpers/typeof"
var typeof_ = __webpack_require__(10);
var typeof_default = /*#__PURE__*/__webpack_require__.n(typeof_);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(0);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_default()(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addInstall; });
function addInstall(name, nameCom) {
  // let com: any = {};
  nameCom.install = function (Vue) {
    Vue.component(name, nameCom);
  };

  return nameCom;
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name.js");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-framework");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat.js");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createForOfIteratorHelper; });
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator.js");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator.js");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.map.js");

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(19);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || _nonIterableRest();
}

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-radio");

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.includes.js");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.includes.js");

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec.js");

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string.js");

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.constructor.js");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.replace.js");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.match.js");

/***/ }),
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(12);

// EXTERNAL MODULE: ./packages/install.ts
var install = __webpack_require__(11);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-form/src/form.vue?vue&type=template&id=6a2057b0&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_form",
      class: [_vm.presetStyle],
      on: { keypress: _vm.handleKeypress }
    },
    [
      _vm._t("default", null, { data: _vm.data }),
      _vm._v(" "),
      _vm._l(_vm.tipsmap, function(item, key) {
        return _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showTip && item.shown && !_vm.tooltip,
                expression: "showTip && item.shown && !tooltip"
              }
            ],
            key: key,
            staticClass: "ax_err_tips",
            style: "left: " + item.left + "px; top: " + item.top + "px;"
          },
          [_vm._v("\n    " + _vm._s(item.message) + "\n  ")]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-form/src/form.vue?vue&type=template&id=6a2057b0&

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(24);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(15);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(0);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(8);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(7);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(1);

// EXTERNAL MODULE: external "core-js/modules/es.array.concat.js"
var es_array_concat_js_ = __webpack_require__(14);

// EXTERNAL MODULE: external "core-js/modules/es.map.js"
var es_map_js_ = __webpack_require__(20);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string.js"
var es_object_to_string_js_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/es.string.iterator.js"
var es_string_iterator_js_ = __webpack_require__(17);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.iterator.js"
var web_dom_collections_iterator_js_ = __webpack_require__(18);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.constructor.js"
var es_regexp_constructor_js_ = __webpack_require__(81);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec.js"
var es_regexp_exec_js_ = __webpack_require__(39);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.to-string.js"
var es_regexp_to_string_js_ = __webpack_require__(42);

// EXTERNAL MODULE: external "core-js/modules/es.string.replace.js"
var es_string_replace_js_ = __webpack_require__(82);

// EXTERNAL MODULE: external "core-js/modules/es.array.includes.js"
var es_array_includes_js_ = __webpack_require__(35);

// EXTERNAL MODULE: external "core-js/modules/es.string.includes.js"
var es_string_includes_js_ = __webpack_require__(36);

// EXTERNAL MODULE: external "core-js/modules/es.string.match.js"
var es_string_match_js_ = __webpack_require__(83);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(13);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-com-core"
var ax_com_core_ = __webpack_require__(4);
var ax_com_core_default = /*#__PURE__*/__webpack_require__.n(ax_com_core_);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-radio"
var ax_radio_ = __webpack_require__(32);
var ax_radio_default = /*#__PURE__*/__webpack_require__.n(ax_radio_);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(54);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-form/src/form.vue?vue&type=script&lang=ts&




























var formvue_type_script_lang_ts_AxForm = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(AxForm, _Vue);

  var _super = Object(createSuper["a" /* default */])(AxForm);

  function AxForm() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AxForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "data", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "config", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showTip", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "tooltip", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "presetStyle", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "cmap", new Map());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "axmap", new Map());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "tipsmap", {});

    return _this;
  }

  Object(createClass["a" /* default */])(AxForm, [{
    key: "mounted",
    value:
    /* -------------------------- TODO: 初始化数据处理 -------------------------- */

    /**
     * 组件创建完毕处理
     */
    function mounted() {
      // 初始化配置
      this.initConfig(); // 侦听表单数据变化

      this.$on('form-item-change', this.handleFormItemChange);
    }
    /**
     * 处理表单数据变化
     * @param name
     * @param value
     */

  }, {
    key: "handleFormItemChange",
    value: function handleFormItemChange(name, value) {
      // 获取配置数据
      var comps = this.axmap.get(name); // 判断是否有效

      if (!comps || comps.length === 0) return; // 获取数据配置对象

      var conf = this.cmap.get(name); // 判断是否有效

      if (!conf) return; // 把数据转换为类型数组
      // const cv = this.convertToType(conf.type, value);
      // 如果转换之后的数值和源数据不相同，更改源数据，再次执行
      // // XXX: 暂时不知道radio等组件会不会有问题
      // if (cv !== value) {
      //   value = cv;
      //   this.$nextTick(() => {
      //     this.handleFormItemChange(name, value);
      //   });
      //   return;
      // }
      // 定义是否遇到错误标识

      var hasErr = false; // 所有同名称的组件需保持一致的数据状态，遍历设置数据

      for (var i = 0, c = comps.length; i < c; i++) {
        // 获取组件对象
        var comp = comps[i]; // 判断是否相同

        if (comp.modelValue !== value) {
          // 数据不同，修改同名称的数据（如：radio）
          comp.setFormItemValue(value);
        } // 针对组件验证数据是否正常


        if (!this.validateValue(conf, comp, value, 'change')) {
          // 设置遇到错误
          if (!hasErr) hasErr = true; // 发现错误后,显示气泡
          // 获取之前的数据

          var tip = this.tipsmap[conf.name];

          if (this.tooltip) {
            // 如果是气泡提示模式，显示气泡提示
            this.$emit('showTooltip', true, tip);
          } else {
            this.$set(this.tipsmap, conf.name, tip);
          }
        }
      } // 判断是否存在错误，无错误则隐藏提示


      if (!hasErr) {
        // 获取之前的数据
        var _tip = this.tipsmap[conf.name]; // 判断是否已经显示

        if (_tip && _tip.shown) {
          // 已经显示，取消显示
          _tip.shown = false; // 重新设置数据

          this.$set(this.tipsmap, conf.name, _tip);
        }
      } // 判断数据对象是否有效


      if (this.data !== undefined && this.data !== null) {
        // 设置数据
        this.$set(this.data, name, value); // 发布表单数据改变事件

        this.$emit('change', this.data);
      }
    }
    /**
     * 刷新表单元件处理
     */

  }, {
    key: "refreshForm",
    value: function refreshForm() {
      // 清理数据
      this.axmap.clear(); // 查找表单子元件

      this.findComponents(this); // 判断是否存在配置数据

      if (this.config && this.config.length > 0) {
        // 遍历配置数据
        var _iterator = Object(createForOfIteratorHelper["a" /* default */])(this.config),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var conf = _step.value;
            // 获取配置名称
            var name = conf.name; // 判断是否有效

            if (!name || name.length === 0) continue; // 获取配置数据

            var comps = this.axmap.get(name); // 判断是否有效

            if (!comps || comps.length === 0) continue; // 遍历组件数据

            var _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(comps),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var comp = _step2.value;
                // 配置当前组件
                this.configComponent(conf, comp);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } // 初始化数据


      this.initData(true);
    }
    /**
     * 根据当前绑定的数据刷新表单处理
     */

  }, {
    key: "refreshData",
    value: function refreshData() {
      this.initData(false);
    }
    /**
     * 设置当前表单可用焦点
     */

  }, {
    key: "focus",
    value: function focus() {
      // 定义需要获取焦点的对象
      var firstUI;
      var focusUI; // 遍历表单组件

      var _iterator3 = Object(createForOfIteratorHelper["a" /* default */])(this.axmap),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = Object(slicedToArray["a" /* default */])(_step3.value, 2),
              key = _step3$value[0],
              value = _step3$value[1];

          // 遍历数组
          if (!value) continue; // 遍历数组

          for (var index = 0; index < value.length; index++) {
            // 获取一个组件
            var axc = value[index]; // 存储第一个组件

            if (firstUI === undefined) firstUI = axc; // 判断是否校验错误

            if (axc.validatePassed === false) {
              // 存在校验失败，设置失败对象
              focusUI = axc; // 退出

              break;
            }
          }
        } // 判断是否存在对象

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (focusUI || firstUI) {
        // 延时设置焦点
        window.setTimeout(function () {
          // 设置焦点
          if (focusUI) {
            // 设置焦点
            focusUI.focus();
          } else if (firstUI) {
            // 设置第一个焦点
            firstUI.focus();
          }
        }, 100);
      }
    }
    /**
     * 查找组件下的子组件处理
     */

  }, {
    key: "findComponents",
    value: function findComponents(vue) {
      // 判断是否有效
      if (!vue) return; // 获取子元件

      var nodes = vue.$children; // 判断是否有效

      if (!nodes || nodes.length === 0) return; // 遍历组件的子组件处理

      for (var i = 0, c = nodes.length; i < c; i++) {
        // 获取一个对象
        var node = nodes[i]; // 判断是否属于组件

        if (node && node instanceof ax_com_core_default.a.AxUIComponent) {
          // 属于自定义组件，转换为组件对象
          var comp = node; // 获取组件名称

          var name = comp.name; // 判断是否有效

          if (!name || name.length === 0) continue; // 获取集合内数据

          var comps = this.axmap.get(name); // 判断是否有效

          if (!comps) {
            // 创建数组
            comps = []; // 增加到集合

            this.axmap.set(name, comps);
          } // 把组件增加到数组


          comps.push(comp);
        } // 搜索下一级元件


        this.findComponents(node);
      }
    }
    /* -------------------------- TODO: 配置组件方法 -------------------------- */

    /**
     * 配置组件处理
     */

  }, {
    key: "configComponent",
    value: function configComponent(conf, comp) {
      // 需要验证，获取元素对象
      var ele = comp.$el; // 判断是否有效
      // if (!ele || ele.getAttribute('hasAxFormConfig') === 'true') return;
      // 增加失去焦点时检测处理

      comp.$on('blur', this.handleComponentBlur.bind(this, conf, comp)); // 设置已配置完成
      // ele.setAttribute('hasAxFormConfig', 'true');
      // 判断是否需要限制输入

      if (conf.min !== undefined && !isNaN(conf.min) || conf.max !== undefined && !isNaN(conf.max) || conf.exreg && conf.exreg.length > 0) {
        // XXX: 暂时去掉输入长度回正
        // 配置单行输入框对象
        this.configTextInput(ele.getElementsByTagName('input'), conf); // 配置多行输入框对象

        this.configTextInput(ele.getElementsByTagName('textarea'), conf);
      }
    }
    /**
     * 处理失去焦点事件
     */

  }, {
    key: "handleComponentBlur",
    value: function handleComponentBlur(conf, comp) {
      // 获取组件数据值
      // const value = this.convertToType(conf.type, comp.modelValue);
      var value = comp.modelValue; // 验证数据处理

      if (this.validateValue(conf, comp, value, 'blur')) {
        // 获取之前的数据
        var tip = this.tipsmap[conf.name]; // 判断是否已经显示

        if (tip && tip.shown) {
          // 已经显示，取消显示
          tip.shown = false; // 重新设置数据

          this.$set(this.tipsmap, conf.name, tip);
        }
      }
    }
    /**
     * 配置输入框对象
     */

  }, {
    key: "configTextInput",
    value: function configTextInput(inputs, conf) {
      // 判断是否有效
      if (!inputs || inputs.length === 0) return; // 遍历配置限制

      var _iterator4 = Object(createForOfIteratorHelper["a" /* default */])(inputs),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var input = _step4.value;
          // 设置输入法模式
          input.style.imeMode = 'disabled';

          try {
            // 兼容谷歌浏览器
            input.autocomplete = 'off';
          } catch (ex) {} // 判断是否单行输入框


          if (input instanceof HTMLInputElement) {
            // 判断类型
            switch (input.type) {
              case 'text':
              case 'password':
                // 设置最大长度
                if (conf.max !== undefined && !isNaN(conf.max)) {
                  // 设置最大长度
                  input.maxLength = conf.max;
                }

                break;

              case 'number':
                {
                  // 定义最大长度
                  var len = 0; // 设置最小值

                  if (conf.min !== undefined && !isNaN(conf.min)) {
                    // 设置最小值
                    input.min = conf.min + ''; // 设置最小值长度

                    len = (conf.min + '').length;
                  } // 设置最大值


                  if (conf.max !== undefined && !isNaN(conf.max)) {
                    // 设置最大值
                    input.max = conf.max + ''; // 设置最大值长度

                    len = Math.max((conf.max + '').length, len);
                  } // 判断长度


                  if (len > 0) input.maxLength = len;
                  break;
                }

              default:
                continue;
            }
          } else {
            // 多行输入框，设置最大长度
            if (conf.max !== undefined && !isNaN(conf.max)) {
              // 设置最大长度
              input.maxLength = conf.max;
            }
          } // 判断是否需要限制输入


          if (conf.exreg && conf.exreg.length > 0) {
            // 绑定输入方法
            app_core_framework_["AxDomUtils"].addDomEventListener(input, ['keydown', 'change', 'paste', 'compositionend'], this.handleInputEvent.bind(this, conf, input));
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * 处理输入框事件
     */

  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(conf, e, evt) {
      var _this2 = this;

      // 创建正则表达式对象
      var reg = new RegExp(conf.exreg || '', 'img'); // 获取数据类型

      var isNum = (conf.type & ax_com_core_default.a.FormValueType.INT) === ax_com_core_default.a.FormValueType.INT || (conf.type & ax_com_core_default.a.FormValueType.FLOAT) === ax_com_core_default.a.FormValueType.FLOAT || (conf.type & ax_com_core_default.a.FormValueType.DOUBLE) === ax_com_core_default.a.FormValueType.DOUBLE; // 判断事件类型

      switch (evt.type) {
        case 'keydown':
          // 处理按键
          var k = app_core_framework_["AxDomUtils"].getDomEventKeyCode(evt);
          if (app_core_framework_["AxDomUtils"].isDomControlKey(k) || evt.ctrlKey) return true;
          var cs = app_core_framework_["AxDomUtils"].keyCodeToString(evt, false);
          if (!cs) return true;
          reg.lastIndex = 0;
          if (reg.test(cs)) return app_core_framework_["AxDomUtils"].cancelDomEvent(evt);
          break;

        case 'paste':
          // 处理粘贴
          var win = window;

          if (win.clipboardData) {
            // 兼容 IE
            var t = win.clipboardData.getData('Text');
            win.clipboardData.setData('Text', t.replace(reg, ''));
            evt.returnValue = true;

            if (isNum) {
              window.setTimeout(function () {
                _this2.fixInputNumber(conf, e, e.value);

                _this2.handleFormItemChange(conf.name, e.value);
              }, 10);
            } else {
              this.handleFormItemChange(conf.name, e.value);
            }

            return true;
          } else {
            // 一般浏览器
            window.setTimeout(function () {
              reg.lastIndex = 0;
              if (e.value) e.value = e.value.replace(reg, '');
              if (isNum) _this2.fixInputNumber(conf, e, e.value);

              _this2.handleFormItemChange(conf.name, e.value);
            }, 10);
          }

          break;

        case 'change':
          // 处理改变
          reg.lastIndex = 0;
          if (e.value) e.value = e.value.replace(reg, '');
          if (isNum) this.fixInputNumber(conf, e, e.value);
          this.handleFormItemChange(conf.name, e.value);
          break;

        case 'compositionend':
          // 处理外部改变【输入法】
          reg.lastIndex = 0;

          if (e.value) {
            this.$nextTick(function () {
              e.value = e.value.replace(reg, '');
              if (isNum) _this2.fixInputNumber(conf, e, e.value);

              _this2.handleFormItemChange(conf.name, e.value);
            });
          }

          break;

        default:
          break;
      }

      return true;
    }
    /**
     * 修正输入框数值类型
     */

  }, {
    key: "fixInputNumber",
    value: function fixInputNumber(conf, e, value) {
      var n = parseFloat(value);

      if (!isNaN(n)) {
        if (conf.min !== undefined && n < conf.min) {
          e.value = conf.min + '';
        }

        if (conf.max !== undefined && n > conf.max) {
          e.value = conf.max + '';
        }
      } else {
        e.value = '0';
      }

      return;
    }
    /* -------------------------- TODO: 初始化数据方法 -------------------------- */

    /**
     * 初始化数据处理
     */

  }, {
    key: "initData",
    value: function initData(eventEnabled) {
      // 判断是否存在配置数据
      if (!this.data || !this.config || this.config.length === 0 || this.axmap.size === 0) return; // 定义是否存在数据变化标识

      var hasChanged = false; // 遍历配置数据

      var _iterator5 = Object(createForOfIteratorHelper["a" /* default */])(this.config),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var conf = _step5.value;
          // 获取配置名称
          var name = conf.name; // 判断是否有效

          if (!name || name.length === 0) continue; // 获取配置数据

          var comps = this.axmap.get(name); // 判断是否有效

          if (!comps || comps.length === 0) continue; // 获取数据值

          var value = this.data[name]; // 判断是否存在数据

          if (value !== undefined && value !== null) {
            // 已经设置了数据，遍历相同名称的主键设置数据
            for (var i = 0, c = comps.length; i < c; i++) {
              // 获取一个组件
              var comp = comps[i]; // 设置主键数据

              comp.setFormItemValue(value);
            }
          } else {
            // 未设置数据，遍历获取数据
            for (var _i = 0, _c = comps.length; _i < _c; _i++) {
              // 获取一个组件
              var _comp = comps[_i]; // 判断是否第一个单选框

              if (_i === 0 && _comp instanceof ax_radio_default.a) {
                // 转换为单选框
                var radio = _comp; // 设置默认选中第一个

                radio.setFormItemValue(radio.label); // 保留数据

                value = radio.label; // 退出处理

                break;
              } // 获取组件数据值


              value = _comp.modelValue;
            } // 设置初始化数据


            this.$set(this.data, name, value); // 设置标识

            if (!hasChanged) hasChanged = true;
          }
        } // 判断是否需要发布事件

      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      if (eventEnabled && hasChanged) {
        // 发布数据变化事件
        this.$emit('change', this.data);
      }
    }
    /* -------------------------- TODO: 验证组件方法 -------------------------- */

    /**
     * 响应按键处理
     */

  }, {
    key: "handleKeypress",
    value: function handleKeypress(evt) {
      // 判断是否有效
      if (!evt) return; // 获取事件目标对象

      var el = app_core_framework_["AxDomUtils"].getDomEventTarget(evt); // 判断是否是多行输入框（假如在 textarea 内按下 ctrl + enter 也执行提交）

      if (el && el.tagName && el.tagName.toUpperCase() === 'TEXTAREA' && !evt.ctrlKey) return; // 获取按键码

      var kc = app_core_framework_["AxDomUtils"].getDomEventKeyCode(evt); // 判断按键

      switch (kc) {
        case 13:
          // 发布提交事件
          this.$emit('submit'); // 退出

          break;

        default:
          break;
      }
    }
    /**
     * @params customTip 自定义的报错文字
     * 验证表单数据处理，成功则输出验证后的数据对象: resolve(data: { [key: string]: any })，失败则输出失败信息字符串: reject(msg: string)
     */

  }, {
    key: "validate",
    value: function validate(customTip) {
      // 获取当前对象
      var self = this; // 返回异步处理对象

      return new Promise(function (resolve, reject) {
        // 获取语言对象
        var axLang = ax_com_core_default.a.getAxLang(); // 判断是否存在配置数据

        if (self.data && self.config && self.config.length > 0) {
          // 获取当前数据
          var data = {}; // 错误数量

          var errs = 0; // 遍历配置数据

          var _iterator6 = Object(createForOfIteratorHelper["a" /* default */])(self.config),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var conf = _step6.value;
              // 判断是否禁用配置
              if (conf.disabled) continue; // 获取配置名称

              var name = conf.name; // 判断是否有效

              if (!name || name.length === 0) {
                // 数据无效，回调失败
                reject(customTip || axLang.text('form.config.invalid')); // 退出

                return;
              } // 获取配置数据


              var comps = self.axmap.get(name); // 判断是否有效

              if (!comps || comps.length === 0) {
                // 未找到组件，回调失败
                reject(customTip || axLang.text('form.comp.invalid', name)); // 退出

                return;
              } // 获取组件数据值
              // const value = self.convertToType(conf.type, self.data[name]);


              var value = self.data[name]; // 定义是否遇到错误标识

              var hasErr = false; // 存在提示对象，遍历验证数据

              for (var i = 0, c = comps.length; i < c; i++) {
                // 获取组件对象
                var comp = comps[i]; // 分别为每个组件验证数据，验证失败则累加错误数量

                if (!self.validateValue(conf, comp, value, 'validate')) {
                  // 设置遇到错误
                  if (!hasErr) hasErr = true; // 增加错误次数

                  errs++;
                }
              } // 判断是否存在错误，无错误则隐藏提示


              if (!hasErr) {
                // 获取之前的数据
                var tip = self.tipsmap[conf.name]; // 判断是否已经显示

                if (tip && tip.shown) {
                  // 已经显示，取消显示
                  tip.shown = false; // 重新设置数据

                  self.$set(self.tipsmap, conf.name, tip);
                }
              } // 设置值到对象


              data[name] = self.convertToType(conf.type, self.data[name]);
            } // 判断是否存在错误

          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          if (errs === 0) {
            // 回调成功
            resolve(data);
          } else {
            // 校验失败，返回失败信息
            reject(customTip || axLang.text('form.vlidate.failed'));
          }
        } else {
          // 数据无效，回调失败
          reject(customTip || axLang.text('form.config.invalid'));
        }
      });
    }
    /**
     * 隐藏所有验证结果提示文本
     */

  }, {
    key: "hideValidateTips",
    value: function hideValidateTips() {
      // 判断是否存在配置数据
      if (this.config && this.config.length > 0) {
        // 遍历配置数据
        var _iterator7 = Object(createForOfIteratorHelper["a" /* default */])(this.config),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var conf = _step7.value;
            // 获取之前的数据
            var tip = this.tipsmap[conf.name]; // 判断是否已经显示

            if (tip && tip.shown) {
              // 已经显示，取消显示
              tip.shown = false; // 重新设置数据

              this.$set(this.tipsmap, conf.name, tip);
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }
    /**
     * 把数据转换为指定类型
     */

  }, {
    key: "convertToType",
    value: function convertToType(type, value) {
      // 定义返回值
      var ret; // 判断数据类型

      if ((type & ax_com_core_default.a.FormValueType.ARRAY) === ax_com_core_default.a.FormValueType.ARRAY) {
        // 判断是否有效
        if (value === undefined || value === null) return null; // 判断是否是数组

        if (value instanceof Array) {
          // 获取异或结果，去除 ARRAY 数据，仅保留数组内部数据类型
          var stype = type ^ ax_com_core_default.a.FormValueType.ARRAY; // 遍历数组处理

          for (var index = 0; index < value.length; index++) {
            // 处理数组数据
            value[index] = this.convertToType(stype, value[index]);
          } // 返回数组


          return value;
        } else {
          // 返回默认数组
          return null;
        }
      } else if ((type & ax_com_core_default.a.FormValueType.STRING) === ax_com_core_default.a.FormValueType.STRING) {
        // 转换为字符串
        ret = value === undefined || value === null ? null : value.replace(/^\s*/, '') + '';
      } else if ((type & ax_com_core_default.a.FormValueType.INT) === ax_com_core_default.a.FormValueType.INT) {
        // 转换为整数
        ret = parseInt(value + '', 10); // 判断是否有效

        if (isNaN(ret)) ret = 0;
      } else if ((type & ax_com_core_default.a.FormValueType.FLOAT) === ax_com_core_default.a.FormValueType.FLOAT) {
        // 转换为浮点数
        ret = parseFloat(value + ''); // 判断是否有效

        if (isNaN(ret)) ret = 0;
      } else if ((type & ax_com_core_default.a.FormValueType.DOUBLE) === ax_com_core_default.a.FormValueType.DOUBLE) {
        // 转换为浮点数
        ret = +value; // 判断是否有效

        if (isNaN(ret)) ret = 0;
      } else if ((type & ax_com_core_default.a.FormValueType.BOOLEAN) === ax_com_core_default.a.FormValueType.BOOLEAN) {
        // 转换布尔值
        if (value === undefined || value === null) {
          ret = false;
        } else if (typeof value === 'string') {
          ret = value.toUpperCase();
          ret = ret === 'TRUE' || ret === 'Y' || ret === '1';
        } else {
          ret = !!value;
        }
      } else if ((type & ax_com_core_default.a.FormValueType.DATE) === ax_com_core_default.a.FormValueType.DATE) {
        // 日期类型
        ret = external_dayjs_default()(value).toDate();
      } else {
        // 其它情况
        ret = value;
      } // 返回数据


      return ret;
    }
    /**
     * 验证数据是否有效
     */

  }, {
    key: "validateValue",
    value: function validateValue(conf, comp, value, eventType) {
      // 判断是否禁用了配置
      if (conf.disabled) return true; // 判断是否存在外部验证方法

      if (typeof conf.validator === 'function') {
        // 调用外部验证方法验证
        var vres = conf.validator(value, conf, comp, eventType); // 判断是否有效

        if (vres) {
          // 存在验证结果，判断是否成功
          if (vres.passed) {
            // 如果是成功,而且tooltip是开着的话
            if (this.tooltip) {
              // 关闭气泡提示
              this.$emit('showTooltip', false);
            } // 返回成功


            return comp.validatePassed = true;
          } else {
            // 验证失败，显示错误信息
            var tip = this.tipsmap[conf.name]; // 判断是否已经显示

            if (tip) {
              // 获取组件相对位置
              var pos = app_core_framework_["AxDomUtils"].getDomPosition(comp.$el, this.$el); // 已经显示，取消显示

              tip.top = pos.top + (comp.$el ? comp.$el.offsetHeight : 0) + 2;
              tip.left = pos.left;
              tip.message = vres.message;
              tip.shown = true; // 重新设置数据

              this.$set(this.tipsmap, conf.name, tip);
            } // 返回失败


            return comp.validatePassed = false;
          }
        }
      } // 不存在外部验证，判断是否数组


      if ((conf.type & ax_com_core_default.a.FormValueType.ARRAY) === ax_com_core_default.a.FormValueType.ARRAY) {
        // 判断数据是否有效
        if (conf.required && !(value && value instanceof Array && value.length > 0)) {
          // 显示错误信息
          this.showTypeErrMessage(comp, 'form.array.required', conf); // 返回无效

          return comp.validatePassed = false;
        } // 数组类型，遍历验证数据


        for (var index = 0; index < value.length; index++) {
          // 获取一个数值
          var v = value[index]; // 验证数据

          if (!this.validateType(conf.type ^ ax_com_core_default.a.FormValueType.ARRAY, conf, comp, v)) {
            // 返回失败
            return comp.validatePassed = false;
          }
        } // 返回成功


        return comp.validatePassed = true;
      } else {
        // 其它类型，直接校验类型
        return comp.validatePassed = this.validateType(conf.type, conf, comp, value);
      }
    }
    /**
     * 验证类型数据是否有效
     */

  }, {
    key: "validateType",
    value: function validateType(type, conf, comp, value) {
      // 如果不是必填项，而且是空值时，判断为有效  HACK: 逻辑有待商榷 ❓
      if (!conf.required && !value) {
        return true;
      } // 先进行输入值判断，检查输入值是否允许


      if (!this.validateInput(type, conf, comp, value)) {
        return false;
      } // 转换后的数据


      value = this.convertToType(conf.type, value); // 不需要判断布尔值和再次判断数组

      if ((type & ax_com_core_default.a.FormValueType.BOOLEAN) === ax_com_core_default.a.FormValueType.BOOLEAN || (type & ax_com_core_default.a.FormValueType.ARRAY) === ax_com_core_default.a.FormValueType.ARRAY) return true; // 判断类型

      if ((type & ax_com_core_default.a.FormValueType.STRING) === ax_com_core_default.a.FormValueType.STRING || (type & ax_com_core_default.a.FormValueType.PASSWORD) === ax_com_core_default.a.FormValueType.PASSWORD) {
        // 字符串类型，判断是否有效
        if (conf.required && !value) {
          // 无效，显示错误
          this.showTypeErrMessage(comp, 'form.string.required', conf); // 返回无效

          return false;
        } else if (!this.checkNumber(app_core_framework_["AxStringUtils"].getBytesLength(value), conf.min, conf.max)) {
          // 验证失败，获取提示文本
          var msg = conf.min !== undefined && conf.max !== undefined ? 'form.string.invalid' : conf.min !== undefined ? 'form.string.min.invalid' : 'form.string.max.invalid'; // 显示提示信息

          this.showTypeErrMessage(comp, msg, conf); // 返回失败

          return false;
        }
      } else if ((type & ax_com_core_default.a.FormValueType.DATE) === ax_com_core_default.a.FormValueType.DATE) {
        // 日期类型，判断是否有效
        if (conf.required && value === undefined || value === null) {
          // 无效，显示错误
          this.showTypeErrMessage(comp, 'form.date.required', conf); // 返回无效

          return false;
        } else if (!this.checkNumber(value === undefined || value === null ? 0 : value.valueOf(), conf.min, conf.max)) {
          // 验证失败，获取提示文本
          var _msg = conf.min !== undefined && conf.max !== undefined ? 'form.date.invalid' : conf.min !== undefined ? 'form.date.min.invalid' : 'form.date.max.invalid'; // 显示提示信息


          this.showTypeErrMessage(comp, _msg, conf); // 返回失败

          return false;
        }
      } else if ((type & ax_com_core_default.a.FormValueType.FLOAT) === ax_com_core_default.a.FormValueType.FLOAT || (type & ax_com_core_default.a.FormValueType.DOUBLE) === ax_com_core_default.a.FormValueType.DOUBLE) {
        // 浮点数
        if (conf.digits || conf.digits === 0) {
          // 小数位判断
          var reg = new RegExp("^([+-]?)[0-9]+([.][0-9]{0,".concat(conf.digits, "})?$"));

          if (!reg.test(value)) {
            // 显示提示信息
            this.showTypeErrMessage(comp, 'form.num.digits.invalid', conf); // 返回失败

            return false;
          }
        } else if (!this.checkNumber(value, conf.min, conf.max)) {
          // 验证失败，获取提示文本
          var _msg2 = conf.min !== undefined && conf.max !== undefined ? 'form.num.invalid' : conf.min !== undefined ? 'form.num.min.invalid' : 'form.num.max.invalid'; // 显示提示信息


          this.showTypeErrMessage(comp, _msg2, conf); // 返回失败

          return false;
        }
      } else {
        // 其它为数值类型，判断是否有效
        if (!this.checkNumber(value, conf.min, conf.max)) {
          // 验证失败，获取提示文本
          var _msg3 = conf.min !== undefined && conf.max !== undefined ? 'form.num.invalid' : conf.min !== undefined ? 'form.num.min.invalid' : 'form.num.max.invalid'; // 显示提示信息


          this.showTypeErrMessage(comp, _msg3, conf); // 返回失败

          return false;
        }
      } // 默认返回成功


      return true;
    }
    /**
     * 检查输入值是否有效
     * @param type
     * @param conf
     * @param comp
     * @param value
     */

  }, {
    key: "validateInput",
    value: function validateInput(type, conf, comp, value) {
      if ((type & ax_com_core_default.a.FormValueType.FLOAT) === ax_com_core_default.a.FormValueType.FLOAT || (type & ax_com_core_default.a.FormValueType.DOUBLE) === ax_com_core_default.a.FormValueType.DOUBLE) {
        // 判断输入是否是数字
        if (!/^[+\-]?\d+(\.\d+)?$/.test("".concat(value))) {
          // 验证失败，获取提示文本
          var msg = conf.min !== undefined && conf.max !== undefined ? 'form.num.invalid' : conf.min !== undefined ? 'form.num.min.invalid' : 'form.num.max.invalid'; // 显示提示信息

          this.showTypeErrMessage(comp, msg, conf); // 返回失败

          return false;
        }
      } else if ((type & ax_com_core_default.a.FormValueType.INT) === ax_com_core_default.a.FormValueType.INT) {
        // 判断输入是否是数字
        if (!/^[+\-]?\d+$/.test("".concat(value))) {
          // 验证失败，获取提示文本
          var _msg4 = conf.min !== undefined && conf.max !== undefined ? 'form.num.invalid' : conf.min !== undefined ? 'form.num.min.invalid' : 'form.num.max.invalid'; // 显示提示信息


          this.showTypeErrMessage(comp, _msg4, conf); // 返回失败

          return false;
        }
      }

      return true;
    }
    /**
     * 检查数值是否在最大值与最小值之间
     * @param {number} num 需检查的数值
     * @param {number} min 最小值
     * @param {number} max 最大值
     * @returns {boolean} 是否成功
     */

  }, {
    key: "checkNumber",
    value: function checkNumber(num, min, max) {
      // 判断是否有效
      if (num === undefined || isNaN(num)) return false; // 判断是否符合最小条件

      if (min !== undefined && !isNaN(min)) {
        // 设置了最小值且小于最小值则返回失败
        if (num < min) return false;
      } // 判断是否符合最大条件


      if (max !== undefined && !isNaN(max)) {
        // 存在最大检测并大于最大数值则返回失败
        if (num > max) return false;
      } // 符合条件则返回校验成功


      return true;
    }
    /**
     * 校验失败后显示提示信息处理
     */

  }, {
    key: "showTypeErrMessage",
    value: function showTypeErrMessage(comp, message, conf) {
      // 判断是否存在元件
      if (!this.$el || !comp.$el) return; // 字符串文本模式：0 - 名称；1 - 最小值；2 - 最大值；3 - 半数最大值；4 - 正则表达式
      // 修正最小值

      var mins = conf.min !== undefined && !isNaN(conf.min) ? this.getDateString(conf, conf.min) : ''; // 修正最大值

      var maxs = conf.max !== undefined && !isNaN(conf.max) ? this.getDateString(conf, conf.max) : ''; // 获取语言对象

      var axLang = ax_com_core_default.a.getAxLang(); // 获取提示文字

      var text = axLang.text(message, conf.text.toLowerCase(), mins, maxs); // 获取排除的正则表达式字符串

      if (conf.exreg && conf.exreg.length > 0) {
        // 获取正则表达式文本
        text = text + this.getExRegText(conf.exreg);
      } else if (conf.max !== undefined && !isNaN(conf.max) && (conf.type & ax_com_core_default.a.FormValueType.PASSWORD) === 0) {
        // 具有最大数值，增加双字节信息
        text = text + axLang.text('form.string.miltiword', conf.max); // FIX: /2 的汉字 ,改成 字符
      } // 获取浮点的小数位限制


      if (conf.digits || conf.digits === 0) {
        // 获取正则表达式文本
        text = axLang.text(message, conf.digits);
      } // 如果有自定义描述，使用自定义描述


      if (conf.spText) {
        text = conf.spText;
      } // 获取之前的数据


      var tip = this.tipsmap[conf.name]; // 判断是否已经显示

      if (tip) {
        // 获取组件相对位置
        var pos = app_core_framework_["AxDomUtils"].getDomPosition(comp.$el, this.$el); // 已经显示，取消显示

        tip.top = pos.top + (comp.$el ? comp.$el.offsetHeight : 0);
        tip.left = pos.left;
        tip.message = text;
        tip.shown = true; // 重新设置数据

        if (this.tooltip) {
          // 如果是气泡提示模式，显示气泡提示
          this.$emit('showTooltip', true, tip);
        } else {
          this.$set(this.tipsmap, conf.name, tip);
        }
      }
    }
    /**
     * 判断并转换为日期格式，非日期格式则返回原始数据字符串
     */

  }, {
    key: "getDateString",
    value: function getDateString(conf, value) {
      // 判断是否是日期格式
      if ((conf.type & ax_com_core_default.a.FormValueType.DATE) === ax_com_core_default.a.FormValueType.DATE) {
        // 日期类型，格式化处理
        return external_dayjs_default()(new Date(value)).format('yyyy-mm-dd');
      } // 默认返回数据


      return value + '';
    }
    /**
     * 分析正则表达式，转换为文本信息
     */

  }, {
    key: "getExRegText",
    value: function getExRegText(regstr) {
      // 获取语言对象
      var axLang = ax_com_core_default.a.getAxLang(); // 处理正则表达式

      var sps = axLang.text('form.reg.separator'); // 检查特殊符号

      var spSymbol = /[\[\]\^\(\)\*]/g;
      var isInclude = (regstr.match(spSymbol) || []).includes('^');
      var note = regstr.replace(spSymbol, '');
      note = note.replace(/\\w/g, axLang.text('form.reg.words') + sps);
      note = note.replace(/\\d/g, axLang.text('form.reg.numbers') + sps);
      note = note.replace(/\\s/g, axLang.text('form.reg.spaces') + sps);
      note = note.replace(/\\/g, sps);
      note = note.replace(new RegExp('(' + sps + '){2,}', 'img'), sps);
      note = note.replace(new RegExp('(' + sps + ')+$', 'img'), ''); // 根据不同的情况返回对应的描述 p.s. 只支持简易正则

      return axLang.text(isInclude ? 'form.reg.noteInclude' : 'form.reg.noteExclude', note);
    }
    /* -------------------------- TODO: 监测数据变化 -------------------------- */

    /**
     * 监测配置变化
     */

  }, {
    key: "initConfig",
    value: function initConfig() {
      // 清理集合
      this.cmap.clear(); // 重置数据

      this.tipsmap = {}; // 判断是否存在数据

      if (!this.config || this.config.length === 0) return; // 遍历设置数据

      var _iterator8 = Object(createForOfIteratorHelper["a" /* default */])(this.config),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var conf = _step8.value;
          // 增加到集合
          this.cmap.set(conf.name, conf); // 增加错误提示配置数据

          this.$set(this.tipsmap, conf.name, {
            top: 0,
            left: 0,
            message: '',
            shown: false
          });
        } // 刷新表单信息

      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      this.refreshForm();
    }
  }]);

  return AxForm;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], formvue_type_script_lang_ts_AxForm.prototype, "data", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], formvue_type_script_lang_ts_AxForm.prototype, "config", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], formvue_type_script_lang_ts_AxForm.prototype, "showTip", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], formvue_type_script_lang_ts_AxForm.prototype, "tooltip", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'form_table',
  type: String
})], formvue_type_script_lang_ts_AxForm.prototype, "presetStyle", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('config')], formvue_type_script_lang_ts_AxForm.prototype, "initConfig", null);

formvue_type_script_lang_ts_AxForm = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change'
  },
  components: {}
})], formvue_type_script_lang_ts_AxForm);
/* harmony default export */ var formvue_type_script_lang_ts_ = (formvue_type_script_lang_ts_AxForm);
// CONCATENATED MODULE: ./packages/ax-form/src/form.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_formvue_type_script_lang_ts_ = (formvue_type_script_lang_ts_); 
// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./packages/ax-form/src/form.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_formvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ax-form/src/form.vue"
/* harmony default export */ var src_form = (component.exports);
// CONCATENATED MODULE: ./packages/ax-form/index.ts



Object(install["a" /* addInstall */])(src_form.name, src_form);
/* harmony default export */ var ax_form = __webpack_exports__["default"] = (src_form);

/***/ })
/******/ ]);