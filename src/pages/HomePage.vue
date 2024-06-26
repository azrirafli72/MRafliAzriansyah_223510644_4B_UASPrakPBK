<template>
    <q-page class="flex flex-center bg-light">
      <WeatherWidget />
    </q-page>
  </template>
  
  <script setup>
  import WeatherWidget from '../components/WeatherWidget.vue';
  </script>
  
  <style scoped>
  .bg-light {
    background: url('../assets/bg.jpg') no-repeat center center fixed; /* Ganti URL dengan path gambar background Anda */
    background-size: cover; /* Menutup seluruh layar */
  }
</style>