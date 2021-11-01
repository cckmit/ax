import { ThemeMode } from '../const';
import { IRouterMeta } from '../interfaces';

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
}): IRouterMeta {
  return {
    module,
    label,
  };
}

/**
 * 设置展示
 * @param theme
 */
export function setThemeMode(theme: ThemeMode = ThemeMode.LIGHT) {
  Object.values(ThemeMode).forEach((mode) => {
    if (document.body.classList.contains(mode)) {
      document.body.classList.remove(mode);
    }
  });
  document.body.classList.add(theme);
}
