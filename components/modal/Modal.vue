<template>
  <div class="fixed flex justify-center bg-[#000000da] inset-0 z-[1000] overflow-y-auto" @click="$emit('close-modal')">
    <div @click.stop class="text-center bg-[white] w-250 mt-10 absolute px-0 py-10 rounded-[20px]">
      <h6 class="font-medium text-[36px] mx-0 font-bold">Hãy chọn chủ đề mà bạn quan tâm</h6>
      <div class="grid grid-cols-4 gap-5 p-5">
        <div v-for="(data, index) in imageList" :key="index" class="relative cursor-pointer" @click="toggleCheckbox(index)">
          <p class="absolute -translate-x-2/4 -translate-y-2/4 z-1 w-full text-[white] font-bold text-lg leading-6 text-center left-2/4 top-2/4">
            {{ data.label }}
          </p>
          <div
            class="transition duration-0 ease-in-out filter"
            :class="{
              'brightness-30': isChecked[index],
              'brightness-50': !isChecked[index],
            }"
          >
            <img class="" :src="data.src" alt="" />
          </div>
          <div class="w-5 h-5 top-1 right-1 rounded-full absolute border flex justify-center items-center" :class="{ 'bg-color_5': isChecked[index] }">
            <div class="i-mdi:check text-white" v-if="isChecked[index]"></div>
          </div>
        </div>
      </div>
      <button class="hover:bg-color_5 hover:text-color_6 justify-center mt-5 bg-color_4 h-10 text-[white] text-sm px-[20px] rounded-[20px] font-bold" @click="selectTopicsAndCloseModal">CHỌN HOÀN TÂT</button>
    </div>
    <div class="cursor-pointer ml-245 mt-1" @click="$emit('close-modal')">
      <div class="i-mdi:close text-white text-3xl"></div>
    </div>
  </div>
</template>

<script setup>
const imageList = [
  { id: 1, src: "/img/course1/Tieu-hoc.png", label: "Tiền tiểu học" },
  { id: 2, src: "/img/course1/stream.png", label: "Steam" },
  { id: 3, src: "/img/course1/tin-hoc.png", label: "Tin học" },
  { id: 4, src: "/img/course1/Tieng-anh.png", label: "Tiếng anh" },
  { id: 5, src: "/img/course1/Thpt.png", label: "Môn học phổ thông" },
  { id: 6, src: "/img/course1/Ky-nang-mem.png", label: "Kỹ năng mềm" },
  { id: 7, src: "/img/course1/Ky-nang-van-phong.png", label: "Kỹ năng văn phòng" },
  { id: 8, src: "/img/course1/marketting.png", label: "Kinh doanh - Marketing" },
  { id: 9, src: "/img/course1/nghe-thuat.png", label: "Nghệ thuật" },
  { id: 10, src: "/img/course1/suc-khoe.png", label: "Sức khỏe - Đời sống" },
  { id: 11, src: "/img/course1/Ky-nang-van-phong.png", label: "Kỹ năng văn phòng" },
  { id: 12, src: "/img/course1/marketting.png", label: "Kinh doanh - Marketing" },
  { id: 13, src: "/img/course1/nghe-thuat.png", label: "Nghệ thuật" },
  { id: 14, src: "/img/course1/suc-khoe.png", label: "Sức khỏe - Đời sống" },
]
const isChecked = ref(Array(imageList.length).fill(false))

const hoverModal = ref(false)

function toggleCheckbox(index) {
  isChecked.value[index] = !isChecked.value[index]
  hoverModal.value = false
}
const emits = defineEmits()

function selectTopicsAndCloseModal() {
  const selectedTopics = imageList.filter((data, index) => isChecked.value[index])
  emits("select-topics", selectedTopics)
  emits("close-modal")
}
</script>
