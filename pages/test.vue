<template>
  <div class="fixed flex justify-center bg-[#000000da] inset-0 z122" @click="$emit('close-modal')">
    <div class="text-center bg-[white] h-40 w-150 mt-50 rounded-[20px]">
      <p class="font-medium text-lg mt-10">Bạn có chắc muốn xóa chủ đề này</p>
      <div class="mt-5">
        <button class="justify-center bg-color_10 h-11 w-40 text-color_4 text-sm px-[20px] rounded-[20px] font-bold">XÓA CHỦ ĐỀ</button>
        <button class="hover:bg-color_5 hover:text-color_6 justify-center ml-5 bg-color_4 h-11 w-23 text-[white] text-sm px-[20px] rounded-[20px] font-bold">HỦY</button>
      </div>
    </div>
    <div class="cursor-pointer mt-42">
      <div class="i-mdi:close text-white text-3xl"></div>
    </div>
  </div>
</template>
