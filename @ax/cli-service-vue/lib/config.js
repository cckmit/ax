module.exports = {
  // 模块打包配置
  lib: {
    // package.json中的包名称
    name: 'demo',
    // 模块目录
    moduleDir: 'modules',
    // 完整包
    main: 'index',
    // 模块列表
    modules: [],
    // 输出目录地址
    outDir: 'lib',
    // 会根据modules把 '{externalRoot}/meta' 这样的import改为 '{pkg.name}/{outDir}/meta'
    externalRoot: '@modules',
    // 是否使用MiniCssExtractPlugin插件提取css，默认false
    extractCss: false,
    // 是否使用ModuleAssetsHandler插件提取css，默认false,
    moduleCss: false,
  },
  types: {
    // 声明文件根目录
    dir: `typeOut`,
    // * 输入目录和文件
    input: `typeOut/modules/index.d.ts`,
    // * 输出目录和文件
    output: `typeOut/bundle.d.ts`,
    // 传入一个正则或者正则数组，替换掉诸如[import './coo.css']等dts会出错的内容(默认会替换掉样式的import)
    replace: [],
  },
  // 国际化文件打包配置
  locale: {
    // 是否是ts文件
    ts: true,
    // 支持的语言列表
    langList: [],
    // 全量导出该项目你国际化内容，值是项目的 app 名称，一般在项目的 modules/modules.json 中定义 name 字段
    main: '',
    // 模块列表，值是项目的 modules 名称列表
    modules: [],
    // 模块目录，默认 'modules'
    moduleDir: 'modules',
    // 模块目录下的国际化文件列表，默认 'locale'
    localeDir: 'locale',
    // 输出目录，默认 './lib/locale'
    outDir: './lib/locale',
  },
};
