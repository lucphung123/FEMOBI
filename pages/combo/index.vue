<template>
  <div class="w-full lg:px-0 flex flex-col">
    <div class="flex space-x-4 my-5 mt-7">
      <nuxt-link to="/" class="text-gray-400">Trang chủ</nuxt-link>
      <div class="i-mdi:chevron-right bg-gray text-2xl"></div>
      <p class="font-bold text-gray-500">Sách combo</p>
    </div>
    <div class="w-full flex space-x-15">
      <div class="w-1/4">
        <div class="space-y-5">
          <div class="flex items-center text-color_4 space-x-2">
            <div class="i-mdi:menu text-2xl"></div>
            <div class="font-bold text-xl">DANH MỤC SÁCH</div>
          </div>
          <div class="">
            <div class="border-y-1.5 border-gray-300 py-4 hover:bg-color_10">
              <NuxtLink to="/khoa-hoc" class="text-#333333 text-lg mx-8">Tất cả</NuxtLink>
            </div>
            <div class="border-b-1 border-gray-300 py-4 hover:bg-color_10">
              <NuxtLink to="/khoa-hoc/tre-em" class="font-bold text-lg text-color_4 mx-8">Sách combo</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/3">
        <SlideSlide4 />
      </div>
    </div>
    <div class="flex space-x-15 mt-10">
      <div class="w-1/4">
        <div>
          <ul>
            <li class="cursor-pointer" v-for="(item, index) in menuItems" :key="index">
              <div class="flex items-center justify-between text-base leading-6" @click="toggleItem(item)">
                <div class="flex items-center text-color_4 space-x-2">
                  <div :class="item.icon"></div>
                  <div>
                    <NuxtLink class="font-bold text-2xl" :to="item.url">
                      {{ item.title }}
                    </NuxtLink>
                  </div>
                </div>
                <div v-if="item.children && item.children.length" :class="item.open ? 'i-mdi:chevron-up md:text-2xl bg-color_4' : 'i-mdi:chevron-down md:text-xl bg-color_4'"></div>
              </div>
              <div class="overflow-auto transition-all scrollbar-hide" :class="item.open && index === 0 ? 'h-60 duration-500' : 'h-0 duration-500'">
                <div v-for="(childItem, childIndex) in item.children" :key="childIndex">
                  <div class="mt-3">
                    <div class="border-y-1.5 border-gray-300 py-4 hover:bg-color_10">
                      <NuxtLink to="/khoa-hoc" class="text-#333333 text-lg mx-8">Tất cả</NuxtLink>
                    </div>
                    <div class="border-b-1 border-gray-300 py-4 hover:bg-color_10">
                      <NuxtLink to="/khoa-hoc/tre-em" class="font-bold text-lg text-color_4 mx-8">Sách combo</NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex bg-white sticky flex-col transition duration-[all] ease-[ease-in-out] w-full top-30 rd-2 shadow-md mt-5">
          <div class="flex items-center mx-5 my-5 space-x-3 border-b border-gray-300 pb-3 border-b-1">
            <div class="i-mdi:filter-outline text-2xl bg-color_4"></div>
            <div class="text-xl font-500 font-18px leading-6 text-color_4">LỌC SÁCH</div>
          </div>
          <div class="mx-5 text-#333333 font-600 leading-6">CHỦ ĐỀ</div>
          <div class="mx-5 space-y-2 mt-3">
            <div class="flex items-center space-x-3" v-for="(item, index) in visibleItems" :key="index">
              <input class="" type="checkbox" id="" />
              <p class="text-gray-500 text-15px">{{ item }}</p>
            </div>
            <div>
              <button class="bg-white text-15px text-color_4" @click="loadMore" v-if="showLoadMore">
                <div class="flex items-center space-x-2">
                  <div>Xem thêm</div>
                  <div class="i-mdi:chevron-down"></div>
                </div>
              </button>
            </div>
          </div>
          <div class="border-t border-gray-300 pt-3 border-t-1 mt-3 mx-5 text-#333333 font-600 leading-6">KHOẢNG GIÁ</div>
          <div v-for="(product, index) in products" :key="index" class="flex space-x-3 mx-5 mt-3">
            <input class="" type="checkbox" id="" />
            <p class="text-gray-500 text-15px">{{ product.office }}</p>
          </div>
          <div class="flex space-x-5 mx-5 my-7">
            <button class="text-white bg-color_4 px-6 py-1 rd-full">Áp dụng</button>
            <button class="rd-full px-5 py-1">Xoá</button>
          </div>
        </div>
      </div>

      <div class="w-2/3">
        <div>
          <ul>
            <li class="cursor-pointer" v-for="(item, index) in menuItems1" :key="index">
              <div class="flex items-center space-x-3 text-base leading-6" @click="toggleItem(item)">
                <div class="flex items-center text-color_4 space-x-2">
                  <div :class="item.icon"></div>
                  <div>
                    <NuxtLink class="font-400 text-xl underline" :to="item.url">
                      {{ item.title }}
                    </NuxtLink>
                  </div>
                </div>
                <div v-if="item.children && item.children.length" :class="item.open ? 'i-mdi:chevron-up md:text-2xl bg-color_4' : 'i-mdi:chevron-down md:text-xl bg-color_4'"></div>
              </div>
              <div class="overflow-auto transition-all scrollbar-hide mt-5" :class="item.open && index === 0 ? 'h-45 duration-500' : 'h-0 duration-500'">
                <div v-for="(childItem, childIndex) in item.children" :key="childIndex">
                  <div class="space-y-1 bg-white rd-2 p-8">
                    <div>3 bước để đăng kí ngay khoá học trên <span class="font-bold">mobiEdu</span></div>
                    <div><span class="font-bold">Bước 1 : </span>Đăng nhập hoặc đăng kí vào website mobiedu.vn</div>
                    <div><span class="font-bold">Bước 2 : </span>Truy cập vào sách muốn đăng kí, chọn "Đăng kí học ngay"</div>
                    <div><span class="font-bold">Bước 3 : </span>Lựa chọn hình thức thanh toán và làm theo hướng dẫn</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="data.length > 0" class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:(grid-cols-3)">
          <CourseImageTextSquarePackage class="bg-white rounded overflow-hidden shadow-md hover:(shadow-lg shadow-blue-400) cursor-pointer duration-300" v-for="(item, index) in data" :key="index" :item_course="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
