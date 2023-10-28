import DefaultTheme from "vitepress/theme"
import './style/custom.less'
import { Theme } from "vitepress"
import demo from 'vitepress-demoblock/demo.vue'

import { IonicVue } from '@ionic/vue';
// import '@ionic/vue/css/ionic.bundle.css';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
addIcons(allIcons);

export default {
    ...DefaultTheme,
    async enhanceApp({ app }) {
        app.component('demo', demo)
        app.use(IonicVue)
    }

} satisfies Theme