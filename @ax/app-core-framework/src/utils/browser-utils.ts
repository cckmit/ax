export default class BrowserUtils {
  protected constructor() {}

  /**
   * 获取当前浏览器多国语言标识（如：zh_CN, en_US...）
   * @returns {string} 语言标识
   */
  public static getDefaultLanguageKey(): string {
    // 获取浏览器语言
    let lang = window.navigator.language
      ? window.navigator.language
      : (window.navigator as any).browserLanguage;
    // 判断是否有效
    if (!lang || lang.length === 0) {
      lang = 'en_US';
    } else {
      // 替换分隔符
      lang = lang.replace('-', '_');
      const pos = lang.indexOf('_');
      if (pos !== -1)
        lang = lang.substring(0, pos) + lang.substring(pos).toUpperCase();
      if (lang === 'zh') lang = 'zh_CN';
      if (lang === 'en') lang = 'en_US';
    }
    // 返回数据
    return lang;
  }
}
