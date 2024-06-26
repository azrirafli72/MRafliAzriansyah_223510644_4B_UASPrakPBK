<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn color="secondary" @click="drawer = !drawer">MENU</q-btn>
        <q-toolbar-title>UAS Project Praktikum PBK Azri</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="left" overlay>
      <q-list>
        <q-item to="/" clickable v-ripple>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item v-for="task in tasks" :key="task.id" :to="`/task/${task.id}`" clickable v-ripple>
          <q-item-section>{{ task.name }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>&copy; 2024 UAS Project</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const tasks = ref([
  { id: 1, name: 'Tugas 1' },
  { id: 2, name: 'Tugas 2' },
  { id: 3, name: 'Tugas 3' },
  { id: 4, name: 'Tugas 4' },
  { id: 5, name: 'Tugas 5' },
  { id: 6, name: 'Tugas 6' },
  { id: 7, name: 'Tugas 7' },
]);
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
