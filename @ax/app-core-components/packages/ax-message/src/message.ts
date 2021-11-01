import { AxDomUtils } from '@ax/app-core-framework';
import AxComCore from '@AxUI/ax-com-core';
import { Loading, Message, MessageBox, Notification } from 'element-ui';
import {
  ElMessageBoxComponent,
  MessageBoxCloseAction,
} from 'element-ui/types/message-box';
import { Vue } from 'vue-property-decorator';

import MessageButtonType = AxComCore.MessageButtonType;
import MessageStyle = AxComCore.MessageStyle;
import IAlertOptions = AxComCore.IAlertOptions;
import getAxLang = AxComCore.getAxLang;

/* -------------------------------------- 信息对话框 -------------------------------------- */

/**
 * 显示弹出确认窗口处理
 * @param {string} message 显示信息
 * @param {number} [buttons] 显示的按钮（可选，默认: MessageButtonType.OK，多个按钮使用或运算符设置）
 * @param {number} [style] 信息类型（可选，默认: MessageStyle.TIPS）
 * @param options [IAlertOptions] 确认窗口选项（可选）
 * @returns {Promise<number>} 返回点击的按钮类型（对应: MessageButtonType.XXXX）
 */
export function showAlert(
  message: string,
  buttons: MessageButtonType = MessageButtonType.OK,
  style: MessageStyle = MessageStyle.TIPS,
  options?: IAlertOptions
): Promise<number> {
  // 返回异步处理对象
  return new Promise((resolve, reject) => {
    // 获取语言对象
    const lang = getAxLang();
    let drags: Drags;
    // 附加参数
    const title = getTitle(options ? options.title : undefined, style);
    const asHTML = options
      ? options.asHTML || options.asHTML === undefined
      : true;
    const showClose = options
      ? options.showClose || options.showClose === undefined
      : true;
    const iconClass = options ? options.iconClass : undefined;
    // 显示提示框
    MessageBox.alert(message, {
      title,
      dangerouslyUseHTMLString: asHTML,
      type: getIconType(style),
      customClass: 'ax_alert',
      iconClass,
      showClose:
        showClose ||
        (buttons & AxComCore.MessageButtonType.CLOSE) ===
          AxComCore.MessageButtonType.CLOSE,
      showConfirmButton:
        (buttons & AxComCore.MessageButtonType.OK) ===
          AxComCore.MessageButtonType.OK ||
        (buttons & AxComCore.MessageButtonType.YES) ===
          AxComCore.MessageButtonType.YES,
      confirmButtonText:
        (buttons & AxComCore.MessageButtonType.YES) ===
        AxComCore.MessageButtonType.YES
          ? lang.text('msg.button.yes')
          : lang.text('msg.button.ok'),
      showCancelButton:
        (buttons & AxComCore.MessageButtonType.CANCEL) ===
          AxComCore.MessageButtonType.CANCEL ||
        (buttons & AxComCore.MessageButtonType.NO) ===
          AxComCore.MessageButtonType.NO,
      cancelButtonText:
        (buttons & AxComCore.MessageButtonType.NO) ===
        AxComCore.MessageButtonType.NO
          ? lang.text('msg.button.no')
          : lang.text('msg.button.cancel'),
      cancelButtonClass: 'ax_alert_cancel',
      callback: (
        action: MessageBoxCloseAction,
        instance: ElMessageBoxComponent
      ) => {
        drags.remove();
        // 返回操作类型
        resolve(getResultType(action, buttons));
      },
    });
    // 为了保证MessageBox已经显示出来，否则拿不到dom
    setTimeout(() => {
      drags = new Drags();
    }, 0);
  });
}

/**
 * 获取标题文本
 * @param {string} [title] 当前设置的标题文本
 * @param {number} [style] 当前窗口样式
 * @returns {string} 标题文本结果
 */
function getTitle(title?: string, style?: number): string {
  // 判断是否存在标题
  if (title) return title;
  // 获取语言对象
  const lang = AxComCore.getAxLang();
  // 判断样式
  switch (style) {
    case AxComCore.MessageStyle.INFO:
      return lang.text('msg.style.info');
    case AxComCore.MessageStyle.SUCCESS:
      return lang.text('msg.style.success');
    case AxComCore.MessageStyle.WARNING:
      return lang.text('msg.style.warning');
    case AxComCore.MessageStyle.ERROR:
      return lang.text('msg.style.error');
    default:
      return lang.text('msg.style.tips');
  }
}

/**
 * 获取图标类型字符串处理
 * @param {number} icon 图标类型
 * @returns {string|undefined} 类型名称
 */
function getIconType(icon: number): any {
  // 判断按钮类型(success / info / warning / error)
  switch (icon) {
    case AxComCore.MessageStyle.SUCCESS:
      return 'success';
    case AxComCore.MessageStyle.INFO:
      return 'info';
    case AxComCore.MessageStyle.WARNING:
      return 'warning';
    case AxComCore.MessageStyle.ERROR:
      return 'error';
    default:
      return undefined;
  }
}

