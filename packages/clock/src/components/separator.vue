<script lang="ts" setup>
import { separator } from "./types/numbers";
import Clock from "./clock.vue";
import { computed } from "vue";

interface iSeparatorProps {
  separators: 2 | 4;
}

const props = defineProps<iSeparatorProps>();

const propsSeparator = computed(() => props.separators);
</script>

<template>
  <div class="separator_div">
    <Clock
      v-for="(item, index) in separator"
      :key="index"
      :borderColor="'#eeeeee47'"
      :rotate="item"
    />
  </div>
</template>

<style lang="less" scoped>
.separator_div {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(v-bind(propsSeparator), 46px);
  grid-template-rows: repeat(6, 46px);
  margin-bottom: 10px;
  align-items: center;
  direction: rtl;
  @media only screen and (max-width: 1400px) {
    & {
      grid-template-columns: repeat(v-bind(propsSeparator), 36px);
      grid-template-rows: repeat(6, 36px);
    }
  }
  @media only screen and (max-width: 1150px) {
    & {
      grid-template-columns: repeat(v-bind(propsSeparator), 28px);
      grid-template-rows: repeat(6, 28px);
    }
  }
  @media only screen and (max-width: 900px) {
    & {
      grid-template-columns: repeat(v-bind(propsSeparator), 22px);
      grid-template-rows: repeat(6, 22px);
    }
  }
  @media only screen and (max-width: 700px) {
    & {
      grid-template-columns: repeat(v-bind(propsSeparator), 18px);
      grid-template-rows: repeat(6, 18px);
    }
  }
}
</style>
