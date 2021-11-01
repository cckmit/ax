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
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
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

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.find-index.js");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("tslib");

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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AxUIComponent", function() { return /* reexport */ core_AxUIComponent; });
__webpack_require__.d(__webpack_exports__, "LayoutType", function() { return /* reexport */ LayoutType; });
__webpack_require__.d(__webpack_exports__, "InputType", function() { return /* reexport */ InputType; });
__webpack_require__.d(__webpack_exports__, "BadgeType", function() { return /* reexport */ BadgeType; });
__webpack_require__.d(__webpack_exports__, "ButtonType", function() { return /* reexport */ ButtonType; });
__webpack_require__.d(__webpack_exports__, "BoardPresetClass", function() { return /* reexport */ BoardPresetClass; });
__webpack_require__.d(__webpack_exports__, "LinkType", function() { return /* reexport */ LinkType; });
__webpack_require__.d(__webpack_exports__, "ButtonSize", function() { return /* reexport */ ButtonSize; });
__webpack_require__.d(__webpack_exports__, "DividerType", function() { return /* reexport */ DividerType; });
__webpack_require__.d(__webpack_exports__, "DividerPreset", function() { return /* reexport */ DividerPreset; });
__webpack_require__.d(__webpack_exports__, "HeaderMode", function() { return /* reexport */ HeaderMode; });
__webpack_require__.d(__webpack_exports__, "TagType", function() { return /* reexport */ TagType; });
__webpack_require__.d(__webpack_exports__, "TagSize", function() { return /* reexport */ TagSize; });
__webpack_require__.d(__webpack_exports__, "DropdownType", function() { return /* reexport */ DropdownType; });
__webpack_require__.d(__webpack_exports__, "DropdownPosition", function() { return /* reexport */ DropdownPosition; });
__webpack_require__.d(__webpack_exports__, "CheckboxType", function() { return /* reexport */ CheckboxType; });
__webpack_require__.d(__webpack_exports__, "RadioType", function() { return /* reexport */ RadioType; });
__webpack_require__.d(__webpack_exports__, "ResizeType", function() { return /* reexport */ ResizeType; });
__webpack_require__.d(__webpack_exports__, "FormValueType", function() { return /* reexport */ FormValueType; });
__webpack_require__.d(__webpack_exports__, "MoveDirType", function() { return /* reexport */ MoveDirType; });
__webpack_require__.d(__webpack_exports__, "DialogType", function() { return /* reexport */ DialogType; });
__webpack_require__.d(__webpack_exports__, "TreeEventType", function() { return /* reexport */ TreeEventType; });
__webpack_require__.d(__webpack_exports__, "MessageButtonType", function() { return /* reexport */ MessageButtonType; });
__webpack_require__.d(__webpack_exports__, "MessageStyle", function() { return /* reexport */ MessageStyle; });
__webpack_require__.d(__webpack_exports__, "NotifyPosition", function() { return /* reexport */ NotifyPosition; });
__webpack_require__.d(__webpack_exports__, "TableBoxType", function() { return /* reexport */ TableBoxType; });
__webpack_require__.d(__webpack_exports__, "AxTimeType", function() { return /* reexport */ AxTimeType; });
__webpack_require__.d(__webpack_exports__, "throttle", function() { return /* reexport */ throttle; });
__webpack_require__.d(__webpack_exports__, "debounce", function() { return /* reexport */ debounce; });
__webpack_require__.d(__webpack_exports__, "sleep", function() { return /* reexport */ sleep; });
__webpack_require__.d(__webpack_exports__, "isEllipsis", function() { return /* reexport */ isEllipsis; });
__webpack_require__.d(__webpack_exports__, "getValueByAttr", function() { return /* reexport */ getValueByAttr; });
__webpack_require__.d(__webpack_exports__, "UILang", function() { return /* reexport */ UILang; });
__webpack_require__.d(__webpack_exports__, "getAxLang", function() { return /* reexport */ getAxLang; });

