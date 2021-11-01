import { AxiosRequestConfig, Method } from 'axios';
import { Vue } from 'vue-property-decorator';
import { Module as Mod, Module } from 'vuex';
import { VuexModule } from 'vuex-module-decorators';
import FRequestOption = AxTypes.FRequestOption;
import IRequestConfig = AxTypes.IRequestConfig;
import TLocale = AxTypes.TLocale;
import TLocaleGlobal = AxTypes.TLocaleGlobal;
import TLocaleModuleConfig = AxTypes.TLocaleModuleConfig;

// 国际化对象
declare class AxLanguage<T extends TLocale> {
  /**
   * constructor
   * @param target
   */
  constructor(target: string);
  private readonly target;
  /**
   * 获取对应的文本
   * @param key 键
   * @param params 需要替换{0}..{n}的参数数组
   * @returns {string}
   */
  t(key: string | keyof T, ...params: any[]): keyof T;
}

// 国际化类
declare class AxLocale {
  /**
   * constructor 不允许实例化使用
   */
  private constructor();
  static splitSymbol: string;
  static reduce: boolean;
  static locales: TLocaleGlobal;
  /**
   * 获取全部国际化文件中某个模块的key
   * @param config 模块配置，一般在模块根目录的 module.json 中配置
   * @returns {string} '[app]$[module]'
   */
  static getModuleKey(config: TLocaleModuleConfig): string;
  /**
   * 创建国际化操作实例
   * @param key 模块的key，是模块国际化文件的话，可以通过getModuleKey获取
   * @returns {AxLanguage<T>}
   */
  static create<T>(key: string): AxLanguage<T>;
  /**
   * 设置全局国际化文件
   * @param locales 国际化文件
   * @param reduce 是否使用压缩模式读取
   */
  static setLocales(locales: TLocaleGlobal, reduce?: boolean): void;
  /**
   * 设置国际化key的分隔符
   * @param symbol
   */
  static setSplitSymbol(symbol: string): void;
}

// 事件对象基类
declare class AxEvent {
  /**
   * 事件来源对象
   */
  private mtarget;
  /**
   * 当前事件类型字符串
   */
  private mtype;
  /**
   * 事件数据
   */
  data: any;
  /**
   * 是否允许阻止事件发起者的默认动作
   */
  private cancelable;
  /**
   * 是否停止继续执行标识
   */
  private stopped;
  /**
   * 是否阻止了发布者执行默认事件动作
   */
  private prevented;
  /**
   * 事件对象构造函数
   * @param {*} target 事件来源对象
   * @param {string} type 事件类型字符串
   * @param {*} data 事件数据
   * @param {boolean} [cancelable] 是否允许取消事件（事件被取消后需在发布事件的对象内停止执行默认动作，可选，默认为 false 表示不允许取消）
   */
  constructor(target: any, type: string, data: any, cancelable?: boolean);
  /**
   * 事件来源对象
   */
  get target(): any;
  /**
   * 当前事件类型字符串
   */
  get type(): string;
  /**
   * 是否停止继续执行标识
   */
  get isStopped(): boolean;
  /**
   * 是否阻止了发布者执行默认事件动作
   */
  get isPrevented(): boolean;
  /**
   * 阻止事件被继续传播，调用此方法后将停止执行其它在此侦听对象之后的优先级较低的方法
   */
  stopPropagation(): void;
  /**
   * 阻止事件发起者的默认动作（阻止后事件发布对象将取消当前事件应该执行的逻辑，仅当 cancelable 为 true 时才允许被取消，否则无效）
   */
  preventDefault(): void;
}

// 事件发布对象
declare class AxDispatcher {
  constructor();
  private listeners;
  /**
   * 增加事件侦听对象
   * @param {string} type 事件类型
   * @param {IListener} listener 事件响应方法或执行对象
   * @param {number} priority 执行优先级（可选，默认 0，优先级相同时按侦听增加的先后顺序执行）
   */
  on(
    type: string,
    listener: AxTypes.IListener,
    priority?: number
  ): AxDispatcher;
  /**
   * 移除事件侦听对象
   * @param {string} type 事件类型
   * @param {IListener} listener 事件响应方法
   * @return {boolean} 是否移除成功
   */
  remove(type: string, listener: AxTypes.IListener): boolean;
  /**
   * 判断是否已经存在事件处理对象或事件类型
   * @param {string} type 事件类型
   * @param {IListener} [listener] 事件响应方法
   * @returns {boolean} 是否已经存在事件处理对象或事件类型
   */
  has(type: string, listener?: AxTypes.IListener): boolean;
  /**
   * 判断是否已经有事件侦听对象
   * @param {string} [type] 事件类型（可选，若不指定类型则返回是否存在任意类型的侦听器）
   * @returns {boolean} 是否已经有事件侦听对象
   */
  hasType(type?: string): boolean;
  /**
   * 发布事件处理
   * @param {AxEvent} event 事件对象
   */
  trigger(event: AxEvent): void;
}

