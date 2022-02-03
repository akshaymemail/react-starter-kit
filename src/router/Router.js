import React, { Fragment, lazy } from 'react'
import routes from './routes'
import { Navigate, Routes, Route } from 'react-router-dom'
import Login from '../views/Pages/Login'
const Home = lazy(() => import('../views/Pages/Home'))

function Router() {
  const isLoggedIn = false
  return (
    <Routes>
      {isLoggedIn && (
        <Fragment>
          <Route path="/" element={<Home />} />
          {routes.map((route, key) => {
            return (
              <Route
                key={key}
                path={route.path}
                element={<route.component />}
              />
            )
          })}
        </Fragment>
      )}

      {!isLoggedIn && <Route path="/login" element={<Login />} />}
      <Route
        path="*"
        element={isLoggedIn ? <Navigate to="/" /> : <Navigate to="/login" />}
      />
    </Routes>
  )
}

export default Router
