import { lazy } from 'react';

const TodoRoutes = [
  {
    path: '/todo',
    component: lazy(() => import('../../views/Todo')),
  },
];

export default TodoRoutes;
