<template>
  <div
    ref="groups"
    class="ax_panels"
    :class="[
      { bottom_top: type === 'bottom_top' },
      { left_right: type === 'left_right' },
      { right_left: type === 'right_left' },
      { top_bottom: type === 'top_bottom' },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { AxDomUtils } from '@ax/app-core-framework';
import AxComCore from '@AxUI/ax-com-core';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AxPanels extends Vue {
  // 子组件存储变量
  private items: AxComCore.IKeyLabelData[] = [];
  // 插槽子组件map
  private views: Map<AxComCore.IKey, HTMLElement> = new Map();
  // 当前显示的 vue 对象
  private current?: HTMLElement = undefined;

  /**
   * 动画类型
   */
  @Prop({ default: undefined })
  private type?: string;

  /**
   * 当前显示的面板序号或名称 (对应 key 字段)
   */
  @Prop({ default: undefined })
  private index?: AxComCore.IKey;

  @Watch('index')
  private watchCurrentTab(val: AxComCore.IKey) {
    // 设置当前显示的 vue
    this.setVisible(this.views.get(val));
  }

  /**
   * 获取 panel 模板数据
   */
  public getData() {
    return this.items;
  }

  /**
   * 创建完成方法
   */
  private mounted() {
    // 获取插槽数据
    const children = this.$el.children;
    // 遍历 html 标签
    for (let i = 0; i < children.length; i++) {
      // 获取元素
      let target: HTMLElement | any = null;
      const source = children[i] as HTMLElement;
      if (source.className === 'control_panel') {
        target = source;
      } else {
        if (
          (source.childNodes[0] as HTMLElement).className === 'control_panel'
        ) {
          // 如果孩子的第一條,是叫 control_panel ,那就是這個孩子了!
          target = source.childNodes[0];
        } else {
          // 如果没有数据的话,就要返回退出了
          return;
        }
      }

      // 获取数据
      const key = target.getAttribute('symbol') || i;
      const label = target.getAttribute('label') || '' + i;
      // 存储所有的子组件

      this.items.push({ key, label });
      // 存储需要切换的对象
      this.views.set(key, target);
      // 设置是否显示
      if (this.index === key) {
        // 设置当前显示的 vue
        this.setVisible(target);
      } else {
        // 隐藏其他 vue
        target.style.display = 'none';
      }
    }
  }

  /**
   * 设置显示与不显示
   */
  private setVisible(view?: HTMLElement) {
    if (!view) return;
    // 设置不显示
    if (this.current) this.current.style.display = 'none';
    // 存储数据
    this.current = view;
    // 显示当前 vue
    view.style.display = '';
    // 触发事件
    AxDomUtils.dispatchDomEvent(view, ['panel_changes']);
  }
}
</script>
