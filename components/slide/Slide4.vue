<template>
  <swiper :modules="modules" :slides-per-view="1" autoplay :navigation="true" :pagination="{ clickable: true }" :scrollbar="{ draggable: true }">
    <swiper-slide v-for="(product, index) in products" :key="index">
      <!-- <div class="rounded-5 flex justify-center items-center">
        <img class="rounded-3" :src="product.src" alt="" />
      </div> -->
      <div class="bg-[url(/img/banner/banner-course.jpg)] h-75 text-center flex justify-center items-center rounded-3">
        <p class="text-white text-3xl font-bold">Lựa chọn khoá học phù hợp với bạn ngày hôm nay</p>
      </div>
    </swiper-slide>
  </swiper>
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
    src: "/img/banner/banner-course.jpg",
    office: "Nền tảng chuyển đổi số toàn diện của mobiFone",
  },
  {
    src: "/img/banner/banner-course.jpg",
    office: "Nền tảng chuyển đổi số toàn diện của mobiFone",
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
}
</style>
