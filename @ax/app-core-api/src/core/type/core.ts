/**
 * 国际化名称Map
 */
export type LocaleMap = {
  [key: string]: string;
};

/**
 * 表格结果数据(二维数组,第一维表示行, 第二维表示列数据, 数据顺序与 GridCount 统计结果的列数组数据一致)
 */
export type GridList = any[][];

/**
 * 传入参数
 * 对应 'com.nncs.core.platfrom.data.GridCount'
 */
export type GridCount = {
  // 显示的列名称数组
  cols?: string[];
  // 符合查询条件的数据总条数
  count?: number;
};

/**
 * 传入参数
 * 对应 'com.nncs.core.platfrom.data.GridData'
 */
export type GridData = {
  // 表格行列数据数组（二维数组）
  rows?: any[][];
  // 编辑状态是否解锁
  edited?: boolean;
};

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
