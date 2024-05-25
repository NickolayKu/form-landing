import cls from "./ServicesDirections.module.scss";
import ServiceCard from "../ServiceCard/ServiceCard";

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
      <h2 className={cls.h2}>Направления услуг</h2>

      <div className={cls.servicesDirections}>
        {servicesCards.map((item, index) => {
          return <ServiceCard key={index} number={index + 1} title={item.title} text={item.text}/>
        })}
      </div>
    </div>
  )
}