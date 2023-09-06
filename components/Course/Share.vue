<template>
  <div
    class="rounded justify-center hover:bg-gray-400 p-2 cursor-pointer"
    @click="showModal = true"
  >
    <Icon name="ic:outline-share"  class="w-full flex justify-center items-center text-2xl"/> 
    <p class="w-full flex justify-center items-center">Share</p>
  </div>
  <modal
    style="width: 700px"
    v-model:show="showModal"
    preset="card"
    :title="$t('share-the-course')"
    @positive-click="submitCallback"
    :close-on-esc="true"
  >
    <div class="flex space-x-3">
      <n-input v-model:value="source" type="text" id="myInput" />
      <n-button type="primary" @click="copyText">Copy</n-button>
    </div>
    <div class="flex justify-center">
      <n-button class="mt-4" type="info" @click="clickShareFb" icon-placement="right">
        {{ $t('share') }} <template #icon>
          <Icon name="ic:baseline-facebook"  />
        </template>
      </n-button>
    </div>
  </modal>
</template>

<script setup>
import { ref } from "vue";
import { useClipboard, useUrlSearchParams } from "@vueuse/core";


const t = useNuxtApp().$i18n.t
const source = ref("link facebook");
const { text, copy, copied, isSupported } = useClipboard({
  source,
});
const showModal = ref(false);
const submitCallback = (params) => {
  notification.success({
    content: t('you-shared-on-facebook'),
    duration: 1000,
    keepAliveOnHover: true,
  })

};
const clickShareFb = () => {
  const url = window.location.href;
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" + url,
    "facebook-share-dialog",
    "width=800,height=600"
  );
  showModal.value = false;
  return false;
};
const copyText = () => {
  copy(source.value);
  notification.success({
    content: t('copy-successful'),
    duration: 1000,
    keepAliveOnHover: true,
  })

};
</script>