// NAMESPACE OBJECT: ./packages/ax-com-core/export.ts
var export_namespaceObject = {};
__webpack_require__.r(export_namespaceObject);
__webpack_require__.d(export_namespaceObject, "AxUIComponent", function() { return core_AxUIComponent; });
__webpack_require__.d(export_namespaceObject, "LayoutType", function() { return LayoutType; });
__webpack_require__.d(export_namespaceObject, "InputType", function() { return InputType; });
__webpack_require__.d(export_namespaceObject, "BadgeType", function() { return BadgeType; });
__webpack_require__.d(export_namespaceObject, "ButtonType", function() { return ButtonType; });
__webpack_require__.d(export_namespaceObject, "BoardPresetClass", function() { return BoardPresetClass; });
__webpack_require__.d(export_namespaceObject, "LinkType", function() { return LinkType; });
__webpack_require__.d(export_namespaceObject, "ButtonSize", function() { return ButtonSize; });
__webpack_require__.d(export_namespaceObject, "DividerType", function() { return DividerType; });
__webpack_require__.d(export_namespaceObject, "DividerPreset", function() { return DividerPreset; });
__webpack_require__.d(export_namespaceObject, "HeaderMode", function() { return HeaderMode; });
__webpack_require__.d(export_namespaceObject, "TagType", function() { return TagType; });
__webpack_require__.d(export_namespaceObject, "TagSize", function() { return TagSize; });
__webpack_require__.d(export_namespaceObject, "DropdownType", function() { return DropdownType; });
__webpack_require__.d(export_namespaceObject, "DropdownPosition", function() { return DropdownPosition; });
__webpack_require__.d(export_namespaceObject, "CheckboxType", function() { return CheckboxType; });
__webpack_require__.d(export_namespaceObject, "RadioType", function() { return RadioType; });
__webpack_require__.d(export_namespaceObject, "ResizeType", function() { return ResizeType; });
__webpack_require__.d(export_namespaceObject, "FormValueType", function() { return FormValueType; });
__webpack_require__.d(export_namespaceObject, "MoveDirType", function() { return MoveDirType; });
__webpack_require__.d(export_namespaceObject, "DialogType", function() { return DialogType; });
__webpack_require__.d(export_namespaceObject, "TreeEventType", function() { return TreeEventType; });
__webpack_require__.d(export_namespaceObject, "MessageButtonType", function() { return MessageButtonType; });
__webpack_require__.d(export_namespaceObject, "MessageStyle", function() { return MessageStyle; });
__webpack_require__.d(export_namespaceObject, "NotifyPosition", function() { return NotifyPosition; });
__webpack_require__.d(export_namespaceObject, "TableBoxType", function() { return TableBoxType; });
__webpack_require__.d(export_namespaceObject, "AxTimeType", function() { return AxTimeType; });
__webpack_require__.d(export_namespaceObject, "throttle", function() { return throttle; });
__webpack_require__.d(export_namespaceObject, "debounce", function() { return debounce; });
__webpack_require__.d(export_namespaceObject, "sleep", function() { return sleep; });
__webpack_require__.d(export_namespaceObject, "isEllipsis", function() { return isEllipsis; });
__webpack_require__.d(export_namespaceObject, "getValueByAttr", function() { return getValueByAttr; });
__webpack_require__.d(export_namespaceObject, "UILang", function() { return UILang; });
__webpack_require__.d(export_namespaceObject, "getAxLang", function() { return getAxLang; });

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

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(12);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(3);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: ./packages/ax-com-core/core.ts










/**
 * AX 组件基类
 */

