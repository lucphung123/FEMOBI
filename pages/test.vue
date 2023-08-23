<template>
  <div>
    <ul>
      <li v-for="item in displayedItems" :key="item.id">{{ item.name }}</li>
    </ul>

    <div class="flex items-center justify-center gap-10">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
        <div class="i-mdi:skip-previous-outline"></div>
      </button>
      <button class="bg-none" v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="{ active: currentPage === page }">{{ page }}</button>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"><div class="i-mdi:skip-next-outline"></div></button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const items = ref([
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 6, name: "Item 6" },
  { id: 7, name: "Item 7" },
  { id: 8, name: "Item 8" },
  { id: 9, name: "Item 9" },
])

const itemsPerPage = 2
const currentPage = ref(1)

const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return items.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage))

const visiblePages = computed(() => {
  const pages = []
  const minPage = Math.max(1, currentPage.value - 2)
  const maxPage = Math.min(totalPages.value, currentPage.value + 2)

  for (let i = minPage; i <= maxPage; i++) {
    pages.push(i)
  }

  return pages
})

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<style>
.active {
  font-weight: bold;
  cursor: pointer;
  height: 40px;
  width: 40px;

  background-color: blue;
  border-radius: 50%;
}
</style>
