<template>
  <div class="w-full">
    <div class="flex text-center mt-10 bg-color_11 py-4 gap-0.5">
      <div>
        <a class="cursor-pointer p-5" :class="{ 'bg-color_4 text-white rounded-lg': selectedTab === 0 }" @click="selectTab(0)">Profile</a>
      </div>
      <div>
        <a class="cursor-pointer p-5" :class="{ 'bg-color_4 text-white rounded-lg': selectedTab === 1 }" @click="selectTab(1)">Dashboard</a>
      </div>
      <div>
        <a class="cursor-pointer p-5" :class="{ 'bg-color_4 text-white rounded-lg': selectedTab === 2 }" @click="selectTab(2)">Settings</a>
      </div>
      <div>
        <a class="cursor-pointer p-5" :class="{ 'bg-color_4 text-white rounded-lg': selectedTab === 3 }" @click="selectTab(3)">Contacts</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const selectedTab = ref(0)

const selectTab = index => {
  selectedTab.value = index
}
</script>
