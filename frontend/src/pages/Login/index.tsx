import { FormEvent, useEffect } from 'react'
import style from './style.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { selectLogin } from '../../redux/selector'
import { login, setLogin } from '../../redux/login'

import { useNavigate } from 'react-router-dom'

const INITIAL_STATE: stateType = {
  email: '',
  password: '',
  rememberMe: false,
}

type stateType = {
  email: string
  password: string
  rememberMe: boolean
}

export default function Login() {
  const user = useSelector(selectLogin)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (user.status === 'resolved') {
      navigate('/profile')
    }
    document.title = 'Login - ArgentBank'
  }, [navigate, user])

  const handleChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    if (target.type === 'checkbox') {
      // setForm({
      //   ...form,
      //   [target.id]: target.checked as stateType['rememberMe'],
      // })
    } else {
      dispatch(
        setLogin({
          [target.id]: target.value as
            | stateType['email']
            | stateType['password'],
        })
      )
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(login)
  }

  const handleFocus = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    const user = {
      [target.id]: '' as stateType['password'],
    }
    target.value = ''
    dispatch(setLogin(user))
  }

  return (
    <section className={style['sign-in-content']}>
      <i className={`fa fa-user-circle ${style['sign-in-icon']}`}></i>
      <h1>Sign In</h1>
      {user.error && <p>{user.error}</p>}
      {user.status === 'pending' && (
        <>
          <i className="fa fa-spinner fa-pulse fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </>
      )}
      <form>
        <div className={style['input-wrapper']}>
          <label htmlFor={Object.keys(INITIAL_STATE)[0]}>Username</label>
          <input
            type="text"
            id={Object.keys(INITIAL_STATE)[0]}
            onChange={handleChange}
            disabled={user.status === 'pending'}
          />
        </div>
        <div className={style['input-wrapper']}>
          <label htmlFor={Object.keys(INITIAL_STATE)[1]}>Password</label>
          <input
            type="password"
            id={Object.keys(INITIAL_STATE)[1]}
            onFocus={handleFocus}
            onChange={handleChange}
            disabled={user.status === 'pending'}
          />
        </div>
        <div className={style['input-remember']}>
          <input
            type="checkbox"
            id={Object.keys(INITIAL_STATE)[2]}
            onChange={handleChange}
            checked={false}
            disabled={user.status === 'pending'}
          />
          <label htmlFor={Object.keys(INITIAL_STATE)[2]}>Remember me</label>
        </div>
        <button
          type="submit"
          className={style['sign-in-button']}
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </form>
    </section>
  )
}
