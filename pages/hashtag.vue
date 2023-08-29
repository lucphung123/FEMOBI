<template>
  <div class="flex text-color_7 py-5 font-normal text-4 leading-4 items-center gap-2">
    <nuxt-link to="/">Trang chủ</nuxt-link>
    <div class="i-mdi:chevron-right text-xl"></div>
    <p class="font-bold">Hashtag</p>
  </div>
  <div class="flex sticky flex-col transition duration-[all] z-5 bg-blue-500 ease-[ease-in-out] w-screen top-23">
    <div class="lg:(w-225 px-0) xl:(w-320) 2xl:(w-340) mx-auto">
      <div class="flex items-center">
        <img src="/img/Hashtag.svg" class="w-30 h-30" alt="" />
        <div>
          <p class="text-5 text-color_6 font-bold">hocsinh</p>
          <div class="flex px-2 rounded-lg bg-color_16 justify-center items-center gap-2 py-1 mt-2">
            <div class="i-mdi:facebook text-white"></div>
            <a href="" class="text-white text-sm"> Share</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex mt-5 gap-5">
    <div class="w-85% bg-white rounded-lg px-5 pb-10">
      <div v-for="item in displayedItems" :key="item.id" class="flex gap-5 mt-10">
        <img :src="item.url" class="w-60 rounded-lg" alt="" />
        <div>
          <p class="mt-3 font-bold hover:(text-color_4) cursor-pointer">{{ item.title }}</p>
          <div class="flex items-center text-sm gap-3 text-white bg-color_4 p-1 w-28 rounded-md mt-1">
            <div class="i-mdi:calendar-range"></div>
            <p>{{ item.date }}</p>
          </div>
          <p class="text-color_8 mt-3">{{ item.story }}</p>
          <p class="text-color_1 mt-3 cursor-pointer">Xem thêm</p>
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
    <div class="w-30%">
      <div class="flex items-center border-b-2 pb-5">
        <div class="i-mdi:star-outline text-color_4 text-3xl mr-2"></div>
        <p class="text-color_4 font-bold text-lg leading-[26px]">NHIỀU NGƯỜI ĐỌC</p>
      </div>
      <div class="mt-5 flex gap-2 border-b-2 pb-5">
        <img src="/img/tintuc/tintuc4.jpg" class="w-25 h-15 rounded-lg hover:(scale-110) transition duration-500" alt="" />
        <p class="font-bold text-sm hover:text-color_4 cursor-pointer">NHỮNG ĐIỀU CẦN LƯU Ý KHI THAM GIA CHƯƠNG TRÌNH \'ĐUA ĐIỂM TÍCH QUÀ\'</p>
      </div>
      <div class="mt-5 flex gap-2 border-b-2 pb-5">
        <img src="/img/tintuc/tintuc6.jpg" class="w-25 h-15 rounded-lg hover:(scale-110) transition duration-500" alt="" />
        <p class="font-bold text-sm hover:text-color_4 cursor-pointer">Hài Tết mới nhất 2021: Nghiệp tụ vành môi - Giải hạn đầu năm</p>
      </div>
      <div class="mt-5 flex gap-2 border-b-2 pb-5">
        <img src="/img/tintuc/tintuc3.jpg" class="w-25 h-15 rounded-lg hover:(scale-110) transition duration-500" alt="" />
        <p class="font-bold text-sm hover:text-color_4 cursor-pointer">MOBIEDU RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.MOBIEDU.VN</p>
      </div>
      <div class="mt-5 flex gap-2 border-b-2 pb-5">
        <img src="/img/tintuc/tintuc1.jpg" class="w-25 h-15 rounded-lg hover:(scale-110) transition duration-500" alt="" />
        <p class="font-bold text-sm hover:text-color_4 cursor-pointer">TƯNG BỪNG MỪNG SINH NHẬT MOBIFONE VỚI MOBIEDU</p>
      </div>
      <div class="flex sticky flex-col transition duration-[all] z-4 ease-[ease-in-out] w-full top-40">
        <img src="/img/BannerHashtag.jpg" class="mt-10 w-full rounded-xl" alt="" />
      </div>
    </div>
  </div>
  <div class="flex text-center items-center gap-2 mt-20">
    <div class="i-mdi:cog-outline text-color_4 font-300 text-10"></div>
    <div class="text-color_4 font-bold text-3xl">CÓ THỂ BẠN QUAN TÂM</div>
  </div>
  <SlideCourse class="mt-5" />
