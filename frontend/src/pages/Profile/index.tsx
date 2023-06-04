import style from './style.module.scss'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectToken } from '../../redux/selector'

export default function Profile() {
  const token = useSelector(selectToken)
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [navigate, token])

  return <>token {token}</>
}
