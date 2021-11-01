// 样式处理工具类
export default class StyleUtils {
  /**
   * 移除值的后缀
   * @param value
   * @returns {number}
   */
  public static removeSuffix(value: string | number): number {
    return typeof value === 'string'
      ? parseInt(value.replace(/(px)|(rem)/g, ''))
      : value;
  }

  /**
   * 获取根节点字体（px）
   * @return {number}
   */
  public static getRootFontSize(): number {
    // 返回获取的计算结果
    return StyleUtils.removeSuffix(
      getComputedStyle(window.document.documentElement)['fontSize']
    );
  }

  /**
   * rem转px
   * @param value
   * @returns {number}
   */
  public static remToPx(value: string | number): number {
    // 获取基准值
    const baseFont = StyleUtils.getRootFontSize();
    // 返回rem
    return StyleUtils.removeSuffix(value) * baseFont;
  }

  /**
   * rem转px 带rem后缀
   * @param value
   * @returns {string}
   */
  public static remToPxSuffix(value: string | number): string {
    // 返回rem
    return StyleUtils.remToPx(value) + 'rem';
  }

  /**
   * px转rem
   * @param value
   * @returns {number}
   */
  public static pxToRem(value: string | number): number {
    // 获取基准值
    const baseFont = StyleUtils.getRootFontSize();
    // 返回rem
    return StyleUtils.removeSuffix(value) / baseFont;
  }

  /**
   * px转rem 带px后缀
   * @param value
   * @returns {string}
   */
  public static pxToRemSuffix(value: string | number): string {
    // 返回rem
    return StyleUtils.pxToRem(value) + 'px';
  }
}
