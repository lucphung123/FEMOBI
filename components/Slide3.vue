<template>
  <swiper @swiper="setSwiper" :grabCursor="true" :modules="modules" class="flex">
    <swiper-slide v-for="i in reviews" :key="i.body" class="swiper-slide-bg">
      <div class="flex justify-center items-center space-x-20">
        <div class="h-full w-full rounded-5 flex justify-center items-center">
          <img class="rounded-5" :src="i.src" :alt="i.alt" />
        </div>
        <div class="h-full w-full rounded-5 flex justify-center items-center">
          <img class="rounded-5" :src="i.src" :alt="i.alt" />
        </div>
        <div class="h-full w-full rounded-5 flex justify-center items-center">
          <img class="rounded-5" :src="i.src" :alt="i.alt" />
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
  },
  {
    src: "/img/1.jpg",
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
