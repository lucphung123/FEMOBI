<template>
  <label class="flex items-center space-x-2 cursor-pointer">
    <input type="checkbox" v-model="isChecked" class="hidden" />
    <span class="w-14 h-8 bg-gray-400 rounded-full p-1 transition-transform duration-300 ease-in-out transform" :class="{ 'bg-green-500': isChecked }">
      <span class="block w-6 h-6 bg-white rounded-full shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out" :class="{ 'translate-x-full': isChecked }"></span>
    </span>
  </label>
</template>

<script setup>
import { ref } from "vue"

const isChecked = ref(false)
</script>
