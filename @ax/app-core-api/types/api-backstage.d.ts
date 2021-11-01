import ApiCore from './api-core';

// ApiBackstage 接口合集
declare namespace ApiBackstage {
  //#region 正式API类型定义
  interface RequestActor {
    /**
     * 增加租户系统菜单数据
     * InterfaceActor
     * @param data
     * @returns {Promise<Interface>}
     */
    ['Interface-create'](
      // 系统菜单数据对象
      data: Interface
    ): Promise<Interface>;

    /**
     * 删除租户系统菜单数据
     * InterfaceActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['Interface-delete'](
      // 系统菜单唯一标识数组
      ids: string[]
    ): Promise<number>;

    /**
     * 查询单个租户系统菜单对象
     * InterfaceActor
     * @param id
     * @returns {Promise<Interface>}
     */
    ['Interface-getById'](
      // 租户系统菜单对象唯一标识
      id: string
    ): Promise<Interface>;

    /**
     * 根据系统分类获取租户系统菜单
     * InterfaceActor
     * @param systemClass
     * @param langCode
     * @returns {Promise<InterfaceSelect[]>}
     */
    ['Interface-getSystemMenu'](
      // 系统分类
      systemClass: string,
      // 语言标识
      langCode: string
    ): Promise<InterfaceSelect[]>;

    /**
     * 获取租户系统菜单表头
     * InterfaceActor
     * @param tid
     * @param searchText
     * @param tCode
     * @param systemClassify
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['Interface-grid-count'](
      // 表格标识
      tid: string,
      // 搜索内容
      searchText: string,
      // 租户标识
      tCode: string,
      // 系统分类
      systemClassify: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取租户系统菜单的表格列表数据
     * InterfaceActor
     * @param tid
     * @param tCode
     * @param systemClassify
     * @param searchText
     * @param orders
     * @returns {Promise<ApiCore.GridData>}
     */
    ['Interface-grid-list'](
      // 表格标识
      tid: string,
      // 租户标识
      tCode: string,
      // 系统分类
      systemClassify: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[]
    ): Promise<ApiCore.GridData>;

    /**
     * 从系统设置导入
     * InterfaceActor
     * @param id
     * @param tCode
     * @param systemAddress
     * @returns {Promise<Interface>}
     */
    ['Interface-importCreate'](
      // 系统菜单标识
      id: string,
      // 租户唯一标识
      tCode: string,
      // 访问地址
      systemAddress: string
    ): Promise<Interface>;

    /**
     * 修改租户系统菜单数据
     * InterfaceActor
     * @param data
     * @returns {Promise<Interface>}
     */
    ['Interface-update'](
      // 系统菜单对象
      data: Interface
    ): Promise<Interface>;

    /**
     * 获取SystemInformation数据
     * SystemInformationActor
     * @returns {Promise<SystemInformation>}
     */
    ['SystemInformation-get'](): Promise<SystemInformation>;

    /**
     * 修改系统概括数据
     * SystemInformationActor
     * @param systemInformation
     * @returns {Promise<SystemInformation>}
     */
    ['SystemInformation-update'](
      // 系统概括对象唯一标识
      systemInformation: SystemInformation
    ): Promise<SystemInformation>;

    /**
     * 动态下拉框
     * SystemMenuConfigActor
     * @param systemClass
     * @param tenantLanguage
     * @returns {Promise<SystemMenuConfigBoBox[]>}
     */
    ['SystemMenuConfig-ComboBox'](
      // 大分类
      systemClass: string,
      // 语言
      tenantLanguage: string
    ): Promise<SystemMenuConfigBoBox[]>;

    /**
     * 增加项目通讯录数据
     * AddressBookActor
     * @param data
     * @returns {Promise<AddressBook>}
     */
    ['address-book-create'](
      // 项目通讯录数据
      data: AddressBook
    ): Promise<AddressBook>;

    /**
     * 删除项目通讯录数据
     * AddressBookActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['address-book-delete'](
      // 项目通讯录序号数组
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条项目通讯录数据
     * AddressBookActor
     * @param id
     * @returns {Promise<AddressBookDetail>}
     */
    ['address-book-get'](
      // 项目序号
      id: string
    ): Promise<AddressBookDetail>;

    /**
     * 获取项目通讯录的表格总数信息
     * AddressBookActor
     * @param tid
     * @param pid
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['address-book-grid-count'](
      // 表格标识
      tid: string,
      // 项目id
      pid: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取项目通讯录的表格列表数据-分页
     * AddressBookActor
     * @param tid
     * @param orders
     * @param id
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['address-book-grid-list-page'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 项目id
      id: string,
      // 页码
      page: number,
      // 页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 更新项目通讯录数据
     * AddressBookActor
     * @param data
     * @returns {Promise<AddressBook>}
     */
    ['address-book-update'](
      // 项目通讯录数据
      data: AddressBook
    ): Promise<AddressBook>;

    /**
     * 获取单位类别下拉列表
     * AddressBookActor
     * @returns {Promise<UnitTypeRes[]>}
     */
    ['address-unit-type-list'](): Promise<UnitTypeRes[]>;

    /**
     * 增加机构辖区数据
     * AreaActor
     * @param data
     * @param uids
     * @param dreqs
     * @param hreqs
     * @returns {Promise<ApiCore.Area>}
     */
    ['area-create'](
      //
      data: ApiCore.Area,
      //
      uids: string[],
      //
      dreqs: ApiCore.DistrictReq[],
      //
      hreqs: ApiCore.HardwareReq[]
    ): Promise<ApiCore.Area>;

    /**
     * 删除机构辖区数据
     * AreaActor
     * @param ids
     * @param oid
     * @returns {Promise<number>}
     */
    ['area-delete'](
      //
      ids: string[],
      //
      oid: string
    ): Promise<number>;

    /**
     * 获取辖区详情数据
     * AreaActor
     * @param oid
     * @param aid
     * @returns {Promise<ApiCore.OrgAreaDetailsRes>}
     */
    ['area-details-datas-get'](
      //
      oid: string,
      //
      aid: string
    ): Promise<ApiCore.OrgAreaDetailsRes>;

    /**
     * 获取单条机构辖区数据
     * AreaActor
     * @param id
     * @returns {Promise<ApiCore.Area>}
     */
    ['area-get'](
      //
      id: string
    ): Promise<ApiCore.Area>;

    /**
     * 获取机构辖区的表格总数信息
     * AreaActor
     * @param tid
     * @param oid
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['area-grid-count'](
      //
      tid: string,
      //
      oid: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取机构辖区的表格列表数据
     * AreaActor
     * @param tid
     * @param orders
     * @param oid
     * @returns {Promise<any[][]>}
     */
    ['area-grid-list'](
      //
      tid: string,
      //
      orders: ApiCore.KV[],
      //
      oid: string
    ): Promise<any[][]>;

    /**
     * 获取当前辖区信息数据
     * AreaActor
     * @param id
     * @param oid
     * @returns {Promise<ApiCore.AreaData>}
     */
    ['area-info-data-get'](
      //
      id: string,
      //
      oid: string
    ): Promise<ApiCore.AreaData>;

    /**
     * 获取机构下所有辖区数据
     * AreaActor
     * @param oid
     * @returns {Promise<ApiCore.OrgAreaDataRes[]>}
     */
    ['area-orgarea-datas-get'](
      //
      oid: string
    ): Promise<ApiCore.OrgAreaDataRes[]>;

    /**
     * 获取当前机构辖区监控地区树数据
     * AreaActor
     * @returns {Promise<ApiCore.OrgAreaTree[]>}
     */
    ['area-tree-datas-get'](): Promise<ApiCore.OrgAreaTree[]>;

    /**
     * 获取当前用户所在机构辖区监控地区树数据
     * AreaActor
     * @param type
     * @returns {Promise<ApiCore.OrgAreaTypeTree[]>}
     */
    ['area-tree-datasByAccount-get'](
      //
      type: number
    ): Promise<ApiCore.OrgAreaTypeTree[]>;

    /**
     * 更新机构辖区数据
     * AreaActor
     * @param data
     * @param uids
     * @param dreqs
     * @param hreqs
     * @returns {Promise<ApiCore.Area>}
     */
    ['area-update'](
      //
      data: ApiCore.Area,
      //
      uids: string[],
      //
      dreqs: ApiCore.DistrictReq[],
      //
      hreqs: ApiCore.HardwareReq[]
    ): Promise<ApiCore.Area>;

    /**
     * 检查授权文件
     * AuthorizationActor
     * @param payload
     * @returns {Promise<AuthorizationInfo>}
     */
    ['authorization-check'](
      //
      payload: CheckAuthorizationPayload
    ): Promise<AuthorizationInfo>;

    /**
     * 执行授权
     * AuthorizationActor
     * @param payload
     * @returns {Promise<string>}
     */
    ['authorization-execute'](
      //
      payload: AuthorizationPayload
    ): Promise<string>;

    /**
     * 获取当前用户有效认证信息
     * AuthorizationActor
     * @returns {Promise<AuthorizationInfo>}
     */
    ['authorization-get-valid'](): Promise<AuthorizationInfo>;

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
     * 增加功能授权权限数据
     * AuthorizePermissionActor
     * @param datas
     * @param faId
     * @param scode
     * @returns {Promise<AuthorizePermission[]>}
     */
    ['authorize-permission-create'](
      // 权限数据数组
      datas: AuthorizePermission[],
      // 功能授权序号
      faId: string,
      // 系统应用标识
      scode: string
    ): Promise<AuthorizePermission[]>;

    /**
     * 获取当前功能授权的权限数据
     * AuthorizePermissionActor
     * @param faId
     * @returns {Promise<AuthorizePermission[]>}
     */
    ['authorize-permission-list'](
      // 功能授权序号
      faId: string
    ): Promise<AuthorizePermission[]>;

    /**
     * 获取功能授权权限模板数据
     * AuthorizePermissionActor
     * @param scode
     * @param version
     * @returns {Promise<SysAppPageRes[]>}
     */
    ['authorize-permission-template-list'](
      // 系统应用标识
      scode: string,
      // 模板标识
      version: string
    ): Promise<SysAppPageRes[]>;

    /**
     * 获取当前功能授权的权限数据
     * AuthorizePermissionActor
     * @param faId
     * @param scode
     * @returns {Promise<SysAppRes>}
     */
    ['authorize-permission-tree-faId-get'](
      // 功能授权序号
      faId: string,
      // 系统应该标识
      scode: string
    ): Promise<SysAppRes>;

    /**
     * 获取系统应用、模块、页面、授权细目功能授权权限数据
     * AuthorizePermissionActor
     * @param scode
     * @param tcode
     * @returns {Promise<SysAppRes>}
     */
    ['authorize-permission-tree-get'](
      // 系统应该标识
      scode: string,
      // 租户code
      tcode: string
    ): Promise<SysAppRes>;

    /**
     * 修改功能授权权限数据
     * AuthorizePermissionActor
     * @param datas
     * @param faId
     * @param scode
     * @returns {Promise<AuthorizePermission[]>}
     */
    ['authorize-permission-update'](
      // 权限数据数组
      datas: AuthorizePermission[],
      // 功能授权序号
      faId: string,
      // 系统应用标识
      scode: string
    ): Promise<AuthorizePermission[]>;

    /**
     * 获取租户系统组件表头
     * BackupSysComponentActor
     * @param tid
     * @param searchText
     * @param cCode
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['backupSysComponent-grid-count'](
      // 表格标识
      tid: string,
      // 搜索内容
      searchText: string,
      // 所属系统组件分类唯一标识
      cCode: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 增加基础菜单项
     * BasicSystemMenuActor
     * @param positionType
     * @param selectId
     * @param data
     * @returns {Promise<boolean>}
     */
    ['basic-system-menu-create'](
      // 基础菜单位置类型
      positionType: string,
      // 当前选中节点
      selectId: string,
      // 基础菜单数据
      data: BasicSystemMenu
    ): Promise<boolean>;

    /**
     * 删除多个基础菜单数据
     * BasicSystemMenuActor
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['basic-system-menu-delete'](
      // 基础菜单序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条基础菜单数据
     * BasicSystemMenuActor
     * @param id
     * @returns {Promise<BasicSystemMenu>}
     */
    ['basic-system-menu-get'](
      // 基础菜单序号
      id: string
    ): Promise<BasicSystemMenu>;

    /**
     * 获取基础菜单的表格列表数据
     * BasicSystemMenuActor
     * @param smcId
     * @returns {Promise<BasicSystemMenuGrid[]>}
     */
    ['basic-system-menu-grid-list'](
      // 系统基础菜单配置序号
      smcId: string
    ): Promise<BasicSystemMenuGrid[]>;

    /**
     * 更新系统基础菜单层级顺序
     * BasicSystemMenuActor
     * @param type
     * @param reqs
     * @param targetId
     * @returns {Promise<boolean>}
     */
    ['basic-system-menu-level-order-update'](
      // 基础菜单层级顺序枚举类型
      type: string,
      // 基础菜单层级顺序数据数组
      reqs: BasicMenuLevelOrderReq[],
      // 降级到目标基础菜单序号
      targetId: string
    ): Promise<boolean>;

    /**
     * 获取登录后转到指定页面下拉数据
     * BasicSystemMenuActor
     * @param smcId
     * @returns {Promise<BasicMenuLoginSpecifySelect[]>}
     */
    ['basic-system-menu-login-specify-select'](
      // 系统基础菜单配置序号
      smcId: string
    ): Promise<BasicMenuLoginSpecifySelect[]>;

    /**
     * 修改基础菜单项
     * BasicSystemMenuActor
     * @param data
     * @returns {Promise<BasicSystemMenu>}
     */
    ['basic-system-menu-update'](
      // 基础菜单数据
      data: BasicSystemMenu
    ): Promise<BasicSystemMenu>;

    /**
     * 增加基础库分类目录项
     * BasicsClassCatalogActor
     * @param langCode
     * @param data
     * @returns {Promise<BasicsClassCatalog>}
     */
    ['basics-class-catalog-create'](
      // 语言标识
      langCode: string,
      // 基础库分类目录数据
      data: BasicsClassCatalog
    ): Promise<BasicsClassCatalog>;

    /**
     * 删除多个基础库分类目录数据
     * BasicsClassCatalogActor
     * @param langCode
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['basics-class-catalog-delete'](
      // 语言标识
      langCode: string,
      // 基础库分类目录序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条基础库分类目录数据
     * BasicsClassCatalogActor
     * @param id
     * @returns {Promise<BasicsClassCatalog>}
     */
    ['basics-class-catalog-get'](
      // 基础库分类目录序号
      id: string
    ): Promise<BasicsClassCatalog>;

    /**
     * 获取基础库分类目录的列表数据
     * BasicsClassCatalogActor
     * @param langCode
     * @param bdcode
     * @param searchText
     * @returns {Promise<BasicsClassCatalogTree[]>}
     */
    ['basics-class-catalog-grid-list'](
      // 语言标识
      langCode: string,
      // 基础库标识
      bdcode: string,
      // 搜索内容
      searchText: string
    ): Promise<BasicsClassCatalogTree[]>;

    /**
     * 获取所属分类下拉数据
     * BasicsClassCatalogActor
     * @param langCode
     * @param bdcode
     * @param code
     * @returns {Promise<BasicsClassCatalogSelect[]>}
     */
    ['basics-class-catalog-select'](
      // 语言标识
      langCode: string,
      // 基础库标识
      bdcode: string,
      // 当前选中分类标识
      code: string
    ): Promise<BasicsClassCatalogSelect[]>;

    /**
     * 修改基础库分类目录项
     * BasicsClassCatalogActor
     * @param langCode
     * @param data
     * @returns {Promise<BasicsClassCatalog>}
     */
    ['basics-class-catalog-update'](
      // 语言标识
      langCode: string,
      // 基础库分类目录数据
      data: BasicsClassCatalog
    ): Promise<BasicsClassCatalog>;

    /**
     * 获取基础数据字段所属分类下拉数据
     * BasicsDataFieldActor
     * @param langCode
     * @param bdcode
     * @returns {Promise<BasicsSelectData[]>}
     */
    ['basics-data-field-class-select'](
      // 语言标识
      langCode: string,
      // 库标识
      bdcode: string
    ): Promise<BasicsSelectData[]>;

    /**
     * 增加基础数据字段数据
     * BasicsDataFieldActor
     * @param map
     * @returns {Promise<BasicsDataFieldDetail>}
     */
    ['basics-data-field-create'](
      // 基础数据字段数据
      map: any
    ): Promise<BasicsDataFieldDetail>;

    /**
     * 根据库标识，分类标识获取基础数据字段数据
     * BasicsDataFieldActor
     * @param langCode
     * @param bdcode
     * @param ccode
     * @returns {Promise<BasicsDataField[]>}
     */
    ['basics-data-field-datas'](
      // 语言标识
      langCode: string,
      // 所属库标识
      bdcode: string,
      // 分类标识
      ccode: string
    ): Promise<BasicsDataField[]>;

    /**
     * 删除基础数据字段数据
     * BasicsDataFieldActor
     * @param list
     * @returns {Promise<DeleteDataRes[]>}
     */
    ['basics-data-field-delete'](
      // 自定义参数数据集合
      list: any
    ): Promise<DeleteDataRes[]>;

    /**
     * 启用/禁用基础数据字段
     * BasicsDataFieldActor
     * @param enabled
     * @param ccode
     * @param reqs
     * @returns {Promise<BasicsDataFieldDetail[]>}
     */
    ['basics-data-field-enabled-update'](
      // 启用/禁用类型标识
      enabled: boolean,
      // 当前选中分类标识
      ccode: string,
      // 基础数据字段请求数据数组
      reqs: BasicsDataFieldEnableReq[]
    ): Promise<BasicsDataFieldDetail[]>;

    /**
     * 获取单条基础数据字段数据
     * BasicsDataFieldActor
     * @param ccode
     * @param id
     * @returns {Promise<BasicsDataFieldDetail>}
     */
    ['basics-data-field-get'](
      // 当前选中分类标识
      ccode: string,
      // 基础数据字段序号
      id: string
    ): Promise<BasicsDataFieldDetail>;

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
     * @returns {Promise<DataFieldSelectData[]>}
     */
    ['basics-data-field-get-relation-fields'](
      // 主表库标识
      mainDCode: string,
      // 主表分类标识
      mainCCode: string,
      // 主表字段标识
      mainFCode: string,
      // 子表库标识
      subDCode: string,
      // 子表分类标识
      subCCode: string,
      // 当前选择语言
      langCode: string,
      // 是否增加字段
      isCreate: boolean
    ): Promise<DataFieldSelectData[]>;

    /**
     * 获取基础数据字段表格总数信息
     * BasicsDataFieldActor
     * @param tid
     * @param ccode
     * @param ucode
     * @param dcode
     * @param bigType
     * @param customMap
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['basics-data-field-grid-count'](
      // 表格标识
      tid: string,
      // 分类目录标识
      ccode: string,
      // 所属分类标识
      ucode: string,
      // 字段来源(库标识)
      dcode: string,
      // 自定义属性场景类型
      bigType: string,
      // 自定义参数
      customMap: any,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取基础数据字段表格列表数据
     * BasicsDataFieldActor
     * @param tid
     * @param ccode
     * @param ucode
     * @param dcode
     * @param searchText
     * @param orders
     * @param bigType
     * @param customMap
     * @returns {Promise<ApiCore.GridData>}
     */
    ['basics-data-field-grid-list'](
      // 表格标识
      tid: string,
      // 分类目录标识
      ccode: string,
      // 所属分类标识
      ucode: string,
      // 字段来源(库标识)
      dcode: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[],
      // 自定义属性场景类型
      bigType: string,
      // 自定义参数
      customMap: any
    ): Promise<ApiCore.GridData>;

    /**
     * 获取基础数据字段表格分页列表数据
     * BasicsDataFieldActor
     * @param tid
     * @param ccode
     * @param ucode
     * @param dcode
     * @param searchText
     * @param orders
     * @param bigType
     * @param customMap
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['basics-data-field-grid-list-page'](
      // 表格标识
      tid: string,
      // 分类目录标识
      ccode: string,
      // 所属分类标识
      ucode: string,
      // 字段来源(库标识)
      dcode: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[],
      // 自定义属性场景类型
      bigType: string,
      // 自定义参数
      customMap: any,
      // 当前页
      page: number,
      // 当前页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 获取显示字段数据
     * BasicsDataFieldActor
     * @param customMap
     * @returns {Promise<DataFieldSelectData[]>}
     */
    ['basics-data-field-select-datas'](
      // 自定义参数
      customMap: any
    ): Promise<DataFieldSelectData[]>;

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
      // 操作类型
      type: string,
      // 基础库标识
      bdcode: string,
      // 分类标识
      ccode: string,
      // 数据字段排序序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取基础数据字段的字段来源下拉数据
     * BasicsDataFieldActor
     * @param langCode
     * @param bdcode
     * @param ccode
     * @returns {Promise<BasicsSelectData[]>}
     */
    ['basics-data-field-source-select'](
      // 语言标识
      langCode: string,
      // 库标识
      bdcode: string,
      // 当前选中分类标识
      ccode: string
    ): Promise<BasicsSelectData[]>;

    /**
     * 更新基础数据字段数据
     * BasicsDataFieldActor
     * @param map
     * @returns {Promise<BasicsDataFieldDetail>}
     */
    ['basics-data-field-update'](
      // 基础数据字段数据
      map: any
    ): Promise<BasicsDataFieldDetail>;

    /**
     * 被修改父节点字段数据
     * BasicsDataFieldActor
     * @param ccode
     * @param req
     * @returns {Promise<BasicsDataFieldDetail>}
     */
    ['basics-data-field-updateData-update'](
      // 当前选中分类标识
      ccode: string,
      // 被修改父节点字段数据
      req: BasicsDataFieldUpdateDataReq
    ): Promise<BasicsDataFieldDetail>;

    /**
     * 获取流转控制详情
     * FlowActor
     * @param nodeId
     * @returns {Promise<CrculationView[]>}
     */
    ['circulation-get'](
      // 节点id
      nodeId: string
    ): Promise<CrculationView[]>;

    /**
     * 流传控制保存(同时创建线)
     * FlowActor
     * @param flowId
     * @param fromId
     * @param crculationViews
     * @param isCondition
     * @param fromFieldType
     * @returns {Promise<RelationLine[]>}
     */
    ['circulation-save'](
      // 工作流id
      flowId: string,
      // 起始节点id
      fromId: string,
      // 流转控制
      crculationViews: CrculationView[],
      // 是否条件跳转
      isCondition: boolean,
      // 判断数据类型(前端用)
      fromFieldType: string
    ): Promise<RelationLine[]>;

    /**
     * 增加库分类目录项
     * ClassCatalogActor
     * @param data
     * @returns {Promise<ClassCatalog>}
     */
    ['class-catalog-create'](
      // 库分类目录数据
      data: ClassCatalog
    ): Promise<ClassCatalog>;

    /**
     * 删除多个库分类目录数据
     * ClassCatalogActor
     * @param langCode
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['class-catalog-delete'](
      // 库标识
      langCode: string,
      // 库分类目录序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条库分类目录数据
     * ClassCatalogActor
     * @param id
     * @returns {Promise<ClassCatalog>}
     */
    ['class-catalog-get'](
      // 库分类目录序号
      id: string
    ): Promise<ClassCatalog>;

    /**
     * 获取库分类目录的列表数据
     * ClassCatalogActor
     * @param tcode
     * @param dcode
     * @param searchText
     * @returns {Promise<ClassCatalogTree[]>}
     */
    ['class-catalog-grid-list'](
      // 租户标识
      tcode: string,
      // 库标识
      dcode: string,
      // 搜索内容
      searchText: string
    ): Promise<ClassCatalogTree[]>;

    /**
     * 获取所属分类下拉数据
     * ClassCatalogActor
     * @param tcode
     * @param tdcode
     * @param code
     * @returns {Promise<ClassCatalogSelect[]>}
     */
    ['class-catalog-select'](
      // 租户标识
      tcode: string,
      // 库标识
      tdcode: string,
      // 当前选中分类标识
      code: string
    ): Promise<ClassCatalogSelect[]>;

    /**
     * 修改库分类目录项
     * ClassCatalogActor
     * @param data
     * @returns {Promise<ClassCatalog>}
     */
    ['class-catalog-update'](
      // 库分类目录数据
      data: ClassCatalog
    ): Promise<ClassCatalog>;

    /**
     * 获取常用数据项数据
     * CommonlyUsedActor
     * @param ocode
     * @param ucode
     * @returns {Promise<CommonlyUsedData[]>}
     */
    ['commonly-used-datas-get'](
      // 机构标识
      ocode: string,
      // 用户标识
      ucode: string
    ): Promise<CommonlyUsedData[]>;

    /**
     * 设置数据是否常用
     * CommonlyUsedActor
     * @param data
     * @returns {Promise<boolean>}
     */
    ['commonly-used-set'](
      // 工单类型数组数据
      data: CommonlyUsed
    ): Promise<boolean>;

    /**
     * 租户下拉框
     * ComponentActor
     * @returns {Promise<TenantComboBox[]>}
     */
    ['component-tenant-Box'](): Promise<TenantComboBox[]>;

    /**
     * 获取系统组件分类目录树列表数据
     * ComponentActor
     * @param tCode
     * @returns {Promise<Component[]>}
     */
    ['component-tree-list'](
      // 租户唯一标识
      tCode: string
    ): Promise<Component[]>;

    /**
     * 增加计算公式数据
     * ComputationalActor
     * @param data
     * @returns {Promise<Computational>}
     */
    ['computational-create'](
      // 组件功能数据
      data: Computational
    ): Promise<Computational>;

    /**
     * 删除计算公式数据
     * ComputationalActor
     * @param id
     * @returns {Promise<number>}
     */
    ['computational-delete'](
      // 计算公式唯一标识
      id: string
    ): Promise<number>;

    /**
     * 获取计算方式下拉数据
     * ComputationalActor
     * @returns {Promise<FormulaModeTypeScale[]>}
     */
    ['computational-formulaModeTypeScale-select'](): Promise<
      FormulaModeTypeScale[]
    >;

    /**
     * 获取计算公式数据根據工作流id
     * ComputationalActor
     * @param fid
     * @param searchText
     * @returns {Promise<Computational[]>}
     */
    ['computational-get-by-fid'](
      // 工作流id
      fid: string,
      // 搜索
      searchText: string
    ): Promise<Computational[]>;

    /**
     * 获得计算公式数据
     * ComputationalActor
     * @param id
     * @returns {Promise<Computational>}
     */
    ['computational-get-by-id'](
      // 计算公式模板数据
      id: string
    ): Promise<Computational>;

