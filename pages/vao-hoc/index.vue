<template>
  <div class="w-full mt-5">
    <div class="relative mt-90 md:mt-20 lg:mt-36 xl:mt-180 mb-0 w-full">
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full bg-white bg-cover bg-top h-300 flex flex-col items-center">
        <div class="w-full lg:w-225 xl:(w-320 h-250px) 2xl:(w-340 h-280px) my-auto">
          <div class="flex gap-5 w-full">
            <div class="">
              <button class="bg-color_18 text-color_6 rounded-1 w-28 flex p-1 justify-between flex items-center hover:(bg-color_1 text-white)">
                <div class="i-mdi:chevron-left text-xl"></div>
                <p class="ml-2 mr-2 font-bold text-sm">Bài trước</p>
              </button>
            </div>
            <div>
              <button class="bg-color_17 text-white rounded-1 p-1 flex w-28 justify-between flex items-center hover:(bg-color_1 text-white)">
                <p class="mr-2 ml-2 font-bold text-sm">Bài sau</p>
                <div class="i-mdi:chevron-right text-xl"></div>
              </button>
            </div>
            <div class="flex ml-20% items-center">Tổng quan về cờ vua: các khái niệm cơ bản</div>
          </div>
          <div class="flex border rounded-xl mt-5">
            <div class="w-60% h-140">
              <video src="/img/video.mp4" type="video/mp4" controls poster="/img/course/img.jpg"></video>
            </div>
            <div class="w-40%"></div>
          </div>
          <div class="mt-5 flex justify-between">
            <div class="flex w-1/3 items-center">
              <div class="i-mdi:star text-color_5 text-3xl"></div>
              <div class="i-mdi:star text-color_5 text-3xl"></div>
              <div class="i-mdi:star text-color_5 text-3xl"></div>
              <div class="i-mdi:star-half-full text-color_5 text-3xl"></div>
              <div class="i-mdi:star-outline text-color_5 text-3xl"></div>
            </div>
            <div class="w-2/3">
              <div class="flex items-center justify-center gap-3">
                <img class="w-7 h-7" src="/img/course/playBtn.svg" />
                <div>Autoplay</div>
                <label class="flex items-center space-x-2 cursor-pointer mr-5">
                  <input type="checkbox" v-model="isChecked" class="hidden" />
                  <span class="w-14 h-8 bg-gray-400 rounded-full p-1 transition-transform duration-300 ease-in-out transform" :class="{ 'bg-green-500': isChecked }">
                    <span class="block w-6 h-6 bg-white rounded-full shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out" :class="{ 'translate-x-full': isChecked }"></span>
                  </span>
                </label>
                <div class="flex w-50">
                  <img class="w-7 h-7" src="/img/course/warning.svg" alt="Icon" />
                  <div class="ml-3">Báo lỗi</div>
                </div>
                <input class="bg-[white] w-full h-[50px] text-color_8 text-sm px-5 py-[5px] rounded-[5px] border outline-none" type="text" placeholder="Ghi chú cho bài học" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex mt-20 h-150">
    <div class="bg-white rounded-lg w-73% p-10">
      <div>
        <nav class="w-210 h-15 flex text-center relative shadow-xl rounded-[5px] bg-#F2F7FD">
          <div class="absolute h-full w-25% transition-all duration-400 ease-in-out z-5 rounded-[5px] left-0 top-0 bg-color_4" :style="{ left: sliderLeft }"></div>
          <label class="w-full h-full leading-15 text-lg font-normal text-color_4 relative z-6 cursor-pointer transition-all duration-300 ease-in-out mx-1 rounded-[5px] hover:(bg-color_4 text-white)" v-for="(tab, index) in tabs" :key="index" :for="tab.id" :class="activeTab === tab.id ? '!text-white' : ''" @click="moveSlider(index)">
            {{ tab.label }}
          </label>
        </nav>
      </div>
      <div class="mt-8">
        <div v-if="activeTab === '1'">
          <p class="font-bold text-2xl">Tổng quan</p>
          <p class="leading-9">
            Search, search, search..... Cách học tiếng Anh giao tiếp, Học tiếng Anh giao tiếp căn bản, Tiếng Anh cho người mất gốc, Tiếng Anh cho người đi làm..... Bạn thấy quen không ạ? Bạn đã bao giờ liên tục hỏi Bác Google cách học tiếng Anh hiệu quả, học tiếng Anh từ đầu...Nhưng vẫn không tìm ra cho mình một giải pháp, một cách thức, một giáo viên, hay một trung tâm học hiệu quả. Tiếng Anh của bạn vẫn.... Oh my God, Tôi chả nói được tiếng Anh đâu! Đừng lo lắng bạn nhé, không cần phải tìm kiếm đâu xa, ngay tại đây, Unica sẽ giúp bạn. Khóa học tiếng Anh giao tiếp căn bản cho người Mất gốc của Giảng viên Victoria Dương sẽ là cầu nối, là nền móng cho tiếng Anh của bạn bay cao, bay xa. Những chủ đề đơn giản nhưng gần gũi như Giới thiệu bản thân, Shopping, Hỏi giờ, Giao tiếp trong Nhà hàng, Khách sạn,... khóa học giúp bạn, dù là người mới bắt đầu, chưa biết gì về tiếng Anh vẫn hiểu và thực hành giao tiếp được ngay. Còn nếu như, bạn đã có chút kiến thức, khả năng tiếng Anh, thì khóa học
            này sẽ giúp bạn hệ thống bài bản những chủ đề quen thuộc trong giao tiếp hàng ngày. Với tiêu chí: đơn giản, căn bản nhưng ứng dụng cao, Giảng viên tiếng Anh Victoria Duong đã giúp cho rất nhiều người chinh phục được tiếng Anh và tự tin trong giao tiếp.
          </p>
        </div>
        <div v-else-if="activeTab === '2'">
          <p class="font-bold text-2xl">Tài liệu</p>
          <div class="flex justify-center mt-10">
            <img src="/img/noFile.svg" alt="" />
          </div>
          <div class="flex justify-center mt-5 leading-5 text-xl font-bold py-6">
            <p>Khóa học này không có tài liệu đính kèm</p>
          </div>
        </div>
        <div v-else-if="activeTab === '3'">
          <p class="font-bold text-2xl">Hỏi đáp</p>
          <p class="mt-8">Nhập nội dung thảo luận</p>
          <textarea class="w-full h-40 border mt-5 outline-none px-6 py-3" placeholder="Nội dung"></textarea>
          <button class="hover:bg-color_5 hover:text-color_6 w-25 mt-3 bg-color_4 h-10 text-[white] text-sm px-[20px] rounded-[20px] font-bold">Gửi</button>
          <p class="font-bold text-color_4 text-xl mt-5">Danh sách thảo luận mới nhất</p>
        </div>
        <div v-else-if="activeTab === '4'">
          <p class="font-bold text-2xl">Ghi chép</p>
          <div class="flex justify-center mt-10">
            <img src="/img/noFile.svg" alt="" />
          </div>
          <div class="flex justify-center mt-5 leading-5 text-xl font-bold py-6">
            <p>Khóa học này không có ghi chép nào</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-10">
      <p class="text-xl text-color_4 font-bold">Hồ sơ giảng viên</p>
      <div class="bg-color_5 rounded-lg flex items-center p-5 w-80 mt-3">
        <img src="/img/about/avatar.png" class="w-30 h-30 rounded-full" alt="" />
        <p class="font-bold text-white ml-5">Victoria Dương</p>
      </div>
      <p class="text-xl text-color_4 font-bold mt-8">Đánh giá khóa học</p>
      <div class="bg-#F2F7FD rounded-lg p-5 w-80 h-50 mt-8">
        <div class="cursor-pointer text-8">
          <span v-for="star in stars" :key="star" :class="starClass(star)" @click="rate(star)"> ★ </span>
        </div>
        <input type="text" placeholder="Nội dung" class="bg-[white] w-full h-[60px] text-color_8 text-sm px-2 rounded-[5px] outline-none" />
        <button class="hover:bg-color_5 hover:text-color_6 w-25 mt-3 bg-color_4 h-10 text-[white] text-sm px-[20px] rounded-[20px] font-bold">Gửi</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const activeTab = ref("1")
const tabs = [
  { id: "1", label: "TỔNG QUAN " },
  { id: "2", label: "TÀI LIỆU" },
  { id: "3", label: "HỎI ĐÁP" },
  { id: "4", label: "GHI CHÉP" },
]
const rating = ref(0)

const stars = [1, 2, 3, 4, 5]

const starClass = star => {
  return {
    "text-yellow-500": star <= rating.value,
    "text-gray-500": star > rating.value,
  }
}

const rate = star => {
  rating.value = star
}
const sliderLeft = computed(() => {
  const tabWidth = 100 / tabs.length
  return tabWidth * tabs.findIndex(tab => tab.id === activeTab.value) + "%"
})
function moveSlider(index) {
  activeTab.value = tabs[index].id
}
// layouts
definePageMeta({
  layout: "course",
})
const isChecked = ref(false)
</script>
