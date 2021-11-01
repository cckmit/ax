<template>
  <div
    class="ax_tree"
    :class="[
      {
        ax_tree_border: border,
      },
    ]"
  >
    <el-tree
      ref="elTree"
      node-key="id"
      :data="handler.root"
      :current-node-key="modelValue"
      :default-expand-all="defaultExpandAll"
      :props="propsConfig"
      :load="loadChildrenData"
      :lazy="loadChildren !== undefined"
      :default-expanded-keys="defaultExpandedIds"
      :show-checkbox="enableCheckbox"
      :default-checked-keys="defaultCheckedIds"
      :expand-on-click-node="false"
      empty-text
      highlight-current
      :check-strictly="checkStrictly"
      auto-expand-parent
      @current-change="handleCurrentChange"
      @node-click="handleNodeClick"
      @node-contextmenu="handleContextmenu"
      @check-change="handleCheckChange"
      @node-expand="handleExpand"
      @node-collapse="handleCollapse"
      @check="handleCheck"
    >
      <span
        slot-scope="{ data }"
        class="tree_node"
        :class="[getNodeValueByKey(data, 'nodeClassKey')]"
        @dblclick="handleDblClick(data)"
      >
        <slot :data="data">
          <i
            v-if="enableIcon && getNodeValueByKey(data, 'iconKey')"
            class="tree_icon"
            :class="getNodeValueByKey(data, 'iconKey')"
            :style="{
              color: getNodeValueByKey(data, 'iconColorKey', undefined),
            }"
          ></i>

          <span
            class="tree_image"
            v-if="
              enableIcon &&
              !getNodeValueByKey(data, 'iconKey') &&
              getNodeValueByKey(data, 'imageKey')
            "
          >
            <img :src="getNodeValueByKey(data, 'imageKey')" alt="" />
          </span>

          <slot name="prefix" :nodeData="data.data"></slot>

          <span
            class="tree_text"
            :style="{
              color: data.data[config ? config.disabledKey || '' : '']
                ? '#ccc'
                : '',
            }"
          >
            {{ data.text }}
          </span>

          <!--region 内容插槽-->
          <slot name="content" :nodeData="data.data"></slot>
          <!--endregion-->
        </slot>
      </span>
    </el-tree>
    <textarea
      v-if="debugMode"
      :value="debugModeInfo"
      class="tree_debug"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { AxDomUtils } from '@ax/app-core-framework';
import AxComCore from '@AxUI/ax-com-core';
import { TreeHandler } from './tree-core';
import { Tree } from 'element-ui';
import { TreeNode } from 'element-ui/types/tree';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change',
  },
  components: {
    [Tree.name]: Tree,
  },
})
export default class AxTree extends AxComCore.AxUIComponent {
  /**
   * 当前数据处理对象
   */
  public handler: TreeHandler = new TreeHandler();
  /**
   * 是否内部改变了数据标识
   */
  private innerChanges: boolean = false;
  /**
   * 是否需要滚动处理
   */
  private needScrollingKey: string | undefined;
  /**
   * 默认高亮项
   */
  private defaultHighlight: AxComCore.ITreeData | undefined;

  // 获取调试输出信息
  private get debugModeInfo() {
    if (!this.debugMode) return '';
    let res = 'TIME: ' + new Date().getTime() + '\r\n';
    res += 'ROOT: ' + '\r\n' + JSON.stringify(this.handler.root) + '\r\n\r\n';
    res += 'MAP: ' + '\r\n' + JSON.stringify(this.handler.map) + '\r\n\r\n';
    return res;
  }

  /**
   * 组件监测开始处理
   */
  private mounted() {
    // 判断是否已经初始化数据
    if (
      this.dataArray &&
      this.dataArray.length > 0 &&
      this.handler.map.size === 0
    ) {
      // 数据尚未初始化，执行初始化处理
      this.onPropDataChanges(this.dataArray, []);
    }
  }

  // -------------------------------- TODO: 目录数据属性 -----------------------------------

  /**
   * 获取当前目录的根数据数组
   */
  public get root(): AxComCore.ITreeMapData[] {
    return this.handler.root;
  }

  /**
   * 是否默认展开所有节点
   */
  @Prop({ default: false, type: Boolean })
  public defaultExpandAll?: boolean;

  /**
   * 是否调试模式，调试模式则输出当前数据
   */
  @Prop({ default: false, type: Boolean })
  public debugMode?: boolean;

