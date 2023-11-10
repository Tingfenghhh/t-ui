<script lang="ts" setup>
import { computed } from "vue";

interface iCircleProps {
  rotate: [number, number];
  borderColor: string;
}

const props = defineProps<iCircleProps>();

const color = computed(() => "#eee");
const borderColor = computed(() => props.borderColor);
</script>

<template>
    <div class="clock_div">
      <div
        class="line_div"
        v-for="(item, index) in props.rotate"
        :key="Date.now() + index"
        :style="{
          transform: `rotate(${item}deg)`,
        }"
      ></div>
    </div>
</template>

<style lang="less" scoped>
.clock_div {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 45px;
  border: 1px solid v-bind(borderColor);
  transition: all 1s;
}
.line_div {
  position: absolute;
  z-index: 5;
  width: 3px;
  height: 23px;
  background: v-bind(color);
  right: 50%;
  top: -2%;
  transform-origin: bottom;
  margin-left: -2px;
  transition: all 1s;
  @media only screen and (max-width: 1400px) {
    & {
      height: 18px;
    }
  }
  @media only screen and (max-width: 1150px) {
    & {
      width: 2px;
      height: 14px;
    }
  }
  @media only screen and (max-width: 900px) {
    & {
      height: 11px;
    }
  }
  @media only screen and (max-width: 700px) {
    & {
      height: 9px;
    }
  }
}
</style>
