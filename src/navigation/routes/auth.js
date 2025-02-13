import { lazy } from "react";

const authRoutes = [
  {
    path: "/auth/signin",
    component: lazy(() => import("@views/Auth/Signin")),
    protected: false,
  },
  {
    path: "/auth/signup",
    component: lazy(() => import("@views/Auth/Signup")),
    protected: false,
  },
  {
    path: "/auth/logout",
    component: lazy(() => import("@views/Auth/Logout")),
    protected: true,
  },
];

export default authRoutes;
