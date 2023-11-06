# Echarts组件

基于`echarts`和`vue-echarts`封装的图表组件,可以通过`滚轮缩放`，`左右拖动`查看详细数据，当鼠标`放在数据上的时候`停止`自动滚动`

## echarts-line-bar组件

<demo src="../components/Echarts/Echarts-line-bar.vue"></demo>

## `echarts-line-bar` API

`<TEchartsLineBar />` 组件提供了以下可配置的 Props：


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
| TEChartsOption  |         图表options          |          `EChartsOption`           |           `{}`           |


`<TEchartsLineBar />` 组件提供了以下可事件处理 Event：
|      参数名       |          描述          |       类型       | 默认值 |
| :---------------: | :--------------------: | :--------------: | :----: |
| legendChangeValue | 图表的图例点击事件触发 |      `any`       |  `无`  |
|     mouseout      |  图表鼠标移出事件触发  | `ECElementEvent` |  `无`  |
|     mouseover     |  图表鼠标移入事件触发  | `ECElementEvent` |  `无`  |


## echarts-line-bac-cross组件

<demo src="../components/Echarts/Echarts-line-bac-cross.vue"></demo>

## echarts-line-bac-cross` API

`<TEchartsLineBacCross />` 组件提供了以下可配置的 Props：


|     参数名     |             描述             |                类型                |                        默认值                        |
| :------------: | :--------------------------: | :--------------------------------: | :--------------------------------------------------: |
|     Xdata      |          X轴的数据           |             `string[]`             |                         `无`                         |
|   seriesData   | 图表数据，具体的看类型的参数 | `LineAndBarChartSeriesOfBacItem[]` |                         `[]`                         |
|     width      |           图表的宽           |              `string`              |                        `100%`                        |
|     height     |           图表的高           |              `string`              |                       `200px`                        |
|    colorArr    |         图标背景颜色         |             `string[]`             | `["15, 212, 145", "88, 207, 255 ", "222, 225, 106"]` |
|      grid      |        图表的布局方案        |            `GridOption`            |                         `无`                         |
|     legend     |        图表的图例配置        |      `LegendComponentOption`       |                         `无`                         |
|   XAxisLabel   |        X轴的详细配置         |               `any`                |                         `无`                         |
|   YAxisLabel   |        Y轴的详细配置         |               `any`                |                         `无`                         |
|  isAutoCroll   |       图表是否自动滚动       |             `boolean`              |                       `false`                        |
|    endValue    |  图表自动滚动时可见数据个数  |              `number`              |                         `15`                         |
| TEChartsOption |         图表options          |          `EChartsOption`           |                         `{}`                         |


`<TEchartsLineBacCross />` 组件提供了以下可事件处理 Event：
|      参数名       |          描述          |       类型       | 默认值 |
| :---------------: | :--------------------: | :--------------: | :----: |
|     mouseout      |  图表鼠标移出事件触发  | `ECElementEvent` |  `无`  |
|     mouseover     |  图表鼠标移入事件触发  | `ECElementEvent` |  `无`  |