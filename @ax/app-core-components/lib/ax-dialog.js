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
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
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

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-framework");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat.js");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-button");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-com-core");

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

/***/ 50:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/dialog");

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

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(12);

// EXTERNAL MODULE: ./packages/install.ts
var install = __webpack_require__(11);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-dialog/src/dialog.vue?vue&type=template&id=a7dcadb0&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-dialog",
    {
      ref: "el-dialog",
      staticClass: "ax_dialog",
      class: { not_modal: !_vm.modal },
      attrs: {
        title: _vm.title,
        visible: true,
        "custom-class": [
          _vm.showFooterLine ? "show_footer_line" : "",
          _vm.contentLoading ? "show_content_loading" : "",
          _vm.customClass
        ].join(" "),
        width: _vm.contentLoading ? "30%" : _vm.width,
        fullscreen: _vm.fullscreen,
        top: _vm.top,
        modal: _vm.modal,
        "lock-scroll": _vm.lockScroll,
        "close-on-click-modal": _vm.closeOnClickModal,
        "close-on-press-escape": _vm.closeOnPressEscape,
        "show-close": _vm.showClose,
        "before-close": _vm.handleClose,
        center: _vm.center,
        "append-to-body": true
      },
      on: {
        open: _vm.open,
        opened: _vm.opened,
        close: _vm.close,
        closed: _vm.closed
      },
      scopedSlots: _vm._u(
        [
          {
            key: "title",
            fn: function() {
              return [_vm._t("title")]
            },
            proxy: true
          }
        ],
        null,
        true
      )
    },
    [
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _vm.contentLoading
        ? _c("div", { staticClass: "content_loading" }, [
            _c("div", { staticClass: "loading_bar" })
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.showFooter && !_vm.contentLoading
        ? _c(
            "div",
            {
              staticClass: "dialog_footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _vm.$slots.foot !== undefined
                ? [_vm._t("foot")]
                : [
                    _c(
                      "ax-button",
                      {
                        staticClass: "dialog_button",
                        attrs: { type: _vm.type, loading: _vm.loading },
                        on: { click: _vm.okClose }
                      },
                      [
                        _vm._v(
                          "\n        " +
                            _vm._s(_vm.axLang.text("dialog.footer.Yes")) +
                            "\n      "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "ax-button",
                      {
                        staticClass: "dialog_button",
                        attrs: { type: "info" },
                        on: { click: _vm.cancelClose }
                      },
                      [
                        _vm._v(
                          "\n        " +
                            _vm._s(_vm.axLang.text("dialog.footer.No")) +
                            "\n      "
                        )
                      ]
                    )
                  ]
            ],
            2
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-dialog/src/dialog.vue?vue&type=template&id=a7dcadb0&

// EXTERNAL MODULE: external "element-ui/lib/dialog"
var dialog_ = __webpack_require__(50);
var dialog_default = /*#__PURE__*/__webpack_require__.n(dialog_);

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

// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(13);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-com-core"
var ax_com_core_ = __webpack_require__(4);
var ax_com_core_default = /*#__PURE__*/__webpack_require__.n(ax_com_core_);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-button"
var ax_button_ = __webpack_require__(21);
var ax_button_default = /*#__PURE__*/__webpack_require__.n(ax_button_);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-dialog/src/dialog.vue?vue&type=script&lang=ts&








var _components;









var dialogvue_type_script_lang_ts_AxDialog = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(AxDialog, _Vue);

  var _super = Object(createSuper["a" /* default */])(AxDialog);

  function AxDialog() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AxDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showFooter", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "height", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "loading", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "title", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "visible", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "width", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "customClass", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "fullscreen", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "top", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "modal", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "lockScroll", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "closeOnClickModal", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "closeOnPressEscape", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showClose", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "center", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showFooterLine", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "contentLoading", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "axLang", ax_com_core_default.a.getAxLang());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "dialogVisible", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "type", ax_com_core_default.a.ButtonType.PRIMARY);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "isDraggingTitle", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "isTouch", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "deltaX", 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "deltaY", 0);

    return _this;
  }

  Object(createClass["a" /* default */])(AxDialog, [{
    key: "visibleWatch",
    value: //#endregion
    //#region Watch
    function visibleWatch(val) {
      this.dialogVisible = val;

      if (val) {
        // 要重新计算窗口大小
        this.onWindowResize();
      }
    } //#endregion
    //#region Public Methods

    /**
     * 获取焦点方法
     */

  }, {
    key: "focus",
    value: function focus() {
      // 获取元素对象
      var el = this.$refs['el-dialog']; // 判断是否是 HTML 元素

      if (el instanceof external_vue_property_decorator_["Vue"]) {
        // 获取元素对象
        var e = el.$el; // 判断是否是 HTML 元素

        if (e && e instanceof HTMLElement) {
          // 设置焦点
          e.focus();
        }
      } // 返回当前对象


      return this;
    }
    /**
     * 重设弹窗大小
     */

  }, {
    key: "resize",
    value: function resize() {
      this.onWindowResize();
    } //#endregion
    //#region Emit

    /**
     * 关闭前的回调, 在外层必须关闭 (在外层关闭, 直接调用 done() 即可)
     */

  }, {
    key: "handleClose",
    value: function handleClose(done) {
      // 不要关闭
      done();
    }
    /**
     * dialog 打开的回调
     */

  }, {
    key: "open",
    value: function open() {}
    /**
     * dialog 打开动画结束时的回调
     */

  }, {
    key: "opened",
    value: function opened() {}
    /**
     * dialog 关闭的回调 (不区分按钮)
     */

  }, {
    key: "close",
    value: function close() {}
    /**
     * dialog 关闭动画结束时的回调 (不区分按钮)
     */

  }, {
    key: "closed",
    value: function closed() {} //#endregion
    //#region Data
    // 国际化

  }, {
    key: "okClose",
    value: //#endregion
    //#region Methods

    /**
     * 点击确定按钮事件 (区分按钮, 且只是确定按钮的事件)
     */
    function okClose(e) {
      this.$emit('okClose', e);
    }
    /**
     * 点击取消按钮事件
     * @param e
     */

  }, {
    key: "cancelClose",
    value: function cancelClose(e) {
      this.$refs['el-dialog'].$emit('close', e);
    }
    /**
     * 窗口大小改变的处理, 避免因为修改高度后,又触发 resize 函数,导致循环操作
     */

  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      // 判断 isResize 是否true
      // 是 true,就改 false
      // noHeight 的时候, false=>true
      // 进行修改
      this.$nextTick(function () {
        // 获取对话框元素
        var dragDom = document.querySelector('.el-dialog');
        var pos = app_core_framework_["AxDomUtils"].getDomPosition(dragDom);
        var left = pos.left;
        var top = pos.top;
        var wsize = app_core_framework_["AxDomUtils"].getWindowSize();
        var fixL = (wsize.width - dragDom.offsetWidth) / 2;
        var fixT = (wsize.height - dragDom.offsetHeight) / 2;
        var minL = 40 - dragDom.offsetWidth - fixL;
        var maxL = wsize.width - 30 - fixL;
        var minT = -fixT;
        var maxT = wsize.height - 30 - fixT;
        var nleft = left < minL ? minL : left > maxL ? maxL : left;
        var ntop = top < minT ? minT : top > maxT ? maxT : top; // 判断是否需要重新设置

        if (nleft !== left) {
          dragDom.style.left = nleft + 'px';
        }

        if (ntop !== top) {
          dragDom.style.top = ntop + 'px';
        }
      });
    }
    /**
     * 对话框头部拖动事件
     * @param evt
     * @returns {boolean}
     */

  }, {
    key: "onMouseDown",
    value: function onMouseDown(evt) {
      evt.preventDefault(); // evt.stopPropagation();

      var e = app_core_framework_["AxDomUtils"].getDomEventTarget(evt);
      if (!e || !e.tagName) return true;
      var tg = e.tagName.toUpperCase();
      if (tg === 'BUTTON' || e.parentElement && e.parentElement.tagName.toUpperCase() === 'BUTTON') return true;
      this.isDraggingTitle = true;
      this.isTouch = evt.type === 'touchstart';
      var ev = this.isTouch ? evt.touches.item(0) : evt; // 获取弹框头部

      var dragDom = this.$refs['el-dialog'].$el.querySelector('.el-dialog'); // 获取对话框元素

      var dialogHeaderEl = dragDom.querySelector('.el-dialog__header'); // 获取弹窗中心点在坐标系的位置

      var pos = app_core_framework_["AxDomUtils"].getDomPosition(dialogHeaderEl); // 鼠标到中心点的距离

      this.deltaX = pos.left - ev.clientX;
      this.deltaY = pos.top - ev.clientY; // 判断释放移动端事件

      if (this.isTouch) {
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'touchmove', this.onMouseMove);
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'touchend', this.onMouseUp);
      } else {
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'onmousemove', this.onMouseMove);
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'onmouseup', this.onMouseUp);
      }

      return true;
    }
    /**
     * 鼠标移动事件
     * @param evt1
     * @returns {boolean}
     */

  }, {
    key: "onMouseMove",
    value: function onMouseMove(evt1) {
      // 获取弹框头部
      var dragDom = this.$refs['el-dialog'].$el.querySelector('.el-dialog'); // 获取对话框元素

      var dialogHeaderEl = dragDom.querySelector('.el-dialog__header');
      if (!this.isDraggingTitle) return true;
      var left;
      var top;
      var ev1 = this.isTouch ? evt1.touches.item(0) : evt1; // 计算边距

      left = ev1.clientX + this.deltaX;
      top = ev1.clientY + this.deltaY; // 修正超出范围的数据

      var wsize = app_core_framework_["AxDomUtils"].getWindowSize(); // 左侧可允许的最大最小值

      var leftMin = 0;
      var leftMax = wsize.width - dragDom.offsetWidth;
      var topMin = 0; // 顶部可允许的最大最小值

      var topMax = wsize.height - dragDom.offsetHeight; // 判断超出部分

      left = left <= leftMin ? leftMin : left >= leftMax ? leftMax : left;
      top = top <= topMin ? topMin : top >= topMax ? topMax : top; // 设置对话框位置

      dragDom.style.left = "".concat(left, "px");
      dragDom.style.top = "".concat(top, "px"); // return AxDomUtils.cancelDomEvent(ev1);
    } // 文档对象按键释放事件

  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      if (!this.isDraggingTitle) return true;
      this.isDraggingTitle = false;

      if (this.isTouch) {
        app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'touchmove', this.onMouseMove);
        app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'touchend', this.onMouseUp);
      } else {
        app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'onmousemove', this.onMouseMove);
        app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'onmouseup', this.onMouseUp);
      }

      return true;
    } //#endregion
    //#region 生命周期

    /**
     * mounted
     */

  }, {
    key: "mounted",
    value: function mounted() {
      // 初始化大小
      this.onWindowResize(); // 增加窗口大小变化事件

      app_core_framework_["AxDomUtils"].addDomEventListener(window, 'resize', this.onWindowResize); // 获取弹框

      var dialogHeaderEl = this.$refs['el-dialog'].$el.querySelector('.el-dialog__header'); // 增加对话框头部拖动事件

      app_core_framework_["AxDomUtils"].addDomEventListener(dialogHeaderEl, ['onmousedown', 'touchstart'], this.onMouseDown);
    }
    /**
     * beforeDestroy
     */

  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      // 移除窗口大小改变响应
      app_core_framework_["AxDomUtils"].removeDomEventListener(window, 'resize', this.onWindowResize); // 移除文档按键释放响应

      app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'onmouseup', this.onMouseUp);
    }
  }]);

  return AxDialog;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "showFooter", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "height", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "loading", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "title", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "visible", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '68rem'
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "width", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ''
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "customClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "fullscreen", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: ''
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "top", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "modal", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "lockScroll", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "closeOnClickModal", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "closeOnPressEscape", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "showClose", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "center", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "showFooterLine", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], dialogvue_type_script_lang_ts_AxDialog.prototype, "contentLoading", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('visible')], dialogvue_type_script_lang_ts_AxDialog.prototype, "visibleWatch", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('beforeClose')], dialogvue_type_script_lang_ts_AxDialog.prototype, "handleClose", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('open')], dialogvue_type_script_lang_ts_AxDialog.prototype, "open", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('opened')], dialogvue_type_script_lang_ts_AxDialog.prototype, "opened", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('close')], dialogvue_type_script_lang_ts_AxDialog.prototype, "close", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('closed')], dialogvue_type_script_lang_ts_AxDialog.prototype, "closed", null);

dialogvue_type_script_lang_ts_AxDialog = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: (_components = {}, Object(defineProperty["a" /* default */])(_components, dialog_default.a.name, dialog_default.a), Object(defineProperty["a" /* default */])(_components, "AxButton", ax_button_default.a), _components)
})], dialogvue_type_script_lang_ts_AxDialog);
/* harmony default export */ var dialogvue_type_script_lang_ts_ = (dialogvue_type_script_lang_ts_AxDialog);
// CONCATENATED MODULE: ./packages/ax-dialog/src/dialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_dialogvue_type_script_lang_ts_ = (dialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./packages/ax-dialog/src/dialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_dialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ax-dialog/src/dialog.vue"
/* harmony default export */ var dialog = (component.exports);
// CONCATENATED MODULE: ./packages/ax-dialog/index.ts



Object(install["a" /* addInstall */])(dialog.name, dialog);
/* harmony default export */ var ax_dialog = __webpack_exports__["default"] = (dialog);

/***/ })

/******/ });