var core_AxUIComponent = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(AxUIComponent, _Vue);

  var _super = Object(createSuper["a" /* default */])(AxUIComponent);

  function AxUIComponent() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AxUIComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mform", undefined);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "mvalue", '');

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "validate", undefined);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "data", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "placeholder", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "clearable", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "disabled", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "name", void 0);

    return _this;
  }

  Object(createClass["a" /* default */])(AxUIComponent, [{
    key: "form",
    get:
    /**
     * 获取当前父表单对象（不存在则返回 null）
     */
    function get() {
      // 判断是否存在
      if (this.mform !== undefined) return this.mform; // 定义父级对象

      var parent = this.$parent; // 不存在，遍历获取对象

      while (parent) {
        // 判断是否是表单对象
        if (parent.$options.name === 'ax-form') {
          // 表单对象，设置数据
          this.mform = parent; // 返回表单对象

          return this.mform;
        } // 未找到，继续查找


        parent = parent.$parent;
      } // 未找到，设置表单不存在


      this.mform = null; // 返回未找到

      return null;
    }
    /**
     * 设置当前数据校验状态
     */

  }, {
    key: "validatePassed",
    get:
    /**
     * 获取当前数据校验状态
     */
    function get() {
      return this.validate;
    }
    /**
     * 对外设置或提供的模块值
     */
    ,
    set: function set(val) {
      this.validate = val;
      this.$forceUpdate();
    }
  }, {
    key: "modelValue",
    get: function get() {
      // 判断绑定的数据是否有效
      if (this.data !== undefined && this.data !== null && this.mvalue !== this.data) {
        // 已绑定数据，设置临时值为绑定值
        this.mvalue = this.data;
      } // 返回值


      return this.mvalue;
    }
    /**
     * 更新值之后通知外部绑定的值变化
     * @param value
     */
    ,
    set: function set(value) {
      // 判断是否一致
      if (this.mvalue === value) return; // 设置临时数据

      this.mvalue = value; // 通知发布数据变化

      this.$emit('change', value); // 判断是否存在表单

      if (this.name && this.name.length > 0 && this.form) {
        // 发布表单事件
        this.form.$emit('form-item-change', this.name, value);
      } // 判断是否清空了数据


      if (this.clearable !== undefined && this.clearable && (!value || value.length === 0)) {
        // 获取对象
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var self = this; // 延时设置焦点

        window.setTimeout(function () {
          self.focus();
        }, 10);
      }
    }
    /**
     * 设置表单项数据值处理
     * @param {*} value 当前表单数据值
     */

  }, {
    key: "setFormItemValue",
    value: function setFormItemValue(value) {
      // 判断是否一致
      if (this.mvalue === value) return; // 设置临时数据

      this.mvalue = value; // 通知发布数据变化

      this.$emit('change', value);
    }
    /**
     * 当前组件数据值
     */

  }]);

  return AxUIComponent;
}(external_vue_property_decorator_["Vue"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], core_AxUIComponent.prototype, "data", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], core_AxUIComponent.prototype, "placeholder", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: true
})], core_AxUIComponent.prototype, "clearable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false
})], core_AxUIComponent.prototype, "disabled", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: undefined
})], core_AxUIComponent.prototype, "name", void 0);
// CONCATENATED MODULE: ./packages/ax-com-core/interfaces/interfaces.ts

// CONCATENATED MODULE: ./packages/ax-com-core/const/enum.ts
/* ================================  数据枚举定义 =================================== */

/**
 * 布局 枚举定义
 */
var LayoutType;

(function (LayoutType) {
  /* 水平布局 */
  LayoutType["VERTICAL"] = "vertical";
  /* 垂直布局 */

  LayoutType["HORIZONTAL"] = "horizontal";
})(LayoutType || (LayoutType = {}));
/**
 * 文本输入框枚举定义
 */


var InputType;

(function (InputType) {
  InputType["TEXT"] = "text";
  InputType["PASSWORD"] = "password";
  InputType["TEXT_AREA"] = "textarea";
})(InputType || (InputType = {}));
/**
 * 标记类型
 */


var BadgeType;

(function (BadgeType) {
  BadgeType["PRIMARY"] = "primary";
  BadgeType["SUCCESS"] = "success";
  BadgeType["WARNING"] = "warning";
  BadgeType["DANGER"] = "danger";
})(BadgeType || (BadgeType = {}));
/**
 * 按钮类型
 */


var ButtonType;

(function (ButtonType) {
  ButtonType["PRIMARY"] = "primary";
  ButtonType["SUCCESS"] = "success";
  ButtonType["WARNING"] = "warning";
  ButtonType["DANGER"] = "danger";
  ButtonType["INFO"] = "info";
  ButtonType["TEXT"] = "text";
})(ButtonType || (ButtonType = {}));
/**
 * 面板预设样式类
 */


var BoardPresetClass;

(function (BoardPresetClass) {
  BoardPresetClass["TABLE_ABSOLUTE"] = "table_absolute";
})(BoardPresetClass || (BoardPresetClass = {}));
/**
 * 链接类型
 */


var LinkType;

(function (LinkType) {
  LinkType["PRIMARY"] = "primary";
  LinkType["SUCCESS"] = "success";
  LinkType["WARNING"] = "warning";
  LinkType["DANGER"] = "danger";
  LinkType["INFO"] = "info";
  LinkType["DEFAULT"] = "default";
})(LinkType || (LinkType = {}));
/**
 * 按钮大小
 */


var ButtonSize;

(function (ButtonSize) {
  ButtonSize["MAX"] = "max";
  ButtonSize["LARGE"] = "large";
  ButtonSize["NORMAL"] = "normal";
  ButtonSize["SMALL"] = "small";
  ButtonSize["MINI"] = "mini";
})(ButtonSize || (ButtonSize = {}));
/**
 * 分割线类型
 */


var DividerType;

