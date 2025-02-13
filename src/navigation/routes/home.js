import { lazy } from "react";

const homeRoutes = [
  {
    path: "/home",
    component: lazy(() => import("@views/Home")),
    protected: true,
  },
];

export default homeRoutes;
