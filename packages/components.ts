import Tbutton from "./button"
import Tspace from "./space"
import Ticon from "./icon"
import TEcharts from "./echarts"

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Tbutton: typeof Tbutton
    Tspace: typeof Tspace
    Ticon: typeof Ticon
    TEchartsLineBar: typeof TEcharts.TEchartsLineBar
  }
}