<template>
  <ax-stage-content :sidebars="sidebars" :sidebar-width="12" resizable>
    <router-view :key="$route.meta.label" />
  </ax-stage-content>
</template>

<script lang="ts">
import tests from '@/router/tests';
import { AxVueBase } from '@ax/app-core-framework';
import { AxStageBase, AxStageContent } from '@ax/app-stage-base';
import { Component } from 'vue-property-decorator';

@Component({
  components: { AxStageContent },
})
export default class TestView extends AxVueBase {
  // 侧边栏
  private sidebars: AxStageBase.IStageSidebar[] = [
    { routes: tests, title: '组件列表' },
  ];
}
</script>
