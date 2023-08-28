<template>
  <div>
    <div class="flex text-center bg-color_10">
      <div :class="[' bg-color_11 cursor-pointer text-white  text-xl mt-5  ', activeTab === 'course' ? 'text-white border-b bg-color_4 rounded-lg ' : 'text-black hover:(text-color_4)']" @click="activateTab('course')">Sản phẩm</div>
      <div :class="[' bg-color_11 cursor-pointer text-white  text-xl mt-5  ', activeTab === 'news' ? 'text-white border-b bg-color_4 rounded-lg ' : 'text-black hover:(text-color_4)']" @click="activateTab('news')">Hướng dẫn</div>
      <div :class="[' bg-color_11 cursor-pointer text-white  text-xl mt-5  ', activeTab === 'other' ? 'text-white border-b bg-color_4 rounded-lg ' : 'text-black hover:(text-color_4)']" @click="activateTab('other')">Chính sách</div>
    </div>
    <div v-if="activeTab === 'course'">
      <div class="cursor-pointer" v-for="(item, index) in menuItems" :key="index">
        <div class="flex items-center justify-between text-base leading-6 p-5" @click="toggleItem(item)">
          <div class="flex items-center">
            <div class="ml-2">
              {{ item.title }}
            </div>
          </div>
          <div :class="item.open ? 'i-mdi:chevron-up md:text-2xl' : 'i-mdi:chevron-down md:text-xl'"></div>
        </div>
        <div class="overflow-auto transition-all scrollbar-hide" :class="item.open ? 'h-16 duration-500' : 'h-0 duration-500'">
          <div v-for="(childItem, childIndex) in item.children" :key="childIndex">
            <div class="flex items-center text-base leading-6 p-5 ml-8">
              {{ childItem.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="activeTab === 'news'">
      <div class="cursor-pointer" v-for="(item, index) in menuItems1" :key="index">
        <div class="flex items-center justify-between text-base leading-6 p-5" @click="toggleItem1(item)">
          <div class="flex items-center">
            <div class="ml-2">
              {{ item.title }}
            </div>
          </div>
          <div :class="item.open ? 'i-mdi:chevron-up md:text-2xl' : 'i-mdi:chevron-down md:text-xl'"></div>
        </div>
        <div class="overflow-hidden transition-all scrollbar-hide" :class="item.open ? 'h-50 duration-500' : 'h-0 duration-500'">
          <div v-for="(childItem, childIndex) in item.children" :key="childIndex">
            <div class="flex items-center text-base leading-6 p-5 ml-8">
              {{ childItem.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

function activateTab(tabName) {
  activeTab.value = tabName
  activeSubTab.value = ""
}
const activeTab = ref("course")
const menuItems = ref([
  {
    title: "Khóa học",
    open: false,
    children: [
      {
        title: "1. Hệ sinh thái giáo dục mobiEdu có những khóa học như thế nào?",
        children: [],
      },
    ],
  },
  {
    title: "Giải pháp",
    open: false,
    children: [
      {
        title: "1. Các giải pháp mobiEdu là gì?",
        children: [],
      },
    ],
  },
  {
    title: "Cổng thi",
    open: false,
    children: [
      {
        title: "1. Cổng thi mobiEdu là gì?",
        children: [],
      },
    ],
  },
])
const menuItems1 = ref([
  {
    title: "Đăng ki - Đăng nhập",
    open: false,
    children: [
      {
        title: "1. Đăng kí tài khoản trên mobiEdu.vn như thế nào?",
        children: [],
      },
      {
        title: "2. Đăng nhập trên mobiEdu.vn như thế nào?",
        children: [],
      },
      {
        title: "3. Hướng dẫn cách lấy lại mật khẩu trên mobiEdu.vn",
        children: [],
      },
    ],
  },
  {
    title: "Mua & sử dụng",
    open: false,
    children: [
      {
        title: "1. Các khóa học có thời gian sử dụng trong bao lâu?",
      },
      {
        title: "2. Làm thế nào để mua tặng khóa học cho người khác?",
      },
      {
        title: "3. Hướng dẫn kích hoạt khóa học",
      },
      {
        title: "4. Không đăng kí tài khoản có mua được khóa học trên mobiEdu.vn không?",
      },
      {
        title: "5. Không có internet có thể xem được video khóa học hay không?",
      },
      {
        title: "6. Làm thế nào để tương tác với giảng viên?",
      },
      {
        title: "7. Làm thế nào để gia hạn khóa học đã hết hạn?",
      },
    ],
  },
  {
    title: "Cổng thi",
    open: false,
    children: [
      {
        title: "1. Cổng thi mobiEdu là gì?",
        children: [],
      },
    ],
  },
])
const dropdownStates = ref({})

function toggleItem(item) {
  if (dropdownStates[item.title] === undefined) {
    dropdownStates[item.title] = false
  }
  dropdownStates[item.title] = !dropdownStates[item.title]
  item.open = dropdownStates[item.title]
}
function toggleItem1(item) {
  if (dropdownStates[item.title] === undefined) {
    dropdownStates[item.title] = false
  }
  dropdownStates[item.title] = !dropdownStates[item.title]
  item.open = dropdownStates[item.title]
}
</script>
