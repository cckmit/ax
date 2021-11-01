import { ELocalKey, ESessionKey } from '@/const';
import { IUserData, IUserRole, IUserState } from '@/interfaces';
import StorageUtils from '@/utils/storage-utils';
import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ name: 'user' })
export default class UserState extends VuexModule implements IUserState {
  // ------------------------------- 存储的数据 ------------------------------------

  // 本地存储时用到的模块名称
  private readonly appId: string = 'user';

  public id: string = '';
  public account: string = '';
  public name: string = '';
  public image: string = '';
  public token: string = '';
  public isLogin: boolean = false;
  public isAdmin: boolean = false;
  public roles: Map<string, number[]> = new Map();

  /**
   * 构造函数
   */
  constructor(module: Mod<ThisType<any>, any>) {
    super(module);
    // 读取数据
    const data = StorageUtils.sessionRead(this.appId, ESessionKey.SESSION);
    // 判断是否有效
    if (!data) return;
    // 设置数据
    this.id = data.id;
    this.account = data.account;
    this.name = data.name;
    this.image = data.image;
    this.token = data.token;
    this.isLogin = data.isLogin;
    this.isAdmin = data.isAdmin;
    // 清理集合
    this.roles.clear();
    // 判断是否有效
    if (data.roles && data.roles.length > 0) {
      // 获取数据数组
      const roles: IUserRole[] = data.roles;
      // 遍历设置数据
      roles.forEach((role: IUserRole) => {
        // 判断是否有效
        if (role && role.app) {
          // 增加到集合
          this.roles.set(role.app, role.ls);
        }
      });
    }
  }

  // ------------------------------- 获取数据方法 ------------------------------------

  /**
   * 获取最后登录的用户数据（不存在则返回 null）
   * @returns {IUserData} 用户数据对象
   */
  public get userData(): IUserData | null {
    // 判断是否有效
    if (!this.account || this.account.length === 0) {
      // 读取并返回数据
      return StorageUtils.localRead(this.appId, ELocalKey.LAST_LOGIN, null);
    } else {
      // 返回数据
      return {
        id: this.id,
        account: this.account,
        name: this.name,
        image: this.image,
      };
    }
  }

  // ------------------------------- 更新数据方法 ------------------------------------

  /**
   * 设置用户登录状态
   * @param user
   * @return {Promise<void>}
   */
  @Action
  public async setLogin(user: {
    id: string;
    account: string;
    name: string;
    image: string;
    token: string;
    admin: boolean;
    roles: IUserRole[] | null;
  }) {
    this.USER_LOGIN({
      id: user.id,
      account: user.account,
      name: user.name,
      image: user.image,
      token: user.token,
      isLogin: !!user.token && user.token.length > 0,
      isAdmin: user.admin,
      roles: user.roles,
    });
  }

  /**
   * 设置退出登录
   */
  @Action
  public async setLogout() {
    // 退出登录
    this.USER_LOGIN({
      id: this.id,
      account: this.account,
      name: this.name,
      image: this.image,
      token: '',
      isLogin: false,
      isAdmin: false,
      roles: null,
    });
  }

  // ------------------------------- 提交数据方法 ------------------------------------

  /**
   * 设置用户登录数据
   * @private
   * @param user
   */
  @Mutation
  USER_LOGIN(user: {
    id: string;
    account: string;
    name: string;
    image: string;
    token: string;
    isLogin: boolean;
    isAdmin: boolean;
    roles: IUserRole[] | null;
  }): void {
    // 设置数据
    this.id = user.id;
    this.account = user.account;
    this.name = user.name;
    this.image = user.image;
    this.token = user.token;
    this.isLogin = user.isLogin;
    this.isAdmin = user.isAdmin;
    // 清理集合
    this.roles.clear();
    // 判断是否有效
    if (user.roles && user.roles.length > 0) {
      // 获取数据数组
      const roles: IUserRole[] = user.roles;
      // 遍历设置数据
      roles.forEach((role: IUserRole) => {
        // 增加到集合
        this.roles.set(role.app, role.ls);
      });
    }
    // 创建存储数据
    const data: IUserData = {
      id: this.id,
      account: this.account,
      name: this.name,
      image: this.image,
    };
    // 存储数据
    StorageUtils.localSave(this.appId, ELocalKey.LAST_LOGIN, data);
    // 生成进程缓存数据
    const sData = {
      id: this.id,
      account: this.account,
      name: this.name,
      image: this.image,
      token: this.token,
      isLogin: this.isLogin,
      isAdmin: this.isAdmin,
      roles: user.roles,
    };
    // 保存到进程数据
    StorageUtils.sessionSave(this.appId, ESessionKey.SESSION, sData);
  }
}
