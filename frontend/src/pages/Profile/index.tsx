import style from './style.module.scss'

import { useSelector } from 'react-redux'
import { selectToken } from '../../redux/selector'

export default function Profile() {
  const token = useSelector(selectToken)

  return <>token {token}</>
}
