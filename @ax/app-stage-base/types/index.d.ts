import { AxVueBase } from '@ax/app-core-framework';
import { Vue } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';

export declare class AxDocContainer extends Vue {
  private showCode;
}

export declare class AxStageHeader extends AxVueBase {
  private version?;
  private name?;
  private registry?;
  private rootFont?;
  private title?;
  private showLogin;
  private panelCur?;
  private panels?;
  private onLogin;
  private onLogout;
  private showSlider;
  private langCurrent;
  private langCurrentText;
  private rootFontSize;
  private userInfo;
  private langOptions;
  private themeOptions;
  private themeMode;
  private themeModeList;
  /**
   * 修改当前主题
   */
  private onThemeChange;
  /**
   * 修改国际化语言
   */
  private onLangChange;
  /**
   * 基准改变
   */
  private rootFontChange;
  /**
   * 切换面板
   * @param panel
   */
  private switchPanel;
  /**
   * 切换主题模式
   */
  private switchThemeMode;
  /**
   * 初始化主题模式
   */
  private initThemeMode;
  private created;
}

export declare class AxStageContent extends AxVueBase {
  refContent: HTMLDivElement;
  private sidebars?;
  private sidebarWidth;
  private resizable?;
  private fullScreen?;
  private viewMode;
  private rect;
  private stickBtnList;
  /**
   * 位置计算
   * @returns {{top: string, left: string, bottom: string, right: string}}
   */
  private position;
  private listener;
  private onResizeStart;
  private changeView;
  private mounted;
}

export declare namespace AxStageBase {
  type IHeaderPanel = {
    path: string;
    text: string;
  };
  type IStageSidebar = {
    routes: RouteConfig[];
    title: string;
  };
  /**
   * 路由附加元数据格式
   */
  export interface IRouterMeta {
    module?: string;
    label?: string;
  }
  /**
   * 创建元数据方法
   * @param module
   * @param label
   * @returns {{module: string | undefined}} 返回元数据对象
   */
  export function createRouteMeta({
    module,
    label,
  }: {
    module?: string;
    label?: string;
  }): IRouterMeta;
  /**
   * 设置展示
   * @param theme
   */
  export function setThemeMode(theme?: ThemeMode): void;
  export enum ThemeMode {
    LIGHT = 'stage_light',
    DARK = 'stage_dark',
  }
}
