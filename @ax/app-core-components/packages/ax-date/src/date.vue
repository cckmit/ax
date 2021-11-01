<template>
  <div
    class="ax_date"
    :class="[
      { validate_passed: validatePassed === true },
      { validate_failed: validatePassed === false },
    ]"
  >
    <el-date-picker
      ref="el-date-picker"
      v-model="modelValue"
      :readonly="readonly"
      :disabled="disabled"
      :editable="editable"
      :clearable="clearable"
      :size="size"
      :placeholder="placeholderStr"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :type="type"
      :format="format"
      :align="align"
      :popper-class="popperClass"
      :picker-options="pickerOptions"
      :range-separator="rangeSeparator"
      :default-value="defaultValue"
      :default-time="defaultTime"
      :value-format="valueFormat"
      :name="name"
      :unlink-panels="unlinkPanels"
      :prefix-icon="prefixIcon"
      :clear-icon="clearIcon"
      :validate-event="validateEvent"
      @focus="handleFocus"
      @blur="handleBlur"
    ></el-date-picker>
  </div>
</template>

<script lang="ts">
import AxComCore, { UILang } from '@AxUI/ax-com-core';
import { DatePicker, Input } from 'element-ui';
import { Component, Emit, Prop, Ref, Vue } from 'vue-property-decorator';

@Component({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change',
  },
  components: {
    [DatePicker.name]: DatePicker,
  },
})
export default class AxDate extends AxComCore.AxUIComponent {
  // 组件ref
  @Ref('el-date-picker') refDatePicker!: DatePicker;

  /**
   * 设置只读 (默认为false, 非只读模式)
   */
  @Prop({ default: undefined })
  public readonly?: boolean;

  /**
   * 文本框可输入 (默认为true, 可输入)
   */
  @Prop({ default: undefined })
  public editable?: boolean;

  @Prop({ default: false })
  public declare disabled?: boolean;

  @Prop({ default: undefined })
  public declare placeholder?: string;

  @Prop({ default: false })
  public declare clearable?: boolean;

  /**
   * 输入框尺寸 (可选, 可输入large, small, mini)
   */
  @Prop({ default: undefined })
  public size?: string;

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
   * 显示类型 (可选, 默认为 date [日], 可输入year/month/date/dates/ week/datetime/datetimerange/daterange)
   */
  @Prop({ default: undefined })
  public type?: string;

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
  @Prop({ default: 'ax_date_popper' })
  public popperClass?: string;



  /**
   * 当前时间日期选择器特有的选项参考下表 (可选)
   */
  @Prop({ default: undefined })
  public pickerOptions?: object;

  /**
   * 选择范围时的分隔符 (可选)
   */
  @Prop({ default: undefined })
  public rangeSeparator?: string;

  /**
   * 选择器打开时默认显示的时间	Date	可被new Date()解析 (可选)
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

  /**
   * 获取焦点方法
   */
  public focus(): AxDate {
    // 获取元素对象
    const el = this.$refs['el-date-picker'];
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

  /**
   * 获取焦点处理
   * @param ele
   */
  @Emit('focus')
  private handleFocus(ele: Vue): Vue {
    return ele;
  }

  /**
   * 失去焦点处理
   * @param ele
   */
  @Emit('blur')
  private handleBlur(ele: Vue): Vue {
    return ele;
  }
}
</script>
