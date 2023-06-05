import style from './style.module.scss'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectToken, selectProfile } from '../../redux/selector'
import { useSelector, useDispatch } from 'react-redux'
import { profile } from '../../redux/profile'

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
  }, [navigate, dispatch])

  return (
    <>
      <div className={style.header}>
        <h1>
          Welcome back
          <br />
          {user.status === 'resolved' &&
            `${user.info.firstName} ${user.info.lastName}!`}
        </h1>
        <button className={style['edit-button']}>Edit Name</button>
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
          <button className={style['transaction-button']}>
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
          <button className={style['transaction-button']}>
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
          <button className={style['transaction-button']}>
            View transactions
          </button>
        </div>
      </section>
    </>
  )
}
