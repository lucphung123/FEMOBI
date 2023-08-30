<template>
  <div class="w-full mx-auto md:(w-full mx-0) flex justify-between items-center">
    <div class="border-2 rounded-full h-13 p-2 cursor-pointer duration-300" @click="back()" :class="mySwiper.isBeginning ? 'border-[#999999]/50 text-[#999999]/50' : 'border-[#F57D87] bg-[#F57D87] text-white'">
      <div class="text-8 i-mdi:chevron-left" :class="mySwiper.isBeginning ? 'border-[#999999]/50 text-[#999999]/50' : ''"></div>
    </div>

    <div class="w-full flex-col items-center">
      <swiper @swiper="setSwiper" :slides-per-view="6" autoplay :grabCursor="true" :modules="modules" class="w-full md:w-300 my-8">
        <swiper-slide class="bg-white shadow !text-black flex flex-col rounded-2 p-5" v-for="(product, index) in products" :key="index">
          <div class="bg-white">
            <div class="items-center flex justify-center">
              <img class="w-40 hover:scale-105 duration-300" :src="product.imgSrc" alt="" />
            </div>
            <p class="h-5 mt-2 text-color_8 font-bold text-sm leading-5">
              {{ product.title }}
            </p>
            <p class="mt-2 text-color_7 text-sm leading-5">
              {{ product.author }}
            </p>
            <p class="mt-2 text-color_4 font-bold text-sm leading-5">
              {{ product.price }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="border-2 rounded-full h-13 p-2 cursor-pointer duration-300" :class="mySwiper.isEnd ? 'border-[#999999]/50 text-[#999999]/50' : 'border-[#F57D87] bg-[#F57D87] text-white'" @click="next()">
      <div class="text-8 i-mdi:chevron-right" :class="mySwiper.isEnd ? 'border-[#999999]/50 text-[#999999]/50' : ''"></div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { EffectCards, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/autoplay"
const modules = [EffectCards, Autoplay]
const products = [
  {
    imgSrc: "/img/product/1.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
    price: "1.296.000 đ/tháng",
  },
  {
    imgSrc: "/img/product/2.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
    price: "1.296.000 đ/tháng",
  },
  {
    imgSrc: "/img/product/3.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
    price: "1.296.000 đ/tháng",
  },
  {
    imgSrc: "/img/product/1.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
    price: "1.296.000 đ/tháng",
  },
  {
    imgSrc: "/img/product/2.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
    price: "1.296.000 đ/tháng",
  },
  {
    imgSrc: "/img/product/1.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
    price: "1.296.000 đ/tháng",
  },
  {
    imgSrc: "/img/product/2.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
    price: "1.296.000 đ/tháng",
  },
  {
    imgSrc: "/img/product/3.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
    price: "1.296.000 đ/tháng",
  },
  {
    imgSrc: "/img/product/1.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
    price: "1.296.000 đ/tháng",
  },
  {
    imgSrc: "/img/product/2.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
    price: "1.296.000 đ/tháng",
  },
]
const mySwiper = ref({})
function setSwiper(xswiper) {
  mySwiper.value = xswiper
}
function back() {
  mySwiper.value?.slidePrev()
}

function next() {
  mySwiper.value?.slideNext()
}
</script>
<style scoped></style>
