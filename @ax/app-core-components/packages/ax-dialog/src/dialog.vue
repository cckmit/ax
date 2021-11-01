<template>
  <!-- :append-to-body="true" -->
  <el-dialog
    ref="el-dialog"
    class="ax_dialog"
    :class="{ not_modal: !modal }"
    :title="title"
    :visible="true"
    :custom-class="
      [
        showFooterLine ? 'show_footer_line' : '',
        contentLoading ? 'show_content_loading' : '',
        customClass,
      ].join(' ')
    "
    :width="contentLoading ? '30%' : width"
    :fullscreen="fullscreen"
    :top="top"
    :modal="modal"
    :lock-scroll="lockScroll"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :show-close="showClose"
    :before-close="handleClose"
    :center="center"
    :append-to-body="true"
    @open="open"
    @opened="opened"
    @close="close"
    @closed="closed"
  >
    <!--region 标题栏-->
    <template #title>
      <slot name="title"></slot>
    </template>
    <!--endregion-->

    <!--region 内容区-->
    <slot></slot>
    <!--endregion-->

    <!--region 整体加载中-->
    <div class="content_loading" v-if="contentLoading">
      <div class="loading_bar"></div>
    </div>
    <!--endregion-->

    <!--region 底部栏-->
    <div
      v-if="showFooter && !contentLoading"
      slot="footer"
      class="dialog_footer"
    >
      <template v-if="$slots.foot !== undefined">
        <slot name="foot"></slot>
      </template>
      <template v-else>
        <!-- 确认 -->
        <ax-button
          :type="type"
          class="dialog_button"
          :loading="loading"
          @click="okClose"
        >
          {{ axLang.text('dialog.footer.Yes') }}
        </ax-button>
        <!-- 取消 -->
        <ax-button type="info" class="dialog_button" @click="cancelClose">
          {{ axLang.text('dialog.footer.No') }}
        </ax-button>
      </template>
    </div>
    <!--endregion-->
  </el-dialog>
</template>

<script lang="ts">
import { AxDomUtils } from '@ax/app-core-framework';
import AxComCore from '@AxUI/ax-com-core';
import AxButton from '@AxUI/ax-button';
import { Dialog } from 'element-ui';
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {
    [Dialog.name]: Dialog,
    AxButton,
  },
})
export default class AxDialog extends Vue {
  //#region Props
  /**
   * button是否正在 loading
   */
  @Prop({ default: true })
  private showFooter?: boolean;

  /**
   * 传入的高度
   */
  @Prop({ default: undefined })
  private height?: number;

  /**
   * button是否正在 loading
   */
  @Prop({ default: false })
  private loading?: boolean;

  /**
   * 标题显示文字
   */
  @Prop({ default: undefined })
  private title?: string;

  /**
   * 显示 dialog (默认为 false 不显示; 注意: 每次单匡关闭时 都需要在父组件中将 visible 重置)
   */
  @Prop({ default: undefined })
  private visible?: boolean;

  /**
   * dialog 的宽度 (默认为 50%)
   */
  @Prop({ default: '68rem' })
  private width?: string;

  /**
   * Dialog 的自定义类名
   */
  @Prop({ default: '' })
  private customClass?: string;

  /**
   * 是否为全屏 Dialog (默认为 false 不全屏)
   */
  @Prop({ default: false, type: Boolean })
  private fullscreen?: boolean;

  /**
   * Dialog CSS 中的 margin-top 值 (默认为 15vh)
   */
  @Prop({ default: '' })
  private top?: string;

  /**
   * 是否需要遮罩层 (默认为 true)
   */
  @Prop({ default: true, type: Boolean })
  private modal?: boolean;

  /**
   * 是否在 Dialog 出现时将 body 滚动锁定 (默认为 true)
   */
  @Prop({ default: true, type: Boolean })
  private lockScroll?: boolean;

  /**
   * 是否可以通过点击 modal 关闭 Dialog (默认为 true)
   */
  @Prop({ default: false, type: Boolean })
  private closeOnClickModal?: boolean;

  /**
   * 是否可以通过按下 ESC 关闭 Dialog (默认为 true)
   */
  @Prop({ default: undefined })
  private closeOnPressEscape?: boolean;

  /**
   * 是否显示关闭按钮 (默认为 true)
   */
  @Prop({ default: undefined })
  private showClose?: boolean;