/**
 * 请求封装类
 * @deprecated 已经移动到app-core-api项目中，后续不再使用
 */
declare class AxRequest {
  constructor(config: IRequestConfig);
  private readonly config;
  private readonly service;
  /**
   * http请求模版
   * @param method 请求方法
   * @param url host后的url部分
   * @param params params参数
   * @param data data参数
   * @param options 请求模版通用配置，国际化和token等
   * @param requestConfig 请求配置，用于针对特殊请求配置时的配置，例如请求头headers修改
   * @returns {Promise<T>}
   */
  http<T>(
    method: Method,
    url: string,
    params: any,
    data: any,
    options?: FRequestOption,
    requestConfig?: AxiosRequestConfig
  ): Promise<T>;
}

// 浏览器工具类
declare class AxBrowserUtils {
  /**
   * 获取当前浏览器多国语言标识（如：zh_CN, en_US...）
   * @returns {string} 语言标识
   */
  static getDefaultLanguageKey(): string;
}

// Dom操作工具类
declare class AxDomUtils {
  /**
   * 浏览器类型对象
   */
  static BROWSER: {
    ie: number;
    firefox: number;
    chrome: number;
    opera: number;
    safari: number;
  };
  /**
   * 获取当前浏览器多国语言标识（如：zh_CN, en_US...）
   * @returns {string} 语言标识
   */
  static getDefaultLanguageKey(): string;
  /**
   * 绑定处理方法（支持多个方法名称）
   * @param {HTMLElement | Window | Document} e HTML 元素
   * @param {string[]|string} methods 方法名称数组
   * @param {(event: Event) => any} handler 事件处理函数
   * @returns {boolean} 是否绑定成功
   */
  static addDomEventListener(
    e: HTMLElement | Window | Document,
    methods: string | string[],
    handler: (event: Event) => any
  ): boolean;
  /**
   * 解除绑定处理方法（支持多个方法名称）
   * @param {HTMLElement | Window | Document} e HTML 元素
   * @param {string[]|string} methods 方法名称数组
   * @param {(event: Event) => any} handler 事件处理函数
   * @returns {boolean} 是否解绑成功
   */
  static removeDomEventListener(
    e: HTMLElement | Window | Document,
    methods: string[] | string,
    handler: (event: Event) => any
  ): boolean;
  /**
   * 发布 DOM 事件处理
   * @param {HTMLElement} e HTML 元素
   * @param {string[]} methods 方法名称数组
   * @param {Event} [evt] 事件对象（可选）
   * @returns {boolean} 是否发布成功
   */
  static dispatchDomEvent(
    e: HTMLElement,
    methods: string[],
    evt?: Event
  ): boolean;
  /**
   * 获取事件目标对象
   * @param {Event} evt 事件对象
   * @returns {HTMLElement | null} 事件对象
   */
  static getDomEventTarget(evt?: Event): HTMLElement | null;
  /**
   * 获取事件按键代码（keyCode）
   * @param {Event} evt 事件对象
   * @returns {number} 按键值
   */
  static getDomEventKeyCode(evt: Event): number;
  /**
   * 把事件的 KEYCODE 转换为字符串（无效返回 undefined ）
   * @param {Event} evt 事件对象
   * @param {boolean} [includeFuncKey] 是否包含功能按键字符串返回（如：F1, Esc 等；默认：false）
   * @returns {string|undefined} 按键字符串
   */
  static keyCodeToString(
    evt: Event,
    includeFuncKey?: boolean
  ): string | undefined;
  /**
   * 取消事件
   * @param {Event} evt 事件对象
   * @param {boolean} cancelBubble 是否取消冒泡（可选；默认：true - 取消冒泡）
   * @returns {boolean} 是否允许事件继续
   */
  static cancelDomEvent(evt: Event, cancelBubble?: boolean): boolean;
  /**
   * 禁止事件冒泡
   * @param {Event} evt 事件对象
   * @returns {boolean} 是否允许事件继续
   */
  static cancelDomEventBubble(evt: Event): boolean;
  /**
   * 取消滚动冒泡
   * @param {Event} evt 事件对象
   * @param {HTMLElement} scrollElement 滚动元素对象（可选，不设置直接使用事件目标对象）
   * @returns {boolean} 是否允许事件继续
   */
  static cancelDomWheelBubble(
    evt: MouseEvent,
    scrollElement: HTMLElement
  ): boolean;
  /**
   * 判断是否是操作按键（非键盘输入键）
   * @param {number} k 键值（keyCode）
   * @returns {boolean} 是否是操作按键
   */
  static isDomControlKey(k: number): boolean;
  /**
   * 获取元素当前样式
   * @param {HTMLElement} e 元素对象或标识
   * @param {string} styleName 样式名称（如："border-color"）
   * @param {string} defaultStyle 默认返回样式
   * @returns {string} 获取到的样式字符串
   */
  static getDomStyle(
    e: HTMLElement,
    styleName: string,
    defaultStyle: string
  ): string;
  /**
   * 获取元素在文档内的位置
   * @param {Element} e 元素对象或标识
   * @param {Element} limitParent 查找结束的上级对象（可选，默认不限制，查找时包含此对象）
   * @returns {object} {left:xxx,top:xxx}
   */
  static getDomPosition(
    e: Element,
    limitParent?: Element
  ): {
    left: number;
    top: number;
  };
  /**
   * 判断当前对象是否是窗体对象
   * @param {object} obj 测试的对象
   * @returns {boolean} 是否是窗体对象
   */
  static isDomWindow(obj: any): boolean;
  /**
   * 判断当前对象是否是文档对象
   * @param {object} obj 测试的对象
   * @returns {boolean} 是否是窗体对象
   */
  static isDomDocument(obj: any): boolean;
  /**
   * 获取滚动条信息，返回：{width:xxx,height:xxx,left:xxx,top:xxx}
   * @param {HTMLElement} e 元素对象或标识
   * @returns {Object} {width:xxx,height:xxx,left:xxx,top:xxx}
   */
  static getDomScroll(e: HTMLElement | Window): {
    width: number;
    height: number;
    left: number;
    top: number;
  };
  /**
   * 获取浏览器窗口大小
   * @param {Window} win 窗口对象（可选）
   * @returns {Object} {width:xxx,height:xxx}
   */
  static getWindowSize(win?: Window): {
    width: number;
    height: number;
  };
  /**
   * 获取文档页面大小
   * @param {Window} win 窗口对象
   * @returns {Object} {width:xxx,height:xxx}
   */
  static getDocumentSize(win?: Window): {
    width: number;
    height: number;
  };
  /**
   * 获取事件鼠标滚轮操作值（返回值：>0 - 向下滚动；<0 - 向上滚动；0 - 不滚动）
   * @param {MouseEvent} evt 事件对象
   * @returns {number} 滚动值
   */
  static getDomEventWheel(evt: MouseEvent): number;
  /**
   * 查找上级对象（条件判断包含对象本身）
   * @param e 当前对象
   * @param idValue 上级对象标志值（可选，null 表示不查找）
   * @param nameValue 上级对象名称值（可选，null 表示不查找）
   * @param classNameValue 上级对象样式类值（可选，null 表示不查找）
   * @param tagNameValue 上级对象标签值（可选，null 表示不查找）
   * @param attributeName 上级对象属性名称（可选，null 表示不查找）
   * @param attributeValue 上级对象属性值（可选，null 表示不查找）
   * @param levels 向上查询最多级数（可选，达到该次数后不再向上查询，默认 0 表示不限制）
   * @param limitParent 查找结束的上级对象（可选，默认不限制）
   * @returns 上级对象（undefined 表示不存在）
   */
  static getDomParent(
    e: HTMLElement,
    idValue?: string,
    nameValue?: string,
    classNameValue?: string,
    tagNameValue?: string,
    attributeName?: string,
    attributeValue?: any,
    levels?: number,
    limitParent?: HTMLElement
  ): HTMLElement | undefined;
  /**
   * 判断是否溢出省略号
   * @param dom
   */
  static isEllipsis(dom: HTMLElement): boolean;
}

