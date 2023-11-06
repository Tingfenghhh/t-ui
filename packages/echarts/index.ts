import EchartsLineBar from './src/components/echarts-line-bar.vue'
import EchartsLineBacCross from "./src/components/echarts-line-bac-cross.vue"
import { withInstall } from '../withInstall'

const TEchartsLineBar = withInstall(EchartsLineBar)
const TEchartsLineBacCross = withInstall(EchartsLineBacCross)
export default {
    TEchartsLineBar,
    TEchartsLineBacCross
}