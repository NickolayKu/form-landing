import ScrollAnimation from "react-animate-on-scroll";
import cls from "./HomeTitle.module.scss";
import { useEffect, useState } from "react";

export default function HomeTitle() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 700);
  }, []);

  return (
      <div className={cls.homeTitle}>
        <h1>
          <div className={[cls.formLogoImage, isLoaded && cls.showing].join(' ')}></div>
          <ScrollAnimation animateIn="fadeInUp" offset={800} duration={1} animateOnce={true}>
            Креативная студия, создающая<br/>
            взаимодействие человека
          </ScrollAnimation>
          <span className={[cls.titleSpan, isLoaded && cls.showing].join(' ')}>
            <a href="/form">
              с Вашим предложением
              <div className={cls.line}></div>
            </a>
            <div className={cls.formArrowImage}></div>
          </span>
        </h1>
      </div>
  )
}