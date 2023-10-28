import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    port: 2222,
    open: true,
    https: false,
  },
})
