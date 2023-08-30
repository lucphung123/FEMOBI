<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="w-full">
      <div class="w-full flex justify-center">
        <div class="flex items-center justify-center px-0 py-2 w-full">
          <div class="flex items-center space-x-5 w-full">
            <nuxt-link to="/"><img src="/img/logo.png" alt="" /></nuxt-link>
            <div class="dropdown-trigger" @mouseenter="showDropdown" @mouseleave="hideDropdown">
              <div class="dropdown flex items-center">
                <nuxt-link to="/khoa-hoc"><p class="text-xl font-600">Khoá học</p></nuxt-link>
                <div class="i-mdi:chevron-down text-xl"></div>
              </div>
              <div class="dropdown-content w-60 h-45 duration-500 transition-all rounded-4" :class="{ active: dropdownVisible }">
                <div class="cursor-pointer flex flex-col p-5 space-y-5 text-sm font-500">
                  <nuxt-link to="/khoa-hoc"> <p class="border-b cursor-pointer hover:text-color_4">Tất cả</p></nuxt-link>
                  <nuxt-link to="/khoa-hoc/tre-em"> <p class="border-b cursor-pointer hover:text-color_4">Trẻ em</p></nuxt-link>
                  <nuxt-link to="/khoa-hoc/hoc-sinh-pho-thong"> <p class="border-b cursor-pointer hover:text-color_4">Học sinh phổ thông</p></nuxt-link>
                  <nuxt-link to="/khoa-hoc/sinh-vien-nguoi-di-lam"> <p class="border-b cursor-pointer hover:text-color_4">Sinh viên và người đi làm</p></nuxt-link>
                </div>
              </div>
            </div>
            <div>
              <nuxt-link to="/giai-phap"> <p class="text-xl font-600 cursor-pointer hover:text-color_4">Giải pháp</p></nuxt-link>
            </div>
            <div>
              <nuxt-link to="/cong-thi"> <p class="text-xl font-600 cursor-pointer hover:text-color_4">Cổng thi</p></nuxt-link>
            </div>
          </div>
        </div>
        <div class="flex-col space-y-3 p-2">
          <div class="flex gap-10 text-gray-600 font-600 justify-end">
            <div class="flex gap-10">
              <nuxt-link to="/gioi-thieu" class="cursor-pointer">
                <p class="cursor-pointer">Về mobiEdu</p>
              </nuxt-link>
              <nuxt-link to="/ho-tro-khach-hang" class="cursor-pointer">
                <p>Hỗ trợ</p>
              </nuxt-link>
            </div>
            <nuxt-link to="/gio-hang">
              <div class="i-mdi:cart text-xl"></div>
            </nuxt-link>
          </div>
          <div class="flex items-ceter gap-7">
            <div class="relative">
              <input type="text" placeholder="Nhập từ khóa" class="border-1px rounded-full bg-gray-200 h-40px w-230px text-center" />
              <!-- <div class="i-mdi:magnify absolute text-2xl"></div> -->
            </div>
            <div>
              <button class="text-white bg-color_4 rounded-full h-40px w-130px font-600 text-sm">ĐĂNG NHẬP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
// const isLoading = ref(true)
// setTimeout(() => {
//   isLoading.value = false
// }, 1000)

//dropdown
const dropdownVisible = ref(false)
const showDropdown = () => {
  dropdownVisible.value = true
}
const hideDropdown = () => {
  dropdownVisible.value = false
}
</script>

<style scoped>
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.dropdown-content.active {
  display: block;
}

.dropdown {
  cursor: pointer;
  position: relative;
}
</style>
