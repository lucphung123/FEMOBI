<template>
  <NuxtLink :to="router_push(props.item_course.slug, props.item_course.id)" class="bg-white rounded overflow-hidden shadow-md hover:(!shadow-lg !shadow-blue-400) cursor-pointer duration-300 flex flex-col">
    <img class="w-full max-h-40 object-cover" preset="cover" :src="props.item_course.image_url !== '' ? props.item_course.image_url : '/img/empty.jpg'" placeholder="/img/empty.jpg" />
    <div class="p-2 flex flex-col flex-1">
      <div class="flex-1">
        <span class="font-semibold text-lg truncate block">
          {{ props.item_course.title }}
        </span>
        <div>
          <div class="flex h-full items-center py-1">
            <Icon name="ic:outline-folder" class="text-xl" />
            <span>{{ $t("combo-course") }}</span>
          </div>
          <div class="flex h-full items-center py-1">
            <Icon name="mdi:folder-open-outline" class="text-xl" />
            <span>{{ props.item_course.totalCourses }}</span>
          </div>
          <div class="grid grid-cols-2">
            <span v-if="props.item_course.sale_price >= props.item_course.price"></span>
            <span v-else class="flex justify-start items-center line-through text-gray-400">
              {{ props.item_course.price.toLocaleString("vi-VN") }}
              <span style="font-family: sans-serif">&#8363;</span>
            </span>
            <span class="flex justify-end text-xl font-semibold">
              {{ props.item_course.sale_price.toLocaleString("vi-VN") }}
              <span style="font-family: sans-serif">&#8363;</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
import { useCartStore } from "~~/stores/cartStore"
const props = defineProps({
  item_course: {
    type: Object,
    required: true,
  },
})
const router_push = (slug, id) => {
  return "/course_combo/" + slug + "-" + id
}
</script>
