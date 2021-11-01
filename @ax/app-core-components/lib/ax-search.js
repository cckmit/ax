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
/******/ 	return __webpack_require__(__webpack_require__.s = 109);
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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(12);

// EXTERNAL MODULE: ./packages/install.ts
var install = __webpack_require__(11);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-search/src/search.vue?vue&type=template&id=b086a5b0&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "ax-search", staticClass: "ax_search" }, [
    _c(
      "div",
      { staticClass: "search_title" },
      [
        _c(
          "ax-input",
          {
            ref: "axInput",
            attrs: {
              type: "text",
              clearable: _vm.clearable,
              placeholder: _vm.placeholderStr
            },
            on: {
              change: _vm.handleChange,
              focus: _vm.handleFocus,
              blur: _vm.handleBlur
            },
            nativeOn: {
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.clickSearch.apply(null, arguments)
              }
            },
            model: {
              value: _vm.dataGet,
              callback: function($$v) {
                _vm.dataGet = $$v
              },
              expression: "dataGet"
            }
          },
          [
            _c("i", {
              staticClass: "el-input__icon el-icon-search",
              attrs: { slot: "inner-right" },
              on: { click: _vm.clickSearch },
              slot: "inner-right"
            })
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.historyVisible && _vm.history,
            expression: "historyVisible && history"
          }
        ],
        staticClass: "search_history"
      },
      [
        _c("div", { staticClass: "history_title" }, [
          _c("span", [_vm._v(_vm._s(_vm.UILang.t("search.search.history")))]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "clear",
              on: {
                click: function($event) {
                  _vm.hisVisible = true
                }
              }
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.UILang.t("search.clear.history")) +
                  "\n      "
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "history_data" },
          _vm._l(_vm.historyData, function(item, index) {
            return _c(
              "span",
              {
                key: index,
                attrs: { title: item.text },
                on: {
                  click: function($event) {
                    return _vm.setValue(item)
                  }
                }
              },
              [_vm._v("\n        " + _vm._s(item.text) + "\n      ")]
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "history_title" }, [
          _c("span", [
            _vm._v(_vm._s(_vm.UILang.t("search.search.result.history")))
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "clear",
              on: {
                click: function($event) {
                  _vm.tagVisible = true
                }
              }
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.UILang.t("search.clear.result.history")) +
                  "\n      "
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "history_tag" },
          _vm._l(_vm.historyTag, function(item, index) {
            return _c(
              "span",
              {
                key: index,
                attrs: { title: item.text },
                on: {
                  click: function($event) {
                    return _vm.selectTag(item)
                  }
                }
              },
              [
                _c("i", {
                  staticClass: "el-tag__close el-icon-close",
                  on: {
                    click: function($event) {
                      return _vm.closeTag(item)
                    }
                  }
                }),
                _vm._v("\n        " + _vm._s(item.text) + "\n      ")
              ]
            )
          }),
          0
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ax-search/src/search.vue?vue&type=template&id=b086a5b0&

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

// EXTERNAL MODULE: external "core-js/modules/es.string.trim.js"
var es_string_trim_js_ = __webpack_require__(84);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-com-core"
var ax_com_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-input"
var ax_input_ = __webpack_require__(33);
var ax_input_default = /*#__PURE__*/__webpack_require__.n(ax_input_);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/thread-loader/dist/cjs.js!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/babel-loader/lib??ref--1-1!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/ts-loader??ref--1-2!C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./packages/ax-search/src/search.vue?vue&type=script&lang=ts&













var searchvue_type_script_lang_ts_AxSearch = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(AxSearch, _Vue);

  var _super = Object(createSuper["a" /* default */])(AxSearch);

  function AxSearch() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AxSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "searchData", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "dataGet", '');

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "UILang", ax_com_core_["UILang"]);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "refSelf", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "resultData", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "history", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "placeholder", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "clearable", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "isOnceResult", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "isRequest", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "historyData", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "historyTag", []);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "historyVisible", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "resultVisible", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "resultTag", false);

    return _this;
  }

  Object(createClass["a" /* default */])(AxSearch, [{
    key: "dataWatch",
    value: function dataWatch() {
      this.dataGet = this.searchData;
    } //
    // private set  dataGet(val:string){
    //  this.searchData =val;
    //  }
    // 国际化

  }, {
    key: "selectTag",
    value: function selectTag() {}
  }, {
    key: "closeTag",
    value: function closeTag() {} //
    // @Emit()
    // private modelChange(value: string) {
    //   return value;
    // }
    // 当前对象本身Ref

  }, {
    key: "placeholderStr",
    get:
    /**
     * placeholder的显示
     * @returns {string}
     */
    function get() {
      return this.placeholder === undefined ? ax_com_core_["UILang"].t('search.placeholder') : this.placeholder;
    } // // 输入框变量 getter
    // private get value(): any {
    //   return this.data;
    // }
    //
    // // 输入框变量 setter
    // private set value(val: any) {
    //   this.$emit('change', val);
    // }
    // 清空结果历史记录弹框标识
    // private tagVisible?: boolean = false;
    // 清空历史记录弹框标识
    // private hisVisible?: boolean = false;
    // 是否请求过并在次显示搜索结果

  }, {
    key: "setValue",
    value: // 分类显示
    // private isSort?: boolean = true;
    // private get getResultData() {
    //   if (this.resultData) {
    //     // 设置请求标识
    //     this.isRequest = true;
    //     // 关闭历史框
    //     this.historyVisible = false;
    //   }
    //   return this.resultData;
    // }

    /**
     * ???
     */
    function setValue() {} // 搜索方法

  }, {
    key: "clickSearch",
    value: function clickSearch() {
      // 去除空格
      // const term = (this.data + '').replace(/\s+/g, '');
      // 发布事件
      this.$emit('search', (this.dataGet + '').trim());
    } // 展示历史框

  }, {
    key: "on",
    value: function on() {
      if (!this.resultTag) {
        if (this.isOnceResult) {
          this.resultVisible = true;
          this.resultTag = false;
        } else {
          // 获取需要显示的历史记录

          /* list([this.$store.getters.language])
            .then(res => {
              // 判断是否请求成功
              if (res.code !== 1) return;
              this.historyData = res.data.searchHiss;
              this.historyTag = res.data.searchResults;
            })
            .catch(res => {
            }); */
          // 历史记录显示
          this.resultVisible ? this.historyVisible = false : this.historyVisible = true; // 点击事件侦听

          document.addEventListener('click', this.off);
        }
      }

      if (this.resultTag) {
        this.resultVisible = true;
        this.resultTag = false;
      }
    } // 关闭历史框

  }, {
    key: "off",
    value: function off(e) {
      // 判断是否存在
      if (!this.refSelf) return; // 判断是否是搜索模块

      if (!this.refSelf.contains(e.target)) {
        // 判断是否是再次显示
        if (!this.isRequest && this.resultVisible && this.isOnceResult && this.resultData && this.resultData.length > 1) {
          this.resultTag = true;
        } // 关闭面板


        this.historyVisible = false;
        this.resultVisible = false; // 判断是否已经请求

        if (this.isRequest && this.resultData && this.resultData.length > 1) {
          this.resultTag = true;
        }
      }
    }
    /**
     * 修改时的处理
     * @param event
     */

  }, {
    key: "handleChange",
    value: function handleChange(val) {
      this.$emit('change', val);
    }
    /**
     * 获取焦点处理
     * @param event
     */

  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      this.$emit('focus', event);
    }
    /**
     * 失去焦点处理
     * @param event
     */

  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      this.$emit('blur', event);
    }
    /**
     * 获取焦点方法
     */

  }, {
    key: "focus",
    value: function focus() {
      // 调用组件的获取焦点方法
      this.$refs.axInput.focus();
      this.$refs.axInput.select(); // 返回当前对象

      return this;
    }
  }]);

  return AxSearch;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Model"])('change', {
  type: String,
  default: ''
})], searchvue_type_script_lang_ts_AxSearch.prototype, "searchData", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Watch"])('Watch')], searchvue_type_script_lang_ts_AxSearch.prototype, "dataWatch", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Ref"])('ax-search')], searchvue_type_script_lang_ts_AxSearch.prototype, "refSelf", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], searchvue_type_script_lang_ts_AxSearch.prototype, "resultData", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], searchvue_type_script_lang_ts_AxSearch.prototype, "history", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], searchvue_type_script_lang_ts_AxSearch.prototype, "placeholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true
})], searchvue_type_script_lang_ts_AxSearch.prototype, "clearable", void 0);

searchvue_type_script_lang_ts_AxSearch = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  // model: {
  //   // 设置 v-model 对应的数据及方法
  //   prop: 'data',
  //   event: 'change',
  // },
  components: {
    AxInput: ax_input_default.a
  }
})], searchvue_type_script_lang_ts_AxSearch);
/* harmony default export */ var searchvue_type_script_lang_ts_ = (searchvue_type_script_lang_ts_AxSearch);
// CONCATENATED MODULE: ./packages/ax-search/src/search.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_searchvue_type_script_lang_ts_ = (searchvue_type_script_lang_ts_); 
// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./packages/ax-search/src/search.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_searchvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ax-search/src/search.vue"
/* harmony default export */ var search = (component.exports);
// CONCATENATED MODULE: ./packages/ax-search/index.ts



Object(install["a" /* addInstall */])(search.name, search);
/* harmony default export */ var ax_search = __webpack_exports__["default"] = (search);

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

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-input");

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

/***/ 84:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.trim.js");

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


/***/ })

/******/ });