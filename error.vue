<template>
  <div class="w-full min-h-screen flex flex-col overflow-clip bg-white items-center">
    <div class="w-full sticky z-100 top-0 flex-1 flex flex-col bg-white items-center shadow-md">
      <div class="lg:(w-225 px-0) xl:(w-340) 2xl:(w-340)">
        <Header />
      </div>
    </div>
    <div class="w-full flex-1 flex flex-col items-center justify-center">
      <div class="w-full lg:(w-225 px-0) xl:(w-320) 2xl:(w-340) flex flex-col items-center">
        <div class="flex mt-10 w-full">
          <div class="w-1/2">
            <Logo404 />
          </div>
          <div class="w-1/2 mt-30 ml-30">
            <p class="text-color_4 text-8 font-bold">Rất tiếc, không tìm thấy trang</p>
            <p class="text-5">Trang này không tồn tại hoặc bị lỗi do đường link không chính xác</p>
            <p class="text-5">Bạn vui lòng kiểm tra lại đường truyền và thử lại ở các gợi ý khác:</p>
            <div class="mt-7 flex gap-5">
              <p class="bg-color_11 px-5 text-color_4 h-8 p-1 rounded-3xl cursor-pointer hover:(bg-color_4 text-white)">Tra cứu điểm thi</p>
              <p class="bg-color_11 px-5 text-color_4 h-8 p-1 rounded-3xl cursor-pointer hover:(bg-color_4 text-white)">MobiFone</p>
              <p class="bg-color_11 px-5 text-color_4 h-8 p-1 rounded-3xl cursor-pointer hover:(bg-color_4 text-white)">kỹ năng</p>
            </div>
            <div class="relative mt-10">
              <input class="bg-white w-70% h-15 border text-color_8 px-10 py-5 text-xl rounded-3xl outline-none" type="text" placeholder="Tìm nhanh" />
              <div class="absolute right-50 top-1/2 transform -translate-y-1/2">
                <div class="i-mdi:magnify text-2xl text-color_4 cursor-pointer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex-1 flex flex-col mt-20 bg-[url(/img/bg/bg-footer.png)] bg-cover bg-top w-full text-white items-center" id="footer">
      <div class="w-full px-4 text-justify lg:text-left lg:(w-225 px-0) xl:(w-340) 2xl:(w-340) mt-12">
        <Footer />
      </div>
    </div>
  </div>
</template>
<script setup>
import Logo404 from "~~/components/icon/Logo404.vue"
import { useCasdoor } from "casdoor-vue-sdk"
import { useUserStore } from "~~/stores/userStore"
const userStore = useUserStore()
const props = defineProps({
  error: Object,
})
if (props.error.statusCode !== undefined && props.error.statusCode === 401) {
  userStore.logout()
}

let sign_in = () => {}
let sign_up = () => {}
onMounted(() => {
  const { getSigninUrl, getSignupUrl } = useCasdoor()
  sign_in = () => {
    window.location.href = getSigninUrl()
  }
  sign_up = () => {
    window.location.href = getSignupUrl()
  }
})
</script>
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
