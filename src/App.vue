<!-- src/App.vue -->
<template>
  <div>
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script setup>
// import global components jika perlu
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<style scoped>
/* gaya global app (opsional) */
</style>
