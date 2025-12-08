<script setup>
import { ref, computed } from 'vue'
import { creators } from '../data/creators'
import CreatorCard from '../components/CreatorCard.vue'

const search = ref('')
const selectedTag = ref('all')

// Kumpulan tag dari specialties
const allTags = computed(() => {
  const set = new Set()
  creators.forEach(c => c.specialties.forEach(t => set.add(t)))
  return ['all', ...Array.from(set)]
})

// Filter utama
const filteredCreators = computed(() => {
  const q = search.value.toLowerCase()

  return creators.filter(c => {
    const matchName =
      c.name.toLowerCase().includes(q) ||
      c.specialties.some(s => s.toLowerCase().includes(q))

    const matchTag =
      selectedTag.value === 'all' ||
      c.specialties.includes(selectedTag.value)

    return matchName && matchTag
  })
})
</script>

<template>
  <div class="container mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-2">Daftar Kreator</h1>
    <p class="text-gray-600 mb-6">
      Jelajahi kreator berdasarkan nama, style, atau spesialisasi.
    </p>

    <!-- FILTER BAR -->
    <div
      class="bg-white shadow rounded-xl p-4 mb-8 flex flex-col gap-4
             md:flex-row md:items-center md:justify-between"
    >
      <!-- search -->
      <input
        v-model="search"
        placeholder="Cari kreator / style..."
        class="border rounded-lg px-3 py-2 w-full md:w-72
               focus:outline-none focus:ring focus:ring-blue-200"
      />

      <!-- tags -->
      <div class="flex flex-wrap gap-2 text-sm">
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="selectedTag = tag"
          :class="[
            'px-3 py-1 rounded-full border transition',
            selectedTag === tag
              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
              : 'bg-white text-gray-700 hover:bg-blue-50'
          ]"
        >
          {{ tag === 'all' ? 'Semua kategori' : tag }}
        </button>
      </div>
    </div>

    <!-- LIST KREATOR -->
    <div
      v-if="filteredCreators.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <CreatorCard
        v-for="c in filteredCreators"
        :key="c.id"
        :creator="c"
      />
    </div>

    <!-- EMPTY STATE -->
    <div
      v-else
      class="flex flex-col items-center justify-center py-20 text-center"
    >
      <h2 class="text-2xl font-bold mb-2">Kreator tidak ditemukan</h2>
      <p class="text-gray-600 mb-4 max-w-md">
        Coba ganti kata kunci pencarian atau pilih kategori lain.  
        Semua kreator akan muncul lagi kalau filter dikosongkan.
      </p>
      <button
        class="px-4 py-2 rounded-lg border bg-white text-gray-700 hover:bg-gray-50"
        @click="search = ''; selectedTag = 'all'"
      >
        Reset filter
      </button>
    </div>
  </div>
</template>
