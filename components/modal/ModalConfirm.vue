<template>
  <div class="fixed flex justify-center bg-[#000000da] inset-0 z122" @click="$emit('close-modal')">
    <div @click.stop class="text-center bg-[white] h-40 w-150 mt-50 rounded-[20px]">
      <p class="font-medium text-lg mt-10">Bạn có chắc muốn xóa chủ đề này</p>
      <div class="mt-5">
        <button class="justify-center bg-[#E5E5E5] h-11 w-40 text-[#004390] text-sm px-[20px] rounded-[20px] font-bold" @click="delete_topic">XÓA CHỦ ĐỀ</button>
        <button class="hover-bg-[#f1b821] hover-text-[#1d1d1b] justify-center ml-5 bg-[#004390] h-11 w-23 text-[white] text-sm px-[20px] rounded-[20px] font-bold" @click="close_modal">HỦY</button>
      </div>
    </div>
    <div class="cursor-pointer mt-42" @click="close_modal">
      <div class="i-mdi:close text-white text-3xl"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedTopics: {
    type: Object,
    default: [],
  },
  id: {
    type: Number,
  },
})
const emit = defineEmits(["update:selectedTopics", "close-modal"])

const items = computed({
  get() {
    return props.selectedTopics
  },
  set(value) {
    emit("update:selectedTopics", value)
  },
})
function close_modal() {
  emit("close-modal")
}
function delete_topic() {
  if (props.id) {
    let x = items.value.filter((x, index) => {
      return index !== props.id
    })
    items.value = x
  }
  close_modal()
}
</script>
