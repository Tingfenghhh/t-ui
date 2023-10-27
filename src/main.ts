import { createApp } from 'vue'
import App from './App.vue'
import TingfengUI from '../packages'
import  "../packages/global.less"; // 全局样式
// import  "../packages/custom.css"; // 自定义覆盖
// import 'tingfeng-ui-test/tingfeng-ui/style.css'
// import TingfengUI from '../tingfeng-ui'
// import '../tingfeng-ui/index.css'

import { IonicVue } from '@ionic/vue';
import '@ionic/vue/css/ionic.bundle.css';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
addIcons(allIcons);

const app = createApp(App)
app.use(TingfengUI)
app.use(IonicVue)
app.mount('#app')
