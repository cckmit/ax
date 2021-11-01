<template>
  <div class="stage_content" :class="[`stage_content_${viewMode}`]">
    <div class="sidebar" :style="{ width: `${sidebarWidth}rem` }">
      <template v-for="(sidebar, index) in sidebars">
        <div :key="`title-${index}`" class="sidebar_title">
          {{ sidebar.title }}
        </div>
        <router-link
          v-for="(route, second) in sidebar.routes"
          :key="`route-${index}-${second}`"
          class="sidebar_link"
          :to="route.path"
        >
          {{ route.meta.label }}
        </router-link>
      </template>
    </div>
    <div
      ref="refContent"
      class="content"
      :class="{ content_resizable: resizable }"
      :style="
        viewMode === 'normal'
          ? resizable
            ? position
            : { 'margin-left': `${sidebarWidth + 1}rem` }
          : {}
      "
    >
      <slot></slot>
      <template v-if="resizable">
        <div
          v-for="(stick, index) in stickBtnList"
          :key="index"
          :class="[`resize_${stick.pos}`]"
          class="resize_bar"
          @mousedown.stop.prevent="onResizeStart(stick.pos)"
        ></div>
      </template>
      <template v-if="resizable">
        <div class="operate_btns">
          <i
            v-if="viewMode === 'normal'"
            class="i_cc i_cc_zhankai1"
            @click="changeView('full_screen')"
          ></i>
          <i
            v-if="viewMode === 'full_screen'"
            class="i_cc i_cc_wrong_circle"
            @click="changeView('normal')"
          ></i>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { AxVueBase } from '@ax/app-core-framework';
import { IStageSidebar } from '@modules/core-module/src/interfaces';
import { Component, Prop, Ref } from 'vue-property-decorator';

enum StickPos {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
  TOP_LEFT = 'top_left',
  TOP_RIGHT = 'top_right',
  BOTTOM_LEFT = 'bottom_left',
  BOTTOM_RIGHT = 'bottom_right',
}

type ViewMode = 'full_screen' | 'normal';

@Component({
  components: {},
})
export default class StageContent extends AxVueBase {
  @Ref() refContent!: HTMLDivElement;

  // 导航列表
  @Prop({
    default: () => [],
    type: Array,
  })
  private sidebars?: IStageSidebar[];

  // 导航宽度
  @Prop({ default: 15, type: Number })
  private sidebarWidth!: number;

  // 导航宽度
  @Prop({ default: false, type: Boolean })
  private resizable?: boolean;

  // 是否全屏
  @Prop({ default: false, type: Boolean })
  private fullScreen?: boolean;

  // 显示模式
  private viewMode: ViewMode = 'normal';

  private rect = { x: 0, y: 0 };

  private stickBtnList: { pos: StickPos }[] = Object.values(StickPos).map(
    (pos) => ({
      pos,
    })
  );

  /**
   * 位置计算
   * @returns {{top: string, left: string, bottom: string, right: string}}
   */
  private position = {
    top: '0',
    right: '0',
    left: '0',
    bottom: '0',
  };

  private listener(pos: StickPos) {
    return (e: MouseEvent) => {
      // const refContent = this.$refs.refContent as HTMLDivElement;
      const windowRect = document.documentElement.getBoundingClientRect();
      // const rect: DOMRect = refContent.getBoundingClientRect();
      const top = `${e.clientY - this.rect.y}px`;
      const right = `${windowRect.width - e.clientX}px`;
      const bottom = `${windowRect.height - e.clientY}px`;
      const left = `${e.clientX}px`;
      switch (pos) {
        case StickPos.TOP:
          this.position.top = top;
          break;
        case StickPos.RIGHT:
          this.position.right = right;
          break;
        case StickPos.BOTTOM:
          this.position.bottom = bottom;
          break;
        case StickPos.LEFT:
          this.position.left = left;
          break;
        case StickPos.TOP_LEFT:
          this.position.left = left;
          this.position.top = top;
          break;
        case StickPos.TOP_RIGHT:
          this.position.top = top;
          this.position.right = right;
          break;
        case StickPos.BOTTOM_LEFT:
          this.position.bottom = bottom;
          this.position.left = left;
          break;
        case StickPos.BOTTOM_RIGHT:
          this.position.bottom = bottom;
          this.position.right = right;
          break;
      }
    };
  }

