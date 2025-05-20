import { createRouter, createWebHistory } from 'vue-router';
import Lunch from './Lunch.vue';
import Developer from './Developer.vue';
import Home from './Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/lunch', component: Lunch },
  { path: '/developer', component: Developer },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
