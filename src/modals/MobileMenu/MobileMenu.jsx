/* eslint-disable react/prop-types */
import cls from "./MobileMenu.module.scss";
import { Link } from "react-router-dom";

export default function MobileMenu(props) {
  const { isOpened } = props;

  return (
    <div className={[cls.mobileMenu, isOpened && cls.opened].join(' ')}>
      <section>
        <div className={cls.content}>
          <div className={cls.modalBody}>
            <Link to='/form'>Начать проект</Link>
            <Link to='/contacts'>Контакты</Link>
          </div>
          <div className={cls.modalFooter}>
            <Link to='mailto:capsule.form@gmail.com'>capsule.form@gmail.com</Link>
            <Link to='tel:89670049415'>+ 7 967 004 94 15</Link>
          </div>
        </div>
      </section>
    </div>
  )
}