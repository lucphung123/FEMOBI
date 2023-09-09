import { defineStore } from "pinia"
export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    setCart(value) {
      this.cart = value
    },
    addItemCart(value) {
      this.cart = this.cart.concat([value])
    },
    removeItemCart(value) {
      let index = this.cart.findIndex(item_cart => item_cart.id === value.id)
      if (index > -1) {
        this.cart.splice(index, 1)
      }
    },
    removeAllItems() {
      this.cart = []
    },
    changeActive(value) {
      let item = this.cart.find(item_cart => item_cart.id === value.id)
      if (item !== undefined) {
        item.active = !item.active
      }
      console.log("change active")
    },
    // saveCart() {
    //   localStorage.setItem("cart", JSON.stringify(this.cart))
    // },
    removeActive() {
      let filteredArray = this.cart.filter(function (element) {
        return element.active !== true
      })
      this.cart = filteredArray
    },
    registerNow(value) {
      let index = this.cart.findIndex(item_cart => item_cart.id === value.id)
      if (index > -1) {
        this.cart.splice(index, 1)
      }
      this.cart = this.cart.map(item => {
        item.active = false
        return item
      })
      this.cart.push(value)
    },
  },
  getters: {
    totalItems() {
      return this.cart.length
    },
    totalPrice() {
      let new_cart = this.cart.filter(item_cart => item_cart.active == true)
      let price = new_cart.reduce((acc, item_cart) => acc + item_cart.price, 0)
      return price
    },
    totalSellingPrice() {
      let new_cart = this.cart.filter(item_cart => item_cart.active == true)
      let price = new_cart.reduce((acc, item_cart) => acc + item_cart.sale_price, 0)
      return price
    },
    idCourse() {
      let new_cart = this.cart.filter(item_cart => item_cart.active == true)
      return new_cart.map(item_cart => item_cart.id)
    },
    idCart() {
      return this.cart.map(item_cart => item_cart.id)
    },
    cartActive() {
      return this.cart.filter(item_cart => item_cart.active == true)
    },
  },
  persist: true,
})
