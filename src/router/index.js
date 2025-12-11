import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import CreatorList from '../pages/CreatorList.vue'
import CreatorProfile from '../pages/CreatorProfile.vue'
import CommissionForm from '../pages/CommissionForm.vue'
import CommissionProgress from "../pages/CommissionProgress.vue"
import Gallery from '../pages/Gallery.vue'
import GalleryDetail from '../pages/GalleryDetail.vue'
import JoinCreator from "../pages/JoinCreator.vue"
import HowToCommission from "../pages/HowToCommission.vue"  // ✅ tambah
import Faq from "../pages/Faq.vue"                         // ✅ tambah
import About from '../pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/creator', component: CreatorList },
  { path: '/creator/:id', component: CreatorProfile },
  { path: '/gallery', component: Gallery },
  { path: '/gallery/:id', component: GalleryDetail },

  // ✅ taruh ini sebelum /commission/:creatorId? biar aman
  { path: "/commission/progress/:id", component: CommissionProgress },

  { path: '/commission/:creatorId?', component: CommissionForm },

  { path: '/about', component: About },

  { path: "/join-creator", component: JoinCreator },
  { path: "/how-to-commission", component: HowToCommission }, // ✅ tutor
  { path: "/faq", component: Faq },                           // ✅ faq
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  } 
})

export default router
