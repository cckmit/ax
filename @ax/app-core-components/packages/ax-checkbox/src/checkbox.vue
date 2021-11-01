<template>
  <div
    class="ax_checkbox"
    :class="[
      { validate_passed: validatePassed === true },
      { validate_failed: validatePassed === false },
    ]"
  >
    <el-checkbox-button
      v-if="type === 'button'"
      ref="el-checkbox-button"
      v-model="model"
      class="checkbox-button"
      :name="name"
      :label="trueValueInside"
      :true-label="trueValueInside"
      :false-label="falseValue"
      :disabled="disabled"
      :title="placeholder"
      @blur="handleBlur"
    >
      <slot>{{ label }}</slot>
    </el-checkbox-button>
    <el-switch
      v-else-if="type === 'switch'"
      v-model="model"
      class="switch"
      :name="name"
      :active-value="trueValueInside"
      :inactive-value="falseValueInside"
      :disabled="disabled"
      :title="placeholder"
    ></el-switch>
    <el-checkbox
      v-else
      ref="el-checkbox"
      v-model="model"
      class="checkbox"
      :name="name"
      :label="trueValueInside"
      :true-label="trueValueInside"
      :false-label="falseValueInside"
      :indeterminate="indeterminate"
      :disabled="disabled"
      :title="placeholder"
      :border="type === 'border'"
      @blur="handleBlur"
    >
      <slot>{{ label }}</slot>
    </el-checkbox>
  </div>
</template>

<script lang="ts">
import AxComCore from '@AxUI/ax-com-core';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Checkbox, CheckboxButton, Switch } from 'element-ui';

@Component({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change',
  },
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxButton.name]: CheckboxButton,
    [Switch.name]: Switch,
  },
})
export default class AxCheckbox extends AxComCore.AxUIComponent {
  /**
   * 复选框类型（对应: CheckboxType.XXXX），默认值: CheckboxType.NORMAL
   */
  @Prop({ default: AxComCore.CheckboxType.NORMAL })
  public type?: string;

  /**
   * 处于选中状态时显示中间模糊态样式（设置后将使用模糊状态形状显示）
   */
  @Prop({ default: false })
  public indeterminate?: boolean;

  /**
   * 选择框标签文本
   */
  @Prop({ default: '' })
  public label?: string;

  /**
   * 选中状态时的输出值
   */
  @Prop({ default: 'Y' })
  public trueValue?: any;

  /**
   * 未选中状态时的输出值
   */
  @Prop({ default: 'N' })
  public falseValue?: any;

  // 内部ele组件使用的trueValue
  private trueValueInside: string = 'Y';

  // 内部ele组件使用的falseValue
  private falseValueInside: string = 'N';

  /**
   * 内部ele组件绑定的v-model获取外部的v-model值
   * @returns {string}
   */
  private get model() {
    return this.modelValue === this.trueValue
      ? this.trueValueInside
      : this.falseValueInside;
  }

  /**
   * 内部ele组件绑定的v-model更新之后设置外部v-model值
   * @param val
   */
  private set model(val: string) {
    this.modelValue =
      val === this.trueValueInside ? this.trueValue : this.falseValue;
  }

  /**
   * 获取当前是否时选中状态
   */
  public isChecked(): boolean {
    return this.modelValue === this.trueValue;
  }

  /**
   * 获取焦点方法
   */
  public focus(): AxCheckbox {
    // 获取元素对象
    const el = this.$refs[
      this.type === AxComCore.CheckboxType.BUTTON
        ? 'el-checkbox-button'
        : 'el-checkbox'
    ] as Vue;
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
