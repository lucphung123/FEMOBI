<template>
  <div v-if="isLoading">
    <Loading />
  </div>
  <div v-else>giải pháp</div>
</template>

<script setup>
const isLoading = ref(true)
setTimeout(() => {
  isLoading.value = false
}, 1000)
</script>
