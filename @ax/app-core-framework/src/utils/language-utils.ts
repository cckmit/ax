import { GridList } from '@/interfaces';

// 国际化工具类
export default class LanguageUtils {
  protected constructor() {}

  // 特殊表头和数据用到的正则匹配符
  public static reg: RegExp = /^\$\S+?:/;

  /**
   * 是否是国际化表头
   * @param col
   * @returns {boolean}
   */
  public static isCol(col: string): boolean {
    return LanguageUtils.reg.test(col);
  }

  /**
   * 处理国际化时使用的特殊表头
   * @param cols 特殊表头： '$name:{en_US,zh_CN}'
   * @returns {string[]}
   */
  public static flatTableCols(cols: string[]): string[] {
    // 返回结果
    const rs: string[] = [];
    // 遍历表头
    cols.forEach((col) => {
      // 测试是否符合条件
      if (this.reg.test(col)) {
        // 获取key的match
        const match = col.match(this.reg);
        // 开始解析
        if (match?.length) {
          const key = match[0];
          // 获取表头内容 JSON格式
          const langCols: string[] = JSON.parse(col.replace(this.reg, ''));
          // 遍历列表并添加表头
          langCols.forEach((langCol) => {
            // 添加转换后的表头到表头数据中
            rs.push(`${key}${langCol}`);
          });
        }
      } else {
        // 不符合的直接拼接上
        rs.push(col);
      }
    });
    // 返回处理后的表头
    return rs;
  }

  /**
   * 处理国际化时使用的特殊数据
   * @param data
   * @returns {string[]}
   */
  public static flatTableData(data: GridList): GridList {
    // 返回处理后的表头
    return data.map((row) => {
      // 重组后的行
      const rs: any[] = [];
      // 遍历数据
      row.forEach((data) => {
        // 测试是否符合条件
        if (typeof data === 'string' && this.reg.test(data)) {
          // 解析出来的数据列表
          const dataList: any[] = JSON.parse(data.replace(this.reg, ''));
          // 遍历列表并添加数据
          dataList.forEach((item) => {
            // 添加转换后的表头到表头数据中
            rs.push(item);
          });
        } else {
          // 不符合的直接拼接上
          rs.push(data);
        }
      });
      return rs;
    });
  }
}
