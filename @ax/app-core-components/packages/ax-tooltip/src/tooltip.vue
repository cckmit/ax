<template>
  <el-tooltip
    v-model="showModel"
    :popper-class="popperClass"
    :effect="effect"
    :content="tips"
    :placement="placement"
    :disabled="disabled"
    :offset="offset"
    :open-delay="openDelay"
    :manual="manual"
    visible-arrow
  >
    <template #content>
      <slot name="tips"></slot>
    </template>
    <slot></slot>
  </el-tooltip>
</template>

<script lang="ts">
import { Tooltip } from 'element-ui';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change',
  },
  components: {
    [Tooltip.name]: Tooltip,
  },
})
export default class AxTooltip extends Vue {
  @Watch('show')
  private showWatch(val: any) {
    this.showModel = val;
  }
  /**
   * 皮肤
   */
  @Prop({ default: 'dark' })
  private effect?: string;

  /**
   *  下拉框的类名 (可选)
   */
  @Prop({ default: 'ax_tooltip_popper' })
  public popperClass?: string;

  /**
   * 显示控制（manual模式下）
   */
  @Prop({ default: false })
  private show?: boolean;
  /**
   * 显示v-model绑定
   */
  private showModel: boolean = false;
  /**
   * 需要显示的内容 (传参的方式传入, 还可以通过插槽的方式[slot tips])
   */
  @Prop({ default: undefined })
  private tips?: string;
  /**
   * Tooltip 出现的位置 (默认为右边)
   */
  @Prop({ default: 'right' })
  private placement?: string;
  /**
   * Tooltip 是否可用
   */
  @Prop({ default: undefined })
  private disabled?: boolean;
  /**
   * 出现位置的偏移量 (默认为0, 不偏移)
   */
  @Prop({ default: undefined })
  private offset?: number;
  /**
   * 延迟出现, 单位毫秒 (默认为0, 不延迟)
   */
  @Prop({ default: undefined })
  private openDelay?: number;
  /**
   * 显示控制
   */
  @Prop({ default: false })
  private manual?: boolean;
}
</script>
