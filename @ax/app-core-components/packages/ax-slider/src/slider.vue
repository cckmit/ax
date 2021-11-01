<template>
  <div class="ax_slider">
    <slider
      ref="refSlider"
      v-model="value"
      :min="min"
      :max="max"
      :disabled="disabled"
      :step="step"
      :show-input="showInput"
      :show-input-controls="showInputControls"
      :input-size="inputSize"
      :show-stops="showStops"
      :show-tooltip="showTooltip"
      :format-tooltip="formatTooltip"
      :range="formatTooltip"
      :vertical="range"
      :height="height"
      :label="label"
      :debounce="debounce"
      :tooltip-class="tooltipClass"
      :marks="marks"
      @change="change"
      @input="input"
    ></slider>
  </div>
</template>

<script lang="ts">
import { Slider } from 'element-ui';
import { Component, Emit, Model, Prop, Vue } from 'vue-property-decorator';

type InputSize = 'large' | 'medium' | 'small' | 'mini';

@Component({
  components: {
    Slider,
  },
})
export default class AxSlider extends Vue {
  // v-model
  @Model('change', { type: Number, default: 0 }) data!: number;

  /**
   * v-model获取值
   * @returns {number}
   */
  private get value(): number {
    return this.data;
  }

  /**
   * v-model修改时的响应
   * @param value
   */
  private set value(value: number) {
    this.$emit('change', value);
  }

  // 最小值
  @Prop({ default: 0 }) min?: number;

  // 最大值
  @Prop({ default: 100 }) max?: number;

  // 是否禁用
  @Prop({ default: false }) disabled?: boolean;

  // 步长
  @Prop({ default: 1 }) step?: number;

  // 是否显示输入框，仅在非范围选择时有效
  @Prop({ default: false }) showInput?: boolean;

  // 在显示输入框的情况下，是否显示输入框的控制按钮
  @Prop({ default: true }) showInputControls?: boolean;

  // 输入框的尺寸
  @Prop({ default: 'small' }) inputSize?: InputSize;

  // 是否显示间断点
  @Prop({ default: false }) showStops?: boolean;

  // 是否显示 tooltip
  @Prop({ default: true }) showTooltip?: boolean;

  // 格式化 tooltip
  @Prop({ default: undefined }) formatTooltip?: (value: number) => {};

  // 是否为范围选择
  @Prop({ default: false }) range?: boolean;

  // 是否竖向模式
  @Prop({ default: false }) vertical?: boolean;

  // Slider 高度，竖向模式时必填
  @Prop({ default: undefined }) height?: string;

  // 屏幕阅读器标签
  @Prop({ default: undefined }) label?: string;

  // 输入时的去抖延迟，毫秒，仅在show-input等于true时有效
  @Prop({ default: 300 }) debounce?: number;

  // tooltip 的自定义类名
  @Prop({ default: undefined }) tooltipClass?: string;

  // 标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式
  @Prop({ default: undefined }) marks?: object;

  /**
   * 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）
   * @param value
   * @returns {number}
   */
  @Emit()
  private change(value: number) {
    return value;
  }

  /**
   * 数据改变时触发（使用鼠标拖曳时，活动过程实时触发）
   * @param value
   * @returns {number}
   */
  @Emit()
  private input(value: number) {
    return value;
  }
}
</script>
