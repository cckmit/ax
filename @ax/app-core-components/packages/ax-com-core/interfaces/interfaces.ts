import { VNode } from 'vue';
import { Location } from 'vue-router/types/router';
import { MessageStyle } from '../const/enum';
import { AxUIComponent } from '../core';

/* ================================  数据接口定义 =================================== */

/**
 * 布局分割 配置
 */
export interface ILayerConfig {
  /**
   * 布局方向 默认: LayoutType.HORIZONTAL
   */
  dir?: string;
  /**
   * 第一个布局百分比 默认: 25%
   */
  split?: string;
  /**
   * 第一个栏目配置 (组件序号 或 布局分割 配置)
   */
  first: ILayerConfig | number;
  /**
   * 第二个栏目配置 (组件序号 或 布局分割 配置)
   */
  second: ILayerConfig | number;
}

/**
 * 下拉框选项数据定义
 */
export interface IOptionData {
  /**
   * 当前文本
   */
  text: string;
  /**
   * 当前数据键（必须，需具备唯一性）
   */
  key: string | number;
  /**
   * 当前数据值（可选）
   */
  value?: any;
  /**
   * 选项是否可用（可选，默认：false 表示显示）
   */
  disabled?: boolean;
}

/**
 * table列的功能
 */
export interface ITableColumns {
  // 如果是国际化的话,匹配国际化
  label: string;
  // 对应列内容的字段名，也可以使用 property 属性
  name: string;
  // 对齐方式
  align?: string;
  // 是否可以行内编辑
  isEdit?: boolean;
  // 是否可以排序
  isRange?: boolean;
  // 是否隐藏
  isHide?: boolean;
  // 是否是链接
  isLink?: boolean;
  // 是否是选择框
  isSelect?: boolean;
  // 是否是图片
  isImage?: boolean;
  // 是否是启用禁用
  isEnable?: boolean;
  // 宽度值 单位：rem
  width?: number;
  // 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 单位：rem
  minWidth?: number;
  // 行内编辑时用到的form配置
  editConfig?: IFormConfig[];
  // tooltip组件偏移量
  editOffset?: number;
  // 是否隐藏tooltip
  hideTooltip?: boolean;
  // 内容转换
  translate?(value: any, row: any): any;
  // 使用vue渲染器渲染
  render?(value: any, row: any): VNode | VNode[];
}

/**
 * table列的功能 转换后
 */
export interface ITableColumnsLoaded extends ITableColumns {
  ASC: boolean;
  DESC: boolean;
}

/**
 * table操作列定义
 */
export interface ITableOperation {
  label?: string;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  list: {
    value: string | ITableOperationValueFunc;
    isIcon?: boolean;
    click?: (row: any) => void;
    disabled?: (row: any) => void;
    hidden?: (row: any) => void;
  }[];
}

// table操作列值的动态返回方法
export type ITableOperationValueFunc = (row: any) => string;

/**
 * table 的源数据
 */
export interface ITableData {
  type?: string;
  id?: string;
  ptype?: number;
}

/**
 * cellblur 编辑表格失去焦点后的组件的this内容
 */
export interface ITableInput {
  /**
   * 当前那一行的table行数据
   */
  scope: { row: any };
  /**
   * 修改前的值
   */
  tempValue: any;
  /**
   * 是否显示input组件的开关
   */
  editFlag: boolean;
  /**
   * 是否显示修改标志的开关
   */
  correctFlag: boolean;
  /**
   * 可以找到这个组件的ref,里面有form表单的ref,用作找到form表单的ref进行验证
   */
  $refs: any;
}

/**
 * 表格排序格式
 */
export interface ITableSort {
  k: string;
  v: string;
}

/**
 * 正在移动的某一行
 */
export interface ITableMove {
  /**
   * 当前行数据
   */
  row: any;
  /**
   * 当前行位置
   */
  $index: number;
}

/**
 * 分发移动行的目标/源数据
 */
export interface IMoveRow {
  /**
   * 当前行数据
   */
  row: any;
  /**
   * 位置
   */
  index: number;
  /* id */
  id: string;
}

export type IKey = string | number;

export interface IKeyLabelData {
  key: IKey;
  label: string;
}

export interface INavigatorData {
  text: string;
  path?: string | Location;
  link?: boolean;
  data?: any;
}

// *******************dialog 弹窗******************
export interface IDialogOption {
  title?: string;
  /**
   * 是否显示footer
   */
  showFooter?: boolean;
  /**
   * 传入的高度
   */
  height?: number;

  /**
   * button是否正在 loading
   */
  loading?: boolean;

  /**
   * dialog 的宽度 (默认为 50%)
   */
  width?: string;

  /**
   * Dialog 的自定义类名
   */
  customClass?: string;
  /**
   * 是否为全屏 Dialog (默认为 false 不全屏)
   */
  fullscreen?: boolean;
  /**
   * Dialog CSS 中的 margin-top 值 (默认为 15vh)
   */
  top?: string;

  /**
   * 是否需要遮罩层 (默认为 true)
   */
  modal?: boolean;

  [key: string]: any;
}

