<template>
  <section class="container mx-auto px-4 py-12 max-w-xl">
    <div
      class="bg-white/90 border border-[#4D4C7D]/25 shadow-xl rounded-2xl p-8 md:p-10"
    >
      <!-- judul + subjudul rata tengah -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-extrabold mb-2 text-[#363062]">
          Join as Creator
        </h1>
        <p class="text-[#4D4C7D]">
          Daftarkan portofolio kamu dan mulai terima komisi!
        </p>
      </div>

      <form class="space-y-4">
        <input
          class="w-full border border-[#4D4C7D]/30 p-3 rounded-xl
                 focus:outline-none focus:ring focus:ring-[#F99417]/25 focus:border-[#F99417]"
          placeholder="Nama kreator"
        />

        <input
          class="w-full border border-[#4D4C7D]/30 p-3 rounded-xl
                 focus:outline-none focus:ring focus:ring-[#F99417]/25 focus:border-[#F99417]"
          placeholder="Email"
        />

        <input
          class="w-full border border-[#4D4C7D]/30 p-3 rounded-xl
                 focus:outline-none focus:ring focus:ring-[#F99417]/25 focus:border-[#F99417]"
          placeholder="Link portofolio (IG/Twitter/Drive)"
        />

        <textarea
          class="w-full border border-[#4D4C7D]/30 p-3 rounded-xl
                 focus:outline-none focus:ring focus:ring-[#F99417]/25 focus:border-[#F99417]"
          rows="4"
          placeholder="Deskripsi singkat & spesialisasi"
        ></textarea>

        <!-- tombol daftar biru -->
        <button
          type="button"
          class="w-full bg-[#363062] text-white p-3 rounded-xl font-semibold
                 hover:bg-[#4D4C7D] active:scale-[0.98] transition shadow"
        >
          Daftar
        </button>
      </form>
    </div>
  </section>
</template>
