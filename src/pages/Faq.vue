<script setup>
import { ref } from "vue"

const faqs = ref([
  {
    q: "Gimana cara mulai komisi?",
    a: "Masuk ke profil kreator → klik Commission → isi form brief → lanjut chat untuk detail.",
    open: false,
  },
  {
    q: "Pembayaran gimana?",
    a: "Umumnya DP dulu (misal 50%), sisanya setelah karya selesai. Tergantung ketentuan kreator.",
    open: false,
  },
  {
    q: "Kalau mau revisi?",
    a: "Revisi ringan biasanya free. Revisi besar atau tambahan objek bisa kena biaya ekstra.",
    open: false,
  },
])

const toggle = (idx) => {
  faqs.value[idx].open = !faqs.value[idx].open
}
</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <div class="max-w-3xl mx-auto text-center mb-10">
      <h1 class="text-4xl font-extrabold text-[#363062] mb-2">FAQ</h1>
      <p class="text-[#4D4C7D]">
        Pertanyaan yang sering ditanya seputar komisi di Artlink.
      </p>
    </div>

    <div class="max-w-3xl mx-auto space-y-3">
      <div
        v-for="(f, i) in faqs"
        :key="i"
        class="bg-white border border-[#4D4C7D]/20 rounded-2xl shadow-sm overflow-hidden"
      >
        <button
          class="w-full flex items-center justify-between px-5 py-4 text-left"
          @click="toggle(i)"
        >
          <span class="font-semibold text-[#363062]">{{ f.q }}</span>
          <span class="text-[#F99417] text-xl">
            {{ f.open ? "−" : "+" }}
          </span>
        </button>

        <transition name="faq">
          <div v-if="f.open" class="px-5 pb-4 text-[#4D4C7D] text-sm leading-relaxed">
            {{ f.a }}
          </div>
        </transition>
      </div>
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
