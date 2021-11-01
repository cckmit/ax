// 国际化语言对象
export type TLocale = { [key: string]: any };

// 全局的国际化语言对象
export type TLocaleGlobal = { global: TLocale; [key: string]: TLocale };

// 模块国际化配置
export type TLocaleModuleConfig = { app?: string; module: string };
