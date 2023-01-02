<template>
  <header class="mx-auto w-full max-w-[1138px] absolute z-20">
    <nav class="w-full flex flex-wrap items-start p-6 transition-all" :class="{ 'bg-brand-black h-screen md:bg-transparent md:h-max' : menuOpen}">
      <a href="#home" class="w-2/4 shrink-0">
        <img src="/assets/logo.svg" alt="Logo" class="w-44 h-max md:w-48" />
      </a>
      <div class="flex justify-end w-2/4 shrink-0 md:hidden">
        <button type="button" @click="toogleMenu" data-toggle aria-controls="NavigationCollapse" :aria-expanded="menuOpen" aria-label="Toggle navigation" class="cursor-pointer transition-all rotate-0 duration-700 ease-out outline-none border-none" :class="{'rotate-180': menuOpen}">
          <img :src="menuOpen ? closeButton : hamburgerButton" alt="Menu" />
        </button>
      </div>
      <div id="NavigationCollapse" class="w-full md:w-2/4 md:block" :class="{ 'hidden' : !menuOpen}">
        <ul class="flex flex-col gap-8 md:flex-row md:justify-end">
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.href" class="nav__links text-white text-2xl font-josefin-sans md:font-alata uppercase font-bold transition-all ease-out md:text-[15px] md:capitalize">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'LoopsHeader',
  data() {
    return {
      menuOpen: false,
      hamburgerButton: '/assets/icon-hamburger.svg',
      closeButton: '/assets/icon-close.svg',
      navLinks: [
        {
          name: 'About',
          href: '#about'
        },
        {
          name: 'Careers',
          href: '#careers'
        },
        {
          name: 'Events',
          href: '#events'
        },
        {
          name: 'Products',
          href: '#products'
        },
        {
          name: 'Support',
          href: '#support'
        }
      ]
    }
  },
  methods: {
    toogleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
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