// vite.config.ts
import { defineConfig } from "file:///F:/%E6%B5%8B%E8%AF%95%E4%B8%80%E4%B8%8B/test-npm/tingfeng/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/%E6%B5%8B%E8%AF%95%E4%B8%80%E4%B8%8B/test-npm/tingfeng/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import dts from "file:///F:/%E6%B5%8B%E8%AF%95%E4%B8%80%E4%B8%8B/test-npm/tingfeng/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "F:\\\u6D4B\u8BD5\u4E00\u4E0B\\test-npm\\tingfeng";
var vite_config_default = defineConfig({
  plugins: [vue(), dts(
    {
      // outDir: ["./tingfeng-ui/es/src", "./tingfeng-ui/lib/src"],
      // tsconfigPath: "./tsconfig.json",
    }
  )],
  css: {
    // 配置less
    preprocessorOptions: {
      less: {
        additionalData: `@import "${path.resolve(__vite_injected_original_dirname, "packages/global.less")}";`
      }
    }
  },
  build: {
    cssCodeSplit: true,
    //将css文件单独打包
    outDir: "tingfeng-ui",
    //输出文件名称
    lib: {
      entry: "./packages/index.ts",
      //指定组件编译入口文件
      name: "ting-feng-ui",
      //指定组件库的名称
      fileName: "index"
    },
    //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      input: [path.resolve(__vite_injected_original_dirname, "packages/index.ts")],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue"
        }
      }
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
    terserOptions: {
      // 在打包代码时移除 console、debugger 和 注释
      compress: {
        drop_console: true,
        // 生产环境时移除console
        drop_debugger: true
      },
      format: {
        comments: false
        // 删除注释comments
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxcdTZENEJcdThCRDVcdTRFMDBcdTRFMEJcXFxcdGVzdC1ucG1cXFxcdGluZ2ZlbmdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFx1NkQ0Qlx1OEJENVx1NEUwMFx1NEUwQlxcXFx0ZXN0LW5wbVxcXFx0aW5nZmVuZ1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovJUU2JUI1JThCJUU4JUFGJTk1JUU0JUI4JTgwJUU0JUI4JThCL3Rlc3QtbnBtL3RpbmdmZW5nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpLCBkdHMoe1xuICAgIC8vIG91dERpcjogW1wiLi90aW5nZmVuZy11aS9lcy9zcmNcIiwgXCIuL3RpbmdmZW5nLXVpL2xpYi9zcmNcIl0sXG4gICAgLy8gdHNjb25maWdQYXRoOiBcIi4vdHNjb25maWcuanNvblwiLFxuICB9XG4gICldLFxuICBjc3M6IHtcbiAgICAvLyBcdTkxNERcdTdGNkVsZXNzXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgbGVzczoge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCIke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwicGFja2FnZXMvZ2xvYmFsLmxlc3NcIil9XCI7YFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSwgLy9cdTVDMDZjc3NcdTY1ODdcdTRFRjZcdTUzNTVcdTcyRUNcdTYyNTNcdTUzMDVcbiAgICBvdXREaXI6IFwidGluZ2ZlbmctdWlcIiwgLy9cdThGOTNcdTUxRkFcdTY1ODdcdTRFRjZcdTU0MERcdTc5RjBcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBcIi4vcGFja2FnZXMvaW5kZXgudHNcIiwgLy9cdTYzMDdcdTVCOUFcdTdFQzRcdTRFRjZcdTdGMTZcdThCRDFcdTUxNjVcdTUzRTNcdTY1ODdcdTRFRjZcbiAgICAgIG5hbWU6IFwidGluZy1mZW5nLXVpXCIsIC8vXHU2MzA3XHU1QjlBXHU3RUM0XHU0RUY2XHU1RTkzXHU3Njg0XHU1NDBEXHU3OUYwXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxuICAgIH0sIC8vXHU1RTkzXHU3RjE2XHU4QkQxXHU2QTIxXHU1RjBGXHU5MTREXHU3RjZFXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gXHU3ODZFXHU0RkREXHU1OTE2XHU5MEU4XHU1MzE2XHU1OTA0XHU3NDA2XHU5MEEzXHU0RTlCXHU0RjYwXHU0RTBEXHU2MEYzXHU2MjUzXHU1MzA1XHU4RkRCXHU1RTkzXHU3Njg0XHU0RjlEXHU4RDU2XG4gICAgICBleHRlcm5hbDogW1widnVlXCJdLFxuICAgICAgaW5wdXQ6IFtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInBhY2thZ2VzL2luZGV4LnRzXCIpXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBcdTU3MjggVU1EIFx1Njc4NFx1NUVGQVx1NkEyMVx1NUYwRlx1NEUwQlx1NEUzQVx1OEZEOVx1NEU5Qlx1NTkxNlx1OTBFOFx1NTMxNlx1NzY4NFx1NEY5RFx1OEQ1Nlx1NjNEMFx1NEY5Qlx1NEUwMFx1NEUyQVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlxuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiBcIlZ1ZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIC8vIFtcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgLy8gXHU1NzI4IFVNRCBcdTY3ODRcdTVFRkFcdTZBMjFcdTVGMEZcdTRFMEJcdTRFM0FcdThGRDlcdTRFOUJcdTU5MTZcdTkwRThcdTUzMTZcdTc2ODRcdTRGOURcdThENTZcdTYzRDBcdTRGOUJcdTRFMDBcdTRFMkFcdTUxNjhcdTVDNDBcdTUzRDhcdTkxQ0ZcbiAgICAgIC8vICAgZ2xvYmFsczoge1xuICAgICAgLy8gICAgIHZ1ZTogXCJWdWVcIixcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIC8vXHU2MjUzXHU1MzA1XHU2ODNDXHU1RjBGXG4gICAgICAvLyAgIGZvcm1hdDogXCJlc1wiLFxuICAgICAgLy8gICAvL1x1NjI1M1x1NTMwNVx1NTQwRVx1NjU4N1x1NEVGNlx1NTQwRFxuICAgICAgLy8gICBlbnRyeUZpbGVOYW1lczogXCJbbmFtZV0ubWpzXCIsXG4gICAgICAvLyAgIC8vXHU4QkE5XHU2MjUzXHU1MzA1XHU3NkVFXHU1RjU1XHU1NDhDXHU2MjExXHU0RUVDXHU3NkVFXHU1RjU1XHU1QkY5XHU1RTk0XG4gICAgICAvLyAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgIC8vICAgZXhwb3J0czogXCJuYW1lZFwiLFxuICAgICAgLy8gICAvL1x1OTE0RFx1N0Y2RVx1NjI1M1x1NTMwNVx1NjgzOVx1NzZFRVx1NUY1NVxuICAgICAgLy8gICBkaXI6IFwiLi90aW5nZmVuZy11aS9lc1wiLFxuXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAvL1x1NjI1M1x1NTMwNVx1NjgzQ1x1NUYwRlxuICAgICAgLy8gICBmb3JtYXQ6IFwiY2pzXCIsXG4gICAgICAvLyAgIC8vXHU2MjUzXHU1MzA1XHU1NDBFXHU2NTg3XHU0RUY2XHU1NDBEXG4gICAgICAvLyAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5qc1wiLFxuICAgICAgLy8gICAvL1x1OEJBOVx1NjI1M1x1NTMwNVx1NzZFRVx1NUY1NVx1NTQ4Q1x1NjIxMVx1NEVFQ1x1NzZFRVx1NUY1NVx1NUJGOVx1NUU5NFxuICAgICAgLy8gICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAvLyAgIGV4cG9ydHM6IFwibmFtZWRcIixcbiAgICAgIC8vICAgLy9cdTkxNERcdTdGNkVcdTYyNTNcdTUzMDVcdTY4MzlcdTc2RUVcdTVGNTVcbiAgICAgIC8vICAgZGlyOiBcIi4vdGluZ2ZlbmctdWkvbGliXCIsXG4gICAgICAvLyB9LFxuICAgICAgLy8gXVxuICAgIH0sXG4gICAgdGVyc2VyT3B0aW9uczogeyAvLyBcdTU3MjhcdTYyNTNcdTUzMDVcdTRFRTNcdTc4MDFcdTY1RjZcdTc5RkJcdTk2NjQgY29uc29sZVx1MzAwMWRlYnVnZ2VyIFx1NTQ4QyBcdTZDRThcdTkxQ0FcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSwgLy8gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU2NUY2XHU3OUZCXHU5NjY0Y29uc29sZVxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlXG4gICAgICB9LFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIGNvbW1lbnRzOiBmYWxzZSAvLyBcdTUyMjBcdTk2NjRcdTZDRThcdTkxQ0Fjb21tZW50c1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFTLFNBQVMsb0JBQW9CO0FBQ2xVLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLEdBQUc7QUFBQSxJQUFJO0FBQUE7QUFBQTtBQUFBLElBR3JCO0FBQUEsRUFDQSxDQUFDO0FBQUEsRUFDRCxLQUFLO0FBQUE7QUFBQSxJQUVILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQixZQUFZLEtBQUssUUFBUSxrQ0FBVyxzQkFBc0IsQ0FBQztBQUFBLE1BQzdFO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGNBQWM7QUFBQTtBQUFBLElBQ2QsUUFBUTtBQUFBO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUE7QUFBQSxNQUNQLE1BQU07QUFBQTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQTtBQUFBLElBQ0EsZUFBZTtBQUFBO0FBQUEsTUFFYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLE9BQU8sQ0FBQyxLQUFLLFFBQVEsa0NBQVcsbUJBQW1CLENBQUM7QUFBQSxNQUNwRCxRQUFRO0FBQUE7QUFBQSxRQUVOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZ0NGO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLGNBQWM7QUFBQTtBQUFBLFFBQ2QsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixVQUFVO0FBQUE7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