  /**
   * 目录配置数据
   */
  @Prop({ default: undefined })
  public config?: AxComCore.ITreeConfig;

  /**
   * 目录数据数组
   */
  @Prop({ default: () => [] })
  public dataArray?: AxComCore.ITreeData[];

  /**
   * 是否默认展开的节点深度 (默认 1, 表示展开一级节点)
   */
  @Prop({ default: 1 })
  private defaultExpandDeep?: number;

  /**
   * 默认展开的目录节点数据标识数组
   */
  @Prop({ default: undefined })
  public defaultExpandedIds?: any[];

  /**
   * 是否启用节点图标
   */
  @Prop({ default: false, type: Boolean })
  public enableIcon?: boolean;

  /**
   * 是否启用目录复选框
   */
  @Prop({ default: false, type: Boolean })
  public enableCheckbox?: boolean;

  /**
   * 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false
   * @type {boolean}
   */
  @Prop({ default: false, type: Boolean })
  public checkStrictly?: boolean;

  /**
   * 是否显示边框
   */
  @Prop({ default: false, type: Boolean })
  public border?: boolean;

  /**
   * 启用复选框时初始化默认已选中的数据标识数组
   */
  @Prop({ default: undefined })
  public defaultCheckedIds?: any[];

  /**
   * 子节点数据加载通知方法（传入：(deep: number, data: AxComCore.ITreeData | null) , 表示当前目录层次深度（从 0 开始）和展开的节点数据对象（null 时表示读取根节点层次数据）；返回：异步数据结果处理对象）
   * @param deep 表示当前目录层次深度（从 0 开始）
   * @param data 展开的节点数据对象（null 时表示读取根节点层次数据）
   * @returns Promise<AxComCore.ITreeData[]> 异步返回加载结果数据
   */
  @Prop({ default: undefined })
  public loadChildren?: (
    deep: number,
    data: AxComCore.ITreeData | null
  ) => Promise<AxComCore.ITreeData[]>;

  /**
   * 加载子节点数据方法
   */
  private loadChildrenData(
    node: TreeNode<any, AxComCore.ITreeMapData>,
    resolve: (childrenData?: AxComCore.ITreeMapData[]) => void
  ) {
    // 判断是否有效
    if (!this.loadChildren || !node || node.loaded) return;
    // 判断是否需要加载子节点数据
    const needLoad =
      (node.level === 0 && (!node.data || (node.data as any).length === 0)) ||
      (node.level > 0 && !this.isEndNodeData(node.data.data));
    // 判断是否需要加载数据
    if (needLoad) {
      // 获取当前对象
      const self = this;
      // 获取数据处理
      this.loadChildren(
        node.level,
        node.level === 0 || !node.data ? null : node.data.data
      ).then((rets: AxComCore.ITreeData[]) => {
        // 增加数据到管理器
        const added = self.handler.addData(rets, node.data.id);
        // 获取完整的子数据
        const pdata = self.handler.getDataById(node.data.id);
        // 判断是否有效
        if (pdata && pdata.children) {
          // 回调数据
          resolve(pdata.children);
        } else {
          // 回调数据
          resolve(added);
        }
        // 获取默认高亮
        const hl = self.defaultHighlight;
        // 重置数据
        self.defaultHighlight = undefined;
        // 延时发布数据事件
        self.$nextTick(() => {
          // 判断是否需要高亮
          if (hl) self.setCurrentData(hl);
          // 发布事件
          self.$emit('loaded', node.data);
        });
        // 判断是否需要滚动处理
        if (!self.needScrollingKey) return;
        // 重新选中
        self.scrollToCurrentItem(self.needScrollingKey);
        // 复原数据
        self.needScrollingKey = undefined;
      });
    } else {
      // 直接返回数据
      resolve([]);
    }
  }

  /**
   * 判断是否是最终节点数据
   */
  private isEndNodeData(data: AxComCore.ITreeData): boolean {
    // 获取数值键
    const countKey = this.handler.configs.childCountKey;
    // 判断是否有效
    if (!countKey || !data) return true;
    // 判断是否存在数据及数量
    if (data && Object.prototype.hasOwnProperty.call(data, countKey)) {
      // 获取子节点数量
      const count = parseInt(data[countKey], 10);
      // 数量不存在或者无子节点数量
      return isNaN(count) || count <= 0;
    } else {
      // 无数据和数量，默认为最终节点
      return true;
    }
  }

