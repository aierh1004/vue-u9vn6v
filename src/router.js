import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from 'CoachDetail.vue';
import CoachesList from 'CoachesList.vue';
import CoachRegister from '/CoachRegister.vue';
import ContactCoach from 'ContactCoach.vue';
import RequestReceived from 'RequestReceived.vue';
import NotFound from 'NotFound.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: { path: 'contact', component: ContactCoach },
    },
    { path: '/register', component: CoachRegister },
    { path: '/requests', component: RequestReceived },
    { path: '/:notfound(.*)', component: NotFound },
  ],
});
