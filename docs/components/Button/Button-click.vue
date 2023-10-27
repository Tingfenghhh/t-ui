<script lang="ts" setup>
import { ref } from "vue";
import Tbutton from "../../../packages/button/src/index.vue";
import Tspace from "../../../packages/space/src/index.vue";

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
  <p>点击增加按钮或者减少按钮，当前数字：{{ num }}</p>
  <Tspace :size="15" :direction="'horizontal'">
    <Tbutton size="middle" type="primary" @handle-click="click(true)">增加</Tbutton>
    <Tbutton @handle-click="click(false)">减少</Tbutton>
  </Tspace>
</template>

<style lang="less" scoped></style>
