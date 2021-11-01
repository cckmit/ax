import { RouteConfig } from 'vue-router';

// 页面列表
export type IHeaderPanel = { path: string; text: string };

// 侧栏导航列表
export type IStageSidebar = { routes: RouteConfig[]; title: string };

/**
 * 路由附加元数据格式
 */
export interface IRouterMeta {
  // 模块名称
  module?: string;
  // 名称
  label?: string;
}
