<template>
  <div class="w-full items-center relative">
    <div class="sticky top-0 z-100 w-full bg-white shadow flex justify-center">
      <Header />
    </div>
    <div class="w-full flex-1">
      <slot />
    </div>
    <Footer class="z-0" />
  </div>
</template>