  /**
   * 获取当前目录配置数据处理
   */
  private get propsConfig() {
    // 初始化设置
    const config = this.handler.initConfig(this.config);
    // 获取是否为叶子节点（最终节点）
    const isLeaf =
      this.loadChildren && config.childCountKey
        ? (
            data: AxComCore.ITreeMapData,
            node: TreeNode<any, AxComCore.ITreeMapData>
          ) => {
            // 判断是否存在子节点数据
            if (data && data.children && data.children.length > 0) return false;
            // 判断是否存在数据及数量
            return this.isEndNodeData(data.data);
          }
        : false;
    // 返回配置数据
    return {
      key: 'id',
      label: 'text',
      disabled: 'disabled',
      children: 'children',
      isLeaf,
    };
  }

  /**
   * 获取节点的某个字段
   * @param data
   * @param key
   * @param defValue
   * @returns {any}
   */
  private getNodeValueByKey(
    data: AxComCore.ITreeMapData,
    key: keyof AxComCore.ITreeConfig,
    defValue: any = ''
  ) {
    return data?.data ? data.data[this.handler.configs[key]] : defValue;
  }

  /**
   * 检测传入的数据变化
   */
  @Watch('dataArray')
  private onPropDataChanges(data: any, prev: any) {
    // 初始化数据处理
    this.handler.initData(data);
    // 延时展开节点
    this.$nextTick(() => {
      // 判断是否存在默认展开深度
      if (this.defaultExpandDeep && this.defaultExpandDeep > 0) {
        // 展开数据处理
        this.expandByDeep(this.handler.root, 0, this.defaultExpandDeep);
      }
      // 获取当前选中的数据
      let selected = this.getCurrentId();
      // 判断是否有效
      if (!selected && this.root.length > 0) selected = this.root[0].id;
      // 判断是否有效
      if (selected && this.handler.map.has(selected)) {
        // 指示选中数据
        this.setCurrentId(selected);
        // 发布事件
        this.$emit('change', selected, this.handler.getDataById(selected));
      }
    });
  }

  /**
   * 展开指定深度的节点
   */
  private expandByDeep(
    array: AxComCore.ITreeMapData[],
    deep: number,
    maxDeep: number
  ) {
    // 判断是否有效
    if (deep >= maxDeep) return;
    // 累计数量
    deep++;
    // 获取当前数组数据
    for (let i = 0, c = array.length; i < c; i++) {
      // 获取一个数据
      const data = array[i];
      // 展开数据
      this.expand(data.id);
      // 判断是否需要继续展开
      if (deep < maxDeep && data.children && data.children.length > 0) {
        // 继续展开下级节点
        this.expandByDeep(data.children, deep, maxDeep);
      }
    }
  }

  /**
   * 双击栏目打开或关闭节点
   */
  private handleDblClick(data: AxComCore.ITreeMapData, event: Event) {
    // 获取当前节点标识
    const id = data.id;
    // 判断是否已经打开
    if (this.isExpanded(id)) {
      // 合上节点
      this.collapse(id);
    } else {
      // 打开节点
      this.expand(id);
    }
  }

  // -------------------------------- TODO: 目录数据方法 -----------------------------------

  /**
   * 根据数据对象获取目录唯一数据序号（未找到则返回 undefined ）
   * @param data 当前数据对象
   * @returns string 唯一数据序号
   */
  public getDataId(data: AxComCore.ITreeData): string | undefined {
    return this.handler.getDataId(data);
  }

  /**
   * 通过数据标识获取目录数据对象（未找到则返回 undefined ）
   * @param id 数据唯一标识
   * @returns AxComCore.ITreeMapData 目录数据对象
   */
  public getDataById(id: string): AxComCore.ITreeMapData | undefined {
    return this.handler.getDataById(id);
  }

  /**
   * 获取所有数据标识的数组副本
   */
  public getIds(): string[] {
    const rets = [];
    for (const [key, value] of this.handler.map) {
      rets.push(key);
    }
    return rets;
  }

