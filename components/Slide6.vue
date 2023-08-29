<template>
  <swiper :modules="modules" :slides-per-view="1" autoplay :pagination="{ clickable: true }" :scrollbar="{ draggable: true }">
    <swiper-slide v-for="(product, index) in products" :key="index">
      <div class="flex justify-center items-center">
        <div class="h-full rounded-5 flex justify-center items-center p-7">
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
    src: "/img/lienhe/Lienhe1.jpg",
  },
  {
    src: "/img/lienhe/Lienhe2.jpg",
  },
  {
    src: "/img/lienhe/Lienhe3.jpg",
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
