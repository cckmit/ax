export enum AddressType {
  // systemdefault
  SYSTEMDEFAULT = '1',
  // systemcustom
  SYSTEMCUSTOM = '2',
}

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

export enum AssociationModeType {
  // 本字段是所属数据字段（数据来源作为主表）
  CUSTOM = '1',
  // 本字段是级联入口字段（数据来源作为子表）
  SYSTEM_FIELD = '2',
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

export enum CCOrOtherType {
  // 仅抄送
  CC_ONLY = '1',
  // 其他
  OTHER = '2',
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

export enum CompanyType {
  // 平台单位
  PLATFORM = '0',
  // 建设单位
  BUILD = '1',
  // 业主单位
  OWNER = '2',
  // 合作单位
  COOPERATION = '3',
}

export enum ConditionType {
  // 不判断
  NOT_JUDGE = '0',
  //
  DEFAULT = '0',
  // 等于
  EQUALS = '1',
  // 不等于
  NOT_EQUALS = '2',
  // 包含
  CONTAIN = '3',
  // 不包含
  NOT_CONTAIN = '4',
  // 开始于
  SINCE = '5',
  // 不开始于
  NOT_SINCE = '6',
  // 结束于
  ENDING = '7',
  // 不结束于
  NOT_ENDING = '8',
  // 等于
  EQUALS_SENSITIVE = '9',
  // 不等于
  NOT_EQUALS_SENSITIVE = '10',
  // 包含
  CONTAIN_SENSITIVE = '11',
  // 不包含
  NOT_CONTAIN_SENSITIVE = '12',
  // 开始于
  SINCE_SENSITIVE = '13',
  // 不开始于
  NOT_SINCE_SENSITIVE = '14',
  // 结束于
  ENDING_SENSITIVE = '15',
  // 不结束于
  NOT_ENDING_SENSITIVE = '16',
  // 匹配表达式
  MATCH_EXPRESSIONS = '17',
  // 不匹配表达式
  NOT_MATCH_EXPRESSIONS = '18',
  // 等于
  OTHER_EQUALS = '19',
  // 不等于
  OTHER_NOT_EQUALS = '20',
  // 大于
  OTHER_GREATER = '21',
  // 大于等于
  OTHER_GREATER_EQUALS = '22',
  // 小于
  OTHER_LESS = '23',
  // 小于等于
  OTHER_LESS_EQUALS = '24',
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

export enum DatabaseClassCatalogType {
  // 分类
  CLASS = '1',
  // 目录
  CATALOG = '2',
}

export enum DecisionTreeNodeType {
  // 默认节点
  DEFAULT = '1',
  // 赋值节点
  EVALUATION = '2',
  // 条件节点
  CONDITION = '3',
  // 判断节点
  JUDGEMENT = '4',
  // 输出节点
  OUTPUT = '5',
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

export enum DeviceCategoryState {
  // 使用中
  USE = '2',
  // 禁用
  DISABLE = '1',
  // 启用
  ENABLED = '0',
}

export enum DeviceCategoryStatusType {
  // 根节点
  ROOT_NODE = '0',
  // 叶子节点
  LEAF_NODE = '1',
  // 普通节点
  COMMON_NODE = '2',
}

export enum DeviceHeaderType {
  // 基础表头字段
  BASE = '0',
  // 属性表头字段
  ATTR = '2',
  // 子设备表头字段
  CHILD = '1',
}

export enum DevicePropertyAttrType {
  // 型号属性
  MODEL_PROPERTY = '1',
  // 设备属性
  DEVICE_PROPERTY = '2',
}

export enum DirectionType {
  // 向上
  UP = '0',
  // 向下
  DOWN = '1',
}

export enum FacilityVerifyStatus {
  // un_executed
  UN_EXECUTED = '0',
  // executed
  EXECUTED = '1',
  // failed
  FAILED = '2',
}

export enum FieldSourceType {
  // <自定义>
  CUSTOM = '0',
  // 系统字段
  SYSTEM_FIELD = '-1',
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

export enum FirstNumType {
  // 8位长度（年月日）
  EIGHT_LENGTH = 'bit8',
  // 14位长度（年月日时分秒）
  FOURTEEN_LENGTH = 'bit14',
  // 32位长度（唯一UUID）
  THIRTY_TWO_LENGTH = 'bit32',
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

export enum FormulaModeType {
  // arithmetic
  ARITHMETIC = '1',
  // decision_tree
  DECISION_TREE = '2',
  // decision_table
  DECISION_TABLE = '3',
  // decision_stream
  DECISION_STREAM = '4',
  // scorecard
  SCORECARD = '5',
}

export enum FromType {
  // 表单数据
  FORM_DATA = '1',
  // 已有公式
  FORMULA = '2',
  // 自定义数据
  CUSTOM = '3',
}

export enum InputInterfaceType {
  // 使用弹出窗口
  EJECT = '0',
  // 使用级联入口
  CASCADE = '1',
  // 使用附加信息
  ADDITIONAL = '2',
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

export enum MenuIconType {
  // 系统默认图标
  SYSTEM_DEFAULT = '1',
  // 图标库图标
  ICON_LIBRARY = '2',
  // 上传图片图标
  UPLOAD_IMAGE = '3',
  // 自定义图标地址
  CUSTOM_ADDRESS = '4',
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

export enum MenuNavigationThreeLevelsType {
  // 单组显示
  SINGLE_GROUP = '1',
  // 多组显示
  MULTIPLE_GROUPS = '2',
}

export enum MenuNavigationTwoLevelsType {
  // 卡片方式显示子菜单
  CARD_MODE = '1',
  // 顶部导航栏显示子菜单
  TOP_NAVIGATION_BAR = '2',
  // 左侧导航栏显示子菜单
  LEFT_NAVIGATION_BAR = '3',
  // 左侧菜单树显示子菜单
  LEFT_MENU_TREE = '4',
}

export enum MenuPageGroupType {
  // 默认布局排列
  DEFAULT_LAYOUT = '1',
  // 左侧或顶部排列
  LEFT_TOP = '2',
  // 右侧或底部排列
  RIGHT_BOTTOM = '3',
}

export enum MenuPositionType {
  // 当前上方增加
  UPPER = '1',
  // 当前下方增加
  LOWER = '2',
  // 子菜单页面
  SUBMENU = '3',
}

export enum ModelState {
  // 使用中
  USE = '2',
  // 未使用
  UNUSE = '1',
}

export enum ModuleType {
  // conventional_device
  CONVENTIONAL_DEVICE = '1',
  // power_device
  POWER_DEVICE = '2',
  // control_device
  CONTROL_DEVICE = '3',
}

export enum NodeStateType {
  // 暂存
  TEMPORARY_STORAGE = '0',
  // 提交
  SUBMIT = '2',
  // 可以开始
  CAN_START = '4',
  // 未可以开始
  NO_CAN_START = '5',
  // 退回
  BACK = '3',
}

export enum NodeType {
  // 一级节点
  FIRST = '1',
  // 二级节点
  SECOND = '2',
  // 三级节点
  THIRD = '3',
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

export enum ProcessType {
  // 无条件跳转
  NO_CONDITION = '1',
  // 指定条件跳转
  CONDITION = '2',
}

export enum ProjectStatus {
  // not_enabled
  NOT_ENABLED = '0',
  // starting
  STARTING = '1',
  // online
  ONLINE = '2',
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

export enum ResultType {
  // texts
  TEXTS = '1',
  // integers
  INTEGERS = '2',
  // decimal
  DECIMAL = '3',
  // dates
  DATES = '4',
  // form_data
  FORM_DATA = '5',
}

export enum RunCondtionType {
  // 无条件启动流程
  NO_CONDTION = '1',
  // 满足以下条件后启动流程
  CONDITION = '2',
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

export enum SystemMenuClassType {
  // 系统菜单
  SYSTEM_MENU = '1',
  // 租户系统菜单
  TENANT_SYSTEM_MENU = '2',
}

export enum SystemMenuConfigTitleBar {
  // 全部系统
  ALL_SYSTEM = '1',
  // 登录用户
  LOGIN_USER = '2',
  // 天气预报
  WEATHER = '3',
  // 事件通知
  EVENT = '4',
  // 待办事项
  AGENDA = '5',
}

export enum SystemMenuType {
  // 应用系统页面
  APPLICATION_SYSTEM_PAGE = '1',
  // 数据可视化页面
  DATA_VISUALIZATION_PAGE = '2',
  // 菜单导航页面
  MENU_NAVIGATION_PAGE = '3',
  // 菜单页面分组
  MENU_PAGE_GROUP = '4',
  // 系统登录页面
  SYSTEM_LOGIN_PAGE = '5',
  // 系统首页页面
  SYSTEM_HOME_PAGE = '6',
  // 自定义连接页面
  CUSTOM_PAGE = '7',
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

export enum UnitType {
  // platform
  PLATFORM = '0',
  // build
  BUILD = '1',
  // owner
  OWNER = '2',
  // cooperation
  COOPERATION = '3',
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
