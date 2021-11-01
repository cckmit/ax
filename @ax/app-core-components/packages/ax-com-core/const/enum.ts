/* ================================  数据枚举定义 =================================== */

/**
 * 布局 枚举定义
 */
export enum LayoutType {
  /* 水平布局 */
  VERTICAL = 'vertical',
  /* 垂直布局 */
  HORIZONTAL = 'horizontal',
}

/**
 * 文本输入框枚举定义
 */
export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  TEXT_AREA = 'textarea',
}

/**
 * 标记类型
 */
export enum BadgeType {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

/**
 * 按钮类型
 */
export enum ButtonType {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info',
  TEXT = 'text',
}

/**
 * 面板预设样式类
 */
export enum BoardPresetClass {
  TABLE_ABSOLUTE = 'table_absolute',
}

/**
 * 链接类型
 */
export enum LinkType {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info',
  DEFAULT = 'default',
}

/**
 * 按钮大小
 */
export enum ButtonSize {
  MAX = 'max',
  LARGE = 'large',
  NORMAL = 'normal',
  SMALL = 'small',
  MINI = 'mini',
}

/**
 * 分割线类型
 */
export enum DividerType {
  // 水平
  HORIZONTAL = 'horizontal',
  // 垂直
  VERTICAL = 'vertical',
}

/**
 * 分割线预设
 */
export enum DividerPreset {
  // 按钮
  BUTTON = 'button',
}

/**
 * 顶部栏模式
 */
export enum HeaderMode {
  // 一级栏目
  FIRST = 'first',
  // 一级栏目 带背景
  FIRST_BG = 'first_bg',
  // 二级栏目
  SECOND = 'second',
  // form内分隔
  FORM_SPLIT = 'form_split',
  // form内标题 带背景
  FORM_BG = 'form_bg',
}

/**
 * 标签类型
 */
export enum TagType {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info',
}

/**
 * 标签大小
 */
export enum TagSize {
  LARGE = 'large',
  NORMAL = 'normal',
  SMALL = 'small',
}

/**
 * 下拉框类型
 */
export enum DropdownType {
  /**
   * 普通下拉选择框
   */
  NORMAL = 'select',
  /**
   * 文本输入下拉框
   */
  BORDER = 'input',
}

/**
 * 下拉框位置
 */
export enum DropdownPosition {
  // 顶部 中间
  TOP = 'top',
  // 顶部 左对齐
  TOP_START = 'top-start',
  // 顶部 右对齐
  TOP_END = 'top-end',
  // 底部 中间
  BOTTOM = 'bottom',
  // 底部 左对齐
  BOTTOM_START = 'bottom-start',
  // 底部 右对齐
  BOTTOM_END = 'bottom-end',
}

/**
 * 复选框类型
 */
export enum CheckboxType {
  /**
   * 普通复选框
   */
  NORMAL = 'normal',
  /**
   * 按钮形状复选框
   */
  BUTTON = 'button',
  /**
   * 带边框复选框
   */
  BORDER = 'border',
  /**
   * 开关样式复选框
   */
  SWITCH = 'switch',
}

/**
 * 单选框类型
 */
export enum RadioType {
  NORMAL = 'normal',
  BUTTON = 'button',
  BORDER = 'border',
}

/**
 * 用户控制组件时的缩放类型
 * @export
 * @enum {string} 缩放类型字符串
 */
export enum ResizeType {
  NONE = 'none',
  BOTH = 'both',
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

/**
 * 表单数据值类型
 */
export enum FormValueType {
  /**
   * 数组类型，设置后可以使用与方式设置数组内部的数据类型（如: FormValueType.ARRAY|FormValueType.STRING 表示字符串类型的数组）
   */
  ARRAY = 1,
  /**
   * 字符串数据类型
   */
  STRING = 2,
  /**
   * 整数类型
   */
  INT = 4,
  /**
   * 单精度浮点数
   */
  FLOAT = 8,
  /**
   * 双精度数
   */
  DOUBLE = 16,
  /**
   * 布尔类型
   */
  BOOLEAN = 32,
  /**
   * 日期类型
   */
  DATE = 64,
  /**
   * 密码类型
   */
  PASSWORD = 128,
}

/**
 * 移动方向的枚举
 */
export enum MoveDirType {
  UP = 'up',
  DOWN = 'down',
}

/**
 * 弹窗类型定义
 */
export enum DialogType {
  CONFIRM = 1,
  CANCEL = 2,
  CLOSE = 3,
}

/**
 * 目录树事件类型
 */
export enum TreeEventType {
  /**
   * 当前选中的节点变化事件，参数: ( id: string, data: TreeMapData )
   */
  CHANGE = 'change',
  /**
   * 节点点击事件，参数: ( data: TreeMapData )
   */
  NODE_CLICK = 'node-click',
  /**
   * 显示右键菜单事件，参数: ( event: Event, data: TreeMapData )
   */
  NODE_CONTEXTMENU = 'node-contextmenu',
  /**
   * 勾选节点事件，参数: ( data: TreeMapData, checked: boolean )
   */
  CHECK_CHANGE = 'check-change',
  /**
   * 当复选框被点击的时候触发，参数: ( data: TreeMapData, checkedkeynode: ITreeCheckedKeyNode)
   */
  CHECK = 'check',
  /**
   * 展开节点事件，参数: ( data: TreeMapData )
   */
  NODE_EXPAND = 'node-expand',
  /**
   * 合上节点事件，参数: ( data: TreeMapData )
   */
  NODE_COLLAPSE = 'node-collapse',
}

/**
 * 信息对话框按钮类型定义
 */
export enum MessageButtonType {
  /**
   * 右上角关闭按钮
   */
  CLOSE = 1,
  /**
   * 确认按钮
   */
  OK = 2,
  /**
   * 取消按钮
   */
  CANCEL = 4,
  /**
   * 是按钮
   */
  YES = 8,
  /**
   * 否按钮
   */
  NO = 16,
}

/**
 * 信息样式类型定义
 */
export enum MessageStyle {
  /**
   * 提示（无图标）
   */
  TIPS = 0,
  /**
   * 成功状态/图标
   */
  SUCCESS = 1,
  /**
   * 信息状态/图标
   */
  INFO = 2,
  /**
   * 警告状态/图标
   */
  WARNING = 3,
  /**
   * 错误状态/图标
   */
  ERROR = 4,
}

/**
 * 通知信息位置定义
 */
export enum NotifyPosition {
  /**
   * 坐上角位置
   */
  TOP_LEFT = 1,
  /**
   * 顶部中间
   */
  TOP_MIDDLE = 2,
  /**
   * 右上角位置
   */
  TOP_RIGHT = 3,
  /**
   * 右下角位置
   */
  BOTTOM_RIGHT = 4,
  /**
   * 左下角位置
   */
  BOTTOM_LEFT = 5,
}

/**
 * 表格行的可选类型
 */
export enum TableBoxType {
  // 不可选
  NONE = '0',
  // 单选框
  RADIO = '1',
  // 多选框
  CHECKBOX = '2',
}

/*时间选择*/
export enum AxTimeType {
  SELECT = 'SELECT',
  PICKER = 'PICKER',
}
