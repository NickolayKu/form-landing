import { Link } from "react-router-dom";
import FullscreenFeedback from "../../modals/FullscreenFeedback/FullscreenFeedback";
import cls from "./ContactsTitle.module.scss";
import { useState } from "react";

export default function ContContactsTitlects() {

  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <div className={cls.contacts}>
      <h1>От вас желание, на нас реализация</h1>

      <div className={cls.content}>
        <span onClick={() => setIsModalShowing(true)}>начать проект</span>
        <Link to="mailto:info@form.moscow">info@form.moscow</Link>
        <Link to="tel:89670049415">+ 7 967 004 94 15</Link>
      </div>

      <div className={cls.footer}>
        <div className={cls.linksBlock}>
          <Link target="_blank" rel="noopener noreferrer" to="/">
            Behance
          </Link>
          <Link target="_blank" rel="noopener noreferrer" to="/">
            Instagram
          </Link>
          <Link target="_blank" rel="noopener noreferrer" to="/">
            Telegram
          </Link>
          <Link target="_blank" rel="noopener noreferrer" to="/">
            Вконтакте
          </Link>
        </div>
      </div>

      <FullscreenFeedback handleCloseModal={() => setIsModalShowing(false)} isShowing={isModalShowing} />
    </div>
  );
}
