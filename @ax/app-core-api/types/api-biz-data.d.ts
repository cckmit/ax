import ApiCore from './api-core';
import ApiCommon from './api-common';

// ApiBizData 接口合集
declare namespace ApiBizData {
  //#region 正式API类型定义
  interface RequestActor {
    /**
     * 获取目录菜单
     * DatabaseDataActor
     * @param tcode
     * @param dcode
     * @returns {Promise<string[]>}
     */
    ['category-menu-get'](
      //
      tcode: string,
      //
      dcode: string
    ): Promise<string[]>;

    /**
     * 获取分类目录树
     * DatabaseDataActor
     * @param tcode
     * @param dcode
     * @returns {Promise<any[]>}
     */
    ['category-tree-get'](
      //
      tcode: string,
      //
      dcode: string
    ): Promise<any[]>;

    /**
     * 获取分类下所有子分类
     * DatabaseDataActor
     * @param tcode
     * @param dcode
     * @param ccode
     * @returns {Promise<ApiBizData.ClassCatalogTree>}
     */
    ['class-catalog-get'](
      //
      tcode: string,
      //
      dcode: string,
      //
      ccode: string
    ): Promise<ApiBizData.ClassCatalogTree>;

    /**
     * 获取databaseData的附加信息
     * DatabaseDataActor
     * @param id
     * @returns {Promise<ApiBizData.DatabaseData>}
     */
    ['databaseData-additional-information-get'](
      //
      id: string
    ): Promise<ApiBizData.DatabaseData>;

    /**
     * 获取DatabaseData的级联表格总数信息
     * DatabaseDataActor
     * @param tid
     * @param tcode
     * @param dcode
     * @param dscode
     * @param refId
     * @param relateField
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['databaseData-cascade-grid-count'](
      //
      tid: string,
      //
      tcode: string,
      //
      dcode: string,
      //
      dscode: string,
      //
      refId: string,
      //
      relateField: string
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取DatabaseData的表格列表数据
     * DatabaseDataActor
     * @param tid
     * @param tcode
     * @param dcode
     * @param dscode
     * @param refId
     * @param page
     * @param pageSize
     * @param searchFieldMap
     * @param relateField
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['databaseData-cascade-grid-list'](
      //
      tid: string,
      //
      tcode: string,
      //
      dcode: string,
      //
      dscode: string,
      //
      refId: string,
      //
      page: number,
      //
      pageSize: number,
      //
      searchFieldMap: { [key: string]: any },
      //
      relateField: string
    ): Promise<ApiCommon.GridData>;

    /**
     * 单条数据录入时获取的DatabaseData数据
     * DatabaseDataActor
     * @param tcode
     * @param dcode
     * @param dscode
     * @param refId
     * @param relateField
     * @returns {Promise<ApiBizData.DatabaseData>}
     */
    ['databaseData-cascade-single-data-get'](
      //
      tcode: string,
      //
      dcode: string,
      //
      dscode: string,
      //
      refId: string,
      //
      relateField: string
    ): Promise<ApiBizData.DatabaseData>;

    /**
     * 增加DatabaseData数据
     * DatabaseDataActor
     * @param databaseData
     * @returns {Promise<ApiBizData.DatabaseData>}
     */
    ['databaseData-create'](
      //
      databaseData: ApiBizData.DatabaseData
    ): Promise<ApiBizData.DatabaseData>;

