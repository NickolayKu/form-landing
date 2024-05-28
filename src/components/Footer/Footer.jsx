/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import cls from "./Footer.module.scss";

export default function Footer(props) {
  const { isFixed = false } = props;

  return (
    <footer className={[cls.footer, isFixed && cls.fixed].join(' ')}>
      <div className="container">
        <div className={cls.content}>
          <div className={cls.linksBlock}>
            <Link to='mailto:capsule.form@gmail.com'>capsule.form@gmail.com</Link>
            <Link className={cls.phonelink} to='tel:89670049415'>+ 7 967 004 94 15</Link>
          </div>
          <div className={cls.linksBlock}>
            <div className={cls.linksRow}>
              <Link target="_blank" rel="noopener noreferrer" to='/'>Behance</Link>
              <Link target="_blank" rel="noopener noreferrer" to='/'>Instagram</Link>
            </div>
            <div className={cls.linksRow}>
              <Link target="_blank" rel="noopener noreferrer" to='/'>Telegram</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}