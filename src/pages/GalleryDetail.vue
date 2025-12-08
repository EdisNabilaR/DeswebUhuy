<script setup>
import { useRoute, RouterLink } from "vue-router";
import { gallery } from "../data/gallery";

const route = useRoute();
const item = gallery.find(g => g.id === Number(route.params.id));
</script>

<template>
  <div class="container mx-auto px-4 py-10" v-if="item">

    <div class="flex flex-col md:flex-row gap-10">

      <!-- IMAGE -->
      <img :src="item.image" class="w-full md:w-1/2 rounded-xl shadow" />

      <!-- DETAILS -->
      <div>
        <h1 class="text-4xl font-bold text-gray-900 mb-2">{{ item.title }}</h1>

        <p class="text-gray-600 mb-4">
          Oleh 
          <RouterLink
            :to="`/creator/${item.creatorId}`"
            class="text-blue-600 underline"
          >
            {{ item.creator }}
          </RouterLink>
        </p>

        <p class="text-blue-600 text-2xl font-bold mb-6">
          Rp {{ item.price.toLocaleString("id-ID") }}
        </p>

        <RouterLink
          :to="`/commission/${item.creatorId}`"
          class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Pesan Komisi
        </RouterLink>
      </div>

    </div>

  </div>

  <div v-else class="text-center py-20 text-gray-500">
    Karya tidak ditemukan.
  </div>
</template>
