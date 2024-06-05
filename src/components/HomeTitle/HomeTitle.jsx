import cls from "./HomeTitle.module.scss";
import { useEffect, useState } from "react";

export default function HomeTitle() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedTitle, setIsLoadedTitle] = useState(false);

  useEffect(() => {
    const userAgentString = window.navigator.userAgent;
    let isSafariAgent = userAgentString.indexOf("Safari") > -1;
    let isChromeAgent = userAgentString.indexOf("Chrome") > -1;
    if ((isChromeAgent) && (isSafariAgent)) isSafariAgent = false;

    setIsLoaded(true);
    if(isSafariAgent){
      setTimeout(() => {
        setIsLoadedTitle(true);
      }, 450);
    } else {
      setTimeout(() => {
        setIsLoadedTitle(true);
      }, 950);
    }
  }, []);

  return (
      <div className={cls.homeTitle}>
        <h1>
          <div className={[cls.formLogoImage, isLoadedTitle && cls.showing].join(' ')}></div>
          <div className={isLoaded ? cls.loaded : ""}>
            Креативная студия, создающая<br/>
            взаимодействие человека {' '}
            {window.screen.width <= 740 && (
              <>
                <a className={cls.mobileTitleLink} href="/form">с Вашим предложением</a>
                <div className={[cls.formArrowImage, isLoadedTitle && cls.showing].join(' ')}></div>
              </>
            )}
          </div>
          {window.screen.width > 740 && (
            <span className={[cls.titleSpan, isLoadedTitle && cls.showing].join(' ')}>
              <a href="/form">
                <div className={cls.animatedLink}>
                  <span>с Вашим предложением</span>
                  <span>с Вашим предложением</span>
                </div>
                <div className={cls.line}></div>
              </a>
              <div className={[cls.formArrowImage, cls.showing].join(' ')}></div>
            </span>
          )}
        </h1>
      </div>
  )
}