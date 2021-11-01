# app-core-components

AxUI组件库

## 在项目中使用

- 全量引入

```TypeScript
import AxUI from '@ax/app-core-components';

Vue.use(AxUI);
```

- 按需加载

    > 类似之前nncs项目的加载方式

```TypeScript
import { AxTable } from '@ax/app-core-components';

@Component({
  components: {
    AxTable
  },
})
```

    > 需要额外配置babel，安装`babel-plugin-import`，在`babel.config.js`的`plugins`中添加
    
```JavaScript
[
  "import",
  {
    "libraryName": "@ax/app-core-components"
  }
]
```

- Interface等类型定义使用方式

    对外暴露的所有interface都是在`@ax/app-core-components/types/interfaces`中

```TypeScript
import { ITreeMapData } from '@ax/app-core-components/types/interfaces';
```

- enum、const等常量定义和function的使用方式

```TypeScript
import { AxComConst, AxComFunc } from '@ax/app-core-components';

// const enum
const voo = AxComConst.ButtonType.DANGER

// 方法
AxComFunc.showAlert('showAlert');
```

## 本地测试

## FAQ

