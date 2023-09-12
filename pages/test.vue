<template>
  <div class="w-full h-full flex flex-col items-center mt-10">
    <div class="relative w-full h-12">
      <div class="absolute h-full transition-all duration-400 ease-in-out z-4 rounded-[5px] left-0 top-0 bg-color_4" :style="{ width: sliderWidth, left: sliderLeft }"></div>
      <div v-for="(tab, index) in tabs" :key="index" class="inline-block w-1/3 h-full text-center leading-12 text-black cursor-pointer transition-all duration-300 ease-in-out rounded hover:(bg-color_4 text-white)" @click="moveSlider($event, index)">
        {{ tab.label }}
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "",
})
const tabs = [
  { id: 1, label: "Tab 1sdddddddddddddddddddddddddddddddddddddddddddddddddddd" },
  { id: 2, label: "Tab 2" },
  { id: 3, label: "Tab 3" },
]

const activeTab = ref(1)
const sliderWidth = ref("")
const sliderLeft = ref("0%")
function moveSlider(event, index) {
  activeTab.value = tabs[index].id
  // Lấy chiều rộng của tab và cập nhật sliderWidth
  const tabWidth = event.currentTarget.offsetWidth
  sliderWidth.value = `${tabWidth}px`
  // Cập nhật vị trí của slider
  const tabLeft = event.currentTarget.offsetLeft
  sliderLeft.value = `${tabLeft}px`
}
</script>
