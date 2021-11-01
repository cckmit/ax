<template>
  <div class="ax_navigator">
    <div v-for="(item, index) in data" :key="index" class="navigator_item">
      <slot :item="item">
        <i v-if="index !== 0" :class="icon"></i>
        <router-link
          v-if="item.path && !item.link"
          class="navigator_link"
          :to="item.path"
        >
          <slot :item="item">
            <span>{{ item.text }}</span>
          </slot>
        </router-link>
        <a
          v-else-if="!item.path && item.link"
          class="navigator_link"
          @click="linkClick(item)"
        >
          {{ item.text }}
        </a>
        <span v-else class="navigator_text">{{ item.text }}</span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import AxComCore from '@AxUI/ax-com-core';
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AxNavigator extends Vue {
  /**
   * 当前导航数据数组
   */
  @Prop({ default: () => [] })
  public data?: AxComCore.INavigatorData[];

  /**
   * 间隔符图标替换
   */
  @Prop({ default: 'i_cc i_cc_triangle_right_line', type: String })
  public icon?: string;

  /**
   * link模式下返回参数
   * @param item
   * @returns {AxComCore.INavigatorData}
   */
  @Emit('click')
  private linkClick(item: AxComCore.INavigatorData) {
    return item;
  }
}
</script>
