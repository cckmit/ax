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
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
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
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-button");

/***/ }),
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
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-message");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-tooltip");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.find-index.js");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/loading");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each.js");

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-radio");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-input");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.find.js");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.includes.js");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.includes.js");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.splice.js");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.sort.js");

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice.js");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string.js");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter.js");

/***/ }),
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
/* 61 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/table-column");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/table");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/transfer");

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime.js");

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-link");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-dialog");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-form");

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.flat.js");

/***/ }),
/* 86 */,
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(12);

// EXTERNAL MODULE: ./packages/install.ts
var install = __webpack_require__(11);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/table.vue?vue&type=template&id=c4b662e0&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "ax_table",
      staticClass: "ax_table",
      attrs: { onselectstart: "return false;" }
    },
    [
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            },
            {
              name: "tableLoadMore",
              rawName: "v-tableLoadMore",
              value: _vm.tableLoadMore,
              expression: "tableLoadMore"
            }
          ],
          ref: "elTable",
          staticClass: "el_table",
          attrs: {
            border: "",
            fit: "",
            resizable: "",
            "highlight-current-row": "",
            "row-key": _vm.keyId,
            data: _vm.tableDataLoad,
            "empty-text": _vm.axLang.text("table.head.empty"),
            "tree-props": _vm.treeProps,
            "row-class-name": _vm.rowClassName,
            "row-style": _vm.rowStyle,
            "cell-style": _vm.cellStyle
          },
          on: {
            "row-click": _vm.rowClick,
            "row-dblclick": _vm.rowdblClick,
            "cell-dblclick": _vm.celldblclick,
            "selection-change": _vm.selectionChange
          }
        },
        [
          _vm.showIndex
            ? _c("el-table-column", {
                attrs: {
                  type: "index",
                  width: _vm.styleTransform.remToPx(4.3),
                  label: _vm.axLang.text("table.head.index"),
                  align: "center"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.boxType === _vm.tableBoxType.CHECKBOX
            ? _c("el-table-column", {
                attrs: {
                  label: _vm.axLang.text("table.head.selection.checkbox"),
                  type: "selection",
                  width: _vm.styleTransform.remToPx(3.6),
                  selectable: _vm.rowSelectableCheckbox,
                  align: "center"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.boxType === _vm.tableBoxType.RADIO
            ? _c("el-table-column", {
                attrs: {
                  label: _vm.axLang.text("table.head.selection.radio"),
                  width: _vm.styleTransform.remToPx(3.6),
                  align: "center"
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          _c("AxRadio", {
                            staticClass: "radio_show",
                            staticStyle: { width: "100%" },
                            attrs: {
                              label: scope.row[_vm.keyId],
                              disabled: _vm.rowSelectDisabled.includes(
                                scope.row[_vm.keyId]
                              ),
                              "hide-label": ""
                            },
                            on: {
                              change: function($event) {
                                return _vm.radioClick(scope.row[_vm.keyId])
                              }
                            },
                            model: {
                              value: _vm.radioSelectedCurrent,
                              callback: function($$v) {
                                _vm.radioSelectedCurrent = $$v
                              },
                              expression: "radioSelectedCurrent"
                            }
                          })
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  1273637679
                )
              })
            : _vm._e(),
          _vm._v(" "),
          !_vm.tableColumn.length
            ? _c("el-table-column", { attrs: { align: "center" } })
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.tableColumnLoad, function(item, index) {
            return _c("el-table-column", {
              key: index,
              attrs: {
                "show-overflow-tooltip":
                  !item.isSelect && !item.isEnable && !item.hideTooltip,
                width: _vm.styleTransform.remToPx(item.width),
                "min-width": _vm.styleTransform.remToPx(item.minWidth),
                label: item.label,
                align: item.align
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "header",
                    fn: function(scope) {
                      return [
                        _c("table-head", {
                          attrs: {
                            "show-menu": _vm.showMenu,
                            "head-mode": _vm.headMode && !!item.isRange,
                            scope: scope,
                            column: item
                          },
                          on: { headIconClick: _vm.headIconClick },
                          nativeOn: {
                            click: function($event) {
                              return _vm.headSortClick(scope, item)
                            }
                          }
                        })
                      ]
                    }
                  },
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        item.isMove
                          ? _c(
                              "div",
                              { staticClass: "move_button" },
                              [
                                _c(
                                  "ax-button",
                                  {
                                    staticClass: "move_button_item",
                                    on: {
                                      click: function($event) {
                                        return _vm.moveButton(
                                          scope,
                                          _vm.MoveDirType.UP
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "iconfont" }, [
                                      _vm._v("")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ax-button",
                                  {
                                    staticClass: "move_button_item",
                                    on: {
                                      click: function($event) {
                                        return _vm.moveButton(
                                          scope,
                                          _vm.MoveDirType.DOWN
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "iconfont" }, [
                                      _vm._v("")
                                    ])
                                  ]
                                )
                              ],
                              1
                            )
                          : item.isSelect
                          ? _c(
                              "div",
                              [
                                _c("el-checkbox", {
                                  model: {
                                    value: scope.row[item.name],
                                    callback: function($$v) {
                                      _vm.$set(scope.row, item.name, $$v)
                                    },
                                    expression: "scope.row[item.name]"
                                  }
                                })
                              ],
                              1
                            )
                          : item.render
                          ? _c(
                              "div",
                              [
                                _c("cell-render", {
                                  attrs: {
                                    vnodes: item.render(
                                      scope.row[item.name],
                                      scope.row
                                    )
                                  }
                                })
                              ],
                              1
                            )
                          : item.isEnable
                          ? _c("div", { staticClass: "col_enable" }, [
                              _c("i", {
                                staticClass: "i_cc",
                                class: [
                                  "i_cc_" +
                                    (!!scope.row[item.name] ? "right" : "wrong")
                                ]
                              })
                            ])
                          : _c("edit-cell", {
                              ref:
                                scope.column[_vm.keyId] +
                                "_row_" +
                                scope.$index,
                              refInFor: true,
                              attrs: {
                                "key-id": _vm.keyId,
                                index: index,
                                "no-edit-ids": _vm.noEditIds,
                                "edit-mode": _vm.editMode,
                                scope: scope,
                                column: item,
                                editrowconfig: _vm.editrowconfig,
                                "total-column": _vm.totalColumn,
                                "tip-offset": item.editOffset,
                                align: item.align
                              },
                              on: {
                                cellLinkClick: _vm.cellLinkClick,
                                cellBlur: _vm.cellBlur,
                                cellDbClick: _vm.cellDbClick
                              }
                            })
                      ]
                    }
                  }
                ],
                null,
                true
              )
            })
          }),
          _vm._v(" "),
          _vm.operation && _vm.operation.list.length
            ? _c("el-table-column", {
                attrs: {
                  width: _vm.styleTransform.remToPx(_vm.operation.width || 4.5),
                  label: _vm.axLang.text("table.head.operate"),
                  align: "center"
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "header",
                      fn: function(scope) {
                        return [
                          _c("div", { staticClass: "table_head" }, [
                            _c("span", { staticClass: "table_head_text" }, [
                              _vm._v(_vm._s(scope.column.label))
                            ])
                          ])
                        ]
                      }
                    },
                    {
                      key: "default",
                      fn: function(scope) {
                        return _c(
                          "div",
                          {
                            staticClass: "table_operate",
                            class: [
                              "table_operate_" + (_vm.operation.align || "left")
                            ]
                          },
                          [
                            _vm._l(_vm.operation.list, function(
                              operate,
                              index
                            ) {
                              return [
                                operate.isIcon
                                  ? _c("ax-link", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            !operate.hidden ||
                                            !operate.hidden(scope.row),
                                          expression:
                                            "!operate.hidden || !operate.hidden(scope.row)"
                                        }
                                      ],
                                      key: "icon_" + index,
                                      attrs: {
                                        type: "primary",
                                        disabled:
                                          operate.disabled &&
                                          operate.disabled(scope.row),
                                        icon: _vm.getOperateText(
                                          operate.value,
                                          scope.row
                                        )
                                      },
                                      on: {
                                        click: function($event) {
                                          return operate.click(scope.row)
                                        }
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                !operate.isIcon
                                  ? _c(
                                      "ax-link",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value:
                                              !operate.hidden ||
                                              !operate.hidden(scope.row),
                                            expression:
                                              "!operate.hidden || !operate.hidden(scope.row)"
                                          }
                                        ],
                                        key: "button_" + index,
                                        attrs: {
                                          type: "primary",
                                          disabled:
                                            operate.disabled &&
                                            operate.disabled(scope.row)
                                        },
                                        on: {
                                          click: function($event) {
                                            return operate.click(scope.row)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n            " +
                                            _vm._s(
                                              _vm.getOperateText(
                                                operate.value,
                                                scope.row
                                              )
                                            ) +
                                            "\n          "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            })
                          ],
                          2
                        )
                      }
                    }
                  ],
                  null,
                  false,
                  2300545800
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showRefresh
            ? _c(
                "el-table-column",
                {
                  attrs: {
                    width: _vm.styleTransform.remToPx(2.85),
                    align: "center"
                  }
                },
                [
                  _c("template", { slot: "header" }, [
                    _c(
                      "div",
                      {
                        staticClass: "table_refresh",
                        class: [_vm.loading ? "refresh_rotate" : ""],
                        on: { click: _vm.refreshClick }
                      },
                      [_c("i", { staticClass: "el-icon el-icon-refresh" })]
                    )
                  ])
                ],
                2
              )
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-table/src/table.vue?vue&type=template&id=c4b662e0&

// EXTERNAL MODULE: external "element-ui/lib/table-column"
var table_column_ = __webpack_require__(61);
var table_column_default = /*#__PURE__*/__webpack_require__.n(table_column_);

// EXTERNAL MODULE: external "element-ui/lib/table"
var table_ = __webpack_require__(62);
var table_default = /*#__PURE__*/__webpack_require__.n(table_);

// EXTERNAL MODULE: external "element-ui/lib/checkbox"
var checkbox_ = __webpack_require__(27);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(22);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(19);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(15);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(1);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(defineProperty["a" /* default */])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
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

// EXTERNAL MODULE: external "element-ui/lib/loading"
var loading_ = __webpack_require__(29);
var loading_default = /*#__PURE__*/__webpack_require__.n(loading_);

// EXTERNAL MODULE: external "regenerator-runtime/runtime.js"
var runtime_js_ = __webpack_require__(69);

// EXTERNAL MODULE: external "core-js/modules/es.array.concat.js"
var es_array_concat_js_ = __webpack_require__(14);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string.js"
var es_object_to_string_js_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/es.array.map.js"
var es_array_map_js_ = __webpack_require__(23);

// EXTERNAL MODULE: external "core-js/modules/es.array.filter.js"
var es_array_filter_js_ = __webpack_require__(43);

// EXTERNAL MODULE: external "core-js/modules/es.map.js"
var es_map_js_ = __webpack_require__(20);

// EXTERNAL MODULE: external "core-js/modules/es.string.iterator.js"
var es_string_iterator_js_ = __webpack_require__(17);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.iterator.js"
var web_dom_collections_iterator_js_ = __webpack_require__(18);

// EXTERNAL MODULE: external "core-js/modules/es.array.find.js"
var es_array_find_js_ = __webpack_require__(34);

// EXTERNAL MODULE: external "core-js/modules/es.array.find-index.js"
var es_array_find_index_js_ = __webpack_require__(28);

// EXTERNAL MODULE: external "core-js/modules/es.array.splice.js"
var es_array_splice_js_ = __webpack_require__(37);

// EXTERNAL MODULE: external "core-js/modules/es.array.slice.js"
var es_array_slice_js_ = __webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/es.array.includes.js"
var es_array_includes_js_ = __webpack_require__(35);

// EXTERNAL MODULE: external "core-js/modules/es.string.includes.js"
var es_string_includes_js_ = __webpack_require__(36);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.to-string.js"
var es_regexp_to_string_js_ = __webpack_require__(42);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each.js"
var web_dom_collections_for_each_js_ = __webpack_require__(30);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(13);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-button"
var ax_button_ = __webpack_require__(21);
var ax_button_default = /*#__PURE__*/__webpack_require__.n(ax_button_);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-com-core"
var ax_com_core_ = __webpack_require__(4);
var ax_com_core_default = /*#__PURE__*/__webpack_require__.n(ax_com_core_);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-link"
var ax_link_ = __webpack_require__(77);
var ax_link_default = /*#__PURE__*/__webpack_require__.n(ax_link_);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-message"
var ax_message_ = __webpack_require__(25);
var ax_message_default = /*#__PURE__*/__webpack_require__.n(ax_message_);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-radio"
var ax_radio_ = __webpack_require__(32);
var ax_radio_default = /*#__PURE__*/__webpack_require__.n(ax_radio_);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/custom-transfer.vue?vue&type=template&id=16960089&
var custom_transfervue_type_template_id_16960089_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ax-dialog",
    {
      ref: "customDialog",
      staticClass: "ax_transfer",
      attrs: {
        visible: _vm.flag,
        title: _vm.axLang.text("column.title"),
        loading: _vm.isButtonLoading
      },
      on: { close: _vm.close, okClose: _vm.okClose }
    },
    [
      _c(
        "div",
        { staticClass: "content" },
        [
          _c("AxTable", {
            ref: "hideTable",
            staticClass: "transfer_table",
            attrs: {
              "show-index": false,
              "show-menu": false,
              "show-refresh": false,
              "edit-mode": false,
              "head-mode": false,
              "table-data": _vm.hideList,
              "key-id": _vm.config.key,
              "table-column": _vm.hideColumn
            },
            on: { selectionChange: _vm.selectionChangeLeft }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "button_module" }, [
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _c(
                  "ax-button",
                  {
                    staticClass: "control_button",
                    attrs: { disabled: !_vm.hideIds.length },
                    on: { click: _vm.leftToRight }
                  },
                  [_vm._v("\n          左移>>\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "ax-button",
                  {
                    staticClass: "control_button",
                    attrs: { disabled: !_vm.showIds.length },
                    on: { click: _vm.rightToLeft }
                  },
                  [_vm._v("\n          右移<<\n        ")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("AxTable", {
            ref: "showTable",
            staticClass: "transfer_table",
            attrs: {
              "show-index": false,
              "show-menu": false,
              "show-refresh": false,
              "edit-mode": false,
              "head-mode": false,
              "table-data": _vm.showList,
              "table-column": _vm.showColumn,
              "key-id": _vm.config.key
            },
            on: { selectionChange: _vm.selectionChangeRight },
            model: {
              value: _vm.ids,
              callback: function($$v) {
                _vm.ids = $$v
              },
              expression: "ids"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "button_module" }, [
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _c(
                  "ax-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.mergeShowFlag,
                        expression: "!mergeShowFlag"
                      }
                    ],
                    staticClass: "control_button",
                    attrs: {
                      disabled: !_vm.showIds.length,
                      loading: _vm.isButtonLoading
                    },
                    on: {
                      click: function($event) {
                        return _vm.moveClick("up")
                      }
                    }
                  },
                  [_vm._v("\n          上移\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "ax-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.mergeShowFlag,
                        expression: "!mergeShowFlag"
                      }
                    ],
                    staticClass: "control_button",
                    attrs: {
                      disabled: !_vm.showIds.length,
                      loading: _vm.isButtonLoading
                    },
                    on: {
                      click: function($event) {
                        return _vm.moveClick("down")
                      }
                    }
                  },
                  [_vm._v("\n          下移\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "ax-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.mergeShowFlag,
                        expression: "mergeShowFlag"
                      }
                    ],
                    staticClass: "control_button",
                    attrs: { loading: _vm.isButtonLoading },
                    on: {
                      click: function($event) {
                        return _vm.mergeClick("up")
                      }
                    }
                  },
                  [_vm._v("\n          向上合并\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "ax-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.mergeShowFlag,
                        expression: "mergeShowFlag"
                      }
                    ],
                    staticClass: "control_button",
                    attrs: { loading: _vm.isButtonLoading },
                    on: {
                      click: function($event) {
                        return _vm.mergeClick("down")
                      }
                    }
                  },
                  [_vm._v("\n          向下合并\n        ")]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ]
  )
}
var custom_transfervue_type_template_id_16960089_staticRenderFns = []
custom_transfervue_type_template_id_16960089_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-table/src/custom-transfer.vue?vue&type=template&id=16960089&

// EXTERNAL MODULE: external "element-ui/lib/transfer"
var transfer_ = __webpack_require__(63);
var transfer_default = /*#__PURE__*/__webpack_require__.n(transfer_);

// EXTERNAL MODULE: external "core-js/modules/es.array.sort.js"
var es_array_sort_js_ = __webpack_require__(38);

// EXTERNAL MODULE: external "core-js/modules/es.array.flat.js"
var es_array_flat_js_ = __webpack_require__(85);

// EXTERNAL MODULE: external "core-js/modules/es.set.js"
var es_set_js_ = __webpack_require__(44);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-dialog"
var ax_dialog_ = __webpack_require__(78);
var ax_dialog_default = /*#__PURE__*/__webpack_require__.n(ax_dialog_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/custom-transfer.vue?vue&type=script&lang=ts&










var _components;






















var custom_transfervue_type_script_lang_ts_CustomTransfer = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(CustomTransfer, _Vue);

  var _super = Object(createSuper["a" /* default */])(CustomTransfer);

  function CustomTransfer() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CustomTransfer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "loadColumn", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "flag", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "config", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "totalData", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showData", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "axLang", ax_com_core_default.a.getAxLang());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "isButtonLoading", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mergeShowFlag", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "titles", [_this.axLang.text('table.column.hide'), _this.axLang.text('table.column.show')]);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "hideIds", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "hideColumn", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "ids", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showIds", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showIdsOrigin", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showColumn", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showList", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "hideList", []);

    return _this;
  }

  Object(createClass["a" /* default */])(CustomTransfer, [{
    key: "loadColumnData",
    value: function loadColumnData() {
      if (!this.loadColumn) {
        return;
      }

      this.loadColumn().then(function (res) {});
    } // dialog 开关

  }, {
    key: "flagWatch",
    value: function flagWatch(val) {
      var _this2 = this;

      if (val) {
        this.$nextTick(function () {
          if (!_this2.showData) {
            return;
          } // 生成 showList


          _this2.showList = _this2.showData.filter(function (item) {
            return !item.isHide;
          }); // 生成 hideList

          _this2.hideList = _this2.getHideData(_this2.showList);
        });
      }
    }
  }, {
    key: "getHideData",
    value: // 如果有整体的话 和 showList,就算出来
    function getHideData(showList) {
      if (!this.totalData || !this.config) {
        return [];
      }

      var key = this.config.key;
      var showMap = new Map(); // 添加 Map 数据

      var _iterator = Object(createForOfIteratorHelper["a" /* default */])(showList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          showMap.set(item[key], item);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var hideList = []; // 选出和 totalData 一样的

      var _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(this.totalData),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var jtem = _step2.value;
          var target = showMap.get(jtem[key]); // 如果值是存在的话

          if (!target) {
            hideList.push(jtem);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return hideList;
    }
    /**
     * 是否是连续的
     * @params value 原始的
     * @params checkedKeys 勾选的
     * @return 布尔值
     */

  }, {
    key: "isContinue",
    value: function isContinue(value, checkedKeys) {
      // 生成一个 Map 集合,  值:索引
      var tempMap = new Map();

      for (var index = 0; index < value.length; index++) {
        var element = value[index];
        tempMap.set(element, index);
      } // 获取 index 的集合


      var indexList = [];

      var _iterator3 = Object(createForOfIteratorHelper["a" /* default */])(checkedKeys),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var iterator = _step3.value;
          indexList.push(tempMap.get(iterator));
        } // 记录第一个,第二个减去第一个是否等于index,否则就是不连续

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var preNum = 0;

      for (var jndex = 0; jndex < indexList.length; jndex++) {
        // 这个是值
        var currentNum = indexList[jndex]; // 记录第一个值

        if (jndex === 0) {
          preNum = currentNum;
        } else {
          // 第二个减去第一个是否等于index,不是的话要结束哦
          if (currentNum - preNum !== jndex) {
            return false;
          } else {
            continue;
          }
        }
      } // 如无意外,最后是返回 true 的


      return true;
    }
    /***********勾选相关**************/
    // 左边勾选的时候

  }, {
    key: "selectionChangeLeft",
    value: function selectionChangeLeft(hideIds) {
      this.hideIds = hideIds;
    } // 右边勾选的时候

  }, {
    key: "selectionChangeRight",
    value: function selectionChangeRight(showIds) {
      // 如果是正在进行点击的话
      if (this.isButtonLoading) {
        return;
      } // 拿到最新的 showMap 的 key


      var totalShowIds = this.$refs.showTable.getTotalIds(); // 最原始的排序

      this.showIdsOrigin = showIds; // 正确排序后

      this.showIds = this.checkedKeysCorrect(showIds); // 对比勾选的,如果是连续的话,就显示 "上下移动" 按钮

      if (!this.showIds.length) {
        return;
      }

      if (this.showIds.length <= 1) {
        this.mergeShowFlag = false;
      } else if (this.showIds.length > 1) {
        // 如果勾选多个
        if (this.isContinue(totalShowIds, this.showIds)) {
          // 如果是连续,更换按钮名称,直接整体上移
          this.mergeShowFlag = false;
        } else {
          this.mergeShowFlag = true;
        }
      }
    }
    /**
     * 正序 点击后重新正确排序
     */

  }, {
    key: "checkedKeysCorrect",
    value: function checkedKeysCorrect(origin) {
      var _this3 = this;

      if (!this.config) {
        return [];
      } //     要拿到对应的 indexList


      var indexList = [];
      var attr = this.config.key;

      var _iterator4 = Object(createForOfIteratorHelper["a" /* default */])(origin),
          _step4;

      try {
        var _loop = function _loop() {
          var item = _step4.value;

          var totalKeys = _this3.$refs.showTable.getTotalIds();

          var index = totalKeys.findIndex(function (jtem) {
            return jtem === item;
          });
          indexList.push(index);
        };

        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          _loop();
        } //  然后排序 indexList

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      indexList.sort(function (a, b) {
        return a - b;
      }); // 通过 tableColumnLoad 获取对应的值

      var tableValues = this.$refs.showTable.getTotalValues();
      return indexList.map(function (item) {
        return tableValues[item][attr];
      });
    }
    /**
     * 重置后,勾选之前的值
     */

  }, {
    key: "showChecked",
    value: function showChecked() {
      if (this.isButtonLoading) {
        // 重新勾选上
        var _iterator5 = Object(createForOfIteratorHelper["a" /* default */])(this.showIdsOrigin),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var iterator = _step5.value;
            this.$refs.showTable.setDataCheck(iterator);
          } // 关闭 loading

        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        this.isButtonLoading = false;
      }
    }
    /***********按钮相关**************/
    // 左边 => 右边

  }, {
    key: "leftToRight",
    value: function leftToRight() {
      if (!this.config) return;

      var _iterator6 = Object(createForOfIteratorHelper["a" /* default */])(this.hideIds),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var item = _step6.value;
          // const target = this.hideMap.get(item);
          var target = this.$refs.hideTable.getDataById(item);

          if (target) {
            // 加入 showMap
            this.$refs.showTable.addData(target); // 删除

            this.$refs.hideTable.delete(item);
          }
        } // 定义 showList hideList

      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      this.showList = this.$refs.showTable.getTotalValues();
      this.hideList = this.$refs.hideTable.getTotalValues();
    } // 右边 => 左边

  }, {
    key: "rightToLeft",
    value: function rightToLeft() {
      if (!this.config) return;

      var _iterator7 = Object(createForOfIteratorHelper["a" /* default */])(this.showIds),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var item = _step7.value;
          // 拿到 hideMap 数据
          var target = this.$refs.showTable.getDataById(item);

          if (target) {
            // 加入 hide
            this.$refs.hideTable.addData(target); // 删除 show

            this.$refs.showTable.delete(item);
          }
        } // 定义 showList hideList

      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      this.showList = this.$refs.showTable.getTotalValues();
      this.hideList = this.$refs.hideTable.getTotalValues();
    }
    /**
     * 向上向下移动
     * @params value 全部的数据也就是v-model的
     * @params checkedKeys 勾选中的值
     * @params str 是向上还是向下,默认向上 'up'
     */

  }, {
    key: "move",
    value: function move(value, checkedKeys, str) {
      // 判断是要拿最前还是最后
      var defineKey = '';

      if (str === 'up') {
        defineKey = checkedKeys[0];
      } else if (str === 'down') {
        defineKey = checkedKeys[checkedKeys.length - 1];
      } else {
        defineKey = checkedKeys[0];
      } // 知道它的索引


      var index = value.findIndex(function (item) {
        return item === defineKey;
      });

      if (str === 'up') {
        // 如果是最头部的话
        index <= 0 && index--;
      } else if (str === 'down') {
        // 如果是最尾部的话
        index >= value.length - 1 ? index++ : index = index + 2;
        defineKey = checkedKeys[checkedKeys.length - 1];
      } else {
        index <= 0 && index--;
      } // 深拷贝 value


      var tempValue = JSON.parse(JSON.stringify(value)); // 添加 数据

      tempValue.splice(index, 0, checkedKeys); // 生成一个 Map 集合

      var tempMap = new Map();

      var _iterator8 = Object(createForOfIteratorHelper["a" /* default */])(tempValue),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var item = _step8.value;
          tempMap.set(item, item);
        } // 删除 checkedKeys 的数据

      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      var _iterator9 = Object(createForOfIteratorHelper["a" /* default */])(checkedKeys),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _item = _step9.value;
          tempMap.delete(_item);
        } //  生成已经删除的数组

      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      var temp = _toConsumableArray(tempMap.values()); // 扁平化


      return temp.flat();
    }
    /**
     * 向上向下合并
     * @params value 全部的数据 key
     * @params checkedKeys 勾选中的值
     * @params str 是向上还是向下,默认向上 'up'
     */

  }, {
    key: "merge",
    value: function merge(value, checkedKeys, str) {
      // 判断是要拿最前还是最后
      var defineKey = '';

      if (str === 'up') {
        defineKey = checkedKeys[0];
      } else if (str === 'down') {
        defineKey = checkedKeys[checkedKeys.length - 1];
      } else {
        defineKey = checkedKeys[0];
      } // 知道它的索引


      var index = value.findIndex(function (item) {
        return item === defineKey;
      }); // 深拷贝 value

      var tempValue = JSON.parse(JSON.stringify(value)); // const tempValue = value;
      // 替换第一个

      tempValue.splice(index, 1, checkedKeys); // 生成一个 Map 集合

      var tempMap = new Map();

      var _iterator10 = Object(createForOfIteratorHelper["a" /* default */])(tempValue),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var item = _step10.value;
          tempMap.set(item, item);
        } // 删除 checkedKeys 的数据

      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      var _iterator11 = Object(createForOfIteratorHelper["a" /* default */])(checkedKeys),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _item2 = _step11.value;
          tempMap.delete(_item2);
        } //  生成已经删除的数组

      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      var temp = _toConsumableArray(tempMap.values()); // 扁平化


      return temp.flat();
    }
    /**
     * 移动点击
     */

  }, {
    key: "moveClick",
    value: function moveClick(str) {
      var _this4 = this;

      // 拿到所有显示列的键
      var keys = this.$refs.showTable.getTotalIds();
      var showRes = [];

      if (str === 'up') {
        showRes = this.move(keys, this.showIds, str);
      } else if (str === 'down') {
        showRes = this.move(keys, this.showIds, str);
      } else {
        showRes = this.move(keys, this.showIds, 'up');
      }

      this.isButtonLoading = true; // 重新设置

      this.showList = showRes.map(function (item) {
        return _this4.$refs.showTable.getDataById(item);
      }); // 重新勾选上

      this.$nextTick(function () {
        _this4.showChecked();
      });
    }
    /**
     * 合并点击
     */

  }, {
    key: "mergeClick",
    value: function mergeClick(str) {
      var _this5 = this;

      // 拿到所有显示列的键
      var keys = this.$refs.showTable.getTotalIds();
      var showRes = [];

      if (str === 'up') {
        showRes = this.merge(keys, this.showIds, str);
      } else if (str === 'down') {
        showRes = this.merge(keys, this.showIds, str);
      } else {
        showRes = this.merge(keys, this.showIds, 'up');
      }

      this.isButtonLoading = true; // 重新设置

      this.showList = showRes.map(function (item) {
        return _this5.$refs.showTable.getDataById(item);
      }); // 合并按钮消失

      this.mergeShowFlag = false; // 重新勾选上

      this.$nextTick(function () {
        _this5.showChecked();
      });
    }
    /***********暂时没用上的**************/
    // 合并上

  }, {
    key: "mergeUp",
    value: function mergeUp() {
      var _this6 = this;

      // TODO: 改 showMap ,最终要的是 showList
      // TODO: showIds 的顺序是乱的 , showList 是正的
      // 获取当前列数据 总的数据 getTotalIds()
      var listValue = this.$refs.showTable.getTotalIds(); // 获取选中的数据,生成 Map

      var selectedSet = new Set(); // 遍历把选中的数据增加到集

      var _iterator12 = Object(createForOfIteratorHelper["a" /* default */])(this.showIds),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var item = _step12.value;
          selectedSet.add(item);
        } // 创建结果数据

      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      var res = []; // 定义开始标识

      var startted = false; // 记录首次插入数据的位置

      var index = 0; // 遍历右边所有的数据

      var _iterator13 = Object(createForOfIteratorHelper["a" /* default */])(listValue),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _item3 = _step13.value;

          // 判断是否在选择中存在
          if (selectedSet.has(_item3)) {
            // 判断是否是开始位置
            if (!startted) {
              // 设置开始标识
              startted = true; // TODO:
              // 记录当前的位置
            } // 没有开始,作为第一个数据,增加所有的数据到数组


            res.push(_item3);
          } else {
            // 不是选中的数据
            res.push(_item3);
          }
        } // 重新渲染,排序

      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      this.showList = res.map(function (item) {
        return _this6.$refs.showTable.getDataById(item);
      });
      return res;
    } // 合并下

  }, {
    key: "mergeDown",
    value: function mergeDown() {
      var _this7 = this;

      // TODO: 改 showMap ,最终要的是 showList
      // 获取当前列数据 总的数据 getTotalIds()
      var listValue = this.$refs.showTable.getTotalIds(); // 获取选中的数据

      var selectedSet = new Set(); // 遍历把选中的数据增加到集

      var _iterator14 = Object(createForOfIteratorHelper["a" /* default */])(this.showIds),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var item = _step14.value;
          selectedSet.add(item);
        } // 创建结果数据

      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      var res = []; // 定义开始标识

      var endLen = 0; // 遍历全部的数据

      var _iterator15 = Object(createForOfIteratorHelper["a" /* default */])(listValue),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var _item4 = _step15.value;

          // 判断是否在选择中存在
          if (selectedSet.has(_item4)) {
            // 判断是否是开始位置
            endLen++; // 如果 是最后一个的话,endLen 的长度的话

            if (endLen === this.showIds.length) {
              res.push.apply(res, _toConsumableArray(this.showIds));
            }
          } else {
            // 不是选中的数据
            res.push(_item4);
          }
        } // 重新渲染,排序

      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      this.showList = res.map(function (item) {
        return _this7.$refs.showTable.getDataById(item);
      });
      return res;
    }
    /***********public 外部方法**************/

    /***********emit 分发方法**************/

    /**
     * 窗口关闭时候
     */

  }, {
    key: "close",
    value: function close(event) {
      this.$emit('flagChange', false);
      this.isButtonLoading = false;
    }
    /**
     * 确认 关闭
     */

  }, {
    key: "okClose",
    value: function okClose(e) {
      //  要求:  在表格中必须有一列显示，否则操作不成功。当出现此种情况，点击“确定”按钮时弹窗提示用户“必须要选择一列在表格中显示”
      // 拿到所有显示列的键
      var keys = this.$refs.showTable.getTotalIds();
      var values = this.$refs.showTable.getTotalValues();

      if (!keys.length) {
        ax_message_default.a.alert(this.axLang.text('table.column.error'));
        return;
      }

      this.$emit('confirm', keys, values); // 关闭窗口

      this.$emit('flagChange', false);
    }
    /***********生命周期**************/

  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "created",
    value: function created() {
      this.hideColumn = [{
        label: '隐藏列',
        name: this.config ? this.config.label : 'label',
        align: 'center'
      }];
      this.showColumn = [{
        label: '显示列',
        name: this.config ? this.config.label : 'label',
        align: 'center'
      }];
    }
  }]);

  return CustomTransfer;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], custom_transfervue_type_script_lang_ts_CustomTransfer.prototype, "loadColumn", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Model"])('flagChange', {
  type: Boolean
})], custom_transfervue_type_script_lang_ts_CustomTransfer.prototype, "flag", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('flag')], custom_transfervue_type_script_lang_ts_CustomTransfer.prototype, "flagWatch", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {
      key: 'name',
      label: 'label'
    };
  }
})], custom_transfervue_type_script_lang_ts_CustomTransfer.prototype, "config", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [{
      label: '类型',
      name: 'ptype',
      align: 'center',
      isEdit: true
    }, {
      label: '二级地区',
      name: 'stype',
      align: 'center',
      isEdit: true
    }, {
      label: '中文',
      name: 'zh_CN',
      align: 'center',
      isEdit: true
    }, {
      label: '英文',
      name: 'en_US',
      align: 'center',
      isEdit: true
    }, {
      label: '下级',
      name: 'chs',
      align: 'center',
      isEdit: true
    }, {
      label: '纬度',
      name: 'lat',
      align: 'center',
      isEdit: true
    }, {
      label: '经度',
      name: 'lon',
      align: 'center',
      isEdit: true
    }, {
      label: '描述',
      name: 'desc',
      align: 'center',
      isEdit: true
    }];
  }
})], custom_transfervue_type_script_lang_ts_CustomTransfer.prototype, "totalData", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [{
      label: '类型',
      name: 'ptype',
      align: 'center',
      isEdit: true
    }, {
      label: '中文',
      name: 'zh_CN',
      align: 'center',
      isEdit: true
    }, {
      label: '英文',
      name: 'en_US',
      align: 'center',
      isEdit: true
    }, {
      label: '下级',
      name: 'chs',
      align: 'center',
      isEdit: true
    }, {
      label: '纬度',
      name: 'lat',
      align: 'center',
      isEdit: true
    }, {
      label: '描述',
      name: 'desc',
      align: 'center',
      isEdit: true
    }];
  }
})], custom_transfervue_type_script_lang_ts_CustomTransfer.prototype, "showData", void 0);

