import cls from "./PortfolioMagmaContent.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import Union2 from "../../assets/union-2.svg?react";

export default function PortfolioMagmaContent() {

  return (
    <div className={cls.content}> 
      <div className={cls.photosBlock}>
        <img src="/images/magma-photos-group-1.png" />
        <img src="/images/magma-photos-group-2.png" />
      </div>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <span>
          Magma Architecture – московское архитектурное бюро, ориентированное на изучение поэтического потенциала архитектуры и совершенство дизайна.
        </span>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className={cls.unionsBlock}>
          <div className={cls.union}>
            <img src="/images/magma-union-1.png" />
          </div>
          <div className={cls.union}>
            <Union2 className={cls.unionSVG} />
          </div>
          <div className={cls.union}>
            <img src="/images/magma-union-3.png" />
          </div>
        </div>
      </ScrollAnimation>
        <img className={cls.boardImage} src="/images/magma-board.jpg" />
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <span>
        В основу логотипа Magma заложен образ римского акведука, выполняющий как практическую, так и эстетическую функцию. В аркадный ряд заложены прочность, качество и долговечность - основные принципы Magma Architecture.
        </span>
      </ScrollAnimation>
        <img className={cls.screenImage} src="/images/magma-screen-1.png" />
        <img className={cls.photosGroupImage} src="/images/magma-photos-group-3.png" />
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <span>
          Magma Architecture – московское архитектурное бюро, ориентированное на изучение поэтического потенциала архитектуры и совершенство дизайна.
        </span>
      </ScrollAnimation>
      <img className={cls.screenImage} src="/images/magma-screen-2.png" />
      <img className={cls.screenImage} src="/images/magma-screen-3.png" />
      <img className={cls.screenImage} src="/images/magma-screen-4.png" />
    </div>
  );
}