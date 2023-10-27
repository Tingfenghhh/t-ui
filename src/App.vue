<script lang="ts" setup>
const click = (e: MouseEvent) => {
  console.log(e);
};
</script>

<template>
  <Tspace :size="80" :direction="'horizontal'">
    <Tbutton size="large" type="default" @handleClick="click">测试组件</Tbutton>
    <Tbutton size="middle" type="primary">测试组件</Tbutton>
    <Tbutton size="small" type="plain">测试组件</Tbutton>
    <Tbutton size="mini" type="gray">测试组件</Tbutton>
  </Tspace>
  <Tspace :size="62" :direction="'horizontal'">
    <Tbutton size="large" type="default" @handleClick="click">测试组件</Tbutton>
    <Tbutton size="middle" type="primary">测试组件</Tbutton>
    <Tbutton size="small" type="plain">测试组件</Tbutton>
    <Tbutton size="mini" type="gray">测试组件</Tbutton>
  </Tspace>
</template>

<style lang="less" scoped></style>
