<template>
  <div id="about" class="relative w-full border-none bg-brand-white">
    <div
      class="mx-auto mb-[184px] flex w-full max-w-[1138px] flex-col items-center px-6 lg:flex-row lg:items-end lg:justify-end lg:pr-0"
    >
      <picture class="w-full">
        <img
          src="/assets/desktop/image-interactive.jpg"
          alt="Man VR"
          class="mx-auto w-full max-w-[730px] lg:mx-0"
        />
      </picture>
      <div
        class="mt-14 block w-full max-w-[542px] space-y-7 bg-white text-center lg:absolute lg:-bottom-6 lg:flex lg:h-[405px] lg:flex-col lg:items-end lg:justify-center lg:text-left"
      >
        <h2
          class="font-josefin-sans text-3xl uppercase leading-none text-brand-black lg:max-w-[447px] lg:text-5xl"
        >
          The leader in interactive VR
        </h2>
        <p
          class="w-full font-alata leading-8 text-brand-dark-gray lg:max-w-[447px] lg:text-[15px]"
        >
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoopsAbout",
};
</script>
