import ApiCore from './api-core';
import ApiCommon from './api-common';

// ApiAppParking 接口合集
declare namespace ApiAppParking {
  //#region 正式API类型定义
  interface RequestActor {
    /**
     * 获取区域
     * BizAreaActor
     * @param areaId
     * @returns {Promise<ApiAppParking.Area[]>}
     */
    ['Area-AreaId-query'](
      //
      areaId: string
    ): Promise<ApiAppParking.Area[]>;

    /**
     * 获取楼层区域树状图
     * BizAreaActor
     * @param parkingId
     * @returns {Promise<ApiAppParking.Area[]>}
     */
    ['Area-query'](
      //
      parkingId: string
    ): Promise<ApiAppParking.Area[]>;

    /**
     * 获取楼层
     * BizAreaActor
     * @param parkingId
     * @returns {Promise<ApiAppParking.AreaFloorVo[]>}
     */
    ['AreaFloorVO-query'](
      //
      parkingId: string
    ): Promise<ApiAppParking.AreaFloorVo[]>;

    /**
     * 增加 ParkingLotChargingStrategy 数据
     * ParkingLotChargingStrategyDetailActor
     * @param detail
     * @returns {Promise<ApiAppParking.ParkingLotChargingStrategyDetail>}
     */
    ['ParkingLotChargingStrategyDetail-create'](
      //
      detail: ApiAppParking.ParkingLotChargingStrategyDetail
    ): Promise<ApiAppParking.ParkingLotChargingStrategyDetail>;

    /**
     * 增加 ParkingLotEquipment 数据
     * ParkingLotEquipmentActor
     * @param ParkingLotEquipment
     * @returns {Promise<ApiAppParking.ParkingLotEquipment>}
     */
    ['ParkingLotEquipment-create'](
      //
      ParkingLotEquipment: ApiAppParking.ParkingLotEquipment
    ): Promise<ApiAppParking.ParkingLotEquipment>;

