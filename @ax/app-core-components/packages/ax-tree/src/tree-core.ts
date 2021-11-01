import AxComCore from '@AxUI/ax-com-core';
import ITreeConfig = AxComCore.ITreeConfig;

/**
 * 目录数据处理类
 */
export class TreeHandler {
  /**
   * 属性字段配置数据
   */
  private config: Required<ITreeConfig> = {
    idKey: 'id',
    pidKey: 'pid',
    iconKey: 'icon',
    iconColorKey: 'iconColor',
    imageKey: 'image',
    nodeClassKey: 'nodeClass',
    textKey: 'text',
    disabledKey: 'disabled',
    childCountKey: 'count',
    childrenKey: 'children',
  };
  // 当前数据默认序号
  private currentMaxId: number = 0;
  // 目录数据集合
  private dataMap: Map<string, AxComCore.ITreeMapData> = new Map();
  // 目录跟节点数据数组
  private rootArray: AxComCore.ITreeMapData[] = [];

  // --------------------------------- 对外数据方法 ---------------------------------

  /**
   * 初始化配置处理
   * @param conf 当前配置对象
   */
  public initConfig(conf?: AxComCore.ITreeConfig): AxComCore.ITreeConfig {
    // 判断是否有效
    if (!conf) return this.config;
    // 设置数据属性
    Object.keys(this.config).forEach((key) => {
      const confElement = conf[key as keyof ITreeConfig];
      if (confElement) {
        this.config[key as keyof ITreeConfig] = confElement;
      }
    });
    // 判断是否存在数据
    if (this.dataMap.size > 0) {
      // 遍历数据，转换为数组
      for (const [key, value] of this.dataMap) {
        // 更新配置数据
        this.updateMapData(value);
      }
    }
    // 返回数据对象
    return this.config;
  }

  /**
   * 当前根数据数组
   */
  public get root(): AxComCore.ITreeMapData[] {
    return this.rootArray;
  }

  /**
   * 当前目录数据集合
   */
  public get map(): Map<string, AxComCore.ITreeMapData> {
    return this.dataMap;
  }

  /**
   * 获取当前配置数据
   */
  public get configs() {
    return this.config;
  }

  /**
   * 根据数据对象获取目录唯一数据序号（未找到则返回 undefined ）
   * @param data 当前数据对象
   * @returns string 唯一数据序号
   */
  public getDataId(data: AxComCore.ITreeData): string | undefined {
    // 判断是否有效
    if (!data) return undefined;
    // 获取数据序号
    const id = data[this.config.idKey];
    // 判断是否有效
    if (id || id === 0) return '' + id;
    // 未找到，遍历集合查找数据
    for (const [key, value] of this.dataMap) {
      // 判断是否与数据相同
      if (value.data === data) return key;
    }
    // 默认返回未找到
    return undefined;
  }

  /**
   * 通过数据标识获取目录数据对象（未找到则返回 undefined ）
   * @param id 数据唯一标识
   * @returns TreeMapData 目录数据对象
   */
  public getDataById(id: string): AxComCore.ITreeMapData | undefined {
    return this.dataMap.get(id + '');
  }

  /**
   * 获取指定标识的父节点数据对象（未找到则返回 undefined ）
   * @param id  数据唯一标识
   * @returns TreeMapData | undefined 父节点数据对象
   */
  public getParent(id: string): AxComCore.ITreeMapData | undefined {
    const data = this.dataMap.get(id + '');
    if (!data) return undefined;
    const pdata = this.dataMap.get(data.pid);
    return pdata;
  }

  /**
   * 初始化目录数据处理
   * @param data 当前目录数据数组
   */
  public initData(data?: AxComCore.ITreeData[]): void {
    // 重置数组
    this.rootArray = [];
    // 重置集合
    this.dataMap.clear();
    // 增加数据处理
    this.addData(data);
  }

  /**
   * 增加数据到目录
   * @param data 需要增加的数据数组
   * @param [defaultPid] 默认父节点标识(设置为 undefined 表示不强制设置)
   * @param [position] 数据在父节点下的所有子节点中的增加位置（默认：-1 表示增加到最后，0 表示增加到最前面）
   * @returns TreeMapData[] 数据结果数组
   */
  public addData(
    data?: AxComCore.ITreeData[],
    defaultPid?: string,
    position: number = -1
  ): AxComCore.ITreeMapData[] {
    // 判断是否有效
    if (!data || data.length === 0) return [];
    // 判断是否存在父节点序号
    if (!defaultPid || !this.dataMap.has(defaultPid)) defaultPid = undefined;
    // 创建数据集数组
    const mapArray: AxComCore.ITreeMapData[] = [];
    // 把数据填充到集合并输出有效的数据数组
    this.createMapDataArray(mapArray, data, defaultPid);
    // 分析数据并把子节点增加到父节点的子数组内
    this.setDataRelation(mapArray, position);
    // 返回数据
    return mapArray;
  }

