import { defineStore } from "pinia"
export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
  }),
  actions: {
    setUser(value) {
      this.user = value
    },
    logout() {
      this.user = {}
    },
  },
  getters: {},
  persist: true,
})
