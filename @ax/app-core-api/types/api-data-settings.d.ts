import ApiCore from './api-core';
import ApiCommon from './api-common';

// ApiDataSettings 接口合集
declare namespace ApiDataSettings {
  //#region 正式API类型定义
  interface RequestActor {
    /**
     * 动态下拉框
     * BizSystemMenuConfigActor
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
     * 检查授权文件
     * AuthorizationActor
     * @param payload
     * @returns {Promise<ApiDataSettings.AuthorizationInfo>}
     */
    ['authorization-check'](
      //
      payload: ApiDataSettings.CheckAuthorizationPayload
    ): Promise<ApiDataSettings.AuthorizationInfo>;

    /**
     * 执行授权
     * AuthorizationActor
     * @param payload
     * @returns {Promise<string>}
     */
    ['authorization-execute'](
      //
      payload: ApiDataSettings.AuthorizationPayload
    ): Promise<string>;

    /**
     * 获取当前用户有效认证信息
     * AuthorizationActor
     * @returns {Promise<ApiDataSettings.AuthorizationInfo>}
     */
    ['authorization-get-valid'](): Promise<ApiDataSettings.AuthorizationInfo>;

    /**
     * 更新工程密码数据
     * AuthorizationActor
     * @param id
     * @param oldPassword
     * @param newPassword
     * @returns {Promise<any>}
     */
    ['authorization-update-project-password'](
      //
      id: string,
      //
      oldPassword: string,
      //
      newPassword: string
    ): Promise<any>;

    /**
     * 增加 AuthorizationInfo 数据
     * AuthorizationInfoActor
     * @param authorizationInfo
     * @returns {Promise<ApiDataSettings.AuthorizationInfo>}
     */
    ['authorizationInfo-create'](
      //
      authorizationInfo: ApiDataSettings.AuthorizationInfo
    ): Promise<ApiDataSettings.AuthorizationInfo>;

