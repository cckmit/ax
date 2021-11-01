# 项目 API 聚合

本项目的目的是通过接口请求后端获取所有后端 API 信息并生成前端源码、声明文件，减少接口对接中出现的需要频繁定义枚举类型、参数和结果类型，已经频繁的请求封装，让 Typescript 声明文件起到 API 文档的作用。

## 如何使用

> 所有示例代码的内容都可以通过编辑器智能提示识别，无需手动复制代码

- 接口请求

某个具体的系统会根据配置文件生成名称，比如`ApiDemo`，`ApiDemo`中包含了请求的方法`actor`，以及所有传入参数需要的类型定义、返回结果数据的类型定义，并且包含了该系统中前后端需要统一的枚举定义`enum`。

```typescript
import { ApiDemo } from '@ax/app-core-api';

ApiDemo.actor['cmd-foo']({ id: 'gd' } as ApiDemo.Param)
  .then((data: ApiDemo.Resp[]) => {
    // 请求成功的处理
  })
  .catch(() => {
    // 请求失败的处理
  })
  .finally();
```

- 通用模块

不同的项目之间会有通用模块的定义，所有通用模块的定义都放在前端的`ApiCommon`模块中，目前包含类型和枚举定义

```typescript
import { ApiCommon } from '@ax/app-core-api';

// 枚举
const type = ApiCommon.JavaType.AX_FRAMEWORK;

// 类型
const voo: ApiCommon.GridCount = {
  cols: [],
  count: 100,
};
```

## 增加模块

> 🚧🏗️🚧

## 更新 api 模块

> 🚧🏗️🚧

# 内容说明

## 配置文件 api.config.js

> 项目更新接口时通过`api.config.js`配置要更新的服务器地址

每个请求会在 RequestActor 中生成一个对应的方法，效果如下

```typescript
interface RequestActor {
  /**
   * 增加数据
   * AbcActor
   * @param arg
   * @returns {Promise<Result>}
   */
  ['foo-create'](
    // "doc"
    arg: ArgType
  ): Promise<Result>;
}
```

需要提供的 json 格式

```json
{
  "name": "foo-create",
  "doc": "增加数据",
  "actor": "AbcActor",
  "result": "Result",
  "params": [
    {
      "name": "arg",
      "type": "ArgType"
    }
  ]
}
```

## type

后端的每个非基本类型都会生成一个对应的 type 定义，效果如下

> 类型的字段也会有对应类型
> 类型的字段可能会出现嵌套
> 目前所有的字段都是可选值

```typescript
/**
 * 类型说明
 */
type ArgType = {
  // "名称"
  name?: string;
  // "id"
  id?: number;
  // "子列表"
  children?: ArgType[];
};
```

需要提供的 json 格式

```json
{
  "name": "ArgType",
  "text": {
    "url": "xxx.ArgType",
    "data": [
      {
        "doc": "名称",
        "name": "name",
        "type": "string"
      },
      {
        "doc": "id",
        "name": "id",
        "type": "number"
      },
      {
        "doc": "子列表",
        "name": "children",
        "type": "ArgType[]"
      }
    ]
  }
}
```

## enum

每个枚举定义都会转换为前端的枚举写法，方便前后端统一定义，效果如下

```typescript
enum EooEnum {
  // 向上
  UP = '-1',
  // 向下
  DOWN = '1',
}
```

需要提供的 json 格式

```json
{
  "name": "EooEnum",
  "text": {
    "url": "xxx.EooEnum",
    "data": [
      {
        "doc": "向上",
        "name": "UP",
        "type": "-1"
      },
      {
        "doc": "向下",
        "name": "DOWN",
        "type": "1"
      }
    ]
  }
}
```

# 类型转换

## 基本转换规则

对于基本类型，数字类型（Long、integer、Short、float 等）均转换为 `number`;

```
Long、integer、Short、float等 => number
```

对于字符串类型，已经转换为 json 后会自动转为字符串的类型（Date 等）均转换为 `string`;

```
String => string
```

对于 Map 类型，需要转换为具有泛型定义的前端类型定义（key 的定义只能是`string`或`number`）;

```
Map<number: string> => { [key: number]: string }
```

对于有具体类型定义的，转换为普通 Type 定义，参考[内容类型 - type]，类型具体的字段类型也要遵循转换规则;

```
ArgType => ArgType
```

定义比较模糊，没有具体类型定义的，转换为 any，比如 JSONArray，JSONObject（不推荐使用这些格式）;

```
JSONArray，JSONObject => any
```

如果类型定义是数组，需要在类型定义后面添加中括号;

```
List<ABC> => ABC[]
List<List<ABC>> => ABC[][]
```

如果类型定义是引用通用模块的类型定义，需要在前面添加`ApiCommon.`;

```
GridData => ApiCommon.GridData
```

具有通用性质，但无法根据规则转换的类型定义，需要告诉前端，让前端固定类型定义，前后端统一名称，需要在前面添加`ApiCore.`;

```
XXX => ApiCore.KV[]
```

# 部署

## 动态 HOST 配置

> 本项目中的 api 所使用的 host 均可以通过修改该文件的配置来修改，文件地址：/src/core/config.ts

```javascript
// 默认配置地址
const hostConfigDefault = {
  // 上传接口请求地址
  HOST_UPLOAD: 'http://nncs-data-services-upload.dev.iot-city.net:31027/',
  // 应用支撑平台请求地址
  HOST_BACKSTAGE: 'http://backstage.dev.iot-city.net:31027/',
  // 数据中台-系统设置 服务器地址
  HOST_DATA_SETTING: 'http://m-data-settings-impl.dev.iot-city.net:31027/',
  // 数据中台-租户中心 服务器地址
  HOST_DATA_TENANT: 'http://m-data-tenant-impl.dev.iot-city.net:31027/',
  // 业务中台-数据中心 服务器地址
  HOST_BIZ_DATA: 'http://m-biz-data-impl.dev.iot-city.net:31027/',
  // 智慧停车系统 服务器地址
  HOST_APP_PARKING: 'http://m-app-parking-impl.dev.iot-city.net:31027/',
  // 智慧停车系统 推送服务器地址
  WS_APP_PARKING:
    'ws://m-app-parking-impl.dev.iot-city.net:31027/websocket/parking',
};
```

> 为了方便部署，一般会在应用项目中放置一个静态的`config.js`(/public/static/config.js)，在 其中配置的 host 中的值会覆盖掉默认的 host 配置

```javascript
var GLOBAL_CONFIG = {
  host: {
    HOST_BACKSTAGE: 'http://backstage.dev.iot-city.net:31027/',
    HOST_DATA_SETTING: 'http://m-app-parking-impl.dev.iot-city.net:31027/',
  },
};
```

```html
<script src="/static/config.js" lang="js"></script>
```
