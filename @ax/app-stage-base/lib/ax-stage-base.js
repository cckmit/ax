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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.values.js");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each.js");

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Core", function() { return /* reexport */ core_Core; });
__webpack_require__.d(__webpack_exports__, "EDemoEnum", function() { return /* reexport */ EDemoEnum; });
__webpack_require__.d(__webpack_exports__, "APP_ID", function() { return /* reexport */ APP_ID; });
__webpack_require__.d(__webpack_exports__, "ThemeMode", function() { return /* reexport */ ThemeMode; });
__webpack_require__.d(__webpack_exports__, "createRouteMeta", function() { return /* reexport */ createRouteMeta; });
__webpack_require__.d(__webpack_exports__, "setThemeMode", function() { return /* reexport */ setThemeMode; });

// NAMESPACE OBJECT: ./modules/core-module/export.ts
var export_namespaceObject = {};
__webpack_require__.r(export_namespaceObject);
__webpack_require__.d(export_namespaceObject, "Core", function() { return core_Core; });
__webpack_require__.d(export_namespaceObject, "EDemoEnum", function() { return EDemoEnum; });
__webpack_require__.d(export_namespaceObject, "APP_ID", function() { return APP_ID; });
__webpack_require__.d(export_namespaceObject, "ThemeMode", function() { return ThemeMode; });
__webpack_require__.d(export_namespaceObject, "createRouteMeta", function() { return createRouteMeta; });
__webpack_require__.d(export_namespaceObject, "setThemeMode", function() { return setThemeMode; });

// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(6);

// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(7);

// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(1);

// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(4);

// CONCATENATED MODULE: ./modules/core-module/src/core/index.ts




var SystemCenter = app_core_framework_["AxCore"].SystemCenter; // 模块核心

var core_module = SystemCenter.getModule('stage-base'); // 下达事件处理 FIXME: demo演示，开发时记得删掉

core_module.dispatcher.on('received', function (evt) {
  // eslint-disable-next-line no-console
  console.log('收到', evt);
}); // 核心模块，用来处理应用模块和主系统之前的消息处理

var core_Core = /*#__PURE__*/function () {
  function Core() {
    Object(classCallCheck["a" /* default */])(this, Core);
  }
  /**
   * 获取模块
   * @returns {SystemModule}
   */


  Object(createClass["a" /* default */])(Core, null, [{
    key: "module",
    get: function get() {
      return core_module;
    }
    /**
     * 上报消息
     * @type {{redirect(): void}}
     */

  }]);

  return Core;
}();

Object(defineProperty["a" /* default */])(core_Core, "emit", {
  redirect: function redirect() {
    core_module.emit(new app_core_framework_["AxEvent"](core_module, 'redirect', 'login'));
  }
});


// CONCATENATED MODULE: ./modules/core-module/src/const/demo.ts
var EDemoEnum;

(function (EDemoEnum) {
  EDemoEnum[EDemoEnum["ACTIVE"] = 0] = "ACTIVE";
  EDemoEnum[EDemoEnum["DISABLE"] = 1] = "DISABLE";
})(EDemoEnum || (EDemoEnum = {}));

var APP_ID = 'stage-base';
// CONCATENATED MODULE: ./modules/core-module/src/const/theme.ts
// 主题模式
var ThemeMode;

(function (ThemeMode) {
  ThemeMode["LIGHT"] = "stage_light";
  ThemeMode["DARK"] = "stage_dark";
})(ThemeMode || (ThemeMode = {}));
// CONCATENATED MODULE: ./modules/core-module/src/const/index.ts


// CONCATENATED MODULE: ./modules/core-module/src/interfaces/index.ts

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each.js"
var web_dom_collections_for_each_js_ = __webpack_require__(22);

// EXTERNAL MODULE: external "core-js/modules/es.object.values.js"
var es_object_values_js_ = __webpack_require__(14);

// CONCATENATED MODULE: ./modules/core-module/src/utils/index.ts



/**
 * 创建元数据方法
 * @param module
 * @param label
 * @returns {{module: string | undefined}} 返回元数据对象
 */

function createRouteMeta(_ref) {
  var module = _ref.module,
      label = _ref.label;
  return {
    module: module,
    label: label
  };
}
/**
 * 设置展示
 * @param theme
 */

function setThemeMode() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ThemeMode.LIGHT;
  Object.values(ThemeMode).forEach(function (mode) {
    if (document.body.classList.contains(mode)) {
      document.body.classList.remove(mode);
    }
  });
  document.body.classList.add(theme);
}
// CONCATENATED MODULE: ./modules/core-module/export.ts
 // 导出核心模块

 // 导出常量定义

 // 导出类型定义

 // 导出工具类


// CONCATENATED MODULE: ./modules/core-module/index.ts

 // 为了生成的申明文件统一归在一个namespace里面

/* harmony default export */ var modules_core_module = __webpack_exports__["default"] = (export_namespaceObject);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-framework");

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 7:
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

/***/ })

/******/ });