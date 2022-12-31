<template>
  <footer class="w-full bg-brand-black py-10">
    <div class="mx-auto max-w-[1138px] px-6 flex flex-col gap-y-12 items-center md:flex-row md:justify-between">
      <div class="flex flex-col gap-y-12 items-center md:items-start md:gap-y-8">
        <a href="#home">
          <img src="/assets/logo.svg" alt="Logo" class="w-44 h-max md:w-36" />
        </a>
        <ul class="flex flex-col items-center justify-center gap-6 md:flex-row">
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.href" class="nav__links text-white text-[18px] font-alata ease-out transition-all md:text-[15px]">{{ link.name }}</a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-center gap-y-6 text-center md:items-end md:gap-y-4">
        <ul class="flex gap-x-5">
          <li v-for="link in socialLinks" :key="link.name">
            <a href="#home" class="nav__links ease-out transition-all">
              <img :src="`/assets/${link.src}.svg`" :alt="link.name" class="w-6 h-6" />
            </a>
          </li>
        </ul>
        <p class="font-atala text-brand-dark-gray text-[18px] tracking-wide md:text-sm">© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LoopsFooter',
  data() {
    return {
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
      ],
      socialLinks: [
        {
          name: 'Facebook',
          src: 'icon-facebook'
        },
        {
          name: 'Twitter',
          src: 'icon-twitter'
        },
        {
          name: 'Instagram',
          src: 'icon-instagram'
        },
        {
          name: 'Pinterest',
          src: 'icon-pinterest'
        }
      ]
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