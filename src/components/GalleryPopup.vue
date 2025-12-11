<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[999]"
    @click.self="close"
  >
    <div
      class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-0"
    >

      <!-- TOP HEADER (CREATOR INFO + KOMISI BUTTON) -->
      <div class="flex items-center justify-between px-6 py-4 border-b">
        <div class="flex items-center gap-3">
          <img :src="creator.avatar" class="w-12 h-12 rounded-full" />

          <div>
            <p class="font-semibold text-gray-800">{{ creator.name }}</p>
            <p class="text-xs text-gray-500">
              ⭐ {{ creator.rating }} · {{ creator.specialties.join(" · ") }}
            </p>
          </div>
        </div>

        <RouterLink
          :to="`/commission/${creator.id}`"
          class="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700"
        >
          Pesan Komisi
        </RouterLink>
      </div>

      <!-- IMAGE -->
      <div class="flex justify-center bg-black">
        <img
          :src="item.image"
          class="max-h-[70vh] w-auto object-contain"
        />
      </div>

      <!-- DETAILS BELOW -->
      <div class="px-6 py-5">

        <!-- TITLE -->
        <h1 class="text-xl font-bold text-gray-900">{{ item.title }}</h1>

        <!-- PRICE -->
        <p class="text-blue-600 text-lg font-semibold mt-1">
          Rp {{ item.price.toLocaleString("id-ID") }}
        </p>

        <!-- DESCRIPTION -->
        <p class="mt-4 text-gray-700 text-sm leading-relaxed">
          {{ item.description || "Tidak ada deskripsi." }}
        </p>

        <!-- TAGS -->
        <div class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="tag in creator.specialties"
            :key="tag"
            class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
          >
            #{{ tag }}
          </span>
        </div>

        <!-- LIKE / COMMENT -->
        <div class="flex items-center gap-6 mt-6 text-gray-700">
          <button class="hover:text-red-500">❤️ {{ likes }}</button>
          <button class="hover:text-blue-500">💬 {{ comments }}</button>
          <button class="hover:text-green-600">🔗 Share</button>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { creators } from "../data/creators";

const props = defineProps({
  show: Boolean,
  item: Object,
});

const emits = defineEmits(["close"]);
const close = () => emits("close");

const likes = ref(250);
const comments = ref(18);

const creator = computed(() =>
  creators.find((c) => c.id === props.item.creatorId)
);
</script>