custom_transfervue_type_script_lang_ts_CustomTransfer = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  name: 'custom-transfer',
  components: (_components = {}, Object(defineProperty["a" /* default */])(_components, transfer_default.a.name, transfer_default.a), Object(defineProperty["a" /* default */])(_components, "AxButton", ax_button_default.a), Object(defineProperty["a" /* default */])(_components, "AxDialog", ax_dialog_default.a), Object(defineProperty["a" /* default */])(_components, "AxTable", table), _components)
})], custom_transfervue_type_script_lang_ts_CustomTransfer);
/* harmony default export */ var custom_transfervue_type_script_lang_ts_ = (custom_transfervue_type_script_lang_ts_CustomTransfer);
// CONCATENATED MODULE: ./packages/ax-table/src/custom-transfer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_custom_transfervue_type_script_lang_ts_ = (custom_transfervue_type_script_lang_ts_); 
// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./packages/ax-table/src/custom-transfer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_custom_transfervue_type_script_lang_ts_,
  custom_transfervue_type_template_id_16960089_render,
  custom_transfervue_type_template_id_16960089_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ax-table/src/custom-transfer.vue"
/* harmony default export */ var custom_transfer = (component.exports);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/edit-cell.vue?vue&type=template&id=462e64f2&
var edit_cellvue_type_template_id_462e64f2_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.editMode && _vm.column.isEdit && !_vm.editFlag
    ? _c(
        "span",
        {
          staticClass: "editable_cell",
          class: ["align_" + _vm.align],
          domProps: {
            innerHTML: _vm._s(
              _vm.column.translate
                ? _vm.column.translate(
                    _vm.scope.row[_vm.getAttr("name")],
                    _vm.scope.row
                  )
                : _vm.scope.row[_vm.getAttr("name")]
            )
          },
          on: { dblclick: _vm.dblclick }
        },
        [
          _c("span", { staticClass: "editable_cell_box" }, [
            _c("span", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.correctFlag,
                  expression: "correctFlag"
                }
              ],
              staticClass: "editable_cell_triangle"
            })
          ])
        ]
      )
    : _vm.editMode && _vm.column.isEdit && _vm.editFlag
    ? _c(
        "div",
        { staticClass: "cell_edit_input" },
        [
          _c(
            "ax-form",
            {
              ref: _vm.scope.column[_vm.keyId] + "_row_" + _vm.scope.$index,
              attrs: {
                data: _vm.scope.row,
                config: _vm.column.editConfig,
                tooltip: true
              },
              on: { showTooltip: _vm.showTooltip }
            },
            [
              _c(
                "ax-tooltip",
                {
                  ref: "tooltip",
                  attrs: {
                    tips: _vm.tipText,
                    placement: "bottom",
                    manual: true,
                    offset: _vm.tipOffset,
                    show: _vm.tipShow
                  }
                },
                [
                  _c("ax-input", {
                    ref: "axInput",
                    attrs: {
                      name: _vm.column.name,
                      placeholder: "请输入内容",
                      clearable: false,
                      autofocus: true
                    },
                    on: {
                      blur: function($event) {
                        _vm.elInputBlur(
                          _vm.column.name,
                          _vm.scope.row[_vm.getAttr("name")]
                        )
                      }
                    },
                    model: {
                      value: _vm.scope.row[_vm.getAttr("name")],
                      callback: function($$v) {
                        _vm.$set(_vm.scope.row, _vm.getAttr("name"), $$v)
                      },
                      expression: "scope.row[getAttr('name')]"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : !_vm.editMode || (!_vm.column.isEdit && !_vm.column.isImage)
    ? _c("span", {
        class: [
          _vm.column.isLink ? "table_underline" : "",
          "align_" + _vm.align
        ],
        domProps: {
          innerHTML: _vm._s(
            _vm.column.translate
              ? _vm.column.translate(
                  _vm.scope.row[_vm.getAttr("name")],
                  _vm.scope.row
                )
              : _vm.scope.row[_vm.getAttr("name")]
          )
        },
        on: { click: _vm.cellLinkClick }
      })
    : _vm.column.isImage
    ? _c("div", { staticClass: "table_img" }, [
        _c("img", { attrs: { src: _vm.scope.row[_vm.getAttr("name")] } })
      ])
    : _vm._e()
}
var edit_cellvue_type_template_id_462e64f2_staticRenderFns = []
edit_cellvue_type_template_id_462e64f2_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-table/src/edit-cell.vue?vue&type=template&id=462e64f2&

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-form"
var ax_form_ = __webpack_require__(79);
var ax_form_default = /*#__PURE__*/__webpack_require__.n(ax_form_);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-input"
var ax_input_ = __webpack_require__(33);
var ax_input_default = /*#__PURE__*/__webpack_require__.n(ax_input_);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-tooltip"
var ax_tooltip_ = __webpack_require__(26);
var ax_tooltip_default = /*#__PURE__*/__webpack_require__.n(ax_tooltip_);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/edit-cell.vue?vue&type=script&lang=ts&





















var edit_cellvue_type_script_lang_ts_EditCell = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(EditCell, _Vue);

  var _super = Object(createSuper["a" /* default */])(EditCell);

  function EditCell() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, EditCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "keyId", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "index", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "editMode", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "totalColumn", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "noEditIds", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "editrowconfig", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "tipOffset", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "align", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "scope", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "column", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "editFlag", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "correctFlag", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "tempValue", '');

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "tipText", '');

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "tipShow", false);

    return _this;
  }

  Object(createClass["a" /* default */])(EditCell, [{
    key: "isNoEdit",
    value: function isNoEdit() {
      // 如有这个id的话,那么 column.isEdit 就要是false了
      if (!this.noEditIds || !this.keyId) {
        return false;
      }

      if (this.editrowconfig && !this.isCellEdit()) {
        return true;
      }

      var noEditIds = this.noEditIds;
      var row = this.scope.row; // 匹配当前行的数据

      if (Array.isArray(row)) {
        //  有交集的话
        return !!row.filter(function (v) {
          return noEditIds.includes(v);
        }).length;
      } else {
        var keyId = this.keyId;
        return !!noEditIds.find(function (item) {
          return item === row[keyId];
        });
      }
    } // 总的数据

  }, {
    key: "elInputBlur",
    value:
    /*******************************输出******************************/

    /**
     * input 失去焦点的时候,emit 回调
     */
    function () {
      var _elInputBlur = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(attr, value) {
        var refName;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!this.scope || !this.column || !this.totalColumn || !this.keyId)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                refName = "".concat(this.scope.column[this.keyId], "_row_").concat(this.scope.$index);
                this.$emit('cellBlur', this, refName, attr);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function elInputBlur(_x, _x2) {
        return _elInputBlur.apply(this, arguments);
      }

      return elInputBlur;
    }()
    /**
     * 点击链接进行跳转
     */

  }, {
    key: "cellLinkClick",
    value: function cellLinkClick() {
      // 如果是可以跳转 做点事情的话
      if (!this.column) {
        return;
      }

      if (this.column.isLink) {
        this.$emit('cellLinkClick', this.scope, this.index);
      }
    }
    /**
     * 清除修改痕迹
     */

  }, {
    key: "clearCorrect",
    value: function clearCorrect() {
      this.correctFlag = false;
      this.editFlag = false;
    }
    /*******************************组件内部******************************/

  }, {
    key: "dblclick",
    value: function dblclick() {
      var _this2 = this;

      // 先做判断能不能打开
      if (this.isNoEdit()) {
        // 不能修改的 cell 双击暂时不做提示
        // showNotify('修改受限制');
        return;
      } // 先关闭 tooltip 气泡


      this.showTooltip(false);
      this.editFlag = true; // 临时输入框的值

      this.tempValue = this.scope.row[this.getAttr('name')]; // 当生成input组件后,让input组件获取焦点

      this.$nextTick(function () {
        _this2.$refs.axInput.focus();
      });
    }
    /**
     * 获取正确的属性,用于拿到正确的界面显示内容
     */

  }, {
    key: "getAttr",
    value: function getAttr(attr) {
      if (!this.totalColumn || !this.column || !this.scope) {
        return undefined;
      } // 判断当前行的数据是数组


      if (Array.isArray(this.scope.row)) {
        var target = this.column[attr]; // 返回的是这个字段的 index 索引

        return this.totalColumn.findIndex(function (item) {
          return target === item;
        });
      } else {
        // 如果当前行的数据是对象,就返回 参数id这个字段
        return this.column[attr];
      }
    } // ------------------- 气泡提示 -------------------
    // 气泡提示内容

  }, {
    key: "showTooltip",
    value:
    /**
     * 气泡提示显示控制
     * @param show
     * @param tip
     */
    function showTooltip(show, tip) {
      // 提示开关
      this.tipShow = show; // 提示内容

      this.tipText = tip && show ? tip.message || '' : '';
    }
    /**
     * 输入改变
     * @param data
     */
    // private inputChange(data: any) {
    //   // 输入改变时隐藏气泡提示
    //   this.showTooltip(false);
    // }

  }, {
    key: "isCellEdit",
    value: function isCellEdit() {
      if (!this.column || !this.scope) {
        return '';
      }

      var row = this.scope.row;
      var configkey = row[this.editrowconfig.key];
      var config = this.editrowconfig.filterconfig[configkey] || [];

      if (config.indexOf(this.column.name) !== -1) {
        this.$emit('cellDbClick', row);
        return false;
      } else {
        return true;
      }
    }
  }]);

  return EditCell;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'id'
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "keyId", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 0
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "index", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "editMode", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "totalColumn", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "noEditIds", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "editrowconfig", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 0
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "tipOffset", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '',
  type: String
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "align", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "scope", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], edit_cellvue_type_script_lang_ts_EditCell.prototype, "column", void 0);

edit_cellvue_type_script_lang_ts_EditCell = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  name: 'edit-cell',
  components: {
    AxInput: ax_input_default.a,
    AxForm: ax_form_default.a,
    AxTooltip: ax_tooltip_default.a
  }
})], edit_cellvue_type_script_lang_ts_EditCell);
/* harmony default export */ var edit_cellvue_type_script_lang_ts_ = (edit_cellvue_type_script_lang_ts_EditCell);
// CONCATENATED MODULE: ./packages/ax-table/src/edit-cell.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_edit_cellvue_type_script_lang_ts_ = (edit_cellvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-table/src/edit-cell.vue





