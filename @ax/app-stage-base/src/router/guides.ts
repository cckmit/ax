import { AxStageBase } from '@modules/index';
import { RouteConfig } from 'vue-router';

// 指南页面路由
const guides: RouteConfig[] = [
  {
    path: '/',
    name: 'doc-start',
    component: () => import('@/docs/start.md'),
    meta: AxStageBase.createRouteMeta({ module: '文档', label: '快速上手' }),
  },
  {
    path: '/changelog',
    name: 'changelog',
    component: () => import('../../CHANGELOG.md'),
    meta: AxStageBase.createRouteMeta({ module: '文档', label: '更新日志' }),
  },
];

export default guides;