const { RestApi } = useApi()
const pagination = ref({
  page: 1,
  limit: 12,
  total: 0,
})
const query = computed(() => {
  let query = {
    page: pagination.value.page - 1,
    per_page: pagination.value.limit,
  }
  return query
})
const { data: courseData, pending: coursePending, error: courseError } = await RestApi.course.getPackage({ query: query })

let data = computed(() => {
  pagination.value.total = courseData.value.pagination.total
  return courseData.value.item
})

// layouts
definePageMeta({
  layout: "course",
})
const products = [
  {
    office: "Trên 2.000.000đ",
  },
  {
    office: "Dưới 2.000.000đ",
  },
  {
    office: "Dưới 1.000.000đ",
  },
  {
    office: "Dưới 500.000đ",
  },
]
const items = ref(["Tiền Tiểu Học", "STEAM", "Tin học - Lập trình", "Kĩ năng mềm", "Kĩ năng văn phòng", "Kinh doanh - Marketing", "Ngoại ngữ", "Nghệ thuật", "Sức khoẻ - Đời sống"])
const visibleCount = ref(5)

const visibleItems = computed(() => items.value.slice(0, visibleCount.value))
const showLoadMore = computed(() => visibleCount.value < items.value.length)

const loadMore = () => {
  visibleCount.value += 3
}
const menuItems = ref([
  {
    title: "Danh mục Sách",
    icon: "i-mdi:menu text-2xl",
    open: false,
    children: [
      {
        title: "Hồ sơ của tôi",
        children: [],
        url: "/tai-khoan/ho-so",
      },
    ],
  },
])
const menuItems1 = ref([
  {
    title: "Hướng dẫn đăng kí Sách",
    icon: "i-mdi:file-edit-outline text-2xl",
    open: false,
    children: [
      {
        title: "Hồ sơ của tôi",
        children: [],
        url: "/tai-khoan/ho-so",
      },
    ],
  },
])

function toggleItem(item) {
  console.log("🚀 ~ file: UserProfile.vue:99 ~ toggleItem ~ item:", item)
  item.open = !item.open
}
</script>
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
