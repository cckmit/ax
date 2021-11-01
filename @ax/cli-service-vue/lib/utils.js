const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleAssetsHandler } = require('@ax/webpack-plugins');

/**
 * 通用的webpack配置
 * @param baseConfig 默认配置
 * @param options 额外选项
 */
function mixWebpackConfig(baseConfig, options) {
  // 是否使用MiniCssExtractPlugin插件提取css
  if (options.extractCss) {
    // 修改loader，替换掉'style-loader'
    baseConfig.module.rules.forEach((loader) => {
      if (
        loader.use &&
        loader.use.length &&
        loader.use.includes('style-loader')
      ) {
        loader.use = [
          // 提取css为单独的文件
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './',
            },
          },
          'css-loader',
          'sass-loader',
        ];
      }
    });
    baseConfig.plugins.push(new MiniCssExtractPlugin());
  }

  // 是否使用ModuleAssetsHandler插件提取css
  if (options.moduleCss) {
    if (options.moduleCss === true) {
      baseConfig.plugins.push(
        new ModuleAssetsHandler({
          // 模块根目录
          modulesDir: `${options.moduleDir}`,
          // 模块下资源文件放置目录
          moduleAssetsDir: 'src/assets',
          // 模块下皮肤文件放置目录
          moduleThemesDir: 'src/assets/themes',
          // 输出资源文件放置目录
          distAssetsDir: 'assets',
          // 输出皮肤文件放置目录
          distThemesDir: 'assets/themes',
        })
      );
    } else {
      baseConfig.plugins.push(new ModuleAssetsHandler(options.moduleCss));
    }
  }

  return baseConfig;
}

module.exports = {
  mixWebpackConfig,
};
