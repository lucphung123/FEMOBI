<template>
  <div class="p-10 bg-#EFEFEF">
    <div class="flex">
      <div class="w-20%">
        <UserProfile />
      </div>
      <div class="w-80% bg-white border h-130 rounded-3 ml-10">
        <div class="p-5">
          <p class="text-[#004390] text-9 leading-normal mr-0.5">Khóa học của tôi</p>
          <div class="flex justify-center mt-15">
            <img src="/img/noFile.svg" alt="" />
          </div>
          <div class="flex justify-center mt-5 leading-5 text-xl font-medium py-6">
            <p>Bạn chưa có đơn hàng nào!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserProfile from "../../components/account/UserProfile.vue"
</script>
