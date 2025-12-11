<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { gallery } from "../data/gallery"
import { creators } from "../data/creators"
import GalleryDetailModal from "../components/GalleryDetailModal.vue"

const route = useRoute()
const router = useRouter()

const item = computed(
  () => gallery.find((g) => g.id === Number(route.params.id)) || null
)

const creator = computed(() => {
  if (!item.value) return null
  return creators.find((c) => c.id === item.value.creatorId) || null
})

// modal close = kembali ke gallery list
const closeModal = () => {
  router.push("/gallery")
}
</script>

<template>
  <div v-if="!item" class="text-center py-20 text-gray-500">
    Karya tidak ditemukan.
  </div>

  <GalleryDetailModal
    v-else
    :item="item"
    :creator="creator"
    @close="closeModal"
  />
</template>
