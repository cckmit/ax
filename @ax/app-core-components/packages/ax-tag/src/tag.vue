<template>
  <span
    ref="refTag"
    class="ax_tag"
    :class="[`tag_size_${size}`, disabled ? '' : `tag_type_${type}`]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
    <i v-if="closable" class="tag_close el-icon-close" @click="handleClose"></i>
  </span>
</template>

<script lang="ts">
import AxComCore from '@AxUI/ax-com-core';
import { Component, Emit, Prop, Ref, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AxTag extends Vue {
  // Ref Tag
  @Ref('axTag') refTag!: HTMLElement;

  // 是否被禁用
  @Prop({ default: false, type: Boolean })
  public disabled?: boolean;

  // 是否可关闭
  @Prop({ default: false, type: Boolean })
  public closable?: boolean;

  // 标签类型 默认：TagType.PRIMARY
  @Prop({ default: AxComCore.TagType.PRIMARY, type: String })
  public type?: string;

  // 标签尺寸 默认：TagSize.NORMAL
  @Prop({ default: AxComCore.TagSize.NORMAL, type: String })
  public size?: string;

  /**
   * 获取焦点方法
   */
  public focus(): AxTag {
    // 设置焦点
    this.refTag.focus();
    // 返回当前对象
    return this;
  }

  /**
   * 点击按钮处理
   * @param event
   */
  private handleClick(event: Event) {
    if (this.disabled) {
      return;
    }
    this.click(event);
  }

  /**
   * 关闭按钮处理
   * @param event
   */
  private handleClose(event: Event) {
    if (this.disabled) {
      return;
    }
    this.close(event);
  }

  /**
   * 上报点击事件
   * @param event
   * @returns {Event}
   */
  @Emit()
  private click(event: Event) {
    return event;
  }

  /**
   * 上报关闭事件
   * @param event
   * @returns {Event}
   */
  @Emit('close')
  private close(event: Event) {
    event.stopPropagation();
    return event;
  }
}
</script>
