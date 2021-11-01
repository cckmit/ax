<template>
  <div
    class="ax_split"
    :class="[
      { split_horizontal: type === 'horizontal' },
      { split_vertical: type === 'vertical' },
      { split_resizeable: resizeable },
    ]"
    ref="refSplit"
  >
    <div class="split_first" :style="firstSize">
      <slot name="left"></slot>
    </div>
    <div
      :class="[
        { split_hor: type === 'horizontal' },
        { split_ver: type === 'vertical' },
      ]"
      @mousedown="startResize($event)"
    ></div>
    <div class="split_second" :style="secondSize">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { AxDomUtils, AxStyleUtils } from '@ax/app-core-framework';
import { Component, Prop, Ref, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AxSplit extends Vue {
  //#region Props
  /**
   * 分栏排版方向 (horizontal 或者 vertical, 默认 horizontal 水平排版)
   */
  @Prop({ default: 'horizontal' })
  private type!: string;

  /**
   * 默认分割线位置，默认 20，单位百分比
   */
  @Prop({ default: '20%' })
  private size!: string;

  /**
   * 第一个分栏最小尺寸,默认 10%
   */
  @Prop({ default: '10%' })
  private minSize!: string;

  /**
   * 第一个分栏最大尺寸,默认 90%
   */
  @Prop({ default: '90%' })
  private maxSize!: string;

  /**
   * 是否支持可调整栏目大小
   */
  @Prop({ default: true, type: Boolean })
  private resizeable!: boolean;
  //#endregion

  //#region Data

  // 页面宽度
  private width: number = 0;

  // 页面高度
  private height: number = 0;

  // 第一栏大小
  private leftSize: number = 0;

  // 第二栏大小
  private rightSize: number = 0;
  //#endregion

  //#region Computed
  /**
   * 第一栏大小
   */
  private get firstSize() {
    return this.isHorizontal()
      ? `max-width: ${this.maxSize}; min-width: ${this.minSize}; width: ${this.leftSize}%`
      : `max-height: ${this.maxSize}; min-height: ${this.minSize}; height: ${this.leftSize}%`;
  }

  /**
   * 第一栏大小
   */
  private get secondSize() {
    return this.isHorizontal()
      ? `max-width: ${this.maxSize}; min-width: ${this.minSize}; width: ${this.rightSize}%`
      : `max-height: ${this.maxSize}; min-height: ${this.minSize}; height: ${this.rightSize}%`;
  }
  //#endregion

  //#region Methods

  /**
   * 开始resize
   * @param event
   */
  private startResize(event: MouseEvent) {
    if (event.button !== 0) return;
    if (!this.resizeable) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    AxDomUtils.addDomEventListener(document, 'mousemove', this.drag);
    AxDomUtils.addDomEventListener(document, 'mouseup', this.drop);
  }

  /**
   * 拖放结束的处理
   * @param evt
   */
  private drop(evt: Event) {
    const event = evt as MouseEvent;
    if (event.button !== 0) return;
    AxDomUtils.removeDomEventListener(document, 'mousemove', this.drag);
    AxDomUtils.removeDomEventListener(document, 'mouseup', this.drop);
  }

  /**
   * 拖放的处理
   * @param evt
   */
  private drag(evt: Event) {
    const event = evt as MouseEvent;
    if (event.button !== 0) return;
    // 默认是水平排版
    const h = this.isHorizontal();
    const splitter =
      (h
        ? this.$el.children[1].clientWidth
        : this.$el.children[1].clientHeight) / 2;
    const parentRect = this.$el.getBoundingClientRect();
    const splitSize = h
      ? ((event.x - parentRect.left - splitter) / this.$el.clientWidth) * 100
      : ((event.y - parentRect.top - splitter) / this.$el.clientHeight) * 100;
    this.leftSize = splitSize;
    this.rightSize = 100 - splitSize - 1;
  }

  /**
   * 是否是水平排版
   * @returns {boolean}
   */
  private isHorizontal() {
    return this.type === 'horizontal';
  }

  /**
   * 获取百分比
   * @param value
   * @returns {number}
   */
  private getPercent(value: string): number {
    let member = 0;
    // 如果是rem
    if (/\d+rem/.test(value)) {
      member =
        (AxStyleUtils.remToPx(value) /
          (this.isHorizontal() ? this.width : this.height)) *
        100;
    }
    // 如果是px
    else if (/\d+px/.test(value)) {
      member =
        (parseInt(value) / (this.isHorizontal() ? this.width : this.height)) *
        100;
    }
    // 其他情况视为百分比
    else {
      member = parseInt(value);
    }
    return member;
  }
  //#endregion

  //#region 提供的方法

  /**
   * 设置大小
   * @param val
   */
  public setSize(val: string) {
    // 获取面板宽高
    this.width = this.$el.clientWidth;
    this.height = this.$el.clientHeight;
    // 设置初始值
    const left = this.getPercent(val);
    this.leftSize = left;
    this.rightSize = 100 - left - 1;
  }

  //#endregion

  //#region 生命周期
  // 组件创建之前处理
  private beforeCreate() {
    // 判断是否存在默认插槽
    if (this.$slots.default) {
      // 判断插槽数量
      if (this.$slots.default.length > 1) {
        // 设置默认左边的插槽
        this.$slots.left = [this.$slots.default[0]];
        // 设置右边的插槽
        this.$slots.right = [this.$slots.default[1]];
      }
    }
  }

  /**
   * 界面更新前
   */
  private beforeUpdate() {
    // 判断是否存在默认插槽
    if (this.$slots.default) {
      // 判断插槽数量
      if (this.$slots.default.length > 1) {
        // 设置默认左边的插槽
        this.$slots.left = [this.$slots.default[0]];
        // 设置右边的插槽
        this.$slots.right = [this.$slots.default[1]];
      }
    }
  }
  //#endregion

  //#region 生命周期
  private mounted() {
    this.setSize(this.size);
  }
  //#endregion
}
</script>
