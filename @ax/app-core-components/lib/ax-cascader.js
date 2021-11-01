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
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
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

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map.js");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-tooltip");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each.js");

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec.js");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-com-core");

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.join.js");

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice.js");

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/cascader");

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

/***/ 80:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.split.js");

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

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(12);

// EXTERNAL MODULE: ./packages/install.ts
var install = __webpack_require__(11);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-cascader/src/cascader.vue?vue&type=template&id=78492968&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ax_cascader",
      class: [
        { validate_passed: _vm.validatePassed === true },
        { validate_failed: _vm.validatePassed === false }
      ],
      style: _vm.props.multiple ? "height:auto;" : ""
    },
    [
      _vm.showTooltip
        ? _c(
            "ax-tooltip",
            {
              attrs: {
                placement: "bottom",
                tips: _vm.tooltipText,
                disabled: _vm.disabledGet
              }
            },
            [
              _c(
                "el-cascader",
                _vm._g(
                  _vm._b(
                    {
                      ref: "el_cascader",
                      attrs: {
                        placement: "bottom-start",
                        "show-all-levels": _vm.showAllLevels,
                        "collapse-tags": _vm.collapseTags,
                        placeholder: _vm.placeholderStr,
                        disabled: _vm.disabled,
                        clearable: _vm.clearable,
                        "popper-class": _vm.popperClass,
                        name: _vm.name,
                        options: _vm.options,
                        props: _vm.props
                      },
                      on: {
                        change: _vm.nodeChange,
                        "expand-change": _vm.expandChange
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var node = ref.node
                              var data = ref.data
                              return [
                                _vm._t("default", null, {
                                  node: node,
                                  data: data
                                })
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
                    },
                    "el-cascader",
                    _vm.$attrs,
                    false
                  ),
                  _vm.$listeners
                )
              )
            ],
            1
          )
        : _c(
            "el-cascader",
            _vm._g(
              _vm._b(
                {
                  ref: "el_cascader",
                  attrs: {
                    placement: "bottom-start",
                    "show-all-levels": _vm.showAllLevels,
                    "collapse-tags": _vm.collapseTags,
                    "popper-class": _vm.popperClass,
                    placeholder: _vm.placeholderStr,
                    disabled: _vm.disabled,
                    clearable: _vm.clearable,
                    name: _vm.name,
                    options: _vm.options,
                    props: _vm.props
                  },
                  on: {
                    change: _vm.nodeChange,
                    "expand-change": _vm.expandChange
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var node = ref.node
                          var data = ref.data
                          return [
                            _vm._t("default", null, { node: node, data: data })
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
                },
                "el-cascader",
                _vm.$attrs,
                false
              ),
              _vm.$listeners
            )
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-cascader/src/cascader.vue?vue&type=template&id=78492968&

// EXTERNAL MODULE: external "element-ui/lib/cascader"
var cascader_ = __webpack_require__(46);
var cascader_default = /*#__PURE__*/__webpack_require__.n(cascader_);

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

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each.js"
var web_dom_collections_for_each_js_ = __webpack_require__(30);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec.js"
var es_regexp_exec_js_ = __webpack_require__(39);

// EXTERNAL MODULE: external "core-js/modules/es.string.split.js"
var es_string_split_js_ = __webpack_require__(80);

// EXTERNAL MODULE: external "core-js/modules/es.array.join.js"
var es_array_join_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/es.array.slice.js"
var es_array_slice_js_ = __webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/es.array.map.js"
var es_array_map_js_ = __webpack_require__(23);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-com-core"
var ax_com_core_ = __webpack_require__(4);
var ax_com_core_default = /*#__PURE__*/__webpack_require__.n(ax_com_core_);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-tooltip"
var ax_tooltip_ = __webpack_require__(26);
var ax_tooltip_default = /*#__PURE__*/__webpack_require__.n(ax_tooltip_);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-cascader/src/cascader.vue?vue&type=script&lang=ts&








var _components;














var cascadervue_type_script_lang_ts_AxCascader = /*#__PURE__*/function (_AxComCore$AxUICompon) {
  Object(inherits["a" /* default */])(AxCascader, _AxComCore$AxUICompon);

  var _super = Object(createSuper["a" /* default */])(AxCascader);

  function AxCascader() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AxCascader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "refCascader", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showEllipsis", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "popperClass", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showAllLevels", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showTooltip", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "collapseTags", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "options", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "props", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "tooltipText", '');

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "firstValue", null);

    return _this;
  }

  Object(createClass["a" /* default */])(AxCascader, [{
    key: "disabledGet",
    get: //#endregion
    //#region Computed

    /**
     * 不显示提示
     * @returns {boolean}
     */
    function get() {
      return this.tooltipText === '';
    }
    /**
     * placeholder的显示
     * @returns {string}
     */

  }, {
    key: "placeholderStr",
    get: function get() {
      return this.placeholder === undefined ? ax_com_core_["UILang"].t('select.placeholder') : this.placeholder;
    } //#endregion
    //#region Methods

    /**
     * 各父级选项值组成的数组
     */

  }, {
    key: "expandChange",
    value: function expandChange(list) {
      for (var _len2 = arguments.length, arg = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        arg[_key2 - 1] = arguments[_key2];
      }

      this.$emit('expandChange', list, arg);
    }
    /**
     * 节点选择事件
     * @param ids
     */

  }, {
    key: "nodeChange",
    value: function nodeChange(ids) {
      var _this2 = this;

      this.$emit('nodeChange', ids); // 如果是有要求,需要显示...的话

      if (this.showEllipsis) {
        setTimeout(function () {
          var _this2$props;

          var limit = 3; // 多选的话

          if ((_this2$props = _this2.props) !== null && _this2$props !== void 0 && _this2$props.multiple) {
            // 遍历 presentTags
            _this2.refCascader.presentTags.forEach(function (item) {
              var arr = item.text.split('/');

              if (arr.length > limit) {
                var final = arr.slice(0 - limit).join('/'); // 设置名称

                item.text = '.../' + final;
              }
            });
          } else {
            var str = _this2.getPresentText(); // 如果没有文字的话


            if (!str) {
              return;
            } // str=>arr  split


            var arr = str.split('/'); // 如果是超长的话  ('/'>3)

            if (arr.length > limit) {
              var final = arr.slice(0 - limit).join('/'); // 设置名称

              _this2.setPresentText('.../' + final);
            }
          }
        }, 50);
      } // 提示文字修改


      setTimeout(function () {
        _this2.tooltipText = _this2.getPresentText();
      }, 200);
    }
    /**
     * 改变 ax组件的 v-model 值
     */

  }, {
    key: "proxyChange",
    value: function proxyChange(val) {
      this.$emit('change', val);
    } //#endregion
    //#region 公共方法

    /**
     * 隐藏菜单
     */

  }, {
    key: "setMenuVisible",
    value: function setMenuVisible() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // 隐藏菜单
      this.refCascader.toggleDropDownVisible(visible);
    }
    /**
     * 获取焦点方法
     */

  }, {
    key: "focus",
    value: function focus() {
      // 获取元素对象
      var el = this.$refs['el-cascader']; // 判断是否是 HTML 元素

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
     * 更换名称显示
     * @param str
     */

  }, {
    key: "setPresentText",
    value: function setPresentText(str) {
      var _this$props,
          _this3 = this;

      // 多选的话
      if ((_this$props = this.props) !== null && _this$props !== void 0 && _this$props.multiple) {
        var list = str.split(',');
        list.forEach(function (item, index) {
          _this3.refCascader.presentTags[index].text = item;
        });
      } else {
        this.refCascader.presentText = str;
      }
    }
    /**
     * 获取名称显示
     * @returns {any}
     */

  }, {
    key: "getPresentText",
    value: function getPresentText() {
      var _this$props2;

      return (_this$props2 = this.props) !== null && _this$props2 !== void 0 && _this$props2.multiple ? this.refCascader.presentTags.map(function (item) {
        return item.text;
      }).join('  ,  ') : this.refCascader.presentText;
    }
    /**
     * 清除lazyload数据的节点
     */

  }, {
    key: "clearLazyNode",
    value: function clearLazyNode(cb) {
      if (cb) {
        cb(); // 更换 lazyLoad
        // 清除 v-model
        // (this.$refs.ax_cascader as any).$refs.el_cascader.$refs.panel.checkedValue();
      }

      var panel = this.refCascader.$refs.panel; // 存储数据 menus

      panel.menus = []; // 存储数据 menus
      // 清除 refs 的所有 menu 节点

      panel.$refs = {};
      panel.lazyLoad(); // panel.initStore();
    }
    /**
     * 获取选中的节点数组
     * @param leafOnly 是否只是叶子节点，默认值为 false
     * @returns {any}
     */

  }, {
    key: "getCheckedNodes",
    value: function getCheckedNodes() {
      var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return this.refCascader.getCheckedNodes(leafOnly);
    } //#endregion
    //#region elementui 的 v-model 响应

    /**
     * 绑定 elementui 的 v-model
     */

  }, {
    key: "elValueArr",
    get: function get() {
      var data = this.data; // 如果是已经有记录,就 return
      // if (this.firstValue !== null) {
      //   return this.firstValue;
      // }
      // 如果是字符串的话

      if (typeof data === 'string') {
        this.firstValue = data; // 转成 数组

        return data.split('/');
      } else if (Array.isArray(data)) {
        this.firstValue = data.map(function (item) {
          return item;
        }); // 如果是数组的话

        return this.firstValue;
      } else {
        return [];
      }
    }
    /**
     * 绑定 elementui 的 v-model
     * @param val
     */
    ,
    set: function set(val) {
      if (typeof this.firstValue === 'string') {
        // 数组=>字符串
        var str = val.join('/');
        this.proxyChange(str);
      } else if (Array.isArray(this.firstValue)) {
        // 如果是数组的话
        this.proxyChange(val);
      }
    } //#endregion
    //#region 生命周期

    /**
     * created
     */

  }, {
    key: "created",
    value: function created() {
      var _this$props3;

      // 设置默认触发类型
      if (!((_this$props3 = this.props) !== null && _this$props3 !== void 0 && _this$props3.expandTrigger)) {
        this.props.expandTrigger = 'hover';
      }
    }
    /**
     * mounted
     */

  }, {
    key: "mounted",
    value: function mounted() {
      // 提示文字修改
      this.tooltipText = this.getPresentText();
    }
  }]);

  return AxCascader;
}(ax_com_core_default.a.AxUIComponent);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Ref"])('el_cascader')], cascadervue_type_script_lang_ts_AxCascader.prototype, "refCascader", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "showEllipsis", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "name", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "placeholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'ax_cascader_popper'
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "popperClass", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "clearable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true,
  type: Boolean
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "showAllLevels", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "showTooltip", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "collapseTags", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  }
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "options", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return {
      value: undefined,
      label: undefined,
      children: undefined,
      disabled: undefined,
      expandTrigger: 'hover',
      multiple: false
    };
  }
})], cascadervue_type_script_lang_ts_AxCascader.prototype, "props", void 0);

cascadervue_type_script_lang_ts_AxCascader = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change'
  },
  inheritAttrs: false,
  components: (_components = {}, Object(defineProperty["a" /* default */])(_components, cascader_default.a.name, cascader_default.a), Object(defineProperty["a" /* default */])(_components, "AxTooltip", ax_tooltip_default.a), _components)
})], cascadervue_type_script_lang_ts_AxCascader);
/* harmony default export */ var cascadervue_type_script_lang_ts_ = (cascadervue_type_script_lang_ts_AxCascader);
// CONCATENATED MODULE: ./packages/ax-cascader/src/cascader.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_cascadervue_type_script_lang_ts_ = (cascadervue_type_script_lang_ts_); 
// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./packages/ax-cascader/src/cascader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_cascadervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ax-cascader/src/cascader.vue"
/* harmony default export */ var cascader = (component.exports);
// CONCATENATED MODULE: ./packages/ax-cascader/index.ts



Object(install["a" /* addInstall */])(cascader.name, cascader);
/* harmony default export */ var ax_cascader = __webpack_exports__["default"] = (cascader);

/***/ })

/******/ });