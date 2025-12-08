<script setup>
import { useRoute, RouterLink } from "vue-router";
import { creators } from "../data/creators";
import { ref, onMounted } from "vue";

// ambil id kreator
const route = useRoute();
const creatorId = Number(route.params.id);
const creator = creators.find((c) => c.id === creatorId);

// followers (dummy)
const followers = ref(0);
onMounted(() => {
  const key = `artlink_follow_${creatorId}`;
  followers.value = Number(localStorage.getItem(key)) || 0;
});

// ---------- LIGHTBOX UNTUK FOTO ----------
const showLightbox = ref(false);
const lightboxImage = ref("");

const openLightbox = (src) => {
  lightboxImage.value = src;
  showLightbox.value = true;
};

const closeLightbox = () => {
  showLightbox.value = false;
  lightboxImage.value = "";
};
</script>

<template>
  <div class="container mx-auto px-6 py-12">

    <!-- IF NOT FOUND -->
    <div v-if="!creator" class="text-center py-20">
      <h1 class="text-3xl font-bold mb-2">Kreator Tidak Ditemukan</h1>
      <p class="text-gray-500 mb-6">ID mungkin tidak valid atau data belum diisi.</p>
      <RouterLink
        to="/creator"
        class="px-5 py-2 bg-blue-600 text-white rounded-lg"
      >
        Kembali ke Daftar Kreator
      </RouterLink>
    </div>

    <!-- PROFILE FOUND -->
    <div v-else class="space-y-14">

      <!-- ======================
           HEADER PROFILE
      ======================= -->
      <section class="text-center">

        <!-- Avatar -->
        <img
          :src="creator.avatar"
          class="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-md border-4 border-white"
        />

        <!-- Name -->
        <h1 class="text-4xl font-extrabold mt-4 text-gray-900">
          {{ creator.name }}
        </h1>

        <!-- Bio -->
        <p class="text-gray-600 max-w-xl mx-auto mt-2">
          {{ creator.bio }}
        </p>

        <!-- Stats -->
        <div class="flex flex-wrap justify-center gap-8 mt-6 text-gray-700">

          <div class="text-center">
            <p class="text-xl font-semibold">{{ creator.rating }}</p>
            <p class="text-xs text-gray-500">Rating</p>
          </div>

          <div class="text-center">
            <p class="text-xl font-semibold">{{ followers }}</p>
            <p class="text-xs text-gray-500">Followers</p>
          </div>

          <div class="text-center">
            <p class="text-xl font-semibold">{{ creator.gallery.length }}</p>
            <p class="text-xs text-gray-500">Karya</p>
          </div>

        </div>

        <!-- Sosial Media -->
        <div class="flex justify-center gap-3 mt-6">
          <a
            :href="creator.socials.instagram"
            target="_blank"
            class="px-3 py-1 border rounded-full text-sm hover:bg-pink-50 text-pink-600 border-pink-300"
          >
            Instagram
          </a>

          <a
            :href="creator.socials.twitter"
            target="_blank"
            class="px-3 py-1 border rounded-full text-sm hover:bg-blue-50 text-blue-600 border-blue-300"
          >
            Twitter / X
          </a>
        </div>

        <!-- Buttons -->
        <div class="flex justify-center gap-4 mt-8">
          <RouterLink
            :to="`/commission/${creator.id}`"
            class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Commission
          </RouterLink>

          <button
            class="bg-gray-200 text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-300"
          >
            Chat
          </button>
        </div>

      </section>

      <!-- ======================
           SPECIALTIES
      ======================= -->
      <section class="text-center">
        <h2 class="text-xl font-bold mb-4">Keahlian</h2>

        <div class="flex flex-wrap justify-center gap-2">
          <span
            v-for="tag in creator.specialties"
            :key="tag"
            class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
          >
            {{ tag }}
          </span>
        </div>
      </section>

      <!-- ======================
           GALLERY
      ======================= -->
      <section>
        <h2 class="text-2xl font-bold mb-4">Karya</h2>

        <div
          v-if="creator.gallery.length"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center"
        >
          <div
            v-for="img in creator.gallery"
            :key="img.id"
            class="rounded-xl overflow-hidden bg-gray-200 shadow cursor-pointer"
            @click="openLightbox(img.image)"
          >
            <img
              :src="img.image"
              class="w-full h-40 md:h-52 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <p v-else class="text-gray-500">Belum ada karya.</p>
      </section>
    </div>


    <!-- ======================
         LIGHTBOX MODAL
    ======================= -->
    <transition name="fade">
      <div
        v-if="showLightbox"
        class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        @click.self="closeLightbox"
      >
        <img
          :src="lightboxImage"
          class="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
        />

        <button
          class="absolute top-6 right-6 text-white text-3xl"
          @click="closeLightbox"
        >
          ✕
        </button>
      </div>
    </transition>

  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
