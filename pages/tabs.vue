<template>
  <div class="w-full">
    <div>
      <nav class="w-[600px] h-[60px] flex text-center relative shadow-xl rounded-[5px] bg-white">
        <div class="absolute h-full w-[20%] transition-all duration-400 ease-in-out z-10 rounded-[5px] left-0 top-0 bg-color_4" :style="{ left: sliderLeft }"></div>
        <label class="w-full h-full leading-[60px] text-lg font-normal text-color_4 relative z-100 cursor-pointer transition-all duration-300 ease-in-out mx-[5px] my-0 rounded-[5px] hover:(bg-color_4 text-white)" v-for="(tab, index) in tabs" :key="index" :for="tab.id" :class="activeTab === tab.id ? '!text-white' : ''" @click="moveSlider(index)">
          {{ tab.label }}
        </label>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const tabs = [
  { id: "home", label: "Home" },
  { id: "blog", label: "Blog" },
  { id: "code", label: "Code" },
  { id: "help", label: "Help" },
  { id: "about", label: "About" },
]
const activeTab = ref("home")
const sliderLeft = computed(() => {
  const tabWidth = 100 / tabs.length
  return tabWidth * tabs.findIndex(tab => tab.id === activeTab.value) + "%"
})
function moveSlider(index) {
  activeTab.value = tabs[index].id
}
</script>
