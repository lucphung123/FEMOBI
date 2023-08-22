import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWind, presetWebFonts, transformerDirectives, transformerVariantGroup } from "unocss"

export default defineConfig({
  theme: {
    colors: {
      primaryColor: "#1E40AF",
      color_1: "#23D780",
      color_2: "#37A8FF",
      color_4: "#004390",
      color_5: "#f1b821",
      color_6: "#1d1d1b",
      color_7: "#999999",
      color_8: "#333333",
      color_9: "#666666",
    },
  },
  presets: [presetUno(), presetAttributify(), presetWind(), presetIcons(), presetTypography()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
