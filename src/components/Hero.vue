<template>
  <div id="home" class="mb-[184px] h-screen">
    <div
      class="absolute inset-0 mx-auto flex w-full max-w-[1138px] items-center justify-center p-6 lg:justify-start"
    >
      <h1
        class="z-[2] h-max max-w-[327px] border-[3px] border-white p-6 pb-4 font-josefin-sans text-[40px] uppercase leading-none tracking-wide text-white md:max-w-[652px] md:text-7xl"
      >
        Immersive experiences that deliver
      </h1>
    </div>
    <picture class="hero h-full w-full">
      <source
        srcset="/assets/desktop/image-hero.jpg"
        media="(min-width: 750px)"
      />
      <img
        src="/assets/mobile/image-hero.jpg"
        alt="hero image"
        class="h-full w-full object-cover"
      />
    </picture>
  </div>
</template>

<script>
export default {
  name: "LoopsHero",
};
</script>

<style scoped>
@media (min-width: 768px) {
  .hero::after {
    content: "";
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
