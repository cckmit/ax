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

const log = require('webpack-log');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

class CssThemes {

  constructor(options = {}) {
    // 定义选项({path})
    this.options = options || {};
    // 定义模板变量集合(键：模板前置路径，值：变量数组)
    this.varMap = new Map();
    // 定义监控的文件集合（键：文件相对路径；值：文件内容）
    this.watchingFiles = new Map();
    // 获取生成路径
    let path = this.options ? (this.options.path ? this.options.path : 'assets/themes') : 'assets/themes';
    // 以目录结束
    path = path.replace(/\\/g, '/');
    if (!path.endsWith('/')) path += '/';
    // 把路径转换为小写
    this.cssPath = path.toLowerCase();
  }

  /**
   * 实现插件入口方法
   * @param {*} compiler 插件编译器对象
   */
  apply(compiler) {

    // 创建日志对象
    const logger = log({
      name: 'css-themes',
      level: 'warn'
    });

    // 定义插件对象
    const plugin = {
      name: 'CssThemes'
    };

    // --------------------------- TODO: 生成资源逻辑 -------------------------

    // 生成最终资源（异步）
    compiler.hooks.emit.tapAsync(plugin, (compilation, callback) => {

      logger.debug('生成资源前处理...');

      // --------------------- 处理监控的文件 -------------------------

      // 获取资源数组
      const assets = compilation.assets;
      // 判断是否存在变化
      if (this.watchingFiles.size > 0) {
        // 遍历数据
        for (let [file, text] of this.watchingFiles) {
          // 直接设置数据
          assets[file] = {
            source: () => {
              return text;
            },
            size: () => {
              return text.length;
            }
          };
        }
      }
      // 清理集合
      this.watchingFiles.clear();

      // --------------------- 直接遍历所有文件 -------------------------

      // 遍历所有文件
      let filelist = 'CSS files:\r\n';
      // 定义异步数组
      const allPromise = [];
      // 遍历生成异步数组
      for (const filename in assets) {
        // 判断是否有效
        if (!filename) continue;
        // 判断是否模板目录
        if (filename.toLowerCase().startsWith(this.cssPath)) {
          // 累加文件
          filelist += ('- ' + filename + '\r\n');
          // 判断文件类型
          if (filename.toLowerCase().endsWith('.css')) {
            // 增加异步处理对象
            allPromise.push(this.encodeCSSPromise(assets, filename));
          } else if (filename.toLowerCase().endsWith('.var')) {
            // 变量定义文件，分析变量名称
            this.analyzeVarFile(assets, filename);
          }
        }
      }

      // 判断是否存在数据
      if (allPromise.length > 0) {

        // 批量执行
        Promise.all(allPromise).catch((error) => {
          compilation.errors.push(error);
        }).then(() => {

          // 全部执行完成，再次遍历资源
          for (const filename in assets) {
            // 判断是否模板 CSS 文件
            if (filename && filename.toLowerCase().startsWith(this.cssPath) && filename.toLowerCase().endsWith('.css')) {
              // 替换变量内容
              this.replaceCSSVariables(assets, filename);
            }
          }

          // 把结果作为一个资源文件写入到 webpack
          assets['filelist.md'] = {
            source: () => {
              return filelist;
            },
            size: () => {
              return filelist.length;
            }
          };

          logger.debug('生成最终资源结束');
          // 回调处理
          callback();
        });
      } else {
        // 回调处理
        callback();
      }
    });


    // --------------------------- TODO: 监听资源变化处理 -------------------------


    // 当依赖的文件发生变化时会触发 watch-run 事件
    compiler.hooks.watchRun.tapAsync(plugin, (watching, callback) => {
      // 获取发生变化的文件列表
      const changedFiles = watching.watchFileSystem.watcher.mtimes;
      // 定义异步数组
      const allPromise = [];
      // 判断是否存在
      if (changedFiles) {
        // 获取文件根路径
        const root = watching.context;
        // 获取文件系统
        const infs = watching.inputFileSystem;
        // 遍历检测是否存在需要监控的数据
        for (let file in changedFiles) {
          // 判断是否有效
          if (!file) continue;
          // 移除前部分路径（排除 src 目录）
          let relfile = file.substring(root.length + 5).replace(/\\/g, '/');
          // 判断是否从皮肤目录开始
          if (relfile.toLowerCase().startsWith(this.cssPath)) {
            // 判断是否是变量文件
            if (relfile.toLowerCase().endsWith('.var')) {
              // 生成 CSS 目录文件夹
              const cssFolder = file.substring(0, file.length - 4) + '\\';
              // 读取目录下的所有CSS文件
              const files = infs.readdirSync(cssFolder);
              // 遍历数据
              if (files && files.length > 0) {
                // 遍历数据
                for (let index = 0; index < files.length; index++) {
                  // 获取一个文件名称
                  const cssf = files[index];
                  // 读取文件属性
                  const cssStat = infs.statSync(cssFolder + cssf);
                  // 判断是否是 CSS 文件
                  if (cssStat.isFile() && cssf.toLowerCase().endsWith('.css')) {
                    // 获取css相对路径
                    const cssfr = relfile.substring(0, relfile.length - 4) + '/' + cssf;
                    // 读取文件处理，用于更新变量
                    allPromise.push(this.readAssetFile(infs, cssfr, cssFolder + cssf));
                  }
                }
              }
            }
            // 增加异步读取对象到数组
            allPromise.push(this.readAssetFile(infs, relfile, file));
          }
        }
      }
      // 判断是否存在数据
      if (allPromise.length > 0) {
        // 批量执行
        Promise.all(allPromise).catch((error) => {
          logger.debug(error);
        }).then(() => {
          // 回调处理
          callback();
        });
      } else {
        // 回调处理
        callback();
      }
    });

  }

