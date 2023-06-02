import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Layout from '../layout'
import Home from '../../pages/Home'

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
        path: '/404',
        // element: <Error />,
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}
export default Router
