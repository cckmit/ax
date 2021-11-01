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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
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

module.exports = require("@ax/app-core-framework");

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _createSuper; });

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
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
var typeof_ = __webpack_require__(8);
var typeof_default = /*#__PURE__*/__webpack_require__.n(typeof_);

// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(0);

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_default()(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}
// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createSuper.js



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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/inherits.js

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.values.js");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat.js");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map.js");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor.js");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(13);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stage_content[data-v-0200691c]{height:calc(100% - 65px);overflow:auto;margin-top:65px;position:relative}.sidebar[data-v-0200691c]{position:fixed;top:65px;left:0;bottom:0;overflow-y:auto;width:15rem;font-size:1rem;padding:2rem 0;color:#3f536e;background:#ffffff;border-right:0.01rem solid #ececec;box-sizing:content-box}.sidebar_title[data-v-0200691c]{font-size:1.2rem;color:#333333;line-height:2.8rem;height:2.8rem;margin:0;padding:0.4rem 1.8rem;text-decoration:none;display:block;position:relative;transition:0.15s ease-out;font-weight:700}.sidebar_link[data-v-0200691c]{font-size:1rem;color:#333333;line-height:2.8rem;height:2.8rem;margin:0;padding:0.4rem 0.5rem 0.4rem 1.8rem;text-decoration:none;display:block;position:relative;transition:0.15s ease-out;font-weight:500}.sidebar_link[data-v-0200691c]:hover{color:#41a259}.content[data-v-0200691c]{margin:1rem;padding:1rem;background:white;border-radius:0.5rem;box-shadow:0 0 20px 0 rgba(0,0,0,0.08)}.content_page[data-v-0200691c]{padding-left:15rem}.content_view[data-v-0200691c]{padding:1rem}.content_resizable[data-v-0200691c]{padding:0;position:absolute;left:0;right:0;top:0;bottom:0;background:transparent;border:1px dashed #808080;box-shadow:none;border-radius:0}.resize_bar[data-v-0200691c]{position:absolute}.resize_bar[data-v-0200691c]:hover{background:rgba(184,187,187,0.5)}.resize_top[data-v-0200691c]{top:-1rem;left:0;right:0;height:1rem;cursor:n-resize}.resize_right[data-v-0200691c]{top:0;right:-1rem;bottom:0;width:1rem;cursor:e-resize}.resize_bottom[data-v-0200691c]{left:0;right:0;bottom:-1rem;height:1rem;cursor:n-resize}.resize_left[data-v-0200691c]{top:0;left:-1rem;bottom:0;width:1rem;cursor:e-resize}.resize_top_left[data-v-0200691c]{top:-1rem;left:-1rem;width:1rem;height:1rem;cursor:nw-resize}.resize_top_right[data-v-0200691c]{top:-1rem;right:-1rem;width:1rem;height:1rem;cursor:ne-resize}.resize_bottom_left[data-v-0200691c]{left:-1rem;bottom:-1rem;width:1rem;height:1rem;cursor:sw-resize}.resize_bottom_right[data-v-0200691c]{right:-1rem;bottom:-1rem;width:1rem;height:1rem;cursor:se-resize}.router-link-exact-active[data-v-0200691c]{color:#41a259 !important;background-color:#eeffde !important;border-right:0.3rem solid #41a259 !important}.operate_btns[data-v-0200691c]{position:absolute;right:0;top:-1rem}.operate_btns>i[data-v-0200691c]{font-size:1rem;margin-left:0.3rem;cursor:pointer;color:#999999;transition:0.3s}.operate_btns>i[data-v-0200691c]:hover{color:#555}.stage_content_full_screen .content[data-v-0200691c]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:100;background:#edeff2;padding:0;margin:0}.stage_content_full_screen .operate_btns[data-v-0200691c]{top:0}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/stage-content/src/index.vue?vue&type=template&id=0200691c&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "stage_content", class: ["stage_content_" + _vm.viewMode] },
    [
      _c(
        "div",
        { staticClass: "sidebar", style: { width: _vm.sidebarWidth + "rem" } },
        [
          _vm._l(_vm.sidebars, function(sidebar, index) {
            return [
              _c(
                "div",
                { key: "title-" + index, staticClass: "sidebar_title" },
                [_vm._v("\n        " + _vm._s(sidebar.title) + "\n      ")]
              ),
              _vm._v(" "),
              _vm._l(sidebar.routes, function(route, second) {
                return _c(
                  "router-link",
                  {
                    key: "route-" + index + "-" + second,
                    staticClass: "sidebar_link",
                    attrs: { to: route.path }
                  },
                  [_vm._v("\n        " + _vm._s(route.meta.label) + "\n      ")]
                )
              })
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "refContent",
          staticClass: "content",
          class: { content_resizable: _vm.resizable },
          style:
            _vm.viewMode === "normal"
              ? _vm.resizable
                ? _vm.position
                : { "margin-left": _vm.sidebarWidth + 1 + "rem" }
              : {}
        },
        [
          _vm._t("default"),
          _vm._v(" "),
          _vm.resizable
            ? _vm._l(_vm.stickBtnList, function(stick, index) {
                return _c("div", {
                  key: index,
                  staticClass: "resize_bar",
                  class: ["resize_" + stick.pos],
                  on: {
                    mousedown: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.onResizeStart(stick.pos)
                    }
                  }
                })
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.resizable
            ? [
                _c("div", { staticClass: "operate_btns" }, [
                  _vm.viewMode === "normal"
                    ? _c("i", {
                        staticClass: "i_cc i_cc_zhankai1",
                        on: {
                          click: function($event) {
                            return _vm.changeView("full_screen")
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.viewMode === "full_screen"
                    ? _c("i", {
                        staticClass: "i_cc i_cc_wrong_circle",
                        on: {
                          click: function($event) {
                            return _vm.changeView("normal")
                          }
                        }
                      })
                    : _vm._e()
                ])
              ]
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./modules/stage-content/src/index.vue?vue&type=template&id=0200691c&scoped=true&

// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(6);

// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(7);

// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(0);

// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(12);

// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(11);

// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(1);

// EXTERNAL MODULE: external "core-js/modules/es.array.concat.js"
var es_array_concat_js_ = __webpack_require__(15);

// EXTERNAL MODULE: external "core-js/modules/es.array.map.js"
var es_array_map_js_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/es.object.values.js"
var es_object_values_js_ = __webpack_require__(14);

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor.js"
var es_number_constructor_js_ = __webpack_require__(17);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/babel-loader/lib!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/ts-loader??ref--1-1!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/stage-content/src/index.vue?vue&type=script&lang=ts&













var StickPos;

(function (StickPos) {
  StickPos["TOP"] = "top";
  StickPos["RIGHT"] = "right";
  StickPos["BOTTOM"] = "bottom";
  StickPos["LEFT"] = "left";
  StickPos["TOP_LEFT"] = "top_left";
  StickPos["TOP_RIGHT"] = "top_right";
  StickPos["BOTTOM_LEFT"] = "bottom_left";
  StickPos["BOTTOM_RIGHT"] = "bottom_right";
})(StickPos || (StickPos = {}));

var srcvue_type_script_lang_ts_StageContent = /*#__PURE__*/function (_AxVueBase) {
  Object(inherits["a" /* default */])(StageContent, _AxVueBase);

  var _super = Object(createSuper["a" /* default */])(StageContent);

  function StageContent() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, StageContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "refContent", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "sidebars", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "sidebarWidth", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "resizable", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "fullScreen", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "viewMode", 'normal');

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "rect", {
      x: 0,
      y: 0
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "stickBtnList", Object.values(StickPos).map(function (pos) {
      return {
        pos: pos
      };
    }));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "position", {
      top: '0',
      right: '0',
      left: '0',
      bottom: '0'
    });

    return _this;
  }

  Object(createClass["a" /* default */])(StageContent, [{
    key: "listener",
    value: function listener(pos) {
      var _this2 = this;

      return function (e) {
        // const refContent = this.$refs.refContent as HTMLDivElement;
        var windowRect = document.documentElement.getBoundingClientRect(); // const rect: DOMRect = refContent.getBoundingClientRect();

        var top = "".concat(e.clientY - _this2.rect.y, "px");
        var right = "".concat(windowRect.width - e.clientX, "px");
        var bottom = "".concat(windowRect.height - e.clientY, "px");
        var left = "".concat(e.clientX, "px");

        switch (pos) {
          case StickPos.TOP:
            _this2.position.top = top;
            break;

          case StickPos.RIGHT:
            _this2.position.right = right;
            break;

          case StickPos.BOTTOM:
            _this2.position.bottom = bottom;
            break;

          case StickPos.LEFT:
            _this2.position.left = left;
            break;

          case StickPos.TOP_LEFT:
            _this2.position.left = left;
            _this2.position.top = top;
            break;

          case StickPos.TOP_RIGHT:
            _this2.position.top = top;
            _this2.position.right = right;
            break;

          case StickPos.BOTTOM_LEFT:
            _this2.position.bottom = bottom;
            _this2.position.left = left;
            break;

          case StickPos.BOTTOM_RIGHT:
            _this2.position.bottom = bottom;
            _this2.position.right = right;
            break;
        }
      };
    }
  }, {
    key: "onResizeStart",
    value: function onResizeStart(pos) {
      var _this3 = this;

      var listener = function listener(e) {
        return _this3.listener(pos)(e);
      };

      document.documentElement.addEventListener('mousemove', listener);
      document.documentElement.addEventListener('mouseup', function () {
        document.documentElement.removeEventListener('mousemove', listener);
      });
    }
  }, {
    key: "changeView",
    value: function changeView(mode) {
      this.viewMode = mode;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var rect = this.refContent.getBoundingClientRect();
      this.rect.x = rect.x;
      this.rect.y = rect.y;

      if (this.sidebarWidth) {
        this.position.left = "".concat(this.sidebarWidth, "rem");
      }

      if (this.fullScreen) {
        this.viewMode = 'full_screen';
      }
    }
  }]);

  return StageContent;
}(app_core_framework_["AxVueBase"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Ref"])()], srcvue_type_script_lang_ts_StageContent.prototype, "refContent", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  },
  type: Array
})], srcvue_type_script_lang_ts_StageContent.prototype, "sidebars", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 15,
  type: Number
})], srcvue_type_script_lang_ts_StageContent.prototype, "sidebarWidth", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], srcvue_type_script_lang_ts_StageContent.prototype, "resizable", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], srcvue_type_script_lang_ts_StageContent.prototype, "fullScreen", void 0);

srcvue_type_script_lang_ts_StageContent = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {}
})], srcvue_type_script_lang_ts_StageContent);
/* harmony default export */ var srcvue_type_script_lang_ts_ = (srcvue_type_script_lang_ts_StageContent);
// CONCATENATED MODULE: ./modules/stage-content/src/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var stage_content_srcvue_type_script_lang_ts_ = (srcvue_type_script_lang_ts_); 
// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(9);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/css-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/sass-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/stage-content/src/index.vue?vue&type=style&index=0&id=0200691c&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_ = __webpack_require__(20);
var srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_default = /*#__PURE__*/__webpack_require__.n(srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_);

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/style-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/css-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/sass-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/stage-content/src/index.vue?vue&type=style&index=0&id=0200691c&lang=scss&scoped=true&

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_default.a, options);



/* harmony default export */ var stage_content_srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_ = (srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_default.a.locals || {});
// CONCATENATED MODULE: ./modules/stage-content/src/index.vue?vue&type=style&index=0&id=0200691c&lang=scss&scoped=true&

// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./modules/stage-content/src/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  stage_content_srcvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "0200691c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "modules/stage-content/src/index.vue"
/* harmony default export */ var src = (component.exports);
// CONCATENATED MODULE: ./modules/stage-content/index.ts

/* harmony default export */ var stage_content = __webpack_exports__["default"] = (src);

/***/ })
/******/ ]);