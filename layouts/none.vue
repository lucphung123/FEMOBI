<template>
  <div class="w-full flex flex-col overflow-clip items-center">
    <!-- main -->
    <div class="w-full flex-1 flex flex-col items-center justify-center">
      <div class="w-full lg:(w-225 px-0) xl:(w-320) 2xl:(w-340) flex flex-col items-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
btn::after {
  content: attr(title);
  display: block;
  font-weight: 700 !important;
  height: 0;
  overflow: hidden;
  color: #fff;
}
</style>
