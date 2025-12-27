<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Chatbot from './components/Chatbot.vue'
</script>

<template>
  <div id="vital-health-app">
    <Navbar />

    <main>
      <RouterView />
    </main>

    <Footer />
    <Chatbot />
  </div>
</template>

<style>
/* Estilos específicos de layout si los necesitas */
main {
  min-height: 80vh;
}
</style>