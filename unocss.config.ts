import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import { presetTheme } from 'unocss-preset-theme'
const themes = {
  dark: {
    colors: {
      primary: '#60a5fa',
      secondary: '#9ca3af',
      background: '#1e1e1e',
      surface: '#2d2d2d',
      border: '#3c3c3c',
      text: {
        primary: '#ffffff',
        secondary: '#cccccc'
      }
    }
  },
  light: {
    colors: {
      primary: '#3b82f6',
      secondary: '#6b7280',
      background: '#ffffff',
      surface: '#f3f4f6',
      border: '#e5e7eb',
      text: {
        primary: '#111827',
        secondary: '#4b5563'
      }
    }
  }
}
export default defineConfig({
  shortcuts: [
    ['icon-common', 'h-4 w-4'],
  ],
  theme: {
    colors: {
      primary: '#60a5fa',
      secondary: '#9ca3af',
      background: '#1e1e1e',
      surface: '#2d2d2d',
      border: '#3c3c3c',
      text: {
        primary: '#ffffff',
        secondary: '#cccccc'
      }
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    }),
    presetTheme({
      theme: themes
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})