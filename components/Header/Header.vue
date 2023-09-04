<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="w-full">
      <div class="w-full flex justify-between">
        <div class="flex items-center justify-center px-0 py-2">
          <div class="flex items-center space-x-5 w-full">
            <nuxt-link to="/"><img src="/img/logo.png" alt="" /></nuxt-link>
            <div class="dropdown-trigger" @mouseenter="showDropdown" @mouseleave="hideDropdown">
              <div class="dropdown flex items-center">
                <nuxt-link to="/khoa-hoc"><p class="text-lg font-600">Khoá học</p></nuxt-link>
                <div class="i-mdi:chevron-down text-xl"></div>
              </div>
              <div class="dropdown-content w-60 h-45 duration-500 transition-all rounded-4" :class="{ active: dropdownVisible }">
                <div class="cursor-pointer flex flex-col p-5 space-y-5 text-sm font-500">
                  <nuxt-link to="/khoa-hoc"> <p class="border-b cursor-pointer hover:text-color_4">Tất cả</p></nuxt-link>
                  <nuxt-link to="/khoa-hoc/tre-em"> <p class="border-b cursor-pointer hover:text-color_4">Trẻ em</p></nuxt-link>
                  <nuxt-link to="/khoa-hoc/hoc-sinh-pho-thong"> <p class="border-b cursor-pointer hover:text-color_4">Học sinh phổ thông</p></nuxt-link>
                  <nuxt-link to="/khoa-hoc/sinh-vien-nguoi-di-lam"> <p class="border-b cursor-pointer hover:text-color_4">Sinh viên và người đi làm</p></nuxt-link>
                </div>
              </div>
            </div>
            <div>
              <nuxt-link to="/giai-phap"> <p class="text-lg font-600 cursor-pointer hover:text-color_4">Giải pháp</p></nuxt-link>
            </div>
            <div>
              <nuxt-link to="/cong-thi"> <p class="text-lg font-600 cursor-pointer hover:text-color_4">Cổng thi</p></nuxt-link>
            </div>
          </div>
        </div>
        <div class="flex-col space-y-2 p-2">
          <div class="flex text-gray-600 font-600 justify-end">
            <div class="flex text-color_9">
              <nuxt-link to="/gioi-thieu" class="cursor-pointer mr-5 hover:text-color_4">
                <p class="cursor-pointer">Về mobiEdu</p>
              </nuxt-link>
              <nuxt-link to="/ho-tro-khach-hang" class="cursor-pointer border-r pr-5 hover:text-color_4">
                <p>Hỗ trợ</p>
              </nuxt-link>
            </div>
            <nuxt-link to="/gio-hang" class="ml-5 flex items-center">
              <div class="i-mdi:cart text-lg"></div>
            </nuxt-link>
          </div>
          <div class="flex items-ceter gap-2 pb-2">
            <div class="relative">
              <input type="text" placeholder="Nhập từ khóa...." class="rounded-full bg-gray-200 h-40px w-230px px-5 text-sm" />
              <div class="i-mdi:magnify absolute text-2xl top-2 right-3"></div>
            </div>
            <ClientOnly>
              <div v-if="Object.keys(userStore.user).length > 0" class="flex items-center justify-center">
                <div class="dropdown-trigger" @mouseenter="showDropdown1" @mouseleave="hideDropdown1">
                  <div class="dropdown flex items-center">
                    <img src="/img/about/avatar.png" class="w-8 h-8 rounded-full" alt="" />
                    <p class="text-color_4 font-bold text-sm ml-1">Chào, 0393999999</p>
                  </div>
                  <div class="dropdown-content w-50 -ml-10 h-45 duration-500 transition-all rounded-4" :class="{ active: dropdownVisible1 }">
                    <div class="cursor-pointer flex flex-col p-5 space-y-5 text-sm font-500">
                      <nuxt-link to="/tai-khoan/ho-so"> <p class="border-b cursor-pointer hover:text-color_4">Tài khoản của tôi</p></nuxt-link>
                      <nuxt-link to="/tai-khoan/khoa-hoc-cua-toi"> <p class="border-b cursor-pointer hover:text-color_4">Khóa học của tôi</p></nuxt-link>
                      <nuxt-link to="/tai-khoan/uu-dai"> <p class="border-b cursor-pointer hover:text-color_4">Khuyến mãi của tôi</p></nuxt-link>
                      <nuxt-link to="/"> <p class="border-b cursor-pointer hover:text-color_4">Đăng xuất</p></nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <button class="text-white bg-color_4 rounded-full h-40px w-130px font-600 text-sm hover:(bg-color_5 text-black)" @click="hender_sign_in()">ĐĂNG NHẬP</button>
              </div>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useCasdoor } from "casdoor-vue-sdk"
import { useUserStore } from "~~/stores/userStore"
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
const userStore = useUserStore()
const url_callback = useCookie("UrlCallback", { maxAge: 1 * 24 * 60 * 60 })
const hender_sign_in = () => {
  url_callback.value = window.location.pathname
  sign_in()
}
//dropdown
const dropdownVisible = ref(false)
const showDropdown = () => {
  dropdownVisible.value = true
}
const hideDropdown = () => {
  dropdownVisible.value = false
}
const dropdownVisible1 = ref(false)
const showDropdown1 = () => {
  dropdownVisible1.value = true
}
const hideDropdown1 = () => {
  dropdownVisible1.value = false
}
</script>

<style scoped>
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.dropdown-content.active {
  display: block;
}

.dropdown {
  cursor: pointer;
  position: relative;
}
</style>
