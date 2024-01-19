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
      <p class="text-36px text-color_4 font-bold">edubook - Nền tảng chuyển đổi số giáo dục toàn diện</p>
      <p class="text-20px text-color_8 px-65">edubook là hệ sinh thái giáo dục, cung cấp giải pháp dạy học & quản lí trường học trực tuyến, phân phối các nội dung học tập tới người học ở mọi lứa tuổi.</p>
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
      <div v-if="activeTab === '1'">
        <div>
          <SlideIntroduce />
        </div>
      </div>
      <div v-else-if="activeTab === '2'">
        <div>
          <SlideIntroduce />
        </div>
      </div>
      <div v-else-if="activeTab === '3'">
        <div>
          <SlideIntroduce />
        </div>
      </div>
      <div v-else-if="activeTab === '4'">
        <div>
          <SlideIntroduce />
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="w-40%">
        <p class="text-color_4 text-10 font-bold">SỨ MỆNH - TẦM NHÌN</p>
        <p class="font-bold text-color_6 text-8 mt-5">Sứ mệnh</p>
        <p class="mt-3">Kiến tạo hệ sinh thái Giáo dục số tổng thể, đồng hành cùng ngành giáo dục, các doanh nghiệp, giáo viên và người học để nâng cao tri thức, nâng tầm nguồn nhân lực Việt, góp phần đưa Việt Nam trở thành Quốc gia số, sánh vai với các cường quốc.</p>
        <p class="font-bold text-color_6 text-8 mt-5">Tầm nhìn</p>
        <p class="mt-3">edubook trở thành thương hiệu Giáo dục số hàng đầu Việt Nam, là Nền tảng Chuyển đổi số Quốc gia trong lĩnh vực giáo dục.</p>
      </div>
      <div class="w-55% flex gap-5 ml-35">
        <div class="relative bg-#003158 w-55 h-110 hover:(opacity-100) rounded-2xl">
          <img src="/img/about/v-m-1.jpg" class="absolute opacity-20 hover:(opacity-100 duration-300 ) duration-500 h-110 w-55" alt="" />
          <img src="/img/about/v-m-i1.svg" class="absolute top-40% left-38%" alt="" />
        </div>
        <div class="relative bg-#003158 w-55 h-110 hover:opacity-100 rounded-2xl">
          <img src="/img/about/v-m-2.jpg" class="absolute opacity-20 hover:(opacity-100 duration-300 ) duration-500 h-110 w-55" alt="" />
          <img src="/img/about/v-m-i2.svg" class="absolute top-40% left-38%" alt="" />
        </div>
        <div class="relative bg-#003158 w-55 h-110 hover:opacity-100 rounded-2xl">
          <img src="/img/about/v-m-3.jpg" class="absolute opacity-20 hover:(opacity-100 duration-300 ) duration-500 h-110 w-55" alt="" />
          <img src="/img/about/v-m-i3.svg" class="absolute top-40% left-38%" alt="" />
        </div>
      </div>
    </div>
    <div class="mt-10">
      <p class="font-bold text-9 text-center text-color_4">THÀNH TỰU NỔI BẬT</p>
      <SlideSuccess />
    </div>
    <div class="relative mt-90 md:mt-20 lg:mt-36 xl:mt-170 mb-0">
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full bg-[url(/img/bg/bg-home-4.png)] bg-cover bg-top h-150 flex flex-col items-center">
        <div class="w-full lg:w-225 xl:(w-300 h-250px) 2xl:(w-340 h-280px) mx-auto flex-col items-center my-auto">
          <div class="-mt-20">
            <SlideBig />
          </div>
        </div>
      </div>
    </div>
    <p class="flex justify-center text-color_4 text-7 font-bold py-5">LIÊN HỆ</p>
    <div class="flex">
      <div class="w-35% flex">
        <div class="w-1/2">
          <div class="bg-white h-40 w-40 flex items-center justify-center rounded-3xl ml-16 ease-in-out delay-50 hover:-translate-y-3 duration-200 hover:(bg-color_16) shadow-xl">
            <div>
              <div class="i-mdi:phone text-color_4 text-5xl ml-8 mb-3"></div>
              <p class="text-5">0777.202020</p>
            </div>
          </div>
          <div class="bg-white h-60 w-56 flex items-center justify-center rounded-3xl mt-6 ease-in-out delay-50 hover:-translate-y-3 duration-200 hover:(bg-color_16) shadow-xl">
            <div>
              <div class="i-mdi:email text-color_1 text-8xl ml-12"></div>
              <p class="text-5">contact@edubook.vn</p>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <div class="bg-white h-50 w-50 flex items-center justify-center rounded-3xl ml-5 mt-15 ease-in-out delay-50 hover:-translate-y-3 duration-200 hover:(bg-color_16) shadow-xl">
            <div>
              <div class="i-mdi:facebook text-color_4 text-7xl ml-4 mb-3"></div>
              <p class="text-5">edubook.vn</p>
            </div>
          </div>
          <div class="bg-white h-40 w-40 flex items-center justify-center rounded-3xl ml-5 mt-6 ease-in-out delay-50 hover:-translate-y-3 duration-200 hover:(bg-color_16) shadow-xl">
            <div>
              <div class="i-mdi:youtube text-color_1 text-5xl ml-5 mb-3"></div>
              <p class="text-5">mobi Edu</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-65% ml-5">
        <Slide6 />
      </div>
    </div>
  </div>
</template>

<script setup>
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
