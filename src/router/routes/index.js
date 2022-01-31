import authRoutes from './auth'
import TodoRoutes from './todo'

const routes = [...TodoRoutes, ...authRoutes]

export default routes
