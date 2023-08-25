<template>
  <div class="p-10 bg-color_11">
    <ul class="flex relative justify-between items-center max-w-750px mx-auto my-0">
      <li class="relative leading-6 text-center z-5">
        <div class="flex justify-center items-center w-30px bg-color_2 h-30px text-white font-bold text-lg rounded-50%">1</div>
        <div class="absolute -translate-x-2/4 w-72px text-color_2 font-normal text-sm leading-18px text-center left-2/4"><a>Xác nhận thông tin</a></div>
      </li>
      <div class="w-740px h-10px bg-white absolute -translate-y-2/4 rounded-50px top-2/4"></div>
      <li class="relative leading-6 text-center z-5">
        <div class="flex justify-center items-center w-30px h-30px bg-color_10 text-color_9 font-bold text-lg rounded-50%">2</div>
        <div class="absolute -translate-x-2/4 w-72px text-color_7 font-normal text-sm leading-18px text-center left-2/4"><a>Thanh toán</a></div>
      </li>
      <div class="w-370px h-10px absolute bg-white -translate-y-2/4 rounded-50px top-2/4"></div>
      <li class="relative leading-6 text-center z-5">
        <div class="flex justify-center items-center w-30px h-30px bg-color_10 text-color_9 font-bold text-lg rounded-50%">3</div>
        <div class="absolute -translate-x-2/4 w-72px text-color_7 font-normal text-sm leading-18px text-center left-2/4"><a>Hoàn tất</a></div>
      </li>
    </ul>
    <div class="flex mt-20 w-full">
      <div class="w-60% mr-10">
        <div class="bg-white rounded-lg p-10">
          <p class="font-bold text-lg pb-[15px] border-b">Thông tin cá nhân</p>
          <div class="mt-5">
            <div class="flex justify-center items-center">
              <p class="w-25%">Họ và tên *</p>
              <input v-model="info.name" :class="{ 'cursor-not-allowed': !edit }" class="h-14 border rounded-2 p-5 outline-none w-full bg-color_11" placeholder="Họ và tên" type="text" :disabled="!edit" />
            </div>
            <div class="text-red-500 mt-2 italic text-sm" v-if="!info.name && hasSubmitted">Vui lòng nhập họ và tên !</div>
            <div class="flex mt-5 justify-center items-center">
              <p class="w-25%">Số điện thoại *</p>
              <input v-model="info.number_phone" :class="{ 'cursor-not-allowed': !edit }" class="h-14 border rounded-2 p-5 outline-none w-full bg-color_11" placeholder="Số điện thoại" type="text" :disabled="!edit" />
            </div>

            <div class="text-red-500 mt-2 italic text-sm" v-if="!info.number_phone && hasSubmitted">Vui lòng nhập số điện thoại !</div>
            <div class="flex mt-5 justify-center items-center">
              <p class="w-25%">Email *</p>
              <input v-model="info.email" :class="{ 'cursor-not-allowed': !edit }" class="h-14 border rounded-2 p-5 outline-none w-full bg-color_11" placeholder="Email" type="text" :disabled="!edit" />
            </div>
            <div class="text-red-500 mt-2 italic text-sm" v-if="!info.email && hasSubmitted">Vui lòng nhập email !</div>
            <div class="text-red-500 mt-2 italic text-sm" v-if="info.email && !isValidEmail(info.email)">Vui lòng nhập đúng định dạng email !</div>

            <button v-if="edit" @click="saveChanges" class="cursor-pointer w-40 mt-5 font-bold bg-color_4 hover:bg-color_5 hover:text-color_6 h-10 text-white text-sm px-20px py-2.5 rounded-20px">LƯU THAY ĐỔI</button>
            <div v-else class="mt-5 text-sm decoration-underline text-color_4 cursor-pointer" @click="toggleEdit">Sửa thông tin</div>
          </div>
        </div>
        <div class="flex justify-center mt-10 gap-5">
          <nuxt-link to="/gio-hang">
            <button class="hover:bg-color_5 h-10 hover:text-color_6 font-bold w-30 bg-white text-color_4 border-color_4 border px-20px py-1 rounded-5">QUAY LẠI</button>
          </nuxt-link>
          <nuxt-link to="/thanh-toan/phuong-thuc-thanh-toan">
            <button class="hover:bg-color_5 hover:text-color_6 font-bold w-30 cursor-pointer bg-color_4 h-10 text-[white] text-sm px-20px py-1 rounded-5" type="submit">TIẾP TỤC</button>
          </nuxt-link>
        </div>
      </div>
      <div class="w-37% bg-white rounded-lg p-10">
        <div class="pb-[15px] border-b justify-between flex">
          <p class="font-bold text-lg">Thông tin đơn hàng</p>
          <nuxt-link to="/gio-hang">
            <p>Sửa</p>
          </nuxt-link>
        </div>
        <div v-for="(item, index) in courseItems" :key="item.id" class="pb-[15px] border-b justify-between flex mt-5 text-xs">
          <p class="text-color_6 font-normal">{{ item.name }}</p>
          <p class="flex-1 text-color_4 font-bold text-right">{{ formatCurrency(item.price) }}</p>
        </div>
        <div class="text-15px text-color_6 justify-between flex mt-5">
          <p class="font-normal">Tổng tiền hàng</p>
          <p class="flex-1 text-right">{{ formatCurrency(totalAmount) }}</p>
        </div>
        <div class="text-15px text-color_6 justify-between flex mt-5">
          <p class="font-normal">Giảm giá khuyến mại</p>
          <p class="flex-1 text-right">{{ formatCurrency(discount) }}</p>
        </div>
        <div class="text-15px text-color_6 justify-between flex mt-5">
          <p class="font-bold text-lg">Tổng thanh toán</p>
          <p class="text-color_4 font-bold text-right">{{ formatCurrency(totalAmount - discount) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"

// const
const hasSubmitted = ref(false)
const edit = ref(false)
const totalAmount = ref(0)
const discount = 0
const info = reactive({
  name: "",
  email: "",
  number_phone: "",
})
const courseItems = ref([
  { id: 1, name: "108 Tọa pháp Yoga - Bí mật trẻ mãi", price: 700000 },
  { id: 2, name: "Nhập môn cờ vua cho người mới bắt đầu", price: 900000 },
  { id: 3, name: "Nhập môn cờ vua cho người mới bắt đầu", price: 500000 },
])
//function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
function toggleEdit() {
  edit.value = !edit.value
}

function saveChanges() {
  hasSubmitted.value = true
  let hasError = false

  if (!info.name.value) {
    hasError = true
  }

  if (!info.number_phone.value) {
    hasError = true
  }

  if (!info.email.value) {
    hasError = true
  } else if (!isValidEmail(info.email.value)) {
    hasError = true
  }
  if (info.name && info.number_phone && info.email && isValidEmail(info.email)) {
    toggleEdit()
    return
  }
}
function formatCurrency(value) {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value)
}
for (const item of courseItems.value) {
  totalAmount.value += item.price
}
</script>
