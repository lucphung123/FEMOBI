<template>
  <div class="w-full">
    <div class="flex text-color_7 py-5 font-normal text-4 leading-4 items-center gap-2">
      <nuxt-link to="/">Trang chủ</nuxt-link>
      <div class="i-mdi:chevron-right text-xl"></div>
      <p class="font-bold">Khóa học của tôi</p>
    </div>
  </div>
  <div class="bg-color_11 w-full">
    <div class="flex">
      <div class="w-25%">
        <UserProfile />
      </div>
      <div class="w-75% bg-white border h-130 rounded-3 ml-10">
        <div class="py-5 px-5">
          <p class="text-color_4 text-9 mr-0.5">Ưu đãi</p>
        </div>
        <div class="flex flex-col w-1/2">
          <div class="flex gap-5 text-center bg-white">
            <div :class="['tab-item cursor-pointer w-1/5 text-sm mt-5 font-bold', activeTab === 'course' ? 'text-color_4 border-b border-color_4 pb-5' : 'text-black hover:(text-color_4)']" @click="activateTab('course')">Tất cả</div>
            <div :class="['tab-item cursor-pointer w-1/5 text-sm mt-5 font-bold', activeTab === 'news' ? 'text-color_4 border-b border-color_4 pb-5' : 'text-black hover:(text-color_4)']" @click="activateTab('news')">Khóa học</div>
            <div :class="['tab-item cursor-pointer w-1/5 text-sm mt-5 font-bold', activeTab === 'test' ? 'text-color_4 border-b border-color_4 pb-5' : 'text-black hover:(text-color_4)']" @click="activateTab('test')">Cổng thi</div>
            <div :class="['tab-item cursor-pointer w-1/5 text-sm mt-5 font-bold', activeTab === 'mobiFone' ? 'text-color_4 border-b border-color_4 pb-5' : 'text-black hover:(text-color_4)']" @click="activateTab('mobiFone')">mobiFone</div>
            <div :class="['tab-item cursor-pointer w-1/5 text-sm mt-5 font-bold', activeTab === 'other' ? 'text-color_4 border-b border-color_4 pb-5' : 'text-black hover:(text-color_4)']" @click="activateTab('other')">Khác</div>
          </div>
        </div>
        <div v-if="activeTab === 'news'">
          <div class="px-35% mt-10">
            <img src="/img/noFile.svg" alt="" />
            <p class="text-5 mt-3 ml-3">Bạn chưa có ưu đãi nào!</p>
          </div>
        </div>
        <div v-if="activeTab === 'course'">
          <div class="px-35% mt-10">
            <img src="/img/noFile.svg" alt="" />
            <p class="text-5 mt-3 ml-3">Bạn chưa có ưu đãi nào!</p>
          </div>
        </div>
        <div v-if="activeTab === 'test'">
          <div class="px-35% mt-10">
            <img src="/img/noFile.svg" alt="" />
            <p class="text-5 mt-3 ml-3">Bạn chưa có ưu đãi nào!</p>
          </div>
        </div>
        <div v-if="activeTab === 'mobiFone'">
          <div class="px-35% mt-10">
            <img src="/img/noFile.svg" alt="" />
            <p class="text-5 mt-3 ml-3">Bạn chưa có ưu đãi nào!</p>
          </div>
        </div>
        <div v-if="activeTab === 'other'">
          <div class="px-35% mt-10">
            <img src="/img/noFile.svg" alt="" />
            <p class="text-5 mt-3 ml-3">Bạn chưa có ưu đãi nào!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserProfile from "../../components/account/UserProfile.vue"
// layouts
definePageMeta({
  layout: "course",
})
const activeTab = ref("course")
function activateTab(tabName) {
  activeTab.value = tabName
  activeSubTab.value = ""
}
</script>
