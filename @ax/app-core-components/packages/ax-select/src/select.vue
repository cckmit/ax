<template>
  <div
    class="ax_select"
    :class="{
      validate_passed: validatePassed === true,
      validate_failed: validatePassed === false,
      select_multiple: multiple,
      select_adaptive: multiple && !collapseTags,
    }"
    @keydown.esc="close"
  >
    <el-select
      ref="el-select"
      v-model="modelValue"
      :name="name"
      :disabled="disabled"
      :clearable="clearable"
      :placeholder="placeholderStr"
      :allow-create="allowCreate"
      :filterable="filterable"
      :multiple="multiple"
      :multiple-limit="multipleLimit"
      :collapse-tags="collapseTags"
      :loading="loading"
      default-first-option
      :remote="!!remoteMethod"
      :remote-method="remoteMethod"
      :popper-class="popperClass"
      :popper-append-to-body="popperAppendToBody"
      value-key="key"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="change"
      @remove-tag="removeTag"
    >
      <template #prefix>
        <!-- 左边内侧 -->
        <slot name="inner-left"></slot>
      </template>
      <el-option
        v-for="item in options"
        :key="item.key"
        :label="item.text"
        :value="item.key"
        :disabled="item.disabled"
      >
        <!-- 下拉项 -->
        <slot name="option" :item="item">{{ item.text }}</slot>
      </el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
import { AxUIComponent, IOptionData, UILang } from '@AxUI/ax-com-core';
import { Option, Select } from 'element-ui';
import { Component, Emit, Prop, Ref, Watch } from 'vue-property-decorator';

@Component({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change',
  },
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
  },
})
export default class AxSelect extends AxUIComponent {
  //#region Refs
  // ref select
  @Ref('el-select') refSelect!: Select;
  //#endregion

  //#region Prop
  /**
   * 是否不可用
   */
  @Prop({ default: false, type: Boolean })
  public declare disabled?: boolean;

  /**
   * 是否可以清空
   */
  @Prop({ default: false, type: Boolean })
  public declare clearable?: boolean;

  /**
   * 设置当前下拉框数据
   */
  @Prop({ default: undefined })
  public options?: IOptionData[];

  /**
   * 是否允许创建新数据（需要同时把 filterable 设置为 true）
   */
  @Prop({ default: false, type: Boolean })
  public allowCreate?: boolean;

  /**
   * 是否允许输入过滤文本
   */
  @Prop({ default: false, type: Boolean })
  public filterable?: boolean;

  /**
   * 是否多选模式
   */
  @Prop({ default: false, type: Boolean })
  public multiple?: boolean;

  /**
   *  多选时用户最多可以选择的项目数，为 0 则不限制
   */
  @Prop({ default: 0, type: Number })
  public multipleLimit?: number;

  /**
   * 多选时是否将选中值按文字的形式展示
   */
  @Prop({ default: false, type: Boolean })
  public collapseTags?: boolean;

  /**
   * 列表是否在 loading
   */
  @Prop({ default: false, type: Boolean })
  public loading?: boolean;

  /**
   * 多选情况,至少选择一条 loading
   */
  @Prop({ default: false, type: Boolean })
  public atLeast?: boolean;

  /**
   * 远程数据查询方法（绑定后将调用远程查询，传入: text 表示查询的字符文本）
   */
  @Prop({ default: undefined })
  public remoteMethod?: (text: string) => void;

  /**
   * 下拉框的类名 (可选)
   */
  @Prop({ default: 'ax_select_popper' })
  public popperClass?: string;

  /**
   * 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false
   */
  @Prop({ default: true, type: Boolean })
  public popperAppendToBody?: string;

  /**
   * 默认提示文本（占位符）
   */
  @Prop({ default: undefined })
  public declare placeholder?: string;
  //#endregion

  //#region Computed
  /**
   * placeholder的显示
   * @returns {string}
   */
  private get placeholderStr(): string {
    return this.placeholder === undefined
      ? UILang.t('select.placeholder')
      : this.placeholder;
  }
  //#endregion

  //#region Watch
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
  //#endregion

  //#region Emit
  /**
   * 失去焦点的上报
   * @param event
   * @returns {Event}
   */
  @Emit('blur')
  private onBlur(event: Event): Event {
    return event;
  }

  /**
   * 获得焦点的上报
   * @param event
   * @returns {Event}
   */
  @Emit('focus')
  private onFocus(event: Event): Event {
    return event;
  }
  //#endregion

  //#region 提供的方法
  /**
   * 获取焦点方法
   */
  public focus(): AxSelect {
    // 调用组件的获取焦点方法
    this.refSelect.focus();
    // 返回当前对象
    return this;
  }

  /**
   * 关闭下拉框处理
   */
  public close(): AxSelect {
    // 调用组件的失焦方法
    this.refSelect.blur();
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
  public getSelectedData(key: any): IOptionData | IOptionData[] | undefined {
    // 判断是否有效
    if (key === undefined || key === null) return undefined;
    // 判断是否存在数据
    if (key && this.optmap.size > 0) {
      // 判断模式
      if (key instanceof Array) {
        // 多选模式，判断是否存在数据
        if (key.length > 0) {
          // 创建数据数组
          const vs: IOptionData[] = [];
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
  //#endregion

  //#region 内部变量
  /**
   * 下拉框数据集合（键：数据键；值：数据值）
   */
  private optmap: Map<any, IOptionData> = new Map();
  //#endregion

  //#region 内部方法
  /**
   * 多选,, 失去焦点处理
   */
  private removeTag(tag: any): void {
    if (this.atLeast) {
      // 几秒过后,如果还是没有数值的话
      setTimeout(() => {
        if (this.modelValue.length === 0) {
          this.modelValue = [tag];
        }
      }, 20);
    }
    this.$emit('remove-tag', tag);
  }

  /**
   * 选择改变
   * @param currentValue
   */
  private change(currentValue: any) {
    const temp = JSON.parse(JSON.stringify(this.modelValue));
    if (this.multiple && this.atLeast) {
      // 如果变化后的没有值, 之前有的话
      if (currentValue.length === 0 && this.modelValue.length) {
        setTimeout(() => {
          this.modelValue = temp;
        }, 20);
      }
    }
    // this.$emit('change', this.modelValue);
  }

  /**
   * 失去焦点
   * @param event
   */
  private handleBlur(event: Event): void {
    this.onBlur(event);
  }

  /**
   * 获取焦点
   * @param event
   */
  private handleFocus(event: Event): void {
    this.onFocus(event);
  }
  //#endregion

  //#region 生命周期
  /**
   * 初始化数据处理
   */
  private created(): void {
    // 设置下拉数据到集合
    this.setOptions();
  }
  //#endregion
}
</script>
