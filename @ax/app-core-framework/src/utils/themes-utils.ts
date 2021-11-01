import { ModuleConfig } from '@/interfaces';

// 皮肤工具类
export class ThemesUtils {
  protected constructor() {}

  /**
   * 已经导入的 CSS 文件名称集合（键：目录路径(不包括皮肤名称)；值：文件名称及导入次数集合）
   */
  private static cssFiles: Map<string, Map<string, number>> = new Map();

  // 已经导入的顶部内嵌样式key列表
  private static headStyles: string[] = [];

  /**
   * 增加模块CSS 文件记录
   * @param modulePath CSS 导入模块地址（ '/assets/themes/app/module/' ）
   * @param theme 皮肤名称（ 'default' ）
   * @param files 需要导入的 CSS 文件数组（相对皮肤目录下的css文件，可附带相对目录，如: ['index.css', 'login/login.css', 'home.css'] 等）
   * @returns [Promise] 返回异步对象（不需要导入则直接返回 null）
   */
  public static addModuleCss(
    modulePath: string,
    theme: string,
    files: string[]
  ): Promise<any> | null {
    // 获取文件信息数据
    let imported: Map<string, number> | undefined =
      ThemesUtils.cssFiles.get(modulePath);
    // 判断是否存在
    if (!imported) {
      // 创建集合
      imported = new Map();
      // 增加到集合
      ThemesUtils.cssFiles.set(modulePath, imported);
    }
    // 创建导入文件数组
    const urls = [];
    // 生成样式文件目录（ '/assets/themes/app/module/default/index.css' ）
    const urlPath = modulePath + theme + '/';
    // 遍历样式文件
    for (const file of files) {
      // 从记录集合内获取数据
      const fileCounts = imported.get(file);
      // 判断是否存在数据
      if (!fileCounts) {
        // 不存在，设置到集合
        imported.set(file, 1);
        // 增加到导入数组
        urls.push(urlPath + file);
      } else {
        // 已经存在，增加数量
        imported.set(file, fileCounts + 1);
      }
    }
    // 执行导入处理
    return ThemesUtils.importCSS(urls);
  }

  /**
   * 移除模块下的 CSS 处理
   * @param modulePath CSS 导入模块地址（ '/assets/themes/app/module/' ）
   * @param files 需要导入的 CSS 文件数组（相对皮肤目录下的css文件，可附带相对目录，如: ['index.css', 'login/login.css', 'home.css'] 等）
   */
  public static removeModuleCss(modulePath: string, files: string[]): void {
    // 获取文件信息数据
    const imported: Map<string, number> | undefined =
      ThemesUtils.cssFiles.get(modulePath);
    // 判断是否存在
    if (!imported || files.length === 0) return;
    // 定义需要移除的模块文件数组
    const urls: Array<{ path: string; file: string }> = [];
    // 遍历需要移除的文件
    for (const file of files) {
      // 获取文件导入次数
      let counts = imported.get(file);
      // 判断是否存在
      if (!counts) continue;
      // 递减数量
      counts--;
      // 判断是否依然存在多个导入
      if (counts === 0) {
        // 本次移除后相关模块已经全部销毁，增加到移除数组
        urls.push({ path: modulePath, file });
        // 移除集合内的数据
        imported.delete(file);
      } else {
        // 依然有其它模块使用样式文件，设置减少的数量
        imported.set(file, counts);
      }
    }
    // 判断是否存在文件
    if (imported.size === 0) {
      // 模块文件已经被全部移除，从主集合内移除
      ThemesUtils.cssFiles.delete(modulePath);
    }
    // 移除文件处理
    ThemesUtils.exportCss(urls);
  }

  /**
   * 导入 CSS 文件处理（假如已经导入则返回 null）
   * @param urls CSS 文件完整地址
   * @returns [Promise] 返回异步对象（不需要导入则直接返回 null）
   */
  private static importCSS(urls: string[]): Promise<any> | null {
    // 判断是否需要导入
    if (!urls || urls.length === 0) return null;
    // 获取文件头对象
    const html = document.getElementsByTagName('html');
    // 判断是否有效
    if (!html || html.length === 0) return null;

    // 重新封装异步数据结果
    return new Promise((resolve, reject): any => {
      // 获取导入数量
      const count = urls.length;
      // 定义成功数量
      let success = 0;
      // 定义失败数量
      let errors = 0;
      // 遍历导入数据
      for (const url of urls) {
        // 判断是否 CSS 文件
        if (!url.toLowerCase().endsWith('.css')) continue;
        // 创建样式对象
        const link = document.createElement('link');
        // 绑定加载事件
        link.onload = () => {
          // 累加成功数量
          success++;
          // 判断是否加载完成
          if (success + errors >= count) {
            // 全部加载完成，回调数据
            if (errors > 0) {
              // 回调失败
              reject(errors);
            } else {
              // 回调成功
              resolve(success);
            }
          }
        };
        // 加载失败后处理
        link.onerror = () => {
          // 累加失败数量
          errors++;
          // 判断是否加载完成
          if (success + errors >= count) {
            // 回调失败
            reject(errors);
          }
        };
        // 设置属性
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        // 增加元素到页面最后
        html[0].appendChild(link);
      }
    });
  }

