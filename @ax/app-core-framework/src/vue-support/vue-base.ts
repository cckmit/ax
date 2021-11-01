import { Vue } from 'vue-property-decorator';
import { ThemesUtils } from '@/utils/themes-utils';
import { ModuleConfig } from '@/interfaces';

/**
 * 显示组件基类
 */
export class VueBase extends Vue {
  /**
   * 是否已经导入了 CSS 文件标识
   */
  protected cssImported: boolean = false;

  /**
   * 导入 CSS 文件处理（在组件的生命周期函数 created() 内调用 ）
   * @param vue 当前 VUE 组件对象
   * @param files css 文件名称数组（相对皮肤目录下的css文件，可附带相对目录，如: ['index.css', 'login/login.css', 'home.css'] 等）
   * @param config 模块配置信息
   * @param theme 当前皮肤名称（可选，默认：'default'）
   */
  protected importCss(
    vue: VueBase,
    files: string[],
    config: ModuleConfig,
    theme: string = 'default'
  ): void {
    // 验证数据是否有效
    if (!vue || !files || files.length === 0 || !config) {
      // 设置显示
      vue.cssImported = true;
      // 退出处理
      return;
    }
    // 增加生命周期检测
    // vue.$once('hook:mounted', () => {
    //   // 判断是否已经导入了 CSS
    //   if (vue.cssImported) return;
    //   // 获取当前组件对象
    //   const el = vue.$el;
    //   // 判断是否有效
    //   if (el && el instanceof HTMLElement) {
    //     // 隐藏对象
    //     el.style.visibility = 'hidden';
    //   }
    // });
    vue.$once('hook:created', () => {
      this.$nextTick().then(() => {
        // 判断是否已经导入了 CSS
        if (vue.cssImported) return;
        // 获取当前组件对象
        const el = vue.$vnode.elm;
        // 判断是否有效
        if (el && el instanceof HTMLElement) {
          // 隐藏对象
          el.style.visibility = 'hidden';
        }
      });
    });
    // 获取样式目录
    let path = config.themesPath;
    // 修正数据
    if (!path) path = '/assets/themes/';
    // 判断是否以分隔符开始
    if (!path.startsWith('/')) path = '/' + path;
    // 判断是否以分隔符结束
    if (!path.endsWith('/')) path += '/';
    // 修正皮肤名称
    if (!theme || theme.length === 0) theme = 'default';
    // 生成模块目录
    const modulePath = path + config.app + '/' + config.module + '/';
    // 增加销毁时处理
    vue.$once('hook:beforeDestroy', () => {
      // 移除已经导入的模块样式文件
      ThemesUtils.removeModuleCss(modulePath, files);
    });
    // 导入样式
    const promise = ThemesUtils.addModuleCss(modulePath, theme, files);
    // 判断是否需要导入
    if (!promise) {
      // 延时设置标识
      vue.$nextTick().then(() => {
        // 显示界面
        vue.showInterface(vue);
      });
      // 退出处理
      return;
    }
    // 正在导入数据，隐藏当前组件
    promise.then(
      () => {
        // 加载成功，显示组件
        vue.showInterface(vue);
      },
      () => {
        // 加载失败，显示组件
        vue.showInterface(vue);
      }
    );
  }

  /**
   * 获取主题下的资源地址
   * @type {(url: string, config: ModuleConfig, theme?: string) => string}
   */
  protected getAssetUrl = ThemesUtils.getAssetUrl;

  /**
   * 显示界面处理
   * @param vue 当前组件
   */
  private showInterface(vue: VueBase): void {
    // 设置显示
    vue.cssImported = true;
    // 获取当前组件对象
    const el = vue.$el;
    // 判断是否有效
    if (el && el instanceof HTMLElement) {
      // 隐藏对象
      el.style.visibility = 'visible';
    }
    // 发布事件
    this.$emit('cssImported');
  }
}
