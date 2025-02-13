import { lazy } from "react";

const todoRoutes = [
  {
    path: "/todo",
    component: lazy(() => import("@views/Todo")),
    protected: true,
  },
];

export default todoRoutes;
