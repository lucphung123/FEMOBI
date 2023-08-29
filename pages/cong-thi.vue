<template>
  <div v-if="isLoading">
    <Loading />
  </div>

  <div v-else>cổng thi</div>
</template>

<script setup>
const isLoading = ref(true)
setTimeout(() => {
  isLoading.value = false
}, 1000)
</script>
