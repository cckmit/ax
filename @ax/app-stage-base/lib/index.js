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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-framework");

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.values.js");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(16);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ".doc_container[data-v-08102f1e]{position:relative;box-sizing:border-box;width:100%;border-radius:4px;transition:all 0.2s;box-shadow:0 0.4rem 0.8rem -0.12rem rgba(0,32,128,0.1),0 0 0 0.01rem #f0f2f7;background-color:#ffffff;text-align:left;margin:0 0 1.8rem}.doc_container_demo[data-v-08102f1e]{box-sizing:border-box;padding:1.8rem 2.2rem;color:#333333;border-bottom:0.01rem solid #ebedf0;font-size:0.8rem}.doc_container_desc[data-v-08102f1e]{position:relative;box-sizing:border-box;width:100%;min-height:2.7rem;padding:0.6rem 3rem 0.6rem 1.2rem;font-size:0.8rem;transition:background-color 0.4s;line-height:1.8}.doc_container_desc code[data-v-08102f1e]{background:#e6effb;border-radius:1.8rem;color:#5e6d82;padding:0.12rem 0.5rem}.doc_container_icon-code[data-v-08102f1e]{position:absolute;right:1rem;bottom:0.8rem;width:1.1rem;height:1.1rem;line-height:1.1rem;text-align:center;cursor:pointer}.doc_container_icon-code>img[data-v-08102f1e]{width:1.1rem;height:1.1rem}.doc_container_code[data-v-08102f1e]{box-sizing:border-box;border-top:0.01rem solid #ebedf0}.doc_container_code[data-v-08102f1e] code{background:#f9f9f9;font-family:Consolas, Menlo, Courier, monospace;border:none;display:block;font-size:0.8rem;padding:1rem 2rem;line-height:1.5}.doc_container_code[data-v-08102f1e] .hljs{padding:0;margin:0}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header_dropdown[data-v-57f8d16a]{display:none;position:absolute;width:150px;background:white;box-shadow:0 0 3px 3px rgba(165,159,159,0.22);border-radius:3px}.header_dropdown>ul[data-v-57f8d16a]{padding:0;margin:5px 0}.header_dropdown>ul li[data-v-57f8d16a]{height:35px;line-height:35px;cursor:pointer;list-style:none;padding-left:20px;font-size:14px}.header_dropdown>ul li[data-v-57f8d16a]:hover{background:#e7f3fd}.stage_header[data-v-57f8d16a]{position:fixed;left:0;top:0;z-index:10;width:100%;height:65px;line-height:65px;background-color:#fff;box-sizing:border-box;transition:all 0.3s ease;box-shadow:0 0 20px 0 rgba(0,0,0,0.08);display:flex;justify-content:space-between}.stage_header_right[data-v-57f8d16a]{display:flex;align-items:center}.stage_header_right .root_font[data-v-57f8d16a]{width:50px;height:30px;line-height:30px;border:1px solid #999999;border-radius:3px;font-size:14px;text-indent:5px}.stage_header_right .root_font[data-v-57f8d16a]:focus{outline:none}.stage_header_right>*[data-v-57f8d16a]{margin-right:20px}.stage_header_logo[data-v-57f8d16a]{float:left;padding-left:25px;overflow:hidden;cursor:pointer}.stage_header_logo>img[data-v-57f8d16a]{height:32px;vertical-align:middle;border-style:none}.stage_header_title[data-v-57f8d16a]{height:65px;line-height:65px;font-size:25px;display:inline-block;padding-left:12px;font-weight:700}.stage_header_link[data-v-57f8d16a]{font-size:16px;color:#2f4ae4;cursor:pointer}.theme_switch[data-v-57f8d16a]{position:relative}.theme_switch:hover .header_dropdown[data-v-57f8d16a]{display:block}.theme_switch .header_dropdown[data-v-57f8d16a]{left:-20px}.lang_switch[data-v-57f8d16a]{position:relative}.lang_switch:hover .header_dropdown[data-v-57f8d16a]{display:block}.lang_switch .header_dropdown[data-v-57f8d16a]{left:-20px}.user_info[data-v-57f8d16a]{position:relative}.user_info:hover .header_dropdown[data-v-57f8d16a]{display:block}.user_info .header_dropdown[data-v-57f8d16a]{width:100px;right:0}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stage_content[data-v-0200691c]{height:calc(100% - 65px);overflow:auto;margin-top:65px;position:relative}.sidebar[data-v-0200691c]{position:fixed;top:65px;left:0;bottom:0;overflow-y:auto;width:15rem;font-size:1rem;padding:2rem 0;color:#3f536e;background:#ffffff;border-right:0.01rem solid #ececec;box-sizing:content-box}.sidebar_title[data-v-0200691c]{font-size:1.2rem;color:#333333;line-height:2.8rem;height:2.8rem;margin:0;padding:0.4rem 1.8rem;text-decoration:none;display:block;position:relative;transition:0.15s ease-out;font-weight:700}.sidebar_link[data-v-0200691c]{font-size:1rem;color:#333333;line-height:2.8rem;height:2.8rem;margin:0;padding:0.4rem 0.5rem 0.4rem 1.8rem;text-decoration:none;display:block;position:relative;transition:0.15s ease-out;font-weight:500}.sidebar_link[data-v-0200691c]:hover{color:#41a259}.content[data-v-0200691c]{margin:1rem;padding:1rem;background:white;border-radius:0.5rem;box-shadow:0 0 20px 0 rgba(0,0,0,0.08)}.content_page[data-v-0200691c]{padding-left:15rem}.content_view[data-v-0200691c]{padding:1rem}.content_resizable[data-v-0200691c]{padding:0;position:absolute;left:0;right:0;top:0;bottom:0;background:transparent;border:1px dashed #808080;box-shadow:none;border-radius:0}.resize_bar[data-v-0200691c]{position:absolute}.resize_bar[data-v-0200691c]:hover{background:rgba(184,187,187,0.5)}.resize_top[data-v-0200691c]{top:-1rem;left:0;right:0;height:1rem;cursor:n-resize}.resize_right[data-v-0200691c]{top:0;right:-1rem;bottom:0;width:1rem;cursor:e-resize}.resize_bottom[data-v-0200691c]{left:0;right:0;bottom:-1rem;height:1rem;cursor:n-resize}.resize_left[data-v-0200691c]{top:0;left:-1rem;bottom:0;width:1rem;cursor:e-resize}.resize_top_left[data-v-0200691c]{top:-1rem;left:-1rem;width:1rem;height:1rem;cursor:nw-resize}.resize_top_right[data-v-0200691c]{top:-1rem;right:-1rem;width:1rem;height:1rem;cursor:ne-resize}.resize_bottom_left[data-v-0200691c]{left:-1rem;bottom:-1rem;width:1rem;height:1rem;cursor:sw-resize}.resize_bottom_right[data-v-0200691c]{right:-1rem;bottom:-1rem;width:1rem;height:1rem;cursor:se-resize}.router-link-exact-active[data-v-0200691c]{color:#41a259 !important;background-color:#eeffde !important;border-right:0.3rem solid #41a259 !important}.operate_btns[data-v-0200691c]{position:absolute;right:0;top:-1rem}.operate_btns>i[data-v-0200691c]{font-size:1rem;margin-left:0.3rem;cursor:pointer;color:#999999;transition:0.3s}.operate_btns>i[data-v-0200691c]:hover{color:#555}.stage_content_full_screen .content[data-v-0200691c]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:100;background:#edeff2;padding:0;margin:0}.stage_content_full_screen .operate_btns[data-v-0200691c]{top:0}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map.js");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor.js");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-language");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEwMjRweCIgaGVpZ2h0PSIxMDI0cHgiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjEgKDQ0NDYzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jb2RlLW9wZW48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i5bCP56uZIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjc3OTczNDE0MiI+CiAgICAgICAgPGcgaWQ9ImNvZGUtb3BlbiIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDE4LjY0NDk1LDUzMS4yOTc2MzcgQzEwMjcuMjc5NTIsNTEyLjY4NzQwMSAxMDIzLjI0NjE4LDQ4OS44Nzg3OSAxMDA3LjIwMzI4LDQ3NS40MzM2OTQgTDgwMi4wOTUzMDQsMjkwLjc1MzY0NyBDNzgyLjM5NDc4MiwyNzMuMDE1MjE3IDc1Mi4wNDQ1MTQsMjc0LjYwNTgwNyA3MzQuMzA2MDgzLDI5NC4zMDYzMjkgQzcxNi41Njc2NTMsMzE0LjAwNjg1MiA3MTguMTU4MjQzLDM0NC4zNTcxMiA3MzcuODU4NzY2LDM2Mi4wOTU1NSBMOTA0LjEzODQxNyw1MTEuODE0NDIgTDczNi44NTg3NjYsNjYyLjQzMzY5NCBDNzE3LjE1ODI0Myw2ODAuMTcyMTI1IDcxNS41Njc2NTMsNzEwLjUyMjM5MiA3MzMuMzA2MDgzLDczMC4yMjI5MTUgQzc1MS4wNDQ1MTQsNzQ5LjkyMzQzOCA3ODEuMzk0NzgyLDc1MS41MTQwMjggODAxLjA5NTMwNCw3MzMuNzc1NTk4IEwxMDA2LjIwMzI4LDU0OS4wOTU1NSBDMTAxMS44NDU1Miw1NDQuMDE1MjUxIDEwMTYuMDAyMjksNTM3LjkwMDQ2IDEwMTguNjQ0OTUsNTMxLjI5NzY0MyBaIE0xMTkuOTQ3LDUxMS4zOTAyMzEgTDI4Ni4yMjY2NSwzNjEuNjcxMzYxIEMzMDUuOTI3MTczLDM0My45MzI5MzEgMzA3LjUxNzc2MywzMTMuNTgyNjYzIDI4OS43NzkzMzMsMjkzLjg4MjE0IEMyNzIuMDQwOTAzLDI3NC4xODE2MTggMjQxLjY5MDYzNSwyNzIuNTkxMDI3IDIyMS45OTAxMTIsMjkwLjMyOTQ1OCBMMTYuODgyMTQwMiw0NzUuMDA5NTA1IEMwLjgzOTIzNjIwMiw0ODkuNDU0NjAxIC0zLjE5NDEwMTk4LDUxMi4yNjMyMTIgNS40NDA0NjY0NSw1MzAuODczNDQ4IEM4LjA4MzEyNTc5LDUzNy40NzYyNzEgMTIuMjM5ODk1OSw1NDMuNTkxMDYxIDE3Ljg4MjE0MDIsNTQ4LjY3MTM2MSBMMjIyLjk5MDExMiw3MzMuMzUxNDA4IEMyNDIuNjkwNjM1LDc1MS4wODk4MzkgMjczLjA0MDkwMyw3NDkuNDk5MjQ4IDI5MC43NzkzMzMsNzI5Ljc5ODcyNiBDMzA4LjUxNzc2Myw3MTAuMDk4MjAzIDMwNi45MjcxNzMsNjc5Ljc0NzkzNSAyODcuMjI2NjUsNjYyLjAwOTUwNSBMMTE5Ljk0Nyw1MTEuMzkwMjMxIFogTTY0OS40OTIwOTgsMTM0LjI0MzU2NiBDNjc0LjQwMzAzNywxNDMuMzEwNDA3IDY4Ny4yNDcyMTcsMTcwLjg1NDg0IDY3OC4xODAzNzcsMTk1Ljc2NTc3OSBMNDM2LjAzMDExNSw4NjEuMDY4MTU1IEM0MjYuOTYzMjc1LDg4NS45NzkwOTQgMzk5LjQxODg0Miw4OTguODIzMjc0IDM3NC41MDc5MDIsODg5Ljc1NjQzNCBDMzQ5LjU5Njk2Myw4ODAuNjg5NTkzIDMzNi43NTI3ODMsODUzLjE0NTE2IDM0NS44MTk2MjMsODI4LjIzNDIyMSBMNTg3Ljk2OTg4NSwxNjIuOTMxODQ1IEw1ODcuOTY5ODg1LDE2Mi45MzE4NDUgQzU5Ny4wMzY3MjUsMTM4LjAyMDkwNiA2MjQuNTgxMTU4LDEyNS4xNzY3MjYgNjQ5LjQ5MjA5OCwxMzQuMjQzNTY2IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEwMjRweCIgaGVpZ2h0PSIxMDI0cHgiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjEgKDQ0NDYzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jb2RlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IuWwj+ermSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC43Nzk3MzQxNDIiPgogICAgICAgIDxnIGlkPSJjb2RlIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEwMTguNjQ0OTUsNTMxLjI5NzYzNyBDMTAyNy4yNzk1Miw1MTIuNjg3NDAxIDEwMjMuMjQ2MTgsNDg5Ljg3ODc5IDEwMDcuMjAzMjgsNDc1LjQzMzY5NCBMODAyLjA5NTMwNCwyOTAuNzUzNjQ3IEw4MDIuMDk1MzA0LDI5MC43NTM2NDcgQzc4Mi4zOTQ3ODIsMjczLjAxNTIxNyA3NTIuMDQ0NTE0LDI3NC42MDU4MDcgNzM0LjMwNjA4MywyOTQuMzA2MzI5IEw3MzQuMzA2MDgzLDI5NC4zMDYzMjkgTDczNC4zMDYwODMsMjk0LjMwNjMyOSBDNzE2LjU2NzY1MywzMTQuMDA2ODUyIDcxOC4xNTgyNDMsMzQ0LjM1NzEyIDczNy44NTg3NjYsMzYyLjA5NTU1IEw5MDQuMTM4NDE3LDUxMS44MTQ0MiBMNzM2Ljg1ODc2Niw2NjIuNDMzNjk0IEM3MTcuMTU4MjQzLDY4MC4xNzIxMjUgNzE1LjU2NzY1Myw3MTAuNTIyMzkyIDczMy4zMDYwODMsNzMwLjIyMjkxNSBDNzUxLjA0NDUxNCw3NDkuOTIzNDM4IDc4MS4zOTQ3ODIsNzUxLjUxNDAyOCA4MDEuMDk1MzA0LDczMy43NzU1OTggTDEwMDYuMjAzMjgsNTQ5LjA5NTU1IEMxMDExLjg0NTUyLDU0NC4wMTUyNTEgMTAxNi4wMDIyOSw1MzcuOTAwNDYgMTAxOC42NDQ5NSw1MzEuMjk3NjQzIFogTTExOS45NDcsNTExLjM5MDIzMSBMMjg2LjIyNjY1LDM2MS42NzEzNjEgQzMwNS45MjcxNzMsMzQzLjkzMjkzMSAzMDcuNTE3NzYzLDMxMy41ODI2NjMgMjg5Ljc3OTMzMywyOTMuODgyMTQgTDI4OS43NzkzMzMsMjkzLjg4MjE0IEwyODkuNzc5MzMzLDI5My44ODIxNCBDMjcyLjA0MDkwMywyNzQuMTgxNjE4IDI0MS42OTA2MzUsMjcyLjU5MTAyNyAyMjEuOTkwMTEyLDI5MC4zMjk0NTggTDIyMS45OTAxMTIsMjkwLjMyOTQ1OCBMMTYuODgyMTQwMiw0NzUuMDA5NTA1IEMwLjgzOTIzNjIwMiw0ODkuNDU0NjAxIC0zLjE5NDEwMTk4LDUxMi4yNjMyMTIgNS40NDA0NjY0NSw1MzAuODczNDQ4IEM4LjA4MzEyNTc5LDUzNy40NzYyNzEgMTIuMjM5ODk1OSw1NDMuNTkxMDYxIDE3Ljg4MjE0MDIsNTQ4LjY3MTM2MSBMMjIyLjk5MDExMiw3MzMuMzUxNDA4IEMyNDIuNjkwNjM1LDc1MS4wODk4MzkgMjczLjA0MDkwMyw3NDkuNDk5MjQ4IDI5MC43NzkzMzMsNzI5Ljc5ODcyNiBDMzA4LjUxNzc2Myw3MTAuMDk4MjAzIDMwNi45MjcxNzMsNjc5Ljc0NzkzNSAyODcuMjI2NjUsNjYyLjAwOTUwNSBMMTE5Ljk0Nyw1MTEuMzkwMjMxIFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*\n\nColorbrewer theme\nOriginal: https://github.com/mbostock/colorbrewer-theme (c) Mike Bostock <mike@ocks.org>\nPorted by Fabrício Tavares de Oliveira\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #fff;\n}\n\n.hljs,\n.hljs-subst {\n  color: #000;\n}\n\n.hljs-string,\n.hljs-meta,\n.hljs-symbol,\n.hljs-template-tag,\n.hljs-template-variable,\n.hljs-addition {\n  color: #756bb1;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #636363;\n}\n\n.hljs-number,\n.hljs-regexp,\n.hljs-literal,\n.hljs-bullet,\n.hljs-link {\n  color: #31a354;\n}\n\n.hljs-deletion,\n.hljs-variable {\n  color: #88f;\n}\n\n\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-title,\n.hljs-section,\n.hljs-built_in,\n.hljs-doctag,\n.hljs-type,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-strong {\n  color: #3182bd;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-attribute {\n  color: #e6550d;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name.js");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.includes.js");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.includes.js");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each.js");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AxDocContainer", function() { return /* reexport */ doc_container; });
__webpack_require__.d(__webpack_exports__, "AxStageHeader", function() { return /* reexport */ stage_header; });
__webpack_require__.d(__webpack_exports__, "AxStageContent", function() { return /* reexport */ stage_content; });
__webpack_require__.d(__webpack_exports__, "AxStageBase", function() { return /* reexport */ modules_core_module; });

// NAMESPACE OBJECT: ./modules/core-module/export.ts
var export_namespaceObject = {};
__webpack_require__.r(export_namespaceObject);
__webpack_require__.d(export_namespaceObject, "Core", function() { return core_Core; });
__webpack_require__.d(export_namespaceObject, "EDemoEnum", function() { return EDemoEnum; });
__webpack_require__.d(export_namespaceObject, "APP_ID", function() { return APP_ID; });
__webpack_require__.d(export_namespaceObject, "ThemeMode", function() { return ThemeMode; });
__webpack_require__.d(export_namespaceObject, "createRouteMeta", function() { return createRouteMeta; });
__webpack_require__.d(export_namespaceObject, "setThemeMode", function() { return setThemeMode; });

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/doc-container/src/index.vue?vue&type=template&id=08102f1e&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "doc_container" }, [
    _c("div", { staticClass: "doc_container_demo" }, [_vm._t("source")], 2),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "doc_container_desc" },
      [
        _vm._t("desc"),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "doc_container_icon-code",
            on: {
              click: function($event) {
                _vm.showCode = !_vm.showCode
              }
            }
          },
          [
            _vm.showCode
              ? _c("img", {
                  attrs: {
                    alt: "code",
                    src: __webpack_require__(14)
                  }
                })
              : _c("img", {
                  attrs: {
                    alt: "code",
                    src: __webpack_require__(15)
                  }
                })
          ]
        )
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showCode,
            expression: "showCode"
          }
        ],
        staticClass: "doc_container_code"
      },
      [_vm._t("code")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./modules/doc-container/src/index.vue?vue&type=template&id=08102f1e&scoped=true&

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
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
var typeof_ = __webpack_require__(12);
var typeof_default = /*#__PURE__*/__webpack_require__.n(typeof_);

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_default()(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
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
// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
// EXTERNAL MODULE: external "core-js/modules/es.array.concat.js"
var es_array_concat_js_ = __webpack_require__(5);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(1);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/babel-loader/lib!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/ts-loader??ref--1-1!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/doc-container/src/index.vue?vue&type=script&lang=ts&









var srcvue_type_script_lang_ts_DocContainer = /*#__PURE__*/function (_Vue) {
  _inherits(DocContainer, _Vue);

  var _super = _createSuper(DocContainer);

  function DocContainer() {
    var _this;

    _classCallCheck(this, DocContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "showCode", false);

    return _this;
  }

  return DocContainer;
}(external_vue_property_decorator_["Vue"]);

srcvue_type_script_lang_ts_DocContainer = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({})], srcvue_type_script_lang_ts_DocContainer);
/* harmony default export */ var srcvue_type_script_lang_ts_ = (srcvue_type_script_lang_ts_DocContainer);
// CONCATENATED MODULE: ./modules/doc-container/src/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var doc_container_srcvue_type_script_lang_ts_ = (srcvue_type_script_lang_ts_); 
// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/css-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/sass-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/doc-container/src/index.vue?vue&type=style&index=0&id=08102f1e&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_08102f1e_lang_scss_scoped_true_ = __webpack_require__(7);
var srcvue_type_style_index_0_id_08102f1e_lang_scss_scoped_true_default = /*#__PURE__*/__webpack_require__.n(srcvue_type_style_index_0_id_08102f1e_lang_scss_scoped_true_);

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/style-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/css-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/sass-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/doc-container/src/index.vue?vue&type=style&index=0&id=08102f1e&lang=scss&scoped=true&

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(srcvue_type_style_index_0_id_08102f1e_lang_scss_scoped_true_default.a, options);