/* normalize component */

var edit_cell_component = Object(componentNormalizer["a" /* default */])(
  src_edit_cellvue_type_script_lang_ts_,
  edit_cellvue_type_template_id_462e64f2_render,
  edit_cellvue_type_template_id_462e64f2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var edit_cell_api; }
edit_cell_component.options.__file = "packages/ax-table/src/edit-cell.vue"
/* harmony default export */ var edit_cell = (edit_cell_component.exports);
// CONCATENATED MODULE: ./packages/ax-table/src/table-core.ts










var table_core_TableHandler = /*#__PURE__*/function () {
  function TableHandler() {
    Object(classCallCheck["a" /* default */])(this, TableHandler);

    Object(defineProperty["a" /* default */])(this, "dataMap", new Map());

    Object(defineProperty["a" /* default */])(this, "totalColumn", []);
  }

  Object(createClass["a" /* default */])(TableHandler, [{
    key: "setColumn",
    value: // 设置列
    function setColumn(val) {
      this.totalColumn = val;
    }
    /**
     * 设置 dataMap,每一个 Map 集合的值,都是对象
     * @param data 原始数据
     * @param attrList 所有属性的数组集合
     * @param attr 指定哪一个属性作为 Map 集合的 key 值
     */

  }, {
    key: "createMapData",
    value: function createMapData(data, attrList) {
      var attr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';

      // 前期判断清理
      if (!data) {
        return;
      }

      this.dataMap.clear(); // 逻辑

      if (data[0] instanceof Array) {
        // 返回的是 id 字段的 index 索引
        var index = attrList.findIndex(function (item) {
          return attr === item;
        });

        var _iterator = Object(createForOfIteratorHelper["a" /* default */])(data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var value = _step.value;
            // 数组转对象
            var tempObj = {};

            for (var jndex = 0; jndex < attrList.length; jndex++) {
              var jtem = attrList[jndex];
              tempObj[jtem] = value[jndex];
            }

            tempObj.data = value; // 老子要的是 id 作为 key

            this.dataMap.set(value[index], tempObj);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else if (data[0] instanceof Object) {
        // 如果当前行的数据是对象,
        // 返回当前行的 id 属性的值
        var _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(data),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var obj = _step2.value;
            // 老子要的是 id 作为 key
            this.dataMap.set(obj[attr], _objectSpread2(_objectSpread2({}, obj), {}, {
              data: obj
            }));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
    /**
     * 获取正确的属性,用于拿到正确的界面显示内容
     * @param attr 需要的属性
     * @param value 单个map的值
     */

  }, {
    key: "getValue",
    value: function getValue(attr, value) {
      // 判断当前行的数据是数组
      if (value instanceof Array) {
        // 返回的是这个字段的 index 索引
        return value[this.totalColumn.findIndex(function (item) {
          return item === attr;
        })];
      } else if (value instanceof Object) {
        // 如果当前行的数据是对象,就返回 参数id这个字段
        return value[attr];
      }
    }
    /**
     * 设置一条数据,无论是增加还是修改
     * @param key 键
     * @param value 值
     */

  }, {
    key: "setData",
    value: function setData(key, value) {
      // Map 集合添加数据
      var final = {};

      if (value instanceof Array) {
        if (!this.totalColumn) {
          return;
        } // 返回的是 id 字段的 index 索引


        var tempObj = {};

        for (var jndex = 0; jndex < this.totalColumn.length; jndex++) {
          var jtem = this.totalColumn[jndex];
          tempObj[jtem] = value[jndex];
        }

        final = _objectSpread2(_objectSpread2({}, tempObj), {}, {
          data: value
        });
        this.dataMap.set(key, final);
      } else if (value instanceof Object) {
        // 如果当前行的数据是对象,
        // 返回当前行的 id 属性的值
        final = _objectSpread2(_objectSpread2({}, value), {}, {
          data: value
        });
        this.dataMap.set(key, final);
      }

      return final;
    }
  }]);

  return TableHandler;
}();
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/table-head.vue?vue&type=template&id=32b1b2ad&
var table_headvue_type_template_id_32b1b2ad_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "table_head",
      on: { mouseover: _vm.headMouseover, mouseout: _vm.headMouseout }
    },
    [
      _vm.headMode
        ? _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.column.ASC,
                expression: "column.ASC"
              }
            ],
            staticClass: "table_head_name_icon ax_icon_arrow_up"
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.headMode
        ? _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.column.DESC,
                expression: "column.DESC"
              }
            ],
            staticClass: "table_head_name_icon ax_icon_arrow_down"
          })
        : _vm._e(),
      _vm._v(" "),
      _c("span", { staticClass: "table_head_text" }, [
        _vm._v(_vm._s(_vm.scope.column.label))
      ]),
      _vm._v(" "),
      _vm.showMenu
        ? _c(
            "div",
            {
              staticClass: "table_head_search",
              on: { click: _vm.headIconClick }
            },
            [
              _c("div", {
                staticClass: "triangle-down icon",
                style: _vm.visibility
              }),
              _vm._v(" "),
              _c("div", { staticClass: "table_head_panel" })
            ]
          )
        : _vm._e()
    ]
  )
}
var table_headvue_type_template_id_32b1b2ad_staticRenderFns = []
table_headvue_type_template_id_32b1b2ad_render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-table/src/table-head.vue?vue&type=template&id=32b1b2ad&

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/table-head.vue?vue&type=script&lang=ts&













