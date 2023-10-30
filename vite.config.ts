import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
    {
      // 解决vite中使用ionicons的警告的问题
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['ion-icon'].includes(tag),
        }
      }
    }
  ),
  dts({
    outDir: ["./tingfeng-ui/lib/src"],
  }),
  ],
  css: {
    // 配置less
    preprocessorOptions: {
      less: {
        additionalData: `@import "${path.resolve(__dirname, "packages/global.less")}";`
      },
    },
  },
  build: {
    minify: 'terser', // 压缩代码
    chunkSizeWarningLimit: 1000, // 超过1000kb的文件将会被提示
    cssCodeSplit: true, //将css文件单独打包
    outDir: "tingfeng-ui", //输出文件名称
    commonjsOptions: {
      exclude: ['./public/**'],
    },
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
        entryFileNames: "src/[name].js",
        assetFileNames: '[ext]/[name].[ext]',
        // 拆分js到模块文件夹
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
          const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
          // return `js/${fileName}/[name].js`;
          return `src/${fileName}/[name].js`;
        },
        inlineDynamicImports: false,
        manualChunks: {
          vicons: ['@vicons/fluent'],
        },
        // 将构建好的文件输出到这里
        dir: path.resolve(__dirname, "tingfeng-ui/lib"),
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
