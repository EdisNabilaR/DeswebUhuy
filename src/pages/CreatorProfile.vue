<script setup>
import { useRoute, RouterLink } from "vue-router"
import { creators } from "../data/creators"
import { gallery } from "../data/gallery"
import { commissions } from "../data/commissions"
import CreatorChatWidget from "../components/CreatorChatWidget.vue"
import { ref, onMounted, computed } from "vue"

// Ambil id kreator dari route
const route = useRoute()
const creatorId = Number(route.params.id)
const creator = creators.find((c) => c.id === creatorId)

// Followers dummy (disimpan di localStorage per creator)
const followers = ref(0)
onMounted(() => {
  const key = `artlink_follow_${creatorId}`
  followers.value = Number(localStorage.getItem(key)) || 0
})

// ---------- LIGHTBOX DENGAN DETAIL ----------
const showLightbox = ref(false)
const selectedArtwork = ref(null)

const openLightbox = (src) => {
  let found = gallery.find(
    (g) => g.image === src && g.creatorId === creatorId
  )

  if (!found && creator?.gallery) {
    const local = creator.gallery.find((g) => g.image === src) || {}
    found = {
      id: local.id ?? null,
      image: src,
      title: local.title || "Karya Tanpa Judul",
      category: local.category || "Tanpa kategori",
      description: local.description || "Belum ada deskripsi untuk karya ini.",
      date: local.date || "Tanggal tidak diketahui",
      price: null,
    }
  }

  selectedArtwork.value = found
  showLightbox.value = true
}

const closeLightbox = () => {
  showLightbox.value = false
  selectedArtwork.value = null
}

// ---------- CHAT KREATOR ----------
const showChat = ref(false)
const openChat = () => {
  showChat.value = true
}

