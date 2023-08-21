<template>
  <swiper @swiper="setSwiper" :grabCursor="true" :modules="modules" class="bg-[url(/img/bg/bg-banner.jpg)] bg-cover bg-center w-full h-600px flex">
    <swiper-slide v-for="i in reviews" :key="i.body" class="swiper-slide-bg">
      <div class="flex justify-center items-center mx-25 my-20">
        <div class="xl:mt-0 space-y-8 flex-col justify-center items-center ml-4 text-white">
          <p class="font-600 text-7xl">{{ i.name }}</p>
          <p class="text-3xl">{{ i.office }}</p>
          <button class="text-[#004390] font-semibold bg-white p2 text-sm rd-20px">ĐĂNG NHẬP NGAY</button>
        </div>
        <div class="h-full w-full rounded-5 flex justify-center items-center">
          <img class="rounded-5" :src="i.src" :alt="i.alt" />
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
    src: "/img/1.jpg",
    name: "mobiEdu",
    office: "Nền tảng chuyển đổi số toàn diện của mobiFone",
  },
  {
    src: "/img/1.jpg",
    name: "mobiEdu",
    office: "Nền tảng chuyển đổi số toàn diện của mobiFone",
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
