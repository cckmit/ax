import { Md5 } from 'ts-md5';

/**
 * 加密工具类
 */
export class EncryptionUtils {
  protected constructor() {}

  /**
   * 使用 MD5 加密算法加密字符串
   * @param {string} str 需要加密的字符串
   * @returns {string} 加密结果字符串
   */
  public static md5(str: string): string {
    return `${Md5.hashStr(str)}`;
  }
}
