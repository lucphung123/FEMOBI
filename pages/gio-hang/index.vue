<template>
  <div class="">
    <div v-if="courseItems.length === 0" class="bg-color_10">
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
    <div v-else class="bg-color_10 px-15 pt-5 pb-15">
      <div class="flex gap-2 pl-5 items-center">
        <p>Giỏ hàng:</p>
        <p class="font-bold">{{ selectedItems.length }}</p>
        <p>sản phẩm,</p>
        <p class="text-color_4 font-bold text-4">{{ formatCurrency(selectedTotalPrice) }}</p>
      </div>
      <div class="p-5 flex">
        <div class="w-full">
          <div class="bg-white flex rounded-lg p-5">
            <div class="flex items-center cursor-pointer text-16px text-color_6">
              <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
              <p class="ml-2 text-color_6 text-16px">Sản phẩm ({{ selectedItems.length }} sản phẩm)</p>
            </div>
            <p class="ml-52%">Giá</p>
            <div></div>
          </div>
          <div class="bg-white rounded-lg p-5 mt-5">
            <div v-for="(item, index) in courseItems" :key="item.id" class="flex border-b pb-5 mt-5">
              <div class="gap-3 flex">
                <input type="checkbox" v-model="selectedItems" :value="item" />
                <img :src="item.image" alt="" />
              </div>
              <div class="flex ml-10 w-full">
                <p class="text-color_8 text-4 leading-4.5 font-medium break-words w-120%">{{ item.name }}</p>
                <div class="flex ml-20 justify-between w-full">
                  <p class="text-color_4 font-bold text-4">{{ formatCurrency(item.price) }}</p>
                  <div class="flex cursor-pointer" @click="deleteCourse(item.id)">
                    <div class="i-mdi-trash text-2xl"></div>
                    <p class="ml-2">Xóa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 flex gap-1 mt-5">
            <p class="text-black font-normal">Chọn thêm:</p>
            <a class="text-[#21A6F1] font-bold underline" href="">Khóa học</a>
          </div>
        </div>
        <div class="w-1/3 ml-10">
          <div class="flex sticky flex-col transition duration-[all] ease-[ease-in-out] w-full top-30">
            <div class="bg-white rounded-lg p-5">
              <p class="text-color_9 font-normal text-sm">Tổng giá trị đơn hàng</p>
              <p class="text-color_4 font-bold text-4 mt-3">{{ formatCurrency(selectedTotalPrice) }}</p>
            </div>
            <div class="mt-4">
              <input type="text" placeholder="Mã giảm giá" class="h-7 border rounded-5 p-3 outline-none w-48" />
              <button class="bg-color_4 text-white text-sm text-center h-7 rounded-5 ml-5 px-1 w-19">ÁP DỤNG</button>
            </div>
            <nuxt-link to="/thanh-toan/thong-tin-thanh-toan">
              <button class="bg-color_1 text-white text-center font-bold leading-2.5 text-3.5 h-10 w-full mt-4 rounded-5">TIẾP TỤC THANH TOÁN</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white p-20">
      <div class="flex text-center items-center gap-2">
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

const courseItems = ref([
  { id: 1, name: "108 Tọa pháp Yoga - Bí mật trẻ mãi", price: 700000, image: "/img/course1/Tieng-anh.png" },
  { id: 2, name: "Nhập môn cờ vua cho người mới bắt đầu", price: 900000, image: "/img/course1/suc-khoe.png" },
  { id: 3, name: "Nhập môn cờ vua cho người mới bắt đầu", price: 500000, image: "/img/course1/Thpt.png" },
])

const selectedItems = ref([])
const selectAll = ref(false)

const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedItems.value = [...courseItems.value]
  } else {
    selectedItems.value = []
  }
}

function deleteCourse(id) {
  const index = courseItems.value.findIndex(item => item.id === id)
  if (index !== -1) {
    courseItems.value.splice(index, 1)
  }
}
function formatCurrency(value) {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value)
}
const selectedTotalPrice = computed(() => {
  return selectedItems.value.reduce((total, item) => total + item.price, 0)
})
</script>
