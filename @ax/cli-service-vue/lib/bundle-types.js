const rollup = require('rollup');
const dts = require('rollup-plugin-dts');
const replace = require('replace-in-file');

const inputOptions = {
  input: 'typeTmp/modules/index.d.ts',
  plugins: [dts.default()],
};
const outputOptions = {
  file: 'types/output.d.ts',
  format: 'es',
};

const bundleTypes = async ({ input, output, dir }) => {
  inputOptions.input = input;
  outputOptions.file = output;

  // 替换生成文件中的 import css 的代码
  // TODO：并不是什么比较好的解决方案，最好在webpack构建过程中ts生成dts时就替换掉
  const changedFiles = await replace.replaceInFile({
    files: [`${dir}/**/*.d.ts`],
    from: /import .+.s?css';?/g,
    to: '',
  });
  console.info('样式导入替换完成，处理文件数量', changedFiles.length);

  const bundle = await rollup.rollup(inputOptions);
  await bundle.generate(outputOptions);
  await bundle.write(outputOptions);
};

module.exports = bundleTypes;
