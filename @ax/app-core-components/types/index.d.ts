import { Dropdown, Select } from 'element-ui';
import { CascaderNode } from 'element-ui/types/cascader';
import { VNode, VueConstructor } from 'vue';
import { Vue } from 'vue-property-decorator';
import { Location } from 'vue-router/types/router';
import { TLangComponents } from './locale';
import './vue';

export declare class TableHandler {
  dataMap: Map<string, any>;
  private totalColumn;

  setColumn(val: string[]): void;

  /**
   * 设置 dataMap,每一个 Map 集合的值,都是对象
   * @param data 原始数据
   * @param attrList 所有属性的数组集合
   * @param attr 指定哪一个属性作为 Map 集合的 key 值
   */
  createMapData(data: any, attrList: string[], attr?: string): void;

  /**
   * 获取正确的属性,用于拿到正确的界面显示内容
   * @param attr 需要的属性
   * @param value 单个map的值
   */
  getValue(attr: string, value: any): any;

  /**
   * 设置一条数据,无论是增加还是修改
   * @param key 键
   * @param value 值
   */
  setData(key: any, value: any): object | undefined;
}

export declare namespace AxComCore {
  /**
   * AX 组件基类
   */
  export abstract class AxUIComponent extends Vue {
    /**
     * 当前表单对象
     */
    private mform;
    /**
     * 内部临时值（解决未绑定 v-model 问题）
     */
    private mvalue;
    /**
     * 校验状态
     */
    private validate?;

    /**
     * 获取当前父表单对象（不存在则返回 null）
     */
    private get form();

    /**
     * 设置当前数据校验状态
     */
    set validatePassed(val: boolean | undefined);
    /**
     * 获取当前数据校验状态
     */
    get validatePassed(): boolean | undefined;

    /**
     * 对外设置或提供的模块值
     */
    get modelValue(): any;
    /**
     * 更新值之后通知外部绑定的值变化
     * @param value
     */
    set modelValue(value: any);

    /**
     * 设置表单项数据值处理
     * @param {*} value 当前表单数据值
     */
    setFormItemValue(value: any): void;

    /**
     * 当前组件数据值
     */
    data?: any;
    /**
     * 默认提示文本（占位符）
     */
    placeholder?: string;
    /**
     * 是否允许清空组件内容
     */
    clearable?: boolean;
    /**
     * 是否被禁用
     */
    disabled?: boolean;
    /**
     * 组件对象名称
     */
    name?: string;

    /**
     * 获取焦点方法
     * @returns {AxUIComponent} 当前组件对象
     */
    abstract focus(): AxUIComponent;
  }

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
  export interface IOptionData<K = string | number, V = any> {
    /**
     * 当前文本
     */
    text: string;
    /**
     * 当前数据键（必须，需具备唯一性）
     */
    key: K;
    /**
     * 当前数据值（可选）
     */
    value?: V;
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
    // TODO
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
    scope: {
      row: any;
    };
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

  export interface ICascaderConfig {
    value?: string;
    label?: string;
    children?: string;
    disabled?: string;
  }

  export interface ICascaderProps {
    /** 指定选项的值为选项对象的某个属性值,默认值'value' */
    value?: string;
    label?: string;
    children?: string;
    /** 指定选项的禁用为选项对象的某个属性值,默认值'disabled' */
    disabled?: string;
    lazy: boolean;
    multiple?: boolean;
    lazyLoad: (node: any, resolve: any) => void;
  }

  export interface ICascaderNode {
    level: number;
    loading: boolean;
    root: boolean;
    children?: any[];
    config?: any;
    data?: any;
    hasChildren?: boolean;
    label?: string;
    loaded?: boolean;
    parent?: ICascaderNode;
    path?: any[];
    pathLabels?: any[];
    pathNodes?: any[];
    uid?: number;
    value?: any;
    isDisabled?: null;
    isLeaf?: boolean;
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
    $index: number;
    column: any;
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
    /**
     * 数据对象
     */
    data: ITreeData;
    /**
     * 子节点数据数组
     */
    children: ITreeMapData[];
  }

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
     * 是否显示右上角的关闭按钮（可选，默认 true）
     */
    showClose?: boolean;
    /**
     * 自定义图标样式类
     */
    iconClass?: string;
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

  /**
   * 布局 枚举定义
   */
  export enum LayoutType {
    VERTICAL = 'vertical',
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
   * 面板预设样式类
   */
  export enum BoardPresetClass {
    TABLE_ABSOLUTE = 'table_absolute',
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
   * 通知信息位置定义
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

  /**
   * 节流
   * @param func
   * @param wait
   * @returns {() => void}
   */
  export function throttle(this: any, func: Function, wait: number): () => void;

  /**
   * 防抖
   * @param func
   * @param wait
   * @param immediate
   * @returns {(this:any) => void}
   */
  export const debounce: (
    func: Function,
    wait: number,
    immediate?: boolean | undefined
  ) => (this: any) => void;
  /**
   * 延后
   * @param time 时间毫秒
   */
  export const sleep: (time: number) => Promise<any>;

  /**
   * 判断是否溢出省略号
   * @param dom
   */
  export function isEllipsis(dom: HTMLElement): boolean;

  /**
   * 通过任意属性,获取每一条数据源对应的值
   * @param row 当前行数据
   * @param column 全部的列数据  要传入 this.totalColumn
   * @param attr 根据这个属性那数据,默认'id'
   * @return 返回 属性(id) 的值
   */
  export function getValueByAttr(
    row: any,
    column: string[],
    attr?: string
  ): string;

  /**
   * 获取 AX 语言对象
   */
  export function getAxLang(): {
    text(key: keyof TLangComponents, ...params: any[]): string;
  };
}

declare class AxAutocomplete extends Vue {
  /**
   * 当前下拉框类型（对应: DropdownType 中的 'select' 和 'input'）
   * 之前的 'dropdown' 模式移动到新组件 ax-dropdown中
   */
  type?: string;
  /**
   * 下拉菜单样式
   */
  menuClass?: string;
  /**
   * 下拉菜单样式
   */
  disabled?: boolean;
  /**
   * 是否可以清空
   */
  clearable?: boolean;
  /**
   * 设置当前下拉框数据
   */
  options?: AxComCore.IOptionData[];
  /**
   * 是否允许创建新数据（需要同时把 filterable 设置为 true）
   */
  createable?: boolean;
  /**
   * 是否允许输入过滤文本
   */
  filterable?: boolean;
  /**
   * 是否多选模式
   */
  multiple?: boolean;
  /**
   * 多选时是否将选中值按文字的形式展示
   */
  collapseTags?: boolean;

  /**
   *  下拉框的类名 (可选)
   */
  popperClass?: string;
  /**
   * 远程数据查询方法（绑定后将调用远程查询，传入: text 表示查询的字符文本）
   */
  remoteMethod?: (text: string) => void;
  /**
   * type 是 button 模式下的按钮文本
   */
  private btnText?;
  /**
   * 下拉框数据集合（键：数据键；值：数据值）
   */
  private optmap;

  /**
   * 获取静态下拉框文本
   */
  private get loadDropdownText();

  /**
   * 获取焦点方法
   */
  focus(): AxAutocomplete;

  /**
   * 关闭下拉框处理
   */
  close(): AxAutocomplete;

  /**
   * 强制更新下拉框数据处理
   */
  updateDropdown(): AxAutocomplete;

  /**
   * 判断是否为最后一个选中的键
   */
  isLatestSelectedKey(key: any): boolean;

