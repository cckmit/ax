export class TableHandler {
  // 目录数据集合
  public dataMap: Map<string, any> = new Map();

  // 表头字段
  private totalColumn: string[] = [];

  // 设置列
  public setColumn(val: string[]) {
    this.totalColumn = val;
  }

  /**
   * 设置 dataMap,每一个 Map 集合的值,都是对象
   * @param data 原始数据
   * @param attrList 所有属性的数组集合
   * @param attr 指定哪一个属性作为 Map 集合的 key 值
   */
  public createMapData(data: any, attrList: string[], attr: string = 'id') {
    // 前期判断清理
    if (!data) {
      return;
    }
    this.dataMap.clear();
    // 逻辑
    if (data[0] instanceof Array) {
      // 返回的是 id 字段的 index 索引
      const index = attrList.findIndex((item: any) => attr === item);
      for (const value of data) {
        // 数组转对象
        const tempObj: any = {};
        for (let jndex = 0; jndex < attrList.length; jndex++) {
          const jtem = attrList[jndex];
          tempObj[jtem] = value[jndex];
        }
        tempObj.data = value;
        // 老子要的是 id 作为 key
        this.dataMap.set(value[index], tempObj);
      }
    } else if (data[0] instanceof Object) {
      // 如果当前行的数据是对象,
      // 返回当前行的 id 属性的值
      for (const obj of data) {
        // 老子要的是 id 作为 key
        this.dataMap.set(obj[attr], {
          ...obj,
          data: obj,
        });
      }
    }
  }

  /**
   * 获取正确的属性,用于拿到正确的界面显示内容
   * @param attr 需要的属性
   * @param value 单个map的值
   */
  public getValue(attr: string, value: any) {
    // 判断当前行的数据是数组
    if (value instanceof Array) {
      // 返回的是这个字段的 index 索引
      return value[this.totalColumn.findIndex((item: any) => item === attr)];
    } else if (value instanceof Object) {
      // 如果当前行的数据是对象,就返回 参数id这个字段
      return value[attr];
    }
  }

  /**
   * 设置一条数据,无论是增加还是修改
   * @param key 键
   * @param value 值
   */
  public setData(key: any, value: any) {
    // Map 集合添加数据
    let final: object = {};
    if (value instanceof Array) {
      if (!this.totalColumn) {
        return;
      }
      // 返回的是 id 字段的 index 索引
      const tempObj: any = {};
      for (let jndex = 0; jndex < this.totalColumn.length; jndex++) {
        const jtem = this.totalColumn[jndex];
        tempObj[jtem] = value[jndex];
      }
      final = {
        ...tempObj,
        data: value,
      };
      this.dataMap.set(key, final);
    } else if (value instanceof Object) {
      // 如果当前行的数据是对象,
      // 返回当前行的 id 属性的值
      final = {
        ...value,
        data: value,
      };
      this.dataMap.set(key, final);
    }
    return final;
  }
}
