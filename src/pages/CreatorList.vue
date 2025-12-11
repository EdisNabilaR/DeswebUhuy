<script setup>
import { ref, computed, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { creators } from "../data/creators"
import CreatorCard from "../components/CreatorCard.vue"

// routing
const route = useRoute()
const router = useRouter()

// state
const search = ref("")
const selectedTags = ref([]) // MULTI SELECT
const showAllTags = ref(false)

const TAG_LIMIT = 10

// ========== APPLY TAG FROM URL ==========
const applyTagFromURL = () => {
  const tag = route.query.tag
  if (!tag) return

  if (typeof tag === "string") {
    selectedTags.value = [tag]
  } else if (Array.isArray(tag)) {
    selectedTags.value = [...tag]
  }
}
applyTagFromURL()

// Update URL saat selectedTags berubah
watch(selectedTags, (val) => {
  if (val.length === 0) {
    router.replace({ query: {} })
  } else {
    router.replace({ query: { tag: val } })
  }
})

// ========== TAG LIST ==========
const allTags = computed(() => {
  const s = new Set()
  creators.forEach((c) => c.specialties.forEach((t) => s.add(t)))
  return [...s]
})

// TAG ditampilkan (limit)
const displayedTags = computed(() => {
  return showAllTags.value ? allTags.value : allTags.value.slice(0, TAG_LIMIT)
})

// ========== MULTI SELECT HANDLER ==========
const toggleTag = (tag) => {
  if (tag === "all") {
    selectedTags.value = []
    return
  }

  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter((t) => t !== tag)
  } else {
    selectedTags.value.push(tag)
  }
}

// ========== FILTER FUNCTION ==========
const filteredCreators = computed(() => {
  const q = search.value.trim().toLowerCase()

  return creators.filter((creator) => {
    const matchSearch =
      !q ||
      creator.name.toLowerCase().includes(q) ||
      creator.specialties.some((s) => s.toLowerCase().includes(q))

    const matchTags =
      selectedTags.value.length === 0 ||
      selectedTags.value.every((t) => creator.specialties.includes(t))

    return matchSearch && matchTags
  })
})

const resetFilter = () => {
  search.value = ""
  selectedTags.value = []
  router.replace({ query: {} })
}
</script>

<template>
  <!-- =================== HERO =================== -->
  <section
    class="relative w-full py-24 bg-cover bg-center bg-no-repeat"
    style="background-image: url('https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80');"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-white/70 via-white/65 to-white/85 backdrop-blur-sm"
    ></div>

    <div class="relative container mx-auto px-6 flex justify-center">
      <div
        class="max-w-2xl bg-white/90 shadow-xl rounded-2xl p-10 text-center border border-gray-200"
      >
        <h1 class="text-4xl font-extrabold text-gray-900 mb-3">
          Daftar Kreator
        </h1>
        <p class="text-gray-700 text-lg">
          Cari kreator berdasarkan nama, spesialisasi, atau kategori.
        </p>
      </div>
    </div>
  </section>

  <!-- =================== MAIN CONTENT =================== -->
  <div class="container mx-auto px-4 py-12">
    <!-- FILTER BAR -->
    <section
      class="bg-white shadow-md border rounded-2xl p-8 mb-10 flex flex-col gap-6"
    >
      <!-- SEARCH -->
      <div class="flex justify-center w-full">
        <input
          v-model="search"
          placeholder="Cari kreator / style..."
          class="border rounded-xl px-4 py-3 w-full max-w-2xl
                 focus:outline-none focus:ring focus:ring-[var(--artlink-mid)]/20
                 focus:border-[var(--artlink-mid)] text-center shadow-sm"
        />
      </div>

      <!-- TAG FILTER -->
      <div class="flex flex-col gap-3 w-full items-center">
        <!-- TAG GRID (FLEX WRAP) -->
        <div
          class="flex flex-wrap gap-2 text-sm w-full justify-center overflow-hidden
                 transition-[max-height] duration-300 ease-in-out"
          :class="showAllTags
            ? 'max-h-none'
            : 'max-h-[96px] sm:max-h-[44px]'"
        >
          <!-- SEMUA KATEGORI BUTTON -->
          <button
            type="button"
            @click="toggleTag('all')"
            :class="[
              'px-3 py-1 rounded-full border transition select-none text-center whitespace-nowrap',
              selectedTags.length === 0
                ? 'bg-[var(--artlink-mid)] text-white border-[var(--artlink-mid)] shadow'
                : 'bg-white text-gray-700 hover:bg-[var(--artlink-mid)]/5'
            ]"
          >
            Semua kategori
          </button>

          <!-- OTHER TAGS -->
          <button
            type="button"
            v-for="tag in displayedTags"
            :key="tag"
            @click="toggleTag(tag)"
            :class="[
              'px-3 py-1 rounded-full border transition select-none text-center whitespace-nowrap',
              selectedTags.includes(tag)
                ? 'bg-[var(--artlink-mid)] text-white border-[var(--artlink-mid)] shadow'
                : 'bg-white text-gray-700 hover:bg-[var(--artlink-mid)]/5'
            ]"
          >
            {{ tag }}
          </button>
        </div>

        <!-- TOGGLE -->
        <button
          v-if="allTags.length > TAG_LIMIT"
          type="button"
          @click="showAllTags = !showAllTags"
          class="text-[var(--artlink-dark)] text-sm font-medium hover:underline self-center mt-2"
        >
          {{ showAllTags ? "Tutup kategori ▲" : "Lihat semua kategori ▼" }}
        </button>
      </div>
    </section>

    <!-- RESULT INFO -->
    <div v-if="filteredCreators.length" class="mb-6 text-gray-700 text-sm">
      Menampilkan
      <span class="font-semibold">{{ filteredCreators.length }}</span>
      kreator

      <template v-if="selectedTags.length > 0">
        dengan kategori:
        <strong>{{ selectedTags.join(", ") }}</strong>.
      </template>
    </div>

    <!-- LIST -->
    <div
      v-if="filteredCreators.length"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn"
    >
      <CreatorCard v-for="c in filteredCreators" :key="c.id" :creator="c" />
    </div>

    <!-- EMPTY -->
    <div
      v-else
      class="flex flex-col items-center justify-center py-20 text-center animate-fadeIn"
    >
      <h2 class="text-2xl font-bold mb-2">Kreator tidak ditemukan</h2>
      <p class="text-gray-600 mb-4 max-w-md">
        Tidak ada kreator yang cocok dengan pencarian atau kategori saat ini.
      </p>

      <button
        class="px-4 py-2 rounded-lg border bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
        @click="resetFilter"
      >
        Reset filter
      </button>
    </div>
  </div>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.35s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