// ---------- COMMISSIONS PER-KREATOR ----------
const creatorCommissions = computed(() =>
  commissions.filter((c) => c.creatorId === creatorId)
)
</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <!-- IF NOT FOUND -->
    <div v-if="!creator" class="text-center py-20">
      <h1 class="text-3xl font-bold mb-2">Kreator Tidak Ditemukan</h1>
      <p class="text-gray-500 mb-6">
        ID mungkin tidak valid atau belum ada datanya.
      </p>
      <RouterLink
        to="/creator"
        class="px-5 py-2 bg-[#363062] text-white rounded-lg hover:bg-[#4D4C7D]"
      >
        Kembali ke Daftar Kreator
      </RouterLink>
    </div>

    <!-- ================= MAIN CONTENT ================= -->
    <div v-else class="space-y-14">

      <!-- ================= GRID BESAR ================= -->
      <section class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

        <!-- ================= KIRI ================= -->
        <div class="lg:col-span-2 space-y-8">

          <!-- CARD PROFILE -->
          <div class="bg-white rounded-3xl shadow border border-[#363062]/20 p-8 md:p-10">
            <div class="flex justify-center">
              <img
                :src="creator.avatar"
                class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md border-4 border-white"
              />
            </div>

            <h1 class="text-3xl md:text-4xl font-extrabold mt-4 text-center text-gray-900">
              {{ creator.name }}
            </h1>

            <p class="text-gray-600 max-w-xl mx-auto mt-2 text-center">
              {{ creator.bio }}
            </p>

            <div class="flex flex-wrap justify-center gap-8 mt-6 text-gray-700 text-sm">
              <div class="text-center">
                <p class="text-xl font-semibold text-[#363062]">{{ creator.rating }}</p>
                <p class="text-xs text-gray-500">Rating</p>
              </div>

              <div class="text-center">
                <p class="text-xl font-semibold text-[#363062]">{{ followers }}</p>
                <p class="text-xs text-gray-500">Followers</p>
              </div>

              <div class="text-center">
                <p class="text-xl font-semibold text-[#363062]">
                  {{ creator.gallery?.length || 0 }}
                </p>
                <p class="text-xs text-gray-500">Karya</p>
              </div>
            </div>

            <!-- Sosial (soft outline, biru/ungu semua) -->
            <div class="flex justify-center gap-3 mt-6 flex-wrap">
              <a
                :href="creator.socials.instagram"
                target="_blank"
                class="px-5 py-2 rounded-full text-sm font-medium
                       text-[#363062]
                       border border-[#363062]/30 hover:border-[#363062]/60
                       bg-transparent hover:bg-[#363062]/5 transition"
              >
                Instagram
              </a>

              <a
                :href="creator.socials.twitter"
                target="_blank"
                class="px-5 py-2 rounded-full text-sm font-medium
                       text-[#363062]
                       border border-[#363062]/30 hover:border-[#363062]/60
                       bg-transparent hover:bg-[#363062]/5 transition"
              >
                Twitter / X
              </a>
            </div>

            <!-- Buttons (warna sama / biru semua) -->
            <div class="flex justify-center gap-4 mt-8 flex-wrap">
              <!-- Commission: solid primary -->
              <RouterLink
                :to="`/commission/${creator.id}`"
                class="bg-[#363062] text-white px-8 py-3 rounded-xl
                       hover:bg-[#4D4C7D] text-sm md:text-base shadow-md transition"
              >
                Commission
              </RouterLink>

              <!-- Chat: outline primary (warna tetap sama) -->
              <button
                @click="openChat"
                class="px-8 py-3 rounded-xl text-sm md:text-base font-medium
                       text-[#363062] border border-[#363062]/40
                       hover:bg-[#363062]/5 hover:border-[#363062]/70
                       shadow-md transition"
              >
                Chat
              </button>
            </div>
          </div>

          <!-- KEAHLIAN -->
          <div class="bg-white rounded-2xl shadow border border-[#363062]/20 p-6">
            <h2 class="text-lg md:text-xl font-bold mb-4 text-[#363062]">Keahlian</h2>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in creator.specialties"
                :key="tag"
                class="px-3 py-1 bg-[#363062]/10 text-[#363062] rounded-full text-xs"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- GALERI -->
          <div class="bg-white rounded-2xl shadow border border-[#363062]/20 p-6 space-y-6">
            <div>
              <h2 class="text-lg font-bold mb-2 text-[#363062]">Galeri Saya</h2>
              <div class="flex gap-4 overflow-x-auto pb-2">
                <div
                  v-for="img in creator.gallery || []"
                  :key="img.id"
                  class="min-w-[140px] h-28 rounded-xl overflow-hidden bg-gray-200 shadow cursor-pointer"
                  @click="openLightbox(img.image)"
                >
                  <img
                    :src="img.image"
                    class="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-3 text-[#363062]">Semua Karya</h3>
              <div
                v-if="creator.gallery?.length"
                class="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center md:justify-items-start"
              >
                <div
                  v-for="img in creator.gallery"
                  :key="img.id + '-full'"
                  class="rounded-xl overflow-hidden bg-gray-200 shadow cursor-pointer w-full"
                  @click="openLightbox(img.image)"
                >
                  <img
                    :src="img.image"
                    class="w-full h-40 md:h-48 object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
              <p v-else class="text-gray-500 text-sm">Belum ada karya.</p>
            </div>
          </div>
        </div>

        <!-- ================= KANAN ================= -->
        <div class="space-y-8">

          <!-- KOMISI AKTIF -->
          <section class="bg-white rounded-2xl shadow border border-[#363062]/20 p-6">
            <h2 class="text-lg md:text-xl font-bold mb-4 text-[#363062]">
              Commission Aktif
            </h2>

            <p v-if="!creatorCommissions.length" class="text-gray-500 text-sm">
              Belum ada commission aktif.
            </p>

            <div v-else class="space-y-3">
              <div
                v-for="order in creatorCommissions"
                :key="order.id"
                class="border border-[#363062]/20 rounded-xl p-4 bg-[#F5F5F5] flex flex-col gap-2"
              >
                <div>
                  <p class="font-semibold text-gray-900 text-sm md:text-base">
                    {{ order.title }}
                  </p>
                  <p class="text-xs text-gray-500">
                    Client: {{ order.clientName }} • {{ order.date }}
                  </p>
                </div>

                <RouterLink
                  :to="`/commission/progress/${order.id}`"
                  class="self-start px-3 py-1.5 bg-white border border-[#363062]/30
                         rounded-lg text-xs md:text-sm hover:bg-[#363062]/5 transition"
                >
                  Lihat Progress →
                </RouterLink>
              </div>
            </div>
          </section>

          <!-- (Progress Commission DIHAPUS sesuai request) -->
        </div>
      </section>
    </div>

    <!-- ================= LIGHTBOX ================= -->
    <transition name="fade">
      <div
        v-if="showLightbox"
        class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        @click.self="closeLightbox"
      >
        <div
          class="bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row relative"
        >
          <img
            :src="selectedArtwork?.image"
            class="w-full md:w-1/2 object-cover max-h-[80vh]"
          />

          <div class="p-6 flex flex-col gap-4 md:w-1/2">
            <h2 class="text-2xl font-bold text-gray-900">
              {{ selectedArtwork?.title }}
            </h2>

            <p class="text-gray-600 -mt-2">
              Oleh
              <RouterLink
                :to="`/creator/${creator.id}`"
                class="text-[#363062] underline"
              >
                {{ creator.name }}
              </RouterLink>
            </p>

            <p class="text-sm text-gray-700">
              <strong>Kategori:</strong> {{ selectedArtwork?.category }}
            </p>

            <p class="text-gray-700 text-sm">
              {{ selectedArtwork?.description }}
            </p>

            <p class="text-xs text-gray-500">
              Diunggah: {{ selectedArtwork?.date }}
            </p>

            <RouterLink
              v-if="selectedArtwork?.id"
              :to="`/gallery/${selectedArtwork.id}`"
              class="px-4 py-2 bg-[#363062] text-white rounded-lg hover:bg-[#4D4C7D]
                     w-fit text-xs md:text-sm transition"
            >
              Lihat Detail →
            </RouterLink>

            <button
              class="absolute top-4 right-4 text-3xl text-white bg-black/30 rounded-full px-2"
              @click="closeLightbox"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- ================= CHAT KREATOR ================= -->
    <CreatorChatWidget
      v-if="showChat && creator"
      :creatorId="creator.id"
      :creatorName="creator.name"
      :defaultOpen="true"
      @close="showChat = false"
    />
  </div>
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
