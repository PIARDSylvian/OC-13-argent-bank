import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header'
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
      <Header />
      <main className={`${location.pathname !== '/' && 'bg-dark'}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
