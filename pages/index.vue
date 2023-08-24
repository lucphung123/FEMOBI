<template>
  <div class="w-full px-2 lg:px-0 flex flex-col">
    <div class="relative mt-60 md:mt-20 lg:mt-36 xl:mt-100 mb-0 md:mb-50">
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full md:mt-50 bg-[url(/img/bg/bg-banner.jpg)] bg-bottom bg-cover">
        <div class="w-full mx-auto flex items-center justify-between">
          <swiper class="!mt-10" :modules="modules" :slides-per-view="1" autoplay :pagination="{ clickable: true }" :scrollbar="{ draggable: true }">
            <swiper-slide v-for="(product, index) in products" :key="index">
              <div class="flex justify-center items-center mx-20 my-20">
                <div class="xl:mt-0 space-y-8 flex-col justify-center items-center ml-4 text-white">
                  <p class="font-600 text-7xl">{{ product.name }}</p>
                  <p class="text-3xl">{{ product.office }}</p>
                  <button class="text-color_4 font-semibold bg-white p2 text-sm rd-20px">ĐĂNG NHẬP NGAY</button>
                </div>
                <div class="h-full rounded-5 flex justify-center items-center p-7">
                  <img class="rounded-5" :src="product.src" alt="" />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>

    <div class="w-full flex items-center mt-20 md:mt-40 lg:mt-60 xl:mt-90">
      <div class="w-full flex flex-col relative">
        <div class="absolute top-0 left-1/2 flex w-screen justify-between -translate-x-1/2 -translate-y-full z-0">
          <IconMh1 class="z-0" />
          <IconMh2 class="z-0" />
        </div>
        <div class="w-full flex justify-center">
          <div class="text-6 md:(text-10 leading-[50px] w-80%) xl:w-56% 2xl:w-50% text-center"><span class="text-color_11 font-bold">Cambridge</span> được chứng minh là mang lại nhiều thành tích cao hơn</div>
        </div>
        <div class="grid grid-cols-1 md:(grid-cols-3 gap-4) xl:(w-80% mx-auto)">
          <div class="flex flex-col items-center px-6 py-3 md:py-6">
            <div class="bg-white rounded-full p-8 shadow-black/20 shadow-lg my-5">
              <IconVideo class="w-10 h-10 lg:(w-20 h-20)" />
            </div>
            <span class="my-2 font-bold text-center text-6 lg:min-h-24 xl:min-h-0">Cá nhân hóa lộ trình học</span>
            <span class="text-black text-center text-4"
              >Học tập với bài giảng, bài tập được <br />
              chọn lọc kỹ lưỡng, phù hợp với <br />
              năng lực và mục tiêu của bạn</span
            >
          </div>
          <div class="flex flex-col items-center px-6 py-3 md:py-6">
            <div class="bg-white rounded-full p-8 shadow-black/20 shadow-lg my-5">
              <IconUser class="w-10 h-10 lg:(w-20 h-20)" />
            </div>
            <span class="my-2 font-bold text-center text-6 lg:min-h-24 xl:min-h-0">Trợ lý cá nhân </span>
            <span class="text-black text-center text-4"
              >Phân tích, đánh giá điểm mạnh, <br class="hidden xl:block" />
              điểm yếu của từng cá nhân</span
            >
          </div>
          <div class="flex flex-col items-center px-6 py-3 md:py-6">
            <div class="bg-white rounded-full p-8 shadow-black/20 shadow-lg my-5">
              <IconFlash class="w-10 h-10 lg:(w-20 h-20)" />
            </div>
            <span class="my-2 font-bold text-center text-6 lg:min-h-24 xl:min-h-0">Phản hồi tức thì</span>
            <span class="text-black text-center text-4"
              >Được chấm điểm, chỉ ra lỗi sai và <br class="hidden xl:block" />
              hướng dẫn sửa cụ thể, chi tiết <br class="hidden xl:block" />
              ngay sau khi nộp bài</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <RoadMap />
    </div>

    <div class="z-1 flex flex-col">
      <div class="w-full flex justify-center">
        <div class="text-6 w-full text-center my-10 md:(w-[80%] my-16 text-10) lg:w-full">Hiện thực hóa mục tiêu, <span class="text-color_11 font-bold">Cambridge</span> giúp bạn</div>
      </div>
      <div class="w-full flex flex-col items-center md:flex-row">
        <div class="flex-1 flex flex-col md:(order-0) xl:px-20 order-1 px-2">
          <div class="">
            <div class="text-[#F57D87] font-bold text-6">Tự đánh giá năng lực</div>
            <div class="pl-10 border-l-5 border-[#F57D87] text-[#3C3C3C] my-3 text-4">
              <div class="w-300px lg:w-440px">Biết được điểm mạnh, yếu của bản thân để tập trung hơn vào việc cải thiện các kiến thức thiếu sót</div>
            </div>
          </div>
          <div class="mt-4 lg:mt-10">
            <div class="text-[#F57D87] font-bold text-6">Học mọi lúc, mọi nơi 24/7</div>
            <div class="pl-10 border-l-5 border-[#F57D87] text-[#3C3C3C] my-3 text-4">
              <div class="w-300px lg:w-440px">
                Không hạn chế thời gian học tập<br />
                Rảnh lúc nào, học lúc đó
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-56% h-full flex flex-col md:(order-1 mb-0) order-0 mb-6">
          <img src="/img/mh4.png" alt="" class="w-full h-full" />
        </div>
      </div>

      <div class="w-full flex flex-col items-center md:flex-row">
        <div class="flex-1 flex flex-col order-1 xl:px-20 px-2 mb-6">
          <div>
            <div class="text-[#F57D87] font-bold text-6">Tiết kiệm chi phí</div>
            <div class="pl-10 border-l-5 border-[#F57D87] text-[#3C3C3C] my-3 text-4">
              <div class="w-300px lg:w-80%">Ôn luyện theo chương trình Cambridge chỉ từ 5000đ</div>
            </div>
          </div>
          <div class="mt-4 lg:mt-10">
            <div class="text-[#F57D87] font-bold text-6">Phát triển kỹ năng tự học</div>
            <div class="pl-10 border-l-5 border-[#F57D87] text-[#3C3C3C] my-3 text-4">
              <div class="w-300px lg:w-70%">Nâng cao tính chủ động, tư duy logic và khả năng tự học</div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-56% flex flex-col order-0 mb-0 md:mb-6">
          <img src="/img/mh6.png" alt="" class="w-full h-full" />
        </div>
      </div>

      <div class="w-full flex flex-col items-center md:flex-row">
        <div class="flex-1 flex flex-col px-2 md:(order-0) xl:px-20 order-1">
          <div>
            <div class="text-[#F57D87] font-bold text-6">Mở rộng kiến thức</div>
            <div class="pl-10 border-l-5 border-[#F57D87] text-[#3C3C3C] my-3 text-4">
              <div class="w-300px lg:w-440px">Cambidge có đa dạng các chủ đề học tập về văn hoá và các lĩnh vực khác, giúp bạn có cái nhìn đa chiều về thế giới</div>
            </div>
          </div>
          <div class="mt-4 lg:mt-10">
            <div class="text-[#F57D87] font-bold text-6">Tiến bộ từng ngày</div>
            <div class="pl-10 border-l-5 border-[#F57D87] text-[#3C3C3C] my-3 text-4">
              <div class="w-300px lg:w-440px">
                Tự theo dõi tiến độ và thành tích của bản thân theo <br />
                từng kĩ năng loại đề
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-56% h-full flex flex-col md:(order-1 mb-0) order-0 mb-6">
          <img src="/img/mh5.png" alt="" class="w-full h-full" />
        </div>
      </div>
    </div>

    <div class="relative mt-60 md:mt-20 lg:mt-36 xl:mt-80 mb-0 md:mb-50">
      <div class="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-full md:mt-50 bg-[url(/img/bg/bg-footer.png)] bg-cover h-150">
        <div class="w-full lg:w-225 xl:(w-300 h-250px) 2xl:(w-340 h-280px) mx-auto flex items-center justify-between">
          <div class="translate-y-70% md:translate-y-1/2 lg:translate-y-18%">
            <IconFlagBr class="w-16 h-16 md:(w-30 h-30) lg:(w-50 h-50) xl:(w-70 h-70) 2xl:(w-80 h-80)" />
          </div>
          <div class="flex-1 px-2 py-4 lg:(px-0 py-0) text-white font-3 text-5 flex flex-col items-center">
            <div class="w-full text-center text-base md:text-2xl xl:text-8 2xl:text-10 font-700">Kiểm tra trình độ tiếng Anh miễn phí</div>
            <div class="mt-0 md:mt-4 py-3"><n-button class="bg-[#FED100] !font-bold text-xs lg:text-sm px-6 md:px-12" round>Kiểm tra ngay</n-button></div>
          </div>
          <div class="-translate-y-70% md:-translate-y-[70%] lg:-translate-y-1/2">
            <IconFlagBr2 class="w-16 h-16 md:(w-30 h-30) lg:(w-50 h-50) xl:(w-70 h-70) 2xl:(w-80 h-80)" />
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex items-center mt-14">
      <div class="w-full flex flex-col">
        <div class="w-full flex justify-center">
          <div class="text-6 my-0 mb-6 w-full text-center md:(w-[80%] my-16 text-10) lg:w-full">Học tập theo chương trình chuẩn các kỳ thi Cambridge</div>
        </div>
        <div class="w-full grid grid-cols-1 gap-8 md:(grid-cols-2) xl:(grid-cols-4 gap-8) text-[#3C3C3C]">
          <div class="flex flex-col p-6 items-center xl:items-start bg-white shadow-2xl rounded-7">
            <IconAnalysis />
            <span class="w-full my-4 lg:my-6 text-6 font-bold text-start md:h-6rem xl:h-9rem 2xl:h-7rem">Nâng cao trình độ tiếng Anh</span>
            <span class="text-start text-base 2xl:w-90%">Tiếp cận và học tập các kiến thức có hệ thống và bám sát chuẩn mực quốc tế</span>
          </div>
          <div class="flex flex-col p-6 items-center xl:items-start bg-white shadow-2xl rounded-7">
            <IconLight2 />
            <span class="w-full my-4 lg:my-6 text-6 font-bold text-start md:h-6rem xl:h-9rem 2xl:h-7rem"
              >Tăng sự tự tin, <br class="hidden lg:block" />
              thể hiện bản thân tốt hơn</span
            >
            <span class="text-start text-base">Phát triển kỹ năng giao tiếp thông qua speaking và writing </span>
          </div>
          <div class="flex flex-col p-6 items-center xl:items-start bg-white shadow-2xl rounded-7">
            <IconRocket />
            <span class="w-full my-4 lg:my-6 text-6 font-bold text-start md:h-6rem xl:h-9rem 2xl:h-7rem">Dễ dàng chuẩn bị cho kỳ thi Cambridge và các kỳ thi quốc tế khác</span>
            <span class="text-start text-base">Nắm được cấu trúc, hình thức và kiến thức của các kỳ thi Cambridge. Sẵn sàng tham gia kỳ thi thực tế</span>
          </div>
          <div class="flex flex-col p-6 items-center xl:items-start bg-white shadow-2xl rounded-7">
            <IconStudent />
            <span class="2xl:w-90% my-4 lg:my-6 text-6 font-bold text-start md:h-6rem xl:h-9rem 2xl:h-7rem">Tăng khả năng đỗ các kỳ thi tiếng Anh quốc tế</span>
            <span class="2xl:w-95% text-start text-base">Chương trình học tập chuẩn Cambridge giúp bạn tăng khả năng đậu các kỳ thi, mở ra cơ hội du học và phát triển sự nghiệp sau này</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex items-center mt-20">
      <div class="w-full flex flex-col">
        <div class="w-full flex flex-col justify-center">
          <div class="w-full flex justify-center">
            <div class="text-6 w-full md:(w-[80%] text-10) lg:w-full text-center">Tự luyện thi <span class="text-color_11 font-bold">Cambridge</span> chưa bao giờ dễ đến thế!</div>
          </div>
          <div class="flex justify-center items-center">
            <IconShape1 class="w-20 mt-10" />
            <div class="text-4 md:text-6 text-center px-3">Soạn <span class="font-bold text-#004390 text-6 md:text-12 lg:text-15 px-3">DK Mã gói</span> gửi <span class="font-bold text-#004390 text-6 md:text-12 lg:text-15 px-3">9285</span></div>
            <IconShape2 class="w-20 mt-5" />
          </div>
        </div>
        <div class="text-9 text-center pb-20">Các gói đăng ký</div>
        <div class="w-full flex flex-col space-y-6 items-center md:(flex-row justify-center space-x-8 h-340px) lg:(h-400px) xl:(w-80% mx-auto)">
          <div class="flex flex-col items-start bg-white shadow-lg rounded-2xl overflow-clip w-full h-340px md:(w-30% h-full)">
            <div class="bg-[#004390] text-white w-full px-12 py-4 rounded-2xl text-6 lg:text-8 text-center">Gói ngày</div>
            <div class="w-full flex flex-col h-full justify-center items-center my-3">
              <span class="text-xl font-bold">Mã gói:</span>
              <span class="font-bold text-10 lg:text-15 text-[#004390] my-5">CAM1</span>
              <span class="text-xl font-bold">Giá cước: <span class="font-bold text-[#004390]">5.000đ</span></span>
              <ClientOnly>
                <n-tooltip placement="bottom" trigger="hover">
                  <template #trigger>
                    <div class="hidden lg:block py-3 mt-6"><button class="bg-color_4 text-white text-2xl font-bold px-12 py-3 rounded-3xl">Đăng ký ngay</button></div>
                  </template>
                  Đăng ký bằng điện thoại thông minh
                </n-tooltip>
              </ClientOnly>
              <a class="block lg:hidden py-3 mt-6" href="sms:9285&body=CAM1"><button class="bg-color_4 text-white text-base font-bold px-12 py-3 rounded-3xl">Đăng ký ngay</button></a>
            </div>
          </div>
          <div class="flex flex-col items-start bg-white shadow-lg rounded-2xl overflow-clip w-full md:(flex-1 h-[calc(100%+80px)])">
            <div class="bg-[#ED2939] text-white w-full py-5 rounded-2xl text-6 lg:text-8 text-center">Gói tháng</div>
            <div class="w-full flex flex-col h-full justify-center items-center my-4">
              <span class="text-xl font-bold">Mã gói:</span>
              <span class="font-bold text-10 lg:text-15 text-[#ED2939] my-5">CAM30</span>
              <span class="text-xl font-bold">Giá cước: <span class="font-bold text-[#ED2939]">75.000đ</span></span>
              <ClientOnly>
                <n-tooltip placement="bottom" trigger="hover">
                  <template #trigger>
                    <div class="hidden lg:block py-3 mt-8"><button class="bg-color_11 text-white text-2xl font-bold px-12 py-3 rounded-3xl">Đăng ký ngay</button></div>
                  </template>
                  Đăng ký bằng điện thoại thông minh
                </n-tooltip>
              </ClientOnly>
              <a class="block lg:hidden py-3 mt-6" href="sms:9285&body=CAM30"><button class="bg-color_11 text-white text-base font-bold px-12 py-3 rounded-3xl" round>Đăng ký ngay</button></a>
            </div>
          </div>
          <div class="flex flex-col items-start bg-white shadow-lg rounded-2xl overflow-clip w-full md:w-30% h-full">
            <div class="bg-[#E58F00] text-white w-full py-4 rounded-2xl text-6 lg:text-8 text-center">Gói 6 tháng</div>
            <div class="w-full flex flex-col h-full justify-center items-center my-3">
              <span class="text-xl font-bold">Mã gói:</span>
              <span class="font-bold text-10 lg:text-15 text-[#E58F00] my-5">6CAM30</span>
              <span class="text-xl font-bold">Giá cước: <span class="font-bold text-[#E58F00]">300.000đ</span></span>
              <ClientOnly>
                <n-tooltip placement="bottom" trigger="hover">
                  <template #trigger>
                    <div class="hidden lg:block py-3 mt-6"><button class="bg-[#E58F00] text-white text-2xl font-bold px-12 py-3 rounded-3xl">Đăng ký ngay</button></div>
                  </template>
                  Đăng ký bằng điện thoại thông minh
                </n-tooltip>
              </ClientOnly>
              <a class="block lg:hidden py-3 mt-6" href="sms:9285&body=6CAM30"><button class="bg-[#E58F00] text-white text-base font-bold px-12 py-3 rounded-3xl" round>Đăng ký ngay</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full mt-30 lg:mt-50 xl:(w-80% mx-auto) relative">
      <UserReview />
      <div class="absolute -top-100px -right-60px hidden lg:block">
        <IconBookPen />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { EffectCards, Autoplay, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/navigation"
import "swiper/css/autoplay"

const modules = [EffectCards, Autoplay, Navigation]
const products = [
  {
    src: "/img/1.jpg",
    name: "mobiEdu",
    office: "Nền tảng chuyển đổi số toàn diện của mobiFone",
  },
  {
    src: "/img/1.jpg",
    name: "mobiEdu",
    office: "Nền tảng chuyển đổi số toàn diện của mobiFone",
  },
]
let mySwiper = ref({})
const setSwiper = xswiper => {
  mySwiper.value = xswiper
}
</script>
<style scoped>
.swiper-slide-content {
  display: flex;
  flex-direction: column;
}
</style>
