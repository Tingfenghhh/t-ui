<script lang="ts" setup>
import Tbutton from "../../../packages/button/src/index.vue";
import Tspace from "../../../packages/space/src/index.vue";
import Ticon from "../../../packages/icon/src/index.vue";
import { ref } from "vue";

const click = (e: MouseEvent) => {
  console.log(e);
};
const loadingClick = (e: MouseEvent) => {
  console.log("loadingClick", e);
};

const loadingBoolean = ref(true);

setTimeout(() => {
  loadingBoolean.value = false;
}, 5000);
</script>

<template>
  <!-- 图标 -->
  <Tspace :size="15" :direction="'horizontal'">
    <Tbutton
      :size="'large'"
      :shape="'circle'"
      :type="'default'"
      :loading="loadingBoolean"
      @handleClick="loadingClick"
    >
      <template #icon>
        <Ticon :name="'diamond-outline'" :color="'white'" :size="16" />
      </template>
    </Tbutton>
    <Tbutton
      :size="'middle'"
      :shape="'round'"
      :type="'primary'"
      :loading="true"
      @handleClick="loadingClick"
    >
      <template #icon>
        <Ticon :name="'albums-outline'" :color="'gold'" :size="16" />
      </template>
      测试组件
    </Tbutton>
    <Tbutton
      :size="'middle'"
      :shape="'round'"
      :type="'primary'"
      :loading="loadingBoolean"
      @handleClick="loadingClick"
    >
      <template #icon>
        <Ticon :name="'diamond-sharp'" :color="'gold'" :size="16" />
      </template>
      测试组件
    </Tbutton>
  </Tspace>
</template>

<style lang="less" scoped></style>
