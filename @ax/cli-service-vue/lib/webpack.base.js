const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    // 和tsconfig中的path保持一致
    alias: {
      '@': path.join(process.cwd(), './src'),
      '@modules': path.join(process.cwd(), './modules'),
    },
  },
  entry: {},
  output: {
    path: path.resolve(process.cwd(), `./lib`),
    publicPath: '/assets/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
  },
  externals: [
    nodeExternals({
      // yarn workspace 模式下的node_modules不在根目录
      additionalModuleDirs: ['../../node_modules'],
    }),
  ],
  performance: {
    hints: false,
  },
  stats: 'errors-only',
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        use: [
          // 多线程优化，使用默认配置
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              // 开启缓存
              cacheDirectory: true,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              // 多线程优化开启时必须打开这个选项
              happyPackMode: true,
              // 对vue文件的处理
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        // TODO: 这样写似乎是有问题的
        query: {
          limit: 10000,
          name: path.posix.join('assets/static', '[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  plugins: [new ProgressBarPlugin(), new VueLoaderPlugin()],
};
