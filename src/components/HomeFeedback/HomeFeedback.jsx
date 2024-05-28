import cls from "./HomeFeedback.module.scss";
import Feedback from "../../forms/Feedback/Feedback";
import ScrollAnimation from "react-animate-on-scroll";

export default function HomeFeedback() {

  return (
    <div className="container">
      <ScrollAnimation animateIn="fadeInUp" duration={0.6} animateOnce={true}>
        <h2 className={cls.h2}>Добро пожаловать</h2>
      </ScrollAnimation>

      <div className={cls.content}>
        <Feedback />
      </div>
    </div>
  )
}