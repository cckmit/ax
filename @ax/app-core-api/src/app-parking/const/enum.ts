export enum AttendanceType {
  // 未配置
  UNKNOWN = '0',
  // 打卡成功
  SUCCEED = '1',
  // 工作中
  WORKING = '2',
  // 迟到
  BE_LATE = '3',
}

export enum BizCarTypeEnum {
  // 临时车
  TEMP_CAR = '0',
  // 包月车
  MONTH_CAR = '1',
  // 包年车
  YEAR_CAR = '2',
  // 免费车
  FREE_CAR = '3',
  // 黑名单车辆
  BLACKLIST_CAR = '4',
}

export enum CacheKey {
  // 区域
  AREA = 'AREA',
  // 城市
  CITY = 'CITY',
  // 部门
  DEPARTMENT = 'DEPARTMENT',
  // 组织
  ORGANIZATION = 'ORGANIZATION',
  // 停车场
  PARKING_LOT = 'PARKING_LOT',
  // 出入口
  ENTRANCE_AND_EXIT = 'ENTRANCE_AND_EXIT',
  // 通道
  PASSAGE_WAY = 'PASSAGE_WAY',
  // 厂商接入条数
  PARKINGLOT_COUNT = 'PARKINGLOT_COUNT',
  // 自定义打卡配置
  COMMUTING_CONFIGURATION = 'COMMUTING_CONFIGURATION',
}

export enum CarActionType {
  // 进
  ENTRY = 'ENTRY',
  // 出
  OUT = 'LEAVE',
  // 车牌校正
  CORRECTION = 'CORRECTION',
}

export enum CarLicenseColorEnum {
  // 未知
  UNKNOWN = '0',
  // 蓝色
  BLUE = '1',
  // 黄色
  YELLOW = '2',
  // 白色
  WHITE = '3',
  // 黑色
  BLACK = '4',
  // 绿色
  GREEN = '5',
}

export enum CarLicenseTypeEnum {
  // 本地
  LOCAL = '0',
  // 外地
  NOT_LOCAL = '1',
  // 其他
  OTHER = '2',
}

export enum CarTypeEnum {
  // 未知类型车牌
  UNKNOWN_LICENSE = '0',
  // 蓝牌小汽车
  BLUE_LICENSE = '1',
  // 黑牌小汽车
  BLACK_LICENSE = '2',
  // 单排黄牌
  SINGLE_YELLOW_LICENSE = '3',
  // 双排黄牌
  DOUBLE_YELLOW_LICENSE = '4',
  // 警车车牌
  POLICE_LICENSE = '5',
  // 武警车牌
  ARMED_POLICE_LICENSE = '6',
  // 个性化车牌
  PERSONALIZED_LICENSE = '7',
  // 单排军车牌
  SINGLE_MILITARY_LICENSE = '8',
  // 双排军车牌
  DOUBLE_MILITARY_LICENSE = '9',
  // 使馆车牌
  EMBASSY_LICENSE = '10',
  // 香港进出中国大陆车牌
  HONG_KONG_LICENSE = '11',
  // 农用车牌
  AGRICULTURAL_LICENSE = '12',
  // 教练车牌
  COACH_LICENSE = '13',
  // 澳门进出中国大陆车牌
  MACAO_LICENSE = '14',
  // 双层武警车牌
  DOUBLE_ARMED_POLICE_LICENSE = '15',
  // 武警总队车牌
  ARMED_POLICE_CROPS = '16',
  // 双层武警总队车牌
  DOUBLE_ARMED_POLICE_CROPS = '17',
  // 民航车牌
  AIRPORT = '18',
  // 新能源车牌
  NEW_ENERGY = '19',
}

export enum ChargeTypeEnum {
  // 免费车
  FREE = '1',
  // 包月车
  MONTHLY_PAYMENT = '2',
  // 包年车
  YEAR_PAYMENT = '3',
}

export enum ColorTypeEnum {
  // 未知
  UNKNOWN = '0',
  // 蓝色
  BLUE = '1',
  // 黄色
  YELLOW = '2',
  // 白色
  WHITE = '3',
  // 黑色
  BLACK = '4',
  // 绿色
  GREEN = '5',
}

