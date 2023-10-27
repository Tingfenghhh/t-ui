import DefaultTheme from "vitepress/theme"
import './style/custom.less'
import { Theme } from "vitepress"
import demo from 'vitepress-demoblock/demo.vue'


export default {
    ...DefaultTheme,
    async enhanceApp({ app }) {
        app.component('demo', demo)
    }

} satisfies Theme