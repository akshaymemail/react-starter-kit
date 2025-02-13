import { lazy } from "react";

const pagesRoutes = [
  {
    path: "/",
    component: lazy(() => import("@views/landing")),
    protected: false,
  },
  {
    path: "/page-not-found",
    component: lazy(() => import("@views/NoMatch")),
    protected: false,
  },
];

export default pagesRoutes;
