/**
 * 表示线图和柱状图的数据系列项。
 */
export interface LineAndBarChartSeriesOfBacItem {
    /**
     * 数据系列项的名称。
     */
    name: string,
    /**
     * 数据系列项的颜色。
     */
    color: string
    /**
     * 数据系列项的数据。
     */
    data: number[]
    /**
     * 数据系列项的类型，可以是 "bar" 或 "line"。
     */
    type: "bar" | 'line'
    /**
     * 数据系列项的背景颜色。
     */
    bacColor?: string
    /**
     * 数据系列项的第二个背景颜色。
     */
    bacColor2?: string
    /**
     * 数据系列项柱状图顶部和底部的颜色。
     */
    barTopAndBottomColor?: string
    /**
     * 数据系列项柱状图背景线性渐变颜色。
     */
    barBacLinegridentColor?: string[]
    /**
     * 数据系列项柱状图线条颜色。
     */
    barLineColor?: string[]
  }