<template>
  <div class="w-full">
    <div class="flex text-color_7 py-5 font-normal text-4 leading-4 items-center gap-2">
      <nuxt-link to="/">Trang chủ</nuxt-link>
      <div class="i-mdi:chevron-right text-xl"></div>
      <p class="font-bold">Khóa học của tôi</p>
    </div>
  </div>
  <div class="bg-color_11 w-full">
    <div class="flex">
      <div class="w-25%">
        <UserProfile />
      </div>
      <div class="w-75% bg-white border h-130 rounded-3 ml-10">
        <div class="p-10">
          <p class="text-color_4 text-9 leading-normal mr-0.5">Ưu đãi</p>
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
