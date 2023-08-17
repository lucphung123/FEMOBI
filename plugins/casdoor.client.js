import Casdoor from "casdoor-vue-sdk";
export default defineNuxtPlugin((nuxtApp) => {
  const config = {
    serverUrl: "https://sso.codeinet.com",
    clientId: "60e8e794e26b484ac3ea",
    organizationName: "mobiedu_id",
    appName: "cambridge",
    redirectPath: "/callback",
  };
  nuxtApp.vueApp.use(Casdoor, config);
  // nuxtApp.provide('Casdoor', nuxtApp.vueApp.use(Casdoor,config))
});
