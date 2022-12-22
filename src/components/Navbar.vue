<template>
  <header class="fixed w-full h-[105px] flex flex-wrap justify-between items-center px-6">
    <a href="#home">
      <img src="/assets/logo.svg" alt="Logo" class="w-44 h-max md:w-48">
    </a>
    <button @click="toogleMenu" class="cursor-pointer transition-all rotate-0 duration-700 ease-out" :class="{'rotate-180': menuOpen}">
      <img :src="menuOpen ? closeButton : hamburgerButton" alt="Menu">
    </button>
    <nav class="w-full">
      <ul class="bg-brand-black h-0 opacity-0 transition-all duration-300" :class="{'h-44 opacity-100': menuOpen}">
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.href" class="text-white text-lg font-bold hover:text-[#FBBF24] transition-all duration-300 ease-out">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'LoopsNavbar',
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