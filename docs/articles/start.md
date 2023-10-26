# 快速开始

## 1. 下载

   ```javascript
   
npm install tingfeng 
// 或者
yarn add tingfeng

   ```

## 2. 引用

​    `main.ts`中引用

    ```javascript
    
import TingFengUI from 'tingfeng/tingfeng-ui'

import 'tingfeng/tingfeng-ui/index.css'

app.use(TingFengUI)
    
    ```

## 3. 使用

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



