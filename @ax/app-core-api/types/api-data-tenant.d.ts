import ApiCore from './api-core';
import ApiCommon from './api-common';
import ApiDataSettings from './api-data-settings';

// ApiDataTenant 接口合集
declare namespace ApiDataTenant {
  //#region 正式API类型定义
  interface RequestActor {
    /**
     * 增加租户系统菜单数据
     * InterfaceActor
     * @param data
     * @returns {Promise<ApiDataSettings.SystemMenuConfig>}
     */
    ['Interface-create'](
      //
      data: ApiDataSettings.SystemMenuConfig
    ): Promise<ApiDataSettings.SystemMenuConfig>;

    /**
     * 删除租户系统菜单数据
     * InterfaceActor
     * @param tenementCode
     * @param ids
     * @returns {Promise<number>}
     */
    ['Interface-delete'](
      //
      tenementCode: string,
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 查询单个租户系统菜单对象
     * InterfaceActor
     * @param id
     * @returns {Promise<ApiDataSettings.SystemMenuConfig>}
     */
    ['Interface-getById'](
      //
      id: string
    ): Promise<ApiDataSettings.SystemMenuConfig>;

    /**
     * 根据系统分类获取租户系统菜单
     * BizInterfaceActor
     * @param systemClass
     * @param langCode
     * @returns {Promise<any[]>}
     */
    ['Interface-getSystemMenu'](
      //
      systemClass: string,
      //
      langCode: string
    ): Promise<any[]>;

    /**
     * 从系统设置导入
     * BizInterfaceActor
     * @param id
     * @param tCode
     * @param systemAddress
     * @returns {Promise<ApiDataSettings.SystemMenuConfig>}
     */
    ['Interface-importCreate'](
      //
      id: string,
      //
      tCode: string,
      //
      systemAddress: string
    ): Promise<ApiDataSettings.SystemMenuConfig>;

    /**
     * 获取 SystemMenuConfig 的表格分页数据
     * InterfaceActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['Interface-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 SystemMenuConfig 的表格分页表头与总记录数
     * InterfaceActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['Interface-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 修改租户系统菜单数据
     * InterfaceActor
     * @param data
     * @returns {Promise<ApiDataSettings.SystemMenuConfig>}
     */
    ['Interface-update'](
      //
      data: ApiDataSettings.SystemMenuConfig
    ): Promise<ApiDataSettings.SystemMenuConfig>;

    /**
     * 增加功能授权权限数据
     * AuthorizePermissionActor
     * @param datas
     * @param faId
     * @param scode
     * @returns {Promise<any[]>}
     */
    ['authorize-permission-create'](
      //
      datas: any[],
      //
      faId: string,
      //
      scode: string
    ): Promise<any[]>;

    /**
     * 获取当前功能授权的权限数据
     * AuthorizePermissionActor
     * @param faId
     * @returns {Promise<ApiDataTenant.AuthorizePermission[]>}
     */
    ['authorize-permission-list'](
      //
      faId: string
    ): Promise<ApiDataTenant.AuthorizePermission[]>;

    /**
     * 获取功能授权权限模板数据
     * AuthorizePermissionActor
     * @param sCode
     * @param version
     * @returns {Promise<any[]>}
     */
    ['authorize-permission-template-list'](
      //
      sCode: string,
      //
      version: string
    ): Promise<any[]>;

    /**
     * 获取当前功能授权的权限数据
     * AuthorizePermissionActor
     * @param faId
     * @param scode
     * @returns {Promise<ApiDataTenant.SysAppRes>}
     */
    ['authorize-permission-tree-faId-get'](
      //
      faId: string,
      //
      scode: string
    ): Promise<ApiDataTenant.SysAppRes>;

    /**
     * 获取系统应用、模块、页面、授权细目功能授权权限数据
     * AuthorizePermissionActor
     * @param scode
     * @param tcode
     * @returns {Promise<ApiDataTenant.SysAppRes>}
     */
    ['authorize-permission-tree-get'](
      //
      scode: string,
      //
      tcode: string
    ): Promise<ApiDataTenant.SysAppRes>;

    /**
     * 修改功能授权权限数据
     * AuthorizePermissionActor
     * @param datas
     * @param faId
     * @param scode
     * @returns {Promise<any[]>}
     */
    ['authorize-permission-update'](
      //
      datas: any[],
      //
      faId: string,
      //
      scode: string
    ): Promise<any[]>;

    /**
     * 增加 BackupRecord 数据
     * BackupRecordActor
     * @param backupRecord
     * @returns {Promise<ApiDataTenant.BackupRecord>}
     */
    ['backupRecord-create'](
      //
      backupRecord: ApiDataTenant.BackupRecord
    ): Promise<ApiDataTenant.BackupRecord>;

    /**
     * 删除 BackupRecord 数据
     * BackupRecordActor
     * @param id
     * @returns {Promise<number>}
     */
    ['backupRecord-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 BackupRecord 数据
     * BackupRecordActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['backupRecord-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 BackupRecord 数据
     * BackupRecordActor
     * @param id
     * @returns {Promise<ApiDataTenant.BackupRecord>}
     */
    ['backupRecord-get'](
      //
      id: string
    ): Promise<ApiDataTenant.BackupRecord>;

    /**
     * 获取所有 BackupRecord 数据
     * BackupRecordActor
     * @returns {Promise<ApiDataTenant.BackupRecord[]>}
     */
    ['backupRecord-getAll'](): Promise<ApiDataTenant.BackupRecord[]>;

    /**
     * 获取 BackupRecord 的表格总数信息
     * BackupRecordActor
     * @param tid
     * @param backupRecord
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['backupRecord-grid-count'](
      //
      tid: string,
      //
      backupRecord: ApiDataTenant.BackupRecord,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 BackupRecord 的表格列表数据
     * BackupRecordActor
     * @param tid
     * @param backupRecord
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['backupRecord-grid-list'](
      //
      tid: string,
      //
      backupRecord: ApiDataTenant.BackupRecord,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 BackupRecord 的表格分页数据
     * BackupRecordActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['backupRecord-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 BackupRecord 数据
     * BackupRecordActor
     * @param backupRecord
     * @returns {Promise<number>}
     */
    ['backupRecord-update'](
      //
      backupRecord: ApiDataTenant.BackupRecord
    ): Promise<number>;

    /**
     * 增加 CapacityConfig 数据
     * CapacityConfigActor
     * @param capacityConfig
     * @returns {Promise<ApiDataTenant.CapacityConfig>}
     */
    ['capacityConfig-create'](
      //
      capacityConfig: ApiDataTenant.CapacityConfig
    ): Promise<ApiDataTenant.CapacityConfig>;

    /**
     * 删除 CapacityConfig 数据
     * CapacityConfigActor
     * @param id
     * @returns {Promise<number>}
     */
    ['capacityConfig-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 CapacityConfig 数据
     * CapacityConfigActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['capacityConfig-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 CapacityConfig 数据
     * CapacityConfigActor
     * @param id
     * @returns {Promise<ApiDataTenant.CapacityConfig>}
     */
    ['capacityConfig-get'](
      //
      id: string
    ): Promise<ApiDataTenant.CapacityConfig>;

    /**
     * 获取所有 CapacityConfig 数据
     * CapacityConfigActor
     * @returns {Promise<ApiDataTenant.CapacityConfig[]>}
     */
    ['capacityConfig-getAll'](): Promise<ApiDataTenant.CapacityConfig[]>;

    /**
     * 获取 CapacityConfig 的表格总数信息
     * CapacityConfigActor
     * @param tid
     * @param capacityConfig
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['capacityConfig-grid-count'](
      //
      tid: string,
      //
      capacityConfig: ApiDataTenant.CapacityConfig,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 CapacityConfig 的表格列表数据
     * CapacityConfigActor
     * @param tid
     * @param capacityConfig
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['capacityConfig-grid-list'](
      //
      tid: string,
      //
      capacityConfig: ApiDataTenant.CapacityConfig,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 CapacityConfig 的表格分页数据
     * CapacityConfigActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['capacityConfig-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 CapacityConfig 数据
     * CapacityConfigActor
     * @param capacityConfig
     * @returns {Promise<number>}
     */
    ['capacityConfig-update'](
      //
      capacityConfig: ApiDataTenant.CapacityConfig
    ): Promise<number>;

    /**
     * 获取流转控制详情
     * CirculationActor
     * @param tenantCode
     * @param nodeId
     * @returns {Promise<ApiDataTenant.CrculationView[]>}
     */
    ['circulation-get'](
      //
      tenantCode: string,
      //
      nodeId: string
    ): Promise<ApiDataTenant.CrculationView[]>;

    /**
     * 流传控制保存(同时创建线)
     * CirculationActor
     * @param tenantCode
     * @param flowId
     * @param fromId
     * @param crculationViews
     * @param isCondition
     * @param fromFieldType
     * @returns {Promise<ApiDataTenant.RelationLine[]>}
     */
    ['circulation-save'](
      //
      tenantCode: string,
      //
      flowId: string,
      //
      fromId: string,
      //
      crculationViews: ApiDataTenant.CrculationView[],
      //
      isCondition: boolean,
      //
      fromFieldType: string
    ): Promise<ApiDataTenant.RelationLine[]>;

    /**
     * 增加库分类目录项
     * ClassCatalogActor
     * @param data
     * @returns {Promise<ApiDataTenant.ClassCatalog>}
     */
    ['class-catalog-create'](
      //
      data: ApiDataTenant.ClassCatalog
    ): Promise<ApiDataTenant.ClassCatalog>;

    /**
     * 删除多个库分类目录数据
     * ClassCatalogActor
     * @param tenantCode
     * @param langCode
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['class-catalog-delete'](
      //
      tenantCode: string,
      //
      langCode: string,
      //
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条库分类目录数据
     * ClassCatalogActor
     * @param tenantCode
     * @param id
     * @returns {Promise<ApiDataTenant.ClassCatalog>}
     */
    ['class-catalog-get'](
      //
      tenantCode: string,
      //
      id: string
    ): Promise<ApiDataTenant.ClassCatalog>;

    /**
     * 获取库分类目录的列表数据
     * ClassCatalogActor
     * @param tenantCode
     * @param modelWrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['class-catalog-grid-page'](
      //
      tenantCode: string,
      //
      modelWrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取所属分类下拉数据
     * ClassCatalogActor
     * @param tcode
     * @param tdcode
     * @param code
     * @returns {Promise<any[]>}
     */
    ['class-catalog-select'](
      //
      tcode: string,
      //
      tdcode: string,
      //
      code: string
    ): Promise<any[]>;

    /**
     * 修改库分类目录项
     * ClassCatalogActor
     * @param data
     * @returns {Promise<ApiDataTenant.ClassCatalog>}
     */
    ['class-catalog-update'](
      //
      data: ApiDataTenant.ClassCatalog
    ): Promise<ApiDataTenant.ClassCatalog>;

    /**
     * 增加 ComputingResource 数据
     * ComputingResourceActor
     * @param computingResource
     * @returns {Promise<ApiDataTenant.ComputingResource>}
     */
    ['computingResource-create'](
      //
      computingResource: ApiDataTenant.ComputingResource
    ): Promise<ApiDataTenant.ComputingResource>;

    /**
     * 删除 ComputingResource 数据
     * ComputingResourceActor
     * @param id
     * @returns {Promise<number>}
     */
    ['computingResource-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 ComputingResource 数据
     * ComputingResourceActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['computingResource-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 ComputingResource 数据
     * ComputingResourceActor
     * @param id
     * @returns {Promise<ApiDataTenant.ComputingResource>}
     */
    ['computingResource-get'](
      //
      id: string
    ): Promise<ApiDataTenant.ComputingResource>;

    /**
     * 获取所有 ComputingResource 数据
     * ComputingResourceActor
     * @returns {Promise<ApiDataTenant.ComputingResource[]>}
     */
    ['computingResource-getAll'](): Promise<ApiDataTenant.ComputingResource[]>;

    /**
     * 获取 ComputingResource 的表格总数信息
     * ComputingResourceActor
     * @param tid
     * @param computingResource
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['computingResource-grid-count'](
      //
      tid: string,
      //
      computingResource: ApiDataTenant.ComputingResource,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 ComputingResource 的表格列表数据
     * ComputingResourceActor
     * @param tid
     * @param computingResource
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['computingResource-grid-list'](
      //
      tid: string,
      //
      computingResource: ApiDataTenant.ComputingResource,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 ComputingResource 的表格分页数据
     * ComputingResourceActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['computingResource-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 ComputingResource 数据
     * ComputingResourceActor
     * @param computingResource
     * @returns {Promise<number>}
     */
    ['computingResource-update'](
      //
      computingResource: ApiDataTenant.ComputingResource
    ): Promise<number>;

    /**
     * 启用条件详情
     * ConditionActor
     * @param tenantCode
     * @param nodeId
     * @returns {Promise<ApiDataTenant.ConditionalControl[]>}
     */
    ['conditions-get'](
      //
      tenantCode: string,
      //
      nodeId: string
    ): Promise<ApiDataTenant.ConditionalControl[]>;

    /**
     * 启用条件保存
     * ConditionActor
     * @param tenantCode
     * @param type
     * @param condition
     * @returns {Promise<boolean>}
     */
    ['conditions-save'](
      //
      tenantCode: string,
      //
      type: string,
      //
      condition: ApiDataTenant.ConditionalControl[]
    ): Promise<boolean>;

    /**
     * 获取数据字段所属分类下拉数据
     * DataFieldActor
     * @param tcode
     * @param tdcode
     * @returns {Promise<any[]>}
     */
    ['data-field-class-select'](
      //
      tcode: string,
      //
      tdcode: string
    ): Promise<any[]>;

    /**
     * 增加数据字段数据
     * DataFieldActor
     * @param dataField
     * @returns {Promise<ApiDataTenant.DataFieldDetail>}
     */
    ['data-field-create'](
      //
      dataField: ApiDataTenant.DataField
    ): Promise<ApiDataTenant.DataFieldDetail>;

    /**
     * 根据租户标识，库标识，分类标识获取数据字段数据
     * DataFieldActor
     * @param tcode
     * @param tdcode
     * @param ccode
     * @returns {Promise<any[]>}
     */
    ['data-field-datas'](
      //
      tcode: string,
      //
      tdcode: string,
      //
      ccode: string
    ): Promise<any[]>;

    /**
     * 删除数据字段数据
     * DataFieldActor
     * @param list
     * @returns {Promise<any[]>}
     */
    ['data-field-delete'](
      //
      list: ApiDataTenant.DataField[]
    ): Promise<any[]>;

    /**
     * 启用/禁用数据字段
     * DataFieldActor
     * @param tenantCode
     * @param enabled
     * @param ccode
     * @param reqs
     * @returns {Promise<any[]>}
     */
    ['data-field-enabled-update'](
      //
      tenantCode: string,
      //
      enabled: boolean,
      //
      ccode: string,
      //
      reqs: any[]
    ): Promise<any[]>;

    /**
     * 获取单条数据字段数据
     * DataFieldActor
     * @param tenantCode
     * @param ccode
     * @param id
     * @returns {Promise<ApiDataTenant.DataFieldDetail>}
     */
    ['data-field-get'](
      //
      tenantCode: string,
      //
      ccode: string,
      //
      id: string
    ): Promise<ApiDataTenant.DataFieldDetail>;

    /**
     * 根据code获取单条数据字段数据
     * DataFieldActor
     * @param fId
     * @param tcode
     * @param ccode
     * @param bigType
     * @returns {Promise<ApiDataTenant.DataField[]>}
     */
    ['data-field-get-by-code'](
      //
      fId: string,
      //
      tcode: string,
      //
      ccode: string,
      //
      bigType: string
    ): Promise<ApiDataTenant.DataField[]>;

    /**
     * 获取关系字段
     * DataFieldActor
     * @param mainDCode
     * @param mainCCode
     * @param mainFCode
     * @param subDCode
     * @param subCCode
     * @param tcode
     * @param isCreate
     * @returns {Promise<any[]>}
     */
    ['data-field-get-relation-fields'](
      //
      mainDCode: string,
      //
      mainCCode: string,
      //
      mainFCode: string,
      //
      subDCode: string,
      //
      subCCode: string,
      //
      tcode: string,
      //
      isCreate: boolean
    ): Promise<any[]>;

    /**
     * 获取数据字段表格分页列表数据
     * DataFieldActor
     * @param tenantCode
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['data-field-grid-list-page'](
      //
      tenantCode: string,
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取数据字段表格总数信息
     * DataFieldActor
     * @param tenantCode
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['data-field-page-count'](
      //
      tenantCode: string,
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取显示字段数据
     * DataFieldActor
     * @param customMap
     * @returns {Promise<any[]>}
     */
    ['data-field-select-datas'](
      //
      customMap: { [key: string]: string }
    ): Promise<any[]>;

    /**
     * 更新数据字段上移下移置顶置底层级顺序
     * DataFieldActor
     * @param tenantCode
     * @param type
     * @param tdcode
     * @param ccode
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['data-field-sort-update'](
      //
      tenantCode: string,
      //
      type: string,
      //
      tdcode: string,
      //
      ccode: string,
      //
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取数据字段的字段来源下拉数据
     * DataFieldActor
     * @param tcode
     * @param tdcode
     * @param ccode
     * @returns {Promise<any[]>}
     */
    ['data-field-source-select'](
      //
      tcode: string,
      //
      tdcode: string,
      //
      ccode: string
    ): Promise<any[]>;

    /**
     * 更新数据字段数据
     * DataFieldActor
     * @param map
     * @returns {Promise<ApiDataTenant.DataFieldDetail>}
     */
    ['data-field-update'](
      //
      map: ApiDataTenant.DataField
    ): Promise<ApiDataTenant.DataFieldDetail>;

    /**
     * 被修改父节点字段数据
     * DataFieldActor
     * @param tenantCode
     * @param ccode
     * @param req
     * @returns {Promise<ApiDataTenant.DataFieldDetail>}
     */
    ['data-field-updateData-update'](
      //
      tenantCode: string,
      //
      ccode: string,
      //
      req: ApiDataTenant.DataFieldUpdateDataReq
    ): Promise<ApiDataTenant.DataFieldDetail>;

    /**
     * 增加 DataBackup 数据
     * DataBackupActor
     * @param dataBackup
     * @returns {Promise<ApiDataTenant.DataBackup>}
     */
    ['dataBackup-create'](
      //
      dataBackup: ApiDataTenant.DataBackup
    ): Promise<ApiDataTenant.DataBackup>;

    /**
     * 删除 DataBackup 数据
     * DataBackupActor
     * @param id
     * @returns {Promise<number>}
     */
    ['dataBackup-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 DataBackup 数据
     * DataBackupActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['dataBackup-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 DataBackup 数据
     * DataBackupActor
     * @param id
     * @returns {Promise<ApiDataTenant.DataBackup>}
     */
    ['dataBackup-get'](
      //
      id: string
    ): Promise<ApiDataTenant.DataBackup>;

    /**
     * 获取所有 DataBackup 数据
     * DataBackupActor
     * @returns {Promise<ApiDataTenant.DataBackup[]>}
     */
    ['dataBackup-getAll'](): Promise<ApiDataTenant.DataBackup[]>;

    /**
     * 获取 DataBackup 的表格总数信息
     * DataBackupActor
     * @param tid
     * @param dataBackup
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['dataBackup-grid-count'](
      //
      tid: string,
      //
      dataBackup: ApiDataTenant.DataBackup,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 DataBackup 的表格列表数据
     * DataBackupActor
     * @param tid
     * @param dataBackup
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['dataBackup-grid-list'](
      //
      tid: string,
      //
      dataBackup: ApiDataTenant.DataBackup,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 DataBackup 的表格分页数据
     * DataBackupActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['dataBackup-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 DataBackup 数据
     * DataBackupActor
     * @param dataBackup
     * @returns {Promise<number>}
     */
    ['dataBackup-update'](
      //
      dataBackup: ApiDataTenant.DataBackup
    ): Promise<number>;

    /**
     * 增加 DataResource 数据
     * DataResourceActor
     * @param dataResource
     * @returns {Promise<ApiDataTenant.DataResource>}
     */
    ['dataResource-create'](
      //
      dataResource: ApiDataTenant.DataResource
    ): Promise<ApiDataTenant.DataResource>;

    /**
     * 删除 DataResource 数据
     * DataResourceActor
     * @param id
     * @returns {Promise<number>}
     */
    ['dataResource-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 DataResource 数据
     * DataResourceActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['dataResource-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 DataResource 数据
     * DataResourceActor
     * @param id
     * @returns {Promise<ApiDataTenant.DataResource>}
     */
    ['dataResource-get'](
      //
      id: string
    ): Promise<ApiDataTenant.DataResource>;

    /**
     * 获取所有 DataResource 数据
     * DataResourceActor
     * @returns {Promise<ApiDataTenant.DataResource[]>}
     */
    ['dataResource-getAll'](): Promise<ApiDataTenant.DataResource[]>;

    /**
     * 获取 DataResource 的表格总数信息
     * DataResourceActor
     * @param tid
     * @param dataResource
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['dataResource-grid-count'](
      //
      tid: string,
      //
      dataResource: ApiDataTenant.DataResource,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 DataResource 的表格列表数据
     * DataResourceActor
     * @param tid
     * @param dataResource
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['dataResource-grid-list'](
      //
      tid: string,
      //
      dataResource: ApiDataTenant.DataResource,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 DataResource 的表格分页数据
     * DataResourceActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['dataResource-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新 DataResource 数据
     * DataResourceActor
     * @param dataResource
     * @returns {Promise<number>}
     */
    ['dataResource-update'](
      //
      dataResource: ApiDataTenant.DataResource
    ): Promise<number>;

    /**
     * 增加工作流
     * FlowActor
     * @param tenantCode
     * @param workflow
     * @returns {Promise<ApiDataTenant.Workflow>}
     */
    ['flow-create'](
      //
      tenantCode: string,
      //
      workflow: ApiDataTenant.Workflow
    ): Promise<ApiDataTenant.Workflow>;

    /**
     * 删除工作流
     * FlowActor
     * @param tenantCode
     * @param flowIds
     * @returns {Promise<number>}
     */
    ['flow-delete'](
      //
      tenantCode: string,
      //
      flowIds: string[]
    ): Promise<number>;

    /**
     * 校验工作流是否可以删除
     * FlowActor
     * @param tenantCode
     * @param flowIds
     * @returns {Promise<ApiDataTenant.Workflow[]>}
     */
    ['flow-deleteCheck'](
      //
      tenantCode: string,
      //
      flowIds: string[]
    ): Promise<ApiDataTenant.Workflow[]>;

    /**
     * 启用工作流
     * FlowActor
     * @param tenantCode
     * @param flowIds
     * @returns {Promise<string[]>}
     */
    ['flow-enable'](
      //
      tenantCode: string,
      //
      flowIds: string[]
    ): Promise<string[]>;

    /**
     * 获取工作流下拉列表
     * FlowActor
     * @param tenantCode
     * @returns {Promise<ApiDataTenant.WorkflowView[]>}
     */
    ['flow-getAll'](
      //
      tenantCode: string
    ): Promise<ApiDataTenant.WorkflowView[]>;

    /**
     * 获取工作流中所有节点
     * FlowActor
     * @param tenantCode
     * @param flowId
     * @returns {Promise<ApiDataTenant.Node[]>}
     */
    ['flow-getNodes'](
      //
      tenantCode: string,
      //
      flowId: string
    ): Promise<ApiDataTenant.Node[]>;

    /**
     * 跳转节点下拉框
     * CirculationActor
     * @param tenantCode
     * @param flowId
     * @param nodeId
     * @returns {Promise<ApiDataTenant.NodeView[]>}
     */
    ['flow-getNodes-selectView'](
      //
      tenantCode: string,
      //
      flowId: string,
      //
      nodeId: string
    ): Promise<ApiDataTenant.NodeView[]>;

    /**
     * 获取单条工作流
     * FlowActor
     * @param tenantCode
     * @param workflowId
     * @returns {Promise<ApiDataTenant.WorkflowGrid>}
     */
    ['flow-getOne'](
      //
      tenantCode: string,
      //
      workflowId: string
    ): Promise<ApiDataTenant.WorkflowGrid>;

    /**
     * 根据工作流id获得工作流程数据
     * FlowActor
     * @param tenantCode
     * @param flowId
     * @returns {Promise<{[key:string]:any}>}
     */
    ['flow-nodes-links-get'](
      //
      tenantCode: string,
      //
      flowId: string
    ): Promise<{ [key: string]: any }>;

    /**
     * 获取所有工作流数据信息
     * FlowActor
     * @param tenantCode
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['flow-page'](
      //
      tenantCode: string,
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取所有工作流分页表头
     * FlowActor
     * @param tenantCode
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['flow-page-count'](
      //
      tenantCode: string,
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 停用工作流
     * FlowActor
     * @param tenantCode
     * @param flowIds
     * @returns {Promise<boolean>}
     */
    ['flow-prohibit'](
      //
      tenantCode: string,
      //
      flowIds: string[]
    ): Promise<boolean>;

    /**
     * 保存工作流程
     * FlowActor
     * @param tenantCode
     * @param ngs
     * @returns {Promise<boolean>}
     */
    ['flow-save'](
      //
      tenantCode: string,
      //
      ngs: ApiDataTenant.NodeGird[]
    ): Promise<boolean>;

    /**
     * 编辑工作流
     * FlowActor
     * @param tenantCode
     * @param workflow
     * @returns {Promise<ApiDataTenant.Workflow>}
     */
    ['flow-update'](
      //
      tenantCode: string,
      //
      workflow: ApiDataTenant.Workflow
    ): Promise<ApiDataTenant.Workflow>;

    /**
     * 增加应用功能授权数据
     * FunctionAuthorizationActor
     * @param datas
     * @returns {Promise<ApiDataTenant.FunctionAuthorizationGrid[]>}
     */
    ['function-authorization-create'](
      //
      datas: ApiDataTenant.FunctionAuthorization[]
    ): Promise<ApiDataTenant.FunctionAuthorizationGrid[]>;

    /**
     * 删除应用功能授权数据
     * FunctionAuthorizationActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['function-authorization-delete'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条应用功能授权数据
     * FunctionAuthorizationActor
     * @param id
     * @returns {Promise<ApiDataTenant.FunctionAuthorization>}
     */
    ['function-authorization-get'](
      //
      id: string
    ): Promise<ApiDataTenant.FunctionAuthorization>;

    /**
     * 根据租户标识获取应用功能授权的表格总数信息
     * FunctionAuthorizationActor
     * @param tid
     * @param data
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['function-authorization-grid-count'](
      //
      tid: string,
      //
      data: ApiDataTenant.FunctionAuthorization,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 根据租户标识获取应用功能授权的表格列表数据
     * FunctionAuthorizationActor
     * @param modelWrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['function-authorization-grid-list'](
      //
      modelWrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新应用功能授权数据
     * FunctionAuthorizationActor
     * @param data
     * @returns {Promise<ApiDataTenant.FunctionAuthorizationGrid>}
     */
    ['function-authorization-update'](
      //
      data: ApiDataTenant.FunctionAuthorization
    ): Promise<ApiDataTenant.FunctionAuthorizationGrid>;

    /**
     * 组件功能展示
     * FunctionsActor
     * @param scCode
     * @param tCode
     * @returns {Promise<ApiDataTenant.FunctionsGrid[]>}
     */
    ['function-list'](
      //
      scCode: string,
      //
      tCode: string
    ): Promise<ApiDataTenant.FunctionsGrid[]>;

    /**
     * 批量编辑组件功能
     * FunctionsActor
     * @param functions
     * @param tCode
     * @param scCode
     * @returns {Promise<number>}
     */
    ['function-update'](
      //
      functions: any[],
      //
      tCode: string,
      //
      scCode: string
    ): Promise<number>;

    /**
     * 根据系统地址获取租户系统菜单或系统菜单详情
     * BizInterfaceActor
     * @param systemAddress
     * @returns {Promise<ApiDataTenant.InterfaceSystemMenuGrid>}
     */
    ['getBySystemAddress'](
      //
      systemAddress: string
    ): Promise<ApiDataTenant.InterfaceSystemMenuGrid>;

    /**
     * 人工录入-表数据
     * InputConfigActor
     * @param tenantCode
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['inputConfig-artificial-page'](
      //
      tenantCode: string,
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 人工录入-表头
     * InputConfigActor
     * @param tenantCode
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['inputConfig-artificial-page-count'](
      //
      tenantCode: string,
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 人工录入-保存
     * InputConfigActor
     * @param tenantCode
     * @param nodeId
     * @param datas
     * @returns {Promise<boolean>}
     */
    ['inputConfig-artificial-save'](
      //
      tenantCode: string,
      //
      nodeId: string,
      //
      datas: ApiDataTenant.InputConfigArtificialView[]
    ): Promise<boolean>;

    /**
     * 录入配置-根据工作流和节点id获取主表单和副表单
     * InputConfigActor
     * @param tenantCode
     * @param wordFlowId
     * @param nodeId
     * @returns {Promise<ApiDataTenant.FormCategoryView[]>}
     */
    ['inputConfig-get-formCategory'](
      //
      tenantCode: string,
      //
      wordFlowId: string,
      //
      nodeId: string
    ): Promise<ApiDataTenant.FormCategoryView[]>;

    /**
     * 获取界面风格下拉数据
     * BizInterfaceActor
     * @returns {Promise<any[]>}
     */
    ['interface-style-select'](): Promise<any[]>;

    /**
     * 增加图层数据
     * LayerActor
     * @param tenantCode
     * @param data
     * @returns {Promise<ApiDataTenant.LayerDetailVO>}
     */
    ['layer-create'](
      //
      tenantCode: string,
      //
      data: ApiDataTenant.Layer
    ): Promise<ApiDataTenant.LayerDetailVO>;

    /**
     * 删除图层数据
     * LayerActor
     * @param tenantCode
     * @param ids
     * @returns {Promise<number>}
     */
    ['layer-delete'](
      //
      tenantCode: string,
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条图层详情
     * LayerActor
     * @param tenantCode
     * @param id
     * @returns {Promise<ApiDataTenant.LayerDetailVO>}
     */
    ['layer-get'](
      //
      tenantCode: string,
      //
      id: string
    ): Promise<ApiDataTenant.LayerDetailVO>;

    /**
     * 获取 Layer 的表格分页数据
     * LayerActor
     * @param tenantCode
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['layer-page'](
      //
      tenantCode: string,
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 Layer 的表格分页表头与总记录数
     * LayerActor
     * @param tenantCode
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['layer-page-count'](
      //
      tenantCode: string,
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新图层数据
     * LayerActor
     * @param tenantCode
     * @param data
     * @returns {Promise<ApiDataTenant.LayerDetailVO>}
     */
    ['layer-update'](
      //
      tenantCode: string,
      //
      data: ApiDataTenant.Layer
    ): Promise<ApiDataTenant.LayerDetailVO>;

    /**
     * 增加地图配置数据
     * MapConfigActor
     * @param tenantCode
     * @param data
     * @returns {Promise<ApiDataTenant.MapConfig>}
     */
    ['map-config-create'](
      //
      tenantCode: string,
      //
      data: ApiDataTenant.MapConfig
    ): Promise<ApiDataTenant.MapConfig>;

    /**
     * 删除地图配置数据
     * MapConfigActor
     * @param tenantCode
     * @param ids
     * @returns {Promise<number>}
     */
    ['map-config-delete'](
      //
      tenantCode: string,
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条地图配置详情
     * MapConfigActor
     * @param tenantCode
     * @param id
     * @returns {Promise<ApiDataTenant.MapConfig>}
     */
    ['map-config-get'](
      //
      tenantCode: string,
      //
      id: string
    ): Promise<ApiDataTenant.MapConfig>;

    /**
     * 获取地图配置的表格列表数据-分页
     * MapConfigActor
     * @param tenantCode
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['map-config-page'](
      //
      tenantCode: string,
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取地图配置的表格总数信息
     * MapConfigActor
     * @param tenantCode
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['map-config-page-count'](
      //
      tenantCode: string,
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新地图配置数据
     * MapConfigActor
     * @param tenantCode
     * @param data
     * @returns {Promise<ApiDataTenant.MapConfig>}
     */
    ['map-config-update'](
      //
      tenantCode: string,
      //
      data: ApiDataTenant.MapConfig
    ): Promise<ApiDataTenant.MapConfig>;

    /**
     * 增加地图数据
     * MapInfoActor
     * @param tenantCode
     * @param data
     * @returns {Promise<ApiDataTenant.MapInfoDetail>}
     */
    ['map-create'](
      //
      tenantCode: string,
      //
      data: ApiDataTenant.MapInfo
    ): Promise<ApiDataTenant.MapInfoDetail>;

    /**
     * 删除地图数据
     * MapInfoActor
     * @param tenantCode
     * @param ids
     * @returns {Promise<number>}
     */
    ['map-delete'](
      //
      tenantCode: string,
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条地图详情
     * MapInfoActor
     * @param tenantCode
     * @param id
     * @returns {Promise<ApiDataTenant.MapInfoDetail>}
     */
    ['map-get'](
      //
      tenantCode: string,
      //
      id: string
    ): Promise<ApiDataTenant.MapInfoDetail>;

    /**
     * 根据id列表获取地图名称列表
     * MapInfoActor
     * @param tenantCode
     * @param ids
     * @returns {Promise<string>}
     */
    ['map-info-Id-to-name'](
      //
      tenantCode: string,
      //
      ids: string
    ): Promise<string>;

    /**
     * 获取地图列表
     * MapInfoActor
     * @param tenantCode
     * @returns {Promise<ApiDataTenant.MapSelect[]>}
     */
    ['map-info-select'](
      //
      tenantCode: string
    ): Promise<ApiDataTenant.MapSelect[]>;

    /**
     * 获取地图的表格列表数据-分页
     * MapInfoActor
     * @param tenantCode
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['map-page'](
      //
      tenantCode: string,
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取地图的表格总数信息
     * MapInfoActor
     * @param tenantCode
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['map-page-count'](
      //
      tenantCode: string,
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新地图数据
     * MapInfoActor
     * @param tenantCode
     * @param data
     * @returns {Promise<ApiDataTenant.MapInfoDetail>}
     */
    ['map-update'](
      //
      tenantCode: string,
      //
      data: ApiDataTenant.MapInfo
    ): Promise<ApiDataTenant.MapInfoDetail>;

    /**
     * 增加节点
     * NodeActor
     * @param tenantCode
     * @param workflowId
     * @param node
     * @returns {Promise<ApiDataTenant.Node>}
     */
    ['node-create'](
      //
      tenantCode: string,
      //
      workflowId: string,
      //
      node: ApiDataTenant.NodeGird
    ): Promise<ApiDataTenant.Node>;

    /**
     * 删除/清空节点
     * NodeActor
     * @param tenantCode
     * @param workflowId
     * @param nodeId
     * @returns {Promise<boolean>}
     */
    ['node-delete'](
      //
      tenantCode: string,
      //
      workflowId: string,
      //
      nodeId: string
    ): Promise<boolean>;

    /**
     * 根据节点id获取节点
     * NodeActor
     * @param tenantCode
     * @param nodeId
     * @returns {Promise<ApiDataTenant.NodeDetail>}
     */
    ['node-get'](
      //
      tenantCode: string,
      //
      nodeId: string
    ): Promise<ApiDataTenant.NodeDetail>;

    /**
     * 根据节点id获取节点Grid
     * NodeActor
     * @param tenantCode
     * @param nodeId
     * @returns {Promise<ApiDataTenant.NodeGird>}
     */
    ['node-get-grid'](
      //
      tenantCode: string,
      //
      nodeId: string
    ): Promise<ApiDataTenant.NodeGird>;

    /**
     * 保存所有节点
     * NodeActor
     * @param tenantCode
     * @param workflowId
     * @returns {Promise<boolean>}
     */
    ['node-save'](
      //
      tenantCode: string,
      //
      workflowId: string
    ): Promise<boolean>;

    /**
     * 更新节点
     * NodeActor
     * @param tenantCode
     * @param node
     * @returns {Promise<number>}
     */
    ['node-update'](
      //
      tenantCode: string,
      //
      node: ApiDataTenant.Node
    ): Promise<number>;

    /**
     * 更新节点
     * NodeActor
     * @param tenantCode
     * @param id
     * @param state
     * @returns {Promise<boolean>}
     */
    ['node-update-valid'](
      //
      tenantCode: string,
      //
      id: string,
      //
      state: boolean
    ): Promise<boolean>;

    /**
     * 设置节点有效性
     * NodeActor
     * @param tenantCode
     * @param nodeId
     * @param state
     * @returns {Promise<boolean>}
     */
    ['node-valid-update'](
      //
      tenantCode: string,
      //
      nodeId: string,
      //
      state: boolean
    ): Promise<boolean>;

    /**
     * 获取 parameter 的表格分页数据
     * ParametersActor
     * @param wrapper
     * @param tCode
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['parameter-list'](
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      tCode: string
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 parameter 表头
     * ParametersActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['parameter-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 重置默认值
     * ParametersActor
     * @param tCode
     * @param scCode
     * @param parCode
     * @returns {Promise<ApiDataTenant.ParametersGrid>}
     */
    ['parameters-acquiescence'](
      //
      tCode: string,
      //
      scCode: string,
      //
      parCode: string
    ): Promise<ApiDataTenant.ParametersGrid>;

    /**
     * 查询单个参数
     * ParametersActor
     * @param tCode
     * @param scCode
     * @param parCode
     * @returns {Promise<ApiDataTenant.ParametersGrid>}
     */
    ['parameters-getCodeParameters'](
      //
      tCode: string,
      //
      scCode: string,
      //
      parCode: string
    ): Promise<ApiDataTenant.ParametersGrid>;

    /**
     * 修改参数默认值
     * ParametersActor
     * @param data
     * @returns {Promise<ApiDataTenant.ParametersGrid>}
     */
    ['parameters-update'](
      //
      data: ApiDataTenant.Parameters
    ): Promise<ApiDataTenant.ParametersGrid>;

    /**
     * 校验库名称
     * ResourceActor
     * @param dbName
     * @returns {Promise<boolean>}
     */
    ['resource-DataResource-check-dbName'](
      //
      dbName: string
    ): Promise<boolean>;

    /**
     * 备份
     * ResourceActor
     * @param backupStrategy
     * @param backupContent
     * @param tCode
     * @param userId
     * @returns {Promise<ApiDataTenant.BackupRecord>}
     */
    ['resource-backup'](
      //
      backupStrategy: string,
      //
      backupContent: string,
      //
      tCode: string,
      //
      userId: string
    ): Promise<ApiDataTenant.BackupRecord>;

    /**
     * 修改密码
     * ResourceActor
     * @param tCode
     * @param dbName
     * @param dbUsername
     * @param newPassword
     * @returns {Promise<boolean>}
     */
    ['resource-change-dbPassword'](
      //
      tCode: string,
      //
      dbName: string,
      //
      dbUsername: string,
      //
      newPassword: string
    ): Promise<boolean>;

    /**
     * 根据租户标识获取其所有资源数据
     * ResourceActor
     * @param tCode
     * @returns {Promise<ApiDataTenant.AllResponse>}
     */
    ['resource-get'](
      //
      tCode: string
    ): Promise<ApiDataTenant.AllResponse>;

    /**
     * 获取备份表格总数信息
     * ResourceActor
     * @param tid
     * @param searchText
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['resource-grid-count'](
      //
      tid: string,
      //
      searchText: string
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取备份表格列表数据
     * ResourceActor
     * @param tid
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['resource-grid-list'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 展示备份记录列表
     * ResourceActor
     * @param tCode
     * @returns {Promise<ApiDataTenant.BackupRecord[]>}
     */
    ['resource-list-BackupRecord'](
      //
      tCode: string
    ): Promise<ApiDataTenant.BackupRecord[]>;

    /**
     * 还原
     * ResourceActor
     * @param mongo_file_path
     * @param fileNameMongo
     * @param tCode
     * @param password
     * @returns {Promise<boolean>}
     */
    ['resource-restore'](
      //
      mongo_file_path: string,
      //
      fileNameMongo: string,
      //
      tCode: string,
      //
      password: string
    ): Promise<boolean>;

    /**
     * 更新行业资源信息
     * ResourceActor
     * @param data
     * @returns {Promise<number>}
     */
    ['resource-update-CapacityConfig'](
      //
      data: ApiDataTenant.CapacityConfig
    ): Promise<number>;

    /**
     * 更新计算资源信息
     * ResourceActor
     * @param data
     * @returns {Promise<number>}
     */
    ['resource-update-ComputingResource'](
      //
      data: ApiDataTenant.ComputingResource
    ): Promise<number>;

    /**
     * 更新数据备份信息
     * ResourceActor
     * @param data
     * @returns {Promise<number>}
     */
    ['resource-update-DataBackup'](
      //
      data: ApiDataTenant.DataBackup
    ): Promise<number>;

    /**
     * 更新数据资源信息
     * ResourceActor
     * @param data
     * @param isChangedUsername
     * @returns {Promise<number>}
     */
    ['resource-update-DataResource'](
      //
      data: ApiDataTenant.DataResource,
      //
      isChangedUsername: boolean
    ): Promise<number>;

    /**
     * 系统组件的表格列表数据
     * BackupSysComponentActor
     * @param wrapper
     * @param tcode
     * @param isModify
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['sys-BackupSysComponent-page'](
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      tcode: string,
      //
      isModify: boolean
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 系统组件的表格列表数据
     * BackupSysComponentActor
     * @param tid
     * @param wrapper
     * @param tcode
     * @param isModify
     * @param apppendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['sys-BackupSysComponent-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      tcode: string,
      //
      isModify: boolean,
      //
      apppendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 创建租户-系统下拉
     * TenantActor
     * @returns {Promise<any[]>}
     */
    ['sys-app-select-to-tenant-create'](): Promise<any[]>;

    /**
     * 增加菜单项
     * SystemMenuActor
     * @param tenementCode
     * @param positionType
     * @param selectId
     * @param data
     * @returns {Promise<boolean>}
     */
    ['system-menu-create'](
      //
      tenementCode: string,
      //
      positionType: string,
      //
      selectId: string,
      //
      data: ApiDataTenant.SystemMenu
    ): Promise<boolean>;

    /**
     * 删除多个菜单数据
     * SystemMenuActor
     * @param tenementCode
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['system-menu-delete'](
      //
      tenementCode: string,
      //
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条菜单数据
     * SystemMenuActor
     * @param tenementCode
     * @param id
     * @returns {Promise<ApiDataTenant.SystemMenu>}
     */
    ['system-menu-get'](
      //
      tenementCode: string,
      //
      id: string
    ): Promise<ApiDataTenant.SystemMenu>;

    /**
     * 获取菜单的表格列表数据
     * SystemMenuActor
     * @param tcode
     * @param tsmcId
     * @returns {Promise<ApiDataTenant.SystemMenuGrid[]>}
     */
    ['system-menu-grid-list'](
      //
      tcode: string,
      //
      tsmcId: string
    ): Promise<ApiDataTenant.SystemMenuGrid[]>;

    /**
     * 更新系统菜单层级顺序
     * SystemMenuActor
     * @param tenementCode
     * @param type
     * @param reqs
     * @param targetId
     * @returns {Promise<boolean>}
     */
    ['system-menu-level-order-update'](
      //
      tenementCode: string,
      //
      type: string,
      //
      reqs: any[],
      //
      targetId: string
    ): Promise<boolean>;

    /**
     * 获取登录后转到指定页面下拉数据
     * SystemMenuActor
     * @param tcode
     * @param tsmcId
     * @returns {Promise<ApiDataTenant.MenuLoginSpecifySelect[]>}
     */
    ['system-menu-login-specify-select'](
      //
      tcode: string,
      //
      tsmcId: string
    ): Promise<ApiDataTenant.MenuLoginSpecifySelect[]>;

    /**
     * 修改菜单项
     * SystemMenuActor
     * @param tenementCode
     * @param data
     * @returns {Promise<ApiDataTenant.SystemMenu>}
     */
    ['system-menu-update'](
      //
      tenementCode: string,
      //
      data: ApiDataTenant.SystemMenu
    ): Promise<ApiDataTenant.SystemMenu>;

    /**
     * 获取租户地址模式下拉数据
     * BizTenantActor
     * @returns {Promise<any[]>}
     */
    ['tenant-AddressType-select'](): Promise<any[]>;

    /**
     * 获取租户所属语言下拉数据
     * BizTenantActor
     * @returns {Promise<any[]>}
     */
    ['tenant-LanguageType-select'](): Promise<any[]>;

    /**
     * 增加租户数据
     * TenantActor
     * @param data
     * @param cap
     * @param dataRes
     * @param dcodes
     * @param menuIds
     * @param mapInfos
     * @returns {Promise<ApiDataTenant.Tenant>}
     */
    ['tenant-create'](
      //
      data: ApiDataTenant.Tenant,
      //
      cap: ApiDataTenant.CapacityConfig,
      //
      dataRes: ApiDataTenant.DataResource,
      //
      dcodes: string[],
      //
      menuIds: string[],
      //
      mapInfos: ApiDataTenant.MapInfoTenantVO
    ): Promise<ApiDataTenant.Tenant>;

    /**
     * 删除多个租户管理页面数据
     * TenantActor
     * @param codes
     * @returns {Promise<number>}
     */
    ['tenant-delete'](
      //
      codes: string[]
    ): Promise<number>;

    /**
     * 获取细页面租户信息
     * BizTenantActor
     * @param id
     * @returns {Promise<ApiDataTenant.TenantDetail>}
     */
    ['tenant-getById'](
      //
      id: string
    ): Promise<ApiDataTenant.TenantDetail>;

    /**
     * 名称标识唯一校验
     * BizTenantActor
     * @param field
     * @param value
     * @returns {Promise<boolean>}
     */
    ['tenant-getVerifyCount'](
      //
      field: string,
      //
      value: string
    ): Promise<boolean>;

    /**
     * 获取 Tenant 的表格总数信息
     * TenantActor
     * @param tid
     * @param tenant
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['tenant-grid-count'](
      //
      tid: string,
      //
      tenant: ApiDataTenant.Tenant,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 Tenant 的表格列表数据
     * TenantActor
     * @param tid
     * @param tenant
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['tenant-grid-list'](
      //
      tid: string,
      //
      tenant: ApiDataTenant.Tenant,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 Tenant 的表格分页数据
     * TenantActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['tenant-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 Tenant 的表格分页表头与总记录数
     * TenantActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['tenant-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 动态下拉框
     * BizTenantActor
     * @param name
     * @returns {Promise<ApiDataTenant.TenantComboBox[]>}
     */
    ['tenant-tenantType-ComboBox'](
      //
      name: string
    ): Promise<ApiDataTenant.TenantComboBox[]>;

    /**
     * 获取租户规模类型下拉数据
     * BizTenantActor
     * @returns {Promise<any[]>}
     */
    ['tenant-tenantType-select'](): Promise<any[]>;

    /**
     * 更新租户数据
     * TenantActor
     * @param data
     * @returns {Promise<ApiDataTenant.Tenant>}
     */
    ['tenant-update'](
      //
      data: ApiDataTenant.Tenant
    ): Promise<ApiDataTenant.Tenant>;

    /**
     * 修改租户密码
     * BizTenantActor
     * @param id
     * @param Password
     * @returns {Promise<ApiDataTenant.Tenant>}
     */
    ['tenant-updatePassword'](
      //
      id: string,
      //
      Password: string
    ): Promise<ApiDataTenant.Tenant>;

    /**
     * 修改租户账号
     * BizTenantActor
     * @param id
     * @param TenantID
     * @param Password
     * @returns {Promise<ApiDataTenant.Tenant>}
     */
    ['tenant-updateTenantID'](
      //
      id: string,
      //
      TenantID: string,
      //
      Password: string
    ): Promise<ApiDataTenant.Tenant>;

    /**
     * 获取单条数据库数据
     * TenantDatabaseActor
     * @param tenantCode
     * @param id
     * @returns {Promise<ApiDataTenant.TenantDatabaseGrid>}
     */
    ['tenantDatabase-get'](
      //
      tenantCode: string,
      //
      id: string
    ): Promise<ApiDataTenant.TenantDatabaseGrid>;

    /**
     * 获取所有数据库
     * TenantDatabaseActor
     * @param tenantCode
     * @returns {Promise<ApiDataTenant.TenantDatabase[]>}
     */
    ['tenantDatabase-get-all'](
      //
      tenantCode: string
    ): Promise<ApiDataTenant.TenantDatabase[]>;

    /**
     * 获取字段来源下拉列表
     * TenantDatabaseActor
     * @param tcode
     * @returns {Promise<any[]>}
     */
    ['tenantDatabase-get-fieldSource'](
      //
      tcode: string
    ): Promise<any[]>;

    /**
     * 获取关联的租户数据库信息
     * TenantDatabaseActor
     * @param tCode
     * @param code
     * @returns {Promise<any[]>}
     */
    ['tenantDatabase-get-relations'](
      //
      tCode: string,
      //
      code: string
    ): Promise<any[]>;

    /**
     * 获取数据库配置中所属租户
     * TenantDatabaseActor
     * @returns {Promise<ApiDataTenant.TenantComboBox[]>}
     */
    ['tenantDatabase-get-tenantComboBox'](): Promise<
      ApiDataTenant.TenantComboBox[]
    >;

    /**
     * 获取某个租户下所有数据库
     * TenantDatabaseActor
     * @param tCode
     * @returns {Promise<any[]>}
     */
    ['tenantDatabase-get-tenantDatabase-by-tCode'](
      //
      tCode: string
    ): Promise<any[]>;

    /**
     * 获取数据字段表格列表数据
     * TenantDatabaseActor
     * @param tenantCode
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['tenantDatabase-grid-list-page'](
      //
      tenantCode: string,
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 初始化数据库
     * TenantDatabaseActor
     * @param datas
     * @returns {Promise<boolean>}
     */
    ['tenantDatabase-initDatabase'](
      //
      datas: any[]
    ): Promise<boolean>;

    /**
     * 获取数据库表格总数信息
     * TenantDatabaseActor
     * @param tenantCode
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['tenantDatabase-page-count'](
      //
      tenantCode: string,
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 启用数据库
     * TenantDatabaseActor
     * @param tCode
     * @param dCodes
     * @param isInit
     * @returns {Promise<boolean>}
     */
    ['tenantDatabase-startDatabase'](
      //
      tCode: string,
      //
      dCodes: string[],
      //
      isInit: boolean
    ): Promise<boolean>;

    /**
     * 增加拓扑目录项
     * TopologyDirectoryActor
     * @param data
     * @returns {Promise<ApiDataTenant.TopologyDirectoryGrid>}
     */
    ['topology-directory-create'](
      //
      data: ApiDataTenant.TopologyDirectory
    ): Promise<ApiDataTenant.TopologyDirectoryGrid>;

    /**
     * 删除多个拓扑目录数据
     * TopologyDirectoryActor
     * @param tcode
     * @param dcode
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['topology-directory-delete'](
      //
      tcode: string,
      //
      dcode: string,
      //
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条拓扑目录数据
     * TopologyDirectoryActor
     * @param tenantCode
     * @param id
     * @returns {Promise<ApiDataTenant.TopologyDirectory>}
     */
    ['topology-directory-get'](
      //
      tenantCode: string,
      //
      id: string
    ): Promise<ApiDataTenant.TopologyDirectory>;

    /**
     * 获取分页表格列表数据
     * TopologyDirectoryActor
     * @param tenantCode
     * @param modelWrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['topology-directory-grid-list-page'](
      //
      tenantCode: string,
      //
      modelWrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取层级定义数据
     * TopologyDirectoryActor
     * @param tcode
     * @param mainStrs
     * @returns {Promise<any[]>}
     */
    ['topology-directory-hierarchy-get'](
      //
      tcode: string,
      //
      mainStrs: string[]
    ): Promise<any[]>;

    /**
     * 获取表格总数信息
     * TopologyDirectoryActor
     * @param tenantCode
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['topology-directory-page-count'](
      //
      tenantCode: string,
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 修改拓扑目录项
     * TopologyDirectoryActor
     * @param data
     * @returns {Promise<ApiDataTenant.TopologyDirectoryGrid>}
     */
    ['topology-directory-update'](
      //
      data: ApiDataTenant.TopologyDirectory
    ): Promise<ApiDataTenant.TopologyDirectoryGrid>;

    /**
     * 工单分类下拉
     * FlowActor
     * @param type
     * @returns {Promise<ApiDataTenant.SelectView[]>}
     */
    ['work-order-type-select'](
      //
      type: string
    ): Promise<ApiDataTenant.SelectView[]>;
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
  export type AddressTypeSelect = {
    // 地址模式标识
    code?: string;
    // 地址模式名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type AllResponse = {
    // 数据资源
    dataResource?: ApiDataTenant.DataResource;
    // 容量配置
    capacityConfig?: ApiDataTenant.CapacityConfig;
    // 计算资源
    computingResource?: ApiDataTenant.ComputingResource;
    // 数据备份
    dataBackup?: ApiDataTenant.DataBackup;
  };

  /**
   * 传入参数
   */
  export type AuthorizePermission = {
    // 功能授权权限序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 功能授权序号
    faId?: string;
    // 系统应用标识
    scode?: string;
    // 系统模块标识
    mcode?: string;
    // 系统页面标识
    spcode?: string;
    // 系统页面选择语言
    langCode?: string;
    // 权限细目（多个，隔开）
    permission?: string;
  };

  /**
   * 传入参数
   */
  export type AuthorizePermissionRes = {
    // 已授权系统
    apps?: number[];
    // 已授权权限细目
    permissions?: number[];
  };

  /**
   * 传入参数
   */
  export type AuthorizePermissionTree = {
    // 系统应用
    sysAppRes?: any[];
  };

  /**
   * 传入参数
   */
  export type BackupRecord = {
    // 主键
    id?: string;
    // 大小（字节数）
    fileSize?: number;
    // 备份文件
    fileName?: string;
    // 备份策略
    backupStrategy?: string;
    // 备份内容
    backupContent?: string;
    // 租户标识
    tCode?: string;
    // 备份者
    userId?: string;
    // 备份地址
    location?: string;
    // 备份时间
    backupTime?: string;
    // 备份时间
    finishTime?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type BackupRecordGrid = {
    // 备份文件
    fileName?: string;
    // 大小（字节数）
    size?: number;
    // 备份策略
    backupStrategy?: string;
    // 备份内容
    backupContent?: string;
    // 备份者
    userId?: string;
    // 备份时间
    backupTime?: string;
    // 主键
    id?: string;
  };

  /**
   * 传入参数
   */
  export type BackupRes = {
    // 备份成功
    succeed?: boolean;
    // 信息
    message?: string;
  };

  /**
   * 传入参数
   */
  export type BackupSysComponent = {
    // 名称
    bacName?: string;
    // 备份系统组件数据主键
    id?: string;
    // 所属分类code
    cCode?: string;
    // 组件配置标识code
    code?: string;
    // 存取组件功能的code
    funCode?: string;
    // 租户系统功能的总条数
    funCount?: string;
    // 租户系统参数的总条数
    ParCount?: string;
    // 是否修改
    ifOrNOt?: boolean;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type BackupSysComponentGrid = {
    // 所属分类
    sysComName?: string;
    // 名称
    bacName?: string;
    // 组件配置标识code
    code?: string;
    // 启用功能
    startFunc?: string;
    // 参数配置
    parameter?: string;
    // 已修改
    ifOrNOt?: boolean;
    // 所属分类code
    cCode?: string;
    // 备份系统组件数据主键
    id?: string;
  };

  /**
   * 传入参数
   */
  export type BackupSysComponentSelect = {
    // 规模类型标识
    code?: string;
    // 规模类型名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type CapacityConfig = {
    // 主键
    id?: string;
    // 租户
    tenantId?: string;
    // 租户标识
    tCode?: string;
    // 支持用户数(-1表示不限制)
    useNum?: number;
    // 支持项目数(-1表示不限制)
    projectNum?: number;
    // 支持视频数(-1表示不限制)
    videoNum?: number;
    // 支持的设备数(-1表示不限制)
    equipmentNum?: number;
    // 支持组织数(-1表示不限制)
    organizationNum?: number;
    // 支持人员数(-1表示不限制)
    personNum?: number;
    // 支持部件数(-1表示不限制)
    componentNum?: number;
    // 支持的资产数量(-1表示不限制)
    assets?: number;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

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
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ClassCatalogSelect = {
    // 标识
    code?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type ClassCatalogTree = {
    // 分类序号
    id?: string;
    // 分类父序号
    pid?: string;
    // 分类名称
    name?: string;
    // 分类标识
    code?: string;
    // 是否启用本分类（若禁用将会使本分类下的所有子分类不可见）
    enabled?: boolean;
    // 是否禁止新增本分类数据（勾选后该分类不可进行增加数据操作，只对当前分类有效，不影响父分类或子分类）
    added?: boolean;
    // 分类继承数据（ |分割）
    inherit?: string;
  };

  /**
   * 传入参数
   */
  export type ComponentVo = {
    // 组件功能唯一标识
    id?: string;
    // 组件功能节点
    code?: string;
    // 租户唯一标识
    tenementCode?: string;
    // 组件功能父节点
    pCode?: string;
    // 组件功能名称
    ComponentName?: string;
  };

  /**
   * 传入参数
   */
  export type ComputingResource = {
    // 主键
    id?: string;
    // 租户
    tenantId?: string;
    // 租户标识
    tCode?: string;
    // 并行作业数
    parallelJobs?: number;
    // 单作业线程
    threadsForOneJob?: number;
    // 单作业内存
    memoryForOneJob?: number;
    // 实时作业频率
    realtimeJobFrequency?: number;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ConditionalControl = {
    // 主键
    id?: string;
    // 工作流id
    flowId?: string;
    // 租户code
    tcode?: string;
    // 父id,(边id，开始节点id，选择节点id)
    fid?: string;
    // 类型(1启动条件，2流转控制，3延时配置)
    type?: string;
    // 条件比较唯一标识
    conditionId?: string;
    // 条件序号
    sort?: number;
    // 判断数据-来源类型(FromType)
    fromType?: string;
    // 数据来源表单最终id/公式id/自定义id
    fromId?: string;
    // 数据来源表单id数组
    fromIds?: string;
    // 判断数据表单字段code
    fromCode?: string;
    // 判断数据类型(前端用)
    fromFieldType?: string;
    // 自定义判断数据
    fromcontent?: string;
    // 判断条件(ConditionType)
    judgingConditions?: string;
    // 逻辑运算符(LogicalOperator)
    logicalOperator?: string;
    // 逻辑运算符回显(前端用)
    opContent?: string[];
    // 比较数据类型
    compareType?: string;
    // 比较数据表单最终id/公式id/自定义id
    compareId?: string;
    // 比较数据表单id数组
    compareIds?: string;
    // 比较数据表单字段code
    compareCode?: string;
    // 自定义比较数据
    comparecontent?: string;
    // 是否默认条件
    isDefault?: boolean;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type CrculationView = {
    // 目的节点id
    toNodeIds?: string[];
    // 判断条件
    conditionalControls?: ApiDataTenant.ConditionalControl[];
  };

  /**
   * 传入参数
   */
  export type DataBackup = {
    // 主键
    id?: string;
    // 租户
    tenantId?: string;
    // 租户标识
    tCode?: string;
    // 备份数量
    backupNum?: number;
    // 备份方式
    backupType?: string;
    // 备份策略
    backupStrategy?: string;
    // 备份内容
    backupContent?: string;
    // 存储位置
    location?: string;
    // 执行时间(cron 表达式)
    executionTime?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type DataField = {
    // 数据字段序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 租户标识
    tdcode?: string;
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
    desc?: string;
    // 流程id
    fId?: string;
    // 流程code
    fcode?: string;
  };

  /**
   * 传入参数
   */
  export type DataFieldDetail = {
    // 所属父分类
    pccName?: string;
    // 所属分类
    ccName?: string;
    // 字段来源
    dbName?: string;
    // 数据来源
    dsName?: string;
    // 字段名称
    name?: string;
    // 字段标识
    code?: string;
    // 数据类型
    type?: string;
    // 列显示
    colShow?: number;
    // 内容列
    displayed?: boolean;
    // 是否搜索
    searched?: boolean;
    // 是否启用
    enabled?: boolean;
    // 是否可编辑
    edited?: boolean;
    // 数据来源url
    dsurl?: string;
    // 排序
    sort?: number;
    // 数据范围
    range?: string;
    // 数据单位
    unit?: string;
    // 默认值
    value?: string;
    // 是否必填字段
    required?: boolean;
    // 字段说明
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 父节点字段是否被修改（列显示，默认展示字段，可搜索字段，可编辑字段，启用本字段，排序；（逗号分割））
    updateData?: string;
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
    // 是否修改列显示
    colShowWhetherUpdate?: boolean;
    // 是否修改内容列
    displayedWhetherUpdate?: boolean;
    // 是否修改是否搜索
    searchedWhetherUpdate?: boolean;
    // 是否修改是否可编辑
    enabledWhetherUpdate?: boolean;
    // 是否修改是否可编辑
    editedWhetherUpdate?: boolean;
    // 是否修改排序
    sortWhetherUpdate?: number;
  };

  /**
   * 传入参数
   */
  export type DataFieldEnableReq = {
    // 数据字段序号
    id?: string;
    // 是否是继承数据字段
    existed?: boolean;
  };

  /**
   * 传入参数
   */
  export type DataFieldGrid = {
    // 所属分类
    ccName?: string;
    // 字段来源
    dbName?: string;
    // 数据来源
    dsName?: string;
    // 字段名称
    name?: string;
    // 字段标识
    code?: string;
    // 数据类型
    type?: string;
    // 列显示
    colShow?: number;
    // 内容列
    displayed?: boolean;
    // 是否搜索
    searched?: boolean;
    // 是否可编辑
    edited?: boolean;
    // 是否启用
    enabled?: boolean;
    // 数据来源url
    dsurl?: string;
    // 数据范围
    range?: string;
    // 数据单位
    unit?: string;
    // 默认值
    value?: string;
    // 是否必填字段
    required?: boolean;
    // 字段说明
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
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
    // 排序
    sort?: number;
    // 父节点字段是否被修改（列显示，默认展示字段，可搜索字段，可编辑字段，启用本字段，父节点数据是否被修改，排序；（逗号分割））
    updateData?: string;
    // 列显示
    colShowChangeColor?: boolean;
    // 内容列
    displayedChangeColor?: boolean;
    // 是否搜索
    searchedChangeColor?: boolean;
    // 是否可编辑
    editedChangeColor?: boolean;
    // 是否启用
    enabledChangeColor?: boolean;
    // 排序
    sortChangeColor?: number;
    // bdcode
    bdcode?: string;
  };

  /**
   * 传入参数
   */
  export type DataFieldUpdateDataReq = {
    // 数据字段序号
    id?: string;
    // 列显示
    colShow?: number;
    // 默认展示列
    displayed?: boolean;
    // 是否搜索
    searched?: boolean;
    // 是否可编辑
    edited?: boolean;
    // 是否启用
    enabled?: boolean;
  };

  /**
   * 传入参数
   */
  export type DataResource = {
    // 主键
    id?: string;
    // 租户标识
    tCode?: string;
    // 租户
    tenantId?: string;
    // 备份数量
    backupNum?: number;
    // 库类型
    type?: string;
    // 库用户名
    dbuserName?: string;
    // 库密码
    dbPassword?: string;
    // 库名称
    dbName?: string;
    // 优先级
    priority?: string;
    // 数据清理时间
    cleanTime?: string;
    // 最大连接数
    maxConnection?: number;
    // 日志存储天数
    logStorage?: number;
    // 统计存储年数
    statisticsStorage?: number;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type DatabaseView = {
    // 是否必备
    isNecessary?: boolean;
    // 数据库名称
    name?: string;
    // 标识（唯一）
    code?: string;
  };

  /**
   * 传入参数
   */
  export type DelayedConditionGrid = {
    // 数据来源类型
    fromType?: string;
    // 字段名称
    fieldName?: string;
    // 判断条件
    conditionContent?: string;
    // 条件比较唯一标识
    conditionId?: string;
  };

  /**
   * 传入参数
   */
  export type DelayedConfig = {
    // 序号
    id?: string;
    // 工作流序号
    flowId?: string;
    // 所属租户
    tcode?: string;
    // 节点序号
    nodeId?: string;
    // 数字
    number?: number;
    // 单位
    unit?: string;
    // 条件选择方式(DelayedSelectType)
    delayedSelectType?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type DispatchConfig = {
    // 序号
    id?: string;
    // 工作流序号
    flowId?: string;
    // 租户code
    tcode?: string;
    // 节点序号
    nodeId?: string;
    // 表单id
    formCategoryId?: string;
    // 表单字段code
    formPropertyCode?: string;
    // 来源数据类型(FromType)
    fromType?: string;
    // 来源数据所属工作流序号
    fromFlowId?: string;
    // 数据来源表单id数组链
    fromFormIds?: string[];
    // 数据来源表单最终id/公式id/自定义id
    fromFormId?: string;
    // 数据来源字段code
    fromFieldCode?: string;
    // 自定义来源数据
    fromcontent?: string;
    // 输入模式/输出模式(1/2)
    mode?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type FileSourceView = {
    // 字段来源名称
    name?: string;
    // 字段来源标识
    code?: string;
  };

  /**
   * 传入参数
   */
  export type FlowStartUp = {
    // 触发条件序号
    id?: string;
    // 流程id
    fid?: string;
    // 租户code
    tcode?: string;
    // 触发方式(FlowStartUpTye)
    type?: string;
    // 触发条件(列表展示,中文)
    conditionCN?: string;
    // 触发条件(列表展示,英文)
    conditionEN?: string;
    // 是否启用
    enable?: boolean;
    // 表单code
    ccode?: string;
    // 表单属性code/自定义属性内容
    pcode?: string;
    // 插入数据后
    isInsert?: boolean;
    // 更新数据后
    isUpate?: boolean;
    // 删除数据后
    isDelete?: boolean;
    // 表单字段条件
    fromCondition?: string;
    // 时间类型
    timeType?: string;
    // 执行时间条件
    timeCondition?: string;
    // 指定执行星期
    week?: string;
    // 指定执行日期
    day?: string;
    // 创建时间
    ctime?: string;
    // 创建人序号
    creator?: string;
    // 修改人序号
    editor?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type FlowStartUpGrid = {
    // 触发方式
    type?: string;
    // 触发条件(列表展示)
    condition?: string;
    // 是否启用
    enable?: boolean;
    // 工作流序号
    id?: string;
    // 流程id
    fid?: string;
  };

  /**
   * 传入参数
   */
  export type FlowStartUpTypeSelect = {
    // 触发条件类型code
    code?: string;
    // 触发条件类型name
    name?: string;
  };

  /**
   * 传入参数
   */
  export type FormAndFieldTree = {
    // 表单序号
    id?: string;
    // 租户标识
    tCode?: string;
    // 工作流序号
    fid?: string;
    // 代码
    code?: string;
    // 创建人
    creator?: string;
    // 中文名称
    name?: string;
    // 创建时间
    cTime?: string;
    // 编辑时间
    eTime?: string;
    // 描述
    desc?: string;
    // 表单属性数量
    propertyNum?: number;
    // 表单类型(FormType)
    type?: string;
    // 表单来源
    source?: string;
    // 表单模式
    model?: string;
    // 表单模式是复制表结构时，存储表单来源的层级
    path?: string;
    // 是否启用
    enable?: boolean;
    // 字段
    children?: any[];
  };

  /**
   * 传入参数
   */
  export type FormCategory = {
    // 表单序号
    id?: string;
    // 租户标识
    tCode?: string;
    // 工作流序号
    fid?: string;
    // 代码
    code?: string;
    // 创建人
    creator?: string;
    // 中文名称
    name?: string;
    // 描述
    desc?: string;
    // 表单属性数量
    propertyNum?: number;
    // 表单类型(FormType)
    type?: string;
    // 表单来源
    source?: string;
    // 表单模式
    model?: string;
    // 表单模式是复制表结构时，存储表单来源的层级
    path?: string;
    // 是否启用
    enable?: boolean;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type FormCategoryGird = {
    // 表单类型
    typeName?: string;
    // 表单模式
    modelName?: string;
    // 表单来源
    sourceName?: string;
    // 中文名称
    name?: string;
    // 代码
    code?: string;
    // 字段数量
    fieldNum?: number;
    // 启用
    enable?: boolean;
    // 表单属性序号
    id?: string;
    // 表单类型
    type?: string;
    // 表单模式
    model?: string;
    // 表单来源
    source?: string;
  };

  /**
   * 传入参数
   */
  export type FormCategoryView = {
    // 表单id
    id?: string;
    // 表单名称
    name?: string;
    // 租户code
    tCode?: string;
    // 表单来源
    source?: string;
    // 表单code
    code?: string;
    // 工作流id
    fid?: string;
    // 是否配置可见项
    show?: boolean;
    // 是否配置录入项目
    write?: boolean;
    // 是否绑定数据
    bind?: boolean;
  };

  /**
   * 传入参数
   */
  export type FormProperty = {
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
    // 表单种类id
    fCode?: string;
    // 中文名称
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
    // 数据范围
    range?: string;
    // 数据单位
    unit?: string;
    // 默认值
    value?: string;
    // 是否必填字段
    required?: boolean;
    // 字段说明
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type FunctionAuthorization = {
    // 功能授权序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 系统分类标识
    sccode?: string;
    // 系统应用标识
    scode?: string;
    // 已授权模块
    aumoduleNum?: number;
    // 未授权模块
    unmoduleNum?: number;
    // 到期日期
    endTime?: string;
    // 生效日期
    startTime?: string;
    // 启用
    enabled?: boolean;
    // ctime
    ctime?: string;
    // etime
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type FunctionAuthorizationGrid = {
    // 系统分类名称
    scname?: string;
    // 系统应用名称
    sname?: string;
    // 已授权模块
    aumoduleNum?: number;
    // 未授权模块
    unmoduleNum?: number;
    // 生效日期
    stime?: string;
    // 到期日期
    etime?: string;
    // 是否启用
    enabled?: boolean;
    // 功能授权序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 系统分类标识
    sccode?: string;
    // 系统应用标识
    scode?: string;
  };

  /**
   * 传入参数
   */
  export type Functions = {
    // 组件功能id
    id?: string;
    // 租户标识
    tCode?: string;
    // 系统组件表唯一标识
    scCode?: string;
    // 组件功能唯一标识
    code?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type FunctionsGrid = {
    // 组件功能id
    id?: string;
    // 组件功能名称
    code?: string;
    // 组件功能名称
    scCode?: string;
    // 组件功能名称
    funName?: { [key: string]: any };
    // 是否启动
    enabled?: boolean;
    // 系统设置是否启动
    isNot?: boolean;
  };

  /**
   * 传入参数
   */
  export type HierarchySelectData = {
    // 库标识,分类标识,字段标识
    code?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type IncrementNum = {
    // 主键
    id?: string;
    // 3位长度数字
    bit3?: string;
    // 6位长度数字
    bit6?: string;
    // 3位长度数字
    ticketNum?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type InitData = {
    // 所属租户标识
    tCode?: string;
    // 数据库标识
    dCode?: string;
  };

  /**
   * 传入参数
   */
  export type InputConfig = {
    // 序号
    id?: string;
    // 工作流序号
    flowId?: string;
    // 租户code
    tcode?: string;
    // 节点序号
    nodeId?: string;
    // 表单id
    formCategoryId?: string;
    // 表单字段code
    formPropertyCode?: string;
    // 来源数据类型(FromType)
    fromType?: string;
    // 数据来源表单id数组链
    fromFormIds?: string[];
    // 数据来源表单最终id/公式id/自定义id
    fromFormId?: string;
    // 数据来源字段code
    fromFieldCode?: string;
    // 自定义来源数据
    fromcontent?: string;
    // 数据可见
    show?: boolean;
    // 数据录入
    write?: boolean;
    // 列表显示
    display?: number;
    // 输入模式(InputType)
    inputType?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type InputConfigArtificialGrid = {
    // 字段名称
    fieldName?: string;
    // 数据类型
    fieldType?: string;
    // 数据可见
    show?: boolean;
    // 列表显示
    display?: number;
    // 数据录入
    write?: boolean;
    // 字段code
    formPropertyCode?: string;
  };

  /**
   * 传入参数
   */
  export type InputConfigArtificialView = {
    // 工作流序号
    flowId?: string;
    // 节点序号
    nodeId?: string;
    // 表单id
    formCategoryId?: string;
    // 表单字段code
    formPropertyCode?: string;
    // 数据可见
    show?: boolean;
    // 列表显示
    display?: number;
    // 数据录入
    write?: boolean;
  };

  /**
   * 传入参数
   */
  export type InputConfigAutomaticView = {
    // 来源数据类型(FromType)
    fromType?: string;
    // 数据来源表单id数组链
    fromFormIds?: string[];
    // 数据来源表单最终id/公式id/自定义id
    fromFormId?: string;
    // 数据来源字段code
    fromFieldCode?: string;
    // 自定义来源数据
    fromcontent?: string;
    // 数据绑定
    bind?: boolean;
  };

  /**
   * 传入参数
   */
  export type Interface = {
    // 系统菜单序号
    id?: string;
    // 租户唯一标识
    tCode?: string;
    // 系统分类(当菜单类型为应用系统时，这里存储code)
    systemClassify?: string;
    // 大系统分类
    systemClass?: string;
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
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type InterfaceGrid = {
    // 系统分类(当菜单类型为应用系统时，这里存储code)
    systemClassify?: string;
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
    // 启用本系统菜单
    enabled?: boolean;
    // 系统菜单序号
    id?: string;
    // 租户唯一标识
    tCode?: string;
    // 所属语言
    theirLanguage?: string;
    // 背景图片 （逗号分割）
    backgroundImage?: string;
    // 标题栏组件
    titleBar?: string[];
    // 背景遮罩
    background?: string;
  };

  /**
   * 传入参数
   */
  export type InterfaceSystemMenuGrid = {
    // 系统菜单序号
    id?: string;
    // 租户唯一标识
    tCode?: string;
    // 系统分类(当菜单类型为应用系统时，这里存储code)
    systemClassify?: string;
    // 大系统分类
    systemClass?: string;
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
  export type InterfaceTypeSelect = {
    // 界面定制风格标识
    code?: string;
    // 界面定制风格名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type LanguageTypeSelect = {
    // 所属语言标识
    code?: string;
    // 所属语言名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type Layer = {
    // 图层唯一标识
    id?: string;
    // 租户code
    tenantCode?: string;
    // 图层名称
    layerName?: string;
    // 图层顺序
    layerLevel?: number;
    // 缩放等级右区间
    zoomLevelR?: number;
    // 缩放等级左区间
    zoomLevelL?: number;
    // 显示内容
    displayContents?: string;
    // 数据库
    databaseCode?: string;
    // 属性面板
    propertyPanel?: boolean;
    // 可单选
    singleChoice?: boolean;
    // 统计面板
    statisticsPanel?: boolean;
    // 可多选
    multipleChoices?: boolean;
    // 告警状态
    alarmStatus?: boolean;
    // 启用功能(冗余字段，用于展示)
    running?: string;
    // 启用
    enabled?: boolean;
    // 创建时间
    ctime?: string;
    // 图层说明
    explain?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type LayerDetailVO = {
    // 图层唯一标识
    id?: string;
    // 图层顺序
    layerLevel?: number;
    // 图层名称
    layerName?: string;
    // 租户名称
    tenantName?: string;
    // 缩放等级左区间
    zoomLevelL?: number;
    // 显示内容
    displayContents?: string;
    // 租户code
    tenantCode?: string;
    // 数据库code
    databaseCode?: string;
    // 数据库
    databaseName?: string;
    // 启用功能(冗余字段，用于展示)
    running?: string;
    // 图层说明
    explain?: string;
    // 可多选
    multipleChoices?: boolean;
    // 缩放等级右区间
    zoomLevelR?: number;
    // 可单选
    singleChoice?: boolean;
    // 统计面板
    statisticsPanel?: boolean;
    // 告警状态
    alarmStatus?: boolean;
    // 属性面板
    propertyPanel?: boolean;
    // 启用
    enabled?: boolean;
    // 创建时间
    ctime?: string;
    // 修改时间
    utime?: string;
  };

  /**
   * 传入参数
   */
  export type LayerGrid = {
    // 所属租户名称
    tenantName?: string;
    // 图层顺序
    layerLevel?: number;
    // 图层名称
    layerName?: string;
    // 缩放等级左区间
    zoomLevelL?: number;
    // 缩放等级右区间
    zoomLevelR?: number;
    // 数据库
    databaseName?: string;
    // 显示内容
    displayContents?: string;
    // 可单选
    singleChoice?: boolean;
    // 属性面板
    propertyPanel?: boolean;
    // 可多选
    multipleChoices?: boolean;
    // 统计面板
    statisticsPanel?: boolean;
    // 告警状态
    alarmStatus?: boolean;
    // 启用
    enabled?: boolean;
    // 图层唯一标识
    id?: string;
  };

  /**
   * 传入参数
   */
  export type Line2FormCategoryAuthority = {
    // 序号
    id?: string;
    // 线序号
    linkId?: string;
    // 工作流序号
    flowId?: string;
    // 表单种类序号
    formCategoryId?: string;
    // 表单属性序号
    formPropertyId?: string;
    // 录入项
    input?: boolean;
    // 必填项
    must?: boolean;
    // 处理人名称项
    handle?: boolean;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type LineAuthorityView = {
    // 表单属性
    attrId?: string;
    // 录入项
    input?: boolean;
    // 必填项
    must?: boolean;
    // 处理人名称项
    handle?: boolean;
  };

  /**
   * 传入参数
   */
  export type MapConfig = {
    // 地图配置唯一标识
    id?: string;
    // 地图唯一标识
    mid?: string;
    // 视图类型
    mapType?: string;
    // 缩放等级左区间
    zoomLevelL?: number;
    // 缩放等级右区间
    zoomLevelR?: number;
    // 瓦片服务地址
    titleService?: string;
    // 标记服务地址
    signService?: string;
    // 子域列表
    subdomainList?: string;
    // 代理地址
    proxyService?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type MapConfigGrid = {
    // 视图类型
    mapType?: string;
    // 缩放等级左区间
    zoomLevelL?: number;
    // 缩放等级右区间
    zoomLevelR?: number;
    // 瓦片服务地址
    titleService?: string;
    // 标记服务地址
    signService?: string;
    // 子域列表
    subdomainList?: string;
    // 代理地址
    proxyService?: string;
    // 地图配置唯一标识
    id?: string;
  };

  /**
   * 传入参数
   */
  export type MapInfo = {
    // 地图信息唯一标识
    id?: string;
    // 租户code
    tenantCode?: string;
    // 地图类型
    mapType?: string;
    // 地图名称
    mapName?: string;
    // 3D模式
    mode?: string;
    // 视图类型
    viewType?: string;
    // 天气切换
    weatherSwitch?: string;
    // 昼夜切换
    dayNightSwitch?: string;
    // 到期日期
    endTime?: string;
    // 生效日期
    startTime?: string;
    // 地图说明
    explain?: string;
    // 启用
    enabled?: boolean;
    // 默认经度
    lon?: string;
    // 地图服务地址
    url?: string;
    // 缩放等级
    zoom?: number;
    // 默认纬度
    lat?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 项目标识
    code?: string;
    // 卸载关键字
    keywords?: string;
    // 登录密码
    loginPassword?: string;
    // 登录账号
    loginUser?: string;
  };

  /**
   * 传入参数
   */
  export type MapInfoDetail = {
    // 地图信息唯一标识
    id?: string;
    // 租户id
    tid?: string;
    // 租户tCode
    tenantCode?: string;
    // 租户名称
    tenantName?: string;
    // 地图名称
    mapName?: string;
    // 地图类型
    mapType?: string;
    // 视图类型
    viewType?: string;
    // 3D模式
    mode?: string;
    // 昼夜切换
    dayNightSwitch?: string;
    // 天气切换
    weatherSwitch?: string;
    // 生效日期
    startTime?: string;
    // 到期日期
    endTime?: string;
    // 启用
    enabled?: boolean;
    // 地图说明
    explain?: string;
    // 地图服务地址
    url?: string;
    // 默认经度
    lon?: string;
    // 默认纬度
    lat?: string;
    // 缩放等级
    zoom?: number;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 卸载关键字
    keywords?: string;
    // 项目标识
    code?: string;
    // 登录账号
    loginUser?: string;
    // 登录密码
    loginPassword?: string;
  };

  /**
   * 传入参数
   */
  export type MapInfoGrid = {
    // 所属租户名称
    tenantName?: string;
    // 地图名称
    mapName?: string;
    // 地图类型
    mapType?: string;
    // 视图类型
    viewType?: string;
    // 3D模式
    mode?: string;
    // 昼夜切换
    dayNightSwitch?: string;
    // 天气切换
    weatherSwitch?: string;
    // 生效日期
    startTime?: string;
    // 到期日期
    endTime?: string;
    // 启用
    enabled?: boolean;
    // 地图信息唯一标识
    id?: string;
  };

  /**
   * 传入参数
   */
  export type MapInfoTenantVO = {};

  /**
   * 传入参数
   */
  export type MapSelect = {
    // 地图id
    id?: string;
    // 地图名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type MenuLevelOrderReq = {
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
  export type MenuLoginSpecifySelect = {
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
  export type Node = {
    // 节点序号
    id?: string;
    // 名称
    nodeName?: string;
    // 所属工作流
    workflowId?: string;
    // 租户code
    tcode?: string;
    // 属性详情1
    descOne?: string;
    // 属性详情2
    descTwo?: string;
    // 节点状态
    nodeState?: string;
    // 节点创建人
    creator?: string;
    // 节点修改人
    editor?: string;
    // 节点类型
    nodeType?: string;
    // 是否有效
    valid?: boolean;
    // 坐标(x y)
    loc?: string;
    // 调度节点子流程id
    dispatchSubFlowId?: string;
    // 启动条件类型(RunCondtionType)
    runConditionType?: string;
    // 录入配置类型(InputType)
    inputType?: string;
    // 流转控制类型(ProcessType)
    processType?: string;
    // 延时配置类型(DelayedType)
    delayedType?: string;
    // 输出配置类型(OutputType)
    outputType?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type Node2Form = {
    // 关联序号
    id?: string;
    // 表单序号
    formId?: string;
    // 节点序号
    nodeId?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type Node2User = {
    // 关联序号
    id?: string;
    // 工作流序号
    flowId?: string;
    // 节点序号
    nodeId?: string;
    // 机构序号
    orgId?: string;
    // 机构序号
    orgName?: string;
    // 角色序号
    roleId?: string;
    // 角色名称
    roleName?: string;
    // 部门序号
    departmentId?: string;
    // 部门名称
    departmentName?: string;
    // 用户序号
    userId?: string;
    // 用户名称
    userName?: string;
    // 参与方式
    participationType?: string;
    // 备注
    desc?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type Node2UserGird = {
    // 机构序号
    orgName?: string;
    // 部门/角色
    dorr?: string;
    // 用户序号
    userName?: string;
    // 参与方式
    participationTypeName?: string;
    // 备注
    desc?: string;
    // 关联序号
    id?: string;
    // 工作流序号
    flowId?: string;
    // 节点序号
    nodeId?: string;
    // 机构序号
    orgId?: string;
    // 角色序号
    roleId?: string;
    // 部门序号
    departmentId?: string;
    // 用户序号
    userId?: string;
    // 参与方式
    participationType?: string;
  };

  /**
   * 传入参数
   */
  export type NodeDetail = {
    // 节点序号
    id?: string;
    // 名称
    nodeName?: string;
    // 所属工作流
    workflowId?: string;
    // 创建时间
    cTime?: string;
    // 属性详情1
    descOne?: string;
    // 属性详情2
    descTwo?: string;
    // 节点状态
    nodeState?: string;
    // 编辑时间
    eTime?: string;
    // 节点创建人
    creator?: string;
    // 节点修改人
    editor?: string;
    // 节点类型
    nodeType?: string;
    // 是否有效
    valid?: boolean;
    // 坐标(x y)
    loc?: string;
    // 调度节点子流程大类
    dispatchSubFlowType?: string;
    // 调度节点子流程id
    dispatchSubFlowId?: string;
    // 启动条件类型(RunCondtionType)
    runConditionType?: string;
    // 录入配置类型(InputType)
    inputType?: string;
    // 流转控制类型(ProcessType)
    processType?: string;
    // 延时配置类型(DelayedType)
    delayedType?: string;
    // 输出配置类型(OutputType)
    outputType?: string;
  };

  /**
   * 传入参数
   */
  export type NodeGird = {
    // 节点序号
    key?: string;
    // 名称
    nodeName?: string;
    // 所属工作流
    workflowId?: string;
    // 节点状态
    nodeState?: string;
    // 节点类型
    nodeType?: string;
    // 是否有效
    valid?: boolean;
    // 坐标(x y)
    loc?: string;
  };

  /**
   * 传入参数
   */
  export type NodeToFieldBindBatchGrid = {
    // 表单id
    formCategoryId?: string;
    // 目标字段名称
    toName?: string;
    // 来源字段名称
    fromName?: string;
    // 来源数据表单名
    fromFormName?: string;
    // 数据类型
    fieldType?: string;
    // 字段标识
    code?: string;
  };

  /**
   * 传入参数
   */
  export type NodeToFieldBindGrid = {
    // 表单id
    formCategoryId?: string;
    // 表单字段code
    formPropertyCode?: string;
    // 字段名称
    fieldName?: string;
    // 数据类型
    fieldType?: string;
    // 数据来源类型
    fromType?: string;
    // 数据来源类型名称
    fromTypeName?: string;
    // 数据来源表单id数组链
    fromFormIds?: string[];
    // 数据来源表单最终id/公式id/自定义id
    fromFormId?: string;
    // 数据来源字段code
    fromFieldCode?: string;
    // 自定义来源数据
    fromcontent?: string;
    // 是否绑定
    bind?: boolean;
  };

  /**
   * 传入参数
   */
  export type NodeView = {
    // 节点序号
    id?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type OutPutConfig = {
    // 序号
    id?: string;
    // 工作流序号
    flowId?: string;
    // 租户code
    tcode?: string;
    // 节点序号
    nodeId?: string;
    // 表单id
    formCategoryId?: string;
    // 表单字段code
    formPropertyCode?: string;
    // 来源数据类型(FromType)
    fromType?: string;
    // 数据来源表单id数组链
    fromFormIds?: string[];
    // 数据来源表单最终id/公式id/自定义id
    fromFormId?: string;
    // 数据来源字段code
    fromFieldCode?: string;
    // 自定义来源数据
    fromcontent?: string;
    // 输出模式(OutPutType)
    outPutType?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type Parameters = {
    // 组件参数唯一标识
    id?: string;
    // 组件表唯一标识
    scCode?: string;
    // 租户唯一标识
    tCode?: string;
    // 设置值
    setValue?: string;
    // 系统参数唯一标识
    code?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ParametersGrid = {
    // 组件参数唯一标识
    id?: string;
    // 组件表唯一标识
    pcode?: string;
    // 参数标识
    code?: string;
    // 参数名称
    name?: { [key: string]: any };
    // 默认值
    value?: string;
    // 设置值
    setValue?: string;
    // 参数说明
    nameExplain?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type RecoveryRes = {
    // 还原成功
    succeed?: boolean;
    // 信息
    message?: string;
  };

  /**
   * 传入参数
   */
  export type RelationLine = {
    // 流程线主键
    id?: string;
    // 工作流主键
    flowId?: string;
    // 租户code
    tcode?: string;
    // 流程线头节点
    from?: string;
    // 流程线尾节点
    to?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type SelectData = {
    // 标识
    code?: string;
    // 名称
    name?: string;
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
  export type SysAppPageRes = {
    // 应用标识
    scode?: string;
    // 模块标识
    mcode?: string;
    // 页面标识
    code?: string;
    // 页面语言
    langCode?: string;
    // 页面名称
    name?: string;
    // 页面图标
    logo?: string;
    // 权限细目
    permissions?: any[];
  };

  /**
   * 传入参数
   */
  export type SysAppRes = {
    // 系统应用标识
    code?: string;
    // 系统应用名称
    name?: string;
    // 系统页面数据
    appPageRes?: any[];
    // 系统应用模块
    sysModuleRes?: any[];
  };

  /**
   * 传入参数
   */
  export type SysAppSelect = {
    // 应用系统序号
    sid?: number;
    // 系统应用父节点
    pid?: number;
    // 应用系统名称
    name?: string;
    // 标识
    code?: string;
  };

  /**
   * 传入参数
   */
  export type SysModuleRes = {
    // 系统应用标识
    scode?: string;
    // 父应用模块标识
    pcode?: string;
    // 模块标识
    code?: string;
    // 模块名称
    name?: string;
    // 系统子应用模块数据集合
    childModules?: ApiDataTenant.SysModuleRes[];
    // 系统页面数据
    appPageRes?: any[];
  };

  /**
   * 传入参数
   */
  export type SysModuleSelect = {
    // 应用系统序号
    sid?: number;
    // 应用模块序号
    mid?: number;
    // 父应用模块序号
    pid?: number;
    // 应用模块名称
    name?: string;
    // 标识
    code?: string;
  };

  /**
   * 传入参数
   */
  export type SysPermissionRes = {
    // 操作标识
    code?: string;
    // 操作名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type SystemMenu = {
    // 菜单项序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 租户系统菜单配置序号
    tsmcId?: string;
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
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type SystemMenuGrid = {
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
    // 菜单父节点序号
    pid?: string;
    // 租户标识
    tcode?: string;
    // 租户系统菜单配置序号
    tsmcId?: string;
  };

  /**
   * 传入参数
   */
  export type TenFunction = {
    // 组件配置唯一标识
    id?: string;
    // 租户标识
    tCode?: string;
    // 组件标识
    scCode?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type Tenant = {
    // 租户序号
    id?: string;
    // 租户标识
    tenementCode?: string;
    // 租户名称
    tenementName?: string;
    // 租户账号
    tenantID?: string;
    // 租户密码
    tenantPassword?: string;
    // 生效时间
    timeData?: string;
    // 到期时间
    expirationDate?: string;
    // 系统地址
    systemaddress?: string;
    // 启动
    enabled?: boolean;
    // 联系人
    contact?: string;
    // 移动电话
    mobilePhone?: string;
    // 固定电话
    telephone?: string;
    // 电子邮箱
    email?: string;
    // 公司传真
    companyFax?: string;
    // 创建时间
    newDate?: string;
    // 修改时间
    updateDate?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 公司名称
    companyName?: string;
    // 联系地址
    address?: string;
    // 租户说明
    tenantAccount?: string;
    // 数据规模码
    scaleCode?: string;
    // 地址模式码
    addressTypeCode?: string;
    // 所属语言
    language?: string;
    // 业务中台，存code，逗号分隔
    business?: string;
    // 应用系统，存code，逗号分隔
    appSystem?: string;
    // 数据中台，存code，逗号分隔
    dataMiddleGround?: string;
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
    // 属性场景类型
    bigType?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type TenantComboBox = {
    // 租户标识
    tenantCode?: string;
    // 租户名称
    name?: string;
    // 所属语言
    language?: string;
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
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type TenantDatabaseGrid = {
    // 租户名称
    tenantName?: string;
    // 数据库名称
    name?: string;
    // 标识（唯一）
    code?: string;
    // 拓扑目录
    topologyNum?: number;
    // 是否必备库
    isNecessary?: boolean;
    // 是否初始化
    isInit?: boolean;
    // 主键
    id?: string;
    // 所属租户标识
    tCode?: string;
  };

  /**
   * 传入参数
   */
  export type TenantDetail = {
    // 租户序号
    id?: string;
    // 租户标识
    tenementCode?: string;
    // 租户名称
    tenementName?: string;
    // 租户账号
    tenantID?: string;
    // 生效时间
    timeData?: string;
    // 到期时间
    expirationDate?: string;
    // 系统地址
    systemaddress?: string;
    // 启动
    enabled?: boolean;
    // 联系人
    contact?: string;
    // 移动电话
    mobilePhone?: string;
    // 固定电话
    telephone?: string;
    // 电子邮箱
    email?: string;
    // 公司传真
    companyFax?: string;
    // 创建时间
    newDate?: string;
    // 修改时间
    updateDate?: string;
    // 公司名称
    companyName?: string;
    // 联系地址
    address?: string;
    // 租户说明
    tenantAccount?: string;
    // 地址模式码
    addressTypeCode?: string;
    // 所属语言
    language?: string;
  };

  /**
   * 传入参数
   */
  export type TenantGrid = {
    // 租户标识
    tenementCode?: string;
    // 租户名称
    tenementName?: string;
    // 租户账号
    tenantID?: string;
    // 所属语言
    language?: string;
    // 生效时间
    timeData?: string;
    // 到期时间
    expirationDate?: string;
    // 启动
    enabled?: boolean;
    // 租户序号
    id?: string;
  };

  /**
   * 传入参数
   */
  export type TenantScale = {
    // 规模类型标识
    code?: string;
    // 规模类型名称
    name?: string;
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
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type TopologyDirectoryGrid = {
    // 目录类型
    catalogName?: string;
    // 目录名称
    name?: string;
    // 输出数据名称
    outputDataName?: string;
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
    // 序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 库标识
    dcode?: string;
    // 目录类型标识
    type?: string;
    // 输出数据标识
    ccode?: string;
  };

  /**
   * 传入参数
   */
  export type Workflow = {
    // 工作流序号
    id?: string;
    // 中文名称
    name?: string;
    // 描述
    desc?: string;
    // 创建人序号
    creator?: string;
    // 修改人序号
    editor?: string;
    // 是否启用
    enable?: boolean;
    // 是否使用中
    beUsed?: boolean;
    // 租户code
    tCode?: string;
    // 节点数量
    nodeCount?: number;
    // 表单数量
    formCount?: number;
    // 流程类型
    workFlowType?: string;
    // 流程大类(workflowCategory)
    workFlowCategory?: string;
    // 工单类型
    workOrderType?: string;
    // 触发条件
    condition?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type WorkflowGrid = {
    // 所属租户
    tenantName?: string;
    // 工单类型
    workOrderTypeName?: string;
    // 流程类型
    workFlowType?: string;
    // 流程名称
    name?: string;
    // 触发条件
    conditionName?: string;
    // 表单数量
    formCount?: number;
    // 节点数量
    nodeCount?: number;
    // 是否测试通过
    isTest?: boolean;
    // 是否启用
    enable?: boolean;
    // 描述
    desc?: string;
    // 工作流序号
    id?: string;
    // 租户code
    tCode?: string;
  };

  /**
   * 传入参数
   */
  export type WorkflowView = {
    // 工作流序号
    id?: string;
    // 工作流名称
    name?: string;
    // 是否启用
    enable?: boolean;
  };

  //#endregion

  //#region 枚举支持
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

  //#endregion
}

export default ApiDataTenant;
