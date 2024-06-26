<template>
    <q-page class="bg-light">
      <iframe :src="taskUrl" width="100%" height="600px" class="task-iframe"></iframe>
    </q-page>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const taskUrl = computed(() => {
    const taskId = route.params.id;
    const urls = {
      1: 'https://github.com/azrirafli72/tugas1-pbk-223510644.git?authuser=0',
      2: 'https://m-rafli-azriansyah-223510644-4b-pbkpraktikum-tugas2.vercel.app/',
      3: 'http://m-rafli-azriansyah-223510644-tugas3.vercel.app/?authuser=0',
      4: 'https://youtube.com',
      5: 'https://m-rafli-azriansyah-223510644-tugas5.vercel.app/?authuser=0',
      6: 'https://m-rafli-azriansyah-223510644-tugas6.vercel.app/?authuser=0',
      7: 'https://m-rafli-azriansyah-223510644-tugas7.vercel.app/?authuser=0',
    };
    return urls[taskId] || '';
  });
  </script>
  
  <style scoped>
  .bg-light {
    background: #f4f4f9;
    min-height: 100vh;
    padding: 20px;
  }
  
  .task-iframe {
    border: 2px solid #0a74da;
    border-radius: 10px;
  }
  </style>
  