var table_headvue_type_script_lang_ts_TableHead = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(TableHead, _Vue);

  var _super = Object(createSuper["a" /* default */])(TableHead);

  function TableHead() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TableHead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showMenu", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "headMode", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "scope", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "column", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "visibility", 'visibility:hidden');

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "tipShow", false);

    return _this;
  }

  Object(createClass["a" /* default */])(TableHead, [{
    key: "headIconClick",
    value:
    /*******************************输出******************************/
    function headIconClick(e) {
      this.$emit('headIconClick', e);
      app_core_framework_["AxDomUtils"].cancelDomEventBubble(e);
    }
    /*******************************组件内部******************************/

  }, {
    key: "headMouseover",
    value: function headMouseover(event) {
      this.visibility = 'visibility:visible';
      event = event || window.event;
      this.tipShow = ax_com_core_default.a.isEllipsis(event.target);
    }
  }, {
    key: "headMouseout",
    value: function headMouseout(event) {
      this.visibility = 'visibility:hidden';
      this.tipShow = false;
    }
  }]);

  return TableHead;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], table_headvue_type_script_lang_ts_TableHead.prototype, "showMenu", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], table_headvue_type_script_lang_ts_TableHead.prototype, "headMode", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], table_headvue_type_script_lang_ts_TableHead.prototype, "scope", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], table_headvue_type_script_lang_ts_TableHead.prototype, "column", void 0);

