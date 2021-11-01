import {
  TLocale,
  TLocaleGlobal,
  TLocaleModuleConfig,
} from '@/interfaces/locale';
import { StringUtils } from '@/utils/string-utils';

// 全局国际化实现类
export class Language<T extends TLocale> {
  /**
   * constructor
   * @param target
   */
  constructor(target: string) {
    // 设置key
    this.target = target;
  }

  // target 当前语言对象在全局国际化语言对象中对应的key
  public readonly target: string;

  /**
   * 获取对应的文本
   * @param key 键
   * @param params 需要替换{0}..{n}的参数数组
   * @returns {string}
   */
  public t(key: string | keyof T, ...params: any[]) {
    // 判断国际化文件是否加载
    if (!Locale.locales) {
      // eslint-disable-next-line no-console
      console.error(`国际化文件还未读取完成或没有读取到文件`);
      return key;
    }
    let locale = null;
    // 分解key
    const keyLink = this.target.split(Locale.splitSymbol);
    // 判断国际化文件是否有效
    if (!keyLink.length) {
      // eslint-disable-next-line no-console
      console.error(`国际化文件还中没有读取到[${this.target}]对应的内容`);
      return key;
    } else if (keyLink.length === 1) {
      // 获取对应的国际化文件
      locale = Locale.locales[this.target];
    } else {
      // 有纵深的情况下，逐级获取国际化文件
      locale = Locale.locales[keyLink[0]];
      for (let i = 1; i < keyLink.length; i++) {
        locale = locale[keyLink[i]];
      }
    }
    // 判断国际化文件是否有效
    if (!locale) {
      // eslint-disable-next-line no-console
      console.error(`国际化文件还中没有读取到[${this.target}]对应的内容`);
      return key;
    }
    // 获取国际化结果
    const result = (locale as T)[key];
    // 没有找到对应国际化结果的时候返回key
    if (!result && result !== '') {
      return key;
    }
    // 返回数据
    return StringUtils.formatString(result, params);
  }
}

// 全局国际化工具类
export default class Locale {
  /**
   * constructor 不允许实例化使用
   */
  private constructor() {}

  // 国际化文件key的分隔符
  public static splitSymbol = '$';

  // 是否压缩减少字段重复 TODO: 在生成国际化文件时建立key hash
  public static reduce = false;

  // 当前使用的全局国际化文件
  public static locales: TLocaleGlobal;

  /**
   * 获取全部国际化文件中某个模块的key
   * @param config 模块配置，一般在模块根目录的 module.json 中配置
   * @returns {string} '[app]$[module]'
   */
  public static getModuleKey(config: TLocaleModuleConfig) {
    return `${config.app}${Locale.splitSymbol}${config.module}`;
  }

  /**
   * 创建国际化操作实例
   * @param key 模块的key，是模块国际化文件的话，可以通过getModuleKey获取
   * @returns {Language<T>}
   */
  public static create<T>(key: string) {
    // 返回国际化操作实例
    return new Language<T>(key);
  }

  /**
   * 设置全局国际化文件
   * @param locales 国际化文件
   * @param reduce 是否使用压缩模式读取
   */
  public static setLocales(locales: TLocaleGlobal, reduce: boolean = false) {
    // 设置当前的国际化文件
    Locale.locales = locales;
    // 是否使用压缩模式读取
    Locale.reduce = reduce;
  }

  /**
   * 设置国际化key的分隔符
   * @param symbol
   */
  public static setSplitSymbol(symbol: string) {
    Locale.splitSymbol = symbol;
  }
}