  /**
   * 增加数据到目录（若增加到根目录时设置 parentId 为 undefined）
   * @param data 需要增加到目录的数据或数组
   * @param parentId 父节点数据唯一标识（若增加到根目录时设置为 undefined）
   * @param position 数据在父节点下的所有子节点中的增加位置（默认：-1 表示增加到最后，0 表示增加到最前面）
   * @param highlight 是否高亮选中新增加的数据
   * @returns AxComCore.ITreeMapData[] 增加结果数据数组
   */
  public add(
    data: AxComCore.ITreeData | AxComCore.ITreeData[],
    parentId?: string,
    position: number = -1,
    highlight: boolean = false
  ): AxComCore.ITreeMapData[] {
    // 判断是否有效
    if (!data) return [];
    // 定义数据数组
    let array: AxComCore.ITreeData[];
    // 判断是否为数组
    if (data instanceof Array) {
      // 获取数组
      array = data;
    } else {
      // 转换为数组
      array = [data];
    }
    // 增加数据处理
    const mdata = this.handler.addData(array, parentId, position);
    // 判断是否存在数据
    if (mdata.length === 0) return mdata;
    // 指示内部改变了数据
    this.innerChanges = true;
    // 判断是否懒加载模式
    if (this.loadChildren) {
      // 懒加载模式，定义父节点集
      const pids = new Set();
      // 获取目录对象
      const etree = this.$refs.elTree as Tree;
      // 遍历获取父节点数据
      for (const item of mdata) {
        // 获一个数据
        const pid = item.pid;
        // 判断是否具有子节点数据
        if (!this.isEndNodeData(item.data)) {
          // 非最终节点，有子节点数据，直接调用增加方法
          etree.append(item, pid);
        }
        // 存储父节点
        if (!pids.has(pid) && !this.isExpanded(pid)) {
          // 记录数据
          pids.add(pid);
          // 展开父节点
          this.expand(pid);
        }
      }

      // 设置默认高亮
      if (highlight) this.defaultHighlight = mdata[0].data;
    }
    // 判断是否需要高亮显示
    if (highlight) {
      // 延后设置选中
      this.$nextTick(() => {
        // 高亮显示第一个数据
        this.setCurrentData(mdata[0].data);
      });
    }
    // 返回数据
    return mdata;
  }

  /**
   * 移除数据对象处理（将同时移除数据节点下的所有子节点，不存在则返回 undefined ）
   * @param data 需要移除的数据
   * @param autoHighlight 是否自动高亮合适的项目
   * @returns AxComCore.ITreeMapData 被移除的数据
   */
  public remove(
    data: AxComCore.ITreeData,
    autoHighlight: boolean = false
  ): AxComCore.ITreeMapData | undefined {
    // 判断是否有效
    if (!data) return undefined;
    // 获取键数据
    const id = this.handler.getDataId(data);
    // 判断是否存在
    if (!id) return undefined;
    // 移除数据
    return this.removeById(id, autoHighlight);
  }

  /**
   * 根据数据唯一标识移除目录节点及数据处理（不存在则返回 undefined)
   * @param id 数据唯一标识
   * @param autoHighlight 是否自动高亮合适的项目
   * @returns AxComCore.ITreeMapData 被移除的数据
   */
  public removeById(
    id: string,
    autoHighlight: boolean = false
  ): AxComCore.ITreeMapData | undefined {
    // 转换未字符串
    id += '';
    // 指示内部改变了数据
    this.innerChanges = true;
    // 移除数据
    const removed = this.handler.remove(id);
    // 判断是否有效
    if (!removed) return undefined;
    // 移除目录数据
    (this.$refs.elTree as Tree).remove(id);
    // 判断是否需要高亮处理
    if (autoHighlight) {
      // 延后设置选中
      this.$nextTick(() => {
        // 设置默认选中项
        this.setCurrentId(removed.selectId);
      });
    }
    // 返回移除的数据
    return removed.data;
  }

  /**
   * 更新数据到目录节点处理
   * @param data 需要更新的数据对象
   */
  public update(data: AxComCore.ITreeData): void {
    // 判断是否有效
    if (!data) return;
    // 指示内部改变了数据
    this.innerChanges = true;
    // 更新数据
    this.handler.updateData(data);
  }

  public reset(data?: AxComCore.ITreeData[]): void {
    // 判断是否有效
    if (!data) return;
    this.handler.initData(data);
  }

  /**
   * 更新数据到目录节点处理
   * @param id 数据唯一序号
   * @param data 需要更新的数据对象
   */
  public updateById(id: string, data: AxComCore.ITreeData): void {
    // 判断是否有效
    if (!data) return;
    // 指示内部改变了数据
    this.innerChanges = true;
    // 更新数据
    this.handler.updateData(data, id);
  }