(function (DividerType) {
  // 水平
  DividerType["HORIZONTAL"] = "horizontal"; // 垂直

  DividerType["VERTICAL"] = "vertical";
})(DividerType || (DividerType = {}));
/**
 * 分割线预设
 */


var DividerPreset;

(function (DividerPreset) {
  // 按钮
  DividerPreset["BUTTON"] = "button";
})(DividerPreset || (DividerPreset = {}));
/**
 * 顶部栏模式
 */


var HeaderMode;

(function (HeaderMode) {
  // 一级栏目
  HeaderMode["FIRST"] = "first"; // 一级栏目 带背景

  HeaderMode["FIRST_BG"] = "first_bg"; // 二级栏目

  HeaderMode["SECOND"] = "second"; // form内分隔

  HeaderMode["FORM_SPLIT"] = "form_split"; // form内标题 带背景

  HeaderMode["FORM_BG"] = "form_bg";
})(HeaderMode || (HeaderMode = {}));
/**
 * 标签类型
 */


var TagType;

(function (TagType) {
  TagType["PRIMARY"] = "primary";
  TagType["SUCCESS"] = "success";
  TagType["WARNING"] = "warning";
  TagType["DANGER"] = "danger";
  TagType["INFO"] = "info";
})(TagType || (TagType = {}));
/**
 * 标签大小
 */


var TagSize;

(function (TagSize) {
  TagSize["LARGE"] = "large";
  TagSize["NORMAL"] = "normal";
  TagSize["SMALL"] = "small";
})(TagSize || (TagSize = {}));
/**
 * 下拉框类型
 */


var DropdownType;

(function (DropdownType) {
  /**
   * 普通下拉选择框
   */
  DropdownType["NORMAL"] = "select";
  /**
   * 文本输入下拉框
   */

  DropdownType["BORDER"] = "input";
})(DropdownType || (DropdownType = {}));
/**
 * 下拉框位置
 */


var DropdownPosition;

(function (DropdownPosition) {
  // 顶部 中间
  DropdownPosition["TOP"] = "top"; // 顶部 左对齐

  DropdownPosition["TOP_START"] = "top-start"; // 顶部 右对齐

  DropdownPosition["TOP_END"] = "top-end"; // 底部 中间

  DropdownPosition["BOTTOM"] = "bottom"; // 底部 左对齐

  DropdownPosition["BOTTOM_START"] = "bottom-start"; // 底部 右对齐

  DropdownPosition["BOTTOM_END"] = "bottom-end";
})(DropdownPosition || (DropdownPosition = {}));
/**
 * 复选框类型
 */


var CheckboxType;

(function (CheckboxType) {
  /**
   * 普通复选框
   */
  CheckboxType["NORMAL"] = "normal";
  /**
   * 按钮形状复选框
   */

  CheckboxType["BUTTON"] = "button";
  /**
   * 带边框复选框
   */

  CheckboxType["BORDER"] = "border";
  /**
   * 开关样式复选框
   */

  CheckboxType["SWITCH"] = "switch";
})(CheckboxType || (CheckboxType = {}));
/**
 * 单选框类型
 */


var RadioType;

(function (RadioType) {
  RadioType["NORMAL"] = "normal";
  RadioType["BUTTON"] = "button";
  RadioType["BORDER"] = "border";
})(RadioType || (RadioType = {}));
/**
 * 用户控制组件时的缩放类型
 * @export
 * @enum {string} 缩放类型字符串
 */


var ResizeType;

(function (ResizeType) {
  ResizeType["NONE"] = "none";
  ResizeType["BOTH"] = "both";
  ResizeType["HORIZONTAL"] = "horizontal";
  ResizeType["VERTICAL"] = "vertical";
})(ResizeType || (ResizeType = {}));
/**
 * 表单数据值类型
 */


var FormValueType;

(function (FormValueType) {
  /**
   * 数组类型，设置后可以使用与方式设置数组内部的数据类型（如: FormValueType.ARRAY|FormValueType.STRING 表示字符串类型的数组）
   */
  FormValueType[FormValueType["ARRAY"] = 1] = "ARRAY";
  /**
   * 字符串数据类型
   */

  FormValueType[FormValueType["STRING"] = 2] = "STRING";
  /**
   * 整数类型
   */

  FormValueType[FormValueType["INT"] = 4] = "INT";
  /**
   * 单精度浮点数
   */

  FormValueType[FormValueType["FLOAT"] = 8] = "FLOAT";
  /**
   * 双精度数
   */

  FormValueType[FormValueType["DOUBLE"] = 16] = "DOUBLE";
  /**
   * 布尔类型
   */

  FormValueType[FormValueType["BOOLEAN"] = 32] = "BOOLEAN";
  /**
   * 日期类型
   */

  FormValueType[FormValueType["DATE"] = 64] = "DATE";
  /**
   * 密码类型
   */

  FormValueType[FormValueType["PASSWORD"] = 128] = "PASSWORD";
})(FormValueType || (FormValueType = {}));
/**
 * 移动方向的枚举
 */


