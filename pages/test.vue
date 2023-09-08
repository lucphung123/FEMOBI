<template>
  <div>
    <button class="bg-gray-700 text-white w-full text-left outline-none text-base hover:bg-gray-600" @click="toggle(0)">Open Collapsible</button>
    <div :class="contentClasses(0)">
      <p>
        Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum
        dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your
        long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)
      </p>
    </div>
    <button class="bg-gray-700 text-white w-full text-left outline-none text-base hover:bg-gray-600" @click="toggle(1)">Open Section 1</button>
    <div :class="contentClasses(1)">Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)Lorem ipsum dolor sit amet... (your long content here)</div>
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
  const baseClasses = "overflow-hidden transition-max-height ease-out duration-200 bg-gray-200"
  const activeClasses = activeSection.value === sectionIndex ? "max-h-100" : "max-h-0"
  return `${baseClasses} ${activeClasses}`
}
</script>
