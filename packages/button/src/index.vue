<script lang="ts" setup name="Tbutton">
interface Props {
  size: "large" | "middle" | "small" | "mini";
  type: "default" | "primary" | "plain" | "gray";
}
interface Emits {
  (event: "handleClick", e: MouseEvent): void;
}
const props = withDefaults(defineProps<Props>(), {
  size: "middle",
  type: "default",
});

const emits = defineEmits<Emits>();

const handleClick = (e: MouseEvent) => {
  emits("handleClick", e);
};
</script>

<template>
  <button
    class="tingfeng-btn"
    :class="[props.size, props.type]"
    @click="handleClick"
    type="button"
  >
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <slot></slot>
  </button>
</template>

<style scoped lang="less">
@import url("./style/index.less");
</style>
