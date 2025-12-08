<script setup>
import { gallery } from "../data/gallery";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-6 text-gray-900">Galeri Karya</h1>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <RouterLink
        v-for="item in gallery"
        :key="item.id"
        :to="'/gallery/' + item.id"
        class="block"
      >
        <div
          class="bg-white rounded-xl shadow hover:shadow-lg transition 
                 hover:-translate-y-1 overflow-hidden"
        >
          <img :src="item.image" class="w-full h-52 object-cover" />

          <div class="p-4">
            <h3 class="font-semibold text-gray-900">{{ item.title }}</h3>
            <p class="text-sm text-gray-600">{{ item.creator }}</p>

            <p class="text-blue-600 font-bold mt-2">
              Rp {{ item.price.toLocaleString("id-ID") }}
            </p>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
