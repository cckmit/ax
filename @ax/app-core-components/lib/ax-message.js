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
/******/ 	return __webpack_require__(__webpack_require__.s = 118);
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

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ax_message_AxMessage; });

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(1);

// EXTERNAL MODULE: C:/Work/Pro/NN/@ax/app-workspace-support/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(6);

// EXTERNAL MODULE: external "element-ui/lib/notification"
var notification_ = __webpack_require__(71);
var notification_default = /*#__PURE__*/__webpack_require__.n(notification_);

// EXTERNAL MODULE: external "element-ui/lib/message"
var message_ = __webpack_require__(72);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "element-ui/lib/loading"
var loading_ = __webpack_require__(29);
var loading_default = /*#__PURE__*/__webpack_require__.n(loading_);

// EXTERNAL MODULE: external "element-ui/lib/message-box"
var message_box_ = __webpack_require__(73);
var message_box_default = /*#__PURE__*/__webpack_require__.n(message_box_);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string.js"
var es_object_to_string_js_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/es.array.join.js"
var es_array_join_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/es.array.map.js"
var es_array_map_js_ = __webpack_require__(23);

// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(13);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-com-core"
var ax_com_core_ = __webpack_require__(4);
var ax_com_core_default = /*#__PURE__*/__webpack_require__.n(ax_com_core_);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: ./packages/ax-message/src/message.ts













var MessageButtonType = ax_com_core_default.a.MessageButtonType;
var MessageStyle = ax_com_core_default.a.MessageStyle;
var getAxLang = ax_com_core_default.a.getAxLang;
/* -------------------------------------- 信息对话框 -------------------------------------- */

/**
 * 显示弹出确认窗口处理
 * @param {string} message 显示信息
 * @param {number} [buttons] 显示的按钮（可选，默认: MessageButtonType.OK，多个按钮使用或运算符设置）
 * @param {number} [style] 信息类型（可选，默认: MessageStyle.TIPS）
 * @param options [IAlertOptions] 确认窗口选项（可选）
 * @returns {Promise<number>} 返回点击的按钮类型（对应: MessageButtonType.XXXX）
 */

function showAlert(message) {
  var buttons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MessageButtonType.OK;
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MessageStyle.TIPS;
  var options = arguments.length > 3 ? arguments[3] : undefined;
  // 返回异步处理对象
  return new Promise(function (resolve, reject) {
    // 获取语言对象
    var lang = getAxLang();
    var drags; // 附加参数

    var title = getTitle(options ? options.title : undefined, style);
    var asHTML = options ? options.asHTML || options.asHTML === undefined : true;
    var showClose = options ? options.showClose || options.showClose === undefined : true;
    var iconClass = options ? options.iconClass : undefined; // 显示提示框

    message_box_default.a.alert(message, {
      title: title,
      dangerouslyUseHTMLString: asHTML,
      type: getIconType(style),
      customClass: 'ax_alert',
      iconClass: iconClass,
      showClose: showClose || (buttons & ax_com_core_default.a.MessageButtonType.CLOSE) === ax_com_core_default.a.MessageButtonType.CLOSE,
      showConfirmButton: (buttons & ax_com_core_default.a.MessageButtonType.OK) === ax_com_core_default.a.MessageButtonType.OK || (buttons & ax_com_core_default.a.MessageButtonType.YES) === ax_com_core_default.a.MessageButtonType.YES,
      confirmButtonText: (buttons & ax_com_core_default.a.MessageButtonType.YES) === ax_com_core_default.a.MessageButtonType.YES ? lang.text('msg.button.yes') : lang.text('msg.button.ok'),
      showCancelButton: (buttons & ax_com_core_default.a.MessageButtonType.CANCEL) === ax_com_core_default.a.MessageButtonType.CANCEL || (buttons & ax_com_core_default.a.MessageButtonType.NO) === ax_com_core_default.a.MessageButtonType.NO,
      cancelButtonText: (buttons & ax_com_core_default.a.MessageButtonType.NO) === ax_com_core_default.a.MessageButtonType.NO ? lang.text('msg.button.no') : lang.text('msg.button.cancel'),
      cancelButtonClass: 'ax_alert_cancel',
      callback: function callback(action, instance) {
        drags.remove(); // 返回操作类型

        resolve(getResultType(action, buttons));
      }
    }); // 为了保证MessageBox已经显示出来，否则拿不到dom


    setTimeout(function () {
      drags = new message_Drags();
    }, 0);
  });
}
/**
 * 获取标题文本
 * @param {string} [title] 当前设置的标题文本
 * @param {number} [style] 当前窗口样式
 * @returns {string} 标题文本结果
 */

