<template>
  <div class="w-full">
    <div class="flex my-10 text-color_7 font-normal text-xl leading-4 items-center gap-2">
      <nuxt-link to="/">Trang chủ</nuxt-link>
      <div class="i-mdi:chevron-right text-3xl"></div>
      <p class="font-bold">Hỗ trợ</p>
    </div>
    <div class="relative mt-20">
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full md:mt-50 bg-help h-65 flex flex-col items-center">
        <div class="w-full">
          <div>
            <p class="text-center text-color_4 font-bold text-12 mt-17 leading-7">mobiEdu có thể giúp gì cho bạn?</p>
          </div>
          <div class="relative mt-10">
            <input class="bg-white w-70% h-15 ml-47 text-color_8 px-10 py-5 text-xl rounded-3xl outline-none" type="text" placeholder="Nhập câu hỏi của bạn vào đây" />
            <div class="absolute right-63 top-1/2 transform -translate-y-1/2">
              <div class="i-mdi:magnify text-4xl text-color_4 cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-90">
      <div class="flex gap-2">
        <img src="/img/icon/comment-question.svg" alt="" />
        <p class="font-bold text-4xl">Các câu hỏi thường gặp</p>
      </div>
    </div>
    <div class="flex mt-10 gap-10">
      <div class="w1/2 text-5">
        <p class="border-b pb-5 cursor-pointer hover:(text-color_2)">1. Thanh toán online như thế nào</p>
        <p class="border-b pb-5 mt-5 cursor-pointer hover:(text-color_2)">3. Đăng kí tài khoản trên mobiEdu.vn như thế nào?</p>
        <p class="border-b pb-5 mt-5 cursor-pointer hover:(text-color_2)">5. Tài khoản trên mobiEdu có thể thay đổi được không?</p>
      </div>
      <div class="w1/2 text-5">
        <p class="border-b pb-5 cursor-pointer hover:(text-color_2)">2. Hệ sinh thái giáo dục mobiEdu có những khóa học như thế nào?</p>
        <p class="border-b pb-5 mt-5 cursor-pointer hover:(text-color_2)">4. Tôi có thể thanh toán qua các hình thức nào trên mobiEdu?</p>
        <p class="border-b pb-5 mt-5 cursor-pointer hover:(text-color_2)">6. Đăng nhập trên mobiEdu.vn như thế nào?</p>
      </div>
    </div>
    <div class="mt-10">
      <div class="flex text-color_4 font-bold text-4xl gap-2">
        <div class="i-mdi:list-box"></div>
        <p>Tất cả câu hỏi</p>
      </div>
    </div>
    <megaMenu />
  </div>
</template>

<script setup>
import megaMenu from "../../components/megaMenu.vue"
</script>
