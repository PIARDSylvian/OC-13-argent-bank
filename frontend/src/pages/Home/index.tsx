import style from './style.module.scss'
import Feature from '../../components/Feature'
import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'

const features = [
  {
    image: iconChat,
    alt: 'priority',
    title: 'You are our #1 priority',
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    image: iconMoney,
    alt: 'money',
    title: 'More savings means higher rates',
    text: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    image: iconSecurity,
    alt: 'security',
    title: 'Security you can trust',
    text: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

export default function Home() {
  return (
    <>
      <div className={style.hero}>
        <section className={style['hero-content']}>
          <h2 className="sr-only">Promoted Content</h2>
          <p className={style.subtitle}>No fees.</p>
          <p className={style.subtitle}>No minimum deposit.</p>
          <p className={style.subtitle}>High interest rates.</p>
          <p className={style.text}>
            Open a savings account with Argent Bank today!
          </p>
        </section>
      </div>
      <section className={style.features}>
        <h2 className="sr-only">Features</h2>
        <Feature
          image={features[0].image}
          alt={features[0].alt}
          title={features[0].title}
          text={features[0].text}
        />
        <Feature
          image={features[1].image}
          alt={features[1].alt}
          title={features[1].title}
          text={features[1].text}
        />
        <Feature
          image={features[2].image}
          alt={features[2].alt}
          title={features[2].title}
          text={features[2].text}
        />
      </section>
    </>
  )
}
