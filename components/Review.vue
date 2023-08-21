<template>
  <swiper @swiper="setSwiper" :grabCursor="true" :modules="modules" class="flex">
    <swiper-slide v-for="i in reviews" :key="i.body" class="swiper-slide-bg">
      <div class="w-full flex items-center space-x-5 my-5">
        <div class="flex-col justify-center items-center w-1/3 space-y-5">
          <div class="i-mdi:format-quote-close text-8xl bg-red-600 left-0"></div>
          <div class="xl:mt-0 space-y-8 flex-col justify-center items-center">
            <p class="text-xl">{{ i.office }}</p>
          </div>
          <div class="h-full w-full rounded-5 flex items-center">
            <img :src="i.src" :alt="i.alt" />
          </div>
        </div>
        <div class="flex-col justify-center items-center w-1/3 space-y-5">
          <div class="i-mdi:format-quote-close text-8xl bg-red-600 left-0"></div>
          <div class="xl:mt-0 space-y-8 flex-col justify-center items-center">
            <p class="text-xl">{{ i.office }}</p>
          </div>
          <div class="h-full w-full rounded-5 flex items-center">
            <img :src="i.src" :alt="i.alt" />
          </div>
        </div>
        <div class="flex-col justify-center items-center w-1/3 space-y-5">
          <div class="i-mdi:format-quote-close text-8xl bg-red-600 left-0"></div>
          <div class="xl:mt-0 space-y-8 flex-col justify-center items-center">
            <p class="text-xl">{{ i.office }}</p>
          </div>
          <div class="h-full w-full rounded-5 flex items-center">
            <img :src="i.src" :alt="i.alt" />
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { EffectCards } from "swiper"
import "swiper/css"
import "swiper/css/effect-cards"

const modules = [EffectCards]
const reviews = [
  {
    src: "/img/10.png",
    office: "MobiEdu có gói cước dịch vụ hợp lý lại đáp ứng trọn vẹn từ nhu cầu của một cá nhân muốn học tập, của một thầy, cô muốn giảng dạy; hay một nhà trường muốn quản lý, đào tạo trực tuyến chuyên nghiệp lâu dài... với chi phí hợp lý và khâu hậu mãi, chăm sóc khách hàng tốt.",
  },
  {
    src: "/img/10.png",
    office: "MobiEdu có gói cước dịch vụ hợp lý lại đáp ứng trọn vẹn từ nhu cầu của một cá nhân muốn học tập, của một thầy, cô muốn giảng dạy; hay một nhà trường muốn quản lý, đào tạo trực tuyến chuyên nghiệp lâu dài... với chi phí hợp lý và khâu hậu mãi, chăm sóc khách hàng tốt.",
  },
]
let mySwiper = ref({})
const setSwiper = xswiper => {
  mySwiper.value = xswiper
}
</script>

<style scoped>
.swiper-slide-bg {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.swiper-slide-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
</style>
