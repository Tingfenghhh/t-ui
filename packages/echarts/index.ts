import EchartsLineBar from "./src/components/echarts-line-bar.vue";
import EchartsLineBacCross from "./src/components/echarts-line-bac-cross.vue";
import EchartsMap from "./src/components/echarts-map.vue";
import { withInstall } from "../withInstall";

const TEchartsLineBar = withInstall(EchartsLineBar);
const TEchartsLineBacCross = withInstall(EchartsLineBacCross);
const TEchartsMap = withInstall(EchartsMap);
export default {
  TEchartsLineBar,
  TEchartsLineBacCross,
  TEchartsMap,
};
