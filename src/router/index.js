import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import TaskPage from '../pages/TaskPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/task/:id', component: TaskPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