/**
 * 获取结果类型处理
 * @param {MessageBoxCloseAction} action 当前操作
 * @param {number} buttons 按钮类型
 * @returns {number} 结果类型
 */
function getResultType(action: MessageBoxCloseAction, buttons: number): number {
  if (action === 'confirm')
    return (buttons & AxComCore.MessageButtonType.OK) ===
      AxComCore.MessageButtonType.OK
      ? AxComCore.MessageButtonType.OK
      : AxComCore.MessageButtonType.YES;
  if (action === 'cancel')
    return (buttons & AxComCore.MessageButtonType.CANCEL) ===
      AxComCore.MessageButtonType.CANCEL
      ? AxComCore.MessageButtonType.CANCEL
      : AxComCore.MessageButtonType.NO;
  return AxComCore.MessageButtonType.CLOSE;
}

/* -------------------------------------- 加载遮罩 -------------------------------------- */

/**
 * 显示加载图标遮罩处理
 * @param target  {(Vue | HTMLElement)} [target] 需要覆盖的元素或组件（可选）
 * @param text {string} [text] 加载图标下显示的文字（可选）
 * @param iconClass {string} [iconClass] 加载图标样式类（可选）
 * @param body
 * @param lock
 * @param background
 * @returns {ICloseHandler} 关闭处理对象
 */
export function showLoading(
  data:
    | {
        target?: Vue | HTMLElement | string;
        text?: string;
        iconClass?: string;
        body?: boolean;
        lock?: boolean;
        background?: string;
      }
    | undefined
): AxComCore.ICloseHandler {
  if (!data) {
    return Loading.service({});
  }
  const {
    target,
    text,
    iconClass,
    body = false,
    lock = false,
    background,
  } = data;
  // 获取元素对象
  const el = (
    target && target instanceof Vue ? (target as Vue).$el : target
  ) as HTMLElement;
  return Loading.service({
    customClass: 'ax_loading',
    spinner: iconClass,
    target: el ? el : undefined,
    fullscreen: !el,
    text,
    body,
    lock,
    background,
  });
}

/* -------------------------------------- 通知信息 -------------------------------------- */

/**
 * 显示提示信息面板
 * @param {string} text 消息文本
 * @param {number} [timeout=5000] 信息隐藏超时时间（毫秒，默认: 5000 毫秒）
 * @param {number} [style=AxComCore.MessageStyle.TIPS] 信息及图标类型（可选，默认: AxComCore.MessageStyle.TIPS）
 * @param {number} [positon=AxComCore.NotifyPosition.TOP_MIDDLE] 信息位置（可选，默认: AxComCore.NotifyPosition.TOP_MIDDLE）
 * @param {INotifyOptions} [options] 信息面板可选参数
 * @returns {ICloseHandler} 关闭处理对象
 */
export function showNotify(
  text: string,
  timeout: number = 5000,
  style: number = AxComCore.MessageStyle.TIPS,
  positon: number = AxComCore.NotifyPosition.TOP_MIDDLE,
  options?: AxComCore.INotifyOptions
): AxComCore.ICloseHandler {
  // 附加参数
  const title = getTitle(options ? options.title : undefined, style);
  const asHTML = options
    ? options.asHTML || options.asHTML === undefined
    : true;
  const showClose = options
    ? options.showClose || options.showClose === undefined
    : true;
  const offset = options ? options.offset || 0 : 0;
  const iconClass = options ? options.iconClass : undefined;
  // 判断类型
  if (positon === AxComCore.NotifyPosition.TOP_MIDDLE) {
    // 顶部消息
    return Message({
      message: text,
      customClass: 'ax_notify',
      type: getIconType(style),
      dangerouslyUseHTMLString: asHTML,
      showClose,
      iconClass,
      duration: timeout,
    });
  } else {
    // 其它位置信息，分析位置
    let pos: any;
    switch (positon) {
      case AxComCore.NotifyPosition.TOP_RIGHT:
        pos = 'top-right';
        break;
      case AxComCore.NotifyPosition.TOP_LEFT:
        pos = 'top-left';
        break;
      case AxComCore.NotifyPosition.BOTTOM_RIGHT:
        pos = 'bottom-right';
        break;
      case AxComCore.NotifyPosition.BOTTOM_LEFT:
        pos = 'bottom-left';
        break;
      default:
        pos = 'top-right';
        break;
    }
    // 返回提示信息对象
    return Notification({
      title,
      message: text,
      customClass: 'ax_notify',
      iconClass,
      type: getIconType(style),
      dangerouslyUseHTMLString: asHTML,
      duration: timeout,
      position: pos,
      showClose,
      offset,
    });
  }
}

/**
 * 将数据拼接成字符串显示.如果是大于两条,只显示两条
 * @param nameList
 */
