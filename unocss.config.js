import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWind, presetWebFonts, transformerDirectives, transformerVariantGroup } from "unocss"

export default defineConfig({
  theme: {
    colors: {
      primaryColor: "#1E40AF",
      color_1: "#D2001A",
      color_2: "#37A8FF",
      color_4: "#004390",
      color_5: "#f1b821",
      color_6: "#1d1d1b",
      color_7: "#999999",
      color_8: "#333333",
      color_9: "#666666",
      color_10: "#E5E5E5",
      color_11: "#EFEFEF",
      color_12: "#F5F8FA",
      color_13: "#ba0017",
      color_14: "#21A6F1",
      color_15: "#F1F7FC",
      color_16: "#1877F2",
      color_16: "#EBEEF2",
    },
  },
  presets: [presetUno(), presetAttributify(), presetWind(), presetIcons(), presetTypography()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
