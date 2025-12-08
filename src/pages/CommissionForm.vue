<script setup>
import { useRoute, RouterLink } from "vue-router";
import { ref, computed } from "vue";
import { creators } from "../data/creators";

// Ambil kreator
const route = useRoute();
const creatorId = Number(route.params.id);
const creator = creators.find(c => c.id === creatorId);

// Form data
const packageType = ref("");
const description = ref("");
const budget = ref("");
const deadline = ref("");
const contact = ref("");
const referenceLink = ref("");

// Harga otomatis berdasarkan paket
const packagePrices = {
  "sketch": 50000,
  "half-body": 120000,
  "full-body": 200000
};

// Update budget otomatis saat paket berubah
const updateBudget = () => {
  if (packageType.value && packagePrices[packageType.value]) {
    budget.value = packagePrices[packageType.value];
  }
};

// Modal sukses
const showSuccess = ref(false);

// Error message
const errorMsg = ref("");
const today = new Date().toISOString().split("T")[0];

// VALIDASI
const validateForm = () => {
  if (!packageType.value) return "Pilih jenis paket.";
  if (!description.value.trim()) return "Deskripsi komisi wajib diisi.";
  if (!contact.value.trim()) return "Kontak wajib diisi.";
  if (!budget.value || budget.value < 10000)
    return "Budget minimal Rp 10.000.";
  if (!deadline.value) return "Deadline wajib diisi.";
  if (deadline.value < today)
    return "Deadline tidak boleh sebelum hari ini.";

  return "";
};

// SUBMIT
const submitForm = () => {
  const err = validateForm();
  if (err) {
    errorMsg.value = err;
    return;
  }

  errorMsg.value = "";
  showSuccess.value = true;
};
</script>

<template>
  <div class="container mx-auto px-4 py-10">

    <!-- TITLE -->
    <h1 class="text-3xl font-bold mb-8 text-center">
      Form Komisi
    </h1>

    <!-- FORM WRAPPER -->
    <div class="bg-white shadow-xl rounded-2xl p-8 max-w-3xl mx-auto border border-gray-100">

      <!-- KREATOR INFO -->
      <div v-if="creator" class="mb-8">
        <p class="text-sm text-gray-500 mb-2">Kreator</p>

        <div class="flex items-center gap-4">
          <img
            :src="creator.avatar"
            class="w-14 h-14 rounded-full object-cover shadow"
          />

          <div>
            <p class="font-semibold text-gray-900 text-lg">{{ creator.name }}</p>
            <p class="text-xs text-gray-500">
              ⭐ {{ creator.rating }} • {{ creator.specialties.join(", ") }}
            </p>
          </div>
        </div>
      </div>

      <!-- ERROR MESSAGE -->
      <div
        v-if="errorMsg"
        class="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm"
      >
        ⚠️ {{ errorMsg }}
      </div>

      <!-- FORM -->
      <form @submit.prevent="submitForm" class="space-y-5">

        <!-- PAKET -->
        <div>
          <label class="block text-sm font-medium mb-1 text-gray-700">Paket</label>
          <select
            v-model="packageType"
            @change="updateBudget"
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none"
          >
            <option disabled value="">Pilih paket</option>
            <option value="sketch">Sketch — Rp 50.000</option>
            <option value="half-body">Half Body — Rp 120.000</option>
            <option value="full-body">Full Body — Rp 200.000</option>
          </select>
        </div>

        <!-- DESKRIPSI -->
        <div>
          <label class="block text-sm font-medium mb-1 text-gray-700">Deskripsi Komisi</label>
          <textarea
            v-model="description"
            rows="4"
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Jelaskan karakter, pose, warna, mood, referensi, dll..."
          ></textarea>
        </div>

        <!-- BUDGET & DEADLINE -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1 text-gray-700">Budget (Rp)</label>
            <input
              v-model="budget"
              type="number"
              class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Contoh: 150000"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1 text-gray-700">Deadline</label>
            <input
              v-model="deadline"
              type="date"
              :min="today"
              class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div>
        </div>

        <!-- CONTACT -->
        <div>
          <label class="block text-sm font-medium mb-1 text-gray-700">
            Kontak (LINE / Discord / Email)
          </label>
          <input
            v-model="contact"
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Line ID / Discord Tag / Email"
          />
        </div>

        <!-- REFERENSI -->
        <div>
          <label class="block text-sm font-medium mb-1 text-gray-700">
            Link Referensi (opsional)
          </label>
          <input
            v-model="referenceLink"
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Google Drive, Pinterest, dll"
          />
        </div>

        <!-- SUBMIT BUTTON -->
        <button
          type="submit"
          class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Kirim Request
        </button>
      </form>
    </div>

    <!-- SUCCESS MODAL -->
    <transition name="fade">
      <div
        v-if="showSuccess"
        class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
          <h2 class="text-xl font-bold text-gray-900 mb-3">
            Request Berhasil Dikirim! 🎉
          </h2>

          <p class="text-gray-600 mb-6 text-sm">
            Kreator akan segera meninjau permintaanmu.  
            Kamu akan dihubungi melalui kontak yang kamu berikan.
          </p>

          <div class="flex flex-col gap-3">
            <RouterLink
              :to="`/creator/${creatorId}`"
              class="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Kembali ke Profil Kreator
            </RouterLink>

            <RouterLink
              to="/"
              class="bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
            >
              Kembali ke Beranda
            </RouterLink>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
