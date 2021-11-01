// 模块资源管理及SCSS编码处理工具
// ---------------------- 调试说明 ----------------------
// VSCODE 使用一下配置启动调试:
// {
//   "type": "node",
//   "request": "launch",
//   "name": "Launch Program",
//   "program": "${workspaceRoot}/node_modules/@vue/cli-service/bin/vue-cli-service.js",
//   "stopOnEntry": false,
//   "args": ["serve"],
//   "runtimeArgs": [
//     "--inspect-brk"
//   ],
//   "cwd": "${workspaceRoot}",
//   "sourceMaps": true,
//   "console": "integratedTerminal",
//   "port": 9229
// }

const precss = require("precss");
const postcss = require("postcss");
const sassextend = require("postcss-extend");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
// const postcssImport = require("postcss-import");

/**
 * 模块资源管理及SCSS编码处理工具
 * options: {modulesDir, moduleAssetsDir, moduleThemesDir, distAssetsDir, distThemesDir}
 */
class ModuleAssetsHandler {
  /**
   * 构造函数
   * @param {*} options 选项（ {modulesDir, moduleAssetsDir, moduleThemesDir, distAssetsDir, distThemesDir} ）
   */
  constructor(options = {}) {
    // 定义选项
    this.options = options || {};
    // 获取模块目录
    this.modulesDir = this.getOptionsPath(options, "modulesDir", "modules");
    // 模块下资源文件放置目录
    this.moduleAssetsDir = this.getOptionsPath(
      options,
      "moduleAssetsDir",
      "src/assets"
    );
    // 模块下皮肤文件放置目录
    this.moduleThemesDir = this.getOptionsPath(
      options,
      "moduleThemesDir",
      "src/assets/themes"
    );
    // 输出资源文件放置目录
    this.distAssetsDir = this.getOptionsPath(
      options,
      "distAssetsDir",
      "assets"
    );
    // 输出皮肤文件放置目录
    this.distThemesDir = this.getOptionsPath(
      options,
      "distThemesDir",
      "assets/themes"
    );
    // 定义监测到变化的文件集合（键：模块名称；值：变化的文件地址数组）
    this.modifiedFiles = new Map();
  }