// 加密工具类
declare class AxEncryptionUtils {
  /**
   * 使用 MD5 加密算法加密字符串
   * @param {string} str 需要加密的字符串
   * @returns {string} 加密结果字符串
   */
  static md5(str: string): string;
}

// 存储工具类
declare class AxStorageUtils {
  /**
   * 使用本地资源存储数据
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   * @param {*} value 数据值（任意数据）
   */
  static localSave(moduleName: string, key: string, value: any): void;
  /**
   * 从本地资源读取数据（未读取到则返回 defaultValue）
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   * @param {*} [defaultValue=null] 默认返回数据（不设置则为 null）
   * @returns {*} 读取到的数据对象（已经转换为对象）
   */
  static localRead(moduleName: string, key: string, defaultValue?: any): any;
  /**
   * 从本地资源移除数据
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   */
  static localRemove(moduleName: string, key: string): void;
  /**
   * 从本地资源移除所有数据
   * @export
   */
  static localClear(): void;
  /**
   * 使用当前浏览器进程存储本地数据
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   * @param {*} value 数据值（任意数据）
   */
  static sessionSave(moduleName: string, key: string, value: any): void;
  /**
   * 从当前浏览器进程读取本地数据（未读取到则返回 defaultValue）
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   * @param {*} [defaultValue=null] 默认返回数据（不设置则为 null）
   * @returns {*} 读取到的数据对象（已经转换为对象）
   */
  static sessionRead(moduleName: string, key: string, defaultValue?: any): any;
  /**
   * 从当前浏览器进程移除数据
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   */
  static sessionRemove(moduleName: string, key: string): void;
  /**
   * 从当前浏览器进程移除所有数据
   * @export
   */
  static sessionClear(): void;
  /**
   * 使用当前浏览器 COOKIE 存储本地数据
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   * @param {*} value 数据值（任意数据）
   */
  static cookieSave(moduleName: string, key: string, value: any): void;
  /**
   * 从当前浏览器 COOKIE 读取本地数据（未读取到则返回 null）
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   * @param {*} [defaultValue=null] 默认返回数据（不设置则为 null）
   * @returns {*} 读取到的数据对象（已经转换为对象）
   */
  static cookieRead(moduleName: string, key: string, defaultValue?: any): any;
  /**
   * 从当前浏览器 COOKIE 移除数据
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   */
  static cookieRemove(moduleName: string, key: string): void;
}

