// 字符串工具类
export class StringUtils {
  protected constructor() {}

  /**
   * 格式化字符串<br/> 如果将 arguments 数组传递给此方法，则数组中包含的参数会转换成字符串，然后在返回前在字符串中按顺序替代占位符 "{0}"、"{1}" 等。
   * @param {string} str 字符串，可包含：{0}..{n} 占位符
   * @param {any[]} [params] 需要替换{0}..{n}的参数数组
   * @returns {string} 格式化后的字符串
   */
  public static formatString(str: string, params?: any[]): string {
    // 判断是否有效
    if (str === undefined || str === null || str.length === 0) return '';
    // 判断是否存在参数
    if (params && params.length > 0) {
      // 遍历格式化数据
      for (let index = 0; index < params.length; index++) {
        // 获取一个数据
        const param = params[index];
        // 转换为字符串
        const p: string =
          param instanceof Object || param instanceof Array
            ? JSON.stringify(param)
            : param + '';
        // 替换数据
        str = str.replace(new RegExp('\\{' + index + '\\}', 'img'), p);
      }
    }
    // 返回数据
    return str;
  }

  /**
   * 生成多个重复的字符串
   * @param str 需要重复的字符串
   * @param count 数量
   * @param separator 分隔符（默认空字符串：""）
   * @returns string 字符串
   */
  public static duplicate(
    str: string,
    count: number,
    separator: string = ''
  ): string {
    if (!separator) separator = '';
    const strs = [];
    for (let i = 0; i < count; i++) {
      strs[i] = str;
    }
    return strs.join(separator).toString();
  }

  /**
   * 数据排序处理（比较两个数据大小，返回排序顺序）；
   * 负值，如果所传递的第一个参数比第二个参数小；
   * 零，如果两个参数相等；
   * 正值，如果第一个参数比第二个参数大；
   * @param v1 第一个数值
   * @param v2 第二个数值
   * @returns number 比较结果：-1/0/1
   */
  public static compareSort(v1: any, v2: any): number {
    if (typeof v1 === 'number' && typeof v2 === 'number')
      return v1 === v2 ? 0 : v1 < v2 ? -1 : 1;
    if (!v1) {
      return !v2 ? 0 : -1;
    } else if (!v2) {
      return !v1 ? 0 : 1;
    } else {
      if (!v1) {
        v1 = '';
      } else {
        v1 += '';
      }
      if (!v2) {
        v2 = '';
      } else {
        v2 += '';
      }
      if (v1 === v2) return 0;
      v1 = v1.replace(/(\d+)/gm, (n1: string) => {
        return StringUtils.duplicate('0', 10 - n1.length) + n1;
      });
      v2 = v2.replace(/(\d+)/gm, (n2: string) => {
        return StringUtils.duplicate('0', 10 - n2.length) + n2;
      });
      return v1.localeCompare(v2);
    }
  }

  /**
   * 获取字符串字节长度
   * @param {string} str 字符串对象
   * @returns {number} 字节长度
   */
  public static getBytesLength(str: string): number {
    // 判断是否有效
    if (!str) return 0;
    let l = 0;
    // 计算长度
    for (let i = 0, c = str.length; i < c; i++) {
      l += str.charCodeAt(i) > 255 ? 2 : 1;
    }
    // 返回数据
    return l;
  }

  /**
   * 把字符串转换为正则表达式字符串
   * @param regStr 正则表达式字符串
   */
  public static fixRegExpString(regStr: string): string {
    // 判断是否有效
    if (!regStr || regStr.length === 0) return regStr;
    // 修正正则表达式关键字
    return regStr.replace(/([\$\(\)\[\]\{\}\*\+\-\?\\\^\|\.\\])/gm, ($0) => {
      return '\\' + $0;
    });
  }

  /**
   * 对象转url参数
   * @param obj
   * @returns {void[]}
   * @param prefix
   */
  public static queryStringify(obj: any, prefix = false) {
    return (
      (prefix ? '?' : '') +
      Object.keys(obj)
        .map(
          (key) =>
            `${key}=${(obj[key] += '')
              .replace(/%/g, '%25')
              .replace(/\+/g, '%2B')
              .replace(/ /g, '%20')
              .replace(/\//g, '%2F')
              .replace(/\?/g, '%3F')
              .replace(/\?/g, '%3F')
              .replace(/&/g, '%26')
              .replace(/\=/g, '%3D')
              .replace(/#/g, '%23')}`
        )
        .join('&')
    );
  }
}
