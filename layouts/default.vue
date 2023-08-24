<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-full justify-center flex flex-col md:max-w-400">
      <div class="sticky top-0 bg-white z-10 flex justify-center">
        <Header />
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="w-full flex-1">
          <slot />
        </div>
      </div>
      <div class="flex justify-center">
        <Footer />
      </div>
    </div>
  </div>
</template>
