// actor服务
export class ActorBase {
  /**
   * 创建一个actor
   * @param request
   * @returns {{_<T extends any>(cmd: string, ...args: any[]): Promise<T>, new(): {}, prototype: {}}}
   */
  public static create(request: any) {
    // 返回actor基类
    return class {
      /**
       * 用于测试的方法
       * @param cmd
       * @param args
       * @returns {any}
       */
      public static _<T extends any>(cmd: string, ...args: any[]): Promise<T> {
        console.warn(
          `正在使用测试API\nACTOR：${this.name}\n指令：${cmd}\n ⚠ 请在代码提交前切换到正式API ⚠`
        );
        return request(cmd, ...args);
      }
    };
  }

  /**
   * 混合请求头
   * @param def
   * @param extend
   * @returns {{[p: string]: any}}
   */
  public static mixinHeader(
    def: { [key: string]: any },
    extend: { [key: string]: any }
  ) {
    const headers = Object.assign(def, extend);
    Object.keys(headers).forEach((key) => {
      if (headers[key] === undefined) {
        delete headers[key];
      }
    });
    return headers;
  }
}
