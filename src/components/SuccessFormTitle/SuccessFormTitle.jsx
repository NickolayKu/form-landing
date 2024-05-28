import cls from "./SuccessFormTitle.module.scss";
import Arrow from "../../assets/icons/arrow.svg?react";
import ScrollAnimation from "react-animate-on-scroll";

export default function SuccessFormTitle() {

  return (
    <div className={cls.successFormTitle}>
      <ScrollAnimation animateIn="fadeInUp" initiallyVisible={true} delay={0.2} duration={0.6} animateOnce={true}>
        <h1>Заявка успешно отправлена</h1>
      </ScrollAnimation>
      
      <a href="/form">
        <div className={cls.backButton}>
          <Arrow className={cls.arrowIcon} />
          заполнить еще раз
        </div>
      </a>
    </div>
  );
}