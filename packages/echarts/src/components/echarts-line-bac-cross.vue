<script lang="ts" setup>
import dayjs from "dayjs";
import * as echarts from "echarts";
import {
  DataZoomComponentOption,
  LegendComponentOption,
  SeriesOption,
} from "echarts";
import { ECElementEvent, GridOption } from "echarts/types/dist/shared";
import { nanoid } from "nanoid";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import VCharts from "vue-echarts";
import { GetLineChartSeriesOfBacItem } from "./type";

type EChartsOption = echarts.EChartsOption;

interface PorpsOfLineChart {
  Xdata: string[];
  seriesData?: GetLineChartSeriesOfBacItem[];
  width?: string;
  height?: string;
  colorArr?: string[];
  grid?: GridOption;
  legend?: LegendComponentOption;
  XAxisLabel?: any;
  YAxisLabel?: any;
  isAutoCroll?: boolean;
  endValue?: number;
  TEChartsOption?: EChartsOption;
}

const emits = defineEmits<{
  (e: "mouseout", value: ECElementEvent): any;
  (e: "mouseover", value: ECElementEvent): any;
}>();

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
  colorArr: () => ["15, 212, 145", "88, 207, 255 ", "222, 225, 106"],
  isAutoCroll: false,
  endValue: 15,
});

const yearStash = ref("");
const Nanoid = nanoid();
const seriesData = computed(() => {
  let seriesOption: SeriesOption[] = [];
  props.seriesData?.map((item: GetLineChartSeriesOfBacItem, index: number) => {
    // 随机颜色
    let color = props.colorArr
      ? props.colorArr[index]
      : `${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}`;

    seriesOption.push({
      name: item.name,
      type: "line",
      data: item.data,
      smooth: false,
      itemStyle: {
        color: `rgba(${color}, 1)`,
        shadowColor: `rgba(${color}, 0.5)`,
        shadowBlur: 5,
      },
      lineStyle: {
        shadowColor: `rgba(${color}, 1)`,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        opacity: 1,
        shadowBlur: 8,
        type: "solid",
        width: 2,
      },
      showSymbol: false,
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
              color: `rgba(${color}, 0.8)`,
            },
            {
              offset: 1,
              color: `rgba(${color}, 0.1)`,
            },
          ],
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowBlur: 10,
        },
      },
      emphasis: {
        focus: "series",
      },
    } as SeriesOption);

    seriesOption.push({
      name: item.name,
      data: [
        {
          coords: item.data?.map((i1, in1) => {
            return [props.Xdata[in1], i1];
          }),
        },
      ],
      type: "lines",
      coordinateSystem: "cartesian2d",
      symbolSize: 8,
      zlevel: 1,
      polyline: true,
      smooth: true,
      symbol: "circle",
      effect: {
        show: true,
        trailLength: 0.5,
        symbol: "circle",
        period: 10, // 越大速度越慢
        symbolSize: 5, // 大小
      },
      lineStyle: {
        color: `rgba(${color}, 0.5)`,
        width: 0,
        opacity: 0,
        curveness: 0,
      },
    } as SeriesOption);
  });
  return seriesOption;
});
const end = ref(15);
const options = computed(() => {
  return {
    title: {},
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
      },
      className: "custom-tooltip-box",
      formatter: (params: any) => {
        let ele = params
          .map((item: any) => {
            return `<span>${item.marker}${item.seriesName}</span>: <span style="font-weight: bold;color: white" class="tooltipvalue">${item.data}</span>`;
          })
          .join("<br />");
        return `
          <div class="custom-tooltip-style">
            <span>${params[0].name}</span>
            <br />
            ${ele}
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
      textStyle: {
        padding: [0, 0, 0, 4],
        fontSize: 12,
        color: "#fff",
      },
    },
    grid: props.grid ?? {
      left: "3%",
      right: "6%",
      bottom: "12%",
      top: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: props.Xdata[0].includes("/")
        ? props.Xdata.map((item: string) => {
            // 第一个新的年份显示
            const front = item.substring(0, 4);
            // 取出/后面的月份
            const end = item.substring(5, 7);
            const day = item.substring(8, item.length);
            if (yearStash.value === front) {
              return `\n${end}月${day}日`;
            }
            yearStash.value = front;
            return `\n${front}年\n${end}月${day}日`;
          })
        : [...props.Xdata],
      axisPointer: {
        handle: {
          show: false,
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#AEC6DF",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: props.XAxisLabel ?? {
        color: "#fff",
        fontSize: 11,
      },
    },
    yAxis: [
      {
        show: true,
        nameGap: 0,
        type: "value",
        minInterval: 1,
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "#53595d",
          },
        },
        axisTick: {
          show: false,
        },
        minorSplitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        nameTextStyle: {
          fontSize: 14,
          padding: [0, 0, 0, -15],
          align: "left",
          color: "#AEC6DF;",
        },
        axisLabel: props.YAxisLabel ?? {
          formatter: (value: number) => {
            if (value >= 10000) {
              return `${value / 10000} 万`;
            }
            return `${value}`;
          },
          color: "#FFFFFF",
          fontSize: 11,
        },
      },
    ],
    dataZoom: props.isAutoCroll
      ? [
          //滑动条
          {
            xAxisIndex: 0, //这里是从X轴的0刻度开始
            show: false, //是否显示滑动条，不影响使用
            type: "inside", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            startValue: 0, // 从头开始。
            endValue: props.endValue ?? end.value, // 一次性展示几个。
          },
        ]
      : [{ type: "inside" }],
    series: seriesData.value,
    ...props.TEChartsOption,
  } as EChartsOption;
});

const autoOptions = ref<EChartsOption>(options.value);

let autoMoveHander: any = null;
//自动滚动
const autoMove = () => {
  //this.dataList.seriesData为柱形图数据
  autoMoveHander = setInterval(() => {
    if (
      autoOptions.value &&
      autoOptions.value.dataZoom &&
      props.seriesData[0].data
    ) {
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
  if (!props.isAutoCroll) return;
  autoMove();
});

onBeforeUnmount(() => {
  clearInterval(autoMoveHander);
});
</script>

<template>
  <div>
    <!-- 线状加背景图 -->
    <VCharts
      :option="props.isAutoCroll ? autoOptions : options"
      autoresize
      :group="`radiance${Nanoid}`"
      :init-options="{ renderer: 'canvas' }"
      :style="{ width: props.width, height: props.height }"
      @mouseout="mouseoutHandle"
      @mouseover="mouseoverHandle"
      @zr:mousewheel="stop"
      @zr:mouseout="goMove"
    />
  </div>
</template>

<style lang="less" scoped>
#histogram {
  width: 100%;
  height: 200px;
}
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
