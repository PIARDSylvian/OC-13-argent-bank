import style from './style.module.scss'
import logo from '../../assets/argentBankLogo.png'

export default function Header() {
  const user = null // get user with redux

  return (
    <nav className={style['main-nav']}>
      <a className={style['main-nav-logo']} href="./index.html">
        <img
          className={style['main-nav-logo-image']}
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {user ? (
          <div>
            <a className={style['main-nav-item']} href="./user.html">
              <i className="fa fa-user-circle"></i>
              Tony
            </a>
            <a className={style['main-nav-item']} href="./index.html">
              <i className="fa fa-sign-out"></i> Sign Out
            </a>
          </div>
        ) : (
          <a className={style['main-nav-item']} href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  )
}