var MoveDirType;

(function (MoveDirType) {
  MoveDirType["UP"] = "up";
  MoveDirType["DOWN"] = "down";
})(MoveDirType || (MoveDirType = {}));
/**
 * 弹窗类型定义
 */


var DialogType;

(function (DialogType) {
  DialogType[DialogType["CONFIRM"] = 1] = "CONFIRM";
  DialogType[DialogType["CANCEL"] = 2] = "CANCEL";
  DialogType[DialogType["CLOSE"] = 3] = "CLOSE";
})(DialogType || (DialogType = {}));
/**
 * 目录树事件类型
 */


var TreeEventType;

(function (TreeEventType) {
  /**
   * 当前选中的节点变化事件，参数: ( id: string, data: TreeMapData )
   */
  TreeEventType["CHANGE"] = "change";
  /**
   * 节点点击事件，参数: ( data: TreeMapData )
   */

  TreeEventType["NODE_CLICK"] = "node-click";
  /**
   * 显示右键菜单事件，参数: ( event: Event, data: TreeMapData )
   */

  TreeEventType["NODE_CONTEXTMENU"] = "node-contextmenu";
  /**
   * 勾选节点事件，参数: ( data: TreeMapData, checked: boolean )
   */

  TreeEventType["CHECK_CHANGE"] = "check-change";
  /**
   * 当复选框被点击的时候触发，参数: ( data: TreeMapData, checkedkeynode: ITreeCheckedKeyNode)
   */

  TreeEventType["CHECK"] = "check";
  /**
   * 展开节点事件，参数: ( data: TreeMapData )
   */

  TreeEventType["NODE_EXPAND"] = "node-expand";
  /**
   * 合上节点事件，参数: ( data: TreeMapData )
   */

  TreeEventType["NODE_COLLAPSE"] = "node-collapse";
})(TreeEventType || (TreeEventType = {}));
/**
 * 信息对话框按钮类型定义
 */


var MessageButtonType;

(function (MessageButtonType) {
  /**
   * 右上角关闭按钮
   */
  MessageButtonType[MessageButtonType["CLOSE"] = 1] = "CLOSE";
  /**
   * 确认按钮
   */

  MessageButtonType[MessageButtonType["OK"] = 2] = "OK";
  /**
   * 取消按钮
   */

  MessageButtonType[MessageButtonType["CANCEL"] = 4] = "CANCEL";
  /**
   * 是按钮
   */

  MessageButtonType[MessageButtonType["YES"] = 8] = "YES";
  /**
   * 否按钮
   */

  MessageButtonType[MessageButtonType["NO"] = 16] = "NO";
})(MessageButtonType || (MessageButtonType = {}));
/**
 * 信息样式类型定义
 */


var MessageStyle;

(function (MessageStyle) {
  /**
   * 提示（无图标）
   */
  MessageStyle[MessageStyle["TIPS"] = 0] = "TIPS";
  /**
   * 成功状态/图标
   */

  MessageStyle[MessageStyle["SUCCESS"] = 1] = "SUCCESS";
  /**
   * 信息状态/图标
   */

  MessageStyle[MessageStyle["INFO"] = 2] = "INFO";
  /**
   * 警告状态/图标
   */

  MessageStyle[MessageStyle["WARNING"] = 3] = "WARNING";
  /**
   * 错误状态/图标
   */

  MessageStyle[MessageStyle["ERROR"] = 4] = "ERROR";
})(MessageStyle || (MessageStyle = {}));
/**
 * 通知信息位置定义
 */


var NotifyPosition;

