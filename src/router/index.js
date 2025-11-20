// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import CreatorList from '../views/CreatorList.vue'
import Gallery from '../views/Gallery.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/creators', name: 'creators', component: CreatorList },
  { path: '/gallery', name: 'gallery', component: Gallery },
  { path: '/about', name: 'about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
