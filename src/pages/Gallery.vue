<template>
  <main class="container mx-auto py-16 px-6 md:px-12 min-h-screen">
    <div class="grid md:grid-cols-4 gap-12">
      <!-- Kolom Kiri: Filter (tidak sticky) -->
      <aside class="md:col-span-1">
        <div class="bg-yellow-100 p-8 rounded-3xl shadow-xl">
          <h3 class="text-2xl font-semibold mb-6 border-b-2 pb-2 text-blue-900 border-blue-900">
            Filter
          </h3>

          <!-- Pencarian -->
          <label class="block text-gray-700 mb-2 font-medium">Pencarian</label>
          <input
            type="text"
            class="w-full p-3 mb-6 rounded-lg border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <!-- Kategori -->
          <label class="block text-gray-700 mb-2 font-medium">Kategori</label>
          <div class="mb-6 h-2 bg-yellow-300 rounded-full"></div>

          <!-- Harga -->
          <label class="block text-gray-700 mb-2 font-medium">Harga</label>
          <input
            type="text"
            class="w-full p-3 mb-8 rounded-lg border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <!-- Tombol Reset -->
          <button
            class="w-full text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300 hover:opacity-80 bg-blue-800"
          >
            Reset Filter
          </button>
        </div>
      </aside>

      <!-- Kolom Kanan: Galeri Karya -->
      <section class="md:col-span-3">
        <h2 class="text-3xl font-bold mb-8 text-blue-900">Galeri</h2>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 justify-items-center">
          <!-- Kartu Galeri -->
          <div v-for="i in 15" :key="i" class="gallery-card w-full">
            <!-- Kontainer placeholder gambar + nama + tombol Visit -->
            <div
              class="w-full h-72 rounded-xl mb-3 bg-beige border-4 border-beige-dark relative flex flex-col justify-end p-3"
            >
              <div class="text-center font-semibold text-blue-900 mb-2">Kreator {{ i }}</div>
              <button
                class="w-full bg-blue-800 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.gallery-card {
  @apply relative flex flex-col items-center p-2 bg-white rounded-2xl shadow-lg transition transform hover:-translate-y-2 hover:shadow-xl;
}

/* Placeholder warna */
.bg-beige {
  background-color: var(--art-beige-light);
}
.border-beige-dark {
  border-color: var(--art-beige-dark);
}
</style>
