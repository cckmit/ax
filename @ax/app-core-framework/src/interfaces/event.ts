import { IEvent } from '@/event';

/**
 * 事件侦听方法
 * @param {IEvent} evt 事件对象
 */
export type IFuncListener = (evt: IEvent) => void;

/**
 * 事件侦听对象接口
 */
export interface IObjectListener {
  /**
   * 事件侦听执行方法
   * @param {IEvent} evt 事件对象
   */
  onEvent(evt: IEvent): void;
}

/**
 * 事件侦听对象类型
 */
export type IListener = IFuncListener | IObjectListener;
