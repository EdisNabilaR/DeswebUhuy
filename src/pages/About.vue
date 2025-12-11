<template>
  <div class="w-full">

    <!-- ===== HERO WITH BACKGROUND (SERAGAM STYLE) ===== -->
    <section
      class="relative w-full py-24 bg-cover bg-center bg-no-repeat"
      style="background-image: url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80');"
    >
      <!-- Overlay gradient blur -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 backdrop-blur-sm"
      ></div>

      <div class="relative container mx-auto px-6 flex justify-center">
        <div
          class="max-w-3xl mx-auto bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-10 text-center border border-[#4D4C7D]/25"
        >
          <h1 class="text-4xl font-extrabold text-[#363062] mb-4">
            For artists, by artists 🎨
          </h1>

          <p class="text-[#4D4C7D] text-lg leading-relaxed">
            Artlink hadir untuk mempertemukan kreator dan klien secara mudah, profesional,
            dan transparan. Dibangun untuk mendukung perkembangan seniman digital Indonesia.
          </p>
        </div>
      </div>
    </section>

    <!-- ===== DIVIDER ===== -->
    <div class="w-full border-t border-[#4D4C7D]/20 my-16"></div>

    <!-- ===== ABOUT SECTION ===== -->
    <section class="container mx-auto px-6 text-center mb-20">
      <h2 class="text-3xl font-bold mb-6 text-[#363062]">Tentang Artlink</h2>

      <p class="max-w-4xl mx-auto text-[#4D4C7D] text-lg leading-relaxed">
        Artlink adalah platform komisi digital yang mempermudah kreator dan klien untuk bekerja sama.
        Kami percaya bahwa setiap seniman memiliki gaya unik yang layak dikenal. Karena itu,
        Artlink menyediakan ruang aman & profesional bagi kreator untuk memamerkan karya,
        menerima komisi, dan membangun portofolio digital mereka.
      </p>
    </section>

    <!-- ===== DIVIDER ===== -->
    <div class="w-full border-t border-[#4D4C7D]/20 my-16"></div>

    <!-- ===== VISI & MISI ===== -->
    <section class="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-10 mb-24">
      <div
        class="bg-white shadow rounded-2xl p-8 border border-[#4D4C7D]/25 text-center hover:shadow-lg transition"
      >
        <h3 class="text-xl font-bold mb-3 text-[#363062]">Visi</h3>
        <p class="text-[#4D4C7D] leading-relaxed">
          Menjadi platform komisi kreatif terbesar dan paling terpercaya di Indonesia —
          tempat kreator berkembang dan klien menemukan talent terbaik.
        </p>
      </div>

      <div
        class="bg-white shadow rounded-2xl p-8 border border-[#4D4C7D]/25 text-center hover:shadow-lg transition"
      >
        <h3 class="text-xl font-bold mb-3 text-[#363062]">Misi</h3>
        <p class="text-[#4D4C7D] leading-relaxed">
          Memberikan ruang profesional bagi kreator, mendukung proses kerja yang adil,
          serta membangun ekosistem yang mempermudah kolaborasi kreatif di seluruh Indonesia.
        </p>
      </div>
    </section>

    <!-- ===== DIVIDER ===== -->
    <div class="w-full border-t border-[#4D4C7D]/20 my-16"></div>

    <!-- ===== CONTACT SECTION ===== -->
    <section class="container mx-auto px-6 mb-32">
      <h2 class="text-3xl font-bold mb-10 text-center text-[#363062]">Kontak Kami</h2>

      <div class="grid md:grid-cols-2 gap-10">

        <!-- FORM -->
        <form class="space-y-4 bg-white shadow rounded-2xl p-8 border border-[#4D4C7D]/25">
          <input
            type="text"
            placeholder="Nama"
            class="w-full border border-[#4D4C7D]/30 px-4 py-3 rounded-xl
                   focus:outline-none focus:ring focus:ring-[#F99417]/25 focus:border-[#F99417]"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full border border-[#4D4C7D]/30 px-4 py-3 rounded-xl
                   focus:outline-none focus:ring focus:ring-[#F99417]/25 focus:border-[#F99417]"
          />
          <textarea
            rows="4"
            placeholder="Pesan"
            class="w-full border border-[#4D4C7D]/30 px-4 py-3 rounded-xl
                   focus:outline-none focus:ring focus:ring-[#F99417]/25 focus:border-[#F99417]"
          ></textarea>

          <button
            type="button"
            class="w-full bg-[#F99417] text-white py-3 rounded-xl font-semibold
                   hover:brightness-95 active:scale-[0.98] transition shadow"
          >
            Kirim
          </button>
        </form>

        <!-- CONTACT INFO -->
        <div class="bg-[#F5F5F5] border border-[#4D4C7D]/25 rounded-2xl p-8 shadow">
          <p class="mb-3 text-[#363062]">
            <strong>Email:</strong> admin@artlink.com
          </p>
          <p class="mb-3 text-[#363062]">
            <strong>Telepon:</strong> +62 812-3456-7890
          </p>
          <p class="text-[#363062]">
            <strong>Alamat:</strong> Jl. Sei Wain No. 50, Balikpapan
          </p>
        </div>

      </div>
    </section>

  </div>
</template>
