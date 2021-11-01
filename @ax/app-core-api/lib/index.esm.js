import { AxDispatcher, AxEvent, AxVuexApp, AxVuexUser } from '@ax/app-core-framework';
import axios from 'axios';

var AttendanceType;
(function (AttendanceType) {
    // 未配置
    AttendanceType["UNKNOWN"] = "0";
    // 打卡成功
    AttendanceType["SUCCEED"] = "1";
    // 工作中
    AttendanceType["WORKING"] = "2";
    // 迟到
    AttendanceType["BE_LATE"] = "3";
})(AttendanceType || (AttendanceType = {}));
var BizCarTypeEnum;
(function (BizCarTypeEnum) {
    // 临时车
    BizCarTypeEnum["TEMP_CAR"] = "0";
    // 包月车
    BizCarTypeEnum["MONTH_CAR"] = "1";
    // 包年车
    BizCarTypeEnum["YEAR_CAR"] = "2";
    // 免费车
    BizCarTypeEnum["FREE_CAR"] = "3";
    // 黑名单车辆
    BizCarTypeEnum["BLACKLIST_CAR"] = "4";
})(BizCarTypeEnum || (BizCarTypeEnum = {}));
var CacheKey$2;
(function (CacheKey) {
    // 区域
    CacheKey["AREA"] = "AREA";
    // 城市
    CacheKey["CITY"] = "CITY";
    // 部门
    CacheKey["DEPARTMENT"] = "DEPARTMENT";
    // 组织
    CacheKey["ORGANIZATION"] = "ORGANIZATION";
    // 停车场
    CacheKey["PARKING_LOT"] = "PARKING_LOT";
    // 出入口
    CacheKey["ENTRANCE_AND_EXIT"] = "ENTRANCE_AND_EXIT";
    // 通道
    CacheKey["PASSAGE_WAY"] = "PASSAGE_WAY";
    // 厂商接入条数
    CacheKey["PARKINGLOT_COUNT"] = "PARKINGLOT_COUNT";
    // 自定义打卡配置
    CacheKey["COMMUTING_CONFIGURATION"] = "COMMUTING_CONFIGURATION";
})(CacheKey$2 || (CacheKey$2 = {}));
var CarActionType;
(function (CarActionType) {
    // 进
    CarActionType["ENTRY"] = "ENTRY";
    // 出
    CarActionType["OUT"] = "LEAVE";
    // 车牌校正
    CarActionType["CORRECTION"] = "CORRECTION";
})(CarActionType || (CarActionType = {}));
var CarLicenseColorEnum;
(function (CarLicenseColorEnum) {
    // 未知
    CarLicenseColorEnum["UNKNOWN"] = "0";
    // 蓝色
    CarLicenseColorEnum["BLUE"] = "1";
    // 黄色
    CarLicenseColorEnum["YELLOW"] = "2";
    // 白色
    CarLicenseColorEnum["WHITE"] = "3";
    // 黑色
    CarLicenseColorEnum["BLACK"] = "4";
    // 绿色
    CarLicenseColorEnum["GREEN"] = "5";
})(CarLicenseColorEnum || (CarLicenseColorEnum = {}));
var CarLicenseTypeEnum;
(function (CarLicenseTypeEnum) {
    // 本地
    CarLicenseTypeEnum["LOCAL"] = "0";
    // 外地
    CarLicenseTypeEnum["NOT_LOCAL"] = "1";
    // 其他
    CarLicenseTypeEnum["OTHER"] = "2";
})(CarLicenseTypeEnum || (CarLicenseTypeEnum = {}));
var CarTypeEnum;
(function (CarTypeEnum) {
    // 未知类型车牌
    CarTypeEnum["UNKNOWN_LICENSE"] = "0";
    // 蓝牌小汽车
    CarTypeEnum["BLUE_LICENSE"] = "1";
    // 黑牌小汽车
    CarTypeEnum["BLACK_LICENSE"] = "2";
    // 单排黄牌
    CarTypeEnum["SINGLE_YELLOW_LICENSE"] = "3";
    // 双排黄牌
    CarTypeEnum["DOUBLE_YELLOW_LICENSE"] = "4";
    // 警车车牌
    CarTypeEnum["POLICE_LICENSE"] = "5";
    // 武警车牌
    CarTypeEnum["ARMED_POLICE_LICENSE"] = "6";
    // 个性化车牌
    CarTypeEnum["PERSONALIZED_LICENSE"] = "7";
    // 单排军车牌
    CarTypeEnum["SINGLE_MILITARY_LICENSE"] = "8";
    // 双排军车牌
    CarTypeEnum["DOUBLE_MILITARY_LICENSE"] = "9";
    // 使馆车牌
    CarTypeEnum["EMBASSY_LICENSE"] = "10";
    // 香港进出中国大陆车牌
    CarTypeEnum["HONG_KONG_LICENSE"] = "11";
    // 农用车牌
    CarTypeEnum["AGRICULTURAL_LICENSE"] = "12";
    // 教练车牌
    CarTypeEnum["COACH_LICENSE"] = "13";
    // 澳门进出中国大陆车牌
    CarTypeEnum["MACAO_LICENSE"] = "14";
    // 双层武警车牌
    CarTypeEnum["DOUBLE_ARMED_POLICE_LICENSE"] = "15";
    // 武警总队车牌
    CarTypeEnum["ARMED_POLICE_CROPS"] = "16";
    // 双层武警总队车牌
    CarTypeEnum["DOUBLE_ARMED_POLICE_CROPS"] = "17";
    // 民航车牌
    CarTypeEnum["AIRPORT"] = "18";
    // 新能源车牌
    CarTypeEnum["NEW_ENERGY"] = "19";
})(CarTypeEnum || (CarTypeEnum = {}));
var ChargeTypeEnum;
(function (ChargeTypeEnum) {
    // 免费车
    ChargeTypeEnum["FREE"] = "1";
    // 包月车
    ChargeTypeEnum["MONTHLY_PAYMENT"] = "2";
    // 包年车
    ChargeTypeEnum["YEAR_PAYMENT"] = "3";
})(ChargeTypeEnum || (ChargeTypeEnum = {}));
var ColorTypeEnum;
(function (ColorTypeEnum) {
    // 未知
    ColorTypeEnum["UNKNOWN"] = "0";
    // 蓝色
    ColorTypeEnum["BLUE"] = "1";
    // 黄色
    ColorTypeEnum["YELLOW"] = "2";
    // 白色
    ColorTypeEnum["WHITE"] = "3";
    // 黑色
    ColorTypeEnum["BLACK"] = "4";
    // 绿色
    ColorTypeEnum["GREEN"] = "5";
})(ColorTypeEnum || (ColorTypeEnum = {}));
var DataType;
(function (DataType) {
    // D_RECOGNITION
    DataType["D_RECOGNITION"] = "D_RECOGNITION";
    // D_GEOMAGNETISM
    DataType["D_GEOMAGNETISM"] = "D_GEOMAGNETISM";
    // D_ORDER
    DataType["D_ORDER"] = "D_ORDER";
})(DataType || (DataType = {}));
var DayOfWeekEnum;
(function (DayOfWeekEnum) {
    // 未知
    DayOfWeekEnum["UNKNOWN"] = "-1";
    // 星期一
    DayOfWeekEnum["MONDAY"] = "1";
    // 星期二
    DayOfWeekEnum["TUESDAY"] = "2";
    // 星期三
    DayOfWeekEnum["WEDNESDAY"] = "3";
    // 星期四
    DayOfWeekEnum["THURSDAY"] = "4";
    // 星期五
    DayOfWeekEnum["FRIDAY"] = "5";
    // 星期六
    DayOfWeekEnum["SATURDAY"] = "6";
    // 星期日
    DayOfWeekEnum["SUNDAY"] = "7";
    // 全部
    DayOfWeekEnum["ALL"] = "8";
})(DayOfWeekEnum || (DayOfWeekEnum = {}));
var DeployEnum;
(function (DeployEnum) {
    // <全部>
    DeployEnum["ALL"] = "0";
    // 已部署
    DeployEnum["DEPLOYED"] = "1";
    // 未部署
    DeployEnum["NOTDEPLOY"] = "2";
})(DeployEnum || (DeployEnum = {}));
var DeviceGeomagnetismBatteryLowEnum;
(function (DeviceGeomagnetismBatteryLowEnum) {
    // 正常
    DeviceGeomagnetismBatteryLowEnum["UNKNOWN"] = "0";
    // 电量低报警
    DeviceGeomagnetismBatteryLowEnum["ONLINE"] = "1";
})(DeviceGeomagnetismBatteryLowEnum || (DeviceGeomagnetismBatteryLowEnum = {}));
var DeviceGeomagnetismNetStatusEnum;
(function (DeviceGeomagnetismNetStatusEnum) {
    // 未知
    DeviceGeomagnetismNetStatusEnum["UNKNOWN"] = "0";
    // 在线
    DeviceGeomagnetismNetStatusEnum["ONLINE"] = "1";
    // 离线
    DeviceGeomagnetismNetStatusEnum["OFFLINE"] = "2";
})(DeviceGeomagnetismNetStatusEnum || (DeviceGeomagnetismNetStatusEnum = {}));
var EntranceAndExitTypeEnum;
(function (EntranceAndExitTypeEnum) {
    // 入口
    EntranceAndExitTypeEnum["ENTRY"] = "1";
    // 出口
    EntranceAndExitTypeEnum["LEAVE"] = "2";
})(EntranceAndExitTypeEnum || (EntranceAndExitTypeEnum = {}));
var FlowTypeEnum;
(function (FlowTypeEnum) {
    // 一体机
    FlowTypeEnum["INTEGRATED_MACHINE"] = "IntegratedMachine";
    // 高位相机
    FlowTypeEnum["HIGH_POSITION_CAMERA"] = "HighPositionCamera";
    // APP
    FlowTypeEnum["APP"] = "APP";
})(FlowTypeEnum || (FlowTypeEnum = {}));
var FormulaModeEnum;
(function (FormulaModeEnum) {
    // 未知
    FormulaModeEnum["UNKNOWN"] = "-1";
    // 时长不够，按照设置的时长计费
    FormulaModeEnum["INTACT"] = "1";
    // 百分比
    FormulaModeEnum["PERCENTAGE"] = "2";
})(FormulaModeEnum || (FormulaModeEnum = {}));
var HandlerTypeEnum;
(function (HandlerTypeEnum) {
    // 自动放行
    HandlerTypeEnum["AUTO"] = "1";
    // 特殊车辆放行
    HandlerTypeEnum["SPECIAL_RELEASE"] = "2";
    // 异常放行
    HandlerTypeEnum["EXCEPTION_RELEASE"] = "3";
    // 现金放行
    HandlerTypeEnum["CASH_RELEASE"] = "4";
    // 人工放行
    HandlerTypeEnum["NORMAL_RELEASE"] = "5";
})(HandlerTypeEnum || (HandlerTypeEnum = {}));
var Heartbeat;
(function (Heartbeat) {
    // 心跳请求
    Heartbeat["REQ"] = "{[(HB_REQ)]}";
    // 心跳响应
    Heartbeat["RESP"] = "{[(HB_RESP)]}";
})(Heartbeat || (Heartbeat = {}));
var HolidayEnum;
(function (HolidayEnum) {
    // 未知
    HolidayEnum["UNKNOWN"] = "-1";
    // 全部
    HolidayEnum["ALL"] = "11";
    // 元旦
    HolidayEnum["YUAN_DAN"] = "12";
    // 春节
    HolidayEnum["CHUN_JIE"] = "13";
    // 清明
    HolidayEnum["QING_MING"] = "14";
    // 劳动节
    HolidayEnum["LABOUR"] = "15";
    // 端午
    HolidayEnum["DUAN_WU"] = "16";
    // 中秋
    HolidayEnum["ZHONG_QIU"] = "17";
    // 国庆节
    HolidayEnum["NATIONAL_DAY"] = "18";
})(HolidayEnum || (HolidayEnum = {}));
var IndexTypeEnum;
(function (IndexTypeEnum) {
    // '注册总数-上线总数-在线总数-区域'
    IndexTypeEnum["STATISTICS_REGISTER_ONLINE_ONLINE_STATE_GROUP_AREA"] = "0";
    // '接入总量-类型'
    IndexTypeEnum["PARKING_LOT_TOTAL_GROUP_TYPE"] = "1";
    // '车场总数-区域'
    IndexTypeEnum["PARKING_LOT_TOTAL_GROUP_DISTRICT"] = "2";
    // '车位总数-区域'
    IndexTypeEnum["PARKING_SPACE_TOTAL_GROUP_DISTRICT"] = "3";
    // '车场总数-厂商'
    IndexTypeEnum["PARKING_LOT_TOTAL_GROUP_OPERATOR_NAME"] = "4";
    // '车场总数-城市'
    IndexTypeEnum["PARKING_LOT_TOTAL"] = "5";
    // '厂商总数-城市'
    IndexTypeEnum["MANUFACTURER_TOTAL"] = "6";
    // '车场总数-在线数-城市-周'
    IndexTypeEnum["PARKING_LOT_TOTAL_ONLINE_STATE_GROUP_CITY_WEEK"] = "7";
    // '区域车辆流转情况'
    IndexTypeEnum["CAR_INOUT_TOTAL_GROUP_DISTRICT_DAY"] = "8";
    // '总车流量-城市'
    IndexTypeEnum["TRAFFIC_VOLUME_TOTAL"] = "9";
    // '区域车位使用率'
    IndexTypeEnum["PARKING_SPACE_USED_RATE_GROUP_DISTRICT_DAY"] = "10";
    // '区域占用率-小时'
    IndexTypeEnum["OCCUPANCY_RATE_GROUP_DISTRICT_HOURS"] = "11";
    // '停车量-城市-区域-小时'
    IndexTypeEnum["TRAFFIC_GROUP_CITY_DISTRICT_HOURS"] = "12";
    // '停车场-占用率-小时'
    IndexTypeEnum["OCCUPANCY_RATE_GROUP_PARKING_LOT_HOURS"] = "13";
    // '注册总数-上线数-在线数-路内车场数-路外车场数-城市'
    IndexTypeEnum["PARKING_LOT_REGISTER_TOTAL_GROUP_CITY"] = "14";
    // '注册总数-上线数-城市-日'
    IndexTypeEnum["PARKING_LOT_REGISTER_TOTAL_GROUP_CITY_DAY"] = "15";
    // '车流量-城市-区域-车场属性-车场名称-小时'
    IndexTypeEnum["TRAFFIC_VOLUME_TOTAL_GROUP_CITY_DISTRICT_NATURE_PARKING_LOT_NAME_HOURS"] = "16";
    // '实时停车列表-城市'
    IndexTypeEnum["REAL_TIME_PARKING_LIST"] = "17";
    // '收费总金额-城市'
    IndexTypeEnum["REAL_TIME_CHARGE_ALL_AMOUNT_CITY"] = "18";
    // '车场概况-车场总数-泊位总数-余位总数-占用率'
    IndexTypeEnum["PARKING_LOT_SPACE_REMAIN_TOTAL_CITY"] = "19";
    // '今日车流量-城市'
    IndexTypeEnum["TODAY_TRAFFIC_FLOW"] = "20";
})(IndexTypeEnum || (IndexTypeEnum = {}));
var MenuLevelOrderType$2;
(function (MenuLevelOrderType) {
    // 升级
    MenuLevelOrderType["UPGRADE"] = "1";
    // 降级
    MenuLevelOrderType["DOWNGRADE"] = "2";
    // 上移
    MenuLevelOrderType["MOVE_UP"] = "3";
    // 下移
    MenuLevelOrderType["MOVE_DOWN"] = "4";
})(MenuLevelOrderType$2 || (MenuLevelOrderType$2 = {}));
var MenuPositionType$2;
(function (MenuPositionType) {
    // 当前上方增加
    MenuPositionType["UPPER"] = "1";
    // 当前下方增加
    MenuPositionType["LOWER"] = "2";
    // 子菜单页面
    MenuPositionType["SUBMENU"] = "3";
})(MenuPositionType$2 || (MenuPositionType$2 = {}));
var MessageType;
(function (MessageType) {
    // 调用Actor服务
    MessageType["M_INVOKE_ACTOR"] = "INVOKE_ACTOR";
    // 识别数据响应
    MessageType["M_RECOGNITION"] = "RECOGNITION";
    // 地磁感应数据响应
    MessageType["M_GEOMAGNETIC"] = "GEOMAGNETIC";
    // 订单数据
    MessageType["M_ORDER"] = "ORDER";
    // 订单数据
    MessageType["M_ORDER_PAY"] = "ORDER";
    // 停车记录
    MessageType["M_PARKING_RECORD"] = "PARKING_RECORD";
    // 推送停车场数据到云端
    MessageType["M_PARKING_LOT"] = "PARKING_LOT";
    // 收费规则
    MessageType["M_CHARGES_RULE"] = "CHARGES_RULE";
    // 收费规则
    MessageType["M_CHARGES_RULE_CALL_BACK"] = "CHARGES_RULE_CALL_BACK";
    // 收费规则
    MessageType["M_CHARGES_RULE_DETAIL"] = "CHARGES_RULE";
    // 收费规则
    MessageType["M_CHARGES_RULE_CALL_BACK_DETAIL"] = "CHARGES_RULE_CALL_BACK";
    // 收费策略
    MessageType["CHARGING_STRATEGY"] = "CHARGING_STRATEGY";
    // 收费策略
    MessageType["CHARGING_STRATEGY_CALL_BACK"] = "CHARGES_RULE_CALL_BACK";
    // 收费策略明细
    MessageType["CHARGING_STRATEGY_DETAIL"] = "CHARGING_STRATEGY_DETAIL";
    // 收费策略
    MessageType["PARKING_LOT_CHARGING_RELATION"] = "PARKING_LOT_CHARGING_RELATION";
    // 收费策略
    MessageType["PARKING_LOT_CHARGING_RELATION_CALL_BACK"] = "PARKING_LOT_CHARGING_RELATION_CALL_BACK";
    // 费策略和车场关系表
    MessageType["PARKING_LOT_STRATEGY_RELATION"] = "PARKING_LOT_STRATEGY_RELATION";
    // 费策略和车场关系表
    MessageType["PARKING_LOT_STRATEGY_RELATION_CALL_BACK"] = "PARKING_LOT_STRATEGY_RELATION_CALL_BACK";
    // 规则同步回调，客户端
    MessageType["RULE_CALLBACK_CLIENT"] = "RULE_CALLBACK_CLIENT";
    // 规则同步回调，服务端
    MessageType["RULE_CALLBACK_SERVER"] = "RULE_CALLBACK_SERVER";
    // 推送停车场数据到大数据
    MessageType["M_PARKING_LOT_TO_BIG_DATA"] = "PARKING_LOT_TO_BIG_DATA";
    // 推送停车记录数据到大数据
    MessageType["M_PARKING_RECORD_TO_BIG_DATA"] = "M_PARKING_RECORD_TO_BIG_DATA";
    // 实时停车表
    MessageType["M_REAL_PARKING_SPACE"] = "REAL_PARKING_SPACE";
    // 统计
    MessageType["STATISTICS"] = "STATISTICS";
    // 车辆离场信息表
    MessageType["M_LEAVE_PARKING_RECORD"] = "LEAVE_PARKING_RECORD";
    // 生成价格通知
    MessageType["M_GENERATE_PRICE_NOTICE"] = "M_GENERATE_PRICE_NOTICE";
    // 生成价格通知
    MessageType["M_GENERATE_PRICE_NOTICE_CALL_BACK"] = "M_GENERATE_PRICE_NOTICE";
    // 云服务通知本地重新计费
    MessageType["CHECK_PRICE_NOTICE"] = "CHECK_PRICE_NOTICE";
    // 本地计费完成返回云服务
    MessageType["CHECK_PRICE_NOTICE_CALL_BACK"] = "CHECK_PRICE_NOTICE_CALL_BACK";
    // iot访问本地生成订单临时记录数据通知云服务
    MessageType["CREATE_IOT_ORDER_DATA_SEND_TO_SERVER"] = "CREATE_IOT_ORDER_DATA_SEND_TO_SERVER";
    // 临时订单数据同步云后回调
    MessageType["CREATE_IOT_ORDER_DATA_SEND_TO_SERVER_CALL_BACK"] = "CREATE_IOT_ORDER_DATA_SEND_TO_SERVER";
    // 云平台请求本地系统生成价格
    MessageType["M_PRICE_REQUEST"] = "M_PRICE_REQUEST";
    // 本地系统生成价格返回云平台
    MessageType["M_PRICE_RESPONSE"] = "M_PRICE_RESPONSE";
    // 本地生成计费记录同步到云
    MessageType["PARKING_CHARGES_CALCULATION_RECORD_TO_SERVER"] = "PARKING_CHARGES_CALCULATION_RECORD_TO_SERVER";
    // 平台生成价格返回云本地系统
    MessageType["PARKING_CHARGES_CALCULATION_RECORD_TO_CLIENT"] = "PARKING_CHARGES_CALCULATION_RECORD_TO_CLIENT";
    // 发送修改车牌事件
    MessageType["M_CHANGE_NUM_EVENT"] = "M_CHANGE_NUM_EVENT";
    // IOT停车记录
    MessageType["M_ACCESS_RECORD"] = "M_ACCESS_RECORD";
    // 消息（离场）
    MessageType["M_ENTRY"] = "M_ENTRY";
    // 已缴费-缴费信息
    MessageType["M_PAYMENT_INFO"] = "M_PAYMENT_INFO";
    // 已缴费-缴费信息
    MessageType["M_PAYMENT_LEAVE_REMIND"] = "M_PAYMENT_LEAVE_REMIND";
    // 消息（离场）
    MessageType["M_LEAVE"] = "M_LEAVE";
    // 回调，客户端
    MessageType["M_CALLBACK_CLIENT"] = "M_CALLBACK_CLIENT";
    // 回调，服务端
    MessageType["M_CALLBACK_SERVER"] = "M_CALLBACK_SERVER";
    // 停车位
    MessageType["M_PARKING_SPACE"] = "M_CALLBACK_SERVER";
    // 无牌车入场
    MessageType["M_PARKING_RECORD_ENTRY_UNLICENSED"] = "M_PARKING_RECORD_ENTRY_UNLICENSED";
})(MessageType || (MessageType = {}));
var MsgType;
(function (MsgType) {
    // 入场消息
    MsgType["ENTRY"] = "ENTRY";
    // 缴费消息
    MsgType["PAY"] = "PAY";
    // 离场消息
    MsgType["OUT"] = "OUT";
})(MsgType || (MsgType = {}));
var NoPayType;
(function (NoPayType) {
    // 未知
    NoPayType["UNKNOWN"] = "0";
    // 车辆未缴费逃逸
    NoPayType["UNDEFINED"] = "1";
    // 异常放行
    NoPayType["EXCEPTION"] = "3";
    // 特殊车辆放行
    NoPayType["SPECIAL"] = "4";
    // 无需支付
    NoPayType["NO_NEED_TO_PAY"] = "5";
    // 其他
    NoPayType["ELSE"] = "10";
})(NoPayType || (NoPayType = {}));
var OrderStatusEnum;
(function (OrderStatusEnum) {
    // 预创建订单
    OrderStatusEnum["PRE_ORDER"] = "0";
    // 待付款
    OrderStatusEnum["WAITING_FOR_PAY"] = "1";
    // 已支付
    OrderStatusEnum["PAID"] = "2";
    // 未支付
    OrderStatusEnum["NOT_PAID"] = "3";
    // 无需支付
    OrderStatusEnum["NO_NEED_TO_PAY"] = "4";
})(OrderStatusEnum || (OrderStatusEnum = {}));
var OrderSyncTypeEnum;
(function (OrderSyncTypeEnum) {
    // 入场同步
    OrderSyncTypeEnum["ENTRY"] = "ENTRY";
    // 出场同步
    OrderSyncTypeEnum["LEAVE"] = "LEAVE";
    // 价格同步
    OrderSyncTypeEnum["PRICE"] = "PRICE";
    // 支付同步
    OrderSyncTypeEnum["PAY"] = "PAY";
    // 获取金额
    OrderSyncTypeEnum["REQUEST_PRICE"] = "REQUEST_PRICE";
    // 获取金额
    OrderSyncTypeEnum["RESPONSE_PRICE"] = "REQUEST_PRICE";
})(OrderSyncTypeEnum || (OrderSyncTypeEnum = {}));
var OrderTypeEnums;
(function (OrderTypeEnums) {
    // PAY
    OrderTypeEnums["PAY"] = "PAY";
})(OrderTypeEnums || (OrderTypeEnums = {}));
var OrganizationTypeEnum;
(function (OrganizationTypeEnum) {
    // 异常情况(异常放行)
    OrganizationTypeEnum["EXCEPTION"] = "-1";
    // 特别情况(特殊车辆放行)
    OrganizationTypeEnum["SPECIAL"] = "0";
    // 支付宝支付
    OrganizationTypeEnum["ZFB"] = "1";
    // 微信支付
    OrganizationTypeEnum["WX"] = "2";
    // 现金支付
    OrganizationTypeEnum["CASH"] = "3";
    // 无需支付
    OrganizationTypeEnum["NO_NEED_TO_PAY"] = "4";
    // 其他
    OrganizationTypeEnum["OTHER"] = "5";
})(OrganizationTypeEnum || (OrganizationTypeEnum = {}));
var ParkingEquipmentTypeEnum;
(function (ParkingEquipmentTypeEnum) {
    // 未知
    ParkingEquipmentTypeEnum["UNKNOWN"] = "-1";
    // <未定义类别>
    ParkingEquipmentTypeEnum["UNDEFINED"] = "0";
    // 地下停车场
    ParkingEquipmentTypeEnum["ROADSIDE"] = "1";
    // 露天停车场
    ParkingEquipmentTypeEnum["OUTDOORS"] = "2";
    // 路内停车场
    ParkingEquipmentTypeEnum["SIDE"] = "3";
})(ParkingEquipmentTypeEnum || (ParkingEquipmentTypeEnum = {}));
var ParkingLotCarTypeEnum;
(function (ParkingLotCarTypeEnum) {
    // 未知
    ParkingLotCarTypeEnum["UNKNOWN"] = "-1";
    // 默认
    ParkingLotCarTypeEnum["DEFAULT"] = "0";
    // 小型车
    ParkingLotCarTypeEnum["SMALL"] = "1";
    // 中型车
    ParkingLotCarTypeEnum["MIDDLE"] = "2";
    // 大型车
    ParkingLotCarTypeEnum["BIG"] = "3";
    // 超大型车
    ParkingLotCarTypeEnum["MORE_BIG"] = "4";
})(ParkingLotCarTypeEnum || (ParkingLotCarTypeEnum = {}));
var ParkingLotChargesRuleEnum;
(function (ParkingLotChargesRuleEnum) {
    // 未知
    ParkingLotChargesRuleEnum["UNKNOWN"] = "-1";
    // 按照不同时间段不同价格进行收费
    ParkingLotChargesRuleEnum["TIME_RANGE"] = "4";
    // 按照停车时长收费，固定价格
    ParkingLotChargesRuleEnum["STOP_TIME_FIXED"] = "6";
    // 按照星期一到日设置收费规则
    ParkingLotChargesRuleEnum["DAY_OF_WEEK"] = "8";
    // 特殊时间段额外费用，比如过夜费，高峰时段停车额外费用等
    ParkingLotChargesRuleEnum["SPECIAL_TIME_COST"] = "9";
    // 按照停车时长收费，超过该值后，按照每小时收取N元收费
    ParkingLotChargesRuleEnum["STOP_TIME_MORE"] = "10";
    // 按次收费
    ParkingLotChargesRuleEnum["TIME"] = "91";
    // 分段收费
    ParkingLotChargesRuleEnum["SUBSECTION"] = "92";
    // 综合型规则
    ParkingLotChargesRuleEnum["SYNTHESIZE"] = "101";
})(ParkingLotChargesRuleEnum || (ParkingLotChargesRuleEnum = {}));
var ParkingLotMemberTypeEnum;
(function (ParkingLotMemberTypeEnum) {
    // 未知
    ParkingLotMemberTypeEnum["UNKNOWN"] = "-1";
    // 包月
    ParkingLotMemberTypeEnum["MONTHLY"] = "1";
    // 包年
    ParkingLotMemberTypeEnum["YEARLY"] = "2";
})(ParkingLotMemberTypeEnum || (ParkingLotMemberTypeEnum = {}));
var ParkingLotNatureEnum;
(function (ParkingLotNatureEnum) {
    // 商业体
    ParkingLotNatureEnum["COMMERCIAL_BODY"] = "1";
    // 办公园区
    ParkingLotNatureEnum["OFFICE_PARK"] = "2";
    // 其他
    ParkingLotNatureEnum["OTHER"] = "3";
    // 医院
    ParkingLotNatureEnum["HOSPITAL"] = "4";
    // 政府单位
    ParkingLotNatureEnum["GOVERNMENT_UNITS"] = "5";
    // 院校
    ParkingLotNatureEnum["UNIVERSITIES_AND_COLLEGES"] = "6";
    // 公共设施
    ParkingLotNatureEnum["COMMUNAL_FACILITIES"] = "7";
    // 住宅小区
    ParkingLotNatureEnum["RESIDENTIAL_QUARTERS"] = "8";
    // 未知
    ParkingLotNatureEnum["UNKNOWN"] = "-1";
    // <未定义类别>
    ParkingLotNatureEnum["UNDEFINED"] = "0";
})(ParkingLotNatureEnum || (ParkingLotNatureEnum = {}));
var ParkingLotTypeEnum;
(function (ParkingLotTypeEnum) {
    // 未知
    ParkingLotTypeEnum["UNKNOWN"] = "-1";
    // 未定义类别
    ParkingLotTypeEnum["UNDEFINED"] = "0";
    // 路内停车场
    ParkingLotTypeEnum["INSIDEROAD"] = "1";
    // 路外停车场
    ParkingLotTypeEnum["OFFROAD"] = "2";
})(ParkingLotTypeEnum || (ParkingLotTypeEnum = {}));
var ParkingRateQueryTypeEnum;
(function (ParkingRateQueryTypeEnum) {
    // 当天
    ParkingRateQueryTypeEnum["NOW"] = "1";
    // 一周内
    ParkingRateQueryTypeEnum["WEEK"] = "2";
    // 一个月内
    ParkingRateQueryTypeEnum["MONTH"] = "3";
})(ParkingRateQueryTypeEnum || (ParkingRateQueryTypeEnum = {}));
var ParkingRecordSyncTypeEnum;
(function (ParkingRecordSyncTypeEnum) {
    // 入场同步
    ParkingRecordSyncTypeEnum["ENTRY"] = "ENTRY";
    // 出场同步
    ParkingRecordSyncTypeEnum["LEAVE"] = "LEAVE";
    // 支付同步
    ParkingRecordSyncTypeEnum["PAY"] = "PAY";
    // 无牌车入场
    ParkingRecordSyncTypeEnum["ENTRY_UNLICENSED"] = "ENTRY_UNLICENSED";
})(ParkingRecordSyncTypeEnum || (ParkingRecordSyncTypeEnum = {}));
var ParkingSpaceNetStatusEnum;
(function (ParkingSpaceNetStatusEnum) {
    // 不在线
    ParkingSpaceNetStatusEnum["NETSTATUS_UNKNOWN"] = "2";
    // 未知
    ParkingSpaceNetStatusEnum["NETSTATUS_WITHOUT"] = "0";
    // 在线
    ParkingSpaceNetStatusEnum["NETSTATUS_HAVE"] = "1";
})(ParkingSpaceNetStatusEnum || (ParkingSpaceNetStatusEnum = {}));
var ParkingSpaceStateEnum;
(function (ParkingSpaceStateEnum) {
    // 未知
    ParkingSpaceStateEnum["UNKNOWN"] = "2";
    // 无车
    ParkingSpaceStateEnum["UNDEFINED"] = "0";
    // 有车
    ParkingSpaceStateEnum["THERE_CAR"] = "1";
})(ParkingSpaceStateEnum || (ParkingSpaceStateEnum = {}));
var ParkingSpaceType;
(function (ParkingSpaceType) {
    // 固定车位
    ParkingSpaceType["LONG_TIME"] = "1";
    // 临时车位
    ParkingSpaceType["SHORT_TIME"] = "2";
    // 备用车位
    ParkingSpaceType["FREE_TIME"] = "3";
})(ParkingSpaceType || (ParkingSpaceType = {}));
var ParkingStatusEnum;
(function (ParkingStatusEnum) {
    // 停车中
    ParkingStatusEnum["PARKING"] = "1";
    // 已离场
    ParkingStatusEnum["LEAVINGED"] = "2";
})(ParkingStatusEnum || (ParkingStatusEnum = {}));
var PayStateEnum;
(function (PayStateEnum) {
    // 未知
    PayStateEnum["UNKNOWN"] = "-1";
    // 数据异常
    PayStateEnum["NOT_ACCESS"] = "0";
    // 未支付
    PayStateEnum["UN_PAY"] = "1";
    // 已支付
    PayStateEnum["PAYED"] = "2";
    // 超时
    PayStateEnum["TIMEOUT"] = "3";
    // 离场未支付
    PayStateEnum["NO_PAY_LEAVING"] = "4";
    // 无需支付
    PayStateEnum["NO_NEED_TO_PAY"] = "5";
    // 白名单
    PayStateEnum["WHITELIST"] = "6";
    // 黑名单
    PayStateEnum["BLACKLIST"] = "7";
    // 执行错误
    PayStateEnum["ERROR"] = "8";
})(PayStateEnum || (PayStateEnum = {}));
var PaymentTypeEnum;
(function (PaymentTypeEnum) {
    // 自助缴费
    PaymentTypeEnum["SELF_SERVICE"] = "0";
    // 管理员收费
    PaymentTypeEnum["ADMIN"] = "1";
})(PaymentTypeEnum || (PaymentTypeEnum = {}));
var PowerTypeEnum;
(function (PowerTypeEnum) {
    // OIL
    PowerTypeEnum["OIL"] = "OIL";
    // NEW_ENERGY
    PowerTypeEnum["NEW_ENERGY"] = "NEW_ENERGY";
    // MIX
    PowerTypeEnum["MIX"] = "MIX";
    // OTHER
    PowerTypeEnum["OTHER"] = "OTHER";
})(PowerTypeEnum || (PowerTypeEnum = {}));
var PromptMessageEnum;
(function (PromptMessageEnum) {
    // PARAMETER_CANNOT_BE_EMPTY
    PromptMessageEnum["PARAMETER_CANNOT_BE_EMPTY"] = "PARAMETER_CANNOT_BE_EMPTY";
})(PromptMessageEnum || (PromptMessageEnum = {}));
var RecognitionTypeEnum;
(function (RecognitionTypeEnum) {
    // 自动识别
    RecognitionTypeEnum["AUTO"] = "0";
    // 人工矫正
    RecognitionTypeEnum["ARTIFICIAL_CORRECTION"] = "1";
    // 人工录入
    RecognitionTypeEnum["MANUAL_INPUT"] = "2";
})(RecognitionTypeEnum || (RecognitionTypeEnum = {}));
var StrategyConditionEnum;
(function (StrategyConditionEnum) {
    // 未知
    StrategyConditionEnum["UNKNOWN"] = "-1";
    // 不限制
    StrategyConditionEnum["ALL"] = "1";
    // 日期条件
    StrategyConditionEnum["DATE_CONDITION"] = "2";
    // 节日条件
    StrategyConditionEnum["HOLIDAY_CONDITION"] = "3";
    // 临时
    StrategyConditionEnum["DATE_CONDITION_TEMPORARY"] = "11";
    // 每年
    StrategyConditionEnum["DATE_CONDITION_YEAR"] = "12";
    // 星期
    StrategyConditionEnum["WEEK"] = "21";
    // 节日
    StrategyConditionEnum["HOLIDAY"] = "22";
})(StrategyConditionEnum || (StrategyConditionEnum = {}));
var SyncStateEnum;
(function (SyncStateEnum) {
    // 不需要
    SyncStateEnum["NOT_NEET"] = "1";
    // 成功
    SyncStateEnum["SYNC_TRUE"] = "2";
    // 失败
    SyncStateEnum["SYNC_FAIL"] = "3";
})(SyncStateEnum || (SyncStateEnum = {}));
var TimeFrameType;
(function (TimeFrameType) {
    // 全部时间
    TimeFrameType["ALL"] = "ALL";
    // 7天前
    TimeFrameType["SEVENDAY"] = "SEVENDAY";
    // 30天前
    TimeFrameType["THIRTYDAY"] = "THIRTYDAY";
    // 90天前
    TimeFrameType["NINETYDAY"] = "NINETYDAY";
})(TimeFrameType || (TimeFrameType = {}));
var TimeLongEnum;
(function (TimeLongEnum) {
    // 未知
    TimeLongEnum["UNKNOWN"] = "-1";
    // 分钟
    TimeLongEnum["MIN"] = "1";
    // 小时
    TimeLongEnum["HOUR"] = "2";
    // 天
    TimeLongEnum["DAY"] = "3";
    // 月
    TimeLongEnum["MON"] = "4";
    // 年
    TimeLongEnum["YEAR"] = "5";
})(TimeLongEnum || (TimeLongEnum = {}));
var WsCallbackTypeEnum;
(function (WsCallbackTypeEnum) {
    // IOT访问记录表同步
    WsCallbackTypeEnum["ACCESS_RECORD"] = "ACCESS_RECORD";
    // 在场表同步
    WsCallbackTypeEnum["REAL_PARKING_SPACE"] = "REAL_PARKING_SPACE";
    // 出场表同步
    WsCallbackTypeEnum["LEAVE_PARKING_RECORD"] = "LEAVE_PARKING_RECORD";
    // 访问记录表入场同步
    WsCallbackTypeEnum["PARKING_RECORD_ENTRY"] = "PARKING_RECORD_ENTRY";
    // 访问记录表出场同步
    WsCallbackTypeEnum["PARKING_RECORD_LEAVE"] = "PARKING_RECORD_LEAVE";
    // 访问记录表支付同步
    WsCallbackTypeEnum["PARKING_RECORD_PAY"] = "PARKING_RECORD_PAY";
    // 订单表入场同步
    WsCallbackTypeEnum["PARKING_ORDER_ENTRY"] = "PARKING_ORDER_ENTRY";
    // 订单表出场同步
    WsCallbackTypeEnum["PARKING_ORDER_LEAVE"] = "PARKING_ORDER_LEAVE";
    // 订单表支付同步
    WsCallbackTypeEnum["PARKING_ORDER_PAY"] = "PARKING_ORDER_PAY";
    // 无牌车入场
    WsCallbackTypeEnum["M_PARKING_RECORD_ENTRY_UNLICENSED"] = "M_PARKING_RECORD_ENTRY_UNLICENSED";
})(WsCallbackTypeEnum || (WsCallbackTypeEnum = {}));

