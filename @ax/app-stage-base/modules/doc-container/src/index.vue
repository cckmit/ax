<template>
  <div class="doc_container">
    <div class="doc_container_demo">
      <!--region 代码生成vue示例-->
      <slot name="source" />
      <!--endregion-->
    </div>
    <div class="doc_container_desc">
      <!--region 示例描述说明-->
      <slot name="desc" />
      <!--endregion-->
      <span class="doc_container_icon-code" @click="showCode = !showCode">
        <img
          v-if="showCode"
          alt="code"
          src="../../core-module/src/assets/image/code_show.svg"
        />
        <img
          v-else
          alt="code"
          src="../../core-module/src/assets/image/code_hide.svg"
        />
      </span>
    </div>
    <div v-show="showCode" class="doc_container_code">
      <!--region 示例代码高亮显示-->
      <slot name="code" />
      <!--endregion-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class DocContainer extends Vue {
  // 是否显示代码
  private showCode = false;
}
</script>

<style lang="scss" scoped>
@import '~highlight.js/styles/color-brewer.css';

.doc_container {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  transition: all 0.2s;
  box-shadow: 0 0.4rem 0.8rem -0.12rem rgba(0, 32, 128, 0.1),
    0 0 0 0.01rem #f0f2f7;
  background-color: #ffffff;
  text-align: left;
  margin: 0 0 1.8rem;
}

.doc_container_demo {
  box-sizing: border-box;
  padding: 1.8rem 2.2rem;
  color: #333333;
  border-bottom: 0.01rem solid #ebedf0;
  font-size: 0.8rem;
}

.doc_container_desc {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 2.7rem;
  padding: 0.6rem 3rem 0.6rem 1.2rem;
  font-size: 0.8rem;
  transition: background-color 0.4s;
  line-height: 1.8;

  code {
    background: #e6effb;
    border-radius: 1.8rem;
    color: #5e6d82;
    padding: 0.12rem 0.5rem;
  }
}

.doc_container_icon-code {
  position: absolute;
  right: 1rem;
  bottom: 0.8rem;
  width: 1.1rem;
  height: 1.1rem;
  line-height: 1.1rem;
  text-align: center;
  cursor: pointer;

  > img {
    width: 1.1rem;
    height: 1.1rem;
  }
}
.doc_container_code {
  box-sizing: border-box;
  border-top: 0.01rem solid #ebedf0;

  >>> {
    code {
      background: #f9f9f9;
      font-family: Consolas, Menlo, Courier, monospace;
      border: none;
      display: block;
      font-size: 0.8rem;
      padding: 1rem 2rem;
      line-height: 1.5;
    }

    .hljs {
      padding: 0;
      margin: 0;
    }
  }
}
</style>
