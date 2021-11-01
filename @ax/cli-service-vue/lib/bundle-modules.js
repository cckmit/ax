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

  // 配置模块引用
  const externals = {};

  // 配置模块包入口
  if (options.modules && options.modules.length) {
    options.modules.forEach((module) => {
      // 模块名称
      let name = '';
      // 模块所在目录
      let dir = '';
      if (typeof module === 'string') {
        // 如果module时string类型，视为name和dir相同
        name = dir = module;
        // 设置入口
        rs.entry[name] = `./${options.moduleDir}/${name}/index.ts`;
      } else if (module.name) {
        name = module.name;
        dir = module.dir || name;
        // 设置入口
        rs.entry[name] =
          module.input || `./${options.moduleDir}/${dir}/index.ts`;
      }
      // 通过目录设置external，隔离分包
      if (name && dir && options.externalRoot) {
        externals[
          `${options.externalRoot}/${dir}`
        ] = `${options.name}/${options.outDir}/${name}`;
      }
    });
  }

  rs.externals.push(externals);

  return mixWebpackConfig(rs, options);
}

/**
 * 打包模块
 * @param options
 * @returns {Promise<void>}
 */
const bundleModules = (options) =>
  new Promise((resolve, reject) => {
    // 获取webpack配置
    const config = mixConfig(merge.recursive(defaultConfig.lib, options || {}));
    // 运行构建
    webpack(
      webpackMerge.default(config, options ? options.webpack || {} : {}),
      (err, res) => {
        if (err || res.hasErrors()) {
          console.log('模块打包失败！\n');
          reject(err || res.compilation.errors);
        } else {
          console.log('模块包打包成功！\n');
          resolve(true);
        }
      }
    );
  });

module.exports = bundleModules;
