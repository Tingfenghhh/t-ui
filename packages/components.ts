import Tbutton from "./button"
import Tspace from "./space"
import Ticon from "./icon"
import TMessage from './message';
import TEcharts from "./echarts"
import TColock from "./clock/"

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Tbutton: typeof Tbutton
    Tspace: typeof Tspace
    Ticon: typeof Ticon
    TColock: typeof TColock
    TMessage: typeof TMessage.TMessageEle
    TEchartsLineBar: typeof TEcharts.TEchartsLineBar
    TEchartsLineBacCross: typeof TEcharts.TEchartsLineBacCross
  }
}