    /**
     * 获取计算方式下拉数据
     * ComputationalActor
     * @returns {Promise<ResultTypeScale[]>}
     */
    ['computational-resultTypeScale-select'](): Promise<ResultTypeScale[]>;

    /**
     * 获取组件目录树数据
     * ComputationalActor
     * @returns {Promise<TreeView[]>}
     */
    ['computational-tree-list'](): Promise<TreeView[]>;

    /**
     * 修改计算公式数据
     * ComputationalActor
     * @param data
     * @returns {Promise<Computational>}
     */
    ['computational-update'](
      // 计算公式模板数据
      data: Computational
    ): Promise<Computational>;

    /**
     * 启用条件详情
     * FlowActor
     * @param nodeId
     * @returns {Promise<ConditionalControl[]>}
     */
    ['conditions-get'](
      // 节点id
      nodeId: string
    ): Promise<ConditionalControl[]>;

    /**
     * 启用条件保存
     * FlowActor
     * @param type
     * @param condition
     * @returns {Promise<boolean>}
     */
    ['conditions-save'](
      // 启用类型(1无条件,2有条件)
      type: string,
      // 启用条件
      condition: ConditionalControl[]
    ): Promise<boolean>;

    /**
     * 增加自定义数据字段数据
     * CustomDataFieldActor
     * @param map
     * @returns {Promise<CustomDataField>}
     */
    ['custom-data-field-create'](
      // 自定义数据字段数据
      map: any
    ): Promise<CustomDataField>;

    /**
     * 删除自定义数据字段数据
     * CustomDataFieldActor
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['custom-data-field-delete'](
      // 自定义数据字段序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 更新自定义数据字段顺序
     * CustomDataFieldActor
     * @param reqs
     * @returns {Promise<boolean>}
     */
    ['custom-data-field-sort-update'](
      // 自定义数据字段排序数组数据
      reqs: CustomDataFieldSortReq[]
    ): Promise<boolean>;

    /**
     * 更新自定义数据字段数据
     * CustomDataFieldActor
     * @param map
     * @returns {Promise<CustomDataField>}
     */
    ['custom-data-field-update'](
      // 自定义数据字段数据
      map: any
    ): Promise<CustomDataField>;

    /**
     * 增加自定义属性数据
     * CustomPropertyActor
     * @param map
     * @returns {Promise<boolean>}
     */
    ['custom-property-create'](
      // 自定义属性数据
      map: any
    ): Promise<boolean>;

    /**
     * 删除自定义数据
     * CustomPropertyActor
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['custom-property-delete'](
      // 自定义属性序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 更新自定义属性顺序
     * CustomPropertyActor
     * @param reqs
     * @returns {Promise<boolean>}
     */
    ['custom-property-sort-update'](
      // 自定义属性排序数组数据
      reqs: CustomPropertySortReq[]
    ): Promise<boolean>;

    /**
     * 更新自定义属性数据
     * CustomPropertyActor
     * @param map
     * @returns {Promise<boolean>}
     */
    ['custom-property-update'](
      // 自定义属性数据
      map: any
    ): Promise<boolean>;

    /**
     * 获取数据字段所属分类下拉数据
     * DataFieldActor
     * @param tcode
     * @param tdcode
     * @returns {Promise<SelectData[]>}
     */
    ['data-field-class-select'](
      // 租户标识
      tcode: string,
      // 所属租户的库标识
      tdcode: string
    ): Promise<SelectData[]>;

    /**
     * 增加数据字段数据
     * DataFieldActor
     * @param map
     * @returns {Promise<DataFieldDetail>}
     */
    ['data-field-create'](
      // 数据字段数据
      map: any
    ): Promise<DataFieldDetail>;

    /**
     * 根据租户标识，库标识，分类标识获取数据字段数据
     * DataFieldActor
     * @param tcode
     * @param tdcode
     * @param ccode
     * @returns {Promise<DataField[]>}
     */
    ['data-field-datas'](
      // 租户标识
      tcode: string,
      // 所属租户的库标识
      tdcode: string,
      // 分类标识
      ccode: string
    ): Promise<DataField[]>;

    /**
     * 删除数据字段数据
     * DataFieldActor
     * @param list
     * @returns {Promise<DeleteDataRes[]>}
     */
    ['data-field-delete'](
      // 自定义参数数据集合
      list: any
    ): Promise<DeleteDataRes[]>;

    /**
     * 启用/禁用数据字段
     * DataFieldActor
     * @param enabled
     * @param ccode
     * @param reqs
     * @returns {Promise<DataFieldDetail[]>}
     */
    ['data-field-enabled-update'](
      // 启用/禁用类型标识
      enabled: boolean,
      // 当前选中分类标识
      ccode: string,
      // 数据字段请求数据数组
      reqs: DataFieldEnableReq[]
    ): Promise<DataFieldDetail[]>;

    /**
     * 获取单条数据字段数据
     * DataFieldActor
     * @param ccode
     * @param id
     * @returns {Promise<DataFieldDetail>}
     */
    ['data-field-get'](
      // 当前选中分类标识
      ccode: string,
      // 数据字段序号
      id: string
    ): Promise<DataFieldDetail>;

    /**
     * 根据code获取单条数据字段数据
     * DataFieldActor
     * @param fId
     * @param tcode
     * @param ccode
     * @param bigType
     * @returns {Promise<DataField[]>}
     */
    ['data-field-get-by-code'](
      // 工作流id
      fId: string,
      // 租户code
      tcode: string,
      // 当前选中分类标识
      ccode: string,
      // 字段类型
      bigType: string
    ): Promise<DataField[]>;

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
     * @returns {Promise<DataFieldSelectData[]>}
     */
    ['data-field-get-relation-fields'](
      // 主表库标识
      mainDCode: string,
      // 主表分类标识
      mainCCode: string,
      // 主表字段标识
      mainFCode: string,
      // 子表库标识
      subDCode: string,
      // 子表分类标识
      subCCode: string,
      // 租户标识
      tcode: string,
      // 是否增加字段
      isCreate: boolean
    ): Promise<DataFieldSelectData[]>;

    /**
     * 获取数据字段表格总数信息
     * DataFieldActor
     * @param tid
     * @param ccode
     * @param ucode
     * @param dcode
     * @param bigType
     * @param customMap
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['data-field-grid-count'](
      // 表格标识
      tid: string,
      // 分类目录标识
      ccode: string,
      // 所属分类标识
      ucode: string,
      // 字段来源(库标识)
      dcode: string,
      // 自定义属性场景类型
      bigType: string,
      // 自定义参数
      customMap: any,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取数据字段表格列表数据
     * DataFieldActor
     * @param tid
     * @param ccode
     * @param ucode
     * @param dcode
     * @param searchText
     * @param orders
     * @param bigType
     * @param customMap
     * @returns {Promise<ApiCore.GridData>}
     */
    ['data-field-grid-list'](
      // 表格标识
      tid: string,
      // 分类目录标识
      ccode: string,
      // 所属分类标识
      ucode: string,
      // 字段来源(库标识)
      dcode: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[],
      // 自定义属性场景类型
      bigType: string,
      // 自定义参数
      customMap: any
    ): Promise<ApiCore.GridData>;

    /**
     * 获取数据字段表格分页列表数据
     * DataFieldActor
     * @param tid
     * @param ccode
     * @param ucode
     * @param dcode
     * @param searchText
     * @param orders
     * @param bigType
     * @param customMap
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['data-field-grid-list-page'](
      // 表格标识
      tid: string,
      // 分类目录标识
      ccode: string,
      // 所属分类标识
      ucode: string,
      // 字段来源(库标识)
      dcode: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[],
      // 自定义属性场景类型
      bigType: string,
      // 自定义参数
      customMap: any,
      // 当前页
      page: number,
      // 当前页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 获取显示字段数据
     * DataFieldActor
     * @param customMap
     * @returns {Promise<DataFieldSelectData[]>}
     */
    ['data-field-select-datas'](
      // 自定义参数
      customMap: any
    ): Promise<DataFieldSelectData[]>;

    /**
     * 更新数据字段上移下移置顶置底层级顺序
     * DataFieldActor
     * @param type
     * @param tdcode
     * @param ccode
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['data-field-sort-update'](
      // 操作类型
      type: string,
      // 库标识
      tdcode: string,
      // 分类标识
      ccode: string,
      // 数据字段排序序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取数据字段的字段来源下拉数据
     * DataFieldActor
     * @param tcode
     * @param tdcode
     * @param ccode
     * @returns {Promise<SelectData[]>}
     */
    ['data-field-source-select'](
      // 租户标识
      tcode: string,
      // 所属租户的库标识
      tdcode: string,
      // 当前选中分类标识
      ccode: string
    ): Promise<SelectData[]>;

    /**
     * 更新数据字段数据
     * DataFieldActor
     * @param map
     * @returns {Promise<DataFieldDetail>}
     */
    ['data-field-update'](
      // 数据字段数据
      map: any
    ): Promise<DataFieldDetail>;

    /**
     * 被修改父节点字段数据
     * DataFieldActor
     * @param ccode
     * @param req
     * @returns {Promise<DataFieldDetail>}
     */
    ['data-field-updateData-update'](
      // 当前选中分类标识
      ccode: string,
      // 被修改父节点字段数据
      req: DataFieldUpdateDataReq
    ): Promise<DataFieldDetail>;

    /**
     * 表单字段比较内容下拉
     * FlowActor
     * @param type
     * @returns {Promise<SelectView[]>}
     */
    ['dataField-from-select'](
      // 数据类型
      type: string
    ): Promise<SelectView[]>;

    /**
     * 增加基础数据库分类、目录数据
     * DatabaseClassCatalogActor
     * @param map
     * @returns {Promise<DatabaseClassCatalog>}
     */
    ['database-class-catalog-create'](
      // 基础数据库分类、目录数据
      map: any
    ): Promise<DatabaseClassCatalog>;

    /**
     * 删除基础数据库分类、目录数据
     * DatabaseClassCatalogActor
     * @param bdcode
     * @param type
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['database-class-catalog-delete'](
      // 数据库标识
      bdcode: string,
      // 类型
      type: string,
      // 基础数据库分类、目录序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条基础数据库分类、目录数据
     * DatabaseClassCatalogActor
     * @param id
     * @returns {Promise<DatabaseClassCatalog>}
     */
    ['database-class-catalog-get'](
      // 基础数据库分类、目录数据
      id: string
    ): Promise<DatabaseClassCatalog>;

    /**
     * 获取基础数据库分类、目录表格总数信息
     * DatabaseClassCatalogActor
     * @param tid
     * @param bdcode
     * @param type
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['database-class-catalog-grid-count'](
      // 表格标识
      tid: string,
      // 数据库标识
      bdcode: string,
      // 类型
      type: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取基础数据库分类、目录表格列表数据
     * DatabaseClassCatalogActor
     * @param tid
     * @param bdcode
     * @param type
     * @param searchText
     * @param orders
     * @returns {Promise<ApiCore.GridData>}
     */
    ['database-class-catalog-grid-list'](
      // 表格标识
      tid: string,
      // 数据库标识
      bdcode: string,
      // 类型
      type: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[]
    ): Promise<ApiCore.GridData>;

    /**
     * 获取基础数据库分类、目录表格分页列表数据
     * DatabaseClassCatalogActor
     * @param tid
     * @param bdcode
     * @param type
     * @param searchText
     * @param orders
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['database-class-catalog-grid-list-page'](
      // 表格标识
      tid: string,
      // 数据库标识
      bdcode: string,
      // 类型
      type: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[],
      // 当前页
      page: number,
      // 当前页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 获取分类、目录类型下拉数据
     * DatabaseClassCatalogActor
     * @param bdcode
     * @param type
     * @returns {Promise<CatalogTypeSelect[]>}
     */
    ['database-class-catalog-select'](
      // 数据库标识
      bdcode: string,
      // 类型
      type: string
    ): Promise<CatalogTypeSelect[]>;

    /**
     * 更新基础数据库分类、目录数据
     * DatabaseClassCatalogActor
     * @param map
     * @returns {Promise<DatabaseClassCatalog>}
     */
    ['database-class-catalog-update'](
      // 基础数据库分类、目录数据
      map: any
    ): Promise<DatabaseClassCatalog>;

    /**
     * 增加数据库数据
     * DatabaseActor
     * @param data
     * @returns {Promise<Database>}
     */
    ['database-create'](
      // 数据库数据
      data: Database
    ): Promise<Database>;

    /**
     * 删除数据库数据
     * DatabaseActor
     * @param codes
     * @returns {Promise<boolean>}
     */
    ['database-delete'](
      // 数据库标识数组
      codes: string[]
    ): Promise<boolean>;

    /**
     * 获取单条数据库数据
     * DatabaseActor
     * @param id
     * @returns {Promise<Database>}
     */
    ['database-get'](
      // 数据库序号
      id: string
    ): Promise<Database>;

    /**
     * 获取字段来源下拉列表
     * DatabaseActor
     * @param langCode
     * @returns {Promise<FileSourceView[]>}
     */
    ['database-get-fieldSource'](
      // 当前语言
      langCode: string
    ): Promise<FileSourceView[]>;

    /**
     * 获取数据字段表格总数信息
     * DatabaseActor
     * @param tid
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['database-grid-count'](
      // 表格标识
      tid: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取数据字段表格列表数据
     * DatabaseActor
     * @param tid
     * @param searchText
     * @param orders
     * @returns {Promise<ApiCore.GridData>}
     */
    ['database-grid-list'](
      // 表格标识
      tid: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[]
    ): Promise<ApiCore.GridData>;

    /**
     * 获取数据字段表格分页列表数据
     * DatabaseActor
     * @param tid
     * @param searchText
     * @param orders
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['database-grid-list-page'](
      // 表格标识
      tid: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[],
      // 当前页
      page: number,
      // 当前页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 获取所有基础数据库
     * DatabaseActor
     * @returns {Promise<DatabaseView[]>}
     */
    ['database-list-name-and-code'](): Promise<DatabaseView[]>;

    /**
     * 根据语言标识获取基础数据库数据
     * DatabaseActor
     * @param langCode
     * @returns {Promise<DatabaseView[]>}
     */
    ['database-list-name-and-code-langcode'](
      // 当前语言
      langCode: string
    ): Promise<DatabaseView[]>;

    /**
     * 更新数据库数据
     * DatabaseActor
     * @param data
     * @returns {Promise<Database>}
     */
    ['database-update'](
      // 数据库数据
      data: Database
    ): Promise<Database>;

    /**
     * 清空决策树所有节点
     * DecisionTreeActor
     * @param oid
     * @param type
     * @returns {Promise<number>}
     */
    ['decision-clear'](
      // 决策id
      oid: string,
      // 决策类型1树2表
      type: number
    ): Promise<number>;

    /**
     * 获取条件比较符下拉框
     * DecisionTreeActor
     * @param type
     * @returns {Promise<ConditionSelect[]>}
     */
    ['decision-condition-select'](
      // 数据类型
      type: string
    ): Promise<ConditionSelect[]>;

    /**
     * 获取决策树数据
     * DecisionTreeActor
     * @param oid
     * @param type
     * @returns {Promise<DecisionTree>}
     */
    ['decision-get'](
      // 决策id
      oid: string,
      // 决策类型1树2表
      type: number
    ): Promise<DecisionTree>;

    /**
     * 创建决策
     * DecisionTreeActor
     * @param oid
     * @param type
     * @param date
     * @returns {Promise<DecisionTree>}
     */
    ['decision-save'](
      // 决策id
      oid: string,
      // 决策类型1树2表
      type: number,
      // 决策树json数据
      date: string
    ): Promise<DecisionTree>;

    /**
     * 更新决策树
     * DecisionTreeActor
     * @param oid
     * @param type
     * @param date
     * @returns {Promise<DecisionTree>}
     */
    ['decision-update'](
      // 决策树唯一标识
      oid: string,
      // 决策类型1树2表
      type: number,
      // 决策树对象
      date: string
    ): Promise<DecisionTree>;

    /**
     * 获取延时条件详情
     * FlowActor
     * @param nodeId
     * @param conditionId
     * @returns {Promise<ConditionalControl[]>}
     */
    ['delayed-condition-get'](
      // 节点id
      nodeId: string,
      // 条件唯一标识
      conditionId: string
    ): Promise<ConditionalControl[]>;

    /**
     * 删除延时条件
     * FlowActor
     * @param nodeId
     * @param conditionId
     * @returns {Promise<number>}
     */
    ['delayed-conditions-delete'](
      // 节点id
      nodeId: string,
      // 条件唯一标识
      conditionId: string[]
    ): Promise<number>;

    /**
     * 延时条件-表头
     * FlowActor
     * @param tid
     * @param flowId
     * @param nodeId
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['delayed-conditions-grid-count'](
      // 表格标识
      tid: string,
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 延时条件-表数据
     * FlowActor
     * @param tid
     * @param orders
     * @param flowId
     * @param nodeId
     * @returns {Promise<ApiCore.GridData>}
     */
    ['delayed-conditions-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string
    ): Promise<ApiCore.GridData>;

    /**
     * 保存延时条件
     * FlowActor
     * @param condition
     * @param conditionId
     * @returns {Promise<ConditionalControl[]>}
     */
    ['delayed-conditions-save'](
      // 延时条件
      condition: ConditionalControl[],
      // 条件唯一标识
      conditionId: string
    ): Promise<ConditionalControl[]>;

    /**
     * 获取延时配置详情
     * FlowActor
     * @param nodeId
     * @returns {Promise<DelayedConfig>}
     */
    ['delayed-get'](
      // 节点id
      nodeId: string
    ): Promise<DelayedConfig>;

    /**
     * 保存延时配置
     * FlowActor
     * @param nodeId
     * @param number
     * @param unit
     * @param delayedType
     * @param delayedSelectType
     * @returns {Promise<DelayedConfig>}
     */
    ['delayed-save'](
      // 节点id
      nodeId: string,
      // 延时数字
      number: number,
      // 延时单位
      unit: string,
      // 延时配置类型
      delayedType: string,
      // 条件选择方式
      delayedSelectType: string
    ): Promise<DelayedConfig>;

    /**
     * 获取条件选择方式下拉
     * FlowActor
     * @returns {Promise<SelectView[]>}
     */
    ['delayed-select'](): Promise<SelectView[]>;

    /**
     * 查看当前线上版本git流水号（若此流水号与GoCD上一致，则说明同步部署完成）
     * DevelopActor
     * @returns {Promise<string>}
     */
    ['develop-get-current-deploy-version'](): Promise<string>;

    /**
     * 获取子设备模组数据
     * DeviceCategoryActor
     * @returns {Promise<DeviceCategoryDataRes[]>}
     */
    ['device-category-child-datas'](): Promise<DeviceCategoryDataRes[]>;

    /**
     * 增加设备种类数据
     * DeviceCategoryActor
     * @param data
     * @returns {Promise<DeviceCategory>}
     */
    ['device-category-create'](
      // 设备种类数据
      data: DeviceCategory
    ): Promise<DeviceCategory>;

    /**
     * 删除设备种类数据
     * DeviceCategoryActor
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['device-category-delete'](
      // 设备种类序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条设备种类数据
     * DeviceCategoryActor
     * @param id
     * @returns {Promise<DeviceCategory>}
     */
    ['device-category-get'](
      // 设备种类序号
      id: string
    ): Promise<DeviceCategory>;

