import { defineStore } from "pinia"
export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
    token: "",
    notificationToken: "",
  }),
  actions: {
    setUser(value) {
      // if (process.client) {
      //   localStorage.setItem("user", JSON.stringify(value));
      // }
      this.user = value
    },
    setToken(value) {
      // if (process.client) {
      //   localStorage.setItem("token", JSON.stringify(value));
      // }
      this.token = value
    },
    setNotificationToken(value) {
      // if (process.client) {
      //   localStorage.setItem("notificationToken", JSON.stringify(value));
      // }
      this.notificationToken = value
    },
    async logout() {
      // if (process.client) {
      //   localStorage.setItem("user", JSON.stringify({}));
      //   localStorage.setItem("token", JSON.stringify(""));
      //   localStorage.setItem("notificationToken", JSON.stringify(""));
      // }
      const access_token = useCookie("AccessToken")
      const notification_token = useCookie("NotificationToken")
      access_token.value = ""
      notification_token.value = ""
      this.notificationToken = ""
      this.token = ""
      this.user = {}
      await navigateTo("/")
    },
  },
  getters: {},
})
