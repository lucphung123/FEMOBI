<template>
  <div
    class="fixed flex justify-center bg-[#000000da] inset-0"
    @click="$emit('close-modal')"
  >
    <div
      @click.stop
      class="text-center bg-[white] h-200 w-300 mt-[10%] px-0 py-[60px] rounded-[20px]"
    >
      <h6 class="font-medium text-[28px] mx-0 my-5">
        Hãy chọn chủ đề mà bạn quan tâm
      </h6>
    </div>
    <div
      class="cursor-pointer ml-4 mr-0 mt-[10%] mb-0"
      @click="$emit('close-modal')"
    >
      <img
        class="w-[25px]"
        src="https://banner2.cleanpng.com/20180730/gio/kisspng-check-mark-x-mark-computer-icons-clip-art-cross-heart-5b5ea78a695c75.1672286615329299304316.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script></script>
