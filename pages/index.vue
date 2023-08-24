<template>
  <div class="">
    <div class="flex flex-col justify-center items-center">
      <div class="w-screen">
        <div class="bg-[url(/img/bg/bg-banner.jpg)] wfull object-fill bg-cover relative">
          <Slide1 class="absolute" />
        </div>
      </div>
    </div>
    <div class="">
      <div class="flex items-center p-10">
        <div class="i-mdi:bookmark-outline text-4xl bg-blue-900"></div>
        <div class="text-3xl text-blue-900 font-700">KHÓA HỌC TIÊU BIỂU</div>
      </div>
      <div>
        <div class="flex flex-wrap mx-10">
          <button v-for="tab of tabs" :key="tab.id" text class="p-x-4 text-lg text-black" :class="activeTab === tab.id && '!text-white bg-blue-900'" @click="handleActiveTab(tab.id)">{{ tab.title }}</button>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <div class="bg-[url(/img/bg/bg-footer.png)] w-screen bg-cover bg-center mt-20">
        <div class="flex justify-center items-center p25 space-x-20">
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
    <div class="flex flex-col justify-center items-center">
      <div class="bg-[#002B55] w-screen bg-cover bg-center">
        <div class="p-20">
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
            <Slide2 />
          </div>
          <div class="flex justify-center">
            <button class="text-blue-900 bg-white border-1px border-blue font-bold text-center p-2 rd-20px w-150px">XEM THÊM</button>
          </div>
        </div>
      </div>
    </div>
    <div class="p-15">
      <Gift></Gift>
    </div>
    <div>
      <Introduce />
    </div>
    <div class="p-20 flex-col">
      <div>
        <p class="text-color_4 font-700 text-4xl">Báo chí nói về mobiEdu</p>
      </div>
      <div><Review /></div>
    </div>
    <div>
      <Advertise />
    </div>
    <div>
      <News />
    </div>
  </div>
</template>

<script setup>
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
  padding: 1rem;
}
</style>
