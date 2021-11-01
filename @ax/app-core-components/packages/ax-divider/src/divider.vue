<template>
  <div class="ax_divider" :class="[`ax_divider_${type}`]" :style="style"></div>
</template>

<script lang="ts">
import AxComCore from '@AxUI/ax-com-core';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AxDivider extends Vue {
  /**
   * 分割线类型（对应: DividerType.XXXX，默认值: DividerType.VERTICAL）
   */
  @Prop({ default: AxComCore.DividerType.VERTICAL, type: String })
  public type?: string;

  /**
   * 预设类型（目前支持：AxComCore.DividerPreset.BUTTON）
   */
  @Prop({ default: '', type: String })
  public preset?: string;

  /**
   * 自定义背景
   */
  @Prop({ default: undefined, type: String })
  public background?: string;

  /**
   * 自定义高度
   */
  @Prop({ default: undefined, type: String })
  public height?: string;

  private get style() {
    let style = {
      background: this.background,
      height: this.height,
    };
    // 判断是否有预设的情况
    if (this.preset) {
      switch (this.preset) {
        case AxComCore.DividerPreset.BUTTON:
          style.height = '2rem';
          break;
        default:
          break;
      }
    }
    return style;
  }
}
</script>
