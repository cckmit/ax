# 修改记录

项目的修改记录

## 2.0.3 (2021-06-15)

- progress 组件

  - 新增 format 方法

- slider 组件

  - 修复 v-model 的绑定问题

## 2.0.2 (2021-06-09)

- table 组件

  - 修复 分页加载数据为空时的处理

- 重构组件主题样式加载方式，更新`parking`主题

## 2.0.1 (2021-06-01)

- time 组件

  - 修复 select 模式参数问题

## 2.0.0 (2021-05-27)

- 完成组件库的主题加载方案，分离组件样式的构建，正式发布 2.0.0 版本

## 2.0.0-beta.20.39 (2021-05-13)

- select 组件

  - 修复 focus 和 blur 事件不上报的问题

## 2.0.0-beta.20.38 (2021-05-12)

- table 组件

  - 回滚 操作栏的浮动支持，目前有样式问题
  - 修复 分页加载 count 为 0 时的处理

## 2.0.0-beta.20.37 (2021-05-10)

- dialog 组件

  - 重构 定位模式，绝对定位+transform 改为 flex
  - 优化 弹窗最大最小的显示

## 2.0.0-beta.20.36 (2021-05-07)

- table 组件

  - 新增 操作栏的浮动支持

## 2.0.0-beta.20.35 (2021-05-07)

- cascader、date、input、select、search、time 组件

  - 修复 默认的 placeholder 显示
  - 修复 清除 图标的显示问题

- input 组件

  - 新增 password 模式下的可视切换

## 2.0.0-beta.20.34 (2021-04-26)

- table 组件

  - 修复 上移下移操作不回滚动到所在位置的情况

  - 修复 操作栏对齐无效的情况，默认左对齐

## 2.0.0-beta.20.32 (2021-04-22)

- table 组件

  - 修复 addData 和 updateData 后字段选中操作行

## 2.0.0-beta.20.30 (2021-04-15)

- table 组件

  - 修复分页加载模式下`v-model`为空的问题

## 2.0.0-beta.20.29 (2021-04-14)

- dialog 组件

  - 修复`contentLoading`会影响加载的问题

## 2.0.0-beta.20.28 (2021-04-12)

- table 组件

  - 移除之前的`tableLoadMore`事件上报，不再使用这种方案来进行下拉分页加载、
  - 新增分页配置`page-config`和分页数据加载器`page-loader`来实现分页加载

## 2.0.0-beta.20.27 (2021-04-08)

- date 组件

  - 增加事件触发

## 2.0.0-beta.20.26 (2021-04-06)

- tree 组件

  - 添加 checkStrictly 参数, 高亮不勾选自动定位

## 2.0.0-beta.20.25 (2021-03-31)

- table 组件

  - 添加方法 setCurrentRow , 高亮不勾选自动定位

- select 组件

  - 添加了 atLeast 属性:至少选中一个,默认 false,添加了 removeTag 触发方法

## 2.0.0-beta.20.24 (2021-03-31)

- form 组件

  - 修复表单配置改变时不更新的问题

- table 组件

  - 修复表头 z-index 过高的问题

- dialog 组件

  - 非模态弹窗背景可操作的支持

## 2.0.0-beta.20.23 (2021-03-25)

- message 组件

  - 更新 notify 文档

- cascader 组件
  - 支持插槽

## 2.0.0-beta.20.22 (2021-03-22)

- select 组件
  - 更新 多选里面的标签

## 2.0.0-beta.20.21 (2021-03-22)

- tree 组件

  - 修复 config?.disabledKey || '' 报错

- search 组件
  - 添加 clearable 属性

## 2.0.0-beta.20.19 (2021-03-17)

- tree 组件

  - config 增加 iconColorKey 属性，用于设置图标颜色

  - config 增加 nodeClassKey 属性，用于设置节点内容的 class，方便修改样式
  - 增加前缀和内容插槽，优化样式

- time 组件

  - 优化时间选择器的样式问题

- 修复细节样式问题

## 2.0.0-beta.20.18 (2021-03-17)

- header 组件

  - 设置 title 默认行高

- table 组件

  - 列图标新增样式 table_image 支持 img 和 i 的图片显示
  - 增加操作栏按钮之间的分隔线
  - 增加操作栏按钮之间的分隔线

- message 组件

  - 优化 alert 的样式

## 2.0.0-beta.20.17 (2021-03-17)

- split 组件

  - 修改首栏最大、最小、默认值为 90%、20%、10%

- board 组件

  - 修改首栏最大、最小、默认值为 90%、20%、10%

- table 组件

  - '序号'改为'代号'

- tree 组件

  - tree 图标支持图片显示功能

- header 组件

  - first 模式下增加上边距

## 2.0.0-beta.20.16 (2021-03-16)

- 更新声明文件

## 2.0.0-beta.20.15 (2021-03-16)

- form 组件

  - 修改样式

- table 组件

  - addData 添加 index
  - 修改滚动定位

## 2.0.0-beta.20.14 (2021-03-16)

- board 组件

  - 分栏默认首栏宽度为 25%

- table 组件

  - 修复组件内容的排序问题

- split 组件

  - 修复最大最小值为固定的问题

## 2.0.0-beta.20.13 (2021-03-16)

- table 组件

  - 增加上移下移方法：moveData 和 moveDataByKey

## 2.0.0-beta.20.12 (2021-03-15)

- split 组件

  - 重构组件，最大值、最小值、默认值均支持百分比、rem、px 单位

- board 组件

  - 支持 split 组件的`resizeable`属性，对应在本组件中的属性名为`split-resizeable`

