import { defineStore } from "pinia"
export const useUserLoading = defineStore("loading", {
  state: () => ({
    show: false,
  }),
  actions: {
    setData(value) {
      this.show = value
    },
  },
  getters: {},
})
