import { createRouter, createWebHistory } from 'vue-router';
import Lunch from './Lunch.vue';
import Developer from './Developer.vue';
import Discussion from './Discussion.vue';
import Home from './Home.vue';

const routes = [
  { path: '/', component: Home, meta: { title: 'AI Slide Decks' } },
  { path: '/lunch', component: Lunch, meta: { title: 'How AI Works' } },
  { path: '/developer', component: Developer, meta: { title: 'AI Assistants for Developers' } },
  { path: '/developer-discussion', component: Discussion, meta: { title: 'AI Assistants for Developers' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'AI Slide Decks';
  next();
});

export default router;
