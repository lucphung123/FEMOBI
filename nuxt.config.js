export default defineNuxtConfig({
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    // layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "Mobiedu Next",
    },
  },

  modules: ["@pinia/nuxt", "@unocss/nuxt"],

  css: ["~/assets/tailwind.css", "~/assets/main.css"],

  server: {
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || 3000,
  },

  build: {
    transpile: process.env.NODE_ENV === "production" ? ["@css-render/vue3-ssr"] : [],
  },

  vite: {
    optimizeDeps: {
      include: process.env.NODE_ENV === "development" ? ["date-fns-tz/esm/formatInTimeZone"] : [],
    },
    plugins: [],
    ssr: {
      noExternal: ["moment", "@css-render/vue3-ssr"],
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL,
      socket_url: process.env.NUXT_PUBLIC_SOCKET_URL,
    },
  },
  sourcemap: {
    server: false,
    client: false,
  },
  routeRules: {},
  spaLoadingTemplate: false,
  devtools: {
    enabled: true,
  },
})
