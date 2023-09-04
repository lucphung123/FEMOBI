<template>
  <div class="w-full lg:px-0 flex flex-col">
    <div class="relative mt-60 md:mt-20 lg:mt-36 xl:mt-100 mb-0 md:mb-50 w-full">
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full md:mt-43 bg-[url(/img/bg/bg-banner.jpg)] bg-bottom bg-cover">
        <div class="w-full mx-auto flex items-center justify-between">
          <SlideSlide1 />
        </div>
      </div>
    </div>
    <div class="">
      <div class="flex items-center py-10">
        <div class="i-mdi:bookmark-outline text-4xl bg-blue-900"></div>
        <div class="text-3xl text-blue-900 font-700">KHÓA HỌC TIÊU BIỂU</div>
      </div>
      <div>
        <div class="flex flex-wrap mx-10">
          <button v-for="tab of tabs" :key="tab.id" text class="p-x-4 text-lg text-black" :class="activeTab === tab.id && '!text-white bg-blue-900'" @click="handleActiveTab(tab.id)">{{ tab.title }}</button>
        </div>
      </div>
    </div>
    <div class="relative mt-80 md:mt-20 lg:mt-36 xl:mt-80 mb-0 md:mb-50">
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full md:mt-50 bg-[url(/img/bg/bg-footer.png)] bg-cover bg-top h-110 flex flex-col items-center">
        <div class="w-full lg:w-225 xl:(w-300 h-250px) 2xl:(w-340 h-280px) mx-auto flex items-center my-auto">
          <div class="flex justify-center items-center space-x-20">
            <div class="h-full rounded-5 flex justify-center items-center">
              <img src="/img/5.jpg" alt="" />
            </div>
            <div class="flex-col space-y-10 flex-col justify-center items-center">
              <div>
                <p class="text-[#004390] font-600 text-5xl">Giải pháp mobiEdu</p>
              </div>
              <div>
                <p class="text-xl">Các giải pháp giúp nhà trường - doanh nghiệp mọi lĩnh vực quản lí, đào tạo, liên lạc hiệu quả, tích hợp các nội dung đào tạo từ các chuyên gia dễ dàng, làm nổi bật thương hiệu tổ chức.</p>
              </div>
              <div class="flex justify-center">
                <button class="text-blue-900 bg-white border-1px border-blue font-bold text-center p-2 rd-20px w-20%">XEM THÊM</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative mt-80 md:mt-20 lg:mt-36 xl:mt-110 mb-0 md:mb-50">
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full md:mt-50 bg-[#002B55] h-160 flex flex-col items-center">
        <div class="w-full lg:w-225 xl:(w-300 h-250px) 2xl:(w-340 h-280px) mx-auto my-auto">
          <div class="-mt-30">
            <div class="space-y-3 justify-center flex-col">
              <div class="flex items-center space-x-2">
                <div class="i-mdi:view-list-outline text-4xl bg-white"></div>
                <p class="text-white font-700 text-2xl">CỔNG THI MOBIEDU</p>
              </div>
              <div class="mx-2">
                <p class="text-white text-lg">Trang wiki các kỳ thi tại Việt Nam, cung cấp thông tin cần thiết, kênh ôn luyện học tập, thi thử dành cho mọi đối tượng.</p>
              </div>
            </div>
            <div>
              <SlideSlide2 />
            </div>
            <div class="flex justify-center">
              <button class="text-blue-900 bg-white border-1px border-blue font-bold text-center p-2 rd-20px w-150px">XEM THÊM</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-15">
      <Gift />
    </div>
    <div class="relative mt-80 md:mt-20 lg:mt-36 xl:mt-210 mb-0">
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full bg-[url(/img/bg/bg-home-4.png)] bg-cover bg-top h-200 flex flex-col items-center">
        <div class="w-full lg:w-225 xl:(w-300 h-250px) 2xl:(w-340 h-280px) mx-auto flex-col items-center my-auto">
          <div class="-mt-35">
            <Introduce />
          </div>
        </div>
      </div>
    </div>
    <div class="my-15">
      <div>
        <p class="text-color_4 font-700 text-4xl">Báo chí nói về mobiEdu</p>
      </div>
      <div><Review /></div>
    </div>

    <div class="relative mt-80 md:mt-20 lg:mt-36 xl:mt-80 mb-0 md:mb-50">
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full md:mt-50 bg-[url(/img/bg/bg-home-5.png)] bg-cover bg-bottom h-120 flex flex-col items-center">
        <div class="w-full lg:w-225 xl:(w-300 h-250px) 2xl:(w-340 h-280px) mx-auto flex items-center my-auto">
          <Advertise />
        </div>
      </div>
    </div>
    <div>
      <News />
    </div>
  </div>
</template>

<script setup>
const isLoading = ref(true)
setTimeout(() => {
  isLoading.value = false
}, 1000)
const activeTab = ref(0)
function handleActiveTab(key) {
  const courseId = courses.value?.[activeBtn.value]?.id
  const groupId = groups.value?.[activeBtn.value]?.[key]?.id
  activeTab.value = key
  getTabData(courseId, groupId)
}
const tabs = [
  {
    id: 0,
    title: "Tất cả",
  },
  {
    id: 1,
    title: "Trẻ em",
  },
  {
    id: 2,
    title: "Học sinh phổ thông",
  },
  {
    id: 3,
    title: "Sinh viên và người đi làm",
  },
  {
    id: 4,
    title: "Của bạn",
  },
]
</script>
<style scoped>
.swiper-slide-content {
  display: flex;
  flex-direction: column;
}
</style>
