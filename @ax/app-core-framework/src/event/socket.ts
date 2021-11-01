import { EWSType } from '@/const';
import { IListener } from '@/interfaces/event';
import { StringUtils } from '@/utils/string-utils';
import Dispatcher, { IEvent } from '.';
import { WSMsg, WSOptions } from '@/interfaces/socket';

// WebSocket服务
export default class InitWebSocket {
  // 服务器地址
  private readonly url: string;

  // 连接锁定标识
  private lockReconnect: boolean;

  // 服务对象
  private websocket: WebSocket | undefined;

  // 参数
  private params: { [key: string]: any } | null;

  // 配置
  private options: WSOptions;

  // 事件处理器对象
  private dispatcher: Dispatcher;

  // 是否显示log，用于调试
  private readonly showLog: boolean;

  // 重连间隔，单位毫秒
  private readonly autoReconnect: number;

  /**
   * constructor
   * @param url 连接地址
   * @param params 地址参数
   * @param options 额外参数
   */
  constructor(
    url: string,
    params: { [key: string]: any } | null = null,
    options: WSOptions = {}
  ) {
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
  private msgTransform(msg: string): WSMsg | null {
    try {
      // 处理消息
      return JSON.parse(msg) as WSMsg;
    } catch (e) {
      this.log(`数据格式有误：${msg}`);
      return null;
    }
  }

  /**
   * 日志
   */
  private log(...args: any[]) {
    if (this.showLog) {
      console.log(...args);
    }
  }

  /**
   * 获取websocket对象
   * @returns {null}
   */
  public getWebsocket(): WebSocket | undefined {
    return this.websocket;
  }

  /**
   * 发送消息
   * @param data
   */
  public send(data: any): void {
    if (!this.websocket) {
      this.log('websocket服务未启动');
      return;
    }
    this.websocket.send(data);
  }

  /**
   * 事件监听
   * @param type 时间类型
   * @param fn 触发方法
   * @param priority 优先级
   * @returns {InitWebSocket}
   */
  public on(type: string, fn: IListener, priority: number = 0) {
    if (
      type != null &&
      typeof type !== 'undefined' &&
      fn != null &&
      typeof fn !== 'undefined'
    ) {
      this.dispatcher.on(type, fn, priority);
    }
    return this;
  }

  /**
   * 删除监听
   * @param type
   * @param fn
   * @returns {InitWebSocket}
   */
  public remove(type: string, fn: IListener) {
    if (
      type != null &&
      typeof type !== 'undefined' &&
      fn != null &&
      typeof fn !== 'undefined'
    ) {
      this.dispatcher.remove(type, fn);
    }
    return this;
  }

  /**
   * ws事件处理
   */
  public initEventHandle() {
    if (!this.websocket) {
      this.log('WebSocket 服务未启动');
      return;
    }

    // ws连接成功
    this.websocket.onopen = (e: Event) => {
      this.log('WebSocket 连接成功: ', e);
      this.dispatcher.trigger(new IEvent(e.target, EWSType.OPEN, e));
    };

    // ws连接出错
    this.websocket.onerror = (e: Event) => {
      this.log('WebSocket 连接发生错误: ', e);
      this.dispatcher.trigger(new IEvent(e.target, EWSType.ERROR, e));
    };

    // ws数据接收
    this.websocket.onmessage = (e: MessageEvent) => {
      this.log('WebSocket 收到消息: ', e);
      // 处理消息，处理方法可以在options中自定义
      const msg: WSMsg | null = this.msgTransform(e.data);
      if (msg) {
        // 返回消息处理
        this.dispatcher.trigger(new IEvent(e.target, msg.code, msg.data));
      } else {
        // 触发无效帧的事件
        this.dispatcher.trigger(new IEvent(e.target, EWSType.INVALID, e));
      }
    };

    // ws关闭连接
    this.websocket.onclose = (e: CloseEvent) => {
      this.log(`WebSocket 连接关闭: `, e);
      this.dispatcher.trigger(new IEvent(e.target, EWSType.CLOSE, e));
      // 重连
      this.reconnect();
    };

    // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    // window.onbeforeunload = function() {
    //   this.websocket.close()
    // }
  }

  /**
   * 创建连接
   */
  public connect() {
    try {
      if ('WebSocket' in window) {
        // 创建连接
        this.websocket = new WebSocket(
          this.url +
            (this.params ? StringUtils.queryStringify(this.params, true) : ''),
          this.options.protocols
        );
      } else {
        // 提示无法连接
        alert('浏览器版本过低，请升级您的浏览器');
        return;
      }
      // 初始化事件处理
      this.initEventHandle();
    } catch (e) {
      // 尝试重新连接
      this.reconnect();
    }
  }

  /**
   * 重连
   */
  reconnect() {
    // 锁定状态下不重连
    if (this.lockReconnect) return;
    // 开启重连锁定
    this.lockReconnect = true;
    // 没连接上会一直重连，设置延迟避免请求过多
    setTimeout(() => {
      // 连接
      this.connect();
      // 控制台提示
      this.log(`WebSocket 正在重连，当前时间 ${new Date()}`);
      // 解除重连锁定
      this.lockReconnect = false;
    }, this.autoReconnect);
  }
}
