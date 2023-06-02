import style from './style.module.scss'

type params = {
  image: string
  alt: string
  title: string
  text: string
}

export default function Feature({ image, alt, title, text }: params) {
  return (
    <div className={style['feature-item']}>
      <img src={image} alt={alt} className={style['feature-icon']} />
      <h3 className={style['feature-item-title']}>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
