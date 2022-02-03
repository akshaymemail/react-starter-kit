import React, { Fragment, lazy } from 'react'
import routes from './routes'
import { Navigate, Routes, Route } from 'react-router-dom'
import Login from '../views/Pages/Login'
import { isUserLoggedIn } from '../auth/utils'
const Home = lazy(() => import('../views/Pages/Home'))

function Router() {
  return (
    <Routes>
      {isUserLoggedIn() && (
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

      {!isUserLoggedIn() && <Route path="/login" element={<Login />} />}
      <Route
        path="*"
        element={
          isUserLoggedIn() ? <Navigate to="/" /> : <Navigate to="/login" />
        }
      />
    </Routes>
  )
}

export default Router
