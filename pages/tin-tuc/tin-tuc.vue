<template>
  <div class="w-full">
    <div class="flex text-color_7 py-5 font-normal text-4 leading-4 items-center gap-2">
      <nuxt-link to="/">Trang chủ</nuxt-link>
      <div class="i-mdi:chevron-right text-xl"></div>
      <p>Tin tức</p>
      <div class="i-mdi:chevron-right text-xl"></div>
      <p class="font-bold">Tin tức</p>
    </div>
    <div class="flex gap-10">
      <div class="w1/2 p-10">
        <p class="text-color_4 text-9 uppercase font-bold">Tin tức</p>
        <p class="mt-5 text-color_8 font-600 text-15px">Tổng hợp các tin tức, sự kiện giáo dục, gương sáng học tập trong ngành giáo dục, giúp nhà trường - giáo viên - phụ huynh - học sinh cập nhật đầy đủ các thông tin hữu ích.</p>
      </div>
      <div class="w1/2">
        <img src="/img/tintuc/tintuc6.jpg" alt="" />
      </div>
    </div>

    <div class="grid grid-cols-3 gap-10 mt-5">
      <div v-for="item in displayedItems" :key="item.id" class="bg-color_12 rounded-lg hover1">
        <img :src="item.imageSrc" class="w-full rounded-lg" alt="" />
        <div class="p-7">
          <div class="flex items-center text-sm gap-3 text-color_7 w-full">
            <div class="i-mdi:calendar-range"></div>
            <p>{{ item.date }}</p>
          </div>
          <p class="overflow-hidden text-3xl text-color_6 leading-45px font-540 mt-[10.21px] text-ellipsis w-90%">{{ item.title }}</p>
          <div class="flex mt-10 text-color_7 text-xl">
            <div class="border-r pr-5">{{ item.category }}</div>
            <div class="flex items-center ml-5 gap-3">
              <div class="i-mdi:eye"></div>
              <p>{{ item.views }}</p>
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
</template>
<script setup>
import { ref } from "vue"

const items = ref([
  {
    id: 1,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/banner.png",
    views: 8534,
  },
  {
    id: 2,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc3.jpg",
    views: 8534,
  },
  {
    id: 3,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc4.jpg",
    views: 8534,
  },
  {
    id: 4,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc3.jpg",
    views: 8534,
  },
  {
    id: 5,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc5.jpg",
    views: 8534,
  },
  {
    id: 6,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc1.jpg",
    views: 8534,
  },
  {
    id: 7,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc4.jpg",
    views: 8534,
  },
  {
    id: 8,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc5.jpg",
    views: 8534,
  },
  {
    id: 9,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc1.jpg",
    views: 8534,
  },
  {
    id: 10,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc4.jpg",
    views: 8534,
  },
  {
    id: 11,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc1.jpg",
    views: 8534,
  },
  {
    id: 12,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc1.jpg",
    views: 8534,
  },
  {
    id: 13,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc1.jpg",
    views: 8534,
  },
  {
    id: 14,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc1.jpg",
    views: 8534,
  },
  {
    id: 15,
    date: "19.08.2023",
    title: "edubook RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.edubook.VN",
    category: "Tin tức",
    imageSrc: "/img/tintuc/tintuc1.jpg",
    views: 8534,
  },
])
const itemsPerPage = 9
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
