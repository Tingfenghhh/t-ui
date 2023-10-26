import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(
  )],
  build: {
    outDir: "tingfeng-ui", //输出文件名称
    lib: {
      entry: "./packages/index.ts", //指定组件编译入口文件
      name: "ting-feng-ui", //指定组件库的名称
      fileName: "tf-ui",
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    terserOptions: { // 在打包代码时移除 console、debugger 和 注释
      compress: {
        drop_console: true, // 生产环境时移除console
        drop_debugger: true
      },
      format: {
        comments: false // 删除注释comments
      }
    }
  },
})
