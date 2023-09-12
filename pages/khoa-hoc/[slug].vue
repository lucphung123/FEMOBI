<template>
  <div class="flex space-x-4 my-5 mt-7 items-center w-full">
    <nuxt-link to="/" class="text-gray-400">Trang chủ</nuxt-link>
    <div class="i-mdi:chevron-right bg-gray"></div>
    <nuxt-link to="/khoa-hoc" class="text-gray-400">khoá học</nuxt-link>
    <div class="i-mdi:chevron-right bg-gray"></div>
    <div class="font-bold text-gray-500">{{ course.title }}</div>
  </div>
  <div class="flex space-x-8 w-full">
    <div class="w-3/7 space-y-5">
      <a href="https://www.youtube.com/watch?v=L05glUV_ibI&amp;ab_channel=mobiEdu" data-fancybox=""><img class="rd-2 w-" :src="course.url_image" /></a>
      <SlideSlide5 />
    </div>
    <div class="bg-[#E3EFF9] rd-3 w-4/7 h-auto">
      <div class="p-8 space-y-7">
        <div class="border-b border-blue-300 pb-3 font-700 text-2xl leading-7">{{ course.title }}</div>
        <div>
          <p class="mt-3 text-lg text-gray-500">{{ course.teacher.name }}</p>
          <div class="flex items-center space-x-5">
            <p class="font-700 leading-5 text-2xl text-color_4">{{ course.sale_price }} đ</p>
            <p class="text-gray-4 line-through">{{ course.price }} đ</p>
          </div>
        </div>
        <div class="flex items-center space-x-7">
          <div v-if="course.sale_price === 0">
            <NuxtLink :to="'/vao-hoc/' + route.params.slug">
              <button class="text-white rd-full text-sm font-semibold hover:bg-color_5 hover:text-white bg-color_4 px-7 py-2">VÀO HỌC</button>
            </NuxtLink>
          </div>
          <div v-else>
            <button @click="handleRegister" class="text-white rd-full text-sm font-semibold hover:bg-color_5 hover:text-white bg-color_4 px-7 py-2">ĐĂNG KÍ HỌC NGAY</button>
            <button @click.prevent.stop="addItemCart(course)" v-if="cartStore.cart.filter(item => item.id == course.id).length == 0" class="text-color_4 bg-white px-7 py-2 hover:bg-color_5 hover:text-black rd-full font-700 text-sm text-color_4 leading-[1.375] border-color_4">THÊM VÀO GIỎ HÀNG</button>
            <button @click.prevent.stop="removeItemCart(course)" v-else class="text-color_4 bg-white px-7 py-2 hover:bg-color_5 hover:text-black rd-full font-700 text-sm text-color_4 leading-[1.375] border-color_4">ĐÃ THÊM VÀO GIỎ HÀNG</button>
          </div>
        </div>
        <div class="flex space-x-12">
          <div class="space-y-3">
            <p class="text-xl text-gray-500">Số lượng bài học</p>
            <p class="font-bold text-xl">{{ course.number_lesson }}</p>
          </div>
          <div class="space-y-3">
            <p class="text-xl text-gray-500">Thời lượng</p>
            <p class="font-bold text-xl">02 giờ 50 phút</p>
          </div>
          <div class="space-y-3">
            <p class="text-xl text-gray-500">Lĩnh vực</p>
            <!-- <p class="font-bold text-xl">Sức khỏe</p> -->
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
            <div v-html="course.description" />
          </div>
          <div class="text-3xl text-color_4 font-600">Danh sách</div>
          <!-- <div>
            <div v-for="i in detailData.data.lesson">
              <div class="bg-white flex justify-between items-center space-y-2">
                <div class="w-full outline-none text-xl text-left" @click="toggle(chapter.id)">
                  <div>{{ chapter.label }}</div>
                </div>
              </div>
            </div>
          </div> -->
          <div>
            <div class="space-y-3 " v-for="chapter in detailData.data.lesson" :key="chapter.id">
              <div class="flex bg-#E3EFF9 justify-between items-center space-y-3 rd-2" @click="toggle(chapter.id)">
                <div class="w-full outline-none text-xl text-left cursor-pointer mx-3">
                  <div>{{ chapter.label }}</div>
                </div>
                <div class="" :class="arrowIcon(chapter.id)"></div>
              </div>
              <div class="leading-10" :class="contentClasses(chapter.id)">
                <div class="mx-10" v-for="lesson in chapter.children" :key="lesson.id">
                  {{ lesson.label }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/7 my-15 space-y-5 sticky top-23 ease-[ease-in-out]">
        <div class="text-xl font-semibold text-color_4 sticky top-23 ease-[ease-in-out]">Bạn sẽ học được gì?</div>
        <div class="bg-color_4 text-white rd-2 p-5 sticky top-23 ease-[ease-in-out]">
          <div v-html="course.learn_what" />
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
import { useCartStore } from "~~/stores/cartStore"
const cartStore = useCartStore()

const activeSection = ref(-1)

const toggle = sectionIndex => {
  if (activeSection.value === sectionIndex) {
    activeSection.value = -1
  } else {
    activeSection.value = sectionIndex
  }
}

const contentClasses = sectionIndex => {
  const baseClasses = "overflow-hidden transition-all  duration-700"
  const activeClasses = activeSection.value === sectionIndex ? "max-h-100" : "max-h-0"
  return `${baseClasses} ${activeClasses}`
}

const arrowIcon = sectionIndex => {
  return activeSection.value === sectionIndex ? "i-mdi:chevron-up md:text-3xl" : "i-mdi:chevron-down md:text-3xl"
}
const { RestApi } = useApi()
const route = useRoute()
const router = useRouter()
const query = computed(() => {
  const str = route.params.slug
  const arr = str.split("-")
  const lastElement = arr[arr.length - 1]
  const remainingElements = arr.slice(0, arr.length - 1).join("-")
  return {
    slug: remainingElements,
    id: lastElement,
  }
})
const { data: detailData, pending: detailPending, error: detailError, refresh: detailRefresh } = await RestApi.course.getDetailsFull({ query: query })
const course = computed(() => {
  if (detailData.value.error) {
    throw createError({
      statusCode: detailData.value.code,
      message: detailData.value.message,
      fatal: true,
    })
  } else {
    let data = detailData.value.data
    return {
      id: data?.id || 0,
      slug: data.slug || "",
      title: data?.title || "",
      teacher: {
        name: data?.teacher.name || "",
        avatar: data?.teacher.avatar,
        description: data?.teacher.description || "",
        total_courses: data?.teacher.totalCourses || 0,
        total_students: data?.teacher.totalStudents || 0,
        facebook: data?.teacher.facebook || "",
        youtube: data?.teacher.youtube || "",
        id: data?.owner.id || 0,
      },
      review: {
        star: data?.review.star || 0,
        total: data?.review.total || 0,
        reviewRate: data?.review.reviewRate.map(item_review => {
          return {
            percent: item_review.percent,
            rate: item_review.rate,
            totalRate: item_review.totalRate,
          }
        }),
      },
      price: data?.price || 0,
      sale_price: data?.sale_price || 0,
      url_video: data?.video_url || "",
      url_image: data?.cover_url || "",
      learn_what: data?.learn_what || "",
      description: data?.description || 0,
      short_description: data?.short_description || "",
      number_lesson: data?.number_lesson || 0,
      duration: data?.duration || "",
      related_courses: data?.relatedCourses || [],
      isMapping: data?.isMapping || false,
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
function addItemCart(item) {
  let item_cart = {
    id: item.id,
    type: "course",
    active: false,
    image_url: item.url_image,
    teacher: {
      id: item.teacher.id,
      name: item.teacher.name,
    },
    price: item.price,
    sale_price: item.sale_price,
    slug: item.slug,
    title: item.title,
  }
  cartStore.addItemCart(item_cart)
}
const removeItemCart = item => {
  let item_cart = {
    id: item.id,
    type: "course",
    active: false,
    image_url: item.url_image,
    teacher: {
      id: item.teacher.id,
      name: item.teacher.name,
    },
    price: item.price,
    sale_price: item.sale_price,
    slug: item.slug,
    title: item.title,
  }
  cartStore.removeItemCart(item_cart)
}
const tab_selected = ref()

const activeTab = computed(() => {
  return
})
function handleRegister() {
  router.push("/gio-hang")
}
function goToLearn() {
  router.push("/vao-hoc")
}
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
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
