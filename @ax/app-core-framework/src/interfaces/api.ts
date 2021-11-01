// api接口用到的定义

/**
 * 表格列及数量统计数据
 */
export interface GridCount {
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
export type GridList = any[][];

/**
 * 键值对对象
 */
export interface KV {
  /**
   * 键 (必须)
   */
  k: string;
  /**
   * 值
   */
  v?: any; // "ASC"
}

/**
 * 排序数据类型
 */
export type Orders = KV[] | null;
