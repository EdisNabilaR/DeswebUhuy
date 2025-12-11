<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <footer class="bg-[#363062] text-white mt-14">
    <div class="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

      <!-- BRAND / ABOUT -->
      <div>
        <h2 class="text-xl font-bold flex items-center gap-2">
          🎨 Artlink
        </h2>
        <p class="text-white/80 mt-3 text-sm leading-relaxed">
          Marketplace & showcase karya kreator. Temukan style favoritmu, komisi
          karya impianmu, dan dukung seniman lokal maupun global.
        </p>
      </div>

      <!-- EXPLORE -->
      <div>
        <h3 class="font-semibold mb-3 text-[#F99417]">Explore</h3>
        <ul class="space-y-2 text-sm text-white/90">
          <li><RouterLink to="/" class="hover:underline">Beranda</RouterLink></li>
          <li><RouterLink to="/creator" class="hover:underline">Kreator</RouterLink></li>
          <li><RouterLink to="/gallery" class="hover:underline">Galeri</RouterLink></li>
        </ul>
      </div>

      <!-- SUPPORT / SOCIAL -->
      <div>
        <h3 class="font-semibold mb-3 text-[#F99417]">Support</h3>
        <ul class="space-y-2 text-sm text-white/90">
          <li><RouterLink to="/about" class="hover:underline">Tentang</RouterLink></li>
          <li><a href="#" class="hover:underline">Cara Komisi</a></li>
          <li><a href="#" class="hover:underline">FAQ</a></li>
          <li class="pt-2 flex gap-3 text-lg">
            <a href="#" class="hover:text-[#F99417] transition">📷</a>
            <a href="#" class="hover:text-[#F99417] transition">🐦</a>
            <a href="#" class="hover:text-[#F99417] transition">🎬</a>
          </li>
        </ul>
      </div>

    </div>

    <!-- COPYRIGHT -->
    <div class="border-t border-white/10 py-4 text-center text-xs text-white/70">
      © 2025 Artlink. All rights reserved.
    </div>
  </footer>
</template>
