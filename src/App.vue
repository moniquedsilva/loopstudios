<template>
  <div class="flex flex-col items-center">
    <Header />
    <main class="bg-gray-500">
      <Hero />
      <About />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Footer
  }
}
</script>
