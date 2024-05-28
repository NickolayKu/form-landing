import cls from "./StartProjectButton.module.scss";
import { Link } from "react-router-dom";

export default function StartProjectButton() {

  return (
    <Link to='/form'>
      <div className={cls.startProjectButton}>
        <span>
          Начать проект
        </span>
        <div className={cls.line}></div>
      </div>
    </Link>
  )
}