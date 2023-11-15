<script lang="ts" setup>
import {
  GetLineChartSeriesOfBacItem,
  LineAndBarChartSeriesOfBacItem,
} from "../packages/echarts/src/components/type";
import { getSeriesOfBack } from "./utils/chartsUtils";
import { computed, ref } from "vue";
import TMessage from "../packages/message";

const tyep = ["success", "info", "warning", "error"];
const click = (e: MouseEvent) => {
  const typeRandom = Math.floor(Math.random() * 4);
  TMessage[tyep[typeRandom]]("我是被点出来的");
};
const loadingClick = (e: MouseEvent) => {
  console.log("loadingClick", e);
};

const loadingBoolean = ref(true);

setTimeout(() => {
  loadingBoolean.value = false;
}, 5000);

/* -------------------------------------------------------------------------- */
/*                               TEchartsLineBar                              */
/* -------------------------------------------------------------------------- */
const heights = computed(() => {
  return `140px`;
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

const seriesDataOfLineBac = computed((): GetLineChartSeriesOfBacItem[] => {
  const arr: GetLineChartSeriesOfBacItem[] = [];

  Array.from({ length: 2 }).forEach((item, index) =>
    arr.push(...getSeriesOfBack("30", nameArr[index]))
  );
  return arr;
});
</script>

<template>
  <Tspace v-show="true" :size="10" :direction="'vertical'">
    <!-- 基础 -->
    <Tspace :size="40" :direction="'horizontal'">
      <Tbutton size="large" type="default" @handleClick="click"
        >测试组件</Tbutton
      >
      <Tbutton size="middle" type="primary" @handleClick="click"
        >测试组件</Tbutton
      >
      <Tbutton size="small" type="plain" @handleClick="click">测试组件</Tbutton>
      <Tbutton size="mini" type="gray" @handleClick="click">测试组件</Tbutton>
    </Tspace>
    <!-- 禁用 -->
    <Tspace :size="40" :direction="'horizontal'">
      <Tbutton size="large" type="default" :disabled="true" @handleClick="click"
        >测试组件</Tbutton
      >
      <Tbutton size="middle" type="primary" :disabled="true">测试组件</Tbutton>
      <Tbutton size="small" type="plain" :disabled="true">测试组件</Tbutton>
      <Tbutton size="mini" type="gray" :disabled="true">测试组件</Tbutton>
    </Tspace>
    <!-- 形状 -->
    <Tspace :size="40" :direction="'horizontal'">
      <Tbutton :size="'large'" :shape="'circle'" :type="'default'"
        >测试组件</Tbutton
      >
      <Tbutton :size="'middle'" :shape="'round'" :type="'primary'"
        >测试组件</Tbutton
      >
      <Tbutton :size="'small'" :shape="'square'" :type="'plain'"
        >测试组件</Tbutton
      >
      <Tbutton :size="'mini'" :shape="'square'" :type="'gray'"
        >测试组件</Tbutton
      >
    </Tspace>
    <!-- 图标 -->
    <Tspace :size="40" :direction="'horizontal'">
      <Tbutton :size="'large'" :shape="'circle'" :type="'default'">
        <template #icon>
          <Ticon :name="'AccessTime24Filled'" :color="'white'" :size="16" />
        </template>
      </Tbutton>
      <Tbutton :size="'middle'" :shape="'round'" :type="'primary'">
        <template #icon>
          <Ticon :name="'AccessTime24Filled'" :color="'gold'" :size="16" />
        </template>
        测试组件
      </Tbutton>
      <Tbutton :size="'middle'" :shape="'round'" :type="'primary'">
        <template #icon>
          <Ticon :name="'AccessTime24Filled'" :color="'gold'" :size="16" />
        </template>
        测试组件
      </Tbutton>
    </Tspace>

    <!-- 加载中-->
    <Tspace :size="40" :direction="'horizontal'">
      <Tbutton
        :size="'large'"
        :shape="'circle'"
        :type="'default'"
        :loading="loadingBoolean"
        @handleClick="loadingClick"
      >
        <template #icon>
          <Ticon :name="'AccessTime24Filled'" :color="'white'" :size="16" />
        </template>
      </Tbutton>
      <Tbutton
        :size="'middle'"
        :shape="'round'"
        :type="'primary'"
        :loading="true"
        @handleClick="loadingClick"
      >
        <template #icon>
          <Ticon :name="'AccessTime24Filled'" :color="'gold'" :size="16" />
        </template>
        测试组件
      </Tbutton>
      <Tbutton
        :size="'middle'"
        :shape="'round'"
        :type="'primary'"
        :loading="loadingBoolean"
        @handleClick="loadingClick"
      >
        <template #icon>
          <Ticon :name="'AccessTime24Filled'" :color="'gold'" :size="16" />
        </template>
        测试组件
      </Tbutton>
    </Tspace>
    <!-- echarts-line-bar -->
    <div style="width: 400px; height: 200px">
      <TEchartsLineBar
        :height="heights"
        :Xdata="Xdata"
        :series-data="seriesDara"
        :BarAndLineColor="color"
      />
    </div>
    <!-- echarts-line-bac-cross  -->
    <div style="width: 400px; height: 200px">
      <TEchartsLineBacCross
        :height="heights"
        :Xdata="XdataOfLineBac"
        :colorArr="colorArr"
        :series-data="seriesDataOfLineBac"
        :isAutoCroll="true"
      />
    </div>
    <!-- echarts-line-bac-cross  -->
    <div style="width: 800px; height: 800px">
      <TEchartsMap :height="'800px'" />
    </div>
  </Tspace>

  <!-- 时钟 -->
  <div v-if="false" class="TClock">
    <TClock />
  </div>
</template>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  background-color: black;
}
</style>