## 2.0.0-beta.20.11 (2021-03-15)

- split 组件

  - 增加`size`属性，默认分割线位置，单位百分比

- board 组件

  - 支持 split 组件的`size`属性，对应在本组件中的属性名为`split-size`

- dialog 组件
  - 弹窗内容加载条高度变窄

## 2.0.0-beta.20.10 (2021-03-15)

- form 组件
  - 数字类型的校验如果会进行输入类型检查，比如'123abc'将不会通过校验

## 2.0.0-beta.20.9 (2021-03-12)

- dialog 组件
  - 增加`contentLoading`属性，用于内容的加载

## 2.0.0-beta.20.8 (2021-03-12)

- table 组件
  - 更改新增数据提示,为右侧倒三角,大小:0.7rem,颜色:#18cca8

## 2.0.0-beta.20.7 (2021-03-12)

- table 组件
  - 新增数据方法 addData , 如果表格有该条数据,则将已有数据置顶.否则,该新增数据添加到表格中,置顶显示
  - 新增数据的序号,会多一个小圆红点样的提示

## 2.0.0-beta.20.7 (2021-03-12)

- input 组件
  - 修复`textarea`模式下的字体问题
- dialog 组件
  - 修复右上角关闭按钮的位置问题

## 2.0.0-beta.20.6 (2021-03-12)

- header 组件
  - 增加`width`属性，用于控制宽度
  - 标题可点击时增加 hover 效果
- dialog 组件
  - 修复无底部边框下的 padding 问题
- tree 组件
  - 新的选中样式效果
- 迁移公共样式到`@ax/app-core-style`仓库

## 2.0.0-beta.20.5 (2021-03-11)

- divider 组件 button 模式样式调整
- 修复 checkbox 组件 hover 变空的问题
- 修复 table 组件对齐效果不生效的问题
- 修复 tree 组件的图标选中变色问题

## 2.0.0-beta.20.4 (2021-03-11)

- 新增 divider 组件
- board 组件
  - 增加内容栏的样式 class： bar_flex，支持组件头部插槽的自适应布局

## 2.0.0-beta.20.3 (2021-03-11)

- header 组件
  - 样式更新，不设置具体高度，内容自动撑开
  - 增加 `titleClick` 属性，默认`first`模式下 title 点击触发返回，可以通过`titleClick`属性关闭
- board 组件
  - 增加内容栏的样式 class： content_flex 和 content_flex_col，支持组件内容的自适应

## 2.0.0-beta.17.1 (2020-11-27)

- ax-time 时间选择器 使用方法:

```typescript
    <ax-time
        v-model="value"
        :type="AxTimeType.SELECT"
      ></ax-time>
```

- type 默认是 AxTimeType.SELECT 模式

## 2.0.0-beta.9.0 (2020-10-21)

- 更新新版国际化处理`AxLocale`，不再使用`AxLocal`

- 添加核心样式库`@ax/app-core-style`

## 2.0.0-beta.8.3 (2020-10-19)

- 修复 ax-upload 的按钮 disabled

## 2.0.0-beta.8.1 (2020-10-10)

- 修复 ax-upload 的样式和引入 el-button

## 2.0.0-beta.8.0 (2020-09-30)

- 更新 framework 依赖和署名

## 2.0.0-beta.7.2 (2020-09-29)

- 修复发布时 packages 目录没提交的问题

- 完善`AxBoard`组件的声明文件

## 2.0.0-beta.7.0 (2020-09-25)

- 增加 [Board 内容栏](/component/board) 组件

- 优化`ax-split`分栏组件样式问题

## 2.0.0-beta.6.0 (2020-09-23)

- 完成基本组件的文档

- 修复`app-core-framework`的依赖问题

## 2.0.0-beta.6.0 (2020-09-20)

- 打包集成了`ax-cli-vue`，使用通用配置`ax.config.js`，简化打包配置。（本地启动测试依然使用 vue-cli）

## 2.0.0-beta.5.0 (2020-09-15)

- 改用 webpack 进行打包（发布组件时使用，后续本地测试也考虑替换掉 vue-cli），方便配置，优化打包时间

- 添加 jest 单元测试模版，不过目前跑不起来 🤔

## 2.0.0-beta.4.0 (2020-09-07)

- 新的打包策略，通过设置组件间的 alias 和打包时的 externals 来减少重复引入，优化体积，保证按需加载时同代码只有一份，一些比较大的组件瘦身明显，比如 ax-table 245kb > 138kb

- 更新平时使用的测试页面路由，方便组件测试

> TODO

- 因为`typescript`版本升级到 4.0,导致`typescript-transform-paths`无法使用，无法转换 alias

## 2.0.0-beta.3.0 (2020-09-01)

- 配置文档说明页面，构建时自动构建文档文件，生成文档页面

## 2.0.0-beta.2.1 (2020-08-31)

- 更新依赖配置，调整`dependencies`和`peerDependencies`配置

## 2.0.0-beta.2.0 (2020-08-31)

> 转为`beta`版本

- 更新构建脚本，使用`rollup-plugin-dts`打包 dts 文件

## 2.0.0-alpha.2.2 (2020-08-18)

- 更新`@ax/eslint-config-default`版本

## 2.0.0-alpha.2.1 (2020-08-18)

- 更新打包模式

## 2.0.0-alpha.2.0 (2020-08-07)

> 2.0 的第 2 个测试版

- 使用集成的代码规范（eslint、prettier）

## 2.0.0-alpha.1.0 (2020-08-06)

> 2.0 的第 1 个测试版

- 配置 cli、打包脚本
- 当前集成 1.0 的 framework，后续更换 2.0
