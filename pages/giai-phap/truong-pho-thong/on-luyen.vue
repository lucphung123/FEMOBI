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
        <nuxt-link to="/giai-phap/truong-pho-thong" class="w-1/4"><img class="border-5px border-color_5 border-rd-4" src="/img/giai-phap/G5.png" alt="" /></nuxt-link>
        <nuxt-link to="/giai-phap/truong-dai-hoc" class="w-1/4"><img class="hover:border-5px hover:border-color_5 border-rd-4" src="/img/giai-phap/G6.png" alt="" /></nuxt-link>
        <nuxt-link to="/giai-phap/doanh-nghiep" class="w-1/4"><img class="hover:border-5px hover:border-color_5 border-rd-4" src="/img/giai-phap/G7.png" alt="" /></nuxt-link>
      </div>
      <div class="flex items-center justify-between p-10">
        <div class="flex items-center my-10 space-x-10">
          <div class="i-mdi:chevron-left text-4xl bg-gray-600"></div>
          <div class="flex items-center">
            <div class="space-x-25 flex">
              <nuxt-link to="/giai-phap/truong-pho-thong" class="space-y-3">
                <div class="bg-white w-150px h-150px rd-full shadow-2xl flex justify-center items-center">
                  <img src="/img/giai-phap/G9.png" alt="" class="h-23" />
                </div>
                <div><p class="text-center">mobiEdu mSchool</p></div>
              </nuxt-link>
              <nuxt-link to="/giai-phap/truong-pho-thong/mobiedu-tkb" class="space-y-3">
                <img src="/img/giai-phap/G8.jpg" alt="" class="rd-full w-60% shadow-2xl" />
                <p class="text-center w-60%">mobiEdu TKB</p>
              </nuxt-link>
            </div>
            <nuxt-link to="/giai-phap/truong-pho-thong/on-luyen" class="space-y-3">
              <img src="/img/giai-phap/G10.png" alt="" class="rd-full shadow-2xl border-3px border-color_4" />
              <p class="text-center">Onluyen.vn</p>
            </nuxt-link>
          </div>
        </div>
        <div class="i-mdi:chevron-right text-4xl mx-10 bg-gray-500"></div>
      </div>
    </div>
  </div>
  <div class="flex flex-col bg-gray-100 w-screen top-23">
    <div class="w-full lg:w-225 xl:(w-300) 2xl:(w-340) mx-auto flex items-center justify-center mt-15">
      <div class="flex flex-col text-center space-y-6 justify-center items-center">
        <p class="text-4xl text-color_4 font-600">Onluyen.vn - Giải pháp toàn diện cho Giáo dục 4.0</p>
        <p class="w-5/6">Onluyen.vn có 2 phiên bản (website và ứng dụng di dộng) cung cấp nhiều tính năng công nghệ hỗ trợ hiệu quả việc dạy và học tại nhà trường, cùng kho học liệu phong phú (200.000 câu trong ngân hàng câu hỏi, 5.000 video bài giảng...).</p>
      </div>
    </div>
    <div class="flex w-full lg:w-225 xl:(w-300) 2xl:(w-340) mx-auto space-x-25 my-10">
      <div class="flex flex-col items-center space-y-5 w-1/3">
        <div class="bg-white rd-full w-150px h-150px flex justify-center items-center">
          <img src="/img/giai-phap/G40.png" alt="" />
        </div>
        <div class="text-16px font-600 flex justify-center items-center">Giúp Sở Giáo dục/ Nhà trường quản lý hiệu quả</div>
        <div class="flex justify-center items-center text-center">Số hóa các công việc quản lý chuyên môn của Sở/ Nhà trường cũng như tổ chức kỳ thi trực tuyến hiệu quả, chặt chẽ với hệ thống báo cáo đa dạng, thông minh.</div>
      </div>
      <div class="flex flex-col items-center space-y-5 w-1/3">
        <div class="bg-white rd-full w-150px h-150px flex justify-center items-center">
          <img src="/img/giai-phap/G41.png" alt="" />
        </div>
        <div class="text-16px font-600">Công cụ hỗ trợ tích cực dành cho giáo viên</div>
        <div class="text-center">Hỗ trợ thầy cô giáo trong công tác Quản lý lớp thông minh; hỗ trợ giao bài tập về nhà và nhiệm vụ tự học dễ dàng; tự xây dựng kho ngân hàng câu hỏi kiến thức .</div>
      </div>
      <div class="flex flex-col items-center justify-center space-y-5 w-1/3">
        <div class="bg-white rd-full w-150px h-150px flex justify-center items-center">
          <img src="/img/giai-phap/G42.png" alt="" />
        </div>
        <div class="text-16px font-600">Môi trường nâng cao kiến thức đối với học sinh</div>
        <div class="text-center">Hệ thống giúp cá nhân hóa lộ trình học theo năng lực để cải thiện trình độ hiệu quả nhất. Bên cạnh đó Onluyen cung cấp hàng nghìn video bài giảng ôn kiến thức, ngân hàng đề phong phú kết hợp trò chơi giữa học tập & giải trí.</div>
      </div>
    </div>
  </div>
  <div class="my-15 flex flex-col items-center justify-center space-y-8">
    <div class="text-center text-4xl text-color_4 font-700">ĐIỂM NỔI BẬT</div>
    <div class="flex items-center justify-center space-x-15">
      <div class="w-3/7">
        <img src="/img/giai-phap/G43.png" alt="" />
      </div>
      <div class="w-2/7 space-y-3">
        <div class="text-2xl font-bold text-color_4">1. Quản lý đào tạo cho Nhà trường</div>
        <div>-Onluyen.vn là giải pháp giáo dục hữu hiệu về quản lý chất lượng Dạy và Học trong các Nhà trường phổ thông. Giải pháp cho phép tổ chức các kỳ thi có quy môn lớn với hàng trăm nghìn người tham gia đồng thời.</div>
      </div>
    </div>
    <div class="flex items-center justify-center space-x-10">
      <div class="w-2/7 space-y-3">
        <div class="text-2xl font-bold text-color_4">2. Giải pháp đã được thẩm định, công nhận</div>
        <div>07/2020: Là chương trình giáo dục trực tuyến đầu tiên & duy nhất được thẩm định bởi Viện Khoa học giáo dục Việt Nam - Bộ GD&ĐT. 08/2020: Là ứng dụng học tập đầu tiên, duy nhất của Việt Nam có trên Kho ứng dụng Microsoft Teams</div>
      </div>
      <div class="w-3/7">
        <img src="/img/giai-phap/G44.png" alt="" />
      </div>
    </div>
    <div class="flex items-center justify-center space-x-15">
      <div class="w-3/7">
        <img src="/img/giai-phap/G45.png" alt="" />
      </div>
      <div class="w-2/7 space-y-3">
        <div class="text-2xl font-bold text-color_4">3. Chuyển đổi tên miền</div>
        <div>Onluyen.vn cung cấp nền tảng xuyên suốt về quản lý lớp học dành cho giáo viên chủ nhiệm. Tổ chức việc dạy học, đánh giá chất lượng học sinh dành cho giáo viên bộ môn thông qua cơ chế báo cáo đánh giá.</div>
      </div>
    </div>
  </div>
  <div class="space-y-10">
    <div>
      <a href="https://www.onluyen.vn/" target="_blank"><img class="object-cover w-100%" src="/img/giai-phap/G46.png" alt="" /></a>
    </div>
    <div>
      <a href="https://www.onluyen.vn/" target="_blank"><img src="/img/giai-phap/G47.png" alt="" /></a>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "course2",
})
</script>
