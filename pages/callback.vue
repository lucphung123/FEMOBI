<template>
  <div class="flex justify-center items-center w-screen h-screen"><Loading /></div>
</template>
<script setup>
import { useUserStore } from "~~/stores/userStore"
// layouts
definePageMeta({
  layout: "none",
})
const userStore = useUserStore()
const route = useRoute()
const { RestApi } = useApi()
const { data: loginData } = await RestApi.user.login({
  params: {
    code: route.query.code,
    idDevice: route.query.code,
  },
})

onMounted(async () => {
  if (!loginData.value.error) {
    userStore.setUser(loginData.value.data)
    await navigateTo("/")
  } else {
    console.log("Có lỗi xảy ra")
  }
})
</script>
