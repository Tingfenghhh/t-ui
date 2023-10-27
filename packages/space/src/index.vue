<script lang="ts" setup name="Tspace">
import { onMounted, ref, computed, watch } from "vue";

interface SpaceProps {
  size: number;
  direction: "horizontal" | "vertical";
}

const props = withDefaults(defineProps<SpaceProps>(), {
  size: 10,
  direction: "horizontal",
});
const TspaceRef = ref<HTMLElement | null>();
const slotLength = ref(0);
const slotChildren = ref();

const marginRight = computed(() => {
  return props.size;
});

const directionClass = computed(() => {
  return props.direction === "horizontal"
    ? "T-space-horizontal"
    : "T-space-vertical";
});

watch(
  () => [props.size, props.direction],
  () => {
    for (let i = 0; i < slotLength.value; i++) {
      if (i !== slotLength.value - 1) {
        (slotChildren.value[i] as HTMLElement).style[
          props.direction === "horizontal" ? "marginRight" : "marginBottom"
        ] = `${props.size}px`;
        (slotChildren.value[i] as HTMLElement).style[
          props.direction === "horizontal" ? "marginBottom" : "marginRight"
        ] = `0px`;
      }
    }
  }
);

onMounted(() => {
  if (!TspaceRef.value) return;
  // 获取slot的真实dom
  // 获取slot的子元素
  slotChildren.value = TspaceRef.value.children;
  // 获取slot的子元素的个数
  slotLength.value = slotChildren.value.length;

  // 设置子元素的marginRight
  for (let i = 0; i < slotLength.value; i++) {
    if (i !== slotLength.value - 1) {
      (slotChildren.value[i] as HTMLElement).style[
        props.direction === "horizontal" ? "marginRight" : "marginBottom"
      ] = `${marginRight.value ?? 10}px`;
      (slotChildren.value[i] as HTMLElement).style[
        props.direction === "horizontal" ? "marginBottom" : "marginRight"
      ] = `0px`;
    }
  }
});
</script>

<template>
  <div ref="TspaceRef" class="T-space" :class="[directionClass]">
    <slot name="default"></slot>
  </div>
</template>

<style lang="less" scoped>
.T-space {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
}
.T-space-horizontal {
  flex-direction: row;
}
.T-space-vertical {
  flex-direction: column;
}
</style>