  // -------------------------------- TODO: 目录操作方法 -----------------------------------

  /**
   * 获取当前被选中的数据数组处理（仅当显示了 checkbox 复选框后有效）
   * @param endNodeOnly 是否仅获取最终节点选中状态（可选，默认：true）
   * @returns AxComCore.ITreeData[] 被选中的数据数组（无效则返回 undefined ）
   */
  public getCheckedData(
    endNodeOnly: boolean = true
  ): AxComCore.ITreeData[] | undefined {
    // 获取选中数据键
    const ids = this.getCheckedIds(endNodeOnly);
    // 判断是否有效
    if (!ids) return undefined;
    // 生成返回数据数组
    const rets: AxComCore.ITreeData[] = [];
    // 遍历获取数据
    for (const id of ids) {
      // 获取数据对象
      const data = this.handler.getDataById(id);
      // 判断是否有效
      if (data) rets.push(data.data);
    }
    return rets;
  }

  /**
   * 获取当前被选中的数据键数组处理（仅当显示了 checkbox 复选框后有效）
   * @param endNodeOnly 是否仅获取最终节点选中状态（可选，默认：true）
   * @returns string[] 被选中的数据键数组（无效则返回 undefined ）
   */
  public getCheckedIds(endNodeOnly: boolean = true): string[] | undefined {
    return (this.$refs.elTree as Tree).getCheckedKeys(endNodeOnly);
  }

  /**
   * 设置当前被选中的数据键数组处理（仅当显示了 checkbox 复选框后有效）
   * @param ids 需要选中的节点标识数组
   */
  public setCheckedData(data: AxComCore.ITreeData[]): void {
    // 判断是否有效
    if (!data || data.length === 0) return;
    // 定义序号数组
    const ids: string[] = [];
    // 遍历数据生成序号
    for (const value of data) {
      // 判断是否有效
      if (value) {
        // 获取序号
        const id = this.handler.getDataId(value);
        // 增加到数组
        if (id) ids.push(id);
      }
    }
    (this.$refs.elTree as Tree).setCheckedKeys(ids, false);
  }

  /**
   * 设置当前被选中的数据键数组处理（仅当显示了 checkbox 复选框后有效）
   * @param ids 需要选中的节点标识数组
   */
  public setCheckedIds(ids: string[]): void {
    (this.$refs.elTree as Tree).setCheckedKeys(ids, false);
  }

  /**
   * 设置单个节点数据复选状态（仅当显示了 checkbox 复选框后有效）
   * @param idOrData 当前数据或数据键字符串
   * @param checked 是否选中
   */
  public setChecked(
    idOrData: string | AxComCore.ITreeData,
    checked: boolean
  ): void {
    // 定义标识
    let id;
    // 判断是否是字符串
    if (typeof idOrData === 'string') {
      // 设置标识
      id = idOrData;
    } else {
      // 根据对象获取标识
      id = this.getDataId(idOrData);
    }
    // 判断是否有效
    if (!id) return;
    // 选中数据处理
    (this.$refs.elTree as Tree).setChecked(id, checked, true);
  }

  /**
   * 获取当前被选中节点的唯一标识
   */
  public getCurrentId(): string | undefined {
    return (this.$refs.elTree as Tree).getCurrentKey();
  }

  /**
   * 获取当前选中的节点数据对象
   */
  public getCurrentData(): AxComCore.ITreeMapData | undefined {
    const id = this.getCurrentId();
    if (!id) return undefined;
    return this.handler.getDataById(id);
  }

  /**
   * 设置某个节点的当前选中状态（高亮节点）
   * @param id 当前数据键
   * @param scrolling 是否滚动到指定项
   */
  public setCurrentId(id: string | undefined, scrolling: boolean = true) {
    // 判断是否存在节点
    if (id) {
      // 获取父节点
      const parent = this.handler.getParent(id);
      // 判断是否有效，有效则展开父节点
      if (parent) this.expand(parent.id);
    }
    // 获取目录对象
    const tree = this.$refs.elTree as Tree;
    // 设置节点选中状态
    tree.setCurrentKey(id);
    // 发布数据事件
    this.$emit(
      AxComCore.TreeEventType.CHANGE,
      id,
      id ? this.handler.getDataById(id) : null
    );
    // 判断是否需要滚动处理
    if (!scrolling || !id) return;
    // 临时保存当前节点标识
    this.needScrollingKey = id;
    // 判断是否已经在目录内存在
    if (!this.handler.map.has(id)) return;
    // 滚动到当前节点处理
    this.scrollToCurrentItem(id);
  }

