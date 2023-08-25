<template>
  <div class="p-10 bg-color_11">
    <div class="flex">
      <div class="w-25%">
        <UserProfile />
      </div>
      <div v-if="noCourse" class="w-75% bg-white border h-130 rounded-3 ml-10">
        <div class="p-10">
          <p class="text-color_4 text-9 leading-normal mr-0.5">Khóa học của tôi</p>
          <div class="flex justify-center mt-15">
            <img src="/img/noFile.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="w-80% bg-white border rounded-3 ml-10">
        <div class="p-10">
          <p class="text-color_4 text-9 leading-normal mr-0.5">Khóa học của tôi</p>
          <div class="grid grid-cols-4 gap-7">
            <div v-for="(product, index) in products" :key="index" class="mt-5">
              <img :src="product.imgSrc" alt="" />
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserProfile from "~~/components/account/UserProfile.vue"
const products = [
  {
    imgSrc: "/img/product/1.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
    price: "5000 đ/ngày",
  },
  {
    imgSrc: "/img/product/2.png",
    title: "Làm giàu",
    author: "Đỗ Trung Thành",
    price: "15000 đ/ngày",
  },
  {
    imgSrc: "/img/product/3.png",
    title: "Bí kíp thi đại học",
    author: "Dương Tuấn Minh",
    price: "15.000.000đ",
  },
  {
    imgSrc: "/img/product/1.png",
    title: "Kiếm tiền cả đêm",
    author: "Phùng Tiến lực",
    price: "5000 đ/ngày",
  },
  {
    imgSrc: "/img/product/2.png",
    title: "Code siêu tốc",
    author: "Nguyễn Tâm Thành",
    price: "5000 đ/ngày",
  },
]
</script>