  /**
   * 获取当前选中的数据（未找到则返回 undefined ）
   * @param {any} key 当前数据键（多选模式时可以是数组，数组则返回数据数组）
   * @returns {IOptionData | IOptionData[] | undefined} 对应键的数据值或数据数组
   */
  getSelectedData(
    key: any
  ): AxComCore.IOptionData | AxComCore.IOptionData[] | undefined;

  /**
   * 监控下拉数据变化
   */
  private setOptions;
  /**
   * 获取输入下拉框数据方法
   */
  private querySearch;
  /**
   * 菜单下拉框事件
   */
  private handleCommand;
  /**
   * 失去焦点处理
   */
  private handleBlur;
  /**
   * 初始化数据处理
   */
  private created;
}

declare class AxBadge extends Vue {
  /**
   * 按钮类型（对应: BadgeType.XXXX，默认值: BadgeType.DANGER）
   */
  type?: string;
  /**
   * 显示值
   */
  private value?;
  /**
   * 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型
   */
  private max?;
  /**
   * 小圆点
   */
  private isDot?;
  /**
   *  隐藏 badge
   */
  private hidden?;

  /**
   * 内容获取
   * @returns {string}
   */
  private get content();
}

declare class AxBoard extends Vue {
  /**
   * 是否分栏布局模式
   */
  private layoutMode?;
  /**
   * 功能栏是否包含预设样式
   */
  private barPreset?;
  /**
   * 内容栏是否包含预设样式
   */
  private contentPreset?;
  /**
   * 是否使用预设样式，默认不使用，可以传入自定义实现的class， 也可以使用预设的类
   * 预设列表详见 AxComCore.BoardPresetClass
   */
  private presetClass?;
  /**
   * 分栏排版方向 (horizontal 或者 vertical, 默认 horizontal 水平排版)
   */
  private type?;
  /**
   * 默认分割线位置，默认 20，单位百分比
   */
  private splitSize?;
  /**
   * 默认分割线位置，默认 20，单位百分比
   */
  private splitResizeable?;
  /**
   * 第一个分栏最小尺寸,默认 20%
   */
  private minSize?;
  /**
   * 第一个分栏最大尺寸,默认 80%
   */
  private maxSize?;

  /**
   * DOM 创建完成开始监听对象处理
   */
  mounted(): void;
}

declare class AxButton extends Vue {
  /**
   * 按钮类型（对应: ButtonType.XXXX，默认值: ButtonType.PRIMARY
   */
  type?: string;
  /**
   * 原生type属性  button / submit / reset
   */
  nativeType?: string;
  /**
   * 组件对象名称
   */
  name?: string;
  /**
   * 左侧图标样式字符串
   */
  icon?: string;
  /**
   * 按钮尺寸
   */
  size?: string;
  /**
   * 是否被禁用
   */
  disabled?: boolean;
  /**
   * 是否处于加载状态
   */
  loading?: boolean;
  /**
   * 是否默认获取焦点
   */
  autofocus?: boolean;
  /**
   * 是否圆角按钮
   */
  round?: boolean;
  /**
   * 是否圆形按钮
   */
  circle?: boolean;

  /**
   * 获取焦点方法
   */
  focus(): AxButton;

  /**
   * 点击按钮处理
   */
  private handleClick;
}

declare class AxCascader extends AxComCore.AxUIComponent {
  refCascader: any;
  /**
   * 过长是否省略显示
   */
  showEllipsis?: boolean;
  /**
   * 组件对象名称
   */
  name?: string;
  /**
   * 输入框文本占用
   */
  placeholder?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否支持清空选项
   */
  clearable?: boolean;
  /**
   * 是否支持只显示最后一列
   */
  showAllLevels?: boolean;
  /**
   * 是否显示提示
   */
  showTooltip?: boolean;
  /**
   * 多选时是否将选中值按文字的形式展示
   */
  collapseTags?: boolean;
  /**
   * 组件对象名称
   */
  options?: any[];
  /**
   * 配置选项
   */
  private props?;
  private tooltipText;
  private firstValue;

  /**
   * 不显示提示
   * @returns {boolean}
   */
  private get disabledGet();

  /**
   * 各父级选项值组成的数组
   */
  private expandChange;
  /**
   * 节点选择事件
   * @param ids
   */
  private nodeChange;
  /**
   * 改变 ax组件的 v-model 值
   */
  private proxyChange;

  /**
   * 隐藏菜单
   */
  setMenuVisible(visible?: boolean): void;

  /**
   * 获取焦点方法
   */
  focus(): AxCascader;

  /**
   * 更换名称显示
   * @param str
   */
  setPresentText(str: string): void;

  /**
   * 获取名称显示
   * @returns {any}
   */
  getPresentText(): string;

  /**
   * 清除lazyload数据的节点
   */
  clearLazyNode(cb: () => void): void;

  /**
   * 获取选中的节点数组
   * @param leafOnly 是否只是叶子节点，默认值为 false
   * @returns {any}
   */
  getCheckedNodes<V extends any, D extends any>(
    leafOnly?: boolean
  ): CascaderNode<V, D>[];

  /**
   * 绑定 elementui 的 v-model
   */
  get elValueArr(): any[];
  /**
   * 绑定 elementui 的 v-model
   * @param val
   */
  set elValueArr(val: any[]);

  /**
   * created
   */
  private created;
  /**
   * mounted
   */
  private mounted;
}

declare class AxCheckbox extends AxComCore.AxUIComponent {
  /**
   * 复选框类型（对应: CheckboxType.XXXX）
   */
  type?: string;
  /**
   * 处于选中状态时显示中间模糊态样式（设置后将使用模糊状态形状显示）
   */
  indeterminate?: boolean;
  /**
   * 选择框标签文本
   */
  label?: string;
  /**
   * 选中状态时的输出值
   */
  trueValue?: any;
  /**
   * 未选中状态时的输出值
   */
  falseValue?: any;
  private trueValueInside;
  private falseValueInside;

  /**
   * 内部ele组件绑定的v-model获取外部的v-model值
   * @returns {string}
   */
  private get model();
  /**
   * 内部ele组件绑定的v-model更新之后设置外部v-model值
   * @param val
   */
  private set model(value);

  /**
   * 获取当前是否时选中状态
   */
  isChecked(): boolean;

  /**
   * 获取焦点方法
   */
  focus(): AxCheckbox;

