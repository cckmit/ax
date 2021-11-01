const regNodeBase = 'node_modules';
const regSplitSymbol = '[\\\\/]';

function mixList(options, base, key) {
  return options && options[key] && options[key].length
    ? [...base, ...options[key]]
    : base;
}

function getChuckConfig(options, extConfig) {
  // 基本
  const groups = {
    common: {
      name: 'chunk-common', // 打包后的文件名
      chunks: 'initial', //
      minChunks: 2,
      maxInitialRequests: 5,
      minSize: 0,
      priority: 1,
      reuseExistingChunk: true,
    },
    vendors: {
      name: 'chunk-vendors',
      test: /[\\/]node_modules[\\/]/,
      chunks: 'all',
      priority: 20,
      reuseExistingChunk: true,
      enforce: true,
    },
  };
  // 国际化整合到一个包中
  const localList = mixList(options, ['en_US', 'zh_CN'], 'localeList');
  const prefixGroup = mixList(
    options,
    ['@ax', '@app-system', '@app-data', '@app-biz'],
    'localePrefixList'
  ).join('|');
  localList.forEach((name) => {
    Object.assign(groups, {
      [`ax-locale-${name}`]: {
        name: `ax-locale-${name}`,
        test: new RegExp(`(${prefixGroup}).+?[\\\\/]${name}`),
        chunks: 'all',
        priority: 100,
        reuseExistingChunk: true,
        enforce: true,
      },
    });
  });
  // AX核心库列表 （api、framework等基础类库不需要额外分包）
  const axCoreList = mixList(
    options,
    [
      'app-core-api',
      'app-core-cas',
      'app-core-components',
      'app-core-gis',
      'app-core-modules',
      'app-core-style',
      'app-core-visual',
    ],
    'axList'
  );
  axCoreList.forEach((name) => {
    Object.assign(groups, {
      [`ax-${name}`]: {
        name: `ax-${name}`,
        test: new RegExp([regNodeBase, '@ax', name].join(regSplitSymbol)),
        chunks: 'all',
        priority: 40,
        reuseExistingChunk: true,
        enforce: true,
      },
    });
  });
  // 第三方列表
  const extList = mixList(
    options,
    ['element-ui', 'vzsdk', 'fabric', 'echarts', 'zrender', 'vue-color'],
    'extList'
  );
  extList.forEach((name) => {
    Object.assign(groups, {
      [`ext-${name}`]: {
        name: `ext-${name}`,
        test: new RegExp([regNodeBase, name].join(regSplitSymbol)),
        chunks: 'all',
        priority: 40,
        reuseExistingChunk: true,
        enforce: true,
      },
    });
  });
  // 模块列表
  const moduleList = mixList(options, [], 'moduleList');
  // 模块列表
  moduleList.forEach(({ group, package, list }) => {
    list.forEach((module) => {
      const name = module.name || module;
      Object.assign(groups, {
        [`module-${name}`]: {
          name,
          test: new RegExp(
            [regNodeBase, group, package, 'lib', name].join(regSplitSymbol)
          ),
          chunks: 'all',
          priority: 50,
          reuseExistingChunk: true,
          enforce: true,
        },
      });
    });
  });
  return Object.assign(groups, extConfig);
}

const ChuckSplit = {
  mixList,
  getChuckConfig,
};

module.exports = ChuckSplit;
