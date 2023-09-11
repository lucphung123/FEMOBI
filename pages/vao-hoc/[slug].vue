<template>
  <div class="w-80%">
    <div v-if="selectedVideo" class="mb-4">
      <video width="320" height="240" controls>
        <source :src="selectedVideo" type="video/mp4" />
      </video>
    </div>
    <div v-for="(lesson, index) in detailData.data.lesson" :key="lesson.id">
      <div class="flex justify-between items-center">
        <button class="bg-gray-700 text-white w-full text-left outline-none text-base hover:bg-gray-600" @click="toggle(index)">
          {{ lesson.label }}
        </button>
        <div :class="arrowIcon(index)"></div>
      </div>
      <div :class="contentClasses(index)">
        <div v-for="child in lesson.children" :key="child.id">
          <span @click="showVideo(child.data)">{{ child.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const route = useRoute()
const router = useRouter()
const activeSection = ref(-1)
const selectedVideo = ref(null)

const toggle = sectionIndex => {
  if (activeSection.value === sectionIndex) {
    activeSection.value = -1
  } else {
    activeSection.value = sectionIndex
  }
}

const showVideo = videoUrl => {
  selectedVideo.value = videoUrl
}

const contentClasses = sectionIndex => {
  const baseClasses = "overflow-hidden transition-max-height ease-out duration-800 bg-gray-200"
  const activeClasses = activeSection.value === sectionIndex ? "max-h-200" : "max-h-0"
  return `${baseClasses} ${activeClasses}`
}

const arrowIcon = sectionIndex => {
  return activeSection.value === sectionIndex ? "i-mdi:chevron-up md:text-xl" : "i-mdi:chevron-down md:text-xl"
}
const { RestApi } = useApi()
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
const {
  data: detailData,
  pending: detailPending,
  error: detailError,
  refresh: detailRefresh,
} = await RestApi.course.getDetailsFull({
  query: query,
})
console.log(detailData.value.data.lesson)
</script>