  /**
   * 失去焦点处理
   */
  private handleBlur;
}

declare class AxDate extends AxComCore.AxUIComponent {
  /**
   * 设置只读 (默认为false, 非只读模式)
   */
  readonly?: boolean;
  /**
   * 文本框可输入 (默认为true, 可输入)
   */
  editable?: boolean;
  disabled?: boolean;
  placeholder?: string;
  clearable?: boolean;
  /**
   * 输入框尺寸 (可选, 可输入large, small, mini)
   */
  size?: string;
  /**
   * 范围选择时开始日期的占位内容 (可选)
   */
  startPlaceholder?: string;
  /**
   * 范围选择时结束日期的占位内容 (可选)
   */
  endPlaceholder?: string;
  /**
   * 显示类型 (可选, 默认为 date [日], 可输入year/month/date/dates/ week/datetime/datetimerange/daterange)
   */
  type?: string;
  /**
   * 范围选择时结束日期的占位内容 (可选)
   */
  format?: string;
  /**
   * 对齐方式 (可选, 默认 left, 可输入 left, center, right)
   */
  align?: string;
  /**
   *  下拉框的类名 (可选)
   */
  popperClass?: string;
  /**
   * 当前时间日期选择器特有的选项参考下表 (可选)
   */
  pickerOptions?: object;
  /**
   * 选择范围时的分隔符 (可选)
   */
  rangeSeparator?: string;
  /**
   * 选择器打开时默认显示的时间  Date  可被new Date()解析 (可选)
   */
  defaultValue?: Date;
  /**
   * 范围选择时选中日期所使用的当日内具体时刻 (可选, 数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00)
   */
  defaultTime?: string[];
  /**
   * 绑定值的格式。不指定则绑定值为 Date 对象 (可选)
   */
  valueFormat?: string;
  /**
   * 在范围选择器里取消两个日期面板之间的联动 (可选)
   */
  unlinkPanels?: boolean;
  /**
   * 自定义头部图标的类名 (可选, 默认为 el-icon-date)
   */
  prefixIcon?: string;
  /**
   * 自定义清空图标的类名 (可选, 默认为 el-icon-circle-close)
   */
  clearIcon?: string;
  /**
   * 输入时是否触发表单的校验 (可选, 默认为 true 触发)
   */
  validateEvent?: boolean;

  /**
   * 获取焦点方法
   */
  focus(): AxDate;
}

declare class AxDialog extends Vue {
  /**
   * button是否正在 loading
   */
  private showFooter?;
  /**
   * 传入的高度
   */
  private height?;
  /**
   * button是否正在 loading
   */
  private loading?;
  /**
   * 标题显示文字
   */
  private title?;
  /**
   * 显示 dialog (默认为 false 不显示; 注意: 每次单匡关闭时 都需要在父组件中将 visible 重置)
   */
  private visible?;
  private visibleWatch;
  /**
   * dialog 的宽度 (默认为 50%)
   */
  private width?;
  /**
   * Dialog 的自定义类名
   */
  private customClass?;
  /**
   * 是否为全屏 Dialog (默认为 false 不全屏)
   */
  private fullscreen?;
  /**
   * Dialog CSS 中的 margin-top 值 (默认为 15vh)
   */
  private top?;
  /**
   * 是否需要遮罩层 (默认为 true)
   */
  private modal?;
  /**
   * 是否在 Dialog 出现时将 body 滚动锁定 (默认为 true)
   */
  private lockScroll?;
  /**
   * 是否可以通过点击 modal 关闭 Dialog (默认为 true)
   */
  private closeOnClickModal?;
  /**
   * 是否可以通过按下 ESC 关闭 Dialog (默认为 true)
   */
  private closeOnPressEscape?;
  /**
   * 是否显示关闭按钮 (默认为 true)
   */
  private showClose?;
  /**
   * 是否对头部和底部采用居中布局 (默认为 false)
   */
  private center?;
  private axLang;
  private dialogVisible?;
  private type;
  private contentDomHeight;
  private dialogMaxHeight;

  /**
   * 获取焦点方法
   */
  focus(): AxDialog;

  /**
   * 重设弹窗大小
   */
  resize(): void;

  /**
   * 关闭前的回调, 在外层必须关闭 (在外层关闭, 直接调用 done() 即可)
   */
  private handleClose;
  /**
   * dialog 打开的回调
   */
  private open;
  /**
   * dialog 打开动画结束时的回调
   */
  private opened;
  /**
   * dialog 关闭的回调 (不区分按钮)
   */
  private close;
  /**
   * dialog 关闭动画结束时的回调 (不区分按钮)
   */
  private closed;
  /**
   * 点击确定按钮事件 (区分按钮, 且只是确定按钮的事件)
   */
  private okClose;
  private cancelClose;
  private hasHeight;
  private noHeight;
  private isResize;
  private onWindowResize;
  private isDragingTitle;
  private isTouch;
  private deltaX;
  private deltaY;
  private onMouseDown;
  private onMouveMove;
  private onMouseUp;
  /**
   * 获取当前的 dialog (废弃)
   */
  private getDialog;
  private mounted;
  /**
   * 组件销毁前处理
   */
  private beforeDestroy;
}

declare class AxDivider extends Vue {
  /**
   * 分割线方向（对应: DividerDirection.XXXX，默认值: AxComCore.DividerDirection）
   */
  private direction?;
  /**
   * 预设模式
   */
  private preset?;
  /**
   * 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型
   */
  private contentPosition?;
  private dividerDirection;
}

declare class AxDropdown extends Vue {
  refDropdown?: Dropdown;
  /**
   * 触发下拉的行为
   */
  trigger?: string;
  /**
   * 下拉菜单样式
   */
  menuClass?: string;
  /**
   * 点击是否隐藏菜单，默认 true
   */
  hideOnClick?: boolean;
  /**
   * 菜单弹出位置
   */
  placement?: string;
  /**
   * 设置当前下拉框数据
   */
  options?: AxComCore.IOptionData[];

  /**
   * 获取焦点方法
   */
  focus(): AxDropdown;

  /**
   * 关闭下拉框处理
   */
  close(): AxDropdown;

  /**
   * 菜单下拉框事件
   */
  private handleCommand;
  /**
   * 下拉框出现/隐藏时触发
   */
  private handleVisibleChange;
  /**
   * 初始化数据处理
   */
  private created;
}

declare class AxLink extends Vue {
  private refLink;
  /**
   * 链接类型（对应: LinkType.XXXX，默认值: LinkType.DEFAULT
   */
  type?: string;
  /**
   * 左侧图标样式字符串
   */
  icon?: string;
  /**
   * 是否被禁用
   */
  disabled?: boolean;
  /**
   * 是否下划线
   */
  underline?: boolean;
  /**
   * 原生 href 属性
   */
  href?: string;

  /**
   * 获取焦点方法
   */
  focus(): AxLink;

  /**
   * 点击处理
   */
  private handleClick;
  /**
   * 点击事件上报
   */
  private click;
}

declare class AxForm extends Vue {
  /**
   * 当前表单数据
   */
  data?: {
    [key: string]: any;
  };
  /**
   * 表单配置数据
   */
  config?: AxComCore.IFormConfig[];
  /**
   * 显示所有提示,默认显示 true
   */
  showTip?: boolean;
  /**
   * 是否是气泡提示
   */
  tooltip?: boolean;
  /**
   * 预设样式
   */
  presetStyle?: string;
  private cmap;
  private axmap;
  private tipsmap;

  /**
   * 组件创建完毕处理
   */
  mounted(): void;

  /**
   * 处理表单数据变化
   * @param name
   * @param value
   */
  private handleFormItemChange;

  /**
   * 刷新表单元件处理
   */
  refreshForm(): void;

  /**
   * 根据当前绑定的数据刷新表单处理
   */
  refreshData(): void;

  /**
   * 设置当前表单可用焦点
   */
  focus(): void;

  /**
   * 查找组件下的子组件处理
   */
  private findComponents;
  /**
   * 配置组件处理
   */
  private configComponent;
  /**
   * 处理失去焦点事件
   */
  private handleComponentBlur;
  /**
   * 配置输入框对象
   */
  private configTextInput;
  /**
   * 处理输入框事件
   */
  private handleInputEvent;
  /**
   * 修正输入框数值类型
   */
  private fixInputNumber;
  /**
   * 初始化数据处理
   */
  private initData;
  /**
   * 响应按键处理
   */
  private handleKeypress;

