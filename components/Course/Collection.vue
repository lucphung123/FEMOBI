<script setup>
const props = defineProps({
  list_course: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="my-10">
    <div class="flex justify-between">
      <div class="uppercase font-bold text-xl">
        {{ props.title }}
      </div>
      <!-- <n-button text icon-placement="right">
        <template #icon>
          <Icon name="ic:baseline-keyboard-double-arrow-right" />
        </template>
        {{ $t('see-more') }} </n-button> -->
    </div>
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:(grid-cols-3) lg:grid-cols-4 my-4"
    >
      <CourseImageTextSquare
        v-for="(item, index) in props.list_course"
        :key="index"
        :item_course="item"
      />
    </div>
  </div>
</template>
