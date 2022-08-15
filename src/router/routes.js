const routes = [
  {
    path: '/',
    meta: { requiresAuth: true },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Login',
        path: '/login',
        component: () => import('src/pages/Login.vue'),
        meta: { requiresAuth: false },
      },
      {
        name: 'Home',
        path: '',
        component: () => import('src/pages/Index.vue'),
      },
      {
        name: 'Error',
        path: 'error',
        component: () => import('src/pages/Error.vue'),
      },
      {
        name: 'Movies',
        path: 'movies',
        component: () => import('src/pages/Movies.vue'),
      },
      {
        name: 'Movie',
        path: 'movies/:id',
        component: () => import('src/pages/Movie.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
