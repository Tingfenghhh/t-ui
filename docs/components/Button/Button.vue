<script lang="ts" setup>
import Tbutton from "../../../packages/button/src/index.vue";
</script>

<template>
  <div class="Tbutton-box">
    <Tbutton size="large" type="default">large</Tbutton>
    <Tbutton size="middle" type="primary">middle</Tbutton>
    <Tbutton size="small" type="plain">small</Tbutton>
    <Tbutton size="mini" type="gray">mini</Tbutton>
  </div>
</template>

<style lang="less" scoped>
.Tbutton-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
