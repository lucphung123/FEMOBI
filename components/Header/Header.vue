<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="w-full">
      <div class="w-full flex justify-between">
        <div class="flex items-center justify-center">
          <div class="flex items-center space-x-5 w-full">
            <nuxt-link to="/"><img src="/img/logo.png" alt="" /></nuxt-link>
            <div class="dropdown-trigger" @mouseenter="showDropdown" @mouseleave="hideDropdown">
              <div class="dropdown flex items-center mt-4">
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
              <nuxt-link to="/giai-phap"> <p class="text-lg font-600 cursor-pointer hover:text-color_4 mt-4">Giải pháp</p></nuxt-link>
            </div>
            <div>
              <nuxt-link to="/cong-thi"> <p class="text-lg font-600 cursor-pointer hover:text-color_4 mt-4">Cổng thi</p></nuxt-link>
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

            <div v-if="Object.keys(userStore.user).length > 0" class="flex items-center justify-center">
              <div class="dropdown-trigger" @mouseenter="showDropdown1" @mouseleave="hideDropdown1">
                <div class="dropdown flex items-center">
                  <img v-if="userStore.user.avatar" :src="userStore.user.avatar" class="w-8 h-8 rounded-full" alt="" />
                  <img v-else src="/img/about/avatar.png" class="w-8 h-8 rounded-full" alt="" />
                  <p class="text-color_4 font-bold text-sm ml-1">Chào, {{ userStore.user.fullname || "" }}</p>
                </div>
                <div class="dropdown-content w-50 -ml-10 h-45 duration-500 transition-all rounded-4" :class="{ active: dropdownVisible1 }">
                  <div class="cursor-pointer flex flex-col p-5 space-y-5 text-sm font-500">
                    <nuxt-link to="/tai-khoan/ho-so"> <p class="border-b cursor-pointer hover:text-color_4">Tài khoản của tôi</p></nuxt-link>
                    <nuxt-link to="/tai-khoan/khoa-hoc-cua-toi"> <p class="border-b cursor-pointer hover:text-color_4">Khóa học của tôi</p></nuxt-link>
                    <nuxt-link to="/tai-khoan/uu-dai"> <p class="border-b cursor-pointer hover:text-color_4">Khuyến mãi của tôi</p></nuxt-link>
                    <div class="" @click="logout">
                      <p class="border-b cursor-pointer hover:text-color_4">Đăng xuất</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <button class="text-white bg-color_4 rounded-full h-40px w-130px font-600 text-sm hover:(bg-color_5 text-black)" @click="login">ĐĂNG NHẬP</button>
            </div>
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

const dropdownVisible = ref(false)
const dropdownVisible1 = ref(false)
const userStore = useUserStore()
let login = () => {}
onMounted(() => {
  const { getSigninUrl, getSignupUrl } = useCasdoor()
  login = () => {
    window.location.href = getSigninUrl()
  }
})
function showDropdown() {
  dropdownVisible.value = true
}
function hideDropdown() {
  dropdownVisible.value = false
}
function showDropdown1() {
  dropdownVisible1.value = true
}
function hideDropdown1() {
  dropdownVisible1.value = false
}
async function logout() {
  userStore.logout()
  await navigateTo("/")
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
