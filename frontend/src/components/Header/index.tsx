import { Link } from 'react-router-dom'
import style from './style.module.scss'
import logo from '../../assets/argentBankLogo.png'
import { useSelector } from 'react-redux'
import { selectLogin } from '../../redux/selector'

export default function Header() {
  const user = useSelector(selectLogin)

  return (
    <nav className={style['main-nav']}>
      <Link className={style['main-nav-logo']} to="/">
        <img
          className={style['main-nav-logo-image']}
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {user.status === 'resolved' ? (
          <div>
            <Link className={style['main-nav-item']} to="/profile">
              <i className="fa fa-user-circle"></i>
              Tony
            </Link>
            <Link className={style['main-nav-item']} to="/logout">
              <i className="fa fa-sign-out"></i> Sign Out
            </Link>
          </div>
        ) : (
          <Link className={style['main-nav-item']} to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}
