/* eslint-disable react/prop-types */
import cls from "./MobileMenu.module.scss";
import CloseCross from "../../assets/icons/cross.svg?react";
import Logo from "../../assets/logo.svg?react";
import { Link } from "react-router-dom";

export default function MobileMenu(props) {
  const { handleCloseMenu, isOpened } = props;

  return (
    <div className={[cls.mobileMenu, isOpened && cls.opened].join(' ')}>
      <section>
        <div className={cls.content}>
          <div className={cls.modalHeader}>
            <Link to='/'>
              <Logo className={cls.logoSVG} />
            </Link>
            <div className={cls.closeButton} onClick={() => handleCloseMenu()}>
              <CloseCross className={cls.closeIcon}/>
            </div>
          </div>
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