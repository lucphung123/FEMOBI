<template>
  <div class="w-full mt-5">
    <div class="relative mt-90 md:mt-20 lg:mt-36 xl:mt-180 mb-0">
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full bg-white bg-cover bg-top h-300 flex flex-col items-center">
        <div class="w-full lg:w-225 xl:(w-300 h-250px) 2xl:(w-340 h-280px) mx-auto flex-col items-center my-auto">
          <div class="flex gap-5">
            <div>
              <button class="bg-color_18 text-color_6 rounded-1 w-28 flex p-1 justify-between flex items-center hover:(bg-color_1 text-white)">
                <div class="i-mdi:chevron-left text-xl"></div>
                <p class="ml-2 mr-2 font-bold text-sm">Bài trước</p>
              </button>
            </div>
            <div>
              <button class="bg-color_17 text-white rounded-1 p-1 flex w-28 justify-between flex items-center hover:(bg-color_1 text-white)">
                <p class="mr-2 ml-2 font-bold text-sm">Bài sau</p>
                <div class="i-mdi:chevron-right text-xl"></div>
              </button>
            </div>
            <div class="flex ml-20% items-center">Tổng quan về cờ vua: các khái niệm cơ bản</div>
          </div>
          <div class="flex border rounded-xl mt-5">
            <div class="w-60% h-140">
              <video src="/img/video.mp4" type="video/mp4" controls poster="/img/course/img.jpg"></video>
            </div>
            <div class="w-40%"></div>
          </div>
          <div class="mt-5 flex justify-between">
            <div class="flex w-1/3 items-center">
              <div class="i-mdi:star text-color_5 text-3xl"></div>
              <div class="i-mdi:star text-color_5 text-3xl"></div>
              <div class="i-mdi:star text-color_5 text-3xl"></div>
              <div class="i-mdi:star-half-full text-color_5 text-3xl"></div>
              <div class="i-mdi:star-outline text-color_5 text-3xl"></div>
            </div>
            <div class="flex items-center">
              <div class="flex items-center justify-center gap-3">
                <img class="w-7 h-7" src="/img/course/playBtn.svg" />
                <div>Autoplay</div>
                <label class="flex items-center space-x-2 cursor-pointer mr-5">
                  <input type="checkbox" v-model="isChecked" class="hidden" />
                  <span class="w-14 h-8 bg-gray-400 rounded-full p-1 transition-transform duration-300 ease-in-out transform" :class="{ 'bg-green-500': isChecked }">
                    <span class="block w-6 h-6 bg-white rounded-full shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out" :class="{ 'translate-x-full': isChecked }"></span>
                  </span>
                </label>
                <div class="flex w-full">
                  <img class="w-7 h-7" src="/img/course/warning.svg" alt="Icon" />
                  <div class="ml-3">Báo lỗi</div>
                </div>
                <input class="bg-[white] w-full h-[50px] text-color_8 text-sm px-5 py-[5px] rounded-[5px] border border-color_2 outline-none" type="text" placeholder="Ghi chú cho bài học" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae et, eum, aspernatur, modi unde alias assumenda porro delectus minima recusandae?</div>
</template>

<script setup>
import { ref } from "vue"

// layouts
definePageMeta({
  layout: "course",
})
const isChecked = ref(false)
</script>
