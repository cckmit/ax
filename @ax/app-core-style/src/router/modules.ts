import { AxStageBase } from '@ax/app-stage-base';
import { RouteConfig } from 'vue-router';
import createRouteMeta = AxStageBase.createRouteMeta;

// 组件页面路由描述
const modules: RouteConfig[] = [
  {
    path: '/icon/common',
    name: 'icon-common',
    component: () => import('@/views/doc/icon.vue'),
    props: {
      iconInfo: require('../../lib/icon/common/iconfont.json'),
    },
    meta: createRouteMeta({ module: '文档', label: '通用图标库' }),
  },
  {
    path: '/icon/system',
    name: 'icon-system',
    component: () => import('@/views/doc/icon.vue'),
    props: {
      iconInfo: require('../../lib/icon/system/iconfont.json'),
    },
    meta: createRouteMeta({ module: '文档', label: '系统图标库' }),
  },
  {
    path: '/icon/parking',
    name: 'icon-parking',
    component: () => import('@/views/doc/icon.vue'),
    props: {
      iconInfo: require('../../lib/icon/parking/iconfont.json'),
    },
    meta: createRouteMeta({ module: '文档', label: '停车应用图标库' }),
  },
];

export default modules;
