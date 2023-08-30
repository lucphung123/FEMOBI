<template>
  <div class="w-full mx-auto md:(w-full mx-0) flex justify-between items-center">
    <div class="p-2 cursor-pointer duration-300 hover:text-color_5" @click="back()" :class="mySwiper.isBeginning ? 'border-[#999999]/50 text-[#999999]/50' : ''">
      <div class="text-8 i-mdi:chevron-left" :class="mySwiper.isBeginning ? 'border-[#999999]/50 text-[#999999]/50' : ''"></div>
    </div>

    <div class="w-full">
      <swiper @swiper="setSwiper" :slides-per-view="1" autoplay :grabCursor="true" :modules="modules" class="w-full md:w-300">
        <swiper-slide class="bg-white shadow !text-black rounded-2 p-5" v-for="(product, index) in products" :key="index">
          <div>
            <div class="bg-white flex gap-5 h90">
              <div class="items-center flex justify-center w-50%">
                <img class="rounded-2xl" :src="product.imgSrc" alt="" />
              </div>
              <div class="flex justify-center items-center w-50%">
                <div>
                  <p class="font-bold text-3xl">
                    {{ product.author }}
                  </p>
                  <p class="text-xl mt-5">
                    {{ product.title }}
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
    imgSrc: "/img/about/giai-thuong-1.png",
    title: "mobiEdu đạt Giải Vàng Stevie Awards 2021 cho giải pháp chuyển đổi số giáo dục ưu việt - giải thưởng hàng đầu thế giới về kinh doanh, tôn vinh và ghi nhận những thành tựu và đóng góp tích cực của các tổ chức và cá nhân trên toàn thế giới.",
    author: "Giải Vàng Stevie Awards Kinh doanh Quốc tế 2021",
  },
  {
    imgSrc: "/img/about/giai-thuong-2.jpg",
    title: "mobiEdu đạt giải thưởng Sao Khuê 2021 lĩnh vực Giáo dục, đào tạo do Hiệp hội Phần mềm & Dịch vụ CNTT Việt Nam VINASA trao tặng.",
    author: "Giải thưởng Sao Khuê 2021",
  },
  {
    imgSrc: "/img/about/giai-thuong-3.jpg",
    title: "Nền tảng giáo dục trực tuyến mobiEdu là công trình, đề tài sáng tạo tiêu biểu giai đoạn 2020 - 2021 do Đoàn TNCS Hồ Chí Minh khối Doanh ngiệp Trung Ương.",
    author: "Giải thưởng Công trình sáng tạo tiêu biểu 2020 - 2021",
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
