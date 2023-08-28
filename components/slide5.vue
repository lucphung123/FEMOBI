<template>
  <swiper :modules="modules" :slides-per-view="5" autoplay :navigation="true" :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" class="flex">
    <swiper-slide v-for="(product, index) in products" :key="index">
      <div class="flex justify-center items-center">
        <div class="h-full w-full flex justify-center items-center space-x-2">
          <img class="rounded-3" :src="product.src" alt="" />
          <img class="rounded-3" :src="product.src1" alt="" />
          <img class="rounded-3" :src="product.src2" alt="" />
          <img class="rounded-3" :src="product.src3" alt="" />
          <img class="rounded-3" :src="product.src4" alt="" />
          <img class="rounded-3" :src="product.src5" alt="" />
          <img class="rounded-3" :src="product.src6" alt="" />
          <img class="rounded-3" :src="product.src7" alt="" />
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
    src: "/img/1.jpg",
  },
  {
    src1: "/img/1.jpg",
  },
  {
    src2: "/img/1.jpg",
  },
  {
    src3: "/img/1.jpg",
  },
  {
    src4: "/img/1.jpg",
  },
  {
    src5: "/img/1.jpg",
  },
  {
    src6: "/img/1.jpg",
  },
  {
    src7: "/img/1.jpg",
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
