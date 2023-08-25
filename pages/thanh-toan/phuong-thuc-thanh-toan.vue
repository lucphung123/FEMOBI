<template>
  <div class="p-10 bg-color_11">
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
      <div class="w-370px h-10px absolute bg-blue-500 -translate-y-2/4 rounded-50px top-2/4"></div>
      <li class="relative leading-6 text-center z-5">
        <div class="flex justify-center items-center w-30px h-30px bg-color_10 text-color_9 font-bold text-lg rounded-50%">3</div>
        <div class="absolute -translate-x-2/4 w-72px text-color_7 font-normal mt-2 text-sm leading-18px text-center left-2/4"><a>Hoàn tất</a></div>
      </li>
    </ul>
    <div class="flex mt-20 w-full">
      <div class="w-80% mr-10">
        <div class="bg-white rounded-lg p-10">
          <p class="font-bold text-lg pb-[15px] border-b">Lựa chọn hình thức thanh toán</p>
          <div v-for="(paymentOption, index) in paymentOptions" :key="index" class="flex mt-5 h-15">
            <div class="flex border-r pr-5 gap-5 justify-center items-center w-1/5">
              <input class="w-5 h-5" type="radio" :name="'paymentOption' + index" :id="'paymentOption' + index" />
              <img :src="paymentOption.image" alt="" />
            </div>
            <div class="ml-5">
              <p class="text-16px text-color_6 leading-25px font-bold">{{ paymentOption.title }}</p>
              <div class="text-14px text-color_9 font-400 leading-18px">
                <p>{{ paymentOption.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-10 gap-5">
          <nuxt-link to="/thanh-toan/thong-tin-thanh-toan">
            <button class="hover:bg-color_5 h-10 hover:text-color_6 font-bold w-30 bg-white text-color_4 border-color_4 border px-20px py-1 rounded-5">QUAY LẠI</button>
          </nuxt-link>
          <nuxt-link to="/thanh-toan/thanh-toan-hoan-tat">
            <button class="hover:bg-color_5 hover:text-color_6 font-bold w-30 cursor-pointer bg-color_4 h-10 text-[white] text-sm px-20px py-1 rounded-5" type="submit">TIẾP TỤC</button>
          </nuxt-link>
        </div>
      </div>
      <div class="w-30% bg-white rounded-lg p-10">
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
// layouts
definePageMeta({
  layout: "course",
})
const totalAmount = ref(0)
const discount = 0
const paymentOptions = ref([
  {
    title: "Thanh toán bằng thẻ ATM, internet banking",
    description: "Bạn cần có tài khoản Internet banking để tiến hành thanh toán.",
    image: "/img/cart/payment/atm.png",
  },
  {
    title: "Thanh toán bằng thẻ quốc tế",
    description: "Hỗ trợ Credit và Debit. Bạn sẽ được chuyển tới cổng Onepay để thanh toán.",
    image: "/img/cart/payment/visa.png",
  },
  {
    title: "Thanh toán bằng mã QR",
    description: "Bạn cần cài đặt ứng dụng ngân hàng hoặc ví điện tử có chức năng thanh toán QR Code.",
    image: "/img/cart/payment/qr.png",
  },
  {
    title: "Thanh toán bằng ví điện tử MOMO",
    description: "Bạn cần tải và cài đặt ứng dụng Momo trên điện thoại và sử dụng để quét mã QR để thanh toán.",
    image: "/img/cart/payment/momo.png",
  },
])
const courseItems = ref([
  { id: 1, name: "108 Tọa pháp Yoga - Bí mật trẻ mãi", price: 700000 },
  { id: 2, name: "Nhập môn cờ vua cho người mới bắt đầu", price: 900000 },
  { id: 3, name: "Nhập môn cờ vua cho người mới bắt đầu", price: 500000 },
])
//function
function formatCurrency(value) {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value)
}
for (const item of courseItems.value) {
  totalAmount.value += item.price
}
</script>