table_headvue_type_script_lang_ts_TableHead = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  name: 'table-head',
  components: {
    AxTooltip: ax_tooltip_default.a
  }
})], table_headvue_type_script_lang_ts_TableHead);
/* harmony default export */ var table_headvue_type_script_lang_ts_ = (table_headvue_type_script_lang_ts_TableHead);
// CONCATENATED MODULE: ./packages/ax-table/src/table-head.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_table_headvue_type_script_lang_ts_ = (table_headvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-table/src/table-head.vue





/* normalize component */

var table_head_component = Object(componentNormalizer["a" /* default */])(
  src_table_headvue_type_script_lang_ts_,
  table_headvue_type_template_id_32b1b2ad_render,
  table_headvue_type_template_id_32b1b2ad_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var table_head_api; }
table_head_component.options.__file = "packages/ax-table/src/table-head.vue"
/* harmony default export */ var table_head = (table_head_component.exports);
// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-table/src/table.vue?vue&type=script&lang=ts&















var tablevue_type_script_lang_ts_components;






























/**************方法**************/

var scrollTopTemp = 0; // 滚动到底的加载指令

external_vue_property_decorator_["Vue"].directive('tableLoadMore', {
  bind: function bind(el, binding) {
    var eleWrapper = el.querySelector('.el-table__body-wrapper');
    eleWrapper.addEventListener('scroll', function () {
      // 如果是打横的话
      if (Math.abs(scrollTopTemp - eleWrapper.scrollTop) < 1) {
        return;
      }

      scrollTopTemp = eleWrapper.scrollTop; // 间距标志，小于这个值开始加载

      var sign = 15; // 获取当前距离

      var dis = eleWrapper.scrollHeight - eleWrapper.scrollTop - eleWrapper.clientHeight;

      if (dis < sign) {
        binding.value();
      }
    });
  }
}); // table使用到了Element的loading指令

external_vue_property_decorator_["Vue"].use(loading_default.a);

