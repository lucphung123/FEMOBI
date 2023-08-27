<template>
  <div class="flex text-color_7 py-5 font-normal text-4 leading-4 items-center gap-2">
    <nuxt-link to="/">Trang chủ</nuxt-link>
    <div class="i-mdi:chevron-right text-xl"></div>
    <p class="font-bold">Kết quả tìm kiếm</p>
  </div>
  <div class="flex gap-5">
    <div class="w-30%">
      <div class="flex sticky flex-col transition duration-[all] ease-[ease-in-out] w-full top-30">
        <div class="text-20px flex gap-2">
          <p>Có</p>
          <p class="text-color_13 font-bold">70</p>
          <p>kết quả được tìm thấy cho</p>
        </div>
        <p class="text-color_13 font-bold">"a"</p>
        <div :class="['text-white cursor-pointer w-60% text-xl mt-5 px-5 py-3 font-bold rounded-lg', course ? 'bg-color_4' : 'bg-color_10 text-black hover:(bg-color_4 text-white)']" @click="showCourse">Khóa học</div>
        <div :class="['text-white cursor-pointer w-60% text-xl mt-5 px-5 py-3 font-bold rounded-lg', !course ? 'bg-color_4' : 'bg-color_10 text-black hover:(bg-color_4 text-white)']" @click="showNews">Tin tức</div>
      </div>
    </div>
    <div v-if="course" class="w-85%">
      <p class="text-color_4 font-bold text-8">KHÓA HỌC</p>
      <div class="grid grid-cols-4 gap-5">
        <div v-for="(product, index) in products" :key="index">
          <div>
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
        </div>
      </div>
    </div>
    <div v-else class="w-85%">
      <p class="text-color_4 font-bold text-8">TIN TỨC</p>
      <div class="justify-center flex">
        <img src="/img/notFound.png" alt="" />
      </div>
      <p class="text-center mt-5 text-color_9 text-8">Không tìm thấy kết quả phù hợp</p>
      <p class="text-center text-color_6 text-5 mt-5 font-bold">Bạn chưa tìm kiếm được thông tin mong muốn? Liên hệ với chúng tôi để được hỗ trợ</p>
      <div class="flex mt-10 gap-5 justify-center">
        <div @click="showModal = true" class="cursor-pointer p-3 bg-color_13 rounded-lg">
          <div class="i-mdi:phone text-white text-5xl"></div>
        </div>
        <div @click="showModalForm = true" class="cursor-pointer p-3 bg-color_5 rounded-lg">
          <div class="i-mdi:email-outline text-white text-5xl"></div>
        </div>
        <div class="cursor-pointer p-3 bg-color_2 rounded-lg flex justify-center px-4">
          <img src="/img/icon/zalo-30.png" class="w-40px h-40px" alt="" />
        </div>
        <div class="cursor-pointer p-3 bg-color_4 rounded-lg">
          <div class="i-mdi:facebook text-white text-5xl"></div>
        </div>
      </div>
      <div v-if="showModal">
        <div class="fixed flex justify-center bg-[#000000da] inset-0 z122">
          <div class="text-center bg-[white] h-40 w-150 mt-50 rounded-[20px]">
            <div class="mt-10 ml-22 w-70%">
              <a href="tel:0123456789" class="text-color_13 cursor-pointer font-bold text-8 border-dashed border-color_13 border-1">Hotline: 0123456789</a>
            </div>
            <p class="mt-5">Từ 7h-00 đến 21h00 các ngày trong tuần</p>
          </div>
          <div class="cursor-pointer mt-42">
            <div class="i-mdi:close text-white text-3xl" @click="closeModal"></div>
          </div>
        </div>
      </div>
      <div v-if="showModalForm">
        <div class="fixed flex justify-center bg-[#000000da] inset-0 z122 overflow-y-auto">
          <div class="bg-[white] h-160 w-150 mt-20 rounded-[20px] p-10">
            <img class="ml-40" src="/img/logo.png" alt="" />
            <p class="mt-4">Họ tên *</p>
            <input class="bg-[white] w-full h-[50px] text-color_8 text-sm px-5 mt-1 py-[5px] rounded-[5px] border border-color_2 outline-none" type="text" placeholder="Nhập Họ và tên" />
            <p class="mt-2">Số điện thoại</p>
            <input class="bg-[white] w-full h-[50px] text-color_8 text-sm px-5 mt-1 py-[5px] rounded-[5px] border border-color_2 outline-none" type="text" placeholder="Nhập số điện thoại" />
            <p class="mt-2">Email *</p>
            <input class="bg-[white] w-full h-[50px] text-color_8 text-sm px-5 mt-1 py-[5px] rounded-[5px] border border-color_2 outline-none" type="text" placeholder="Nhập Email" />
            <p class="mt-2">Vấn đề đang gặp phải</p>
            <input class="bg-[white] w-full h-[50px] text-color_8 text-sm px-5 mt-1 py-[5px] rounded-[5px] border border-color_2 outline-none" type="text" />
            <p class="mt-2">Nội dung câu hỏi</p>
            <textarea class="border border-color_2 w-full h-30"></textarea>
            <div class="flex items-center justify-center">
              <button class="hover:bg-color_5 h-10 mt-8 hover:text-color_6 font-bold w-30 text-white bg-color_4 px-20px py-1 rounded-5">Gửi</button>
            </div>
          </div>
          <div class="cursor-pointer mt-13">
            <div class="i-mdi:close text-white text-3xl" @click="closeModalForm"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const showModal = ref(false)
const showModalForm = ref(false)
const course = ref(true)
const showCourse = () => {
  course.value = true
}

const showNews = () => {
  course.value = false
}
const closeModal = () => {
  showModal.value = false
}
const closeModalForm = () => {
  showModalForm.value = false
}
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
