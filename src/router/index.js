import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import CreatorList from '../pages/CreatorList.vue'
import CreatorProfile from '../pages/CreatorProfile.vue'
import CommissionForm from '../pages/CommissionForm.vue'
import Gallery from '../pages/Gallery.vue'
import GalleryDetail from '../pages/GalleryDetail.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/creator', component: CreatorList },
  { path: '/creator/:id', component: CreatorProfile },
  { path: '/gallery', component: Gallery },
  { path: '/gallery/:id', component: GalleryDetail },
  { path: '/commission/:creatorId?', component: CommissionForm }, // ➕
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
