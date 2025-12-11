<script setup>
const steps = [
  "Pilih kreator sesuai style yang kamu suka.",
  "Klik tombol Commission di profil kreator.",
  "Isi brief: referensi, ukuran, deadline, dan budget.",
  "Diskusi detail lewat chat kreator.",
  "Bayar DP, proses dimulai, pantau progress komisi.",
  "Setelah final jadi, kreator kirim hasilnya ke kamu.",
]
</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <div class="max-w-3xl mx-auto text-center mb-10">
      <h1 class="text-4xl font-extrabold text-[#363062] mb-2">Cara Komisi</h1>
      <p class="text-[#4D4C7D]">
        Panduan singkat untuk memesan karya ke kreator Artlink.
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
