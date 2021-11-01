import Dispatcher, { IEvent } from '@/event';
import { ISystemModuleOptions } from '@/interfaces';

// 应用模块控制
export default class SystemModule {
  constructor(options: ISystemModuleOptions) {
    // 注册名称
    this.name = options.name;
    // 创建分发器
    this.dispatcher = new Dispatcher();
  }

  // 上报用的主系统分发器
  private emitDispatcher?: Dispatcher;

  // 子系统的事件分发器
  public dispatcher: Dispatcher;

  // 模块注册名称
  public name: string;

  /**
   * 上报消息
   * @param event
   */
  public emit(event: IEvent) {
    if (this.emitDispatcher) {
      this.emitDispatcher.trigger(event);
    } else {
      console.error('[app-core-framework]: ', '没有设置主系统的事件分发器');
    }
  }

  /**
   * 注册上报用的dispatcher
   * @param dispatcher
   */
  public setDispatcher(dispatcher: Dispatcher) {
    this.emitDispatcher = dispatcher;
  }
}
