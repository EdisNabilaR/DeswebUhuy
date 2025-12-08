<template>
  <div class="container mx-auto px-4 py-10">

    <!-- ================= HERO ================= -->
    <section class="relative flex justify-center mb-20">
      <div class="bg-white shadow-xl p-10 rounded-2xl text-center max-w-3xl border">
        <h1 class="text-4xl font-bold text-gray-900 mb-3">
          Selamat Datang di Artlink 🎨
        </h1>
        <p class="text-gray-600 text-lg">
          Temukan kreator berbakat & karya terbaik mereka. Mulai perjalanan kreatifmu hari ini!
        </p>
      </div>
    </section>


    <!-- ================= KATEGORI POPULER ================= -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Kategori Populer 🔥</h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <div
          v-for="cat in categories"
          :key="cat"
          class="bg-white shadow border rounded-xl py-3 px-4 text-center cursor-pointer hover:bg-blue-50 transition"
        >
          <p class="font-medium text-gray-800">{{ cat }}</p>
        </div>
      </div>
    </section>



    <!-- ================= KENAPA ARTLINK ================= -->
    <section class="mb-20">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Kenapa Artlink?</h2>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-xl shadow border">
          <p class="text-4xl mb-3">🛡</p>
          <h3 class="font-semibold text-lg mb-2">Aman & Terverifikasi</h3>
          <p class="text-gray-600 text-sm">
            Semua kreator dicek kualitas portfolionya.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow border">
          <p class="text-4xl mb-3">⚡</p>
          <h3 class="font-semibold text-lg mb-2">Pesan Komisi Mudah</h3>
          <p class="text-gray-600 text-sm">
            Proses komisi jelas, cepat, dan aman.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow border">
          <p class="text-4xl mb-3">🎨</p>
          <h3 class="font-semibold text-lg mb-2">Ragam Gaya Ilustrasi</h3>
          <p class="text-gray-600 text-sm">
            Banyak style: anime, webtoon, realistic, chibi, dll.
          </p>
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
          class="bg-white shadow rounded-xl border overflow-hidden hover:scale-[1.02] transition cursor-pointer"
        >
          <img :src="creator.avatar" class="h-32 w-full object-cover" />
          <div class="p-3 text-center">
            <p class="font-semibold">{{ creator.name }}</p>
            <p class="text-sm text-gray-600">⭐ {{ creator.rating }}</p>
          </div>
        </div>
      </div>
    </section>



    <!-- ================= KREATOR MINGGUAN (PUNYAMU) ================= -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Kreator Mingguan ✨</h2>

      <div class="relative">
        <div
          ref="creatorScroll"
          class="flex gap-6 overflow-x-auto pb-4 no-scrollbar"
        >
          <div
            v-for="creator in creators"
            :key="creator.id"
            class="min-w-[200px] bg-white shadow rounded-xl p-3 border cursor-pointer hover:scale-[1.02] transition"
          >
            <img :src="creator.avatar" class="h-28 w-full rounded-lg object-cover" />
            <p class="font-semibold mt-2">{{ creator.name }}</p>
            <p class="text-sm text-gray-600">⭐ {{ creator.rating }}</p>

            <div class="flex flex-wrap gap-1 mt-2">
              <span
                v-for="tag in creator.specialties"
                :key="tag"
                class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- Scroll Buttons -->
        <button
          @click="scrollCreators(-300)"
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow px-2 py-2 rounded-full"
        >‹</button>

        <button
          @click="scrollCreators(300)"
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow px-2 py-2 rounded-full"
        >›</button>
      </div>
    </section>



    <!-- ================= GALERI MINGGUAN (PUNYAMU) ================= -->
    <section class="mb-20">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Galeri Mingguan 🖼</h2>

      <div class="relative">
        <div
          ref="galleryScroll"
          class="flex gap-6 overflow-x-auto pb-4 no-scrollbar"
        >
          <div
            v-for="item in gallery"
            :key="item.id"
            class="min-w-[200px] bg-white shadow rounded-xl p-3 border cursor-pointer hover:scale-[1.02] transition"
          >
            <img :src="item.image" class="h-28 w-full rounded-lg object-cover" />

            <p class="font-semibold mt-2">{{ item.title }}</p>
            <p class="text-sm text-gray-600">{{ item.creator }}</p>
          </div>
        </div>

        <!-- Scroll Buttons -->
        <button
          @click="scrollGallery(-300)"
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow px-2 py-2 rounded-full"
        >‹</button>

        <button
          @click="scrollGallery(300)"
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow px-2 py-2 rounded-full"
        >›</button>
      </div>
    </section>



    <!-- ================= TESTIMONI ================= -->
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
  </div>
</template>


<script setup>
import { ref } from "vue";
import { creators } from "../data/creators";
import { gallery } from "../data/gallery";

// kategori populer
const categories = [
  "Anime",
  "Webtoon",
  "Chibi",
  "Semi-realistic",
  "Fantasy Art",
  "Logo Design"
];

// kreator baru = ambil 5 terakhir
const newCreators = creators.slice(-5);

// horizontal scroll
const creatorScroll = ref(null);
const galleryScroll = ref(null);

const scrollCreators = (amount) => {
  creatorScroll.value.scrollLeft += amount;
};

const scrollGallery = (amount) => {
  galleryScroll.value.scrollLeft += amount;
};
</script>
