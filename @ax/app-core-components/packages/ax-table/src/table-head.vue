<template>
  <div class="table_head" @mouseover="headMouseover" @mouseout="headMouseout">
    <!--region 正中间-->
    <div
      v-if="headMode"
      v-show="column.ASC"
      class="table_head_name_icon ax_icon_arrow_up"
    ></div>
    <div
      v-if="headMode"
      v-show="column.DESC"
      class="table_head_name_icon ax_icon_arrow_down"
    ></div>
    <!--endregion-->

    <!-- 溢出 省略号 内容提示 -->
    <!-- <ax-tooltip
      ref="tooltip"
      effect="dark"
      placement="top"
      :manual="true"
      :show="tipShow"
      :tips="scope.column.label"
    > -->
    <!-- </ax-tooltip> -->

    <!--region 表头文字内容-->
    <span class="table_head_text">{{ scope.column.label }}</span>
    <!--endregion-->

    <!--region 下拉箭头 pos定位-->
    <div v-if="showMenu" class="table_head_search" @click="headIconClick">
      <!-- 居中的下标 -->
      <div class="triangle-down icon" :style="visibility"></div>
      <!-- 下拉箭头面板 -->
      <div class="table_head_panel"></div>
    </div>
    <!--endregion-->

    <!--region 右边的渐变-->
    <!--    <div class="gradient_border"></div>-->
    <!--endregion-->
  </div>

  <!-- <div class="text" v-else>{{ scope.column.label }}</div> -->
</template>

<script lang="ts">
import { AxDomUtils } from '@ax/app-core-framework';
import AxComCore from '@AxUI/ax-com-core';
import AxTooltip from '@AxUI/ax-tooltip';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'table-head',
  components: {
    AxTooltip,
  },
})
export default class TableHead extends Vue {
  /*******************************输入******************************/
  // 头部多选按钮显示与否,默认 false
  @Prop({ default: false, type: Boolean })
  private showMenu?: boolean;

  // 模式转换
  @Prop({ default: true, type: Boolean })
  private headMode?: boolean;

  // 总的数据
  @Prop({ default: () => ({}) })
  private scope?: { column?: any; row?: any };

  // cloumn列的数据,关于某个字段的
  @Prop({ default: () => ({}) })
  private column?: {
    label?: string;
    prop?: string;
    align?: string;
    isEdit?: string;
    editConfig?: any[];
    translate?: () => string;
  };

  /*******************************输出******************************/
  private headIconClick(e: Event) {
    this.$emit('headIconClick', e);
    AxDomUtils.cancelDomEventBubble(e);
  }
  /*******************************组件内部******************************/
  private visibility = 'visibility:hidden';

  // 气泡提示显示
  private tipShow: boolean = false;

  private headMouseover(event: Event) {
    this.visibility = 'visibility:visible';
    event = event || window.event;
    this.tipShow = AxComCore.isEllipsis(event.target as HTMLElement);
  }
  private headMouseout(event: Event) {
    this.visibility = 'visibility:hidden';
    this.tipShow = false;
  }
}
</script>
