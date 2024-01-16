<template>
  <div class="bg-color_11 w-full">
    <div v-if="cartStore.cart.length === 0" class="bg-color_11 mt-10">
      <div class="items-center justify-center flex">
        <img src="/img/cart/shopping-cart.svg" alt="" />
      </div>
      <div class="text-center">
        <p class="text-color_7 font-normal text-2xl leading-45px">Giỏ hàng (0 sản phẩm)</p>
      </div>
      <p class="text-color_8 font-normal text-xl leading-26px text-center">Hiện tại giỏ hàng của bạn chưa có sản phẩm nào.</p>
      <div class="items-center justify-center flex">
        <p class="text-color_8 font-normal text-xl leading-26px text-center">Vui lòng lựa chọn</p>
        <a href="" class="px-1 text-color_4 font-bold text-xl leading-26px"> Khóa học </a>
        <p class="text-color_8 font-normal text-xl leading-26px text-center">mà bạn muốn đăng kí!</p>
      </div>
    </div>
    <div v-else class="bg-color_11 pt-5 pb-15">
      <div class="flex gap-2 items-center">
        <p>Giỏ hàng:</p>
        <p class="font-bold">{{ selectedItems.length }}</p>
        <p>sản phẩm,</p>
        <p class="text-color_4 font-bold text-4">{{ formatCurrency(selectedTotalPrice) }}</p>
      </div>
      <div class="py-5 flex">
        <div class="w-full">
          <div class="bg-white flex rounded-lg p-5">
            <div class="flex items-center cursor-pointer text-16px text-color_6">
              <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
              <p class="ml-2 text-color_6 text-16px">Sản phẩm ({{ selectedItems.length }} sản phẩm)</p>
            </div>
            <p class="ml-56%">Giá</p>
            <div></div>
          </div>

          <div class="bg-white rounded-lg p-5 mt-5">
            <div v-for="course in cartStore.cart" :key="course.id" class="flex border-b pb-5 mt-5">
              <div class="gap-3 flex">
                <input type="checkbox" v-model="selectedItems" :value="course" />

                <img class="w-140 h-40 object-cover" preset="cover" :src="course.image_url !== '' ? course.image_url : '/img/empty.jpg'" placeholder="/img/empty.jpg" alt="image_course" />
              </div>
              <div class="flex ml-10 justify-center items-center w-full">
                <p class="text-color_8 text-4 font-bold leading-4.5 font-medium break-words w-120%">{{ course.title }}</p>
                <div class="flex ml-20 justify-between w-full">
                  <p class="text-color_4 font-bold text-4">{{ formatCurrency(course.sale_price) }}</p>
                  <div class="flex cursor-pointer" @click="deleteCourse(course.id)">
                    <div class="i-mdi-trash text-2xl"></div>
                    <p class="ml-2">Xóa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 flex gap-1 mt-5">
            <p class="text-black font-normal">Chọn thêm:</p>
            <a class="text-[#21A6F1] font-bold underline" href="">Sách</a>
          </div>
        </div>
        <div class="w-1/3 ml-10">
          <div class="flex sticky flex-col transition duration-[all] ease-[ease-in-out] w-full top-30">
            <div class="bg-white rounded-lg p-5">
              <p class="text-color_9 font-normal text-sm">Tổng giá trị đơn hàng</p>
              <p class="text-color_4 font-bold text-4 mt-3">{{ formatCurrency(selectedTotalPrice) }}</p>
            </div>
            <div class="mt-4 flex">
              <input type="text" placeholder="Mã giảm giá" class="h-10 border rounded-5 p-3 outline-none w-70%" />
              <button class="bg-color_4 text-white text-sm text-center h-10 rounded-5 ml-2 px-2 w-30%">ÁP DỤNG</button>
            </div>
            <nuxt-link to="/thanh-toan/thong-tin-thanh-toan">
              <button class="bg-color_1 text-white text-center font-bold leading-2.5 text-3.5 h-10 w-full mt-4 rounded-5">TIẾP TỤC THANH TOÁN</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white w-screen mt-20">
    <div class="lg:(w-225 px-0) xl:(w-320) 2xl:(w-340) mx-auto">
      <div class="flex text-center items-center gap-2 mt-10">
        <div class="i-mdi:cog-outline text-color_4 font-300 text-10"></div>
        <div class="text-color_4 font-bold text-3xl">KHÓA HỌC CÙNG LĨNH VỰC</div>
      </div>
      <SlideCourse class="mt-5" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import SlideCourse from "../../components/slide/SlideCourse.vue"
import { useCartStore } from "~~/stores/cartStore"
const cartStore = useCartStore()
// layouts
definePageMeta({
  layout: "course",
})

const selectedItems = ref([])
const selectAll = ref(false)

const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedItems.value = [...cartStore.cart]
  } else {
    selectedItems.value = []
  }
}

function deleteCourse(id) {
  const index = cartStore.cart.findIndex(course => course.id === id)
  if (index !== -1) {
    cartStore.cart.splice(index, 1)
  }
}
function formatCurrency(value) {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value)
}
const selectedTotalPrice = computed(() => {
  return selectedItems.value.reduce((total, course) => total + course.sale_price, 0)
})
</script>
