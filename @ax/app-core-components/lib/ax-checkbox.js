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
/******/ 	return __webpack_require__(__webpack_require__.s = 95);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-com-core");

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/switch");

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox-button");

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

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(12);

// EXTERNAL MODULE: ./packages/install.ts
var install = __webpack_require__(11);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-checkbox/src/checkbox.vue?vue&type=template&id=0d07b988&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_checkbox",
      class: [
        { validate_passed: _vm.validatePassed === true },
        { validate_failed: _vm.validatePassed === false }
      ]
    },
    [
      _vm.type === "button"
        ? _c(
            "el-checkbox-button",
            {
              ref: "el-checkbox-button",
              staticClass: "checkbox-button",
              attrs: {
                name: _vm.name,
                label: _vm.trueValueInside,
                "true-label": _vm.trueValueInside,
                "false-label": _vm.falseValue,
                disabled: _vm.disabled,
                title: _vm.placeholder
              },
              on: { blur: _vm.handleBlur },
              model: {
                value: _vm.model,
                callback: function($$v) {
                  _vm.model = $$v
                },
                expression: "model"
              }
            },
            [
              _vm._t("default", function() {
                return [_vm._v(_vm._s(_vm.label))]
              })
            ],
            2
          )
        : _vm.type === "switch"
        ? _c("el-switch", {
            staticClass: "switch",
            attrs: {
              name: _vm.name,
              "active-value": _vm.trueValueInside,
              "inactive-value": _vm.falseValueInside,
              disabled: _vm.disabled,
              title: _vm.placeholder
            },
            model: {
              value: _vm.model,
              callback: function($$v) {
                _vm.model = $$v
              },
              expression: "model"
            }
          })
        : _c(
            "el-checkbox",
            {
              ref: "el-checkbox",
              staticClass: "checkbox",
              attrs: {
                name: _vm.name,
                label: _vm.trueValueInside,
                "true-label": _vm.trueValueInside,
                "false-label": _vm.falseValueInside,
                indeterminate: _vm.indeterminate,
                disabled: _vm.disabled,
                title: _vm.placeholder,
                border: _vm.type === "border"
              },
              on: { blur: _vm.handleBlur },
              model: {
                value: _vm.model,
                callback: function($$v) {
                  _vm.model = $$v
                },
                expression: "model"
              }
            },
            [
              _vm._t("default", function() {
                return [_vm._v(_vm._s(_vm.label))]
              })
            ],
            2
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-checkbox/src/checkbox.vue?vue&type=template&id=0d07b988&

// EXTERNAL MODULE: external "element-ui/lib/switch"
var switch_ = __webpack_require__(47);
var switch_default = /*#__PURE__*/__webpack_require__.n(switch_);

// EXTERNAL MODULE: external "element-ui/lib/checkbox-button"
var checkbox_button_ = __webpack_require__(48);
var checkbox_button_default = /*#__PURE__*/__webpack_require__.n(checkbox_button_);

// EXTERNAL MODULE: external "element-ui/lib/checkbox"
var checkbox_ = __webpack_require__(27);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

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

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-com-core"
var ax_com_core_ = __webpack_require__(4);
var ax_com_core_default = /*#__PURE__*/__webpack_require__.n(ax_com_core_);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-checkbox/src/checkbox.vue?vue&type=script&lang=ts&










var _components;







var checkboxvue_type_script_lang_ts_AxCheckbox = /*#__PURE__*/function (_AxComCore$AxUICompon) {
  Object(inherits["a" /* default */])(AxCheckbox, _AxComCore$AxUICompon);

  var _super = Object(createSuper["a" /* default */])(AxCheckbox);

  function AxCheckbox() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AxCheckbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "type", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "indeterminate", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "label", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "trueValue", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "falseValue", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "trueValueInside", 'Y');

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "falseValueInside", 'N');

    return _this;
  }

  Object(createClass["a" /* default */])(AxCheckbox, [{
    key: "model",
    get:
    /**
     * 内部ele组件绑定的v-model获取外部的v-model值
     * @returns {string}
     */
    function get() {
      return this.modelValue === this.trueValue ? this.trueValueInside : this.falseValueInside;
    }
    /**
     * 内部ele组件绑定的v-model更新之后设置外部v-model值
     * @param val
     */
    ,
    set: function set(val) {
      this.modelValue = val === this.trueValueInside ? this.trueValue : this.falseValue;
    }
    /**
     * 获取当前是否时选中状态
     */

  }, {
    key: "isChecked",
    value: function isChecked() {
      return this.modelValue === this.trueValue;
    }
    /**
     * 获取焦点方法
     */

  }, {
    key: "focus",
    value: function focus() {
      // 获取元素对象
      var el = this.$refs[this.type === ax_com_core_default.a.CheckboxType.BUTTON ? 'el-checkbox-button' : 'el-checkbox']; // 获取元素对象

      var e = el.$el; // 判断是否是 HTML 元素

      if (e && e instanceof HTMLElement) {
        // 设置焦点
        e.focus();
      } // 返回当前对象


      return this;
    }
    /**
     * 失去焦点处理
     */

  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      this.$emit('blur', event);
    }
  }]);

  return AxCheckbox;
}(ax_com_core_default.a.AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ax_com_core_default.a.CheckboxType.NORMAL
})], checkboxvue_type_script_lang_ts_AxCheckbox.prototype, "type", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], checkboxvue_type_script_lang_ts_AxCheckbox.prototype, "indeterminate", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ''
})], checkboxvue_type_script_lang_ts_AxCheckbox.prototype, "label", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'Y'
})], checkboxvue_type_script_lang_ts_AxCheckbox.prototype, "trueValue", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'N'
})], checkboxvue_type_script_lang_ts_AxCheckbox.prototype, "falseValue", void 0);

checkboxvue_type_script_lang_ts_AxCheckbox = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change'
  },
  components: (_components = {}, Object(defineProperty["a" /* default */])(_components, checkbox_default.a.name, checkbox_default.a), Object(defineProperty["a" /* default */])(_components, checkbox_button_default.a.name, checkbox_button_default.a), Object(defineProperty["a" /* default */])(_components, switch_default.a.name, switch_default.a), _components)
})], checkboxvue_type_script_lang_ts_AxCheckbox);
/* harmony default export */ var checkboxvue_type_script_lang_ts_ = (checkboxvue_type_script_lang_ts_AxCheckbox);
// CONCATENATED MODULE: ./packages/ax-checkbox/src/checkbox.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_checkboxvue_type_script_lang_ts_ = (checkboxvue_type_script_lang_ts_); 
// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./packages/ax-checkbox/src/checkbox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_checkboxvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ax-checkbox/src/checkbox.vue"
/* harmony default export */ var src_checkbox = (component.exports);
// CONCATENATED MODULE: ./packages/ax-checkbox/index.ts



Object(install["a" /* addInstall */])(src_checkbox.name, src_checkbox);
/* harmony default export */ var ax_checkbox = __webpack_exports__["default"] = (src_checkbox);

/***/ })

/******/ });