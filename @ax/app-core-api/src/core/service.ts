import { AxDispatcher, AxEvent } from '@ax/app-core-framework';

export class Service {
  // 事件分发器
  public static dispatcher = new AxDispatcher();

  public static redirect(data: any) {
    this.dispatcher.trigger(new AxEvent(this, 'redirect', data));
  }
}
