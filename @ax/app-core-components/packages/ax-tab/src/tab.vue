<template>
  <div
    ref="ax_tab"
    class="ax_tab"
    :class="[{ inner_mode: isInnerMode }, { outer_mode: !isInnerMode }]"
  >
    <div class="tab_bar">
      <div
        v-for="(item, i) in tabData"
        :key="i"
        class="tab_item"
        :class="[{ tab_select: index === item.key }]"
        @click="onClick(item)"
      >
        <slot :item="item" :name="item.name">{{ item.label }}</slot>
      </div>
    </div>
    <ax-panels
      v-if="isInnerMode"
      ref="panels"
      :index="index"
      class="tab_panels"
      :class="[
        { bottom_top: type === 'bottom_top' },
        { left_right: type === 'left_right' },
        { right_left: type === 'right_left' },
        { top_bottom: type === 'top_bottom' },
      ]"
    >
      <slot></slot>
    </ax-panels>
  </div>
</template>

<script lang="ts">
import AxComCore from '@AxUI/ax-com-core';
import AxPanels from '@AxUI/ax-panels';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  model: {
    prop: 'index',
    event: 'change',
  },
  components: {
    AxPanels,
  },
})
export default class AxTab extends Vue {
  // 子组件存储变量
  private items: AxComCore.IKeyLabelData[] = [];
  /**
   * 动画类型
   */
  @Prop({ default: undefined })
  private type?: string;

  /**
   * 当前显示的 tab
   */
  @Prop({ default: undefined })
  private index?: AxComCore.IKey;
  /**
   * 组件模式下切换 tab 的数据来源 (若存在值则 tab 组件不需要输入 元件)
   */
  @Prop({ default: undefined })
  private data?: AxComCore.IKeyLabelData[];

  private get tabData() {
    // 返回数据
    this.items = this.data || [];
    // 判断是否需要分发数据
    if (this.index !== undefined && this.items.length > 0) {
      // 判断是否是字符串类型的 key
      if (
        typeof this.index === 'string' &&
        Object.prototype.hasOwnProperty.call(this.items, this.index)
        // this.items.hasOwnProperty(this.index)
      ) {
        // 切换后分发事件
        this.$emit('change', this.index);
      } else if (this.items.length > this.index) {
        // 切换后分发事件
        this.$emit('change', this.index);
      }
    }
    // 返回数据
    return this.items;
  }

  /**
   * 是否内部组件模式
   */
  private get isInnerMode() {
    return !this.data || this.data.length === 0;
  }

  /**
   * 点击方法
   */
  private onClick(val: AxComCore.IKeyLabelData) {
    // 切换后分发事件
    this.$emit('change', val.key);
  }
}
</script>
