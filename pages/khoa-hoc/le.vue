<template>
  <div class="w-full lg:px-0 flex flex-col">
    <div class="flex space-x-4 my-5 mt-7 items-center">
      <nuxt-link to="/" class="text-gray-400">Trang chủ</nuxt-link>
      <div class="i-mdi:chevron-right bg-gray"></div>
      <p class="font-bold text-gray-500">khoá học lẻ</p>
    </div>
    <div class="w-full flex space-x-8">
      <div class="w-3/7 space-y-5">
        <a href="https://www.youtube.com/watch?v=L05glUV_ibI&amp;ab_channel=mobiEdu" data-fancybox=""><img class="rd-2" src="/img/1.jpg" alt="" /></a>
        <Slide5 />
      </div>
      <div class="bg-[#E3EFF9] rd-3">
        <div class="p-8 space-y-7">
          <p class="border-b border-blue-300 pb-3 font-700 text-2xl leading-7">Gói luyện thi Học thủ khoa, gói luyện thi Học thủ khoa gói luyện thi Học thủ khoa gói luyện thi Học thủ khoa gói luyện thi</p>
          <div>
            <p class="mt-3 text-lg text-gray-500">Nguyễn Thanh Hằng</p>
            <div class="flex items-center space-x-5">
              <p class="font-700 leading-5 text-2xl text-color_4">18.000.000 đ</p>
              <p class="text-gray-4 line-through">20.000.000 đ</p>
              <p class="bg-red-500 p1 rd-1 text-white font-600">-50%</p>
            </div>
          </div>
          <div class="flex items-center space-x-7">
            <button class="text-white rd-full text-sm font-semibold hover:bg-color_5 hover:text-white bg-color_4 px-7 py-2">ĐĂNG KÍ HỌC NGAY</button>
            <button class="text-color_4 bg-white px-7 py-2 hover:bg-color_5 hover:text-black rd-full font-700 text-sm text-white leading-[1.375] border-color_4 border-1">THÊM VÀO GIỎ HÀNG</button>
          </div>
          <div class="flex space-x-12">
            <div class="space-y-3">
              <p class="text-xl text-gray-500">Số lượng bài học</p>
              <p class="font-bold text-xl">20</p>
            </div>
            <div class="space-y-3">
              <p class="text-xl text-gray-500">Thời lượng</p>
              <p class="font-bold text-xl">02 giờ 50 phút</p>
            </div>
            <div class="space-y-3">
              <p class="text-xl text-gray-500">Lĩnh vực</p>
              <p class="font-bold text-xl">Sức khỏe</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative mt-80 md:mt-20 lg:mt-36 xl:mt-170 mb-0 md:mb-50">
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full bg-[#efefef] h-160 flex flex-col items-center">
        <div class="w-full lg:w-225 xl:(w-300 h-250px) 2xl:(w-340 h-280px) mx-auto my-auto">
          <div class="-mt-30 bg-white w-5/7 rd-1">
            <div class="p10 space-y-5">
              <div class="flex bg-#f2f7fd rd-2 sticky top-0">
                <button
                  v-for="(tab, index) in tabs"
                  :key="index"
                  @click="changeTab(tab, index)"
                  :class="{
                    'bg-color_4': activeTab === tab,
                    'bg-#f2f7fd text-color_4': activeTab !== tab,
                  }"
                  class="px-4 py-2 rd-2 focus:outline-none text-xl"
                >
                  {{ tab }}
                </button>
              </div>
              <div v-for="(tab, index) in tabs" :key="index" ref="tabElements" class="mt-10 bg-gray-200 p-4">
                <p>Nội dung của Tab {{ index + 1 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref(['Tab 1', 'Tab 2', 'Tab 3']);
const activeTab = ref('Tab 1');
const tabElements = ref([]);

const changeTab = (tab, index) => {
  activeTab.value = tab;

  // Cuộn đến nội dung của tab tương ứng
  const tabElement = tabElements[index];
  if (tabElement) {
    tabElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Chờ một chút cho việc cuộn xảy ra trước khi cuộn trang lên đầu
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 100);
  }
};
const maxLength = 670
const showFullText = ref(false)

const shortenedText = computed(() => {
  return showFullText.value ? longText : longText.slice(0, maxLength)
})

const toggleText = () => {
  showFullText.value = !showFullText.value
}

const longText = `Khóa học sẽ giúp các bạn hiểu tường tận về việc xây dựng website cần các yếu tố nào. Các bạn sẽ học từ việc mua tên miền, hosting thế nào cho chuẩn tới cách thiết kế giao diện website đẹp, chuẩn SEO, chạy nhanh và thân thiện với người dùng, quản trị nhiều website cùng lúc.


Tham gia khóa học các bạn sẽ được thực hành trên giao diện website tin tức và bán hàng cụ thể giúp các bạn có thể thiết kế được nhiều dạng website khác nhau.


Khóa học hướng dẫn trực quan, chi tiết, giúp các bạn hiểu được bản chất để tự thiết kế sáng tạo. Không theo lối mòn, không cần biết code, bạn chỉ cần một chút sáng tạo là có thể thiết kế được nhiều giao diện đẹp.


Lộ trình học tập:


Khóa học sẽ giúp các bạn hiểu tường tận về việc xây dựng website cần các yếu tố nào. Các bạn sẽ học từ việc mua tên miền, hosting thế nào cho chuẩn tới cách thiết kế giao diện website đẹp, chuẩn SEO, chạy nhanh và thân thiện với người dùng, quản trị nhiều website cùng lúc.


Tham gia khóa học các bạn sẽ được thực hành trên giao diện website tin tức và bán hàng cụ thể giúp các bạn có thể thiết kế được nhiều dạng website khác nhau.


Khóa học hướng dẫn trực quan, chi tiết, giúp các bạn hiểu được bản chất để tự thiết kế sáng tạo. Không theo lối mòn, không cần biết code, bạn chỉ cần một chút sáng tạo là có thể thiết kế được nhiều giao diện đẹp.`
</script>
