/* eslint-disable react/prop-types */
import cls from "./MobileMenu.module.scss";
import CloseCross from "../../assets/icons/cross.svg?react";
import Logo from "../../assets/logo.svg?react";
import FullscreenFeedback from "../../modals/FullscreenFeedback/FullscreenFeedback";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MobileMenu(props) {
  const { handleCloseMenu, isOpened } = props;

  const [isModalShowing, setIsModalShowing] = useState(false);

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
            <span onClick={() => setIsModalShowing(true)}>Начать проект</span>
            <Link to='/contacts'>Контакты</Link>
          </div>
          <div className={cls.modalFooter}>
            <Link to='mailto:info@form.moscow'>info@form.moscow</Link>
            <Link to='tel:89670049415'>+ 7 967 004 94 15</Link>
          </div>
        </div>
      </section>

      <FullscreenFeedback handleCloseModal={() => setIsModalShowing(false)} isShowing={isModalShowing} />
    </div>
  )
}