export enum DataType {
  // D_RECOGNITION
  D_RECOGNITION = 'D_RECOGNITION',
  // D_GEOMAGNETISM
  D_GEOMAGNETISM = 'D_GEOMAGNETISM',
  // D_ORDER
  D_ORDER = 'D_ORDER',
}

export enum DayOfWeekEnum {
  // 未知
  UNKNOWN = '-1',
  // 星期一
  MONDAY = '1',
  // 星期二
  TUESDAY = '2',
  // 星期三
  WEDNESDAY = '3',
  // 星期四
  THURSDAY = '4',
  // 星期五
  FRIDAY = '5',
  // 星期六
  SATURDAY = '6',
  // 星期日
  SUNDAY = '7',
  // 全部
  ALL = '8',
}

export enum DeployEnum {
  // <全部>
  ALL = '0',
  // 已部署
  DEPLOYED = '1',
  // 未部署
  NOTDEPLOY = '2',
}

export enum DeviceGeomagnetismBatteryLowEnum {
  // 正常
  UNKNOWN = '0',
  // 电量低报警
  ONLINE = '1',
}

export enum DeviceGeomagnetismNetStatusEnum {
  // 未知
  UNKNOWN = '0',
  // 在线
  ONLINE = '1',
  // 离线
  OFFLINE = '2',
}

export enum EntranceAndExitTypeEnum {
  // 入口
  ENTRY = '1',
  // 出口
  LEAVE = '2',
}

export enum FlowTypeEnum {
  // 一体机
  INTEGRATED_MACHINE = 'IntegratedMachine',
  // 高位相机
  HIGH_POSITION_CAMERA = 'HighPositionCamera',
  // APP
  APP = 'APP',
}

export enum FormulaModeEnum {
  // 未知
  UNKNOWN = '-1',
  // 时长不够，按照设置的时长计费
  INTACT = '1',
  // 百分比
  PERCENTAGE = '2',
}

export enum HandlerTypeEnum {
  // 自动放行
  AUTO = '1',
  // 特殊车辆放行
  SPECIAL_RELEASE = '2',
  // 异常放行
  EXCEPTION_RELEASE = '3',
  // 现金放行
  CASH_RELEASE = '4',
  // 人工放行
  NORMAL_RELEASE = '5',
}

export enum Heartbeat {
  // 心跳请求
  REQ = '{[(HB_REQ)]}',
  // 心跳响应
  RESP = '{[(HB_RESP)]}',
}

export enum HolidayEnum {
  // 未知
  UNKNOWN = '-1',
  // 全部
  ALL = '11',
  // 元旦
  YUAN_DAN = '12',
  // 春节
  CHUN_JIE = '13',
  // 清明
  QING_MING = '14',
  // 劳动节
  LABOUR = '15',
  // 端午
  DUAN_WU = '16',
  // 中秋
  ZHONG_QIU = '17',
  // 国庆节
  NATIONAL_DAY = '18',
}

