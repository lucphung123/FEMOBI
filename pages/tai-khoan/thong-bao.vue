<template>
  <div class="w-full">
    <div class="flex text-color_7 py-5 font-normal text-4 leading-4 items-center gap-2">
      <nuxt-link to="/">Trang chủ</nuxt-link>
      <div class="i-mdi:chevron-right text-xl"></div>
      <p class="font-bold">Thông báo</p>
    </div>
  </div>
  <div class="bg-color_11 w-full">
    <div class="flex">
      <div class="w-25%">
        <UserProfile />
      </div>
      <div class="w-75% bg-white border h-80 rounded-3 ml-10">
        <div class="p-10">
          <p class="text-color_4 text-9 leading-normal mr-0.5">Thông báo</p>
          <div class="flex px-5 py-3 bg-color_4 rounded-lg text-white font-bold mt-5">
            <p class="w-60%">Tiêu đề</p>
            <p class="w-30%">Người gửi</p>
            <p class="w-20% text-right">Ngày gửi</p>
          </div>
          <div v-for="(data, index) in notify" :key="index" class="flex px-5 py-3 rounded-lg text-color_9 justify-between">
            <nuxt-link class="w-60%" to="/tai-khoan/thong-bao-chi-tiet">
              <p class="hover:text-color_4 cursor-pointer">{{ data.title }}</p>
            </nuxt-link>
            <p class="w-30%">{{ data.user }}</p>
            <p class="w-20% text-right">{{ data.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserProfile from "../../components/account/UserProfile.vue"
// layouts
definePageMeta({
  layout: "course",
})
const notify = [
  {
    id: 1,
    title: "Thay đổi thông tin cá nhân thành công!",
    user: "iNet",
    date: "27/08/2023",
  },
  {
    id: 1,
    title: "Thay đổi mật khẩu!",
    user: "iNet",
    date: "27/08/2023",
  },
]
</script>