  private onResizeStart(pos: StickPos) {
    const listener = (e: MouseEvent) => this.listener(pos)(e);
    document.documentElement.addEventListener('mousemove', listener);
    document.documentElement.addEventListener('mouseup', () => {
      document.documentElement.removeEventListener('mousemove', listener);
    });
  }

  private changeView(mode: ViewMode) {
    this.viewMode = mode;
  }

  private mounted() {
    const rect: DOMRect = this.refContent.getBoundingClientRect();
    this.rect.x = rect.x;
    this.rect.y = rect.y;
    if (this.sidebarWidth) {
      this.position.left = `${this.sidebarWidth}rem`;
    }
    if (this.fullScreen) {
      this.viewMode = 'full_screen';
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../core-module/src/assets/style/var';

.stage_content {
  height: calc(100% - #{$header-height});
  overflow: auto;
  margin-top: $header-height;
  position: relative;
}

.sidebar {
  position: fixed;
  top: $header-height;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  width: $left-width;
  font-size: 1rem;
  padding: 2rem 0;
  color: #3f536e;
  background: #ffffff;
  border-right: 0.01rem solid #ececec;
  box-sizing: content-box;
}

.sidebar_title {
  font-size: 1.2rem;
  color: #333333;
  line-height: 2.8rem;
  height: 2.8rem;
  margin: 0;
  padding: 0.4rem 1.8rem;
  text-decoration: none;
  display: block;
  position: relative;
  transition: 0.15s ease-out;
  font-weight: 700;
}

.sidebar_link {
  font-size: 1rem;
  color: #333333;
  line-height: 2.8rem;
  height: 2.8rem;
  margin: 0;
  padding: 0.4rem 0.5rem 0.4rem 1.8rem;
  text-decoration: none;
  display: block;
  position: relative;
  transition: 0.15s ease-out;
  font-weight: 500;

  &:hover {
    color: #41a259;
  }
}

.content {
  margin: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
}

.content_page {
  padding-left: $left-width;
}

.content_view {
  padding: 1rem;
}

.content_resizable {
  padding: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: transparent;
  border: 1px dashed #808080;
  box-shadow: none;
  border-radius: 0;
}

.resize_bar {
  position: absolute;

  &:hover {
    background: rgba(184, 187, 187, 0.5);
  }
}

.resize {
  &_top {
    top: -1rem;
    left: 0;
    right: 0;
    height: 1rem;
    cursor: n-resize;
  }
  &_right {
    top: 0;
    right: -1rem;
    bottom: 0;
    width: 1rem;
    cursor: e-resize;
  }
  &_bottom {
    left: 0;
    right: 0;
    bottom: -1rem;
    height: 1rem;
    cursor: n-resize;
  }
  &_left {
    top: 0;
    left: -1rem;
    bottom: 0;
    width: 1rem;
    cursor: e-resize;
  }
  &_top_left {
    top: -1rem;
    left: -1rem;
    width: 1rem;
    height: 1rem;
    cursor: nw-resize;
  }
  &_top_right {
    top: -1rem;
    right: -1rem;
    width: 1rem;
    height: 1rem;
    cursor: ne-resize;
  }
  &_bottom_left {
    left: -1rem;
    bottom: -1rem;
    width: 1rem;
    height: 1rem;
    cursor: sw-resize;
  }
  &_bottom_right {
    right: -1rem;
    bottom: -1rem;
    width: 1rem;
    height: 1rem;
    cursor: se-resize;
  }
}

.router-link-exact-active {
  color: #41a259 !important;
  background-color: #eeffde !important;
  border-right: 0.3rem solid #41a259 !important;
}

.operate_btns {
  position: absolute;
  right: 0;
  top: -1rem;

  > i {
    font-size: 1rem;
    margin-left: 0.3rem;
    cursor: pointer;
    color: #999999;
    transition: 0.3s;
    &:hover {
      color: #555;
    }
  }
}

.stage_content_full_screen {
  .content {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background: #edeff2;
    padding: 0;
    margin: 0;
  }
  .operate_btns {
    top: 0;
  }
}
</style>
