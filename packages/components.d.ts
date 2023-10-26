import Tbutton from "./button/src/index.vue"

declare module 'vue' {
  export interface GlobalComponents {
    Tbutton: typeof Tbutton
  }
}