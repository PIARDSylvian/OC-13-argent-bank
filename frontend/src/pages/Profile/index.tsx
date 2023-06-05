import style from './style.module.scss'
import { useEffect, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectToken, selectProfile } from '../../redux/selector'
import { useSelector, useDispatch } from 'react-redux'
import {
  profile,
  setUserInfo,
  cancelUpdate,
  updateUserInfo,
  switchUpdate,
} from '../../redux/profile'

export default function Profile() {
  const token = useSelector(selectToken)
  const user = useSelector(selectProfile)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    } else {
      dispatch(profile(token))
    }
    document.title = 'Profile - ArgentBank'
  }, [navigate, dispatch, token])

  const handleClick = () => {
    dispatch(switchUpdate())
  }

  const handleChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    dispatch(
      setUserInfo({
        [target.id]: target.value,
      })
    )
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(updateUserInfo(token))
  }

  const handleCancel = (e: FormEvent) => {
    e.preventDefault()
    dispatch(cancelUpdate())
    handleClick()
  }

  return (
    <>
      <div className={style.header}>
        {user.updateOpen ? (
          <>
            <h1>Welcome back</h1>
            <form className={style.form}>
              <div>
                <input
                  type="text"
                  id="firstName"
                  onChange={handleChange}
                  disabled={user.status === 'pending'}
                  placeholder={user.info.firstName}
                />
                <input
                  type="text"
                  onChange={handleChange}
                  id="lastName"
                  disabled={user.status === 'pending'}
                  placeholder={user.info.lastName}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={`${style['update-button']} ${style.button}`}
                  onClick={handleSubmit}
                >
                  Save
                </button>
                <button
                  type="submit"
                  className={`${style['update-button']} ${style.button}`}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {user.status === 'resolved' &&
                `${user.info.firstName} ${user.info.lastName}!`}
            </h1>
            <button
              className={`${style['edit-button']} ${style.button}`}
              onClick={handleClick}
            >
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className={style.account}>
        <div className={style['account-content-wrapper']}>
          <h3 className={style['account-title']}>
            Argent Bank Checking (x8349)
          </h3>
          <p className={style['account-amount']}>$2,082.79</p>
          <p className={style['account-amount-description']}>
            Available Balance
          </p>
        </div>
        <div className={`${style['account-content-wrapper']} ${style.cta}`}>
          <button className={`${style['transaction-button']} ${style.button}`}>
            View transactions
          </button>
        </div>
      </section>
      <section className={style.account}>
        <div className={style['account-content-wrapper']}>
          <h3 className={style['account-title']}>
            Argent Bank Savings (x6712)
          </h3>
          <p className={style['account-amount']}>$10,928.42</p>
          <p className={style['account-amount-description']}>
            Available Balance
          </p>
        </div>
        <div className={`${style['account-content-wrapper']} ${style.cta}`}>
          <button className={`${style['transaction-button']} ${style.button}`}>
            View transactions
          </button>
        </div>
      </section>
      <section className={style.account}>
        <div className={style['account-content-wrapper']}>
          <h3 className={style['account-title']}>
            Argent Bank Credit Card (x8349)
          </h3>
          <p className={style['account-amount']}>$184.30</p>
          <p className={style['account-amount-description']}>Current Balance</p>
        </div>
        <div className={`${style['account-content-wrapper']} ${style.cta}`}>
          <button className={`${style['transaction-button']} ${style.button}`}>
            View transactions
          </button>
        </div>
      </section>
    </>
  )
}
