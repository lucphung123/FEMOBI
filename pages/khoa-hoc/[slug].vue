<template>
  <div class="flex space-x-4 my-5 mt-7 items-center w-full">
    <nuxt-link to="/" class="text-gray-400">Trang chủ</nuxt-link>
    <div class="i-mdi:chevron-right bg-gray"></div>
    <nuxt-link to="/khoa-hoc" class="text-gray-400">khoá học</nuxt-link>
    <div class="i-mdi:chevron-right bg-gray"></div>
    <div class="font-bold text-gray-500">{{ course.title }}</div>
  </div>
  <div class="w-full flex space-x-8">
    <div class="w-3/7 space-y-5">
      <a href="https://www.youtube.com/watch?v=L05glUV_ibI&amp;ab_channel=mobiEdu" data-fancybox=""><img class="rd-2 w-100%" :src="course.url_image" /></a>
      <SlideSlide5 />
    </div>
    <div class="bg-[#E3EFF9] rd-3 w-4/7">
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
          <button class="text-white rd-full text-sm font-semibold hover:bg-color_5 hover:text-white bg-color_4 px-7 py-2">ĐĂNG KÍ HỌC NGAY</button>
          <button @click.prevent.stop="addItemCart(course)" v-if="cartStore.cart.filter(item => item.id == course.id).length == 0" class="text-color_4 bg-white px-7 py-2 hover:bg-color_5 hover:text-black rd-full font-700 text-sm text-color_4 leading-[1.375] border-color_4">THÊM VÀO GIỎ HÀNG</button>
          <button @click.prevent.stop="removeItemCart(course)" v-else class="text-color_4 bg-white px-7 py-2 hover:bg-color_5 hover:text-black rd-full font-700 text-sm text-color_4 leading-[1.375] border-color_4">ĐÃ THÊM VÀO GIỎ HÀNG</button>
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
            <div v-html="course.description" />
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
  {{ detailData }}
</template>

<script setup>
import { ref } from "vue"
import SlideCourse from "../../components/slide/SlideCourse.vue"
import { useCartStore } from "~~/stores/cartStore"
const cartStore = useCartStore()
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
  {
    id: 3,
    name: "Đánh giá",
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