  /**
   * 移除模块的 CSS 文件处理
   * @param urls 地址数据数组
   */
  private static exportCss(urls: Array<{ path: string; file: string }>): void {
    // 判断是否有效
    if (urls.length === 0) return;
    // 获取所有样式
    const links = document.getElementsByTagName('link');
    // 判断是否有效
    if (!links || links.length === 0) return;
    // 获取页面域名和端口地址长度
    const domainLen = window.location.origin.length;
    // 定义移除数组
    const removes = [];
    // 遍历检测链接地址
    for (let i = 0, c = links.length; i < c; i++) {
      // 获取一个链接对象
      const link = links[i] as HTMLLinkElement;
      // 判断是否 CSS 文件
      if (link.type && link.type.toLowerCase() === 'text/css') {
        // 获取地址
        const href = link.href;
        // 截取文件相对地址（ '/assets/themes/app/module/default/index.css' ）
        const cssPath = href.substr(domainLen);
        // 查找样式文件目录是否有效
        const pos = urls.findIndex((value: { path: string; file: string }) => {
          // 判断是否从导入的模块路径开始
          return cssPath.startsWith(value.path);
        });
        // 判断是否找到
        if (pos === -1) continue;
        // 已经找到，获取模块目录( {path: '/assets/themes/app/module/', file: 'index.css'} )
        const pathFile = urls[pos];
        // 定义开始位置
        const namePos = cssPath.indexOf('/', pathFile.path.length);
        // 判断是否有效
        if (namePos === -1) continue;
        // 获取 CSS 文件名称
        const cssFile = cssPath.substr(namePos + 1);
        // 判断是否一致
        if (cssFile === pathFile.file) {
          // 需要移除的 link，增加到移除数组
          removes.push(link);
        }
      }
    }
    // 遍历移除数据
    for (const link of removes) {
      // 获取父节点
      const p = link.parentNode;
      // 移除对象
      if (p) p.removeChild(link);
    }
  }

  /**
   * 变换皮肤目录处理
   * @param theme 皮肤名称
   */
  public static changeTheme(theme: string): void {
    // 判断是否存在导入文件
    if (ThemesUtils.cssFiles.size === 0) return;
    // 获取所有样式
    const links = document.getElementsByTagName('link');
    // 判断是否有效
    if (!links || links.length === 0) return;
    // 获取页面域名和端口地址长度
    const domainLen = window.location.origin.length;
    // 获取模块目录数组
    const modulePaths = Array.from(ThemesUtils.cssFiles.keys());
    // 遍历检测链接地址
    for (let i = 0, c = links.length; i < c; i++) {
      // 获取一个链接对象
      const link = links[i] as HTMLLinkElement;
      // 判断是否 CSS 文件
      if (link.type && link.type.toLowerCase() === 'text/css') {
        // 获取地址
        const href = link.href;
        // 截取文件相对地址（ '/assets/themes/app/module/default/index.css' ）
        const cssPath = href.substr(domainLen);
        // 查找样式文件目录是否有效
        const pos = modulePaths.findIndex((value: string) => {
          // 判断是否从导入的模块路径开始
          return cssPath.startsWith(value);
        });
        // 判断是否找到
        if (pos === -1) continue;
        // 已经找到，获取模块目录( '/assets/themes/app/module/' )
        const modulePath = modulePaths[pos];
        // 定义开始位置
        const namePos = cssPath.indexOf('/', modulePath.length);
        // 判断是否有效
        if (namePos === -1) continue;
        // 获取样式目录名称 ( 'default' )
        const cname = cssPath.substring(modulePath.length, namePos);
        // 判断是否一致
        if (cname === theme) continue;
        // 获取模块下的样式文件，改变样式地址
        link.href = modulePath + theme + cssPath.substr(namePos);
      }
    }
    // TODO: 顶部嵌入样式也要改
  }

  /**
   * 添加顶部嵌入样式
   * @param key
   * @param path
   * @param theme
   * @returns {Promise<void>}
   */
  public static async addStyle(key: string, path: string, theme = 'default') {
    return fetch(path)
      .then((rs) => rs.text())
      .then((text) => {
        const style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.setAttribute('theme', theme);
        style.setAttribute('id', key);
        style.appendChild(document.createTextNode(text));
        document.head.append(style);
      });
  }

  /**
   * 获取主题下的资源地址
   * @param url 资源相对地址
   * @param config 模块配置
   * @param theme 主题 默认 'default'，不区分主题的话传 ''
   * @return {`/${string}`}
   */
  public static getAssetUrl(
    url: string,
    config: ModuleConfig,
    theme: string = 'default'
  ): string {
    const { app, module, themesPath } = config;
    return `/${[themesPath, app, module, theme, url]
      .filter((str) => !!str)
      .map((str) => str.replace(/^\/|\/$/g, ''))
      .join('/')}`;
  }
}
