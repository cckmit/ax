import { StringUtils } from '@/utils/string-utils';

// 本地语言对象
export default class LocalLanguage {
  /**
   * 当前语言对应的数据
   */
  private readonly current: { [key: string]: string } = {};

  /**
   * 构造函数
   * @param {string} file 当前语言文件对象（使用 require 加载）
   */
  constructor(
    file: { default: { [key: string]: string } } | { [key: string]: any }
  ) {
    // 改变当前语言
    this.current = file ? (file.default ? file.default : file) : {};
  }

  /**
   * 获取当前语言下的文本
   * @param {string} key 文本键
   * @param {string} params 需要替换{0}..{n}的参数数组
   * @returns {string} 读取到的文本资源
   */
  public text(key: string, ...params: any[]): string {
    // 返回数据
    return StringUtils.formatString(this.current[key], params);
  }
}