/* harmony default export */ var doc_container_srcvue_type_style_index_0_id_08102f1e_lang_scss_scoped_true_ = (srcvue_type_style_index_0_id_08102f1e_lang_scss_scoped_true_default.a.locals || {});
// CONCATENATED MODULE: ./modules/doc-container/src/index.vue?vue&type=style&index=0&id=08102f1e&lang=scss&scoped=true&

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./modules/doc-container/src/index.vue






/* normalize component */

var component = normalizeComponent(
  doc_container_srcvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "08102f1e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "modules/doc-container/src/index.vue"
/* harmony default export */ var src = (component.exports);
// CONCATENATED MODULE: ./modules/doc-container/index.ts

/* harmony default export */ var doc_container = (src);
// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/stage-header/src/index.vue?vue&type=template&id=57f8d16a&scoped=true&
var srcvue_type_template_id_57f8d16a_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "stage_header" }, [
    _c("div", { staticClass: "stage_header_left" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "stage_header_title" }, [
        _vm._v(_vm._s(_vm.title))
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "stage_header_right" },
      [
        _c(
          "a",
          {
            staticClass: "stage_header_link",
            on: { click: _vm.switchThemeMode }
          },
          [
            _vm.themeMode === _vm.themeModeList.LIGHT
              ? [_vm._v("🌞")]
              : _vm._e(),
            _vm._v(" "),
            _vm.themeMode === _vm.themeModeList.DARK ? [_vm._v("🌚")] : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "stage_header_link",
            attrs: { target: "_blank", href: "" + _vm.registry + _vm.name }
          },
          [_vm._v("\n      " + _vm._s(_vm.version) + "\n    ")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "theme_switch" }, [
          _c("a", { staticClass: "stage_header_link" }, [_vm._v("主题")]),
          _vm._v(" "),
          _c("div", { staticClass: "header_dropdown" }, [
            _c(
              "ul",
              _vm._l(_vm.themeOptions, function(theme, index) {
                return _c(
                  "li",
                  {
                    key: index,
                    on: {
                      click: function($event) {
                        return _vm.onThemeChange(theme.key)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n            " + _vm._s(theme.text) + "\n          "
                    )
                  ]
                )
              }),
              0
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "lang_switch" }, [
          _c("a", { staticClass: "stage_header_link" }, [_vm._v("国际化")]),
          _vm._v(" "),
          _c("div", { staticClass: "header_dropdown" }, [
            _c(
              "ul",
              _vm._l(_vm.langOptions, function(lang, index) {
                return _c(
                  "li",
                  {
                    key: index,
                    on: {
                      click: function($event) {
                        return _vm.onLangChange(lang.key)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n            " + _vm._s(lang.text) + "\n          "
                    )
                  ]
                )
              }),
              0
            )
          ])
        ]),
        _vm._v(" "),
        !_vm.showSlider
          ? _c(
              "a",
              {
                staticClass: "stage_header_link",
                on: {
                  click: function($event) {
                    _vm.showSlider = true
                  }
                }
              },
              [_vm._v("\n      基准\n    ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.showSlider
          ? _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.rootFontSize,
                  expression: "rootFontSize"
                }
              ],
              staticClass: "root_font",
              attrs: { type: "number" },
              domProps: { value: _vm.rootFontSize },
              on: {
                change: _vm.rootFontChange,
                blur: function($event) {
                  _vm.showSlider = false
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.rootFontSize = $event.target.value
                }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.panels, function(panel, index) {
          return _c(
            "a",
            {
              key: index,
              staticClass: "stage_header_link",
              on: {
                click: function($event) {
                  return _vm.switchPanel(panel)
                }
              }
            },
            [_vm._v("\n      " + _vm._s(panel.text) + "\n    ")]
          )
        }),
        _vm._v(" "),
        _vm.showLogin
          ? _c("div", { staticClass: "user_info" }, [
              !_vm.userInfo.isLogin
                ? _c(
                    "a",
                    {
                      staticClass: "stage_header_link",
                      on: { click: _vm.onLogin }
                    },
                    [_vm._v("\n        登录\n      ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.userInfo.isLogin
                ? _c("a", { staticClass: "stage_header_link" }, [
                    _vm._v(
                      "\n        " + _vm._s(_vm.userInfo.name) + "\n      "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.userInfo.isLogin
                ? _c("div", { staticClass: "header_dropdown" }, [
                    _c("ul", [
                      _c("li", { on: { click: _vm.onLogout } }, [
                        _vm._v("登出")
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          : _vm._e()
      ],
      2
    )
  ])
}
var srcvue_type_template_id_57f8d16a_scoped_true_staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "stage_header_logo" }, [
      _c("img", {
        attrs: { src: __webpack_require__(17) }
      })
    ])
  }
]
srcvue_type_template_id_57f8d16a_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./modules/stage-header/src/index.vue?vue&type=template&id=57f8d16a&scoped=true&

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createClass.js
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
// EXTERNAL MODULE: external "core-js/modules/es.array.map.js"
var es_array_map_js_ = __webpack_require__(10);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(18);

// EXTERNAL MODULE: external "core-js/modules/es.array.includes.js"
var es_array_includes_js_ = __webpack_require__(19);

// EXTERNAL MODULE: external "core-js/modules/es.string.includes.js"
var es_string_includes_js_ = __webpack_require__(20);

// EXTERNAL MODULE: external "core-js/modules/es.object.values.js"
var es_object_values_js_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor.js"
var es_number_constructor_js_ = __webpack_require__(11);

// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@ax/app-core-language"
var app_core_language_ = __webpack_require__(13);
var app_core_language_default = /*#__PURE__*/__webpack_require__.n(app_core_language_);

// CONCATENATED MODULE: ./modules/core-module/src/core/index.ts




var SystemCenter = app_core_framework_["AxCore"].SystemCenter; // 模块核心

var core_module = SystemCenter.getModule('stage-base'); // 下达事件处理 FIXME: demo演示，开发时记得删掉

core_module.dispatcher.on('received', function (evt) {
  // eslint-disable-next-line no-console
  console.log('收到', evt);
}); // 核心模块，用来处理应用模块和主系统之前的消息处理

var core_Core = /*#__PURE__*/function () {
  function Core() {
    _classCallCheck(this, Core);
  }
  /**
   * 获取模块
   * @returns {SystemModule}
   */


  _createClass(Core, null, [{
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

_defineProperty(core_Core, "emit", {
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
var web_dom_collections_for_each_js_ = __webpack_require__(21);

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

/* harmony default export */ var modules_core_module = (export_namespaceObject);
// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/babel-loader/lib!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/ts-loader??ref--1-1!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/stage-header/src/index.vue?vue&type=script&lang=ts&



















var srcvue_type_script_lang_ts_StageHeader = /*#__PURE__*/function (_AxVueBase) {
  _inherits(StageHeader, _AxVueBase);

  var _super = _createSuper(StageHeader);

  function StageHeader() {
    var _this;

    _classCallCheck(this, StageHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "version", void 0);

    _defineProperty(_assertThisInitialized(_this), "name", void 0);

    _defineProperty(_assertThisInitialized(_this), "registry", void 0);

    _defineProperty(_assertThisInitialized(_this), "rootFont", void 0);

    _defineProperty(_assertThisInitialized(_this), "title", void 0);

    _defineProperty(_assertThisInitialized(_this), "showLogin", void 0);

    _defineProperty(_assertThisInitialized(_this), "panelCur", void 0);

    _defineProperty(_assertThisInitialized(_this), "panels", void 0);

    _defineProperty(_assertThisInitialized(_this), "showSlider", false);

    _defineProperty(_assertThisInitialized(_this), "langCurrent", app_core_framework_["AxVuexApp"].lang);

    _defineProperty(_assertThisInitialized(_this), "langCurrentText", '');

    _defineProperty(_assertThisInitialized(_this), "rootFontSize", 14);

    _defineProperty(_assertThisInitialized(_this), "userInfo", app_core_framework_["AxVuexUser"]);

    _defineProperty(_assertThisInitialized(_this), "langOptions", app_core_framework_["AxVuexApp"].localeList.map(function (locale) {
      return {
        key: locale.code,
        text: locale.name
      };
    }));

    _defineProperty(_assertThisInitialized(_this), "themeOptions", app_core_framework_["AxVuexApp"].themeList.map(function (theme) {
      return {
        key: theme.code,
        text: theme.name
      };
    }));

    _defineProperty(_assertThisInitialized(_this), "themeMode", ThemeMode.LIGHT);

    _defineProperty(_assertThisInitialized(_this), "themeModeList", ThemeMode);

    return _this;
  }

  _createClass(StageHeader, [{
    key: "onLogin",
    value: function onLogin() {
      return true;
    }
  }, {
    key: "onLogout",
    value: function onLogout() {
      return true;
    } // 显示基准滑块

  }, {
    key: "onThemeChange",
    value:
    /**
     * 修改当前主题
     */
    function onThemeChange(theme) {
      var _this2 = this;

      app_core_framework_["AxVuexApp"].setTheme(theme).then(function () {
        _this2.$router.go(0);
      });
    }
    /**
     * 修改国际化语言
     */

  }, {
    key: "onLangChange",
    value: function onLangChange(lang) {
      var _this3 = this;

      app_core_framework_["AxVuexApp"].setLang(lang).then(function () {
        _this3.$router.go(0);
      });
    }
    /**
     * 基准改变
     */

  }, {
    key: "rootFontChange",
    value: function rootFontChange() {
      document.getElementsByTagName('html')[0].style.fontSize = "".concat(this.rootFontSize, "px");
    }
    /**
     * 切换面板
     * @param panel
     */

  }, {
    key: "switchPanel",
    value: function switchPanel(panel) {
      this.panelCur = panel.text;
      this.$emit('switch-panel', panel);

      if (this.$router) {
        this.$router.push(panel.path);
      }
    }
    /**
     * 切换主题模式
     */

  }, {
    key: "switchThemeMode",
    value: function switchThemeMode() {
      if (this.themeMode === ThemeMode.LIGHT) {
        this.themeMode = ThemeMode.DARK;
      } else if (this.themeMode === ThemeMode.DARK) {
        this.themeMode = ThemeMode.LIGHT;
      } else {
        this.themeMode = ThemeMode.LIGHT;
      }

      app_core_framework_["AxStorageUtils"].localSave('stage', 'themeMode', this.themeMode);
      modules_core_module.setThemeMode(this.themeMode);
    }
    /**
     * 初始化主题模式
     */

  }, {
    key: "initThemeMode",
    value: function initThemeMode() {
      // 从存储中读取主题模式
      var themeMode = app_core_framework_["AxStorageUtils"].localRead('stage', 'themeMode', ThemeMode.LIGHT);

      if (!Object.values(ThemeMode).includes(themeMode)) {
        themeMode = ThemeMode.LIGHT;
      }

      this.themeMode = themeMode;
      modules_core_module.setThemeMode(this.themeMode);
    }
  }, {
    key: "created",
    value: function created() {
      var _this$rootFont;

      // 默认国际化显示
      this.langCurrentText = app_core_language_default.a.t(this.langCurrent); // 默认根节点字体大小显示

      this.rootFontSize = (_this$rootFont = this.rootFont) !== null && _this$rootFont !== void 0 ? _this$rootFont : 14;
      this.initThemeMode();
    }
  }]);

  return StageHeader;
}(app_core_framework_["AxVueBase"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '0.0.1',
  type: String
})], srcvue_type_script_lang_ts_StageHeader.prototype, "version", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '',
  type: String
})], srcvue_type_script_lang_ts_StageHeader.prototype, "name", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 'http://192.168.2.202:4873/-/web/detail/',
  type: String
})], srcvue_type_script_lang_ts_StageHeader.prototype, "registry", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: 14,
  type: Number
})], srcvue_type_script_lang_ts_StageHeader.prototype, "rootFont", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: '项目名称',
  type: String
})], srcvue_type_script_lang_ts_StageHeader.prototype, "title", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], srcvue_type_script_lang_ts_StageHeader.prototype, "showLogin", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["PropSync"])('panelCurrent', {
  default: '文档',
  type: String
})], srcvue_type_script_lang_ts_StageHeader.prototype, "panelCur", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [{
      path: '/test',
      text: '测试'
    }, {
      path: '/',
      text: '文档'
    }];
  },
  type: Array
})], srcvue_type_script_lang_ts_StageHeader.prototype, "panels", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('login')], srcvue_type_script_lang_ts_StageHeader.prototype, "onLogin", null);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Emit"])('logout')], srcvue_type_script_lang_ts_StageHeader.prototype, "onLogout", null);

