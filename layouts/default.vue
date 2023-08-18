<template>
  <div class="w-full flex flex-col items-center overflow-hidden">
    <div class="sticky top-0 z-100 w-full bg-white shadow flex justify-center h-100px">
      <Header />
    </div>
    <div class="w-full flex-1">
      <slot />
    </div>
    <Footer />
  </div>
</template>