  /**
   * @params customTip 自定义的报错文字
   * 验证表单数据处理，成功则输出验证后的数据对象: resolve(data: { [key: string]: any })，失败则输出失败信息字符串: reject(msg: string)
   */
  validate(customTip?: string): Promise<{
    [key: string]: any;
  }>;

  /**
   * 隐藏所有验证结果提示文本
   */
  hideValidateTips(): void;

  /**
   * 把数据转换为指定类型
   */
  private convertToType;
  /**
   * 验证数据是否有效
   */
  private validateValue;
  /**
   * 验证类型数据是否有效
   */
  private validateType;
  /**
   * 检查数值是否在最大值与最小值之间
   * @param {number} num 需检查的数值
   * @param {number} min 最小值
   * @param {number} max 最大值
   * @returns {boolean} 是否成功
   */
  private checkNumber;
  /**
   * 校验失败后显示提示信息处理
   */
  private showTypeErrMessage;
  /**
   * 判断并转换为日期格式，非日期格式则返回原始数据字符串
   */
  private getDateString;
  /**
   * 分析正则表达式，转换为文本信息
   */
  private getExRegText;
  /**
   * 监测配置变化
   */
  private initConfig;
}

declare class AxHeader extends Vue {
  /**
   * 按钮尺寸
   */
  mode?: string;
  /**
   * 返回按钮图标替换
   */
  icon?: string;
  /**
   * 是否隐藏返回按钮
   */
  hideBack?: boolean;
  /**
   * 是否隐藏底部边框
   */
  hideBorder?: boolean;
  /**
   * 点击返回按钮处理
   */
  private handleBack;
}

declare class AxInput extends AxComCore.AxUIComponent {
  /**
   * 输入框类型（对应: InputType.XXXX，默认值: InputType.TEXT）
   */
  type?: string;
  /**
   * 最大输入长度
   */
  maxlength?: number;
  /**
   * 自动聚焦
   */
  autofocus?: boolean;
  /**
   * 最小输入长度
   */
  minlength?: number;
  /**
   * 左边内侧图标样式字符串
   */
  leftIcon?: string;
  /**
   * 右边内侧图标样式字符串
   */
  rightIcon?: string;
  /**
   * 输入框行数，只对 InputType.TEXT_AREA 有效，默认：3
   */
  rows?: number;
  /**
   * 自适应内容高度，只对 InputType.TEXT_AREA 有效
   */
  autosize?: {
    minRows: number;
    maxRows: number;
  };
  /**
   * 是否只读
   */
  readonly?: boolean;
  /**
   * 是否能被用户缩放（对应: ResizeType.XXXX，默认: ResizeType.NONE）
   */
  resize?: string;

  /**
   * 获取焦点方法
   */
  focus(): AxInput;

  /**
   * 失去焦点方法
   */
  blur(): void;

  /**
   * 获取焦点处理
   */
  private handleFocus;
  /**
   * 失去焦点处理
   */
  private handleBlur;
  private handleChange;
}

declare class AxMessage {
  /**
   * 显示弹出确认窗口处理
   * @param {string} message 显示信息
   * @param {number} [buttons] 显示的按钮（可选，默认: MessageButtonType.OK，多个按钮使用或运算符设置）
   * @param {number} [style] 信息类型（可选，默认: MessageStyle.TIPS）
   * @param options [IAlertOptions] 确认窗口选项（可选）
   * @returns {Promise<number>} 返回点击的按钮类型（对应: MessageButtonType.XXXX）
   */
  static alert(
    message: string,
    buttons?: number,
    style?: number,
    options?: AxComCore.IAlertOptions
  ): Promise<number>;

  /**
   * 显示加载图标遮罩处理
   * @param {(Vue | HTMLElement)} [target] 需要覆盖的元素或组件（可选）
   * @param {string} [text] 加载图标下显示的文字（可选）
   * @param {string} [iconClass] 加载图标样式类（可选）
   * @returns {ICloseHandler} 关闭处理对象
   */
  static loading(
    data:
      | {
          target?: Vue | HTMLElement | string;
          text?: string;
          iconClass?: string;
          body?: boolean;
          lock?: boolean;
          background?: string;
        }
      | undefined
  ): AxComCore.ICloseHandler;

  /**
   * 显示提示信息面板
   * @param {string} text 消息文本
   * @param {number} [timeout=5000] 信息隐藏超时时间（毫秒，默认: 5000 毫秒）
   * @param {number} [style=AxComCore.MessageStyle.TIPS] 信息及图标类型（可选，默认: AxComCore.MessageStyle.TIPS）
   * @param {number} [positon=AxComCore.NotifyPosition.TOP_MIDDLE] 信息位置（可选，默认: AxComCore.NotifyPosition.TOP_MIDDLE）
   * @param {INotifyOptions} [options] 信息面板可选参数
   * @returns {ICloseHandler} 关闭处理对象
   */
  static notify(
    text: string,
    timeout?: number,
    style?: number,
    positon?: number,
    options?: AxComCore.INotifyOptions
  ): AxComCore.ICloseHandler;
}

declare class AxNavigator extends Vue {
  /**
   * 当前导航数据数组
   */
  private data?;
  /**
   * link模式下返回参数
   * @param item
   * @returns {AxComCore.INavigatorData}
   */
  private linkClick;
}

declare class AxPanels extends Vue {
  private items;
  private views;
  private current?;
  /**
   * 动画类型
   */
  private type?;
  /**
   * 当前显示的面板序号或名称 (对应 key 字段)
   */
  private index?;
  private watchCurrentTab;

  /**
   * 获取 panel 模板数据
   */
  getData(): AxComCore.IKeyLabelData[];

  /**
   * 创建完成方法
   */
  private mounted;
  /**
   * 设置显示与不显示
   */
  private setVisible;
}

declare class AxProgress extends Vue {
  /**
   * 百分比（必填） 0-100
   */
  private percentage?;
  /**
   * 进度条类型  line/circle
   */
  private type?;
  /**
   * circle/dashboard 类型路径两端的形状
   */
  private strokeLinecap?;
  /**
   * 进度条的宽度，单位 px
   */
  private strokeWidth?;
  /**
   * 进度条当前状态  success/exception/text
   */
  private status?;
  /**
   * 进度条背景色（会覆盖 status 状态颜色）
   */
  private color?;
  /**
   *  是否显示进度条文字内容
   */
  private showText?;
  /**************type 不一樣的時候**************/
  /**
   * 进度条显示文字内置在进度条内（只在 type=line 时可用）
   */
  private textInside?;
  /**
   * 环形进度条画布宽度（只在 type=circle 时可用）
   */
  private width?;
}

declare class AxRadio extends AxComCore.AxUIComponent {
  /**
   * 单选框类型（对应: RadioType.XXXX）
   */
  type?: string;
  /**
   * 单选框标签文本
   */
  label?: string;
  /**
   * 选中状态时的输出值
   */
  trueValue?: any;

  /**
   * 获取当前是否时选中状态
   */
  isChecked(): boolean;

  /**
   * 获取焦点方法
   */
  focus(): AxRadio;

  /**
   * 失去焦点处理
   */
  private handleBlur;
}

declare class AxSearch extends Vue {
  data: any;
  readonly refSelf?: Node;
  private resultData?;
  private history?;

  private get value();
  private set value(value);

  private axLang;
  private tagVisible?;
  private hisVisible?;
  private isOnceResult?;
  private isRequest?;
  private historyData?;
  private historyTag?;
  private historyVisible?;
  private resultVisible?;
  private resultTag?;
  private isSort?;

