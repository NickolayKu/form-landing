import ScrollAnimation from "react-animate-on-scroll";
import cls from "./HomeTitle.module.scss";

export default function HomeTitle() {

  return (
      <div className={cls.homeTitle}>
        <h1>
          <div className={cls.formLogoImage}></div>
          <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
            Креативная студия, создающая<br/>
            взаимодействие человека
          </ScrollAnimation>
          <span>
            <a href="/form">
              с Вашим предложением
              <div className={cls.line}></div>
            </a>
            <div className={cls.formThingImage}></div>
            <div className={cls.formArrowImage}></div>
          </span>
        </h1>
      </div>
  )
}