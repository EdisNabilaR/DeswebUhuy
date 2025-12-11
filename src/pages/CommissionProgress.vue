<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { commissions } from "@/data/commissions" 
// ✅ pake alias @ biar gak bingung "../../"

const route = useRoute()
const commissionId = Number(route.params.id)

const commission = computed(() =>
  commissions.find(c => c.id === commissionId)
)

// ✅ percent aman walau commission null / progress kosong
const percent = computed(() => {
  if (!commission.value || !commission.value.progress?.length) return 0
  const doneCount = commission.value.progress.filter(s => s.status === "done").length
  return Math.round((doneCount / commission.value.progress.length) * 100)
})
</script>


<template>
  <div class="container mx-auto px-6 py-12">

    <!-- kalau komisi gak ketemu -->
    <div v-if="!commission" class="text-center py-16">
      <h1 class="text-2xl font-bold mb-2">Komisi tidak ditemukan 😅</h1>
      <p class="text-gray-500">Coba balik ke halaman kreator.</p>
      <RouterLink to="/creator" class="text-blue-600 hover:underline">
        ← Balik ke Kreator
      </RouterLink>
    </div>

    <!-- kalau ketemu -->
    <div v-else>
      <h1 class="text-3xl font-bold mb-4">
        Progress: {{ commission.title }}
      </h1>

      <p class="text-gray-500 mb-6">
        Client: {{ commission.clientName }} • {{ commission.date }}
      </p>

      <!-- Progress bar -->
      <div class="w-full bg-gray-200 rounded-full h-3 my-4">
        <div
          class="h-3 bg-blue-600 rounded-full transition-all"
          :style="{ width: percent + '%' }"
        ></div>
      </div>

      <p class="text-sm text-gray-600 mb-6">
        {{ percent }}% selesai
      </p>

      <!-- Steps -->
      <div class="space-y-4">
        <div
          v-for="step in commission.progress"
          :key="step.step"
          class="p-4 border rounded-xl bg-white shadow flex items-center gap-3"
        >
          <div class="text-lg">
            <span v-if="step.status === 'done'" class="text-green-600">✓</span>
            <span v-else-if="step.status === 'in-progress'" class="text-blue-600">⏳</span>
            <span v-else class="text-gray-400">○</span>
          </div>

          <div class="flex-1">
            <p class="font-semibold">{{ step.step }}</p>
            <p class="text-xs text-gray-500 capitalize">{{ step.status }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