  private get getResultData();

  /**
   * ???
   */
  private setValue;
  private search;
  private on;
  private off;
}

declare class AxSelect<
  O = AxComCore.IOptionData
> extends AxComCore.AxUIComponent {
  refSelect: Select;
  /**
   * 是否不可用
   */
  disabled?: boolean;
  /**
   * 是否可以清空
   */
  clearable?: boolean;
  /**
   * 设置当前下拉框数据
   */
  options?: O[];
  /**
   * 是否允许创建新数据（需要同时把 filterable 设置为 true）
   */
  allowCreate?: boolean;
  /**
   * 是否允许输入过滤文本
   */
  filterable?: boolean;
  /**
   * 是否多选模式
   */
  multiple?: boolean;
  /**
   *  多选时用户最多可以选择的项目数，为 0 则不限制
   */
  multipleLimit?: number;
  /**
   * 多选时是否将选中值按文字的形式展示
   */
  collapseTags?: boolean;
  /**
   * 列表是否在 loading
   */
  loading?: boolean;
  /**
   * 多选情况,至少选择一条 loading
   */
  atLeast?: boolean;
  /**
   * 远程数据查询方法（绑定后将调用远程查询，传入: text 表示查询的字符文本）
   */
  remoteMethod?: (text: string) => void;

  /**
   *  下拉框的类名 (可选)
   */
  popperClass?: string;
  /**
   * 监控下拉数据变化
   */
  private setOptions;
  /**
   * 失去焦点的上报
   * @param event
   * @returns {Event}
   */
  private blur;

  /**
   * 获取焦点方法
   */
  focus(): AxSelect<O>;

  /**
   * 关闭下拉框处理
   */
  close(): AxSelect<O>;

  /**
   * 判断是否为最后一个选中的键
   */
  isLatestSelectedKey<K>(key: K): boolean;

  /**
   * 获取当前选中的数据（未找到则返回 undefined ）
   * @param {any} key 当前数据键（多选模式时可以是数组，数组则返回数据数组）
   * @returns {IOptionData | IOptionData[] | undefined} 对应键的数据值或数据数组
   */
  getSelectedData<K>(key: K): O | O[] | undefined;

  /**
   * 下拉框数据集合（键：数据键；值：数据值）
   */
  private optmap;
  /**
   * 多选,, 失去焦点处理
   */
  private removeTag;
  private change;
  private handleBlur;
  /**
   * 初始化数据处理
   */
  private created;
}

declare type InputSize = 'large' | 'medium' | 'small' | 'mini';

declare class AxSlider extends Vue {
  readonly data: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  step?: number;
  showInput?: boolean;
  showInputControls?: boolean;
  inputSize?: InputSize;
  showStops?: boolean;
  showTooltip?: boolean;
  formatTooltip?: (value: number) => {};
  range?: boolean;
  vertical?: boolean;
  height?: string;
  label?: string;
  debounce?: number;
  tooltipClass?: string;
  marks?: object;
  /**
   * 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）
   * @param value
   * @returns {number}
   */
  private change;
  /**
   * 数据改变时触发（使用鼠标拖曳时，活动过程实时触发）
   * @param value
   * @returns {number}
   */
  private input;
}

declare class AxSplit extends Vue {
  /**
   * 分栏排版方向 (horizontal 或者 vertical, 默认 horizontal 水平排版)
   */
  private type;
  /**
   * 默认分割线位置，默认 20，单位百分比
   */
  private size;
  /**
   * 第一个分栏最小尺寸,默认 20%
   */
  private minSize;
  /**
   * 第一个分栏最大尺寸,默认 80%
   */
  private maxSize;
  /**
   * 是否支持可调整栏目大小
   */
  private resizeable;
  private width;
  private height;
  private leftSize;
  private rightSize;

  /**
   * 第一栏大小
   */
  private get firstSize();

  /**
   * 第一栏大小
   */
  private get secondSize();

  /**
   * 最小大小的百分比
   */
  private get minSizePercent();

  /**
   * 最小大小的百分比
   */
  private get maxSizePercent();

  /**
   * 开始resize
   * @param event
   */
  private startResize;
  /**
   * 拖放结束的处理
   * @param evt
   */
  private drop;
  /**
   * 拖放的处理
   * @param evt
   */
  private drag;
  /**
   * 是否是水平排版
   * @returns {boolean}
   */
  private isHorizontal;
  /**
   * 获取百分比
   * @param value
   * @returns {number}
   */
  private getPercent;

  /**
   * 设置大小
   * @param val
   */
  setSize(val: string): void;

  private beforeCreate;
  /**
   * 界面更新前
   */
  private beforeUpdate;
  private mounted;
}

declare class AxTab extends Vue {
  private items;
  /**
   * 动画类型
   */
  private type?;
  /**
   * 当前显示的 tab
   */
  private index?;
  /**
   * 组件模式下切换 tab 的数据来源 (若存在值则 tab 组件不需要输入 元件)
   */
  private data?;

  private get tabData();

  /**
   * 是否内部组件模式
   */
  private get isInnerMode();