  /**
   * 移除指定节点数据
   * @param id 数据唯一标识
   * @returns 被移除的数据信息
   */
  public remove(
    id: string
  ): { data: AxComCore.ITreeMapData; selectId: string } | undefined {
    // 判断是否有效
    if (!id) return undefined;
    // 获取键数据
    const data = this.dataMap.get(id);
    // 判断是否存在数据
    if (!data) return undefined;

    // 从集合移除数据（包括移除子节点数据）
    this.removeMapData(data);

    // 定义父节点的子数据数组
    let children;
    // 判断是否有效
    if (data.pid) {
      // 获取父节点
      const parent = this.dataMap.get(data.pid);
      // 获取父子节点数组
      children = parent ? parent.children : undefined;
    } else {
      // 以根目录数据作为数组
      children = this.rootArray;
    }
    // 定义默认选中项
    let selectId: string | undefined;
    // 判断是否存在子数组
    if (children && children.length > 0) {
      // 获取子节点所在位置
      const pos = children.indexOf(data);
      // 判断是否有效
      if (pos >= 0) {
        // 从父节点的子数组内移除
        children.splice(pos, 1);
        // 判断是否存在多个数据
        if (children.length > 0) {
          // 获取默认选中数据
          selectId = children[Math.min(pos, children.length - 1)].id;
        }
      }
    }
    // 判断是否有效
    if (!selectId) {
      // 设置父节点为选中项
      selectId = data.pid;
      // 判断是否存在数据
      if (!selectId && this.rootArray.length > 0) {
        // 设置第一项
        selectId = this.rootArray[0].id;
      }
    }
    // 返回移除的数据
    return { data, selectId };
  }

  /**
   * 更新数据到目录节点处理
   * @param data 数据对象
   * @param [id] 指定的序号
   */
  public updateData(data: AxComCore.ITreeData, id?: string): void {
    // 判断是否存在数据
    if (!data) return;
    // 判断是否指定了序号
    if (!id) id = this.getDataId(data);
    // 判断是否有效
    if (!id) return;
    // 获取之前的数据对象
    const prev = this.dataMap.get(id);
    // 判断是否有效
    if (!prev) return;
    // 更新数据
    prev.text = data[this.config.textKey] || prev.text;
    // prev.data = data;
    // 修改后: 把新的字段覆盖原来的字段
    prev.data = data;
  }

  // --------------------------------- 内部数据方法 ---------------------------------

  /**
   * 获取下一个唯一序号处理
   * @returns  唯一序号值
   */
  private nextId(id: any): string {
    // 判断是否有效
    if (id || id === 0) return '' + id;
    // 循环生成唯一标识
    do {
      // 累加数据
      this.currentMaxId++;
      // 返回结果
      id = '$ID' + this.currentMaxId;
      // 判断是否已经存在相同的标识
    } while (this.dataMap.has(id));
    // 返回数据
    return id;
  }

  /**
   * 分析数据并把子节点增加到父节点的子数组内
   * @param data  当前目录数据数组
   * @param [position] 在数组内的位置当前位置
   */
  private setDataRelation(
    data: AxComCore.ITreeMapData[],
    position: number = -1
  ) {
    // 判断增加位置
    if (position <= 0) {
      // 增加到最后，按原有顺序增加
      for (const value of data) {
        // 把数据增加到其父节点下
        this.addToParent(value, position);
      }
    } else {
      // 已经指定了位置，按倒序增加
      for (let i = data.length - 1; i >= 0; i--) {
        // 把数据增加到其父节点下
        this.addToParent(data[i], position);
      }
    }
  }

  /**
   * 把数据增加到其父节点下
   * @param data 需要增加的数据
   * @param position 在数组内增加到的位置
   */
  private addToParent(data: AxComCore.ITreeMapData, position: number) {
    // 获取父数据标识
    const pid = data.pid;
    // 定义子节点数组
    let children;
    // 判断是否为根目录节点或者未找到父节点对象，增加到根目录
    if (pid === undefined || !this.dataMap.has(pid)) {
      // 作为根节点数据
      children = this.rootArray;
    } else {
      // 非根节点数据，获取父节点数据对象
      const parent = this.dataMap.get(pid);
      // 判断是否有效
      if (!parent) return;
      // 获取父节点的子数组
      children = parent.children;
    }
    // 判断是否有效
    if (!children) return;
    // 判断增加到的位置
    if (position < 0 || position >= children.length) {
      // 默认增加到最后
      children.push(data);
    } else {
      // 增加到指定位置
      children.splice(position, 0, data);
    }
  }