function getTitle(title, style) {
  // 判断是否存在标题
  if (title) return title; // 获取语言对象

  var lang = ax_com_core_default.a.getAxLang(); // 判断样式

  switch (style) {
    case ax_com_core_default.a.MessageStyle.INFO:
      return lang.text('msg.style.info');

    case ax_com_core_default.a.MessageStyle.SUCCESS:
      return lang.text('msg.style.success');

    case ax_com_core_default.a.MessageStyle.WARNING:
      return lang.text('msg.style.warning');

    case ax_com_core_default.a.MessageStyle.ERROR:
      return lang.text('msg.style.error');

    default:
      return lang.text('msg.style.tips');
  }
}
/**
 * 获取图标类型字符串处理
 * @param {number} icon 图标类型
 * @returns {string|undefined} 类型名称
 */


function getIconType(icon) {
  // 判断按钮类型(success / info / warning / error)
  switch (icon) {
    case ax_com_core_default.a.MessageStyle.SUCCESS:
      return 'success';

    case ax_com_core_default.a.MessageStyle.INFO:
      return 'info';

    case ax_com_core_default.a.MessageStyle.WARNING:
      return 'warning';

    case ax_com_core_default.a.MessageStyle.ERROR:
      return 'error';

    default:
      return undefined;
  }
}
/**
 * 获取结果类型处理
 * @param {MessageBoxCloseAction} action 当前操作
 * @param {number} buttons 按钮类型
 * @returns {number} 结果类型
 */


function getResultType(action, buttons) {
  if (action === 'confirm') return (buttons & ax_com_core_default.a.MessageButtonType.OK) === ax_com_core_default.a.MessageButtonType.OK ? ax_com_core_default.a.MessageButtonType.OK : ax_com_core_default.a.MessageButtonType.YES;
  if (action === 'cancel') return (buttons & ax_com_core_default.a.MessageButtonType.CANCEL) === ax_com_core_default.a.MessageButtonType.CANCEL ? ax_com_core_default.a.MessageButtonType.CANCEL : ax_com_core_default.a.MessageButtonType.NO;
  return ax_com_core_default.a.MessageButtonType.CLOSE;
}
/* -------------------------------------- 加载遮罩 -------------------------------------- */

/**
 * 显示加载图标遮罩处理
 * @param target  {(Vue | HTMLElement)} [target] 需要覆盖的元素或组件（可选）
 * @param text {string} [text] 加载图标下显示的文字（可选）
 * @param iconClass {string} [iconClass] 加载图标样式类（可选）
 * @param body
 * @param lock
 * @param background
 * @returns {ICloseHandler} 关闭处理对象
 */


function showLoading(data) {
  if (!data) {
    return loading_default.a.service({});
  }

  var target = data.target,
      text = data.text,
      iconClass = data.iconClass,
      _data$body = data.body,
      body = _data$body === void 0 ? false : _data$body,
      _data$lock = data.lock,
      lock = _data$lock === void 0 ? false : _data$lock,
      background = data.background; // 获取元素对象

  var el = target && target instanceof external_vue_property_decorator_["Vue"] ? target.$el : target;
  return loading_default.a.service({
    customClass: 'ax_loading',
    spinner: iconClass,
    target: el ? el : undefined,
    fullscreen: !el,
    text: text,
    body: body,
    lock: lock,
    background: background
  });
}
/* -------------------------------------- 通知信息 -------------------------------------- */

/**
 * 显示提示信息面板
 * @param {string} text 消息文本
 * @param {number} [timeout=5000] 信息隐藏超时时间（毫秒，默认: 5000 毫秒）
 * @param {number} [style=AxComCore.MessageStyle.TIPS] 信息及图标类型（可选，默认: AxComCore.MessageStyle.TIPS）
 * @param {number} [positon=AxComCore.NotifyPosition.TOP_MIDDLE] 信息位置（可选，默认: AxComCore.NotifyPosition.TOP_MIDDLE）
 * @param {INotifyOptions} [options] 信息面板可选参数
 * @returns {ICloseHandler} 关闭处理对象
 */

