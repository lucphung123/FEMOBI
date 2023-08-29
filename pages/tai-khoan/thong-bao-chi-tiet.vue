<template>
  <div class="w-full">
    <div class="flex text-color_7 py-5 font-normal text-4 leading-4 items-center gap-2">
      <nuxt-link to="/">Trang chủ</nuxt-link>
      <div class="i-mdi:chevron-right text-xl"></div>
      <p class="font-bold">Thông báo chi tiết</p>
    </div>
  </div>
  <div class="bg-color_11 w-full">
    <div class="flex">
      <div class="w-25%">
        <UserProfile />
      </div>
      <div class="w-75% bg-white border h-60 rounded-3 ml-10">
        <div class="p-5 mt-5">
          <p class="text-24px text-color_6 font-bold">Thay đổi thông tin cá nhân thành công!</p>
          <p class="text-16px text-color_6 mt-5">Thay đổi thông tin cá nhân thành công!</p>
          <nuxt-link to="/tai-khoan/thong-bao">
            <button class="hover:bg-color_5 h-10 mt-8 hover:text-color_6 font-bold w-30 text-white bg-color_4 px-20px py-1 rounded-5">QUAY LẠI</button>
          </nuxt-link>
          <p></p>
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
</script>
