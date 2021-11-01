import { AxiosRequestConfig } from 'axios';

// 基本配置 完整
export interface IRequestConfig extends AxiosRequestConfig {
  // 请求地址
  baseURL: string;
  // 超时设置时间
  timeout?: number;
  // 是否需要凭证（后端跨域接口的要求）
  withCredentials?: boolean;
  // 如果登录失效时重定向处理
  redirect?(rs: any): void;
}

// 请求额外配置
export interface FRequestOption {
  // 国际化标志，默认对应的字段时
  lang?: string;
  // 身份验证token，默认对应header里的 Ax-Token，不使用该字段时在headers中定义
  token?: string;
  // 额外请求头设置
  headers?: {
    [key: string]: string;
  };
}

// 全局window对象下面挂载的配置格式
export interface IConfig {
  [key: string]: string;
}
