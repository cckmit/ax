import { AxiosRequestConfig } from 'axios';

/**
 * 请求方法定义
 */
export type RequestFunc = <T>(data: {
  cmd: string;
  args: any[];
  config?: RequestConfig;
}) => Promise<T>;

/**
 * 单次请求的额外配置
 */
export type RequestConfig = {
  // 自定义的请求头
  headers?: { [key: string]: any };
  // axios请求配置（注意这个会覆盖掉前面的配置）
  axiosConfig?: AxiosRequestConfig;
};

/**
 * 生成Actor
 * @returns {((...args: any[]) => Promise<void>) | {} | IActorList}
 */
export function generateActor(request: RequestFunc, config?: RequestConfig) {
  // eslint-disable-next-line no-console
  return new Proxy(
    {},
    {
      /**
       * 拦截指令，改为直接返回request请求
       * @param target
       * @param cmd 指令（接口路由）
       * @returns {(...args: any[]) => Promise<void>}
       */
      get(target: {}, cmd: string): any {
        // 返回对应的方法
        return (...args: any[]): Promise<void> => {
          // 是否找到对应的cmd
          if (cmd) {
            // 找到的话返回请求
            return request({
              cmd,
              args,
              config,
            });
          } else {
            // 没找打的话在控制台提示
            // eslint-disable-next-line no-console
            console.warn(
              `无效的指令\n` +
                `指令：${cmd}\n` +
                ` ⚠ 请资讯前后端相关人员处理 ⚠`
            );
            return Promise.reject();
          }
        };
      },
    }
  );
}

/**
 * 生成测试接口
 * @param request
 * @param warn
 * @returns {(cmd: string, ...args: any[]) => Promise<unknown>}
 */
export function generateTest(request: RequestFunc, warn: boolean = true) {
  return function (cmd: string, ...args: any[]) {
    if (warn) {
      // eslint-disable-next-line no-console
      console.warn(
        `正在使用测试API\n` +
          `指令：${cmd}\n` +
          ` ⚠ 请在代码提交前切换到正式API ⚠`
      );
    }
    return request({
      cmd,
      args,
    });
  };
}
