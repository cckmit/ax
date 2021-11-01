/**
 * api post 请求返回 模块响应状态码
 */
export enum ResultCode {
  /**
   * 默认为未知状态
   */
  UNKNOWN = 0,
  /**
   * 成功状态码
   */
  OK = 1,
  /**
   * 一般失败状态码
   */
  FAILED = 2,
  /**
   * 内部异常状态码
   */
  EXCEPTION = 3,
  /**
   * 响应超时
   */
  TIMEOUT = 4,
  /**
   * 数据无效
   */
  INVALID = 5,
  /**
   * 运行时错误
   */
  RUNTIME = 6,
  /**
   * 编程错误
   */
  PROGRAMMING = 7,
}

/**
 * 前端定义的错误码
 */
export enum ErrorCode {
  // 需要重定向
  REDIRECT,
  // 空的返回内容
  EMPTY,
}

// http代码
export enum HttpCode {
  // 无效的登录凭证
  UNAUTHORIZED = 401,
  // 登录有问题
  LOGIN_ERROR = 498,
  // 登录失败
  LOGIN_FAILED = 499,
}
