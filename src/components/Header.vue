<template>
  <header class="absolute z-20 mx-auto w-full max-w-[1138px]">
    <nav
      class="flex w-full flex-wrap items-start p-6 transition-all"
      :class="{
        'h-screen bg-brand-black md:h-max md:bg-transparent': menuOpen,
      }"
    >
      <a href="#home" class="w-2/4 shrink-0">
        <img src="/assets/logo.svg" alt="Logo" class="h-max w-44 md:w-48" />
      </a>
      <div class="flex w-2/4 shrink-0 justify-end md:hidden">
        <button
          type="button"
          @click="toogleMenu"
          data-toggle
          aria-controls="NavigationCollapse"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation"
          class="rotate-0 cursor-pointer border-none outline-none transition-all duration-700 ease-out"
          :class="{ 'rotate-180': menuOpen }"
        >
          <img :src="menuOpen ? closeButton : hamburgerButton" alt="Menu" />
        </button>
      </div>
      <div
        id="NavigationCollapse"
        class="w-full md:block md:w-2/4"
        :class="{ hidden: !menuOpen }"
      >
        <ul class="flex flex-col gap-8 md:flex-row md:justify-end">
          <li v-for="link in navLinks" :key="link.name">
            <a
              :href="link.href"
              class="nav__links font-josefin-sans text-2xl font-bold uppercase text-white transition-all ease-out md:font-alata md:text-[15px] md:capitalize"
              >{{ link.name }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "LoopsHeader",
  data() {
    return {
      menuOpen: false,
      hamburgerButton: "/assets/icon-hamburger.svg",
      closeButton: "/assets/icon-close.svg",
      navLinks: [
        {
          name: "About",
          href: "#about",
        },
        {
          name: "Careers",
          href: "#careers",
        },
        {
          name: "Events",
          href: "#events",
        },
        {
          name: "Products",
          href: "#products",
        },
        {
          name: "Support",
          href: "#support",
        },
      ],
    };
  },
  methods: {
    toogleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.nav__links::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  margin: 0 auto;
  margin-top: 8px;
  background: none repeat scroll 0 0 rgb(255, 255, 255);
  transition: all ease-in-out 0.3s;
}
.nav__links:hover::after {
  width: 24px;
}
</style>
