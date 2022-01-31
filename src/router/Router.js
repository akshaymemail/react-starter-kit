import React, { lazy } from 'react'
import routes from './routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Home = lazy(() => import('../views/Pages/Home'))
const NoMatch = lazy(() => import('../views/Pages/NoMatch'))

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {routes.map((route, key) => {
          return (
            <Route key={key} path={route.path} element={<route.component />} />
          )
        })}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
