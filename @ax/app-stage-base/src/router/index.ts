import { IModuleDefine } from '@/interfaces/irouter';
import components from '@/router/components';
import guides from '@/router/guides';
import tests from '@/router/tests';
import { AxStageBase } from '@modules/index';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/**
 * 路由对象数据
 */
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  base: '/',
  routes: [
    {
      path: '/test',
      name: IModuleDefine.TEST,
      redirect: { name: 'test-start' },
      component: () => import('@/views/test/index.vue'),
      meta: AxStageBase.createRouteMeta({ module: '测试' }),
      children: [
        {
          path: '/',
          name: 'test-start',
          component: () => import('@/views/test/com/index.vue'),
          meta: AxStageBase.createRouteMeta({ module: '测试' }),
        },
        ...tests,
      ],
    },
    {
      path: '/',
      name: IModuleDefine.DOC,
      redirect: { name: 'doc-start' },
      component: () => import('@/views/doc/index.vue'),
      meta: AxStageBase.createRouteMeta({ module: '文档' }),
      children: [...guides, ...components],
    },
  ],
});
