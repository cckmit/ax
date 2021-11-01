import { TLangGlobal } from '@/global/locale/zh_CN';
import { AxLocale } from '@ax/app-core-framework';
import * as AxGlobalLocale from '@/export';

// 全局国际化对象
const AxGlobalLang = AxLocale.create<TLangGlobal>(
  AxGlobalLocale.GLOBAL_LANG_KEY
);

export default AxGlobalLang;
