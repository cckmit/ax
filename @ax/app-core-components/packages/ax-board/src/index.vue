<template>
  <div class="ax_board" :class="[presetClass]">
    <!--region 功能栏容器-->
    <div
      v-if="$slots.bar !== undefined"
      class="ax_board_bar"
      :class="{
        with_preset: !!barPreset,
      }"
    >
      <slot name="bar"></slot>
    </div>
    <!--endregion-->
    <!--region 内容容器-->
    <div
      class="ax_board_content"
      :class="{
        with_bar: $slots.bar !== undefined,
        with_split: !!$slots.left && !!$slots.right,
        with_preset: !!contentPreset,
      }"
    >
      <!--region 分栏模式-->
      <ax-split
        v-if="layoutMode"
        :type="type"
        :min-size="minSize"
        :size="splitSize"
        :max-size="maxSize"
        :resizeable="splitResizeable"
      >
        <template slot="left">
          <slot name="left"></slot>
        </template>
        <template slot="right">
          <slot name="right"></slot>
        </template>
      </ax-split>
      <!--endregion-->
      <!--region 普通模式-->
      <slot v-else></slot>
      <!--endregion-->
    </div>
    <!--endregion-->
  </div>
</template>

<script lang="ts">
import AxSplit from '@AxUI/ax-split';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    AxSplit,
  },
})
export default class AxBoard extends Vue {
  /**
   * 是否分栏布局模式
   */
  @Prop({ default: false, type: Boolean })
  private layoutMode?: boolean;

  /**
   * 功能栏是否包含预设样式
   */
  @Prop({ default: true, type: Boolean })
  private barPreset?: boolean;

  /**
   * 内容栏是否包含预设样式
   */
  @Prop({ default: true, type: Boolean })
  private contentPreset?: boolean;

  /**
   * 是否使用预设样式，默认不使用，可以传入自定义实现的class， 也可以使用预设的类
   * 预设列表详见 AxComCore.BoardPresetClass
   */
  @Prop({ default: '', type: String })
  private presetClass?: string;

  /**
   * 分栏排版方向 (horizontal 或者 vertical, 默认 horizontal 水平排版)
   */
  @Prop({ default: 'horizontal', type: String })
  private type?: string;

  /**
   * 默认分割线位置，默认 20，单位百分比
   */
  @Prop({ default: '20%' })
  private splitSize?: number;

  /**
   * 默认分割线位置，默认 20，单位百分比
   */
  @Prop({ default: true, type: Boolean })
  private splitResizeable?: boolean;

  /**
   * 第一个分栏最小尺寸,默认 20%
   */
  @Prop({ default: '10%', type: String })
  private minSize?: string;

  /**
   * 第一个分栏最大尺寸,默认 80%
   */
  @Prop({ default: '90%', type: String })
  private maxSize?: string;

  /**
   * DOM 创建完成开始监听对象处理
   */
  mounted(): void {}
}
</script>
