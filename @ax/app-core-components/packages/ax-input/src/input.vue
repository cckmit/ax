<template>
  <div
    class="ax_input"
    :class="[
      { validate_passed: validatePassed === true },
      { validate_failed: validatePassed === false },
      'ax_input_' + type,
    ]"
  >
    <el-input
      ref="el-input"
      v-model="modelValue"
      :name="name"
      :type="
        type === inputType.PASSWORD
          ? passwordShow
            ? inputType.TEXT
            : type
          : type
      "
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholderStr"
      :clearable="clearable"
      :disabled="disabled"
      :prefix-icon="leftIcon"
      :suffix-icon="rightIcon"
      :rows="rows"
      :autosize="autosize"
      :readonly="readonly"
      :resize="resize"
      autocomplete="on"
      :autofocus="autofocus"
      :popper-append-to-body="popperAppendToBody"
      trigger-on-focus
      validate-event
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
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
        <template v-if="type === inputType.PASSWORD">
          <i
            v-show="passwordShow"
            @click="changePasswordShow(false)"
            class="icon_inner i_cc i_cc_kejian"
          ></i>
          <i
            v-show="!passwordShow"
            @click="changePasswordShow(true)"
            class="icon_inner i_cc i_cc_bukejian"
          ></i>
        </template>
      </template>
      <template #append>
        <!-- 右边外侧 -->
        <slot name="outer-right"></slot>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts">
import {
  AxUIComponent,
  InputType,
  ResizeType,
  UILang,
} from '@AxUI/ax-com-core';
import { Input } from 'element-ui';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change',
  },
  components: {
    [Input.name]: Input,
  },
})
export default class AxInput extends AxUIComponent {
  /**
   * 输入框类型（对应: InputType.XXXX，默认值: InputType.TEXT）
   */
  @Prop({ default: InputType.TEXT, type: String })
  public type?: string;

  /**
   * 最大输入长度
   */
  @Prop({ default: undefined })
  public maxlength?: number;

  /**
   * 自动聚焦
   */
  @Prop({ default: false })
  public autofocus?: boolean;

  /**
   * 最小输入长度
   */
  @Prop({ default: undefined })
  public minlength?: number;

  /**
   * 左边内侧图标样式字符串
   */
  @Prop({ default: undefined })
  public leftIcon?: string;

  /**
   * 右边内侧图标样式字符串
   */
  @Prop({ default: undefined })
  public rightIcon?: string;

  /**
   * 是否允许清空组件内容
   */
  @Prop({ default: true })
  public declare clearable?: boolean;

  /**
   * 输入框行数，只对 InputType.TEXT_AREA 有效，默认：3
   */
  @Prop({ default: undefined, type: Number })
  public rows?: number;

  /**
   * 自适应内容高度，只对 InputType.TEXT_AREA 有效
   */
  @Prop({ default: undefined })
  public autosize?: { minRows: number; maxRows: number };

  /**
   * 是否只读
   */
  @Prop({ default: false, type: Boolean })
  public readonly?: boolean;

  /**
   * 是否能被用户缩放（对应: ResizeType.XXXX，默认: ResizeType.NONE）
   */
  @Prop({ default: ResizeType.NONE })
  public resize?: string;

  /**
   * 默认提示文本（占位符）
   */
  @Prop({ default: undefined })
  public declare placeholder?: string;

  /**
   * 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false
   */
  @Prop({ default: true, type: Boolean })
  public popperAppendToBody?: string;

  // 密码是否显示
  private passwordShow = false;

  // 输入框类型
  private inputType = InputType;

  /**
   * placeholder的显示
   * @returns {string}
   */
  private get placeholderStr(): string {
    return this.placeholder === undefined
      ? UILang.t('input.placeholder')
      : this.placeholder;
  }

  /**
   * 密码的显示
   * @param show
   */
  private changePasswordShow(show: boolean) {
    this.passwordShow = show;
  }

  /**
   * 获取焦点方法
   */
  public focus(): AxInput {
    // 调用组件的获取焦点方法
    (this.$refs['el-input'] as Input).focus();
    (this.$refs['el-input'] as Input).select();
    // 返回当前对象
    return this;
  }

  /**
   * 失去焦点方法
   */
  public blur() {
    // 调用组件的获取焦点方法
    (this.$refs['el-input'] as Input).blur();
  }

  /**
   * 获取焦点处理
   * @param event
   */
  private handleFocus(event: Event): void {
    this.$emit('focus', event);
  }

  /**
   * 失去焦点处理
   * @param event
   */
  private handleBlur(event: Event): void {
    this.$emit('blur', event);
  }

  /**
   * 修改时的处理
   * @param event
   */
  private handleChange(event: Event): void {
    this.$emit('change', event);
  }
}
</script>
