import Vue from 'vue';
import VueRouter from 'vue-router';
import Reference from '../components/pages/ReferencePage.vue';
import Operation from '../components/pages/OperationPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'reference',
    component: Reference,
  },
  {
    path: '/ope',
    name: 'operation',
    component: Operation,
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
