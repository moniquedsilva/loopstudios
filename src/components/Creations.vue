<template>
  <div class="mb-[184px] w-full bg-brand-white">
    <div
      class="mx-auto flex max-w-[1138px] flex-col items-center justify-center px-6 md:flex-row md:flex-wrap md:items-start md:justify-between"
    >
      <h2
        class="order-1 mb-12 font-josefin-sans text-3xl font-medium uppercase lg:text-5xl"
      >
        Our creations
      </h2>
      <ul
        class="order-2 grid grid-cols-1 content-center gap-7 md:w-full md:grid-cols-3 lg:grid-cols-4"
      >
        <li
          v-for="creation in creations"
          :key="creation.name"
          class="creations__links relative w-full cursor-pointer"
        >
          <picture>
            <source
              :srcset="`/assets/desktop/image-${creation.src}`"
              media="(min-width: 768px)"
            />
            <img
              :src="`/assets/mobile/image-${creation.src}`"
              :alt="creation.name"
            />
          </picture>
          <a
            href="#home"
            class="absolute bottom-5 left-5 z-10 flex h-full w-full max-w-[174px] items-end justify-center font-josefin-sans text-3xl uppercase text-brand-white hover:text-brand-black"
            >{{ creation.name }}</a
          >
        </li>
      </ul>
      <button
        type="button"
        class="order-3 mt-8 flex h-[42px] w-40 items-center justify-center border-2 border-brand-black font-alata text-[15px] uppercase tracking-[0.3em] transition duration-300 ease-in hover:bg-brand-black hover:text-brand-white md:order-1 md:mt-0"
      >
        See all
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoopsCreations",
  data() {
    return {
      creations: [
        {
          name: "Deep earth",
          src: "deep-earth.jpg",
        },
        {
          name: "Night arcade",
          src: "night-arcade.jpg",
        },
        {
          name: "Soccer team VR",
          src: "soccer-team.jpg",
        },
        {
          name: "The grid",
          src: "grid.jpg",
        },
        {
          name: "From up above VR",
          src: "from-above.jpg",
        },
        {
          name: "Pocket borealis",
          src: "pocket-borealis.jpg",
        },
        {
          name: "The curiosity",
          src: "curiosity.jpg",
        },
        {
          name: "Make it fisheye",
          src: "fisheye.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.creations__links picture::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: max-content;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0) 75%
  );
}

.creations__links::after {
  content: "";
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

@media (min-width: 768px) {
  .creations__links picture::after {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0) 75%
    );
  }
}
</style>