  /**
   * 点击方法
   */
  private onClick;
}

declare class AxTable extends Vue {
  private tableColumn?;
  private columnList?;
  private operation?;
  private tableData?;
  private editrowconfig?;
  private keyId;
  private noEditIds?;
  private enableHeaderCustom?;
  private showIndex?;
  private showRefresh?;
  private boxType?;
  private showMenu?;
  private loading?;
  private height?;
  private editMode?;
  private headMode?;
  private rowClassName?;
  private rowStyle?;
  private cellStyle?;
  ids?: any;
  loadColumn?: () => Promise<any[]>;
  /**
   * 传入的高度
   */
  private sortOrder?;
  private treeProps?;
  private pageConfig?;
  private pageLoader?;
  private customFlagWatch;
  /**
   * 数据发生变化时候,触发
   */
  private tableDataWatch;
  /**
   * 单元格双击
   * @param row
   * @returns {any}
   */
  private cellDbClick;
  private get rangeList();
  /**
   * tableColumn 一旦发生变化,往 tableColumn 追加属性 ASC 和 DESC
   * 去除不显示的字段
   */
  private get tableColumnLoad();
  /**
   * 全部的列字段
   */
  private get totalColumn();
  /**************原本 data**************/
  private tableBoxType;
  private axLang;
  private correctIds;
  private customFlag;
  private MoveDirType;
  private rowClickIds;
  private selectionIds;
  private tableDataLoad;
  private radioShow;
  private changeHeadTdFirst;
  private isMoveRow;
  private MoveRowSelection;
  private styleTransform;
  private rowClickFlag;
  private transferFlag;
  private transferTotalData;
  private rowClickTimer;
  private pageData;
  /**
   * 点击选择框,不变
   */
  private radioClick;
  /**
   * 获取操作显示文本
   * @param value
   * @param row
   * @return {string}
   */
  private getOperateText;
  /**
   * 修改表头宽度
   * @returns {boolean}
   */
  private changeHeadTdWidth;
  /**
   * 整条数据上移下移
   */
  private moveButton;
  /**
   * 滚动条拉到最低,emit 回调
   */
  private tableLoadMore;
  /**
   * emit 分发 只修改过的数据,以键值对的形式,包含 keyId
   * @param self 单元格input组件的this,里面包括ref,
   * @param refName 表单的名称,
   * @param attr 当前编辑是对应哪个table的属性,
   */
  private cellBlur;
  /**
   * 当某一行被双击,会触发该事件
   */
  private celldblclick;
  /**
   * 当某一行被双击,会触发该事件
   */
  private rowdblClick;
  /**
   * 行单击
   * @param row
   * @param column
   * @param event
   */
  private rowClick;
  /**
   * 多选框发生变化时候,返回选中的数据
   */
  private selectionChange;
  /**
   * 点击链接进行跳转
   */
  private cellLinkClick;
  /**
   * 自定义列表点击确认后
   */
  private transferConfirm;
  /**
   * 点击其中一个自定义面板
   */
  private transferFlagChange;
  /**
   * 表头排序点击
   * @param scope
   * @param item
   */
  private headSortClick;
  /**
   * 头部的自定义面板被点击
   * @param scope
   * @param item
   */
  private headIconClick;
  private get rangeListRecord();
  /**
   * 业务:传入order排序显示图标
   * @param final
   */
  private showOrderIcon;
  /**
   * 生成一个 tableLoad
   */
  private initTableLoad;
  /**
   * 生成新的map,在 tableData 发生变化,
   */
  private createNewMap;
  /**
   * 重置首行选中
   * @param wait
   * @returns {Promise<void>}
   */
  private resetTopSelected;
  /**
   * 刷新按钮点击
   */
  private refreshClick;
  /**
   * 检查是否包含分页配置
   */
  private checkPageCtrl;
  /**
   * 当前数据处理对象
   */
  handler: TableHandler;
  /**
   * 设置某条数据打钩,高亮
   * @param keyId 对应数据的keyid
   */
  setDataCheck(keyId: string): void;
  /**
   * 高亮不勾选自动定位
   * @param keyId
   */
  setCurrentRow(keyId: string): void;
  /**
   * FIXME:
   * 清除修改标志,并且清理 correctIds
   */
  clearCorrect(): void;
  /**
   * 修改v-model的值,以勾选为准,没有勾选就以高亮颜色为准
   */
  private idsLoad;
  /**
   * 获取选中行数据
   * @param ids
   * @param key
   * @returns {any[]}
   */
  getrows(ids: string[], key: string): any[];
  /**
   * 根据索引获取数据
   * @param index
   * @returns {any}
   */
  getIndexRow(index: number): any;
  /**
   * 通过 ids,找到对应的属性的集合,一一对应
   * @params ids 传入的多个 keyId,是数组的形式
   * @params attr 根据某个属性
   * @return string[]
   */
  getAttrByIds(ids: string[], attr: string): string[];
  /**
   * 获取所有的 ids
   * @return string[]
   */
  getTotalIds(): string[];
  /**
   * 获取所有的 Map 的值
   * @return any[]
   */
  getTotalValues(): any[];
  /**
   * 通过某个 keyId,获取对应的 Map 数据
   * @return Map 集合的单条对象数据
   */
  getDataById(keyId: string): any;
  /**
   * 找到 tableDataLoad 的某一条数据,并且修改他
   * ERROR: 时区的translate,没有正常显示
   * @params key id,did之类的值,也就是v-model里面的
   * @params value 完整的一行row的新值
   */
  updateData(key: any, value: any): void;
  /**
   * 删除某条数据
   * @param id 删除对应的keyid的数据
   */
  delete(id: string): void;
  /**
   * 删除 ids 对应的 Map 数据
   * @params ids 传入的多个 keyId,是数组的形式
   */
  deleteDataByIds(ids: string[]): void;
  /**
   * 添加一条数据
   * @params value 一行row的值
   */
  addData(value: any, index?: number, hasFlag?: boolean): void;
  /**
   * 批量增加数据
   * @param data
   */
  addMultiData(data: any[]): void;
  /**
   * 移动数据
   * @param down
   * @returns {boolean}
   */
  moveData(down?: boolean): boolean;
  /**
   * 移动数据（有目标key）
   * @param key
   * @param down 是否下移
   * @return {boolean}
   */
  moveDataByKey(key: string, down?: boolean): boolean;
  /**
   * 分页加载
   * @param page
   * @param isStart
   */
  pageLoad(page?: number, isStart?: boolean): Promise<void> | undefined;
  /**
   * 分页重载
   */
  pageReload(): void;
  /**
   * 获取行单选选中信息
   * @returns {{id: T, row: any}}
   */
  public getRadioSelected<T>(): { id: T; row: any };
  private mounted;
  private updated;
}

declare class AxTag extends Vue {
  refTag: HTMLElement;
  disabled?: boolean;
  closable?: boolean;
  type?: string;
  size?: string;

  /**
   * 获取焦点方法
   */
  focus(): AxTag;

  /**
   * 点击按钮处理
   * @param event
   */
  private handleClick;
  /**
   * 关闭按钮处理
   * @param event
   */
  private handleClose;
  /**
   * 上报点击事件
   * @param event
   * @returns {Event}
   */
  private click;
  /**
   * 上报关闭事件
   * @param event
   * @returns {Event}
   */
  private close;
}

declare class AxTooltip extends Vue {
  private showWatch;
  /**
   * 皮肤
   */
  private effect?;

  /**
   *  下拉框的类名 (可选)
   */
  popperClass?: string;
  /**
   * 显示控制（manual模式下）
   */
  private show?;
  /**
   * 显示v-model绑定
   */
  private showModel;
  /**
   * 需要显示的内容 (传参的方式传入, 还可以通过插槽的方式[slot tips])
   */
  private tips?;
  /**
   * Tooltip 出现的位置 (默认为右边)
   */
  private placement?;
  /**
   * Tooltip 是否可用
   */
  private disabled?;
  /**
   * 出现位置的偏移量 (默认为0, 不偏移)
   */
  private offset?;
  /**
   * 延迟出现, 单位毫秒 (默认为0, 不延迟)
   */
  private openDelay?;
  /**
   * 显示控制
   */
  private manual?;
}

/**
 * 目录数据处理类
 */
export declare class TreeHandler {
  /**
   * 属性字段配置数据
   */
  private config;
  private currentMaxId;
  private dataMap;
  private rootArray;

  /**
   * 初始化配置处理
   * @param conf 当前配置对象
   */
  initConfig(conf?: AxComCore.ITreeConfig): AxComCore.ITreeConfig;

  /**
   * 当前根数据数组
   */
  get root(): AxComCore.ITreeMapData[];

  /**
   * 当前目录数据集合
   */
  get map(): Map<string, AxComCore.ITreeMapData>;

  /**
   * 获取当前配置数据
   */
  get configs(): {
    idKey: string;
    pidKey: string;
    iconKey: string;
    textKey: string;
    childCountKey: string;
    childrenKey: string;
  };

  /**
   * 根据数据对象获取目录唯一数据序号（未找到则返回 undefined ）
   * @param data 当前数据对象
   * @returns string 唯一数据序号
   */
  getDataId(data: AxComCore.ITreeData): string | undefined;

  /**
   * 通过数据标识获取目录数据对象（未找到则返回 undefined ）
   * @param id 数据唯一标识
   * @returns TreeMapData 目录数据对象
   */
  getDataById(id: string): AxComCore.ITreeMapData | undefined;

  /**
   * 获取指定标识的父节点数据对象（未找到则返回 undefined ）
   * @param id  数据唯一标识
   * @returns TreeMapData | undefined 父节点数据对象
   */
  getParent(id: string): AxComCore.ITreeMapData | undefined;

  /**
   * 初始化目录数据处理
   * @param data 当前目录数据数组
   */
  initData(data?: AxComCore.ITreeData[]): void;

