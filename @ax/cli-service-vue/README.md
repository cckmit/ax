# cli-service

命令行服务

## 介绍

模块化开发2.0 vue项目使用的命令行服务，用于打包代码、文件等

## 安装

1. 使用 `npm` 或 `yarn`(推荐) 安卓命令行服务。

```bash
npm i @ax/cli-service-vue -D
```

或

```bash
yarn i @ax/cli-service-vue -D
```

1. 在项目中新建 `ax.config.js` 文件

配置参考 [config](./lib/config.js)

> TODO: 通过 ax-cli-vue init 命令行来创建

1. 运行

打包代码

```bash 
ax-cli-vue lib
```

打包声明文件

```bash 
ax-cli-vue types
```

> 声明文件打包只是提供整合的方案，具体文件需要修改后提交

打包国际化文件

```bash 
ax-cli-vue locale
```

> 推荐把命令添加到package.json中的script中

```json
...
"scripts": {
  "lib": "ax-cli-vue lib",
  "lib:types": "ax-cli-vue types",
  "lib:locale": "ax-cli-vue locale",
  "lib:all": "npm run lib && npm run lib:locale",
}
...
```
