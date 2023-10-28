<script lang="ts" setup name="Ticon">
import { computed } from "vue";

interface IconProps {
  name?: string;
  color?: string;
  size?: "small" | "large" | number;
}
const props = withDefaults(defineProps<IconProps>(), {
  name: "airplane-outline",
  color: "#000",
  size: 16,
});

const sizeNumber = computed(() => {
  if (typeof props.size === "number") {
    return `${props.size}px`;
  }
});

const colors = computed(() => {
  return props.color;
});
</script>

<template>
  <span class="icon"
    ><ion-icon
      :name="props.name"
      :size="typeof props.size !== 'number' ? props.size : ''"
      :class="[
        { color: props.color },
        { size: typeof props.size === 'number' },
      ]"
    ></ion-icon
  ></span>
</template>

<style lang="less" scoped>
.icon {
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

}
.size {
  font-size: v-bind(sizeNumber);
}
.color {
  color: v-bind(colors);
}
</style>