srcvue_type_script_lang_ts_StageHeader = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {}
})], srcvue_type_script_lang_ts_StageHeader);
/* harmony default export */ var stage_header_srcvue_type_script_lang_ts_ = (srcvue_type_script_lang_ts_StageHeader);
// CONCATENATED MODULE: ./modules/stage-header/src/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var modules_stage_header_srcvue_type_script_lang_ts_ = (stage_header_srcvue_type_script_lang_ts_); 
// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/css-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/sass-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/stage-header/src/index.vue?vue&type=style&index=0&id=57f8d16a&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_57f8d16a_lang_scss_scoped_true_ = __webpack_require__(8);
var srcvue_type_style_index_0_id_57f8d16a_lang_scss_scoped_true_default = /*#__PURE__*/__webpack_require__.n(srcvue_type_style_index_0_id_57f8d16a_lang_scss_scoped_true_);

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/style-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/css-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/sass-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/stage-header/src/index.vue?vue&type=style&index=0&id=57f8d16a&lang=scss&scoped=true&

            

var srcvue_type_style_index_0_id_57f8d16a_lang_scss_scoped_true_options = {};

srcvue_type_style_index_0_id_57f8d16a_lang_scss_scoped_true_options.insert = "head";
srcvue_type_style_index_0_id_57f8d16a_lang_scss_scoped_true_options.singleton = false;

