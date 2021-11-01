<template>
  <ax-stage-content :sidebars="sidebars">
    <router-view />
  </ax-stage-content>
</template>

<script lang="ts">
import components from '@/router/components';
import guides from '@/router/guides';
import { AxVueBase } from '@ax/app-core-framework';
import { AxStageBase, AxStageContent } from '@modules/index';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    AxStageContent,
  },
})
export default class DocView extends AxVueBase {
  // 侧边栏
  private sidebars: AxStageBase.IStageSidebar[] = [
    { title: '开发指南', routes: guides },
    { title: '模块', routes: components },
  ];
}
</script>
