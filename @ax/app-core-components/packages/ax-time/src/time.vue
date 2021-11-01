<template>
  <div
    class="ax_time"
    :class="[
      { validate_passed: validatePassed === true },
      { validate_failed: validatePassed === false },
    ]"
  >
    <!--    时间下拉-->
    <el-time-select
      v-if="type === AxTimeType.SELECT"
      ref="el-time"
      v-model="modelValue"
      v-bind="$attrs"
      v-on="$listeners"
      :align="align"
      :arrow-control="arrowControl"
      :clear-icon="clearIcon"
      :clearable="clearable"
      :default-value="defaultValue"
      :disabled="disabled"
      :editable="editable"
      :end-placeholder="endPlaceholder"
      :is-range="isRange"
      :name="name"
      :picker-options="pickerOptions"
      :placeholder="placeholderStr"
      :popper-class="popperClass"
      :prefix-icon="prefixIcon"
      :range-separator="rangeSeparator"
      :readonly="readonly"
      :size="size"
      :start-placeholder="startPlaceholder"
      :value-format="valueFormat"
    ></el-time-select>
    <!--    时间 选择-->
    <el-time-picker
      v-if="type === AxTimeType.PICKER"
      ref="el-time"
      v-model="modelValue"
      v-bind="$attrs"
      v-on="$listeners"
      :align="align"
      :arrow-control="arrowControl"
      :clear-icon="clearIcon"
      :clearable="clearable"
      :default-value="defaultValue"
      :disabled="disabled"
      :editable="editable"
      :end-placeholder="endPlaceholder"
      :is-range="isRange"
      :name="name"
      :picker-options="pickerOptions"
      :placeholder="placeholderStr"
      :popper-class="popperClass"
      :prefix-icon="prefixIcon"
      :range-separator="rangeSeparator"
      :readonly="readonly"
      :size="size"
      :start-placeholder="startPlaceholder"
      :value-format="valueFormat"
    ></el-time-picker>
  </div>
</template>

<script lang="ts">
import { AxTimeType, AxUIComponent, UILang } from '@AxUI/ax-com-core';
import { TimePicker, TimeSelect } from 'element-ui';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change',
  },
  inheritAttrs: false,

  components: {
    [TimePicker.name]: TimePicker,
    [TimeSelect.name]: TimeSelect,
  },
})
export default class AxTime extends AxUIComponent {
  /**
   * 设置只读 (默认为false, 非只读模式)
   */
  @Prop({ default: undefined })
  public readonly?: boolean;

  /*是否为时间范围选择，仅对<el-time-picker>有效*/
  @Prop({ default: undefined })
  public isRange?: boolean;

  /**
   * 文本框可输入 (默认为true, 可输入)
   */
  @Prop({ default: undefined })
  public editable?: boolean;

  @Prop({ default: false })
  public declare disabled?: boolean;

  /**
   * 是否使用箭头进行时间选择，仅对<el-time-picker>有效
   */
  @Prop({ default: false })
  public arrowControl?: boolean;

  @Prop({ default: false })
  public declare clearable?: boolean;

  /**
   * 输入框尺寸 (可选, 可输入large, small, mini)
   */
  @Prop({ default: undefined })
  public size?: string;

  @Prop({ default: 'SELECT' })
  public type!: string;

  /**
   * 默认提示文本（占位符）
   */
  @Prop({ default: undefined })
  public declare placeholder?: string;

  /**
   * 范围选择时开始日期的占位内容 (可选)
   */
  @Prop({ default: undefined })
  public startPlaceholder?: string;

  /**
   * 范围选择时结束日期的占位内容 (可选)
   */
  @Prop({ default: undefined })
  public endPlaceholder?: string;

  /**
   * 范围选择时结束日期的占位内容 (可选)
   */
  @Prop({ default: undefined })
  public format?: string;

  /**
   * 对齐方式 (可选, 默认 left, 可输入 left, center, right)
   */
  @Prop({ default: undefined })
  public align?: string;

  /**
   * DatePicker 下拉框的类名 (可选)
   */
  @Prop({ default: 'ax_time_popper' })
  public popperClass?: string;

  /**
   * 当前时间日期选择器特有的选项参考下表 (可选)
   */
  @Prop({
    default: () => {
      return {};
    },
  })
  public pickerOptions?: {
    start: string;
    end: string;
    step: string;
    minTime: string;
    maxTime: string;
  };

  /**
   * 选择范围时的分隔符 (可选)
   */
  @Prop({ default: undefined })
  public rangeSeparator?: string;

  /**
   * 选择器打开时默认显示的时间  Date  可被new Date()解析 (可选)
   */
  @Prop({ default: undefined })
  public defaultValue?: Date;

  /**
   * 范围选择时选中日期所使用的当日内具体时刻 (可选, 数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00)
   */
  @Prop({ default: undefined })
  public defaultTime?: string[];

  /**
   * 绑定值的格式。不指定则绑定值为 Date 对象 (可选)
   */
  @Prop({ default: undefined })
  public valueFormat?: string;

  /**
   * 在范围选择器里取消两个日期面板之间的联动 (可选)
   */
  @Prop({ default: undefined })
  public unlinkPanels?: boolean;

  /**
   * 自定义头部图标的类名 (可选, 默认为 el-icon-date)
   */
  @Prop({ default: undefined })
  public prefixIcon?: string;

  /**
   * 自定义清空图标的类名 (可选, 默认为 el-icon-circle-close)
   */
  @Prop({ default: undefined })
  public clearIcon?: string;

  /**
   * 输入时是否触发表单的校验 (可选, 默认为 true 触发)
   */
  @Prop({ default: undefined })
  public validateEvent?: boolean;

  /**
   * placeholder的显示
   * @returns {string}
   */
  private get placeholderStr(): string {
    return this.placeholder === undefined
      ? UILang.t('select.placeholder')
      : this.placeholder;
  }

  private AxTimeType = AxTimeType;

  /**
   * 获取焦点方法
   */
  public focus(): AxTime {
    // 获取元素对象
    const el = this.$refs['el-time'];
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
    // 返回当前对象
    return this;
  }
}
</script>
