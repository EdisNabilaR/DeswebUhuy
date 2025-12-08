<template>
  <div class="w-full">

    <!-- ===== HERO / SLOGAN ===== -->
    <section class="w-full py-20 bg-gradient-to-b from-blue-50 to-white">
      <div class="container mx-auto px-6">
        <div
          class="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10 text-center border border-gray-100"
        >
          <h1 class="text-4xl font-extrabold text-gray-900 mb-4">
            For artists, by artists 🎨
          </h1>

          <p class="text-gray-600 text-lg leading-relaxed">
            Artlink hadir untuk mempertemukan kreator dan klien secara mudah, 
            profesional, dan transparan. Dibangun dengan semangat untuk 
            mendukung perkembangan seniman digital Indonesia.
          </p>
        </div>
      </div>
    </section>

    <!-- ===== SECTION DIVIDER ===== -->
    <div class="w-full border-t border-gray-200 my-16"></div>

    <!-- ===== ABOUT ART LINK ===== -->
    <section class="container mx-auto px-6 text-center mb-20">
      <h2 class="text-3xl font-bold mb-6">Tentang Artlink</h2>

      <p class="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
        Artlink adalah platform komisi digital yang mempermudah kreator dan klien untuk bekerja sama.
        Kami percaya bahwa setiap seniman memiliki gaya unik yang layak dikenal. 
        Karena itu, Artlink menyediakan ruang aman & profesional bagi kreator untuk memamerkan karya,
        menerima komisi, dan membangun portofolio digital mereka.
      </p>
    </section>

    <!-- ===== SECTION DIVIDER ===== -->
    <div class="w-full border-t border-gray-200 my-16"></div>

    <!-- ===== VISI & MISI ===== -->
    <section class="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-10 mb-24">

      <div class="bg-white shadow rounded-2xl p-8 border text-center">
        <h3 class="text-xl font-bold mb-3">Visi</h3>
        <p class="text-gray-600 leading-relaxed">
          Menjadi platform komisi kreatif terbesar dan paling terpercaya di Indonesia —
          tempat kreator berkembang dan klien menemukan talent terbaik.
        </p>
      </div>

      <div class="bg-white shadow rounded-2xl p-8 border text-center">
        <h3 class="text-xl font-bold mb-3">Misi</h3>
        <p class="text-gray-600 leading-relaxed">
          Memberikan ruang profesional bagi kreator, mendukung proses kerja yang adil,
          serta membangun ekosistem yang mempermudah kolaborasi kreatif di seluruh Indonesia.
        </p>
      </div>

    </section>

    <!-- ===== SECTION DIVIDER ===== -->
    <div class="w-full border-t border-gray-200 my-16"></div>

    <!-- ===== CONTACT ===== -->
    <section class="container mx-auto px-6 mb-32">
      <h2 class="text-3xl font-bold mb-10 text-center">Kontak Kami</h2>

      <div class="grid md:grid-cols-2 gap-10">

        <!-- Form -->
        <form class="space-y-4 bg-white shadow rounded-xl p-8 border">
          <input type="text" placeholder="Nama"
                 class="w-full border px-4 py-2 rounded-md" />

          <input type="email" placeholder="Email"
                 class="w-full border px-4 py-2 rounded-md" />

          <textarea rows="4" placeholder="Pesan"
                    class="w-full border px-4 py-2 rounded-md"></textarea>

          <button type="button"
                  class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Kirim
          </button>
        </form>

        <!-- Info -->
        <div class="bg-gray-50 border rounded-xl p-8 shadow">
          <p class="mb-3"><strong>Email:</strong> info@artlink.com</p>
          <p class="mb-3"><strong>Telepon:</strong> +62 812-3456-7890</p>
          <p><strong>Alamat:</strong> Jl. Kreator No. 123, Jakarta</p>
        </div>
      </div>

    </section>

  </div>
</template>
