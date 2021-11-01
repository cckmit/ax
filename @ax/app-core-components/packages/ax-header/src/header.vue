<template>
  <div
    class="ax_header"
    :class="[{ ax_header_border: !hideBorder }, `ax_header_${mode}`]"
    :style="{ 'background-color': bgColor, width: width }"
  >
    <div class="ax_header_left">
      <div v-if="!hideBack" class="ax_header_back" @click="handleBack">
        <template v-if="$slots.left">
          <slot name="left"></slot>
        </template>
        <template v-else>
          <i :class="[icon || 'i_cc i_cc_left_circle']"></i>
        </template>
      </div>
      <div
        class="ax_header_title"
        :class="{ is_clickable: titleClickable }"
        @click="handleBackTitle"
      >
        <slot></slot>
      </div>
    </div>
    <div class="ax_header_right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import AxComCore from '@AxUI/ax-com-core';
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AxHeader extends Vue {
  /**
   * 按钮尺寸
   */
  @Prop({ default: AxComCore.HeaderMode.FIRST, type: String })
  public mode?: AxComCore.HeaderMode;

  /**
   * 返回按钮图标替换
   */
  @Prop({ default: undefined })
  public icon?: string;

  /**
   * 是否隐藏返回按钮
   */
  @Prop({ default: false, type: Boolean })
  public hideBack?: boolean;

  /**
   * 是否隐藏底部边框
   */
  @Prop({ default: false, type: Boolean })
  public hideBorder?: boolean;

  /**
   * 背景颜色
   */
  @Prop({ default: undefined, type: String })
  public bgColor?: string;

  /**
   * 宽度
   */
  @Prop({ default: '100%', type: String })
  public width?: string;

  /**
   * 标题点击
   */
  @Prop({ default: undefined, type: Boolean })
  public titleClick?: boolean;

  /**
   * 点击返回按钮处理
   */
  @Emit('back')
  private handleBack(event: Event) {
    return event;
  }

  /**
   * 标题是否可点击
   */
  private get titleClickable(): boolean {
    if (
      this.mode === AxComCore.HeaderMode.FIRST &&
      this.titleClick === undefined
    ) {
      return true;
    } else {
      return !!this.titleClick;
    }
  }

  /**
   * 标题栏点击
   */
  private handleBackTitle(event: Event) {
    if (this.titleClickable) {
      this.handleBack(event);
    }
  }
}
</script>
