import { useLocation } from "react-router-dom";
import cls from "./Header.module.scss";
import Logo1 from "../../assets/logos/logo-1.svg?react";
import Logo2 from "../../assets/logos/logo-2.svg?react";
import Logo3 from "../../assets/logos/logo-3.svg?react";
import Logo4 from "../../assets/logos/logo-4.svg?react";
import MenuBars from "../../assets/icons/menu-bars.svg?react";
import StartProjectButton from "../StartProjectButton/StartProjectButton";
import { useEffect, useState } from "react";
import MobileMenu from "../../modals/MobileMenu/MobileMenu";

export default function Header() {
  const loadedLogoNumber = window.localStorage.getItem('logoNumber') || 1;

  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if ( (scrollTop > lastScroll) && (scrollTop > 370)) {
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

  console.log('loadedLogoNumber', loadedLogoNumber)

  const logosCount = 4;
  const [currentLogoNumber, setCurrentLogoNumber] = useState(Number(loadedLogoNumber));
  const [isLogoHovered, setIsLogoHovered] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLogoHovered(false);
    }, 2000);
  }, []);

  const handleChangelogo = () => {
    if(isLogoHovered === false){
      if(currentLogoNumber + 1 > logosCount) {
        setCurrentLogoNumber(1);
        window.localStorage.setItem('logoNumber', 1);
      } else {
        setCurrentLogoNumber(currentLogoNumber + 1);
        window.localStorage.setItem('logoNumber', currentLogoNumber + 1);
      }
      setIsLogoHovered(true);
    }
  }

  return (
      <header className={[cls.header, (isHidden && isMobileMenuOpen === false) && cls.hidden].join(' ')}>
        <div className="container">
          <div className={cls.content}>
            <a href='/' className={cls.logoLink} onMouseLeave={() => setIsLogoHovered(false)} onMouseEnter={() => handleChangelogo()}>
              {currentLogoNumber === 1 && <Logo1 className={cls.logoSVG} />}
              {currentLogoNumber === 2 && <Logo2 className={cls.logoSVG} />}
              {currentLogoNumber === 3 && <Logo3 className={cls.logoSVG} />}
              {currentLogoNumber === 4 && <Logo4 className={cls.logoSVG} />}
            </a>
            <StartProjectButton />
            {location.pathname === '/contacts' ? (
              <a className={cls.headerLink} href='/'>Главная</a>
            ) : (
              <a className={cls.headerLink} href='/contacts'>Контакты</a>
            )}
            <div className={cls.mobileMenuButton}>
              <MenuBars onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={[cls.menuBarsIcon, isMobileMenuOpen && cls.animateToCross].join(' ')}/>
            </div>
          </div>
        </div>

        <MobileMenu handleCloseMenu={() => setIsMobileMenuOpen(false)} isOpened={isMobileMenuOpen} />
      </header>
  )

}