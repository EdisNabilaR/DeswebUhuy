<template>
  <main class="container mx-auto py-16 px-6 md:px-12 min-h-screen">
    <!-- Mobile: toggle filter button -->
    <div class="mb-6 md:hidden flex justify-end">
      <button
        @click="showFilter = !showFilter"
        class="bg-blue-800 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        :aria-expanded="showFilter"
      >
        {{ showFilter ? 'Tutup Filter' : 'Tampilkan Filter' }}
      </button>
    </div>

    <div class="grid md:grid-cols-4 gap-8 md:gap-12 items-start">
      <!-- Kolom Kiri: Filter Desktop -->
      <aside class="hidden md:block md:col-span-1">
        <div class="bg-yellow-100 p-8 rounded-3xl shadow-xl md:sticky md:top-24">
          <h3 class="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-900 pb-2">
            Filter
          </h3>

          <label class="block text-gray-700 mb-2 font-medium">Pencarian</label>
          <input
            type="text"
            class="w-full p-3 mb-6 rounded-lg border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label class="block text-gray-700 mb-2 font-medium">Kategori</label>
          <div class="mb-6 h-2 bg-yellow-300 rounded-full"></div>

          <label class="block text-gray-700 mb-2 font-medium">Harga</label>
          <input
            type="text"
            class="w-full p-3 mb-8 rounded-lg border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            class="w-full bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Reset Filter
          </button>
        </div>
      </aside>

      <!-- Mobile: slide filter -->
      <transition name="slide-left">
        <aside
          v-if="showFilter"
          class="fixed left-0 top-0 w-72 h-full bg-yellow-100 p-6 shadow-xl z-50"
        >
          <button
            @click="showFilter = false"
            class="mb-4 px-4 py-2 rounded-lg bg-blue-800 text-white hover:bg-blue-700 transition"
          >
            Tutup
          </button>

          <h3 class="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-900 pb-2">
            Filter
          </h3>

          <label class="block text-gray-700 mb-2 font-medium">Pencarian</label>
          <input
            type="text"
            class="w-full p-3 mb-6 rounded-lg border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label class="block text-gray-700 mb-2 font-medium">Kategori</label>
          <div class="mb-6 h-2 bg-yellow-300 rounded-full"></div>

          <label class="block text-gray-700 mb-2 font-medium">Harga</label>
          <input
            type="text"
            class="w-full p-3 mb-8 rounded-lg border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            class="w-full bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Reset Filter
          </button>
        </aside>
      </transition>
      <div
        v-if="showFilter"
        class="fixed inset-0 bg-black/30 z-40 md:hidden"
        @click="showFilter = false"
      ></div>

      <!-- Kolom Kanan: Creator List -->
      <section class="md:col-span-3">
        <h2 class="text-3xl font-bold text-blue-900 mb-8">Kreator List</h2>
        <div
          class="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-6 gap-y-10 justify-items-center"
        >
          <div
            v-for="creator in creators"
            :key="creator.id"
            class="w-full flex justify-center creator-card"
          >
            <CreatorCard :creator="creator" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import CreatorCard from '../components/CreatorCard.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { creators as creatorsData } from '../data/creators'

// Ambil kreator id 101..115 → 15 kreator
const creators = ref(creatorsData.filter((c) => c.id >= 101 && c.id <= 115))

// Toggle state untuk mobile filter
const showFilter = ref(false)

// Escape key handler untuk close mobile filter
function handleKey(e) {
  if (e.key === 'Escape') showFilter.value = false
}

onMounted(() => window.addEventListener('keydown', handleKey))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKey))
</script>

<style scoped>
/* Slide-in mobile filter */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 300ms ease;
}
.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Creator Card hover effect */
.creator-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.creator-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
</style>
