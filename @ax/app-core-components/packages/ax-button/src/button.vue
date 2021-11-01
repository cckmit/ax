<template>
  <button
    class="ax_button"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      `ax_button_${type}`,
      `size_${size}`,
      {
        is_disabled: disabled,
        is_loading: loading,
        is_round: round,
        is_circle: circle,
      },
    ]"
    @click="handleClick"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon && !loading" class="ax_button_icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import AxComCore from '@AxUI/ax-com-core';
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AxButton extends Vue {
  /**
   * 按钮类型（对应: ButtonType.XXXX，默认值: ButtonType.PRIMARY
   */
  @Prop({ default: AxComCore.ButtonType.PRIMARY })
  public type?: string;

  /**
   * 原生type属性	button / submit / reset
   */
  @Prop({ default: 'button' })
  public nativeType?: string;

  /**
   * 组件对象名称
   */
  @Prop({ default: undefined })
  public name?: string;

  /**
   * 左侧图标样式字符串
   */
  @Prop({ default: undefined })
  public icon?: string;

  /**
   * 按钮尺寸
   */
  @Prop({ default: AxComCore.ButtonSize.NORMAL, type: String })
  public size?: string;

  /**
   * 是否被禁用
   */
  @Prop({ default: false, type: Boolean })
  public disabled?: boolean;

  /**
   * 是否处于加载状态
   */
  @Prop({ default: false, type: Boolean })
  public loading?: boolean;

  /**
   * 是否默认获取焦点
   */
  @Prop({ default: false, type: Boolean })
  public autofocus?: boolean;

  /**
   * 是否圆角按钮
   */
  @Prop({ default: false, type: Boolean })
  public round?: boolean;

  /**
   * 是否圆形按钮
   */
  @Prop({ default: false, type: Boolean })
  public circle?: boolean;

  /**
   * 获取焦点方法
   */
  public focus(): AxButton {
    // 获取元素对象
    const el = this.$refs['el-button'];
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
   * 点击按钮处理
   */
  @Emit('click')
  private handleClick(event: Event) {
    return event;
  }
}
</script>
