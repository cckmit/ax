# app-config-eslint-ts

项目统一的代码规范(Typescript)

## 配置说明

- `index.js` es6+项目

- `typescript.js` typescript项目

- `typescript-vue.js` typescript + vue 项目

- `prettier.js` 项目预设prettier配置

## 使用方法

### eslint

> 在`eslint`配置文件(.eslintrc/.eslintrc.js/.eslintrc.json)中配置`extends`

```js
module.exports = {
  // ...
  extends: ['@ax/default/typescript-vue'], //'@ax/default' '@ax/default/typescript'
  // ...
}
```

### prettier

> 在`prettier`配置文件(只支持`.prettierrc.js`)中配置

```js
module.exports = {
  ...require('@ax/eslint-config-default/prettier')
}
```
