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
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),

/***/ 11:
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name.js");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat.js");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator.js");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator.js");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.map.js");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.sort.js");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-com-core");

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/autocomplete");

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 6:
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

/***/ 7:
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

/***/ 8:
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

/***/ 9:
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

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(12);

// EXTERNAL MODULE: ./packages/install.ts
var install = __webpack_require__(11);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-autocomplete/src/autocomplete.vue?vue&type=template&id=7fae3ea8&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_select",
      class: [
        { validate_passed: _vm.validatePassed === true },
        { validate_failed: _vm.validatePassed === false },
        { button_mode: _vm.type === "button" }
      ],
      on: {
        keydown: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.close.apply(null, arguments)
        }
      }
    },
    [
      _vm.type === "select"
        ? _c("el-autocomplete", {
            ref: "el-autocomplete",
            staticClass: "dropdown_input",
            attrs: {
              name: _vm.name,
              disabled: _vm.disabled,
              "fetch-suggestions": _vm.querySearch,
              placeholder: _vm.placeholder,
              clearable: _vm.clearable,
              label: "text",
              "value-key": "key",
              "popper-class": _vm.popperClass
            },
            on: { blur: _vm.handleBlur },
            scopedSlots: _vm._u(
              [
                {
                  key: "prepend",
                  fn: function() {
                    return [_vm._t("outer-left")]
                  },
                  proxy: true
                },
                {
                  key: "prefix",
                  fn: function() {
                    return [_vm._t("inner-left")]
                  },
                  proxy: true
                },
                {
                  key: "suffix",
                  fn: function() {
                    return [_vm._t("inner-right")]
                  },
                  proxy: true
                },
                {
                  key: "append",
                  fn: function() {
                    return [_vm._t("outer-right")]
                  },
                  proxy: true
                },
                {
                  key: "default",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._t(
                        "option",
                        function() {
                          return [
                            _c(
                              "span",
                              {
                                class: _vm.isLatestSelectedKey(item.key)
                                  ? "selected"
                                  : ""
                              },
                              [
                                _vm._v(
                                  "\n          " +
                                    _vm._s(item.text) +
                                    "\n        "
                                )
                              ]
                            )
                          ]
                        },
                        { item: item }
                      )
                    ]
                  }
                }
              ],
              null,
              true
            ),
            model: {
              value: _vm.modelValue,
              callback: function($$v) {
                _vm.modelValue = $$v
              },
              expression: "modelValue"
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-autocomplete/src/autocomplete.vue?vue&type=template&id=7fae3ea8&

// EXTERNAL MODULE: external "element-ui/lib/autocomplete"
var autocomplete_ = __webpack_require__(45);
var autocomplete_default = /*#__PURE__*/__webpack_require__.n(autocomplete_);

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

// EXTERNAL MODULE: external "core-js/modules/es.array.sort.js"
var es_array_sort_js_ = __webpack_require__(38);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-com-core"
var ax_com_core_ = __webpack_require__(4);
var ax_com_core_default = /*#__PURE__*/__webpack_require__.n(ax_com_core_);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-autocomplete/src/autocomplete.vue?vue&type=script&lang=ts&


















var autocompletevue_type_script_lang_ts_AxAutocomplete = /*#__PURE__*/function (_AxComCore$AxUICompon) {
  Object(inherits["a" /* default */])(AxAutocomplete, _AxComCore$AxUICompon);

  var _super = Object(createSuper["a" /* default */])(AxAutocomplete);

  function AxAutocomplete() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AxAutocomplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "type", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "menuClass", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "popperClass", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "options", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "createable", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "filterable", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "multiple", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "collapseTags", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "remoteMethod", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "btnText", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "optmap", new Map());

    return _this;
  }

  Object(createClass["a" /* default */])(AxAutocomplete, [{
    key: "loadDropdownText",
    get:
    /**
     * 获取静态下拉框文本
     */
    function get() {
      // 获取键
      var ks = this.modelValue; // 获取下拉数据

      var opt = this.optmap.get(ks); // 判断是否有效

      if (opt) return opt.text; // 不存在则返回占位符

      return this.placeholder || '';
    }
    /**
     * 获取焦点方法
     */

  }, {
    key: "focus",
    value: function focus() {
      // 判断模式
      switch (this.type) {
        case 'select':
          // 调用组件的获取焦点方法
          this.$refs['el-select'].focus();
          break;

        case 'dropdown':
          {
            // 获取元素对象
            var el = this.$refs['el-dropdown']; // 判断是否是 HTML 元素

            if (el instanceof external_vue_property_decorator_["Vue"]) {
              // 获取元素对象
              var e = el.$el; // 判断是否是 HTML 元素

              if (e && e instanceof HTMLElement) {
                // 设置焦点
                e.focus();
              }
            }
          }
          break;

        case 'input':
          this.$refs['el-autocomplete'].focus();
          break;

        default:
          break;
      } // 返回当前对象


      return this;
    }
    /**
     * 关闭下拉框处理
     */

  }, {
    key: "close",
    value: function close() {
      // 判断模式
      switch (this.type) {
        case 'select':
          this.$refs['el-select'].blur();
          break;

        case 'dropdown':
          this.$refs['el-dropdown'].hide();
          break;

        case 'input':
          this.$refs['el-autocomplete'].close();
          break;

        default:
          break;
      } // 返回当前对象


      return this;
    }
    /**
     * 强制更新下拉框数据处理
     */

  }, {
    key: "updateDropdown",
    value: function updateDropdown() {
      // 仅处理文本输入框下拉数据
      if (this.type === 'input') {
        // 直接调用更新
        this.$refs['el-autocomplete'].handleChange(this.data);
      } // 返回当前对象


      return this;
    }
    /**
     * 判断是否为最后一个选中的键
     */

  }, {
    key: "isLatestSelectedKey",
    value: function isLatestSelectedKey(key) {
      // 获取键
      var ks = this.modelValue; // 判断是否多选模式

      if (this.multiple) {
        // 返回是否存在数据
        return ks && ks.length > 0 ? ks.indexOf(key) !== 0 : false;
      } else {
        // 返回是否一致
        return ks === key;
      }
    }
    /**
     * 获取当前选中的数据（未找到则返回 undefined ）
     * @param {any} key 当前数据键（多选模式时可以是数组，数组则返回数据数组）
     * @returns {IOptionData | IOptionData[] | undefined} 对应键的数据值或数据数组
     */

  }, {
    key: "getSelectedData",
    value: function getSelectedData(key) {
      // 判断是否有效
      if (key === undefined || key === null) return undefined; // 判断是否存在数据

      if (key && this.optmap.size > 0) {
        // 判断模式
        if (key instanceof Array) {
          // 多选模式，判断是否存在数据
          if (key.length > 0) {
            // 创建数据数组
            var vs = []; // 遍历数据

            for (var index = 0; index < key.length; index++) {
              // 获取一个数据
              var op = this.optmap.get(key[index]); // 设置到数组

              if (op) vs.push(op);
            } // 返回数据


            return vs;
          }
        } else {
          // 获取数据值
          return this.optmap.get(key);
        }
      } else {
        // 返回无效
        return undefined;
      }
    }
    /**
     * 监控下拉数据变化
     */

  }, {
    key: "setOptions",
    value: function setOptions() {
      // 清理集合
      this.optmap.clear(); // 获取当前数据

      var v = this.options; // 判断是否有效

      if (!v || v.length === 0) return v; // 遍历设置到集合

      for (var index = 0; index < v.length; index++) {
        // 获取一个数据
        var item = v[index]; // 设置到集合

        this.optmap.set(item.key, item);
      }
    }
    /**
     * 获取输入下拉框数据方法
     */

  }, {
    key: "querySearch",
    value: function querySearch(queryString, callback) {
      // 判断是否存在搜索对象
      if (!queryString || queryString.length === 0 || !this.options) {
        // 回调结果
        callback(this.options || []); // 退出处理

        return;
      } // 定义排序数据数组


      var sortAry = []; // 转换为小写

      var qstr = queryString.toLowerCase(); // 遍历测试匹配度

      for (var index = 0; index < this.options.length; index++) {
        // 获取一个数据
        var item = this.options[index]; // 判断是否有效

        if (!item) continue; // 获取匹配位置

        var pos = item.text ? item.text.toLowerCase().indexOf(qstr) : 10000; // 修正负数

        if (pos < 0) pos = 10000; // 增加匹配度到数组

        sortAry.push({
          i: pos,
          v: item
        });
      } // 获取数据进行排序


      sortAry.sort(function (a, b) {
        if (a.i === b.i) return 0;
        return a.i < b.i ? -1 : 1;
      }); // 定义新数组

      var items = []; // 遍历设置数据

      for (var _index = 0; _index < sortAry.length; _index++) {
        // 增加到数组
        items.push(sortAry[_index].v);
      } // 调用 callback 返回建议列表的数据


      callback(items);
    }
    /**
     * 菜单下拉框事件
     */

  }, {
    key: "handleCommand",
    value: function handleCommand(val) {
      var _this2 = this;

      // 发布数据改变事件（同时触发 v-model）
      this.$emit('change', val); // 判断是否存在

      if (!val || val.length === 0) {
        // 样式设置焦点
        this.$nextTick().then(function () {
          _this2.focus();
        });
      }
    }
    /**
     * 失去焦点处理
     */

  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      this.$emit('blur', event);
    }
    /**
     * 初始化数据处理
     */

  }, {
    key: "created",
    value: function created() {
      // 设置下拉数据到集合
      this.setOptions();
    }
  }]);

  return AxAutocomplete;
}(ax_com_core_default.a.AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core_default.a.DropdownType.NORMAL,
  type: String
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "menuClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'ax_autocomplete_popper'
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "popperClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "clearable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "options", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "createable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "filterable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "multiple", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "collapseTags", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "remoteMethod", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '更多菜单'
})], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "btnText", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('options')], autocompletevue_type_script_lang_ts_AxAutocomplete.prototype, "setOptions", null);

autocompletevue_type_script_lang_ts_AxAutocomplete = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change'
  },
  components: Object(defineProperty["a" /* default */])({}, autocomplete_default.a.name, autocomplete_default.a)
})], autocompletevue_type_script_lang_ts_AxAutocomplete);
/* harmony default export */ var autocompletevue_type_script_lang_ts_ = (autocompletevue_type_script_lang_ts_AxAutocomplete);
// CONCATENATED MODULE: ./packages/ax-autocomplete/src/autocomplete.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_autocompletevue_type_script_lang_ts_ = (autocompletevue_type_script_lang_ts_); 
// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./packages/ax-autocomplete/src/autocomplete.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_autocompletevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ax-autocomplete/src/autocomplete.vue"
/* harmony default export */ var autocomplete = (component.exports);
// CONCATENATED MODULE: ./packages/ax-autocomplete/index.ts



Object(install["a" /* addInstall */])(autocomplete.name, autocomplete);
/* harmony default export */ var ax_autocomplete = __webpack_exports__["default"] = (autocomplete);

/***/ })

/******/ });