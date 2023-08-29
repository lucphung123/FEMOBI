<template>
  <div class="w-full">
    <p class="flex justify-center text-color_4 text-7 font-bold py-5">LIÊN HỆ</p>
    <div class="flex">
      <div class="w-35% flex">
        <div class="w-1/2">
          <div class="bg-white h-40 w-40 flex items-center justify-center rounded-3xl ml-16 ease-in-out delay-50 hover:-translate-y-3 duration-200 hover:(bg-color_16) shadow-xl">
            <div>
              <div class="i-mdi:phone text-color_4 text-5xl ml-8 mb-3"></div>
              <p class="text-5">0777.202020</p>
            </div>
          </div>
          <div class="bg-white h-60 w-56 flex items-center justify-center rounded-3xl mt-6 ease-in-out delay-50 hover:-translate-y-3 duration-200 hover:(bg-color_16) shadow-xl">
            <div>
              <div class="i-mdi:email text-color_1 text-8xl ml-12"></div>
              <p class="text-5">contact@mobiedu.vn</p>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <div class="bg-white h-50 w-50 flex items-center justify-center rounded-3xl ml-5 mt-15 ease-in-out delay-50 hover:-translate-y-3 duration-200 hover:(bg-color_16) shadow-xl">
            <div>
              <div class="i-mdi:facebook text-color_4 text-7xl ml-4 mb-3"></div>
              <p class="text-5">mobiEdu.vn</p>
            </div>
          </div>
          <div class="bg-white h-40 w-40 flex items-center justify-center rounded-3xl ml-5 mt-6 ease-in-out delay-50 hover:-translate-y-3 duration-200 hover:(bg-color_16) shadow-xl">
            <div>
              <div class="i-mdi:youtube text-color_1 text-5xl ml-5 mb-3"></div>
              <p class="text-5">mobi Edu</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-65% ml-5">
        <Slide6 />
      </div>
    </div>
  </div>
</template>

<script setup>
import Slide6 from "../components/Slide6.vue"
// layouts
definePageMeta({
  layout: "course",
})
</script>
