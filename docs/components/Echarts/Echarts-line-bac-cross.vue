<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import TEchartsLineBacCross from "../../../packages/echarts/src/components/echarts-line-bac-cross.vue";
import { GetLineChartSeriesOfBacItem } from "../../../packages/echarts/src/components/type";
import { getSeriesOfBack } from "../../../src/utils/chartsUtils";
import { useDark } from "@vueuse/core";

const heights = computed(() => {
  return `200px`;
});
/* -------------------------------------------------------------------------- */
/*                            TEchartsLineBacCross                            */
/* -------------------------------------------------------------------------- */
const XdataOfLineBac = ref([
  "1号",
  "2号",
  "3号",
  "4号",
  "5号",
  "6号",
  "7号",
  "8号",
  "9号",
  "10号",
  "11号",
  "12号",
  "13号",
  "14号",
  "15号",
  "16号",
  "17号",
  "18号",
  "19号",
  "20号",
  "21号",
  "22号",
  "23号",
  "24号",
  "25号",
  "26号",
  "27号",
  "28号",
  "29号",
  "30号",
]);
const nameArr = ["今年", "去年"];
const colorArr = ["233, 223, 103", "15, 212, 145 "];
const isDark = useDark();
const seriesDataOfLineBac = computed((): GetLineChartSeriesOfBacItem[] => {
  const arr: GetLineChartSeriesOfBacItem[] = [];

  Array.from({ length: 2 }).forEach((item, index) =>
    arr.push(...getSeriesOfBack("30", nameArr[index]))
  );
  return arr;
});
const legend = computed((): any => {
  return {
    show: true,
    bottom: -5,
    align: "auto",
    itemWidth: 14,
    itemHeight: 4,
    itemGap: 24,
    icon: "react",
    selectedMode: false,
    textStyle: {
      padding: [0, 0, 0, 4],
      fontSize: 12,
      color: isDark.value ? "rgb(205, 149, 28)" : "white",
    },
  };
});

const XAxisLabel = computed(() => {
  return {
    color: isDark.value ? "rgb(205, 149, 28)" : "white",
    fontSize: 12,
  };
});

const YAxisLabel = computed(() => {
  return {
    color: isDark.value ? "rgb(205, 149, 28)" : "white",
    fontSize: 12,
  };
});
</script>

<template>
  <TEchartsLineBacCross
    :height="heights"
    :Xdata="XdataOfLineBac"
    :colorArr="colorArr"
    :series-data="seriesDataOfLineBac"
    :isAutoCroll="true"
    :XAxisLabel="XAxisLabel"
    :YAxisLabel="YAxisLabel"
    :legend="legend"
  />
</template>

<style lang="less" scoped></style>
