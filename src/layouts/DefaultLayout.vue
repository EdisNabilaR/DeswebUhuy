<script setup>
import { RouterLink } from "vue-router"
import { ref } from "vue"

const isMenuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">

    <!-- NAVBAR -->
    <header class="bg-white shadow sticky top-0 z-50">
      <nav class="container mx-auto flex items-center justify-between py-4 px-4 text-gray-900">

        <!-- BRAND -->
        <h1 class="text-2xl font-bold text-blue-600">
          <RouterLink to="/">Artlink</RouterLink>
        </h1>

        <!-- DESKTOP NAV -->
        <ul class="hidden md:flex gap-6 text-lg font-medium">
          <li><RouterLink to="/" class="hover:text-blue-600">Beranda</RouterLink></li>
          <li><RouterLink to="/creator" class="hover:text-blue-600">Kreator</RouterLink></li>
          <li><RouterLink to="/gallery" class="hover:text-blue-600">Galeri</RouterLink></li>
          <li><RouterLink to="/about" class="hover:text-blue-600">Tentang</RouterLink></li>
        </ul>

        <!-- MOBILE BUTTON -->
        <button class="md:hidden text-2xl" @click="isMenuOpen = !isMenuOpen">
          ☰
        </button>

      </nav>

      <!-- MOBILE MENU -->
      <transition name="fade">
        <div v-if="isMenuOpen" class="md:hidden bg-white border-t px-4 py-3">
          <ul class="flex flex-col gap-3 text-gray-900">
            <li><RouterLink @click="isMenuOpen = false" to="/">Beranda</RouterLink></li>
            <li><RouterLink @click="isMenuOpen = false" to="/creator">Kreator</RouterLink></li>
            <li><RouterLink @click="isMenuOpen = false" to="/gallery">Galeri</RouterLink></li>
            <li><RouterLink @click="isMenuOpen = false" to="/about">Tentang</RouterLink></li>
          </ul>
        </div>
      </transition>
    </header>

    <!-- CONTENT -->
    <main class="flex-grow text-gray-900">
      <router-view />
    </main>

    <!-- FOOTER -->
    <footer class="bg-gray-800 text-white py-6 text-center text-sm">
      © 2025 Artlink. All rights reserved.
    </footer>

  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
