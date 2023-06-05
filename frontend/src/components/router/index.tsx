import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Layout from '../layout'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Logout from '../../pages/Logout'
import Profile from '../../pages/Profile'
import Error from '../../pages/404'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Navigate replace to="/404" />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/404',
        element: <Error />,
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}
export default Router
