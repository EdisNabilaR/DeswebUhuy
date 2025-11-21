<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  creator: {
    type: Object,
    required: true,
  },
})

const filledStars = computed(() => {
  const r = Number(props.creator?.rating) || 0
  return Array.from({ length: Math.min(5, Math.max(0, r)) })
})

const emptyStars = computed(() => {
  const r = Number(props.creator?.rating) || 0
  return Array.from({ length: Math.max(0, 5 - Math.min(5, r)) })
})
</script>

<template>
  <div class="creator-card">
    <div class="profile-placeholder" aria-hidden="true"></div>

    <h3 class="creator-name mt-2">{{ creator.name }}</h3>
    <p class="creator-role text-sm text-gray-600 mb-3">ID: {{ creator.id }}</p>

    <div class="rating-dots mb-4" aria-label="rating">
      <template v-for="(_, i) in filledStars" :key="`f-${i}`">
        <span class="dot dot-filled"></span>
      </template>
      <template v-for="(_, i) in emptyStars" :key="`e-${i}`">
        <span class="dot dot-empty"></span>
      </template>
    </div>

    <router-link :to="`/creator/${creator.id}`" class="visit-button">Visit</router-link>
  </div>
</template>

<style scoped>
.creator-card {
  flex-shrink: 0;
  width: 100%;
  max-width: 260px;
  padding: 18px;
  background-color: var(--art-beige-light);
  border-radius: 15px;
  border: 1px solid var(--art-beige-dark);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
}

.profile-placeholder {
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 50%;
  margin-bottom: 15px;
}

.creator-name {
  font-weight: 700;
  color: #2b3a4f;
  text-align: center;
}

.creator-role {
  color: #5d728a;
}

.rating-dots {
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #dfe7ef;
}

.dot-filled {
  background-color: #f6c84c;
}

.dot-empty {
  background-color: #dfe7ef;
}

.visit-button {
  background-color: var(--art-blue-dark);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
  text-decoration: none;
  display: inline-block;
}

.visit-button:hover {
  background-color: rgba(43, 58, 79, 0.8); /* ganti color-mix agar aman */
}
</style>
