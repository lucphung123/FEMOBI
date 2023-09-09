<script setup>
import { useCartStore } from "~~/stores/cartStore"
const cartStore = useCartStore()

const router = useRouter()
const route = useRoute()
const router_push = (slug, id) => {
  if (route.path === "/khoa-hoc/le") {
    return "/khoa-hoc/le" + slug
  } else {
    return "/khoa-hoc/" + slug + "-" + id
  }
}
const props = defineProps({
  item_course: {
    type: Object,
    required: true,
    default: {
      image_url: "",
      title: "",
      author: "",
      rate: 0,
      cost: 0,
      price: 0,
      slug: "",
    },
  },
})
const addItemCart = item => {
  cartStore.addItemCart(item)
}

</script>
<template>
  <NuxtLink :to="router_push(props.item_course.slug, props.item_course.id)" class="bg-white rounded overflow-hidden shadow-md hover:(!shadow-lg !shadow-blue-400) cursor-pointer duration-300 flex flex-col">
    <img class="w-full h-60 object-cover" preset="cover" :src="props.item_course.image_url !== '' ? props.item_course.image_url : '/img/empty.jpg'" placeholder="/img/empty.jpg" alt="image_course" />
    <div class="p-2 flex flex-col flex-1">
      <div class="flex-1">
        <span class="font-semibold text-lg line-clamp-1">
          {{ props.item_course.title }}
        </span>
        <div>
          <div class="flex h-full items-center py-1">
            <span>{{ props.item_course.owner.name }}</span>
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
