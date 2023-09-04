<template></template>
<script setup>
import { useUserStore } from "~~/stores/userStore"
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
const { RestApi } = useApi()
const { data: loginData } = await RestApi.user.login({
  params: {
    code: route.query.code,
    idDevice: route.query.code,
  },
})
const access_token = useCookie("AccessToken", { maxAge: 30 * 24 * 60 * 60 })
access_token.value = loginData.value.data?.accessToken
const notification_token = useCookie("NotificationToken", { maxAge: 30 * 24 * 60 * 60 })
notification_token.value = loginData.value.data?.notificationToken
onMounted(async () => {
  const url_callback = useCookie("UrlCallback")
  let backup_url = url_callback.value + ""
  if (!loginData.value?.error) {
    userStore.setUser(loginData.value.data)
    userStore.setToken(loginData.value.data?.accessToken)
    userStore.setNotificationToken(loginData.value.data?.notificationToken)
    if (url_callback.value !== undefined && url_callback.value !== "") {
      url_callback.value = ""
      await navigateTo(backup_url)
    } else {
      router.push("/")
    }
  } else {
    if (url_callback.value !== undefined && url_callback.value !== "") {
      url_callback.value = ""
      navigateTo(backup_url)
    } else {
      router.push("/")
    }
  }
})
</script>
