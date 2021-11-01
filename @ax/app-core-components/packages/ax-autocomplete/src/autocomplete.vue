<template>
  <div
    class="ax_select"
    :class="[
      { validate_passed: validatePassed === true },
      { validate_failed: validatePassed === false },
      { button_mode: type === 'button' },
    ]"
    @keydown.esc="close"
  >
    <el-autocomplete
      v-if="type === 'select'"
      ref="el-autocomplete"
      v-model="modelValue"
      :name="name"
      :disabled="disabled"
      :fetch-suggestions="querySearch"
      :placeholder="placeholder"
      :clearable="clearable"
      label="text"
      value-key="key"
      :popper-class="popperClass"
      class="dropdown_input"
      @blur="handleBlur"
    >
      <!-- 自定义插槽 -->
      <template #prepend>
        <!-- 左边外侧 -->
        <slot name="outer-left"></slot>
      </template>
      <template #prefix>
        <!-- 左边内侧 -->
        <slot name="inner-left"></slot>
      </template>
      <template #suffix>
        <!-- 右边内侧 -->
        <slot name="inner-right"></slot>
      </template>
      <template #append>
        <!-- 右边外侧 -->
        <slot name="outer-right"></slot>
      </template>
      <!-- 默认下拉框内容 -->
      <template slot-scope="{ item }">
        <slot name="option" :item="item">
          <span :class="isLatestSelectedKey(item.key) ? 'selected' : ''">
            {{ item.text }}
          </span>
        </slot>
      </template>
    </el-autocomplete>
  </div>
</template>

<script lang="ts">
import AxComCore from '@AxUI/ax-com-core';
import { Autocomplete, Select } from 'element-ui';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change',
  },
  components: {
    [Autocomplete.name]: Autocomplete,
  },
})
export default class AxAutocomplete extends AxComCore.AxUIComponent {
  /**
   * 当前下拉框类型（对应: DropdownType 中的 'select' 和 'input'）
   * 之前的 'dropdown' 模式移动到新组件 ax-dropdown中
   */
  @Prop({ default: AxComCore.DropdownType.NORMAL, type: String })
  public type?: string;

  /**
   * 下拉菜单样式
   */
  @Prop({ default: undefined })
  public menuClass?: string;
  /**
   *  下拉框的类名 (可选)
   */
  @Prop({ default: 'ax_autocomplete_popper' })
  public popperClass?: string;
  /**
   * 下拉菜单样式
   */
  @Prop({ default: false })
  public declare disabled?: boolean;

  /**
   * 是否可以清空
   */
  @Prop({ default: false })
  public declare clearable?: boolean;

  /**
   * 设置当前下拉框数据
   */
  @Prop({ default: undefined })
  public options?: AxComCore.IOptionData[];

  /**
   * 是否允许创建新数据（需要同时把 filterable 设置为 true）
   */
  @Prop({ default: false })
  public createable?: boolean;

  /**
   * 是否允许输入过滤文本
   */
  @Prop({ default: false })
  public filterable?: boolean;

  /**
   * 是否多选模式
   */
  @Prop({ default: false })
  public multiple?: boolean;

  /**
   * 多选时是否将选中值按文字的形式展示
   */
  @Prop({ default: false })
  public collapseTags?: boolean;

  /**
   * 远程数据查询方法（绑定后将调用远程查询，传入: text 表示查询的字符文本）
   */
  @Prop({ default: undefined })
  public remoteMethod?: (text: string) => void;

  /**
   * type 是 button 模式下的按钮文本
   */
  @Prop({ default: '更多菜单' })
  private btnText?: string;

  /**
   * 下拉框数据集合（键：数据键；值：数据值）
   */
  private optmap: Map<any, AxComCore.IOptionData> = new Map();

  /**
   * 获取静态下拉框文本
   */
  private get loadDropdownText(): string {
    // 获取键
    const ks = this.modelValue;
    // 获取下拉数据
    const opt = this.optmap.get(ks);
    // 判断是否有效
    if (opt) return opt.text;
    // 不存在则返回占位符
    return this.placeholder || '';
  }

  /**
   * 获取焦点方法
   */
  public focus(): AxAutocomplete {
    // 判断模式
    switch (this.type) {
      case 'select':
        // 调用组件的获取焦点方法
        (this.$refs['el-select'] as Select).focus();
        break;
      case 'dropdown':
        {
          // 获取元素对象
          const el = this.$refs['el-dropdown'];
          // 判断是否是 HTML 元素
          if (el instanceof Vue) {
            // 获取元素对象
            const e = (el as Vue).$el;
            // 判断是否是 HTML 元素
            if (e && e instanceof HTMLElement) {
              // 设置焦点
              (e as HTMLElement).focus();
            }
          }
        }
        break;
      case 'input':
        (this.$refs['el-autocomplete'] as Autocomplete).focus();
        break;
      default:
        break;
    }
    // 返回当前对象
    return this;
  }

