import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

export default function Error() {
  useEffect(() => {
    document.title = '404 - ArgentBank'
  }, [])

  return (
    <section className={style['error-content']}>
      <h1>404 - Une erreur c'est produite</h1>
      <Link className={style['main-nav-logo']} to="/">
        Retour a l'acceuil
      </Link>
    </section>
  )
}
