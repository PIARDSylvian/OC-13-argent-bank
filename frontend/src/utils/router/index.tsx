import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import App from '../../App'

const router = createBrowserRouter([
  {
    // element: <Layout />,
    errorElement: <Navigate replace to="/404" />,
    children: [
      {
        path: '/',
        element: <App />,
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
