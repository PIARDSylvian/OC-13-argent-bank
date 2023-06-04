import { useEffect } from 'react'
import style from './style.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { selectLogin } from '../../redux/selector'
import { logout } from '../../redux/login'

export default function Logout() {
  const user = useSelector(selectLogin)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user.status === 'resolved') {
      dispatch(logout())
    }
  }, [dispatch, user])

  return <section className={style['sign-in-content']}>logout</section>
}