(function (NotifyPosition) {
  /**
   * 坐上角位置
   */
  NotifyPosition[NotifyPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
  /**
   * 顶部中间
   */

  NotifyPosition[NotifyPosition["TOP_MIDDLE"] = 2] = "TOP_MIDDLE";
  /**
   * 右上角位置
   */

  NotifyPosition[NotifyPosition["TOP_RIGHT"] = 3] = "TOP_RIGHT";
  /**
   * 右下角位置
   */

  NotifyPosition[NotifyPosition["BOTTOM_RIGHT"] = 4] = "BOTTOM_RIGHT";
  /**
   * 左下角位置
   */

  NotifyPosition[NotifyPosition["BOTTOM_LEFT"] = 5] = "BOTTOM_LEFT";
})(NotifyPosition || (NotifyPosition = {}));
/**
 * 表格行的可选类型
 */


var TableBoxType;

(function (TableBoxType) {
  // 不可选
  TableBoxType["NONE"] = "0"; // 单选框

  TableBoxType["RADIO"] = "1"; // 多选框

  TableBoxType["CHECKBOX"] = "2";
})(TableBoxType || (TableBoxType = {}));
/*时间选择*/


var AxTimeType;

(function (AxTimeType) {
  AxTimeType["SELECT"] = "SELECT";
  AxTimeType["PICKER"] = "PICKER";
})(AxTimeType || (AxTimeType = {}));
// EXTERNAL MODULE: external "core-js/modules/es.object.to-string.js"
var es_object_to_string_js_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/es.array.find-index.js"
var es_array_find_index_js_ = __webpack_require__(28);

// CONCATENATED MODULE: ./packages/ax-com-core/utils/function.ts



/**
 * 节流
 * @param func
 * @param wait
 * @returns {() => void}
 */
// tslint:disable-next-line:ban-types
function throttle(func, wait) {
  var timeout = null;
  var callbackArgs = null; // eslint-disable-next-line @typescript-eslint/no-this-alias

  var context = this;

  var later = function later() {
    func.apply(context, callbackArgs);
    timeout = null;
  }; // tslint:disable-next-line:only-arrow-functions


  return function () {
    if (!timeout) {
      // eslint-disable-next-line prefer-rest-params
      callbackArgs = arguments;
      timeout = setTimeout(later, wait);
    }
  };
}
/**
 * 防抖
 * @param func
 * @param wait
 * @param immediate
 * @returns {(this:any) => void}
 */
// tslint:disable-next-line:ban-types

var debounce = function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    // tslint:disable-next-line:one-variable-per-declaration
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var context = this,
        // eslint-disable-next-line prefer-rest-params
    args = arguments;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};
/**
 * 延后
 * @param time 时间毫秒
 */

var sleep = function sleep(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
};
/**
 * 判断是否溢出省略号
 * @param dom
 */

function isEllipsis(dom) {
  // 拷贝一份,用于对比
  var checkDom = dom.cloneNode();
  checkDom.style.width = dom.offsetWidth + 'px';
  checkDom.style.height = dom.offsetHeight + 'px';
  checkDom.style.overflow = 'auto';
  checkDom.style.position = 'absolute';
  checkDom.style.zIndex = '-1';
  checkDom.style.opacity = ' 0';
  checkDom.style.whiteSpace = 'nowrap';
  checkDom.innerHTML = dom.innerHTML;
  var parent = dom.parentNode;

  if (parent === null) {
    return false;
  }

  parent.appendChild(checkDom);
  var flag = checkDom.scrollWidth > checkDom.offsetWidth;
  parent.removeChild(checkDom);
  return flag;
}
/**
 * 通过任意属性,获取每一条数据源对应的值
 * @param row 当前行数据
 * @param column 全部的列数据  要传入 this.totalColumn
 * @param attr 根据这个属性那数据,默认'id'
 * @return 返回 属性(id) 的值
 */

function getValueByAttr(row, column) {
  var attr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';

  if (!row) {
    return '';
  } // 如果每一条数据是 Array 的话


  if (Array.isArray(row)) {
    // 返回的是 id 字段的 index 索引
    var index = column.findIndex(function (item) {
      return attr === item;
    });
    return row[index];
  } else {
    // 如果当前行的数据是对象,
    // 返回当前行的 id 属性的值
    return row[attr];
  }
}
// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(13);

// CONCATENATED MODULE: ./packages/ax-com-core/lang.ts

 // 当前模块国际化对象

var UILang = app_core_framework_["AxLocale"].create('AxUI');
/**
 * 获取 AX 语言对象
 */

function getAxLang() {
  return {
    text: function text(key) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      return UILang.t.apply(UILang, [key].concat(params));
    }
  };
}
// CONCATENATED MODULE: ./packages/ax-com-core/export.ts





// CONCATENATED MODULE: ./packages/ax-com-core/index.ts
 // 导出所有内容

 // 导出完整的模块内容

/* harmony default export */ var ax_com_core = __webpack_exports__["default"] = (export_namespaceObject);

/***/ })

/******/ });