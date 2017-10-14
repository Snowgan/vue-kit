import Vue from 'vue';
import VueRouter from 'vue-router';
import started from '@/components/started';
import alert from '@/components/alert';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: started,
}, {
  path: '/components/alert',
  component: alert,
  meta: {
    category: 'Components',
  },
}];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to, from, next) => {
//   next();
// })

export default router;