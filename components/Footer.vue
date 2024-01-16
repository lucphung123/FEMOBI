<template>
  <div class="pt-20">
    <div>
      <div class="flex justify-between">
        <div>
          <p class="relative text-color_8 font-bold text-lg leading-6">VỀ MOBIEDU</p>
          <div class="pb-[22px] border-solid mt-5">
            <div>
              <p class="flex items-center text-color_9 text-base leading-9">Giới thiệu</p>
            </div>
            <div>
              <p class="flex items-center text-color_9 text-base leading-9">Sách</p>
            </div>
            <div>
              <p class="flex items-center text-color_9 text-base leading-9">Giải pháp</p>
            </div>
            <div>
              <p class="flex items-center text-color_9 text-base leading-9">Hướng đãn</p>
            </div>
          </div>
        </div>
        <div>
          <p class="relative text-color_8 font-bold text-lg leading-6">ĐỐI TÁC & KHÁCH HÀNG</p>
          <div class="pb-[22px] border-solid mt-5">
            <div>
              <a class="flex items-center text-color_9 text-base leading-9">Dành cho đại lý</a>
            </div>
          </div>
        </div>
        <div>
          <p class="relative text-color_8 font-bold text-lg leading-6">TẢI ỨNG DỤNG MOBIEDU NGAY</p>
          <div class="mt-5 flex">
            <div class="mr-[18px] pr-[23px] border-r border-solid">
              <img src="/img/qr-code.png" alt="" />
            </div>
            <div class="pb-[22px] border-solid">
              <div>
                <a href="https://apps.apple.com/vn/app/mobiedu-h%E1%BB%8Dc-vi%C3%AAn/id1506933069" target="_blank" class="flex items-center text-color_9 cursor-pointer text-base leading-9">
                  <img class="mr-3" src="/img/icon/app-store.png" alt="" />
                  <span>App Store</span>
                </a>
              </div>
              <div>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=mobifone.edu&hl=vi&gl=US" class="flex items-center text-color_9 text-base leading-9"><img class="mr-3" src="/img/icon/google-play.png" alt="" /><span>Google Play</span></a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="relative text-color_8 font-bold text-lg leading-6">THANH TOÁN</p>
          <div class="pb-[22px] border-solid mt-5">
            <div>
              <div class="flex items-center cursor-pointer text-color_9 text-base leading-9"><img class="mr-3" src="/img/icon/momo.png" alt="" /><span>Ví Momo</span></div>
            </div>
            <div>
              <div class="flex items-center cursor-pointer text-color_9 text-base leading-9"><img class="mr-3" src="/img/icon/zalo-pay.png" alt="" /><span>Zalo Pay</span></div>
            </div>
          </div>
        </div>
        <div>
          <p class="relative text-color_8 font-bold text-lg leading-6">THEO DÕI MOBIEDU</p>
          <div class="pb-[22px] border-solid mt-5">
            <div>
              <a target="_blank" href="https://www.facebook.com/mobiedu.vn" class="flex items-center text-color_9 text-base leading-9"><img class="mr-3" src="/img/icon/facebook.png" alt="" /><span>Facebook</span></a>
            </div>
            <div>
              <a target="_blank" href="https://www.youtube.com/c/mobiEdu_vn" class="flex items-center text-color_9 text-base leading-9"><img class="mr-3" src="/img/icon/youtube.png" alt="" /><span>Youtube</span></a>
            </div>
            <div>
              <nuxt-link to="/lien-he">
                <div class="flex items-center text-color_9 text-base leading-9"><img class="mr-3" src="/img/icon/exclamation.png" alt="" /><span>Liên hệ </span></div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-between border-y">
        <div>
          <NuxtLink to="/text">
            <p class="flex ml-35 text-color_2 text-lg leading-6 uppercase py-[13px] hover:text-color_1">CHÍNH SÁCH BẢO MẬT</p>
          </NuxtLink>
        </div>
        <NuxtLink to="/text">
          <div>
            <p class="flex text-color_2 text-lg leading-6 uppercase py-[13px] hover:text-color_1">ĐIỀU KHOẢN SỬ DỤNG</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/text">
          <div>
            <p class="flex text-color_2 text-lg leading-6 uppercase py-[13px] hover:text-color_1">GIẢI QUYẾT TRANH CHẤP</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/text">
          <div>
            <p class="flex mr-35 text-color_2 text-lg leading-6 uppercase py-[13px] hover:text-color_1">QUY CHẾ HOẠT ĐỘNG</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- <div class="flex justify-between p-10">
      <div>
        <div>
          <div class="w-80">
            <img src="/img/logo-footer-mobiedu-30.png" alt="" />
          </div>
        </div>
      </div>
      <div class="text-center text-color_8 text-sm leading-[18px]">
        <div>Cơ quan chủ quản: TỔNG CÔNG TY VIỄN THÔNG MOBIFONE</div>
        <div>Địa chỉ: Số 1 Phạm Văn Bạch, Phường Yên Hòa, Quận Cầu Giấy, Hà Nội</div>
        <div class="flex">
          <div>Giấy ĐKKD:</div>
          <div class="text-blue ml-1">0100686209</div>
          <div class="ml-1">do Sở KHĐT thành phố Hà Nội cấp lần đầu ngày 20/09/2010, thay đổi lần thứ 10 ngày</div>
          <div class="text-blue ml-1">10/03/2021</div>
        </div>
        <br />
        <div>Cơ quan quản lí: TRUNG TÂM DỊCH VỤ SỐ MOBIFONE - CHI NHÁNH TỔNG CÔNG TY VIỄN THÔNG MOBIFONE</div>
        <div>Địa chỉ: Số 1 Phạm Văn Bạch, Phường Yên Hòa, Quận Cầu Giấy, Hà Nội</div>
        <div class="flex">
          <div>Giấy ĐKKD:</div>
          <div class="text-blue ml-1">0100686209-087</div>
          <div class="ml-1">do Sở KHĐT thành phố Hà Nội cấp lần đầu ngày 29/10/2008, thay đổi lần thứ 6 ngày 16/06/2023</div>
        </div>
        <div>Chịu trách nhiệm nội dung: Ông Lê Quang Minh - Giám đốc Trung Tâm</div>
        <p>Phát triển và vận hành sản phẩm: Công ty cổ phần giải pháp công nghệ iNET.</p>
        <p class="font-bold">@ Copyright 2020 - MobiFone</p>
        <div class="flex justify-center">
          <p class="font-bold">Email:</p>
          <p class="text-blue ml-1">contact@mobiedu.vn.</p>
        </div>
        <div class="flex justify-center">
          <p class="font-bold">Contact:</p>
          <p class="text-blue ml-1">9090 (200đ/phút).</p>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script></script>