var srcvue_type_style_index_0_id_57f8d16a_lang_scss_scoped_true_update = injectStylesIntoStyleTag_default()(srcvue_type_style_index_0_id_57f8d16a_lang_scss_scoped_true_default.a, srcvue_type_style_index_0_id_57f8d16a_lang_scss_scoped_true_options);



/* harmony default export */ var stage_header_srcvue_type_style_index_0_id_57f8d16a_lang_scss_scoped_true_ = (srcvue_type_style_index_0_id_57f8d16a_lang_scss_scoped_true_default.a.locals || {});
// CONCATENATED MODULE: ./modules/stage-header/src/index.vue?vue&type=style&index=0&id=57f8d16a&lang=scss&scoped=true&

// CONCATENATED MODULE: ./modules/stage-header/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  modules_stage_header_srcvue_type_script_lang_ts_,
  srcvue_type_template_id_57f8d16a_scoped_true_render,
  srcvue_type_template_id_57f8d16a_scoped_true_staticRenderFns,
  false,
  null,
  "57f8d16a",
  null
  
)

/* hot reload */
if (false) { var src_api; }
src_component.options.__file = "modules/stage-header/src/index.vue"
/* harmony default export */ var stage_header_src = (src_component.exports);
// CONCATENATED MODULE: ./modules/stage-header/index.ts

