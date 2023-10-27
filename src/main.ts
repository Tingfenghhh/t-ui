import { createApp } from 'vue'
import App from './App.vue'
import TingfengUI from '../packages'
import  "../packages/global.less"; // 全局样式
// import  "../packages/custom.css"; // 自定义覆盖
// import 'tingfeng-ui-test/tingfeng-ui/style.css'
// import TingfengUI from '../tingfeng-ui'
// import '../tingfeng-ui/index.css'

const app = createApp(App)
app.use(TingfengUI)
app.mount('#app')
