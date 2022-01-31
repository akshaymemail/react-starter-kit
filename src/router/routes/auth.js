import { lazy } from 'react'

const authRoutes = [
  {
    path: '/auth/login',
    component: lazy(() => import('../../views/Pages/Login')),
  },
  {
    path: '/auth/register',
    component: lazy(() => import('../../views/Pages/Register')),
  },
]

export default authRoutes