var tablevue_type_script_lang_ts_AxTable = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(AxTable, _Vue);

  var _super = Object(createSuper["a" /* default */])(AxTable);

  function AxTable() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AxTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "tableColumn", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "columnList", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "operation", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "tableData", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "editrowconfig", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "keyId", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "noEditIds", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "enableHeaderCustom", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showIndex", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showRefresh", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "boxType", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showMenu", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "loading", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "height", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "editMode", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "headMode", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "rowClassName", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "rowStyle", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "cellStyle", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "ids", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "loadColumn", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "sortOrder", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "treeProps", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "rowSelectDisabled", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "radioSelectedDefault", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "pageConfig", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "pageLoader", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "tableBoxType", ax_com_core_default.a.TableBoxType);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "axLang", ax_com_core_default.a.getAxLang());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "correctIds", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "customFlag", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "MoveDirType", ax_com_core_default.a.MoveDirType);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "rowClickIds", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "selectionIds", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "tableDataLoad", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "radioSelectedCurrent", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "changeHeadTdFirst", true);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "isMoveRow", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "MoveRowSelection", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "styleTransform", app_core_framework_["AxStyleUtils"]);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "rowClickFlag", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "transferFlag", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "transferTotalData", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "rowClickTimer", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "pageData", {
      page: 1,
      loadQueue: Promise.resolve()
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handler", new table_core_TableHandler());

    return _this;
  }

  Object(createClass["a" /* default */])(AxTable, [{
    key: "customFlagWatch",
    value: //#endregion
    //#region Watch
    function customFlagWatch(val) {
      this.transferFlagChange();
    }
    /**
     * 数据发生变化时候,触发
     */

  }, {
    key: "tableDataWatch",
    value: function tableDataWatch(val) {
      this.createNewMap(); // 只执行一次

      if (this.changeHeadTdFirst) {
        this.changeHeadTdWidth(); // 开关关闭

        this.changeHeadTdFirst = false;
      }
    } //#endregion
    //#region Emit

    /**
     * 单元格双击
     * @param row
     * @returns {any}
     */

  }, {
    key: "cellDbClick",
    value: function cellDbClick(row) {
      return row;
    } //#endregion
    //#region Computed
    // { k: 'ptype', v: "ASC" }

  }, {
    key: "rangeList",
    get: function get() {
      if (!this.sortOrder) {
        return [];
      }

      return this.sortOrder.map(function (item) {
        return item;
      });
    }
    /**
     * tableColumn 一旦发生变化,往 tableColumn 追加属性 ASC 和 DESC
     * 去除不显示的字段
     */

  }, {
    key: "tableColumnLoad",
    get: function get() {
      if (!this.tableColumn || !this.tableColumn.length) {
        return [];
      }

      return this.tableColumn.filter(function (item) {
        return !item.isHide;
      }).map(function (item) {
        var _item$align;

        return _objectSpread2(_objectSpread2({}, item), {}, {
          ASC: false,
          DESC: false,
          align: (_item$align = item.align) !== null && _item$align !== void 0 ? _item$align : 'center'
        });
      });
    }
    /**
     * 全部的列字段
     */

  }, {
    key: "totalColumn",
    get: function get() {
      if (!this.tableColumn || !this.columnList) {
        return [];
      }

      var totalList = []; // 如果没有传入 columnList,就返回 tableColumn 生成的 list

      !this.columnList.length ? totalList = this.tableColumn.map(function (item) {
        return item.name;
      }) : totalList = this.columnList; // 更新到表格处理器中

      this.handler.setColumn(totalList);
      return totalList;
    } //#endregion
    //#region Data

    /**************原本 data**************/
    // TODO

  }, {
    key: "radioClick",
    value: //#endregion
    //#region Methods

    /**
     * 点击选择框,不变
     * @param key 和单选框绑定的值，行的唯一标识，默认row[key]
     */
    function radioClick(key) {
      this.radioSelectedCurrent = key;
    }
    /**
     * 获取操作显示文本
     * @param value
     * @param row
     * @return {string}
     */

  }, {
    key: "getOperateText",
    value: function getOperateText(value, row) {
      return typeof value === 'function' ? value(row) : value;
    }
    /**
     * 修改表头宽度
     * @returns {boolean}
     */

  }, {
    key: "changeHeadTdWidth",
    value: function changeHeadTdWidth() {
      var _this2 = this;

      setTimeout(function () {
        var textDoms = _this2.$el.querySelectorAll('.table_head_text');

        var headerColDoms = _this2.$el.querySelectorAll('.el-table__header>colgroup>col');

        var bodyColDoms = _this2.$el.querySelectorAll('.el-table__body>colgroup>col');

        var bodyTable = _this2.$el.querySelector('.el-table__body');

        var totalWidth = 0;
        var headerColMap = new Map();
        var bodyColMap = new Map();

        var _iterator = Object(createForOfIteratorHelper["a" /* default */])(headerColDoms),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            //  记录 col 的 map
            headerColMap.set(item.attributes.name.value, item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = Object(createForOfIteratorHelper["a" /* default */])(bodyColDoms),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            //  记录 col 的 map
            bodyColMap.set(_item.attributes.name.value, _item);
          } // 检测是否需要调整宽度

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var _iterator3 = Object(createForOfIteratorHelper["a" /* default */])(textDoms),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item2 = _step3.value;
            var el = _item2; // 获取宽度

            var width = el.offsetWidth;
            totalWidth += width + 16;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (totalWidth + 60 + 50 + 40 < _this2.$refs.elTable.$el.offsetWidth) {
          return;
        }

        var _iterator4 = Object(createForOfIteratorHelper["a" /* default */])(textDoms),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item3 = _step4.value;
            var _el = _item3; // 获取宽度

            var _width = _el.offsetWidth; // 获取 祖宗元素 th

            var th = app_core_framework_["AxDomUtils"].getDomParent(_el, undefined, undefined, undefined, 'th');

            if (th === undefined) {
              return;
            } // 获取他的类名


            var classname = th.classList[0]; // 找到 col 目标

            var target = headerColMap.get(classname); // 更改他的 width

            target.width = _width + 16 + ''; // 修改 body > col 的 width

            bodyColMap.get(classname).width = target.width;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }, 200);
      return true;
    }
    /**
     * 整条数据上移下移
     */

  }, {
    key: "moveButton",
    value: function moveButton(scope, dir) {
      if (!this.keyId) {
        return;
      }

      var targetIndex = 0;

      if (dir === ax_com_core_default.a.MoveDirType.UP) {
        if (scope.$index <= 0) {
          ax_message_default.a.notify(this.axLang.text('table.move.up.warning'));
          return;
        }

        targetIndex = scope.$index - 1;
      } else if (dir === ax_com_core_default.a.MoveDirType.DOWN) {
        if (scope.$index >= this.tableDataLoad.length - 1) {
          ax_message_default.a.notify(this.axLang.text('table.move.down.warning'));
          return;
        }

        targetIndex = scope.$index + 1;
      }

      var origin = this.tableDataLoad[scope.$index];
      var target = this.tableDataLoad[targetIndex];

      if (!target) {
        ax_message_default.a.notify(this.axLang.text('table.move.nofound'));
        return;
      }

      var self = this;
      /* 交换数据位置 */

      function changeTableRow() {
        // 目标 变成 现在的
        self.tableDataLoad[targetIndex] = origin; // 现在的 变成 目标

        self.tableDataLoad[scope.$index] = target; // 重置 tableColumnLoad

        self.tableDataLoad = _toConsumableArray(self.tableDataLoad); // 设置 rowclickid

        self.rowClickIds = [origin[self.keyId]];
        self.idsLoad(); // 设置移动行标记

        self.isMoveRow = true;
        self.MoveRowSelection = self.selectionIds; // 提示语言

        ax_message_default.a.notify(self.axLang.text("table.move.".concat(dir, ".success")));
      }
      /**
       * 行移动 emit
       * @parmas row 某一行数据
       * @parmas index  目标是第几个
       * @parmas id    唯一标识
       * @parmas dir    状态 上移动/下一栋
       * @parmas changeTableRow   执行函数 Function
       */


      var targetData = {
        row: target,
        index: targetIndex,
        id: target[this.keyId]
      };
      var originData = {
        row: origin,
        index: scope.$index,
        id: origin[this.keyId]
      };
      this.$emit('moveRow', targetData, originData, changeTableRow);
    }
    /**
     * 滚动条拉到最低,emit 回调
     */

  }, {
    key: "tableLoadMore",
    value: function tableLoadMore() {
      var _this3 = this;

      // 有分页加载器的话加载下一页
      if (this.pageConfig && this.pageLoader) {
        // 设置到加载队列中，防止同时发出不同页码的请求
        this.pageData.loadQueue = this.pageData.loadQueue.then(function () {
          return _this3.pageLoad();
        });
      }
    }
    /**
     * emit 分发 只修改过的数据,以键值对的形式,包含 keyId
     * @param self 单元格input组件的this,里面包括ref,
     * @param refName 表单的名称,
     * @param attr 当前编辑是对应哪个table的属性,
     */

  }, {
    key: "cellBlur",
    value: function cellBlur(self, refName, attr) {
      // 存儲有修改標志的 editcell 組件的 keyId
      this.correctIds.push(refName);
      this.$emit('cellBlur', self, refName, attr);
    }
    /**
     * 当某一行被双击,会触发该事件
     */

  }, {
    key: "celldblclick",
    value: function celldblclick(row, column, cell, event) {
      if (!this.tableColumn) {
        return;
      } // 要找到 prop,然后传出去


      var labelValue = column.label;
      var tableColumnTarget = this.tableColumn.find(function (item) {
        return labelValue === item.label;
      }); // 点击了  index, selection 等

      if (!tableColumnTarget) {
        // 如果点击的是 selection ,就不要传递下去了
        if (labelValue === this.axLang.text('table.head.selection.checkbox')) return;
        this.$emit('celldblclick', labelValue);
        return;
      }

      var name = tableColumnTarget.name;
      /**
       * @return 返回 name 名称
       */

      this.$emit('celldblclick', name);
    }
    /**
     * 当某一行被双击,会触发该事件
     */

  }, {
    key: "rowdblClick",
    value: function rowdblClick(row, column, event) {
      if (!this.tableColumn) {
        return;
      } // 要找到 prop,然后传出去


      var labelValue = column.label; // 如果是序号的话,就返回吧

      if (column.type === 'selection') {
        return;
      }

      var tableColumnTarget = this.tableColumn.find(function (item) {
        return labelValue === item.label;
      }); // 如果找不到的话

      if (!tableColumnTarget) {
        /**
         * @return 返回 labelValue
         */
        this.$emit('row-dblclick', labelValue);
      } else {
        var name = tableColumnTarget.name;
        /**
         * @return 返回 name 名称
         */

        this.$emit('row-dblclick', name);
      }
    }
    /**
     * 行单击
     * @param row
     * @param column
     * @param event
     */

  }, {
    key: "rowClick",
    value: function rowClick(row, column, event) {
      var _this4 = this;

      if (!this.totalColumn) {
        return;
      } // TODO:会触发两次 rowClick
      // 如果是之前有的话


      if (this.rowClickFlag) {
        // 清除之前的定时器
        clearTimeout(this.rowClickTimer); // 开始定时器

        this.rowClickTimer = setTimeout(function () {
          _this4.rowClickFlag = false;
          clearTimeout(_this4.rowClickTimer);
        }, 300);
        return;
      } // 要把id分发出去哦


      var keyId = ax_com_core_default.a.getValueByAttr(row, this.totalColumn, this.keyId); // 如果是找不到 keyId 的话, v-model的值为[], 否则就是[keyId]

      this.rowClickIds = keyId ? [keyId] : [];
      this.idsLoad(); // 第一次被点击的时候

      this.$emit('rowClick', keyId, row); // 打开单次点击的开关

      this.rowClickFlag = true; // 开始定时器

      this.rowClickTimer = setTimeout(function () {
        _this4.rowClickFlag = false;
        clearTimeout(_this4.rowClickTimer);
      }, 300);
    }
    /**
     * 多选框发生变化时候,返回选中的数据
     */

  }, {
    key: "selectionChange",
    value: function selectionChange(val) {
      // 如果是 isMoveRow:true,就不要继续了,不然会改了v-model的值
      if (this.isMoveRow) {
        this.selectionIds = this.MoveRowSelection;

        for (var index = 0; index < this.selectionIds.length; index++) {
          var item = this.selectionIds[index];
          var currentData = this.handler.dataMap.get(item); // 打钩
          // 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）

          this.$refs.elTable.toggleRowSelection(currentData, true); // 如果是最后一条

          if (index === this.selectionIds.length - 1) {
            // 高亮点击的最后一条
            this.$refs.elTable.setCurrentRow(currentData);
          }
        } // 关闭标识


        this.isMoveRow = false;
        return;
      }

      if (!this.keyId) {
        return;
      } // 高亮点中的那一行
      // 如果是有数据的话,高亮点击的最后一条,  否则就以第一条为准


      var totalIds = [];

      if (val.length) {
        // 高亮点击的最后一条
        this.$refs.elTable.setCurrentRow(val[val.length - 1]); // 用于v-model
        // 如果当前行的数据是对象,
        // 返回当前行的 id 属性的值

        var keyId = this.keyId;
        totalIds = val.map(function (item) {
          return item[keyId];
        }); // v-model 的修改

        this.selectionIds = totalIds;
      } else {
        // 清除 selectionIds
        this.selectionIds = []; // 此处需要判断数组是否存在

        if (this.tableDataLoad && this.tableDataLoad.length > 0) {
          //  否则就以第一条为准 , 高亮第一条数据
          this.$refs.elTable.setCurrentRow(this.tableDataLoad[0]); // 记录第一条
          // 就拿第一条

          this.rowClickIds = this.tableDataLoad[0][this.keyId] ? [this.tableDataLoad[0][this.keyId]] : [];
        }
      }

      this.idsLoad(); // 分发点击多选框的方法,把数据分发出去

      var lastId = totalIds.length ? totalIds[totalIds.length - 1] : undefined;
      /**
       * 当多选框被点击的时候
       * @params totalIds   返回的是v-model数据
       * @params lastId      最后一个点击的 v-model 数据
       * @params val        被勾选中的数据
       */

      this.$emit('selectionChange', totalIds, lastId, val);
    }
    /**
     * 点击链接进行跳转
     */

  }, {
    key: "cellLinkClick",
    value: function cellLinkClick(scope, index) {
      if (!this.totalColumn) {
        return;
      }

      var keyId = ax_com_core_default.a.getValueByAttr(scope.row, this.totalColumn, this.keyId); // 列数据

      var column = this.tableColumnLoad[index];
      /** 点击可以跳转的单元格
       * @param id 当前的 id
       * @param  scope.row 当前行的数据
       */

      this.$emit('cellLinkClick', keyId, scope.row, column);
    }
    /**
     * 自定义列表点击确认后
     */

  }, {
    key: "transferConfirm",
    value: function transferConfirm(keys, values) {
      /**
       * 自定义列表点击确认后
       * @params keys 显示列的所有键
       * @params values 显示列的所有值
       */
      this.$emit('transferConfirm', keys, values);
    }
    /**
     * 点击其中一个自定义面板
     */

  }, {
    key: "transferFlagChange",
    value: function () {
      var _transferFlagChange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.loadColumn) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return this.loadColumn();

              case 5:
                this.transferTotalData = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                ax_message_default.a.notify(_context.t0);

              case 11:
                this.transferFlag = true;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function transferFlagChange() {
        return _transferFlagChange.apply(this, arguments);
      }

      return transferFlagChange;
    }()
    /**
     * 表头排序点击
     * @param scope
     * @param item
     */

  }, {
    key: "headSortClick",
    value: function headSortClick(scope, item) {
      // 如果是headmode : false的话,就return
      if (!(this.headMode && !!item.isRange)) {
        return;
      } // 获取当前的 ASC 状态


      var flag = !!item.ASC; // 判断 rangeListRecord 数量

      var len = this.rangeListRecord.length; //  修改之前的那个   rangeListRecord

      if (len > 0) {
        try {
          this.rangeListRecord[len - 1].ASC = false;
          this.rangeListRecord[len - 1].DESC = false;
        } catch (err) {// 一开始就没有数据的
        }
      } // 修改当前的


      item.ASC = !flag;
      item.DESC = flag; // 判断 当前的 item.name , 是否已经存在 rangeList;

      var index = this.rangeList.findIndex(function (jtem) {
        return jtem.k === item.name;
      });

      if (index >= 0) {
        // 存在的话,要删除之前的
        this.rangeList.splice(index, 1);
      }

      this.rangeList.push({
        //   DESC是真的话,DESC 假/ASC真    DESC是假的话,DESC真/ASC假
        k: item.name,
        v: flag ? 'DESC' : 'ASC'
      });
      this.rangeListRecord.push(item); // 如果超过3个的话,添加之后,要删除最前面一个 unshift

      if (this.rangeListRecord.length > 3) {
        this.rangeListRecord.shift();
      }

      if (this.rangeList.length > 3) {
        this.rangeList.shift();
      } // 跳到行首  到顶


      this.$refs.elTable.bodyWrapper.scrollTop = 0; // 加载新的数据

      this.$emit('headSortClick', this.rangeList); // 清除 correct

      this.clearCorrect();
    }
    /**
     * 头部的自定义面板被点击
     * @param scope
     * @param item
     */

  }, {
    key: "headIconClick",
    value: function headIconClick(scope, item) {
      // 打开自定义面板
      this.customFlag = true;
      this.$emit('headIconClick');
    } // 要的是 column 的数据

  }, {
    key: "rangeListRecord",
    get: function get() {
      if (!this.sortOrder) {
        return [];
      }

      var final = this.sortOrder.map(function (item) {
        return item;
      }); //  要显示传入的order的最后一个状态团(ASC)

      this.showOrderIcon(final); // 一开始就要改 totalColumn 里面 的 ASC

      return final;
    }
    /**
     * 业务:传入order排序显示图标
     * @param final
     */

  }, {
    key: "showOrderIcon",
    value: function showOrderIcon(final) {
      if (!this.sortOrder) {
        return;
      }

      var last = this.sortOrder.slice(-1)[0];
      var target = this.tableColumnLoad.find(function (item) {
        return item.name === last.k;
      });

      if (target) {
        target[last.v] = true;
        final.pop();
        final.push(target);
      }
    }
    /**
     * 生成一个 tableLoad
     */

  }, {
    key: "initTableLoad",
    value: function initTableLoad() {
      // 设置 map 数据
      this.handler.createMapData(this.tableData, this.totalColumn, this.keyId); // 给 table 的数据

      this.tableDataLoad = _toConsumableArray(this.handler.dataMap.values()); // 清除修改痕迹

      this.clearCorrect();
    }
    /**
     * 生成新的map,在 tableData 发生变化,
     */

  }, {
    key: "createNewMap",
    value: function createNewMap() {
      // 生成一个 tableLoad
      this.initTableLoad(); // 重置选中

      this.resetTopSelected(true);
    }
    /**
     * 重置首行选中
     * @param wait
     * @returns {Promise<void>}
     */

  }, {
    key: "resetTopSelected",
    value: function () {
      var _resetTopSelected = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(wait) {
        var keyId;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!wait) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return this.$nextTick();

              case 3:
                // 设置 rowclickid
                keyId = ax_com_core_default.a.getValueByAttr(this.tableDataLoad[0], this.totalColumn, this.keyId);
                this.rowClickIds = keyId ? [keyId] : [];
                this.idsLoad(); // 高亮第一条数据

                this.$refs.elTable.setCurrentRow(this.tableDataLoad[0]); // 跳到行首  到顶

                this.$refs.elTable.bodyWrapper.scrollTop = 0;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function resetTopSelected(_x) {
        return _resetTopSelected.apply(this, arguments);
      }

      return resetTopSelected;
    }()
    /**
     * 刷新按钮点击
     */

  }, {
    key: "refreshClick",
    value: function refreshClick() {
      this.$emit('refreshClick');
      this.clearCorrect(); // 跳到行首  到顶

      this.$refs.elTable.bodyWrapper.scrollTop = 0;
    }
    /**
     * 检查是否包含分页配置
     */

  }, {
    key: "checkPageCtrl",
    value: function checkPageCtrl() {
      if (!this.pageConfig) {
        // eslint-disable-next-line no-console
        console.warn('请先设置 page-config 再使用此方法');
      }
    }
    /**
     * 多选改变时的处理
     * @param row
     * @param index
     */

  }, {
    key: "rowSelectableCheckbox",
    value: function rowSelectableCheckbox(row, index) {
      return !this.rowSelectDisabled.includes(row[this.keyId]);
    } //#endregion
    //#region 提供的方法

    /**
     * 当前数据处理对象
     */

  }, {
    key: "setDataCheck",
    value:
    /**
     * 设置某条数据打钩,高亮
     * @param keyId 对应数据的keyid
     */
    function setDataCheck(keyId) {
      var _this5 = this;

      var currentData = this.handler.dataMap.get(keyId); // 打钩
      // 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）

      this.$refs.elTable.toggleRowSelection(currentData, true);
      this.$nextTick(function () {
        // 高亮
        _this5.$refs.elTable.setCurrentRow(currentData);
      }); // 自动输入到 v-modal
    }
    /**
     * 高亮不勾选自动定位
     * @param keyId
     */

  }, {
    key: "setCurrentRow",
    value: function setCurrentRow(keyId) {
      var _this6 = this;

      var currentData = this.handler.dataMap.get(keyId) || this.tableDataLoad[0];
      var index = _toConsumableArray(this.handler.dataMap.keys()).findIndex(function (item) {
        return item === keyId;
      }) || 0;
      this.$nextTick(function () {
        // 高亮
        _this6.$refs.elTable.setCurrentRow(currentData); // 设置 ids 的值


        _this6.$emit('idsChange', [keyId]); // 跳到行首  到顶


        var totalHeight = _this6.$refs.elTable.$el.querySelectorAll('.el-table__body')[0].clientHeight;

        _this6.$refs.elTable.bodyWrapper.scrollTop = parseInt((index / _this6.tableDataLoad.length * totalHeight).toString());
      });
    }
    /**
     * FIXME:
     * 清除修改标志,并且清理 correctIds
     */

  }, {
    key: "clearCorrect",
    value: function clearCorrect() {
      if (this.correctIds) {
        var _iterator5 = Object(createForOfIteratorHelper["a" /* default */])(this.correctIds),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var value = _step5.value;
            this.$refs[value][0].clearCorrect();
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }

      this.correctIds = [];
    }
    /**
     * 修改v-model的值,以勾选为准,没有勾选就以高亮颜色为准
     */

  }, {
    key: "idsLoad",
    value: function idsLoad() {
      // 如果有勾选的情况只选勾选的,否则就选择 rowClick或者第一条
      if (!this.selectionIds.length) {
        this.$emit('idsChange', this.rowClickIds);
        this.$emit('row-change', this.getrows(this.rowClickIds, "".concat(this.keyId)));
      } else {
        this.$emit('idsChange', this.selectionIds);
        this.$emit('row-change', this.getrows(this.selectionIds, "".concat(this.keyId)));
      }
    }
    /**
     * 获取选中行数据
     * @param ids
     * @param key
     * @returns {any[]}
     */

  }, {
    key: "getrows",
    value: function getrows(ids, key) {
      var res = [];

      var _iterator6 = Object(createForOfIteratorHelper["a" /* default */])(this.tableDataLoad),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var val = _step6.value;

          if (ids.indexOf(val[key]) !== -1) {
            res.push(val);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return res;
    }
    /**
     * 根据索引获取数据
     * @param index
     * @returns {any}
     */

  }, {
    key: "getIndexRow",
    value: function getIndexRow(index) {
      return this.tableDataLoad[index];
    }
    /**
     * 通过 ids,找到对应的属性的集合,一一对应
     * @params ids 传入的多个 keyId,是数组的形式
     * @params attr 根据某个属性
     * @return string[]
     */

  }, {
    key: "getAttrByIds",
    value: function getAttrByIds(ids, attr) {
      var list = [];

      var _iterator7 = Object(createForOfIteratorHelper["a" /* default */])(ids),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var iterator = _step7.value;
          var target = this.getDataById(iterator);
          list.push(target[attr]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return list;
    }
    /**
     * 获取所有的 ids
     * @return string[]
     */

  }, {
    key: "getTotalIds",
    value: function getTotalIds() {
      var _this7 = this;

      return this.tableDataLoad.map(function (data) {
        return data[_this7.keyId];
      });
    }
    /**
     * 获取所有的 Map 的值
     * @return any[]
     */

  }, {
    key: "getTotalValues",
    value: function getTotalValues() {
      return this.tableDataLoad;
    }
    /**
     * 通过某个 keyId,获取对应的 Map 数据
     * @return Map 集合的单条对象数据
     */

  }, {
    key: "getDataById",
    value: function getDataById(keyId) {
      return this.handler.dataMap.get(keyId);
    }
    /**
     * 找到 tableDataLoad 的某一条数据,并且修改他
     * ERROR: 时区的translate,没有正常显示
     * @params key id,did之类的值,也就是v-model里面的
     * @params value 完整的一行row的新值
     */

  }, {
    key: "updateData",
    value: function updateData(key, value) {
      var _this8 = this;

      // 重新做一条 tableDataLoad,并且重新高亮
      var rs = this.handler.setData(key, value); // 更新列表

      this.tableDataLoad = this.tableDataLoad.map(function (item) {
        if (item[_this8.keyId] === key) {
          return rs;
        } else {
          return item;
        }
      }); // 高亮当前的数据数据

      this.$refs.elTable.setCurrentRow(this.handler.dataMap.get(key)); // 设置 rowClickIds

      this.rowClickIds = [key];
      this.idsLoad(); // 上色

      Object(ax_com_core_["sleep"])(50).then(function () {
        _this8.setCurrentRow(key);
      });
    }
    /**
     * 删除某条数据
     * @param id 删除对应的keyid的数据
     */

  }, {
    key: "delete",
    value: function _delete(id) {
      var _this9 = this;

      this.handler.dataMap.delete(id); // 最后的 Map集合的数据

      this.tableDataLoad = this.tableDataLoad.filter(function (item) {
        return item[_this9.keyId] !== id;
      }); // 高亮第一条数据

      this.$nextTick(function () {
        // 如果没有数据的话,return
        if (!_this9.tableDataLoad.length) {
          return;
        } else {
          // 设置 rowclickid
          var keyId = ax_com_core_default.a.getValueByAttr(_this9.tableDataLoad[0], _this9.totalColumn, _this9.keyId);
          _this9.rowClickIds = keyId ? [keyId] : [];

          _this9.idsLoad();
        } // 跳转


        _this9.setCurrentRow(_this9.ids[0]);
      });
    }
    /**
     * 删除 ids 对应的 Map 数据
     * @params ids 传入的多个 keyId,是数组的形式
     */

  }, {
    key: "deleteDataByIds",
    value: function deleteDataByIds(ids) {
      var _this10 = this;

      var _iterator8 = Object(createForOfIteratorHelper["a" /* default */])(ids),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var iterator = _step8.value;
          //  删除对应的值
          this.handler.dataMap.delete(iterator);
        } // 最后的 Map 集合的数据

      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      this.tableDataLoad = this.tableDataLoad.filter(function (item) {
        return !ids.includes(item[_this10.keyId]);
      }); // 如果是没有数据, v-model 要变化

      if (!this.tableDataLoad.length) {
        this.rowClickIds = [];
        this.idsLoad();
        return;
      } else {
        // 有数据,v-model只有一条的情况下,v-model 要变成第一条
        // 高亮第一条数据
        // (this.$refs.elTable as Table).setCurrentRow(this.tableDataLoad[0]);
        // 如果 v-model 只有一条数据的话,就不会触发 selectionChange 事件了
        if (this.ids && this.ids.length === 1) {
          var keyId = ax_com_core_default.a.getValueByAttr(this.tableDataLoad[0], this.totalColumn, this.keyId);
          this.rowClickIds = keyId ? [keyId] : [];
          this.idsLoad();
        }
      }

      this.$nextTick(function () {
        // 跳转到
        _this10.setCurrentRow(_this10.ids[0]);
      });
    }
    /**
     * 添加一条数据
     * @params value 一行row的值
     */

  }, {
    key: "addData",
    value: function addData(value) {
      var _this11 = this;

      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var hasFlag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      // 要把id分发出去哦
      var keyId = ax_com_core_default.a.getValueByAttr(value, this.totalColumn, this.keyId); // 如果已经是有的话

      if (this.handler.dataMap.get(keyId)) {
        // 去除这条数据    this.tableDataLoad
        this.tableDataLoad = this.tableDataLoad.filter(function (item) {
          return item[_this11.keyId + ''] !== keyId;
        });
      } // 数据集合


      var target = this.handler.setData(keyId, value); // 插入到某个位置,默认最上面

      this.tableDataLoad.splice(index, 0, target); // 设置 rowclickid

      this.rowClickIds = [keyId];
      this.idsLoad();
      setTimeout(function () {
        // 高亮当前数据
        // this.setCurrentRow(keyId);
        // 跳到行首  到顶
        _this11.$refs.elTable.setCurrentRow(target);

        var totalHeight = _this11.$refs.elTable.$el.querySelectorAll('.el-table__body')[0].clientHeight;

        _this11.$refs.elTable.bodyWrapper.scrollTop = parseInt((index / _this11.tableDataLoad.length * totalHeight).toString()); // 添加增加的红色小角标

        var html = _this11.$refs.elTable.$el.querySelector("tbody tr:nth-child(".concat(index + 1, ") td:first-child"));

        if (!html) {
          return;
        } // 如果有标志,就要给个小角标提示


        if (hasFlag) {
          html.classList.add('tri_up');
        }
      }, 50);
    }
    /**
     * 批量增加数据
     * @param data
     */

  }, {
    key: "addMultiData",
    value: function addMultiData(data) {
      if (!data.length) {
        return;
      }

      var _iterator9 = Object(createForOfIteratorHelper["a" /* default */])(data),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var item = _step9.value;
          // 要把id分发出去哦
          var keyId = ax_com_core_default.a.getValueByAttr(item, this.totalColumn, this.keyId);
          this.handler.setData(keyId, item);
          this.tableDataLoad.unshift(item);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      var firstKeyId = ax_com_core_default.a.getValueByAttr(this.tableDataLoad[0], this.totalColumn, this.keyId); // 设置 rowclickid

      this.rowClickIds = [firstKeyId];
      this.idsLoad(); // 高亮第一条数据

      this.$refs.elTable.setCurrentRow(this.tableDataLoad[0]); // 跳到行首  到顶

      this.$refs.elTable.bodyWrapper.scrollTop = 0;
    }
    /**
     * 移动数据
     * @param down
     * @returns {boolean}
     */

  }, {
    key: "moveData",
    value: function moveData() {
      var down = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.ids.length !== 1) {
        return false;
      }

      return this.moveDataByKey(this.ids[0], down);
    }
    /**
     * 移动数据（有目标key）
     * @param key
     * @param down 是否下移
     * @return {boolean}
     */

  }, {
    key: "moveDataByKey",
    value: function moveDataByKey(key) {
      var _this12 = this,
          _this$tableDataLoad;

      var down = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // 获取目标index
      var index = this.tableDataLoad.findIndex(function (item) {
        return item[_this12.keyId || ''] === key;
      }); // 没找到

      if (index < 0) {
        return false;
      } // 最前不能上移


      if (!down && index === 0) {
        return false;
      } // 最底不能下移


      if (down && index === this.tableDataLoad.length - 1) {
        return false;
      } // 操作目标


      var target = this.tableDataLoad.splice(index, 1); // 目标位置

      var pos = down ? index + 1 : index - 1; // 再插入回去

      (_this$tableDataLoad = this.tableDataLoad).splice.apply(_this$tableDataLoad, [pos, 0].concat(_toConsumableArray(target))); // 设置选中


      this.$nextTick(function () {
        var targetEle = _this12.$refs.elTable.$el.querySelectorAll('.el-table__body > tbody .current-row')[0];

        var offsetTop = targetEle.offsetTop;
        var offsetHeight = targetEle.offsetHeight;
        var bodyWrapper = _this12.$refs.elTable.bodyWrapper; // 判断是否在视野内

        if (offsetTop - bodyWrapper.scrollTop > bodyWrapper.offsetHeight || offsetTop - bodyWrapper.scrollTop < 0) {
          if (down) {
            bodyWrapper.scrollTop = offsetTop - bodyWrapper.offsetHeight + offsetHeight;
          } else {
            bodyWrapper.scrollTop = offsetTop;
          }
        }
      });
      return true;
    }
    /**
     * 分页加载
     * @param page
     * @param isStart
     */

  }, {
    key: "pageLoad",
    value: function pageLoad(page) {
      var _this$pageConfig,
          _this13 = this;

      var isStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // 如果加载数量已经大于等于总数且不是初始获取，不再加载
      if (this.tableDataLoad.length && this.tableDataLoad.length >= (((_this$pageConfig = this.pageConfig) === null || _this$pageConfig === void 0 ? void 0 : _this$pageConfig.count) || Infinity) && !isStart) {
        return;
      } // count不能小于等于0，且不是首次加载


      if (this.pageConfig && this.pageConfig.count !== undefined && this.pageConfig.count <= 0 && !isStart) {
        return;
      } // 没有页码当作下一页处理


      if (page === undefined) {
        this.pageData.page += 1;
      } else {
        this.pageData.page = page;
      } // 是否有配置


      if (this.pageConfig && this.pageLoader) {
        // 调用用户定义的loader
        return this.pageLoader(this.pageData.page).then(function (list) {
          if (list) {
            if (isStart) {
              // 设置 map 数据
              _this13.handler.createMapData(list, _this13.totalColumn, _this13.keyId); // 给 table 的数据


              _this13.tableDataLoad = _toConsumableArray(_this13.handler.dataMap.values()); // 清除修改痕迹

              _this13.clearCorrect();
            } else {
              list.forEach(function (value) {
                // 要把id分发出去
                var keyId = ax_com_core_default.a.getValueByAttr(value, _this13.totalColumn, _this13.keyId); // 如果已经是有的话

                if (_this13.handler.dataMap.get(keyId)) {
                  // 去除这条数据
                  _this13.tableDataLoad = _this13.tableDataLoad.filter(function (item) {
                    return item[_this13.keyId + ''] !== keyId;
                  });
                } // 数据集合


                var target = _this13.handler.setData(keyId, value); // 插入到某个位置,默认最上面


                _this13.tableDataLoad.push(target);
              });
            } // dom渲染之后你处理


            _this13.$nextTick().then(function () {
              if (isStart) {
                // 高亮第一条数据
                _this13.resetTopSelected();
              } // 获取容器的高度和列表的高度


              var eleWrapper = _this13.$el.querySelector('.el-table__body-wrapper');

              var eleTable = _this13.$el.querySelector('.el-table__body-wrapper > table'); // 如果列表高度小于容器高度，会继续加载


              if (eleWrapper && eleTable && eleWrapper.clientHeight > eleTable.clientHeight) {
                _this13.pageLoad();
              }
            });
          }
        });
      } else {
        return Promise.resolve();
      }
    }
    /**
     * 分页重载
     */

  }, {
    key: "pageReload",
    value: function pageReload() {
      this.checkPageCtrl();

      if (this.pageConfig) {
        var start = this.pageConfig.start;
        this.pageLoad(start !== null && start !== void 0 ? start : 1, true);
      }
    }
    /**
     * 获取行单选选中信息
     * @returns {{id: T, row: any}}
     */

  }, {
    key: "getRadioSelected",
    value: function getRadioSelected() {
      return {
        id: this.radioSelectedCurrent,
        row: this.getDataById(this.radioSelectedCurrent)
      };
    } //#endregion
    //#region 生命周期

  }, {
    key: "mounted",
    value: function () {
      var _mounted = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this$pageConfig2;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if ((_this$pageConfig2 = this.pageConfig) !== null && _this$pageConfig2 !== void 0 && _this$pageConfig2.autoLoad) {
                  this.pageReload();
                }

                if (this.radioSelectedDefault) {
                  this.radioSelectedCurrent = this.radioSelectedDefault;
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function mounted() {
        return _mounted.apply(this, arguments);
      }

      return mounted;
    }()
  }, {
    key: "updated",
    value: function updated() {}
  }]);

  return AxTable;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [{
      label: '名称',
      name: 'name',
      align: 'center',
      isEdit: true,
      isRange: true,
      isHide: false,
      isLink: true,
      isMove: false
    }, {
      label: '年纪',
      name: 'age',
      align: 'center',
      isEdit: true
    }];
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "tableColumn", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "columnList", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {
      list: []
    };
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "operation", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "tableData", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], tablevue_type_script_lang_ts_AxTable.prototype, "editrowconfig", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'id'
})], tablevue_type_script_lang_ts_AxTable.prototype, "keyId", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "noEditIds", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "enableHeaderCustom", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "showIndex", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "showRefresh", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core_default.a.TableBoxType.CHECKBOX
})], tablevue_type_script_lang_ts_AxTable.prototype, "boxType", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "showMenu", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "loading", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '20rem'
})], tablevue_type_script_lang_ts_AxTable.prototype, "height", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "editMode", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], tablevue_type_script_lang_ts_AxTable.prototype, "headMode", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ''
})], tablevue_type_script_lang_ts_AxTable.prototype, "rowClassName", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "rowStyle", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {};
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "cellStyle", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], tablevue_type_script_lang_ts_AxTable.prototype, "ids", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], tablevue_type_script_lang_ts_AxTable.prototype, "loadColumn", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], tablevue_type_script_lang_ts_AxTable.prototype, "sortOrder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {
      children: 'children',
      hasChildren: 'hasChildren'
    };
  },
  type: Object
})], tablevue_type_script_lang_ts_AxTable.prototype, "treeProps", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  },
  type: Array
})], tablevue_type_script_lang_ts_AxTable.prototype, "rowSelectDisabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: null
})], tablevue_type_script_lang_ts_AxTable.prototype, "radioSelectedDefault", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  type: Object
})], tablevue_type_script_lang_ts_AxTable.prototype, "pageConfig", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  type: Function
})], tablevue_type_script_lang_ts_AxTable.prototype, "pageLoader", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('customFlag')], tablevue_type_script_lang_ts_AxTable.prototype, "customFlagWatch", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('tableData')], tablevue_type_script_lang_ts_AxTable.prototype, "tableDataWatch", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])()], tablevue_type_script_lang_ts_AxTable.prototype, "cellDbClick", null);

