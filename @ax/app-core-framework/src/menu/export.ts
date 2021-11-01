// 快捷菜单类型定义
export type MenuShortcut = {
  // 菜单图标
  icon: string;
  // 菜单文字
  text: string;
  // 链接地址
  link: string;
  // 是否启用
  enabled: boolean;
};

// 编辑时会添加id，传给后端保存时不会
export type MenuShortcutEdit = MenuShortcut & { id: string };

// 应用树选择节点类型
export type MenuAppCasType = 'system' | 'module' | 'page';

// 应用树选择节点数据
export type MenuAppCasNode<T> = { type: MenuAppCasType; data: T };

// 应用模块保存节点数据
export type MenuAppCasData = {
  type: MenuAppCasType;
  code: string;
  name: string;
  logo: string;
};

// 菜单页面配置
export type MenuPageData = {
  list?: MenuAppCasData[];
  first?: string;
  second?: string;
  url?: string;
};

// 菜单页面选项
export type MenuPageOption = {
  targetBlank?: boolean;
  pined?: boolean;
  redirect?: string;
  padding?: string;
};

// 菜单附加选项
export type MenuAppendOption = {
  interfaceTitle?: string;
  copyright?: string;
  shortcutList?: MenuShortcut[];
};

// 导航页面分组类型
export enum MenuType {
  // "登录"
  SYSTEM_LOGIN_PAGE = '5',
  // "首页"
  SYSTEM_HOME_PAGE = '6',
  // "导航"
  MENU_NAVIGATION_PAGE = '3',
  // "布局组"
  NAV_LAYOUT_GROUP = '4',
  // "目录"
  NAV_CATEGORY_GROUP = '8',
  // "应用系统页面"
  APPLICATION_SYSTEM_PAGE = '1',
  // "数据可视化页面"
  DATA_VISUALIZATION_PAGE = '2',
  // "自定义连接页面"
  CUSTOM_PAGE = '7',
}

// 导航页面分组类型
export enum MenuNavType {
  // 卡片方式显示子菜单
  CARD = 'card',
  // 顶部导航栏显示子菜单
  TOP = 'top',
  // 左侧导航栏显示子菜单
  LEFT = 'left',
  // 左侧菜单树显示子菜单
  TREE = 'tree',
}

// 导航布局组类型
export enum MenuGroupType {
  // 默认布局方式
  DEFAULT = 'default',
  // 指定布局方式
  ASSIGN = 'assign',
}

// 导航布局类型
export enum MenuLayoutType {
  // 左侧或顶部排列
  LEFT_TOP = 'left_top',
  // 右侧或底部排列
  RIGHT_BOTTOM = 'right_bottom',
}
