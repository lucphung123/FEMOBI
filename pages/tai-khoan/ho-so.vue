<template>
  <div class="p-10 bg-#EFEFEF">
    <div class="flex">
      <UserProfile class="w-25%" />
      <div class="w-80% bg-white border rounded-3 ml-10">
        <div class="p-10">
          <p class="text-color_4 font-bold text-2xl leading-[45px] text-left mb-2.5">Hồ sơ của tôi</p>
          <div class="flex">
            <div class="w-65%">
              <p class="font-bold text-lg pb-[15px] border-b">Thông tin cá nhân</p>
              <div class="flex mt-4 gap-3">
                <img class="w-25 h-25 object-cover" src="/img/4.png" alt="" />
                <p class="mt-9 text-color_6 text-base leading-6 mb-1">Họ và tên</p>
                <input class="h-14 border rounded-2 mt-4 p-5 outline-none w-77" placeholder="Nguyễn Văn A" type="text" value="Dương Tuấn Minh" />
              </div>
              <div class="flex mt-4">
                <p class="mt-4">Ngày sinh</p>
                <div>
                  <select class="w-28 h-14 border ml-14 rounded-2" v-model="selectedDay">
                    <option v-for="day in days" :key="day">{{ day }}</option>
                  </select>

                  <select class="w-28 h-14 border ml-4 rounded-2" v-model="selectedMonth">
                    <option v-for="(month, index) in months" :key="index">
                      {{ month }}
                    </option>
                  </select>

                  <select class="w-28 h-14 border ml-4 rounded-2" v-model="selectedYear">
                    <option v-for="year in years" :key="year">
                      {{ year }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="flex mt-4">
                <p>Giới tính</p>
                <div class="flex">
                  <label class="ml-15 items-center flex">
                    <input type="radio" class="w-5 h-5 mr-2" v-model="selectedGender" value="male" />
                    Nam
                  </label>

                  <label class="ml-15 items-center flex">
                    <input type="radio" class="w-5 h-5 mr-2" v-model="selectedGender" value="female" />
                    Nữ
                  </label>

                  <label class="ml-15 items-center flex">
                    <input type="radio" class="w-5 h-5 mr-2" v-model="selectedGender" value="other" />
                    Khác
                  </label>
                </div>
              </div>
              <div class="mt-4">
                <button class="hover:bg-color_5 hover:text-color_6 bg-light-100cursor-pointer bg-color_4 h-10 text-[white] text-sm px-[20px] rounded-[20px]">Lưu thay đổi</button>
              </div>
              <div class="mt-4">
                <p class="font-bold text-lg pb-[15px] border-b">Bảo mật</p>
              </div>
              <div>
                <div class="mt-4 flex justify-between">
                  <div class="flex items-center">
                    <div class="i-mdi:lock-outline text-3xl"></div>
                    <p class="ml-4">Đổi mật khẩu</p>
                  </div>
                  <div>
                    <button v-if="!showChangePasswordForm" class="hover:bg-color_5 hover:text-color_6 bg-white text-color_4 border-color_4 border px-[10px] py-1 rounded-2" @click="toggleForm">Cập nhật</button>
                    <div v-else>
                      <div>
                        <button class="hover:bg-color_5 hover:text-color_6 cursor-pointer bg-color_4 h-10 text-[white] text-sm px-[20px] py-2.5 rounded-[20px]" type="submit" @click="saveChanges">Lưu thay đổi</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="showChangePasswordForm">
                  <div class="pt-2 pb-5 px-3.5">
                    <label>Mật khẩu hiện tại</label>
                    <div class="mt-2">
                      <div class="relative items-center">
                        <input class="bg-[white] w-full h-[50px] text-color_8 text-sm px-5 py-[5px] rounded-[5px] border border-color_2 outline-none" :type="showCurrentPassword ? 'text' : 'password'" v-model="mCurrentPassword" name="mCurrentPassword" placeholder="Nhập mật khẩu hiện tại" />
                        <span class="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" @click="showCurrentPassword = !showCurrentPassword">
                          <div class="i-mdi:eye-outline text-xl" v-if="showCurrentPassword"></div>
                          <div v-else class="i-mdi:eye-off-outline text-xl"></div>
                        </span>
                      </div>
                      <div class="text-red-500 mt-2 italic text-sm" v-if="!mCurrentPassword && hasSubmitted">Trường thông tin này là bắt buộc</div>
                    </div>
                  </div>
                  <div class="pt-0 pb-5 px-3.5">
                    <label>Nhập mật khẩu mới</label>
                    <div class="mt-2">
                      <div class="relative">
                        <input class="bg-[white] w-full h-[50px] text-color_8 text-sm px-5 py-[5px] rounded-[5px] border border-color_2 outline-none" :type="showNewPassword ? 'text' : 'password'" v-model="mNewPassword" name="mNewPassword" placeholder="Nhập mật khẩu mới" />
                        <span class="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" @click="showNewPassword = !showNewPassword">
                          <div class="i-mdi:eye-outline text-xl" v-if="showNewPassword"></div>
                          <div v-else class="i-mdi:eye-off-outline text-xl"></div>
                        </span>
                      </div>
                      <div class="text-red-500 mt-2 italic text-sm" v-if="!mNewPassword && hasSubmitted">Trường thông tin này là bắt buộc</div>
                    </div>
                  </div>
                  <div class="pt-0 pb-5 px-3.5">
                    <label>Nhập lại mật khẩu mới</label>
                    <div class="mt-2">
                      <div class="relative">
                        <input class="bg-[white] w-full h-[50px] text-color_8 text-sm px-5 py-[5px] rounded-[5px] border border-color_2 outline-none" :type="showConfirmNewPassword ? 'text' : 'password'" v-model="mConfirmNewPassword" name="mConfirmNewPassword" placeholder="Nhập lại mật khẩu mới" />
                        <span class="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" @click="showConfirmNewPassword = !showConfirmNewPassword">
                          <div class="i-mdi:eye-outline text-xl" v-if="showConfirmNewPassword"></div>
                          <div v-else class="i-mdi:eye-off-outline text-xl"></div>
                        </span>
                      </div>
                      <div class="text-red-500 mt-2 italic text-sm" v-if="!mConfirmNewPassword && hasSubmitted">Trường thông tin này là bắt buộc</div>
                      <div v-if="passwordsMismatch && hasSubmitted" class="text-red-500 mt-2 italic text-sm">Mật khẩu nhập lại không khớp!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-45% ml-6">
              <p class="font-bold text-lg pb-[15px] border-b">Số điện thoại và Email</p>
              <div class="flex justify-between items-center mt-5">
                <div v-if="showNumber" class="flex items-center">
                  <div class="i-mdi:phone-outline text-3xl mr-3"></div>
                  <div class="text-color_9 font-normal text-base leading-[22px]">
                    <p>Số điện thoại</p>
                    <p>0397573781</p>
                  </div>
                </div>
                <div class="relative" v-else>
                  <div class="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <div class="i-mdi:phone-outline text-3xl"></div>
                  </div>
                  <input class="bg-[white] w-80% h-[50px] text-color_8 text-sm px-12 py-[5px] rounded-[5px] border border-color_2 outline-none" type="text" placeholder="Nhập số điện thoại" />
                </div>
                <div v-if="showNumber">
                  <button class="hover:bg-color_5 hover:text-color_6 bg-white text-color_4 border-color_4 border px-[10px] py-1 rounded-2" @click="showFromNumber">Cập nhật</button>
                </div>

                <div v-else>
                  <button class="hover:bg-color_5 hover:text-color_6 cursor-pointer bg-color_4 h-10 text-[white] text-sm w-30 py-2.5 rounded-[20px]" type="submit">Lưu thay đổi</button>
                </div>
              </div>
              <div class="flex justify-between items-center mt-5">
                <div v-if="showEmail" class="flex items-center">
                  <div class="i-mdi:email-outline text-3xl mr-3"></div>
                  <div class="text-color_9 font-normal text-base leading-[22px]">
                    <p>Địa chỉ Email</p>
                    <p>Duongtuanminhst@gmail.com</p>
                  </div>
                </div>
                <div class="relative" v-else>
                  <div class="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <div class="i-mdi:email-outline text-3xl"></div>
                  </div>
                  <input class="bg-[white] w-80% h-[50px] text-color_8 text-sm px-12 py-[5px] rounded-[5px] border border-color_2 outline-none" type="text" placeholder="Nhập Email" />
                </div>
                <div v-if="showEmail">
                  <button class="hover:bg-color_5 hover:text-color_6 bg-white text-color_4 border-color_4 border px-[10px] py-1 rounded-2" @click="showFromEmail">Cập nhật</button>
                </div>

                <div v-else>
                  <button class="hover:bg-color_5 hover:text-color_6 cursor-pointer bg-color_4 h-10 text-[white] text-sm w-30 py-2.5 rounded-[20px]" type="submit">Lưu thay đổi</button>
                </div>
              </div>
              <p class="font-bold text-lg pb-[15px] border-b mt-8">Liên kết mạng xã hội</p>
              <div class="flex justify-between mt-8">
                <div class="flex items-center">
                  <img src="/img/icon/facebook.png" alt="" />
                  <p class="ml-2 text-color_9 font-normal text-base leading-[22px]">Facebook</p>
                </div>
                <button class="hover:bg-color_5 hover:text-color_6 bg-white text-color_4 border-color_4 border px-[10px] py-1 rounded-2">Liên kết</button>
              </div>
              <div class="flex justify-between mt-8">
                <div class="flex items-center">
                  <img src="/img/icon/google.png" alt="" />
                  <p class="ml-2 text-color_9 font-normal text-base leading-[22px]">Google</p>
                </div>
                <button class="hover:bg-color_5 hover:text-color_6 bg-white text-color_4 border-color_4 border px-[10px] py-1 rounded-2">Liên kết</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserProfile from "../../components/account/UserProfile.vue"
import { ref } from "vue"

const days = ref([...Array(31).keys()].map(day => day + 1))
const months = ref(["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"])
const years = ref([...Array(100).keys()].map(year => 2023 - year)) // Thay 2023 bằng năm hiện tại

const selectedDay = ref(null)
const selectedMonth = ref(null)
const selectedYear = ref(null)

const selectedGender = ref(null)
//form pass
const showCurrentPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmNewPassword = ref(false)
const mCurrentPassword = ref("")
const mNewPassword = ref("")

const mConfirmNewPassword = ref("")

const showChangePasswordForm = ref(false)
const hasSubmitted = ref(false)

const toggleForm = () => {
  showChangePasswordForm.value = !showChangePasswordForm.value
}
const passwordsMismatch = computed(() => mNewPassword.value !== mConfirmNewPassword.value)
const saveChanges = () => {
  hasSubmitted.value = true
  let hasError = false

  if (!mCurrentPassword.value) {
    hasError = true
  }

  if (!mNewPassword.value) {
    hasError = true
  }

  if (!mConfirmNewPassword.value) {
    hasError = true
  }

  if (mNewPassword.value !== mConfirmNewPassword.value) {
    hasError = true
  }

  if (hasError) {
    return
  }
}
// form number
const showNumber = ref(true)
const showFromNumber = () => {
  showNumber.value = !showNumber.value
}
// form email
const showEmail = ref(true)
const showFromEmail = () => {
  showEmail.value = !showEmail.value
}
</script>
