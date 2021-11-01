// Http配置
export default class HttpConfig<Host> {
  constructor(options: { host: Host }) {
    // 配置host
    this.host = options.host;
    // 获取全局window对象
    const win: any = window;
    // 海阔去全局配置
    const host: Host | undefined = win.GLOBAL_CONFIG?.host;
    // 如果有全局的配置的情况下使用全局配置
    if (host) {
      Object.assign(this.host, host);
    }
  }

  // 请求host
  public host: Host;
}