function showNotify(text) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ax_com_core_default.a.MessageStyle.TIPS;
  var positon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ax_com_core_default.a.NotifyPosition.TOP_MIDDLE;
  var options = arguments.length > 4 ? arguments[4] : undefined;
  // 附加参数
  var title = getTitle(options ? options.title : undefined, style);
  var asHTML = options ? options.asHTML || options.asHTML === undefined : true;
  var showClose = options ? options.showClose || options.showClose === undefined : true;
  var offset = options ? options.offset || 0 : 0;
  var iconClass = options ? options.iconClass : undefined; // 判断类型

  if (positon === ax_com_core_default.a.NotifyPosition.TOP_MIDDLE) {
    // 顶部消息
    return message_default()({
      message: text,
      customClass: 'ax_notify',
      type: getIconType(style),
      dangerouslyUseHTMLString: asHTML,
      showClose: showClose,
      iconClass: iconClass,
      duration: timeout
    });
  } else {
    // 其它位置信息，分析位置
    var pos;

    switch (positon) {
      case ax_com_core_default.a.NotifyPosition.TOP_RIGHT:
        pos = 'top-right';
        break;

      case ax_com_core_default.a.NotifyPosition.TOP_LEFT:
        pos = 'top-left';
        break;

      case ax_com_core_default.a.NotifyPosition.BOTTOM_RIGHT:
        pos = 'bottom-right';
        break;

      case ax_com_core_default.a.NotifyPosition.BOTTOM_LEFT:
        pos = 'bottom-left';
        break;

      default:
        pos = 'top-right';
        break;
    } // 返回提示信息对象


    return notification_default()({
      title: title,
      message: text,
      customClass: 'ax_notify',
      iconClass: iconClass,
      type: getIconType(style),
      dangerouslyUseHTMLString: asHTML,
      duration: timeout,
      position: pos,
      showClose: showClose,
      offset: offset
    });
  }
}
/**
 * 将数据拼接成字符串显示.如果是大于两条,只显示两条
 * @param nameList
 */

function getValueText(nameList) {
  // 需要的是通过 ids 知道对应数据的 name
  // const nameList = this.table.getAttrByIds(this.tableSelectedIds, 'name');
  var valueText = ''; // 如果多于两个,就只显示两个

  if (nameList.length > 2) {
    nameList.length = 2;
  }

  return valueText = nameList.map(function (item) {
    return "\"".concat(item, "\"");
  }).join('、');
}

