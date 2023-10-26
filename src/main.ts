import { createApp } from 'vue'
import App from './App.vue'
import TingfengUI from '../tingfeng-ui-test/ting-feng-ui.js'
import '../tingfeng-ui-test/style.css'

const app = createApp(App)
app.use(TingfengUI)
app.mount('#app')
