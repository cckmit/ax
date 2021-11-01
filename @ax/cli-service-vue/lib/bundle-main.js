const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const merge = require('merge');
const defaultConfig = require('./config');
const baseConfig = require('./webpack.base');
const cloneDeep = require('clone-deep');
const { mixWebpackConfig } = require('./utils');

/**
 * 混合配置
 * @param options
 */
function mixConfig(options) {
  // 复制配置文件
  const rs = cloneDeep(baseConfig);

  // 配置完整包入口
  if (typeof options.main === 'string') {
    rs.entry[options.main] = `./${options.moduleDir}/index.ts`;
  } else if (options.main.name) {
    rs.entry[options.main.name] =
      options.main.input || `./${options.main.input}/index.ts`;
  }

  return mixWebpackConfig(rs, options);
}

/**
 * 打包全部
 * @param options
 * @returns {Promise<void>}
 */
const bundleMain = (options) =>
  new Promise((resolve, reject) => {
    // 获取webpack配置
    const config = mixConfig(merge.recursive(defaultConfig.lib, options || {}));
    // 运行构建
    webpack(
      webpackMerge.default(config, options ? options.webpack || {} : {}),
      (err, res) => {
        if (err || res.hasErrors()) {
          console.log('完整包打包失败！\n');
          reject(err || res.compilation.errors);
        } else {
          console.log('完整包打包成功！\n');
          resolve(true);
        }
      }
    );
  });

module.exports = bundleMain;
