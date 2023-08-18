<template>
  <div class="p-10">
    <div class="flex">
      <UserProfile class="w-20%" />
      <div class="w-80% bg-white border rounded-3 ml-10">
        <div class="p-5">
          <p
            class="text-[#004390] font-bold text-2xl leading-[45px] text-left mb-2.5"
          >
            Hồ sơ của tôi
          </p>
          <div class="flex">
            <div class="w-55%">
              <p class="font-bold text-lg pb-[15px] border-b">
                Thông tin cá nhân
              </p>
              <div class="flex mt-4 gap-3">
                <img class="w-25 h-25 object-cover" src="/img/4.png" alt="" />
                <p class="mt-9 text-[#1d1d1b] text-base leading-6 mb-1">
                  Họ và tên
                </p>
                <input
                  class="h-14 border rounded-2 mt-4 p-5 outline-none w-70"
                  placeholder="Nguyễn Văn A"
                  type="text"
                  value="Dương Tuấn Minh"
                />
              </div>
              <div class="flex mt-4">
                <p class="mt-4">Ngày sinh</p>
                <div>
                  <select
                    class="w-28 h-14 border ml-8 rounded-2"
                    v-model="selectedDay"
                  >
                    <option v-for="day in days" :key="day">{{ day }}</option>
                  </select>

                  <select
                    class="w-28 h-14 border ml-4 rounded-2"
                    v-model="selectedMonth"
                  >
                    <option v-for="(month, index) in months" :key="index">
                      {{ month }}
                    </option>
                  </select>

                  <select
                    class="w-28 h-14 border ml-4 rounded-2"
                    v-model="selectedYear"
                  >
                    <option v-for="year in years" :key="year">
                      {{ year }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="flex mt-4">
                <p>Giới tính</p>
                <div class="flex">
                  <label class="ml-15 items-center flex">
                    <input
                      type="radio"
                      class="w-5 h-5 mr-2"
                      v-model="selectedGender"
                      value="male"
                    />
                    Nam
                  </label>

                  <label class="ml-15 items-center flex">
                    <input
                      type="radio"
                      class="w-5 h-5 mr-2"
                      v-model="selectedGender"
                      value="female"
                    />
                    Nữ
                  </label>

                  <label class="ml-15 items-center flex">
                    <input
                      type="radio"
                      class="w-5 h-5 mr-2"
                      v-model="selectedGender"
                      value="other"
                    />
                    Khác
                  </label>
                </div>
              </div>
              <div class="mt-4">
                <button
                  class="cursor-pointer bg-[#004390] h-10 text-[white] font-bold text-sm px-[20px] py-2.5 rounded-[20px]"
                >
                  Lưu thay đổi
                </button>
              </div>
              <div class="mt-4">
                <p class="font-bold text-lg pb-[15px] border-b">Bảo mật</p>
              </div>
              <div class="mt-4 flex justify-between">
                <div class="flex items-center">
                  <div class="i-mdi:lock-outline text-3xl"></div>
                  <p class="ml-4">Đổi mật khẩu</p>
                </div>
              </div>
            </div>
            <div class="w-45% ml-20">
              <p class="font-bold text-lg pb-[15px] border-b">
                Số điện thoại và Email
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserProfile from "../../components/account/UserProfile.vue";
import { ref } from "vue";

const days = ref([...Array(31).keys()].map((day) => day + 1));
const months = ref([
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
]);
const years = ref([...Array(100).keys()].map((year) => 2023 - year)); // Thay 2023 bằng năm hiện tại

const selectedDay = ref(null);
const selectedMonth = ref(null);
const selectedYear = ref(null);

const selectedGender = ref(null);
</script>