// 字符串处理工具类
declare class AxStringUtils {
  /**
   * 格式化字符串<br/> 如果将 arguments 数组传递给此方法，则数组中包含的参数会转换成字符串，然后在返回前在字符串中按顺序替代占位符 "{0}"、"{1}" 等。
   * @param {string} str 字符串，可包含：{0}..{n} 占位符
   * @param {params[]} [params] 需要替换{0}..{n}的参数数组
   * @returns {string} 格式化后的字符串
   */
  static formatString(str: string, params?: any[]): string;
  /**
   * 生成多个重复的字符串
   * @param str 需要重复的字符串
   * @param count 数量
   * @param separator 分隔符（默认空字符串：""）
   * @returns string 字符串
   */
  static duplicate(str: string, count: number, separator?: string): string;
  /**
   * 数据排序处理（比较两个数据大小，返回排序顺序）；
   * 负值，如果所传递的第一个参数比第二个参数小；
   * 零，如果两个参数相等；
   * 正值，如果第一个参数比第二个参数大；
   * @param v1 第一个数值
   * @param v2 第二个数值
   * @returns number 比较结果：-1/0/1
   */
  static compareSort(v1: any, v2: any): number;
  /**
   * 获取字符串字节长度
   * @param {string} str 字符串对象
   * @returns {number} 字节长度
   */
  static getBytesLength(str: string): number;
  /**
   * 把字符串转换为正则表达式字符串
   * @param regStr 正则表达式字符串
   */
  static fixRegExpString(regStr: string): string;
  /**
   * 对象转url参数
   * @param obj
   * @returns {void[]}
   * @param prefix
   */
  static queryStringify(obj: any, prefix?: boolean): string;
}

// 主题工具类
declare class AxThemesUtils {
  protected constructor();
  /**
   * 已经导入的 CSS 文件名称集合（键：目录路径(不包括皮肤名称)；值：文件名称及导入次数集合）
   */
  private static cssFiles;
  private static headStyles;
  /**
   * 增加模块CSS 文件记录
   * @param modulePath CSS 导入模块地址（ '/assets/themes/app/module/' ）
   * @param theme 皮肤名称（ 'default' ）
   * @param files 需要导入的 CSS 文件数组（相对皮肤目录下的css文件，可附带相对目录，如: ['index.css', 'login/login.css', 'home.css'] 等）
   * @returns [Promise] 返回异步对象（不需要导入则直接返回 null）
   */
  static addModuleCss(
    modulePath: string,
    theme: string,
    files: string[]
  ): Promise<any> | null;
  /**
   * 移除模块下的 CSS 处理
   * @param modulePath CSS 导入模块地址（ '/assets/themes/app/module/' ）
   * @param files 需要导入的 CSS 文件数组（相对皮肤目录下的css文件，可附带相对目录，如: ['index.css', 'login/login.css', 'home.css'] 等）
   */
  static removeModuleCss(modulePath: string, files: string[]): void;
  /**
   * 导入 CSS 文件处理（假如已经导入则返回 null）
   * @param urls CSS 文件完整地址
   * @returns [Promise] 返回异步对象（不需要导入则直接返回 null）
   */
  private static importCSS;
  /**
   * 移除模块的 CSS 文件处理
   * @param urls 地址数据数组
   */
  private static exportCss;
  /**
   * 变换皮肤目录处理
   * @param theme 皮肤名称
   */
  static changeTheme(theme: string): void;
  /**
   * 添加顶部嵌入样式
   * @param key
   * @param path
   * @param theme
   * @returns {Promise<void>}
   */
  static addStyle(key: string, path: string, theme?: string): Promise<void>;
  /**
   * 获取主题下的资源地址
   * @param url 资源相对地址
   * @param config 模块配置
   * @param theme 主题 默认 'default'，不区分主题的话传 ''
   * @return {`/${string}`}
   */
  static getAssetUrl(
    url: string,
    config: AxTypes.ModuleConfig,
    theme?: string
  ): string;
}

