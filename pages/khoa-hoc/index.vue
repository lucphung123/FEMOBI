<template>
  <div class="w-full lg:px-0 flex flex-col">
    <div class="relative mt-80 md:mt-20 lg:mt-36 xl:mt-90">
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full bg-color_11 flex flex-col items-center">
        <div class="w-full lg:w-225 xl:(w-300 h-full) 2xl:(w-340 h-full) mx-auto my-auto">
          <div class="w-1/5">
            <div class="flex space-x-4 my-5">
              <nuxt-link to="/" class="text-gray-400">Trang chủ</nuxt-link>
              <p class="font-bold text-gray-500">></p>
              <p class="font-bold text-gray-500">khoá học</p>
            </div>
            <div class="space-y-5">
              <div class="flex items-center text-color_4 space-x-2 border-b pb-3">
                <div class="i-mdi:format-list-bulleted text-2xl"></div>
                <div class="font-bold text-xl">DANH MỤC KHOÁ HỌC</div>
              </div>
              <div class="space-y-5">
                <div>
                  <p class="font-bold text-lg text-color_4 mx-8">Tất cả</p>
                </div>
                <hr />
                <div>
                  <p class="text-#333333 text-lg mx-8">Trẻ em</p>
                </div>
                <hr />
                <div>
                  <p class="text-#333333 text-lg mx-8">Học sinh phổ thông</p>
                </div>
                <hr />
                <div>
                  <p class="text-#333333 text-lg mx-8">Sinh viên và người đi làm</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// layouts
definePageMeta({
  layout: "course",
})
</script>
