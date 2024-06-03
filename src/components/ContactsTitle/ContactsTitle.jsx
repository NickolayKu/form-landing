import { Link } from "react-router-dom";
import cls from "./ContactsTitle.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

export default function ContContactsTitlects() {

  return (
    <div className={cls.contacts}>
      <ScrollAnimation animateIn="fadeInUp" offset={800} duration={0.6} animateOnce={true}>
        <h1>От вас желание, на нас реализация</h1>
      </ScrollAnimation>

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
