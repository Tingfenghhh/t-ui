<script lang="ts" setup name="EchartsLineBar">
import dayjs from "dayjs";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import * as echarts from "echarts";
import {
  DataZoomComponentOption,
  LegendComponentOption,
  SeriesOption,
} from "echarts";
import { nanoid } from "nanoid";
import VCharts from "vue-echarts";
import { ECElementEvent, GridOption } from "echarts/types/dist/shared";
import { LineAndBarChartSeriesOfBacItem } from "./type";

type EChartsOption = echarts.EChartsOption;

interface PorpsOfLineChart {
  Xdata: string[];
  seriesData?: LineAndBarChartSeriesOfBacItem[];
  width?: string;
  height?: string;
  XandYColor?: string;
  BarAndLineColor?: string[];
  grid?: GridOption;
  legend?: LegendComponentOption;
  XAxisLabel?: any;
  YAxisLabel?: any;
  loadings?: boolean;
  TEChartsOption?: EChartsOption;
}

const emits = defineEmits<{
  (e: "legendChangeValue", value: any): void;
  (e: "mouseout", value: ECElementEvent): any;
  (e: "mouseover", value: ECElementEvent): any;
}>();

const VChartsRef = ref();

const props = withDefaults(defineProps<PorpsOfLineChart>(), {
  Xdata: () => {
    const arr: string[] = [];
    for (let i = 0; i < 15; i++) {
      arr.push(dayjs().subtract(i, "day").format("MM月DD日"));
    }
    return arr.reverse();
  },
  seriesData: () => [],
  width: "100%",
  height: "200px",
  XandYColor: "#00DAF0",
  BarAndLineColor: () => ["#08E0A1", "#fc947e"],
  loadings: false,
  TEChartsOption: () => ({} as EChartsOption),
});

const Nanoid = nanoid();

//
const nowLegend = ref();

//   用于计算y轴的最大值，以便于设置固定顶部圆片
// const dataMax = computed(() => {
//   const allArr: number[] = []
//   props.seriesData.forEach((item: LineAndBarChartSeriesOfBacItem) => {
//     allArr.push(...item.data)
//   })
//   return allArr.sort((a, b) => b - a)[0]
// })

// 计算柱状图类型有多少个
const getBarNum = computed(() => {
  // 根据props.seriesData的type来计算
  let count = 0;
  props.seriesData.forEach((item: LineAndBarChartSeriesOfBacItem) => {
    if (item.type === "bar") {
      count += 1;
    }
  });
  return count;
});

// 获取要计算的柱状数据
const getSymbolOffset = (index: number, typeNum: number) => {
  if (index === 1 && typeNum === 2) {
    return -8;
  }
  if (index === 2 && typeNum == 2) {
    return 8;
  }
  if (index !== 1 && typeNum > 2) {
    return index * 11;
  }
};

//生成同一种类型的一根柱体的样式
const getBarStyle = (
  data: LineAndBarChartSeriesOfBacItem,
  index: number,
  bacColor: string,
  type = "bar"
) => {
  if (type === "line") {
    return [
      {
        name: data.name,
        type: "line",
        data: [...data.data],
        smooth: false,
        itemStyle: {
          color: `rgba(${data.color}, 1)`,
          shadowColor: `rgba(${data.color}, 1)`,
          shadowBlur: 5,
        },

        lineStyle: {
          shadowColor: `rgba(${data.color}, 0.5)`,
          shadowOffsetX: 1,
          shadowOffsetY: 1,
          opacity: 1,
          shadowBlur: 8,
          type: "solid",
          width: 2,
        },
        emphasis: {
          focus: "series",
        },
        areaStyle: {
          opacity: 0.8,
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: "linear",
            global: false,
            colorStops: [
              {
                offset: 0,
                color: `rgba(${data.color}, 0.8)`,
              },
              {
                offset: 0.6,
                color: `rgba(${data.color}, 0.1)`,
              },
            ],
          },
        },
      },
    ] as SeriesOption[];
  }
  return [
    //柱顶圆片
    {
      name: data.name,
      type: "pictorialBar",
      symbol: "circle",
      symbolSize: [15, 5],
      symbolOffset: [getSymbolOffset(index, getBarNum.value), -3],
      z: 1,
      data: [...data.data],
      symbolPosition: "end",
      tooltip: {
        show: true,
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: data.barTopAndBottomColor ?? `rgb(${bacColor})`,
            },
            {
              offset: 1,
              color: data.barTopAndBottomColor ?? `rgb(${bacColor})`,
            },
          ],
          false
        ),
      },
    },
    //柱体
    {
      name: data.name,
      type: "bar",
      barWidth: 15,
      barGap: "5%",
      data: [...data.data],
      showBackground: false,
      // showBackground: true,
      backgroundStyle: {
        color: {
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          type: "linear",
          global: false,
          colorStops: [
            {
              offset: 0,
              color: data.barBacLinegridentColor
                ? data.barBacLinegridentColor[1]
                : `rgba(${bacColor},0.80)`,
            },
            {
              offset: 0.8,
              color: data.barBacLinegridentColor
                ? data.barBacLinegridentColor[0]
                : `rgba(${bacColor},0.80)`,
            },
          ],
        },
      },
      itemStyle: {
        color: {
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          type: "linear",
          global: false,
          colorStops: [
            {
              offset: 0,
              color: data.barLineColor
                ? data.barLineColor[1]
                : `rgba(${bacColor},0.80)`,
            },
            {
              offset: 0.8,
              color: data.barLineColor
                ? data.barLineColor[0]
                : `rgba(${bacColor},0.80)`,
            },
          ],
        },
      },
    },
  ] as SeriesOption[];
};

