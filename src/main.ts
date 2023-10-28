import { createApp } from 'vue'
import App from './App.vue'
import TingfengUI from '../packages' // 开发
import "../packages/global.less"; // 开发全局样式
// import  "../packages/custom.css"; // vitepress自定义覆盖
// import 'tingfeng-ui-test/tingfeng-ui/style.css'
// import TingfengUI from '../tingfeng-ui' // 本地组件测试
// import '../tingfeng-ui/index.css' // 本地组件测试

import { IonicVue } from '@ionic/vue';
import '@ionic/vue/css/ionic.bundle.css';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
addIcons(allIcons);

const app = createApp(App)
app.use(TingfengUI)
app.use(IonicVue)
app.mount('#app')
