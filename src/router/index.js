import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import CreatorList from '../pages/CreatorList.vue'
import Gallery from '../pages/Gallery.vue'
import CreatorProfile from '../pages/CreatorProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/creator',
    name: 'CreatorList',
    component: CreatorList, // Anda harus membuat komponen ini
  },
  {
    path: '/creator/:id',
    name: 'CreatorProfile',
    component: CreatorProfile,
    props: true,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
