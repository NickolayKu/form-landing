import { Link } from "react-router-dom";
import cls from "./ContactsTitle.module.scss";
import { useEffect, useState } from "react";

export default function ContContactsTitlects() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={cls.contacts}>
      <h1 className={isLoaded ? cls.loaded : ""}>От вас желание, на нас реализация</h1>

      <div className={cls.content}>
        <a className={cls.formLink} href="/form">Начать проект</a>
        <Link to="mailto:capsule.form@gmail.com">capsule.form@gmail.com</Link>
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
        </div>
      </div>
    </div>
  );
}
