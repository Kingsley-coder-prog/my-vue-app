import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachesDetail';
import CoachesList from './pages/coaches/CoachesList';
import CoachRegistration from './pages/coaches/CoachesRegistration';
import ContactCoach from './pages/requests/ContactCoach';
import RequestsReceived from './pages/requests/RequestsReceived';
import NotFound from './pages/NotFound';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [
        { path: '/contact', component: ContactCoach }, // /coaches//c1/contact
      ],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/request', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
