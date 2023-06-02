import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './style.scss'

/**
 * Layout component
 *
 * @returns JSX.Element
 */
function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