/* 弹窗位置 */
export interface IPosition {
  x: number;
  y: number;
  height?: string;
  width?: string;
}

/**
 * 表单配置数据定义
 */
export interface IFormConfig {
  /**
   * 数据属性名称(必须)
   */
  name: string;
  /**
   * 当前数据键文本(必须)
   */
  text: string;
  /**
   * 数据类型（必须，对应: FormValueType.XXXX，数组时使用 | 或操作符来表明数组内部数据类型）
   */
  type: number;
  /**
   * 是否禁用本配置（可选，默认：false）
   */
  disabled?: boolean;
  /**
   * 是否必填数据（可选，默认：false）
   */
  required?: boolean;
  /**
   * 最小值（可选，不设置表示不限制，对于字符串或数组类型则为最小长度）
   */
  min?: number;
  /**
   * 最大值（可选，不设置表示不限制，对于字符串或数组类型则为最大长度）
   */
  max?: number;
  /**
   * 小数位
   */
  digits?: number;
  /**
   * 不接受输入的限制字符正则表达式（可选，不设置表示接受所有输入）
   */
  exreg?: string;
  /**
   * 输入不符合的情况下显示的特殊描述（可选，会替换掉原本的描述，注意国际化）
   * XXX：如果使用组件内自带的提示的话，针对exreg的提示会有问题，并不适用所有正则
   */
  spText?: string;
  /**
   * 数据验证器方法
   * @param {any} value 当前组件值
   * @param {IFormConfig} conf 当前数据配置项
   * @param {AxUIComponent} comp 当前组件对象
   * @param {string} eventType 当前触发校验的事件(包括: change, blur, validate)
   * @returns {IValidatorResult} 校验结果（若返回 null 或 undefined 则使用默认规则进行校验）
   */
  validator?: (
    value: any,
    conf?: IFormConfig,
    comp?: AxUIComponent,
    eventType?: string
  ) => IValidatorResult | undefined | null;
}

/**
 * 校验结果数据定义
 */
export interface IValidatorResult {
  /**
   * 是否校验通过
   */
  passed: boolean;
  /**
   * 校验失败后的提示信息文本
   */
  message: string;
}

// Cascader组件配置
export interface ICascaderConfig {
  // 指定选项的值为选项对象的某个属性值
  value?: string;
  // 指定选项标签为选项对象的某个属性值
  label?: string;
  // 指定选项的子选项为选项对象的某个属性值
  children?: string;
  // 指定选项的禁用为选项对象的某个属性值
  disabled?: string;
}

export interface ICascaderProps {
  /** 指定选项的值为选项对象的某个属性值,默认值'value' */
  value?: string;
  /* 指定选项标签为选项对象的某个属性值,默认值 'label'*/
  label?: string;
  /* 指定选项的子选项为选项对象的某个属性值,默认值 'children' */
  children?: string;
  /** 指定选项的禁用为选项对象的某个属性值,默认值'disabled' */
  disabled?: string;
  lazy: boolean;
  // 是否多选
  multiple?: boolean;
  lazyLoad: (node: any, resolve: any) => void;
}

export interface ICascaderNode {
  level: number; // 0
  loading: boolean; // true
  root: boolean; // true

  children?: any[]; // Array(0)
  config?: any; // Object
  data?: any; // Object
  hasChildren?: boolean; // true
  label?: string; //  "选项0.780097672168631"
  loaded?: boolean; // false
  parent?: ICascaderNode;
  path?: any[]; // Array(2)
  pathLabels?: any[]; // Array(2)
  pathNodes?: any[]; // Array(2)
  uid?: number; // 2
  value?: any; //  0.07737450322440287
  isDisabled?: null;
  isLeaf?: boolean; //  false
}

/**
 * 表单提示数据定义
 */
export interface IFormTip {
  /**
   * 顶部距离
   */
  top: number;
  /**
   * 左侧距离
   */
  left: number;
  /**
   * 是否显示标识
   */
  shown: boolean;
  /**
   * 提示信息文本
   */
  message?: string;
}

export interface IScope {
  // 第几行
  $index: number;
  // 列的配置
  column: any;
  // 当前行的数据
  row: any;
}

/**
 * 目录配置对象
 */
export interface ITreeConfig<T = {}> {
  /**
   * 唯一标识属性名称（默认：id）
   */
  idKey?: string | keyof T;
  /**
   * 数据父节点属性名称（默认：pid，此属性名称与 childrenKey 属性名称任选其一，同时存在时，默认 childrenKey 属性优先）
   */
  pidKey?: string | keyof T;
  /**
   * 图标样式属性名称（默认：icon）
   */
  iconKey?: string | keyof T;
  /**
   * 图标默认颜色属性名称（默认：'iconColor'）
   */
  iconColorKey?: string | keyof T;
  /**
   * 图片地址属性名称（默认：image）
   */
  imageKey?: string | keyof T;
  /**
   * 节点自定义class（默认：'nodeClass'）
   */
  nodeClassKey?: string | keyof T;
  /**
   * 目录文本属性名称（默认：text）
   */
  textKey?: string | keyof T;
  /**
   * 禁止使用（默认：disabled）
   */
  disabledKey?: string | keyof T;
  /**
   * 子节点数量属性名称（默认：count，仅当使用异步加载数据时有效）
   */
  childCountKey?: string | keyof T;
  /**
   * 子数据属性名称（默认：children，此属性名称与 pidKey 属性名称任选其一，默认此属性优先）
   */
  childrenKey?: string | keyof T;
}

