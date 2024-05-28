import { Link, useLocation } from "react-router-dom";
import cls from "./Header.module.scss";
import Logo from "../../assets/logo.svg?react";
import MenuBars from "../../assets/icons/menu-bars.svg?react";
import StartProjectButton from "../StartProjectButton/StartProjectButton";
import { useEffect, useState } from "react";
import MobileMenu from "../../modals/MobileMenu/MobileMenu";

export default function Header() {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScroll) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScroll = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
      <header className={[cls.header, isHidden && cls.hidden].join(' ')}>
        <div className="container">
          <div className={cls.content}>
            <a href='/'>
              <Logo className={cls.logoSVG} />
            </a>
            <StartProjectButton />
            {location.pathname === '/contacts' ? (
              <a className={cls.headerLink} href='/'>Главная</a>
            ) : (
              <a className={cls.headerLink} href='/contacts'>Контакты</a>
            )}
            <div className={cls.mobileMenuButton}>
              <MenuBars onClick={() => setIsMobileMenuOpen(true)} className={cls.menuBarsIcon}/>
            </div>
          </div>
        </div>

        <MobileMenu handleCloseMenu={() => setIsMobileMenuOpen(false)} isOpened={isMobileMenuOpen} />
      </header>
  )

}