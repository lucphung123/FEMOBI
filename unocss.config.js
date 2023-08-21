import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWind, presetWebFonts, transformerDirectives, transformerVariantGroup } from "unocss"

export default defineConfig({
  theme: {
    colors: {
      primaryColor: "#1E40AF",
      color_1: "#23D780",
      color_2: "#588FCE",
      color_4: "#004390",
    },
  },
  presets: [presetUno(), presetAttributify(), presetWind(), presetIcons(), presetTypography()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
