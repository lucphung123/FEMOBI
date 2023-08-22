<template>
  <div class="p-10 bg-#EFEFEF">
    <div class="flex">
      <UserProfile class="w-25%" />
      <div class="w-75% bg-white border rounded-3 ml-10 h-80">
        <div class="p-10">
          <p class="text-color_4 font-bold text-2xl leading-[45px] text-left mb-2.5">Kích hoạt khóa học</p>
          <div class="text-center px-45">
            <div>Bạn hãy nhập <b>mã kích hoạt</b> được nhận qua email để kích hoạt khóa học đã mua và bắt đầu trải nghiệm học tập trên mobiEdu nhé</div>
            <input class="bg-[white] w-60% h-[50px] text-color_8 text-sm px-5 py-[5px] rounded-[5px] border border-color_2 outline-none mt-5" type="text" placeholder="NHẬP MÃ KÍCH HOẠT, Ví dụ: 130E3157B8" />
            <br />
            <button class="hover-bg-color_5 hover-text-color_6 mt-5 bg-light-100cursor-pointer bg-color_4 h-10 text-[white] text-sm px-[20px] rounded-[20px] font-bold">KÍCH HOẠT NGAY</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserProfile from "../../components/account/UserProfile.vue"
</script>
