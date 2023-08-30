<template>
  <div class="w-full">
    <div class="flex text-color_7 py-5 font-normal text-4 leading-4 items-center gap-2">
      <nuxt-link to="/">Trang chủ</nuxt-link>
      <div class="i-mdi:chevron-right text-xl"></div>
      <p class="font-bold">Giới thiệu</p>
    </div>
  </div>
  <div>
    <Slide7 />
  </div>
  <div>
    <div class="text-center mt-20">
      <p class="text-36px text-color_4 font-bold">mobiEdu - Nền tảng chuyển đổi số giáo dục toàn diện</p>
      <p class="text-20px text-color_8 px-65">mobiEdu là hệ sinh thái giáo dục, cung cấp giải pháp dạy học & quản lí trường học trực tuyến, phân phối các nội dung học tập tới người học ở mọi lứa tuổi.</p>
    </div>
    <div class="flex mt-10">
      <div class="w1/3">
        <div>
          <div class="i-mdi:bookmark-outline text-color_4 text-40 px-50%"></div>
          <p class="font-bold text-6 text-center">Khóa học</p>
          <p class="text-center px-10">Các khóa học cùng chuyên gia trong nhiều lĩnh vực, phù hợp mọi độ tuổi, ứng dụng công nghệ tiên tiến đáp ứng nhu cầu học tập, cá nhân hóa lộ trình và trải nghiệm học tập.</p>
        </div>
      </div>
      <div class="w1/3">
        <div>
          <div class="i-mdi:file-check text-color_4 text-40 px-50%"></div>
          <p class="font-bold text-6 text-center">Cổng thi</p>
          <p class="text-center px-10">Trang wiki các kỳ thi tại Việt Nam cung cấp thông tin cần thiết, kênh ôn luyện học tập, thi cử dành cho mọi lứa tuổi.</p>
        </div>
      </div>
      <div class="w1/3">
        <div>
          <div class="i-mdi:lightbulb-variant-outline text-color_4 text-40 px-50%"></div>
          <p class="font-bold text-6 text-center">Giải pháp</p>
          <p class="text-center px-10">Các giải pháp giúp nhà trường - doanh nghiệp mọi lĩnh vực quản lí, đào tạo, liên lạc hiệu quả, tích hợp các nội dung đào tạo từ các chuyên gia dễ dàng, làm nổi bật thương hiệu tổ chức.</p>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <nav class="w-210 h-10 flex text-center relative shadow-xl rounded-[5px] bg-white">
        <div class="absolute h-full w-25% transition-all duration-400 ease-in-out z-5 rounded-[5px] left-0 top-0 bg-color_4" :style="{ left: sliderLeft }"></div>
        <label class="w-full h-full leading-10 text-lg font-normal text-color_4 relative z-6 cursor-pointer transition-all duration-300 ease-in-out mx-1 rounded-[5px] hover:(bg-color_4 text-white)" v-for="(tab, index) in tabs" :key="index" :for="tab.id" :class="activeTab === tab.id ? '!text-white' : ''" @click="moveSlider(index)">
          {{ tab.label }}
        </label>
      </nav>
    </div>
    <div class="mt-8">
      <div v-if="activeTab === '1'"><h2 class="text-2xl font-bold">tab1</h2></div>
      <div v-else-if="activeTab === '2'">
        <h2 class="text-2xl font-bold">tab2</h2>
      </div>
      <div v-else-if="activeTab === '3'">
        <h2 class="text-2xl font-bold">3</h2>
      </div>
      <div v-else-if="activeTab === '4'">
        <h2 class="text-2xl font-bold">2</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import Slide7 from "../../components/Slide7.vue"
import { ref, computed } from "vue"

const tabs = [
  { id: "1", label: "Tiền tiểu học " },
  { id: "2", label: "Tin học - lập trình" },
  { id: "3", label: "Tiếng anh" },
  { id: "4", label: "Kỹ năng văn phòng" },
]

const activeTab = ref("1")
const sliderLeft = computed(() => {
  const tabWidth = 100 / tabs.length
  return tabWidth * tabs.findIndex(tab => tab.id === activeTab.value) + "%"
})
function moveSlider(index) {
  activeTab.value = tabs[index].id
}
</script>
