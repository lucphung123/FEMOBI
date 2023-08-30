<template>
  <div class="flex justify-center items-center">
    <swiper :modules="modules" :slides-per-view="5" autoplay :navigation="true" :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide v-for="(product, index) in products" :key="index">
        <div class="bg-white p-5">
          <div class="items-center flex justify-center">
            <img class="w-40 hover:scale-105 duration-300" :src="product.imgSrc" alt="" />
          </div>
          <p class="h-5 mt-2 text-color_8 font-bold text-sm leading-5 ml-9">
            {{ product.title }}
          </p>
          <p class="mt-2 text-color_7 text-sm leading-5 ml-9">
            {{ product.author }}
          </p>
          <p class="mt-2 text-color_4 font-bold text-sm leading-5 ml-9">
            {{ product.price }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
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
</script>
<style scoped></style>