  /**
   * 滚动到当前选中的节点处理
   */
  private scrollToCurrentItem(id: string) {
    // 获取目录对象
    const tree = this.$refs.elTree as Tree;
    // 设置节点选中状态
    tree.setCurrentKey(id);
    // 获取当前对象
    const self = this;
    // 延后处理
    window.setTimeout(() => {
      // 获取当前对象根元素
      const roote = this.$el as HTMLElement;
      // 判断是否滚动到当前节点
      if (!roote) return;
      // 查找当前选中的节点
      let el = tree.$el.querySelector('div.is-current') as HTMLElement;
      // 判断是否有效
      if (!el) return;
      // 判断是否是节点组
      if (
        el.getAttribute('role') === 'treeitem' &&
        el.childNodes &&
        el.childNodes.length > 0
      ) {
        // 节点组，获取第一个节点项
        el = el.firstElementChild as HTMLElement;
      }
      // 获取对象在目录内的位置
      const pos = AxDomUtils.getDomPosition(el, roote);
      // 获取目录有效高度
      const treeH = roote.clientHeight;
      // 设置滚动条位置
      roote.scrollTop = Math.max(
        0,
        Math.floor(pos.top - treeH / 2 + el.offsetHeight / 2)
      );
      // 设置成功,清理标识
      self.needScrollingKey = undefined;
    }, 100);
  }

  /**
   * 设置某个节点的当前选中状态
   * @param data 当前数据
   */
  public setCurrentData(data: AxComCore.ITreeData) {
    if (!data) return;
    const id = this.getDataId(data);
    if (!id) return;
    (this.$refs.elTree as Tree).setCurrentKey(id);
  }

  /**
   * 判断节点是否已经被打开
   * @param id 节点数据键
   * @returns boolean 节点是否已经被打开
   */
  public isExpanded(id: string): boolean {
    // 获取目录节点对象
    const node = (this.$refs.elTree as Tree).getNode(id);
    // 判断是否有效
    if (!node) return false;
    // 返回是否被打开
    return node.expanded;
  }

  /**
   * 根据节点键展开目录节点处理
   * @param id 需要展开的数据键
   */
  public expand(id: string) {
    // 获取目录节点对象
    const node: any = (this.$refs.elTree as Tree).getNode(id);
    // 判断是否有效
    if (!node) return;
    // 判断是否存在方法
    if (node.expand) {
      // 展开数据节点
      node.expand(null, true);
    } else {
      // 直接设置属性
      node.expanded = true;
    }
  }

  /**
   * 根据节点数据展开目录节点
   * @param data 需展开的节点数据对象
   */
  public expandData(data: AxComCore.ITreeData): void {
    if (!data) return;
    const id = this.getDataId(data);
    if (!id) return;
    this.expand(id);
  }

  // 传入id,懒加载树节点
  public expandLink(ids: string[], fn?: any): void {
    if (ids && ids.length > 0) {
      let id = ids.shift();
      if (id) {
        // 递归判断当前节点是否加载过
        let isload: boolean = this.isNodeLoaded(id);
        while (isload) {
          id = ids.shift();
          if (id) {
            isload = this.isNodeLoaded(id);
          } else {
            isload = false;
            if (fn && typeof fn === 'function') {
              fn();
            }
          }
        }
        // 动态加载
        if (id) {
          const load = (data: AxComCore.ITreeMapData) => {
            id = ids.shift();
            if (id) {
              this.$once('loaded', load);
              this.expand(id);
            } else {
              if (fn && typeof fn === 'function') {
                fn();
              }
            }
          };
          this.$once('loaded', load);
          this.expand(id);
          const nodedata = this.getDataById(id);
          if (
            this.isNodeLoaded(id) &&
            nodedata &&
            this.isEndNodeData(nodedata)
          ) {
            if (fn && typeof fn === 'function') {
              fn();
            }
          }
        }
      }
    } else {
      if (fn && typeof fn === 'function') {
        fn();
      }
    }
  }

