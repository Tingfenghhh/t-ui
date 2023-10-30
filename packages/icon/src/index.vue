<script lang="ts" setup name="Ticon">
import * as FluentIcon from "@vicons/fluent";
import { Icon, IconConfigProvider } from "@vicons/utils";
import { computed } from "vue";

interface ViconsProps {
  name?: string;
  color?: string;
  size?: "small" | "large" | number;
  tag?: string;
}

const props = withDefaults(defineProps<ViconsProps>(), {
  name: "Accessibility16Regular",
  color: "#000",
  size: 16,
  tag: "span",
});

// 根据props.name动态引入组件
const IconVue = computed(() => {
  const name = props.name;
  const component = FluentIcon[name];
  return component;
});
</script>

<template>
  <IconConfigProvider :color="props.color" :size="props.size">
    <Icon>
      <IconVue />
    </Icon>
  </IconConfigProvider>
</template>

<style lang="less" scoped></style>
