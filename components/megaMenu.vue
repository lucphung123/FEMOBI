<template>
  <div class="flex sticky flex-col transition duration-[all] ease-[ease-in-out] w-full top-23">
    <div class="flex gap-5 text-center border-b pb-5 bg-white">
      <div :class="['tab-item cursor-pointer w-1/5 text-xl mt-5 font-bold', activeTab === 'course' ? 'text-color_4 border-b border-color_4 pb-5' : 'text-black hover:(text-color_4)']" @click="activateTab('course')">Sản phẩm</div>
      <div :class="['tab-item cursor-pointer w-1/5 text-xl mt-5 font-bold', activeTab === 'news' ? 'text-color_4 border-b border-color_4 pb-5' : 'text-black hover:(text-color_4)']" @click="activateTab('news')">Hướng dẫn</div>
      <div :class="['tab-item cursor-pointer w-1/5 text-xl mt-5 font-bold', activeTab === 'other' ? 'text-color_4 border-b border-color_4 pb-5' : 'text-black hover:(text-color_4)']" @click="activateTab('other')">Chính sách</div>
    </div>
  </div>
  <div class="mt-5">
    <div v-if="activeTab === 'course'">
      <div class="flex">
        <div class="w-25% mr-15">
          <p class="text-color_4 border-b border-color_4 pb-5 font-bold">DANH MỤC HỖ TRỢ</p>
          <div :class="['sub-tab-item', activeSubTab1 === 'course1' ? 'text-color_4 border-b border-color_4 pb-5 ' : 'text-color_6 cursor-pointer hover:(text-color_4) border-b border-color_4 pb-5']" @click="activateSubTab1('course1')"><p class="ml-4 mt-5 font-bold">Khóa học</p></div>
          <div :class="['sub-tab-item', activeSubTab1 === 'course2' ? 'text-color_4 border-b border-color_4 pb-5' : 'text-color_6 cursor-pointer hover:(text-color_4) border-b border-color_4 pb-5']" @click="activateSubTab1('course2')"><p class="ml-4 mt-5 font-bold">Giải pháp</p></div>
          <div :class="['sub-tab-item', activeSubTab1 === 'course3' ? 'text-color_4 border-b border-color_4 pb-5' : 'text-color_6 cursor-pointer hover:(text-color_4) border-b border-color_4 pb-5']" @click="activateSubTab1('course3')"><p class="ml-4 mt-5 font-bold">Cổng thi</p></div>
        </div>
        <div class="w-70%">
          <div :class="{ hidden: activeSubTab1 !== 'course1' }" class="w-full rounded-lg border p-10">
            <p class="font-bold text-color_4 border-b pb-5 text-8">Khóa học</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">1. Hệ sinh thái giáo dục mobiEdu có những khóa học như thế nào?</p>
          </div>
          <div :class="{ hidden: activeSubTab1 !== 'course2' }" class="w-full rounded-lg border p-10">
            <p class="font-bold text-color_4 border-b pb-5 text-8">Giải pháp</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">1. Các giải pháp mobiEdu là gì?</p>
          </div>
          <div :class="{ hidden: activeSubTab1 !== 'course3' }" class="w-full rounded-lg border p-10">
            <p class="font-bold text-color_4 border-b pb-5 text-8">Cổng thi</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">1. Cổng thi mobiEdu là gì?</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="activeTab === 'news'">
      <div class="flex">
        <div class="w-25% mr-15">
          <p class="text-color_4 border-b border-color_4 pb-5 font-bold">DANH MỤC HỖ TRỢ</p>
          <div :class="['sub-tab-item', activeSubTab === 'news1' ? 'text-color_4 border-b border-color_4 pb-5 ' : 'text-color_6 cursor-pointer hover:(text-color_4) border-b border-color_4 pb-5']" @click="activateSubTab('news1')"><p class="ml-4 mt-5 font-bold">Đăng ký - Đăng nhập</p></div>
          <div :class="['sub-tab-item', activeSubTab === 'news2' ? 'text-color_4 border-b border-color_4 pb-5' : 'text-color_6 cursor-pointer hover:(text-color_4) border-b border-color_4 pb-5']" @click="activateSubTab('news2')"><p class="ml-4 mt-5 font-bold">Mua & sử dụng</p></div>
          <div :class="['sub-tab-item', activeSubTab === 'news3' ? 'text-color_4 border-b border-color_4 pb-5' : 'text-color_6 cursor-pointer hover:(text-color_4) border-b border-color_4 pb-5']" @click="activateSubTab('news3')"><p class="ml-4 mt-5 font-bold">Quản lý tài khoản</p></div>
        </div>
        <div class="w-70%">
          <div :class="{ hidden: activeSubTab !== 'news1' }" class="w-full rounded-lg border p-10">
            <p class="font-bold text-color_4 border-b pb-5 text-8">Đăng kí - Đăng nhập</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">1. Đăng kí tài khoản trên mobiEdu.vn như thế nào?</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">2. Đăng nhập trên mobiEdu.vn như thế nào?</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">3. Hướng dẫn cách lấy lại mật khẩu trên mobiEdu.vn</p>
          </div>
          <div :class="{ hidden: activeSubTab !== 'news2' }" class="w-full rounded-lg border p-10">
            <p class="font-bold text-color_4 border-b pb-5 text-8">Mua & sử dụng</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">1. Các khóa học có thời gian sử dụng trong bao lâu?</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">2. Làm thế nào để mua tặng khóa học cho người khác?</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">3. Hướng dẫn kích hoạt khóa học</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">4. Không đăng kí tài khoản có mua được khóa học trên mobiEdu.vn không?</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">5. Không có internet có thể xem được video khóa học hay không?</p>
          </div>
          <div :class="{ hidden: activeSubTab !== 'news3' }" class="w-full rounded-lg border p-10">
            <p class="font-bold text-color_4 border-b pb-5 text-8">Quản lí tài khoản</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">1. Tài khoản trên mobiEdu có thể thay đổi được không?</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">2. Làm thế nào để quản lí các khóa học sau khi đã mua?</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">3. Tôi có thể nhìn thấy khóa học đã mua tặng người khác không?</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="activeTab === 'other'">
      <div class="flex">
        <div class="w-25% mr-15">
          <p class="text-color_4 border-b border-color_4 pb-5 font-bold">DANH MỤC HỖ TRỢ</p>
          <div :class="['sub-tab-item', activeSubTab2 === 'other1' ? 'text-color_4 border-b border-color_4 pb-5 ' : 'text-color_6 cursor-pointer hover:(text-color_4) border-b border-color_4 pb-5']" @click="activateSubTab2('other1')"><p class="ml-4 mt-5 font-bold">Thanh toán - Đổi trả</p></div>
          <div :class="['sub-tab-item', activeSubTab2 === 'other2' ? 'text-color_4 border-b border-color_4 pb-5' : 'text-color_6 cursor-pointer hover:(text-color_4) border-b border-color_4 pb-5']" @click="activateSubTab2('other2')"><p class="ml-4 mt-5 font-bold">Dành cho đại lý</p></div>
        </div>
        <div class="w-70%">
          <div :class="{ hidden: activeSubTab2 !== 'other1' }" class="w-full rounded-lg border p-10">
            <p class="font-bold text-color_4 border-b pb-5 text-8">Thanh toán - Đổi trả</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">1. Thanh toán online như thế nào</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">2. Tôi có thể thanh toán qua các hình thức nào trên mobiEdu?</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">3. Làm thế nào để thanh toán qua tài khoản di động/SMS khi mua các khóa học trên mobiEdu?</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">4. Làm thế nào để thanh toán online khi mua các khóa học trên mobiEdu?</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">5. Có thể thay đổi khóa học sau khi đã mua hay không?</p>
          </div>
          <div :class="{ hidden: activeSubTab2 !== 'other2' }" class="w-full rounded-lg border p-10">
            <p class="font-bold text-color_4 border-b pb-5 text-8">Dành cho đại lí</p>
            <p class="mt-5 text-xl border-b pb-5 cursor-pointer hover:text-color_4">1. Các mô hình hợp tác đại lí như thế nào?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex mt-10 justify-between gap-10">
    <p class="text-color_4 mt-5 font-bold text-6 ml-40">Bạn có thêm câu hỏi khác, hãy đặt câu hỏi ngay tại đây</p>
    <div class="flex justify-center gap-5">
      <div @click="showModal = true" class="cursor-pointer p-3 bg-color_13 rounded-lg ease-in-out delay-150 hover:-translate-y-3 duration-300">
        <div class="i-mdi:phone text-white text-5xl"></div>
      </div>
      <div @click="showModalForm = true" class="cursor-pointer p-3 bg-color_5 rounded-lg ease-in-out delay-150 hover:-translate-y-3 duration-300">
        <div class="i-mdi:email-outline text-white text-5xl"></div>
      </div>
      <a href="https://zalo.me/0777202020" target="_blank" class="cursor-pointer p-3 bg-color_2 rounded-lg flex justify-center px-4 ease-in-out delay-150 hover:-translate-y-3 duration-300">
        <img src="/img/icon/zalo-30.png" class="w-40px h-40px" alt="" />
      </a>
      <a href="https://www.facebook.com/mobiedu.vn" target="_blank" class="cursor-pointer p-3 bg-color_4 rounded-lg ease-in-out delay-150 hover:-translate-y-3 duration-300">
        <div class="i-mdi:facebook text-white text-5xl"></div>
      </a>
    </div>
  </div>
  <div v-if="showModal">
    <div class="fixed flex justify-center bg-[#000000da] inset-0 z122">
      <div class="text-center bg-[white] h-40 w-150 mt-50 rounded-[20px]">
        <div class="mt-10 ml-22 w-70%">
          <a href="tel:0123456789" class="text-color_13 cursor-pointer font-bold text-8 border-dashed border-color_13 border-1">Hotline: 0123456789</a>
        </div>
        <p class="mt-5">Từ 7h-00 đến 21h00 các ngày trong tuần</p>
      </div>
      <div class="cursor-pointer mt-42">
        <div class="i-mdi:close text-white text-3xl" @click="closeModal"></div>
      </div>
    </div>
  </div>
  <div v-if="showModalForm">
    <div class="fixed flex justify-center bg-[#000000da] inset-0 z122 overflow-y-auto">
      <div class="bg-[white] h-170 w-150 mt-20 rounded-[20px] p-10">
        <img class="ml-40" src="/img/logo.png" alt="" />
        <p class="mt-4">Họ tên *</p>
        <input class="bg-[white] w-full h-[50px] text-color_8 text-sm px-5 mt-1 py-[5px] rounded-[5px] border border-color_2 outline-none" type="text" placeholder="Nhập Họ và tên" />
        <p class="mt-2">Số điện thoại</p>
        <input class="bg-[white] w-full h-[50px] text-color_8 text-sm px-5 mt-1 py-[5px] rounded-[5px] border border-color_2 outline-none" type="text" placeholder="Nhập số điện thoại" />
        <p class="mt-2">Email *</p>
        <input class="bg-[white] w-full h-[50px] text-color_8 text-sm px-5 mt-1 py-[5px] rounded-[5px] border border-color_2 outline-none" type="text" placeholder="Nhập Email" />
        <p class="mt-2">Vấn đề đang gặp phải</p>
        <input class="bg-[white] w-full h-[50px] text-color_8 text-sm px-5 mt-1 py-[5px] rounded-[5px] border border-color_2 outline-none" type="text" />
        <p class="mt-2">Nội dung câu hỏi</p>
        <textarea class="border border-color_2 w-full h-30"></textarea>
        <div class="flex items-center justify-center">
          <button class="hover:bg-color_5 h-10 mt-8 hover:text-color_6 font-bold w-30 text-white bg-color_4 px-20px py-1 rounded-5">Gửi</button>
        </div>
      </div>
      <div class="cursor-pointer mt-13">
        <div class="i-mdi:close text-white text-3xl" @click="closeModalForm"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const showModal = ref(false)
const showModalForm = ref(false)
const activeTab = ref("course")
const activeSubTab1 = ref("course1")
const activeSubTab = ref("news1")
const activeSubTab2 = ref("other1")

function activateTab(tabName) {
  activeTab.value = tabName
  activeSubTab.value = ""
}
function closeModal() {
  showModal.value = false
}
function closeModalForm() {
  showModalForm.value = false
}
function activateSubTab(subTabName) {
  activeSubTab.value = subTabName
}

function activateSubTab1(subTabName) {
  activeSubTab1.value = subTabName
}

function activateSubTab2(subTabName) {
  activeSubTab2.value = subTabName
}
</script>