export function getValueText(nameList: string[]): string {
  // 需要的是通过 ids 知道对应数据的 name
  // const nameList = this.table.getAttrByIds(this.tableSelectedIds, 'name');
  let valueText = '';
  // 如果多于两个,就只显示两个
  if (nameList.length > 2) {
    nameList.length = 2;
  }
  return (valueText = nameList.map((item) => `"${item}"`).join('、'));
}

class Drags {
  public dialogHeaderEl: HTMLElement | null;
  public dialogEl: HTMLElement | null;
  private isDragingTitle: boolean;
  // 释放移动端模式标识
  private isTouch: boolean;
  // 鼠标开始移动位置
  private deltaX: number;
  private deltaY: number;

  constructor() {
    this.dialogHeaderEl = document.querySelector('.el-message-box__header');
    this.dialogEl = this.dialogHeaderEl
      ? this.dialogHeaderEl.parentElement
        ? this.dialogHeaderEl.parentElement
        : null
      : null;
    this.isDragingTitle = false;
    this.isTouch = false;
    this.deltaX = 0;
    this.deltaY = 0;
    this.init();
    if (!this.dialogHeaderEl && !this.dialogEl) {
      return;
    }
  }

  public init() {
    if (this.dialogEl && this.dialogHeaderEl) {
      this.dialogEl.style.left = 0 + 'px';
      this.dialogEl.style.top = 0 + 'px';
      AxDomUtils.addDomEventListener(
        this.dialogHeaderEl,
        ['onmousedown', 'touchstart'],
        this.onMouseDown
      );
    }
  }

  // 对话框头部拖动事件
  private onMouseDown(evt: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const e = AxDomUtils.getDomEventTarget(evt);
    if (!e || !e.tagName) return true;
    const tg = e.tagName.toUpperCase();
    if (
      tg === 'BUTTON' ||
      (e.parentElement && e.parentElement.tagName.toUpperCase() === 'BUTTON')
    )
      return true;
    this.isDragingTitle = true;
    this.isTouch = evt.type === 'touchstart';
    const ev = this.isTouch ? evt.touches.item(0) : evt;
    // 获取弹框头部
    const dragDom = document.querySelector('.el-message-box') as HTMLElement;
    // 获取对话框元素
    const dialogHeaderEl = dragDom.querySelector(
      '.el-message-box__header'
    ) as HTMLElement;

    const pos = AxDomUtils.getDomPosition(dialogHeaderEl);
    // 获取组件中间相对位置
    const wsize = AxDomUtils.getWindowSize();
    //  鼠标到头部的距离
    this.deltaX =
      ev.clientX - pos.left + (wsize.width - dragDom.offsetWidth) / 2;
    this.deltaY =
      ev.clientY - pos.top + (wsize.height - dragDom.offsetHeight) / 2;
    // 判断释放移动端事件
    if (this.isTouch) {
      AxDomUtils.addDomEventListener(document, 'touchmove', onMouseMove);
      AxDomUtils.addDomEventListener(document, 'touchend', onMouseUp);
    } else {
      AxDomUtils.addDomEventListener(document, 'onmousemove', onMouseMove);
      AxDomUtils.addDomEventListener(document, 'onmouseup', onMouseUp);
    }

    function onMouseMove(evt1: any) {
      // 获取弹框头部
      const dragDom = document.querySelector('.el-message-box') as HTMLElement;

      if (!self.isDragingTitle) return true;
      let left;
      let top;
      const ev1 = self.isTouch ? evt1.touches.item(0) : evt1;
      left = ev1.clientX - self.deltaX;
      top = ev1.clientY - self.deltaY;
      // 修正超出范围的数据
      const wsize = AxDomUtils.getWindowSize();
      const fixL = (wsize.width - dragDom.offsetWidth) / 2;
      const fixT = (wsize.height - dragDom.offsetHeight) / 2;
      const minL = 40 - dragDom.offsetWidth - fixL;
      const maxL = wsize.width - 30 - fixL;
      const minT = -fixT;
      const maxT = wsize.height - 30 - fixT;
      left = left < minL ? minL : left > maxL ? maxL : left;
      top = top < minT ? minT : top > maxT ? maxT : top;
      // 设置对话框位置
      dragDom.style.left = left + 'px';
      dragDom.style.top = top + 'px';
      return AxDomUtils.cancelDomEvent(evt1);
    }

    function onMouseUp() {
      if (!self.isDragingTitle) return true;
      self.isDragingTitle = false;
      if (self.isTouch) {
        AxDomUtils.removeDomEventListener(document, 'touchmove', onMouseMove);
        AxDomUtils.removeDomEventListener(document, 'touchend', onMouseUp);
      } else {
        AxDomUtils.removeDomEventListener(document, 'onmousemove', onMouseMove);
        AxDomUtils.removeDomEventListener(document, 'onmouseup', onMouseUp);
      }
      return true;
    }
    return true;
  }

  public remove() {
    return this.dialogHeaderEl
      ? AxDomUtils.removeDomEventListener(
          this.dialogHeaderEl,
          ['onmousedown', 'touchstart'],
          this.onMouseDown
        )
      : false;
  }
}
