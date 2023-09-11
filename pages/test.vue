<template>
  <div>
    <div>
      <div class="flex justify-between items-center">
        <button class="bg-gray-700 text-white w-full text-left outline-none text-base hover:bg-gray-600" @click="toggle(0)">Open Collapsible</button>
        <div :class="arrowIcon(0)"></div>
      </div>
      <div class="leading-50" :class="contentClasses(0)">
        <p>Lorem ipsum dolor sit amet...</p>
        <p>Another line of content...</p>
        <p>Yet another line of content...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
<<<<<<< HEAD
import { ref } from "vue"
=======
>>>>>>> e65d1c37 (update)
const activeSection = ref(-1)
const toggle = sectionIndex => {
  if (activeSection.value === sectionIndex) {
    activeSection.value = -1
  } else {
    activeSection.value = sectionIndex
  }
}
const contentClasses = sectionIndex => {
  const baseClasses = "overflow-hidden transition-max-height ease-out duration-800 bg-gray-200"
  const activeClasses = activeSection.value === sectionIndex ? "max-h-200" : "max-h-0"
  return `${baseClasses} ${activeClasses}`
}
const arrowIcon = sectionIndex => {
  return activeSection.value === sectionIndex ? "i-mdi:chevron-up md:text-xl" : "i-mdi:chevron-down md:text-xl"
}
</script>
