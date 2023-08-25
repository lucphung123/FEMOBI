<template>
  <div class="bg-color_11">
    <div class="flex items-center mb-5">
      <div class="flex justify-center items-center w-15 h-15 overflow-hidden rounded-[50%]">
        <img class="w-full h-full object-cover" src="/img/4.png" alt="" />
      </div>
      <div class="flex-1 text-color_9 text-sm leading-5 pl-2.5">
        <p class="user-title">Tài khoản của</p>
        <h2 class="text-color_6 font-medium text-xl leading-[26px] mt-[5px]">Dương Tuấn Minh</h2>
      </div>
    </div>
    <div>
      <ul>
        <li class="cursor-pointer" v-for="(item, index) in menuItems" :key="index">
          <div class="flex items-center justify-between text-base leading-6 p-5 border-b border-gray" @click="toggleItem(item)">
            <div class="flex items-center">
              <div :class="item.icon"></div>
              <div class="ml-2">
                <NuxtLink :to="item.url">
                  {{ item.title }}
                </NuxtLink>
              </div>
            </div>
            <div v-if="item.children && item.children.length" :class="item.open ? 'i-mdi:chevron-up md:text-2xl' : 'i-mdi:chevron-down md:text-xl'"></div>
          </div>
          <ul>
            <li v-for="(childItem, childIndex) in item.children" :key="childIndex">
              <div class="flex items-center text-base leading-6 p-5 ml-8" @click="selectItem(childItem)">
                <NuxtLink :to="childItem.url">
                  {{ childItem.title }}
                </NuxtLink>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const menuItems = ref([
  {
    title: "Tài khoản của tôi",
    icon: "i-mdi:lead-pencil text-xl",
    url: "/tai-khoan/ho-so",
    open: false,
    children: [
      {
        title: "Hồ sơ của tôi",
        children: [],
        url: "/tai-khoan/ho-so",
      },
      {
        title: "Kích hoạt khóa học",
        children: [],
        url: "/tai-khoan/kich-hoat-khoa-hoc",
      },
    ],
  },
  {
    title: "Khóa học của tôi",
    icon: "i-mdi:bookmark-outline text-xl",
    open: false,
    url: "/tai-khoan/khoa-hoc-cua-toi",
  },
  {
    title: "Chủ đề quan tâm",
    icon: "i-mdi:star-outline text-xl",
    open: false,
    url: "/tai-khoan/chu-de-quan-tam",
  },
  {
    title: "Khóa học đã xem",
    icon: "i-mdi:eye",
    open: false,
    url: "/tai-khoan/khoa-hoc-da-xem",
  },
  {
    title: "Ưu đãi",
    icon: "i-mdi:cards-heart-outline text-xl",
    open: false,
    url: "/tai-khoan/uu-dai",
  },
  {
    title: "Thông báo",
    icon: "i-mdi:bell-ring-outline text-xl",
    open: false,
    url: "/tai-khoan/thong-bao",
  },
  {
    title: "Đơn hàng",
    icon: "i-mdi:cart-arrow-down text-xl",
    open: false,
    url: "/tai-khoan/don-hang",
  },
])

const toggleItem = item => {
  item.open = !item.open
}
function selectItem(item) {
  console.log("🚀 ~ file: UserProfile.vue:102 ~ item:", item)
}
</script>
