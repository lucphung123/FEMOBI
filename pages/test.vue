<template></template>

<script setup>
const { RestApi } = useApi()

const pagination = ref({
  page: 1,
  limit: 10,
  total: 0,
})
const query = computed(() => {
  let query = {
    page: pagination.value.page - 1,
    per_page: pagination.value.limit,
  }
  return query
})
const { data: courseData, pending: coursePending, error: courseError } = await RestApi.course.getByUser({ query: query })
console.log(courseData)

const { data: dataCheckOut } = await RestApi.cart.validate_check_out({})
console.log(dataCheckOut)
</script>
