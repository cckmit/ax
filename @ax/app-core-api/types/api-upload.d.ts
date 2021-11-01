// 上传类
export declare class ApiUpload {
  /**
   * 获取上传地址
   * @returns {string}
   */
  public static getAction(): string;

  /**
   * 通过key获取图片地址
   * @param key
   * @returns {string}
   */
  public static getImgUrl(key: string): string;
}

export default ApiUpload;
