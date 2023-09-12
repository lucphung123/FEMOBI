<template>
  <!-- <div>
    {{ packageDetailData }}
  </div> -->
  <div class="flex space-x-4 my-5 mt-7 items-center w-full">
    <nuxt-link to="/" class="text-gray-400">Trang chủ</nuxt-link>
    <div class="i-mdi:chevron-right bg-gray"></div>
    <nuxt-link to="/combo" class="text-gray-400">khoá học combo</nuxt-link>
    <div class="i-mdi:chevron-right bg-gray"></div>
    <div class="font-bold text-gray-500">{{ packageDetailData.data.name }}</div>
  </div>
  <div class="w-full flex space-x-8">
    <div class="w-3/7 space-y-5">
      <a href="https://www.youtube.com/watch?v=L05glUV_ibI&amp;ab_channel=mobiEdu" data-fancybox=""><img class="rd-2 h-82.5% w-130%" :src="packageDetailData.data.thumbnailFileUrl" alt="" /></a>
      <SlideSlide5 />
    </div>
    <div class="bg-[#E3EFF9] w-4/7 rd-3">
      <div class="p-8 space-y-7">
        <div v-html="packageDetailData.data.name" class="border-b border-blue-300 pb-3 font-700 text-2xl leading-7"></div>
        <div>
          <div class="flex items-center space-x-5">
            <p class="font-700 leading-5 text-2xl text-color_4">{{ packageDetailData.data.sellingPrice }} đ</p>
            <p class="text-gray-4 line-through">{{ packageDetailData.data.price }} đ</p>
          </div>
        </div>
        <div class="flex items-center space-x-7">
          <button class="text-white rd-full text-sm font-semibold hover:bg-color_5 hover:text-white bg-color_4 px-7 py-2">ĐĂNG KÍ HỌC NGAY</button>
        </div>
        <div class="flex space-x-12">
          <div class="space-y-3">
            <p class="text-xl text-gray-500">Số khoá học:</p>
            <p class="font-bold text-xl">{{ packageDetailData.data.totalCourses }}</p>
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
          <div v-html="packageDetailData.data.aboutCourse" class="text-lg"></div>
          <div class="text-3xl text-color_4 font-600">Danh sách</div>

          <div class="w-full flex items-center justify-between" v-for="(course, index) in packageDetailData.data.courses" :key="index">
            <div class="flex items-center space-x-6 w-3/5">
              <div class="w-2/5">
                <img :src="course.coverFileUrl" alt="" />
              </div>
              <div class="space-y-5">
                <div class="text-xl font-bold">{{ course.name }}</div>
                <div class="flex space-x-2">
                  <div class="i-mdi:account text-xl"></div>
                  <div>{{ course.teacherName }}</div>
                </div>
                <div class="flex space-x-6 items-center">
                  <div class="text-blue-900 font-600 text-xl">{{ course.sellingPrice }} đ</div>
                  <div class="line-through text-gray-600">{{ course.price }} đ</div>
                </div>
              </div>
            </div>
            <nuxt-link>
              <button class="bg-color_4 text-white px-3 py-1 rd-1 hover:bg-yellow hover:text-black font-600">Chi tiết khoá học</button>
            </nuxt-link>
          </div>
          <!-- <div>
            <div class="text-3xl text-color_4 font-600">Gói cước</div>
            <div>
              <div class="bg-color_4 px-5 py-3  font-600 text-white">Gói Ngày</div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="w-2/7 my-15 space-y-5 sticky top-23 ease-[ease-in-out]">
        <div class="text-xl font-semibold text-color_4 sticky top-23 ease-[ease-in-out]"><p>Lợi ích</p></div>
        <div v-html="packageDetailData.data.benefits" class="bg-color_4 text-white rd-2 p-5 sticky top-23 ease-[ease-in-out]"></div>
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
const { RestApi } = useApi()
const route = useRoute()
const query = computed(() => {
  const str = route.params.slug
  const arr = str.split("-")
  const lastElement = arr[arr.length - 1]
  const remainingElements = arr.slice(0, arr.length - 1).join("-")
  return {
    id: lastElement,
    slug: remainingElements,
  }
})
const { data: packageDetailData, pending: packageDetailPending, error: packageDetailError, refresh: packageDetailRefresh } = await RestApi.course.getPackageDetail({ query: query })
const package_data = computed(() => {
  if (packageDetailData.value.error) {
    return {
      id: "",
      title: "",
      description: "",
      total_courses: "",
      total_teachers: "",
      image_url: "/empty.jpg",
      info: "",
      registered: false,
      courses: [],
      teachers: [],
    }
  } else {
    let data = packageDetailData.value.data
    return {
      id: data?.id,
      title: data?.name || "",
      benefits: data?.benefits,
      description: data?.aboutCourse || "",
      total_courses: data?.totalCourses || "",
      total_teachers: data?.totalTeachers || "",
      image_url: data?.thumbnailFileUrl !== "" ? data?.thumbnailFileUrl : "/empty.jpg",
      info: data?.benefits || "",
      price: data?.price || 0,
      sale_price: data?.sellingPrice || 0,
      registered: data?.registered || false,
      courses: data?.courses.map(item => {
        return {
          id: item.id,
          title: item.name,
          slug: item.slug,
          author: "Nguyễn Anh Tú",
          image_url: item.thumbnailFileUrl !== "" ? item.thumbnailFileUrl : "/empty.jpg",
          star: item.rating,
          totalCourse: 30,
          price: item.price,
          sale_price: item.sellingPrice,
          teacher: item.teacherName,
        }
      }),
      teachers: data?.teachers.map(x => {
        return {
          id: x.id,
          name: x.fullName,
          image_url: x.avatar,
        }
      }),
    }
  }
})
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
  console.log("🚀 ~ file: le.vue:115 ~ changeTab ~ tab:", tab)
  tab_selected.value = tab.id
  let x = ""
  switch (tab.id) {
    case 1:
      const tab_1 = document.getElementById("1")
      console.log("🚀 ~ file: le.vue:134 ~ changeTab ~ tab_1:", tab_1)
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
</script>