/**
 * 生成Actor
 * @returns {((...args: any[]) => Promise<void>) | {} | IActorList}
 */
function generateActor(request, config) {
    // eslint-disable-next-line no-console
    return new Proxy({}, {
        /**
         * 拦截指令，改为直接返回request请求
         * @param target
         * @param cmd 指令（接口路由）
         * @returns {(...args: any[]) => Promise<void>}
         */
        get(target, cmd) {
            // 返回对应的方法
            return (...args) => {
                // 是否找到对应的cmd
                if (cmd) {
                    // 找到的话返回请求
                    return request({
                        cmd,
                        args,
                        config,
                    });
                }
                else {
                    // 没找打的话在控制台提示
                    // eslint-disable-next-line no-console
                    console.warn(`无效的指令\n` +
                        `指令：${cmd}\n` +
                        ` ⚠ 请资讯前后端相关人员处理 ⚠`);
                    return Promise.reject();
                }
            };
        },
    });
}
/**
 * 生成测试接口
 * @param request
 * @param warn
 * @returns {(cmd: string, ...args: any[]) => Promise<unknown>}
 */
function generateTest(request, warn = true) {
    return function (cmd, ...args) {
        if (warn) {
            // eslint-disable-next-line no-console
            console.warn(`正在使用测试API\n` +
                `指令：${cmd}\n` +
                ` ⚠ 请在代码提交前切换到正式API ⚠`);
        }
        return request({
            cmd,
            args,
        });
    };
}

