# Echarts组件

基于`echarts`和`vue-echarts`封装的图表组件,可以通过`滚轮缩放`，`左右拖动`查看详细数据，当鼠标`放在数据上的时候`停止`自动滚动`

## echarts-line-bar组件

<demo src="../components/Echarts/Echarts-line-bar.vue"></demo>

## `echarts-line-bar` API

`<echarts-line-bar />` 组件提供了以下可配置的 Props：


|     参数名      |             描述             |                类型                |          默认值          |
| :-------------: | :--------------------------: | :--------------------------------: | :----------------------: |
|      Xdata      |          X轴的数据           |             `string[]`             |           `无`           |
|   seriesData    | 图表数据，具体的看类型的参数 | `LineAndBarChartSeriesOfBacItem[]` |           `[]`           |
|      width      |           图表的宽           |              `string`              |          `100%`          |
|     height      |           图表的高           |              `string`              |         `200px`          |
|   XandYColor    |         X和Y轴的颜色         |              `string`              |        `#00DAF0`         |
| BarAndLineColor |       柱状和现状的颜色       |             `string[]`             | `["#08E0A1", "#fc947e"]` |
|      grid       |        图表的布局方案        |            `GridOption`            |           `无`           |
|     legend      |        图表的图例配置        |      `LegendComponentOption`       |           `无`           |
|   XAxisLabel    |        X轴的详细配置         |               `any`                |           `无`           |
|   YAxisLabel    |        Y轴的详细配置         |               `any`                |           `无`           |
|    loadings     |      图表是否显示加载中      |             `boolean`              |         `false`          |


`<echarts-line-bar />` 组件提供了以下可事件处理 Event：
|   参数名    |        描述        | 类型  | 默认值 |
| :---------: | :----------------: | :---: | :----: |
| changeValue | 图表的点击事件触发 | `any` |  `无`  |