  /**
   * 是否对头部和底部采用居中布局 (默认为 false)
   */
  @Prop({ default: undefined })
  private center?: boolean;

  /**
   * 是否显示底部栏间隔线
   */
  @Prop({ default: true, type: Boolean })
  private showFooterLine?: boolean;

  /**
   * 真否显示整体加载条
   */
  @Prop({ default: false, type: Boolean })
  private contentLoading?: boolean;
  //#endregion

  //#region Watch
  @Watch('visible')
  private visibleWatch(val: boolean) {
    this.dialogVisible = val;
    if (val) {
      // 要重新计算窗口大小
      this.onWindowResize();
    }
  }
  //#endregion

  //#region Public Methods
  /**
   * 获取焦点方法
   */
  public focus(): AxDialog {
    // 获取元素对象
    const el = this.$refs['el-dialog'];
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
   * 重设弹窗大小
   */
  public resize() {
    this.onWindowResize();
  }
  //#endregion

  //#region Emit
  /**
   * 关闭前的回调, 在外层必须关闭 (在外层关闭, 直接调用 done() 即可)
   */
  @Emit('beforeClose')
  private handleClose(done: any): void {
    // 不要关闭
    done();
  }

  /**
   * dialog 打开的回调
   */
  @Emit('open')
  private open() {}

  /**
   * dialog 打开动画结束时的回调
   */
  @Emit('opened')
  private opened() {}

  /**
   * dialog 关闭的回调 (不区分按钮)
   */
  @Emit('close')
  private close() {}

  /**
   * dialog 关闭动画结束时的回调 (不区分按钮)
   */
  @Emit('closed')
  private closed() {}
  //#endregion

  //#region Data
  // 国际化
  private axLang = AxComCore.getAxLang();

  // 是否显示
  private dialogVisible: boolean = false;

  // 按钮类型
  private type: string = AxComCore.ButtonType.PRIMARY;

  // 是否正在拖动对话框标识
  private isDraggingTitle = false;

  // 释放移动端模式标识
  private isTouch = false;

  // 鼠标开始移动位置
  private deltaX = 0;
  private deltaY = 0;
  //#endregion

  //#region Methods
  /**
   * 点击确定按钮事件 (区分按钮, 且只是确定按钮的事件)
   */
  private okClose(e: any) {
    this.$emit('okClose', e);
  }

  /**
   * 点击取消按钮事件
   * @param e
   */
  private cancelClose(e: any) {
    (this.$refs['el-dialog'] as Vue).$emit('close', e);
  }

  /**
   * 窗口大小改变的处理, 避免因为修改高度后,又触发 resize 函数,导致循环操作
   */
  private onWindowResize() {
    // 判断 isResize 是否true
    // 是 true,就改 false
    // noHeight 的时候, false=>true
    // 进行修改
    this.$nextTick(() => {
      // 获取对话框元素
      const dragDom = document.querySelector('.el-dialog') as HTMLElement;

      const pos = AxDomUtils.getDomPosition(dragDom);
      const left = pos.left;
      const top = pos.top;
      const wsize = AxDomUtils.getWindowSize();
      const fixL = (wsize.width - dragDom.offsetWidth) / 2;
      const fixT = (wsize.height - dragDom.offsetHeight) / 2;
      const minL = 40 - dragDom.offsetWidth - fixL;
      const maxL = wsize.width - 30 - fixL;
      const minT = -fixT;
      const maxT = wsize.height - 30 - fixT;
      const nleft = left < minL ? minL : left > maxL ? maxL : left;
      const ntop = top < minT ? minT : top > maxT ? maxT : top;
      // 判断是否需要重新设置
      if (nleft !== left) {
        dragDom.style.left = nleft + 'px';
      }
      if (ntop !== top) {
        dragDom.style.top = ntop + 'px';
      }
    });
  }

  /**
   * 对话框头部拖动事件
   * @param evt
   * @returns {boolean}
   */
  private onMouseDown(evt: any) {
    evt.preventDefault();
    // evt.stopPropagation();
    const e = AxDomUtils.getDomEventTarget(evt);
    if (!e || !e.tagName) return true;
    const tg = e.tagName.toUpperCase();
    if (
      tg === 'BUTTON' ||
      (e.parentElement && e.parentElement.tagName.toUpperCase() === 'BUTTON')
    )
      return true;
    this.isDraggingTitle = true;
    this.isTouch = evt.type === 'touchstart';
    const ev = this.isTouch ? evt.touches.item(0) : evt;
    // 获取弹框头部
    const dragDom = (this.$refs['el-dialog'] as Vue).$el.querySelector(
      '.el-dialog'
    ) as HTMLElement;
    // 获取对话框元素
    const dialogHeaderEl = dragDom.querySelector(
      '.el-dialog__header'
    ) as HTMLElement;
    // 获取弹窗中心点在坐标系的位置
    const pos = AxDomUtils.getDomPosition(dialogHeaderEl);
    // 鼠标到中心点的距离
    this.deltaX = pos.left - ev.clientX;
    this.deltaY = pos.top - ev.clientY;
    // 判断释放移动端事件
    if (this.isTouch) {
      AxDomUtils.addDomEventListener(document, 'touchmove', this.onMouseMove);
      AxDomUtils.addDomEventListener(document, 'touchend', this.onMouseUp);
    } else {
      AxDomUtils.addDomEventListener(document, 'onmousemove', this.onMouseMove);
      AxDomUtils.addDomEventListener(document, 'onmouseup', this.onMouseUp);
    }
    return true;
  }

  /**
   * 鼠标移动事件
   * @param evt1
   * @returns {boolean}
   */
  private onMouseMove(evt1: any) {
    // 获取弹框头部
    const dragDom = (this.$refs['el-dialog'] as Vue).$el.querySelector(
      '.el-dialog'
    ) as HTMLElement;
    // 获取对话框元素
    const dialogHeaderEl = dragDom.querySelector(
      '.el-dialog__header'
    ) as HTMLElement;

    if (!this.isDraggingTitle) return true;
    let left;
    let top;
    const ev1 = this.isTouch ? evt1.touches.item(0) : evt1;
    // 计算边距
    left = ev1.clientX + this.deltaX;
    top = ev1.clientY + this.deltaY;
    // 修正超出范围的数据
    const wsize = AxDomUtils.getWindowSize();
    // 左侧可允许的最大最小值
    const leftMin = 0;
    const leftMax = wsize.width - dragDom.offsetWidth;
    const topMin = 0;
    // 顶部可允许的最大最小值
    const topMax = wsize.height - dragDom.offsetHeight;
    // 判断超出部分
    left = left <= leftMin ? leftMin : left >= leftMax ? leftMax : left;
    top = top <= topMin ? topMin : top >= topMax ? topMax : top;
    // 设置对话框位置
    dragDom.style.left = `${left}px`;
    dragDom.style.top = `${top}px`;
    // return AxDomUtils.cancelDomEvent(ev1);
  }

  // 文档对象按键释放事件
  private onMouseUp() {
    if (!this.isDraggingTitle) return true;
    this.isDraggingTitle = false;
    if (this.isTouch) {
      AxDomUtils.removeDomEventListener(
        document,
        'touchmove',
        this.onMouseMove
      );
      AxDomUtils.removeDomEventListener(document, 'touchend', this.onMouseUp);
    } else {
      AxDomUtils.removeDomEventListener(
        document,
        'onmousemove',
        this.onMouseMove
      );
      AxDomUtils.removeDomEventListener(document, 'onmouseup', this.onMouseUp);
    }
    return true;
  }
  //#endregion

  //#region 生命周期
  /**
   * mounted
   */
  private mounted() {
    // 初始化大小
    this.onWindowResize();
    // 增加窗口大小变化事件
    AxDomUtils.addDomEventListener(window, 'resize', this.onWindowResize);
    // 获取弹框
    const dialogHeaderEl = (this.$refs['el-dialog'] as Vue).$el.querySelector(
      '.el-dialog__header'
    ) as HTMLElement;
    // 增加对话框头部拖动事件
    AxDomUtils.addDomEventListener(
      dialogHeaderEl,
      ['onmousedown', 'touchstart'],
      this.onMouseDown
    );
  }

  /**
   * beforeDestroy
   */
  private beforeDestroy() {
    // 移除窗口大小改变响应
    AxDomUtils.removeDomEventListener(window, 'resize', this.onWindowResize);
    // 移除文档按键释放响应
    AxDomUtils.removeDomEventListener(document, 'onmouseup', this.onMouseUp);
  }
  //#endregion
}
</script>
