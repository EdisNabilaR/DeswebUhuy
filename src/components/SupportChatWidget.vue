<script setup>
import { ref, onMounted, watch, nextTick } from "vue"

const props = defineProps({
  defaultOpen: { type: Boolean, default: false },
})

const emit = defineEmits(["close", "open"])

// state chat
const message = ref("")
const messages = ref([])
const scrollArea = ref(null)

const isOpen = ref(props.defaultOpen)
const isMinimized = ref(!props.defaultOpen)

// draggable
const pos = ref({ x: 0, y: 0 })
const dragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })

const W = 320
const H = 384

const storageKey = "artlink_support_chat"

const introText = "Halo! Ada yang bisa Artlink bantu? 😊"
const titleText = "Chat Bantuan Artlink"

const addSystemMessage = (text) => {
  messages.value.push({ from: "system", text, ts: Date.now() })
}

const scrollToBottom = () => {
  if (scrollArea.value) {
    scrollArea.value.scrollTop = scrollArea.value.scrollHeight
  }
}

const loadMessages = () => {
  messages.value = []
  try {
    const raw = localStorage.getItem(storageKey)
    if (raw) messages.value = JSON.parse(raw)
    else addSystemMessage(introText)
  } catch {
    addSystemMessage(introText)
  }
  nextTick(scrollToBottom)
}

const clampPos = (p) => {
  const maxX = window.innerWidth - W - 16
  const maxY = window.innerHeight - H - 16
  return {
    x: Math.min(Math.max(p.x, 16), maxX),
    y: Math.min(Math.max(p.y, 16), maxY),
  }
}

onMounted(() => {
  pos.value = clampPos({
    x: window.innerWidth - W - 16,
    y: window.innerHeight - H - 16,
  })

  loadMessages()

  window.addEventListener("resize", () => {
    pos.value = clampPos(pos.value)
  })
})

watch(
  messages,
  (val) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(val))
    } catch {}
    nextTick(scrollToBottom)
  },
  { deep: true }
)

watch(
  () => props.defaultOpen,
  (v) => {
    isOpen.value = v
    isMinimized.value = !v
    if (v) emit("open")
  }
)

const sendMessage = () => {
  const text = message.value.trim()
  if (!text) return

  messages.value.push({ from: "user", text, ts: Date.now() })
  message.value = ""

  setTimeout(() => {
    messages.value.push({
      from: "system",
      text: "Ini demo chat bantuan Artlink ya 😄",
      ts: Date.now(),
    })
  }, 600)
}

// drag handlers
const onPointerDown = (e) => {
  dragging.value = true
  dragOffset.value = {
    x: e.clientX - pos.value.x,
    y: e.clientY - pos.value.y,
  }
  e.target.setPointerCapture?.(e.pointerId)
}
const onPointerMove = (e) => {
  if (!dragging.value) return
  pos.value = clampPos({
    x: e.clientX - dragOffset.value.x,
    y: e.clientY - dragOffset.value.y,
  })
}
const onPointerUp = () => (dragging.value = false)

const minimize = () => (isMinimized.value = true)
const closeWidget = () => {
  isMinimized.value = true
  isOpen.value = false
  emit("close")
}
const openWidget = () => {
  isOpen.value = true
  isMinimized.value = false
  emit("open")
}
</script>

<template>
  <!-- LAUNCHER (NO BORDERLINE) -->
  <button
    v-if="isMinimized"
    class="fixed bottom-8 right-6 z-[999]
           bg-[#F99417] text-white
           px-5 py-3 rounded-full shadow-xl
           hover:brightness-95 active:scale-95
           transition flex items-center gap-2"
    @click="openWidget"
  >
    💬
    <span class="text-sm font-semibold">Chat Bantuan</span>
  </button>

  <!-- WINDOW -->
  <div
    v-else
    class="fixed z-[999]"
    :style="{ left: pos.x + 'px', top: pos.y + 'px' }"
  >
    <div
      class="w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col overflow-hidden border border-[#E5E7EB]"
    >
      <!-- HEADER -->
      <div
        class="bg-[#363062] text-white px-4 py-3 flex justify-between items-center cursor-move select-none"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
      >
        <div class="flex flex-col pointer-events-none">
          <span class="font-semibold text-sm">{{ titleText }}</span>
          <span class="text-[11px] opacity-80">
            Demo chat bantuan — belum real-time
          </span>
        </div>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="text-lg leading-none hover:text-gray-200"
            @click.stop="minimize"
          >
            —
          </button>
          <button
            type="button"
            class="text-lg leading-none hover:text-gray-200"
            @click.stop="closeWidget"
          >
            ✕
          </button>
        </div>
      </div>

      <!-- MESSAGES -->
      <div
        ref="scrollArea"
        class="flex-1 p-3 space-y-2 overflow-y-auto text-sm bg-[#F5F5F5]"
      >
        <div
          v-for="(m, i) in messages"
          :key="i"
          :class="m.from === 'user' ? 'text-right' : 'text-left'"
        >
          <div
            :class="[
              'inline-block px-3 py-2 rounded-lg max-w-[80%] break-words',
              m.from === 'user'
                ? 'bg-[#F99417] text-white'
                : 'bg-white text-gray-800 border border-gray-200',
            ]"
          >
            {{ m.text }}
          </div>
        </div>
      </div>

      <!-- INPUT -->
      <form
        @submit.prevent="sendMessage"
        class="p-3 border-t flex gap-2 bg-white"
      >
        <input
          v-model="message"
          class="flex-1 border rounded-lg px-3 py-2 text-sm
                 focus:outline-none focus:ring focus:ring-[#F99417]/30
                 focus:border-[#F99417]"
          placeholder="Tulis pesan..."
        />
        <button
          type="submit"
          class="bg-[#F99417] text-white px-3 py-2 rounded-lg text-sm
                 hover:brightness-95 active:scale-[0.97] transition"
        >
          Kirim
        </button>
      </form>
    </div>
  </div>
</template>
