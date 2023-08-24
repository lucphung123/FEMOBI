<template>
  <div class="p-10 bg-color_11">
    <div class="flex">
      <div class="w-25%">
        <UserProfile />
      </div>
      <div class="w-75% bg-white border rounded-3 ml-10">
        <div class="p-10">
          <p class="text-color_4 text-9 leading-normal mr-0.5">Khóa học của tôi</p>
          <div v-if="displayedItems.length === 0">
            <div class="flex justify-center mt-15">
              <img src="/img/noFile.svg" alt="" />
            </div>
            <div class="flex justify-center mt-5 leading-5 text-xl font-medium py-6">
              <p>Bạn chưa có đơn hàng nào!</p>
            </div>
          </div>
          <div v-else>
            <div v-for="item in displayedItems" :key="item.id" class="border rounded-lg mt-5">
              <div class="bg-#E3EFF9 h-15 rounded-t-2 flex justify-between items-center px-10">
                <div class="flex">
                  <p class="text-sm italic">Mã đơn hàng:</p>
                  <div class="text-color_4 not-italic font-bold text-sm">{{ item.orderCode }}</div>
                </div>
                <div class="flex text-sm italic">
                  <p>Đặt hàng:</p>
                  <div>{{ item.orderTime }}</div>
                </div>
                <div class="flex text-sm italic">
                  <p>Thanh toán:</p>
                  <div>{{ item.paymentTime }}</div>
                </div>
              </div>
              <div class="p-5">
                <div class="border-b flex pb-5">
                  <div class="relative">
                    <img class="h-25 rounded-lg" :src="item.imageSrc" alt="" />
                    <p class="absolute top-2 left-2 px-1 bg-color_1 text-white text-12px">-50%</p>
                    <div class="flex absolute top-2 left-29 bg-#1D1D1B80 px-1 items-center">
                      <div class="i-mdi:star-outline text-yellow-500 mr-1"></div>
                      <p class="text-white text-12px">4.8</p>
                    </div>
                  </div>
                  <div class="mr-5 ml-5">
                    <div class="font-bold text-16px leading-7 text-ellipsis">
                      <p>{{ item.courseName }}</p>
                    </div>
                    <p class="text-color_4 font-bold text-sm leading-5">{{ item.price }}</p>
                    <p class="text-color_7 text-sm leading-5 line-through">{{ item.originalPrice }}</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="h-15 rounded-t-2 -mt-5 flex justify-between items-center px-10">
                  <div class="flex">
                    <p class="text-color_9 text-sm mr-1">Trạng thái:</p>
                    <div class="text-color_6 font-bold">{{ item.status }}</div>
                  </div>
                  <div class="flex">
                    <p class="text-color_9 text-sm mr-1">Hình thức thanh toán:</p>
                    <div class="text-color_6 font-bold">{{ item.paymentMethod }}</div>
                  </div>
                  <div class="flex font-medium text-xl leading-[26px]">
                    <p class="text-color_9 mr-1">Tổng tiền:</p>
                    <div class="text-color_4">{{ item.totalAmount }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="displayedItems.length > 0" class="flex items-center justify-center gap-10 mt-5">
            <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
              <div class="i-mdi:chevron-left text-3xl"></div>
            </button>
            <button class="bg-none" v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="{ active: currentPage === page }">{{ page }}</button>
            <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"><div class="i-mdi:chevron-right text-3xl"></div></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserProfile from "../../components/account/UserProfile.vue"
const items = ref([
  {
    id: 1,
    orderCode: "MS-123456",
    orderTime: "15:00:00 03/10/2021",
    paymentTime: "15:00:00 03/10/2021",
    imageSrc: "/img/1.jpg",
    courseName: "Combo khóa học Anh văn giao tiếp combo khóa học Anh văn giao tiếp",
    price: "18.000.000đ",
    originalPrice: "20.000.000đ",
    status: "Miễn phí",
    paymentMethod: "Online",
    totalAmount: "0đ",
  },
  {
    id: 2,
    orderCode: "MS-123456",
    orderTime: "15:00:00 03/10/2021",
    paymentTime: "15:00:00 03/10/2021",
    imageSrc: "/img/5.jpg",
    courseName: "Học code để code ra web đang dùng",
    price: "20.000.000đ",
    originalPrice: "40.000.000đ",
    status: "Miễn phí",
    paymentMethod: "Online",
    totalAmount: "20.000.000đ",
  },
  {
    id: 3,
    orderCode: "MS-123456",
    orderTime: "15:00:00 03/10/2021",
    paymentTime: "15:00:00 03/10/2021",
    imageSrc: "/img/5.jpg",
    courseName: "Học code để code ra web đang dùng",
    price: "20.000.000đ",
    originalPrice: "40.000.000đ",
    status: "Miễn phí",
    paymentMethod: "Online",
    totalAmount: "20.000.000đ",
  },
  {
    id: 4,
    orderCode: "MS-123456",
    orderTime: "15:00:00 03/10/2021",
    paymentTime: "15:00:00 03/10/2021",
    imageSrc: "/img/5.jpg",
    courseName: "Học code để code ra web đang dùng",
    price: "20.000.000đ",
    originalPrice: "40.000.000đ",
    status: "Miễn phí",
    paymentMethod: "Online",
    totalAmount: "20.000.000đ",
  },
  {
    id: 5,
    orderCode: "MS-123456",
    orderTime: "15:00:00 03/10/2021",
    paymentTime: "15:00:00 03/10/2021",
    imageSrc: "/img/5.jpg",
    courseName: "Học code để code ra web đang dùng",
    price: "20.000.000đ",
    originalPrice: "40.000.000đ",
    status: "Miễn phí",
    paymentMethod: "Online",
    totalAmount: "20.000.000đ",
  },
  {
    id: 6,
    orderCode: "MS-123456",
    orderTime: "15:00:00 03/10/2021",
    paymentTime: "15:00:00 03/10/2021",
    imageSrc: "/img/5.jpg",
    courseName: "Học code để code ra web đang dùng",
    price: "20.000.000đ",
    originalPrice: "40.000.000đ",
    status: "Miễn phí",
    paymentMethod: "Online",
    totalAmount: "20.000.000đ",
  },
])
const itemsPerPage = 2
const currentPage = ref(1)

const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return items.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage))

const visiblePages = computed(() => {
  const pages = []
  const minPage = Math.max(1, currentPage.value - 2)
  const maxPage = Math.min(totalPages.value, currentPage.value + 2)

  for (let i = minPage; i <= maxPage; i++) {
    pages.push(i)
  }

  return pages
})

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>
<style>
.active {
  font-weight: bold;
  cursor: pointer;
  height: 40px;
  width: 40px;

  background-color: blue;
  border-radius: 50%;
}
</style>