// 生成servise对象
const getServiseData = computed((): SeriesOption[] => {
  const arr = props.seriesData.map(
    (item: LineAndBarChartSeriesOfBacItem, index: number) => {
      return getBarStyle(item, index, item.bacColor!, item.type);
    }
  );
  // 将数组转为一维数组
  return arr.flat();
});

const end = ref(5);
let options = computed(() => {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
      className: "custom-tooltip-box",
      formatter: (params: any) => {
        return `
           <div class="custom-tooltip-style">
             <span>${params[0].name}</span>
             <br />
             <span>${params[0].marker}${params[0].seriesName}</span>: <span style="font-weight: bold;color: white" class="tooltipvalue"> ${params[0].value}</span>
             <br />
             <span>${params[2].marker}${params[2].seriesName}</span>: <span style="font-weight: bold;color: white" class="tooltipvalue"> ${params[2].value}</span>
             <br />
             <span>${params[4].marker}${params[4].seriesName}</span>: <span style="font-weight: bold;color: white" class="tooltipvalue"> ${params[4].value}</span>
           </div>
           `;
      },
    },
    legend: props.legend ?? {
      show: true,
      // 显示在底部
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
        color: "#fff",
      },
    },
    grid: props.grid ?? {
      top: 10,
      left: 10,
      right: 0,
      bottom: 20,
      containLabel: true,
    },
    dataZoom: [
      {
        xAxisIndex: 0, //这里是从X轴的0刻度开始
        show: false, //是否显示滑动条，不影响使用
        type: "inside", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
        startValue: 0, // 从头开始。
        endValue: end.value, // 一次性展示6个。
      },
    ],
    xAxis: {
      type: "category",
      data: [...props.Xdata],
      axisLabel: props.XAxisLabel ?? {
        color: "#fff",
        fontSize: 12,
      },
      axisTick: {
        show: true, //显示刻度
      },
      boundaryGap: true,
      splitLine: {
        show: false,
        interval: 0.08,
        lineStyle: {
          type: "solid",
          color: "#00DAF0",
        },
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          color: "#333",
          type: "dashed",
        },
      },
      // minInterval: 1, // 设置最小间隔 同时取消显示小数点
      axisLabel: props.YAxisLabel ?? {
        // formatter: '{value} 人',
        formatter: (value: number) => {
          if (value >= 10000) {
            return `${value / 10000} 万`;
          }
          return `${value} `;
        },
        color: "#FFFFFF",
        fontSize: 12,
      },
    },
    series: [...getServiseData.value],
    ...props.TEChartsOption,
  } as EChartsOption;
});

// 图例点击事件
const legendselectchanged = (e: any) => {
  nowLegend.value = e.selected;
  emits("legendChangeValue", nowLegend.value);
};
const porpsLoading = computed(() => {
  return props.loadings;
});

const autoOptions = ref<EChartsOption>(options.value);

let autoMoveHander: any = null;
//自动滚动
const autoMove = () => {
  //this.dataList.seriesData为柱形图数据
  autoMoveHander = setInterval(() => {
    if (autoOptions.value && autoOptions.value.dataZoom) {
      const value = autoOptions.value.dataZoom as DataZoomComponentOption[];
      if (Number(value[0].endValue) === props.seriesData[0].data.length - 1) {
        value[0].endValue = end.value;
        value[0].startValue = 0;
      } else {
        value[0].endValue = Number(value[0].endValue) + 1;
        value[0].startValue = Number(value[0].startValue) + 1;
      }
      autoOptions.value.dataZoom = value;
    }
  }, 3000);
};
//停止滚动
const stop = () => {
  clearInterval(autoMoveHander);
};
//继续滚动
const goMove = () => {
  if (autoMoveHander) {
    clearInterval(autoMoveHander);
  }
  autoMove();
};
watch(
  () => options.value,
  (val) => {
    autoOptions.value = val;
  }
);

const mouseoutHandle = (params: ECElementEvent): any => {
  goMove();
  emits("mouseout", params);
};
const mouseoverHandle = (params: ECElementEvent): any => {
  stop();
  emits("mouseover", params);
};

onMounted(() => {
  autoOptions.value = options.value;
  if (autoMoveHander) {
    clearInterval(autoMoveHander);
  }
  autoMove();
});
onBeforeUnmount(() => {
  clearInterval(autoMoveHander);
});
</script>

<template>
  <!-- 线状加多个圆形柱状图 -->
  <VCharts
    ref="VChartsRef"
    :option="autoOptions"
    autoresize
    :group="`radiance${Nanoid}`"
    :init-options="{ renderer: 'canvas' }"
    :style="{ width: props.width, height: props.height }"
    :loading="porpsLoading"
    :loadingOptions="{
      text: '数据加载中,请稍后',
      textColor: '#16ae7e',
      color: '#0c6146',
      maskColor: 'rgba(55, 54, 50,0.2)',
    }"
    @legendselectchanged="legendselectchanged"
    @mouseout="mouseoutHandle"
    @mouseover="mouseoverHandle"
    @zr:mousewheel="stop"
    @zr:mouseout="goMove"
  />
</template>

<style lang="less" scoped>
// echarts的tooltip背景图
:deep(.custom-tooltip-box) {
  padding: 0 !important;
  border: none !important;
  background-color: transparent !important;
  background-image: url("../assets/images/tooltipbac.png");
  background-position: -5px 0px;
  background-size: 110% 100%;
  background-repeat: no-repeat;
  color: #fff;
  .custom-tooltip-style {
    box-sizing: border-box;
    padding: 10px;
    color: #fff;
    span {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      .tooltipvalue {
        font-size: 11px;
        font-family: DIN;
        font-weight: bold;
        color: #ffffff;
        line-height: 14px;
      }
    }
  }
}
</style>
