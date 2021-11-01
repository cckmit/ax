// webSocket配置
export interface WSOptions {
  // 是否显示log，调试使用
  showLog?: boolean;
  // 自动连接
  autoConnect?: boolean;
  // 自动重连间隔， 单位毫秒
  autoReconnect?: number;
  // ws协议
  protocols?: string | string[];
  // 自定义的数据转换方法
  transform?: (msg: string) => WSMsg | null;
}

// websocket转换后的数据格式定义
export interface WSMsg {
  // 事件标识code，用于事件返回的type
  code: string;
  // 事件数据
  data: any;
}
