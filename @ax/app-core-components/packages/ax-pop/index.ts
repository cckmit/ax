import { IPosition } from '../ax-com-core/interfaces/interfaces';
import { DialogType } from '../ax-com-core/const/enum';
import AxPopUp from './src/pop.vue';
import Vue from 'vue';

// 注册组件
const MessageBoxConstructor = Vue.extend(AxPopUp);
let instance: any = null;

// 生成div,生成实例
const initInstance = (position: IPosition) => {
  const height = position.height || 'auto';
  const width = position.width || '100%';
  const el: HTMLDivElement | undefined = initDomElement();
  if (el === undefined) {
    return;
  }
  instance = new MessageBoxConstructor({
    el,
  });
  // 定位
  const axPop = instance.$refs.ax_pop;
  axPop.style.left = position.x + 'px';
  axPop.style.top = position.y + 'px';
  axPop.style.height = height;
  axPop.style.width = width;
};

function initDomElement() {
  // 生成一个div
  const el = document.createElement('div');
  el.classList.add('ax_pop'); // 添加类名

  // 放在 body 最后面
  const app = document.querySelector('#app');
  if (app === null) {
    return;
  }
  app.appendChild(el); // 添加到body 子节点下

  return el;
}

/**
 *
 * @param Component
 * @param args
 * @param callback  回调    ( done:关闭的函数 , instance: 实例, action: DialogType 回调的类型(确认/取消/关闭)  )
 */
/**
 * 调用组件
 *
 * @param {*} Component  插入一个 vue 组件
 * @param {*} arg 传入 vue 组件的数据
 * @param {(done: any, instance: any, action: DialogType) => void} callback
 */
export function showSearchBox(
  Component: any,
  position: IPosition,
  arg: any,
  callback: (done: any, instance: any, action: DialogType) => void
) {
  // 注册一个实例
  initInstance(position);
  // 调用实例的一个方法
  instance.showSearchBox(Component, arg, callback);
}
