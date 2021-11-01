import '@/core';
import Locale from '@/core/locale';
import router from '@/router';
import { AxVuexApp } from '@ax/app-core-framework';
import '@ax/app-core-style/lib/css/common.css';
import Vue from 'vue';
import '../modules/core-module/src/assets/style/index.scss';
import App from './App.vue';

Vue.config.productionTip = false;

// 当前主题 TODO: 后续会从系统配置中获取，并设置到Vuex的AxVuexApp中
const themeCurrent = 'parking';

/**
 * 系统渲染前需要预设的内容
 * @returns {Promise<void[]>}
 */
const init = async () =>
  Promise.all([
    // 设置国际化
    Locale.setLocale(),
    // 设置主题列表
    AxVuexApp.setThemeList([
      { code: themeCurrent, name: '蓝白风格' },
      { code: 'black_cool', name: '黑色酷炫' },
      { code: 'red_black', name: '红白风格' },
    ]),
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
