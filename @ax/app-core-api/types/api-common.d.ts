// Api通用内容
declare namespace ApiCommon {
  //#region 通用类型支持
  /**
   * 传入参数
   */
  export type Between = {
    // 查询字段
    field?: string;
    // 最小值
    minValue?: any;
    // 最大值
    maxValue?: any;
  };

  /**
   * 传入参数
   */
  export type DataKeys = {};

  /**
   * 传入参数
   */
  export type GridCount = {
    // 显示的列名称数组
    cols?: string[];
    // 符合查询条件的数据总条数
    count?: number;
  };

  /**
   * 传入参数
   */
  export type GridData = {
    // 显示的列名称数组
    cols?: string[];
    // 表格行列数据数组（二维数组）
    rows?: any[][];
    // 编辑状态是否解锁
    edited?: boolean;
  };

  /**
   * 传入参数
   */
  export type KV = {
    // 键
    k?: string;
    // 值
    v?: any;
  };

  /**
   * 传入参数
   */
  export type ModelWrapper = {
    // 目标对象
    target?: any;
    // 当前页码
    page?: number;
    // 分页条数
    size?: number;
    // VO类
    voClass?: any;
    // 关联显示字段
    voFields?: ApiCommon.UnionVo[];
    // 排序条件
    orders?: ApiCommon.KV[];
    // 前模糊查询条件
    beforeLikeFields?: string[];
    // 前后模糊查询条件
    aroundLikeFields?: string[];
    // 后模糊查询条件
    afterLikeFields?: string[];
    // 等于条件
    equalFields?: string[];
    // 不等于条件
    notEqualFields?: string[];
    // IN属性
    inFields?: { [key: string]: string[] };
    // NOT IN属性
    notInFields?: { [key: string]: string[] };
    // 大于条件
    greaterThanFields?: { [key: string]: any };
    // 大于等于条件
    greaterThanOrEqualFields?: { [key: string]: any };
    // 小于条件
    lessThanFields?: { [key: string]: any };
    // 小于等于条件
    lessThanOrEqualFields?: { [key: string]: any };
    // 或等于条件
    orFields?: { [key: string]: any };
    // 或模糊条件
    orLikeFields?: { [key: string]: any };
    // 区间查询条件
    betweenList?: ApiCommon.Between[];
    // 国际化查询字段
    languageSearchFields?: string[];
  };

  /**
   * 传入参数
   */
  export type PageInfo = {
    // 当前页码
    pageNum?: number;
    // 分页条数
    pageSize?: number;
    // 记录总数
    total?: number;
    // 总页数
    pages?: number;
    // 数据集
    list?: any;
  };

  /**
   * 传入参数
   */
  export type TestData = {
    // 标识列
    id?: string;
    // 唯一ID
    sid?: string;
    // S测试
    list?: any[];
  };

  /**
   * 传入参数
   */
  export type TestView = {
    // 标识列
    id?: string;
    // 唯一ID
    sid?: string;
    // 复杂参数集
    map?: { [key: string]: string[] };
    // 分页
    pageInfo?: ApiCommon.PageInfo;
  };

  /**
   * 传入参数
   */
  export type UnionVo = {
    // 关联ID，如user中关联department的字段为deptId，单字段关联使用
    id?: string;
    // 关联字段集合，多个字段关联时使用
    ids?: string[];
    // 其他条件，主表不存在，但辅表存在，用于构建key
    appendKeys?: any[];
    // 需要显示字段在目标表中的名称，如显示user时需要显示department的name字段
    name?: string;
    // 显示名称，如显示user时需要显示department的name字段deptName
    alias?: string;
    // 缓存Key
    cacheKey?: string;
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
  export type UserColumn = {
    // 用户唯一标识
    uid?: string;
    // 表格唯一标识，格式：MD5(URL+TABLEID)
    tid?: string;
    // 机构序号
    oid?: string;
    // 自定义列数组字符串，格式：["col1","col2"]
    cols?: string;
  };

  //#endregion

  //#region 枚举支持
  export enum JavaType {
    // 字符
    CHARACTER = 'Character',
    // 字符
    CHAR = 'char',
    // 字符串
    STRING = 'String',
    // 布尔
    BOOLEAN = 'Boolean',
    // 字节
    BYTE = 'Byte',
    // S短数值
    SHORT = 'Short',
    // 数值
    INTEGER = 'Integer',
    // 数值
    INT = 'int',
    // L长数值
    LONG = 'Long',
    // F浮点数
    FLOAT = 'Float',
    // D浮点数
    DOUBLE = 'Double',
    // 数值
    NUMBER = 'Number',
    // 集合
    COLLECTION = 'Collection',
    // 数组
    ARRAY = 'Array',
    // 键值对
    MAP = 'Map',
    // 序列化实体
    SERIALIZABLE = 'Serializable',
    // 返回结果
    RESULT = 'IResult',
    // 不确定类型
    ANY = 'Any',
  }

  export enum Module {
    // AX
    AX = 'AX',
    // DATA_SETTINGS
    DATA_SETTINGS = 'DATA_SETTINGS',
    // DATA_CAS
    DATA_CAS = 'DATA_CAS',
    // DATA_TENANT
    DATA_TENANT = 'DATA_TENANT',
    // BIZ_DATA
    BIZ_DATA = 'BIZ_DATA',
    // BIZ_USER
    BIZ_USER = 'BIZ_USER',
    // APP_PARKING
    APP_PARKING = 'APP_PARKING',
    // DEFAULT
    DEFAULT = 'DEFAULT',
  }

  //#endregion
}

export default ApiCommon;
