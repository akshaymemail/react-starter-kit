import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "./routes";

function Navigation() {
  const { token } = useSelector((state) => state.auth);
  return (
    <Routes>
      {routes.map((Page, key) => {
        if (Page.protected) {
          return (
            <Route
              key={key}
              path={Page.path}
              element={
                <ProtectedRoute token={token} path="/auth/login">
                  <Page.component />
                </ProtectedRoute>
              }
            />
          );
        } else {
          return (
            <Route key={key} path={Page.path} element={<Page.component />} />
          );
        }
      })}
      <Route path="*" element={<Navigate to="/page-not-found" />} />
    </Routes>
  );
}

export default Navigation;

const ProtectedRoute = ({ children, token, path }) => {
  // Redirect to login if user is not authenticated
  return token ? children : <Navigate to={path} />;
};
