<template>
  <div class="flex justify-center items-center">
    <swiper :modules="modules" :slides-per-view="3" autoplay :navigation="true" :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" class="flex">
      <swiper-slide v-for="(product, index) in products" :key="index">
        <div class="flex-col justify-center items-center mx-15">
          <div class="i-mdi:format-quote-close text-8xl bg-red-600 left-0"></div>
          <div class="xl:mt-0 space-y-8 flex-col justify-center items-center">
            <p class="text-xl">{{ product.office }}</p>
          </div>
          <div class="h-full w-full rounded-5 flex items-center">
            <img :src="product.src" alt="" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { EffectCards, Autoplay, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/navigation"
import "swiper/css/autoplay"

const modules = [EffectCards, Autoplay, Navigation]
const products = [
  {
    src: "/img/10.png",
    office: "MobiEdu có gói cước dịch vụ hợp lý lại đáp ứng trọn vẹn từ nhu cầu của một cá nhân muốn học tập, của một thầy, cô muốn giảng dạy; hay một nhà trường muốn quản lý, đào tạo trực tuyến chuyên nghiệp lâu dài... với chi phí hợp lý và khâu hậu mãi, chăm sóc khách hàng tốt.",
  },
  {
    src: "/img/10.png",
    office: "MobiEdu có gói cước dịch vụ hợp lý lại đáp ứng trọn vẹn từ nhu cầu của một cá nhân muốn học tập, của một thầy, cô muốn giảng dạy; hay một nhà trường muốn quản lý, đào tạo trực tuyến chuyên nghiệp lâu dài... với chi phí hợp lý và khâu hậu mãi, chăm sóc khách hàng tốt.",
  },
  {
    src: "/img/10.png",
    office: "MobiEdu có gói cước dịch vụ hợp lý lại đáp ứng trọn vẹn từ nhu cầu của một cá nhân muốn học tập, của một thầy, cô muốn giảng dạy; hay một nhà trường muốn quản lý, đào tạo trực tuyến chuyên nghiệp lâu dài... với chi phí hợp lý và khâu hậu mãi, chăm sóc khách hàng tốt.",
  },
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
.swiper-slide-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
</style>
