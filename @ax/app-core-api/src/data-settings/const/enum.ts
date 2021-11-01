export enum AppCategory {
  // 数据中台
  DATA = '0',
  // 业务中台
  BIZ = '1',
  // 应用系统
  APP = '2',
  // 租户菜单
  TM = '3',
}

export enum AssociationMode {
  // 数据来源作为主表
  MAIN_TABLE = '0',
  // 数据来源作为子表
  SUB_TABLE = '1',
}

export enum AuthorizeVersionType {
  // 完全版
  FULL = '1',
  // 试用版
  TRIAL = '2',
  // 演示版
  DEMO = '3',
  // 访客版
  VISITORS = '4',
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

export enum CacheKey {
  // 组件
  SYSCLASSIFY = 'SYSCLASSIFY',
  // 数据库名称
  DATABASE_NAME = 'DATABASE_NAME',
  // 分类名称
  BASIC_CLASS_CATALOG_NAME = 'BASIC_CATALOG',
  // 系统字段名称
  SYSTEM_FIELD_NAME = 'SYSTEM_FIELD',
  // 系统模块
  SYSTEM_MODULE = 'SYSTEM_MODULE',
  // 系统功能数量
  SYS_FUNCTION_COUNT = 'SYS_FUNCTION_COUNT',
  // 系统参数数量
  SYS_PARAM_COUNT = 'SYS_PARAM_COUNT',
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

export enum InputInterfaceType {
  // 使用弹出窗口
  EJECT = '0',
  // 使用级联入口
  CASCADE = '1',
  // 使用附加信息
  ADDITIONAL = '2',
}

export enum MenuLevelOrderType {
  // 升级
  UPGRADE = '1',
  // 降级
  DOWNGRADE = '2',
  // 上移
  MOVE_UP = '3',
  // 下移
  MOVE_DOWN = '4',
}

export enum MenuPositionType {
  // 当前上方增加
  UPPER = '1',
  // 当前下方增加
  LOWER = '2',
  // 子菜单页面
  SUBMENU = '3',
}

export enum PositionOperationType {
  // 上移/下移
  UP_DOWN = '1',
  // 置顶
  TOP = '2',
  // 置底
  BOTTOM = '3',
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

export enum RateType {
  // 1:1
  ONE_ONE = '1',
  // 1:2
  ONE_TWO = '2',
  // 1:3
  ONE_THREE = '3',
  // 1:4
  ONE_FOUR = '4',
  // 1:5
  ONE_FIVE = '5',
}

export enum SysClassifyType {
  // 系统通用组件
  SYSTEM = '1',
  // 数据中台组件
  DATA = '2',
  // 业务中台组件
  BUSINESS = '3',
  // 应用系统组件
  APP = '4',
}

export enum SystemFieldClassType {
  // 全局字段
  GLOBAL_FIELD = '1',
  // 工单字段
  WORK_ORDER_FIELD = '2',
}

export enum SystemLoginPageType {
  // 用户名密码登录
  ACCOUNT_PASSWORD = '1',
  // 手机号码登录
  PHONE_NUMBER = '2',
  // 附加图片验证码
  PICTURE = '3',
  // 附加短信验证码
  SMS = '4',
  // 附加邮件验证码
  EMAIL = '5',
}

export enum UnlockTableType {
  // 行业表
  INDUSTRY = 'INDUSTRY',
  // 设备种类表
  DEVICE_CATEGORY = 'DEVICECATEGORY',
  // 自定义设备属性/型号属性表
  DEVICE_CUSTOM_PROPERTY = 'DEVICEPROPERTY',
  // 自定义工作流属性表
  WORKFLOW_CUSTOM_PROPERTY = 'WORKFLOWPROPERTY',
  // 通信协议表
  COMMUNICATION_PROTOCOL = 'COMMUNICATIONPROTOCOL',
  // 模组功能表
  MODULE_FUNCTION = 'MODULEFUNCTION',
  // 产品表
  PRODUCT = 'PRODUCT',
  // 租户表
  TENANT = 'TENANT',
  // 功能授权表
  FUNCTION_AUTHORIZATION = 'FUNCTIONAUTHORIZATION',
  // 系统语言表
  SYSTEM_LANGUAGE = 'SYSTEMLANGUAGE',
  // 系统信息表
  SYSTEM_INFO = 'SYSTEMINFO',
  // 系统概况表
  SYSTEM_OVERVIEW = 'SYSTEMOVERVIEW',
  // 项目表
  PROJECT = 'PROJECT',
  // 项目通讯录表
  PROJECT_ADDRESS_BOOK = 'ADDRESSBOOK',
  // 通讯录名片表
  PROJECT_CARD = 'PROJECTCARD',
  // 设备校验表
  FACILITY_VERIFY = 'FACILITYVERIFY',
  // 系统应用表
  SYS_APP = 'SYSAPP',
  // 系统模块表
  SYS_MODULE = 'SYSMODULE',
  // 系统权限操作表
  SYS_PERMISSION = 'SYSPERMISSION',
  // 厂家表
  MANUFACTURER = 'MANUFACTURER',
  // 型号表
  MODEL = 'MODEL',
  // 地图信息表
  MAP_INFO = 'MAPINFO',
  // 地图配置表
  MAP_CONFIG = 'MAPCONFIG',
  // 图层表
  LAYER = 'LAYER',
}

export enum UpgradeType {
  // 同时停止所有服务后升级
  STOP_ALL = '1',
  // 保证部分服务可用并升级
  STOP_PART = '2',
}
