import { IListener } from '@/interfaces/event';
import { StringUtils } from '@/utils/string-utils';

/**
 * 事件对象基类
 */
export class IEvent {
  /**
   * 事件来源对象
   */
  private mtarget: any;
  /**
   * 当前事件类型字符串
   */
  private mtype: string;
  /**
   * 事件数据
   */
  public data: any;
  /**
   * 是否允许阻止事件发起者的默认动作
   */
  private cancelable: boolean = false;
  /**
   * 是否停止继续执行标识
   */
  private stopped: boolean = false;
  /**
   * 是否阻止了发布者执行默认事件动作
   */
  private prevented: boolean = false;

  /**
   * 事件对象构造函数
   * @param {*} target 事件来源对象
   * @param {string} type 事件类型字符串
   * @param {*} data 事件数据
   * @param {boolean} [cancelable] 是否允许取消事件（事件被取消后需在发布事件的对象内停止执行默认动作，可选，默认为 false 表示不允许取消）
   */
  constructor(
    target: any,
    type: string,
    data: any,
    cancelable: boolean = false
  ) {
    this.mtarget = target;
    this.mtype = type;
    this.data = data;
    this.cancelable = cancelable;
  }

  /**
   * 事件来源对象
   */
  public get target(): any {
    return this.mtarget;
  }

  /**
   * 当前事件类型字符串
   */
  public get type(): string {
    return this.mtype;
  }

  /**
   * 是否停止继续执行标识
   */
  public get isStopped(): boolean {
    return this.stopped;
  }

  /**
   * 是否阻止了发布者执行默认事件动作
   */
  public get isPrevented(): boolean {
    return this.prevented;
  }

  /**
   * 阻止事件被继续传播，调用此方法后将停止执行其它在此侦听对象之后的优先级较低的方法
   */
  public stopPropagation(): void {
    // 设置停止执行
    this.stopped = true;
  }

  /**
   * 阻止事件发起者的默认动作（阻止后事件发布对象将取消当前事件应该执行的逻辑，仅当 cancelable 为 true 时才允许被取消，否则无效）
   */
  public preventDefault(): void {
    if (this.cancelable && !this.prevented) this.prevented = true;
  }
}

/**
 * 事件发布对象
 */
export default class Dispatcher {
  constructor() {}

  // 侦听器集合
  private listeners: Map<
    string,
    Array<{ p: number; l: IListener }>
  > = new Map();

  /**
   * 增加事件侦听对象
   * @param {string} type 事件类型
   * @param {IListener} listener 事件响应方法或执行对象
   * @param {number} priority 执行优先级（可选，默认 0，优先级相同时按侦听增加的先后顺序执行）
   */
  public on(
    type: string,
    listener: IListener,
    priority: number = 0
  ): Dispatcher {
    // 判断是否有效
    if (!type || !listener) return this;
    // 从集合获取数据
    let ls = this.listeners.get(type);
    // 判断是否有效
    if (!ls) {
      // 创建数组
      ls = [];
      // 增加到集合
      this.listeners.set(type, ls);
    }
    // 修正优先级
    if (!priority) priority = 0;
    // 增加侦听器对象
    ls.push({
      p: priority,
      l: listener,
    });
    // 按优先级排序
    if (priority !== 0) {
      ls.sort((a, b) => {
        return StringUtils.compareSort(a.p, b.p);
      });
    }
    return this;
  }

  /**
   * 移除事件侦听对象
   * @param {string} type 事件类型
   * @param {IListener} listener 事件响应方法
   * @return {boolean} 是否移除成功
   */
  public remove(type: string, listener: IListener): boolean {
    if (listener) {
      const ls = this.listeners.get(type);
      if (!ls) return false;
      let removed = false;
      for (let i = 0, c = ls.length; i < c; i++) {
        if (ls[i].l === listener) {
          ls.splice(i, 1);
          removed = true;
          break;
        }
      }
      if (!removed) return false;
      if (ls.length === 0) this.listeners.delete(type);
      return true;
    } else {
      return this.listeners.delete(type) !== null;
    }
  }

  /**
   * 判断是否已经存在事件处理对象或事件类型
   * @param {string} type 事件类型
   * @param {IListener} [listener] 事件响应方法
   * @returns {boolean} 是否已经存在事件处理对象或事件类型
   */
  public has(type: string, listener?: IListener): boolean {
    const ls = this.listeners.get(type);
    if (!ls) return false;
    if (listener) {
      for (let i = 0, c = ls.length; i < c; i++) {
        if (ls[i].l === listener) return true;
      }
      return false;
    }
    return true;
  }

  /**
   * 判断是否已经有事件侦听对象
   * @param {string} [type] 事件类型（可选，若不指定类型则返回是否存在任意类型的侦听器）
   * @returns {boolean} 是否已经有事件侦听对象
   */
  public hasType(type?: string): boolean {
    if (!type) return this.listeners.size > 0;
    const ls = this.listeners.get(type);
    return ls !== undefined && ls.length > 0;
  }

  /**
   * 发布事件处理
   * @param {IEvent} event 事件对象
   */
  public trigger(event: IEvent): void {
    // 判断是否有效
    if (!event || this.listeners.size === 0) return;
    // 获取执行器数组
    const ls = this.listeners.get(event.type);
    // 判断是否有效
    if (!ls) return;
    // 遍历执行数据
    for (let i = 0, c = ls.length; i < c; i++) {
      // 获取一个执行对象
      const listener = ls[i].l;
      // 判断是否为方法
      if (typeof listener === 'function') {
        // 直接调用
        listener(event);
      } else if (listener.onEvent) {
        // 执行对象接口方法
        listener.onEvent(event);
      }
      // 判断是否已经停止继续执行
      if (event.isStopped) return;
    }
  }
}
