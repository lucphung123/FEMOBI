<template>
  <swiper @swiper="setSwiper" :grabCursor="true" :modules="modules" class="flex">
    <swiper-slide v-for="i in reviews" :key="i.body" class="swiper-slide-bg">
      <div class="flex space-x-10 p15">
        <div class="flex-col justify-center items-center space-y-7">
          <div>
            <img class="rounded-5" :src="i.src" :alt="i.alt" />
          </div>
          <div>
            <p class="font-600 text-3xl text-white text-center">{{ i.name }}</p>
          </div>
        </div>
        <div class="flex-col justify-center items-center space-y-7">
          <div>
            <img class="rounded-5" :src="i.src" :alt="i.alt" />
          </div>
          <div>
            <p class="font-600 text-3xl text-white text-center">{{ i.name }}</p>
          </div>
        </div>
        <div class="flex-col justify-center items-center space-y-7">
          <div>
            <img class="rounded-5" :src="i.src" :alt="i.alt" />
          </div>
          <div>
            <p class="font-600 text-3xl text-white text-center">{{ i.name }}</p>
          </div>
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
