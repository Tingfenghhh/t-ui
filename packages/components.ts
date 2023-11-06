import Tbutton from "./button"
import Tspace from "./space"
import Ticon from "./icon"
import TMessage from './message';
import TEcharts from "./echarts"

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Tbutton: typeof Tbutton
    Tspace: typeof Tspace
    Ticon: typeof Ticon
    TMessage: typeof TMessage.TMessageEle
    TEchartsLineBar: typeof TEcharts.TEchartsLineBar
    TEchartsLineBacCross: typeof TEcharts.TEchartsLineBacCross
  }
}