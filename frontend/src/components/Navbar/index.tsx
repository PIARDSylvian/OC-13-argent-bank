import style from './style.module.scss'
import logo from '../../assets/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { selectToken, selectProfile } from '../../redux/selector'
import { profile } from '../../redux/profile'

export default function Navbar() {
  const token = useSelector(selectToken)
  const user = useSelector(selectProfile)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      dispatch(profile(token))
    }
  }, [navigate, dispatch])

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
              {user.info.firstName}
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
