import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './style.scss'

/**
 * Layout component
 *
 * @returns JSX.Element
 */
function Layout(): JSX.Element {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main className={`${location.pathname !== '/' && 'bg-dark'}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
