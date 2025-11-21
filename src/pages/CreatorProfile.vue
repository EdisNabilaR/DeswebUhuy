<template>
  <main class="container mx-auto py-16 px-6 md:px-12 min-h-screen">
    <div class="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-art">
      <h1 class="text-2xl font-bold mb-4">Creator Profile</h1>
      <p class="text-sm text-gray-600 mb-6">
        Profile for creator with ID: <strong>{{ id }}</strong>
      </p>

      <div class="space-y-4">
        <div class="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center">
          <span class="text-gray-400">Profile picture / placeholder</span>
        </div>

        <div>
          <h2 class="text-xl font-semibold">{{ nameText }}</h2>
          <p class="text-sm text-gray-600 mb-2">{{ bio }}</p>
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-500">Rating:</span>
            <div class="flex gap-1">
              <span
                v-for="n in rating || 0"
                :key="n"
                class="w-3 h-3 bg-yellow-400 rounded-full shadow"
              ></span>
              <span v-if="!rating" class="text-sm text-gray-400">—</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <router-link to="/creator" class="text-blue-700 underline">Back to creators</router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { findCreatorById } from '../data/creators'

const route = useRoute()
const id = route.params.id || 'unknown'

const creator = findCreatorById(id)
const nameText = creator ? creator.name : `Creator #${id}`
const rating = creator ? creator.rating : null
const bio = creator ? creator.bio : 'No biography available.'
</script>

<style scoped>
.shadow-art {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.06);
}
</style>
