<template>
  <DefaultLayout>
    <RouterView />
    <ChatWidget />  <!-- ➕ -->
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from './layouts/DefaultLayout.vue'
import ChatWidget from './components/ChatWidget.vue'
</script>
