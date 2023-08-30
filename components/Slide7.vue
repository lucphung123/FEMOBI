<template>
  <swiper :modules="modules" :slides-per-view="1" autoplay :pagination="{ clickable: true }" :scrollbar="{ draggable: true }">
    <swiper-slide v-for="(product, index) in products" :key="index">
      <div class="flex justify-center items-center">
        <div class="rounded-5 flex justify-center items-center">
          <img class="rounded-5 h-80 w-340" :src="product.src" alt="" />
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
    src: "/img/gioithieu/gioithieu.png",
  },
  {
    src: "/img/gioithieu/gioithieu.jpg",
  },
]
</script>

<style scoped>
.swiper-slide-content {
  display: flex;
  flex-direction: column;
}
</style>
