
import Tbutton from './packages/button/src/index.vue'

// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Tbutton: typeof Tbutton
  }
}

export {}
