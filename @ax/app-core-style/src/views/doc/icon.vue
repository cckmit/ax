<template>
  <div class="icon_info">
    <div class="icon_desc">
      <p>
        图标组名称：
        <a type="primary" @click="onCopy(iconInfo.font_family)">
          {{ iconInfo.font_family }}
        </a>
      </p>
      <p>
        图标组前缀：
        <a @click="onCopy(iconInfo.css_prefix_text)">
          {{ iconInfo.css_prefix_text }}
        </a>
      </p>
      <p>点击图标复制图标类名</p>
    </div>
    <div class="icon_list">
      <div
        v-for="(icon, index) in iconInfo.glyphs"
        :key="index"
        class="icon_item"
      >
        <i
          :class="[
            iconInfo.font_family,
            `${iconInfo.css_prefix_text}${icon.font_class}`,
          ]"
          @click="onCopy(`${iconInfo.css_prefix_text}${icon.font_class}`)"
        ></i>
        <span class="icon_name">{{ icon.name }}</span>
        <span class="icon_class">
          {{ `${iconInfo.css_prefix_text}${icon.font_class}` }}
        </span>
      </div>
    </div>
    <input
      ref="refInput"
      v-model="shortcutText"
      class="copy_text"
      type="text"
    />
  </div>
</template>

<script lang="ts">
import { IconInfo } from '@/interfaces/icon';
import { Component, Prop, Ref, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Icon extends Vue {
  // 复制组件
  @Ref()
  private refInput!: HTMLInputElement;

  // 图标信息
  @Prop({ type: Object, default: () => ({}) })
  private iconInfo?: IconInfo;

  // 复制时的值
  private shortcutText = '';

  /**
   * 复制
   * @param text
   */
  private onCopy(text: string) {
    // 获取值
    this.shortcutText = text;
    // 获取值
    this.$nextTick().then(() => {
      // 设置选中
      this.refInput.select();
      // 复制设置值
      if (document.execCommand('copy')) {
        // 提示文本
        // AxMessage.notify('已复制');
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.icon_info {
  max-width: 72rem;
  margin: 1rem auto;
  .icon_desc {
    > p {
      margin-bottom: 0.3rem;
    }
  }
  .icon_list {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 0;
  }
  .icon_item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 12rem;
    width: 9rem;
    border: 1px solid #c0c4cc;
    margin-left: -1px;
    margin-top: -1px;

    > i {
      margin-top: 1rem;
      font-size: 3rem;
      color: #666;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        transform: scale(1.5);
      }
    }
  }
  .icon_name {
    margin-top: 2rem;
    width: 8rem;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .icon_class {
    margin-top: 1rem;
    width: 8rem;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
.copy_text {
  position: absolute;
  z-index: -1;
}
</style>
