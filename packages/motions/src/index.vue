<script lang="ts" setup>
import { Motion, Presence } from "motion/vue";
import { CSSProperties, computed } from "vue";
import { VariantDefinition } from "@motionone/dom/types/state/types";
import { InViewOptions } from "@motionone/dom/types/gestures/in-view";
import { AnimationOptionsWithOverrides } from "@motionone/dom/types/animate/types";

interface MotionsProps {
  tag?: string;
  initial?: boolean | VariantDefinition;
  animate?: VariantDefinition;
  inView?: VariantDefinition;
  hover?: VariantDefinition;
  press?: VariantDefinition;
  exit?: VariantDefinition;
  inViewOptions?: InViewOptions;
  transition?: AnimationOptionsWithOverrides;
  style?: CSSProperties;
  [key: string]: any;
}

const props = defineProps<MotionsProps>();
const tag = computed(() => props.tag || "div");
const initial = computed(() => props.initial);
const animate = computed(() => props.animate || {});
const inView = computed(() => props.inView || {});
const hover = computed(() => props.hover || {});
const press = computed(() => props.press || {});
const exit = computed(() => props.exit || {});
const inViewOptions = computed(() => props.inViewOptions || {});
const transition = computed(() => props.transition || {});
const style = computed(() => props.style || {});
</script>

<template>
  <Presence>
    <Motion
      :tag="tag"
      :initial="initial"
      :animate="animate"
      :inView="inView"
      :hover="hover"
      :press="press"
      :exit="exit"
      :inViewOptions="inViewOptions"
      :transition="transition"
      :style="style"
    >
      <slot></slot>
    </Motion>
  </Presence>
</template>

<style lang="less" scoped></style>