class Service {
    static redirect(data) {
        this.dispatcher.trigger(new AxEvent(this, 'redirect', data));
    }
}
// 事件分发器
Service.dispatcher = new AxDispatcher();

// Http配置
class Config {
    constructor(options) {
        var _a;
        // 配置host
        this.host = options.host;
        // 获取全局window对象
        const win = window;
        // 海阔去全局配置
        const host = (_a = win.GLOBAL_CONFIG) === null || _a === void 0 ? void 0 : _a.host;
        // 如果有全局的配置的情况下使用全局配置
        if (host) {
            Object.assign(this.host, host);
        }
    }
}
// 默认配置地址
const hostConfigDefault = {
    // 上传接口请求地址
    HOST_UPLOAD: 'http://nncs-data-services-upload.staging.iot-city.net:31027/',
    // 应用支撑平台请求地址
    HOST_BACKSTAGE: 'http://backstage.staging.iot-city.net:31027/',
    // 数据中台-系统设置 服务器地址
    HOST_DATA_SETTING: 'http://m-data-settings-impl.staging.iot-city.net:31027/',
    // 数据中台-租户中心 服务器地址
    HOST_DATA_TENANT: 'http://m-data-tenant-impl.staging.iot-city.net:31027/',
    // 业务中台-数据中心 服务器地址
    HOST_BIZ_DATA: 'http://m-biz-data-impl.staging.iot-city.net:31027/',
    // 业务中台-用户中心 服务器地址
    HOST_BIZ_USER: 'http://biz-user.staging.iot-city.net:31027/',
    // 应用系统-智慧停车系统 服务器地址
    HOST_APP_PARKING: 'http://m-app-parking-impl.staging.iot-city.net:31027/',
    // 应用系统-智慧停车系统 推送服务器地址
    WS_APP_PARKING: 'ws://m-app-parking-impl.staging.iot-city.net:31027/websocket/',
    // 应用系统-智慧停车系统 车辆接入
    WS_APP_PARKING_ACTION: 'ws://m-app-parking-action.staging.iot-city.net:31027/websocket/',
    // 视频推流
    VIDEO_HTTP_FLV: 'http://srs-docker.dev.iot-city.net:31027/',
    // 推流配置
    VIDEO_CONFIG: 'http://srs-docker.ai.dev.iot-city.net:31027/',
};
// 设置请求配置
const HttpConfig = new Config({
    host: hostConfigDefault,
});

var ApiCore = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Service: Service,
  HttpConfig: HttpConfig
});

// actor服务
class ActorBase {
    /**
     * 创建一个actor
     * @param request
     * @returns {{_<T extends any>(cmd: string, ...args: any[]): Promise<T>, new(): {}, prototype: {}}}
     */
    static create(request) {
        // 返回actor基类
        return class {
            /**
             * 用于测试的方法
             * @param cmd
             * @param args
             * @returns {any}
             */
            static _(cmd, ...args) {
                console.warn(`正在使用测试API\nACTOR：${this.name}\n指令：${cmd}\n ⚠ 请在代码提交前切换到正式API ⚠`);
                return request(cmd, ...args);
            }
        };
    }
    /**
     * 混合请求头
     * @param def
     * @param extend
     * @returns {{[p: string]: any}}
     */
    static mixinHeader(def, extend) {
        const headers = Object.assign(def, extend);
        Object.keys(headers).forEach((key) => {
            if (headers[key] === undefined) {
                delete headers[key];
            }
        });
        return headers;
    }
}

/**
 * api post 请求返回 模块响应状态码
 */
