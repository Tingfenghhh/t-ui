<script lang="ts" setup name="Tbutton">
import { computed } from "vue";
import Ticon from "../../icon/src/index.vue";

interface Props {
  size?: "large" | "middle" | "small" | "mini";
  type?: "default" | "primary" | "plain" | "gray";
  shape?: "circle" | "round" | "square";
  loading?: boolean;
  disabled?: boolean;
}
interface Emits {
  (event: "handleClick", e: MouseEvent): void;
}
const props = withDefaults(defineProps<Props>(), {
  size: "middle",
  type: "default",
  shape: "round",
  disabled: false,
  loading: false,
});

const emits = defineEmits<Emits>();
const isLoading = computed(() => {
  return props.loading;
});
const loadingColor = computed(() => {
  return "white";
});
const handleClick = (e: MouseEvent) => {
  if (!isLoading.value) {
    emits("handleClick", e);
  }
};
</script>

<template>
  <button
    class="tingfeng-btn"
    :class="[
      props.size,
      props.type,
      props.shape,
      {
        'circle-middle': props.shape === 'circle' && props.size === 'middle',
      },
      {
        'circle-large': props.shape === 'circle' && props.size === 'large',
      },
      { 'circle-small': props.shape === 'circle' && props.size === 'small' },
      { 'circle-mini': props.shape === 'circle' && props.size === 'mini' },
      { disabled: props.disabled },
      {
        'default-disabled': props.disabled && props.type === 'default',
      },
      {
        'primary-disabled': props.disabled && props.type === 'primary',
      },
      {
        'plain-disabled': props.disabled && props.type === 'plain',
      },
      {
        'gray-disabled': props.disabled && props.type === 'gray',
      },
    ]"
    :disabled="props.disabled"
    @click="handleClick"
    type="button"
  >
    <!-- loading插槽 -->
    <slot name="loading">
      <Ticon
        v-if="isLoading"
        :class="[{ loadingIcon: isLoading }]"
        :name="'sync-circle-outline'"
        :color="loadingColor"
        :size="16"
      />
    </slot>
    <!-- 插槽内容 -->
    <slot></slot>
    <!-- 图标 -->
    <slot name="icon" v-if="!isLoading"></slot>
  </button>
</template>

<style scoped lang="less">
@import url("./style/index.less");
.loadingIcon {
  // 绕自身中心旋转
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
