<script lang="ts" setup>
import Tbutton from "../../../packages/button/src/index.vue";
import Tspace from "../../../packages/space/src/index.vue";
</script>

<template>
  <Tspace :size="15" :direction="'horizontal'">
    <Tbutton size="large" type="default">测试组件</Tbutton>
    <Tbutton size="middle" type="primary">测试组件</Tbutton>
    <Tbutton size="small" type="plain">测试组件</Tbutton>
    <Tbutton size="mini" type="gray">测试组件</Tbutton>
  </Tspace>
</template>

<style lang="less" scoped></style>
