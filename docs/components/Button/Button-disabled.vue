<script lang="ts" setup>
import Tbutton from "../../../packages/button/src/index.vue";
import Tspace from "../../../packages/space/src/index.vue";

const click = (e: MouseEvent) => {
  console.log(e);
};
</script>

<template>
  <Tspace :size="15" :direction="'horizontal'">
    <Tbutton size="large" type="default" :disabled="true" @handleClick="click"
      >测试组件</Tbutton
    >
    <Tbutton size="middle" type="primary" :disabled="true">测试组件</Tbutton>
    <Tbutton size="small" type="plain" :disabled="true">测试组件</Tbutton>
    <Tbutton size="mini" type="gray" :disabled="true">测试组件</Tbutton>
  </Tspace>
</template>

<style lang="less" scoped></style>