    /**
     * 删除 ParkingLotEquipment 数据
     * ParkingLotEquipmentActor
     * @param id
     * @returns {Promise<number>}
     */
    ['ParkingLotEquipment-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 ParkingLotEquipment 数据
     * ParkingLotEquipmentActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['ParkingLotEquipment-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 ParkingLotEquipment 数据
     * ParkingLotEquipmentActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingLotEquipment>}
     */
    ['ParkingLotEquipment-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingLotEquipment>;

    /**
     * 获取所有设备类型
     * ParkingLotEquipmentActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['ParkingLotEquipment-get-all-type'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 获取所有 ParkingLotEquipment 数据
     * ParkingLotEquipmentActor
     * @returns {Promise<ApiAppParking.ParkingLotEquipment[]>}
     */
    ['ParkingLotEquipment-getAll'](): Promise<
      ApiAppParking.ParkingLotEquipment[]
    >;

    /**
     * 获取 ParkingLotEquipment 的表格总数信息
     * ParkingLotEquipmentActor
     * @param tid
     * @param ParkingLotEquipment
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['ParkingLotEquipment-grid-count'](
      //
      tid: string,
      //
      ParkingLotEquipment: ApiAppParking.ParkingLotEquipment,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ParkingLotEquipment 的表格列表数据
     * ParkingLotEquipmentActor
     * @param tid
     * @param ParkingLotEquipment
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['ParkingLotEquipment-grid-list'](
      //
      tid: string,
      //
      ParkingLotEquipment: ApiAppParking.ParkingLotEquipment,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 ParkingLotEquipment 的表格分页数据
     * ParkingLotEquipmentActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['ParkingLotEquipment-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 ParkingLotEquipment 数据
     * ParkingLotEquipmentActor
     * @param ParkingLotEquipment
     * @returns {Promise<number>}
     */
    ['ParkingLotEquipment-update'](
      //
      ParkingLotEquipment: ApiAppParking.ParkingLotEquipment
    ): Promise<number>;

    /**
     * 获取app首页车位数
     * BizParkingSpaceAreaActor
     * @param parkingLotId
     * @returns {Promise<any>}
     */
    ['ParkingSpaceAppCountVO-select'](
      //
      parkingLotId: string
    ): Promise<any>;

    /**
     * 获取车位类型下拉数据
     * BizParkingSpaceAreaActor
     * @returns {Promise<any[]>}
     */
    ['ParkingSpaceEnumVO-select'](): Promise<any[]>;

    /**
     * 增加 手机号服务器 数据
     * PhoneNumServerActor
     * @param phoneNumServer
     * @returns {Promise<ApiAppParking.PhoneNumServer>}
     */
    ['PhoneNumServer-create'](
      //
      phoneNumServer: ApiAppParking.PhoneNumServer
    ): Promise<ApiAppParking.PhoneNumServer>;

    /**
     * 删除 手机号服务器 数据
     * PhoneNumServerActor
     * @param id
     * @returns {Promise<number>}
     */
    ['PhoneNumServer-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 手机号服务器 数据
     * PhoneNumServerActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['PhoneNumServer-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 手机号服务器 数据
     * PhoneNumServerActor
     * @param id
     * @returns {Promise<ApiAppParking.PhoneNumServer>}
     */
    ['PhoneNumServer-get'](
      //
      id: string
    ): Promise<ApiAppParking.PhoneNumServer>;

    /**
     * 获取所有 手机号服务器 数据
     * PhoneNumServerActor
     * @returns {Promise<ApiAppParking.PhoneNumServer[]>}
     */
    ['PhoneNumServer-getAll'](): Promise<ApiAppParking.PhoneNumServer[]>;

    /**
     * 根据手机号，获取所有 手机号服务器 数据
     * PhoneNumServerActor
     * @param phoneNum
     * @returns {Promise<ApiAppParking.PhoneNumServer[]>}
     */
    ['PhoneNumServer-getAll-byPhoneNum'](
      //
      phoneNum: string
    ): Promise<ApiAppParking.PhoneNumServer[]>;

    /**
     * 获取 手机号服务器 的表格总数信息
     * PhoneNumServerActor
     * @param tid
     * @param phoneNumServer
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['PhoneNumServer-grid-count'](
      //
      tid: string,
      //
      phoneNumServer: ApiAppParking.PhoneNumServer,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 手机号服务器 的表格列表数据
     * PhoneNumServerActor
     * @param tid
     * @param phoneNumServer
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['PhoneNumServer-grid-list'](
      //
      tid: string,
      //
      phoneNumServer: ApiAppParking.PhoneNumServer,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 手机号服务器 的表格分页数据
     * PhoneNumServerActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['PhoneNumServer-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 手机号服务器 数据
     * PhoneNumServerActor
     * @param phoneNumServer
     * @returns {Promise<ApiAppParking.PhoneNumServer>}
     */
    ['PhoneNumServer-update'](
      //
      phoneNumServer: ApiAppParking.PhoneNumServer
    ): Promise<ApiAppParking.PhoneNumServer>;

    /**
     * 根据车场 楼层 区域来获取车位 左侧车位工作面板
     * BizParkingSpaceAreaActor
     * @param parkingLotId
     * @param parkingLotRegionId
     * @param state
     * @param searchText
     * @returns {Promise<ApiAppParking.ParkingSpaceVO[]>}
     */
    ['Query-parkingSpace'](
      //
      parkingLotId: string,
      //
      parkingLotRegionId: string,
      //
      state: string,
      //
      searchText: string
    ): Promise<ApiAppParking.ParkingSpaceVO[]>;

    /**
     * 动态下拉框
     * SystemMenuConfigActor
     * @param systemClass
     * @param tenantLanguage
     * @returns {Promise<any[]>}
     */
    ['SystemMenuConfig-ComboBox'](
      //
      systemClass: string,
      //
      tenantLanguage: string
    ): Promise<any[]>;

    /**
     * 分页获取信息
     * UserActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['UserActor-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 分页获取信息
     * UserActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['UserActor-pageCount'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取指定停车场所有信息
     * UserReadOutLogActor
     * @param parkingId
     * @returns {Promise<any[]>}
     */
    ['UserReadOutLogActor-getListByParkingId'](
      //
      parkingId: string
    ): Promise<any[]>;

    /**
     * 分页获取信息
     * UserReadOutLogActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['UserReadOutLogActor-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 分页获取总数信息
     * UserReadOutLogActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['UserReadOutLogActor-pageCount'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 已读多条信息
     * UserReadOutLogActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['UserReadOutLogActor-readList'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 已读一条信息
     * UserReadOutLogActor
     * @param id
     * @returns {Promise<number>}
     */
    ['UserReadOutLogActor-readOne'](
      //
      id: string
    ): Promise<number>;

    /**
     * 获取指定停车场所有信息
     * UserReadPayLogActor
     * @param parkingId
     * @param warningOut
     * @returns {Promise<any[]>}
     */
    ['UserReadPayLogActor-getListByParkingId'](
      //
      parkingId: string,
      //
      warningOut: boolean
    ): Promise<any[]>;

    /**
     * 分页获取信息
     * UserReadPayLogActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['UserReadPayLogActor-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 分页获取总数信息
     * UserReadPayLogActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['UserReadPayLogActor-pageCount'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 已读多条信息
     * UserReadPayLogActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['UserReadPayLogActor-readList'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 已读一条信息
     * UserReadPayLogActor
     * @param id
     * @returns {Promise<number>}
     */
    ['UserReadPayLogActor-readOne'](
      //
      id: string
    ): Promise<number>;

    /**
     * 获取微信用户解密数据
     * WXUserInfoActor
     * @param appId
     * @param code
     * @param encryptedData
     * @param iv
     * @returns {Promise<string>}
     */
    ['WXUserInfoActor-getInfo'](
      //
      appId: string,
      //
      code: string,
      //
      encryptedData: string,
      //
      iv: string
    ): Promise<string>;

    /**
     * 增加 Accessvehicle 数据
     * AccessvehicleActor
     * @param accessvehicle
     * @returns {Promise<ApiAppParking.AccessVehicle>}
     */
    ['accessvehicle-create'](
      //
      accessvehicle: ApiAppParking.AccessVehicle
    ): Promise<ApiAppParking.AccessVehicle>;

    /**
     * 删除 Accessvehicle 数据
     * AccessvehicleActor
     * @param id
     * @returns {Promise<number>}
     */
    ['accessvehicle-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 Accessvehicle 数据
     * AccessvehicleActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['accessvehicle-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 Accessvehicle 数据
     * AccessvehicleActor
     * @param id
     * @returns {Promise<ApiAppParking.AccessVehicle>}
     */
    ['accessvehicle-get'](
      //
      id: string
    ): Promise<ApiAppParking.AccessVehicle>;

    /**
     * 获取所有 Accessvehicle 数据
     * AccessvehicleActor
     * @returns {Promise<ApiAppParking.AccessVehicle[]>}
     */
    ['accessvehicle-getAll'](): Promise<ApiAppParking.AccessVehicle[]>;

    /**
     * 获取 Accessvehicle 的表格总数信息
     * AccessvehicleActor
     * @param tid
     * @param accessvehicle
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['accessvehicle-grid-count'](
      //
      tid: string,
      //
      accessvehicle: ApiAppParking.AccessVehicle,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 Accessvehicle 的表格列表数据
     * AccessvehicleActor
     * @param tid
     * @param accessvehicle
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['accessvehicle-grid-list'](
      //
      tid: string,
      //
      accessvehicle: ApiAppParking.AccessVehicle,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 Accessvehicle 的表格分页数据
     * AccessvehicleActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['accessvehicle-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 Accessvehicle 数据
     * AccessvehicleActor
     * @param accessvehicle
     * @returns {Promise<number>}
     */
    ['accessvehicle-update'](
      //
      accessvehicle: ApiAppParking.AccessVehicle
    ): Promise<number>;

    /**
     * 动态停车场信息-上线情况：各区域详情->本周新增数
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<ApiAppParking.ParkingLotOverview>}
     */
    ['additions-online-week-get'](
      //
      cityCode: string
    ): Promise<ApiAppParking.ParkingLotOverview>;

    /**
     * 获取用户信息
     * VehicleParkingController
     * @param authCode
     * @returns {Promise<ApiAppParking.UserAuthVO>}
     */
    ['ali-userId-get'](
      //
      authCode: string
    ): Promise<ApiAppParking.UserAuthVO>;

    /**
     * 增加 Area 数据
     * AreaActor
     * @param area
     * @param sid
     * @returns {Promise<ApiAppParking.Area>}
     */
    ['area-create'](
      //
      area: ApiAppParking.Area,
      //
      sid: string
    ): Promise<ApiAppParking.Area>;

    /**
     * 删除 Area 数据
     * AreaActor
     * @param id
     * @returns {Promise<number>}
     */
    ['area-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 Area 数据
     * AreaActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['area-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 Area 数据
     * AreaActor
     * @param id
     * @param parkingLotId
     * @returns {Promise<ApiAppParking.Area>}
     */
    ['area-get'](
      //
      id: string,
      //
      parkingLotId: string
    ): Promise<ApiAppParking.Area>;

    /**
     * 获取所有 Area 数据
     * AreaActor
     * @returns {Promise<ApiAppParking.Area[]>}
     */
    ['area-getAll'](): Promise<ApiAppParking.Area[]>;

    /**
     * 获取 Area 的表格总数信息
     * AreaActor
     * @param tid
     * @param area
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['area-grid-count'](
      //
      tid: string,
      //
      area: ApiAppParking.Area,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 Area 的表格列表数据
     * AreaActor
     * @param tid
     * @param area
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['area-grid-list'](
      //
      tid: string,
      //
      area: ApiAppParking.Area,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 动态停车场信息-实时余位概况：区域占用率分布
     * BizParkingLotActor
     * @param cityCode
     * @param region
     * @param parkingLotNature
     * @param parkingLotName
     * @returns {Promise<{[key:string]:any}>}
     */
    ['area-occupancy-distribution-get'](
      //
      cityCode: string,
      //
      region: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 获取 Area 的表格分页数据
     * AreaActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['area-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 Area 的表格分页表头与总记录数
     * AreaActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['area-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新 Area 数据
     * AreaActor
     * @param area
     * @returns {Promise<ApiAppParking.Area>}
     */
    ['area-update'](
      //
      area: ApiAppParking.Area
    ): Promise<ApiAppParking.Area>;

    /**
     * 增加 AreaRendering 数据
     * AreaRenderingActor
     * @param areaRendering
     * @returns {Promise<ApiAppParking.AreaRendering>}
     */
    ['areaRendering-create'](
      //
      areaRendering: ApiAppParking.AreaRendering
    ): Promise<ApiAppParking.AreaRendering>;

    /**
     * 删除 AreaRendering 数据
     * AreaRenderingActor
     * @param id
     * @returns {Promise<number>}
     */
    ['areaRendering-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 AreaRendering 数据
     * AreaRenderingActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['areaRendering-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 AreaRendering 数据
     * AreaRenderingActor
     * @param id
     * @returns {Promise<ApiAppParking.AreaRendering>}
     */
    ['areaRendering-get'](
      //
      id: string
    ): Promise<ApiAppParking.AreaRendering>;

    /**
     * 获取所有 AreaRendering 数据
     * AreaRenderingActor
     * @returns {Promise<ApiAppParking.AreaRendering[]>}
     */
    ['areaRendering-getAll'](): Promise<ApiAppParking.AreaRendering[]>;

    /**
     * 获取 AreaRendering 的表格总数信息
     * AreaRenderingActor
     * @param tid
     * @param areaRendering
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['areaRendering-grid-count'](
      //
      tid: string,
      //
      areaRendering: ApiAppParking.AreaRendering,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 AreaRendering 的表格列表数据
     * AreaRenderingActor
     * @param tid
     * @param areaRendering
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['areaRendering-grid-list'](
      //
      tid: string,
      //
      areaRendering: ApiAppParking.AreaRendering,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 根据坐标范围获取车场列表
     * AreaRenderingActor
     * @param coordinateGroup
     * @param lotIds
     * @returns {Promise<{[key:string]:any}>}
     */
    ['areaRendering-list-parking-by-coordinateGroup'](
      //
      coordinateGroup: string,
      //
      lotIds: string[]
    ): Promise<{ [key: string]: any }>;

    /**
     * 获取 AreaRendering 的表格分页数据
     * AreaRenderingActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['areaRendering-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 AreaRendering 的表格分页表头与总记录数
     * AreaRenderingActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['areaRendering-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新 AreaRendering 数据
     * AreaRenderingActor
     * @param areaRendering
     * @returns {Promise<ApiAppParking.AreaRendering>}
     */
    ['areaRendering-update'](
      //
      areaRendering: ApiAppParking.AreaRendering
    ): Promise<ApiAppParking.AreaRendering>;

    /**
     * 增加 Attendance 数据
     * AttendanceActor
     * @param attendance
     * @returns {Promise<ApiAppParking.Attendance>}
     */
    ['attendance-create'](
      //
      attendance: ApiAppParking.Attendance
    ): Promise<ApiAppParking.Attendance>;

    /**
     * 获取今天的打卡次数
     * BizAttendanceActor
     * @param modelWrapper
     * @returns {Promise<number>}
     */
    ['attendance-date-count'](
      //
      modelWrapper: ApiCommon.ModelWrapper
    ): Promise<number>;

    /**
     * 获取 Attendance 的表格分页数据
     * AttendanceActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['attendance-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 Attendance 的表格分页表头与总记录数
     * AttendanceActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['attendance-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * AttendanceSettings
     * AttendanceSettingsActor
     * @param data
     * @returns {Promise<ApiAppParking.AttendanceSettings>}
     */
    ['attendanceSettings-create'](
      //
      data: ApiAppParking.AttendanceSettings
    ): Promise<ApiAppParking.AttendanceSettings>;

    /**
     * 删除AttendanceSettings数据
     * AttendanceSettingsActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['attendanceSettings-delete'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条AttendanceSettings数据
     * AttendanceSettingsActor
     * @param id
     * @returns {Promise<ApiAppParking.AttendanceSettings>}
     */
    ['attendanceSettings-getById'](
      //
      id: string
    ): Promise<ApiAppParking.AttendanceSettings>;

    /**
     * 获取 AttendanceSettings 的表格总数信息
     * AttendanceSettingsActor
     * @param tid
     * @param attendanceSettings
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['attendanceSettings-grid-count'](
      //
      tid: string,
      //
      attendanceSettings: ApiAppParking.AttendanceSettings,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 AttendanceSettings 的表格列表数据
     * AttendanceSettingsActor
     * @param tid
     * @param attendanceSettings
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['attendanceSettings-grid-list'](
      //
      tid: string,
      //
      attendanceSettings: ApiAppParking.AttendanceSettings,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 AttendanceSettings 的表格分页数据
     * AttendanceSettingsActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['attendanceSettings-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 AttendanceSettings 的表格分页表头与总记录数
     * AttendanceSettingsActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['attendanceSettings-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新AttendanceSettings数据
     * AttendanceSettingsActor
     * @param data
     * @returns {Promise<ApiAppParking.AttendanceSettings>}
     */
    ['attendanceSettings-update'](
      //
      data: ApiAppParking.AttendanceSettings
    ): Promise<ApiAppParking.AttendanceSettings>;

    /**
     * 获取当前账户信息
     * AuthenticationActor
     * @returns {Promise<ApiAppParking.User>}
     */
    ['authentication-getAccount'](): Promise<ApiAppParking.User>;

    /**
     * 登录
     * AuthenticationActor
     * @param account
     * @param password
     * @returns {Promise<string>}
     */
    ['authentication-login'](
      //
      account: string,
      //
      password: string
    ): Promise<string>;

    /**
     * 登出
     * AuthenticationActor
     * @returns {Promise<string>}
     */
    ['authentication-logout'](): Promise<string>;

    /**
     * 增加基础菜单项
     * BasicSystemMenuActor
     * @param positionType
     * @param selectId
     * @param data
     * @returns {Promise<boolean>}
     */
    ['basic-system-menu-create'](
      //
      positionType: string,
      //
      selectId: string,
      //
      data: ApiAppParking.BasicSystemMenu
    ): Promise<boolean>;

    /**
     * 删除多个基础菜单数据
     * BasicSystemMenuActor
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['basic-system-menu-delete'](
      //
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条基础菜单数据
     * BasicSystemMenuActor
     * @param id
     * @returns {Promise<ApiAppParking.BasicSystemMenu>}
     */
    ['basic-system-menu-get'](
      //
      id: string
    ): Promise<ApiAppParking.BasicSystemMenu>;

    /**
     * 获取基础菜单的表格列表数据
     * BasicSystemMenuActor
     * @param smcId
     * @returns {Promise<any[]>}
     */
    ['basic-system-menu-grid-list'](
      //
      smcId: string
    ): Promise<any[]>;

    /**
     * 更新系统基础菜单层级顺序
     * BasicSystemMenuActor
     * @param type
     * @param reqs
     * @param targetId
     * @returns {Promise<boolean>}
     */
    ['basic-system-menu-level-order-update'](
      //
      type: string,
      //
      reqs: any[],
      //
      targetId: string
    ): Promise<boolean>;

    /**
     * 获取登录后转到指定页面下拉数据
     * BasicSystemMenuActor
     * @param smcId
     * @returns {Promise<any[]>}
     */
    ['basic-system-menu-login-specify-select'](
      //
      smcId: string
    ): Promise<any[]>;

    /**
     * 修改基础菜单项
     * BasicSystemMenuActor
     * @param data
     * @returns {Promise<ApiAppParking.BasicSystemMenu>}
     */
    ['basic-system-menu-update'](
      //
      data: ApiAppParking.BasicSystemMenu
    ): Promise<ApiAppParking.BasicSystemMenu>;

    /**
     * 车辆放行
     * CarReleaseActor
     * @param carReleaseBO
     * @returns {Promise<string>}
     */
    ['car-release'](
      //
      carReleaseBO: ApiAppParking.CarReleaseBO
    ): Promise<string>;

    /**
     * 增加 chinaDate 数据
     * ChinaDateActor
     * @param year
     * @returns {Promise<boolean>}
     */
    ['chinaDate-add-data-by-year'](
      //
      year: number
    ): Promise<boolean>;

    /**
     * 增加 chinaDate 数据
     * ChinaDateActor
     * @param list
     * @returns {Promise<number>}
     */
    ['chinaDate-add-list'](
      //
      list: ApiAppParking.ChinaDate[]
    ): Promise<number>;

    /**
     * 增加 chinaDate 数据
     * ChinaDateActor
     * @param chinaDate
     * @returns {Promise<ApiAppParking.ChinaDate>}
     */
    ['chinaDate-create'](
      //
      chinaDate: ApiAppParking.ChinaDate
    ): Promise<ApiAppParking.ChinaDate>;

    /**
     * 删除 chinaDate 数据
     * ChinaDateActor
     * @param id
     * @returns {Promise<number>}
     */
    ['chinaDate-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 chinaDate 数据
     * ChinaDateActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['chinaDate-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 chinaDate 数据
     * ChinaDateActor
     * @param id
     * @returns {Promise<ApiAppParking.ChinaDate>}
     */
    ['chinaDate-get'](
      //
      id: string
    ): Promise<ApiAppParking.ChinaDate>;

    /**
     * 获取所有 chinaDate 数据
     * ChinaDateActor
     * @returns {Promise<ApiAppParking.ChinaDate[]>}
     */
    ['chinaDate-getAll'](): Promise<ApiAppParking.ChinaDate[]>;

    /**
     * 获取 chinaDate 的表格总数信息
     * ChinaDateActor
     * @param tid
     * @param chinaDate
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['chinaDate-grid-count'](
      //
      tid: string,
      //
      chinaDate: ApiAppParking.ChinaDate,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 chinaDate 的表格列表数据
     * ChinaDateActor
     * @param tid
     * @param chinaDate
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['chinaDate-grid-list'](
      //
      tid: string,
      //
      chinaDate: ApiAppParking.ChinaDate,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 chinaDate 的表格分页数据
     * ChinaDateActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['chinaDate-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 chinaDate 数据
     * ChinaDateActor
     * @param chinaDate
     * @returns {Promise<number>}
     */
    ['chinaDate-update'](
      //
      chinaDate: ApiAppParking.ChinaDate
    ): Promise<number>;

    /**
     * 根据区域配置id获取 City 的数据
     * CityActor
     * @param odAreaConfigId
     * @returns {Promise<ApiAppParking.City[]>}
     */
    ['city-getCityByOdAreaConfigId'](
      //
      odAreaConfigId: string
    ): Promise<ApiAppParking.City[]>;

    /**
     * 查询城市数据
     * BaseInformationActor
     * @param provinceCode
     * @returns {Promise<any[]>}
     */
    ['city-query'](
      //
      provinceCode: string
    ): Promise<any[]>;

    /**
     * 获取 City 的表格列表数据
     * CityActor
     * @param tid
     * @param city
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['city-vo-grid-list'](
      //
      tid: string,
      //
      city: ApiAppParking.City,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 City 的表格分页数据
     * CityActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['city-vo-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 关闸
     * CarReleaseActor
     * @param deviceId
     * @returns {Promise<any>}
     */
    ['close-only'](
      //
      deviceId: string
    ): Promise<any>;

    /**
     * 增加 CommutingConfiguration 数据
     * CommutingConfigurationActor
     * @param commutingConfiguration
     * @returns {Promise<ApiAppParking.CommutingConfiguration>}
     */
    ['commutingConfiguration-create'](
      //
      commutingConfiguration: ApiAppParking.CommutingConfiguration
    ): Promise<ApiAppParking.CommutingConfiguration>;

    /**
     * 删除 CommutingConfiguration 数据
     * CommutingConfigurationActor
     * @param id
     * @returns {Promise<number>}
     */
    ['commutingConfiguration-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 CommutingConfiguration 数据
     * CommutingConfigurationActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['commutingConfiguration-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 CommutingConfiguration 数据
     * CommutingConfigurationActor
     * @param id
     * @returns {Promise<ApiAppParking.CommutingConfiguration>}
     */
    ['commutingConfiguration-get'](
      //
      id: string
    ): Promise<ApiAppParking.CommutingConfiguration>;

    /**
     * 获取所有 CommutingConfiguration 数据
     * CommutingConfigurationActor
     * @returns {Promise<ApiAppParking.CommutingConfiguration[]>}
     */
    ['commutingConfiguration-getAll'](): Promise<
      ApiAppParking.CommutingConfiguration[]
    >;

    /**
     * 获取 CommutingConfiguration 的表格总数信息
     * CommutingConfigurationActor
     * @param tid
     * @param commutingConfiguration
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['commutingConfiguration-grid-count'](
      //
      tid: string,
      //
      commutingConfiguration: ApiAppParking.CommutingConfiguration,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 CommutingConfiguration 的表格列表数据
     * CommutingConfigurationActor
     * @param tid
     * @param commutingConfiguration
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['commutingConfiguration-grid-list'](
      //
      tid: string,
      //
      commutingConfiguration: ApiAppParking.CommutingConfiguration,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 CommutingConfiguration 的表格分页数据
     * CommutingConfigurationActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['commutingConfiguration-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 CommutingConfiguration 的表格分页总数信息
     * CommutingConfigurationActor
     * @param tid
     * @param modelWrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['commutingConfiguration-page-count'](
      //
      tid: string,
      //
      modelWrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新 CommutingConfiguration 数据
     * CommutingConfigurationActor
     * @param commutingConfiguration
     * @returns {Promise<ApiAppParking.CommutingConfiguration>}
     */
    ['commutingConfiguration-update'](
      //
      commutingConfiguration: ApiAppParking.CommutingConfiguration
    ): Promise<ApiAppParking.CommutingConfiguration>;

    /**
     * 根据日期获取用户列表
     * CommutingConfigurationActor
     * @param date
     * @param searchText
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['commutingConfiguration-user-list'](
      //
      date: string,
      //
      searchText: string
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 删除泊位图
     * BizAreaActor
     * @param areaId
     * @returns {Promise<ApiAppParking.Area>}
     */
    ['deleteArea'](
      //
      areaId: string
    ): Promise<ApiAppParking.Area>;

    /**
     * 增加部门数据
     * DepartmentActor
     * @param data
     * @returns {Promise<ApiAppParking.Department>}
     */
    ['department-create'](
      //
      data: ApiAppParking.Department
    ): Promise<ApiAppParking.Department>;

    /**
     * 删除部门数据
     * DepartmentActor
     * @param ids
     * @param oid
     * @returns {Promise<number>}
     */
    ['department-delete'](
      //
      ids: string[],
      //
      oid: string
    ): Promise<number>;

    /**
     * 获取单条部门数据
     * DepartmentActor
     * @param id
     * @returns {Promise<ApiAppParking.Department>}
     */
    ['department-get'](
      //
      id: string
    ): Promise<ApiAppParking.Department>;

    /**
     * 获取所有 部门 数据
     * DepartmentActor
     * @returns {Promise<ApiAppParking.Department[]>}
     */
    ['department-getAll'](): Promise<ApiAppParking.Department[]>;

    /**
     * 获取某个机构下所有 部门 数据
     * DepartmentActor
     * @param oid
     * @returns {Promise<ApiAppParking.Department[]>}
     */
    ['department-getAll-byOid'](
      //
      oid: string
    ): Promise<ApiAppParking.Department[]>;

    /**
     * 获取部门的表格总数信息
     * DepartmentActor
     * @param department
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['department-grid-count'](
      //
      department: ApiAppParking.Department
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取部门的表格列表数据
     * DepartmentActor
     * @param department
     * @param orders
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['department-grid-list'](
      //
      department: ApiAppParking.Department,
      //
      orders: any[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取部门信息数据
     * DepartmentActor
     * @param id
     * @returns {Promise<ApiAppParking.DepartmentInfoData>}
     */
    ['department-info-data-get'](
      //
      id: string
    ): Promise<ApiAppParking.DepartmentInfoData>;

    /**
     * 获取组织架构部门下拉数据跟住单位id
     * OrganizationActor
     * @param id
     * @returns {Promise<any[]>}
     */
    ['department-select-view'](
      //
      id: string
    ): Promise<any[]>;

    /**
     * 获取当前机构下部门目录树数据
     * DepartmentActor
     * @param oid
     * @returns {Promise<any[]>}
     */
    ['department-tree-list'](
      //
      oid: string
    ): Promise<any[]>;

    /**
     * 修改部门数据
     * DepartmentActor
     * @param data
     * @returns {Promise<ApiAppParking.Department>}
     */
    ['department-update'](
      //
      data: ApiAppParking.Department
    ): Promise<ApiAppParking.Department>;

    /**
     * 获取是否部署下拉下拉数据
     * BizParkingLotAreaActor
     * @returns {Promise<any[]>}
     */
    ['deployEnumVO-select'](): Promise<any[]>;

    /**
     * 增加 地磁设备日志 数据
     * DeviceGeomagnetismLogActor
     * @param geomagnetism
     * @returns {Promise<ApiAppParking.DeviceGeomagnetismLog>}
     */
    ['deviceGeomagnetismlog-create'](
      //
      geomagnetism: ApiAppParking.DeviceGeomagnetismLog
    ): Promise<ApiAppParking.DeviceGeomagnetismLog>;

    /**
     * 删除 地磁设备日志 数据
     * DeviceGeomagnetismLogActor
     * @param id
     * @returns {Promise<number>}
     */
    ['deviceGeomagnetismlog-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 增加 DeviceHighCamera 数据
     * DeviceHighCameraActor
     * @param deviceHighCamera
     * @returns {Promise<ApiAppParking.DeviceHighCamera>}
     */
    ['deviceHighCamera-create'](
      //
      deviceHighCamera: ApiAppParking.DeviceHighCamera
    ): Promise<ApiAppParking.DeviceHighCamera>;

    /**
     * 删除 DeviceHighCamera 数据
     * DeviceHighCameraActor
     * @param id
     * @returns {Promise<number>}
     */
    ['deviceHighCamera-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 DeviceHighCamera 数据
     * DeviceHighCameraActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['deviceHighCamera-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 DeviceHighCamera 数据
     * DeviceHighCameraActor
     * @param id
     * @returns {Promise<ApiAppParking.DeviceHighCamera>}
     */
    ['deviceHighCamera-get'](
      //
      id: string
    ): Promise<ApiAppParking.DeviceHighCamera>;

    /**
     * 获取所有 DeviceHighCamera 数据
     * DeviceHighCameraActor
     * @returns {Promise<ApiAppParking.DeviceHighCamera[]>}
     */
    ['deviceHighCamera-getAll'](): Promise<ApiAppParking.DeviceHighCamera[]>;

    /**
     * 获取 DeviceHighCamera 的表格总数信息
     * DeviceHighCameraActor
     * @param tid
     * @param deviceHighCamera
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['deviceHighCamera-grid-count'](
      //
      tid: string,
      //
      deviceHighCamera: ApiAppParking.DeviceHighCamera,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 DeviceHighCamera 的表格列表数据
     * DeviceHighCameraActor
     * @param tid
     * @param deviceHighCamera
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['deviceHighCamera-grid-list'](
      //
      tid: string,
      //
      deviceHighCamera: ApiAppParking.DeviceHighCamera,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 DeviceHighCamera 的表格分页数据
     * DeviceHighCameraActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['deviceHighCamera-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 DeviceHighCamera 的表格分页数据
     * DeviceHighCameraActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['deviceHighCamera-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新 DeviceHighCamera 数据
     * DeviceHighCameraActor
     * @param deviceHighCamera
     * @returns {Promise<number>}
     */
    ['deviceHighCamera-update'](
      //
      deviceHighCamera: ApiAppParking.DeviceHighCamera
    ): Promise<number>;

    /**
     * 查询区数据
     * BaseInformationActor
     * @param cityCode
     * @returns {Promise<any[]>}
     */
    ['district-query'](
      //
      cityCode: string
    ): Promise<any[]>;

    /**
     * 增加 DynamicParking 数据
     * DynamicParkingActor
     * @param dynamicParking
     * @returns {Promise<ApiAppParking.DynamicParking>}
     */
    ['dynamicParking-create'](
      //
      dynamicParking: ApiAppParking.DynamicParking
    ): Promise<ApiAppParking.DynamicParking>;

    /**
     * 删除 DynamicParking 数据
     * DynamicParkingActor
     * @param id
     * @returns {Promise<number>}
     */
    ['dynamicParking-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 DynamicParking 数据
     * DynamicParkingActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['dynamicParking-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 DynamicParking 数据
     * DynamicParkingActor
     * @param id
     * @returns {Promise<ApiAppParking.DynamicParking>}
     */
    ['dynamicParking-get'](
      //
      id: string
    ): Promise<ApiAppParking.DynamicParking>;

    /**
     * 获取所有 DynamicParking 数据
     * DynamicParkingActor
     * @returns {Promise<ApiAppParking.DynamicParking[]>}
     */
    ['dynamicParking-getAll'](): Promise<ApiAppParking.DynamicParking[]>;

    /**
     * 获取 DynamicParking 的表格总数信息
     * DynamicParkingActor
     * @param tid
     * @param dynamicParking
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['dynamicParking-grid-count'](
      //
      tid: string,
      //
      dynamicParking: ApiAppParking.DynamicParking,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 DynamicParking 的表格列表数据
     * DynamicParkingActor
     * @param tid
     * @param dynamicParking
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['dynamicParking-grid-list'](
      //
      tid: string,
      //
      dynamicParking: ApiAppParking.DynamicParking,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 DynamicParking 的表格分页数据
     * DynamicParkingActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['dynamicParking-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 DynamicParking 数据
     * DynamicParkingActor
     * @param dynamicParking
     * @returns {Promise<number>}
     */
    ['dynamicParking-update'](
      //
      dynamicParking: ApiAppParking.DynamicParking
    ): Promise<number>;

    /**
     * 增加 EntranceAndExit 数据
     * EntranceAndExitActor
     * @param entranceAndExit
     * @returns {Promise<ApiAppParking.EntranceAndExit>}
     */
    ['entranceAndExit-create'](
      //
      entranceAndExit: ApiAppParking.EntranceAndExit
    ): Promise<ApiAppParking.EntranceAndExit>;

    /**
     * 删除 EntranceAndExit 数据
     * EntranceAndExitActor
     * @param id
     * @returns {Promise<number>}
     */
    ['entranceAndExit-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 EntranceAndExit 数据
     * EntranceAndExitActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['entranceAndExit-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 EntranceAndExit 数据
     * EntranceAndExitActor
     * @param id
     * @returns {Promise<ApiAppParking.EntranceAndExit>}
     */
    ['entranceAndExit-get'](
      //
      id: string
    ): Promise<ApiAppParking.EntranceAndExit>;

    /**
     * 出入口，车型枚举
     * EntranceAndExitActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['entranceAndExit-get-all-car-type'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 获取所有 EntranceAndExit 数据
     * EntranceAndExitActor
     * @returns {Promise<ApiAppParking.EntranceAndExit[]>}
     */
    ['entranceAndExit-getAll'](): Promise<ApiAppParking.EntranceAndExit[]>;

    /**
     * 获取 EntranceAndExit 的表格总数信息
     * EntranceAndExitActor
     * @param tid
     * @param entranceAndExit
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['entranceAndExit-grid-count'](
      //
      tid: string,
      //
      entranceAndExit: ApiAppParking.EntranceAndExit,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 EntranceAndExit 的表格列表数据
     * EntranceAndExitActor
     * @param tid
     * @param entranceAndExit
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['entranceAndExit-grid-list'](
      //
      tid: string,
      //
      entranceAndExit: ApiAppParking.EntranceAndExit,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 出入口名称
     * RealParkingSpaceActor
     * @param parkingId
     * @param type
     * @returns {Promise<any[]>}
     */
    ['entranceAndExit-name-get'](
      //
      parkingId: string,
      //
      type: string
    ): Promise<any[]>;

    /**
     * 获取 EntranceAndExit 的表格分页数据
     * EntranceAndExitActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['entranceAndExit-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 EntranceAndExit 的表格分页表头与总记录数
     * EntranceAndExitActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['entranceAndExit-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 Manufacturer 的出入口类型
     * EntranceAndExitActor
     * @returns {Promise<ApiAppParking.EnumVO>}
     */
    ['entranceAndExit-type'](): Promise<ApiAppParking.EnumVO>;

    /**
     * 更新 EntranceAndExit 数据
     * EntranceAndExitActor
     * @param entranceAndExit
     * @returns {Promise<number>}
     */
    ['entranceAndExit-update'](
      //
      entranceAndExit: ApiAppParking.EntranceAndExit
    ): Promise<number>;

    /**
     * 增加 地磁设备 数据
     * DeviceGeomagnetismActor
     * @param geomagnetism
     * @returns {Promise<ApiAppParking.DeviceGeomagnetism>}
     */
    ['geomagnetism-create'](
      //
      geomagnetism: ApiAppParking.DeviceGeomagnetism
    ): Promise<ApiAppParking.DeviceGeomagnetism>;

    /**
     * 删除 地磁设备 数据
     * DeviceGeomagnetismActor
     * @param id
     * @returns {Promise<number>}
     */
    ['geomagnetism-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 地磁设备 数据
     * DeviceGeomagnetismActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['geomagnetism-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 地磁设备 数据
     * DeviceGeomagnetismActor
     * @param id
     * @returns {Promise<ApiAppParking.DeviceGeomagnetism>}
     */
    ['geomagnetism-get'](
      //
      id: string
    ): Promise<ApiAppParking.DeviceGeomagnetism>;

    /**
     * 获取所有 地磁设备 数据
     * DeviceGeomagnetismActor
     * @returns {Promise<ApiAppParking.DeviceGeomagnetism[]>}
     */
    ['geomagnetism-getAll'](): Promise<ApiAppParking.DeviceGeomagnetism[]>;

    /**
     * 获取 地磁设备 的表格总数信息
     * DeviceGeomagnetismActor
     * @param tid
     * @param geomagnetism
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['geomagnetism-grid-count'](
      //
      tid: string,
      //
      geomagnetism: ApiAppParking.DeviceGeomagnetism,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 地磁设备 的表格列表数据
     * DeviceGeomagnetismActor
     * @param tid
     * @param geomagnetism
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['geomagnetism-grid-list'](
      //
      tid: string,
      //
      geomagnetism: ApiAppParking.DeviceGeomagnetism,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 地磁设备 的表格分页数据
     * DeviceGeomagnetismActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['geomagnetism-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 地磁设备 的表格分页表头与总记录数
     * DeviceGeomagnetismActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['geomagnetism-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新 地磁设备 数据
     * DeviceGeomagnetismActor
     * @param geomagnetism
     * @returns {Promise<ApiAppParking.DeviceGeomagnetism>}
     */
    ['geomagnetism-update'](
      //
      geomagnetism: ApiAppParking.DeviceGeomagnetism
    ): Promise<ApiAppParking.DeviceGeomagnetism>;

    /**
     * 根据地区编号查名称
     * BaseInformationActor
     * @param code
     * @returns {Promise<string>}
     */
    ['get-Name'](
      //
      code: string
    ): Promise<string>;

    /**
     * 泊位图车位详情
     * BizParkingSpaceAreaActor
     * @param id
     * @returns {Promise<ApiAppParking.GetParticularsVO>}
     */
    ['get-ParkingSpace-particulars'](
      //
      id: string
    ): Promise<ApiAppParking.GetParticularsVO>;

    /**
     * 根据地区编号查坐标
     * BaseInformationActor
     * @param code
     * @returns {Promise<{[key:string]:any}>}
     */
    ['get-coordinate'](
      //
      code: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 根据机构id数组取名称SelectView
     * OrganizationActor
     * @param ids
     * @returns {Promise<any[]>}
     */
    ['get-org-name-by-ids-SelectView'](
      //
      ids: string[]
    ): Promise<any[]>;

    /**
     * 根据地区编号查范围
     * BaseInformationActor
     * @param code
     * @returns {Promise<string>}
     */
    ['get-range'](
      //
      code: string
    ): Promise<string>;

    /**
     * 获取系统菜单配置标题栏组件下拉数据
     * SystemMenuConfigActor
     * @param cCode
     * @returns {Promise<any[]>}
     */
    ['getSystemMenuConfigTitleBarData'](
      //
      cCode: string
    ): Promise<any[]>;

    /**
     * 车牌、车位查询
     * LeaveParkingRecordActor
     * @param parkingLotId
     * @param searchText
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['leaveParkingRecord-carNum-parkingSpaceName-search'](
      //
      parkingLotId: string,
      //
      searchText: string,
      //
      page: number,
      //
      pageSize: number
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取单条 leaveParkingRecord 数据
     * LeaveParkingRecordActor
     * @param id
     * @returns {Promise<ApiAppParking.LeaveParkingRecord>}
     */
    ['leaveParkingRecord-get'](
      //
      id: string
    ): Promise<ApiAppParking.LeaveParkingRecord>;

    /**
     * 根据流水号获取单条 leaveParkingRecord 数据
     * LeaveParkingRecordActor
     * @param serialNumber
     * @returns {Promise<ApiAppParking.LeaveParkingRecord>}
     */
    ['leaveParkingRecord-get-by-serialNumber'](
      //
      serialNumber: string
    ): Promise<ApiAppParking.LeaveParkingRecord>;

    /**
     * 获取所有 leaveParkingRecord 数据
     * LeaveParkingRecordActor
     * @returns {Promise<ApiAppParking.LeaveParkingRecord[]>}
     */
    ['leaveParkingRecord-getAll'](): Promise<
      ApiAppParking.LeaveParkingRecord[]
    >;

    /**
     * 获取 LeaveParkingRecord 的表格总数信息
     * LeaveParkingRecordActor
     * @param tid
     * @param leaveParkingRecord
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['leaveParkingRecord-grid-count'](
      //
      tid: string,
      //
      leaveParkingRecord: ApiAppParking.LeaveParkingRecord,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 LeaveParkingRecord 的表格列表数据
     * LeaveParkingRecordActor
     * @param tid
     * @param leaveParkingRecord
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['leaveParkingRecord-grid-list'](
      //
      tid: string,
      //
      leaveParkingRecord: ApiAppParking.LeaveParkingRecord,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 手动离场
     * LeaveParkingRecordActor
     * @param serialNumber
     * @returns {Promise<any>}
     */
    ['leaveParkingRecord-leave-confirm'](
      //
      serialNumber: string
    ): Promise<any>;

    /**
     * 获取 leaveParkingRecord 的表格分页数据
     * LeaveParkingRecordActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['leaveParkingRecord-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 leaveParkingRecord 的表格分页表头与总记录数
     * LeaveParkingRecordActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['leaveParkingRecord-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 leaveParkingRecord 的图片数据
     * LeaveParkingRecordActor
     * @param serialNumber
     * @returns {Promise<ApiAppParking.ParkingPicVO>}
     */
    ['leaveParkingRecord-pic-get'](
      //
      serialNumber: string
    ): Promise<ApiAppParking.ParkingPicVO>;

    /**
     * 获取 leaveParkingRecord 的表格分页数据
     * LeaveParkingRecordActor
     * @param wrapper
     * @param searchText
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['leaveParkingRecord-search'](
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      searchText: string
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 leaveParkingRecord 的表格分页表头与总记录数
     * LeaveParkingRecordActor
     * @param tid
     * @param wrapper
     * @param searchText
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['leaveParkingRecord-search-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      searchText: string,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 根据市编号查区范围列表
     * BaseInformationActor
     * @param cityCode
     * @returns {Promise<ApiAppParking.CityCoordinateVO[]>}
     */
    ['list-range'](
      //
      cityCode: string
    ): Promise<ApiAppParking.CityCoordinateVO[]>;

    /**
     * 增加 Manufacturer 数据
     * ManufacturerActor
     * @param manufacturer
     * @returns {Promise<ApiAppParking.Manufacturer>}
     */
    ['manufacturer-create'](
      //
      manufacturer: ApiAppParking.Manufacturer
    ): Promise<ApiAppParking.Manufacturer>;

    /**
     * 删除 Manufacturer 数据
     * ManufacturerActor
     * @param id
     * @returns {Promise<number>}
     */
    ['manufacturer-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 Manufacturer 数据
     * ManufacturerActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['manufacturer-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 Manufacturer 数据
     * ManufacturerActor
     * @param id
     * @returns {Promise<ApiAppParking.Manufacturer>}
     */
    ['manufacturer-get'](
      //
      id: string
    ): Promise<ApiAppParking.Manufacturer>;

    /**
     * 获取所有 Manufacturer 数据
     * ManufacturerActor
     * @returns {Promise<ApiAppParking.Manufacturer[]>}
     */
    ['manufacturer-getAll'](): Promise<ApiAppParking.Manufacturer[]>;

    /**
     * 获取 Manufacturer 的表格总数信息
     * ManufacturerActor
     * @param tid
     * @param manufacturer
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['manufacturer-grid-count'](
      //
      tid: string,
      //
      manufacturer: ApiAppParking.Manufacturer,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 Manufacturer 的表格列表数据
     * ManufacturerActor
     * @param tid
     * @param manufacturer
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['manufacturer-grid-list'](
      //
      tid: string,
      //
      manufacturer: ApiAppParking.Manufacturer,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 Manufacturer 的表格分页数据
     * ManufacturerActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['manufacturer-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 Manufacturer 的表格分页表头与总记录数
     * ManufacturerActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['manufacturer-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 Manufacturer 的表格分页数据
     * ManufacturerActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['manufacturer-page-vo'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 Manufacturer 数据
     * ManufacturerActor
     * @param manufacturer
     * @returns {Promise<ApiAppParking.Manufacturer>}
     */
    ['manufacturer-update'](
      //
      manufacturer: ApiAppParking.Manufacturer
    ): Promise<ApiAppParking.Manufacturer>;

    /**
     * od分析-高峰路线分析：本地/外地车分析
     * OdAnalysisActor
     * @param queryObject
     * @returns {Promise<{[key:string]:any}>}
     */
    ['od-carLicenseType-analysis'](
      //
      queryObject: ApiAppParking.QueryObject
    ): Promise<{ [key: string]: any }>;

    /**
     * od分析-区域配置分析：本地/外地/其他车量数分析
     * OdAnalysisActor
     * @param odAreaConfigId
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['od-carLicenseTypeOdAnalysis'](
      //
      odAreaConfigId: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * od分析-高峰路线分析：油/电车分布
     * OdAnalysisActor
     * @param queryObject
     * @returns {Promise<{[key:string]:any}>}
     */
    ['od-distribution-vehicle-energy-types'](
      //
      queryObject: ApiAppParking.QueryObject
    ): Promise<{ [key: string]: any }>;

    /**
     * od分析-区域配置分析：时间段内区域到区域的车辆路径总数
     * OdAnalysisActor
     * @param odAreaConfigId
     * @param start
     * @param end
     * @returns {Promise<ApiAppParking.DistrictVehicleRoute[]>}
     */
    ['od-district2DistrictVehicleRoute'](
      //
      odAreaConfigId: string,
      //
      start: string,
      //
      end: string
    ): Promise<ApiAppParking.DistrictVehicleRoute[]>;

    /**
     * od分析-高峰路线分析：实时数据 车流量高峰时段，车流量高峰车场
     * OdAnalysisActor
     * @param queryObject
     * @returns {Promise<{[key:string]:any}>}
     */
    ['od-peakPeriodTrafficFlow'](
      //
      queryObject: ApiAppParking.QueryObject
    ): Promise<{ [key: string]: any }>;

    /**
     * od分析-高峰路线分析：实时数据 车流量高峰时段，车流量高峰车场(与查询条件的时间无关)
     * OdAnalysisActor
     * @param queryObject
     * @returns {Promise<{[key:string]:any}>}
     */
    ['od-peakPeriodTrafficFlowNew'](
      //
      queryObject: ApiAppParking.QueryObject
    ): Promise<{ [key: string]: any }>;

    /**
     * od分析-高峰路线分析：实时数据-总车流量
     * OdAnalysisActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['od-peakRouteAnalysis'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * od分析-高峰路线分析：高峰时段下拉
     * OdAnalysisActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}[]>}
     */
    ['od-peakRouteAnalysisList'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }[]>;

    /**
     * od分析-高峰路线分析：高峰路线 Top30
     * OdAnalysisActor
     * @param queryObject
     * @returns {Promise<{[key:string]:any}>}
     */
    ['od-peakRouteAnalysisTop30'](
      //
      queryObject: ApiAppParking.QueryObject
    ): Promise<{ [key: string]: any }>;

    /**
     * 增加 od区域配置 数据
     * OdAreaConfigActor
     * @param data
     * @returns {Promise<ApiAppParking.OdAreaConfig>}
     */
    ['odAreaConfig-create'](
      //
      data: ApiAppParking.OdAreaConfig
    ): Promise<ApiAppParking.OdAreaConfig>;

    /**
     * 删除 od区域配置 数据
     * OdAreaConfigActor
     * @param id
     * @returns {Promise<number>}
     */
    ['odAreaConfig-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 od区域配置 数据
     * OdAreaConfigActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['odAreaConfig-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 od区域配置 数据
     * OdAreaConfigActor
     * @param id
     * @returns {Promise<ApiAppParking.OdAreaConfig>}
     */
    ['odAreaConfig-get'](
      //
      id: string
    ): Promise<ApiAppParking.OdAreaConfig>;

    /**
     * 获取所有 OdAreaConfig 数据
     * OdAreaConfigActor
     * @returns {Promise<ApiAppParking.OdAreaConfig[]>}
     */
    ['odAreaConfig-getAll'](): Promise<ApiAppParking.OdAreaConfig[]>;

    /**
     * 获取省份-城市名称列表
     * OdAreaConfigActor
     * @returns {Promise<ApiAppParking.OdAreaConfig[]>}
     */
    ['odAreaConfig-getCityList'](): Promise<ApiAppParking.OdAreaConfig[]>;

    /**
     * 获取 OdAreaConfig 的表格总数信息
     * OdAreaConfigActor
     * @param tid
     * @param area
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['odAreaConfig-grid-count'](
      //
      tid: string,
      //
      area: ApiAppParking.OdAreaConfig,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 OdAreaConfig 的表格列表数据
     * OdAreaConfigActor
     * @param tid
     * @param area
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['odAreaConfig-grid-list'](
      //
      tid: string,
      //
      area: ApiAppParking.OdAreaConfig,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 OdAreaConfig 的表格分页数据
     * OdAreaConfigActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['odAreaConfig-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 od区域配置 数据
     * OdAreaConfigActor
     * @param area
     * @returns {Promise<number>}
     */
    ['odAreaConfig-update'](
      //
      area: ApiAppParking.OdAreaConfig
    ): Promise<number>;

    /**
     * 更新 od区域配置 数据
     * OdAreaConfigActor
     * @param area
     * @returns {Promise<ApiAppParking.OdAreaConfig>}
     */
    ['odAreaConfig-updateBack'](
      //
      area: ApiAppParking.OdAreaConfig
    ): Promise<ApiAppParking.OdAreaConfig>;

    /**
     * 增加 一体机设备 数据
     * DeviceOneMachineActor
     * @param data
     * @returns {Promise<ApiAppParking.DeviceOneMachine>}
     */
    ['oneMachine-create'](
      //
      data: ApiAppParking.DeviceOneMachine
    ): Promise<ApiAppParking.DeviceOneMachine>;

    /**
     * 删除 一体机设备 数据
     * DeviceOneMachineActor
     * @param id
     * @returns {Promise<number>}
     */
    ['oneMachine-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 一体机设备 数据
     * DeviceOneMachineActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['oneMachine-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 一体机设备 数据
     * DeviceOneMachineActor
     * @param id
     * @returns {Promise<ApiAppParking.DeviceOneMachine>}
     */
    ['oneMachine-get'](
      //
      id: string
    ): Promise<ApiAppParking.DeviceOneMachine>;

    /**
     * 根据条件获取 一体机设备 数据
     * DeviceOneMachineActor
     * @param data
     * @returns {Promise<ApiAppParking.DeviceOneMachine[]>}
     */
    ['oneMachine-get-list'](
      //
      data: ApiAppParking.DeviceOneMachine
    ): Promise<ApiAppParking.DeviceOneMachine[]>;

    /**
     * 获取所有 一体机设备 数据
     * DeviceOneMachineActor
     * @returns {Promise<ApiAppParking.DeviceOneMachine[]>}
     */
    ['oneMachine-getAll'](): Promise<ApiAppParking.DeviceOneMachine[]>;

    /**
     * 获取 一体机设备 的表格总数信息
     * DeviceOneMachineActor
     * @param tid
     * @param data
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['oneMachine-grid-count'](
      //
      tid: string,
      //
      data: ApiAppParking.DeviceOneMachine,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 一体机设备 的表格列表数据
     * DeviceOneMachineActor
     * @param tid
     * @param data
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['oneMachine-grid-list'](
      //
      tid: string,
      //
      data: ApiAppParking.DeviceOneMachine,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 一体机设备 的表格分页数据
     * DeviceOneMachineActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['oneMachine-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 一体机设备 的表格分页表头与总记录数
     * DeviceOneMachineActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['oneMachine-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新 一体机设备 数据
     * DeviceOneMachineActor
     * @param data
     * @returns {Promise<ApiAppParking.DeviceOneMachine>}
     */
    ['oneMachine-update'](
      //
      data: ApiAppParking.DeviceOneMachine
    ): Promise<ApiAppParking.DeviceOneMachine>;

    /**
     * 开闸
     * CarReleaseActor
     * @param deviceId
     * @returns {Promise<any>}
     */
    ['open-only'](
      //
      deviceId: string
    ): Promise<any>;

    /**
     * 订单创建
     * AlipayTradeController
     * @param payload
     * @returns {Promise<string>}
     */
    ['order-create'](
      //
      payload: ApiAppParking.AlipayTradeCreatePayload
    ): Promise<string>;

    /**
     * 创建jsapi订单
     * ParkingOrderActor
     * @param carNum
     * @param userId
     * @param type
     * @param orderId
     * @param parkingLotId
     * @returns {Promise<ApiAppParking.JsApiOrderVO>}
     */
    ['order-jsapi-create'](
      //
      carNum: string,
      //
      userId: string,
      //
      type: string,
      //
      orderId: string,
      //
      parkingLotId: string
    ): Promise<ApiAppParking.JsApiOrderVO>;

    /**
     * 使用现金支付
     * ParkingOrderActor
     * @param parkingPayPayload
     * @returns {Promise<string>}
     */
    ['order-pay-cash'](
      //
      parkingPayPayload: ApiAppParking.ParkingPayPayload
    ): Promise<string>;

    /**
     * 无需支付离场
     * ParkingOrderActor
     * @param serialNumber
     * @returns {Promise<string>}
     */
    ['order-pay-dispense-pay'](
      //
      serialNumber: string
    ): Promise<string>;

    /**
     * 用户无需支付
     * ParkingOrderActor
     * @param serialNumber
     * @returns {Promise<any>}
     */
    ['order-pay-user-dispense-pay'](
      //
      serialNumber: string
    ): Promise<any>;

    /**
     * 订单状态
     * ParkingOrderActor
     * @param serialNumber
     * @returns {Promise<string>}
     */
    ['order-state'](
      //
      serialNumber: string
    ): Promise<string>;

    /**
     * 停车费用信息
     * ParkingOrderActor
     * @param parkingPayPayload
     * @returns {Promise<ApiAppParking.PayResultVO>}
     */
    ['order-wait-pay-parking-cost'](
      //
      parkingPayPayload: ApiAppParking.ParkingPayPayload
    ): Promise<ApiAppParking.PayResultVO>;

    /**
     * 停车费用信息带白名单
     * ParkingOrderActor
     * @param parkingPayPayload
     * @returns {Promise<ApiAppParking.PayResultVO>}
     */
    ['order-wait-pay-parking-state'](
      //
      parkingPayPayload: ApiAppParking.ParkingPayPayload
    ): Promise<ApiAppParking.PayResultVO>;

    /**
     * 获取组织架构下拉数据
     * OrganizationActor
     * @returns {Promise<any[]>}
     */
    ['organization-all-select-view'](): Promise<any[]>;

    /**
     * 增加机构数据
     * OrganizationActor
     * @param data
     * @returns {Promise<ApiAppParking.Organization>}
     */
    ['organization-create'](
      //
      data: ApiAppParking.Organization
    ): Promise<ApiAppParking.Organization>;

    /**
     * 删除机构数据
     * OrganizationActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['organization-delete'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 根据部门父级节点获取目录树子节点部门及部门下用户的数据
     * OrganizationActor
     * @param pid
     * @returns {Promise<ApiAppParking.OrgStructureTree>}
     */
    ['organization-department-tree-list'](
      //
      pid: string
    ): Promise<ApiAppParking.OrgStructureTree>;

    /**
     * 获取单条 机构 数据
     * OrganizationActor
     * @param id
     * @returns {Promise<ApiAppParking.Organization>}
     */
    ['organization-get'](
      //
      id: string
    ): Promise<ApiAppParking.Organization>;

    /**
     * 获取所有 机构 数据
     * OrganizationActor
     * @returns {Promise<ApiAppParking.Organization[]>}
     */
    ['organization-getAll'](): Promise<ApiAppParking.Organization[]>;

    /**
     * 获取机构的表格总数信息
     * OrganizationActor
     * @param organization
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['organization-grid-count'](
      //
      organization: ApiAppParking.Organization
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取机构的表格列表数据
     * OrganizationActor
     * @param organization
     * @param orders
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['organization-grid-list'](
      //
      organization: ApiAppParking.Organization,
      //
      orders: any[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 机构 的表格分页数据
     * OrganizationActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['organization-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取机构下拉列表数据
     * OrganizationActor
     * @param orgid
     * @returns {Promise<any[]>}
     */
    ['organization-select-view'](
      //
      orgid: string
    ): Promise<any[]>;

    /**
     * 根据机构id获取组织架构目录树数据
     * OrganizationActor
     * @param oid
     * @returns {Promise<ApiAppParking.OrgStructureTree>}
     */
    ['organization-structure-tree'](
      //
      oid: string
    ): Promise<ApiAppParking.OrgStructureTree>;

    /**
     * 获取部门目录树数据
     * OrganizationActor
     * @param oid
     * @param did
     * @returns {Promise<any[]>}
     */
    ['organization-tree-department'](
      //
      oid: string,
      //
      did: string
    ): Promise<any[]>;

    /**
     * 获取部门及人员目录树数据
     * OrganizationActor
     * @param oid
     * @param did
     * @returns {Promise<any[]>}
     */
    ['organization-tree-department-and-people'](
      //
      oid: string,
      //
      did: string
    ): Promise<any[]>;

    /**
     * 获取机构的组织架构表格总数信息
     * OrganizationActor
     * @param tid
     * @param type
     * @param oid
     * @param did
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['organization-tree-grid-count'](
      //
      tid: string,
      //
      type: number,
      //
      oid: string,
      //
      did: string
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取机构的组织架构部门、用户表格列表数据
     * OrganizationActor
     * @param tid
     * @param orders
     * @param type
     * @param oid
     * @param did
     * @returns {Promise<any[][]>}
     */
    ['organization-tree-grid-list'](
      //
      tid: string,
      //
      orders: any[],
      //
      type: number,
      //
      oid: string,
      //
      did: string
    ): Promise<any[][]>;

    /**
     * 获取组织架构目录树数据
     * OrganizationActor
     * @param oid
     * @param did
     * @returns {Promise<any[]>}
     */
    ['organization-tree-list'](
      //
      oid: string,
      //
      did: string
    ): Promise<any[]>;

    /**
     * 获取父组织架构目录树数据
     * OrganizationActor
     * @param pid
     * @returns {Promise<any[]>}
     */
    ['organization-tree-list-pid'](
      //
      pid: string
    ): Promise<any[]>;

    /**
     * 更新机构数据
     * OrganizationActor
     * @param data
     * @returns {Promise<ApiAppParking.Organization>}
     */
    ['organization-update'](
      //
      data: ApiAppParking.Organization
    ): Promise<ApiAppParking.Organization>;

    /**
     * 动态停车场信息-实时余位概况：余位变化趋势 使用中间表统计
     * BizParkingLotActor
     * @param cityCode
     * @param region
     * @param parkingLotNature
     * @param parkingLotName
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-getResidualChangeTrend'](
      //
      cityCode: string,
      //
      region: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-车辆接入情况：车场性质接入分析
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-lot-nature-analysis-get'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时余位概况：车场性质余位分布
     * BizParkingLotActor
     * @param cityCode
     * @param region
     * @param parkingLotNature
     * @param parkingLotName
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-lot-nature-remaining-distribution-get'](
      //
      cityCode: string,
      //
      region: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时余位概况：车场占用率排名top10
     * BizParkingLotActor
     * @param cityCode
     * @param region
     * @param parkingLotNature
     * @param parkingLotName
     * @returns {Promise<ApiAppParking.ParkingLotOverview[]>}
     */
    ['parking-lot-occupancy-get'](
      //
      cityCode: string,
      //
      region: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string
    ): Promise<ApiAppParking.ParkingLotOverview[]>;

    /**
     * 动态停车场信息-车场在线情况：各区域车场在线情况
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-lot-online-information-count'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-车场在线情况：各区域信息统计列表
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-lot-online-information-count-list'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-车场在线情况：车场在线率
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-lot-online-rate-get'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-车场在线情况：车场在线周变化趋势
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-lot-online-week-get'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-车场在线情况：定时统计任务：每周一次(ctime  范围7天 7周)
     * BizParkingLotActor
     * @param cityCode
     * @param weekStart
     * @param weekEnd
     * @returns {Promise<ApiAppParking.ParkingLotOverview[]>}
     */
    ['parking-lot-online-week-job-get'](
      //
      cityCode: string,
      //
      weekStart: string,
      //
      weekEnd: string
    ): Promise<ApiAppParking.ParkingLotOverview[]>;

    /**
     * 动态停车场信息-实时余位概况：余位各指标分析
     * BizParkingLotActor
     * @param cityCode
     * @param region
     * @param parkingLotNature
     * @param parkingLotName
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-lot-residual-index-analysis-get'](
      //
      cityCode: string,
      //
      region: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时余位概况：余位变化趋势
     * BizParkingLotActor
     * @param cityCode
     * @param region
     * @param parkingLotNature
     * @param parkingLotName
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-residual-change-trend-get'](
      //
      cityCode: string,
      //
      region: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-车场接入情况：各区域接入情况 -车位数柱状图
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-space-total-access-district-get'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时进出场概况：车位使用率 7天
     * BizParkingLotActor
     * @param parkingLot
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-space-utilization-rate-get'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-车场接入情况：各区域接入情况 -车场数柱状图
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-total-access-district-get'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-车场接入情况：接入总量
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-total-access-get'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-车场接入情况：各厂商接入情况
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-total-access-manufacturer-get'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时进出场概况：车流量:总车流量，进车流量，出车流量
     * BizParkingLotActor
     * @param cityCode
     * @param districtCode
     * @param parkingLotNature
     * @param parkingLotName
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-totalTrafficFlow'](
      //
      cityCode: string,
      //
      districtCode: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时进出场概况：高利用率停车场top10
     * BizParkingLotActor
     * @param cityCode
     * @param region
     * @param parkingLotNature
     * @param parkingLotName
     * @param type
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-utilization-get'](
      //
      cityCode: string,
      //
      region: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string,
      //
      type: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时进出场概况：车辆停留时长分布
     * BizParkingLotActor
     * @param cityCode
     * @param region
     * @param parkingLotNature
     * @param parkingLotName
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parking-vehicleDwellTimeDistribution'](
      //
      cityCode: string,
      //
      region: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 增加 ParkingBlackList 数据
     * ParkingBlackListActor
     * @param parkingBlackList
     * @returns {Promise<ApiAppParking.ParkingBlackList>}
     */
    ['parkingBlackList-create'](
      //
      parkingBlackList: ApiAppParking.ParkingBlackList
    ): Promise<ApiAppParking.ParkingBlackList>;

    /**
     * 删除 ParkingBlackList 数据
     * ParkingBlackListActor
     * @param id
     * @returns {Promise<number>}
     */
    ['parkingBlackList-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 ParkingBlackList 数据
     * ParkingBlackListActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['parkingBlackList-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 ParkingBlackList 数据
     * ParkingBlackListActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingBlackList>}
     */
    ['parkingBlackList-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingBlackList>;

    /**
     * 根据车牌，车场查询，是否黑名单
     * ParkingBlackListActor
     * @param parkingId
     * @param carPlate
     * @returns {Promise<ApiAppParking.ParkingBlackList>}
     */
    ['parkingBlackList-get-by-id'](
      //
      parkingId: string,
      //
      carPlate: string
    ): Promise<ApiAppParking.ParkingBlackList>;

    /**
     * 获取所有 ParkingBlackList 数据
     * ParkingBlackListActor
     * @returns {Promise<ApiAppParking.ParkingBlackList[]>}
     */
    ['parkingBlackList-getAll'](): Promise<ApiAppParking.ParkingBlackList[]>;

    /**
     * 获取 ParkingBlackList 的表格总数信息
     * ParkingBlackListActor
     * @param tid
     * @param parkingBlackList
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingBlackList-grid-count'](
      //
      tid: string,
      //
      parkingBlackList: ApiAppParking.ParkingBlackList,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ParkingBlackList 的表格列表数据
     * ParkingBlackListActor
     * @param tid
     * @param parkingBlackList
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingBlackList-grid-list'](
      //
      tid: string,
      //
      parkingBlackList: ApiAppParking.ParkingBlackList,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 ParkingBlackList 的表格分页数据
     * ParkingBlackListActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingBlackList-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 ParkingBlackList 的表格分页表头与总记录数
     * ParkingBlackListActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingBlackList-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新 ParkingBlackList 数据
     * ParkingBlackListActor
     * @param parkingBlackList
     * @returns {Promise<number>}
     */
    ['parkingBlackList-update'](
      //
      parkingBlackList: ApiAppParking.ParkingBlackList
    ): Promise<number>;

    /**
     * 增加 parkingChargesCalculationRecord 数据
     * ParkingChargesCalculationRecordActor
     * @param parkingChargesCalculationRecord
     * @returns {Promise<ApiAppParking.ParkingChargesCalculationRecord>}
     */
    ['parkingChargesCalculationRecord-create'](
      //
      parkingChargesCalculationRecord: ApiAppParking.ParkingChargesCalculationRecord
    ): Promise<ApiAppParking.ParkingChargesCalculationRecord>;

    /**
     * 删除 parkingChargesCalculationRecord 数据
     * ParkingChargesCalculationRecordActor
     * @param id
     * @returns {Promise<number>}
     */
    ['parkingChargesCalculationRecord-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 parkingChargesCalculationRecord 数据
     * ParkingChargesCalculationRecordActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['parkingChargesCalculationRecord-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 parkingChargesCalculationRecord 数据
     * ParkingChargesCalculationRecordActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingChargesCalculationRecord>}
     */
    ['parkingChargesCalculationRecord-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingChargesCalculationRecord>;

    /**
     * 获取单条 parkingChargesCalculationRecord 数据
     * ParkingChargesCalculationRecordActor
     * @param uniqueNo
     * @param serialNumber
     * @returns {Promise<ApiAppParking.CalculationRecordVO>}
     */
    ['parkingChargesCalculationRecord-get-by-uniqueNo'](
      //
      uniqueNo: string,
      //
      serialNumber: string
    ): Promise<ApiAppParking.CalculationRecordVO>;

    /**
     * 获取所有 parkingChargesCalculationRecord 数据
     * ParkingChargesCalculationRecordActor
     * @returns {Promise<ApiAppParking.ParkingChargesCalculationRecord[]>}
     */
    ['parkingChargesCalculationRecord-getAll'](): Promise<
      ApiAppParking.ParkingChargesCalculationRecord[]
    >;

    /**
     * 获取 parkingChargesCalculationRecord 的表格总数信息
     * ParkingChargesCalculationRecordActor
     * @param tid
     * @param parkingChargesCalculationRecord
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingChargesCalculationRecord-grid-count'](
      //
      tid: string,
      //
      parkingChargesCalculationRecord: ApiAppParking.ParkingChargesCalculationRecord,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 parkingChargesCalculationRecord 的表格列表数据
     * ParkingChargesCalculationRecordActor
     * @param tid
     * @param parkingChargesCalculationRecord
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingChargesCalculationRecord-grid-list'](
      //
      tid: string,
      //
      parkingChargesCalculationRecord: ApiAppParking.ParkingChargesCalculationRecord,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 parkingChargesCalculationRecord 的表格分页数据
     * ParkingChargesCalculationRecordActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingChargesCalculationRecord-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 parkingChargesCalculationRecord 数据
     * ParkingChargesCalculationRecordActor
     * @param parkingChargesCalculationRecord
     * @returns {Promise<number>}
     */
    ['parkingChargesCalculationRecord-update'](
      //
      parkingChargesCalculationRecord: ApiAppParking.ParkingChargesCalculationRecord
    ): Promise<number>;

    /**
     * 获取 parkingChargesCalculationRecord 的表格分页数据
     * ParkingChargesCalculationRecordActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingChargesCalculationRecordVO-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 计费规则
     * BizParkingLotActor
     * @param parkingId
     * @returns {Promise<ApiAppParking.ChargingRulesVO[]>}
     */
    ['parkingLot-QueryParkingLotChargesRule'](
      //
      parkingId: string
    ): Promise<ApiAppParking.ChargingRulesVO[]>;

    /**
     * 根据流水号获取人工处理信息
     * BizParkingLotActor
     * @param serialNumber
     * @param parkingId
     * @returns {Promise<ApiAppParking.RecognitionRecordsReplenishVO>}
     */
    ['parkingLot-RecognitionRecordsReplenishVO'](
      //
      serialNumber: string,
      //
      parkingId: string
    ): Promise<ApiAppParking.RecognitionRecordsReplenishVO>;

    /**
     * 人工处理
     * BizParkingLotActor
     * @param recognitionRecordsVO
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-RecognitionRecordsVO'](
      //
      recognitionRecordsVO: ApiAppParking.RecognitionRecordsVO
    ): Promise<{ [key: string]: any }>;

    /**
     * 增加 ParkingLot 数据
     * ParkingLotActor
     * @param parkingLot
     * @returns {Promise<ApiAppParking.ParkingLot>}
     */
    ['parkingLot-create'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<ApiAppParking.ParkingLot>;

    /**
     * 删除 ParkingLot 数据
     * ParkingLotActor
     * @param id
     * @returns {Promise<number>}
     */
    ['parkingLot-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 ParkingLot 数据
     * ParkingLotActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['parkingLot-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 动态停车场信息-车场监控：进场出场统计
     * BizParkingSpaceActor
     * @param cityCode
     * @param districtCode
     * @param parkingLotNature
     * @param parkingLotName
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-entry-exit-statistics'](
      //
      cityCode: string,
      //
      districtCode: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-获取昨日总车流量，今日总车流量
     * BizParkingSpaceActor
     * @param cityCode
     * @param districtCode
     * @param type
     * @param nature
     * @param name
     * @returns {Promise<ApiAppParking.ParkingLotFluxVO>}
     */
    ['parkingLot-flux-get'](
      //
      cityCode: string,
      //
      districtCode: string,
      //
      type: string,
      //
      nature: string,
      //
      name: string
    ): Promise<ApiAppParking.ParkingLotFluxVO>;

    /**
     * 数据研判分析-实时进出-车流量排行TOP10
     * BizParkingSpaceActor
     * @param cityCode
     * @param districtCode
     * @param type
     * @param nature
     * @param name
     * @returns {Promise<ApiAppParking.GetParkingRecordData[]>}
     */
    ['parkingLot-flux-top-query'](
      //
      cityCode: string,
      //
      districtCode: string,
      //
      type: string,
      //
      nature: string,
      //
      name: string
    ): Promise<ApiAppParking.GetParkingRecordData[]>;

    /**
     * 数据研判分析-车场监控：车场总数-泊位总数-余位总数-总车流量
     * BizParkingSpaceActor
     * @param cityCode
     * @param districtCode
     * @param parkingLotNature
     * @param parkingLotName
     * @returns {Promise<ApiAppParking.ParkingLotGeneralInfoRes>}
     */
    ['parkingLot-general-info-num'](
      //
      cityCode: string,
      //
      districtCode: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string
    ): Promise<ApiAppParking.ParkingLotGeneralInfoRes>;

    /**
     * 获取单条 ParkingLot 数据
     * ParkingLotActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingLot>}
     */
    ['parkingLot-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingLot>;

    /**
     * 在地图上获取所有 ParkingLot 数据
     * ParkingLotActor
     * @param parkingLotForMapVO
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLot-get-all-for-map'](
      //
      parkingLotForMapVO: ApiAppParking.ParkingLotForMapVO
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取所有停车场性质
     * ParkingLotActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingLot-get-all-nature'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 获取所有停车场类型
     * ParkingLotActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingLot-get-all-type'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 获取所有 ParkingLot 数据
     * ParkingLotActor
     * @returns {Promise<ApiAppParking.ParkingLot[]>}
     */
    ['parkingLot-getAll'](): Promise<ApiAppParking.ParkingLot[]>;

    /**
     * 实时-区域总览:收费金额 城市 日 收费金额
     * BizDynamicParkingInformationStatisticsActor
     * @param cityCode
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-getChargeAmount'](
      //
      cityCode: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 实时-区域总览:收费金额-城市 月-开始日期当年-总 收费金额
     * BizDynamicParkingInformationStatisticsActor
     * @param cityCode
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-getChargeAmountMonth'](
      //
      cityCode: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 获取车辆出入信息推动
     * BizParkingLotActor
     * @returns {Promise<ApiAppParking.RecognitionRecordsVO>}
     */
    ['parkingLot-getIntendedCarPlate'](): Promise<ApiAppParking.RecognitionRecordsVO>;

    /**
     * 动态停车场信息-上线情况：各厂商情况->各厂商上线车场数 TOP5
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<ApiAppParking.ParkingLotOverview[]>}
     */
    ['parkingLot-getManufacturerParkingLotIsOnlineTotal'](
      //
      cityCode: string
    ): Promise<ApiAppParking.ParkingLotOverview[]>;

    /**
     * 动态停车场信息-上线情况：各厂商情况->本周新增上线数 TOP5
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<ApiAppParking.ParkingLotOverview[]>}
     */
    ['parkingLot-getManufacturerParkingLotIsOnlineTotalWeek'](
      //
      cityCode: string
    ): Promise<ApiAppParking.ParkingLotOverview[]>;

    /**
     * 动态停车场信息-上线情况：各厂商情况->各厂商接入车场数 TOP5
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<ApiAppParking.ParkingLotOverview[]>}
     */
    ['parkingLot-getManufacturerParkingLotTotal'](
      //
      cityCode: string
    ): Promise<ApiAppParking.ParkingLotOverview[]>;

    /**
     * 动态停车场信息-上线情况：各厂商情况->本周新增车场数 TOP5
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<ApiAppParking.ParkingLotOverview[]>}
     */
    ['parkingLot-getManufacturerParkingLotTotalWeek'](
      //
      cityCode: string
    ): Promise<ApiAppParking.ParkingLotOverview[]>;

    /**
     * 动态停车场信息-上线情况：各厂商情况->本周新增数
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<ApiAppParking.ParkingLotOverview>}
     */
    ['parkingLot-getNewAddManufacturerWeek'](
      //
      cityCode: string
    ): Promise<ApiAppParking.ParkingLotOverview>;

    /**
     * 动态停车场信息-各区域概况：各区域概况 ；各个区域，车场总数，泊位总数，余位总数
     * BizParkingLotActor
     * @param cityCode
     * @param distinctCode
     * @param start
     * @param end
     * @param importDistinct
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-getParkingLotTotalParkingSpaceTotalGroupDistrict'](
      //
      cityCode: string,
      //
      distinctCode: string,
      //
      start: string,
      //
      end: string,
      //
      importDistinct: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 模糊查询获取到车牌
     * BizParkingLotActor
     * @param fuzzyText
     * @param parkingId
     * @returns {Promise<ApiAppParking.ParkingRecordFuzzyVO[]>}
     */
    ['parkingLot-getParkingRecordFuzzyVO'](
      //
      fuzzyText: string,
      //
      parkingId: string
    ): Promise<ApiAppParking.ParkingRecordFuzzyVO[]>;

    /**
     * 岗亭日期筛选
     * BizParkingLotActor
     * @param parkingLotId
     * @param maxTime
     * @param minTime
     * @returns {Promise<ApiAppParking.ParkingOrderMonitoringVO>}
     */
    ['parkingLot-getTimeTo'](
      //
      parkingLotId: string,
      //
      maxTime: string,
      //
      minTime: string
    ): Promise<ApiAppParking.ParkingOrderMonitoringVO>;

    /**
     * 增加 ParkingLot 数据
     * ParkingLotActor
     * @param parkingLotId
     * @returns {Promise<string>}
     */
    ['parkingLot-go'](
      //
      parkingLotId: string
    ): Promise<string>;

    /**
     * 获取 ParkingLot 的表格总数信息
     * ParkingLotActor
     * @param tid
     * @param parkingLot
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingLot-grid-count'](
      //
      tid: string,
      //
      parkingLot: ApiAppParking.ParkingLot,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ParkingLot 的表格列表数据
     * ParkingLotActor
     * @param tid
     * @param parkingLot
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingLot-grid-list'](
      //
      tid: string,
      //
      parkingLot: ApiAppParking.ParkingLot,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 数据研判分析-实时进出-近10分钟车流量排行TOP10
     * BizParkingSpaceActor
     * @param cityCode
     * @param districtCode
     * @param type
     * @param nature
     * @param name
     * @returns {Promise<ApiAppParking.GetParkingRecordData[]>}
     */
    ['parkingLot-hotspot-get'](
      //
      cityCode: string,
      //
      districtCode: string,
      //
      type: string,
      //
      nature: string,
      //
      name: string
    ): Promise<ApiAppParking.GetParkingRecordData[]>;

    /**
     * 获取停车场相关信息数据
     * BizParkingLotActor
     * @param parkingLotId
     * @returns {Promise<ApiAppParking.ParkingLotInfoDataRes>}
     */
    ['parkingLot-info-data-get'](
      //
      parkingLotId: string
    ): Promise<ApiAppParking.ParkingLotInfoDataRes>;

    /**
     * 获取停车场相关信息数据-时长分布
     * BizParkingLotActor
     * @param parkingLotId
     * @returns {Promise<ApiAppParking.ParkingTimeAnalysisRes[]>}
     */
    ['parkingLot-info-data-get-parkingTime'](
      //
      parkingLotId: string
    ): Promise<ApiAppParking.ParkingTimeAnalysisRes[]>;

    /**
     * 判断点是否在区域内
     * ParkingLotActor
     * @param polygon
     * @param longitude
     * @param latitude
     * @returns {Promise<boolean>}
     */
    ['parkingLot-isInPolygon'](
      //
      polygon: string,
      //
      longitude: number,
      //
      latitude: number
    ): Promise<boolean>;

    /**
     * 数据研判分析-低利用率停车场分布：路内低利用率分析
     * BizParkingSpaceActor
     * @param cityCode
     * @param parkingLotName
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-low-utilization-rate'](
      //
      cityCode: string,
      //
      parkingLotName: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-低利用率车厂分布：各区域路内利用率车场分析
     * BizParkingSpaceActor
     * @param cityCode
     * @param parkingLotName
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-low-utilization-rate-distinct'](
      //
      cityCode: string,
      //
      parkingLotName: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 移动 ParkingLot 数据
     * BizParkingLotAreaActor
     * @param parkingLotId
     * @param lng
     * @param lat
     * @returns {Promise<ApiAppParking.ParkingLot>}
     */
    ['parkingLot-move'](
      //
      parkingLotId: string,
      //
      lng: number,
      //
      lat: number
    ): Promise<ApiAppParking.ParkingLot>;

    /**
     * 数据研判分析-上线情况分析：各车场性质
     * BizParkingSpaceActor
     * @param parkingLot
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-natureTotalAndOnline'](
      //
      parkingLot: ApiAppParking.ParkingLot,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-停车分布分析-外地车停车分布-概况：车场总数，停车总数，本地车外地车数
     * BizParkingSpaceActor
     * @param cityCode
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-nonLocalParkingDistribution'](
      //
      cityCode: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-停车分布分析-外地车停车分布-各区域本地外地车分布情况
     * BizParkingSpaceActor
     * @param cityCode
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-nonLocalParkingDistributionGroupDistrictCode'](
      //
      cityCode: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-停车分布分析：各区域占用率情况
     * BizParkingSpaceActor
     * @param cityCode
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-occupancyRateByDistrict'](
      //
      cityCode: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-停车分布分析：车场占用率分布
     * BizParkingSpaceActor
     * @param cityCode
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-occupancyRateByHours'](
      //
      cityCode: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-上线情况分析：上线概况
     * BizParkingSpaceActor
     * @param parkingLot
     * @param start
     * @param end
     * @returns {Promise<ApiAppParking.ParkingLotRegisterNumAndOnlineNumVO[]>}
     */
    ['parkingLot-onlineOverview'](
      //
      parkingLot: ApiAppParking.ParkingLot,
      //
      start: string,
      //
      end: string
    ): Promise<ApiAppParking.ParkingLotRegisterNumAndOnlineNumVO[]>;

    /**
     * 数据研判分析-上线情况分析：各区域上线情况
     * BizParkingSpaceActor
     * @param parkingLot
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-onlineOverviewByDistrict'](
      //
      parkingLot: ApiAppParking.ParkingLot,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-上线情况分析：区域上线率排名
     * BizParkingSpaceActor
     * @param parkingLot
     * @param start
     * @param end
     * @returns {Promise<ApiAppParking.ParkingLotRegisterNumAndOnlineNumVO[]>}
     */
    ['parkingLot-onlineRateSort'](
      //
      parkingLot: ApiAppParking.ParkingLot,
      //
      start: string,
      //
      end: string
    ): Promise<ApiAppParking.ParkingLotRegisterNumAndOnlineNumVO[]>;

    /**
     * 获取 ParkingLot 的表格分页数据
     * ParkingLotActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLot-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 ParkingLot 的表格分页表头与总记录数
     * ParkingLotActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingLot-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 数据研判分析-车场监控：停车时长分析
     * BizParkingSpaceActor
     * @param cityCode
     * @param districtCode
     * @param parkingLotNature
     * @param parkingLotName
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parking-time-analysis'](
      //
      cityCode: string,
      //
      districtCode: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-车场监控：停车时长分析-时间条件
     * BizParkingSpaceActor
     * @param cityCode
     * @param districtCode
     * @param parkingLotNature
     * @param parkingLotName
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parking-time-analysis-date'](
      //
      cityCode: string,
      //
      districtCode: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-停车分布分析：车位占用率热力图数据;数据研判分析-余位分析：车位占用率排行
     * BizParkingSpaceActor
     * @param parkingLot
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parkingAnalysis-OccupancyRate'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-停车分布分析：停车分布热力图,type:不传：全部，1 夜间，2外地车
     * BizParkingSpaceActor
     * @param parkingLotForMapVO
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parkingAnalysis-allOccupancyRateByCode'](
      //
      parkingLotForMapVO: ApiAppParking.ParkingLotForSearchVO
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-停车分布分析：车位占用率热力图数据;数据研判分析-余位分析：车位占用率排行
     * BizParkingSpaceActor
     * @param parkingLotForMapVO
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parkingAnalysis-occupancyRateByCode'](
      //
      parkingLotForMapVO: ApiAppParking.ParkingLotForSearchVO
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-车场监控：地图缩放聚合
     * BizParkingSpaceActor
     * @param parkingLotForMapVO
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parkingAnalysis-occupancyRateByCodeAggregation'](
      //
      parkingLotForMapVO: ApiAppParking.ParkingLotForSearchVO
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-停车分布分析：车场概况
     * BizParkingSpaceActor
     * @param parkingLot
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parkingAnalysisGroupCity'](
      //
      parkingLot: ApiAppParking.ParkingLot,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时余位概况:车场占用率分布,单个停车场
     * BizParkingLotActor
     * @param parkingLotId
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parkingLotOccupancyRateByParkingLotId'](
      //
      parkingLotId: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-停车场数据监控：车场概况
     * BizDynamicParkingInformationStatisticsActor
     * @param parkingLotOverview
     * @param i
     * @returns {Promise<ApiAppParking.ParkingLotOverview[]>}
     */
    ['parkingLot-parkingLotOverview'](
      //
      parkingLotOverview: ApiAppParking.ParkingLotOverview,
      //
      i: number
    ): Promise<ApiAppParking.ParkingLotOverview[]>;

    /**
     * 动态停车场信息-停车场数据监控：城市的行政区概况
     * BizDynamicParkingInformationStatisticsActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}[]>}
     */
    ['parkingLot-parkingLotOverview-cityCode'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }[]>;

    /**
     * 动态停车场信息-停车场数据监控：行政区概况
     * BizDynamicParkingInformationStatisticsActor
     * @param distinctCode
     * @returns {Promise<{[key:string]:any}[]>}
     */
    ['parkingLot-parkingLotOverview-distinct'](
      //
      distinctCode: string
    ): Promise<{ [key: string]: any }[]>;

    /**
     * 动态停车场信息-停车场数据监控：车场概况:车场注册总数(日，周，月),上线总数(日，周，月)，在线总数，路内总数，路外总数，上线率，在线率
     * BizDynamicParkingInformationStatisticsActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}[]>}
     */
    ['parkingLot-parkingLotOverviewByCityCode'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }[]>;

    /**
     * 动态停车场信息-停车场数据监控：车场概况-车场总数-泊位总数-余位总数
     * BizDynamicParkingInformationStatisticsActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parkingLotOverviewGroupCity'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-停车场数据监控：车场概况-车场总数-泊位总数-余位总数-占用率
     * BizDynamicParkingInformationStatisticsActor
     * @param cityCode
     * @param distinctCode
     * @returns {Promise<{[key:string]:any}[]>}
     */
    ['parkingLot-parkingLotOverviewOneCity'](
      //
      cityCode: string,
      //
      distinctCode: string
    ): Promise<{ [key: string]: any }[]>;

    /**
     * 动态停车场信息-实时余位概况:余位变化趋势,单个停车场
     * BizParkingLotActor
     * @param parkingLotId
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parkingSpaceRemainCountByParkingLotId'](
      //
      parkingLotId: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时余位概况:泊位概况
     * BizParkingLotActor
     * @param parkingLotId
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parkingSpaceTotalByParkingLotId'](
      //
      parkingLotId: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时余位概况:车流量变化趋势;单个停车场
     * BizParkingLotActor
     * @param parkingLotId
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parkingSpaceTrafficFlowByParkingLotId'](
      //
      parkingLotId: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时余位概况:车位实时周转率;单个停车场
     * BizParkingLotActor
     * @param parkingLotId
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parkingSpaceTurnoverRateByParkingLotId'](
      //
      parkingLotId: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时余位概况:车位使用率统计，7天每天使用率
     * BizParkingLotActor
     * @param parkingLotId
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parkingSpaceUsedRateByParkingLotId'](
      //
      parkingLotId: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 初始化每天每个车场时长分布
     * BizParkingLotActor
     * @returns {Promise<boolean>}
     */
    ['parkingLot-parkingTimeGroupDayStatisticsInit'](): Promise<boolean>;

    /**
     * type:''数据研判分析-车流量分析：总停车时长分析,1路内/2路外 数据研判分析-车流量分析：路内/路外停车时长分析
     * BizParkingSpaceActor
     * @param cityCode
     * @param start
     * @param end
     * @param type
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-parkingTimeGroupType'](
      //
      cityCode: string,
      //
      start: string,
      //
      end: string,
      //
      type: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 初始化每小时每个车场车流量
     * BizParkingLotActor
     * @returns {Promise<boolean>}
     */
    ['parkingLot-parkingtrafficFlowGroupHoursStatisticsInit'](): Promise<boolean>;

    /**
     * 根据通道id 获取到上一次的推送记录
     * BizParkingLotActor
     * @param passageWayId
     * @returns {Promise<ApiAppParking.RecognitionRecordsVO>}
     */
    ['parkingLot-passageWayId'](
      //
      passageWayId: string
    ): Promise<ApiAppParking.RecognitionRecordsVO>;

    /**
     * 获取车位数量推动
     * BizParkingLotActor
     * @param parkingId
     * @returns {Promise<ApiAppParking.ParkingSpaceCountVO>}
     */
    ['parkingLot-query-parking'](
      //
      parkingId: string
    ): Promise<ApiAppParking.ParkingSpaceCountVO>;

    /**
     * 区域绘制-实时数据分析
     * BizDynamicParkingInformationStatisticsActor
     * @param renderingId
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-realtimeAreaDrawStatistics'](
      //
      renderingId: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-停车场数据监控：车位实时周转率
     * BizDynamicParkingInformationStatisticsActor
     * @param cityCode
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-realtimeTurnoverRate'](
      //
      cityCode: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-停车场数据监控：区域车场上线率: 上线数，注册数
     * BizParkingLotActor
     * @param parkingLot
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-registerNum-onlineNum'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-停车场数据监控：车场饱和度分析
     * BizDynamicParkingInformationStatisticsActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-saturationDistribution'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 获取 parkingLot 具体数据
     * ParkingLotActor
     * @param parkingLotPageSearch
     * @returns {Promise<ApiAppParking.ParkingLotPageVo>}
     */
    ['parkingLot-search-page'](
      //
      parkingLotPageSearch: ApiAppParking.ParkingLotPageSearch
    ): Promise<ApiAppParking.ParkingLotPageVo>;

    /**
     * 获取 parkingLot 总记录数
     * ParkingLotActor
     * @param parkingLotPageSearch
     * @returns {Promise<ApiAppParking.ParkingLotPageVo>}
     */
    ['parkingLot-search-page-count'](
      //
      parkingLotPageSearch: ApiAppParking.ParkingLotPageSearch
    ): Promise<ApiAppParking.ParkingLotPageVo>;

    /**
     * 数据研判分析-停车分布分析-夜间停车热点分布：各时间段停车分布
     * BizParkingSpaceActor
     * @param cityCode
     * @param date
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-stopCarimesByCityCodeHours'](
      //
      cityCode: string,
      //
      date: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-停车分布分析-夜间停车热点分布-概况：停车总数 夜间停车数 占比
     * BizParkingSpaceActor
     * @param cityCode
     * @param date
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-todayStopCarTimesByCityCode'](
      //
      cityCode: string,
      //
      date: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-停车分布分析-夜间停车热点分布-各区域夜间停车占比
     * BizParkingSpaceActor
     * @param cityCode
     * @param date
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-todayStopCarTimesByDistrictCode'](
      //
      cityCode: string,
      //
      date: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-上线情况：各厂商情况->总接入量
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<ApiAppParking.ParkingLotOverview>}
     */
    ['parkingLot-totalAccessNum'](
      //
      cityCode: string
    ): Promise<ApiAppParking.ParkingLotOverview>;

    /**
     * 数据研判分析-上线情况分析：各厂商上线情况
     * BizParkingSpaceActor
     * @param parkingLot
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-totalAndOnlineGroupOperator'](
      //
      parkingLot: ApiAppParking.ParkingLot,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-上线情况：各区域详情->本周新增上线数 top5
     * BizParkingLotActor
     * @param parkingLot
     * @returns {Promise<ApiAppParking.ParkingLotTotalVO[]>}
     */
    ['parkingLot-totalNewAddParkingLot-online-week'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<ApiAppParking.ParkingLotTotalVO[]>;

    /**
     * 动态停车场信息-上线情况：各区域详情->本周新增车场数 top5
     * BizParkingLotActor
     * @param parkingLotOverview
     * @returns {Promise<ApiAppParking.ParkingLotTotalVO[]>}
     */
    ['parkingLot-totalNewAddParkingLot-week'](
      //
      parkingLotOverview: ApiAppParking.ParkingLot
    ): Promise<ApiAppParking.ParkingLotTotalVO[]>;

    /**
     * 动态停车场信息-上线情况：各区域详情->各区域上线车场数 top5
     * BizParkingLotActor
     * @param parkingLotOverview
     * @returns {Promise<ApiAppParking.ParkingLotTotalVO[]>}
     */
    ['parkingLot-totalParkingLot-online'](
      //
      parkingLotOverview: ApiAppParking.ParkingLot
    ): Promise<ApiAppParking.ParkingLotTotalVO[]>;

    /**
     * 动态停车场信息-上线情况：各区域详情->各区域接入车场数 TOP5
     * BizParkingLotActor
     * @param parkingLotOverview
     * @returns {Promise<ApiAppParking.ParkingLotTotalVO[]>}
     */
    ['parkingLot-totalParkingLot-region'](
      //
      parkingLotOverview: ApiAppParking.ParkingLot
    ): Promise<ApiAppParking.ParkingLotTotalVO[]>;

    /**
     * 数据研判分析-车场监控：车流量分析
     * BizParkingSpaceActor
     * @param cityCode
     * @param districtCode
     * @param parkingLotNature
     * @param parkingLotName
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-traffic-flow-analysis'](
      //
      cityCode: string,
      //
      districtCode: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-车流量分析：本地车/外地车流量分析
     * BizParkingSpaceActor
     * @param cityCode
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-trafficFlowGroupCarLicense'](
      //
      cityCode: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-车流量分析：各区域车流量分析
     * BizParkingSpaceActor
     * @param cityCode
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-trafficFlowGroupDistinct'](
      //
      cityCode: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-车流量分析：各厂商车流量分析
     * BizParkingSpaceActor
     * @param cityCode
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-trafficFlowGroupOperatorName'](
      //
      cityCode: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-车流量分析：路内/路外车流量分析
     * BizParkingSpaceActor
     * @param cityCode
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-trafficFlowGroupType'](
      //
      cityCode: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-车流量分析：车流量概况
     * BizParkingSpaceActor
     * @param cityCode
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-trafficFlowOverview'](
      //
      cityCode: string,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-停车分布分析：车场类型占用率分析
     * BizParkingSpaceActor
     * @param parkingLot
     * @param start
     * @param end
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-typeUtilizationRate'](
      //
      parkingLot: ApiAppParking.ParkingLot,
      //
      start: string,
      //
      end: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 更新 ParkingLot 数据
     * ParkingLotActor
     * @param parkingLot
     * @returns {Promise<ApiAppParking.ParkingLot>}
     */
    ['parkingLot-update'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<ApiAppParking.ParkingLot>;

    /**
     * 数据研判分析-低利用率车厂分布：低利用率车场占比
     * BizParkingSpaceActor
     * @param provinceCode
     * @param cityCode
     * @param districtCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingLot-utilization-rate-proportion'](
      //
      provinceCode: string,
      //
      cityCode: string,
      //
      districtCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-低利用率车厂分布：低利用率车场排行
     * BizParkingSpaceActor
     * @param provinceCode
     * @param cityCode
     * @param distinctCode
     * @param type
     * @param resultCount
     * @returns {Promise<ApiAppParking.ParkingLowUsedRateRankRes[]>}
     */
    ['parkingLot-utilization-rate-rank'](
      //
      provinceCode: string,
      //
      cityCode: string,
      //
      distinctCode: string,
      //
      type: string,
      //
      resultCount: number
    ): Promise<ApiAppParking.ParkingLowUsedRateRankRes[]>;

    /**
     * 初始化每小时每条路线车流量
     * BizParkingLotActor
     * @returns {Promise<boolean>}
     */
    ['parkingLot-vehicleRouteHours'](): Promise<boolean>;

    /**
     * 增加 ParkingLotChargesRule 数据
     * ParkingLotChargesRuleActor
     * @param parkingLotChargesRuleVO
     * @returns {Promise<ApiAppParking.ParkingLotChargesRuleVO>}
     */
    ['parkingLotChargesRule-add'](
      //
      parkingLotChargesRuleVO: ApiAppParking.ParkingLotChargesRuleVO
    ): Promise<ApiAppParking.ParkingLotChargesRuleVO>;

    /**
     * 增加 ParkingLotChargesRule 数据
     * ParkingLotChargesRuleActor
     * @param parkingLotChargesRule
     * @returns {Promise<ApiAppParking.ParkingLotChargesRule>}
     */
    ['parkingLotChargesRule-create'](
      //
      parkingLotChargesRule: ApiAppParking.ParkingLotChargesRule
    ): Promise<ApiAppParking.ParkingLotChargesRule>;

    /**
     * 删除 ParkingLotChargesRule 数据
     * ParkingLotChargesRuleActor
     * @param strategyId
     * @param ruleId
     * @param chargingType
     * @returns {Promise<number>}
     */
    ['parkingLotChargesRule-delete'](
      //
      strategyId: string,
      //
      ruleId: string,
      //
      chargingType: string
    ): Promise<number>;

    /**
     * 批量删除 ParkingLotChargesRule 数据
     * ParkingLotChargesRuleActor
     * @param deleteVO
     * @returns {Promise<number>}
     */
    ['parkingLotChargesRule-deleteBatch'](
      //
      deleteVO: ApiAppParking.DeleteVO
    ): Promise<number>;

    /**
     * 查询免费时长和超时时间
     * ParkingLotChargesRuleActor
     * @param parkingLotId
     * @returns {Promise<ApiAppParking.TimeVO>}
     */
    ['parkingLotChargesRule-find-outTime-and-feelTime'](
      //
      parkingLotId: string
    ): Promise<ApiAppParking.TimeVO>;

    /**
     * 获取单条 ParkingLotChargesRule 数据
     * ParkingLotChargesRuleActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingLotChargesRuleVO>}
     */
    ['parkingLotChargesRule-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingLotChargesRuleVO>;

    /**
     * 车场收费，车型枚举
     * ParkingLotChargesRuleActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingLotChargesRule-get-all-car-type'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 车场收费，车牌型枚举
     * ParkingLotChargesRuleActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingLotChargesRule-get-all-carNum-type'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 车场收费方式，所有收费类型
     * ParkingLotChargesRuleActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingLotChargesRule-get-all-charges-rule'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 获取所有 ParkingLotChargesRule 数据
     * ParkingLotChargesRuleActor
     * @returns {Promise<ApiAppParking.ParkingLotChargesRule[]>}
     */
    ['parkingLotChargesRule-getAll'](): Promise<
      ApiAppParking.ParkingLotChargesRule[]
    >;

    /**
     * 获取 ParkingLotChargesRule 的表格总数信息
     * ParkingLotChargesRuleActor
     * @param tid
     * @param parkingLotChargesRule
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingLotChargesRule-grid-count'](
      //
      tid: string,
      //
      parkingLotChargesRule: ApiAppParking.ParkingLotChargesRule,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ParkingLotChargesRule 的表格列表数据
     * ParkingLotChargesRuleActor
     * @param tid
     * @param parkingLotChargesRule
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingLotChargesRule-grid-list'](
      //
      tid: string,
      //
      parkingLotChargesRule: ApiAppParking.ParkingLotChargesRule,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 ParkingLotChargesRule 的表格分页数据
     * ParkingLotChargesRuleActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLotChargesRule-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 rule 的表格分页表头与总记录数
     * ParkingLotChargesRuleActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingLotChargesRule-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ParkingLotChargesRule 的表格分页数据
     * ParkingLotChargesRuleActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLotChargesRule-page-vo'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 ParkingLotChargesRule 数据
     * ParkingLotChargesRuleActor
     * @param parkingLotChargesRuleVO
     * @returns {Promise<number>}
     */
    ['parkingLotChargesRule-update'](
      //
      parkingLotChargesRuleVO: ApiAppParking.ParkingLotChargesRuleVO
    ): Promise<number>;

    /**
     * 更新 ParkingLotChargesRule 数据
     * ParkingLotChargesRuleActor
     * @param parkingLotChargesRule
     * @returns {Promise<number>}
     */
    ['parkingLotChargesRule-update-inUse'](
      //
      parkingLotChargesRule: ApiAppParking.ParkingLotChargesRule
    ): Promise<number>;

    /**
     * 免费时间
     * ParkingLotChargesRuleActor
     * @param parkingLotIds
     * @param timeOut
     * @param freeParkingTime
     * @param resetStopTime
     * @returns {Promise<number>}
     */
    ['parkingLotChargesRule-update-outTime-or-feelTime'](
      //
      parkingLotIds: string[],
      //
      timeOut: string,
      //
      freeParkingTime: string,
      //
      resetStopTime: string
    ): Promise<number>;

    /**
     * 增加 ParkingLotChargesRelation 数据
     * ParkingLotChargingRelationActor
     * @param parkingLotChargingRelation
     * @returns {Promise<ApiAppParking.ParkingLotChargingRelation>}
     */
    ['parkingLotChargingRelation-create'](
      //
      parkingLotChargingRelation: ApiAppParking.ParkingLotChargingRelation
    ): Promise<ApiAppParking.ParkingLotChargingRelation>;

    /**
     * 删除 ParkingLotChargesRelation 数据
     * ParkingLotChargingRelationActor
     * @param id
     * @returns {Promise<number>}
     */
    ['parkingLotChargingRelation-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 ParkingLotChargesRelation 数据
     * ParkingLotChargingRelationActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['parkingLotChargingRelation-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 ParkingLotChargesRelation 数据
     * ParkingLotChargingRelationActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingLotChargingRelation>}
     */
    ['parkingLotChargingRelation-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingLotChargingRelation>;

    /**
     * 获取所有 ParkingLotChargesRelation 数据
     * ParkingLotChargingRelationActor
     * @returns {Promise<ApiAppParking.ParkingLotChargingRelation[]>}
     */
    ['parkingLotChargingRelation-getAll'](): Promise<
      ApiAppParking.ParkingLotChargingRelation[]
    >;

    /**
     * 获取 ParkingLotChargesRelation 的表格总数信息
     * ParkingLotChargingRelationActor
     * @param tid
     * @param parkingLotChargingRelation
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingLotChargingRelation-grid-count'](
      //
      tid: string,
      //
      parkingLotChargingRelation: ApiAppParking.ParkingLotChargingRelation,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ParkingLotChargesRelation 的表格列表数据
     * ParkingLotChargingRelationActor
     * @param tid
     * @param parkingLotChargingRelation
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingLotChargingRelation-grid-list'](
      //
      tid: string,
      //
      parkingLotChargingRelation: ApiAppParking.ParkingLotChargingRelation,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 ParkingLotChargesRelation 的表格分页数据
     * ParkingLotChargingRelationActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLotChargingRelation-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 ParkingLotChargesRelation 数据
     * ParkingLotChargingRelationActor
     * @param parkingLotChargingRelation
     * @returns {Promise<number>}
     */
    ['parkingLotChargingRelation-update'](
      //
      parkingLotChargingRelation: ApiAppParking.ParkingLotChargingRelation
    ): Promise<number>;

    /**
     * 增加收费策略 parkingLotChargingStrategy 数据
     * ParkingLotChargingStrategyActor
     * @param chargingStrategyVO
     * @returns {Promise<ApiAppParking.ParkingLotChargingStrategy>}
     */
    ['parkingLotChargingStrategy-add-data'](
      //
      chargingStrategyVO: ApiAppParking.ChargingStrategyVO
    ): Promise<ApiAppParking.ParkingLotChargingStrategy>;

    /**
     * 增加 parkingLotChargingStrategy 数据
     * ParkingLotChargingStrategyActor
     * @param parkingLotChargingStrategy
     * @returns {Promise<ApiAppParking.ParkingLotChargingStrategy>}
     */
    ['parkingLotChargingStrategy-create'](
      //
      parkingLotChargingStrategy: ApiAppParking.ParkingLotChargingStrategy
    ): Promise<ApiAppParking.ParkingLotChargingStrategy>;

    /**
     * 删除 parkingLotChargingStrategy 数据
     * ParkingLotChargingStrategyActor
     * @param id
     * @returns {Promise<number>}
     */
    ['parkingLotChargingStrategy-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 parkingLotChargingStrategy 数据
     * ParkingLotChargingStrategyActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['parkingLotChargingStrategy-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 ParkingLotChargesRelation 数据
     * ParkingLotChargingStrategyActor
     * @param id
     * @returns {Promise<ApiAppParking.ChargingStrategyVO>}
     */
    ['parkingLotChargingStrategy-get'](
      //
      id: string
    ): Promise<ApiAppParking.ChargingStrategyVO>;

    /**
     * 条件
     * ParkingLotChargingStrategyActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingLotChargingStrategy-get-all-condition'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 星期几
     * ParkingLotChargingStrategyActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingLotChargingStrategy-get-all-dayOfWeek'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 节假日
     * ParkingLotChargingStrategyActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingLotChargingStrategy-get-all-holiday'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 是否有时间段
     * ParkingLotChargingStrategyActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingLotChargingStrategy-get-formulaMode'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 年月日时分秒
     * ParkingLotChargingStrategyActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingLotChargingStrategy-get-timeLong'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 获取所有 parkingLotChargingStrategy 数据
     * ParkingLotChargingStrategyActor
     * @returns {Promise<ApiAppParking.ParkingLotChargingStrategy[]>}
     */
    ['parkingLotChargingStrategy-getAll'](): Promise<
      ApiAppParking.ParkingLotChargingStrategy[]
    >;

    /**
     * 获取 ParkingLotChargesRelation 的表格总数信息
     * ParkingLotChargingStrategyActor
     * @param tid
     * @param parkingLotChargingStrategy
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingLotChargingStrategy-grid-count'](
      //
      tid: string,
      //
      parkingLotChargingStrategy: ApiAppParking.ParkingLotChargingStrategy,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 parkingLotChargingStrategy 的表格列表数据
     * ParkingLotChargingStrategyActor
     * @param tid
     * @param parkingLotChargingStrategy
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingLotChargingStrategy-grid-list'](
      //
      tid: string,
      //
      parkingLotChargingStrategy: ApiAppParking.ParkingLotChargingStrategy,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 parkingLotChargingStrategy 的表格分页数据
     * ParkingLotChargingStrategyActor
     * @param wrapper
     * @param parkingId
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLotChargingStrategy-page'](
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      parkingId: string
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 parkingLotChargingStrategy 的表格分页表头与总记录数
     * ParkingLotChargingStrategyActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingLotChargingStrategy-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 parkingLotChargingStrategy 的表格分页数据
     * ParkingLotChargingStrategyActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLotChargingStrategy-page-new'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 parkingLotChargingStrategy 数据
     * ParkingLotChargingStrategyActor
     * @param chargingStrategyVO
     * @returns {Promise<number>}
     */
    ['parkingLotChargingStrategy-update'](
      //
      chargingStrategyVO: ApiAppParking.ChargingStrategyVO
    ): Promise<number>;

    /**
     * 更新 parkingLotChargingStrategy 数据
     * ParkingLotChargingStrategyActor
     * @param id
     * @param upgrade
     * @returns {Promise<number>}
     */
    ['parkingLotChargingStrategy-update-grade'](
      //
      id: string,
      //
      upgrade: boolean
    ): Promise<number>;

    /**
     * 删除 parkingLotChargingStrategy 数据
     * ParkingLotChargingStrategyDetailActor
     * @param id
     * @returns {Promise<number>}
     */
    ['parkingLotChargingStrategyDetailService-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 parkingLotChargingStrategyDetail 数据
     * ParkingLotChargingStrategyDetailActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['parkingLotChargingStrategyDetailService-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 parkingLotChargingStrategyDetail 数据
     * ParkingLotChargingStrategyDetailActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingLotChargingStrategyDetail>}
     */
    ['parkingLotChargingStrategyDetailService-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingLotChargingStrategyDetail>;

    /**
     * 获取所有 parkingLotChargingStrategyDetail 数据
     * ParkingLotChargingStrategyDetailActor
     * @returns {Promise<ApiAppParking.ParkingLotChargingStrategyDetail[]>}
     */
    ['parkingLotChargingStrategyDetailService-getAll'](): Promise<
      ApiAppParking.ParkingLotChargingStrategyDetail[]
    >;

    /**
     * 获取 parkingLotChargingStrategyDetail 的表格总数信息
     * ParkingLotChargingStrategyDetailActor
     * @param tid
     * @param detail
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingLotChargingStrategyDetailService-grid-count'](
      //
      tid: string,
      //
      detail: ApiAppParking.ParkingLotChargingStrategyDetail,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 parkingLotChargingStrategyDetail 的表格列表数据
     * ParkingLotChargingStrategyDetailActor
     * @param tid
     * @param detail
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingLotChargingStrategyDetailService-grid-list'](
      //
      tid: string,
      //
      detail: ApiAppParking.ParkingLotChargingStrategyDetail,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 parkingLotChargingStrategyDetail 的表格分页数据
     * ParkingLotChargingStrategyDetailActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLotChargingStrategyDetailService-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 parkingLotChargingStrategyDetail 数据
     * ParkingLotChargingStrategyDetailActor
     * @param detail
     * @returns {Promise<number>}
     */
    ['parkingLotChargingStrategyDetailService-update'](
      //
      detail: ApiAppParking.ParkingLotChargingStrategyDetail
    ): Promise<number>;

    /**
     * 配置车场收费策略
     * ParkingLotChargingStrategyRelationActor
     * @param parkingLotIds
     * @param strategyIds
     * @param type
     * @returns {Promise<boolean>}
     */
    ['parkingLotChargingStrategyRelation-add'](
      //
      parkingLotIds: string[],
      //
      strategyIds: string[],
      //
      type: string
    ): Promise<boolean>;

    /**
     * 增加 ParkingLotChargingStrategyRelation 数据
     * ParkingLotChargingStrategyRelationActor
     * @param parkingLotChargingStrategy
     * @returns {Promise<ApiAppParking.ParkingLotChargingStrategyRelation>}
     */
    ['parkingLotChargingStrategyRelation-create'](
      //
      parkingLotChargingStrategy: ApiAppParking.ParkingLotChargingStrategyRelation
    ): Promise<ApiAppParking.ParkingLotChargingStrategyRelation>;

    /**
     * 删除 parkingLotChargingStrategy 数据
     * ParkingLotChargingStrategyRelationActor
     * @param id
     * @returns {Promise<number>}
     */
    ['parkingLotChargingStrategyRelation-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 parkingLotChargingStrategy 数据
     * ParkingLotChargingStrategyRelationActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['parkingLotChargingStrategyRelation-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 ParkingLotChargesRelation 数据
     * ParkingLotChargingStrategyRelationActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingLotChargingStrategyRelation>}
     */
    ['parkingLotChargingStrategyRelation-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingLotChargingStrategyRelation>;

    /**
     * 根据车场id获取 ParkingLotChargesRelation 数据
     * ParkingLotChargingStrategyRelationActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingLotStrategyRelationVO>}
     */
    ['parkingLotChargingStrategyRelation-get-byParkingId'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingLotStrategyRelationVO>;

    /**
     * 获取所有 parkingLotChargingStrategy 数据
     * ParkingLotChargingStrategyRelationActor
     * @returns {Promise<ApiAppParking.ParkingLotChargingStrategyRelation[]>}
     */
    ['parkingLotChargingStrategyRelation-getAll'](): Promise<
      ApiAppParking.ParkingLotChargingStrategyRelation[]
    >;

    /**
     * 获取 ParkingLotChargesRelation 的表格总数信息
     * ParkingLotChargingStrategyRelationActor
     * @param tid
     * @param parkingLotChargingStrategy
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingLotChargingStrategyRelation-grid-count'](
      //
      tid: string,
      //
      parkingLotChargingStrategy: ApiAppParking.ParkingLotChargingStrategyRelation,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 parkingLotChargingStrategy 的表格列表数据
     * ParkingLotChargingStrategyRelationActor
     * @param tid
     * @param parkingLotChargingStrategy
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingLotChargingStrategyRelation-grid-list'](
      //
      tid: string,
      //
      parkingLotChargingStrategy: ApiAppParking.ParkingLotChargingStrategyRelation,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 parkingLotChargingStrategy 的表格分页数据
     * ParkingLotChargingStrategyRelationActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLotChargingStrategyRelation-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 ParkingLot 的表格分页数据
     * ParkingLotChargingStrategyRelationActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLotChargingStrategyRelation-page-ParkingLot'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 parkingLotChargingStrategyRelation 的表格分页表头与总记录数
     * ParkingLotChargingStrategyRelationActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingLotChargingStrategyRelation-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取车场 parkingLotChargingStrategy 的表格分页数据
     * ParkingLotChargingStrategyRelationActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLotChargingStrategyRelation-page-vo'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 parkingLotChargingStrategy 数据
     * ParkingLotChargingStrategyRelationActor
     * @param parkingLotChargingStrategy
     * @returns {Promise<number>}
     */
    ['parkingLotChargingStrategyRelation-update'](
      //
      parkingLotChargingStrategy: ApiAppParking.ParkingLotChargingStrategyRelation
    ): Promise<number>;

    /**
     * 岗亭车场列表  /传参app首页
     * BizParkingLotAreaActor
     * @param parkingLotId
     * @returns {Promise<ApiAppParking.ParkingLotListVO[]>}
     */
    ['parkingLotListVO-list'](
      //
      parkingLotId: string
    ): Promise<ApiAppParking.ParkingLotListVO[]>;

    /**
     * 增加 ParkingLotChargesRelation 数据
     * ParkingLotMemberActor
     * @param parkingLotMember
     * @returns {Promise<ApiAppParking.ParkingLotMember>}
     */
    ['parkingLotMember-create'](
      //
      parkingLotMember: ApiAppParking.ParkingLotMember
    ): Promise<ApiAppParking.ParkingLotMember>;

    /**
     * 删除 ParkingLotChargesRelation 数据
     * ParkingLotMemberActor
     * @param id
     * @returns {Promise<number>}
     */
    ['parkingLotMember-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 ParkingLotChargesRelation 数据
     * ParkingLotMemberActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['parkingLotMember-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 ParkingLotChargesRelation 数据
     * ParkingLotMemberActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingLotMember>}
     */
    ['parkingLotMember-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingLotMember>;

    /**
     * 获取所有会员类型，包年，包月等
     * ParkingLotMemberActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingLotMember-get-all-member-rule'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 获取所有 ParkingLotChargesRelation 数据
     * ParkingLotMemberActor
     * @returns {Promise<ApiAppParking.ParkingLotMember[]>}
     */
    ['parkingLotMember-getAll'](): Promise<ApiAppParking.ParkingLotMember[]>;

    /**
     * 获取 ParkingLotChargesRelation 的表格总数信息
     * ParkingLotMemberActor
     * @param tid
     * @param parkingLotMember
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingLotMember-grid-count'](
      //
      tid: string,
      //
      parkingLotMember: ApiAppParking.ParkingLotMember,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ParkingLotChargesRelation 的表格列表数据
     * ParkingLotMemberActor
     * @param tid
     * @param parkingLotMember
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingLotMember-grid-list'](
      //
      tid: string,
      //
      parkingLotMember: ApiAppParking.ParkingLotMember,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 ParkingLotChargesRelation 的表格分页数据
     * ParkingLotMemberActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLotMember-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 ParkingLotChargesRelation 数据
     * ParkingLotMemberActor
     * @param parkingLotMember
     * @returns {Promise<number>}
     */
    ['parkingLotMember-update'](
      //
      parkingLotMember: ApiAppParking.ParkingLotMember
    ): Promise<number>;

    /**
     * 增加 ParkingLotChargesRelation 数据
     * ParkingLotRuleStrategyRelationActor
     * @param parkingLotRuleStrategyRelation
     * @returns {Promise<ApiAppParking.ParkingLotRuleStrategyRelation>}
     */
    ['parkingLotRuleStrategyRelation-create'](
      //
      parkingLotRuleStrategyRelation: ApiAppParking.ParkingLotRuleStrategyRelation
    ): Promise<ApiAppParking.ParkingLotRuleStrategyRelation>;

    /**
     * 删除 ParkingLotChargesRelation 数据
     * ParkingLotRuleStrategyRelationActor
     * @param id
     * @returns {Promise<number>}
     */
    ['parkingLotRuleStrategyRelation-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 ParkingLotChargesRelation 数据
     * ParkingLotRuleStrategyRelationActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['parkingLotRuleStrategyRelation-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 ParkingLotChargesRelation 数据
     * ParkingLotRuleStrategyRelationActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingLotRuleStrategyRelation>}
     */
    ['parkingLotRuleStrategyRelation-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingLotRuleStrategyRelation>;

    /**
     * 获取所有 ParkingLotChargesRelation 数据
     * ParkingLotRuleStrategyRelationActor
     * @returns {Promise<ApiAppParking.ParkingLotRuleStrategyRelation[]>}
     */
    ['parkingLotRuleStrategyRelation-getAll'](): Promise<
      ApiAppParking.ParkingLotRuleStrategyRelation[]
    >;

    /**
     * 获取 ParkingLotChargesRelation 的表格总数信息
     * ParkingLotRuleStrategyRelationActor
     * @param tid
     * @param parkingLotRuleStrategyRelation
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingLotRuleStrategyRelation-grid-count'](
      //
      tid: string,
      //
      parkingLotRuleStrategyRelation: ApiAppParking.ParkingLotRuleStrategyRelation,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ParkingLotChargesRelation 的表格列表数据
     * ParkingLotRuleStrategyRelationActor
     * @param tid
     * @param parkingLotRuleStrategyRelation
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingLotRuleStrategyRelation-grid-list'](
      //
      tid: string,
      //
      parkingLotRuleStrategyRelation: ApiAppParking.ParkingLotRuleStrategyRelation,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 ParkingLotChargesRelation 的表格分页数据
     * ParkingLotRuleStrategyRelationActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLotRuleStrategyRelation-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 ParkingLotChargesRelation 数据
     * ParkingLotRuleStrategyRelationActor
     * @param parkingLotRuleStrategyRelation
     * @returns {Promise<number>}
     */
    ['parkingLotRuleStrategyRelation-update'](
      //
      parkingLotRuleStrategyRelation: ApiAppParking.ParkingLotRuleStrategyRelation
    ): Promise<number>;

    /**
     * 增加 ParkingLotVehicleIdentification 数据
     * ParkingLotVehicleIdentificationActor
     * @param vehicleIdentification
     * @returns {Promise<ApiAppParking.ParkingLotVehicleIdentification>}
     */
    ['parkingLotVehicleIdentification-create'](
      //
      vehicleIdentification: ApiAppParking.ParkingLotVehicleIdentification
    ): Promise<ApiAppParking.ParkingLotVehicleIdentification>;

    /**
     * 删除 ParkingLotVehicleIdentification 数据
     * ParkingLotVehicleIdentificationActor
     * @param id
     * @returns {Promise<number>}
     */
    ['parkingLotVehicleIdentification-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 ParkingLotVehicleIdentification 数据
     * ParkingLotVehicleIdentificationActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['parkingLotVehicleIdentification-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 ParkingLotVehicleIdentification 数据
     * ParkingLotVehicleIdentificationActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingLotVehicleIdentification>}
     */
    ['parkingLotVehicleIdentification-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingLotVehicleIdentification>;

    /**
     * 获取所有 ParkingLotVehicleIdentification 数据
     * ParkingLotVehicleIdentificationActor
     * @returns {Promise<ApiAppParking.ParkingLotVehicleIdentification[]>}
     */
    ['parkingLotVehicleIdentification-getAll'](): Promise<
      ApiAppParking.ParkingLotVehicleIdentification[]
    >;

    /**
     * 获取 ParkingLotVehicleIdentification 的表格总数信息
     * ParkingLotVehicleIdentificationActor
     * @param tid
     * @param parkingLotVehicleIdentification
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingLotVehicleIdentification-grid-count'](
      //
      tid: string,
      //
      parkingLotVehicleIdentification: ApiAppParking.ParkingLotVehicleIdentification,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ParkingLotVehicleIdentification 的表格列表数据
     * ParkingLotVehicleIdentificationActor
     * @param tid
     * @param parkingLotVehicleIdentification
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingLotVehicleIdentification-grid-list'](
      //
      tid: string,
      //
      parkingLotVehicleIdentification: ApiAppParking.ParkingLotVehicleIdentification,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * od分析-高峰路线分析：实时数据,高峰路线
     * ParkingLotVehicleIdentificationActor
     * @returns {Promise<ApiAppParking.PeakLineRealTimeVO>}
     */
    ['parkingLotVehicleIdentification-od-peakLine-realTime'](): Promise<ApiAppParking.PeakLineRealTimeVO>;

    /**
     * 获取 ParkingLotVehicleIdentification 的表格分页数据
     * ParkingLotVehicleIdentificationActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingLotVehicleIdentification-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 ParkingLotVehicleIdentification 数据
     * ParkingLotVehicleIdentificationActor
     * @param parkingLotVehicleIdentification
     * @returns {Promise<number>}
     */
    ['parkingLotVehicleIdentification-update'](
      //
      parkingLotVehicleIdentification: ApiAppParking.ParkingLotVehicleIdentification
    ): Promise<number>;

    /**
     * 获取单条 ParkingOrder 数据
     * ParkingOrderActor
     * @param serialNumber
     * @returns {Promise<ApiAppParking.ParkingOrderVO[]>}
     */
    ['parkingOrder-app-get-by-serialNumber'](
      //
      serialNumber: string
    ): Promise<ApiAppParking.ParkingOrderVO[]>;

    /**
     * 获取单条 ParkingOrder 数据
     * ParkingOrderActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingOrder>}
     */
    ['parkingOrder-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingOrder>;

    /**
     * 根据车牌号获取订单信息
     * ParkingOrderActor
     * @param carNum
     * @param parkingId
     * @param deviceId
     * @returns {Promise<ApiAppParking.ParkingOrder>}
     */
    ['parkingOrder-get-by-carNum'](
      //
      carNum: string,
      //
      parkingId: string,
      //
      deviceId: string
    ): Promise<ApiAppParking.ParkingOrder>;

    /**
     * 获取单条 ParkingOrder 数据
     * ParkingOrderActor
     * @param serialNumber
     * @returns {Promise<ApiAppParking.ParkingOrderVO[]>}
     */
    ['parkingOrder-get-by-serialNumber'](
      //
      serialNumber: string
    ): Promise<ApiAppParking.ParkingOrderVO[]>;

    /**
     * 获取所有 ParkingOrder 数据
     * ParkingOrderActor
     * @returns {Promise<ApiAppParking.ParkingOrder[]>}
     */
    ['parkingOrder-getAll'](): Promise<ApiAppParking.ParkingOrder[]>;

    /**
     * 获取 ParkingOrder 的表格总数信息
     * ParkingOrderActor
     * @param tid
     * @param parkingOrder
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingOrder-grid-count'](
      //
      tid: string,
      //
      parkingOrder: ApiAppParking.ParkingOrder,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ParkingOrder 的表格列表数据
     * ParkingOrderActor
     * @param tid
     * @param parkingOrder
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingOrder-grid-list'](
      //
      tid: string,
      //
      parkingOrder: ApiAppParking.ParkingOrder,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 ParkingOrder 的表格分页数据
     * ParkingOrderActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingOrder-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 ParkingOrder 的表格分页数据
     * ParkingOrderActor
     * @param wrapper
     * @param searchText
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingOrder-search'](
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      searchText: string
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 ParkingOrder 的表格分页数据
     * ParkingOrderActor
     * @param searchText
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingOrder-search-count'](
      //
      searchText: string,
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 根据车牌获取到车场停车记录信息
     * ParkingRecordActor
     * @param parkingId
     * @param carPlate
     * @returns {Promise<ApiAppParking.ParkingRecord>}
     */
    ['parkingRecord-QueryCarPlate'](
      //
      parkingId: string,
      //
      carPlate: string
    ): Promise<ApiAppParking.ParkingRecord>;

    /**
     * App停车未支付离场枚举值
     * ParkingRecordActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingRecord-app-no-pay-leave-type'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 动态停车场信息-停车场数据监控：区域车辆流转情况
     * BizDynamicParkingInformationStatisticsActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingRecord-carInOutTimesGroupByDistrict'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-停车场数据监控：车场概况：车流量高峰时段
     * BizDynamicParkingInformationStatisticsActor
     * @returns {Promise<ApiAppParking.ParkingLotOverview[]>}
     */
    ['parkingRecord-carLicenseDistribution'](): Promise<
      ApiAppParking.ParkingLotOverview[]
    >;

    /**
     * 增加 parkingRecord 数据
     * ParkingRecordActor
     * @param parkingRecord
     * @returns {Promise<ApiAppParking.ParkingRecord>}
     */
    ['parkingRecord-create'](
      //
      parkingRecord: ApiAppParking.ParkingRecord
    ): Promise<ApiAppParking.ParkingRecord>;

    /**
     * 无牌车手动入场
     * ParkingRecordActor
     * @param parkingRecord
     * @returns {Promise<string>}
     */
    ['parkingRecord-create-unlicensed'](
      //
      parkingRecord: ApiAppParking.ParkingRecord
    ): Promise<string>;

    /**
     * 删除 parkingRecord 数据
     * ParkingRecordActor
     * @param id
     * @returns {Promise<number>}
     */
    ['parkingRecord-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 parkingRecord 数据
     * ParkingRecordActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['parkingRecord-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 动态停车场信息-实时进出场概况：本地/外地车分布
     * BizParkingLotActor
     * @param parkingLot
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingRecord-distributionGroupCarType'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时进出场概况：油车/电车分布
     * BizParkingLotActor
     * @param parkingLot
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingRecord-distributionGroupEnergyType'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<{ [key: string]: any }>;

    /**
     * 获取单条 parkingRecord 数据
     * ParkingRecordActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingRecord>}
     */
    ['parkingRecord-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingRecord>;

    /**
     * 根据流水号获取单条 parkingRecord 数据
     * ParkingRecordActor
     * @param serialNumber
     * @returns {Promise<ApiAppParking.ParkingRecord>}
     */
    ['parkingRecord-get-by-serialNumber'](
      //
      serialNumber: string
    ): Promise<ApiAppParking.ParkingRecord>;

    /**
     * 获取车牌
     * ParkingRecordActor
     * @param picUrl
     * @returns {Promise<string>}
     */
    ['parkingRecord-get-carNum'](
      //
      picUrl: string
    ): Promise<string>;

    /**
     * 获取所有 parkingRecord 数据
     * ParkingRecordActor
     * @returns {Promise<ApiAppParking.ParkingRecord[]>}
     */
    ['parkingRecord-getAll'](): Promise<ApiAppParking.ParkingRecord[]>;

    /**
     * 获取 ParkingRecord 的表格总数信息
     * ParkingRecordActor
     * @param tid
     * @param parkingRecord
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingRecord-grid-count'](
      //
      tid: string,
      //
      parkingRecord: ApiAppParking.ParkingRecord,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ParkingRecord 的表格列表数据
     * ParkingRecordActor
     * @param tid
     * @param parkingRecord
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingRecord-grid-list'](
      //
      tid: string,
      //
      parkingRecord: ApiAppParking.ParkingRecord,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 停车未支付离场
     * ParkingRecordActor
     * @param parkingPayPayload
     * @returns {Promise<string>}
     */
    ['parkingRecord-no-pay-leave'](
      //
      parkingPayPayload: ApiAppParking.ParkingPayPayload
    ): Promise<string>;

    /**
     * 停车未支付离场枚举值
     * ParkingRecordActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingRecord-no-pay-leave-type'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 获取 parkingRecord 的表格分页数据
     * ParkingRecordActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingRecord-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 parkingRecord 的表格分页表头与总记录数
     * ParkingRecordActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingRecord-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 parkingRecord 的表格分页数据
     * ParkingRecordActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingRecord-page-include-charges'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 parkingRecord 的表格分页数据
     * ParkingRecordActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingRecord-page-test'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 动态停车场信息-停车场数据监控：区域停车压力分析(占用率)
     * BizDynamicParkingInformationStatisticsActor
     * @param cityCode
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingRecord-parkingOverview'](
      //
      cityCode: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 根据停车场id获取匹配车辆的未出场的车辆记录信息
     * ParkingRecordActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingRecord-parkingRecodeMatching'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 实时停车记录
     * BizDynamicParkingInformationStatisticsActor
     * @param cityCode
     * @returns {Promise<ApiAppParking.ParkingRecord[]>}
     */
    ['parkingRecord-realTimeParkingRecord'](
      //
      cityCode: string
    ): Promise<ApiAppParking.ParkingRecord[]>;

    /**
     * 实时车流量
     * BizDynamicParkingInformationStatisticsActor
     * @param cityCode
     * @returns {Promise<ApiAppParking.ParkingLotOverview[]>}
     */
    ['parkingRecord-realTimeTrafficFlow'](
      //
      cityCode: string
    ): Promise<ApiAppParking.ParkingLotOverview[]>;

    /**
     * 增加 parkingRecord 数据
     * ParkingRecordActor
     * @param parkingRecord
     * @returns {Promise<ApiAppParking.ParkingRecord>}
     */
    ['parkingRecord-save-test'](
      //
      parkingRecord: ApiAppParking.ParkingRecord
    ): Promise<ApiAppParking.ParkingRecord>;

    /**
     * 动态停车场信息-实时进出场概况：今日车流高峰时间段
     * BizParkingLotActor
     * @param parkingLot
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingRecord-todayPeakPeriodTrafficFlow'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<{ [key: string]: any }>;

    /**
     * 动态停车场信息-实时进出场概况：各区域车流量
     * BizParkingLotActor
     * @param parkingLot
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingRecord-trafficFlowGroupDistrict'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<{ [key: string]: any }>;

    /**
     * 今日车流量排行TOP10
     * BizDynamicParkingInformationStatisticsActor
     * @returns {Promise<ApiAppParking.ParkingLotOverview[]>}
     */
    ['parkingRecord-trafficFlowRankingByParkingLot'](): Promise<
      ApiAppParking.ParkingLotOverview[]
    >;

    /**
     * 近10分钟车流量排行TOP10
     * BizDynamicParkingInformationStatisticsActor
     * @returns {Promise<ApiAppParking.ParkingLotOverview[]>}
     */
    ['parkingRecord-trafficFlowRankingByParkingLotTenMinutes'](): Promise<
      ApiAppParking.ParkingLotOverview[]
    >;

    /**
     * 动态停车场信息-实时进出场概况：车流量变化趋势
     * BizParkingLotActor
     * @param cityCode
     * @param districtCode
     * @param parkingLotNature
     * @param parkingLotName
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingRecord-trafficFlowTrend'](
      //
      cityCode: string,
      //
      districtCode: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 匹配
     * ParkingRecordActor
     * @param parkingRecordMatchingVO
     * @param entryEquipmentId
     * @param leavingPic
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingRecord-transmit'](
      //
      parkingRecordMatchingVO: ApiAppParking.ParkingRecordMatchingVO,
      //
      entryEquipmentId: string,
      //
      leavingPic: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 更新 parkingRecord 数据
     * ParkingRecordActor
     * @param parkingRecord
     * @returns {Promise<number>}
     */
    ['parkingRecord-update'](
      //
      parkingRecord: ApiAppParking.ParkingRecord
    ): Promise<number>;

    /**
     * 数据研判分析-区域分析：接入信息
     * BizParkingSpaceActor
     * @param parkingLot
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingSpace-accessInformation'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<{ [key: string]: any }>;

    /**
     * 增加 ParkingSpace 数据
     * ParkingSpaceActor
     * @param parkingSpace
     * @returns {Promise<ApiAppParking.ParkingSpaceSensorVO>}
     */
    ['parkingSpace-create'](
      //
      parkingSpace: ApiAppParking.ParkingSpace
    ): Promise<ApiAppParking.ParkingSpaceSensorVO>;

    /**
     * 删除 ParkingSpace 数据
     * ParkingSpaceActor
     * @param id
     * @returns {Promise<number>}
     */
    ['parkingSpace-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 ParkingSpace 数据
     * ParkingSpaceActor
     * @param ids
     * @param areaIds
     * @returns {Promise<number>}
     */
    ['parkingSpace-deleteBatch'](
      //
      ids: string[],
      //
      areaIds: string[]
    ): Promise<number>;

    /**
     * 获取单条 ParkingSpace 数据
     * ParkingSpaceActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingSpace>}
     */
    ['parkingSpace-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingSpace>;

    /**
     * 增加 ParkingSpace 数据
     * ParkingSpaceActor
     * @returns {Promise<ApiAppParking.ParkingEnumVO>}
     */
    ['parkingSpace-get-all-state'](): Promise<ApiAppParking.ParkingEnumVO>;

    /**
     * 获取所有 ParkingSpace 数据
     * ParkingSpaceActor
     * @returns {Promise<ApiAppParking.ParkingSpace[]>}
     */
    ['parkingSpace-getAll'](): Promise<ApiAppParking.ParkingSpace[]>;

    /**
     * 获取 ParkingSpace 的表格总数信息
     * ParkingSpaceActor
     * @param tid
     * @param parkingSpace
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingSpace-grid-count'](
      //
      tid: string,
      //
      parkingSpace: ApiAppParking.ParkingSpace,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 Parki ngSpace 的表格列表数据
     * ParkingSpaceActor
     * @param tid
     * @param parkingSpace
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingSpace-grid-list'](
      //
      tid: string,
      //
      parkingSpace: ApiAppParking.ParkingSpace,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 数据研判分析-余位分析：车位占用情况分析
     * BizParkingSpaceActor
     * @param parkingLot
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingSpace-occupancyRateDistribution'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<{ [key: string]: any }>;

    /**
     * 获取 ParkingSpace 的表格分页数据
     * ParkingSpaceActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingSpace-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 ParkingLot 的表格分页表头与总记录数
     * ParkingSpaceActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingSpace-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 车位详情-今日实时占用情况
     * BizParkingSpaceActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingSpaceRatioVO>}
     */
    ['parkingSpace-ratio'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingSpaceRatioVO>;

    /**
     * 数据研判分析-区域分析：城市余位分析
     * BizParkingSpaceActor
     * @param parkingLot
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingSpace-totalPAndRemainingByCity'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<{ [key: string]: any }>;

    /**
     * 数据研判分析-区域分析：区域余位数据监控,数据研判分析-区域分析：区域车位占用率
     * BizParkingSpaceActor
     * @param parkingLot
     * @returns {Promise<{[key:string]:any}>}
     */
    ['parkingSpace-totalParkingSpaceAndRemaining'](
      //
      parkingLot: ApiAppParking.ParkingLot
    ): Promise<{ [key: string]: any }>;

    /**
     * 更新 ParkingSpace 数据
     * ParkingSpaceActor
     * @param parkingSpace
     * @returns {Promise<ApiAppParking.ParkingSpaceSensorVO>}
     */
    ['parkingSpace-update'](
      //
      parkingSpace: ApiAppParking.ParkingSpace
    ): Promise<ApiAppParking.ParkingSpaceSensorVO>;

    /**
     * 停车场状态信息
     * BizParkingSpaceAreaActor
     * @param parkingLotId
     * @returns {Promise<ApiAppParking.ParkingSpaceCountVO>}
     */
    ['parkingSpaceCountVO-select'](
      //
      parkingLotId: string
    ): Promise<ApiAppParking.ParkingSpaceCountVO>;

    /**
     * 根据车牌，车场查询，是否白名单
     * ParkingWihteListActor
     * @param queryVO
     * @returns {Promise<ApiAppParking.ParkingWhitelist[]>}
     */
    ['parkingWhiteList-get-by-query-vo'](
      //
      queryVO: ApiAppParking.ParkingWhitelistQueryVO
    ): Promise<ApiAppParking.ParkingWhitelist[]>;

    /**
     * 获取 ParkingWihteList 的计费类型
     * ParkingWihteListActor
     * @returns {Promise<ApiAppParking.EnumVO>}
     */
    ['parkingWihteList-charge-type'](): Promise<ApiAppParking.EnumVO>;

    /**
     * 增加 ParkingWihteList 数据
     * ParkingWihteListActor
     * @param parkingWihteList
     * @returns {Promise<ApiAppParking.ParkingWhitelist>}
     */
    ['parkingWihteList-create'](
      //
      parkingWihteList: ApiAppParking.ParkingWhitelist
    ): Promise<ApiAppParking.ParkingWhitelist>;

    /**
     * 删除 ParkingWihteList 数据
     * ParkingWihteListActor
     * @param id
     * @returns {Promise<number>}
     */
    ['parkingWihteList-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 ParkingWihteList 数据
     * ParkingWihteListActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['parkingWihteList-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 ParkingWihteList 数据
     * ParkingWihteListActor
     * @param id
     * @returns {Promise<ApiAppParking.ParkingWhitelist>}
     */
    ['parkingWihteList-get'](
      //
      id: string
    ): Promise<ApiAppParking.ParkingWhitelist>;

    /**
     * 根据车牌，车场查询，是否白名单
     * ParkingWihteListActor
     * @param parkingId
     * @param carPlate
     * @returns {Promise<ApiAppParking.ParkingWhitelist>}
     */
    ['parkingWihteList-get-by-id'](
      //
      parkingId: string,
      //
      carPlate: string
    ): Promise<ApiAppParking.ParkingWhitelist>;

    /**
     * 获取所有 ParkingWihteList 数据
     * ParkingWihteListActor
     * @returns {Promise<ApiAppParking.ParkingWhitelist[]>}
     */
    ['parkingWihteList-getAll'](): Promise<ApiAppParking.ParkingWhitelist[]>;

    /**
     * 获取 ParkingWihteList 的表格总数信息
     * ParkingWihteListActor
     * @param tid
     * @param parkingWihteList
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingWihteList-grid-count'](
      //
      tid: string,
      //
      parkingWihteList: ApiAppParking.ParkingWhitelist,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ParkingWihteList 的表格列表数据
     * ParkingWihteListActor
     * @param tid
     * @param parkingWihteList
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['parkingWihteList-grid-list'](
      //
      tid: string,
      //
      parkingWihteList: ApiAppParking.ParkingWhitelist,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 ParkingWihteList 的表格分页数据
     * ParkingWihteListActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parkingWihteList-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 ParkingWihteList 的表格分页表头与总记录数
     * ParkingWihteListActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parkingWihteList-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新 ParkingWihteList 数据
     * ParkingWihteListActor
     * @param parkingWihteList
     * @returns {Promise<number>}
     */
    ['parkingWihteList-update'](
      //
      parkingWihteList: ApiAppParking.ParkingWhitelist
    ): Promise<number>;

    /**
     * 增加 PassageWay 数据
     * PassageWayActor
     * @param passageWay
     * @returns {Promise<ApiAppParking.PassageWay>}
     */
    ['passageWay-create'](
      //
      passageWay: ApiAppParking.PassageWay
    ): Promise<ApiAppParking.PassageWay>;

    /**
     * 删除 PassageWay 数据
     * PassageWayActor
     * @param id
     * @returns {Promise<number>}
     */
    ['passageWay-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 PassageWay 数据
     * PassageWayActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['passageWay-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 PassageWay 数据
     * PassageWayActor
     * @param id
     * @returns {Promise<ApiAppParking.PassageWay>}
     */
    ['passageWay-get'](
      //
      id: string
    ): Promise<ApiAppParking.PassageWay>;

    /**
     * 查询车场下的一体机列表
     * PassageWayActor
     * @param parkingId
     * @returns {Promise<ApiAppParking.DeviceInfoVO[]>}
     */
    ['passageWay-get-device-info'](
      //
      parkingId: string
    ): Promise<ApiAppParking.DeviceInfoVO[]>;

    /**
     * 通道获取一体机设备下拉
     * PassageWayActor
     * @param data
     * @returns {Promise<ApiAppParking.DeviceOneMachine[]>}
     */
    ['passageWay-get-oneMachine-list'](
      //
      data: ApiAppParking.DeviceOneMachine
    ): Promise<ApiAppParking.DeviceOneMachine[]>;

    /**
     * 获取所有 PassageWay 数据
     * PassageWayActor
     * @returns {Promise<ApiAppParking.PassageWay[]>}
     */
    ['passageWay-getAll'](): Promise<ApiAppParking.PassageWay[]>;

    /**
     * 获取 PassageWay 的表格总数信息
     * PassageWayActor
     * @param tid
     * @param passageWay
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['passageWay-grid-count'](
      //
      tid: string,
      //
      passageWay: ApiAppParking.PassageWay,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 PassageWay 的表格列表数据
     * PassageWayActor
     * @param tid
     * @param passageWay
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['passageWay-grid-list'](
      //
      tid: string,
      //
      passageWay: ApiAppParking.PassageWay,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 通道名称下拉
     * PassageWayActor
     * @param parkingId
     * @returns {Promise<any[]>}
     */
    ['passageWay-name-get'](
      //
      parkingId: string
    ): Promise<any[]>;

    /**
     * 获取 PassageWay 的表格分页数据
     * PassageWayActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['passageWay-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 PassageWay 的表格分页表头与总记录数
     * PassageWayActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['passageWay-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新 PassageWay 数据
     * PassageWayActor
     * @param passageWay
     * @returns {Promise<number>}
     */
    ['passageWay-update'](
      //
      passageWay: ApiAppParking.PassageWay
    ): Promise<number>;

    /**
     * 车牌、车位查询
     * PaymentRecordActor
     * @param parkingLotId
     * @param paymentType
     * @param searchText
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['paymentRecord-carNum-parkingSpaceName-search'](
      //
      parkingLotId: string,
      //
      paymentType: string,
      //
      searchText: string,
      //
      page: number,
      //
      pageSize: number
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 缴费记录确认
     * PaymentRecordActor
     * @param id
     * @returns {Promise<ApiAppParking.PaymentRecord>}
     */
    ['paymentRecord-confirm'](
      //
      id: string
    ): Promise<ApiAppParking.PaymentRecord>;

    /**
     * 增加 PaymentRecord 数据
     * PaymentRecordActor
     * @param paymentRecord
     * @returns {Promise<ApiAppParking.PaymentRecord>}
     */
    ['paymentRecord-create'](
      //
      paymentRecord: ApiAppParking.PaymentRecord
    ): Promise<ApiAppParking.PaymentRecord>;

    /**
     * 删除 PaymentRecord 数据
     * PaymentRecordActor
     * @param id
     * @returns {Promise<number>}
     */
    ['paymentRecord-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 PaymentRecord 数据
     * PaymentRecordActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['paymentRecord-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 PaymentRecord 数据
     * PaymentRecordActor
     * @param id
     * @returns {Promise<ApiAppParking.PaymentRecord>}
     */
    ['paymentRecord-get'](
      //
      id: string
    ): Promise<ApiAppParking.PaymentRecord>;

    /**
     * 获取所有 PaymentRecord 数据
     * PaymentRecordActor
     * @returns {Promise<ApiAppParking.PaymentRecord[]>}
     */
    ['paymentRecord-getAll'](): Promise<ApiAppParking.PaymentRecord[]>;

    /**
     * 获取 PaymentRecord 的表格总数信息
     * PaymentRecordActor
     * @param tid
     * @param paymentRecord
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['paymentRecord-grid-count'](
      //
      tid: string,
      //
      paymentRecord: ApiAppParking.PaymentRecord,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 PaymentRecord 的表格列表数据
     * PaymentRecordActor
     * @param tid
     * @param paymentRecord
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['paymentRecord-grid-list'](
      //
      tid: string,
      //
      paymentRecord: ApiAppParking.PaymentRecord,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 PaymentRecord 的表格分页数据
     * PaymentRecordActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['paymentRecord-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 PaymentRecord 数据
     * PaymentRecordActor
     * @param paymentRecord
     * @returns {Promise<number>}
     */
    ['paymentRecord-update'](
      //
      paymentRecord: ApiAppParking.PaymentRecord
    ): Promise<number>;

    /**
     * 查询区域数据
     * BaseInformationActor
     * @returns {Promise<any[]>}
     */
    ['province-query'](): Promise<any[]>;

    /**
     * 车场配置右侧框显示数据
     * BizParkingLotAreaActor
     * @param parkId
     * @returns {Promise<ApiAppParking.ParkingLotDeployVO>}
     */
    ['query-ParkingLotDeployVO'](
      //
      parkId: string
    ): Promise<ApiAppParking.ParkingLotDeployVO>;

    /**
     * 获取左侧车辆列表数据
     * BizParkingLotAreaActor
     * @param streetCode
     * @param code
     * @param parkingLotName
     * @returns {Promise<ApiAppParking.ParkingLotAreaVO[]>}
     */
    ['query-parkingLotAreaVO'](
      //
      streetCode: string,
      //
      code: string,
      //
      parkingLotName: string
    ): Promise<ApiAppParking.ParkingLotAreaVO[]>;

    /**
     * 空闲停车位
     * BizParkingSpaceAreaActor
     * @param parkingLotId
     * @returns {Promise<ApiAppParking.ParkingSpaceStateVO[]>}
     */
    ['query-state-parkingSpace'](
      //
      parkingLotId: string
    ): Promise<ApiAppParking.ParkingSpaceStateVO[]>;

    /**
     * 空闲停车场
     * BizParkingSpaceAreaActor
     * @param parkingLotId
     * @param sid
     * @param page
     * @param pageSize
     * @returns {Promise<ApiAppParking.ParkingSpaceStateVO[]>}
     */
    ['query-state-parkingSpace-list'](
      //
      parkingLotId: string,
      //
      sid: string,
      //
      page: number,
      //
      pageSize: number
    ): Promise<ApiAppParking.ParkingSpaceStateVO[]>;

    /**
     * 第一次获取车位状态数据
     * BizParkingSpaceAreaActor
     * @param parkingLotId
     * @param parkingLotRegionId
     * @returns {Promise<ApiAppParking.QueryParkingSpacePush>}
     */
    ['query-updateParkingSpacePush'](
      //
      parkingLotId: string,
      //
      parkingLotRegionId: string
    ): Promise<ApiAppParking.QueryParkingSpacePush>;

    /**
     * 获取的已配置的条件区域数据
     * BizAreaActor
     * @param parkingId
     * @returns {Promise<ApiAppParking.AreaConditionVO[]>}
     */
    ['queryAreaConditionVO'](
      //
      parkingId: string
    ): Promise<ApiAppParking.AreaConditionVO[]>;

    /**
     * 获取 地下停车场、露天停车场、路内停车场条数
     * BizParkingLotAreaActor
     * @param type
     * @returns {Promise<number>}
     */
    ['queryParkingTypeCount'](
      //
      type: string
    ): Promise<number>;

    /**
     * 车牌、车位查询
     * RealParkingSpaceActor
     * @param parkingLotId
     * @param searchText
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['realParkingSpace-carNum-parkingSpaceName-search'](
      //
      parkingLotId: string,
      //
      searchText: string,
      //
      page: number,
      //
      pageSize: number
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 校正车牌
     * RealParkingSpaceActor
     * @param carReleaseBO
     * @returns {Promise<ApiAppParking.RealParkingSpace>}
     */
    ['realParkingSpace-change-carNum'](
      //
      carReleaseBO: ApiAppParking.CarReleaseBO
    ): Promise<ApiAppParking.RealParkingSpace>;

    /**
     * 校正车牌检验车牌
     * RealParkingSpaceActor
     * @param carReleaseBO
     * @returns {Promise<any>}
     */
    ['realParkingSpace-change-carNum-check'](
      //
      carReleaseBO: ApiAppParking.CarReleaseBO
    ): Promise<any>;

    /**
     * 增加 realParkingSpace 数据
     * RealParkingSpaceActor
     * @param realParkingSpace
     * @returns {Promise<ApiAppParking.RealParkingSpace>}
     */
    ['realParkingSpace-create'](
      //
      realParkingSpace: ApiAppParking.RealParkingSpace
    ): Promise<ApiAppParking.RealParkingSpace>;

    /**
     * 获取单条 realParkingSpace 数据
     * RealParkingSpaceActor
     * @param id
     * @returns {Promise<ApiAppParking.RealParkingSpace>}
     */
    ['realParkingSpace-get'](
      //
      id: string
    ): Promise<ApiAppParking.RealParkingSpace>;

    /**
     * 获取所有 realParkingSpace 数据
     * RealParkingSpaceActor
     * @returns {Promise<ApiAppParking.RealParkingSpace[]>}
     */
    ['realParkingSpace-getAll'](): Promise<ApiAppParking.RealParkingSpace[]>;

    /**
     * 获取 RealParkingSpace 的表格总数信息
     * RealParkingSpaceActor
     * @param tid
     * @param realParkingSpace
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['realParkingSpace-grid-count'](
      //
      tid: string,
      //
      realParkingSpace: ApiAppParking.RealParkingSpace,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 RealParkingSpace 的表格列表数据
     * RealParkingSpaceActor
     * @param tid
     * @param realParkingSpace
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['realParkingSpace-grid-list'](
      //
      tid: string,
      //
      realParkingSpace: ApiAppParking.RealParkingSpace,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 realParkingSpace 的表格分页数据
     * RealParkingSpaceActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['realParkingSpace-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 realParkingSpace 的表格分页表头与总记录数
     * RealParkingSpaceActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['realParkingSpace-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 leaveParkingRecord 的表格分页数据
     * RealParkingSpaceActor
     * @param wrapper
     * @param searchText
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['realParkingSpace-search'](
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      searchText: string
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 realParkingSpace 的表格分页表头与总记录数
     * RealParkingSpaceActor
     * @param tid
     * @param wrapper
     * @param searchText
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['realParkingSpace-search-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      searchText: string,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 动态停车场信息-上线情况：各区域详情->接入总量
     * BizParkingLotActor
     * @param cityCode
     * @returns {Promise<ApiAppParking.ParkingLotOverview>}
     */
    ['region-total-access-get'](
      //
      cityCode: string
    ): Promise<ApiAppParking.ParkingLotOverview>;

    /**
     * 动态停车场信息-实时余位概况：余位
     * BizParkingLotActor
     * @param cityCode
     * @param region
     * @param parkingLotNature
     * @param parkingLotName
     * @returns {Promise<ApiAppParking.RemainingParkingVO>}
     */
    ['remaining-parking-get'](
      //
      cityCode: string,
      //
      region: string,
      //
      parkingLotNature: string,
      //
      parkingLotName: string
    ): Promise<ApiAppParking.RemainingParkingVO>;

    /**
     * 移除车场
     * BizParkingLotAreaActor
     * @param parkingId
     * @returns {Promise<number>}
     */
    ['remove-ParkingLot'](
      //
      parkingId: string
    ): Promise<number>;

    /**
     * 短信发送
     * SmsActor
     * @param smsPayload
     * @returns {Promise<boolean>}
     */
    ['sms-send'](
      //
      smsPayload: ApiAppParking.SmsPayload
    ): Promise<boolean>;

    /**
     * 短信验证
     * SmsActor
     * @param smsPayload
     * @returns {Promise<boolean>}
     */
    ['sms-verify'](
      //
      smsPayload: ApiAppParking.SmsPayload
    ): Promise<boolean>;

    /**
     * 增加 stopTimeRange 数据
     * StopTimeRangeActor
     * @param stopTimeRange
     * @returns {Promise<ApiAppParking.StopTimeRange>}
     */
    ['stopTimeRange-create'](
      //
      stopTimeRange: ApiAppParking.StopTimeRange
    ): Promise<ApiAppParking.StopTimeRange>;

    /**
     * 删除 stopTimeRange 数据
     * StopTimeRangeActor
     * @param id
     * @returns {Promise<number>}
     */
    ['stopTimeRange-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 stopTimeRange 数据
     * StopTimeRangeActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['stopTimeRange-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 stopTimeRange 数据
     * StopTimeRangeActor
     * @param id
     * @returns {Promise<ApiAppParking.StopTimeRange>}
     */
    ['stopTimeRange-get'](
      //
      id: string
    ): Promise<ApiAppParking.StopTimeRange>;

    /**
     * 获取所有 stopTimeRange 数据
     * StopTimeRangeActor
     * @returns {Promise<ApiAppParking.StopTimeRange[]>}
     */
    ['stopTimeRange-getAll'](): Promise<ApiAppParking.StopTimeRange[]>;

    /**
     * 获取 ParkingLotChargesRelation 的表格总数信息
     * StopTimeRangeActor
     * @param tid
     * @param stopTimeRange
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['stopTimeRange-grid-count'](
      //
      tid: string,
      //
      stopTimeRange: ApiAppParking.StopTimeRange,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ParkingLotChargesRelation 的表格列表数据
     * StopTimeRangeActor
     * @param tid
     * @param stopTimeRange
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['stopTimeRange-grid-list'](
      //
      tid: string,
      //
      stopTimeRange: ApiAppParking.StopTimeRange,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 ParkingLotChargesRelation 的表格分页数据
     * StopTimeRangeActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['stopTimeRange-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 stopTimeRange 数据
     * StopTimeRangeActor
     * @param stopTimeRange
     * @returns {Promise<number>}
     */
    ['stopTimeRange-update'](
      //
      stopTimeRange: ApiAppParking.StopTimeRange
    ): Promise<number>;

    /**
     * 增加系统菜单配置数据
     * SystemMenuConfigActor
     * @param data
     * @returns {Promise<ApiAppParking.SystemMenuConfig>}
     */
    ['system-menu-config-create'](
      //
      data: ApiAppParking.SystemMenuConfig
    ): Promise<ApiAppParking.SystemMenuConfig>;

    /**
     * 删除系统菜单配置数据
     * SystemMenuConfigActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['system-menu-config-delete'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 查询单个系统菜单配置对象
     * SystemMenuConfigActor
     * @param id
     * @returns {Promise<ApiAppParking.SystemMenuConfig>}
     */
    ['system-menu-config-getById'](
      //
      id: string
    ): Promise<ApiAppParking.SystemMenuConfig>;

    /**
     * 获取系统菜单配置表头
     * SystemMenuConfigActor
     * @param tid
     * @param systemClassify
     * @param systemClass
     * @param theirLanguage
     * @param searchText
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['system-menu-config-grid-count'](
      //
      tid: string,
      //
      systemClassify: string,
      //
      systemClass: string,
      //
      theirLanguage: string,
      //
      searchText: string
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取使用授权的表格列表数据
     * SystemMenuConfigActor
     * @param tid
     * @param systemClassify
     * @param systemClass
     * @param theirLanguage
     * @param searchText
     * @param orders
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['system-menu-config-grid-list'](
      //
      tid: string,
      //
      systemClassify: string,
      //
      systemClass: string,
      //
      theirLanguage: string,
      //
      searchText: string,
      //
      orders: any[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 修改系统菜单配置数据
     * SystemMenuConfigActor
     * @param data
     * @returns {Promise<ApiAppParking.SystemMenuConfig>}
     */
    ['system-menu-config-update'](
      //
      data: ApiAppParking.SystemMenuConfig
    ): Promise<ApiAppParking.SystemMenuConfig>;

    /**
     * 批量修改启动状态
     * BizParkingLotAreaActor
     * @param ids
     * @param enabled
     * @returns {Promise<ApiAppParking.ParkingLot[]>}
     */
    ['upEnabled'](
      //
      ids: string[],
      //
      enabled: boolean
    ): Promise<ApiAppParking.ParkingLot[]>;

    /**
     * 测试推送车位状态数据
     * BizParkingSpaceAreaActor
     * @param parkingSpaceId
     * @returns {Promise<ApiAppParking.UpdateParkingSpacePushVO>}
     */
    ['updateParkingSpacePush'](
      //
      parkingSpaceId: string
    ): Promise<ApiAppParking.UpdateParkingSpacePushVO>;

    /**
     * 上传保存的泊位图
     * BizAreaActor
     * @param areaId
     * @param berthFigureUrl
     * @returns {Promise<ApiAppParking.Area>}
     */
    ['uploadArea'](
      //
      areaId: string,
      //
      berthFigureUrl: string
    ): Promise<ApiAppParking.Area>;

    /**
     * 增加 用户 数据
     * UserActor
     * @param data
     * @returns {Promise<ApiAppParking.User>}
     */
    ['user-create'](
      //
      data: ApiAppParking.User
    ): Promise<ApiAppParking.User>;

    /**
     * 删除 用户 数据
     * UserActor
     * @param ids
     * @param oid
     * @returns {Promise<number>}
     */
    ['user-delete'](
      //
      ids: string[],
      //
      oid: string
    ): Promise<number>;

    /**
     * 获取单条用户数据
     * UserActor
     * @param id
     * @returns {Promise<ApiAppParking.User>}
     */
    ['user-get'](
      //
      id: string
    ): Promise<ApiAppParking.User>;

    /**
     * 获取所有用户数据
     * UserActor
     * @returns {Promise<ApiAppParking.User[]>}
     */
    ['user-getAll'](): Promise<ApiAppParking.User[]>;

    /**
     * 获取用户的表格总数信息
     * UserActor
     * @param user
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['user-grid-count'](
      //
      user: ApiAppParking.User
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取用户的表格列表数据
     * UserActor
     * @param user
     * @param orders
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['user-grid-list'](
      //
      user: ApiAppParking.User,
      //
      orders: any[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 编辑用户菜单配置数据
     * UserMenuConfigActor
     * @param data
     * @returns {Promise<ApiAppParking.UserMenuConfig>}
     */
    ['user-menu-config-edit'](
      //
      data: ApiAppParking.UserMenuConfig
    ): Promise<ApiAppParking.UserMenuConfig>;

    /**
     * 获取用户菜单配置数据
     * UserMenuConfigActor
     * @param address
     * @param userId
     * @returns {Promise<ApiAppParking.UserMenuConfig>}
     */
    ['user-menu-config-get'](
      //
      address: string,
      //
      userId: string
    ): Promise<ApiAppParking.UserMenuConfig>;

    /**
     * 获取机构下所有用户数据
     * UserActor
     * @param oid
     * @returns {Promise<any[]>}
     */
    ['user-orguser-datas-get'](
      //
      oid: string
    ): Promise<any[]>;

    /**
     * 获取用户的表格总数信息
     * UserActor
     * @param tid
     * @param oid
     * @param dId
     * @param key
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['user-people-select-count'](
      //
      tid: string,
      //
      oid: string,
      //
      dId: string,
      //
      key: string
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取用户的表格列表数据
     * UserActor
     * @param tid
     * @param orders
     * @param oid
     * @param dId
     * @param key
     * @returns {Promise<any[][]>}
     */
    ['user-people-select-list'](
      //
      tid: string,
      //
      orders: any[],
      //
      oid: string,
      //
      dId: string,
      //
      key: string
    ): Promise<any[][]>;

    /**
     * 更新 用户 数据
     * UserActor
     * @param data
     * @returns {Promise<ApiAppParking.User>}
     */
    ['user-update'](
      //
      data: ApiAppParking.User
    ): Promise<ApiAppParking.User>;

    /**
     * 删除机构数据时验证当前用户登录密码是否正确
     * UserActor
     * @param account
     * @param password
     * @returns {Promise<boolean>}
     */
    ['user-verify-pwd'](
      //
      account: string,
      //
      password: string
    ): Promise<boolean>;

    /**
     * 获取 User 的表格列表数据
     * UserActor
     * @param tid
     * @param user
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['user-vo-grid-list'](
      //
      tid: string,
      //
      user: ApiAppParking.User,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 City 的表格分页数据
     * UserActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['user-vo-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取所有用户停车场信息
     * UserParkingLotActor
     * @returns {Promise<any[]>}
     */
    ['userParkingLotActor-getList'](): Promise<any[]>;

    /**
     * 获取用户未关联的所有停车场
     * UserParkingLotActor
     * @param userId
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['userParkingLotActor-getUnRelationLot-page'](
      //
      userId: string,
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取用户未关联的所有停车场
     * UserParkingLotActor
     * @param userId
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['userParkingLotActor-getUnRelationLot-pageCount'](
      //
      userId: string,
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 分页获取信息
     * UserParkingLotActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['userParkingLotActor-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 分页获取信息
     * UserParkingLotActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['userParkingLotActor-pageCount'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 用户关联停车场
     * UserParkingLotActor
     * @param userId
     * @param parkingLotIds
     * @returns {Promise<number>}
     */
    ['userParkingLotActor-relatedUserAndParkingLots'](
      //
      userId: string,
      //
      parkingLotIds: string[]
    ): Promise<number>;

    /**
     * 解除用户停车场关联
     * UserParkingLotActor
     * @param userId
     * @param parkingLotIds
     * @returns {Promise<number>}
     */
    ['userParkingLotActor-relievedUserAndParkingLots'](
      //
      userId: string,
      //
      parkingLotIds: string[]
    ): Promise<number>;

    /**
     * 删除信息
     * UserReadLogActor
     * @param timeFrameType
     * @param msgTypes
     * @returns {Promise<number>}
     */
    ['userReadLogActor-deleteMsg'](
      //
      timeFrameType: string,
      //
      msgTypes: string[]
    ): Promise<number>;

    /**
     * 获取所有信息
     * UserReadLogActor
     * @returns {Promise<any[]>}
     */
    ['userReadLogActor-getList'](): Promise<any[]>;

    /**
     * 获取指定停车场所有信息
     * UserReadLogActor
     * @param parkingId
     * @returns {Promise<any[]>}
     */
    ['userReadLogActor-getListByParkingId'](
      //
      parkingId: string
    ): Promise<any[]>;

    /**
     * 分页获取信息
     * UserReadLogActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['userReadLogActor-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 分页获取总数信息
     * UserReadLogActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['userReadLogActor-pageCount'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 已读多条信息
     * UserReadLogActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['userReadLogActor-readList'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 已读一条信息
     * UserReadLogActor
     * @param id
     * @returns {Promise<number>}
     */
    ['userReadLogActor-readOne'](
      //
      id: string
    ): Promise<number>;

    /**
     * 增加车辆布控数据
     * VehicleControlActor
     * @param data
     * @returns {Promise<ApiAppParking.VehicleControl>}
     */
    ['vehicle-control-create'](
      //
      data: ApiAppParking.VehicleControl
    ): Promise<ApiAppParking.VehicleControl>;

    /**
     * 删除车辆布控数据
     * VehicleControlActor
     * @param id
     * @returns {Promise<number>}
     */
    ['vehicle-control-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除车辆布控数据
     * VehicleControlActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['vehicle-control-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取地图单条重点车辆监控数据
     * VehicleControlDetailActor
     * @param id
     * @returns {Promise<ApiAppParking.VehicleControlDetailDataRes>}
     */
    ['vehicle-control-detail-data-get'](
      //
      id: string
    ): Promise<ApiAppParking.VehicleControlDetailDataRes>;

    /**
     * 获取单条重点车辆监控详情数据
     * VehicleControlDetailActor
     * @param id
     * @returns {Promise<ApiAppParking.VehicleControlDetail>}
     */
    ['vehicle-control-detail-get'](
      //
      id: string
    ): Promise<ApiAppParking.VehicleControlDetail>;

    /**
     * 根据车牌查询重点车辆监控信息数据
     * VehicleControlDetailActor
     * @param carNumber
     * @returns {Promise<ApiAppParking.VehicleControlDetail>}
     */
    ['vehicle-control-detail-info-get'](
      //
      carNumber: string
    ): Promise<ApiAppParking.VehicleControlDetail>;

    /**
     * 获取所有重点车辆监控详情数据
     * VehicleControlDetailActor
     * @returns {Promise<ApiAppParking.VehicleControlDetail[]>}
     */
    ['vehicle-control-detail-list'](): Promise<
      ApiAppParking.VehicleControlDetail[]
    >;

    /**
     * 根据车牌查询重点车辆监控相关数量数据
     * VehicleControlDetailActor
     * @returns {Promise<ApiAppParking.VehicleControlInfoDetailDataRes>}
     */
    ['vehicle-control-detail-num-get'](): Promise<ApiAppParking.VehicleControlInfoDetailDataRes>;

    /**
     * 获取重点车辆监控详情表格分页数据
     * VehicleControlDetailActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['vehicle-control-detail-page-list'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取单条车辆布控数据
     * VehicleControlActor
     * @param id
     * @returns {Promise<ApiAppParking.VehicleControl>}
     */
    ['vehicle-control-get'](
      //
      id: string
    ): Promise<ApiAppParking.VehicleControl>;

    /**
     * 获取所有车辆布控数据
     * VehicleControlActor
     * @returns {Promise<ApiAppParking.VehicleControl[]>}
     */
    ['vehicle-control-getAll'](): Promise<ApiAppParking.VehicleControl[]>;

    /**
     * 获取车辆布控的表格总数信息
     * VehicleControlActor
     * @param tid
     * @param data
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['vehicle-control-grid-count'](
      //
      tid: string,
      //
      data: ApiAppParking.VehicleControl,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取车辆布控的表格列表数据
     * VehicleControlActor
     * @param tid
     * @param data
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['vehicle-control-grid-list'](
      //
      tid: string,
      //
      data: ApiAppParking.VehicleControl,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取车辆布控的表格分页数据
     * VehicleControlActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['vehicle-control-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取车辆布控的表格分页表头与总记录数
     * VehicleControlActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['vehicle-control-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新车辆布控数据
     * VehicleControlActor
     * @param data
     * @returns {Promise<ApiAppParking.VehicleControl>}
     */
    ['vehicle-control-update'](
      //
      data: ApiAppParking.VehicleControl
    ): Promise<ApiAppParking.VehicleControl>;

    /**
     * 查询车牌号
     * VehicleParkingController
     * @param authCode
     * @param carId
     * @param parkingId
     * @returns {Promise<ApiAppParking.AlipayVehicleQueryVO>}
     */
    ['vehicle-query'](
      //
      authCode: string,
      //
      carId: string,
      //
      parkingId: string
    ): Promise<ApiAppParking.AlipayVehicleQueryVO>;
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
  export type AccessRecords = {
    // id
    id?: string;
    // 流水号
    serialNumber?: string;
    // 车牌
    carPlate?: string;
    // 车场id
    parkingId?: string;
    // 进场客户端 id、设备 id（一体机id）
    entryDeviceId?: string;
    // 进场时间
    entryTime?: string;
    // 出场客户端 id、设备 id（一体机id）
    leaveDeviceId?: string;
    // 出场时间
    leaveTime?: string;
    // 付款时间
    payTime?: string;
    // 截止时间
    endTime?: string;
    // 是否付款
    pay?: boolean;
    // 是否同步
    entrySync?: boolean;
    // 是否同步
    leaveSync?: boolean;
    // 是否同步
    finished?: boolean;
    // 是否同步
    leaveNotice?: boolean;
    // 是否同步
    entryNotice?: boolean;
    // 入场处理方式
    entryHandlerType?: string;
    // 出场处理方式
    leaveHandlerType?: string;
    // 校正后车牌
    correctingCarPlate?: string;
    // 是否校正
    correcting?: boolean;
    // 创建时间
    createTime?: string;
    // 已付费用
    payMoney?: string;
    // 是否同步
    sync?: boolean;
    // 入场放行说明
    entryExplanation?: string;
    // 出场放行说明
    leaveExplanation?: string;
  };

  /**
   * 传入参数
   */
  export type AccessVehicle = {
    // 车辆出入信息表id
    id?: string;
    // 识别时间
    discerntime?: string;
    // 识别车牌
    carnum?: string;
    // 车牌颜色
    carcolour?: string;
    // 车辆类型
    type?: string;
    // 通道id
    channelid?: string;
    // 通道名称
    channelname?: string;
    // 停车时长
    stoptime?: string;
    // 计费金额
    money?: string;
    // 流水号
    runningid?: string;
  };

  /**
   * 传入参数
   */
  export type Account = {
    // 序号
    id?: string;
    // 用户id
    uid?: string;
    // 账号
    account?: string;
    // 登录密码
    password?: string;
    // 用户真实姓名
    name?: string;
    // 账号状态
    state?: string;
    // 加密密码的盐
    salt?: string;
    // 是否锁定
    locked?: boolean;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type AlibabaInterfaceInfoRespond = {
    // 参数固定值
    interfaceName?: string;
    // 小程序传入参数固定值类型
    interfaceType?: string;
    // 接口的调用地址url
    interfaceUrl?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayCarEnterInfoPayload = {
    // 支付宝停车场ID ，系统唯一
    parkingId?: string;
    // 车牌号
    carNumber?: string;
    // 车辆入场的时间，请保证服务器时间准确，入场时间不应晚于当前网络时间
    inTime?: string;
    // 车牌颜色，可选蓝-BLUE、绿-GREEN、黄-YELLOW、白-WHITE、黑-BLACK、黄绿色-LIMEGREEN
    carColor?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayCarExitInfoPayload = {
    // 支付宝停车场ID ，系统唯一
    parkingId?: string;
    // 车牌号
    carNumber?: string;
    // 车辆离场时间
    outTime?: string;
    // 车牌颜色，可选蓝-BLUE、绿-GREEN、黄-YELLOW、白-WHITE、黑-BLACK、黄绿色-LIMEGREEN
    carColor?: string;
    // 支付宝业务流水号
    serialNo?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayContributeDetailRespond = {
    // 出资方金额
    contributeAmount?: string;
    // 出资方类型，如品牌商出资、支付宝平台出资等
    contributeType?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayOperationPayload = {
    // productId
    productId?: string;
    // 订单名称，商家描述
    subject?: string;
    // 商品描述
    body?: string;
    // 总金额
    totalFee?: string;
    // 订单号(唯一)
    outTradeNo?: string;
    // 订单号(唯一)
    tradeNo?: string;
    // 发起人IP地址
    spbillCreateIp?: string;
    // 附件数据主要用于商户携带订单的自定义数据
    attach?: string;
    // 支付类型
    payType?: number;
    // 支付方式
    payWay?: number;
    // 前台回调地址  非扫码支付使用
    frontUrl?: string;
    // 标识一次退款请求，同一笔交易多次退款需要保证唯一。
    outRequestNo?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayParkingConfigSetPayload = {
    // 商户简称，由开发者提供
    merchantName?: string;
    // 商户客服电话
    merchantServicePhone?: string;
    // 签约支付宝账号
    accountNo?: string;
    // 商户在停车平台首页露出的LOGO
    merchantLogo?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayParkingConfigSetRespond = {
    // 商户简称，由开发者提供
    merchantName?: string;
    // 商户客服电话
    merchantServicePhone?: string;
    // 签约支付宝账号
    accountNo?: string;
    // 商户在停车平台首页露出的LOGO
    merchantLogo?: string;
    // 接口信息
    alibabaInterfaceInfoRespond?: ApiAppParking.AlibabaInterfaceInfoRespond;
  };

  /**
   * 传入参数
   */
  export type AlipayParkingLotPayload = {
    // 支付宝返回停车场id，新增不用填，修改必填
    parkingId?: string;
    // 服务商ID
    agentId?: string;
    // 是否支持电子发票，0-不支持，1支持
    isSupportInvoice?: string;
    // ISV电话，传入original_isv_pid、original_isv_appid时，此处为服务商电话
    isvMobile?: string;
    // 收款方ID（2088开头的16位纯数字），由停车场收款的业主方提供给ISV，该字段暂用于机具和物料申领,必选
    mchntId?: string;
    // ISV的APPID,服务商调用必传，由ISV提供给服务商
    originalIsvAppid?: string;
    // ISV电话 此值与isv_mobile组合使用
    originalIsvMobile?: string;
    // 商户在停车平台露出的停车价格图片
    parkingFeeDescriptionImg?: string;
    // ISV的名称，服务商调用必传，由ISV提供给服务商
    originalIsvName?: string;
    // ISV的PID 服务商调用必传 由ISV提供给服务商
    originalIsvPid?: string;
    // ISV停车场ID,必选
    outParkingId?: string;
    // 收费说明
    parkingFeeDescription?: string;
    // 停车场类型,必选
    parkingLotType?: string;
    // 停车场名称,必选
    parkingName?: string;
    // 高德地图唯一标识,必选
    parkingPoiid?: string;
    // 停车场客服电话,必选
    parkingMobile?: string;
    // 该参数废弃
    paymentMode?: string;
    // 商圈id
    shopingmallId?: string;
    // 支付方式（1为支付宝在线缴费，2为支付宝代扣缴费，3当面付)，如支持多种方式以','进行间隔,必选
    payType?: string;
    // 停车场车位数
    sumSpace?: string;
    // 是否支持先离后付, Y-支持，N-不支持，默认为空不支持，此参数适用于签约信用代扣的商户
    supportAfterPay?: string;
    // 用户支付未离场的超时时间(以分钟为单位)，例如：15,就是设置超时时间未15分钟
    timeOut?: string;
    // 停车场地址，必选
    parkingAddress?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayParkingLotQueryPayload = {
    // 支付宝返回停车场id，新增不用填，修改必填
    parkingId?: string;
    // ISV停车场ID,必选
    outParkingId?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayParkingLotRespond = {
    // 支付宝返回停车场id，新增不用填，修改必填
    parkingId?: string;
    // 服务商ID
    agentId?: string;
    // 收款方ID（2088开头的16位纯数字），由停车场收款的业主方提供给ISV，该字段暂用于机具和物料申领,必选
    mchntId?: string;
    // ISV停车场ID,必选
    outParkingId?: string;
    // 停车场地址，必选
    parkingAddress?: string;
    // 收费说明
    parkingFeeDescription?: string;
    // 商户在停车平台露出的停车价格图片
    parkingFeeDescriptionImg?: string;
    // 停车场类型,必选
    parkingLotType?: string;
    // 停车场客服电话,必选
    parkingMobile?: string;
    // 停车场名称,必选
    parkingName?: string;
    // 高德地图唯一标识,必选
    parkingPoiid?: string;
    // 停车场位置经度（优先高德坐标获取结果）
    parkingLatitude?: string;
    // 停车场位置经度（优先高德坐标获取结果）
    parkingLongitude?: string;
    // 支付方式（1为支付宝在线缴费，2为支付宝代扣缴费，3当面付)，如支持多种方式以','进行间隔,必选
    payType?: string;
    // 省份编码
    provinceId?: string;
    // 商圈id
    shopingmallId?: string;
    // 用户支付未离场的超时时间(以分钟为单位)
    timeOut?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayTradeCreatePayload = {
    // 商户订单号,64个字符以内、只能包含字母、数字、下划线；需保证在商户端不重复
    outTradeNo?: string;
    // 订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]如果同时传入了【打折金额】，【不可打折金额】，【订单总金额】三者，则必须满足如下条件：【订单总金额】=【打折金额】+【不可打折金额】
    totalAmount?: string;
    // 买家的支付宝唯一用户号（2088开头的16位纯数字）
    buyerId?: string;
    // 商品标题/交易标题/订单标题/订单关键字等，比如 Iphone6 16G 手机。注意：不可使用特殊字符，如 /，=，& 等。
    subject?: string;
    // 对交易或商品的描述,比如Iphone6 16G 256G 黑色
    body?: string;
    // 支付授权码，25~30开头的长度为16~24位的数字，实际字符串长度以开发者获取的付款码长度为准
    authCode?: string;
    // 卖家提供的跳转url,离开支付页面后所跳转的url
    url?: string;
    // 该笔订单允许的最晚付款时间，逾期将关闭交易。取值范围：1m～15d。m-分钟，h-小时，d-天，1c-当天（1c-当天的情况下，无论交易何时创建，都在0点关闭）。 该参数数值不接受小数点， 如 1.5h，可转换为 90m。
    timeoutExpress?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayTradePayRespond = {
    // 支付宝店铺编号
    advanceAmount?: string;
    // 异步支付模式，目前有五种值：ASYNC_DELAY_PAY(异步延时付款);ASYNC_REALTIME_PAY(异步准实时付款);SYNC_DIRECT_PAY(同步直接扣款);NORMAL_ASYNC_PAY(纯异步付款);QUOTA_OCCUPYIED_ASYNC_PAY(异步支付并且预占了先享后付额度);
    asyncPaymentMode?: string;
    // 买家支付宝账号
    buyerLogonId?: string;
    // 预授权支付模式，该参数仅在信用预授权支付场景下返回。信用预授权支付：CREDIT_PREAUTH_PAY
    authTradePayMode?: string;
    // 商户传入业务信息，具体值要和支付宝约定将商户传入信息分发给相应系统，应用于安全，营销等参数直传场景格式为json格式
    businessParams?: string;
    // 买家实付金额，单位为元，两位小数。该金额代表该笔交易买家实际支付的金额，不包含商户折扣等金额
    buyerPayAmount?: string;
    // 买家在支付宝的用户id
    buyerUserId?: string;
    // 买家用户类型。CORPORATE:企业用户；PRIVATE:个人用户。
    buyerUserType?: string;
    // 买家名称；买家为个人用户时为买家姓名，买家为企业用户时为企默认不返回该信息，需与支付宝约定后配置返回；
    buyerUserName?: string;
    // 支付宝卡余额
    cardBalance?: string;
    // 该笔交易针对收款方的收费金额；默认不返回该信息，需与支付宝约定后配置返回；
    chargeAmount?: string;
    // 费率活动标识，当交易享受活动优惠费率时，返回该活动的标识；默认不返回该信息，需与支付宝约定后配置返回；可能的返回值列表：蓝海活动标识：bluesea_1
    chargeFlags?: string;
    // 平台优惠金额
    discountAmount?: string;
    // 本次交易支付所使用的单品券优惠的商品优惠信息。只有在query_options中指定时才返回该字段信息。
    discountGoodsDetail?: string;
    // 交易支付时间
    gmtPayment?: string;
    // 交易中用户支付的可开具发票的金额，单位为元，两位小数。该金额代表该笔交易中可以给用户开具发票的金额
    invoiceAmount?: string;
    // 商家优惠金额
    mdiscountAmount?: string;
    // 积分支付的金额，单位为元，两位小数。该金额代表该笔交易中用户使用积分支付的金额，比如集分宝或者支付宝实时优惠等
    pointAmount?: string;
    // 买家支付宝用户号，该字段将废弃，不要使用
    openId?: string;
    // 支付币种订单金额
    payAmount?: string;
    // 商家订单号
    outTradeNo?: string;
    // 订单支付币种
    payCurrency?: string;
    // 结算币种订单金额
    settleAmount?: string;
    // 订单结算币种，对应支付接口传入的se支持英镑：GBP、港币：HKD、美元韩元：KRW、泰铢：THB、瑞士法郎IDR、菲律宾比索：PHP、毛里求斯捷克克朗：CZK、南非兰特：ZAR
    settleCurrency?: string;
    // 实收金额，单位为元，两位小数。该金额为本笔交易，商户账户能够实际收到的金额
    receiptAmount?: string;
    // 结算币种兑换标价币种汇率
    settleTransRate?: string;
    // 支付清算编号，用于清算对账使用；只在银行间联交易场景下返回该信息；
    settlementId?: string;
    // 请求交易支付中的商户店铺的名称
    storeName?: string;
    // 交易的订单金额，单位为元，两位小数。该参数的值为支付时传入的total_amount
    totalAmount?: string;
    // 支付宝交易号
    tradeNo?: string;
    // 标价币种，该参数的值为支付时传入的trans_currency，支持英镑：GBP、港币：HKD、美元：USD、新加坡元：SGD、日元：JPY、加拿大元：CAD、澳元：AUD、欧元：EUR、新西兰元：NZD、韩元：KRW、泰铢：THB、瑞士法郎：CHF、瑞典克朗：SEK、丹麦克朗：DKK、挪威克朗：NOK、马来西亚林吉特：MYR、印尼卢比：IDR、菲律宾比索：PHP、毛里求斯卢比：MUR、以色列新谢克尔：ILS、斯里兰卡卢比：LKR、俄罗斯卢布：RUB、阿联酋迪拉姆：AED、捷克克朗：CZK、南非兰特：ZAR、人民币：CNY、新台币：TWD。当trans_currency 和 settle_currency 不一致时，trans_currency支持人民币：CNY、新台币：TWD
    transCurrency?: string;
    // 标价币种兑换支付币种汇率
    transPayRate?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayTradeQueryPayload = {
    // 银行间联模式下有用，其它场景请不要使用，双联通过该参数指定需要查询的交易所属收单机构的pid
    orgPid?: string;
    // 订单支付时传入的商户订单号，和支付宝交易号不能同时为空
    outTradeNo?: string;
    // 查询选项，商户通过上送该参数来定制同步需要额外返回的信息字段,目前不支持
    queryOptions?: string[];
    // 支付宝交易号，和商户订单号不能同时为空
    tradeNo?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayTradeQueryRespond = {
    // 支付宝店铺编号
    alipayStoreId?: string;
    // 间连商户在支付宝端的商户编号
    alipaySubMerchantId?: string;
    // 预授权支付模式，该参数仅在信用预授权支付场景下返回。信用预授权支付：CREDIT_PREAUTH_PAY
    authTradePayMode?: string;
    // 订单描述;只在间连场景下返回；
    body?: string;
    // 买家支付宝账号
    buyerLogonId?: string;
    // 买家实付金额，单位为元，两位小数。该金额代表该笔交易买家实际支付的金额，不包含商户折扣等金额
    buyerPayAmount?: string;
    // 买家在支付宝的用户id
    buyerUserId?: string;
    // 买家名称；买家为个人用户时为买家姓名，买家为企业用户时为企默认不返回该信息，需与支付宝约定后配置返回；
    buyerUserName?: string;
    // 买家用户类型。CORPORATE:企业用户；PRIVATE:个人用户。
    buyerUserType?: string;
    // 该笔交易针对收款方的收费金额；默认不返回该信息，需与支付宝约定后配置返回；
    chargeAmount?: string;
    // 费率活动标识，当交易享受活动优惠费率时，返回该活动的标识；默认不返回该信息，需与支付宝约定后配置返回；可能的返回值列表：蓝海活动标识：bluesea_1
    chargeFlags?: string;
    // 平台优惠金额
    discountAmount?: string;
    // 本次交易支付所使用的单品券优惠的商品优惠信息。只有在query_options中指定时才返回该字段信息。
    discountGoodsDetail?: string;
    // 交易额外信息，特殊场景下与支付宝约定返回。json格式。
    extInfos?: string;
    // 行业特殊信息（例如在医保卡支付业务中，向用户返回医疗信息）。
    industrySepcDetail?: string;
    // 交易中用户支付的可开具发票的金额，单位为元，两位小数。该金额代表该笔交易中可以给用户开具发票的金额
    invoiceAmount?: string;
    // 商家优惠金额
    mdiscountAmount?: string;
    // 买家支付宝用户号，该字段将废弃，不要使用
    openId?: string;
    // 商家订单号
    outTradeNo?: string;
    // 支付币种订单金额
    payAmount?: string;
    // 订单支付币种
    payCurrency?: string;
    // 积分支付的金额，单位为元，两位小数。该金额代表该笔交易中用户使用积分支付的金额，比如集分宝或者支付宝实时优惠等
    pointAmount?: string;
    // 实收金额，单位为元，两位小数。该金额为本笔交易，商户账户能够实际收到的金额
    receiptAmount?: string;
    // 本次交易打款给卖家的时间
    sendPayDate?: string;
    // 结算币种订单金额
    settleAmount?: string;
    // 订单结算币种，对应支付接口传入的se支持英镑：GBP、港币：HKD、美元韩元：KRW、泰铢：THB、瑞士法郎IDR、菲律宾比索：PHP、毛里求斯捷克克朗：CZK、南非兰特：ZAR
    settleCurrency?: string;
    // 结算币种兑换标价币种汇率
    settleTransRate?: string;
    // 支付清算编号，用于清算对账使用；只在银行间联交易场景下返回该信息；
    settlementId?: string;
    // 商户门店编号
    storeId?: string;
    // 请求交易支付中的商户店铺的名称
    storeName?: string;
    // 订单标题；只在间连场景下返回；
    subject?: string;
    // 商户机具终端编号
    terminalId?: string;
    // 交易的订单金额，单位为元，两位小数。该参数的值为支付时传入的total_amount
    totalAmount?: string;
    // 支付宝交易号
    tradeNo?: string;
    // 交易状态：WAIT_BUYER_PAY（交易创建，等待买家付款）、TRADE_CLOSED（未付款交易超时TRADE_SUCCESS（交易支付成功）、TRADE_FINISHED（交易结束，不可退款）
    tradeStatus?: string;
    // 标价币种，该参数的值为支付时传入的trans_currency，支持英镑：GBP、港币：HKD、美元：USD、新加坡元：SGD、日元：JPY、加拿大元：CAD、澳元：AUD、欧元：EUR、新西兰元：NZD、韩元：KRW、泰铢：THB、瑞士法郎：CHF、瑞典克朗：SEK、丹麦克朗：DKK、挪威克朗：NOK、马来西亚林吉特：MYR、印尼卢比：IDR、菲律宾比索：PHP、毛里求斯卢比：MUR、以色列新谢克尔：ILS、斯里兰卡卢比：LKR、俄罗斯卢布：RUB、阿联酋迪拉姆：AED、捷克克朗：CZK、南非兰特：ZAR、人民币：CNY、新台币：TWD。当trans_currency 和 settle_currency 不一致时，trans_currency支持人民币：CNY、新台币：TWD
    transCurrency?: string;
    // 标价币种兑换支付币种汇率
    transPayRate?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayVehicleQueryVO = {
    // 车牌号
    carNum?: string;
    // 用户id
    userId?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayVoucherDetailRespond = {
    // 优惠券面额，它应该会等于商家出资加上其他出资方出资
    amount?: string;
    // 券id
    id?: string;
    // 优惠券备注信息
    memo?: string;
    // 商家出资（特指发起交易的商家出资金额）
    merchantContribute?: string;
    // 券名称
    name?: string;
    // 其他出资方出资金额，可能是支付宝，可能是品牌商，或者其他方，也可能是他们的一起出资
    otherContribute?: string;
    // 支付宝店铺编号
    otherContributeDetail?: ApiAppParking.AlipayContributeDetailRespond[];
    // 如果使用的这张券是用户购买的，则该字段代表用户在购买这张券时平台优惠的金额
    purchaseAntContribute?: string;
    // 如果使用的这张券是用户购买的，则该字段代表用户在购买这张券时用户实际付款的金额
    purchaseBuyerContribute?: string;
    // 如果使用的这张券是用户购买的，则该字段代表用户在购买这张券时商户优惠的金额
    purchaseMerchantContribute?: string;
    // 券模板id
    templateId?: string;
    // 券类型，如：ALIPAY_FIX_VOUCHER - 全场代金券ALIPAY_DISCOUNT_VOUCHER - 折扣券ALIPAY_ITEM_VOUCHER - 单品优惠券ALIPAY_CASH_VOUCHER - 现金抵价券ALIPAY_BIZ_VOUCHER - 商家全场券注：不排除将来新增其他类型的可能，商家接入时注意兼容性避免硬编码
    type?: string;
  };

  /**
   * 传入参数
   */
  export type AlipayvehicleQueryPayload = {
    // 授权码
    code?: string;
    // 授权方式1.authorization_code，表示换取使用用户授权码code换取授权令牌access_token。2.refresh_token，表示使用refresh_token刷新获取新授权令牌。
    grantType?: string;
    // 支付宝用户车辆ID，系统唯一。（该参数会在停车平台用户点击查询缴费，跳转到ISV停车缴费查询页面时，从请求中传递
    carId?: string;
  };

  /**
   * 传入参数
   */
  export type Area = {
    // 车位区域
    id?: string;
    // 分组编号
    groupingId?: number;
    // 车场id
    parkingId?: string;
    // 父id
    pid?: string;
    // 名称
    areaName?: string;
    // 拖拉之后生成的图片
    picture?: string;
    // 泊位图
    berthFigureUrl?: string;
    // 泊位图的key
    berthFigureKey?: ApiAppParking.AreaType[];
    // 备注
    remark?: string;
    // 车位缩放
    zoom?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type AreaConditionVO = {
    // 车位区域
    id?: string;
    // 名称
    areaName?: string;
    // pid
    pid?: string;
  };

  /**
   * 传入参数
   */
  export type AreaFloorVo = {
    // 楼层标识
    code?: string;
    // 楼层名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type AreaRendering = {
    // 唯一标识
    id?: string;
    // 区域名称
    areaName?: string;
    // 省份编码
    provinceCode?: string;
    // 市区编码
    cityCode?: string;
    // 区域编码
    districtCode?: string;
    // 背景颜色
    backgroundColor?: string;
    // 边框颜色
    frameColor?: string;
    // 坐标组
    coordinateGroup?: string;
    // 车场数量
    parkingCount?: number;
    // 是否完成绘制
    complete?: boolean;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type AreaType = {
    // id
    id?: string;
    // 车位编号
    sid?: string;
    // id
    key?: string;
    // 组
    group?: string;
    // 角度
    angle?: number;
    // 类型
    type?: string;
    // key
    pos?: string;
  };

  /**
   * 传入参数
   */
  export type AreaTypeVO = {
    // id
    id?: string;
    // id
    key?: string;
    // 车位编号
    sid?: string;
    // 角度
    angle?: number;
    // 组
    group?: string;
    // key
    pos?: string;
    // 类型
    type?: string;
    // 状态
    state?: number;
    // 设备在线状态，1在线 2不在线 0未知
    netStatus?: number;
  };

  /**
   * 传入参数
   */
  export type Attendance = {
    // 序号
    id?: string;
    // 机构序号
    oid?: string;
    // 打卡人员帐号
    userAccount?: string;
    // 打卡时间
    attendanceDate?: string;
    // 状态
    type?: number;
    // ctime
    ctime?: string;
    // etime
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type AttendanceSettings = {
    // 序号
    id?: string;
    // 上班时间
    beginDate?: string;
    // 下班时间
    finishDate?: string;
    // 启动
    enabled?: boolean;
    // ctime
    ctime?: string;
    // etime
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type AttendanceVO = {
    // 序号
    id?: string;
    // 机构序号
    oid?: string;
    // 机构序号
    orgName?: string;
    // 打卡人员帐号
    userAccount?: string;
    // 打卡时间
    attendanceDate?: string;
    // 状态
    type?: number;
  };

  /**
   * 传入参数
   */
  export type BackUpInfo = {
    // 标识列
    id?: string;
    // 业务标识
    sid?: string;
    // 升级包编号
    packageName?: string;
    // 升级包路径
    path?: string;
    // 包大小
    size?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type BasicMenuGrid = {
    // 菜单名称
    name?: string;
    // 菜单标识
    code?: string;
    // 菜单页面类型
    menuPageType?: string;
    // 菜单页面数据
    menuPageData?: string;
    // 启用此菜单项
    enabled?: boolean;
    // 设值顺序
    seq?: number;
    // 菜单选项
    menuOption?: string;
    // 菜单图标
    menuIcon?: string;
    // 菜单项可见
    visibled?: boolean;
    // 在菜单树内默认展开
    defaultOpened?: boolean;
    // 说明文字
    desc?: string;
    // 附加选项
    appendOption?: string;
    // 菜单项序号
    id?: string;
    // 系统菜单配置序号
    smcId?: string;
    // 父节点菜单序号
    pid?: string;
  };

  /**
   * 传入参数
   */
  export type BasicMenuLevelOrderReq = {
    // 序号
    id?: string;
    // 父节点序号
    pid?: string;
    // 设值顺序
    seq?: number;
  };

  /**
   * 传入参数
   */
  export type BasicMenuLoginSpecifySelect = {
    // 菜单项序号
    id?: string;
    // 菜单父节点序号
    pid?: string;
    // 菜单名称
    name?: string;
    // 菜单标识
    code?: string;
    // 设值顺序
    seq?: number;
  };

  /**
   * 传入参数
   */
  export type BasicSystemMenu = {
    // 菜单项序号
    id?: string;
    // 系统菜单配置序号
    smcId?: string;
    // 父节点序号
    pid?: string;
    // 菜单名称
    name?: string;
    // 菜单标识
    code?: string;
    // 菜单页面类型
    menuPageType?: string;
    // 菜单页面数据
    menuPageData?: string;
    // 菜单选项
    menuOption?: string;
    // 启用此菜单项
    enabled?: boolean;
    // 菜单图标
    menuIcon?: string;
    // 设值顺序
    seq?: number;
    // 菜单项可见
    visibled?: boolean;
    // 在菜单树内默认展开
    defaultOpened?: boolean;
    // 附加选项
    appendOption?: string;
    // 说明文字
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type BasicsEntity = {
    // 创建人id
    creatorId?: string;
    // 更新人id
    updatePersonId?: string;
    // 更新人名称
    updateBy?: string;
    // 创建时间
    ctime?: string;
    // 真正的创建时间
    createTime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type CalculationParkingChargesPayload = {
    // 车场id
    parkingLotId?: string;
    // 车牌号
    carLicense?: string;
    // 车类型---大型车，小型车，中型车，电动车，单车
    carType?: string;
    // 车牌类型：必传
    carNumType?: string;
    // 进场时间
    entryTime?: string;
    // 出场时间
    leavingTime?: string;
    // 免费时间，单位分钟
    freeParkingTime?: string;
    // 规则信息,上限部分
    upperRulesMap?: { [key: string]: ApiAppParking.ParkingLotChargesRule[] };
    // 停车时长重置方式 1：每天0点，2：每24小时
    resetStopTime?: string;
    // 停车时长
    stopTimeLong?: number;
    // 停车时间列表
    stopTimeRanges?: ApiAppParking.StopTimeRange[];
  };

  /**
   * 传入参数
   */
  export type CalculationRecordVO = {
    // 主键，创建为空，更新必传
    id?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 单次请求的唯一id
    uniqueNo?: string;
    // 订单号
    orderId?: string;
    // 停车流水号
    serialNumber?: string;
    // 支付订单状态
    payCode?: string;
    // 未付费用
    money?: string;
    // 已付费用
    payMoney?: string;
    // 基础策略
    basicsStrategyRelation?: ApiAppParking.ParkingLotChargingStrategyRelation;
    // 收费规则信息
    useTimeFrame?: ApiAppParking.RuleTimeFrameVO[];
  };

  /**
   * 传入参数
   */
  export type CarReleaseBO = {
    // 流水号
    serialNumber?: string;
    // 费用记录id
    uniqueNo?: string;
    // 识别的车牌号
    carLicense?: string;
    // 车场id
    parkingLotId?: string;
    // 设备id
    deviceId?: string;
    // 放行类型
    handlerType?: string;
    // 现金支付金额
    amount?: string;
    // 出场还是入场，true:入场,false:出场
    entry?: boolean;
    // 校正后的车牌号
    correctingCarLicense?: string;
    // 校正后的车辆类型
    correctingBizCarType?: string;
    // 是否校正
    correcting?: boolean;
    // 解释
    explanation?: string;
    // 是否app
    app?: boolean;
  };

  /**
   * 传入参数
   */
  export type ChargeAmount = {
    // id
    id?: string;
    // 车场id
    parkingLotId?: string;
    // 省份编码
    provinceCode?: string;
    // 城市编码
    cityCode?: string;
    // 区域编码
    districtCode?: string;
    // 计费金额
    billingAmount?: number;
    // 优惠金额
    discount?: number;
    // 支付优惠
    payDiscount?: number;
    // 应付金额
    amountsPayable?: number;
    // 实付金额
    amountActuallyPaid?: number;
    // 退款金额
    refundAmount?: number;
    // 车场类别
    type?: string;
    // 车场性质
    nature?: string;
    // 创建时间
    createTime?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ChargesCalculationPayload = {
    // 车场id
    parkingLotId?: string;
    // 车牌号
    carLicense?: string;
    // 自有订单号
    orderNum?: string;
    // 进场时间
    entryTime?: string;
    // 出场时间
    leavingTime?: string;
    // 策略信息
    parkingLotChargingStrategy?: ApiAppParking.ParkingLotChargingStrategy[];
    // 规则信息
    parkingLotChargesRules?: ApiAppParking.ParkingLotChargesRule[];
    // 规则信息,收费规则部分
    chargeRulesMap?: { [key: string]: ApiAppParking.ParkingLotChargesRule[] };
    // 规则信息,上限部分
    upperRulesMap?: { [key: string]: ApiAppParking.ParkingLotChargesRule[] };
    // 停车时间列表
    stopTimeRanges?: ApiAppParking.StopTimeRange[];
    // 免费时间，单位分钟
    freeParkingTime?: string;
    // 付费后，超时离场
    timeOut?: string;
    // 停车时长重置方式 1：每天0点，2：每24小时
    resetType?: string;
    // 设置重置时间,resetStopTime=1
    resetTime?: string;
    // 设置停车时长,按照停车时间进行重置,resetStopTime=2
    stopResetTime?: string;
    // 收费规则
    useTimeFrame?: ApiAppParking.RuleTimeFrameVO[];
    // 上限信息
    upperStrategy?: ApiAppParking.ParkingLotChargingStrategyRelation;
    // 上限规则
    upperRule?: ApiAppParking.ParkingLotChargesRule[];
    // 策略id和策略明细
    relationMap?: {
      [key: string]: ApiAppParking.ParkingLotChargingStrategyRelation;
    };
    // 策略和规则关系
    relationRuleMap?: { [key: string]: ApiAppParking.ParkingLotChargesRule[] };
    // 会员信息
    parkingWhitelist?: ApiAppParking.ParkingWhitelist;
  };

  /**
   * 传入参数
   */
  export type ChargesRuleSyncVO = {
    // 规则
    parkingLotChargesRule?: ApiAppParking.ParkingLotChargesRule;
    // 车场和计费规则关系
    parkingLotChargingRelation?: ApiAppParking.ParkingLotChargingRelation;
    // 策略和车场关系表
    parkingLotChargingStrategyRelation?: ApiAppParking.ParkingLotChargingStrategyRelation;
    // 策略和车场关系表
    strategyRelations?: ApiAppParking.ParkingLotChargingStrategyRelation[];
    // 策略
    parkingLotChargingStrategy?: ApiAppParking.ParkingLotChargingStrategy;
    // 策略明细
    strategyDetails?: ApiAppParking.ParkingLotChargingStrategyDetail[];
    // 明细
    details?: ApiAppParking.StopTimeRange[];
    // 操作
    operationType?: string;
    // ids主键
    id?: string;
    // ids主键
    ids?: string[];
    // 车场id
    parkingId?: string;
    // 消息类型
    messageType?: string;
  };

  /**
   * 传入参数
   */
  export type ChargingRulesVO = {
    // 策略名称
    strategyName?: string;
    // 按次收费
    chargingRulesVo?: ApiAppParking.QueryParkingLotChargesRuleVO[];
    // 按时段收费
    timeFrame?: ApiAppParking.QueryParkingLotChargesRuleVO[];
  };

  /**
   * 传入参数
   */
  export type ChargingStrategyVO = {
    // 主键，创建为空，更新必传
    id?: string;
    // 策略主要内容
    parkingLotChargingStrategy?: ApiAppParking.ParkingLotChargingStrategy;
    // 节假日明细数据
    holidayDetails?: ApiAppParking.ParkingLotChargingStrategyDetail[];
    // 日期明细数据
    dateDetails?: ApiAppParking.ParkingLotChargingStrategyDetail[];
  };

  /**
   * 传入参数
   */
  export type CheckPriceVO = {
    // 停车流水号
    serialNumber?: string;
    // 单次请求的唯一id
    uniqueNo?: string;
  };

  /**
   * 传入参数
   */
  export type ChinaDate = {
    // 主键，创建为空，更新必传
    id?: string;
    // 公历时间
    solarDate?: string;
    // 公历时间,方便查询,小于明天代表是这一范围内
    solarEndDate?: string;
    // 公历时间---年月日
    solarStr?: string;
    // 农历日
    lunar?: string;
    // 公历日 --- 一个月里面的第几天
    solar?: number;
    // 是否是 休息日
    isRestDay?: boolean;
    // 是否是 节假日
    isHoliday?: boolean;
    // 节假日名称
    vacationName?: string;
    // 是否是 工作日
    isWorkFlag?: boolean;
    // 是否是 星期六
    isSaturday?: boolean;
    // 是否是 星期日
    isSunday?: boolean;
    // 星期几
    dayOfWeek?: number;
    // 年份
    year?: number;
    // 月份
    month?: number;
    // 客户端同步状态:0不需要进行同步到本地客户端，1未同步，2同步成功
    clientSync?: string;
    // 客户端同步状态:0不需要进行同步到云端，1未同步，2同步成功
    serverSync?: string;
  };

  /**
   * 传入参数
   */
  export type City = {
    // id
    id?: string;
    // 编码
    code?: string;
    // 父级编码
    pcode?: string;
    // 区域名称
    regionName?: string;
    // 拼音
    pinyin?: string;
    // 经度
    lng?: string;
    // 纬度
    lat?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 连成线的坐标组
    coordinates?: string;
  };

  /**
   * 传入参数
   */
  export type CityCarNumber = {
    // id
    id?: string;
    // 省份
    province?: string;
    // 省份编码
    provinceCode?: string;
    // 城市
    city?: string;
    // 父编码
    pcode?: string;
    // 编码
    code?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type CityCoordinateVO = {
    // 唯一标识
    code?: string;
    // 区名
    regionName?: string;
    // 坐标组
    coordinates?: string;
  };

  /**
   * 传入参数
   */
  export type CityLicenseNumber = {
    // id
    id?: string;
    // 省份
    province?: string;
    // 省份简称
    shortName?: string;
    // 城市编号
    cityNum?: string;
    // 名称
    licenseName?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type CityVO = {
    // id
    id?: string;
    // 编码
    code?: string;
    // 父级编码
    pcode?: string;
    // 区域名称
    regionName?: string;
    // 拼音
    pinyin?: string;
    // 额外属性
    deptName?: string;
  };

  /**
   * 传入参数
   */
  export type CommutingConfiguration = {
    // 唯一标识
    id?: string;
    // 机构id
    oid?: string;
    // 关联账号
    userAccount?: string;
    // 姓名
    userName?: string;
    // 通勤日期
    commutingTime?: string;
    // 上班时间
    startTime?: string;
    // 下班时间
    endTime?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type Consumer = {
    // id
    id?: string;
    // 用户名称
    username?: string;
    // 运营商id
    operatorid?: string;
    // 车场id
    parkinglotid?: string;
    // 车场名称
    parkinglotname?: string;
    // 车场区域id
    parkinglotregionid?: string;
    // 车场区域名称
    parkinglotregionname?: string;
    // 移动电话
    mobilephone?: string;
    // 车牌号
    carlicense?: string;
    // 是否是固定车位 0不是 1是
    stalltype?: number;
    // 联系地址
    address?: string;
    // 余额
    balance?: string;
    // 用户类型 0车场管理员 1一般用户 2超级管理员 3车场运维人员 4运营方
    userType?: number;
    // 邮箱地址
    email?: string;
    // 钉钉号
    dingTalk?: string;
    // 微信号
    weChat?: string;
    // 是否推送
    push?: boolean;
    // 推送时间段
    pushTime?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type DeleteVO = {
    // 策略Id
    strategyId?: string;
    // 规则主键
    ruleIds?: string[];
    // 类型
    chargingType?: string;
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
  export type DeployEnumVO = {
    // 是否部署标识
    code?: string;
    // 是否部署名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceGeomagnetism = {
    // 地磁设备ID序号
    id?: string;
    // 设备ID（从电信平台返回的设备ID,设备ID唯一）
    deviceId?: string;
    // 地磁设备序列号
    serialNo?: string;
    // 设备名称
    name?: string;
    // imei号（设备IMSI总长度不可超过15位，使用0~9的数字,不能修改）
    imei?: string;
    // 设备型号
    deviceModel?: string;
    // 设备状态 0.已注册 1.已激活 2.已注销 3-未注册
    deviceStatus?: number;
    // 是否订阅,0.自动订阅1.取消自动订阅 （默认自动订阅）
    autoObserver?: number;
    // 设备在线状态，1在线 2不在线 0未知
    netStatus?: number;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 创建人
    createBy?: string;
    // 修改人
    updateBy?: string;
    // 设备最近通信时间
    onlineAt?: string;
    // 设备最后下线时间
    offlineAt?: string;
    // 是否同步（同步到电信平台，deviceId为null，表示未同步）
    sync?: boolean;
    // 停车场ID （关联ParkingLot表的主键）
    parkingId?: string;
    // 车位ID （关联 ParkingSpace表的主键）
    parkingSpaceId?: string;
    // 组ID （区块，停车场属于哪一层 对应表的主键ID）
    groupId?: string;
    // 停车场编号 （关联ParkingLot表中的编号）
    parkingNumber?: number;
    // 车位编号 （关联 ParkingSpace表中的编号）
    parkingSpaceNumber?: string;
    // 分组编号 （区块，停车场属于哪一层 对应表的分组编号）
    groupNumber?: number;
    // 地磁设备车位状态 ，0-无车 1-有车 2-未知
    parkingStatus?: number;
    // 地磁电压 （单位：V）
    u?: number;
    // 电量报警 （0 正常，1 电量低报警）
    batterylow?: number;
    // 信号质量值。需要除以10得到最终数据。数值越大越好，低于90时网络差。
    rsrp?: number;
    // 信号质量（0 正常，1 一般，2 信号质量低报警）
    quality?: number;
  };

  /**
   * 传入参数
   */
  export type DeviceGeomagnetismLog = {
    // 地磁设备日志序号
    id?: string;
    // 停车场ID
    parkingId?: string;
    // 车位ID
    parkingSpaceId?: string;
    // 设备ID（地磁设备表主键ID）
    geId?: string;
    // 进出场时间（进场时间/出场时间 根据车位状态来确定）
    entryExitTime?: string;
    // 地磁设备车位状态 ，0-无车 1-有车 2-未知
    parkingStatus?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceHighCamera = {
    // 高位相机设备ID序号
    id?: string;
    // 停车场ID（关联ParkingLot表的主键）
    parkingId?: string;
    // 高位相机id
    deviceId?: string;
    // 设备型号
    deviceModel?: string;
    // 设备名称
    deviceName?: string;
    // 设备IP，可选
    deviceIp?: string;
    // 设备Mac，可选
    deviceMac?: string;
    // 设备状态（在线，离线）
    deviceStatus?: string;
    // 设备最后活动时间
    deviceActive?: string;
    // 设备注册时间
    deviceSignUp?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 是否绑定
    bind?: boolean;
    // 用户创建的AccessKey ID
    accessKeyId?: string;
    // 用户创建的AccessKey Secret
    accessKeySecret?: string;
    // 臻云极致地址，默认地址为：https://www.vzicar.com
    endpoint?: string;
    // 设备sn编码
    sn?: string;
    // 视频格式（flv、hls），推荐使用flv
    vtype?: string;
    // 出入口名称
    entranceAndExitName?: string;
    // 类型(EntranceAndExitType)
    type?: string;
    // RTSP流地址
    rtsp?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceInfoVO = {
    // 停车场id
    parkingLotId?: string;
    // 出入口id
    entranceAndExitId?: string;
    // 出入口名称
    entranceAndExitName?: string;
    // 出入口类型
    entranceAndExitType?: string;
    // 通道id
    passageWayId?: string;
    // 通道名称
    passageWayName?: string;
    // 设备id
    equipmentId?: string;
    // 设备名称
    equipmentName?: string;
    // RTSP流地址
    rtsp?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceOneMachine = {
    // 一体机设备ID序号
    id?: string;
    // 停车场ID （关联ParkingLot表的主键）
    parkingId?: string;
    // 一体机id
    deviceId?: string;
    // 设备型号
    deviceModel?: string;
    // 设备名称
    deviceName?: string;
    // 设备Ip、可选
    deviceIp?: string;
    // 设备Mac、可选
    deviceMac?: string;
    // 设备状态（在线、离线
    deviceStatus?: string;
    // 设备最后活动时间
    deviceActive?: string;
    // 设备注册时间
    deviceSignUp?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 是否绑定
    bind?: boolean;
    // 用户创建的AccessKey ID
    accessKeyId?: string;
    // 用户创建的AccessKey Secret
    accessKeySecret?: string;
    // 臻云极致地址，默认地址为：https://www.vzicar.com
    endpoint?: string;
    // 设备sn编码
    sn?: string;
    // 视频格式（flv、hls），推荐使用flv
    vtype?: string;
    // 出入口名称
    entranceAndExitName?: string;
    // 类型(EntranceAndExitType)
    type?: string;
    // RTSP流地址
    rtsp?: string;
  };

  /**
   * 传入参数
   */
  export type DistrictVehicleRoute = {
    // id
    id?: string;
    // 起始车场城市代码
    sCityCode?: string;
    // 起始车场城市
    sCity?: string;
    // 起始车场区域代码
    sDistrictCode?: string;
    // 起始车场区域
    sDistrict?: string;
    // 中心经度
    sLng?: number;
    // 中心纬度
    sLat?: number;
    // 终点车场城市代码
    eCityCode?: string;
    // 终点车场城市
    eCity?: string;
    // 终点车场区域代码
    eDistrictCode?: string;
    // 终点车场区域
    eDistrict?: string;
    // 终点中心经度
    eLng?: number;
    // 终点中心纬度
    eLat?: number;
    // 终点车场停车时间
    etime?: string;
    // 路数
    total?: number;
  };

  /**
   * 传入参数
   */
  export type DynamicParking = {
    // 标识列
    id?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type EntranceAndExit = {
    // 标识列
    id?: string;
    // 车厂id
    parkinglotId?: string;
    // 出入口名称
    entranceAndExitName?: string;
    // 通道数量
    passageWayNum?: number;
    // 允许通过车型
    carType?: string;
    // 默认车型
    defaultCarType?: string;
    // 是否启用
    enabled?: boolean;
    // 描述
    desc?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type EntranceAndExitNameVO = {};

  /**
   * 传入参数
   */
  export type EntryExitStatisticsRes = {
    // 区域编号
    districtCode?: string;
    // 区域
    district?: string;
    // 进场次数
    inTotal?: number;
    // 出场次数
    outTotal?: number;
  };

  /**
   * 传入参数
   */
  export type EntryPayload = {
    // 入场时间
    entryTime?: string;
    // 入场设备id
    entryEquipmentId?: string;
    // 入场处理类型(HandlerTypeEnum)
    entryHandlerType?: string;
    // 入场识别类型
    entryRecognitionType?: string;
    // 入场识别类型
    entryExplanation?: string;
    // 车牌颜色
    color?: string;
    // 车牌类型
    carType?: string;
    // 动力类型
    powerType?: string;
    // 车辆大小类型
    carSizeType?: string;
    // 是否为默认的车辆类型
    defaultCarSizeType?: boolean;
    // 车牌归属地类型
    carLicenseType?: string;
    // 车位类型
    parkingSpaceType?: string;
    // 车主类型
    carOwnerType?: string;
    // 车主id
    carOwnerId?: string;
    // 车主姓名
    carOwnerName?: string;
    // 车主电话
    carOwnerPhone?: string;
    // 备注
    remark?: string;
    // 类名
    handlerClassName?: string;
    // 流程名称
    flowName?: string;
    // 流程类型
    flowType?: string;
    // 流程是否成功,初始值为null,出异常设置成false
    flowSuccess?: boolean;
    // 当前时间
    now?: string;
    // 是否入场
    entry?: boolean;
    // 流水号
    serialNumber?: string;
    // 车牌
    carNum?: string;
    // 本地系统图片
    nativePic?: string;
    // 云平台图片
    remotePic?: string;
    // 停车场对象
    parkingLot?: ApiAppParking.ParkingLot;
    // 车位对象
    parkingSpace?: ApiAppParking.ParkingSpace;
    // 车位对象是否需要同步
    parkingSpaceNeedSync?: boolean;
    // IOT停车记录对象
    accessRecords?: ApiAppParking.AccessRecords;
    // 识别记录
    recognitionRecords?: ApiAppParking.RecognitionRecords;
    // 出入口
    entranceAndExit?: ApiAppParking.EntranceAndExit;
    // 实时停车记录对象
    realParkingSpace?: ApiAppParking.RealParkingSpace;
    // 停车记录对象
    parkingRecord?: ApiAppParking.ParkingRecord;
    // 订单对象
    parkingOrder?: ApiAppParking.ParkingOrder;
    // 离场信息
    leaveParkingRecord?: ApiAppParking.LeaveParkingRecord;
  };

  /**
   * 传入参数
   */
  export type EnumVO = {
    // 枚举键值对
    enumMap?: { [key: string]: string };
  };

  /**
   * 传入参数
   */
  export type EventMethodRecord = {
    // id
    id?: string;
    // 流水号
    serialNumber?: string;
    // 执行类的类名
    className?: string;
    // 执行类的方法名
    methodName?: string;
    // 执行类的方法的参数类型
    methodParamClassName?: string;
    // 执行类的方法的参数转成的json数据
    methodParamJson?: string;
    // 执行完成
    success?: boolean;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type GeomagnetismRecord = {
    // 标识列
    id?: string;
    // 上传状态：0未上传，1已上传；
    isTransfer?: boolean;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type GetParkingRecordData = {
    // 车场名称
    parkingLotName?: string;
    // 热点
    hotspot?: number;
    // 进场
    entryCount?: number;
    // 出场
    leavingCount?: number;
  };

  /**
   * 传入参数
   */
  export type GetParticularsVO = {
    // 车牌号
    carLicense?: string;
    // 停车时长
    stopTime?: string;
    // 设备在线状态，1在线 2不在线 0未知
    netStatus?: number;
    // 地磁设备车位状态 ，0-无车 1-有车 2-未知
    parkingStatus?: number;
    // 地磁电量:
    electric?: number;
    // 进场时间
    entryTime?: string;
    // 出场时间
    leavingTime?: string;
    // 进场图片
    entryPic?: string;
    // 出场图片
    leavingPic?: string;
  };

  /**
   * 传入参数
   */
  export type H5PayPayload = {};

  /**
   * 传入参数
   */
  export type HotspotCountVO = {
    // 车场名称
    parkingLotName?: string;
    // 昨天热点
    yesterdayHotspot?: number;
    // 今天热点
    todayHotspot?: number;
    // 停车位总数
    parkingSpaceNum?: number;
  };

  /**
   * 传入参数
   */
  export type InterfaceSelect = {
    // 租户系统菜单id
    id?: string;
    // 租户系统菜单name
    name?: string;
    // 应用系统code
    code?: string;
    // 系统地址
    systemAddress?: string;
  };

  /**
   * 传入参数
   */
  export type JsApiOrderVO = {
    // 阿里订单号
    aliTradeNo?: string;
    // 微信响应类
    wechatPayJsApiResponse?: ApiAppParking.WechatPayJsApiResponse;
    // 支付机构
    type?: string;
    // 支付状态
    payState?: string;
  };

  /**
   * 传入参数
   */
  export type LeaveParkingRecord = {
    // 标识列
    id?: string;
    // 车场id
    parkingLotId?: string;
    // 车位id
    parkingSpaceId?: string;
    // 停车位置
    parkingSpaceName?: string;
    // 流水号
    serialNumber?: string;
    // 车牌号
    carNum?: string;
    // 车牌颜色
    carLicenseColor?: string;
    // 车主类型
    carOwnerType?: string;
    // 车辆类型
    carType?: string;
    // 车牌类型
    carLicenseType?: string;
    // 进场时间
    entryTime?: string;
    // 进场通道
    entryChannel?: string;
    // 进场通道id
    entryChannelId?: string;
    // 离场时间
    leaveTime?: string;
    // 离场通道
    leaveChannel?: string;
    // 离场通道
    leaveChannelId?: string;
    // 入场方式
    entryType?: string;
    // 出场方式
    leaveType?: string;
    // 停车时长
    longTime?: number;
    // 应收金额
    actualAmount?: string;
    // 优惠金额
    discount?: string;
    // 实收金额
    realAmount?: string;
    // 支付状态
    payStatus?: string;
    // 付款方式
    payType?: string;
    // 付款时间
    payTime?: string;
    // 第三方订单id
    thirdPartyOrderId?: string;
    // 入场图片
    entryPic?: string;
    // 出场图片
    leavePic?: string;
    // 修改时间
    etime?: string;
    // 创建时间
    ctime?: string;
    // 校正前车牌
    beforeCorrectingCarPlate?: string;
    // 是否校正
    correcting?: boolean;
    // 初始车牌号
    originalCarPlate?: string;
    // 是否同步
    sync?: boolean;
    // 入场解释
    entryExplanation?: string;
    // 出场解释
    leaveExplanation?: string;
    // 缴费类型:PaymentTypeEnum
    paymentType?: string;
    // 是否启用
    enabled?: boolean;
    // 支付次数
    paymentFrequency?: number;
    // 总金额
    totalAmount?: string;
    // 是否为默认的车辆类型
    defaultCarSizeType?: boolean;
  };

  /**
   * 传入参数
   */
  export type LeavePayload = {
    // 订单对象
    parkingOrders?: ApiAppParking.ParkingOrder[];
    // 入场时间
    entryTime?: string;
    // 出场时间
    leaveTime?: string;
    // 出场设备id
    leaveDeviceId?: string;
    // 出场方式
    leaveType?: string;
    // 出场说明
    leaveExplanation?: string;
    // 类名
    handlerClassName?: string;
    // 流程名称
    flowName?: string;
    // 流程类型
    flowType?: string;
    // 流程是否成功,初始值为null,出异常设置成false
    flowSuccess?: boolean;
    // 当前时间
    now?: string;
    // 是否入场
    entry?: boolean;
    // 流水号
    serialNumber?: string;
    // 车牌
    carNum?: string;
    // 本地系统图片
    nativePic?: string;
    // 云平台图片
    remotePic?: string;
    // 停车场对象
    parkingLot?: ApiAppParking.ParkingLot;
    // 车位对象
    parkingSpace?: ApiAppParking.ParkingSpace;
    // 车位对象是否需要同步
    parkingSpaceNeedSync?: boolean;
    // IOT停车记录对象
    accessRecords?: ApiAppParking.AccessRecords;
    // 识别记录
    recognitionRecords?: ApiAppParking.RecognitionRecords;
    // 出入口
    entranceAndExit?: ApiAppParking.EntranceAndExit;
    // 实时停车记录对象
    realParkingSpace?: ApiAppParking.RealParkingSpace;
    // 停车记录对象
    parkingRecord?: ApiAppParking.ParkingRecord;
    // 订单对象
    parkingOrder?: ApiAppParking.ParkingOrder;
    // 离场信息
    leaveParkingRecord?: ApiAppParking.LeaveParkingRecord;
  };

  /**
   * 传入参数
   */
  export type Location = {
    // 类型
    type?: string;
    // x,y坐标
    coordinates?: number[];
  };

  /**
   * 传入参数
   */
  export type Manufacturer = {
    // 标识列
    id?: string;
    // 厂商名称
    manuName?: string;
    // 省份编码
    provinceCode?: string;
    // 城市编码
    cityCode?: string;
    // 区域编码
    districtCode?: string;
    // 详细地址
    address?: string;
    // 接入日期
    cutInDate?: string;
    // 备注
    remarks?: string;
    // 启动
    enabled?: boolean;
    // 联系人
    contact?: string;
    // 电话
    phone?: string;
    // 传真
    faxes?: string;
    // 邮箱
    email?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ManufacturerPageVO = {
    // 标识列
    id?: string;
    // 厂商名称
    manuName?: string;
    // 省份
    province?: string;
    // 城市
    city?: string;
    // 所在区域
    district?: string;
    // 详细地址
    address?: string;
    // 接入车场数
    parkingLotCount?: number;
    // 联系人
    contact?: string;
    // 电话
    phone?: string;
    // 传真
    faxes?: string;
    // 邮箱
    email?: string;
    // 启动
    enabled?: boolean;
    // 接入日期
    cutInDate?: string;
    // 备注
    remarks?: string;
  };

  /**
   * 传入参数
   */
  export type NativeOrderVO = {
    // 支付宝二维码
    aliQrCode?: string;
    // 微信二维码
    wechatQrCode?: string;
  };

  /**
   * 传入参数
   */
  export type OdAreaConfig = {
    // 序号
    id?: string;
    // 配置名称
    configName?: string;
    // 省份编码
    provinceCode?: string;
    // 市区编码
    cityCode?: string;
    // 区域编码
    districtCode?: string;
    // 省份
    province?: string;
    // 市区
    city?: string;
    // 区域
    district?: string;
    // 背景颜色
    backgroundColor?: string;
    // 边框颜色
    frameColor?: string;
    // 多边形
    coordinates?: string;
    // 描述
    desc?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 创建人
    creatorName?: string;
    // 是否启用
    enabled?: boolean;
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
    users?: any[];
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
    departments?: any[];
    // 组织架构/部门下的用户数据集合
    structureUsers?: any[];
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
    // 所在国家地区代码
    dcode?: number;
    // 是否启用
    enabled?: boolean;
    // 部门数量
    depts?: number;
    // 用户数量
    users?: number;
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
  export type ParkedVehicles = {
    // 标识列
    id?: string;
    // 车场id
    parkingLotId?: string;
    // 车场名称
    parkingLotName?: string;
    // 车场类别
    type?: string;
    // 本地/外地车
    carLicenseType?: string;
    // 动力类型
    powerType?: string;
    // 车场性质
    nature?: string;
    // 省份编码
    provinceCode?: string;
    // 城市编码
    cityCode?: string;
    // 区域编码
    districtCode?: string;
    // 在停车辆数
    total?: number;
    // 时间
    createTime?: string;
    // 创建日期
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingBlackList = {
    // 列标识
    id?: string;
    // 车场id
    parkinglotId?: string;
    // 车牌号码
    carNum?: string;
    // 原因
    reason?: string;
    // 创建人id
    creatorId?: string;
    // 创建人姓名
    creatorName?: string;
    // 更新人id
    updatePersonId?: string;
    // 更新人姓名
    updateBy?: string;
    // 是否启用
    enabled?: boolean;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingChargesCalculationRecord = {
    // 主键，创建为空，更新必传
    id?: string;
    // 单次请求的唯一id
    uniqueNo?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 停车流水号
    serialNumber?: string;
    // 订单号
    orderId?: string;
    // 支付订单状态
    payCode?: string;
    // 订单金额
    orderAmount?: string;
    // 优惠金额
    discount?: string;
    // 总时长，单位分钟
    duration?: number;
    // 总时长，单位秒
    durationSecond?: number;
    // 车场id
    parkingLotId?: string;
    // 车牌
    carNum?: string;
    // 计费时间
    calcTime?: string;
    // 未付费用
    money?: string;
    // 已付费用
    payMoney?: string;
    // 客户端数据同步到云服务，同步状态:0不需要进行同步，1未同步，2同步成功
    syncToServer?: boolean;
    // 云服务数据同步到客户端，同步状态:0不需要进行同步，1未同步，2同步成功
    syncToClient?: boolean;
    // 订单信息
    parkingOrders?: ApiAppParking.ParkingOrder[];
    // 停车记录
    parkingRecord?: ApiAppParking.ParkingRecord;
    // 停车场
    parkingLot?: ApiAppParking.ParkingLot;
    // 规则信息
    parkingLotChargesRules?: ApiAppParking.ParkingLotChargesRule[];
    // 会员信息
    parkingWhiteList?: ApiAppParking.ParkingWhitelist[];
    // 停车时间列表
    stopTimeRanges?: ApiAppParking.StopTimeRange[];
    // 收费规则信息
    useTimeFrame?: ApiAppParking.RuleTimeFrameVO[];
    // 基础策略
    basicsStrategyRelation?: ApiAppParking.ParkingLotChargingStrategyRelation;
  };

  /**
   * 传入参数
   */
  export type ParkingChargesVO = {
    // 车场id
    parkingLotId?: string;
    // 车牌号
    carLicense?: string;
    // 车类型---大型车，小型车，中型车，电动车，单车
    carType?: string;
    // 车牌类型：必传
    carNumType?: string;
    // 费用，单位元，保留两位小数
    charges?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingEnumVO = {
    // 枚举键值对
    enumMap?: { [key: string]: string };
    // 枚举键值对
    IntegerEnumMap?: { [key: number]: string };
  };

  /**
   * 传入参数
   */
  export type ParkingEventDTO = {
    // 停车流水号
    serialNumber?: string;
    // 车牌
    carPlate?: string;
    // 车场id
    parkingId?: string;
    // 客户端id
    deviceId?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingLot = {
    // 标识列
    id?: string;
    // 车场编号
    sid?: number;
    // 车场名称
    parkingLotName?: string;
    // 车场类别
    type?: string;
    // 车场性质
    nature?: string;
    // 车场区域id
    regionId?: number;
    // 车场区域名称
    regionName?: string;
    // 运营方id
    operatorId?: string;
    // 运营方名称---接入厂商
    operatorName?: string;
    // 停车场客服电话,必选
    parkingMobile?: string;
    // 支付方式（1为支付宝在线缴费，2为支付宝代扣缴费，3当面付)，如支持多种方式以','进行间隔,必选
    alipayType?: string;
    // 支付宝返回停车场id，新增不用填，修改必填
    aliParkingId?: string;
    // 是否已经同步阿里停车场
    aliParkingSyncState?: string;
    // 是否需要同步阿里停车场
    needSyncToAli?: string;
    // 支付宝收款方ID（2088开头的16位纯数字），由停车场收款的业主方提供给ISV，该字段暂用于机具和物料申领
    aliMchntId?: string;
    // 车场地址名称
    addressName?: string;
    // 停车位总数
    parkingSpaceNum?: number;
    // 剩余车位
    remainingParkingSpaceNum?: number;
    // 固定车位数
    immobilizationCount?: number;
    // 固定车剩余
    immobilizationRemainCount?: number;
    // 临时车位数
    temporaryCount?: number;
    // 临时车剩余
    temporaryRemainCount?: number;
    // 备用车位数
    freeCount?: number;
    // 备用车剩余
    freeRemainCount?: number;
    // 策略数量
    strategyCount?: number;
    // 策略名称
    strategyName?: string;
    // 创建人id
    creatorId?: number;
    // 创建人名称
    creatorName?: string;
    // 更新人id
    updatePersonId?: number;
    // 更新人名称
    updateBy?: string;
    // 支付后未离场超时时间，单位分钟:不设置默认不会超时
    timeOut?: string;
    // 免费时间，单位分钟
    freeParkingTime?: string;
    // 停车时长重置方式 1：每天0点，2：每24小时
    resetStopTime?: string;
    // 设置停车免费时长,重置时间
    setTime?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 到期时间---接入到期时间
    expireTime?: string;
    // 规则应用时间
    ruleApplyTime?: string;
    // 是否已上线
    isOnline?: number;
    // 在线状态
    onlineState?: number;
    // 省份编码
    provinceCode?: string;
    // 城市编码
    cityCode?: string;
    // 区域编码
    districtCode?: string;
    // 街道编码
    streetCode?: string;
    // 省份
    province?: string;
    // 城市
    city?: string;
    // 区域
    district?: string;
    // 街道
    street?: string;
    // 高德地图唯一标识
    parkingPoiid?: string;
    // 部署状态 默认为false
    deploy?: boolean;
    // 停车场图片
    parkingLotUrl?: string;
    // 经度
    lng?: number;
    // 纬度
    lat?: number;
    // 经纬度
    location?: ApiAppParking.Location;
    // 启动
    enabled?: boolean;
    // 是否存在本地系统
    nativeSystemExist?: boolean;
  };

  /**
   * 传入参数
   */
  export type ParkingLotAreaVO = {
    // 标识列
    id?: string;
    // 车场名称
    parkingLotName?: string;
    // 部署状态 默认为false
    deploy?: boolean;
    // 经度
    lng?: number;
    // 纬度
    lat?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotChargesRule = {
    // 主键，创建为空，更新必传
    id?: string;
    // 车场id：必传
    parkingId?: string;
    // 策略Id：必传
    parkingLotChargingStrategyId?: string;
    // 策略名称
    strategyName?: string;
    // 类型：必传 1：是收费规则  2：上限规则
    type?: string;
    // 车辆类型
    carType?: string;
    // 车辆大小类型
    carSizeType?: string;
    // 车牌类型：必传
    carNumType?: string;
    // 收费类型
    chargingType?: string;
    // 是否使用时间段，TRUE是的，FALSE不是的
    timeQuantum?: boolean;
    // 收费时间段开始
    chargeableBeginTime?: string;
    // 收费时间段结束
    chargeableEndTime?: string;
    // 周期时间长度，小时部分，分钟和小时累加为总时长
    periodTimeForHour?: number;
    // 周期时间长度，分钟部分
    periodTimeForMin?: number;
    // 停车时长开始数值
    stopTimeSta?: number;
    // 停车时长开始数值：单位
    stopTimeStaUnit?: string;
    // 停车时长结束数值
    stopTimeEnd?: number;
    // 停车时长结束数值：单位
    stopTimeEndUnit?: string;
    // 结束时间是否无限长度
    stopTimeLong?: boolean;
    // 计算模式
    formulaMode?: string;
    // 周期时间长度
    periodTime?: number;
    // 周期时间长度：单位
    periodTimeUnit?: string;
    // 价格---每分钟，价格---每小时，价格---天,按照收费类型来确定保留2位小数
    price?: number;
    // 规则描述
    describe?: string;
    // 对应原型的是否二次计费
    chargeTimes?: boolean;
    // 这个规则这次计费累计计算费用
    accumulationPrice?: number;
    // 这个规则这次计费累计时长
    accumulativeTimeLong?: number;
    // 这个规则这次计费最高总费用
    accumulativePriceTotal?: number;
    // 按照工作日或者星期几不同进行不同费用计算，开始日期
    dayOfWeekSta?: number;
    // 按照工作日或者星期几不同进行不同费用计算，结束日期
    dayOfWeekEnd?: number;
    // 使用结束时间
    endTime?: string;
    // 关系流水ID，每次应用车场和策略关系记录一个
    relationSerialNum?: string;
    // 使用中
    inUse?: boolean;
    // 旧数据
    oldData?: boolean;
    // 创建人id
    creatorId?: string;
    // 创建人名称
    creatorName?: string;
    // 更新人id
    updatePersonId?: string;
    // 更新人名称
    updateBy?: string;
    // 创建时间
    ctime?: string;
    // 真正的创建时间
    createTime?: string;
    // 真正的修改时间
    updateTime?: string;
    // 更新时间
    etime?: string;
    // 客户端同步状态:0不需要进行同步到本地客户端，1未同步，2同步成功
    clientSync?: string;
    // 客户端同步状态:0不需要进行同步到云端，1未同步，2同步成功
    serverSync?: string;
    // 规则等级
    chargingTypeGrade?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingLotChargesRuleBillingVO = {
    // 免费时间，单位分钟
    freeParkingTime?: string;
    // 价格---每分钟，价格---天,按照收费类型来确定保留2位小数
    price?: number;
    // 按照停车时长收钱 type 2时长小于1小时每小时多少钱，1-3小时，3-6小时固定收费多少钱停车时长开始时间
    stopTimeSta?: number;
    // 按照停车时长收钱 type 2时长小于1小时每小时多少钱，1-3小时，3-6小时固定收费多少钱停车时长结束时间
    stopTimeEnd?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotChargesRuleVO = {
    // 主键，创建为空，更新必传
    id?: string;
    // 类型：必传 1：是收费规则  2：上限规则
    type?: string;
    // 收费类型
    chargingType?: string;
    // 规则
    parkingLotChargesRule?: ApiAppParking.ParkingLotChargesRule;
    // 停车时间列表
    stopTimeRange?: ApiAppParking.StopTimeRange[];
  };

  /**
   * 传入参数
   */
  export type ParkingLotChargingRelation = {
    // 主键，创建为空，更新必传
    id?: string;
    // 车场Id：必传
    parkingLotId?: string;
    // 策略Id：必传
    parkingLotChargesRuleId?: string;
    // 关系流水ID，每次应用车场和策略关系记录一个
    relationSerialNum?: string;
    // 使用结束时间
    endTime?: string;
    // 是否使用中
    inUse?: boolean;
    // 旧数据
    oldData?: boolean;
    // 客户端同步状态:0不需要进行同步到云端，1未同步，2同步成功
    serverSync?: string;
    // 客户端同步状态:0不需要进行同步到本地客户端，1未同步，2同步成功
    clientSync?: string;
    // 更新人id
    updatePersonId?: string;
    // 更新人名称
    updateBy?: string;
    // 真正的创建时间
    createTime?: string;
    // 创建人id
    creatorId?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingLotChargingStrategy = {
    // 主键，创建为空，更新必传
    id?: string;
    // 策略名称
    strategyName?: string;
    // 策略类型
    strategyType?: string;
    // 节假日条件
    holidayOrWeekendCondition?: string;
    // 具体条件 临时,每年，星期，日期这些
    holidayOrWeekendConditionDetail?: string;
    // 日期条件
    dateCondition?: string;
    // 具体条件 临时,每年，星期，日期这些
    dateConditionDetail?: string;
    // 等级
    grade?: number;
    // 车场数量
    parkingLotCount?: number;
    // 按次数收费规则数量
    timeCount?: number;
    // 规则数量
    count?: number;
    // 分段收费规则数量
    subsectionCount?: number;
    // 上限数量
    upperLimitCount?: number;
    // 备注，描述
    describe?: string;
    // 免费时间，单位分钟
    freeParkingTime?: string;
    // 支付后未离场超时时间，单位分钟:不设置默认不会超时
    timeOut?: string;
    // 停车时长重置方式  0不重置,  1：每天X点, 2：每XX小时
    resetType?: string;
    // 设置停车时长,按照停车时间进行重置,resetStopTime=2
    stopResetTime?: string;
    // 设置重置时间,resetStopTime=1
    resetTime?: string;
    // 是否选择
    isSelect?: boolean;
    // 是否使用中
    inUse?: boolean;
    // 服务端端同步状态:0不需要进行同步到云端，1未同步，2同步成功
    serverSync?: string;
    // 客户端同步状态:0不需要进行同步到本地客户端，1未同步，2同步成功
    clientSync?: string;
    // 旧数据
    oldData?: boolean;
    // 创建人id
    creatorId?: string;
    // 更新人id
    updatePersonId?: string;
    // 更新人名称
    updateBy?: string;
    // 创建时间
    ctime?: string;
    // 真正的创建时间
    createTime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingLotChargingStrategyDetail = {
    // 主键，创建为空，更新必传
    id?: string;
    // 策略Id
    parkingLotChargingStrategyId?: string;
    // 策略和车场关系id
    parkingLotStrategyRelationId?: string;
    // 等级
    grade?: number;
    // 车场Id：必传
    parkingLotId?: string;
    // 父级条件，节假日，日期
    conditionParent?: string;
    // 具体条件 临时,每年，星期，日期这些
    conditionDetail?: string;
    // 星期几和节假日id
    dayOfWeekAndHolidayId?: number;
    // 临时条件开始日期，具体时间
    dateSta?: string;
    // 临时条件结束日期，具体时间
    dateEnd?: string;
    // 开始日期，几月几号
    monthSta?: number;
    // 开始日期，几月几号
    dayOfMonthSta?: number;
    // 2020计算得出的时间毫秒值
    timeSta?: number;
    // 开始日期，几月几号
    dateCharSta?: string;
    // 开始日期，几月几号
    monthEnd?: number;
    // 2020计算得出的时间毫秒值
    dayOfMonthEnd?: number;
    // 开始日期，几月几号
    timeEnd?: number;
    // 更新时间
    etime?: string;
    // 开始日期，几月几号
    dateCharEnd?: string;
    // 客户端同步状态:0不需要进行同步到本地客户端，1未同步，2同步成功
    clientSync?: string;
    // 创建时间
    ctime?: string;
    // 服务端端同步状态:0不需要进行同步到云端，1未同步，2同步成功
    serverSync?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingLotChargingStrategyRelation = {
    // 主键，创建为空，更新必传
    id?: string;
    // 策略Id：必传
    parkingLotChargingStrategyId?: string;
    // 车场Id
    parkingLotId?: string;
    // 是否使用中
    inUse?: boolean;
    // 旧数据
    oldData?: boolean;
    // 使用结束时间
    endTime?: string;
    // 关系流水ID，每次应用车场和策略关系记录一个
    relationSerialNum?: string;
    // 策略名称
    strategyName?: string;
    // 收费规则id
    ruleIds?: string[];
    // 策略条件明细id
    detailIds?: string[];
    // 策略类型,（基础--免费时间之类的,收费---具体收费规则）
    strategyType?: string;
    // 日期条件
    dateCondition?: string;
    // 具体条件 临时,每年，星期，日期这些
    dateConditionDetail?: string;
    // 节假日条件
    holidayOrWeekendCondition?: string;
    // 具体条件 临时,每年，星期，日期这些
    holidayOrWeekendConditionDetail?: string;
    // 等级
    grade?: number;
    // 按次数收费规则数量
    timeCount?: number;
    // 分段收费规则数量
    subsectionCount?: number;
    // 规则数量
    count?: number;
    // 车场数量
    parkingLotCount?: number;
    // 上限数量
    upperLimitCount?: number;
    // 备注，描述
    describe?: string;
    // 支付后未离场超时时间，单位分钟:不设置默认不会超时
    timeOut?: string;
    // 免费时间，单位分钟
    freeParkingTime?: string;
    // 停车时长重置方式  0不重置,  1：每天0点, 2：每24小时
    resetType?: string;
    // 设置重置时间
    resetTime?: string;
    // 设置停车时长,重置时间
    stopResetTime?: string;
    // 客户端同步状态:0不需要进行同步到本地客户端，1未同步，2同步成功
    clientSync?: string;
    // 客户端同步状态:0不需要进行同步到云端，1未同步，2同步成功
    serverSync?: string;
    // 创建人id
    creatorId?: string;
    // 更新人id
    updatePersonId?: string;
    // 更新人名称
    updateBy?: string;
    // 创建时间
    ctime?: string;
    // 真正的创建时间
    createTime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingLotDeployVO = {
    // 车位编号
    parkingSpaceCode?: number;
    // 区域
    district?: string;
    // 车场地址名称
    addressName?: string;
    // 经度
    lng?: number;
    // 纬度
    lat?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotEquipment = {
    // 主键
    id?: string;
    // 唯一ID
    sid?: number;
    // 位置id
    parkingSpaceId?: string;
    // 位置类型
    locationType?: number;
    // 车场id
    parkingLotId?: string;
    // 车场名称
    parkingLotName?: string;
    // 车场区域id
    parkingLotRegionId?: number;
    // 车场区域名称
    parkingLotRegionName?: string;
    // 设备名称
    equipmentName?: string;
    // 设备型号，比如传感器，比如摄像头
    equipmentType?: string;
    // 创建人id
    creatorId?: number;
    // 创建人名称
    creatorName?: string;
    // 更新人id
    updatePersonId?: number;
    // 更新人名称
    updateBy?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingLotFluxVO = {
    // 今日热点流量
    todayHotspot?: number;
    // 昨日热点流量
    yesterdayHotspot?: number;
    // 车场总数
    parkingLotCount?: number;
    // 泊位总数
    parkingSpaceCount?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotForMapVO = {
    // 区域码
    districtCode?: string;
    // 城市
    cityCode?: string;
    // 车厂性质
    nature?: string;
    // 车厂名称
    parkingLotName?: string;
    // 左下坐标
    coordinateA?: { [key: string]: number };
    // 右上坐标
    coordinateB?: { [key: string]: number };
    // 页码
    page?: number;
    // 页容量
    size?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotForSearchVO = {
    // 区域码
    districtCode?: string;
    // 城市
    cityCode?: string;
    // 车厂性质
    nature?: string;
    // 车厂类别
    type?: string;
    // 厂商Id
    operatorId?: string;
    // 车厂名称
    parkingLotName?: string;
    // 创建日期-开始
    start?: string;
    // 创建日期-结束
    end?: string;
    // 左下坐标
    coordinateA?: { [key: string]: number };
    // 右上坐标
    coordinateB?: { [key: string]: number };
    // 页码
    page?: number;
    // 页容量
    size?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotGeneralInfoRes = {
    // 车场总数
    totalParkingLot?: number;
    // 泊位总数
    totalParkingSpace?: number;
    // 余位总数
    remainingParkingSpace?: number;
    // 总车流量
    totalTrafficVolume?: number;
    // 进总车流量
    inTotalTrafficVolume?: number;
    // 出总车流量
    outTotalTrafficVolume?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotInfoDataRes = {
    // 车场名称
    parkingLotName?: string;
    // 总泊位数
    totalParkingSpaceNum?: number;
    // 剩余车位
    remainingParkingSpaceNum?: number;
    // 今日进场流量
    incomingFlowNum?: number;
    // 今日出场流量
    exitFlowNum?: number;
    // 停车时长分析
    ptas?: any[];
    // 地址
    address?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingLotListVO = {
    // 停车场id
    id?: string;
    // 停车场图片
    parkingLotUrl?: string;
    // 车场地址名称
    addressName?: string;
    // 车场名称
    parkingLotName?: string;
    // 在线状态
    onlineState?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotMember = {
    // 主键
    id?: string;
    // 车场id
    parkingId?: string;
    // 车牌
    carNum?: string;
    // 是否购买过会员，状态
    buyMemberState?: boolean;
    // 目前使用的是，包月，包年，永久，包夜,临时
    type?: string;
    // 购买时间
    staCtime?: string;
    // 到期时间
    endCtime?: string;
    // 使用时间段开始
    useStaCtime?: string;
    // 使用时间段开始结束
    useEndCtime?: string;
    // 创建人id
    creatorId?: number;
    // 创建人名称
    creatorName?: string;
    // 更新人id
    updatePersonId?: number;
    // 更新人名称
    updateBy?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingLotNatureTotalVO = {
    // 车场性质
    nature?: string;
    // 总数
    total?: number;
    // 在线总数
    onlineNum?: number;
    // 离线总数
    offlineNum?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotOverview = {
    // 序号
    id?: string;
    // 时间
    ctime?: string;
    // 省
    province?: string;
    // 市
    city?: string;
    // 区
    district?: string;
    // 省份编码
    provinceCode?: string;
    // 城市编码
    cityCode?: string;
    // 区域编码
    districtCode?: string;
    // 指标类型
    indexType?: string;
    // 车场类型
    type?: string;
    // 总数
    total?: number;
    // 总数1
    total1?: number;
    // 总数2
    total2?: number;
    // 指标字符串
    totalStr1?: string;
    // 指标字符串2
    totalStr2?: string;
    // 当月注册总数
    registerTotalMonth?: number;
    // 当月上线总数
    onlineTotalMonth?: number;
    // 当周注册总数
    registerTotalWeek?: number;
    // 当周上线总数
    onlineTotalWeek?: number;
    // 上线总数
    onlineTotal?: number;
    // 在线总数
    onlineStateTotal?: number;
    // 路内车场
    insideRoad?: string;
    // 路外车场
    offRoad?: string;
    // 上线率
    onlineRate?: string;
    // 在线率
    onlineStateRate?: string;
    // 路内车场总数
    onRoadParkingLotCount?: number;
    // 路内停车位总数
    onRoadParkingSpaceCount?: number;
    // 路外车场总数
    offRoadParkingLotCount?: number;
    // 路外停车位总数
    offRoadParkingSpaceCount?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotPageSearch = {
    // 搜索字段
    searchField?: string;
    // 数据
    count?: number;
    // 每页大小
    pageSize?: number;
    // 第几页
    pageNum?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotPageVo = {
    // 数据
    list?: ApiAppParking.ParkingLot[];
    // 参数
    cols?: string[];
    // 数据
    count?: number;
    // 每页大小
    pageSize?: number;
    // 第几页
    pageNum?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotRegisterNumAndOnlineNumVO = {
    // 省份
    province?: string;
    // 城市
    city?: string;
    // 区域
    district?: string;
    // 注册数
    total?: number;
    // 上线数
    onlineNum?: number;
    // 离线数
    offlineNum?: number;
    // 上线率
    onlineRate?: string;
    // 在线率
    onlineStateRate?: string;
    // 在线车场数
    onlineStateNum?: number;
    // 离线车场数
    offlineStateNum?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotRuleStrategyRelation = {
    // 主键，创建为空，更新必传
    id?: string;
    // 策略Id：必传
    parkingLotChargingStrategyId?: string;
    // 规则Id：必传
    parkingLotChargesRuleId?: string;
    // 客户端同步状态:0不需要进行同步到本地客户端，1未同步，2同步成功
    clientSync?: string;
    // 客户端同步状态:0不需要进行同步到云端，1未同步，2同步成功
    serverSync?: string;
    // 是否使用中
    inUse?: boolean;
    // 旧数据
    oldData?: boolean;
    // 创建人id
    creatorId?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 更新人id
    updatePersonId?: string;
    // 真正的创建时间
    createTime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingLotStatsResult = {
    // 序号
    id?: string;
    // 时间
    ctime?: string;
    // 省
    province?: string;
    // 市
    city?: string;
    // 区
    district?: string;
    // 省份编码
    provinceCode?: string;
    // 城市编码
    cityCode?: string;
    // 区域编码
    districtCode?: string;
    // 指标类型
    indexType?: string;
    // 厂商名称
    operatorName?: string;
    // 车场总数
    parkingTotal?: number;
    // 上线总数
    onlineTotal?: number;
    // 在线总数
    onlineStateTotal?: number;
    // 厂商总数
    operatorTotal?: string;
    // 路内车场总数
    onRoadParkingLotCount?: number;
    // 路内停车位总数
    onRoadParkingSpaceCount?: number;
    // 路外车场总数
    offRoadParkingLotCount?: number;
    // 路外停车位总数
    offRoadParkingSpaceCount?: number;
    // 停车位总数
    parkingSpaceCount?: number;
    // 使用的停车位总数
    usedParkingSpaceCount?: number;
    // 使用率
    rate?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotStrategyRelationVO = {
    // 策略
    list?: ApiAppParking.ParkingLotChargingStrategy[];
    // 策略应用时间
    date?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingLotTotalVO = {
    // 省份
    province?: string;
    // 城市
    city?: string;
    // 区域
    district?: string;
    // 总数
    total?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotTypeCountVO = {
    // 城市
    cityCode?: string;
    // 区域
    district?: string;
    // 更新时间
    updateTime?: string;
    // 路内车场总数
    onRoadParkingLotCount?: number;
    // 路内停车位总数
    onRoadParkingSpaceCount?: number;
    // 路外车场总数
    offRoadParkingLotCount?: number;
    // 路外停车位总数
    offRoadParkingSpaceCount?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotTypeOnlineVO = {
    // 车场总数
    parkingLotCount?: number;
    // 车场在线数
    parkingOnlineCount?: number;
    // 车场在线率
    onlineRate?: number;
    // 路内车场总数
    onRoadParkingLotCount?: number;
    // 路内在线数
    onRoadParkingSpaceOnlineCount?: number;
    // 路内在线率
    onRoadOnlineRate?: number;
    // 路外车场总数
    offRoadParkingLotCount?: number;
    // 路外在线数
    offRoadParkingSpaceOnlineCount?: number;
    // 路外在线率
    offRoadOnlineRate?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingLotVehicleIdentification = {
    // 主键
    id?: string;
    // 所属停车场序列
    lotId?: string;
    // 设备序列号
    serialNo?: string;
    // 设备名称
    deviceName?: string;
    // 设备ip地址
    ipAddr?: string;
    // 实际数据
    result?: string;
    // 车牌识别信息
    plateResult?: string;
    // 车牌号
    license?: string;
    // 预留，颜色类型
    colorValue?: string;
    // 车牌颜色，0未知，1蓝色
    colorType?: string;
    // 车牌类型
    type?: string;
    // 识别结果准确度 1-100，越大识别越准
    confidence?: number;
    // 预留字段——光照强度
    bright?: number;
    // 前进方向
    direction?: string;
    // 位置信息---车牌在图片中的位置
    location?: string;
    // 位置信息---
    RECT?: string;
    // 预留字段-车身颜色
    carColor?: string;
    // 当前结果的出发类型：1：自动触发，2外包设备
    triggerType?: string;
    // 图片
    imagePath?: string;
    // 略缩图
    thumbnailPath?: string;
    // 更新人id
    updatePersonId?: string;
    // 更新人名称
    updateBy?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingLowUsedRateRankRes = {
    // 车场名称
    parkingName?: string;
    // 省份
    province?: string;
    // 城市
    city?: string;
    // 区域
    region?: string;
    // 泊位总数
    spaceCount?: number;
    // 利用率
    usedRate?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingOneMachine = {
    // id
    id?: string;
    // 一体机id
    deviceId?: string;
    // 停车场 id
    parkingId?: string;
    // 出入口id
    entryId?: string;
    // 出入口类型
    entryType?: string;
    // 创建时间
    createTime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingOrder = {
    // 标识列
    id?: string;
    // 流水号
    serialNumber?: string;
    // 车场id
    parkingLotId?: string;
    // 车场名称
    parkingLotName?: string;
    // 是否为app录入订单
    appOrder?: boolean;
    // 停车位id
    parkingSpaceSid?: string;
    // 收费类型
    chargeType?: string;
    // 车牌号码
    carNum?: string;
    // 停车时长
    longTime?: number;
    // 用户id
    uid?: string;
    // 进场时间
    inTime?: string;
    // 出场时间
    outTime?: string;
    // 计费金额
    billingAmount?: string;
    // 优惠金额
    discount?: string;
    // 支付优惠
    payDiscount?: string;
    // 应付金额
    amountsPayable?: string;
    // 实付金额
    amountActuallyPaid?: string;
    // 应付金额,最后一次iot所触发的费用，每触发一次使用最新唯一id获取，旧的id会被新id覆盖掉查询不到数据
    iotLastAmountsPayable?: string;
    // iot访问时间
    iotLastAskTime?: string;
    // 退款金额
    refundAmount?: string;
    // 订单状态
    status?: string;
    // 支付流程是否结束标识
    isEnd?: boolean;
    // 停车记录是否结束标识
    finish?: boolean;
    // 创建时间
    createTime?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 支付时间
    payTime?: string;
    // 退款时间
    refundTime?: string;
    // 取消时间
    cancelTime?: string;
    // 支付机构
    paymentAgencyShortName?: string;
    // 是否可以跳过管理员确认离场
    adminSkip?: boolean;
    // 第三方订单id
    thirdPartyOrderId?: string;
    // 自有订单号
    orderNum?: string;
    // 自有订单号,iot访问时生成的id
    iotLastOrderNum?: string;
    // 计费记录 id
    calculationRecordId?: string;
    // 订单类型
    orderType?: string;
    // 订单组
    orderGroup?: string;
    // 订单顺序
    orderSort?: number;
    // 入场同步
    entrySync?: boolean;
    // 出场同步
    outSync?: boolean;
    // 支付同步
    paySync?: boolean;
    // 通知标记
    iotNoticeFlag?: boolean;
    // 校正前车牌
    beforeCorrectingCarPlate?: string;
    // 是否校正
    correcting?: boolean;
    // 初始车牌号
    originalCarPlate?: string;
    // 本地计算的金额
    nativePrice?: string;
    // 本地计算的时间
    calcTime?: string;
    // 本地计算的金额是否和云平台计算的金额一致
    priceFit?: boolean;
    // 离场时的设备id
    leaveDeviceId?: string;
    // 是否为无牌车订单
    unlicensedOrder?: boolean;
  };

  /**
   * 传入参数
   */
  export type ParkingOrderMonitoringVO = {
    // 收费总额
    money?: number;
    // 现金收费
    cash?: number;
    // 临时车入场
    entrance?: string;
    // 临时车出场
    appearance?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingOrderVO = {
    // 标识列
    id?: string;
    // 流水号
    serialNumber?: string;
    // 自有订单号
    orderNum?: string;
    // 车场id
    parkingLotId?: string;
    // 车场名称
    parkingLotName?: string;
    // 车牌号码
    carNum?: string;
    // 计费记录 id
    calculationRecordId?: string;
    // 计费金额
    billingAmount?: string;
    // 优惠金额
    discount?: string;
    // 支付优惠
    payDiscount?: string;
    // 应付金额
    amountsPayable?: string;
    // 实付金额
    amountActuallyPaid?: string;
    // 支付时间
    payTime?: string;
    // 订单状态
    status?: string;
    // 支付机构
    paymentAgencyShortName?: string;
    // 进场时间
    inTime?: string;
    // 出场时间
    outTime?: string;
    // 校正前车牌
    beforeCorrectingCarPlate?: string;
    // 是否校正
    correcting?: boolean;
    // 初始车牌号
    originalCarPlate?: string;
    // 计费时长
    billingDuration?: number;
    // 未缴费原因
    noPayType?: string;
    // 说明
    explanation?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingPayPayload = {
    // 停车流水号
    serialNumber?: string;
    // 车牌
    carNum?: string;
    // 车场id
    parkingId?: string;
    // 资费
    cost?: string;
    // 付款方式
    type?: string;
    // 未付费逃离，补充说明
    describe?: string;
    // 未支付离场类型
    noPayType?: string;
    // 二维码大小
    width?: number;
    // 二维码大小
    height?: number;
    // 单次请求的唯一id
    uniqueNo?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingPicVO = {
    // 车牌号
    carNum?: string;
    // 流水号
    serialNumber?: string;
    // 入场通道
    entryChannel?: string;
    // 入场时间
    entryTime?: string;
    // 入场图片
    entryPic?: string;
    // 出场通道
    leaveChannel?: string;
    // 出场时间
    leaveTime?: string;
    // 出场图片
    leavePic?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingRateProportionRes = {
    // 车场总数
    total?: number;
    // 低利用率车场数
    count?: number;
    // 低利用率占比
    lowProportion?: number;
    // 其他占比
    otherProportion?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingRecord = {
    // id
    id?: string;
    // 业务id
    sId?: string;
    // 车场id
    parkingLotSid?: string;
    // 车场名称
    parkingLotName?: string;
    // 车场类别
    type?: string;
    // 车场性质
    nature?: string;
    // 车场区域id
    regionId?: number;
    // 省份编码
    provinceCode?: string;
    // 城市编码
    cityCode?: string;
    // 区域编码
    districtCode?: string;
    // 街道编码
    streetCode?: string;
    // 省份
    province?: string;
    // 城市
    city?: string;
    // 区域
    district?: string;
    // 车牌号
    carLicense?: string;
    // 车牌类型
    carLicenseType?: string;
    // 颜色
    color?: string;
    // 车辆类型
    carType?: string;
    // 车辆大小类型
    carSizeType?: string;
    // 动力类型
    powerType?: string;
    // 停车位编号
    parkingSpaceSid?: string;
    // 车主id
    carOwnerId?: string;
    // 车主姓名
    carOwnerName?: string;
    // 车主联系电话
    carOwnerPhone?: string;
    // 备注
    remark?: string;
    // 进场时间
    entryTime?: string;
    // 出场时间
    leavingTime?: string;
    // 停车时间
    parkingTime?: string;
    // 是否出场
    leaving?: boolean;
    // 进场图片
    entryPic?: string;
    // 出场图片
    leavingPic?: string;
    // 资费
    cost?: string;
    // 是否收费
    paid?: boolean;
    // 创建时间
    createTime?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 入场设备id
    entryEquipmentId?: string;
    // 出场设备id
    leavingEquipmentId?: string;
    // 缴费时间
    paidTime?: string;
    // 流水号
    serialNumber?: string;
    // 未付费逃离，补充说明
    describe?: string;
    // 未支付离场类型
    noPayType?: string;
    // 是否未支付离场
    noPayLeave?: boolean;
    // 出场同步
    outSync?: boolean;
    // 入场同步
    entrySync?: boolean;
    // 支付宝停车业务流水号
    serialNo?: string;
    // 支付宝停车业务流水号
    syncToAli?: string;
    // 同步进行中
    syncExecuting?: boolean;
    // 地区
    addss?: string;
    // 入场同步
    paySync?: boolean;
    // 校正前车牌
    beforeCorrectingCarPlate?: string;
    // 是否校正
    correcting?: boolean;
    // 初始车牌号
    originalCarPlate?: string;
    // 是否无牌车入场方式
    noLicenseWay?: boolean;
  };

  /**
   * 传入参数
   */
  export type ParkingRecordChargesVO = {
    // parkingRecord
    parkingRecord?: ApiAppParking.ParkingRecord;
    // 单次请求的唯一id
    uniqueNo?: string;
    // 总时长，单位分钟
    duration?: number;
    // 总时长，单位秒
    durationSecond?: number;
    // 未付费用
    money?: string;
    // 已付费用
    payMoney?: string;
    // 车位编号
    sid?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingRecordFuzzyVO = {
    // 流水号
    serialNumber?: string;
    // 车牌号
    carLicense?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingRecordMatchingVO = {
    // 车牌号
    carLicense?: string;
    // 出入口名称
    entranceAndExitName?: string;
    // 通道口名称
    passageWayName?: string;
    // 进场时间
    entryTime?: string;
    // 进场图片
    entryPic?: string;
    // 入场设备id
    entryEquipmentId?: string;
    // 流水号
    serialNumber?: string;
    // 车辆类型
    carType?: string;
    // 车场id
    parkingLotSid?: string;
    // 颜色
    color?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingSpace = {
    // 标识列
    id?: string;
    // 车位编号
    sid?: string;
    // 车牌号
    carLicense?: string;
    // 车场id
    parkingLotId?: string;
    // 车场区域id
    parkingLotRegionId?: string;
    // 状态:
    state?: number;
    // 设备在线状态，1在线 2不在线 0未知
    netStatus?: number;
    // 备注
    banReason?: string;
    // 车位类型
    type?: string;
    // 传感器id
    sensorId?: string;
    // 传感器名称
    sensorName?: string;
    // 传感器型号---设备型号
    sensorType?: string;
    // 创建人id
    creatorId?: number;
    // 创建人名称
    creatorName?: string;
    // 更新人id
    updatePersonId?: number;
    // 更新人名称
    updateBy?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 经度
    lng?: number;
    // 纬度
    lat?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingSpaceCacheKeyVO = {
    // 标识列
    id?: string;
    // 车位编号
    sid?: string;
    // 车场id
    parkingLotId?: string;
    // 车场区域id
    parkingLotRegionId?: string;
    // 车场区域名称
    parkingAreaName?: string;
    // 状态:
    state?: number;
    // 设备在线状态，1在线 2不在线 0未知
    netStatus?: number;
    // 车位类型
    type?: string;
    // 备注
    banReason?: string;
    // 传感器名称
    sensorName?: string;
    // 传感器id
    sensorId?: string;
    // 传感器型号---设备型号
    sensorType?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingSpaceCountVO = {
    // 车场id
    parkingLotId?: string;
    // 车位总数
    parkingSpaceCount?: number;
    // 剩余
    remainCount?: number;
    // 临时车位数
    temporaryCount?: number;
    // 剩余
    temporaryRemainCount?: number;
    // 免费车位数
    freeCount?: number;
    // 剩余
    freeRemainCount?: number;
    // 固定车位数
    immobilizationCount?: number;
    // 剩余
    immobilizationRemainCount?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingSpaceHoursCountVO = {
    // id
    id?: string;
    // 车场Id
    parkingLotId?: string;
    // 统计时间
    createTime?: string;
    // 更新时间
    etime?: string;
    // 创建时间
    ctime?: string;
    // 统计时间
    hours?: string;
    // 车位总数
    parkingSpaceCount?: number;
    // 剩余
    remainCount?: number;
    // 占用率
    occupancyRate?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingSpaceListVO = {
    // 标识列
    id?: string;
    // 车位编号
    sid?: string;
    // 车场id
    parkingLotId?: string;
    // 车场名称
    parkingLotName?: string;
    // 车场区域id
    parkingLotRegionId?: string;
    // 车场区域名称
    parkingLotRegionName?: string;
    // 状态:
    state?: number;
    // 车位类型
    type?: string;
    // 禁止原因
    banReason?: string;
    // 传感器名称
    sensorName?: string;
    // 传感器id
    sensorId?: string;
    // 创建人id
    creatorId?: number;
    // 传感器型号---设备型号
    sensorType?: string;
    // 创建人名称
    creatorName?: string;
    // 更新人名称
    updateBy?: string;
    // 更新人id
    updatePersonId?: number;
    // 更新时间
    etime?: string;
    // 创建时间
    ctime?: string;
    // 区域编码
    districtCode?: string;
    // 城市编码
    cityCode?: string;
    // 省份编码
    provinceCode?: string;
    // 区域
    district?: string;
    // 城市
    city?: string;
    // 省份
    province?: string;
    // 纬度
    lat?: string;
    // 经度
    lng?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingSpaceParkingLotCountVO = {
    // 总车数
    parkingSpaceNum?: number;
    // 总车数剩余
    remainingParkingSpaceNum?: number;
    // 固定车位数
    immobilizationCount?: number;
    // 固定车位剩余数
    immobilizationRemainCount?: number;
    // 临时车位数
    temporaryCount?: number;
    // 临时车位剩余数
    temporaryRemainCount?: number;
    // 备用车位数
    freeCount?: number;
    // 备用车位剩余数
    freeRemainCount?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingSpaceRatioVO = {
    // 今日停车车次
    todayStopCount?: number;
    // 累计停车车次
    accumulativeCount?: number;
    // 今日车位利用率
    ratio?: string;
    // 统计返回数据
    entryExitTime?: ApiAppParking.RectangleTimeVO[];
  };

  /**
   * 传入参数
   */
  export type ParkingSpaceSensorVO = {
    // 标识列
    id?: string;
    // 车场id
    parkingLotId?: string;
    // 车位编号
    sid?: string;
    // 车牌号
    carLicense?: string;
    // 状态:
    state?: number;
    // 车场区域id
    parkingLotRegionId?: string;
    // 设备在线状态，1在线 2不在线 0未知
    netStatus?: number;
    // 传感器id
    sensorId?: string;
    // 备注
    banReason?: string;
    // 车位类型
    type?: string;
    // 传感器型号---设备型号
    sensorType?: string;
    // 传感器名称
    sensorName?: string;
    // 创建人名称
    creatorName?: string;
    // 创建人id
    creatorId?: number;
    // 更新人名称
    updateBy?: string;
    // 更新人id
    updatePersonId?: number;
    // 更新时间
    etime?: string;
    // 创建时间
    ctime?: string;
    // 纬度
    lat?: number;
    // 经度
    lng?: number;
    // 上一个绑定这个的车位id
    previousSensorIds?: string[];
  };

  /**
   * 传入参数
   */
  export type ParkingSpaceStateVO = {
    // 标识列
    id?: string;
    // 车位编号
    sid?: string;
    // 状态:
    state?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingSpaceTotalVO = {
    // 省份
    province?: string;
    // 城市
    city?: string;
    // 区域
    district?: string;
    // 总数
    total?: number;
    // 剩余车位
    remainingParkingSpaces?: number;
    // 占用率
    occupancyRate?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingSpaceTurnoverRate = {
    // 标识列
    id?: string;
    // 城市编号
    cityCode?: string;
    // 计算时间
    createTime?: string;
    // 周转率
    rate?: string;
    // 总车位数
    parkingSpaceCount?: string;
    // 停车次数
    times?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingSpaceUsedAndTotalVO = {
    // 车场Id
    parkingLotId?: string;
    // 车场名称
    parkingLotName?: string;
    // 车场类型
    type?: string;
    // 总数
    total?: number;
    // 已使用总数
    usedTotal?: number;
    // 占用率
    usedRate?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingSpaceUtilizationRate = {
    // 序号
    id?: string;
    // 时间
    ctime?: string;
    // 省
    province?: string;
    // 市
    city?: string;
    // 区
    district?: string;
    // 省份编码
    provinceCode?: string;
    // 城市编码
    cityCode?: string;
    // 区域编码
    districtCode?: string;
    // 指标类型
    indexType?: string;
    // 车场id
    parkingLotId?: string;
    // 车场名称
    parkingLotName?: string;
    // 停车位总数
    carLicenseType?: number;
    // 停车位总数
    parkingSpaceCount?: number;
    // 使用的停车位总数
    usedParkingSpaceCount?: number;
    // 使用率
    rate?: number;
    // 经度
    lng?: number;
    // 纬度
    lat?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingSpaceVO = {
    // 标识列
    id?: string;
    // 车位编号
    sid?: string;
    // 车位类型
    type?: string;
    // 泊位图车位的配置状态/默认为false
    status?: boolean;
  };

  /**
   * 传入参数
   */
  export type ParkingStrategyVO = {
    // 主键，创建为空，更新必传
    id?: string;
    // 等级
    grade?: number;
    // 策略类型,（基础--免费时间之类的,收费---具体收费规则）
    strategyType?: string;
    // 策略名称
    strategyName?: string;
    // 日期条件
    dateCondition?: string;
    // 具体条件 临时,每年，星期，日期这些
    dateConditionDetail?: string;
    // 节假日条件
    holidayOrWeekendCondition?: string;
    // 具体条件 临时,每年，星期，日期这些
    holidayOrWeekendConditionDetail?: string;
    // 节假日明细数据
    holidayDetails?: ApiAppParking.ParkingLotChargingStrategyDetail[];
    // 日期明细数据
    dateDetails?: ApiAppParking.ParkingLotChargingStrategyDetail[];
    // 规则
    parkingLotChargesRules?: ApiAppParking.ParkingLotChargesRule[];
    // 收费规则id
    ruleIds?: string[];
    // 规则数量
    ruleCount?: number;
    // 备注，描述
    describe?: string;
    // 支付后未离场超时时间，单位分钟:不设置默认不会超时
    timeOut?: string;
    // 设置重置时间
    resetTime?: string;
    // 免费时间，单位分钟
    freeParkingTime?: string;
    // 停车时长重置方式  0不重置,  1：每天0点, 2：每24小时
    resetType?: string;
    // 设置停车时长,重置时间
    stopResetTime?: string;
    // 规则数量
    count?: number;
    // 真正的创建时间
    createTime?: string;
    // 是否使用中
    inUse?: boolean;
  };

  /**
   * 传入参数
   */
  export type ParkingTimeAnalysis = {
    // 标识列
    id?: string;
    // 车场id
    parkingLotId?: string;
    // 车场名称
    parkingLotName?: string;
    // 车场类别
    type?: string;
    // 车场性质
    nature?: string;
    // 省份编码
    provinceCode?: string;
    // 城市编码
    cityCode?: string;
    // 区域编码
    districtCode?: string;
    // 15分钟次数
    minutes15?: number;
    // 15~60分钟次数
    minute15minute60?: number;
    // 60~180分钟次数
    minute60minute180?: number;
    // 3小时以上次数
    minutes180?: number;
    // 时间
    createTime?: string;
    // 创建日期
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingTimeAnalysisRes = {
    // 时长类型
    key?: string;
    // 占比
    ratio?: number;
  };

  /**
   * 传入参数
   */
  export type ParkingUsedRateStatistics = {
    // 标识列
    id?: string;
    // 车场id
    parkingLotId?: string;
    // 使用时间
    useTime?: number;
    // 总理论时间
    allTime?: number;
    // 车位利用率
    usedRate?: number;
    // 创建日期-整点
    createTime?: string;
    // 创建日期
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingWhitelist = {
    // 唯一标识
    id?: string;
    // 车场id
    parkingId?: string;
    // 车位id
    parkingSpaceId?: string;
    // 车牌
    carPlate?: string;
    // 计费类型(ChargeTypeEnum)
    chargeType?: string;
    // 车位类型(ParkingSpaceType)
    parkingSpaceType?: string;
    // 开始时间
    startTime?: string;
    // 结束时间
    endTime?: string;
    // 是否启用
    enabled?: boolean;
    // 描述
    desc?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ParkingWhitelistQueryVO = {
    // 车牌
    carNum?: string;
    // 车场id
    parkingId?: string;
    // 时间
    time?: string;
  };

  /**
   * 传入参数
   */
  export type PassageWay = {
    // 唯一标识
    id?: string;
    // 通道名称
    passageWayName?: string;
    // 车场id
    parkinglotId?: string;
    // 出入口id
    entranceAndExitId?: string;
    // 类型(EntranceAndExitType)
    entranceAndExitType?: string;
    // 设备id
    equipmentId?: string;
    // 设备名称
    equipmentName?: string;
    // 是否启用
    enabled?: boolean;
    // 描述
    desc?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type PassageWayNameVO = {};

  /**
   * 传入参数
   */
  export type PayPriceCalculateVO = {
    // 单次请求的唯一id
    uniqueNo?: string;
    // 车场id
    parkingLotId?: string;
    // 车牌号
    carLicense?: string;
    // 停车流水号
    serialNumber?: string;
    // 车类型---大型车，小型车，中型车，电动车，单车
    carType?: string;
    // 车牌类型：必传
    carNumType?: string;
    // 进场时间
    entryTime?: string;
    // 出场时间
    leavingTime?: string;
    // 免费时间，单位分钟
    freeParkingTime?: string;
  };

  /**
   * 传入参数
   */
  export type PayResultDTO = {
    // 支付订单状态
    payState?: any;
    // 订单金额
    orderAmount?: string;
    // 优惠金额
    discount?: string;
    // 未付费用
    money?: string;
    // 已付费用
    payMoney?: string;
    // 二维码url
    url?: string;
    // 总时长，单位分钟
    duration?: number;
    // 总时长，单位秒
    durationSecond?: number;
    // 停车流水号
    serialNumber?: string;
    // 单次请求的唯一id
    uniqueNo?: string;
    // 订单号
    orderId?: string;
    // 停车位编号
    parkingSpaceSid?: string;
    // 车场id
    parkingLotId?: string;
    // 车牌
    carNum?: string;
    // 计费时间
    calcTime?: string;
    // 订单信息
    parkingOrders?: ApiAppParking.ParkingOrder[];
    // 停车场
    parkingLot?: ApiAppParking.ParkingLot;
    // 停车记录
    parkingRecord?: ApiAppParking.ParkingRecord;
    // 规则信息
    parkingLotChargesRules?: ApiAppParking.ParkingLotChargesRule[];
    // 停车时间列表
    stopTimeRanges?: ApiAppParking.StopTimeRange[];
    // 策略id和策略明细
    relationMap?: {
      [key: string]: ApiAppParking.ParkingLotChargingStrategyRelation;
    };
    // 策略和对应的规则
    relationRuleMap?: { [key: string]: ApiAppParking.ParkingLotChargesRule[] };
    // 基础策略
    basicsStrategyRelation?: ApiAppParking.ParkingLotChargingStrategyRelation;
    // 上限规则
    upperRuleList?: ApiAppParking.ParkingLotChargesRule[];
    // 收费规则
    useTimeFrame?: ApiAppParking.RuleTimeFrameVO[];
    // 会员信息
    parkingWhiteList?: ApiAppParking.ParkingWhitelist[];
  };

  /**
   * 传入参数
   */
  export type PayResultVO = {
    // 支付订单状态id
    payStateCode?: string;
    // 支付订单状态描述
    payStateDesc?: string;
    // 费用
    money?: string;
    // 停车流水号
    serialNumber?: string;
    // 单次请求的唯一id
    uniqueNo?: string;
    // 停车位编号
    parkingSpaceSid?: string;
    // 二维码url
    url?: string;
    // 二维码图片，格式为base64
    qrCode?: string;
    // 总时长，单位分钟
    duration?: number;
    // 总时长，单位秒
    durationSecond?: number;
    // 车牌
    carNum?: string;
    // 付款方式
    type?: string;
    // 白名单
    parkingWhitelist?: ApiAppParking.ParkingWhitelist;
  };

  /**
   * 传入参数
   */
  export type PaymentRecord = {
    // 标识列
    id?: string;
    // 名称
    name?: { [key: string]: any };
    // 流水号
    serialNumber?: string;
    // 车牌号
    carNum?: string;
    // 车场id
    parkingLotId?: string;
    // 车位id
    parkingSpaceId?: string;
    // 车位名称
    parkingSpaceName?: string;
    // 缴费时间
    payTime?: string;
    // 免费离场时间
    freeTime?: string;
    // 消息时间
    messageTime?: string;
    // 缴费类型:PaymentTypeEnum
    paymentType?: string;
    // 是否确认
    confirmed?: boolean;
    // 确认时间
    confirmTime?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type PeakLineRealTimeVO = {
    // 总车流量
    count?: number;
    // 车流高峰车厂
    lotName?: string;
    // 车流高峰车厂Id
    lotId?: string;
    // 车流高峰时段
    timeInterval?: string;
  };

  /**
   * 传入参数
   */
  export type PhoneNumServer = {
    // 标识列
    id?: string;
    // 手机号
    phoneNum?: string;
    // 服务器名称
    serverName?: string;
    // 服务器地址
    url?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type PriceCheckDTO = {
    // 停车流水号
    serialNumber?: string;
  };

  /**
   * 传入参数
   */
  export type QueryObject = {
    // 城市编码
    cityCode?: string;
    // 开始时间
    timeStart?: string;
    // 结束时间
    timeEnd?: string;
    // 开始日期
    dayStart?: string;
    // 开始日期
    dayEnd?: string;
  };

  /**
   * 传入参数
   */
  export type QueryParkingLotChargesRuleVO = {
    // 类型：必传 1：是收费规则  2：上限规则
    chargingType?: string;
    // 车辆大小类型
    carSizeType?: string;
    // 收费时间
    chargeTime?: string;
    // 价格---每分钟，价格---每小时，价格---天,按照收费类型来确定保留2位小数
    price?: number;
    // 对应原型的是否二次计费
    chargeTimes?: boolean;
    // 规则描述
    describe?: string;
  };

  /**
   * 传入参数
   */
  export type QueryParkingSpacePush = {
    // 泊位图
    berthFigureUrl?: string;
    // 泊位图的key
    berthFigureKey?: ApiAppParking.AreaTypeVO[];
    // 车位缩放
    zoom?: string;
    // 泊位总数
    allCount?: number;
    // 空余数量
    emptyCount?: number;
    // 已占数量
    occupiedCount?: number;
  };

  /**
   * 传入参数
   */
  export type RealParkingSpace = {
    // 标识列
    id?: string;
    // 车场id
    parkingLotId?: string;
    // 设备id
    equipmentId?: string;
    // 车牌号
    carNum?: string;
    // 车主类型
    carOwnerType?: string;
    // 车位类型(ParkingSpaceType)
    parkingSpaceType?: string;
    // 车辆类型
    carType?: string;
    // 车牌类型
    carLicenseType?: string;
    // 车牌颜色
    carLicenseColor?: string;
    // 进场时间
    entryTime?: string;
    // 进场通道
    channel?: string;
    // 进场通道id
    channelId?: string;
    // 入场方式
    entryType?: string;
    // 车牌识别类型
    recognitionType?: string;
    // 停车位id
    parkingSpaceId?: string;
    // 停车位置
    parkingSpaceName?: string;
    // 当前计费金额
    price?: string;
    // 入场图片
    entryPic?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 流水号
    serialNumber?: string;
    // 校正前车牌
    beforeCorrectingCarPlate?: string;
    // 是否校正
    correcting?: boolean;
    // 初始车牌号
    originalCarPlate?: string;
    // 同步标记
    sync?: boolean;
    // 数据是否启用,在场为true，离场为false
    enabled?: boolean;
    // 解释
    explanation?: string;
    // 是否缴费
    paid?: boolean;
    // 缴费时间
    payTime?: string;
    // 截止免费时间
    freeTime?: string;
    // 支付次数
    paymentFrequency?: number;
    // 是否为默认的车辆类型
    defaultCarSizeType?: boolean;
  };

  /**
   * 传入参数
   */
  export type RealTimeTrafficFlow = {
    // 序号
    id?: string;
    // 时间-分钟
    creatTime?: string;
    // 省
    province?: string;
    // 市
    city?: string;
    // 区
    district?: string;
    // 省份编码
    provinceCode?: string;
    // 城市编码
    cityCode?: string;
    // 区域编码
    districtCode?: string;
    // 车场id
    parkingLotId?: string;
    // 车场名称
    parkingLotName?: string;
    // 进场车流量总数
    inTotal?: number;
    // 出场车流量总数
    outTotal?: number;
    // 车流量总数
    total?: number;
    // 经度
    lng?: number;
    // 纬度
    lat?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type RecognitionRecords = {};

  /**
   * 传入参数
   */
  export type RecognitionRecordsReplenishVO = {
    // 车牌号
    carLicense?: string;
    // 车牌颜色
    colorType?: string;
    // 车辆类型
    carType?: string;
    // 车牌类型
    type?: string;
  };

  /**
   * 传入参数
   */
  export type RecognitionRecordsVO = {
    // 识别时间
    timeStamp?: string;
    // 识别车牌
    carPlate?: string;
    // 车牌颜色
    colorType?: string;
    // 用户类型
    type?: string;
    // 通道名称
    channelName?: string;
    // 停车时长
    stopTime?: string;
    // 计费金额
    billingMoney?: number;
    // 优惠金额
    discountsMoney?: number;
    // 实收金额
    money?: string;
    // 是否付款
    pay?: boolean;
    // 出入口类型
    entranceAndExitType?: string;
    // 图片
    url?: string;
    // 设备id
    deviceId?: string;
    // 流水号
    serialNumber?: string;
    // 收费类型
    chargeType?: string;
    // 车场id
    parkingId?: string;
    // 通道id
    passageWayId?: string;
    // 车辆类型
    carType?: number;
    // 车牌类型
    carPlateType?: number;
    // 单次请求的唯一id
    uniqueNo?: string;
    // 是否显示匹配
    transmit?: boolean;
  };

  /**
   * 传入参数
   */
  export type RecognitionResult = {
    // 标识列
    id?: string;
    // 上传状态：0未上传，1已上传；
    isTransfer?: boolean;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type RecognitionTempVO = {
    // 设备id
    deviceId?: string;
    // 识别记录id
    recordsId?: string;
  };

  /**
   * 传入参数
   */
  export type RectangleTimeVO = {
    // 开始时间
    beginTime?: string;
    // 结束时间
    finishTime?: string;
  };

  /**
   * 传入参数
   */
  export type RefundAmountPayload = {
    // 总金额
    total?: number;
    // 货币类型
    currency?: string;
    // 退款金额
    refund?: number;
  };

  /**
   * 传入参数
   */
  export type RefundGoodsDetailPayload = {
    // 商户侧商品编码
    merchantGoodsId?: string;
    // 微信侧商品编码
    wechatPayGoodsId?: string;
    // 商品名称
    goodsName?: string;
    // 商品单价
    unitPrice?: number;
    // 商品退款金额
    refundAmount?: number;
    // 商品退货数量
    refundQuantity?: number;
  };

  /**
   * 传入参数
   */
  export type RegionOnlineCountVO = {
    // 区域名称
    region?: string;
    // 车场总数
    parkingLotCount?: number;
    // 车场在线数
    parkingOnlineCount?: number;
    // 车场在线率
    onlineRate?: number;
    // 本周新增车场数
    newParkingLotWeekly?: number;
    // 本周新增在线数
    newParkingLotOnlineWeekly?: number;
  };

  /**
   * 传入参数
   */
  export type RegionVO = {
    // 编码
    code?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type RemainingParkingVO = {
    // 城市代码
    cityCode?: string;
    // 城市
    city?: string;
    // 区域
    region?: string;
    // 停车场名称
    parkingLotName?: string;
    // 车场总数
    totalParkingLot?: number;
    // 泊位总数
    totalParkingSpace?: number;
    // 占用总数
    occupyParkingSpace?: number;
    // 余位总数
    remainingParkingSpace?: number;
    // 占用率
    rate?: number;
    // 状态
    state?: number;
    // 车场性质
    property?: string;
    // 路内/路外
    type?: number;
  };

  /**
   * 传入参数
   */
  export type ResidualIndexAnalysisDataRes = {
    // 车场性质
    type?: string;
    // 车位充足
    adequate?: number;
    // 车位一般
    commonly?: number;
    // 车位紧张
    nervous?: number;
    // 车位已满
    full?: number;
    // 车位异常
    abnormal?: number;
  };

  /**
   * 传入参数
   */
  export type ResidualTrendDataRes = {
    // 时间（HH:mm）
    time?: string;
    // 余位数量
    remainderNum?: number;
    // 昨天余位数量
    yesterdayRemainderNum?: number;
  };

  /**
   * 传入参数
   */
  export type RuleTimeFrameVO = {
    // 车场id
    parkingLotId?: string;
    // 停车开始时间
    stopStaTime?: string;
    // 停车结束时间
    stopEndTime?: string;
    // 规则明细
    chargesRules?: ApiAppParking.ParkingLotChargesRuleVO[];
    // 策略
    relation?: ApiAppParking.ParkingLotChargingStrategyRelation;
    // 节假日明细数据
    holidayDetails?: ApiAppParking.ParkingLotChargingStrategyDetail[];
    // 日期明细数据
    dateDetails?: ApiAppParking.ParkingLotChargingStrategyDetail[];
  };

  /**
   * 传入参数
   */
  export type SelectView = {
    // 下拉框key
    key?: string;
    // 下拉框value
    value?: string;
  };

  /**
   * 传入参数
   */
  export type SmsPayload = {
    // 手机号
    phoneNum?: string;
    // 验证码
    code?: string;
    // 用户id
    userId?: string;
  };

  /**
   * 传入参数
   */
  export type StopTimeRange = {
    // 主键，创建为空，更新必传
    id?: string;
    // 规则Id：必传
    parkingLotChargesRuleId?: string;
    // 周期时间长度，小时部分，分钟和小时累加为总时长
    periodTimeForHour?: number;
    // 周期时间长度，分钟部分
    periodTimeForMin?: number;
    // 价格---每分钟，价格---每小时，价格---天,按照收费类型来确定保留2位小数
    price?: number;
    // 停车时长开始数值：单位
    stopTimeStaUnit?: string;
    // 停车时长结束数值长度：单位 秒 用于比较排序
    stopTimeLongSta?: number;
    // 停车时长开始数值
    stopTimeSta?: string;
    // 周期时间长度
    periodTime?: string;
    // 周期时间长度：单位
    periodTimeUnit?: string;
    // 停车时长结束数值
    stopTimeEnd?: string;
    // 结束时间是否无限长度
    stopTimeLong?: boolean;
    // 停车时长结束数值：单位
    stopTimeEndUnit?: string;
    // 停车时长结束数值长度：单位 秒 用于比较排序
    stopTimeLongEnd?: number;
    // 计算模式 1 百分比,2完整时间段
    formulaMode?: string;
    // 停车时长开始时间
    stopTimeStaHour?: number;
    // 停车时长开始时间
    stopTimeStaMin?: number;
    // 时间长度
    stopTimeStaTimeLong?: number;
    // 停车时长结束时间
    stopTimeEndHour?: number;
    // 停车时长结束时间
    stopTimeEndMin?: number;
    // 时间长度
    stopTimeEndTimeLong?: number;
    // 客户端同步状态:0不需要进行同步到本地客户端，1未同步，2同步成功
    clientSync?: string;
    // 客户端同步状态:0不需要进行同步到云端，1未同步，2同步成功
    serverSync?: string;
    // 是否使用中
    inUse?: boolean;
    // 是否使用完整时间段,不是的按照百分比
    fullTime?: boolean;
    // 旧数据
    oldData?: boolean;
    // 更新人名称
    updateBy?: string;
    // 更新人id
    updatePersonId?: string;
    // 更新时间
    etime?: string;
    // 创建时间
    ctime?: string;
    // 创建人id
    creatorId?: string;
    // 真正的创建时间
    createTime?: string;
  };

  /**
   * 传入参数
   */
  export type StrategyDetailSearch = {
    // 主键，创建为空，更新必传
    id?: string;
    // 车场Id：必传
    parkingLotId?: string;
    // 策略和车场关系id
    parkingLotStrategyRelationId?: string;
    // 策略Id
    parkingLotChargingStrategyId?: string;
    // 等级
    grade?: number;
    // 星期几和节假日id
    dayOfWeekAndHolidayId?: number;
    // 父级条件，节假日，日期
    conditionParent?: string;
    // 具体条件 临时,每年，星期，日期这些
    conditionDetail?: string;
    // 临时条件开始日期，具体时间
    dateSta?: string;
    // 临时条件结束日期，具体时间
    dateEnd?: string;
    // 开始日期，几月几号
    monthSta?: number;
    // 开始日期，几月几号
    monthEnd?: number;
    // 开始日期，几月几号
    dayOfMonthSta?: number;
    // 2020计算得出的时间毫秒值
    dayOfMonthEnd?: number;
    // 开始日期，几月几号
    dateCharSta?: string;
    // 开始日期，几月几号
    dateCharEnd?: string;
    // 2020计算得出的时间毫秒值
    timeSta?: number;
    // 开始日期，几月几号
    timeEnd?: number;
  };

  /**
   * 传入参数
   */
  export type SysComponent = {
    // 组件配置唯一标识
    id?: string;
    // 所属分类code
    category?: string;
    // 组件配置标识code
    code?: string;
    // 组件配置名称（国际化字段）
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type SysToken = {
    // 序号
    id?: string;
    // 用户account
    account?: string;
    // jsessionId
    jsessionId?: string;
    // ip
    ip?: string;
    // 用户token
    token?: string;
    // 过期时间
    expireTime?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type SystemMenuConfig = {
    // 系统菜单序号
    id?: string;
    // 大系统分类
    systemClass?: string;
    // 子系统分类(当菜单类型为应用系统时，这里存储code)
    systemClassify?: string;
    // 所属语言
    theirLanguage?: string;
    // 系统图标
    systemIco?: string;
    // 系统名称
    systemName?: string;
    // 系统地址
    systemAddress?: string;
    // 界面风格
    style?: string;
    // 文字大小
    textSize?: number;
    // 背景图片 （逗号分割）
    backgroundImage?: string;
    // 标题栏组件
    titleBar?: string[];
    // 启用本系统菜单
    enabled?: boolean;
    // 背景遮罩
    background?: string;
  };

  /**
   * 传入参数
   */
  export type SystemMenuConfigBoBox = {
    // 系统菜单序号
    id?: string;
    // 系统名称
    systemName?: string;
  };

  /**
   * 传入参数
   */
  export type SystemMenuConfigGrid = {
    // 所属语言
    theirLanguage?: string;
    // 系统分类
    systemClassify?: string;
    // 系统名称
    systemName?: string;
    // 系统图标
    systemIco?: string;
    // 界面风格
    style?: string;
    // 系统地址
    systemAddress?: string;
    // 启用本系统菜单
    enabled?: boolean;
    // 文字大小
    textSize?: number;
    // 背景遮罩
    background?: string;
    // 用户菜单序号
    id?: string;
  };

  /**
   * 传入参数
   */
  export type SystemMenuConfigSelect = {
    // 语言模式标识
    code?: string;
    // 语言模式名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type ThirdPartyUserInfo = {
    // 标识列
    id?: string;
    // 第三方用户id
    thirdPartyUserId?: string;
    // 电话号码
    phoneNum?: string;
    // 类型(OrganizationTypeEnum)
    type?: string;
    // 昵称
    nickName?: string;
    // 头像地址
    headImgUrl?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type TimeVO = {
    // 支付后未离场超时时间，单位分钟:不设置默认不会超时
    timeOut?: string;
    // 免费时间，单位分钟
    freeParkingTime?: string;
  };

  /**
   * 传入参数
   */
  export type TrafficAnalysisDay = {
    // 序号
    id?: string;
    // 城市编号
    cityCode?: string;
    // 区域编号
    districtCode?: string;
    // 车牌类型
    carLicenseType?: string;
    // 业务时间
    createTime?: string;
    // 时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 本地车辆数/外地车辆数
    carNumbers?: number;
    // 过车总数
    passingTotal?: number;
  };

  /**
   * 传入参数
   */
  export type TrafficFlowHoursVO = {
    // 序号
    id?: string;
    // 城市编号
    cityCode?: string;
    // 城市
    city?: string;
    // 区域编号
    districtCode?: string;
    // 区域
    district?: string;
    // 车场名称
    parkingLotName?: string;
    // 车场
    parkingLotId?: string;
    // 车场属性
    nature?: string;
    // 车牌类型
    carLicenseType?: string;
    // 车场类别
    type?: string;
    // 业务时间
    createTime?: string;
    // 时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 总车流量
    total?: number;
    // 索引
    indexType?: number;
    // 进场车流量
    inTotal?: number;
    // 出场车流量
    outTotal?: number;
  };

  /**
   * 传入参数
   */
  export type TrafficFlowVO = {
    // 城市编号
    cityCode?: string;
    // 城市
    city?: string;
    // 区域编号
    districtCode?: string;
    // 区域
    district?: string;
    // 时间
    ctime?: string;
    // 总车流量
    total?: number;
    // 昨天总车流量
    yesterdayTotal?: number;
    // 进场车流量
    inTotal?: number;
    // 出场车流量
    outTotal?: number;
  };

  /**
   * 传入参数
   */
  export type UpdateParkingSpacePushVO = {
    // 标识列
    id?: string;
    // 车位编号
    sid?: string;
    // 车场id
    parkingLotId?: string;
    // 状态:
    state?: number;
    // 设备在线状态，1在线 2不在线 0未知
    netStatus?: number;
    // 车位停车次数
    stopCarCount?: number;
    // 泊位总数
    allCount?: number;
    // 空余数量
    emptyCount?: number;
    // 已占数量
    occupiedCount?: number;
  };

  /**
   * 传入参数
   */
  export type UsedParkingSpaceTotalVO = {
    // 停车场code
    parkingLotId?: string;
    // 停车场名称
    parkingLotName?: string;
    // 总数
    total?: number;
    // 已用车位总数
    totalUsedSpaces?: number;
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
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type UserAuthVO = {
    // 用户id
    userId?: string;
    // 手机检查是否存在
    phoneExist?: boolean;
    // 类型
    type?: string;
    // 昵称
    nickName?: string;
    // 头像地址
    headImgUrl?: string;
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
  export type UserListVO = {
    // 配置id
    id?: string;
    // 用户名称
    userName?: string;
    // 机构id-用户账号(唯一标识)
    code?: string;
    // 是否配置
    configured?: boolean;
  };

  /**
   * 传入参数
   */
  export type UserMenuConfig = {
    // 用户菜单配置序号
    id?: string;
    // 访问地址
    address?: string;
    // 用户序号
    userId?: string;
    // 菜单序号数组
    menuIds?: string[];
  };

  /**
   * 传入参数
   */
  export type UserParkingLot = {
    // 标识列
    id?: string;
    // 用户序号
    userId?: string;
    // 停车场ID
    parkingLotId?: string;
    // 停车场地址名称
    addressName?: string;
    // 车场名称
    parkingLotName?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type UserReadLog = {
    // 标识列
    id?: string;
    // 用户序号
    userId?: string;
    // 地磁设备日志序号
    deviceGeomagnetismLogId?: string;
    // 进出场时间（进场时间/出场时间 根据车位状态来确定）
    entryExitTime?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 地磁设备车位状态 ，0-无车 1-有车 2-未知
    parkingStatus?: number;
    // 是否已读
    read?: boolean;
    // 停车场ID
    parkingId?: string;
    // 停车场名称
    parkingName?: string;
    // 车位ID
    parkingSpaceId?: string;
    // 车位编号
    parkingSpaceNum?: string;
  };

  /**
   * 传入参数
   */
  export type UserReadOutLog = {
    // 标识列
    id?: string;
    // 用户序号
    userId?: string;
    // 是否已读
    read?: boolean;
    // 停车场ID
    parkingLotId?: string;
    // 车位编号
    parkingSpaceNum?: string;
    // 车牌号
    carNum?: string;
    // 缴费时间
    payTime?: string;
    // 消息时间
    msgTime?: string;
    // 地磁变化时间
    deviceTime?: string;
    // 确认/开闸时间
    outTime?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type UserReadPayLog = {
    // 标识列
    id?: string;
    // 用户序号
    userId?: string;
    // 是否已读
    read?: boolean;
    // 停车场ID
    parkingLotId?: string;
    // 流水号
    serialNumber?: string;
    // 车位编号
    parkingSpaceNum?: string;
    // 车牌号
    carNum?: string;
    // 缴费时间
    payTime?: string;
    // 消息时间
    msgTime?: string;
    // 免费离场时间
    freeTime?: string;
    // 实付金额
    amountActuallyPaid?: string;
    // 是否已发送离场提醒消息
    warningOut?: boolean;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type UserVO = {
    // 用户序号
    id?: string;
    // 机构序号
    oid?: string;
    // 部门序号
    did?: string;
    // 名称
    name?: string;
    // 部门名称
    deptName?: string;
    // 机构名称
    orgName?: string;
  };

  /**
   * 传入参数
   */
  export type VehicleControl = {
    // 标识列
    id?: string;
    // 车牌号
    carNumber?: string;
    // 开始时间
    startTime?: string;
    // 结束时间
    endTime?: string;
    // 结束时间是否长期有效
    valid?: boolean;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 是否启用
    enabled?: boolean;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type VehicleControlDetail = {
    // 标识列
    id?: string;
    // 车场序号
    parkingLotId?: string;
    // 车场类别
    pltype?: string;
    // 进出场类型
    type?: boolean;
    // 车场区域id
    regionId?: string;
    // 车场区域名称
    regionName?: string;
    // 车牌号
    carNumber?: string;
    // 动作时间
    stime?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 经度
    lng?: number;
    // 纬度
    lat?: number;
  };

  /**
   * 传入参数
   */
  export type VehicleControlDetailDataRes = {
    // 车牌号
    carNumber?: string;
    // 车场名称
    parkingLotName?: string;
    // 进场时间
    entryTime?: string;
    // 出场时间
    leavingTime?: string;
    // 停车时长
    parkingTime?: string;
    // 停车状态
    parkingStatus?: string;
    // 进场照片
    entryPic?: string;
    // 出场照片
    leavingPic?: string;
  };

  /**
   * 传入参数
   */
  export type VehicleControlInfoDetailDataRes = {
    // 重点车辆总数
    totalCarNum?: number;
    // 所在车场数
    parkingLotNum?: number;
    // 所在路内车场
    onParkingLotNum?: number;
    // 所在路外车场
    offParkingLotNum?: number;
  };

  /**
   * 传入参数
   */
  export type VehicleRoute = {
    // id
    id?: string;
    // 车牌号
    carLicense?: string;
    // 起始车场id
    sParkingLotId?: string;
    // 起始车场名称
    sParkingLotName?: string;
    // 起始车场城市代码
    sCityCode?: string;
    // 起始车场城市
    sCity?: string;
    // 起始车场区域代码
    sDistrictCode?: string;
    // 起始车场区域
    sDistrict?: string;
    // 起始车场经度
    sLng?: number;
    // 起始车场纬度
    sLat?: number;
    // 终点车场id
    eParkingLotId?: string;
    // 终点车场名称
    eParkingLotName?: string;
    // 终点车场城市代码
    eCityCode?: string;
    // 终点车场城市
    eCity?: string;
    // 终点车场区域代码
    eDistrictCode?: string;
    // 终点车场区域
    eDistrict?: string;
    // 终点车场停车时间
    etime?: string;
    // 路数
    total?: number;
    // 终点车场经度
    eLng?: number;
    // 终点车场纬度
    eLat?: number;
  };

  /**
   * 传入参数
   */
  export type WechatPayAmountResponse = {
    // 总金额
    total?: number;
    // 用户支付金额
    payerTotal?: number;
    // 货币类型
    currency?: string;
    // 用户支付币种
    payerCurrency?: string;
    // 用户退款金额
    payerRefund?: string;
    // 应结退款金额
    settlementRefund?: string;
    // 应结订单金额
    settlementTotal?: string;
    // 优惠退款金额
    discountRefund?: string;
  };

  /**
   * 传入参数
   */
  export type WechatPayJsApiPayload = {
    // 订单号
    outTradeNo?: string;
    // 商品描述
    description?: string;
    // 附加数据
    attach?: string;
    // 订单金额
    amount?: any;
    // 订单优惠标记
    goodsTag?: string;
    // 支付者
    payer?: any;
    // 优惠功能
    detail?: any;
    // 场景信息
    sceneInfo?: any;
    // 结算信息
    settleInfo?: any;
  };

  /**
   * 传入参数
   */
  export type WechatPayJsApiResponse = {
    // 订单详情扩展字符串
    packageInfo?: string;
    // 随机字符串
    nonceStr?: string;
    // 时间戳
    timeStamp?: string;
    // 签名
    paySign?: string;
    // 签名方式
    signType?: string;
    // 应用ID
    appId?: string;
  };

  /**
   * 传入参数
   */
  export type WechatPayPayer = {
    // 微信用户id
    openId?: string;
  };

  /**
   * 传入参数
   */
  export type WechatPayPayload = {
    // 商品描述
    description?: string;
    // 商户订单号
    outTradeNo?: string;
    // 交易结束时间
    timeExpire?: string;
    // 附加数据
    attach?: string;
    // 订单金额
    amount?: any;
    // 订单优惠标记
    goodsTag?: string;
    // 支付者
    payer?: any;
  };

  /**
   * 传入参数
   */
  export type WechatPayQueryOrderResponse = {};

  /**
   * 传入参数
   */
  export type WechatPayRefundPayload = {
    // 微信支付订单号:(微信支付订单号、商户订单号二选一必填)
    transactionId?: string;
    // 商户订单号:(微信支付订单号、商户订单号二选一必填)
    outTradeNo?: string;
    // 退款原因
    reason?: string;
    // 退款结果回调url
    notifyUrl?: string;
    // 退款资金来源
    fundsAccount?: string;
    // 金额信息
    amount?: ApiAppParking.RefundAmountPayload;
    // 退款商品
    goodsDetail?: ApiAppParking.RefundGoodsDetailPayload[];
  };

  /**
   * 传入参数
   */
  export type WechatPayRefundResponse = {
    // 微信支付退款号
    refundId?: string;
    // 商户退款单号
    outRefundNo?: string;
    // 微信支付订单号
    transactionId?: string;
    // 商户订单号
    outTradeNo?: string;
    // 退款渠道
    channel?: string;
    // 退款入账账户
    userReceivedAccount?: string;
    // 退款成功时间
    successTime?: string;
    // 退款创建时间
    createTime?: string;
    // 退款状态
    status?: string;
    // 资金账户
    fundsAccount?: string;
    // 金额信息
    amount?: ApiAppParking.WechatPayAmountResponse;
  };

  //#endregion

  //#region 枚举支持
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

  //#endregion
}

export default ApiAppParking;
