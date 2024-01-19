<template>
  <div class="flex space-x-4 my-5 mt-7 items-center w-full">
    <nuxt-link to="/" class="text-gray-400">Trang chủ</nuxt-link>
    <div class="i-mdi:chevron-right text-2xl bg-gray-500"></div>
    <p class="font-bold text-gray-500">Giải pháp</p>
  </div>
  <div class="flex bg-#ebf3f8 flex-col bg-color_15 w-screen top-23">
    <div class="lg:(w-225 px-0) xl:(w-320) 2xl:(w-340) mx-auto">
      <div class="flex items-center">
        <SlideSlide8 />
      </div>
    </div>
    <div class="text-center text-xl text-color_8 py-10">Hệ thống giải pháp dành cho Doanh nghiệp - Nhà trường của edubook</div>
    <div class="flex flex-col justify-center w-full lg:w-225 xl:(w-300) mx-auto">
      <div class="flex">
        <nuxt-link to="/giai-phap/truong-mam-non-tieu-hoc" class="w1/4">
          <img class="hover:border-5px hover:border-color_5 border-rd-4" src="/img/giai-phap/G4.jpg" alt="" />
        </nuxt-link>
        <nuxt-link to="/giai-phap/truong-pho-thong" class="w-1/4"><img class="hover:border-5px hover:border-color_5 border-rd-4" src="/img/giai-phap/G5.png" alt="" /></nuxt-link>
        <nuxt-link to="/giai-phap/truong-dai-hoc" class="w-1/4"><img class="border-5px border-color_5 border-rd-4" src="/img/giai-phap/G6.png" alt="" /></nuxt-link>
        <nuxt-link to="/giai-phap/doanh-nghiep" class="w-1/4"><img class="hover:border-5px hover:border-color_5 border-rd-4" src="/img/giai-phap/G7.png" alt="" /></nuxt-link>
      </div>
      <div class="flex items-cente p-10">
        <img src="/img/giai-phap/G48.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "course2",
})
</script>