  /**
   * 创建数据集数组
   * @param data 目录数据数组
   * @param defaultPid 默认父节点标识(设置为 undefined 表示不强制设置)
   */
  private createMapDataArray(
    output: AxComCore.ITreeMapData[],
    data: AxComCore.ITreeData[],
    defaultPid: string | undefined
  ): void {
    // 判断是否有效
    if (!data || data.length === 0) return;
    // 遍历处理数据
    for (const value of data) {
      // 创建一个集数据
      const mapdata = this.createMapData(value, defaultPid);
      // 判断是否有效
      if (!mapdata) continue;
      // 增加到数组
      output.push(mapdata);
      // 获取子数据数组
      const children = value[this.config.childrenKey];
      // 判断是否存在子数据数组
      if (children && children.length > 0 && children instanceof Array) {
        // 存在子节点数据，生成子节点数据集合
        this.createMapDataArray(output, children, mapdata.id);
      }
    }
  }

  /**
   * 创建目录集数据对象处理
   * @param data 当前目录数据
   * @param defaultPid 默认父节点标识(设置为 undefined 表示不强制设置)
   * @returns TreeMapData 目录集数据
   */
  private createMapData(
    data: AxComCore.ITreeData,
    defaultPid: string | undefined
  ): AxComCore.ITreeMapData | null {
    // 判断是否有效
    if (!data) return null;

    // 获取当前序号
    const id = this.nextId(data[this.config.idKey]);
    // 获取父节点序号
    let pid = defaultPid === undefined ? data[this.config.pidKey] : defaultPid;
    // 修正为默认父节点数据
    if (!pid) {
      pid = undefined;
    } else {
      // 转换为字符串
      pid += '';
    }
    // 获取文本标签
    const text = data[this.config.textKey];
    const disabled = data[this.config.disabledKey];

    // 判断是否在集合内存在
    if (this.dataMap.has(id)) {
      // 已存在数据，获取之前的数据对象
      const prev = this.dataMap.get(id);
      // 判断是否有效
      if (prev) {
        // 先从原有的父节点内移除
        this.removeFromParent(prev);
        // 更新当前节点数据
        prev.pid = pid;
        prev.text = text;
        prev.disabled = disabled;
        prev.data = data;
        // 返回数据对象
        return prev;
      }
    }
    // 不存在则创建对象
    const mapdata: AxComCore.ITreeMapData = {
      id,
      pid,
      text,
      disabled,
      data,
      children: [],
    };
    // 把数据增加到集合
    this.dataMap.set(id, mapdata);
    // 返回数据对象
    return mapdata;
  }

  /**
   * 从数据的父节点下的子数据数组内移除数据
   * @param data 当前数据对象
   */
  private removeFromParent(data: AxComCore.ITreeMapData) {
    // 定义父节点的子节点数组
    let children;
    // 判断是否为根节点数据
    if (!data.pid) {
      // 获取根节点数组
      children = this.rootArray;
    } else {
      // 获取原父节点对象
      const parent = this.dataMap.get(data.pid);
      // 判断是否有效
      children = parent ? parent.children : undefined;
    }
    // 判断是否有效
    if (children && children.length > 0) {
      // 查找位置
      const pos = children.indexOf(data);
      // 判断是否有效
      if (pos >= 0) {
        // 从数组移除
        children.splice(pos, 1);
      }
    }
  }

  /**
   * 从集合内移除数据（同时移除子节点数据）
   */
  private removeMapData(data: AxComCore.ITreeMapData) {
    // 判断是否存在数据
    if (!data) return;
    // 从集合移除数据
    this.dataMap.delete(data.id);
    // 遍历数据子节点
    const children = data.children;
    // 判断是否有效
    if (children && children.length > 0) {
      // 遍历子节点移除数据
      for (const cvalue of children) {
        // 移除数据
        this.removeMapData(cvalue);
      }
    }
  }

  /**
   * 更新目录节点数据处理
   * @param data 目录数据对象
   */
  private updateMapData(data: AxComCore.ITreeMapData): void {
    // 判断是否存在数据
    if (!data) return;
    // 更新数据处理
    data.text = data.data[this.config.textKey];
  }
}
