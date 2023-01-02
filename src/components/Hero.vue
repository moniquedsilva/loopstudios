<template>
  <div id="home" class="h-screen mb-[184px]">
    <div class="mx-auto w-full max-w-[1138px] flex items-center justify-center lg:justify-start absolute inset-0 p-6">
      <h1 class="max-w-[327px] md:max-w-[652px] h-max p-6 pb-4 font-josefin-sans leading-none uppercase tracking-wide text-[40px] md:text-7xl text-white border-[3px] border-white z-[2]">Immersive experiences that deliver</h1>
    </div>
    <picture class="hero h-full w-full">
      <source srcset="/assets/desktop/image-hero.jpg" media="(min-width: 750px)">
      <img src="/assets/mobile/image-hero.jpg" alt="hero image" class="w-full h-full object-cover">
    </picture>
  </div>
</template>

<script>
export default {
  name: 'LoopsHero'
}
</script>

<style scoped>
@media(min-width: 768px) {
  .hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>