<script setup>
import { RouterLink } from 'vue-router'

// Item navigasi
const navItems = [
  { name: 'Beranda', route: '/' },
  { name: 'Kreator', route: '/creator' },
  { name: 'Galeri', route: '/gallery' },
  { name: 'Tentang', route: '/about' },
]
</script>

<template>
  <header class="header">
    <div class="logo">Artlink</div>
    <nav class="nav">
      <RouterLink
        v-for="item in navItems"
        :key="item.name"
        :to="item.route"
        class="nav-item"
        active-class="active"
      >
        {{ item.name }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: #f8f4ea; /* Latar belakang header */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #375369; /* Warna logo dari wireframe */
  border: 2px solid #375369;
  padding: 5px 15px;
  border-radius: 20px;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-item {
  text-decoration: none;
  color: #375369;
  padding: 8px 16px;
  border-radius: 20px;
  transition: background-color 0.3s;
}

.nav-item:hover {
  background-color: #e6e1d9; /* Hover effect */
}

.nav-item.active {
  background-color: #e6e1d9; /* Tampilan aktif dari wireframe */
  font-weight: bold;
}
</style>
