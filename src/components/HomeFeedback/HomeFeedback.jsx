import cls from "./HomeFeedback.module.scss";
import Feedback from "../../forms/Feedback/Feedback";

export default function HomeFeedback() {

  return (
    <div className="container">
      <h2 className={cls.h2}>Добро пожаловать</h2>

      <div className={cls.content}>
        <Feedback />
      </div>
    </div>
  )
}