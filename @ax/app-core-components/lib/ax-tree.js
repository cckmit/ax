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
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
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
/* 23 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map.js");

/***/ }),
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
/* 30 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each.js");

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.splice.js");

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.set.js");

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
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
/* 67 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/tree");

/***/ }),
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
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys.js");

/***/ }),
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(12);

// EXTERNAL MODULE: ./packages/install.ts
var install = __webpack_require__(11);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-tree/src/tree.vue?vue&type=template&id=70404968&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_tree",
      class: [
        {
          ax_tree_border: _vm.border
        }
      ]
    },
    [
      _c("el-tree", {
        ref: "elTree",
        attrs: {
          "node-key": "id",
          data: _vm.handler.root,
          "current-node-key": _vm.modelValue,
          "default-expand-all": _vm.defaultExpandAll,
          props: _vm.propsConfig,
          load: _vm.loadChildrenData,
          lazy: _vm.loadChildren !== undefined,
          "default-expanded-keys": _vm.defaultExpandedIds,
          "show-checkbox": _vm.enableCheckbox,
          "default-checked-keys": _vm.defaultCheckedIds,
          "expand-on-click-node": false,
          "empty-text": "",
          "highlight-current": "",
          "check-strictly": _vm.checkStrictly,
          "auto-expand-parent": ""
        },
        on: {
          "current-change": _vm.handleCurrentChange,
          "node-click": _vm.handleNodeClick,
          "node-contextmenu": _vm.handleContextmenu,
          "check-change": _vm.handleCheckChange,
          "node-expand": _vm.handleExpand,
          "node-collapse": _vm.handleCollapse,
          check: _vm.handleCheck
        },
        scopedSlots: _vm._u(
          [
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _c(
                  "span",
                  {
                    staticClass: "tree_node",
                    class: [_vm.getNodeValueByKey(data, "nodeClassKey")],
                    on: {
                      dblclick: function($event) {
                        return _vm.handleDblClick(data)
                      }
                    }
                  },
                  [
                    _vm._t(
                      "default",
                      function() {
                        return [
                          _vm.enableIcon &&
                          _vm.getNodeValueByKey(data, "iconKey")
                            ? _c("i", {
                                staticClass: "tree_icon",
                                class: _vm.getNodeValueByKey(data, "iconKey"),
                                style: {
                                  color: _vm.getNodeValueByKey(
                                    data,
                                    "iconColorKey",
                                    undefined
                                  )
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.enableIcon &&
                          !_vm.getNodeValueByKey(data, "iconKey") &&
                          _vm.getNodeValueByKey(data, "imageKey")
                            ? _c("span", { staticClass: "tree_image" }, [
                                _c("img", {
                                  attrs: {
                                    src: _vm.getNodeValueByKey(
                                      data,
                                      "imageKey"
                                    ),
                                    alt: ""
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._t("prefix", null, { nodeData: data.data }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "tree_text",
                              style: {
                                color: data.data[
                                  _vm.config ? _vm.config.disabledKey || "" : ""
                                ]
                                  ? "#ccc"
                                  : ""
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(data.text) +
                                  "\n        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm._t("content", null, { nodeData: data.data })
                        ]
                      },
                      { data: data }
                    )
                  ],
                  2
                )
              }
            }
          ],
          null,
          true
        )
      }),
      _vm._v(" "),
      _vm.debugMode
        ? _c("textarea", {
            staticClass: "tree_debug",
            domProps: { value: _vm.debugModeInfo }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-tree/src/tree.vue?vue&type=template&id=70404968&

// EXTERNAL MODULE: external "element-ui/lib/tree"
var tree_ = __webpack_require__(67);
var tree_default = /*#__PURE__*/__webpack_require__.n(tree_);

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

// EXTERNAL MODULE: external "core-js/modules/es.array.map.js"
var es_array_map_js_ = __webpack_require__(23);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string.js"
var es_object_to_string_js_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/es.set.js"
var es_set_js_ = __webpack_require__(44);

// EXTERNAL MODULE: external "core-js/modules/es.string.iterator.js"
var es_string_iterator_js_ = __webpack_require__(17);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.iterator.js"
var web_dom_collections_iterator_js_ = __webpack_require__(18);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(13);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-com-core"
var ax_com_core_ = __webpack_require__(4);
var ax_com_core_default = /*#__PURE__*/__webpack_require__.n(ax_com_core_);

// EXTERNAL MODULE: external "core-js/modules/es.map.js"
var es_map_js_ = __webpack_require__(20);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each.js"
var web_dom_collections_for_each_js_ = __webpack_require__(30);

// EXTERNAL MODULE: external "core-js/modules/es.object.keys.js"
var es_object_keys_js_ = __webpack_require__(86);

// EXTERNAL MODULE: external "core-js/modules/es.array.splice.js"
var es_array_splice_js_ = __webpack_require__(37);

// CONCATENATED MODULE: ./packages/ax-tree/src/tree-core.ts













/**
 * 目录数据处理类
 */
var tree_core_TreeHandler = /*#__PURE__*/function () {
  function TreeHandler() {
    Object(classCallCheck["a" /* default */])(this, TreeHandler);

    Object(defineProperty["a" /* default */])(this, "config", {
      idKey: 'id',
      pidKey: 'pid',
      iconKey: 'icon',
      iconColorKey: 'iconColor',
      imageKey: 'image',
      nodeClassKey: 'nodeClass',
      textKey: 'text',
      disabledKey: 'disabled',
      childCountKey: 'count',
      childrenKey: 'children'
    });

    Object(defineProperty["a" /* default */])(this, "currentMaxId", 0);

    Object(defineProperty["a" /* default */])(this, "dataMap", new Map());

    Object(defineProperty["a" /* default */])(this, "rootArray", []);
  }

  Object(createClass["a" /* default */])(TreeHandler, [{
    key: "initConfig",
    value: // --------------------------------- 对外数据方法 ---------------------------------

    /**
     * 初始化配置处理
     * @param conf 当前配置对象
     */
    function initConfig(conf) {
      var _this = this;

      // 判断是否有效
      if (!conf) return this.config; // 设置数据属性

      Object.keys(this.config).forEach(function (key) {
        var confElement = conf[key];

        if (confElement) {
          _this.config[key] = confElement;
        }
      }); // 判断是否存在数据

      if (this.dataMap.size > 0) {
        // 遍历数据，转换为数组
        var _iterator = Object(createForOfIteratorHelper["a" /* default */])(this.dataMap),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = Object(slicedToArray["a" /* default */])(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            // 更新配置数据
            this.updateMapData(value);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } // 返回数据对象


      return this.config;
    }
    /**
     * 当前根数据数组
     */

  }, {
    key: "root",
    get: function get() {
      return this.rootArray;
    }
    /**
     * 当前目录数据集合
     */

  }, {
    key: "map",
    get: function get() {
      return this.dataMap;
    }
    /**
     * 获取当前配置数据
     */

  }, {
    key: "configs",
    get: function get() {
      return this.config;
    }
    /**
     * 根据数据对象获取目录唯一数据序号（未找到则返回 undefined ）
     * @param data 当前数据对象
     * @returns string 唯一数据序号
     */

  }, {
    key: "getDataId",
    value: function getDataId(data) {
      // 判断是否有效
      if (!data) return undefined; // 获取数据序号

      var id = data[this.config.idKey]; // 判断是否有效

      if (id || id === 0) return '' + id; // 未找到，遍历集合查找数据

      var _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(this.dataMap),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = Object(slicedToArray["a" /* default */])(_step2.value, 2),
              key = _step2$value[0],
              value = _step2$value[1];

          // 判断是否与数据相同
          if (value.data === data) return key;
        } // 默认返回未找到

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return undefined;
    }
    /**
     * 通过数据标识获取目录数据对象（未找到则返回 undefined ）
     * @param id 数据唯一标识
     * @returns TreeMapData 目录数据对象
     */

  }, {
    key: "getDataById",
    value: function getDataById(id) {
      return this.dataMap.get(id + '');
    }
    /**
     * 获取指定标识的父节点数据对象（未找到则返回 undefined ）
     * @param id  数据唯一标识
     * @returns TreeMapData | undefined 父节点数据对象
     */

  }, {
    key: "getParent",
    value: function getParent(id) {
      var data = this.dataMap.get(id + '');
      if (!data) return undefined;
      var pdata = this.dataMap.get(data.pid);
      return pdata;
    }
    /**
     * 初始化目录数据处理
     * @param data 当前目录数据数组
     */

  }, {
    key: "initData",
    value: function initData(data) {
      // 重置数组
      this.rootArray = []; // 重置集合

      this.dataMap.clear(); // 增加数据处理

      this.addData(data);
    }
    /**
     * 增加数据到目录
     * @param data 需要增加的数据数组
     * @param [defaultPid] 默认父节点标识(设置为 undefined 表示不强制设置)
     * @param [position] 数据在父节点下的所有子节点中的增加位置（默认：-1 表示增加到最后，0 表示增加到最前面）
     * @returns TreeMapData[] 数据结果数组
     */

  }, {
    key: "addData",
    value: function addData(data, defaultPid) {
      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      // 判断是否有效
      if (!data || data.length === 0) return []; // 判断是否存在父节点序号

      if (!defaultPid || !this.dataMap.has(defaultPid)) defaultPid = undefined; // 创建数据集数组

      var mapArray = []; // 把数据填充到集合并输出有效的数据数组

      this.createMapDataArray(mapArray, data, defaultPid); // 分析数据并把子节点增加到父节点的子数组内

      this.setDataRelation(mapArray, position); // 返回数据

      return mapArray;
    }
    /**
     * 移除指定节点数据
     * @param id 数据唯一标识
     * @returns 被移除的数据信息
     */

  }, {
    key: "remove",
    value: function remove(id) {
      // 判断是否有效
      if (!id) return undefined; // 获取键数据

      var data = this.dataMap.get(id); // 判断是否存在数据

      if (!data) return undefined; // 从集合移除数据（包括移除子节点数据）

      this.removeMapData(data); // 定义父节点的子数据数组

      var children; // 判断是否有效

      if (data.pid) {
        // 获取父节点
        var parent = this.dataMap.get(data.pid); // 获取父子节点数组

        children = parent ? parent.children : undefined;
      } else {
        // 以根目录数据作为数组
        children = this.rootArray;
      } // 定义默认选中项


      var selectId; // 判断是否存在子数组

      if (children && children.length > 0) {
        // 获取子节点所在位置
        var pos = children.indexOf(data); // 判断是否有效

        if (pos >= 0) {
          // 从父节点的子数组内移除
          children.splice(pos, 1); // 判断是否存在多个数据

          if (children.length > 0) {
            // 获取默认选中数据
            selectId = children[Math.min(pos, children.length - 1)].id;
          }
        }
      } // 判断是否有效


      if (!selectId) {
        // 设置父节点为选中项
        selectId = data.pid; // 判断是否存在数据

        if (!selectId && this.rootArray.length > 0) {
          // 设置第一项
          selectId = this.rootArray[0].id;
        }
      } // 返回移除的数据


      return {
        data: data,
        selectId: selectId
      };
    }
    /**
     * 更新数据到目录节点处理
     * @param data 数据对象
     * @param [id] 指定的序号
     */

  }, {
    key: "updateData",
    value: function updateData(data, id) {
      // 判断是否存在数据
      if (!data) return; // 判断是否指定了序号

      if (!id) id = this.getDataId(data); // 判断是否有效

      if (!id) return; // 获取之前的数据对象

      var prev = this.dataMap.get(id); // 判断是否有效

      if (!prev) return; // 更新数据

      prev.text = data[this.config.textKey] || prev.text; // prev.data = data;
      // 修改后: 把新的字段覆盖原来的字段

      prev.data = data;
    } // --------------------------------- 内部数据方法 ---------------------------------

    /**
     * 获取下一个唯一序号处理
     * @returns  唯一序号值
     */

  }, {
    key: "nextId",
    value: function nextId(id) {
      // 判断是否有效
      if (id || id === 0) return '' + id; // 循环生成唯一标识

      do {
        // 累加数据
        this.currentMaxId++; // 返回结果

        id = '$ID' + this.currentMaxId; // 判断是否已经存在相同的标识
      } while (this.dataMap.has(id)); // 返回数据


      return id;
    }
    /**
     * 分析数据并把子节点增加到父节点的子数组内
     * @param data  当前目录数据数组
     * @param [position] 在数组内的位置当前位置
     */

  }, {
    key: "setDataRelation",
    value: function setDataRelation(data) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      // 判断增加位置
      if (position <= 0) {
        // 增加到最后，按原有顺序增加
        var _iterator3 = Object(createForOfIteratorHelper["a" /* default */])(data),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var value = _step3.value;
            // 把数据增加到其父节点下
            this.addToParent(value, position);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else {
        // 已经指定了位置，按倒序增加
        for (var i = data.length - 1; i >= 0; i--) {
          // 把数据增加到其父节点下
          this.addToParent(data[i], position);
        }
      }
    }
    /**
     * 把数据增加到其父节点下
     * @param data 需要增加的数据
     * @param position 在数组内增加到的位置
     */

  }, {
    key: "addToParent",
    value: function addToParent(data, position) {
      // 获取父数据标识
      var pid = data.pid; // 定义子节点数组

      var children; // 判断是否为根目录节点或者未找到父节点对象，增加到根目录

      if (pid === undefined || !this.dataMap.has(pid)) {
        // 作为根节点数据
        children = this.rootArray;
      } else {
        // 非根节点数据，获取父节点数据对象
        var parent = this.dataMap.get(pid); // 判断是否有效

        if (!parent) return; // 获取父节点的子数组

        children = parent.children;
      } // 判断是否有效


      if (!children) return; // 判断增加到的位置

      if (position < 0 || position >= children.length) {
        // 默认增加到最后
        children.push(data);
      } else {
        // 增加到指定位置
        children.splice(position, 0, data);
      }
    }
    /**
     * 创建数据集数组
     * @param data 目录数据数组
     * @param defaultPid 默认父节点标识(设置为 undefined 表示不强制设置)
     */

  }, {
    key: "createMapDataArray",
    value: function createMapDataArray(output, data, defaultPid) {
      // 判断是否有效
      if (!data || data.length === 0) return; // 遍历处理数据

      var _iterator4 = Object(createForOfIteratorHelper["a" /* default */])(data),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var value = _step4.value;
          // 创建一个集数据
          var mapdata = this.createMapData(value, defaultPid); // 判断是否有效

          if (!mapdata) continue; // 增加到数组

          output.push(mapdata); // 获取子数据数组

          var children = value[this.config.childrenKey]; // 判断是否存在子数据数组

          if (children && children.length > 0 && children instanceof Array) {
            // 存在子节点数据，生成子节点数据集合
            this.createMapDataArray(output, children, mapdata.id);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * 创建目录集数据对象处理
     * @param data 当前目录数据
     * @param defaultPid 默认父节点标识(设置为 undefined 表示不强制设置)
     * @returns TreeMapData 目录集数据
     */

  }, {
    key: "createMapData",
    value: function createMapData(data, defaultPid) {
      // 判断是否有效
      if (!data) return null; // 获取当前序号

      var id = this.nextId(data[this.config.idKey]); // 获取父节点序号

      var pid = defaultPid === undefined ? data[this.config.pidKey] : defaultPid; // 修正为默认父节点数据

      if (!pid) {
        pid = undefined;
      } else {
        // 转换为字符串
        pid += '';
      } // 获取文本标签


      var text = data[this.config.textKey];
      var disabled = data[this.config.disabledKey]; // 判断是否在集合内存在

      if (this.dataMap.has(id)) {
        // 已存在数据，获取之前的数据对象
        var prev = this.dataMap.get(id); // 判断是否有效

        if (prev) {
          // 先从原有的父节点内移除
          this.removeFromParent(prev); // 更新当前节点数据

          prev.pid = pid;
          prev.text = text;
          prev.disabled = disabled;
          prev.data = data; // 返回数据对象

          return prev;
        }
      } // 不存在则创建对象


      var mapdata = {
        id: id,
        pid: pid,
        text: text,
        disabled: disabled,
        data: data,
        children: []
      }; // 把数据增加到集合

      this.dataMap.set(id, mapdata); // 返回数据对象

      return mapdata;
    }
    /**
     * 从数据的父节点下的子数据数组内移除数据
     * @param data 当前数据对象
     */

  }, {
    key: "removeFromParent",
    value: function removeFromParent(data) {
      // 定义父节点的子节点数组
      var children; // 判断是否为根节点数据

      if (!data.pid) {
        // 获取根节点数组
        children = this.rootArray;
      } else {
        // 获取原父节点对象
        var parent = this.dataMap.get(data.pid); // 判断是否有效

        children = parent ? parent.children : undefined;
      } // 判断是否有效


      if (children && children.length > 0) {
        // 查找位置
        var pos = children.indexOf(data); // 判断是否有效

        if (pos >= 0) {
          // 从数组移除
          children.splice(pos, 1);
        }
      }
    }
    /**
     * 从集合内移除数据（同时移除子节点数据）
     */

  }, {
    key: "removeMapData",
    value: function removeMapData(data) {
      // 判断是否存在数据
      if (!data) return; // 从集合移除数据

      this.dataMap.delete(data.id); // 遍历数据子节点

      var children = data.children; // 判断是否有效

      if (children && children.length > 0) {
        // 遍历子节点移除数据
        var _iterator5 = Object(createForOfIteratorHelper["a" /* default */])(children),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var cvalue = _step5.value;
            // 移除数据
            this.removeMapData(cvalue);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
    /**
     * 更新目录节点数据处理
     * @param data 目录数据对象
     */

  }, {
    key: "updateMapData",
    value: function updateMapData(data) {
      // 判断是否存在数据
      if (!data) return; // 更新数据处理

      data.text = data.data[this.config.textKey];
    }
  }]);

  return TreeHandler;
}();
// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-tree/src/tree.vue?vue&type=script&lang=ts&






















var treevue_type_script_lang_ts_AxTree = /*#__PURE__*/function (_AxComCore$AxUICompon) {
  Object(inherits["a" /* default */])(AxTree, _AxComCore$AxUICompon);

  var _super = Object(createSuper["a" /* default */])(AxTree);

  function AxTree() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AxTree);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handler", new tree_core_TreeHandler());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "innerChanges", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "needScrollingKey", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "defaultHighlight", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "defaultExpandAll", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "debugMode", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "config", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "dataArray", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "defaultExpandDeep", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "defaultExpandedIds", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "enableIcon", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "enableCheckbox", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "checkStrictly", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "border", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "defaultCheckedIds", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "loadChildren", void 0);

    return _this;
  }

  Object(createClass["a" /* default */])(AxTree, [{
    key: "debugModeInfo",
    get: // 获取调试输出信息
    function get() {
      if (!this.debugMode) return '';
      var res = 'TIME: ' + new Date().getTime() + '\r\n';
      res += 'ROOT: ' + '\r\n' + JSON.stringify(this.handler.root) + '\r\n\r\n';
      res += 'MAP: ' + '\r\n' + JSON.stringify(this.handler.map) + '\r\n\r\n';
      return res;
    }
    /**
     * 组件监测开始处理
     */

  }, {
    key: "mounted",
    value: function mounted() {
      // 判断是否已经初始化数据
      if (this.dataArray && this.dataArray.length > 0 && this.handler.map.size === 0) {
        // 数据尚未初始化，执行初始化处理
        this.onPropDataChanges(this.dataArray, []);
      }
    } // -------------------------------- TODO: 目录数据属性 -----------------------------------

    /**
     * 获取当前目录的根数据数组
     */

  }, {
    key: "root",
    get: function get() {
      return this.handler.root;
    }
    /**
     * 是否默认展开所有节点
     */

  }, {
    key: "loadChildrenData",
    value:
    /**
     * 加载子节点数据方法
     */
    function loadChildrenData(node, resolve) {
      // 判断是否有效
      if (!this.loadChildren || !node || node.loaded) return; // 判断是否需要加载子节点数据

      var needLoad = node.level === 0 && (!node.data || node.data.length === 0) || node.level > 0 && !this.isEndNodeData(node.data.data); // 判断是否需要加载数据

      if (needLoad) {
        // 获取当前对象
        var self = this; // 获取数据处理

        this.loadChildren(node.level, node.level === 0 || !node.data ? null : node.data.data).then(function (rets) {
          // 增加数据到管理器
          var added = self.handler.addData(rets, node.data.id); // 获取完整的子数据

          var pdata = self.handler.getDataById(node.data.id); // 判断是否有效

          if (pdata && pdata.children) {
            // 回调数据
            resolve(pdata.children);
          } else {
            // 回调数据
            resolve(added);
          } // 获取默认高亮


          var hl = self.defaultHighlight; // 重置数据

          self.defaultHighlight = undefined; // 延时发布数据事件

          self.$nextTick(function () {
            // 判断是否需要高亮
            if (hl) self.setCurrentData(hl); // 发布事件

            self.$emit('loaded', node.data);
          }); // 判断是否需要滚动处理

          if (!self.needScrollingKey) return; // 重新选中

          self.scrollToCurrentItem(self.needScrollingKey); // 复原数据

          self.needScrollingKey = undefined;
        });
      } else {
        // 直接返回数据
        resolve([]);
      }
    }
    /**
     * 判断是否是最终节点数据
     */

  }, {
    key: "isEndNodeData",
    value: function isEndNodeData(data) {
      // 获取数值键
      var countKey = this.handler.configs.childCountKey; // 判断是否有效

      if (!countKey || !data) return true; // 判断是否存在数据及数量

      if (data && Object.prototype.hasOwnProperty.call(data, countKey)) {
        // 获取子节点数量
        var count = parseInt(data[countKey], 10); // 数量不存在或者无子节点数量

        return isNaN(count) || count <= 0;
      } else {
        // 无数据和数量，默认为最终节点
        return true;
      }
    }
    /**
     * 获取当前目录配置数据处理
     */

  }, {
    key: "propsConfig",
    get: function get() {
      var _this2 = this;

      // 初始化设置
      var config = this.handler.initConfig(this.config); // 获取是否为叶子节点（最终节点）

      var isLeaf = this.loadChildren && config.childCountKey ? function (data, node) {
        // 判断是否存在子节点数据
        if (data && data.children && data.children.length > 0) return false; // 判断是否存在数据及数量

        return _this2.isEndNodeData(data.data);
      } : false; // 返回配置数据

      return {
        key: 'id',
        label: 'text',
        disabled: 'disabled',
        children: 'children',
        isLeaf: isLeaf
      };
    }
    /**
     * 获取节点的某个字段
     * @param data
     * @param key
     * @param defValue
     * @returns {any}
     */

  }, {
    key: "getNodeValueByKey",
    value: function getNodeValueByKey(data, key) {
      var defValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      return data !== null && data !== void 0 && data.data ? data.data[this.handler.configs[key]] : defValue;
    }
    /**
     * 检测传入的数据变化
     */

  }, {
    key: "onPropDataChanges",
    value: function onPropDataChanges(data, prev) {
      var _this3 = this;

      // 初始化数据处理
      this.handler.initData(data); // 延时展开节点

      this.$nextTick(function () {
        // 判断是否存在默认展开深度
        if (_this3.defaultExpandDeep && _this3.defaultExpandDeep > 0) {
          // 展开数据处理
          _this3.expandByDeep(_this3.handler.root, 0, _this3.defaultExpandDeep);
        } // 获取当前选中的数据


        var selected = _this3.getCurrentId(); // 判断是否有效


        if (!selected && _this3.root.length > 0) selected = _this3.root[0].id; // 判断是否有效

        if (selected && _this3.handler.map.has(selected)) {
          // 指示选中数据
          _this3.setCurrentId(selected); // 发布事件


          _this3.$emit('change', selected, _this3.handler.getDataById(selected));
        }
      });
    }
    /**
     * 展开指定深度的节点
     */

  }, {
    key: "expandByDeep",
    value: function expandByDeep(array, deep, maxDeep) {
      // 判断是否有效
      if (deep >= maxDeep) return; // 累计数量

      deep++; // 获取当前数组数据

      for (var i = 0, c = array.length; i < c; i++) {
        // 获取一个数据
        var data = array[i]; // 展开数据

        this.expand(data.id); // 判断是否需要继续展开

        if (deep < maxDeep && data.children && data.children.length > 0) {
          // 继续展开下级节点
          this.expandByDeep(data.children, deep, maxDeep);
        }
      }
    }
    /**
     * 双击栏目打开或关闭节点
     */

  }, {
    key: "handleDblClick",
    value: function handleDblClick(data, event) {
      // 获取当前节点标识
      var id = data.id; // 判断是否已经打开

      if (this.isExpanded(id)) {
        // 合上节点
        this.collapse(id);
      } else {
        // 打开节点
        this.expand(id);
      }
    } // -------------------------------- TODO: 目录数据方法 -----------------------------------

    /**
     * 根据数据对象获取目录唯一数据序号（未找到则返回 undefined ）
     * @param data 当前数据对象
     * @returns string 唯一数据序号
     */

  }, {
    key: "getDataId",
    value: function getDataId(data) {
      return this.handler.getDataId(data);
    }
    /**
     * 通过数据标识获取目录数据对象（未找到则返回 undefined ）
     * @param id 数据唯一标识
     * @returns AxComCore.ITreeMapData 目录数据对象
     */

  }, {
    key: "getDataById",
    value: function getDataById(id) {
      return this.handler.getDataById(id);
    }
    /**
     * 获取所有数据标识的数组副本
     */

  }, {
    key: "getIds",
    value: function getIds() {
      var rets = [];

      var _iterator = Object(createForOfIteratorHelper["a" /* default */])(this.handler.map),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = Object(slicedToArray["a" /* default */])(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          rets.push(key);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return rets;
    }
    /**
     * 增加数据到目录（若增加到根目录时设置 parentId 为 undefined）
     * @param data 需要增加到目录的数据或数组
     * @param parentId 父节点数据唯一标识（若增加到根目录时设置为 undefined）
     * @param position 数据在父节点下的所有子节点中的增加位置（默认：-1 表示增加到最后，0 表示增加到最前面）
     * @param highlight 是否高亮选中新增加的数据
     * @returns AxComCore.ITreeMapData[] 增加结果数据数组
     */

  }, {
    key: "add",
    value: function add(data, parentId) {
      var _this4 = this;

      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var highlight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      // 判断是否有效
      if (!data) return []; // 定义数据数组

      var array; // 判断是否为数组

      if (data instanceof Array) {
        // 获取数组
        array = data;
      } else {
        // 转换为数组
        array = [data];
      } // 增加数据处理


      var mdata = this.handler.addData(array, parentId, position); // 判断是否存在数据

      if (mdata.length === 0) return mdata; // 指示内部改变了数据

      this.innerChanges = true; // 判断是否懒加载模式

      if (this.loadChildren) {
        // 懒加载模式，定义父节点集
        var pids = new Set(); // 获取目录对象

        var etree = this.$refs.elTree; // 遍历获取父节点数据

        var _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(mdata),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            // 获一个数据
            var pid = item.pid; // 判断是否具有子节点数据

            if (!this.isEndNodeData(item.data)) {
              // 非最终节点，有子节点数据，直接调用增加方法
              etree.append(item, pid);
            } // 存储父节点


            if (!pids.has(pid) && !this.isExpanded(pid)) {
              // 记录数据
              pids.add(pid); // 展开父节点

              this.expand(pid);
            }
          } // 设置默认高亮

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (highlight) this.defaultHighlight = mdata[0].data;
      } // 判断是否需要高亮显示


      if (highlight) {
        // 延后设置选中
        this.$nextTick(function () {
          // 高亮显示第一个数据
          _this4.setCurrentData(mdata[0].data);
        });
      } // 返回数据


      return mdata;
    }
    /**
     * 移除数据对象处理（将同时移除数据节点下的所有子节点，不存在则返回 undefined ）
     * @param data 需要移除的数据
     * @param autoHighlight 是否自动高亮合适的项目
     * @returns AxComCore.ITreeMapData 被移除的数据
     */

  }, {
    key: "remove",
    value: function remove(data) {
      var autoHighlight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // 判断是否有效
      if (!data) return undefined; // 获取键数据

      var id = this.handler.getDataId(data); // 判断是否存在

      if (!id) return undefined; // 移除数据

      return this.removeById(id, autoHighlight);
    }
    /**
     * 根据数据唯一标识移除目录节点及数据处理（不存在则返回 undefined)
     * @param id 数据唯一标识
     * @param autoHighlight 是否自动高亮合适的项目
     * @returns AxComCore.ITreeMapData 被移除的数据
     */

  }, {
    key: "removeById",
    value: function removeById(id) {
      var _this5 = this;

      var autoHighlight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // 转换未字符串
      id += ''; // 指示内部改变了数据

      this.innerChanges = true; // 移除数据

      var removed = this.handler.remove(id); // 判断是否有效

      if (!removed) return undefined; // 移除目录数据

      this.$refs.elTree.remove(id); // 判断是否需要高亮处理

      if (autoHighlight) {
        // 延后设置选中
        this.$nextTick(function () {
          // 设置默认选中项
          _this5.setCurrentId(removed.selectId);
        });
      } // 返回移除的数据


      return removed.data;
    }
    /**
     * 更新数据到目录节点处理
     * @param data 需要更新的数据对象
     */

  }, {
    key: "update",
    value: function update(data) {
      // 判断是否有效
      if (!data) return; // 指示内部改变了数据

      this.innerChanges = true; // 更新数据

      this.handler.updateData(data);
    }
  }, {
    key: "reset",
    value: function reset(data) {
      // 判断是否有效
      if (!data) return;
      this.handler.initData(data);
    }
    /**
     * 更新数据到目录节点处理
     * @param id 数据唯一序号
     * @param data 需要更新的数据对象
     */

  }, {
    key: "updateById",
    value: function updateById(id, data) {
      // 判断是否有效
      if (!data) return; // 指示内部改变了数据

      this.innerChanges = true; // 更新数据

      this.handler.updateData(data, id);
    } // -------------------------------- TODO: 目录操作方法 -----------------------------------

    /**
     * 获取当前被选中的数据数组处理（仅当显示了 checkbox 复选框后有效）
     * @param endNodeOnly 是否仅获取最终节点选中状态（可选，默认：true）
     * @returns AxComCore.ITreeData[] 被选中的数据数组（无效则返回 undefined ）
     */

  }, {
    key: "getCheckedData",
    value: function getCheckedData() {
      var endNodeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // 获取选中数据键
      var ids = this.getCheckedIds(endNodeOnly); // 判断是否有效

      if (!ids) return undefined; // 生成返回数据数组

      var rets = []; // 遍历获取数据

      var _iterator3 = Object(createForOfIteratorHelper["a" /* default */])(ids),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var id = _step3.value;
          // 获取数据对象
          var data = this.handler.getDataById(id); // 判断是否有效

          if (data) rets.push(data.data);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return rets;
    }
    /**
     * 获取当前被选中的数据键数组处理（仅当显示了 checkbox 复选框后有效）
     * @param endNodeOnly 是否仅获取最终节点选中状态（可选，默认：true）
     * @returns string[] 被选中的数据键数组（无效则返回 undefined ）
     */

  }, {
    key: "getCheckedIds",
    value: function getCheckedIds() {
      var endNodeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return this.$refs.elTree.getCheckedKeys(endNodeOnly);
    }
    /**
     * 设置当前被选中的数据键数组处理（仅当显示了 checkbox 复选框后有效）
     * @param ids 需要选中的节点标识数组
     */

  }, {
    key: "setCheckedData",
    value: function setCheckedData(data) {
      // 判断是否有效
      if (!data || data.length === 0) return; // 定义序号数组

      var ids = []; // 遍历数据生成序号

      var _iterator4 = Object(createForOfIteratorHelper["a" /* default */])(data),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var value = _step4.value;

          // 判断是否有效
          if (value) {
            // 获取序号
            var id = this.handler.getDataId(value); // 增加到数组

            if (id) ids.push(id);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      this.$refs.elTree.setCheckedKeys(ids, false);
    }
    /**
     * 设置当前被选中的数据键数组处理（仅当显示了 checkbox 复选框后有效）
     * @param ids 需要选中的节点标识数组
     */

  }, {
    key: "setCheckedIds",
    value: function setCheckedIds(ids) {
      this.$refs.elTree.setCheckedKeys(ids, false);
    }
    /**
     * 设置单个节点数据复选状态（仅当显示了 checkbox 复选框后有效）
     * @param idOrData 当前数据或数据键字符串
     * @param checked 是否选中
     */

  }, {
    key: "setChecked",
    value: function setChecked(idOrData, checked) {
      // 定义标识
      var id; // 判断是否是字符串

      if (typeof idOrData === 'string') {
        // 设置标识
        id = idOrData;
      } else {
        // 根据对象获取标识
        id = this.getDataId(idOrData);
      } // 判断是否有效


      if (!id) return; // 选中数据处理

      this.$refs.elTree.setChecked(id, checked, true);
    }
    /**
     * 获取当前被选中节点的唯一标识
     */

  }, {
    key: "getCurrentId",
    value: function getCurrentId() {
      return this.$refs.elTree.getCurrentKey();
    }
    /**
     * 获取当前选中的节点数据对象
     */

  }, {
    key: "getCurrentData",
    value: function getCurrentData() {
      var id = this.getCurrentId();
      if (!id) return undefined;
      return this.handler.getDataById(id);
    }
    /**
     * 设置某个节点的当前选中状态（高亮节点）
     * @param id 当前数据键
     * @param scrolling 是否滚动到指定项
     */

  }, {
    key: "setCurrentId",
    value: function setCurrentId(id) {
      var scrolling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // 判断是否存在节点
      if (id) {
        // 获取父节点
        var parent = this.handler.getParent(id); // 判断是否有效，有效则展开父节点

        if (parent) this.expand(parent.id);
      } // 获取目录对象


      var tree = this.$refs.elTree; // 设置节点选中状态

      tree.setCurrentKey(id); // 发布数据事件

      this.$emit(ax_com_core_default.a.TreeEventType.CHANGE, id, id ? this.handler.getDataById(id) : null); // 判断是否需要滚动处理

      if (!scrolling || !id) return; // 临时保存当前节点标识

      this.needScrollingKey = id; // 判断是否已经在目录内存在

      if (!this.handler.map.has(id)) return; // 滚动到当前节点处理

      this.scrollToCurrentItem(id);
    }
    /**
     * 滚动到当前选中的节点处理
     */

  }, {
    key: "scrollToCurrentItem",
    value: function scrollToCurrentItem(id) {
      var _this6 = this;

      // 获取目录对象
      var tree = this.$refs.elTree; // 设置节点选中状态

      tree.setCurrentKey(id); // 获取当前对象

      var self = this; // 延后处理

      window.setTimeout(function () {
        // 获取当前对象根元素
        var roote = _this6.$el; // 判断是否滚动到当前节点

        if (!roote) return; // 查找当前选中的节点

        var el = tree.$el.querySelector('div.is-current'); // 判断是否有效

        if (!el) return; // 判断是否是节点组

        if (el.getAttribute('role') === 'treeitem' && el.childNodes && el.childNodes.length > 0) {
          // 节点组，获取第一个节点项
          el = el.firstElementChild;
        } // 获取对象在目录内的位置


        var pos = app_core_framework_["AxDomUtils"].getDomPosition(el, roote); // 获取目录有效高度

        var treeH = roote.clientHeight; // 设置滚动条位置

        roote.scrollTop = Math.max(0, Math.floor(pos.top - treeH / 2 + el.offsetHeight / 2)); // 设置成功,清理标识

        self.needScrollingKey = undefined;
      }, 100);
    }
    /**
     * 设置某个节点的当前选中状态
     * @param data 当前数据
     */

  }, {
    key: "setCurrentData",
    value: function setCurrentData(data) {
      if (!data) return;
      var id = this.getDataId(data);
      if (!id) return;
      this.$refs.elTree.setCurrentKey(id);
    }
    /**
     * 判断节点是否已经被打开
     * @param id 节点数据键
     * @returns boolean 节点是否已经被打开
     */

  }, {
    key: "isExpanded",
    value: function isExpanded(id) {
      // 获取目录节点对象
      var node = this.$refs.elTree.getNode(id); // 判断是否有效

      if (!node) return false; // 返回是否被打开

      return node.expanded;
    }
    /**
     * 根据节点键展开目录节点处理
     * @param id 需要展开的数据键
     */

  }, {
    key: "expand",
    value: function expand(id) {
      // 获取目录节点对象
      var node = this.$refs.elTree.getNode(id); // 判断是否有效

      if (!node) return; // 判断是否存在方法

      if (node.expand) {
        // 展开数据节点
        node.expand(null, true);
      } else {
        // 直接设置属性
        node.expanded = true;
      }
    }
    /**
     * 根据节点数据展开目录节点
     * @param data 需展开的节点数据对象
     */

  }, {
    key: "expandData",
    value: function expandData(data) {
      if (!data) return;
      var id = this.getDataId(data);
      if (!id) return;
      this.expand(id);
    } // 传入id,懒加载树节点

  }, {
    key: "expandLink",
    value: function expandLink(ids, fn) {
      var _this7 = this;

      if (ids && ids.length > 0) {
        var id = ids.shift();

        if (id) {
          // 递归判断当前节点是否加载过
          var isload = this.isNodeLoaded(id);

          while (isload) {
            id = ids.shift();

            if (id) {
              isload = this.isNodeLoaded(id);
            } else {
              isload = false;

              if (fn && typeof fn === 'function') {
                fn();
              }
            }
          } // 动态加载


          if (id) {
            var load = function load(data) {
              id = ids.shift();

              if (id) {
                _this7.$once('loaded', load);

                _this7.expand(id);
              } else {
                if (fn && typeof fn === 'function') {
                  fn();
                }
              }
            };

            this.$once('loaded', load);
            this.expand(id);
            var nodedata = this.getDataById(id);

            if (this.isNodeLoaded(id) && nodedata && this.isEndNodeData(nodedata)) {
              if (fn && typeof fn === 'function') {
                fn();
              }
            }
          }
        }
      } else {
        if (fn && typeof fn === 'function') {
          fn();
        }
      }
    } // 节点是否加载

  }, {
    key: "isNodeLoaded",
    value: function isNodeLoaded(id) {
      var node = this.$refs.elTree.getNode(id);
      if (!node) return false;
      return node.loaded;
    } // 获取父节点值

  }, {
    key: "getAllParentIds",
    value: function getAllParentIds(id) {
      var res = [];

      if (id) {
        res.push(id);
        var parent = this.handler.getParent(id);

        while (parent) {
          res.push(parent.data.id);
          parent = this.handler.getParent(parent.data.id);
        }
      }

      return res;
    }
    /**
     * 获取所有父节点AxComCore.ITreeMapData对象
     * @param id
     * @returns {AxComCore.ITreeMapData[]}
     * @param self 是否包括自己
     */

  }, {
    key: "getAllParentData",
    value: function getAllParentData(id) {
      var self = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var rs = [];

      if (id) {
        var current = this.handler.getDataById(id);

        if (self && current) {
          rs.push(current);
        }

        var parent = this.handler.getParent(id);

        while (parent) {
          rs.unshift(parent);
          parent = this.handler.getParent(parent.data.id);
        }
      }

      return rs;
    }
    /**res
     * 合上节点处理
     * @param id 需要合上的数据键
     */

  }, {
    key: "collapse",
    value: function collapse(id) {
      // 获取目录节点对象
      var node = this.$refs.elTree.getNode(id); // 判断是否有效

      if (!node) return; // 判断是否存在方法

      if (node.collapse) {
        // 关闭数据节点
        node.collapse();
      } else {
        // 直接设置属性
        node.expanded = false;
      }
    }
    /**
     * 合上节点处理
     * @param data 需要合上的节点对象
     */

  }, {
    key: "collapseData",
    value: function collapseData(data) {
      if (!data) return;
      var id = this.getDataId(data);
      if (!id) return;
      this.collapse(id);
    }
    /**
     * 获取焦点方法
     */

  }, {
    key: "focus",
    value: function focus() {
      // 获取目录对象
      var tree = this.$refs.elTree; // 判断是否有效

      if (tree && tree.$el) {
        // 设置焦点处理
        tree.$el.focus();
      } // 返回当前对象


      return this;
    } // -------------------------------- TODO: 发布目录事件 -----------------------------------

    /**
     * 处理当前节点变化事件
     */

  }, {
    key: "handleCurrentChange",
    value: function handleCurrentChange(data, node) {
      // 判断是否有效
      if (!data) return; // 发布数据事件

      this.$emit(ax_com_core_default.a.TreeEventType.CHANGE, data.id, data);
    }
    /**
     * 节点点击事件
     */

  }, {
    key: "handleNodeClick",
    value: function handleNodeClick(data) {
      if (!data) return;
      this.$emit(ax_com_core_default.a.TreeEventType.NODE_CLICK, data);
    }
    /**
     * 显示菜单事件
     */

  }, {
    key: "handleContextmenu",
    value: function handleContextmenu(event, data) {
      if (!data) return;
      this.$emit(ax_com_core_default.a.TreeEventType.NODE_CONTEXTMENU, event, data);
    }
    /**
     * 勾选节点事件（与 CHECK 事件不同，外部设置选择改变后都会触发此事件）
     */

  }, {
    key: "handleCheckChange",
    value: function handleCheckChange(data, checked) {
      if (!data) return;
      this.$emit(ax_com_core_default.a.TreeEventType.CHECK_CHANGE, data, checked);
    }
    /**
     * 当复选框被点击的时候触发（与 CHECK_CHANGE 不同，此事件当勾选框被选中时触发）
     */

  }, {
    key: "handleCheck",
    value: function handleCheck(data, checkedKeyNode) {
      if (!data) return;
      this.$emit(ax_com_core_default.a.TreeEventType.CHECK, data, checkedKeyNode);
    }
    /**
     * 展开节点事件
     */

  }, {
    key: "handleExpand",
    value: function handleExpand(data) {
      if (!data) return;
      this.$emit(ax_com_core_default.a.TreeEventType.NODE_EXPAND, data);
    }
    /**
     * 关闭节点事件
     */

  }, {
    key: "handleCollapse",
    value: function handleCollapse(data) {
      if (!data) return;
      this.$emit(ax_com_core_default.a.TreeEventType.NODE_COLLAPSE, data);
    }
  }]);

  return AxTree;
}(ax_com_core_default.a.AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], treevue_type_script_lang_ts_AxTree.prototype, "defaultExpandAll", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], treevue_type_script_lang_ts_AxTree.prototype, "debugMode", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], treevue_type_script_lang_ts_AxTree.prototype, "config", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], treevue_type_script_lang_ts_AxTree.prototype, "dataArray", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 1
})], treevue_type_script_lang_ts_AxTree.prototype, "defaultExpandDeep", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], treevue_type_script_lang_ts_AxTree.prototype, "defaultExpandedIds", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], treevue_type_script_lang_ts_AxTree.prototype, "enableIcon", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], treevue_type_script_lang_ts_AxTree.prototype, "enableCheckbox", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], treevue_type_script_lang_ts_AxTree.prototype, "checkStrictly", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], treevue_type_script_lang_ts_AxTree.prototype, "border", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], treevue_type_script_lang_ts_AxTree.prototype, "defaultCheckedIds", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], treevue_type_script_lang_ts_AxTree.prototype, "loadChildren", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('dataArray')], treevue_type_script_lang_ts_AxTree.prototype, "onPropDataChanges", null);

treevue_type_script_lang_ts_AxTree = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change'
  },
  components: Object(defineProperty["a" /* default */])({}, tree_default.a.name, tree_default.a)
})], treevue_type_script_lang_ts_AxTree);
/* harmony default export */ var treevue_type_script_lang_ts_ = (treevue_type_script_lang_ts_AxTree);
// CONCATENATED MODULE: ./packages/ax-tree/src/tree.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_treevue_type_script_lang_ts_ = (treevue_type_script_lang_ts_); 
// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./packages/ax-tree/src/tree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_treevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ax-tree/src/tree.vue"
/* harmony default export */ var src_tree = (component.exports);
// CONCATENATED MODULE: ./packages/ax-tree/index.ts



Object(install["a" /* addInstall */])(src_tree.name, src_tree);
/* harmony default export */ var ax_tree = __webpack_exports__["default"] = (src_tree);

/***/ })
/******/ ]);