// 国际化工具类
declare class AxLanguageUtils {
  // 特殊表头和数据用到的正则匹配符
  static reg: RegExp;
  /**
   * 是否是国际化表头
   * @param col
   * @returns {boolean}
   */
  static isCol(col: string): boolean;
  /**
   * 处理国际化时使用的特殊表头
   * @param cols 特殊表头： '$name:{en_US,zh_CN}'
   * @returns {string[]}
   */
  static flatTableCols(cols: string[]): string[];
  /**
   * 处理国际化时使用的特殊数据
   * @param data
   * @returns {string[]}
   */
  static flatTableData(data: AxTypes.GridList): AxTypes.GridList;
}

// 数据转换工具类
declare class AxTransformUtils {
  /**
   * 将返回的数组转换为树形数据
   * @param arr 要处理的数组
   * @param options 节点关系配置
   * @returns {T[]}
   */
  static arrayToTree<T>(
    arr: T[],
    options?: {
      key?: keyof T;
      parent?: keyof T;
      children?: keyof T | string;
    }
  ): any[];
}

// 样式处理工具类
declare class AxStyleUtils {
  /**
   * 移除值的后缀
   * @param value
   * @returns {number}
   */
  static removeSuffix(value: string | number): number;
  /**
   * 获取根节点字体（px）
   * @return {number}
   */
  static getRootFontSize(): number;
  /**
   * rem转px
   * @param value
   * @returns {number}
   */
  static remToPx(value: string | number): number;
  /**
   * rem转px 带rem后缀
   * @param value
   * @returns {string}
   */
  static remToPxSuffix(value: string | number): string;
  /**
   * px转rem
   * @param value
   * @returns {number}
   */
  static pxToRem(value: string | number): number;
  /**
   * px转rem 带px后缀
   * @param value
   * @returns {string}
   */
  static pxToRemSuffix(value: string | number): string;
}

// 显示组件基类
declare class AxVueBase extends Vue {
  /**
   * 是否已经导入了 CSS 文件标识
   */
  protected cssImported: boolean;
  /**
   * 导入 CSS 文件处理（在组件的生命周期函数 created() 内调用 ）
   * @param vue 当前 VUE 组件对象
   * @param files css 文件名称数组（相对皮肤目录下的css文件，可附带相对目录，如: ['index.css', 'login/login.css', 'home.css'] 等）
   * @param config 模块配置信息
   * @param theme 当前皮肤名称（可选，默认：'default'）
   */
  protected importCss(
    vue: AxVueBase,
    files: string[],
    config: AxTypes.ModuleConfig,
    theme?: string
  ): void;
  /**
   * 获取主题下的资源地址
   * @param url 资源相对地址
   * @param config 模块配置
   * @param theme 主题 默认 'default'
   * @return {`/${string}`}
   */
  protected getAssetUrl(
    url: string,
    config: AxTypes.ModuleConfig,
    theme?: string
  ): string;
  /**
   * 显示界面处理
   * @param vue 当前组件
   */
  private showInterface;
}