    /**
     * 删除DatabaseData数据
     * DatabaseDataActor
     * @param id
     * @returns {Promise<number>}
     */
    ['databaseData-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 删除多条DatabaseData数据
     * DatabaseDataActor
     * @param ids
     * @returns {Promise<number[]>}
     */
    ['databaseData-delete-batch'](
      //
      ids: string[]
    ): Promise<number[]>;

    /**
     * 获取databaseData的详细信息
     * DatabaseDataActor
     * @param id
     * @returns {Promise<ApiBizData.DatabaseDataDetailVO>}
     */
    ['databaseData-detail-get'](
      //
      id: string
    ): Promise<ApiBizData.DatabaseDataDetailVO>;

    /**
     * 获取单条DatabaseData数据
     * DatabaseDataActor
     * @param id
     * @returns {Promise<ApiBizData.DatabaseData>}
     */
    ['databaseData-get'](
      //
      id: string
    ): Promise<ApiBizData.DatabaseData>;

    /**
     * 获取DatabaseData的表格总数信息
     * DatabaseDataActor
     * @param tid
     * @param tcode
     * @param dcode
     * @param ccode
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['databaseData-grid-count'](
      //
      tid: string,
      //
      tcode: string,
      //
      dcode: string,
      //
      ccode: string
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取DatabaseData的表格列表数据
     * DatabaseDataActor
     * @param tid
     * @param tcode
     * @param dcode
     * @param ccode
     * @param page
     * @param pageSize
     * @param searchFieldMap
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['databaseData-grid-list'](
      //
      tid: string,
      //
      tcode: string,
      //
      dcode: string,
      //
      ccode: string,
      //
      page: number,
      //
      pageSize: number,
      //
      searchFieldMap: { [key: string]: any }
    ): Promise<ApiCommon.GridData>;

    /**
     * 更新DatabaseData数据
     * DatabaseDataActor
     * @param databaseData
     * @returns {Promise<ApiBizData.DatabaseData>}
     */
    ['databaseData-update'](
      //
      databaseData: ApiBizData.DatabaseData
    ): Promise<ApiBizData.DatabaseData>;

    /**
     * 获取字段的详细信息
     * DatabaseDataActor
     * @param tcode
     * @param dcode
     * @param ccode
     * @returns {Promise<any[]>}
     */
    ['datafield-get'](
      //
      tcode: string,
      //
      dcode: string,
      //
      ccode: string
    ): Promise<any[]>;

    /**
     * 查询过滤条件
     * FiltrationActor
     * @param dId
     * @param tCode
     * @param uCode
     * @param dCode
     * @param cCode
     * @param isOrIsnt
     * @returns {Promise<string[]>}
     */
    ['get-Filtration'](
      //
      dId: string,
      //
      tCode: string,
      //
      uCode: string,
      //
      dCode: string,
      //
      cCode: string,
      //
      isOrIsnt: boolean
    ): Promise<string[]>;

    /**
     * 回显已勾选的过滤条件
     * FiltrationActor
     * @param dId
     * @param tCode
     * @param uCode
     * @param dCode
     * @param cCode
     * @returns {Promise<ApiBizData.Filtration>}
     */
    ['get-code-Filtration'](
      //
      dId: string,
      //
      tCode: string,
      //
      uCode: string,
      //
      dCode: string,
      //
      cCode: string
    ): Promise<ApiBizData.Filtration>;

    /**
     * 获取所属字段展示列
     * DatabaseDataActor
     * @param tcode
     * @param id
     * @param code
     * @returns {Promise<string>}
     */
    ['owned-field-display-data-get'](
      //
      tcode: string,
      //
      id: string,
      //
      code: string
    ): Promise<string>;

    /**
     * 获取所属字段列表
     * DatabaseDataActor
     * @param tcode
     * @param dcode
     * @param ccode
     * @param code
     * @returns {Promise<ApiBizData.OwnedFieldVO>}
     */
    ['owned-field-menu-get'](
      //
      tcode: string,
      //
      dcode: string,
      //
      ccode: string,
      //
      code: string
    ): Promise<ApiBizData.OwnedFieldVO>;

    /**
     * 获取拓扑目录树
     * DatabaseDataActor
     * @param tcode
     * @param dcode
     * @param catalogName
     * @returns {Promise<ApiBizData.ClassCatalogTree>}
     */
    ['topologyDirectory-tree-get'](
      //
      tcode: string,
      //
      dcode: string,
      //
      catalogName: string
    ): Promise<ApiBizData.ClassCatalogTree>;

    /**
     * 过滤条件选择数据（有数据修改，没数据增加）
     * FiltrationActor
     * @param data
     * @returns {Promise<ApiBizData.Filtration>}
     */
    ['update-create-filtration'](
      //
      data: ApiBizData.Filtration
    ): Promise<ApiBizData.Filtration>;
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
  export type ClassCatalog = {
    // 分类序号
    id?: string;
    // 分类父序号
    pid?: string;
    // 租户标识
    tcode?: string;
    // 库标识
    dcode?: string;
    // 分类名称
    name?: string;
    // 分类标识
    code?: string;
    // 分类类型
    type?: string;
    // 是否启用本分类（若禁用将会使本分类下的所有子分类不可见）
    enabled?: boolean;
    // 是否禁止新增本分类数据（勾选后该分类不可进行增加数据操作，只对当前分类有效，不影响父分类或子分类）
    added?: boolean;
    // 分类继承数据（ |分割）
    inherit?: string;
    // 分类说明
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type ClassCatalogTree = {
    // 分类序号
    id?: string;
    // 分类父序号
    pid?: string;
    // 租户标识
    tcode?: string;
    // 子节点
    subClassCatalog?: ApiBizData.ClassCatalogTree[];
    // 库标识
    dcode?: string;
    // 分类名称
    name?: string;
    // 分类标识
    code?: string;
    // 分类类型
    type?: string;
    // 是否启用本分类（若禁用将会使本分类下的所有子分类不可见）
    enabled?: boolean;
    // 是否禁止新增本分类数据（勾选后该分类不可进行增加数据操作，只对当前分类有效，不影响父分类或子分类）
    added?: boolean;
    // 分类继承数据（ |分割）
    inherit?: string;
    // 分类说明
    desc?: string;
    // 列表或菜单数据
    listOrMenuData?: string[];
    // 目录数据
    catalogData?: ApiBizData.DatabaseData[];
    // 输出数据
    exportData?: string;
    // 库名称
    dName?: string;
  };

  /**
   * 传入参数
   */
  export type ColumnData = {
    // 自定义属性序号
    id?: string;
    // databaseDataId
    databaseDataId?: string;
    // 租户标识
    tcode?: string;
    // 库标识
    tdcode?: string;
    // 列名
    columnName?: string;
    // 数值的类型
    valueType?: string;
    // 数值取值范围
    range?: string;
    // 数值
    value?: any;
    // 数据单位
    unit?: string;
    // 列名标识
    code?: string;
    // 列名说明
    explanation?: string;
    // 排序
    sort?: number;
    // 字段来源(库标识)
    dcode?: string;
    // 所属分类标识
    ccode?: string;
    // 所属分类名称
    cname?: string;
    // 数据来源标识
    dscode?: string;
    // 数据来源url
    dsurl?: string;
    // 默认展示列
    displayed?: boolean;
    // 列显示
    colShow?: number;
    // 是否搜索
    searched?: boolean;
    // 是否启用
    enabled?: boolean;
    // 是否可编辑
    edited?: boolean;
    // 是否必填字段
    required?: boolean;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 字段说明
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type DataField = {
    // 数据字段序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 字段来源(库标识)
    dcode?: string;
    // 所属分类标识
    ccode?: string;
    // 数据来源标识
    dscode?: string;
    // 数据来源url
    dsurl?: string;
    // 属性场景类型
    bigType?: string;
    // 属性类型
    ptype?: string;
    // 字段名称
    name?: string;
    // 字段标识
    code?: string;
    // 数据类型
    type?: string;
    // 排序
    sort?: number;
    // 默认展示列
    displayed?: boolean;
    // 列显示
    colShow?: number;
    // 是否搜索
    searched?: boolean;
    // 是否启用
    enabled?: boolean;
    // 是否可编辑
    edited?: boolean;
    // 数据范围
    range?: string;
    // 数据单位
    unit?: string;
    // 默认值
    value?: string;
    // 是否必填字段
    required?: boolean;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 父节点字段是否被修改（列显示，默认展示字段，可搜索字段，可编辑字段，启用本字段，父节点数据是否被修改，排序；（逗号分割））
    updateData?: string;
    // 字段说明
    tdcode?: string;
    // 字段说明
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type DataFieldSelectData = {
    // 标识
    code?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type DatabaseData = {
    // 自定义属性序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 字段来源(库标识)
    dcode?: string;
    // 所属分类标识
    ccode?: string;
    // 所属分类名称
    cname?: string;
    // 分类类型
    type?: string;
    // 实际数据
    data?: ApiBizData.ColumnData[];
    // 是否启用
    enabled?: boolean;
    // 排序
    sort?: number;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 数据说明
    explanation?: string;
    // 数据关联id
    refId?: string;
    // 数据关联字段的code
    relateField?: string;
  };

  /**
   * 传入参数
   */
  export type DatabaseDataDetailVO = {
    // 自定义属性序号
    id?: string;
    // 字段来源(库标识)
    dcode?: string;
    // 所属分类标识
    ccode?: string;
    // 分类名称
    cname?: string;
    // 基本属性
    data?: ApiBizData.ColumnData[];
    // 系统属性
    systemDatas?: ApiBizData.ColumnData[];
    // 非编辑属性
    uneditedDatas?: ApiBizData.ColumnData[];
    // 可搜索属性
    searchedDatas?: ApiBizData.ColumnData[];
    // 是否启用
    enabled?: boolean;
    // 排序
    sort?: number;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 数据说明
    explanation?: string;
    // 数据关联id
    refId?: string;
    // 数据关联字段的code
    relateField?: string;
  };

  /**
   * 传入参数
   */
  export type DatabaseDataVO = {
    // id序号
    id?: string;
    // 分类名称
    cname?: string;
    // 启用
    enabled?: string;
  };

  /**
   * 传入参数
   */
  export type Filtration = {
    // 过滤条件设置id
    id?: string;
    // 过滤条件设置唯一标识
    code?: string;
    // 表格唯一标识
    dId?: string;
    // 租户唯一标识
    tCode?: string;
    // 用户唯一标识
    uCode?: string;
    // 分类唯一标识
    ccode?: string;
    // 库唯一标识
    dcode?: string;
    // 保存的字段
    field?: string;
    // 保存时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type OwnedFieldVO = {
    // 分类名
    catalogName?: string;
    // 节点数据
    data?: { [key: string]: string };
    // 所有节点数据
    totalData?: { [key: string]: string };
    // 子节点
    subOwnedFieldVO?: ApiBizData.OwnedFieldVO[];
    // 分类编码(拓扑目录方式)
    catalogCode?: string;
    // 输出数据(拓扑目录方式)
    exportData?: string;
    // 拓扑目录是否为空，如果为空，则使用数据分类目录的方式(拓扑目录方式)
    topologyDirectoryIsNull?: boolean;
  };

  /**
   * 传入参数
   */
  export type TenantAssociationTable = {
    // 主键
    id?: string;
    // 租户标识
    tcode?: string;
    // 主表库标识
    mainDCode?: string;
    // 主表分类标识
    mainCCode?: string;
    // 主表字段标识
    mainFCode?: string;
    // 子表库标识
    subDCode?: string;
    // 子表分类标识
    subCCode?: string;
    // 子表字段标识
    subFCode?: string;
    // 主表显示字段标识（子表中显示主表的数据内容）
    mainShowCCode?: string;
  };

  /**
   * 传入参数
   */
  export type TenantDatabase = {
    // 主键
    id?: string;
    // 所属租户标识
    tCode?: string;
    // 名称
    name?: string;
    // 标识（唯一）
    code?: string;
    // 拓扑目录
    topologyNum?: number;
    // 是否必备库
    isNecessary?: boolean;
    // 是否初始化
    isInit?: boolean;
    // 是否禁用
    isForbidden?: boolean;
  };

  /**
   * 传入参数
   */
  export type TopologyDirectory = {
    // 序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 库标识
    dcode?: string;
    // 目录类型
    type?: string;
    // 目录名称
    name?: string;
    // 输出数据
    ccode?: string;
    // 目录层级
    level?: number;
    // 用于数据列表展示
    dataDisplayed?: boolean;
    // 用于级联菜单展示
    cascadeDisplayed?: boolean;
    // 启用本拓扑目录
    enabled?: boolean;
    // 目录数据层级定义
    catalogHierarchy?: string;
    // 列表或菜单数据
    listMenuData?: string;
  };

  /**
   * 传入参数
   */
  export type TopologyDirectoryTree = {
    // 序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 库标识
    dcode?: string;
    // 目录类型
    type?: string;
    // 目录名称
    name?: string;
    // 输出数据
    ccode?: string;
    // 目录层级
    level?: number;
    // 用于数据列表展示
    dataDisplayed?: boolean;
    // 用于级联菜单展示
    cascadeDisplayed?: boolean;
    // 启用本拓扑目录
    enabled?: boolean;
    // 经过处理后的id
    dealId?: string;
    // 经过处理后的父id
    dealPid?: string;
    // 子节点
    subTopologyDirectory?: ApiBizData.TopologyDirectoryTree[];
    // 列表或菜单数据
    listOrMenuData?: ApiBizData.ColumnData[];
    // 目录层级下的分类编码
    dirCcode?: string;
    // 目录分类名称
    dirCname?: string;
  };

  //#endregion

  //#region 枚举支持
  export enum AssociationMode {
    // 数据来源作为主表
    MAIN_TABLE = '0',
    // 数据来源作为子表
    SUB_TABLE = '1',
  }

  export enum AssociationModeType {
    // 本字段是所属数据字段（数据来源作为主表）
    CUSTOM = '1',
    // 本字段是级联入口字段（数据来源作为子表）
    SYSTEM_FIELD = '2',
  }

  export enum BasicConfigType {
    // 系统语言
    SYSTEM_LANGUAGE = '1',
    // 全局字段
    GLOBAL_FIELD = '2',
    // 工单字段
    WORK_ORDER_FIELD = '3',
    // 数据库
    DATABASE = '4',
    // 工单分类
    WORK_ORDER = '5',
    // 消息分类
    INFORMATION = '6',
    // 数据分类
    DATA = '7',
    // 调度分类
    DISPATCH = '8',
  }

  export enum CatalogType {
    // 通用目录
    GENERAL_CATALOG = '1',
    // 字段目录
    FIELD_CATALOG = '2',
  }

  export enum ClassCatalogType {
    // 分类类型
    CLASS = '1',
    // 目录类型
    CATALOG = '2',
  }

  export enum CustomPropertyDataType {
    // 子设备类型
    CHILD = '1',
    // 文本类型
    TEXT = '2',
    // 整数类型
    INT = '3',
    // 小数类型
    DOUBLE = '4',
    // 日期类型
    DATE = '5',
    // 选项类型
    SELECT = '6',
    // 图片类型
    IMG = '7',
    // 文件
    FILE = '8',
    // 勾选
    CHECK = '9',
  }

  export enum CustomPropertyType {
    // 基础配置数据
    BASIC_CONFIG = '1',
    // 自定义基础配置数据
    CUSTOM_BASIC_CONFIG = '2',
    // 系统属性
    SYSTEM = '3',
    // 自定义属性
    CUSTOM = '4',
  }

  export enum CustomSceneType {
    // 设备种类
    DEVICE_CATEGORY = '1',
    // 工作流
    WORKFLOW = '2',
    // 数据字段
    DATA_FIELD = '3',
    // 组件参数
    COMPONENT_PARAMETER = '4',
    // 流程表单
    PROCESS_SHEET = '5',
  }

  export enum DataChoiceType {
    // 使用单一下拉方式
    SINGLE = '0',
    // 使用级联下来菜单方式
    CASCADE = '1',
    // 使用弹出列表页方式
    EJECT = '2',
  }

  export enum DataCountType {
    // 多条数据
    MULTIPLE = '0',
    // 单条数据
    SINGLE = '1',
  }

  export enum DatabaseClassCatalogType {
    // 分类
    CLASS = '1',
    // 目录
    CATALOG = '2',
  }

  export enum FieldSourceType {
    // <自定义>
    CUSTOM = '0',
    // 系统字段
    SYSTEM_FIELD = '-1',
  }

  export enum FirstNumType {
    // 8位长度（年月日）
    EIGHT_LENGTH = 'bit8',
    // 14位长度（年月日时分秒）
    FOURTEEN_LENGTH = 'bit14',
    // 32位长度（唯一UUID）
    THIRTY_TWO_LENGTH = 'bit32',
  }

  export enum InputInterfaceType {
    // 使用弹出窗口
    EJECT = '0',
    // 使用级联入口
    CASCADE = '1',
    // 使用附加信息
    ADDITIONAL = '2',
  }

  export enum ProcessManagementType {
    // 工单分类
    WORK_ORDER = '1',
    // 消息分类
    INFORMATION = '2',
    // 数据分类
    DATA = '3',
    // 调度分类
    DISPATCH = '4',
  }

  export enum SecondNumType {
    // 无
    NONE = 'none',
    // 3位长度数字（无分隔符）
    THREE_NO_SEPARATOR = 'bit3no',
    // 3位长度数字（有分隔符）
    THREE_SEPARATOR = 'bit3yes',
    // 6位长度数字（无分隔符）
    SIX_NO_SEPARATOR = 'bit6no',
    // 6位长度数字（有分隔符）
    SIX_SEPARATOR = 'bit6yes',
  }

  export enum SystemFieldClassType {
    // 全局字段
    GLOBAL_FIELD = '1',
    // 工单字段
    WORK_ORDER_FIELD = '2',
  }

  //#endregion
}

export default ApiBizData;
