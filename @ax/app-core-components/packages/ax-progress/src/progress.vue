<template>
  <div class="ax_progress">
    <el-progress
      ref="el_progress"
      class="progress"
      :percentage="percentage"
      :type="type"
      :stroke-width="strokeWidth"
      :status="status"
      :color="color"
      :show-text="showText"
      :text-inside="textInside"
      :width="width"
      :format="format"
      :stroke-linecap="strokeLinecap"
    ></el-progress>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Progress } from 'element-ui';

@Component({
  components: {
    [Progress.name]: Progress,
  },
})
export default class AxProgress extends Vue {
  /**
   * 百分比（必填） 0-100
   */
  @Prop({ default: 0 })
  private percentage?: number;
  /**
   * 进度条类型  line/circle
   */
  @Prop({ default: 'line' })
  private type?: string;
  /**
   * 进度条的宽度，单位 px
   */
  @Prop({ default: 6 })
  private strokeWidth?: number;

  /**
   * 进度条当前状态  success/exception/text
   */
  @Prop({ default: undefined })
  private status?: string | undefined;

  /**
   * 进度条背景色（会覆盖 status 状态颜色）
   */
  @Prop({ default: undefined })
  private color?: string | undefined;

  /**
   * circle/dashboard 类型路径两端的形状
   */
  @Prop({ default: undefined })
  private strokeLinecap?: string;

  /**
   *  是否显示进度条文字内容
   */
  @Prop({ default: true })
  private showText?: boolean;

  /**
   *  进度条未充满的底部颜色
   */
  @Prop()
  private strokeColor?: string;

  /**************type 不一樣的時候**************/
  /**
   * 进度条显示文字内置在进度条内（只在 type=line 时可用）
   */
  @Prop({ default: false })
  private textInside?: boolean;

  /**
   * 环形进度条画布宽度（只在 type=circle 时可用）
   */
  @Prop({ default: 126 })
  private width?: number;

  /**
   * 指定进度条文字内容
   */
  @Prop({ default: undefined })
  private format?: () => string;

  //#region 生命周期
  private mounted() {
    if(this.strokeColor) {
      //修改进度条底色
    (((this.$refs.el_progress as Vue).$el.querySelector('.el-progress-circle') as Element).querySelector('.el-progress-circle__track') as any).style.stroke = this.strokeColor;

    }
  }
  //#endregion
}
</script>
