import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/layouts/MainLayout'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/pages/Dashboard.vue')
      },
      {
        path: '/navigation',
        name: 'navigation',
        component: () => import('@/pages/Navigation.vue')
      },
      {
        path: '/farming',
        name: 'farming',
        component: () => import('@/pages/Farming.vue')
      },
      {
        path: '/population',
        name: 'population',
        component: () => import('@/pages/Population.vue')
      },
      {
        path: '/medical',
        name: 'medical',
        component: () => import('@/pages/Medical.vue')
      },
      {
        path: '/cryopods',
        name: 'cryopods',
        component: () => import('@/pages/Cryopods.vue')
      }
    ]
  }
];

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((_to, _from, next) => {
  console.log('routing');
  return next();
});

export default router;
