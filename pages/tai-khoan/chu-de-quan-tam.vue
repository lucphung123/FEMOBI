<template>
  <div class="py-10 bg-color_11">
    <div class="flex">
      <UserProfile class="w-27%" />
      <div class="w-75% bg-white border rounded-3 ml-10">
        <div class="p-10">
          <p class="text-color_4 text-9 leading-normal mr-0.5">Chủ đề quan tâm</p>
          <div v-if="selectedTopics.length === 0" class="mt-15">
            <div class="flex justify-center mt-15">
              <img src="/img/noFile.svg" alt="" />
            </div>
            <div class="flex justify-center mt-5 leading-5 text-xl font-medium py-6">
              <p>Bạn chưa quan tâm đến chủ đề nào. Vui lòng thêm chủ đề!</p>
            </div>
          </div>
          <div v-else class="flex justify-center mt-5 leading-5 text-xl font-medium py-6">
            <div>
              <div class="grid grid-cols-4 gap-5 mt-5">
                <div v-for="(topic, index) in selectedTopics" :key="index">
                  <div class="relative" @mouseenter="topic.hovered = true" @mouseleave="topic.hovered = false">
                    <img class="brightness-30" :src="topic.src" alt="" />
                    <div>
                      <p class="absolute -translate-x-2/4 -translate-y-2/4 z-1 w-full text-[white] font-bold text-lg leading-6 text-center left-2/4 top-2/4">
                        {{ topic.label }}
                      </p>
                      <div v-if="topic.hovered" class="flex absolute -translate-x-2/4 -translate-y-2/4 z-1 text-center left-2/4 top-3/4 cursor-pointer">
                        <div class="i-mdi:delete-outline text-white" @click="showModalConfirm = true"></div>
                        <p class="text-white text-sm ml-1" @click="showModalConfirm = true">Xóa</p>
                      </div>
                    </div>
                  </div>
                  <ModalConfirm v-show="showModalConfirm" :id="index" v-model:selectedTopics="selectedTopics" @close-modal="showModalConfirm = false" />
                </div>
              </div>
            </div>
          </div>
          <div class="justify-center flex">
            <Modal v-show="showModal" @close-modal="showModal = false" @select-topics="updateSelectedTopics" />
            <button class="hover:bg-color_5 hover:text-color_6 justify-center mt-5 bg-color_4 h-10 text-[white] text-sm px-[20px] rounded-[20px] font-bold" @click="showModal = true">THÊM CHỦ ĐỀ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserProfile from "../../components/account/UserProfile.vue"
import Modal from "../../components/modal/Modal.vue"
import ModalConfirm from "../../components/modal/ModalConfirm.vue"

// layouts
definePageMeta({
  layout: "course",
})

const showModalConfirm = ref(false)
const showModal = ref(false)
const selectedTopics = ref([])

function updateSelectedTopics(topics) {
  selectedTopics.value = topics
  showModal.value = false
}
</script>
