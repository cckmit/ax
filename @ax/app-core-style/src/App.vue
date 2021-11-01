<template>
  <div id="app" class="app">
    <ax-stage-header
      :name="name"
      :version="version"
      :title="title"
    ></ax-stage-header>
    <div class="app_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { AxVueBase } from '@ax/app-core-framework';
import { AxStageHeader } from '@ax/app-stage-base';
import { Component } from 'vue-property-decorator';

// 获取package的信息
const packageInfo: {
  name: string;
  version: string;
} = require('../package.json');

@Component({
  components: {
    AxStageHeader,
  },
})
export default class App extends AxVueBase {
  // 包名称
  private name = packageInfo.name;

  // 当前版本
  private version = packageInfo.version;

  // 打包版本
  private distVersion = '';

  /**
   * 标题
   * @returns {string}
   */
  private get title(): string {
    return '核心样式库';
  }

  private created() {
    // 获取版本号
    fetch('/version')
      .then((rs) =>
        rs
          .text()
          .then((text) =>
            text.length < 20 ? Promise.resolve(text) : Promise.reject('')
          )
      )
      .then((version) => {
        this.distVersion = version;
      })
      .catch(() => {});
  }
}
</script>

<style lang="scss">
html {
  font-size: 14px;
}
</style>