// 应用数据模块定义
declare class AppState extends VuexModule implements AxTypes.IAppState {
  appId: string;
  version: string;
  lang: string;
  langList: string[];
  localeList: AxTypes.IAppLocale[];
  loginUsers: any[];
  theme: string;
  themeList: AxTypes.ThemeOption[];
  homeSetting: AxTypes.HomeSetting;
  /**
   * 构造函数
   */
  constructor(module: Mod<ThisType<any>, any>);
  /**
   * 设置语言标识
   * @param {string} lang 语言标识
   */
  setLang(lang: string): Promise<void>;
  /**
   * 已弃用，请使用setLocaleList
   * 设置国际化语言列表
   * @deprecated
   * @param langList 语言列表
   * @return {Promise<void>}
   */
  setLangList(langList: string[]): Promise<void>;
  /**
   * 设置国际化语言列表
   * @param localeList 语言列表
   * @return {Promise<void>}
   */
  setLocaleList(localeList: AxTypes.IAppLocale[]): Promise<void>;
  /**
   * 设置当前主题
   * @param {string} theme 当前主题
   */
  setTheme(theme: string): Promise<void>;
  /**
   * 设置主题列表
   * @param themeList 主题列表
   * @return {Promise<void>}
   */
  setThemeList(themeList: AxTypes.ThemeOption[]): Promise<void>;
  /**
   * 设置登录用户历史记录
   * @param {IUserData[]} loginUsers 登录用户历史记录
   */
  setLoginUsers(loginUsers: AxTypes.IUserData[]): Promise<void>;
  /**
   * 设置首页设置数据
   * @param homeSetting 首页设置数据对象
   */
  setHomeSetting(homeSetting: AxTypes.HomeSetting): Promise<void>;
  /**
   * 提交数据处理
   */
  UPDATE_SETTINGS(value: Partial<AxTypes.IAppState>): void;
}

// 用户数据模块定义
declare class UserState extends VuexModule implements AxTypes.IUserState {
  private readonly appId;
  id: string;
  account: string;
  name: string;
  image: string;
  token: string;
  isLogin: boolean;
  isAdmin: boolean;
  roles: Map<string, number[]>;
  /**
   * 构造函数
   */
  constructor(module: Module<ThisType<any>, any>);
  /**
   * 获取最后登录的用户数据（不存在则返回 null）
   * @returns {IUserData} 用户数据对象
   */
  get userData(): AxTypes.IUserData | null;
  /**
   * 设置用户登录状态
   * @param user
   * @return {Promise<void>}
   */
  setLogin(user: {
    id: string;
    account: string;
    name: string;
    image: string;
    token: string;
    admin: boolean;
    roles: AxTypes.IUserRole[] | null;
  }): Promise<void>;
  /**
   * 设置退出登录
   */
  setLogout(): Promise<void>;
  /**
   * 设置用户登录数据
   * @private
   * @param user
   */
  USER_LOGIN(user: {
    id: string;
    account: string;
    name: string;
    image: string;
    token: string;
    isLogin: boolean;
    isAdmin: boolean;
    roles: AxTypes.IUserRole[] | null;
  }): void;
}

// 应用数据模块对象
declare const AxVuexApp: AppState;

// 用户数据模块对象
declare const AxVuexUser: UserState;

// websocket封装类
declare class AxWebsocket {
  private readonly url;
  private lockReconnect;
  private websocket;
  private params;
  private options;
  private dispatcher;
  private readonly showLog;
  private readonly autoReconnect;
  /**
   * constructor
   * @param url 连接地址
   * @param params 地址参数
   * @param options 额外参数
   */
  constructor(
    url: string,
    params?: {
      [key: string]: any;
    } | null,
    options?: AxTypes.WSOptions
  );
  /**
   * 返回的帧数据处理方法，默认使用json解析
   * @param msg
   * @returns {WSMsg | null}
   */
  private msgTransform;
  /**
   * 日志
   */
  private log;
  /**
   * 获取websocket对象
   * @returns {null}
   */
  getWebsocket(): WebSocket | undefined;
  /**
   * 发送消息
   * @param data
   */
  send(data: any): void;
  /**
   * 事件监听
   * @param type 时间类型
   * @param fn 触发方法
   * @param priority 优先级
   * @returns {InitWebSocket}
   */
  on(type: string, fn: AxTypes.IListener, priority?: number): this;
  /**
   * 删除监听
   * @param type
   * @param fn
   * @returns {InitWebSocket}
   */
  remove(type: string, fn: AxTypes.IListener): this;
  /**
   * ws事件处理
   */
  initEventHandle(): void;
  /**
   * 创建连接
   */
  connect(): void;
  /**
   * 重连
   */
  reconnect(): void;
}

// 通用类型定义
declare namespace AxTypes {
  /**
   * 表格列及数量统计数据
   */
  interface GridCount {
    /**
     * 当前需要显示的列名称数组
     */
    cols: string[];
    /**
     * 当前数据总条数
     */
    count: number;
  }
  /**
   * 表格结果数据(二维数组,第一维表示行, 第二维表示列数据, 数据顺序与 GridCount 统计结果的列数组数据一致)
   */
  type GridList = any[][];
  /**
   * 键值对对象
   */
  interface KV {
    /**
     * 键 (必须)
     */
    k: string;
    /**
     * 值
     */
    v?: any;
  }
  /**
   * 排序数据类型
   */
  type Orders = KV[] | null;

