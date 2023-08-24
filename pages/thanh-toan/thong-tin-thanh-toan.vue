<template>
  <div class="bg-red-700 p-10 px-50">
    <ul class="flex relative justify-between items-center max-w-750px mx-auto my-0">
      <li class="relative leading-6 text-center z-5">
        <div class="flex justify-center items-center w-[30px] bg-blue h-[30px] text-white font-bold text-lg rounded-[50%]">1</div>
        <div class="absolute -translate-x-2/4 w-72px text-[#21a6f1] font-normal text-sm leading-18px text-center left-2/4"><a>Xác nhận thông tin</a></div>
      </li>
      <div class="stepper"></div>
      <li class="relative leading-6 text-center z-5">
        <div class="flex justify-center items-center w-[30px] h-[30px] bg-#E5E5E5 text-[#666666] font-bold text-lg rounded-[50%]">2</div>
        <div class="absolute -translate-x-2/4 w-72px text-[#999999] font-normal text-sm leading-18px text-center left-2/4"><a>Thanh toán</a></div>
      </li>
      <div class="stepper"></div>
      <li class="relative leading-6 text-center z-5">
        <div class="flex justify-center items-center w-[30px] h-[30px] bg-#E5E5E5 text-[#666666] font-bold text-lg rounded-[50%]">3</div>
        <div class="absolute -translate-x-2/4 w-72px text-[#999999] font-normal text-sm leading-18px text-center left-2/4"><a>Hoàn tất</a></div>
      </li>
    </ul>
  </div>
</template>

<script setup></script>
<style>
.stepper {
  width: 730px;
  height: 20px;
  background-color: #e5e5e5;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50px;
}
</style>
