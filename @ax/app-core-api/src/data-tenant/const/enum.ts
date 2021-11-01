export enum AddressType {
  // systemdefault
  SYSTEMDEFAULT = '1',
  // systemcustom
  SYSTEMCUSTOM = '2',
}

export enum BackupContent {
  // 全部数据
  ALLDATA = '1',
  // 业务数据
  BUSINESSDATA = '2',
  // 业务+统计数据
  STATISTICAANDBUSINESS = '3',
}

export enum BackupStrategy {
  // 增量及差量备份
  INCREMENTBACKUP = '1',
  // 全量备份
  ALLBACKUP = '2',
}

export enum BackupSysComponentType {
  // 显示全部组件
  ALL = '1',
  // 仅显示已修改组件
  UPDATE = '2',
}

export enum BackupType {
  // 本地备份
  LOCAL = '1',
  // 云备份
  CLOUD = '2',
}

export enum CCOrOtherType {
  // 仅抄送
  CC_ONLY = '1',
  // 其他
  OTHER = '2',
}

export enum CacheKey {
  // 租户
  TENANT = 'TENANT',
  // 数据库
  DATABASE = 'DATABASE',
  // 组件参数
  PARAMETERS = 'PARAMETERS',
  // 分类目录名称
  CLASS_CATALOG_NAME = 'CLASS_CATALOG_NAME',
  // 系统字段名称
  SYSTEM_FIELD_NAME = 'SYSTEM_FIELD_NAME',
  // 租户数据库名称
  TENANT_DATABASE_NAME = 'TENANT_DATABASE_NAME',
  // 流程管理名称
  PROCESS_MANAGEMENT_NAME = 'PROCESS_MANAGEMENT_NAME',
  // 启动触发条件
  FLOW_START_UP = 'FLOW_START_UP',
}

export enum CatalogType {
  // 通用目录
  GENERAL_CATALOG = '1',
  // 字段目录
  FIELD_CATALOG = '2',
}

export enum DataResourcePriority {
  // 超高
  ULTRAHIGH = '1',
  // 高
  HIGH = '2',
  // 中
  MIDDLE = '3',
  // 低
  LOW = '4',
  // 超低
  ULTRALOW = '5',
}

export enum DataResourceType {
  // MONGODB
  MONGODB = '1',
}

export enum DataScale {
  // small_project
  SMALL = '1',
  // middle_project
  MIDDLE = '2',
  // large_project
  LARGE = '3',
  // extralarge_project
  EXTRALARGE = '4',
  // microminiatrue_project
  MICROMINIATRUE = '5',
  // demo_project
  DEMO = '6',
}

export enum DelayedSelectType {
  // 任意一个
  ANY = '1',
  // 全部
  ALL = '2',
}

export enum DelayedType {
  // 达到延时时间
  ARRIVAL_TIME = '1',
  // 满足数据条件
  DATA = '2',
}

export enum DirectionType {
  // 向上
  UP = '0',
  // 向下
  DOWN = '1',
}

export enum FiledJudgeType {
  // 选中项值
  SELECT_VAULE = '1',
  // 选中项文本
  SELECT_TEXT = '2',
  // 选中项序号
  SELECT_SORT = '3',
  // 图片数量
  IMG_NUMBER = '4',
  // 图片字节总数
  IMG_TOTAL_BYTES = '5',
  // 文件数量
  FILE_NUMBER = '6',
  // 文件字节总数
  FILE_TOTAL_BYTES = '7',
}

export enum FlowStartUpTimeType {
  // 指定时间
  DESIGNATED_TIME = '1',
  // 间隔执行
  INTERVAL_EXECUTION = '2',
}

export enum FlowStartUpType {
  // 人工触发条件
  ARTIFICIAL = '1',
  // 调度触发条件
  DISPATCH = '2',
  // 数据触发条件
  DATA = '3',
  // 定时触发条件
  TIMING = '4',
}

export enum FormModel {
  // 复制表结构
  COPY = '1',
  // 自定义表单
  CUSTOM = '2',
  // 从库表读取
  SOURCE = '3',
  // 从接口读取
  API = '4',
  // 从文件读取
  FILE = '5',
  // 存储到库表
  STORAGE_SOURCE = '6',
  // 发送到接口
  SEND_API = '7',
  // 存储到文件
  STORAGE_FILE = '8',
}

export enum FormSource {
  // < 自定义 >
  CUSTOM = '1',
}

export enum FormType {
  //
  DEFAULT = '0',
  // 输入表单
  INPUT = '1',
  // 输出表单
  OUTPUT = '2',
  // 主表单
  MAIN = '3',
  // 副表单
  FROM = '4',
}

