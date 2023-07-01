import { useEffect } from 'react'
import style from './style.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { selectLogin } from '../../redux/selector'
import { logout } from '../../redux/login'

export default function Logout() {
  const token = sessionStorage.getItem('token')
  const user = useSelector(selectLogin)
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      dispatch(logout())
    }
    document.title = 'Logout - ArgentBank'
  }, [dispatch, token])

  return (
    <section className={style['sign-out-content']}>
      <h1 className="sr-only">logout</h1>
      {user.status === 'void' ? (
        <>
          <p>sucesfull logout</p>
        </>
      ) : (
        <>
          <i className="fa fa-spinner fa-pulse fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </>
      )}
    </section>
  )
}
