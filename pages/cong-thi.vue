<template>
  <div class="w-full">
    <div class="flex space-x-4 my-5 mt-7 items-center w-full">
      <nuxt-link to="/" class="text-gray-400">Trang chủ</nuxt-link>
      <div class="i-mdi:chevron-right bg-gray"></div>
      <p class="font-bold text-gray-500">Cổng thi</p>
    </div>
    <div class="w-full flex items-center space-x-15">
      <div class="w-1/5">
        <div class="space-y-3">
          <div class="flex items-center space-x-2">
            <div class="i-mdi:menu text-2xl bg-color_4"></div>
            <div class="text-xl font-bold text-color_4">DANH MỤC</div>
          </div>
          <div>
            <div class="border-y-1.5 border-gray-300 py-4 hover:bg-color_10">
              <NuxtLink to="" class="font-bold text-lg text-color_4 mx-6">Tất cả</NuxtLink>
            </div>
            <div class="border-b-1 border-gray-300 py-4 hover:bg-color_10">
              <NuxtLink to="" class="text-#333333 text-lg mx-6">Trẻ em</NuxtLink>
            </div>
            <div class="border-gray-300 py-4 hover:bg-color_10">
              <NuxtLink to="" class="text-#333333 text-lg mx-6">Học sinh phổ thông</NuxtLink>
            </div>
            <div class="border-t-1.5 border-gray-300 py-4 hover:bg-color_10">
              <NuxtLink to="" class="text-#333333 text-lg mx-6">Sinh viên và người đi làm</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/3">
        <Slide6 />
      </div>
    </div>
    <div class="space-x-15 mt-10 flex">
      <div class="w-1/5">
        <div>
          <ul>
            <li class="cursor-pointer" v-for="(item, index) in menuItems" :key="index">
              <div class="flex items-center justify-between text-base leading-6" @click="toggleItem(item)">
                <div class="flex items-center text-color_4 space-x-2">
                  <div :class="item.icon"></div>
                  <div>
                    <NuxtLink class="font-bold text-2xl" :to="item.url">
                      {{ item.title }}
                    </NuxtLink>
                  </div>
                </div>
                <div v-if="item.children && item.children.length" :class="item.open ? 'i-mdi:chevron-up md:text-2xl bg-color_4' : 'i-mdi:chevron-down md:text-xl bg-color_4'"></div>
              </div>
              <div class="overflow-auto transition-all scrollbar-hide" :class="item.open && index === 0 ? 'h-60 duration-500' : 'h-0 duration-500'">
                <div v-for="(childItem, childIndex) in item.children" :key="childIndex">
                  <div class="mt-3">
                    <div class="border-y-1.5 border-gray-300 py-4 hover:bg-color_10">
                      <NuxtLink to="/khoa-hoc" class="font-bold text-lg text-color_4 mx-8">Tất cả</NuxtLink>
                    </div>
                    <div class="border-b-1 border-gray-300 py-4 hover:bg-color_10">
                      <NuxtLink to="/khoa-hoc/tre-em" class="text-#333333 text-lg mx-8">Trẻ em</NuxtLink>
                    </div>
                    <div class="border-gray-300 py-4 hover:bg-color_10">
                      <NuxtLink to="/khoa-hoc/hoc-sinh-pho-thong" class="text-#333333 text-lg mx-8">Học sinh phổ thông</NuxtLink>
                    </div>
                    <div class="border-t-1.5 border-gray-300 py-4 hover:bg-color_10">
                      <NuxtLink to="/khoa-hoc/sinh-vien-nguoi-di-lam" class="text-#333333 text-lg mx-8">Sinh viên và người đi làm</NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex bg-white sticky flex-col transition duration-[all] ease-[ease-in-out] w-full top-30 rd-3 shadow-md mt-7">
          <div class="flex items-center bg-color_4 rd-t-3">
            <div class="i-mdi:format-list-bulleted-square text-2xl mx-5 bg-white"></div>
            <div class="text-xl font-500 leading-6 py-5 text-white">LĨNH VỰC</div>
          </div>
          <div v-for="(product, index) in products" :key="index" class="flex space-x-3 mx-5 py-3">
            <input class="" type="checkbox" id="" />
            <p class="text-gray-700 text-15px">{{ product.office }}</p>
          </div>
        </div>
      </div>
      <div class="w-4/5">
        <div class="flex items-center space-x-10">
          <img src="/img/19.png" alt="" />
          <div class="space-y-8">
            <p class="text-xl font-bold">Cổng thi đại học</p>
            <div class="space-y-3">
              <p class="text-color_8 font-400 text-14px">Tốt nghiệp THPT QG là kỳ thi quan trọng bậc nhất của học sinh phổ thông trước khi bước vào cánh cổng đại học. Chuyên trang thi đại học mobiEdu cung cấp 1 lộ trình đầy đủ cho thí sinh, bao gồm: Wiki đại học, Đánh giá năng lực, Ôn luyện cấp tốc/ chuyên sâu, Thi thử, Tra cứu điểm, MXH hỏi đáp bài tập.</p>
              <button class="px-6 py-1 text-color_4 border-1px border-color_4 bg-white rounded-full font-600 text-sm hover:text-black hover:bg-color_5 hover:border-color_5 transition-all duration-300">CHI TIẾT</button>
            </div>
            <div class="space-x-2">
              <button class="px-6 py-1 text-white border-1px bg-color_4 rounded-full font-700 text-14px leading-5 hover:text-black hover:bg-color_5 hover:border-color_5 transition-all duration-300">ĐĂNG KÍ NGAY</button>
              <button class="px-6 py-1 text-color_4 border-1px border-color_4 bg-white rounded-full font-600 text-sm hover:text-black hover:bg-color_5 hover:border-color_5 transition-all duration-300">LUYỆN TẬP</button>
              <button class="px-6 py-1 text-color_4 border-1px border-color_4 bg-white rounded-full font-600 text-sm hover:text-black hover:bg-color_5 hover:border-color_5 transition-all duration-300">TRA CỨU KẾT QUẢ</button>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-8 my-25">
          <div class="space-y-8">
            <p class="text-xl font-bold">Chinh phục tiếng Anh - English Beat</p>
            <div class="space-y-3">
              <p class="text-color_8 font-400 text-14px">Chinh phục tiếng Anh English Beat là sân chơi dành cho học sinh THPT, giúp các em học sinh nắm vững các kỹ năng tiếng Anh trong chương trình giáo dục phổ thông của Bộ GD&ĐT và định hướng theo các chương trình quốc tế (chứng chỉ IELTS). Sân chơi được tổ chức thường niên bởi mobiEdu thuộc Trung tâm dịch vụ số MobiFone phối hợp với các Sở GD&ĐT trong cả nước. Các thí sinh tham gia English Beat sẽ trải qua 3 vòng thi theo hai hình thức: thi Tuần, thi Tháng trực tuyến (online) tại website http://english.mobiedu.vn; vòng Chung kết được tổ chức dưới dạng sân thi đấu tại các địa phương. Năm 2022, lần đầu tiên English Beat được tổ chức tại Bình Thuận đã thu hút hàng chục nghìn em học sinh đến từ 23 trường THPT trên địa bàn và đã gây tiếng vang lớn không chỉ trong toàn tỉnh mà lan rộng ra các địa phương khác.</p>
              <button class="px-6 py-1 text-color_4 border-1px border-color_4 bg-white rounded-full font-600 text-sm hover:text-black hover:bg-color_5 hover:border-color_5 transition-all duration-300">CHI TIẾT</button>
            </div>
            <div class="space-x-2">
              <button class="px-6 py-1 text-white border-1px bg-color_4 rounded-full font-700 text-14px leading-5 hover:text-black hover:bg-color_5 hover:border-color_5 transition-all duration-300">ĐĂNG KÍ NGAY</button>
              <button class="px-6 py-1 text-color_4 border-1px border-color_4 bg-white rounded-full font-600 text-sm hover:text-black hover:bg-color_5 hover:border-color_5 transition-all duration-300">LUYỆN TẬP</button>
            </div>
          </div>
          <img src="/img/20.png" alt="" />
        </div>
        <div class="flex items-center space-x-10">
          <img src="/img/21.png" alt="" />
          <div class="space-y-8">
            <p class="text-xl font-bold">IELTS</p>
            <div class="space-y-3">
              <p class="text-color_8 font-400 text-14px">IELTS là kỳ thi đánh giá năng lực tiếng Anh dành học sinh, sinh viên và người đi làm tại các nước sử dụng ngôn ngữ chính không phải là tiếng Anh. Tại Việt Nam, IELTS được tổ chức thường xuyên bởi IDP Education và British Council với đầy đủ 4 kỹ năng Nghe, Nói , Đọc, Viết. Chứng chỉ IELTS có thời hạn sử dụng là 2 năm và được công nhận trên toàn thế giới. Trước đây người thi IELTS ở Việt Nam chủ yếu để du học, ngày nay chứng chỉ IELTS còn có giá trị quy đổi ra điểm thi Tốt nghiệp THPTQG để xét tuyển đại học.</p>
              <button class="px-6 py-1 text-color_4 border-1px border-color_4 bg-white rounded-full font-600 text-sm hover:text-black hover:bg-color_5 hover:border-color_5 transition-all duration-300">CHI TIẾT</button>
            </div>
            <div class="space-x-2">
              <button class="px-6 py-1 text-white border-1px bg-color_4 rounded-full font-700 text-14px leading-5 hover:text-black hover:bg-color_5 hover:border-color_5 transition-all duration-300">ĐĂNG KÍ NGAY</button>
              <button class="px-6 py-1 text-color_4 border-1px border-color_4 bg-white rounded-full font-600 text-sm hover:text-black hover:bg-color_5 hover:border-color_5 transition-all duration-300">LUYỆN TẬP</button>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button class="px-8 py-2 text-color_4 border-1px border-color_4 bg-white rounded-full font-600 text-sm hover:text-black hover:bg-color_5 hover:border-color_5 transition-all duration-300">XEM THÊM</button>
        </div>
      </div>
    </div>
    <div class="mt-40 space-y-10">
      <div class="flex space-x-4 items-center">
        <div class="i-mdi:file-edit-outline text-5xl bg-color_4"></div>
        <div class="text-4xl font-700 text-color_4">ĐĂNG KÍ HỌC VÀ ÔN LUYỆN</div>
      </div>
      <div>
        <Slide7 />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import Slide6 from "../components/slide/slide6.vue"
import Slide7 from "../components/slide/Slide7.vue"  

const products = [
  {
    office: "Văn hoá",
  },
  {
    office: "Khoa học",
  },
  {
    office: "Tiếng anh",
  },
  {
    office: "Kĩ năng",
  },
  {
    office: "Tổng hợp",
  },
]
const visibleCount = ref(5)
const menuItems = ref([
  {
    title: "DANH MỤC",
    icon: "i-mdi:menu text-2xl",
    open: false,
    children: [
      {
        title: "Hồ sơ của tôi",
        children: [],
        url: "/tai-khoan/ho-so",
      },
    ],
  },
])
const menuItems1 = ref([
  {
    title: "Hướng dẫn đăng kí khoá học",
    icon: "i-mdi:file-edit-outline text-2xl",
    url: "/khoa-hoc",
    open: false,
    children: [
      {
        title: "Hồ sơ của tôi",
        children: [],
        url: "/tai-khoan/ho-so",
      },
    ],
  },
])
function toggleItem(item) {
  console.log("🚀 ~ file: UserProfile.vue:99 ~ toggleItem ~ item:", item)
  item.open = !item.open
}
</script>
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
