/**
 * 用户数据对象定义
 */
export interface IUserData {
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
}

/**
 * 用户权限对象定义
 */
export interface IUserRole {
  /**
   * 所属应用标识
   */
  app: string;
  /**
   * 模块权限数据数组
   */
  ls: number[];
}
