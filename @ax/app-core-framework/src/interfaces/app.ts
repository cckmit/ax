export interface HomeSetting {
  /**
   * 侧边栏状态 (0: 关, 1: 文字样式开, 2: 图标样式开)
   */
  sidebarStatus: number;
}

export interface OrgRouter {
  /**
   * 临时存放详细机构页面名称 (存在删除逻辑)
   */
  data: any[];
}

// 主题可选项
export type ThemeOption = { code: string; name: string };
