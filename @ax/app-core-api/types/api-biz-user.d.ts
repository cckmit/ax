import ApiCore from './api-core';
import ApiCommon from './api-common';

// ApiBizUser 接口合集
declare namespace ApiBizUser {
  //#region 正式API类型定义
  interface RequestActor {
    /**
     * 增加功能角色数据
     * FunctionalRoleActor
     * @param functionalRole
     * @returns {Promise<ApiBizUser.FunctionalRoleData>}
     */
    ['functional-role-create'](
      //
      functionalRole: ApiBizUser.FunctionalRole
    ): Promise<ApiBizUser.FunctionalRoleData>;

    /**
     * 删除功能角色数据
     * FunctionalRoleActor
     * @param id
     * @returns {Promise<number>}
     */
    ['functional-role-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除功能角色数据
     * FunctionalRoleActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['functional-role-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条功能角色数据
     * FunctionalRoleActor
     * @param id
     * @returns {Promise<ApiBizUser.FunctionalRole>}
     */
    ['functional-role-get'](
      //
      id: string
    ): Promise<ApiBizUser.FunctionalRole>;

    /**
     * 获取所有功能角色数据
     * FunctionalRoleActor
     * @returns {Promise<ApiBizUser.FunctionalRole[]>}
     */
    ['functional-role-getAll'](): Promise<ApiBizUser.FunctionalRole[]>;

    /**
     * 获取功能角色表格分页数据
     * FunctionalRoleActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['functional-role-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取功能角色表格分页表头与总记录数
     * FunctionalRoleActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['functional-role-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取功能角色下拉数据
     * FunctionalRoleActor
     * @param tcode
     * @returns {Promise<any[]>}
     */
    ['functional-role-select-get'](
      //
      tcode: string
    ): Promise<any[]>;

    /**
     * 更新功能角色数据
     * FunctionalRoleActor
     * @param functionalRole
     * @returns {Promise<ApiBizUser.FunctionalRoleData>}
     */
    ['functional-role-update'](
      //
      functionalRole: ApiBizUser.FunctionalRole
    ): Promise<ApiBizUser.FunctionalRoleData>;

    /**
     * 增加用户数据
     * UserActor
     * @param user
     * @returns {Promise<ApiBizUser.UserData>}
     */
    ['user-create'](
      //
      user: ApiBizUser.User
    ): Promise<ApiBizUser.UserData>;

    /**
     * 删除用户数据
     * UserActor
     * @param id
     * @returns {Promise<number>}
     */
    ['user-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除用户数据
     * UserActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['user-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条用户数据
     * UserActor
     * @param id
     * @returns {Promise<ApiBizUser.User>}
     */
    ['user-get'](
      //
      id: string
    ): Promise<ApiBizUser.User>;

    /**
     * 获取所有用户数据
     * UserActor
     * @returns {Promise<ApiBizUser.User[]>}
     */
    ['user-getAll'](): Promise<ApiBizUser.User[]>;

    /**
     * 获取用户表格分页表头与总记录数
     * UserActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['user-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取用户表格分页数据
     * UserActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['user-page-list'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新用户数据
     * UserActor
     * @param user
     * @returns {Promise<ApiBizUser.UserData>}
     */
    ['user-update'](
      //
      user: ApiBizUser.User
    ): Promise<ApiBizUser.UserData>;
  }
  //#endregion

  //#region 请求设置
  // 请求服务
  const service: ApiCore.Request;
  /**
   * 请求设置
   * @param config
   */
  function config(config: ApiCore.RequestConfig): {
    actor: RequestActor;
    test: ApiCore.RequestBase;
    http: ApiCore.RequestBase;
  };
  //#endregion

  //#region 接口
  /**
   * 正式API
   */
  const actor: RequestActor;

  /**
   * 测试API
   */
  const test: ApiCore.RequestBase;

  /**
   * 通用API
   */
  const http: ApiCore.RequestBase;
  //#endregion

  //#region 类型支持
  /**
   * 传入参数
   */
  export type FunctionalRole = {
    // 功能角色序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 机构标识
    ocode?: string;
    // 功能角色名称
    name?: string;
    // 授权账号数量
    accountExecNum?: number;
    // 是否启用
    enabled?: boolean;
    // 生效日期是否不限制
    started?: boolean;
    // 生效日期
    startTime?: string;
    // 到期日期是否不限制
    ended?: boolean;
    // 到期日期
    endTime?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 说明文字
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type FunctionalRoleData = {
    // 所属机构
    oname?: string;
    // 功能角色名称
    name?: string;
    // 授权账号数量
    accountExecNum?: number;
    // 生效日期是否不限制
    started?: boolean;
    // 生效日期
    startTime?: string;
    // 到期日期是否不限制
    ended?: boolean;
    // 到期日期
    endTime?: string;
    // 是否启用
    enabled?: boolean;
    // 功能角色序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 机构标识
    ocode?: string;
  };

  /**
   * 传入参数
   */
  export type FunctionalRoleSelectData = {
    // 功能角色序号
    id?: string;
    // 功能角色名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type User = {
    // 标识列
    id?: string;
    // 名称
    name?: string;
    // 账号
    account?: string;
    // 密码
    password?: string;
    // 性别（0：不设置，1：男，2：女）
    sex?: number;
    // 工号
    code?: string;
    // 岗位
    post?: string;
    // 手机
    mobile?: string;
    // 固话
    phone?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type UserData = {
    // 所属机构
    oname?: string;
    // 所属人员
    uname?: string;
    // 登陆账号
    account?: string;
    // 功能角色
    functionRole?: string;
    // 数据角色
    dataRole?: string;
    // 生效日期是否不限制
    started?: boolean;
    // 生效日期
    startTime?: string;
    // 到期日期是否不限制
    ended?: boolean;
    // 到期日期
    endTime?: string;
    // 是否启用
    enabled?: boolean;
    // 密码
    password?: string;
    // 用户序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 机构标识
    ocode?: string;
    // 人员标识
    ucode?: string;
  };

  //#endregion

  //#region 枚举支持
  export enum DemoEnum {
    // 空
    UNKNOWN = '0',
  }

  //#endregion
}

export default ApiBizUser;
