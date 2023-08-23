<template>
  <div class="p-10">
    <div class="flex">
      <p class="mr-2">Giỏ hàng:</p>
      {{}}
      <p class="mr-2">sản phẩm,</p>
      {{}}
      <p>đ</p>
    </div>
    <div class="bg-red w-80% flex rounded-lg p-5">
      <div class="flex items-center cursor-pointer text-16px text-color_6">
        <input type="checkbox" />
        <p class="ml-2">Sản phẩm ({{}} sản phẩm)</p>
      </div>
      <p class="ml-52%">Giá</p>
      <div></div>
    </div>
    <div class="bg-red w-80% rounded-lg p-5 mt-5">
      <div class="flex border-b pb-5">
        <div class="gap-3 flex">
          <input type="checkbox" />
          <img src="/img/course1/Tieng-anh.png" alt="" />
        </div>
        <div class="flex ml-10 justify-between w-full">
          <p class="text-color_8 text-14px leading-4.5 font-medium">108 Tọa pháp Yoga - Bí mật trẻ mãi</p>
          <p class="">700.000đ</p>
          <div class="flex">
            <div class="i-mdi-trash text-2xl"></div>
            <p class="ml-2">Xóa</p>
          </div>
        </div>
      </div>
      <div class="flex mt-5">
        <div class="gap-3 flex">
          <input type="checkbox" />
          <img src="/img/course1/Tieng-anh.png" alt="" />
        </div>
        <div class="flex ml-10 justify-between w-full">
          <p class="text-color_8 text-14px leading-4.5 font-medium">108 Tọa pháp Yoga - Bí mật trẻ mãi</p>
          <p class="">700.000đ</p>
          <div class="flex">
            <div class="i-mdi-trash text-2xl"></div>
            <p class="ml-2">Xóa</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
