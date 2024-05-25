import { Link } from "react-router-dom";
import cls from "./Footer.module.scss";

export default function Footer() {

  return (
    <footer className={cls.footer}>
      <div className="container">
        <div className={cls.content}>
          <div className={cls.linksBlock}>
            <Link to='tel:89670049415'>+ 7 967 004 94 15</Link>
            <Link to='mailto:info@form.moscow'>info@form.moscow</Link>
          </div>
          <div className={cls.linksBlock}>
            <div className={cls.linksRow}>
              <Link target="_blank" rel="noopener noreferrer" to='/'>Behance</Link>
              <Link target="_blank" rel="noopener noreferrer" to='/'>Instagram</Link>
            </div>
            <div className={cls.linksRow}>
              <Link target="_blank" rel="noopener noreferrer" to='/'>Telegram</Link>
              <Link target="_blank" rel="noopener noreferrer" to='/'>Вконтакте</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}