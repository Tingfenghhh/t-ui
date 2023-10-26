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
  >
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <slot></slot>
  </button>
</template>

<style scoped lang="less">
.tingfeng-btn {
  appearance: none;
  border: none;
  outline: none;
  background: #fff;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}

.large {
  width: 240px;
  height: 50px;
  font-size: 16px;
}

.moddle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}

.small {
  width: 100px;
  height: 32px;
}

.mini {
  width: 60px;
  height: 32px;
}

.default {
  border-color: #e4e4e4;
  color: #666;
}

.primary {
  border-color: skyblue;
  background: skyblue;
  color: #fff;
}

.plain {
  border-color: skyblue;
  color: skyblue;
  background: lighten(skyblue, 50%);
}

.gray {
  border-color: #ccc;
  background: #ccc;
  color: #fff;
}
</style>
