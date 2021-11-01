import { AxStageBase } from '@modules/index';
import { RouteConfig } from 'vue-router';

// 组件页面路由描述
const tests: RouteConfig[] = [
  {
    path: '/test/test-module',
    name: 'test-module',
    component: () => import('@/views/test/com/test-module/index.vue'),
    meta: AxStageBase.createRouteMeta({ module: '测试', label: '测试模块' }),
  },
];

export default tests;
