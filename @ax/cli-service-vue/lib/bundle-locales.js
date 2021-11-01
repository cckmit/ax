const rollup = require('rollup');
const ts = require('rollup-plugin-typescript2');
const fs = require('fs');
const { pascalCase } = require('change-case');

// 生成说明文档
let md = '> Output locales files for modules:\r\n\r\n';

/**
 * 生成国际化语言列表
 * @returns {Promise<void>}
 */
async function generate(options) {
  // 配置中支持的语言列表
  //   const langList = options.list;

  // 配置中支持的语言列表
  // 配置中需要国际化的模块目录
  const { main, modules, langList, moduleDir, localeDir, outDir } = options;

  md += `- Support language list: ${langList.join(' ')}\r\n`;
  md += '\r\n';
  md += '> Output locales files for modules:\r\n\r\n';

  // rollup 插件配置
  const plugins = [
    ts({
      tsconfigOverride: {
        compilerOptions: {
          target: 'esnext',
          module: 'esnext',
          strict: true,
          baseUrl: '.',
          declaration: false,
          outDir,
          lib: ['esnext'],
        },
        include: [`./`],
        exclude: ['node_modules'],
      },
      tsconfig: require.resolve('../tsconfig.locale.json'),
    }),
  ];
  // 遍历模块列表，因为目录问题，每个目录打包一次
  for (const dir of modules) {
    // 创建输入配置
    const bundle = await rollup.rollup({
      input: langList.map((lang) => {
        // 往说明文件中添加文件列表
        md += `- locale/${dir}/${lang}.js\r\n`;
        // 生成入口
        return `./${moduleDir}/${dir}/${localeDir}/${lang}.ts`;
      }),
      // 需要ts编译插件支持
      plugins,
    });
    // 输出配置
    const outputOptions = {
      dir: `${outDir}/${dir}`,
      format: 'es',
    };
    // 打包编译
    await bundle.generate(outputOptions);
    // 写入完成打包的文件
    await bundle.write(outputOptions);
  }
  // 全量国际化文件
  if (main) {
    md += '\r\n';
    md += '> Output locales files for main:\r\n\r\n';
    const promiseList = [];
    if (!fs.existsSync(`${outDir}`)) {
      fs.mkdirSync(`${outDir}`);
    }
    langList.forEach((lang) => {
      //#region 组装js
      let content = '';
      for (const dir of modules) {
        content += `import ${pascalCase(dir)} from './${dir}/${lang}';\r\n`;
      }
      content += `\r\n`;
      content += `const ${lang} = {\r\n`;
      for (const dir of modules) {
        content += `  '${dir}': ${pascalCase(dir)},\r\n`;
      }
      content += `};\r\n`;
      content += `\r\n`;
      content += `export default ${lang};`;
      //#endregion

      // 依次写入文件
      promiseList.push(
        new Promise((resolve, reject) => {
          fs.writeFile(`${outDir}/${lang}.js`, content, (err) => {
            if (err) {
              console.error(err);
              reject(err);
            }
            // 往说明文件中添加文件列表
            md += `- locale/${lang}.js\r\n`;
            resolve();
          });
        })
      );
    });
    await Promise.all(promiseList);
  }
}

/**
 * 打包流程
 * @param options
 * @returns {Promise<void>}
 */
function bundleLocale(options) {
  // 开始生成文件
  return generate(options).then(() => {
    // 打包成功后写入说明文件
    fs.writeFileSync(`${options.outDir}/README.md`, md);
  });
}

module.exports = bundleLocale;
