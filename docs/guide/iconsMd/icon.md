# 使用`@ionic/vue`

## 1.下载`@ionic/vue`安装包

::: code-group

```[npm 方式]

npm install @ionic/vue

```

``` [yarn 方式]

yarn add @ionic/vue


```

:::

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