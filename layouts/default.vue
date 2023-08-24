<template>
  <div class="w-full min-h-screen flex flex-col overflow-clip bg-gray-300 items-center">
    <!-- header -->
    <div class="w-full sticky z-100 top-0 bg-white flex-1 flex flex-col items-center">
      <div class="lg:(w-225 px-0) xl:(w-300) 2xl:(w-340)">
        <Header />
      </div>
    </div>

    <!-- main -->
    <div class="w-full flex-1 flex flex-col items-center justify-center">
      <div class="w-full px-2 lg:(w-225 px-0) xl:(w-300) 2xl:(w-340)">
        <slot />
      </div>
    </div>

    <!-- footer -->
    <div class="w-full flex-1 flex flex-col mt-20 bg-[#004390] text-white items-center" id="footer">
      <div class="w-full px-4 text-justify lg:text-left lg:(w-225 px-0) xl:(w-300) 2xl:(w-340) mt-12">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div class="space-y-3 xl:h-200px">
            <IconCambridgeWhite class="mb-10" />
            <p class="font-bold">Cùng Cambridge cải thiện tiếng Anh, chinh phục kỳ thi Quốc tế</p>
          </div>
          <div class="space-y-2">
            <p class="text-2xl font-bold">Liên hệ</p>
            <div class="flex items-center space-x-2">
              <div class="i-mdi:phone text-lg"></div>
              <p>0777.20.20.20</p>
            </div>
            <div class="flex items-center space-x-2">
              <div class="i-mdi:email-outline text-lg"></div>
              <p>hotro.mobiedu.vn</p>
            </div>
          </div>

          <div class="space-y-2">
            <p class="text-2xl font-bold">Thông tin</p>
            <p>Điều khoản sử dụng</p>
            <p>Chính sách bảo mật</p>
            <p>Hướng dẫn sử dụng</p>
          </div>
          <div>
            <p class="text-2xl font-bold">Kết nối với chúng tôi</p>
            <div class="flex items-center space-x-5 mt-3">
              <a href="#" class="block w-8 h-8">
                <IconTelegram class="w-full h-full" />
              </a>
              <a href="#" class="block w-8 h-8">
                <IconCall class="w-full h-full" />
              </a>
              <a href="#" class="block w-8 h-8">
                <IconInstagram class="w-full h-full" />
              </a>

              <a href="https://www.facebook.com/mobiedu.vn" class="block w-8 h-8">
                <IconFacebook class="w-full h-full" />
              </a>
              <a href="#" class="block w-10 h-10">
                <IconTwitter class="w-full h-full" />
              </a>
              <a href="#" class="block w-8 h-8">
                <IconRss class="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
        <div class="flex w-full justify-center mt-10 xl:mt-0 mb-10">
          <div class="flex flex-col items-center">
            <p class="mb-1 font-bold">Trung tâm Dịch vụ Số MobiFone – Chi nhánh Tổng Công ty Viễn thông MobiFone</p>
            <div class="my-3 w-full justify-center items-center flex flex-col gap-2 md:gap-1 text-[#E9F3FF]">
              <p>Địa chỉ: Số 1 Phạm Văn Bạch, Phường Yên Hòa, Quận Cầu Giấy, Hà Nội</p>
              <p>Giấy ĐKKD: 0100686209-087 do Sở KHĐT thành phố Hà Nội</p>
              <p>Cấp lần đầu ngày 29/10/2008, thay đổi lần thứ 6 ngày 16/06/2023</p>
              <p>Chịu trách nhiệm nội dung: Ông Lê Quang Minh - Giám đốc Trung Tâm</p>
            </div>
            <p class="mt-2 font-bold">Phát triển và vận hành sản phẩm: Công ty cổ phần giải pháp công nghệ iNET</p>
            <div class="mt-14">
              <div class="mx-auto flex space-x-8">
                <img src="/img/appstore.png" />
                <img src="/img/ch-play.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center -mt-2 mb-5">
          <p>© Copyright {{ new Date().getFullYear() }} - MobiFone</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
btn::after {
  content: attr(title);
  display: block;
  font-weight: 700 !important;
  height: 0;
  overflow: hidden;
  color: #fff;
}
</style>
