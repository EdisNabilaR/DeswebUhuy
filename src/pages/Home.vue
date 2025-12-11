<template>
  <div class="w-full">

    <!-- ===== HERO WITH BACKGROUND IMAGE ===== -->
    <section
      class="relative w-full py-24 bg-cover bg-center bg-no-repeat"
      style="background-image: url('https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&w=1600&q=80');"
    >
      <!-- overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90"></div>

      <div class="relative container mx-auto px-6 flex justify-center">
        <div
          class="max-w-3xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 text-center border border-gray-200"
        >
          <h1 class="text-4xl font-extrabold text-gray-900 mb-4">
            Selamat Datang di Artlink 🎨
          </h1>

          <p class="text-gray-700 text-lg leading-relaxed">
            Temukan kreator berbakat & karya terbaik mereka. Mulai perjalanan kreatifmu hari ini!
          </p>
        </div>
      </div>
    </section>

    <!-- ===== CONTENT START ===== -->
    <div class="container mx-auto px-4 py-10 animate-fadeIn">

      <!-- ================= KATEGORI POPULER ================= -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Kategori Populer 🔥</h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <div
            v-for="cat in categories"
            :key="cat"
            @click="$router.push(`/creator?tag=${encodeURIComponent(cat)}`)"
            class="bg-white shadow border rounded-xl py-3 px-4 text-center cursor-pointer
                   hover:bg-blue-50 hover:scale-[1.03] active:scale-[0.98] transition"
          >
            <p class="font-medium text-gray-800 truncate">{{ cat }}</p>
          </div>
        </div>
      </section>

      <!-- ================= TESTIMONI (DIPINDAH KE ATAS) ================= -->
      <section class="mb-20">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Apa Kata Mereka? 💬</h2>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-xl shadow border">
            <p class="italic text-gray-700">
              "Artlink bantu aku nemu ilustrator yang cocok banget sama style ku!"
            </p>
            <p class="mt-3 text-sm text-gray-500 font-medium">— Rina</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow border">
            <p class="italic text-gray-700">
              "Proses komisinya gampang & transparan, suka banget ❤️"
            </p>
            <p class="mt-3 text-sm text-gray-500 font-medium">— Bagas</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow border">
            <p class="italic text-gray-700">
              "Creator-nya ramah & hasilnya super memuaskan!"
            </p>
            <p class="mt-3 text-sm text-gray-500 font-medium">— Sinta</p>
          </div>
        </div>
      </section>

      <!-- ================= KREATOR BARU BERGABUNG ================= -->
      <section class="mb-20">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Kreator Baru Bergabung ✨</h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <div
            v-for="creator in newCreators"
            :key="creator.id"
            @click="$router.push(`/creator/${creator.id}`)"
            class="bg-white shadow rounded-xl border overflow-hidden cursor-pointer
                   hover:scale-[1.03] active:scale-[0.97] transition"
          >
            <img
              :src="creator.avatar"
              class="h-32 w-full object-cover"
              loading="lazy"
            />
            <div class="p-3 text-center">
              <p class="font-semibold truncate">{{ creator.name }}</p>
              <p class="text-sm text-gray-600">⭐ {{ creator.rating }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= KREATOR MINGGUAN ================= -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Kreator Mingguan ✨</h2>

        <div class="relative">
          <div ref="creatorScroll" class="scroll-x flex gap-6 pb-4">
            <div
              v-for="creator in creators"
              :key="creator.id"
              @click="$router.push(`/creator/${creator.id}`)"
              class="min-w-[200px] bg-white shadow rounded-xl p-3 border cursor-pointer
                     hover:scale-[1.03] active:scale-[0.97] transition"
            >
              <img
                :src="creator.avatar"
                class="h-28 w-full rounded-lg object-cover"
                loading="lazy"
              />
              <p class="font-semibold mt-2 truncate">{{ creator.name }}</p>
              <p class="text-sm text-gray-600">⭐ {{ creator.rating }}</p>

              <div class="flex flex-wrap gap-1 mt-2">
                <span
                  v-for="tag in creator.specialties"
                  :key="tag"
                  class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full truncate"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <button
            @click="scrollCreators(-300)"
            class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
                   bg-white shadow px-2 py-2 rounded-full"
          >‹</button>

          <button
            @click="scrollCreators(300)"
            class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
                   bg-white shadow px-2 py-2 rounded-full"
          >›</button>
        </div>
      </section>

      <!-- ================= GALERI ================= -->
      <section class="mb-20">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Galeri Mingguan 🖼</h2>

        <div class="relative">
          <div ref="galleryScroll" class="scroll-x flex gap-6 pb-4">
            <div
              v-for="item in gallery"
              :key="item.id"
              @click="$router.push(`/gallery/${item.id}`)"
              class="min-w-[220px] bg-white shadow rounded-xl p-3 border cursor-pointer
                     hover:scale-[1.03] active:scale-[0.97] transition"
            >
              <img
                :src="item.image"
                class="h-28 w-full rounded-lg object-cover"
                loading="lazy"
              />

              <p class="font-semibold mt-2 truncate">{{ item.title }}</p>
              <p class="text-sm text-gray-600 truncate">{{ item.creator }}</p>
            </div>
          </div>

          <button
            @click="scrollGallery(-300)"
            class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
                   bg-white shadow px-2 py-2 rounded-full"
          >‹</button>

          <button
            @click="scrollGallery(300)"
            class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
                   bg-white shadow px-2 py-2 rounded-full"
          >›</button>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { creators } from "../data/creators"
import { gallery } from "../data/gallery"

const categories = [
  "Anime",
  "Webtoon",
  "Chibi",
  "Semi-realistic",
  "Fantasy Art",
  "Logo Design",
];

// creators baru
const newCreators = creators.slice(-5)

// scroll references
const creatorScroll = ref(null)
const galleryScroll = ref(null)

const scrollCreators = (amount) => {
  if (creatorScroll.value) creatorScroll.value.scrollLeft += amount
}
const scrollGallery = (amount) => {
  if (galleryScroll.value) galleryScroll.value.scrollLeft += amount
}
</script>

<style>
.scroll-x {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.scroll-x::-webkit-scrollbar {
  display: none;
}
</style>
