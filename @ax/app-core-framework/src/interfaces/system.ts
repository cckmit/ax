// 应用模块定义
export interface IModules {
  // 模块id标识
  id: string;
  // 模块code
  code: string;
  // 模块权限信息
  licenses: IModulesLicenses;
}

// 模块权限定义
export interface IModulesLicenses {
  // 可查看
  view: boolean;
  // 可编辑
  edit: boolean;
}

// 应用信息数据定义
export interface IAppInfo {
  // 应用id标识
  id: string;
  // 应用模块
  modules: IModules[];
  // 子系统
  children?: IAppInfo[];
}

// 子模块注册选项
export interface ISystemModuleOptions {
  name: string;
}
