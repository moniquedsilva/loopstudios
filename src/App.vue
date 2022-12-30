<template>
  <div class="flex flex-col items-center">
    <Header />
    <main class="bg-gray-500">
      <Hero />
      <About />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About
  }
}
</script>
