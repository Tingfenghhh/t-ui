<script lang="ts" setup>
import Tbutton from "../../../packages/button/src/index.vue";
import Tspace from "../../../packages/space/src/index.vue";

const click = (e: MouseEvent) => {
  console.log(e);
};
</script>

<template>
  <Tspace :size="15" :direction="'horizontal'">
    <Tbutton :size="'large'" :shape="'circle'" :type="'default'"
      >测试组件</Tbutton
    >
    <Tbutton :size="'middle'" :shape="'round'" :type="'primary'"
      >测试组件</Tbutton
    >
    <Tbutton :size="'small'" :shape="'square'" :type="'plain'"
      >测试组件</Tbutton
    >
    <Tbutton :size="'mini'" :shape="'square'" :type="'gray'">测试组件</Tbutton>
  </Tspace>
</template>

<style lang="less" scoped></style>
