<template>
  <div class="w-full bg-brand-white mb-[184px]">
    <div class="mx-auto max-w-[1138px] px-6 flex flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-between md:items-start">
      <h2 class="order-1 font-medium font-josefin-sans uppercase text-3xl lg:text-5xl mb-12">Our creations</h2>
      <ul class="order-2 md:w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 content-center">
        <li v-for="creation in creations" :key="creation.name" class="creations__links w-full relative cursor-pointer">
          <picture>
            <source :srcset="`/assets/desktop/image-${creation.src}`" media="(min-width: 768px)" />
            <img :src="`/assets/mobile/image-${creation.src}`" :alt="creation.name" />
          </picture>
          <a href="#home" class="font-josefin-sans absolute bottom-5 left-5 max-w-[174px] text-3xl uppercase text-brand-white z-10 w-full h-full flex items-end justify-center hover:text-brand-black">{{ creation.name }}</a>
        </li>
      </ul>
      <button type="button" class="order-3 md:order-1 h-[42px] w-40 flex items-center border-2 border-brand-black justify-center font-alata mt-8 md:mt-0 text-[15px] uppercase tracking-[0.3em] transition duration-300 ease-in hover:bg-brand-black hover:text-brand-white">
        See all
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoopsCreations',
  data() {
    return {
      creations: [
        {
          name: 'Deep earth',
          src: 'deep-earth.jpg'
        },
        {
          name: 'Night arcade',
          src: 'night-arcade.jpg'
        },
        {
          name: 'Soccer team VR',
          src: 'soccer-team.jpg'
        },
        {
          name: 'The grid',
          src: 'grid.jpg'
        },
        {
          name: 'From up above VR',
          src: 'from-above.jpg'
        },
        {
          name: 'Pocket borealis',
          src: 'pocket-borealis.jpg'
        },
        {
          name: 'The curiosity',
          src: 'curiosity.jpg'
        },
        {
          name: 'Make it fisheye',
          src: 'fisheye.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.creations__links picture::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: max-content;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 75%);
}

.creations__links::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: hsl(0, 0%, 100%);
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
}

.creations__links:hover::after,
.creations__links:focus::after {
    opacity: 0.7;
}

@media(min-width: 768px) {
  .creations__links picture::after {
      background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 75%);
  }
}
</style>