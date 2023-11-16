import type { App, Component } from "vue";
import Tbutton from "./button";
import Tspace from "./space";
import Ticon from "./icon";
import TMessage from "./message";
import Echarts from "./echarts";
import TClock from "./clock";
import TMotion from "./motions";
import "./global.less"; // 开发全局样式

const components: {
  [propName: string]: Component;
} = {
  Tbutton,
  Tspace,
  Ticon,
  TClock,
  TMessageEle: TMessage.TMessageEle,
  TEchartsMap: Echarts.TEchartsMap,
  TEchartsLineBar: Echarts.TEchartsLineBar,
  TEchartsLineBacCross: Echarts.TEchartsLineBacCross,
  TMotion,
};

// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
const installComponents: any = (app: App) => {
  for (const key in components) {
    app.component(key, components[key]);
  }
};
// vue插件
const install: any = (app: any) => {
  installComponents(app);
};
export default {
  install,
  TMessage,
};
