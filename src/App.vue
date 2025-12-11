<script setup>
import { RouterView, useRoute } from "vue-router"
import DefaultLayout from "./layouts/MainLayout.vue"
import SupportChatWidget from "./components/SupportChatWidget.vue"

const route = useRoute()
</script>

<template>
  <DefaultLayout>
    <RouterView />

    <!-- Support chat hanya untuk non-detail creator -->
    <SupportChatWidget
      v-if="!route.path.startsWith('/creator/')"
      :defaultOpen="false"
    />
  </DefaultLayout>
</template>
