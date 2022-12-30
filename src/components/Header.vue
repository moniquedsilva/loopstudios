<template>
  <header class="fixed w-full max-w-[1138px] flex p-6 transition-transition duration-300" :class="menuOpen ? 'h-screen bg-brand-black inset-0 items-start flex-col' : 'h-[105px] justify-between items-center'">
    <div class="w-full flex justify-between md:w-max">
      <a href="#home">
        <img src="/assets/logo.svg" alt="Logo" class="w-44 h-max md:w-48">
      </a>
      <button @click="toogleMenu" class="cursor-pointer transition-all rotate-0 duration-700 ease-out md:hidden" :class="{'rotate-180': menuOpen}">
        <img :src="menuOpen ? closeButton : hamburgerButton" alt="Menu">
      </button>
    </div>
    <nav v-if="menuOpen" class="w-full h-full flex flex-col justify-center">
      <ul class="pl-8 flex flex-col gap-y-4 absolute w-full overflow-hidden bg-brand-black left-0 right-0 font-josefin-sans uppercase">
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.href" class="nav__links text-white text-2xl font-bold hover:text-brand-dark-gray transition-all ease-out">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
    <nav v-else class="hidden md:block">
      <ul class="space-x-8">
        <li v-for="link in navLinks" :key="link.name" class="inline-block">
          <a :href="link.href" class="nav__links text-white text-[15px] font-semibold ease-out transition-all">{{ link.name }}</a>
        </li>
      </ul>
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
.nav__links:after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  margin: 0 auto;
  margin-top: 8px;
  background: none repeat scroll 0 0 rgb(255, 255, 255);
  transition: all ease-in-out 0.3s;
}
.nav__links:hover:after {
  width: 24px;
}
</style>