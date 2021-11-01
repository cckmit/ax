<template>
  <a
    ref="ax_link"
    :class="[
      'ax_link',
      `ax_link_${type}`,
      disabled && 'is_disabled',
      underline && !disabled && 'is_underline',
    ]"
    :href="disabled ? null : href"
    v-bind="$attrs"
    @click="handleClick"
  >
    <i v-if="icon" class="ax_link_icon" :class="icon"></i>

    <span v-if="$slots.default" class="ax_link_inner">
      <slot></slot>
    </span>
  </a>
</template>

<script lang="ts">
import AxComCore from '@AxUI/ax-com-core';
import { Vue, Component, Prop, Emit, Ref } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AxLink extends Vue {
  //#region Refs
  // refs ax_link
  @Ref('ax_link')
  private refLink!: AxLink;
  //#endregion

  //#region Prop
  /**
   * 链接类型（对应: LinkType.XXXX，默认值: LinkType.DEFAULT
   */
  @Prop({ default: AxComCore.LinkType.DEFAULT })
  public type?: string;

  /**
   * 左侧图标样式字符串
   */
  @Prop({ default: undefined })
  public icon?: string;

  /**
   * 是否被禁用
   */
  @Prop({ default: false, type: Boolean })
  public disabled?: boolean;

  /**
   * 是否下划线
   */
  @Prop({ default: false, type: Boolean })
  public underline?: boolean;

  /**
   * 原生 href 属性
   */
  @Prop({ default: undefined })
  public href?: string;
  //#endregion

  //#region 外部方法
  /**
   * 获取焦点方法
   */
  public focus(): AxLink {
    // 判断是否是 HTML 元素
    if (this.refLink instanceof Vue) {
      // 获取元素对象
      const e = this.refLink.$el;
      // 判断是否是 HTML 元素
      if (e && e instanceof HTMLElement) {
        // 设置焦点
        (e as HTMLElement).focus();
      }
    }
    // 返回当前对象
    return this;
  }
  //#endregion

  //#region 内部方法
  /**
   * 点击处理
   */
  private handleClick(event: Event) {
    if (!this.disabled && !this.href) {
      this.click(event);
    }
  }
  //#endregion

  //#region Emit
  /**
   * 点击事件上报
   */
  @Emit()
  private click(event: Event) {
    return event;
  }
  //#endregion
}
</script>
