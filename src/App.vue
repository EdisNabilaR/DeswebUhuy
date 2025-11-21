<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div id="app">
    <TheHeader />

    <main>
      <router-view />
    </main>

    <TheFooter />
  </div>
</template>

<style>
/* Style Global Anda di sini */
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f4ea; /* Warna latar belakang umum */
}
main {
  padding-top: 80px; /* Sesuaikan dengan tinggi header */
  min-height: calc(100vh - 200px); /* Contoh min-height */
}
/* ...style lainnya... */
</style>