tablevue_type_script_lang_ts_AxTable = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: (tablevue_type_script_lang_ts_components = {}, Object(defineProperty["a" /* default */])(tablevue_type_script_lang_ts_components, checkbox_default.a.name, checkbox_default.a), Object(defineProperty["a" /* default */])(tablevue_type_script_lang_ts_components, table_default.a.name, table_default.a), Object(defineProperty["a" /* default */])(tablevue_type_script_lang_ts_components, table_column_default.a.name, table_column_default.a), Object(defineProperty["a" /* default */])(tablevue_type_script_lang_ts_components, "AxButton", ax_button_default.a), Object(defineProperty["a" /* default */])(tablevue_type_script_lang_ts_components, "AxLink", ax_link_default.a), Object(defineProperty["a" /* default */])(tablevue_type_script_lang_ts_components, "AxRadio", ax_radio_default.a), Object(defineProperty["a" /* default */])(tablevue_type_script_lang_ts_components, "CustomTransfer", custom_transfer), Object(defineProperty["a" /* default */])(tablevue_type_script_lang_ts_components, "EditCell", edit_cell), Object(defineProperty["a" /* default */])(tablevue_type_script_lang_ts_components, "TableHead", table_head), Object(defineProperty["a" /* default */])(tablevue_type_script_lang_ts_components, "CellRender", {
    functional: true,
    render: function render(h, ctx) {
      return ctx.props.vnodes;
    }
  }), tablevue_type_script_lang_ts_components),
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'ids',
    event: 'idsChange'
  }
})], tablevue_type_script_lang_ts_AxTable);
/* harmony default export */ var tablevue_type_script_lang_ts_ = (tablevue_type_script_lang_ts_AxTable);
// CONCATENATED MODULE: ./packages/ax-table/src/table.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_tablevue_type_script_lang_ts_ = (tablevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/ax-table/src/table.vue





/* normalize component */

var table_component = Object(componentNormalizer["a" /* default */])(
  src_tablevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var table_api; }
table_component.options.__file = "packages/ax-table/src/table.vue"
/* harmony default export */ var table = (table_component.exports);
// CONCATENATED MODULE: ./packages/ax-table/index.ts



Object(install["a" /* addInstall */])(table.name, table);
/* harmony default export */ var ax_table = __webpack_exports__["default"] = (table);

/***/ })
/******/ ]);