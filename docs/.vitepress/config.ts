import { defineConfig } from "vitepress"
import demoblock from 'vitepress-demoblock';


export default defineConfig({
    lang: 'zh-CN',
    title: 'Tingfeng', //站点标题
    description: '一个vue3组件库',//mate标签description，多用于搜索引擎抓取摘要
    titleTemplate: '一个vue3组件库', //标题模板， %s 会自动替换为当前页面的标题
    lastUpdated: true, //最后更新时间
    head: [['link', { rel: 'icon"', href: 'logo.ico' }]],
    themeConfig: {
        siteTitle: "简单实用的UI组件库",
        logo: "logo.png",
        nav: [
            { text: "文档", link: "/guide/start" },
            { text: "gitee", link: "https://gitee.com/shisanlailin" },
            {
                text: "下拉菜单",
                items: [
                    {
                        items: [
                            { text: "Item A1", link: "/item-A1" },
                            { text: "Item A2", link: "/item-A2" },
                        ],
                    },
                    {
                        items: [
                            { text: "Item B1", link: "/item-B1" },
                            { text: "Item B2", link: "/item-B2" },
                        ],
                    },

                ]
            }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/Tingfenghhh" },
        ],

        sidebar: [
            {
                text: "快速开始",
                items: [
                    {
                        text: "开始",
                        link: "/guide/start",
                    },
                    {
                        text: "Button组件",
                        link: "/guide/Button",
                    },
                    {
                        text: "Echarts组件",
                        link: "/guide/Echarts"
                    },
                    // {
                    //     text: "other组件",
                    //     link: "...",
                    // },
                ],
            },
            {
                text: "其他依赖",
                items: [
                    {
                        text: "@ionic/vue",
                        link: "/guide/iconsMd/icon",
                    },
                ],
            },
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present TingFeng'
        },
        search: {
            provider: 'local'
        },


    },
    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark'
        },
        lineNumbers: true,
        config: (md) => {
            md.use(demoblock)
        }
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => ['ion-icon'].includes(tag),
            }
        }
    }
})