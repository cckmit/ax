<template>
  <div ref="ax_pop" class="ax_pop">
    <div ref="pop-close" class="pop-close" @click="closeSearchBox">
      <i class="el-dialog__close el-icon el-icon-close"></i>
    </div>
    <!-- 动态 内容 -->
    <component :is="viewName" ref="comp" :prop="args"></component>
  </div>
</template>

<script lang="ts">
import AxComCore from '@AxUI/ax-com-core';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AxPop extends Vue {
  // -----------------------test:-------------------------
  private viewName = '';
  private args: any = {};
  private callback: (
    done: () => void,
    instance?: any,
    action?: number
  ) => void = () => {};

  /**
   * 关闭弹窗按钮
   */
  public closeSearchBox() {
    this.callback(this.done, this.$refs.ax_pop, AxComCore.DialogType.CLOSE);
  }

  /**
   * 关闭弹窗
   */
  public done() {
    // 销毁自身
    // this.$destroy();

    // 拿到待删除节点:
    const self: any = this.$refs.ax_pop;
    // 拿到父节点:
    const parent = self.parentElement;
    // 删除:
    // const removed = parent.removeChild(self);
  }

  /**
   * 内部的弹窗方法
   */
  public showSearchBox(Component: any, args: any, callback: () => void) {
    // 注册 引入的组件
    Vue.component(Component.name, Component);
    // option 替换 prop
    // for (const key in option) {
    //   if (option.hasOwnProperty(key)) {
    //     const element: any = option[key];
    //     (this as any)[key] = element;
    //   }
    // }
    // component 动态换名称
    this.viewName = Component.name;
    // 参数
    this.args = args;
    // callback 以后执行???
    this.callback = callback;
  }

  // -----------------------生命周期-------------------------

  mounted() {
    // 初始化大小
    // this.onWindowResize();
  }

  /**
   * 组件销毁前处理
   */
  beforeDestroy() {}
}
</script>
