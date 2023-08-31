<template>
  <div class="w-full mt-5">
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
      <div class="w-60% h-150">
        <video src="/img/video.mp4" type="video/mp4" controls poster="/img/course/img.jpg"></video>
      </div>
      <div class="w-40% bg-blue"></div>
    </div>
  </div>
</template>

<script setup>
// layouts
</script>
