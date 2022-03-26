import React, { Fragment, lazy } from 'react'
import routes from './routes'
import { Navigate, Routes, Route } from 'react-router-dom'
import Login from '../views/Pages/Login'
import { useSelector } from 'react-redux'
const Home = lazy(() => import('../views/Pages/Home'))

function Router() {
  const { token } = useSelector((state) => state.auth)
  return (
    <Routes>
      {token && (
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

      {!token && <Route path="/login" element={<Login />} />}
      <Route
        path="*"
        element={token ? <Navigate to="/" /> : <Navigate to="/login" />}
      />
    </Routes>
  )
}

export default Router
