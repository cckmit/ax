// sessionStorage存储用到的key
export enum ESessionKey {
  // 进程数据 FIXME: 不知道是啥，先存着
  SESSION = 'session',
  // 用户状态信息
  USER_STATE = 'session',
}

// localStorage存储用到的key
export enum ELocalKey {
  // 最近登录的用户
  LAST_LOGIN = 'last-login',
  // 配置
  SETTING = 'settings',
}
