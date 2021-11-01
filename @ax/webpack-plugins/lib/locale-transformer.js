class LocaleTransformer {

  /**
   * 构造函数
   * @param {*} options 选项（ {modulesDir, moduleAssetsDir, moduleThemesDir, distAssetsDir, distThemesDir} ）
   */
  constructor(options = {}) {
    // 定义选项
    this.options = options || {};
  }

  /**
   * 实现插件入口方法
   * @param {*} compiler 插件编译器对象
   */
  apply(compiler) {

    // 定义插件对象
    const plugin = {
      name: 'LocaleTransformer'
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
            this.getModuleFiles(outmap, infs, config, this.modulesDir + key + '/' + this.moduleAssetsDir);
          } else {
            // 目录不同，先处理皮肤目录
            this.getModuleFiles(outmap, infs, config, this.modulesDir + key + '/' + this.moduleThemesDir);
            // 再处理资源目录
            this.getModuleFiles(outmap, infs, config, this.modulesDir + key + '/' + this.moduleAssetsDir);
          }
        }

      }

      // --------------------- 遍历读取、处理并输出文件 ----------------------

      // 定义异步数组
      const allPromise = [];
      // 遍历所有文件
      let filelist = '>> Output assets files for modules:\r\n';
      // 遍历集合数据（键：读取资源文件完整路径；值：输出资源文件信息：{outfile, isCss, isThemes, config} ）
      for (const [infile, outinfo] of outmap) {
        // 获取配置信息 {app, module, themesPath}
        const config = outinfo.config;

        // 定义输出路径
        let outPath;
        // 判断是否是皮肤目录文件
        if (outinfo.isThemes) {
          // 生成 CSS 输出路径( 'dist/assets/themes/app/module/' )
          outPath = this.distThemesDir + config.app + '/' + config.module + '/';
        } else {
          // 一般文件，生成输出路径( 'dist/assets/' )
          outPath = this.distAssetsDir
        }
        // 获取文件输出名称( 'xxxxxxxx.jpg' / 'default/index.css' )
        const outfile = outPath + outinfo.outfile;
        // 累加文件
        filelist += (outfile + '\r\n');
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
          assets[this.distAssetsDir + 'modules.md'] = {
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
          // 移除前部分路径
          const relfile = file.substring(root.length + 1).replace(/\\/g, '/');
          // 判断是否从模块目录开始( 'modules/gis-map/src/assets/xxxxxxxxxxxxxxx' )
          if (relfile.startsWith(this.modulesDir)) {
            // 查找下一个目录分隔符
            let pos = relfile.indexOf('/', this.modulesDir.length);
            // 判断是否存在
            if (pos === -1) continue;
            // 获取模块名称
            const module = relfile.substring(this.modulesDir.length, pos);
            // 获取模块下资源文件相对目录( 'src/assets/xxxxxxxxxxxxxx' )
            const apath = relfile.substr(pos + 1);
            // 判断是否从资源文件目录开始( 'src/assets/' 和 'src/assets/themes/' )
            if (!apath.startsWith(this.moduleAssetsDir) && !apath.startsWith(this.moduleThemesDir)) continue;
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

}

module.exports = LocaleTransformer;