var ResultCode;
(function (ResultCode) {
    /**
     * 默认为未知状态
     */
    ResultCode[ResultCode["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * 成功状态码
     */
    ResultCode[ResultCode["OK"] = 1] = "OK";
    /**
     * 一般失败状态码
     */
    ResultCode[ResultCode["FAILED"] = 2] = "FAILED";
    /**
     * 内部异常状态码
     */
    ResultCode[ResultCode["EXCEPTION"] = 3] = "EXCEPTION";
    /**
     * 响应超时
     */
    ResultCode[ResultCode["TIMEOUT"] = 4] = "TIMEOUT";
    /**
     * 数据无效
     */
    ResultCode[ResultCode["INVALID"] = 5] = "INVALID";
    /**
     * 运行时错误
     */
    ResultCode[ResultCode["RUNTIME"] = 6] = "RUNTIME";
    /**
     * 编程错误
     */
    ResultCode[ResultCode["PROGRAMMING"] = 7] = "PROGRAMMING";
})(ResultCode || (ResultCode = {}));
/**
 * 前端定义的错误码 */
var ErrorCode;
(function (ErrorCode) {
    // 需要重定向
    ErrorCode[ErrorCode["REDIRECT"] = 0] = "REDIRECT";
    // 空的返回内容
    ErrorCode[ErrorCode["EMPTY"] = 1] = "EMPTY";
})(ErrorCode || (ErrorCode = {}));
/**
 * http代码
 */
var HttpCode;
(function (HttpCode) {
    // 无效的登录凭证
    HttpCode[HttpCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    // 登录有问题
    HttpCode[HttpCode["LOGIN_ERROR"] = 498] = "LOGIN_ERROR";
    // 登录失败
    HttpCode[HttpCode["LOGIN_FAILED"] = 499] = "LOGIN_FAILED";
})(HttpCode || (HttpCode = {}));

// 请求服务
class Request {
    constructor(config) {
        // 设置默认值，默认超时时间2分钟
        const defaultConfig = {
            timeout: 120000,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
        };
        // 合并配置
        this.config = Object.assign(defaultConfig, config);
        // 创建请求对象
        this.service = axios.create(this.config);
        // 配置请求对象
        this.service.interceptors.request.use((config) => {
            // data实际传递的是请求的配置，在拦截器再次处理
            if (config.data) {
                // 获取请求数据
                const { params, data, options, requestConfig, } = config.data;
                // 设置options信息
                if (options.lang) {
                    config.headers['Accept-Language'] = options.lang;
                }
                if (options.token) {
                    config.headers['AX-Token'] = options.token;
                }
                if (options.headers) {
                    for (const key in options.headers) {
                        config.headers[key] = options.headers[key];
                    }
                }
                // 序列化params数据
                if (params) {
                    config.params = params;
                }
                // 序列化body数据
                if (data) {
                    config.data = data;
                }
                // 是否使用额外的请求配置，注意，这个配置可能会覆盖前面的配置
                if (requestConfig) {
                    config = Object.assign(config, requestConfig);
                }
            }
            // 返回配置
            return config;
        }, 
        // 错误处理
        (error) => Promise.reject(error));
        // 配置响应对象
        this.service.interceptors.response.use((response) => {
            // 判断是否存在请求数据
            if (response.data) {
                // 获取响应结果（格式：{code,data,desc,ref}）
                const res = response.data;
                // 判断是否有效
                if (!res) {
                    // 无效
                    return Promise.reject({
                        errorCode: ErrorCode.EMPTY,
                    });
                }
                else if (res.code === ResultCode.OK) {
                    // 响应成功
                    return res.data;
                }
                else if (res.code === ResultCode.EXCEPTION) {
                    // 内部异常状态删除错误提示，不做提示
                    res.desc = '';
                    return Promise.reject(res);
                }
                else {
                    // 响应失败，也返回数据，方便前端判断错误并处理
                    return Promise.reject(res);
                }
            }
            else {
                // 直接返回内容
                return response.data;
            }
        }, 
        /**
         * http 错误的处理
         * @param error
         * @returns {Promise<void>}
         */
        (error) => {
            // 登录失效的处理
            if (error.response &&
                (error.response.status === HttpCode.UNAUTHORIZED ||
                    error.response.status === HttpCode.LOGIN_ERROR ||
                    error.response.status === HttpCode.LOGIN_FAILED)) {
                // 如果重定向，调用重定向方法
                if (config.redirect) {
                    config.redirect(error.response);
                    // 登录凭证问题自行处理
                    return Promise.reject({
                        errorCode: ErrorCode.REDIRECT,
                    });
                }
            }
            return Promise.reject(error);
        });
    }
    /**
     * 错误检测
     * @param err
     * @returns {Promise<string>}
     */
    static checkError(err) {
        if (err && err.code && err.desc) {
            return Promise.resolve('');
        }
    }
    /**
     * 修改Axios配置
     * @param setting
     */
    changeSetting(setting) {
        Object.assign(this.service.defaults, setting);
    }
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
    http(method, url, params, data, options = {}, requestConfig = {}) {
        return new Promise((resolve, reject) => {
            this.service({
                url,
                method,
                data: {
                    params,
                    data,
                    options,
                    requestConfig,
                },
            }).then((res) => {
                // 输出数据
                resolve(res);
            }, (error) => {
                // 输出错误
                reject(error);
            });
        });
    }
}

// 创建请求服务
const service$5 = new Request({
    baseURL: HttpConfig.host.HOST_APP_PARKING,
    redirect(data) {
        ApiCore.Service.redirect(data);
    },
});
/**
 * 请求服务
 */
function request$5(data) {
    var _a, _b;
    return service$5.http('post', `api/json/App-Parking/${data.cmd}`, {}, JSON.stringify(data.args), {
        headers: ActorBase.mixinHeader({
            'Accept-Language': AxVuexApp.lang,
            'AX-Token': AxVuexUser.token,
        }, ((_a = data.config) === null || _a === void 0 ? void 0 : _a.headers) || {}),
    }, ((_b = data.config) === null || _b === void 0 ? void 0 : _b.axiosConfig) || {});
}

// 生成正式api
const actor$5 = generateActor(request$5);
// 生成测试api
const test$5 = generateTest(request$5);
// 生成通用api
const http$5 = generateTest(request$5, false);
// 需要配置的模式
const config$4 = (config) => {
    return {
        actor: generateActor(request$5, config),
        test: test$5,
        http: http$5,
    };
};

var ApiAppParking = /*#__PURE__*/Object.freeze({
  __proto__: null,
  service: service$5,
  get AttendanceType () { return AttendanceType; },
  get BizCarTypeEnum () { return BizCarTypeEnum; },
  get CacheKey () { return CacheKey$2; },
  get CarActionType () { return CarActionType; },
  get CarLicenseColorEnum () { return CarLicenseColorEnum; },
  get CarLicenseTypeEnum () { return CarLicenseTypeEnum; },
  get CarTypeEnum () { return CarTypeEnum; },
  get ChargeTypeEnum () { return ChargeTypeEnum; },
  get ColorTypeEnum () { return ColorTypeEnum; },
  get DataType () { return DataType; },
  get DayOfWeekEnum () { return DayOfWeekEnum; },
  get DeployEnum () { return DeployEnum; },
  get DeviceGeomagnetismBatteryLowEnum () { return DeviceGeomagnetismBatteryLowEnum; },
  get DeviceGeomagnetismNetStatusEnum () { return DeviceGeomagnetismNetStatusEnum; },
  get EntranceAndExitTypeEnum () { return EntranceAndExitTypeEnum; },
  get FlowTypeEnum () { return FlowTypeEnum; },
  get FormulaModeEnum () { return FormulaModeEnum; },
  get HandlerTypeEnum () { return HandlerTypeEnum; },
  get Heartbeat () { return Heartbeat; },
  get HolidayEnum () { return HolidayEnum; },
  get IndexTypeEnum () { return IndexTypeEnum; },
  get MenuLevelOrderType () { return MenuLevelOrderType$2; },
  get MenuPositionType () { return MenuPositionType$2; },
  get MessageType () { return MessageType; },
  get MsgType () { return MsgType; },
  get NoPayType () { return NoPayType; },
  get OrderStatusEnum () { return OrderStatusEnum; },
  get OrderSyncTypeEnum () { return OrderSyncTypeEnum; },
  get OrderTypeEnums () { return OrderTypeEnums; },
  get OrganizationTypeEnum () { return OrganizationTypeEnum; },
  get ParkingEquipmentTypeEnum () { return ParkingEquipmentTypeEnum; },
  get ParkingLotCarTypeEnum () { return ParkingLotCarTypeEnum; },
  get ParkingLotChargesRuleEnum () { return ParkingLotChargesRuleEnum; },
  get ParkingLotMemberTypeEnum () { return ParkingLotMemberTypeEnum; },
  get ParkingLotNatureEnum () { return ParkingLotNatureEnum; },
  get ParkingLotTypeEnum () { return ParkingLotTypeEnum; },
  get ParkingRateQueryTypeEnum () { return ParkingRateQueryTypeEnum; },
  get ParkingRecordSyncTypeEnum () { return ParkingRecordSyncTypeEnum; },
  get ParkingSpaceNetStatusEnum () { return ParkingSpaceNetStatusEnum; },
  get ParkingSpaceStateEnum () { return ParkingSpaceStateEnum; },
  get ParkingSpaceType () { return ParkingSpaceType; },
  get ParkingStatusEnum () { return ParkingStatusEnum; },
  get PayStateEnum () { return PayStateEnum; },
  get PaymentTypeEnum () { return PaymentTypeEnum; },
  get PowerTypeEnum () { return PowerTypeEnum; },
  get PromptMessageEnum () { return PromptMessageEnum; },
  get RecognitionTypeEnum () { return RecognitionTypeEnum; },
  get StrategyConditionEnum () { return StrategyConditionEnum; },
  get SyncStateEnum () { return SyncStateEnum; },
  get TimeFrameType () { return TimeFrameType; },
  get TimeLongEnum () { return TimeLongEnum; },
  get WsCallbackTypeEnum () { return WsCallbackTypeEnum; },
  actor: actor$5,
  test: test$5,
  http: http$5,
  config: config$4
});

var AddressType$1;
(function (AddressType) {
    // systemdefault
    AddressType["SYSTEMDEFAULT"] = "1";
    // systemcustom
    AddressType["SYSTEMCUSTOM"] = "2";
})(AddressType$1 || (AddressType$1 = {}));
var AppCategory$1;
(function (AppCategory) {
    // 数据中台
    AppCategory["DATA"] = "0";
    // 业务中台
    AppCategory["BIZ"] = "1";
    // 应用系统
    AppCategory["APP"] = "2";
    // 租户菜单
    AppCategory["TM"] = "3";
})(AppCategory$1 || (AppCategory$1 = {}));
var AssociationMode$2;
(function (AssociationMode) {
    // 数据来源作为主表
    AssociationMode["MAIN_TABLE"] = "0";
    // 数据来源作为子表
    AssociationMode["SUB_TABLE"] = "1";
})(AssociationMode$2 || (AssociationMode$2 = {}));
var AssociationModeType$1;
(function (AssociationModeType) {
    // 本字段是所属数据字段（数据来源作为主表）
    AssociationModeType["CUSTOM"] = "1";
    // 本字段是级联入口字段（数据来源作为子表）
    AssociationModeType["SYSTEM_FIELD"] = "2";
})(AssociationModeType$1 || (AssociationModeType$1 = {}));
var AuthorizeVersionType$1;
(function (AuthorizeVersionType) {
    // 完全版
    AuthorizeVersionType["FULL"] = "1";
    // 试用版
    AuthorizeVersionType["TRIAL"] = "2";
    // 演示版
    AuthorizeVersionType["DEMO"] = "3";
    // 访客版
    AuthorizeVersionType["VISITORS"] = "4";
})(AuthorizeVersionType$1 || (AuthorizeVersionType$1 = {}));
var BackupContent$1;
(function (BackupContent) {
    // 全部数据
    BackupContent["ALLDATA"] = "1";
    // 业务数据
    BackupContent["BUSINESSDATA"] = "2";
    // 业务+统计数据
    BackupContent["STATISTICAANDBUSINESS"] = "3";
})(BackupContent$1 || (BackupContent$1 = {}));
var BackupStrategy$1;
(function (BackupStrategy) {
    // 增量及差量备份
    BackupStrategy["INCREMENTBACKUP"] = "1";
    // 全量备份
    BackupStrategy["ALLBACKUP"] = "2";
})(BackupStrategy$1 || (BackupStrategy$1 = {}));
var BackupSysComponentType$1;
(function (BackupSysComponentType) {
    // 显示全部组件
    BackupSysComponentType["ALL"] = "1";
    // 仅显示已修改组件
    BackupSysComponentType["UPDATE"] = "2";
})(BackupSysComponentType$1 || (BackupSysComponentType$1 = {}));
var BackupType$1;
(function (BackupType) {
    // 本地备份
    BackupType["LOCAL"] = "1";
    // 云备份
    BackupType["CLOUD"] = "2";
})(BackupType$1 || (BackupType$1 = {}));
var BasicConfigType$2;
(function (BasicConfigType) {
    // 系统语言
    BasicConfigType["SYSTEM_LANGUAGE"] = "1";
    // 全局字段
    BasicConfigType["GLOBAL_FIELD"] = "2";
    // 工单字段
    BasicConfigType["WORK_ORDER_FIELD"] = "3";
    // 数据库
    BasicConfigType["DATABASE"] = "4";
    // 工单分类
    BasicConfigType["WORK_ORDER"] = "5";
    // 消息分类
    BasicConfigType["INFORMATION"] = "6";
    // 数据分类
    BasicConfigType["DATA"] = "7";
    // 调度分类
    BasicConfigType["DISPATCH"] = "8";
})(BasicConfigType$2 || (BasicConfigType$2 = {}));
var CCOrOtherType$1;
(function (CCOrOtherType) {
    // 仅抄送
    CCOrOtherType["CC_ONLY"] = "1";
    // 其他
    CCOrOtherType["OTHER"] = "2";
})(CCOrOtherType$1 || (CCOrOtherType$1 = {}));
var CatalogType$3;
(function (CatalogType) {
    // 通用目录
    CatalogType["GENERAL_CATALOG"] = "1";
    // 字段目录
    CatalogType["FIELD_CATALOG"] = "2";
})(CatalogType$3 || (CatalogType$3 = {}));
var ClassCatalogType$2;
(function (ClassCatalogType) {
    // 分类类型
    ClassCatalogType["CLASS"] = "1";
    // 目录类型
    ClassCatalogType["CATALOG"] = "2";
})(ClassCatalogType$2 || (ClassCatalogType$2 = {}));
var CompanyType;
(function (CompanyType) {
    // 平台单位
    CompanyType["PLATFORM"] = "0";
    // 建设单位
    CompanyType["BUILD"] = "1";
    // 业主单位
    CompanyType["OWNER"] = "2";
    // 合作单位
    CompanyType["COOPERATION"] = "3";
})(CompanyType || (CompanyType = {}));
var ConditionType;
(function (ConditionType) {
    // 不判断
    ConditionType["NOT_JUDGE"] = "0";
    //
    ConditionType["DEFAULT"] = "0";
    // 等于
    ConditionType["EQUALS"] = "1";
    // 不等于
    ConditionType["NOT_EQUALS"] = "2";
    // 包含
    ConditionType["CONTAIN"] = "3";
    // 不包含
    ConditionType["NOT_CONTAIN"] = "4";
    // 开始于
    ConditionType["SINCE"] = "5";
    // 不开始于
    ConditionType["NOT_SINCE"] = "6";
    // 结束于
    ConditionType["ENDING"] = "7";
    // 不结束于
    ConditionType["NOT_ENDING"] = "8";
    // 等于
    ConditionType["EQUALS_SENSITIVE"] = "9";
    // 不等于
    ConditionType["NOT_EQUALS_SENSITIVE"] = "10";
    // 包含
    ConditionType["CONTAIN_SENSITIVE"] = "11";
    // 不包含
    ConditionType["NOT_CONTAIN_SENSITIVE"] = "12";
    // 开始于
    ConditionType["SINCE_SENSITIVE"] = "13";
    // 不开始于
    ConditionType["NOT_SINCE_SENSITIVE"] = "14";
    // 结束于
    ConditionType["ENDING_SENSITIVE"] = "15";
    // 不结束于
    ConditionType["NOT_ENDING_SENSITIVE"] = "16";
    // 匹配表达式
    ConditionType["MATCH_EXPRESSIONS"] = "17";
    // 不匹配表达式
    ConditionType["NOT_MATCH_EXPRESSIONS"] = "18";
    // 等于
    ConditionType["OTHER_EQUALS"] = "19";
    // 不等于
    ConditionType["OTHER_NOT_EQUALS"] = "20";
    // 大于
    ConditionType["OTHER_GREATER"] = "21";
    // 大于等于
    ConditionType["OTHER_GREATER_EQUALS"] = "22";
    // 小于
    ConditionType["OTHER_LESS"] = "23";
    // 小于等于
    ConditionType["OTHER_LESS_EQUALS"] = "24";
})(ConditionType || (ConditionType = {}));
var CustomPropertyDataType$2;
(function (CustomPropertyDataType) {
    // 子设备类型
    CustomPropertyDataType["CHILD"] = "1";
    // 文本类型
    CustomPropertyDataType["TEXT"] = "2";
    // 整数类型
    CustomPropertyDataType["INT"] = "3";
    // 小数类型
    CustomPropertyDataType["DOUBLE"] = "4";
    // 日期类型
    CustomPropertyDataType["DATE"] = "5";
    // 选项类型
    CustomPropertyDataType["SELECT"] = "6";
    // 图片类型
    CustomPropertyDataType["IMG"] = "7";
    // 文件
    CustomPropertyDataType["FILE"] = "8";
    // 勾选
    CustomPropertyDataType["CHECK"] = "9";
})(CustomPropertyDataType$2 || (CustomPropertyDataType$2 = {}));
var CustomPropertyType$2;
(function (CustomPropertyType) {
    // 基础配置数据
    CustomPropertyType["BASIC_CONFIG"] = "1";
    // 自定义基础配置数据
    CustomPropertyType["CUSTOM_BASIC_CONFIG"] = "2";
    // 系统属性
    CustomPropertyType["SYSTEM"] = "3";
    // 自定义属性
    CustomPropertyType["CUSTOM"] = "4";
})(CustomPropertyType$2 || (CustomPropertyType$2 = {}));
var CustomSceneType$2;
(function (CustomSceneType) {
    // 设备种类
    CustomSceneType["DEVICE_CATEGORY"] = "1";
    // 工作流
    CustomSceneType["WORKFLOW"] = "2";
    // 数据字段
    CustomSceneType["DATA_FIELD"] = "3";
    // 组件参数
    CustomSceneType["COMPONENT_PARAMETER"] = "4";
    // 流程表单
    CustomSceneType["PROCESS_SHEET"] = "5";
})(CustomSceneType$2 || (CustomSceneType$2 = {}));
var DataChoiceType$2;
(function (DataChoiceType) {
    // 使用单一下拉方式
    DataChoiceType["SINGLE"] = "0";
    // 使用级联下来菜单方式
    DataChoiceType["CASCADE"] = "1";
    // 使用弹出列表页方式
    DataChoiceType["EJECT"] = "2";
})(DataChoiceType$2 || (DataChoiceType$2 = {}));
var DataCountType$2;
(function (DataCountType) {
    // 多条数据
    DataCountType["MULTIPLE"] = "0";
    // 单条数据
    DataCountType["SINGLE"] = "1";
})(DataCountType$2 || (DataCountType$2 = {}));
var DataResourcePriority$1;
(function (DataResourcePriority) {
    // 超高
    DataResourcePriority["ULTRAHIGH"] = "1";
    // 高
    DataResourcePriority["HIGH"] = "2";
    // 中
    DataResourcePriority["MIDDLE"] = "3";
    // 低
    DataResourcePriority["LOW"] = "4";
    // 超低
    DataResourcePriority["ULTRALOW"] = "5";
})(DataResourcePriority$1 || (DataResourcePriority$1 = {}));
var DataResourceType$1;
(function (DataResourceType) {
    // MONGODB
    DataResourceType["MONGODB"] = "1";
})(DataResourceType$1 || (DataResourceType$1 = {}));
var DataScale$1;
(function (DataScale) {
    // small_project
    DataScale["SMALL"] = "1";
    // middle_project
    DataScale["MIDDLE"] = "2";
    // large_project
    DataScale["LARGE"] = "3";
    // extralarge_project
    DataScale["EXTRALARGE"] = "4";
    // microminiatrue_project
    DataScale["MICROMINIATRUE"] = "5";
    // demo_project
    DataScale["DEMO"] = "6";
})(DataScale$1 || (DataScale$1 = {}));
var DatabaseClassCatalogType$2;
(function (DatabaseClassCatalogType) {
    // 分类
    DatabaseClassCatalogType["CLASS"] = "1";
    // 目录
    DatabaseClassCatalogType["CATALOG"] = "2";
})(DatabaseClassCatalogType$2 || (DatabaseClassCatalogType$2 = {}));
var DecisionTreeNodeType;
(function (DecisionTreeNodeType) {
    // 默认节点
    DecisionTreeNodeType["DEFAULT"] = "1";
    // 赋值节点
    DecisionTreeNodeType["EVALUATION"] = "2";
    // 条件节点
    DecisionTreeNodeType["CONDITION"] = "3";
    // 判断节点
    DecisionTreeNodeType["JUDGEMENT"] = "4";
    // 输出节点
    DecisionTreeNodeType["OUTPUT"] = "5";
})(DecisionTreeNodeType || (DecisionTreeNodeType = {}));
var DelayedSelectType$1;
(function (DelayedSelectType) {
    // 任意一个
    DelayedSelectType["ANY"] = "1";
    // 全部
    DelayedSelectType["ALL"] = "2";
})(DelayedSelectType$1 || (DelayedSelectType$1 = {}));
var DelayedType$1;
(function (DelayedType) {
    // 达到延时时间
    DelayedType["ARRIVAL_TIME"] = "1";
    // 满足数据条件
    DelayedType["DATA"] = "2";
})(DelayedType$1 || (DelayedType$1 = {}));
var DeviceCategoryState;
(function (DeviceCategoryState) {
    // 使用中
    DeviceCategoryState["USE"] = "2";
    // 禁用
    DeviceCategoryState["DISABLE"] = "1";
    // 启用
    DeviceCategoryState["ENABLED"] = "0";
})(DeviceCategoryState || (DeviceCategoryState = {}));
var DeviceCategoryStatusType;
(function (DeviceCategoryStatusType) {
    // 根节点
    DeviceCategoryStatusType["ROOT_NODE"] = "0";
    // 叶子节点
    DeviceCategoryStatusType["LEAF_NODE"] = "1";
    // 普通节点
    DeviceCategoryStatusType["COMMON_NODE"] = "2";
})(DeviceCategoryStatusType || (DeviceCategoryStatusType = {}));
var DeviceHeaderType;
(function (DeviceHeaderType) {
    // 基础表头字段
    DeviceHeaderType["BASE"] = "0";
    // 属性表头字段
    DeviceHeaderType["ATTR"] = "2";
    // 子设备表头字段
    DeviceHeaderType["CHILD"] = "1";
})(DeviceHeaderType || (DeviceHeaderType = {}));
var DevicePropertyAttrType;
(function (DevicePropertyAttrType) {
    // 型号属性
    DevicePropertyAttrType["MODEL_PROPERTY"] = "1";
    // 设备属性
    DevicePropertyAttrType["DEVICE_PROPERTY"] = "2";
})(DevicePropertyAttrType || (DevicePropertyAttrType = {}));
var DirectionType$1;
(function (DirectionType) {
    // 向上
    DirectionType["UP"] = "0";
    // 向下
    DirectionType["DOWN"] = "1";
})(DirectionType$1 || (DirectionType$1 = {}));
var FacilityVerifyStatus;
(function (FacilityVerifyStatus) {
    // un_executed
    FacilityVerifyStatus["UN_EXECUTED"] = "0";
    // executed
    FacilityVerifyStatus["EXECUTED"] = "1";
    // failed
    FacilityVerifyStatus["FAILED"] = "2";
})(FacilityVerifyStatus || (FacilityVerifyStatus = {}));
var FieldSourceType$2;
(function (FieldSourceType) {
    // <自定义>
    FieldSourceType["CUSTOM"] = "0";
    // 系统字段
    FieldSourceType["SYSTEM_FIELD"] = "-1";
})(FieldSourceType$2 || (FieldSourceType$2 = {}));
var FiledJudgeType$1;
(function (FiledJudgeType) {
    // 选中项值
    FiledJudgeType["SELECT_VAULE"] = "1";
    // 选中项文本
    FiledJudgeType["SELECT_TEXT"] = "2";
    // 选中项序号
    FiledJudgeType["SELECT_SORT"] = "3";
    // 图片数量
    FiledJudgeType["IMG_NUMBER"] = "4";
    // 图片字节总数
    FiledJudgeType["IMG_TOTAL_BYTES"] = "5";
    // 文件数量
    FiledJudgeType["FILE_NUMBER"] = "6";
    // 文件字节总数
    FiledJudgeType["FILE_TOTAL_BYTES"] = "7";
})(FiledJudgeType$1 || (FiledJudgeType$1 = {}));
var FirstNumType$1;
(function (FirstNumType) {
    // 8位长度（年月日）
    FirstNumType["EIGHT_LENGTH"] = "bit8";
    // 14位长度（年月日时分秒）
    FirstNumType["FOURTEEN_LENGTH"] = "bit14";
    // 32位长度（唯一UUID）
    FirstNumType["THIRTY_TWO_LENGTH"] = "bit32";
})(FirstNumType$1 || (FirstNumType$1 = {}));
var FlowStartUpTimeType$1;
(function (FlowStartUpTimeType) {
    // 指定时间
    FlowStartUpTimeType["DESIGNATED_TIME"] = "1";
    // 间隔执行
    FlowStartUpTimeType["INTERVAL_EXECUTION"] = "2";
})(FlowStartUpTimeType$1 || (FlowStartUpTimeType$1 = {}));
var FlowStartUpType$1;
(function (FlowStartUpType) {
    // 人工触发条件
    FlowStartUpType["ARTIFICIAL"] = "1";
    // 调度触发条件
    FlowStartUpType["DISPATCH"] = "2";
    // 数据触发条件
    FlowStartUpType["DATA"] = "3";
    // 定时触发条件
    FlowStartUpType["TIMING"] = "4";
})(FlowStartUpType$1 || (FlowStartUpType$1 = {}));
var FormModel$1;
(function (FormModel) {
    // 复制表结构
    FormModel["COPY"] = "1";
    // 自定义表单
    FormModel["CUSTOM"] = "2";
    // 从库表读取
    FormModel["SOURCE"] = "3";
    // 从接口读取
    FormModel["API"] = "4";
    // 从文件读取
    FormModel["FILE"] = "5";
    // 存储到库表
    FormModel["STORAGE_SOURCE"] = "6";
    // 发送到接口
    FormModel["SEND_API"] = "7";
    // 存储到文件
    FormModel["STORAGE_FILE"] = "8";
})(FormModel$1 || (FormModel$1 = {}));
var FormSource$1;
(function (FormSource) {
    // < 自定义 >
    FormSource["CUSTOM"] = "1";
})(FormSource$1 || (FormSource$1 = {}));
var FormType$1;
(function (FormType) {
    //
    FormType["DEFAULT"] = "0";
    // 输入表单
    FormType["INPUT"] = "1";
    // 输出表单
    FormType["OUTPUT"] = "2";
    // 主表单
    FormType["MAIN"] = "3";
    // 副表单
    FormType["FROM"] = "4";
})(FormType$1 || (FormType$1 = {}));
var FormulaModeType;
(function (FormulaModeType) {
    // arithmetic
    FormulaModeType["ARITHMETIC"] = "1";
    // decision_tree
    FormulaModeType["DECISION_TREE"] = "2";
    // decision_table
    FormulaModeType["DECISION_TABLE"] = "3";
    // decision_stream
    FormulaModeType["DECISION_STREAM"] = "4";
    // scorecard
    FormulaModeType["SCORECARD"] = "5";
})(FormulaModeType || (FormulaModeType = {}));
var FromType$1;
(function (FromType) {
    // 表单数据
    FromType["FORM_DATA"] = "1";
    // 已有公式
    FromType["FORMULA"] = "2";
    // 自定义数据
    FromType["CUSTOM"] = "3";
})(FromType$1 || (FromType$1 = {}));
var InputInterfaceType$2;
(function (InputInterfaceType) {
    // 使用弹出窗口
    InputInterfaceType["EJECT"] = "0";
    // 使用级联入口
    InputInterfaceType["CASCADE"] = "1";
    // 使用附加信息
    InputInterfaceType["ADDITIONAL"] = "2";
})(InputInterfaceType$2 || (InputInterfaceType$2 = {}));
var InputType$1;
(function (InputType) {
    // 人工录入数据
    InputType["ARTIFICIAL"] = "1";
    // 自动录入数据
    InputType["AUTOMATIC"] = "2";
})(InputType$1 || (InputType$1 = {}));
var InterfaceType$1;
(function (InterfaceType) {
    // black_cool
    InterfaceType["BLACKCOLL"] = "black_cool";
    // blueWhite_style
    InterfaceType["BLUEWHITE_STYLE"] = "blue_white";
    // colour_style
    InterfaceType["COLOUR_STYLE"] = "red_black";
})(InterfaceType$1 || (InterfaceType$1 = {}));
var LanguageType$1;
(function (LanguageType) {
    // simplifiedChinese
    LanguageType["SIMPLIFIED_CHINESE"] = "1";
    // english
    LanguageType["ENGLISH"] = "2";
})(LanguageType$1 || (LanguageType$1 = {}));
var LogicalOperator$1;
(function (LogicalOperator) {
    // 或者
    LogicalOperator["OR"] = "1";
    // 并且
    LogicalOperator["AND"] = "2";
})(LogicalOperator$1 || (LogicalOperator$1 = {}));
var MenuIconType;
(function (MenuIconType) {
    // 系统默认图标
    MenuIconType["SYSTEM_DEFAULT"] = "1";
    // 图标库图标
    MenuIconType["ICON_LIBRARY"] = "2";
    // 上传图片图标
    MenuIconType["UPLOAD_IMAGE"] = "3";
    // 自定义图标地址
    MenuIconType["CUSTOM_ADDRESS"] = "4";
})(MenuIconType || (MenuIconType = {}));
var MenuLevelOrderType$1;
(function (MenuLevelOrderType) {
    // 升级
    MenuLevelOrderType["UPGRADE"] = "1";
    // 降级
    MenuLevelOrderType["DOWNGRADE"] = "2";
    // 上移
    MenuLevelOrderType["MOVE_UP"] = "3";
    // 下移
    MenuLevelOrderType["MOVE_DOWN"] = "4";
})(MenuLevelOrderType$1 || (MenuLevelOrderType$1 = {}));
var MenuNavigationThreeLevelsType;
(function (MenuNavigationThreeLevelsType) {
    // 单组显示
    MenuNavigationThreeLevelsType["SINGLE_GROUP"] = "1";
    // 多组显示
    MenuNavigationThreeLevelsType["MULTIPLE_GROUPS"] = "2";
})(MenuNavigationThreeLevelsType || (MenuNavigationThreeLevelsType = {}));
var MenuNavigationTwoLevelsType;
(function (MenuNavigationTwoLevelsType) {
    // 卡片方式显示子菜单
    MenuNavigationTwoLevelsType["CARD_MODE"] = "1";
    // 顶部导航栏显示子菜单
    MenuNavigationTwoLevelsType["TOP_NAVIGATION_BAR"] = "2";
    // 左侧导航栏显示子菜单
    MenuNavigationTwoLevelsType["LEFT_NAVIGATION_BAR"] = "3";
    // 左侧菜单树显示子菜单
    MenuNavigationTwoLevelsType["LEFT_MENU_TREE"] = "4";
})(MenuNavigationTwoLevelsType || (MenuNavigationTwoLevelsType = {}));
var MenuPageGroupType;
(function (MenuPageGroupType) {
    // 默认布局排列
    MenuPageGroupType["DEFAULT_LAYOUT"] = "1";
    // 左侧或顶部排列
    MenuPageGroupType["LEFT_TOP"] = "2";
    // 右侧或底部排列
    MenuPageGroupType["RIGHT_BOTTOM"] = "3";
})(MenuPageGroupType || (MenuPageGroupType = {}));
var MenuPositionType$1;
(function (MenuPositionType) {
    // 当前上方增加
    MenuPositionType["UPPER"] = "1";
    // 当前下方增加
    MenuPositionType["LOWER"] = "2";
    // 子菜单页面
    MenuPositionType["SUBMENU"] = "3";
})(MenuPositionType$1 || (MenuPositionType$1 = {}));
var ModelState;
(function (ModelState) {
    // 使用中
    ModelState["USE"] = "2";
    // 未使用
    ModelState["UNUSE"] = "1";
})(ModelState || (ModelState = {}));
var ModuleType;
(function (ModuleType) {
    // conventional_device
    ModuleType["CONVENTIONAL_DEVICE"] = "1";
    // power_device
    ModuleType["POWER_DEVICE"] = "2";
    // control_device
    ModuleType["CONTROL_DEVICE"] = "3";
})(ModuleType || (ModuleType = {}));
var NodeStateType$1;
(function (NodeStateType) {
    // 暂存
    NodeStateType["TEMPORARY_STORAGE"] = "0";
    // 提交
    NodeStateType["SUBMIT"] = "2";
    // 可以开始
    NodeStateType["CAN_START"] = "4";
    // 未可以开始
    NodeStateType["NO_CAN_START"] = "5";
    // 退回
    NodeStateType["BACK"] = "3";
})(NodeStateType$1 || (NodeStateType$1 = {}));
var NodeType$1;
(function (NodeType) {
    // 一级节点
    NodeType["FIRST"] = "1";
    // 二级节点
    NodeType["SECOND"] = "2";
    // 三级节点
    NodeType["THIRD"] = "3";
})(NodeType$1 || (NodeType$1 = {}));
var OutputType$1;
(function (OutputType) {
    // 输出到库表单
    OutputType["LIBRARY_FORM"] = "1";
    // 输出到消息队列
    OutputType["MESSAGE_QUEUING"] = "2";
    // 输出到本地文件
    OutputType["LOCAL_FILE"] = "3";
    // 输出到远程接口
    OutputType["REMOTE_INTERFACE"] = "4";
})(OutputType$1 || (OutputType$1 = {}));
var ParticipationType$1;
(function (ParticipationType) {
    // 仅抄送
    ParticipationType["CC_ONLY"] = "1";
    // 单人处理
    ParticipationType["SINGLE_PERSON_PROCESSING"] = "2";
    // 多人处理
    ParticipationType["MULTI_PERSON_PROCESSING"] = "3";
    // 工单督办
    ParticipationType["WORK_ORDER_SUPERVISE"] = "4";
})(ParticipationType$1 || (ParticipationType$1 = {}));
var PositionOperationType$1;
(function (PositionOperationType) {
    // 上移/下移
    PositionOperationType["UP_DOWN"] = "1";
    // 置顶
    PositionOperationType["TOP"] = "2";
    // 置底
    PositionOperationType["BOTTOM"] = "3";
})(PositionOperationType$1 || (PositionOperationType$1 = {}));
var ProcessManagementType$2;
(function (ProcessManagementType) {
    // 工单分类
    ProcessManagementType["WORK_ORDER"] = "1";
    // 消息分类
    ProcessManagementType["INFORMATION"] = "2";
    // 数据分类
    ProcessManagementType["DATA"] = "3";
    // 调度分类
    ProcessManagementType["DISPATCH"] = "4";
})(ProcessManagementType$2 || (ProcessManagementType$2 = {}));
var ProcessType$1;
(function (ProcessType) {
    // 无条件跳转
    ProcessType["NO_CONDITION"] = "1";
    // 指定条件跳转
    ProcessType["CONDITION"] = "2";
})(ProcessType$1 || (ProcessType$1 = {}));
var ProjectStatus;
(function (ProjectStatus) {
    // not_enabled
    ProjectStatus["NOT_ENABLED"] = "0";
    // starting
    ProjectStatus["STARTING"] = "1";
    // online
    ProjectStatus["ONLINE"] = "2";
})(ProjectStatus || (ProjectStatus = {}));
var PropertyDataMode$1;
(function (PropertyDataMode) {
    // 自定义
    PropertyDataMode["CUSTOM"] = "1";
    // 自动编号
    PropertyDataMode["AUTO_NUMBER"] = "2";
    // 单位选择
    PropertyDataMode["UNIT_SELECTION"] = "3";
    // 人员选择
    PropertyDataMode["PERSONNEL_SELECTION"] = "4";
    // 需求时限
    PropertyDataMode["DEMAND_TIME_LIMIT"] = "5";
    // 执行时限
    PropertyDataMode["IMPLEMENTATION_DEADLINE"] = "6";
    // 事件分类
    PropertyDataMode["EVENT_CLASSIFICATION"] = "7";
    // 事件来源
    PropertyDataMode["EVENT_SOURCE"] = "8";
    // 地区选择
    PropertyDataMode["AREA_SELECTION"] = "9";
    // 设备选择
    PropertyDataMode["DEVICE_SELECTION"] = "10";
})(PropertyDataMode$1 || (PropertyDataMode$1 = {}));
var PropertyDataType$1;
(function (PropertyDataType) {
    // 文本类型
    PropertyDataType["TEXT"] = "1";
    // 整数类型
    PropertyDataType["INT"] = "2";
    // 小数类型
    PropertyDataType["DOUBLE"] = "3";
    // 日期类型
    PropertyDataType["DATE"] = "4";
    // 选项类型
    PropertyDataType["SELECT"] = "5";
    // 图片类型
    PropertyDataType["IMG"] = "6";
    // 文件类型
    PropertyDataType["FILE"] = "7";
})(PropertyDataType$1 || (PropertyDataType$1 = {}));
var ResultType;
(function (ResultType) {
    // texts
    ResultType["TEXTS"] = "1";
    // integers
    ResultType["INTEGERS"] = "2";
    // decimal
    ResultType["DECIMAL"] = "3";
    // dates
    ResultType["DATES"] = "4";
    // form_data
    ResultType["FORM_DATA"] = "5";
})(ResultType || (ResultType = {}));
var RunCondtionType$1;
(function (RunCondtionType) {
    // 无条件启动流程
    RunCondtionType["NO_CONDTION"] = "1";
    // 满足以下条件后启动流程
    RunCondtionType["CONDITION"] = "2";
})(RunCondtionType$1 || (RunCondtionType$1 = {}));
var SecondNumType$1;
(function (SecondNumType) {
    // 无
    SecondNumType["NONE"] = "none";
    // 3位长度数字（无分隔符）
    SecondNumType["THREE_NO_SEPARATOR"] = "bit3no";
    // 3位长度数字（有分隔符）
    SecondNumType["THREE_SEPARATOR"] = "bit3yes";
    // 6位长度数字（无分隔符）
    SecondNumType["SIX_NO_SEPARATOR"] = "bit6no";
    // 6位长度数字（有分隔符）
    SecondNumType["SIX_SEPARATOR"] = "bit6yes";
})(SecondNumType$1 || (SecondNumType$1 = {}));
var SubmitPeopleType$1;
(function (SubmitPeopleType) {
    // 角色
    SubmitPeopleType["ROLE"] = "1";
    // 部门
    SubmitPeopleType["DEPARTMENT"] = "2";
    // 人员
    SubmitPeopleType["USER"] = "3";
    // 机构
    SubmitPeopleType["ORG"] = "4";
})(SubmitPeopleType$1 || (SubmitPeopleType$1 = {}));
var SysClassifyType$1;
(function (SysClassifyType) {
    // 系统通用组件
    SysClassifyType["SYSTEM"] = "1";
    // 数据中台组件
    SysClassifyType["DATA"] = "2";
    // 业务中台组件
    SysClassifyType["BUSINESS"] = "3";
    // 应用系统组件
    SysClassifyType["APP"] = "4";
})(SysClassifyType$1 || (SysClassifyType$1 = {}));
var SystemFieldClassType$2;
(function (SystemFieldClassType) {
    // 全局字段
    SystemFieldClassType["GLOBAL_FIELD"] = "1";
    // 工单字段
    SystemFieldClassType["WORK_ORDER_FIELD"] = "2";
})(SystemFieldClassType$2 || (SystemFieldClassType$2 = {}));
var SystemLoginPageType$1;
(function (SystemLoginPageType) {
    // 用户名密码登录
    SystemLoginPageType["ACCOUNT_PASSWORD"] = "1";
    // 手机号码登录
    SystemLoginPageType["PHONE_NUMBER"] = "2";
    // 附加图片验证码
    SystemLoginPageType["PICTURE"] = "3";
    // 附加短信验证码
    SystemLoginPageType["SMS"] = "4";
    // 附加邮件验证码
    SystemLoginPageType["EMAIL"] = "5";
})(SystemLoginPageType$1 || (SystemLoginPageType$1 = {}));
var SystemMenuClassType;
(function (SystemMenuClassType) {
    // 系统菜单
    SystemMenuClassType["SYSTEM_MENU"] = "1";
    // 租户系统菜单
    SystemMenuClassType["TENANT_SYSTEM_MENU"] = "2";
})(SystemMenuClassType || (SystemMenuClassType = {}));
var SystemMenuConfigTitleBar;
(function (SystemMenuConfigTitleBar) {
    // 全部系统
    SystemMenuConfigTitleBar["ALL_SYSTEM"] = "1";
    // 登录用户
    SystemMenuConfigTitleBar["LOGIN_USER"] = "2";
    // 天气预报
    SystemMenuConfigTitleBar["WEATHER"] = "3";
    // 事件通知
    SystemMenuConfigTitleBar["EVENT"] = "4";
    // 待办事项
    SystemMenuConfigTitleBar["AGENDA"] = "5";
})(SystemMenuConfigTitleBar || (SystemMenuConfigTitleBar = {}));
var SystemMenuType;
(function (SystemMenuType) {
    // 应用系统页面
    SystemMenuType["APPLICATION_SYSTEM_PAGE"] = "1";
    // 数据可视化页面
    SystemMenuType["DATA_VISUALIZATION_PAGE"] = "2";
    // 菜单导航页面
    SystemMenuType["MENU_NAVIGATION_PAGE"] = "3";
    // 菜单页面分组
    SystemMenuType["MENU_PAGE_GROUP"] = "4";
    // 系统登录页面
    SystemMenuType["SYSTEM_LOGIN_PAGE"] = "5";
    // 系统首页页面
    SystemMenuType["SYSTEM_HOME_PAGE"] = "6";
    // 自定义连接页面
    SystemMenuType["CUSTOM_PAGE"] = "7";
})(SystemMenuType || (SystemMenuType = {}));
var TemplateVersionType$1;
(function (TemplateVersionType) {
    // 完整版
    TemplateVersionType["FULL_VERSION"] = "1";
    // 试用版
    TemplateVersionType["TRIAL_VERSION"] = "2";
    // 演示版
    TemplateVersionType["DEMOED_VERSION"] = "3";
    // 访客版
    TemplateVersionType["VISITOR_VERSION"] = "4";
})(TemplateVersionType$1 || (TemplateVersionType$1 = {}));
var UnitType;
(function (UnitType) {
    // platform
    UnitType["PLATFORM"] = "0";
    // build
    UnitType["BUILD"] = "1";
    // owner
    UnitType["OWNER"] = "2";
    // cooperation
    UnitType["COOPERATION"] = "3";
})(UnitType || (UnitType = {}));
var UnlockTableType$1;
(function (UnlockTableType) {
    // 行业表
    UnlockTableType["INDUSTRY"] = "INDUSTRY";
    // 设备种类表
    UnlockTableType["DEVICE_CATEGORY"] = "DEVICECATEGORY";
    // 自定义设备属性/型号属性表
    UnlockTableType["DEVICE_CUSTOM_PROPERTY"] = "DEVICEPROPERTY";
    // 自定义工作流属性表
    UnlockTableType["WORKFLOW_CUSTOM_PROPERTY"] = "WORKFLOWPROPERTY";
    // 通信协议表
    UnlockTableType["COMMUNICATION_PROTOCOL"] = "COMMUNICATIONPROTOCOL";
    // 模组功能表
    UnlockTableType["MODULE_FUNCTION"] = "MODULEFUNCTION";
    // 产品表
    UnlockTableType["PRODUCT"] = "PRODUCT";
    // 租户表
    UnlockTableType["TENANT"] = "TENANT";
    // 功能授权表
    UnlockTableType["FUNCTION_AUTHORIZATION"] = "FUNCTIONAUTHORIZATION";
    // 系统语言表
    UnlockTableType["SYSTEM_LANGUAGE"] = "SYSTEMLANGUAGE";
    // 系统信息表
    UnlockTableType["SYSTEM_INFO"] = "SYSTEMINFO";
    // 系统概况表
    UnlockTableType["SYSTEM_OVERVIEW"] = "SYSTEMOVERVIEW";
    // 项目表
    UnlockTableType["PROJECT"] = "PROJECT";
    // 项目通讯录表
    UnlockTableType["PROJECT_ADDRESS_BOOK"] = "ADDRESSBOOK";
    // 通讯录名片表
    UnlockTableType["PROJECT_CARD"] = "PROJECTCARD";
    // 设备校验表
    UnlockTableType["FACILITY_VERIFY"] = "FACILITYVERIFY";
    // 系统应用表
    UnlockTableType["SYS_APP"] = "SYSAPP";
    // 系统模块表
    UnlockTableType["SYS_MODULE"] = "SYSMODULE";
    // 系统权限操作表
    UnlockTableType["SYS_PERMISSION"] = "SYSPERMISSION";
    // 厂家表
    UnlockTableType["MANUFACTURER"] = "MANUFACTURER";
    // 型号表
    UnlockTableType["MODEL"] = "MODEL";
    // 地图信息表
    UnlockTableType["MAP_INFO"] = "MAPINFO";
    // 地图配置表
    UnlockTableType["MAP_CONFIG"] = "MAPCONFIG";
    // 图层表
    UnlockTableType["LAYER"] = "LAYER";
})(UnlockTableType$1 || (UnlockTableType$1 = {}));
var WorkOrder$1;
(function (WorkOrder) {
    // 事件
    WorkOrder["EVENT"] = "1";
    // 预案
    WorkOrder["PLAN"] = "2";
    // 投诉
    WorkOrder["COMPLAINT"] = "3";
    // 运维
    WorkOrder["OANDM"] = "4";
    // 普通
    WorkOrder["COMMON"] = "5";
    // 其他
    WorkOrder["OTHER"] = "6";
})(WorkOrder$1 || (WorkOrder$1 = {}));
var WorkflowCategory$1;
(function (WorkflowCategory) {
    // 工单流程
    WorkflowCategory["JOB"] = "1";
    // 消息流程
    WorkflowCategory["MESSAGE"] = "2";
    // 数据流程
    WorkflowCategory["DATA"] = "3";
    // 调度流程
    WorkflowCategory["DISPATCH"] = "4";
})(WorkflowCategory$1 || (WorkflowCategory$1 = {}));
var WorkflowType$1;
(function (WorkflowType) {
    // 总流程
    WorkflowType["TOTAL"] = "1";
    // 子流程
    WorkflowType["CHRID"] = "2";
})(WorkflowType$1 || (WorkflowType$1 = {}));

// 创建请求服务
const service$4 = new Request({
    baseURL: HttpConfig.host.HOST_BACKSTAGE,
    redirect(data) {
        ApiCore.Service.redirect(data);
    },
});
/**
 * 请求服务
 */
function request$4(data) {
    var _a, _b;
    return service$4.http('post', `api/json/mgt/${data.cmd}`, {}, JSON.stringify(data.args), {
        headers: ActorBase.mixinHeader({
            'Accept-Language': AxVuexApp.lang,
            'AX-Token': AxVuexUser.token,
        }, ((_a = data.config) === null || _a === void 0 ? void 0 : _a.headers) || {}),
    }, ((_b = data.config) === null || _b === void 0 ? void 0 : _b.axiosConfig) || {});
}

// 生成正式api
const actor$4 = generateActor(request$4);
// 生成测试api
const test$4 = generateTest(request$4);
// 生成通用api
const http$4 = generateTest(request$4, false);
// 需要配置的模式
const config$3 = (config) => {
    return {
        actor: generateActor(request$4, config),
        test: test$4,
        http: http$4,
    };
};

var ApiBackstage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  service: service$4,
  get AddressType () { return AddressType$1; },
  get AppCategory () { return AppCategory$1; },
  get AssociationMode () { return AssociationMode$2; },
  get AssociationModeType () { return AssociationModeType$1; },
  get AuthorizeVersionType () { return AuthorizeVersionType$1; },
  get BackupContent () { return BackupContent$1; },
  get BackupStrategy () { return BackupStrategy$1; },
  get BackupSysComponentType () { return BackupSysComponentType$1; },
  get BackupType () { return BackupType$1; },
  get BasicConfigType () { return BasicConfigType$2; },
  get CCOrOtherType () { return CCOrOtherType$1; },
  get CatalogType () { return CatalogType$3; },
  get ClassCatalogType () { return ClassCatalogType$2; },
  get CompanyType () { return CompanyType; },
  get ConditionType () { return ConditionType; },
  get CustomPropertyDataType () { return CustomPropertyDataType$2; },
  get CustomPropertyType () { return CustomPropertyType$2; },
  get CustomSceneType () { return CustomSceneType$2; },
  get DataChoiceType () { return DataChoiceType$2; },
  get DataCountType () { return DataCountType$2; },
  get DataResourcePriority () { return DataResourcePriority$1; },
  get DataResourceType () { return DataResourceType$1; },
  get DataScale () { return DataScale$1; },
  get DatabaseClassCatalogType () { return DatabaseClassCatalogType$2; },
  get DecisionTreeNodeType () { return DecisionTreeNodeType; },
  get DelayedSelectType () { return DelayedSelectType$1; },
  get DelayedType () { return DelayedType$1; },
  get DeviceCategoryState () { return DeviceCategoryState; },
  get DeviceCategoryStatusType () { return DeviceCategoryStatusType; },
  get DeviceHeaderType () { return DeviceHeaderType; },
  get DevicePropertyAttrType () { return DevicePropertyAttrType; },
  get DirectionType () { return DirectionType$1; },
  get FacilityVerifyStatus () { return FacilityVerifyStatus; },
  get FieldSourceType () { return FieldSourceType$2; },
  get FiledJudgeType () { return FiledJudgeType$1; },
  get FirstNumType () { return FirstNumType$1; },
  get FlowStartUpTimeType () { return FlowStartUpTimeType$1; },
  get FlowStartUpType () { return FlowStartUpType$1; },
  get FormModel () { return FormModel$1; },
  get FormSource () { return FormSource$1; },
  get FormType () { return FormType$1; },
  get FormulaModeType () { return FormulaModeType; },
  get FromType () { return FromType$1; },
  get InputInterfaceType () { return InputInterfaceType$2; },
  get InputType () { return InputType$1; },
  get InterfaceType () { return InterfaceType$1; },
  get LanguageType () { return LanguageType$1; },
  get LogicalOperator () { return LogicalOperator$1; },
  get MenuIconType () { return MenuIconType; },
  get MenuLevelOrderType () { return MenuLevelOrderType$1; },
  get MenuNavigationThreeLevelsType () { return MenuNavigationThreeLevelsType; },
  get MenuNavigationTwoLevelsType () { return MenuNavigationTwoLevelsType; },
  get MenuPageGroupType () { return MenuPageGroupType; },
  get MenuPositionType () { return MenuPositionType$1; },
  get ModelState () { return ModelState; },
  get ModuleType () { return ModuleType; },
  get NodeStateType () { return NodeStateType$1; },
  get NodeType () { return NodeType$1; },
  get OutputType () { return OutputType$1; },
  get ParticipationType () { return ParticipationType$1; },
  get PositionOperationType () { return PositionOperationType$1; },
  get ProcessManagementType () { return ProcessManagementType$2; },
  get ProcessType () { return ProcessType$1; },
  get ProjectStatus () { return ProjectStatus; },
  get PropertyDataMode () { return PropertyDataMode$1; },
  get PropertyDataType () { return PropertyDataType$1; },
  get ResultType () { return ResultType; },
  get RunCondtionType () { return RunCondtionType$1; },
  get SecondNumType () { return SecondNumType$1; },
  get SubmitPeopleType () { return SubmitPeopleType$1; },
  get SysClassifyType () { return SysClassifyType$1; },
  get SystemFieldClassType () { return SystemFieldClassType$2; },
  get SystemLoginPageType () { return SystemLoginPageType$1; },
  get SystemMenuClassType () { return SystemMenuClassType; },
  get SystemMenuConfigTitleBar () { return SystemMenuConfigTitleBar; },
  get SystemMenuType () { return SystemMenuType; },
  get TemplateVersionType () { return TemplateVersionType$1; },
  get UnitType () { return UnitType; },
  get UnlockTableType () { return UnlockTableType$1; },
  get WorkOrder () { return WorkOrder$1; },
  get WorkflowCategory () { return WorkflowCategory$1; },
  get WorkflowType () { return WorkflowType$1; },
  actor: actor$4,
  test: test$4,
  http: http$4,
  config: config$3
});

var AssociationMode$1;
(function (AssociationMode) {
    // 数据来源作为主表
    AssociationMode["MAIN_TABLE"] = "0";
    // 数据来源作为子表
    AssociationMode["SUB_TABLE"] = "1";
})(AssociationMode$1 || (AssociationMode$1 = {}));
var AssociationModeType;
(function (AssociationModeType) {
    // 本字段是所属数据字段（数据来源作为主表）
    AssociationModeType["CUSTOM"] = "1";
    // 本字段是级联入口字段（数据来源作为子表）
    AssociationModeType["SYSTEM_FIELD"] = "2";
})(AssociationModeType || (AssociationModeType = {}));
var BasicConfigType$1;
(function (BasicConfigType) {
    // 系统语言
    BasicConfigType["SYSTEM_LANGUAGE"] = "1";
    // 全局字段
    BasicConfigType["GLOBAL_FIELD"] = "2";
    // 工单字段
    BasicConfigType["WORK_ORDER_FIELD"] = "3";
    // 数据库
    BasicConfigType["DATABASE"] = "4";
    // 工单分类
    BasicConfigType["WORK_ORDER"] = "5";
    // 消息分类
    BasicConfigType["INFORMATION"] = "6";
    // 数据分类
    BasicConfigType["DATA"] = "7";
    // 调度分类
    BasicConfigType["DISPATCH"] = "8";
})(BasicConfigType$1 || (BasicConfigType$1 = {}));
var CatalogType$2;
(function (CatalogType) {
    // 通用目录
    CatalogType["GENERAL_CATALOG"] = "1";
    // 字段目录
    CatalogType["FIELD_CATALOG"] = "2";
})(CatalogType$2 || (CatalogType$2 = {}));
var ClassCatalogType$1;
(function (ClassCatalogType) {
    // 分类类型
    ClassCatalogType["CLASS"] = "1";
    // 目录类型
    ClassCatalogType["CATALOG"] = "2";
})(ClassCatalogType$1 || (ClassCatalogType$1 = {}));
var CustomPropertyDataType$1;
(function (CustomPropertyDataType) {
    // 子设备类型
    CustomPropertyDataType["CHILD"] = "1";
    // 文本类型
    CustomPropertyDataType["TEXT"] = "2";
    // 整数类型
    CustomPropertyDataType["INT"] = "3";
    // 小数类型
    CustomPropertyDataType["DOUBLE"] = "4";
    // 日期类型
    CustomPropertyDataType["DATE"] = "5";
    // 选项类型
    CustomPropertyDataType["SELECT"] = "6";
    // 图片类型
    CustomPropertyDataType["IMG"] = "7";
    // 文件
    CustomPropertyDataType["FILE"] = "8";
    // 勾选
    CustomPropertyDataType["CHECK"] = "9";
})(CustomPropertyDataType$1 || (CustomPropertyDataType$1 = {}));
var CustomPropertyType$1;
(function (CustomPropertyType) {
    // 基础配置数据
    CustomPropertyType["BASIC_CONFIG"] = "1";
    // 自定义基础配置数据
    CustomPropertyType["CUSTOM_BASIC_CONFIG"] = "2";
    // 系统属性
    CustomPropertyType["SYSTEM"] = "3";
    // 自定义属性
    CustomPropertyType["CUSTOM"] = "4";
})(CustomPropertyType$1 || (CustomPropertyType$1 = {}));
var CustomSceneType$1;
(function (CustomSceneType) {
    // 设备种类
    CustomSceneType["DEVICE_CATEGORY"] = "1";
    // 工作流
    CustomSceneType["WORKFLOW"] = "2";
    // 数据字段
    CustomSceneType["DATA_FIELD"] = "3";
    // 组件参数
    CustomSceneType["COMPONENT_PARAMETER"] = "4";
    // 流程表单
    CustomSceneType["PROCESS_SHEET"] = "5";
})(CustomSceneType$1 || (CustomSceneType$1 = {}));
var DataChoiceType$1;
(function (DataChoiceType) {
    // 使用单一下拉方式
    DataChoiceType["SINGLE"] = "0";
    // 使用级联下来菜单方式
    DataChoiceType["CASCADE"] = "1";
    // 使用弹出列表页方式
    DataChoiceType["EJECT"] = "2";
})(DataChoiceType$1 || (DataChoiceType$1 = {}));
var DataCountType$1;
(function (DataCountType) {
    // 多条数据
    DataCountType["MULTIPLE"] = "0";
    // 单条数据
    DataCountType["SINGLE"] = "1";
})(DataCountType$1 || (DataCountType$1 = {}));
var DatabaseClassCatalogType$1;
(function (DatabaseClassCatalogType) {
    // 分类
    DatabaseClassCatalogType["CLASS"] = "1";
    // 目录
    DatabaseClassCatalogType["CATALOG"] = "2";
})(DatabaseClassCatalogType$1 || (DatabaseClassCatalogType$1 = {}));
var FieldSourceType$1;
(function (FieldSourceType) {
    // <自定义>
    FieldSourceType["CUSTOM"] = "0";
    // 系统字段
    FieldSourceType["SYSTEM_FIELD"] = "-1";
})(FieldSourceType$1 || (FieldSourceType$1 = {}));
var FirstNumType;
(function (FirstNumType) {
    // 8位长度（年月日）
    FirstNumType["EIGHT_LENGTH"] = "bit8";
    // 14位长度（年月日时分秒）
    FirstNumType["FOURTEEN_LENGTH"] = "bit14";
    // 32位长度（唯一UUID）
    FirstNumType["THIRTY_TWO_LENGTH"] = "bit32";
})(FirstNumType || (FirstNumType = {}));
var InputInterfaceType$1;
(function (InputInterfaceType) {
    // 使用弹出窗口
    InputInterfaceType["EJECT"] = "0";
    // 使用级联入口
    InputInterfaceType["CASCADE"] = "1";
    // 使用附加信息
    InputInterfaceType["ADDITIONAL"] = "2";
})(InputInterfaceType$1 || (InputInterfaceType$1 = {}));
var ProcessManagementType$1;
(function (ProcessManagementType) {
    // 工单分类
    ProcessManagementType["WORK_ORDER"] = "1";
    // 消息分类
    ProcessManagementType["INFORMATION"] = "2";
    // 数据分类
    ProcessManagementType["DATA"] = "3";
    // 调度分类
    ProcessManagementType["DISPATCH"] = "4";
})(ProcessManagementType$1 || (ProcessManagementType$1 = {}));
var SecondNumType;
(function (SecondNumType) {
    // 无
    SecondNumType["NONE"] = "none";
    // 3位长度数字（无分隔符）
    SecondNumType["THREE_NO_SEPARATOR"] = "bit3no";
    // 3位长度数字（有分隔符）
    SecondNumType["THREE_SEPARATOR"] = "bit3yes";
    // 6位长度数字（无分隔符）
    SecondNumType["SIX_NO_SEPARATOR"] = "bit6no";
    // 6位长度数字（有分隔符）
    SecondNumType["SIX_SEPARATOR"] = "bit6yes";
})(SecondNumType || (SecondNumType = {}));
var SystemFieldClassType$1;
(function (SystemFieldClassType) {
    // 全局字段
    SystemFieldClassType["GLOBAL_FIELD"] = "1";
    // 工单字段
    SystemFieldClassType["WORK_ORDER_FIELD"] = "2";
})(SystemFieldClassType$1 || (SystemFieldClassType$1 = {}));

// 创建请求服务
const service$3 = new Request({
    baseURL: HttpConfig.host.HOST_BIZ_DATA,
    redirect(data) {
        ApiCore.Service.redirect(data);
    },
});
/**
 * 请求服务
 */
function request$3(data) {
    var _a, _b;
    return service$3.http('post', `api/json/Biz-Data/${data.cmd}`, {}, JSON.stringify(data.args), {
        headers: ActorBase.mixinHeader({
            'Accept-Language': AxVuexApp.lang,
            'AX-Token': AxVuexUser.token,
        }, ((_a = data.config) === null || _a === void 0 ? void 0 : _a.headers) || {}),
    }, ((_b = data.config) === null || _b === void 0 ? void 0 : _b.axiosConfig) || {});
}

// 生成正式api
const actor$3 = generateActor(request$3);
// 生成测试api
const test$3 = generateTest(request$3);
// 生成通用api
const http$3 = generateTest(request$3, false);
// 需要配置的模式
const config$2 = (config) => {
    return {
        actor: generateActor(request$3, config),
        test: test$3,
        http: http$3,
    };
};

var ApiBizData = /*#__PURE__*/Object.freeze({
  __proto__: null,
  service: service$3,
  get AssociationMode () { return AssociationMode$1; },
  get AssociationModeType () { return AssociationModeType; },
  get BasicConfigType () { return BasicConfigType$1; },
  get CatalogType () { return CatalogType$2; },
  get ClassCatalogType () { return ClassCatalogType$1; },
  get CustomPropertyDataType () { return CustomPropertyDataType$1; },
  get CustomPropertyType () { return CustomPropertyType$1; },
  get CustomSceneType () { return CustomSceneType$1; },
  get DataChoiceType () { return DataChoiceType$1; },
  get DataCountType () { return DataCountType$1; },
  get DatabaseClassCatalogType () { return DatabaseClassCatalogType$1; },
  get FieldSourceType () { return FieldSourceType$1; },
  get FirstNumType () { return FirstNumType; },
  get InputInterfaceType () { return InputInterfaceType$1; },
  get ProcessManagementType () { return ProcessManagementType$1; },
  get SecondNumType () { return SecondNumType; },
  get SystemFieldClassType () { return SystemFieldClassType$1; },
  actor: actor$3,
  test: test$3,
  http: http$3,
  config: config$2
});

var JavaType;
(function (JavaType) {
    // 字符
    JavaType["CHARACTER"] = "Character";
    // 字符
    JavaType["CHAR"] = "char";
    // 字符串
    JavaType["STRING"] = "String";
    // 布尔
    JavaType["BOOLEAN"] = "Boolean";
    // 字节
    JavaType["BYTE"] = "Byte";
    // S短数值
    JavaType["SHORT"] = "Short";
    // 数值
    JavaType["INTEGER"] = "Integer";
    // 数值
    JavaType["INT"] = "int";
    // L长数值
    JavaType["LONG"] = "Long";
    // F浮点数
    JavaType["FLOAT"] = "Float";
    // D浮点数
    JavaType["DOUBLE"] = "Double";
    // 数值
    JavaType["NUMBER"] = "Number";
    // 集合
    JavaType["COLLECTION"] = "Collection";
    // 数组
    JavaType["ARRAY"] = "Array";
    // 键值对
    JavaType["MAP"] = "Map";
    // 序列化实体
    JavaType["SERIALIZABLE"] = "Serializable";
    // 返回结果
    JavaType["RESULT"] = "IResult";
    // 不确定类型
    JavaType["ANY"] = "Any";
})(JavaType || (JavaType = {}));
var Module;
(function (Module) {
    // AX
    Module["AX"] = "AX";
    // DATA_SETTINGS
    Module["DATA_SETTINGS"] = "DATA_SETTINGS";
    // DATA_CAS
    Module["DATA_CAS"] = "DATA_CAS";
    // DATA_TENANT
    Module["DATA_TENANT"] = "DATA_TENANT";
    // BIZ_DATA
    Module["BIZ_DATA"] = "BIZ_DATA";
    // BIZ_USER
    Module["BIZ_USER"] = "BIZ_USER";
    // APP_PARKING
    Module["APP_PARKING"] = "APP_PARKING";
    // DEFAULT
    Module["DEFAULT"] = "DEFAULT";
})(Module || (Module = {}));

var ApiCommon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get JavaType () { return JavaType; },
  get Module () { return Module; }
});