  // 节点是否加载
  public isNodeLoaded(id: string) {
    const node = (this.$refs.elTree as Tree).getNode(id);
    if (!node) return false;
    return node.loaded;
  }

  // 获取父节点值
  public getAllParentIds(id: string) {
    const res: string[] = [];
    if (id) {
      res.push(id);
      let parent = this.handler.getParent(id);
      while (parent) {
        res.push(parent.data.id);
        parent = this.handler.getParent(parent.data.id);
      }
    }
    return res;
  }

  /**
   * 获取所有父节点AxComCore.ITreeMapData对象
   * @param id
   * @returns {AxComCore.ITreeMapData[]}
   * @param self 是否包括自己
   */
  public getAllParentData(
    id: string,
    self: boolean = true
  ): AxComCore.ITreeMapData[] {
    const rs: AxComCore.ITreeMapData[] = [];
    if (id) {
      const current:
        | AxComCore.ITreeMapData
        | undefined = this.handler.getDataById(id);
      if (self && current) {
        rs.push(current);
      }
      let parent: AxComCore.ITreeMapData | undefined = this.handler.getParent(
        id
      );
      while (parent) {
        rs.unshift(parent);
        parent = this.handler.getParent(parent.data.id);
      }
    }
    return rs;
  }

  /**res
   * 合上节点处理
   * @param id 需要合上的数据键
   */
  public collapse(id: string) {
    // 获取目录节点对象
    const node: any = (this.$refs.elTree as Tree).getNode(id);
    // 判断是否有效
    if (!node) return;
    // 判断是否存在方法
    if (node.collapse) {
      // 关闭数据节点
      node.collapse();
    } else {
      // 直接设置属性
      node.expanded = false;
    }
  }

  /**
   * 合上节点处理
   * @param data 需要合上的节点对象
   */
  public collapseData(data: AxComCore.ITreeData) {
    if (!data) return;
    const id = this.getDataId(data);
    if (!id) return;
    this.collapse(id);
  }

  /**
   * 获取焦点方法
   */
  public focus(): AxTree {
    // 获取目录对象
    const tree = this.$refs.elTree as Tree;
    // 判断是否有效
    if (tree && tree.$el) {
      // 设置焦点处理
      (tree.$el as HTMLElement).focus();
    }
    // 返回当前对象
    return this;
  }

  // -------------------------------- TODO: 发布目录事件 -----------------------------------

  /**
   * 处理当前节点变化事件
   */
  private handleCurrentChange(
    data: AxComCore.ITreeMapData,
    node: TreeNode<any, AxComCore.ITreeMapData>
  ) {
    // 判断是否有效
    if (!data) return;
    // 发布数据事件
    this.$emit(AxComCore.TreeEventType.CHANGE, data.id, data);
  }

  /**
   * 节点点击事件
   */
  private handleNodeClick(data: AxComCore.ITreeMapData) {
    if (!data) return;
    this.$emit(AxComCore.TreeEventType.NODE_CLICK, data);
  }

  /**
   * 显示菜单事件
   */
  private handleContextmenu(event: Event, data: AxComCore.ITreeMapData) {
    if (!data) return;
    this.$emit(AxComCore.TreeEventType.NODE_CONTEXTMENU, event, data);
  }

  /**
   * 勾选节点事件（与 CHECK 事件不同，外部设置选择改变后都会触发此事件）
   */
  private handleCheckChange(data: AxComCore.ITreeMapData, checked: boolean) {
    if (!data) return;
    this.$emit(AxComCore.TreeEventType.CHECK_CHANGE, data, checked);
  }

  /**
   * 当复选框被点击的时候触发（与 CHECK_CHANGE 不同，此事件当勾选框被选中时触发）
   */
  private handleCheck(
    data: AxComCore.ITreeMapData,
    checkedKeyNode: AxComCore.ITreeCheckedKeyNode
  ) {
    if (!data) return;
    this.$emit(AxComCore.TreeEventType.CHECK, data, checkedKeyNode);
  }

  /**
   * 展开节点事件
   */
  private handleExpand(data: AxComCore.ITreeMapData) {
    if (!data) return;
    this.$emit(AxComCore.TreeEventType.NODE_EXPAND, data);
  }

  /**
   * 关闭节点事件
   */
  private handleCollapse(data: AxComCore.ITreeMapData) {
    if (!data) return;
    this.$emit(AxComCore.TreeEventType.NODE_COLLAPSE, data);
  }
}
</script>
