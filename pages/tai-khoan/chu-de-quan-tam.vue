<template>
  <div class="p-10">
    <div class="flex">
      <UserProfile class="w-20%" />
      <div class="w-80% bg-white border rounded-3 ml-10">
        <div class="p-5">
          <p class="text-[#004390] text-9 leading-normal mr-0.5">
            Chủ đề quan tâm
          </p>
          <div class="grid-cols-4 grid">
            <ul>
              <li v-for="topic in selectedTopics" :key="topic">{{ topic }}</li>
            </ul>
          </div>
          <div class="justify-center flex">
            <Modal v-show="showModal" @close-modal="showModal = false" />

            <button
              class="hover-bg-[#f1b821] hover-text-[#1d1d1b] justify-center mt-5 bg-[#004390] h-10 text-[white] text-sm px-[20px] rounded-[20px] font-bold"
              @click="showModal = true"
            >
              THÊM CHỦ ĐỀ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserProfile from "../../components/account/UserProfile.vue";
import Modal from "../../components/modal/Modal.vue";
const showModal = ref(false);
const selectedTopics = ref([]);
</script>