// 创建请求服务
const service$2 = new Request({
    baseURL: HttpConfig.host.HOST_BACKSTAGE,
    redirect(data) {
        ApiCore.Service.redirect(data);
    },
});
function request$2(data) {
    var _a, _b;
    return service$2.http('post', `api/json/mgt/${data.cmd}`, {}, JSON.stringify(data.args), {
        headers: ActorBase.mixinHeader({
            'Accept-Language': AxVuexApp.lang,
            'AX-Token': AxVuexUser.token,
        }, ((_a = data.config) === null || _a === void 0 ? void 0 : _a.headers) || {}),
    }, ((_b = data.config) === null || _b === void 0 ? void 0 : _b.axiosConfig) || {});
}

// 生成正式api
const actor$2 = generateActor(request$2);
// 生成测试api
const test$2 = generateTest(request$2);
// 生成通用api
const http$2 = generateTest(request$2, false);

var DemoEnum;
(function (DemoEnum) {
    DemoEnum[DemoEnum["A"] = 0] = "A";
    DemoEnum[DemoEnum["B"] = 1] = "B";
    DemoEnum[DemoEnum["C"] = 2] = "C";
    DemoEnum[DemoEnum["D"] = 3] = "D";
})(DemoEnum || (DemoEnum = {}));

var ApiDemo = /*#__PURE__*/Object.freeze({
  __proto__: null,
  service: service$2,
  actor: actor$2,
  test: test$2,
  http: http$2,
  get DemoEnum () { return DemoEnum; }
});

