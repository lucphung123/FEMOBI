<template>
  <div class="w-full mx-auto container h-full xs:px-0 bg-white">
    <div class="flex p-2">
      <div class="w-full">
        <div class="pl-3">
          <div v-if="data.length > 0" class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:(grid-cols-3) lg:grid-cols-4">
            <CourseImageTextSquare class="bg-white rounded overflow-hidden shadow-md hover:(shadow-lg shadow-blue-400) cursor-pointer duration-300" v-for="(item, index) in data" :key="index" :item_course="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSettingStore } from "~~/stores/settingStore"
const settingStore = useSettingStore()

const route = useRoute()
const { RestApi } = useApi()

const filter_value = ref({
  time: null,
  rating: null,
  type: 1,
  isFree: false,
  isSale: false,
})
const pagination = ref({
  page: 1,
  limit: 27,
  total: 0,
})
const renderLabelRate = option => {
  return h(NRate, {
    defaultValue: option.value,
    readonly: true,
    size: "small",
  })
}
const query = computed(() => {
  let query = {
    page: pagination.value.page - 1,
    limit: pagination.value.limit,
    category: route.params.slug ? route.params.slug : "",
    rating: filter_value.value.rating,
    isFree: filter_value.value.isFree,
    isSale: filter_value.value.isSale,
    IdPosition: filter_value.value.type,
  }
  return query
})
const { data: courseData, pending: coursePending, error: courseError } = await RestApi.course.get({ query: query })
let data = computed(() => {
  if (courseData.value?.status) {
    pagination.value.total = courseData.value.total
    return courseData.value.item
  } else {
    return []
  }
})
</script>
