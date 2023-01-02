<template>
  <div class="flex flex-col items-center bg-brand-white">
    <Header />
    <main>
      <Hero />
      <About />
      <Creations />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Creations from './components/Creations.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Creations,
    Footer
  }
}
</script>
