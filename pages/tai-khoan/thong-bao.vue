<template>
  <div class="p-10 bg-#EFEFEF">
    <div class="flex">
      <div class="w-1/4">
        <UserProfile />
      </div>
      <div class="w-3/4 bg-white border h-130 rounded-3 ml-10">
        <div class="p-10">
          <p class="text-color_4 text-3xl leading-normal mr-0.5">Thông báo</p>
          <table class="rounded-lg bg-color_4 w-full mt-4">
            <thead>
              <tr class="w-full text-left h-11 text-white">
                <th class="w-70% px-5">Tiêu đề</th>
                <th class="w-15% px-5">Người gửi</th>
                <th class="w-15% px-5 text-right">Ngày gửi</th>
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
  //   { title: "Tiêu đề 1", sender: "Người gửi 1", date: "Ngày gửi 1" },
  //   { title: "Tiêu đề 2", sender: "Người gửi 2", date: "Ngày gửi 2" },
  //   { title: "Tiêu đề 3", sender: "Người gửi 3", date: "Ngày gửi 3" },
]
</script>
