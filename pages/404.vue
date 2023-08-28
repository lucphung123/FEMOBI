<template>
  <div class="flex mt-10">
    <div class="w-1/2">
      <Logo404 />
    </div>
    <div class="w-1/2 mt-30 ml-30">
      <p class="text-color_4 text-8 font-bold">Rất tiếc, không tìm thấy trang</p>
      <p class="text-5">Trang này không tồn tại hoặc bị lỗi do đường link không chính xác</p>
      <p class="text-5">Bạn vui lòng kiểm tra lại đường truyền và thử lại ở các gợi ý khác:</p>
      <div class="mt-7 flex gap-5">
        <p class="bg-color_11 px-5 text-color_4 h-8 p-1 rounded-3xl cursor-pointer hover:(bg-color_4 text-white)">Tra cứu điểm thi</p>
        <p class="bg-color_11 px-5 text-color_4 h-8 p-1 rounded-3xl cursor-pointer hover:(bg-color_4 text-white)">MobiFone</p>
        <p class="bg-color_11 px-5 text-color_4 h-8 p-1 rounded-3xl cursor-pointer hover:(bg-color_4 text-white)">kỹ năng</p>
      </div>
      <div class="relative mt-10">
        <input class="bg-white w-70% h-15 border text-color_8 px-10 py-5 text-xl rounded-3xl outline-none" type="text" placeholder="Tìm nhanh" />
        <div class="absolute right-50 top-1/2 transform -translate-y-1/2">
          <div class="i-mdi:magnify text-2xl text-color_4 cursor-pointer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo404 from "../components/icon/Logo404.vue"
</script>
