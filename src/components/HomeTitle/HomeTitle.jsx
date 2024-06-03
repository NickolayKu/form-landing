import ScrollAnimation from "react-animate-on-scroll";
import cls from "./HomeTitle.module.scss";
import { useEffect, useState } from "react";

export default function HomeTitle() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedTitle, setIsLoadedTitle] = useState(false);


  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => {
      setIsLoadedTitle(true);
    }, 700);
  }, []);

  return (
      <div className={cls.homeTitle}>
        <h1>
          <div className={[cls.formLogoImage, isLoadedTitle && cls.showing].join(' ')}></div>
          <div className={isLoaded ? cls.loaded : ""}>
            Креативная студия, создающая<br/>
            взаимодействие человека
          </div>
          <span className={[cls.titleSpan, isLoadedTitle && cls.showing].join(' ')}>
            <a href="/form">
              <div className={cls.animatedLink}>
                <span>с Вашим предложением</span>
                <span>с Вашим предложением</span>
              </div>
              <div className={cls.line}></div>
            </a>
            <div className={cls.formArrowImage}></div>
          </span>
        </h1>
      </div>
  )
}