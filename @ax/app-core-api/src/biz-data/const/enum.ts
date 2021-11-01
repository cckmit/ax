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
