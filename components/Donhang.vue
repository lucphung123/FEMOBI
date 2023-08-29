<template>
  <div class="grid grid-cols-4 gap-7">
    <div v-for="(product, index) in products" :key="index" class="mt-5">
      <NuxtLink to="/khoa-hoc/le"><img :src="product.imgSrc" alt=""  class="hover:scale-105 animate-ease"/></NuxtLink>
      <p class="h-5 mt-2 text-color_8 font-bold text-sm leading-5">
        {{ product.title }}
      </p>
      <p class="mt-2 text-color_7 text-sm leading-5">
        {{ product.author }}
      </p>
      <button class="hover:bg-color_5 hover:text-color_6 mt-3 bg-light-100cursor-pointer bg-color_4 h-10 text-[white] text-sm px-[20px] rounded-[20px] font-bold">VÀO HỌC</button>
    </div>
  </div>
</template>
<script setup>
const products = [
  {
    imgSrc: "/img/product/1.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
  },
  {
    imgSrc: "/img/product/2.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
  },
  {
    imgSrc: "/img/product/3.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
  },
  {
    imgSrc: "/img/product/1.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
  },
  {
    imgSrc: "/img/product/2.png",
    title: "Đọc sách siêu tốc",
    author: "Nguyễn Thanh Hằng",
  },
]
</script>
<style scoped></style>