  /**
   * 增加数据到目录
   * @param data 需要增加的数据数组
   * @param [defaultPid] 默认父节点标识(设置为 undefined 表示不强制设置)
   * @param [position] 数据在父节点下的所有子节点中的增加位置（默认：-1 表示增加到最后，0 表示增加到最前面）
   * @returns TreeMapData[] 数据结果数组
   */
  addData(
    data?: AxComCore.ITreeData[],
    defaultPid?: string,
    position?: number
  ): AxComCore.ITreeMapData[];

  /**
   * 移除指定节点数据
   * @param id 数据唯一标识
   * @returns 被移除的数据信息
   */
  remove(id: string):
    | {
        data: AxComCore.ITreeMapData;
        selectId: string;
      }
    | undefined;

  /**
   * 更新数据到目录节点处理
   * @param data 数据对象
   * @param [id] 指定的序号
   */
  updateData(data: AxComCore.ITreeData, id?: string): void;

  /**
   * 获取下一个唯一序号处理
   * @returns  唯一序号值
   */
  private nextId;
  /**
   * 分析数据并把子节点增加到父节点的子数组内
   * @param data  当前目录数据数组
   * @param [position] 在数组内的位置当前位置
   */
  private setDataRelation;
  /**
   * 把数据增加到其父节点下
   * @param data 需要增加的数据
   * @param position 在数组内增加到的位置
   */
  private addToParent;
  /**
   * 创建数据集数组
   * @param data 目录数据数组
   * @param defaultPid 默认父节点标识(设置为 undefined 表示不强制设置)
   */
  private createMapDataArray;
  /**
   * 创建目录集数据对象处理
   * @param data 当前目录数据
   * @param defaultPid 默认父节点标识(设置为 undefined 表示不强制设置)
   * @returns TreeMapData 目录集数据
   */
  private createMapData;
  /**
   * 从数据的父节点下的子数据数组内移除数据
   * @param data 当前数据对象
   */
  private removeFromParent;
  /**
   * 从集合内移除数据（同时移除子节点数据）
   */
  private removeMapData;
  /**
   * 更新目录节点数据处理
   * @param data 目录数据对象
   */
  private updateMapData;
}

declare class AxTree extends AxComCore.AxUIComponent {
  /**
   * 当前数据处理对象
   */
  handler: TreeHandler;
  /**
   * 是否内部改变了数据标识
   */
  private innerChanges;
  /**
   * 是否需要滚动处理
   */
  private needScrollingKey;
  /**
   * 默认高亮项
   */
  private defaultHighlight;

  private get debugModeInfo();

  /**
   * 组件监测开始处理
   */
  private mounted;

  /**
   * 获取当前目录的根数据数组
   */
  get root(): AxComCore.ITreeMapData[];

  /**
   * 是否默认展开所有节点
   */
  defaultExpandAll?: boolean;
  /**
   * 是否调试模式，调试模式则输出当前数据
   */
  debugMode?: boolean;
  /**
   * 目录配置数据
   */
  config?: AxComCore.ITreeConfig;
  /**
   * 目录数据数组
   */
  dataArray?: AxComCore.ITreeData[];
  /**
   * 是否默认展开的节点深度 (默认 1, 表示展开一级节点)
   */
  private defaultExpandDeep?;
  /**
   * 默认展开的目录节点数据标识数组
   */
  defaultExpandedIds?: any[];
  /**
   * 是否启用节点图标
   */
  enableIcon?: boolean;
  /**
   * 是否启用目录复选框
   */
  enableCheckbox?: boolean;
  /**
   * 是否显示边框
   */
  border?: boolean;
  /**
   * 启用复选框时初始化默认已选中的数据标识数组
   */
  defaultCheckedIds?: any[];
  /**
   * 子节点数据加载通知方法（传入：(deep: number, data: AxComCore.ITreeData | null) , 表示当前目录层次深度（从 0 开始）和展开的节点数据对象（null 时表示读取根节点层次数据）；返回：异步数据结果处理对象）
   * @param deep 表示当前目录层次深度（从 0 开始）
   * @param data 展开的节点数据对象（null 时表示读取根节点层次数据）
   * @returns Promise<AxComCore.ITreeData[]> 异步返回加载结果数据
   */
  loadChildren?: (
    deep: number,
    data: AxComCore.ITreeData | null
  ) => Promise<AxComCore.ITreeData[]>;
  /**
   * 加载子节点数据方法
   */
  private loadChildrenData;
  /**
   * 判断是否是最终节点数据
   */
  private isEndNodeData;

  /**
   * 获取当前目录配置数据处理
   */
  private get propsConfig();

  /**
   * 判断是否需要图标处理
   */
  private getIconClass;
  /**
   * 检测传入的数据变化
   */
  private onPropDataChanges;
  /**
   * 展开指定深度的节点
   */
  private expandByDeep;
  /**
   * 双击栏目打开或关闭节点
   */
  private handleDblClick;

  /**
   * 根据数据对象获取目录唯一数据序号（未找到则返回 undefined ）
   * @param data 当前数据对象
   * @returns string 唯一数据序号
   */
  getDataId(data: AxComCore.ITreeData): string | undefined;

  /**
   * 通过数据标识获取目录数据对象（未找到则返回 undefined ）
   * @param id 数据唯一标识
   * @returns AxComCore.ITreeMapData 目录数据对象
   */
  getDataById(id: string): AxComCore.ITreeMapData | undefined;

  /**
   * 获取所有数据标识的数组副本
   */
  getIds(): string[];

  /**
   * 增加数据到目录（若增加到根目录时设置 parentId 为 undefined）
   * @param data 需要增加到目录的数据或数组
   * @param parentId 父节点数据唯一标识（若增加到根目录时设置为 undefined）
   * @param position 数据在父节点下的所有子节点中的增加位置（默认：-1 表示增加到最后，0 表示增加到最前面）
   * @param highlight 是否高亮选中新增加的数据
   * @returns AxComCore.ITreeMapData[] 增加结果数据数组
   */
  add(
    data: AxComCore.ITreeData | AxComCore.ITreeData[],
    parentId?: string,
    position?: number,
    highlight?: boolean
  ): AxComCore.ITreeMapData[];

  /**
   * 移除数据对象处理（将同时移除数据节点下的所有子节点，不存在则返回 undefined ）
   * @param data 需要移除的数据
   * @param autoHighlight 是否自动高亮合适的项目
   * @returns AxComCore.ITreeMapData 被移除的数据
   */
  remove(
    data: AxComCore.ITreeData,
    autoHighlight?: boolean
  ): AxComCore.ITreeMapData | undefined;

  /**
   * 根据数据唯一标识移除目录节点及数据处理（不存在则返回 undefined)
   * @param id 数据唯一标识
   * @param autoHighlight 是否自动高亮合适的项目
   * @returns AxComCore.ITreeMapData 被移除的数据
   */
  removeById(
    id: string,
    autoHighlight?: boolean
  ): AxComCore.ITreeMapData | undefined;

  /**
   * 更新数据到目录节点处理
   * @param data 需要更新的数据对象
   */
  update(data: AxComCore.ITreeData): void;

  reset(data?: AxComCore.ITreeData[]): void;

  /**
   * 更新数据到目录节点处理
   * @param id 数据唯一序号
   * @param data 需要更新的数据对象
   */
  updateById(id: string, data: AxComCore.ITreeData): void;

