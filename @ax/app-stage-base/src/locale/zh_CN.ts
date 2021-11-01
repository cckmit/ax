const GlobalLang = {
  global: require('@ax/app-core-language/lib/locale/global/zh_CN').default,
  system: {
    title: '开发展示组件库',
  },
};

export default GlobalLang;

export type TMainLang = typeof GlobalLang.system;

export type TGlobalLang = typeof GlobalLang;
