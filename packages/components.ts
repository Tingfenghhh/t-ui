import Tbutton from "./button/src/index.vue"
import Tspace from "./space/src/index.vue"
import Ticon from "./icon/src/index.vue"
import TEchartsLineBar from "./echarts/src/components/echarts-line-bar.vue"

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Tbutton: typeof Tbutton
    Tspace: typeof Tspace
    Ticon: typeof Ticon
    TEchartsLineBar: typeof TEchartsLineBar
  }
}