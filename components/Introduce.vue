<template>
  <div class="flex-col flex items-center w-full space-y-5">
    <div class="text-center">
      <p class="text-white font-700 text-4xl">mobiEdu - Nền tảng chuyển đổi số giáo dục toàn diện</p>
    </div>
    <div class="w-3/5 text-center flex justify-center">
      <p class="text-white text-lg text-center">mobiEdu là hệ sinh thái giáo dục, cung cấp giải pháp dạy học & quản lí trường học trực tuyến, phân phối các nội dung học tập tới người học ở mọi lứa tuổi.</p>
    </div>
  </div>
  <div class="grid sm:(grid-cols-2 gap-4) xl:(grid-cols-4 gap-6)">
    <div class="w-full flex-col flex items-center justify-center space-y-8 border-r">
      <div class=""><img src="/img/icon/i1.png" alt="" /></div>
      <div class="flex">
        <div class="text-white text-6xl font-600">450.000</div>
        <div class="i-mdi:plus-thick bg-white text-2xl"></div>
      </div>
      <div class="text-white text-xl">Học viên</div>
    </div>
    <div class="w-full flex-col flex items-center justify-center space-y-8 border-r">
      <div class=""><img src="/img/icon/i2.png" alt="" /></div>
      <div class="flex">
        <div class="text-white text-6xl font-600">999</div>
        <div class="i-mdi:plus-thick bg-white text-2xl"></div>
      </div>
      <div class="text-white text-xl">Khoá học</div>
    </div>
    <div class="w-full flex-col flex items-center justify-center space-y-8 border-r">
      <div class=""><img src="/img/icon/i3.png" alt="" /></div>
      <div class="flex">
        <div class="text-white text-6xl font-600">54.999</div>
        <div class="i-mdi:plus-thick bg-white text-2xl"></div>
      </div>
      <div class="text-white text-xl">Trường học/ Doanh nghiệp</div>
    </div>
    <div class="w-full flex-col flex items-center justify-center space-y-8">
      <div class=""><img src="/img/icon/i4.png" alt="" /></div>
      <div class="flex">
        <div class="text-white text-6xl font-600">1.000</div>
        <div class="i-mdi:plus-thick bg-white text-2xl"></div>
      </div>
      <div class="text-white text-xl">Đối tác</div>
    </div>
  </div>
  <div class="p10">
    <SlideSlide3 />
  </div>
  <div class="text-center">
    <button class="text-blue-900 bg-white border-1px border-blue font-bold p-2 rd-20px w-150px">XEM THÊM</button>
  </div>
</template>

<script setup></script>
