import cls from "./ServicesDirections.module.scss";
import ServiceCard from "../ServiceCard/ServiceCard";
import ScrollAnimation from "react-animate-on-scroll";

export default function ServicesDirections() {

  const servicesCards = [
    {
      title: 'Стратегия',
      text: 'Выявляем возможности для роста вашего бренда и разрабатываем сильные стратегии, обеспечивающие достижение поставленных задач.',
    },
    {
      title: 'брендинг',
      text: 'Помогаем разработать уникальный бренд, который отражает вашу идентичность, привлекает внимание и укрепляет взаимодействие с аудиторией.',
    },
    {
      title: 'веб-разработка',
      text: 'Предлагаем полный цикл разработки: от концепции и запуска до поддержки. Создаем современные сайты, сочетая креативный дизайн с передовыми технологиями.',
    },
    {
      title: 'дизайн',
      text: 'Специализируемся на создании комплексных дизайн-решений, которые вдохновляют и обеспечивают оптимальное взаимодействие пользователей с вашим продуктом.',
    },
    {
      title: 'продакшн',
      text: 'Обеспечиваем полный цикл создания контента и адаптации под различные платформы. Делаем продукты красивыми и функциональными на всех уровнях.',
    },
    {
      title: 'реклама',
      text: 'Разрабатываем стратегии цифрового маркетинга, управляем контекстной рекламой и анализируем результаты, чтобы обеспечить максимальную отдачу от вложенных средств. ',
    },
  ]

  return (
    <div className="container">
      <ScrollAnimation animateIn="fadeInUp" duration={0.6} animateOnce={true}>
        <h2 className={cls.h2}>Направления услуг</h2>
      </ScrollAnimation>

      <div className={cls.servicesDirections}>
        {servicesCards.map((item, index) => {
          return <ServiceCard key={index} number={index + 1} title={item.title} text={item.text}/>
        })}
      </div>
    </div>
  )
}