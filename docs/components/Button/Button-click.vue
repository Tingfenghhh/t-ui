<script lang="ts" setup>
import { ref } from "vue";
import Tbutton from "../../../packages/button/src/index.vue";

const num = ref(0);

const click = (val: boolean) => {
  if (val) {
    num.value++;
    return;
  }
  num.value--;
};
</script>

<template>
  <div class="Tbutton-box">
    <span>点击增加，当前数字：{{ num }}</span>
    <Tbutton size="middle" type="default" @handle-click="click(true)"
      >增加</Tbutton
    >
    <Tbutton size="middle" type="default" @handle-click="click(false)"
      >减少</Tbutton
    >
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
