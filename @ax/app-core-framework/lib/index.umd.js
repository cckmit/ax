(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios'), require('ts-md5'), require('js-cookie'), require('vue-property-decorator'), require('vuex-module-decorators'), require('vuex'), require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'axios', 'ts-md5', 'js-cookie', 'vue-property-decorator', 'vuex-module-decorators', 'vuex', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.AxFramework = {}, global.axios, global.tsMd5, global.Cookies, global.vuePropertyDecorator, global.vuexModuleDecorators, global.Vuex, global.Vue));
}(this, (function (exports, axios, tsMd5, Cookies, vuePropertyDecorator, vuexModuleDecorators, Vuex, Vue) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
  var Cookies__default = /*#__PURE__*/_interopDefaultLegacy(Cookies);
  var Vuex__default = /*#__PURE__*/_interopDefaultLegacy(Vuex);
  var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

  // Http配置
  var HttpConfig = /** @class */ (function () {
      function HttpConfig(options) {
          var _a;
          // 配置host
          this.host = options.host;
          // 获取全局window对象
          var win = window;
          // 海阔去全局配置
          var host = (_a = win.GLOBAL_CONFIG) === null || _a === void 0 ? void 0 : _a.host;
          // 如果有全局的配置的情况下使用全局配置
          if (host) {
              Object.assign(this.host, host);
          }
      }
      return HttpConfig;
  }());

  var index$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HttpConfig: HttpConfig
  });

  // websocket事件类型
  var EWSType;
  (function (EWSType) {
      // 连接关闭
      EWSType["CLOSE"] = "close";
      // 连接错误
      EWSType["ERROR"] = "error";
      // 无效的信息
      EWSType["INVALID"] = "invalid";
      // 连接打开
      EWSType["OPEN"] = "open";
  })(EWSType || (EWSType = {}));

  // sessionStorage存储用到的key
  var ESessionKey;
  (function (ESessionKey) {
      // 进程数据 FIXME: 不知道是啥，先存着
      ESessionKey["SESSION"] = "session";
      // 用户状态信息
      ESessionKey["USER_STATE"] = "session";
  })(ESessionKey || (ESessionKey = {}));
  // localStorage存储用到的key
  var ELocalKey;
  (function (ELocalKey) {
      // 最近登录的用户
      ELocalKey["LAST_LOGIN"] = "last-login";
      // 配置
      ELocalKey["SETTING"] = "settings";
  })(ELocalKey || (ELocalKey = {}));

  /**
   * 管理员枚举定义类
   */
  var EAdminConstType;
  (function (EAdminConstType) {
      /**
       * 平台最高管理员用户序号
       */
      EAdminConstType["ADMIN_ID"] = "00000000000000000000000000000000";
      /**
       * 管理员角色序号
       */
      EAdminConstType["ROLE_ID"] = "00000000000000000000000000000000";
      /**
       * 平台最高机构管理员序号
       */
      EAdminConstType["ORGANIZATION_ID"] = "00000000000000000000000000000000";
  })(EAdminConstType || (EAdminConstType = {}));

  /**
   * api post 请求返回 模块响应状态码
   */
  var ResultCode;
  (function (ResultCode) {
      /**
       * 默认为未知状态
       */
      ResultCode[ResultCode["UNKNOWN"] = 0] = "UNKNOWN";
      /**
       * 成功状态码
       */
      ResultCode[ResultCode["OK"] = 1] = "OK";
      /**
       * 一般失败状态码
       */
      ResultCode[ResultCode["FAILED"] = 2] = "FAILED";
      /**
       * 内部异常状态码
       */
      ResultCode[ResultCode["EXCEPTION"] = 3] = "EXCEPTION";
      /**
       * 响应超时
       */
      ResultCode[ResultCode["TIMEOUT"] = 4] = "TIMEOUT";
      /**
       * 数据无效
       */
      ResultCode[ResultCode["INVALID"] = 5] = "INVALID";
      /**
       * 运行时错误
       */
      ResultCode[ResultCode["RUNTIME"] = 6] = "RUNTIME";
      /**
       * 编程错误
       */
      ResultCode[ResultCode["PROGRAMMING"] = 7] = "PROGRAMMING";
  })(ResultCode || (ResultCode = {}));
  /**
   * 前端定义的错误码
   */
  var ErrorCode;
  (function (ErrorCode) {
      // 需要重定向
      ErrorCode[ErrorCode["REDIRECT"] = 0] = "REDIRECT";
      // 空的返回内容
      ErrorCode[ErrorCode["EMPTY"] = 1] = "EMPTY";
  })(ErrorCode || (ErrorCode = {}));
  // http代码
  var HttpCode;
  (function (HttpCode) {
      // 无效的登录凭证
      HttpCode[HttpCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
      // 登录有问题
      HttpCode[HttpCode["LOGIN_ERROR"] = 498] = "LOGIN_ERROR";
      // 登录失败
      HttpCode[HttpCode["LOGIN_FAILED"] = 499] = "LOGIN_FAILED";
  })(HttpCode || (HttpCode = {}));

  var index$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get EWSType () { return EWSType; },
    get ESessionKey () { return ESessionKey; },
    get ELocalKey () { return ELocalKey; },
    get EAdminConstType () { return EAdminConstType; },
    get ResultCode () { return ResultCode; },
    get ErrorCode () { return ErrorCode; },
    get HttpCode () { return HttpCode; }
  });

  // 字符串工具类
  var StringUtils = /** @class */ (function () {
      function StringUtils() {
      }
      /**
       * 格式化字符串<br/> 如果将 arguments 数组传递给此方法，则数组中包含的参数会转换成字符串，然后在返回前在字符串中按顺序替代占位符 "{0}"、"{1}" 等。
       * @param {string} str 字符串，可包含：{0}..{n} 占位符
       * @param {any[]} [params] 需要替换{0}..{n}的参数数组
       * @returns {string} 格式化后的字符串
       */
      StringUtils.formatString = function (str, params) {
          // 判断是否有效
          if (str === undefined || str === null || str.length === 0)
              return '';
          // 判断是否存在参数
          if (params && params.length > 0) {
              // 遍历格式化数据
              for (var index = 0; index < params.length; index++) {
                  // 获取一个数据
                  var param = params[index];
                  // 转换为字符串
                  var p = param instanceof Object || param instanceof Array
                      ? JSON.stringify(param)
                      : param + '';
                  // 替换数据
                  str = str.replace(new RegExp('\\{' + index + '\\}', 'img'), p);
              }
          }
          // 返回数据
          return str;
      };
      /**
       * 生成多个重复的字符串
       * @param str 需要重复的字符串
       * @param count 数量
       * @param separator 分隔符（默认空字符串：""）
       * @returns string 字符串
       */
      StringUtils.duplicate = function (str, count, separator) {
          if (separator === void 0) { separator = ''; }
          if (!separator)
              separator = '';
          var strs = [];
          for (var i = 0; i < count; i++) {
              strs[i] = str;
          }
          return strs.join(separator).toString();
      };
      /**
       * 数据排序处理（比较两个数据大小，返回排序顺序）；
       * 负值，如果所传递的第一个参数比第二个参数小；
       * 零，如果两个参数相等；
       * 正值，如果第一个参数比第二个参数大；
       * @param v1 第一个数值
       * @param v2 第二个数值
       * @returns number 比较结果：-1/0/1
       */
      StringUtils.compareSort = function (v1, v2) {
          if (typeof v1 === 'number' && typeof v2 === 'number')
              return v1 === v2 ? 0 : v1 < v2 ? -1 : 1;
          if (!v1) {
              return !v2 ? 0 : -1;
          }
          else if (!v2) {
              return !v1 ? 0 : 1;
          }
          else {
              if (!v1) {
                  v1 = '';
              }
              else {
                  v1 += '';
              }
              if (!v2) {
                  v2 = '';
              }
              else {
                  v2 += '';
              }
              if (v1 === v2)
                  return 0;
              v1 = v1.replace(/(\d+)/gm, function (n1) {
                  return StringUtils.duplicate('0', 10 - n1.length) + n1;
              });
              v2 = v2.replace(/(\d+)/gm, function (n2) {
                  return StringUtils.duplicate('0', 10 - n2.length) + n2;
              });
              return v1.localeCompare(v2);
          }
      };
      /**
       * 获取字符串字节长度
       * @param {string} str 字符串对象
       * @returns {number} 字节长度
       */
      StringUtils.getBytesLength = function (str) {
          // 判断是否有效
          if (!str)
              return 0;
          var l = 0;
          // 计算长度
          for (var i = 0, c = str.length; i < c; i++) {
              l += str.charCodeAt(i) > 255 ? 2 : 1;
          }
          // 返回数据
          return l;
      };
      /**
       * 把字符串转换为正则表达式字符串
       * @param regStr 正则表达式字符串
       */
      StringUtils.fixRegExpString = function (regStr) {
          // 判断是否有效
          if (!regStr || regStr.length === 0)
              return regStr;
          // 修正正则表达式关键字
          return regStr.replace(/([\$\(\)\[\]\{\}\*\+\-\?\\\^\|\.\\])/gm, function ($0) {
              return '\\' + $0;
          });
      };
      /**
       * 对象转url参数
       * @param obj
       * @returns {void[]}
       * @param prefix
       */
      StringUtils.queryStringify = function (obj, prefix) {
          if (prefix === void 0) { prefix = false; }
          return ((prefix ? '?' : '') +
              Object.keys(obj)
                  .map(function (key) {
                  return key + "=" + (obj[key] += '')
                      .replace(/%/g, '%25')
                      .replace(/\+/g, '%2B')
                      .replace(/ /g, '%20')
                      .replace(/\//g, '%2F')
                      .replace(/\?/g, '%3F')
                      .replace(/\?/g, '%3F')
                      .replace(/&/g, '%26')
                      .replace(/\=/g, '%3D')
                      .replace(/#/g, '%23');
              })
                  .join('&'));
      };
      return StringUtils;
  }());

  /**
   * 事件对象基类
   */
  var IEvent = /** @class */ (function () {
      /**
       * 事件对象构造函数
       * @param {*} target 事件来源对象
       * @param {string} type 事件类型字符串
       * @param {*} data 事件数据
       * @param {boolean} [cancelable] 是否允许取消事件（事件被取消后需在发布事件的对象内停止执行默认动作，可选，默认为 false 表示不允许取消）
       */
      function IEvent(target, type, data, cancelable) {
          if (cancelable === void 0) { cancelable = false; }
          /**
           * 是否允许阻止事件发起者的默认动作
           */
          this.cancelable = false;
          /**
           * 是否停止继续执行标识
           */
          this.stopped = false;
          /**
           * 是否阻止了发布者执行默认事件动作
           */
          this.prevented = false;
          this.mtarget = target;
          this.mtype = type;
          this.data = data;
          this.cancelable = cancelable;
      }
      Object.defineProperty(IEvent.prototype, "target", {
          /**
           * 事件来源对象
           */
          get: function () {
              return this.mtarget;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IEvent.prototype, "type", {
          /**
           * 当前事件类型字符串
           */
          get: function () {
              return this.mtype;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IEvent.prototype, "isStopped", {
          /**
           * 是否停止继续执行标识
           */
          get: function () {
              return this.stopped;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IEvent.prototype, "isPrevented", {
          /**
           * 是否阻止了发布者执行默认事件动作
           */
          get: function () {
              return this.prevented;
          },
          enumerable: false,
          configurable: true
      });
      /**
       * 阻止事件被继续传播，调用此方法后将停止执行其它在此侦听对象之后的优先级较低的方法
       */
      IEvent.prototype.stopPropagation = function () {
          // 设置停止执行
          this.stopped = true;
      };
      /**
       * 阻止事件发起者的默认动作（阻止后事件发布对象将取消当前事件应该执行的逻辑，仅当 cancelable 为 true 时才允许被取消，否则无效）
       */
      IEvent.prototype.preventDefault = function () {
          if (this.cancelable && !this.prevented)
              this.prevented = true;
      };
      return IEvent;
  }());
  /**
   * 事件发布对象
   */
  var Dispatcher = /** @class */ (function () {
      function Dispatcher() {
          // 侦听器集合
          this.listeners = new Map();
      }
      /**
       * 增加事件侦听对象
       * @param {string} type 事件类型
       * @param {IListener} listener 事件响应方法或执行对象
       * @param {number} priority 执行优先级（可选，默认 0，优先级相同时按侦听增加的先后顺序执行）
       */
      Dispatcher.prototype.on = function (type, listener, priority) {
          if (priority === void 0) { priority = 0; }
          // 判断是否有效
          if (!type || !listener)
              return this;
          // 从集合获取数据
          var ls = this.listeners.get(type);
          // 判断是否有效
          if (!ls) {
              // 创建数组
              ls = [];
              // 增加到集合
              this.listeners.set(type, ls);
          }
          // 修正优先级
          if (!priority)
              priority = 0;
          // 增加侦听器对象
          ls.push({
              p: priority,
              l: listener,
          });
          // 按优先级排序
          if (priority !== 0) {
              ls.sort(function (a, b) {
                  return StringUtils.compareSort(a.p, b.p);
              });
          }
          return this;
      };
      /**
       * 移除事件侦听对象
       * @param {string} type 事件类型
       * @param {IListener} listener 事件响应方法
       * @return {boolean} 是否移除成功
       */
      Dispatcher.prototype.remove = function (type, listener) {
          if (listener) {
              var ls = this.listeners.get(type);
              if (!ls)
                  return false;
              var removed = false;
              for (var i = 0, c = ls.length; i < c; i++) {
                  if (ls[i].l === listener) {
                      ls.splice(i, 1);
                      removed = true;
                      break;
                  }
              }
              if (!removed)
                  return false;
              if (ls.length === 0)
                  this.listeners.delete(type);
              return true;
          }
          else {
              return this.listeners.delete(type) !== null;
          }
      };
      /**
       * 判断是否已经存在事件处理对象或事件类型
       * @param {string} type 事件类型
       * @param {IListener} [listener] 事件响应方法
       * @returns {boolean} 是否已经存在事件处理对象或事件类型
       */
      Dispatcher.prototype.has = function (type, listener) {
          var ls = this.listeners.get(type);
          if (!ls)
              return false;
          if (listener) {
              for (var i = 0, c = ls.length; i < c; i++) {
                  if (ls[i].l === listener)
                      return true;
              }
              return false;
          }
          return true;
      };
      /**
       * 判断是否已经有事件侦听对象
       * @param {string} [type] 事件类型（可选，若不指定类型则返回是否存在任意类型的侦听器）
       * @returns {boolean} 是否已经有事件侦听对象
       */
      Dispatcher.prototype.hasType = function (type) {
          if (!type)
              return this.listeners.size > 0;
          var ls = this.listeners.get(type);
          return ls !== undefined && ls.length > 0;
      };
      /**
       * 发布事件处理
       * @param {IEvent} event 事件对象
       */
      Dispatcher.prototype.trigger = function (event) {
          // 判断是否有效
          if (!event || this.listeners.size === 0)
              return;
          // 获取执行器数组
          var ls = this.listeners.get(event.type);
          // 判断是否有效
          if (!ls)
              return;
          // 遍历执行数据
          for (var i = 0, c = ls.length; i < c; i++) {
              // 获取一个执行对象
              var listener = ls[i].l;
              // 判断是否为方法
              if (typeof listener === 'function') {
                  // 直接调用
                  listener(event);
              }
              else if (listener.onEvent) {
                  // 执行对象接口方法
                  listener.onEvent(event);
              }
              // 判断是否已经停止继续执行
              if (event.isStopped)
                  return;
          }
      };
      return Dispatcher;
  }());

  // 应用模块控制
  var SystemModule = /** @class */ (function () {
      function SystemModule(options) {
          // 注册名称
          this.name = options.name;
          // 创建分发器
          this.dispatcher = new Dispatcher();
      }
      /**
       * 上报消息
       * @param event
       */
      SystemModule.prototype.emit = function (event) {
          if (this.emitDispatcher) {
              this.emitDispatcher.trigger(event);
          }
          else {
              console.error('[app-core-framework]: ', '没有设置主系统的事件分发器');
          }
      };
      /**
       * 注册上报用的dispatcher
       * @param dispatcher
       */
      SystemModule.prototype.setDispatcher = function (dispatcher) {
          this.emitDispatcher = dispatcher;
      };
      return SystemModule;
  }());

  // 项目中心控制
  var SystemCenter = /** @class */ (function () {
      function SystemCenter() {
      }
      /**
       * 获取模块 TODO：如果有创建参数的话后续添加
       * @param name
       * @returns {SystemModule}
       */
      SystemCenter.getModule = function (name) {
          // 获取应用模块
          var module = this.moduleList.get(name);
          // 如果没有注册
          if (!module) {
              // 新建模块
              module = new SystemModule({ name: name });
              // 设置主系统的事件分发器
              module.setDispatcher(this.dispatcher);
              // 加入列表
              this.moduleList.set(name, module);
          }
          return module;
      };
      /**
       * 安装注册模块
       * @param module
       */
      SystemCenter.registerModule = function (module) {
          // 设置主系统的事件分发器
          module.setDispatcher(this.dispatcher);
      };
      /**
       * 给模块广播消息
       * @param event
       * @param target
       */
      SystemCenter.broadcast = function (event, target) {
          var _this = this;
          // 为空时为全部广播，否则遍历处理
          if (!target) {
              Array.from(this.moduleList.values()).forEach(function (module) {
                  module.dispatcher.trigger(event);
              });
          }
          else {
              // 遍历目标
              target.forEach(function (t) {
                  // 获取对应的模块
                  var module = _this.moduleList.get(t);
                  // 下发消息
                  if (module) {
                      module.dispatcher.trigger(event);
                  }
              });
          }
      };
      // 主系统分发器
      SystemCenter.dispatcher = new Dispatcher();
      // 已注册的模块列表
      SystemCenter.moduleList = new Map([]);
      return SystemCenter;
  }());

  var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SystemCenter: SystemCenter,
    SystemModule: SystemModule
  });

  // WebSocket服务
  var InitWebSocket = /** @class */ (function () {
      /**
       * constructor
       * @param url 连接地址
       * @param params 地址参数
       * @param options 额外参数
       */
      function InitWebSocket(url, params, options) {
          if (params === void 0) { params = null; }
          if (options === void 0) { options = {}; }
          // 连接地址
          this.url = url;
          // 避免重复连接
          this.lockReconnect = false;
          // 事件处理
          this.dispatcher = new Dispatcher();
          // 地址参数
          this.params = params;
          // log显示
          this.showLog = !!options.showLog;
          // 自动重连间隔 0为不自动重连
          this.autoReconnect =
              typeof options.autoReconnect === 'undefined'
                  ? 3000
                  : options.autoReconnect;
          // 记录配置
          this.options = options;
          // 是否自定义了帧原始数据转换方法
          if (options.transform) {
              // 替换转换方法
              this.msgTransform = options.transform;
          }
          // 是否自动连接
          if (options.autoConnect) {
              // 创建连接
              this.connect();
          }
      }
      /**
       * 返回的帧数据处理方法，默认使用json解析
       * @param msg
       * @returns {WSMsg | null}
       */
      InitWebSocket.prototype.msgTransform = function (msg) {
          try {
              // 处理消息
              return JSON.parse(msg);
          }
          catch (e) {
              this.log("\u6570\u636E\u683C\u5F0F\u6709\u8BEF\uFF1A" + msg);
              return null;
          }
      };
      /**
       * 日志
       */
      InitWebSocket.prototype.log = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          if (this.showLog) {
              console.log.apply(console, args);
          }
      };
      /**
       * 获取websocket对象
       * @returns {null}
       */
      InitWebSocket.prototype.getWebsocket = function () {
          return this.websocket;
      };
      /**
       * 发送消息
       * @param data
       */
      InitWebSocket.prototype.send = function (data) {
          if (!this.websocket) {
              this.log('websocket服务未启动');
              return;
          }
          this.websocket.send(data);
      };
      /**
       * 事件监听
       * @param type 时间类型
       * @param fn 触发方法
       * @param priority 优先级
       * @returns {InitWebSocket}
       */
      InitWebSocket.prototype.on = function (type, fn, priority) {
          if (priority === void 0) { priority = 0; }
          if (type != null &&
              typeof type !== 'undefined' &&
              fn != null &&
              typeof fn !== 'undefined') {
              this.dispatcher.on(type, fn, priority);
          }
          return this;
      };
      /**
       * 删除监听
       * @param type
       * @param fn
       * @returns {InitWebSocket}
       */
      InitWebSocket.prototype.remove = function (type, fn) {
          if (type != null &&
              typeof type !== 'undefined' &&
              fn != null &&
              typeof fn !== 'undefined') {
              this.dispatcher.remove(type, fn);
          }
          return this;
      };
      /**
       * ws事件处理
       */
      InitWebSocket.prototype.initEventHandle = function () {
          var _this = this;
          if (!this.websocket) {
              this.log('WebSocket 服务未启动');
              return;
          }
          // ws连接成功
          this.websocket.onopen = function (e) {
              _this.log('WebSocket 连接成功: ', e);
              _this.dispatcher.trigger(new IEvent(e.target, EWSType.OPEN, e));
          };
          // ws连接出错
          this.websocket.onerror = function (e) {
              _this.log('WebSocket 连接发生错误: ', e);
              _this.dispatcher.trigger(new IEvent(e.target, EWSType.ERROR, e));
          };
          // ws数据接收
          this.websocket.onmessage = function (e) {
              _this.log('WebSocket 收到消息: ', e);
              // 处理消息，处理方法可以在options中自定义
              var msg = _this.msgTransform(e.data);
              if (msg) {
                  // 返回消息处理
                  _this.dispatcher.trigger(new IEvent(e.target, msg.code, msg.data));
              }
              else {
                  // 触发无效帧的事件
                  _this.dispatcher.trigger(new IEvent(e.target, EWSType.INVALID, e));
              }
          };
          // ws关闭连接
          this.websocket.onclose = function (e) {
              _this.log("WebSocket \u8FDE\u63A5\u5173\u95ED: ", e);
              _this.dispatcher.trigger(new IEvent(e.target, EWSType.CLOSE, e));
              // 重连
              _this.reconnect();
          };
          // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
          // window.onbeforeunload = function() {
          //   this.websocket.close()
          // }
      };
      /**
       * 创建连接
       */
      InitWebSocket.prototype.connect = function () {
          try {
              if ('WebSocket' in window) {
                  // 创建连接
                  this.websocket = new WebSocket(this.url +
                      (this.params ? StringUtils.queryStringify(this.params, true) : ''), this.options.protocols);
              }
              else {
                  // 提示无法连接
                  alert('浏览器版本过低，请升级您的浏览器');
                  return;
              }
              // 初始化事件处理
              this.initEventHandle();
          }
          catch (e) {
              // 尝试重新连接
              this.reconnect();
          }
      };
      /**
       * 重连
       */
      InitWebSocket.prototype.reconnect = function () {
          var _this = this;
          // 锁定状态下不重连
          if (this.lockReconnect)
              return;
          // 开启重连锁定
          this.lockReconnect = true;
          // 没连接上会一直重连，设置延迟避免请求过多
          setTimeout(function () {
              // 连接
              _this.connect();
              // 控制台提示
              _this.log("WebSocket \u6B63\u5728\u91CD\u8FDE\uFF0C\u5F53\u524D\u65F6\u95F4 " + new Date());
              // 解除重连锁定
              _this.lockReconnect = false;
          }, this.autoReconnect);
      };
      return InitWebSocket;
  }());

  var index = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  // 全局国际化实现类
  var Language = /** @class */ (function () {
      /**
       * constructor
       * @param target
       */
      function Language(target) {
          // 设置key
          this.target = target;
      }
      /**
       * 获取对应的文本
       * @param key 键
       * @param params 需要替换{0}..{n}的参数数组
       * @returns {string}
       */
      Language.prototype.t = function (key) {
          var params = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              params[_i - 1] = arguments[_i];
          }
          // 判断国际化文件是否加载
          if (!Locale.locales) {
              // eslint-disable-next-line no-console
              console.error("\u56FD\u9645\u5316\u6587\u4EF6\u8FD8\u672A\u8BFB\u53D6\u5B8C\u6210\u6216\u6CA1\u6709\u8BFB\u53D6\u5230\u6587\u4EF6");
              return key;
          }
          var locale = null;
          // 分解key
          var keyLink = this.target.split(Locale.splitSymbol);
          // 判断国际化文件是否有效
          if (!keyLink.length) {
              // eslint-disable-next-line no-console
              console.error("\u56FD\u9645\u5316\u6587\u4EF6\u8FD8\u4E2D\u6CA1\u6709\u8BFB\u53D6\u5230[" + this.target + "]\u5BF9\u5E94\u7684\u5185\u5BB9");
              return key;
          }
          else if (keyLink.length === 1) {
              // 获取对应的国际化文件
              locale = Locale.locales[this.target];
          }
          else {
              // 有纵深的情况下，逐级获取国际化文件
              locale = Locale.locales[keyLink[0]];
              for (var i = 1; i < keyLink.length; i++) {
                  locale = locale[keyLink[i]];
              }
          }
          // 判断国际化文件是否有效
          if (!locale) {
              // eslint-disable-next-line no-console
              console.error("\u56FD\u9645\u5316\u6587\u4EF6\u8FD8\u4E2D\u6CA1\u6709\u8BFB\u53D6\u5230[" + this.target + "]\u5BF9\u5E94\u7684\u5185\u5BB9");
              return key;
          }
          // 获取国际化结果
          var result = locale[key];
          // 没有找到对应国际化结果的时候返回key
          if (!result && result !== '') {
              return key;
          }
          // 返回数据
          return StringUtils.formatString(result, params);
      };
      return Language;
  }());
  // 全局国际化工具类
  var Locale = /** @class */ (function () {
      /**
       * constructor 不允许实例化使用
       */
      function Locale() {
      }
      /**
       * 获取全部国际化文件中某个模块的key
       * @param config 模块配置，一般在模块根目录的 module.json 中配置
       * @returns {string} '[app]$[module]'
       */
      Locale.getModuleKey = function (config) {
          return "" + config.app + Locale.splitSymbol + config.module;
      };
      /**
       * 创建国际化操作实例
       * @param key 模块的key，是模块国际化文件的话，可以通过getModuleKey获取
       * @returns {Language<T>}
       */
      Locale.create = function (key) {
          // 返回国际化操作实例
          return new Language(key);
      };
      /**
       * 设置全局国际化文件
       * @param locales 国际化文件
       * @param reduce 是否使用压缩模式读取
       */
      Locale.setLocales = function (locales, reduce) {
          if (reduce === void 0) { reduce = false; }
          // 设置当前的国际化文件
          Locale.locales = locales;
          // 是否使用压缩模式读取
          Locale.reduce = reduce;
      };
      /**
       * 设置国际化key的分隔符
       * @param symbol
       */
      Locale.setSplitSymbol = function (symbol) {
          Locale.splitSymbol = symbol;
      };
      // 国际化文件key的分隔符
      Locale.splitSymbol = '$';
      // 是否压缩减少字段重复 TODO: 在生成国际化文件时建立key hash
      Locale.reduce = false;
      return Locale;
  }());

  // 导航页面分组类型
  var MenuType;
  (function (MenuType) {
      // "登录"
      MenuType["SYSTEM_LOGIN_PAGE"] = "5";
      // "首页"
      MenuType["SYSTEM_HOME_PAGE"] = "6";
      // "导航"
      MenuType["MENU_NAVIGATION_PAGE"] = "3";
      // "布局组"
      MenuType["NAV_LAYOUT_GROUP"] = "4";
      // "目录"
      MenuType["NAV_CATEGORY_GROUP"] = "8";
      // "应用系统页面"
      MenuType["APPLICATION_SYSTEM_PAGE"] = "1";
      // "数据可视化页面"
      MenuType["DATA_VISUALIZATION_PAGE"] = "2";
      // "自定义连接页面"
      MenuType["CUSTOM_PAGE"] = "7";
  })(MenuType || (MenuType = {}));
  // 导航页面分组类型
  var MenuNavType;
  (function (MenuNavType) {
      // 卡片方式显示子菜单
      MenuNavType["CARD"] = "card";
      // 顶部导航栏显示子菜单
      MenuNavType["TOP"] = "top";
      // 左侧导航栏显示子菜单
      MenuNavType["LEFT"] = "left";
      // 左侧菜单树显示子菜单
      MenuNavType["TREE"] = "tree";
  })(MenuNavType || (MenuNavType = {}));
  // 导航布局组类型
  var MenuGroupType;
  (function (MenuGroupType) {
      // 默认布局方式
      MenuGroupType["DEFAULT"] = "default";
      // 指定布局方式
      MenuGroupType["ASSIGN"] = "assign";
  })(MenuGroupType || (MenuGroupType = {}));
  // 导航布局类型
  var MenuLayoutType;
  (function (MenuLayoutType) {
      // 左侧或顶部排列
      MenuLayoutType["LEFT_TOP"] = "left_top";
      // 右侧或底部排列
      MenuLayoutType["RIGHT_BOTTOM"] = "right_bottom";
  })(MenuLayoutType || (MenuLayoutType = {}));

  var AxMenu = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get MenuType () { return MenuType; },
    get MenuNavType () { return MenuNavType; },
    get MenuGroupType () { return MenuGroupType; },
    get MenuLayoutType () { return MenuLayoutType; }
  });

  // 请求服务
  var Request = /** @class */ (function () {
      function Request(config) {
          // 设置默认值，默认超时时间2分钟
          var defaultConfig = {
              timeout: 120000,
              withCredentials: true,
              headers: {
                  'Content-Type': 'application/json;charset=UTF-8',
              },
          };
          // 合并配置
          this.config = Object.assign(defaultConfig, config);
          // 创建请求对象
          this.service = axios__default['default'].create(this.config);
          // 配置请求对象
          this.service.interceptors.request.use(function (config) {
              // data实际传递的是请求的配置，在拦截器再次处理
              if (config.data) {
                  // 获取请求数据
                  var _a = config.data, params = _a.params, data = _a.data, options = _a.options, requestConfig = _a.requestConfig;
                  // 设置options信息
                  if (options.lang) {
                      config.headers['Accept-Language'] = options.lang;
                  }
                  if (options.token) {
                      config.headers['AX-Token'] = options.token;
                  }
                  if (options.headers) {
                      for (var key in options.headers) {
                          config.headers[key] = options.headers[key];
                      }
                  }
                  // 序列化params数据
                  if (params) {
                      config.params = params;
                  }
                  // 序列化body数据
                  if (data) {
                      config.data = data;
                  }
                  // 是否使用额外的请求配置，注意，这个配置可能会覆盖前面的配置
                  if (requestConfig) {
                      config = Object.assign(config, requestConfig);
                  }
              }
              // 返回配置
              return config;
          }, 
          // 错误处理
          function (error) { return Promise.reject(error); });
          // 配置响应对象
          this.service.interceptors.response.use(function (response) {
              // 判断是否存在请求数据
              if (response.data) {
                  // 获取响应结果（格式：{code,data,desc,ref}）
                  var res = response.data;
                  // 判断是否有效
                  if (!res) {
                      // 无效
                      return Promise.reject({
                          errorCode: ErrorCode.EMPTY,
                      });
                  }
                  else if (res.code !== ResultCode.OK) {
                      // 响应失败，也返回数据，方便前端判断错误并处理
                      return Promise.reject(res);
                  }
                  else {
                      // 响应成功
                      return res.data;
                  }
              }
              else {
                  // 直接返回内容
                  return response.data;
              }
          }, 
          /**
           * http 错误的处理
           * @param error
           * @returns {Promise<void>}
           */
          function (error) {
              // 登录失效的处理
              if (error.response &&
                  (error.response.status === HttpCode.UNAUTHORIZED ||
                      error.response.status === HttpCode.LOGIN_ERROR ||
                      error.response.status === HttpCode.LOGIN_FAILED)) {
                  // 如果重定向，调用重定向方法
                  if (config.redirect) {
                      config.redirect(error.response);
                      // 登录凭证问题自行处理
                      return Promise.reject({
                          errorCode: ErrorCode.REDIRECT,
                      });
                  }
              }
              return Promise.reject(error);
          });
      }
      /**
       * http请求模版
       * @param method 请求方法
       * @param url host后的url部分
       * @param params params参数
       * @param data data参数
       * @param options 请求模版通用配置，国际化和token等
       * @param requestConfig 请求配置，用于针对特殊请求配置时的配置，例如请求头headers修改
       * @returns {Promise<T>}
       */
      Request.prototype.http = function (method, url, params, data, options, requestConfig) {
          var _this = this;
          if (options === void 0) { options = {}; }
          if (requestConfig === void 0) { requestConfig = {}; }
          return new Promise(function (resolve, reject) {
              _this.service({
                  url: url,
                  method: method,
                  data: {
                      params: params,
                      data: data,
                      options: options,
                      requestConfig: requestConfig,
                  },
              }).then(function (res) {
                  // 输出数据
                  resolve(res);
              }, function (error) {
                  // 输出错误
                  reject(error);
              });
          });
      };
      return Request;
  }());

  var BrowserUtils = /** @class */ (function () {
      function BrowserUtils() {
      }
      /**
       * 获取当前浏览器多国语言标识（如：zh_CN, en_US...）
       * @returns {string} 语言标识
       */
      BrowserUtils.getDefaultLanguageKey = function () {
          // 获取浏览器语言
          var lang = window.navigator.language
              ? window.navigator.language
              : window.navigator.browserLanguage;
          // 判断是否有效
          if (!lang || lang.length === 0) {
              lang = 'en_US';
          }
          else {
              // 替换分隔符
              lang = lang.replace('-', '_');
              var pos = lang.indexOf('_');
              if (pos !== -1)
                  lang = lang.substring(0, pos) + lang.substring(pos).toUpperCase();
              if (lang === 'zh')
                  lang = 'zh_CN';
              if (lang === 'en')
                  lang = 'en_US';
          }
          // 返回数据
          return lang;
      };
      return BrowserUtils;
  }());

  var DomUtils = /** @class */ (function () {
      function DomUtils() {
      }
      /**
       * 获取当前浏览器多国语言标识（如：zh_CN, en_US...）
       * @returns {string} 语言标识
       */
      DomUtils.getDefaultLanguageKey = function () {
          // 获取浏览器语言
          var lang = window.navigator.language
              ? window.navigator.language
              : window.navigator.browserLanguage;
          // 判断是否有效
          if (!lang || lang.length === 0) {
              lang = 'en_US';
          }
          else {
              // 替换分隔符
              lang = lang.replace('-', '_');
              var pos = lang.indexOf('_');
              if (pos !== -1)
                  lang = lang.substring(0, pos) + lang.substring(pos).toUpperCase();
              if (lang === 'zh')
                  lang = 'zh_CN';
              if (lang === 'en')
                  lang = 'en_US';
          }
          // 返回数据
          return lang;
      };
      /**
       * 绑定处理方法（支持多个方法名称）
       * @param {HTMLElement | Window | Document} e HTML 元素
       * @param {string[]|string} methods 方法名称数组
       * @param {(event: Event) => any} handler 事件处理函数
       * @returns {boolean} 是否绑定成功
       */
      DomUtils.addDomEventListener = function (e, methods, handler) {
          // 判断是否有效
          if (!e || !methods || !handler)
              return false;
          // 转换对象
          var ele = e;
          // 判断是否是数组
          if (!(methods instanceof Array)) {
              // 把字符串改为数组
              methods = methods.split(',');
          }
          // 遍历绑定方法
          for (var i = 0, c = methods.length; i < c; i++) {
              // 获取一个方法
              var m = methods[i];
              // 判断是否有效
              if (!m || m.length === 0)
                  continue;
              // 转换为小写
              m = m.trim().toLowerCase();
              // 判断是否具有标准方法
              if (ele.addEventListener) {
                  // 去除 on 前缀
                  if (m.indexOf('on') === 0)
                      m = m.substr(2);
                  // 增加事件处理
                  ele.addEventListener(m, handler, false);
              }
              else if (ele.attachEvent) {
                  // 兼容 IE 浏览器
                  if (m.indexOf('on') !== 0)
                      m = 'on' + m;
                  // 绑定方法
                  ele.attachEvent(m, handler);
              }
          }
          // 返回成功
          return true;
      };
      /**
       * 解除绑定处理方法（支持多个方法名称）
       * @param {HTMLElement | Window | Document} e HTML 元素
       * @param {string[]|string} methods 方法名称数组
       * @param {(event: Event) => any} handler 事件处理函数
       * @returns {boolean} 是否解绑成功
       */
      DomUtils.removeDomEventListener = function (e, methods, handler) {
          // 判断是否有效
          if (!e || !methods || !handler)
              return false;
          // 转换对象
          var ele = e;
          // 判断是否是数组
          if (!(methods instanceof Array)) {
              // 把字符串改为数组
              methods = methods.split(',');
          }
          // 遍历绑定方法
          for (var i = 0, c = methods.length; i < c; i++) {
              // 获取一个方法
              var m = methods[i];
              // 判断是否有效
              if (!m || m.length === 0)
                  continue;
              // 转换为小写
              m = m.trim().toLowerCase();
              // 判断是否具有标准方法
              if (ele.removeEventListener) {
                  // 去除 on 前缀
                  if (m.indexOf('on') === 0)
                      m = m.substr(2);
                  // 增加事件处理
                  ele.removeEventListener(m, handler, false);
              }
              else if (ele.detachEvent) {
                  // 兼容 IE 浏览器
                  if (m.indexOf('on') !== 0)
                      m = 'on' + m;
                  // 绑定方法
                  ele.detachEvent(m, handler);
              }
          }
          // 返回成功
          return true;
      };
      /**
       * 发布 DOM 事件处理
       * @param {HTMLElement} e HTML 元素
       * @param {string[]} methods 方法名称数组
       * @param {Event} [evt] 事件对象（可选）
       * @returns {boolean} 是否发布成功
       */
      DomUtils.dispatchDomEvent = function (e, methods, evt) {
          // 判断是否有效
          if (!e || !methods || methods.length === 0)
              return false;
          // 转换对象
          var ele = e;
          // 遍历发布事件
          for (var i = 0, c = methods.length; i < c; i++) {
              // 获取一个方法
              var m = methods[i];
              // 判断是否有效
              if (!m || m.length === 0)
                  continue;
              // 转换为小写
              m = m.toLowerCase();
              // 判断是否存在 fireEvent 方法
              if (ele.fireEvent) {
                  // 兼容 IE 浏览器
                  if (m.indexOf('on') !== 0)
                      m = 'on' + m;
                  // 创建事件对象
                  if (!evt)
                      evt = document.createEventObject();
                  // 发布事件
                  ele.fireEvent(m, evt);
              }
              else if (document.createEvent) {
                  // 标准浏览器方法
                  if (m.indexOf('on') === 0)
                      m = m.substr(2);
                  // 判断是否有效
                  if (!evt) {
                      // 创建对象
                      evt = document.createEvent(m.indexOf('click') >= 0 || m.indexOf('mouse') >= 0
                          ? 'MouseEvents'
                          : 'HTMLEvents');
                  }
                  // 初始化事件对象
                  evt.initEvent(m, true, true);
                  // 发布事件
                  e.dispatchEvent(evt);
              }
          }
          // 返回成功
          return true;
      };
      /**
       * 获取事件目标对象
       * @param {Event} evt 事件对象
       * @returns {HTMLElement | null} 事件对象
       */
      DomUtils.getDomEventTarget = function (evt) {
          // 获取事件对象
          var ev = evt ? evt : window.event;
          // 获取事件对象
          return ev ? (ev.target ? ev.target : ev.srcElement) : null;
      };
      /**
       * 获取事件按键代码（keyCode）
       * @param {Event} evt 事件对象
       * @returns {number} 按键值
       */
      DomUtils.getDomEventKeyCode = function (evt) {
          // 获取事件对象
          var ev = (evt ? evt : window.event);
          if (ev) {
              var kc = ev.keyCode || ev.which;
              if (!kc || isNaN(kc))
                  kc = 0;
              return kc;
          }
          return 0;
      };
      /**
       * 把事件的 KEYCODE 转换为字符串（无效返回 undefined ）
       * @param {Event} evt 事件对象
       * @param {boolean} [includeFuncKey] 是否包含功能按键字符串返回（如：F1, Esc 等；默认：false）
       * @returns {string|undefined} 按键字符串
       */
      DomUtils.keyCodeToString = function (evt, includeFuncKey) {
          if (includeFuncKey === void 0) { includeFuncKey = false; }
          // 获取事件对象
          var ev = (evt ? evt : window.event);
          // 获取按键
          var key = ev.keyCode || ev.which;
          // 获取是否按下 shift 键
          var shiftKey = ev.shiftKey;
          // 定义字符
          var ch;
          if (key >= 65 && key <= 90) {
              // A-Z
              ch = String.fromCharCode(key);
              return shiftKey ? ch.toUpperCase() : ch.toLowerCase();
          }
          else if (key >= 48 && key <= 57) {
              // 0-9
              if (shiftKey)
                  return [')', '!', '@', '#', '$', '%', '^', '&', '*', '('][key - 48];
              return String.fromCharCode(key);
          }
          else {
              // Num pad
              var ks = this.BROWSER.opera
                  ? [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 78, 47, 42, 45, 43]
                  : [
                      96,
                      97,
                      98,
                      99,
                      100,
                      101,
                      102,
                      103,
                      104,
                      105,
                      110,
                      111,
                      106,
                      109,
                      107,
                  ];
              var i = ks.indexOf(key);
              if (i !== -1)
                  return [
                      '0',
                      '1',
                      '2',
                      '3',
                      '4',
                      '5',
                      '6',
                      '7',
                      '8',
                      '9',
                      '.',
                      '/',
                      '*',
                      '-',
                      '+',
                  ][i];
              // Special keys
              ks =
                  this.BROWSER.ie || this.BROWSER.chrome
                      ? [192, 189, 187, 219, 221, 186, 222, 220, 188, 190, 191]
                      : this.BROWSER.opera
                          ? [96, 45, 61, 91, 93, 59, 39, 92, 44, 46, 47]
                          : [192, 109, 61, 219, 221, 59, 222, 220, 188, 190, 191];
              i = ks.indexOf(key);
              if (i !== -1) {
                  var kss = shiftKey
                      ? ['~', '_', '+', '{', '}', ':', '"', '|', '<', '>', '?']
                      : ['`', '-', '=', '[', ']', ';', "'", '\\', ',', '.', '/'];
                  return kss[i];
              }
              if (includeFuncKey) {
                  // Function key(e.g. F1, Esc)
                  ks = [
                      27,
                      9,
                      20,
                      16,
                      17,
                      18,
                      32,
                      91,
                      92,
                      93,
                      8,
                      13,
                      45,
                      36,
                      33,
                      46,
                      35,
                      34,
                      38,
                      37,
                      40,
                      39,
                      144,
                      112,
                      113,
                      114,
                      115,
                      116,
                      117,
                      118,
                      119,
                      120,
                      121,
                      122,
                      123,
                      145,
                      19,
                  ];
                  i = ks.indexOf(key);
                  if (i !== -1)
                      return [
                          'Esc',
                          'Tab',
                          'Caps Lock',
                          'Shift',
                          'Ctrl',
                          'Alt',
                          'Space',
                          'Win',
                          'Win',
                          'Menu',
                          'Back Space',
                          'Enter',
                          'Insert',
                          'Home',
                          'Page Up',
                          'Delete',
                          'End',
                          'Page Down',
                          'Up',
                          'Left',
                          'Down',
                          'Right',
                          'Num Lock',
                          'F1',
                          'F2',
                          'F3',
                          'F4',
                          'F5',
                          'F6',
                          'F7',
                          'F8',
                          'F9',
                          'F10',
                          'F11',
                          'F12',
                          'Scroll Lock',
                          'Pause Break',
                      ][i];
              }
          }
          // 默认返回无效
          return undefined;
      };
      /**
       * 取消事件
       * @param {Event} evt 事件对象
       * @param {boolean} cancelBubble 是否取消冒泡（可选；默认：true - 取消冒泡）
       * @returns {boolean} 是否允许事件继续
       */
      DomUtils.cancelDomEvent = function (evt, cancelBubble) {
          if (cancelBubble === void 0) { cancelBubble = true; }
          var ev = evt ? evt : window.event;
          if (!ev)
              return false;
          ev.returnValue = false;
          // keyCode只有getter
          // ev.keyCode = 0;
          ev.wheelDelta = 0;
          // ev.detail = 0;
          if (ev.preventDefault) {
              ev.preventDefault();
          }
          if (cancelBubble) {
              ev.cancelBubble = true;
              if (ev.stopPropagation) {
                  ev.stopPropagation();
              }
          }
          return false;
      };
      /**
       * 禁止事件冒泡
       * @param {Event} evt 事件对象
       * @returns {boolean} 是否允许事件继续
       */
      DomUtils.cancelDomEventBubble = function (evt) {
          var ev = evt ? evt : window.event;
          if (ev) {
              if (ev.stopPropagation) {
                  ev.stopPropagation();
              }
              ev.cancelBubble = true;
          }
          return true;
      };
      /**
       * 取消滚动冒泡
       * @param {Event} evt 事件对象
       * @param {HTMLElement} scrollElement 滚动元素对象（可选，不设置直接使用事件目标对象）
       * @returns {boolean} 是否允许事件继续
       */
      DomUtils.cancelDomWheelBubble = function (evt, scrollElement) {
          var ev = (evt ? evt : window.event);
          if (!ev)
              return false;
          var wheel = ev.detail ? ev.detail : ev.wheelDelta ? ev.wheelDelta * -1 : 0;
          if (this.BROWSER.firefox)
              wheel *= 30;
          if (isNaN(wheel))
              wheel = 0;
          if (wheel === 0)
              return false;
          var e = scrollElement;
          if (!e)
              e = ev.target || ev.srcElement;
          var top = e.scrollTop + wheel;
          if (top < 0)
              top = 0;
          if (top > e.scrollHeight)
              top = e.scrollHeight;
          if (e.scrollTop !== top) {
              window.setTimeout(function () {
                  e.scrollTop = top;
              }, 10);
          }
          return this.cancelDomEvent(evt);
      };
      /**
       * 判断是否是操作按键（非键盘输入键）
       * @param {number} k 键值（keyCode）
       * @returns {boolean} 是否是操作按键
       */
      DomUtils.isDomControlKey = function (k) {
          var ks = this.BROWSER.opera
              ? [8, 9, 13, 16, 17, 18, 20, 27, 33, 34, 35, 36, 37, 38, 40, 144]
              : [
                  8,
                  9,
                  13,
                  16,
                  17,
                  18,
                  20,
                  27,
                  33,
                  34,
                  35,
                  36,
                  37,
                  38,
                  40,
                  144,
                  45,
                  46,
                  91,
                  93,
                  39,
                  92,
              ];
          return ks.indexOf(k) !== -1;
      };
      /**
       * 获取元素当前样式
       * @param {HTMLElement} e 元素对象或标识
       * @param {string} styleName 样式名称（如："border-color"）
       * @param {string} defaultStyle 默认返回样式
       * @returns {string} 获取到的样式字符串
       */
      DomUtils.getDomStyle = function (e, styleName, defaultStyle) {
          if (!e || !styleName)
              return defaultStyle;
          var sty = null;
          if (document.defaultView &&
              typeof document.defaultView.getComputedStyle === 'function') {
              var csty = document.defaultView.getComputedStyle(e, null);
              sty = csty[styleName];
          }
          else {
              var el = e;
              sty = el.currentStyle ? el.currentStyle[styleName] : null;
          }
          return sty && sty.length > 0 ? sty : defaultStyle;
      };
      /**
       * 获取元素在文档内的位置
       * @param {Element} e 元素对象或标识
       * @param {Element} limitParent 查找结束的上级对象（可选，默认不限制，查找时包含此对象）
       * @returns {object} {left:xxx,top:xxx}
       */
      DomUtils.getDomPosition = function (e, limitParent) {
          if (!e)
              return { left: 0, top: 0 };
          var l = 0;
          var t = 0;
          var sl = 0;
          var st = 0;
          var bt;
          var bl;
          var p = e;
          // 循环遍历数据
          do {
              // 判断是否限制了父节点
              if (limitParent && limitParent === p)
                  break;
              // 增加滚动条位置
              if (p !== e) {
                  sl = p.scrollLeft ? p.scrollLeft : 0;
                  st = p.scrollTop ? p.scrollTop : 0;
                  l -= sl;
                  t -= st;
              }
              // 增加父级节点位置
              l += p.offsetLeft;
              t += p.offsetTop;
              // 判断是否浮动
              if (p !== e && this.getDomStyle(p, 'position', '') !== 'absolute') {
                  // 增加边线宽度
                  bt = this.getDomStyle(p, 'border-top-width', '0px');
                  if (bt !== '0px')
                      t += parseInt(bt, 10);
                  bl = this.getDomStyle(p, 'border-left-width', '0px');
                  if (bl !== '0px')
                      l += parseInt(bl, 10);
              }
              // 获取父级元素
              p = p.offsetParent;
          } while (p);
          // 返回数据
          return {
              left: l,
              top: t,
          };
      };
      /**
       * 判断当前对象是否是窗体对象
       * @param {object} obj 测试的对象
       * @returns {boolean} 是否是窗体对象
       */
      DomUtils.isDomWindow = function (obj) {
          if (!obj)
              return false;
          var reg = /Window|global/;
          var inc = reg.test({}.toString.call(obj));
          var iec = obj === obj.document && obj.document !== obj;
          return inc || iec;
      };
      /**
       * 判断当前对象是否是文档对象
       * @param {object} obj 测试的对象
       * @returns {boolean} 是否是窗体对象
       */
      DomUtils.isDomDocument = function (obj) {
          if (!obj)
              return false;
          return !!(obj.createElement && obj.documentElement);
      };
      /**
       * 获取滚动条信息，返回：{width:xxx,height:xxx,left:xxx,top:xxx}
       * @param {HTMLElement} e 元素对象或标识
       * @returns {Object} {width:xxx,height:xxx,left:xxx,top:xxx}
       */
      DomUtils.getDomScroll = function (e) {
          if (!e)
              return {
                  width: 0,
                  height: 0,
                  left: 0,
                  top: 0,
              };
          var t = 0;
          var l = 0;
          var w = 0;
          var h = 0;
          if (this.isDomWindow(e)) {
              var te = void 0;
              var win = e;
              if (win.innerWidth) {
                  w = win.innerWidth + (win.scrollMaxX ? win.scrollMaxX : 0);
              }
              if (win.innerHeight) {
                  h = win.innerHeight + (win.scrollMaxY ? win.scrollMaxY : 0);
              }
              te = win.document.documentElement;
              if (te && typeof te.scrollTop === 'number') {
                  t = te.scrollTop;
                  l = te.scrollLeft;
                  w = Math.max(w, te.scrollWidth);
                  h = Math.max(h, te.scrollHeight);
              }
              te = win.document.body;
              if (te) {
                  t = Math.max(t, te.scrollTop);
                  l = Math.max(l, te.scrollLeft);
                  w = Math.max(te.scrollWidth);
                  h = Math.max(te.scrollHeight);
              }
          }
          else {
              var el = e;
              t = el.scrollTop;
              l = el.scrollLeft;
              w = el.scrollWidth;
              h = el.scrollHeight;
          }
          return {
              width: Math.max(0, w),
              height: Math.max(0, h),
              left: Math.max(0, l),
              top: Math.max(0, t),
          };
      };
      /**
       * 获取浏览器窗口大小
       * @param {Window} win 窗口对象（可选）
       * @returns {Object} {width:xxx,height:xxx}
       */
      DomUtils.getWindowSize = function (win) {
          if (!win)
              win = window;
          var w = 0;
          var h = 0;
          var doc = win.document;
          var te = doc.documentElement;
          if (te && (te.clientHeight || te.offsetHeight)) {
              h = Math.min(te.clientHeight, te.offsetHeight);
          }
          if (win.innerHeight) {
              h = h > 0 ? Math.min(h, win.innerHeight) : win.innerHeight;
          }
          if (te && (te.clientWidth || te.offsetWidth)) {
              w = Math.min(te.clientWidth, te.offsetWidth);
          }
          if (win.innerWidth) {
              w = w > 0 ? Math.min(w, win.innerWidth) : win.innerWidth;
          }
          if (w === 0 || h === 0) {
              var scroll_1 = this.getDomScroll(win);
              if (w === 0)
                  w = scroll_1.width;
              if (h === 0)
                  h = scroll_1.height;
          }
          return {
              width: Math.max(0, w),
              height: Math.max(0, h),
          };
      };
      /**
       * 获取文档页面大小
       * @param {Window} win 窗口对象
       * @returns {Object} {width:xxx,height:xxx}
       */
      DomUtils.getDocumentSize = function (win) {
          var w = 0;
          var h = 0;
          var te;
          if (!win)
              win = window;
          var wins = win;
          var doc = win.document;
          if (win.innerHeight) {
              h = win.innerHeight + (wins.scrollMaxY ? wins.scrollMaxY : 0);
          }
          te = doc.documentElement;
          if (te && te.clientHeight) {
              h = Math.max(h, te.clientHeight);
          }
          te = doc.body;
          if (te) {
              h = Math.max(h, te.clientHeight);
          }
          if (win.innerWidth) {
              w = win.innerWidth + (wins.scrollMaxX ? wins.scrollMaxX : 0);
          }
          te = doc.documentElement;
          if (te && te.clientWidth) {
              w = Math.max(w, te.clientWidth);
          }
          te = doc.body;
          if (te) {
              w = Math.max(w, te.clientWidth);
          }
          var scroll = this.getDomScroll(win);
          w = Math.max(w, scroll.width);
          h = Math.max(h, scroll.height);
          return {
              width: Math.max(0, w),
              height: Math.max(0, h),
          };
      };
      /**
       * 获取事件鼠标滚轮操作值（返回值：>0 - 向下滚动；<0 - 向上滚动；0 - 不滚动）
       * @param {MouseEvent} evt 事件对象
       * @returns {number} 滚动值
       */
      DomUtils.getDomEventWheel = function (evt) {
          var ev = evt ? evt : window.event;
          if (ev) {
              var detail = parseInt(ev.detail ? ev.detail : ev.wheelDelta ? ev.wheelDelta * -1 : 0, 10);
              if (this.BROWSER.firefox)
                  detail *= 30;
              if (isNaN(detail))
                  detail = 0;
              return detail;
          }
          return 0;
      };
      /**
       * 查找上级对象（条件判断包含对象本身）
       * @param e 当前对象
       * @param idValue 上级对象标志值（可选，null 表示不查找）
       * @param nameValue 上级对象名称值（可选，null 表示不查找）
       * @param classNameValue 上级对象样式类值（可选，null 表示不查找）
       * @param tagNameValue 上级对象标签值（可选，null 表示不查找）
       * @param attributeName 上级对象属性名称（可选，null 表示不查找）
       * @param attributeValue 上级对象属性值（可选，null 表示不查找）
       * @param levels 向上查询最多级数（可选，达到该次数后不再向上查询，默认 0 表示不限制）
       * @param limitParent 查找结束的上级对象（可选，默认不限制）
       * @returns 上级对象（undefined 表示不存在）
       */
      DomUtils.getDomParent = function (e, idValue, nameValue, classNameValue, tagNameValue, attributeName, attributeValue, levels, limitParent) {
          if (levels === void 0) { levels = 0; }
          if (e && e.parentNode) {
              var i = 0;
              var p = e;
              if (tagNameValue)
                  tagNameValue = tagNameValue.toUpperCase();
              do {
                  if (levels > 0) {
                      if (i > levels)
                          break;
                      i++;
                  }
                  if (limitParent && limitParent === p)
                      break;
                  if (idValue) {
                      if (p.id !== idValue)
                          continue;
                  }
                  if (nameValue) {
                      if (p.getAttribute('name') !== nameValue)
                          continue;
                  }
                  if (classNameValue) {
                      if (p.className !== classNameValue)
                          continue;
                  }
                  if (tagNameValue) {
                      var tn = p.tagName;
                      if (tn)
                          tn = tn.toUpperCase();
                      if (tn !== tagNameValue)
                          continue;
                  }
                  if (attributeName) {
                      var att = p.getAttribute(attributeName);
                      if (attributeValue === true) {
                          if (!att)
                              continue;
                      }
                      else if (attributeValue === false) {
                          if (att)
                              continue;
                      }
                      else {
                          if (att !== attributeValue)
                              continue;
                      }
                  }
                  return p;
              } while (p === p.parentNode);
          }
          return undefined;
      };
      /**
       * 判断是否溢出省略号
       * @param dom
       */
      DomUtils.isEllipsis = function (dom) {
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
      };
      /**
       * 浏览器类型对象
       */
      DomUtils.BROWSER = (function () {
          // 获取浏览器信息
          var ua = window.navigator.userAgent.toLowerCase();
          var s;
          var nav = { ie: 0, firefox: 0, chrome: 0, opera: 0, safari: 0 };
          // 初始化浏览器类型
          s = ua.match(/msie\s([\d.]+)/);
          if (s && s.length > 1)
              nav.ie = parseFloat(s[1]);
          s = ua.match(/trident.*rv:([\d.]+)/);
          if (s && s.length > 1)
              nav.ie = parseFloat(s[1]);
          s = ua.match(/firefox\/([\d.]+)/);
          if (s && s.length > 1)
              nav.firefox = parseFloat(s[1]);
          s = ua.match(/chrome\/([\d.]+)/);
          if (s && s.length > 1)
              nav.chrome = parseFloat(s[1]);
          s = ua.match(/opera.([\d.]+)/);
          if (s && s.length > 1)
              nav.opera = parseFloat(s[1]);
          s = ua.match(/version\/([\d.]+).*safari/);
          if (s && s.length > 1)
              nav.safari = parseFloat(s[1]);
          s = ua.match(/crios\/([\d.]+).*safari/);
          if (s && s.length > 1)
              nav.chrome = parseFloat(s[1]);
          // 返回对象
          return nav;
      })();
      return DomUtils;
  }());

  /**
   * 加密工具类
   */
  var EncryptionUtils = /** @class */ (function () {
      function EncryptionUtils() {
      }
      /**
       * 使用 MD5 加密算法加密字符串
       * @param {string} str 需要加密的字符串
       * @returns {string} 加密结果字符串
       */
      EncryptionUtils.md5 = function (str) {
          return "" + tsMd5.Md5.hashStr(str);
      };
      return EncryptionUtils;
  }());

  // 国际化工具类
  var LanguageUtils = /** @class */ (function () {
      function LanguageUtils() {
      }
      /**
       * 是否是国际化表头
       * @param col
       * @returns {boolean}
       */
      LanguageUtils.isCol = function (col) {
          return LanguageUtils.reg.test(col);
      };
      /**
       * 处理国际化时使用的特殊表头
       * @param cols 特殊表头： '$name:{en_US,zh_CN}'
       * @returns {string[]}
       */
      LanguageUtils.flatTableCols = function (cols) {
          var _this = this;
          // 返回结果
          var rs = [];
          // 遍历表头
          cols.forEach(function (col) {
              // 测试是否符合条件
              if (_this.reg.test(col)) {
                  // 获取key的match
                  var match = col.match(_this.reg);
                  // 开始解析
                  if (match === null || match === void 0 ? void 0 : match.length) {
                      var key_1 = match[0];
                      // 获取表头内容 JSON格式
                      var langCols = JSON.parse(col.replace(_this.reg, ''));
                      // 遍历列表并添加表头
                      langCols.forEach(function (langCol) {
                          // 添加转换后的表头到表头数据中
                          rs.push("" + key_1 + langCol);
                      });
                  }
              }
              else {
                  // 不符合的直接拼接上
                  rs.push(col);
              }
          });
          // 返回处理后的表头
          return rs;
      };
      /**
       * 处理国际化时使用的特殊数据
       * @param data
       * @returns {string[]}
       */
      LanguageUtils.flatTableData = function (data) {
          var _this = this;
          // 返回处理后的表头
          return data.map(function (row) {
              // 重组后的行
              var rs = [];
              // 遍历数据
              row.forEach(function (data) {
                  // 测试是否符合条件
                  if (typeof data === 'string' && _this.reg.test(data)) {
                      // 解析出来的数据列表
                      var dataList = JSON.parse(data.replace(_this.reg, ''));
                      // 遍历列表并添加数据
                      dataList.forEach(function (item) {
                          // 添加转换后的表头到表头数据中
                          rs.push(item);
                      });
                  }
                  else {
                      // 不符合的直接拼接上
                      rs.push(data);
                  }
              });
              return rs;
          });
      };
      // 特殊表头和数据用到的正则匹配符
      LanguageUtils.reg = /^\$\S+?:/;
      return LanguageUtils;
  }());

  var StorageUtils = /** @class */ (function () {
      function StorageUtils() {
      }
      /**
       * 使用本地资源存储数据
       * @export
       * @param {string} moduleName 模块名称
       * @param {string} key 数据键
       * @param {*} value 数据值（任意数据）
       */
      StorageUtils.localSave = function (moduleName, key, value) {
          window.localStorage.setItem(moduleName + '-' + key, JSON.stringify(value));
      };
      /**
       * 从本地资源读取数据（未读取到则返回 defaultValue）
       * @export
       * @param {string} moduleName 模块名称
       * @param {string} key 数据键
       * @param {*} [defaultValue=null] 默认返回数据（不设置则为 null）
       * @returns {*} 读取到的数据对象（已经转换为对象）
       */
      StorageUtils.localRead = function (moduleName, key, defaultValue) {
          if (defaultValue === void 0) { defaultValue = null; }
          var value = window.localStorage.getItem(moduleName + '-' + key);
          if (!value)
              return defaultValue;
          return JSON.parse(value) || defaultValue;
      };
      /**
       * 从本地资源移除数据
       * @export
       * @param {string} moduleName 模块名称
       * @param {string} key 数据键
       */
      StorageUtils.localRemove = function (moduleName, key) {
          window.localStorage.removeItem(moduleName + '-' + key);
      };
      /**
       * 从本地资源移除所有数据
       * @export
       */
      StorageUtils.localClear = function () {
          window.localStorage.clear();
      };
      /**
       * 使用当前浏览器进程存储本地数据
       * @export
       * @param {string} moduleName 模块名称
       * @param {string} key 数据键
       * @param {*} value 数据值（任意数据）
       */
      StorageUtils.sessionSave = function (moduleName, key, value) {
          window.sessionStorage.setItem(moduleName + '-' + key, JSON.stringify(value));
      };
      /**
       * 从当前浏览器进程读取本地数据（未读取到则返回 defaultValue）
       * @export
       * @param {string} moduleName 模块名称
       * @param {string} key 数据键
       * @param {*} [defaultValue=null] 默认返回数据（不设置则为 null）
       * @returns {*} 读取到的数据对象（已经转换为对象）
       */
      StorageUtils.sessionRead = function (moduleName, key, defaultValue) {
          if (defaultValue === void 0) { defaultValue = null; }
          var value = window.sessionStorage.getItem(moduleName + '-' + key);
          if (!value)
              return defaultValue;
          return JSON.parse(value) || defaultValue;
      };
      /**
       * 从当前浏览器进程移除数据
       * @export
       * @param {string} moduleName 模块名称
       * @param {string} key 数据键
       */
      StorageUtils.sessionRemove = function (moduleName, key) {
          window.sessionStorage.removeItem(moduleName + '-' + key);
      };
      /**
       * 从当前浏览器进程移除所有数据
       * @export
       */
      StorageUtils.sessionClear = function () {
          window.sessionStorage.clear();
      };
      /**
       * 使用当前浏览器 COOKIE 存储本地数据
       * @export
       * @param {string} moduleName 模块名称
       * @param {string} key 数据键
       * @param {*} value 数据值（任意数据）
       */
      StorageUtils.cookieSave = function (moduleName, key, value) {
          Cookies__default['default'].set(moduleName + '-' + key, JSON.stringify(value));
      };
      /**
       * 从当前浏览器 COOKIE 读取本地数据（未读取到则返回 null）
       * @export
       * @param {string} moduleName 模块名称
       * @param {string} key 数据键
       * @param {*} [defaultValue=null] 默认返回数据（不设置则为 null）
       * @returns {*} 读取到的数据对象（已经转换为对象）
       */
      StorageUtils.cookieRead = function (moduleName, key, defaultValue) {
          if (defaultValue === void 0) { defaultValue = null; }
          var value = Cookies__default['default'].get(moduleName + '-' + key);
          if (!value)
              return defaultValue;
          return JSON.parse(value) || defaultValue;
      };
      /**
       * 从当前浏览器 COOKIE 移除数据
       * @export
       * @param {string} moduleName 模块名称
       * @param {string} key 数据键
       */
      StorageUtils.cookieRemove = function (moduleName, key) {
          Cookies__default['default'].remove(moduleName + '-' + key);
      };
      return StorageUtils;
  }());

  // 样式处理工具类
  var StyleUtils = /** @class */ (function () {
      function StyleUtils() {
      }
      /**
       * 移除值的后缀
       * @param value
       * @returns {number}
       */
      StyleUtils.removeSuffix = function (value) {
          return typeof value === 'string'
              ? parseInt(value.replace(/(px)|(rem)/g, ''))
              : value;
      };
      /**
       * 获取根节点字体（px）
       * @return {number}
       */
      StyleUtils.getRootFontSize = function () {
          // 返回获取的计算结果
          return StyleUtils.removeSuffix(getComputedStyle(window.document.documentElement)['fontSize']);
      };
      /**
       * rem转px
       * @param value
       * @returns {number}
       */
      StyleUtils.remToPx = function (value) {
          // 获取基准值
          var baseFont = StyleUtils.getRootFontSize();
          // 返回rem
          return StyleUtils.removeSuffix(value) * baseFont;
      };
      /**
       * rem转px 带rem后缀
       * @param value
       * @returns {string}
       */
      StyleUtils.remToPxSuffix = function (value) {
          // 返回rem
          return StyleUtils.remToPx(value) + 'rem';
      };
      /**
       * px转rem
       * @param value
       * @returns {number}
       */
      StyleUtils.pxToRem = function (value) {
          // 获取基准值
          var baseFont = StyleUtils.getRootFontSize();
          // 返回rem
          return StyleUtils.removeSuffix(value) / baseFont;
      };
      /**
       * px转rem 带px后缀
       * @param value
       * @returns {string}
       */
      StyleUtils.pxToRemSuffix = function (value) {
          // 返回rem
          return StyleUtils.pxToRem(value) + 'px';
      };
      return StyleUtils;
  }());

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  // 皮肤工具类
  var ThemesUtils = /** @class */ (function () {
      function ThemesUtils() {
      }
      /**
       * 增加模块CSS 文件记录
       * @param modulePath CSS 导入模块地址（ '/assets/themes/app/module/' ）
       * @param theme 皮肤名称（ 'default' ）
       * @param files 需要导入的 CSS 文件数组（相对皮肤目录下的css文件，可附带相对目录，如: ['index.css', 'login/login.css', 'home.css'] 等）
       * @returns [Promise] 返回异步对象（不需要导入则直接返回 null）
       */
      ThemesUtils.addModuleCss = function (modulePath, theme, files) {
          // 获取文件信息数据
          var imported = ThemesUtils.cssFiles.get(modulePath);
          // 判断是否存在
          if (!imported) {
              // 创建集合
              imported = new Map();
              // 增加到集合
              ThemesUtils.cssFiles.set(modulePath, imported);
          }
          // 创建导入文件数组
          var urls = [];
          // 生成样式文件目录（ '/assets/themes/app/module/default/index.css' ）
          var urlPath = modulePath + theme + '/';
          // 遍历样式文件
          for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
              var file = files_1[_i];
              // 从记录集合内获取数据
              var fileCounts = imported.get(file);
              // 判断是否存在数据
              if (!fileCounts) {
                  // 不存在，设置到集合
                  imported.set(file, 1);
                  // 增加到导入数组
                  urls.push(urlPath + file);
              }
              else {
                  // 已经存在，增加数量
                  imported.set(file, fileCounts + 1);
              }
          }
          // 执行导入处理
          return ThemesUtils.importCSS(urls);
      };
      /**
       * 移除模块下的 CSS 处理
       * @param modulePath CSS 导入模块地址（ '/assets/themes/app/module/' ）
       * @param files 需要导入的 CSS 文件数组（相对皮肤目录下的css文件，可附带相对目录，如: ['index.css', 'login/login.css', 'home.css'] 等）
       */
      ThemesUtils.removeModuleCss = function (modulePath, files) {
          // 获取文件信息数据
          var imported = ThemesUtils.cssFiles.get(modulePath);
          // 判断是否存在
          if (!imported || files.length === 0)
              return;
          // 定义需要移除的模块文件数组
          var urls = [];
          // 遍历需要移除的文件
          for (var _i = 0, files_2 = files; _i < files_2.length; _i++) {
              var file = files_2[_i];
              // 获取文件导入次数
              var counts = imported.get(file);
              // 判断是否存在
              if (!counts)
                  continue;
              // 递减数量
              counts--;
              // 判断是否依然存在多个导入
              if (counts === 0) {
                  // 本次移除后相关模块已经全部销毁，增加到移除数组
                  urls.push({ path: modulePath, file: file });
                  // 移除集合内的数据
                  imported.delete(file);
              }
              else {
                  // 依然有其它模块使用样式文件，设置减少的数量
                  imported.set(file, counts);
              }
          }
          // 判断是否存在文件
          if (imported.size === 0) {
              // 模块文件已经被全部移除，从主集合内移除
              ThemesUtils.cssFiles.delete(modulePath);
          }
          // 移除文件处理
          ThemesUtils.exportCss(urls);
      };
      /**
       * 导入 CSS 文件处理（假如已经导入则返回 null）
       * @param urls CSS 文件完整地址
       * @returns [Promise] 返回异步对象（不需要导入则直接返回 null）
       */
      ThemesUtils.importCSS = function (urls) {
          // 判断是否需要导入
          if (!urls || urls.length === 0)
              return null;
          // 获取文件头对象
          var html = document.getElementsByTagName('html');
          // 判断是否有效
          if (!html || html.length === 0)
              return null;
          // 重新封装异步数据结果
          return new Promise(function (resolve, reject) {
              // 获取导入数量
              var count = urls.length;
              // 定义成功数量
              var success = 0;
              // 定义失败数量
              var errors = 0;
              // 遍历导入数据
              for (var _i = 0, urls_1 = urls; _i < urls_1.length; _i++) {
                  var url = urls_1[_i];
                  // 判断是否 CSS 文件
                  if (!url.toLowerCase().endsWith('.css'))
                      continue;
                  // 创建样式对象
                  var link = document.createElement('link');
                  // 绑定加载事件
                  link.onload = function () {
                      // 累加成功数量
                      success++;
                      // 判断是否加载完成
                      if (success + errors >= count) {
                          // 全部加载完成，回调数据
                          if (errors > 0) {
                              // 回调失败
                              reject(errors);
                          }
                          else {
                              // 回调成功
                              resolve(success);
                          }
                      }
                  };
                  // 加载失败后处理
                  link.onerror = function () {
                      // 累加失败数量
                      errors++;
                      // 判断是否加载完成
                      if (success + errors >= count) {
                          // 回调失败
                          reject(errors);
                      }
                  };
                  // 设置属性
                  link.rel = 'stylesheet';
                  link.type = 'text/css';
                  link.href = url;
                  // 增加元素到页面最后
                  html[0].appendChild(link);
              }
          });
      };
      /**
       * 移除模块的 CSS 文件处理
       * @param urls 地址数据数组
       */
      ThemesUtils.exportCss = function (urls) {
          // 判断是否有效
          if (urls.length === 0)
              return;
          // 获取所有样式
          var links = document.getElementsByTagName('link');
          // 判断是否有效
          if (!links || links.length === 0)
              return;
          // 获取页面域名和端口地址长度
          var domainLen = window.location.origin.length;
          // 定义移除数组
          var removes = [];
          var _loop_1 = function (i, c) {
              // 获取一个链接对象
              var link = links[i];
              // 判断是否 CSS 文件
              if (link.type && link.type.toLowerCase() === 'text/css') {
                  // 获取地址
                  var href = link.href;
                  // 截取文件相对地址（ '/assets/themes/app/module/default/index.css' ）
                  var cssPath_1 = href.substr(domainLen);
                  // 查找样式文件目录是否有效
                  var pos = urls.findIndex(function (value) {
                      // 判断是否从导入的模块路径开始
                      return cssPath_1.startsWith(value.path);
                  });
                  // 判断是否找到
                  if (pos === -1)
                      return "continue";
                  // 已经找到，获取模块目录( {path: '/assets/themes/app/module/', file: 'index.css'} )
                  var pathFile = urls[pos];
                  // 定义开始位置
                  var namePos = cssPath_1.indexOf('/', pathFile.path.length);
                  // 判断是否有效
                  if (namePos === -1)
                      return "continue";
                  // 获取 CSS 文件名称
                  var cssFile = cssPath_1.substr(namePos + 1);
                  // 判断是否一致
                  if (cssFile === pathFile.file) {
                      // 需要移除的 link，增加到移除数组
                      removes.push(link);
                  }
              }
          };
          // 遍历检测链接地址
          for (var i = 0, c = links.length; i < c; i++) {
              _loop_1(i);
          }
          // 遍历移除数据
          for (var _i = 0, removes_1 = removes; _i < removes_1.length; _i++) {
              var link = removes_1[_i];
              // 获取父节点
              var p = link.parentNode;
              // 移除对象
              if (p)
                  p.removeChild(link);
          }
      };
      /**
       * 变换皮肤目录处理
       * @param theme 皮肤名称
       */
      ThemesUtils.changeTheme = function (theme) {
          // 判断是否存在导入文件
          if (ThemesUtils.cssFiles.size === 0)
              return;
          // 获取所有样式
          var links = document.getElementsByTagName('link');
          // 判断是否有效
          if (!links || links.length === 0)
              return;
          // 获取页面域名和端口地址长度
          var domainLen = window.location.origin.length;
          // 获取模块目录数组
          var modulePaths = Array.from(ThemesUtils.cssFiles.keys());
          var _loop_2 = function (i, c) {
              // 获取一个链接对象
              var link = links[i];
              // 判断是否 CSS 文件
              if (link.type && link.type.toLowerCase() === 'text/css') {
                  // 获取地址
                  var href = link.href;
                  // 截取文件相对地址（ '/assets/themes/app/module/default/index.css' ）
                  var cssPath_2 = href.substr(domainLen);
                  // 查找样式文件目录是否有效
                  var pos = modulePaths.findIndex(function (value) {
                      // 判断是否从导入的模块路径开始
                      return cssPath_2.startsWith(value);
                  });
                  // 判断是否找到
                  if (pos === -1)
                      return "continue";
                  // 已经找到，获取模块目录( '/assets/themes/app/module/' )
                  var modulePath = modulePaths[pos];
                  // 定义开始位置
                  var namePos = cssPath_2.indexOf('/', modulePath.length);
                  // 判断是否有效
                  if (namePos === -1)
                      return "continue";
                  // 获取样式目录名称 ( 'default' )
                  var cname = cssPath_2.substring(modulePath.length, namePos);
                  // 判断是否一致
                  if (cname === theme)
                      return "continue";
                  // 获取模块下的样式文件，改变样式地址
                  link.href = modulePath + theme + cssPath_2.substr(namePos);
              }
          };
          // 遍历检测链接地址
          for (var i = 0, c = links.length; i < c; i++) {
              _loop_2(i);
          }
          // TODO: 顶部嵌入样式也要改
      };
      /**
       * 添加顶部嵌入样式
       * @param key
       * @param path
       * @param theme
       * @returns {Promise<void>}
       */
      ThemesUtils.addStyle = function (key, path, theme) {
          if (theme === void 0) { theme = 'default'; }
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  return [2 /*return*/, fetch(path)
                          .then(function (rs) { return rs.text(); })
                          .then(function (text) {
                          var style = document.createElement('style');
                          style.setAttribute('type', 'text/css');
                          style.setAttribute('theme', theme);
                          style.setAttribute('id', key);
                          style.appendChild(document.createTextNode(text));
                          document.head.append(style);
                      })];
              });
          });
      };
      /**
       * 获取主题下的资源地址
       * @param url 资源相对地址
       * @param config 模块配置
       * @param theme 主题 默认 'default'，不区分主题的话传 ''
       * @return {`/${string}`}
       */
      ThemesUtils.getAssetUrl = function (url, config, theme) {
          if (theme === void 0) { theme = 'default'; }
          var app = config.app, module = config.module, themesPath = config.themesPath;
          return "/" + [themesPath, app, module, theme, url]
              .filter(function (str) { return !!str; })
              .map(function (str) { return str.replace(/^\/|\/$/g, ''); })
              .join('/');
      };
      /**
       * 已经导入的 CSS 文件名称集合（键：目录路径(不包括皮肤名称)；值：文件名称及导入次数集合）
       */
      ThemesUtils.cssFiles = new Map();
      // 已经导入的顶部内嵌样式key列表
      ThemesUtils.headStyles = [];
      return ThemesUtils;
  }());

  // 数据转换工具类
  var TransformUtils = /** @class */ (function () {
      function TransformUtils() {
      }
      /**
       * 将返回的数组转换为树形数据
       * @param arr 要处理的数组
       * @param options 节点关系配置
       * @returns {T[]}
       */
      TransformUtils.arrayToTree = function (arr, options) {
          // 获取绑定参数
          var _a = options !== null && options !== void 0 ? options : {}, _b = _a.key, key = _b === void 0 ? 'id' : _b, _c = _a.children, children = _c === void 0 ? 'children' : _c, _d = _a.parent, parent = _d === void 0 ? 'pid' : _d;
          // 转换为树数据
          return arr.reduce(function (tree, node) {
              var _a;
              // 是否有父级
              var p = arr.find(function (i) { return i[key] === node[parent]; });
              // 是顶层的话
              if (!p) {
                  // 添加根节点到数中
                  tree.push(node);
              }
              else {
                  // 已经有子节点的情况下添加节点到子节点中
                  if ((_a = p[children]) === null || _a === void 0 ? void 0 : _a.length) {
                      p[children].push(node);
                  }
                  else {
                      // 设置子节点
                      p[children] = [node];
                  }
              }
              // 返回树数据
              return tree;
          }, []);
      };
      return TransformUtils;
  }());

  /**
   * 显示组件基类
   */
  var VueBase = /** @class */ (function (_super) {
      __extends(VueBase, _super);
      function VueBase() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * 是否已经导入了 CSS 文件标识
           */
          _this.cssImported = false;
          /**
           * 获取主题下的资源地址
           * @type {(url: string, config: ModuleConfig, theme?: string) => string}
           */
          _this.getAssetUrl = ThemesUtils.getAssetUrl;
          return _this;
      }
      /**
       * 导入 CSS 文件处理（在组件的生命周期函数 created() 内调用 ）
       * @param vue 当前 VUE 组件对象
       * @param files css 文件名称数组（相对皮肤目录下的css文件，可附带相对目录，如: ['index.css', 'login/login.css', 'home.css'] 等）
       * @param config 模块配置信息
       * @param theme 当前皮肤名称（可选，默认：'default'）
       */
      VueBase.prototype.importCss = function (vue, files, config, theme) {
          var _this = this;
          if (theme === void 0) { theme = 'default'; }
          // 验证数据是否有效
          if (!vue || !files || files.length === 0 || !config) {
              // 设置显示
              vue.cssImported = true;
              // 退出处理
              return;
          }
          // 增加生命周期检测
          // vue.$once('hook:mounted', () => {
          //   // 判断是否已经导入了 CSS
          //   if (vue.cssImported) return;
          //   // 获取当前组件对象
          //   const el = vue.$el;
          //   // 判断是否有效
          //   if (el && el instanceof HTMLElement) {
          //     // 隐藏对象
          //     el.style.visibility = 'hidden';
          //   }
          // });
          vue.$once('hook:created', function () {
              _this.$nextTick().then(function () {
                  // 判断是否已经导入了 CSS
                  if (vue.cssImported)
                      return;
                  // 获取当前组件对象
                  var el = vue.$vnode.elm;
                  // 判断是否有效
                  if (el && el instanceof HTMLElement) {
                      // 隐藏对象
                      el.style.visibility = 'hidden';
                  }
              });
          });
          // 获取样式目录
          var path = config.themesPath;
          // 修正数据
          if (!path)
              path = '/assets/themes/';
          // 判断是否以分隔符开始
          if (!path.startsWith('/'))
              path = '/' + path;
          // 判断是否以分隔符结束
          if (!path.endsWith('/'))
              path += '/';
          // 修正皮肤名称
          if (!theme || theme.length === 0)
              theme = 'default';
          // 生成模块目录
          var modulePath = path + config.app + '/' + config.module + '/';
          // 增加销毁时处理
          vue.$once('hook:beforeDestroy', function () {
              // 移除已经导入的模块样式文件
              ThemesUtils.removeModuleCss(modulePath, files);
          });
          // 导入样式
          var promise = ThemesUtils.addModuleCss(modulePath, theme, files);
          // 判断是否需要导入
          if (!promise) {
              // 延时设置标识
              vue.$nextTick().then(function () {
                  // 显示界面
                  vue.showInterface(vue);
              });
              // 退出处理
              return;
          }
          // 正在导入数据，隐藏当前组件
          promise.then(function () {
              // 加载成功，显示组件
              vue.showInterface(vue);
          }, function () {
              // 加载失败，显示组件
              vue.showInterface(vue);
          });
      };
      /**
       * 显示界面处理
       * @param vue 当前组件
       */
      VueBase.prototype.showInterface = function (vue) {
          // 设置显示
          vue.cssImported = true;
          // 获取当前组件对象
          var el = vue.$el;
          // 判断是否有效
          if (el && el instanceof HTMLElement) {
              // 隐藏对象
              el.style.visibility = 'visible';
          }
          // 发布事件
          this.$emit('cssImported');
      };
      return VueBase;
  }(vuePropertyDecorator.Vue));

  var AppState = /** @class */ (function (_super) {
      __extends(AppState, _super);
      /**
       * 构造函数
       */
      function AppState(module) {
          var _this = _super.call(this, module) || this;
          // ------------------------------- 存储的数据 ------------------------------------
          // appId 当前应用标识
          _this.appId = 'app';
          // 版本不需要保存，直接从环境配置获取
          _this.version = '1.0.0';
          // 当前语言标识
          _this.lang = '';
          // 当前系统可以使用的语言列表
          _this.langList = [];
          // 语言列表详细信息
          _this.localeList = [];
          // 登录记录列表
          _this.loginUsers = [];
          // 当前皮肤
          _this.theme = 'default';
          // 支持的皮肤列表
          _this.themeList = [];
          // 各模块配置数据
          _this.homeSetting = { sidebarStatus: 1 };
          // 获取根目录
          var rPath = '/';
          // 判断是否有效
          if (!rPath)
              rPath = '/';
          // 修正最终目录
          if (!rPath.endsWith('/'))
              rPath += '/';
          // 读取数据
          var data = StorageUtils.localRead(_this.appId, 'settings', {});
          // 判断是否有效
          if (!data)
              return _this;
          // 设置数据
          _this.lang = data.lang || BrowserUtils.getDefaultLanguageKey();
          _this.theme = data.theme || 'default';
          _this.loginUsers = data.loginUsers || [];
          return _this;
      }
      // ------------------------------- 更新数据方法 ------------------------------------
      /**
       * 设置语言标识
       * @param {string} lang 语言标识
       */
      AppState.prototype.setLang = function (lang) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  this.UPDATE_SETTINGS({ lang: lang });
                  return [2 /*return*/];
              });
          });
      };
      /**
       * 已弃用，请使用setLocaleList
       * 设置国际化语言列表
       * @deprecated
       * @param langList 语言列表
       * @return {Promise<void>}
       */
      AppState.prototype.setLangList = function (langList) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  // eslint-disable-next-line no-console
                  console.warn('AxVuexApp.setLangList方法已弃用，请使用AxVuexApp.setLocaleList设置国际化');
                  this.UPDATE_SETTINGS({ langList: langList });
                  return [2 /*return*/];
              });
          });
      };
      /**
       * 设置国际化语言列表
       * @param localeList 语言列表
       * @return {Promise<void>}
       */
      AppState.prototype.setLocaleList = function (localeList) {
          return __awaiter(this, void 0, void 0, function () {
              var defaultLang, langList;
              var _this = this;
              return __generator(this, function (_a) {
                  defaultLang = '';
                  langList = localeList.map(function (locale) {
                      // 设置默认值
                      if (locale.defaulted) {
                          defaultLang = locale.code || '';
                      }
                      return locale.code;
                  });
                  // 判断当前国际化是否在可选列表中，在列表中不做处理，不在的话设置默认值
                  if (!localeList.find(function (item) { return _this.lang === item.code; }) &&
                      localeList.length) {
                      // 更新当前国际化语言
                      this.UPDATE_SETTINGS({ lang: defaultLang !== null && defaultLang !== void 0 ? defaultLang : localeList[0].code });
                  }
                  // 设置到langList中
                  this.UPDATE_SETTINGS({ langList: langList });
                  // 更新国际化列表
                  this.UPDATE_SETTINGS({ localeList: localeList });
                  return [2 /*return*/];
              });
          });
      };
      /**
       * 设置当前主题
       * @param {string} theme 当前主题
       */
      AppState.prototype.setTheme = function (theme) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  this.UPDATE_SETTINGS({ theme: theme });
                  return [2 /*return*/];
              });
          });
      };
      /**
       * 设置主题列表
       * @param themeList 主题列表
       * @return {Promise<void>}
       */
      AppState.prototype.setThemeList = function (themeList) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  this.UPDATE_SETTINGS({ themeList: themeList });
                  return [2 /*return*/];
              });
          });
      };
      /**
       * 设置登录用户历史记录
       * @param {IUserData[]} loginUsers 登录用户历史记录
       */
      AppState.prototype.setLoginUsers = function (loginUsers) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  this.UPDATE_SETTINGS({ loginUsers: loginUsers });
                  return [2 /*return*/];
              });
          });
      };
      /**
       * 设置首页设置数据
       * @param homeSetting 首页设置数据对象
       */
      AppState.prototype.setHomeSetting = function (homeSetting) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  this.UPDATE_SETTINGS({ homeSetting: homeSetting });
                  return [2 /*return*/];
              });
          });
      };
      // ------------------------------- 提交数据方法 ------------------------------------
      /**
       * 提交数据处理
       */
      AppState.prototype.UPDATE_SETTINGS = function (value) {
          var _this = this;
          // 设置绑定数据
          Object.assign(this, value);
          // 定义存储的数据对象
          var data = {};
          // 遍历获取数据
          Object.keys(this).forEach(function (key) {
              // 获取一个值
              var v = _this[key];
              // 判断是否是方法
              if (!v || typeof v === 'function')
                  return;
              // 设置到对象
              data[key] = v;
          });
          // 保存配置数据
          StorageUtils.localSave(this.appId, ELocalKey.SETTING, data);
      };
      __decorate([
          vuexModuleDecorators.Action
      ], AppState.prototype, "setLang", null);
      __decorate([
          vuexModuleDecorators.Action
      ], AppState.prototype, "setLangList", null);
      __decorate([
          vuexModuleDecorators.Action
      ], AppState.prototype, "setLocaleList", null);
      __decorate([
          vuexModuleDecorators.Action
      ], AppState.prototype, "setTheme", null);
      __decorate([
          vuexModuleDecorators.Action
      ], AppState.prototype, "setThemeList", null);
      __decorate([
          vuexModuleDecorators.Action
      ], AppState.prototype, "setLoginUsers", null);
      __decorate([
          vuexModuleDecorators.Action
      ], AppState.prototype, "setHomeSetting", null);
      __decorate([
          vuexModuleDecorators.Mutation
      ], AppState.prototype, "UPDATE_SETTINGS", null);
      AppState = __decorate([
          vuexModuleDecorators.Module({ name: 'app' })
      ], AppState);
      return AppState;
  }(vuexModuleDecorators.VuexModule));

  var UserState = /** @class */ (function (_super) {
      __extends(UserState, _super);
      /**
       * 构造函数
       */
      function UserState(module) {
          var _this = _super.call(this, module) || this;
          // ------------------------------- 存储的数据 ------------------------------------
          // 本地存储时用到的模块名称
          _this.appId = 'user';
          _this.id = '';
          _this.account = '';
          _this.name = '';
          _this.image = '';
          _this.token = '';
          _this.isLogin = false;
          _this.isAdmin = false;
          _this.roles = new Map();
          // 读取数据
          var data = StorageUtils.sessionRead(_this.appId, ESessionKey.SESSION);
          // 判断是否有效
          if (!data)
              return _this;
          // 设置数据
          _this.id = data.id;
          _this.account = data.account;
          _this.name = data.name;
          _this.image = data.image;
          _this.token = data.token;
          _this.isLogin = data.isLogin;
          _this.isAdmin = data.isAdmin;
          // 清理集合
          _this.roles.clear();
          // 判断是否有效
          if (data.roles && data.roles.length > 0) {
              // 获取数据数组
              var roles = data.roles;
              // 遍历设置数据
              roles.forEach(function (role) {
                  // 判断是否有效
                  if (role && role.app) {
                      // 增加到集合
                      _this.roles.set(role.app, role.ls);
                  }
              });
          }
          return _this;
      }
      Object.defineProperty(UserState.prototype, "userData", {
          // ------------------------------- 获取数据方法 ------------------------------------
          /**
           * 获取最后登录的用户数据（不存在则返回 null）
           * @returns {IUserData} 用户数据对象
           */
          get: function () {
              // 判断是否有效
              if (!this.account || this.account.length === 0) {
                  // 读取并返回数据
                  return StorageUtils.localRead(this.appId, ELocalKey.LAST_LOGIN, null);
              }
              else {
                  // 返回数据
                  return {
                      id: this.id,
                      account: this.account,
                      name: this.name,
                      image: this.image,
                  };
              }
          },
          enumerable: false,
          configurable: true
      });
      // ------------------------------- 更新数据方法 ------------------------------------
      /**
       * 设置用户登录状态
       * @param user
       * @return {Promise<void>}
       */
      UserState.prototype.setLogin = function (user) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  this.USER_LOGIN({
                      id: user.id,
                      account: user.account,
                      name: user.name,
                      image: user.image,
                      token: user.token,
                      isLogin: !!user.token && user.token.length > 0,
                      isAdmin: user.admin,
                      roles: user.roles,
                  });
                  return [2 /*return*/];
              });
          });
      };
      /**
       * 设置退出登录
       */
      UserState.prototype.setLogout = function () {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  // 退出登录
                  this.USER_LOGIN({
                      id: this.id,
                      account: this.account,
                      name: this.name,
                      image: this.image,
                      token: '',
                      isLogin: false,
                      isAdmin: false,
                      roles: null,
                  });
                  return [2 /*return*/];
              });
          });
      };
      // ------------------------------- 提交数据方法 ------------------------------------
      /**
       * 设置用户登录数据
       * @private
       * @param user
       */
      UserState.prototype.USER_LOGIN = function (user) {
          var _this = this;
          // 设置数据
          this.id = user.id;
          this.account = user.account;
          this.name = user.name;
          this.image = user.image;
          this.token = user.token;
          this.isLogin = user.isLogin;
          this.isAdmin = user.isAdmin;
          // 清理集合
          this.roles.clear();
          // 判断是否有效
          if (user.roles && user.roles.length > 0) {
              // 获取数据数组
              var roles = user.roles;
              // 遍历设置数据
              roles.forEach(function (role) {
                  // 增加到集合
                  _this.roles.set(role.app, role.ls);
              });
          }
          // 创建存储数据
          var data = {
              id: this.id,
              account: this.account,
              name: this.name,
              image: this.image,
          };
          // 存储数据
          StorageUtils.localSave(this.appId, ELocalKey.LAST_LOGIN, data);
          // 生成进程缓存数据
          var sData = {
              id: this.id,
              account: this.account,
              name: this.name,
              image: this.image,
              token: this.token,
              isLogin: this.isLogin,
              isAdmin: this.isAdmin,
              roles: user.roles,
          };
          // 保存到进程数据
          StorageUtils.sessionSave(this.appId, ESessionKey.SESSION, sData);
      };
      __decorate([
          vuexModuleDecorators.Action
      ], UserState.prototype, "setLogin", null);
      __decorate([
          vuexModuleDecorators.Action
      ], UserState.prototype, "setLogout", null);
      __decorate([
          vuexModuleDecorators.Mutation
      ], UserState.prototype, "USER_LOGIN", null);
      UserState = __decorate([
          vuexModuleDecorators.Module({ name: 'user' })
      ], UserState);
      return UserState;
  }(vuexModuleDecorators.VuexModule));

  Vue__default['default'].use(Vuex__default['default']);
  var store = new Vuex__default['default'].Store({
      modules: {
          app: AppState,
          user: UserState,
      },
  });
  /**
   * 应用数据模块
   */
  var AppModule = vuexModuleDecorators.getModule(AppState, store);
  /**
   * 用户数据模块
   */
  var UserModule = vuexModuleDecorators.getModule(UserState, store);

  exports.AxBrowserUtils = BrowserUtils;
  exports.AxConfig = index$3;
  exports.AxConst = index$2;
  exports.AxCore = index$1;
  exports.AxDispatcher = Dispatcher;
  exports.AxDomUtils = DomUtils;
  exports.AxEncryptionUtils = EncryptionUtils;
  exports.AxEvent = IEvent;
  exports.AxLanguage = Language;
  exports.AxLanguageUtils = LanguageUtils;
  exports.AxLocale = Locale;
  exports.AxMenu = AxMenu;
  exports.AxRequest = Request;
  exports.AxStorageUtils = StorageUtils;
  exports.AxStringUtils = StringUtils;
  exports.AxStyleUtils = StyleUtils;
  exports.AxThemesUtils = ThemesUtils;
  exports.AxTransformUtils = TransformUtils;
  exports.AxTypes = index;
  exports.AxVueBase = VueBase;
  exports.AxVuexApp = AppModule;
  exports.AxVuexUser = UserModule;
  exports.AxWebsocket = InitWebSocket;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
