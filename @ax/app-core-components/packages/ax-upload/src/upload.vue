<template>
  <div class="ax_upload">
    <el-upload
      ref="el_upload"
      :disabled="disabled"
      :multiple="multiple"
      v-bind="$attrs"
      :action="action"
      v-on="$listeners"
    >
      <ax-button type="primary" :disabled="disabled">{{ text }}</ax-button>
      <div v-if="tip" slot="tip" class="el-upload__tip">{{ tip }}</div>
    </el-upload>
  </div>
</template>

<script lang="ts">
import AxComCore from '@AxUI/ax-com-core';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Upload } from 'element-ui';
import AxButton from '@AxUI/ax-button';

@Component({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change',
  },
  inheritAttrs: false,
  components: {
    [Upload.name]: Upload,
    AxButton,
  },
})
export default class AxUpload extends AxComCore.AxUIComponent {
  /**
   * 按钮名称
   */
  @Prop({ default: '' })
  public text?: string;

  /**
   * 禁用
   */
  @Prop({ default: false })
  public declare disabled?: boolean;

  /**
   * 多选
   */
  @Prop({ type: Boolean, default: false })
  public multiple?: boolean;

  /**
   * 按钮名称
   */
  @Prop({ default: 'https://jsonplaceholder.typicode.com/posts/' })
  public action?: string;

  /**
   * 按钮提示
   */
  @Prop({ default: '' })
  public tip?: string;

  /**
   * 获取焦点方法
   */
  public focus(): AxUpload {
    // 获取元素对象
    const el = this.$refs['el-upload'];
    // 判断是否是 HTML 元素
    if (el instanceof Vue) {
      // 获取元素对象
      const e = (el as Vue).$el;
      // 判断是否是 HTML 元素
      if (e && e instanceof HTMLElement) {
        // 设置焦点
        (e as HTMLElement).focus();
      }
    }
    // 返回当前对象
    return this;
  }

  // /**
  //  * 点击按钮处理
  //  */
  // private handleClick(event: Event) {
  //   this.$emit('click', event);
  // }

  // 取消上传请求	（ file: fileList 中的 file 对象 ）
  public abort(file: any) {
    (this.$refs.el_upload as Upload).abort(file);
  }

  // -----------------------生命周期
}
</script>
