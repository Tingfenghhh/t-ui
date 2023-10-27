<script lang="ts" setup>
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
  <Tspace :size="10" :direction="'vertical'">
    <!-- 基础 -->
    <Tspace :size="40" :direction="'horizontal'">
      <Tbutton size="large" type="default" @handleClick="click"
        >测试组件</Tbutton
      >
      <Tbutton size="middle" type="primary">测试组件</Tbutton>
      <Tbutton size="small" type="plain">测试组件</Tbutton>
      <Tbutton size="mini" type="gray">测试组件</Tbutton>
    </Tspace>
    <!-- 禁用 -->
    <Tspace :size="40" :direction="'horizontal'">
      <Tbutton size="large" type="default" :disabled="true" @handleClick="click"
        >测试组件</Tbutton
      >
      <Tbutton size="middle" type="primary" :disabled="true">测试组件</Tbutton>
      <Tbutton size="small" type="plain" :disabled="true">测试组件</Tbutton>
      <Tbutton size="mini" type="gray" :disabled="true">测试组件</Tbutton>
    </Tspace>
    <!-- 形状 -->
    <Tspace :size="40" :direction="'horizontal'">
      <Tbutton :size="'large'" :shape="'circle'" :type="'default'"
        >测试组件</Tbutton
      >
      <Tbutton :size="'middle'" :shape="'round'" :type="'primary'"
        >测试组件</Tbutton
      >
      <Tbutton :size="'small'" :shape="'square'" :type="'plain'"
        >测试组件</Tbutton
      >
      <Tbutton :size="'mini'" :shape="'square'" :type="'gray'"
        >测试组件</Tbutton
      >
    </Tspace>
    <!-- 图标 -->
    <Tspace :size="40" :direction="'horizontal'">
      <Tbutton :size="'large'" :shape="'circle'" :type="'default'">
        <template #icon>
          <Ticon :name="'diamond-outline'" :color="'white'" :size="16" />
        </template>
      </Tbutton>
      <Tbutton :size="'middle'" :shape="'round'" :type="'primary'">
        <template #icon>
          <Ticon :name="'albums-outline'" :color="'gold'" :size="16" />
        </template>
        测试组件
      </Tbutton>
      <Tbutton :size="'middle'" :shape="'round'" :type="'primary'">
        <template #icon>
          <Ticon :name="'diamond-sharp'" :color="'gold'" :size="16" />
        </template>
        测试组件
      </Tbutton>
    </Tspace>

    <!-- 加载中-->
    <Tspace :size="40" :direction="'horizontal'">
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
  </Tspace>
</template>

<style lang="less" scoped></style>
