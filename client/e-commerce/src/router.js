import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Cart from './views/Cart.vue';
import detailed from './views/details.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/items',
      name: 'items',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Home,
    },
    {
      path: '/myCart',
      name: 'myCart',
      component: Cart,
      children: [
        {
          path: ':id',
          name: 'detailed',
          component: detailed,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
