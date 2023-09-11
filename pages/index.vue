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
      <div class="mb-10 w-full">
        {{ sliderLeft }}
        <div class="w-200 h-[30px] flex justify-between text-center relative rounded-[5px] bg-gray-200">
          <div id="bigwidth" class="absolute h-full transition-all duration-400 ease-in-out z-4 rounded-[5px] left-0 top-0 bg-color_4" :class="persentwidth" :style="{ left: sliderLeft }"></div>
          <div class="h-full leading-[30px] text-lg font-normal text-black relative z-5 cursor-pointer transition-all duration-300 ease-in-out mx-[5px] my-0 rounded-[5px] hover:(bg-color_4 text-white)" v-for="(tab, index) in tabs" :key="index" :for="tab.id" :class="activeTab === tab.id ? '!text-white' : ''" @click="moveSlider($event, index)">
            {{ tab.label }}
          </div>
        </div>
      </div>

      <div class="w-full mx-auto container h-full xs:px-0 bg-white">
        <div class="flex p-2">
          <nuxt-link v-if="data.length > 0" class="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:(grid-cols-4) lg:grid-cols-6">
            <CourseImageTextSquare class="bg-white rounded overflow-hidden shadow-md hover:(shadow-lg shadow-blue-400) cursor-pointer duration-300" v-for="(item, index) in data" :key="index" :item_course="item" />
          </nuxt-link>
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
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full md:mt-50 bg-[url(/img/banner/banner-1.png)] bg-cover bg-bottom h-120 flex flex-col items-center"></div>
    </div>
    <div>
      <News />
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue"
import { useSettingStore } from "~~/stores/settingStore"
const settingStore = useSettingStore()
const { RestApi } = useApi()
const route = useRoute()
const filter_value = ref({
  time: null,
  rating: null,
  type: 1,
  isFree: false,
  isSale: false,
})
const persentwidth = computed(() => {
  return `${(offWidth.value / 4800) * 100}%`
})
const query = computed(() => {
  let query = {
    page: pagination.value.page - 1,
    limit: pagination.value.limit,
    category: route.params.slug ? route.params.slug : "",
    rating: filter_value.value.rating,
    isFree: filter_value.value.isFree,
    isSale: filter_value.value.isSale,
    IdPosition: filter_value.value.type,
  }
  return query
})
const pagination = ref({
  page: 1,
  limit: 120,
  total: 0,
})
const offWidth = ref("")
const { data: courseData, pending: coursePending, error: courseError } = await RestApi.course.get({ query: query })
const data = computed(() => {
  if (courseData.value?.status) {
    pagination.value.total = courseData.value.total
    return courseData.value.item
  } else {
    return []
  }
})

const tabs = [
  { id: "0", label: "Tất cả" },
  { id: "1", label: "Trẻ em" },
  { id: "2", label: "Học sinh phổ thông" },
  { id: "3", label: "Sinh viên và người đi làm" },
  { id: "4", label: "Của bạn" },
]
const activeTab = ref("0")
const sliderLeft = computed(() => {
  const tabWidth = (offWidth.value / 4800) * 100
  return tabWidth * tabs.findIndex(tab => tab.id === activeTab.value) + "%"
})
function moveSlider(e, index) {
  console.log("🚀 ~ file: index.vue:159 ~ moveSlider ~ e:", e.srcElement.offsetWidth)
  console.log("🚀 ~ file: index.vue:159 ~ moveSlider ~ index:", index)
  activeTab.value = tabs[index].id
  offWidth.value = e.srcElement.offsetWidth
}
</script>
<style scoped>
.swiper-slide-content {
  display: flex;
  flex-direction: column;
}
</style>
