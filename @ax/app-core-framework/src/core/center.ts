import SystemModule from '@/core/module';
import Dispatcher, { IEvent } from '@/event';

// 项目中心控制
export default class SystemCenter {
  constructor() {}

  // 主系统分发器
  public static dispatcher: Dispatcher = new Dispatcher();

  // 已注册的模块列表
  private static moduleList: Map<string, SystemModule> = new Map([]);

  /**
   * 获取模块 TODO：如果有创建参数的话后续添加
   * @param name
   * @returns {SystemModule}
   */
  public static getModule(name: string) {
    // 获取应用模块
    let module = this.moduleList.get(name);
    // 如果没有注册
    if (!module) {
      // 新建模块
      module = new SystemModule({ name });
      // 设置主系统的事件分发器
      module.setDispatcher(this.dispatcher);
      // 加入列表
      this.moduleList.set(name, module);
    }
    return module;
  }

  /**
   * 安装注册模块
   * @param module
   */
  public static registerModule(module: SystemModule) {
    // 设置主系统的事件分发器
    module.setDispatcher(this.dispatcher);
  }

  /**
   * 给模块广播消息
   * @param event
   * @param target
   */
  public static broadcast(event: IEvent, target?: string[]) {
    // 为空时为全部广播，否则遍历处理
    if (!target) {
      Array.from(this.moduleList.values()).forEach((module) => {
        module.dispatcher.trigger(event);
      });
    } else {
      // 遍历目标
      target.forEach((t) => {
        // 获取对应的模块
        const module: SystemModule | undefined = this.moduleList.get(t);
        // 下发消息
        if (module) {
          module.dispatcher.trigger(event);
        }
      });
    }
  }
}
