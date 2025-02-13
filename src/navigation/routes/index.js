import authRoutes from "./auth";
import homeRoutes from "./home";
import pagesRoutes from "./pages";
import todoRoutes from "./todo";

const routes = [...pagesRoutes, ...authRoutes, ...homeRoutes, ...todoRoutes];

export default routes;
