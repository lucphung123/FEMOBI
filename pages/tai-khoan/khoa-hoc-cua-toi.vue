<template>
  <div class="p-10 bg-#EFEFEF">
    <div class="flex">
      <div class="w-25%">
        <UserProfile />
        <div class="bg-white rounded-3 p-5 mt-10">
          <div class="flex border-b pb-4">
            <div class="i-mdi:filter-outline text-2xl bg-color_4"></div>

            <p class="text-color_4 text-4 font-600 mr-[13px]">BỘ LỌC TÌM KIẾM</p>
          </div>
          <div class="mt-3 border-b pb-4">
            <p class="text-color_8 font-550 text-base leading-6 uppercase">Loại khóa học</p>
            <div class="mt-2">
              <input class="h-4 w-4" type="checkbox" v-model="isChecked" />
              <label class="cursor-pointer text-color_7 text-sm leading-5 mb-0 pl-[15px]" for="checkbox">Khóa học lẻ 1</label>
            </div>
            <div class="mt-2">
              <input class="h-4 w-4" type="checkbox" v-model="isChecked" />
              <label class="cursor-pointer text-color_7 text-sm leading-5 mb-0 pl-[15px]" for="checkbox">Khóa học lẻ 2</label>
            </div>
            <div class="mt-2">
              <input class="h-4 w-4" type="checkbox" v-model="isChecked" />
              <label class="cursor-pointer text-color_7 text-sm leading-5 mb-0 pl-[15px]" for="checkbox">Khóa học lẻ 3</label>
            </div>
          </div>
          <div class="mt-3">
            <p class="text-color_8 font-550 text-base leading-6 uppercase">Chủ đề</p>
            <div class="mt-2">
              <input class="h-4 w-4" type="checkbox" v-model="isChecked" />
              <label class="cursor-pointer text-color_7 text-sm leading-5 mb-0 pl-[15px]" for="checkbox">Chủ đề 1</label>
            </div>
            <div class="mt-2">
              <input class="h-4 w-4" type="checkbox" v-model="isChecked" />
              <label class="cursor-pointer text-color_7 text-sm leading-5 mb-0 pl-[15px]" for="checkbox">Chủ đề 2</label>
            </div>
            <div class="mt-2">
              <input class="h-4 w-4" type="checkbox" v-model="isChecked" />
              <label class="cursor-pointer text-color_7 text-sm leading-5 mb-0 pl-[15px]" for="checkbox">Chủ đề 3</label>
            </div>
            <div class="mt-2">
              <input class="h-4 w-4" type="checkbox" v-model="isChecked" />
              <label class="cursor-pointer text-color_7 text-sm leading-5 mb-0 pl-[15px]" for="checkbox">Chủ đề 4</label>
            </div>
          </div>
          <div class="flex">
            <button @click="showCourse" class="hover:bg-color_5 hover:text-color_6 mt-3 cursor-pointer bg-color_4 h-7 text-[white] text-sm px-[20px] rounded-[20px] font-bold">Áp dụng</button>
            <button class="hover:bg-color_5 hover:text-color_6 mt-3 bg-[#E5E5E5] cursor-pointer h-7 text-color_6 text-sm px-[20px] rounded-[20px] ml-3">Xóa</button>
          </div>
        </div>
      </div>
      <!-- <div @click="showCourse">Minh</div> -->
      <div v-if="noCourse" class="w-75% bg-white border h-130 rounded-3 ml-10">
        <div class="p-10">
          <p class="text-color_4 text-9 leading-normal mr-0.5">Khóa học của tôi</p>
          <div class="flex justify-center mt-15">
            <img src="/img/noFile.svg" alt="" />
          </div>
          <div class="flex justify-center mt-5 leading-5 text-xl font-medium py-6">
            <p>Bạn chưa có khóa học nào. Vui lòng mua khóa học</p>
            <a class="ml-2 text-color_4 font-bold" href="">tại đây</a>
            !
          </div>
        </div>
      </div>
      <div v-else class="w-75% bg-white border rounded-3 ml-10">
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
              <button class="hover:bg-color_5 hover:text-color_6 mt-3 bg-light-100cursor-pointer bg-color_4 h-10 text-[white] text-sm px-[20px] rounded-[20px] font-bold">VÀO HỌC</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserProfile from "../../components/account/UserProfile.vue"
const noCourse = ref(false)
const showCourse = () => {
  noCourse.value = !noCourse.value
}
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
