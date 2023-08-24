<template>
  <div class="w-full h-full">
    <div class="sticky top-0 z-10 flex justify-center w-full bg-white">
      <Header />
    </div>
    <div class="w-full flex-1 flex justify-center">
      <slot />
    </div>
    <div class="flex justify-center">
      <Footer />
    </div>
  </div>
</template>
