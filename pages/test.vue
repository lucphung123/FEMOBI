<template>
  <ModalConfirm v-show="showModal" @close-modal="showModal = false" />

  <button class="hover-bg-[#f1b821] hover-text-[#1d1d1b] justify-center mt-5 bg-[#004390] h-10 text-[white] text-sm px-[20px] rounded-[20px] font-bold" @click="showModal = true">THÊM CHỦ ĐỀ</button>
</template>
<script setup>
import ModalConfirm from "../components/modal/ModalConfirm.vue"

const showModal = ref(false)
</script>
