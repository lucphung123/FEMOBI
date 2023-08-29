<template>
  <div class="w-full min-h-screen flex flex-col overflow-clip bg-white items-center">
    <!-- header -->
    <div class="w-full sticky z-100 top-0 flex-1 flex flex-col bg-white items-center shadow-md">
      <div class="lg:(w-225 px-0) xl:(w-340) 2xl:(w-340)">
        <Header />
      </div>
    </div>

    <!-- main -->
    <div class="w-full flex-1 flex flex-col items-center justify-center">
      <div class="w-full lg:(w-225 px-0) xl:(w-320) 2xl:(w-340) flex flex-col items-center">
        <slot />
      </div>
    </div>

    <!-- footer -->
    <div class="w-full flex-1 flex flex-col mt-20 bg-[url(/img/bg/bg-footer.png)] bg-cover bg-top w-full text-white items-center" id="footer">
      <div class="w-full px-4 text-justify lg:text-left lg:(w-225 px-0) xl:(w-340) 2xl:(w-340) mt-12">
        <Footer />
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
