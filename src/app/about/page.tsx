import { Article } from '@/components'
import styles from './about.module.css'

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.h2}>О нас</h2>
      <Article
        className={styles.section}
        quote={'Кто мы? Наши цели'}
        description={`Csa-servis – это специализированное предприятие,
          занимающееся ремонтом и техническим обслуживанием автомобилей
          различных марок и моделей, а так же всех видов трансмиссий.
          Это место, куда владельцы автомобилей обращаются,
          чтобы получить профессиональную помощь в решении любых проблем,
          связанных с их автомобилями. Основная цель нашего сервиса – обеспечить 
          безопасность и надежность работы автомобиля, а также продлить его срок службы.
          В csa-servis работают специалисты, хорошо знакомые со всеми аспектами автомобильной техники, от механики и
          электрики до электроники и диагностики. Они имеют необходимые знания и опыт,
          чтобы быстро и качественно провести любые виды ремонтных и обслуживающих работ.`}
        src={'/about-car-1920.jpg'}
      />
      <Article
        className={styles.section}
        quote={'Что мы умеем? Наши преимущества.'}
        description={`Сsa-servis обладает особыми видами оборудования и инструментов,
          которые необходимы для проведения сложных и точных работ.
          Это включает в себя подъемники и стенды для диагностики автомобилей,
          специальные инструменты для ремонта двигателя, а также программное
          обеспечение для анализа ошибок автомобильной электроники.
          Мы можем предложить своим клиентам широкий спектр услуг,
          включая техническое обслуживание, замену масла, ремонт и замену
          деталей, проведение диагностики и многое другое.
          Одна из важных особенностей csa-servis — возможность получить гарантию
          на проделанные работы и использованные запчасти.
          Таким образом, csa-servis – это незаменимое место для владельцев
          автомобилей, которые ценят безопасность и надежность своего
          транспортного средства. Здесь работают высококвалифицированные специалисты,
          используются современное оборудование и инструменты,
          а также предоставляется широкий спектр услуг.`}
        src={'/about-car-1920-2.jpg'}
        isReverse={true}
      />

    </section>
  )
}