  /**
   * 实现插件入口方法
   * @param {*} compiler 插件编译器对象
   */
  apply(compiler) {
    // 定义插件对象
    const plugin = {
      name: "ModuleAssetsHandler",
    };

    // --------------------------- TODO: 生成资源逻辑 -------------------------

    // 生成最终资源（异步）
    compiler.hooks.emit.tapAsync(plugin, (compilation, callback) => {
      // 获取文件读取对象
      const infs = compilation.inputFileSystem;
      // 创建资源集合（键：资源文件完整路径；值：资源文件信息：{outfile, isCss, isThemes, config}）
      const outmap = new Map();
      // 获取资源数组
      const assets = compilation.assets;

      // 读取模块信息: [{ module, config: {app, module, themesPath} }]
      // ( Map<key: 'gis-map', value: {app: 'core-gis', module: 'gis-map', themesPath: '/assets/themes/' }> )
      const modules = this.getModulesInfo(infs);

      // --------------------- 处理存在改动的文件 ----------------------

      // 判断是否存在文件改动
      if (this.modifiedFiles.size > 0) {
        // 判断是否文件改变（键：模块名称；值：变化的文件目录地址数组）
        // (key: 'gis-map', value: ['modules/gis-map/src/assets/xxxxxxxxxxxxxxx.css'] )
        if (this.modifiedFiles.size > 0) {
          // 存在改动，获取改动目录下的样式文件
          for (const [key, files] of this.modifiedFiles) {
            // 获取模块配置数据
            const config = modules.get(key);
            // 判断是否存在配置
            if (!config) continue;
            // 整理输出到集合
            this.setOutputFile(outmap, config, files);
          }
          // 清理数据
          this.modifiedFiles.clear();
        }
      } else {
        // 未存在临时改动，遍历模块数据
        // ( Map<key: 'gis-map', value: {app: 'core-gis', module: 'gis-map', themesPath: '/assets/themes/' }> )
        for (const [key, config] of modules) {
          // 判断皮肤目录是否在资源目录内
          if (this.moduleThemesDir.startsWith(this.moduleAssetsDir)) {
            // 资源文件目录包含了皮肤文件目录
            this.getModuleFiles(
              outmap,
              infs,
              config,
              this.modulesDir + key + "/" + this.moduleAssetsDir
            );
          } else {
            // 目录不同，先处理皮肤目录
            this.getModuleFiles(
              outmap,
              infs,
              config,
              this.modulesDir + key + "/" + this.moduleThemesDir
            );
            // 再处理资源目录
            this.getModuleFiles(
              outmap,
              infs,
              config,
              this.modulesDir + key + "/" + this.moduleAssetsDir
            );
          }
        }
      }

      // --------------------- 遍历读取、处理并输出文件 ----------------------

      // 定义异步数组
      const allPromise = [];
      // 遍历所有文件
      let filelist = ">> Output assets files for modules:\r\n";
      // 遍历集合数据（键：读取资源文件完整路径；值：输出资源文件信息：{outfile, isCss, isThemes, config} ）
      for (const [infile, outinfo] of outmap) {
        // 获取配置信息 {app, module, themesPath}
        const config = outinfo.config;

        // 定义输出路径
        let outPath;
        // 判断是否是皮肤目录文件
        if (outinfo.isThemes) {
          // 生成 CSS 输出路径( 'dist/assets/themes/app/module/' )
          outPath = this.distThemesDir + config.app + "/" + config.module + "/";
        } else {
          // 一般文件，生成输出路径( 'dist/assets/' )
          outPath = this.distAssetsDir;
        }
        // 获取文件输出名称( 'xxxxxxxx.jpg' / 'default/index.css' )
        const outfile = outPath + outinfo.outfile;
        // 累加文件
        filelist += outfile + "\r\n";
        // 判断是否 css 文件
        if (outinfo.isCss) {
          // CSS 文件，增加异步处理对象
          allPromise.push(
            this.processCssFile(compilation, infs, assets, infile, outfile)
          );
        } else {
          // 其它文件，直接读取文件到资源
          allPromise.push(
            this.processNormalFile(infs, assets, infile, outfile)
          );
        }
      }

      // 判断是否存在数据
      if (allPromise.length > 0) {
        // 批量执行
        Promise.all(allPromise)
          .catch((error) => {
            compilation.errors.push(error);
          })
          .then(() => {
            // 把结果作为一个资源文件写入到 webpack
            assets[this.distAssetsDir + "modules.md"] = {
              source: () => {
                return filelist;
              },
              size: () => {
                return filelist.length;
              },
            };

            // 回调处理
            callback();
          });
      } else {
        // 异步通知完成
        new Promise((resolve, reject) => {
          resolve();
        }).then(() => {
          callback();
        });
      }
    });

    // 完成提交处理
    compiler.hooks.afterEmit.tapAsync(plugin, (compilation, callback) => {
      // 生成监控目录
      let path = this.modulesDir;
      // 累加根目录
      path = compilation.compiler.context + "\\" + path.replace(/\//g, "\\");
      // 增加监控目录
      if (!compilation.contextDependencies.has(path)) {
        // 增加到监控
        compilation.contextDependencies.add(path);
      }
      // 回调处理
      callback();
    });

    // --------------------------- TODO: 监听资源变化处理 -------------------------

    // 当依赖的文件发生变化时会触发 watch-run 事件
    compiler.hooks.watchRun.tapAsync(plugin, (watching, callback) => {
      // 获取发生变化的文件列表
      const changedFiles = watching.watchFileSystem.watcher.mtimes;
      // 判断是否存在
      if (changedFiles) {
        // 获取文件根路径
        const root = watching.context;
        // 遍历检测是否存在需要监控的数据
        for (const file in changedFiles) {
          // 判断是否有效
          if (!file) continue;
          // 移除前部分路径
          const relfile = file.substring(root.length + 1).replace(/\\/g, "/");
          // 判断是否从模块目录开始( 'modules/gis-map/src/assets/xxxxxxxxxxxxxxx' )
          if (relfile.startsWith(this.modulesDir)) {
            // 查找下一个目录分隔符
            let pos = relfile.indexOf("/", this.modulesDir.length);
            // 判断是否存在
            if (pos === -1) continue;
            // 获取模块名称
            const module = relfile.substring(this.modulesDir.length, pos);
            // 获取模块下资源文件相对目录( 'src/assets/xxxxxxxxxxxxxx' )
            const apath = relfile.substr(pos + 1);
            // 判断是否从资源文件目录开始( 'src/assets/' 和 'src/assets/themes/' )
            if (
              !apath.startsWith(this.moduleAssetsDir) &&
              !apath.startsWith(this.moduleThemesDir)
            )
              continue;
            // 获取模块数据数组
            let moduleFiles = this.modifiedFiles.get(module);
            // 判断是否存在
            if (!moduleFiles) {
              // 创建新数组
              moduleFiles = [];
              // 增加到集合
              this.modifiedFiles.set(module, moduleFiles);
            }
            // 增加数据到数组( 'modules/gis-map/src/assets/xxxxxxxxxxxxxxx.jpg' )
            moduleFiles.push(relfile);
          }
        }
      }
      // 异步通知完成
      new Promise((resolve, reject) => {
        resolve();
      }).then(() => {
        callback();
      });
    });
  }

  // --------------------------- TODO: 辅助方法定义 -------------------------

  /**
   * 获取选项路径处理（修正最后附带 / 结束）
   * @param {*} options 选项对象
   * @param {*} attr 属性
   * @param {*} defaultValue 默认值
   */
  getOptionsPath(options, attr, defaultValue) {
    // 获取生成路径
    let path = options
      ? options[attr]
        ? options[attr]
        : defaultValue
      : defaultValue;
    // 以目录结束
    path = path.replace(/\\/g, "/");
    if (path.startsWith("/")) path = path.substr(1);
    if (!path.endsWith("/")) path += "/";
    // 返回路径
    return path;
  }

  /**
   * 获取多个模块信息
   * @param infs 文件对象
   * @returns Map<module, {app, module, themesPath}> 模块配置数据
   * ( Map<key: 'gis-map', value: {app: 'core-gis', module: 'gis-map', themesPath: '/assets/themes/' }> )
   */
  getModulesInfo(infs) {
    // 定义返回数组
    const ret = new Map();
    // 读取目录所有一级模块及文件
    const files = infs.readdirSync(this.modulesDir);
    // 遍历数据
    if (files && files.length > 0) {
      // 遍历数据
      for (let index = 0; index < files.length; index++) {
        // 获取一个文件名称
        const fname = files[index];
        // 组合完整路径
        const filePath = this.modulesDir + fname;
        // 读取文件属性
        const fileInfo = infs.statSync(filePath);
        // 判断是否文件夹
        if (fileInfo.isDirectory()) {
          try {
            // 模块文件夹，读取模块下的配置文件
            const configInfo = infs.readJsonSync(filePath + "/module.json");
            // 设置文件数据( Map<key: 'gis-map', value: {app: 'core-gis', module: 'gis-map', themesPath: '/assets/themes/' }> )
            ret.set(fname, configInfo);
          } catch (error) {}
        }
      }
    }
    // 返回模块数据
    return ret;
  }

  /**
   * 设置输出文件处理
   * @param {*} outmap 输出集合（键：资源文件完整路径；值：资源文件信息：{outfile, isCss, isThemes, config}）
   * @param {*} config 配置数据( {app: 'core-gis', module: 'gis-map', themesPath: '/assets/themes/' } )
   * @param {*} files 完整输入路径数组( ['modules/gis-map/src/assets/xxxxxxxxxxxxxxx.jpg'] )
   */
  setOutputFile(outmap, config, files) {
    // 判断文件数组
    if (!files || files.length === 0) return;
    // 获取模块名称
    const module = config.module;
    // 获取原来文件开始路径( 'modules/gis-map/src/assets/' )
    const orgAssetPath = this.modulesDir + module + "/" + this.moduleAssetsDir;
    // 获取资源文件开始长度
    const orgAssetLen = orgAssetPath.length;
    // 获取原来的皮肤资源路径( 'modules/gis-map/src/assets/themes/' )
    const orgThemePath = this.modulesDir + module + "/" + this.moduleThemesDir;
    // 获取资源文件开始长度
    const orgThemeLen = orgThemePath.length;
    // 遍历模块下多个文件
    for (const file of files) {
      // 定义输出文件路径
      let outPath = "";
      // 定义是否是皮肤文件标识
      let isThemes;
      // 判断是否皮肤文件
      if (file.startsWith(orgThemePath)) {
        // 皮肤文件路径( 'modules/gis-map/src/assets/themes/default/xxxxxxxxxxxxxxx.css' -> 'default/xxxxxxxxxxxxxxx.css' )
        outPath = file.substr(orgThemeLen);
        // 设置为皮肤文件
        isThemes = true;
      } else if (file.startsWith(orgAssetPath)) {
        // 其它资源文件路径( 'modules/gis-map/src/assets/xxxxxxxxxxxxxxx.jpg' -> 'xxxxxxxxxxxxxxx.jpg' )
        outPath = file.substr(orgAssetLen);
        // 设置非皮肤文件
        isThemes = false;
      } else {
        // 非资源文件
        continue;
      }
      // 修正文件扩展名
      if (outPath.endsWith(".scss")) {
        // 输出为 CSS 文件
        outPath = outPath.substring(0, outPath.length - 5) + ".css";
      }
      // 判断是否是 CSS 文件标识
      const isCss = outPath.endsWith(".css");
      // 增加到集合（键：资源文件完整路径；值：资源文件信息：{outfile, isCss, isThemes, config}）
      outmap.set(file, {
        outfile: outPath,
        isCss: isCss,
        isThemes: isThemes,
        config: config,
      });
    }
  }

  // --------------------------- TODO: 遍历查找文件处理 -------------------------

  /**
   * 读取模块文件处理
   * @param {*} outmap 输出集合（键：读取资源文件完整路径；值：输出资源文件信息：{outfile, isCss, isThemes, config} ）
   * @param {*} infs 文件读取对象
   * @param {*} config 当前模块配置信息( {app: 'core-gis', module: 'gis-map', themesPath: '/assets/themes/' } )
   * @param {*} path 当前需搜索的目录( 'modules/gis-map/src/assets/' )
   */
  getModuleFiles(outmap, infs, config, path) {
    try {
      // 读取目录下的所有文件名称
      const files = infs.readdirSync(path);
      // 定义输出文件数组
      const outFiles = [];
      // 遍历数据
      if (files && files.length > 0) {
        // 遍历数据
        for (let index = 0; index < files.length; index++) {
          // 获取一个文件名称
          const file = files[index];
          // 组合完整路径
          const filePath = path + file;
          // 读取文件属性
          const stat = infs.statSync(filePath);
          // 判断是否文件夹
          if (stat.isDirectory()) {
            // 文件夹，继续读取下级数据
            this.getModuleFiles(outmap, infs, config, filePath + "/");
          } else if (stat.isFile()) {
            // 增加到文件数组
            outFiles.push(filePath);
          }
        }
      }
      // 把文件数组设置到输出集合内
      this.setOutputFile(outmap, config, outFiles);
    } catch (error) {}
  }

  // --------------------------- TODO: 普通文件复制处理 -------------------------

  /**
   * 异步读取文件处理（自动处理缓存）
   * @param {*} inputFileSystem 文件对象
   * @param {*} inname 读取的文件路径
   * @param {*} outname 输出的文件路径
   * @returns {Promise} 异步处理对象
   */
  processNormalFile(infs, assets, inname, outname) {
    // 创建异步对象
    return new Promise((resolve, reject) => {
      // 读取文件处理
      infs.readFile(inname, (err, stats) => {
        if (err) {
          reject(err);
        } else {
          // 设置到资源对象
          assets[outname] = {
            source: () => {
              return stats;
            },
            size: () => {
              return stats.length;
            },
          };
          resolve();
        }
      });
    });
  }

  // --------------------------- TODO: CSS 编码方法定义 -------------------------

  /**
   * 处理 CSS 文件
   * @param {*} compilation 编译对象
   * @param {*} infs 输入文件流对象
   * @param {*} assets 当前资源数组
   * @param {*} inname 读取的文件路径名称
   * @param {*} outname 输出的文件路径名称
   * @returns 异步处理对象
   */
  processCssFile(compilation, infs, assets, inname, outname) {
    // 返回异步对象
    return new Promise((resolve, reject) => {
      // 读取文件
      this.readAssetFile(infs, inname).then(
        (content) => {
          // 格式化
          this.encodeCssPromise(compilation, inname, content).then(
            (text) => {
              // 设置到资源
              assets[outname] = {
                source: () => {
                  return text;
                },
                size: () => {
                  return text.length;
                },
              };
              resolve();
            },
            (err) => {
              reject(err);
            }
          );
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  /**
   * 异步读取文件处理（强制清理缓存）
   * @param {*} infs 文件对象
   * @param {*} infile 文件路径
   * @returns {Promise} 异步处理对象
   */
  readAssetFile(infs, infile) {
    // 创建异步对象
    return new Promise((resolve, reject) => {
      // 清除缓存
      infs.purge(infile);
      // 读取文件处理
      infs.readFile(infile, (err, stats) => {
        if (err) {
          reject(err);
        } else {
          resolve(stats);
        }
      });
    });
  }

  /**
   * 编码 CSS 文件处理
   * @param {*} compilation 编译对象
   * @param {*} filename SASS 文件路径及名称
   * @param {*} content 文件内容(ArrayBuffer)
   * @returns  异步处理对象
   */
  encodeCssPromise(compilation, filename, content) {
    // 返回异步对象
    return new Promise((resolve, reject) => {
      // 定义选项数据
      const processOptions = Object.assign({
        from: filename,
        to: filename,
      });
      postcss([
        precss(),
        require("postcss-automath"),
        sassextend(),
        autoprefixer(),
        cssnano(),
      ])
        .process(content, processOptions)
        .catch((error) => {
          compilation.errors.push(error);
        })
        .then(
          (result) => {
            // 判断是否成功
            if (!result) {
              // 失败
              reject("Compile failed: " + filename);
            } else {
              // 返回结果内容
              resolve(result.css);
            }
          },
          (error) => {
            // 失败
            reject("Compile failed: " + error);
          }
        );
    });
  }

  /**
   * 替换内容的注释文本
   * @param {*} content 内容对象
   * @returns 替换后的文本
   */
  replaceCommemts(content) {
    // 转换为字符串
    let text = content instanceof Buffer ? content.toString() : content;
    // 替换注释
    text = text
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g, "")
      .replace(/[\r\n]+/g, "\n");
    // 返回数据
    return text;
  }
}

module.exports = ModuleAssetsHandler;
