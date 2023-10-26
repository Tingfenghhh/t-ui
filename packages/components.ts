import Tbutton from "./button/src/index.vue"

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Tbutton: typeof Tbutton
  }
}