// 创建请求服务
const service$1 = new Request({
    baseURL: HttpConfig.host.HOST_DATA_SETTING,
    redirect(data) {
        ApiCore.Service.redirect(data);
    },
});
/**
 * 请求服务
 */
function request$1(data) {
    var _a, _b;
    return service$1.http('post', `api/json/Data-Settings/${data.cmd}`, {}, JSON.stringify(data.args), {
        headers: ActorBase.mixinHeader({
            'Accept-Language': AxVuexApp.lang,
            'AX-Token': AxVuexUser.token,
        }, ((_a = data.config) === null || _a === void 0 ? void 0 : _a.headers) || {}),
    }, ((_b = data.config) === null || _b === void 0 ? void 0 : _b.axiosConfig) || {});
}

// 生成正式api
const actor$1 = generateActor(request$1);
// 生成测试api
const test$1 = generateTest(request$1);
// 生成通用api
const http$1 = generateTest(request$1, false);
// 需要配置的模式
const config$1 = (config) => {
    return {
        actor: generateActor(request$1, config),
        test: test$1,
        http: http$1,
    };
};

var AppCategory;
(function (AppCategory) {
    // 数据中台
    AppCategory["DATA"] = "0";
    // 业务中台
    AppCategory["BIZ"] = "1";
    // 应用系统
    AppCategory["APP"] = "2";
    // 租户菜单
    AppCategory["TM"] = "3";
})(AppCategory || (AppCategory = {}));
var AssociationMode;
(function (AssociationMode) {
    // 数据来源作为主表
    AssociationMode["MAIN_TABLE"] = "0";
    // 数据来源作为子表
    AssociationMode["SUB_TABLE"] = "1";
})(AssociationMode || (AssociationMode = {}));
var AuthorizeVersionType;
(function (AuthorizeVersionType) {
    // 完全版
    AuthorizeVersionType["FULL"] = "1";
    // 试用版
    AuthorizeVersionType["TRIAL"] = "2";
    // 演示版
    AuthorizeVersionType["DEMO"] = "3";
    // 访客版
    AuthorizeVersionType["VISITORS"] = "4";
})(AuthorizeVersionType || (AuthorizeVersionType = {}));
var BasicConfigType;
(function (BasicConfigType) {
    // 系统语言
    BasicConfigType["SYSTEM_LANGUAGE"] = "1";
    // 全局字段
    BasicConfigType["GLOBAL_FIELD"] = "2";
    // 工单字段
    BasicConfigType["WORK_ORDER_FIELD"] = "3";
    // 数据库
    BasicConfigType["DATABASE"] = "4";
    // 工单分类
    BasicConfigType["WORK_ORDER"] = "5";
    // 消息分类
    BasicConfigType["INFORMATION"] = "6";
    // 数据分类
    BasicConfigType["DATA"] = "7";
    // 调度分类
    BasicConfigType["DISPATCH"] = "8";
})(BasicConfigType || (BasicConfigType = {}));
var CacheKey$1;
(function (CacheKey) {
    // 组件
    CacheKey["SYSCLASSIFY"] = "SYSCLASSIFY";
    // 数据库名称
    CacheKey["DATABASE_NAME"] = "DATABASE_NAME";
    // 分类名称
    CacheKey["BASIC_CLASS_CATALOG_NAME"] = "BASIC_CATALOG";
    // 系统字段名称
    CacheKey["SYSTEM_FIELD_NAME"] = "SYSTEM_FIELD";
    // 系统模块
    CacheKey["SYSTEM_MODULE"] = "SYSTEM_MODULE";
    // 系统功能数量
    CacheKey["SYS_FUNCTION_COUNT"] = "SYS_FUNCTION_COUNT";
    // 系统参数数量
    CacheKey["SYS_PARAM_COUNT"] = "SYS_PARAM_COUNT";
})(CacheKey$1 || (CacheKey$1 = {}));
var CatalogType$1;
(function (CatalogType) {
    // 通用目录
    CatalogType["GENERAL_CATALOG"] = "1";
    // 字段目录
    CatalogType["FIELD_CATALOG"] = "2";
})(CatalogType$1 || (CatalogType$1 = {}));
var ClassCatalogType;
(function (ClassCatalogType) {
    // 分类类型
    ClassCatalogType["CLASS"] = "1";
    // 目录类型
    ClassCatalogType["CATALOG"] = "2";
})(ClassCatalogType || (ClassCatalogType = {}));
var CustomPropertyDataType;
(function (CustomPropertyDataType) {
    // 子设备类型
    CustomPropertyDataType["CHILD"] = "1";
    // 文本类型
    CustomPropertyDataType["TEXT"] = "2";
    // 整数类型
    CustomPropertyDataType["INT"] = "3";
    // 小数类型
    CustomPropertyDataType["DOUBLE"] = "4";
    // 日期类型
    CustomPropertyDataType["DATE"] = "5";
    // 选项类型
    CustomPropertyDataType["SELECT"] = "6";
    // 图片类型
    CustomPropertyDataType["IMG"] = "7";
    // 文件
    CustomPropertyDataType["FILE"] = "8";
    // 勾选
    CustomPropertyDataType["CHECK"] = "9";
})(CustomPropertyDataType || (CustomPropertyDataType = {}));
var CustomPropertyType;
(function (CustomPropertyType) {
    // 基础配置数据
    CustomPropertyType["BASIC_CONFIG"] = "1";
    // 自定义基础配置数据
    CustomPropertyType["CUSTOM_BASIC_CONFIG"] = "2";
    // 系统属性
    CustomPropertyType["SYSTEM"] = "3";
    // 自定义属性
    CustomPropertyType["CUSTOM"] = "4";
})(CustomPropertyType || (CustomPropertyType = {}));
var CustomSceneType;
(function (CustomSceneType) {
    // 设备种类
    CustomSceneType["DEVICE_CATEGORY"] = "1";
    // 工作流
    CustomSceneType["WORKFLOW"] = "2";
    // 数据字段
    CustomSceneType["DATA_FIELD"] = "3";
    // 组件参数
    CustomSceneType["COMPONENT_PARAMETER"] = "4";
    // 流程表单
    CustomSceneType["PROCESS_SHEET"] = "5";
})(CustomSceneType || (CustomSceneType = {}));
var DataChoiceType;
(function (DataChoiceType) {
    // 使用单一下拉方式
    DataChoiceType["SINGLE"] = "0";
    // 使用级联下来菜单方式
    DataChoiceType["CASCADE"] = "1";
    // 使用弹出列表页方式
    DataChoiceType["EJECT"] = "2";
})(DataChoiceType || (DataChoiceType = {}));
var DataCountType;
(function (DataCountType) {
    // 多条数据
    DataCountType["MULTIPLE"] = "0";
    // 单条数据
    DataCountType["SINGLE"] = "1";
})(DataCountType || (DataCountType = {}));
var DatabaseClassCatalogType;
(function (DatabaseClassCatalogType) {
    // 分类
    DatabaseClassCatalogType["CLASS"] = "1";
    // 目录
    DatabaseClassCatalogType["CATALOG"] = "2";
})(DatabaseClassCatalogType || (DatabaseClassCatalogType = {}));
var FieldSourceType;
(function (FieldSourceType) {
    // <自定义>
    FieldSourceType["CUSTOM"] = "0";
    // 系统字段
    FieldSourceType["SYSTEM_FIELD"] = "-1";
})(FieldSourceType || (FieldSourceType = {}));
var InputInterfaceType;
(function (InputInterfaceType) {
    // 使用弹出窗口
    InputInterfaceType["EJECT"] = "0";
    // 使用级联入口
    InputInterfaceType["CASCADE"] = "1";
    // 使用附加信息
    InputInterfaceType["ADDITIONAL"] = "2";
})(InputInterfaceType || (InputInterfaceType = {}));
var MenuLevelOrderType;
(function (MenuLevelOrderType) {
    // 升级
    MenuLevelOrderType["UPGRADE"] = "1";
    // 降级
    MenuLevelOrderType["DOWNGRADE"] = "2";
    // 上移
    MenuLevelOrderType["MOVE_UP"] = "3";
    // 下移
    MenuLevelOrderType["MOVE_DOWN"] = "4";
})(MenuLevelOrderType || (MenuLevelOrderType = {}));
var MenuPositionType;
(function (MenuPositionType) {
    // 当前上方增加
    MenuPositionType["UPPER"] = "1";
    // 当前下方增加
    MenuPositionType["LOWER"] = "2";
    // 子菜单页面
    MenuPositionType["SUBMENU"] = "3";
})(MenuPositionType || (MenuPositionType = {}));
var PositionOperationType;
(function (PositionOperationType) {
    // 上移/下移
    PositionOperationType["UP_DOWN"] = "1";
    // 置顶
    PositionOperationType["TOP"] = "2";
    // 置底
    PositionOperationType["BOTTOM"] = "3";
})(PositionOperationType || (PositionOperationType = {}));
var ProcessManagementType;
(function (ProcessManagementType) {
    // 工单分类
    ProcessManagementType["WORK_ORDER"] = "1";
    // 消息分类
    ProcessManagementType["INFORMATION"] = "2";
    // 数据分类
    ProcessManagementType["DATA"] = "3";
    // 调度分类
    ProcessManagementType["DISPATCH"] = "4";
})(ProcessManagementType || (ProcessManagementType = {}));
var RateType;
(function (RateType) {
    // 1:1
    RateType["ONE_ONE"] = "1";
    // 1:2
    RateType["ONE_TWO"] = "2";
    // 1:3
    RateType["ONE_THREE"] = "3";
    // 1:4
    RateType["ONE_FOUR"] = "4";
    // 1:5
    RateType["ONE_FIVE"] = "5";
})(RateType || (RateType = {}));
var SysClassifyType;
(function (SysClassifyType) {
    // 系统通用组件
    SysClassifyType["SYSTEM"] = "1";
    // 数据中台组件
    SysClassifyType["DATA"] = "2";
    // 业务中台组件
    SysClassifyType["BUSINESS"] = "3";
    // 应用系统组件
    SysClassifyType["APP"] = "4";
})(SysClassifyType || (SysClassifyType = {}));
var SystemFieldClassType;
(function (SystemFieldClassType) {
    // 全局字段
    SystemFieldClassType["GLOBAL_FIELD"] = "1";
    // 工单字段
    SystemFieldClassType["WORK_ORDER_FIELD"] = "2";
})(SystemFieldClassType || (SystemFieldClassType = {}));
var SystemLoginPageType;
(function (SystemLoginPageType) {
    // 用户名密码登录
    SystemLoginPageType["ACCOUNT_PASSWORD"] = "1";
    // 手机号码登录
    SystemLoginPageType["PHONE_NUMBER"] = "2";
    // 附加图片验证码
    SystemLoginPageType["PICTURE"] = "3";
    // 附加短信验证码
    SystemLoginPageType["SMS"] = "4";
    // 附加邮件验证码
    SystemLoginPageType["EMAIL"] = "5";
})(SystemLoginPageType || (SystemLoginPageType = {}));
var UnlockTableType;
(function (UnlockTableType) {
    // 行业表
    UnlockTableType["INDUSTRY"] = "INDUSTRY";
    // 设备种类表
    UnlockTableType["DEVICE_CATEGORY"] = "DEVICECATEGORY";
    // 自定义设备属性/型号属性表
    UnlockTableType["DEVICE_CUSTOM_PROPERTY"] = "DEVICEPROPERTY";
    // 自定义工作流属性表
    UnlockTableType["WORKFLOW_CUSTOM_PROPERTY"] = "WORKFLOWPROPERTY";
    // 通信协议表
    UnlockTableType["COMMUNICATION_PROTOCOL"] = "COMMUNICATIONPROTOCOL";
    // 模组功能表
    UnlockTableType["MODULE_FUNCTION"] = "MODULEFUNCTION";
    // 产品表
    UnlockTableType["PRODUCT"] = "PRODUCT";
    // 租户表
    UnlockTableType["TENANT"] = "TENANT";
    // 功能授权表
    UnlockTableType["FUNCTION_AUTHORIZATION"] = "FUNCTIONAUTHORIZATION";
    // 系统语言表
    UnlockTableType["SYSTEM_LANGUAGE"] = "SYSTEMLANGUAGE";
    // 系统信息表
    UnlockTableType["SYSTEM_INFO"] = "SYSTEMINFO";
    // 系统概况表
    UnlockTableType["SYSTEM_OVERVIEW"] = "SYSTEMOVERVIEW";
    // 项目表
    UnlockTableType["PROJECT"] = "PROJECT";
    // 项目通讯录表
    UnlockTableType["PROJECT_ADDRESS_BOOK"] = "ADDRESSBOOK";
    // 通讯录名片表
    UnlockTableType["PROJECT_CARD"] = "PROJECTCARD";
    // 设备校验表
    UnlockTableType["FACILITY_VERIFY"] = "FACILITYVERIFY";
    // 系统应用表
    UnlockTableType["SYS_APP"] = "SYSAPP";
    // 系统模块表
    UnlockTableType["SYS_MODULE"] = "SYSMODULE";
    // 系统权限操作表
    UnlockTableType["SYS_PERMISSION"] = "SYSPERMISSION";
    // 厂家表
    UnlockTableType["MANUFACTURER"] = "MANUFACTURER";
    // 型号表
    UnlockTableType["MODEL"] = "MODEL";
    // 地图信息表
    UnlockTableType["MAP_INFO"] = "MAPINFO";
    // 地图配置表
    UnlockTableType["MAP_CONFIG"] = "MAPCONFIG";
    // 图层表
    UnlockTableType["LAYER"] = "LAYER";
})(UnlockTableType || (UnlockTableType = {}));
var UpgradeType;
(function (UpgradeType) {
    // 同时停止所有服务后升级
    UpgradeType["STOP_ALL"] = "1";
    // 保证部分服务可用并升级
    UpgradeType["STOP_PART"] = "2";
})(UpgradeType || (UpgradeType = {}));

