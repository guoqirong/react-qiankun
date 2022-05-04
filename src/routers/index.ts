import { lazy } from 'react';

const routes = [
  {
    path: "/",
    exact: true,
    namespace: 'index',
    component: lazy(() => import('../views/index')),
  }
];

export default routes;