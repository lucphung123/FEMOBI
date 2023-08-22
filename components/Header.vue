<template>
  <div class="flex items-center w-full px-10 py-5">
    <div class="flex items-center gap-10 w-full">
      <nuxt-link to="/"><img src="/img/logo.png" alt="" /></nuxt-link>
      <div class="dropdown-trigger" @mouseenter="showDropdown" @mouseleave="hideDropdown">
        <div class="dropdown flex items-center">
          <nuxt-link to="/khoa-hoc"><p class="text-xl font-600">Khoá học</p></nuxt-link>
          <div class="i-mdi:chevron-down text-xl"></div>
        </div>
        <div class="dropdown-content w-1/6 duration-200 transition rounded-4" :class="{ active: dropdownVisible }">
          <div class="cursor-pointer flex flex-col p-5 space-y-5 text-sm font-500">
            <p class="border-b">Tất cả</p>
            <p class="border-b">Trẻ em</p>
            <p class="border-b">Sinh viên</p>
            <p class="border-b">Người đi làm</p>
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
    <div class="flex-col space-y-3">
      <div class="flex gap-10 text-gray-600 font-600 justify-end">
        <div class="flex gap-10">
          <p>Về mobiEdu</p>
          <p>Hỗ trợ</p>
        </div>
        <div class="i-mdi:cart text-xl"></div>
      </div>
      <div class="flex items-ceter gap-7">
        <div class="relative">
          <input type="text" placeholder="Nhập từ khóa" class="border-1px rounded-full bg-gray-200 h-40px w-230px text-center" />
          <!-- <div class="i-mdi:magnify absolute text-2xl"></div> -->
        </div>
        <div>
          <button class="text-white bg-[#004390] rounded-full h-40px w-130px font-600 text-sm">ĐĂNG NHẬP</button>
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
