<script lang="ts" setup>
const click = (e: MouseEvent) => {
  console.log(e);
};
</script>

<template>
  <Tbutton size="large" type="primary" @handleClick="click">测试组件</Tbutton>
</template>

<style lang="less" scoped></style>
