import { createApp } from 'vue'
import App from './App.vue'
import TingfengUI from './components/tingfeng-UI'

const app = createApp(App)
app.use(TingfengUI)
app.mount('#app')
