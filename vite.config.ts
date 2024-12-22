import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import UnoCSS from 'unocss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),UnoCSS({
      configFile: '../uno.config.ts',
    })
  ],
  resolve:{
    alias:{
      '@':path.resolve('./src')
    }
  }
})
