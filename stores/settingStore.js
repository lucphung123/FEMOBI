import { defineStore } from "pinia"
export const useSettingStore = defineStore("setting", {
  state: () => ({
    collections: [],
    menu: [],
    slide_show: [],
    category: [],
    provinces: [],
    breadcrumb: [],
    teachers: [],
    affiliate: "",
    why_choice: [],
    seo_data: {},
  }),
  actions: {
    setAffiliate(value) {
      this.affiliate = value
    },
    setCollections(value) {
      let temp = (value || []).sort(function (a, b) {
        return a.order - b.order
      })
      this.collections = temp
    },
    setMenu(value) {
      this.menu = value
    },
    setSlideShow(value) {
      this.slide_show = value
    },
    setCategory(value) {
      this.category = value
    },
    setProvinces(value) {
      this.provinces = value
    },
    setBreadcrumb(value) {
      this.breadcrumb = value
    },
    setTeacher(value) {
      let temp = (value || []).sort(function (a, b) {
        return a.order - b.order
      })
      this.teachers = temp
    },
    setWhyChoice(value) {
      let temp = (value || []).sort(function (a, b) {
        return a.order - b.order
      })
      this.why_choice = temp
    },
    setSeoData(value) {
      this.seo_data = value
    },
  },
  getters: {},
})