  /**
   * 获取当前被选中的数据数组处理（仅当显示了 checkbox 复选框后有效）
   * @param endNodeOnly 是否仅获取最终节点选中状态（可选，默认：true）
   * @returns AxComCore.ITreeData[] 被选中的数据数组（无效则返回 undefined ）
   */
  getCheckedData(endNodeOnly?: boolean): AxComCore.ITreeData[] | undefined;

  /**
   * 获取当前被选中的数据键数组处理（仅当显示了 checkbox 复选框后有效）
   * @param endNodeOnly 是否仅获取最终节点选中状态（可选，默认：true）
   * @returns string[] 被选中的数据键数组（无效则返回 undefined ）
   */
  getCheckedIds(endNodeOnly?: boolean): string[] | undefined;

  /**
   * 设置当前被选中的数据键数组处理（仅当显示了 checkbox 复选框后有效）
   * @param ids 需要选中的节点标识数组
   */
  setCheckedData(data: AxComCore.ITreeData[]): void;

  /**
   * 设置当前被选中的数据键数组处理（仅当显示了 checkbox 复选框后有效）
   * @param ids 需要选中的节点标识数组
   */
  setCheckedIds(ids: string[]): void;

  /**
   * 设置单个节点数据复选状态（仅当显示了 checkbox 复选框后有效）
   * @param idOrData 当前数据或数据键字符串
   * @param checked 是否选中
   */
  setChecked(idOrData: string | AxComCore.ITreeData, checked: boolean): void;

  /**
   * 获取当前被选中节点的唯一标识
   */
  getCurrentId(): string | undefined;

  /**
   * 获取当前选中的节点数据对象
   */
  getCurrentData(): AxComCore.ITreeMapData | undefined;

  /**
   * 设置某个节点的当前选中状态（高亮节点）
   * @param id 当前数据键
   * @param scrolling 是否滚动到指定项
   */
  setCurrentId(id: string | undefined, scrolling?: boolean): void;

  /**
   * 滚动到当前选中的节点处理
   */
  private scrollToCurrentItem;

  /**
   * 设置某个节点的当前选中状态
   * @param data 当前数据
   */
  setCurrentData(data: AxComCore.ITreeData): void;

  /**
   * 判断节点是否已经被打开
   * @param id 节点数据键
   * @returns boolean 节点是否已经被打开
   */
  isExpanded(id: string): boolean;

  /**
   * 根据节点键展开目录节点处理
   * @param id 需要展开的数据键
   */
  expand(id: string): void;

  /**
   * 根据节点数据展开目录节点
   * @param data 需展开的节点数据对象
   */
  expandData(data: AxComCore.ITreeData): void;

  expandLink(ids: string[], fn?: any): void;

  isNodeLoaded(id: string): boolean;

  getAllParentIds(id: string): string[];

  /**
   * 获取所有父节点AxComCore.ITreeMapData对象
   * @param id
   * @returns {AxComCore.ITreeMapData[]}
   * @param self 是否包括自己
   */
  getAllParentData(id: string, self?: boolean): AxComCore.ITreeMapData[];

  /**res
   * 合上节点处理
   * @param id 需要合上的数据键
   */
  collapse(id: string): void;

  /**
   * 合上节点处理
   * @param data 需要合上的节点对象
   */
  collapseData(data: AxComCore.ITreeData): void;

  /**
   * 获取焦点方法
   */
  focus(): AxTree;

  /**
   * 处理当前节点变化事件
   */
  private handleCurrentChange;
  /**
   * 节点点击事件
   */
  private handleNodeClick;
  /**
   * 显示菜单事件
   */
  private handleContextmenu;
  /**
   * 勾选节点事件（与 CHECK 事件不同，外部设置选择改变后都会触发此事件）
   */
  private handleCheckChange;
  /**
   * 当复选框被点击的时候触发（与 CHECK_CHANGE 不同，此事件当勾选框被选中时触发）
   */
  private handleCheck;
  /**
   * 展开节点事件
   */
  private handleExpand;
  /**
   * 关闭节点事件
   */
  private handleCollapse;
}

declare class AxUpload extends AxComCore.AxUIComponent {
  /**
   * 按钮名称
   */
  text?: string;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 多选
   */
  multiple?: boolean;
  /**
   * 按钮名称
   */
  action?: string;
  /**
   * 按钮提示
   */
  tip?: string;

  /**
   * 获取焦点方法
   */
  focus(): AxUpload;

  abort(file: any): void;
}

declare class AxTime extends AxComCore.AxUIComponent {
  /**
   * 设置只读 (默认为false, 非只读模式)
   */
  readonly?: boolean;
  isRange?: boolean;
  /**
   * 文本框可输入 (默认为true, 可输入)
   */
  editable?: boolean;
  disabled?: boolean;
  arrowControl?: boolean;
  clearable?: boolean;
  /**
   * 输入框尺寸 (可选, 可输入large, small, mini)
   */
  size?: string;
  type: string;
  /**
   * 范围选择时开始日期的占位内容 (可选)
   */
  startPlaceholder?: string;
  /**
   * 范围选择时结束日期的占位内容 (可选)
   */
  endPlaceholder?: string;
  /**
   * 范围选择时结束日期的占位内容 (可选)
   */
  format?: string;
  /**
   * 对齐方式 (可选, 默认 left, 可输入 left, center, right)
   */
  align?: string;
  /**
   * DatePicker 下拉框的类名 (可选)
   */
  popperClass?: string;
  /**
   * 当前时间日期选择器特有的选项参考下表 (可选)
   */
  pickerOptions?: {
    start: string;
    end: string;
    step: string;
    minTime: string;
    maxTime: string;
  };
  /**
   * 选择范围时的分隔符 (可选)
   */
  rangeSeparator?: string;
  /**
   * 选择器打开时默认显示的时间  Date  可被new Date()解析 (可选)
   */
  defaultValue?: Date;
  /**
   * 范围选择时选中日期所使用的当日内具体时刻 (可选, 数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00)
   */
  defaultTime?: string[];
  /**
   * 绑定值的格式。不指定则绑定值为 Date 对象 (可选)
   */
  valueFormat?: string;
  /**
   * 在范围选择器里取消两个日期面板之间的联动 (可选)
   */
  unlinkPanels?: boolean;
  /**
   * 自定义头部图标的类名 (可选, 默认为 el-icon-date)
   */
  prefixIcon?: string;
  /**
   * 自定义清空图标的类名 (可选, 默认为 el-icon-circle-close)
   */
  clearIcon?: string;
  /**
   * 输入时是否触发表单的校验 (可选, 默认为 true 触发)
   */
  validateEvent?: boolean;
  private AxTimeType;

  /**
   * 获取焦点方法
   */
  focus(): AxTime;
}

declare const AxUI: {
  /**
   * 注册所有组件
   * @param Vue
   * @param opts
   */
  install<T>(Vue: VueConstructor, opts?: T): void;
  // 版本号
  version: any;
};

export default AxUI;

export {
  AxAutocomplete,
  AxBadge,
  AxBoard,
  AxButton,
  AxCascader,
  AxCheckbox,
  AxDate,
  AxDialog,
  AxDivider,
  AxDropdown,
  AxForm,
  AxHeader,
  AxInput,
  AxLink,
  AxMessage,
  AxNavigator,
  AxPanels,
  AxProgress,
  AxRadio,
  AxSearch,
  AxSelect,
  AxSlider,
  AxSplit,
  AxTab,
  AxTable,
  AxTag,
  AxTooltip,
  AxTree,
  AxUpload,
  AxTime,
};
