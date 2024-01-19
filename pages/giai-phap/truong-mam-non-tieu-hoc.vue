<template>
  <ClientOnly>
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
            <img class="border-5px border-color_5 border-rd-4" src="/img/giai-phap/G4.jpg" alt="" />
          </nuxt-link>
          <nuxt-link to="/giai-phap/truong-pho-thong" class="w-1/4"><img class="hover:border-5px hover:border-color_5 border-rd-4" src="/img/giai-phap/G5.png" alt="" /></nuxt-link>
          <nuxt-link to="/giai-phap/truong-dai-hoc" class="w-1/4"><img class="hover:border-5px hover:border-color_5 border-rd-4" src="/img/giai-phap/G6.png" alt="" /></nuxt-link>
          <nuxt-link to="/giai-phap/doanh-nghiep" class="w-1/4"><img class="hover:border-5px hover:border-color_5 border-rd-4" src="/img/giai-phap/G7.png" alt="" /></nuxt-link>
        </div>
        <div class="flex items-center justify-between p-10">
          <div class="flex items-center my-10 space-x-10">
            <div class="i-mdi:chevron-left text-4xl bg-gray-600"></div>
            <div class="flex items-center">
              <div class="space-y-3">
                <img src="/img/giai-phap/G21.png" alt="" class="rd-full shadow-2xl border-3px border-color_4" />
                <p class="text-center text-blue-600">edubook SSL</p>
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
          <p class="text-4xl text-color_4 font-600 w-6/6">edubook SLL - Ứng dụng siêu kết nối Nhà trường – Giáo viên – Phụ huynh</p>
          <p class="w-5/6">edubook SLL là mạng xã hội trường học, kết nối các bậc phụ huynh thông thái. Ngoài ra, SLL là phần mềm quản lý trường học thông minh và là công cụ hỗ trợ kết nối nhà trường - phụ huynh thông qua sổ liên lạc điện tử.</p>
        </div>
      </div>
      <div class="flex justify-center items-center w-full lg:w-225 xl:(w-300) 2xl:(w-340) mx-auto space-x-25 my-10">
        <div class="flex flex-col items-center justify-center space-y-5">
          <div class="bg-white rd-full w-150px h-150px flex justify-center items-center">
            <img src="/img/giai-phap/G22.png" alt="" />
          </div>
          <div class="text-16px font-600 flex justify-center items-center">Lợi ích của Nhà trường</div>
          <div class="flex justify-center items-center text-center">Dễ dàng quảng bá hình ảnh nhà trường tới cộng đồng, xây dựng hình ảnh 1 Nhà trường chuyển đổi số 4.0 hiện đại, chuyên nghiệp . Quản lý mọi thông tin hàng ngày của trường mọi lúc mọi nơi, chỉ cần thiết bị kết nối internet. Kết nối liên thông giữa các bộ phận trong trường. Chia sẻ, trao đổi và thông báo tới giáo viên, phụ huynh nhanh chóng.</div>
        </div>
        <div class="flex flex-col items-center justify-center space-y-5">
          <div class="bg-white rd-full w-150px h-150px flex justify-center items-center">
            <img src="/img/giai-phap/G23.png" alt="" />
          </div>
          <div class="text-16px font-600">Lợi ích của Giáo viên</div>
          <div class="text-center">Trao đổi, chia sẻ với phụ huynh nhanh chóng, trực tiếp trên điện thoại, máy tính có kết nối internet . Quản lý lớp học dễ dàng: thông báo, đăng ký sự kiện, điểm danh, về muộn, nhận xét về học sinh… chỉ bằng 1 cú nhấp chuột. Giảm thiểu tối đa thao tác nhờ các biểu mẫu và tính toán tự động giúp tiết kiệm thời gian.</div>
        </div>
        <div class="flex flex-col items-center justify-center space-y-5">
          <div class="bg-white rd-full w-150px h-150px flex justify-center items-center">
            <img src="/img/giai-phap/G24.png" alt="" />
          </div>
          <div class="text-16px font-600">Lợi ích của Phụ huynh</div>
          <div class="text-center">Thường xuyên được cập nhật tình hình điểm danh, học tập, rèn luyện của con. Nắm được thông tin học tập chính khóa, ngoại khóa, duy trì liên lạc với giáo viên để có các điều chỉnh phù hợp. Được cập nhật các thông báo quan trọng về thời khóa biểu, học phí, các hoạt động ngoại khóa, lễ kỷ niệm/ meeting của nhà trường nhanh chóng qua ứng dụng hoặc SMS.</div>
        </div>
      </div>
    </div>
    <div class="my-15 flex flex-col items-center justify-center space-y-8">
      <div class="text-center text-4xl text-color_4 font-700">ĐIỂM NỔI BẬT</div>
      <div class="flex items-center justify-center">
        <div class="w-4/7">
          <img src="/img/giai-phap/G25.png" alt="" />
        </div>
        <div class="w-2/7 space-y-3">
          <div class="text-2xl font-bold text-color_4">Quản trị viên</div>
          <div>SLL giúp lãnh đạo nhà trường gửi/nhận các thông báo, điều hành đến Giáo viên và Phụ huynh trong trường. SLL giúp thực hiện điểm danh và thống kê số lượng học sinh nghỉ học toàn trường nhanh chóng. Tra cứu số liệu thống kê toàn trường theo thời gian thực từ đó có thể đưa ra các quyết định điều hành kịp thời và chính xác nhất.</div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="w-2/7 space-y-3">
          <div class="text-2xl font-bold text-color_4">Giáo viên</div>
          <div>SLL không chỉ là kênh liên lạc trực tuyến giữa Giáo viên với Phụ huynh học sinh mà còn tích hợp các chức năng quản lý chuyên môn (nhập điểm, chuyên cần, nề nếp...) qua đó giúp các giáo viên tiết kiệm nhiều thời gian, công sức so với việc phải cùng lúc sử dụng nhiều phần mềm như trước đây</div>
        </div>
        <div class="w-4/7">
          <img src="/img/giai-phap/G26.png" alt="" />
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="w-4/7">
          <img src="/img/giai-phap/G27.png" alt="" />
        </div>
        <div class="w-2/7 space-y-3">
          <div class="text-2xl font-bold text-color_4">Kế toán</div>
          <div>Hệ thống tự động tính toán tiền ăn, học phí dựa trên thông tin điểm danh và đăng ký dịch vụ. Có thể các loại học phí, tạo học phí tháng cho từng lớp, từng khối hoặc cả trường.</div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="w-2/7 space-y-3">
          <div class="text-2xl font-bold text-color_4">
            Nhà bếp
          </div>
          <div>Dễ dàng biết được khẩu phần ăn hàng ngày của cả trường trên ứng dụng. Có thể thêm từng đơn cho từng ngày trong tuần, từng bữa trong ngày, áp dụng cho từng lớp, từng khối hoặc cả trường.n.</div>
        </div>
        <div class="w-4/7">
          <img src="/img/giai-phap/G28.png" alt="" />
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="w-4/7">
          <img src="/img/giai-phap/G29.png" alt="" />
        </div>
        <div class="w-2/7 space-y-3">
          <div class="text-2xl font-bold text-color_4">Phụ huynh</div>
          <div>SLL giúp Phụ huynh cập nhật tự động hoặc tra cứu trực tuyến kết quả học tập, rèn luyện của con. Có thể lưu giữ và chia sẻ những khoảnh khắc tuyệt vời của con ở trường. Thực hiện xin nghỉ học trực tuyến cho con; trò chuyện với Giáo viên và các Phụ huynh khác trong cùng lớp học...ừ người dùng.</div>
        </div>
      </div>
    </div>
    <div class="space-y-10">
      <div>
        <a href="https://mschool.edubook.vn/" target="_blank"><img class="object-cover w-100%" src="/img/giai-phap/G30.png" alt="" /></a>
      </div>
      <div>
        <a href="https://mschool.edubook.vn/" target="_blank"><img src="/img/giai-phap/G31.png" alt="" /></a>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  layout: "course2",
})
</script>
