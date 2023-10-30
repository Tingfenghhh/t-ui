<script lang="ts" setup>
import Tbutton from "../../../packages/button/src/index.vue";
import Tspace from "../../../packages/space/src/index.vue";
import Ticon from "../../../packages/icon/src/index.vue";

const click = (e: MouseEvent) => {
  console.log(e);
};
</script>

<template>
  <!-- 图标 -->
  <Tspace :size="15" :direction="'horizontal'">
    <Tbutton :size="'large'" :shape="'circle'" :type="'default'">
      <template #icon>
        <Ticon :name="'AccessTime24Filled'" :color="'white'" :size="16" />
      </template>
    </Tbutton>
    <Tbutton :size="'middle'" :shape="'round'" :type="'primary'">
      <template #icon>
        <Ticon :name="'AccessTime24Filled'" :color="'gold'" :size="16" />
      </template>
      测试组件
    </Tbutton>
    <Tbutton :size="'middle'" :shape="'round'" :type="'primary'">
      <template #icon>
        <Ticon :name="'AccessTime24Filled'" :color="'gold'" :size="16" />
      </template>
      测试组件
    </Tbutton>
  </Tspace>
</template>

<style lang="less" scoped></style>