var ApiDataSettings = /*#__PURE__*/Object.freeze({
  __proto__: null,
  service: service$1,
  actor: actor$1,
  test: test$1,
  http: http$1,
  config: config$1,
  get AppCategory () { return AppCategory; },
  get AssociationMode () { return AssociationMode; },
  get AuthorizeVersionType () { return AuthorizeVersionType; },
  get BasicConfigType () { return BasicConfigType; },
  get CacheKey () { return CacheKey$1; },
  get CatalogType () { return CatalogType$1; },
  get ClassCatalogType () { return ClassCatalogType; },
  get CustomPropertyDataType () { return CustomPropertyDataType; },
  get CustomPropertyType () { return CustomPropertyType; },
  get CustomSceneType () { return CustomSceneType; },
  get DataChoiceType () { return DataChoiceType; },
  get DataCountType () { return DataCountType; },
  get DatabaseClassCatalogType () { return DatabaseClassCatalogType; },
  get FieldSourceType () { return FieldSourceType; },
  get InputInterfaceType () { return InputInterfaceType; },
  get MenuLevelOrderType () { return MenuLevelOrderType; },
  get MenuPositionType () { return MenuPositionType; },
  get PositionOperationType () { return PositionOperationType; },
  get ProcessManagementType () { return ProcessManagementType; },
  get RateType () { return RateType; },
  get SysClassifyType () { return SysClassifyType; },
  get SystemFieldClassType () { return SystemFieldClassType; },
  get SystemLoginPageType () { return SystemLoginPageType; },
  get UnlockTableType () { return UnlockTableType; },
  get UpgradeType () { return UpgradeType; }
});

// 创建请求服务
const service = new Request({
    baseURL: HttpConfig.host.HOST_DATA_TENANT,
    redirect(data) {
        ApiCore.Service.redirect(data);
    },
});
/**
 * 请求服务
 */
function request(data) {
    var _a, _b;
    return service.http('post', `api/json/Data-Tenant/${data.cmd}`, {}, JSON.stringify(data.args), {
        headers: ActorBase.mixinHeader({
            'Accept-Language': AxVuexApp.lang,
            'AX-Token': AxVuexUser.token,
        }, ((_a = data.config) === null || _a === void 0 ? void 0 : _a.headers) || {}),
    }, ((_b = data.config) === null || _b === void 0 ? void 0 : _b.axiosConfig) || {});
}

