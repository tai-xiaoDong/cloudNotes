import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import svgLoader from 'vite-svg-loader';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      configFile: './unocss.config.ts',
    }),
    svgLoader(),
  ],
  resolve:{
    alias:{
      "@": resolve(__dirname, "./src"),
    }
  }
})
