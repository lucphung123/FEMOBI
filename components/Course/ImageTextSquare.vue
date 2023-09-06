<script setup>
import { useCartStore } from "~~/stores/cartStore"
const cartStore = useCartStore()
const t = useNuxtApp().$i18n.t

const router = useRouter()
const route = useRoute()
const router_push = (slug, id) => {
  if (route.path === "/course/combo") {
    return "/course/course_combo/" + slug
  } else {
    return "/course/detail-" + slug + "-" + id
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
  notification.success({
    content: t('successfully-added-the-course-to-your-cart'),
    duration: 1000,
    keepAliveOnHover: true,
  })

}
const removeItemCart = item => {
  cartStore.removeItemCart(item)
  notification.success({
    content: t('successfully-removed-course-from-cart'),
    duration: 1000,
    keepAliveOnHover: true,
  })

}
</script>
<template>
  <NuxtLink :to="router_push(props.item_course.slug, props.item_course.id)" class="bg-white rounded overflow-hidden shadow-md hover:(!shadow-lg !shadow-blue-400) cursor-pointer duration-300 flex flex-col">
    <img class="w-full h-40 object-cover" preset="cover" :src="props.item_course.image_url !== '' ? props.item_course.image_url : '/empty.jpg'" placeholder="/empty.jpg" alt="image_course"/>
    <div class="p-2 flex flex-col flex-1">
      <div class="flex-1">
        <span class="font-semibold text-lg line-clamp-1">
          {{ props.item_course.title }}
        </span>
        <div>
          <div class="flex h-full items-center py-1">
            <Icon name="ic:baseline-person-outline" class="text-xl" />
            <span>{{ props.item_course.owner.name }}</span>
          </div>
          <!-- <div class="flex h-full items-center py-1">
            <Icon name="mdi:folder-open-outline" class="text-xl"/>
            <span>CEO World New Academy</span>
          </div> -->
          <div class="flex items-center py-1">
            <n-rate size="small" readonly :default-value="props.item_course.review.star" />
            <span class="px-1">({{ props.item_course.review.total }})</span>
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
      <!-- <ClientOnly>
        <n-button
          v-if="
            cartStore.cart.filter((item) => item.id == props.item_course.id)
              .length == 0
          "
          type="primary"
          class="w-full mt-2"
          @click.prevent.stop="addItemCart(props.item_course)"
        >
          Thêm vào giỏ hàng
        </n-button>
        <n-button
          v-else
          type="info"
          class="w-full mt-2"
          @click.prevent.stop="removeItemCart(props.item_course)"
        >
          Đã Thêm Vào Giỏ Hàng
        </n-button>
      </ClientOnly> -->
    </div>
  </NuxtLink>
</template>
