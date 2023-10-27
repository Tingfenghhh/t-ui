import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({
    // outDir: ["./tingfeng-ui/es/src", "./tingfeng-ui/lib/src"],
    // tsconfigPath: "./tsconfig.json",
  }
  )],
  css: {
    // 配置less
    preprocessorOptions: {
      less: {
        additionalData: `@import "${path.resolve(__dirname, "packages/global.less")}";`
      },
    },
  },
  build: {
    cssCodeSplit: true, //将css文件单独打包
    outDir: "tingfeng-ui", //输出文件名称
    lib: {
      entry: "./packages/index.ts", //指定组件编译入口文件
      name: "ting-feng-ui", //指定组件库的名称
      fileName: "index",
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      input: [path.resolve(__dirname, "packages/index.ts")],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
      // [
      // {
      //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //   globals: {
      //     vue: "Vue",
      //   },
      // },
      // {
      //   //打包格式
      //   format: "es",
      //   //打包后文件名
      //   entryFileNames: "[name].mjs",
      //   //让打包目录和我们目录对应
      //   preserveModules: true,
      //   exports: "named",
      //   //配置打包根目录
      //   dir: "./tingfeng-ui/es",

      // },
      // {
      //   //打包格式
      //   format: "cjs",
      //   //打包后文件名
      //   entryFileNames: "[name].js",
      //   //让打包目录和我们目录对应
      //   preserveModules: true,
      //   exports: "named",
      //   //配置打包根目录
      //   dir: "./tingfeng-ui/lib",
      // },
      // ]
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
