<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { nanoid } from "nanoid";
import chinaJson from "../assets/china.json";
import * as echarts from "echarts";
import VChart from "vue-echarts";
import { EChartsOption } from "echarts/types/dist/shared";

interface PorpsOfLineChart {
  width?: string;
  height?: string;
}

const Nanoid = nanoid();
const mapChartRef = ref<InstanceType<typeof VChart>>();
const props = withDefaults(defineProps<PorpsOfLineChart>(), {
  width: "100%",
  height: "200px",
});

const randomData = () => {
  return Math.round(Math.random() * 1000);
};

const options = computed(() => {
  return {
    title: {
      text: "中国地图",
      subtext: "纯属虚构",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    visualMap: {
      min: 0,
      max: 2500,
      left: "left",
      top: "center",
      text: ["高", "低"], // 文本，默认为数值文本
      calculable: true,
    },
    series: [
      {
        name: "中国",
        type: "map",
        mapType: "china", // 使用中国地图
        roam: true, // 地图缩放和漫游
        label: {
          show: true, // 显示省份标签
          fontSize: 8,
        },
        emphasis: {
          // 对应的鼠标悬浮效果
          label: {
            show: true,
            fontSize: 13,
          },
        },
        data: [
          { name: "北京市", value: randomData() },
          { name: "天津市", value: randomData() },
          { name: "上海市", value: randomData() },
          { name: "重庆市", value: randomData() },
          { name: "河北省", value: randomData() },
          { name: "河南省", value: randomData() },
          { name: "云南省", value: randomData() },
          { name: "辽宁省", value: randomData() },
          { name: "黑龙江省", value: randomData() },
          { name: "湖南省", value: randomData() },
          { name: "安徽省", value: randomData() },
          { name: "山东省", value: randomData() },
          { name: "新疆维吾尔自治区", value: randomData() },
          { name: "江苏省", value: randomData() },
          { name: "浙江省", value: randomData() },
          { name: "江西省", value: randomData() },
          { name: "湖北省", value: randomData() },
          { name: "广西壮族自治区", value: randomData() },
          { name: "甘肃省", value: randomData() },
          { name: "山西省", value: randomData() },
          { name: "内蒙古自治区", value: randomData() },
          { name: "陕西省", value: randomData() },
          { name: "吉林省", value: randomData() },
          { name: "福建省", value: randomData() },
          { name: "贵州省", value: randomData() },
          { name: "广东省", value: randomData() },
          { name: "青海省", value: randomData() },
          { name: "西藏自治区", value: randomData() },
          { name: "四川省", value: randomData() },
          { name: "宁夏回族自治区", value: randomData() },
          { name: "海南省", value: randomData() },
          { name: "台湾省", value: randomData() },
          { name: "香港特别行政区", value: randomData() },
          { name: "澳门特别行政区", value: randomData() },
        ],
      },
    ],
  } as EChartsOption;
});

onMounted(() => {
  echarts.registerMap("china", chinaJson as any);
  mapChartRef.value?.setOption(options.value);
});
</script>

<template>
  <v-chart
    :group="`radiance${Nanoid}`"
    :init-options="{ renderer: 'svg' }"
    :style="{ width: props.width, height: props.height }"
    ref="mapChartRef"
    autoresize
  />
</template>
