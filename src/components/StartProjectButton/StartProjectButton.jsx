//import { Link } from "react-router-dom";
import { useState } from "react";
import FullscreenFeedback from "../../modals/FullscreenFeedback/FullscreenFeedback";
import cls from "./StartProjectButton.module.scss";

export default function StartProjectButton() {

  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <>
      <div className={cls.startProjectButton} onClick={() => setIsModalShowing(true)}>
        <span>
          Начать проект
        </span>
        <div className={cls.line}></div>
      </div>

      <FullscreenFeedback handleCloseModal={() => setIsModalShowing(false)} isShowing={isModalShowing} />
    </>
  )
}