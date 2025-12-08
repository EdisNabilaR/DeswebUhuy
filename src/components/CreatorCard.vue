<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  creator: {
    type: Object,
    required: true,
  },
})

const liked = ref(false)
const followers = ref(0)

const storageKeyLike = c => `artlink_like_${c}`
const storageKeyFollow = c => `artlink_follow_${c}`

onMounted(() => {
  liked.value = localStorage.getItem(storageKeyLike(props.creator.id)) === '1'
  followers.value = Number(localStorage.getItem(storageKeyFollow(props.creator.id))) || 0
})

const toggleLike = () => {
  liked.value = !liked.value
  localStorage.setItem(storageKeyLike(props.creator.id), liked.value ? '1' : '0')
}

const follow = () => {
  followers.value++
  localStorage.setItem(storageKeyFollow(props.creator.id), String(followers.value))
}
</script>

<template>
  <RouterLink :to="`/creator/${creator.id}`" class="block">
    <div
      class="bg-white shadow-md rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 
             transition cursor-pointer"
    >
      <img
        :src="creator.avatar"
        class="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
      />

      <h3 class="text-lg font-semibold text-center text-gray-900">
        {{ creator.name }}
      </h3>

      <p class="text-sm text-gray-600 text-center">
        ⭐ {{ creator.rating }}
      </p>

      <div class="flex flex-wrap justify-center gap-2 mt-3">
        <span
          v-for="tag in creator.specialties"
          :key="tag"
          class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Like & Follow -->
      <div class="mt-4 flex items-center justify-between text-xs">
        <button
          @click.stop="toggleLike"
          :class="[
            'px-3 py-1 rounded-full border flex items-center gap-1',
            liked ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-700'
          ]"
        >
          ❤ <span>{{ liked ? 'Liked' : 'Like' }}</span>
        </button>

        <button
          @click.stop="follow"
          class="px-3 py-1 rounded-full border bg-gray-50 hover:bg-gray-100 text-gray-700"
        >
          Follow • {{ followers }}
        </button>
      </div>
    </div>
  </RouterLink>
</template>
