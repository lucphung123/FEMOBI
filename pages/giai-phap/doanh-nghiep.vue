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
        <nuxt-link to="/giai-phap/truong-mam-non-tieu-hoc" class="w1/4">
          <img class="hover:border-5px hover:border-color_5 border-rd-4" src="/img/giai-phap/G4.jpg" alt="" />
        </nuxt-link>
        <nuxt-link to="/giai-phap/truong-pho-thong" class="w-1/4"><img class="hover:border-5px border-color_5 border-rd-4" src="/img/giai-phap/G5.png" alt="" /></nuxt-link>
        <nuxt-link to="/giai-phap/truong-dai-hoc" class="w-1/4"><img class="hover:border-5px hover:border-color_5 border-rd-4" src="/img/giai-phap/G6.png" alt="" /></nuxt-link>
        <nuxt-link to="/giai-phap/doanh-nghiep" class="w-1/4"><img class="border-5px border-color_5 border-rd-4" src="/img/giai-phap/G7.png" alt="" /></nuxt-link>
      </div>
      <div class="flex items-center justify-between p-10">
        <div class="flex items-center my-10 space-x-10">
          <div class="i-mdi:chevron-left text-4xl bg-gray-600"></div>
          <div class="flex items-center">
            <div class="space-y-3">
              <div class="bg-white w-150px h-150px rd-full shadow-2xl flex justify-center items-center border-3px border-color_4">
                <img src="/img/giai-phap/G9.png" alt="" class="h-23" />
              </div>
              <div><p class="text-center text-blue-600">mobiEdu mSchool</p></div>
            </div>
          </div>
        </div>
        <div class="i-mdi:chevron-right text-4xl mx-10 bg-gray-500"></div>
      </div>
    </div>
  </div>
  <div class="flex flex-col bg-gray-100 w-screen top-23">
    <div class="w-full lg:w-225 xl:(w-300) 2xl:(w-340) mx-auto flex items-center justify-center mt-15">
      <div class="flex flex-col text-center space-y-6 justify-center items-center">
        <p class="text-4xl text-color_4 font-600">mSchool Doanh nghiệp - Giải pháp quản lí toàn diện của MobiFone</p>
        <p class="w-5/6">mSchool giúp doanh nghiệp tạo website giảng dạy online, với hệ thống lớp học ảo, tổ chức thi online và quản lý doanh nghiệp toàn diện. Giải pháp tạo website dạy học dễ dàng - bảo mật chỉ và tùy biến theo nhu cầu khách hàng.</p>
      </div>
    </div>
    <div class="flex justify-center items-center w-full lg:w-225 xl:(w-300) 2xl:(w-340) mx-auto space-x-25 my-10">
      <div class="flex flex-col items-center justify-center space-y-5">
        <div class="bg-white rd-full w-150px h-150px flex justify-center items-center">
          <img src="/img/giai-phap/G49.png" alt="" />
        </div>
        <div class="text-16px font-600 flex justify-center items-center">Quản trị học tập</div>
        <div class="flex justify-center items-center text-center">Hợp nhất các nghiệp vụ quản lý đào tạo trên 1 cổng duy nhất, giúp tiết kiệm thời gian, chuyên nghiệp hóa.</div>
      </div>
      <div class="flex flex-col items-center justify-center space-y-5">
        <div class="bg-white rd-full w-150px h-150px flex justify-center items-center">
          <img src="/img/giai-phap/G50.png" alt="" />
        </div>
        <div class="text-16px font-600">Giảng dạy thông minh</div>
        <div class="text-center">Dễ dàng dạy & học đa nền tảng trên Web & Mobile App. Tạo phòng học tương tác trực tiếp, điểm danh và quản lý học viên tham gia lớp.</div>
      </div>
      <div class="flex flex-col items-center justify-center space-y-5">
        <div class="bg-white rd-full w-150px h-150px flex justify-center items-center">
          <img src="/img/giai-phap/G51.png" alt="" />
        </div>
        <div class="text-16px font-600">Kiểm tra, đánh giá dễ dàng</div>
        <div class="text-center">Tạo và quản lý ngân hàng câu hỏi đề thi một cách đơn giản, nhanh chóng. Học sinh làm bài thi và nhận kết quả trực tiếp trên hệ thống.</div>
      </div>
    </div>
  </div>
  <div class="my-15 flex flex-col items-center justify-center space-y-8">
    <div class="text-center text-4xl text-color_4 font-700">ĐIỂM NỔI BẬT</div>
    <div class="flex items-center justify-center">
      <div class="w-4/7">
        <img src="/img/giai-phap/G52.png" alt="" />
      </div>
      <div class="w-2/7 space-y-3">
        <div class="text-2xl font-bold text-color_4">Khởi tạo website miễn phí</div>
        <div>5 phút có ngay website đào tạo chuyên nghiệp với logo riêng. Giao diện tiện ích có thể chỉnh sửa, thêm bớt các phần trên websie một cách vô cùng đơn giản.</div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div class="w-2/7 space-y-3">
        <div class="text-2xl font-bold text-color_4">Dạy & học mọi lúc mọi nơi</div>
        <div>Nền tảng vận hành tuyệt vời trên tất cả các thiết bị khác nhau như: PC, laptop, máy tính bảng, smartphone, trên nhiều hệ điều hành và trình duyệt khác nhau</div>
      </div>
      <div class="w-4/7">
        <img src="/img/giai-phap/G53.png" alt="" />
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div class="w-4/7">
        <img src="/img/giai-phap/G54.png" alt="" />
      </div>
      <div class="w-2/7 space-y-3">
        <div class="text-2xl font-bold text-color_4">Chuyển đổi tên miền</div>
        <div>Hỗ trợ gắn tên miền riêng thay cho tên miền .mobiedu.vn mặc định ban đầu, chạy như một website độc lập. Tên miền riêng mang thương hiệu của chính nhà trường.</div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div class="w-2/7 space-y-3">
        <div class="text-2xl font-bold text-color_4">
          Linh hoạt giảng dạy <br />
          song song 2 hình thức
        </div>
        <div>Từ file docx, pdf đến video clip có thể tạo bài giảng ở nhiều định dạng khác nhau phù hợp với yêu cầu giảng dạy và học tập. Lớp học ảo giúp giảng viên và học viên có thể tương tác trực tiếp với nhau trong mỗi buổi học trực tuyến.</div>
      </div>
      <div class="w-4/7">
        <img src="/img/giai-phap/G55.png" alt="" />
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div class="w-4/7">
        <img src="/img/giai-phap/G56.png" alt="" />
      </div>
      <div class="w-2/7 space-y-3">
        <div class="text-2xl font-bold text-color_4">Bảo mật tuyệt đối</div>
        <div>Mọi thông tin quản lý, quản trị, các thông tin về vận hành trường học trực tuyến đều nằm trong quyền kiểm soát duy nhất của cá nhân người dùng. Không ai có thể can thiệp, sửa đổi hay theo dõi những thông tin này ngoại trừ người dùng.</div>
        s
      </div>
    </div>
  </div>
  <div class="space-y-10">
    <div>
      <a href="https://mschool.mobiedu.vn/" target="_blank"><img class="object-cover w-100%" src="/img/giai-phap/G19.png" alt="" /></a>
    </div>
    <div>
      <a href="https://mschool.mobiedu.vn/" target="_blank"><img src="/img/giai-phap/G20.png" alt="" /></a>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "course2",
})
</script>
