<template>
  <swiper :modules="modules" :slides-per-view="1" autoplay :navigation="true" :pagination="{ clickable: true }" :scrollbar="{ draggable: true }">
    <swiper-slide v-for="(product, index) in products" :key="index">
      <img class="rounded-3 w-full h-full object-cover" :src="product.src" alt="" />
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
    src: "/img/cong/C3.jpg",
  },
  {
    src: "/img/cong/C1.png",
  },
  {
    src: "/img/cong/C2.png",
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
