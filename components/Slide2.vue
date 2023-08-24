<template>
  <swiper :modules="modules" :slides-per-view="3" autoplay :navigation="true" :pagination="{ clickable: true }" :scrollbar="{ draggable: true }"  class="flex">
    <swiper-slide v-for="(product, index) in products" :key="index">
      <div class="flex space-x-10 p15 justify-center">
        <div class="flex-col justify-center items-center space-y-7">
          <div>
            <img class="rounded-2" :src="product.src" alt="" />
          </div>
          <div>
            <p class="font-600 text-3xl text-white text-center">{{ product.name }}</p>
          </div>
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
    name: "mobiEdu",
  },
  {
    src: "/img/1.jpg",
    name: "mobiEdu",
  },
  {
    src: "/img/1.jpg",
    name: "mobiEdu",
  },
  {
    src: "/img/1.jpg",
    name: "mobiEdu",
  },
  {
    src: "/img/1.jpg",
    name: "mobiEdu",
  },
  {
    src: "/img/1.jpg",
    name: "mobiEdu",
  },
  {
    src: "/img/1.jpg",
    name: "mobiEdu",
  },
  {
    src: "/img/1.jpg",
    name: "mobiEdu",
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
