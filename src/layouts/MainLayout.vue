<script setup>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#F5F5F5] text-[#363062]">
    <Navbar />

    <main class="flex-grow">
      <slot />
    </main>

    <Footer />
  </div>
</template>