  interface HomeSetting {
    /**
     * 侧边栏状态 (0: 关, 1: 文字样式开, 2: 图标样式开)
     */
    sidebarStatus: number;
  }
  interface OrgRouter {
    /**
     * 临时存放详细机构页面名称 (存在删除逻辑)
     */
    data: any[];
  }

  // 主题可选项
  type ThemeOption = { code: string; name: string };

  // 基本配置 完整
  interface IRequestConfig extends AxiosRequestConfig {
    // 请求地址
    baseURL: string;
    // 超时设置时间
    timeout?: number;
    // 是否需要凭证（后端跨域接口的要求）
    withCredentials?: boolean;
    // 如果登录失效时重定向处理
    redirect?(rs: any): void;
  }

  // 请求额外配置
  export interface FRequestOption {
    // 国际化标志，默认对应的字段时
    lang?: string;
    // 身份验证token，默认对应header里的 Ax-Token，不使用该字段时在headers中定义
    token?: string;
    // 额外请求头设置
    headers?: {
      [key: string]: any;
    };
  }

  // 全局window对象下面挂载的配置格式
  export interface IConfig {
    [key: string]: string;
  }

  /**
   * 模块配置
   */
  type ModuleConfig = {
    app: string;
    module: string;
    themesPath: string;
  };

  /**
   * 事件侦听方法
   * @param {AxEvent} evt 事件对象
   */
  type IFuncListener = (evt: AxEvent) => void;
  /**
   * 事件侦听对象接口
   */
  interface IObjectListener {
    /**
     * 事件侦听执行方法
     * @param {AxEvent} evt 事件对象
     */
    onEvent(evt: AxEvent): void;
  }
  /**
   * 事件侦听对象类型
   */
  type IListener = IFuncListener | IObjectListener;

  type TLocale = {
    [key: string]: any;
  };
  type TLocaleGlobal = {
    global: TLocale;
    [key: string]: TLocale;
  };
  type TLocaleModuleConfig = {
    app?: string;
    module: string;
  };

  interface WSOptions {
    // 是否显示log，调试使用
    showLog?: boolean;
    // 自动连接
    autoConnect?: boolean;
    // 自动重连间隔， 单位毫秒
    autoReconnect?: number;
    // ws协议
    protocols?: string | string[];
    // 自定义的数据转换方法
    transform?: (msg: string) => WSMsg | null;
  }
  interface WSMsg {
    code: string;
    data: any;
  }

  /**
   * 应用程序状态数据接口
   */
  interface IAppState {
    /**
     * 应用程序版本
     */
    version: string;
    /**
     * 当前默认语言标识
     */
    lang: string;
    /**
     * 当前系统可以使用的语言列表
     */
    langList: string[];
    /**
     * 语言列表详细信息
     */
    localeList: IAppLocale[];
    /**
     * 当前主题标识 code
     */
    theme: string;
    /**
     * 主题列表
     */
    themeList: ThemeOption[];
    /**
     * 登录成功用户历史记录
     */
    loginUsers: any[];
    /**
     * 首页配置数据
     */
    homeSetting: HomeSetting;
  }
  /**
   * 用户状态对象定义
   */
  interface IUserState {
    /**
     * 机构序号
     */
    id: string;
    /**
     * 用户账号
     */
    account: string;
    /**
     * 用户名称
     */
    name: string;
    /**
     * 用户头像图片地址
     */
    image: string;
    /**
     * 用户登录令牌
     */
    token: string;
    /**
     * 是否已经登录
     */
    isLogin: boolean;
    /**
     * 是否系统管理员账号
     */
    isAdmin: boolean;
    /**
     * 权限集合（键：应用标识；值：模块权限数据数组）
     */
    roles: Map<string, number[]>;
  }
  interface IRootState {
    app: IAppState;
    user: IUserState;
  }

  interface IModules {
    id: string;
    code: string;
    licenses: IModulesLicenses;
  }
  interface IModulesLicenses {
    view: boolean;
    edit: boolean;
  }
  interface IAppInfo {
    id: string;
    modules: IModules[];
    children?: IAppInfo[];
  }
  interface ISystemModuleOptions {
    name: string;
  }

  /**
   * 用户数据对象定义
   */
  interface IUserData {
    /**
     * 机构序号
     */
    id: string;
    /**
     * 用户账号
     */
    account: string;
    /**
     * 用户名称
     */
    name: string;
    /**
     * 用户头像图片地址
     */
    image: string;
  }
  /**
   * 用户权限对象定义
   */
  interface IUserRole {
    /**
     * 所属应用标识
     */
    app: string;
    /**
     * 模块权限数据数组
     */
    ls: number[];
  }

