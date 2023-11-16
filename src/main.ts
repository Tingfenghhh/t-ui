import { createApp } from "vue";
import App from "./App.vue";
import TingfengUI from "../packages"; // 开发
import "../packages/global.less"; // 开发全局样式
// import  "../packages/custom.css"; // vitepress自定义覆盖
// import TingfengUI from '../tingfeng-ui/lib' // 本地组件测试
// import '../tingfeng-ui/lib/css/index.css' // 本地组件测试

const app = createApp(App);
app.use(TingfengUI);
app.mount("#app");
