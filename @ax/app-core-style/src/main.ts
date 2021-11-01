import '@/core';
import router from '@/router';
import { AxThemesUtils, AxVuexApp } from '@ax/app-core-framework';
import '../lib/css/common.css';
import { AxDocContainer } from '@ax/app-stage-base';
import '@ax/app-stage-base/lib/assets/style/index.css';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// 说明文档组件
Vue.component('doc-container', AxDocContainer);

/**
 * 系统渲染前需要预设的内容
 * @returns {Promise<void[]>}
 */
const init = async () =>
  Promise.all([
    // 设置主题列表
    AxVuexApp.setThemeList([
      { code: 'default', name: '蓝白风格' },
      { code: 'parking', name: '停车' },
    ]),
    // 导入当前UI库的主题
    AxThemesUtils.addStyle(
      'AxUI',
      `/assets/themes/styles/${AxVuexApp.theme}/index.css`
    ),
  ]);

init()
  .then(() => {
    new Vue({
      router,
      render: (h) => h(App),
    }).$mount('#app');
  })
  .catch((err) => {
    // 初始化失败的处理
    // eslint-disable-next-line no-console
    console.error(err);
  });
