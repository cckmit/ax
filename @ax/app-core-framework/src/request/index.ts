import { ErrorCode, HttpCode, ResultCode } from '@/const/http';
import { FRequestOption, IRequestConfig } from '@/interfaces';
import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';

// 请求服务
export default class Request {
  constructor(config: IRequestConfig) {
    // 设置默认值，默认超时时间2分钟
    const defaultConfig: AxiosRequestConfig = {
      timeout: 120000,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    // 合并配置
    this.config = Object.assign(defaultConfig, config);

    // 创建请求对象
    this.service = axios.create(this.config);

    // 配置请求对象
    this.service.interceptors.request.use(
      (config) => {
        // data实际传递的是请求的配置，在拦截器再次处理
        if (config.data) {
          // 获取请求数据
          const {
            params,
            data,
            options,
            requestConfig,
          }: {
            params?: any;
            data: any;
            options: FRequestOption;
            requestConfig: AxiosRequestConfig;
          } = config.data;
          // 设置options信息
          if (options.lang) {
            config.headers['Accept-Language'] = options.lang;
          }
          if (options.token) {
            config.headers['AX-Token'] = options.token;
          }
          if (options.headers) {
            for (const key in options.headers) {
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
      (error) => Promise.reject(error)
    );

    // 配置响应对象
    this.service.interceptors.response.use(
      (response) => {
        // 判断是否存在请求数据
        if (response.data) {
          // 获取响应结果（格式：{code,data,desc,ref}）
          const res = response.data;
          // 判断是否有效
          if (!res) {
            // 无效
            return Promise.reject({
              errorCode: ErrorCode.EMPTY,
            });
          } else if (res.code !== ResultCode.OK) {
            // 响应失败，也返回数据，方便前端判断错误并处理
            return Promise.reject(res);
          } else {
            // 响应成功
            return res.data;
          }
        } else {
          // 直接返回内容
          return response.data;
        }
      },
      /**
       * http 错误的处理
       * @param error
       * @returns {Promise<void>}
       */
      (error) => {
        // 登录失效的处理
        if (
          error.response &&
          (error.response.status === HttpCode.UNAUTHORIZED ||
            error.response.status === HttpCode.LOGIN_ERROR ||
            error.response.status === HttpCode.LOGIN_FAILED)
        ) {
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
      }
    );
  }

  // 请求配置
  private readonly config: IRequestConfig;

  // 请求服务
  private readonly service: AxiosInstance;

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
  public http<T>(
    method: Method,
    url: string,
    params: any,
    data: any,
    options: FRequestOption = {},
    requestConfig: AxiosRequestConfig = {}
  ): Promise<T> {
    return new Promise((resolve: any, reject: any) => {
      this.service({
        url,
        method,
        data: {
          params,
          data,
          options,
          requestConfig,
        },
      }).then(
        (res: any) => {
          // 输出数据
          resolve(res);
        },
        (error: any) => {
          // 输出错误
          reject(error);
        }
      );
    });
  }
}
