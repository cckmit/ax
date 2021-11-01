import { ELocalKey } from '@/const';
import BrowserUtils from '@/utils/browser-utils';
import StorageUtils from '@/utils/storage-utils';
import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import {
  HomeSetting,
  IAppLocale,
  IAppState,
  IUserData,
  ThemeOption,
} from '../interfaces';

@Module({ name: 'app' })
export default class AppState extends VuexModule implements IAppState {
  // ------------------------------- 存储的数据 ------------------------------------

  // appId 当前应用标识
  public appId: string = 'app';

  // 版本不需要保存，直接从环境配置获取
  public version: string = '1.0.0';

  // 当前语言标识
  public lang: string = '';

  // 当前系统可以使用的语言列表
  public langList: string[] = [];

  // 语言列表详细信息
  public localeList: IAppLocale[] = [];

  // 登录记录列表
  public loginUsers: any[] = [];

  // 当前皮肤
  public theme: string = 'default';

  // 支持的皮肤列表
  public themeList: ThemeOption[] = [];

  // 各模块配置数据
  public homeSetting: HomeSetting = { sidebarStatus: 1 };

  /**
   * 构造函数
   */
  constructor(module: Mod<ThisType<any>, any>) {
    super(module);
    // 获取根目录
    let rPath = '/';
    // 判断是否有效
    if (!rPath) rPath = '/';
    // 修正最终目录
    if (!rPath.endsWith('/')) rPath += '/';
    // 读取数据
    const data = StorageUtils.localRead(this.appId, 'settings', {});
    // 判断是否有效
    if (!data) return;
    // 设置数据
    this.lang = data.lang || BrowserUtils.getDefaultLanguageKey();
    this.theme = data.theme || 'default';
    this.loginUsers = data.loginUsers || [];
  }

  // ------------------------------- 更新数据方法 ------------------------------------

  /**
   * 设置语言标识
   * @param {string} lang 语言标识
   */
  @Action
  public async setLang(lang: string) {
    this.UPDATE_SETTINGS({ lang });
  }

  /**
   * 已弃用，请使用setLocaleList
   * 设置国际化语言列表
   * @deprecated
   * @param langList 语言列表
   * @return {Promise<void>}
   */
  @Action
  public async setLangList(langList: string[]) {
    // eslint-disable-next-line no-console
    console.warn(
      'AxVuexApp.setLangList方法已弃用，请使用AxVuexApp.setLocaleList设置国际化'
    );
    this.UPDATE_SETTINGS({ langList });
  }

  /**
   * 设置国际化语言列表
   * @param localeList 语言列表
   * @return {Promise<void>}
   */
  @Action
  public async setLocaleList(localeList: IAppLocale[]) {
    // 默认语言
    let defaultLang = '';
    // 更新国际化key列表
    const langList = localeList.map((locale) => {
      // 设置默认值
      if (locale.defaulted) {
        defaultLang = locale.code || '';
      }
      return locale.code;
    });
    // 判断当前国际化是否在可选列表中，在列表中不做处理，不在的话设置默认值
    if (
      !localeList.find((item) => this.lang === item.code) &&
      localeList.length
    ) {
      // 更新当前国际化语言
      this.UPDATE_SETTINGS({ lang: defaultLang ?? localeList[0].code });
    }
    // 设置到langList中
    this.UPDATE_SETTINGS({ langList });
    // 更新国际化列表
    this.UPDATE_SETTINGS({ localeList });
  }

  /**
   * 设置当前主题
   * @param {string} theme 当前主题
   */
  @Action
  public async setTheme(theme: string) {
    this.UPDATE_SETTINGS({ theme });
  }

  /**
   * 设置主题列表
   * @param themeList 主题列表
   * @return {Promise<void>}
   */
  @Action
  public async setThemeList(themeList: ThemeOption[]) {
    this.UPDATE_SETTINGS({ themeList });
  }

  /**
   * 设置登录用户历史记录
   * @param {IUserData[]} loginUsers 登录用户历史记录
   */
  @Action
  public async setLoginUsers(loginUsers: IUserData[]) {
    this.UPDATE_SETTINGS({ loginUsers });
  }

  /**
   * 设置首页设置数据
   * @param homeSetting 首页设置数据对象
   */
  @Action
  public async setHomeSetting(homeSetting: HomeSetting) {
    this.UPDATE_SETTINGS({ homeSetting });
  }

  // ------------------------------- 提交数据方法 ------------------------------------

  /**
   * 提交数据处理
   */
  @Mutation
  UPDATE_SETTINGS(value: Partial<IAppState>) {
    // 设置绑定数据
    Object.assign(this, value);
    // 定义存储的数据对象
    const data: { [key: string]: any } = {};
    // 遍历获取数据
    Object.keys(this).forEach((key) => {
      // 获取一个值
      const v = this[key as keyof this];
      // 判断是否是方法
      if (!v || typeof v === 'function') return;
      // 设置到对象
      data[key] = v;
    });
    // 保存配置数据
    StorageUtils.localSave(this.appId, ELocalKey.SETTING, data);
  }
}
