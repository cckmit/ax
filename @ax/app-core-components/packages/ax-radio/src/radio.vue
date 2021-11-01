<template>
  <div
    class="ax_radio"
    :class="[
      { validate_passed: validatePassed === true },
      { validate_failed: validatePassed === false },
    ]"
  >
    <el-radio
      ref="el-radio"
      v-model="modelValue"
      :class="[
        type === 'button' ? 'radio radio-button' : 'radio',
        hideLabel ? 'hide_label' : '',
      ]"
      :name="name"
      :label="label"
      :disabled="disabled"
      :title="placeholder"
      :border="type === 'border'"
      @blur="handleBlur"
    >
      <slot>{{ label }}</slot>
    </el-radio>
  </div>
</template>

<script lang="ts">
import AxComCore from '@AxUI/ax-com-core';
import { Radio, RadioButton } from 'element-ui';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change',
  },
  components: {
    [Radio.name]: Radio,
    [RadioButton.name]: RadioButton,
  },
})
export default class AxRadio extends AxComCore.AxUIComponent {
  /**
   * 单选框类型（对应: RadioType.XXXX）
   */
  @Prop({ default: AxComCore.RadioType.NORMAL })
  public type?: string;

  /**
   * 单选框选中时的value
   */
  @Prop({ default: '' })
  public label?: string | number;

  /**
   * 是否隐藏label内容
   */
  @Prop({ default: false, type: Boolean })
  public hideLabel?: boolean;

  /**
   * 获取当前是否时选中状态
   */
  public isChecked(): boolean {
    return this.modelValue === this.label;
  }

  /**
   * 获取焦点方法
   */
  public focus(): AxRadio {
    // 获取元素对象
    const el = this.$refs['el-radio'] as Vue;
    // 获取元素对象
    const e = el.$el;
    // 判断是否是 HTML 元素
    if (e && e instanceof HTMLElement) {
      // 设置焦点
      (e as HTMLElement).focus();
    }
    // 返回当前对象
    return this;
  }

  /**
   * 失去焦点处理
   */
  private handleBlur(event: Event): void {
    this.$emit('blur', event);
  }
}
</script>
