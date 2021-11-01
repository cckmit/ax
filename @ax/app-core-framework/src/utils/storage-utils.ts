import Cookies from 'js-cookie';

export default class StorageUtils {
  protected constructor() {}

  /**
   * 使用本地资源存储数据
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   * @param {*} value 数据值（任意数据）
   */
  public static localSave(moduleName: string, key: string, value: any): void {
    window.localStorage.setItem(moduleName + '-' + key, JSON.stringify(value));
  }

  /**
   * 从本地资源读取数据（未读取到则返回 defaultValue）
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   * @param {*} [defaultValue=null] 默认返回数据（不设置则为 null）
   * @returns {*} 读取到的数据对象（已经转换为对象）
   */
  public static localRead(
    moduleName: string,
    key: string,
    defaultValue: any = null
  ): any {
    const value = window.localStorage.getItem(moduleName + '-' + key);
    if (!value) return defaultValue;
    return JSON.parse(value) || defaultValue;
  }

  /**
   * 从本地资源移除数据
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   */
  public static localRemove(moduleName: string, key: string): void {
    window.localStorage.removeItem(moduleName + '-' + key);
  }

  /**
   * 从本地资源移除所有数据
   * @export
   */
  public static localClear(): void {
    window.localStorage.clear();
  }

  /**
   * 使用当前浏览器进程存储本地数据
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   * @param {*} value 数据值（任意数据）
   */
  public static sessionSave(moduleName: string, key: string, value: any): void {
    window.sessionStorage.setItem(
      moduleName + '-' + key,
      JSON.stringify(value)
    );
  }

  /**
   * 从当前浏览器进程读取本地数据（未读取到则返回 defaultValue）
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   * @param {*} [defaultValue=null] 默认返回数据（不设置则为 null）
   * @returns {*} 读取到的数据对象（已经转换为对象）
   */
  public static sessionRead(
    moduleName: string,
    key: string,
    defaultValue: any = null
  ): any {
    const value = window.sessionStorage.getItem(moduleName + '-' + key);
    if (!value) return defaultValue;
    return JSON.parse(value) || defaultValue;
  }

  /**
   * 从当前浏览器进程移除数据
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   */
  public static sessionRemove(moduleName: string, key: string): void {
    window.sessionStorage.removeItem(moduleName + '-' + key);
  }

  /**
   * 从当前浏览器进程移除所有数据
   * @export
   */
  public static sessionClear(): void {
    window.sessionStorage.clear();
  }

  /**
   * 使用当前浏览器 COOKIE 存储本地数据
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   * @param {*} value 数据值（任意数据）
   */
  public static cookieSave(moduleName: string, key: string, value: any): void {
    Cookies.set(moduleName + '-' + key, JSON.stringify(value));
  }

  /**
   * 从当前浏览器 COOKIE 读取本地数据（未读取到则返回 null）
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   * @param {*} [defaultValue=null] 默认返回数据（不设置则为 null）
   * @returns {*} 读取到的数据对象（已经转换为对象）
   */
  public static cookieRead(
    moduleName: string,
    key: string,
    defaultValue: any = null
  ): any {
    const value = Cookies.get(moduleName + '-' + key);
    if (!value) return defaultValue;
    return JSON.parse(value) || defaultValue;
  }

  /**
   * 从当前浏览器 COOKIE 移除数据
   * @export
   * @param {string} moduleName 模块名称
   * @param {string} key 数据键
   */
  public static cookieRemove(moduleName: string, key: string): void {
    Cookies.remove(moduleName + '-' + key);
  }
}
