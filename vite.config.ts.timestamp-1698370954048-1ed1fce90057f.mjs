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
        math: "always",
        javascriptEnabled: true,
        additionalData: '@import "./packages/global.less";'
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxcdTZENEJcdThCRDVcdTRFMDBcdTRFMEJcXFxcdGVzdC1ucG1cXFxcdGluZ2ZlbmdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFx1NkQ0Qlx1OEJENVx1NEUwMFx1NEUwQlxcXFx0ZXN0LW5wbVxcXFx0aW5nZmVuZ1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovJUU2JUI1JThCJUU4JUFGJTk1JUU0JUI4JTgwJUU0JUI4JThCL3Rlc3QtbnBtL3RpbmdmZW5nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpLCBkdHMoe1xuICAgIC8vIG91dERpcjogW1wiLi90aW5nZmVuZy11aS9lcy9zcmNcIiwgXCIuL3RpbmdmZW5nLXVpL2xpYi9zcmNcIl0sXG4gICAgLy8gdHNjb25maWdQYXRoOiBcIi4vdHNjb25maWcuanNvblwiLFxuICB9XG4gICldLFxuICBjc3M6e1xuICAgIC8vIFx1OTE0RFx1N0Y2RWxlc3NcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBsZXNzOiB7XG4gICAgICAgIG1hdGg6IFwiYWx3YXlzXCIsXG4gICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICBhZGRpdGlvbmFsRGF0YTonQGltcG9ydCBcIi4vcGFja2FnZXMvZ2xvYmFsLmxlc3NcIjsnXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLCAvL1x1NUMwNmNzc1x1NjU4N1x1NEVGNlx1NTM1NVx1NzJFQ1x1NjI1M1x1NTMwNVxuICAgIG91dERpcjogXCJ0aW5nZmVuZy11aVwiLCAvL1x1OEY5M1x1NTFGQVx1NjU4N1x1NEVGNlx1NTQwRFx1NzlGMFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IFwiLi9wYWNrYWdlcy9pbmRleC50c1wiLCAvL1x1NjMwN1x1NUI5QVx1N0VDNFx1NEVGNlx1N0YxNlx1OEJEMVx1NTE2NVx1NTNFM1x1NjU4N1x1NEVGNlxuICAgICAgbmFtZTogXCJ0aW5nLWZlbmctdWlcIiwgLy9cdTYzMDdcdTVCOUFcdTdFQzRcdTRFRjZcdTVFOTNcdTc2ODRcdTU0MERcdTc5RjBcbiAgICAgIGZpbGVOYW1lOiBcImluZGV4XCIsXG4gICAgfSwgLy9cdTVFOTNcdTdGMTZcdThCRDFcdTZBMjFcdTVGMEZcdTkxNERcdTdGNkVcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBcdTc4NkVcdTRGRERcdTU5MTZcdTkwRThcdTUzMTZcdTU5MDRcdTc0MDZcdTkwQTNcdTRFOUJcdTRGNjBcdTRFMERcdTYwRjNcdTYyNTNcdTUzMDVcdThGREJcdTVFOTNcdTc2ODRcdTRGOURcdThENTZcbiAgICAgIGV4dGVybmFsOiBbXCJ2dWVcIl0sXG4gICAgICBpbnB1dDogW3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwicGFja2FnZXMvaW5kZXgudHNcIildLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIFx1NTcyOCBVTUQgXHU2Nzg0XHU1RUZBXHU2QTIxXHU1RjBGXHU0RTBCXHU0RTNBXHU4RkQ5XHU0RTlCXHU1OTE2XHU5MEU4XHU1MzE2XHU3Njg0XHU0RjlEXHU4RDU2XHU2M0QwXHU0RjlCXHU0RTAwXHU0RTJBXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6IFwiVnVlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgLy8gW1xuICAgICAgLy8ge1xuICAgICAgLy8gICAvLyBcdTU3MjggVU1EIFx1Njc4NFx1NUVGQVx1NkEyMVx1NUYwRlx1NEUwQlx1NEUzQVx1OEZEOVx1NEU5Qlx1NTkxNlx1OTBFOFx1NTMxNlx1NzY4NFx1NEY5RFx1OEQ1Nlx1NjNEMFx1NEY5Qlx1NEUwMFx1NEUyQVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlxuICAgICAgLy8gICBnbG9iYWxzOiB7XG4gICAgICAvLyAgICAgdnVlOiBcIlZ1ZVwiLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgLy9cdTYyNTNcdTUzMDVcdTY4M0NcdTVGMEZcbiAgICAgIC8vICAgZm9ybWF0OiBcImVzXCIsXG4gICAgICAvLyAgIC8vXHU2MjUzXHU1MzA1XHU1NDBFXHU2NTg3XHU0RUY2XHU1NDBEXG4gICAgICAvLyAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5tanNcIixcbiAgICAgIC8vICAgLy9cdThCQTlcdTYyNTNcdTUzMDVcdTc2RUVcdTVGNTVcdTU0OENcdTYyMTFcdTRFRUNcdTc2RUVcdTVGNTVcdTVCRjlcdTVFOTRcbiAgICAgIC8vICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgLy8gICBleHBvcnRzOiBcIm5hbWVkXCIsXG4gICAgICAvLyAgIC8vXHU5MTREXHU3RjZFXHU2MjUzXHU1MzA1XHU2ODM5XHU3NkVFXHU1RjU1XG4gICAgICAvLyAgIGRpcjogXCIuL3RpbmdmZW5nLXVpL2VzXCIsXG5cbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIC8vXHU2MjUzXHU1MzA1XHU2ODNDXHU1RjBGXG4gICAgICAvLyAgIGZvcm1hdDogXCJjanNcIixcbiAgICAgIC8vICAgLy9cdTYyNTNcdTUzMDVcdTU0MEVcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgIC8vICAgZW50cnlGaWxlTmFtZXM6IFwiW25hbWVdLmpzXCIsXG4gICAgICAvLyAgIC8vXHU4QkE5XHU2MjUzXHU1MzA1XHU3NkVFXHU1RjU1XHU1NDhDXHU2MjExXHU0RUVDXHU3NkVFXHU1RjU1XHU1QkY5XHU1RTk0XG4gICAgICAvLyAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgIC8vICAgZXhwb3J0czogXCJuYW1lZFwiLFxuICAgICAgLy8gICAvL1x1OTE0RFx1N0Y2RVx1NjI1M1x1NTMwNVx1NjgzOVx1NzZFRVx1NUY1NVxuICAgICAgLy8gICBkaXI6IFwiLi90aW5nZmVuZy11aS9saWJcIixcbiAgICAgIC8vIH0sXG4gICAgICAvLyBdXG4gICAgfSxcbiAgICB0ZXJzZXJPcHRpb25zOiB7IC8vIFx1NTcyOFx1NjI1M1x1NTMwNVx1NEVFM1x1NzgwMVx1NjVGNlx1NzlGQlx1OTY2NCBjb25zb2xlXHUzMDAxZGVidWdnZXIgXHU1NDhDIFx1NkNFOFx1OTFDQVxuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLCAvLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTY1RjZcdTc5RkJcdTk2NjRjb25zb2xlXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWVcbiAgICAgIH0sXG4gICAgICBmb3JtYXQ6IHtcbiAgICAgICAgY29tbWVudHM6IGZhbHNlIC8vIFx1NTIyMFx1OTY2NFx1NkNFOFx1OTFDQWNvbW1lbnRzXG4gICAgICB9XG4gICAgfVxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVMsU0FBUyxvQkFBb0I7QUFDbFUsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFIaEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRztBQUFBLElBQUk7QUFBQTtBQUFBO0FBQUEsSUFHckI7QUFBQSxFQUNBLENBQUM7QUFBQSxFQUNELEtBQUk7QUFBQTtBQUFBLElBRUYscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sbUJBQW1CO0FBQUEsUUFDbkIsZ0JBQWU7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxjQUFjO0FBQUE7QUFBQSxJQUNkLFFBQVE7QUFBQTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBO0FBQUEsTUFDUCxNQUFNO0FBQUE7QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUE7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBLE1BRWIsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixPQUFPLENBQUMsS0FBSyxRQUFRLGtDQUFXLG1CQUFtQixDQUFDO0FBQUEsTUFDcEQsUUFBUTtBQUFBO0FBQUEsUUFFTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWdDRjtBQUFBLElBQ0EsZUFBZTtBQUFBO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUE7QUFBQSxRQUNkLGVBQWU7QUFBQSxNQUNqQjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
