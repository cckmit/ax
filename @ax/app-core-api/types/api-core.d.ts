import { AxConfig, AxDispatcher } from '@ax/app-core-framework';
import { AxiosRequestConfig, Method } from 'axios';

// Api核心内容
declare namespace ApiCore {
  //#region 核心服务
  /**
   * 请求服务
   */
  class Request {
    constructor(config: IRequestConfig);
    private readonly config;
    private readonly service;
    /**
     * 错误检测
     * @param err
     * @returns {Promise<string>}
     */
    private static checkError;
    /**
     * 修改Axios配置
     * @param setting
     */
    changeSetting(setting: AxiosRequestConfig): void;
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
    http<T>(
      method: Method,
      url: string,
      params: any,
      data: any,
      options?: FRequestOption,
      requestConfig?: AxiosRequestConfig
    ): Promise<T>;
  }

  /**
   * 请求配置
   */
  class Config<Host> {
    constructor(options: { host: Host });
    host: Host;
  }

  // 默认配置
  const HttpConfig: AxConfig.HttpConfig<{
    HOST_UPLOAD: string;
    HOST_BACKSTAGE: string;
    HOST_DATA_SETTING: string;
    HOST_DATA_TENANT: string;
    HOST_BIZ_DATA: string;
    HOST_APP_PARKING: string;
    WS_APP_PARKING: string;
    WS_APP_PARKING_ACTION: string;
    VIDEO_HTTP_FLV: string;
    VIDEO_CONFIG: string;
  }>;

  // 接口公共服务
  class Service {
    static dispatcher: AxDispatcher;
    static redirect(data: any): void;
  }
  //#endregion

  //#region 内部类型
  // 请求基本类型
  interface RequestBase {
    <T = any>(cmd: string, ...args: any[]): Promise<T>;
  }

  // 请求配置
  type RequestConfig = {
    // 自定义的请求头
    headers?: { [key: string]: any };
    // axios请求配置（注意这个会覆盖掉前面的配置）
    axiosConfig?: AxiosRequestConfig;
  };

  // 基本配置 完整
  interface IRequestConfig extends AxiosRequestConfig {
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
  interface FRequestOption {
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
  interface IConfig {
    [key: string]: string;
  }
  //#endregion

  //#region 通用类型支持（后端定义）
  /**
   * 传入参数
   */
  export type Area = {
    // 辖区序号
    id?: string;
    // 机构序号
    oid?: string;
    // 名称
    name?: string;
    // 备注
    desc?: string;
    // 授权用户数量
    users?: number;
    // 硬件数量
    hardwares?: number;
    // 地点数量
    districts?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 缩放等级
    zoom?: number;
    // 经纬度范围
    latLngRange?: string;
  };

