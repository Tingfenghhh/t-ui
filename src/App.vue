<script lang="ts" setup>
const click = (e: MouseEvent) => {
  console.log(e);
};
</script>

<template>
  <h1>dasd</h1>
  <Tbutton size="large" type="primary" @handleClick="click"
    >我是测试组件</Tbutton
  >
</template>

<style lang="less" scoped></style>
