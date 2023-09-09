<template>
  <div>
    <h1 class="bg-red text-3xl">
      {{ course.title }}
    </h1>
    <img :src="course.url_image" alt="Course Image" />
    <p>Giá gốc: {{ course.price }}</p>
    <p>Giá khuyến mãi: {{ course.sale_price }}</p>
    <p>Giáo viên: {{ course.teacher.name }}</p>

    <div v-for="chapter in detailData.data.lesson" :key="chapter.id">
      <h2>{{ chapter.label }}</h2>
      <ul>
        <li v-for="lesson in chapter.children" :key="lesson.id">
          {{ lesson.label }}
          <span v-if="lesson.type">({{ lesson.type }})</span>
          <video v-if="lesson.type === 'Video'" :src="lesson.data" controls></video>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { RestApi } = useApi()
const route = useRoute()
const router = useRouter()
const query = computed(() => {
  const str = route.params.slug
  const arr = str.split("-")
  const lastElement = arr[arr.length - 1]
  const remainingElements = arr.slice(0, arr.length - 1).join("-")
  return {
    slug: remainingElements,
    id: lastElement,
  }
})
const { data: detailData, pending: detailPending, error: detailError, refresh: detailRefresh } = await RestApi.course.getDetailsFull({ query: query })
const course = computed(() => {
  if (detailData.value.error) {
    throw createError({
      statusCode: detailData.value.code,
      message: detailData.value.message,
      fatal: true,
    })
  } else {
    let data = detailData.value.data
    return {
      id: data?.id || 0,
      slug: data.slug || "",
      title: data?.title || "",
      teacher: {
        name: data?.teacher.name || "",
        avatar: data?.teacher.avatar,
        description: data?.teacher.description || "",
        total_courses: data?.teacher.totalCourses || 0,
        total_students: data?.teacher.totalStudents || 0,
        facebook: data?.teacher.facebook || "",
        youtube: data?.teacher.youtube || "",
        id: data?.owner.id || 0,
      },
      review: {
        star: data?.review.star || 0,
        total: data?.review.total || 0,
        reviewRate: data?.review.reviewRate.map(item_review => {
          return {
            percent: item_review.percent,
            rate: item_review.rate,
            totalRate: item_review.totalRate,
          }
        }),
      },
      price: data?.price || 0,
      sale_price: data?.sale_price || 0,
      url_video: data?.video_url || "",
      url_image: data?.cover_url || "",
      learn_what: data?.learn_what || "",
      description: data?.description || 0,
      short_description: data?.short_description || "",
      number_lesson: data?.number_lesson || 0,
      duration: data?.duration || "",
      related_courses: data?.relatedCourses || [],
      isMapping: data?.isMapping || false,
    }
  }
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
