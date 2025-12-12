<script setup>
import { RouterLink, useRoute } from "vue-router"
import { ref, onMounted, onBeforeUnmount } from "vue"

const isMenuOpen = ref(false)
const isSupportOpen = ref(false)
const route = useRoute()

// buat nutup dropdown kalau klik di luar
const onClickOutside = (e) => {
  const dropdown = document.getElementById("support-dropdown")
  const btn = document.getElementById("support-btn")
  if (!dropdown || !btn) return
  if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
    isSupportOpen.value = false
  }
}

onMounted(() => document.addEventListener("click", onClickOutside))
onBeforeUnmount(() => document.removeEventListener("click", onClickOutside))

const closeMobileMenu = () => {
  isMenuOpen.value = false
  isSupportOpen.value = false
}

// helper active route
const isActivePath = (path) => route.path === path
</script>

<template>
  <header
    class="bg-white/90 backdrop-blur shadow sticky top-0 z-50 border-b border-[#4D4C7D]/10"
  >
    <nav class="container mx-auto flex items-center justify-between py-4 px-4">
      <!-- BRAND -->
      <h1 class="text-2xl font-extrabold tracking-wide text-[#363062]">
        <RouterLink to="/" class="flex items-center gap-2">
          <span class="text-[#F99417]">🎨</span>
          Artlink
        </RouterLink>
      </h1>

      <!-- DESKTOP NAV -->
      <ul
        class="hidden md:flex items-center gap-6 lg:gap-8 text-[15px] lg:text-[17px] font-medium whitespace-nowrap"
      >
        <!-- Beranda -->
        <li>
          <RouterLink to="/" v-slot="{ isExactActive }">
            <span
              class="relative pb-1 transition"
              :class="isExactActive
                ? 'text-[#363062] font-semibold'
                : 'text-[#4D4C7D] hover:text-[#363062]'"
            >
              Beranda
              <span
                v-if="isExactActive"
                class="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F99417] rounded-full"
              />
            </span>
          </RouterLink>
        </li>

        <!-- Kreator -->
        <li>
          <RouterLink to="/creator" v-slot="{ isActive }">
            <span
              class="relative pb-1 transition"
              :class="isActive
                ? 'text-[#363062] font-semibold'
                : 'text-[#4D4C7D] hover:text-[#363062]'"
            >
              Kreator
              <span
                v-if="isActive"
                class="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F99417] rounded-full"
              />
            </span>
          </RouterLink>
        </li>

        <!-- Galeri -->
        <li>
          <RouterLink to="/gallery" v-slot="{ isActive }">
            <span
              class="relative pb-1 transition"
              :class="isActive
                ? 'text-[#363062] font-semibold'
                : 'text-[#4D4C7D] hover:text-[#363062]'"
            >
              Galeri
              <span
                v-if="isActive"
                class="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F99417] rounded-full"
              />
            </span>
          </RouterLink>
        </li>

        <!-- Tentang -->
        <li>
          <RouterLink to="/about" v-slot="{ isActive }">
            <span
              class="relative pb-1 transition"
              :class="isActive
                ? 'text-[#363062] font-semibold'
                : 'text-[#4D4C7D] hover:text-[#363062]'"
            >
              Tentang
              <span
                v-if="isActive"
                class="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F99417] rounded-full"
              />
            </span>
          </RouterLink>
        </li>

        <!-- Support Dropdown -->
        <li class="relative">
          <button
            id="support-btn"
            type="button"
            class="relative pb-1 transition flex items-center gap-1"
            :class="isActivePath('/how-to-commission') || isActivePath('/faq')
              ? 'text-[#363062] font-semibold'
              : 'text-[#4D4C7D] hover:text-[#363062]'"
            @click="isSupportOpen = !isSupportOpen"
          >
            Support
            <span class="text-xs">▼</span>

            <!-- underline kalau salah satu child page aktif -->
            <span
              v-if="isActivePath('/how-to-commission') || isActivePath('/faq')"
              class="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F99417] rounded-full"
            />
          </button>

          <transition name="fade">
            <div
              v-if="isSupportOpen"
              id="support-dropdown"
              class="absolute right-0 mt-3 w-44 bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden z-50"
            >
              <RouterLink
                to="/how-to-commission"
                class="block px-4 py-3 text-sm text-[#4D4C7D] hover:bg-[#F99417]/10 hover:text-[#363062]"
                @click="isSupportOpen = false"
              >
                Cara Komisi
              </RouterLink>
              <RouterLink
                to="/faq"
                class="block px-4 py-3 text-sm text-[#4D4C7D] hover:bg-[#F99417]/10 hover:text-[#363062]"
                @click="isSupportOpen = false"
              >
                FAQ
              </RouterLink>
            </div>
          </transition>
        </li>
      </ul>

              <!-- my page -->
        <li>
          <RouterLink to="/my-page" v-slot="{ isActive }">
            <span
              class="relative pb-1 transition"
              :class="isActive
                ? 'text-[#363062] font-semibold'
                : 'text-[#4D4C7D] hover:text-[#363062]'"
            >
              my-page
              <span
                v-if="isActive"
                class="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F99417] rounded-full"
              />
            </span>
          </RouterLink>
        </li>

      <!-- RIGHT SIDE (CTA) -->
      <div class="hidden md:flex items-center gap-3">
        <RouterLink
          to="/join-creator"
          class="px-4 py-2 rounded-xl bg-[#F99417] text-white text-sm font-semibold shadow hover:opacity-90 transition"
        >
          Join Creator
        </RouterLink>
      </div>

      <!-- MOBILE BUTTON -->
      <button
        class="md:hidden text-2xl text-[#363062]"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </nav>

    <!-- MOBILE MENU -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="md:hidden bg-white border-t px-4 py-3">
        <ul class="flex flex-col gap-2">
          <li>
            <RouterLink to="/" @click="closeMobileMenu" v-slot="{ isExactActive }">
              <span
                class="block px-3 py-2 rounded-lg transition"
                :class="isExactActive
                  ? 'bg-[#F99417]/10 text-[#363062] font-semibold'
                  : 'text-[#4D4C7D] hover:bg-gray-50'"
              >
                Beranda
              </span>
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/creator" @click="closeMobileMenu" v-slot="{ isActive }">
              <span
                class="block px-3 py-2 rounded-lg transition"
                :class="isActive
                  ? 'bg-[#F99417]/10 text-[#363062] font-semibold'
                  : 'text-[#4D4C7D] hover:bg-gray-50'"
              >
                Kreator
              </span>
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/gallery" @click="closeMobileMenu" v-slot="{ isActive }">
              <span
                class="block px-3 py-2 rounded-lg transition"
                :class="isActive
                  ? 'bg-[#F99417]/10 text-[#363062] font-semibold'
                  : 'text-[#4D4C7D] hover:bg-gray-50'"
              >
                Galeri
              </span>
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/about" @click="closeMobileMenu" v-slot="{ isActive }">
              <span
                class="block px-3 py-2 rounded-lg transition"
                :class="isActive
                  ? 'bg-[#F99417]/10 text-[#363062] font-semibold'
                  : 'text-[#4D4C7D] hover:bg-gray-50'"
              >
                Tentang
              </span>
            </RouterLink>
          </li>

          <!-- Support mobile -->
          <li class="pt-2 border-t">
            <p class="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">
              Support
            </p>
            <RouterLink
              to="/how-to-commission"
              @click="closeMobileMenu"
              class="block px-3 py-2 rounded-lg text-[#4D4C7D] hover:bg-gray-50"
            >
              Cara Komisi
            </RouterLink>
            <RouterLink
              to="/faq"
              @click="closeMobileMenu"
              class="block px-3 py-2 rounded-lg text-[#4D4C7D] hover:bg-gray-50"
            >
              FAQ
            </RouterLink>
          </li>

          <!-- CTA mobile -->
          <li class="pt-2">
            <RouterLink
              to="/join-creator"
              @click="closeMobileMenu"
              class="block text-center px-3 py-2 rounded-lg bg-[#F99417] text-white font-semibold hover:opacity-90 transition"
            >
              Join Creator
            </RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