  /**
   * 异步读取文件处理
   * @param {*} inputFileSystem 文件对象
   * @param {*} relfile 文件相对路径
   * @param {*} path 文件完整路径
   */
  readAssetFile(inputFileSystem, relfile, path) {
    // 创建异步对象
    new Promise((resolve, reject) => {
      // 清除缓存
      inputFileSystem.purge(path);
      // 读取文件处理
      inputFileSystem.readFile(path, (err, stats) => {
        if (err) {
          reject(err);
        } else {
          // 保存到集合
          this.watchingFiles.set(relfile, stats);
          resolve();
        }
      });
    });
  }

  /**
   * 替换所有数据方法
   * @param {*} regStr 正则表达式或其它字符串
   * @param {*} src 源字符串
   * @param {*} replacement 需替换的字符串
   */
  replaceAll(regStr, src, replacement) {
    // 修正正则表达式关键字
    regStr = regStr.replace(/([\$\(\)\[\]\{\}\*\+\-\?\\\^\|\.\\])/mg, function ($0) {
      return ("\\" + $0);
    });
    // 执行替换处理
    return src.replace(new RegExp(regStr, 'g'), replacement);
  }

  /**
   * 分析变量文件处理
   * @param {*} assets 资源内容数组
   * @param {*} filename 变量文件路径名称
   */
  analyzeVarFile(assets, filename) {
    // 获取文件文本
    const content = assets[filename].source();
    // 变量定义文件，获取模板名称
    const path = filename.substring(0, filename.lastIndexOf('.')) + '/';
    // 判断文本是否存在
    if (content && content.length > 0) {
      // 定义字符串匹配对象
      const varRegExp = new RegExp("(\\$[^\\:]*):\\s*([^\\;]*)(\\;)", "g")
      // ArrayBuffer 转换为字符串
      let text = content.toString();
      // 具有内容，替换注解
      text = text.replace(/(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g, '').replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g, '').replace(/[\r\n]+/g, ';').replace(/\;+/g, ';');
      // 定义搜索结果变量
      let res;
      // 定义变量数组
      const varArray = [];
      // 查找匹配项目: $BODY-COLOR:#FFFFFF;
      while ((res = varRegExp.exec(text)) != null && res.length > 3) {
        // 把测试结果增加到数组
        varArray.push({
          k: res[1].trim(),
          v: res[2].trim()
        });
      }
      // 移除之前的数据，不需要发布
      delete assets[filename];
      // 增加结果到模板集合
      this.varMap.set(path, varArray);
    }
  }

  /**
   * 编码 CSS 文件处理
   *
   * @param {*} assets 资源内容数组
   * @param {*} filename 变量文件路径名称
   * @returns  异步处理对象
   */
  encodeCSSPromise(assets, filename) {
    // 返回异步对象
    return new Promise((resolve, reject) => {
      // 定义选项数据
      const processOptions = Object.assign({
        from: filename,
        to: filename
      });
      // 获取文件文本
      const content = assets[filename].source();
      // 处理 CSS 文件内容，增加浏览器支持
      autoprefixer.process(content, processOptions).then(result => {
        // 判断是否成功
        if (!result) {
          // 失败
          reject('Compile failed: ' + filename);
        } else {
          // 压缩文件
          cssnano.process(result.css, processOptions).then(result => {
            // 判断是否成功
            if (!result) {
              // 失败
              reject('Compile failed: ' + filename);
            } else {
              // 替换内容
              assets[filename] = {
                source() {
                  return result.css;
                },
                size() {
                  return result.css.length;
                }
              };
              resolve();
            }
          });
        }
      });
    });
  }

  /**
   * 替换CSS文件内的变量
   * @param {*} assets 资源数组
   * @param {*} filename 文件名称
   */
  replaceCSSVariables(assets, filename) {
    // 变量定义文件，获取模板名称
    const path = filename.substring(0, filename.indexOf('/', this.cssPath.length) + 1);
    // 获取模板对应的替换变量
    const varArray = this.varMap.get(path);
    // 判断是否有效
    if (varArray && varArray.length > 0) {
      // 获取文件内容
      let css = assets[filename].source();
      // 判断是否有效
      if (css && css.length > 0) {
        // 遍历数据
        for (let index = 0; index < varArray.length; index++) {
          // 获取一个对象{k,v}
          const varObj = varArray[index];
          // 替换文件数据
          css = this.replaceAll("'" + varObj.k + "'", css, varObj.v);
          css = this.replaceAll("\"" + varObj.k + "\"", css, varObj.v);
        }
        // 替换完毕，重新置换文件
        assets[filename] = {
          source() {
            return css;
          },
          size() {
            return css.length;
          }
        };
      }
    }
  }

}

module.exports = CssThemes;