// 生成正式api
const actor = generateActor(request);
// 生成测试api
const test = generateTest(request);
// 生成通用api
const http = generateTest(request, false);
// 需要配置的模式
const config = (config) => {
    return {
        actor: generateActor(request, config),
        test,
        http,
    };
};

var AddressType;
(function (AddressType) {
    // systemdefault
    AddressType["SYSTEMDEFAULT"] = "1";
    // systemcustom
    AddressType["SYSTEMCUSTOM"] = "2";
})(AddressType || (AddressType = {}));
var BackupContent;
(function (BackupContent) {
    // 全部数据
    BackupContent["ALLDATA"] = "1";
    // 业务数据
    BackupContent["BUSINESSDATA"] = "2";
    // 业务+统计数据
    BackupContent["STATISTICAANDBUSINESS"] = "3";
})(BackupContent || (BackupContent = {}));
var BackupStrategy;
(function (BackupStrategy) {
    // 增量及差量备份
    BackupStrategy["INCREMENTBACKUP"] = "1";
    // 全量备份
    BackupStrategy["ALLBACKUP"] = "2";
})(BackupStrategy || (BackupStrategy = {}));
var BackupSysComponentType;
(function (BackupSysComponentType) {
    // 显示全部组件
    BackupSysComponentType["ALL"] = "1";
    // 仅显示已修改组件
    BackupSysComponentType["UPDATE"] = "2";
})(BackupSysComponentType || (BackupSysComponentType = {}));
var BackupType;
(function (BackupType) {
    // 本地备份
    BackupType["LOCAL"] = "1";
    // 云备份
    BackupType["CLOUD"] = "2";
})(BackupType || (BackupType = {}));
var CCOrOtherType;
(function (CCOrOtherType) {
    // 仅抄送
    CCOrOtherType["CC_ONLY"] = "1";
    // 其他
    CCOrOtherType["OTHER"] = "2";
})(CCOrOtherType || (CCOrOtherType = {}));
var CacheKey;
(function (CacheKey) {
    // 租户
    CacheKey["TENANT"] = "TENANT";
    // 数据库
    CacheKey["DATABASE"] = "DATABASE";
    // 组件参数
    CacheKey["PARAMETERS"] = "PARAMETERS";
    // 分类目录名称
    CacheKey["CLASS_CATALOG_NAME"] = "CLASS_CATALOG_NAME";
    // 系统字段名称
    CacheKey["SYSTEM_FIELD_NAME"] = "SYSTEM_FIELD_NAME";
    // 租户数据库名称
    CacheKey["TENANT_DATABASE_NAME"] = "TENANT_DATABASE_NAME";
    // 流程管理名称
    CacheKey["PROCESS_MANAGEMENT_NAME"] = "PROCESS_MANAGEMENT_NAME";
    // 启动触发条件
    CacheKey["FLOW_START_UP"] = "FLOW_START_UP";
})(CacheKey || (CacheKey = {}));
var CatalogType;
(function (CatalogType) {
    // 通用目录
    CatalogType["GENERAL_CATALOG"] = "1";
    // 字段目录
    CatalogType["FIELD_CATALOG"] = "2";
})(CatalogType || (CatalogType = {}));
var DataResourcePriority;
(function (DataResourcePriority) {
    // 超高
    DataResourcePriority["ULTRAHIGH"] = "1";
    // 高
    DataResourcePriority["HIGH"] = "2";
    // 中
    DataResourcePriority["MIDDLE"] = "3";
    // 低
    DataResourcePriority["LOW"] = "4";
    // 超低
    DataResourcePriority["ULTRALOW"] = "5";
})(DataResourcePriority || (DataResourcePriority = {}));
var DataResourceType;
(function (DataResourceType) {
    // MONGODB
    DataResourceType["MONGODB"] = "1";
})(DataResourceType || (DataResourceType = {}));
var DataScale;
(function (DataScale) {
    // small_project
    DataScale["SMALL"] = "1";
    // middle_project
    DataScale["MIDDLE"] = "2";
    // large_project
    DataScale["LARGE"] = "3";
    // extralarge_project
    DataScale["EXTRALARGE"] = "4";
    // microminiatrue_project
    DataScale["MICROMINIATRUE"] = "5";
    // demo_project
    DataScale["DEMO"] = "6";
})(DataScale || (DataScale = {}));
var DelayedSelectType;
(function (DelayedSelectType) {
    // 任意一个
    DelayedSelectType["ANY"] = "1";
    // 全部
    DelayedSelectType["ALL"] = "2";
})(DelayedSelectType || (DelayedSelectType = {}));
var DelayedType;
(function (DelayedType) {
    // 达到延时时间
    DelayedType["ARRIVAL_TIME"] = "1";
    // 满足数据条件
    DelayedType["DATA"] = "2";
})(DelayedType || (DelayedType = {}));
var DirectionType;
(function (DirectionType) {
    // 向上
    DirectionType["UP"] = "0";
    // 向下
    DirectionType["DOWN"] = "1";
})(DirectionType || (DirectionType = {}));
var FiledJudgeType;
(function (FiledJudgeType) {
    // 选中项值
    FiledJudgeType["SELECT_VAULE"] = "1";
    // 选中项文本
    FiledJudgeType["SELECT_TEXT"] = "2";
    // 选中项序号
    FiledJudgeType["SELECT_SORT"] = "3";
    // 图片数量
    FiledJudgeType["IMG_NUMBER"] = "4";
    // 图片字节总数
    FiledJudgeType["IMG_TOTAL_BYTES"] = "5";
    // 文件数量
    FiledJudgeType["FILE_NUMBER"] = "6";
    // 文件字节总数
    FiledJudgeType["FILE_TOTAL_BYTES"] = "7";
})(FiledJudgeType || (FiledJudgeType = {}));
var FlowStartUpTimeType;
(function (FlowStartUpTimeType) {
    // 指定时间
    FlowStartUpTimeType["DESIGNATED_TIME"] = "1";
    // 间隔执行
    FlowStartUpTimeType["INTERVAL_EXECUTION"] = "2";
})(FlowStartUpTimeType || (FlowStartUpTimeType = {}));
var FlowStartUpType;
(function (FlowStartUpType) {
    // 人工触发条件
    FlowStartUpType["ARTIFICIAL"] = "1";
    // 调度触发条件
    FlowStartUpType["DISPATCH"] = "2";
    // 数据触发条件
    FlowStartUpType["DATA"] = "3";
    // 定时触发条件
    FlowStartUpType["TIMING"] = "4";
})(FlowStartUpType || (FlowStartUpType = {}));
var FormModel;
(function (FormModel) {
    // 复制表结构
    FormModel["COPY"] = "1";
    // 自定义表单
    FormModel["CUSTOM"] = "2";
    // 从库表读取
    FormModel["SOURCE"] = "3";
    // 从接口读取
    FormModel["API"] = "4";
    // 从文件读取
    FormModel["FILE"] = "5";
    // 存储到库表
    FormModel["STORAGE_SOURCE"] = "6";
    // 发送到接口
    FormModel["SEND_API"] = "7";
    // 存储到文件
    FormModel["STORAGE_FILE"] = "8";
})(FormModel || (FormModel = {}));
var FormSource;
(function (FormSource) {
    // < 自定义 >
    FormSource["CUSTOM"] = "1";
})(FormSource || (FormSource = {}));
var FormType;
(function (FormType) {
    //
    FormType["DEFAULT"] = "0";
    // 输入表单
    FormType["INPUT"] = "1";
    // 输出表单
    FormType["OUTPUT"] = "2";
    // 主表单
    FormType["MAIN"] = "3";
    // 副表单
    FormType["FROM"] = "4";
})(FormType || (FormType = {}));
var FromType;
(function (FromType) {
    // 表单数据
    FromType["FORM_DATA"] = "1";
    // 已有公式
    FromType["FORMULA"] = "2";
    // 自定义数据
    FromType["CUSTOM"] = "3";
})(FromType || (FromType = {}));
var InputType;
(function (InputType) {
    // 人工录入数据
    InputType["ARTIFICIAL"] = "1";
    // 自动录入数据
    InputType["AUTOMATIC"] = "2";
})(InputType || (InputType = {}));
var InterfaceType;
(function (InterfaceType) {
    // black_cool
    InterfaceType["BLACKCOLL"] = "black_cool";
    // blueWhite_style
    InterfaceType["BLUEWHITE_STYLE"] = "blue_white";
    // colour_style
    InterfaceType["COLOUR_STYLE"] = "red_black";
})(InterfaceType || (InterfaceType = {}));
var LanguageType;
(function (LanguageType) {
    // simplifiedChinese
    LanguageType["SIMPLIFIED_CHINESE"] = "1";
    // english
    LanguageType["ENGLISH"] = "2";
})(LanguageType || (LanguageType = {}));
var LogicalOperator;
(function (LogicalOperator) {
    // 或者
    LogicalOperator["OR"] = "1";
    // 并且
    LogicalOperator["AND"] = "2";
})(LogicalOperator || (LogicalOperator = {}));
var NodeStateType;
(function (NodeStateType) {
    // TEMPORARY_STORAGE
    NodeStateType["TEMPORARY_STORAGE"] = "TEMPORARY_STORAGE";
    // SUBMIT
    NodeStateType["SUBMIT"] = "SUBMIT";
    // CAN_START
    NodeStateType["CAN_START"] = "CAN_START";
    // NO_CAN_START
    NodeStateType["NO_CAN_START"] = "NO_CAN_START";
    // BACK
    NodeStateType["BACK"] = "BACK";
})(NodeStateType || (NodeStateType = {}));
var NodeType;
(function (NodeType) {
    // 开始节点
    NodeType["START_NODE"] = "1";
    // 录入节点
    NodeType["INPUT_NODE"] = "2";
    // 条件判断节点
    NodeType["JUDGE_NODE"] = "3";
    // 子流程节点
    NodeType["SUBPROCESS_NODE"] = "4";
    // 延时节点
    NodeType["DELAYED_NODE"] = "5";
    // 输出节点
    NodeType["OUTPUT_NODE"] = "6";
    // 结束节点
    NodeType["END_NODE"] = "7";
})(NodeType || (NodeType = {}));
var OutputType;
(function (OutputType) {
    // 输出到库表单
    OutputType["LIBRARY_FORM"] = "1";
    // 输出到消息队列
    OutputType["MESSAGE_QUEUING"] = "2";
    // 输出到本地文件
    OutputType["LOCAL_FILE"] = "3";
    // 输出到远程接口
    OutputType["REMOTE_INTERFACE"] = "4";
})(OutputType || (OutputType = {}));
var ParticipationType;
(function (ParticipationType) {
    // 仅抄送
    ParticipationType["CC_ONLY"] = "1";
    // 单人处理
    ParticipationType["SINGLE_PERSON_PROCESSING"] = "2";
    // 多人处理
    ParticipationType["MULTI_PERSON_PROCESSING"] = "3";
    // 工单督办
    ParticipationType["WORK_ORDER_SUPERVISE"] = "4";
})(ParticipationType || (ParticipationType = {}));
var ProcessType;
(function (ProcessType) {
    // 无条件跳转
    ProcessType["NO_CONDITION"] = "1";
    // 指定条件跳转
    ProcessType["CONDITION"] = "2";
})(ProcessType || (ProcessType = {}));
var PropertyDataMode;
(function (PropertyDataMode) {
    // 自定义
    PropertyDataMode["CUSTOM"] = "1";
    // 自动编号
    PropertyDataMode["AUTO_NUMBER"] = "2";
    // 单位选择
    PropertyDataMode["UNIT_SELECTION"] = "3";
    // 人员选择
    PropertyDataMode["PERSONNEL_SELECTION"] = "4";
    // 需求时限
    PropertyDataMode["DEMAND_TIME_LIMIT"] = "5";
    // 执行时限
    PropertyDataMode["IMPLEMENTATION_DEADLINE"] = "6";
    // 事件分类
    PropertyDataMode["EVENT_CLASSIFICATION"] = "7";
    // 事件来源
    PropertyDataMode["EVENT_SOURCE"] = "8";
    // 地区选择
    PropertyDataMode["AREA_SELECTION"] = "9";
    // 设备选择
    PropertyDataMode["DEVICE_SELECTION"] = "10";
})(PropertyDataMode || (PropertyDataMode = {}));
var PropertyDataType;
(function (PropertyDataType) {
    // 文本类型
    PropertyDataType["TEXT"] = "1";
    // 整数类型
    PropertyDataType["INT"] = "2";
    // 小数类型
    PropertyDataType["DOUBLE"] = "3";
    // 日期类型
    PropertyDataType["DATE"] = "4";
    // 选项类型
    PropertyDataType["SELECT"] = "5";
    // 图片类型
    PropertyDataType["IMG"] = "6";
    // 文件类型
    PropertyDataType["FILE"] = "7";
})(PropertyDataType || (PropertyDataType = {}));
var RunCondtionType;
(function (RunCondtionType) {
    // 无条件启动流程
    RunCondtionType["NO_CONDTION"] = "1";
    // 满足以下条件后启动流程
    RunCondtionType["CONDITION"] = "2";
})(RunCondtionType || (RunCondtionType = {}));
var SubmitPeopleType;
(function (SubmitPeopleType) {
    // 角色
    SubmitPeopleType["ROLE"] = "1";
    // 部门
    SubmitPeopleType["DEPARTMENT"] = "2";
    // 人员
    SubmitPeopleType["USER"] = "3";
    // 机构
    SubmitPeopleType["ORG"] = "4";
})(SubmitPeopleType || (SubmitPeopleType = {}));
var TemplateVersionType;
(function (TemplateVersionType) {
    // 完整版
    TemplateVersionType["FULL_VERSION"] = "1";
    // 试用版
    TemplateVersionType["TRIAL_VERSION"] = "2";
    // 演示版
    TemplateVersionType["DEMOED_VERSION"] = "3";
    // 访客版
    TemplateVersionType["VISITOR_VERSION"] = "4";
})(TemplateVersionType || (TemplateVersionType = {}));
var WorkOrder;
(function (WorkOrder) {
    // 事件
    WorkOrder["EVENT"] = "1";
    // 预案
    WorkOrder["PLAN"] = "2";
    // 投诉
    WorkOrder["COMPLAINT"] = "3";
    // 运维
    WorkOrder["OANDM"] = "4";
    // 普通
    WorkOrder["COMMON"] = "5";
    // 其他
    WorkOrder["OTHER"] = "6";
})(WorkOrder || (WorkOrder = {}));
var WorkflowCategory;
(function (WorkflowCategory) {
    // 工单流程
    WorkflowCategory["JOB"] = "1";
    // 消息流程
    WorkflowCategory["MESSAGE"] = "2";
    // 数据流程
    WorkflowCategory["DATA"] = "3";
    // 调度流程
    WorkflowCategory["DISPATCH"] = "4";
})(WorkflowCategory || (WorkflowCategory = {}));
var WorkflowType;
(function (WorkflowType) {
    // 总流程
    WorkflowType["TOTAL"] = "1";
    // 子流程
    WorkflowType["CHRID"] = "2";
})(WorkflowType || (WorkflowType = {}));

var ApiDataTenant = /*#__PURE__*/Object.freeze({
  __proto__: null,
  service: service,
  actor: actor,
  test: test,
  http: http,
  config: config,
  get AddressType () { return AddressType; },
  get BackupContent () { return BackupContent; },
  get BackupStrategy () { return BackupStrategy; },
  get BackupSysComponentType () { return BackupSysComponentType; },
  get BackupType () { return BackupType; },
  get CCOrOtherType () { return CCOrOtherType; },
  get CacheKey () { return CacheKey; },
  get CatalogType () { return CatalogType; },
  get DataResourcePriority () { return DataResourcePriority; },
  get DataResourceType () { return DataResourceType; },
  get DataScale () { return DataScale; },
  get DelayedSelectType () { return DelayedSelectType; },
  get DelayedType () { return DelayedType; },
  get DirectionType () { return DirectionType; },
  get FiledJudgeType () { return FiledJudgeType; },
  get FlowStartUpTimeType () { return FlowStartUpTimeType; },
  get FlowStartUpType () { return FlowStartUpType; },
  get FormModel () { return FormModel; },
  get FormSource () { return FormSource; },
  get FormType () { return FormType; },
  get FromType () { return FromType; },
  get InputType () { return InputType; },
  get InterfaceType () { return InterfaceType; },
  get LanguageType () { return LanguageType; },
  get LogicalOperator () { return LogicalOperator; },
  get NodeStateType () { return NodeStateType; },
  get NodeType () { return NodeType; },
  get OutputType () { return OutputType; },
  get ParticipationType () { return ParticipationType; },
  get ProcessType () { return ProcessType; },
  get PropertyDataMode () { return PropertyDataMode; },
  get PropertyDataType () { return PropertyDataType; },
  get RunCondtionType () { return RunCondtionType; },
  get SubmitPeopleType () { return SubmitPeopleType; },
  get TemplateVersionType () { return TemplateVersionType; },
  get WorkOrder () { return WorkOrder; },
  get WorkflowCategory () { return WorkflowCategory; },
  get WorkflowType () { return WorkflowType; }
});

// 上传类
class ApiUpload {
    /**
     * 获取上传地址
     * @returns {string}
     */
    static getAction() {
        return `${ApiCore.HttpConfig.host.HOST_UPLOAD}upload/upload`;
    }
    /**
     * 通过key获取图片地址
     * @param key
     * @returns {string}
     */
    static getImgUrl(key) {
        return `${ApiCore.HttpConfig.host.HOST_UPLOAD}upload/get?key=${key}`;
    }
}

const AxApi = {
    ApiAppParking,
    ApiBackstage,
    ApiBizData,
    ApiCommon,
    ApiCore,
    ApiDemo,
    ApiDataSettings,
    ApiDataTenant,
    ApiUpload,
};

export default AxApi;
export { ApiAppParking, ApiBackstage, ApiBizData, ApiCommon, ApiCore, ApiDataSettings, ApiDataTenant, ApiDemo, ApiUpload };
