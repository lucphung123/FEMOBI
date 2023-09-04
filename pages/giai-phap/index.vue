<template>
  <div class="flex space-x-4 my-5 mt-7 items-center w-full">
    <nuxt-link to="/" class="text-gray-400">Trang chủ</nuxt-link>
    <div class="i-mdi:chevron-right text-2xl bg-gray-500"></div>
    <p class="font-bold text-gray-500">Giải pháp</p>
  </div>
  <div class="flex bg-#ebf3f8 flex-col bg-color_15 w-screen top-23">
    <div class="lg:(w-225 px-0) xl:(w-320) 2xl:(w-340) mx-auto">
      <div class="flex items-center">
        <SlideSlide8 />
      </div>
    </div>
    <div class="text-center text-xl text-color_8 py-10">Hệ thống giải pháp dành cho Doanh nghiệp - Nhà trường của mobiEdu</div>
    <div class="flex flex-col justify-center w-full lg:w-225 xl:(w-300) mx-auto">
      <div class="flex">
        <div class="w1/4">
          <img class="hover:border-5px hover:border-color_5 border-rd-4" src="/img/giai-phap/G4.jpg" alt="" />
        </div>
        <div class="w-1/4"><img class="border-5px border-color_5 border-rd-4" src="/img/giai-phap/G5.png" alt="" /></div>
        <div class="w-1/4"><img class="hover:border-5px hover:border-color_5 border-rd-4" src="/img/giai-phap/G6.png" alt="" /></div>
        <div class="w-1/4"><img class="hover:border-5px hover:border-color_5 border-rd-4" src="/img/giai-phap/G7.png" alt="" /></div>
      </div>
      <div class="flex items-center justify-between p-10">
        <div class="flex items-center my-10 space-x-10">
          <div class="i-mdi:chevron-left text-4xl bg-gray-600"></div>
          <div class="flex items-center">
            <div class="space-x-25 flex">
              <div class="space-y-3">
                <div class="bg-white w-150px h-150px rd-full shadow-2xl flex justify-center items-center border-3px border-color_4">
                  <img src="/img/giai-phap/G9.png" alt="" class="h-23" />
                </div>
                <div><p class="text-center">mobiEdu mSchool</p></div>
              </div>
              <div class="space-y-3">
                <img src="/img/giai-phap/G8.jpg" alt="" class="rd-full w-60% shadow-2xl" />
                <p class="text-center w-60%">mobiEdu TKB</p>
              </div>
            </div>
            <div class="space-y-3">
              <img src="/img/giai-phap/G10.png" alt="" class="rd-full shadow-2xl" />
              <p class="text-center">Onluyen.vn</p>
            </div>
          </div>
        </div>
        <div class="i-mdi:chevron-right text-4xl mx-10 bg-gray-500"></div>
      </div>
    </div>
  </div>
  <div class="flex flex-col bg-gray-100 w-screen top-23">
    <div class="w-full lg:w-225 xl:(w-300) 2xl:(w-340) mx-auto flex items-center justify-center p-15">
      <div class="flex flex-col text-center space-y-6">
        <p class="text-4xl text-color_4 font-600">mobiEdu mSchool - Giải pháp dạy & học toàn diện của MobiFone</p>
        <p>mSchool giúp nhà trường, giáo viên tạo website giảng dạy online, với hệ thống lớp học ảo, tổ chức thi online và quản lý trường học toàn diện. Giải pháp tạo website dạy học dễ dàng - bảo mật chỉ và tùy biến theo nhu cầu khách hàng.</p>
      </div>
    </div>
    <div class="flex justify-center items-center w-full lg:w-225 xl:(w-300) 2xl:(w-340) mx-auto space-x-25">
      <div class="flex flex-col items-center justify-center space-y-5">
        <div class="bg-white rd-full w-150px h-150px flex justify-center items-center">
          <img src="/img/giai-phap/G11.png" alt="" />
        </div>
        <div class="text-16px font-600 flex justify-center items-center">Quản trị học tập</div>
        <div class="flex justify-center items-center text-center">Hợp nhất các nghiệp vụ quản lý đào tạo trên 1 cổng duy nhất, giúp tiết kiệm thời gian, chuyên nghiệp hóa.</div>
      </div>
      <div class="flex flex-col items-center justify-center space-y-5">
        <div class="bg-white rd-full w-150px h-150px flex justify-center items-center">
          <img src="/img/giai-phap/G12.png" alt="" />
        </div>
        <div class="text-16px font-600">Giảng dạy thông minh</div>
        <div class="text-center">Dễ dàng dạy & học đa nền tảng trên Web & Mobile App. Tạo phòng học tương tác trực tiếp, điểm danh và quản lý học viên tham gia lớp.</div>
      </div>
      <div class="flex flex-col items-center justify-center space-y-5">
        <div class="bg-white rd-full w-150px h-150px flex justify-center items-center">
          <img src="/img/giai-phap/G13.png" alt="" />
        </div>
        <div class="text-16px font-600">Kiểm tra, đánh giá dễ dàng</div>
        <div class="text-center">Tạo và quản lý ngân hàng câu hỏi đề thi một cách đơn giản, nhanh chóng. Học sinh làm bài thi và nhận kết quả trực tiếp trên hệ thống.</div>
      </div>
    </div>
  </div>
  <div class="my-15">
    <div class="text-center text-4xl text-color_4 font-700">
      ĐIỂM NỔI BẬT
    </div>
    <div>
      
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "course2",
})
</script>
