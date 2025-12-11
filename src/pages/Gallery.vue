<script setup>
import { gallery } from "../data/gallery"
import { RouterLink } from "vue-router"
</script>

<template>

  <!-- ===== HERO (GALLERY PAGE) ===== -->
  <section
    class="relative w-full py-24 bg-cover bg-center bg-no-repeat"
    style="background-image: url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80');"
  >
    <!-- overlay blur -->
    <div class="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/85 backdrop-blur-sm"></div>

    <div class="relative container mx-auto px-6 flex justify-center">
      <div
        class="max-w-2xl bg-white/85 backdrop-blur-md shadow-xl rounded-2xl p-10 text-center border border-gray-200"
      >
        <h1 class="text-4xl font-extrabold text-gray-900 mb-3">
          Galeri Karya 🎨
        </h1>
        <p class="text-gray-700 text-lg leading-relaxed">
          Telusuri karya kreator berbakat dari berbagai kategori seni.
        </p>
      </div>
    </div>
  </section>

  <!-- ===== MAIN CONTENT ===== -->
  <div class="container mx-auto px-4 py-12">

    <h2 class="text-3xl font-bold mb-8 text-gray-900">
      Semua Karya
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      <RouterLink
        v-for="item in gallery"
        :key="item.id"
        :to="'/gallery/' + item.id"
        class="block group"
      >
        <div
          class="bg-white rounded-2xl border shadow-sm overflow-hidden 
                 transition-all duration-200 group-hover:shadow-lg 
                 group-hover:-translate-y-1"
        >
          <img
            :src="item.image"
            class="w-full h-52 object-cover group-hover:opacity-95 transition"
            loading="lazy"
          />

          <div class="p-4">
            <h3 class="font-semibold text-gray-900 truncate">
              {{ item.title }}
            </h3>

            <p class="text-sm text-gray-600 truncate">
              {{ item.creator }}
            </p>

            <p class="text-blue-600 font-bold mt-2">
              Rp {{ item.price.toLocaleString("id-ID") }}
            </p>
          </div>
        </div>
      </RouterLink>

    </div>
  </div>

</template>
