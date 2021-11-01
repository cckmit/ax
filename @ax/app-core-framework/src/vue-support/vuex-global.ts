import { IRootState } from '@/interfaces';
import AppState from '@/vue-support/vuex-app';
import UserState from '@/vue-support/vuex-user';
import Vuex from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store<IRootState>({
  modules: {
    app: AppState,
    user: UserState,
  },
});

/**
 * 应用数据模块
 */
export const AppModule: AppState = getModule(AppState, store);

/**
 * 用户数据模块
 */
export const UserModule: UserState = getModule(UserState, store);
