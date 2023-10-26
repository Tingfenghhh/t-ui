import { createApp } from 'vue'
import App from './App.vue'
// import TingfengUI from 'tingfeng-ui-test/tingfeng-ui/tf-ui'
// import 'tingfeng-ui-test/tingfeng-ui/style.css'
import TingfengUI from '../tingfeng-ui'
import '../tingfeng-ui/index.css'

const app = createApp(App)
app.use(TingfengUI)
app.mount('#app')
