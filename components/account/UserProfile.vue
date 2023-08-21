<template>
  <div>
    <div class="flex items-center mb-5">
      <div
        class="flex justify-center items-center w-15 h-15 overflow-hidden rounded-[50%]"
      >
        <img class="w-full h-full object-cover" src="/img/4.png" alt="" />
      </div>
      <div class="flex-1 text-[#666666] text-sm leading-5 pl-2.5">
        <p class="user-title">Tài khoản của</p>
        <h2 class="text-[#1d1d1b] font-medium text-xl leading-[26px] mt-[5px]">
          Dương Tuấn Minh
        </h2>
      </div>
    </div>
    <div>
      <ul>
        <li
          class="cursor-pointer"
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <div
            class="flex items-center text-base leading-6 p-5 border-b border-gray"
            @click="toggleItem(item)"
          >
            <div :class="item.icon"></div>
            <div class="ml-2">
              {{ item.title }}
            </div>
          </div>
          <ul v-if="item.open">
            <li
              v-for="(childItem, childIndex) in item.children"
              :key="childIndex"
            >
              <div
                class="flex items-center text-base leading-6 p-5 ml-8"
                @click="selectItem(childItem)"
              >
                {{ childItem.title }}
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
    open: false,
    children: [
      {
        title: "Hồ sơ của tôi",
        children: [],
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
    children: [],
  },
  {
    title: "Chủ đề quan tâm",
    icon: "i-mdi:star-outline text-xl",
    open: false,
    children: [],
  },
  {
    title: "Khóa học đã xem",
    icon: "i-mdi:eye",
    open: false,
    children: [],
  },
  {
    title: "Ưu đãi",
    icon: "i-mdi:cards-heart-outline text-xl",
    open: false,
    children: [],
  },
  {
    title: "Thông báo",
    icon: "i-mdi:bell-ring-outline text-xl",
    open: false,
    children: [],
  },
  {
    title: "Đơn hàng",
    icon: "i-mdi:cart-arrow-down text-xl",
    open: false,
    children: [],
  },
]);

const toggleItem = (item) => {
  item.open = !item.open;
};
</script>
