import * as AxConfig from './config';
import * as AxConst from './const';
import * as AxCore from './core';
import Dispatcher, { IEvent } from './event';
import InitWebSocket from './event/socket';
import * as AxTypes from './interfaces';
import Locale, { Language } from './language/locale';
import AxMenu from './menu';
import Request from './request';
import BrowserUtils from './utils/browser-utils';
import DomUtils from './utils/dom-utils';
import { EncryptionUtils } from './utils/encryption-utils';
import LanguageUtils from './utils/language-utils';
import StorageUtils from './utils/storage-utils';
import { StringUtils } from './utils/string-utils';
import StyleUtils from './utils/style-utils';
import { ThemesUtils } from './utils/themes-utils';
import TransformUtils from './utils/transform-utils';
import { VueBase } from './vue-support/vue-base';
import { AppModule, UserModule } from './vue-support/vuex-global';

export {
  //#region Vue基类，提供样式导入等功能
  VueBase as AxVueBase,
  //#endregion

  //#region Vue项目通用Vuex，主要用于读取当前用户信息和系统配置
  AppModule as AxVuexApp,
  UserModule as AxVuexUser,
  //#endregion

  //#region 工具类，提供各种静态方法
  StorageUtils as AxStorageUtils,
  StringUtils as AxStringUtils,
  ThemesUtils as AxThemesUtils,
  EncryptionUtils as AxEncryptionUtils,
  DomUtils as AxDomUtils,
  BrowserUtils as AxBrowserUtils,
  LanguageUtils as AxLanguageUtils,
  TransformUtils as AxTransformUtils,
  StyleUtils as AxStyleUtils,
  //#endregion

  //#region 国际化
  Locale as AxLocale,
  Language as AxLanguage,
  //#endregion

  //#region 事件
  // 事件分发器
  Dispatcher as AxDispatcher,
  // 事件通讯
  IEvent as AxEvent,
  // websocket
  InitWebSocket as AxWebsocket,
  //#endregion

  //#region Api请求
  Request as AxRequest,
  //#endregion

  //#region 菜单
  AxMenu,
  //#endregion

  // 核心服务
  AxCore,
  // 统一配置
  AxConfig,
  // 通用类型定义
  AxTypes,
  // 通用常量定义
  AxConst,
};
