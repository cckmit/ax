#!/usr/bin/env node
const defaultConfig = require('./config');
const merge = require('merge');
const bundleTypes = require('./bundle-types');
const bundleLocale = require('./bundle-locales');
const bundleModules = require('./bundle-modules');
const bundleMain = require('./bundle-main');

// 获取命令行参数
const argv = require('minimist')(process.argv.slice(2));

let configTarget = argv['c'] || 'ax.config.js';

// 获取ax配置文件
const { lib, types, locale } = require(`${process.cwd()}/${configTarget}`);

/**
 * 无效的提示
 */
function warn() {
  console.warn('使用 ax-cli-service lib 来打包项目');
  console.warn('使用 ax-cli-service types 来打包声明文件');
  console.warn('使用 ax-cli-service locale 来打包国际化文件');
}

// 判断命令是否有效
if (!(argv._ && argv._.length)) {
  warn();
}

// 获取指令
const action = argv._[0];

async function bin() {
  try {
    switch (action) {
      default:
        warn();
        break;
      // 打包功能代码
      case 'lib': {
        console.info('打包完整包：');
        await bundleMain(lib);
        console.info('打包模块：');
        await bundleModules(lib);
        break;
      }
      // 打包声明文件
      case 'types':
        await bundleTypes(types);
        console.info('声明文件打包完成');
        break;
      // 打包国际化文件
      case 'locale':
        // 混合配置文件
        await bundleLocale(merge.recursive(defaultConfig.locale, locale || {}));
        console.info('国际化文件打包完成');
        break;
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

bin().then();
