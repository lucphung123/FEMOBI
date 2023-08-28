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
              <div class="dropdown-content w-1/6 duration-500 transition-all rounded-4" :class="{ active: dropdownVisible }">
                <div class="cursor-pointer flex flex-col p-5 space-y-5 text-sm font-500">
                  <p class="border-b cursor-pointer">Tất cả</p>
                  <p class="border-b cursor-pointer">Trẻ em</p>
                  <p class="border-b cursor-pointer">Sinh viên</p>
                  <p class="border-b cursor-pointer">Người đi làm</p>
                </div>
              </div>
            </div>
            <div>
              <p class="text-xl font-600">Giải pháp</p>
            </div>
            <div>
              <p class="text-xl font-600">Cổng thi</p>
            </div>
          </div>
        </div>
        <div class="flex-col space-y-3 p-2">
          <div class="flex gap-10 text-gray-600 font-600 justify-end">
            <div class="flex gap-10">
              <p class="cursor-pointer">Về mobiEdu</p>
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
