import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/luc/mobi/mobiedu-next-fe/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}