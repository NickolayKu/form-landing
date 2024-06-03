import cls from "./FeedbackFormTitle.module.scss";
import Feedback from "../../forms/Feedback/Feedback";
import ScrollAnimation from "react-animate-on-scroll";

export default function FeedbackFormTitle() {

  return (
    <div className={cls.feedbackFormTitle}>
      <ScrollAnimation animateIn="fadeInUp" offset={800} initiallyVisible={true} delay={0.2} duration={0.6} animateOnce={true}>
        <h1>Добро пожаловать</h1>
      </ScrollAnimation>

      <div className={cls.content}>
        <Feedback margin={true}/>
      </div>
    </div>
  );
}