/**
 * 当复选框被点击的时候触发的节点信息
 */
export interface ITreeCheckedKeyNode {
  /**
   * 选择节点key
   */
  checkedKeys: any;
  /**
   * 选择节点node
   */
  checkedNodes: any;
  /**
   * 半选节点key
   */
  halfCheckedKeys: any;
  /**
   * 半选节点node
   */
  halfCheckedNodes: any;
}

/**
 * 不再使用，树节点属性可以完全自定义，可以通过ITreeConfig的泛型来定义
 * @deprecated
 */
export interface ITreeData {
  /**
   * 键值对数据
   */
  [key: string]: any;
}

/**
 * 目录集合数据对象接口
 */
export interface ITreeMapData {
  /**
   * 数据唯一标识
   */
  id: string;
  /**
   * 父节点数据标识
   */
  pid: string;
  /**
   * 目录文本标签
   */
  text: string;
  disabled?: boolean;
  /**
   * 数据对象
   */
  data: ITreeData;
  /**
   * 子节点数据数组
   */
  children: ITreeMapData[];
}

// ******************* message ******************

/**
 * 关闭执行对象接口
 */
export interface ICloseHandler {
  /**
   * 关闭界面
   */
  close(): void;
}

/**
 * 确认窗口选项
 */
export interface IAlertOptions {
  /**
   * 窗口标题（可选，默认自动根据 style 类型判断）
   */
  title?: string;
  /**
   * 是否作为 HTML 解析（可选，默认 true）
   */
  asHTML?: boolean;
  /**
   * 自定义图标样式类
   */
  iconClass?: string;
  /**
   * 信息类型（可选，默认: MessageStyle.TIPS）
   */
  style?: MessageStyle;
  /**
   * 是否显示右上角的关闭按钮（可选，默认 true）
   */
  showClose?: boolean;
  /**
   * 是否显示确认按钮（可选，默认 true）
   */
  showConfirmButton?: boolean;
  /**
   * 是否显示取消按钮（可选，默认 false）
   */
  showCancelButton?: boolean;
  /**
   * 取消按钮文本，默认对应国际化 'msg.button.ok' 的文本
   */
  confirmButtonText?: string;
  /**
   * 取消按钮文本，默认对应国际化 'msg.button.cancel' 的文本
   */
  cancelButtonText?: string;
}

/**
 * 通知信息选项
 */
export interface INotifyOptions {
  /**
   * 标题文字（可选）
   */
  title?: string;
  /**
   * 是否作为 HTML 解析（可选，默认 true）
   */
  asHTML?: boolean;
  /**
   * 是否显示右上角的关闭按钮（可选，默认 true）
   */
  showClose?: boolean;
  /**
   * 垂直偏移量（可选，默认 0）
   */
  offset?: number;
  /**
   * 自定义图标样式类
   */
  iconClass?: string;
}

/**
 * table树形数据配置
 */
export type TableTreeProps = { children: string; hasChildren?: string };

// 分页加载配置
export type TablePageConfig = {
  // 每页条数
  size: number;
  // 数据总数，超过此值将不再加载，默认无限
  count?: number;
  // 起始页码，默认1
  start?: number;
  // 是否在组件初始化完成后就自动加载第一页，不自动加载的话使用xxx
  autoLoad?: boolean;
};

// 分页加载器类型
export type TablePageLoader = (page: number) => Promise<any[] | undefined>;

// 级联选择器节点
export interface CascaderNode<V = any, D = any> {
  uid: number;
  data: D;
  value: V;
  label: string;
  level: number;
  isDisabled: boolean;
  isLeaf: boolean;
  parent: CascaderNode<V, D> | null;
  children: CascaderNode<V, D>[];
  config: CascaderProps<V, D>;
}

// 级联选择器属性配置
export type CascaderProps<V = any, D = any> = {
  // 次级菜单的展开方式
  expandTrigger?: string;
  // 是否多选
  multiple?: boolean;
  // 是否严格的遵守父子节点不互相关联
  checkStrictly?: boolean;
  // 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
  emitPath?: boolean;
  // 次级菜单的展开方式
  lazy?: boolean;
  // 加载动态数据的方法，仅在 lazy 为 true 时有效
  lazyLoad?: (
    // 当前点击的节点
    node: CascaderNode<V, D>,
    // 数据加载完成的回调(必须调用)
    resolve: (dataList?: D[]) => void
  ) => void;
  // 指定选项的值为选项对象的某个属性值
  value?: string;
  // 指定选项标签为选项对象的某个属性值
  label?: string;
  // 指定选项的子选项为选项对象的某个属性值
  children?: string;
  // 指定选项的禁用为选项对象的某个属性值
  disabled?: string;
  // 指定选项的叶子节点的标志位为选项对象的某个属性值
  leaf?: string;
};
