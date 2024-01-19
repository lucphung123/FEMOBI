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
    <div class="text-center text-xl text-color_8 py-10">Hệ thống giải pháp dành cho Doanh nghiệp - Nhà trường của edubook</div>
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
                <div><p class="text-center">edubook mSchool</p></div>
              </nuxt-link>
              <nuxt-link to="/giai-phap/truong-pho-thong/mobiedu-tkb" class="space-y-3">
                <img src="/img/giai-phap/G8.jpg" alt="" class="rd-full w-60% shadow-2xl  border-3px border-color_4" />
                <p class="text-center w-60%">edubook TKB</p>
              </nuxt-link>
            </div>
            <nuxt-link to="/giai-phap/truong-pho-thong/on-luyen" class="space-y-3">
              <img src="/img/giai-phap/G10.png" alt="" class="rd-full shadow-2xl" />
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
        <p class="text-4xl text-color_4 font-600">edubook TKB - Giải pháp sắp xếp thời khóa biểu</p>
        <p class="w-5/6">Phần mềm sắp xếp thời khóa biểu edubook TKB cho phép tạo và quản lí dữ liệu thời khóa biểu của một nhà trường với tối đa 600 giáo viên và 300 lớp học mỗi buổi học tại 10 địa điểm khác nhau. Với thời gian xếp cực nhanh và kết quả xếp luôn làm hài lòng các khách hàng khó tính nhất.</p>
      </div>
    </div>
    <div class="flex w-full lg:w-225 xl:(w-300) 2xl:(w-340) mx-auto space-x-25 my-10">
      <div class="flex flex-col items-center space-y-5 w-1/3">
        <div class="w-150px h-150px flex justify-center items-center">
          <img src="/img/giai-phap/G32.jpg" alt="" />
        </div>
        <div class="text-16px font-600 flex justify-center items-center">Tiết kiệm</div>
        <div class="flex justify-center items-center text-center">Nhà trường tiết kiệm được thời gian và công sức sắp xếp thời khóa biểu.</div>
      </div>
      <div class="flex flex-col items-center justify-center space-y-5 w-1/3">
        <div class="w-150px h-150px flex justify-center items-center">
          <img src="/img/giai-phap/G33.jpg" alt="" />
        </div>
        <div class="text-16px font-600">Linh hoạt</div>
        <div class="text-center">Nhà trường dễ dàng tạo thời khóa biểu mới khi thay đổi các yêu cầu đầu vào hay các ràng buộc liên quan đến môn học, giáo viên</div>
      </div>
      <div class="flex flex-col items-center justify-center space-y-5 w-1/3">
        <div class="w-150px h-150px flex justify-center items-center">
          <img src="/img/giai-phap/G34.jpg" alt="" />
        </div>
        <div class="text-16px font-600">Nhanh chóng</div>
        <div class="text-center">Phần mềm tự động sắp xếp thời khóa biểu nhanh chóng, có thể xuất thời khóa biểu sử dụng ngay mà không cần chỉnh sửa thủ công.</div>
      </div>
    </div>
  </div>
  <div class="my-15 flex flex-col items-center justify-center space-y-8">
    <div class="text-center text-4xl text-color_4 font-700">ĐIỂM NỔI BẬT</div>
    <div class="flex items-center justify-center space-x-15">
      <div class="w-3/7">
        <img src="/img/giai-phap/G35.jpg" alt="" />
      </div>
      <div class="w-2/7 space-y-3">
        <div class="text-2xl font-bold text-color_4">Xếp tự động 100% thời khóa biểu</div>
        <div>Phần mềm xếp tự động 100% thời khóa biểu sau khi nhà trường nhập đủ dữ liệu đầu vào và không bị lỗi logic.</div>
      </div>
    </div>
    <div class="flex items-center justify-center space-x-10">
      <div class="w-2/7 space-y-3">
        <div class="text-2xl font-bold text-color_4">Bản sao thời khóa biểu</div>
        <div>Cho phép nhà trường tạo 2 bản sao thời khóa biểu. Khi có một số điều kiện đầu vào không thể sắp xếp trong thời khóa biểu gốc, nhà trường có thể chỉnh sửa tại bản sao thời khóa biểu.</div>
      </div>
      <div class="w-3/7">
        <img src="/img/giai-phap/G36.jpg" alt="" />
      </div>
    </div>
    <div class="flex items-center justify-center space-x-15">
      <div class="w-3/7">
        <img src="/img/giai-phap/G37.jpg" alt="" />
      </div>
      <div class="w-2/7 space-y-3">
        <div class="text-2xl font-bold text-color_4">Thông báo thời khóa biểu tự động</div>
        <div>Cho phép nhà trường gửi thời khóa biểu cho giáo viên, học sinh qua email/số điện thoại đã đăng kí.</div>
      </div>
    </div>
  </div>
  <div class="space-y-10">
    <div>
      <a href="https://mschool.mobiedu.vn/" target="_blank"><img class="object-cover w-100%" src="/img/giai-phap/G38.jpg" alt="" /></a>
    </div>
    <div>
      <a href="https://tkb.mobiedu.vn/" target="_blank"><img src="/img/giai-phap/G39.jpg" alt="" /></a>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "course2",
})
</script>
