<template>
  <div class="flex flex-col items-center">
    <Navbar />
    <main class="bg-gray-500">
      <Hero />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero
  }
}
</script>
