import React from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = React.lazy(() => import("@/pages/home"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));

const RouterProvider = () => {
  return (
    <Routes>
      <Route
        path="*"
        caseSensitive
        element={
          <React.Suspense fallback={<p/>}>
            <NotFound />
          </React.Suspense>
        }
      />
      <Route
        path="/"
        caseSensitive
        element={
          <React.Suspense fallback={<p/>}>
            <Home />
          </React.Suspense>
        }
      />
    </Routes>
  )
}

export default RouterProvider