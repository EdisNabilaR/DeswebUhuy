<script setup></script>

<template>
  <header class="header">
    <nav class="nav">
      <h1 class="logo">Artlink</h1>

      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/creators">Creators</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 16px 24px;
  border-bottom: 1px solid #ddd;
  background: #fafafa;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 22px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav-links a.router-link-active {
  color: #42b883; /* warna aktif */
}
</style>