  /**
   * 传入参数
   */
  export type AreaData = {
    // 辖区序号
    id?: string;
    // 机构序号
    oid?: string;
    // 辖区名称
    name?: string;
    // 授权用户数组
    users?: OrgUserDataRes[];
    // 辖区监控地区数组
    districts?: AreaDistrict[];
    // 辖区监控硬件数组
    hardwares?: AreaHardware[];
    // 备注
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type AreaDistrict = {
    // 辖区序号
    aid?: string;
    // 地区序号
    did?: string;
    // 机构序号
    oid?: string;
    // 城市序号
    cityId?: string;
    // 当前地区节点类型
    ptype?: number;
  };

  /**
   * 传入参数
   */
  export type AreaDistrictData = {
    // 机构序号
    oid?: string;
    // 地区序号
    did?: string;
    // 城市序号
    cityId?: string;
  };

  /**
   * 传入参数
   */
  export type AreaDistrictDetailTree = {
    // 地区序号
    id?: string;
    // 地区父节点序号
    pid?: string;
    // 地区名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type AreaDistrictRes = {
    // 地点数量
    dcount?: number;
    // 地点名称
    dnames?: any[];
  };

  /**
   * 传入参数
   */
  export type AreaGrid = {
    // 辖区名称
    name?: string;
    // 授权用户数量
    users?: number;
    // 硬件数量
    hardwares?: number;
    // 地点数量
    districts?: number;
    // 备注
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 辖区序号
    id?: string;
    // 机构序号
    oid?: string;
  };

  /**
   * 传入参数
   */
  export type AreaHardware = {
    // 辖区序号
    aid?: string;
    // 硬件种类
    hid?: string;
    // 权限数据（按位）
    lids?: number;
    // 机构序号
    oid?: string;
    // 行业序号
    iid?: string;
  };

  /**
   * 传入参数
   */
  export type AreaInfodata = {
    // 片区序号
    id?: string;
    // 片区名称
    name?: string;
    // 片区项目数据
    areaProject?: AreaProjectRes;
    // 片区地点数据
    areaDistrict?: AreaDistrictRes;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type AreaLatLngZoom = {
    // 辖区唯一标识
    id?: string;
    // 辖区名称
    name?: string;
    // 缩放等级
    zoom?: number;
    // 经纬度范围
    latLngRange?: string;
  };

  /**
   * 传入参数
   */
  export type AreaProjectRes = {
    // 项目数量
    pcount?: number;
    // 项目名称
    pnames?: any[];
  };

  /**
   * 传入参数
   */
  export type Department = {
    // 部门序号
    id?: string;
    // 父级部门序号
    pid?: string;
    // 机构序号
    oid?: string;
    // 名称
    name?: string;
    // 描述
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type DepartmentGrid = {
    // 名称
    name?: string;
    // 描述
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 部门序号
    id?: string;
    // 父级部门序号
    pid?: string;
    // 机构序号
    oid?: string;
  };

  /**
   * 传入参数
   */
  export type DepartmentInfoData = {
    // 部门序号
    id?: string;
    // 父级部门序号
    pid?: string;
    // 父级部门名称
    pname?: string;
    // 机构序号
    oid?: string;
    // 名称
    name?: string;
    // 描述
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type DepartmentTree = {
    // 部门唯一标识
    id?: string;
    // 父节点标识
    pid?: string;
    // 部门名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type DistrictId = {
    // 一级节点类型
    ptype?: number;
    // 地区序号
    dirId?: string;
  };

  /**
   * 传入参数
   */
  export type DistrictName = {
    // 当前语言地区名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type DistrictReq = {
    // 城市序号
    cityId?: string;
    // 地区序号数组
    dirIds?: DistrictId[];
  };

  /**
   * 传入参数
   */
  export type DuplicateDataRes = {
    // 是否存在名称
    name?: boolean;
    // 是否存在账号
    account?: boolean;
    // 是否存在代号
    code?: boolean;
  };

  /**
   * 传入参数
   */
  export type HardwareReq = {
    // 行业序号
    iid?: string;
    // 硬件序号
    hid?: string;
    // 权限数据（按位）
    lids?: number;
  };

  /**
   * 传入参数
   */
  export type LoginRole = {
    // 系统名称
    app?: string;
    // 权限数组
    ls?: number[];
  };

  /**
   * 传入参数
   */
  export type OrgAreaDataRes = {
    // 辖区序号
    id?: string;
    // 辖区名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type OrgAreaDetailsRes = {
    // 辖区序号
    id?: string;
    // 辖区名称
    name?: string;
    // 备注
    desc?: string;
    // 已授权用户
    users?: OrgUserDataRes[];
    // 监控地区
    areaTrees?: OrgAreaTree[];
    // 监控硬件
    hardwares?: OrgAreaHardwaredata[];
  };

  /**
   * 传入参数
   */
  export type OrgAreaHardwaredata = {
    // 行业序号
    iid?: string;
    // 硬件种类序号
    hid?: string;
    // 硬件种类名称
    hname?: string;
    // 权限数据（按位）
    lids?: number;
  };

  /**
   * 传入参数
   */
  export type OrgAreaTree = {
    // 地区序号
    id?: string;
    // 地区父节点序号
    pid?: string;
    // 地区名称
    name?: string;
    // 地区一级节点类型
    ptype?: number;
  };

  /**
   * 传入参数
   */
  export type OrgAreaTypeTree = {
    // 地区序号
    id?: string;
    // 地区名称
    name?: string;
    // 层级
    type?: number;
    // 子地区数据
    areaTrees?: any[];
  };

  /**
   * 传入参数
   */
  export type OrgPermission = {
    // 机构序号
    oid?: string;
    // 系统序号
    sid?: number;
    // 模块序号
    mid?: number;
    // 权限数据（按位）
    lids?: number;
  };

  /**
   * 传入参数
   */
  export type OrgPermissionApp = {
    // 系统序号
    sid?: number;
    // 机构功能权限应用模块
    modules?: OrgPermissionModule[];
  };

  /**
   * 传入参数
   */
  export type OrgPermissionData = {
    // 已授权系统
    apps?: number[];
    // 已授权权限细目
    permissions?: number[];
  };

  /**
   * 传入参数
   */
  export type OrgPermissionDataRes = {
    // 机构功能权限数据
    permissionRole?: OrgPermissionData;
    // 机构项目权限数据
    projectRoles?: OrgProjectData[];
  };

  /**
   * 传入参数
   */
  export type OrgPermissionLids = {
    // 机构序号
    oid?: string;
    // 系统序号
    sid?: number;
    // 模块序号
    mid?: number;
    // 权限数据（按位）
    lids?: number;
  };

  /**
   * 传入参数
   */
  export type OrgPermissionModule = {
    // 系统序号
    sid?: number;
    // 模块序号
    mid?: number;
    // 机构功能权限细目
    lids?: OrgPermissionLids[];
  };

  /**
   * 传入参数
   */
  export type OrgPermissionTree = {
    // 机构序号
    oid?: string;
    // 机构系统应用
    apps?: OrgPermissionApp[];
  };

  /**
   * 传入参数
   */
  export type OrgProject = {
    // 机构序号
    oid?: string;
    // 项目序号
    proId?: string;
    // 权限数据（按位）
    lids?: number;
  };

  /**
   * 传入参数
   */
  export type OrgProjectData = {
    // 项目名称
    name?: string;
    // 权限数据（按位）
    lids?: number;
  };

  /**
   * 传入参数
   */
  export type OrgProjectDatasRes = {
    // 项目序号
    proId?: string;
    // 项目名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type OrgProjectGrid = {
    // 机构序号
    oid?: string;
    // 项目序号
    proId?: string;
    // 项目名称
    name?: string;
    // 机构名称
    orgName?: string;
    // 权限数据（按位）
    lids?: number;
  };

  /**
   * 传入参数
   */
  export type OrgProjectInfodata = {
    // 机构序号
    oid?: string;
    // 项目序号
    proId?: string;
    // 项目名称
    name?: string;
    // 权限数据（按位）
    lids?: number;
  };

  /**
   * 传入参数
   */
  export type OrgRoleAreaData = {
    // 序号
    id?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type OrgRoleDataRes = {
    // 角色序号
    id?: string;
    // 角色名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type OrgRoleDetailsRes = {
    // 角色序号
    id?: string;
    // 角色名称
    name?: string;
    // 备注
    desc?: string;
    // 已授权用户
    users?: OrgUserDataRes[];
    // 已分配系统权限树数据
    sysPermissionTree?: SysPermissionTree;
  };

  /**
   * 传入参数
   */
  export type OrgStructureDepartment = {
    // 部门序号
    id?: string;
    // 部门名称
    name?: string;
    // 类型 (1：用户，2：部门)
    type?: number;
    // 子节点数量（部门+用户）
    chs?: number;
    // 部门下用户数据集合
    users?: OrgStructureUser[];
  };

  /**
   * 传入参数
   */
  export type OrgStructureGrid = {
    // 类型（1：用户，2：部门）
    type?: number;
    // 名称
    name?: string;
    // 岗位
    post?: string;
    // 工号
    code?: string;
    // 手机
    mobile?: string;
    // 角色
    roles?: OrgRoleAreaData[];
    // 辖区
    areas?: OrgRoleAreaData[];
    // 固话
    phone?: string;
    // 邮箱
    email?: string;
    // 备注
    desc?: string;
    // 机构序号
    oid?: string;
    // 部门序号
    did?: string;
    // 部门父节点序号
    pid?: string;
    // 用户序号
    uid?: string;
  };

  /**
   * 传入参数
   */
  export type OrgStructureTree = {
    // 机构下部门数据集合
    departments?: OrgStructureDepartment[];
    // 组织架构/部门下的用户数据集合
    structureUsers?: OrgStructureUser[];
  };

  /**
   * 传入参数
   */
  export type OrgStructureUser = {
    // 用户序号
    id?: string;
    // 用户名称
    name?: string;
    // 类型 (1：用户，2：部门)
    type?: number;
  };

  /**
   * 传入参数
   */
  export type OrgStructureUserRes = {
    // 名称
    name?: string;
    // 账号
    account?: string;
    // 性别（0：不设置，1：男，2：女）
    sex?: number;
    // 头像图片
    logo?: string;
    // 是否启用
    enabled?: boolean;
    // 手机
    mobile?: string;
    // 固话
    phone?: string;
    // 部门序号
    did?: string;
    // 部门
    dname?: string;
    // 邮箱
    email?: string;
    // 岗位
    post?: string;
    // 传真
    fax?: string;
    // 角色
    roles?: OrgRoleAreaData[];
    // 辖区
    areas?: OrgRoleAreaData[];
    // 备注
    desc?: string;
    // 是否允许编辑资料
    editable?: boolean;
    // 是否允许修改密码
    editpwd?: boolean;
  };

  /**
   * 传入参数
   */
  export type OrgSystemdata = {
    // 系统管理员序号
    id?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type OrgUserDataRes = {
    // 用户序号
    id?: string;
    // 用户名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type Organization = {
    // 机构序号
    id?: string;
    // 父机构序号
    pid?: string;
    // 名称
    name?: string;
    // 代号
    code?: string;
    // 账号
    account?: string;
    // 密码
    password?: string;
    // 联系人
    contact?: string;
    // 固话
    phone?: string;
    // 传真
    fax?: string;
    // 邮箱
    email?: string;
    // 地址
    addr?: string;
    // 邮编
    postcode?: string;
    // 描述
    desc?: string;
    // 所在地区序号
    dirId?: string;
    // 所在国家地区代码
    dcode?: number;
    // 是否启用
    enabled?: boolean;
    // 部门数量
    depts?: number;
    // 用户数量
    users?: number;
    // 项目数量
    projects?: number;
    // 授权系统数量
    syses?: number;
    // 授权权限数量
    lidses?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type OrganizationGrid = {
    // 名称
    name?: string;
    // 父机构名称
    pname?: string;
    // 代号
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 部门数量
    depts?: number;
    // 用户数量
    users?: number;
    // 项目数量
    projects?: number;
    // 所在地区名称
    dirname?: string;
    // 描述
    desc?: string;
    // 账号
    account?: string;
    // 联系人
    contact?: string;
    // 固话
    phone?: string;
    // 传真
    fax?: string;
    // 邮箱
    email?: string;
    // 地址
    addr?: string;
    // 邮编
    postcode?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 机构序号
    id?: string;
    // 父机构序号
    pid?: string;
  };

  /**
   * 传入参数
   */
  export type OrganizationTree = {
    // 目录节点序号
    id?: string;
    // 目录父节点序号
    pid?: string;
    // 目录节点名称
    name?: string;
    // 类型 (1：用户，2：部门)
    type?: number;
    // 子节点数量（部门+用户）
    chs?: number;
  };

  /**
   * 传入参数
   */
  export type Role = {
    // 角色序号
    id?: string;
    // 机构序号
    oid?: string;
    // 名称
    name?: string;
    // 备注
    desc?: string;
    // 授权用户数量
    users?: number;
    // 授权系统数量
    syses?: number;
    // 授权权限数量
    lidses?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type RoleGrid = {
    // 角色名称
    name?: string;
    // 授权用户数量
    users?: number;
    // 授权系统数量
    syses?: number;
    // 授权权限数量
    lidses?: number;
    // 备注
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 角色序号
    id?: string;
    // 机构序号
    oid?: string;
  };

  /**
   * 传入参数
   */
  export type RoleInfoData = {
    // 角色序号
    id?: string;
    // 机构序号
    oid?: string;
    // 角色名称
    name?: string;
    // 备注
    desc?: string;
    // 授权用户数组
    users?: OrgUserDataRes[];
    // 机构角色权限数组
    permissions?: RolePermission[];
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type RolePermission = {
    // 角色序号
    rid?: string;
    // 系统序号
    sid?: number;
    // 模块序号
    mid?: number;
    // 权限数据（按位）
    lids?: number;
    // 机构序号
    oid?: string;
  };

  /**
   * 传入参数
   */
  export type SysApp = {
    // 系统应用序号
    sid?: number;
    // 父应用序号
    pid?: number;
    // 应用代号
    code?: string;
    // 是否启用
    enabled?: boolean;
  };

  /**
   * 传入参数
   */
  export type SysAppGrid = {
    // 应用代号
    code?: string;
    // 父应用代号
    pcode?: string;
    // 是否启用
    enabled?: boolean;
    // 系统应用序号
    sid?: number;
    // 父应用序号
    pid?: number;
  };

  /**
   * 传入参数
   */
  export type SysAppRes = {
    // 系统序号
    sid?: number;
    // 父应用序号
    pid?: number;
    // 应用代号
    code?: string;
    // 系统子应用数据集合
    childApps?: any[];
    // 系统应用模块
    sysModuleRes?: SysModuleRes[];
  };

  /**
   * 传入参数
   */
  export type SysModule = {
    // 系统序号
    sid?: number;
    // 模块序号
    mid?: number;
    // 父模块序号
    pid?: number;
    // 模块代号
    code?: string;
    // 是否启用
    enabled?: boolean;
  };

  /**
   * 传入参数
   */
  export type SysModuleGrid = {
    // 系统应用代号
    scode?: string;
    // 模块代号
    code?: string;
    // 父模块代号
    pcode?: string;
    // 是否启用
    enabled?: boolean;
    // 系统应用序号
    sid?: number;
    // 模块序号
    mid?: number;
    // 父模块序号
    pid?: number;
  };

  /**
   * 传入参数
   */
  export type SysModuleReq = {
    // 系统应用序号
    sid?: number;
    // 系统模块序号
    mid?: number;
  };

  /**
   * 传入参数
   */
  export type SysModuleRes = {
    // 系统序号
    sid?: number;
    // 模块序号
    mid?: number;
    // 父应用模块序号
    pid?: number;
    // 模块代号
    code?: string;
    // 系统子应用模块数据集合
    childModules?: any[];
    // 系统权限细目
    sysPermissionRes?: SysPermissionRes[];
  };

  /**
   * 传入参数
   */
  export type SysPermission = {
    // 系统序号
    sid?: number;
    // 模块序号
    mid?: number;
    // 操作序号
    lid?: number;
    // 操作代码
    code?: string;
    // 是否启用
    enabled?: boolean;
  };

  /**
   * 传入参数
   */
  export type SysPermissionGrid = {
    // 系统应用代号
    scode?: string;
    // 模块代号
    mcode?: string;
    // 操作代号
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 系统应用序号
    sid?: number;
    // 模块序号
    mid?: number;
    // 操作序号
    lid?: number;
  };

  /**
   * 传入参数
   */
  export type SysPermissionReq = {
    // 系统应用序号
    sid?: number;
    // 系统模块序号
    mid?: number;
    // 系统操作序号
    lid?: number;
  };

  /**
   * 传入参数
   */
  export type SysPermissionRes = {
    // 系统序号
    sid?: number;
    // 模块序号
    mid?: number;
    // 操作序号
    lid?: number;
    // 操作代码
    code?: string;
  };

  /**
   * 传入参数
   */
  export type SysPermissionTree = {
    // 系统应用
    sysAppRes?: SysAppRes[];
  };

  /**
   * 传入参数
   */
  export type SysSelectData = {
    // 系统应用序号/系统模块序号/系统操作序号
    id?: number;
    // 应用/模块/操作代号
    code?: string;
  };

  /**
   * 传入参数
   */
  export type SysToken = {
    // 序号
    id?: string;
    // 用户id
    userId?: string;
    // jsessionId
    jsessionId?: string;
    // ip
    ip?: string;
    // 用户id
    token?: string;
    // 过期时间
    expireTime?: string;
    // 更新时间
    updateTime?: string;
  };

  /**
   * 传入参数
   */
  export type User = {
    // 用户序号
    id?: string;
    // 机构序号
    oid?: string;
    // 部门序号
    did?: string;
    // 名称
    name?: string;
    // 头像图片
    logo?: string;
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
    // 传真
    fax?: string;
    // 邮箱
    email?: string;
    // 描述
    desc?: string;
    // 登录限制（0 无限制，>0 同时在线数量，-1 指定地点）
    limits?: number;
    // 指定皮肤
    skin?: string;
    // 校验方法（0 密码+验证码，1 短信，2 邮件）
    verify?: number;
    // 是否管理员
    admin?: boolean;
    // 是否允许管理所有辖区
    allAreas?: boolean;
    // 是否启用
    enabled?: boolean;
    // 是否允许编辑资料
    editable?: boolean;
    // 是否允许修改密码
    editpwd?: boolean;
    // 建立账号标志
    buildAccount?: boolean;
    // 登录IP
    ip?: string;
    // 登录错误次数
    errs?: number;
    // 下次登录限制时间
    limitTime?: string;
    // 最后登录时间
    loginTime?: string;
    // 退出登录时间
    logoutTime?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 分机号
    device?: string;
    // 呼叫登录人账号信息
    callLoginInfo?: string;
  };

  /**
   * 传入参数
   */
  export type UserArea = {
    // 用户序号
    uid?: string;
    // 辖区序号
    aid?: string;
    // 机构序号
    oid?: string;
  };

  /**
   * 传入参数
   */
  export type UserGrid = {
    // 名称
    name?: string;
    // 工号
    code?: string;
    // 岗位
    post?: string;
    // 固话
    phone?: string;
    // 邮件
    email?: string;
    // 描述
    desc?: string;
    // 头像图片
    logo?: string;
    // 账号
    account?: string;
    // 手机
    mobile?: string;
    // 传真
    fax?: string;
    // 登录限制（0 无限制，>0 同时在线数量，-1 指定地点）
    limits?: number;
    // 校验方法（0 密码+验证码，1 短信，2 邮件）
    verify?: number;
    // 是否管理员
    admin?: boolean;
    // 是否启用
    enabled?: boolean;
    // 是否允许编辑资料
    editable?: boolean;
    // 是否允许修改密码
    editpwd?: boolean;
    // 是否全部辖区
    allAreas?: boolean;
    // 登录IP
    ip?: string;
    // 登录错误次数
    errs?: number;
    // 下次登录限制时间
    limitTime?: string;
    // 最后登录时间
    loginTime?: string;
    // 退出登录时间
    logoutTime?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 用户序号
    id?: string;
    // 机构序号
    oid?: string;
    // 部门序号
    did?: string;
  };

  /**
   * 传入参数
   */
  export type UserInfoData = {
    // 用户序号
    id?: string;
    // 机构序号
    oid?: string;
    // 部门序号
    did?: string;
    // 部门名称
    dname?: string;
    // 名称
    name?: string;
    // 性别（0：不设置，1：男，2：女）
    sex?: number;
    // 工号
    code?: string;
    // 岗位
    post?: string;
    // 固话
    phone?: string;
    // 邮件
    email?: string;
    // 描述
    desc?: string;
    // 头像图片
    logo?: string;
    // 账号
    account?: string;
    // 手机
    mobile?: string;
    // 传真
    fax?: string;
    // 是否管理员
    admin?: boolean;
    // 是否启用
    enabled?: boolean;
    // 是否允许编辑资料
    editable?: boolean;
    // 是否允许修改密码
    editpwd?: boolean;
    // 是否全部辖区
    allAreas?: boolean;
    // 建立账号标志
    buildAccount?: boolean;
    // 用户角色数据数组
    roles?: OrgRoleAreaData[];
    // 用户辖区数据数组
    areas?: OrgRoleAreaData[];
  };

  /**
   * 传入参数
   */
  export type UserLog = {
    // 主键
    id?: string;
    // 用户id
    uid?: string;
    // 登陆ip
    ip?: string;
    // 登陆失败次数
    errs?: number;
    // 下次登录限制时间
    limitTime?: string;
    // 最后登录时间
    loginTime?: string;
    // 退出登录时间
    logoutTime?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type UserLoginRes = {
    // 用户序号
    id?: string;
    // 用户账号
    account?: string;
    // 用户名称
    name?: string;
    // 头像图片路径
    image?: string;
    // 登录令牌
    token?: string;
    // 是否管理员账号
    admin?: boolean;
    // 访问权限
    roles?: LoginRole[];
  };

  /**
   * 传入参数
   */
  export type UserPermissionRes = {
    // 机构序号
    oid?: string;
    // 角色数据
    roles?: OrgRoleAreaData[];
    // 辖区数据
    areas?: OrgRoleAreaData[];
  };

  /**
   * 传入参数
   */
  export type UserRole = {
    // 用户序号
    uid?: string;
    // 角色序号
    rid?: string;
    // 机构序号
    oid?: string;
  };

  /**
   * 传入参数
   */
  export type UserTrajectory = {
    // 用户序号
    id?: string;
    // 维度
    userId?: string;
    // 经度
    lng?: string;
    // 维度
    lat?: string;
    // 更新时间
    eTime?: string;
    // 创建时间
    cTime?: string;
    // 创建年份
    year?: number;
    // 创建月份
    month?: number;
    // 创建季度
    quarter?: number;
    // 创建日
    day?: number;
  };

  //#endregion

  //#region 通用类型支持（前端定义）
  /**
   * 国际化名称Map
   */
  export type LocaleMap = {
    [key: string]: string;
  };

  /**
   * 表格结果数据(二维数组,第一维表示行, 第二维表示列数据, 数据顺序与 GridCount 统计结果的列数组数据一致)
   */
  export type GridList = any[][];

  /**
   * 传入参数
   * 对应 'com.nncs.core.platfrom.data.GridCount'
   */
  export type GridCount = {
    // 显示的列名称数组
    cols?: string[];
    // 符合查询条件的数据总条数
    count?: number;
  };

  /**
   * 传入参数
   * 对应 'com.nncs.core.platfrom.data.GridData'
   */
  export type GridData = {
    // 表格行列数据数组（二维数组）
    rows?: any[][];
    // 编辑状态是否解锁
    edited?: boolean;
  };

  /**
   * 键值对对象
   */
  export interface KV {
    /**
     * 键 (必须)
     */
    k: string;
    /**
     * 值
     */
    v?: any; // "ASC"
  }

  /**
   * 排序数据类型
   */
  export type Orders = KV[] | null;
  //#endregion
}

export default ApiCore;
