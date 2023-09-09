<template>
  <div>
    <div v-for="(section, index) in sections" :key="index">
      <div class="flex justify-between items-center">
        <button class="bg-gray-700 text-white w-full text-left outline-none text-base hover:bg-gray-600" @click="toggle(index)">
          {{ section.title }}
        </button>
        <div :class="arrowIcon(index)"></div>
      </div>
      <div class="leading-50" :class="contentClasses(index)">
        <p v-for="(line, lineIndex) in section.content" :key="lineIndex">
          {{ line }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

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

const sections = [
  {
    title: "Open Collapsible",
    content: ["Lorem ipsum dolor sit amet...", "Another line of content...", "Yet another line of content..."],
  },
  {
    title: "Open Section 1",
    content: ["Lorem ipsum dolor sit amet...", "Another line for section 1..."],
  },
]
</script>
