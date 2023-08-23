<template>
  <div class="p-10 bg-#EFEFEF">
    <div class="flex">
      <div class="w-25%">
        <UserProfile />
      </div>
      <div class="w-75% bg-white border h-130 rounded-3 ml-10">
        <div class="p-10">
          <p class="text-color_4 text-9 leading-normal mr-0.5">Thông báo</p>
          <table class="bg-color_4 w-full rounded-lg">
            <thead>
              <tr class="text-left h-11 text-#FFFFFF">
                <th class="w-120 px-5">Tiêu đề</th>
                <th class="w-50 px-5">Người gửi</th>
                <th class="w-50 px-5">Ngày gửi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <td>{{ item.title }}</td>
                <td>{{ item.sender }}</td>
                <td>{{ item.date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserProfile from "../../components/account/UserProfile.vue"
const items = [
  { title: "Thay đổi thông tin cá nhân thành công!", sender: "mobiEdu", date: "15/08/2023" },
  //   { title: "Tiêu đề 2", sender: "Người gửi 2", date: "Ngày gửi 2" },
  //   { title: "Tiêu đề 3", sender: "Người gửi 3", date: "Ngày gửi 3" },
]
</script>
