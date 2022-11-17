<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Footer from './components/footer/index.vue'
  import NavBar from './components/navBar/index.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>
