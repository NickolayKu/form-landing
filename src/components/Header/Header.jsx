import { Link, useLocation } from "react-router-dom";
import cls from "./Header.module.scss";
import Logo from "../../assets/logo.svg?react";
import MenuBars from "../../assets/icons/menu-bars.svg?react";
import StartProjectButton from "../StartProjectButton/StartProjectButton";
import { useEffect, useState } from "react";

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

  return (
      <header className={[cls.header, isHidden && cls.hidden].join(' ')}>
        <div className="container">
          <div className={cls.content}>
            <Link to='/'>
              <Logo className={cls.logoSVG} />
            </Link>
            <StartProjectButton />
            {location.pathname === '/contacts' ? (
              <Link className={cls.headerLink} to='/'>Главная</Link>
            ) : (
              <Link className={cls.headerLink} to='/contacts'>Контакты</Link>
            )}
            <div className={cls.mobileMenuButton}>
              <MenuBars onClick={() => setIsMobileMenuOpen(true)} className={cls.menuBarsIcon}/>
            </div>
          </div>
        </div>
      </header>
  )

}