    /**
     * 删除 AuthorizationInfo 数据
     * AuthorizationInfoActor
     * @param id
     * @returns {Promise<number>}
     */
    ['authorizationInfo-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 批量删除 AuthorizationInfo 数据
     * AuthorizationInfoActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['authorizationInfo-deleteBatch'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 AuthorizationInfo 数据
     * AuthorizationInfoActor
     * @param id
     * @returns {Promise<ApiDataSettings.AuthorizationInfo>}
     */
    ['authorizationInfo-get'](
      //
      id: string
    ): Promise<ApiDataSettings.AuthorizationInfo>;

    /**
     * 获取所有 AuthorizationInfo 数据
     * AuthorizationInfoActor
     * @returns {Promise<ApiDataSettings.AuthorizationInfo[]>}
     */
    ['authorizationInfo-getAll'](): Promise<
      ApiDataSettings.AuthorizationInfo[]
    >;

    /**
     * 获取 AuthorizationInfo 的表格总数信息
     * AuthorizationInfoActor
     * @param tid
     * @param authorizationInfo
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['authorizationInfo-grid-count'](
      //
      tid: string,
      //
      authorizationInfo: ApiDataSettings.AuthorizationInfo,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 AuthorizationInfo 的表格列表数据
     * AuthorizationInfoActor
     * @param tid
     * @param authorizationInfo
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['authorizationInfo-grid-list'](
      //
      tid: string,
      //
      authorizationInfo: ApiDataSettings.AuthorizationInfo,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 AuthorizationInfo 的表格分页数据
     * AuthorizationInfoActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['authorizationInfo-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 AuthorizationInfo 的表格分页表头与总记录数
     * AuthorizationInfoActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['authorizationInfo-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新 AuthorizationInfo 数据
     * AuthorizationInfoActor
     * @param authorizationInfo
     * @returns {Promise<number>}
     */
    ['authorizationInfo-update'](
      //
      authorizationInfo: ApiDataSettings.AuthorizationInfo
    ): Promise<number>;

    /**
     * 增加BackUpInfo数据
     * BackUpInfoActor
     * @param backUpInfo
     * @returns {Promise<ApiDataSettings.BackUpInfo>}
     */
    ['backUpInfo-create'](
      //
      backUpInfo: ApiDataSettings.BackUpInfo
    ): Promise<ApiDataSettings.BackUpInfo>;

    /**
     * 删除BackUpInfo数据
     * BackUpInfoActor
     * @param id
     * @returns {Promise<number>}
     */
    ['backUpInfo-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 获取单条BackUpInfo数据
     * BackUpInfoActor
     * @param id
     * @returns {Promise<ApiDataSettings.BackUpInfo>}
     */
    ['backUpInfo-get'](
      //
      id: string
    ): Promise<ApiDataSettings.BackUpInfo>;

    /**
     * 获取BackUpInfo的表格总数信息
     * BackUpInfoActor
     * @param tid
     * @param backUpInfo
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['backUpInfo-grid-count'](
      //
      tid: string,
      //
      backUpInfo: ApiDataSettings.BackUpInfo,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取BackUpInfo的表格列表数据
     * BackUpInfoActor
     * @param tid
     * @param backUpInfo
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['backUpInfo-grid-list'](
      //
      tid: string,
      //
      backUpInfo: ApiDataSettings.BackUpInfo,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 更新BackUpInfo数据
     * BackUpInfoActor
     * @param backUpInfo
     * @returns {Promise<number>}
     */
    ['backUpInfo-update'](
      //
      backUpInfo: ApiDataSettings.BackUpInfo
    ): Promise<number>;

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
      data: ApiDataSettings.BasicSystemMenu
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
     * @returns {Promise<ApiDataSettings.BasicSystemMenu>}
     */
    ['basic-system-menu-get'](
      //
      id: string
    ): Promise<ApiDataSettings.BasicSystemMenu>;

    /**
     * 获取基础菜单的表格列表数据
     * BasicSystemMenuActor
     * @param smcId
     * @returns {Promise<ApiDataSettings.BasicSystemMenuGrid[]>}
     */
    ['basic-system-menu-grid-list'](
      //
      smcId: string
    ): Promise<ApiDataSettings.BasicSystemMenuGrid[]>;

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
     * BizBasicSystemMenuActor
     * @param smcId
     * @returns {Promise<ApiDataSettings.BasicMenuLoginSpecifySelect[]>}
     */
    ['basic-system-menu-login-specify-select'](
      //
      smcId: string
    ): Promise<ApiDataSettings.BasicMenuLoginSpecifySelect[]>;

    /**
     * 修改基础菜单项
     * BasicSystemMenuActor
     * @param data
     * @returns {Promise<ApiDataSettings.BasicSystemMenu>}
     */
    ['basic-system-menu-update'](
      //
      data: ApiDataSettings.BasicSystemMenu
    ): Promise<ApiDataSettings.BasicSystemMenu>;

    /**
     * 增加基础库分类目录项
     * BasicsClassCatalogActor
     * @param langCode
     * @param data
     * @returns {Promise<ApiDataSettings.BasicsClassCatalog>}
     */
    ['basics-class-catalog-create'](
      //
      langCode: string,
      //
      data: ApiDataSettings.BasicsClassCatalog
    ): Promise<ApiDataSettings.BasicsClassCatalog>;

    /**
     * 删除多个基础库分类目录数据
     * BasicsClassCatalogActor
     * @param langCode
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['basics-class-catalog-delete'](
      //
      langCode: string,
      //
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条基础库分类目录数据
     * BasicsClassCatalogActor
     * @param id
     * @returns {Promise<ApiDataSettings.BasicsClassCatalog>}
     */
    ['basics-class-catalog-get'](
      //
      id: string
    ): Promise<ApiDataSettings.BasicsClassCatalog>;

    /**
     * 获取基础库分类目录的列表数据
     * BasicsClassCatalogActor
     * @param modelWrapper
     * @returns {Promise<ApiDataSettings.BasicsClassCatalogTree[]>}
     */
    ['basics-class-catalog-grid-list'](
      //
      modelWrapper: ApiCommon.ModelWrapper
    ): Promise<ApiDataSettings.BasicsClassCatalogTree[]>;

    /**
     * 获取所属分类下拉数据
     * BasicsClassCatalogActor
     * @param langCode
     * @param bdcode
     * @param code
     * @returns {Promise<ApiDataSettings.BasicsClassCatalogSelect[]>}
     */
    ['basics-class-catalog-select'](
      //
      langCode: string,
      //
      bdcode: string,
      //
      code: string
    ): Promise<ApiDataSettings.BasicsClassCatalogSelect[]>;

    /**
     * 修改基础库分类目录项
     * BasicsClassCatalogActor
     * @param langCode
     * @param data
     * @returns {Promise<ApiDataSettings.BasicsClassCatalog>}
     */
    ['basics-class-catalog-update'](
      //
      langCode: string,
      //
      data: ApiDataSettings.BasicsClassCatalog
    ): Promise<ApiDataSettings.BasicsClassCatalog>;

    /**
     * 获取基础数据字段所属分类下拉数据
     * BasicsDataFieldActor
     * @param langCode
     * @param bdcode
     * @returns {Promise<ApiDataSettings.BasicsSelectData[]>}
     */
    ['basics-data-field-class-select'](
      //
      langCode: string,
      //
      bdcode: string
    ): Promise<ApiDataSettings.BasicsSelectData[]>;

    /**
     * 增加基础数据字段数据
     * BasicsDataFieldActor
     * @param basicsDataField
     * @returns {Promise<ApiDataSettings.BasicsDataFieldDetail>}
     */
    ['basics-data-field-create'](
      //
      basicsDataField: ApiDataSettings.BasicsDataField
    ): Promise<ApiDataSettings.BasicsDataFieldDetail>;

    /**
     * 根据库标识，分类标识获取基础数据字段数据
     * BasicsDataFieldActor
     * @param langCode
     * @param bdcode
     * @param ccode
     * @returns {Promise<ApiDataSettings.BasicsDataField[]>}
     */
    ['basics-data-field-datas'](
      //
      langCode: string,
      //
      bdcode: string,
      //
      ccode: string
    ): Promise<ApiDataSettings.BasicsDataField[]>;

    /**
     * 删除基础数据字段数据
     * BasicsDataFieldActor
     * @param list
     * @returns {Promise<any[]>}
     */
    ['basics-data-field-delete'](
      //
      list: ApiDataSettings.BasicsDataField[]
    ): Promise<any[]>;

    /**
     * 启用/禁用基础数据字段
     * BasicsDataFieldActor
     * @param enabled
     * @param ccode
     * @param reqs
     * @returns {Promise<any[]>}
     */
    ['basics-data-field-enabled-update'](
      //
      enabled: boolean,
      //
      ccode: string,
      //
      reqs: any[]
    ): Promise<any[]>;

    /**
     * 获取单条基础数据字段数据
     * BasicsDataFieldActor
     * @param ccode
     * @param id
     * @returns {Promise<ApiDataSettings.BasicsDataFieldDetail>}
     */
    ['basics-data-field-get'](
      //
      ccode: string,
      //
      id: string
    ): Promise<ApiDataSettings.BasicsDataFieldDetail>;

    /**
     * 获取关系字段
     * BasicsDataFieldActor
     * @param mainDCode
     * @param mainCCode
     * @param mainFCode
     * @param subDCode
     * @param subCCode
     * @param langCode
     * @param isCreate
     * @returns {Promise<any[]>}
     */
    ['basics-data-field-get-relation-fields'](
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
      langCode: string,
      //
      isCreate: boolean
    ): Promise<any[]>;

    /**
     * 获取基础数据字段表格总数信息
     * BasicsDataFieldActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['basics-data-field-grid-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取基础数据字段表格列表数据
     * BasicsDataFieldActor
     * @param wrapper
     * @returns {Promise<ApiDataSettings.BasicsDataFieldGrid[]>}
     */
    ['basics-data-field-grid-list'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiDataSettings.BasicsDataFieldGrid[]>;

    /**
     * 获取基础数据字段表格分页列表数据
     * BasicsDataFieldActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['basics-data-field-grid-list-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取显示字段数据
     * BasicsDataFieldActor
     * @param customMap
     * @returns {Promise<any[]>}
     */
    ['basics-data-field-select-datas'](
      //
      customMap: { [key: string]: string }
    ): Promise<any[]>;

    /**
     * 更新基础数据字段上移下移置顶置底层级顺序
     * BasicsDataFieldActor
     * @param type
     * @param bdcode
     * @param ccode
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['basics-data-field-sort-update'](
      //
      type: string,
      //
      bdcode: string,
      //
      ccode: string,
      //
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取基础数据字段的字段来源下拉数据
     * BasicsDataFieldActor
     * @param langCode
     * @param bdcode
     * @param ccode
     * @returns {Promise<any[]>}
     */
    ['basics-data-field-source-select'](
      //
      langCode: string,
      //
      bdcode: string,
      //
      ccode: string
    ): Promise<any[]>;

    /**
     * 更新基础数据字段数据
     * BasicsDataFieldActor
     * @param basicsDataField
     * @returns {Promise<ApiDataSettings.BasicsDataFieldDetail>}
     */
    ['basics-data-field-update'](
      //
      basicsDataField: ApiDataSettings.BasicsDataField
    ): Promise<ApiDataSettings.BasicsDataFieldDetail>;

    /**
     * 被修改父节点字段数据
     * BasicsDataFieldActor
     * @param ccode
     * @param req
     * @returns {Promise<ApiDataSettings.BasicsDataFieldDetail>}
     */
    ['basics-data-field-updateData-update'](
      //
      ccode: string,
      //
      req: ApiDataSettings.BasicsDataFieldUpdateDataReq
    ): Promise<ApiDataSettings.BasicsDataFieldDetail>;

    /**
     * 获取常用数据项数据
     * CommonlyUsedActor
     * @param ocode
     * @param ucode
     * @returns {Promise<ApiDataSettings.CommonlyUsedData[]>}
     */
    ['commonly-used-datas-get'](
      //
      ocode: string,
      //
      ucode: string
    ): Promise<ApiDataSettings.CommonlyUsedData[]>;

    /**
     * 设置数据是否常用
     * CommonlyUsedActor
     * @param data
     * @returns {Promise<boolean>}
     */
    ['commonly-used-set'](
      //
      data: ApiDataSettings.CommonlyUsed
    ): Promise<boolean>;

    /**
     * 增加自定义数据字段数据
     * CustomDataFieldActor
     * @param customDataField
     * @returns {Promise<ApiDataSettings.CustomDataField>}
     */
    ['custom-data-field-create'](
      //
      customDataField: ApiDataSettings.CustomDataField
    ): Promise<ApiDataSettings.CustomDataField>;

    /**
     * 删除自定义数据字段数据
     * CustomDataFieldActor
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['custom-data-field-delete'](
      //
      ids: string[]
    ): Promise<boolean>;

    /**
     * 更新自定义数据字段顺序
     * CustomDataFieldActor
     * @param reqs
     * @returns {Promise<boolean>}
     */
    ['custom-data-field-sort-update'](
      //
      reqs: any[]
    ): Promise<boolean>;

    /**
     * 更新自定义数据字段数据
     * CustomDataFieldActor
     * @param customDataField
     * @returns {Promise<ApiDataSettings.CustomDataField>}
     */
    ['custom-data-field-update'](
      //
      customDataField: ApiDataSettings.CustomDataField
    ): Promise<ApiDataSettings.CustomDataField>;

    /**
     * 增加基础数据库分类、目录数据
     * DatabaseClassCatalogActor
     * @param databaseClassCatalog
     * @returns {Promise<ApiDataSettings.DatabaseClassCatalog>}
     */
    ['database-class-catalog-create'](
      //
      databaseClassCatalog: ApiDataSettings.DatabaseClassCatalog
    ): Promise<ApiDataSettings.DatabaseClassCatalog>;

    /**
     * 删除基础数据库分类、目录数据
     * DatabaseClassCatalogActor
     * @param bdcode
     * @param type
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['database-class-catalog-delete'](
      //
      bdcode: string,
      //
      type: string,
      //
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条基础数据库分类、目录数据
     * DatabaseClassCatalogActor
     * @param id
     * @returns {Promise<ApiDataSettings.DatabaseClassCatalog>}
     */
    ['database-class-catalog-get'](
      //
      id: string
    ): Promise<ApiDataSettings.DatabaseClassCatalog>;

    /**
     * 获取基础数据库分类、目录表格总数信息
     * DatabaseClassCatalogActor
     * @param tid
     * @param databaseClassCatalog
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['database-class-catalog-grid-count'](
      //
      tid: string,
      //
      databaseClassCatalog: ApiDataSettings.DatabaseClassCatalog,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取基础数据库分类、目录表格列表数据
     * DatabaseClassCatalogActor
     * @param tid
     * @param databaseClassCatalog
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['database-class-catalog-grid-list'](
      //
      tid: string,
      //
      databaseClassCatalog: ApiDataSettings.DatabaseClassCatalog,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取基础数据库分类、目录表格分页列表数据
     * DatabaseClassCatalogActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['database-class-catalog-grid-list-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取系统字段的表格分页表头与总记录数
     * DatabaseClassCatalogActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['database-class-catalog-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取分类、目录类型下拉数据
     * DatabaseClassCatalogActor
     * @param bdcode
     * @param type
     * @returns {Promise<ApiDataSettings.CatalogTypeSelect[]>}
     */
    ['database-class-catalog-select'](
      //
      bdcode: string,
      //
      type: string
    ): Promise<ApiDataSettings.CatalogTypeSelect[]>;

    /**
     * 更新基础数据库分类、目录数据
     * DatabaseClassCatalogActor
     * @param databaseClassCatalog
     * @returns {Promise<ApiDataSettings.DatabaseClassCatalog>}
     */
    ['database-class-catalog-update'](
      //
      databaseClassCatalog: ApiDataSettings.DatabaseClassCatalog
    ): Promise<ApiDataSettings.DatabaseClassCatalog>;

    /**
     * 增加数据库数据
     * DatabaseActor
     * @param data
     * @returns {Promise<ApiDataSettings.Database>}
     */
    ['database-create'](
      //
      data: ApiDataSettings.Database
    ): Promise<ApiDataSettings.Database>;

    /**
     * 删除数据库数据
     * DatabaseActor
     * @param codes
     * @returns {Promise<boolean>}
     */
    ['database-delete'](
      //
      codes: string[]
    ): Promise<boolean>;

    /**
     * 获取单条数据库数据
     * DatabaseActor
     * @param id
     * @returns {Promise<ApiDataSettings.Database>}
     */
    ['database-get'](
      //
      id: string
    ): Promise<ApiDataSettings.Database>;

    /**
     * 获取字段来源下拉列表
     * DatabaseActor
     * @param langCode
     * @returns {Promise<ApiDataSettings.FileSourceView[]>}
     */
    ['database-get-fieldSource'](
      //
      langCode: string
    ): Promise<ApiDataSettings.FileSourceView[]>;

    /**
     * 获取数据字段表格总数信息
     * DatabaseActor
     * @param tid
     * @param database
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['database-grid-count'](
      //
      tid: string,
      //
      database: ApiDataSettings.Database,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取数据字段表格列表数据
     * DatabaseActor
     * @param tid
     * @param database
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['database-grid-list'](
      //
      tid: string,
      //
      database: ApiDataSettings.Database,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取数据字段表格分页列表数据
     * DatabaseActor
     * @param modelWrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['database-grid-list-page'](
      //
      modelWrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取所有基础数据库
     * DatabaseActor
     * @returns {Promise<any[]>}
     */
    ['database-list-name-and-code'](): Promise<any[]>;

    /**
     * 根据语言标识获取基础数据库数据
     * DatabaseActor
     * @param langCode
     * @returns {Promise<any[]>}
     */
    ['database-list-name-and-code-langcode'](
      //
      langCode: string
    ): Promise<any[]>;

    /**
     * 获取系统字段的表格分页表头与总记录数
     * DatabaseActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['database-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新数据库数据
     * DatabaseActor
     * @param data
     * @returns {Promise<ApiDataSettings.Database>}
     */
    ['database-update'](
      //
      data: ApiDataSettings.Database
    ): Promise<ApiDataSettings.Database>;

    /**
     * 获取系统菜单标题栏组件下拉数据
     * BizSystemMenuConfigActor
     * @param cCode
     * @returns {Promise<ApiDataSettings.SysComponent[]>}
     */
    ['getSystemMenuConfigTitleBarData'](
      //
      cCode: string
    ): Promise<ApiDataSettings.SysComponent[]>;

    /**
     * 增加全局系统权限数据
     * GlobalPermissionActor
     * @param data
     * @returns {Promise<ApiDataSettings.GlobalPermission>}
     */
    ['global-permission-create'](
      //
      data: ApiDataSettings.GlobalPermission
    ): Promise<ApiDataSettings.GlobalPermission>;

    /**
     * 删除全局权限
     * GlobalPermissionActor
     * @param codes
     * @returns {Promise<number>}
     */
    ['global-permission-delete'](
      //
      codes: string[]
    ): Promise<number>;

    /**
     * 获取单条全局权限数据
     * GlobalPermissionActor
     * @param code
     * @returns {Promise<ApiDataSettings.GlobalPermission>}
     */
    ['global-permission-get'](
      //
      code: string
    ): Promise<ApiDataSettings.GlobalPermission>;

    /**
     * 获取所有全局权限
     * GlobalPermissionActor
     * @returns {Promise<any[]>}
     */
    ['global-permission-get-all'](): Promise<any[]>;

    /**
     * 获取全局系统权限的表格列表数据
     * GlobalPermissionActor
     * @param modelWrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['global-permission-grid-list-page'](
      //
      modelWrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 更新全局权限数据
     * GlobalPermissionActor
     * @param data
     * @returns {Promise<ApiDataSettings.GlobalPermission>}
     */
    ['global-permission-update'](
      //
      data: ApiDataSettings.GlobalPermission
    ): Promise<ApiDataSettings.GlobalPermission>;

    /**
     * 更新全局权限上移下移层级顺序
     * GlobalPermissionActor
     * @param reqs
     * @returns {Promise<boolean>}
     */
    ['global-sort-update'](
      //
      reqs: any[]
    ): Promise<boolean>;

    /**
     * 获取表格总数
     * GlobalPermissionActor
     * @param tid
     * @param globalPermission
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['globalPermission-grid-count'](
      //
      tid: string,
      //
      globalPermission: ApiDataSettings.GlobalPermission,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 globalPermission 的表格分页表头与总记录数
     * GlobalPermissionActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['globalPermission-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 增加流程管理数据
     * ProcessManagementActor
     * @param processManagement
     * @returns {Promise<ApiDataSettings.ProcessManagement>}
     */
    ['process-management-create'](
      //
      processManagement: ApiDataSettings.ProcessManagement
    ): Promise<ApiDataSettings.ProcessManagement>;

    /**
     * 删除流程管理数据
     * ProcessManagementActor
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['process-management-delete'](
      //
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条流程管理数据
     * ProcessManagementActor
     * @param id
     * @returns {Promise<ApiDataSettings.ProcessManagement>}
     */
    ['process-management-get'](
      //
      id: string
    ): Promise<ApiDataSettings.ProcessManagement>;

    /**
     * 获取流程管理表格总数信息
     * ProcessManagementActor
     * @param tid
     * @param processManagement
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['process-management-grid-count'](
      //
      tid: string,
      //
      processManagement: ApiDataSettings.ProcessManagement,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取流程管理表格列表数据
     * ProcessManagementActor
     * @param tid
     * @param processManagement
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['process-management-grid-list'](
      //
      tid: string,
      //
      processManagement: ApiDataSettings.ProcessManagement,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取流程管理表格分页列表数据
     * ProcessManagementActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['process-management-grid-list-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取流程管理的表格分页表头与总记录数
     * ProcessManagementActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['process-management-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取流程管理下拉数据
     * ProcessManagementActor
     * @param type
     * @returns {Promise<ApiDataSettings.ProcessManagementSelect[]>}
     */
    ['process-management-select'](
      //
      type: string
    ): Promise<ApiDataSettings.ProcessManagementSelect[]>;

    /**
     * 更新流程管理数据
     * ProcessManagementActor
     * @param processManagement
     * @returns {Promise<ApiDataSettings.ProcessManagement>}
     */
    ['process-management-update'](
      //
      processManagement: ApiDataSettings.ProcessManagement
    ): Promise<ApiDataSettings.ProcessManagement>;

    /**
     * 获取应用系统分类下拉框
     * SysAppActor
     * @returns {Promise<any[]>}
     */
    ['sys-app-category-select'](): Promise<any[]>;

    /**
     * 根据应用code列表获取应用名称列表
     * SysAppActor
     * @param codes
     * @returns {Promise<string>}
     */
    ['sys-app-code-to-name'](
      //
      codes: string
    ): Promise<string>;

    /**
     * 增加 SysApp 数据
     * SysAppActor
     * @param sysApp
     * @returns {Promise<ApiDataSettings.SysApp>}
     */
    ['sys-app-create'](
      //
      sysApp: ApiDataSettings.SysApp
    ): Promise<ApiDataSettings.SysApp>;

    /**
     * 获取应用下拉数据
     * SysAppActor
     * @returns {Promise<any[]>}
     */
    ['sys-app-data-select'](): Promise<any[]>;

    /**
     * 批量删除 SysApp 数据
     * SysAppActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['sys-app-delete'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 拿到所有系统应用
     * SysAppActor
     * @returns {Promise<ApiDataSettings.SysAppView[]>}
     */
    ['sys-app-findAll'](): Promise<ApiDataSettings.SysAppView[]>;

    /**
     * 获取单条 SysApp 数据
     * SysAppActor
     * @param id
     * @returns {Promise<ApiDataSettings.SysApp>}
     */
    ['sys-app-get'](
      //
      id: string
    ): Promise<ApiDataSettings.SysApp>;

    /**
     * 根据应用code获取应用
     * SysAppActor
     * @param code
     * @returns {Promise<ApiDataSettings.SysApp>}
     */
    ['sys-app-get-by-code'](
      //
      code: string
    ): Promise<ApiDataSettings.SysApp>;

    /**
     * 获取应用名称数据
     * SysAppActor
     * @param code
     * @returns {Promise<string>}
     */
    ['sys-app-name-get'](
      //
      code: string
    ): Promise<string>;

    /**
     * 获取 SysApp 的表格分页数据
     * SysAppActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['sys-app-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 SysApp 的表格分页表头与总记录数
     * SysAppActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['sys-app-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取系统应用下拉数据(一级分类，二级应用)
     * SysAppActor
     * @returns {Promise<ApiDataSettings.SysAppRes[]>}
     */
    ['sys-app-select'](): Promise<ApiDataSettings.SysAppRes[]>;

    /**
     * 根据应用分类获取应用列表(不过滤)
     * SysAppActor
     * @param type
     * @param langCode
     * @returns {Promise<ApiDataSettings.SysAppSelect[]>}
     */
    ['sys-app-select-all-by-category'](
      //
      type: string,
      //
      langCode: string
    ): Promise<ApiDataSettings.SysAppSelect[]>;

    /**
     * 根据应用分类获取应用列表
     * SysAppActor
     * @param type
     * @param langCode
     * @returns {Promise<ApiDataSettings.SysAppSelect[]>}
     */
    ['sys-app-select-by-category'](
      //
      type: string,
      //
      langCode: string
    ): Promise<ApiDataSettings.SysAppSelect[]>;

    /**
     * 应用授权-租户获取系统下拉
     * SysAppActor
     * @param tcode
     * @param isFilter
     * @returns {Promise<ApiDataSettings.SysAppRes[]>}
     */
    ['sys-app-select-to-tenant'](
      //
      tcode: string,
      //
      isFilter: boolean
    ): Promise<ApiDataSettings.SysAppRes[]>;

    /**
     * 创建租户-系统下拉
     * SysAppActor
     * @returns {Promise<ApiDataSettings.SysAppRes[]>}
     */
    ['sys-app-select-to-tenant-create'](): Promise<ApiDataSettings.SysAppRes[]>;

    /**
     * 上移下移(序号交换)
     * SysAppActor
     * @param ids
     * @returns {Promise<string>}
     */
    ['sys-app-up-down'](
      //
      ids: string[]
    ): Promise<string>;

    /**
     * 更新 SysApp 数据
     * SysAppActor
     * @param sysApp
     * @returns {Promise<ApiDataSettings.SysApp>}
     */
    ['sys-app-update'](
      //
      sysApp: ApiDataSettings.SysApp
    ): Promise<ApiDataSettings.SysApp>;

    /**
     * 增加系统组件数据
     * SysComponentActor
     * @param data
     * @returns {Promise<ApiDataSettings.SysComponentGrid>}
     */
    ['sys-component-create'](
      //
      data: ApiDataSettings.SysComponent
    ): Promise<ApiDataSettings.SysComponentGrid>;

    /**
     * 删除系统组件数据
     * SysComponentActor
     * @param codes
     * @returns {Promise<number>}
     */
    ['sys-component-delete'](
      //
      codes: string[]
    ): Promise<number>;

    /**
     * 根据code获取单条SysComponent数据
     * SysComponentActor
     * @param code
     * @returns {Promise<ApiDataSettings.SysComponent>}
     */
    ['sys-component-getByCode'](
      //
      code: string
    ): Promise<ApiDataSettings.SysComponent>;

    /**
     * 获取单条SysComponent数据
     * SysComponentActor
     * @param id
     * @returns {Promise<ApiDataSettings.SysComponent>}
     */
    ['sys-component-getById'](
      //
      id: string
    ): Promise<ApiDataSettings.SysComponent>;

    /**
     * 获取 SysComponent 的表格总数信息
     * SysComponentActor
     * @param tid
     * @param sysComponent
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['sys-component-grid-count'](
      //
      tid: string,
      //
      sysComponent: ApiDataSettings.SysComponent,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 SysComponent 的表格列表数据
     * SysComponentActor
     * @param tid
     * @param sysComponent
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['sys-component-grid-list'](
      //
      tid: string,
      //
      sysComponent: ApiDataSettings.SysComponent,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 SysComponent 的表格分页数据
     * SysComponentActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['sys-component-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 SysComponent 的表格分页数据
     * SysComponentActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['sys-component-page-Vo'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 SysComponent 的表格分页表头与总记录数
     * SysComponentActor
     * @param tid
     * @param category
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['sys-component-page-count'](
      //
      tid: string,
      //
      category: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新系统组件数据
     * SysComponentActor
     * @param data
     * @returns {Promise<ApiDataSettings.SysComponentGrid>}
     */
    ['sys-component-update'](
      //
      data: ApiDataSettings.SysComponent
    ): Promise<ApiDataSettings.SysComponentGrid>;

    /**
     * 增加SysFunctions数据
     * SysComponentFuncActor
     * @param data
     * @returns {Promise<ApiDataSettings.SysFunctions>}
     */
    ['sys-functions-create'](
      //
      data: ApiDataSettings.SysFunctions
    ): Promise<ApiDataSettings.SysFunctions>;

    /**
     * 删除SysFunctions数据
     * SysComponentFuncActor
     * @param ids
     * @param scCode
     * @returns {Promise<number>}
     */
    ['sys-functions-delete'](
      //
      ids: string[],
      //
      scCode: string
    ): Promise<number>;

    /**
     * 获取单条SysFunctions数据
     * SysComponentFuncActor
     * @param id
     * @returns {Promise<ApiDataSettings.SysFunctions>}
     */
    ['sys-functions-getById'](
      //
      id: string
    ): Promise<ApiDataSettings.SysFunctions>;

    /**
     * 获取 SysFunctions 的表格总数信息
     * SysComponentFuncActor
     * @param tid
     * @param sysFunctions
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['sys-functions-grid-count'](
      //
      tid: string,
      //
      sysFunctions: ApiDataSettings.SysFunctions,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 SysFunctions 的表格列表数据
     * SysComponentFuncActor
     * @param tid
     * @param sysFunctions
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['sys-functions-grid-list'](
      //
      tid: string,
      //
      sysFunctions: ApiDataSettings.SysFunctions,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 SysFunctions 的表格分页数据
     * SysComponentFuncActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['sys-functions-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 SysFunctions 的表格分页表头与总记录数
     * SysComponentFuncActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['sys-functions-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新SysFunctions数据
     * SysComponentFuncActor
     * @param data
     * @returns {Promise<ApiDataSettings.SysFunctions>}
     */
    ['sys-functions-update'](
      //
      data: ApiDataSettings.SysFunctions
    ): Promise<ApiDataSettings.SysFunctions>;

    /**
     * 增加 SysModule 数据
     * SysModuleActor
     * @param sysModule
     * @returns {Promise<ApiDataSettings.SysModule>}
     */
    ['sys-module-create'](
      //
      sysModule: ApiDataSettings.SysModule
    ): Promise<ApiDataSettings.SysModule>;

    /**
     * 删除系统模块数据
     * SysModuleActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['sys-module-delete'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 SysModule 数据
     * SysModuleActor
     * @param id
     * @returns {Promise<ApiDataSettings.SysModule>}
     */
    ['sys-module-get'](
      //
      id: string
    ): Promise<ApiDataSettings.SysModule>;

    /**
     * 获取 SysModule 的表格总数信息
     * SysModuleActor
     * @param tid
     * @param sysModule
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['sys-module-grid-count'](
      //
      tid: string,
      //
      sysModule: ApiDataSettings.SysModule,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 SysModule 的表格列表数据
     * SysModuleActor
     * @param tid
     * @param sysModule
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['sys-module-grid-list'](
      //
      tid: string,
      //
      sysModule: ApiDataSettings.SysModule,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取应用模块名称数据
     * SysModuleActor
     * @param sCode
     * @param mCode
     * @param langCode
     * @returns {Promise<string>}
     */
    ['sys-module-name-get'](
      //
      sCode: string,
      //
      mCode: string,
      //
      langCode: string
    ): Promise<string>;

    /**
     * 获取 SysModule 的表格分页数据
     * SysModuleActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['sys-module-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 SysModule 的表格分页表头与总记录数
     * SysModuleActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['sys-module-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新 SysModule 数据
     * SysModuleActor
     * @param sysModule
     * @returns {Promise<ApiDataSettings.SysModule>}
     */
    ['sys-module-update'](
      //
      sysModule: ApiDataSettings.SysModule
    ): Promise<ApiDataSettings.SysModule>;

    /**
     * 上移下移(序号交换)
     * SysPageActor
     * @param ids
     * @returns {Promise<string>}
     */
    ['sys-page-up-down'](
      //
      ids: string[]
    ): Promise<string>;

    /**
     * 获取 SysClassify 对象集合
     * SysClassifyActor
     * @param wrapper
     * @returns {Promise<ApiDataSettings.SysClassify[]>}
     */
    ['sys-sysClassify-tree-list'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiDataSettings.SysClassify[]>;

    /**
     * 增加SysClassify数据
     * SysClassifyActor
     * @param data
     * @param sCode
     * @returns {Promise<ApiDataSettings.SysClassify>}
     */
    ['sysClassify-create'](
      //
      data: ApiDataSettings.SysClassify,
      //
      sCode: string
    ): Promise<ApiDataSettings.SysClassify>;

    /**
     * 删除组件分类数据
     * SysClassifyActor
     * @param id
     * @returns {Promise<number>}
     */
    ['sysClassify-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 获取单条 SysClassify 数据
     * SysClassifyActor
     * @param id
     * @returns {Promise<ApiDataSettings.SysClassify>}
     */
    ['sysClassify-get'](
      //
      id: string
    ): Promise<ApiDataSettings.SysClassify>;

    /**
     * 通过唯一标识获取到SysClassify数据
     * SysClassifyActor
     * @param code
     * @returns {Promise<ApiDataSettings.SysClassify>}
     */
    ['sysClassify-get-code'](
      //
      code: string
    ): Promise<ApiDataSettings.SysClassify>;

    /**
     * 获取所有 SysClassify 数据
     * SysClassifyActor
     * @returns {Promise<ApiDataSettings.SysClassify[]>}
     */
    ['sysClassify-getAll'](): Promise<ApiDataSettings.SysClassify[]>;

    /**
     * 根据code获取单条SysClassify数据
     * SysClassifyActor
     * @param code
     * @returns {Promise<ApiDataSettings.SysClassify>}
     */
    ['sysClassify-getCode'](
      //
      code: string
    ): Promise<ApiDataSettings.SysClassify>;

    /**
     * 更新SysClassify数据
     * SysClassifyActor
     * @param data
     * @returns {Promise<ApiDataSettings.SysClassify>}
     */
    ['sysClassify-update'](
      //
      data: ApiDataSettings.SysClassify
    ): Promise<ApiDataSettings.SysClassify>;

    /**
     * 增加系统语言数据
     * SystemLanguageActor
     * @param data
     * @returns {Promise<ApiDataSettings.SystemLanguage>}
     */
    ['syslanguage-create'](
      //
      data: ApiDataSettings.SystemLanguage
    ): Promise<ApiDataSettings.SystemLanguage>;

    /**
     * 删除系统语言数据
     * SystemLanguageActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['syslanguage-delete'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条系统语言数据
     * SystemLanguageActor
     * @param id
     * @returns {Promise<ApiDataSettings.SystemLanguage>}
     */
    ['syslanguage-get'](
      //
      id: string
    ): Promise<ApiDataSettings.SystemLanguage>;

    /**
     * 获取表格总数信息
     * SystemLanguageActor
     * @param tid
     * @param systemLanguage
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['syslanguage-grid-count'](
      //
      tid: string,
      //
      systemLanguage: ApiDataSettings.SystemLanguage,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取表格列表数据
     * SystemLanguageActor
     * @param tid
     * @param systemLanguage
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['syslanguage-grid-list'](
      //
      tid: string,
      //
      systemLanguage: ApiDataSettings.SystemLanguage,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取分页表格列表数据
     * SystemLanguageActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['syslanguage-grid-list-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 syslanguage 的表格分页表头与总记录数
     * SystemLanguageActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['syslanguage-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取存在的语言分类数据
     * SystemLanguageActor
     * @returns {Promise<any[]>}
     */
    ['syslanguage-types-get'](): Promise<any[]>;

    /**
     * 更新系统语言数据
     * SystemLanguageActor
     * @param data
     * @returns {Promise<ApiDataSettings.SystemLanguage>}
     */
    ['syslanguage-update'](
      //
      data: ApiDataSettings.SystemLanguage
    ): Promise<ApiDataSettings.SystemLanguage>;

    /**
     * 删除系统组件参数数据
     * SysComponentParmActor
     * @param pcode
     * @param codes
     * @returns {Promise<boolean>}
     */
    ['system-component-par-delete'](
      //
      pcode: string,
      //
      codes: string[]
    ): Promise<boolean>;

    /**
     * 获取 customDataField 的表格总数信息
     * SysComponentParmActor
     * @param tid
     * @param customDataField
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['system-component-par-grid-count'](
      //
      tid: string,
      //
      customDataField: ApiDataSettings.CustomDataField,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 customDataField 的表格列表数据
     * SysComponentParmActor
     * @param tid
     * @param customDataField
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['system-component-par-grid-list'](
      //
      tid: string,
      //
      customDataField: ApiDataSettings.CustomDataField,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 customDataField 的表格分页数据
     * SysComponentParmActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['system-component-par-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 customDataField 的表格分页表头与总记录数
     * SysComponentParmActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['system-component-par-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取单条系统组件参数数据
     * BizSysComponentParmActor
     * @param id
     * @returns {Promise<ApiDataSettings.SysComponentDetail>}
     */
    ['system-component-parm-get'](
      //
      id: string
    ): Promise<ApiDataSettings.SysComponentDetail>;

    /**
     * 增加系统字段数据
     * SystemFieldActor
     * @param systemField
     * @returns {Promise<ApiDataSettings.SystemField>}
     */
    ['system-field-create'](
      //
      systemField: ApiDataSettings.SystemField
    ): Promise<ApiDataSettings.SystemField>;

    /**
     * 获取系统字段数据来源下拉数据
     * SystemFieldActor
     * @returns {Promise<ApiDataSettings.DataSourceSelect[]>}
     */
    ['system-field-data-sources-select'](): Promise<
      ApiDataSettings.DataSourceSelect[]
    >;

    /**
     * 删除系统字段数据
     * SystemFieldActor
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['system-field-delete'](
      //
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条系统字段数据
     * SystemFieldActor
     * @param id
     * @returns {Promise<ApiDataSettings.SystemField>}
     */
    ['system-field-get'](
      //
      id: string
    ): Promise<ApiDataSettings.SystemField>;

    /**
     * 获取系统字段表格总数信息
     * SystemFieldActor
     * @param tid
     * @param systemLanguage
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['system-field-grid-count'](
      //
      tid: string,
      //
      systemLanguage: ApiDataSettings.SystemField,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取系统字段表格列表数据
     * SystemFieldActor
     * @param tid
     * @param systemLanguage
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['system-field-grid-list'](
      //
      tid: string,
      //
      systemLanguage: ApiDataSettings.SystemField,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取系统字段表格分页列表数据
     * SystemFieldActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['system-field-grid-list-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取系统字段的表格分页表头与总记录数
     * SystemFieldActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['system-field-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新系统字段数据
     * SystemFieldActor
     * @param systemField
     * @returns {Promise<ApiDataSettings.SystemField>}
     */
    ['system-field-update'](
      //
      systemField: ApiDataSettings.SystemField
    ): Promise<ApiDataSettings.SystemField>;

    /**
     * 增加系统菜单数据
     * SystemMenuConfigActor
     * @param data
     * @returns {Promise<ApiDataSettings.SystemMenuConfig>}
     */
    ['system-menu-config-create'](
      //
      data: ApiDataSettings.SystemMenuConfig
    ): Promise<ApiDataSettings.SystemMenuConfig>;

    /**
     * 删除系统菜单数据
     * SystemMenuConfigActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['system-menu-config-delete'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 查询单个系统菜单对象
     * SystemMenuConfigActor
     * @param id
     * @returns {Promise<ApiDataSettings.SystemMenuConfig>}
     */
    ['system-menu-config-getById'](
      //
      id: string
    ): Promise<ApiDataSettings.SystemMenuConfig>;

    /**
     * 获取 SystemMenuConfig 的表格总数信息
     * SystemMenuConfigActor
     * @param tid
     * @param systemMenuConfig
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['system-menu-config-grid-count'](
      //
      tid: string,
      //
      systemMenuConfig: ApiDataSettings.SystemMenuConfig,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 SystemMenuConfig 的表格列表数据
     * SystemMenuConfigActor
     * @param tid
     * @param systemMenuConfig
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['system-menu-config-grid-list'](
      //
      tid: string,
      //
      systemMenuConfig: ApiDataSettings.SystemMenuConfig,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 SystemMenuConfig 的表格分页数据
     * SystemMenuConfigActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['system-menu-config-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 SystemMenuConfig 的表格分页表头与总记录数
     * SystemMenuConfigActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['system-menu-config-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 停车系统返回对象集合
     * BizSystemMenuConfigActor
     * @returns {Promise<ApiDataSettings.SystemMenuConfig[]>}
     */
    ['system-menu-config-tree'](): Promise<ApiDataSettings.SystemMenuConfig[]>;

    /**
     * 修改系统菜单数据
     * SystemMenuConfigActor
     * @param data
     * @returns {Promise<ApiDataSettings.SystemMenuConfig>}
     */
    ['system-menu-config-update'](
      //
      data: ApiDataSettings.SystemMenuConfig
    ): Promise<ApiDataSettings.SystemMenuConfig>;

    /**
     * 获取系统模块目录树数据
     * SysModuleActor
     * @param sCode
     * @param langCode
     * @returns {Promise<ApiDataSettings.SysModuleVo[]>}
     */
    ['system-module-tree-list'](
      //
      sCode: string,
      //
      langCode: string
    ): Promise<ApiDataSettings.SysModuleVo[]>;

    /**
     * 增加 SysAppPage 数据
     * SysPageActor
     * @param sysAppPage
     * @returns {Promise<ApiDataSettings.SysAppPage>}
     */
    ['system-page-create'](
      //
      sysAppPage: ApiDataSettings.SysAppPage
    ): Promise<ApiDataSettings.SysAppPage>;

    /**
     * 批量删除 SysAppPage 数据
     * SysPageActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['system-page-delete'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条 SysAppPage 数据
     * SysPageActor
     * @param id
     * @returns {Promise<ApiDataSettings.SysAppPageGrid>}
     */
    ['system-page-get'](
      //
      id: string
    ): Promise<ApiDataSettings.SysAppPageGrid>;

    /**
     * 获取 SysAppPage 的表格分页数据
     * SysPageActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['system-page-grid-list-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 SysAppPage 的表格分页表头与总记录数
     * SysPageActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['system-page-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 根据模块code获取系统页面下拉
     * SysPageActor
     * @param sCode
     * @param mCode
     * @param langCode
     * @returns {Promise<ApiDataSettings.SysAppPageSelect[]>}
     */
    ['system-page-select-by-mCode'](
      //
      sCode: string,
      //
      mCode: string,
      //
      langCode: string
    ): Promise<ApiDataSettings.SysAppPageSelect[]>;

    /**
     * 更新 SysAppPage 数据
     * SysPageActor
     * @param sysAppPage
     * @returns {Promise<ApiDataSettings.SysAppPage>}
     */
    ['system-page-update'](
      //
      sysAppPage: ApiDataSettings.SysAppPage
    ): Promise<ApiDataSettings.SysAppPage>;

    /**
     * 增加SystemInfo数据
     * SystemInfoActor
     * @param systemInfo
     * @returns {Promise<ApiDataSettings.SystemInfo>}
     */
    ['systemInfo-create'](
      //
      systemInfo: ApiDataSettings.SystemInfo
    ): Promise<ApiDataSettings.SystemInfo>;

    /**
     * 删除SystemInfo数据
     * SystemInfoActor
     * @param id
     * @returns {Promise<number>}
     */
    ['systemInfo-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 获取单条SystemInfo数据
     * SystemInfoActor
     * @returns {Promise<ApiDataSettings.SystemInfo>}
     */
    ['systemInfo-get'](): Promise<ApiDataSettings.SystemInfo>;

    /**
     * 获取SystemInfo的表格总数信息
     * SystemInfoActor
     * @param tid
     * @param systemInfo
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['systemInfo-grid-count'](
      //
      tid: string,
      //
      systemInfo: ApiDataSettings.SystemInfo,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取SystemInfo的表格列表数据
     * SystemInfoActor
     * @param tid
     * @param systemInfo
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['systemInfo-grid-list'](
      //
      tid: string,
      //
      systemInfo: ApiDataSettings.SystemInfo,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 更新SystemInfo数据
     * SystemInfoActor
     * @param systemInfo
     * @returns {Promise<number>}
     */
    ['systemInfo-update'](
      //
      systemInfo: ApiDataSettings.SystemInfo
    ): Promise<number>;

    /**
     * 增加SystemVersion数据
     * SystemVersionInfoActor
     * @param systemVersionInfo
     * @returns {Promise<ApiDataSettings.SystemVersionInfo>}
     */
    ['systemVersion-create'](
      //
      systemVersionInfo: ApiDataSettings.SystemVersionInfo
    ): Promise<ApiDataSettings.SystemVersionInfo>;

    /**
     * 删除SystemVersion数据
     * SystemVersionInfoActor
     * @param id
     * @returns {Promise<number>}
     */
    ['systemVersion-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 获取单条SystemVersion数据
     * SystemVersionInfoActor
     * @param id
     * @returns {Promise<ApiDataSettings.SystemVersionInfo>}
     */
    ['systemVersion-get'](
      //
      id: string
    ): Promise<ApiDataSettings.SystemVersionInfo>;

    /**
     * 获取 SystemVersion 的表格总数信息
     * SystemVersionInfoActor
     * @param tid
     * @param systemVersionInfo
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['systemVersion-grid-count'](
      //
      tid: string,
      //
      systemVersionInfo: ApiDataSettings.SystemVersionInfo,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取 SystemVersion 的表格列表数据
     * SystemVersionInfoActor
     * @param tid
     * @param systemVersionInfo
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['systemVersion-grid-list'](
      //
      tid: string,
      //
      systemVersionInfo: ApiDataSettings.SystemVersionInfo,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 获取 SystemVersion 的表格分页数据
     * SystemVersionInfoActor
     * @param wrapper
     * @returns {Promise<ApiCommon.PageInfo>}
     */
    ['systemVersion-page'](
      //
      wrapper: ApiCommon.ModelWrapper
    ): Promise<ApiCommon.PageInfo>;

    /**
     * 获取 SystemVersion 的表格分页表头与总记录数
     * SystemVersionInfoActor
     * @param tid
     * @param wrapper
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['systemVersion-page-count'](
      //
      tid: string,
      //
      wrapper: ApiCommon.ModelWrapper,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 更新SystemVersion数据
     * SystemVersionInfoActor
     * @param systemVersionInfo
     * @returns {Promise<number>}
     */
    ['systemVersion-update'](
      //
      systemVersionInfo: ApiDataSettings.SystemVersionInfo
    ): Promise<number>;

    /**
     * 暂停升级
     * UpgradeActor
     * @param packageName
     * @returns {Promise<string>}
     */
    ['upgrade-pause'](
      //
      packageName: string
    ): Promise<string>;

    /**
     * 还原版本
     * UpgradeActor
     * @param packageName
     * @returns {Promise<string>}
     */
    ['upgrade-recover'](
      //
      packageName: string
    ): Promise<string>;

    /**
     * 重新开始
     * UpgradeActor
     * @param packageName
     * @returns {Promise<string>}
     */
    ['upgrade-resume'](
      //
      packageName: string
    ): Promise<string>;

    /**
     * 开始升级
     * UpgradeActor
     * @param payload
     * @returns {Promise<string>}
     */
    ['upgrade-start'](
      //
      payload: ApiDataSettings.StartUpgradePayload
    ): Promise<string>;

    /**
     * 停止升级
     * UpgradeActor
     * @param packageName
     * @returns {Promise<string>}
     */
    ['upgrade-stop'](
      //
      packageName: string
    ): Promise<string>;

    /**
     * 增加UpgradeInfo数据
     * UpgradeInfoActor
     * @param upgradeInfo
     * @returns {Promise<ApiDataSettings.UpgradeInfo>}
     */
    ['upgradeInfo-create'](
      //
      upgradeInfo: ApiDataSettings.UpgradeInfo
    ): Promise<ApiDataSettings.UpgradeInfo>;

    /**
     * 删除UpgradeInfo数据
     * UpgradeInfoActor
     * @param id
     * @returns {Promise<number>}
     */
    ['upgradeInfo-delete'](
      //
      id: string
    ): Promise<number>;

    /**
     * 获取单条UpgradeInfo数据
     * UpgradeInfoActor
     * @param id
     * @returns {Promise<ApiDataSettings.UpgradeInfo>}
     */
    ['upgradeInfo-get'](
      //
      id: string
    ): Promise<ApiDataSettings.UpgradeInfo>;

    /**
     * 获取UpgradeInfo的表格总数信息
     * UpgradeInfoActor
     * @param tid
     * @param upgradeInfo
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridCount>}
     */
    ['upgradeInfo-grid-count'](
      //
      tid: string,
      //
      upgradeInfo: ApiDataSettings.UpgradeInfo,
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridCount>;

    /**
     * 获取UpgradeInfo的表格列表数据
     * UpgradeInfoActor
     * @param tid
     * @param upgradeInfo
     * @param orders
     * @param appendKeys
     * @returns {Promise<ApiCommon.GridData>}
     */
    ['upgradeInfo-grid-list'](
      //
      tid: string,
      //
      upgradeInfo: ApiDataSettings.UpgradeInfo,
      //
      orders: any[],
      //
      appendKeys: string[]
    ): Promise<ApiCommon.GridData>;

    /**
     * 更新UpgradeInfo数据
     * UpgradeInfoActor
     * @param upgradeInfo
     * @returns {Promise<number>}
     */
    ['upgradeInfo-update'](
      //
      upgradeInfo: ApiDataSettings.UpgradeInfo
    ): Promise<number>;
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
  export type AppCategorySelect = {
    // 分类码
    code?: string;
    // 分类名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type AssociationTable = {
    //
    id?: string;
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
    // 语言标识
    langCode?: string;
    // 属性场景类型
    bigType?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type AuthorizationInfo = {
    // 标识列
    id?: string;
    // 业务标识
    sid?: string;
    // 被授权者
    user?: string;
    // 授权密钥
    key?: string;
    // 授权系统
    applications?: string;
    // 授权日期
    startDate?: string;
    // 到期日期
    endDate?: string;
    // 租户数量
    userQty?: number;
    // 使用状态
    status?: number;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type AuthorizationPayload = {
    // 标识列
    id?: string;
    // 工程密码
    projectPassword?: string;
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
  export type BasicDataFieldView = {
    // 库标识
    bdcode?: string;
    // 分类标识
    ccode?: string;
    // 字段标识
    code?: string;
    // 库名称
    bdcodeName?: string;
    // 分类名称
    ccodeName?: string;
    // 字段名称
    codeName?: string;
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
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type BasicSystemMenuGrid = {
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
  export type BasicsClassCatalog = {
    // 分类序号
    id?: string;
    // 分类父序号
    pid?: string;
    // 基础库标识
    bdcode?: string;
    // 分类名称
    name?: string;
    // 分类标识
    code?: string;
    // 语言标识
    langCode?: string;
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
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type BasicsClassCatalogSelect = {
    // 标识
    code?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type BasicsClassCatalogTree = {
    // 分类序号
    id?: string;
    // 分类父序号
    pid?: string;
    // 分类名称
    name?: string;
    // 分类标识
    code?: string;
    // 语言标识
    langCode?: string;
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
  export type BasicsDataField = {
    // 数据字段序号
    id?: string;
    // 字段来源
    dcode?: string;
    // 基础库标识
    bdcode?: string;
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
    // 语言标识
    langCode?: string;
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
    // 关联模式
    associationMode?: string;
    // 关系字段
    associationDataField?: string;
    // 录入界面
    inputInterface?: string;
    // 数据数量
    dataCount?: string;
    // 数据选择
    dataChoice?: string;
    // 只允许选择最终分类下的数据
    finalClassification?: boolean;
    // 允许多选
    multipleChoice?: boolean;
  };

  /**
   * 传入参数
   */
  export type BasicsDataFieldDetail = {
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
    // 语言标识
    langCode?: string;
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
    // 父节点字段是否被修改（列显示，默认展示字段，可搜索字段，可编辑字段，启用本字段（逗号分割））
    updateData?: string;
    // 数据字段序号
    id?: string;
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
  export type BasicsDataFieldEnableReq = {
    // 数据字段序号
    id?: string;
    // 是否是继承数据字段
    existed?: boolean;
  };

  /**
   * 传入参数
   */
  export type BasicsDataFieldEnableRes = {
    // 数据字段序号
    id?: string;
    // 启用/禁用
    enabled?: boolean;
  };

  /**
   * 传入参数
   */
  export type BasicsDataFieldGrid = {
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
    // 语言标识
    langCode?: string;
    // 字段来源(库标识)
    dcode?: string;
    // 所属分类标识
    ccode?: string;
    // 数据来源标识
    dscode?: string;
    // 排序
    sort?: number;
    // 父节点字段是否被修改（列显示，默认展示字段，可搜索字段，可编辑字段，启用本字段，父节点数据是否被修改，排序；（逗号分割）））
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
  export type BasicsDataFieldSortReq = {
    // 数据字段序号
    id?: string;
    // 排序
    sort?: number;
  };

  /**
   * 传入参数
   */
  export type BasicsDataFieldUpdateDataReq = {
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
  export type BasicsFileSourceView = {
    // 字段来源名称
    name?: string;
    // 字段来源标识
    code?: string;
  };

  /**
   * 传入参数
   */
  export type BasicsSelectData = {
    // 标识
    code?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type CatalogTypeSelect = {
    // 标识
    code?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type CheckAuthorizationPayload = {
    // 工程密码
    projectPassword?: string;
    // 文件密码
    filePassword?: string;
    // 授权密钥
    authorizationKey?: string;
    // 授权文件
    file?: string;
  };

  /**
   * 传入参数
   */
  export type CommonlyUsed = {
    // 常用数据序号
    id?: string;
    // 当前机构标识
    ocode?: string;
    // 当前用户标识
    ucode?: string;
    // 基础配置分类类型
    type?: string;
    // 名称
    name?: string;
    // 是否常用
    commonUsed?: boolean;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type CommonlyUsedData = {
    // 类型
    type?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type CustomDataField = {
    // 自定义属性序号
    id?: string;
    // 父级标识
    pcode?: string;
    // 属性场景类型
    bigType?: string;
    // 属性分类
    attrType?: string;
    // 属性类型
    ptype?: string;
    // 属性标识
    code?: string;
    // 数据是否可编辑
    edited?: boolean;
    // 属性是否必填
    required?: boolean;
    // 数据类型
    type?: string;
    // 数据范围
    range?: string;
    // 数据单位
    unit?: string;
    // 默认值
    value?: string;
    // 备注
    desc?: string;
    // 排序
    sort?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 名称
    name?: { [key: string]: string };
    // 名称说明
    nameExplain?: { [key: string]: string };
  };

  /**
   * 传入参数
   */
  export type CustomDataFieldSortReq = {
    // 自定义属性序号
    id?: string;
    // 排序
    sort?: number;
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
  export type DataSourceSelect = {
    // 字段所属分类
    ctype?: string;
    // 字段标识
    code?: string;
    // 字段名称
    name?: string;
    // 字段数据类型
    type?: string;
    // 字段数据范围
    range?: string;
    // 数据单位
    unit?: string;
    // 默认值
    value?: string;
  };

  /**
   * 传入参数
   */
  export type Database = {
    // 主键
    id?: string;
    // 标识（唯一）
    code?: string;
    // 分类类型
    classTypeNum?: number;
    // 目录类型
    catalogTypeNum?: number;
    // 是否必备库
    isNecessary?: boolean;
    // 是否启用
    enabled?: boolean;
    // 库说明
    desc?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 名称
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type DatabaseClassCatalog = {
    // 序号
    id?: string;
    // 标识
    code?: string;
    // 基础库标识
    bdcode?: string;
    // 是否启用
    enabled?: boolean;
    // 类型
    type?: string;
    // 说明
    desc?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 名称
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type DatabaseClassCatalogGrid = {
    // 标识
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 说明
    desc?: string;
    // 序号
    id?: string;
    // 基础库标识
    bdcode?: string;
    // 类型
    type?: string;
    // 名称
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type DatabaseGrid = {
    // 标识（唯一）
    code?: string;
    // 分类类型
    classTypeNum?: number;
    // 目录类型
    catalogTypeNum?: number;
    // 是否必备库
    isNecessary?: boolean;
    // 是否启用
    enabled?: boolean;
    // 库说明
    desc?: string;
    // 主键
    id?: string;
    // 基础数据库名称
    name?: { [key: string]: any };
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
  export type DeleteDataRes = {
    // 成功数据
    succeed?: string;
    // 失败数据
    fail?: string;
    // 当前选中字段已经被关系父表定义数据
    define?: string;
    // 当前选中字段已经被作为显示字段
    show?: string;
    // 字段关联信息
    view?: ApiDataSettings.BasicDataFieldView;
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
  export type GenerateAuthorizationPayload = {
    // 被授权者（用户）
    user?: string;
    // 授权平台
    platforms?: string;
    // 授权系统
    applications?: string;
    // 授权日期
    startDate?: string;
    // 到期日期
    endDate?: string;
    // 租户数量
    userQty?: number;
    // 文件密码
    filePassword?: string;
  };

  /**
   * 传入参数
   */
  export type GetAuthorizationPayload = {
    // 文件密码
    filePassword?: string;
    // 授权文件
    file?: string;
  };

  /**
   * 传入参数
   */
  export type GlobalPermission = {
    // 序号
    id?: string;
    // 权限标识
    code?: string;
    // 排序
    sort?: number;
    // 是否启用
    enabled?: boolean;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 权限名称(国际化字段)
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type GlobalPermissionGrid = {
    // 权限标识
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 序号
    id?: string;
    // 排序
    sort?: number;
    // 权限名称(国际化字段)
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type GlobalPermissionSortReq = {
    // 全局权限code
    code?: string;
    // 排序
    sort?: number;
  };

  /**
   * 传入参数
   */
  export type GlobalPermissionView = {
    // 权限标识
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 权限名称
    name?: string;
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
  export type LanguageTypeRes = {
    // 语言标识（如：zh_CN）
    code?: string;
    // 语言名称
    name?: string;
    // 是否默认语言
    defaulted?: boolean;
  };

  /**
   * 传入参数
   */
  export type ProcessManagement = {
    // 序号
    id?: string;
    // 标识
    code?: string;
    // 排序序号
    sort?: number;
    // 是否启用
    enabled?: boolean;
    // 类型
    type?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 名称
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type ProcessManagementGrid = {
    // 标识
    code?: string;
    // 排序序号
    sort?: number;
    // 是否启用
    enabled?: boolean;
    // 序号
    id?: string;
    // 类型
    type?: string;
    // 名称
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type ProcessManagementSelect = {
    // 标识
    code?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type StartUpgradePayload = {
    // 升级包编号
    packageName?: string;
    // 升级方式
    type?: number;
    // 更新比重
    rate?: number;
    // 是否升级完成自动运行服务
    autoStart?: number;
  };

  /**
   * 传入参数
   */
  export type SysApp = {
    // 系统应用唯一标识
    id?: string;
    // 系统分类code
    category?: string;
    // 系统应用标识（如：SYSTEM）
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 排序序号
    sort?: number;
    // 默认排序
    defaultSort?: number;
    // 创建时间
    ctime?: string;
    // 修改时间
    etime?: string;
    // 系统应用名称（国际化字段）
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type SysAppGrid = {
    // 系统分类code
    category?: string;
    // 系统应用标识（如：SYSTEM）
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 系统应用唯一标识
    id?: string;
    // 系统应用名称
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type SysAppPage = {
    // 系统应用唯一标识
    id?: string;
    // 所属系统应用code
    sCode?: string;
    // 所属系统模块code
    mCode?: string;
    // 图标来源
    logoSource?: string;
    // 页面图标
    logo?: string;
    // 页面名称
    name?: string;
    // 页面标识
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 权限项
    permissionItem?: string;
    // 排序序号
    sort?: number;
    // 默认排序
    defaultSort?: number;
    // 语言标识
    langCode?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type SysAppPageGrid = {
    // 所属模块名称
    moduleName?: string;
    // 页面图标
    logo?: string;
    // 页面名称
    name?: string;
    // 组件标识
    code?: string;
    // 权限项数量
    permissionItemNum?: number;
    // 是否启用
    enabled?: boolean;
    // 系统应用页面唯一标识
    id?: string;
    // 权限项
    permissionItem?: string;
    // 图标来源
    logoSource?: string;
    // 所属模块code
    mCode?: string;
  };

  /**
   * 传入参数
   */
  export type SysAppPageSelect = {
    // 页面标识
    code?: string;
    // 页面名称
    name?: string;
    // 页面图标
    logo?: string;
  };

  /**
   * 传入参数
   */
  export type SysAppRes = {
    // 系统名称
    name?: string;
    // code(一级菜单code,二级系统code)
    code?: string;
    // 子节点数据数组
    children?: ApiDataSettings.SysAppRes[];
  };

  /**
   * 传入参数
   */
  export type SysAppSelect = {
    // 应用code
    code?: string;
    // 应用名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type SysAppView = {
    // 应用code
    code?: string;
    // 应用名称
    name?: string;
    // 应用分类
    category?: string;
  };

  /**
   * 传入参数
   */
  export type SysAppVo = {
    // 系统应用序号
    id?: string;
    // 系统应用标识（如：SYSTEM）
    code?: string;
    // 系统分类code
    category?: string;
    // 是否启用
    enabled?: boolean;
    // 系统应用名称
    name?: string;
    // 子节点数据数组
    children?: ApiDataSettings.SysAppVo[];
  };

  /**
   * 传入参数
   */
  export type SysClassify = {
    // 组件配置唯一标识
    id?: string;
    // 组件节点
    code?: string;
    // 组件父节点
    pCode?: string;
    // 图标
    imgUrl?: string;
    // 排序
    sort?: number;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 组件配置名称（国际化字段）
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type SysClassifyGrid = {
    // 组件节点
    code?: string;
    // 组件父节点
    pCode?: string;
    // 图标
    imgUrl?: string;
    // 排序
    sort?: number;
    // 组件配置唯一标识
    id?: string;
    // 组件配置名称（国际化字段）
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type SysClassifyVo = {
    // 组件配置唯一标识
    id?: string;
    // 组件节点
    code?: string;
    // 组件父节点
    pCode?: string;
    // 排序
    sort?: number;
    // 组件配置名称（国际化字段）
    name?: { [key: string]: any };
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
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 组件配置名称（国际化字段）
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type SysComponentDetail = {
    // 参数序号
    id?: string;
    // 参数标识
    code?: string;
    // 数据类型
    type?: string;
    // 数据范围
    range?: string;
    // 数据单位
    unit?: string;
    // 默认值
    value?: string;
    // 显示位数
    digit?: number;
    // 日期模式
    dateMode?: string;
    // 日期格式
    dateFormat?: string;
    // 时间格式
    timeFormat?: string;
    // 星期格式
    weekFormat?: string;
    // 是否允许多选
    checkboxsed?: boolean;
    // 属性是否必填
    required?: boolean;
    // 名称(国际化字段)
    name?: { [key: string]: any };
    // 名称说明(国际化字段)
    nameExplain?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type SysComponentGrid = {
    // 组件组件标识code
    code?: string;
    // 组件组件功能数量
    funcCount?: number;
    // 组件组件参数数量
    parmCount?: number;
    // 组件配置唯一标识
    id?: string;
    // 所属分类code
    cid?: string;
    // 所属分类名
    cName?: { [key: string]: any };
    // 组件组件名称（国际化字段）
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type SysComponentParmGrid = {
    // 参数标识
    code?: string;
    // 数据类型
    type?: string;
    // 默认值
    value?: string;
    // 参数序号
    id?: string;
    // 名称(国际化字段)
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type SysFunctionGrid = {
    // 组件功能标识
    code?: string;
    // 是否启动
    enabled?: boolean;
    // 组件功能唯一标识
    id?: string;
    // 所属系统组件标识
    scCode?: string;
    // 组件功能名称（国际化字段）
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type SysFunctions = {
    // 系统组件功能id
    id?: string;
    // 系统组件唯一标识
    scCode?: string;
    // 系统组件功能唯一标识
    code?: string;
    // 是否启动
    enabled?: boolean;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 系统组件名称（国际化）
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type SysModule = {
    // 系统模块唯一标识
    id?: string;
    // 系统模块名称
    name?: string;
    // 系统模块标识（如：GIS）
    code?: string;
    // 系统应用code
    sCode?: string;
    // 系统模块父code
    pCode?: string;
    // 是否启用
    enabled?: boolean;
    // 语言标识
    langCode?: string;
    // 排序序号
    sort?: number;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type SysModuleVo = {
    // 系统模块序号
    id?: string;
    // 系统应用code
    sCode?: string;
    // 父模块code
    pCode?: string;
    // 系统模块标识（如：GIS）
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 系统模块名称
    name?: string;
    // 子节点数据数组
    children?: ApiDataSettings.SysModuleVo[];
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
  export type SystemField = {
    // 字段序号
    id?: string;
    // 字段所属分类
    ctype?: string;
    // 字段标识
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 数据类型
    type?: string;
    // 数据范围
    range?: string;
    // 数据单位
    unit?: string;
    // 默认值
    value?: string;
    // 排序
    sort?: number;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 字段名称
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type SystemFieldGrid = {
    // 字段标识
    code?: string;
    // 数据类型
    type?: string;
    // 排序序号
    sort?: number;
    // 是否启用
    enabled?: boolean;
    // 数据范围
    range?: string;
    // 数据单位
    unit?: string;
    // 默认值
    value?: string;
    // 字段序号
    id?: string;
    // 字段所属分类
    ctype?: string;
    // 字段名称
    name?: { [key: string]: any };
  };

  /**
   * 传入参数
   */
  export type SystemInfo = {
    // 标识列
    id?: string;
    // 业务标识
    sid?: string;
    // 公网域名
    publicDomainName?: string;
    // 公网地址
    publicLocation?: string;
    // 负载均衡
    loadBalance?: string;
    // 系统版本
    systemVersion?: string;
    // 系统描述
    systemComment?: string;
    // 框架版本
    frameworkVersion?: string;
    // 发行日期
    publishDate?: string;
    // 工程密码
    projectPassword?: string;
    // 授权认证信息
    authorizationInfo?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type SystemLanguage = {
    // 标识列
    id?: string;
    // 语言名称
    name?: string;
    // 语言标识
    code?: string;
    // 默认语言，0否，1是；
    defaulted?: boolean;
    // 顺序
    sort?: number;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type SystemLanguageGrid = {
    // 语言名称
    name?: string;
    // 语言标识（如：zh_CN）
    code?: string;
    // 顺序
    sort?: number;
    // 是否默认语言
    defaulted?: boolean;
    // 语言唯一标识
    id?: string;
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
    // 启用本系统菜单
    enabled?: boolean;
    // 背景遮罩
    background?: string;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
    // 标题栏组件
    titleBar?: string[];
    // 1系统组件 2租户菜单
    type?: string;
    // 租户标识
    tcode?: string;
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
    // 系统分类
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
    // 启用本系统菜单
    enabled?: boolean;
    // 背景遮罩
    background?: string;
    // 系统菜单序号
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
  export type SystemVersionInfo = {
    // 唯一标识
    id?: string;
    // 业务标识
    sid?: string;
    // 升级包编号
    packageName?: string;
    // 升级包路径
    path?: string;
    // 包大小
    size?: string;
    // 包类型
    type?: number;
    // 版本号
    version?: string;
    // 发布人
    publisher?: string;
    // 创建时间
    ctime?: string;
    // 最后更新时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type UnlockTable = {
    // 唯一序号
    id?: string;
    // 表名
    tname?: string;
    // 编辑状态是否解锁
    edited?: boolean;
  };

  /**
   * 传入参数
   */
  export type UpgradeInfo = {
    // 标识列
    id?: string;
    // 业务标识
    sid?: string;
    // 升级包编号
    packageName?: string;
    // 升级方式：1停服升级，2灰度发布；
    type?: number;
    // 更新比重：1(1:1)，2(1:2)，3(1:3)，4(1:4)，5(1:5)；
    rate?: number;
    // 是否升级完成自动运行服务
    autoStart?: number;
    // 升级日志
    comment?: string;
    // 处理状态：1已创建，2处理中，3已完成；
    status?: number;
    // 创建时间
    ctime?: string;
    // 更新时间
    etime?: string;
  };

  //#endregion

  //#region 枚举支持
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

  //#endregion
}

export default ApiDataSettings;
