<template>
  <div class="ax_badge">
    <slot></slot>
    <sup
      v-show="!hidden && (content || isDot)"
      class="ax_badge_content"
      :class="{
        is_fixed: $slots.default,
        is_dot: isDot,
        [`type_${type}`]: !!type,
      }"
      v-text="content"
    ></sup>
  </div>
</template>

<script lang="ts">
import AxComCore from '@AxUI/ax-com-core';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AxBadge extends Vue {
  /**
   * 按钮类型（对应: BadgeType.XXXX，默认值: BadgeType.DANGER）
   */
  @Prop({ default: AxComCore.BadgeType.DANGER })
  public type?: string;

  /**
   * 显示值
   */
  @Prop({ default: 99 })
  private value?: string | number;

  /**
   * 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型
   */
  @Prop({ default: 99 })
  private max?: number;

  /**
   * 小圆点
   */
  @Prop({ default: false, type: Boolean })
  private isDot?: boolean;

  /**
   *  隐藏 badge
   */
  @Prop({ default: false })
  private hidden?: boolean;

  /**
   * 内容获取
   * @returns {string}
   */
  private get content(): string {
    if (this.isDot) return '';

    const value = this.value;
    const max = this.max;

    if (typeof value === 'number' && typeof max === 'number') {
      return max < value ? `${max}+` : `${value}`;
    }

    return `${value}`;
  }
}
</script>
