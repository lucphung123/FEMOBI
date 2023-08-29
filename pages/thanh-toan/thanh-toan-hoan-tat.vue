<template>
  <div class="p-10 w-full">
    <ul class="flex relative justify-between items-center max-w-750px mx-auto my-0">
      <li class="relative leading-6 text-center z-5">
        <div class="flex justify-center items-center w-30px bg-color_2 h-30px text-white font-bold text-lg rounded-50%">1</div>
        <div class="absolute -translate-x-2/4 w-72px text-color_2 mt-2 font-normal text-sm leading-18px text-center left-2/4"><a>Xác nhận thông tin</a></div>
      </li>
      <div class="w-740px h-10px bg-white absolute -translate-y-2/4 rounded-50px top-2/4"></div>
      <li class="relative leading-6 text-center z-5">
        <div class="flex justify-center items-center w-30px h-30px text-white bg-color_2 font-bold text-lg rounded-50%">2</div>
        <div class="absolute -translate-x-2/4 w-72px text-color_2 mt-2 font-normal text-sm leading-18px text-center left-2/4"><a>Thanh toán</a></div>
      </li>
      <div class="w-740px h-10px absolute bg-blue-500 -translate-y-2/4 rounded-50px top-2/4"></div>
      <li class="relative leading-6 text-center z-5">
        <div class="flex justify-center items-center w-30px h-30px bg-color_2 text-white font-bold text-lg rounded-50%">3</div>
        <div class="absolute -translate-x-2/4 w-72px text-color_2 font-normal mt-2 text-sm leading-18px text-center left-2/4"><a>Hoàn tất</a></div>
      </li>
    </ul>
    <div class="flex mt-20 w-full gap-5">
      <div class="w-90% bg-white rounded-lg p-10 h-80">
        <div class="flex justify-center items-center">
          <div class="flex justify-center items-center h-9 w-9 rounded-full border">
            <div class="i-mdi:check text-color_4 text-3xl"></div>
          </div>
        </div>
        <div class="mt-5 text-center">
          <p class="text-color_4 font-bold text-xl leading-[26px] mt-2.5 mb-5">Mua khóa học thành công</p>
          <p class="text-black font-normal text-base leading-6">Bạn đã mua thành công khóa học Combo khóa học Anh văn giao tiếp trên mobiEdu</p>
          <div class="flex text-center justify-center mt-5">
            <p class="italic">Mã đơn hàng:</p>
            <div class="text-color_4 not-italic font-bold">MS-12345</div>
          </div>
          <div class="mt-5">
            <button class="hover:bg-color_5 mr-5 h-10 hover:text-color_6 font-bold w-50 bg-white text-color_4 border-color_4 border px-20px py-1 rounded-5">KHÓA HỌC CỦA TÔI</button>
            <button class="hover:bg-color_5 hover:text-color_6 font-bold w-50 cursor-pointer bg-color_4 h-10 text-[white] text-sm px-20px py-1 rounded-5" type="submit">ĐƠN HÀNG CỦA TÔI</button>
          </div>
        </div>
      </div>
      <img class="rounded-lg" src="/img/cart/payment/img.png" alt="" />
    </div>
  </div>
</template>

<script setup>
// layouts
definePageMeta({
  layout: "course",
})
</script>
