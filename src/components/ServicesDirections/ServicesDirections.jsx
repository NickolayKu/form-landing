import cls from "./ServicesDirections.module.scss";
import ServiceCard from "../ServiceCard/ServiceCard";
import ScrollAnimation from "react-animate-on-scroll";

export default function ServicesDirections() {

  const servicesCards = [
    {
      title: 'Стратегия',
      text: 'Общий, недетализированный план, охватывающий длительный период времени, способ достижения сложной',
    },
    {
      title: 'Стратегия',
      text: 'Общий, недетализированный план, охватывающий длительный период времени, способ достижения сложной',
    },
    {
      title: 'Стратегия',
      text: 'Общий, недетализированный план, охватывающий длительный период времени, способ достижения сложной',
    },
    {
      title: 'Стратегия',
      text: 'Общий, недетализированный план, охватывающий длительный период времени, способ достижения сложной',
    },
    {
      title: 'Стратегия',
      text: 'Общий, недетализированный план, охватывающий длительный период времени, способ достижения сложной',
    },
    {
      title: 'Стратегия',
      text: 'Общий, недетализированный план, охватывающий длительный период времени, способ достижения сложной',
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