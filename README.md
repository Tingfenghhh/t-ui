# 开始

## 1. 下载方式

你可以通过`npm`或`yarn`下载


```js

npm install tingfeng

```

```js

yarn add tingfeng

```


   

## 2. 引用

`main.ts`中引用

```ts
    
import TingFengUI from 'tingfeng/tingfeng-ui'

import 'tingfeng/tingfeng-ui/index.css'

app.use(TingFengUI)
    
```

## 3. 使用

`Tbutton`组件示例

```vue

<script lang="ts" setup>
const click = (e: MouseEvent) => {
  console.log(e);
};
</script>

<template>
  <Tbutton size="large" type="primary" @handleClick="click">测试组件</Tbutton>
</template>

<style lang="less" scoped></style>
    
```

## 4. TS类型支持
`tsconfig.json`中添加`types`字段
```json
{
  "compilerOptions": {
    "types": ["tingfeng/tingfeng-ui/components.d.ts"]
  }
}
```

# 使用`@ionic/vue`

## 1.下载`@ionic/vue`安装包



```js

npm install @ionic/vue

```

```js

yarn add @ionic/vue


```



## 2. 引用

`main.ts`中引用后即可使用

```ts
    
import { IonicVue } from '@ionic/vue';
import '@ionic/vue/css/ionic.bundle.css';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
addIcons(allIcons);

app.use(IonicVue)
    
```


