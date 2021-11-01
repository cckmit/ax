import { AxLocale } from '@ax/app-core-framework';
import { TLangComponents } from './locale/zh_CN';

// 当前模块国际化对象
export const UILang = AxLocale.create<TLangComponents>('AxUI');

/**
 * 获取 AX 语言对象
 */
export function getAxLang(): {
  text(key: keyof TLangComponents, ...params: any[]): string;
} {
  return {
    text(key: keyof TLangComponents, ...params: any[]): string {
      return UILang.t(key, ...params);
    },
  };
}