</template>

<script setup>
const items = ref([
  {
    id: 1,
    url: "/img/tintuc/tintuc2.png",
    title: "MOBIEDU RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.MOBIEDU.VN",
    date: "19.08.2023",
    story: "Tin tức",
  },
  {
    id: 2,
    url: "/img/tintuc/tintuc1.jpg",
    title: "THỂ LỆ CHƯƠNG TRÌNH “ĐUA ĐIỂM TÍCH QUÀ” TRÊN CỘNG ĐỒNG HỎI ĐÁP",
    date: "20.08.2023",
    story: "Tin tức",
  },
  {
    id: 3,
    url: "/img/tintuc/tintuc3.jpg",
    title: "Đáp án đề thi môn Lịch sử tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "29.06.2023",
    story: "Tuyển sinh",
  },
  {
    id: 4,
    url: "/img/tintuc/tintuc4.jpg",
    title: "Đáp án đề thi môn Toán tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "28.06.2023",
    story: "Tuyển sinh",
  },
  {
    id: 5,
    url: "/img/tintuc/tintuc3.jpg",
    title: "Đáp án đề thi môn Lịch sử tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "29.06.2023",
    story: "Tuyển sinh",
  },
  {
    id: 6,
    url: "/img/tintuc/tintuc4.jpg",
    title: "Đáp án đề thi môn Toán tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "28.06.2023",
    story: "Tuyển sinh",
  },
  {
    id: 7,
    url: "/img/tintuc/tintuc3.jpg",
    title: "Đáp án đề thi môn Lịch sử tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "29.06.2023",
    story: "Tuyển sinh",
  },
  {
    id: 8,
    url: "/img/tintuc/tintuc4.jpg",
    title: "Đáp án đề thi môn Toán tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "28.06.2023",
    story: "Tuyển sinh",
  },
  {
    id: 9,
    url: "/img/tintuc/tintuc4.jpg",
    title: "Đáp án đề thi môn Toán tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "28.06.2023",
    story: "Tuyển sinh",
  },
  {
    id: 10,
    url: "/img/tintuc/tintuc2.png",
    title: "MOBIEDU RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.MOBIEDU.VN",
    date: "19.08.2023",
    story: "Tin tức",
  },
  {
    id: 11,
    url: "/img/tintuc/tintuc1.jpg",
    title: "THỂ LỆ CHƯƠNG TRÌNH “ĐUA ĐIỂM TÍCH QUÀ” TRÊN CỘNG ĐỒNG HỎI ĐÁP",
    date: "20.08.2023",
    story: "Tin tức",
  },
  {
    id: 12,
    url: "/img/tintuc/tintuc3.jpg",
    title: "Đáp án đề thi môn Lịch sử tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "29.06.2023",
    story: "Tuyển sinh",
  },
  {
    id: 13,
    url: "/img/tintuc/tintuc4.jpg",
    title: "Đáp án đề thi môn Toán tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "28.06.2023",
    story: "Tuyển sinh",
  },
  {
    id: 14,
    url: "/img/tintuc/tintuc3.jpg",
    title: "Đáp án đề thi môn Lịch sử tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "29.06.2023",
    story: "Tuyển sinh",
  },
  {
    id: 15,
    url: "/img/tintuc/tintuc4.jpg",
    title: "Đáp án đề thi môn Toán tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "28.06.2023",
    story: "Tuyển sinh",
  },
  {
    id: 16,
    url: "/img/tintuc/tintuc3.jpg",
    title: "Đáp án đề thi môn Lịch sử tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "29.06.2023",
    story: "Tuyển sinh",
  },
  {
    id: 17,
    url: "/img/tintuc/tintuc4.jpg",
    title: "Đáp án đề thi môn Toán tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "28.06.2023",
    story: "Tuyển sinh",
  },
  {
    id: 18,
    url: "/img/tintuc/tintuc4.jpg",
    title: "Đáp án đề thi môn Toán tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu",
    date: "28.06.2023",
    story: "Tuyển sinh",
  },
])
const itemsPerPage = 12
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
// layouts
definePageMeta({
  layout: "course",
})
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