export enum IndexTypeEnum {
  // '注册总数-上线总数-在线总数-区域'
  STATISTICS_REGISTER_ONLINE_ONLINE_STATE_GROUP_AREA = '0',
  // '接入总量-类型'
  PARKING_LOT_TOTAL_GROUP_TYPE = '1',
  // '车场总数-区域'
  PARKING_LOT_TOTAL_GROUP_DISTRICT = '2',
  // '车位总数-区域'
  PARKING_SPACE_TOTAL_GROUP_DISTRICT = '3',
  // '车场总数-厂商'
  PARKING_LOT_TOTAL_GROUP_OPERATOR_NAME = '4',
  // '车场总数-城市'
  PARKING_LOT_TOTAL = '5',
  // '厂商总数-城市'
  MANUFACTURER_TOTAL = '6',
  // '车场总数-在线数-城市-周'
  PARKING_LOT_TOTAL_ONLINE_STATE_GROUP_CITY_WEEK = '7',
  // '区域车辆流转情况'
  CAR_INOUT_TOTAL_GROUP_DISTRICT_DAY = '8',
  // '总车流量-城市'
  TRAFFIC_VOLUME_TOTAL = '9',
  // '区域车位使用率'
  PARKING_SPACE_USED_RATE_GROUP_DISTRICT_DAY = '10',
  // '区域占用率-小时'
  OCCUPANCY_RATE_GROUP_DISTRICT_HOURS = '11',
  // '停车量-城市-区域-小时'
  TRAFFIC_GROUP_CITY_DISTRICT_HOURS = '12',
  // '停车场-占用率-小时'
  OCCUPANCY_RATE_GROUP_PARKING_LOT_HOURS = '13',
  // '注册总数-上线数-在线数-路内车场数-路外车场数-城市'
  PARKING_LOT_REGISTER_TOTAL_GROUP_CITY = '14',
  // '注册总数-上线数-城市-日'
  PARKING_LOT_REGISTER_TOTAL_GROUP_CITY_DAY = '15',
  // '车流量-城市-区域-车场属性-车场名称-小时'
  TRAFFIC_VOLUME_TOTAL_GROUP_CITY_DISTRICT_NATURE_PARKING_LOT_NAME_HOURS = '16',
  // '实时停车列表-城市'
  REAL_TIME_PARKING_LIST = '17',
  // '收费总金额-城市'
  REAL_TIME_CHARGE_ALL_AMOUNT_CITY = '18',
  // '车场概况-车场总数-泊位总数-余位总数-占用率'
  PARKING_LOT_SPACE_REMAIN_TOTAL_CITY = '19',
  // '今日车流量-城市'
  TODAY_TRAFFIC_FLOW = '20',
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

export enum MessageType {
  // 调用Actor服务
  M_INVOKE_ACTOR = 'INVOKE_ACTOR',
  // 识别数据响应
  M_RECOGNITION = 'RECOGNITION',
  // 地磁感应数据响应
  M_GEOMAGNETIC = 'GEOMAGNETIC',
  // 订单数据
  M_ORDER = 'ORDER',
  // 订单数据
  M_ORDER_PAY = 'ORDER',
  // 停车记录
  M_PARKING_RECORD = 'PARKING_RECORD',
  // 推送停车场数据到云端
  M_PARKING_LOT = 'PARKING_LOT',
  // 收费规则
  M_CHARGES_RULE = 'CHARGES_RULE',
  // 收费规则
  M_CHARGES_RULE_CALL_BACK = 'CHARGES_RULE_CALL_BACK',
  // 收费规则
  M_CHARGES_RULE_DETAIL = 'CHARGES_RULE',
  // 收费规则
  M_CHARGES_RULE_CALL_BACK_DETAIL = 'CHARGES_RULE_CALL_BACK',
  // 收费策略
  CHARGING_STRATEGY = 'CHARGING_STRATEGY',
  // 收费策略
  CHARGING_STRATEGY_CALL_BACK = 'CHARGES_RULE_CALL_BACK',
  // 收费策略明细
  CHARGING_STRATEGY_DETAIL = 'CHARGING_STRATEGY_DETAIL',
  // 收费策略
  PARKING_LOT_CHARGING_RELATION = 'PARKING_LOT_CHARGING_RELATION',
  // 收费策略
  PARKING_LOT_CHARGING_RELATION_CALL_BACK = 'PARKING_LOT_CHARGING_RELATION_CALL_BACK',
  // 费策略和车场关系表
  PARKING_LOT_STRATEGY_RELATION = 'PARKING_LOT_STRATEGY_RELATION',
  // 费策略和车场关系表
  PARKING_LOT_STRATEGY_RELATION_CALL_BACK = 'PARKING_LOT_STRATEGY_RELATION_CALL_BACK',
  // 规则同步回调，客户端
  RULE_CALLBACK_CLIENT = 'RULE_CALLBACK_CLIENT',
  // 规则同步回调，服务端
  RULE_CALLBACK_SERVER = 'RULE_CALLBACK_SERVER',
  // 推送停车场数据到大数据
  M_PARKING_LOT_TO_BIG_DATA = 'PARKING_LOT_TO_BIG_DATA',
  // 推送停车记录数据到大数据
  M_PARKING_RECORD_TO_BIG_DATA = 'M_PARKING_RECORD_TO_BIG_DATA',
  // 实时停车表
  M_REAL_PARKING_SPACE = 'REAL_PARKING_SPACE',
  // 统计
  STATISTICS = 'STATISTICS',
  // 车辆离场信息表
  M_LEAVE_PARKING_RECORD = 'LEAVE_PARKING_RECORD',
  // 生成价格通知
  M_GENERATE_PRICE_NOTICE = 'M_GENERATE_PRICE_NOTICE',
  // 生成价格通知
  M_GENERATE_PRICE_NOTICE_CALL_BACK = 'M_GENERATE_PRICE_NOTICE',
  // 云服务通知本地重新计费
  CHECK_PRICE_NOTICE = 'CHECK_PRICE_NOTICE',
  // 本地计费完成返回云服务
  CHECK_PRICE_NOTICE_CALL_BACK = 'CHECK_PRICE_NOTICE_CALL_BACK',
  // iot访问本地生成订单临时记录数据通知云服务
  CREATE_IOT_ORDER_DATA_SEND_TO_SERVER = 'CREATE_IOT_ORDER_DATA_SEND_TO_SERVER',
  // 临时订单数据同步云后回调
  CREATE_IOT_ORDER_DATA_SEND_TO_SERVER_CALL_BACK = 'CREATE_IOT_ORDER_DATA_SEND_TO_SERVER',
  // 云平台请求本地系统生成价格
  M_PRICE_REQUEST = 'M_PRICE_REQUEST',
  // 本地系统生成价格返回云平台
  M_PRICE_RESPONSE = 'M_PRICE_RESPONSE',
  // 本地生成计费记录同步到云
  PARKING_CHARGES_CALCULATION_RECORD_TO_SERVER = 'PARKING_CHARGES_CALCULATION_RECORD_TO_SERVER',
  // 平台生成价格返回云本地系统
  PARKING_CHARGES_CALCULATION_RECORD_TO_CLIENT = 'PARKING_CHARGES_CALCULATION_RECORD_TO_CLIENT',
  // 发送修改车牌事件
  M_CHANGE_NUM_EVENT = 'M_CHANGE_NUM_EVENT',
  // IOT停车记录
  M_ACCESS_RECORD = 'M_ACCESS_RECORD',
  // 消息（离场）
  M_ENTRY = 'M_ENTRY',
  // 已缴费-缴费信息
  M_PAYMENT_INFO = 'M_PAYMENT_INFO',
  // 已缴费-缴费信息
  M_PAYMENT_LEAVE_REMIND = 'M_PAYMENT_LEAVE_REMIND',
  // 消息（离场）
  M_LEAVE = 'M_LEAVE',
  // 回调，客户端
  M_CALLBACK_CLIENT = 'M_CALLBACK_CLIENT',
  // 回调，服务端
  M_CALLBACK_SERVER = 'M_CALLBACK_SERVER',
  // 停车位
  M_PARKING_SPACE = 'M_CALLBACK_SERVER',
  // 无牌车入场
  M_PARKING_RECORD_ENTRY_UNLICENSED = 'M_PARKING_RECORD_ENTRY_UNLICENSED',
}

export enum MsgType {
  // 入场消息
  ENTRY = 'ENTRY',
  // 缴费消息
  PAY = 'PAY',
  // 离场消息
  OUT = 'OUT',
}

export enum NoPayType {
  // 未知
  UNKNOWN = '0',
  // 车辆未缴费逃逸
  UNDEFINED = '1',
  // 异常放行
  EXCEPTION = '3',
  // 特殊车辆放行
  SPECIAL = '4',
  // 无需支付
  NO_NEED_TO_PAY = '5',
  // 其他
  ELSE = '10',
}

export enum OrderStatusEnum {
  // 预创建订单
  PRE_ORDER = '0',
  // 待付款
  WAITING_FOR_PAY = '1',
  // 已支付
  PAID = '2',
  // 未支付
  NOT_PAID = '3',
  // 无需支付
  NO_NEED_TO_PAY = '4',
}

export enum OrderSyncTypeEnum {
  // 入场同步
  ENTRY = 'ENTRY',
  // 出场同步
  LEAVE = 'LEAVE',
  // 价格同步
  PRICE = 'PRICE',
  // 支付同步
  PAY = 'PAY',
  // 获取金额
  REQUEST_PRICE = 'REQUEST_PRICE',
  // 获取金额
  RESPONSE_PRICE = 'REQUEST_PRICE',
}

export enum OrderTypeEnums {
  // PAY
  PAY = 'PAY',
}

export enum OrganizationTypeEnum {
  // 异常情况(异常放行)
  EXCEPTION = '-1',
  // 特别情况(特殊车辆放行)
  SPECIAL = '0',
  // 支付宝支付
  ZFB = '1',
  // 微信支付
  WX = '2',
  // 现金支付
  CASH = '3',
  // 无需支付
  NO_NEED_TO_PAY = '4',
  // 其他
  OTHER = '5',
}

export enum ParkingEquipmentTypeEnum {
  // 未知
  UNKNOWN = '-1',
  // <未定义类别>
  UNDEFINED = '0',
  // 地下停车场
  ROADSIDE = '1',
  // 露天停车场
  OUTDOORS = '2',
  // 路内停车场
  SIDE = '3',
}

export enum ParkingLotCarTypeEnum {
  // 未知
  UNKNOWN = '-1',
  // 默认
  DEFAULT = '0',
  // 小型车
  SMALL = '1',
  // 中型车
  MIDDLE = '2',
  // 大型车
  BIG = '3',
  // 超大型车
  MORE_BIG = '4',
}

export enum ParkingLotChargesRuleEnum {
  // 未知
  UNKNOWN = '-1',
  // 按照不同时间段不同价格进行收费
  TIME_RANGE = '4',
  // 按照停车时长收费，固定价格
  STOP_TIME_FIXED = '6',
  // 按照星期一到日设置收费规则
  DAY_OF_WEEK = '8',
  // 特殊时间段额外费用，比如过夜费，高峰时段停车额外费用等
  SPECIAL_TIME_COST = '9',
  // 按照停车时长收费，超过该值后，按照每小时收取N元收费
  STOP_TIME_MORE = '10',
  // 按次收费
  TIME = '91',
  // 分段收费
  SUBSECTION = '92',
  // 综合型规则
  SYNTHESIZE = '101',
}

export enum ParkingLotMemberTypeEnum {
  // 未知
  UNKNOWN = '-1',
  // 包月
  MONTHLY = '1',
  // 包年
  YEARLY = '2',
}

export enum ParkingLotNatureEnum {
  // 商业体
  COMMERCIAL_BODY = '1',
  // 办公园区
  OFFICE_PARK = '2',
  // 其他
  OTHER = '3',
  // 医院
  HOSPITAL = '4',
  // 政府单位
  GOVERNMENT_UNITS = '5',
  // 院校
  UNIVERSITIES_AND_COLLEGES = '6',
  // 公共设施
  COMMUNAL_FACILITIES = '7',
  // 住宅小区
  RESIDENTIAL_QUARTERS = '8',
  // 未知
  UNKNOWN = '-1',
  // <未定义类别>
  UNDEFINED = '0',
}

export enum ParkingLotTypeEnum {
  // 未知
  UNKNOWN = '-1',
  // 未定义类别
  UNDEFINED = '0',
  // 路内停车场
  INSIDEROAD = '1',
  // 路外停车场
  OFFROAD = '2',
}

export enum ParkingRateQueryTypeEnum {
  // 当天
  NOW = '1',
  // 一周内
  WEEK = '2',
  // 一个月内
  MONTH = '3',
}

export enum ParkingRecordSyncTypeEnum {
  // 入场同步
  ENTRY = 'ENTRY',
  // 出场同步
  LEAVE = 'LEAVE',
  // 支付同步
  PAY = 'PAY',
  // 无牌车入场
  ENTRY_UNLICENSED = 'ENTRY_UNLICENSED',
}

export enum ParkingSpaceNetStatusEnum {
  // 不在线
  NETSTATUS_UNKNOWN = '2',
  // 未知
  NETSTATUS_WITHOUT = '0',
  // 在线
  NETSTATUS_HAVE = '1',
}

export enum ParkingSpaceStateEnum {
  // 未知
  UNKNOWN = '2',
  // 无车
  UNDEFINED = '0',
  // 有车
  THERE_CAR = '1',
}

export enum ParkingSpaceType {
  // 固定车位
  LONG_TIME = '1',
  // 临时车位
  SHORT_TIME = '2',
  // 备用车位
  FREE_TIME = '3',
}

export enum ParkingStatusEnum {
  // 停车中
  PARKING = '1',
  // 已离场
  LEAVINGED = '2',
}

export enum PayStateEnum {
  // 未知
  UNKNOWN = '-1',
  // 数据异常
  NOT_ACCESS = '0',
  // 未支付
  UN_PAY = '1',
  // 已支付
  PAYED = '2',
  // 超时
  TIMEOUT = '3',
  // 离场未支付
  NO_PAY_LEAVING = '4',
  // 无需支付
  NO_NEED_TO_PAY = '5',
  // 白名单
  WHITELIST = '6',
  // 黑名单
  BLACKLIST = '7',
  // 执行错误
  ERROR = '8',
}

export enum PaymentTypeEnum {
  // 自助缴费
  SELF_SERVICE = '0',
  // 管理员收费
  ADMIN = '1',
}

export enum PowerTypeEnum {
  // OIL
  OIL = 'OIL',
  // NEW_ENERGY
  NEW_ENERGY = 'NEW_ENERGY',
  // MIX
  MIX = 'MIX',
  // OTHER
  OTHER = 'OTHER',
}

export enum PromptMessageEnum {
  // PARAMETER_CANNOT_BE_EMPTY
  PARAMETER_CANNOT_BE_EMPTY = 'PARAMETER_CANNOT_BE_EMPTY',
}

export enum RecognitionTypeEnum {
  // 自动识别
  AUTO = '0',
  // 人工矫正
  ARTIFICIAL_CORRECTION = '1',
  // 人工录入
  MANUAL_INPUT = '2',
}

export enum StrategyConditionEnum {
  // 未知
  UNKNOWN = '-1',
  // 不限制
  ALL = '1',
  // 日期条件
  DATE_CONDITION = '2',
  // 节日条件
  HOLIDAY_CONDITION = '3',
  // 临时
  DATE_CONDITION_TEMPORARY = '11',
  // 每年
  DATE_CONDITION_YEAR = '12',
  // 星期
  WEEK = '21',
  // 节日
  HOLIDAY = '22',
}

export enum SyncStateEnum {
  // 不需要
  NOT_NEET = '1',
  // 成功
  SYNC_TRUE = '2',
  // 失败
  SYNC_FAIL = '3',
}

export enum TimeFrameType {
  // 全部时间
  ALL = 'ALL',
  // 7天前
  SEVENDAY = 'SEVENDAY',
  // 30天前
  THIRTYDAY = 'THIRTYDAY',
  // 90天前
  NINETYDAY = 'NINETYDAY',
}

export enum TimeLongEnum {
  // 未知
  UNKNOWN = '-1',
  // 分钟
  MIN = '1',
  // 小时
  HOUR = '2',
  // 天
  DAY = '3',
  // 月
  MON = '4',
  // 年
  YEAR = '5',
}

export enum WsCallbackTypeEnum {
  // IOT访问记录表同步
  ACCESS_RECORD = 'ACCESS_RECORD',
  // 在场表同步
  REAL_PARKING_SPACE = 'REAL_PARKING_SPACE',
  // 出场表同步
  LEAVE_PARKING_RECORD = 'LEAVE_PARKING_RECORD',
  // 访问记录表入场同步
  PARKING_RECORD_ENTRY = 'PARKING_RECORD_ENTRY',
  // 访问记录表出场同步
  PARKING_RECORD_LEAVE = 'PARKING_RECORD_LEAVE',
  // 访问记录表支付同步
  PARKING_RECORD_PAY = 'PARKING_RECORD_PAY',
  // 订单表入场同步
  PARKING_ORDER_ENTRY = 'PARKING_ORDER_ENTRY',
  // 订单表出场同步
  PARKING_ORDER_LEAVE = 'PARKING_ORDER_LEAVE',
  // 订单表支付同步
  PARKING_ORDER_PAY = 'PARKING_ORDER_PAY',
  // 无牌车入场
  M_PARKING_RECORD_ENTRY_UNLICENSED = 'M_PARKING_RECORD_ENTRY_UNLICENSED',
}
