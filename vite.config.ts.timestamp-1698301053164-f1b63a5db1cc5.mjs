// vite.config.ts
import { defineConfig } from "file:///F:/%E6%B5%8B%E8%AF%95%E4%B8%80%E4%B8%8B/test-npm/tingfeng/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/%E6%B5%8B%E8%AF%95%E4%B8%80%E4%B8%8B/test-npm/tingfeng/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///F:/%E6%B5%8B%E8%AF%95%E4%B8%80%E4%B8%8B/test-npm/tingfeng/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [vue(), dts()],
  build: {
    outDir: "tingfeng-ui-test",
    //输出文件名称
    lib: {
      entry: "./packages/index.ts",
      //指定组件编译入口文件
      name: "ting-feng-ui",
      //指定组件库的名称
      fileName: "ting-feng-ui"
    },
    //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue"
        }
      }
    }
    // rollup打包配置
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxcdTZENEJcdThCRDVcdTRFMDBcdTRFMEJcXFxcdGVzdC1ucG1cXFxcdGluZ2ZlbmdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFx1NkQ0Qlx1OEJENVx1NEUwMFx1NEUwQlxcXFx0ZXN0LW5wbVxcXFx0aW5nZmVuZ1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovJUU2JUI1JThCJUU4JUFGJTk1JUU0JUI4JTgwJUU0JUI4JThCL3Rlc3QtbnBtL3RpbmdmZW5nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpLCBkdHMoKV0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBcInRpbmdmZW5nLXVpLXRlc3RcIiwgLy9cdThGOTNcdTUxRkFcdTY1ODdcdTRFRjZcdTU0MERcdTc5RjBcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBcIi4vcGFja2FnZXMvaW5kZXgudHNcIiwgLy9cdTYzMDdcdTVCOUFcdTdFQzRcdTRFRjZcdTdGMTZcdThCRDFcdTUxNjVcdTUzRTNcdTY1ODdcdTRFRjZcbiAgICAgIG5hbWU6IFwidGluZy1mZW5nLXVpXCIsIC8vXHU2MzA3XHU1QjlBXHU3RUM0XHU0RUY2XHU1RTkzXHU3Njg0XHU1NDBEXHU3OUYwXG4gICAgICBmaWxlTmFtZTogXCJ0aW5nLWZlbmctdWlcIixcbiAgICB9LCAvL1x1NUU5M1x1N0YxNlx1OEJEMVx1NkEyMVx1NUYwRlx1OTE0RFx1N0Y2RVxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIFx1Nzg2RVx1NEZERFx1NTkxNlx1OTBFOFx1NTMxNlx1NTkwNFx1NzQwNlx1OTBBM1x1NEU5Qlx1NEY2MFx1NEUwRFx1NjBGM1x1NjI1M1x1NTMwNVx1OEZEQlx1NUU5M1x1NzY4NFx1NEY5RFx1OEQ1NlxuICAgICAgZXh0ZXJuYWw6IFtcInZ1ZVwiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBcdTU3MjggVU1EIFx1Njc4NFx1NUVGQVx1NkEyMVx1NUYwRlx1NEUwQlx1NEUzQVx1OEZEOVx1NEU5Qlx1NTkxNlx1OTBFOFx1NTMxNlx1NzY4NFx1NEY5RFx1OEQ1Nlx1NjNEMFx1NEY5Qlx1NEUwMFx1NEUyQVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlxuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiBcIlZ1ZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LCAvLyByb2xsdXBcdTYyNTNcdTUzMDVcdTkxNERcdTdGNkVcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFTLFNBQVMsb0JBQW9CO0FBQ2xVLE9BQU8sU0FBUztBQUVoQixPQUFPLFNBQVM7QUFHaEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFBQSxFQUN0QixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQTtBQUFBLE1BQ1AsTUFBTTtBQUFBO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBO0FBQUEsUUFFTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
