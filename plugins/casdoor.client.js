import Casdoor from "casdoor-vue-sdk"
export default defineNuxtPlugin(nuxtApp => {
  const config = {
    serverUrl: "https://sso.codeinet.com",
    clientId: "599ac1aaf88d969e9ed7",
    organizationName: "mobiedu_id",
    appName: "moocs",
    redirectPath: "/callback",
  }
  nuxtApp.vueApp.use(Casdoor, config)
  // nuxtApp.provide('Casdoor', nuxtApp.vueApp.use(Casdoor,config))
})
