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

const precss = require('precss');
const sassextend = require('postcss-extend');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

class SassThemes {

  constructor(options = {}) {
    // 定义选项(格式：{src, path})
    this.options = options || {};
    // 获取源文件路径
    this.srcPath = this.getOptionsPath(options, 'src', 'src/');
    // 设置当前 CSS 路径
    this.cssPath = this.getOptionsPath(options, 'path', 'assets/themes/');
    // 定义监测到 CSS 文件变化的目录数组
    this.modifiedCssPaths = new Set();
    // 定义监测到的非 CSS 文件变化的目录数组
    this.modifiedFiles = new Set();
  }

  /**
   * 实现插件入口方法
   * @param {*} compiler 插件编译器对象
   */
  apply(compiler) {

    // 定义插件对象
    const plugin = {
      name: 'SassThemes'
    };

    // --------------------------- TODO: 生成资源逻辑 -------------------------

    // 生成最终资源（异步）
    compiler.hooks.emit.tapAsync(plugin, (compilation, callback) => {

      // 获取文件读取对象
      const infs = compilation.inputFileSystem;
      // 创建资源集合（键：资源源文件名称；值：资源文件信息：{outfile, isCss}）
      const outmap = new Map();
      // 获取资源数组
      const assets = compilation.assets;
      // 判断是否存在文件改动
      if (this.modifiedCssPaths.size > 0 || this.modifiedFiles.size > 0) {
        // 判断是否 CSS 文件改变
        if (this.modifiedCssPaths.size > 0) {
          // 存在改动，获取改动目录下的样式文件
          for (const mpath of this.modifiedCssPaths) {
            // 搜索目录文件（仅搜索 scss 文件）
            this.getThemeFiles(outmap, infs, this.srcPath + mpath, this.srcPath.length, true);
          }
          // 清理数据
          this.modifiedCssPaths.clear();
        }
        // 判断是否存在皮肤目录下的其它文件改动
        if (this.modifiedFiles.size > 0) {
          // 皮肤目录下其它文件改变，遍历集合
          for (const mfile of this.modifiedFiles) {
            // 直接增加到集合
            outmap.set(this.srcPath + mfile, {
              outfile: mfile,
              isCss: false
            });
          }
          // 清理数据
          this.modifiedFiles.clear();
        }
      } else {
        // 获取目录下的资源文件名称
        this.getThemeFiles(outmap, infs, this.srcPath + this.cssPath, this.srcPath.length, false);
      }

      // 定义异步数组
      const allPromise = [];
      // 遍历所有文件
      let filelist = 'Themes files:\r\n';
      // 遍历集合数据
      for (const [infile, outinfo] of outmap) {
        // 获取文件输出名称
        const outfile = outinfo.outfile;
        // 累加文件
        filelist += ('- ' + outfile + '\r\n');
        // 判断是否 css 文件
        if (outinfo.isCss) {
          // CSS 文件，增加异步处理对象
          allPromise.push(this.processCssFile(compilation, infs, assets, infile, outfile));
        } else {
          // 其它文件，直接读取文件到资源
          allPromise.push(this.processNormalFile(infs, assets, infile, outfile));
        }
      }

      // 判断是否存在数据
      if (allPromise.length > 0) {
        // 批量执行
        Promise.all(allPromise).catch((error) => {
          compilation.errors.push(error);
        }).then(() => {

          // 把结果作为一个资源文件写入到 webpack
          assets[this.cssPath + 'files.md'] = {
            source: () => {
              return filelist;
            },
            size: () => {
              return filelist.length;
            }
          };

          // 回调处理
          callback();
        });
      } else {
        // 异步回调处理
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
      let path = this.srcPath + this.cssPath;
      // 累加根目录
      path = compilation.compiler.context + '\\' + path.replace(/\//g, '\\');
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
          // 转换为小写
          const lfile = file.toLowerCase();
          // 移除前部分路径（排除 src 目录）
          let relfile = file.substring(root.length + this.srcPath.length + 1).replace(/\\/g, '/');
          // 判断是否从皮肤目录开始
          if (relfile.toLowerCase().startsWith(this.cssPath)) {

            // 判断是否是 CSS 文件
            if (lfile.endsWith('.scss') || lfile.endsWith('.css')) {
              // 查找目录分隔符
              const pos = relfile.indexOf('/', this.cssPath.length + 1);
              // 判断是否有效
              if (pos > 0) {
                // 获取皮肤目录
                relfile = relfile.substring(0, pos + 1);
                // 设置当前变化的目录
                this.modifiedCssPaths.add(relfile);
              }
            } else {
              // 其它文件，增加到集合
              this.modifiedFiles.add(relfile);
            }

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

  /**
   * 获取选项路径处理（修正最后附带 / 结束）
   * @param {*} options 选项对象
   * @param {*} attr 属性
   * @param {*} defaultValue 默认值
   */
  getOptionsPath(options, attr, defaultValue) {
    // 获取生成路径
    let path = options ? (options[attr] ? options[attr] : defaultValue) : defaultValue;
    // 以目录结束
    path = path.replace(/\\/g, '/');
    if (!path.endsWith('/')) path += '/';
    // 返回路径
    return path;
  }

  /**
   * 读取皮肤目录下的所有文件
   * @param {*} outmap 输出集合对象
   * @param {*} infs 文件对象
   * @param {*} path 皮肤总目录
   * @param {*} srcLength SRC 目录长度
   * @param {*} cssOnly 是否只包含 CSS 文件
   */
  getThemeFiles(outmap, infs, path, srcLength, cssOnly) {
    // 读取目录下的所有CSS文件
    const files = infs.readdirSync(path);
    // 遍历数据
    if (files && files.length > 0) {
      // 遍历数据
      for (let index = 0; index < files.length; index++) {
        // 获取一个文件名称
        const cssf = files[index];
        // 组合完整路径
        const filePath = path + cssf;
        // 读取文件属性
        const cssStat = infs.statSync(filePath);
        // 判断是否文件夹
        if (cssStat.isDirectory()) {
          // 文件夹，继续读取下级数据
          this.getThemeFiles(outmap, infs, filePath + '/', srcLength, cssOnly);
        } else if (cssStat.isFile()) {
          // 定义输出文件
          let outfile;
          let isCss = false;
          // 判断是否 scss 文件
          if (cssf.endsWith('.scss')) {
            // 判断是否是scss的导入文件，不需要包含附加文件
            if (cssf.startsWith('_')) continue;
            // 输出为 CSS 文件
            outfile = filePath.substring(srcLength, filePath.length - 5) + '.css';
            // 设置标识
            isCss = true;
          } else if (cssf.endsWith('.css')) {
            // 普通的 CSS 文件，直接包含
            outfile = filePath.substring(srcLength);
            // 设置标识
            isCss = true;
          } else {
            // 其它类型文件，判断是否限制只返回 scss
            if (cssOnly) continue;
            // 需要包括其它文件，处理文件路径
            outfile = filePath.substring(srcLength);
          }
          // 属于文件，增加到集合
          outmap.set(filePath, {
            outfile: outfile,
            isCss: isCss
          });
        }
      }
    }
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
   * 替换内容的注释文本
   * @param {*} content 内容对象
   * @returns 替换后的文本
   */
  replaceCommemts(content) {
    // 转换为字符串
    let text = (content instanceof Buffer) ? content.toString() : content;
    // 替换注释
    text = text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g, '').replace(/[\r\n]+/g, '\n');
    // 返回数据
    return text;
  }

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
            }
          };
          resolve();
        }
      });

      // // 设置到资源对象
      // assets[outname] = {
      //   source: () => {
      //     return infs.readFileSync(inname);
      //   },
      //   size: () => {
      //     return infs.statSync(inname).length;
      //   }
      // };
      // resolve();
    });
  }

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
      this.readAssetFile(infs, inname).then((content) => {
        // 格式化
        this.encodeCssPromise(compilation, inname, content).then((text) => {
          // 设置到资源
          assets[outname] = {
            source: () => {
              return text;
            },
            size: () => {
              return text.length;
            }
          };
          resolve();
        }, (err) => {
          reject(err);
        });
      }, (err) => {
        reject(err);
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
        to: filename
      });
      // 进行 SASS 反编码，生成 CSS 文件
      precss.process(content, processOptions).catch((error) => {
        compilation.errors.push(error);
      }).then(result => {
        // 判断是否成功
        if (!result) {
          // 失败
          reject('Compile failed: ' + filename);
        } else {
          // 替换注释
          const text = this.replaceCommemts(result.css);
          // 实现 SASS extend 功能
          sassextend.process(text, processOptions).catch((error) => {
            compilation.errors.push(error);
          }).then(result => {
            // 判断是否成功
            if (!result) {
              // 失败
              reject('Compile failed: ' + filename);
            } else {
              // 成功，增加浏览器支持
              autoprefixer.process(result.css, processOptions).catch((error) => {
                compilation.errors.push(error);
              }).then(result => {
                // 判断是否成功
                if (!result) {
                  // 失败
                  reject('Compile failed: ' + filename);
                } else {
                  // 压缩文件
                  cssnano.process(result.css, processOptions).catch((error) => {
                    compilation.errors.push(error);
                  }).then(result => {
                    // 判断是否成功
                    if (!result) {
                      // 失败
                      reject('Compile failed: ' + filename);
                    } else {
                      // 返回结果内容
                      resolve(result.css);
                    }
                  }, (error) => {
                    // 失败
                    reject('Compile failed: ' + error);
                  });
                }
              }, (error) => {
                // 失败
                reject('Compile failed: ' + error);
              });
            }
          }, (error) => {
            // 失败
            reject('Compile failed: ' + error);
          });
        }
      }, (error) => {
        // 失败
        reject('Compile failed: ' + error);
      });

    });
  }

}

module.exports = SassThemes;
