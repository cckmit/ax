import { HomeSetting, ThemeOption } from './app';

/**
 * 应用程序状态数据接口
 */
export interface IAppState {
  /**
   * 应用程序版本
   */
  version: string;
  /**
   * 当前默认语言标识
   */
  lang: string;
  /**
   * 当前系统可以使用的语言列表
   */
  langList: string[];
  /**
   * 语言列表详细信息
   */
  localeList: IAppLocale[];
  /**
   * 当前主题标识 code
   */
  theme: string;
  /**
   * 主题列表
   */
  themeList: ThemeOption[];
  /**
   * 登录成功用户历史记录
   */
  loginUsers: any[];
  /**
   * 首页配置数据
   */
  homeSetting: HomeSetting;
}

/**
 * 用户状态对象定义
 */
export interface IUserState {
  /**
   * 机构序号
   */
  id: string;
  /**
   * 用户账号
   */
  account: string;
  /**
   * 用户名称
   */
  name: string;
  /**
   * 用户头像图片地址
   */
  image: string;
  /**
   * 用户登录令牌
   */
  token: string;
  /**
   * 是否已经登录
   */
  isLogin: boolean;
  /**
   * 是否系统管理员账号
   */
  isAdmin: boolean;
  /**
   * 权限集合（键：应用标识；值：模块权限数据数组）
   */
  roles: Map<string, number[]>;
}

// 根项目使用的vuex modules类型定义
export interface IRootState {
  app: IAppState;
  user: IUserState;
}

// 全局国际化详细信息
export interface IAppLocale {
  // 国际化语言代号
  code: string;
  // 国际化语言名称
  name: string;
  // 是否默认
  defaulted?: boolean;
}
