import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetTheme from "unocss-preset-theme";
import {theme} from "./src/theme";
import type { Theme } from "unocss/preset-uno";
export default defineConfig({
  presets: [
    presetAttributify({
      /* preset options */
    }),
    presetUno(),
    // ...custom presets
    presetIcons(),
    presetTypography(),
    presetTheme<Theme>({
      theme:theme
    })
  ],
});
