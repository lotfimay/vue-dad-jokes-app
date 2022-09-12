import { createRouter, createWebHistory } from 'vue-router';

import JokesList from '../components/pages/JokesList.vue';
import AboutPage from '../components/pages/AboutPage.vue';
import JokePage from '../components/pages/JokePage.vue';
import HomePage from '../components/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    {
      path: '/jokes',
      name: 'jokes',
      component: JokesList,
    },
    { path: '/jokes/:id', name: 'joke', component: JokePage, props: true },
    { path: '/about', name: 'about', component: AboutPage },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else
      return {
        top: 0,
        left: 0,
      };
  },
});

export default router;
