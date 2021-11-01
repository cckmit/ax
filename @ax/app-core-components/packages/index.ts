import AxMessage from '@AxUI/ax-message';
import { VueConstructor } from 'vue';
import AxComCore from './ax-com-core';
import * as Components from './components';

import './styles/base.scss';

// 获取版本号
const { version } = require('../package.json') as { version: string };

/**
 * 注册所有组件
 * @param Vue
 * @param opts 目前还没用到
 */
function install<T>(Vue: VueConstructor /*opts?: T*/) {
  // 遍历所有组件
  Object.keys(Components).forEach((name) => {
    // 注册组件
    Vue.component(name, Components[name as keyof typeof Components]);
  });
  // 注册通知消息类的方法
  Vue.prototype.$AxMessage = AxMessage;
}

const AxUI = {
  install,
  version,
};

//#region 导出
export {
  // 导出核心支持（interface, type, enum，function等）
  AxComCore,
  // 消息模块
  AxMessage,
};

// 导出所有组件
export * from './components';

// 导出整个模块
export default AxUI;
//#endregion