  /**
   * 全局国际化详细信息
   */
  interface IAppLocale {
    // 国际化语言代号
    code: string;
    // 国际化语言名称
    name: string;
    // 是否默认
    defaulted?: boolean;
  }
}

// 框架核心
declare namespace AxCore {
  class SystemModule {
    constructor(options: AxTypes.ISystemModuleOptions);
    private emitDispatcher?;
    dispatcher: AxDispatcher;
    name: string;
    /**
     * 上报消息
     * @param event
     */
    emit(event: AxEvent): void;
    /**
     * 注册上报用的dispatcher
     * @param dispatcher
     */
    setDispatcher(dispatcher: AxDispatcher): void;
  }
  class SystemCenter {
    constructor();
    static dispatcher: AxDispatcher;
    private static moduleList;
    /**
     * 获取模块 TODO：如果有创建参数的话后续添加
     * @param name
     * @returns {SystemModule}
     */
    static getModule(name: string): SystemModule;
    /**
     * 安装注册模块
     * @param module
     */
    static registerModule(module: SystemModule): void;
    /**
     * 给模块广播消息
     * @param event
     * @param target
     */
    static broadcast(event: AxEvent, target?: string[]): void;
  }
}

// 框架配置
declare namespace AxConfig {
  class HttpConfig<Host> {
    constructor(options: { host: Host });
    host: Host;
  }
}

// 常量定义
declare namespace AxConst {
  enum EWSType {
    CLOSE = 'close',
    ERROR = 'error',
    INVALID = 'invalid',
    OPEN = 'open',
  }
  enum ESessionKey {
    SESSION = 'session',
    USER_STATE = 'session',
  }
  enum ELocalKey {
    LAST_LOGIN = 'last-login',
    SETTING = 'settings',
  }
  /**
   * 管理员枚举定义类
   */
  enum EAdminConstType {
    /**
     * 平台最高管理员用户序号
     */
    ADMIN_ID = '00000000000000000000000000000000',
    /**
     * 管理员角色序号
     */
    ROLE_ID = '00000000000000000000000000000000',
    /**
     * 平台最高机构管理员序号
     */
    ORGANIZATION_ID = '00000000000000000000000000000000',
  }
  /**
   * api post 请求返回 模块响应状态码
   */
  enum ResultCode {
    /**
     * 默认为未知状态
     */
    UNKNOWN = 0,
    /**
     * 成功状态码
     */
    OK = 1,
    /**
     * 一般失败状态码
     */
    FAILED = 2,
    /**
     * 内部异常状态码
     */
    EXCEPTION = 3,
    /**
     * 响应超时
     */
    TIMEOUT = 4,
    /**
     * 数据无效
     */
    INVALID = 5,
    /**
     * 运行时错误
     */
    RUNTIME = 6,
    /**
     * 编程错误
     */
    PROGRAMMING = 7,
  }
  /**
   * 前端定义的错误码
   */
  enum ErrorCode {
    // 需要重定向
    REDIRECT,
    // 空的返回内容
    EMPTY,
  }
  enum HttpCode {
    // 无效的登录凭证
    UNAUTHORIZED = 401,
    // 登录有问题
    LOGIN_ERROR = 498,
    // 登录失败
    LOGIN_FAILED = 499,
  }
}

// 菜单
declare namespace AxMenu {
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
}

export {
  //#region Vue基类，提供样式导入等功能
  AxVueBase,
  //#endregion

  //#region Vue项目通用Vuex，主要用于读取当前用户信息和系统配置
  AxVuexApp,
  AxVuexUser,
  //#endregion

  //#region 工具类，提供各种静态方法
  AxStorageUtils,
  AxStringUtils,
  AxThemesUtils,
  AxEncryptionUtils,
  AxDomUtils,
  AxBrowserUtils,
  AxLanguageUtils,
  AxTransformUtils,
  AxStyleUtils,
  //#endregion

  //#region 国际化
  AxLocale,
  AxLanguage,
  //#endregion

  //#region 事件
  // 事件分发器
  AxDispatcher,
  // 事件通讯
  AxEvent,
  // websocket
  AxWebsocket,
  //#endregion

  //#region Api请求
  AxRequest,
  //#endregion

  //#region 菜单
  AxMenu,
  //#endregion

  // 核心服务
  AxCore,
  // 统一配置
  AxConfig,
  // 通用类型定义
  AxTypes,
  // 通用常量定义
  AxConst,
};