var message_Drags = /*#__PURE__*/function () {
  // 释放移动端模式标识
  // 鼠标开始移动位置
  function Drags() {
    Object(classCallCheck["a" /* default */])(this, Drags);

    Object(defineProperty["a" /* default */])(this, "dialogHeaderEl", void 0);

    Object(defineProperty["a" /* default */])(this, "dialogEl", void 0);

    Object(defineProperty["a" /* default */])(this, "isDragingTitle", void 0);

    Object(defineProperty["a" /* default */])(this, "isTouch", void 0);

    Object(defineProperty["a" /* default */])(this, "deltaX", void 0);

    Object(defineProperty["a" /* default */])(this, "deltaY", void 0);

    this.dialogHeaderEl = document.querySelector('.el-message-box__header');
    this.dialogEl = this.dialogHeaderEl ? this.dialogHeaderEl.parentElement ? this.dialogHeaderEl.parentElement : null : null;
    this.isDragingTitle = false;
    this.isTouch = false;
    this.deltaX = 0;
    this.deltaY = 0;
    this.init();

    if (!this.dialogHeaderEl && !this.dialogEl) {
      return;
    }
  }

  Object(createClass["a" /* default */])(Drags, [{
    key: "init",
    value: function init() {
      if (this.dialogEl && this.dialogHeaderEl) {
        this.dialogEl.style.left = 0 + 'px';
        this.dialogEl.style.top = 0 + 'px';
        app_core_framework_["AxDomUtils"].addDomEventListener(this.dialogHeaderEl, ['onmousedown', 'touchstart'], this.onMouseDown);
      }
    } // 对话框头部拖动事件

  }, {
    key: "onMouseDown",
    value: function onMouseDown(evt) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var self = this;
      var e = app_core_framework_["AxDomUtils"].getDomEventTarget(evt);
      if (!e || !e.tagName) return true;
      var tg = e.tagName.toUpperCase();
      if (tg === 'BUTTON' || e.parentElement && e.parentElement.tagName.toUpperCase() === 'BUTTON') return true;
      this.isDragingTitle = true;
      this.isTouch = evt.type === 'touchstart';
      var ev = this.isTouch ? evt.touches.item(0) : evt; // 获取弹框头部

      var dragDom = document.querySelector('.el-message-box'); // 获取对话框元素

      var dialogHeaderEl = dragDom.querySelector('.el-message-box__header');
      var pos = app_core_framework_["AxDomUtils"].getDomPosition(dialogHeaderEl); // 获取组件中间相对位置

      var wsize = app_core_framework_["AxDomUtils"].getWindowSize(); //  鼠标到头部的距离

      this.deltaX = ev.clientX - pos.left + (wsize.width - dragDom.offsetWidth) / 2;
      this.deltaY = ev.clientY - pos.top + (wsize.height - dragDom.offsetHeight) / 2; // 判断释放移动端事件

      if (this.isTouch) {
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'touchmove', onMouseMove);
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'touchend', onMouseUp);
      } else {
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'onmousemove', onMouseMove);
        app_core_framework_["AxDomUtils"].addDomEventListener(document, 'onmouseup', onMouseUp);
      }

      function onMouseMove(evt1) {
        // 获取弹框头部
        var dragDom = document.querySelector('.el-message-box');
        if (!self.isDragingTitle) return true;
        var left;
        var top;
        var ev1 = self.isTouch ? evt1.touches.item(0) : evt1;
        left = ev1.clientX - self.deltaX;
        top = ev1.clientY - self.deltaY; // 修正超出范围的数据

        var wsize = app_core_framework_["AxDomUtils"].getWindowSize();
        var fixL = (wsize.width - dragDom.offsetWidth) / 2;
        var fixT = (wsize.height - dragDom.offsetHeight) / 2;
        var minL = 40 - dragDom.offsetWidth - fixL;
        var maxL = wsize.width - 30 - fixL;
        var minT = -fixT;
        var maxT = wsize.height - 30 - fixT;
        left = left < minL ? minL : left > maxL ? maxL : left;
        top = top < minT ? minT : top > maxT ? maxT : top; // 设置对话框位置

        dragDom.style.left = left + 'px';
        dragDom.style.top = top + 'px';
        return app_core_framework_["AxDomUtils"].cancelDomEvent(evt1);
      }

      function onMouseUp() {
        if (!self.isDragingTitle) return true;
        self.isDragingTitle = false;

        if (self.isTouch) {
          app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'touchmove', onMouseMove);
          app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'touchend', onMouseUp);
        } else {
          app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'onmousemove', onMouseMove);
          app_core_framework_["AxDomUtils"].removeDomEventListener(document, 'onmouseup', onMouseUp);
        }

        return true;
      }

      return true;
    }
  }, {
    key: "remove",
    value: function remove() {
      return this.dialogHeaderEl ? app_core_framework_["AxDomUtils"].removeDomEventListener(this.dialogHeaderEl, ['onmousedown', 'touchstart'], this.onMouseDown) : false;
    }
  }]);

  return Drags;
}();
// CONCATENATED MODULE: ./packages/ax-message/index.ts




var ax_message_AxMessage = function AxMessage() {
  Object(classCallCheck["a" /* default */])(this, AxMessage);
};

Object(defineProperty["a" /* default */])(ax_message_AxMessage, "alert", showAlert);

Object(defineProperty["a" /* default */])(ax_message_AxMessage, "loading", showLoading);

Object(defineProperty["a" /* default */])(ax_message_AxMessage, "notify", showNotify);



/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-framework");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map.js");

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/loading");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-com-core");

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.join.js");

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

/***/ 71:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/notification");

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/message");

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/message-box");

/***/ })

/******/ });