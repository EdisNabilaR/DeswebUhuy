<script setup>
const steps = [
  "Lorem ipsum lorem ipsum.",
  "Lorem ipsum lorem ipsum.",
  "Lorem ipsum lorem ipsum.",
]
</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <div class="max-w-3xl mx-auto text-center mb-10">
      <h1 class="text-4xl font-extrabold text-[#363062] mb-2">Edis Nabila Ramadhani</h1>
      <p class="text-[#4D4C7D]">
        11211035 - Informatika - Institut Teknologi Kalimantan
      </p>
    </div>

    <div class="max-w-3xl mx-auto bg-white rounded-2xl border border-[#4D4C7D]/20 shadow-sm p-6">
      <ol class="space-y-4">
        <li
          v-for="(s, i) in steps"
          :key="i"
          class="flex gap-4 items-start"
        >
          <div class="w-8 h-8 flex items-center justify-center rounded-full bg-[#F99417]/15 text-[#F99417] font-bold">
            {{ i + 1 }}
          </div>
          <p class="text-[#363062] leading-relaxed">{{ s }}</p>
        </li>
      </ol>
    </div>


  </div>
</template>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: all 0.2s ease;
}
.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>