/* harmony default export */ var stage_header = (stage_header_src);
// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/stage-content/src/index.vue?vue&type=template&id=0200691c&scoped=true&
var srcvue_type_template_id_0200691c_scoped_true_render = function() {
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
var srcvue_type_template_id_0200691c_scoped_true_staticRenderFns = []
srcvue_type_template_id_0200691c_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./modules/stage-content/src/index.vue?vue&type=template&id=0200691c&scoped=true&

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
  _inherits(StageContent, _AxVueBase);

  var _super = _createSuper(StageContent);

  function StageContent() {
    var _this;

    _classCallCheck(this, StageContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "refContent", void 0);

    _defineProperty(_assertThisInitialized(_this), "sidebars", void 0);

    _defineProperty(_assertThisInitialized(_this), "sidebarWidth", void 0);

    _defineProperty(_assertThisInitialized(_this), "resizable", void 0);

    _defineProperty(_assertThisInitialized(_this), "fullScreen", void 0);

    _defineProperty(_assertThisInitialized(_this), "viewMode", 'normal');

    _defineProperty(_assertThisInitialized(_this), "rect", {
      x: 0,
      y: 0
    });

    _defineProperty(_assertThisInitialized(_this), "stickBtnList", Object.values(StickPos).map(function (pos) {
      return {
        pos: pos
      };
    }));

    _defineProperty(_assertThisInitialized(_this), "position", {
      top: '0',
      right: '0',
      left: '0',
      bottom: '0'
    });

    return _this;
  }

  _createClass(StageContent, [{
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
/* harmony default export */ var stage_content_srcvue_type_script_lang_ts_ = (srcvue_type_script_lang_ts_StageContent);
// CONCATENATED MODULE: ./modules/stage-content/src/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var modules_stage_content_srcvue_type_script_lang_ts_ = (stage_content_srcvue_type_script_lang_ts_); 
// EXTERNAL MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/css-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/sass-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/stage-content/src/index.vue?vue&type=style&index=0&id=0200691c&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_ = __webpack_require__(9);
var srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_default = /*#__PURE__*/__webpack_require__.n(srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_);

// CONCATENATED MODULE: C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/style-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/css-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/sass-loader/dist/cjs.js!C:/Work/PRO/WORKSPACE/app-workspace-support/node_modules/vue-loader/lib??vue-loader-options!./modules/stage-content/src/index.vue?vue&type=style&index=0&id=0200691c&lang=scss&scoped=true&

            

var srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_options = {};

srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_options.insert = "head";
srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_options.singleton = false;

var srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_update = injectStylesIntoStyleTag_default()(srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_default.a, srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_options);



/* harmony default export */ var stage_content_srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_ = (srcvue_type_style_index_0_id_0200691c_lang_scss_scoped_true_default.a.locals || {});
// CONCATENATED MODULE: ./modules/stage-content/src/index.vue?vue&type=style&index=0&id=0200691c&lang=scss&scoped=true&

// CONCATENATED MODULE: ./modules/stage-content/src/index.vue






/* normalize component */

var stage_content_src_component = normalizeComponent(
  modules_stage_content_srcvue_type_script_lang_ts_,
  srcvue_type_template_id_0200691c_scoped_true_render,
  srcvue_type_template_id_0200691c_scoped_true_staticRenderFns,
  false,
  null,
  "0200691c",
  null
  
)

/* hot reload */
if (false) { var stage_content_src_api; }
stage_content_src_component.options.__file = "modules/stage-content/src/index.vue"
/* harmony default export */ var stage_content_src = (stage_content_src_component.exports);
// CONCATENATED MODULE: ./modules/stage-content/index.ts

/* harmony default export */ var stage_content = (stage_content_src);
// CONCATENATED MODULE: ./modules/index.ts



 // 导出组件



/***/ })
/******/ ]);