export enum FromType {
  // 表单数据
  FORM_DATA = '1',
  // 已有公式
  FORMULA = '2',
  // 自定义数据
  CUSTOM = '3',
}

export enum InputType {
  // 人工录入数据
  ARTIFICIAL = '1',
  // 自动录入数据
  AUTOMATIC = '2',
}

export enum InterfaceType {
  // black_cool
  BLACKCOLL = 'black_cool',
  // blueWhite_style
  BLUEWHITE_STYLE = 'blue_white',
  // colour_style
  COLOUR_STYLE = 'red_black',
}

export enum LanguageType {
  // simplifiedChinese
  SIMPLIFIED_CHINESE = '1',
  // english
  ENGLISH = '2',
}

export enum LogicalOperator {
  // 或者
  OR = '1',
  // 并且
  AND = '2',
}

export enum NodeStateType {
  // TEMPORARY_STORAGE
  TEMPORARY_STORAGE = 'TEMPORARY_STORAGE',
  // SUBMIT
  SUBMIT = 'SUBMIT',
  // CAN_START
  CAN_START = 'CAN_START',
  // NO_CAN_START
  NO_CAN_START = 'NO_CAN_START',
  // BACK
  BACK = 'BACK',
}

export enum NodeType {
  // 开始节点
  START_NODE = '1',
  // 录入节点
  INPUT_NODE = '2',
  // 条件判断节点
  JUDGE_NODE = '3',
  // 子流程节点
  SUBPROCESS_NODE = '4',
  // 延时节点
  DELAYED_NODE = '5',
  // 输出节点
  OUTPUT_NODE = '6',
  // 结束节点
  END_NODE = '7',
}

export enum OutputType {
  // 输出到库表单
  LIBRARY_FORM = '1',
  // 输出到消息队列
  MESSAGE_QUEUING = '2',
  // 输出到本地文件
  LOCAL_FILE = '3',
  // 输出到远程接口
  REMOTE_INTERFACE = '4',
}

export enum ParticipationType {
  // 仅抄送
  CC_ONLY = '1',
  // 单人处理
  SINGLE_PERSON_PROCESSING = '2',
  // 多人处理
  MULTI_PERSON_PROCESSING = '3',
  // 工单督办
  WORK_ORDER_SUPERVISE = '4',
}

export enum ProcessType {
  // 无条件跳转
  NO_CONDITION = '1',
  // 指定条件跳转
  CONDITION = '2',
}

export enum PropertyDataMode {
  // 自定义
  CUSTOM = '1',
  // 自动编号
  AUTO_NUMBER = '2',
  // 单位选择
  UNIT_SELECTION = '3',
  // 人员选择
  PERSONNEL_SELECTION = '4',
  // 需求时限
  DEMAND_TIME_LIMIT = '5',
  // 执行时限
  IMPLEMENTATION_DEADLINE = '6',
  // 事件分类
  EVENT_CLASSIFICATION = '7',
  // 事件来源
  EVENT_SOURCE = '8',
  // 地区选择
  AREA_SELECTION = '9',
  // 设备选择
  DEVICE_SELECTION = '10',
}

export enum PropertyDataType {
  // 文本类型
  TEXT = '1',
  // 整数类型
  INT = '2',
  // 小数类型
  DOUBLE = '3',
  // 日期类型
  DATE = '4',
  // 选项类型
  SELECT = '5',
  // 图片类型
  IMG = '6',
  // 文件类型
  FILE = '7',
}

export enum RunCondtionType {
  // 无条件启动流程
  NO_CONDTION = '1',
  // 满足以下条件后启动流程
  CONDITION = '2',
}

export enum SubmitPeopleType {
  // 角色
  ROLE = '1',
  // 部门
  DEPARTMENT = '2',
  // 人员
  USER = '3',
  // 机构
  ORG = '4',
}

export enum TemplateVersionType {
  // 完整版
  FULL_VERSION = '1',
  // 试用版
  TRIAL_VERSION = '2',
  // 演示版
  DEMOED_VERSION = '3',
  // 访客版
  VISITOR_VERSION = '4',
}

export enum WorkOrder {
  // 事件
  EVENT = '1',
  // 预案
  PLAN = '2',
  // 投诉
  COMPLAINT = '3',
  // 运维
  OANDM = '4',
  // 普通
  COMMON = '5',
  // 其他
  OTHER = '6',
}

export enum WorkflowCategory {
  // 工单流程
  JOB = '1',
  // 消息流程
  MESSAGE = '2',
  // 数据流程
  DATA = '3',
  // 调度流程
  DISPATCH = '4',
}

export enum WorkflowType {
  // 总流程
  TOTAL = '1',
  // 子流程
  CHRID = '2',
}
