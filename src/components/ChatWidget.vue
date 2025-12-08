<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const message = ref('')
const messages = ref([
  { from: 'system', text: 'Halo! Ada yang bisa kami bantu? 😊' },
])

const sendMessage = () => {
  if (!message.value.trim()) return
  messages.value.push({ from: 'user', text: message.value })
  message.value = ''

  // balasan dummy
  setTimeout(() => {
    messages.value.push({
      from: 'system',
      text: 'Terima kasih! Ini hanya demo chat ya 😆',
    })
  }, 600)
}
</script>

<template>
  <div class="fixed bottom-4 right-4 z-50">
    <!-- FAB -->
    <button
      v-if="!isOpen"
      @click="isOpen = true"
      class="rounded-full bg-blue-600 text-white px-4 py-3 shadow-lg hover:bg-blue-700"
    >
      Chat
    </button>

    <!-- POPUP -->
    <div
      v-else
      class="w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col overflow-hidden"
    >
      <div class="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
        <span class="font-semibold text-sm">Chat Support (Demo)</span>
        <button @click="isOpen = false">✕</button>
      </div>

      <div class="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
        <div
          v-for="(m, i) in messages"
          :key="i"
          :class="m.from === 'user' ? 'text-right' : 'text-left'"
        >
          <div
            :class="[
              'inline-block px-3 py-2 rounded-lg',
              m.from === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800',
            ]"
          >
            {{ m.text }}
          </div>
        </div>
      </div>

      <form @submit.prevent="sendMessage" class="p-3 border-t flex gap-2">
        <input
          v-model="message"
          class="flex-1 border rounded-lg px-3 py-2 text-sm"
          placeholder="Tulis pesan..."
        />
        <button
          type="submit"
          class="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm"
        >
          Kirim
        </button>
      </form>
    </div>
  </div>
</template>