    /**
     * 获取设备种类的表格总数信息
     * DeviceCategoryActor
     * @param tid
     * @param mtype
     * @param pid
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['device-category-grid-count'](
      // 表格标识
      tid: string,
      // 模组类型
      mtype: number,
      // 设备种类父节点序号
      pid: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取设备种类的表格列表数据
     * DeviceCategoryActor
     * @param tid
     * @param orders
     * @param mtype
     * @param pid
     * @param searchText
     * @returns {Promise<ApiCore.GridData>}
     */
    ['device-category-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 模组类型
      mtype: number,
      // 设备种类父节点序号
      pid: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridData>;

    /**
     * 根据模组类型获取设备种类监控设备模组/普通资产模组数据
     * DeviceCategoryActor
     * @param mtype
     * @returns {Promise<DeviceCategoryListData[]>}
     */
    ['device-category-list-mtype'](
      // 模组类型
      mtype: number
    ): Promise<DeviceCategoryListData[]>;

    /**
     * 获取设备模组类型下拉数据
     * DeviceCategoryActor
     * @returns {Promise<ModuleTypeSelect[]>}
     */
    ['device-category-moduleType-select'](): Promise<ModuleTypeSelect[]>;

    /**
     * 获取设备种类下拉数据
     * DeviceCategoryActor
     * @returns {Promise<DeviceCategorySelect[]>}
     */
    ['device-category-select-get'](): Promise<DeviceCategorySelect[]>;

    /**
     * 更新设备种类数据
     * DeviceCategoryActor
     * @param data
     * @returns {Promise<DeviceCategory>}
     */
    ['device-category-update'](
      // 设备种类数据
      data: DeviceCategory
    ): Promise<DeviceCategory>;

    /**
     * 获取单条设备属性/型号属性数据
     * DevicePropertyActor
     * @param id
     * @returns {Promise<DeviceProperty>}
     */
    ['device-property-get'](
      // 设备属性/型号属性数据
      id: string
    ): Promise<DeviceProperty>;

    /**
     * 获取设备种类的型号属性/设备属性表格总数信息
     * DevicePropertyActor
     * @param tid
     * @param dccode
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['device-property-grid-count'](
      // 表格标识
      tid: string,
      // 设备种类标识
      dccode: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取设备种类的型号属性/设备属性表格列表数据
     * DevicePropertyActor
     * @param tid
     * @param orders
     * @param dccode
     * @param attrType
     * @returns {Promise<ApiCore.GridData>}
     */
    ['device-property-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 设备种类标识
      dccode: string,
      // 属性分类
      attrType: string
    ): Promise<ApiCore.GridData>;

    /**
     * 调度配置-批量绑定-表头
     * FlowActor
     * @param tid
     * @param flowId
     * @param nodeId
     * @param formId
     * @param fieldType
     * @param fieldCode
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['dispatchConfig-batch-grid-count'](
      // 表格标识
      tid: string,
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单id
      formId: string,
      // 字段类型
      fieldType: string,
      // 字段标识
      fieldCode: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 调度配置-批量绑定-表数据
     * FlowActor
     * @param tid
     * @param orders
     * @param flowId
     * @param nodeId
     * @param formId
     * @param fieldType
     * @param fieldCode
     * @param mode
     * @returns {Promise<ApiCore.GridData>}
     */
    ['dispatchConfig-batch-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单id
      formId: string,
      // 字段类型
      fieldType: string,
      // 字段标识
      fieldCode: string,
      // 配置模式1输入2输出
      mode: string
    ): Promise<ApiCore.GridData>;

    /**
     * 调度配置-绑定
     * FlowActor
     * @param nodeId
     * @param mode
     * @param datas
     * @param isBatch
     * @param subFlowId
     * @returns {Promise<boolean>}
     */
    ['dispatchConfig-bind'](
      // 节点id
      nodeId: string,
      // 模式1输入2输出(批量插入用)
      mode: string,
      // 调度配置
      datas: DispatchConfig[],
      // 是否批量绑定
      isBatch: boolean,
      // 子流程id
      subFlowId: string
    ): Promise<boolean>;

    /**
     * 调度配置-表单字段-表头
     * FlowActor
     * @param tid
     * @param flowId
     * @param nodeId
     * @param formId
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['dispatchConfig-form-property-grid-count'](
      // 表格标识
      tid: string,
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单code
      formId: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 调度配置-表单字段-表数据
     * FlowActor
     * @param tid
     * @param orders
     * @param flowId
     * @param nodeId
     * @param formId
     * @param mode
     * @returns {Promise<ApiCore.GridData>}
     */
    ['dispatchConfig-form-property-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单id
      formId: string,
      // 模式1输入，2输出
      mode: string
    ): Promise<ApiCore.GridData>;

    /**
     * 调度配置-根据工作流和节点id获取主表单和副表单
     * FlowActor
     * @param wordFlowId
     * @param nodeId
     * @param mode
     * @returns {Promise<FormCategoryView[]>}
     */
    ['dispatchConfig-get-formCategory'](
      // 工作流id
      wordFlowId: string,
      // 节点id
      nodeId: string,
      // 配置模式1输入2输出
      mode: string
    ): Promise<FormCategoryView[]>;

    /**
     * 调度配置-解绑
     * FlowActor
     * @param nodeId
     * @param fromId
     * @param fromCode
     * @param mode
     * @returns {Promise<boolean>}
     */
    ['dispatchConfig-unbind'](
      // 节点id
      nodeId: string,
      // 比较表单id
      fromId: string,
      // 比较字段code(不传则批量解绑)
      fromCode: string,
      // 配置模式1输入2输出
      mode: string
    ): Promise<boolean>;

    /**
     * 调度配置-根据租户和工单类型获取包含调度触发方式的流程下拉
     * FlowActor
     * @param tCode
     * @param workflowCategory
     * @param search
     * @returns {Promise<WorkflowView[]>}
     */
    ['dispatchConfig-workflow-select'](
      // 租户code
      tCode: string,
      // 工单分类
      workflowCategory: string,
      // 搜索内容
      search: string
    ): Promise<WorkflowView[]>;

    /**
     * 根据父级节点获取目录树子节点地区数据
     * DistrictActor
     * @param id
     * @returns {Promise<District[]>}
     */
    ['district-ancestor-get'](
      //
      id: string
    ): Promise<District[]>;

    /**
     * 获取表格已定义的所有列
     * DistrictActor
     * @returns {Promise<string[]>}
     */
    ['district-columns-defined-get'](): Promise<string[]>;

    /**
     * 增加地区数据
     * DistrictActor
     * @param data
     * @returns {Promise<District>}
     */
    ['district-create'](
      //
      data: District
    ): Promise<District>;

    /**
     * 批量增加地区数据
     * DistrictActor
     * @param datas
     * @returns {Promise<DistrictGridRes>}
     */
    ['district-create-batchs'](
      //
      datas: District[]
    ): Promise<DistrictGridRes>;

    /**
     * 增加自定义列数据
     * DistrictActor
     * @param tid
     * @param cols
     * @returns {Promise<boolean>}
     */
    ['district-create-set-columns'](
      //
      tid: string,
      //
      cols: string[]
    ): Promise<boolean>;

    /**
     * 删除地区数据
     * DistrictActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['district-delete'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条地区数据
     * DistrictActor
     * @param id
     * @returns {Promise<District>}
     */
    ['district-get'](
      //
      id: string
    ): Promise<District>;

    /**
     * 根据父级节点获取子区域的表格总数信息
     * DistrictActor
     * @param tid
     * @param pid
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['district-grid-count'](
      //
      tid: string,
      //
      pid: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 根据父级节点获取子区域的表格列表数据
     * DistrictActor
     * @param tid
     * @param pid
     * @param orders
     * @returns {Promise<any[][]>}
     */
    ['district-grid-list'](
      //
      tid: string,
      //
      pid: string,
      //
      orders: ApiCore.KV[]
    ): Promise<any[][]>;

    /**
     * 获取图层相关地区目录树列表数据
     * DistrictActor
     * @returns {Promise<DistrictLayerTree[]>}
     */
    ['district-layer-tree-list'](): Promise<DistrictLayerTree[]>;

    /**
     * 测试参数类型name
     * DistrictActor
     * @param data
     * @param arr
     * @param age
     * @param name
     * @returns {Promise<string>}
     */
    ['district-test'](
      //
      data: District[],
      //
      arr: string[],
      //
      age: number,
      //
      name: string
    ): Promise<string>;

    /**
     * 根据父级节点获取目录树子节点地区数据
     * DistrictActor
     * @param pid
     * @returns {Promise<DistrictTree[]>}
     */
    ['district-tree-list'](
      //
      pid: string
    ): Promise<DistrictTree[]>;

    /**
     * 更新地区数据
     * DistrictActor
     * @param data
     * @param updateChildrenTimeZone
     * @returns {Promise<District>}
     */
    ['district-update'](
      //
      data: District,
      //
      updateChildrenTimeZone: boolean
    ): Promise<District>;

    /**
     * 执行计算公式数据
     * ComputationalActor
     * @param functionName
     * @param parameter
     * @param resultType
     * @param functionJs
     * @returns {Promise<string>}
     */
    ['executecCalculation'](
      //
      functionName: string,
      //
      parameter: string,
      //
      resultType: string,
      //
      functionJs: string
    ): Promise<string>;

    /**
     * 执行计算公式数据
     * ComputationalActor
     * @param id
     * @returns {Promise<string>}
     */
    ['executecCalculationById'](
      // 计算公式模板数据
      id: string
    ): Promise<string>;

    /**
     * 获取项目校验的表格总数信息
     * FacilityVerifyActor
     * @param tid
     * @param pid
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['facility-verify-grid-count'](
      // 表格标识
      tid: string,
      // 项目id
      pid: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取项目校验的表格列表数据-分页
     * FacilityVerifyActor
     * @param tid
     * @param orders
     * @param id
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['facility-verify-grid-list-page'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 项目id
      id: string,
      // 页码
      page: number,
      // 页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 增加工作流
     * FlowActor
     * @param workflow
     * @returns {Promise<Workflow>}
     */
    ['flow-create'](
      // 工作流对象
      workflow: Workflow
    ): Promise<Workflow>;

    /**
     * 删除工作流
     * FlowActor
     * @param flowIds
     * @returns {Promise<number>}
     */
    ['flow-delete'](
      // 工作流id数组
      flowIds: string[]
    ): Promise<number>;

    /**
     * 校验工作流是否可以删除
     * FlowActor
     * @param flowIds
     * @returns {Promise<Workflow[]>}
     */
    ['flow-deleteCheck'](
      // 工作流id数组
      flowIds: string[]
    ): Promise<Workflow[]>;

    /**
     * 启用工作流
     * FlowActor
     * @param flowIds
     * @returns {Promise<string[]>}
     */
    ['flow-enable'](
      // 工作流id数组
      flowIds: string[]
    ): Promise<string[]>;

    /**
     * 获取工作流下拉列表根据权限
     * FlowActor
     * @returns {Promise<WorkflowView[]>}
     */
    ['flow-get-by-role'](): Promise<WorkflowView[]>;

    /**
     * 获取工作流下拉列表
     * FlowActor
     * @returns {Promise<WorkflowView[]>}
     */
    ['flow-getAll'](): Promise<WorkflowView[]>;

    /**
     * 获取所有工作流表格信息
     * FlowActor
     * @param search
     * @param tenantCode
     * @param workFlowType
     * @param workOrderType
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['flow-getAll-gridCount'](
      // 搜索项
      search: string,
      // 租户code
      tenantCode: string,
      // 流程类型
      workFlowType: string,
      // 工单类型
      workOrderType: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取所有工作流数据信息
     * FlowActor
     * @param search
     * @param tenantCode
     * @param workFlowType
     * @param workOrderType
     * @returns {Promise<any[][]>}
     */
    ['flow-getAll-gridList'](
      // 搜索项
      search: string,
      // 租户code
      tenantCode: string,
      // 流程类型
      workFlowType: string,
      // 工单类型
      workOrderType: string
    ): Promise<any[][]>;

    /**
     * 获取工作流中所有节点
     * FlowActor
     * @param flowId
     * @returns {Promise<Node[]>}
     */
    ['flow-getNodes'](
      // 工作流id
      flowId: string
    ): Promise<Node[]>;

    /**
     * 跳转节点下拉框
     * FlowActor
     * @param flowId
     * @param nodeId
     * @returns {Promise<NodeView[]>}
     */
    ['flow-getNodes-selectView'](
      // 工作流id
      flowId: string,
      // 当前节点id
      nodeId: string
    ): Promise<NodeView[]>;

    /**
     * 获取单条工作流
     * FlowActor
     * @param workflowId
     * @returns {Promise<WorkflowGrid>}
     */
    ['flow-getOne'](
      //
      workflowId: string
    ): Promise<WorkflowGrid>;

    /**
     * 根据工作流id获得工作流程数据
     * FlowActor
     * @param flowId
     * @returns {Promise<any>}
     */
    ['flow-nodes-links-get'](
      // 工作流id
      flowId: string
    ): Promise<any>;

    /**
     * 停用工作流
     * FlowActor
     * @param flowIds
     * @returns {Promise<boolean>}
     */
    ['flow-prohibit'](
      // 工作流id数组
      flowIds: string[]
    ): Promise<boolean>;

    /**
     * 保存工作流程
     * FlowActor
     * @param ngs
     * @returns {Promise<boolean>}
     */
    ['flow-save'](
      // 线数组
      ngs: NodeGird[]
    ): Promise<boolean>;

    /**
     * 编辑工作流
     * FlowActor
     * @param workflow
     * @returns {Promise<Workflow>}
     */
    ['flow-update'](
      // 工作流对象
      workflow: Workflow
    ): Promise<Workflow>;

    /**
     * 增加触发条件
     * FlowActor
     * @param data
     * @returns {Promise<FlowStartUp>}
     */
    ['flowStartUp-create'](
      // 判断对象
      data: FlowStartUp
    ): Promise<FlowStartUp>;

    /**
     * 删除触发条件
     * FlowActor
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['flowStartUp-delete'](
      // 判断对象id
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取触发条件详情
     * FlowActor
     * @param id
     * @returns {Promise<FlowStartUp>}
     */
    ['flowStartUp-get'](
      // 触发条件id
      id: string
    ): Promise<FlowStartUp>;

    /**
     * 触发条件表格信息
     * FlowActor
     * @param tid
     * @param fid
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['flowStartUp-grid-count'](
      // 表格标识
      tid: string,
      // 流程id
      fid: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 触发条件表格列表数据
     * FlowActor
     * @param tid
     * @param orders
     * @param fid
     * @returns {Promise<ApiCore.GridData>}
     */
    ['flowStartUp-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 流程id
      fid: string
    ): Promise<ApiCore.GridData>;

    /**
     * 启用/禁用触发条件
     * FlowActor
     * @param id
     * @returns {Promise<boolean>}
     */
    ['flowStartUp-switch'](
      // 判断对象id
      id: string
    ): Promise<boolean>;

    /**
     * 获取触发条件类型数组
     * FlowActor
     * @param fid
     * @returns {Promise<FlowStartUpTypeSelect[]>}
     */
    ['flowStartUp-type-list'](
      // 流程id
      fid: string
    ): Promise<FlowStartUpTypeSelect[]>;

    /**
     * 编辑触发条件
     * FlowActor
     * @param data
     * @returns {Promise<FlowStartUp>}
     */
    ['flowStartUp-update'](
      // 判断对象
      data: FlowStartUp
    ): Promise<FlowStartUp>;

    /**
     * 增加表单种类
     * FlowActor
     * @param formCategory
     * @returns {Promise<FormCategory>}
     */
    ['formCategory-create'](
      // 表单种类对象
      formCategory: FormCategory
    ): Promise<FormCategory>;

    /**
     * 根据id删除表单种类
     * FlowActor
     * @param flowId
     * @param fcodes
     * @returns {Promise<number>}
     */
    ['formCategory-delete'](
      // 工作流id
      flowId: string,
      // 表单code数组
      fcodes: string[]
    ): Promise<number>;

    /**
     * 根据id获取表单种类
     * FlowActor
     * @param id
     * @returns {Promise<FormCategory>}
     */
    ['formCategory-get'](
      // 表单种类id
      id: string
    ): Promise<FormCategory>;

    /**
     * 获取所有表单表格信息
     * FlowActor
     * @param workFlowId
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['formCategory-getAll-gridCount'](
      // 工作流id
      workFlowId: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取所有表单数据信息
     * FlowActor
     * @param workFlowId
     * @returns {Promise<any[][]>}
     */
    ['formCategory-getAll-gridList'](
      // 工作流id
      workFlowId: string
    ): Promise<any[][]>;

    /**
     * 根据工作流id获取所有表单
     * FlowActor
     * @param id
     * @returns {Promise<FormCategory[]>}
     */
    ['formCategory-getList'](
      // 工作流id
      id: string
    ): Promise<FormCategory[]>;

    /**
     * 更新表单种类
     * FlowActor
     * @param formCategory
     * @returns {Promise<number>}
     */
    ['formCategory-updatete'](
      // 表单种类对象
      formCategory: FormCategory
    ): Promise<number>;

    /**
     * 生成一级编号
     * FlowActor
     * @param firstNumType
     * @returns {Promise<string>}
     */
    ['formProperty-firstNum-create'](
      // 一级编号类型
      firstNumType: string
    ): Promise<string>;

    /**
     * 根据表单code和数据类型获取字段
     * FlowActor
     * @param fId
     * @param formCode
     * @param type
     * @returns {Promise<DataField[]>}
     */
    ['formProperty-list'](
      // 工作流id
      fId: string,
      // 表单code
      formCode: string,
      // 数据类型
      type: string
    ): Promise<DataField[]>;

    /**
     * 根据表单code和数据类型获取字段(全部表单)
     * FlowActor
     * @param fId
     * @param formCode
     * @param type
     * @returns {Promise<DataField[]>}
     */
    ['formProperty-listAll'](
      // 工作流id
      fId: string,
      // 表单code
      formCode: string,
      // 数据类型
      type: string
    ): Promise<DataField[]>;

    /**
     * 生成二级编号
     * FlowActor
     * @param secondNumType
     * @returns {Promise<string>}
     */
    ['formProperty-secondNum-create'](
      // 二级编号类型
      secondNumType: string
    ): Promise<string>;

    /**
     * 根据表单code和数据类型获取字段下拉
     * FlowActor
     * @param fId
     * @param formCode
     * @param type
     * @returns {Promise<DataFieldSelectData[]>}
     */
    ['formProperty-select'](
      // 工作流id
      fId: string,
      // 表单code
      formCode: string,
      // 数据类型
      type: string
    ): Promise<DataFieldSelectData[]>;

    /**
     * 增加应用功能授权数据
     * FunctionAuthorizationActor
     * @param datas
     * @returns {Promise<FunctionAuthorizationGrid[]>}
     */
    ['function-authorization-create'](
      // 应用功能授权数据
      datas: FunctionAuthorization[]
    ): Promise<FunctionAuthorizationGrid[]>;

    /**
     * 删除应用功能授权数据
     * FunctionAuthorizationActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['function-authorization-delete'](
      // 应用功能授权序号数组
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条应用功能授权数据
     * FunctionAuthorizationActor
     * @param id
     * @returns {Promise<FunctionAuthorization>}
     */
    ['function-authorization-get'](
      // 应用功能授权序号
      id: string
    ): Promise<FunctionAuthorization>;

    /**
     * 根据租户标识获取应用功能授权的表格总数信息
     * FunctionAuthorizationActor
     * @param tid
     * @param tcode
     * @param sccode
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['function-authorization-grid-count'](
      // 表格标识
      tid: string,
      // 租户标识
      tcode: string,
      // 系统分类标识
      sccode: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 根据租户标识获取应用功能授权的表格列表数据
     * FunctionAuthorizationActor
     * @param tid
     * @param tcode
     * @param sccode
     * @param orders
     * @returns {Promise<ApiCore.GridData>}
     */
    ['function-authorization-grid-list'](
      // 表格标识
      tid: string,
      // 租户标识
      tcode: string,
      // 系统分类标识
      sccode: string,
      // 排序
      orders: ApiCore.KV[]
    ): Promise<ApiCore.GridData>;

    /**
     * 更新应用功能授权数据
     * FunctionAuthorizationActor
     * @param data
     * @returns {Promise<FunctionAuthorizationGrid>}
     */
    ['function-authorization-update'](
      // 应用功能授权数据
      data: FunctionAuthorization
    ): Promise<FunctionAuthorizationGrid>;

    /**
     * 组件功能展示
     * FunctionsActor
     * @param scCode
     * @param tCode
     * @returns {Promise<FunctionsGrid[]>}
     */
    ['function-list'](
      // 组件唯一标识
      scCode: string,
      // 租户唯一标识
      tCode: string
    ): Promise<FunctionsGrid[]>;

    /**
     * 批量编辑组件功能
     * FunctionsActor
     * @param functions
     * @param tCode
     * @param scCode
     * @returns {Promise<number>}
     */
    ['function-update'](
      // 租户组件功能对象数组
      functions: Functions[],
      // 租户标识
      tCode: string,
      // 系统组件唯一标识
      scCode: string
    ): Promise<number>;

    /**
     * 决策树生成规则
     * DecisionTreeActor
     * @param content
     * @returns {Promise<string>}
     */
    ['genDrool'](
      // 决策id
      content: string
    ): Promise<string>;

    /**
     * 通过租户code用户code表格code获取到单条数据
     * FiltrationActor
     * @param tabCode
     * @param tenCode
     * @param uCode
     * @returns {Promise<Filtration>}
     */
    ['get-Filtration'](
      // 表格标识
      tabCode: string,
      // 租户标识
      tenCode: string,
      // 用户标识
      uCode: string
    ): Promise<Filtration>;

    /**
     * 根据工作流id和表单类型获取表单
     * FlowActor
     * @param wordFlowId
     * @param formType
     * @returns {Promise<FormCategory[]>}
     */
    ['get-formCategory-by-wfId'](
      // 工作流id
      wordFlowId: string,
      // 表单类型
      formType: string
    ): Promise<FormCategory[]>;

    /**
     * 根据工作流id和表单code获取字段类型一致的主表单和副表单
     * FlowActor
     * @param wordFlowId
     * @param formCode
     * @returns {Promise<FormCategory[]>}
     */
    ['get-formCategory-by-wfId-formId'](
      // 工作流id
      wordFlowId: string,
      // 表单code
      formCode: string
    ): Promise<FormCategory[]>;

    /**
     * 根据工作流id获取表单下拉数据
     * FlowActor
     * @param wordFlowId
     * @returns {Promise<SelectView[]>}
     */
    ['get-formCategory-by-wfId-to-select'](
      // 工作流id
      wordFlowId: string
    ): Promise<SelectView[]>;

    /**
     * 根据表单种类id获取表单数据
     * FlowActor
     * @param id
     * @returns {Promise<any[]>}
     */
    ['get-formPropertys-by-fcId-to-select'](
      // 表单种类id
      id: string
    ): Promise<any[]>;

    /**
     * 根据系统地址获取租户系统菜单或系统菜单详情
     * InterfaceActor
     * @param systemAddress
     * @returns {Promise<InterfaceSystemMenuGrid>}
     */
    ['getBySystemAddress'](
      // 系统地址
      systemAddress: string
    ): Promise<InterfaceSystemMenuGrid>;

    /**
     * 获取系统菜单标题栏组件下拉数据
     * SystemMenuConfigActor
     * @param cCode
     * @returns {Promise<SysComponent[]>}
     */
    ['getSystemMenuConfigTitleBarData'](
      // 组件分类标题栏组件code
      cCode: string
    ): Promise<SysComponent[]>;

    /**
     * 增加全局系统权限数据
     * GlobalPermissionActor
     * @param data
     * @returns {Promise<GlobalPermission>}
     */
    ['global-permission-create'](
      // 全局系统权限数据
      data: GlobalPermission
    ): Promise<GlobalPermission>;

    /**
     * 删除全局权限
     * GlobalPermissionActor
     * @param codes
     * @returns {Promise<number>}
     */
    ['global-permission-delete'](
      // 全局权限标识数组
      codes: string[]
    ): Promise<number>;

    /**
     * 获取单条全局权限数据
     * GlobalPermissionActor
     * @param code
     * @returns {Promise<GlobalPermission>}
     */
    ['global-permission-get'](
      // 系统权限标识
      code: string
    ): Promise<GlobalPermission>;

    /**
     * 获取所有全局权限
     * GlobalPermissionActor
     * @returns {Promise<GlobalPermissionView[]>}
     */
    ['global-permission-get-all'](): Promise<GlobalPermissionView[]>;

    /**
     * 获取全局系统权限的表格列表数据
     * GlobalPermissionActor
     * @param tid
     * @param orders
     * @param searchText
     * @returns {Promise<ApiCore.GridData>}
     */
    ['global-permission-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridData>;

    /**
     * 更新全局权限数据
     * GlobalPermissionActor
     * @param data
     * @returns {Promise<GlobalPermission>}
     */
    ['global-permission-update'](
      // 全局权限数据
      data: GlobalPermission
    ): Promise<GlobalPermission>;

    /**
     * 更新全局权限上移下移层级顺序
     * GlobalPermissionActor
     * @param reqs
     * @returns {Promise<boolean>}
     */
    ['global-sort-update'](
      // 全局权限数组数据
      reqs: GlobalPermissionSortReq[]
    ): Promise<boolean>;

    /**
     * 获取表格总数
     * GlobalPermissionActor
     * @param tid
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['globalPermission-grid-count'](
      // 表格标识
      tid: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 增加行业数据
     * IndustryActor
     * @param data
     * @returns {Promise<Industry>}
     */
    ['industry-create'](
      // 行业数据
      data: Industry
    ): Promise<Industry>;

    /**
     * 根据父节点获取子行业数据
     * IndustryActor
     * @param pid
     * @returns {Promise<IndustryRes[]>}
     */
    ['industry-datas-get'](
      // 行业父序号
      pid: string
    ): Promise<IndustryRes[]>;

    /**
     * 删除行业数据
     * IndustryActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['industry-delete'](
      // 行业序号数组
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条行业数据
     * IndustryActor
     * @param id
     * @returns {Promise<Industry>}
     */
    ['industry-get'](
      // 行业序号
      id: string
    ): Promise<Industry>;

    /**
     * 根据父级节点获取子行业的表格总数信息
     * IndustryActor
     * @param tid
     * @param pid
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['industry-grid-count'](
      // 表格标识
      tid: string,
      // 行业父节点序号
      pid: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 根据父级节点获取子行业的表格列表数据
     * IndustryActor
     * @param tid
     * @param pid
     * @param orders
     * @param searchText
     * @returns {Promise<ApiCore.GridData>}
     */
    ['industry-grid-list'](
      // 表格标识
      tid: string,
      // 行业父节点序号
      pid: string,
      // 排序
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridData>;

    /**
     * 更新行业数据
     * IndustryActor
     * @param data
     * @returns {Promise<Industry>}
     */
    ['industry-update'](
      // 行业数据
      data: Industry
    ): Promise<Industry>;

    /**
     * 人工录入-表头
     * FlowActor
     * @param tid
     * @param flowId
     * @param nodeId
     * @param formId
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['inputConfig-artificial-grid-count'](
      // 表格标识
      tid: string,
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单id
      formId: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 人工录入-表数据
     * FlowActor
     * @param tid
     * @param orders
     * @param flowId
     * @param nodeId
     * @param formId
     * @returns {Promise<ApiCore.GridData>}
     */
    ['inputConfig-artificial-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单id
      formId: string
    ): Promise<ApiCore.GridData>;

    /**
     * 人工录入-保存
     * FlowActor
     * @param nodeId
     * @param datas
     * @returns {Promise<boolean>}
     */
    ['inputConfig-artificial-save'](
      // 节点id
      nodeId: string,
      // 人工录入配置
      datas: InputConfigArtificialView[]
    ): Promise<boolean>;

    /**
     * 自动录入-绑定
     * FlowActor
     * @param nodeId
     * @param datas
     * @param isBatch
     * @returns {Promise<boolean>}
     */
    ['inputConfig-automatic-bind'](
      // 节点id
      nodeId: string,
      // 自动录入配置
      datas: InputConfig[],
      // 是否批量绑定
      isBatch: boolean
    ): Promise<boolean>;

    /**
     * 自动录入数据-表头
     * FlowActor
     * @param tid
     * @param flowId
     * @param nodeId
     * @param formId
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['inputConfig-automatic-grid-count'](
      // 表格标识
      tid: string,
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单id
      formId: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 自动录入数据录入-表数据
     * FlowActor
     * @param tid
     * @param orders
     * @param flowId
     * @param nodeId
     * @param formId
     * @returns {Promise<ApiCore.GridData>}
     */
    ['inputConfig-automatic-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单id
      formId: string
    ): Promise<ApiCore.GridData>;

    /**
     * 自动录入-解绑
     * FlowActor
     * @param nodeId
     * @param fromId
     * @param fromCode
     * @returns {Promise<boolean>}
     */
    ['inputConfig-automatic-unbind'](
      // 节点id
      nodeId: string,
      // 比较表单id
      fromId: string,
      // 比较字段code(不传则批量解绑)
      fromCode: string
    ): Promise<boolean>;

    /**
     * 自动录入-批量绑定-表头
     * FlowActor
     * @param tid
     * @param flowId
     * @param nodeId
     * @param formId
     * @param fieldType
     * @param fieldCode
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['inputConfig-batch-grid-count'](
      // 表格标识
      tid: string,
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单id
      formId: string,
      // 字段类型
      fieldType: string,
      // 字段标识
      fieldCode: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 自动录入-批量绑定-表数据
     * FlowActor
     * @param tid
     * @param orders
     * @param flowId
     * @param nodeId
     * @param formId
     * @param fieldType
     * @param fieldCode
     * @returns {Promise<ApiCore.GridData>}
     */
    ['inputConfig-batch-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单id
      formId: string,
      // 字段类型
      fieldType: string,
      // 字段标识
      fieldCode: string
    ): Promise<ApiCore.GridData>;

    /**
     * 录入配置-根据工作流和节点id获取主表单和副表单
     * FlowActor
     * @param wordFlowId
     * @param nodeId
     * @returns {Promise<FormCategoryView[]>}
     */
    ['inputConfig-get-formCategory'](
      // 工作流id
      wordFlowId: string,
      // 节点id
      nodeId: string
    ): Promise<FormCategoryView[]>;

    /**
     * 获取界面风格下拉数据
     * InterfaceActor
     * @returns {Promise<InterfaceTypeSelect[]>}
     */
    ['interface-style-select'](): Promise<InterfaceTypeSelect[]>;

    /**
     * 增加图层数据
     * LayerActor
     * @param data
     * @returns {Promise<LayerDetail>}
     */
    ['layer-create'](
      // 图层数据
      data: Layer
    ): Promise<LayerDetail>;

    /**
     * 删除图层数据
     * LayerActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['layer-delete'](
      // 图层序号数组
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条图层详情
     * LayerActor
     * @param id
     * @returns {Promise<LayerDetail>}
     */
    ['layer-get'](
      // 图层序号
      id: string
    ): Promise<LayerDetail>;

    /**
     * 获取图层的表格总数信息
     * LayerActor
     * @param tid
     * @param code
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['layer-grid-count'](
      // 表格标识
      tid: string,
      // 租户code
      code: string,
      // 图层名称
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取图层的表格列表数据-分页
     * LayerActor
     * @param tid
     * @param orders
     * @param code
     * @param searchText
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['layer-grid-list-page'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 租户id
      code: string,
      // 图层名称
      searchText: string,
      // 页码
      page: number,
      // 页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 获取地图包含租户下拉框
     * LayerActor
     * @returns {Promise<TenantComboBox[]>}
     */
    ['layer-tenant-list'](): Promise<TenantComboBox[]>;

    /**
     * 更新图层数据
     * LayerActor
     * @param data
     * @returns {Promise<LayerDetail>}
     */
    ['layer-update'](
      // 图层数据
      data: Layer
    ): Promise<LayerDetail>;

    /**
     * 根据线id跟表单id获取关联表单种类数据
     * FlowActor
     * @param lineId
     * @param formId
     * @returns {Promise<LineAuthorityView[]>}
     */
    ['line2FormCategory-get'](
      // 当前线序号
      lineId: string,
      // 当前表单种类序号
      formId: string
    ): Promise<LineAuthorityView[]>;

    /**
     * 根据线id获取线关联表单种类的表单数据
     * FlowActor
     * @param lineId
     * @returns {Promise<any[]>}
     */
    ['line2FormCategory-get-from'](
      // 当前线序号
      lineId: string
    ): Promise<any[]>;

    /**
     * 获取厂家的表格总数信息
     * ManufacturerActor
     * @param tid
     * @param tenementCode
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['manufacturer-count'](
      // 表格标识
      tid: string,
      // 租户标识
      tenementCode: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 动态下拉框
     * ManufacturerActor
     * @param name
     * @returns {Promise<ManufacturerComboBox[]>}
     */
    ['manufacturer-manufacturerType-ComboBox'](
      // 厂家简称(模糊搜索)
      name: string
    ): Promise<ManufacturerComboBox[]>;

    /**
     * 增加厂家数据
     * ManufacturerActor
     * @param data
     * @returns {Promise<Manufacturer>}
     */
    ['manufacturer-new-create'](
      // 厂家模板数据
      data: Manufacturer
    ): Promise<Manufacturer>;

    /**
     * 删除多个厂家数据
     * ManufacturerActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['manufacturer-new-delete'](
      //
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条厂家数据
     * ManufacturerActor
     * @param id
     * @returns {Promise<ManufacturerDetail>}
     */
    ['manufacturer-new-get'](
      // 厂家数据序号
      id: string
    ): Promise<ManufacturerDetail>;

    /**
     * 获取厂家的表格列表数据
     * ManufacturerActor
     * @param tid
     * @param tenementCode
     * @param orders
     * @param searchText
     * @returns {Promise<ApiCore.GridData>}
     */
    ['manufacturer-new-grid-list'](
      // 表格标识
      tid: string,
      // 租户唯一标识
      tenementCode: string,
      // 排序
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridData>;

    /**
     * 更新厂家数据
     * ManufacturerActor
     * @param data
     * @returns {Promise<Manufacturer>}
     */
    ['manufacturer-new-update'](
      // 厂家模板数据
      data: Manufacturer
    ): Promise<Manufacturer>;

    /**
     * 租户下拉框
     * ManufacturerActor
     * @returns {Promise<TenantComboBox[]>}
     */
    ['manufacturer-tenant-Box'](): Promise<TenantComboBox[]>;

    /**
     * 增加地图配置数据
     * MapConfigActor
     * @param data
     * @returns {Promise<MapConfig>}
     */
    ['map-config-create'](
      // 地图配置数据
      data: MapConfig
    ): Promise<MapConfig>;

    /**
     * 删除地图配置数据
     * MapConfigActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['map-config-delete'](
      // 地图配置序号数组
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条地图配置详情
     * MapConfigActor
     * @param id
     * @returns {Promise<MapConfig>}
     */
    ['map-config-get'](
      // 地图配置序号
      id: string
    ): Promise<MapConfig>;

    /**
     * 获取地图配置的表格总数信息
     * MapConfigActor
     * @param tid
     * @param mid
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['map-config-grid-count'](
      // 表格标识
      tid: string,
      // 地图id
      mid: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取地图配置的表格列表数据-分页
     * MapConfigActor
     * @param tid
     * @param orders
     * @param mid
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['map-config-grid-list-page'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 地图id
      mid: string,
      // 页码
      page: number,
      // 页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 更新地图配置数据
     * MapConfigActor
     * @param data
     * @returns {Promise<MapConfig>}
     */
    ['map-config-update'](
      // 地图配置数据
      data: MapConfig
    ): Promise<MapConfig>;

    /**
     * 增加地图数据
     * MapInfoActor
     * @param data
     * @returns {Promise<MapInfoDetail>}
     */
    ['map-create'](
      // 地图数据
      data: MapInfo
    ): Promise<MapInfoDetail>;

    /**
     * 删除地图数据
     * MapInfoActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['map-delete'](
      // 地图序号数组
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条地图详情
     * MapInfoActor
     * @param id
     * @returns {Promise<MapInfoDetail>}
     */
    ['map-get'](
      // 地图序号
      id: string
    ): Promise<MapInfoDetail>;

    /**
     * 获取地图的表格总数信息
     * MapInfoActor
     * @param tid
     * @param code
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['map-grid-count'](
      // 表格标识
      tid: string,
      // 租户code
      code: string,
      // 地图名称
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取地图的表格列表数据-分页
     * MapInfoActor
     * @param tid
     * @param orders
     * @param code
     * @param searchText
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['map-grid-list-page'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 租户code
      code: string,
      // 地图名称
      searchText: string,
      // 页码
      page: number,
      // 页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 获取行业数据
     * MapItemActor
     * @returns {Promise<IndustrySelect[]>}
     */
    ['map-industry-list'](): Promise<IndustrySelect[]>;

    /**
     * 根据应用id列表获取地图名称列表
     * MapInfoActor
     * @param ids
     * @returns {Promise<string>}
     */
    ['map-info-Id-to-name'](
      // 地图ids(逗号分隔)
      ids: string
    ): Promise<string>;

    /**
     * 获取地图列表
     * MapInfoActor
     * @returns {Promise<MapSelect[]>}
     */
    ['map-info-select'](): Promise<MapSelect[]>;

    /**
     * 更新项目经纬度数据
     * MapItemActor
     * @param reqs
     * @returns {Promise<boolean>}
     */
    ['map-project-latlng-update'](
      // 经纬度更新请求数据数组
      reqs: LatLngUpdateReq[]
    ): Promise<boolean>;

    /**
     * 获取当前用户有权访问的项目数据
     * MapItemActor
     * @returns {Promise<ProjectSelect[]>}
     */
    ['map-project-list'](): Promise<ProjectSelect[]>;

    /**
     * 获取地图包含租户下拉框
     * MapInfoActor
     * @returns {Promise<TenantComboBox[]>}
     */
    ['map-tenant-list'](): Promise<TenantComboBox[]>;

    /**
     * 更新地图数据
     * MapInfoActor
     * @param data
     * @returns {Promise<MapInfoDetail>}
     */
    ['map-update'](
      // 地图数据
      data: MapInfo
    ): Promise<MapInfoDetail>;

    /**
     * 增加型号数据
     * ModelActor
     * @param data
     * @returns {Promise<Model>}
     */
    ['model-create'](
      // 型号数据
      data: Model
    ): Promise<Model>;

    /**
     * 删除型号数据
     * ModelActor
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['model-delete'](
      // 型号序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取型号详情数据
     * ModelActor
     * @param id
     * @returns {Promise<ModelDetail>}
     */
    ['model-detail-get'](
      // 型号序号
      id: string
    ): Promise<ModelDetail>;

    /**
     * 获取型号的设备模组下拉数据
     * ModelActor
     * @returns {Promise<ModelBelongSelect[]>}
     */
    ['model-device-category-select-get'](): Promise<ModelBelongSelect[]>;

    /**
     * 获取型号的设备产品下拉数据
     * ModelActor
     * @returns {Promise<ModelBelongSelect[]>}
     */
    ['model-device-product-select-get'](): Promise<ModelBelongSelect[]>;

    /**
     * 获取单条型号数据
     * ModelActor
     * @param id
     * @returns {Promise<Model>}
     */
    ['model-get'](
      // 型号序号
      id: string
    ): Promise<Model>;

    /**
     * 获取型号的表格总数信息
     * ModelActor
     * @param tid
     * @param tenantId
     * @param mId
     * @param cId
     * @param productId
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['model-grid-count'](
      // 表格标识
      tid: string,
      // 租户序号
      tenantId: string,
      // 厂家序号
      mId: string,
      // 设备种类序号
      cId: string,
      // 设备产品序号
      productId: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取型号的表格列表数据
     * ModelActor
     * @param tid
     * @param tenantId
     * @param mId
     * @param cId
     * @param productId
     * @param searchText
     * @param orders
     * @returns {Promise<ApiCore.GridData>}
     */
    ['model-grid-list'](
      // 表格标识
      tid: string,
      // 租户序号
      tenantId: string,
      // 厂家序号
      mId: string,
      // 设备种类序号
      cId: string,
      // 设备产品序号
      productId: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[]
    ): Promise<ApiCore.GridData>;

    /**
     * 获取型号的所属厂家下拉数据
     * ModelActor
     * @returns {Promise<ModelBelongSelect[]>}
     */
    ['model-manufacturer-select-get'](): Promise<ModelBelongSelect[]>;

    /**
     * 获取型号的所属租户下拉数据
     * ModelActor
     * @returns {Promise<ModelBelongSelect[]>}
     */
    ['model-tenant-select-get'](): Promise<ModelBelongSelect[]>;

    /**
     * 更新型号数据
     * ModelActor
     * @param data
     * @returns {Promise<Model>}
     */
    ['model-update'](
      // 型号数据
      data: Model
    ): Promise<Model>;

    /**
     * 增加模组功能数据
     * ModuleFunctionActor
     * @param data
     * @returns {Promise<ModuleFunction>}
     */
    ['modulefunction-create'](
      // 模组功能数据对象
      data: ModuleFunction
    ): Promise<ModuleFunction>;

    /**
     * 删除模组功能数据
     * ModuleFunctionActor
     * @param dccode
     * @param ids
     * @returns {Promise<number>}
     */
    ['modulefunction-delete'](
      // 设备设备种类标识
      dccode: string,
      // 模组功能序号数组
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条模组功能数据
     * ModuleFunctionActor
     * @param id
     * @returns {Promise<ModuleFunction>}
     */
    ['modulefunction-get'](
      // 模组功能序号
      id: string
    ): Promise<ModuleFunction>;

    /**
     * 获取表格总数信息
     * ModuleFunctionActor
     * @param tid
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['modulefunction-grid-count'](
      // 表格标识
      tid: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取表格列表数据
     * ModuleFunctionActor
     * @param tid
     * @param dccode
     * @param orders
     * @returns {Promise<ApiCore.GridData>}
     */
    ['modulefunction-grid-list'](
      // 表格标识
      tid: string,
      // 设备种类标识
      dccode: string,
      // 排序
      orders: ApiCore.KV[]
    ): Promise<ApiCore.GridData>;

    /**
     * 更新模组功能数据
     * ModuleFunctionActor
     * @param data
     * @returns {Promise<ModuleFunction>}
     */
    ['modulefunction-update'](
      // 模组功能数据对象
      data: ModuleFunction
    ): Promise<ModuleFunction>;

    /**
     * 更改模组功能顺序
     * ModuleFunctionActor
     * @param reqs
     * @returns {Promise<boolean>}
     */
    ['modulefunction-update-sort'](
      // 模组功能排序数据数组
      reqs: ModuleFunctionSortReq[]
    ): Promise<boolean>;

    /**
     * 增加节点
     * FlowActor
     * @param workflowId
     * @param node
     * @returns {Promise<Node>}
     */
    ['node-create'](
      // 工作流id
      workflowId: string,
      // 要创建的节点对象
      node: NodeGird
    ): Promise<Node>;

    /**
     * 删除/清空节点
     * FlowActor
     * @param workflowId
     * @param nodeId
     * @returns {Promise<boolean>}
     */
    ['node-delete'](
      // 工作流id
      workflowId: string,
      // 当前节点id(不传表示清空节点)
      nodeId: string
    ): Promise<boolean>;

    /**
     * 根据节点id获取节点
     * FlowActor
     * @param nodeId
     * @returns {Promise<NodeDetail>}
     */
    ['node-get'](
      // 当前节点id
      nodeId: string
    ): Promise<NodeDetail>;

    /**
     * 根据节点id获取节点Grid
     * FlowActor
     * @param nodeId
     * @returns {Promise<NodeGird>}
     */
    ['node-get-grid'](
      // 当前节点id
      nodeId: string
    ): Promise<NodeGird>;

    /**
     * 保存所有节点
     * FlowActor
     * @param workflowId
     * @returns {Promise<boolean>}
     */
    ['node-save'](
      // 工作流id
      workflowId: string
    ): Promise<boolean>;

    /**
     * 更新节点
     * FlowActor
     * @param node
     * @returns {Promise<number>}
     */
    ['node-update'](
      // 当前节点id
      node: Node
    ): Promise<number>;

    /**
     * 更新节点
     * FlowActor
     * @param id
     * @param state
     * @returns {Promise<boolean>}
     */
    ['node-update-valid'](
      // 当前节点id
      id: string,
      //
      state: boolean
    ): Promise<boolean>;

    /**
     * 设置节点有效性
     * FlowActor
     * @param nodeId
     * @param state
     * @returns {Promise<boolean>}
     */
    ['node-valid-update'](
      // 节点id
      nodeId: string,
      // 有效状态
      state: boolean
    ): Promise<boolean>;

    /**
     * 节点参与人总数
     * FlowActor
     * @param nodeId
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['node2User-count'](
      // 节点id
      nodeId: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 增加节点参与人
     * FlowActor
     * @param workflowId
     * @param node2User
     * @returns {Promise<Node2User>}
     */
    ['node2User-create'](
      // 工作流id
      workflowId: string,
      // 节点参与人对象
      node2User: Node2User
    ): Promise<Node2User>;

    /**
     * 删除节点参与人
     * FlowActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['node2User-delete'](
      // 节点参与人对象
      ids: string[]
    ): Promise<number>;

    /**
     * 根据id获取节点参与人对象
     * FlowActor
     * @param id
     * @returns {Promise<Node2User>}
     */
    ['node2User-get'](
      // 节点参与人id
      id: string
    ): Promise<Node2User>;

    /**
     * 节点参与人列表
     * FlowActor
     * @param nodeId
     * @returns {Promise<any[][]>}
     */
    ['node2User-gird-list'](
      // 节点参与人对象
      nodeId: string
    ): Promise<any[][]>;

    /**
     * 编辑节点参与人
     * FlowActor
     * @param node2User
     * @returns {Promise<number>}
     */
    ['node2User-update'](
      // 节点参与人对象
      node2User: Node2User
    ): Promise<number>;

    /**
     * 输出配置-批量绑定-表头
     * FlowActor
     * @param tid
     * @param flowId
     * @param nodeId
     * @param formId
     * @param fieldType
     * @param fieldCode
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['outPutConfig-batch-grid-count'](
      // 表格标识
      tid: string,
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单id
      formId: string,
      // 字段类型
      fieldType: string,
      // 字段标识
      fieldCode: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 输出配置-批量绑定-表数据
     * FlowActor
     * @param tid
     * @param orders
     * @param flowId
     * @param nodeId
     * @param formId
     * @param fieldType
     * @param fieldCode
     * @param outPutType
     * @returns {Promise<ApiCore.GridData>}
     */
    ['outPutConfig-batch-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单id
      formId: string,
      // 字段类型
      fieldType: string,
      // 字段标识
      fieldCode: string,
      // 输出配置类型
      outPutType: string
    ): Promise<ApiCore.GridData>;

    /**
     * 输出配置-绑定
     * FlowActor
     * @param nodeId
     * @param outPutType
     * @param datas
     * @param isBatch
     * @returns {Promise<boolean>}
     */
    ['outPutConfig-bind'](
      // 节点id
      nodeId: string,
      // 输出配置类型
      outPutType: string,
      // 输出配置
      datas: OutPutConfig[],
      // 是否批量绑定
      isBatch: boolean
    ): Promise<boolean>;

    /**
     * 输出配置-表单字段-表头
     * FlowActor
     * @param tid
     * @param flowId
     * @param nodeId
     * @param formId
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['outPutConfig-form-property-grid-count'](
      // 表格标识
      tid: string,
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单code
      formId: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 输出配置-表单字段-表数据
     * FlowActor
     * @param tid
     * @param orders
     * @param flowId
     * @param nodeId
     * @param formId
     * @param outPutType
     * @returns {Promise<ApiCore.GridData>}
     */
    ['outPutConfig-form-property-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 工作流id
      flowId: string,
      // 节点id
      nodeId: string,
      // 表单id
      formId: string,
      // 输出配置类型
      outPutType: string
    ): Promise<ApiCore.GridData>;

    /**
     * 输出配置-根据工作流和节点id获取输出到库表模式的表单
     * FlowActor
     * @param wordFlowId
     * @param nodeId
     * @param outPutType
     * @returns {Promise<FormCategoryView[]>}
     */
    ['outPutConfig-get-formCategory'](
      // 工作流id
      wordFlowId: string,
      // 节点id
      nodeId: string,
      // 输出配置类型
      outPutType: string
    ): Promise<FormCategoryView[]>;

    /**
     * 输出配置-解绑
     * FlowActor
     * @param nodeId
     * @param fromId
     * @param fromCode
     * @param outPutType
     * @returns {Promise<boolean>}
     */
    ['outPutConfig-unbind'](
      // 节点id
      nodeId: string,
      // 比较表单id
      fromId: string,
      // 比较字段code(不传则批量解绑)
      fromCode: string,
      // 输出配置类型
      outPutType: string
    ): Promise<boolean>;

    /**
     * 重置默认值
     * ParametersActor
     * @param tCode
     * @param scCode
     * @param parCode
     * @returns {Promise<ParametersGrid>}
     */
    ['parameters-acquiescence'](
      // 租户标识
      tCode: string,
      // 租户系统组件标识
      scCode: string,
      // 参数标识
      parCode: string
    ): Promise<ParametersGrid>;

    /**
     * 查询单个参数
     * ParametersActor
     * @param tCode
     * @param scCode
     * @param parCode
     * @returns {Promise<ParametersGrid>}
     */
    ['parameters-getCodeParameters'](
      // 租户标识
      tCode: string,
      // 组件标识
      scCode: string,
      // 参数标识
      parCode: string
    ): Promise<ParametersGrid>;

    /**
     * 获取组件参数表头
     * ParametersActor
     * @param tid
     * @param scCode
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['parameters-grid-count'](
      // 表格标识
      tid: string,
      // 组件标识
      scCode: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 租户参数列表
     * ParametersActor
     * @param tid
     * @param scCode
     * @param tCode
     * @param orders
     * @returns {Promise<ApiCore.GridData>}
     */
    ['parameters-list'](
      // 表格标识
      tid: string,
      // 组件标识
      scCode: string,
      // 租户唯一标识
      tCode: string,
      // 排序
      orders: ApiCore.KV[]
    ): Promise<ApiCore.GridData>;

    /**
     * 修改参数默认值
     * ParametersActor
     * @param data
     * @returns {Promise<ParametersGrid>}
     */
    ['parameters-update'](
      // 租户组件参数对象
      data: Parameters
    ): Promise<ParametersGrid>;

    /**
     * 增加流程管理数据
     * ProcessManagementActor
     * @param map
     * @returns {Promise<ProcessManagement>}
     */
    ['process-management-create'](
      // 流程管理数据
      map: any
    ): Promise<ProcessManagement>;

    /**
     * 删除流程管理数据
     * ProcessManagementActor
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['process-management-delete'](
      // 流程管理序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条流程管理数据
     * ProcessManagementActor
     * @param id
     * @returns {Promise<ProcessManagement>}
     */
    ['process-management-get'](
      // 流程管理数据
      id: string
    ): Promise<ProcessManagement>;

    /**
     * 获取流程管理表格总数信息
     * ProcessManagementActor
     * @param tid
     * @param type
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['process-management-grid-count'](
      // 表格标识
      tid: string,
      // 类型
      type: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取流程管理表格列表数据
     * ProcessManagementActor
     * @param tid
     * @param type
     * @param searchText
     * @param orders
     * @returns {Promise<ApiCore.GridData>}
     */
    ['process-management-grid-list'](
      // 表格标识
      tid: string,
      // 类型
      type: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[]
    ): Promise<ApiCore.GridData>;

    /**
     * 获取流程管理表格分页列表数据
     * ProcessManagementActor
     * @param tid
     * @param type
     * @param searchText
     * @param orders
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['process-management-grid-list-page'](
      // 表格标识
      tid: string,
      // 流程大类(WorkflowCategory)
      type: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[],
      // 当前页
      page: number,
      // 当前页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 获取流程管理下拉数据
     * ProcessManagementActor
     * @param type
     * @returns {Promise<ProcessManagementSelect[]>}
     */
    ['process-management-select'](
      // 类型
      type: string
    ): Promise<ProcessManagementSelect[]>;

    /**
     * 更新流程管理数据
     * ProcessManagementActor
     * @param map
     * @returns {Promise<ProcessManagement>}
     */
    ['process-management-update'](
      // 流程管理数据
      map: any
    ): Promise<ProcessManagement>;

    /**
     * 增加产品数据
     * ProductActor
     * @param data
     * @returns {Promise<ProductGridRes>}
     */
    ['product-create'](
      // 产品数据对象
      data: Product
    ): Promise<ProductGridRes>;

    /**
     * 删除产品数据
     * ProductActor
     * @param reqs
     * @returns {Promise<boolean>}
     */
    ['product-delete'](
      // 产品请求数据对象数组
      reqs: ProductReq[]
    ): Promise<boolean>;

    /**
     * 获取产品详情数据
     * ProductActor
     * @param id
     * @returns {Promise<ProductDetailRes>}
     */
    ['product-details-datas-get'](
      // 产品序号
      id: string
    ): Promise<ProductDetailRes>;

    /**
     * 更新产品的设备属性数据
     * ProductActor
     * @param id
     * @param cId
     * @param dpIds
     * @returns {Promise<boolean>}
     */
    ['product-deviceproperty-update'](
      // 产品序号
      id: string,
      // 设备种类序号
      cId: string,
      // 产品功能序号(逗号分隔)
      dpIds: string
    ): Promise<boolean>;

    /**
     * 获取单条产品数据
     * ProductActor
     * @param id
     * @returns {Promise<ProductGridRes>}
     */
    ['product-get'](
      // 产品序号
      id: string
    ): Promise<ProductGridRes>;

    /**
     * 获取产品的表格总数信息
     * ProductActor
     * @param tid
     * @param icode
     * @param dccode
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['product-grid-count'](
      // 表格标识
      tid: string,
      // 行业标识
      icode: string,
      // 设备种类标识
      dccode: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取产品的表格列表数据
     * ProductActor
     * @param tid
     * @param icode
     * @param dccode
     * @param orders
     * @param searchText
     * @returns {Promise<ApiCore.GridData>}
     */
    ['product-grid-list'](
      // 表格标识
      tid: string,
      // 行业标识
      icode: string,
      // 设备种类标识
      dccode: string,
      // 排序
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridData>;

    /**
     * 获取产品的产品功能数据
     * ProductActor
     * @param dccode
     * @returns {Promise<ProductFunctionData[]>}
     */
    ['product-mfunction-list'](
      // 设备种类标识
      dccode: string
    ): Promise<ProductFunctionData[]>;

    /**
     * 更改产品的产品功能数据
     * ProductActor
     * @param id
     * @param mfIds
     * @returns {Promise<boolean>}
     */
    ['product-mfunction-update'](
      // 产品序号
      id: string,
      // 产品功能序号(逗号分隔)
      mfIds: string
    ): Promise<boolean>;

    /**
     * 获取产品的型号属性/设备属性数据
     * ProductActor
     * @param dccode
     * @param type
     * @returns {Promise<DevicePropertyData[]>}
     */
    ['product-modelprop-list'](
      // 设备种类标识
      dccode: string,
      // 属性类型
      type: number
    ): Promise<DevicePropertyData[]>;

    /**
     * 更新产品的型号属性数据
     * ProductActor
     * @param id
     * @param modelIds
     * @returns {Promise<boolean>}
     */
    ['product-modelproperty-update'](
      // 产品序号
      id: string,
      // 产品功能序号(逗号分隔)
      modelIds: string
    ): Promise<boolean>;

    /**
     * 根据设备种类序号获取产品的下拉数据
     * ProductActor
     * @param dccode
     * @returns {Promise<ProductSelect[]>}
     */
    ['product-select-get'](
      // 设备种类标识
      dccode: string
    ): Promise<ProductSelect[]>;

    /**
     * 更新型号数据
     * ProductActor
     * @param data
     * @returns {Promise<ProductGridRes>}
     */
    ['product-update'](
      // 产品数据对象
      data: Product
    ): Promise<ProductGridRes>;

    /**
     * 增加项目名片数据
     * ProjectCardActor
     * @param data
     * @returns {Promise<ProjectCard>}
     */
    ['project-card-create'](
      // 项目名片数据
      data: ProjectCard
    ): Promise<ProjectCard>;

    /**
     * 删除项目名片数据
     * ProjectCardActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['project-card-delete'](
      // 名片序号数组
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条项目名片数据
     * ProjectCardActor
     * @param id
     * @returns {Promise<ProjectCard>}
     */
    ['project-card-get'](
      // 项目名片序号
      id: string
    ): Promise<ProjectCard>;

    /**
     * 获取项目通讯录名片的表格总数信息
     * ProjectCardActor
     * @param tid
     * @param bid
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['project-card-grid-count'](
      // 表格标识
      tid: string,
      // 通讯录id
      bid: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取项目名片的表格列表数据-分页
     * ProjectCardActor
     * @param tid
     * @param orders
     * @param bid
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['project-card-grid-list-page'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 项目通讯录id
      bid: string,
      // 页码
      page: number,
      // 页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 更新项目名片数据
     * ProjectCardActor
     * @param data
     * @returns {Promise<ProjectCard>}
     */
    ['project-card-update'](
      // 项目名片数据
      data: ProjectCard
    ): Promise<ProjectCard>;

    /**
     * 获取项目包含城市下拉框
     * ProjectActor
     * @returns {Promise<CityRes[]>}
     */
    ['project-city-list'](): Promise<CityRes[]>;

    /**
     * 增加项目数据
     * ProjectActor
     * @param data
     * @returns {Promise<Project>}
     */
    ['project-create'](
      // 项目数据
      data: Project
    ): Promise<Project>;

    /**
     * 删除项目数据
     * ProjectActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['project-delete'](
      // 项目序号数组
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条项目详情
     * ProjectActor
     * @param id
     * @returns {Promise<ProjectDetail>}
     */
    ['project-get'](
      // 项目序号
      id: string
    ): Promise<ProjectDetail>;

    /**
     * 获取项目的表格总数信息
     * ProjectActor
     * @param tid
     * @param did
     * @param code
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['project-grid-count'](
      // 表格标识
      tid: string,
      // 城市id
      did: string,
      // 租户code
      code: string,
      // 项目名称
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取项目的表格列表数据-分页
     * ProjectActor
     * @param tid
     * @param orders
     * @param did
     * @param code
     * @param searchText
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['project-grid-list-page'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 城市id
      did: string,
      // 租户code
      code: string,
      // 项目名称(根据当前语言)
      searchText: string,
      // 页码
      page: number,
      // 页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 项目上线
     * ProjectActor
     * @param id
     * @returns {Promise<number>}
     */
    ['project-online'](
      // 项目id
      id: string
    ): Promise<number>;

    /**
     * 获取项目包含租户下拉框
     * ProjectActor
     * @returns {Promise<TenantComboBox[]>}
     */
    ['project-tenant-list'](): Promise<TenantComboBox[]>;

    /**
     * 更新项目数据
     * ProjectActor
     * @param data
     * @returns {Promise<Project>}
     */
    ['project-update'](
      // 项目数据
      data: Project
    ): Promise<Project>;

    /**
     * 增加通信协议数据
     * CommunicationProtocolActor
     * @param data
     * @returns {Promise<CommunicationProtocol>}
     */
    ['protocol-create'](
      // 通信协议数据对象
      data: CommunicationProtocol
    ): Promise<CommunicationProtocol>;

    /**
     * 删除通信协议数据
     * CommunicationProtocolActor
     * @param dccode
     * @param ids
     * @returns {Promise<number>}
     */
    ['protocol-delete'](
      // 设备设备种类标识
      dccode: string,
      // 通信协议序号数据
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条通信协议数据
     * CommunicationProtocolActor
     * @param id
     * @returns {Promise<CommunicationProtocol>}
     */
    ['protocol-get'](
      // 通信协议序号
      id: string
    ): Promise<CommunicationProtocol>;

    /**
     * 获取表格总数信息
     * CommunicationProtocolActor
     * @param tid
     * @param dccode
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['protocol-grid-count'](
      // 表格标识
      tid: string,
      // 设备种类标识
      dccode: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取表格列表数据
     * CommunicationProtocolActor
     * @param tid
     * @param dccode
     * @param orders
     * @returns {Promise<ApiCore.GridData>}
     */
    ['protocol-grid-list'](
      // 表格标识
      tid: string,
      // 设备种类标识
      dccode: string,
      // 排序
      orders: ApiCore.KV[]
    ): Promise<ApiCore.GridData>;

    /**
     * 获取设备模组的通讯协议下拉数据
     * CommunicationProtocolActor
     * @param dccode
     * @returns {Promise<CommProtocolSelect[]>}
     */
    ['protocol-select-get'](
      // 设备设备种类标识
      dccode: string
    ): Promise<CommProtocolSelect[]>;

    /**
     * 更新通信协议数据
     * CommunicationProtocolActor
     * @param data
     * @returns {Promise<CommunicationProtocol>}
     */
    ['protocol-update'](
      // 通信协议数据对象
      data: CommunicationProtocol
    ): Promise<CommunicationProtocol>;

    /**
     * 校验库名称
     * ResourceActor
     * @param dbName
     * @returns {Promise<boolean>}
     */
    ['resource-DataResource-check-dbName'](
      // 库名称
      dbName: string
    ): Promise<boolean>;

    /**
     * 备份
     * ResourceActor
     * @param backupStrategy
     * @param backupContent
     * @param tCode
     * @param userId
     * @returns {Promise<BackupRecord>}
     */
    ['resource-backup'](
      // 备份策略
      backupStrategy: string,
      // 备份内容
      backupContent: string,
      // 租户标识
      tCode: string,
      // 备份者
      userId: string
    ): Promise<BackupRecord>;

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
      // 租户标识
      tCode: string,
      // 要修改密码的数据库名称
      dbName: string,
      // 要修改密码的数据库用户名
      dbUsername: string,
      // 新密码
      newPassword: string
    ): Promise<boolean>;

    /**
     * 根据租户标识获取其所有资源数据
     * ResourceActor
     * @param tCode
     * @returns {Promise<AllResponse>}
     */
    ['resource-get'](
      // 租户标识
      tCode: string
    ): Promise<AllResponse>;

    /**
     * 获取备份表格总数信息
     * ResourceActor
     * @param tid
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['resource-grid-count'](
      // 表格标识
      tid: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取备份表格列表数据
     * ResourceActor
     * @param tid
     * @param startTime
     * @param endTime
     * @returns {Promise<ApiCore.GridData>}
     */
    ['resource-grid-list'](
      // 表格标识
      tid: string,
      // 开始时间
      startTime: number,
      // 结束时间
      endTime: number
    ): Promise<ApiCore.GridData>;

    /**
     * 展示备份记录列表
     * ResourceActor
     * @param tCode
     * @returns {Promise<BackupRecord[]>}
     */
    ['resource-list-backupRecord'](
      //
      tCode: string
    ): Promise<BackupRecord[]>;

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
      // 备份路径
      mongo_file_path: string,
      // 备份文件（夹）名
      fileNameMongo: string,
      // 租户标识
      tCode: string,
      // 工程密码
      password: string
    ): Promise<boolean>;

    /**
     * 更新行业资源信息
     * ResourceActor
     * @param data
     * @returns {Promise<number>}
     */
    ['resource-update-CapacityConfig'](
      // 行业资源
      data: CapacityConfig
    ): Promise<number>;

    /**
     * 更新计算资源信息
     * ResourceActor
     * @param data
     * @returns {Promise<number>}
     */
    ['resource-update-ComputingResource'](
      // 计算资源
      data: ComputingResource
    ): Promise<number>;

    /**
     * 更新数据备份信息
     * ResourceActor
     * @param data
     * @returns {Promise<number>}
     */
    ['resource-update-DataBackup'](
      // 数据备份
      data: DataBackup
    ): Promise<number>;

    /**
     * 更新数据资源信息
     * ResourceActor
     * @param data
     * @param isChangedUsername
     * @returns {Promise<number>}
     */
    ['resource-update-DataResource'](
      // 数据资源
      data: DataResource,
      // 是否修改了库用户名
      isChangedUsername: boolean
    ): Promise<number>;

    /**
     * 根据工作流id和表单类型搜索表单级字段(计算公式用)
     * FlowActor
     * @param wordFlowId
     * @param search
     * @returns {Promise<FormAndFieldTree[]>}
     */
    ['search-form-and-field'](
      // 工作流id
      wordFlowId: string,
      // 搜索内容
      search: string
    ): Promise<FormAndFieldTree[]>;

    /**
     * 根据工作流id和名字搜索表单
     * FlowActor
     * @param wordFlowId
     * @param search
     * @returns {Promise<FormCategory[]>}
     */
    ['search-form-by-fId'](
      // 工作流id
      wordFlowId: string,
      // 搜索内容
      search: string
    ): Promise<FormCategory[]>;

    /**
     * 系统组件的表格列表数据
     * BackupSysComponentActor
     * @param tid
     * @param category
     * @param tCode
     * @param orders
     * @param searchText
     * @param isModify
     * @returns {Promise<ApiCore.GridData>}
     */
    ['sys-BackupSysComponent-grid-list'](
      // 表格标识
      tid: string,
      // 系统组件分类cCode
      category: string,
      // 租户标识
      tCode: string,
      // 排序
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string,
      // 是否修改 true为显示全部/false为已修改
      isModify: boolean
    ): Promise<ApiCore.GridData>;

    /**
     * 获取应用系统分类下拉框
     * SysAppActor
     * @returns {Promise<AppCategorySelect[]>}
     */
    ['sys-app-category-select'](): Promise<AppCategorySelect[]>;

    /**
     * 根据应用code列表获取应用名称列表
     * SysAppActor
     * @param codes
     * @returns {Promise<string>}
     */
    ['sys-app-code-to-name'](
      // 应用codes(逗号分隔)
      codes: string
    ): Promise<string>;

    /**
     * 增加系统应用数据
     * SysAppActor
     * @param data
     * @param name
     * @returns {Promise<SysApp>}
     */
    ['sys-app-create'](
      // 系统应用数据
      data: SysApp,
      // 系统应用名称(国际化)
      name: string
    ): Promise<SysApp>;

    /**
     * 获取应用下拉数据
     * SysAppActor
     * @returns {Promise<SysAppSelect[]>}
     */
    ['sys-app-data-select'](): Promise<SysAppSelect[]>;

    /**
     * 删除系统应用数据
     * SysAppActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['sys-app-delete'](
      // 系统应用唯一标识数组
      ids: string[]
    ): Promise<number>;

    /**
     * 拿到所有系统应用
     * SysAppActor
     * @returns {Promise<SysAppView[]>}
     */
    ['sys-app-findAll'](): Promise<SysAppView[]>;

    /**
     * 获取单条系统应用数据
     * SysAppActor
     * @param id
     * @returns {Promise<SysApp>}
     */
    ['sys-app-get'](
      // 系统应用唯一标识
      id: string
    ): Promise<SysApp>;

    /**
     * 根据应用code获取应用
     * SysAppActor
     * @param code
     * @returns {Promise<SysApp>}
     */
    ['sys-app-get-by-code'](
      // 应用code
      code: string
    ): Promise<SysApp>;

    /**
     * 根据父级节点获取子系统应用的表格总数信息
     * SysAppActor
     * @param tid
     * @param searchText
     * @param category
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['sys-app-grid-count'](
      // 表格标识
      tid: string,
      // 搜索内容
      searchText: string,
      // 系统分类
      category: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 根据父级节点获取子系统应用的表格列表数据
     * SysAppActor
     * @param tid
     * @param orders
     * @param searchText
     * @param category
     * @returns {Promise<ApiCore.GridData>}
     */
    ['sys-app-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string,
      // 系统分类code
      category: string
    ): Promise<ApiCore.GridData>;

    /**
     * 获取应用名称数据
     * SysAppActor
     * @param code
     * @returns {Promise<string>}
     */
    ['sys-app-name-get'](
      // 应用code
      code: string
    ): Promise<string>;

    /**
     * 获取系统应用下拉数据(一级分类，二级应用)
     * SysAppActor
     * @returns {Promise<SysAppRes[]>}
     */
    ['sys-app-select'](): Promise<SysAppRes[]>;

    /**
     * 根据应用分类获取应用列表(不过滤)
     * SysAppActor
     * @param type
     * @param langCode
     * @returns {Promise<SysAppSelect[]>}
     */
    ['sys-app-select-all-by-category'](
      // 应用分类(0数据中台1业务中台2应用系统3系统菜单，其他查所有)
      type: string,
      // 语言标识
      langCode: string
    ): Promise<SysAppSelect[]>;

    /**
     * 根据应用分类获取应用列表
     * SysAppActor
     * @param type
     * @param langCode
     * @returns {Promise<SysAppSelect[]>}
     */
    ['sys-app-select-by-category'](
      // 应用分类(0数据中台1业务中台2应用系统3系统菜单，其他查所有)
      type: string,
      // 语言标识
      langCode: string
    ): Promise<SysAppSelect[]>;

    /**
     * 应用授权-租户获取系统下拉
     * SysAppActor
     * @param tcode
     * @param isFilter
     * @returns {Promise<SysAppRes[]>}
     */
    ['sys-app-select-to-tenant'](
      // 租户code
      tcode: string,
      // 是否过滤已授权应用
      isFilter: boolean
    ): Promise<SysAppRes[]>;

    /**
     * 创建租户-系统下拉
     * SysAppActor
     * @returns {Promise<SysAppRes[]>}
     */
    ['sys-app-select-to-tenant-create'](): Promise<SysAppRes[]>;

    /**
     * 上移下移(序号交换)
     * SysAppActor
     * @param ids
     * @returns {Promise<string>}
     */
    ['sys-app-up-down'](
      // 需要交换的系统应用唯一标识数组(2个值)
      ids: string[]
    ): Promise<string>;

    /**
     * 更新系统应用数据
     * SysAppActor
     * @param data
     * @param name
     * @returns {Promise<SysApp>}
     */
    ['sys-app-update'](
      // 系统应用数据
      data: SysApp,
      // 系统应用名称(国际化)
      name: string
    ): Promise<SysApp>;

    /**
     * 增加系统组件数据
     * SysComponentActor
     * @param data
     * @param name
     * @returns {Promise<SysComponentGrid>}
     */
    ['sys-component-create'](
      // 系统组件数据
      data: SysComponent,
      // 系统组件名称(国际化)
      name: string
    ): Promise<SysComponentGrid>;

    /**
     * 删除系统组件数据
     * SysComponentActor
     * @param codes
     * @returns {Promise<number>}
     */
    ['sys-component-delete'](
      // 系统组件唯一标识数组
      codes: string[]
    ): Promise<number>;

    /**
     * 获取单条系统组件数据
     * SysComponentActor
     * @param code
     * @returns {Promise<SysComponentGrid>}
     */
    ['sys-component-get'](
      // 系统组件唯一标识
      code: string
    ): Promise<SysComponentGrid>;

    /**
     * 获取系统组件的表格总数信息
     * SysComponentActor
     * @param tid
     * @param cCode
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['sys-component-grid-count'](
      // 表格标识
      tid: string,
      // 系统组件分类cCode
      cCode: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 系统组件的表格列表数据-分页
     * SysComponentActor
     * @param tid
     * @param category
     * @param orders
     * @param searchText
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['sys-component-grid-list-Page'](
      // 表格标识
      tid: string,
      // 系统组件分类cCode
      category: string,
      // 排序
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string,
      // 页码
      page: number,
      // 页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 更新系统组件数据
     * SysComponentActor
     * @param data
     * @param name
     * @returns {Promise<SysComponentGrid>}
     */
    ['sys-component-update'](
      // 系统组件数据
      data: SysComponent,
      // 系统组件名称(国际化)
      name: string
    ): Promise<SysComponentGrid>;

    /**
     * 获取系统组件功能的表格总数信息
     * SysComponentFuncActor
     * @param tid
     * @param scCode
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['sys-function-grid-count'](
      // 表格标识
      tid: string,
      // 所属系统组件标识
      scCode: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 增加组件功能数据
     * SysComponentFuncActor
     * @param data
     * @param name
     * @returns {Promise<SysFunctions>}
     */
    ['sys-functions-create'](
      // 组件功能数据
      data: SysFunctions,
      // 组件功能名称(国际化)
      name: string
    ): Promise<SysFunctions>;

    /**
     * 删除组件功能数据
     * SysComponentFuncActor
     * @param ids
     * @param scCode
     * @returns {Promise<number>}
     */
    ['sys-functions-delete'](
      // 所属系统组件标识数组
      ids: string[],
      //
      scCode: string
    ): Promise<number>;

    /**
     * 获取单条数据
     * SysComponentFuncActor
     * @param id
     * @returns {Promise<SysFunctions>}
     */
    ['sys-functions-getById'](
      //
      id: string
    ): Promise<SysFunctions>;

    /**
     * 系统组件功能的表格列表数据
     * SysComponentFuncActor
     * @param tid
     * @param scCode
     * @param orders
     * @param searchText
     * @returns {Promise<ApiCore.GridData>}
     */
    ['sys-functions-grid-list'](
      // 表格标识
      tid: string,
      // 所属系统组件标识
      scCode: string,
      // 排序
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridData>;

    /**
     * 更新组件功能数据
     * SysComponentFuncActor
     * @param data
     * @param name
     * @returns {Promise<SysFunctions>}
     */
    ['sys-functions-update'](
      // 组件分类数据
      data: SysFunctions,
      // 组件分类名称(国际化)
      name: string
    ): Promise<SysFunctions>;

    /**
     * 增加系统模块数据
     * SysModuleActor
     * @param data
     * @returns {Promise<SysModule>}
     */
    ['sys-module-create'](
      // 系统模块数据
      data: SysModule
    ): Promise<SysModule>;

    /**
     * 删除系统模块数据
     * SysModuleActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['sys-module-delete'](
      // 系统模块序号数组
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条系统模块数据
     * SysModuleActor
     * @param id
     * @returns {Promise<SysModule>}
     */
    ['sys-module-get'](
      // 系统模块序号
      id: string
    ): Promise<SysModule>;

    /**
     * 获取应用模块名称数据
     * SysModuleActor
     * @param sCode
     * @param mCode
     * @param langCode
     * @returns {Promise<string>}
     */
    ['sys-module-name-get'](
      // 系统应用节点
      sCode: string,
      // 应用模块节点
      mCode: string,
      // 语言表示
      langCode: string
    ): Promise<string>;

    /**
     * 更新系统模块数据
     * SysModuleActor
     * @param data
     * @returns {Promise<SysModule>}
     */
    ['sys-module-update'](
      // 系统模块数据
      data: SysModule
    ): Promise<SysModule>;

    /**
     * 上移下移(序号交换)
     * SysPageActor
     * @param ids
     * @returns {Promise<string>}
     */
    ['sys-page-up-down'](
      // 需要交换的系统应用唯一标识数组(2个值)
      ids: string[]
    ): Promise<string>;

    /**
     * 获取系统组件分类目录树列表数据
     * SysComponentActor
     * @param tid
     * @param orders
     * @param searchText
     * @returns {Promise<SysClassifyGrid[]>}
     */
    ['sys-sysClassify-tree-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string
    ): Promise<SysClassifyGrid[]>;

    /**
     * 增加组件分类数据
     * SysComponentActor
     * @param data
     * @param name
     * @param sCode
     * @returns {Promise<SysClassify>}
     */
    ['sysClassify-create'](
      // 组件分类数据
      data: SysClassify,
      // 组件分类名称(国际化)
      name: string,
      // 节点id
      sCode: string
    ): Promise<SysClassify>;

    /**
     * 删除组件分类数据
     * SysComponentActor
     * @param id
     * @returns {Promise<number>}
     */
    ['sysClassify-delete'](
      // 组件分类唯一标识
      id: string
    ): Promise<number>;

    /**
     * 通过唯一标识获取到组件分类数据
     * SysComponentActor
     * @param code
     * @returns {Promise<SysClassify>}
     */
    ['sysClassify-get'](
      // 组件分类唯一标识
      code: string
    ): Promise<SysClassify>;

    /**
     * 更新组件分类数据
     * SysComponentActor
     * @param data
     * @param name
     * @returns {Promise<SysClassify>}
     */
    ['sysClassify-update'](
      // 组件分类数据
      data: SysClassify,
      // 组件分类名称(国际化)
      name: string
    ): Promise<SysClassify>;

    /**
     * 获取系统信息数据
     * SystemInfoActor
     * @returns {Promise<SystemInfo>}
     */
    ['sysinfo-data'](): Promise<SystemInfo>;

    /**
     * 获取单条系统信息数据
     * SystemInfoActor
     * @param id
     * @returns {Promise<SystemInfo>}
     */
    ['sysinfo-get'](
      // 系统信息序号
      id: string
    ): Promise<SystemInfo>;

    /**
     * 设置系统信息数据
     * SystemInfoActor
     * @param password
     * @returns {Promise<SystemInfo>}
     */
    ['sysinfo-set'](
      // 工程密码
      password: string
    ): Promise<SystemInfo>;

    /**
     * 退出表格编辑
     * SystemInfoActor
     * @param tname
     * @returns {Promise<boolean>}
     */
    ['sysinfo-unlocktable-close'](
      // 表名
      tname: string
    ): Promise<boolean>;

    /**
     * 增加解锁表编辑信息数据
     * SystemInfoActor
     * @param data
     * @returns {Promise<UnlockTable>}
     */
    ['sysinfo-unlocktable-create'](
      // 解锁表编辑信息数据
      data: UnlockTable
    ): Promise<UnlockTable>;

    /**
     * 解锁表格编辑
     * SystemInfoActor
     * @param tname
     * @param password
     * @returns {Promise<boolean>}
     */
    ['sysinfo-unlocktable-open'](
      // 表名
      tname: string,
      // 工程密码
      password: string
    ): Promise<boolean>;

    /**
     * 修改工程密码数据
     * SystemInfoActor
     * @param id
     * @param oldPassword
     * @param newPassword
     * @returns {Promise<boolean>}
     */
    ['sysinfo-update-engineering-password'](
      // 系统信息序号
      id: string,
      // 原工程密码
      oldPassword: string,
      // 新工程密码
      newPassword: string
    ): Promise<boolean>;

    /**
     * 增加系统语言数据
     * SystemLanguageActor
     * @param data
     * @returns {Promise<SystemLanguage>}
     */
    ['syslanguage-create'](
      // 系统语言数据
      data: SystemLanguage
    ): Promise<SystemLanguage>;

    /**
     * 删除系统语言数据
     * SystemLanguageActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['syslanguage-delete'](
      // 系统语言标识数组
      ids: string[]
    ): Promise<number>;

    /**
     * 获取单条系统语言数据
     * SystemLanguageActor
     * @param id
     * @returns {Promise<SystemLanguage>}
     */
    ['syslanguage-get'](
      // 系统语言序号
      id: string
    ): Promise<SystemLanguage>;

    /**
     * 获取表格总数信息
     * SystemLanguageActor
     * @param tid
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['syslanguage-grid-count'](
      // 表格标识
      tid: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取表格列表数据
     * SystemLanguageActor
     * @param tid
     * @param orders
     * @param searchText
     * @returns {Promise<ApiCore.GridData>}
     */
    ['syslanguage-grid-list'](
      // 表格标识
      tid: string,
      // 数据排序条件
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridData>;

    /**
     * 获取分页表格列表数据
     * SystemLanguageActor
     * @param tid
     * @param orders
     * @param searchText
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['syslanguage-grid-list-page'](
      // 表格标识
      tid: string,
      // 数据排序条件
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string,
      // 当前页
      page: number,
      // 当前页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 获取存在的语言分类数据
     * SystemLanguageActor
     * @returns {Promise<LanguageTypeRes[]>}
     */
    ['syslanguage-types-get'](): Promise<LanguageTypeRes[]>;

    /**
     * 更新系统语言数据
     * SystemLanguageActor
     * @param data
     * @returns {Promise<SystemLanguage>}
     */
    ['syslanguage-update'](
      // 系统语言数据
      data: SystemLanguage
    ): Promise<SystemLanguage>;

    /**
     * 获取系统概况详情数据
     * SystemOverviewActor
     * @returns {Promise<SystemOverviewRes>}
     */
    ['sysoverview-data-get'](): Promise<SystemOverviewRes>;

    /**
     * 获取单条系统概况数据
     * SystemOverviewActor
     * @param id
     * @returns {Promise<SystemOverview>}
     */
    ['sysoverview-get'](
      // 系统概况序号
      id: string
    ): Promise<SystemOverview>;

    /**
     * 更新系统概况数据
     * SystemOverviewActor
     * @param data
     * @returns {Promise<SystemOverview>}
     */
    ['sysoverview-update'](
      // 系统概况数据
      data: SystemOverview
    ): Promise<SystemOverview>;

    /**
     * 删除系统组件参数数据
     * SysComponentParmActor
     * @param pcode
     * @param codes
     * @returns {Promise<boolean>}
     */
    ['system-component-parm-delete'](
      // 组件code
      pcode: string,
      // 组件参数code数组
      codes: string[]
    ): Promise<boolean>;

    /**
     * 获取单条系统组件参数数据
     * SysComponentParmActor
     * @param id
     * @returns {Promise<SysComponentDetail>}
     */
    ['system-component-parm-get'](
      // 组件参数id
      id: string
    ): Promise<SysComponentDetail>;

    /**
     * 获取系统组件参数表格总数信息
     * SysComponentParmActor
     * @param tid
     * @param scCode
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['system-component-parm-grid-count'](
      // 表格标识
      tid: string,
      // 系统组件唯一标识code
      scCode: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取系统组件参数表格列表数据
     * SysComponentParmActor
     * @param tid
     * @param orders
     * @param scCode
     * @param searchText
     * @returns {Promise<ApiCore.GridData>}
     */
    ['system-component-parm-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 系统组件唯一标识code
      scCode: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridData>;

    /**
     * 增加系统字段数据
     * SystemFieldActor
     * @param map
     * @returns {Promise<SystemField>}
     */
    ['system-field-create'](
      // 系统字段数据
      map: any
    ): Promise<SystemField>;

    /**
     * 获取系统字段数据来源下拉数据
     * SystemFieldActor
     * @returns {Promise<DataSourceSelect[]>}
     */
    ['system-field-data-sources-select'](): Promise<DataSourceSelect[]>;

    /**
     * 删除系统字段数据
     * SystemFieldActor
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['system-field-delete'](
      // 系统字段序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条系统字段数据
     * SystemFieldActor
     * @param id
     * @returns {Promise<SystemField>}
     */
    ['system-field-get'](
      // 系统字段数据
      id: string
    ): Promise<SystemField>;

    /**
     * 获取系统字段表格总数信息
     * SystemFieldActor
     * @param tid
     * @param ctype
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['system-field-grid-count'](
      // 表格标识
      tid: string,
      // 系统字段分类类型
      ctype: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取系统字段表格列表数据
     * SystemFieldActor
     * @param tid
     * @param ctype
     * @param orders
     * @param searchText
     * @returns {Promise<ApiCore.GridData>}
     */
    ['system-field-grid-list'](
      // 表格标识
      tid: string,
      // 系统字段分类类型
      ctype: string,
      // 排序
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridData>;

    /**
     * 获取系统字段表格分页列表数据
     * SystemFieldActor
     * @param tid
     * @param ctype
     * @param orders
     * @param searchText
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['system-field-grid-list-page'](
      // 表格标识
      tid: string,
      // 系统字段分类类型
      ctype: string,
      // 排序
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string,
      // 当前页
      page: number,
      // 当前页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 更新系统字段数据
     * SystemFieldActor
     * @param map
     * @returns {Promise<SystemField>}
     */
    ['system-field-update'](
      // 系统字段数据
      map: any
    ): Promise<SystemField>;

    /**
     * 增加系统菜单数据
     * SystemMenuConfigActor
     * @param data
     * @returns {Promise<SystemMenuConfig>}
     */
    ['system-menu-config-create'](
      // 系统菜单数据对象
      data: SystemMenuConfig
    ): Promise<SystemMenuConfig>;

    /**
     * 删除系统菜单数据
     * SystemMenuConfigActor
     * @param ids
     * @returns {Promise<number>}
     */
    ['system-menu-config-delete'](
      // 系统菜单唯一标识数组
      ids: string[]
    ): Promise<number>;

    /**
     * 查询单个系统菜单对象
     * SystemMenuConfigActor
     * @param id
     * @returns {Promise<SystemMenuConfig>}
     */
    ['system-menu-config-getById'](
      // 系统菜单对象唯一标识
      id: string
    ): Promise<SystemMenuConfig>;

    /**
     * 获取系统菜单表头
     * SystemMenuConfigActor
     * @param tid
     * @param systemClassify
     * @param systemClass
     * @param theirLanguage
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['system-menu-config-grid-count'](
      // 表格标识
      tid: string,
      // 系统分类
      systemClassify: string,
      // 大系统分类
      systemClass: string,
      // 系统语言
      theirLanguage: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取使用授权的表格列表数据
     * SystemMenuConfigActor
     * @param tid
     * @param systemClassify
     * @param systemClass
     * @param theirLanguage
     * @param searchText
     * @param orders
     * @returns {Promise<ApiCore.GridData>}
     */
    ['system-menu-config-grid-list'](
      // 表格标识
      tid: string,
      // 系统分类
      systemClassify: string,
      // 大系统分类
      systemClass: string,
      // 系统语言
      theirLanguage: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[]
    ): Promise<ApiCore.GridData>;

    /**
     * 停车系统返回对象数组
     * SystemMenuConfigActor
     * @returns {Promise<SystemMenuConfig[]>}
     */
    ['system-menu-config-tree'](): Promise<SystemMenuConfig[]>;

    /**
     * 修改系统菜单数据
     * SystemMenuConfigActor
     * @param data
     * @returns {Promise<SystemMenuConfig>}
     */
    ['system-menu-config-update'](
      // 系统菜单对象
      data: SystemMenuConfig
    ): Promise<SystemMenuConfig>;

    /**
     * 增加菜单项
     * SystemMenuActor
     * @param positionType
     * @param selectId
     * @param data
     * @returns {Promise<boolean>}
     */
    ['system-menu-create'](
      // 菜单位置类型
      positionType: string,
      // 当前选中节点
      selectId: string,
      // 菜单数据
      data: SystemMenu
    ): Promise<boolean>;

    /**
     * 删除多个菜单数据
     * SystemMenuActor
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['system-menu-delete'](
      // 菜单序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条菜单数据
     * SystemMenuActor
     * @param id
     * @returns {Promise<SystemMenu>}
     */
    ['system-menu-get'](
      // 菜单序号
      id: string
    ): Promise<SystemMenu>;

    /**
     * 获取菜单的表格列表数据
     * SystemMenuActor
     * @param tcode
     * @param tsmcId
     * @returns {Promise<SystemMenuGrid[]>}
     */
    ['system-menu-grid-list'](
      // 租户标识
      tcode: string,
      // 租户系统菜单配置序号
      tsmcId: string
    ): Promise<SystemMenuGrid[]>;

    /**
     * 更新系统菜单层级顺序
     * SystemMenuActor
     * @param type
     * @param reqs
     * @param targetId
     * @returns {Promise<boolean>}
     */
    ['system-menu-level-order-update'](
      // 菜单层级顺序枚举类型
      type: string,
      // 菜单层级顺序数据数组
      reqs: MenuLevelOrderReq[],
      // 降级到目标菜单序号
      targetId: string
    ): Promise<boolean>;

    /**
     * 获取登录后转到指定页面下拉数据
     * SystemMenuActor
     * @param tcode
     * @param tsmcId
     * @returns {Promise<MenuLoginSpecifySelect[]>}
     */
    ['system-menu-login-specify-select'](
      // 租户标识
      tcode: string,
      // 租户系统菜单配置序号
      tsmcId: string
    ): Promise<MenuLoginSpecifySelect[]>;

    /**
     * 修改菜单项
     * SystemMenuActor
     * @param data
     * @returns {Promise<SystemMenu>}
     */
    ['system-menu-update'](
      // 菜单数据
      data: SystemMenu
    ): Promise<SystemMenu>;

    /**
     * 获取系统模块目录树数据
     * SysModuleActor
     * @param sCode
     * @param langCode
     * @returns {Promise<SysModuleVo[]>}
     */
    ['system-module-tree-list'](
      // 系统应用code
      sCode: string,
      // 语言标识
      langCode: string
    ): Promise<SysModuleVo[]>;

    /**
     * 增加系统应用页面
     * SysPageActor
     * @param data
     * @returns {Promise<SysAppPage>}
     */
    ['system-page-create'](
      // 系统应用页面数据
      data: SysAppPage
    ): Promise<SysAppPage>;

    /**
     * 删除系统应用页面数据
     * SysPageActor
     * @param ids
     * @returns {Promise<string>}
     */
    ['system-page-delete'](
      // 系统应用页面唯一标识数组
      ids: string[]
    ): Promise<string>;

    /**
     * 获取系统应用页面详情
     * SysPageActor
     * @param id
     * @returns {Promise<SysAppPageGrid>}
     */
    ['system-page-get'](
      // 项目序号
      id: string
    ): Promise<SysAppPageGrid>;

    /**
     * 获取系统应用页面的表格总数信息
     * SysPageActor
     * @param tid
     * @param sCode
     * @param mCode
     * @param langCode
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['system-page-grid-count'](
      // 表格标识
      tid: string,
      // 应用code
      sCode: string,
      // 模块code
      mCode: string,
      // 语言标识
      langCode: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取系统应用页面的表格列表数据
     * SysPageActor
     * @param tid
     * @param orders
     * @param sCode
     * @param mCode
     * @param langCode
     * @param searchText
     * @returns {Promise<ApiCore.GridData>}
     */
    ['system-page-grid-list'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 应用code
      sCode: string,
      // 系统模块code
      mCode: string,
      // 语言标识
      langCode: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridData>;

    /**
     * 根据模块code获取系统页面下拉
     * SysPageActor
     * @param sCode
     * @param mCode
     * @param langCode
     * @returns {Promise<SysAppPageSelect[]>}
     */
    ['system-page-select-by-mCode'](
      // 应用code
      sCode: string,
      // 模块code
      mCode: string,
      // 语言标识
      langCode: string
    ): Promise<SysAppPageSelect[]>;

    /**
     * 更新系统应用页面数据
     * SysPageActor
     * @param data
     * @returns {Promise<SysAppPage>}
     */
    ['system-page-update'](
      // 系统应用页面数据
      data: SysAppPage
    ): Promise<SysAppPage>;

    /**
     * 获取租户地址模式下拉数据
     * TenantActor
     * @returns {Promise<AddressTypeSelect[]>}
     */
    ['tenant-AddressType-select'](): Promise<AddressTypeSelect[]>;

    /**
     * 获取租户所属语言下拉数据
     * TenantActor
     * @returns {Promise<LanguageTypeSelect[]>}
     */
    ['tenant-LanguageType-select'](): Promise<LanguageTypeSelect[]>;

    /**
     * 增加租户数据
     * TenantActor
     * @param data
     * @param cap
     * @param dataRes
     * @param dcodes
     * @param menuIds
     * @param mapInfos
     * @returns {Promise<Tenant>}
     */
    ['tenant-create'](
      // 租户模板数据
      data: Tenant,
      // 容量配置
      cap: CapacityConfig,
      // 数据资源
      dataRes: DataResource,
      // 数据库标识数组
      dcodes: string[],
      // 建立菜单标识数组
      menuIds: string[],
      // 数据库对象
      mapInfos: MapInfo[]
    ): Promise<Tenant>;

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
     * 通过id获取到详细页面租户信息
     * TenantActor
     * @param id
     * @returns {Promise<TenantDetail>}
     */
    ['tenant-getById'](
      // 租户id
      id: string
    ): Promise<TenantDetail>;

    /**
     * 名称标识唯一校验
     * TenantActor
     * @param field
     * @param value
     * @returns {Promise<boolean>}
     */
    ['tenant-getVerifyCount'](
      // 字段名
      field: string,
      // 值
      value: string
    ): Promise<boolean>;

    /**
     * 获取租户表头
     * TenantActor
     * @param tid
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['tenant-grid-count'](
      // 表格标识
      tid: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 租户的表格列表数据（分页）
     * TenantActor
     * @param tid
     * @param orders
     * @param searchText
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['tenant-grid-list-page'](
      // 表格标识
      tid: string,
      // 排序
      orders: ApiCore.KV[],
      // 搜索内容
      searchText: string,
      // 当前页
      page: number,
      // 当前页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 动态下拉框
     * TenantActor
     * @param name
     * @returns {Promise<TenantComboBox[]>}
     */
    ['tenant-tenantType-ComboBox'](
      // 租户名称(模糊搜索)
      name: string
    ): Promise<TenantComboBox[]>;

    /**
     * 获取租户规模类型下拉数据
     * TenantActor
     * @returns {Promise<TenantScale[]>}
     */
    ['tenant-tenantType-select'](): Promise<TenantScale[]>;

    /**
     * 更新租户数据
     * TenantActor
     * @param data
     * @returns {Promise<Tenant>}
     */
    ['tenant-update'](
      // 租户模板数据
      data: Tenant
    ): Promise<Tenant>;

    /**
     * 修改租户密码
     * TenantActor
     * @param id
     * @param Password
     * @returns {Promise<Tenant>}
     */
    ['tenant-updatePassword'](
      // 租户id
      id: string,
      // 租户密码
      Password: string
    ): Promise<Tenant>;

    /**
     * 修改租户账号
     * TenantActor
     * @param id
     * @param TenantID
     * @param Password
     * @returns {Promise<Tenant>}
     */
    ['tenant-updateTenantID'](
      // 租户id
      id: string,
      // 租户账号
      TenantID: string,
      // 租户密码
      Password: string
    ): Promise<Tenant>;

    /**
     * 获取单条数据库数据
     * TenantDatabaseActor
     * @param id
     * @returns {Promise<TenantDatabaseGrid>}
     */
    ['tenantDatabase-get'](
      // 数据库序号
      id: string
    ): Promise<TenantDatabaseGrid>;

    /**
     * 获取所有数据库
     * TenantDatabaseActor
     * @returns {Promise<TenantDatabase[]>}
     */
    ['tenantDatabase-get-all'](): Promise<TenantDatabase[]>;

    /**
     * 获取字段来源下拉列表
     * TenantDatabaseActor
     * @param tcode
     * @returns {Promise<FileSourceView[]>}
     */
    ['tenantDatabase-get-fieldSource'](
      // 租户标识
      tcode: string
    ): Promise<FileSourceView[]>;

    /**
     * 获取关联的租户数据库信息
     * TenantDatabaseActor
     * @param tCode
     * @param code
     * @returns {Promise<DatabaseView[]>}
     */
    ['tenantDatabase-get-relations'](
      // 当前租户
      tCode: string,
      // 当前选择的数据库标识
      code: string
    ): Promise<DatabaseView[]>;

    /**
     * 获取数据库配置中所属租户
     * TenantDatabaseActor
     * @returns {Promise<TenantComboBox[]>}
     */
    ['tenantDatabase-get-tenantComboBox'](): Promise<TenantComboBox[]>;

    /**
     * 获取某个租户下所有数据库
     * TenantDatabaseActor
     * @param tCode
     * @returns {Promise<TenantDatabase[]>}
     */
    ['tenantDatabase-get-tenantDatabase-by-tCode'](
      // 租户标识
      tCode: string
    ): Promise<TenantDatabase[]>;

    /**
     * 获取数据库表格总数信息
     * TenantDatabaseActor
     * @param tid
     * @param tenantCode
     * @param searchText
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['tenantDatabase-grid-count'](
      // 表格标识
      tid: string,
      // 所属租户标识
      tenantCode: string,
      // 搜索内容
      searchText: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取数据字段表格列表数据
     * TenantDatabaseActor
     * @param tid
     * @param tenantCode
     * @param searchText
     * @param orders
     * @returns {Promise<ApiCore.GridData>}
     */
    ['tenantDatabase-grid-list'](
      // 表格标识
      tid: string,
      // 所属租户序号
      tenantCode: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[]
    ): Promise<ApiCore.GridData>;

    /**
     * 获取数据库表格分页列表数据
     * TenantDatabaseActor
     * @param tid
     * @param tenantCode
     * @param searchText
     * @param orders
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['tenantDatabase-grid-list-page'](
      // 表格标识
      tid: string,
      // 所属租户序号
      tenantCode: string,
      // 搜索内容
      searchText: string,
      // 排序
      orders: ApiCore.KV[],
      // 当前页
      page: number,
      // 当前页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 初始化数据库
     * TenantDatabaseActor
     * @param datas
     * @returns {Promise<boolean>}
     */
    ['tenantDatabase-initDatabase'](
      // 初始化数据
      datas: initData[]
    ): Promise<boolean>;

    /**
     * 启用数据库
     * TenantDatabaseActor
     * @param tCode
     * @param dCodes
     * @param isInit
     * @returns {Promise<boolean>}
     */
    ['tenantDatabase-startDatabase'](
      // 所属租户标识
      tCode: string,
      // 启用的数据库标识数组
      dCodes: string[],
      // 是否立刻初始化选中的库
      isInit: boolean
    ): Promise<boolean>;

    /**
     * 测试插入节点
     * FlowActor
     * @returns {Promise<number>}
     */
    ['test'](): Promise<number>;

    /**
     * 增加拓扑目录项
     * TopologyDirectoryActor
     * @param data
     * @returns {Promise<TopologyDirectoryGrid>}
     */
    ['topology-directory-create'](
      // 拓扑目录数据
      data: TopologyDirectory
    ): Promise<TopologyDirectoryGrid>;

    /**
     * 删除多个拓扑目录数据
     * TopologyDirectoryActor
     * @param tcode
     * @param dcode
     * @param ids
     * @returns {Promise<boolean>}
     */
    ['topology-directory-delete'](
      // 租户标识
      tcode: string,
      // 库标识
      dcode: string,
      // 拓扑目录序号数组
      ids: string[]
    ): Promise<boolean>;

    /**
     * 获取单条拓扑目录数据
     * TopologyDirectoryActor
     * @param id
     * @returns {Promise<TopologyDirectory>}
     */
    ['topology-directory-get'](
      // 拓扑目录序号
      id: string
    ): Promise<TopologyDirectory>;

    /**
     * 获取表格总数信息
     * TopologyDirectoryActor
     * @param tid
     * @param tcode
     * @param dcode
     * @param searchText
     * @param type
     * @returns {Promise<ApiCore.GridCount>}
     */
    ['topology-directory-grid-count'](
      // 表格标识
      tid: string,
      // 租户标识
      tcode: string,
      // 库标识
      dcode: string,
      // 搜索内容
      searchText: string,
      // 目录类型
      type: string
    ): Promise<ApiCore.GridCount>;

    /**
     * 获取表格列表数据
     * TopologyDirectoryActor
     * @param tid
     * @param tcode
     * @param dcode
     * @param searchText
     * @param type
     * @param orders
     * @returns {Promise<ApiCore.GridData>}
     */
    ['topology-directory-grid-list'](
      // 表格标识
      tid: string,
      // 租户标识
      tcode: string,
      // 库标识
      dcode: string,
      // 搜索内容
      searchText: string,
      // 目录类型
      type: string,
      // 数据排序条件
      orders: ApiCore.KV[]
    ): Promise<ApiCore.GridData>;

    /**
     * 获取分页表格列表数据
     * TopologyDirectoryActor
     * @param tid
     * @param tcode
     * @param dcode
     * @param searchText
     * @param type
     * @param orders
     * @param page
     * @param pageSize
     * @returns {Promise<ApiCore.GridData>}
     */
    ['topology-directory-grid-list-page'](
      // 表格标识
      tid: string,
      // 租户标识
      tcode: string,
      // 库标识
      dcode: string,
      // 搜索内容
      searchText: string,
      // 目录类型
      type: string,
      // 数据排序条件
      orders: ApiCore.KV[],
      // 当前页
      page: number,
      // 当前页条数
      pageSize: number
    ): Promise<ApiCore.GridData>;

    /**
     * 获取层级定义数据
     * TopologyDirectoryActor
     * @param tcode
     * @param mainStrs
     * @returns {Promise<HierarchySelectData[]>}
     */
    ['topology-directory-hierarchy-get'](
      // 租户标识
      tcode: string,
      // 主表库标识,主表分类标识（逗号分割）
      mainStrs: string[]
    ): Promise<HierarchySelectData[]>;

    /**
     * 修改拓扑目录项
     * TopologyDirectoryActor
     * @param data
     * @returns {Promise<TopologyDirectoryGrid>}
     */
    ['topology-directory-update'](
      // 拓扑目录数据
      data: TopologyDirectory
    ): Promise<TopologyDirectoryGrid>;

    /**
     * 过滤条件选择数据（有数据修改，没数据增加）
     * FiltrationActor
     * @param data
     * @returns {Promise<Filtration>}
     */
    ['update-create-filtration'](
      // 过滤条件选择数据对象
      data: Filtration
    ): Promise<Filtration>;

    /**
     * 工单分类下拉
     * FlowActor
     * @param type
     * @returns {Promise<SelectView[]>}
     */
    ['work-order-type-select'](
      // 工作流大类(FlowCategory)
      type: string
    ): Promise<SelectView[]>;
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
  export type AddressBook = {
    // 通讯录序号
    id?: string;
    // 项目序号
    pid?: string;
    // 单位类别码
    unitTypeCode?: string;
    // 企业名称
    companyName?: string;
    // 联系人
    liaisonName?: string;
    // 联系电话
    liaisonPhone?: string;
    // 名片数量
    businessCards?: number;
  };

  /**
   * 传入参数
   */
  export type AddressBookDetail = {
    // 通讯录序号
    id?: string;
    // 项目序号
    pid?: string;
    // 单位类别码
    unitType?: string;
    // 企业名称
    companyName?: string;
    // 联系人
    liaisonName?: string;
    // 联系电话
    liaisonPhone?: string;
    // 名片数量
    businessCards?: number;
  };

  /**
   * 传入参数
   */
  export type AddressBookGrid = {
    // 单位类别码
    unitType?: string;
    // 企业名称
    companyName?: string;
    // 联系人
    liaisonName?: string;
    // 联系电话
    liaisonPhone?: string;
    // 名片数量
    businessCards?: number;
    // 通讯录序号
    id?: string;
    // 项目序号
    pid?: string;
  };

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
    dataResource?: DataResource;
    // 容量配置
    capacityConfig?: CapacityConfig;
    // 计算资源
    computingResource?: ComputingResource;
    // 数据备份
    dataBackup?: DataBackup;
  };

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
  export type Area = {
    // 辖区序号
    id?: string;
    // 机构序号
    oid?: string;
    // 名称
    name?: string;
    // 备注
    desc?: string;
    // 授权用户数量
    users?: number;
    // 硬件数量
    hardwares?: number;
    // 地点数量
    districts?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 缩放等级
    zoom?: number;
    // 经纬度范围
    latLngRange?: string;
  };

  /**
   * 传入参数
   */
  export type AreaData = {
    // 辖区序号
    id?: string;
    // 机构序号
    oid?: string;
    // 辖区名称
    name?: string;
    // 授权用户数组
    users?: OrgUserDataRes[];
    // 辖区监控地区数组
    districts?: AreaDistrict[];
    // 辖区监控硬件数组
    hardwares?: AreaHardware[];
    // 备注
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type AreaDistrict = {
    // 辖区序号
    aid?: string;
    // 地区序号
    did?: string;
    // 机构序号
    oid?: string;
    // 城市序号
    cityId?: string;
    // 当前地区节点类型
    ptype?: number;
  };

  /**
   * 传入参数
   */
  export type AreaDistrictData = {
    // 机构序号
    oid?: string;
    // 地区序号
    did?: string;
    // 城市序号
    cityId?: string;
  };

  /**
   * 传入参数
   */
  export type AreaDistrictDetailTree = {
    // 地区序号
    id?: string;
    // 地区父节点序号
    pid?: string;
    // 地区名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type AreaDistrictRes = {
    // 地点数量
    dcount?: number;
    // 地点名称
    dnames?: string[];
  };

  /**
   * 传入参数
   */
  export type AreaGrid = {
    // 辖区名称
    name?: string;
    // 授权用户数量
    users?: number;
    // 硬件数量
    hardwares?: number;
    // 地点数量
    districts?: number;
    // 备注
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 辖区序号
    id?: string;
    // 机构序号
    oid?: string;
  };

  /**
   * 传入参数
   */
  export type AreaHardware = {
    // 辖区序号
    aid?: string;
    // 硬件种类
    hid?: string;
    // 权限数据（按位）
    lids?: number;
    // 机构序号
    oid?: string;
    // 行业序号
    iid?: string;
  };

  /**
   * 传入参数
   */
  export type AreaInfodata = {
    // 片区序号
    id?: string;
    // 片区名称
    name?: string;
    // 片区项目数据
    areaProject?: AreaProjectRes;
    // 片区地点数据
    areaDistrict?: AreaDistrictRes;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type AreaLatLngZoom = {
    // 辖区唯一标识
    id?: string;
    // 辖区名称
    name?: string;
    // 缩放等级
    zoom?: number;
    // 经纬度范围
    latLngRange?: string;
  };

  /**
   * 传入参数
   */
  export type AreaLocation = {
    // 辖区唯一标识
    id?: string;
    // 辖区名称
    name?: string;
    // 缩放等级
    zoom?: number;
    // 经纬度范围
    latLngRange?: string;
  };

  /**
   * 传入参数
   */
  export type AreaProjectRes = {
    // 项目数量
    pcount?: number;
    // 项目名称
    pnames?: string[];
  };

  /**
   * 传入参数
   */
  export type AssetOverviewRes = {
    // 地区序号
    id?: string;
    // 地区名称
    name?: string;
    // 地区类型PrimaryType.xx
    type?: number;
    // 设备数量数组
    deviceNums?: DeviceNum[];
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
  };

  /**
   * 传入参数
   */
  export type Authorization = {
    // 使用授权唯一标识
    id?: string;
    // 租户唯一标识
    tCode?: string;
    // 被授权者
    certigier?: string;
    // 授权密钥
    secretKey?: string;
    // 授权日期
    athorizationDate?: string;
    // 到期日期
    maturityDate?: string;
    // 租户数量
    tenantCount?: string;
    // 授权平台
    Platform?: string;
    // 授权系统
    AuthorSystem?: string;
  };

  /**
   * 传入参数
   */
  export type AuthorizationGrid = {
    // 被授权者
    certigier?: string;
    // 授权密钥
    secretKey?: string;
    // 授权日期
    athorizationDate?: string;
    // 到期日期
    maturityDate?: string;
    // 租户数量
    tenantCount?: string;
    // 授权平台
    Platform?: string;
    // 授权系统
    AuthorSystem?: string;
    // 使用授权唯一标识
    id?: string;
    // 租户唯一标识
    tCode?: string;
  };

  /**
   * 传入参数
   */
  export type AuthorizationInfo = {
    // 名称（国际化字段）
    name?: ApiCore.LocaleMap;
    // 标识列
    id?: string;
    // 业务标识
    sid?: string;
    // 被授权者
    user?: string;
    // 授权密钥
    key?: string;
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
    sysAppRes?: SysAppRes[];
  };

  /**
   * 传入参数
   */
  export type BackupRecord = {
    // 主键
    id?: string;
    // 大小（字节数）
    size?: number;
    // 备份文件
    fileName?: string;
    // 备份策略
    backupStrategy?: string;
    // 备份内容
    backupContent?: string;
    // 备份时间
    backupTime?: string;
    // 备份完成时间
    finishTime?: string;
    // 租户标识
    tCode?: string;
    // 备份者
    userId?: string;
    // 备份地址
    location?: string;
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
    // 父节点字段是否被修改（列显示，默认展示字段，可搜索字段，可编辑字段，启用本字段，排序；（逗号分割））
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
  export type BusinessCard = {
    // 主键
    id?: string;
    // 所属单位id
    bid?: string;
    // 岗位
    post?: string;
    // 手机
    phone?: string;
    // 固话
    fixedPhone?: string;
    // 传真
    fax?: string;
    // 中文名称
    zh_CN?: string;
    // 英文名称
    en_US?: string;
    // 邮箱
    email?: string;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type BusinessCardRes = {
    // 主键
    id?: string;
    // 所属单位id
    bid?: string;
    // 岗位
    post?: string;
    // 手机
    phone?: string;
    // 固话
    fixedPhone?: string;
    // 传真
    fax?: string;
    // 名称
    name?: string;
    // 邮箱
    email?: string;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type CapacityConfig = {
    // 名称（国际化字段）
    name?: ApiCore.LocaleMap;
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
    ComponentNum?: number;
    // 支持的资产数量(-1表示不限制)
    assets?: number;
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
  export type CategoryAndModel = {
    // 型号id
    mId?: string;
    // 型号名称
    mName?: string;
    // 型号是否已经被使用
    beUsed?: boolean;
    // 设备种类id
    dId?: string;
    // 设备种类名称
    dName?: string;
  };

  /**
   * 传入参数
   */
  export type CategoryData = {
    // 设备种类序号
    cId?: string;
    // 设备种类名称
    cName?: string;
    // 权限数据（按位）
    lids?: number;
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
  export type CityRes = {
    // 城市id
    did?: string;
    // 城市名称
    cityName?: string;
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
  export type CommProtocolSelect = {
    // 序号
    id?: string;
    // 名称
    name?: string;
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
  export type CommunicationProtocol = {
    // 通信协议序号
    id?: string;
    // 设备种类标识
    dccode?: string;
    // 通信协议标识
    code?: string;
    // 协议版本
    protocolVersion?: string;
    // 名称
    name?: ApiCore.LocaleMap;
  };

  /**
   * 传入参数
   */
  export type CommunicationProtocolGrid = {
    // 通信协议标识
    code?: string;
    // 协议版本
    protocolVersion?: string;
    // 名称
    name?: ApiCore.LocaleMap;
    // 通信协议序号
    id?: string;
    // 设备种类标识
    dccode?: string;
  };

  /**
   * 传入参数
   */
  export type Company = {
    // 单位主键
    id?: string;
    // 单位类型
    type?: string;
    // 中文名称
    zh_CN?: string;
    // 英文名称
    en_US?: string;
    // 备注
    desc?: string;
    // 名片数量
    businessCards?: number;
  };

  /**
   * 传入参数
   */
  export type CompanyReq = {
    // 单位主键
    id?: string;
    // 单位类型
    type?: string;
    // 中文名称
    zh_CN?: string;
    // 英文名称
    en_US?: string;
    // 备注
    desc?: string;
    // 项目id
    projectId?: string;
  };

  /**
   * 传入参数
   */
  export type CompanyRes = {
    // 单位主键
    id?: string;
    // 单位类型
    type?: string;
    // 名称
    name?: string;
    // 备注
    desc?: string;
    // 名片数量
    businessCards?: number;
  };

  /**
   * 传入参数
   */
  export type Component = {
    // 组件唯一标识
    id?: string;
    // 组件节点
    code?: string;
    // 租户唯一标识
    tenementCode?: string;
    // 组件父节点
    pCode?: string;
    // 组件配置名称（国际化字段）
    name?: ApiCore.LocaleMap;
    // 图标
    imgUrl?: string;
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
  export type Computational = {
    // 计算公式唯一标识
    id?: string;
    // 工作流id
    fid?: string;
    // 计算方式
    formulaMode?: string;
    // 结果类型
    resultType?: string;
    // 公式名称
    formulName?: string;
    // 公式说明
    formulExplain?: string;
    // 保存的公式
    conserve?: string;
    // 参数
    parameter?: string;
  };

  /**
   * 传入参数
   */
  export type ComputationalVo = {
    // 计算公式唯一标识
    id?: string;
    // 组件功能父节点
    pid?: string;
    // 组件功能节点
    sid?: string;
    // 计算方式
    formulaMode?: string;
    // 结果类型
    resultType?: string;
    // 公式名称
    formulName?: string;
    // 子节点数据数组
    children?: ComputationalVo[];
    // 公式说明
    formulExplain?: string;
    // 保存的公式
    conserve?: string;
  };

  /**
   * 传入参数
   */
  export type ComputingResource = {
    // 名称（国际化字段）
    name?: ApiCore.LocaleMap;
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
  };

  /**
   * 传入参数
   */
  export type ConditionSelect = {
    // 比较符标识
    value?: number;
    // 比较符名称
    label?: string;
    // 子集
    children?: ConditionSelect[];
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
  };

  /**
   * 传入参数
   */
  export type CrculationView = {
    // 目的节点id
    toNodeIds?: string[];
    // 判断条件
    conditionalControls?: ConditionalControl[];
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
    // 名称
    name?: ApiCore.LocaleMap;
    // 名称说明
    nameExplain?: ApiCore.LocaleMap;
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
  export type CustomProperty = {
    // 自定义属性序号
    id?: string;
    // 属性父序号
    pid?: string;
    // 属性场景类型
    bigType?: string;
    // 属性分类
    attrType?: string;
    // 名称
    name?: ApiCore.LocaleMap;
    // 名称说明
    nameExplain?: ApiCore.LocaleMap;
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
  };

  /**
   * 传入参数
   */
  export type CustomPropertyGrid = {
    // 自定义属性类型
    ptype?: string;
    // 自定义属性标识
    code?: string;
    // 名称
    name?: ApiCore.LocaleMap;
    // 数据类型
    type?: string;
    // 数据范围
    range?: string;
    // 数据单位
    unit?: string;
    // 数据是否可编辑
    edited?: boolean;
    // 属性是否必填
    required?: boolean;
    // 排序
    sort?: number;
    // 名称说明
    nameExplain?: ApiCore.LocaleMap;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 备注
    desc?: string;
    // 自定义属性序号
    id?: string;
    // 自定义属性父序号
    pid?: string;
    // 属性场景类型
    bigType?: string;
    // 属性分类
    attrType?: string;
  };

  /**
   * 传入参数
   */
  export type CustomPropertySortReq = {
    // 自定义属性序号
    id?: string;
    // 排序
    sort?: number;
  };

  /**
   * 传入参数
   */
  export type DataBackup = {
    // 名称（国际化字段）
    name?: ApiCore.LocaleMap;
    // 主键
    id?: string;
    // 租户
    tenantId?: string;
    // 租户标识
    tCode?: string;
    // 备份方式
    backupType?: string;
    // 备份数量
    backupNum?: number;
    // 备份策略
    backupStrategy?: string;
    // 备份内容
    backupContent?: string;
    // 存储位置
    location?: string;
    // 执行时间
    executionTime?: string;
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
    desc?: string;
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
  export type DataFieldEnableRes = {
    // 数据字段序号
    id?: string;
    // 启用/禁用
    enabled?: boolean;
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
  export type DataFieldSortReq = {
    // 数据字段序号
    id?: string;
    // 父节点字段是否被修改（列显示，默认展示字段，可搜索字段，可编辑字段，启用本字段，排序；（逗号分割））
    updateData?: string;
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
    // 名称（国际化字段）
    name?: ApiCore.LocaleMap;
    // 主键
    id?: string;
    // 租户
    tenantId?: string;
    // 租户标识
    tCode?: string;
    // 库类型
    type?: string;
    // 库用户名
    dbUserName?: string;
    // 库密码
    dbPassword?: string;
    // 库名称
    dbName?: string;
    // 优先级
    priority?: string;
    // 最大连接数
    maxConnection?: number;
    // 日志存储天数
    logStorage?: number;
    // 统计存储年数
    statisticsStorage?: number;
    // 数据清理时间
    cleanTime?: string;
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
    // 名称
    name?: ApiCore.LocaleMap;
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
  };

  /**
   * 传入参数
   */
  export type DatabaseClassCatalog = {
    // 序号
    id?: string;
    // 名称
    name?: ApiCore.LocaleMap;
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
  };

  /**
   * 传入参数
   */
  export type DatabaseClassCatalogGrid = {
    // 名称
    name?: ApiCore.LocaleMap;
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
  };

  /**
   * 传入参数
   */
  export type DatabaseGrid = {
    // 基础数据库名称
    name?: ApiCore.LocaleMap;
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
  export type DecisionTree = {
    // 决策唯一标识
    id?: string;
    // sid
    sid?: string;
    // 计算公式oid
    oid?: string;
    // 决策json数据
    content?: string;
    // 决策类型1树2表
    type?: number;
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
    view?: BasicDataFieldView;
  };

  /**
   * 传入参数
   */
  export type Device = {
    // 设备序号
    id?: string;
    // 设备父序号
    pId?: string;
    // 地区
    aId?: string;
    // 地区全路径，/分割
    linkIds?: string;
    // 设备种类id
    cId?: string;
    // 产品型号ID
    mId?: string;
    // 项目id
    prId?: string;
    // 英文名称
    en_US?: string;
    // 中文名称
    zh_CN?: string;
    // 资产编号
    code?: string;
    // 备注
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 坐标
    location?: number[];
    // 设备类型
    type?: number;
    // 设备状态（多个状态码的组合，如: 3 标识 1 & 2 按位与的结果）
    status?: number;
  };

  /**
   * 传入参数
   */
  export type DeviceAdjacencyList = {
    // 设备序号
    id?: string;
    // 组序号
    groupId?: string;
    // 设备id
    dId?: string;
    // 地区
    aId?: string;
    // 设备种类id
    cId?: string;
    // 项目id
    prId?: string;
    // 指针域
    next?: string;
    // 权
    info?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceCategory = {
    // 设备种类序号
    id?: string;
    // 设备种类父节点
    pid?: string;
    // 模组类型序号
    mtype?: number;
    // 设备种类标识
    code?: string;
    // 设备种类节点状态(根节点，叶子节点，普通节点)
    nodeStatus?: string;
    // 设备种类名称
    name?: ApiCore.LocaleMap;
    // 通信协议数量
    cprotocolNum?: number;
    // 模组功能数量
    mfunctionNum?: number;
    // 型号属性数量
    modelNum?: number;
    // 设备属性数量
    deviceNum?: number;
    // 产品数量
    productNum?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceCategoryData = {
    // 设备种类序号
    cId?: string;
    // 设备种类名称
    cName?: string;
    // 行业代码
    icode?: string;
    // 设备型号数量
    modelCount?: number;
  };

  /**
   * 传入参数
   */
  export type DeviceCategoryDataRes = {
    // 设备种类序号
    id?: string;
    // 设备种类名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceCategoryGrid = {
    // 模组类型名称
    mname?: string;
    // 设备种类种类标识
    code?: string;
    // 设备种类名称
    name?: ApiCore.LocaleMap;
    // 通信协议数量
    cprotocolNum?: number;
    // 模组功能数量
    mfunctionNum?: number;
    // 型号属性数量
    modelNum?: number;
    // 设备属性数量
    deviceNum?: number;
    // 产品数量
    productNum?: number;
    // 设备种类节点状态(根节点，叶子节点，普通节点)
    nodeStatus?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 备注
    desc?: string;
    // 设备种类序号
    id?: string;
    // 模组类型序号
    mtype?: number;
    // 设备种类父节点
    pid?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceCategoryListData = {
    // 设备种类序号
    id?: string;
    // 设备种类名称
    name?: string;
    // 行业标识
    icode?: string;
    // 行业名称
    iname?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceCategoryModel = {
    // 设备种类序号
    cId?: string;
    // 设备种类名称
    cName?: string;
    // 型号id
    mId?: string;
    // 型号名称
    mName?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceCategorySelect = {
    // 设备种类序号
    id?: string;
    // 设备种类名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceChildDeviceNum = {
    // 设备序号
    id?: string;
    // 设备序号
    cId?: string;
    // 设备序号
    aId?: string;
    // 设备序号
    prId?: string;
    // 设备子设备统计
    childDeviceNum?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceData = {
    // 设备唯一标识
    id?: string;
    // 父节点标识
    pid?: string;
    // 纬度 （-90~90）
    lat?: number;
    // 经度 （-180~180）
    lng?: number;
    // 设备名称
    name?: string;
    // 设备类型
    type?: number;
    // 设备种类序号
    cId?: string;
    // 设备型号序号
    mId?: string;
    // 设备种类代号
    cCode?: number;
    // 设备地区序号
    dirId?: string;
    // 设备项目序号
    proId?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceGrid = {
    // 地区名称
    aName?: string;
    // 设备父名称
    pName?: string;
    // 产品型号
    mName?: string;
    // 设备名称
    name?: string;
    // 资产编号
    code?: string;
    // 备注
    desc?: string;
    // 设备序号
    id?: string;
    // 设备父序号
    pId?: string;
    // 地区
    aId?: string;
    // 设备种类id
    cId?: string;
    // 产品型号ID
    mId?: string;
    // 项目id
    prId?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceHeader = {
    // 序号
    id?: string;
    // 设备种类id
    cId?: string;
    // 类型（基础字段/子设备字段/属性字段）
    type?: string;
    // 英文名称
    en_US?: string;
    // 中文名称
    zh_CN?: string;
    // 编号
    code?: string;
    // 是否显示
    isShow?: boolean;
    // 是否翻译
    isTranslate?: boolean;
    // 表头属性id
    attrId?: string;
    // 排序
    sort?: number;
  };

  /**
   * 传入参数
   */
  export type DeviceModel = {
    // 型号序号
    id?: string;
    // 型号名称
    name?: string;
    // 图片路径
    imgPath?: string;
    // 设备模组编号
    mcode?: number;
    // 所属行业代码
    icode?: string;
    // 默认型号图片状态图标
    defaultIcon?: DeviceModelIcon[];
  };

  /**
   * 传入参数
   */
  export type DeviceModelIcon = {
    // 图标序号
    id?: string;
    // 图标名称
    name?: string;
    // 图片对应的状态（使用 2^n 的结构来定义，如：1, 2, 4, 8...）
    status?: number;
    // 图标路径
    iconPath?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceNum = {
    // 设备种类序号
    id?: string;
    // 设备种类名称
    name?: string;
    // 设备总数量
    totalCount?: number;
  };

  /**
   * 传入参数
   */
  export type DeviceProperty = {
    // 设备属性序号
    id?: string;
    // 属性父序号
    pid?: string;
    // 属性场景类型
    bigType?: string;
    // 属性分类（设备属性/型号属性）
    attrType?: string;
    // 名称
    name?: ApiCore.LocaleMap;
    // 名称说明
    nameExplain?: ApiCore.LocaleMap;
    // 属性类型（系统属性/自定义属性）
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
  };

  /**
   * 传入参数
   */
  export type DevicePropertyData = {
    // 序号
    id?: string;
    // 名称
    name?: string;
    // 属性类型(系统/自定义)
    ptype?: string;
  };

  /**
   * 传入参数
   */
  export type DevicePropertyGrid = {
    // 属性类型
    ptype?: string;
    // 属性标识
    code?: string;
    // 名称
    name?: ApiCore.LocaleMap;
    // 数据类型
    type?: string;
    // 数据范围
    range?: string;
    // 数据单位
    unit?: string;
    // 数据是否可编辑
    edited?: boolean;
    // 属性是否必填
    required?: boolean;
    // 排序
    sort?: number;
    // 名称说明
    nameExplain?: ApiCore.LocaleMap;
    // 默认值
    value?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 备注
    desc?: string;
    // 属性序号
    id?: string;
    // 属性父序号
    pid?: string;
    // 属性场景类型
    bigType?: string;
    // 属性分类
    attrType?: string;
  };

  /**
   * 传入参数
   */
  export type DevicePropertySortReq = {
    // 自定义属性序号
    id?: string;
    // 排序
    sort?: number;
  };

  /**
   * 传入参数
   */
  export type DeviceTemplate = {
    // 设备序号
    id?: string;
    // 项目序号
    prId?: string;
    // 英文名称
    en_US?: string;
    // 中文名称
    zh_CN?: string;
    // 状态
    state?: string;
    // 型号数量
    mNum?: number;
    // 设备种类数量
    dNum?: number;
    // 备注
    desc?: string;
    // 图数据
    jsonObject?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceTemplateGrid = {
    // 中文名称
    name?: string;
    // 型号数量
    mNum?: number;
    // 设备种类数量
    dNum?: number;
    // 备注
    desc?: string;
    // 序号
    id?: string;
    // 状态
    state?: string;
  };

  /**
   * 传入参数
   */
  export type DeviceTemplateProductModelVo = {
    // 序号
    key?: string;
    // 项目id
    prId?: string;
    // 产品型号id
    mId?: string;
    // 基础型号id
    bId?: string;
    // 隶属行业序号
    iId?: string;
    // 设备种类序号
    cId?: string;
    // 设备种类名称
    cName?: string;
    // 产品型号名称
    name?: string;
    // 图片路径
    imgpath?: string;
    // 子设备种类ids
    childIds?: string;
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
  };

  /**
   * 传入参数
   */
  export type District = {
    // 地区唯一标识
    id?: string;
    // 父节点标识
    pid?: string;
    // 地区一级分类
    ptype?: number;
    // 地区二级分类
    stype?: number;
    // 英文名称
    en_US?: string;
    // 中文名称
    zh_CN?: string;
    // 地区代码
    code?: number;
    // 当前地区下级节点数量
    chs?: number;
    // 纬度
    lat?: number;
    // 经度
    lon?: number;
    // 备注
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 缩放等级
    zoom?: number;
    // 经纬度范围
    latLngRange?: string;
  };

  /**
   * 传入参数
   */
  export type DistrictGrid = {
    // 地区一级分类
    ptype?: number;
    // 中文名称
    zh_CN?: string;
    // 英文名称
    en_US?: string;
    // 当前地区下级节点数量
    chs?: number;
    // 纬度
    lat?: number;
    // 经度
    lon?: number;
    // 备注
    desc?: string;
    // 地区二级分类
    stype?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 地区唯一标识
    id?: string;
    // 父节点标识
    pid?: string;
  };

  /**
   * 传入参数
   */
  export type DistrictGridRes = {
    // 重复名称数据
    name?: string;
    // 地区数据数组
    districts?: District[];
  };

  /**
   * 传入参数
   */
  export type DistrictLayerTree = {
    // 地区序号
    id?: string;
    // 父节点序号
    pid?: string;
    // 地区名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type DistrictLocation = {
    // 地区唯一标识
    id?: string;
    // 父节点标识
    pid?: string;
    // 地区名称
    name?: string;
    // 地区代码
    code?: number;
    // 地区一级分类
    ptype?: number;
    // 地区二级分类
    stype?: number;
    // 地区纬度
    lat?: number;
    // 地区经度
    lng?: number;
    // 缩放等级
    zoom?: number;
    // 经纬度范围
    latLngRange?: string;
    // 当前地区下级节点数量
    chs?: number;
  };

  /**
   * 传入参数
   */
  export type DistrictTree = {
    // 地区唯一标识
    id?: string;
    // 父节点标识
    pid?: string;
    // 地区一级分类
    ptype?: number;
    // 当前语言地区名称
    name?: string;
    // 当前地区下级节点数量
    chs?: number;
  };

  /**
   * 传入参数
   */
  export type FacilityVerify = {
    // 通讯录序号
    id?: string;
    // 项目序号
    pid?: string;
    // 校验项名称（国际化字段）
    name?: ApiCore.LocaleMap;
    // 状态码
    statusCode?: string;
    // 设备数量
    num?: number;
    // 问题项
    problems?: number;
    // 执行时间
    runTime?: string;
  };

  /**
   * 传入参数
   */
  export type FacilityVerifyGrid = {
    // 校验项名称（国际化字段）
    name?: ApiCore.LocaleMap;
    // 状态
    status?: string;
    // 设备数量
    num?: number;
    // 问题项
    problems?: number;
    // 执行时间
    runTime?: string;
    // 通讯录序号
    id?: string;
    // 项目序号
    pid?: string;
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
  export type Filtration = {
    // 过滤条件设置id
    id?: string;
    // 过滤条件设置唯一标识
    code?: string;
    // 表格唯一标识
    tabCode?: string;
    // 租户唯一标识
    tenCode?: string;
    // 用户唯一标识
    uCode?: string;
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
    cTime?: string;
    // 创建人序号
    creator?: string;
    // 修改人序号
    editor?: string;
    // 修改时间
    eTime?: string;
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
    children?: DataField[];
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
  };

  /**
   * 传入参数
   */
  export type FormCategoryCopy = {
    // 副本主键
    id?: string;
    // 表单种类序号
    copyId?: string;
    // 工单序号
    ticketId?: string;
    // 工作流序号
    flowId?: string;
    // 代码
    code?: string;
    // 创建人
    creator?: string;
    // 中文名称
    zh_CN?: string;
    // 英文名称
    en_US?: string;
    // 创建时间
    cTime?: string;
    // 编辑时间
    eTime?: string;
    // 描述
    desc?: string;
    // 表单属性数量
    propertyNum?: number;
    // 是否主表单
    isMain?: boolean;
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
    cTime?: string;
    // 编辑时间
    eTime?: string;
  };

  /**
   * 传入参数
   */
  export type FormPropertyCopy = {
    // 副本主键
    id?: string;
    // 表单属性序号
    copyId?: string;
    // 工单序号
    ticketId?: string;
    // 所属表单种类序号
    formCategoryId?: string;
    // 中文名称
    zh_CN?: string;
    // 英文名称
    en_US?: string;
    // 代码
    code?: string;
    // 中文说明
    zh_CNExplain?: string;
    // 英文说明
    en_USExplain?: string;
    // 所属工作流序号
    workflowId?: string;
    // 数据范围
    range?: string;
    // 默认值
    value?: string;
    // 单位
    unit?: string;
    // 状态
    state?: string;
    // 备注
    desc?: string;
    // 排序
    sort?: number;
    // 是否必填
    require?: boolean;
    // 是否录入
    input?: boolean;
    // 数据类型
    DateType?: string;
    // 数据模式
    DateMode?: string;
    // 是否作为表单数据搜索项
    searchItem?: boolean;
    // 列显示
    colShow?: number;
    // 用作跨工作流工单列表内容描述
    crossWorkflow?: boolean;
    // 创建时间
    cTime?: string;
    // 编辑时间
    eTime?: string;
    // 表单属性创建人
    creator?: string;
    // 表单属性修改人
    editor?: string;
    // 表单数据
    data?: string;
  };

  /**
   * 传入参数
   */
  export type FormulaModeTypeScale = {
    // 结果类型标识
    code?: string;
    // 结果类型名称
    name?: string;
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
    // 生效日期
    stime?: string;
    // 到期日期
    etime?: string;
    // 启用
    enabled?: boolean;
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
    funName?: ApiCore.LocaleMap;
    // 是否启动
    enabled?: boolean;
    // 系统设置是否启动
    isNot?: boolean;
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
    // 权限名称(国际化字段)
    name?: ApiCore.LocaleMap;
  };

  /**
   * 传入参数
   */
  export type GlobalPermissionGrid = {
    // 权限名称(国际化字段)
    name?: ApiCore.LocaleMap;
    // 权限标识
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 序号
    id?: string;
    // 排序
    sort?: number;
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
  export type HierarchySelectData = {
    // 库标识,分类标识,字段标识
    code?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type I8nDeviceCategoryVo = {
    // 设备序号
    id?: string;
    // 隶属行业序号
    iId?: string;
    // 行业级联关系（aaa/bbb/ccc）
    linked?: string;
    // 中文名称
    name?: string;
    // 图标文件
    icon?: string;
    // 标识符
    code?: string;
    // 模组id
    mId?: string;
    // 状态
    state?: string;
    // 子设备id字符串
    cids?: string;
    // 型号属性数量
    modelNum?: number;
    // 设备属性数量
    deviceNum?: number;
    // 备注
    desc?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 必要型号属性数组
    modelMustProps?: I8nDevicePropertyVo[];
    // 必要设备属性数组
    deviceMustProps?: I8nDevicePropertyVo[];
    // 自定义型号属性数组
    modelCustomProps?: I8nDevicePropertyVo[];
    // 自定义设备属性数组
    deviceCustomProps?: I8nDevicePropertyVo[];
  };

  /**
   * 传入参数
   */
  export type I8nDevicePropertyVo = {
    // 设备属性序号
    id?: string;
    // 设备种类序号
    cid?: string;
    // 名称
    name?: string;
    // 说明
    explain?: string;
    // 标识符
    code?: string;
    // 属性类型
    attrType?: string;
    // 类型(必填/自定义)
    ctype?: string;
    // 类型
    type?: string;
    // 数据范围
    range?: string;
    // 默认值
    value?: string;
    // 单位
    unit?: string;
    // 状态
    state?: string;
    // 备注
    desc?: string;
    // 是否必填
    require?: boolean;
    // 排序
    sort?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
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
  };

  /**
   * 传入参数
   */
  export type Industry = {
    // 行业序号
    id?: string;
    // 父行业序号
    pid?: string;
    // 行业标识
    code?: string;
    // 行业名称（国际化字段）
    name?: ApiCore.LocaleMap;
    // 当前行业下级节点数量
    chs?: number;
  };

  /**
   * 传入参数
   */
  export type IndustryDataRes = {
    // 行业序号
    id?: string;
    // 行业代码
    code?: string;
  };

  /**
   * 传入参数
   */
  export type IndustryGrid = {
    // 所属行业
    pname?: string;
    // 行业标识
    code?: string;
    // 行业名称
    name?: ApiCore.LocaleMap;
    // 产品数量
    mmodelNum?: number;
    // 行业唯一标识
    id?: string;
    // 父节点标识
    pid?: string;
  };

  /**
   * 传入参数
   */
  export type IndustryModelRes = {
    // 行业序号
    iId?: string;
    // 行业代码
    iCode?: string;
    // 行业名称
    iName?: string;
    // 项目序号
    projectId?: string;
    // 设备种类及型号数组
    categoryAndModels?: CategoryAndModel[];
  };

  /**
   * 传入参数
   */
  export type IndustryRes = {
    // 行业序号
    id?: string;
    // 父行业序号
    pid?: string;
    // 行业代码
    code?: string;
    // 行业名称
    name?: string;
    // 当前行业下级节点数量
    chs?: number;
  };

  /**
   * 传入参数
   */
  export type IndustrySelect = {
    // 行业序号
    id?: string;
    // 行业名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type IndustryTree = {
    // 行业序号
    id?: string;
    // 父行业序号
    pid?: string;
    // 行业代码
    code?: string;
    // 行业名称
    name?: string;
    // 是否有下一级节点
    haschildren?: boolean;
  };

  /**
   * 传入参数
   */
  export type IndustryTypeRes = {
    // 行业序号
    iId?: string;
    // 行业代码
    iCode?: string;
    // 行业名称
    iName?: string;
    // 设备种类数据数组
    cdatas?: CategoryData[];
  };

  /**
   * 传入参数
   */
  export type IndustryVo = {
    // 行业序号
    id?: string;
    // 父行业序号
    pid?: string;
    // 行业代码
    code?: string;
    // 行业名称
    name?: string;
    // 子节点数据数组
    children?: IndustryVo[];
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
  };

  /**
   * 传入参数
   */
  export type InterfaceGrid = {
    // 系统分类(当菜单类型为应用系统时，这里存储code)
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
    // 系统菜单序号
    id?: string;
    // 租户唯一标识
    tCode?: string;
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
  export type LanguageTypeSelect = {
    // 所属语言标识
    code?: string;
    // 所属语言名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type LatLngUpdateReq = {
    // 序号
    id?: string;
    // 纬度
    lat?: number;
    // 经度
    lng?: number;
  };

  /**
   * 传入参数
   */
  export type Layer = {
    // 图层唯一标识
    id?: string;
    // 租户code
    tenantCode?: string;
    // 图层顺序
    layerLevel?: number;
    // 图层名称
    layerName?: string;
    // 缩放等级左区间
    zoomLevelL?: number;
    // 缩放等级右区间
    zoomLevelR?: number;
    // 数据库code
    databaseCode?: string;
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
    // 启用功能(冗余字段，用于展示)
    running?: string;
    // 图层说明
    explain?: string;
    // 创建时间
    ctime?: string;
    // 修改时间
    utime?: string;
  };

  /**
   * 传入参数
   */
  export type LayerDetail = {
    // 图层唯一标识
    id?: string;
    // 租户code
    tenantCode?: string;
    // 租户名称
    tenantName?: string;
    // 图层顺序
    layerLevel?: number;
    // 图层名称
    layerName?: string;
    // 缩放等级左区间
    zoomLevelL?: number;
    // 缩放等级右区间
    zoomLevelR?: number;
    // 数据库code
    databaseCode?: string;
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
    // 启用功能(冗余字段，用于展示)
    running?: string;
    // 图层说明
    explain?: string;
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
  };

  /**
   * 传入参数
   */
  export type Line2FormCategoryAuthorityCopy = {
    // 副本主键
    id?: string;
    // 序号
    copyId?: string;
    // 工单序号
    ticketId?: string;
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
  export type Location = {
    // 经纬度位置
    latlngs?: number[];
  };

  /**
   * 传入参数
   */
  export type Manufacturer = {
    // 厂家序号
    id?: string;
    // 租户唯一标识
    tenementCode?: string;
    // 厂家简称
    shortName?: string;
    // 启用
    enabled?: boolean;
    // 厂家全称
    fullName?: string;
    // 联系人
    contact?: string;
    // 移动电话
    mobilePhone?: string;
    // 厂家传真
    companyFax?: string;
    // 电子邮箱
    email?: string;
    // 固定电话
    fixedPhone?: string;
    // 邮政编码
    postcode?: string;
    // 地址
    addr?: string;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type ManufacturerComboBox = {
    // 厂家id
    id?: string;
    // 厂家名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type ManufacturerDetail = {
    // 厂家序号
    id?: string;
    // 厂家简称
    shortName?: string;
    // 厂家全称
    fullName?: string;
    // 租户唯一标识
    tenementCode?: string;
    // 租户名称
    belongsTenant?: string;
    // 启用
    enabled?: boolean;
    // 联系人
    contact?: string;
    // 移动电话
    mobilePhone?: string;
    // 厂家传真
    companyFax?: string;
    // 电子邮箱
    email?: string;
    // 固定电话
    fixedPhone?: string;
    // 邮政编码
    postcode?: string;
    // 地址
    addr?: string;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type ManufacturerGrid = {
    // 租户名称
    belongsTenant?: string;
    // 厂家简称
    shortName?: string;
    // 型号数量
    modelCount?: string;
    // 启用
    enabled?: boolean;
    // 厂家全称
    fullName?: string;
    // 联系人
    contact?: string;
    // 移动电话
    mobilePhone?: string;
    // 厂家传真
    companyFax?: string;
    // 电子邮箱
    email?: string;
    // 厂家序号
    id?: string;
    // 租户唯一标识
    tenementCode?: string;
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
    utime?: string;
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
  export type MapDeviceDetail = {
    // 设备序号
    id?: string;
    // 设备父序号
    pId?: string;
    // 地区
    dirId?: string;
    // 设备种类序号
    cId?: string;
    // 设备型号序号
    mId?: string;
    // 设备型号名称
    mName?: string;
    // 项目序号
    proId?: string;
    // 设备名称
    name?: string;
    // 资产编号
    code?: string;
    // 坐标
    location?: number[];
    // 设备类型
    type?: number;
    // 设备状态（多个状态码的组合，如: 3 标识 1 & 2 按位与的结果）
    status?: number;
    // 隶属行业代码
    iCode?: string;
    // 设备模组代码
    mCode?: number;
    // 地图设备属性数据数组
    mdps?: MapDeviceProperty[];
  };

  /**
   * 传入参数
   */
  export type MapDeviceProperty = {
    // 设备属性名称
    name?: string;
    // 设备属性标识符
    code?: string;
    // 设备属性单位
    unit?: string;
    // 设备属性值
    value?: string;
  };

  /**
   * 传入参数
   */
  export type MapDeviceRes = {
    // 地图项唯一标识
    id?: string;
    // 父节点标识
    pid?: string;
    // 坐标
    location?: number[];
    // 地图项名称
    name?: string;
    // 地图项类型
    type?: number;
  };

  /**
   * 传入参数
   */
  export type MapInfo = {
    // 地图信息唯一标识
    id?: string;
    // 租户code
    tenantCode?: string;
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
    stime?: string;
    // 到期日期
    etime?: string;
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
    utime?: string;
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
  export type MapInfoDetail = {
    // 地图信息唯一标识
    id?: string;
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
    stime?: string;
    // 到期日期
    etime?: string;
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
    utime?: string;
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
    stime?: string;
    // 到期日期
    etime?: string;
    // 启用
    enabled?: boolean;
    // 地图信息唯一标识
    id?: string;
  };

  /**
   * 传入参数
   */
  export type MapItemReq = {
    // 项目序号
    projectId?: string;
    // 地理位置
    locations?: number[][];
    // 设备型号序号数组（过滤条件）
    mIds?: string[];
    // 当前页
    page?: number;
    // 当前页条数
    pageSize?: number;
  };

  /**
   * 传入参数
   */
  export type MapItemRes = {
    // 地图项唯一标识
    id?: string;
    // 父节点标识
    pid?: string;
    // 纬度 （-90~90）
    lat?: number;
    // 经度 （-180~180）
    lng?: number;
    // 地图项名称
    name?: string;
    // 地图项类型
    type?: number;
    // 设备状态（多个状态码的组合，如: 3 标识 1 & 2 按位与的结果）
    status?: number;
    // 设备种类序号
    cId?: string;
    // 设备型号序号
    mId?: string;
    // 设备模组代码
    mCode?: number;
    // 设备地区序号
    dirId?: string;
    // 设备项目序号
    proId?: string;
    // 隶属行业代码
    iCode?: string;
  };

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
  export type MenuThreelevelSelect = {
    // 序号
    mid?: string;
    // 名称
    name?: string;
    // 标识
    code?: string;
  };

  /**
   * 传入参数
   */
  export type Model = {
    // 型号序号
    id?: string;
    // 租户序号
    tenantId?: string;
    // 厂家序号
    mId?: string;
    // 设备种类序号
    cId?: string;
    // 产品序号
    productId?: string;
    // 型号名称
    name?: string;
    // 资产类目编码
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 设备数量
    num?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type ModelBelongSelect = {
    // 序号
    id?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type ModelDetail = {
    // 型号序号
    id?: string;
    // 所属租户
    tname?: string;
    // 所属厂家
    mname?: string;
    // 模组
    cname?: string;
    // 产品
    pname?: string;
    // 型号名称
    name?: string;
    // 资产类目编码
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 设备数量
    num?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 备注
    desc?: string;
    // 租户序号
    tenantId?: string;
    // 厂家序号
    mId?: string;
    // 设备种类序号
    cId?: string;
    // 产品序号
    productId?: string;
  };

  /**
   * 传入参数
   */
  export type ModelGrid = {
    // 所属租户
    tname?: string;
    // 所属厂家
    mname?: string;
    // 模组
    cname?: string;
    // 产品
    pname?: string;
    // 型号名称
    name?: string;
    // 资产类目编码
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 设备数量
    num?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 备注
    desc?: string;
    // 型号序号
    id?: string;
    // 租户序号
    tenantId?: string;
    // 厂家序号
    mId?: string;
    // 设备种类序号
    cId?: string;
    // 产品序号
    productId?: string;
  };

  /**
   * 传入参数
   */
  export type ModuleFunction = {
    // 模组功能序号
    id?: string;
    // 设备种类标识
    dccode?: string;
    // 模组功能标识
    code?: string;
    // 名称
    name?: ApiCore.LocaleMap;
    // 排序
    sort?: number;
  };

  /**
   * 传入参数
   */
  export type ModuleFunctionGrid = {
    // 模组功能标识
    code?: string;
    // 名称
    name?: ApiCore.LocaleMap;
    // 排序
    sort?: number;
    // 模组功能序号
    id?: string;
    // 设备种类标识
    dccode?: string;
  };

  /**
   * 传入参数
   */
  export type ModuleFunctionSortReq = {
    // 模组功能序号
    id?: string;
    // 排序
    sort?: number;
  };

  /**
   * 传入参数
   */
  export type ModuleTypeSelect = {
    // 模组类型标识
    code?: string;
    // 模组类型名称
    name?: string;
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
  export type Node2Form = {
    // 关联序号
    id?: string;
    // 表单序号
    formId?: string;
    // 节点序号
    nodeId?: string;
  };

  /**
   * 传入参数
   */
  export type Node2FormCategoryAuthorityCopy = {
    // 副本主键
    id?: string;
    // 序号
    copyId?: string;
    // 工单序号
    ticketId?: string;
    // 工作流序号
    flowId?: string;
    // 节点序号
    nodeId?: string;
    // 表单种类序号
    formCategoryId?: string;
    // 表单属性序号
    formPropertyId?: string;
    // 数据可见
    authority?: boolean;
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
  };

  /**
   * 传入参数
   */
  export type Node2UserCopy = {
    // 副本主键
    id?: string;
    // 关联序号
    copyId?: string;
    // 工单序号
    ticketId?: string;
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
    // 备注
    desc?: string;
    // 机构序号
    orgName?: string;
    // 角色名称
    roleName?: string;
    // 部门名称
    departmentName?: string;
    // 用户名称
    userName?: string;
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
  export type NodeCopy = {
    // 副本主键
    id?: string;
    // 节点序号
    copyId?: string;
    // 工单序号
    ticketId?: string;
    // 中文名称
    zh_CN?: string;
    // 英文名称
    en_US?: string;
    // 所属工作流
    workflowId?: string;
    // 创建时间
    cTime?: string;
    // 描述
    desc?: string;
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
    // 节点关联表单数量
    formCount?: number;
    // 坐标(x y)
    loc?: string;
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
  export type OrgAreaDetailsRes = {
    // 辖区序号
    id?: string;
    // 辖区名称
    name?: string;
    // 备注
    desc?: string;
    // 已授权用户
    users?: OrgUserDataRes[];
    // 监控地区
    areaTrees?: ApiCore.OrgAreaTree[];
    // 监控硬件
    hardwares?: ApiCore.OrgAreaHardwaredata[];
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
  };

  /**
   * 传入参数
   */
  export type ParametersGrid = {
    // 组件参数唯一标识
    id?: string;
    // 组件表唯一标识
    scCode?: string;
    // 参数标识
    code?: string;
    // 参数名称
    parameterName?: string;
    // 默认值
    defaultValue?: string;
    // 设置值
    setValue?: string;
    // 参数说明
    account?: string;
  };

  /**
   * 传入参数
   */
  export type ProcessManagement = {
    // 序号
    id?: string;
    // 名称
    name?: ApiCore.LocaleMap;
    // 标识
    code?: string;
    // 排序序号
    sort?: number;
    // 是否启用
    enabled?: boolean;
    // 类型
    type?: string;
  };

  /**
   * 传入参数
   */
  export type ProcessManagementGrid = {
    // 名称
    name?: ApiCore.LocaleMap;
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
  export type Product = {
    // 产品序号
    id?: string;
    // 产品标识
    code?: string;
    // 产品名称
    name?: ApiCore.LocaleMap;
    // 隶属行业标识
    icode?: string;
    // 设备种类标识
    dccode?: string;
    // 通信协议标识
    cpcode?: string;
    // 产品功能(多个逗号分隔)
    moduleFunction?: string;
    // 型号属性(多个逗号分隔)
    modelAttr?: string;
    // 设备属性(多个逗号分隔)
    deviceAttr?: string;
    // 已经使用项目(多个逗号分隔)
    usedPro?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type ProductDetailRes = {
    // 产品序号
    id?: string;
    // 产品标识
    code?: string;
    // 基础型号名称
    name?: ApiCore.LocaleMap;
    // 隶属行业标识
    icode?: string;
    // 设备种类标识
    dccode?: string;
    // 通信协议标识
    cpcode?: string;
    // 行业
    iName?: string;
    // 种类名称
    dName?: string;
    // 使用的协议序号
    pId?: string;
    // 协议
    pName?: string;
    // 已使用项目数量
    usedProNum?: number;
    // 产品功能(多个逗号分隔)
    moduleFunction?: string;
    // 型号属性(多个逗号分隔)
    modelAttr?: string;
    // 设备属性(多个逗号分隔)
    deviceAttr?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type ProductFunctionData = {
    // 产品功能序号
    id?: string;
    // 产品功能名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type ProductGrid = {
    // 所属行业
    iName?: string;
    // 设备种类名称
    dName?: string;
    // 设备种类标识
    dccode?: string;
    // 产品型号标识
    code?: string;
    // 产品名称
    name?: ApiCore.LocaleMap;
    // 通信协议
    pName?: string;
    // 产品功能数量
    mfunctionNum?: number;
    // 型号属性数量
    modelNum?: number;
    // 设备属性数量
    deviceNum?: number;
    // 已使用项目数量
    usedProNum?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 备注
    desc?: string;
    // 产品序号
    id?: string;
    // 隶属行业标识
    icode?: string;
    // 通信协议标识
    cpcode?: string;
  };

  /**
   * 传入参数
   */
  export type ProductGridRes = {
    // 产品序号
    id?: string;
    // 隶属行业标识
    icode?: string;
    // 设备种类标识
    dccode?: string;
    // 通信协议标识
    cpcode?: string;
    // 所属行业
    iName?: string;
    // 设备种类名称
    dName?: string;
    // 产品标识
    code?: string;
    // 产品名称
    name?: ApiCore.LocaleMap;
    // 通信协议
    pName?: string;
    // 产品功能数量
    mfunctionNum?: number;
    // 型号属性数量
    modelNum?: number;
    // 设备属性数量
    deviceNum?: number;
    // 已使用项目数量
    usedProNum?: number;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type ProductModel = {
    // 产品型号序号
    id?: string;
    // 项目id
    prId?: string;
    // 基础型号id
    bId?: string;
    // 隶属行业序号
    iId?: string;
    // 设备种类序号
    cId?: string;
    // 厂商序号
    mId?: string;
    // 使用的协议序号
    pId?: string;
    // 产品型号名称
    name?: string;
    // 资产编号
    code?: string;
    // 设备类型
    type?: number;
    // 备注
    desc?: string;
    // 图面id
    imgId?: string;
    // 图片路径
    imgpath?: string;
    // 设备数量
    num?: number;
    // 行业及设备级联关系（aaa/bbb/ccc）
    linked?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ProductModelAttr = {
    // 序号
    id?: string;
    // 产品型号id
    pId?: string;
    // 基础型号id
    bId?: string;
    // 设备种类序号
    cId?: string;
    // 型号属性类型(自定义/必要)
    type?: string;
    // 型号属性代码
    code?: string;
    // 型号属性Id
    aId?: string;
    // 型号属性值
    value?: string;
    // 是否必填
    require?: boolean;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
  };

  /**
   * 传入参数
   */
  export type ProductModelGrid = {
    // 种类
    dName?: string;
    // 基础型号名称
    bName?: string;
    // 产品型号名称
    name?: string;
    // 资产编号
    code?: string;
    // 设备数量
    num?: number;
    // 厂家名称
    mName?: string;
    // 备注
    desc?: string;
    // 产品型号序号
    id?: string;
    // 基础型号序号
    bId?: string;
    // 设备种类序号
    cId?: string;
  };

  /**
   * 传入参数
   */
  export type ProductReq = {
    // 设备种类标识
    dccode?: string;
    // 产品序号数组
    ids?: string[];
  };

  /**
   * 传入参数
   */
  export type ProductSelect = {
    // 序号
    id?: string;
    // 名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type Project = {
    // 项目序号
    id?: string;
    // 所属租户code
    tenementCode?: string;
    // 城市序号
    did?: string;
    // 城市名称
    cityName?: string;
    // 项目名称
    projectName?: string;
    // 是否启用
    enabled?: boolean;
    // 状态码
    statusCode?: string;
    // 设备校验状态码
    verifyCode?: string;
    // 项目说明
    desc?: string;
    // 启动日期
    startTime?: string;
    // 上线日期
    onlineTime?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 项目图片key
    imgKeys?: string;
  };

  /**
   * 传入参数
   */
  export type ProjectCard = {
    // 名片序号
    id?: string;
    // 所属通讯录id
    bid?: string;
    // 名称
    cardName?: string;
    // 岗位
    station?: string;
    // 手机
    mobilePhone?: string;
    // 固话
    telephone?: string;
    // 传真
    fax?: string;
    // 邮箱
    mail?: string;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type ProjectCardGrid = {
    // 名称
    cardName?: string;
    // 岗位
    station?: string;
    // 手机
    mobilePhone?: string;
    // 固话
    telephone?: string;
    // 传真
    fax?: string;
    // 邮箱
    mail?: string;
    // 备注
    desc?: string;
    // 通讯录序号
    id?: string;
    // 项目序号
    bid?: string;
  };

  /**
   * 传入参数
   */
  export type ProjectDetail = {
    // 项目序号
    id?: string;
    // 城市序号
    did?: string;
    // 城市名称
    cityName?: string;
    // 租户code
    tenementCode?: string;
    // 租户名称
    tenantName?: string;
    // 项目名称
    projectName?: string;
    // 是否启用
    enabled?: boolean;
    // 状态
    status?: string;
    // 启动日期
    startTime?: string;
    // 上线日期
    onlineTime?: string;
    // 创建时间
    ctime?: string;
    // 编辑时间
    etime?: string;
    // 项目说明
    desc?: string;
    // 监控设备
    deviceNumber?: number;
    // 普通资产
    ordinaryAssets?: number;
    // 设备校验状态
    verify?: string;
    // 项目图片key
    imgKeys?: string;
  };

  /**
   * 传入参数
   */
  export type ProjectGrid = {
    // 城市名称
    cityName?: string;
    // 租户名称
    tenantName?: string;
    // 项目名称
    projectName?: string;
    // 是否启用
    enabled?: boolean;
    // 状态
    status?: string;
    // 启动日期
    startTime?: string;
    // 上线日期
    onlineTime?: string;
    // 监控设备
    deviceNumber?: number;
    // 普通资产
    ordinaryAssets?: number;
    // 设备校验
    verify?: string;
    // 项目序号
    id?: string;
    // 城市序号
    did?: string;
    // 租户code
    tenementCode?: string;
  };

  /**
   * 传入参数
   */
  export type ProjectSelect = {
    // 项目序号
    id?: string;
    // 项目名称
    name?: string;
    // 城市序号
    cityId?: string;
    // 城市纬度
    citylat?: number;
    // 城市经度
    citylng?: number;
    // 纬度
    lat?: number;
    // 经度
    lng?: number;
  };

  /**
   * 传入参数
   */
  export type QuickMenuDefineGrid = {
    // 菜单图标
    icon?: string;
    // 菜单文字
    text?: string;
    // 链接地址
    link?: string;
    // 是否启用
    enabled?: boolean;
    // 菜单图标类型
    menuIconType?: string;
    // 菜单图标地址
    menuIconUrl?: string;
    // 快捷菜单定义序号
    id?: string;
    // 租户标识
    tcode?: string;
    // 菜单标识
    mcode?: string;
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
  };

  /**
   * 传入参数
   */
  export type RelationLineCopy = {
    // 副本主键
    id?: string;
    // 流程线主键
    copyId?: string;
    // 工单序号
    ticketId?: string;
    // 工作流主键
    flowId?: string;
    // 处理按钮名称
    name?: string;
    // 流程线头节点
    from?: string;
    // 流程线尾节点
    to?: string;
    // 允许临时修改下一节点审批人
    editApproval?: boolean;
  };

  /**
   * 传入参数
   */
  export type ResultTypeScale = {
    // 计算方式标识
    code?: string;
    // 计算方式名称
    name?: string;
  };

  /**
   * 传入参数
   */
  export type SearchDeviceRes = {
    // 设备唯一标识
    id?: string;
    // 父节点标识
    pid?: string;
    // 纬度 （-90~90）
    lat?: number;
    // 经度 （-180~180）
    lng?: number;
    // 设备名称
    name?: string;
    // 设备类型
    type?: number;
    // 设备种类序号
    cId?: string;
    // 设备型号序号
    mId?: string;
    // 设备种类代号
    cCode?: number;
    // 设备地区序号
    dirId?: string;
    // 设备项目序号
    proId?: string;
    // 隶属行业代码
    iCode?: string;
  };

  /**
   * 传入参数
   */
  export type SearchDistrictRes = {
    // 序号
    id?: string;
    // 是否是地区/辖区
    type?: number;
    // 父节点标识
    pid?: string;
    // 地区一级分类
    ptype?: number;
    // 地区二级分类
    stype?: number;
    // 名称
    name?: string;
    // 地区纬度
    lat?: number;
    // 地区经度
    lng?: number;
    // 缩放等级
    zoom?: number;
    // 经纬度范围
    latLngRange?: string;
    // 备注
    desc?: string;
  };

  /**
   * 传入参数
   */
  export type SearchSysLanguageRes = {
    // 语言唯一标识
    id?: string;
    // 语言名称
    name?: string;
    // 语言标识（如：zh_CN）
    code?: string;
    // 是否默认语言
    defaulted?: boolean;
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
  export type SysApp = {
    // 系统应用唯一标识
    id?: string;
    // 系统分类code
    category?: string;
    // 系统应用标识（如：SYSTEM）
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 系统应用名称（国际化字段）
    name?: ApiCore.LocaleMap;
    // 排序序号
    sort?: number;
    // 默认排序
    defaultSort?: number;
  };

  /**
   * 传入参数
   */
  export type SysAppGrid = {
    // 系统分类code
    category?: string;
    // 系统应用名称
    name?: ApiCore.LocaleMap;
    // 系统应用标识（如：SYSTEM）
    code?: string;
    // 是否启用
    enabled?: boolean;
    // 系统应用唯一标识
    id?: string;
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
    permissions?: SysPermissionRes[];
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
    children?: SysAppRes[];
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
  export type SysClassify = {
    // 组件配置唯一标识
    id?: string;
    // 组件节点
    code?: string;
    // 组件父节点
    pCode?: string;
    // 组件配置名称（国际化字段）
    name?: ApiCore.LocaleMap;
    // 图标
    imgUrl?: string;
    // 排序
    sort?: number;
  };

  /**
   * 传入参数
   */
  export type SysClassifyGrid = {
    // 组件节点
    code?: string;
    // 组件父节点
    pCode?: string;
    // 组件配置名称（国际化字段）
    name?: ApiCore.LocaleMap;
    // 图标
    imgUrl?: string;
    // 排序
    sort?: number;
    // 组件配置唯一标识
    id?: string;
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
    // 组件配置名称（国际化字段）
    name?: ApiCore.LocaleMap;
    // 排序
    sort?: number;
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
    name?: ApiCore.LocaleMap;
  };

  /**
   * 传入参数
   */
  export type SysComponentDetail = {
    // 参数序号
    id?: string;
    // 参数标识
    code?: string;
    // 名称(国际化字段)
    name?: ApiCore.LocaleMap;
    // 名称说明(国际化字段)
    nameExplain?: ApiCore.LocaleMap;
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
  };

  /**
   * 传入参数
   */
  export type SysComponentGrid = {
    // 所属分类名
    cName?: string;
    // 组件组件名称（国际化字段）
    name?: ApiCore.LocaleMap;
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
  };

  /**
   * 传入参数
   */
  export type SysComponentParmGrid = {
    // 名称(国际化字段)
    name?: ApiCore.LocaleMap;
    // 参数标识
    code?: string;
    // 数据类型
    type?: string;
    // 默认值
    value?: string;
    // 参数序号
    id?: string;
  };

  /**
   * 传入参数
   */
  export type SysFunctionGrid = {
    // 组件功能名称（国际化字段）
    name?: ApiCore.LocaleMap;
    // 组件功能标识
    code?: string;
    // 是否启动
    enabled?: boolean;
    // 组件功能唯一标识
    id?: string;
    // 所属系统组件标识
    scCode?: string;
  };

  /**
   * 传入参数
   */
  export type SysFunctions = {
    // 系统组件功能id
    id?: string;
    // 系统组件唯一标识
    scCode?: string;
    // 系统组件名称（国际化）
    name?: ApiCore.LocaleMap;
    // 系统组件功能唯一标识
    code?: string;
    // 是否启动
    enabled?: boolean;
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
  };

  /**
   * 传入参数
   */
  export type SysModuleGrid = {
    // 系统模块标识（如：GIS）
    code?: string;
    // 所属系统模块
    pname?: string;
    // 系统模块名称
    name?: string;
    // 是否启用
    enabled?: boolean;
    // 系统应用唯一标识
    id?: string;
    // 系统应用code
    sCode?: string;
    // 父模块code
    pCode?: string;
    // 语言标识
    langCode?: string;
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
    childModules?: SysModuleRes[];
    // 系统页面数据
    appPageRes?: SysAppPageRes[];
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
    // 子节点数据数组
    children?: SysModuleVo[];
    // 系统模块名称
    name?: string;
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
    // 字段名称
    name?: ApiCore.LocaleMap;
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
  };

  /**
   * 传入参数
   */
  export type SystemFieldGrid = {
    // 字段名称
    name?: ApiCore.LocaleMap;
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
  };

  /**
   * 传入参数
   */
  export type SystemInfo = {
    // 系统信息唯一标识
    id?: string;
    // 系统版本
    version?: string;
    // 工程密码
    password?: string;
    // 发行日期
    issueDate?: string;
    // 授权期限（截至时间）
    timeLimit?: string;
  };

  /**
   * 传入参数
   */
  export type SystemInformation = {
    // 名称（国际化字段）
    name?: ApiCore.LocaleMap;
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
  export type SystemInformationGrid = {
    // 访问地址
    url?: string;
    // 系统版本
    edition?: string;
    // 发行日期
    publishDate?: string;
    // 发行说明
    publishAccount?: string;
    // 系统概括唯一标识
    id?: string;
    // 租户唯一标识
    tCode?: string;
  };

  /**
   * 传入参数
   */
  export type SystemLanguage = {
    // 语言唯一标识
    id?: string;
    // 语言名称
    name?: string;
    // 语言标识（如：zh_CN）
    code?: string;
    // 是否默认语言
    defaulted?: boolean;
    // 顺序
    sort?: number;
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
  export type SystemOverview = {
    // 系统概况唯一标识
    id?: string;
    // 访问地址
    address?: string;
  };

  /**
   * 传入参数
   */
  export type SystemOverviewRes = {
    // 系统概况唯一标识
    id?: string;
    // 访问地址
    address?: string;
    // 租户数量
    lesseeNum?: number;
    // 控制设备数量
    controlDeviceNum?: number;
    // 项目数量
    projectNum?: number;
    // 普通资产数量
    assetNum?: number;
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
  export type Tenant2Database = {
    // 名称（国际化字段）
    name?: ApiCore.LocaleMap;
    // 主键
    id?: string;
    // 租户
    tenantId?: string;
    // 数据库
    databaseId?: string;
    // 数据库密码
    password?: string;
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
  export type TenantRes = {
    // 租户id
    tid?: string;
    // 租户名称
    tenantName?: string;
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
  export type TreeView = {
    // 序号
    id?: string;
    // 父序号
    pid?: string;
    // 代码
    code?: string;
    // 名称
    name?: string;
    // 子节点数据数组
    children?: TreeView[];
  };

  /**
   * 传入参数
   */
  export type UnitTypeRes = {
    // 类别码
    code?: string;
    // 类别名称
    type?: string;
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
  export type UsedModelData = {
    // 型号序号
    id?: string;
    // 型号名称
    name?: string;
    // 图片路径
    imgPath?: string;
    // 设备模组编号
    mcode?: number;
    // 默认型号图片状态图标
    defaultIcon?: DeviceModelIcon[];
  };

  /**
   * 传入参数
   */
  export type UserColumn = {
    // 用户唯一标识
    uid?: string;
    // 表格唯一标识，格式：MD5(URL+TABLEID)
    tid?: string;
    // 机构序号
    oid?: string;
    // 自定义列数组字符串，格式：["col1","col2"]
    cols?: string;
  };

  /**
   * 传入参数
   */
  export type Workflow = {
    // 工作流序号
    id?: string;
    // 中文名称
    name?: string;
    // 创建时间
    cTime?: string;
    // 描述
    desc?: string;
    // 创建人序号
    creator?: string;
    // 修改人序号
    editor?: string;
    // 修改时间
    eTime?: string;
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
  };

  /**
   * 传入参数
   */
  export type WorkflowCopy = {
    // 副本主键
    id?: string;
    // 工作流序号
    copyId?: string;
    // 工单序号
    ticketId?: string;
    // 中文名称
    zh_CN?: string;
    // 英文名称
    en_US?: string;
    // 英文名称
    cTime?: string;
    // 描述
    desc?: string;
    // 创建人序号
    creator?: string;
    // 修改人序号
    editor?: string;
    // 修改时间
    eTime?: string;
    // 是否启用
    enable?: boolean;
    // 是否使用中
    beUsed?: boolean;
    // 发起机构
    orgId?: string;
    // 参与机构数量
    orgCount?: number;
    // 节点数量
    nodeCount?: number;
    // 表单数量
    formCount?: number;
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
    workFlowTypeName?: string;
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
    // 发起机构序号
    tCode?: string;
    // 工单类型
    workOrderType?: string;
    // 流程类型
    workFlowType?: string;
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

  /**
   * 传入参数
   */
  export type initData = {
    // 所属租户标识
    tCode?: string;
    // 数据库标识
    dCode?: string;
  };

  //#endregion

  //#region 枚举支持
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

  //#endregion
}

export default ApiBackstage;
