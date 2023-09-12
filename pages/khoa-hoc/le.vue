<template>
  <div class="flex space-x-4 my-5 mt-7 items-center w-full">
    <nuxt-link to="/" class="text-gray-400">Trang chủ</nuxt-link>
    <div class="i-mdi:chevron-right bg-gray"></div>
    <p class="font-bold text-gray-500">khoá học lẻ</p>
  </div>
  <div class="w-full flex space-x-8">
    <div class="w-3/7 space-y-5">
      <a href="https://www.youtube.com/watch?v=L05glUV_ibI&amp;ab_channel=mobiEdu" data-fancybox=""><img class="rd-2" src="/img/1.jpg" alt="" /></a>
      <SlideSlide5 />
    </div>
    <div class="bg-[#E3EFF9] rd-3">
      <div class="p-8 space-y-7">
        <p class="border-b border-blue-300 pb-3 font-700 text-2xl leading-7">Gói luyện thi Học thủ khoa, gói luyện thi Học thủ khoa gói luyện thi Học thủ khoa gói luyện thi Học thủ khoa gói luyện thi</p>
        <div>
          <p class="mt-3 text-lg text-gray-500">Nguyễn Thanh Hằng</p>
          <div class="flex items-center space-x-5">
            <p class="font-700 leading-5 text-2xl text-color_4">18.000.000 đ</p>
            <p class="text-gray-4 line-through">20.000.000 đ</p>
            <p class="bg-red-500 p1 rd-1 text-white font-600">-50%</p>
          </div>
        </div>
        <div class="flex items-center space-x-7">
          <button class="text-white rd-full text-sm font-semibold hover:bg-color_5 hover:text-white bg-color_4 px-7 py-2">ĐĂNG KÍ HỌC NGAY</button>
          <button class="text-color_4 bg-white px-7 py-2 hover:bg-color_5 hover:text-black rd-full font-700 text-sm text-color_4 leading-[1.375] border-color_4 border-1">THÊM VÀO GIỎ HÀNG</button>
        </div>
        <div class="flex space-x-12">
          <div class="space-y-3">
            <p class="text-xl text-gray-500">Số lượng bài học</p>
            <p class="font-bold text-xl">20</p>
          </div>
          <div class="space-y-3">
            <p class="text-xl text-gray-500">Thời lượng</p>
            <p class="font-bold text-xl">02 giờ 50 phút</p>
          </div>
          <div class="space-y-3">
            <p class="text-xl text-gray-500">Lĩnh vực</p>
            <p class="font-bold text-xl">Sức khỏe</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col transition duration-[all] z-5 bg-gray-200 ease-[ease-in-out] w-screen my-10">
    <div class="lg:(w-225 px-0) xl:(w-320) 2xl:(w-340) mx-auto flex space-x-10">
      <div class="bg-white w-5/7 rd-1 my-15">
        <div class="p10 space-y-5">
          <div class="flex bg-#f2f7fd rd-2 sticky top-23 ease-[ease-in-out]">
            <button
              v-for="tab in data_tab"
              :key="tab.id"
              @click="changeTab(tab)"
              :class="{
                'bg-color_4': activeTab === tab,
                'bg-#f2f7fd text-color_4': activeTab !== tab,
              }"
              class="px-4 py-2 rd-2 focus:outline-none text-xl"
            >
              {{ tab.name }}
            </button>
          </div>
          <div class="text-3xl text-color_4 font-600" id="1">Tổng quan</div>
          <div class="text-lg">
            <p v-if="showFullText">{{ longText }}</p>
            <p v-else>{{ shortenedText }}</p>
            <button @click="toggleText" class="text-blue-500 bg-white text-lg">
              {{ showFullText ? "Rút gọn" : "Xem thêm" }}
            </button>
          </div>
          <div class="text-3xl text-color_4 font-600">Lợi ích</div>

          <div>
            <ul>
              <li class="cursor-pointer" v-for="(item, index) in menuItems" :key="index">
                <div class="flex items-center justify-between text-base leading-6 bg-[#E3EFF9] p-5 text-xl" @click="toggleItem(item)">
                  <div class="flex items-center">
                    <div class="ml-2">
                      <NuxtLink :to="item.url">
                        {{ item.title }}
                      </NuxtLink>
                    </div>
                  </div>
                  <div v-if="item.children && item.children.length" :class="item.open ? 'i-mdi:chevron-up md:text-2xl' : 'i-mdi:chevron-down md:text-xl'"></div>
                </div>
                <div class="overflow-auto transition-all scrollbar-hide" :class="item.open && index === 0 ? 'h-32 duration-500' : 'h-0 duration-500'">
                  <div v-for="(childItem, childIndex) in item.children" :key="childIndex">
                    <div class="flex items-center text-base leading-6 p-5 ml-8">
                      <div :class="item.icon"></div>
                      <NuxtLink :to="childItem.url">
                        {{ childItem.title }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="text-3xl text-color_4 font-600">ĐÁNH GIÁ</div>
        </div>
      </div>
      <div class="w-2/7 my-15 space-y-5 sticky top-23 ease-[ease-in-out]">
        <div class="text-xl font-semibold text-color_4 sticky top-23 ease-[ease-in-out]"><p>Khoá học phù hợp</p></div>
        <div class="bg-color_4 text-white rd-2 p-5 sticky top-23 ease-[ease-in-out]">
          <p>
            - Học sinh sinh viên cần hoàn thiện các kỹ năng mềm kỹ năng văn phòng và định hướng nghề nghiệp để chuẩn bị đi làm.<br />
            - Đối với các đối tượng đã đi làm: Bổ trợ về các kỹ năng tin học văn phòng, củng cố về các kiến thức bán hàng, marketing.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center text-3xl text-color_4 font-700 space-x-2 my-5 w-full">
    <div class="i-mdi:cogs text-4xl"></div>
    <div>KHOÁ HỌC CÙNG LĨNH VỰC</div>
  </div>
  <div class="w-full">
    <SlideCourse />
  </div>
</template>

<script setup>
import { ref } from "vue"
import SlideCourse from "../../components/slide/SlideCourse.vue"
// layouts
const tabs = ["Tab1", "Tab2", "Tab3"]
const data_tab = [
  {
    id: 1,
    name: "Tổng quan",
  },
  {
    id: 2,
    name: "Danh sách",
  },
  {
    id: 3,
    name: "Đánh giá",
  },
]

const maxLength = 670
const showFullText = ref(false)
const tab_selected = ref()
const shortenedText = computed(() => {
  return showFullText.value ? longText : longText.slice(0, maxLength)
})

const activeTab = computed(() => {
  console.log(tab_selected.value)
  return
})

function changeTab(tab) {
  tab_selected.value = tab.id
  let x = ""
  switch (tab.id) {
    case 1:
      const tab_1 = document.getElementById("1")
      tab_1.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" })
      break
    default:
      break
  }
  scrollToTab(tab)
}
function scrollToTab(tab) {
  const index = tabs.indexOf(tab)
  const tabRef = tabElement[index]
  if (tabRef) {
    tabRef.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

function toggleText() {
  showFullText.value = !showFullText.value
}

const longText = `Khóa học sẽ giúp các bạn hiểu tường tận về việc xây dựng website cần các yếu tố nào. Các bạn sẽ học từ việc mua tên miền, hosting thế nào cho chuẩn tới cách thiết kế giao diện website đẹp, chuẩn SEO, chạy nhanh và thân thiện với người dùng, quản trị nhiều website cùng lúc.


Tham gia khóa học các bạn sẽ được thực hành trên giao diện website tin tức và bán hàng cụ thể giúp các bạn có thể thiết kế được nhiều dạng website khác nhau.


Khóa học hướng dẫn trực quan, chi tiết, giúp các bạn hiểu được bản chất để tự thiết kế sáng tạo. Không theo lối mòn, không cần biết code, bạn chỉ cần một chút sáng tạo là có thể thiết kế được nhiều giao diện đẹp.


Lộ trình học tập:


Khóa học sẽ giúp các bạn hiểu tường tận về việc xây dựng website cần các yếu tố nào. Các bạn sẽ học từ việc mua tên miền, hosting thế nào cho chuẩn tới cách thiết kế giao diện website đẹp, chuẩn SEO, chạy nhanh và thân thiện với người dùng, quản trị nhiều website cùng lúc.


Tham gia khóa học các bạn sẽ được thực hành trên giao diện website tin tức và bán hàng cụ thể giúp các bạn có thể thiết kế được nhiều dạng website khác nhau.


Khóa học hướng dẫn trực quan, chi tiết, giúp các bạn hiểu được bản chất để tự thiết kế sáng tạo. Không theo lối mòn, không cần biết code, bạn chỉ cần một chút sáng tạo là có thể thiết kế được nhiều giao diện đẹp.`

const menuItems = ref([
  {
    title: "Phần 1: Học phần 1",
    icon: "i-mdi:lead-pencil text-xl bg-red-500",
    url: "",
    open: false,
    children: [
      {
        title: "Hồ sơ của tôi",
        children: [],
        url: "",
      },
      {
        title: "Kích hoạt khóa học",
        children: [],
        url: "",
      },
    ],
  },
])

function toggleItem(item) {
  item.open = !item.open
}
</script>
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
