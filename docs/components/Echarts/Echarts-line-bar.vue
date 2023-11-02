<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import TEchartsLineBar from "../../../packages/echarts/src/components/echarts-line-bar.vue";
import { LineAndBarChartSeriesOfBacItem } from "../../../packages/echarts/src/components/type";
import { LegendComponentOption } from "echarts/types/dist/shared";
import { useDark } from "@vueuse/core";

const heights = computed(() => {
  return `200px`;
});

const color = ["#08E0A1", "#fc947e"];

const Xdata = computed((): string[] => {
  return [
    "四川省",
    "重庆市",
    "北京市",
    "上海市",
    "广东省",
    "江苏省",
    "浙江省",
    "湖北省",
    "湖南省",
    "河南省",
    "山东省",
    "河北省",
    "陕西省",
    "福建省",
    "安徽省",
    "广西壮族自治区",
    "江西省",
    "云南省",
    "辽宁省",
    "黑龙江省",
    "吉林省",
    "山西省",
    "贵州省",
    "甘肃省",
    "内蒙古自治区",
    "天津市",
    "新疆维吾尔自治区",
    "海南省",
    "宁夏回族自治区",
    "西藏自治区",
    "青海省",
    "香港特别行政区",
    "澳门特别行政区",
    "台湾省",
  ];
});

const AllNumLine = computed((): LineAndBarChartSeriesOfBacItem => {
  const obj: LineAndBarChartSeriesOfBacItem = {
    name: "综合",
    color: "222, 225, 106",
    type: "line",
    // 随机34个数
    data: Array.from({ length: 34 }, () => Math.floor(Math.random() * 1000)),
  };

  return { ...obj };
});
const WiseNumBar = computed((): LineAndBarChartSeriesOfBacItem => {
  const obj: LineAndBarChartSeriesOfBacItem = {
    name: "移动端",
    data: Array.from({ length: 34 }, () => Math.floor(Math.random() * 1000)),
    color: "#0fd491",
    type: "bar",
    bacColor: "146, 255, 246", // "8,224,161"
    bacColor2: "116,247,120",
    barTopAndBottomColor: "rgba(0, 94, 82, 1)",
    barLineColor: ["#005e52", "#92fff6"],
    barBacLinegridentColor: ["#005e524b", "#92fff64a"],
  };

  return { ...obj };
});
const PcNumBar = computed((): LineAndBarChartSeriesOfBacItem => {
  const obj: LineAndBarChartSeriesOfBacItem = {
    name: "PC端",
    data: Array.from({ length: 34 }, () => Math.floor(Math.random() * 1000)),
    color: "#fc947e",
    type: "bar",
    bacColor: "252, 148, 126",
    barTopAndBottomColor: "rgba(0, 64, 124, 1)",
    barBacLinegridentColor: [
      "rgba(0, 64, 124, 0.2)",
      "rgba(81, 175, 255, 0.2)",
    ],
    barLineColor: ["rgba(0, 64, 124, 0.8)", "rgba(81, 175, 255, 1)"],
  };

  return { ...obj };
});

const seriesDara = computed((): LineAndBarChartSeriesOfBacItem[] => {
  return [AllNumLine.value, WiseNumBar.value, PcNumBar.value];
});

const isDark = useDark();
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
  <TEchartsLineBar
    :height="heights"
    :Xdata="Xdata"
    :series-data="seriesDara"
    :BarAndLineColor="color"
    :XAxisLabel="XAxisLabel"
    :YAxisLabel="YAxisLabel"
    :legend="legend"
  />
</template>

<style lang="less" scoped></style>
