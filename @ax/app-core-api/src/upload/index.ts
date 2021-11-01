import ApiCore from '../core';

// 上传类
export default class ApiUpload {
  /**
   * 获取上传地址
   * @returns {string}
   */
  public static getAction(): string {
    return `${ApiCore.HttpConfig.host.HOST_UPLOAD}upload/upload`;
  }

  /**
   * 通过key获取图片地址
   * @param key
   * @returns {string}
   */
  public static getImgUrl(key: string): string {
    return `${ApiCore.HttpConfig.host.HOST_UPLOAD}upload/get?key=${key}`;
  }
}
