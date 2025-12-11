<template>
  <div
    class="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[999]"
    @click.self="close"
  >
    <div
      class="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-indigo-100"
    >
      <!-- HEADER -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-indigo-100 bg-indigo-50/60">
        <!-- Creator Info (clickable) -->
        <RouterLink
          v-if="creator"
          :to="`/creator/${creator.id}`"
          class="flex items-center gap-3 group"
        >
          <img
            :src="creator.avatar"
            class="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow"
            alt="creator avatar"
          />
          <div>
            <p class="font-semibold text-indigo-950 group-hover:underline">
              {{ creator.name }}
            </p>
            <p class="text-xs text-indigo-700/80">
              ⭐ {{ creator.rating }} · {{ creator.specialties?.join(" · ") }}
            </p>
          </div>
        </RouterLink>

        <!-- fallback kalau creator null -->
        <div v-else class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-full bg-gray-200" />
          <div>
            <p class="font-semibold text-gray-700">Kreator</p>
            <p class="text-xs text-gray-400">Tidak diketahui</p>
          </div>
        </div>

        <!-- Commission Button -->
        <RouterLink
          v-if="creator"
          :to="`/commission/${creator.id}`"
          class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 text-sm font-semibold shadow-sm"
        >
          Pesan Komisi
        </RouterLink>
      </div>

      <!-- IMAGE -->
      <div class="bg-indigo-950 flex justify-center">
        <img
          :src="item?.image"
          class="max-h-[70vh] w-auto object-contain"
          alt="artwork"
        />
      </div>

      <!-- CONTENT -->
      <div class="px-6 py-5">
        <h1 class="text-xl font-bold text-indigo-950">
          {{ item?.title || "Karya Tanpa Judul" }}
        </h1>

        <p v-if="item?.price != null" class="text-orange-600 text-lg font-bold mt-1">
          Rp {{ item.price.toLocaleString("id-ID") }}
        </p>
        <p v-else class="text-indigo-700 text-sm mt-1">
          Harga belum tersedia
        </p>

        <!-- Description -->
        <p class="mt-3 text-indigo-950/80 text-sm leading-relaxed">
          {{ item?.description || "Tidak ada deskripsi." }}
        </p>

        <!-- TAGS -->
        <div v-if="creator?.specialties?.length" class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="tag in creator.specialties"
            :key="tag"
            class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium"
          >
            #{{ tag }}
          </span>
        </div>

        <!-- REACTIONS -->
        <div class="flex items-center gap-6 mt-6 text-indigo-950/80 text-sm">
          <button
            @click="toggleLike"
            class="hover:text-orange-600 font-medium"
          >
            ❤️ {{ likes }}
          </button>

          <button class="hover:text-indigo-700 font-medium">
            💬 {{ comments }}
          </button>

          <button class="hover:text-indigo-700 font-medium">
            🔗 Share
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  item: { type: Object, required: true },
  creator: { type: Object, default: null }
})

const emits = defineEmits(["close"])
const close = () => emits("close")

// dummy reactions
const likes = ref(213)
const comments = ref(12)
const liked = ref(false)

const toggleLike = () => {
  liked.value ? likes.value-- : likes.value++
  liked.value = !liked.value
}
</script>
