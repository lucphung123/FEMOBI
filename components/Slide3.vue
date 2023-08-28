<template>
  <swiper :modules="modules" :slides-per-view="4" autoplay  :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" class="flex">
    <swiper-slide v-for="(product, index) in products" :key="index">
      <div class="flex justify-center items-center">
        <div class="h-full w-full rounded-5 flex justify-center items-center">
          <img class="rounded-5" :src="product.src" alt="" />
        </div>
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
    src: "/img/8.png",
  },
  {
    src: "/img/8.png",
  },
  {
    src: "/img/8.png",
  },
  {
    src: "/img/8.png",
  },
  {
    src: "/img/8.png",
  },
  {
    src: "/img/8.png",
  },
  {
    src: "/img/8.png",
  },
  {
    src: "/img/8.png",
  },
  {
    src: "/img/8.png",
  },
  {
    src: "/img/8.png",
  },
  {
    src: "/img/8.png",
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