  /**
   * 关闭下拉框处理
   */
  public close(): AxAutocomplete {
    // 判断模式
    switch (this.type) {
      case 'select':
        (this.$refs['el-select'] as Select).blur();
        break;
      case 'dropdown':
        (this.$refs['el-dropdown'] as any).hide();
        break;
      case 'input':
        (this.$refs['el-autocomplete'] as any).close();
        break;
      default:
        break;
    }
    // 返回当前对象
    return this;
  }

  /**
   * 强制更新下拉框数据处理
   */
  public updateDropdown(): AxAutocomplete {
    // 仅处理文本输入框下拉数据
    if (this.type === 'input') {
      // 直接调用更新
      (this.$refs['el-autocomplete'] as any).handleChange(this.data);
    }
    // 返回当前对象
    return this;
  }

  /**
   * 判断是否为最后一个选中的键
   */
  public isLatestSelectedKey(key: any): boolean {
    // 获取键
    const ks = this.modelValue;
    // 判断是否多选模式
    if (this.multiple) {
      // 返回是否存在数据
      return ks && ks.length > 0 ? (ks as any[]).indexOf(key) !== 0 : false;
    } else {
      // 返回是否一致
      return ks === key;
    }
  }

  /**
   * 获取当前选中的数据（未找到则返回 undefined ）
   * @param {any} key 当前数据键（多选模式时可以是数组，数组则返回数据数组）
   * @returns {IOptionData | IOptionData[] | undefined} 对应键的数据值或数据数组
   */
  public getSelectedData(
    key: any
  ): AxComCore.IOptionData | AxComCore.IOptionData[] | undefined {
    // 判断是否有效
    if (key === undefined || key === null) return undefined;
    // 判断是否存在数据
    if (key && this.optmap.size > 0) {
      // 判断模式
      if (key instanceof Array) {
        // 多选模式，判断是否存在数据
        if (key.length > 0) {
          // 创建数据数组
          const vs: AxComCore.IOptionData[] = [];
          // 遍历数据
          for (let index = 0; index < key.length; index++) {
            // 获取一个数据
            const op = this.optmap.get(key[index]);
            // 设置到数组
            if (op) vs.push(op);
          }
          // 返回数据
          return vs;
        }
      } else {
        // 获取数据值
        return this.optmap.get(key);
      }
    } else {
      // 返回无效
      return undefined;
    }
  }

  /**
   * 监控下拉数据变化
   */
  @Watch('options')
  private setOptions() {
    // 清理集合
    this.optmap.clear();
    // 获取当前数据
    const v = this.options;
    // 判断是否有效
    if (!v || v.length === 0) return v;
    // 遍历设置到集合
    for (let index = 0; index < v.length; index++) {
      // 获取一个数据
      const item = v[index];
      // 设置到集合
      this.optmap.set(item.key, item);
    }
  }

  /**
   * 获取输入下拉框数据方法
   */
  private querySearch(
    queryString: string,
    callback: (items: AxComCore.IOptionData[]) => void
  ) {
    // 判断是否存在搜索对象
    if (!queryString || queryString.length === 0 || !this.options) {
      // 回调结果
      callback(this.options || []);
      // 退出处理
      return;
    }
    // 定义排序数据数组
    const sortAry: Array<{ i: number; v: AxComCore.IOptionData }> = [];
    // 转换为小写
    const qstr = queryString.toLowerCase();
    // 遍历测试匹配度
    for (let index = 0; index < this.options.length; index++) {
      // 获取一个数据
      const item = this.options[index];
      // 判断是否有效
      if (!item) continue;
      // 获取匹配位置
      let pos = item.text ? item.text.toLowerCase().indexOf(qstr) : 10000;
      // 修正负数
      if (pos < 0) pos = 10000;
      // 增加匹配度到数组
      sortAry.push({
        i: pos,
        v: item,
      });
    }
    // 获取数据进行排序
    sortAry.sort(
      (
        a: { i: number; v: AxComCore.IOptionData },
        b: { i: number; v: AxComCore.IOptionData }
      ): number => {
        if (a.i === b.i) return 0;
        return a.i < b.i ? -1 : 1;
      }
    );
    // 定义新数组
    const items: AxComCore.IOptionData[] = [];
    // 遍历设置数据
    for (let index = 0; index < sortAry.length; index++) {
      // 增加到数组
      items.push(sortAry[index].v);
    }
    // 调用 callback 返回建议列表的数据
    callback(items);
  }

  /**
   * 菜单下拉框事件
   */
  private handleCommand(val: any): void {
    // 发布数据改变事件（同时触发 v-model）
    this.$emit('change', val);
    // 判断是否存在
    if (!val || val.length === 0) {
      // 样式设置焦点
      this.$nextTick().then(() => {
        this.focus();
      });
    }
  }

  /**
   * 失去焦点处理
   */
  private handleBlur(event: Event): void {
    this.$emit('blur', event);
  }

  /**
   * 初始化数据处理
   */
  private created() {
    // 设置下拉数据到集合
    this.setOptions();
  }
}
</script>
