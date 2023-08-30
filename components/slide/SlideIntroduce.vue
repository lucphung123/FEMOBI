<template>
  <div class="w-full mx-auto md:(w-full mx-0) flex justify-between items-center">
    <div class="p-2 cursor-pointer duration-300 hover:text-color_5" @click="back()" :class="mySwiper.isBeginning ? 'border-[#999999]/50 text-[#999999]/50' : ''">
      <div class="text-8 i-mdi:chevron-left" :class="mySwiper.isBeginning ? 'border-[#999999]/50 text-[#999999]/50' : ''"></div>
    </div>

    <div class="w-full">
      <swiper @swiper="setSwiper" :slides-per-view="3" autoplay :grabCursor="true" :modules="modules" class="w-full md:w-300 my-8">
        <swiper-slide class="bg-white shadow !text-black rounded-2 p-5" v-for="(product, index) in products" :key="index">
          <div>
            <div class="bg-white flex gap-5">
              <div class="items-center flex justify-center">
                <img class="w-30 h-40 hover:scale-105 duration-300" :src="product.data1.imgSrc" alt="" />
              </div>
              <div class="flex justify-center items-center">
                <div>
                  <p class="h-5 mt-2 text-color_8 font-bold text-sm">
                    {{ product.data1.title }}
                  </p>
                  <p class="mt-7 text-color_7 text-sm">
                    {{ product.data1.author }}
                  </p>
                  <p class="mt-5 text-color_4 font-bold text-sm">
                    {{ product.data1.price }}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-white flex gap-5 mt-10">
              <div class="items-center flex justify-center">
                <img class="w-30 h-40 hover:scale-105 duration-300" :src="product.data2.imgSrc" alt="" />
              </div>
              <div class="flex justify-center items-center">
                <div>
                  <p class="h-5 mt-2 text-color_8 font-bold text-sm">
                    {{ product.data2.title }}
                  </p>
                  <p class="mt-7 text-color_7 text-sm">
                    {{ product.data2.author }}
                  </p>
                  <p class="mt-5 text-color_4 font-bold text-sm">
                    {{ product.data2.price }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="p-2 cursor-pointer duration-300 hover:text-color_5" :class="mySwiper.isEnd ? 'border-[#999999]/50 text-[#999999]/50' : ''" @click="next()">
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
    id: 1,
    data1: {
      imgSrc: "/img/product/1.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
    data2: {
      imgSrc: "/img/product/2.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
  },
  {
    id: 1,
    data1: {
      imgSrc: "/img/product/3.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
    data2: {
      imgSrc: "/img/product/1.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
  },
  {
    id: 1,
    data1: {
      imgSrc: "/img/product/1.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
    data2: {
      imgSrc: "/img/product/2.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
  },
  {
    id: 1,
    data1: {
      imgSrc: "/img/product/3.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
    data2: {
      imgSrc: "/img/product/1.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
  },
  {
    id: 1,
    data1: {
      imgSrc: "/img/product/1.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
    data2: {
      imgSrc: "/img/product/2.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
  },
  {
    id: 1,
    data1: {
      imgSrc: "/img/product/3.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
    data2: {
      imgSrc: "/img/product/1.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
  },
  {
    id: 1,
    data1: {
      imgSrc: "/img/product/1.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
    data2: {
      imgSrc: "/img/product/2.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
  },
  {
    id: 1,
    data1: {
      imgSrc: "/img/product/3.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
    data2: {
      imgSrc: "/img/product/1.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
  },
  {
    id: 1,
    data1: {
      imgSrc: "/img/product/1.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
    data2: {
      imgSrc: "/img/product/2.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
  },
  {
    id: 1,
    data1: {
      imgSrc: "/img/product/3.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
    data2: {
      imgSrc: "/img/product/1.png",
      title: "Nhập môn cờ vua cho người mới bắt đầu",
      author: "Nguyễn Thanh Hằng",
      price: "1.296.000 đ/tháng",
    },
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
